const {test}=require('node:test'),assert=require('node:assert/strict');
const d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(u=>u.id==='bond-cashflows'),M=require('../finance-models.cjs');
const sec=id=>u.sections.find(s=>s.id===id),near=(a,b,t=1e-7)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b);
const defaults={shape:2,face:1000,rate:6,n:4,balloon:70,discount:6},run=p=>M.calculate('repayment',{...defaults,...p});
const number=s=>Number(String(s).replaceAll('.','').replace(',','.').replace('−','-').replace(/[^0-9.-]/g,''));
// Solve the level payment by terminal-balance bisection, independently of the annuity formula.
function reference(p){
 const r=p.rate/100;
 let lo=0,hi=p.face*(1+r);
 for(let j=0;j<90;j++){const payment=(lo+hi)/2;let end=p.face;for(let k=0;k<p.n;k++)end=end*(1+r)-payment;if(end>0)lo=payment;else hi=payment;}
 const payment=(lo+hi)/2;let balance=p.face;const rows=[];
 for(let k=1;k<=p.n;k++){
  const interest=balance*r;
  let principal=p.shape===0?0:p.shape===1?p.face/p.n:p.shape===2?payment-interest:p.n===1?p.face:p.face*(1-p.balloon/100)/(p.n-1);
  if(k===p.n)principal=balance;
  principal=Math.min(balance,Math.max(0,principal));rows.push([k,balance,interest,principal,interest+principal,balance-principal]);balance-=principal;
 }
 return rows;
}
test('cash-flow structures cover both actual 2027 outcomes with original training, sources and precise connections',()=>{
 assert.equal(u.sections.length,36);assert.equal(u.review.status,'draft');assert.equal(d.release,false);
 assert.match(u.sources[0].url,/2027levelitopicoutline_online\.pdf#page=19$/);
 const qs=d.questions.filter(q=>q.unit===u.id);assert.equal(qs.filter(q=>q.pool==='practice').length,46);
 for(const pool of ['mock-a','mock-b']){assert.equal(qs.filter(q=>q.pool===pool).length,1);assert.ok(d.inventory[pool].bonds<=require('../finance-cfa/engine.cjs').blueprint.bonds);}
 const c=d.coverage.find(c=>c.id===u.id);assert.deepEqual(c.objectives.map(o=>o.id),['bond-cashflows-a','bond-cashflows-b']);
 assert.ok(c.objectives.every(o=>o.sections.length>=15&&o.practice.length>=15&&o.mockQuestions===2));
 assert.equal(require('../finance-content/bonds.cjs')[0].lab,'bondcovenants');assert.equal(require('../finance-content/bonds.cjs')[2].lab,'repayment');
 assert.equal(u.explorations[0].lesson,'bonds-03');
 for(const id of ['bond-features','tvm','equity-features','capital-structure','fx-calculation'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit===u.id));
});
test('all four printed plans independently reconcile every beginning balance, interest, principal and final payment',()=>{
 for(const[id,shape]of [['bullet',0],['equal-principal',1],['annuity-case',2],['balloon',3]]){
  const blocks=sec(id).blocks,table=blocks.find(b=>b.kind==='table')||blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table');
  const expected=reference({...defaults,shape});assert.equal(table.rows.length,4);
  for(const[i,row]of table.rows.entries())for(const[j,value]of row.entries())near(number(value),expected[i][j],.00501);
 }
 const comparison=sec('comparison').blocks.find(b=>b.kind==='table');
 for(const[i,row]of comparison.rows.entries()){
  const r=reference({...defaults,shape:i});near(number(row[1]),r[0][4],.00501);near(number(row[2]),r.at(-1)[4],.00501);
  near(number(row[3]),r.reduce((s,r)=>s+r[2],0),.00501);near(number(row[4]),r.reduce((s,r)=>s+r[4]/1.06**r[0],0),.00501);
 }
});
test('all 128 repayment control corners preserve principal, balances, interest, present value and independent level-payment solutions',()=>{
 let checks=0;
 for(const shape of [0,1,2,3])for(const face of [100,10000])for(const rate of [0,20])for(const n of [1,30])for(const balloon of [0,100])for(const discount of [0,20]){
  const p={shape,face,rate,n,balloon,discount},r=M.calculate('repayment',p),expected=reference(p);checks++;
  let principal=0,interest=0,pv=0,wal=0;
  r.projection.rows.forEach((row,i)=>{row.forEach((v,j)=>near(v,expected[i][j],1e-5));principal+=row[3];interest+=row[2];pv+=row[4]/(1+discount/100)**row[0];wal+=row[0]*row[3]/face;assert.ok(row[5]>=0);});
  near(principal,face,1e-6);near(r.schedule.rows.at(-1).closing,0);near(r.metrics[2][1],interest,1e-6);near(r.metrics[3][1],wal);near(r.metrics[4][1],pv,1e-6);
  if(rate===discount)near(pv,face,1e-6);
  assert.equal(r.points.length,2*n+1);r.points.flat().forEach(v=>assert.ok(Number.isFinite(v)));
  for(let k=1;k<=n;k++){near(r.points[2*k-1][0],k);near(r.points[2*k][0],k);near(r.points[2*k-1][1],expected[k-1][1],1e-5);near(r.points[2*k][1],expected[k-1][5],1e-5);}
 }assert.equal(checks,128);
 for(const p of [{face:0},{rate:-1},{n:0},{n:1.5},{shape:4},{shape:1.1},{balloon:101},{face:NaN}])assert.throws(()=>M.repaymentSchedule({...defaults,...p}));
});
test('controlled maturity, zero-interest and balloon changes explain the economic differences without hidden rounding',()=>{
 const base=run(),short=run({n:3}),long=run({n:8});assert.ok(long.metrics[0][1]<short.metrics[0][1]);assert.ok(long.metrics[2][1]>short.metrics[2][1]);assert.ok(long.metrics[3][1]>short.metrics[3][1]);
 near(base.metrics[0][1],288.59149237327324);near(base.metrics[2][1],154.36596949309387);near(base.metrics[3][1],2.5727661582182275);
 const zero=run({rate:0,discount:0});near(zero.metrics[0][1],250);near(zero.metrics[2][1],0);near(zero.metrics[3][1],2.5);near(zero.metrics[4][1],1000);
 const balloon=run({shape:3});near(balloon.metrics[1][1],742);near(balloon.metrics[2][1],204);near(balloon.metrics[3][1],3.4);
 const bullet=run({shape:0});near(bullet.metrics[0][1],60);near(bullet.metrics[1][1],1060);near(bullet.metrics[3][1],4);
 const market=run({discount:9});near(market.metrics[4][1],934.9555941901901);near(market.stable.rows[0][5],902.8084036883986);
 assert.deepEqual(base.schedule,market.schedule,'market discount changes price, not contractual payment schedule');
 assert.equal(M.models.repayment.presets.length,4);assert.deepEqual(M.models.repayment.controls[0].choices.map(o=>o.value),[0,1,2,3]);
});
test('every one of 205 figure points matches the independent schedule, exercise alternatives or tax timing',()=>{
 let count=0;
 for(const f of u.sections.flatMap(s=>s.blocks.filter(b=>b.kind==='figure'))){
  for(const[i,s]of f.plot.series.entries())for(const[x,y]of s.points){
   count++;assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]);assert.ok(y>=f.plot.y[0]&&y<=f.plot.y[1]);
   if(f.id.endsWith('repayment-balances'))near(y,x===0?1000:reference({...defaults,shape:i})[x-1][5]);
   else if(f.id.endsWith('call-at-exercise')){const continuation=80/(1+x/100)+1080/(1+x/100)**2;near(y,i?Math.min(1020,continuation):continuation);}
   else if(f.id.endsWith('conversion-terminal'))near(y,i===0?Math.max(1000,20*x):i===1?1000:20*x);
   else if(f.id.endsWith('tax-timing')){let cost=0,price=1000/1.05**3;for(let k=1;k<=x;k++){const gain=price*.05;price+=gain;cost+=gain*.3;}near(y,i&&x<3?0:cost);}
   else assert.fail(f.id);
  }
 }assert.equal(count,205);
});
test('issuer call and investor put compare actual alternatives at one date and reconcile terminal reinvestment',()=>{
 const cont=80/1.03+1080/1.03**2;near(cont,1095.673484777076);assert.ok(cont>1020);
 near(80/1.08+1080/1.08**2,1000);assert.ok(1000<1020);
 const finalNoCall=80*1.03+1080,finalCall=1020*1.03**2;near(finalNoCall-finalCall,80.282);near(cont*1.03**2,finalNoCall);
 const putCont=40/1.09+1040/1.09**2;near(putCont,912.0444407036443);near(Math.max(putCont,1000),1000);
 for(const s of [0,35,50,60,100])assert.equal(Math.max(1000,20*s),s<=50?1000:20*s);
});
test('tax basis, withholding credit, OID cash timing and premium examples conserve the stated net cash',()=>{
 near((60*.7+30*.8)/980*100,6.73469387755102);near(60-60*.15,51);near(60*.3-60*.15,9);
 near(60-9-9,42);near((60+1000-1020)*.7,28);near(4/.7,5.714285714285714);
 const rows=sec('oid').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 let basis=1000/1.05**3,totalTax=0,annualTaxPV=0;
 for(const[k,row]of rows.entries()){
  const gain=basis*.05,tax=gain*.3;[k+1,basis,gain,tax,basis+gain,k===2?1000:0].forEach((v,j)=>near(number(row[j]),v,.00000051));
  totalTax+=tax;annualTaxPV+=tax/1.05**(k+1);basis+=gain;
 }
 near(basis,1000);near(totalTax,40.84872044055717);near(annualTaxPV,37.02161136563469);near(totalTax/1.05**3,35.28666056845452);assert.ok(annualTaxPV>totalTax/1.05**3);
 const mock=d.questions.find(q=>q.id==='bcf-a1');assert.equal(mock.options[mock.correct].text,'445.00.');
 assert.match(d.questions.find(q=>q.id==='bcf-b1').options.find(o=>o.text.includes('1,210')).text,/unsupported/);
});
test('new vocabulary preserves accounting amortization, standalone options and existing equity conversion definitions',()=>{
 const g=require('../finance-glossary.cjs'),find=term=>g.find(g=>[g.term,...g.aliases].includes(term));
 for(const[word,section]of [['Tilgung','building-blocks'],['Restschuld','building-blocks'],['Equal Principal','equal-principal'],['Annuität','annuity-derivation'],['Annuitätendarlehen','annuity-case'],['Vollamortisation','annuity-derivation'],['Balloon Payment','balloon'],['WAL','wal'],['Refinancing Risk','balloon'],['Reinvestment Risk','reinvestment'],['Zero-Coupon Bond','zero'],['PIK','pik'],['PIK Toggle','pik'],['Deferred Coupon','pik'],['Sinking Fund','sinking'],['Waterfall','waterfall'],['FRN','floating'],['Reset','floating'],['Kuponfloor','floor-cap'],['Kuponcap','floor-cap'],['Inverse Floater','floor-cap'],['Step-up','step-up'],['Indexanleihe','inflation'],['TIPS','inflation'],['Dual Currency Bond','dual-currency'],['Issuer Call','rights'],['Investor Put','put-case'],['Call Protection','call-protection'],['Make-Whole','call-protection'],['Bermudan Exercise','call-protection'],['Continuation Value','call-case'],['Bond Floor','conversion'],['Sukuk','sukuk'],['Asset-based Sukuk','sukuk'],['Asset-backed Sukuk','sukuk'],['Domestic Bond','classification'],['Foreign Bond','classification'],['Eurobond','classification'],['Samurai','classification'],['Global Bond','classification'],['Reg S','regulation'],['Quellensteuer','withholding'],['Tax Credit','withholding'],['OID','oid'],['Market Discount','oid'],['Bond Premium','premium'],['Tax Equivalent Yield','tax-comparison'],['Gross-up','issuer-tax']])assert.deepEqual(find(word).cfa,{unit:u.id,section});
 assert.deepEqual(find('Amortisation').cfa,{unit:'balance-sheet',section:'amortisation'});
 assert.equal(find('Call').term,'Call-Option');assert.equal(find('Put').term,'Put-Option');
 for(const t of ['Wandlungsverhältnis','Wandlungswert','Wandlungspreis'])assert.deepEqual(find(t).cfa,{unit:'equity-features',section:'conversion'});
 assert.ok(find('Issuer Call').contextualAliases.some(a=>a.label==='Call'&&a.units.includes(u.id)));
});
