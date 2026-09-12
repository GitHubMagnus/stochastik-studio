const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const html=fs.readFileSync(require('node:path').join(__dirname,'../kelly-studio.html'),'utf8');
const context=vm.createContext({});
vm.runInContext(html.split('<script>')[1].split('const $ =')[0],context);
const k=context;
const near=(a,b,tol=1e-9)=>assert.ok(Math.abs(a-b)<tol,`${a} != ${b}`);

test('every Kelly formula panel contains offline MathML generated from curated LaTeX',()=>{
 const formulas=require('../kelly-formulas.cjs');
 const keys=[...html.matchAll(/class="formula" data-math="([^"]+)"/g)].map(m=>m[1]);
 assert.deepEqual(keys.sort(),Object.keys(formulas).sort());
 assert.equal((html.match(/<math xmlns="http:\/\/www\.w3\.org\/1998\/Math\/MathML" display="block">/g)||[]).length,Object.keys(formulas).length);
 assert.equal((html.match(/encoding="application\/x-tex"/g)||[]).length,Object.keys(formulas).length);
});

test('binary Kelly agrees with analytic optimum including cash and costs',()=>{
 for(const p of [0,.1,.5,.55,.8,1])for(const gain of [.05,.2,1])for(const loss of [.1,.5,1])for(const cash of [0,.03])for(const cost of [0,.01]){
  const rows=[{p,r:gain},{p:1-p,r:-loss}];
  const u=gain-cost-cash,d=loss+cost+cash;
  const expected=p===1 ? 1 : Math.max(0,Math.min(1,(1+cash)*(p*u-(1-p)*d)/(u*d)));
  near(k.optimalSingle(rows,cash,cost),expected);
 }
});
test('multi-outcome optimum dominates an independent grid of feasible weights',()=>{
 for(const rows of [[{p:.2,r:.4},{p:.45,r:.12},{p:.25,r:-.15},{p:.1,r:-.5}],[{p:.7,r:1},{p:.3,r:-1}]]){
  const f=k.optimalSingle(rows,.02,.01);
  const independent=w=>rows.some(s=>1.02+w*(s.r-.03)<=0)?-Infinity:rows.reduce((v,s)=>v+s.p*Math.log(1.02+w*(s.r-.03)),0);
  for(let i=0;i<1000;i++)assert.ok(independent(f)>=independent(i/1000)-1e-12);
 }
 assert.throws(()=>k.optimalSingle([{p:.9,r:.1}]),/100/);
 near(k.optimalSingle([{p:1,r:.1},{p:0,r:-1}]),1);
 assert.equal(k.logGrowth(1,[{p:1,r:-1}]),-Infinity);
});
test('fractional sizing observes position and stress limits including zero-probability crash',()=>{
 const r=k.singleSizing({rows:[{p:.55,r:.2},{p:.45,r:-.2}]});
 near(r.full,.5);near(r.fractional,.25);near(r.planned,.125);near(r.stressLoss,.05);
 const crash=k.singleSizing({rows:[{p:1,r:.2},{p:0,r:-1}],cost:.01});
 near(crash.planned,.05/1.01);near(crash.stressLoss,.05);
 near(k.singleSizing({rows:[{p:1,r:.2}],budget:0}).planned,0);
});
test('portfolio optimizer agrees with analytic solutions and a feasible two-asset grid',()=>{
 const diagonal=k.solvePortfolio([.008,.018],[[.04,0],[0,.09]],[1,1]);
 near(diagonal.weights[0],.2,1e-7);near(diagonal.weights[1],.2,1e-7);
 for(const rho of [-.9,0,.8,1]){
  const sigma=[[.04,.06*rho],[.06*rho,.09]],a=[.06,.08];
  const r=k.solvePortfolio(a,sigma,[.7,.6],.9);
  assert.ok(r.weights[0]>=0&&r.weights[0]<=.7+1e-10);
  assert.ok(r.weights[1]>=0&&r.weights[1]<=.6+1e-10);
  assert.ok(r.weights[0]+r.weights[1]<=.9+1e-10);assert.ok(r.gap<1e-9);
  for(let i=0;i<=70;i++)for(let j=0;j<=60;j++)if(i+j<=90){
   const x=i/100,y=j/100;
   const value=.06*x+.08*y-.5*(.04*x*x+2*.06*rho*x*y+.09*y*y);
   assert.ok(r.objective>=value-1e-9);
  }
 }
 near(k.solvePortfolio([-.01,-.02],[[.04,0],[0,.09]],[1,1]).weights.reduce((a,b)=>a+b,0),0);
});
test('correlation validation rejects impossible matrices and permits singular matrices',()=>{
 assert.throws(()=>k.covariance([.2,.2,.2],[[1,.9,.9],[.9,1,-.9],[.9,-.9,1]]),/semidefinit/);
 assert.throws(()=>k.covariance([.2,.3],[[1,.2],[.3,1]]),/symmetrisch/);
 near(k.covariance([.2,.3],[[1,1],[1,1]]).eigenvalues[0],0);
});
test('simulation matches deterministic wealth, cash compounding, loss and ruin cases',()=>{
 const base={gain:.2,loss:1,cash:.02,cost:.01,weights:[0,.5,1],periods:10,paths:20};
 const win=k.simulateBinary({...base,p:1});
 win.stats.forEach((s,i)=>near(s.median,10*Math.log(1.02+base.weights[i]*.17)));
 const loss=k.simulateBinary({...base,p:0,cost:0});
 near(loss.stats[0].median,10*Math.log(1.02));
 near(loss.stats[1].median,10*Math.log(.51));
 near(loss.stats[1].drawdown90,1-.51**10);
 assert.equal(loss.stats[2].median,-Infinity);assert.equal(loss.stats[2].ruin,1);
 assert.equal(loss.stats[2].drawdownProbability,1);
 assert.equal(JSON.stringify(k.simulateBinary({...base,p:.55})),JSON.stringify(k.simulateBinary({...base,p:.55})));
});
