const {test}=require('node:test'),assert=require('node:assert/strict'),M=require('../finance-models.cjs'),data=require('../finance-cfa/compile.cjs').compile(),u=data.units.find(u=>u.id==='alternative-fees');
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),bank=data.questions.filter(q=>q.unit===u.id),near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b),de=s=>Number(s.replaceAll('−','-').replaceAll('.','').replace(',','.'));
const defaults=Object.fromEntries(M.models.fundfees.controls.map(c=>[c.key,c.value]));
// Independent ledger: form the two candidate components first, then apply the cash-payment contract.
function oracle(p,g=p.gross){
 const initial=p.capital,gross=initial+initial*g/100,management=(p.base===0?initial:gross)*p.management/100,basis=p.policy===0?gross-management:gross,hwm=initial*p.hwm/100,hurdle=initial+initial*p.hurdle/100;
 let eligible=0;if(p.rule===0)eligible=Math.max(0,basis-hwm);else if(p.rule===1)eligible=Math.max(0,Math.min(basis-hwm,basis-hurdle));else if(basis-hurdle>1e-10)eligible=Math.max(0,basis-hwm);
 const performance=eligible*p.carry/100,total=p.policy===2?(management>performance?management:performance):management+performance,net=gross-total;
 return {gross,management,basis,hwm,hurdle,performance,total,net,r:(net-initial)/initial*100};
}
const npv=(c,r)=>c.reduce((v,x,i)=>v+x/(1+r)**i,0),root=c=>{let a=-.9,b=1;for(let i=0;i<100;i++){const m=(a+b)/2;if(npv(c,m)>0)a=m;else b=m;}return(a+b)/2;};
test('both actual 2027 outcomes have substantive explanations, 30 original practice questions each and two reserved questions each',()=>{
 assert.equal(u.sections.length,32);assert.ok(blocks.map(b=>typeof b==='string'?b:b.reading||'').join(' ').length>31000);
 assert.equal(blocks.filter(b=>b.kind==='example').length,29);assert.equal(blocks.filter(b=>b.kind==='figure').length,7);assert.equal(blocks.filter(b=>b.kind==='disclosure').length,14);assert.equal(blocks.filter(b=>b.kind==='formula').length,58);
 assert.equal(bank.length,64);assert.equal(bank.filter(q=>q.pool==='practice').length,60);for(const o of data.coverage.find(c=>c.id===u.id).objectives){assert.equal(o.practice.length,30);assert.equal(o.mockQuestions,2);assert.ok(o.sections.length>20);}
 assert.equal(new Set(bank.map(q=>q.stem)).size,64);for(const q of bank){assert.equal(new Set(q.options.map(o=>o.text)).size,3);assert.ok(q.options.every(o=>o.why.length>15));}
 for(const p of ['mock-a','mock-b']){assert.equal(bank.filter(q=>q.pool===p).length,2);assert.ok(data.inventory[p].alternatives>=4&&data.inventory[p].alternatives<=require('../finance-cfa/engine.cjs').blueprint.alternatives);}assert.equal(u.review.status,'checked');assert.equal(data.release,false);assert.ok(u.sources[0].url.endsWith('#page=25'));
 const l=require('../finance-content/alternatives.cjs')[1];assert.equal(l.lab,'waterfall');assert.deepEqual(l.additionalLabs,['fundfees']);assert.deepEqual(M.calculate('waterfall',{capital:100,value:150,carry:20}).metrics.map(m=>m[1]),[10,140]);
 for(const id of ['alternative-structures','benchmarks'])assert.ok(data.units.find(u=>u.id===id).related.some(r=>r.unit==='alternative-fees'));
});
test('4374 independent fee ledgers, all projection cases and every curve point obey the stated base, order, hard/soft gate and actual payment contract',t=>{
 let cases=0,points=0;for(const gross of [-50,10,100])for(const management of [0,2,5])for(const carry of [0,20,40])for(const hurdle of [0,8,15])for(const hwm of [100,120,150])for(const base of [0,1])for(const policy of [0,1,2])for(const rule of [0,1,2]){
  const p={capital:100,gross,management,carry,hurdle,hwm,base,policy,rule},r=M.calculate('fundfees',p),o=oracle(p);
  for(const[i,x]of [o.gross-100,o.management,o.performance,o.total,o.net,o.r].entries())near(r.metrics[i][1],x);near(r.marker[0],gross);near(r.marker[1],o.r);near(o.net+o.total,o.gross);assert.ok(o.net>0);
  for(const row of r.projection.rows){const v=oracle(p,row[0]);for(const[i,x]of [v.management,v.performance,v.total,v.net,v.r].entries())near(row[i+1],x);}
  const stable=r.stable.rows;for(const[i,x]of [[1,base?o.gross:100],[2,o.gross],[3,o.basis],[4,o.hwm],[6,o.management],[7,o.performance],[8,o.total],[9,o.net],[10,0]])near(stable[i][1],x);if(rule)near(stable[5][1],o.hurdle);else assert.equal(stable[5][1],'Keine aktive Hürde');
  for(const[i,line]of r.series.entries())for(const[x,y]of line.points){near(y,i===0?x:oracle(p,x).r);points++;}
  if(rule===2){assert.equal(r.series.length,3);assert.ok(r.series[1].points.at(-1)[0]<r.series[2].points[0][0]);}else assert.equal(r.series.length,2);cases++;
 }assert.equal(cases,4374);assert.equal(points,885006);t.diagnostic(JSON.stringify({cases,points}));
});
test('thirteen preset reference values, soft discontinuity and the HWM use independent countercalculations',()=>{
 const expected=[14.4,14.08,14,16,16,14.4,18,28,17.1,-22,18,8,7.2];for(const[i,preset]of M.models.fundfees.presets.entries()){
  for(const c of M.models.fundfees.controls){const v=preset.values[c.key];assert.ok(v>=c.min&&v<=c.max);near((v-c.min)/c.step,Math.round((v-c.min)/c.step));}near(M.calculate('fundfees',preset.values).metrics[5][1],expected[i]);
 }
 const soft=M.calculate('fundfees',{...defaults,rule:2,hurdle:8}),lo=soft.series[1].points.at(-1),hi=soft.series[2].points[0];near(lo[0],10);near(lo[1],8);near(hi[1],6.4,1e-6);assert.ok(lo[1]>hi[1]);
 const high=M.calculate('fundfees',{...defaults,hwm:120});near(high.metrics[2][1],0);const highRecovery=M.calculate('fundfees',{...defaults,hwm:120,gross:30,management:0});near(highRecovery.metrics[2][1],2);
 for(const policy of [0,1,2])for(const base of [0,1])for(const hwm of [100,150])for(const hurdle of [0,15]){
  const p={...defaults,policy,base,hwm,hurdle,rule:2},r=M.calculate('fundfees',p),o=oracle(p,r.series[1].points.at(-1)[0]);near(o.performance,0);assert.ok(r.series[1].points.at(-1)[0]<r.series[2].points[0][0]);
 }
});
test('capital scaling, inactive hurdles, zero fees and loss management are economically consistent',()=>{
 const p={...defaults,capital:10000},r=M.calculate('fundfees',p),base=M.calculate('fundfees',defaults);for(let i=0;i<5;i++)near(r.metrics[i][1],100*base.metrics[i][1]);near(r.metrics[5][1],base.metrics[5][1]);assert.deepEqual(M.calculate('fundfees',{...defaults,hurdle:15}).metrics,base.metrics);
 for(const policy of [0,1,2])for(const rule of [0,1,2]){const r=M.calculate('fundfees',{...defaults,management:0,carry:0,policy,rule});near(r.metrics[3][1],0);near(r.metrics[5][1],20);}
 for(const key of ['capital','gross','management','carry','hurdle','hwm','base','policy','rule'])for(const value of ['',null,NaN,Infinity])assert.throws(()=>M.calculate('fundfees',{...defaults,[key]:value}));assert.throws(()=>M.calculate('fundfees',{...defaults,policy:1.5}));
});
test('every one of 1010 textbook graph coordinates matches the stated independent cash-flow or fee assumptions',()=>{
 let points=0;for(const g of blocks.filter(b=>b.kind==='figure'))for(const[i,line]of g.plot.series.entries())for(const[x,y]of line.points){let z;
  if(g.id.endsWith('-irr-root'))z=npv([-100,30,100],x/100);
  else if(g.id.endsWith('-multiple-roots'))z=npv([-100,230,-132],x/100);
  else if(g.id.endsWith('-duration-multiple'))z=100*((140/100)**(1/x)-1);
  else if(g.id.endsWith('-fee-contracts'))z=oracle({...defaults,policy:i},x).r;
  else if(g.id.endsWith('-hurdle-cliff'))z=oracle({...defaults,hurdle:8,rule:i===0?1:2},x).r;
  else if(g.id.endsWith('-catchup-share')){const remaining=Math.max(x-100,0),preference=Math.min(8,remaining),after=remaining-preference,catchup=i===0?0:Math.min(2,after);z=i===0?.2*after:catchup+.2*(after-catchup);}
  else if(g.id.endsWith('-reported-smoothing'))z=(i===0?[20,-20,20,-20]:[10,-5,7.5,-6.25])[x-1];
  else assert.fail('unreviewed graph '+g.id);
  near(y,z);assert.ok(x>=g.plot.x[0]-1e-8&&x<=g.plot.x[1]+1e-8);assert.ok(y>=g.plot.y[0]-1e-8&&y<=g.plot.y[1]+1e-8);points++;
 }assert.equal(points,1010);const cliff=blocks.find(b=>b.kind==='figure'&&b.id.endsWith('-hurdle-cliff'));assert.ok(cliff.plot.series[1].points.at(-1)[0]<cliff.plot.series[2].points[0][0]);
});
test('every numerical practice and reserved answer agrees with independent arithmetic and root solving',()=>{
 const refs={'04':30+100-100,'05':13,'06':100*(1.1*.9-1),'08':100*root([-100,30,100]),'11':130,'13':.6,'14':.8,'15':1.2,'17':100*(1.4**.5-1),'18':100*(1.4**(1/12)-1),'20':150/105,'21':35,'22':-45,'23':100*(144/105-1),'27':.5*(-20)+.5*10,'29':-1,'30':(60*150/120+80)/150,'31':20,'32':10,'34':114.4,'35':114,'36':114.08,'37':-22,'38':116,'40':2,'41':14.4,'42':0,'43':-.8,'45':128,'46':0,'47':124,'48':2,'49':8,'50':1,'52':4,'55':1.11,'56':117.1,'58':14,'exam-a1':.86,'exam-a2':240.8,'exam-b2':235.5};
 const numerical=q=>q.options.every(o=>/^[-]?\d+(?:\.\d+)?%?\.$/.test(o.text));
 assert.equal(bank.filter(numerical).length,Object.keys(refs).length);
 for(const[id,v]of Object.entries(refs)){const q=bank.find(q=>q.id==='afe-'+id),s=q.options[q.correct].text.replace(/%?\.$/,''),dec=s.split('.')[1]?.length||0;near(Number(s),v,.5001*10**-dec+1e-8);}
});
test('textbook distributions, clawback timing, HWM path and smoothing calculations reconcile without invented cash',()=>{
 const ex=title=>blocks.find(b=>b.kind==='example'&&b.title===title),table=title=>ex(title).steps.find(b=>b.kind==='table');
 const tiers=table('Jede Stufe aus 140 WE Erlös verteilen'),rows=tiers.rows.slice(0,4);near(rows.reduce((s,r)=>s+de(r[1]),0),132);near(rows.reduce((s,r)=>s+de(r[2]),0),8);let money=140;for(const r of rows){money-=de(r[1])+de(r[2]);near(de(r[3]),money);}
 const path=table('Verlust, Erholung und erst danach neuer Erfolg');let nav=100,hwm=100;for(const[i,row]of path.rows.entries()){near(de(row[1]),nav);const g=nav*(1+[-.2,.25,.3][i]),p=.2*Math.max(g-hwm,0);nav=g-p;hwm=Math.max(hwm,nav);for(const[j,z]of [g,p,nav,hwm].entries())near(de(row[j+2]),z);}
 near(150+80,224+6);near(140+84,224);near(10-.2*(230-200),4);near(root([-200,150,74])*100,8.95802963978225);near(root([-200,140,84])*100,8.654599313281186);
 let last=0;const original=[.2,-.2,.2,-.2],observed=original.map(r=>last=.5*r+.5*last),sample=x=>{const m=x.reduce((a,b)=>a+b,0)/x.length;return Math.sqrt(x.reduce((n,r)=>n+(r-m)**2,0)/(x.length-1));};near(sample(original)*100,23.094010767585033);near(sample(observed)*100,8.377487192867959);
 for(const[i,row]of table('Halbe Anpassung an vier stark schwankende Quartale').rows.entries()){near(de(row[1]),original[i]*100);near(de(row[2]),observed[i]*100);}
 near(npv([-100,230,-132],.1),0);near(npv([-100,230,-132],.2),0);near(30*(1+root([-100,30,100]))+100,134.835622624235);
});
test('new definitions preserve general corporate IRR, hurdle and clawback targets while giving the new unit precise context',()=>{
 const g=require('../finance-glossary.cjs'),entries=require('../finance-cfa/glossary.cjs').filter(e=>e.cfa.unit===u.id);assert.equal(entries.length,26);
 for(const e of entries){assert.ok(g.some(x=>x.term===e.term));assert.ok(u.sections.some(s=>s.id===e.cfa.section));}
 for(const term of ['Internal Rate of Return','Hurdle Rate'])assert.equal(g.find(e=>e.term===term).cfa.unit,'capital-allocation');assert.equal(g.find(e=>e.term==='Clawback').cfa.unit,'governance');assert.equal(g.find(e=>e.term==='J-Kurve').cfa.unit,'fx-markets');
 for(const[label,target]of [['IRR','LP-IRR'],['HWM','Anteilshöchststand'],['Clawback','Carry-Rückforderung'],['J-Kurve','Fonds-J-Kurve']])assert.ok(entries.find(e=>e.term===target).contextualAliases.some(a=>a.label===label&&a.units.includes(u.id)));
});
