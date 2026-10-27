const {test}=require('node:test'),assert=require('node:assert/strict');
const d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(x=>x.id==='floating-yields'),M=require('../finance-models.cjs');
const near=(a,b,t=1e-7)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b),sec=id=>u.sections.find(s=>s.id===id);
const number=s=>Number(String(s).replaceAll('.','').replace(',','.').replace('−','-').match(/-?\d+(?:\.\d+)?/)?.[0]);
const annuity=(C,i,n)=>i===0?C*n:C*(-Math.expm1(-n*Math.log1p(i)))/i;
const value=(R,q,dm,m,n)=>annuity(100*(R+q)/m,(R+dm)/m,n)+100/(1+(R+dm)/m)**n;
const defaults=id=>Object.fromEntries(M.models[id].controls.map(f=>[f.key,f.value]));
const run=(id,p={})=>M.calculate(id,{...defaults(id),...p});
test('floating yields cover both actual 2027 objectives with original questions and separately reachable calculators',()=>{
 assert.equal(u.sections.length,30);assert.equal(u.review.status,'checked');assert.equal(d.release,false);assert.ok(u.sources[0].url.endsWith('#page=20'));
 const qs=d.questions.filter(q=>q.unit===u.id);assert.equal(qs.filter(q=>q.pool==='practice').length,52);
 for(const pool of ['mock-a','mock-b']){assert.equal(qs.filter(q=>q.pool===pool).length,1);assert.ok(d.inventory[pool].bonds<=require('../finance-cfa/engine.cjs').blueprint.bonds);}
 for(const o of d.coverage.find(c=>c.id===u.id).objectives){assert.ok(o.sections.length>=15);assert.ok(o.practice.length>=25);assert.equal(o.mockQuestions,2);}
 const lesson=require('../finance-content/bonds.cjs')[1];assert.equal(lesson.lab,'repofunding');assert.deepEqual(lesson.additionalLabs,['floater','moneyyield']);
 assert.deepEqual(u.explorations.map(e=>e.focus),['lab-floater','lab-moneyyield']);
 assert.ok(Object.keys(M.models).length>=50);
 for(const id of ['fixed-yields','bond-prices','bond-cashflows','government-funding','return-types'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit==='floating-yields'));
});
test('printed coupon, margin, maturity and quote tables independently reconcile their amounts and units',()=>{
 const coupons=sec('reset-case').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 for(const r of coupons)near(number(r[3]),100*(number(r[1])+1)/100/4,1e-12);
 const prices=sec('spread-case').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 for(const r of prices)near(number(r[2]),value(.04,.01,number(r[0])/10000,4,8),.0000006);
 const quote=sec('money-case').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows.map(r=>number(r[2])/100);
 [2/100*2,2/98*2,2/98*365/180,(100/98)**(365/180)-1].forEach((x,i)=>near(quote[i],x,6e-9));
 const maturity=sec('maturity-case').blocks.find(b=>b.kind==='table').rows;
 for(const r of maturity){const days=number(r[0]),P=100*(1-.04*days/360);near(number(r[1]),P,6e-7);near(number(r[2])/100,100/P-1,6e-9);near(number(r[3])/100,(100/P-1)*360/days,6e-9);}
 near(100/(1+.041*180/365),98.0181534991138,1e-12);
 near(101.25/(1+.06/4),99.75369458128078,1e-10);
});
test('all 392 plotted textbook values match independent floater and money-market equations',()=>{
 let count=0;const figures=u.sections.flatMap(s=>s.blocks).filter(b=>b.kind==='figure');assert.equal(figures.length,5);
 for(const f of figures)for(const [k,s] of f.plot.series.entries())for(const [x,y] of s.points){
  let expected;
  if(f.id.endsWith('floater-coupons'))expected=(x+1)/4;
  else if(f.id.endsWith('floater-dm-price'))expected=k===0?value(.04,.01,x/10000,4,8):100;
  else if(f.id.endsWith('floater-maturity-spread'))expected=value(.04,.01,.02,4,x*4);
  else if(f.id.endsWith('money-quote-gap'))expected=k===0?(100-x)*2:(100-x)/x*200;
  else if(f.id.endsWith('money-maturity-gap'))expected=k===0?4:4/(1-.04*x/360);
  else throw Error(f.id);
  near(y,expected,1e-9);assert.ok(y>=f.plot.y[0]&&y<=f.plot.y[1],f.id+' point outside y range');count++;
 }
 assert.equal(count,392);
});
test('floater solver reconciles all valid control corners, frequency choices, exact parity and every plotted price',t=>{
 let cases=0,points=0,rejected=0;
 const refs=[-.5,0,4,15],qms=[-100,0,100,600],prices=[90,98.128519,100,110],years=[1,2,10],freqs=[1,2,4];
 for(const reference of refs)for(const qm of qms)for(const price of prices)for(const y of years)for(const m of freqs){
  const p={reference,qm,price,years:y,frequency:m};
  if(reference/100+qm/10000<0){assert.throws(()=>run('floater',p),/Gesamtkupon/);rejected++;continue;}
  const r=run('floater',p),s=r.floater,n=y*m;near(value(reference/100,qm/10000,s.discountMargin,m,n),price,2e-9);
  near(s.discountMargin,m*s.periodYield-reference/100,1e-12);near(s.coupon,100*(reference/100+qm/10000)/m,1e-12);
  near(r.projection.rows.reduce((a,row)=>a+row[6],0),price,2e-9);
  assert.equal(r.projection.rows.filter(row=>row[3]!==0).length,1);assert.equal(r.projection.rows.at(-1)[3],100);
  for(const [x,y]of r.points){near(y,value(reference/100,qm/10000,x/10000,m,n),2e-9);assert.ok(y>=r.yRange[0]&&y<=r.yRange[1]);points++;}
  cases++;
 }
 for(const reference of refs)for(const qm of [100,150,600])for(const m of freqs){const r=run('floater',{reference,qm,price:100,frequency:m});near(r.floater.discountMargin,qm/10000,1e-12);}
 assert.equal(cases,468);assert.equal(rejected,108);assert.equal(points,56628);
 assert.throws(()=>run('floater',{frequency:3}),/Frequenz/);assert.throws(()=>run('floater',{years:1.5}),/ganze/);
 t.diagnostic(JSON.stringify({validScenarios:cases,explicitlyRejectedNegativeCoupons:rejected,curveValues:points}));
});
test('floater reset and spread experiments isolate different drivers and handle both negative reference and zero coupon',()=>{
 for(const R of [-.005,0,.04,.15])near(value(R,.015,.015,4,8),100,1e-10);
 near(value(.04,.01,.02,4,4),99.0364038381121,1e-10);near(value(.04,.01,.02,4,40),92.52103869895664,1e-10);
 const r=run('floater',{reference:-.5,qm:150,price:100});near(r.floater.coupon,.25,1e-12);near(r.floater.discountMargin,.015,1e-12);
 const z=run('floater',{reference:0,qm:0,price:100});near(z.floater.periodYield,0,1e-12);near(z.floater.discountMargin,0,1e-12);assert.ok(z.projection.rows.slice(0,-1).every(row=>row[4]===0));near(z.projection.rows.at(-1)[6],100,1e-10);
 const totalFloor=100*Math.max(-.005+.015,0)/4,indexFloor=100*(Math.max(-.005,0)+.015)/4;near(totalFloor,.25,1e-12);near(indexFloor,.375,1e-12);
});
test('money-market calculator preserves price and repayment across all rates, signs, day boundaries and curve values',t=>{
 let cases=0,points=0;
 for(const price of [85,90,98,100,101,105])for(const days of [30,31,90,180,182,183,300,360,365]){
  const r=run('moneyyield',{price,days}),s=r.money,h=100/price-1;
  near(s.hpr,h,1e-14);near(s.discount360,(100-price)/100*360/days,1e-14);near(s.addon360,h*360/days,1e-14);near(s.addon365,h*365/days,1e-14);
  near(100*(1-s.discount360*days/360),price,1e-12);near(price*(1+s.addon365*days/365),100,1e-12);
  near((1+s.effective)**(days/365),100/price,1e-12);near((1+s.semiannual/2)**(2*days/365),100/price,1e-12);
  near(s.addon365,s.addon360*365/360,1e-12);
  for(const [P,a]of r.points){near(a,(100-P)/P*365/days*100,1e-10);points++;}
  if(price!==100)assert.ok(s.addon360>s.discount360);
  if(days===365)near(s.effective,s.hpr,1e-14);
  cases++;
 }
 assert.equal(cases,54);assert.equal(points,5454);assert.throws(()=>run('moneyyield',{price:0}));assert.throws(()=>run('moneyyield',{days:90.5}));
 for(const id of ['floater','moneyyield'])for(const preset of M.models[id].presets)assert.ok(M.calculate(id,preset.values).metrics.every(m=>Number.isFinite(m[1])));
 t.diagnostic(JSON.stringify({scenarios:cases,curveValues:points}));
});
test('printed Treasury supplementary case, secondary deposit and separate mock cases use the appropriate conventions',()=>{
 const A=300/(2*365)-.25,B=300/365,C=(95-100)/95,i=(-B+Math.sqrt(B*B-4*A*C))/(2*A);
 near(i,.06325160448152359,1e-12);near(95*(1+(300-365/2)*i/365)*(1+i/2),100,1e-11);
 assert.ok(Math.abs(i-5/95*365/300)>.0007);near((102-101)/101*365/90,.04015401540154015,1e-12);
 const qs=d.questions.filter(q=>q.unit===u.id),answer=id=>qs.find(q=>q.id==='fly-'+id).options[qs.find(q=>q.id==='fly-'+id).correct].text;
 const references={'01':[1000*(.03+.008)*92/360,1e-5],'04':[100000*.05*91/360,1e-5],'07':[value(.04,.01,.02,4,8),1e-5],'12':[101.25/(1+.06/4),1e-5],'22':[value(.04,.01,.02,2,4),1e-5],'27':[2/98*100,1e-5],'28':[2/100*2*100,1e-5],'29':[2/98*2*100,1e-5],'30':[2/98*365/180*100,1e-5],'31':[((100/98)**(365/180)-1)*100,1e-5],'32':[100*(1-.05*91/360),1e-5],'33':[100*(1+.04*180/360),1e-10],'34':[.04/(1-.04*180/360)*100,1e-5],'40':[i*100,1e-5],'41':[(102/101-1)*365/90*100,1e-5],'42':[100*1.02*1.01,1e-10],'45':[100/(1+.05*90/365),1e-5]};
 const english=s=>Number(s.replaceAll(',','').match(/-?\d+(?:\.\d+)?/)[0]);
 for(const [id,[x,t]]of Object.entries(references))near(english(answer(id)),x,t);
 near(4*.011-.03,.014,1e-12);near(.036*365/(360-.036*120),.036943319838056675,1e-14);
 assert.match(answer('a'),/140 bp.*3\.694332/);assert.match(answer('b'),/0\.25.*−1\.980198/);
 assert.ok(qs.filter(q=>q.pool==='practice').every(q=>!q.stem.includes('same previous case')));
});
test('new glossary terms resolve locally while prior floater, cap, call and add-on-pricing meanings remain intact',()=>{
 const g=require('../finance-glossary.cjs'),find=t=>g.filter(x=>[x.term,...x.aliases].includes(t));
 for(const [term,section]of [['Market Reference Rate','coupon'],['Quoted Margin','margins'],['Required Margin','dm-root'],['Perioden-IRR','dm-root'],['Spread-Duration','base-vs-spread'],['Geldmarkt-Diskontsatz','discount'],['Add-on-Rendite','addon'],['Bond-Equivalent Yield','bond-equivalent'],['Treasury-Investment-Rate','treasury-convention'],['Basisrisiko','limits']]){assert.equal(find(term).length,1,term);assert.deepEqual(find(term)[0].cfa,{unit:u.id,section});}
 assert.deepEqual(find('Floater')[0].cfa,{unit:'bond-cashflows',section:'floating'});
 assert.deepEqual(find('Kuponcap')[0].cfa,{unit:'bond-cashflows',section:'floor-cap'});
 assert.deepEqual(find('Add-on Pricing')[0].cfa,{unit:'business-models',section:'complements'});
 assert.deepEqual(find('MRR')[0].cfa,{unit:'business-models',section:'recurring'});
 assert.deepEqual(find('Call-Preis')[0].cfa,{unit:'equity-features',section:'options'});
 assert.equal(find('Diskontsatz')[0].cfa,undefined,'generic discount-rate meaning is not overwritten by the money-market denominator');
});
