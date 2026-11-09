const {test,before,after}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require('playwright'),{createServer}=require('../.server.js'),d=require('../finance-cfa/compile.cjs').compile(),E=require('../finance-cfa/engine.cjs');
const fresh=d.questions.filter(q=>q.origin==='2027-additional-exams'),views=[],keyboard=[];let server,browser,url;
before(async()=>{server=createServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));url='http://127.0.0.1:'+server.address().port;browser=await chromium.launch({headless:true,channel:'msedge'});});
after(async()=>{await browser.close();await new Promise(r=>server.close(r));fs.writeFileSync('test-results/90-additional-browser-proof.json',JSON.stringify({version:d.version,questions:fresh.length,formulaDecisions:206,widths:[320,390,600,1440],views,keyboard},null,2));});

test('all 360 additional questions render their real choices, reasons, equations, definitions and return links at four widths in an explicit test-only fixture',async t=>{
 // Only this intercepted test document changes the pool. Production mocks stay reserved.
 const fixture={...d,version:'additional-render-'+d.version,questions:fresh.map(q=>({...q,pool:'practice'}))};fixture.inventory=E.inventory(fixture.questions);
 const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8').replace(/(<script type="application\/json" id="cfa-data">)[\s\S]*?(<\/script>)/,(_,a,b)=>a+JSON.stringify(fixture).replaceAll('<','\\u003c')+b),p=await browser.newPage({viewport:{width:1440,height:1600}}),errors=[];p.on('pageerror',e=>errors.push(e.message));t.after(async()=>{await p.close();assert.deepEqual(errors,[]);});await p.route(url+'/',r=>r.fulfill({body:html,contentType:'text/html'}));let count=0,formulas=0;
 const targets=new Set(['c-ethics-16','d-quant-06','d-economics-05','c-statements-04','c-corporate-12','c-equity-18','d-bonds-11','d-derivatives-05','d-alternatives-11','d-portfolio-02']);
 for(const unit of new Set(fresh.map(q=>q.unit))){await p.goto(url+'/#cfa~learn-'+unit);await p.locator('[data-train-unit]').click();const bank=fresh.filter(q=>q.unit===unit);
  for(const [i,q]of bank.entries()){count++;assert.equal(await p.locator('#cfa-question-title').innerText(),q.stem);assert.equal(await p.locator('.cfa-solution').count(),0);const labels=await p.locator('.cfa-choices label span').allTextContents();for(const [j,o]of q.options.entries())assert.equal(labels[j],String.fromCharCode(65+j)+'. '+o.text);
   await p.locator('input[name=cfa-answer]').nth((q.correct+1)%3).check();await p.locator('#cfa-check').click();assert.match(await p.locator('.cfa-solution h3').innerText(),/^Noch nicht/);assert.equal(await p.locator('.cfa-choices label.correct input').getAttribute('value'),String(q.correct));const solution=p.locator('.cfa-solution');for(const o of q.options)assert.ok((await solution.innerText()).includes(o.why),q.id);
   const fs=q.solution.filter(b=>b.kind==='formula');assert.equal(await solution.locator('.cfa-formula').count(),fs.length);formulas+=fs.length;
   for(const [j,f]of fs.entries()){const box=solution.locator('.cfa-formula').nth(j);assert.equal(await box.locator('math').first().getAttribute('display'),'block');await box.locator('.formula-notation summary').click();for(const symbol of f.symbols)assert.ok((await box.innerText()).includes(symbol.meaning));}
   assert.equal(await solution.locator('a[href="#cfa~learn-'+q.unit+'~'+q.section+'"]').count(),1);
   for(const width of [320,390,600,1440]){await p.setViewportSize({width,height:1600});assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),q.id+' '+width);if(width===320)for(const [j,r]of (await solution.locator('.study-equation').all()).entries())if(await r.evaluate(e=>e.scrollWidth>e.clientWidth+1)){await r.focus();await p.keyboard.press('ArrowRight');await p.waitForFunction(e=>e.scrollLeft>0,await r.elementHandle());keyboard.push(q.id+'/'+j);await r.evaluate(e=>e.scrollLeft=0);}}
   if(targets.has(q.id)){for(const width of [390,1440]){await p.setViewportSize({width,height:1800});const name=q.id+'-'+width;await p.locator('.cfa-question').screenshot({path:'test-results/90-'+name+'.png'});views.push(name);}await solution.locator('a[href="#cfa~learn-'+q.unit+'~'+q.section+'"]').click();await p.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,q.section);await p.goBack();assert.equal(await p.locator('#cfa-question-title').innerText(),q.stem);}
   if(i<bank.length-1)await p.locator('#cfa-train-next').click();
  }
 }
 assert.equal(count,360);assert.equal(formulas,206);assert.equal(views.length,20);assert.ok(keyboard.length>=5);await p.goto(url+'/#cfa~journal');assert.equal(await p.locator('#page-cfa .cfa-module').count(),360);
});

test('November skewness and beta comparisons expose complete notation and tables on mobile and desktop',async t=>{
 const p=await browser.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));t.after(async()=>{await p.close();assert.deepEqual(errors,[]);});
 for(const [unit,section,heading,count]of [['distributions','discrete','Gleiche Varianz',2],['multiples','peers','Gleicher Gleichlauf',3]]){
  await p.goto(url+'/#cfa~learn-'+unit+'~'+section);const area=p.locator('#cfa-section-'+section);if(unit==='multiples')await area.locator('.cfa-disclosure summary').filter({hasText:'Beta ist mehr'}).click();const example=area.locator('.cfa-example').filter({hasText:heading});assert.equal(await example.locator('tbody tr').count(),unit==='distributions'?3:2);
  const boxes=unit==='multiples'?area.locator('.cfa-disclosure').filter({hasText:'Beta ist mehr'}).locator('.cfa-formula'):area.locator('.cfa-formula').filter({hasText:/standardisierte Schiefe der Binomialanzahl|Der Nenner ist gleich/});assert.equal(await boxes.count(),count);for(const box of await boxes.all()){await box.locator('.formula-notation summary').click();assert.ok((await box.locator('dd').count())>0);assert.equal(await box.locator('math').first().getAttribute('display'),'block');}
  for(const width of [320,390,1440]){await p.setViewportSize({width,height:1600});assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}await p.setViewportSize({width:390,height:2200});await example.screenshot({path:'test-results/90-november-'+unit+'-390.png'});
 }
});
