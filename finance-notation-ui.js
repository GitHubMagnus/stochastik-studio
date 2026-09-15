// Embedded in FinanceStudy. Definitions belong to their immediate formula,
// including table cells and inline equations in exercise prompts/solutions.
function mountNotation(lesson,root){
 const data=lesson.notation;if(!data)return;
 const byTex=new Map(data.formulas.map(f=>[f.tex,f]));
 const groups=new Map();
 for(const math of root.querySelectorAll('math')){
  const annotation=math.querySelector('annotation[encoding="application/x-tex"]');
  if(!annotation)continue;
  // DOM textContent has already decoded the annotation's XML entities.
  const formula=byTex.get(annotation.textContent);
  if(!formula)throw Error('Symbolerklärung fehlt: '+lesson.id+' '+annotation.textContent);
  const anchor=math.closest('.study-equation')||math.closest('.textbook-table')||math.closest('p,h3,li')||math.parentElement;
  if(!groups.has(anchor))groups.set(anchor,[]);
  groups.get(anchor).push(formula);
 }
 let sequence=0;
 for(const [anchor,formulas] of groups){
  const isMain=anchor.parentElement?.id==='study-formula';
  const entries=[...new Set(formulas.flatMap(f=>f.entries))].map(i=>data.entries[i]);
  const conventions=[...new Set(formulas.flatMap(f=>f.conventions))];
  const id='notation-'+lesson.id+'-'+(++sequence);
  const help=document.createElement('details');help.className='formula-notation';help.id=id;help.open=isMain;
  help.dataset.formulaCount=String(formulas.length);
  help.innerHTML=`<summary>${formulas.length>1?'Symbole und Schreibweise dieser Formeln':'Symbole und Schreibweise dieser Formel'}</summary>${entries.length?`<dl class="formula-symbols">${entries.map(e=>`<div><dt>${e.mathml}</dt><dd>${glossaryText(e.meaning)}</dd></div>`).join('')}</dl>`:'<p>Hier sind die Werte bereits als Zahlen eingesetzt. Ihre Herkunft und Einheit werden im zugehörigen Rechenschritt erläutert.</p>'}${conventions.length?`<details class="notation-conventions"><summary>Rechenzeichen und Leseregeln</summary><ul>${conventions.map(c=>`<li>${esc(c)}</li>`).join('')}</ul></details>`:''}`;
  anchor.insertAdjacentElement('afterend',help);
  // Link every original formula to the local explanation for assistive tools.
  anchor.dataset.notation=id;
  for(const math of anchor.querySelectorAll('math'))math.setAttribute('aria-details',id);
  if(isMain&&data.reading){const reading=document.createElement('p');reading.className='formula-reading';reading.innerHTML='<strong>So liest du die Formel:</strong> '+(data.readingParts?data.readingParts.map(p=>p.mathml||glossaryText(p.text)).join(''):glossaryText(data.reading));anchor.insertAdjacentElement('afterend',reading);for(const math of reading.querySelectorAll('math'))math.setAttribute('aria-details',id);}
 }
}
