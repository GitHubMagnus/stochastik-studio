const {test}=require('node:test'),assert=require('node:assert/strict');
const E=require('../finance-cfa/engine.cjs'),d=require('../finance-cfa/compile.cjs').compile();
const row=(q,at,correct=true)=>({id:q.id,topic:q.topic,selected:correct?q.correct:(q.correct+1)%3,correct,confidence:'sure',objectives:q.objectives,unit:q.unit,at,version:d.version,revision:q.revision});
const saved=history=>({schema:2,version:d.version,questionVersions:Object.fromEntries(d.questions.map(q=>[q.id,q.revision])),history,runs:[],exam:null,training:null});
test('every latest result in the real 4478-question bank survives, including the earliest unresolved error',()=>{
 const input=d.questions.map((q,i)=>row(q,1000+i,i!==0)),copy=JSON.stringify(input),result=E.reconcile(saved(input),d.questions,d.version);
 assert.equal(result.history.length,4478);assert.deepEqual(new Set(result.history.map(h=>h.id)),new Set(d.questions.map(q=>q.id)));
 assert.deepEqual(E.journal(result.history).map(h=>h.id),[input[0].id]);assert.equal(JSON.stringify(input),copy);
});
test('retention keeps latest per question plus recent attempts, bounds storage and is stable without mutation',()=>{
 const base=d.questions.map((q,i)=>row(q,i+1)),q=d.questions[0],repeats=Array.from({length:9000},(_,i)=>row(q,10000+i,i%2===0));
 const input=[...base,...repeats],copy=JSON.stringify(input),out=E.retainHistory(input);
 assert.equal(out.length,4478-1+4000);assert.equal(out[0].id,base[1].id);assert.strictEqual(out.at(-1),input.at(-1));
 assert.deepEqual(E.retainHistory(out),out);assert.deepEqual(E.retainHistory(input,0),[...base.slice(1),repeats.at(-1)]);
 assert.equal(JSON.stringify(input),copy);assert.equal(new Set(out.map(h=>h.id)).size,4478);
 const unseen=E.practice(d.questions,{history:out,limit:4118,random:()=>.5});assert.equal(unseen.length,4118);
});
test('chronological latest wins over late append and equal timestamps use the last answer',()=>{
 const q=d.questions[0],latest=row(q,2000),old=row(q,1000,false);
 assert.deepEqual(E.journal([latest,old]),[]);assert.deepEqual(E.retainHistory([latest,old],0),[latest]);
 const tie=row(q,2000,false);assert.deepEqual(E.journal([latest,tie]),[tie]);assert.deepEqual(E.retainHistory([latest,tie],0),[tie]);
 const guessed={...latest,confidence:'guess'};assert.deepEqual(E.journal([old,guessed]),[guessed]);assert.deepEqual(E.journal([guessed,{...latest,at:3000}]),[]);
 assert.equal(E.journal([{id:q.id,correct:true},{id:q.id,correct:false}]).length,1);
 assert.deepEqual(E.journal([latest,{id:q.id,correct:false}]),[]);
 assert.deepEqual(E.retainHistory([null,{},row(q,NaN),row(q,Infinity),{...old,id:''},latest]),[latest]);
});
test('material migration compacts repeated attempts without a false content-reset notice or loss of active sessions',()=>{
 const q=d.questions[0],input=Array.from({length:5000},(_,i)=>row(q,i+1)),s=saved(input);
 s.exam=E.createExam(d.questions,'mock-a',1000);s.exam=E.transition(s.exam,{type:'answer',choice:1},1100);
 s.training={ids:[q.id],position:0,answers:{[q.id]:q.correct},confidence:{[q.id]:'sure'},revealed:[q.id]};
 const out=E.reconcile(s,d.questions,'textbook-only-change',2000);
 assert.equal(out.history.length,4000);assert.equal(out.updated,false);assert.deepEqual(out.exam,s.exam);assert.deepEqual(out.training,s.training);
 assert.ok(out.history.every(h=>h.version==='textbook-only-change'&&h.revision===q.revision&&h.correct));assert.equal(E.VERSION,1);
 const changed=d.questions.map(x=>x.id===q.id?{...x,revision:'changed'}:x),revised=E.reconcile(s,changed,'new-bank',2000);
 assert.equal(revised.history.length,0);assert.equal(revised.training,null);assert.equal(revised.updated,true);
 assert.equal(E.reconcile(s,d.questions.filter(x=>x.id!==q.id),'removed',2000).history.length,0);
 const legacy=saved([{id:q.id,selected:q.correct,at:100,version:d.version}]);assert.equal(E.reconcile(legacy,d.questions,d.version).history[0].correct,true);
});
