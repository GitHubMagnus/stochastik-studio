const {test}=require('node:test'),assert=require('node:assert/strict');
const d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(u=>u.id==='equity-factors');
const sec=id=>u.sections.find(s=>s.id===id),near=(a,b,t=1e-9)=>assert.ok(Math.abs(a-b)<t,a+' vs '+b);
const number=s=>Number(String(s).replaceAll('.','').replace(',','.').replace('−','-').replace(/[^0-9.-]/g,''));
const mean=a=>a.reduce((s,x)=>s+x,0)/a.length;
const fit=(x,y)=>{const mx=mean(x),my=mean(y),xx=x.reduce((s,v)=>s+(v-mx)**2,0),xy=x.reduce((s,v,i)=>s+(v-mx)*(y[i]-my),0),b=xy/xx,a=my-b*mx,e=y.map((v,i)=>v-a-b*x[i]),sse=e.reduce((s,v)=>s+v*v,0),sst=y.reduce((s,v)=>s+(v-my)**2,0);return {a,b,e,sse,sst,xx,r2:1-sse/sst,se:Math.sqrt(sse/(x.length-2))};};
test('factor unit covers the two actual 2027 outcomes and completes only the equity mock allocation',()=>{
 assert.equal(u.sections.length,33);assert.equal(u.review.status,'checked');assert.equal(d.release,false);
 const qs=d.questions.filter(q=>q.unit===u.id);assert.equal(qs.filter(q=>q.pool==='practice').length,44);
 for(const pool of ['mock-a','mock-b']){assert.equal(qs.filter(q=>q.pool===pool).length,1);assert.equal(d.inventory[pool].equity,require('../finance-cfa/engine.cjs').blueprint.equity);}
 const c=d.coverage.find(c=>c.id===u.id);assert.deepEqual(c.objectives.map(o=>o.id),['equity-factors-a','equity-factors-b']);
 for(const o of c.objectives)assert.ok(o.sections.length>=15&&o.practice.length>=15&&o.mockQuestions);
 assert.match(u.sources[0].url,/2027levelitopicoutline_online\.pdf#page=17$/);
 assert.deepEqual(u.explorations,[{section:'capm',lesson:'equity-06',focus:'lab',label:'Risikofreien Satz, erwartete Marktprämie und Beta getrennt verändern'}]);
});
test('Linden inputs independently reconstruct fitted returns, residual orthogonality, alpha, R squared and standard errors',()=>{
 const rows=sec('observations').blocks.find(b=>b.kind==='table').rows,x=rows.map(r=>number(r[1])),y=rows.map(r=>number(r[2])),f=fit(x,y);
 assert.deepEqual(x,[-4,-2,0,2,4,6]);assert.deepEqual(y,[-3.5,-4,1.5,4,3.5,9]);
 near(f.a,.5);near(f.b,1.25);near(f.sse,12);near(f.sst,121.375);near(f.r2,.9011328527291452);near(f.se,Math.sqrt(3));
 near(f.e.reduce((s,e)=>s+e,0),0);near(f.e.reduce((s,e,i)=>s+e*x[i],0),0);near(f.se/Math.sqrt(f.xx),.20701966780270625);
 const table=sec('ols').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table');
 table.rows.forEach((r,i)=>{near(number(r[1]),f.a+f.b*x[i]);near(number(r[2]),f.e[i]);});
 const raw=fit(x.map(v=>v+.25),y.map(v=>v+.25));near(raw.b,f.b);near(raw.a,.4375);
 const varying=[.1,.2,.4,.5,.2,.6],variableRaw=fit(x.map((v,i)=>v+varying[i]),y.map((v,i)=>v+varying[i]));
 assert.ok(Math.abs(variableRaw.b-f.b)>.001,'varying risk-free observations need not preserve the slope');
});
test('claim-weighted systematic risk and expected cash returns reconcile even with risky debt',()=>{
 for(const debtBeta of [0,.2]){const assetBeta=.8,equityBeta=2*assetBeta-debtBeta;
  near(.5*equityBeta+.5*debtBeta,assetBeta);
  const equityPay=1+.03+equityBeta*.05,debtPay=1+.03+debtBeta*.05;
  near(.5*equityPay+.5*debtPay,1+.03+assetBeta*.05);
 }
 near(4/(.03+1.25*.05-.03),64);
 assert.notEqual(.5,1.75-1,'raw market outperformance is not excess-return alpha');
});
test('all 237 factor-chart points match independent portfolio covariance and explicit dividend valuations',()=>{
 const figures=u.sections.flatMap(s=>s.blocks.filter(b=>b.kind==='figure'));assert.equal(figures.length,4);let count=0;
 for(const f of figures)for(const [index,s]of f.plot.series.entries())for(const[x,y]of s.points){
  count++;assert.ok(x>=f.plot.x[0]-1e-12&&x<=f.plot.x[1]+1e-12);assert.ok(y>=f.plot.y[0]-1e-12&&y<=f.plot.y[1]+1e-12);
  if(f.id.endsWith('-sml'))near(y,100*((1-x)*.03+x*.08));
  else if(f.id.endsWith('-diversification')){
   if(index===2){near(y,24);continue;}const rest=index===0?.12:.24,n=x,w=1/n;let variance=0;
   for(let i=0;i<n;i++)for(let j=0;j<n;j++)variance+=w*w*(.24**2+(i===j?rest**2:0));
   near(y,100*Math.sqrt(variance),1e-8);
  }else if(f.id.endsWith('-value-beta')){
   const rate=(1-x)*.03+x*.08;let price=0;for(let t=1;t<=2000;t++)price+=4*1.03**(t-1)/(1+rate)**t;near(y,price,1e-8);
  }else if(f.id.endsWith('-value-exposure'))near(y,index?8.5:3+1.1*5+.3*2+x*3);
  else assert.fail(f.id);
 }
 assert.equal(count,237);
});
test('factor-return and factor-surprise conventions produce identical realized cash outcomes without double counting',()=>{
 const rf=.03,b=[1.1,.3,.5],premia=[.05,.02,.03],actual=[-.06,.02,-.01],rest=.004;
 const expected=rf+b.reduce((s,v,i)=>s+v*premia[i],0);
 const realized=rf+b.reduce((s,v,i)=>s+v*actual[i],0)+rest;
 const fromSurprises=expected+b.reduce((s,v,i)=>s+v*(actual[i]-premia[i]),0)+rest;
 near(expected,.106);near(realized,-.031);near(fromSurprises,realized);
 near(.03+1.1*.05-.2*.02-.4*.03,.069);
 const weightedB=b.map((v,i)=>.6*v+.4*[1.1,-.2,-.4][i]);assert.deepEqual(weightedB.map(v=>Number(v.toFixed(10))),[1.1,.1,.14]);
 near(.03+weightedB.reduce((s,v,i)=>s+v*premia[i],0),.0912);
});
test('enumerated correlated-factor shocks independently recover variance including every covariance term',()=>{
 const outcomes=[];
 for(const z1 of [-1,1])for(const z2 of [-1,1])for(const z3 of [-1,1]){
  const f1=.2*z1,f2=.1*(.3*z1+Math.sqrt(1-.3**2)*z2),rest=.12*z3;
  outcomes.push(1.1*f1+.5*f2+rest);
 }
 near(mean(outcomes),0);near(mean(outcomes.map(x=>x*x)),.0719);
 assert.ok(Math.abs(mean(outcomes.map(x=>x*x))-.0653)>.0065,'omitting correlated factors understates this case');
 near(100*Math.sqrt(.0719),26.814175355583846);
});
test('exact APT teaching replication hedges all stipulated shocks, while unmatched residuals can reverse the gain',()=>{
 for(const f1 of [-.2,-.1,0,.1,.2])for(const f2 of [-.2,-.1,0,.1,.2]){
  const a=.09+f1+.5*f2,b=.08+.4*f1+1.5*f2,rep=2/3*a+1/3*b,d=.092+.8*f1+5/6*f2;
  near(d-rep,.092-(2/3*.09+1/3*.08));
  assert.ok(d-.02-rep<0,'an unmatched adverse residual destroys the state-independent gain');
 }
 near(10000*(.092-(2/3*.09+1/3*.08)),53.333333333333286);
 const q=d.questions.find(q=>q.id==='fa-35');assert.equal(q.options[q.correct].text,'0.8 and 5/6.');
});
test('factor definitions add precise return links while preserving existing alpha, beta, CML and classification meanings',()=>{
 const g=require('../finance-glossary.cjs'),find=label=>g.find(g=>[g.term,...g.aliases].includes(label));
 for(const[label,target]of [['CAPM','capm'],['APT','apt'],['SML','sml'],['Faktor','factor-logic'],['Exposure','portfolio'],['Market Model','market-model'],['Systematic Risk','co-risk'],['Idiosyncratic Risk','diversification'],['ERP','premium'],['Factor Premium','factor-conventions'],['Factor Surprise','factor-conventions'],['Raw-Return Intercept','excess'],['Market Proxy','estimation'],['Factor Neutrality','portfolio'],['Market Neutrality','portfolio'],['Factor Portfolio','factor-types'],['SMB','fama-french'],['HML','fama-french'],['RMW','fama-french'],['CMA','fama-french'],['Multi-Factor Model','factor-logic'],['Factor Attribution','model-alpha'],['Estimation Window','estimation']])assert.deepEqual(find(label).cfa,{unit:u.id,section:target});
 assert.deepEqual(find('Beta').cfa,{unit:'regression',section:'capm'});assert.deepEqual(find('Alpha').cfa,{unit:'regression',section:'capm'});
 assert.deepEqual(find('CML').cfa,{unit:'portfolio-math',section:'market'});assert.deepEqual(find('Sensitivität').cfa,{unit:'data-science',section:'classification'});
 for(const id of ['regression','portfolio-math','capital-structure','research','dcf-equity'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit===u.id));
});
