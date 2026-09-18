/* Pure exam state machine, shared by the build, browser and independent tests. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.CFAEngine=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const VERSION=1,SESSION_MS=135*60*1000;
 const blueprint={ethics:22,quant:22,economics:12,statements:22,corporate:12,equity:22,bonds:22,derivatives:13,alternatives:13,portfolio:20};
 const first=['ethics','quant','economics','statements','corporate'];
 const second=['equity','bonds','derivatives','alternatives','portfolio'];
 const clone=x=>JSON.parse(JSON.stringify(x));
 const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
 function inventory(bank){
  return Object.fromEntries(['practice','mock-a','mock-b'].map(pool=>[pool,Object.fromEntries(Object.keys(blueprint).map(topic=>[topic,bank.filter(q=>q.pool===pool&&q.topic===topic).length]))]));
 }
 function issues(bank,{requireMocks=false}={}){
  const problems=[],ids=new Set(),stems=new Map();
  for(const q of bank){
   if(!q.id||ids.has(q.id))problems.push('Doppelte oder fehlende Aufgaben-ID: '+q.id);ids.add(q.id);
   if(!own(blueprint,q.topic))problems.push(q.id+': unbekanntes Thema');
   if(!['practice','mock-a','mock-b'].includes(q.pool))problems.push(q.id+': unbekannter Pool');
   if(!Array.isArray(q.objectives)||!q.objectives.length)problems.push(q.id+': Lernziel fehlt');
   if(typeof q.stem!=='string'||q.stem.length<30)problems.push(q.id+': Aufgabenstellung fehlt');
   if(!Array.isArray(q.options)||q.options.length!==3||q.options.some(o=>!o.text||!o.why))problems.push(q.id+': drei erklärte Antworten erforderlich');
   else if(new Set(q.options.map(o=>o.text.trim().toLowerCase())).size!==3)problems.push(q.id+': doppelte Antwortmöglichkeiten');
   if(!Number.isInteger(q.correct)||q.correct<0||q.correct>2)problems.push(q.id+': ungültige richtige Antwort');
   if(!q.solution?.length)problems.push(q.id+': Lösungsweg fehlt');
   const stem=String(q.stem).toLowerCase().replace(/\s+/g,' ').trim();
   if(stems.has(stem))problems.push(q.id+': identische Frage wie '+stems.get(stem));stems.set(stem,q.id);
  }
  if(requireMocks){const n=inventory(bank);for(const pool of ['mock-a','mock-b'])for(const [topic,count] of Object.entries(blueprint))if(n[pool][topic]!==count)problems.push(pool+'/'+topic+': '+n[pool][topic]+' statt '+count+' Fragen');}
  return problems;
 }
 function ready(bank,mock){
  if(!['mock-a','mock-b'].includes(mock))return false;
  const n=inventory(bank)[mock];return Object.entries(blueprint).every(([t,count])=>n[t]===count);
 }
 function createExam(bank,mock,now=Date.now()){
  if(!ready(bank,mock))throw Error('Diese Probeklausur ist noch nicht vollständig.');
  const items=[...first,...second].flatMap(topic=>bank.filter(q=>q.pool===mock&&q.topic===topic).map(q=>q.id));
  if(items.length!==180||new Set(items).size!==180)throw Error('Ungültige Klausurzusammenstellung.');
  return {version:VERSION,mock,items,phase:'session1',deadline:now+SESSION_MS,started:now,ended:null,position:0,answers:{},flags:{},confidence:{},visits:{},sessionEnded:[],seenBefore:false};
 }
 function bounds(state){return state.phase==='session1'?[0,90]:state.phase==='session2'?[90,180]:[0,0];}
 function active(state){return state.phase==='session1'||state.phase==='session2';}
 function finishSession(state,now){
  const s=clone(state);if(!active(s))return s;
  s.sessionEnded.push(now);s.deadline=null;
  if(s.phase==='session1'){s.phase='break';s.position=90;}else{s.phase='finished';s.ended=now;}
  return s;
 }
 function tick(state,now=Date.now()){
  if(active(state)&&now>=state.deadline)return finishSession(state,state.deadline);
  return state;
 }
 function transition(state,event,now=Date.now()){
  let s=tick(state,now);
  if(event.type==='tick')return s;
  if(event.type==='begin-second'){
   if(s.phase!=='break')throw Error('Die zweite Sitzung beginnt erst nach der ersten.');
   return {...clone(s),phase:'session2',deadline:now+SESSION_MS,position:90};
  }
  if(event.type==='submit')return finishSession(s,now);
  if(!active(s))return s;
  const [lo,hi]=bounds(s);s=clone(s);
  if(event.type==='navigate'){
   if(!Number.isInteger(event.position)||event.position<lo||event.position>=hi)throw Error('Diese Frage gehört nicht zur aktuellen Sitzung.');
   s.position=event.position;return s;
  }
  const id=s.items[s.position];
  if(event.type==='answer'){
   if(!Number.isInteger(event.choice)||event.choice<0||event.choice>2)throw Error('Ungültige Antwort.');
   s.answers[id]=event.choice;
  }else if(event.type==='clear'){delete s.answers[id];}
  else if(event.type==='flag'){s.flags[id]=!s.flags[id];}
  else if(event.type==='confidence'){
   if(!['sure','unsure','guess'].includes(event.value))throw Error('Ungültige Selbsteinschätzung.');s.confidence[id]=event.value;
  }else if(event.type==='visit'){s.visits[id]=(s.visits[id]||0)+1;}
  else throw Error('Unbekannte Aktion.');
  return s;
 }
 function restore(raw,bank,now=Date.now()){
  try{
   const s=typeof raw==='string'?JSON.parse(raw):clone(raw);
   if(s?.version!==VERSION||!ready(bank,s.mock))return null;
   const expected=createExam(bank,s.mock,now).items;
   if(JSON.stringify(s.items)!==JSON.stringify(expected))return null;
   if(!['session1','break','session2','finished'].includes(s.phase))return null;
   if(!Number.isFinite(s.started)||!Number.isInteger(s.position)||s.position<0||s.position>=180)return null;
   if(active(s)&&(!Number.isFinite(s.deadline)||s.deadline<s.started))return null;
   for(const key of ['answers','flags','confidence','visits'])if(!s[key]||typeof s[key]!=='object'||Array.isArray(s[key]))return null;
   for(const [id,value] of Object.entries(s.answers))if(!expected.includes(id)||!Number.isInteger(value)||value<0||value>2)return null;
   for(const id of Object.keys(s.flags))if(!expected.includes(id)||typeof s.flags[id]!=='boolean')return null;
   for(const [id,value] of Object.entries(s.confidence))if(!expected.includes(id)||!['sure','unsure','guess'].includes(value))return null;
   for(const [id,value] of Object.entries(s.visits))if(!expected.includes(id)||!Number.isInteger(value)||value<0)return null;
   if(!Array.isArray(s.sessionEnded)||s.sessionEnded.some(x=>!Number.isFinite(x)))return null;
   const endedCount={session1:0,break:1,session2:1,finished:2}[s.phase];
   if(s.sessionEnded.length!==endedCount||s.sessionEnded.some((x,i)=>x<(i?s.sessionEnded[i-1]:s.started)))return null;
   if(endedCount&&s.sessionEnded[0]>s.started+SESSION_MS)return null;
   if(s.phase==='session1'&&s.deadline!==s.started+SESSION_MS)return null;
   if(s.phase==='session2'&&s.deadline-SESSION_MS<s.sessionEnded[0])return null;
   if(!active(s)&&s.deadline!==null)return null;
   if(s.phase==='finished'?s.ended!==s.sessionEnded[1]:s.ended!==null)return null;
   if(s.phase==='break'&&s.position!==90||s.phase==='finished'&&s.position<90)return null;
   if(typeof s.seenBefore!=='boolean'||s.recorded!==undefined&&typeof s.recorded!=='boolean')return null;
   if(s.phase==='session1'||s.phase==='break')for(const key of ['answers','flags','confidence','visits'])if(Object.keys(s[key]).some(id=>expected.indexOf(id)>=90))return null;
   if(active(s)){const [lo,hi]=bounds(s);if(s.position<lo||s.position>=hi)return null;}
   return tick(s,now);
  }catch{return null;}
 }
 function grade(bank,ids,answers,confidence={}){
  const byId=new Map(bank.map(q=>[q.id,q]));const topics={};let correct=0,answered=0;
  const results=ids.map(id=>{
   const q=byId.get(id);if(!q)throw Error('Unbekannte Aufgabe: '+id);
   const selected=own(answers,id)?answers[id]:null;
   const valid=Number.isInteger(selected)&&selected>=0&&selected<3;
   const right=valid&&selected===q.correct;
   correct+=right?1:0;answered+=valid?1:0;
   topics[q.topic]??={total:0,correct:0,answered:0};const t=topics[q.topic];t.total++;t.correct+=right?1:0;t.answered+=valid?1:0;
   return {id,topic:q.topic,selected:valid?selected:null,correct:right,confidence:confidence[id]||'unspecified',objectives:q.objectives,unit:q.unit};
  });
  for(const t of Object.values(topics))t.percent=t.total?100*t.correct/t.total:0;
  return {total:ids.length,answered,unanswered:ids.length-answered,correct,percent:ids.length?100*correct/ids.length:0,topics,results,confidentErrors:results.filter(r=>!r.correct&&r.confidence==='sure').length};
 }
 function reconcile(saved,bank,version,now=Date.now()){
  const empty={exam:null,training:null,history:[],runs:[],updated:false};
  if(!saved||typeof saved!=='object'||Array.isArray(saved))return empty;
  const byId=new Map(bank.map(q=>[q.id,q])),sameVersion=saved.version===version;
  const unchanged=id=>{const q=byId.get(id);return !!q&&(sameVersion||(saved.schema===2&&typeof q.revision==='string'&&saved.questionVersions?.[id]===q.revision));};
  const validChoice=v=>Number.isInteger(v)&&v>=0&&v<3;
  const history=(Array.isArray(saved.history)?saved.history:[]).filter(h=>h&&unchanged(h.id)&&Number.isFinite(h.at)&&(h.selected===null||validChoice(h.selected))&&(h.revision?byId.get(h.id).revision===h.revision:h.version===saved.version)).slice(-4000).map(h=>({...h,correct:h.selected===byId.get(h.id).correct,revision:byId.get(h.id).revision,version}));
  const exam=saved.exam?.items?.every?.(unchanged)?restore(saved.exam,bank,now):null;
  const t=saved.training;
  let training=null;
  if(t&&Array.isArray(t.ids)&&t.ids.length&&new Set(t.ids).size===t.ids.length&&t.ids.every(id=>unchanged(id)&&byId.get(id).pool==='practice')&&Number.isInteger(t.position)&&t.position>=0&&t.position<t.ids.length&&t.answers&&typeof t.answers==='object'&&!Array.isArray(t.answers)&&t.confidence&&typeof t.confidence==='object'&&!Array.isArray(t.confidence)&&Array.isArray(t.revealed)&&t.revealed.every(id=>t.ids.includes(id)&&validChoice(t.answers[id]))&&Object.entries(t.answers).every(([id,v])=>t.ids.includes(id)&&validChoice(v))&&Object.entries(t.confidence).every(([id,v])=>t.ids.includes(id)&&['sure','unsure','guess'].includes(v)))training=clone(t);
  const runs=(Array.isArray(saved.runs)?saved.runs:[]).filter(r=>r&&['mock-a','mock-b'].includes(r.mock)&&Number.isFinite(r.at)&&Number.isFinite(r.percent)&&r.percent>=0&&r.percent<=100).slice(-30).map(r=>({...r,outdated:!!r.outdated||!ready(bank,r.mock)||!bank.filter(q=>q.pool===r.mock).every(q=>unchanged(q.id))}));
  return {exam,training,history,runs,updated:!sameVersion&&(!!saved.exam&&!exam||!!t&&!training||(saved.history?.length||0)>history.length)};
 }
 function practice(bank,{topic='',limit=10,history=[],random=Math.random}={}){
  const seen=new Set(history.map(h=>h.id));const candidates=bank.filter(q=>q.pool==='practice'&&(!topic||q.topic===topic));
  // Shuffle within unseen and seen groups, preserving priority for new problems.
  const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
  return [...shuffle(candidates.filter(q=>!seen.has(q.id))),...shuffle(candidates.filter(q=>seen.has(q.id)))].slice(0,Math.max(0,Math.floor(limit))).map(q=>q.id);
 }
 function journal(history){
  const latest=new Map();for(const entry of history){if(entry&&typeof entry.id==='string'&&typeof entry.correct==='boolean')latest.set(entry.id,entry);}
  return [...latest.values()].filter(e=>!e.correct||e.confidence==='guess').sort((a,b)=>(b.confidence==='sure')-(a.confidence==='sure')||(a.at||0)-(b.at||0));
 }
 return {VERSION,SESSION_MS,blueprint,first,second,inventory,issues,ready,createExam,bounds,active,tick,transition,restore,grade,reconcile,practice,journal};
});
