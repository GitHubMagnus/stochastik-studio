(()=>{
 const data=JSON.parse(document.getElementById('statistics-notation-data').textContent);
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 for(const [id,entry] of Object.entries(data)){
  const page=document.getElementById('page-'+id);if(!page)throw Error('Statistik-Symbolkapitel fehlt: '+id);
  const anchors=[...page.querySelectorAll('.eq,.formula table')];
  if(!anchors.length)anchors.push(page.querySelector('.formula'));
  anchors.forEach((anchor,i)=>{if(!anchor)return;
   const help=document.createElement('details');help.className='formula-notation statistics-notation';help.id='stats-symbols-'+id+'-'+i;
   help.innerHTML='<summary>Symbole in dieser Formel und im Kapitel</summary><dl class="formula-symbols">'+entry.entries.map(e=>'<div><dt>'+e.mathml+'</dt><dd>'+esc(e.meaning)+'</dd></div>').join('')+'</dl><details class="notation-conventions"><summary>Rechenzeichen lesen</summary><p>∑ addiert die Terme im angegebenen Indexbereich. Eine Wurzel macht das Quadrieren rückgängig. Ein Dach kennzeichnet gewöhnlich einen Schätzwert, ein Balken einen Mittelwert; abweichende Konventionen stehen oben. Bei Wahrscheinlichkeiten bedeutet | „unter der Bedingung“, umschließende Striche bedeuten Betrag. → bezeichnet einen Grenzübergang, ≈ eine Näherung.</p></details>';
   anchor.insertAdjacentElement('afterend',help);anchor.setAttribute('aria-details',help.id);
  });
 }
})();
