const {test}=require('node:test'),assert=require('node:assert/strict');
const E=require('../finance-cfa/engine.cjs'),C=require('../finance-cfa/curriculum.cjs');
function fixture(){return ['practice','mock-a','mock-b'].flatMap(pool=>Object.entries(E.blueprint).flatMap(([topic,n])=>Array.from({length:n},(_,i)=>({id:pool+'-'+topic+'-'+i,pool,topic,unit:'fixture',objectives:['fixture-a'],stem:'Independent state-machine fixture '+pool+' '+topic+' '+i,options:[0,1,2].map(n=>({text:String(n),why:'Fixture option '+n})),correct:i%3,solution:['Fixture explanation']}))));}
test('2027 references and mock blueprint cover every official module and weight range',()=>{
 assert.equal(C.modules.length,102);assert.equal(C.modules.reduce((n,m)=>n+m.objectives.length,0),340);
 assert.equal(new Set(C.modules.flatMap(m=>m.objectives.map(o=>o.id))).size,340);
 for(const session of [1,2])assert.equal(C.topics.filter(t=>t.session===session).reduce((n,t)=>n+t.questions,0),90);
 for(const t of C.topics){assert.equal(t.questions,E.blueprint[t.id]);const pct=100*t.questions/180;assert.ok(pct>=t.min&&pct<=t.max,t.id);}
});
test('real wall time expires a session across navigation and reload; session two has its own clock',()=>{
 const bank=fixture();let s=E.createExam(bank,'mock-a',1000);
 s=E.transition(s,{type:'answer',choice:0},2000);
 s=E.restore(JSON.stringify(s),bank,1000+E.SESSION_MS+9000);
 assert.equal(s.phase,'break');assert.equal(s.answers[s.items[0]],0);assert.equal(s.sessionEnded[0],1000+E.SESSION_MS);
 s=E.transition(s,{type:'begin-second'},1000+E.SESSION_MS+60000);
 assert.equal(s.deadline,1000+2*E.SESSION_MS+60000);assert.equal(s.position,90);
 assert.throws(()=>E.transition(s,{type:'navigate',position:89},s.deadline-10));
 s=E.transition(s,{type:'answer',choice:1},s.deadline);assert.equal(s.phase,'finished');assert.equal(s.answers[s.items[90]],undefined);
});
test('submitted sections cannot be edited, and two mocks share no items',()=>{
 const bank=fixture();let s=E.createExam(bank,'mock-a',1000);s=E.transition(s,{type:'answer',choice:2},1500);s=E.transition(s,{type:'submit'},2000);
 assert.deepEqual(E.transition(s,{type:'answer',choice:1},2500).answers,s.answers);
 const other=E.createExam(bank,'mock-b',1000);assert.ok(!s.items.some(id=>other.items.includes(id)));
 assert.deepEqual(E.issues(bank,{requireMocks:true}),[]);
});
test('scores include blanks and report topic performance and confident errors without a pass prediction',()=>{
 const bank=fixture(),ids=bank.filter(q=>q.pool==='mock-a').map(q=>q.id);const answers={};ids.forEach((id,i)=>{if(i<100)answers[id]=bank.find(q=>q.id===id).correct;else if(i<160)answers[id]=(bank.find(q=>q.id===id).correct+1)%3;});
 const grade=E.grade(bank,ids,answers,{[ids[120]]:'sure'});
 assert.equal(grade.correct,100);assert.equal(grade.unanswered,20);assert.equal(grade.answered,160);assert.equal(grade.percent,100/180*100);assert.equal(grade.confidentErrors,1);
 assert.equal(Object.values(grade.topics).reduce((n,t)=>n+t.total,0),180);assert.equal(grade.passProbability,undefined);
});
test('corrupt states and changed question banks are rejected, not silently graded',()=>{
 const bank=fixture(),s=E.createExam(bank,'mock-a',1000);
 assert.equal(E.restore('{bad json',bank,1500),null);
 for(const patch of [{items:s.items.slice(1)},{answers:{unknown:1}},{answers:{[s.items[0]]:9}},{deadline:NaN},{position:110},{phase:'fake'},{flags:[]},{version:99}])assert.equal(E.restore({...s,...patch},bank,1500),null);
 assert.equal(E.restore(s,bank.filter(q=>q.id!==s.items[0]),1500),null);
 for(const patch of [{visits:{unknown:1}},{visits:{[s.items[0]]:-1}},{sessionEnded:[1200]},{ended:1300},{deadline:s.deadline+1},{answers:{[s.items[90]]:0}},{seenBefore:'false'}])assert.equal(E.restore({...s,...patch},bank,1500),null);
 const pause=E.transition(s,{type:'submit'},2000);
 assert.ok(E.restore(pause,bank,2500));
 assert.equal(E.restore({...pause,sessionEnded:[]},bank,2500),null);
 assert.equal(E.restore({...pause,sessionEnded:[999]},bank,2500),null);
 let second=E.transition(pause,{type:'begin-second'},3000);
 assert.ok(E.restore(second,bank,3500));
 assert.equal(E.restore({...second,deadline:1000+E.SESSION_MS},bank,3500),null);
 const complete=E.transition(second,{type:'submit'},4000);
 assert.ok(E.restore(complete,bank,4500));
 assert.equal(E.restore({...complete,ended:3500},bank,4500),null);
 assert.equal(E.restore({...complete,sessionEnded:[2000,1500],ended:1500},bank,4500),null);
});
test('training reserves mock questions, prefers unseen items, and updates a resolved error',()=>{
 const bank=fixture(),history=[{id:'practice-ethics-0',correct:false,at:1,confidence:'sure'},{id:'practice-ethics-1',correct:false,at:2},{id:'practice-ethics-0',correct:true,at:3}];
 const ids=E.practice(bank,{topic:'ethics',limit:10,history,random:()=>.2});assert.equal(ids.length,10);assert.ok(ids.every(id=>id.startsWith('practice-ethics-')));assert.ok(!ids.includes(history[0].id));
 assert.deepEqual(E.journal(history).map(x=>x.id),['practice-ethics-1']);
});
test('content updates retain unchanged answers and running exams, but reject changed question content',()=>{
 const bank=fixture().map(q=>({...q,revision:'revision-'+q.id})),id='practice-ethics-0',changed='practice-ethics-1';
 const saved={schema:2,version:'old',questionVersions:Object.fromEntries(bank.map(q=>[q.id,q.revision])),
  history:[{id,selected:0,correct:false,at:1200,version:'old',revision:'revision-'+id},{id:changed,selected:1,correct:true,at:1300,version:'old',revision:'revision-'+changed}],
  training:{ids:[id],position:0,answers:{[id]:0},confidence:{[id]:'sure'},revealed:[id]},
  exam:E.createExam(bank,'mock-a',1000),runs:[{mock:'mock-a',percent:70,at:900,seenBefore:false}]};
 const kept=E.reconcile(saved,bank,'new-material-version',2000);
 assert.ok(kept.exam);assert.equal(kept.exam.deadline,saved.exam.deadline);assert.deepEqual(kept.training,saved.training);
 assert.equal(kept.history.length,2);assert.equal(kept.history[0].correct,true);assert.equal(kept.updated,false);
 const altered=bank.map(q=>q.id===changed||q.id===saved.exam.items[0]?{...q,revision:'corrected'}:q);
 const revised=E.reconcile(saved,altered,'revised-bank',2000);
 assert.equal(revised.exam,null);assert.equal(revised.training.ids[0],id);assert.deepEqual(revised.history.map(h=>h.id),[id]);
 assert.equal(revised.runs[0].outdated,true);assert.equal(revised.updated,true);
 const invalid={...saved,training:{...saved.training,confidence:[]}};
 assert.equal(E.reconcile(invalid,bank,'old',2000).training,null);
 assert.equal(E.reconcile(saved,bank.filter(q=>q.pool!=='mock-a'),'reduced-bank',2000).runs[0].outdated,true);
});
