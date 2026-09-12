const S=(title,text,tex=null)=>({title,paragraphs:text.split('\n\n'),tex});
const C=(title,intro,headers,rows,analysis)=>({title,intro,headers,rows,paragraphs:analysis.split('\n\n')});
const D=(sections,comparison,links=[],symbols=[])=>({sections,comparisons:Array.isArray(comparison)?comparison:[comparison],links,symbols});
module.exports={S,C,D,T:String.raw};
