const {test,before,after}=require('node:test');
const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require('playwright'),{createServer}=require('../.server.js');
let browser,server,url;
before(async()=>{server=createServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));url=process.env.STUDIO_TEST_URL||'http://127.0.0.1:'+server.address().port;browser=await chromium.launch({headless:true,...(process.env.BROWSER_CHANNEL?{channel:process.env.BROWSER_CHANNEL}:{})});});
after(async()=>{await browser?.close();if(server)await new Promise(r=>server.close(r));});
test('every Finance formula has adjacent working symbol help on desktop and mobile',async t=>{
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(url+'/#lesson-quant-11');
 await page.locator('#study-formula .formula-symbols').waitFor();
 assert.match(await page.locator('#study-formula .formula-reading').innerText(),/langfristige Mittelwert/);
 assert.match(await page.locator('#study-formula .formula-symbols').innerText(),/Innovation/);
 fs.mkdirSync('test-results',{recursive:true});await page.locator('#study-formula').screenshot({path:'test-results/time-series-symbols-desktop.png'});
 let formulas=0,help=0;
 for(const width of [1440,390]){
  await page.setViewportSize({width,height:1000});
  const audit=await page.evaluate(()=>{
   const failures=[];let formulas=0,help=0;
   for(const l of FinanceStudy.lessons){
    FinanceStudy.render('lesson-'+l.id);
    const root=document.getElementById('page-finance-lesson');
    for(const math of root.querySelectorAll('math')){
     if(math.closest('.formula-notation'))continue;
     formulas++;
     const target=document.getElementById(math.getAttribute('aria-details'));
     if(!target?.matches('.formula-notation'))failures.push(l.id+': unlabelled formula');
    }
    if(l.formulaTex&&!root.querySelector('#study-formula .formula-notation[open]'))failures.push(l.id+': hidden main definitions');
    for(const d of root.querySelectorAll('.formula-notation')){d.open=true;help++;}
    if(document.documentElement.scrollWidth>innerWidth+1)failures.push(l.id+': page overflow');
   }
   return {formulas,help,failures};
  });
  assert.deepEqual(audit.failures,[]);formulas+=audit.formulas;help+=audit.help;
 }
 await page.goto(url+'/#lesson-quant-11~formula');
 await page.locator('#study-formula .formula-symbols').waitFor();
 await page.locator('#study-formula').screenshot({path:'test-results/time-series-symbols-mobile.png'});
 await page.locator('#study-formula .formula-notation>summary').click();
 assert.equal(await page.locator('#study-formula .formula-notation').getAttribute('open'),null);
 await page.locator('#study-formula .formula-notation>summary').focus();await page.keyboard.press('Enter');
 assert.equal(await page.locator('#study-formula .formula-notation').getAttribute('open'),'');
 assert.deepEqual(errors,[]);assert.ok(formulas>2600);t.diagnostic(JSON.stringify({originalFormulaOccurrencesAcrossBothWidths:formulas,helpPanelsAcrossBothWidths:help}));
 await page.close();
});
test('all 33 statistics chapters and all nine Kelly equations expose readable notation',async t=>{
 const page=await browser.newPage({viewport:{width:390,height:900}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(url+'/#deskriptiv');
 const audit=await page.evaluate(()=>{
  const failures=[];let panels=0;
  for(const nav of document.querySelectorAll('.nav-item[data-page]')){
   nav.click();const p=document.getElementById('page-'+nav.dataset.page);
   if(!p.querySelector('.statistics-notation'))failures.push(nav.dataset.page+': chapter symbols missing');
   for(const formula of p.querySelectorAll('.eq,.formula table'))if(!document.getElementById(formula.getAttribute('aria-details')))failures.push(nav.dataset.page+': formula symbols missing');
   for(const d of p.querySelectorAll('.statistics-notation')){d.open=true;panels++;}
   if(document.documentElement.scrollWidth>innerWidth+1)failures.push(nav.dataset.page+': overflow');
  }
  return {panels,failures};
 });
 assert.deepEqual(audit.failures,[]);assert.ok(audit.panels>75);
 await page.goto(url+'/#kelly');const frame=page.frameLocator('#kelly-frame');await frame.locator('#capital').waitFor();
 await frame.locator('[data-tab="learn"]').click();
 assert.equal(await frame.locator('.kelly-notation').count(),9);
 await frame.locator('[data-notation-for="binary-solution"]>summary').click();
 assert.match(await frame.locator('[data-notation-for="binary-solution"]').innerText(),/Gewinn- und Verlustwahrscheinlichkeit/);
 await frame.locator('[data-notation-for="binary-solution"]').screenshot({path:'test-results/kelly-symbols-mobile.png'});
 assert.deepEqual(errors,[]);t.diagnostic(JSON.stringify(audit));await page.close();
});
