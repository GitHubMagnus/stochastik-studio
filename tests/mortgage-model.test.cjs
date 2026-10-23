const {test}=require('node:test'),assert=require('node:assert/strict'),M=require('../finance-models.cjs');
const defaults=Object.fromEntries(M.models.mortgage.controls.map(f=>[f.key,f.value])),near=(a,b,scale=1)=>assert.ok(Math.abs(a-b)<=2e-10*Math.max(1,Math.abs(b),scale),a+' vs '+b);
// Independent closed balances: contractual amortization multiplied by the surviving fraction.
// No recurrence or exported plan function is used to construct these references.
function reference(p,cpr){
 const r=p.coupon/1200,f=p.fee/1200,y=p.discount/1200,log=Math.log1p(r),q=(1-cpr/100)**(1/12),n=p.months;
 const base=t=>r===0?p.principal*(n-t)/n:p.principal*Math.exp(t*log)*Math.expm1((n-t)*log)/Math.expm1(n*log);
 const rows=[];let pv=0,interest=0,fees=0,wal=0,capital=0;
 for(let t=1;t<=n;t++){const opening=base(t-1)*q**(t-1),ending=base(t)*q**t,principal=opening-ending,scheduled=(base(t-1)-base(t))*q**(t-1),extra=principal-scheduled,grossInterest=r*opening,fee=f*opening,net=grossInterest-fee,cash=principal+net,disc=cash/(1+y)**t;rows.push({opening,ending,principal,scheduled,extra,grossInterest,fee,investorInterest:net,cash,pv:disc});pv+=disc;interest+=grossInterest;fees+=fee;capital+=principal;wal+=t/12*principal/p.principal;}
 return {rows,pv,interest,fees,netInterest:interest-fees,capital,wal};
}
test('mortgage pool rows, graph steps and aggregate metrics match independently valued closed balances across rates, terms and prepayment scenarios',t=>{
 let scenarios=0,rows=0,points=0;
 for(const principal of [100,1000,1000000])for(const coupon of [0,.05,6,15])for(const months of [1,2,12,120,360])for(const cpr of [0,12,50])for(const fee of [...new Set([0,Math.min(coupon,.5)])])for(const discount of [0,5.5,20]){
  const p={principal,coupon,months,cpr,fee,discount},a=M.mortgagePoolPlan(p),out=M.calculate('mortgage',p);assert.equal(out.projection.collapsible,true);assert.equal(out.projection.rows.length,months);assert.equal(out.series.length,2);
  for(const[key,cp,index]of [['without',0,0],['with',cpr,1]]){const expected=reference(p,cp),actual=a[key];assert.equal(actual.rows.length,months);for(let i=0;i<months;i++){for(const k of ['opening','ending','principal','scheduled','extra','grossInterest','fee','investorInterest','cash','pv'])near(actual.rows[i][k],expected.rows[i][k],principal);near(actual.rows[i].grossPayment,actual.rows[i].grossInterest+actual.rows[i].scheduled,principal);near(actual.rows[i].cash+actual.rows[i].fee,actual.rows[i].grossPayment+actual.rows[i].extra,principal);rows++;}for(const k of ['pv','interest','fees','netInterest','capital','wal'])near(actual[k],expected[k],principal);near(actual.capital,principal,principal);near(actual.ending,0);const curve=out.series[index].points;assert.equal(curve.length,2*months+1);assert.deepEqual(curve[0],[0,principal]);for(let m=1;m<=months;m++){near(curve[2*m-1][0],m/12);near(curve[2*m][0],m/12);near(curve[2*m-1][1],expected.rows[m-1].opening,principal);near(curve[2*m][1],expected.rows[m-1].ending,principal);points+=2;}points++;}
  const expectedWith=reference(p,cpr),expectedWithout=reference(p,0),metrics=out.metrics.map(m=>m[1]);near(metrics[1],expectedWithout.pv,principal);near(metrics[2],expectedWith.pv,principal);near(metrics[3],expectedWithout.wal);near(metrics[4],expectedWith.wal);near(metrics[5],expectedWithout.netInterest,principal);near(metrics[6],expectedWith.netInterest,principal);near(metrics[7],100*(1-(1-cpr/100)**(1/12)));near(metrics[8],principal,principal);assert.ok(metrics[4]<=metrics[3]+1e-10);scenarios++;
 }
 t.diagnostic(JSON.stringify({independentScenarios:scenarios,independentlyVerifiedMonthlyRows:rows,independentlyVerifiedPlottedPoints:points}));
});
test('matching net coupon and discount produces par for any assumed prepayment while a premium and discount respond in opposite directions',()=>{
 for(const cpr of [0,6,12,24,50]){const a=M.calculate('mortgage',{...defaults,cpr}).metrics;near(a[1][1],100000);near(a[2][1],100000);}
 const premium=M.calculate('mortgage',{...defaults,discount:3}).metrics,discount=M.calculate('mortgage',{...defaults,discount:8}).metrics;assert.ok(premium[1][1]>premium[2][1]&&premium[2][1]>100000);assert.ok(discount[1][1]<discount[2][1]&&discount[2][1]<100000);
 const no=M.mortgagePoolPlan({...defaults,cpr:0});assert.deepEqual(no.with.rows,no.without.rows);const one=M.mortgagePoolPlan({...defaults,months:1});near(one.with.rows[0].extra,0);near(one.with.wal,1/12);
});
test('whole-loan exits reduce aggregate scheduled payments without recasting surviving individual-loan instalments',()=>{
 const p={principal:1000,coupon:12,months:2,cpr:12,fee:.24,discount:11.76},a=M.mortgagePoolPlan(p),q=(1-.12)**(1/12);near(a.with.rows[1].grossPayment,a.payment*q);near(a.with.rows[0].extra,(1000-a.with.rows[0].scheduled)*(1-q));near(a.with.rows[0].cash,a.with.rows[0].grossPayment+a.with.rows[0].extra-.2);
 const no=M.mortgagePoolPlan({...p,cpr:0});near(no.payment,1000*1.01**2/(1+1.01));near(no.with.rows[0].investorInterest,9.8);near(no.with.rows[1].investorInterest,502.48756218905476*.0098);near(no.with.pv,1000);
});
test('all seven mortgage presets use valid controls, distinct intended comparisons and explicit invalid-domain feedback',()=>{
 assert.equal(M.models.mortgage.controls.length,6);assert.equal(M.models.mortgage.presets.length,7);for(const preset of M.models.mortgage.presets){const p=preset.values,out=M.calculate('mortgage',p);assert.equal(out.metrics.length,9);assert.ok(out.series.every(s=>s.points.every(v=>v.every(Number.isFinite))));}
 assert.throws(()=>M.calculate('mortgage',{...defaults,coupon:0}),/Gebühr.*Vertragszins/);assert.throws(()=>M.calculate('mortgage',{...defaults,months:2.5}),/ganze Zahl/);assert.throws(()=>M.calculate('mortgage',{...defaults,principal:0}),/Anfangskapital/);assert.throws(()=>M.mortgagePoolPlan({...defaults,cpr:100}),/Hypothekenplan/);
 const zero=M.mortgagePoolPlan({...defaults,coupon:0,fee:0,discount:0});near(zero.with.pv,defaults.principal);near(zero.with.netInterest,0);assert.equal(zero.with.ending,0);
});
