const {test,before,after}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),{chromium}=require('playwright'),{createServer}=require('../.server.js'),d=require('../finance-cfa/compile.cjs').compile(),E=require('../finance-cfa/engine.cjs');
const key='studio-cfa-2027-v1',practice=d.questions.filter(q=>q.pool==='practice'),q=practice[0],views=[],measurements=[];let browser,server,url;
const row=(x,at,right=true)=>({...E.grade(d.questions,[x.id],{[x.id]:right?x.correct:(x.correct+1)%3},{[x.id]:'sure'}).results[0],at,version:d.version,revision:x.revision});
const saved=history=>({schema:2,version:d.version,questionVersions:Object.fromEntries(d.questions.map(q=>[q.id,q.revision])),history,runs:[],exam:null,training:null});
before(async()=>{server=createServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));url='http://127.0.0.1:'+server.address().port;browser=await chromium.launch({headless:true,channel:'msedge'});});
after(async()=>{await browser.close();await new Promise(r=>server.close(r));fs.writeFileSync('test-results/history-retention-browser-proof.json',JSON.stringify({cfaVersion:d.version,views,measurements},null,2));});
async function page(t,state){const p=await browser.newPage({viewport:{width:390,height:1100}}),errors=[];p.on('pageerror',e=>errors.push(e.message));t.after(async()=>{await p.close();assert.deepEqual(errors,[]);});await p.goto(url+'/#cfa');await p.evaluate(({key,state})=>localStorage.setItem(key,JSON.stringify(state)),{key,state});await p.goto(url+'/#cfa~journal');await p.reload();return p;}
test('4001 unique practice results keep the first error; a real correction, reload and JSON export preserve all seen questions',async t=>{
 const input=practice.slice(0,4001).map((x,i)=>row(x,1000+i,i!==0)),p=await page(t,saved(input));
 assert.equal(await p.locator('#page-cfa .cfa-module').count(),1);await p.locator('#page-cfa .cfa-module summary').click();assert.ok((await p.locator('#page-cfa').innerText()).includes(q.stem));
 await p.locator('#page-cfa').screenshot({path:'test-results/history-retention-first-error-390.png'});views.push('first-error-390');
 await p.goto(url+'/#cfa~learn-'+q.unit);await p.locator('[data-train-unit]').click();assert.equal(await p.locator('#cfa-question-title').innerText(),q.stem);
 await p.locator('input[name="cfa-answer"]').nth(q.correct).check();await p.locator('.cfa-confidence input[value="sure"]').check();await p.locator('#cfa-check').click();await p.goto(url+'/#cfa~journal');
 assert.equal(await p.locator('#page-cfa .cfa-module').count(),0);await p.reload();assert.equal(await p.locator('#page-cfa .cfa-module').count(),0);
 const state=await p.evaluate(key=>JSON.parse(localStorage.getItem(key)),key);assert.equal(new Set(state.history.map(h=>h.id)).size,4001);assert.equal(E.journal(state.history).length,0);assert.equal(await p.locator('#cfa-storage').isHidden(),true);
 const download= p.waitForEvent('download');await p.locator('#cfa-export').click();const exported=JSON.parse(fs.readFileSync(await(await download).path(),'utf8'));assert.deepEqual(exported.history,state.history);assert.equal(exported.year,2027);
 for(const width of [390,1440]){await p.setViewportSize({width,height:1000});assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await p.locator('#page-cfa').screenshot({path:'test-results/history-retention-resolved-'+width+'.png'});views.push('resolved-'+width);}
 measurements.push({case:'4001 unique plus correction',retained:state.history.length,seen:4001,exported:exported.history.length});
});
test('out-of-order answers do not reopen a resolved error and a maximum realistic retained payload saves in Edge',async t=>{
 const base=d.questions.map((x,i)=>row(x,1000+i)),repeat=Array.from({length:9000},(_,i)=>row(q,10000+i)),history=E.retainHistory([...base,...repeat]);
 assert.equal(history.length,8477);const state=saved(history);state.runs=Array.from({length:30},(_,i)=>({mock:i%2?'mock-a':'mock-b',percent:80+i/10,at:1000+i,seenBefore:true}));state.training={ids:[q.id],position:0,answers:{},confidence:{},revealed:[]};state.exam=E.createExam(d.questions,'mock-a');
 const p=await page(t,state);assert.equal(await p.locator('#page-cfa .cfa-module').count(),0);
 await p.goto(url+'/#cfa~practice');await p.locator('input[name="cfa-answer"]').nth(q.correct).check();await p.reload();assert.equal(await p.locator('input[name="cfa-answer"]').nth(q.correct).isChecked(),true);assert.equal(await p.locator('#cfa-storage').isHidden(),true);
 let restored=await p.evaluate(key=>JSON.parse(localStorage.getItem(key)),key);assert.equal(new Set(restored.history.map(h=>h.id)).size,4478);assert.equal(restored.history.length,8477);assert.deepEqual(restored.exam,state.exam);assert.equal(restored.runs.length,30);
 const raw=JSON.stringify(restored);measurements.push({case:'all4478 plus4000 recent',retained:restored.history.length,utf8Bytes:Buffer.byteLength(raw),utf16Bytes:raw.length*2,savedInEdge:true});
 const newer=row(q,30000),older=row(q,20000,false);restored.history=[newer,older];await p.evaluate(({key,state})=>localStorage.setItem(key,JSON.stringify(state)),{key,state:restored});await p.goto(url+'/#cfa~journal');await p.reload();assert.equal(await p.locator('#page-cfa .cfa-module').count(),0);
 restored.history=[newer,{...older,at:30000}];await p.evaluate(({key,state})=>localStorage.setItem(key,JSON.stringify(state)),{key,state:restored});await p.reload();assert.equal(await p.locator('#page-cfa .cfa-module').count(),1);assert.equal(await p.locator('#cfa-storage').isHidden(),true);
});
