/* Finance learning UI, embedded by build-finance.cjs. */
window.FinanceStudy=(()=>{
 const lessons=JSON.parse(document.getElementById('finance-data').textContent);
 const byId=Object.fromEntries(lessons.map(l=>[l.id,l]));
 const glossary=JSON.parse(document.getElementById('finance-glossary-data').textContent);
 const glossaryById=Object.fromEntries(glossary.map(g=>[g.id,g]));
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const escapeReg=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 const labelMap=new Map(glossary.flatMap(g=>[g.term,...g.aliases].map(label=>[label.toLocaleLowerCase('de'),g])));
 const glossaryPattern=new RegExp(`(^|[^\\p{L}\\p{N}])(${[...labelMap.keys()].sort((a,b)=>b.length-a.length).map(escapeReg).join('|')})(?=$|[^\\p{L}\\p{N}])`,'giu');
 const glossaryText=value=>{
  const source=String(value);let result='',last=0;
  for(const match of source.matchAll(glossaryPattern)){
   const prefix=match[1],label=match[2],entry=labelMap.get(label.toLocaleLowerCase('de'));
   result+=esc(source.slice(last,match.index))+esc(prefix)+`<a class="term-link" href="#glossary~${entry.id}" title="${esc(entry.definition)}" aria-label="${esc(label)}: Definition öffnen">${esc(label)}</a>`;
   last=match.index+match[0].length;
  }
  return result+esc(source.slice(last));
 };
 const fmt=(n,d=2)=>n.toLocaleString('de-DE',{maximumFractionDigits:d});
 const link=(id,label,focus='')=>`<a href="#${byId[id]?'lesson-':''}${id}${focus?'~'+focus:''}">${esc(label)}</a>`;
 /* DEEP HELPERS */
 const paragraph=(title,body,cls='',id='')=>`<section class="study-section ${cls}" ${id?`id="study-${id}" tabindex="-1"`:''}><h2>${title}</h2><p>${glossaryText(body)}</p></section>`;
 const details=(title,body,id='')=>`<details class="study-details" ${id?`id="${id}"`:''}><summary>${title}</summary><p>${glossaryText(body)}</p></details>`;
 const textbookSection=b=>b?`<section class="study-section textbook-explanation" id="study-explanation" tabindex="-1"><h2>${esc(b.heading)}</h2>${b.explanation.map(p=>`<p>${glossaryText(p)}</p>`).join('')}${b.table?`<div class="textbook-table"><table><caption>Die wichtigsten Unterschiede im Überblick</caption><thead><tr>${b.table.headers.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${b.table.rows.map(row=>`<tr>${row.map(v=>`<td>${glossaryText(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:''}</section>`:'';
 const glossaryNote=g=>g.note?'<details class="study-details glossary-note"><summary>'+esc(g.note.title)+'</summary>'+g.note.paragraphs.map(p=>'<p>'+glossaryText(p)+'</p>').join('')+'<ul>'+g.note.links.map(id=>'<li>'+link(id,byId[id].title)+'</li>').join('')+'</ul></details>':'';
 const workedExample=l=>l.textbook?`<section class="study-section study-example" id="study-example" tabindex="-1"><h2>Durchgerechnetes Beispiel – Schritt für Schritt</h2><p>${glossaryText(l.example)}</p>${l.textbook.figure?`<figure class="textbook-figure">${l.textbook.figure.svg}<figcaption>${esc(l.textbook.figure.caption)}</figcaption></figure>`:''}<ol class="textbook-steps">${l.textbook.steps.map(s=>`<li>${s.mathml?`${s.calculation.includes(':')?`<div class="textbook-calculation">${glossaryText(s.calculation.slice(0,s.calculation.indexOf(':')))}</div>`:''}<div class="study-equation textbook-step-equation">${s.mathml}</div>`:`<div class="textbook-calculation">${glossaryText(s.calculation)}</div>`}<p><strong>Warum dieser Schritt?</strong> ${glossaryText(s.why)}</p></li>`).join('')}</ol></section>`:paragraph('Ein Beispiel mit Rechenweg',l.example,'study-example');
 let active=null;
 function resolve(route){return byId[route.replace(/^lesson-/,'').split('~')[0]];}
 function render(route){
  const lesson=resolve(route);if(!lesson)return;
  const focus=route.split('~')[1];
  if(active!==lesson.id){
   active=lesson.id;
   const index=lessons.indexOf(lesson);
   const related=lesson.links.map(id=>{
    const l=byId[id];
    if(l)return `<li>${link(id,l.title)} <small>${link(id,'Formel / Prinzip','formula')}</small></li>`;
    const label=id==='kelly'?'Kelly Studio':document.querySelector(`[data-page="${id}"]`)?.textContent.trim()||id;
    return `<li><a href="#${id}">${esc(label)}</a> <small>${id==='kelly'?'Werkzeug':'Stochastik-Grundlage'}</small></li>`;
   }).join('');
   document.getElementById('page-finance-lesson').innerHTML=`
    <nav class="study-breadcrumb" aria-label="Lernpfad"><a href="#finance">Finance Studio</a><span>/ ${esc(lesson.blockTitle)} / ${esc(lesson.group)}</span></nav>
    <div class="kicker">Kapitel ${index+1} / ${lessons.length}</div><h1>${esc(lesson.title)}</h1>
    <div class="study-badges">${lesson.levels.map(n=>`<span>CFA Level ${n}</span>`).join('')}<span>${esc(lesson.kind)}</span></div>
    <p class="study-scope">${glossaryText(lesson.scope)}</p>
    <nav class="study-jumps" aria-label="Im Kapitel"><a href="#lesson-${lesson.id}~explanation">Ausführliche Erklärung</a>${lesson.illustrations.length?`<a href="#lesson-${lesson.id}~figures">Grafiken</a>`:''}<a href="#lesson-${lesson.id}~formula">Formel / Prinzip</a><a href="#lesson-${lesson.id}~derivations">Herleitungen und Vergleiche</a><a href="#lesson-${lesson.id}~example">Rechenweg / Fallbeispiel</a>${lesson.lab?`<a href="#lesson-${lesson.id}~lab">Interaktiv erkunden</a>`:''}<a href="#lesson-${lesson.id}~applications">Anwendungen</a><a href="#lesson-${lesson.id}~limitations">Grenzen</a><a href="#lesson-${lesson.id}~question">Verständnis prüfen</a><a href="#glossary">Fachwörterbuch</a></nav>
    ${paragraph('Die Intuition',lesson.intuition,'study-intuition')}
    ${paragraph('Theorie und Logik',lesson.logic)}
    ${textbookSection(lesson.textbook)}
    ${illustrationContent(lesson)}
    <section class="study-section" id="study-formula" tabindex="-1"><h2>${lesson.formulaTex?'Mathematischer Ausgangspunkt':'Entscheidungsrahmen'}</h2>${lesson.formulaTex?`<div class="study-equation">${lesson.formulaMathML}</div><details class="study-details study-formula-source"><summary>LaTeX-Quelltext</summary><code>${esc(lesson.formulaTex)}</code></details>`:`<p>${glossaryText(lesson.logic)}</p>`}${details('Definitionen, Einheiten und Voraussetzungen',lesson.math)}</section>
    ${deepContent(lesson)}
    ${workedExample(lesson)}
    ${lesson.textbook?paragraph('Wo wird das angewendet?',lesson.textbook.applications,'','applications')+paragraph('Grenzen und Voraussetzungen',lesson.textbook.limitations,'','limitations')+paragraph('So hängt das mit anderen Themen zusammen',lesson.textbook.connections):''}
    ${details('Vertiefung: Warum gilt das – und wo sind die Grenzen?',lesson.depth,'study-depth')}
    ${lesson.lab?'<section class="study-lab study-section" id="study-lab" tabindex="-1"></section>':''}
    ${paragraph('Typischer Denkfehler',lesson.pitfall,'study-pitfall')}
    ${questionContent(lesson)}
    <section class="study-section"><h2>Verbindungen zu anderen Kapiteln</h2><ul class="study-related">${related||'<li>Nutze die Kapitelübersicht für den weiteren Lernweg.</li>'}</ul></section>
    <details class="study-details"><summary>CFA-Einordnung und Quellen</summary><p>Bezugsjahr: <strong>2026</strong>. Die Levelhinweise ordnen die behandelten Konzepte didaktisch ein. Bei mehreren Levels reichen sie von Grundlagen bis zur Anwendung; nicht jeder Absatz ist auf jedem genannten Level ein eigenes Prüfungslernziel. Die offiziellen Lernziele und der gewählte Level-III-Pfad bestimmen den Prüfungsumfang. Die Kapitel sind eigenständige Erläuterungen, keine offiziellen CFA-Lernmodule.</p><ul>${lesson.sources.map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a></li>`).join('')}</ul><p>Für spätere Prüfungen: <a href="https://www.cfainstitute.org/about/press-room/2026/cfa-institute-announces-updates-to-cfa-program-curriculum" target="_blank" rel="noopener">Curriculumänderungen für 2027</a>. Beispiele sind fiktiv; Steuersätze in Rechenmodellen stellen kein bestimmtes Steuerrecht dar.</p></details>
    <nav class="study-next" aria-label="Kapitel wechseln">${index>0?link(lessons[index-1].id,'← '+lessons[index-1].title):'<span></span>'}${index<lessons.length-1?link(lessons[index+1].id,lessons[index+1].title+' →'):'<a href="#finance">Zur Kapitelübersicht →</a>'}</nav>`;
   if(lesson.lab)mountLab(lesson.lab);
   mountQuestions(lesson);
  }
  requestAnimationFrame(()=>{
   const target=focus&&document.getElementById('study-'+focus);
   if(target){if(target.matches('.question-card[hidden]')){const filter=document.getElementById('question-filter');filter.value='';filter.dispatchEvent(new Event('change'));}target.scrollIntoView({block:'start'});target.focus({preventScroll:true});}
   else document.getElementById('main-content').scrollIntoView({block:'start'});
  });
 }
 let glossaryReady=false,glossaryFilter=null;
 function resolveGlossary(route){
  if(route==='glossary')return {overview:true};
  if(!route.startsWith('glossary~'))return null;
  return glossaryById[route.slice('glossary~'.length)]||null;
 }
 function renderGlossary(route){
  const selected=resolveGlossary(route),page=document.getElementById('page-glossary');
  if(!glossaryReady){
   glossaryReady=true;
   const categories=[...new Set(glossary.map(g=>g.category))].sort((a,b)=>a.localeCompare(b,'de'));
   const letters=[...new Set(glossary.map(g=>g.term[0].toLocaleUpperCase('de')))].sort((a,b)=>a.localeCompare(b,'de'));
   page.dataset.letter='';
   page.innerHTML=`<nav class="study-breadcrumb" aria-label="Lernpfad"><a href="#finance">Finance Studio</a><span>/ Fachwörterbuch</span></nav><div class="kicker">Finance / Dictionary</div><h1>Fachwörterbuch.</h1><p class="lede">${glossary.length} kurze Definitionen für Fach- und Fremdwörter aus dem Lernbereich. Jeder Eintrag führt zum erklärenden Kapitel und zu weiteren Fundstellen.</p><div class="glossary-controls"><label for="glossary-search">Begriff oder Erklärung suchen<input id="glossary-search" type="search" placeholder="z. B. Duration, Barwert, Cashflow"></label><label for="glossary-category">Bereich<select id="glossary-category"><option value="">Alle Bereiche</option>${categories.map(c=>`<option>${esc(c)}</option>`).join('')}</select></label></div><div class="glossary-letters" aria-label="Anfangsbuchstabe"><button type="button" class="active" data-letter="">Alle</button>${letters.map(l=>`<button type="button" data-letter="${esc(l)}">${esc(l)}</button>`).join('')}</div><p id="glossary-results" role="status" aria-live="polite"></p><div class="glossary-grid">${glossary.map(g=>{
    const main=byId[g.lesson],others=g.lessons.filter(id=>id!==g.lesson);
    return `<article class="glossary-entry" id="glossary-${g.id}" tabindex="-1" data-category="${esc(g.category)}" data-letter="${esc(g.term[0].toLocaleUpperCase('de'))}" data-search="${esc([g.term,...g.aliases,g.definition,g.category,...(g.note?.paragraphs||[])].join(' ').toLocaleLowerCase('de'))}"><div class="glossary-entry-head"><h2>${esc(g.term)}</h2><span>${esc(g.category)}</span></div>${g.aliases.length?`<p class="glossary-aliases"><strong>Auch:</strong> ${g.aliases.map(esc).join(' · ')}</p>`:''}<p>${esc(g.definition)}</p>${glossaryNote(g)}<p class="glossary-main"><strong>Ausführlicher im Kapitel:</strong> ${link(g.lesson,main.title)}</p>${others.length?`<details class="study-details glossary-occurrences"><summary>${others.length} weitere Fundstelle${others.length===1?'':'n'} in den Lernkapiteln</summary><ul>${others.map(id=>`<li>${link(id,byId[id].title)}</li>`).join('')}</ul></details>`:''}</article>`;
   }).join('')}</div><p id="glossary-empty" hidden>Kein passender Begriff. Ändere Suche, Bereich oder Anfangsbuchstaben.</p>`;
   const search=page.querySelector('#glossary-search'),category=page.querySelector('#glossary-category');
   glossaryFilter=()=>{
    const query=search.value.trim().toLocaleLowerCase('de');let count=0;
    const letter=page.dataset.letter;page.querySelectorAll('.glossary-entry').forEach(entry=>{const visible=(!query||entry.dataset.search.includes(query))&&(!category.value||entry.dataset.category===category.value)&&(!letter||entry.dataset.letter===letter);entry.hidden=!visible;if(visible)count++;});
    page.querySelector('#glossary-results').textContent=count+' von '+glossary.length+' Begriffen';page.querySelector('#glossary-empty').hidden=count>0;
   };
   search.addEventListener('input',()=>{page.dataset.letter='';page.querySelectorAll('[data-letter]').forEach(b=>b.classList.toggle('active',b.dataset.letter===''));glossaryFilter();});
   category.addEventListener('change',glossaryFilter);
   page.querySelector('.glossary-letters').addEventListener('click',e=>{const b=e.target.closest('[data-letter]');if(!b)return;page.dataset.letter=b.dataset.letter;page.querySelectorAll('[data-letter]').forEach(x=>x.classList.toggle('active',x===b));glossaryFilter();});
   glossaryFilter();
  }
  if(selected&&!selected.overview){
   page.querySelector('#glossary-search').value='';page.querySelector('#glossary-category').value='';page.dataset.letter='';
   page.querySelectorAll('[data-letter]').forEach(b=>b.classList.toggle('active',b.dataset.letter===''));glossaryFilter();
   requestAnimationFrame(()=>{const entry=document.getElementById('glossary-'+selected.id);entry.classList.add('selected');entry.scrollIntoView({block:'center'});entry.focus({preventScroll:true});setTimeout(()=>entry.classList.remove('selected'),1800);});
  }else requestAnimationFrame(()=>document.getElementById('main-content').scrollIntoView({block:'start'}));
 }
 function mountLab(id){
  const model=FinanceModels.models[id],el=document.getElementById('study-lab');
  el.innerHTML=`<div class="kicker">Interaktives Modell</div><h2>${esc(model.title)}</h2><p>${glossaryText(model.intro)}</p><div class="study-lab-grid"><div class="study-lab-controls">${model.controls.map(f=>`<label for="lab-${f.key}">${glossaryText(f.label)}<div class="study-pair"><input id="lab-${f.key}" data-key="${f.key}" type="number" min="${f.min}" max="${f.max}" step="${f.step}" value="${f.value}"><input aria-label="${esc(f.label)} – Regler" data-range="${f.key}" type="range" min="${f.min}" max="${f.max}" step="${f.step}" value="${f.value}"></div></label>`).join('')}<button class="btn ghost" type="button" id="lab-reset">Ausgangswerte</button></div><div class="study-lab-output"><p id="lab-error" role="alert" hidden></p><div id="lab-results"><div class="study-metrics" id="lab-metrics" aria-live="polite"></div><div id="lab-chart"></div><p id="lab-assumptions" class="study-model-note"></p><details class="study-details"><summary>Kurvenwerte als Tabelle</summary><div class="study-table-wrap" id="lab-table"></div></details></div></div></div>`;
  const update=()=>{
   const params=Object.fromEntries([...el.querySelectorAll('[data-key]')].map(e=>[e.dataset.key,e.value]));
   try{
    const r=FinanceModels.calculate(id,params);
    el.querySelector('#lab-error').hidden=true;el.querySelector('#lab-results').hidden=false;
    el.querySelector('#lab-metrics').innerHTML=r.metrics.map(([name,v])=>`<div><span>${esc(name)}</span><strong>${fmt(v,4)}</strong></div>`).join('');
    el.querySelector('#lab-chart').innerHTML=chart(r);
    el.querySelector('#lab-assumptions').innerHTML=glossaryText(r.note);
    el.querySelector('#lab-table').innerHTML=`<table><thead><tr><th>${esc(r.xLabel)}</th><th>${esc(r.yLabel)}</th></tr></thead><tbody>${r.points.filter((_,i)=>i%Math.max(1,Math.floor(r.points.length/10))===0||i===r.points.length-1).map(([x,y])=>`<tr><td>${fmt(x,3)}</td><td>${fmt(y,4)}</td></tr>`).join('')}</tbody></table>`;
   }catch(e){el.querySelector('#lab-error').hidden=false;el.querySelector('#lab-error').textContent=e.message;el.querySelector('#lab-results').hidden=true;}
  };
  el.addEventListener('input',event=>{
   const t=event.target;
   if(t.dataset.range)el.querySelector(`[data-key="${t.dataset.range}"]`).value=t.value;
   if(t.dataset.key&&t.value!==''&&t.validity.valid)el.querySelector(`[data-range="${t.dataset.key}"]`).value=t.value;
   update();
  });
  el.querySelector('#lab-reset').onclick=()=>{for(const f of model.controls){el.querySelector(`[data-key="${f.key}"]`).value=f.value;el.querySelector(`[data-range="${f.key}"]`).value=f.value;}update();};
  update();
 }
 function chart(r){
  const displayed=r.marker?[...r.points,r.marker]:r.points;
  const xs=displayed.map(p=>p[0]),ys=displayed.map(p=>p[1]);
  let xmin=Math.min(...xs),xmax=Math.max(...xs),ymin=Math.min(0,...ys),ymax=Math.max(0,...ys);
  if(xmin===xmax)xmax=xmin+1;if(ymin===ymax)ymax=ymin+1;
  const padding=(ymax-ymin)*.07;if(ymin<0)ymin-=padding;ymax+=padding;
  const sx=x=>78+(x-xmin)/(xmax-xmin)*550,sy=y=>265-(y-ymin)/(ymax-ymin)*215;
  let svg=`<svg viewBox="0 0 660 325" role="img" aria-label="${esc(r.yLabel+' in Abhängigkeit von '+r.xLabel)}"><title>${esc(r.yLabel+' / '+r.xLabel)}</title>`;
  for(let i=0;i<=4;i++){let y=ymin+(ymax-ymin)*i/4,x=xmin+(xmax-xmin)*i/4;svg+=`<line x1="78" x2="628" y1="${sy(y)}" y2="${sy(y)}" stroke="#d9e4ec"/><text x="70" y="${sy(y)+4}" text-anchor="end">${fmt(y,2)}</text><text x="${sx(x)}" y="287" text-anchor="middle">${fmt(x,2)}</text>`;}
  if(ymin<0&&ymax>0)svg+=`<line x1="78" x2="628" y1="${sy(0)}" y2="${sy(0)}" stroke="#718b9e" stroke-dasharray="4 4"/>`;
  svg+=`<path d="${r.points.map(([x,y],i)=>(i?'L':'M')+sx(x).toFixed(2)+','+sy(y).toFixed(2)).join(' ')}" fill="none" stroke="#087e82" stroke-width="3"/>`;
  if(r.marker)svg+=`<circle cx="${sx(r.marker[0])}" cy="${sy(r.marker[1])}" r="5" fill="#0c2439" stroke="white" stroke-width="2"><title>Aktuelle Eingabe: ${fmt(r.marker[0],3)} / ${fmt(r.marker[1],4)}</title></circle>`;
  svg+=`<text x="78" y="22">${esc(r.yLabel)}</text><text x="353" y="316" text-anchor="middle">${esc(r.xLabel)}</text></svg>`;
  return svg;
 }
 return {resolve,render,lessons,resolveGlossary,renderGlossary,glossary,glossaryText};
})();
