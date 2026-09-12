// Explicit LaTeX is pre-rendered to accessible, offline MathML. No prose-to-formula fallback.
const katex=require('katex');
function renderLatex(latex,displayMode=true){return katex.renderToString(latex,{displayMode,output:'mathml',throwOnError:true,strict:'error'});}
module.exports={renderLatex};
