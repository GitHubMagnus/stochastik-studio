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
  'ds-b1':80*Math.exp(.02+.3**2/2),'ds-b2':.25*15**2+.75*5**2,
  'inf-02':.7*4+.3*12,'inf-04':18/Math.sqrt(36),'inf-05':(2/1)**2,
  'inf-07':5-2.131*4/Math.sqrt(16),'inf-12':(1-.25)*100,'inf-15':3/(4.5/Math.sqrt(9)),
  'inf-16':3/Math.sqrt(100/25+16/16),'inf-18':16*.15**2/.12**2,'inf-19':.18**2/.12**2,
  'inf-20':.4*Math.sqrt(25/.84),'inf-21':1-6*10/(6*(36-1)),'inf-23':2*.5**8*100,
  'inf-24':(3-1)*(4-1),'inf-25':80*50/200,'inf-26':.02-.05,'inf-27':(1-.99**10)*100,
  'inf-a1':(9*9+13*16)/22,'inf-b1':2*2.064*5/Math.sqrt(25),
  'rg-01':7-60/40*2,'rg-02':.6*10/4,'rg-03':8-6.5,'rg-05':(1-20/80)*100,
  'rg-06':Math.sqrt(90/10),'rg-07':2*1000,'rg-10':3/Math.sqrt(100),'rg-11':(1.3-1)/.2,
  'rg-12':(-3)**2,'rg-13':(-.8)**2,'rg-14':2+.5*6,'rg-16':3*Math.sqrt(1.1),
  'rg-18':Math.expm1(.03*2)*100,'rg-19':4*Math.log(1.1),'rg-21':.2+.4+1.2*(2-.2),
  'rg-22':1.8-1.4*1,'rg-a1':(150-50)/(50/20),'rg-a2':.024/.016,
  'rg-b1':10+2.12*2*Math.sqrt(1+1/18),
  'sim-01':-200000*(.75*(-.08)+.25*.03),'sim-03':[-4,-1,2,5,9][Math.ceil(.8*5)-1],
  'sim-04':9,'sim-07':(-2+4+4)/3,'sim-08':3**3,'sim-11':(.08-.2**2/2)*100,
  'sim-12':50*Math.exp(.04*2),'sim-13':.6,'sim-14':12/Math.sqrt(3600),'sim-15':3**2,
  'sim-a1':100*Math.exp(.05-.3**2/2),
  'data-09':1940/2000*100,'data-10':42/139*100,'data-11':36/60*100,
  'data-12':8*50+70*2,'data-14':(.2-1)**2,
  'ms-01':300-210-70,'ms-05':(18+6*3+3**2)/3,'ms-06':12-4*2+2**2,
  'ms-11':90-3*((90-18)/6),'ms-12':-1/(-4)*100,'ms-15':24-24,
  'ms-17':(120-30)/3,'ms-21':[50,20,15,15].reduce((s,v)=>s+v*v,0),
  'ms-22':20**2-12**2-8**2,'ms-a1':(12-9)*10,'ms-a2':150-2*(2*(150-30)/(3*2)),
  'ms-b1':20/(1-1/3),
  'cyc-03':(98-105)/105*100,'cyc-04':330/1.2,'cyc-05':(1.005**4-1)*100,
  'cyc-06':3*114-3*110,'cyc-08':240/80,'cyc-10':190/(190-160),
  'cyc-11':190-5*(190-160),'cyc-12':2+4,'cyc-13':100*(.4+.5*.3),
  'cyc-b1':(30-(120*.9-90))/30*100,
  'fis-04':1/(1-.75*.8+.1),'fis-05':-.75*2*(-12),'fis-06':(15-.6*15)/(1-.6),
  'fis-10':110-104-.04*200,'fis-11':(60*1.06-.02*104)/104*100,
  'fis-12':(.06-.02)/1.02*.9*100,'fis-13':.9*1.03/1.06*100,'fis-14':84/110*100,
  'fis-18':2*(8-3),'fis-a1':(106-.02*104)/104*100,'fis-b1':12/(1-.6*.8+.08),
  'mon-02':90*1.04*1.02,'mon-04':1.2/(.2+.1+.1),'mon-07':(1.06/1.04-1)*100,
  'mon-09':(3+4+5)/3+.6,'mon-11':150000*(.04-.02),'mon-13':(1.1*.96/1.02-1)*100,
  'mon-a1':(1.05/1.02-1)*100,'mon-b1':(2+3+4+5)/4+.5
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
test('inference examples reconcile exact permutations, test statistics and sampling curves',()=>{
 const permutations=a=>a.length?a.flatMap((x,i)=>permutations(a.filter((_,j)=>i!==j)).map(rest=>[x,...rest])):[[]];
 const ranks=permutations([1,2,3,4,5]),rho=r=>1-6*r.reduce((s,x,i)=>s+(x-i-1)**2,0)/(5*(25-1));
 assert.equal(ranks.length,120);assert.equal(ranks.filter(r=>Math.abs(rho(r))>=.8-1e-12).length,16);
 const assignments=permutations([1,2,3,4,5,6]).map(p=>p.slice(0,3).sort((a,b)=>a-b).join(','));
 const unique=[...new Set(assignments)].map(s=>s.split(',').map(Number));
 assert.equal(unique.length,20);assert.equal(unique.filter(r=>[0,9].includes(r.reduce((s,x)=>s+x,0)-6)).length,2);
 const d=[1,2,0,3,4],mean=d.reduce((s,x)=>s+x,0)/d.length,variance=d.reduce((s,x)=>s+(x-mean)**2,0)/(d.length-1);
 assert.equal(mean,2);assert.equal(variance,2.5);assert.ok(Math.abs(mean/Math.sqrt(variance/5)-Math.sqrt(8))<1e-12);
 const table=[[30,20],[10,40]],rows=table.map(r=>r.reduce((s,x)=>s+x,0)),cols=[0,1].map(j=>table.reduce((s,r)=>s+r[j],0)),total=rows.reduce((s,x)=>s+x,0);
 const stat=table.reduce((s,r,i)=>s+r.reduce((v,o,j)=>{const expected=rows[i]*cols[j]/total;return v+(o-expected)**2/expected;},0),0);
 assert.ok(Math.abs(stat-50/3)<1e-12);
 const fs=require('node:fs'),vm=require('node:vm'),script=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8').split('<script>')[1].split('</script>')[0];
 const context=vm.createContext({});vm.runInContext(script.slice(0,script.indexOf('/* ================================================= BAYES module'))+script.slice(script.indexOf('const LG='),script.indexOf('/* ================================================= REGINF')),context);
 const evaluate=s=>vm.runInContext(s,context);
 assert.ok(Math.abs(evaluate('tInv975(24)')-2.06389856)<1e-7);
 // Independent Simpson integration after t=sqrt(24)*tan(theta).
 let gammaRatio=1;for(let k=1;k<=12;k++)gammaRatio*=k-.5;
 for(let k=1;k<=11;k++)gammaRatio/=k;
 const start=Math.atan(3/Math.sqrt(24)),steps=10000,h=(Math.PI/2-start)/steps;
 let area=0;for(let k=0;k<=steps;k++)area+=(k===0||k===steps?1:k%2?4:2)*Math.cos(start+k*h)**23;
 assert.ok(Math.abs(evaluate('2*tTail(3,24)')-2*gammaRatio*area*h/3)<1e-10);
 assert.ok(Math.abs(evaluate('2*tTail(3,24)')-.0062)<.00005);
 assert.ok(Math.abs(evaluate('chiCdf(31.410432844,20)')-.95)<1e-8);
 const figures=data.units.find(u=>u.id==='inference').sections.flatMap(s=>s.blocks.filter(b=>b.kind==='figure'));
 const density=(x,m,s)=>Math.exp(-.5*((x-m)/s)**2)/(s*Math.sqrt(2*Math.PI));
 const sampling=figures.find(f=>f.id.endsWith('-sampling-means'));
 for(const [i,n] of [4,16,64].entries())for(const [x,y] of sampling.plot.series[i].points)assert.ok(Math.abs(y-density(x,4,12/Math.sqrt(n)))<1e-12);
 const power=figures.find(f=>f.id.endsWith('-power-overlap'));
 for(const [i,m] of [0,2].entries())for(const [x,y] of power.plot.series[i].points)assert.ok(Math.abs(y-density(x,m,1))<1e-12);
 assert.ok(Math.abs(evaluate('1-normCdf(1.644853626951-2,0,1)')-.63876)<.00002);
});

test('regression coefficients, ANOVA, CAPM and prediction graphics reconcile from raw observations',()=>{
 const x=[-2,-1,0,1,2],y=[-1,-1.5,1,1.5,5],n=x.length;
 const average=a=>a.reduce((s,v)=>s+v,0)/a.length,mx=average(x),my=average(y);
 const sxx=x.reduce((s,v)=>s+(v-mx)**2,0),sxy=x.reduce((s,v,i)=>s+(v-mx)*(y[i]-my),0);
 const b=sxy/sxx,a=my-b*mx,pred=x.map(v=>a+b*v),res=y.map((v,i)=>v-pred[i]);
 const sse=res.reduce((s,v)=>s+v*v,0),sst=y.reduce((s,v)=>s+(v-my)**2,0),ssr=pred.reduce((s,v)=>s+(v-my)**2,0);
 assert.equal(a,1);assert.equal(b,1.5);assert.equal(sse,4);assert.equal(sst,26.5);assert.equal(ssr,22.5);
 assert.equal(average(res),0);assert.equal(x.reduce((s,v,i)=>s+v*res[i],0),0);
 assert.equal(sst,ssr+sse);
 const mse=sse/(n-2),seB=Math.sqrt(mse/sxx),seA=Math.sqrt(mse*(1/n+mx*mx/sxx));
 assert.ok(b/seB>3.18245);assert.ok((b-1)/seB<3.18245);assert.ok(a/seA<3.18245);
 assert.ok(Math.abs((b/seB)**2-ssr/mse)<1e-12);
 assert.ok(Math.abs(sst/(n-1)-(b*b*sxx/(n-1)+sse/(n-1)))<1e-12);
 const figures=data.units.find(u=>u.id==='regression').sections.flatMap(s=>s.blocks.filter(b=>b.kind==='figure'));
 const fit=figures.find(f=>f.id.endsWith('-ols-fit'));
 assert.deepEqual(fit.plot.marks.map(p=>[p.x,p.y]),x.map((v,i)=>[v,y[i]]));
 for(const [v,p] of fit.plot.series[0].points)assert.equal(p,a+b*v);
 const bands=figures.find(f=>f.id.endsWith('-prediction-bands')),critical=3.182446305284263;
 for(const [j,s] of bands.plot.series.entries())for(const [v,p] of s.points){
  const sign=j===0?0:(j%2?-1:1),future=j>=3?1:0;
  const expected=a+b*v+sign*critical*Math.sqrt(mse*(future+1/n+(v-mx)**2/sxx));
  assert.ok(Math.abs(p-expected)<1e-11);
 }
 for(let i=0;i<bands.plot.series[0].points.length;i++){
  const values=bands.plot.series.map(s=>s.points[i][1]);
  assert.ok(values[3]<values[1]&&values[1]<values[0]&&values[0]<values[2]&&values[2]<values[4]);
 }
 const curve=figures.find(f=>f.id.endsWith('-residual-curvature'));
 const curveY=x.map(v=>v*v),curveMean=average(curveY);
 assert.deepEqual(curve.plot.series[0].points,x.map((v,i)=>[v,curveY[i]-curveMean]));
});

test('historical losses, exhaustive bootstrap and simulated-price quantiles match independent calculations',()=>{
 const assets=[[-.1,.04],[-.04,.02],[.02,.01],[.05,-.01],[.1,-.03]];
 const loss=assets.map(([a,b])=>-100000*(.6*a+.4*b));
 for(const [i,target] of [4400,1600,-1600,-2600,-4800].entries())assert.ok(Math.abs(loss[i]-target)<1e-9);
 const sorted=loss.toSorted((a,b)=>a-b);
 assert.ok(Math.abs(sorted[Math.ceil(.8*5)-1]-1600)<1e-9);
 const original=[-2,0,4],means=[];
 for(const a of original)for(const b of original)for(const c of original)means.push((a+b+c)/3);
 const mean=means.reduce((s,v)=>s+v,0)/means.length,variance=means.reduce((s,v)=>s+(v-mean)**2,0)/means.length;
 assert.equal(means.length,27);assert.ok(Math.abs(mean-2/3)<1e-12);assert.ok(Math.abs(variance-56/27)<1e-12);
 const f=data.units.find(u=>u.id==='simulation').sections.flatMap(s=>s.blocks).find(b=>b.kind==='figure');
 for(const [i,s] of f.plot.series.entries())for(const [t,p] of s.points){
  const logMean=Math.log(100)+(.06-.04/2)*t,logSD=.2*Math.sqrt(t);
  const target=i===0?Math.exp(logMean+.5*logSD**2):Math.exp(logMean+logSD*([0,0,-1.644853626951,1.644853626951][i]));
  assert.ok(Math.abs(p-target)<1e-10);assert.ok(p>=f.plot.y[0]&&p<=f.plot.y[1]);
 }
 for(const rho of [-1,-.6,0,.6,1]){
  // Four symmetric pairs form an exact finite distribution of independent unit-variance shocks.
  const scenarios=[[-1,-1],[-1,1],[1,-1],[1,1]].map(([u,v])=>[u,rho*u+Math.sqrt(1-rho*rho)*v]);
  assert.ok(Math.abs(scenarios.reduce((s,[a,b])=>s+a*b,0)/4-rho)<1e-12);
  assert.ok(Math.abs(scenarios.reduce((s,[,b])=>s+b*b,0)/4-1)<1e-12);
 }
});

test('classification metrics and costs agree with complete confusion matrices',()=>{
 const a={tp:14,fn:6,fp:49,tn:931},b={tp:18,fn:2,fp:147,tn:833};
 for(const m of [a,b]){assert.equal(m.tp+m.fn,20);assert.equal(m.fp+m.tn,980);}
 assert.equal((a.tp+a.tn)/1000,.945);assert.equal((b.tp+b.tn)/1000,.851);
 assert.ok(Math.abs(a.tp/(a.tp+a.fp)-2/9)<1e-12);
 assert.equal(a.tp/(a.tp+a.fn),.7);assert.equal(a.fp/(a.fp+a.tn),.05);
 const cost=(m,c)=>m.fn*c+m.fp,cross=(b.fp-a.fp)/(a.fn-b.fn);
 assert.equal(cross,24.5);assert.equal(cost(a,100),649);assert.equal(cost(b,100),347);
 assert.equal(cost(a,cross),cost(b,cross));assert.equal(cost(a,cross),196);
 const f=data.units.find(u=>u.id==='data-science').sections.flatMap(s=>s.blocks).find(b=>b.kind==='figure');
 for(const [i,m] of [a,b].entries())for(const [c,v] of f.plot.series[i].points)assert.equal(v,cost(m,c));
 assert.deepEqual(f.plot.marks.map(p=>[p.x,p.y]),[[cross,cost(a,cross)]]);
});

test('market structure graphics satisfy costs, welfare, tangency and strategic best responses',()=>{
 const unit=data.units.find(u=>u.id==='market-structures'),figures=unit.sections.flatMap(s=>s.blocks).filter(b=>b.kind==='figure');
 const get=suffix=>figures.find(f=>f.id.endsWith(suffix));
 const close=(a,b,tol=1e-8)=>assert.ok(Math.abs(a-b)<tol,a+' vs '+b);
 const tc=q=>8+10*q-2*q*q+q*q*q,derivative=(f,q)=>(f(q+1e-5)-f(q-1e-5))/2e-5;
 const cost=get('cost-thresholds');
 for(const [j,series] of cost.plot.series.entries())for(const [q,v] of series.points){
  const expected=j===0?derivative(tc,q):j===1?(tc(q)-tc(0))/q:j===2?tc(q)/q:[9,14][j-3];
  close(v,expected,1e-7);
 }
 close(derivative(q=>(tc(q)-8)/q,1),0);close(derivative(q=>tc(q)/q,2),0);
 for(const [p,opt] of [[8,0],[9,0],[10,4/3],[14,2],[25,3]]){
  const profit=q=>p*q-tc(q);
  for(let j=0;j<=4000;j++)assert.ok(profit(opt)>=profit(j/1000)-1e-9);
 }
 close(tc(0),8);close(tc(3),47);close(10*4/3-tc(4/3),-184/27);
 const monopoly=get('market-power-welfare'),demand=q=>50-2*q,revenue=q=>demand(q)*q;
 for(const [q,v] of monopoly.plot.series[0].points)close(v,demand(q));
 for(const [q,v] of monopoly.plot.series[1].points)close(v,derivative(revenue,q),1e-7);
 for(const [,v] of monopoly.plot.series[2].points)close(v,10);
 close(derivative(revenue,10),10,1e-7);
 const triangle=monopoly.plot.areas[0].points;
 const area=Math.abs(triangle.reduce((s,p,j)=>{const n=triangle[(j+1)%triangle.length];return s+p[0]*n[1]-n[0]*p[1];},0))/2;
 close(area,100);close(demand(10)*10-(20+10*10),180);
 const differentiated=get('differentiation-entry'),total=q=>100+10*q+q*q,price=q=>50-3*q;
 for(const [j,series] of differentiated.plot.series.entries())for(const [q,v] of series.points){
  const expected=[price(q),derivative(x=>price(x)*x,q),derivative(total,q),total(q)/q][j];
  close(v,expected,1e-7);
 }
 close(price(5),total(5)/5);close(derivative(q=>total(q)/q,5),derivative(price,5),1e-7);
 close(derivative(q=>total(q)/q,10),0);
 const cournot=get('cournot-responses'),profit=(q,r)=>(100-q-r-20)*q;
 for(const [q1,q2] of cournot.plot.series[0].points)close(derivative(q=>profit(q,q2),q1),0,1e-7);
 for(const [q1,q2] of cournot.plot.series[1].points)close(derivative(q=>profit(q,q1),q2),0,1e-7);
 const q=80/3;close(cournot.plot.marks[0].x,q);close(cournot.plot.marks[0].y,q);
 for(let v=0;v<=80;v+=.1)assert.ok(profit(q,q)>=profit(v,q)-1e-9);
 close(profit(q,q),6400/9);close(profit(40,q),1600/3);
 const follower=q1=>Math.max(0,(80-q1)/2);
 for(let v=0;v<=80;v+=.1)assert.ok(profit(40,20)>=profit(v,follower(v))-1e-9);
 close(profit(40,20),800);close(profit(20,40),400);
});

test('cycle diagrams and examples preserve stock-flow and balance-sheet identities',()=>{
 const unit=data.units.find(u=>u.id==='cycles'),figs=unit.sections.flatMap(s=>s.blocks).filter(b=>b.kind==='figure');
 const cycle=figs.find(f=>f.id.endsWith('cycle-levels')),actual=cycle.plot.series[0].points;
 for(const [q,y] of cycle.plot.series[1].points)assert.ok(Math.abs(y-100*1.01**q)<1e-10);
 assert.ok(actual[4][1]>actual[3][1]&&actual[4][1]>actual[5][1]);
 assert.ok(actual[8][1]<actual[7][1]&&actual[8][1]<actual[9][1]);
 assert.ok(actual[9][1]>actual[8][1]&&actual[9][1]<100*1.01**9);
 const output=[100+(120-100),100+(125-120)];
 assert.deepEqual(output,[120,105]);assert.equal(output[1]-output[0],-15);
 assert.equal(90+6,96);assert.equal(6/(90+6)*100,6.25);
 const lev=figs.find(f=>f.id.endsWith('deleveraging'));
 for(const [j,series] of lev.plot.series.entries())for(const [shock,value] of series.points){
  const assets=100*(1-shock/100),debt=80,equity=assets-debt;
  if(j===0)assert.ok(Math.abs(value-equity)<1e-10);
  else {const afterAssets=assets-value,afterDebt=debt-value;assert.ok(afterDebt>=0);assert.ok(Math.abs(afterAssets-afterDebt-equity)<1e-10);assert.ok(Math.abs(afterAssets/equity-5)<1e-10);}
 }
 const gap=(y,p)=>(y/p-1)*100;assert.ok(gap(100,104)<gap(98,100));assert.ok(100/98-1>0);
 assert.ok(Math.abs((101/100)**4-1-.04060401)<1e-10);
 assert.ok(Math.abs((101/98-1)*100-3.061224489795918)<1e-10);
});

test('fiscal multiplier intersections and debt paths reconcile through separate income and currency calculations',()=>{
 const unit=data.units.find(u=>u.id==='fiscal'),figs=unit.sections.flatMap(s=>s.blocks).filter(b=>b.kind==='figure');
 const cross=figs.find(f=>f.id.endsWith('spending-cross'));
 for(const [j,series] of cross.plot.series.entries())for(const [y,ae] of series.points){
  const expected=j===0?y:(j===1?50:60)+.8*(1-.25)*y-.1*y;
  assert.ok(Math.abs(ae-expected)<1e-9);
 }
 assert.deepEqual(cross.plot.marks.map(m=>[m.x,m.y]),[[100,100],[120,120]]);
 const seriesSum=(first,ratio)=>Array.from({length:250},(_,t)=>first*ratio**t).reduce((a,b)=>a+b,0);
 assert.ok(Math.abs(seriesSum(10,.8)-50)<1e-10);
 assert.ok(Math.abs(seriesSum(10,.8*.75-.1)-20)<1e-10);
 assert.ok(Math.abs(seriesSum(.8*10,.8*.75-.1)-16)<1e-10);
 assert.ok(Math.abs(seriesSum(10-.8*10,.8*.75-.1)-4)<1e-10);
 const debt=figs.find(f=>f.id.endsWith('debt-paths'));
 for(const [j,i] of [.02,.05,.07].entries()){
  let debtAmount=80,gdp=100;
  for(const [t,ratio] of debt.plot.series[j].points){
   if(t){const interest=debtAmount*i;gdp*=1.03;const surplus=.01*gdp;debtAmount+=interest-surplus;}
   assert.ok(Math.abs(ratio-debtAmount/gdp*100)<1e-10);
  }
 }
 assert.ok(Math.abs((80+4-1.03)/103*100-80.55339805825243)<1e-10);
 assert.ok(Math.abs((80+4-1.6)/103-.8)<1e-12);
 const stable=(.03-.06)/1.06*.8;
 assert.ok(Math.abs((80*1.03-stable*106)/106-.8)<1e-12);assert.ok(stable<0);
});

test('monetary diagrams distinguish exact real rates, supply shocks and price-level comparisons',()=>{
 const unit=data.units.find(u=>u.id==='monetary'),figs=unit.sections.flatMap(s=>s.blocks).filter(b=>b.kind==='figure');
 const rates=figs.find(f=>f.id.endsWith('real-interest'));
 for(const [j,i] of [.05,.04].entries())for(const [pi,r] of rates.plot.series[j].points){
  const nominalPayoff=100*(1+i),futureBasketPrice=1+pi/100;
  assert.ok(Math.abs(r-(nominalPayoff/futureBasketPrice-100))<1e-10);
 }
 assert.ok(rates.plot.marks[1].y>rates.plot.marks[0].y);
 const adas=figs.find(f=>f.id.endsWith('supply-demand'));
 for(const [j,series] of adas.plot.series.entries())for(const [y,p] of series.points){
  const expected=[200-y,50+.5*y,65+.5*y,215-y][j];assert.equal(p,expected);
 }
 for(const [j,m] of adas.plot.marks.entries()){
  assert.equal(m.y,(j===2?215:200)-m.x);
  assert.equal(m.y,(j===0?50:65)+.5*m.x);
 }
 assert.equal(adas.plot.marks[1].x,90);assert.equal(adas.plot.marks[1].y,110);
 assert.equal(adas.plot.marks[2].x,100);assert.equal(adas.plot.marks[2].y,115);
 const deposits=100,cash=20,required=10,excess=10;
 assert.equal((cash+deposits)/(cash+required+excess),3);
 const nominalGrowth=1.08*.97,realGrowth=1.02,inflation=nominalGrowth/realGrowth-1;
 assert.ok(Math.abs(realGrowth*(1+inflation)-nominalGrowth)<1e-12);
 assert.ok(Math.abs(inflation*100-2.7058823529411806)<1e-10);
 for(const id of ['market-structures','cycles','fiscal','monetary']){
  const c=data.coverage.find(m=>m.id===id);assert.ok(c.objectives.every(o=>o.sections.length&&o.practice.length));
  for(const f of data.units.find(u=>u.id===id).sections.flatMap(s=>s.blocks).filter(b=>b.kind==='figure'))
   for(const s of f.plot.series)for(const [x,y] of s.points){assert.ok(x>=f.plot.x[0]-1e-9&&x<=f.plot.x[1]+1e-9,f.id);assert.ok(y>=f.plot.y[0]-1e-9&&y<=f.plot.y[1]+1e-9,f.id);}
 }
});

test('new glossary definitions point to existing precise 2027 sections',()=>{
 const glossary=require('../finance-glossary.cjs'),entries=require('../finance-cfa/glossary.cjs');
 assert.ok(entries.length>=40);
 assert.equal(new Set(entries.map(g=>g.term.toLocaleLowerCase('de'))).size,entries.length,'a duplicate must not silently replace a precise definition or return link');
 for(const g of glossary.filter(g=>g.cfa)){
  const u=data.units.find(u=>u.id===g.cfa.unit);assert.ok(u?.sections.some(s=>s.id===g.cfa.section),g.term);
 }
});
test('unwritten modules remain visible as gaps and cannot pass the release gate',()=>{
 if(!data.release&&data.units.length<data.modules.length)assert.throws(()=>compile({release:true}),/Fragen|Lernziele|Prüfung/);
 const eps=data.coverage.find(m=>m.id==='income-statement');
 assert.ok(eps.objectives.every(o=>o.sections.length&&o.practice.length));
});
