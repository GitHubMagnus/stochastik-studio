const {test}=require('node:test'),assert=require('node:assert/strict'),M=require('../finance-models.cjs'),{compile}=require('../finance-cfa/compile.cjs'),d=compile(),u=d.units.find(u=>u.id==='derivative-uses');
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),bank=d.questions.filter(q=>q.unit===u.id),near=(a,b,t=1e-9)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),a+' vs '+b),number=s=>Number(s.replaceAll(',','').replace('−','-').replace(/[% .]+$/,'')),de=s=>Number(s.replaceAll('.','').replace(',','.').replace('−','-'));
test('the benefits/risks and issuer/investor outcomes have textbook explanations, original practice and withheld transfers with valid connections',()=>{
 assert.equal(u.sections.length,32);for(const[k,n]of [['formula',24],['example',18],['figure',8],['diagram',1],['table',11],['disclosure',8]])assert.equal(blocks.filter(b=>b.kind===k).length,n);
 assert.ok(blocks.filter(b=>typeof b==='string').join(' ').length>29000);assert.equal(bank.filter(q=>q.pool==='practice').length,50);for(const pool of ['mock-a','mock-b'])assert.equal(bank.filter(q=>q.pool===pool).length,2);
 const c=d.coverage.find(c=>c.id===u.id);assert.equal(c.objectives.length,2);for(const o of c.objectives){assert.equal(o.practice.length,25);assert.ok(o.sections.length>=20);assert.equal(o.mockQuestions,2);}
 assert.equal(d.release,false);assert.equal(u.review.status,'draft');assert.ok(u.sources[0].url.endsWith('#page=23'));for(const domain of ['cmegroup.com','fsb.org','bis.org'])assert.ok(u.sources.some(s=>s.url.includes(domain)));
 assert.equal(require('../finance-content/derivatives.cjs')[11].lab,'hedgeuse');assert.ok(M.models.hedgeuse);assert.ok(M.models.option&&M.models.forwardvalue);for(const id of ['derivative-contracts','derivative-markets','fx-markets','equity-factors'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit===u.id));
 for(const q of bank){assert.ok(q.options.every(o=>o.why.length>=15));assert.ok(u.sections.some(s=>s.id===q.section));}for(const q of bank.filter(q=>q.pool!=='practice'))assert.ok(!bank.some(p=>p.pool==='practice'&&p.stem===q.stem));
});
// Independent cash ledger uses separate opening and closing futures legs.
function cash(p,f=p.terminal){
 const purchase=p.side===0,spot=f+p.basis,physical=p.physical*spot,signedPhysical=purchase?-physical:physical;
 const contract=purchase?p.hedge*f-p.hedge*p.initial:p.hedge*p.initial-p.hedge*f,total=signedPhysical+contract-p.cost;
 return {physical,contract,total,net:purchase?-total:total,residual:p.physical-p.hedge};
}
test('both hedge directions, every ledger amount, all curve points and absent-demand output agree with independent cash-flow references',t=>{
 let cases=0,points=0;for(const side of [0,1])for(const physical of [0,1,50,100,1000])for(const hedge of [0,1,50,100,150,1500])for(const initial of [20,80,200])for(const terminal of [20,60,100,200])for(const basis of [-20,0,5,20])for(const cost of [0,2.5,200,1000]){
  const p={side,physical,hedge,initial,terminal,basis,cost},r=M.calculate('hedgeuse',p),ref=cash(p);near(r.metrics[0][1],ref.net);near(r.metrics[1][1],ref.contract);near(r.metrics[2][1],ref.physical);near(r.metrics[3][1],ref.residual);assert.equal(r.metrics.length,physical>0?5:4);if(physical>0)near(r.metrics[4][1],ref.net/physical);
  assert.deepEqual(r.marker,[terminal,r.metrics[0][1]]);assert.deepEqual(r.points,r.series[0].points);assert.equal(r.series.length,2);assert.ok(r.series[1].dash);for(const[i,s]of r.series.entries()){assert.equal(s.points.length,181);for(const[f,value]of s.points){const x=cash(p,f);near(value,i===0?x.net:x.physical);assert.equal(Object.is(value,-0),false);points++;}}
  const rows=r.projection.rows;near(rows[0][1],side===0?-ref.physical:ref.physical);near(rows[1][1],ref.contract);near(rows[2][1],-cost);near(rows[3][1],ref.total);near(rows.slice(0,3).reduce((n,row)=>n+row[1],0),ref.total);for(const m of r.metrics)assert.equal(Object.is(m[1],-0),false);cases++;
 }assert.equal(cases,11520);assert.equal(points,4170240);t.diagnostic(JSON.stringify({independentScenarios:cases,independentlyVerifiedModelPoints:points}));
});
test('the eight presets isolate the stated effects and valid boundaries never manufacture a unit price for zero physical quantity',()=>{
 const model=M.models.hedgeuse;assert.equal(model.controls.length,7);assert.equal(model.presets.length,8);
 for(const p of model.presets){for(const c of model.controls){const v=p.values[c.key];assert.ok(v>=c.min&&v<=c.max);near((v-c.min)/c.step,Math.round((v-c.min)/c.step));}const r=M.calculate('hedgeuse',p.values);near(r.metrics[0][1],cash(p.values).net);}
 const expected=[8500,8500,9500,9500,7500,8500,2000,8700];model.presets.forEach((p,i)=>near(M.calculate('hedgeuse',p.values).metrics[0][1],expected[i]));
 const base=Object.fromEntries(model.controls.map(c=>[c.key,c.value]));for(const patch of [{side:1.5},{physical:-1},{hedge:1501},{initial:19},{terminal:201},{basis:21},{cost:''},{cost:NaN}])assert.throws(()=>M.calculate('hedgeuse',{...base,...patch}));
 for(const side of [0,1]){const r=M.calculate('hedgeuse',{...base,side,physical:0,hedge:1500,initial:20,terminal:200,basis:-20,cost:2.5});assert.equal(r.metrics.length,4);assert.ok(r.metrics.every(m=>Number.isFinite(m[1])));}
});
test('every textbook figure follows independent cash, basis, sample variance, currency and market-sensitivity calculations with stated axis units',t=>{
 let count=0;const variance=h=>{const states=[[-20,-16.8],[-20,2.4],[20,-2.4],[20,16.8]],errors=states.map(([f,s])=>s-h*f),mean=errors.reduce((n,e)=>n+e,0)/4;return errors.reduce((n,e)=>n+(e-mean)**2,0)/4;};
 for(const g of blocks.filter(b=>b.kind==='figure'))for(const[i,s]of g.plot.series.entries())for(const[x,y]of s.points){let v;
  if(g.id.endsWith('-quantity-price'))v=cash({side:0,physical:100,hedge:[0,50,100,150][i],initial:80,terminal:x,basis:5,cost:0}).net;
  else if(g.id.endsWith('-producer-price'))v=i===0?100*(x+5):cash({side:1,physical:100,hedge:100,initial:80,terminal:x,basis:5,cost:0}).net;
  else if(g.id.endsWith('-basis-price'))v=i===0?80+x:85;
  else if(g.id.endsWith('-hedge-variance'))v=variance(x);
  else if(g.id.endsWith('-funding-path'))v=i===0?[1500,0,2500,500][x]:[0,500,0,0][x];
  else if(g.id.endsWith('-importer-fx'))v=(i===0?200000*x:200000*x-200000*(x-.9))/1000;
  else if(g.id.endsWith('-beta-overlay')){const original=2000000*1.2*x/100,futures=-8*4000*25*x/100;v=[original,original+futures,futures][i]/1000;}
  else if(g.id.endsWith('-hedge-cost'))v=cash({side:i,physical:100,hedge:100,initial:80,terminal:100,basis:5,cost:x}).net;
  else assert.fail(g.id);near(y,v);assert.ok(x>=g.plot.x[0]-1e-9&&x<=g.plot.x[1]+1e-9);assert.ok(y>=g.plot.y[0]-1e-9&&y<=g.plot.y[1]+1e-9);count++;
 }assert.equal(count,2094);t.diagnostic(JSON.stringify({independentlyVerifiedBookCoordinates:count}));
});
test('daily funding and physical/derivative transfers reconcile without counting borrowing or opening liquidity as profit',()=>{
 const s=u.sections.find(s=>s.id==='liquidity-case'),table=flat(s.blocks).find(b=>b.kind==='table'),prices=[80,100,70,90];let liquid=1500,loan=0,totalContract=0;
 for(let day=1;day<prices.length;day++){const payment=100*(prices[day-1]-prices[day]),before=liquid+payment,borrow=Math.max(-before,0),repay=Math.min(loan,Math.max(before,0));loan+=borrow-repay;liquid=before+borrow-repay;totalContract+=payment;const r=table.rows[day];near(de(r[2]),payment);near(de(r[3]),before);near(de(r[5]),liquid);near(de(r[6]),loan);}
 near(totalContract,-1000);near(liquid-1500,totalContract);near(9500+totalContract,8500);near(500*.06*30/360,2.5);
 const flows=flat(s.blocks).find(b=>b.kind==='diagram').flows;near(flows.find(f=>f.to==='producer'&&f.type==='cash').amount,9500);near(flows.find(f=>f.to==='clearing').amount,1000);near(flows.find(f=>f.type==='claim').amount,100);assert.equal(flows.length,3);
});
test('four independently enumerated joint states prove the variance hedge, its scale and the danger of a mismatched full-unit hedge',()=>{
 const states=[[-20,-16.8],[-20,2.4],[20,-2.4],[20,16.8]],mean=a=>a.reduce((n,x)=>n+x,0)/a.length,F=states.map(a=>a[0]),S=states.map(a=>a[1]),cov=mean(states.map(([f,s])=>(f-mean(F))*(s-mean(S)))),varF=mean(F.map(f=>(f-mean(F))**2)),varS=mean(S.map(s=>(s-mean(S))**2)),h=cov/varF;
 near(varF,400);near(varS,144);near(cov,144);near(h,.36);near(cov/Math.sqrt(varF*varS),.6);const variance=ratio=>mean(states.map(([f,s])=>(s-ratio*f)**2));near(variance(0),144);near(variance(h),92.16);near(variance(1),256);assert.ok(variance(h-.01)>variance(h)&&variance(h+.01)>variance(h));near(Math.sqrt(variance(h))*1000,9600);near(h*1000/20,18);
});
test('numerical training and reserved choices use independent whole-position, direction, timing, cost and unit calculations',t=>{
 const expected={'06':400000*.02/20000*100,'08':200*63-200*60+200*50,'09':97-100,'11':80+7,'12':100-150,'14':80*(70-60),'16':.8*10/20,'18':2000-1500,'20':50000-50000*.7,'24':12000+300,'28':700000-450000,'29':100000*.92,'30':300000*.9,'32':3.8+1.5,'36':45+3,'37':200*(75-60),'40':2000000*.8*(-.05),'42':600000-600000/100000*4000,'49':8500-200,'exam-a1':250*54-200*50+200*40+100};
 for(const[id,v]of Object.entries(expected)){const q=bank.find(q=>q.id==='dus-'+id);assert.ok(q,id);near(number(q.options[q.correct].text),v);}
 for(const[id,n]of [['39',12],['exam-b2',16]]){const q=bank.find(q=>q.id==='dus-'+id),text=q.options[q.correct].text;assert.match(text,/short contracts/);near(Number(text.match(/\d+/)[0]),n);}
 const a=bank.find(q=>q.id==='dus-exam-a2').options.find((o,i)=>i===bank.find(q=>q.id==='dus-exam-a2').correct).text;assert.match(a,/Sell 400,000 USD/);assert.match(a,/364,000/);near((900000-500000)*.91,364000);
 const b=bank.find(q=>q.id==='dus-exam-b1'),text=b.options[b.correct].text;assert.match(text,/funding of 1,600/);near(3600-2000,1600);
 t.diagnostic(JSON.stringify({independentlyVerifiedNumericalQuestions:Object.keys(expected).length+4}));
});
test('new explanations preserve broad funding, natural hedge, legal netting, forward and overlay meanings while adding scoped basis and derivative directions',()=>{
 const g=require('../finance-glossary.cjs'),c=require('../finance-cfa/glossary.cjs');assert.equal(new Set(c.map(e=>e.term)).size,c.length);
 for(const term of ['Hedge','Spekulation','Long-Hedge','Short-Hedge','Futuresbasis','Hedge-Basisrisiko','Cross-Hedge','Varianzminimaler Hedge','Hedgequote','Cash Equitization','Zielbeta','Derivate-Overlay','Beta-Overlay']){const e=g.find(e=>e.term===term);assert.ok(e,term);assert.equal(e.cfa.unit,u.id);assert.ok(u.sections.some(s=>s.id===e.cfa.section));}
 assert.equal(g.find(e=>e.term==='Natürliche Absicherung').cfa.unit,'fx-markets');assert.equal(g.find(e=>e.term==='Finanzierungslücke').cfa.unit,'company');assert.equal(g.find(e=>e.term==='Netting').cfa.unit,'derivative-markets');assert.equal(g.find(e=>e.term==='Forward').lesson,'derivatives-03');assert.ok(g.find(e=>e.term==='Overlay').aliases.includes('Currency Overlay'));
 for(const label of ['Basis','Basisrisiko','Overlay','Initial Margin','Variation Margin','Forward','Long','Short'])assert.ok(g.some(e=>e.contextualAliases?.some(a=>a.label===label&&a.units.includes(u.id))),label);
});
