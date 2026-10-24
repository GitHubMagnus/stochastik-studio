const {test}=require('node:test'),assert=require('node:assert/strict'),M=require('../finance-models.cjs'),{compile}=require('../finance-cfa/compile.cjs'),d=compile(),u=d.units.find(u=>u.id==='carry');
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),bank=d.questions.filter(q=>q.unit==='carry'),near=(a,b,t=1e-9)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),a+' vs '+b);
test('actual2027 arbitrage/replication and spot/expectation/carry outcomes have detailed explanations, valid sources and disjoint original questions',()=>{
 assert.equal(u.sections.length,32);assert.ok(blocks.filter(b=>typeof b==='string').join(' ').length>25000);for(const[k,n]of [['formula',31],['example',14],['table',9],['figure',4],['disclosure',11]])assert.equal(blocks.filter(b=>b.kind===k).length,n);
 const c=d.coverage.find(c=>c.id===u.id);assert.equal(c.objectives.length,2);for(const o of c.objectives){assert.equal(o.practice.length,25);assert.equal(o.mockQuestions,2);assert.ok(o.sections.length>=20);}
 assert.equal(bank.filter(q=>q.pool==='practice').length,50);for(const pool of ['mock-a','mock-b'])assert.equal(bank.filter(q=>q.pool===pool).length,2);
 assert.equal(d.release,false);assert.equal(u.review.status,'draft');assert.ok(u.sources[0].url.endsWith('2027levelitopicoutline_online.pdf#page=23'));assert.ok(u.sources.some(s=>s.url.includes('cmegroup.com')));
 for(const q of bank){assert.match(q.id,/^car-(?:\d{2}|exam-[ab][12])$/);assert.ok(q.options.every(o=>o.why.length>=15),q.id);assert.ok(u.sections.some(s=>s.id===q.section));}assert.equal(new Set(bank.map(q=>q.stem)).size,bank.length);
 for(const id of ['derivative-contracts','derivative-markets','derivative-uses'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit==='carry'));
 assert.equal(require('../finance-content/derivatives.cjs')[1].lab,'forward');
});
test('all forward controls and 323200 curve coordinates reconcile to independent discounted cash, reinvested shares and debt references',t=>{
 let scenarios=0,points=0;
 for(const s of [1,50,100,120,200])for(const r of [-5,-2,0,5,15])for(const q of [0,2,5,10])for(const T of [.25,1,2,5])for(const k of [1,100,110,400]){
  const p={s,r,q,t:T,k},out=M.calculate('forward',p),df=Math.exp(-r*T/100),shares=1/Math.exp(q*T/100),pre=s*shares,debt=pre/df,gap=k-debt;
  [debt,pre,gap,k*df-pre,shares].forEach((v,i)=>near(out.metrics[i][1],v));
  assert.deepEqual(out.marker,[T,out.metrics[0][1]]);assert.deepEqual(out.points,out.series[0].points);assert.equal(out.series.length,2);assert.equal(out.series[1].dash,true);
  assert.ok(out.yRange[0]<out.yRange[1]);for(const[i,series]of out.series.entries())for(const[x,y]of series.points){const prepaid=s/Math.exp(q*x/100),discount=Math.exp(-r*x/100);near(y,i===0?prepaid/discount:s);assert.ok(y>=out.yRange[0]&&y<=out.yRange[1]);points++;}
  const rows=out.projection.rows;near(rows[0][1],-pre);near(rows[1][1],pre);near(rows.reduce((n,r)=>n+r[1],0),0);near(rows[1][2],-debt);near(rows[2][2],k);near(rows.slice(0,3).reduce((n,r)=>n+r[2],0),rows[3][2]);near(rows[3][2],gap);
  near(out.stable.rows[0][1]*Math.exp(q*T/100),1);near(out.stable.rows[1][1],1);near(out.stable.rows[5][1],0);scenarios++;
 }assert.equal(scenarios,1600);assert.equal(points,323200);t.diagnostic(JSON.stringify({independentScenarios:scenarios,independentlyVerifiedModelCoordinates:points}));
});
test('eight presets isolate price, income, funding, time and spot effects while preserving the previous default',()=>{
 const model=M.models.forward,defaults=Object.fromEntries(model.controls.map(c=>[c.key,c.value]));assert.equal(model.controls.length,5);assert.equal(model.presets.length,8);near(M.calculate('forward',defaults).metrics[0][1],105.1271096376);
 const ref=[100*Math.exp(.05),100*Math.exp(.05),100*Math.exp(.01),100*Math.exp(-.02),100*Math.exp(.10),100,100*Math.exp(-.01),120*Math.exp(.05)];
 model.presets.forEach((p,i)=>{near(M.calculate('forward',p.values).metrics[0][1],ref[i]);for(const c of model.controls){assert.ok(p.values[c.key]>=c.min&&p.values[c.key]<=c.max);near((p.values[c.key]-c.min)/c.step,Math.round((p.values[c.key]-c.min)/c.step));}});
 for(const p of [{s:0},{r:-6},{q:11},{t:0},{k:401},{k:NaN},{r:''}])assert.throws(()=>M.calculate('forward',{...defaults,...p}));
 const a=M.calculate('forward',{...defaults,k:110}),b=M.calculate('forward',{...defaults,k:100});assert.deepEqual(a.series,b.series);near(a.metrics[2][1]-b.metrics[2][1],10);
 for(const t of [.25,1,2,5])for(const r of [-0,0,5,10]){const equal=M.calculate('forward',{s:100,r,q:r,t,k:100});assert.equal(equal.metrics[0][1],100);assert.equal(equal.metrics[2][1],0);assert.equal(equal.metrics[3][1],0);for(const row of equal.stable.rows)assert.equal(Object.is(row[1],-0),false);}
});
test('every book coordinate agrees with separate asset, forward and net-carry references and fits its stated axes',t=>{
 let points=0;for(const g of blocks.filter(b=>b.kind==='figure'))for(const[i,s]of g.plot.series.entries())for(const[x,y]of s.points){let ref;
  if(g.id.endsWith('-state-cancellation'))ref=[x-100*1.05,110-x,110-100*1.05][i];
  else if(g.id.endsWith('-yield-curves'))ref=100/Math.exp([0,.05,.10][i]*x)/Math.exp(-.05*x);
  else if(g.id.endsWith('-rate-sensitivity'))ref=100/Math.exp(-x/100*[1,3][i]);
  else if(g.id.endsWith('-commodity-curves'))ref=100*Math.exp([0,.02,.02][i]*x)/Math.exp(-.05*x)/Math.exp([0,0,.10][i]*x);
  else assert.fail(g.id);
  near(y,ref);assert.ok(x>=g.plot.x[0]-1e-9&&x<=g.plot.x[1]+1e-9);assert.ok(y>=g.plot.y[0]-1e-9&&y<=g.plot.y[1]+1e-9);points++;
 }assert.equal(points,1171);t.diagnostic(JSON.stringify({independentlyVerifiedBookCoordinates:points}));
});
test('cash-and-carry and reverse strategies close both cash and delivery in widely different terminal states',()=>{
 for(const spot of [0,40,80,105,140,1000]){
  const physical=spot,loan=-100*1.05,short=110-spot;near(physical+loan+short,5);
  const shortSpot=-spot,deposit=100*1.05,long=spot-102;near(shortSpot+deposit+long,3);
 }const high=blocks.find(b=>b.kind==='example'&&b.title.startsWith('Das Grundbeispiel')).steps.find(b=>b.kind==='table'),low=blocks.find(b=>b.kind==='example'&&b.title.startsWith('Reverse Cash')).steps.find(b=>b.kind==='table');
 near(Number(high.rows.at(-1)[1]),0);near(Number(high.rows.at(-1)[2]),5);near(Number(low.rows.at(-1)[1]),0);near(Number(low.rows.at(-1)[2]),3);
 near((100-4/1.05)*1.05**2,100*1.05**2-4*1.05);near(100*1.05**2-4*1.05,106.05);near(104*1.05,109.2);near(100*1.05+4,109);
 near(101*1.06+1,108.06);near(99*1.04-1,101.96);near(109-(101*1.06+1),.94);
});
test('state probabilities, old-contract values and continuous/discrete rate conversions keep expectation separate from risk-free pricing',()=>{
 const prices=[80,140],real=[.5,.5],pricing=[7/12,5/12],sum=(a,b)=>a.reduce((n,x,i)=>n+x*b[i],0),pay=prices.map(s=>s-105);
 near(sum(prices,real),110);near(sum(pay,real),5);assert.ok(Math.min(...pay)<0);near(sum(prices,pricing),105);near(sum(pay,pricing)/1.05,0);near(Math.exp(Math.log(1.05)),1.05);near(5/1.05,4.761904761904762);near(.05+.02-Math.log(.98),.09020270731751947);
 near(100*(Math.exp(.06)-Math.exp(.05)),1.056544017933447,1e-6);near(100*(Math.exp(.18)-Math.exp(.15)),3.538312039352709);
});
test('all numerical training and withheld transfers use independent position cash or stated probability calculations',t=>{
 const expected={'03':80*1.05**2,'05':109-100*1.04,'07':200*1.03-201,'10':90-84,'12':(84-80)*.95,'14':102*1.05+1,'15':98*1.03-2,'18':50/.8,'21':40*(35-30*1.10),'24':63/.9,'27':.5*60+.5*140,'28':.5*(-35)+.5*45,'30':100*1.1**2-3*1.1,'32':100/Math.exp(-.04*2)/Math.exp(.01*2),'34':100/Math.exp(.03),'36':102*1.05,'37':100*1.05+2,'39':100*Math.exp(.02)/Math.exp(-.04)/Math.exp(.08),'42':110-90,'45':.9*1.04/1.02,'47':1/Math.exp(.04*2),'49':5,'exam-a1':75*44-75*40*1.06-30,'exam-b1':51*1.04**2+2,'exam-b2':80*1.04**2-5*1.04};
 for(const[id,value]of Object.entries(expected)){const q=bank.find(q=>q.id==='car-'+id),s=q.options[q.correct].text.replace(/[% .]+$/,''),precision=(s.split('.')[1]||'').length;near(Number(s),value,Math.max(1e-9,.50001*10**-precision/Math.max(1,Math.abs(value))));}
 const transfer=bank.find(q=>q.id==='car-exam-a2');assert.match(transfer.options[transfer.correct].text,/can lose 15/);near(.5*(90-105)+.5*(130-105),5);
 t.diagnostic(JSON.stringify({independentlyVerifiedNumericalQuestions:Object.keys(expected).length+1}));
});
test('the curated carry terms have exact valid returns and preserve the general time-value replication definition',()=>{
 const g=require('../finance-glossary.cjs'),c=require('../finance-cfa/glossary.cjs');assert.equal(new Set(c.map(e=>e.term)).size,c.length);
 for(const term of ['Arbitrage','Terminvertragsreplikation','Cash-and-Carry','Reverse Cash-and-Carry','Cost of Carry','Prepaid Forward Price','Convenience Yield','Contango','Backwardation','Carry-Konvergenz','Erwarteter künftiger Spotpreis','Bewertungswahrscheinlichkeiten','Carry-Arbitrageband']){const e=g.find(e=>e.term===term);assert.ok(e,term);assert.equal(e.cfa.unit,'carry',term);assert.ok(u.sections.some(s=>s.id===e.cfa.section));}
 assert.equal(g.find(e=>e.term==='Replikation').cfa.unit,'tvm');assert.ok(g.some(e=>e.contextualAliases?.some(a=>a.label==='Replikation'&&a.units.includes('carry'))));
});
