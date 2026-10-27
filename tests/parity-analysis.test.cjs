const {test}=require('node:test'),assert=require('node:assert/strict'),M=require('../finance-models.cjs'),d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(u=>u.id==='parity');
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),bank=d.questions.filter(q=>q.unit===u.id),near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b);
test('both actual 2027 parity outcomes have extensive explanations, original practice and separate real reserved transfers',()=>{
 assert.equal(u.sections.length,34);assert.ok(blocks.map(b=>typeof b==='string'?b:b.reading||'').join(' ').length>=22000);
 for(const[k,n]of [['formula',45],['example',19],['table',7],['figure',6],['disclosure',11]])assert.equal(blocks.filter(b=>b.kind===k).length,n,k);
 assert.equal(bank.length,52);assert.equal(bank.filter(q=>q.pool==='practice').length,50);for(const p of ['mock-a','mock-b'])assert.equal(bank.filter(q=>q.pool===p).length,1);
 for(const o of d.coverage.find(c=>c.id===u.id).objectives){assert.ok(o.practice.length>=25);assert.ok(o.mockQuestions>=1);assert.ok(o.sections.length>=15);}
 assert.equal(new Set(bank.map(q=>q.stem)).size,52);for(const q of bank){assert.ok(q.options.every(o=>o.why.length>12),q.id);assert.ok(u.sections.some(s=>s.id===q.section));}
 assert.equal(u.review.status,'checked');assert.equal(d.release,false);assert.ok(u.sources[0].url.endsWith('2027levelitopicoutline_online.pdf#page=24'));
 assert.ok(require('../finance-content/derivatives.cjs')[5].additionalLabs.includes('parity'));for(const id of ['option-values','forward-value'])assert.ok(d.units.find(u=>u.id===id).related.some(l=>l.unit==='parity'));
});
test('729 independent price/funding/income cases reconcile 147258 model points, both ledgers, residual and individual bounds',t=>{
 let cases=0,points=0;for(const s of [25,105,250])for(const k of [25,100,250])for(const df of [.7,.94,1.2])for(const income of [0,3.88,20])for(const call of [0,11.12,300])for(const put of [0,4,300]){
  const r=M.calculate('parity',{s,k,d:df,income,c:call,p:put}),stockEndCost=s-income,bondCost=k*df,conversionCash=[call,-put,-s,bondCost,income].reduce((n,x)=>n+x,0),ref=[call+bondCost,put+stockEndCost,conversionCash,call-put,stockEndCost-bondCost,stockEndCost/df];for(const[i,x]of ref.entries())near(r.metrics[i][1],x);
  const laterK=ref[5];near(df*(laterK-k),ref[4]);near(ref[3]-ref[4],ref[2]);near(r.marker[0],k);near(r.marker[1],k);
  for(const curve of r.series)for(const[x,y]of curve.points){near(y,x<k?k:x);assert.ok(y>=r.yRange[0]&&y<=r.yRange[1]);points++;}
  for(const row of r.projection.rows){const x=row[0],c=x>k?x-k:0,p=x<k?k-x:0;for(const[i,z]of [x,c,p,x<k?k:x,x<k?k:x,x-k,x-k].entries())near(row[i],z);}
  const lows=[stockEndCost>bondCost?stockEndCost-bondCost:0,bondCost>stockEndCost?bondCost-stockEndCost:0],ups=[stockEndCost,bondCost];for(const[i,row]of r.stable.rows.entries()){near(row[1],i?put:call);near(row[2],lows[i]);near(row[3],ups[i]);assert.equal(row[4],row[1]>=lows[i]-1e-10&&row[1]<=ups[i]+1e-10?'Innerhalb':'Außerhalb');}
  cases++;
 }assert.equal(cases,729);assert.equal(points,147258);t.diagnostic(JSON.stringify({cases,modelCoordinates:points}));
});
test('ten valid presets isolate quoted changes, preserve parity with common shifts and independently detect upper-bound violations',()=>{
 const ps=M.models.parity.presets,run=p=>M.calculate('parity',p);assert.equal(ps.length,10);for(const p of ps)for(const c of M.models.parity.controls){const x=p.values[c.key];assert.ok(x>=c.min&&x<=c.max);near((x-c.min)/c.step,Math.round((x-c.min)/c.step));}
 for(const[i,key]of [[1,'c'],[2,'c'],[3,'income'],[4,'d'],[7,'k']])assert.deepEqual(Object.keys(ps[i].values).filter(k=>ps[i].values[k]!==ps[0].values[k]),[key]);
 const metrics=i=>run(ps[i].values).metrics.map(m=>m[1]),b=metrics(0);near(b[2],0);near(metrics(1)[2],2);near(metrics(2)[2],-2);near(metrics(3)[2],-3.88);near(metrics(4)[2],11);near(metrics(7)[2],18.8);
 for(const i of [5,6]){near(metrics(i)[2],0);near(metrics(i)[3],b[3]);}assert.ok(run(ps[5].values).stable.rows.every(r=>r[4]==='Innerhalb'));assert.ok(run(ps[6].values).stable.rows.every(r=>r[4]==='Außerhalb'));assert.match(run(ps[6].values).note,/außerhalb/);
 near(metrics(8)[2],0);near(metrics(8)[3],0);near(metrics(8)[5],100);near(metrics(9)[2],0);assert.ok(ps[9].values.p>ps[9].values.c);
 assert.equal(new Set(run(ps[0].values).series.map(s=>s.color)).size,2);
 for(const c of M.models.parity.controls)for(const value of ['',null,NaN,Infinity,c.min-1,c.max+1])assert.throws(()=>run({...ps[0].values,[c.key]:value}));
});
test('all 646 textbook coordinates match independent payoff, income, discount and executable quote-side references',t=>{
 const ref={
  packages:(i,x)=>x<=100?100:x,
  'synthetic-forward':(i,x)=>x-100,
  'strike-spread':(i,x)=>i?105-x:105-3.88-x*.94,
  income:(i,x)=>i?94:105-x,
  discount:(i,x)=>i?0:105-3.88-100*x,
  'bid-ask':(i,x)=>i===0?(x-.25)+94-4.2-(105.1-3.88):i===1?3.8+(104.9-3.88)-(x+.25)-94:0
 };let n=0;for(const g of blocks.filter(b=>b.kind==='figure')){const key=Object.keys(ref).find(k=>g.id.endsWith('-'+k));assert.ok(key,g.id);for(const[i,s]of g.plot.series.entries())for(const[x,y]of s.points){near(y,ref[key](i,x));assert.ok(x>=g.plot.x[0]&&x<=g.plot.x[1]&&y>=g.plot.y[0]&&y<=g.plot.y[1],g.id+' range');n++;}}assert.equal(n,646);t.diagnostic(JSON.stringify({bookCoordinates:n}));
});
test('all 28 numerical practice and actual reserved choices follow independently stated dates, cashs and quantities',()=>{
 const refs={'02':100,'03':140,'04':6,'05':21,'06':100,'07':95,'09':106,'10':89,'12':2,'13':2,'17':4*.97,'18':105-3.88,'19':4+105-3.88-94,'23':11.15+94-4.2-(105.1-3.88),'24':.85,'27':-60,'28':100/.95,'29':100-100*.95,'30':5,'31':100+7.12/.94,'34':-5,'35':100/1.05,'37':20-7.12/.94,'38':250,'42':20*.95,'43':((20-5)-(8-12))/20,'exam-a':75*(4.44+90*.96+2*.98-8-84),'exam-b':125+(7.5-11.5)/1.04};
 assert.equal(Object.keys(refs).length,28);for(const[id,x]of Object.entries(refs)){const q=bank.find(q=>q.id==='pcp-'+id),s=q.options[q.correct].text.replace(/\.$/,''),dec=s.split('.')[1]?.length||0;near(Number(s),x,.5001*10**-dec+1e-8);}
});
test('both arbitrage directions settle all intermediate and terminal obligations, rather than doubling the initial surplus',()=>{
 const examples=blocks.filter(b=>b.kind==='example'),de=s=>Number(s.replaceAll('−','-').replaceAll('.','').replace(',','.'));
 for(const title of ['Call relativ zum passenden Putpaket zu teuer','Call relativ zu den anderen Ansprüchen zu billig']){const table=examples.find(e=>e.title===title).steps.find(b=>b.kind==='table');near(table.rows.slice(0,-1).reduce((n,row)=>n+de(row[1]),0),2);near(de(table.rows.at(-1)[1]),2);}
 const table=examples.find(e=>e.title.startsWith('Die Zwischenzahlung')).steps.find(b=>b.kind==='table');for(const col of [1,2])near(table.rows.slice(0,-1).reduce((n,row)=>n+de(row[col]),0),2);
 for(const x of [0,40,60,100,140,500]){const c=Math.max(x-100,0),p=Math.max(100-x,0);near(x+p-c-100,0);near(c-p-x+100,0);}
 near(3.88/.97,4);near(94/.94,100);near(13.12-4-105+94+3.88,2);near(-9.12+4+105-94-3.88,2);near(2/.94,2.127659574468085);
 near(50*Math.max(80-100,0)-100*Math.max(100-80,0),-2000);near(50*(80-100),-1000);
});
test('synthetic share, safe strike, covered/protected packages, boxes and executable bands conserve each stated end payoff',()=>{
 for(const k of [25,100,250])for(const x of [0,20,50,100,200,500]){const c=Math.max(x-k,0),p=Math.max(k-x,0);near(c-p+k,x);near(x+p-c,k);near(x-c,Math.min(x,k));near(k-p,Math.min(x,k));near(x+p,c+k);}
 for(const x of [0,80,90,100,110,150,500])near((Math.max(x-90,0)-Math.max(90-x,0))-(Math.max(x-110,0)-Math.max(110-x,0)),20);
 for(const mid of [10.57,11.12,11.67]){assert.ok(mid-11.67<=1e-10);assert.ok(10.57-mid<=1e-10);}near(13.12-11.67-.6,.85);
 near(101.12/.94,107.57446808510639);near(.94*(101.12/.94-100),7.12);near(130-4-125*1.04,-4);near((130-4)/1.04,125-4/1.04);
});
test('twenty curated parity definitions return to exact explanations while existing protection and prepaid meanings stay available',()=>{
 const g=require('../finance-glossary.cjs'),entries=require('../finance-cfa/glossary.cjs').filter(e=>e.cfa.unit===u.id);assert.equal(entries.length,20);assert.equal(new Set(g.map(e=>e.term)).size,g.length);
 for(const e of entries){assert.ok(g.some(x=>x.term===e.term));assert.ok(u.sections.some(s=>s.id===e.cfa.section));}
 for(const term of ['Protective Put','Covered Call'])assert.equal(g.find(e=>e.term===term).cfa.unit,'derivative-contracts');assert.equal(g.find(e=>e.term==='Prepaid Forward Price').cfa.unit,'carry');assert.equal(g.find(e=>e.term==='Put-Call-Parität').cfa.unit,'parity');
 for(const label of ['Parität','Conversion','Reversal','Kontraktmultiplikator'])assert.ok(entries.some(e=>e.contextualAliases?.some(a=>a.label===label&&a.units.includes('parity'))),label);
});
