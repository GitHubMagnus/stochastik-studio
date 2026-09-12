const {test,before,after}=require('node:test');
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const {createServer}=require('../.server.js');
const fs=require('node:fs');
const glossaryCount=require('../finance-glossary.cjs').length;
let browser,server,url;
before(async()=>{
 server=createServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));url='http://127.0.0.1:'+server.address().port;
 browser=await chromium.launch({headless:true,...(process.env.BROWSER_CHANNEL?{channel:process.env.BROWSER_CHANNEL}:{})});
});
after(async()=>{await browser?.close();if(server)await new Promise(r=>server.close(r));});
async function open(t){
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 // Deterministic randomness keeps simulations repeatable without trivial constant samples.
 await page.addInitScript(()=>{let seed=1947;Math.random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};});
 await page.goto(url+'/#bayes');t.after(async()=>{assert.deepEqual(errors,[]);await page.close();});return page;
}
const show=(page,id)=>page.locator('.nav-item[data-page="'+id+'"]').evaluate(e=>e.click());
const value=(page,id,v)=>page.locator('#'+id).evaluate((e,v)=>{e.value=String(v);e.dispatchEvent(new Event('input',{bubbles:true}));e.dispatchEvent(new Event('change',{bubbles:true}));e.blur();},v);
const text=(page,id)=>page.locator('#'+id).textContent();
const number=async(page,id)=>Number((await text(page,id)).replace(',','.').replace(' %',''));

test('Duration derivations, comparison graphics, formula focus and frequency controls work',async t=>{
 const page=await open(t);await page.goto(url+'/#lesson-bonds-08');
 await page.locator('.study-jumps a[href$="~derivations"]').click();
 await page.waitForFunction(()=>document.activeElement.id==='study-derivations');
 await page.locator('.deep-map a[href$="~derivation-2"]').click();
 await page.waitForFunction(()=>document.activeElement.id==='study-derivation-2');
 assert.equal(await page.locator('.deep-section').count(),10);
 assert.equal(await page.locator('.deep-comparison').count(),5);
 assert.equal(await page.locator('.deep-figure svg').count(),2);
 fs.mkdirSync('test-results',{recursive:true});
 await page.locator('#study-derivation-2').screenshot({path:'test-results/duration-derivation.png'});
 await page.locator('.deep-figure').first().screenshot({path:'test-results/duration-maturity.png'});
 await page.locator('.deep-figure').nth(1).screenshot({path:'test-results/duration-convexity.png'});
 await page.locator('[data-key="m"]').fill('2');await page.locator('[data-key="n"]').fill('10');
 assert.equal(await page.locator('#lab-error').isVisible(),false);
 assert.match(await page.locator('#lab-results').innerText(),/Macaulay Duration/);
 assert.match(await page.locator('#lab-results').innerText(),/DV01/);
 await page.locator('#study-lab').screenshot({path:'test-results/duration-lab.png'});
 await page.setViewportSize({width:390,height:844});
 await page.goto(url+'/#lesson-bonds-08~derivation-2');
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 await page.screenshot({path:'test-results/duration-mobile.png'});
});

test('all 33 desktop chapters: every preset, numeric boundary, toggle and canvas renders',async t=>{
 const page=await open(t);
 const audit=await page.evaluate(()=>{
  const failures=[];let actions=0;
  function check(label){
   const p=document.querySelector('.viewpage.active');
   if(/NaN|Infinity/.test(p.innerText))failures.push(label+': invalid result');
   if([...p.querySelectorAll('svg *')].some(e=>[...e.attributes].some(a=>/NaN|Infinity/.test(a.value))))failures.push(label+': invalid SVG');
   if(document.documentElement.scrollWidth>innerWidth+1)failures.push(label+': desktop overflow');
  }
  const navs=[...document.querySelectorAll('.nav-item[data-page]')];
  for(const nav of navs){
   nav.click();const p=document.querySelector('.viewpage.active');check(nav.dataset.page);
   for(const button of p.querySelectorAll('button')){button.click();actions++;check(button.id||button.textContent);}
   for(const el of p.querySelectorAll('input[type=range]')){
    const initial=el.value;
    for(const v of [el.min,el.max,initial]){el.value=v;el.dispatchEvent(new Event('input',{bubbles:true}));actions++;check(el.id+'='+v);}
   }
   for(const el of p.querySelectorAll('input[type=number]')){
    const initial=el.value;
    for(const v of ['-1','1.37','1e100','',initial]){
     el.value=v;el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));el.dispatchEvent(new Event('blur'));actions++;check(el.id+'='+v);
    }
   }
   for(const el of p.querySelectorAll('input[type=checkbox]')){el.checked=!el.checked;el.dispatchEvent(new Event('change',{bubbles:true}));actions++;check(el.id);}
   for(const cv of p.querySelectorAll('canvas'))if(cv.offsetParent!==null&&(!cv.width||!cv.height))failures.push(nav.dataset.page+': empty canvas');
  }
  return {chapters:navs.length,actions,failures};
 });
 assert.equal(audit.chapters,33);assert.ok(audit.actions>=700);assert.deepEqual(audit.failures,[]);t.diagnostic(JSON.stringify(audit));
});
test('paired controls clamp, round and preserve fitted OLS coefficients on blur',async t=>{
 const page=await open(t);await value(page,'npopN',1234.7);
 assert.equal(await page.locator('#npop').inputValue(),'1200');assert.equal(await page.locator('#npopN').inputValue(),'1200');
 await show(page,'weitere');assert.equal(await page.locator('#wvP1').inputValue(),'0.17');
 await show(page,'lln');await page.locator('#lPresets .chip').nth(1).click();assert.equal(await page.locator('#p').inputValue(),'0.1667');
 await show(page,'ols');await page.locator('#olsFit').click();const before=await text(page,'olsSSR');
 await page.locator('#olsAN').focus();await page.locator('#olsBN').focus();await page.locator('#olsBN').evaluate(e=>e.blur());
 assert.equal(await text(page,'olsSSR'),before);assert.equal(await text(page,'olsMin'),before);assert.ok(Math.abs(await number(page,'olsSum'))<0.01);
});
test('Bayes distinguishes exact probabilities and rounded people',async t=>{
 const page=await open(t);await value(page,'prevN',0.1);await value(page,'sensN',50);await value(page,'specN',100);
 assert.equal(await number(page,'posterior'),100);assert.match(await text(page,'fnote'),/gerundet/);
 assert.match(await text(page,'heroEq'),/gerundeten Beispiel/);
});
test('distribution values agree with analytical examples',async t=>{
 const page=await open(t);
 await show(page,'binom');assert.equal(await number(page,'biBig'),24.6);
 await show(page,'poisson');await value(page,'pkN',30);assert.match(await text(page,'poEq'),/X = 30/);
 await show(page,'zufall');assert.equal(await number(page,'zE'),3.5);assert.equal(await number(page,'zVar'),2.92);
 await show(page,'clt');assert.equal(await number(page,'cltMu'),0.5);assert.equal(await number(page,'cltSd'),0.289);
 await page.locator('#cltPresets [data-s="dice"]').click();assert.equal(await number(page,'cltMu'),0.583);
 await show(page,'hypothese');await value(page,'hZN',-2);assert.equal(await number(page,'hP'),4.6);
 await page.locator('#hTwo').uncheck({force:true});assert.equal(await number(page,'hP'),97.7);
 await show(page,'ttest');await page.locator('#ttPresets .chip').last().click();assert.equal(await number(page,'ttD'),0.17);assert.equal(await number(page,'ttBig'),1.9);
});
test('Wilson interval and likelihood remain meaningful at zero/all successes',async t=>{
 const page=await open(t);await show(page,'schaetzen');await value(page,'mlNN',5);await value(page,'mlPhatN',0.02);
 assert.equal(await number(page,'mlHat'),0);assert.equal(await text(page,'mlCI'),'0,000 bis 0,434');
 await page.locator('#mlLog').check({force:true});await value(page,'mlPhatN',0.98);
 assert.equal(await number(page,'mlHat'),1);assert.equal(await text(page,'mlCI'),'0,566 bis 1,000');
});
test('chi-square omits empty categories and rejects degenerate tables',async t=>{
 const page=await open(t);await show(page,'chiquadrat');
 await value(page,'cq20',0);await value(page,'cq21',0);assert.equal(await text(page,'cqDf'),'1');
 for(const id of ['cq00','cq01','cq10','cq11'])await value(page,id,0);
 assert.equal(await text(page,'cqBig'),'nicht definiert');assert.equal(await text(page,'cqV'),'—');
});
test('Markov separates slow convergence, periodicity and nonunique stationarity',async t=>{
 const page=await open(t);await show(page,'markov');assert.equal(await text(page,'mkPi2'),'0,185');
 const time=await text(page,'mkBig');await page.locator('#mkStart [data-i="-1"]').click();assert.equal(await text(page,'mkBig'),time);
 await page.locator('#mkPresets [data-k="zyklisch"]').click();assert.equal(await text(page,'mkBig'),'∞');
 await page.locator('#mkStart [data-i="-1"]').click();assert.equal(await text(page,'mkBig'),'∞');
 async function matrix(P){for(let i=0;i<3;i++)for(let j=0;j<3;j++)await value(page,'mkP'+i+j,P[i][j]);}
 await matrix([[1,0,0],[0,1,0],[0,0,1]]);assert.equal(await text(page,'mkBig'),'nicht eindeutig');
 await matrix([[.9999,.00005,.00005],[.00005,.9999,.00005],[.00005,.00005,.9999]]);assert.equal(await text(page,'mkBig'),'> 400');
 await matrix([[1,0,0],[.5,.5,0],[0,.5,.5]]);assert.equal(await text(page,'mkPi0'),'1,000');assert.notEqual(await text(page,'mkBig'),'∞');
});
test('simulation lifecycle: start, pause, resume, reset, completion and chapter changes',async t=>{
 const page=await open(t);
 for(const config of [
  {chapter:'bayes',start:'montyStart',reset:'montyReset',count:'montyGames'},
  {chapter:'lln',start:'lStart',reset:'lReset',count:'lThrows'},
  {chapter:'clt',start:'cltStart',reset:'cltReset',count:'cltSamples'}]){
  await show(page,config.chapter);await page.locator('#'+config.start).click();
  await page.waitForFunction(id=>document.getElementById(id).textContent!=='0',config.count);
  await page.locator('#'+config.start).click();const count=await text(page,config.count);
  await page.waitForTimeout(80);assert.equal(await text(page,config.count),count);
  await page.locator('#'+config.start).click();await show(page,'normal');const hidden=await text(page,config.count);
  await page.waitForTimeout(80);assert.equal(await text(page,config.count),hidden);
  await show(page,config.chapter);await page.locator('#'+config.reset).click();assert.equal(await text(page,config.count),'0');
  await page.locator('#'+config.start).click();await page.waitForFunction(id=>document.getElementById(id).textContent==='Nochmal',config.start);
  await page.locator('#'+config.start).click();assert.equal(await text(page,config.start),'Pause');
  await page.locator('#'+config.reset).click();
 }
 await show(page,'bootstrap');await page.locator('#bsRun').click();assert.ok(await number(page,'bsSe')>0);
 await page.locator('#bsStat .chip').nth(1).click();assert.equal(await text(page,'bsSe'),'–');
 await page.locator('#bsRun').click();assert.ok(await number(page,'bsSe')>0);
});
test('module navigation, learning order and Kelly integration preserve state',async t=>{
 const page=await open(t);await page.goto(url);
 assert.equal(await page.locator('.viewpage.active').getAttribute('id'),'page-home');
 await page.locator('.module-card[data-open="stochastik"]').click();
 assert.equal(await page.locator('#stochastik-module').getAttribute('open'),'');
 const ids=await page.locator('.nav-item[data-page]').evaluateAll(ns=>ns.map(n=>n.dataset.page));
 assert.equal(new Set(ids).size,33);assert.equal(ids[0],'deskriptiv');assert.equal(ids.at(-1),'rwalk');
 const links=await page.locator('.learning-path [data-open]').evaluateAll(ns=>ns.map(n=>n.dataset.open));
 assert.deepEqual(links,ids);
 await page.locator('#stochastik-module > summary').click();assert.equal(await page.locator('#stochastik-module').getAttribute('open'),null);
 await page.locator('#stochastik-module > summary').focus();await page.keyboard.press('Enter');
 assert.equal(await page.locator('#stochastik-module').getAttribute('open'),'');
 await page.locator('.learning-path [data-open="deskriptiv"]').click();
 assert.equal(await page.locator('.nav-item[aria-current="page"]').getAttribute('data-page'),'deskriptiv');
 await page.locator('.module-link[data-open="kelly"]').click();
 const frame=page.frameLocator('#kelly-frame');await frame.locator('#capital').waitFor();
 assert.equal(await page.locator('#stochastik-module').getAttribute('open'),null);
 await frame.locator('#capital').fill('250000');
 assert.ok((await frame.locator('#b-results').innerText()).length>30);
 await frame.locator('[data-tab="scenario"]').click();await frame.locator('#view-scenario').waitFor({state:'visible'});
 const rows=await frame.locator('#scenario-rows tr').count();await frame.locator('#add-scenario').click();
 assert.equal(await frame.locator('#scenario-rows tr').count(),rows+1);
 await frame.locator('[data-tab="portfolio"]').click();await frame.locator('#view-portfolio').waitFor({state:'visible'});
 assert.ok((await frame.locator('#p-results').innerText()).length>30);
 await frame.locator('[data-tab="learn"]').click();await frame.locator('#view-learn').waitFor({state:'visible'});
 await page.locator('#stochastik-module > summary').click();await page.locator('.learning-path [data-open="bayes"]').click();
 await page.locator('.module-link[data-open="kelly"]').click();
 await frame.locator('[data-tab="binary"]').click();assert.equal(await frame.locator('#capital').inputValue(),'250000');
 await frame.locator('#sim-periods').fill('10');await frame.locator('#simulate').click();await frame.locator('#sim-results').waitFor({state:'visible'});
 await page.goBack();assert.equal(await page.locator('.viewpage.active').getAttribute('id'),'page-bayes');
 await page.goForward();assert.equal(await page.locator('.viewpage.active').getAttribute('id'),'page-kelly');
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 fs.mkdirSync('test-results',{recursive:true});
 await frame.locator('body').evaluate(()=>window.scrollTo(0,0));await page.evaluate(()=>window.scrollTo(0,0));
 await page.screenshot({path:'test-results/studio-kelly.png'});
 await page.locator('.home-link').click();await page.screenshot({path:'test-results/studio-home.png'});
 await page.locator('.module-card[data-open="stochastik"]').click();
 assert.equal(await page.locator('.module-link').evaluate(e=>{const r=e.getBoundingClientRect();return r.top>=0&&r.bottom<=innerHeight;}),true);
 await page.screenshot({path:'test-results/studio-learning-path.png'});
});
test('all 1034 exercises expose inputs, separate hints and solutions, valid links and usable mobile math',async t=>{
 const page=await open(t);await page.goto(url+'/#lesson-bonds-08');
 const audit=await page.evaluate(async()=>{
  const failures=[];let exercises=0,formulaPanels=0;
  for(const l of FinanceStudy.lessons){
   FinanceStudy.render('lesson-'+l.id);await new Promise(requestAnimationFrame);
   const root=document.getElementById('study-question'),cards=[...root.querySelectorAll('.question-card')];
   if(cards.length!==l.questions.length)failures.push(l.id+': missing exercises');
   cards.forEach((card,i)=>{
    const q=l.questions[i];exercises++;
    const hint=card.querySelector('.question-hint'),solution=card.querySelector('.question-solution');
    if(hint.open||solution.open)failures.push(q.id+': premature disclosure');
    if(!card.querySelector('h3').textContent.trim())failures.push(q.id+': missing prompt');
    hint.open=true;if(solution.open)failures.push(q.id+': hint revealed answer');hint.open=false;
    solution.open=true;
    if(solution.querySelectorAll('.question-steps > li').length!==q.steps.length)failures.push(q.id+': missing steps');
    const m=solution.querySelectorAll('.study-equation math').length;formulaPanels+=m;
    if(m!==q.steps.filter(s=>s.mathml).length)failures.push(q.id+': missing formula');
    if(!document.getElementById('study-'+q.focus))failures.push(q.id+': explanation anchor missing');
    if(q.givenTable&&card.querySelectorAll('.question-givens tbody tr').length!==q.givenTable.rows.length)failures.push(q.id+': inputs missing');
    for(const a of card.querySelectorAll('.term-link'))if(!FinanceStudy.resolveGlossary(a.hash.slice(1)))failures.push(q.id+': bad definition');
    solution.open=false;
   });
  }
  return {exercises,formulaPanels,failures};
 });
 assert.equal(audit.exercises,1034);assert.equal(audit.formulaPanels,544);assert.deepEqual(audit.failures,[]);t.diagnostic(JSON.stringify(audit));
 await page.setViewportSize({width:390,height:844});
 const mobile=await page.evaluate(async()=>{
  const failures=[];
  for(const l of FinanceStudy.lessons){
   FinanceStudy.render('lesson-'+l.id);document.querySelectorAll('#study-question details').forEach(d=>d.open=true);await new Promise(requestAnimationFrame);
   if(document.documentElement.scrollWidth>innerWidth+1)failures.push(l.id+': page overflow with open answers');
   for(const c of document.querySelectorAll('.question-card'))if(c.getBoundingClientRect().width>innerWidth)failures.push(c.id+': card overflow');
  }
  return failures;
 });
 assert.deepEqual(mobile,[]);
 await page.goto(url+'/#lesson-bonds-08~question-07');await page.waitForFunction(()=>document.activeElement.id==='study-question-07');
 await page.locator('#study-question-07 .question-solution > summary').click();
 fs.mkdirSync('test-results',{recursive:true});await page.locator('#study-question-07').screenshot({path:'test-results/duration-exercise-mobile.png'});
});

test('exercise filter, keyboard disclosure, direct links and self-assessment survive navigation and reload',async t=>{
 const page=await open(t);await page.goto(url+'/#lesson-bonds-08~question');
 assert.equal(await page.locator('.question-card').count(),14);
 await page.locator('#question-filter').selectOption('Grundlagen');assert.equal(await page.locator('.question-card:visible').count(),2);
 await page.evaluate(()=>{location.hash='lesson-bonds-08~question-07';});await page.waitForFunction(()=>document.activeElement.id==='study-question-07');
 assert.equal(await page.locator('#question-filter').inputValue(),'');assert.equal(await page.locator('#study-question-07').isVisible(),true);
 const hint=page.locator('#study-question-07 .question-hint'),solution=page.locator('#study-question-07 .question-solution');
 await hint.locator('summary').focus();await page.keyboard.press('Enter');assert.equal(await hint.getAttribute('open'),'');assert.equal(await solution.getAttribute('open'),null);
 await solution.locator('summary').click();assert.equal(await solution.locator('.study-equation math').count(),3);
 const check=page.locator('[data-question-check="bonds-08-07"]');await check.check();assert.match(await page.locator('#question-progress').innerText(),/1 von 14/);
 await page.reload();assert.equal(await check.isChecked(),true);assert.equal(await solution.getAttribute('open'),null);
 await page.goto(url+'/#lesson-equity-08~question');assert.match(await page.locator('#question-progress').innerText(),/0 von 6/);
 await page.goto(url+'/#lesson-bonds-08~question-07');assert.equal(await check.isChecked(),true);await check.uncheck();
 await hint.locator('summary').click();await solution.locator('summary').click();await page.locator('#questions-close').click();assert.equal(await page.locator('#study-question details[open]').count(),0);
 await page.locator('#question-filter').selectOption('Anwendung');assert.equal(await page.locator('.question-card:visible').count(),2);
 await page.locator('#question-filter').selectOption('Vertiefung');assert.equal(await page.locator('.question-card:visible').count(),10);
 await page.locator('#question-filter').selectOption('');
 await page.locator('#study-question-08 .question-solution > summary').click();await page.locator('#study-question-08').screenshot({path:'test-results/duration-exercise-desktop.png'});
 await page.locator('#study-question-08 .question-backlink a').click();await page.waitForFunction(()=>document.activeElement.id==='study-derivation-8');
 const {pathToFileURL}=require('node:url');await page.goto(pathToFileURL(require('node:path').resolve('index.html')).href+'#lesson-bonds-08~question-11');
 await page.locator('#study-question-11 .question-solution > summary').click();assert.equal(await page.locator('#study-question-11 .study-equation math').count(),3);
});

test('exercise practice remains usable with damaged or unavailable browser storage',async t=>{
 const page=await open(t);await page.goto(url+'/#lesson-bonds-08~question');
 await page.evaluate(()=>localStorage.setItem('studio-finance-exercises-v1','invalid json'));await page.reload();
 assert.match(await page.locator('#question-progress').innerText(),/0 von 14/);
 await page.addInitScript(()=>Object.defineProperty(window,'localStorage',{get(){throw new DOMException('Storage unavailable','SecurityError');}}));
 await page.reload();await page.locator('[data-question-check="bonds-08-01"]').check();assert.match(await page.locator('#question-progress').innerText(),/1 von 14/);
 await page.locator('#study-question-01 .question-solution > summary').click();assert.equal(await page.locator('#study-question-01 .question-solution').getAttribute('open'),'');
});

test('Finance overview exposes all chapters, filters and sidebar navigation',async t=>{
 const page=await open(t);await page.goto(url);
 await page.locator('.finance-card').click();
 assert.equal(await page.locator('.viewpage.active').getAttribute('id'),'page-finance');
 assert.equal(await page.locator('#stochastik-module').getAttribute('open'),null);
 assert.equal(await page.locator('.finance-topic').count(),16);
 assert.equal(await page.locator('.finance-subgroup li').count(),171);
 assert.equal(await page.locator('.finance-topic[data-kind="Kernbereich"]').count(),10);
 assert.equal(await page.locator('.finance-topic[data-kind="Wahlpfad"]').count(),3);
 assert.equal(await page.locator('.finance-topic .eq,.finance-topic canvas,.finance-topic iframe').count(),0);
 await page.locator('#finance-expand').click();assert.equal(await page.locator('.finance-topic[open]').count(),16);
 await page.locator('#finance-collapse').click();assert.equal(await page.locator('.finance-topic[open]').count(),0);
 await page.locator('#finance-search').fill('Duration');
 assert.equal(await page.locator('.finance-topic:not([hidden])').count(),1);
 assert.match(await page.locator('.finance-subgroup li:not([hidden])').innerText(),/Duration/);
 await page.locator('#finance-filter').selectOption('Wahlpfad');assert.equal(await page.locator('#finance-empty').isVisible(),true);
 await page.locator('#finance-search').fill('');assert.equal(await page.locator('.finance-topic:not([hidden])').count(),3);
 await page.locator('[data-finance-target="statements"]').click();
 assert.equal(await page.locator('#finance-filter').inputValue(),'');
 assert.equal(await page.locator('#finance-statements').getAttribute('open'),'');
 await page.locator('#finance-search').fill('<unknown>');assert.equal(await page.locator('#finance-empty').isVisible(),true);
 await page.locator('#finance-search').fill('');
 await page.locator('#finance-collapse').click();
 await page.evaluate(()=>window.scrollTo(0,0));fs.mkdirSync('test-results',{recursive:true});
 await page.screenshot({path:'test-results/finance-outline.png'});
 await page.locator('#finance-equity > summary').click();await page.locator('#finance-equity').scrollIntoViewIfNeeded();
 assert.equal(await page.locator('body > aside').evaluate(e=>Math.round(e.getBoundingClientRect().top)),0);
 await page.screenshot({path:'test-results/finance-subtopics.png'});
 await page.locator('.module-link[data-open="kelly"]').click();await page.frameLocator('#kelly-frame').locator('#capital').waitFor();
 const {pathToFileURL}=require('node:url');await page.goto(pathToFileURL(require('node:path').resolve('index.html')).href+'#finance');
 assert.equal(await page.locator('.viewpage.active').getAttribute('id'),'page-finance');
 assert.equal(await page.locator('.finance-topic').count(),16);
});
test('both modules open directly from the filesystem',async t=>{
 const page=await open(t);const {pathToFileURL}=require('node:url');
 const file=pathToFileURL(require('node:path').resolve('index.html')).href;
 await page.goto(file+'#kelly');const frame=page.frameLocator('#kelly-frame');
 await frame.locator('#capital').waitFor();assert.equal(await frame.locator('#capital').inputValue(),'100000');
 await page.locator('#stochastik-module > summary').click();await page.locator('.start-learning').click();
 assert.equal(await page.locator('.viewpage.active').getAttribute('id'),'page-deskriptiv');
});
test('Kelly input boundaries recover, dynamic rows and every tab remain usable',async t=>{
 const page=await open(t);await page.goto(url+'/kelly-studio.html');
 const audit=await page.evaluate(()=>{
  const failures=[];let actions=0;
  const change=(el,v)=>{el.value=v;el.dispatchEvent(new Event('input',{bubbles:true}));actions++;};
  for(const [tab,prefix] of [['binary','b'],['scenario','s'],['portfolio','p']]){
   document.querySelector(`[data-tab="${tab}"]`).click();
   const view=document.getElementById('view-'+tab);
   for(const el of [...document.querySelectorAll('#global-controls input'),...view.querySelectorAll('input[type="number"]')]){
    if(el.id.startsWith('sim-'))continue;
    const initial=el.value;
    for(const v of ['', '-1e100','1e100',el.min,el.max,initial]){
     if(v==null)continue;change(el,v);
     const result=document.getElementById(prefix+'-results');
     if(!result.hidden&&/NaN|Infinity/.test(result.innerText))failures.push(el.id+': invalid result');
     if(!result.hidden&&[...result.querySelectorAll('svg *')].some(e=>[...e.attributes].some(a=>/NaN|Infinity/.test(a.value))))failures.push(el.id+': invalid SVG');
    }
    change(el,initial);
    if(!document.getElementById(prefix+'-error').hidden)failures.push((el.id||el.getAttribute('aria-label'))+': did not recover');
   }
   for(const details of view.querySelectorAll('details')){details.open=true;details.open=false;actions+=2;}
  }
  return {actions,failures};
 });
 assert.ok(audit.actions>200);assert.deepEqual(audit.failures,[]);t.diagnostic(JSON.stringify(audit));
 await page.locator('[data-tab="scenario"]').click();
 for(let i=4;i<10;i++)await page.locator('#add-scenario').click();
 assert.equal(await page.locator('#add-scenario').isDisabled(),true);
 for(let i=10;i>4;i--)await page.locator('[data-remove-s]').last().click();
 assert.equal(await page.locator('#s-error').isVisible(),false);
 await page.locator('[data-tab="portfolio"]').click();
 for(let i=3;i<6;i++)await page.locator('#add-asset').click();
 assert.equal(await page.locator('#add-asset').isDisabled(),true);
 for(let i=6;i>3;i--)await page.locator('[data-remove-a]').last().click();
 for(const [pair,v] of [['0,1','.9'],['0,2','.9'],['1,2','-.9']])await page.locator(`[data-corr="${pair}"]`).fill(v);
 assert.match(await page.locator('#p-error').innerText(),/semidefinit/);
 await page.locator('[data-corr="1,2"]').fill('.9');assert.equal(await page.locator('#p-error').isVisible(),false);
 await page.locator('[data-tab="binary"]').click();
 assert.deepEqual(await page.locator('#b-metrics .metric-value').allTextContents(),['50,00 %','25,00 %','12,50 %']);
 await page.locator('#sim-periods').fill('1.5');await page.locator('#simulate').click();assert.match(await page.locator('#sim-error').innerText(),/ganze Zahl/);
 await page.locator('#sim-periods').fill('10');await page.locator('#simulate').click();await page.locator('#sim-results').waitFor({state:'visible'});
 await page.locator('#fraction').selectOption('1');assert.equal(await page.locator('#sim-results').isVisible(),false);
 await page.locator('#simulate').click();await page.locator('#sim-results').waitFor({state:'visible'});
 assert.equal(await page.locator('#sim-table tbody tr').count(),3);
 await page.locator('#probe').fill('100');assert.match(await page.locator('#probe-value').innerText(),/100/);
 fs.mkdirSync('test-results',{recursive:true});await page.screenshot({path:'test-results/kelly-audit.png'});
 await page.locator('#show-method').click();assert.equal(await page.locator('#view-learn').isVisible(),true);
 assert.equal(await page.locator('.formula math[display="block"]').count(),9);
});

test('all 171 Finance lessons render, cross-links resolve and all 34 models respond',async t=>{
 const page=await open(t);await page.goto(url+'/#finance');
 const audit=await page.evaluate(async()=>{
  const failures=[];let actions=0,termLinks=0;const labs=new Set();
  const navigate=async hash=>{location.hash=hash;await new Promise(r=>setTimeout(r,8));};
  for(const l of FinanceStudy.lessons){
   await navigate('lesson-'+l.id);
   const active=document.querySelector('.viewpage.active');
   if(active.id!=='page-finance-lesson'||active.querySelector('h1')?.textContent!==l.title)failures.push(l.id+': wrong route');
   if(!active.textContent.includes(l.example))failures.push(l.id+': example missing');
   if(!l.textbook||active.querySelectorAll('.textbook-steps > li').length!==l.textbook.steps.length)failures.push(l.id+': worked steps missing');
   for(const p of l.textbook.explanation)if(!active.textContent.includes(p))failures.push(l.id+': teaching paragraph missing');
   for(const s of l.textbook.steps)if(!active.textContent.includes(s.why))failures.push(l.id+': reasoning missing');
   if(active.querySelectorAll('.textbook-step-equation math').length!==l.textbook.steps.filter(s=>s.mathml).length)failures.push(l.id+': worked math missing');
   const math=active.querySelector('#study-formula .study-equation math');
   if(l.formulaTex){
    if(!math||math.getAttribute('display')!=='block'||!math.querySelector('annotation[encoding="application/x-tex"]'))failures.push(l.id+': formula not typeset');
    if(active.querySelector('.study-formula-source code')?.textContent!==l.formulaTex)failures.push(l.id+': LaTeX source mismatch');
   }else if(math)failures.push(l.id+': qualitative topic rendered as word equation');
   if(active.querySelectorAll('.deep-section').length!==l.deep.sections.length)failures.push(l.id+': derivations missing');
   if(active.querySelectorAll('.deep-comparison').length!==l.deep.comparisons.length)failures.push(l.id+': comparisons missing');
   for(const section of l.deep.sections)for(const p of section.paragraphs)if(!active.textContent.includes(p))failures.push(l.id+': deep paragraph missing');
   for(const a of active.querySelectorAll('.deep-map nav a'))if(!active.querySelector('#study-'+a.hash.split('~')[1]))failures.push(l.id+': derivation anchor missing');
   for(const d of active.querySelectorAll('.study-details')){d.open=true;d.open=false;actions+=2;}
   if(document.documentElement.scrollWidth>innerWidth+1)failures.push(l.id+': overflow');
   if(active.querySelectorAll('.study-related a').length<l.links.length)failures.push(l.id+': missing links');
   for(const a of active.querySelectorAll('.term-link')){termLinks++;if(!FinanceStudy.resolveGlossary(a.hash.slice(1)))failures.push(l.id+': broken glossary target');}
   for(const a of active.querySelectorAll('.study-related a')){
    const route=a.hash.slice(1);
    if(route.startsWith('lesson-')&&!FinanceStudy.resolve(route))failures.push(l.id+': broken target');
    if(!route.startsWith('lesson-')&&!document.getElementById('page-'+route))failures.push(l.id+': broken stats target');
   }
   if(l.lab&&!labs.has(l.lab)){
    labs.add(l.lab);
    for(const el of active.querySelectorAll('[data-key]')){
     const initial=el.value;
     for(const v of [el.min,el.max,'','1e100',initial]){
      el.value=v;el.dispatchEvent(new Event('input',{bubbles:true}));actions++;
      const result=document.getElementById('lab-results');
      if(!result.hidden&&/NaN|Infinity/.test(result.textContent))failures.push(l.lab+': invalid output');
      if(!result.hidden&&[...result.querySelectorAll('svg *')].some(e=>[...e.attributes].some(a=>/NaN|Infinity/.test(a.value))))failures.push(l.lab+': invalid chart');
     }
     if(!document.getElementById('lab-error').hidden)failures.push(l.lab+': recovery failed');
    }
    for(const el of active.querySelectorAll('[data-range]')){
     const initial=el.value;el.value=el.min;el.dispatchEvent(new Event('input',{bubbles:true}));
     if(active.querySelector(`[data-key="${el.dataset.range}"]`).value!==el.value)failures.push(l.lab+': range not paired');
     el.value=initial;el.dispatchEvent(new Event('input',{bubbles:true}));actions+=2;
    }
    active.querySelector('#lab-reset').click();actions++;
    if(!document.getElementById('lab-error').hidden)failures.push(l.lab+': reset failed');
   }
  }
  return {chapters:FinanceStudy.lessons.length,models:labs.size,actions,termLinks,failures};
 });
 t.diagnostic(JSON.stringify(audit));assert.equal(audit.chapters,171);assert.equal(audit.models,34);assert.ok(audit.termLinks>1500);assert.deepEqual(audit.failures,[]);
});

test('Finance deep links, formula links, answers, navigation and offline models work',async t=>{
 const page=await open(t);await page.goto(url+'/#lesson-equity-08');
 assert.equal(await page.locator('#page-finance-lesson h1').innerText(),'Dividendenmodelle und mehrstufiges Wachstum');
 assert.equal(await page.locator('#study-answer').getAttribute('open'),null);
 await page.locator('#study-answer > summary').click();assert.equal(await page.locator('#study-answer').getAttribute('open'),'');
 const formula=page.locator('.study-related a[href*="~formula"]').first();const target=await formula.getAttribute('href');await formula.click();
 await page.waitForFunction(h=>location.hash===h&&document.activeElement.id==='study-formula',target);
 await page.goBack();await page.waitForFunction(()=>location.hash==='#lesson-equity-08');
 await page.locator('#lab-g').fill('8');assert.equal(await page.locator('#lab-error').isVisible(),true);
 await page.locator('#lab-reset').click();assert.equal(await page.locator('#lab-error').isVisible(),false);
 await page.locator('[data-finance-target="bonds"]').click();assert.equal(await page.locator('.viewpage.active').getAttribute('id'),'page-finance');
 await page.locator('a[href="#lesson-bonds-08"]').click();assert.match(await page.locator('#page-finance-lesson h1').innerText(),/Duration/);
 fs.mkdirSync('test-results',{recursive:true});await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:'test-results/finance-lesson.png'});
 await page.locator('#study-formula').screenshot({path:'test-results/finance-formula.png'});
 await page.locator('#study-lab').scrollIntoViewIfNeeded();await page.screenshot({path:'test-results/finance-lab.png'});
 const {pathToFileURL}=require('node:url');await page.goto(pathToFileURL(require('node:path').resolve('index.html')).href+'#lesson-quant-12~lab');
 await page.locator('#lab-metrics').waitFor();assert.equal(await page.locator('#lab-error').isVisible(),false);
 await page.locator('#lab-vol').fill('0');assert.equal(await page.locator('#lab-error').isVisible(),false);
 const vals=await page.locator('#lab-metrics strong').allTextContents();assert.equal(vals[0],vals[1]);assert.equal(vals[1],vals[2]);
 await page.screenshot({path:'test-results/finance-simulation.png'});
});

test('Finance dictionary links technical terms in lessons and resolves every configured definition',async t=>{
 const page=await open(t);await page.goto(url+'/#lesson-bonds-08');
 const termLinks=page.locator('#page-finance-lesson .term-link');assert.ok(await termLinks.count()>10);
 const hrefs=await termLinks.evaluateAll(nodes=>nodes.map(a=>a.hash.slice(1)));
 assert.equal(await page.evaluate(routes=>routes.every(r=>!!FinanceStudy.resolveGlossary(r)),hrefs),true);
 const duration=page.locator('.term-link',{hasText:'Duration'}).first();await duration.click();
 await page.waitForFunction(()=>location.hash.startsWith('#glossary~')&&document.activeElement?.classList.contains('glossary-entry'));
 assert.match(await page.locator('.glossary-entry.selected h2').innerText(),/Duration/);
 assert.equal(await page.locator('.glossary-entry').count(),glossaryCount);
 assert.equal(await page.locator('#glossary-results').innerText(),glossaryCount+' von '+glossaryCount+' Begriffen');
 const first=await page.locator('.glossary-entry h2').first().innerText(),last=await page.locator('.glossary-entry h2').last().innerText();
 const bounds=await page.evaluate(()=>[FinanceStudy.glossary.at(0).term,FinanceStudy.glossary.at(-1).term]);
 assert.deepEqual([first,last],bounds);
 await page.locator('#glossary-search').fill('Ausfall');assert.ok(await page.locator('.glossary-entry:not([hidden])').count()>2);
 await page.locator('#glossary-category').selectOption('Kredit');assert.ok(await page.locator('.glossary-entry:not([hidden])').count()>0);
 await page.locator('#glossary-search').fill('');
 assert.ok(await page.locator('.glossary-entry:not([hidden])').evaluateAll(es=>es.every(e=>e.dataset.category==='Kredit')));
 await page.locator('#glossary-category').selectOption('');await page.locator('.glossary-letters [data-letter="V"]').click();
 assert.ok(await page.locator('.glossary-entry:not([hidden])').evaluateAll(es=>es.length>0&&es.every(e=>e.dataset.letter==='V')));
 await page.evaluate(()=>location.hash='glossary~barwert');
 await page.waitForFunction(()=>location.hash==='#glossary~barwert');assert.equal(await page.locator('#glossary-barwert').isVisible(),true);
 await page.locator('#glossary-barwert .glossary-main a').click();assert.equal(await page.locator('#page-finance-lesson h1').innerText(),'Zeitwert des Geldes, Barwert und Endwert');
 await page.goBack();await page.waitForFunction(()=>location.hash==='#glossary~barwert');
 const all=await page.evaluate(()=>FinanceStudy.glossary.every(g=>{
  const card=document.getElementById('glossary-'+g.id);return card&&card.querySelector('.glossary-main a')?.hash==='#lesson-'+g.lesson;
 }));assert.equal(all,true);
 const allLabels=await page.evaluate(()=>FinanceStudy.glossary.every(g=>[g.term,...g.aliases].every(label=>{
  const box=document.createElement('div');box.innerHTML=FinanceStudy.glossaryText(label);return box.querySelector('a')?.hash==='#glossary~'+g.id&&box.textContent===label;
 })));assert.equal(allLabels,true);
 fs.mkdirSync('test-results',{recursive:true});await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:'test-results/finance-dictionary.png'});
 const {pathToFileURL}=require('node:url');await page.goto(pathToFileURL(require('node:path').resolve('index.html')).href+'#glossary~black-scholes-merton-modell');
 await page.locator('#glossary-black-scholes-merton-modell').waitFor();assert.equal(await page.locator('#glossary-black-scholes-merton-modell').isVisible(),true);
});

test('desktop keyboard navigation and representative screenshots',async t=>{
 const page=await open(t);fs.mkdirSync('test-results',{recursive:true});
 for(const id of ['bayes','normal','markov','pruefvert','modellwahl']){
  await show(page,id);await page.screenshot({path:'test-results/'+id+'.png'});
 }
 await page.locator('.nav-item[data-page="modellwahl"]').focus();await page.keyboard.press('Enter');
 assert.equal(await page.locator('.viewpage.active').getAttribute('id'),'page-modellwahl');
});

test('textbook section links, glossary explanations and every chapter fit a mobile viewport',async t=>{
 const page=await open(t);await page.goto(url+'/#lesson-portfolio-05');
 await page.locator('.study-jumps a[href$="~example"]').click();
 await page.waitForFunction(()=>document.activeElement.id==='study-example');
 assert.equal(await page.locator('.textbook-steps > li').count(),5);
 assert.equal(await page.locator('.textbook-figure svg').count(),1);
 await page.locator('#study-explanation').screenshot({path:'test-results/textbook-alpha-explanation.png'});
 await page.locator('#study-example').screenshot({path:'test-results/textbook-alpha-example.png'});
 for(const suffix of ['applications','limitations','explanation']){
  await page.locator('.study-jumps a[href$="~'+suffix+'"]').click();
  await page.waitForFunction(s=>document.activeElement.id==='study-'+s,suffix);
 }
 await page.goto(url+'/#glossary~alpha');
 await page.locator('#glossary-alpha .glossary-note > summary').click();
 assert.equal(await page.locator('#glossary-alpha .glossary-note').getAttribute('open'),'');
 assert.match(await page.locator('#glossary-alpha .glossary-note').innerText(),/Standardfehler/);
 await page.locator('#glossary-alpha').screenshot({path:'test-results/textbook-alpha-dictionary.png'});
 await page.locator('#glossary-alpha .glossary-note a[href="#lesson-portfolio-05"]').click();
 await page.waitForFunction(()=>location.hash==='#lesson-portfolio-05');
 await page.setViewportSize({width:390,height:844});
 const failures=await page.evaluate(async()=>{
  const out=[];
  for(const l of FinanceStudy.lessons){
   FinanceStudy.render('lesson-'+l.id);
   await new Promise(requestAnimationFrame);
   if(document.documentElement.scrollWidth>innerWidth+1)out.push(l.id+': horizontal page overflow');
   const example=document.getElementById('study-example');
   if(example.getBoundingClientRect().width>innerWidth)out.push(l.id+': example wider than viewport');
  }
  return out;
 });
 assert.deepEqual(failures,[]);
 await page.goto(url+'/#lesson-bonds-13~example');
 await page.locator('#study-example').waitFor();
 await page.screenshot({path:'test-results/textbook-mobile-waterfall.png'});
 const {pathToFileURL}=require('node:url');
 await page.goto(pathToFileURL(require('node:path').resolve('index.html')).href+'#lesson-portfolio-05~example');
 assert.equal(await page.locator('.textbook-steps > li').count(),5);
 assert.equal(await page.locator('.textbook-step-equation math').count(),5);
 await page.goto(url+'/#glossary~alpha');
 await page.locator('#glossary-alpha .glossary-note > summary').click();
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
});
