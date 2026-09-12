const {renderLatex}=require('./finance-math.cjs');
const replacements=require('./finance-questions-math.cjs').sort((a,b)=>b[0].length-a[0].length);
const givens=require('./finance-questions-givens.cjs');
const supplements=require('./finance-questions-supplements.cjs');
const escapeReg=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const mathPattern=new RegExp(replacements.map(([text])=>escapeReg(text)).join('|'),'g');
const latex=new Map(replacements);
function richText(text){
 let last=0;const parts=[];
 for(const match of String(text).matchAll(mathPattern)){if(match.index>last)parts.push({text:text.slice(last,match.index)});parts.push({mathml:renderLatex(latex.get(match[0]),false)});last=match.index+match[0].length;}
 if(last<text.length)parts.push({text:text.slice(last)});return parts;
}
function compileQuestions(lesson,config){
 if(!config)throw Error(lesson.id+': Aufgaben fehlen');
 for(const key of ['derivation','worked','comparison','transfer','claim'])if(typeof config[key]!=='string'||config[key].length<25)throw Error(lesson.id+': unvollständige Aufgabe '+key);
 for(const key of ['answer','correction'])if(!Array.isArray(config[key])||config[key].length<2||config[key].join(' ').length<100)throw Error(lesson.id+': unvollständige Begründung '+key);
 const section=lesson.deep.sections[config.section],comparison=lesson.deep.comparisons[0];
 if(!section)throw Error(lesson.id+': Aufgabenabschnitt fehlt');
 const step=(text,tex=null)=>({text,textParts:richText(text),tex,mathml:tex?renderLatex(tex):null});
 const make=(type,level,prompt,hint,steps,focus,extra={})=>({type,level,prompt,hint,steps,focus,...extra});
 const questions=[
  make('Grundverständnis','Grundlagen',lesson.question,'Trenne zuerst die Definition von ihrer wirtschaftlichen Wirkung.',[step(lesson.answer),step(lesson.logic)],'explanation'),
  make(section.tex?'Herleitung':'Begründung','Grundlagen',config.derivation,'Baue deine Begründung auf „'+section.title+'“ auf. Nenne die Voraussetzungen ausdrücklich.',section.paragraphs.map((p,i)=>step(p,i===section.paragraphs.length-1?section.tex:null)),'derivation-'+config.section),
  make(lesson.textbook.steps.some(s=>s.mathml)?'Rechenaufgabe':'Fallanalyse','Anwendung',config.worked,'Ordne zuerst die Angaben. Prüfe Perspektive, Zeitpunkte und Einheiten beziehungsweise die betroffenen Pflichten.',lesson.textbook.steps.map(s=>({...step(s.why,s.tex),label:s.mathml?null:s.calculation})),'example'),
  make('Vergleich','Anwendung',config.comparison,'Halte die gemeinsamen Annahmen fest. Begründe zuerst die Richtung des Unterschieds, bevor du Ergebnisse vergleichst.',comparison.paragraphs.map(p=>step(p)),'comparison-0',{context:comparison.intro,table:comparison}),
  make('Transfer','Vertiefung',config.transfer,'Prüfe, welche Annahme sich gegenüber dem Grundfall geändert hat und welche Entscheidung daraus folgt.',config.answer.map(p=>step(p)),'limitations'),
  make('Fehlersuche','Vertiefung','Beurteile die Aussage und formuliere eine fachlich richtige Fassung: „'+config.claim+'“','Suche die verwechselten Größen oder die ausgelassene Bedingung. Eine bloße Antwort mit „falsch“ genügt nicht.',config.correction.map(p=>step(p)),'derivations')
 ];
 for(const s of supplements[lesson.id]||[])questions[2].steps.push(step(s.text,s.tex));
 if(lesson.id==='bonds-08')questions.push(...require('./finance-questions/duration.cjs').map(q=>({...q,steps:q.steps.map(s=>step(s.text,s.tex))})));
 const cols=givens[lesson.block]?.[Number(lesson.id.slice(-2))-1];
 if(!cols?.length||cols.some(c=>!comparison.headers[c]))throw Error(lesson.id+': Aufgabenangaben fehlen');
 questions[3].givenTable={title:'Angaben für deinen Vergleich',headers:cols.map(c=>comparison.headers[c]),rows:comparison.rows.map(r=>cols.map(c=>r[c])),mathmlCells:comparison.rows.map((r,ri)=>cols.map(c=>comparison.mathmlCells?.[ri]?.[c]||null))};
 return questions.map((q,i)=>({...q,promptParts:richText(q.prompt),contextParts:richText(q.context||''),id:lesson.id+'-'+String(i+1).padStart(2,'0'),anchor:'question-'+String(i+1).padStart(2,'0')}));
}
module.exports={compileQuestions};
