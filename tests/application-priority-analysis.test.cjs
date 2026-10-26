const {test}=require('node:test'),assert=require('node:assert/strict'),{compile}=require('../finance-cfa/compile.cjs'),priorities=require('../finance-cfa/application-links.cjs'),d=compile();
const close=(a,b,t=1e-7)=>assert.ok(Math.abs(a-b)<=t,a+' != '+b),section=(id,s)=>d.units.find(u=>u.id===id).sections.find(x=>x.id===s),num=s=>Number(String(s).replaceAll('.','').replace(',','.').replace('%','').trim());
test('all curated priorities lead to worked cases of the exact objective and preserve the other applications',()=>{
 assert.equal(Object.keys(priorities).length,21);for(const[id,target]of Object.entries(priorities)){const u=d.units.find(u=>id===u.id+'-'+id.slice(-1)),c=d.coverage.find(c=>c.id===u.id).objectives.find(o=>o.id===id),original=u.sections.filter(s=>s.objectives.includes(id.slice(-1))&&s.blocks.some(b=>b.kind==='example'||b.kind==='disclosure'&&b.blocks.some(b=>b.kind==='example'))).map(s=>s.id);assert.equal(c.applications[0],target);assert.deepEqual(new Set(c.applications),new Set(original));assert.ok(section(u.id,target).blocks.some(b=>b.kind==='example'));}
});
test('unknown objectives, wrong-objective sections and explanatory sections without a worked case cannot enter the link registry',()=>{
 try{priorities['not-a-real-unit-a']='anything';assert.throws(()=>compile(),/unbekanntes Lernziel/);}finally{delete priorities['not-a-real-unit-a'];}
 const old=priorities['cashflow-preparation-d'];try{priorities['cashflow-preparation-d']='customer-cash';assert.throws(()=>compile(),/kein passender ausgearbeiteter Fall/);priorities['cashflow-preparation-d']='scope';assert.throws(()=>compile(),/kein passender ausgearbeiteter Fall/);}finally{priorities['cashflow-preparation-d']=old;}
});
test('a priority-only edit changes the material version while every question revision remains stable',()=>{
 const old=priorities['binomial-b'];try{priorities['binomial-b']='physical';const alternate=compile();assert.notEqual(alternate.version,d.version);assert.deepEqual(alternate.units,d.units);assert.deepEqual(alternate.questions,d.questions);assert.equal(alternate.coverage.find(c=>c.id==='binomial').objectives.find(o=>o.id==='binomial-b').applications[0],'physical');}finally{priorities['binomial-b']=old;}
});
test('the IFRS-18 comparison reconciles direct and indirect operating cash and preserves the whole cash movement',()=>{
 const indirect=170+40-10-30-10+15+5-40,direct=970-595-195-40;close(indirect,direct);close(direct,140);
 for(const interest of [0,10,20,30]){const usCFO=indirect-interest,usCFF=-5,ifrsCFO=indirect,ifrsCFF=-5-interest;close(usCFO-45+usCFF,ifrsCFO-45+ifrsCFF);close(ifrsCFO-usCFO,interest);}
 const x=section('cashflow-preparation','ifrs18-case').blocks.find(b=>b.kind==='example'),table=x.steps.find(b=>b.kind==='table');assert.equal(x.steps.filter(b=>b.kind==='formula').length,3);assert.deepEqual(table.rows.map(r=>[r[0],r[1],r[2]]),[['CFO','120','140'],['CFI','−45','−45'],['CFF','−5','−25'],['Gesamte Geldänderung','70','70']]);close(120-45-5,70);close(140-45-25,70);
});
test('the common-size bridge separates growth, margin change and the operating-cost offset',()=>{
 const x=section('income-statement','common-size').blocks.find(b=>b.kind==='example'),rows=x.steps.find(b=>b.kind==='table').rows,one=rows.map(r=>num(r[1])),two=rows.map(r=>num(r[2])),[s1,c1,gp1,o1,ebit1]=one,[s2,c2,gp2,o2,ebit2]=two;
 close(s1-c1,gp1);close(s2-c2,gp2);close(gp1-o1,ebit1);close(gp2-o2,ebit2);const dg=gp2/s2-gp1/s1,dc=o2/s2-o1/s1,dm=ebit2/s2-ebit1/s1;close(dg,-.05);close(dc,-.03);close(dm,dg-dc);close(dm,-.02);close(s2/s1-1,.20);close(ebit2/ebit1-1,.08);assert.ok(ebit2>ebit1&&ebit2/s2<ebit1/s1);
});
test('the three curve comparisons reconstruct par prices and agree with the unchanged plotted endpoints',()=>{
 const x=section('yield-curves','rising').blocks.find(b=>b.kind==='example'),rows=x.steps.find(b=>b.kind==='table').rows,sets=[[.03,.04,.05],[.05,.04,.03],[.03,.06,.04]];
 for(const[i,spots]of sets.entries()){const factors=spots.map((s,j)=>(1+s)**(-j-1)),coupon=(1-factors[2])/factors.reduce((a,b)=>a+b),forward=factors[1]/factors[2]-1;close(factors.reduce((a,v,j)=>a+100*(coupon+(j===2?1:0))*v,0),100);close((1+spots[1])**2*(1+forward),(1+spots[2])**3);close(num(rows[i][2]),100*coupon,5.1e-7);close(num(rows[i][3]),100*spots[2]);close(num(rows[i][4]),100*forward,5.1e-7);const chart=section('yield-curves',['rising','falling','hump'][i]).blocks.find(b=>b.kind==='figure');close(chart.plot.series[1].points.at(-1)[1],100*coupon);close(chart.plot.series[2].points.at(-1)[1],100*forward);}
});
test('the standalone forward question supplies its own market inputs and distinguishes value from delivery quote',()=>{
 const q=d.questions.find(q=>q.id==='pcp-29');assert.match(q.stem,/non-dividend-paying stock costs 100/);assert.match(q.stem,/discount factor.+0\.95/);assert.match(q.stem,/delivery amount 100/);assert.doesNotMatch(q.stem,/that market|preceding|previous/);
 const spot=100,discount=.95,strike=100,fair=spot/discount,value=spot-strike*discount;close(Number.parseFloat(q.options[q.correct].text),value);close(discount*(fair-strike),value);close(spot-fair*discount,0);assert.ok(q.options.some(o=>Math.abs(Number.parseFloat(o.text)-fair)<1e-6));assert.ok(q.solution[0].symbols.some(s=>s.tex==='D(t,T)'));
});
