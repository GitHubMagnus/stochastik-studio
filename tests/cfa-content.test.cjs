const {test}=require('node:test'),assert=require('node:assert/strict');
const {compile}=require('../finance-cfa/compile.cjs');
const data=compile();
test('CFA lessons and independent questions have local mathematics, sources and valid objective links',()=>{
 assert.ok(data.units.length);assert.ok(data.questions.length);
 const walk=blocks=>{for(const b of blocks){if(typeof b==='string')continue;if(b.kind==='formula'){assert.match(b.mathml,/<math/);assert.ok(b.reading.trim());assert.ok(b.symbols.every(s=>s.meaning.trim()&&s.mathml.includes('<math')),b.tex);}if(b.kind==='example')walk(b.steps);}};
 for(const u of data.units){for(const s of u.sections)walk(s.blocks);assert.ok(u.sources.every(s=>/^https:\/\//.test(s.url)));}
 for(const q of data.questions)walk(q.solution);
});
test('EPS examples independently reconcile share periods, dilution and exclusions',()=>{
 const monthlyShares=[1,1,1,1.4,1.4,1.4,1.4,1.4,1.4,1.2,1.2,1.2].map(n=>n*2);
 const weighted=monthlyShares.reduce((a,b)=>a+b)/12;
 assert.ok(Math.abs(weighted-2.5)<1e-12);assert.ok(Math.abs((5.2-.2)/weighted-2)<1e-12);
 const exerciseProceeds=200000*30,reacquired=exerciseProceeds/50,newShares=200000-reacquired;
 assert.equal(newShares,80000);
 const earnings=6e6+120000-120000*.25,shares=2e6+newShares+300000;
 assert.ok(Math.abs(earnings/shares-2.5588235294117645)<1e-12);
 assert.ok((earnings+160000)/(shares+40000)>earnings/shares);
 assert.ok(-2e6/1.1e6>-2e6/1e6);
});
test('published MCQ numerical answers agree with separately computed results',()=>{
 const byId=new Map(data.questions.map(q=>[q.id,q]));
 const expected={
  'is-01':(2400/12)*3,'is-02':1050*2/3,'is-03':90-30,'is-04':84-20+6,
  'is-06':2.3/(.8+.24/2),'is-07':3.6/(.6*3),'is-08':150000-150000*24/40,
  'is-09':(4e6+60000)/1.1e6,'is-11':-900000/300000,
  'is-a1':4.35/(1.2+.4*.75-.2*.25),'is-a2':250-225,'is-b1':3e6/(1e6+100000-100000*20/25),
  'ra-02':(12+8+30)/50,'ra-03':(36+54)/3,'ra-04':Math.round(365*70/(600+110-80)*10)/10,
  'ra-05':150/(150+250)*100,'ra-07':.75*.8*.15*1.6*2.5*100,
  'ra-10':876*30/365-730*25/365,'ra-a1':25/80,'ra-a2':90/120,'ra-b1':365*(90/1095+100/730),
  'lc-02':100000*1.06-30000,'lc-07':800-690,'lc-09':24+.05*(600-500),
  'lc-11':600*15/3,'lc-a1':50000+4000+1500-2000,'lc-a2':40+12+7-15,'lc-b1':20+4,
  'bm-01':((270-50)/200-1)*100,'bm-02':(1.3*.9-1)*100,'bm-03':10,
  'bm-06':(1.04**2-1)*100,'bm-07':40/50*100,'bm-08':110/50,'bm-09':120/300*100,
  'bm-10':60/110*100,'bm-11':1/50*100,'bm-a1':(88/80*121.6/128-1)*100,'bm-a2':960/(900/6),'bm-b2':7-6,
  'eiii-05':250*300/(100+300+600),
  'ret-01':(.7*.12+.3*(-.08))*100,'ret-02':(57+6-60)/60*100,'ret-03':110/1.08,
  'ret-04':(1.08/1.05-1)*100,'ret-05':(1.03*1.02-1)*100,'ret-06':(1.09/1.12-1)*100,
  'ret-07':1+2+1.5+.4+.6,'ret-08':.9*105+.1*70-100,'ret-09':(3.65-3.25)*100,
  'ret-a1':.92*110+.08*50-100,'ret-b1':(1.06/1.08-1)*100,
  'rt-01':(43+1-40)/40*100,'rt-02':(1.04**2-1)*100,'rt-03':((1+.1/4)**4-1)*100,
  'rt-04':Math.log(1.12)*100,'rt-05':Math.expm1(.07)*100,'rt-06':(Math.sqrt(1.3*.9)-1)*100,
  'rt-07':(1.3*.9-1)*100,'rt-08':180/(90/15+90/30),'rt-09':(110-110*.02)-100,
  'rt-10':((1+.1*(1-.3))/1.04-1)*100,'rt-11':(200*1.08-100*1.05-100)/100*100,
  'rt-12':(.96*1.06-1)*100,'rt-a1':((1+.06/12)**12-1)*100,
  'rt-a2':(150*.92-50*1.06-100),'rt-b1':(1.12*.98-1)*100,'rt-b2':(1.08*.9-1)*100,
  'tv-01':1331/1.1**3,'tv-02':[1,2,3,4].reduce((v,t)=>v+200/1.05**t,0),
  'tv-03':[0,1,2].reduce((v,t)=>v+100/1.08**t,0),'tv-04':6/.08,'tv-05':1.5*1.04/(.09-.04),
  'tv-06':(3/50+.04)*100,'tv-07':(55*.08-2)/(55+2)*100,
  'tv-08':1.8/1.08+(2+2*1.03/(.08-.03))/1.08**2,'tv-09':6/1.05+106/1.05**2,
  'tv-10':(Math.sqrt(100/81)-1)*100,'tv-11':(1.04**2/1.03-1)*100,
  'tv-12':1.25*1.04/1.02,'tv-13':.5*50-20/1.04,'tv-15':142-(50*.96+100*.91),
  'tv-16':[0,1,2,3].reduce((v,t)=>v+10*1.05**t/1.05**(t+1),0),'tv-17':8/2,
  'tv-a1':100/1.075**3,'tv-a2':(80*.1-3)/(80+3)*100,'tv-a3':.5*80-30/1.05,
  'tv-b1':[1,2,3,4].reduce((v,t)=>v+4/1.03**t,100/1.03**4),'tv-b2':1.2*1.02/1.05,
  'rs-02':.2*2+.3*5+.5*11,'rs-03':(2+3+4)/3,'rs-04':-4+.75*4,
  'rs-05':Math.sqrt(80/3),'rs-06':80/4,'rs-08':Math.sqrt(.0009)*100,'rs-09':Math.sqrt(68/4),
  'rs-13':6-3,'rs-15':8/2,'rs-16':.018/(.2*.15),'rs-19':Math.sqrt(.02+.004)*100,
  'rs-20':18/Math.sqrt(36),'rs-a1':8/2,'rs-b1':Math.sqrt(25/3),'rs-b2':.003/(.1*.05),
  'pm-01':(.7*.12-.3*.04)*100,'pm-02':50/104*100,'pm-03':Math.sqrt(.018)*100,
  'pm-04':-.25*.18*.12,'pm-06':.3/(.2+.3)*100,'pm-07':(.01-.003)/(.0225+.01-.006)*100,
  'pm-10':.25*.04+.75*.006,'pm-11':Math.sqrt(.09*(.2+.8/20))*100,
  'pm-13':(.6*.12+.4*.04)*100,'pm-14':(120*.1-20*.06),
  'pm-15':.06/(3*.2**2)*100,'pm-17':.08-1.5*.2**2,'pm-18':1,
  'pm-a1':Math.sqrt(.25**2*.24**2+.75**2*.12**2+2*.25*.75*.5*.24*.12)*100,
  'pm-a2':(.04-.01)/(.08-.02)*100,'pm-a3':(.11-.03)/(4*.2**2)*100,
  'pm-b1':.6*.002+.4*.01,'pm-b3':(1.5*.08-.5*.04)*100,
  'ds-01':.4*.15*100,'ds-02':(-.1*.25+.06*.5+.18*.25)*100,
  'ds-03':Math.sqrt(.0124-.055**2)*100,'ds-04':.5*(-.1)*(-.2)+.5*.1*.2,
  'ds-05':.12/.3*100,'ds-06':(.2*.1+.3*.3)/.5*100,'ds-07':.4*.0025+.6*.01+.4*(-.05-.04)**2+.6*(.1-.04)**2,
  'ds-08':.001+.5*(-.06)*(-.04)+.5*.06*.04,'ds-09':.2*.8,
  'ds-10':4*.2*.8**3*100,'ds-11':20*.03,'ds-13':10/12*100,'ds-14':.158655*100,
  'ds-15':(.07-.1*1.644854)*100,'ds-16':50*Math.exp(.03+.09/2),
  'ds-18':.9*.1/(.9*.1+.2*.9)*100,'ds-20':.75*108+.25*40,
  'ds-a1':.004+.5*.05**2+.5*.05**2,'ds-a2':.75*.2/(.75*.2+.25*.8)*100,
  'ds-b1':80*Math.exp(.02+.3**2/2),'ds-b2':.25*15**2+.75*5**2
 };
 for(const [id,v] of Object.entries(expected)){
  const q=byId.get(id);const numeric=Number(q.options[q.correct].text.replace(/[€,]/g,'').replace('−','-').match(/-?\d+(?:\.\d+)?/)?.[0]);
  const precision=q.options[q.correct].text.match(/\.(\d+)/)?.[1].length||0;
  const tolerance=precision?0.51*10**(-precision):.011;
  assert.ok(Math.abs(numeric-v)<tolerance,id+': '+numeric+' vs '+v);
 }
});

test('choice ordering is stable, preserves the authored correct response, and breaks mechanical answer cycles',()=>{
 const fs=require('node:fs'),path=require('node:path');
 const source=fs.readdirSync(path.join(__dirname,'../finance-cfa/questions')).filter(n=>n.endsWith('.cjs')).flatMap(n=>require('../finance-cfa/questions/'+n));
 const repeated=compile();
 let moved=0;
 for(const q of source){
  const built=data.questions.find(x=>x.id===q.id),again=repeated.questions.find(x=>x.id===q.id);
  assert.deepEqual(built.options[built.correct],q.options[q.correct],q.id);
  assert.equal(built.revision,again.revision);
  moved+=built.correct!==q.correct;
 }
 assert.ok(moved>source.length/3);
});
test('published lease amortization table matches a separately discounted cash-flow schedule',()=>{
 const u=data.units.find(u=>u.id==='leases-compensation');
 if(!u)return;
 const table=u.sections.flatMap(s=>s.blocks).filter(b=>b.kind==='example').flatMap(b=>b.steps).find(b=>b.kind==='table'&&b.headers.includes('Tilgung'));
 assert.ok(table);
 const pv=[1,2,3].reduce((sum,t)=>sum+3000/1.1**t,0),dep=pv/3;
 let liability=pv;
 const parse=s=>Number(s.replace(/\./g,'').replace(',','.'));
 for(let t=0;t<3;t++){
  const opening=liability,interest=opening*.1,principal=3000-interest;
  liability-=principal;
  const expected=[t+1,opening,interest,principal,liability,dep+interest];
  table.rows[t].forEach((x,i)=>assert.ok(Math.abs(parse(x)-expected[i])<.006,'lease year '+(t+1)+' column '+i));
 }
 assert.ok(Math.abs(liability)<1e-8);
});
test('CFA illustration values reconcile to the stated cash flows and contain accessible offline SVG',()=>{
 const figures=data.units.flatMap(u=>u.sections.flatMap(s=>s.blocks.filter(b=>b.kind==='figure')));
 for(const f of figures){assert.match(f.svg,/role="img"/);assert.match(f.svg,/<desc /);assert.doesNotMatch(f.svg,/NaN|Infinity|(?:href|src)=["']https?:/);assert.ok(f.reading&&f.caption);}
 const lease=figures.find(f=>f.id.endsWith('-lease-expense'));
 assert.ok(Math.abs(lease.plot.series[0].points.reduce((sum,p)=>sum+p[1],0)-9000)<1e-8);
 assert.equal(lease.plot.series[1].points.reduce((sum,p)=>sum+p[1],0),9000);
 const order=figures.find(f=>f.id.endsWith('-cashflow-order'));
 for(const [i,returns] of [[0,[.2,-.1]],[1,[-.1,.2]]]){
  const points=order.plot.series[i].points;
  assert.deepEqual(points,[[0,100],[1,100*(1+returns[0])],[1,100*(1+returns[0])+100],[2,(100*(1+returns[0])+100)*(1+returns[1])]]);
  assert.ok(Math.abs((1+returns[0])*(1+returns[1])-1.08)<1e-12);
 }
 const real=figures.find(f=>f.id.endsWith('-nominal-real'));
 let nominal=100,prices=1;
 for(let t=0;t<=10;t++){
  assert.ok(Math.abs(real.plot.series[0].points[t][1]-nominal)<1e-9);
  assert.ok(Math.abs(real.plot.series[1].points[t][1]-nominal/prices)<1e-9);
  nominal*=1.06;prices*=1.04;
 }
 const discount=figures.find(f=>f.id.endsWith('-discount-horizon'));
 for(const [i,r] of [[0,.02],[1,.08]])for(const [time,pv] of discount.plot.series[i].points){
  assert.ok(Math.abs(pv*Math.pow(1+r,time)-100)<1e-9);
 }
});

test('replication matches each state and forward investment paths reconcile',()=>{
 for(const [s0,up,down,strike,r] of [[100,120,80,100,.05],[50,60,40,50,.04],[80,100,60,80,.05]]){
  const cu=Math.max(up-strike,0),cd=Math.max(down-strike,0),delta=(cu-cd)/(up-down);
  const debtAtEnd=delta*down-cd,value=delta*s0-debtAtEnd/(1+r),p=(s0*(1+r)-down)/(up-down);
  assert.ok(p>0&&p<1);
  assert.equal(delta*up-debtAtEnd,cu);assert.equal(delta*down-debtAtEnd,cd);
  assert.ok(Math.abs(value-(p*cu+(1-p)*cd)/(1+r))<1e-10);
 }
 const forward=1.05**2/1.04-1;
 assert.ok(Math.abs(100*1.04*(1+forward)-110.25)<1e-10);
 for(const [spot,domestic,foreign] of [[1.1,.05,.03],[1.25,.04,.02],[1.2,.02,.05]]){
  const f=spot*(1+domestic)/(1+foreign);
  assert.ok(Math.abs(100/spot*(1+foreign)*f-100*(1+domestic))<1e-10);
 }
});

test('portfolio figures satisfy covariance, efficient-frontier and utility equations',()=>{
 const unit=data.units.find(u=>u.id==='portfolio-math'),figures=unit.sections.flatMap(s=>s.blocks.filter(b=>b.kind==='figure'));
 const variance=w=>w*w*.04+(1-w)**2*.01+2*w*(1-w)*.004;
 const gm=1/7,minimum=variance(gm);
 for(let i=0;i<=1000;i++)assert.ok(variance(i/1000)>=minimum-1e-12);
 assert.ok(minimum<.01);assert.ok(Math.abs(variance(2/7)-.01)<1e-12);
 const risks=figures.find(f=>f.id.endsWith('-correlation-risk'));
 for(const [i,rho] of [[0,1],[1,.2],[2,-1]])for(const [weight,vol] of risks.plot.series[i].points){
  const w=weight/100,expected=w*w*.04+(1-w)**2*.01+2*w*(1-w)*rho*.02;
  assert.ok(Math.abs((vol/100)**2-expected)<1e-12);
 }
 const frontier=figures.find(f=>f.id.endsWith('-two-asset-frontier'));
 for(const [i,s] of frontier.plot.series.entries())for(const [vol,mean] of s.points){
  const w=(mean/100-.06)/.04;
  assert.ok(Math.abs((vol/100)**2-variance(w))<1e-12);
  assert.ok(i===0?w<=gm+1e-10:w>=gm-1e-10);
 }
 const cal=figures.find(f=>f.id.endsWith('-cal-utility'));
 for(const [vol,mean] of cal.plot.series[0].points)assert.ok(Math.abs(mean/100-(.03+.4*vol/100))<1e-12);
 for(const [vol,mean] of cal.plot.series[1].points)assert.ok(Math.abs(mean/100-2*(vol/100)**2-.05)<1e-12);
 for(let i=0;i<=150;i++){const y=i/100,u=.03+y*.06-2*y*y*.15**2;assert.ok(u<=.05+1e-12);}
});

test('distribution illustration has unit variance and the declared mixture density',()=>{
 const f=data.units.find(u=>u.id==='return-statistics').sections.flatMap(s=>s.blocks).find(b=>b.kind==='figure');
 const density=(x,s)=>Math.exp(-x*x/(2*s*s))/(s*Math.sqrt(2*Math.PI));
 for(const [x,y] of f.plot.series[0].points)assert.ok(Math.abs(y-density(x,1))<1e-12);
 for(const [x,y] of f.plot.series[1].points)assert.ok(Math.abs(y-(.9*density(x,.5)+.1*density(x,Math.sqrt(7.75))))<1e-12);
 // Integrate well beyond the displayed window; tails are not discarded.
 let mass=0,second=0,fourth=0;const dx=.002;
 for(let x=-25+dx/2;x<25;x+=dx){const p=.9*density(x,.5)+.1*density(x,Math.sqrt(7.75));mass+=p*dx;second+=x*x*p*dx;fourth+=x**4*p*dx;}
 assert.ok(Math.abs(mass-1)<1e-9);assert.ok(Math.abs(second-1)<1e-9);assert.ok(fourth>3);
 const xs=[-8,-2,4,6,10],ys=[-2,4,0,8,10],mean=a=>a.reduce((s,x)=>s+x,0)/a.length;
 const cov=xs.reduce((sum,x,i)=>sum+(x-mean(xs))*(ys[i]-mean(ys)),0)/(xs.length-1);
 assert.equal(cov,29);
 assert.ok(Math.abs(Math.sqrt(xs.reduce((s,x)=>s+Math.min(x-2,0)**2,0)/5)-Math.sqrt(116/5))<1e-12);
});

test('joint scenarios, total moments, Bayesian counts and lognormal curve agree independently',()=>{
 const joint=[{p:.25,x:-.1,y:-.2},{p:.25,x:-.1,y:0},{p:.25,x:.1,y:0},{p:.25,x:.1,y:.2}];
 const mean=(a,k)=>a.reduce((v,s)=>v+s.p*s[k],0),moment=(a,k,m)=>a.reduce((v,s)=>v+s.p*(s[k]-m)**2,0);
 const mx=mean(joint,'x'),my=mean(joint,'y'),variance=moment(joint,'y',my);
 assert.ok(Math.abs(variance-.02)<1e-12);
 const conditional=joint.filter(s=>s.x>0).map(s=>({...s,p:s.p/.5}));
 assert.ok(Math.abs(mean(conditional,'y')-.1)<1e-12);
 assert.ok(Math.abs(moment(conditional,'y',.1)-.01)<1e-12);
 assert.ok(Math.abs(joint.reduce((v,s)=>v+s.p*(s.x-mx)*(s.y-my),0)-.01)<1e-12);
 const defaultWarning=500*.8,nondefaultWarning=9500*.1;
 assert.equal(defaultWarning,400);assert.equal(nondefaultWarning,950);
 assert.ok(Math.abs(defaultWarning/(defaultWarning+nondefaultWarning)-8/27)<1e-12);
 assert.ok(Math.abs((500-defaultWarning)/(10000-defaultWarning-nondefaultWarning)-100/8650)<1e-12);
 const f=data.units.find(u=>u.id==='distributions').sections.flatMap(s=>s.blocks).find(b=>b.kind==='figure');
 for(const [x,y] of f.plot.series[0].points){
  const expected=x===0?0:Math.exp(-.5*(Math.log(x)/.2)**2)/(x*.2*Math.sqrt(2*Math.PI));
  assert.ok(Math.abs(y-expected)<1e-12);
 }
 // Integrate over log-price coordinates: includes tails beyond the chart.
 let mass=0,first=0,second=0;const dz=.001;
 for(let z=-9+dz/2;z<9;z+=dz){const density=Math.exp(-z*z/2)/Math.sqrt(2*Math.PI),g=Math.exp(.2*z);mass+=density*dz;first+=g*density*dz;second+=g*g*density*dz;}
 assert.ok(Math.abs(mass-1)<1e-10);assert.ok(Math.abs(first-Math.exp(.02))<1e-10);
 assert.ok(Math.abs(second-first**2-Math.exp(.04)*(Math.exp(.04)-1))<1e-10);
});
test('new glossary definitions point to existing precise 2027 sections',()=>{
 const glossary=require('../finance-glossary.cjs'),entries=require('../finance-cfa/glossary.cjs');
 assert.ok(entries.length>=40);
 for(const g of glossary.filter(g=>g.cfa)){
  const u=data.units.find(u=>u.id===g.cfa.unit);assert.ok(u?.sections.some(s=>s.id===g.cfa.section),g.term);
 }
});
test('unwritten modules remain visible as gaps and cannot pass the release gate',()=>{
 if(!data.release&&data.units.length<data.modules.length)assert.throws(()=>compile({release:true}),/Fragen|Lernziele|Prüfung/);
 const eps=data.coverage.find(m=>m.id==='income-statement');
 assert.ok(eps.objectives.every(o=>o.sections.length&&o.practice.length));
});
