// Chapter-specific teaching material. No generated filler paragraphs.
module.exports=(heading,explanation,example,steps,applications,limitations,connections,table=null)=>({heading,explanation:explanation.split('\n\n'),example,steps:steps.map(s=>{const [calculation,...why]=s.split('|');return {calculation,why:why.join('|')};}),applications,limitations,connections,table});
