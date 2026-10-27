const {test}=require('node:test'),assert=require('node:assert/strict');
const data=require('../finance-cfa/compile.cjs').compile(),u=data.units.find(u=>u.id==='duration'),M=require('../finance-models.cjs');
const near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b),relative=(a,b,t=2e-10)=>near(a,b,t*Math.max(1,Math.abs(b)));
const defaults={c:5,y:5,n:5,m:1,shock:100,position:1000000},run=p=>M.calculate('bond',{...defaults,...p}),sec=id=>u.sections.find(s=>s.id===id);
// Closed-form annuity derivative, independent of the model's payment-weight loop.
const ref=(c,y,T,m=1)=>{const n=T*m,C=c/m,r=y/m,b=1+r,B=b**-n;let P,derivative;
 if(Math.abs(r)<1e-13){P=C*n+100;derivative=(-C*n*(n+1)/2-100*n)/m;}
 else{P=C*(1-B)/r+100*B;derivative=(C*(n*b**(-n-1)*r-(1-B))/r**2-100*n*b**(-n-1))/m;}
 return{P,mod:-derivative/P,mac:-derivative/P*b,derivative};};
const answer=id=>{const q=data.questions.find(q=>q.id==='ydr-'+id);return q.options[q.correct].text;},number=s=>Number(s.replaceAll(',','').match(/[−-]?\d+(?:\.\d+)?/)?.[0].replace('−','-'));
test('duration addresses both actual 2027 objectives with substantive independent training and one transfer case per mock',()=>{
 assert.equal(u.sections.length,32);assert.equal(u.review.status,'checked');assert.equal(data.release,false);assert.ok(u.sources[0].url.endsWith('#page=21'));
 const qs=data.questions.filter(q=>q.unit===u.id);assert.equal(qs.filter(q=>q.pool==='practice').length,52);for(const pool of ['mock-a','mock-b']){assert.equal(qs.filter(q=>q.pool===pool).length,1);assert.ok(data.inventory[pool].bonds<=require('../finance-cfa/engine.cjs').blueprint.bonds);}
 for(const o of data.coverage.find(c=>c.id===u.id).objectives){assert.ok(o.sections.length>=15);assert.ok(o.practice.length>=20);assert.ok(o.mockQuestions>=1);}
 assert.equal(require('../finance-content/bonds.cjs')[7].lab,'bond');assert.ok(Object.keys(M.models).length>=50);assert.equal(M.models.bond.controls.length,6);assert.equal(M.models.bond.presets.length,6);
 for(const id of ['bond-return','bond-prices','fixed-yields','yield-curves','tvm'])assert.ok(data.units.find(u=>u.id===id).related.some(r=>r.unit==='duration'));
});
test('264 bond-position scenarios independently reconcile analytic duration, currency sensitivities and all price curves including every corner',t=>{
 const cases=[];for(const c of [0,15])for(const y of [0,20])for(const n of [1,30])for(const m of [1,12])for(const shock of [-500,500])for(const position of [0,10000000])cases.push({c,y,n,m,shock,position});
 let state=202711;const rand=()=>{state=(1664525*state+1013904223)>>>0;return state/2**32;};
 for(let k=0;k<200;k++)cases.push({c:rand()*15,y:rand()*20,n:1+Math.floor(rand()*30),m:1+Math.floor(rand()*12),shock:rand()*1000-500,position:rand()*10000000});
 let points=0;
 for(const p of cases){const out=run(p),r=out.risk,b=ref(p.c,p.y/100,p.n,p.m),scale=p.position/100,dy=p.shock/10000,after=ref(p.c,p.y/100+dy,p.n,p.m),up=ref(p.c,p.y/100+.0001,p.n,p.m),down=ref(p.c,p.y/100-.0001,p.n,p.m);
  relative(r.P,b.P);relative(r.mod,b.mod);relative(r.mac,b.mac);relative(r.marketValue,b.P*scale);relative(r.moneyDuration,-b.derivative*scale);relative(r.pvbp,-b.derivative*scale*.0001);
  relative(r.next,after.P);relative(r.exactChange,(after.P-b.P)*scale);relative(r.upLoss,(b.P-up.P)*scale,2e-7);relative(r.downGain,(down.P-b.P)*scale,2e-7);relative(r.centralPVBP,(down.P-up.P)*scale/2,2e-7);
  relative(out.projection.rows.reduce((s,r)=>s+r[3],0),b.P);near(out.projection.rows.reduce((s,r)=>s+r[4],0),1,2e-14);relative(out.projection.rows.reduce((s,r)=>s+r[5],0),b.mac);
  for(const[x,y]of out.points){relative(y,ref(p.c,x/100,p.n,p.m).P);points++;}
  out.metrics.forEach(([,v])=>assert.ok(Number.isFinite(v)));out.stable.rows.forEach(r=>assert.ok(Number.isFinite(r[1])));
 }
 assert.equal(cases.length,264);assert.equal(points,16104);t.diagnostic(JSON.stringify({scenarios:264,independentCurveValues:points,all64ControlCorners:true}));
});
test('position scaling preserves the original eight relative/quoted outputs and compares equal nominal with equal market value',()=>{
 const a=run(),b=run({position:2000000}),z=run({c:0}),zm=run({c:0,position:1276281.5625});assert.deepEqual(a.metrics.slice(0,8),b.metrics.slice(0,8));assert.deepEqual(a.points,b.points);
 for(const k of ['marketValue','moneyDuration','pvbp','exactChange','upLoss','downGain','centralPVBP'])relative(b.risk[k],2*a.risk[k]);
 assert.ok(z.risk.mod>a.risk.mod);assert.ok(z.risk.pvbp<a.risk.pvbp);near(zm.risk.marketValue,1000000,1e-8);assert.ok(zm.risk.pvbp>a.risk.pvbp);
 for(const k of ['marketValue','moneyDuration','pvbp','exactChange'])assert.equal(run({position:0}).risk[k],0);
 for(const after of [a,z,zm])assert.ok(after.risk.downGain>after.risk.upLoss);near(a.risk.pvbp,432.94766706308184,1e-9);near(a.risk.upLoss,432.82801327592324,1e-9);near(a.risk.downGain,433.0673731610091,1e-9);
});
test('all 591 static graph values match independent annuity derivatives and respect their stated axes',t=>{
 let count=0;const figs=u.sections.flatMap(s=>s.blocks).filter(b=>b.kind==='figure');assert.equal(figs.length,5);const B=ref(5,.05,5);
 for(const f of figs)for(const[i,line]of f.plot.series.entries())for(const[x,y]of line.points){
  let v;if(f.id.endsWith('price-tangent'))v=i===0?(ref(5,.05+x/10000,5).P/B.P-1)*100:-B.mod*x/10000*100;
  else if(f.id.endsWith('coupon-risk-basis')){const b=ref(x,.05,5);v=i===0?b.P*b.mod:b.mod*100;}
  else if(f.id.endsWith('yield-duration'))v=ref([0,5,10][i],x/100,5).mod;
  else if(f.id.endsWith('maturity-risk'))v=i===0?ref(5,.05,x).mod:x/1.05;
  else if(f.id.endsWith('finite-step')){const up=ref(5,.05+x/10000,5).P,down=ref(5,.05-x/10000,5).P;v=i===0?(B.P-up)*10000/x:i===1?(down-B.P)*10000/x:i===2?(down-up)*10000/(2*x):B.P*B.mod;}
  else assert.fail(f.id);relative(y,v,1e-8);assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]);assert.ok(y>=f.plot.y[0]&&y<=f.plot.y[1],f.id+' point outside axes');count++;
 }
 assert.equal(count,591);t.diagnostic(count+' independently verified book graph points');
});
test('nominal and effective annual yield coordinates give the same price and Macaulay with correctly transformed sensitivities',()=>{
 const b=ref(5,.05,5,2),eff=1.025**2-1,cf=Array.from({length:10},(_,k)=>({t:(k+1)/2,v:2.5+(k===9?100:0)})),price=y=>cf.reduce((s,r)=>s+r.v/(1+y)**r.t,0),h=1e-6;
 near(price(eff),b.P,1e-12);const Deff=-(price(eff+h)-price(eff-h))/(2*h)/b.P;near(Deff,b.mac/(1+eff),1e-8);near(b.mod/1.025,Deff,1e-8);
 near(b.mac,4.485432764622604,1e-12);near(b.mod,4.376031965485468,1e-12);near(Deff,4.269299478522408,1e-8);
});
test('coupon and yield effects, negative-yield exceptions and the long-discount maturity reversal satisfy the stated conditions',()=>{
 for(const y of [0,.03,.05,.1]){const seq=[0,2,5,10].map(c=>ref(c,y,5).mod);assert.ok(seq.every((d,i)=>i===0||d<seq[i-1]));}
 const zero=[0,.05,.1].map(y=>ref(0,y,5));zero.forEach(b=>near(b.mac,5,1e-12));assert.ok(zero[2].mod<zero[1].mod&&zero[1].mod<zero[0].mod);
 const neg=ref(0,-.01,5);assert.ok(neg.mod>5);near(neg.mod,5/.99,1e-12);
 near(ref(5,0,5).P,125);near(ref(5,0,5).mod,4.6);near(ref(5,0,5).mac,4.6);
 assert.ok(ref(1,.1,30).mod>ref(1,.1,100).mod);assert.ok(ref(1,.1,100).mod>10);
 for(const c of [0,5]){const b=ref(c,.05,5),h=1e-6,dp=(ref(c,.05+h,5).P-ref(c,.05-h,5).P)/(2*h);near(-dp/b.P,b.mod,1e-8);}
});
test('numerical duration examples and all quantitative answers use consistent price, yield and money units',()=>{
 const refs={'01':.0025,'02':100,'05':4.3294766706,'06':4.3760319655,'08':4.2692994785,'09':-1.5,'10':100.47,'11':2,'13':95.6705233294,'14':800000,'15':1250000,'17':4000000,'18':-4000,'20':400,'21':-7500,'24':430,'25':2/(.005*99),'30':373.1077,'31':476.1905,'36':5/1.05,'39':10,'40':5/.99,'41':4.6,'45':5.01,'46':.5};
 // Choice 46 spells the half-unit as a decimal; all other answers begin with their numeric value.
 for(const[id,v]of Object.entries(refs))near(number(answer(id)),v,id==='30'||id==='31'?1e-4:1e-6);
 near(number(answer('a1')),30566,1e-9);assert.match(answer('b1'),/600,363/);const DB=5/1.05,N=500000*112*4/(78.352617*DB);near(N,600362.8442940202,1e-8);near(N/100*78.352617*DB,500000/100*112*4,1e-8);const qb=data.questions.find(q=>q.id==='ydr-b1');near(number(qb.options.find(o=>o.why.includes('verschiedenen Preisquoten')).text),Math.round(500000*4/DB),1e-9);near(number(qb.options.find(o=>o.why.includes('nur gleichen Marktwert')).text),Math.round(500000*112/78.352617),1e-9);
 const q=data.questions.find(q=>q.id==='ydr-a1');near(number(q.options.find(o=>o.why.includes('Clean Price')).text),2000000/100*97.4*6.2*.0025,1e-8);
 const main=run().risk;near(main.exactChange,-42123.637855657,1e-8);near(run({shock:300}).risk.exactChange,-119781.30111234264,1e-8);
 assert.ok(Math.abs(run({shock:300}).metrics[5][1]-run({shock:300}).metrics[6][1])>1);
});
test('risk terminology preserves unique entries, exact destinations and context-sensitive Macaulay shorthand',()=>{
 const gl=require('../finance-glossary.cjs'),find=t=>gl.find(g=>[g.term,...g.aliases].includes(t));
 for(const[term,section]of [['Modified Duration','modified'],['Money Duration','money'],['PVBP','pvbp'],['DV01','pvbp'],['Yield Duration','own-yield'],['Yield Coordinate','coordinate'],['Relative Zinssensitivität','modified'],['Central Yield Difference','finite'],['One-Sided PVBP','one-bp'],['Face Amount Held','position'],['Position Market Value','position'],['DV01 Matching','hedge'],['Price Normalization','modified'],['Taylor-Näherung','tangent']])assert.deepEqual(find(term)?.cfa,{unit:'duration',section},term);
 assert.equal(gl.filter(g=>g.term==='DV01').length,1);assert.equal(gl.filter(g=>g.term==='Money Duration').length,1);
 assert.deepEqual(find('Macaulay Duration').contextualAliases,[{label:'Duration',units:['bond-return']}]);assert.equal(find('Duration').term,'Modified Duration');
});
