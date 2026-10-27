const {test}=require('node:test'),assert=require('node:assert/strict'),M=require('../finance-models.cjs'),{compile}=require('../finance-cfa/compile.cjs'),d=compile(),u=d.units.find(u=>u.id==='forward-value');
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),bank=d.questions.filter(q=>q.unit===u.id),near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<=1e-8+t*Math.max(1,Math.abs(a),Math.abs(b)),a+' vs '+b);
test('actual2027 lifecycle and interest-forward outcomes have detailed textbook explanations, separate original practice and real reserved transfers',()=>{
 assert.equal(u.sections.length,36);assert.ok(blocks.filter(b=>typeof b==='string').join(' ').length>24000);for(const[k,n]of [['formula',37],['example',17],['table',8],['figure',7],['diagram',1],['disclosure',12]])assert.equal(blocks.filter(b=>b.kind===k).length,n,k);
 assert.equal(bank.length,52);assert.equal(bank.filter(q=>q.pool==='practice').length,50);for(const p of ['mock-a','mock-b'])assert.equal(bank.filter(q=>q.pool===p).length,1);for(const o of d.coverage.find(c=>c.id===u.id).objectives){assert.equal(o.practice.length,25);assert.equal(o.mockQuestions,1);assert.ok(o.sections.length>=18);}
 assert.equal(u.review.status,'checked');assert.equal(d.release,false);assert.ok(u.sources[0].url.endsWith('2027levelitopicoutline_online.pdf#page=24'));assert.ok(u.sources.some(s=>s.url.includes('anz.com'))&&u.sources.some(s=>s.url.includes('bis.org')));
 for(const q of bank){assert.match(q.id,/^fwv-(?:\d{2}|exam-[ab])$/);assert.ok(q.options.every(o=>o.why.length>=15),q.id);assert.ok(u.sections.some(s=>s.id===q.section));}assert.equal(new Set(bank.map(q=>q.stem)).size,bank.length);
 for(const id of ['carry','yield-curves','derivative-markets'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit==='forward-value'));
 const old=require('../finance-content/derivatives.cjs')[2];assert.equal(old.lab,'forwardvalue');assert.deepEqual(old.additionalLabs,['fra']);near(M.calculate('forwardvalue',{forward:110,strike:105,df:.98}).metrics[0][1],4.9);
});
// Independent references use two zero-coupon claims and their reset values.
function reference(p,rate=p.fix){const delta=p.tenor,T2=p.start+delta,df1=1/(1+p.z1/100)**p.start,df2=1/(1+p.z2/100)**T2,k=p.k/100,L=rate/100;
 const forward=(df1/df2-1)/delta,value=p.n*df1-p.n*(1+k*delta)*df2,reset=p.n-p.n*(1+k*delta)/(1+L*delta),terminal=reset*(1+L*delta),interest=p.n*L*delta;return{df1,df2,forward,value,reset,terminal,interest,net:p.n*k*delta};}
test('2187 curve/fixing/quantity/tenor combinations and every plotted point reconcile with independent bond and cash ledgers',t=>{
 let cases=0,points=0;for(const n of [0,1000000,10000000])for(const z1 of [-5,4,15])for(const z2 of [-5,5,15])for(const start of [.25,1,3])for(const tenor of [.25,1,2])for(const k of [-15,5,50])for(const fix of [-15,7,50]){
  const p={n,z1,z2,start,tenor,k,fix},r=M.calculate('fra',p),x=reference(p);[100*x.forward,x.value,x.reset,x.terminal,x.interest,x.net].forEach((v,i)=>near(r.metrics[i][1],v));
  assert.deepEqual(r.marker,[fix,r.metrics[2][1]/1000]);assert.deepEqual(r.points,r.series[0].points);assert.equal(r.series.length,2);assert.equal(r.series[1].dash,true);
  for(const[i,s]of r.series.entries()){assert.equal(s.points.length,261);for(const[l,y]of s.points){const z=reference(p,l);near(y,(i===0?z.reset:z.terminal)/1000);assert.ok(y>=r.yRange[0]-1e-8&&y<=r.yRange[1]+1e-8);points++;}}
  const c=r.projection.rows;near(c[0][3],x.df1);near(c[1][3],x.df2);near(c[1][1],start+tenor);
  const rows=r.stable.rows;near(rows[1][1],x.reset);assert.equal(rows[1][2],0);near(rows[2][1],-x.reset);near(rows[2][2],x.reset*(1+fix/100*tenor));near(rows.slice(0,3).reduce((s,r)=>s+r[1],0),n);near(rows.slice(0,3).reduce((s,r)=>s+r[2],0),-n*(1+k/100*tenor));near(rows[3][2],-n*(1+k/100*tenor));
  for(const m of r.metrics)assert.equal(Object.is(m[1],-0),false);cases++;
 }assert.equal(cases,2187);assert.equal(points,1141614);t.diagnostic(JSON.stringify({independentScenarios:cases,independentModelCoordinates:points}));
});
test('eight FRA examples isolate current curves from future fixing, preserve flat/negative identities and scale money without changing rates',()=>{
 const model=M.models.fra;assert.equal(model.controls.length,7);assert.equal(model.presets.length,8);for(const p of model.presets){const r=M.calculate('fra',p.values),ref=reference(p.values);near(r.metrics[0][1],ref.forward*100);near(r.metrics[1][1],ref.value);for(const c of model.controls){assert.ok(p.values[c.key]>=c.min&&p.values[c.key]<=c.max);near((p.values[c.key]-c.min)/c.step,Math.round((p.values[c.key]-c.min)/c.step));}}
 const run=i=>M.calculate('fra',model.presets[i].values).metrics.map(m=>m[1]),base=run(0),low=run(1),double=run(2),curve=run(4);for(const i of [0,1])near(low[i],base[i]);assert.ok(base[2]>0&&low[2]<0);near(low[5],base[5]);for(let i=1;i<base.length;i++)near(double[i],2*base[i]);near(double[0],base[0]);for(let i=2;i<base.length;i++)near(curve[i],base[i]);assert.ok(curve[1]<0&&base[1]>0);assert.equal(run(5)[2],0);assert.equal(run(5)[3],0);assert.equal(run(6)[1],0);for(const x of run(7).slice(1))assert.equal(x,0);
 const defaults=model.presets[0].values;for(const patch of [{n:-1},{start:0},{tenor:0},{z1:-101},{z2:16},{k:51},{fix:-16},{fix:''},{n:NaN}])assert.throws(()=>M.calculate('fra',{...defaults,...patch}));
 const zero=M.calculate('fra',{n:-0,start:1,tenor:1,z1:-0,z2:0,k:-0,fix:-0});for(const row of [...zero.metrics,...zero.projection.rows,...zero.stable.rows])for(const x of row.filter(v=>typeof v==='number'))assert.equal(Object.is(x,-0),false);
});
test('all seven book plots follow independent claim, rate-factor and correctly timed settlement relationships',t=>{
 let count=0;for(const g of blocks.filter(b=>b.kind==='figure'))for(const[i,s]of g.plot.series.entries())for(const[x,y]of s.points){let z;
  if(g.id.endsWith('-old-new-values'))z=(i===0?1:-1)*.98*(x-105);
  else if(g.id.endsWith('-spot-values'))z=x-105*[.9,1,1.1][i];
  else if(g.id.endsWith('-remaining-time'))z=x===0?-5:100-105/(1.05**x);
  else if(g.id.endsWith('-spot-forward'))z=i===0?100*((1+x/100)**2/1.04-1):x;
  else if(g.id.endsWith('-reset-terminal')){const reset=1000000-1050000/(1+x/100);z=(i===0?reset:reset*(1+x/100))/1000;}
  else if(g.id.endsWith('-fra-current-value')){const df2=.95,df1=df2*(1+x/100*.5);z=(1000000*df1-1000000*1.02*df2)/1000;}
  else if(g.id.endsWith('-borrower-interest')){const L=x/100,early=1000000-1050000/(1+L),loanInterest=1000000*L;z=(i===0?loanInterest:loanInterest-early*(1+L))/1000;}
  else assert.fail(g.id);near(y,z);assert.ok(x>=g.plot.x[0]-1e-9&&x<=g.plot.x[1]+1e-9);assert.ok(y>=g.plot.y[0]-1e-9&&y<=g.plot.y[1]+1e-9);count++;
 }assert.equal(count,1373);t.diagnostic(JSON.stringify({independentlyVerifiedBookCoordinates:count}));
});
test('original lifecycle, dividends, FX and cash-flow examples agree with independent whole-position calculations',()=>{
 near(10*.96*(112-105),67.2);near((105-100)/1.05,4.761904761904762);near(120-3/1.04-105/1.04**2,20.036982248520715);near(10000*(.9/1.02-.88/1.04),361.9909502262442);
 near(100*1.04*(1+(1.05**2/1.04-1)),100*1.05**2);near((.96/.92)*(.92/.87),.96/.87);
 const de=s=>Number(s.replaceAll('.','').replace(',','.').replace('−','-')),b=blocks.find(b=>b.kind==='example'&&b.title.startsWith('Der gesamte Zahlungsplan')),table=b.steps.find(b=>b.kind==='table'),r=table.rows;
 near(r.slice(0,3).reduce((s,row)=>s+de(row[1]),0),1e6);near(r.slice(0,3).reduce((s,row)=>s+de(row[2]),0),-1050000);
 const flow=blocks.find(b=>b.kind==='diagram');assert.equal(flow.flows.length,3);near(flow.flows.find(f=>f.from==='bank').amount,1e6);const fra=flow.flows.find(f=>f.from==='counterparty'),investment=flow.flows.find(f=>f.to==='investment');near(fra.amount,20000/1.07);near(investment.amount,fra.amount);near(investment.amount*1.07,20000);assert.ok(!flow.flows.some(f=>f.from==='counterparty'&&f.amount===1e6));
 near(70000-20000/1.07,51308.41121495327);near(-20000+10000,-10000);const todayValue=1e6/1.04-1.05e6/1.05**2;near(50000+todayValue/(1/1.05**2),1e6*(1.05**2/1.04-1));
});
test('all26 numerical questions including the two actual reserved transfers use independently computed units, signs and dates',t=>{
 const e={'02':20*4*.95,'03':50*(-4)*.9,'05':4/1.04,'07':120-110*.94,'11':90-2-85*.96,'13':100*Math.exp(-.02)-98*Math.exp(-.04),'15':10000*(.82*.98-.8*.97),'17':30*(56-50),'21':.98*(-8),'22':.15*10,'25':10*1.04*(-5),'27':100*(.98/.96-1)/.5,'28':100*(1.04**2/1.03-1),'30':100*(1.03**2-1),'31':100*.03/.5,'35':1500000-1500000*1.015/1.025,'37':2000000-2000000*1.01/1.005,'39':1e6*.9785-1e6*1.02*.95,'41':1e6*.05,'42':1e6*.06,'45':500000*1.04/1.02-500000,'46':1e6-1e6*.99/.98,'47':2e6*91/360*.01,'48':.96/.92,'exam-a':40*.94*6,'exam-b':800000-800000*1.01/1.015};
 for(const[id,value]of Object.entries(e)){const q=bank.find(q=>q.id==='fwv-'+id);assert.ok(q,id);const text=q.options[q.correct].text.replace(/[% .]+$/,''),precision=(text.split('.')[1]||'').length,v=Number(text.replaceAll(',',''));assert.ok(Math.abs(v-value)<=.50001*10**-precision+1e-7,id+': '+v+' vs '+value);}
 assert.equal(Object.keys(e).length,26);t.diagnostic(JSON.stringify({independentlyVerifiedNumericalQuestions:26}));
});
test('FRA concepts have exact returns and preserve broad forward rates, resets, financing and single-curve definitions',()=>{
 const g=require('../finance-glossary.cjs'),c=require('../finance-cfa/glossary.cjs');assert.equal(new Set(c.map(e=>e.term)).size,c.length);
 for(const term of ['Forward Rate Agreement','Pay-fixed-FRA','Receive-fixed-FRA','FRA-Startzahlung','FRA-Endwertäquivalent','FRA-Reset','FRA-Nominal','FRA-Forwardrate','FRA-Vertragswert','Zinsperiodenbruch','Altvertragswert','Off-Market-Forward','Forward-Glattstellung','Mark-to-Market','Nullkuponreplikation','Kreditzusage']){const e=g.find(e=>e.term===term);assert.ok(e,term);assert.equal(e.cfa.unit,'forward-value',term);assert.ok(u.sections.some(s=>s.id===e.cfa.section));}
 assert.equal(g.find(e=>e.term==='Forward Rate').cfa.unit,'tvm');assert.equal(g.find(e=>e.term==='Zinsreset').cfa.unit,'bond-cashflows');assert.equal(g.find(e=>e.term==='Ein-Kurven-Modell').cfa.unit,'yield-curves');assert.equal(g.find(e=>e.term==='Forwardpreis').cfa.unit,'carry');
 for(const label of ['Forwardrate','Forwardzins','Reset','Nominalbetrag','Vertragswert','Glattstellung'])assert.ok(g.some(e=>e.contextualAliases?.some(a=>a.label===label&&a.units.includes('forward-value'))),label);
});
