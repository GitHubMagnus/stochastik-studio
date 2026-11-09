// Historical chapter regressions retain their original practice + A/B cases.
// C/D are compiled too, then independently checked in additional-exams.test.cjs.
const data=require('../finance-cfa/compile.cjs').compile(),E=require('../finance-cfa/engine.cjs');
const questions=data.questions.filter(q=>q.origin!=='2027-additional-exams');
module.exports={...data,questions,inventory:E.inventory(questions),coverage:data.coverage.map(c=>({...c,objectives:c.objectives.map(o=>({...o,mockQuestions:questions.filter(q=>q.pool!=='practice'&&q.objectives.includes(o.id)).length}))}))};
