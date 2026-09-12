const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const outline=require('../finance-outline.json');
const financeMath=require('../finance-math.cjs');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
const planned=new Set(outline.flatMap(b=>b.groups.flatMap(g=>g[1]).map((_,i)=>`${b.id}-${String(i+1).padStart(2,'0')}`)));
const statistics=new Set([...html.matchAll(/data-page="([^"]+)"/g)].map(m=>m[1]));
const missing=[];let count=0;
test('all 171 Finance chapters have complete fields, valid levels and reachable cross-reference targets',t=>{
 for(const block of outline){
  const file=path.join(__dirname,'../finance-content',block.id+'.cjs');
  assert.ok(fs.existsSync(file),'Missing chapter block: '+block.id);
  const lessons=require(file);
  assert.equal(lessons.length,block.groups.flatMap(g=>g[1]).length,block.id);
  lessons.forEach((lesson,i)=>{
   const id=`${block.id}-${String(i+1).padStart(2,'0')}`;count++;
   for(const field of ['intuition','logic','formula','math','example','depth','pitfall','question','answer'])assert.ok(typeof lesson[field]==='string'&&lesson[field].trim().length>5,`${id}: ${field}`);
   assert.ok(lesson.levels.length>0&&lesson.levels.every(l=>[1,2,3].includes(l)),id);
   for(const link of lesson.links)assert.ok(planned.has(link)||statistics.has(link)||link==='kelly',`${id}: invalid link ${link}`);
  });
 }
 assert.equal(count,171);
 const embedded=JSON.parse(html.match(/<script type="application\/json" id="finance-data">([\s\S]*?)<\/script>/)[1]);
 assert.equal(embedded.length,171);
 for(const lesson of embedded){
  assert.ok(lesson.sources.length>0&&lesson.scope.length>20);
  const canonical=require('../finance-formulas.cjs')[lesson.block][Number(lesson.id.slice(-2))-1];
  assert.equal(lesson.formulaTex,canonical,lesson.id+': canonical notation');
  if(canonical){
   assert.match(lesson.formulaMathML,/<math[^>]*display="block"/i,lesson.id+': MathML');
   assert.match(lesson.formulaMathML,/application\/x-tex/,lesson.id+': TeX annotation');
  }else assert.equal(lesson.formulaMathML,null,lesson.id+': qualitative decision is prose');
  assert.ok(html.includes('href="#lesson-'+lesson.id+'"'));
  if(lesson.lab)assert.ok(require('../finance-models.cjs').models[lesson.lab]);
 }
 assert.equal(Object.values(require('../finance-formulas.cjs')).flat().length,171,'every chapter has an explicit formula policy');
 t.diagnostic(`${count}/${planned.size} chapters embedded, with sources and validated model/link targets.`);
});
test('Finance glossary definitions, aliases, chapter targets and embedded index are complete',t=>{
 const source=require('../finance-glossary.cjs');
 const match=html.match(/<script type="application\/json" id="finance-glossary-data">([\s\S]*?)<\/script>/);
 assert.ok(match);const embedded=JSON.parse(match[1]);
 assert.equal(source.length,embedded.length);assert.ok(embedded.length>=350);
 const labels=new Set(),ids=new Set();
 for(const entry of embedded){
  assert.ok(entry.term.length>=2&&entry.definition.length>=25,entry.term);
  assert.ok(planned.has(entry.lesson),entry.term+': main lesson');
  assert.ok(entry.lessons.length>0&&entry.lessons.every(id=>planned.has(id)),entry.term+': occurrences');
  assert.ok(!ids.has(entry.id),entry.id);ids.add(entry.id);
  for(const label of [entry.term,...entry.aliases]){const key=label.toLocaleLowerCase('de');assert.ok(!labels.has(key),'duplicate label '+label);labels.add(key);}
 }
 const sorted=[...embedded].sort((a,b)=>a.term.localeCompare(b.term,'de',{sensitivity:'base'}));
 assert.deepEqual(embedded.map(x=>x.id),sorted.map(x=>x.id));
 t.diagnostic(`${embedded.length} alphabetically sorted definitions with ${labels.size} unique terms and aliases.`);
});
