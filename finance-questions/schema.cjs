// Individually authored prompts. Existing, independently written explanations and
// worked solutions are reused deliberately so exercises and chapters stay consistent.
const Q=(section,derivation,worked,comparison,transfer,answer,claim,correction)=>({section,derivation,worked,comparison,transfer,answer:answer.split('|'),claim,correction:correction.split('|')});
module.exports={Q,T:String.raw};
