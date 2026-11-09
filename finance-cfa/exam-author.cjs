const {Q,F}=require('./author.cjs');
// Every call supplies an original decision, three explanations and, where
// numerical, an explicit equation. No questions are inferred from prose.
module.exports=(topic,write)=>{
 const out=[],counts={'mock-c':0,'mock-d':0};
 const add=pool=>(unit,section,los,stem,right,why,wrong1,why1,wrong2,why2,math)=>{
  const id=pool.slice(-1)+'-'+topic+'-'+String(++counts[pool]).padStart(2,'0');
  const solution=[why];
  if(math)solution.push(F(math[0].replaceAll('@',String.fromCharCode(92)),math[1],[['x',math[2]]]));
  out.push(Q(id,unit,topic,pool,los,stem,[[right,why],[wrong1,why1],[wrong2,why2]],0,solution,{section,origin:'2027-additional-exams'}));
 };
 write(add('mock-c'),add('mock-d'));
 const n=require('./engine.cjs').blueprint[topic];for(const [pool,count]of Object.entries(counts))if(count!==n)throw Error(topic+'/'+pool+': '+count+' statt '+n);
 return out;
};
