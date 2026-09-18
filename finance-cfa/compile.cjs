const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const curriculum=require('./curriculum.cjs'),engine=require('./engine.cjs'),{renderLatex}=require('../finance-math.cjs');
function load(directory){return fs.readdirSync(path.join(__dirname,directory)).filter(n=>n.endsWith('.cjs')).sort().flatMap(n=>require('./'+directory+'/'+n));}
function compileBlock(block,owner){
 if(typeof block==='string'){if(!block.trim())throw Error(owner+': leerer Absatz');return block;}
 if(!block||typeof block!=='object')throw Error(owner+': ungültiger Inhaltsblock');
 if(block.kind==='formula'){
  if(!block.tex||!block.reading||!Array.isArray(block.symbols)||!block.symbols.length)throw Error(owner+': Formel ohne Lesart oder Symbole');
  return {...block,mathml:renderLatex(block.tex),symbols:block.symbols.map(([tex,meaning])=>{if(!tex||!meaning)throw Error(owner+': Symboldefinition fehlt');return {tex,meaning,mathml:renderLatex(tex,false)};})};
 }
 if(block.kind==='table'){
  if(!block.caption||block.headers.length<2||!block.rows.length||block.rows.some(r=>r.length!==block.headers.length))throw Error(owner+': ungültige Tabelle');
  return block;
 }
 if(block.kind==='example'){
  if(!block.title||!block.given||!block.steps.length||!block.conclusion)throw Error(owner+': unvollständiges Beispiel');
  return {...block,steps:block.steps.map(x=>compileBlock(x,owner))};
 }
 if(block.kind==='figure'){
  const {render,colors}=require('../finance-illustrations/chart.cjs'),p=block.plot;
  if(!/^[a-z0-9-]+$/.test(block.id)||!block.title||!block.caption||!block.reading||!p?.xLabel||!p?.yLabel||!p.series?.length)throw Error(owner+': unvollständige Abbildung');
  for(const range of [p.x,p.y])if(!Array.isArray(range)||range.length!==2||!range.every(Number.isFinite)||range[0]>=range[1])throw Error(owner+': ungültige Diagrammachse');
  for(const s of p.series)if(!s.name||s.points.length<2||s.points.some(v=>v.length!==2||!v.every(Number.isFinite)))throw Error(owner+': ungültige Diagrammwerte');
  const id='cfa-'+owner.replace(/[^a-z0-9-]/g,'-')+'-'+block.id;
  return {...block,id,svg:render({id,title:block.title,takeaway:block.caption,read:block.reading,plot:p}),legend:p.series.map((s,i)=>({name:s.name,color:s.color||colors[i%colors.length],dash:!!s.dash}))};
 }
 throw Error(owner+': unbekannter Blocktyp '+block.kind);
}
function compile({release=false}={}){
 const sourceUnits=load('units'),sourceQuestions=load('questions'),byModule=new Map(curriculum.modules.map(m=>[m.id,m]));
 if(new Set(sourceUnits.map(u=>u.id)).size!==sourceUnits.length)throw Error('Doppelte CFA-Lerneinheit');
 const units=sourceUnits.map(u=>{
  const m=byModule.get(u.id);if(!m)throw Error('Unbekannte Lerneinheit '+u.id);
  if(!u.intro?.length||!u.sections?.length||!u.sources?.length)throw Error(u.id+': Einleitung, Abschnitte oder Quellen fehlen');
  const ids=new Set();
  const sections=u.sections.map(s=>{
   if(!s.id||ids.has(s.id)||!s.title||!s.blocks.length)throw Error(u.id+': ungültiger Abschnitt');ids.add(s.id);
   if(!s.objectives.length||s.objectives.some(letter=>!m.objectives.some(o=>o.letter===letter)))throw Error(u.id+'/'+s.id+': unbekanntes Lernziel');
   return {...s,blocks:s.blocks.map(b=>compileBlock(b,u.id+'/'+s.id))};
  });
  return {...m,...u,sections};
 });
 const byUnit=new Map(units.map(u=>[u.id,u])),connections=require('./connections.cjs');
 for(const u of units){
  u.related=u.related||connections[u.id]||[];
  for(const link of u.related){
   if(!link.label||!byUnit.get(link.unit)?.sections.some(s=>s.id===link.section))throw Error(u.id+': ungültiger Kapitelverweis '+link.unit+'/'+link.section);
  }
 }
 const questions=sourceQuestions.map(q=>{
  const m=byModule.get(q.unit),u=byUnit.get(q.unit);
  if(!m||!u||q.topic!==m.topic||q.objectives.some(id=>!m.objectives.some(o=>o.id===id)))throw Error(q.id+': inkonsistente Lernzielzuordnung');
  if(!q.section||!u.sections.some(s=>s.id===q.section))throw Error(q.id+': Lösungsrückverweis fehlt');
  // Numerical choices stay ordered; prose choices use stable per-question ordering,
  // so an author's repeating A/B/C pattern cannot reveal the answer.
  const choices=q.options.map((option,index)=>({option,index,key:crypto.createHash('sha256').update(q.id+'\0'+option.text).digest('hex')}));
  const number=s=>/^[−-]?\$?\d[\d,]*(?:\.\d+)?%?\.?$/.test(s.trim())?Number(s.trim().replace(/[,$%]/g,'').replace('−','-').replace(/\.$/,'')):null;
  const numerical=choices.every(c=>number(c.option.text)!==null);
  choices.sort((a,b)=>numerical?number(a.option.text)-number(b.option.text):a.key.localeCompare(b.key));
  const compiled={...q,options:choices.map(c=>c.option),correct:choices.findIndex(c=>c.index===q.correct),solution:q.solution.map(s=>compileBlock(s,q.id))};
  if(q.given)compiled.given=q.given.map(s=>compileBlock(s,q.id));
  return {...compiled,revision:crypto.createHash('sha256').update(JSON.stringify(compiled)).digest('hex').slice(0,16)};
 });
 const issues=engine.issues(questions,{requireMocks:release});if(issues.length)throw Error(issues.join('\n'));
 const coverage=curriculum.modules.map(m=>({
  id:m.id,objectives:m.objectives.map(o=>({
   id:o.id,
   sections:(byUnit.get(m.id)?.sections||[]).filter(s=>s.objectives.includes(o.letter)).map(s=>s.id),
   practice:questions.filter(q=>q.pool==='practice'&&q.objectives.includes(o.id)).map(q=>q.id),
   mockQuestions:questions.filter(q=>q.pool!=='practice'&&q.objectives.includes(o.id)).length
  }))
 }));
 if(release){
  const gaps=coverage.flatMap(m=>m.objectives.filter(o=>!o.sections.length||!o.practice.length).map(o=>o.id));
  if(gaps.length)throw Error('Offene Lernziele: '+gaps.join(', '));
  if(units.some(u=>u.review?.status!=='checked'))throw Error('Fachliche Prüfung nicht vollständig');
 }
 const version=crypto.createHash('sha256').update(JSON.stringify({units,questions})).digest('hex').slice(0,16);
 return {...curriculum,version,units,questions,coverage,release,inventory:engine.inventory(questions)};
}
module.exports={compile,compileBlock};
