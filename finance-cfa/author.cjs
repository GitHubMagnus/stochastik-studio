// Content helpers preserve explicit mathematics; they never infer formulas from prose.
const F=(tex,reading,symbols)=>({kind:'formula',tex,reading,symbols});
const T=(headers,rows,caption)=>({kind:'table',headers,rows,caption});
const X=(title,given,steps,conclusion)=>({kind:'example',title,given,steps,conclusion});
const G=figure=>({kind:'figure',...figure});
const S=(id,title,objectives,blocks)=>({id,title,objectives:objectives.split(' '),blocks});
const Q=(id,unit,topic,pool,objectives,stem,options,correct,solution,extra={})=>({id,unit,topic,pool,objectives:objectives.split(' ').map(s=>unit+'-'+s),stem,options:options.map(([text,why])=>({text,why})),correct,solution,...extra});
module.exports={F,T,X,S,Q,G};
