const {test}=require('node:test');
const assert=require('node:assert/strict'),fs=require('node:fs');
const {symbols,formulas,compileNotation}=require('../finance-notation.cjs');
const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
const lessons=JSON.parse(html.match(/id="finance-data">([\s\S]*?)<\/script>/)[1]);
test('all 171 chapters cover every embedded formula, including comparison cells and inline exercise math',t=>{
 let count=0,entries=0;
 for(const l of lessons){
  assert.deepEqual(l.notation,JSON.parse(JSON.stringify(compileNotation(l))),l.id+': stale notation build');
  const expected=formulas(l);assert.equal(l.notation.formulas.length,expected.length,l.id);
  for(const tex of expected){
   const f=l.notation.formulas.find(f=>f.tex===tex);assert.ok(f,l.id+': '+tex);
   const defined=new Set(f.entries.flatMap(i=>l.notation.entries[i].keys));
   for(const key of symbols(tex))assert.ok(defined.has(key),l.id+': '+key+' in '+tex);
   count++;
  }
  if(expected.length)assert.ok(l.notation.reading.length>80,l.id+': formula needs an explanation');
  for(const e of l.notation.entries){assert.ok(e.meaning.trim().length>10,l.id+': empty definition');assert.match(e.mathml,/<math/);assert.ok(!/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(e.tex||''),l.id+': escaped TeX corrupted');entries++;}
 }
 assert.equal(lessons.length,171);assert.ok(count>=948);t.diagnostic(JSON.stringify({chapters:lessons.length,distinctChapterFormulas:count,symbolDefinitions:entries}));
});
test('time-series notation distinguishes observations, forecasts, shocks and the stationary mean',()=>{
 const l=lessons.find(l=>l.id==='quant-11'),d=l.notation;
 const definition=key=>d.entries.filter(e=>e.keys.includes(key)).map(e=>e.meaning).join(' ');
 assert.match(definition('c'),/Achsenabschnitt/);assert.match(definition('mu'),/unbedingter Mittelwert/);
 assert.match(definition('x'),/Prognose/);assert.match(definition('varepsilon'),/bedingter Erwartungswert null/);
 assert.match(definition('sigma'),/Varianz einer einzelnen Innovation/);assert.match(definition('h'),/positive ganze Anzahl/);
 const c=2,phi=.8,mu=c/(1-phi),x=20;
 assert.ok(Math.abs(mu-10)<1e-12);assert.equal(c+phi*x,18);
 const shockVariance=4,h=3;
 const conditionalVariance=shockVariance*Array.from({length:h},(_,j)=>phi**(2*j)).reduce((a,b)=>a+b,0);
 assert.ok(Math.abs(conditionalVariance-8.1984)<1e-10);
 assert.ok(conditionalVariance<shockVariance/(1-phi**2));
 assert.match(d.reading,/18/);
});
test('context-specific meanings override ambiguous financial letters',()=>{
 const meaning=(id,key)=>lessons.find(l=>l.id===id).notation.entries.filter(e=>e.keys.includes(key)).map(e=>e.meaning).join(' ');
 assert.match(meaning('derivatives-09','rho'),/Ableitung.*Zinssatz/);
 assert.match(meaning('portfolio-01','rho'),/Korrelation/);
 assert.match(meaning('quant-11','phi'),/Autoregressiver Koeffizient/);
 assert.match(meaning('portfolio-12','phi'),/Dichte der Standardnormalverteilung/);
 assert.match(meaning('economics-06','pi'),/Inflationsrate/);
 assert.match(meaning('quant-07','pi'),/Kreiszahl/);
 assert.match(meaning('practice-05','PD'),/keine Ausfallwahrscheinlichkeit/);
});
test('a newly introduced undefined mathematical symbol fails the build',()=>{
 const l=structuredClone(lessons.find(l=>l.id==='quant-11'));
 l.formulaMathML=require('../finance-math.cjs').renderLatex('x_t=\\zeta');
 assert.throws(()=>compileNotation(l),/undefined formula symbols zeta/);
});
