const {test,before,after}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require('playwright'),{createServer}=require('../.server.js'),{compile}=require('../finance-cfa/compile.cjs'),E=require('../finance-cfa/engine.cjs');
let server,browser,url;const actual=compile();
before(async()=>{server=createServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));url='http://127.0.0.1:'+server.address().port;browser=await chromium.launch({headless:true,channel:process.env.BROWSER_CHANNEL||'msedge'});});
after(async()=>{await browser.close();await new Promise(r=>server.close(r));});
async function open(t,route='cfa'){
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));t.after(async()=>{await page.close();assert.deepEqual(errors,[]);});await page.goto(url+'/#'+route);return page;
}
test('CFA curriculum search, deep links, notation and original chapter connections work on mobile',async t=>{
 const page=await open(t);assert.equal(await page.locator('.cfa-module').count(),102);
 await page.locator('#cfa-search').fill('EPS');assert.equal(await page.locator('.cfa-module:visible').count(),1);
 await page.goto(url+'/#cfa~learn-income-statement~basic-eps');
 await page.waitForFunction(()=>document.activeElement.id==='cfa-section-basic-eps');
 assert.ok(await page.locator('#page-cfa .cfa-formula').count()>10);
 await page.locator('#cfa-section-basic-eps .formula-notation summary').first().click();
 assert.equal(await page.locator('#cfa-section-basic-eps .formula-notation').first().getAttribute('open'),'');
 for(const width of [390,760,1440]){await page.setViewportSize({width,height:900});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
 await page.goto(url+'/#lesson-statements-12');assert.ok(await page.locator('a[href="#cfa~learn-income-statement"]:visible').count()>0);
});
test('training requires an answer, keeps solutions hidden, persists progress and diagnoses confident errors',async t=>{
 const page=await open(t,'cfa~learn-income-statement');
 await page.locator('[data-train-unit]').click();await page.locator('#cfa-check').click();
 assert.equal(await page.locator('#cfa-answer-required').isVisible(),true);assert.equal(await page.locator('.cfa-solution').count(),0);
 const wrong=(actual.questions.find(q=>q.id==='is-01').correct+1)%3;
 await page.locator('input[name="cfa-answer"]').nth(wrong).check();await page.locator('.cfa-confidence input[value="sure"]').check();await page.locator('#cfa-check').click();
 assert.match(await page.locator('.cfa-solution h3').innerText(),/Noch nicht richtig/);
 await page.reload();assert.equal(await page.locator('#cfa-check').count(),0);assert.equal(await page.locator('input[name="cfa-answer"]').nth(wrong).isChecked(),true);
 await page.goto(url+'/#cfa~journal');assert.match(await page.locator('#page-cfa').innerText(),/Selbstsicherer Fehler/);
 await page.locator('#page-cfa .cfa-module summary').first().click();await page.locator('[data-review-unit]').first().click();
 await page.locator('#cfa-check').waitFor({state:'visible'});
 assert.match(page.url(),/#cfa~practice/);assert.equal(await page.locator('#cfa-check').count(),1);
});
test('unavailable storage still permits answering and local feedback',async t=>{
 const page=await browser.newPage();t.after(()=>page.close());
 await page.addInitScript(()=>{Storage.prototype.getItem=()=>{throw Error('disabled')};Storage.prototype.setItem=()=>{throw Error('disabled')};});
 await page.goto(url+'/#cfa~learn-income-statement');await page.locator('[data-train-unit]').click();
 await page.locator('input[name="cfa-answer"]').nth(actual.questions.find(q=>q.id==='is-01').correct).check();await page.locator('#cfa-check').click();
 assert.equal(await page.locator('#cfa-storage').isVisible(),true);assert.match(await page.locator('.cfa-solution h3').innerText(),/^Richtig/);
});
test('every authored 2027 unit renders without overflow and new glossary terms return to their exact explanation',async t=>{
 const page=await open(t);
 for(const unit of actual.units){
  await page.goto(url+'/#cfa~learn-'+unit.id);
  assert.equal(await page.locator('#page-cfa .cfa-section').count(),unit.sections.length,unit.id);
  assert.equal(await page.locator('#page-cfa .cfa-section').evaluateAll(xs=>xs.every(x=>x.textContent.trim().length>100)),true);
  for(const width of [390,1440]){await page.setViewportSize({width,height:900});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),unit.id+' width '+width);}
 }
 await page.goto(url+'/#cfa~learn-ratios~liquidity');
 await page.locator('#cfa-section-liquidity a.term-link').filter({hasText:/^Quick Ratio$/}).first().click();
 await page.waitForFunction(()=>document.activeElement.id==='glossary-quick-ratio');
 await page.locator('#glossary-quick-ratio a[href="#cfa~learn-ratios~liquidity"]').click();
 await page.waitForFunction(()=>document.activeElement.id==='cfa-section-liquidity');
 assert.equal(await page.locator('#page-cfa').isVisible(),true);
 await page.goto(url+'/#cfa~learn-data-science~text-ai');
 await page.locator('#cfa-section-text-ai a.term-link').filter({hasText:/^Texttokenisierung$/}).click();
 await page.waitForFunction(()=>document.activeElement.id==='glossary-texttokenisierung');
 await page.locator('#glossary-texttokenisierung a[href="#cfa~learn-data-science~text-ai"]').click();
 await page.waitForFunction(()=>document.activeElement.id==='cfa-section-text-ai');
 for(const [unit,section,term] of [['fiscal','multipliers','Fiskalmultiplikator'],['monetary','reserves','Geldschöpfungsmultiplikator'],['cycles','inventories','Lager-Umsatz-Relation'],['geopolitics','cooperation','Soft Power'],['fx-markets','regimes','Currency Board'],['fx-calculation','covered-parity','gedeckte Zinsparität'],['analysis-framework','management','Management Discussion and Analysis'],['balance-sheet','financial-assets','SPPI'],['cashflow-preparation','scope','Zahlungsmitteläquivalente'],['cashflow-analysis','fcfe','Nettokreditaufnahme']]){
  await page.goto(url+'/#cfa~learn-'+unit+'~'+section);
  const termLink=page.locator('#cfa-section-'+section+' a.term-link').filter({hasText:new RegExp('^'+term+'$')}).first();
  const target=(await termLink.getAttribute('href')).split('~')[1];
  await termLink.click();await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,target);
  await page.locator('#glossary-'+target+' a[href="#cfa~learn-'+unit+'~'+section+'"]').click();
  await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,section);
 }
 await page.goto(url+'/#cfa~learn-ethics-cases');
 await page.locator('.cfa-related a[href="#cfa~learn-standard-iii~fair-dealing"]').click();
 await page.waitForFunction(()=>document.activeElement.id==='cfa-section-fair-dealing');
 assert.match(await page.locator('#cfa-heading').innerText(),/Kundenpflichten/);
 await page.goto(url+'/#cfa~learn-leases-compensation~lease-comparison');
 await page.setViewportSize({width:390,height:900});
 const plot=page.locator('.cfa-figure-plot').first();
 assert.ok(await plot.evaluate(el=>el.scrollWidth>el.clientWidth));
 await plot.focus();await page.keyboard.press('ArrowRight');
 await page.waitForFunction(()=>document.querySelector('.cfa-figure-plot').scrollLeft>0);
 assert.equal(await page.locator('.cfa-figure-hint').first().isVisible(),true);
});
test('economics training gives per-choice reasons and exact chapter return links',async t=>{
 const page=await open(t);
 for(const id of ['market-structures','cycles','fiscal','monetary','geopolitics','trade','fx-markets','fx-calculation']){
  await page.goto(url+'/#cfa~learn-'+id);await page.locator('[data-train-unit]').click();
  assert.equal(await page.locator('.cfa-solution').count(),0);
  const q=actual.questions.find(q=>q.unit===id&&q.pool==='practice');
  await page.locator('input[name="cfa-answer"]').nth(q.correct).check();await page.locator('#cfa-check').click();
  assert.match(await page.locator('.cfa-solution h3').innerText(),/^Richtig/);
  for(const option of q.options)assert.ok((await page.locator('.cfa-solution').innerText()).includes(option.why));
  await page.locator('.cfa-solution a[href="#cfa~learn-'+id+'~'+q.section+'"]').click();
  await page.waitForFunction(section=>document.activeElement.id==='cfa-section-'+section,q.section);
 }
});

test('financial-statement training preserves formula explanations and returns to the exact worked section',async t=>{
 const page=await open(t);
 for(const id of ['analysis-framework','balance-sheet','cashflow-preparation','cashflow-analysis']){
  await page.goto(url+'/#cfa~learn-'+id);await page.locator('[data-train-unit]').click();
  const questions=actual.questions.filter(q=>q.unit===id&&q.pool==='practice');
  for(let i=0;i<3;i++){
   const q=questions[i];
   assert.equal(await page.locator('.cfa-solution').count(),0);
   await page.locator('input[name="cfa-answer"]').nth(q.correct).check();await page.locator('#cfa-check').click();
   assert.match(await page.locator('.cfa-solution h3').innerText(),/^Richtig/);
   const text=await page.locator('.cfa-solution').innerText();
   for(const option of q.options)assert.ok(text.includes(option.why),q.id);
   if(q.solution.some(b=>b.kind==='formula')){
    assert.ok(await page.locator('.cfa-solution math').count());
    await page.locator('.cfa-solution .formula-notation summary').first().click();
    assert.equal(await page.locator('.cfa-solution .formula-notation').first().getAttribute('open'),'');
   }
   if(i<2)await page.locator('#cfa-train-next').click();
   else{
    await page.locator('.cfa-solution a[href="#cfa~learn-'+id+'~'+q.section+'"]').click();
    await page.waitForFunction(section=>document.activeElement.id==='cfa-section-'+section,q.section);
   }
  }
 }
});

test('the new learning path, notation and training work from the standalone offline file',async t=>{
 const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));t.after(async()=>{await page.close();assert.deepEqual(errors,[]);});
 await page.route(/^https?:/,r=>r.abort());
 const file=require('node:url').pathToFileURL(require('node:path').join(__dirname,'../index.html')).href;
 await page.goto(file+'#cfa~learn-benchmarks');
 assert.ok(await page.locator('#page-cfa math').count()>10);
 await page.locator('[data-train-unit]').click();await page.locator('input[name="cfa-answer"]').nth(1).check();await page.locator('#cfa-check').click();
 assert.equal(await page.locator('.cfa-solution').isVisible(),true);
});

test('long formulas and tables expose scroll hints and remain keyboard accessible on narrow screens',async t=>{
 const page=await open(t,'cfa~learn-tvm~growing-cashflows');
 await page.setViewportSize({width:390,height:900});
 const formula=page.locator('#cfa-section-growing-cashflows .study-equation').first();
 await page.waitForFunction(()=>document.querySelector('#cfa-section-growing-cashflows .study-equation')?.getAttribute('tabindex')==='0');
 assert.equal(await formula.locator('+ .cfa-scroll-hint').isVisible(),true);
 await formula.focus();await page.keyboard.press('ArrowRight');
 await page.waitForFunction(()=>document.querySelector('#cfa-section-growing-cashflows .study-equation').scrollLeft>0);
 await page.goto(url+'/#cfa~learn-return-statistics~dispersion');
 const table=page.locator('#cfa-section-dispersion .cfa-table').first();
 await page.waitForFunction(()=>document.querySelector('#cfa-section-dispersion .cfa-table')?.getAttribute('tabindex')==='0');
 assert.equal(await table.locator('+ .cfa-scroll-hint').isVisible(),true);
 const sectionY=await page.locator('#cfa-section-dispersion').evaluate(el=>el.getBoundingClientRect().top);
 assert.ok(sectionY>=0&&sectionY<50,'new scroll hints must not shift the targeted section out of view');
 await table.focus();await page.keyboard.press('ArrowRight');
 await page.waitForFunction(()=>document.querySelector('#cfa-section-dispersion .cfa-table').scrollLeft>0);
 await page.setViewportSize({width:1440,height:900});
 await page.waitForFunction(()=>!document.querySelector('#cfa-section-dispersion .cfa-table').hasAttribute('tabindex'));
 assert.equal(await table.locator('+ .cfa-scroll-hint').isVisible(),false);
});
test('complete exam UI enforces two timed sessions, survives reload and withholds solutions until final submission',async t=>{
 const fixture={...actual,version:'browser-fixture',questions:actual.questions.filter(q=>q.pool==='practice')};
 for(const pool of ['mock-a','mock-b'])for(const [topic,count] of Object.entries(E.blueprint))for(let i=0;i<count;i++)fixture.questions.push({id:pool+'-'+topic+'-'+i,unit:'income-statement',section:'basic-eps',topic,pool,objectives:['income-statement-d'],stem:'Browser fixture for session behavior: '+pool+' '+topic+' question '+i+'. Select the first option.',options:[{text:'One',why:'Correct fixture response.'},{text:'Two',why:'Incorrect fixture response.'},{text:'Three',why:'Incorrect fixture response.'}],correct:0,solution:['This is a test fixture, not a published finance question.']});
 fixture.inventory=E.inventory(fixture.questions);
 const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8').replace(/(<script type="application\/json" id="cfa-data">)[\s\S]*?(<\/script>)/,(_,a,b)=>a+JSON.stringify(fixture).replaceAll('<','\\u003c')+b);
 const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));t.after(async()=>{await page.close();assert.deepEqual(errors,[]);});
 await page.route(url+'/',route=>route.fulfill({body:html,contentType:'text/html'}));
 await page.addInitScript(()=>{window.__testNow=1800000000000;Date.now=()=>window.__testNow;});
 await page.goto(url+'/#cfa~exam');await page.locator('[data-start-mock="mock-a"]').click();
 assert.equal(await page.locator('[data-position]').count(),90);assert.match(await page.locator('#cfa-clock').innerText(),/135:00/);
 await page.locator('input[name="cfa-answer"]').nth(0).check();assert.equal(await page.locator('#cfa-blank').innerText(),'89 unbeantwortet');
 await page.locator('#cfa-flag').click();await page.locator('#cfa-exam-next').click();await page.reload();
 assert.match(await page.locator('.cfa-exam-status').innerText(),/Frage 2 \/ 90/);assert.equal(await page.locator('[data-position="0"]').getAttribute('class'),'answered flagged ');
 assert.equal(await page.locator('.cfa-solution').count(),0);
 await page.goto(url+'/#finance');await page.evaluate(()=>window.__testNow+=135*60*1000+1);await page.goto(url+'/#cfa~exam');
 await page.locator('#cfa-second').waitFor();assert.equal(await page.locator('.cfa-solution').count(),0);
 await page.locator('#cfa-second').click();assert.match(await page.locator('#cfa-clock').innerText(),/135:00/);assert.equal(await page.locator('[data-position="0"]').count(),0);
 await page.locator('input[name="cfa-answer"]').nth(2).check();await page.locator('.cfa-confidence input[value="sure"]').check();
 await page.locator('.cfa-submit summary').click();await page.locator('#cfa-submit-session').click();await page.locator('#cfa-review').waitFor();
 assert.match(await page.locator('.cfa-metrics').innerText(),/1 \/ 180 richtig/);assert.match(await page.locator('.cfa-metrics').innerText(),/178/);assert.equal(await page.locator('#cfa-review>details').count(),180);
 await page.locator('#cfa-errors-only').check();assert.equal(await page.locator('#cfa-review>details:visible').count(),179);
 await page.goto(url+'/#cfa~journal');assert.ok(await page.locator('#page-cfa .cfa-module').count()>=179);
});
