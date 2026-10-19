const {test,before,after}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require('playwright'),{createServer}=require('../.server.js'),{compile}=require('../finance-cfa/compile.cjs'),E=require('../finance-cfa/engine.cjs');
let server,browser,url;const actual=compile();
before(async()=>{server=createServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));url='http://127.0.0.1:'+server.address().port;browser=await chromium.launch({headless:true,channel:'msedge'});});
after(async()=>{await browser.close();await new Promise(r=>server.close(r));});
async function open(t,route,width=1440){const page=await browser.newPage({viewport:{width,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));t.after(async()=>{await page.close();assert.deepEqual(errors,[]);});await page.goto(url+'/#'+route);return page;}
const metric=async(page,i)=>Number((await page.locator('#lab-metrics strong').nth(i).innerText()).replaceAll('.','').replace(',','.').replace('−','-'));
test('horizon model changes rates, horizons, coupons and frequency with full ledger reconciliation and exact chapter return',async t=>{
 const p=await open(t,'cfa~learn-bond-return~workflow');await p.locator('#cfa-section-workflow .cfa-exploration a').click();await p.waitForFunction(()=>document.activeElement.id==='study-lab');
 assert.equal(await p.locator('.study-lab-controls input[type=number]').count(),6);assert.equal(await p.locator('#lab-chart path').count(),3);assert.equal(await p.locator('[data-model-preset]').count(),7);
 assert.ok(Math.abs(await metric(p,5)-1.5348943873)<.000051);const paid=await metric(p,0),D=await metric(p,2);
 await p.locator('#lab-after').fill('4');assert.equal(await metric(p,0),paid);assert.equal(await metric(p,2),D);assert.ok(await metric(p,5)>5);
 for(let i=0;i<7;i++){await p.locator('[data-model-preset="'+i+'"]').click();assert.equal(await p.locator('#lab-error').isVisible(),false);assert.equal(await p.locator('#lab-chart path').count(),3);}
 await p.locator('[data-model-preset="1"]').click();assert.ok(Math.abs(await metric(p,3))<.000051);assert.ok(Math.abs(await metric(p,5)-5.0012318701)<.000051);
 await p.locator('[data-model-preset="4"]').click();assert.equal(await metric(p,4),100);assert.equal(await metric(p,6),0);
 await p.locator('[data-model-preset="5"]').click();assert.ok(Math.abs(await metric(p,2)-4.4854327646)<.000051);assert.equal(await p.locator('#lab-projection .study-model-table').first().locator('tbody tr').count(),10);
 await p.locator('#lab-horizon').fill('');assert.equal(await p.locator('#lab-error').isVisible(),true);await p.locator('#lab-reset').click();assert.equal(await p.locator('#lab-error').isVisible(),false);
 await p.locator('[data-range=horizon]').evaluate(e=>{e.value='7';});await p.locator('[data-range=horizon]').dispatchEvent('input');assert.equal(await p.locator('#lab-horizon').inputValue(),'7');assert.ok((await p.locator('#lab-projection .study-model-table').nth(1).innerText()).includes('Zins auf zurückgezahltes Nominal'));
 await p.locator('#lab-results > details summary').click();assert.equal(await p.locator('#lab-table tbody tr').count(),258);
 await p.goBack();await p.waitForFunction(()=>document.activeElement.id==='cfa-section-workflow');
});
test('horizon textbook figures, symbols, mobile keyboard tables and extreme annualization remain accessible offline',async t=>{
 const p=await open(t,'cfa~learn-bond-return~mac-ledger',390);const table=p.locator('#cfa-section-mac-ledger .cfa-table').first();await table.focus();await p.keyboard.press('ArrowRight');await p.waitForFunction(()=>document.querySelector('#cfa-section-mac-ledger .cfa-table').scrollLeft>0);
 const u=actual.units.find(u=>u.id==='bond-return');for(const s of u.sections.filter(s=>s.blocks.some(b=>b.kind==='figure'))){await p.goto(url+'/#cfa~learn-bond-return~'+s.id);const f=p.locator('#cfa-section-'+s.id+' .cfa-figure');await f.locator('details summary').click();assert.equal(await f.locator('tbody tr').count(),s.blocks.find(b=>b.kind==='figure').plot.series.reduce((n,l)=>n+l.points.length,0));}
 await p.goto(url+'/#cfa~learn-bond-return~horizon-derivative');const formula=p.locator('#cfa-section-horizon-derivative .cfa-formula');await formula.locator('.formula-notation summary').click();assert.match(await formula.innerText(),/Anlagehorizont in Jahren/);assert.match(await formula.innerText(),/Neuer nominaler Jahreszins/);
 assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 await p.context().setOffline(true);await p.goto(require('node:url').pathToFileURL(path.join(__dirname,'../index.html')).href+'#lesson-bonds-09~lab');await p.waitForFunction(()=>document.activeElement.id==='study-lab');
 for(const width of [1100,390,320]){await p.setViewportSize({width,height:1000});for(const[k,v]of Object.entries({coupon:0,initial:15,after:-2,years:30,horizon:.25,frequency:1}))await p.locator('#lab-'+k).fill(String(v));assert.equal(await p.locator('#lab-error').isVisible(),false);assert.ok((await p.locator('#lab-chart').innerText()).includes('Mio.')||(await p.locator('#lab-chart').innerText()).includes('Mrd.')||(await p.locator('#lab-chart').innerText()).includes('Bio.'));assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
 await p.locator('#lab-chart').focus();await p.keyboard.press('ArrowRight');await p.waitForFunction(()=>document.querySelector('#lab-chart').scrollLeft>0);
 const ledger=p.locator('#lab-projection .study-table-wrap').first();await ledger.focus();await p.keyboard.press('ArrowRight');await p.waitForFunction(()=>document.querySelector('#lab-projection .study-table-wrap').scrollLeft>0);
});
test('Macaulay and horizon glossary terms open unique precise definitions and return to the relevant section',async t=>{
 const p=await open(t,'cfa~learn-bond-return~mac-definition');
 await p.locator('#cfa-section-mac-definition .formula-notation summary').first().click();
 const a=p.locator('#cfa-section-mac-definition a.term-link').filter({hasText:/^Macaulay Duration$/}).first(),id=(await a.getAttribute('href')).split('~')[1];await a.click();await p.waitForFunction(id=>document.activeElement.id==='glossary-'+id,id);await p.locator('#glossary-'+id+' a[href="#cfa~learn-bond-return~mac-definition"]').click();await p.waitForFunction(()=>document.activeElement.id==='cfa-section-mac-definition');
 const gl=await p.evaluate(()=>FinanceStudy.glossary);for(const term of ['Investment Horizon','Terminal Wealth','Horizon Matching','Reinvestment Factor']){const g=gl.find(g=>[g.term,...g.aliases].includes(term));assert.ok(g);await p.goto(url+'/#glossary~'+g.id);await p.locator('#glossary-'+g.id+' a[href="#cfa~learn-bond-return~'+g.cfa.section+'"]').click();await p.waitForFunction(section=>document.activeElement.id==='cfa-section-'+section,g.cfa.section);}
});
test('all four actual reserved horizon cases render choices, equations, symbol definitions and section returns on desktop and mobile',async t=>{
 const reserved=actual.questions.filter(q=>q.unit==='bond-return'&&q.pool!=='practice');assert.equal(reserved.length,4);
 // Isolated renderer fixture only. No published reserved question is made available to training.
 const fixture={...actual,version:'horizon-reserved-render-fixture',questions:reserved.map(q=>({...q,pool:'practice'}))};fixture.inventory=E.inventory(fixture.questions);
 const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8').replace(/(<script type="application\/json" id="cfa-data">)[\s\S]*?(<\/script>)/,(_,a,b)=>a+JSON.stringify(fixture).replaceAll('<','\\u003c')+b);
 for(const width of [390,1440]){const p=await open(t,'cfa',width);await p.route(url+'/',r=>r.fulfill({body:html,contentType:'text/html'}));await p.reload();await p.goto(url+'/#cfa~learn-bond-return');await p.locator('[data-train-unit]').click();
  for(const[i,q]of reserved.entries()){assert.equal(await p.locator('#cfa-question-title').innerText(),q.stem);await p.locator('input[name="cfa-answer"]').nth(q.correct).check();await p.locator('#cfa-check').click();assert.match(await p.locator('.cfa-solution h3').innerText(),/^Richtig/);const text=await p.locator('.cfa-solution').innerText();for(const o of q.options)assert.ok(text.includes(o.why),q.id);
   const formulas=q.solution.filter(b=>b.kind==='formula');for(const[j,f]of formulas.entries()){const box=p.locator('.cfa-solution .cfa-formula').nth(j);await box.locator('.formula-notation summary').click();const text=await box.innerText();for(const s of f.symbols)assert.ok(text.includes(s.meaning));}
   assert.equal(await p.locator('.cfa-solution a[href="#cfa~learn-bond-return~'+q.section+'"]').count(),1);assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));if(i<reserved.length-1)await p.locator('#cfa-train-next').click();
  }
 }
});
