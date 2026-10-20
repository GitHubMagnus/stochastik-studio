const {test,before,after}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require('playwright'),{createServer}=require('../.server.js'),{compile}=require('../finance-cfa/compile.cjs'),E=require('../finance-cfa/engine.cjs');
let server,browser,url;const actual=compile();
before(async()=>{server=createServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));url='http://127.0.0.1:'+server.address().port;browser=await chromium.launch({headless:true,channel:'msedge'});});
after(async()=>{await browser.close();await new Promise(r=>server.close(r));});
async function fresh(t,width=1440){const p=await browser.newPage({viewport:{width,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.message));t.after(async()=>{await p.close();assert.deepEqual(errors,[]);});return p;}
const metric=async(p,i)=>Number((await p.locator('#lab-metrics strong').nth(i).innerText()).replaceAll('.','').replace(',','.').replace('−','-'));
test('duration calculator preserves quoted metrics while scaling position risk, and reconciles equal face versus equal market value',async t=>{
 const p=await fresh(t);await p.goto(url+'/#cfa~learn-duration~workflow');await p.locator('#cfa-section-workflow .cfa-exploration a').click();await p.waitForFunction(()=>document.activeElement.id==='study-lab');
 assert.equal(await p.locator('.study-lab-controls input[type=number]').count(),6);assert.equal(await p.locator('[data-model-preset]').count(),6);assert.equal(await p.locator('#lab-metrics strong').count(),12);
 for(let i=0;i<6;i++){await p.locator('[data-model-preset="'+i+'"]').click();assert.ok(await p.locator('.study-lab-controls input[type=number]').evaluateAll(es=>es.every(e=>e.validity.valid)),'all preset fields conform to their native step/range constraints');}
 await p.locator('[data-model-preset="0"]').click();const original=await p.locator('#lab-metrics strong').evaluateAll(es=>es.slice(0,8).map(e=>e.textContent)),curve=await p.locator('#lab-chart path').first().getAttribute('d');assert.ok(Math.abs(await metric(p,10)-432.947667)<.000051);
 await p.locator('[data-model-preset="1"]').click();assert.deepEqual(await p.locator('#lab-metrics strong').evaluateAll(es=>es.slice(0,8).map(e=>e.textContent)),original);assert.equal(await p.locator('#lab-chart path').first().getAttribute('d'),curve);assert.ok(Math.abs(await metric(p,10)-865.895334)<.000051);
 await p.locator('[data-model-preset="3"]').click();assert.ok(await metric(p,1)>4.7);assert.ok(await metric(p,10)<400);assert.ok(await metric(p,8)<800000);
 await p.locator('[data-model-preset="4"]').click();assert.equal(await metric(p,8),1000000);assert.ok(await metric(p,10)>470);
 await p.locator('[data-model-preset="5"]').click();assert.ok(Math.abs(await metric(p,1)-4.376032)<.000051);assert.equal(await p.locator('#lab-projection .study-model-table').first().locator('tbody tr').count(),10);
 await p.locator('#lab-position').fill('0');for(const i of [8,9,10,11])assert.equal(await metric(p,i),0);await p.locator('#lab-position').fill('');assert.equal(await p.locator('#lab-error').isVisible(),true);await p.locator('#lab-reset').click();assert.equal(await p.locator('#lab-error').isVisible(),false);
 await p.locator('[data-range=position]').evaluate(e=>{e.value='2000000';});await p.locator('[data-range=position]').dispatchEvent('input');assert.equal(await p.locator('#lab-position').inputValue(),'2000000');
 await p.goBack();await p.waitForFunction(()=>document.activeElement.id==='cfa-section-workflow');
});
test('every duration formula has local symbols and all five book charts and position tables work on mobile and offline',async t=>{
 const p=await fresh(t,390);await p.goto(url+'/#cfa~learn-duration');const u=actual.units.find(u=>u.id==='duration'),formulas=[];const walk=bs=>bs.forEach(b=>{if(b.kind==='formula')formulas.push(b);if(b.kind==='example')walk(b.steps);});u.sections.forEach(s=>walk(s.blocks));
 assert.equal(await p.locator('#page-cfa .cfa-formula').count(),22);
 for(const[i,f]of formulas.entries()){const box=p.locator('#page-cfa .cfa-formula').nth(i);await box.locator('.formula-notation summary').click();const text=await box.locator('.formula-notation').innerText();for(const symbol of f.symbols)assert.ok(text.includes(symbol.meaning),f.tex);}
 for(const s of u.sections.filter(s=>s.blocks.some(b=>b.kind==='figure'))){await p.goto(url+'/#cfa~learn-duration~'+s.id);const f=p.locator('#cfa-section-'+s.id+' .cfa-figure');await f.locator('details summary').click();assert.equal(await f.locator('tbody tr').count(),s.blocks.find(b=>b.kind==='figure').plot.series.reduce((n,l)=>n+l.points.length,0));}
 assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await p.context().setOffline(true);await p.goto(require('node:url').pathToFileURL(path.join(__dirname,'../index.html')).href+'#lesson-bonds-08~lab');await p.locator('[data-model-preset="0"]').click();
 const table=p.locator('#lab-projection .study-table-wrap').first();await table.focus();await p.keyboard.press('ArrowRight');await p.waitForFunction(()=>document.querySelector('#lab-projection .study-table-wrap').scrollLeft>0);
 for(const width of [1100,390,320]){await p.setViewportSize({width,height:1000});for(const[k,v]of Object.entries({c:15,y:0,n:30,m:12,shock:-500,position:10000000}))await p.locator('#lab-'+k).fill(String(v));assert.equal(await p.locator('#lab-error').isVisible(),false);assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
 assert.equal(await p.locator('#lab-projection .study-model-table').first().locator('tbody tr').count(),360);await p.locator('#lab-chart').focus();await p.keyboard.press('ArrowRight');await p.waitForFunction(()=>document.querySelector('#lab-chart').scrollLeft>0);
});
test('duration terminology preserves existing aliases and distinguishes Macaulay context from Modified Duration',async t=>{
 const p=await fresh(t);await p.goto(url+'/#glossary~duration');await p.waitForFunction(()=>document.activeElement.id==='glossary-modified-duration');await p.locator('#glossary-modified-duration a[href="#cfa~learn-duration~modified"]').click();await p.waitForFunction(()=>document.activeElement.id==='cfa-section-modified');
 await p.goto(url+'/#cfa~learn-bond-return~mac-ledger');const mac=p.locator('#cfa-section-mac-ledger a.term-link:visible').filter({hasText:/^Duration$/}).first();assert.equal(await mac.getAttribute('href'),'#glossary~macaulay-duration');await mac.click();await p.waitForFunction(()=>document.activeElement.id==='glossary-macaulay-duration');await p.locator('#glossary-macaulay-duration a[href="#cfa~learn-bond-return~mac-definition"]').click();await p.waitForFunction(()=>document.activeElement.id==='cfa-section-mac-definition');
 for(const alias of ['pvbp','dollar-duration']){await p.goto(url+'/#glossary~'+alias);const expected=alias==='pvbp'?'dv01':'money-duration';await p.waitForFunction(id=>document.activeElement.id==='glossary-'+id,expected);const section=alias==='pvbp'?'pvbp':'money';await p.locator('#glossary-'+expected+' a[href="#cfa~learn-duration~'+section+'"]').click();await p.waitForFunction(section=>document.activeElement.id==='cfa-section-'+section,section);}
});
test('the two actual reserved duration transfer cases render full-price and hedge reasoning with all symbols on desktop and mobile',async t=>{
 const reserved=actual.questions.filter(q=>q.unit==='duration'&&q.pool!=='practice');assert.equal(reserved.length,2);
 const fixture={...actual,version:'duration-reserved-render-only',questions:reserved.map(q=>({...q,pool:'practice'}))};fixture.inventory=E.inventory(fixture.questions);
 const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8').replace(/(<script type="application\/json" id="cfa-data">)[\s\S]*?(<\/script>)/,(_,a,b)=>a+JSON.stringify(fixture).replaceAll('<','\\u003c')+b);
 for(const width of [390,1440]){const p=await fresh(t,width);await p.route(url+'/',r=>r.fulfill({body:html,contentType:'text/html'}));await p.goto(url+'/#cfa~learn-duration');await p.locator('[data-train-unit]').click();
  for(const[i,q]of reserved.entries()){assert.equal(await p.locator('#cfa-question-title').innerText(),q.stem);await p.locator('input[name="cfa-answer"]').nth(q.correct).check();await p.locator('#cfa-check').click();assert.match(await p.locator('.cfa-solution h3').innerText(),/^Richtig/);const text=await p.locator('.cfa-solution').innerText();for(const o of q.options)assert.ok(text.includes(o.why));
   for(const[j,f]of q.solution.filter(b=>b.kind==='formula').entries()){const box=p.locator('.cfa-solution .cfa-formula').nth(j);await box.locator('.formula-notation summary').click();for(const s of f.symbols)assert.ok((await box.innerText()).includes(s.meaning));}
   assert.equal(await p.locator('.cfa-solution a[href="#cfa~learn-duration~'+q.section+'"]').count(),1);assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));if(i<reserved.length-1)await p.locator('#cfa-train-next').click();
  }
 }
});
