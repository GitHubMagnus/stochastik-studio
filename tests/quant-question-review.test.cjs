const {test}=require('node:test'),assert=require('node:assert/strict'),d=require('../finance-cfa/compile.cjs').compile(),near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<t,a+' != '+b),q=id=>d.questions.find(q=>q.id===id);
test('the drift example reconciles conditional probabilities through expected default counts in each population',()=>{
 const cases=[{L:800,H:200,pL:.01,pH:.1,expected:28},{L:500,H:500,pL:.01,pH:.1,expected:55},{L:800,H:200,pL:.01,pH:.2,expected:48}];
 for(const c of cases){const defaults=c.L*c.pL+c.H*c.pH;near(defaults,c.expected);near(defaults/(c.L+c.H),c.expected/1000);}
 near(cases[0].pH,cases[1].pH);near(cases[0].H,cases[2].H);assert.notEqual(cases[0].pH,cases[2].pH);
 const s=d.units.find(u=>u.id==='data-science').sections.find(s=>s.id==='overfitting'),x=s.blocks.find(b=>b.kind==='example'),formulas=[...s.blocks.filter(b=>b.kind==='formula'),...x.steps.filter(b=>b.kind==='formula')];assert.equal(formulas.length,4);for(const f of formulas){assert.ok(f.mathml.includes('<math'));assert.ok(f.symbols.every(s=>s.meaning&&s.mathml.includes('<math')));}assert.ok(formulas[1].tex.includes('0{,}028'));assert.ok(formulas[2].tex.includes('0{,}055'));assert.ok(formulas[3].tex.includes('0{,}048'));
 const glossary=require('../finance-glossary.cjs'),g=glossary.find(g=>g.term==='Covariate Shift');assert.deepEqual(g.cfa,{unit:'data-science',section:'overfitting'});assert.ok(g.definition.includes('unverändertem'));for(const term of ['Distribution Shift','Reweighting'])assert.deepEqual(glossary.find(g=>g.term===term).cfa,g.cfa);assert.ok(d.units.find(u=>u.id==='data-science').related.some(r=>r.unit==='distributions'&&r.section==='conditioning'));
});
test('exhaustive paired bootstrap retains dependence, independent columns remove it, and full permutations give no covariance variation',()=>{
 const x=[-1,0,1],y=[-2,0,2],draws=[];for(let a=0;a<3;a++)for(let b=0;b<3;b++)for(let c=0;c<3;c++)draws.push([a,b,c]);
 const cov=(a,b)=>{const ma=a.reduce((n,v)=>n+v,0)/a.length,mb=b.reduce((n,v)=>n+v,0)/b.length;return a.reduce((n,v,i)=>n+(v-ma)*(b[i]-mb),0)/(a.length-1);},paired=draws.map(r=>cov(r.map(i=>x[i]),r.map(i=>y[i]))),independent=draws.flatMap(a=>draws.map(b=>cov(a.map(i=>x[i]),b.map(i=>y[i]))));
 near(cov(x,y),2);near(paired.reduce((n,v)=>n+v,0)/paired.length,4/3);near(independent.reduce((n,v)=>n+v,0)/independent.length,0);assert.ok(new Set(paired).size>1);
 const permutations=draws.filter(r=>new Set(r).size===3);assert.equal(permutations.length,6);assert.ok(permutations.every(r=>cov(r.map(i=>x[i]),r.map(i=>y[i]))===2));assert.ok(q('sim-b1').stem.includes('iid nonparametric'));assert.match(q('sim-b1').options[q('sim-b1').correct].text,/paired rows with replacement/);
});
test('rescaling X with the same Y keeps OLS residual error fixed and changes the conventional slope standard error inversely',()=>{
 const x=[-2,-1,0,1,2],noise=[1,-2,2,-2,1],y=x.map((v,i)=>3+2*v+noise[i]),fit=a=>{const n=a.length,m=a.reduce((s,v)=>s+v,0)/n,my=y.reduce((s,v)=>s+v,0)/n,sxx=a.reduce((s,v)=>s+(v-m)**2,0),sxy=a.reduce((s,v,i)=>s+(v-m)*(y[i]-my),0),beta=sxy/sxx,alpha=my-beta*m,sse=a.reduce((s,v,i)=>s+(y[i]-alpha-beta*v)**2,0),ser=Math.sqrt(sse/(n-2));return {beta,ser,se:ser/Math.sqrt(sxx),sxx};},a=fit(x),b=fit(x.map(v=>2*v));
 near(a.beta,2);near(b.beta,1);near(a.ser,b.ser);near(b.sxx/a.sxx,4);near(b.se/a.se,.5);assert.match(q('rg-b2').options[q('rg-b2').correct].text,/smaller conventional standard error/);
});
