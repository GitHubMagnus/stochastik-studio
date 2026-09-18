const fs=require('node:fs');process.chdir(__dirname);
const cfaData=require('./finance-cfa/compile.cjs').compile({release:process.argv.includes('--release-cfa')});
const plan=require('./finance-outline.json'),{models}=require('./finance-models.cjs'),glossarySource=require('./finance-glossary.cjs'),financeMath=require('./finance-math.cjs');
const glossaryNotes=require('./finance-glossary-notes.cjs'),textbookFigures=require('./finance-textbook-figures.cjs'),textbookMath=require('./finance-textbook-math.cjs');
const canonicalFormulas=require('./finance-formulas.cjs');
const workedEquations=require('./finance-worked-equations.cjs');
const deepFigures=require('./finance-deep-figures.cjs');
const comparisonMath=require('./finance-comparison-math.cjs');
const {compileQuestions}=require('./finance-questions.cjs');
const {compileNotation}=require('./finance-notation.cjs');
const notationBuild=require('./build-notation.cjs');
const illustrationSource=require('./finance-illustrations.cjs'),{compile:compileIllustration}=require('./finance-illustrations/chart.cjs');
const readings={
 economics:[['OpenStax · Elastizität','https://openstax.org/books/principles-economics-3e/pages/5-1-price-elasticity-of-demand-and-price-elasticity-of-supply'],['OpenStax · Produktivität und Wachstum','https://openstax.org/books/principles-economics-3e/pages/20-2-labor-productivity-and-economic-growth']],
 corporate:[['NYU Stern · Corporate Finance · Lehrmaterialien','https://pages.stern.nyu.edu/~adamodar/New_Home_Page/AppldCF/solns/ch9sol.htm']],
 bonds:[['CFA Institute · Duration und ihre Eigenschaften','https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/yield-based-bond-duration-measures-and-properties'],['OpenStax · Bond Valuation','https://openstax.org/books/principles-finance/pages/10-2-bond-valuation']],
 derivatives:[['CFA Institute · Put-Call-Parität und Replikation','https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/option-replication-using-put-call-parity']],
 start:[['OpenStax · Zeitwert des Geldes','https://openstax.org/books/principles-finance/pages/7-2-time-value-of-money-tvm-basics']],
 quant:[['OpenStax · Zeitwert des Geldes','https://openstax.org/books/principles-finance/pages/7-2-time-value-of-money-tvm-basics']],
 equity:[['NYU Stern · Aswath Damodaran · Valuation materials','https://pages.stern.nyu.edu/~adamodar/New_Home_Page/valuation/val.htm']],
 portfolio:[['OpenStax · CAPM','https://openstax.org/books/principles-finance/pages/15-3-the-capital-asset-pricing-model-capm']],
 alternatives:[['CFA Institute · Alternative Investment Performance and Returns','https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/alternative-investment-performance-and-returns']],
 advanced:[['CFA Institute · Portfolio Performance Evaluation','https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/portfolio-performance-evaluation']]
};
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const base='https://www.cfainstitute.org/sites/default/files/docs/programs/cfa-program/';
const sourceFor=n=>({title:`CFA Institute · Topic Outline 2026 · Level ${n}`,url:base+(n===1?'2026-l1-topics-combined.pdf':n===2?'2026-l2-topics-combined.pdf':'2026leveliii-portfolio-management-pathwaytopicoutline_online.pdf')});
const lessons=[];
for(const block of plan){
 const content=require('./finance-content/'+block.id+'.cjs');let i=0;
 const textbooks=require('./finance-textbook/'+block.id+'.cjs');
 if(textbooks.length!==content.length)throw Error('Lehrtext-Kapitelzahl stimmt nicht: '+block.id);
 for(const [group,titles] of block.groups)for(const title of titles){
  const lesson=content[i];if(!lesson)throw Error('Fehlendes Kapitel: '+title);
  const id=block.id+'-'+String(++i).padStart(2,'0');
  const scope=block.kind==='Wahlpfad'?'Level III · Vertiefung im Wahlpfad '+block.title.split(': ')[1]+'. Die drei Pfade sind Alternativen; gewählt wird einer.':block.kind==='Ergänzung'?'Ergänzendes Lern- und Anwendungskapitel für die angegebenen Levels; kein eigenständiges offizielles CFA-Prüfungsmodul.':'CFA-orientierter Lernweg · Bezugsjahr 2026 · Grundlagen und Vertiefung für die angegebenen Levels. Details unter „CFA-Einordnung und Quellen“. ';
  const sources=lesson.levels.map(sourceFor);
  for(const [title,url] of readings[block.id]||[])sources.push({title:'Weiterführend: '+title,url});
  if(block.kind==='Wahlpfad')sources.splice(0,sources.length,{title:'CFA Institute · 2026 · '+block.title,url:base+'2026leveliii-'+({'path-portfolio':'portfolio-management','path-private':'private-markets','path-wealth':'private-wealth'}[block.id])+'-pathwaytopicoutline_online.pdf'});
  if(block.id==='statements')sources.push({title:'IFRS Foundation · Standards',url:'https://www.ifrs.org/issued-standards/list-of-standards/'});
  if(block.id==='ethics'||id==='advanced-12')sources.push({title:'CFA Institute · Code and Standards',url:'https://www.cfainstitute.org/standards/professionals/code-ethics-standards'},{title:'GIPS Standards',url:'https://www.gipsstandards.org/standards/'});
  for(const f of ['intuition','logic','formula','math','example','depth','pitfall','question','answer'])if(!lesson[f]?.trim())throw Error(id+': '+f+' fehlt');
  if(lesson.lab&&!models[lesson.lab])throw Error(id+': Modell fehlt');
  const textbook=textbooks[i-1];
  if(!textbook||textbook.explanation.length<2||textbook.steps.length<3||textbook.steps.some(s=>!s.why||!s.calculation))throw Error(id+': unvollständiger Lehrtext');
  for(const f of ['heading','example','applications','limitations','connections'])if(!textbook[f]?.trim())throw Error(id+': Lehrtext '+f+' fehlt');
  if(textbook.table&&textbook.table.rows.some(r=>r.length!==textbook.table.headers.length))throw Error(id+': Tabellenspalten stimmen nicht');
  textbook.figure=textbookFigures[id]||null;
  for(const [step,tex] of Object.entries({...workedEquations[id],...textbookMath[id]})){
   if(!textbook.steps[step])throw Error(id+': Formel verweist auf fehlenden Rechenschritt '+step);
   textbook.steps[step].tex=tex;textbook.steps[step].mathml=financeMath.renderLatex(tex);
  }
  const deepFile='./finance-deep/'+block.id+'.cjs';
  const deepBlock=require(deepFile);
  if(deepBlock.length!==content.length)throw Error(block.id+': Zahl der Vertiefungen stimmt nicht');
  const deep=deepBlock[i-1];
  if(!deep)throw Error(id+': Vertiefung fehlt');
  if(deep){
   deep.figures=deepFigures[id]||[];
   for(const [ci,row,col,tex] of comparisonMath[id]||[]){
    const c=deep.comparisons[ci];if(!c?.rows[row]||c.rows[row][col]===undefined)throw Error(id+': ungültige Tabellenformel');
    c.mathmlCells??=c.rows.map(r=>r.map(()=>null));c.mathmlCells[row][col]=financeMath.renderLatex(tex,false);
   }
   for(const section of deep.sections){section.mathml=section.tex?financeMath.renderLatex(section.tex):null;}
   if(deep.sections.length<2||!deep.comparisons.length)throw Error(id+': Vertiefung unvollständig');
   for(const c of deep.comparisons)if(c.rows.some(r=>r.length!==c.headers.length))throw Error(id+': Vergleichsspalten stimmen nicht');
  }
  const tex=canonicalFormulas[block.id]?.[i-1];
  if(tex===undefined)throw Error(id+': kanonische Formel fehlt');
  const formulaMathML=tex?financeMath.renderLatex(tex):null;
  const illustrations=(illustrationSource[id]||[]).map(f=>compileIllustration(f,financeMath));
  const compiled={...lesson,example:textbook.example,textbook,deep,illustrations,formulaTex:tex,formulaMathML,id,title,group,block:block.id,blockTitle:block.title,kind:block.kind,scope,sources};
  const questionBlock=require('./finance-questions/'+block.id+'.cjs');
  if(questionBlock.length!==content.length)throw Error(block.id+': Zahl der Aufgabenbanken stimmt nicht');
  compiled.questions=compileQuestions(compiled,questionBlock[i-1]);
  compiled.notation=compileNotation(compiled);
  if(id==='quant-11')compiled.sources.push({title:'Hyndman & Athanasopoulos · Forecasting: Principles and Practice · Autoregressive models',url:'https://otexts.com/fpp3/AR.html'},{title:'CFA Institute · Time-Series Analysis',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/time-series-analysis'});
  lessons.push(compiled);
 }
 if(content.length!==i)throw Error('Kapitelzahl stimmt nicht: '+block.id);
}
let html=fs.readFileSync('index.html','utf8');
const targets=new Set([...lessons.map(l=>l.id),...[...html.matchAll(/data-page="([^"]+)"/g)].map(m=>m[1]),'kelly']);
for(const id of Object.keys(illustrationSource))if(!lessons.some(l=>l.id===id))throw Error('Grafiken für unbekanntes Kapitel '+id);
for(const l of lessons)for(const f of l.illustrations)for(const id of f.links||[])if(!targets.has(id))throw Error(f.id+': ungültiger Grafikverweis '+id);
for(const l of lessons)for(const ref of l.links)if(!targets.has(ref))throw Error(l.id+': ungültiger Verweis '+ref);
for(const l of lessons)for(const [ref] of l.deep?.links||[])if(!targets.has(ref))throw Error(l.id+': ungültiger Vertiefungsverweis '+ref);
const slug=s=>s.toLocaleLowerCase('de').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ß/g,'ss').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const escapeReg=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const glossary=[],usedIds=new Set(),usedLabels=new Map();
const searchable=l=>[l.notation.reading,...l.notation.entries.map(e=>e.meaning),l.title,l.intuition,l.logic,l.math,...l.illustrations.flatMap(f=>[f.title,f.takeaway,f.read,f.assumptions]),l.example,l.depth,l.pitfall,l.question,l.answer,...l.questions.flatMap(q=>[q.prompt,q.context||'',...q.steps.map(s=>s.text)]),l.textbook.heading,...l.textbook.explanation,...l.textbook.steps.flatMap(s=>[s.calculation,s.why]),l.textbook.applications,l.textbook.limitations,l.textbook.connections,...(l.deep?.sections||[]).flatMap(s=>[s.title,...s.paragraphs]),...(l.deep?.comparisons||[]).flatMap(c=>[c.intro,...c.paragraphs,...c.rows.flat()])].join(' ');
for(const source of glossarySource){
 const id=slug(source.term);if(!id||usedIds.has(id))throw Error('Doppelter/ungültiger Wörterbuchschlüssel: '+source.term);usedIds.add(id);
 if(!targets.has(source.lesson))throw Error(source.term+': ungültiges Hauptkapitel '+source.lesson);
 for(const label of [source.term,...source.aliases]){
  const key=label.toLocaleLowerCase('de');
  if(usedLabels.has(key))throw Error(`Mehrdeutiger Wörterbuchbegriff „${label}“ bei ${source.term} und ${usedLabels.get(key)}`);
  usedLabels.set(key,source.term);
 }
 const labels=[source.term,...source.aliases].sort((a,b)=>b.length-a.length).map(escapeReg);
 const re=new RegExp(`(^|[^\\p{L}\\p{N}])(?:${labels.join('|')})(?=$|[^\\p{L}\\p{N}])`,'iu');
 const found=lessons.filter(l=>re.test(searchable(l))).map(l=>l.id);
 if(!found.includes(source.lesson))found.unshift(source.lesson);
 const note=glossaryNotes[source.term]||null;
 if(source.cfa){
  const unit=cfaData.units.find(u=>u.id===source.cfa.unit);
  if(!unit||!unit.sections.some(s=>s.id===source.cfa.section))throw Error(source.term+': ungültiger CFA-Vertiefungsverweis');
 }
 if(note)for(const ref of note.links)if(!targets.has(ref))throw Error(source.term+': ungültiger Vertiefungsverweis '+ref);
 glossary.push({...source,id,note,lessons:[...new Set(found)]});
}
glossary.sort((a,b)=>a.term.localeCompare(b.term,'de',{sensitivity:'base'}));
const nav=`<!-- FINANCE NAV START -->
<details id="finance-plan-nav"><summary>Finance Studio <small>${lessons.length} Kapitel</small></summary><a href="#finance" data-open="finance" class="module-overview">Alle Themen im Überblick</a><a href="#cfa" class="module-overview cfa-nav-link">CFA Level I 2027</a><a href="#glossary" class="module-overview glossary-nav-link">Fachwörterbuch <small>${glossary.length} Begriffe</small></a><div class="finance-nav-topics">${plan.map((t,i)=>`<a href="#finance" data-finance-target="${t.id}">${String(i).padStart(2,'0')} · ${escape(t.title)}</a>`).join('\n')}</div></details>
<!-- FINANCE NAV END -->`;
html=html.replace(/<!-- FINANCE NAV START -->[\s\S]*?<!-- FINANCE NAV END -->/,nav);
const body=`<!-- FINANCE PAGE START -->
<section class="viewpage" id="page-finance">
<div class="kicker">Finance / Lernen und Verstehen</div><h1>Finance Studio.</h1><p class="lede">${lessons.length} Kapitel von der Finanzsprache bis zur begründeten Portfolioentscheidung. Öffne ein Thema und verbinde Theorie, Intuition und Rechenweg.</p>
<div class="finance-plan-note"><strong>Dein CFA-orientierter Lernweg · Bezugsjahr 2026</strong><p>Die Levelhinweise stehen in jedem Kapitel. Level I legt Grundlagen, Level II vertieft Analyse, Level III verbindet Entscheidungen im Portfolio. Die drei Level-III-Wahlpfade sind Alternativen. Eigene didaktische Kapitel, keine wortgetreue Liste offizieller Lernmodule.</p></div>
<p class="finance-plan-note"><a href="#cfa"><strong>CFA Level I 2027</strong></a> · Lernzielabgleich, vertiefte Lerneinheiten, Training und Probeklausuren.</p>
<div class="finance-summary"><span><b>10</b> Kernbereiche</span><span><b>${plan.length}</b> Themenblöcke</span><span><b>${lessons.length}</b> Lernkapitel</span><a href="#glossary">Fachwörterbuch öffnen → <small>${glossary.length} Definitionen mit Kapitelverweisen</small></a><a href="#kelly" data-open="kelly">Kelly Studio öffnen → <small>Positionsgrößen und Portfolios erkunden</small></a></div>
<p class="planned-format"><strong>In jedem Kapitel:</strong> Intuition · ausführliche Erklärung · Herleitungen · gezielte Vergleiche · Formel / Prinzip · erläuterte Lösungsschritte · Anwendungen · Grenzen · aufklappbare Vertiefung · mindestens sechs Übungsaufgaben mit begründeten Lösungen · Querverweise. ${Object.keys(models).length} interaktive Modelle vertiefen geeignete Zusammenhänge. ${Object.values(illustrationSource).flat().length} berechnete Lehrbuchgrafiken ergänzen insbesondere Portfoliotheorie und VWL.</p>
<div class="finance-controls"><label for="finance-search">Thema oder Fachbegriff suchen<input type="search" id="finance-search" placeholder="z. B. Duration, Bilanz, Ethik, Private Wealth"></label><label for="finance-filter">Bereich<select id="finance-filter"><option value="">Alle Bereiche</option>${['Kernbereich','Level III Kern','Wahlpfad','Ergänzung'].map(k=>`<option>${k}</option>`).join('')}</select></label><button class="btn ghost" type="button" id="finance-expand">Alle aufklappen</button><button class="btn ghost" type="button" id="finance-collapse">Alle zuklappen</button></div>
<p id="finance-results" role="status" aria-live="polite">${plan.length} Themenblöcke · ${lessons.length} Unterthemen</p>
<div id="finance-outline">${plan.map((t,i)=>`<details class="finance-topic" id="finance-${t.id}" data-kind="${t.kind}"><summary><span class="finance-number">${String(i).padStart(2,'0')}</span><span class="finance-topic-title"><strong>${escape(t.title)}</strong><small>${escape(t.english)}</small></span><span class="finance-badge">${t.kind}</span><span class="finance-count">${lessons.filter(l=>l.block===t.id).length} Kapitel</span></summary><div class="finance-subgroups">${t.groups.map(([name])=>`<div class="finance-subgroup"><h2>${escape(name)}</h2><ul>${lessons.filter(l=>l.block===t.id&&l.group===name).map(l=>`<li><a href="#lesson-${l.id}">${escape(l.title)}<small>CFA ${l.levels.map(n=>'Level '+n).join(' · ')}${l.lab?' · Interaktives Modell':''}</small></a></li>`).join('')}</ul></div>`).join('')}</div><p class="finance-topic-status">Kapitel anklicken · Vertiefungen und Lösungen bei Bedarf aufklappen</p></details>`).join('\n')}</div>
<p id="finance-empty" hidden>Keine passenden Themen. Versuche einen anderen Suchbegriff oder wähle „Alle Bereiche“.</p>
<details class="finance-sources"><summary>Curriculum, Quellen und Lernumfang</summary><p>Die Inhalte erläutern alle ${lessons.length} Themen dieser Übersicht. Sie sind eigenständige Lehr- und Nachschlagematerialien, keine vollständige Wiedergabe aller offiziellen Learning Outcomes oder ein Ersatz für das prüfungsjahrspezifische Curriculum. Grundlage sind die offiziellen <a href="${sourceFor(1).url}" target="_blank" rel="noopener">Level-I-</a>, <a href="${sourceFor(2).url}" target="_blank" rel="noopener">Level-II-</a> und <a href="${sourceFor(3).url}" target="_blank" rel="noopener">Level-III-Outlines 2026</a>. <a href="https://www.cfainstitute.org/about/press-room/2026/cfa-institute-announces-updates-to-cfa-program-curriculum" target="_blank" rel="noopener">Für 2027 gibt es Änderungen</a>. Kelly sowie Praxis- und Rechnerkapitel ergänzen den Lernweg.</p></details>
</section><section class="viewpage" id="page-finance-lesson" aria-label="Finance-Lernkapitel"></section><section class="viewpage" id="page-glossary" aria-label="Finance-Fachwörterbuch"></section>
<section class="viewpage" id="page-cfa" aria-label="CFA Level I 2027"></section>
<script type="application/json" id="cfa-data">${JSON.stringify(cfaData).replaceAll('<','\\u003c')}</script>
<script type="application/json" id="finance-data">${JSON.stringify(lessons).replaceAll('<','\\u003c')}</script>
<script type="application/json" id="finance-glossary-data">${JSON.stringify(glossary).replaceAll('<','\\u003c')}</script>
<!-- FINANCE PAGE END -->`;
html=html.replace(/<!-- FINANCE PAGE START -->[\s\S]*?<!-- FINANCE PAGE END -->/,()=>body);
const css='/* FINANCE STUDY CSS START */\n'+fs.readFileSync('finance-study.css','utf8')+'\n'+fs.readFileSync('finance-textbook.css','utf8')+'\n'+fs.readFileSync('finance-questions.css','utf8')+'\n'+fs.readFileSync('finance-illustrations.css','utf8')+'\n'+fs.readFileSync('finance-notation.css','utf8')+'\n'+fs.readFileSync('finance-cfa/style.css','utf8')+'\n/* FINANCE STUDY CSS END */';
if(html.includes('/* FINANCE STUDY CSS START */'))html=html.replace(/\/\* FINANCE STUDY CSS START \*\/[\s\S]*?\/\* FINANCE STUDY CSS END \*\//,()=>css);else html=html.replace('</style>',()=>css+'\n</style>');
const ui=fs.readFileSync('finance-ui.js','utf8').replace('/* DEEP HELPERS */',()=>fs.readFileSync('finance-deep-ui.js','utf8')+'\n'+fs.readFileSync('finance-questions-ui.js','utf8')+'\n'+fs.readFileSync('finance-illustrations-ui.js','utf8')+'\n'+fs.readFileSync('finance-notation-ui.js','utf8'));
const js='/* FINANCE STUDY JS START */\n'+fs.readFileSync('finance-models.cjs','utf8')+'\n'+ui+'\n'+fs.readFileSync('finance-cfa/engine.cjs','utf8')+'\n'+fs.readFileSync('finance-cfa/ui.js','utf8')+'\n/* FINANCE STUDY JS END */';
if(html.includes('/* FINANCE STUDY JS START */'))html=html.replace(/\/\* FINANCE STUDY JS START \*\/[\s\S]*?\/\* FINANCE STUDY JS END \*\//,()=>js);else html=html.replace('/* ================================================= Router */',()=>js+'\n/* ================================================= Router */');
html=html.replace(/<a class="module-card finance-card"[\s\S]*?<\/a>/,`<a class="module-card finance-card" href="#finance" data-open="finance"><span class="kicker">Finance</span><span class="module-symbol" aria-hidden="true">f*</span><h2>Finance Studio</h2><p>${lessons.length} Lernkapitel mit Theorie, Intuition, Beispielen und interaktiven Modellen – von Ethik bis zur Portfoliosteuerung.</p><span class="card-action">Finance lernen →</span></a>`);
html=html.replaceAll('umfassenden Finance-Themenplan','umfassenden Finance-Lernbereich');
const kellyFormulas=require('./kelly-formulas.cjs');
let kellyHtml=fs.readFileSync('kelly-studio.html','utf8').replace(/<!-- KELLY NOTATION START -->[\s\S]*?<!-- KELLY NOTATION END -->/g,''),kellyRendered=0;
kellyHtml=kellyHtml.replace(/(<(div|p) class="formula" data-math="([^"]+)">)[\s\S]*?(<\/\2>)/g,(all,open,tag,key,close)=>{
 const latex=kellyFormulas[key];if(!latex)throw Error('Kelly-LaTeX fehlt: '+key);kellyRendered++;return open+financeMath.renderLatex(latex)+close+notationBuild.kellyHelp(key);
});
if(kellyRendered!==Object.keys(kellyFormulas).length)throw Error(`Kelly-Formelzahl stimmt nicht: ${kellyRendered}/${Object.keys(kellyFormulas).length}`);
const kellyMathCss='<style id="kelly-math-css">.formula{overflow:auto;white-space:normal}.formula .katex,.formula math{display:block;min-width:max-content;text-align:center}.formula math{font-family:"Cambria Math","STIX Two Math","Times New Roman",serif;font-size:1.08em;margin:auto}</style>';
if(kellyHtml.includes('<style id="kelly-math-css">'))kellyHtml=kellyHtml.replace(/<style id="kelly-math-css">[\s\S]*?<\/style>/,kellyMathCss);else kellyHtml=kellyHtml.replace('</head>',kellyMathCss+'\n</head>');
const notationCss='<style id="kelly-notation-css">'+fs.readFileSync('finance-notation.css','utf8')+'</style>';
kellyHtml=kellyHtml.includes('<style id="kelly-notation-css">')?kellyHtml.replace(/<style id="kelly-notation-css">[\s\S]*?<\/style>/,()=>notationCss):kellyHtml.replace('</head>',()=>notationCss+'\n</head>');
html=notationBuild.statistics(html);
fs.writeFileSync('kelly-studio.html',kellyHtml);
fs.writeFileSync('index.html',html);console.log(JSON.stringify({blocks:plan.length,lessons:lessons.length,models:Object.keys(models).length,interactiveLessons:lessons.filter(l=>l.lab).length,glossary:glossary.length,financeMath:lessons.filter(l=>l.formulaTex).length,derivationSections:lessons.reduce((n,l)=>n+l.deep.sections.length,0),comparisons:lessons.reduce((n,l)=>n+l.deep.comparisons.length,0),workedMath:lessons.reduce((n,l)=>n+l.textbook.steps.filter(s=>s.mathml).length,0),questions:lessons.reduce((n,l)=>n+l.questions.length,0),illustrations:lessons.reduce((n,l)=>n+l.illustrations.length,0),kellyMath:kellyRendered}));
