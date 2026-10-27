// A release requires a documented self-audit of the exact lesson and question
// content. Review metadata itself is excluded to avoid a circular fingerprint.
const crypto=require('node:crypto');
const hash=value=>crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
const unitHash=unit=>{const {review,...content}=unit;return hash(content);};
const questionsHash=(questions,id)=>hash(questions.filter(q=>q.unit===id).sort((a,b)=>a.id.localeCompare(b.id)));
function validateAcceptance(units,questions,record){
 if(record?.schema!==1||record.method!=='documented-self-audit'||record.report!=='CFA-2027-ACCEPTANCE.md'||!Array.isArray(record.units))throw Error('Abnahmenachweis fehlt oder ist ungültig');
 const byId=new Map(record.units.map(r=>[r.id,r]));
 if(byId.size!==record.units.length||byId.size!==units.length)throw Error('Abnahmenachweis: unvollständige oder doppelte Einheiten');
 for(const u of units){
  const r=byId.get(u.id);
  if(u.review?.status!=='checked'||u.review.method!==record.method||u.review.date!==record.date||u.review.acceptance!==record.report+'#'+u.id)throw Error(u.id+': dokumentierte fachliche Prüfung fehlt');
  if(!r||r.unitSha256!==unitHash(u)||r.questionsSha256!==questionsHash(questions,u.id))throw Error(u.id+': Inhalt seit der Abnahme geändert');
 }
}
module.exports={unitHash,questionsHash,validateAcceptance};
