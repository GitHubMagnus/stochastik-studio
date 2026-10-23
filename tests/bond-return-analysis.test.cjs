const {test}=require('node:test'),assert=require('node:assert/strict');
const d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(u=>u.id==='bond-return'),M=require('../finance-models.cjs');
const near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b),relative=(a,b,t=2e-11)=>near(a,b,t*Math.max(1,Math.abs(b)));
const defaults={coupon:5,initial:5,after:6,years:5,horizon:1,frequency:1},run=p=>M.calculate('bondhorizon',{...defaults,...p}),sec=id=>u.sections.find(s=>s.id===id);
// Independent annuity closed form, rather than the model's individual payment accumulation.
const pv=(C,i,n)=>Math.abs(i)<1e-14?C*n+100:C*(1-(1+i)**-n)/i+100/(1+i)**n;
const duration=(C,i,n,m)=>{const h=1e-6,derivative=(pv(C,i+h,n)-pv(C,i-h,n))/(2*h);return-derivative*(1+i)/pv(C,i,n)/m;};
const answer=id=>{const q=d.questions.find(q=>q.id==='bhr-'+id);return q.options[q.correct].text;};
const first=s=>Number(s.match(/-?\d+(?:\.\d+)?/)?.[0]);
test('bond return covers the three actual 2027 objectives with original practice and separate transfer cases',()=>{
 assert.equal(u.sections.length,34);assert.equal(u.review.status,'draft');assert.equal(d.release,false);assert.ok(u.sources[0].url.endsWith('#page=20'));
 const qs=d.questions.filter(q=>q.unit===u.id);assert.equal(qs.filter(q=>q.pool==='practice').length,60);for(const pool of ['mock-a','mock-b']){assert.equal(qs.filter(q=>q.pool===pool).length,2);assert.ok(d.inventory[pool].bonds<=require('../finance-cfa/engine.cjs').blueprint.bonds);}
 for(const o of d.coverage.find(c=>c.id===u.id).objectives){assert.ok(o.sections.length>=15);assert.ok(o.practice.length>=20);assert.ok(o.mockQuestions>=2);}
 assert.equal(require('../finance-content/bonds.cjs')[8].lab,'bondhorizon');assert.equal(require('../finance-content/bonds.cjs')[7].lab,'bond');assert.equal(Object.keys(M.models).length,49);
 for(const id of ['tvm','return-types','bond-prices','fixed-yields','yield-curves','bond-cashflows'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit==='bond-return'));
});
test('224 horizon scenarios reconcile cash, coupon interest, sale, redemption and principal interest, including every control corner',t=>{
 const scenarios=[];for(const coupon of [0,15])for(const initial of [-2,15])for(const after of [-2,15])for(const years of [1,30])for(const horizon of [.25,30])for(const frequency of [1,2])scenarios.push({coupon,initial,after,years,horizon,frequency});
 let state=20271019;const rand=()=>{state=(1664525*state+1013904223)>>>0;return state/2**32;};
 for(let j=0;j<160;j++)scenarios.push({coupon:15*rand(),initial:-2+17*rand(),after:-2+17*rand(),years:1+Math.floor(30*rand()),horizon:.25+29.75*rand(),frequency:rand()<.5?1:2});
 let points=0;
 for(const p of scenarios){const r=run(p),v=r.horizon,m=p.frequency,n=m*p.years,C=p.coupon/m,i0=p.initial/100/m,i=p.after/100/m,b=1+i,elapsed=Math.min(n,Math.floor(m*p.horizon+1e-12)),fraction=m*p.horizon-elapsed;
  const coupons=elapsed*C,couponFV=(Math.abs(i)<1e-14?coupons:C*(b**elapsed-1)/i)*b**fraction;
  const sale=elapsed<n?pv(C,i,n-elapsed)*b**fraction:0,principal=elapsed===n?100:0,principalFV=principal*b**(m*p.horizon-n);
  relative(v.price,pv(C,i0,n));relative(v.mark,pv(C,i,n));relative(v.couponCash,coupons);relative(v.couponInterest,couponFV-coupons);
  relative(v.sale,sale);relative(v.principal,principal);relative(v.principalInterest,principalFV-principal);relative(v.wealth,couponFV+sale+principalFV);
  relative(v.wealth,pv(C,i,n)*b**(m*p.horizon));relative(v.annual,Math.expm1(Math.log((couponFV+sale+principalFV)/v.price)/p.horizon));
  near(v.rows.reduce((s,r)=>s+r.weight,0),1,2e-14);relative(v.rows.reduce((s,r)=>s+r.contribution,0),v.macaulay);
  assert.ok(v.macaulay>=1/m-1e-12&&v.macaulay<=p.years+1e-12);relative(v.macaulay,duration(C,i0,n,m),3e-7);
  for(const line of r.series)for(const[x,y]of line.points){const h=line===r.series[0]?p.horizon:line===r.series[1]?v.macaulay:p.years;
   const W=pv(C,x/100/m,n)*(1+x/100/m)**(m*h);relative(y,Math.expm1(Math.log(W/pv(C,i0,n))/h)*100,3e-10);assert.ok(y>=r.yRange[0]&&y<=r.yRange[1]);points++;
  }
  r.metrics.forEach(([,v])=>assert.ok(Number.isFinite(v)));r.projection.rows.flat().filter(v=>typeof v==='number').forEach(v=>assert.ok(Number.isFinite(v)));
 }
 assert.equal(scenarios.length,224);assert.equal(points,57792);t.diagnostic(JSON.stringify({scenarios:224,independentCurveValues:points,allControlCorners:true}));
});
test('the initial purchase price stays fixed when the new yield changes and all horizons cross at the original effective yield',()=>{
 const a=run({after:4}).horizon,b=run({after:6}).horizon;near(a.price,b.price);near(a.macaulay,b.macaulay);assert.ok(a.mark>b.mark);assert.ok(a.wealth>b.wealth);
 for(const frequency of [1,2])for(const horizon of [.25,1,5,7,30]){const v=run({frequency,horizon,after:5}).horizon;near(v.annual,(1+.05/frequency)**frequency-1,1e-13);}
 const maturityLow=run({horizon:5,after:4}).horizon,maturityHigh=run({horizon:5,after:6}).horizon;assert.ok(maturityHigh.wealth>maturityLow.wealth);
});
test('analytical horizon sensitivity, duration derivative and matched-horizon curvature agree with independent finite differences',()=>{
 for(const frequency of [1,2])for(const horizon of [1,3,7]){
  const p={frequency,horizon},v=run({...p,after:5}).horizon,e=.0001,lo=run({...p,after:5-e}).horizon.wealth,hi=run({...p,after:5+e}).horizon.wealth;
  near((Math.log(hi)-Math.log(lo))/(2*e/100),(horizon-v.macaulay)/(1+.05/frequency),2e-8);
 }
 for(const frequency of [1,2]){
  const v=run({frequency,after:5}).horizon,H=v.macaulay,p={frequency,horizon:H},e=.001,mid=run({...p,after:5}).horizon,we0=mid.wealth,lo=run({...p,after:5-e}).horizon.wealth,hi=run({...p,after:5+e}).horizon.wealth;
  const variance=v.rows.reduce((s,r)=>s+r.weight*(r.t-H)**2,0);near((hi-lo)/(2*e/100)/we0,0,2e-9);near((hi-2*we0+lo)/(e/100)**2/we0,variance/(1+.05/frequency)**2,2e-5);
  const h=1e-5,Dlo=run({frequency,initial:5-h}).horizon.macaulay,Dhi=run({frequency,initial:5+h}).horizon.macaulay;
  near((Dhi-Dlo)/(2*h/100),-variance/(1+.05/frequency),2e-8);
 }
});
test('matched coupon wealth has a nonzero residual while a matched zero is exact and a post-maturity zero needs principal reinvestment',()=>{
 const D=run().horizon.macaulay;near(D,4.54595050416236,1e-13);const base=run({horizon:D,after:5}).horizon;
 for(const after of [4,6]){const v=run({horizon:D,after}).horizon;assert.ok(v.wealth>base.wealth);assert.ok(v.wealth-base.wealth<.007);}
 for(const after of [-2,0,6,15]){const v=run({coupon:0,horizon:5,after}).horizon;near(v.macaulay,5);near(v.wealth,100,1e-12);near(v.couponInterest,0);near(v.sale,0);near(v.principalInterest,0);const later=run({coupon:0,horizon:7,after}).horizon;near(later.wealth,100*(1+after/100)**2,1e-11);}
 assert.ok(run({horizon:5,initial:-1,after:-2}).horizon.couponInterest<0);
});
test('all 323 static graph values independently match their stated cash flows, horizons and axis ranges',t=>{
 let count=0;const figures=u.sections.flatMap(s=>s.blocks).filter(b=>b.kind==='figure');assert.equal(figures.length,4);
 const D=duration(5,.05,5,1);
 for(const f of figures)for(const[i,line]of f.plot.series.entries())for(const[x,y]of line.points){
  let z;if(f.id.endsWith('horizon-return')){const h=[1,D,5][i];z=((pv(5,x/100,5)*(1+x/100)**h/100)**(1/h)-1)*100;}
  else if(f.id.endsWith('cumulative-weights'))z=x===0?0:Array.from({length:x},(_,k)=>(k===4?105:5)/1.05**(k+1)).reduce((a,b)=>a+b,0);
  else if(f.id.endsWith('maturity-duration'))z=i===1?x:duration(5,.05,x,1);
  else if(f.id.endsWith('discount-duration'))z=i===1?11:duration(1,.1,x,1);
  else assert.fail(f.id);
  relative(y,z,3e-7);assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]);assert.ok(y>=f.plot.y[0]&&y<=f.plot.y[1],f.id+' outside labelled axes');count++;
 }
 assert.equal(count,323);t.diagnostic(count+' independently verified static points');
});
test('printed ledgers, contrasted maturity outcomes and duration units use complete final payments',()=>{
 const rows=sec('mac-ledger').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows,parse=s=>Number(s.replaceAll('.','').replace(',','.'));
 near(rows.reduce((s,r)=>s+parse(r[2]),0),100,2e-6);near(rows.reduce((s,r)=>s+parse(r[3]),0),1,2e-6);near(rows.reduce((s,r)=>s+parse(r[4]),0),4.54595050416236,2e-6);assert.equal(rows.at(-1)[1],'105');
 near(run({frequency:2}).horizon.macaulay,4.485432764622604,1e-13);
 for(const[after,W,R]of [[4,127.0816128,.049099170325],[5,127.62815625,.05],[6,128.1854648,.050915400743]]){const v=run({after,horizon:5}).horizon;near(v.wealth,W,1e-10);near(v.annual,R,1e-11);}
 assert.ok(duration(1,.1,30,1)>duration(1,.1,100,1));assert.ok(duration(1,.1,100,1)>11);
});
test('every numerical question is countercalculated and reserved cases test separate-rate, time-spread and changing-path transfer',()=>{
 const refs={'01':2,'02':105,'04':5*1.04**2,'05':5*1.04**2-5,'06':10,'11':128.1854648,'12':5.0915400743,'15':1.5348943873,'21':4.5459505042,'23':8.970866/2,'24':2.5,'25':7,'33':11,'35':5,'37':4.545950504/1.05,'41':103,'a1':(Math.sqrt((4*1.03+4+104/1.06)/99)-1)*100,'b1':24*.99*1.02+83*1.02,'b2':.5*.10+1*.09+1.5*.81};
 for(const[id,x]of Object.entries(refs))near(first(answer(id)),x,1e-6);
 near(Math.sqrt((5*1.03+5+105/1.06)/100)-1,.04501963509584317,1e-14);near((103/92)**(1/3)-1,.03836442166024723,1e-14);
 assert.match(answer('a2'),/first-order/);assert.match(answer('b2'),/locally increases/);assert.match(answer('a1'),/^3\.588740/);
 const q=d.questions.find(q=>q.id==='bhr-a1');near(first(q.options.find(o=>o.why.includes('Wiederanlagezins auf')).text),(Math.sqrt((4+4+104/1.06)/99)-1)*100,1e-6);
 for(const id of ['a1','a2','b1','b2'])assert.notEqual(d.questions.find(q=>q.id==='bhr-'+id).pool,'practice');
});
test('new terminology links to exact definitions while established reinvestment and WAL definitions remain available',()=>{
 const gl=require('../finance-glossary.cjs'),find=t=>gl.find(g=>[g.term,...g.aliases].includes(t));
 for(const[term,section]of [['Macaulay Duration','mac-definition'],['Investment Horizon','timeline'],['Terminal Wealth','terminal'],['Barwertgewicht','mac-definition'],['Price Risk','short'],['Reinvestment Factor','path'],['Zins auf Kupons','profit'],['Horizon Analysis','one-rate'],['Horizon Matching','horizon-derivative'],['PV-Weighted Time Variance','yield'],['Historical Purchase Price','short'],['Principal Reinvestment','after-maturity'],['One-Time Yield Shock','one-rate'],['Remaining Sale Price','timeline'],['Duration in Periods','periods']])assert.deepEqual(find(term)?.cfa,{unit:u.id,section},term);
 assert.equal(gl.filter(g=>g.term==='Macaulay Duration').length,1);assert.equal(find('Reinvestment Risk').cfa.unit,'bond-cashflows');assert.equal(find('WAL').cfa.unit,'bond-cashflows');
});
