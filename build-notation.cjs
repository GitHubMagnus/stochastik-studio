const fs=require('node:fs'),{renderLatex}=require('./finance-math.cjs');
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function compile(source){return {...source,entries:source.entries.map(e=>({...e,mathml:renderLatex(e.tex||e.keys.map(k=>k.length===1?k:'\\mathrm{'+k+'}').join(',\\ '),false)}))};}
const kelly=Object.fromEntries(Object.entries(require('./kelly-notation.cjs')).map(([key,value])=>[key,compile(value)]));
function kellyHelp(key){const n=kelly[key];if(!n)throw Error('Kelly-Symbolhilfe fehlt: '+key);return '<!-- KELLY NOTATION START --><p class="formula-reading">'+escape(n.reading)+'</p><details class="formula-notation kelly-notation" data-notation-for="'+key+'"><summary>Symbole dieser Formel</summary><dl class="formula-symbols">'+n.entries.map(e=>'<div><dt>'+e.mathml+'</dt><dd>'+escape(e.meaning)+'</dd></div>').join('')+'</dl></details><!-- KELLY NOTATION END -->';}
function statistics(html){
 const data=Object.fromEntries(Object.entries(require('./statistics-notation.cjs')).map(([key,value])=>[key,compile(value)]));
 const navIds=[...html.matchAll(/class="nav-item[^\"]*"[^>]*data-page="([^"]+)"/g)].map(m=>m[1]);
 for(const id of navIds)if(!data[id])throw Error('Statistik-Notation fehlt: '+id);
 if(Object.keys(data).length!==33)throw Error('Statistik-Notation: Kapitelzahl stimmt nicht');
 const block='<!-- STATISTICS NOTATION START -->\n<script type="application/json" id="statistics-notation-data">'+JSON.stringify(data).replaceAll('<','\\u003c')+'</script>\n<script>'+fs.readFileSync('./statistics-notation-ui.js','utf8')+'</script>\n<!-- STATISTICS NOTATION END -->';
 return html.includes('<!-- STATISTICS NOTATION START -->')?html.replace(/<!-- STATISTICS NOTATION START -->[\s\S]*?<!-- STATISTICS NOTATION END -->/,()=>block):html.replace('</body>',()=>block+'\n</body>');
}
module.exports={kellyHelp,statistics};
