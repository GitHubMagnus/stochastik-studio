const {test}=require('node:test'),assert=require('node:assert/strict'),M=require('../finance-models.cjs'),{compile}=require('../finance-cfa/compile.cjs'),d=compile(),u=d.units.find(u=>u.id==='derivative-contracts');
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),bank=d.questions.filter(q=>q.unit===u.id),near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),a+' vs '+b),num=s=>Number(s.replaceAll(',','').replace('−','-').replace(/[% .]+$/,''));

test('instrument comparison covers the three actual 2027 outcomes with deep explanations, sixty original training items and four withheld transfers',()=>{
 assert.equal(u.sections.length,30);for(const[k,n]of [['formula',27],['figure',8],['diagram',1],['example',16],['table',16],['disclosure',8]])assert.equal(blocks.filter(b=>b.kind===k).length,n);
 assert.ok(blocks.filter(b=>typeof b==='string').join(' ').length>28000);assert.equal(bank.filter(q=>q.pool==='practice').length,60);for(const pool of ['mock-a','mock-b'])assert.equal(bank.filter(q=>q.pool===pool).length,2);
 const c=d.coverage.find(c=>c.id===u.id);assert.equal(c.objectives.length,3);for(const o of c.objectives){assert.equal(o.practice.length,20);assert.ok(o.sections.length>=12);assert.ok(o.mockQuestions>=1);}
 assert.equal(u.review.status,'checked');assert.equal(d.release,false);assert.ok(u.sources[0].url.endsWith('#page=23'));for(const domain of ['cmegroup.com','cftc.gov','optionseducation.org','federalreserve.gov'])assert.ok(u.sources.some(s=>s.url.includes(domain)));
 for(const pool of ['mock-a','mock-b'])assert.ok(d.inventory[pool].derivatives>=bank.filter(q=>q.pool===pool).length);assert.ok(Object.keys(M.models).length>=50);for(const i of [5,9])assert.equal(require('../finance-content/derivatives.cjs')[i].lab,'option');
 for(const id of ['derivative-markets','credit-risk','tvm'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit===u.id));
 const practice=bank.filter(q=>q.pool==='practice');for(const q of bank.filter(q=>q.pool!=='practice'))assert.ok(!practice.some(p=>p.stem===q.stem));
});

// Independent reference: gross stock purchase plus conditional exercise trades,
// rather than the calculator's max/min net-profit expressions.
function ledger(strategy,stockPrice,strike,premium,end){
 const boughtStock=strategy===2||strategy===3,boughtOption=strategy<=2,isPut=strategy===1||strategy===2||strategy===5;
 let exercise=0;if(isPut&&end<strike)exercise=strike-end;if(!isPut&&end>strike)exercise=end-strike;
 const optionEnd=boughtOption?exercise:-exercise,initial=(boughtStock?-stockPrice:0)+(boughtOption?-premium:premium),terminal=(boughtStock?end:0)+optionEnd;
 return {initial,terminal,profit:initial+terminal,optionEnd};
}
test('all six calculator positions reconcile cash-flow components, both curves, zero signs and every preset across independent boundary scenarios',t=>{
 let scenarios=0,points=0;for(let strategy=0;strategy<6;strategy++)for(const k of [10,50,100,200])for(const premium of [0,.5,5,40])for(const s of [10,100,200])for(const end of [0,5,10,49,50,95,100,103,105,110,200,250]){
  const r=M.calculate('option',{strategy,s,k,premium,end}),ref=ledger(strategy,s,k,premium,end);near(r.metrics[0][1],ref.profit);near(r.metrics[1][1],ref.terminal);near(r.metrics[2][1],-ref.initial);assert.deepEqual(r.marker,[end,r.metrics[0][1]]);assert.deepEqual(r.points,r.series[0].points);assert.equal(r.series.length,2);assert.ok(r.series[1].dash);
  const rows=r.projection.rows,total=rows.at(-1);near(total[1],ref.initial);near(total[2],ref.terminal);near(total[3],ref.profit);for(const row of rows)near(row[1]+row[2],row[3]);for(let col=1;col<4;col++)near(rows.slice(0,-1).reduce((n,row)=>n+row[col],0),total[col]);
  for(const [i,series]of r.series.entries()){assert.equal(series.points.length,501);for(const[x,y]of series.points){const a=ledger(strategy,s,k,premium,x);near(y,i===0?a.profit:a.terminal);assert.equal(Object.is(y,-0),false);points++;}}
  for(const m of r.metrics)assert.equal(Object.is(m[1],-0),false);scenarios++;
 }
 assert.equal(scenarios,3456);assert.equal(points,3462912);assert.equal(M.models.option.controls[0].choices.length,6);assert.equal(M.models.option.presets.length,7);
 for(const p of M.models.option.presets){for(const c of M.models.option.controls){const v=p.values[c.key];assert.ok(v>=c.min&&v<=c.max);near((v-c.min)/c.step,Math.round((v-c.min)/c.step));}const r=M.calculate('option',p.values),ref=ledger(p.values.strategy,p.values.s,p.values.k,p.values.premium,p.values.end);near(r.metrics[0][1],ref.profit);}
 t.diagnostic(JSON.stringify({independentScenarios:scenarios,independentlyVerifiedCalculatorPoints:points}));
});
test('end-state identities, premium effects and known chart limitations hold beyond the visible price ceiling',()=>{
 for(const end of [0,1,50,95,100,103,105,110,250,1000,1e6]){
  const lc=ledger(0,100,100,5,end),sc=ledger(4,100,100,5,end),lp=ledger(1,100,100,5,end),sp=ledger(5,100,100,5,end),pp=ledger(2,100,95,4,end),cc=ledger(3,100,110,3,end);
  near(lc.profit+sc.profit,0);near(lp.profit+sp.profit,0);assert.ok(lc.terminal>=0&&lp.terminal>=0);assert.ok(lc.profit>=-5);assert.ok(lp.profit>=-5&&lp.profit<=95);assert.ok(sp.profit>=-95&&sp.profit<=5);assert.ok(pp.terminal>=95);assert.ok(cc.profit<=13);
 }
 assert.ok(ledger(4,100,100,5,1e6).profit<-999000);near(ledger(0,100,100,5,103).profit,-2);near(ledger(0,10,100,5,103).profit,-2);near(ledger(0,200,100,5,103).profit,-2);
 for(const s of [0,100,105,120])near(ledger(0,100,100,10,s).profit-ledger(0,100,100,2,s).profit,-8);
 assert.ok(ledger(1,100,10,12,0).profit<0);
});
test('every plotted textbook coordinate independently reconciles rights, opposite positions, loan payments, recovery and stock overlays',t=>{
 let count=0;for(const g of blocks.filter(b=>b.kind==='figure'))for(const[i,s]of g.plot.series.entries())for(const[x,y]of s.points){let v;
  if(g.id.endsWith('-swap-fixing')){const received=1000000*.5*x/100,paid=20000;v=(i===0?1:-1)*(received-paid);}
  else if(g.id.endsWith('-call-profile')){const advantage=x>100?x-100:0;v=[advantage,advantage-5,5-advantage][i];}
  else if(g.id.endsWith('-put-profile')){const advantage=x<100?100-x:0;v=[advantage,advantage-5,5-advantage][i];}
  else if(g.id.endsWith('-premium-shift'))v=(x>100?x-100:0)-[2,5,10][i];
  else if(g.id.endsWith('-cds-recovery'))v=(i===0?2000000*x/100:2000000-2000000*x/100)/1000000;
  else if(g.id.endsWith('-forward-call'))v=i===0?x-100:ledger(0,100,100,5,x).profit;
  else if(g.id.endsWith('-protective-profile'))v=i===0?x-100:ledger(2,100,95,4,x).profit;
  else if(g.id.endsWith('-covered-profile'))v=i===0?x-100:ledger(3,100,110,3,x).profit;
  else assert.fail(g.id);near(y,v);assert.ok(x>=g.plot.x[0]-1e-9&&x<=g.plot.x[1]+1e-9);assert.ok(y>=g.plot.y[0]-1e-9&&y<=g.plot.y[1]+1e-9);count++;
 }assert.equal(count,2659);t.diagnostic(JSON.stringify({independentlyVerifiedBookCoordinates:count}));
});
test('textbook tables and physical transfers balance without confusing payoff, premium, gross cash and share value',()=>{
 const sections=Object.fromEntries(u.sections.map(s=>[s.id,s])),table=id=>flat(sections[id].blocks).find(b=>b.kind==='table');
 const de=s=>Number(s.replaceAll('.','').replace('−','-')),swap=table('swap-case'),loan=table('swap-loan');for(let i=0;i<3;i++){const l=[.03,.05,.06][i],sr=swap.rows[i],lr=loan.rows[i];near(de(sr[2]),1000000*.5*l);near(de(sr[3]),20000);near(de(sr[4]),de(sr[2])-de(sr[3]));near(de(lr[1]),1000000*.5*(l+.012));near(de(lr[2]),-de(sr[4]));near(de(lr[3]),de(lr[1])+de(lr[2]));}
 for(const[id,strategy,k,premium]of [['call-case',0,100,5],['put-case',1,100,6]])for(const row of table(id).rows){const r=ledger(strategy,100,k,premium,num(row[0]));near(num(row[1]),r.terminal);near(num(row[2]),r.profit);near(num(row[3]),-r.profit);}
 for(const row of table('protective-put').rows){const r=ledger(2,100,95,4,num(row[0]));near(num(row[2]),r.optionEnd);near(num(row[3]),r.terminal);near(num(row[4]),r.profit);}
 for(const row of table('covered-call').rows){const x=num(row[0]),r=ledger(3,100,110,3,x);near(num(row[1]),x-100);near(num(row[2]),r.profit-(x-100));near(num(row[3]),r.profit);}
 const flows=blocks.find(b=>b.kind==='diagram').flows,cash=flows.filter(f=>f.type==='cash'),shares=flows.filter(f=>f.type==='claim');assert.deepEqual(cash.map(f=>f.amount),[100,2000]);assert.equal(shares[0].amount,20);near(20*103-cash[1].amount-cash[0].amount,-40);assert.notEqual(shares[0].amount,2060);
 near(2000000*.015*.25,7500);near(2000000*.4+2000000*.6,2000000);near(2000000*.6-2*7500,1185000);near(10-5*1.04,4.8);
});
test('numeric practice and reserved answers are independently checked, including two paired answers and all quantity/financing effects',t=>{
 const numeric={
  '05':500000*.25*.06-500000*.25*.04,'06':3.5+.8,'13':4000000-4000000*.35,'14':3000000*.02/4,'20':4*25*6,
  '22':3-(62-50),'23':90-82-7,'24':4-(75-60),'25':-8,'26':6,'27':70+4,'28':80-9,'30':5-60,'32':45-3,
  '33':2*30*(48-40)-2*30*3,'34':50*20,'35':50+4*1.05,'36':60+(95-60)-100-4,'37':150-(150-110)-100+3,'38':0-100+3,'47':100+5,'58':9-7,
  'exam-a1':3*40*4-3*40*(55-47),'exam-a2':2000000*.5*.042+2000000*.5*.011,'exam-b2':5000000*.3+5000000*.7
 };
 for(const[id,v]of Object.entries(numeric)){const q=bank.find(q=>q.id==='dct-'+id);assert.ok(q,id);near(num(q.options[q.correct].text),v);}
 for(const[id,expected]of [['21',[4,-2]],['39',[0,-5]],['exam-b1',[300,-120]]]){const q=bank.find(q=>q.id==='dct-'+id),a=q.options[q.correct].text.replace(/\.$/,'').split(' and ').map(num);assert.deepEqual(a,expected);}
 t.diagnostic(JSON.stringify({independentlyVerifiedNumericalAnswers:Object.keys(numeric).length+3}));
});
test('curated terminology preserves old broad meanings and adds exact option/CDS explanations with valid contextual returns',()=>{
 const g=require('../finance-glossary.cjs'),c=require('../finance-cfa/glossary.cjs');assert.equal(new Set(c.map(e=>e.term)).size,c.length);
 for(const term of ['Call-Option','Put-Option','Long Call','Short Call','Long Put','Short Put','Credit Default Swap','Assignment','Options-Gewinnschwelle','Netto-Anfangskosten','Sicherungskäufer','Sicherungsverkäufer','Referenzschuldner','Kreditereignis','Protective Put','Covered Call']){const e=g.find(e=>e.term===term);assert.ok(e,term);assert.equal(e.cfa.unit,u.id);assert.ok(u.sections.some(s=>s.id===e.cfa.section));}
 const forward=g.find(e=>e.term==='Forward');assert.equal(forward.lesson,'derivatives-03');assert.equal(g.find(e=>e.term==='Gewinnschwelle').cfa.unit,'market-structures');
 for(const label of ['Forward','Long','Short','Settlement']){const e=g.find(e=>e.contextualAliases?.some(a=>a.label===label&&a.units.includes(u.id)));assert.ok(e,label);}
});
