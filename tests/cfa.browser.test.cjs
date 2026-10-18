const {test,before,after}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require('playwright'),{createServer}=require('../.server.js'),{compile}=require('../finance-cfa/compile.cjs'),E=require('../finance-cfa/engine.cjs');
let server,browser,url;const actual=compile();
before(async()=>{server=createServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));url='http://127.0.0.1:'+server.address().port;browser=await chromium.launch({headless:true,channel:process.env.BROWSER_CHANNEL||'msedge'});});
after(async()=>{await browser.close();await new Promise(r=>server.close(r));});
async function open(t,route='cfa'){
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));t.after(async()=>{await page.close();assert.deepEqual(errors,[]);});await page.goto(url+'/#'+route);return page;
}

test('floater and money-market calculators preserve the existing repo route and switch independently with working resets and offline access',async t=>{
 const page=await open(t,'cfa~learn-floating-yields~frn-workflow');
 await page.locator('#cfa-section-frn-workflow .cfa-exploration a').click();await page.waitForFunction(()=>document.activeElement.id==='study-lab');
 const metrics=async()=>page.locator('#lab-metrics strong').evaluateAll(es=>es.map(e=>Number(e.textContent.replaceAll('.','').replace(',','.').replace('−','-'))));
 assert.equal(await page.locator('#study-lab').getAttribute('data-model'),'floater');assert.equal(await page.locator('.study-lab-controls input[type=number]').count(),4);assert.equal(await page.locator('.study-lab-controls select').count(),1);
 let m=await metrics();assert.ok(Math.abs(m[1]-200)<.0001);assert.ok(Math.abs(m[3]-1.25)<.0001);assert.equal(await page.locator('#lab-projection .study-model-table').first().locator('tbody tr').count(),8);
 await page.locator('[data-model-preset="1"]').click();assert.ok(Math.abs((await metrics())[1]-100)<.0001);
 await page.locator('[data-model-preset="2"]').click();m=await metrics();assert.ok(Math.abs(m[1]-100)<.0001);assert.ok(Math.abs(m[3]-1.75)<.0001);
 await page.locator('[data-model-preset="3"]').click();m=await metrics();assert.ok(Math.abs(m[1]-150)<.0001);assert.ok(Math.abs(m[3]-.25)<.0001);
 await page.locator('#lab-qm').fill('-100');assert.equal(await page.locator('#lab-error').isVisible(),true);await page.locator('#lab-reset').click();assert.equal(await page.locator('#lab-error').isVisible(),false);
 await page.locator('#lab-frequency').selectOption('2');assert.equal(await page.locator('#lab-projection .study-model-table').first().locator('tbody tr').count(),4);assert.ok(Math.abs((await metrics())[3]-2.5)<.0001);
 await page.locator('[data-range=price]').evaluate(e=>{e.value='100';});await page.locator('[data-range=price]').dispatchEvent('input');assert.equal(await page.locator('#lab-price').inputValue(),'100');assert.ok(Math.abs((await metrics())[1]-100)<.0001);
 await page.locator('.study-lab-switcher a[href="#lesson-bonds-02~lab-moneyyield"]').click();assert.equal(await page.locator('#study-lab').getAttribute('data-model'),'moneyyield');m=await metrics();assert.ok(Math.abs(m[0]-2.0408163)<.0001);assert.ok(Math.abs(m[3]-4.138322)<.0001);
 await page.locator('[data-model-preset="1"]').click();m=await metrics();assert.ok(Math.abs(m[0]-2.0408163)<.0001);assert.ok(Math.abs(m[3]-8.276644)<.0001);
 await page.locator('[data-model-preset="2"]').click();m=await metrics();assert.ok(m.every(x=>x<0));await page.locator('#lab-days').fill('90.5');assert.equal(await page.locator('#lab-error').isVisible(),true);await page.locator('#lab-reset').click();assert.equal(await page.locator('#lab-error').isVisible(),false);
 await page.locator('.study-lab-switcher a[href="#lesson-bonds-02~lab"]').click();assert.equal(await page.locator('#study-lab').getAttribute('data-model'),'repofunding');assert.equal(await page.locator('.study-lab-controls input[type=number]').count(),6);
 await page.goto(url+'/#cfa~learn-floating-yields~money-workflow');await page.locator('#cfa-section-money-workflow .cfa-exploration a').click();assert.equal(await page.locator('#study-lab').getAttribute('data-model'),'moneyyield');await page.goBack();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-money-workflow');
 const off=await browser.newPage({viewport:{width:390,height:900}}),errors=[];off.on('pageerror',e=>errors.push(e.message));t.after(async()=>{await off.close();assert.deepEqual(errors,[]);});await off.context().setOffline(true);
 await off.goto(require('node:url').pathToFileURL(require('node:path').join(__dirname,'../index.html')).href+'#lesson-bonds-02~lab-floater');assert.equal(await off.locator('#study-lab').getAttribute('data-model'),'floater');await off.locator('.study-lab-switcher a[href="#lesson-bonds-02~lab-moneyyield"]').click();await off.locator('[data-model-preset="3"]').click();assert.match(await off.locator('#lab-metrics strong').first().innerText(),/^2,0408/);
});

test('floater and money-market textbook graphs and both calculators remain readable and keyboard-scrollable on narrow screens',async t=>{
 const page=await open(t,'cfa~learn-floating-yields');assert.equal(await page.locator('#page-cfa .cfa-section').count(),30);assert.equal(await page.locator('#page-cfa .cfa-figure').count(),5);
 for(const[section,count]of [['reset-case',41],['spread-case',83],['base-vs-spread',37],['money-case',162],['maturity-case',69]]){const f=page.locator('#cfa-section-'+section+' .cfa-figure');await f.locator('details summary').click();assert.equal(await f.locator('tbody tr').count(),count);await f.locator('details summary').click();}
 assert.ok(await page.locator('#page-cfa .cfa-figure').evaluateAll(es=>es.every(e=>e.getBoundingClientRect().width<=641)));
 assert.ok(await page.locator('#page-cfa .cfa-figure svg').evaluateAll(es=>es.every(svg=>{const b=svg.getBoundingClientRect();return [...svg.querySelectorAll('text')].every(e=>{const r=e.getBoundingClientRect();return r.left>=b.left-1&&r.right<=b.right+1;});})));
 for(const width of [320,390,1100]){
  await page.setViewportSize({width,height:900});await page.goto(url+'/#cfa~learn-floating-yields~conversion');const f=page.locator('#cfa-section-conversion .cfa-formula').first();await f.locator('.formula-notation summary').click();assert.ok(await f.locator('.formula-notation').innerText());assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  for(const id of ['floater','moneyyield']){
   await page.goto(url+'/#lesson-bonds-02~lab-'+id);assert.equal(await page.locator('#study-lab').getAttribute('data-model'),id);
   if(id==='floater'){await page.locator('#lab-reference').fill('15');await page.locator('#lab-qm').fill('600');await page.locator('#lab-price').fill('90');await page.locator('#lab-years').fill('10');}
   else{await page.locator('#lab-price').fill('85');await page.locator('#lab-days').fill('30');}
   assert.ok(await page.locator('#lab-metrics strong').evaluateAll(es=>es.every(e=>{const r=document.createRange();r.selectNodeContents(e);return r.getClientRects().length===1;})));
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
   const compact=page.locator('#lab-projection .study-table-wrap').nth(id==='floater'?1:0);assert.ok(await compact.evaluate(e=>e.scrollWidth<=e.clientWidth+1));
  }
 }
 await page.setViewportSize({width:390,height:900});await page.goto(url+'/#lesson-bonds-02~lab-floater');const table=page.locator('#lab-projection .study-table-wrap').first();await table.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(120);assert.ok(await table.evaluate(e=>e.scrollLeft>0));const plot=page.locator('#lab-chart');await plot.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(120);assert.ok(await plot.evaluate(e=>e.scrollLeft>0));
 await page.goto(url+'/#lesson-bonds-02~lab-moneyyield');const wide=page.locator('#lab-projection .study-table-wrap').nth(1);await wide.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(120);assert.ok(await wide.evaluate(e=>e.scrollLeft>0));
});

test('floater margin and money-market glossary links return to precise definitions and preserve earlier meanings',async t=>{
 const page=await open(t);
 for(const[section,label,target]of [['coupon','MRR','coupon'],['coupon','Quoted Margin','margins'],['margins','Discount Margin','dm-root'],['bond-equivalent','Bond-Equivalent Yield','bond-equivalent'],['limits','Basisrisiko','limits']]){
  await page.goto(url+'/#cfa~learn-floating-yields~'+section);const a=page.locator('#cfa-section-'+section+' a.term-link:visible').filter({hasText:new RegExp('^'+label+'$','i')}).first(),id=(await a.getAttribute('href')).split('~')[1];await a.click();await page.locator('#glossary-'+id+' a[href="#cfa~learn-floating-yields~'+target+'"]').click();await page.waitForFunction(target=>document.activeElement.id==='cfa-section-'+target,target);
 }
 await page.goto(url+'/#cfa~learn-floating-yields~ranking');const a=page.locator('#cfa-section-ranking a.term-link:visible').filter({hasText:/^Add-on-Satz$/i}).first();assert.ok((await a.getAttribute('href')).includes('add-on-rendite'));
 await page.goto(url+'/#glossary~add-on-pricing');await page.waitForFunction(()=>document.activeElement.id==='glossary-add-on-pricing');assert.equal(await page.locator('#glossary-add-on-pricing a[href="#cfa~learn-business-models~complements"]').count(),1);
 await page.goto(url+'/#glossary~mrr');await page.waitForFunction(()=>document.activeElement.id==='glossary-monthly-recurring-revenue');assert.equal(await page.locator('#glossary-monthly-recurring-revenue a[href="#cfa~learn-business-models~recurring"]').count(),1);
});

test('spot spread calculator reconciles presets, changed inputs, zero-coupon invariance and keyboard tables offline',async t=>{
 const page=await open(t,'cfa~learn-fixed-yields~z-root');await page.locator('#cfa-section-z-root .cfa-exploration a').click();await page.waitForFunction(()=>document.activeElement.id==='study-lab');
 const metrics=async()=>page.locator('#lab-metrics strong').evaluateAll(xs=>xs.map(e=>Number(e.textContent.replaceAll('.','').replace(',','.').replace('−','-'))));
 assert.equal(await page.locator('.study-lab-controls input[type=number]').count(),5);assert.equal(await page.locator('[data-model-preset]').count(),4);
 let m=await metrics();assert.equal(m.length,6);assert.ok(Math.abs(m[0]-120)<.0001);assert.ok(Math.abs(m[3]-119.8916576)<.0001);assert.equal(await page.locator('#lab-projection .study-model-table').count(),2);assert.equal(await page.locator('#lab-projection .study-model-table').first().locator('tbody tr').count(),3);
 await page.locator('[data-model-preset="1"]').click();m=await metrics();assert.ok(Math.abs(m[0]-100)<.0001);assert.ok(Math.abs(m[3]-100)<.0001);
 await page.locator('[data-model-preset="2"]').click();const zero=await metrics();await page.locator('#lab-z1').fill('-2');await page.locator('#lab-z2').fill('15');m=await metrics();for(let k=0;k<6;k++)assert.ok(Math.abs(m[k]-zero[k])<.0001);
 await page.locator('[data-model-preset="3"]').click();assert.ok((await metrics())[0]<0);
 await page.locator('#lab-price').fill('0');assert.equal(await page.locator('#lab-error').isVisible(),true);assert.equal(await page.locator('#lab-results').isVisible(),false);await page.locator('#lab-reset').click();assert.equal(await page.locator('#lab-error').isVisible(),false);assert.ok(Math.abs((await metrics())[0]-120)<.0001);
 await page.locator('[data-range="price"]').evaluate(e=>{e.value='105';});await page.locator('[data-range="price"]').dispatchEvent('input');assert.equal(await page.locator('#lab-price').inputValue(),'105');assert.ok((await metrics())[0]<0);
 const ticks=await page.locator('#lab-chart text[text-anchor=end]').evaluateAll(es=>es.map(e=>Number(e.textContent.replaceAll('.','').replace(',','.'))));assert.ok(Math.min(...ticks)>80&&Math.max(...ticks)-Math.min(...ticks)<20);
 for(const[k,v]of Object.entries({coupon:0,price:140,z1:15,z2:15,z3:15}))await page.locator('#lab-'+k).fill(String(v));
 for(const width of [320,390,1100]){await page.setViewportSize({width,height:900});assert.ok(await page.locator('#lab-metrics strong').evaluateAll(es=>es.every(e=>{const r=document.createRange();r.selectNodeContents(e);return r.getClientRects().length===1;})));assert.ok(await page.locator('#lab-projection .study-model-table').nth(1).locator('td:nth-child(2)').evaluateAll(es=>es.every(e=>{const r=document.createRange();r.selectNodeContents(e);return r.getClientRects().length===1;})));assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
 await page.setViewportSize({width:390,height:900});assert.ok(await page.locator('#lab-projection .study-table-wrap').nth(1).evaluate(e=>e.scrollWidth<=e.clientWidth+1));const table=page.locator('#lab-projection .study-table-wrap').first();await table.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(100);assert.ok(await table.evaluate(e=>e.scrollLeft>0));const plot=page.locator('#lab-chart');await plot.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(100);assert.ok(await plot.evaluate(e=>e.scrollLeft>0));await page.goBack();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-z-root');
 const off=await browser.newPage({viewport:{width:390,height:900}}),errors=[];off.on('pageerror',e=>errors.push(e.message));t.after(async()=>{await off.close();assert.deepEqual(errors,[]);});await off.context().setOffline(true);
 await off.goto(require('node:url').pathToFileURL(require('node:path').join(__dirname,'../index.html')).href+'#cfa~learn-fixed-yields~z-root');await off.locator('#cfa-section-z-root .cfa-exploration a').click();await off.locator('[data-model-preset="1"]').click();assert.match(await off.locator('#lab-metrics strong').first().innerText(),/^100/);
});

test('fixed yield chapter renders exact graphs, local formula notation and mobile comparisons without document overflow',async t=>{
 const page=await open(t,'cfa~learn-fixed-yields~effective');assert.equal(await page.locator('#page-cfa .cfa-section').count(),33);assert.equal(await page.locator('#page-cfa .cfa-figure').count(),5);
 for(const[section,count]of [['effective',153],['current-case',123],['call-case',204],['z-case',122],['option-case',102]]){const f=page.locator('#cfa-section-'+section+' .cfa-figure');await f.locator('details summary').click();assert.equal(await f.locator('tbody tr').count(),count);await f.locator('details summary').click();}
 assert.ok(await page.locator('#page-cfa .cfa-figure').evaluateAll(xs=>xs.every(e=>e.getBoundingClientRect().width<=641)));
 assert.ok(await page.locator('#page-cfa .cfa-figure svg').evaluateAll(xs=>xs.every(svg=>{const b=svg.getBoundingClientRect();return [...svg.querySelectorAll('text')].every(t=>{const r=t.getBoundingClientRect();return r.left>=b.left-1&&r.right<=b.right+1;});})));
 for(const width of [390,760,1440]){await page.setViewportSize({width,height:1000});await page.goto(url+'/#cfa~learn-fixed-yields~convert');assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
 await page.setViewportSize({width:390,height:900});const notation=page.locator('#cfa-section-convert .formula-notation');await notation.locator('summary').click();assert.match(await notation.innerText(),/Ausgangsquote/);assert.match(await notation.innerText(),/gesuchte/);
 await page.goto(url+'/#cfa~learn-fixed-yields~call-case');const table=page.locator('#cfa-section-call-case .cfa-table').first();await table.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(100);assert.ok(await table.evaluate(e=>e.scrollLeft>0));
 await page.goto(url+'/#cfa~learn-fixed-yields~calculator');await page.locator('#cfa-section-calculator .cfa-exploration a').click();assert.equal(await page.locator('#lab-m').inputValue(),'1');await page.goBack();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-calculator');
});

test('fixed yield dictionary preserves contextual spreads, bond call price and existing equity call and spread meanings',async t=>{
 const page=await open(t);
 for(const[section,word,target,targetUnit='fixed-yields']of [['effective','effektive Jahresrate','compounding','return-types'],['period-rate','Periodizität','period-rate'],['current','Current Yield','current'],['call','YTC','call'],['worst','YTW','worst'],['call-case','Callpreis','call-case'],['i-spread','I-Spread','i-spread'],['i-spread','Swapspread','i-spread'],['z-definition','Z-Spread','z-definition'],['oas','OAS','oas'],['benchmarks','Spread','drivers'],['g-spread','Benchmark','benchmarks']]){
  await page.goto(url+'/#cfa~learn-fixed-yields~'+section);const a=page.locator('#cfa-section-'+section+' a.term-link:visible').filter({hasText:new RegExp('^'+word+'$','i')}).first(),id=(await a.getAttribute('href')).split('~')[1];await a.click();await page.locator('#glossary-'+id+' a[href="#cfa~learn-'+targetUnit+'~'+target+'"]').click();await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,target);
 }
 await page.goto(url+'/#cfa~learn-equity-features~options');const a=page.locator('#cfa-section-options a.term-link:visible').filter({hasText:/^Call-Preis$/i}).first(),id=(await a.getAttribute('href')).split('~')[1];await a.click();await page.locator('#glossary-'+id+' a[href="#cfa~learn-equity-features~options"]').click();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-options');
 await page.goto(url+'/#glossary~effective-annual-rate');await page.waitForFunction(()=>document.activeElement.id==='glossary-effektivzins');await page.locator('#glossary-effektivzins a[href="#cfa~learn-return-types~compounding"]').click();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-compounding');
});

test('bond valuation exposes all graph values, fractional-period symbols, controlled comparisons and the existing calculator without mobile overflow',async t=>{
 const page=await open(t,'cfa~learn-bond-prices~coupon-jump');
 assert.equal(await page.locator('#page-cfa .cfa-section').count(),30);assert.equal(await page.locator('#page-cfa .cfa-figure').count(),4);assert.equal(await page.locator('#page-cfa .cfa-formula').count(),28);
 for(const[section,count]of [['coupon-jump',204],['inverse',183],['sensitivity',244],['interpolation',41]]){const f=page.locator('#cfa-section-'+section+' .cfa-figure');await f.locator('details summary').click();assert.equal(await f.locator('tbody tr').count(),count);await f.locator('details summary').click();}
 assert.ok(await page.locator('#page-cfa .cfa-figure').evaluateAll(xs=>xs.every(e=>e.getBoundingClientRect().width<=641)));
 assert.ok(await page.locator('#page-cfa .cfa-figure svg').evaluateAll(xs=>xs.every(svg=>{const b=svg.getBoundingClientRect();return [...svg.querySelectorAll('text')].every(e=>{const t=e.getBoundingClientRect();return t.left>=b.left-1&&t.right<=b.right+1;});})));
 for(const width of [390,760,1440]){await page.setViewportSize({width,height:1000});await page.goto(url+'/#cfa~learn-bond-prices~settlement');assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
 await page.setViewportSize({width:390,height:1000});const help=page.locator('#cfa-section-settlement .formula-notation');await help.locator('summary').click();assert.match(await help.innerText(),/Verbleibender Bruchteil/);assert.match(await help.innerText(),/Indikator/);
 await page.goto(url+'/#cfa~learn-bond-prices~sensitivity');const table=page.locator('#cfa-section-sensitivity .cfa-table').first();await table.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(120);assert.ok(await table.evaluate(e=>e.scrollLeft>0));
 await page.goto(url+'/#cfa~learn-bond-prices~calculator');await page.locator('.cfa-exploration a').click();assert.equal(await page.locator('.study-lab-controls input[type=number]' ).count(),5);await page.goBack();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-calculator');
 const offline=await browser.newPage({viewport:{width:390,height:900}});t.after(()=>offline.close());await offline.context().setOffline(true);await offline.goto(require('node:url').pathToFileURL(require('node:path').join(__dirname,'../index.html')).href+'#cfa~learn-bond-prices');assert.equal(await offline.locator('#page-cfa .cfa-figure').count(),4);assert.equal(await offline.locator('#page-cfa .cfa-section').count(),30);
});

test('bond valuation vocabulary resolves full and clean context, yield, duration and matrix concepts to their exact explanations',async t=>{
 const page=await open(t);
 for(const[section,word,target]of [['yield','YTM','yield'],['accrual','Clean Price','accrual'],['settlement','Vollpreis','settlement'],['duration-bridge','Modified Duration','duration-bridge'],['matrix-process','Matrix Pricing','matrix-process'],['day-count','Tageszählkonvention','day-count'],['day-count','Ex-Kupon','day-count']]){
  await page.goto(url+'/#cfa~learn-bond-prices~'+section);if(section==='settlement')await page.locator('#cfa-section-settlement .formula-notation summary').click();const a=page.locator('#cfa-section-'+section+' a.term-link:visible').filter({hasText:new RegExp('^'+word+'$','i')}).first(),id=(await a.getAttribute('href')).split('~')[1];await a.click();await page.locator('#glossary-'+id+' a[href="#cfa~learn-bond-prices~'+target+'"]').click();await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,target);
 }
 await page.goto(url+'/#cfa~learn-bond-trading~market-value');const a=page.locator('#cfa-section-market-value a.term-link:visible').filter({hasText:/^Clean Price$/}).first(),id=(await a.getAttribute('href')).split('~')[1];await a.click();await page.locator('#glossary-'+id+' a[href="#cfa~learn-bond-trading~market-value"]').click();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-market-value');
});

test('government funding exposes exact figure data, local symbols and complete cash tables with accessible mobile and offline navigation',async t=>{
 const page=await open(t,'cfa~learn-government-funding~gross-net');
 assert.equal(await page.locator('#page-cfa .cfa-section').count(),31);assert.equal(await page.locator('#page-cfa .cfa-figure').count(),4);
 assert.ok(await page.locator('#page-cfa .cfa-figure').evaluateAll(xs=>xs.every(e=>e.getBoundingClientRect().width<=641)));
 assert.ok(await page.locator('#page-cfa .cfa-figure svg').evaluateAll(xs=>xs.every(svg=>{const box=svg.getBoundingClientRect();return [...svg.querySelectorAll('text')].every(t=>{const b=t.getBoundingClientRect();return b.left>=box.left-1&&b.right<=box.right+1;});})));
 for(const[section,count]of [['gross-net',102],['maturity',18],['project-case',82],['allocation',10]]){
  const figure=page.locator('#cfa-section-'+section+' .cfa-figure');await figure.locator('details summary').click();assert.equal(await figure.locator('tbody tr').count(),count);await figure.locator('details summary').click();
 }
 for(const width of [390,760,1440]){await page.setViewportSize({width,height:1000});await page.goto(url+'/#cfa~learn-government-funding~cash-need');assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
 await page.setViewportSize({width:390,height:900});const notation=page.locator('#cfa-section-cash-need .formula-notation').first();await notation.locator('summary').click();assert.match(await notation.innerText(),/Primärdefizit/);assert.match(await notation.innerText(),/Cashreserve/);
 await page.goto(url+'/#cfa~learn-government-funding~allocation');const table=page.locator('#cfa-section-allocation .cfa-table').first();await table.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(120);assert.ok(await table.evaluate(e=>e.scrollLeft>0));
 await page.goto(url+'/#cfa~learn-government-funding~workflow');await page.locator('.cfa-related a[href="#cfa~learn-corporate-funding~maturity-wall"]').click();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-maturity-wall');await page.goBack();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-workflow');
 const offline=await browser.newPage({viewport:{width:390,height:900}}),errors=[];offline.on('pageerror',e=>errors.push(e.message));t.after(async()=>{await offline.close();assert.deepEqual(errors,[]);});await offline.context().setOffline(true);
 await offline.goto(require('node:url').pathToFileURL(require('node:path').join(__dirname,'../index.html')).href+'#cfa~learn-government-funding');assert.equal(await offline.locator('#page-cfa .cfa-figure').count(),4);
 await offline.locator('[data-train-unit]').click();const first=actual.questions.find(q=>q.unit==='government-funding'&&q.pool==='practice');assert.equal(await offline.locator('#cfa-question-title').innerText(),first.stem);
 await offline.locator('input[name="cfa-answer"]').nth(first.correct).check();await offline.locator('#cfa-check').click();assert.match(await offline.locator('.cfa-solution h3').innerText(),/^Richtig/);
 await offline.locator('.cfa-solution a[href="#cfa~learn-government-funding~map"]').click();await offline.waitForFunction(()=>document.activeElement.id==='cfa-section-map');
});

test('public funding terms return to exact public, corporate and bond explanations while original fiscal and FX meanings remain available',async t=>{
 const page=await open(t);
 for(const[section,word,targetUnit,target]of [['cash-need','Primärdefizit','government-funding','cash-need'],['general-obligation','GO','government-funding','general-obligation'],['supranational','Callable Capital','government-funding','supranational'],['dealers','Primary Dealer','government-funding','dealers'],['formats','Uniform Price','government-funding','formats'],['cover','Bid-to-Cover','government-funding','cover'],['reopening','Reopening','government-funding','reopening'],['comparison','Spread','corporate-funding','yield-parts'],['liquidity','Bid','bond-trading','quote'],['instruments','Bills','government-funding','instruments'],['instruments','Notes','government-funding','instruments'],['instruments','Gilts','government-funding','instruments'],['instruments','Bonds','bond-features','claim'],['currency','Local Currency','government-funding','currency']]){
  await page.goto(url+'/#cfa~learn-government-funding~'+section);if(section==='cover')await page.locator('#cfa-section-cover .formula-notation summary').first().click();
  const term=page.locator('#cfa-section-'+section+' a.term-link:visible').filter({hasText:new RegExp('^'+word+'$','i')}).first(),id=(await term.getAttribute('href')).split('~')[1];await term.click();await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,id);
  await page.locator('#glossary-'+id+' a[href="#cfa~learn-'+targetUnit+'~'+target+'"]').click();await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,target);
 }
 await page.goto(url+'/#cfa~learn-fx-calculation~bid-ask');const fx=page.locator('#cfa-section-bid-ask a.term-link:visible').filter({hasText:/^Bid$/}).first(),fxId=(await fx.getAttribute('href')).split('~')[1];await fx.click();await page.locator('#glossary-'+fxId+' a[href="#cfa~learn-fx-calculation~bid-ask"]').click();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-bid-ask');
});

test('repo calculator separates principal, interest, signed margin and principal shortfall across presets, bounds and offline use',async t=>{
 const page=await open(t,'cfa~learn-corporate-funding~margin-call');
 await page.locator('.cfa-exploration a[href="#lesson-bonds-02~lab"]').click();
 const metrics=async()=>page.locator('#lab-metrics strong').evaluateAll(xs=>xs.map(x=>Number(x.textContent.replaceAll('.','').replace(',','.').replace('−','-'))));
 const check=async values=>{const got=await metrics();assert.equal(got.length,6);values.forEach((v,i)=>assert.ok(Math.abs(got[i]-v)<.00006,got[i]+' vs '+v));};
 await check([95,19/60,95+19/60,2,0,100/95*100]);
 await page.locator('[data-model-preset="1"]').click();await check([95,19/60,95+19/60,15,10,100/95*100]);
 await page.locator('[data-model-preset="2"]').click();await check([95,19/60,95+19/60,95/.9-98,0,100/95*100]);
 await page.locator('[data-model-preset="3"]').click();await check([95,19/60,95+19/60,-5,0,100/95*100]);
 await page.locator('#lab-rate').fill('0');await check([95,0,95,-5,0,100/95*100]);
 await page.locator('#lab-size').fill('0');assert.equal(await page.locator('#lab-error').isVisible(),true);assert.equal(await page.locator('#lab-results').isVisible(),false);
 await page.locator('#lab-reset').click();await check([95,19/60,95+19/60,2,0,100/95*100]);
 for(const[key,value]of Object.entries({size:500,haircut:40,rate:15,days:360,shock:-50,marginhaircut:50}))await page.locator('#lab-'+key).fill(String(value));
 await check([300,45,345,350,50,100/.6]);assert.equal(await page.locator('[data-range="shock"]').inputValue(),'-50');
 await page.locator('[data-model-preset="0"]').click();assert.ok(await page.locator('#lab-projection .study-table-wrap').evaluateAll(xs=>xs.every(e=>e.scrollWidth<=e.clientWidth+1)));
 for(const width of [390,760,1440]){await page.setViewportSize({width,height:1000});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
 await page.setViewportSize({width:390,height:900});const ledger=page.locator('#lab-projection .study-table-wrap').first();
 assert.ok(await ledger.evaluate(el=>[...el.querySelectorAll('tbody tr td:nth-child(2)')].every(td=>{const r=document.createRange();r.selectNodeContents(td);return r.getBoundingClientRect().right<=el.getBoundingClientRect().right+1;})));
 const cashTable=page.locator('#lab-projection .study-table-wrap').last();await cashTable.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(100);assert.ok(await cashTable.evaluate(e=>e.scrollLeft>0));
 await page.locator('#lab-chart').focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(100);assert.ok(await page.locator('#lab-chart').evaluate(e=>e.scrollLeft>0));
 await page.goBack();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-margin-call');
 await page.goto(url+'/#lesson-bonds-04~lab');assert.equal(await page.locator('.study-lab-repofunding').count(),0);await page.locator('#lab-close').fill('90');assert.match(await page.locator('#lab-metrics').innerText(),/−3|-3/);
 const offline=await browser.newPage({viewport:{width:390,height:900}}),errors=[];offline.on('pageerror',e=>errors.push(e.message));t.after(async()=>{await offline.close();assert.deepEqual(errors,[]);});await offline.context().setOffline(true);
 await offline.goto(require('node:url').pathToFileURL(require('node:path').join(__dirname,'../index.html')).href+'#lesson-bonds-02~lab');await offline.locator('[data-model-preset="3"]').click();
 assert.match(await offline.locator('#lab-metrics strong').nth(3).innerText(),/^[−-]5$/);assert.equal(await offline.locator('#lab-error').isVisible(),false);
});

test('corporate funding terminology preserves contextual repo margin, CP and spread while mobile mathematics remains accessible',async t=>{
 const page=await open(t);
 for(const[section,word,target]of [['repo-legs','Repo','repo-legs'],['initial-margin','Initial Margin','initial-margin'],['cp','Commercial Paper','cp'],['bank-cost','Compensating Balance','bank-cost'],['rollover','Rollover','rollover'],['yield-parts','Spread','yield-parts'],['triparty','Tri-Party-Repo','triparty'],['wrong-way','Wrong-Way Risk','wrong-way']]){
  await page.goto(url+'/#cfa~learn-corporate-funding~'+section);const term=page.locator('#cfa-section-'+section+' a.term-link:visible').filter({hasText:new RegExp('^'+word+'$','i')}).first(),id=(await term.getAttribute('href')).split('~')[1];await term.click();await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,id);
  await page.locator('#glossary-'+id+' a[href="#cfa~learn-corporate-funding~'+target+'"]').click();await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,target);
 }
 await page.goto(url+'/#cfa~learn-working-capital~funding-cost');const cp=page.locator('#cfa-section-funding-cost a.term-link:visible').filter({hasText:/^Commercial Paper$/}).first(),cpId=(await cp.getAttribute('href')).split('~')[1];await cp.click();await page.locator('#glossary-'+cpId+' a[href="#cfa~learn-working-capital~funding-cost"]').click();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-funding-cost');
 await page.setViewportSize({width:390,height:900});await page.goto(url+'/#cfa~learn-corporate-funding~margin-call');const notation=page.locator('#cfa-section-margin-call .formula-notation').first();await notation.locator('summary').click();assert.match(await notation.innerText(),/Cash-Exposition/);
 await page.goto(url+'/#cfa~learn-corporate-funding~yield-shocks');const table=page.locator('#cfa-section-yield-shocks .cfa-table').first();await table.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(100);assert.ok(await table.evaluate(e=>e.scrollLeft>0));assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
});

test('bond index calculator separates initial weights, full-price and cash contributions across presets, bounds and offline use',async t=>{
 const page=await open(t,'cfa~learn-bond-trading~index-case');await page.locator('.cfa-exploration a[href="#lesson-bonds-04~lab"]').click();
 const metrics=async()=>page.locator('#lab-metrics strong').evaluateAll(xs=>xs.map(x=>Number(x.textContent.replaceAll('.','').replace(',','.').replace('−','-'))));
 const near=(a,b)=>assert.ok(Math.abs(a-b)<.000051,a+' vs '+b);
 assert.deepEqual(await metrics(),[50,2,-.5,2,1.5,101.5]);assert.equal(await page.locator('#lab-projection .study-model-table').count(),2);
 await page.locator('[data-model-preset="1"]').click();assert.deepEqual(await metrics(),[75,2,-.75,2.5,1.75,101.75]);
 await page.locator('[data-model-preset="2"]').click();assert.deepEqual(await metrics(),[50,-7,-5,2,-3,97]);
 await page.locator('[data-model-preset="3"]').click();assert.deepEqual(await metrics(),[50,1,-1,2,1,101]);
 await page.locator('#lab-nominal').fill('300');near((await metrics())[4],1);assert.equal(await page.locator('[data-range="nominal"]').inputValue(),'300');
 await page.locator('#lab-open').fill('0');assert.equal(await page.locator('#lab-error').isVisible(),true);assert.equal(await page.locator('#lab-results').isVisible(),false);
 await page.locator('#lab-reset').click();assert.deepEqual(await metrics(),[50,2,-.5,2,1.5,101.5]);assert.equal(await page.locator('#lab-error').isVisible(),false);
 await page.locator('#lab-close').fill('0');await page.locator('#lab-coupon').fill('0');near((await metrics())[4],-49.5);
 await page.locator('#lab-reset').click();for(const[key,value]of [['nominal','500'],['open','50'],['close','160'],['coupon','10']])await page.locator('#lab-'+key).fill(value);
 const m=await metrics();near(m[1],240);near(m[4],(800+100+50+1-350)/350*100);near(m[5],100+m[4]);
 for(const width of [390,760,1440]){
  await page.setViewportSize({width,height:1000});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  if(width===1440)assert.ok(await page.locator('#lab-projection .study-table-wrap').evaluateAll(xs=>xs.every(x=>x.scrollWidth<=x.clientWidth+1)));
  if(width===390){const table=page.locator('#lab-projection .study-table-wrap').first();assert.ok(await table.evaluate(el=>[...el.querySelectorAll('tbody tr td:nth-child(2)')].every(td=>{const range=document.createRange();range.selectNodeContents(td);return range.getBoundingClientRect().right<=el.getBoundingClientRect().right+1;})),'mobile table shows A values beside row names');await table.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(150);assert.ok(await table.evaluate(e=>e.scrollLeft>0));const chart=page.locator('#lab-chart');await chart.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(150);assert.ok(await chart.evaluate(e=>e.scrollLeft>0));}
 }
 await page.goBack();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-index-case');
 await page.evaluate(()=>{location.hash='lesson-bonds-03~lab';});await page.getByRole('combobox',{name:'Tilgungsplan'}).selectOption('1');assert.deepEqual(await metrics(),[310,265,150,2.5,1000]);
 await page.evaluate(()=>{location.hash='lesson-bonds-04~lab';});await page.locator('#lab-close').fill('90');assert.deepEqual(await metrics(),[50,-7,-5,2,-3,97]);
 const offline=await browser.newPage({viewport:{width:390,height:900}}),errors=[];offline.on('pageerror',e=>errors.push(e.message));t.after(async()=>{await offline.close();assert.deepEqual(errors,[]);});await offline.context().setOffline(true);
 await offline.goto(require('node:url').pathToFileURL(require('node:path').join(__dirname,'../index.html')).href+'#lesson-bonds-04~lab');await offline.locator('[data-model-preset="1"]').click();assert.equal(await offline.locator('#lab-metrics strong').nth(4).innerText(),'1,75');assert.equal(await offline.locator('#lab-error').isVisible(),false);
});

test('bond market glossary uses contextual quotes and total return while preserving FX and equity definitions',async t=>{
 const page=await open(t);
 for(const[section,word,target]of [['quote','Bid','quote'],['quote','Ask','quote'],['costs','Mid','costs'],['venues','OTC','venues'],['reinvestment','Total Return','return-formula'],['index-case','Gesamtrendite','return-formula'],['replication','Tracking Error','replication'],['liquidity','On-the-run','liquidity'],['rebalancing','Fixing','rebalancing']]){
  await page.goto(url+'/#cfa~learn-bond-trading~'+section);if(section==='index-case'&&word==='Gesamtrendite')await page.locator('#cfa-section-index-case .formula-notation summary').last().click();const a=page.locator('#cfa-section-'+section+' a.term-link:visible').filter({hasText:new RegExp('^'+word+'$','i')}).first(),id=(await a.getAttribute('href')).split('~')[1];await a.click();await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,id);
  await page.locator('#glossary-'+id+' a[href="#cfa~learn-bond-trading~'+target+'"]').click();await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,target);
 }
 for(const[unit,section,word]of [['fx-calculation','bid-ask','Bid'],['equity-returns','returns','Gesamtrendite']]){
  await page.goto(url+'/#cfa~learn-'+unit+'~'+section);if(unit==='equity-returns')await page.locator('#cfa-section-returns .formula-notation summary').first().click();const a=page.locator('#cfa-section-'+section+' a.term-link:visible').filter({hasText:new RegExp('^'+word+'$','i')}).first(),id=(await a.getAttribute('href')).split('~')[1];await a.click();await page.locator('#glossary-'+id+' a[href="#cfa~learn-'+unit+'~'+section+'"]').click();await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,section);
 }
 await page.setViewportSize({width:390,height:900});await page.goto(url+'/#cfa~learn-bond-trading~market-value');const notation=page.locator('#cfa-section-market-value .formula-notation').first();await notation.locator('summary').click();assert.equal(await notation.getAttribute('open'),'');assert.match(await notation.innerText(),/Nominal/);
 await page.goto(url+'/#cfa~learn-bond-trading~index-rules');const table=page.locator('#cfa-section-index-rules .cfa-table').first();await table.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(150);assert.ok(await table.evaluate(e=>e.scrollLeft>0));assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
});

test('repayment calculator switches genuine plan choices, reconciles schedules and preserves offline and return navigation',async t=>{
 const page=await open(t,'cfa~learn-bond-cashflows~comparison');
 await page.locator('.cfa-exploration a[href="#lesson-bonds-03~lab"]').click();
 const metrics=async()=>page.locator('#lab-metrics strong').evaluateAll(xs=>xs.map(x=>Number(x.textContent.replaceAll('.','').replace(',','.'))));
 const near=(a,b)=>assert.ok(Math.abs(a-b)<.000051,a+' vs '+b),select=page.getByRole('combobox',{name:'Tilgungsplan'});
 assert.equal(await select.inputValue(),'2');assert.deepEqual(await select.locator('option').allTextContents(),['Endfällig','Gleiche Tilgung','Annuität','Ballon']);
 let m=await metrics();[288.59149237327324,288.59149237327324,154.36596949309387,2.5727661582182275,1000].forEach((v,i)=>near(m[i],v));
 for(const[shape,expected]of [['0',[60,1060,240,4,1000]],['1',[310,265,150,2.5,1000]],['3',[160,742,204,3.4,1000]]]){
  await select.selectOption(shape);m=await metrics();m.forEach((v,i)=>near(v,expected[i]));assert.equal(await page.locator('#lab-projection .study-model-table').first().locator('tbody tr').count(),4);
 }
 await page.locator('[data-model-preset="0"]').click();await page.locator('#lab-n').fill('3');
 const short=await metrics();await page.locator('#lab-n').fill('8');m=await metrics();assert.ok(m[0]<short[0]);assert.ok(m[2]>short[2]);assert.ok(m[3]>short[3]);assert.equal(await page.locator('[data-range="n"]').inputValue(),'8');
 await page.locator('[data-model-preset="3"]').click();m=await metrics();assert.deepEqual(m,[250,250,0,2.5,1000]);assert.equal(await select.inputValue(),'2');
 await page.locator('#lab-n').fill('1');for(const shape of ['0','1','2','3']){await select.selectOption(shape);m=await metrics();assert.deepEqual(m,[1000,1000,0,1,1000]);}
 await page.locator('#lab-n').fill('1.5');assert.equal(await page.locator('#lab-error').isVisible(),true);assert.match(await page.locator('#lab-error').innerText(),/ganze Zahl/);assert.equal(await page.locator('#lab-results').isVisible(),false);
 await page.locator('#lab-reset').click();assert.equal(await select.inputValue(),'2');assert.equal(await page.locator('#lab-error').isVisible(),false);
 await page.locator('#lab-discount').fill('9');m=await metrics();near(m[4],934.9555941901901);near(m[2],154.36596949309387);
 await page.locator('[data-range="rate"]').evaluate(e=>{e.value='0';});await page.locator('[data-range="rate"]').dispatchEvent('input');assert.equal(await page.locator('#lab-rate').inputValue(),'0');near((await metrics())[2],0);
 await page.locator('#lab-reset').click();
 for(const width of [390,760,1440]){
  await page.setViewportSize({width,height:1000});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  if(width===1440)assert.ok(await page.locator('#lab-projection .study-table-wrap').evaluateAll(xs=>xs.every(x=>x.scrollWidth<=x.clientWidth+1)));
  if(width===390){const wrap=page.locator('#lab-projection .study-table-wrap').first();assert.ok(await wrap.evaluate(e=>e.scrollWidth>e.clientWidth));await wrap.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(150);assert.ok(await wrap.evaluate(e=>e.scrollLeft>0));}
 }
 await page.goBack();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-comparison');
 // Switch models in one document so stale input handlers cannot calculate the wrong model.
 await page.evaluate(()=>{location.hash='lesson-bonds-01~lab';});await page.locator('#lab-borrow').fill('40');near((await metrics())[0],260);
 await page.evaluate(()=>{location.hash='lesson-bonds-03~lab';});await page.getByRole('combobox',{name:'Tilgungsplan'}).selectOption('1');assert.deepEqual(await metrics(),[310,265,150,2.5,1000]);
 const offline=await browser.newPage({viewport:{width:390,height:900}});t.after(()=>offline.close());await offline.context().setOffline(true);await offline.goto(require('node:url').pathToFileURL(require('node:path').join(__dirname,'../index.html')).href+'#lesson-bonds-03~lab');
 await offline.getByRole('combobox',{name:'Tilgungsplan'}).selectOption('0');assert.equal(await offline.locator('#lab-metrics strong').first().innerText(),'60');await offline.locator('[data-model-preset="2"]').click();assert.equal(await offline.locator('#lab-shape').inputValue(),'3');assert.equal(await offline.locator('#lab-error').isVisible(),false);
});

test('cash-flow glossary preserves standalone options and accounting meanings while new formulas and tables remain accessible',async t=>{
 const page=await open(t,'cfa~learn-bond-cashflows~rights');
 for(const[section,word,target]of [['rights','Call','rights'],['floor-cap','Floor','floor-cap'],['floating','Floater','floating'],['classification','Eurobond','classification'],['withholding','Quellenabzug','withholding'],['oid','Original Issue Discount','oid']]){
  await page.goto(url+'/#cfa~learn-bond-cashflows~'+section);
  const a=page.locator('#cfa-section-'+section+' a.term-link').filter({hasText:new RegExp('^'+word+'$','i')}).first(),id=(await a.getAttribute('href')).split('~')[1];await a.click();await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,id);
  await page.locator('#glossary-'+id+' a[href="#cfa~learn-bond-cashflows~'+target+'"]').click();await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,target);
 }
 await page.goto(url+'/#cfa~learn-balance-sheet~amortisation');const a=page.locator('#cfa-section-amortisation a.term-link').filter({hasText:/^Amortisation$/}).first(),id=(await a.getAttribute('href')).split('~')[1];await a.click();await page.locator('#glossary-'+id+' a[href="#cfa~learn-balance-sheet~amortisation"]').click();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-amortisation');
 await page.setViewportSize({width:390,height:900});await page.goto(url+'/#cfa~learn-bond-cashflows~annuity-case');
 const notation=page.locator('#cfa-section-annuity-case .formula-notation').first();await notation.locator('summary').click();assert.equal(await notation.getAttribute('open'),'');assert.ok((await notation.innerText()).includes('Jahresrate'));assert.ok(await notation.locator('math').count());
 const wrap=page.locator('#cfa-section-annuity-case .cfa-table').first();assert.equal(await wrap.getAttribute('tabindex'),'0');await wrap.focus();await page.keyboard.press('ArrowRight');await page.waitForTimeout(150);assert.ok(await wrap.evaluate(e=>e.scrollLeft>0));assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
});

test('bond contract calculator reconciles all presets, covenant breaches, impossible uses and accessible offline navigation',async t=>{
 const page=await open(t,'cfa~learn-bond-features~funding'),link='.cfa-exploration a[href="#lesson-bonds-01~lab"]';
 await page.locator(link).click();await page.waitForFunction(()=>document.activeElement.id==='study-lab');
 const metrics=async()=>page.locator('#lab-metrics strong').evaluateAll(es=>es.map(e=>Number(e.textContent.replace(',','.')))),near=(a,b)=>assert.ok(Math.abs(a-b)<.000051);
 let m=await metrics();near(m[0],250);near(m[1],15);near(m[2],2.9375);near(m[3],5);near(m[4],80/13.8);
 await page.locator('[data-model-preset="1"]').click();m=await metrics();near(m[1],45);near(m[2],205/80);near(m[3],35);
 await page.locator('[data-model-preset="2"]').click();m=await metrics();near(m[2],4.7);near(m[3],-85);near(m[4],50/13.8);
 const statuses=async()=>page.locator('#lab-projection .study-model-table').first().locator('tbody tr td:last-child').allTextContents();
 assert.deepEqual(await statuses(),['Rechnerisch verletzt','Rechnerisch verletzt','Erfüllt','Erfüllt']);
 assert.ok(await page.locator('#lab-projection .study-table-wrap').evaluateAll(es=>es.every(e=>e.scrollWidth<=e.clientWidth+1)),'desktop tables include the complete breach result without horizontal clipping');
 await page.locator('[data-model-preset="0"]').click();await page.locator('#lab-dividend').fill('16');
 assert.deepEqual(await statuses(),['Rechnerisch verletzt','Erfüllt','Rechnerisch verletzt','Erfüllt']);
 await page.locator('#lab-dividend').fill('26');assert.equal(await page.locator('#lab-error').isVisible(),true);assert.match(await page.locator('#lab-error').innerText(),/Zahlungen.*verfügbare/);assert.equal(await page.locator('#lab-results').isVisible(),false);
 await page.locator('#lab-reset').click();near((await metrics())[3],5);
 await page.locator('[data-range="borrow"]').fill('40');m=await metrics();near(m[0],260);near(m[1],25);near(m[2],235/80);near(m[4],80/14.4);
 await page.locator('#lab-reset').click();
 for(const width of [390,760,1440]){await page.setViewportSize({width,height:1000});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
 await page.setViewportSize({width:390,height:1000});const chart=page.locator('#lab-chart');await chart.focus();await page.keyboard.press('ArrowRight');await page.waitForFunction(()=>document.querySelector('#lab-chart').scrollLeft>0);
 const table=page.locator('#lab-projection .study-table-wrap').first();await table.focus();await page.keyboard.press('ArrowRight');await page.waitForFunction(()=>document.querySelector('#lab-projection .study-table-wrap').scrollLeft>0);
 await page.goBack();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-funding');
 await page.route(/^https?:/,r=>r.abort());const file=require('node:url').pathToFileURL(require('node:path').join(__dirname,'../index.html')).href;
 await page.goto(file+'#cfa~learn-bond-features~funding');await page.locator(link).click();near((await metrics())[3],5);
 await page.locator('[data-model-preset="1"]').click();near((await metrics())[1],45);
});

test('bond contract glossary distinguishes covenant context and keeps mathematics and recovery tables usable on mobile',async t=>{
 const page=await open(t,'cfa~learn-bond-features');assert.equal(await page.locator('#page-cfa .cfa-section').count(),33);assert.equal(await page.locator('#page-cfa .cfa-figure').count(),3);
 for(const[unit,section,term,targetUnit,target]of [['bond-features','negative-pledge','Negative Pledge','bond-features','negative-pledge'],['bond-features','indenture','Covenants','bond-features','indenture'],['balance-sheet','maturity-provisions','Covenants','balance-sheet','maturity-provisions'],['bond-features','issuer','Trustee','bond-features','indenture'],['bond-features','maintenance-incurrence','Maintenance Covenant','bond-features','maintenance-incurrence'],['bond-features','definitions','Netto-Leverage','bond-features','definitions'],['bond-features','recovery','Recovery','stakeholders','seniority']]){
  await page.goto(url+'/#cfa~learn-'+unit+'~'+section);const a=page.locator('#cfa-section-'+section+' a.term-link').filter({hasText:new RegExp('^'+term+'$','i')}).first(),id=(await a.getAttribute('href')).split('~')[1];
  await a.click();await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,id);
  await page.locator('#glossary-'+id+' a[href="#cfa~learn-'+targetUnit+'~'+target+'"]').click();await page.waitForFunction(section=>document.activeElement.id==='cfa-section-'+section,target);
 }
 await page.setViewportSize({width:390,height:1000});await page.goto(url+'/#cfa~learn-bond-features~funding');
 const formula=page.locator('#cfa-section-funding .cfa-formula').first();await formula.locator('.formula-notation summary').click();assert.match(await formula.innerText(),/freies Cash/);
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 await page.goto(url+'/#cfa~learn-bond-features~recovery');const table=page.locator('#cfa-section-recovery .cfa-table').first();await table.focus();await page.keyboard.press('ArrowRight');await page.waitForFunction(()=>document.querySelector('#cfa-section-recovery .cfa-table').scrollLeft>0);
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
});

test('fixed-income training answers every authored practice question with explained choices, notation and exact chapter returns',async t=>{
 const page=await open(t);
 for(const u of actual.units.filter(u=>u.topic==='bonds')){
  await page.goto(url+'/#cfa~learn-'+u.id);await page.locator('[data-train-unit]').click();
  const qs=actual.questions.filter(q=>q.unit===u.id&&q.pool==='practice');
  for(const[i,q]of qs.entries()){
   assert.equal(await page.locator('#cfa-question-title').innerText(),q.stem);assert.equal(await page.locator('.cfa-solution').count(),0);
   await page.locator('input[name="cfa-answer"]').nth(q.correct).check();await page.locator('#cfa-check').click();
   assert.match(await page.locator('.cfa-solution h3').innerText(),/^Richtig/);const text=await page.locator('.cfa-solution').innerText();for(const o of q.options)assert.ok(text.includes(o.why),q.id);
   const back=page.locator('.cfa-solution a[href="#cfa~learn-'+u.id+'~'+q.section+'"]');assert.equal(await back.count(),1);
   if(q.solution.some(b=>b.kind==='formula')){await page.locator('.cfa-solution .formula-notation summary').first().click();assert.equal(await page.locator('.cfa-solution .formula-notation').first().getAttribute('open'),'');}
   if(i<qs.length-1)await page.locator('#cfa-train-next').click();else{await back.click();await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,q.section);}
  }
 }
});

test('equity factor learning opens the matching CAPM model and preserves rates, negative betas and section history offline',async t=>{
 const page=await open(t,'cfa~learn-equity-factors~capm');
 await page.locator('.cfa-exploration a[href="#lesson-equity-06~lab"]').click();
 await page.waitForFunction(()=>document.activeElement.id==='study-lab');
 const metric=async()=>Number((await page.locator('#lab-metrics strong').first().innerText()).replace(',','.'));
 assert.equal(await metric(),9);
 for(const[b,expected]of [[.8,7],[1.6,11],[-.3,1.5],[1.2,9]]){await page.locator('#lab-beta').fill(String(b));assert.ok(Math.abs(await metric()-expected)<.00001);}
 await page.locator('#lab-premium').fill('6');assert.ok(Math.abs(await metric()-10.2)<.00001);
 await page.goBack();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-capm');
 await page.setViewportSize({width:390,height:1000});await page.route(/^https?:/,r=>r.abort());
 const file=require('node:url').pathToFileURL(require('node:path').join(__dirname,'../index.html')).href;
 await page.goto(file+'#cfa~learn-equity-factors~ols');
 const formula=page.locator('#cfa-section-ols .cfa-formula').first();await formula.locator('.formula-notation summary').click();
 assert.match(await formula.innerText(),/Prozentpunkte pro Monat/);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 await page.goto(file+'#cfa~learn-equity-factors~replication');
 const table=page.locator('#cfa-section-replication .cfa-table').first();
 await page.waitForFunction(()=>document.querySelector('#cfa-section-replication .cfa-table').getAttribute('tabindex')==='0');
 await table.focus();await page.keyboard.press('ArrowRight');await page.waitForFunction(()=>document.querySelector('#cfa-section-replication .cfa-table').scrollLeft>0);
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
});

test('equity factor definitions return to their exact model convention without changing established regression alpha',async t=>{
 const page=await open(t,'cfa~learn-equity-factors');
 assert.equal(await page.locator('#page-cfa .cfa-section').count(),33);assert.equal(await page.locator('#page-cfa .cfa-figure').count(),4);
 for(const[section,term,targetUnit,target]of [['co-risk','CAPM','equity-factors','capm'],['market-model','Marktmodell','equity-factors','market-model'],['apt','APT','equity-factors','apt'],['fama-french','SMB','equity-factors','fama-french'],['fama-french','HML','equity-factors','fama-french'],['estimation','Marktproxy','equity-factors','estimation'],['alpha','Alpha','regression','capm']]){
  await page.goto(url+'/#cfa~learn-equity-factors~'+section);
  const link=page.locator('#cfa-section-'+section+' a.term-link').filter({hasText:new RegExp('^'+term+'$','i')}).first(),id=(await link.getAttribute('href')).split('~')[1];
  await link.click();await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,id);
  await page.locator('#glossary-'+id+' a[href="#cfa~learn-'+targetUnit+'~'+target+'"]').click();
  await page.waitForFunction(section=>document.activeElement.id==='cfa-section-'+section,target);
 }
});

test('research terminology and legacy finance distinguish model sensitivity from signal detection and return to exact explanations',async t=>{
 const page=await open(t,'cfa~learn-research');
 assert.equal(await page.locator('#page-cfa .cfa-section').count(),28);assert.equal(await page.locator('#page-cfa .cfa-figure').count(),3);
 for(const [source,section,term,target]of [['research','sell-side','Sell-Side-Research','sell-side'],['research','buy-side','Buy-Side-Research','buy-side'],['research','sources','Informationsstichtag','sources'],['research','thesis','Variant Perception','thesis'],['research','sensitivity','Bewertungssensitivität','sensitivity'],['company','cashflow','Sensitivität','sensitivity'],['standard-v','fact-opinion','Sensitivität','sensitivity'],['ratios','forecast-conventions','Sensitivität','sensitivity'],['simulation','validation','Sensitivität','sensitivity']]){
  await page.goto(url+'/#cfa~learn-'+source+'~'+section);
  const link=page.locator('#cfa-section-'+section+' a.term-link').filter({hasText:new RegExp('^'+term+'$','i')}).first(),id=(await link.getAttribute('href')).split('~')[1];
  await link.click();await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,id);
  await page.locator('#glossary-'+id+' a[href="#cfa~learn-research~'+target+'"]').click();
  await page.waitForFunction(section=>document.activeElement.id==='cfa-section-'+section,target);
 }
 await page.goto(url+'/#cfa~learn-data-science~pipeline');
 const cleaningLink=page.locator('#cfa-section-pipeline a.term-link').filter({hasText:/^Sensitivitätsanalyse$/i}),cleaningId=(await cleaningLink.getAttribute('href')).split('~')[1];
 await cleaningLink.click();await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,cleaningId);
 await page.locator('#glossary-'+cleaningId+' a[href="#cfa~learn-forecasting~scenarios"]').click();
 await page.waitForFunction(()=>document.activeElement.id==='cfa-section-scenarios');
 for(const [legacy,target,section]of [['quant-09','research','sensitivity'],['quant-06','data-science','classification']]){
  await page.goto(url+'/#finance');
  await page.locator('#finance-quant').evaluate(e=>e.open=true);
  await page.locator('#finance-outline a[href="#lesson-'+legacy+'"]').click();
  await page.locator('#page-finance-lesson details').evaluateAll(es=>es.forEach(e=>e.open=true));
  const link=page.locator('#page-finance-lesson a.term-link').filter({hasText:/^Sensitivität$/i}).first(),id=(await link.getAttribute('href')).split('~')[1];
  await link.click();await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,id);
  await page.locator('#glossary-'+id+' a[href="#cfa~learn-'+target+'~'+section+'"]').click();
  await page.waitForFunction(section=>document.activeElement.id==='cfa-section-'+section,section);
 }
});

test('research connects to the separate forecast calculator and keeps new mathematics and tables usable offline on mobile',async t=>{
 const page=await open(t,'cfa~learn-research~assumption-map');
 await page.locator('a[href="#cfa~learn-valuation-model~sensitivity"]').click();
 await page.waitForFunction(()=>document.activeElement.id==='cfa-section-sensitivity');
 await page.locator('.cfa-exploration a[href="#lesson-equity-09~lab"]').click();
 const values=async()=>page.locator('#lab-metrics strong').evaluateAll(es=>es.map(e=>Number(e.textContent.replace(',','.'))));
 let m=await values();assert.ok(Math.abs(m[2]-78.6982494)<.000051);
 await page.locator('#lab-stableMargin').fill('18');m=await values();assert.ok(Math.abs(m[2]-96.4596250)<.000051);
 await page.goBack();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-sensitivity');
 await page.goBack();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-assumption-map');
 await page.setViewportSize({width:390,height:1000});
 await page.route(/^https?:/,r=>r.abort());
 const file=require('node:url').pathToFileURL(require('node:path').join(__dirname,'../index.html')).href;
 await page.goto(file+'#cfa~learn-research~case');
 const formula=page.locator('#cfa-section-case .cfa-formula').first();
 await formula.locator('.formula-notation summary').click();assert.match(await formula.innerText(),/Nachsteuerertrag/);
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 await page.goto(file+'#cfa~learn-research~scenarios');
 const table=page.locator('#cfa-section-scenarios .cfa-table').first();
 await page.waitForFunction(()=>document.querySelector('#cfa-section-scenarios .cfa-table').getAttribute('tabindex')==='0');
 await table.focus();await page.keyboard.press('ArrowRight');await page.waitForFunction(()=>document.querySelector('#cfa-section-scenarios .cfa-table').scrollLeft>0);
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
});

test('Kernwerk calculator reconciles profit, capital and funding, rejects impossible trade balances and works offline',async t=>{
 const page=await open(t,'cfa~learn-company~price-capital'),link='.cfa-exploration a[href="#lesson-equity-05~lab"]';
 await page.locator(link).click();await page.waitForFunction(()=>document.activeElement.id==='study-lab');
 const metrics=async()=>page.locator('#lab-metrics strong').evaluateAll(es=>es.map(e=>Number(e.textContent.replace(',','.'))));
 const near=(a,b)=>assert.ok(Math.abs(a-b)<.000051,a+' vs '+b);
 let m=await metrics();near(m[0],199.5);near(m[1],25.5);near(m[2],16.675);near(m[3],0);
 const last=async()=>page.locator('#lab-projection table').last().locator('tbody td').allTextContents();
 let row=await last();near(Number(row[2].replace(',','.')),36.425);near(Number(row[7].replace(',','.')),187.875);near(Number(row[8].replace(',','.')),187.875);
 await page.locator('[data-model-preset="1"]').click();
 m=await metrics();near(m[0],240);near(m[1],21);near(m[2],-39.25);near(m[3],21.5);
 row=await last();near(Number(row[2].replace(',','.')),10);near(Number(row[4].replace(',','.')),81.5);near(Number(row[5].replace(',','.')),113.5);
 await page.locator('[data-model-preset="0"]').click();m=await metrics();near(m[2],16.675);near(m[3],0);
 await page.locator('[data-model-preset="1"]').click();
 await page.locator('#lab-ar').fill('100');await page.locator('#lab-price').fill('20');
 assert.equal(await page.locator('#lab-error').isVisible(),true);assert.match(await page.locator('#lab-error').innerText(),/Endforderungen/);
 assert.equal(await page.locator('#lab-results').isVisible(),false);
 await page.locator('#lab-reset').click();m=await metrics();near(m[2],16.675);assert.equal(await page.locator('#lab-error').isVisible(),false);
 await page.locator('[data-range="price"]').fill('110');m=await metrics();near(m[0],209);near(m[1],35);
 await page.locator('#lab-reset').click();
 for(const width of [390,760,1440]){await page.setViewportSize({width,height:1000});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'width '+width);}
 await page.setViewportSize({width:390,height:1000});
 const plot=page.locator('#lab-chart');await plot.focus();await page.keyboard.press('ArrowRight');await page.waitForFunction(()=>document.querySelector('#lab-chart').scrollLeft>0);
 const wrap=page.locator('#lab-projection .study-table-wrap').first();await wrap.focus();await page.keyboard.press('ArrowRight');await page.waitForFunction(()=>document.querySelector('#lab-projection .study-table-wrap').scrollLeft>0);
 assert.equal(await page.locator('.study-model-plot-hint').isVisible(),true);
 assert.equal(await page.locator('.study-model-table-hint').first().isVisible(),true);
 await page.goBack();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-price-capital');
 await page.route(/^https?:/,r=>r.abort());
 const file=require('node:url').pathToFileURL(require('node:path').join(__dirname,'../index.html')).href;
 await page.goto(file+'#cfa~learn-company~price-capital');await page.locator(link).click();m=await metrics();near(m[2],16.675);
});

test('company terminology keeps operating and valuation safety margins distinct and returns to exact explanations',async t=>{
 const page=await open(t);
 for(const [unit,section,term,targetSection]of [['company','strategy','Kostenführerschaft','strategy'],['company','strategy','Differenzierung','strategy'],['company','advantage','Economic Moat','advantage'],['company','pricing','Preissetzungsmacht','pricing'],['company','operating-leverage','operativer Hebel','operating-leverage'],['company','financial-leverage','DTL','financial-leverage'],['company','breakeven','Margin of Safety','breakeven'],['valuation-overview','gap','Margin of Safety','gap']]){
  await page.goto(url+'/#cfa~learn-'+unit+'~'+section);
  const link=page.locator('#cfa-section-'+section+' a.term-link').filter({hasText:new RegExp('^'+term+'$','i')}).first(),id=(await link.getAttribute('href')).split('~')[1];
  await link.click();await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,id);
  await page.locator('#glossary-'+id+' a[href="#cfa~learn-'+unit+'~'+targetSection+'"]').click();
  await page.waitForFunction(section=>document.activeElement.id==='cfa-section-'+section,targetSection);
 }
});

test('industry definitions, symbol disclosures, wide tables and calculated figures work on mobile and offline',async t=>{
 const page=await open(t,'cfa~learn-industry');
 assert.equal(await page.locator('#page-cfa .cfa-section').count(),28);
 assert.equal(await page.locator('#page-cfa .cfa-figure').count(),4);
 for(const [source,term,targetSection]of [['taxonomies','GICS','taxonomies'],['taxonomies','ICB','taxonomies'],['taxonomies','NAICS','taxonomies'],['potential','Total Addressable Market','potential'],['interactions','Five Forces','five-forces'],['pestle','PESTLE','pestle'],['shares','Wertmäßiger Marktanteil','shares']]){
  await page.goto(url+'/#cfa~learn-industry~'+source);
  const link=page.locator('#cfa-section-'+source+' a.term-link').filter({hasText:new RegExp('^'+term+'$','i')}).first();
  const id=(await link.getAttribute('href')).split('~')[1];await link.click();
  await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,id);
  await page.locator('#glossary-'+id+' a[href="#cfa~learn-industry~'+targetSection+'"]').click();
  await page.waitForFunction(section=>document.activeElement.id==='cfa-section-'+section,targetSection);
 }
 await page.setViewportSize({width:390,height:1000});
 await page.goto(url+'/#cfa~learn-industry~shares');
 const formula=page.locator('#cfa-section-shares .cfa-formula').first();
 await formula.locator('.formula-notation summary').click();
 assert.equal(await formula.locator('.formula-notation').getAttribute('open'),'');
 assert.match(await formula.innerText(),/Mengenanteil|mengenmäßiger/);
 const table=page.locator('#cfa-section-shares .cfa-table').last();
 await page.waitForFunction(()=>[...document.querySelectorAll('#cfa-section-shares .cfa-table')].at(-1).getAttribute('tabindex')==='0');
 assert.ok(await table.evaluate(e=>e.scrollWidth>e.clientWidth));
 await table.focus();await page.keyboard.press('ArrowRight');
 await page.waitForFunction(()=>[...document.querySelectorAll('#cfa-section-shares .cfa-table')].at(-1).scrollLeft>0);
 await page.goto(url+'/#cfa~learn-industry~share-limits');
 const figure=page.locator('#cfa-section-share-limits .cfa-figure-plot');
 assert.ok(await figure.evaluate(e=>e.scrollWidth>e.clientWidth));
 await figure.focus();await page.keyboard.press('ArrowRight');
 await page.waitForFunction(()=>document.querySelector('#cfa-section-share-limits .cfa-figure-plot').scrollLeft>0);
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 await page.route(/^https?:/,r=>r.abort());
 const file=require('node:url').pathToFileURL(require('node:path').join(__dirname,'../index.html')).href;
 await page.goto(file+'#cfa~learn-industry~suppliers');
 assert.equal(await page.locator('#cfa-section-suppliers .cfa-table tbody tr').count(),4);
 await page.locator('[data-train-unit]').click();
 const first=actual.questions.find(q=>q.unit==='industry'&&q.pool==='practice');
 await page.locator('input[name="cfa-answer"]').nth(first.correct).check();await page.locator('#cfa-check').click();
 assert.match(await page.locator('.cfa-solution h3').innerText(),/^Richtig/);
 await page.locator('.cfa-solution a[href="#cfa~learn-industry~'+first.section+'"]').click();
 await page.waitForFunction(section=>document.activeElement.id==='cfa-section-'+section,first.section);
});

test('integrated forecast calculator responds, explains financing deficits and works offline with scrollable tables',async t=>{
 const page=await open(t,'cfa~learn-valuation-model~sensitivity');
 const link='.cfa-exploration a[href="#lesson-equity-09~lab"]';
 await page.locator(link).click();await page.waitForFunction(()=>document.activeElement.id==='study-lab');
 const metrics=async()=>page.locator('#lab-metrics strong').evaluateAll(es=>es.map(e=>Number(e.textContent.replace(',','.'))));
 const close=(a,b)=>assert.ok(Math.abs(a-b)<.0001,a+' != '+b);
 let m=await metrics();close(m[0],756.9824942144152);close(m[2],78.69824942144152);close(m[3],50.55);
 assert.equal(await page.locator('#lab-projection table').count(),2);
 assert.equal(await page.locator('#lab-projection table').first().locator('tbody tr').count(),3);
 await page.locator('[data-range="growth"]').fill('15');m=await metrics();close(m[3],25.125);close(m[2],89.68450342135193);
 assert.equal(await page.locator('#lab-growth').inputValue(),'15');
 await page.locator('#lab-margin').fill('8');await page.locator('#lab-wc').fill('35');
 const first=await page.locator('#lab-projection table').first().locator('tbody tr').first().locator('td').allTextContents();
 close(Number(first[7].replace(',','.')),-104.25);close(Number(first[8].replace(',','.')),0);close(Number(first[9].replace(',','.')),104.25);
 await page.locator('#lab-discount').fill('4');await page.locator('#lab-stableGrowth').fill('4');
 assert.equal(await page.locator('#lab-error').isVisible(),true);assert.match(await page.locator('#lab-error').innerText(),/Wachstum.*Diskontsatz/);
 assert.equal(await page.locator('#lab-results').isVisible(),false);
 await page.locator('#lab-reset').click();m=await metrics();close(m[2],78.69824942144152);
 assert.equal(await page.locator('#lab-error').isVisible(),false);
 for(const width of [390,760,1440]){
  await page.setViewportSize({width,height:1000});
  await page.locator('#lab-reset').click();
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'width '+width);
 }
 await page.setViewportSize({width:390,height:1000});await page.locator('#lab-reset').click();
 const plot=page.locator('#lab-chart');
 await page.waitForFunction(()=>!document.querySelector('.study-model-plot-hint').hidden);
 assert.ok(await plot.evaluate(e=>e.scrollWidth>e.clientWidth));await plot.focus();await page.keyboard.press('ArrowRight');
 await page.waitForFunction(()=>document.querySelector('#lab-chart').scrollLeft>0);
 const wrap=page.locator('#lab-projection .study-table-wrap').first();
 await page.waitForFunction(()=>!document.querySelector('#lab-projection .study-model-table-hint').hidden);
 assert.ok(await wrap.evaluate(e=>e.scrollWidth>e.clientWidth));await wrap.focus();await page.keyboard.press('ArrowRight');
 await page.waitForFunction(()=>document.querySelector('#lab-projection .study-table-wrap').scrollLeft>0);
 await page.goBack();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-sensitivity');
 await page.route(/^https?:/,r=>r.abort());
 const file=require('node:url').pathToFileURL(require('node:path').join(__dirname,'../index.html')).href;
 await page.goto(file+'#cfa~learn-valuation-model~sensitivity');await page.locator(link).click();
 await page.waitForFunction(()=>document.activeElement.id==='study-lab');m=await metrics();close(m[2],78.69824942144152);
 await page.locator('#lab-stableMargin').fill('18');m=await metrics();close(m[2],96.4596250354239);
});

test('forecast valuation terminology returns to exact explanations including existing reverse DCF aliases',async t=>{
 const page=await open(t);
 for(const [section,term]of [['architecture','Abschlussprognosemodell'],['assets','Anlagenquote'],['assets','Kapazitätsprüfung'],['terminal-capital','marginale Investitionsrendite'],['reverse','Reverse DCF']]){
  await page.goto(url+'/#cfa~learn-valuation-model~'+section);
  const link=page.locator('#cfa-section-'+section+' a.term-link:visible').filter({hasText:new RegExp('^'+term+'$','i')}).first();
  const target=(await link.getAttribute('href')).split('~')[1];await link.click();
  await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,target);
  await page.locator('#glossary-'+target+' a[href="#cfa~learn-valuation-model~'+section+'"]').click();
  await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,section);
 }
});
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
test('DCF learning connects to the working Gordon calculator with timing, invalid-growth feedback and an offline route',async t=>{
 const page=await open(t,'cfa~learn-dcf-equity~sensitivity');
 const link='.cfa-exploration a[href="#lesson-equity-08~lab"]';
 await page.locator(link).click();await page.waitForFunction(()=>document.activeElement.id==='study-lab');
 await page.locator('#lab-d').fill('2.08');await page.locator('#lab-r').fill('10');await page.locator('#lab-g').fill('4');
 const value=async()=>Number((await page.locator('#lab-metrics strong').first().innerText()).replace(',','.'));
 assert.ok(Math.abs(await value()-34.6666666667)<.006);
 await page.locator('#lab-g').fill('6');assert.ok(Math.abs(await value()-52)<.006);
 await page.locator('#lab-g').fill('10');assert.equal(await page.locator('#lab-error').isVisible(),true);
 assert.match(await page.locator('#lab-error').innerText(),/kleiner als Diskontsatz/);
 await page.locator('#lab-reset').click();assert.equal(await page.locator('#lab-error').isVisible(),false);
 await page.goBack();await page.waitForFunction(()=>document.activeElement.id==='cfa-section-sensitivity');
 await page.route(/^https?:/,r=>r.abort());
 const file=require('node:url').pathToFileURL(require('node:path').join(__dirname,'../index.html')).href;
 await page.goto(file+'#cfa~learn-dcf-equity~sensitivity');await page.locator(link).click();
 await page.waitForFunction(()=>document.activeElement.id==='study-lab');assert.ok(Math.abs(await value()-50)<.006);
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
  const strokeFailures=await page.locator('#page-cfa .cfa-figure').evaluateAll(figures=>figures.flatMap(f=>{
   const paths=[...f.querySelectorAll('.illustration-curve')],legend=[...f.querySelectorAll('.cfa-figure-legend span')];
   return paths.flatMap((p,i)=>{const dashed=getComputedStyle(legend[i]).borderTopStyle==='dashed',pattern=getComputedStyle(p).strokeDasharray;return dashed===(pattern!=='none')?[]:[f.querySelector('figcaption strong').textContent+': '+pattern];});
  }));
  assert.deepEqual(strokeFailures,[],unit.id+' graph/legend stroke mismatch');
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
 for(const [unit,section,term] of [['fiscal','multipliers','Fiskalmultiplikator'],['monetary','reserves','Geldschöpfungsmultiplikator'],['cycles','inventories','Lager-Umsatz-Relation'],['geopolitics','cooperation','Soft Power'],['fx-markets','regimes','Currency Board'],['fx-calculation','covered-parity','gedeckte Zinsparität'],['analysis-framework','management','Management Discussion and Analysis'],['balance-sheet','financial-assets','SPPI'],['cashflow-preparation','scope','Zahlungsmitteläquivalente'],['cashflow-analysis','fcfe','Nettokreditaufnahme'],['inventory','cost-flows','FIFO'],['long-assets','us-impairment','Recoverability Test'],['income-taxes','valuation-allowance','Valuation Allowance']]){
  await page.goto(url+'/#cfa~learn-'+unit+'~'+section);
  const termLink=page.locator('#cfa-section-'+section+' a.term-link:visible').filter({hasText:new RegExp('^'+term+'$')}).first();
  const target=(await termLink.getAttribute('href')).split('~')[1];
  await termLink.click();await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,target);
  await page.locator('#glossary-'+target+' a[href="#cfa~learn-'+unit+'~'+section+'"]').click();
  await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,section);
 }
 await page.goto(url+'/#cfa~learn-reporting-quality~smoothing');
 const qualityTerm=page.locator('#cfa-section-smoothing a.term-link').filter({hasText:/^Earnings Smoothing$/}).first();
 const qualityTarget=(await qualityTerm.getAttribute('href')).split('~')[1];
 await qualityTerm.click();await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,qualityTarget);
 await page.locator('#glossary-'+qualityTarget+' a[href="#cfa~learn-reporting-quality~smoothing"]').click();
 await page.waitForFunction(()=>document.activeElement.id==='cfa-section-smoothing');
 for(const [unit,section,term] of [['forecasting','biases','Outside View'],['income-statement','revenue-estimates','Konsignation'],['ratios','industry-cases','Combined Ratio'],['issuer-forms','primary-secondary','Pre-Money-Bewertung'],['stakeholders','debt-overhang','Debt Overhang'],['stakeholders','measurement','Greenwashing'],['governance','agency-costs','Agency-Kosten'],['governance','shareholder-rights','Cumulative Voting'],['working-capital','definitions','Working Capital'],['working-capital','sensitivity','Overtrading'],['working-capital','trade-discount','Skonto'],['capital-allocation','discount-consistency','Hurdle Rate'],['capital-allocation','options-map','Realoption'],['capital-structure','wacc','WACC'],['capital-structure','mm-assumptions','Modigliani-Miller-Theorem'],['capital-structure','target','Target Capital Structure'],['capital-structure','distress','Financial Distress'],['business-models','value','Value Proposition'],['business-models','lifetime','Customer Acquisition Cost'],['business-models','platforms','Take Rate'],['business-models','networks','Multi-Homing'],['equity-features','common','Common Shares'],['equity-features','cumulative','Non-Cumulative Preferred Shares'],['equity-features','conversion','Wandlungswert'],['equity-features','funding','PIPE'],['equity-features','depositary','ADR']]){
  await page.goto(url+'/#cfa~learn-'+unit+'~'+section);
  const link=page.locator('#cfa-section-'+section+' a.term-link:visible').filter({hasText:new RegExp('^'+term+'$')}).first();
  const target=(await link.getAttribute('href')).split('~')[1];await link.click();
  await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,target);
  await page.locator('#glossary-'+target+' a[href="#cfa~learn-'+unit+'~'+section+'"]').click();
  await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,section);
 }
 for(const [section,term]of [['quorum','Quorum'],['elections','Plurality Voting'],['record','Voting Record Date'],['chain','Voting Instruction Form'],['advisers','Proxy Adviser']]){
  await page.goto(url+'/#cfa~learn-voting~'+section);
  const link=page.locator('#cfa-section-'+section+' a.term-link:visible').filter({hasText:new RegExp('^'+term+'$')}).first();
  const target=(await link.getAttribute('href')).split('~')[1];await link.click();
  await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,target);
  await page.locator('#glossary-'+target+' a[href="#cfa~learn-voting~'+section+'"]').click();
  await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,section);
 }
 for(const [section,term]of [['pricing','Bookbuilding'],['venues','Alternative Trading Systems'],['orders','Market Order'],['spread','Quoted Spread'],['volume','Average Daily Volume']]){
  await page.goto(url+'/#cfa~learn-equity-trading~'+section);
  const link=page.locator('#cfa-section-'+section+' a.term-link:visible').filter({hasText:new RegExp('^'+term+'$')}).first();
  const target=(await link.getAttribute('href')).split('~')[1];await link.click();
  await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,target);
  await page.locator('#glossary-'+target+' a[href="#cfa~learn-equity-trading~'+section+'"]').click();
  await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,section);
 }
 for(const [section,term]of [['dates','Dividend Record Date'],['settlement','Settlement'],['exceptions','Due Bill'],['stock-dividend','Stock Dividend'],['reinvestment','Dividend Reinvestment Plan']]){
  await page.goto(url+'/#cfa~learn-equity-returns~'+section);
  const link=page.locator('#cfa-section-'+section+' a.term-link:visible').filter({hasText:new RegExp('^'+term+'$')}).first();
  const target=(await link.getAttribute('href')).split('~')[1];await link.click();
  await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,target);
  await page.locator('#glossary-'+target+' a[href="#cfa~learn-equity-returns~'+section+'"]').click();
  await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,section);
 }
 for(const [section,term]of [['gap','Margin of Safety'],['uncertainty','Catalyst'],['enterprise','Enterprise Value'],['basis','Going-Concern-Wert'],['selection','Sum of the Parts']]){
  await page.goto(url+'/#cfa~learn-valuation-overview~'+section);
  const link=page.locator('#cfa-section-'+section+' a.term-link:visible').filter({hasText:new RegExp('^'+term+'$')}).first();
  const target=(await link.getAttribute('href')).split('~')[1];await link.click();
  await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,target);
  await page.locator('#glossary-'+target+' a[href="#cfa~learn-valuation-overview~'+section+'"]').click();
  await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,section);
 }
 for(const [section,term]of [['ddm','Dividend Discount Model'],['horizon','Transversalitätsbedingung'],['retention','Einbehaltungsquote'],['residual-charge','Residual Income'],['clean-surplus','Clean-Surplus-Beziehung']]){
  await page.goto(url+'/#cfa~learn-dcf-equity~'+section);
  const link=page.locator('#cfa-section-'+section+' a.term-link:visible').filter({hasText:new RegExp('^'+term+'$')}).first();
  const target=(await link.getAttribute('href')).split('~')[1];await link.click();
  await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,target);
  await page.locator('#glossary-'+target+' a[href="#cfa~learn-dcf-equity~'+section+'"]').click();
  await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,section);
 }
 for(const [section,term]of [['periods','Forward P/E'],['calendar','Calendarization'],['pe-negative','Earnings Yield'],['peg','PEG'],['pb','Tangible Book Value'],['pcf','Cash Earnings']]){
  await page.goto(url+'/#cfa~learn-multiples~'+section);
  const link=page.locator('#cfa-section-'+section+' a.term-link:visible').filter({hasText:new RegExp('^'+term+'$')}).first();
  const target=(await link.getAttribute('href')).split('~')[1];await link.click();
  await page.waitForFunction(id=>document.activeElement.id==='glossary-'+id,target);
  await page.locator('#glossary-'+target+' a[href="#cfa~learn-multiples~'+section+'"]').click();
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
test('Forward in equity multiples links to its prospective basis, preserves P/E and derivative meanings, and works offline',async t=>{
 const page=await open(t,'cfa~learn-multiples~ev-bridge');
 const basis='#glossary~forward-bewertungsbasis',contract='#glossary~forward',pe='#glossary~forward-p-e';
 const forward=page.locator('#cfa-section-ev-bridge a.term-link:visible').filter({hasText:/^Forward$/}).first();
 assert.equal(await forward.getAttribute('href'),basis);await forward.click();
 await page.waitForFunction(()=>document.activeElement.id==='glossary-forward-bewertungsbasis');
 await page.locator('#glossary-forward-bewertungsbasis a[href="#cfa~learn-multiples~periods"]').click();
 await page.waitForFunction(()=>document.activeElement.id==='cfa-section-periods');
 const priceEarnings=page.locator('#cfa-section-periods a.term-link:visible').filter({hasText:/^Forward P\/E$/}).first();
 assert.equal(await priceEarnings.getAttribute('href'),pe);
 assert.ok((await page.evaluate(()=>FinanceStudy.glossaryText('Forward EBITDA','multiples'))).includes(basis));
 assert.ok((await page.evaluate(()=>FinanceStudy.glossaryText('Forward P/E','multiples'))).includes(pe));
 assert.ok((await page.evaluate(()=>FinanceStudy.glossaryText('Forward','derivatives-03'))).includes(contract));
 assert.ok((await page.evaluate(()=>FinanceStudy.glossaryText('Forward'))).includes(contract));
 await page.route(/^https?:/,r=>r.abort());
 const file=require('node:url').pathToFileURL(require('node:path').join(__dirname,'../index.html')).href;
 await page.goto(file+'#cfa~learn-multiples~ev-bridge');
 assert.equal(await page.locator('#cfa-section-ev-bridge a.term-link:visible').filter({hasText:/^Forward$/}).first().getAttribute('href'),basis);
});

test('ambiguous GMV links retain their chapter meaning in learning, training and the error journal',async t=>{
 const page=await open(t,'cfa~learn-business-models~platforms');
 const commerce='#glossary~gross-merchandise-value',portfolio='#glossary~global-minimum-variance-portfolio';
 const links=page.locator('#cfa-section-platforms a.term-link').filter({hasText:/^GMV$/});
 assert.ok(await links.count()>1);
 for(const link of await links.all())assert.equal(await link.getAttribute('href'),commerce);
 await page.locator('#cfa-section-platforms a.term-link:visible').filter({hasText:/^GMV$/}).first().click();
 await page.waitForFunction(()=>document.activeElement.id==='glossary-gross-merchandise-value');
 assert.match(await page.locator('#glossary-gross-merchandise-value').innerText(),/GMV/);
 await page.locator('#glossary-gross-merchandise-value a[href="#cfa~learn-business-models~platforms"]').click();
 await page.waitForFunction(()=>document.activeElement.id==='cfa-section-platforms');
 // Default and legacy alias bookmarks must keep their established portfolio meaning.
 assert.ok((await page.evaluate(()=>FinanceStudy.glossaryText('GMV','portfolio-math'))).includes(portfolio));
 assert.ok((await page.evaluate(()=>FinanceStudy.glossaryText('GMV'))).includes(portfolio));
 await page.goto(url+'/#glossary~gmv');
 await page.waitForFunction(()=>document.activeElement.id==='glossary-global-minimum-variance-portfolio');
 await page.goto(url+'/#cfa~learn-portfolio-math~minimum-variance');
 assert.ok(await page.locator('#cfa-section-minimum-variance a[href="'+portfolio+'"]').count());
 await page.goto(url+'/#cfa~learn-business-models');await page.locator('[data-train-unit]').click();
 const qs=actual.questions.filter(q=>q.unit==='business-models'&&q.pool==='practice'),q=qs.find(q=>q.id==='biz-31');
 for(let i=0;i<qs.indexOf(q);i++)await page.locator('#cfa-train-next').click();
 await page.locator('input[name="cfa-answer"]').nth((q.correct+1)%3).check();await page.locator('#cfa-check').click();
 const solutionLink=page.locator('.cfa-solution a.term-link').filter({hasText:/^GMV$/});
 assert.equal(await solutionLink.first().getAttribute('href'),commerce);
 await page.goto(url+'/#cfa~learn-portfolio-math');await page.goto(url+'/#cfa~journal');
 await page.locator('#page-cfa .cfa-module summary').first().click();
 assert.equal(await page.locator('.cfa-solution a.term-link').filter({hasText:/^GMV$/}).first().getAttribute('href'),commerce);
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
 for(const id of ['analysis-framework','income-statement','ratios','balance-sheet','cashflow-preparation','cashflow-analysis','inventory','long-assets','income-taxes','reporting-quality','forecasting']){
  await page.goto(url+'/#cfa~learn-'+id);await page.locator('[data-train-unit]').click();
  const questions=actual.questions.filter(q=>q.unit===id&&q.pool==='practice');
  const count=['income-statement','ratios'].includes(id)?questions.length:3;
  for(let i=0;i<count;i++){
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
   if(i<count-1)await page.locator('#cfa-train-next').click();
   else{
    await page.locator('.cfa-solution a[href="#cfa~learn-'+id+'~'+q.section+'"]').click();
    await page.waitForFunction(section=>document.activeElement.id==='cfa-section-'+section,q.section);
   }
  }
 }
});

test('corporate and equity training explains each choice and links back to the precise chapter section',async t=>{
 const page=await open(t);
 for(const unit of actual.units.filter(u=>['corporate','equity'].includes(u.topic))){
  await page.goto(url+'/#cfa~learn-'+unit.id);await page.locator('[data-train-unit]').click();
  const qs=actual.questions.filter(q=>q.unit===unit.id&&q.pool==='practice');
  for(const [i,q] of qs.entries()){
   assert.equal(await page.locator('#cfa-question-title').innerText(),q.stem);
   assert.equal(await page.locator('.cfa-solution').count(),0);
   await page.locator('input[name="cfa-answer"]').nth(q.correct).check();await page.locator('#cfa-check').click();
   assert.match(await page.locator('.cfa-solution h3').innerText(),/^Richtig/);
   const solution=await page.locator('.cfa-solution').innerText();
   for(const o of q.options)assert.ok(solution.includes(o.why),q.id);
   assert.equal(await page.locator('.cfa-solution a[href="#cfa~learn-'+unit.id+'~'+q.section+'"]').count(),1);
   if(q.solution.some(b=>b.kind==='formula')){
    await page.locator('.cfa-solution .formula-notation summary').first().click();
    assert.equal(await page.locator('.cfa-solution .formula-notation').first().getAttribute('open'),'');
   }
   if(i<qs.length-1)await page.locator('#cfa-train-next').click();
   else{
    await page.locator('.cfa-solution a[href="#cfa~learn-'+unit.id+'~'+q.section+'"]').click();
    await page.waitForFunction(id=>document.activeElement.id==='cfa-section-'+id,q.section);
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
 const captionId=await table.locator('table').getAttribute('aria-labelledby');
 assert.ok(captionId);
 const caption=page.locator('#'+captionId);
 assert.ok((await caption.innerText()).length>20);
 assert.equal(await caption.evaluate(el=>el.scrollWidth<=el.clientWidth+1),true);
 await page.waitForFunction(()=>document.querySelector('#cfa-section-dispersion .cfa-table')?.getAttribute('tabindex')==='0');
 assert.equal(await table.locator('+ .cfa-scroll-hint').isVisible(),true);
 const sectionY=await page.locator('#cfa-section-dispersion').evaluate(el=>el.getBoundingClientRect().top);
 assert.ok(sectionY>=0&&sectionY<50,'new scroll hints must not shift the targeted section out of view');
 await table.focus();await page.keyboard.press('ArrowRight');
 await page.waitForFunction(()=>document.querySelector('#cfa-section-dispersion .cfa-table').scrollLeft>0);
 assert.equal(await caption.evaluate(el=>Math.abs(el.getBoundingClientRect().left-el.parentElement.getBoundingClientRect().left)<1),true,'caption remains outside horizontal scrolling');
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
