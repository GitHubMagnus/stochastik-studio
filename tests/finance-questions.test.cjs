const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const lessons=JSON.parse(fs.readFileSync(path.join(__dirname,'../index.html'),'utf8').match(/id="finance-data">([\s\S]*?)<\/script>/)[1]);
const {renderLatex}=require('../finance-math.cjs');
const near=(a,b,t=1e-6)=>assert.ok(Math.abs(a-b)<t,`${a} != ${b}`);
test('every Finance chapter embeds a complete multi-question bank with separated inputs and explained solutions',t=>{
 let count=0;const ids=new Set();
 for(const l of lessons){
  assert.equal(l.questions.length,l.id==='bonds-08'?14:6,l.id);
  assert.deepEqual(l.questions.slice(0,6).map(q=>q.level),['Grundlagen','Grundlagen','Anwendung','Anwendung','Vertiefung','Vertiefung']);
  const prompts=new Set();
  for(const q of l.questions){
   count++;assert.ok(!ids.has(q.id),q.id);ids.add(q.id);assert.ok(!prompts.has(q.prompt),q.id);prompts.add(q.prompt);
   assert.ok(q.prompt.length>15&&q.hint.length>30,q.id);assert.ok(q.steps.length>=(q.table?1:2),q.id);
   assert.ok(q.steps.every(s=>s.text.trim().length>0),q.id);assert.ok(q.steps.map(s=>s.text).join(' ').length>100,q.id);
   assert.match(q.anchor,/^question-\d\d$/);assert.match(q.focus,/^(explanation|example|limitations|derivations|derivation-\d+|comparison-\d+)$/);
   if(q.focus.startsWith('derivation-'))assert.ok(l.deep.sections[Number(q.focus.slice(11))],q.id);
  }
  const compare=l.questions[3];assert.equal(compare.givenTable.rows.length,compare.table.rows.length,l.id);
  assert.ok(compare.givenTable.headers.length<compare.table.headers.length,l.id+': answers must remain separate');
  assert.ok(compare.givenTable.rows.every(r=>r.length===compare.givenTable.headers.length),l.id);
  assert.ok(l.questions[4].steps.length>=2&&l.questions[5].steps.length>=2,l.id+': case reasoning');
 }
 assert.equal(count,1034);t.diagnostic(`${lessons.length} chapters, ${count} exercises, no missing or duplicate local prompts.`);
});
test('exercise equations use strict explicit MathML including inline problem statements',t=>{
 let display=0,inline=0;
 for(const l of lessons)for(const q of l.questions){
  for(const s of q.steps){if(s.tex){assert.equal(s.mathml,renderLatex(s.tex),q.id);display++;}}
  for(const p of [...q.promptParts,...q.contextParts,...q.steps.flatMap(s=>s.textParts)]){
   if(p.mathml){assert.match(p.mathml,/<math/);assert.match(p.mathml,/application\/x-tex/);inline++;}
   else assert.doesNotMatch(p.text,/[=≈]/,q.id+': untypeset inline equality');
  }
 }
 assert.ok(display>500);assert.ok(inline>70);t.diagnostic(`${display} solution equation panels; ${inline} explicitly typeset inline formulas.`);
});
test('additional Duration exercise answers match independent cashflow calculations and risk identities',()=>{
 const q=lessons.find(l=>l.id==='bonds-08').questions;
 const all=q.slice(6).flatMap(q=>q.steps.map(s=>s.tex||'')).join(' ');
 const claim=(literal,value,expected,tol=1e-5)=>{assert.ok(all.includes(literal),literal+' missing from published answer');near(value,expected,tol);};
 claim('5.8846',6.12/(1+.08/2),5.8846,.00005);
 claim('5.6667',6.12/1.08,5.6667,.00005);
 claim('90.7029',100/1.05**2,90.7029,.00005);
 claim('61.3913',100/1.05**10,61.3913,.00005);
 const cf=[5,105],pv=cf.map((v,i)=>v/1.05**(i+1)),price=pv.reduce((a,b)=>a+b,0),mac=pv.reduce((a,v,i)=>a+v*(i+1),0)/price;
 claim('1.952381',mac,1.952381,.0000005);claim('1.859410',mac/1.05,1.859410,.0000005);
 claim('16{,}000',2e6*4*.0001*20,16000);claim('14{,}000',1e6*7*.0001*20,14000);
 claim('94.25',100*(1-6*.01+.5*50*.01**2),94.25);claim('106.25',100*(1+6*.01+.5*50*.01**2),106.25);
 claim('-400',(103+96-200)/(100*.005**2),-400);near((103-96)/(2*100*.005),7);
 claim('-0.002',-(2*(-.001)+4*.001),-.002);
 const bond=y=>5/(1+y)+105/(1+y)**2;
 for(const h of [1,mac,3]){
  const y=.05,eps=1e-6,W=z=>bond(z)*(1+z)**h;
  near((W(y+eps)-W(y-eps))/(2*eps)/W(y),(h-mac)/(1+y),1e-7);
 }
});
test('supplementary exercise solutions include the requested calculations rather than unexplained new data',()=>{
 const get=id=>lessons.find(l=>l.id===id).questions[2];
 assert.match(get('start-01').prompt,/20.000.*8.000/);
 assert.match(get('statements-06').prompt,/50 €/);assert.match(get('statements-08').prompt,/20 €/);
 const a=get('statements-05').steps;assert.ok(a.some(s=>s.tex?.includes('COGS=12')));near((10+14)/2,12);
 const d=get('economics-08');assert.match(d.prompt,/näherungsweise/);assert.ok(d.steps.some(s=>s.tex?.includes('0.797767')));near(1.04/1.03*.8-.01,.797767,.0000005);
 assert.ok(get('economics-03').steps.some(s=>s.tex?.includes('Q_{comp}=40')));
 assert.ok(get('economics-06').steps.some(s=>s.tex?.includes('1028.57')));near(1080/1.05,1028.57,.005);
 assert.ok(get('statements-07').steps.some(s=>s.tex?.includes('45.4545')));
});
