const {test}=require('node:test');const assert=require('node:assert/strict');
const M=require('../finance-models.cjs');
const defaults=id=>Object.fromEntries(M.models[id].controls.map(f=>[f.key,f.value]));
const run=(id,p={})=>M.calculate(id,{...defaults(id),...p});
const near=(a,b,tol=1e-6)=>assert.ok(Math.abs(a-b)<=tol,`${a} != ${b}`);
const refs={dcf:[863.837598531476],annuity:[272.324802937048],growth:[5,3.07764064044],diversification:[14.14213562373],capm:[9],wacc:[7.5],gordon:[50],inflation:[3.92156862745],fx:[2.6],forward:[105.1271096376],bond:[97.3269880505,2.6956108],credit:[12000],waterfall:[10,140],option:[5],binomial:[62.5,11.9047619048,.5],bsm:[10.4505835722,5.5735260223,.6368306512],supply:[30,40],regression:[2],ar:[5+5*.8**30],dupont:[24],utility:[50],rebalance:[64.2857142857],risk:[1.64485362695,2.06271280751],alm:[-9.4,95.2380952381],attribution:[.6,1,.2,1.8],execution:[125],tax:[15529.694217329,15931.3577240714]};
test('every interactive Finance model matches independent reference values',()=>{
 Object.assign(refs,{npv:[197.813011123],fxforward:[.882692307692],forwardvalue:[4.9],abs:[20,10],property:[2000000],frontier:[6,11.1803398875]});
 assert.equal(Object.keys(refs).length+1,Object.keys(M.models).length);
 for(const [id,expected] of Object.entries(refs)){const actual=run(id).metrics;expected.forEach((v,i)=>near(actual[i][1],v,id==='bsm'?1e-5:1e-6));}
});
test('Monte Carlo is deterministic, collapses at zero volatility and keeps quantiles ordered',()=>{
 const fixed=run('montecarlo',{vol:0}).metrics.map(v=>v[1]);fixed.forEach(v=>near(v,100*1.06**10));
 const r=run('montecarlo'),v=r.metrics.map(m=>m[1]);assert.deepEqual(r,run('montecarlo'));
 assert.ok(v[0]<=v[1]&&v[1]<=v[2]);assert.equal(r.points[0][1],100);
 // With 200 paths the median should be close, not identical, to the analytic lognormal median.
 near(v[1],100*Math.exp((Math.log(1.06)-.2**2/2)*10),30);
});
test('Finance model boundaries remain finite or explicitly reject invalid mathematical domains',t=>{
 let checks=0;
 for(const [id,m] of Object.entries(M.models))for(const f of m.controls){
  for(const value of [f.min,f.max]){
   try{const result=run(id,{[f.key]:value});assert.ok(result.points.length>1);result.points.forEach(p=>p.forEach(v=>assert.ok(Number.isFinite(v))));}
   catch(e){assert.ok((id==='gordon'&&/Wachstum/.test(e.message))||(id==='binomial'&&/Arbitrage/.test(e.message)),id+': '+e.message);}
   checks++;
  }
  for(const value of ['',null,NaN,Infinity,f.min-1,f.max+1]){assert.throws(()=>run(id,{[f.key]:value}));checks++;}
 }
 t.diagnostic(checks+' parameter/domain checks');
});
test('zero rates, perfect correlations, option parity and attribution identities',()=>{
 near(run('annuity',{r:0,n:20}).metrics[0][1],2000);
 near(run('bond',{y:0}).metrics[0][1],115);
 near(run('diversification',{rho:-1}).metrics[0][1],0);
 near(run('diversification',{rho:1}).metrics[0][1],20);
 near(run('regression',{a:1.3,b:1.9}).metrics[0][1],1.9);
 for(const s of [10,100,200]){const v=M.bsm(s,100,.05,.2,1);near(v.call-v.put,s-100*Math.exp(-.05));}
 for(const w of [0,37,100])for(const b of [0,50,100])for(const alpha of [-5,0,5]){
  const r=run('attribution',{w,b,alpha}).metrics.map(v=>v[1]);
  near(r[0]+r[1]+r[2],w/100*(10+alpha)+(1-w/100)*4-(b/100*10+(1-b/100)*4));
 }
 near(run('tax',{tax:0}).metrics[0][1],run('tax',{tax:0}).metrics[1][1]);
 near(run('alm',{assets:100,liab:100,da:6,dl:6,shock:2}).metrics[0][1],0);
 assert.throws(()=>run('gordon',{r:5,g:5}),/kleiner/);
 assert.throws(()=>run('binomial',{u:1.05,r:10}),/Arbitrage/);
});
test('worked retirement and tax examples agree with cashflow summation',()=>{
 const pv=Array.from({length:25},(_,i)=>30000/1.02**(i+1)).reduce((a,b)=>a+b,0);
 near(pv,585703.694207581,1e-6);near(M.annuity(30000,.02,25),pv);
 const discount=100/1.06+100/1.06**2+100/1.06**3;
 near(M.annuity(100,.06,3),discount);
});
