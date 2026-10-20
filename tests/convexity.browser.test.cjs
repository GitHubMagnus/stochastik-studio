const {test,before,after}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require('playwright'),{createServer}=require('../.server.js'),{compile}=require('../finance-cfa/compile.cjs'),E=require('../finance-cfa/engine.cjs');
let server,browser,url;const actual=compile();
before(async()=>{server=createServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));url='http://127.0.0.1:'+server.address().port;browser=await chromium.launch({headless:true,channel:'msedge'});});
after(async()=>{await browser.close();await new Promise(r=>server.close(r));});
async function fresh(t,width=1440){const p=await browser.newPage({viewport:{width,height:1000}}),errors=[];p.on('pageerror',e=>errors.push(e.message));t.after(async()=>{await p.close();assert.deepEqual(errors,[]);});return p;}
const metric=async(p,i)=>Number((await p.locator('#lab-metrics strong').nth(i).innerText()).replaceAll('.','').replace(',','.').replace('−','-'));
test('chapter opens both calculators and Barbell/Bullet presets isolate dispersion, money scaling and degenerate exact curves',async t=>{
 const p=await fresh(t);await p.goto(url+'/#cfa~learn-convexity~workflow');const links=p.locator('#cfa-section-workflow .cfa-exploration a');assert.equal(await links.count(),2);
 await links.nth(0).click();await p.waitForFunction(()=>document.activeElement.id==='study-lab');assert.equal(await p.locator('#lab-position').count(),1);assert.equal(await p.locator('#lab-metrics strong').count(),12);
 await p.goBack();await p.waitForFunction(()=>document.activeElement.id==='cfa-section-workflow');await links.nth(1).click();await p.waitForFunction(()=>document.activeElement.id==='study-lab');
 assert.equal(await p.locator('.study-lab-bondconvex').count(),1);assert.equal(await p.locator('.study-lab-controls input[type=number]').count(),6);assert.equal(await p.locator('[data-model-preset]').count(),6);assert.equal(await p.locator('#lab-chart path').count(),3);assert.equal(await p.locator('#lab-metrics strong').count(),12);
 for(let i=0;i<6;i++){await p.locator('[data-model-preset="'+i+'"]').click();assert.ok(await p.locator('.study-lab-controls input[type=number]').evaluateAll(es=>es.every(e=>e.validity.valid)));assert.equal(await p.locator('#lab-error').isVisible(),false);}
 await p.locator('[data-model-preset="0"]').click();const D=await metric(p,2),C=await metric(p,4),MC=await metric(p,10),R=await metric(p,6),curves=await p.locator('#lab-chart path').evaluateAll(es=>es.map(e=>e.getAttribute('d')));assert.ok(Math.abs(C-41.723356)<.000051);
 await p.locator('[data-model-preset="1"]').click();assert.equal(await metric(p,2),D);assert.ok(await metric(p,4)<C);
 await p.locator('[data-model-preset="2"]').click();assert.equal(await metric(p,2),D);assert.ok(await metric(p,4)>C);
 for(const preset of [3,4]){await p.locator('[data-model-preset="'+preset+'"]').click();assert.equal(await metric(p,3),0);assert.equal(await metric(p,4),await metric(p,5));assert.equal(await metric(p,6),await metric(p,7));const ds=await p.locator('#lab-chart path').evaluateAll(es=>es.map(e=>e.getAttribute('d')));assert.equal(ds[0],ds[1]);assert.notEqual(ds[0],ds[2]);}
 await p.locator('#lab-weight').fill('100');assert.equal(await metric(p,3),0);assert.equal(await metric(p,6),await metric(p,7));
 await p.locator('[data-model-preset="5"]').click();assert.equal(await metric(p,2),D);assert.equal(await metric(p,6),R);assert.ok(Math.abs(await metric(p,10)-MC/2)<.0001);assert.deepEqual(await p.locator('#lab-chart path').evaluateAll(es=>es.map(e=>e.getAttribute('d'))),curves);
 await p.locator('#lab-shock').fill('-100');assert.ok(await metric(p,6)>0);await p.locator('#lab-shock').fill('0');for(const i of [6,7,8,9])assert.equal(await metric(p,i),0);
 await p.locator('#lab-value').fill('');assert.equal(await p.locator('#lab-error').isVisible(),true);await p.locator('#lab-reset').click();assert.equal(await p.locator('#lab-error').isVisible(),false);
 await p.locator('[data-range=weight]').evaluate(e=>{e.value='25';});await p.locator('[data-range=weight]').dispatchEvent('input');assert.equal(await p.locator('#lab-weight').inputValue(),'25');
 assert.equal(await p.locator('#lab-projection tbody tr').count(),13);await p.locator('#lab-results > details summary').click();assert.equal(await p.locator('#lab-table tbody tr').count(),183);
 await p.goBack();await p.waitForFunction(()=>document.activeElement.id==='cfa-section-workflow');
});
test('all 30 convexity formulas explain their local symbols; six value tables and extreme calculator scenarios stay accessible on mobile and offline',async t=>{
 const p=await fresh(t,390);await p.goto(url+'/#cfa~learn-convexity');const u=actual.units.find(u=>u.id==='convexity'),formulas=[];const walk=bs=>bs.forEach(b=>{if(b.kind==='formula')formulas.push(b);if(b.kind==='example')walk(b.steps);});u.sections.forEach(s=>walk(s.blocks));
 assert.equal(await p.locator('#page-cfa .cfa-formula').count(),30);
 for(const[i,f]of formulas.entries()){const box=p.locator('#page-cfa .cfa-formula').nth(i);await box.locator('.formula-notation summary').click();for(const s of f.symbols)assert.ok((await box.locator('.formula-notation').innerText()).includes(s.meaning),f.tex);}
 for(const s of u.sections.filter(s=>s.blocks.some(b=>b.kind==='figure'))){await p.goto(url+'/#cfa~learn-convexity~'+s.id);const f=p.locator('#cfa-section-'+s.id+' .cfa-figure');await f.locator('details summary').click();assert.equal(await f.locator('tbody tr').count(),s.blocks.find(b=>b.kind==='figure').plot.series.reduce((n,l)=>n+l.points.length,0));}
 assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 await p.context().setOffline(true);await p.goto(require('node:url').pathToFileURL(path.join(__dirname,'../index.html')).href+'#lesson-bonds-08~lab-bondconvex');await p.waitForFunction(()=>document.activeElement.id==='study-lab');
 for(const width of [1100,390,320]){await p.setViewportSize({width,height:1000});for(const[k,v]of Object.entries({early:.5,late:30,weight:5,yield:0,shock:-300,value:10000000}))await p.locator('#lab-'+k).fill(String(v));assert.equal(await p.locator('#lab-error').isVisible(),false);assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));assert.equal(await p.locator('#lab-chart path').count(),3);}
 const table=p.locator('#lab-projection .study-table-wrap').first();await table.focus();await p.keyboard.press('ArrowRight');await p.waitForFunction(()=>document.querySelector('#lab-projection .study-table-wrap').scrollLeft>0);
 await p.locator('#lab-chart').focus();await p.keyboard.press('ArrowRight');await p.waitForFunction(()=>document.querySelector('#lab-chart').scrollLeft>0);
});
test('convexity glossary destinations preserve old bookmarks and distinguish portfolio Bullet from an end-redeemed coupon bond',async t=>{
 const p=await fresh(t);await p.goto(url+'/#glossary~convexity');await p.waitForFunction(()=>document.activeElement.id==='glossary-konvexitat');await p.locator('#glossary-konvexitat a[href="#cfa~learn-convexity~definition"]').click();await p.waitForFunction(()=>document.activeElement.id==='cfa-section-definition');
 await p.goto(url+'/#cfa~learn-convexity~barbell-shock');const bullet=p.locator('#cfa-section-barbell-shock a.term-link:visible').filter({hasText:/^Bullet$/}).first();assert.equal(await bullet.getAttribute('href'),'#glossary~bullet-portfolio');await bullet.click();await p.waitForFunction(()=>document.activeElement.id==='glossary-bullet-portfolio');
 await p.goto(url+'/#glossary~bullet');await p.waitForFunction(()=>document.activeElement.id==='glossary-bullet-bond');await p.locator('#glossary-bullet-bond a[href="#cfa~learn-bond-features~schedule"]').click();await p.waitForFunction(()=>document.activeElement.id==='cfa-section-schedule');
 const gl=await p.evaluate(()=>FinanceStudy.glossary);for(const term of ['Money Convexity','Portfoliokonvexität','Portfolio-IRR','Periodenkonvexität','Jensen-Ungleichung']){const g=gl.find(g=>g.term===term);assert.ok(g);await p.goto(url+'/#glossary~'+g.id);await p.locator('#glossary-'+g.id+' a[href="#cfa~learn-convexity~'+g.cfa.section+'"]').click();await p.waitForFunction(section=>document.activeElement.id==='cfa-section-'+section,g.cfa.section);}
});
test('both actual reserved convexity transfer cases render complete reasoning, local symbols and exact chapter returns at two widths',async t=>{
 const reserved=actual.questions.filter(q=>q.unit==='convexity'&&q.pool!=='practice');assert.equal(reserved.length,2);
 // Isolated renderer fixture: published reserved pools remain unavailable to normal training.
 const fixture={...actual,version:'convexity-reserved-render-only',questions:reserved.map(q=>({...q,pool:'practice'}))};fixture.inventory=E.inventory(fixture.questions);
 const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8').replace(/(<script type="application\/json" id="cfa-data">)[\s\S]*?(<\/script>)/,(_,a,b)=>a+JSON.stringify(fixture).replaceAll('<','\\u003c')+b);
 for(const width of [390,1440]){const p=await fresh(t,width);await p.route(url+'/',r=>r.fulfill({body:html,contentType:'text/html'}));await p.goto(url+'/#cfa~learn-convexity');await p.locator('[data-train-unit]').click();
  for(const[i,q]of reserved.entries()){assert.equal(await p.locator('#cfa-question-title').innerText(),q.stem);await p.locator('input[name="cfa-answer"]').nth(q.correct).check();await p.locator('#cfa-check').click();assert.match(await p.locator('.cfa-solution h3').innerText(),/^Richtig/);const text=await p.locator('.cfa-solution').innerText();for(const o of q.options)assert.ok(text.includes(o.why));
   for(const[j,f]of q.solution.filter(b=>b.kind==='formula').entries()){const box=p.locator('.cfa-solution .cfa-formula').nth(j);await box.locator('.formula-notation summary').click();for(const s of f.symbols)assert.ok((await box.innerText()).includes(s.meaning));}
   assert.equal(await p.locator('.cfa-solution a[href="#cfa~learn-convexity~'+q.section+'"]').count(),1);assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));if(i<reserved.length-1)await p.locator('#cfa-train-next').click();
  }
 }
});
