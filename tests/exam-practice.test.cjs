const {test}=require('node:test'),assert=require('node:assert/strict'),E=require('../finance-cfa/engine.cjs'),d=require('../finance-cfa/compile.cjs').compile(),Skills=require('../finance-cfa/skills-ui.js');
const near=(a,b,t=1e-7)=>assert.ok(Math.abs(a-b)<=t,a+' != '+b),sum=a=>a.reduce((s,x)=>s+x,0);
test('mixed timed sets cover all ten topics, respect approximate weights, prioritize unseen questions and exclude all four reserved pools',()=>{
 const practice=d.questions.filter(q=>q.pool==='practice'),history=practice.filter(q=>q.topic==='ethics').slice(0,20).map(q=>({id:q.id})),seen=new Set(history.map(x=>x.id));
 for(const n of [10,20,40]){const s=E.createDrill(d.questions,n,history,1000,()=>.31),questions=s.items.map(id=>d.questions.find(q=>q.id===id)),counts=Object.fromEntries(Object.keys(E.blueprint).map(t=>[t,questions.filter(q=>q.topic===t).length]));assert.equal(new Set(s.items).size,n);assert.ok(questions.every(q=>q.pool==='practice'&&!seen.has(q.id)));assert.ok(Object.values(counts).every(v=>v>=1));for(const [t,v]of Object.entries(counts))assert.ok(Math.abs(v-n*E.blueprint[t]/180)<1,t);assert.equal(s.deadline,1000+n*90000);}
 for(const n of [0,9,15,180])assert.throws(()=>E.createDrill(d.questions,n));
 assert.throws(()=>E.createDrill(d.questions.filter(q=>q.topic!=='bonds'),10),/Zu wenige/);
});
test('timed-set answers, confidence and flags restore; elapsed wall time closes the attempt and prevents later answers',()=>{
 const original=E.createDrill(d.questions,10,[],1000,()=>.23),copy=JSON.stringify(original);let s=E.drillTransition(original,{type:'answer',choice:1},1200);s=E.drillTransition(s,{type:'confidence',value:'guess'},1300);s=E.drillTransition(s,{type:'flag'},1400);s=E.drillTransition(s,{type:'navigate',position:1},1500);
 assert.equal(JSON.stringify(original),copy);const restored=E.restoreDrill(JSON.stringify(s),d.questions,1600);assert.deepEqual(restored,s);const expired=E.drillTransition(restored,{type:'answer',choice:2},s.deadline+1);assert.equal(expired.phase,'finished');assert.equal(expired.ended,s.deadline);assert.equal(Object.keys(expired.answers).length,1);assert.equal(expired.answers[s.items[1]],undefined);
 assert.deepEqual(E.drillTransition(expired,{type:'clear'},s.deadline+2),expired);const grade=E.grade(d.questions,s.items,expired.answers,expired.confidence);assert.equal(grade.unanswered,9);assert.equal(grade.total,10);
 const cleared=E.drillTransition(s,{type:'navigate',position:0},1700);assert.equal(Object.keys(E.drillTransition(cleared,{type:'clear'},1800).answers).length,0);
 const submitted=E.drillTransition(s,{type:'finish'},2000);assert.equal(submitted.ended,2000);assert.ok(E.restoreDrill(submitted,d.questions,2100));
});
test('invalid timed states and changed question revisions do not erase unrelated valid history or compatible legacy exams',()=>{
 const s=E.createDrill(d.questions,10,[],1000,()=>.4),q=d.questions.find(q=>q.id===s.items[0]);
 for(const patch of [{items:s.items.slice(1)},{items:Array(10).fill(s.items[0])},{deadline:s.deadline+1},{answers:[]},{answers:{unknown:1}},{flags:{[q.id]:1}},{confidence:{[q.id]:'certain'}},{recorded:true},{phase:'finished',ended:s.deadline+1},{position:10}])assert.equal(E.restoreDrill({...s,...patch},d.questions,2000),null);
 const reserved=d.questions.find(q=>q.pool==='mock-c');assert.equal(E.restoreDrill({...s,items:[reserved.id,...s.items.slice(1)]},d.questions,2000),null);
 const exam=E.createExam(d.questions,'mock-a',1000),history=[{id:q.id,at:1500,selected:q.correct,version:d.version,revision:q.revision}],saved={schema:2,version:'old-material',questionVersions:Object.fromEntries(d.questions.map(q=>[q.id,q.revision])),drill:s,exam,history};
 const keep=E.reconcile(saved,d.questions,'new-material',2000);assert.deepEqual(keep.drill,s);assert.deepEqual(keep.exam,exam);assert.equal(keep.history.length,1);assert.equal(keep.updated,false);
 const changed=d.questions.map(x=>x.id===q.id?{...x,revision:'changed'}:x),reset=E.reconcile(saved,changed,'new-content',2000);assert.equal(reset.drill,null);assert.deepEqual(reset.exam,exam);assert.equal(reset.updated,true);
 const bad=E.reconcile({...saved,exam:{items:{every:1}},drill:{items:{every:1}}},d.questions,'new-material',2000);assert.equal(bad.history.length,1);assert.equal(bad.drill,null);assert.equal(bad.exam,null);
 for(const event of [{type:'answer',choice:3},{type:'navigate',position:-1},{type:'confidence',value:'fake'}])assert.throws(()=>E.drillTransition(s,event,2000));
});
test('calculator workshop outcomes match independently recomputed cash ledgers and preserve both device routes',()=>{
 const byId=new Map(d.workshop.examples.map(x=>[x.id,x]));
 const pv=(flows,r)=>sum(flows.map((x,i)=>x/(1+r)**i));
 const expected={'annual-pv':-pv([0,4,4,104],.05),'semi-pv':-pv([0,3,3,3,103],.04),'due-pv':-pv([100,100,100],.1),'payment':-1000/sum([1,2,3,4].map(i=>1/1.05**i)),'npv':pv([-100,30,50,60],.1),'irr-zero':(Math.sqrt(121/100)-1)*100,'effective':(1.02**4-1)*100,'sample-sd':Math.sqrt(sum([2,4,6].map(x=>(x-4)**2))/2),'yield':6};
 assert.equal(byId.size,9);for(const [id,n]of Object.entries(expected)){const ex=byId.get(id);near(ex.answer,n);assert.ok(ex.ba.length>=3&&ex.hp.length>=3);assert.ok(ex.math.mathml.includes('<math'));assert.ok(ex.math.symbols.every(s=>s.meaning.length>10));}
 assert.equal(d.workshop.checks.length,8);assert.ok(new Set(d.workshop.checks.map(q=>q.correct)).size>1);
});
test('calculator answer parsing accepts decimal comma and rejects partial, nonfinite or ambiguous input',()=>{
 for(const [s,n]of [['-97,28',-97.28],[' 8.243 ',8.243],['.5',.5],['+2',2]])assert.equal(Skills.parseAnswer(s),n);
 for(const s of ['', 'Infinity','1e5','1,000.50','8%','12junk','--1','9'.repeat(400)])assert.equal(Skills.parseAnswer(s),null);
});

test('binomial skewness is independently verified from every probability mass and the new mirror table',()=>{
 const section=d.units.find(u=>u.id==='distributions').sections.find(s=>s.id==='discrete'),flat=xs=>xs.flatMap(x=>typeof x==='string'?[]:[x,...flat(x.blocks||x.steps||[])]),blocks=flat(section.blocks),table=blocks.find(x=>x.kind==='table'&&x.headers.includes('Schiefe'));
 const factorial=n=>n<2?1:n*factorial(n-1);
 for(const p of [.2,.5,.8]){const pmf=Array.from({length:11},(_,k)=>factorial(10)/factorial(k)/factorial(10-k)*p**k*(1-p)**(10-k)),mean=sum(pmf.map((v,k)=>k*v)),variance=sum(pmf.map((v,k)=>(k-mean)**2*v)),skew=sum(pmf.map((v,k)=>(k-mean)**3*v))/variance**1.5;near(sum(pmf),1);near(mean,10*p);near(variance,10*p*(1-p));near(skew,(1-2*p)/Math.sqrt(10*p*(1-p)));assert.equal(Math.sign(Math.abs(skew)<1e-12?0:skew),p<.5?1:p>.5?-1:0);}
 assert.ok(blocks.some(b=>b.kind==='formula'&&b.tex.includes('gamma_1')&&b.symbols.length===3));assert.ok(JSON.stringify(section).includes('nicht als Quotient definiert'));assert.ok(table,'the three-case comparison is present');
});

test('finite return states separate correlation, covariance and peer betas in the new CAPM comparison',()=>{
 const m=[-.2,-.2,.2,.2],noise=[-1,1,-1,1],variance=x=>sum(x.map(v=>v*v))/x.length,cov=x=>sum(x.map((v,i)=>v*m[i]))/x.length;
 for(const [beta,sigma,k]of [[.25,.1,.035],[.75,.3,.065]]){const residual=Math.sqrt(sigma*sigma-beta*beta*variance(m)),r=m.map((v,i)=>beta*v+residual*noise[i]);near(variance(r),sigma*sigma);near(cov(r)/variance(m),beta);near(cov(r)/(Math.sqrt(variance(r)*variance(m))),.5);near(.02+beta*.06,k);}
 const disclosure=d.units.find(u=>u.id==='multiples').sections.find(s=>s.id==='peers').blocks.find(b=>b.kind==='disclosure'&&b.title.startsWith('Beta ist mehr'));
 assert.ok(disclosure);assert.equal(disclosure.blocks[0].symbols.length,5);const example=disclosure.blocks[1];assert.deepEqual(example.steps.find(b=>b.kind==='table').rows,[['A','0,5','0,25','3,5 %'],['B','0,5','0,75','6,5 %']]);
});
