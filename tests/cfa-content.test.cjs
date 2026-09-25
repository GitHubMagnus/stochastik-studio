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
  'mon-a1':(1.05/1.02-1)*100,'mon-b1':(2+3+4+5)/4+.5,
  'geo-12':140*2500-90000,'geo-14':3/(40-10)*100,'geo-a1':.15*60-(4+.15*20),
  'tr-02':12/8,'tr-05':120-2*25-(25-15),'tr-06':25+5,
  'tr-07':5*(120-2*30-(30-15)),'tr-08':.5*6*(4+8),'tr-09':-420+110+250,
  'tr-10':(34-26)*15,'tr-13':4*(44-10-(100-2*44)),'tr-14':.5*4*(4+8),
  'tr-19':130-100,'tr-20':(70+20-82)-20,'tr-21':45,
  'tr-a1':.5*4*(2*4+3*4),'tr-b1':-2*(260+230)/2+2*(160+170)/2+3*(230-170),
  'fxm-01':800*1.25,'fxm-02':1/1.6,'fxm-04':(.8/.88-1)*100,
  'fxm-05':2*80/200,'fxm-06':(1.08/1.03-1)*100,
  'fxm-08':(Math.sqrt(1.2*.8)-1)*100,'fxm-10':(1.06*.88-1)*100,
  'fxm-16':200-200*1.05,'fxm-18':((500-150*2.4)/(500-150*2)-1)*100,
  'fxm-a1':((100*1.35+5*1.4)/(100*1.5)-1)*100,'fxm-b1':(1.03*1.02/1.04-1)*100,
  'fxc-01':1.15*140,'fxc-02':1.3/1.04,'fxc-03':50000*1.24,'fxc-04':1/1.26,
  'fxc-05':1.32/1.1,'fxc-06':1.35/1.08,'fxc-08':100000*(1.08/1.35*1.27-1),
  'fxc-09':1.4*1.06/1.03,'fxc-11':100000*1.02*1.55-150000*1.04,
  'fxc-12':150000*1.04-100000*1.02*1.48,'fxc-13':.9*1.02/1.01,
  'fxc-14':1.1*Math.sqrt(1.09/1.04),'fxc-15':1.072-18*.0001,'fxc-16':1.2003+17*.0001,
  'fxc-17':(1.275/1.25-1)/.5*100,'fxc-18':(1.25/1.275-1)*100,
  'fxc-20':1.02*1.06/1.02,'fxc-21':80000*1.3,'fxc-a1':148*1.20,
  'fxc-b1':(1.26/1.25*(1+.04*.5)-1)/.5*100,
  'af-06':420+48-12+30-26,'af-14':9,'af-18':84-50*1.2,
  'bs-02':90-25-15,'bs-04':72*(4/6),'bs-08':380-310,
  'bs-09':150+48-160,'bs-10':210-.7*250,'bs-12':55-(420-Math.max(385,390)),
  'bs-16':98*1.05-3,'bs-17':94-(100*1.04-4),'bs-20':190+190*.07-10,
  'bs-21':121/1.1**2,'bs-24':120/200,'bs-25':320/800*100,
  'bs-26':180/(240-40)*100,'bs-a1':7,'bs-b1':52-44,
  'cfp-03':46-38,'cfp-04':65+720-92,'cfp-05':450-20-15,
  'cfp-06':24+5+2,'cfp-07':36-4,'cfp-08':840-(510+175+18+42),
  'cfp-09':88+24-6-(12-7-9),'cfp-11':300+35+20-260,'cfp-12':28-110,
  'cfp-13':90+62-137,'cfp-14':70+30-25-12,'cfp-15':40+75-60-10-3,
  'cfp-16':600+17-45,'cfp-22':150+30-5-18-32,'cfp-23':86+14,'cfp-25':12,
  'cfp-a1':900+12-8-50,'cfp-a2':150-40-15,'cfp-b1':420+75-60-25,'cfp-b2':6,
  'cfl-01':140-100,'cfl-02':156/1200*100,'cfl-03':760/950*100,
  'cfl-08':240-60+35-80-20,'cfl-09':168+24-7.2-75,'cfl-10':130-85+35-15,
  'cfl-11':102-15-12,'cfl-12':210-9-95,'cfl-13':180-25-90+5,'cfl-14':150-125,
  'cfl-16':(800+120)*.1*.75-120*.4,'cfl-18':126/105,'cfl-20':160/16,
  'cfl-21':168/84,'cfl-22':96/480*100,'cfl-a1':100-(190-120),
  'cfl-b1':154+28-7-90,'cfl-b2':.16-.16*.25,
  'inv-01':Math.min(84,98-9-11),'inv-02':Math.min(50,38)+Math.min(50,67),
  'inv-03':Math.min(90,102)-64,'inv-06':108-18,'inv-07':95,
  'inv-08':8000*9+72000*8000/12000,'inv-10':50*10,
  'inv-11':70*(40*15+60*18)/100,'inv-14':10*30+2*20+6*40,
  'inv-15':(30*12+10*20)/40,'inv-16':640+85,'inv-17':2400-95+120,
  'inv-18':160*.3,'inv-20':224/160,'inv-a2':(140-100)*.75,'inv-b1':(170-100)-(170-140),
  'la-01':96+4,'la-05':470000*47000/235000,'la-06':(180-3*20-12)/3,
  'la-07':160-Math.max(132,140),'la-08':200-150,'la-09':0,
  'la-11':(240-2*40)-(240-40-50)*4/5,'la-13':(144-104)/4,
  'la-14':20-12,'la-16':Math.min(85,80-6),'la-17':65-5-(160-110),
  'la-19':500+120-65-15+8-30,'la-20':(900-360)/90,
  'la-a1':180-140,'la-a2':650-600+80+30+40+20-50-30,'la-b1':40/4*.75,'la-b2':10,
  'tax-02':180-12+8-26,'tax-04':(110-80)*.25,'tax-05':45*.2,
  'tax-06':50,'tax-07':80*.25,'tax-08':45+(18-10)-(12-7),
  'tax-09':(70-40)*.3,'tax-11':72+8-14,'tax-12':30-18,
  'tax-13':85*.2,'tax-15':(30+50)*.25,'tax-16':(120-80)*(.3-.2),
  'tax-18':52/200*100,'tax-19':13.5/90*100,
  'tax-20':(160+16-8)*.25/160*100,'tax-21':(240*.3+60*.1)/300*100,
  'tax-24':80-(80-20)*.3,'tax-a1':180-20/.25,
  'tax-a2':65+35-20-6-((40-6)-(30-10)),'tax-b1':54-8-2+10-6,'tax-b2':(20+50)*.3,
  'rq-02':140-45,'rq-03':65-1000*.09,'rq-08':18,'rq-10':150-40,
  'rq-17':72+(12-8)*.75,'rq-21':96-60,'rq-22':48-12,'rq-23':30-18+9,
  'rq-24':100*(10+900/100)-100*(10+900/150),
  'rq-29':365*132/880,'rq-30':(120-72)/600*100,'rq-a1':78-10*.75-30*.8,'rq-b1':150-30
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

test('geopolitical scenario examples distinguish mean loss, tail severity and fixed mitigation costs',()=>{
 const unit=data.units.find(u=>u.id==='geopolitics'),fig=unit.sections.flatMap(s=>s.blocks).find(b=>b.kind==='figure');
 for(const [j,series] of fig.plot.series.entries())for(const [percent,cost] of series.points){
  const states=j===0?[[percent/100,50],[1-percent/100,0]]:[[percent/100,22],[1-percent/100,2]];
  assert.ok(Math.abs(cost-states.reduce((v,[p,l])=>v+p*l,0))<1e-12);
 }
 const breakEven=fig.plot.marks[0];
 assert.ok(Math.abs(breakEven.y-breakEven.x/100*50)<1e-12);
 assert.ok(Math.abs(breakEven.y-(2+breakEven.x/100*20))<1e-12);
 assert.equal(.02*80,.2*8);assert.ok(80>8);
 assert.equal(200*3000-150000,450000);
 const varianceA=.02*80**2-(.02*80)**2,varianceB=.2*8**2-(.2*8)**2;
 assert.ok(varianceA>varianceB,'equal expected loss does not imply equal dispersion');
});

test('trade production, tariff areas, quota incidence and subsidy examples reconcile independently',()=>{
 const unit=data.units.find(u=>u.id==='trade'),figs=unit.sections.flatMap(s=>s.blocks).filter(b=>b.kind==='figure');
 const frontier=figs.find(f=>f.id.endsWith('world-frontier'));
 // Maximize cloth over feasible integer wheat allocations to the two countries.
 const maximumCloth=w=>Math.max(...Array.from({length:121},(_,a)=>{
  const b=w-a;if(b<0||b>40)return -Infinity;return (120-a)/2+(120-3*b)/4;
 }));
 for(const [w,c] of frontier.plot.series[0].points)assert.equal(c,maximumCloth(w));
 assert.equal(maximumCloth(90),45);assert.ok(maximumCloth(80)>45);
 const before=[[60,30],[20,15]],production=[[90,15],[0,30]],after=[[66,30],[24,15]];
 for(const [j,cost] of [[1,2],[3,4]].entries()){
  assert.equal(before[j][0]*cost[0]+before[j][1]*cost[1],120);
  assert.equal(production[j][0]*cost[0]+production[j][1]*cost[1],120);
  assert.ok(after[j][0]*cost[0]+after[j][1]*cost[1]>120);
 }
 for(let good=0;good<2;good++)assert.equal(after.reduce((v,a)=>v+a[good],0),production.reduce((v,a)=>v+a[good],0));
 const demand=p=>100-2*p,supply=p=>p-10;
 const surplus=p=>({cs:(50-p)*demand(p)/2,ps:(p-10)*supply(p)/2});
 const old=surplus(20),tariff=surplus(30),revenue=10*(demand(30)-supply(30));
 assert.deepEqual(old,{cs:900,ps:50});assert.deepEqual(tariff,{cs:400,ps:200});assert.equal(revenue,200);
 assert.equal(tariff.cs+tariff.ps+revenue-old.cs-old.ps,-150);
 const area=points=>Math.abs(points.reduce((v,[x,y],i)=>{const [xn,yn]=points[(i+1)%points.length];return v+x*yn-y*xn;},0))/2;
 const diagram=figs.find(f=>f.id.endsWith('tariff-welfare'));
 assert.deepEqual(diagram.plot.areas.map(a=>area(a.points)),[50,100,200]);
 for(const [q,p] of diagram.plot.series[0].points)assert.equal(q,demand(p));
 for(const [q,p] of diagram.plot.series[1].points)assert.equal(q,supply(p));
 assert.equal(tariff.cs+tariff.ps-old.cs-old.ps,-350,'foreign quota rent leaves the domestic welfare total');
 const quotaPrice=110/3;assert.ok(Math.abs(120-2*quotaPrice-(quotaPrice-10)-20)<1e-12);
 assert.equal(120-2*30-(30-10),40,'tariff allows imports to expand after demand shift');
 const exportOld=surplus(40),exportNew=surplus(45),subsidy=5*(supply(45)-demand(45));
 assert.deepEqual(exportOld,{cs:100,ps:450});assert.deepEqual(exportNew,{cs:25,ps:612.5});assert.equal(subsidy,125);
 assert.equal(exportNew.cs+exportNew.ps-subsidy-exportOld.cs-exportOld.ps,-37.5);
 assert.equal(surplus(30).ps-surplus(20).ps-10*supply(30),-50,'production subsidy preserves consumer world price');
 assert.equal((96-90)-16,-10,'lower customer price does not imply a resource saving');
 assert.equal(-2*(100+80)/2+2*(40+50)/2+2.5*30,-15);
 assert.equal(.5*30-.5*2*(20+10),-15,'large-country terms-of-trade effect does not ensure a net gain');
});

test('FX graph, real exchange rates and trade responses preserve quote direction and units',()=>{
 const unit=data.units.find(u=>u.id==='fx-markets'),fig=unit.sections.flatMap(s=>s.blocks).find(b=>b.kind==='figure');
 for(const [foreign,domestic] of fig.plot.series[0].points)assert.ok(Math.abs((1+foreign/100)*(1+domestic/100)-1)<1e-12);
 for(const [x,y] of fig.plot.series[1].points)assert.equal(x+y,0);
 assert.ok(Math.abs(1.2*110/126-1-1/21)<1e-12);
 assert.ok(Math.abs((126/110)*110/126-1)<1e-12);
 const effective=Math.exp(.6*Math.log(1.1)+.4*Math.log(.95))-1;
 assert.ok(Math.abs(effective*100-3.7349)<.00005);
 const effectiveText=unit.sections.find(s=>s.id==='effective-rate').blocks.filter(b=>typeof b==='string').join(' ');
 assert.match(effectiveText,/3,7349/);
 const tradeBalance=s=>100*s**.8-100*s*s**(-.7),h=1e-6;
 const derivative=(tradeBalance(Math.exp(h))-tradeBalance(Math.exp(-h)))/(2*h);
 assert.ok(Math.abs(derivative-(100*.8-100*(1-.7)))<1e-6);
 assert.ok(Math.abs(108-110*.93-5.7)<1e-12);
 assert.equal(300-100*2.4,60);
 assert.ok(Math.abs(((104*1.25+6*1.1)/120-1)*100-13.8333333333333)<1e-10);
 const appreciation=data.questions.find(q=>q.id==='fxm-03');assert.match(appreciation.options[appreciation.correct].text,/appreciated by 10\.00%/);
});

test('FX executable paths and forward curves reconcile in original currency cash flows',()=>{
 const unit=data.units.find(u=>u.id==='fx-calculation'),fig=unit.sections.flatMap(s=>s.blocks).find(b=>b.kind==='figure');
 const rates=[[.04,.02],[.02,.02],[.02,.04]];
 for(const [j,series] of fig.plot.series.entries())for(const [t,forward] of series.points){
  const [rd,rf]=rates[j],domesticEnd=120*(1+rd)**t,foreignEnd=100*(1+rf)**t;
  assert.ok(Math.abs(foreignEnd*forward-domesticEnd)<1e-10,'covered end values must match');
 }
 assert.ok(Math.abs(100*1.10/1.12-98.21428571428571)<1e-10);
 const crossBid=1.25/1.12,crossAsk=1.28/1.10;
 assert.ok(crossBid<crossAsk);assert.ok(1.15<crossAsk);assert.ok(crossBid<1.18);
 const usd=1e6*1.1,gbp=usd/1.28,eur=gbp*1.18;
 assert.equal(gbp,859375);assert.equal(eur-1e6,14062.5);
 assert.equal(1e6*1.02*1.25-1.2e6*1.04,27000);
 assert.equal(1.2e6*1.04-1e6*1.02*1.2,24000);
 const simple=1.2*1.025/1.01,effective=1.2*Math.sqrt(1.05/1.02);
 assert.ok(Math.abs((100*1.02)*1.26-125*(1+.05632*.5))<1e-10,'implied funding rate equalizes covered maturity proceeds');
 assert.ok(Math.abs(simple-1.2178217821782176)<1e-12);
 assert.ok(Math.abs(effective-1.2175191748701415)<1e-12);assert.ok(simple>effective);
 const upper=1.201*1.05/1.01,lower=1.199*1.03/1.03;
 assert.ok(1.21<upper);assert.ok(1.22>lower);
 for(const futureSpot of [.5,1.1,1.3,2]){
  const receipt=100000*futureSpot,shortForward=100000*(1.22-futureSpot);
  assert.ok(Math.abs(receipt+shortForward-122000)<1e-9);
 }
});

test('all eight economics modules have explanation and independent practice for every 2027 objective',()=>{
 const modules=data.modules.filter(m=>m.topic==='economics');assert.equal(modules.length,8);
 for(const m of modules){
  const coverage=data.coverage.find(c=>c.id===m.id);
  assert.ok(coverage.objectives.every(o=>o.sections.length&&o.practice.length),m.id);
  const u=data.units.find(u=>u.id===m.id);
  for(const fig of u.sections.flatMap(s=>s.blocks).filter(b=>b.kind==='figure')){
   for(const series of fig.plot.series)for(const [x,y] of series.points){
    assert.ok(x>=fig.plot.x[0]-1e-9&&x<=fig.plot.x[1]+1e-9,fig.id);
    assert.ok(y>=fig.plot.y[0]-1e-9&&y<=fig.plot.y[1]+1e-9,fig.id);
   }
  }
 }
 for(const pool of ['mock-a','mock-b'])assert.equal(data.questions.filter(q=>q.topic==='economics'&&q.pool===pool).length,12);
});

test('new glossary definitions point to existing precise 2027 sections',()=>{
 const glossary=require('../finance-glossary.cjs'),entries=require('../finance-cfa/glossary.cjs');
 assert.ok(entries.length>=40);
 assert.equal(new Set(entries.map(g=>g.term.toLocaleLowerCase('de'))).size,entries.length,'a duplicate must not silently replace a precise definition or return link');
 const normalized=s=>s.toLocaleLowerCase('de').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,'');
 const labels=new Map();
 for(const entry of entries){
  for(const name of [entry.term,...entry.aliases]){
   const key=normalized(name);
   assert.ok(!labels.has(key)||labels.get(key)===entry.term,'ambiguous authored alias: '+name);
   labels.set(key,entry.term);
  }
  const merged=glossary.find(g=>[g.term,...g.aliases].some(name=>normalized(name)===normalized(entry.term)));
  assert.deepEqual(merged?.cfa,entry.cfa,'return link overwritten through alias: '+entry.term);
  assert.equal(merged?.definition,entry.definition);
 }
 for(const g of glossary.filter(g=>g.cfa)){
  const u=data.units.find(u=>u.id===g.cfa.unit);assert.ok(u?.sections.some(s=>s.id===g.cfa.section),g.term);
 }
});

test('the complete Lumen case reconciles its published statements to a transaction ledger',()=>{
 const u=data.units.find(u=>u.id==='cashflow-preparation');
 const section=id=>u.sections.find(s=>s.id===id).blocks;
 const number=s=>Number(s.replace(/\./g,'').replace(',','.').replace('−','-'));
 const balance=section('case-data').find(b=>b.kind==='table');
 const keys=['cash','ar','inventory','ppe',null,'ap','accrual','tax','debt','capital','retained'];
 const ledger={};for(const [i,key] of keys.entries())if(key)ledger[key]=number(balance.rows[i][1]);
 let income=0,cfo=0,cfi=0,cff=0;
 const post=(entries,pnl=0,pool=null)=>{for(const [key,v] of Object.entries(entries))ledger[key]+=v;income+=pnl;const cash=entries.cash||0;if(pool==='o')cfo+=cash;if(pool==='i')cfi+=cash;if(pool==='f')cff+=cash;};
 post({ar:1000},1000);post({cash:970,ar:-970},0,'o');
 post({inventory:610,ap:610});post({inventory:-600},-600);
 post({cash:-595,ap:-595},0,'o');post({accrual:200},-200);post({cash:-195,accrual:-195},0,'o');
 post({ppe:-40},-40);post({cash:35,ppe:-25},10,'i');post({cash:-80,ppe:80},0,'i');
 post({cash:-20},-20,'o');post({tax:45},-45);post({cash:-40,tax:-40},0,'o');
 post({cash:50,debt:50},0,'f');post({cash:-30,debt:-30},0,'f');post({cash:-25,retained:-25},0,'f');
 ledger.retained+=income;
 for(const [i,key] of keys.entries())if(key)assert.equal(ledger[key],number(balance.rows[i][2]),key);
 const assets=ledger.cash+ledger.ar+ledger.inventory+ledger.ppe;
 const claims=ledger.ap+ledger.accrual+ledger.tax+ledger.debt+ledger.capital+ledger.retained;
 assert.equal(assets,claims);assert.equal(assets,number(balance.rows[4][2]));
 assert.equal(income,number(section('case-data').filter(b=>b.kind==='table')[1].rows.at(-1)[1]));
 const direct=section('direct').find(b=>b.kind==='table');
 assert.equal(direct.rows.slice(0,-1).reduce((s,r)=>s+number(r[1]),0),cfo);
 assert.equal(number(direct.rows.at(-1)[1]),cfo);
 let running=0;for(const row of section('indirect').find(b=>b.kind==='table').rows){running+=number(row[1]);assert.equal(running,number(row[2]));}
 assert.equal(running,cfo);
 const bridge=section('reconcile').find(b=>b.kind==='figure').plot.series[0].points;
 assert.deepEqual(bridge,[[0,100],[1,100+cfo],[2,100+cfo+cfi],[3,100+cfo+cfi+cff]]);
 const variants=section('ifrs18-case').find(b=>b.kind==='table');
 for(const [i,us,ifrs] of [[0,cfo,cfo+20],[1,cfi,cfi],[2,cff,cff-20],[3,cfo+cfi+cff,cfo+cfi+cff]]){
  assert.equal(number(variants.rows[i][1]),us);assert.equal(number(variants.rows[i][2]),ifrs);
 }
 assert.equal(170+40-10-30-10+15+5-40,cfo+20,'IFRS 18 reconciliation starts with operating profit and subtracts actual taxes only once');
});

test('free cash flows are invariant to interest classification and growth figures reconcile to incremental capital',()=>{
 const ebit=200,interest=20,tax=.25,dep=40,workingInvestment=30,fixedInvestment=70;
 const unleveredTax=ebit*tax,actualTax=(ebit-interest)*tax;
 const beforeInterest=ebit+dep-workingInvestment-actualTax,afterInterest=beforeInterest-interest;
 const operatingValueCash=ebit-unleveredTax+dep-workingInvestment-fixedInvestment;
 assert.equal(operatingValueCash,90);assert.equal(afterInterest,145);assert.equal(beforeInterest,165);
 assert.equal(afterInterest+interest*(1-tax)-fixedInvestment,operatingValueCash);
 assert.equal(beforeInterest-(unleveredTax-actualTax)-fixedInvestment,operatingValueCash);
 for(const newDebt of [-10,0,10]){
  const actualEquityCash=ebit+dep-workingInvestment-actualTax-interest-fixedInvestment+newDebt;
  assert.equal(afterInterest-fixedInvestment+newDebt,actualEquityCash);
  assert.equal(beforeInterest-interest-fixedInvestment+newDebt,actualEquityCash);
  assert.equal(operatingValueCash-interest*(1-tax)+newDebt,actualEquityCash);
 }
 const fig=data.units.find(u=>u.id==='cashflow-analysis').sections.flatMap(s=>s.blocks).find(b=>b.kind==='figure');
 for(const [index,k] of [.05,.4,.8].entries())for(const [growth,value] of fig.plot.series[index].points){
  const extraSales=1000*growth/100,newSales=1000+extraSales,opIncome=newSales*.12,opTax=opIncome*.25;
  const investment=extraSales*k;
  assert.ok(Math.abs(value-(opIncome-opTax-investment))<1e-9);
  assert.ok(value>=fig.plot.y[0]&&value<=fig.plot.y[1]);
 }
 assert.deepEqual(fig.plot.series.map(s=>s.points.find(p=>p[0]===20)[1]),[98,28,-52]);
 assert.equal((145+20+45)/20,10.5);
 assert.ok(Math.abs((145+20)/(20+50)-2.357142857142857)<1e-12);
});

test('balance-sheet examples distinguish expense timing, acquisition residuals, and valuation categories',()=>{
 const fig=data.units.find(u=>u.id==='balance-sheet').sections.flatMap(s=>s.blocks).find(b=>b.kind==='figure');
 const totalCost=40+20+60,annualExpense=60/3;
 for(const [year,cumulative] of fig.plot.series[0].points){
  const remainingAsset=60-year*annualExpense;
  assert.equal(cumulative+remainingAsset,totalCost,'cumulative expenses plus unconsumed asset reconcile to cash spent');
 }
 assert.ok(fig.plot.series[1].points.every(p=>p[1]===totalCost));
 const acquiredNetAssets=180,payment=200,share=.8,nciFair=45;
 const partialNCI=(1-share)*acquiredNetAssets,fullGW=payment+nciFair-acquiredNetAssets,partialGW=payment-share*acquiredNetAssets;
 assert.equal(fullGW,65);assert.equal(partialGW,56);
 assert.ok(Math.abs((fullGW-partialGW)-(nciFair-partialNCI))<1e-10,'NCI and goodwill change by the same amount');
 const carrying=300,goodwill=60,recoverable=Math.max(250,260),loss=carrying-recoverable;
 assert.equal(goodwill-loss,20);assert.equal(carrying-loss,recoverable);
 const cost=95,interest=cost*.06,coupon=4,fairValue=92,amortized=cost+interest-coupon;
 const oci=fairValue-amortized,totalReturn=fairValue+coupon-cost;
 assert.ok(Math.abs(amortized-96.7)<1e-10);assert.ok(Math.abs(oci+4.7)<1e-10);
 assert.ok(Math.abs(interest+oci-totalReturn)<1e-10,'FVOCI components equal coupon plus value change');
 assert.equal(totalReturn,1);
 let provision=133.1/1.1**3;assert.ok(Math.abs(provision-100)<1e-10);
 for(const expected of [110,121,133.1]){provision*=1.1;assert.ok(Math.abs(provision-expected)<1e-10);}
});

test('the four new financial-statement modules cover all sixteen objectives with multiple independent practice questions',()=>{
 const ids=['analysis-framework','balance-sheet','cashflow-preparation','cashflow-analysis'];
 const selected=data.coverage.filter(c=>ids.includes(c.id));
 assert.equal(selected.reduce((n,c)=>n+c.objectives.length,0),16);
 for(const c of selected)for(const o of c.objectives){assert.ok(o.sections.length,c.id);assert.ok(o.practice.length>=3,o.id);}
 assert.equal(data.questions.filter(q=>ids.includes(q.unit)&&q.pool==='practice').length,94);
 for(const pool of ['mock-a','mock-b']){
  assert.equal(data.questions.filter(q=>ids.includes(q.unit)&&q.pool===pool).length,8);
  assert.ok(data.questions.filter(q=>q.topic==='statements'&&q.pool===pool).length>=14);
 }
});

test('inventory figures reconcile to item-level cost flows, taxes and lifetime profits',()=>{
 const u=data.units.find(u=>u.id==='inventory'),figs=u.sections.flatMap(s=>s.blocks).filter(b=>b.kind==='figure');
 const sum=a=>a.reduce((v,n)=>v+n,0),costs=d=>[10,10+d,10+2*d].flatMap(p=>Array(100).fill(p));
 const price=figs.find(f=>f.id.endsWith('price-methods'));
 for(const [index,s] of price.plot.series.entries())for(const [d,value] of s.points){
  const items=costs(d),sold=index===0?items.slice(0,220):index===2?items.slice(-220):Array(220).fill(sum(items)/items.length);
  assert.ok(Math.abs(value+sum(sold)-sum(items))<1e-8);
 }
 const methods=[[2480,1120],[2640,960],[2800,800]];
 const netIncomes=[],cashflows=[];
 for(const [cogs,inventory] of methods){
  assert.equal(cogs+inventory,3600);
  const profit=4400-cogs,tax=profit*.25,ni=profit-tax,cash=4400-2600-tax;
  assert.equal(cash,ni-(inventory-1000));
  netIncomes.push(ni);cashflows.push(cash);
 }
 assert.deepEqual(netIncomes,[1440,1320,1200]);assert.deepEqual(cashflows,[1320,1360,1400]);
 // Each sale is consumed from the layers that exist at that point in time.
 const transact=(method)=>{
  let items=Array(10).fill(10),expense=0;
  for(const [type,n,unitCost] of [['buy',10,14],['sell',12],['buy',10,18],['sell',8]]){
   if(type==='buy'){items.push(...Array(n).fill(unitCost));if(method==='moving')items=Array(items.length).fill(sum(items)/items.length);}
   else expense+=sum(method==='lifo'?items.splice(-n):items.splice(0,n));
  }return [expense,sum(items)];
 };
 for(const [method,expected] of [['fifo',[240,180]],['lifo',[304,116]],['moving',[800/3,460/3]]]){
  const actual=transact(method);actual.forEach((v,i)=>assert.ok(Math.abs(v-expected[i])<1e-9));
  assert.ok(Math.abs(sum(actual)-420)<1e-9);
 }
 const recovery=figs.find(f=>f.id.endsWith('write-down-reversal'));
 const nrv=[100,70,85,110],cost=100;
 for(const [system,series] of recovery.plot.series.entries()){
  let carrying=cost,cumulative=0;
  for(const [t,value] of series.points){
   const next=system===0?Math.min(cost,nrv[t]):Math.min(carrying,nrv[t]);
   cumulative+=next-carrying;carrying=next;assert.equal(value,carrying);
  }
  assert.equal(cumulative+120-carrying,20,'lifetime profit is independent of recognition timing');
 }
 assert.equal(250*14-(100*14+100*10+50*5),850);
 assert.ok(630/175>600/190,'write-down alone can increase turnover');
 const adjusted=[1120,960,800].map(v=>Math.min(v,880));
 assert.deepEqual(adjusted,[880,880,800]);
 assert.deepEqual(adjusted.map(v=>4400-(3600-v)),[1680,1680,1600]);
});

test('long-lived asset schedules reconcile gross balances, cash, impairment and subsequent depreciation',()=>{
 const u=data.units.find(u=>u.id==='long-assets'),number=s=>Number(s.replace(/\./g,'').replace(',','.').replace('−','-'));
 const roll=u.sections.find(s=>s.id==='roll-forward').blocks.find(b=>b.kind==='table').rows;
 for(const row of roll)assert.equal(number(row[1])-number(row[2])-number(row[3]),number(row[4]),row[0]);
 for(let col=1;col<=4;col++)assert.equal(roll.slice(0,-1).reduce((v,r)=>v+number(r[col]),0),number(roll.at(-1)[col]));
 const pv=cf=>[1,2,3].reduce((v,t)=>v+cf/1.1**t,0);
 const comp=u.sections.find(s=>s.id==='us-impairment').blocks.find(b=>b.kind==='table').rows;
 for(const [col,cf,fv] of [[1,40,90],[2,30,70]]){
  assert.ok(Math.abs(number(comp[2][col])-pv(cf))<.00005);
  assert.ok(Math.abs(number(comp[4][col])-Math.max(0,110-Math.max(pv(cf),fv)))<.00005);
  assert.equal(number(comp[5][col]),3*cf<110?110-fv:0);
 }
 const fig=u.sections.find(s=>s.id==='reversal').blocks.find(b=>b.kind==='figure');
 // Follow the actual posted impairment, depreciation and reversal entries over all years.
 for(const [system,series] of fig.plot.series.entries()){
  let book=150;const points=[[0,book]],without=system===2,ifrs=system===0;
  for(let year=1;year<=5;year++){
   book-=book/(6-year);points.push([year,book]);
   if(year===1&&!without){book-=30;points.push([year,book]);}
   if(year===2&&ifrs){book=Math.min(110,150-2*30);points.push([year,book]);}
  }
  assert.deepEqual(series.points,points);
 }
 const additive={cash:-112,ppe:114,liability:6,income:-4};
 assert.equal(additive.cash+additive.ppe-additive.liability,additive.income);
 assert.equal(650-(600-80-30-40-20)-50-30,140);
 assert.equal((144-104)/4,10);
 assert.equal((900-360)/90+360/90,900/90);
 assert.equal(Math.max(0,80-90)/4,0,'a residual value above carrying value does not create negative depreciation');
 const answer=id=>data.questions.find(q=>q.id===id).options[data.questions.find(q=>q.id===id).correct].text;
 assert.match(answer('la-b2'),/10 million in profit or loss and €20 million in OCI/);
});

test('tax examples reconcile every year to tax bases, expense and cash rather than end-balance shortcuts',()=>{
 const u=data.units.find(u=>u.id==='income-taxes'),section=u.sections.find(s=>s.id==='depreciation');
 const rows=section.blocks.find(b=>b.kind==='table').rows,fig=section.blocks.find(b=>b.kind==='figure');
 const number=s=>Number(s.replace(/\./g,'').replace(',','.').replace('−','-'));
 let book=120,basis=120,dtl=0,totalCash=0,totalExpense=0;
 for(let t=0;t<3;t++){
  const bookDep=40,taxDep=[60,40,20][t],pbt=100-bookDep,taxable=100-taxDep,cash=taxable*.25;
  book-=bookDep;basis-=taxDep;
  const closing=(book-basis)*.25,delta=closing-dtl,expense=cash+delta;
  const values=[bookDep,taxDep,pbt,taxable,cash,book,basis,closing,delta,expense,pbt-expense];
  values.forEach((v,i)=>assert.equal(number(rows[i][t+1]),v,rows[i][0]+' year '+(t+1)));
  assert.deepEqual(fig.plot.series.map(s=>s.points[t]),[[t+1,cash],[t+1,expense]]);
  totalCash+=cash;totalExpense+=expense;dtl=closing;
 }
 assert.equal(book,0);assert.equal(basis,0);assert.equal(dtl,0);assert.equal(totalCash,totalExpense);assert.equal(totalExpense,45);
 let warranty=0,dta=0,warrantyCashTax=0,warrantyExpense=0;
 for(const [pbt,accrual,payment] of [[100,12,0],[100,0,12]]){
  warranty+=accrual-payment;
  const current=(pbt+accrual-payment)*.25,newDta=warranty*.25;
  const expense=current-(newDta-dta);assert.equal(expense,25);
  warrantyCashTax+=current;warrantyExpense+=expense;dta=newDta;
 }
 assert.equal(dta,0);assert.equal(warrantyCashTax,warrantyExpense);
 const pbt=200,exempt=20,fine=10,extraTaxDep=30,taxable=pbt-exempt+fine-extraTaxDep,current=taxable*.25,expense=current+extraTaxDep*.25,cash=current+8-12;
 const recon=u.sections.find(s=>s.id==='reconciliation').blocks.find(b=>b.kind==='table').rows;
 [taxable,current,7.5,expense,cash,expense/pbt*100,cash/pbt*100].forEach((v,i)=>assert.equal(number(recon[i][2].replace(' %','')),v));
 assert.equal(40-40*.3,28,'OCI revaluation after its associated deferred tax');
 assert.equal(150-(150-0)*.3,105,'acquisition asset contributes its after-tax identifiable amount');
 assert.equal(65+(35-20-6)-((40-6)-(30-10)),60,'P&L bridge excludes OCI and uses net DTA changes');
 for(const [id,kind] of [['tax-04','liability'],['tax-05','asset']]){
  const q=data.questions.find(q=>q.id===id);assert.match(q.options[q.correct].text,new RegExp(kind+'$'));
 }
});

test('inventory, long-term assets and income taxes cover all ten objectives and preserve figure bounds',()=>{
 const ids=['inventory','long-assets','income-taxes'],selected=data.coverage.filter(c=>ids.includes(c.id));
 assert.equal(selected.reduce((n,c)=>n+c.objectives.length,0),10);
 for(const c of selected)for(const o of c.objectives){assert.ok(o.sections.length,c.id);assert.ok(o.practice.length>=3,o.id);}
 assert.equal(data.questions.filter(q=>ids.includes(q.unit)&&q.pool==='practice').length,76);
 for(const pool of ['mock-a','mock-b']){
  assert.equal(data.questions.filter(q=>ids.includes(q.unit)&&q.pool===pool).length,6);
  assert.ok(data.questions.filter(q=>q.topic==='statements'&&q.pool===pool).length<=22);
 }
 for(const u of data.units.filter(u=>ids.includes(u.id)))for(const f of u.sections.flatMap(s=>s.blocks).filter(b=>b.kind==='figure')){
  for(const series of f.plot.series)for(const [x,y] of series.points){
   assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1],f.id);assert.ok(y>=f.plot.y[0]&&y<=f.plot.y[1],f.id);
  }
 }
});
test('reporting-quality cases preserve cost-flow identities, lifetime expense and cash totals',()=>{
 const u=data.units.find(u=>u.id==='reporting-quality'),fig=u.sections.find(s=>s.id==='production').blocks.find(b=>b.kind==='figure');
 for(const [index,series] of fig.plot.series.entries())for(const [produced,y] of series.points){
  const inventoryUnits=produced-100,costPaid=produced*10+1000,inventory=inventoryUnits*costPaid/produced,cogs=costPaid-inventory;
  const profit=3000-cogs,cash=3000-costPaid;
  assert.ok(Math.abs(y-[profit,cash][index])<1e-9);
  assert.ok(Math.abs(profit-cash-inventory)<1e-9);
  assert.ok(y>=fig.plot.y[0]&&y<=fig.plot.y[1]);
 }
 assert.equal(100-.08*2000,-60);
 assert.equal(100-25+15,100-10,'unsupported reserve shifts expense instead of changing lifetime profit');
 assert.equal(120+60,90+90);
 const reported=60,management=reported+(16+12+20)*.75,balanced=reported+(16+20-24)*.75;
 assert.equal(management,96);assert.equal(balanced,69);assert.equal(management-balanced,(12+24)*.75);
 const receipts=[1000+80-100,1200+100-240];assert.deepEqual(receipts,[980,1060]);
 assert.ok(Math.abs((receipts[1]/receipts[0]-1)*100-8.16326530612245)<1e-12);
 assert.equal(48-120+72,0,'premature uncollected sale and inventory expense do not create cash');
 const expenses={correct:[60,0,0],wrong:[20,20,20]};
 assert.equal(expenses.correct.reduce((a,b)=>a+b),expenses.wrong.reduce((a,b)=>a+b));
 assert.equal(60-20,40);assert.equal(40+20,60,'income plus depreciation explains the full CFO classification error');
 assert.equal(35-20+10,25);assert.equal(15-20+10,5);
 const correctedProfit=180-(120-72)-(60-20)-20,recurring=correctedProfit-40;
 assert.equal(correctedProfit,72);assert.equal(recurring,32);assert.equal(correctedProfit*.75,54);assert.equal(recurring*.75,24);
 const statutory=78-20*.7-10*.75,analytical=statutory+20*.7-30*.8;
 assert.equal(statutory,56.5);assert.equal(analytical,46.5);
 const reportedCash=[150,-90,20],correctedCash=[120,-60,20],normalized=120-20;
 assert.equal(reportedCash.reduce((a,b)=>a+b),correctedCash.reduce((a,b)=>a+b));assert.equal(normalized,100);
 const answer=id=>{const q=data.questions.find(q=>q.id===id);return q.options[q.correct].text;};
 assert.match(answer('rq-22'),/36 million and €48 million/);
 assert.match(answer('rq-24'),/300 higher profit and €500 lower CFO/);
 assert.match(answer('rq-b1'),/120 million and €100 million/);
 const coverage=data.coverage.find(c=>c.id==='reporting-quality');
 assert.equal(coverage.objectives.length,8);
 for(const o of coverage.objectives){assert.ok(o.sections.length);assert.ok(o.practice.length>=3,o.id);}
 for(const pool of ['mock-a','mock-b'])assert.equal(data.questions.filter(q=>q.unit==='reporting-quality'&&q.pool===pool).length,1);
});

test('unwritten modules remain visible as gaps and cannot pass the release gate',()=>{
 if(!data.release&&data.units.length<data.modules.length)assert.throws(()=>compile({release:true}),/Fragen|Lernziele|Prüfung/);
 const eps=data.coverage.find(m=>m.id==='income-statement');
 assert.ok(eps.objectives.every(o=>o.sections.length&&o.practice.length));
});
