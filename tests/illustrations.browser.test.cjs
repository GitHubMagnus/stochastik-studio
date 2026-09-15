const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require('playwright'),{createServer}=require('../.server.js');
test('all 43 illustrations: SVG bounds, formulas, source details, mobile scrolling and direct links',async t=>{
 const server=createServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const base=process.env.STUDIO_TEST_URL||'http://127.0.0.1:'+server.address().port+'/';
 const browser=await chromium.launch({headless:true,...(process.env.BROWSER_CHANNEL?{channel:process.env.BROWSER_CHANNEL}:{})});
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 t.after(async()=>{await browser.close();await new Promise(r=>server.close(r));});
 await page.goto(base+'#lesson-portfolio-03~figures');
 await page.waitForFunction(()=>document.activeElement.id==='study-figures');
 assert.equal(await page.locator('.study-jumps a[href$="~figures"]').count(),1);
 const report=await page.evaluate(async()=>{
  const failures=[];let figures=0,chapters=0;
  for(const l of FinanceStudy.lessons.filter(l=>l.illustrations.length)){
   FinanceStudy.render('lesson-'+l.id+'~figures');await new Promise(requestAnimationFrame);chapters++;
   for(const f of document.querySelectorAll('.learning-figure')){
    figures++;const svg=f.querySelector('svg'),r=svg.getBoundingClientRect();
    for(const e of svg.querySelectorAll('text')){
     if(!e.textContent.trim())continue;const b=e.getBoundingClientRect();
     if(b.left<r.left-1||b.right>r.right+1||b.top<r.top-1||b.bottom>r.bottom+1)failures.push(f.id+': clipped label '+e.textContent);
    }
    const labels=[...svg.querySelectorAll('.illustration-point-label')].filter(e=>e.textContent.trim());
    for(let i=0;i<labels.length;i++)for(let j=i+1;j<labels.length;j++){
     const a=labels[i].getBoundingClientRect(),b=labels[j].getBoundingClientRect();
     if(Math.min(a.right,b.right)>Math.max(a.left,b.left)&&Math.min(a.bottom,b.bottom)>Math.max(a.top,b.top))failures.push(f.id+': overlapping point labels '+labels[i].textContent+' / '+labels[j].textContent);
    }
    const d=f.querySelector('details');if(d.open)failures.push(f.id+': details start open');d.querySelector('summary').click();
    if(!d.open||!d.querySelector('math'))failures.push(f.id+': details/formula failed');
    if([...d.querySelectorAll('a[href^="#lesson-"]')].some(a=>!FinanceStudy.lessons.some(l=>a.hash==='#lesson-'+l.id)))failures.push(f.id+': invalid related chapter');
   }
   if(document.documentElement.scrollWidth>innerWidth+1)failures.push(l.id+': desktop overflow');
  }
  return {chapters,figures,failures};
 });
 t.diagnostic(JSON.stringify(report));assert.equal(report.figures,43);assert.deepEqual(report.failures,[]);
 fs.mkdirSync('test-results/illustrations',{recursive:true});
 for(const [lesson,id] of [['portfolio-03','efficient-frontier-cml'],['portfolio-02','utility-capital-allocation'],['economics-02','cost-curves-profit'],['economics-03','monopoly-welfare'],['economics-05','adas-demand-shock'],['economics-08','keynesian-cross'],['portfolio-12','loss-var-expected-shortfall'],['derivatives-07','binomial-price-tree'],['quant-08','hypothesis-errors-power']]){
  await page.goto(base+'#lesson-'+lesson+'~figure-'+id);await page.waitForFunction(id=>document.activeElement.id==='study-figure-'+id,id);
  await page.locator('#study-figure-'+id).screenshot({path:'test-results/illustrations/'+id+'.png'});
 }
 await page.setViewportSize({width:390,height:844});
 const mobile=await page.evaluate(async()=>{
  const failures=[];let count=0;
  for(const l of FinanceStudy.lessons.filter(l=>l.illustrations.length)){
   FinanceStudy.render('lesson-'+l.id+'~figures');await new Promise(requestAnimationFrame);
   for(const f of document.querySelectorAll('.learning-figure')){
    f.querySelector('details').open=true;const r=f.querySelector('.illustration-scroll');
    r.scrollLeft=r.scrollWidth;if(!r.scrollLeft)failures.push(f.id+': graph cannot scroll');count++;
   }
   if(document.documentElement.scrollWidth>innerWidth+1)failures.push(l.id+': mobile page overflow');
  }
  return {count,failures};
 });
 assert.equal(mobile.count,43);assert.deepEqual(mobile.failures,[]);
 await page.goto(base+'#lesson-portfolio-03~figures');await page.locator('.illustration-map a').click();
 await page.waitForFunction(()=>document.activeElement.id==='study-figure-efficient-frontier-cml');
 const region=page.locator('.illustration-scroll');await region.focus();await page.keyboard.press('ArrowRight');
 await page.waitForFunction(()=>document.querySelector('.illustration-scroll').scrollLeft>0);
 await page.screenshot({path:'test-results/illustrations/mobile-frontier.png'});
 await page.locator('.illustration-method summary').click();assert.equal(await page.locator('.illustration-method').getAttribute('open'),'');
 assert.deepEqual(errors,[]);t.diagnostic(JSON.stringify({mobile,errors}));
});
