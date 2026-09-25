/* Offline CFA learning path and assessment UI. All authored content is embedded. */
window.FinanceCFA=(()=>{
 'use strict';
 const D=JSON.parse(document.getElementById('cfa-data').textContent),E=window.CFAEngine;
 const modules=new Map(D.modules.map(m=>[m.id,m])),units=new Map(D.units.map(u=>[u.id,u])),questions=new Map(D.questions.map(q=>[q.id,q]));
 const root=document.getElementById('page-cfa'),key='studio-cfa-2027-v1';
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const prose=s=>window.FinanceStudy.glossaryText(s);
 const format=n=>n.toLocaleString('de-DE',{maximumFractionDigits:1});
 const label=t=>D.topics.find(x=>x.id===t)?.title||t;
 let scrollFrame=null;
 function updateScrollRegions(){
  if(scrollFrame!==null)return;
  scrollFrame=requestAnimationFrame(()=>{
   scrollFrame=null;
   for(const el of root.querySelectorAll('.study-equation,.cfa-table')){
    const overflow=el.clientWidth>0&&el.scrollWidth>el.clientWidth+1,isFormula=el.classList.contains('study-equation');
    let hint=el.nextElementSibling;
    if(!hint?.classList.contains('cfa-scroll-hint')){hint=document.createElement('p');hint.className='cfa-scroll-hint';hint.textContent='↔ '+(isFormula?'Die Formel':'Die Tabelle')+' ist seitlich verschiebbar.';el.after(hint);}
    hint.hidden=!overflow;
    if(overflow){el.tabIndex=0;el.setAttribute('role','region');el.setAttribute('aria-label',isFormula?'Seitlich verschiebbare Formel':'Seitlich verschiebbare Tabelle');}
    else{el.removeAttribute('tabindex');el.removeAttribute('role');el.removeAttribute('aria-label');}
   }
  });
 }
 new MutationObserver(updateScrollRegions).observe(root,{childList:true,subtree:true});
 new ResizeObserver(updateScrollRegions).observe(root);
 root.addEventListener('toggle',updateScrollRegions,true);
 window.addEventListener('resize',updateScrollRegions);
 let storageOK=true,exam=null,training=null,history=[],runs=[],lastRoute='cfa',timer=null,contentUpdated=false;
 try{
  const saved=JSON.parse(localStorage.getItem(key)||'null');
  const restored=E.reconcile(saved,D.questions,D.version);
  ({exam,training,history,runs}=restored);contentUpdated=restored.updated;
 }catch{storageOK=false;}
 function save(){try{localStorage.setItem(key,JSON.stringify({schema:2,version:D.version,questionVersions:Object.fromEntries(D.questions.map(q=>[q.id,q.revision])),exam,training,history,runs}));storageOK=true;}catch{storageOK=false;}const note=root.querySelector('#cfa-storage');if(note)note.hidden=storageOK;}
 function resolve(route){
  const [base,view='',focus='']=route.split('~');if(base!=='cfa')return null;
  if(!view)return {view:'home'};
  if(view.startsWith('learn-')&&modules.has(view.slice(6)))return {view:'learn',id:view.slice(6),focus};
  if(['practice','exam','journal','results'].includes(view))return {view,focus};
  return null;
 }
 function header(title,subtitle=''){
  const updateNotice=contentUpdated?'<p class="cfa-notice" role="status">Einige Aufgaben wurden überarbeitet. Betroffene Übungssets oder Klausuren wurden zurückgesetzt. Antworten zu unveränderten Aufgaben bleiben erhalten; frühere Klausurversuche bleiben als Wiederholung erkennbar.</p>':'';
  return updateNotice+'<nav class="study-breadcrumb" aria-label="Lernpfad"><a href="#finance">Finance Studio</a><a href="#cfa">CFA Level I · 2027</a></nav><h1 id="cfa-heading" tabindex="-1">'+esc(title)+'</h1>'+(subtitle?'<p class="lede">'+esc(subtitle)+'</p>':'')+
   '<nav class="cfa-tabs" aria-label="CFA-Lernbereich"><a href="#cfa">Lernpfad</a><a href="#cfa~practice">Training</a><a href="#cfa~exam">Probeklausuren</a><a href="#cfa~journal">Fehlerjournal</a></nav><p id="cfa-storage" class="cfa-notice" role="status" '+(storageOK?'hidden':'')+'>Der Browserspeicher ist nicht verfügbar oder enthielt ungültige Daten. Du kannst weiterarbeiten; sichere wichtige Ergebnisse vor dem Schließen.</p>';
 }
 let tableSerial=0;
 function blocks(items){
  return items.map(b=>{
   if(typeof b==='string')return '<p>'+prose(b)+'</p>';
   if(b.kind==='figure')return '<figure class="cfa-figure"><figcaption><strong>'+esc(b.title)+'</strong><p>'+prose(b.caption)+'</p></figcaption><div class="cfa-figure-plot" role="region" tabindex="0" aria-label="Seitlich verschiebbare Grafik">'+b.svg+'</div><p class="cfa-figure-hint" aria-hidden="true">&#8596; Die Grafik ist seitlich verschiebbar.</p><ul class="cfa-figure-legend">'+b.legend.map(s=>'<li><span style="border-top:3px '+(s.dash?'dashed':'solid')+' '+s.color+'"></span>'+esc(s.name)+'</li>').join('')+'</ul><p>'+prose(b.reading)+'</p><details class="study-details"><summary>Werte der Abbildung</summary>'+blocks([{kind:'table',caption:'Gezeichnete Werte nach Datenreihe',headers:['Reihe',b.plot.xLabel,b.plot.yLabel],rows:b.plot.series.flatMap(s=>s.points.map(p=>[s.name,format(p[0]),format(p[1])]))}])+'</details></figure>';
   if(b.kind==='formula')return '<div class="cfa-formula"><div class="study-equation">'+b.mathml+'</div><p>'+prose(b.reading)+'</p><details class="formula-notation"><summary>Symbole und Einheiten</summary><dl class="formula-symbols">'+b.symbols.map(s=>'<div><dt>'+s.mathml+'</dt><dd>'+prose(s.meaning)+'</dd></div>').join('')+'</dl></details></div>';
   if(b.kind==='table'){
    const captionId='cfa-table-caption-'+(++tableSerial);
    return '<figure class="cfa-table-block"><figcaption id="'+captionId+'">'+esc(b.caption)+'</figcaption><div class="cfa-table"><table aria-labelledby="'+captionId+'"><thead><tr>'+b.headers.map(h=>'<th scope="col">'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+b.rows.map(row=>'<tr>'+row.map(cell=>'<td>'+prose(cell)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div></figure>';
   }
   if(b.kind==='example')return '<section class="cfa-example"><h3>'+esc(b.title)+'</h3><p><strong>Gegeben:</strong> '+prose(b.given)+'</p><ol>'+b.steps.map(step=>'<li>'+blocks([step])+'</li>').join('')+'</ol><p class="cfa-takeaway">'+prose(b.conclusion)+'</p></section>';
   return '';
  }).join('');
 }
 function home(){
  const all=D.coverage.flatMap(m=>m.objectives),explained=all.filter(o=>o.sections.length).length,practised=all.filter(o=>o.practice.length).length;
  root.innerHTML=header('Dein Lernpfad für CFA Level I 2027','Lernziele nachschlagen, Zusammenhänge durcharbeiten und anschließend ohne Lösungshilfe anwenden.')+
   '<div class="cfa-metrics"><div><strong>'+D.modules.length+'</strong><span>Module im Abgleich</span></div><div><strong>'+explained+' / '+all.length+'</strong><span>Lernziele mit neuer Vertiefung</span></div><div><strong>'+practised+' / '+all.length+'</strong><span>Lernziele mit eigenständiger Trainingsfrage</span></div><div><strong>'+D.questions.filter(q=>q.pool==='practice').length+'</strong><span>Trainingsfragen</span></div></div>'+
   (!D.release?'<p class="cfa-notice">Die Überarbeitung läuft. Offene Einträge sind sichtbar; ein Link auf ein bisheriges Kapitel wird nicht als abgeschlossene Vertiefung gezählt. Vollständige Probeklausuren werden erst nach Befüllung freigeschaltet.</p>':'')+
   '<p>Arbeite eine Einheit durch und rechne die Beispiele zunächst selbst. Das Training enthält eigene englische Fragen mit deutschen Lösungswegen. Klausurfragen sind vom Trainingspool getrennt. Die Ergebnisse beschreiben diese Aufgaben; sie sind keine offizielle CFA-Bestehensprognose.</p>'+
   '<div class="cfa-controls"><label>Einheit oder Lernziel suchen<input id="cfa-search" type="search" placeholder="z. B. EPS, Duration, Standard IV"></label><label>Themenbereich<select id="cfa-topic"><option value="">Alle Themen</option>'+D.topics.map(t=>'<option value="'+t.id+'">'+esc(t.title)+'</option>').join('')+'</select></label></div>'+
   '<p id="cfa-search-count" role="status"></p><div id="cfa-curriculum">'+D.topics.map(t=>'<section class="cfa-topic" data-topic="'+t.id+'"><h2>'+esc(t.title)+' <small>'+t.min+'–'+t.max+' % der Prüfung</small></h2>'+D.modules.filter(m=>m.topic===t.id).map(m=>{
    const coverage=D.coverage.find(x=>x.id===m.id),u=units.get(m.id),ready=coverage.objectives.filter(o=>o.sections.length&&o.practice.length).length;
    return '<details class="cfa-module" data-search="'+esc((m.title+' '+m.objectives.map(o=>o.label).join(' ')).toLocaleLowerCase('de'))+'"><summary><span>'+esc(m.title)+'</span><small>'+ready+'/'+m.objectives.length+' erklärt und geübt</small></summary><p>'+(u?'<a href="#cfa~learn-'+m.id+'">Lerneinheit öffnen →</a>':'Vertiefung noch in Bearbeitung.')+'</p><ul>'+m.objectives.map(o=>{const c=coverage.objectives.find(x=>x.id===o.id);return '<li><strong>'+o.letter.toUpperCase()+': '+esc(o.label)+'</strong><span class="cfa-coverage">'+(c.sections.length?'Erklärung vorhanden':'Erklärung offen')+' · '+(c.practice.length?c.practice.length+' Trainingsfragen':'Übung offen')+'</span></li>';}).join('')+'</ul><p>Grundlagen: '+m.lessons.map(id=>'<a href="#lesson-'+id+'">'+esc(window.FinanceStudy.lessons.find(l=>l.id===id)?.title||id)+'</a>').join(' · ')+'</p><a href="'+m.source+'" target="_blank" rel="noopener">Offizieller Outline: '+esc(t.title)+', Modul '+m.ordinal+'</a></details>';
   }).join('')+'</section>').join('')+'</div>'+
   '<details class="study-details"><summary>Prüfungsrahmen und Pflichtmodule</summary><p>Level I besteht aus 180 Fragen mit je drei Antwortmöglichkeiten, verteilt auf zwei Sitzungen zu je 135 Minuten. Es gibt keinen Punktabzug für falsche Antworten. Zusätzlich muss ein offizielles Practical Skills Module abgeschlossen werden, damit das CFA Institute das Ergebnis freigibt; die Lernkapitel hier ersetzen dieses Pflichtmodul nicht.</p><p><a href="https://www.cfainstitute.org/programs/cfa-program/candidate-resources/level-i-exam" target="_blank" rel="noopener">Prüfungsformat und Gewichtungen beim CFA Institute</a> · <a href="'+D.source+'" target="_blank" rel="noopener">Lernziele 2027 im Original</a></p></details>';
  const update=()=>{const query=root.querySelector('#cfa-search').value.trim().toLocaleLowerCase('de'),topic=root.querySelector('#cfa-topic').value;let count=0;root.querySelectorAll('.cfa-topic').forEach(section=>{let shown=0;section.querySelectorAll('.cfa-module').forEach(el=>{el.hidden=!!(topic&&section.dataset.topic!==topic)||!el.dataset.search.includes(query);if(!el.hidden)shown++;});section.hidden=!shown;count+=shown;});root.querySelector('#cfa-search-count').textContent=count+' von '+D.modules.length+' Einheiten';};
  root.querySelector('#cfa-search').oninput=update;root.querySelector('#cfa-topic').onchange=update;update();
 }
 function learn(id,focus){
  const m=modules.get(id),u=units.get(id);
  root.innerHTML=header(m.title,label(m.topic)+' · CFA Level I 2027')+(u?
   '<nav class="study-jumps" aria-label="In dieser Lerneinheit">'+u.sections.map(s=>'<a href="#cfa~learn-'+id+'~'+s.id+'">'+esc(s.title)+'</a>').join('')+'</nav><div class="cfa-intro">'+u.intro.map(p=>'<p>'+prose(p)+'</p>').join('')+'</div>'+
   u.sections.map(s=>'<section class="study-section cfa-section" id="cfa-section-'+s.id+'" tabindex="-1"><h2>'+esc(s.title)+'</h2><p class="cfa-objective">Lernzielbezug: '+s.objectives.map(l=>l.toUpperCase()).join(', ')+'</p>'+blocks(s.blocks)+'</section>').join('')+
   (u.related?.length?'<nav class="study-section cfa-related" aria-label="Zusammenhänge vertiefen"><h2>Zusammenhänge vertiefen</h2><ul>'+u.related.map(r=>'<li><a href="#cfa~learn-'+r.unit+'~'+r.section+'">'+esc(r.label)+'</a></li>').join('')+'</ul></nav>':'')+
   '<section class="study-section"><h2>Jetzt selbst anwenden</h2><p>Die Aufgaben verwenden neue Zahlen und Situationen. Löse sie vor dem Öffnen der Begründung.</p><button class="btn" data-train-unit="'+id+'">Aufgaben zu dieser Einheit starten</button></section><details class="study-details"><summary>Quellen und Einordnung</summary><p>Eigenständige Erklärungen und konstruierte Beispiele. Der Lernzielabgleich bezieht sich auf 2027; fachliche Grundlagenquellen können aus früheren unverändert relevanten Ausgaben stammen.</p><ul>'+[...u.sources,{title:'CFA Institute: zugehöriger Abschnitt im Outline 2027',url:m.source}].map(s=>'<li><a href="'+esc(s.url)+'" target="_blank" rel="noopener">'+esc(s.title)+'</a></li>').join('')+'</ul></details>':
   '<p class="cfa-notice">Diese Vertiefung wird noch ausgearbeitet.</p>')+
   '<section class="study-section"><h2>Verbindungen im Finance Studio</h2><ul>'+m.lessons.map(id=>'<li><a href="#lesson-'+id+'">'+esc(window.FinanceStudy.lessons.find(l=>l.id===id)?.title||id)+'</a></li>').join('')+'</ul></section>';
  root.querySelector('[data-train-unit]')?.addEventListener('click',()=>{const ids=D.questions.filter(q=>q.pool==='practice'&&q.unit===id).map(q=>q.id);startTraining(ids);location.hash='cfa~practice';});
  updateScrollRegions();
  if(focus)requestAnimationFrame(()=>{const el=document.getElementById('cfa-section-'+focus);if(el){el.scrollIntoView({block:'start'});el.focus({preventScroll:true});}});
 }
 function confidenceHTML(id,value,disabled=false){
  return '<fieldset class="cfa-confidence"><legend>Wie sicher bist du?</legend>'+[['sure','Sicher'],['unsure','Unsicher'],['guess','Geraten']].map(([v,t])=>'<label><input type="radio" name="confidence-'+id+'" value="'+v+'" '+(value===v?'checked ':'')+(disabled?'disabled':'')+'> '+t+'</label>').join('')+'</fieldset>';
 }
 function questionHTML(q,selected,{revealed=false,confidence='',examMode=false}={}){
  return '<article class="cfa-question"><p class="kicker" lang="en">'+esc(label(q.topic))+'</p><h2 id="cfa-question-title" tabindex="-1" lang="en">'+esc(q.stem)+'</h2>'+
   (q.given?blocks(q.given):'')+'<fieldset class="cfa-choices" '+(revealed?'disabled':'')+'><legend class="sr-only">Antwort auswählen</legend>'+q.options.map((o,i)=>'<label class="'+(revealed?(i===q.correct?'correct':i===selected?'incorrect':''):'')+'"><input type="radio" name="cfa-answer" value="'+i+'" '+(selected===i?'checked':'')+'><span lang="en"><b>'+String.fromCharCode(65+i)+'.</b> '+esc(o.text)+'</span></label>').join('')+'</fieldset>'+
   confidenceHTML(q.id,confidence,revealed)+
   (revealed?solutionHTML(q,selected):examMode?'':'<button class="btn" id="cfa-check">Antwort prüfen</button><p id="cfa-answer-required" role="alert" hidden>Wähle zunächst eine Antwort aus.</p>')+'</article>';
 }
 function solutionHTML(q,selected){
  return '<section class="cfa-solution"><h3>'+(selected===q.correct?'Richtig.':selected===null?'Nicht beantwortet.':'Noch nicht richtig.')+' Antwort '+String.fromCharCode(65+q.correct)+'</h3>'+blocks(q.solution)+'<h4>Warum passen die anderen Antworten nicht?</h4><ul>'+q.options.map((o,i)=>'<li><strong>'+String.fromCharCode(65+i)+':</strong> '+prose(o.why)+'</li>').join('')+'</ul><p><a href="#cfa~learn-'+q.unit+'~'+q.section+'">Zusammenhang und Rechenweg nacharbeiten →</a></p></section>';
 }
 function startTraining(ids){if(!ids.length)return;training={ids,position:0,answers:{},confidence:{},revealed:[]};save();}
 function trainingView(){
  root.innerHTML=header('Eigenständiges Prüfungstraining','Englische Aufgaben · deutsche Erklärungen · Klausurfragen bleiben für die Probeklausuren reserviert.')+
   '<div class="cfa-controls"><label>Thema<select id="cfa-train-topic"><option value="">Alle Themen</option>'+D.topics.map(t=>'<option value="'+t.id+'">'+esc(t.title)+'</option>').join('')+'</select></label><label>Umfang<select id="cfa-train-count"><option>10</option><option>20</option><option>40</option></select></label><button class="btn" id="cfa-start-training">Neues Set starten</button></div><p id="cfa-training-note" role="status"></p><div id="cfa-training-work"></div>';
  root.querySelector('#cfa-start-training').onclick=()=>{
   const ids=E.practice(D.questions,{topic:root.querySelector('#cfa-train-topic').value,limit:Number(root.querySelector('#cfa-train-count').value),history});
   if(!ids.length){root.querySelector('#cfa-training-note').textContent='Für diesen Bereich sind noch keine Trainingsfragen verfügbar.';return;}
   startTraining(ids);drawTraining();
  };
  drawTraining();
 }
 function drawTraining(){
  const area=root.querySelector('#cfa-training-work');if(!area)return;
  if(!training){area.innerHTML='<p>Wähle ein Thema und starte ein Set. Noch unbekannte Aufgaben werden bevorzugt.</p>';return;}
  const id=training.ids[training.position],q=questions.get(id),revealed=training.revealed.includes(id),selected=training.answers[id];
  area.innerHTML='<p class="cfa-position">Frage '+(training.position+1)+' von '+training.ids.length+' · '+training.revealed.length+' ausgewertet</p>'+questionHTML(q,selected,{revealed,confidence:training.confidence[id]})+
   '<div class="cfa-actions"><button class="btn ghost" id="cfa-train-prev" '+(training.position===0?'disabled':'')+'>← Vorherige</button><button class="btn" id="cfa-train-next" '+(training.position===training.ids.length-1?'disabled':'')+'>Nächste →</button></div>'+
   (training.revealed.length===training.ids.length?'<p class="cfa-takeaway">Set abgeschlossen: '+E.grade(D.questions,training.ids,training.answers).correct+' von '+training.ids.length+' richtig. <a href="#cfa~journal">Fehler gezielt nacharbeiten</a></p>':'');
  area.querySelectorAll('input[name="cfa-answer"]').forEach(el=>el.onchange=()=>{training.answers[id]=Number(el.value);save();});
  area.querySelectorAll('.cfa-confidence input').forEach(el=>el.onchange=()=>{training.confidence[id]=el.value;save();});
  area.querySelector('#cfa-check')?.addEventListener('click',()=>{
   if(!Number.isInteger(training.answers[id])){area.querySelector('#cfa-answer-required').hidden=false;return;}
   training.revealed.push(id);history.push({id,selected:training.answers[id],correct:training.answers[id]===q.correct,confidence:training.confidence[id]||'unspecified',at:Date.now(),version:D.version,revision:q.revision});history=history.slice(-4000);save();drawTraining();area.querySelector('.cfa-solution').scrollIntoView({block:'nearest'});
  });
  for(const [button,delta] of [['#cfa-train-prev',-1],['#cfa-train-next',1]])area.querySelector(button).onclick=()=>{training.position+=delta;save();drawTraining();root.querySelector('#cfa-question-title').focus();};
 }
 function recordFinished(){
  if(exam?.phase!=='finished'||exam.recorded)return;
  const score=E.grade(D.questions,exam.items,exam.answers,exam.confidence);exam.recorded=true;
  for(const r of score.results)history.push({...r,at:exam.ended,version:D.version,revision:questions.get(r.id).revision});
  history=history.slice(-4000);runs.push({mock:exam.mock,percent:score.percent,at:exam.ended,seenBefore:exam.seenBefore});runs=runs.slice(-30);save();
 }
 function examView(){
  if(exam)exam=E.tick(exam);recordFinished();
  root.innerHTML=header('Probeklausuren','Je 180 eigene Fragen · zwei Sitzungen zu je 135 Minuten · Auswertung nach der vollständigen Abgabe.');
  if(!exam||exam.phase==='finished'){
   root.insertAdjacentHTML('beforeend','<div class="cfa-mock-list">'+['mock-a','mock-b'].map((id,i)=>{
    const ready=E.ready(D.questions,id),n=Object.values(D.inventory[id]).reduce((a,b)=>a+b,0),seen=runs.some(r=>r.mock===id);
    return '<section class="study-section"><h2>Probeklausur '+String.fromCharCode(65+i)+'</h2><p>'+n+' / 180 Fragen vorhanden. '+(seen?'Bereits bearbeitet: Ein weiterer Versuch ist eine Wiederholung.':'Noch nicht abgegeben.')+'</p><p>90 Fragen pro Sitzung. Innerhalb einer Sitzung kannst du zurückspringen und Fragen markieren. Nach Abgabe oder Zeitablauf ist die Sitzung geschlossen. Zwischen den Sitzungen bestimmst du die Pausenlänge; während einer Sitzung läuft die Zeit auch bei Navigation oder Neuladen weiter.</p><button class="btn" data-start-mock="'+id+'" '+(ready?'':'disabled')+'>Klausur '+String.fromCharCode(65+i)+' starten</button></section>';
   }).join('')+'</div>');
   root.querySelectorAll('[data-start-mock]').forEach(b=>b.onclick=()=>{exam=E.createExam(D.questions,b.dataset.startMock);exam.seenBefore=runs.some(r=>r.mock===exam.mock);save();examView();});
   if(exam?.phase==='finished')root.insertAdjacentHTML('beforeend','<p><a class="btn ghost" href="#cfa~results">Letzte Klausur auswerten →</a></p>');
   return;
  }
  if(exam.phase==='break'){
   root.insertAdjacentHTML('beforeend','<section class="study-section"><h2>Erste Sitzung abgeschlossen</h2><p>Deine Antworten aus Sitzung 1 sind gespeichert und können nicht mehr verändert werden. Lösungen werden nach Sitzung 2 angezeigt.</p><p>Nimm dir eine Pause. Die zweite Uhr beginnt erst, wenn du die nächste Sitzung startest.</p><button class="btn" id="cfa-second">Sitzung 2 beginnen · 135 Minuten</button></section>');
   root.querySelector('#cfa-second').onclick=()=>{exam=E.transition(exam,{type:'begin-second'});save();examView();};return;
  }
  drawExam();
 }
 function drawExam(){
  const [lo,hi]=E.bounds(exam),id=exam.items[exam.position],q=questions.get(id),blank=exam.items.slice(lo,hi).filter(id=>!Number.isInteger(exam.answers[id])).length;
  root.insertAdjacentHTML('beforeend','<div class="cfa-exam-status"><strong>Sitzung '+(lo===0?1:2)+' · Frage '+(exam.position-lo+1)+' / 90</strong><span id="cfa-clock" role="timer" aria-live="off"></span><span id="cfa-blank">'+blank+' unbeantwortet</span></div>'+
   '<div class="cfa-exam-layout"><div>'+questionHTML(q,exam.answers[id],{examMode:true,confidence:exam.confidence[id]})+
   '<div class="cfa-actions"><button class="btn ghost" id="cfa-exam-prev" '+(exam.position===lo?'disabled':'')+'>← Vorherige</button><button class="btn ghost" id="cfa-flag" aria-pressed="'+!!exam.flags[id]+'">'+(exam.flags[id]?'Markierung entfernen':'Zur Prüfung markieren')+'</button><button class="btn" id="cfa-exam-next" '+(exam.position===hi-1?'disabled':'')+'>Nächste →</button></div></div>'+
   '<aside class="cfa-question-nav" aria-label="Fragen dieser Sitzung">'+exam.items.slice(lo,hi).map((id,i)=>'<button type="button" data-position="'+(lo+i)+'" class="'+(Number.isInteger(exam.answers[id])?'answered ':'')+(exam.flags[id]?'flagged ':'')+'" aria-label="Frage '+(i+1)+(Number.isInteger(exam.answers[id])?', beantwortet':'')+(exam.flags[id]?', markiert':'')+'" '+(exam.position===lo+i?'aria-current="step"':'')+'>'+(i+1)+(exam.flags[id]?' ⚑':'')+'</button>').join('')+'</aside></div>'+
   '<details class="study-details cfa-submit"><summary>Sitzung abgeben</summary><p>Aktuell sind <span id="cfa-submit-blank">'+blank+'</span> Fragen unbeantwortet. Nach der Abgabe kannst du diese Sitzung nicht mehr bearbeiten.</p><button class="btn" id="cfa-submit-session">Sitzung endgültig abgeben</button></details>');
  root.querySelectorAll('input[name="cfa-answer"]').forEach(el=>el.onchange=()=>{
   exam=E.transition(exam,{type:'answer',choice:Number(el.value)});save();
   if(!E.active(exam)){recordFinished();examView();return;}
   const button=root.querySelector('[data-position="'+exam.position+'"]');button?.classList.add('answered');
   const blank=exam.items.slice(lo,hi).filter(id=>!Number.isInteger(exam.answers[id])).length;
   root.querySelector('#cfa-blank').textContent=blank+' unbeantwortet';root.querySelector('#cfa-submit-blank').textContent=String(blank);
  });
  root.querySelectorAll('.cfa-confidence input').forEach(el=>el.onchange=()=>{exam=E.transition(exam,{type:'confidence',value:el.value});save();if(!E.active(exam)){recordFinished();examView();}});
  root.querySelector('#cfa-flag').onclick=()=>{exam=E.transition(exam,{type:'flag'});save();examView();root.querySelector('#cfa-flag')?.focus();};
  const move=position=>{exam=E.transition(exam,{type:'navigate',position});save();examView();root.querySelector('#cfa-question-title')?.focus();};
  root.querySelectorAll('[data-position]').forEach(b=>b.onclick=()=>move(Number(b.dataset.position)));
  root.querySelector('#cfa-exam-prev').onclick=()=>move(exam.position-1);root.querySelector('#cfa-exam-next').onclick=()=>move(exam.position+1);
  root.querySelector('#cfa-submit-session').onclick=()=>{exam=E.transition(exam,{type:'submit'});save();recordFinished();if(exam.phase==='finished')location.hash='cfa~results';else examView();};
  clock();
 }
 function clock(){
  if(!exam||!E.active(exam))return;
  const prior=exam.phase;exam=E.tick(exam);
  if(exam.phase!==prior){save();recordFinished();if(resolve(lastRoute)?.view==='exam'){if(exam.phase==='finished')location.hash='cfa~results';else examView();}return;}
  const el=root.querySelector('#cfa-clock');if(el){const remaining=Math.max(0,Math.ceil((exam.deadline-Date.now())/1000));el.textContent='Restzeit '+Math.floor(remaining/60)+':'+String(remaining%60).padStart(2,'0');el.classList.toggle('urgent',remaining<=300);}
 }
 function resultsView(){
  if(exam)exam=E.tick(exam);recordFinished();
  root.innerHTML=header('Klausurauswertung');
  if(exam?.phase!=='finished'){root.insertAdjacentHTML('beforeend','<p>Die vollständige Auswertung wird nach beiden Sitzungen angezeigt. <a href="#cfa~exam">Zur Probeklausur</a></p>');return;}
  const score=E.grade(D.questions,exam.items,exam.answers,exam.confidence);
  root.insertAdjacentHTML('beforeend','<div class="cfa-metrics"><div><strong>'+format(score.percent)+' %</strong><span>'+score.correct+' / '+score.total+' richtig</span></div><div><strong>'+score.unanswered+'</strong><span>Unbeantwortet</span></div><div><strong>'+score.confidentErrors+'</strong><span>Sicher eingeschätzt, dennoch falsch</span></div></div>'+
   '<p>'+ (exam.seenBefore?'Dies war eine Wiederholung einer bereits bearbeiteten Klausur. ':'')+'Die Quote gilt für diese eigenen Aufgaben. Schwierigkeit und Ergebnisse sind nicht an offiziellen CFA-Prüfungen kalibriert.</p><div class="cfa-table"><table><caption>Ergebnisse nach Themenbereich</caption><thead><tr><th>Thema</th><th>Richtig</th><th>Quote</th></tr></thead><tbody>'+Object.entries(score.topics).map(([t,s])=>'<tr><td>'+esc(label(t))+'</td><td>'+s.correct+' / '+s.total+'</td><td>'+format(s.percent)+' %</td></tr>').join('')+'</tbody></table></div>'+
   '<h2>Aufgaben nacharbeiten</h2><label class="cfa-review-filter"><input type="checkbox" id="cfa-errors-only"> Nur falsche und unbeantwortete Fragen</label><div id="cfa-review">'+score.results.map((r,i)=>'<details class="cfa-module" data-correct="'+r.correct+'"><summary><span>'+ (i+1)+'. '+esc(label(r.topic))+'</span><small>'+(r.correct?'Richtig':r.selected===null?'Unbeantwortet':'Falsch')+'</small></summary><p lang="en">'+esc(questions.get(r.id).stem)+'</p><p>Deine Antwort: '+(r.selected===null?'keine':String.fromCharCode(65+r.selected))+'</p>'+solutionHTML(questions.get(r.id),r.selected)+'</details>').join('')+'</div><p><a href="#cfa~journal">Zum Fehlerjournal →</a></p>');
  root.querySelector('#cfa-errors-only').onchange=e=>root.querySelectorAll('#cfa-review details[data-correct]').forEach(d=>{d.hidden=e.target.checked&&d.dataset.correct==='true';});
 }
 function journalView(){
  const entries=E.journal(history);
  root.innerHTML=header('Dein Fehlerjournal','Zuletzt falsche Antworten und geratene Treffer gezielt nacharbeiten.')+
   '<p>'+entries.length+' offene Lernpunkte aus '+history.length+' gespeicherten Antworten. Eine später richtig und nicht geraten gelöste Trainingsaufgabe verschwindet aus dieser Liste. Bei Klausurfragen helfen zuerst die verlinkte Erklärung und neue Trainingsfälle.</p>'+
   (entries.length?entries.map(e=>{const q=questions.get(e.id);return '<details class="cfa-module"><summary><span>'+esc(modules.get(q.unit)?.title||label(q.topic))+'</span><small>'+(e.correct?'Geratener Treffer':e.confidence==='sure'?'Selbstsicherer Fehler':'Nacharbeiten')+'</small></summary><p lang="en">'+esc(q.stem)+'</p>'+solutionHTML(q,e.selected??null)+'<button class="btn ghost" data-review-unit="'+q.unit+'">Neue Trainingsfälle zur Einheit</button></details>';}).join(''):'<p class="cfa-takeaway">Noch keine offenen Lernpunkte. Das bedeutet nur, dass hier keine entsprechenden Antworten gespeichert sind.</p>')+
   '<button class="btn ghost" id="cfa-export">Ergebnisse als JSON sichern</button>';
  root.querySelectorAll('[data-review-unit]').forEach(b=>b.onclick=()=>{const ids=E.practice(D.questions.filter(q=>q.unit===b.dataset.reviewUnit),{limit:10,history});startTraining(ids);location.hash='cfa~practice';});
  root.querySelector('#cfa-export').onclick=()=>{const blob=new Blob([JSON.stringify({year:2027,materialVersion:D.version,history,runs},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='finance-studio-cfa-2027-ergebnisse.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
 }
 function render(route){
  const r=resolve(route);if(!r)return;lastRoute=route;clearInterval(timer);
  if(r.view==='home')home();else if(r.view==='learn')learn(r.id,r.focus);else if(r.view==='practice')trainingView();else if(r.view==='exam')examView();else if(r.view==='journal')journalView();else resultsView();
  timer=setInterval(clock,500);
  if(!r.focus)requestAnimationFrame(()=>{root.querySelector('#cfa-heading')?.focus({preventScroll:true});document.getElementById('main-content').scrollIntoView({block:'start'});});
 }
 function onHide(){clearInterval(timer);timer=null;}
 return {resolve,render,onHide,data:D,blocks};
})();
