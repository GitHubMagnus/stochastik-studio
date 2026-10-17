const {test}=require('node:test'),assert=require('node:assert/strict');
const d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(u=>u.id==='bond-trading'),M=require('../finance-models.cjs');
const sec=id=>u.sections.find(s=>s.id===id),near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b);
const number=s=>Number(String(s).replaceAll('.','').replace(',','.').replace('−','-').replace(/[^0-9.-]/g,''));
const defaults={nominal:100,open:100,close:99,coupon:3},run=p=>M.calculate('bondindex',{...defaults,...p});
test('issuance and trading cover all three actual 2027 objectives with original cases and disjoint reserved questions',()=>{
 assert.equal(u.sections.length,35);assert.equal(u.review.status,'draft');assert.equal(d.release,false);
 assert.match(u.sources[0].url,/2027levelitopicoutline_online\.pdf#page=19$/);assert.ok(u.sources.some(s=>s.title.includes('3.2 September 2026')));
 const qs=d.questions.filter(q=>q.unit===u.id);assert.equal(qs.filter(q=>q.pool==='practice').length,50);
 for(const pool of ['mock-a','mock-b']){assert.equal(qs.filter(q=>q.pool===pool).length,1);assert.ok(d.inventory[pool].bonds<=require('../finance-cfa/engine.cjs').blueprint.bonds);}
 const c=d.coverage.find(c=>c.id===u.id);assert.deepEqual(c.objectives.map(o=>[o.id,o.sections.length,o.practice.length,o.mockQuestions]),[['bond-trading-a',11,15,2],['bond-trading-b',19,22,2],['bond-trading-c',15,19,2]]);
 assert.equal(u.explorations[0].lesson,'bonds-04');assert.equal(require('../finance-content/bonds.cjs')[3].lab,'bondindex');
 for(const id of ['bond-features','bond-cashflows','benchmarks','equity-trading','standard-iii','working-capital'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit===u.id));
});
test('all six hypothetical eligibility rows apply currency, coupon, credit and remaining-maturity filters jointly',()=>{
 const rows=sec('index-rules').blocks.find(b=>b.kind==='table').rows;assert.equal(rows.length,6);
 const eligible=rows.filter(row=>row[2]==='EUR'&&row[3]==='fest'&&number(row[4])>=1&&number(row[4])<=10&&row[5]==='ja');
 assert.deepEqual(eligible.map(r=>r[0]),['A','B']);for(const row of rows)assert.equal(row[6]==='ja',eligible.includes(row));
 near(100/1.03,97.0873786407767);near(100-6,94);near(2000000*99/100,1980000);
});
test('the printed two-bond case reconciles dirty prices, cash coupons and both complete return decompositions',()=>{
 const rows=sec('index-case').blocks.find(b=>b.kind==='table').rows,values=Object.fromEntries(rows.map(r=>[r[0],r.slice(1)]));
 const asNumbers=key=>values[key].map(number);
 assert.deepEqual(asNumbers('Anfangsvollpreis'),[100,100]);assert.deepEqual(asNumbers('Endvollpreis'),[99,100]);
 assert.deepEqual(asNumbers('Anfangsmarktwert, Mio.'),[100,100]);assert.deepEqual(asNumbers('Endmarktwert, Mio.'),[99,100]);
 assert.deepEqual(asNumbers('Cashkuponzahlung, Mio.'),[3,1]);
 near((99+100+3+1)/200-1,.015);
 const fullContribution=(199-200)/200,cashContribution=4/200,cleanContribution=(99-98+100-100)/200,accrualIncome=(4+(0-2)+(0-0))/200;
 near(fullContribution+cashContribution,.015);near(cleanContribution+accrualIncome,.015);near(accrualIncome,.01);
 near((100+3-103)/103,0);near((800+200+40-1000)/1000,.04);
 near((120+90)/200-1,.05);near(120/210*.2+90/210*(-.1),.07142857142857142);
});
test('144 independent dollar-ledger scenarios including every control corner conserve index value, initial weights and signed contributions',()=>{
 let cases=0;
 for(const nominal of [50,100,300,500])for(const open of [50,100,150])for(const close of [0,90,99,160])for(const coupon of [0,3,10]){
  cases++;const r=run({nominal,open,close,coupon}),unitsA=nominal*1e6/100,unitsB=100e6/100;
  const initialA=unitsA*open,initialB=unitsB*100,initial=initialA+initialB,endA=unitsA*close,endB=unitsB*100,cashA=unitsA*coupon,cashB=unitsB;
  const w=initialA/initial,total=(endA+endB+cashA+cashB-initial)/initial*100,ra=(endA+cashA-initialA)/initialA*100;
  const expected=[w*100,ra,(endA+endB-initial)/initial*100,(cashA+cashB)/initial*100,total,100+total];
  expected.forEach((v,i)=>near(r.metrics[i][1],v));near(w*ra+(1-w)*1,total);near(r.metrics[2][1]+r.metrics[3][1],total);
  near(r.index.start*1e6,initial,.00001);near(r.index.endA*1e6,endA,.00001);near(r.index.cashA*1e6,cashA,.00001);
  assert.ok(w>0&&w<1);assert.ok(total>=-100);
  assert.equal(r.points.length,46);for(const[n,y]of r.points){const qA=n*1e6/100,a=qA*open;near(y,(qA*close+qA*coupon+endB+cashB-a-initialB)/(a+initialB)*100);}
  near(r.marker[1],total);r.points.flat().forEach(v=>assert.ok(Number.isFinite(v)));
 }assert.equal(cases,144);
 for(const p of [{nominal:0},{open:0},{close:-1},{coupon:-1},{open:NaN},{nominal:Infinity}])assert.throws(()=>M.bondIndexPlan({...defaults,...p}));
});
test('controlled concentration, negative prices changes and equal-return cases explain weighting without artificial gains',()=>{
 assert.deepEqual(run().metrics.map(m=>m[1]),[50,2,-.5,2,1.5,101.5]);
 const more=run({nominal:300}),stress=run({close:90}),concentratedStress=run({nominal:300,close:90});
 near(more.metrics[0][1],75);near(more.metrics[4][1],1.75);near(stress.metrics[1][1],-7);near(stress.metrics[4][1],-3);near(concentratedStress.metrics[4][1],-5);
 for(const nominal of [50,100,300,500]){const same=run({nominal,close:98});near(same.metrics[4][1],1);same.points.forEach(([n,r])=>near(r,1));}
 const differentPrice=run({nominal:100,open:50,close:49,coupon:1});near(differentPrice.metrics[0][1],100/3);near(differentPrice.metrics[1][1],0);near(differentPrice.metrics[4][1],2/3);
 assert.equal(M.models.bondindex.presets.length,4);
 const cap=[.4,.6*25/40,.6*15/40];near(cap.reduce((s,w)=>s+w,0),1);assert.ok(cap.every(w=>w<=.4));
 near(250/(250/100),100);near((1.02*.95-1)*100,-3.1);
});
test('every one of 198 figure points independently matches debt weights, reinvestment or all-in dealer costs',()=>{
 let count=0;
 for(const f of u.sections.flatMap(s=>s.blocks.filter(b=>b.kind==='figure')))for(const[i,s]of f.plot.series.entries())for(const[x,y]of s.points){
  count++;assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]);assert.ok(y>=f.plot.y[0]&&y<=f.plot.y[1]);
  if(f.id.endsWith('debt-weights'))near(y,(i?100:x)/(x+100)*100);
  else if(f.id.endsWith('price-income-reinvestment')){let wealth=100;for(let k=0;k<x;k++)wealth+=wealth*.04;near(y,i===0?wealth:i===1?100+4*x:100);}
  else if(f.id.endsWith('rfq-all-in')){const face=x*1e6,full=i?100:100.05,fee=i?2000:500;near(y,face*full/100+fee-face*99.95/100,.000001);}
  else assert.fail(f.id);
 }assert.equal(count,198);
});
test('auction allocation, issuance cash and bid-ask/fee examples reconcile all reported amounts and their different meanings',()=>{
 const auction=sec('auction').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 assert.deepEqual(auction.map(r=>number(r[3])),[10,30,30,30,0]);near(auction.reduce((s,r)=>s+number(r[3]),0),100);near(30/50,.6);
 near(100*.99-.8,98.2);near(2000000*(99.30+.75)/100,2001000);near(2000000*(99.10+.75)/100,1997000);
 near(2001000-1997000+1000,5000);near(2000000*(99.3-99.2)/100,2000);near(.2/99.2*10000,20.161290322580644);
 const rfq=sec('rfq').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 for(const row of rfq){const n=number(row[0]);near(number(row[1]),n*1.0005+500,.000001);near(number(row[2]),n+2000);}
 near(1500/.0005,3000000);
 const a=d.questions.find(q=>q.id==='btr-a1'),b=d.questions.find(q=>q.id==='btr-b1');
 assert.match(a.options[a.correct].text,/2\.666667%/);near((200*.04+100*0)/300*100,2.6666666666666665);
 assert.match(b.options[b.correct].text,/lower all-in purchase cost by 500/);near((3000000*.9995+3000)-(3000000+1000),500);
});
test('new definitions have precise bond returns while established equity, FX and derivative meanings remain intact',()=>{
 const g=require('../finance-glossary.cjs'),find=w=>g.find(g=>[g.term,...g.aliases].includes(w));
 for(const[w,section]of [['Bond Index','index-map'],['Benchmark','benchmark-fit'],['IG','credit'],['High Yield','credit'],['Sovereign','issuers'],['Supranational','issuers'],['Cashflow Matching','liability'],['Marktwertgewichtung','market-value'],['Dirty Price','market-value'],['Clean Price','market-value'],['Stückzinsen','coupon-date'],['Bond Total Return','return-formula'],['Preisindex','reinvestment'],['Cashkuponbeitrag','return-formula'],['Anfangsmarktwertgewicht','beginning-weights'],['Index Cap','index-caps'],['Index Rebalancing','rebalancing'],['Index-Fixing','rebalancing'],['Index Chaining','rebalancing'],['Tracking Error','replication'],['Tracking Difference','replication'],['Sampling','replication'],['RFQ','venues'],['Firm Quote','venues'],['Indicative Quote','transparency'],['Bond Bid','quote'],['Bond Ask','quote'],['Bond Mid','costs'],['Bond Quoted Spread','costs'],['All-in Cost','rfq'],['Roundtrip','costs'],['TRACE','transparency'],['On-the-run','liquidity'],['Off-the-run','liquidity'],['Solvenz','liquidity'],['Bond Liquidity','liquidity'],['Uniform-Price Auction','auction'],['Allocation Fraction','auction'],['Net Issue Proceeds','issuance-case'],['Index Replication','replication']])assert.deepEqual(find(w).cfa,{unit:u.id,section});
 assert.deepEqual(find('Total Return').cfa,{unit:'equity-returns',section:'returns'});
 assert.deepEqual(find('Bid').cfa,{unit:'fx-calculation',section:'bid-ask'});assert.deepEqual(find('Ask').cfa,{unit:'fx-calculation',section:'bid-ask'});
 assert.deepEqual(find('Bid-Ask-Spread').cfa,{unit:'equity-trading',section:'spread'});assert.deepEqual(find('Midpoint').cfa,{unit:'equity-trading',section:'spread'});
 assert.equal(find('OTC').term,'Over the Counter');
 for(const t of ['Bookbuilding','Firm Commitment','Best Efforts'])assert.equal(find(t).cfa.unit,'equity-trading');
});
