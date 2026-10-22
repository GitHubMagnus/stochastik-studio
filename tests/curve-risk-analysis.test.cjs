const {test}=require('node:test'),assert=require('node:assert/strict');
const {compile,compileBlock}=require('../finance-cfa/compile.cjs'),data=compile(),u=data.units.find(u=>u.id==='curve-risk'),M=require('../finance-models.cjs');
const near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b),rel=(a,b,t=3e-10)=>near(a,b,t*Math.max(1,Math.abs(b)));
const base=Object.fromEntries(M.models.keyrate.controls.map(c=>[c.key,c.value])),run=p=>M.calculate('keyrate',{...base,...p}),sec=id=>u.sections.find(s=>s.id===id),flat=bs=>bs.flatMap(b=>typeof b==='string'?[b]:[b,...(b.steps?flat(b.steps):[]),...(b.blocks?flat(b.blocks):[])]);
const blocks=u.sections.flatMap(s=>flat(s.blocks)),q=id=>data.questions.find(q=>q.id==='crv-'+id),answer=id=>q(id).options[q(id).correct].text,num=s=>Number(s.replaceAll(',','').match(/[−-]?\d+(?:\.\d+)?/)?.[0].replace('−','-'));
// Independent calibration: numerically solve the zero-price condition, rather than using the chapter's quadratic formula.
function tree(s,kind='straight'){
 const v=104/10500;let lo=-.4,hi=.5;for(let n=0;n<90;n++){const R=(lo+hi)/2,df=.5/(1+R-v)+.5/(1+R+v);if(df>1/(1+s))lo=R;else hi=R;}
 const R=(lo+hi)/2,rs=[R-v,R+v],cont=rs.map(r=>104/(1+r)),values=cont.map(x=>kind==='call'?Math.min(100,x):kind==='put'?Math.max(100,x):x),P=(4+.5*values[0]+.5*values[1])/(1+s);
 return{P,R,rs,cont,values,df2:(.5/(1+rs[0])+.5/(1+rs[1]))/(1+s)};
}
const measure=(kind,h=.0025)=>{const P=tree(.03,kind).P,pm=tree(.03-h,kind).P,pp=tree(.03+h,kind).P;return{P,pm,pp,D:(pm-pp)/(2*P*h),C:(pm+pp-2*P)/(P*h*h),down:(pm-P)/(P*h),up:(P-pp)/(P*h)};};
test('curve risk implements all four actual 2027 objectives, independent practice and separate reserved transfers, retaining existing calculators',()=>{
 assert.equal(u.sections.length,40);assert.equal(u.review.status,'draft');assert.equal(data.release,false);assert.ok(u.sources[0].url.endsWith('#page=21'));
 assert.equal(blocks.filter(b=>b.kind==='formula').length,36);assert.equal(blocks.filter(b=>b.kind==='example').length,8);assert.equal(blocks.filter(b=>b.kind==='table').length,8);assert.equal(blocks.filter(b=>b.kind==='disclosure').length,4);
 const qs=data.questions.filter(q=>q.unit===u.id);assert.equal(qs.filter(q=>q.pool==='practice').length,72);
 for(const pool of ['mock-a','mock-b']){assert.equal(qs.filter(q=>q.pool===pool).length,1);assert.ok(data.inventory[pool].bonds<=require('../finance-cfa/engine.cjs').blueprint.bonds);}
 for(const o of data.coverage.find(c=>c.id===u.id).objectives){assert.ok(o.sections.length>=15);assert.ok(o.practice.length>=18);assert.ok(o.mockQuestions>=1);}
 const b=require('../finance-content/bonds.cjs');assert.equal(b[7].lab,'bond');assert.deepEqual(b[7].additionalLabs,['bondconvex','keyrate']);assert.equal(b[5].lab,'yieldcurve');assert.equal(b[8].lab,'bondhorizon');assert.equal(Object.keys(M.models).length,48);
 for(const id of ['duration','convexity','yield-curves','fixed-yields','regression','bond-features'])assert.ok(data.units.find(u=>u.id===id).related.some(r=>r.unit==='curve-risk'));
 assert.equal(u.explorations[0].focus,'lab-keyrate');
});
test('optional depth compiles nested local equations and rejects malformed or empty disclosure content',()=>{
 const {D,F}=require('../finance-cfa/author.cjs'),valid=compileBlock(D('Derivation',[D('Inner',[F('P=1','Own illustrative value.',[['P','Defined local value.']])])]),'test-owner');assert.match(valid.blocks[0].blocks[0].mathml,/<math/);
 for(const bad of [D('', ['x']),D('Title',[]),D('Title',[F('P=1','',[])]),D('Title',[{kind:'fake'}])])assert.throws(()=>compileBlock(bad,'invalid-owner'));
 for(const b of blocks.filter(b=>b.kind==='formula'))assert.ok(b.symbols.every(s=>s.meaning&&s.mathml.includes('<math')));
});
test('328 independently matched portfolios and 80,032 plot values reconcile every native corner, fixed claims and node contributions',t=>{
 const scenarios=[];for(const y1 of [0,12])for(const y3 of [0,12])for(const y5 of [0,12])for(const d1 of [-100,100])for(const d3 of [-100,100])for(const d5 of [-100,100])for(const value of [1000,10000000])scenarios.push({y1,y3,y5,d1,d3,d5,value});
 let seed=202713;const rand=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/2**32;};for(let i=0;i<200;i++)scenarios.push({y1:12*rand(),y3:12*rand(),y5:12*rand(),d1:200*rand()-100,d3:200*rand()-100,d5:200*rand()-100,value:1000+9999000*rand()});
 let count=0;
 for(const p of scenarios){
  const ts=[1,3,5],ys=[p.y1,p.y3,p.y5].map(y=>y/100),ss=[p.d1,p.d3,p.d5].map(d=>d/10000),V=p.value,D=3/(1+ys[1]),Ds=1/(1+ys[0]),Dl=5/(1+ys[2]);let lo=0,hi=1;
  for(let i=0;i<80;i++){const w=(lo+hi)/2;if(w*Ds+(1-w)*Dl>D)lo=w;else hi=w;}const w=(lo+hi)/2,wb=[w,0,1-w],wu=[0,1,0],Fs=weights=>weights.map((a,i)=>a*V*(1+ys[i])**ts[i]),fb=Fs(wb),fu=Fs(wu);
  const value=(faces,shocks)=>faces.reduce((s,f,i)=>s+f/(1+ys[i]+shocks[i])**ts[i],0),K=weights=>weights.map((a,i)=>a*ts[i]/(1+ys[i])),cb=weights=>weights.reduce((s,a,i)=>s+a*ts[i]*(ts[i]+1)/(1+ys[i])**2,0),linear=keys=>-keys.reduce((s,k,i)=>s+k*ss[i],0);
  const out=run(p),r=out.keyrate,kb=K(wb),ku=K(wu);rel(r.earlyWeight,w);rel(r.parallelDuration,D);rel(kb.reduce((s,k)=>s+k,0),D);r.barKeys.forEach((k,i)=>rel(k,kb[i]));r.bulletKeys.forEach((k,i)=>rel(k,ku[i]));
  rel(r.barConvexity,cb(wb));rel(r.bulletConvexity,cb(wu));rel(r.barValue,value(fb,ss));rel(r.bulletValue,value(fu,ss));rel(r.barReturn,r.barValue/V-1);rel(r.bulletReturn,r.bulletValue/V-1);rel(r.barLinear,linear(kb));rel(r.bulletLinear,linear(ku));
  r.barFaces.forEach((f,i)=>rel(f,fb[i]));r.bulletFaces.forEach((f,i)=>rel(f,fu[i]));rel(out.projection.rows[0][5]+out.projection.rows[1][5],r.barValue);rel(out.projection.rows[2][5],r.bulletValue);
  for(const[i,line]of out.series.entries())for(const[x,y]of line.points){const expected=i<2?(value(i===0?fb:fu,ss.map(s=>s*x))/V-1)*100:x*linear(i===2?kb:ku)*100;rel(y,expected,2e-9);assert.ok(y>=out.yRange[0]&&y<=out.yRange[1]);count++;}
  out.stable.rows.slice(0,3).forEach((row,i)=>{rel(row[5],-V*kb[i]*ss[i]);rel(row[6],-V*ku[i]*ss[i]);});
  const h=.0001,finite=fb.map((_,i)=>(value(fb,ts.map((_,j)=>i===j?-h:0))-value(fb,ts.map((_,j)=>i===j?h:0)))/(2*V*h)),parallel=(value(fb,ts.map(()=>-h))-value(fb,ts.map(()=>h)))/(2*V*h);near(finite.reduce((s,k)=>s+k,0),parallel,3e-8);
 }
 assert.equal(scenarios.length,328);assert.equal(count,80032);t.diagnostic(JSON.stringify({scenarios:328,curveValues:count,all128Corners:true}));
});
test('the scenario calculator isolates parallel, wing and belly risk, preserves zero/scaling and provides six valid native presets',()=>{
 const a=run(),half=run({value:500000});assert.deepEqual(a.series,half.series);assert.deepEqual(a.metrics.slice(1,10),half.metrics.slice(1,10));rel(half.keyrate.barValue,a.keyrate.barValue/2);rel(half.keyrate.bulletValue,a.keyrate.bulletValue/2);
 const parallel=run({d1:50,d3:50,d5:50}).keyrate;near(parallel.barLinear,parallel.bulletLinear);assert.notEqual(parallel.barReturn,parallel.bulletReturn);
 assert.equal(a.keyrate.bulletReturn,0);assert.ok(a.keyrate.barReturn>0);assert.ok(run({d1:-50,d5:50}).keyrate.barReturn<0);
 const belly=run({d1:0,d3:100,d5:0}).keyrate;assert.equal(belly.barReturn,0);assert.ok(belly.bulletReturn<0);
 const zero=run({d1:0,d3:0,d5:0});for(const k of ['barReturn','bulletReturn','barLinear','bulletLinear'])assert.equal(Object.is(zero.keyrate[k],0),true,k);zero.series.forEach(s=>s.points.forEach(p=>assert.equal(Object.is(p[1],0),true)));
 near(a.keyrate.earlyWeight*1+a.keyrate.lateWeight*5,3.019230769230769);assert.notEqual(a.keyrate.earlyWeight,.5);near(run({y1:4,y3:4,y5:4}).keyrate.earlyWeight,.5);
 for(const preset of M.models.keyrate.presets)for(const c of M.models.keyrate.controls){const val=preset.values[c.key];assert.ok(val>=c.min&&val<=c.max);near((val-c.min)/c.step,Math.round((val-c.min)/c.step),1e-9);}
 assert.throws(()=>M.keyRatePlan({...base,value:0}));assert.throws(()=>M.keyRatePlan({...base,y1:-100}));assert.match(a.xLabel,/λ/);
});
test('the option tree reproduces each shocked benchmark curve and economically re-evaluates call and put decisions',()=>{
 for(const b of [.01,.015,.0275,.03,.0325,.04,.05]){const st=tree(b),ca=tree(b,'call'),pu=tree(b,'put');near(st.df2,1/(1+b)**2,1e-14);near(st.P,4/(1+b)+104/(1+b)**2,1e-12);assert.ok(ca.P<=st.P+1e-12);assert.ok(pu.P>=st.P-1e-12);}
 const a=measure('call'),st=measure('straight'),pu=measure('put');near(a.P,100.97087378640776);near(a.D,1.2008847894896915);near(a.C,-182.11902380591204,1e-7);near(st.P,101.91346969554154);near(pu.P,st.P,1e-12);assert.ok(a.C<0&&pu.C>0);
 near(a.C,(a.down-a.up)/.0025,1e-8);near((a.down+a.up)/2,a.D);assert.ok(tree(.0325,'call').values[1]<100);near(tree(.0275,'call').values[1],100);
 const steps=[.001,.0025,.005,.01].map(h=>measure('call',h));assert.ok(Math.abs(steps[0].C)>Math.abs(steps[3].C)*10);assert.ok(Math.abs(steps[0].D-steps[3].D)<.005);
 assert.ok(tree(.015,'call').P>a.P);assert.ok(-a.D*(-.015)+.5*a.C*.015**2<0);
});
test('all 1,037 plotted line values and all seven synthetic point markers have independent arithmetic and valid labelled axes',t=>{
 let count=0;const figs=blocks.filter(b=>b.kind==='figure');assert.equal(figs.length,6);const a=measure('call'),Ts=[1,3,5],value=(weights,shocks)=>weights.reduce((s,w,i)=>s+w*(1.04/(1.04+shocks[i]))**Ts[i],0)-1;
 for(const f of figs)for(const[i,line]of f.plot.series.entries())for(const[x,y]of line.points){let expected;
  if(f.id.endsWith('option-price'))expected=tree(x/100,['straight','call','put'][i]).P;
  else if(f.id.endsWith('effective-error'))expected=i===0?(tree(.03+x/10000,'call').P/a.P-1)*100:i===1?-a.D*x/10000*100:(-a.D*x/10000+.5*a.C*(x/10000)**2)*100;
  else if(f.id.endsWith('key-basis'))expected=i===0?Math.max(0,(3-x)/2):i===1?Math.max(0,1-Math.abs(x-3)/2):Math.max(0,(x-3)/2);
  else if(f.id.endsWith('key-twist'))expected=i===0?value([.5,0,.5],[.005*x,0,-.005*x])*100:i===1?0:(.005*x*2/1.04)*100;
  else if(f.id.endsWith('key-belly'))expected=i===0?value([0,1,0],[0,x/10000,0])*100:i===1?-3/1.04*x/10000*100:0;
  else if(f.id.endsWith('empirical-fit'))expected=(i===0?-.02:-.05)*x;
  else assert.fail(f.id);rel(y,expected,3e-8);assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]);assert.ok(y>=f.plot.y[0]&&y<=f.plot.y[1],f.id);count++;
 }
 assert.equal(count,1037);const marks=figs.find(f=>f.id.endsWith('empirical-fit')).plot.marks,xs=[-30,-20,-10,0,10,20,30],e=[2,-1,-2,2,-2,-1,2];assert.equal(marks.length,7);marks.forEach((m,i)=>{near(m.x,xs[i]);near(m.y,-5*(.4*xs[i]+e[i])/100);assert.equal(m.label,String(i+1));});
 t.diagnostic(JSON.stringify({independentLineValues:count,independentObservationMarkers:7}));
});
test('synthetic OLS, unit conversions, covariance effects, two-factor recovery and uncertainty reconcile without a causal claim',()=>{
 const x=[-30,-20,-10,0,10,20,30].map(v=>v/10000),e=[2,-1,-2,2,-2,-1,2].map(v=>v/10000),s=x.map((v,i)=>-.6*v+e[i]),R=x.map((v,i)=>-5*(v+s[i])),dot=(a,b)=>a.reduce((sum,v,i)=>sum+v*b[i],0),xx=dot(x,x),xs=dot(x,s),ss=dot(s,s),xr=dot(x,R),sr=dot(s,R);
 near(x.reduce((a,b)=>a+b,0),0,1e-16);near(e.reduce((a,b)=>a+b,0),0,1e-16);near(dot(x,e),0,1e-18);near(xx,.000028,1e-17);near(xr,-.000056,1e-17);near(-xr/xx,2);
 const det=xx*ss-xs*xs;assert.ok(det>0);near((xr*ss-sr*xs)/det,-5);near((sr*xx-xr*xs)/det,-5);
 const residual=R.map((r,i)=>r+2*x[i]),SSE=dot(residual,residual),R2=1-SSE/dot(R,R);near(SSE,.0000055,1e-17);near(R2,.9531914893617022);near(Math.sqrt(SSE/5/xx),.19820624179302296);
 near(-100*(-.035),3.5);near(-10000*(-.00028),2.8);near(5+5*xs/xx,2);near(4+3*.5,5.5);
 assert.match(sec('uncertainty').blocks[1].blocks.join(' '),/keine zufällige Stichprobe/);
});
test('all numerical practice and both reserved cases, including every reserved distractor, reconcile independently',()=>{
 const refs={'04':.0025,'05':5.2,'06':-320,'07':3.2,'08':4.2,'09':3.7,'13':100,'14':98,'15':100,'21':-3.675,'22':3.225,'23':-9739.68,'24':-4.5,'31':3.142857,'37':-.075,'38':-.36,'39':3.6,'40':.480769,'41':.961538,'42':-2.884615,'44':-2.830018,'46':.425,'47':1.125,'50':1.2,'52':5,'56':3.1,'57':3.5,'58':2.8,'59':2,'60':2,'61':5.5,'69':.198206};
 for(const[id,v]of Object.entries(refs))near(num(answer(id)),v,1e-6);
 const P=103,pm=104.82,pp=100.58,h=.005,dy=.003,D=(pm-pp)/(2*P*h),C=(pm+pp-2*P)/(P*h*h),V=800000/100*P;near(num(answer('a1')),V*(-D*dy+.5*C*dy**2),1e-8);
 for(const o of q('a1').options){const expected=o.why.includes('nur den zentralen')?-V*D*dy:o.why.includes('positivem Vorzeichen')?V*(-D*dy-.5*C*dy**2):-11040;near(num(o.text),expected,1e-8);}
 const clean=102.4,DC=(pm-pp)/(2*clean*h),CC=(pm+pp-2*clean)/(clean*h*h);near(800000/100*clean*(-DC*dy+.5*CC*dy**2),-9312,1e-8);
 const ka=[.15,1.5,1.75],kb=[.45,.6,1.75],sh=[.0015,-.002,.001],RA=-ka.reduce((s,k,i)=>s+k*sh[i],0),RB=-kb.reduce((s,k,i)=>s+k*sh[i],0);near(num(answer('b1')),(.3*RA+.7*RB)*100);
 for(const o of q('b1').options){const expected=o.why.startsWith('Das wendet die historische Einzelsteigung')?-2.4*.001*100:o.why.includes('gleich statt')?(RA+RB)/2*100:-.055;near(num(o.text),expected,1e-8);}
 for(const K of [ka,kb])near(K.reduce((sum,k,i)=>sum+k/[1,3,5][i],0),1);
});
test('precise effective and node vocabulary retains established general Duration and OAS destinations',()=>{
 const gl=require('../finance-glossary.cjs'),find=t=>gl.find(g=>[g.term,...g.aliases].includes(t));
 for(const[t,s]of [['Effective Duration','effective'],['Effective Convexity','effective'],['Key Rate Duration','key-definition'],['Empirical Duration','empirical-definition'],['Analytical Duration','risk-variable'],['Key-Rate-Vektor','key-case'],['Parallel Duration','key-sum'],['Curve Bump','basis'],['Bump Shape','basis'],['One-Sided Effective Duration','one-sided'],['Zinsbaumkalibrierung','tree-calibration'],['Exercise Policy','option-tree'],['Hessian','vector-convexity'],['Partial Derivative','key-definition'],['Sample Window','regimes'],['Interest Rate Sensitivity','risk-variable']])assert.deepEqual(find(t)?.cfa,{unit:'curve-risk',section:s},t);
 assert.deepEqual(find('Bullet Portfolio').contextualAliases,[{label:'Bullet',units:['convexity','curve-risk']}]);assert.deepEqual(find('Sensitivität').cfa,{unit:'data-science',section:'classification'});
 assert.equal(gl.filter(g=>g.term==='Effective Duration').length,1);assert.equal(find('Duration').term,'Modified Duration');assert.deepEqual(find('OAS').cfa,{unit:'fixed-yields',section:'oas'});assert.deepEqual(find('Estimation Window').cfa,{unit:'equity-factors',section:'estimation'});assert.deepEqual(find('Risk-neutral Probability').cfa,{unit:'tvm',section:'option-replication'});
});
