const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),M=require('../finance-models.cjs'),d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(u=>u.id==='corporate-credit');
const base=Object.fromEntries(M.models.creditcash.controls.map(c=>[c.key,c.value])),run=p=>M.calculate('creditcash',{...base,...p}),near=(a,b,t=1e-9)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),a+' vs '+b);
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),bank=d.questions.filter(q=>q.unit===u.id),q=id=>bank.find(q=>q.id==='ccr-'+id),answer=id=>q(id).options[q(id).correct].text;
// Independently post the original sources/uses and financing, not the model's FFO chain.
function ledger(p){
 const operatingCash=p.sales-p.sales*p.variable/100-p.fixed,noncash=10;
 const fixedInterest=p.debt/2*.05,floatingInterest=p.debt/2*(.05+p.shock/100),interest=fixedInterest+floatingInterest;
 const tax=Math.max(0,(operatingCash-noncash-interest)/4),principal=p.debt*p.maturity/100;
 const uses=[interest,tax,p.wc,p.capex,principal],pre=15+operatingCash-uses.reduce((a,b)=>a+b,0),fund=Math.max(0,10-pre);
 return {operatingCash,interest,tax,pre,fund,closingCash:15+operatingCash+fund-uses.reduce((a,b)=>a+b,0),closingDebt:p.debt-principal+fund,fcf:operatingCash-interest-tax-p.wc-p.capex};
}
test('corporate-credit has substantive coverage of all three actual 2027 objectives and preserves release gates',()=>{
 assert.equal(u.sections.length,35);assert.equal(blocks.filter(b=>b.kind==='figure').length,6);assert.equal(blocks.filter(b=>b.kind==='formula').length,21);assert.equal(blocks.filter(b=>b.kind==='example').length,5);assert.equal(blocks.filter(b=>b.kind==='disclosure').length,2);
 assert.equal(bank.filter(q=>q.pool==='practice').length,60);for(const pool of ['mock-a','mock-b'])assert.equal(bank.filter(q=>q.pool===pool).length,1);
 const cov=d.coverage.find(c=>c.id===u.id);assert.equal(cov.objectives.length,3);for(const o of cov.objectives){assert.ok(o.sections.length>=10);assert.ok(o.practice.length>=10);assert.ok(o.mockQuestions>=1);}
 assert.equal(u.review.status,'draft');assert.equal(d.release,false);assert.ok(u.sources[0].url.endsWith('#page=21'));assert.ok(u.sources.some(s=>s.url.endsWith('2027-cfa-program-level-1-errata-notice.pdf')));
 assert.equal(require('../finance-content/bonds.cjs')[9].lab,'credit');assert.deepEqual(require('../finance-content/bonds.cjs')[9].additionalLabs,['creditcash']);assert.ok(Object.keys(M.models).length>=50);assert.equal(M.models.creditcash.controls.length,8);assert.equal(M.models.creditcash.presets.length,7);
 for(const id of ['company','ratios','cashflow-analysis','bond-features','corporate-funding','credit-risk'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit==='corporate-credit'));
 const text=blocks.filter(b=>typeof b==='string').join(' ');assert.ok(text.length>22000);assert.ok(text.includes('keine')&&text.includes('Working Capital'));
});
test('independent transaction ledgers reconcile cash and debt at all 256 native corners and 250 seeded interior cases',t=>{
 const controls=M.models.creditcash.controls,cases=[];for(let mask=0;mask<256;mask++)cases.push(Object.fromEntries(controls.map((c,i)=>[c.key,mask&(1<<i)?c.max:c.min])));
 let seed=731;const random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/2**32;};for(let j=0;j<250;j++)cases.push(Object.fromEntries(controls.map(c=>[c.key,c.min+Math.round(random()*(c.max-c.min)/c.step)*c.step])));
 for(const p of cases){const a=ledger(p),b=M.creditCashPlan(p),out=run(p);near(b.ebitda,a.operatingCash);near(b.interest,a.interest);near(b.tax,a.tax);near(b.fcf,a.fcf);near(b.cashBefore,a.pre);near(b.need,a.fund);near(b.cashEnd,a.closingCash);near(b.debtEnd,a.closingDebt);assert.ok(b.cashEnd>=10-1e-10);assert.ok(b.debtEnd>=0);assert.ok(out.metrics.every(m=>Number.isFinite(m[1])));
  near(b.ffo,b.income+10);near(b.cfo+b.interest+b.tax+p.wc,b.ebitda);near(b.debtEnd-p.debt,b.need-b.maturity);
  for(const [i,s]of out.series.entries())for(const [sales,y]of s.points){const v=ledger({...p,sales});near(y,i===0?v.fcf+p.capex:i===1?v.fcf:v.pre);}
 }t.diagnostic(JSON.stringify({independentLedgers:cases.length,verifiedCalculatorPoints:cases.length*183}));
});
test('controlled scenarios isolate operating performance, working capital, rates and maturity rather than manufacture rating thresholds',()=>{
 const b=M.creditCashPlan(base);near(b.ebitda,50);near(b.ebit,40);near(b.interest,7.5);near(b.tax,8.125);near(b.ffo,34.375);near(b.cfo,24.375);near(b.fcf,9.375);near(b.cashBefore,-5.625);near(b.need,15.625);near(b.debtEnd,135.625);near(b.grossLeverage,3);near(b.netLeverage,2.7);near(b.ebitCover,16/3);near(b.ebitdaCover,20/3);
 const r=M.creditCashPlan({...base,sales:160});near(r.ebitda,34);near(r.tax,4.125);near(r.fcf,-2.625);near(r.need,27.625);near((r.ebitda/b.ebitda-1),-.32);
 const w=M.creditCashPlan({...base,wc:30});near(w.ffo,b.ffo);near(w.cfo,b.cfo-20);near(w.need,b.need+20);
 const m=M.creditCashPlan({...base,maturity:50});near(m.interest,b.interest);near(m.ebitdaCover,b.ebitdaCover);near(m.need,60.625);near(m.debtEnd,b.debtEnd);
 const n=M.creditCashPlan({...base,maturity:0});near(n.need,0);near(n.cashEnd,24.375);near(n.debtEnd,150);
 const i=M.creditCashPlan({...base,shock:4});near(i.interest,10.5);near(i.fcf,b.fcf-3*.75);near(i.need,b.need+2.25);
 const z=M.creditCashPlan({...base,sales:150,fixed:60});near(z.ebitda,0);assert.equal(z.grossLeverage,null);assert.equal(z.netLeverage,null);assert.equal(run({sales:150,fixed:60}).stable.rows[0][1],'Nicht aussagekräftig');
 const loss=M.creditCashPlan(M.models.creditcash.presets[6].values);assert.ok(loss.ebitda<0);assert.equal(loss.grossLeverage,null);near(loss.tax,0);assert.ok(loss.ebitCover<0);
 for(const preset of M.models.creditcash.presets){for(const c of M.models.creditcash.controls){assert.ok(preset.values[c.key]>=c.min&&preset.values[c.key]<=c.max);near((preset.values[c.key]-c.min)/c.step,Math.round((preset.values[c.key]-c.min)/c.step));}assert.ok(M.calculate('creditcash',preset.values).metrics.every(m=>Number.isFinite(m[1])));}
 for(const p of [{debt:0},{maturity:101},{variable:101},{shock:-1},{sales:NaN}])assert.throws(()=>M.creditCashPlan({...base,...p}));for(const p of [{debt:0},{maturity:81},{wc:41},{sales:119}])assert.throws(()=>run(p));
});
test('each textbook curve obeys an independently specified cash or claim allocation, without double counting',t=>{
 let points=0;for(const f of blocks.filter(b=>b.kind==='figure'))for(const [i,s]of f.plot.series.entries())for(const [x,y]of s.points){let expected;
  const e=.4*x-30,I=7.5,T=Math.max(0,e-10-I)/4;
  if(f.id.endsWith('-operating'))expected=e-(i===1?10:0);
  else if(f.id.endsWith('-cash-bridge'))expected=i===0?e:e-I-T-10-(i===2?15:0);
  else if(f.id.endsWith('-maturity'))expected=i===0?24.375-x:i===1?Math.max(0,x-14.375):10;
  else if(f.id.endsWith('-wc'))expected=i===0?19.375-x:Math.max(0,5.625+x);
  else if(f.id.endsWith('-waterfall')){const free=x-40-10,pool=Math.min(free,70),secured=40+pool*10/70,unsecured=pool*60/70,junior=Math.min(30,Math.max(0,free-pool)),equity=Math.max(0,free-pool-junior);near(10+secured+unsecured+junior+equity,x);expected=100*[secured/50,unsecured/60,junior/30][i];}
  else if(f.id.endsWith('-structural'))expected=100*(i===0?Math.min(x,60)/60:Math.min(Math.max(0,x-60),80)/80);
  else assert.fail(f.id);
  near(y,expected);assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]);assert.ok(y>=f.plot.y[0]-1e-10&&y<=f.plot.y[1]+1e-10);points++;
 }t.diagnostic(JSON.stringify({verifiedBookFigurePoints:points}));
 near(40+(10/70)*50,47.14285714285714);near((60/70)*50,42.857142857142854);near(1-(40+50/7)/50,2/35);near(1-(50*6/7)/60,2/7);near(Math.max(0,140-120),20);near(Math.max(0,160-150),10);
});
test('worked calculations and original numerical answer choices use the intended definitions, including reserved distractors',()=>{
 const numeric={'08':50,'09':40,'12':1.6,'14':2.7,'17':50/7.5,'19':10.5,'21':8.125,'22':34.375,'23':24.375,'25':9.375,'26':.45,'27':34.375/150*100,'28':16.25,'29':15.625,'32':-10.625,'33':-2.625,'34':135.625,'38':60,'45':50,'46':50/70*100,'47':40+50/7,'48':(1-(50*6/7)/60)*100,'49':20,'50':10,'51':50,'55':null,'59':14.375,'exam-a':28.1,'exam-b':60};
 for(const[id,value]of Object.entries(numeric)){if(value===null)continue;const actual=Number(answer(id).replaceAll(',','').replace('−','-').match(/^-?\d+(?:\.\d+)?/)[0]);assert.ok(Math.abs(actual-value)<=.00500001,id+': '+actual+' vs '+value);}
 const E=72,A=12,I=180*.06,T=(E-A-I)/4,free=E-I-T-18-20,raw=14+free-45,need=8-raw;near(free,10.9);near(need,28.1);near(-raw,20.1);near(need-T,15.8);
 for(const value of [28.1,20.1,15.8])assert.ok(q('exam-a').options.some(o=>Number(o.text.replace(/\.$/,''))===value));
 near((84-48)/60*100,60);near(84/(48+60)*100,77.77777777777779);assert.ok(q('exam-b').options.some(o=>o.text==='77.78%.'||o.text==='77.78%.'));
 near((24.375+7.5-15)/(7.5+30),.45);near((24.375-15)/(7.5+30),.25);near(24.375/(7.5+30),.65);
 near((150/50)-(150-15)/50,.3);near((40/7.5)+(10/7.5),50/7.5);
 for(const question of bank){assert.equal(question.options.length,3);assert.ok(question.options.every(o=>o.why.length>=15));assert.ok(question.solution.length);assert.ok(u.sections.some(s=>s.id===question.section));}
});
test('credit FFO and DSCR have precise contextual definitions while REIT FFO and existing project and structural routes survive',()=>{
 const g=require('../finance-glossary.cjs'),find=t=>g.find(e=>[e.term,...e.aliases].includes(t));
 assert.equal(find('FFO').term,'Funds from Operations');assert.equal(find('FFO').cfa,undefined);assert.ok(find('FFO').definition.includes('Immobilien'));
 assert.deepEqual(find('DSCR').cfa,{unit:'government-funding',section:'project-case'});assert.deepEqual(find('Strukturelle Nachrangigkeit').cfa,{unit:'bond-features',section:'structural'});
 for(const [term,section]of [['Kredit-FFO','ffo'],['Kredit-FCF','fcf'],['Kredit-Schuldendienstdeckung','cashcoverage'],['Brutto-Leverage','leverage'],['Analytische Netto-Leverage','leverage'],['EBIT','earnings'],['EBITDA','earnings'],['Struktureller Nachrang','structural'],['Erhaltungs-Capex','fcf']])assert.deepEqual(find(term).cfa,{unit:'corporate-credit',section});
 for(const [word,unit,section]of [['Structural Subordination','bond-features','structural'],['Contractual Subordination','bond-features','security'],['Deficiency Claim','bond-features','recovery'],['Netto-Leverage','bond-features','definitions'],['Maintenance Capex','company','investment'],['Growth Capex','company','investment']])assert.deepEqual(find(word).cfa,{unit,section});
 assert.ok(find('Kredit-FFO').contextualAliases.some(a=>a.label==='FFO'&&a.units.includes('corporate-credit')));assert.ok(find('Kredit-Schuldendienstdeckung').contextualAliases.some(a=>a.label==='DSCR'&&a.units.includes('corporate-credit')));
 const source=fs.readFileSync(require.resolve('../finance-cfa/units/corporate-credit.cjs'),'utf8')+fs.readFileSync(require.resolve('../finance-cfa/questions/corporate-credit.cjs'),'utf8');assert.doesNotMatch(source,/(?<!\\)\\(?!\\)/,'Every TeX backslash must survive a JavaScript string literal');
 for(const f of [...blocks,...bank.flatMap(q=>flat(q.solution))].filter(b=>b.kind==='formula')){assert.ok(f.symbols.every(s=>s.mathml.includes('<math')&&s.meaning));assert.doesNotMatch(f.tex,/\\text\{(?:Schuld|Cashflow|Umsatz)/);}
});
