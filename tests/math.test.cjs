const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
const script=html.split('<script>')[1].split('</script>')[0];
const helpers=script.slice(0,script.indexOf('/* ================================================= BAYES module'));
const distributions=script.slice(script.indexOf('const LG='),script.indexOf('/* ================================================= REGINF'));
const context=vm.createContext({});vm.runInContext(helpers+distributions,context);
const evaluate=code=>vm.runInContext(code,context);
const close=(actual,expected,tolerance=1e-8)=>assert.ok(Math.abs(actual-expected)<=tolerance,`${actual} != ${expected}`);

test('whole application parses',()=>new vm.Script(script));
test('normal probabilities and quantiles match standard references',()=>{
 close(evaluate('normCdf(0,0,1)'),0.5,0);
 close(evaluate('normCdf(1.95996398454,0,1)'),0.975,1e-7);
 close(evaluate('normInv(0.975)'),1.95996398454,1e-8);
});
test('Mann-Whitney small samples use exact permutation probabilities',()=>{
 close(evaluate('mannWhitneyP(0,5,5).p'),2/252,1e-12);
 assert.equal(evaluate('mannWhitneyP(12,5,5).p'),1);
 assert.equal(evaluate('mannWhitneyP(1800,60,60).p'),1);
 assert.equal(evaluate('mannWhitneyP(1800,60,60,120**3-120).p'),1);
});
test('Student t with one degree of freedom agrees with the analytic Cauchy CDF',()=>{
 for(const x of [-10000,-100,-8,-1,0,1,8,100,10000])close(evaluate(`tCdf(${x},1)`),0.5+Math.atan(x)/Math.PI,1e-10);
});
test('t tails are positive, bounded and monotone even for extreme statistics',()=>{
 for(const df of [1,2,4,6,38,118,798]){
  let previous=0.5;
  for(const x of [0,0.5,2,8,20,80,150]){
   const tail=evaluate(`tTail(${x},${df})`);assert.ok(tail>=0&&tail<=previous+1e-14);previous=tail;
  }
 }
 close(evaluate('tInv975(1)'),12.706204736,1e-7);
 close(evaluate('tInv975(4)'),2.776445105,1e-8);
 close(evaluate('tInv975(6)'),2.446911849,1e-8);
 // Independent Simpson quadrature; density at zero from the even-df recurrence.
 let peak=1/(2*Math.sqrt(2));for(let v=4;v<=798;v+=2)peak*=(v-1)/(v-2)*Math.sqrt((v-2)/v);
 const x=0.5/(3*Math.sqrt(2/400)),steps=20000,h=x/steps;
 const density=u=>peak*(1+u*u/798)**(-799/2);
 let area=density(0)+density(x);for(let i=1;i<steps;i++)area+=(i%2?4:2)*density(i*h);
 close(evaluate('2*tTail(0.5/(3*Math.sqrt(2/400)),798)'),1-2*area*h/3,1e-9);
});
test('F quantiles expand beyond the old hard upper bound',()=>{
 for(const p of [0.95,0.99,0.995])close(evaluate(`quantOf(x=>fCdfD(x,1,1),${p},300)`),Math.tan(p*Math.PI/2)**2,0.00002);
});
test('chi-square, beta and density endpoints',()=>{
 close(evaluate('chiCdf(5.991464547,2)'),0.95,1e-10);
 close(evaluate('betaI(0.4,1,1)'),0.4,1e-10);
 close(evaluate('betaI(0.5,30,30)'),0.5,1e-9);
 assert.equal(evaluate('chiPdf(0,2)'),0.5);
 assert.equal(evaluate('fPdfD(0,2,20)'),1);
 assert.equal(evaluate('chiPdf(0,1)'),Infinity);
 assert.equal(evaluate('fCdfD(Infinity,2,20)'),1);
});

function moduleFunction(name,start,end){
 const begin=script.indexOf(start);assert.ok(begin>=0);
 const stop=script.indexOf(end,begin);assert.ok(stop>begin);
 return vm.runInContext(script.slice(begin,stop)+`;${name}`,context);
}
test('stationary solver handles absorbing, cyclic and nonunique chains',()=>{
 const stationary=moduleFunction('stationary','  function stationary(P){','  function trajectory(P){');
 const weather=stationary([[.75,.2,.05],[.3,.45,.25],[.2,.35,.45]]);
 [43/84,17/56,31/168].forEach((v,i)=>close(weather[i],v));
 assert.deepEqual(Array.from(stationary([[1,0,0],[.5,.5,0],[0,.5,.5]])),[1,0,0]);
 assert.equal(stationary([[1,0,0],[0,1,0],[0,0,1]]),null);
 stationary([[0,1,0],[0,0,1],[1,0,0]]).forEach(v=>close(v,1/3));
});
test('logistic fit rejects separation and fits overlapping classes',()=>{
 const fit=moduleFunction('fitLogit','  function fitLogit(d){','  function fitLinear(d){');
 assert.equal(fit([{x:-2,y:0},{x:-1,y:0},{x:1,y:1},{x:2,y:1}]).valid,false);
 assert.equal(fit([{x:-1,y:1},{x:1,y:1}]).valid,false);
 const r=fit([-2,-1,0,1,2].flatMap(x=>[{x,y:0},{x,y:1}]));
 assert.equal(r.valid,true);close(r.b0,0);close(r.b1,0);
});
test('QR polynomial fit recovers an exact cubic and nested training errors decrease',()=>{
 const fit=moduleFunction('polyfit','  function polyfit(d,grad){','  const evalPoly=');
 const data=Array.from({length:30},(_,i)=>{const x=-2.5+5*i/29;return {x,y:1-2*x+0.4*x*x+0.8*x*x*x};});
 const c=fit(data,3);[1,-2,.4,.8].forEach((v,i)=>close(c[i],v,1e-10));
 let prev=Infinity;
 const noisy=data.map((p,i)=>({x:p.x,y:Math.sin(p.x)+0.1*Math.cos(i*7)}));
 for(let degree=1;degree<=12;degree++){
  const coef=fit(noisy,degree),error=noisy.reduce((sum,p)=>sum+(p.y-coef.reduce((v,c,j)=>v+c*p.x**j,0))**2,0);
  assert.ok(error<=prev+1e-8);prev=error;
 }
});
