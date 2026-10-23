const {test}=require('node:test'),assert=require('node:assert/strict'),M=require('../finance-models.cjs'),{compile}=require('../finance-cfa/compile.cjs'),d=compile(),u=d.units.find(u=>u.id==='credit-risk');
const base=Object.fromEntries(M.models.credit.controls.map(c=>[c.key,c.value])),run=p=>M.calculate('credit',{...base,...p}),near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),a+' vs '+b);
const flat=bs=>bs.flatMap(b=>typeof b==='string'?[b]:[b,...(b.steps?flat(b.steps):[]),...(b.blocks?flat(b.blocks):[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),q=id=>d.questions.find(q=>q.id==='cdr-'+id),answer=id=>q(id).options[q(id).correct].text;
// Independent exact arithmetic for native decimal PD / rho grids: no floating CDF comparison.
function rationalDistribution(n,pi,ri){
 const N=BigInt(n),P=BigInt(pi),B=200n-P,R=BigInt(ri),den=20n*200n**N,weights=[];let choose=1n,cumulative=0n,quantile=null;
 for(let k=0;k<=n;k++){if(k)choose=choose*BigInt(n-k+1)/BigInt(k);let mass=(20n-R)*choose*P**BigInt(k)*B**BigInt(n-k);if(k===0)mass+=R*B*200n**(N-1n);if(k===n)mass+=R*P*200n**(N-1n);weights.push(Number(mass)/Number(den));cumulative+=mass;if(quantile===null&&100n*cumulative>=99n*den)quantile=k;}
 return{pmf:weights,quantile};
}
test('credit risk implements all three actual objectives with original practice, reserved transfers and optional depth without releasing mocks',()=>{
 assert.equal(u.sections.length,38);assert.equal(u.review.status,'draft');assert.equal(d.release,false);assert.equal(blocks.filter(b=>b.kind==='figure').length,7);assert.equal(blocks.filter(b=>b.kind==='example').length,8);assert.equal(blocks.filter(b=>b.kind==='disclosure').length,3);
 const qs=d.questions.filter(q=>q.unit===u.id);assert.equal(qs.filter(q=>q.pool==='practice').length,72);for(const pool of ['mock-a','mock-b'])assert.equal(qs.filter(q=>q.pool===pool).length,1);
 for(const o of d.coverage.find(c=>c.id===u.id).objectives){assert.ok(o.sections.length>=10);assert.ok(o.practice.length>=20);assert.ok(o.mockQuestions>=1);}
 assert.equal(u.sources[0].url,'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=21');assert.equal(u.explorations[0].lesson,'bonds-10');assert.equal(Object.keys(M.models).length,49);
 for(const id of ['curve-risk','stakeholders','distributions','fixed-yields','cycles','bond-trading'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit==='credit-risk'));
 for(const b of blocks.filter(b=>b.kind==='formula'))assert.ok(b.mathml.includes('<math')&&b.symbols.every(s=>s.mathml&&s.meaning));
});
test('credit distribution agrees with independent integer probabilities and exact left quantiles across native grid cases',t=>{
 let count=0;
 for(const n of [1,2,3,10,25,100])for(const pi of [0,1,2,4,10,20,60])for(const ri of [0,1,5,9,10,17,18,19,20]){
  const expected=rationalDistribution(n,pi,ri),actual=M.creditDistribution(n,pi/200,ri/20);assert.equal(actual.quantile,expected.quantile,'quantile '+[n,pi,ri]);actual.pmf.forEach((v,k)=>near(v,expected.pmf[k],2e-12));count++;
 }
 t.diagnostic(JSON.stringify({exactRationalScenarios:count}));
});
test('every native PD, dependence and borrower-count combination has the exact integer-arithmetic left quantile',t=>{
 let checks=0;
 for(let n=1;n<=100;n++)for(let pi=0;pi<=60;pi++){
  const P=BigInt(pi),B=200n-P,N=BigInt(n),den=200n**N,masses=[];let C=1n;
  for(let k=0;k<=n;k++){if(k)C=C*BigInt(n-k+1)/BigInt(k);masses.push(C*P**BigInt(k)*B**BigInt(n-k));}
  for(let ri=0;ri<=20;ri++){
   const R=BigInt(ri),D=20n*den;let cumulative=0n,quantile=n;
   for(let k=0;k<=n;k++){cumulative+=(20n-R)*masses[k]+(k===0?R*B*200n**(N-1n):k===n?R*P*200n**(N-1n):0n);if(cumulative*100n>=99n*D){quantile=k;break;}}
   assert.equal(M.creditDistribution(n,pi/200,ri/20).quantile,quantile,[n,pi,ri].join('/'));checks++;
  }
 }
 assert.equal(checks,128100);t.diagnostic(JSON.stringify({allNativeQuantiles:checks}));
});
test('model metrics, complete probabilities, positive tails, concentration and mean curve reconcile at corners and independent scenarios',t=>{
 const cases=[];for(const ead of [1000,1000000])for(const pd of [0,30])for(const lgd of [0,100])for(const names of [1,100])for(const rho of [0,1])cases.push({ead,pd,lgd,names,rho});
 let seed=270122;const random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/2**32;};for(let i=0;i<180;i++)cases.push({ead:1000+Math.floor(1000*random())*999,pd:Math.floor(61*random())/2,lgd:Math.floor(101*random()),names:1+Math.floor(100*random()),rho:Math.floor(21*random())/20});
 let values=0;
 for(const p of cases){
  const out=run(p),c=out.credit,expected=rationalDistribution(p.names,Math.round(p.pd*2),Math.round(p.rho*20)),E=p.ead,ell=p.lgd/100,pd=p.pd/100,a=E*ell/p.names,mean=expected.pmf.reduce((s,v,k)=>s+v*a*k,0),variance=expected.pmf.reduce((s,v,k)=>s+v*(a*k-mean)**2,0);
  near(c.EL,mean,2e-10);near(c.sd,Math.sqrt(variance),2e-10);near(c.VaR,expected.quantile*a);near(c.any,1-expected.pmf[0],2e-12);near(expected.pmf.reduce((s,v)=>s+v,0),1);
  const metrics=[E*ell*pd,a,Math.sqrt(variance),expected.quantile*a,(1-expected.pmf[0])*100,E*ell,p.names*pd,expected.quantile*a-mean];metrics.forEach((v,i)=>near(out.metrics[i][1],v,2e-9));
  assert.equal(out.projection.rows.length,p.names+1);let cumulative=0;out.projection.rows.forEach((r,k)=>{near(r[0],k);near(r[1],a*k);near(r[2],100*expected.pmf[k]);near(r[3],100*(cumulative+=expected.pmf[k]));});
  for(const [x,y]of out.points){near(y,E*ell*x/100);values++;}assert.equal(out.stable.rows.length,5);out.stable.rows.forEach(([N,R,EL,sd,V])=>{const ref=rationalDistribution(N,Math.round(p.pd*2),Math.round(R*20));near(EL,mean);near(sd,E*ell*Math.sqrt(pd*(1-pd)*(R+(1-R)/N)));near(V,E*ell/N*ref.quantile);});
 }
 assert.equal(cases.length,212);assert.equal(values,12932);t.diagnostic(JSON.stringify({scenarios:cases.length,nativeCorners:32,meanCurveValues:values}));
});
test('default, zero-loss, exact quantile thresholds, scale and six native presets remain distinct',()=>{
 const r=run();assert.deepEqual(r.metrics.map(m=>m[1]),[12000,24000,16800,72000,39.65352702211031,600000,.5,60000]);assert.deepEqual(r.points,run({names:1,rho:1}).points);
 const one=run({names:1}).credit;near(one.EL,12000);near(one.sd,84000);near(one.VaR,600000);
 const shared=run({rho:1}).credit;near(shared.EL,12000);near(shared.sd,84000);near(shared.VaR,600000);
 const half=run({ead:500000});half.metrics.forEach(([_,v],i)=>near(v,i===4||i===6?r.metrics[i][1]:r.metrics[i][1]/2));
 assert.equal(run({pd:0}).credit.any,0);assert.equal(run({lgd:0}).credit.VaR,0);assert.ok(run({lgd:0}).credit.any>0);
 assert.equal(M.creditDistribution(1,.01,1).quantile,0);assert.equal(M.creditDistribution(25,.02,.5).quantile,25);assert.equal(M.creditDistribution(100,.02,.5).quantile,100);
 for(let ri=0;ri<=20;ri++)assert.equal(M.creditDistribution(1,.01,ri/20).quantile,0,'one borrower: correlation does not change the marginal event');
 for(const preset of M.models.credit.presets)for(const c of M.models.credit.controls){const v=preset.values[c.key];assert.ok(v>=c.min&&v<=c.max);near((v-c.min)/c.step,Math.round((v-c.min)/c.step));}
 for(const p of [{names:1.2},{names:0},{rho:-.01},{pd:31},{ead:0},{lgd:101}])assert.throws(()=>M.creditPlan({...base,...p}));
});
test('all 1,128 original figure values reconcile with independent sums, integer probabilities, prices and discounting',t=>{
 let points=0;
 for(const f of blocks.filter(b=>b.kind==='figure')){
  for(const [j,s]of f.plot.series.entries())for(const [x,y]of s.points){
   assert.ok(x>=f.plot.x[0]-1e-8&&x<=f.plot.x[1]+1e-8);assert.ok(y>=f.plot.y[0]-1e-8&&y<=f.plot.y[1]+1e-8);
   if(f.id.endsWith('expected-loss'))near(y,1000000*x/100*[.3,.6][j]);
   else if(f.id.endsWith('term-pd'))near(y,j===0?100*(-Math.expm1(x*Math.log(.98))):2*x);
   else if(f.id.endsWith('concentration')){const a=600000/x,p=.02,rho=[0,.25,1][j],v=x*a*a*p*(1-p)+x*(x-1)*a*a*rho*p*(1-p);near(y,Math.sqrt(v));}
   else if(f.id.endsWith('migration-price'))near(y,100*(1/(1.03+x/10000))**4);
   else if(f.id.endsWith('benchmark-offset'))near(y,100*((1.06/(1.06+.01+(j===0?x/10000:0)))**3-1));
   else if(f.id.endsWith('pricing-spread')){const q=x/100,P=(1-q)*100/1.05+q*40/1.05;near(y,j===0?(100/P-1-.05)*10000:q*.6*10000);}
   else assert.ok(f.id.endsWith('loss-cdf'));
   points++;
  }
  if(f.id.endsWith('loss-cdf'))for(const [j,s]of f.plot.series.entries()){const n=j===0?1:25,pmf=rationalDistribution(n,4,0).pmf;let cum=0;for(let k=0;k<=n;k++){near(s.points[k*2][0],k*600/n);near(s.points[k*2][1],100*cum);cum+=pmf[k];near(s.points[k*2+1][1],100*cum);}}
 }
 assert.equal(points,1128);t.diagnostic(JSON.stringify({independentFigureValues:points}));
});
test('loss, survival, recovery, same-mean and pricing examples reconcile and preserve their different denominators',()=>{
 near(.8*.01*500000*.4+.2*.06*900000*.7,9160);near((.8*.01+.2*.06)*(.8*500000+.2*900000)*(.8*.4+.2*.7),5336);
 near(40000/1.05/100000,.38095238095238);near(1-.98**3,.058808);near((1-.98**3)*100000*.6,3528.48);
 near(600000*Math.sqrt(.02*.98),84000);near(300000*Math.sqrt(.04*.96),58787.75382679628);
 near(100/1.05**4,82.27024747918819);near(100/1.07**4,76.2895212047525);near(((1.05/1.07)**4-1)*100,-7.269610166115781);
 near(-4.2*.005+11*.005**2,-.020725);
 const P=(.97*100+.03*40)/1.05;near(P,93.52380952380952);near((100/P-1)*100,6.92464358452138);near(((.99*100+.01*40)/P-1)*100,6.283095723014265);
 const words=blocks.filter(b=>typeof b==='string').join(' ');assert.ok(words.includes('98,675657')&&words.includes('99,855411'));assert.ok(words.includes('keine Verlustobergrenze')||words.includes('keine Obergrenze'));
});
test('all quantitative answers and original reserved distractors have independent calculations',()=>{
 for(const [id,text]of Object.entries({'03':'65%.','04':'100,000.','05':'2,500.','06':'1,200.','13':'38.0952%.','14':'5.91%.','15':'3.92%.','16':'5.92%.','18':'15,000.','21':'0.','22':'30,000.','47':'An increase of 50 bp.','48':'−1.20%.','49':'−2.94%.','58':'1.50%.','61':'96.0784.','62':'208.1633 bp.','68':'−7.3362%.','a1':'7,340.','b1':'−3.5100%.'}))assert.equal(answer(id),text,id);
 const normal=.75*.008*400000*.35,stress=.25*.05*800000*.65;near(normal+stress,7340);
 near((.75*.008+.25*.05)*(.75*400000+.25*800000)*(.75*.35+.25*.65),3931.25);near(500000*(.75*.008*.35+.25*.05*.65),5112.5);
 near((-3.6*.01+9*.01**2)*100,-3.51);near((-3.6*.016+9*.016**2)*100,-5.5296);near((-3.6*.022+9*.022**2)*100,-7.4844);
 near(250000*.025*.4,2500);near(80000*.015,1200);near(1-.97**2,.0591);near(.98*.04,.0392);near(1-.98*.96,.0592);near(600000/20*.5,15000);near(100*.98/1.02,96.07843137254902);near((1.02*.02/.98)*10000,208.16326530612247);
 // Reserved data do not repeat the worked-state weights or the worked duration/stress combination.
 assert.ok(!q('a1').stem.includes('80%'));assert.ok(!q('b1').stem.includes('4.2'));
});
test('precise credit glossary returns preserve global recovery, ECL, VaR and risk-neutral-probability meanings',()=>{
 const g=require('../finance-glossary.cjs'),find=t=>g.find(g=>[g.term,...g.aliases].includes(t));
 for(const [term,section]of [['Kreditrisiko','default'],['PD','pd'],['LGD','lgd'],['EAD','ead'],['Expected Loss','identity'],['Credit Spread','spread'],['Kreditrating','ratings'],['Ausfall-Recovery','recovery-time'],['Kumulative PD','term-pd'],['Ausfallkorrelation','dependence'],['Diskretes Verlustquantil','quantile']])assert.deepEqual(find(term).cfa,{unit:'credit-risk',section});
 assert.deepEqual(find('Recovery Rate').cfa,{unit:'stakeholders',section:'seniority'});assert.deepEqual(find('ECL').cfa,{unit:'balance-sheet',section:'measurement-example'});assert.equal(find('VaR').term,'Value at Risk');assert.deepEqual(find('Risikoneutrale Wahrscheinlichkeit').cfa,{unit:'tvm',section:'option-replication'});
 const ctx=find('Ausfall-Recovery').contextualAliases;assert.ok(ctx.some(a=>a.label==='Recovery'&&a.units.includes('credit-risk')));
});
