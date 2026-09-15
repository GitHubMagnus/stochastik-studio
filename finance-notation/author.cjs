// Each entry is deliberately assigned to a chapter, not guessed from a letter.
const chapter=(reading,source='')=>({reading,entries:source.trim().split('\n').filter(Boolean).map(line=>{
 const cut=line.indexOf('=');if(cut<0)throw Error('Notation without definition: '+line);
 const [keys,tex]=line.slice(0,cut).split('|');return {keys:keys.trim().split(' '),tex,meaning:line.slice(cut+1).trim()};
})});
module.exports={chapter};
