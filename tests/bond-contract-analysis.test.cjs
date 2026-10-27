const {test}=require('node:test'),assert=require('node:assert/strict');
const d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(u=>u.id==='bond-features'),M=require('../finance-models.cjs');
const sec=id=>u.sections.find(s=>s.id===id),near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<t,a+' vs '+b);
const number=s=>Number(String(s).replaceAll('.','').replace(',','.').replace('−','-').replace(/[^0-9.-]/g,''));
const defaults={ebitda:80,borrow:30,use:30,dividend:10,rate:6},run=p=>M.calculate('bondcovenants',{...defaults,...p});
// Pay claim layers from a finite estate, keeping each remaining claim and each cash pool.
function allocate(c,other=80){
 let assets=c+other,bankClaim=80,noteClaim=100,juniorClaim=40;
 const secured=Math.min(c,bankClaim);bankClaim-=secured;assets-=secured;
 const ratio=Math.min(1,assets/(bankClaim+noteClaim)),bankOther=bankClaim*ratio,note=noteClaim*ratio;
 assets-=bankOther+note;const junior=Math.min(juniorClaim,Math.max(0,assets));assets-=junior;
 return {bank:secured+bankOther,bond:note,junior,equity:Math.max(0,assets)};
}
test('bond instrument features cover the actual two 2027 outcomes with original cases and correctly reserved questions',()=>{
 assert.equal(u.sections.length,33);assert.equal(u.review.status,'checked');assert.equal(d.release,false);
 assert.match(u.sources[0].url,/2027levelitopicoutline_online\.pdf#page=19$/);
 const qs=d.questions.filter(q=>q.unit===u.id);assert.equal(qs.filter(q=>q.pool==='practice').length,42);
 for(const pool of ['mock-a','mock-b']){assert.equal(qs.filter(q=>q.pool===pool).length,1);assert.ok(d.inventory[pool].bonds<=require('../finance-cfa/engine.cjs').blueprint.bonds);}
 const c=d.coverage.find(c=>c.id===u.id);assert.deepEqual(c.objectives.map(o=>o.id),['bond-features-a','bond-features-b']);
 assert.ok(c.objectives.every(o=>o.sections.length>=15&&o.practice.length>=15&&o.mockQuestions));
 assert.equal(u.explorations[0].lesson,'bonds-01');assert.equal(require('../finance-content/bonds.cjs')[0].lab,'bondcovenants');
 assert.ok(u.sources.some(s=>s.url.includes('2024-cfa-level-i-errata.pdf#page=36')));
});
test('Auron nominal, issue proceeds and every scheduled coupon reconcile at issue and after two years',()=>{
 const rows=sec('schedule').blocks.find(b=>b.kind==='table').rows;assert.equal(rows.length,10);
 rows.forEach((r,i)=>{near(number(r[0]),(i+1)/2);near(number(r[1]),20);near(number(r[2]),i===9?1000:0);near(number(r[3]),20+(i===9?1000:0));});
 near(rows.reduce((sum,r)=>sum+number(r[3]),0),1200);near(100000*1000*.95,95000000);near(100000*20,2000000);
 near(40/950*100,4.2105263157894735);assert.equal(rows.filter(r=>number(r[0])>2).length,6);
 near(1000*(.035+.015)*.5,25);near(1000*(.045+.015)*.5,30);
 near(80*.06+100*.04+40*.08,12);
 const vote=d.questions.find(q=>q.id==='bfi-40');assert.equal(vote.options[vote.correct].text,'60.00%.');
 near((40+20+15)/100,.75);near((20+15+25)/100,.60);
});
test('Auron calculator sources, uses and all four covenant rows agree for project, retention and stress presets',()=>{
 const base=run(),retained=run({use:0}),stress=run({ebitda:50});
 assert.deepEqual(base.metrics.map(m=>m[1]),[250,15,235/80,5,80/13.8]);
 near(retained.metrics[1][1],45);near(retained.metrics[2][1],205/80);near(retained.metrics[3][1],35);
 near(stress.metrics[2][1],4.7);near(stress.metrics[3][1],-85);near(stress.metrics[4][1],50/13.8);
 assert.deepEqual(base.covenants.map(r=>r[3]),[true,true,true,true]);assert.deepEqual(stress.covenants.map(r=>r[3]),[false,false,true,true]);
 for(const r of [base,retained,stress]){
  const f=r.funding;near(f.opening+f.borrow,f.use+f.dividend+f.closing);
  assert.deepEqual(r.projection.rows.map(row=>row[3]),r.covenants.map(row=>row[3]?'Erfüllt':'Rechnerisch verletzt'));
 }
 assert.equal(M.models.bondcovenants.presets.length,3);
 near(run({use:0,dividend:0}).metrics[2][1],200/80);
});
test('all 32 covenant-control corners conserve funding or reject physically unavailable cash, with finite untruncated breach results',()=>{
 let valid=0,rejected=0,breaches=0;
 for(const ebitda of [20,140])for(const borrow of [0,150])for(const use of [0,150])for(const dividend of [0,100])for(const rate of [0,15]){
  const p={ebitda,borrow,use,dividend,rate},cash=25+borrow-use-dividend;
  if(cash<0){assert.throws(()=>run(p),/Zahlungen.*verfügbare/);rejected++;continue;}
  const r=run(p),debt=220+borrow,net=debt-Math.min(cash,50),interest=12+borrow*rate/100;valid++;
  near(r.metrics[0][1],debt);near(r.metrics[1][1],cash);near(r.metrics[2][1],net/ebitda);near(r.metrics[3][1],3*ebitda-net);near(r.metrics[4][1],ebitda/interest);
  const checks=[net<=3*ebitda,ebitda>=4*interest,cash>=10,dividend<=20];assert.deepEqual(r.covenants.map(x=>x[3]),checks);
  if(checks.some(v=>!v))breaches++;for(const[x,y]of r.points){assert.ok(x>=0&&x<=Math.min(100,25+borrow-use)+1e-9);near(y,3*ebitda-debt+Math.min(25+borrow-use-x,50));}
 }
 assert.equal(valid,16);assert.equal(rejected,16);assert.ok(breaches>0);
 for(const p of [{ebitda:0},{rate:-1},{borrow:Infinity},{use:NaN}])assert.throws(()=>M.covenantPlan({...defaults,...p}));
});
test('dividend capacity uses every condition and cash retention is not the same as gross borrowing capacity',()=>{
 const permitted=(borrow,use,dividend)=>{const c=25+borrow-use-dividend;if(c<0)return false;return run({borrow,use,dividend}).covenants.every(r=>r[3]);};
 const maxDiv=(borrow,use)=>Math.max(...Array.from({length:101},(_,x)=>x).filter(div=>permitted(borrow,use,div)));
 assert.equal(maxDiv(30,30),15);assert.equal(maxDiv(20,20),15);assert.equal(maxDiv(30,20),20);
 const borrowings=Array.from({length:151},(_,b)=>b);
 assert.equal(Math.max(...borrowings.filter(b=>permitted(b,b,0))),45);
 assert.equal(Math.max(...borrowings.filter(b=>permitted(b,0,0))),70);
 const edge=run({dividend:15});near(edge.metrics[1][1],10);near(edge.metrics[3][1],0);
 const breach=run({dividend:16});assert.deepEqual(breach.covenants.map(c=>c[3]),[false,true,false,true]);
 assert.throws(()=>run({dividend:26}),/Zahlungen.*verfügbare/);
 const noCash=run({borrow:125,use:150,dividend:0});
 near(noCash.metrics[1][1],0);
 assert.ok(noCash.points.every(([x,y])=>x===0&&Number.isFinite(y)),'zero remaining cash gives a finite degenerate dividend domain');
 assert.deepEqual(noCash.covenants.map(r=>r[3]),[false,true,false,true]);
});
test('all 310 contract-figure points reconcile distribution, entity boundaries and signed covenant headroom',()=>{
 const figures=u.sections.flatMap(s=>s.blocks.filter(b=>b.kind==='figure'));assert.equal(figures.length,3);let n=0;
 for(const f of figures)for(const[index,s]of f.plot.series.entries())for(const[x,y]of s.points){
  n++;assert.ok(x>=f.plot.x[0]-1e-9&&x<=f.plot.x[1]+1e-9);assert.ok(y>=f.plot.y[0]-1e-9&&y<=f.plot.y[1]+1e-9);
  if(f.id.endsWith('collateral-recoveries')){const a=allocate(x);near(y,index===0?a.bank/80*100:index===1?a.bond:a.junior/40*100);near(a.bank+a.bond+a.junior+a.equity,x+80);}
  else if(f.id.endsWith('structural-recoveries')){
   const operating=Math.min(x,80),upstream=x-operating,holding=Math.min(upstream,100),equity=upstream-holding;near(operating+holding+equity,x);
   near(y,index===0?operating/80*100:holding);
  }else if(f.id.endsWith('dividend-headroom'))near(y,index?0:3*80-(250-(25-x)));
  else assert.fail(f.id);
 }assert.equal(n,310);
});
test('security redistribution at a constant estate preserves total payments and can reduce the senior note recovery',()=>{
 const a=allocate(60,80),b=allocate(90,50);near(a.bank,73.33333333333333);near(a.bond,66.66666666666667);near(b.bank,80);near(b.bond,60);
 near(b.bank-a.bank,a.bond-b.bond);near(Object.values(a).reduce((s,x)=>s+x,0),140);near(Object.values(b).reduce((s,x)=>s+x,0),140);
 const rows=sec('recovery').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 near(number(rows[0][1]),a.bank,.000001);near(number(rows[1][1]),a.bond,.000001);near(number(rows[0][2]),a.bank/80*100,.000001);near(number(rows[1][2]),a.bond,.000001);
 assert.notEqual(a.bond/100,140/220);near(100*140/180,77.77777777777777);
});
test('specific contract glossary returns preserve the existing IFRS covenant interpretation and five chapter backlinks',()=>{
 const g=require('../finance-glossary.cjs'),find=word=>g.find(g=>[g.term,...g.aliases].includes(word));
 for(const[word,target]of [['Nennwert','nominal'],['Coupon','coupon'],['Coupon Rate','coupon'],['Bond Indenture','indenture'],['Bond Covenant','indenture'],['Affirmative Covenant','affirmative'],['Negative Covenant','negative'],['Negative Pledge','negative-pledge'],['Trustee','indenture'],['Covenant Headroom','funding'],['Eligible Cash','definitions'],['Maintenance Covenant','maintenance-incurrence'],['Incurrence Covenant','maintenance-incurrence'],['Basket','baskets'],['Add-back','baskets'],['Event of Default','default'],['Acceleration','default'],['Cross-Default','cross-default'],['Cross-Acceleration','cross-default'],['Grace Period','default'],['Waiver','consent'],['Pari Passu','guarantees'],['Structural Subordination','structural'],['Contractual Subordination','security'],['Secured Bond','security'],['Unsecured Bond','security'],['Senior Unsecured','security'],['Deficiency Claim','recovery'],['Lien','security'],['Guarantor','guarantees'],['Obligor','issuer'],['Remaining Maturity','maturity'],['Principal-Weighted Vote','consent'],['Bullet Bond','schedule'],['Vertragliche Zinsdeckung','funding'],['Netto-Leverage','definitions']])assert.deepEqual(find(word).cfa,{unit:u.id,section:target});
 assert.deepEqual(find('Covenant').cfa,{unit:'balance-sheet',section:'maturity-provisions'});
 assert.ok(find('Bond Covenant').contextualAliases.some(a=>a.label==='Covenants'&&a.units.includes(u.id)));
 assert.deepEqual(find('Recovery Rate').cfa,{unit:'stakeholders',section:'seniority'});
 for(const id of ['stakeholders','capital-structure','balance-sheet','returns','research'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit===u.id));
});
