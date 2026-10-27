const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {validateAcceptance}=require('../finance-cfa/acceptance.cjs'),record=require('../finance-cfa/acceptance.json');
const load=dir=>fs.readdirSync(path.join(__dirname,'../finance-cfa',dir)).filter(f=>f.endsWith('.cjs')).sort().flatMap(f=>require('../finance-cfa/'+dir+'/'+f));
const units=load('units'),questions=load('questions'),copy=x=>JSON.parse(JSON.stringify(x));
test('all 102 acceptance records bind the actual lesson and question content to a documented self-audit',()=>{
 validateAcceptance(units,questions,record);assert.equal(record.units.length,102);const report=fs.readFileSync(path.join(__dirname,'../CFA-2027-ACCEPTANCE.md'),'utf8');
 for(const u of units){assert.ok(report.includes('<a id="'+u.id+'"></a>'),u.id);assert.ok(u.review.previous.status==='draft');assert.ok(u.review.previous.note);}
});
test('release acceptance rejects changed prose, question choices, unchecked units and missing evidence',()=>{
 const changed=copy(units);changed[0].intro[0]+=' Unreviewed change';assert.throws(()=>validateAcceptance(changed,questions,record),/Inhalt seit/);
 const changedQuestions=copy(questions);changedQuestions[0].options[0].text+=' changed';assert.throws(()=>validateAcceptance(units,changedQuestions,record),/Inhalt seit/);
 const unchecked=copy(units);unchecked[0].review.status='draft';assert.throws(()=>validateAcceptance(unchecked,questions,record),/Prüfung fehlt/);
 assert.throws(()=>validateAcceptance(units,questions,{...record,units:record.units.slice(1)}),/unvollständige/);
 assert.throws(()=>validateAcceptance(units,questions,{...record,units:[...record.units.slice(1),record.units[1]]}),/doppelte/);
 assert.throws(()=>validateAcceptance(units,questions,{...record,method:'automatic-count'}),/ungültig/);
});
