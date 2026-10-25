const {test}=require('node:test'),assert=require('node:assert/strict'),M=require('../finance-models.cjs'),d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(u=>u.id==='swaps');
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),bank=d.questions.filter(q=>q.unit==='swaps'),near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<=1e-8+t*Math.max(1,Math.abs(a),Math.abs(b)),a+' vs '+b),defaults=Object.fromEntries(M.models.swapvalue.controls.map(c=>[c.key,c.value]));
test('both actual2027 swap outcomes have textbook explanations, independently authored training and two real reserved transfers',()=>{
 assert.equal(u.sections.length,32);assert.ok(blocks.filter(b=>typeof b==='string').join(' ').length>19500);
 for(const[k,n]of [['formula',43],['example',19],['table',6],['figure',6],['disclosure',13]])assert.equal(blocks.filter(b=>b.kind===k).length,n,k);
 assert.equal(bank.length,52);assert.equal(bank.filter(q=>q.pool==='practice').length,50);for(const pool of ['mock-a','mock-b'])assert.equal(bank.filter(q=>q.pool===pool).length,1);
 for(const o of d.coverage.find(c=>c.id==='swaps').objectives){assert.equal(o.practice.length,25);assert.equal(o.mockQuestions,1);assert.ok(o.sections.length>=18);}
 for(const q of bank){assert.ok(q.options.every(o=>o.why.length>=15),q.id);assert.ok(u.sections.some(s=>s.id===q.section));}assert.equal(new Set(bank.map(q=>q.stem)).size,bank.length);
 assert.equal(u.review.status,'draft');assert.equal(d.release,false);assert.ok(u.sources[0].url.endsWith('2027levelitopicoutline_online.pdf#page=24'));for(const site of ['cmegroup.com','bianchetti.org','bis.org','isda.org'])assert.ok(u.sources.some(s=>s.url.includes(site)));
 assert.equal(require('../finance-content/derivatives.cjs')[4].lab,'swapvalue');for(const id of ['futures','forward-value'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit==='swaps'));
});
// Reference via telescoping zero-coupon differences, rather than reproducing the model's projected-coupon sum.
function verify(p){
 const r=M.calculate('swapvalue',p),ps=[p.p1,p.p2,p.p3],A=ps.reduce((s,x)=>s+x,0),b=p.basis/10000,k=p.k/100,floatUnit=1-ps[2]+b*A,fair=floatUnit/A,fixUnit=k*A,expected=[fair*100,p.n*(floatUnit-fixUnit),p.n*floatUnit,p.n*fixUnit,A,p.n*A/10000];for(const[i,x]of expected.entries())near(r.metrics[i][1],x);
 assert.equal(r.projection.rows.length,3);assert.equal(r.stable.rows.length,4);let w=0,pv=0;for(const[i,row]of r.projection.rows.entries()){
  const start=i?ps[i-1]:1,end=ps[i],F=(start-end)/end+b;near(row[0],i+1);near(row[1],end);near(row[2],F*100);near(row[3],end/A);w+=row[3];near(row[4],p.n*F);near(row[5],p.n*k);near(row[6],row[4]-row[5]);near(row[7],row[6]*end);pv+=row[7];
 }near(w,1);near(pv,expected[1]);for(const[i,x]of [expected[2],expected[3],expected[1],-expected[1]].entries())near(r.stable.rows[i][1],x);
 near(r.marker[0],0);near(r.marker[1],expected[1]/1000);
 for(const[i,s]of r.series.entries())for(const[h,y]of s.points){const prices=ps.map((x,j)=>x*Math.exp(-h/100*(j+1))),ann=prices.reduce((s,x)=>s+x,0),bondFixed=p.n*(k*ann+prices[2]),bondFloat=p.n*(1+b*ann),value=(bondFloat-bondFixed)/1000;near(y,i===0?value:-value);assert.ok(y>=r.yRange[0]&&y<=r.yRange[1]);}
 return r;
}
test('729 curve/notional/fixed-rate/projection combinations reconcile all147258 model coordinates and both ledgers independently',t=>{
 let n=0,points=0;for(const amount of [0,1e6,1e7])for(const k of [-5,4,15])for(const p1 of [.5,.97,1.2])for(const p2 of [.5,.93,1.2])for(const p3 of [.5,.88,1.2])for(const basis of [-200,0,200]){const r=verify({n:amount,k,p1,p2,p3,basis});n++;points+=r.series.reduce((s,x)=>s+x.points.length,0);}assert.equal(n,729);assert.equal(points,147258);t.diagnostic(JSON.stringify({scenarios:n,modelCoordinates:points}));
});
test('controlled presets isolate old-rate, quantity, projection and curve effects while valid factor precision preserves every preset',()=>{
 for(const p of M.models.swapvalue.presets){verify(p.values);for(const c of M.models.swapvalue.controls){const value=p.values[c.key];assert.ok(value>=c.min&&value<=c.max);near((value-c.min)/c.step,Math.round((value-c.min)/c.step),1e-9);}}
 const run=p=>M.calculate('swapvalue',{...defaults,...p}).metrics.map(m=>m[1]),base=run({}),high=run({k:5}),double=run({n:2e6}),basis=run({basis:100}),zero=run({n:0});near(base[1],8800);near(high[1],-19000);near(basis[1],36600);near(double[0],base[0]);near(double[4],base[4]);for(const i of [1,2,3,5])near(double[i],2*base[i]);for(const i of [1,2,3,5])assert.equal(zero[i],0);near(zero[0],base[0]);near(zero[4],base[4]);assert.ok(!zero.some(v=>Object.is(v,-0)));
 const flat=run({p1:.96,p2:.9216,p3:.884736});near(flat[0],100*(1/.96-1));const negative=run({p1:1.01,p2:1.02,p3:1.03,k:-1});assert.ok(negative[0]<0);near(negative[1],600);
 const fair=base[0];near(run({k:fair})[1],0);near(run({k:defaults.k+.01})[1]-base[1],-base[5]);
 assert.equal(M.models.swapvalue.presets.length,8);for(const c of M.models.swapvalue.controls)for(const value of ['',NaN,Infinity,c.min-1,c.max+1])assert.throws(()=>M.calculate('swapvalue',{...defaults,[c.key]:value}));
});
test('all406 book coordinates match independent cash, discount, fixed-quote and floor references',t=>{
 const ps=[.97,.93,.88],A=2.78,K=.12/A,F=ps.map((p,i)=>((i?ps[i-1]:1)-p)/p),refs={
  'forward-par':(s,x)=>s===0?F[x-1]*100:K*100,
  'period-values':(s,x)=>s===0?1000*((x===1?1:ps[x-2])-ps[x-1]-K*ps[x-1]):0,
  'old-rate-value':(s,x)=>120-1000*x/100*A,
  'projection-change':(s,x)=>8.8+1000*A*x/10000,
  'curve-shock':(s,x)=>{const d=ps.map((p,i)=>p*Math.exp(-x/100*(i+1))),fixedBond=1000*(.04*d.reduce((s,p)=>s+p,0)+d[2]);return 1000-fixedBond;},
  'loan-floor':(s,x)=>s===0?5:100*(Math.max(x/100,0)+.01-(x/100-.04))
 };let n=0;for(const f of blocks.filter(b=>b.kind==='figure')){const key=Object.keys(refs).find(k=>f.id.endsWith('-'+k));assert.ok(key,f.id);for(const[i,s]of f.plot.series.entries())for(const[x,y]of s.points){near(y,refs[key](i,x));assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]&&y>=f.plot.y[0]&&y<=f.plot.y[1],f.id+' out of bounds');n++;}}assert.equal(n,406);t.diagnostic(JSON.stringify({bookCoordinates:n}));
});
test('worked period, reset, amortization, acquisition and hedge cases conserve money with their stated conventions',()=>{
 const A=2.78,K=.12/A;near(1e6*K*A,120000);near(1e6*(.12-.04*A),8800);near(1e6+(-991200),8800);near(.04+8800/(1e6*A),K);
 const amort=(1e6*.03+.5e6*.04)/(1e6*.97+.5e6*.93),constant=.07/(.97+.93);assert.ok(amort<constant);near(amort,50000/1435000);
 near(1e6*.04*(91/360-.25),111.11111111111);near(1e6*(.04*.98+.06*.93),95000);near(1e6*.05*(.98+.93),95500);near(95000-95500,-500);near(1e6*(1-.93),70000);
 near(10000-3000,7000);for(const L of [-.02,.03,.05,.08]){near(1e6*(L+.01)-1e6*(L-.04),50000);near(1e6*L+1e6*(.04-L),40000);}near(1e6*(Math.max(-.02,0)+.01)-1e6*(-.02-.04),70000);
 const price=(120*.95+100*.9+80*.85)/2.7;near(price,272/2.7);assert.ok(price>100);near(1e6*((106-100+2)/100-.05),30000);near(110000-1.2*100000,-10000);
 const table=blocks.find(b=>b.kind==='example'&&b.title.includes('Drei unterschiedliche')).steps.find(b=>b.kind==='table'),de=s=>Number(String(s).replaceAll('.','').replace(',','.').replace('−','-'));near(table.rows.reduce((s,r)=>s+de(r[4]),0),0,1e-5);for(const row of table.rows)near(de(row[2])+de(row[3]),de(row[1]),1e-8);
});
test('all22 numerical practice and actual reserved choices follow independent convention and cash references',t=>{
 const refs={'03':100*(.98*.02+.9*.06)/1.88,'05':20000,'06':7500,'07':1e6*.04/360,'11':5,'19':272/2.7,'21':30000,'22':-65000,'24':-10000,'28':8800,'29':-8800,'30':-19000,'31':36600,'32':17600,'34':-500,'36':7000,'38':100*8800/2780000,'39':278,'44':-15,'48':70000,'exam-a':180000,'exam-b':38600};
 for(const[id,x]of Object.entries(refs)){const q=bank.find(q=>q.id==='swp-'+id);assert.ok(q,id);const text=q.options[q.correct].text.replace(/[% .]+$/,''),dec=(text.split('.')[1]||'').length,value=Number(text.replaceAll(',',''));assert.ok(Math.abs(value-x)<=.50001*10**-dec+1e-8,id+': '+value+' vs '+x);}assert.equal(Object.keys(refs).length,22);t.diagnostic(JSON.stringify({numericalQuestions:22}));
 const reserved=bank.find(q=>q.id==='swp-exam-b');near(2e6*(.5*.06*.99+.05*.94),153400);near(2e6*.04*(.5*.99+.94),114800);assert.match(reserved.stem,/0\.25 years/);
});
test('twenty curated swap terms return to actual explanations and preserve broad annuity, barweights and spread contexts',()=>{
 const g=require('../finance-glossary.cjs'),c=require('../finance-cfa/glossary.cjs').filter(e=>e.cfa.unit==='swaps');assert.equal(c.length,20);assert.equal(new Set(g.map(e=>e.term)).size,g.length);for(const e of c){assert.ok(g.some(x=>x.term===e.term));assert.ok(u.sections.some(s=>s.id===e.cfa.section));}
 for(const label of ['Swaprate','Mark-to-Market','Pay-fixed','Receive-fixed','Nominalbetrag','Annuity','Barwertgewicht','PV01','Swapspread'])assert.ok(g.some(e=>e.contextualAliases?.some(a=>a.label===label&&a.units.includes('swaps'))),label);
 assert.equal(g.find(e=>e.term==='Annuität').cfa.unit,'bond-cashflows');assert.equal(g.find(e=>e.term==='Barwertgewicht').cfa.unit,'bond-return');assert.equal(g.find(e=>e.term==='Swapspread').cfa.unit,'fixed-yields');assert.equal(g.find(e=>e.term==='Total Return Swap').cfa.unit,'swaps');
});
