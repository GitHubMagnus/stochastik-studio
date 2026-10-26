const {test}=require('node:test'),assert=require('node:assert/strict'),{compile}=require('../finance-cfa/compile.cjs'),d=compile();
const near=(a,b,t=1e-7)=>assert.ok(Math.abs(a-b)<=t,a+' != '+b),flat=a=>a.flatMap(b=>typeof b==='string'?[]:[b,...flat(b.blocks||b.steps||[])]);
const cases=[['capital-allocation','types','a'],['ethics-foundations','pressure','f'],['fiscal','policy-map','a'],['fx-markets','capital-controls','c'],['leases-compensation','lease-comparison','c'],['reporting-quality','spectrum','b'],['reporting-quality','incentives','d'],['reporting-quality','discipline','e'],['standard-i','controls','b'],['standard-ii','controls','b'],['standard-iv','controls','b'],['standard-v','retention-controls','b']];
test('all 340 objectives separately link authored explanations, worked applications and independent practice',()=>{
 let count=0;for(const c of d.coverage){const u=d.units.find(u=>u.id===c.id);for(const o of c.objectives){count++;assert.ok(o.sections.length&&o.applications.length&&o.practice.length,o.id);for(const section of o.applications){const s=u.sections.find(s=>s.id===section);assert.ok(s.objectives.includes(o.id.slice(-1)));assert.ok(flat(s.blocks).some(b=>b.kind==='example'),o.id);}for(const id of o.practice){const q=d.questions.find(q=>q.id===id);assert.equal(q.pool,'practice');assert.ok(q.objectives.includes(o.id));}}}assert.equal(count,340);
 for(const[id,section,letter]of cases){const c=d.coverage.find(c=>c.id===id).objectives.find(o=>o.id===id+'-'+letter);assert.ok(c.applications.includes(section));const s=d.units.find(u=>u.id===id).sections.find(s=>s.id===section),x=s.blocks.filter(b=>b.kind==='example').at(-1);assert.ok(x.steps.length>=3);assert.ok(x.given.length>120);assert.ok(x.conclusion.length>80);}
});
test('mandatory project alternatives reconcile dated costs and the lower upfront cost does not determine the choice',()=>{
 const discount=[1,2,3].map(t=>Math.pow(1.1,-t)),a=[180,20,20,20],b=[110,50,50,50],pv=c=>c.reduce((n,x,t)=>n+x/1.1**t,0);
 near(pv(a),229.7370398);near(pv(b),234.3425995);assert.ok(a[0]>b[0]&&pv(a)<pv(b));near(pv(b)-pv(a),-70+30*discount.reduce((n,x)=>n+x,0));
 const x=d.units.find(u=>u.id==='capital-allocation').sections.find(s=>s.id==='types').blocks.find(b=>b.kind==='example'),f=x.steps.filter(b=>b.kind==='formula');assert.ok(f[0].tex.includes('229.7370398'));assert.ok(f[1].tex.includes('234.3425995'));assert.ok(x.given.includes('keinen Restwert'));
});
test('the reserve requirement increases the cost of usable funding without creating an additional loan receipt',()=>{
 for(const q of [0,.2,.5]){const principal=1000,interest=.05*principal,usable=principal*(1-q),ending=principal+interest-principal*q,rate=ending/usable-1;near(rate,.05/(1-q));near(usable-ending/(1+rate),0);}
 const s=d.units.find(u=>u.id==='fx-markets').sections.find(s=>s.id==='capital-controls'),x=s.blocks.find(b=>b.kind==='example'),table=x.steps.find(b=>b.kind==='table');assert.equal(table.rows[0].at(-1),'800');assert.equal(table.rows[1].at(-1),'−850');assert.ok(x.steps.find(b=>b.kind==='formula').tex.includes('6.25'));assert.ok(x.given.includes('Darlehenswährung'));
});
test('the fiscal and monetary cases keep government purchases, financing and the bank balance sheet distinct',()=>{
 near(50-20,30);const cb={assets:100,reserveLiabilities:100},bank={bonds:-100,reserves:100},issuer={newProceeds:0,newDebt:0};near(cb.assets-cb.reserveLiabilities,0);near(bank.bonds+bank.reserves,0);near(issuer.newProceeds,0);const x=d.units.find(u=>u.id==='fiscal').sections.find(s=>s.id==='policy-map').blocks.find(b=>b.kind==='example');assert.ok(x.steps.find(b=>b.kind==='formula').tex.includes('50-20=30'));assert.equal(x.steps.find(b=>b.kind==='table').rows.length,3);
});
test('the lease comparison reconciles debt, both right-of-use paths, first-year expenses and lifetime payments',()=>{
 const pv=[1,2,3].reduce((n,t)=>n+3000/1.1**t,0);let debt=pv,fin=pv,op=pv,totalFin=0,totalOp=0;
 for(let t=1;t<=3;t++){const interest=debt*.1,amortization=pv/3;debt+=interest-3000;fin-=amortization;op-=3000-interest;totalFin+=interest+amortization;totalOp+=3000;if(t===1){near(debt,5206.61157024793);near(fin,4973.70398196844);near(op,debt);near(interest+amortization,3232.907588279488);}}
 near(debt,0);near(fin,0);near(op,0);near(totalFin,9000);near(totalOp,9000);const x=d.units.find(u=>u.id==='leases-compensation').sections.find(s=>s.id==='lease-comparison').blocks.find(b=>b.kind==='example');assert.ok(x.steps.some(b=>typeof b==='string'&&b.includes('5206,61')));assert.ok(x.steps.some(b=>typeof b==='string'&&b.includes('4973,70')));
});
test('release checks reject an objective with explanations and training but no worked application',()=>{
 const u=require('../finance-cfa/units/ethics-foundations.cjs'),s=u.sections.find(s=>s.id==='pressure'),saved=s.blocks;
 try{s.blocks=s.blocks.filter(b=>typeof b!=='object'||b.kind!=='example');assert.throws(()=>compile({release:true}),/Offene Lernziele: ethics-foundations-f/);}finally{s.blocks=saved;}
 assert.equal(d.release,false);assert.equal(d.coverage.flatMap(c=>c.objectives).filter(o=>o.applications.length).length,340);
});
