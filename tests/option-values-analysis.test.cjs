const {test}=require('node:test'),assert=require('node:assert/strict'),M=require('../finance-models.cjs'),d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(u=>u.id==='option-values');
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),bank=d.questions.filter(q=>q.unit===u.id),near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b);
// Independent normal probability: numerical integration of the Gaussian density.
// No production CDF coefficients, helper or option formula are called.
function probability(z){if(z>=9)return 1;if(z<=-9)return 0;const a=Math.abs(z),n=320,h=a/n,f=x=>Math.exp(-x*x/2)/Math.sqrt(2*Math.PI);let sum=f(0)+f(a);for(let i=1;i<n;i++)sum+=(i%2?4:2)*f(i*h);const p=.5+h*sum/3;return z<0?1-p:p;}
function reference(s,k,r,q,v,t){
 const A=s*Math.exp(-q*t),B=k*Math.exp(-r*t),ic=Math.max(s-k,0),ip=Math.max(k-s,0);
 if(t===0)return {call:ic,put:ip,ic,ip,A,B};
 if(v===0)return {call:Math.max(A-B,0),put:Math.max(B-A,0),ic,ip,A,B};
 // Direct discounted integration of both terminal payoff regions.
 const z=(Math.log(k/s)-(r-q-v*v/2)*t)/(v*Math.sqrt(t)),ps=probability(-z+v*Math.sqrt(t)),pk=probability(-z);
 return {call:A*ps-B*pk,put:B*(1-pk)-A*(1-ps),ic,ip,A,B};
}
test('all three actual 2027 option outcomes have deep linked explanations, 20 original practice questions each and reserved transfers',()=>{
 assert.equal(u.sections.length,37);assert.ok(blocks.map(b=>typeof b==='string'?b:b.reading||'').join(' ').length>=25000);
 for(const[k,n]of [['formula',40],['example',22],['figure',7],['table',12],['disclosure',14]])assert.equal(blocks.filter(b=>b.kind===k).length,n,k);
 assert.equal(bank.length,62);assert.equal(bank.filter(q=>q.pool==='practice').length,60);for(const p of ['mock-a','mock-b'])assert.equal(bank.filter(q=>q.pool===p).length,1);
 for(const o of d.coverage.find(c=>c.id===u.id).objectives){assert.ok(o.practice.length>=20);assert.ok(o.mockQuestions>=1);assert.ok(o.sections.length>=15);}
 assert.equal(new Set(bank.map(q=>q.stem)).size,62);for(const q of bank){assert.ok(q.options.every(o=>o.why.length>12),q.id);assert.ok(u.sections.some(s=>s.id===q.section));}
 assert.equal(u.review.status,'checked');assert.equal(d.release,false);assert.ok(u.sources[0].url.endsWith('2027levelitopicoutline_online.pdf#page=24'));
 assert.ok(require('../finance-content/derivatives.cjs')[5].additionalLabs.includes('optionvalue'));for(const id of ['carry','derivative-contracts'])assert.ok(d.units.find(u=>u.id===id).related.some(l=>l.unit==='option-values'));
});
test('729 six-factor cases independently verify every metric, both ledgers, 294516 curve coordinates and discounted bounds',t=>{
 let cases=0,points=0,maxError=0;for(const s of [10,100,250])for(const k of [10,100,250])for(const r of [-5,5,15])for(const q of [0,5,15])for(const v of [0,20,80])for(const time of [0,1,5]){
  const p={s,k,r,q,v,t:time},out=M.calculate('optionvalue',p),ref=reference(s,k,r/100,q/100,v/100,time),expected=[ref.call,ref.put,ref.ic,ref.ip,ref.call-ref.ic,ref.put-ref.ip],A=ref.A,B=ref.B;
  for(const[i,x]of expected.entries()){maxError=Math.max(maxError,Math.abs(out.metrics[i][1]-x));near(out.metrics[i][1],x,.00008);}
  for(const[i,key]of ['call','put'].entries()){const row=out.projection.rows[i],I=i?ref.ip:ref.ic,low=Math.max(i?B-A:A-B,0),up=i?B:A;for(const[j,x]of [ref[key],I,ref[key]-I,low,up].entries())near(row[j+1],x,.00008);assert.ok(row[1]>=low-1e-10&&row[1]<=up+1e-10);}
  for(const[i,x]of [A,B,A-B].entries())near(out.stable.rows[i][1],x);
  near(out.metrics[0][1]-out.metrics[1][1],A-B);near(out.marker[0],s);near(out.marker[1],out.metrics[0][1]);
  for(const[i,curve]of out.series.entries())for(const[x,y]of curve.points){const a=reference(x,k,r/100,q/100,v/100,time),expected=[a.call,a.ic,a.put,a.ip][i];maxError=Math.max(maxError,Math.abs(y-expected));near(y,expected,.00008);assert.ok(y>=out.yRange[0]-1e-10&&y<=out.yRange[1]+1e-10);points++;}
  cases++;
 }assert.equal(cases,729);assert.equal(points,294516);t.diagnostic(JSON.stringify({cases,curveCoordinates:points,maxAbsoluteGaussianReferenceError:maxError}));
});
test('eleven valid native presets isolate six factors and preserve negative time value, zero-volatility and exact-expiry limits',()=>{
 const presets=M.models.optionvalue.presets,run=p=>M.calculate('optionvalue',p).metrics.map(x=>x[1]),base=run(presets[0].values);assert.equal(presets.length,11);
 for(const preset of presets)for(const c of M.models.optionvalue.controls){const x=preset.values[c.key];assert.ok(x>=c.min&&x<=c.max);near((x-c.min)/c.step,Math.round((x-c.min)/c.step));}
 for(const[i,key]of [[1,'s'],[2,'k'],[3,'v'],[4,'t'],[5,'q'],[6,'r'],[9,'t'],[10,'v']])assert.deepEqual(Object.keys(presets[i].values).filter(k=>presets[i].values[k]!==presets[0].values[k]),[key]);
 const spot=run(presets[1].values),strike=run(presets[2].values),vol=run(presets[3].values),time=run(presets[4].values),income=run(presets[5].values),rate=run(presets[6].values);
 for(const a of [spot,rate]){assert.ok(a[0]>base[0]);assert.ok(a[1]<base[1]);}
 for(const a of [strike,income]){assert.ok(a[0]<base[0]);assert.ok(a[1]>base[1]);}
 for(const a of [vol,time])for(const i of [0,1])assert.ok(a[i]>base[i]);
 assert.ok(run(presets[7].values)[5]<0);assert.ok(run(presets[8].values)[4]<0);
 assert.deepEqual(run(presets[9].values),[0,0,0,0,0,0]);near(run(presets[10].values)[0],100-100*Math.exp(-.05));assert.equal(run(presets[10].values)[1],0);
 for(const s of [10,100,250])for(const k of [10,100,250])for(const v of [0,20,80]){const out=run({...presets[0].values,s,k,v,t:0});near(out[0],Math.max(s-k,0));near(out[1],Math.max(k-s,0));near(out[4],0);near(out[5],0);}
 for(const c of M.models.optionvalue.controls)for(const value of ['',NaN,Infinity,c.min-1,c.max+1])assert.throws(()=>M.calculate('optionvalue',{...presets[0].values,[c.key]:value}));
});
test('all 896 textbook graph points agree with independent payoff, Gaussian, financing and income references',t=>{
 const base=(s=100,k=100,r=.05,q=0,v=.2,time=1)=>reference(s,k,r,q,v,time),refs={
  exercise:(i,x)=>i?Math.max(100-x,0):Math.max(x-100,0),
  replication:(i,x)=>i?.6*x-48:Math.max(x-100,0),
  'value-intrinsic':(i,x)=>{const a=base(x);return[a.call,a.ic,a.put,a.ip][i];},
  volatility:(i,x)=>base(100,100,.05,0,x/100)[i?'put':'call'],
  maturity:(i,x)=>i?base(20,100,.05,0,0,x).put-80:base(100,100,.05,0,.2,x).call,
  rates:(i,x)=>base(100,100,x/100)[i?'put':'call']-base(100,100,0)[i?'put':'call'],
  dividends:(i,x)=>base(100,100,.05,x/100)[i?'put':'call']
 };let n=0;for(const g of blocks.filter(b=>b.kind==='figure')){const key=Object.keys(refs).find(k=>g.id.endsWith('-'+k));assert.ok(key,g.id);for(const[i,s]of g.plot.series.entries())for(const[x,y]of s.points){near(y,refs[key](i,x),.00008);assert.ok(x>=g.plot.x[0]&&x<=g.plot.x[1]&&y>=g.plot.y[0]&&y<=g.plot.y[1],g.id+' range');n++;}}
 assert.equal(n,896);t.diagnostic(JSON.stringify({bookCoordinates:n}));
});
test('all 26 numerical question choices including both real reserved transfers match independent cash references',()=>{
 const refs={'01':12,'02':20,'04':5,'05':-2,'07':-150,'08':12-10*1.05,'16':3,'17':3,'22':.6,'23':100/7,'24':200/21,'26':100-100/1.05,'27':100/1.05-80,'28':100/1.05,'29':100/.95,'30':100-2-100/1.05,'31':100/1.05-90,'34':12,'35':10,'37':5,'50':100-100*Math.exp(-.05),'52':37.524*.01,'53':-7.3/365,'54':100*(Math.exp(-.1)-Math.exp(-.025)),'exam-a':40*(18-23),'exam-b':(2/3)*100-60/1.02};
 assert.equal(Object.keys(refs).length,26);for(const[id,x]of Object.entries(refs)){const q=bank.find(q=>q.id==='opv-'+id),s=q.options[q.correct].text.replace(/\.$/,''),dec=s.split('.')[1]?.length||0;near(Number(s),x,.5001*10**-dec+1e-8);}
});
test('worked replication, both arbitrages, negative rates and financing are consistent in every terminal region',()=>{
 const delta=(30-0)/(130-80),debt=delta*80,call=delta*100-debt/1.05;for(const s of [80,130])near(delta*s-debt,Math.max(s-100,0));near(call,100/7);
 const pu=(100*1.05-80)/(130-80);near(pu,.5);near(30*pu/1.05,call);
 for(const s of [0,20,80,100,120,1000]){const callArb=Math.max(s-100,0)-s+100;assert.ok(callArb>=0);const putArb=s+Math.max(100-s,0)-100;assert.ok(putArb>=0);}
 near(100-2-100/1.05,58/21);near(100/1.05-90,110/21);near((150-110)/(150-90),2/3);near((102-90)/60,.2);
 const R=1.02,rep=(2/3)*100-60/R;near(.2*40/R,rep);assert.ok(.75*40/R>rep);
 const pShort=reference(20,100,.05,0,0,.5).put,pLong=reference(20,100,.05,0,0,2).put;assert.ok(pLong<pShort);
 near(reference(180,100,-.05,0,0,1).call,180-100*Math.exp(.05));assert.ok(100/.95>100);near(12-10*1.05,1.5);
});
test('local delta, Vega units and joint spot-volatility counterexample match independent Gaussian prices',()=>{
 const e=M.europeanOption,s=100,k=100,r=.05,q=0,v=.2,time=1,h=.001,delta=(e(s+h,k,r,q,v,time).call-e(s-h,k,r,q,v,time).call)/(2*h),expected=probability(.35);
 near(delta,expected,.00002);assert.ok(Math.abs(delta-probability(.15))>.07);
 const vh=.00001,vega=(e(s,k,r,q,v+vh,time).call-e(s,k,r,q,v-vh,time).call)/(2*vh),analytic=100*Math.exp(-.35*.35/2)/Math.sqrt(2*Math.PI);
 near(vega,analytic,.001);near(vega*.01,analytic/100,.00001);
 assert.ok(reference(105,100,.05,0,.15,1).call<reference(100,100,.05,0,.4,1).call);
});
test('all twelve published factor-comparison table rows agree with independent Gaussian values at their displayed precision',()=>{
 const specs={
  spot:[[100,100,.05,0,.2,1],[120,100,.05,0,.2,1]],
  strike:[[100,100,.05,0,.2,1],[100,120,.05,0,.2,1]],
  volatility:[[100,100,.05,0,.2,1],[100,100,.05,0,.4,1]],
  rates:[[100,100,.05,0,.2,1],[100,100,.1,0,.2,1]],
  dividends:[[100,100,.05,0,.2,1],[100,100,.05,.05,.2,1]],
  joint:[[100,100,.05,0,.4,1],[105,100,.05,0,.15,1]]
 },de=s=>Number(String(s).replaceAll('.','').replace(',','.'));let rows=0;
 for(const[section,params]of Object.entries(specs)){const table=flat(u.sections.find(s=>s.id===section).blocks).find(b=>b.kind==='table');assert.equal(table.rows.length,2);
  for(const[i,p]of params.entries()){const ref=reference(...p),row=table.rows[i],offset=section==='joint'?3:1;near(de(row[offset]),ref.call,.0001);if(section!=='joint')near(de(row[2]),ref.put,.0001);if(section==='rates')near(de(row[3]),ref.B,.0001);if(section==='dividends')near(de(row[3]),ref.A,.0001);if(section==='spot')near(de(row[3]),ref.ic);rows++;}
 }assert.equal(rows,12);
});
test('twenty precise option definitions link back while broad contract, money-time and prepaid contexts stay intact',()=>{
 const g=require('../finance-glossary.cjs'),entries=require('../finance-cfa/glossary.cjs').filter(e=>e.cfa.unit===u.id);assert.equal(entries.length,20);assert.equal(new Set(g.map(e=>e.term)).size,g.length);
 for(const e of entries){assert.ok(g.some(x=>x.term===e.term));assert.ok(u.sections.some(s=>s.id===e.cfa.section));}
 for(const term of ['Delta','Vega','Theta','Implizite Volatilität','Delta-Hedge','Volatilitätsstruktur'])assert.equal(g.find(e=>e.term===term).cfa.unit,u.id);
 for(const term of ['Moneyness','Ausübungswert','Strike','Call-Option','Put-Option'])assert.equal(g.find(e=>e.term===term).cfa.unit,'derivative-contracts');
 assert.equal(g.find(e=>e.term==='Prepaid Forward Price').cfa.unit,'carry');assert.ok(!g.find(e=>e.term==='Zeitwert des Geldes').cfa);
});
