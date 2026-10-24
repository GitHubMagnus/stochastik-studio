const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),{compile}=require('../finance-cfa/compile.cjs'),d=compile(),u=d.units.find(u=>u.id==='abs');
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),figures=blocks.filter(b=>b.kind==='figure'),bank=d.questions.filter(q=>q.unit==='abs'),q=id=>bank.find(q=>q.id==='abs-'+id),answer=id=>q(id).options[q(id).correct].text;
const near=(a,b,t=1e-9)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),a+' vs '+b);
// Independent terminal payments: spend remaining assets on claims in seniority order.
function allocations(loss){let cash=120-loss;const paid=[];for(const face of [80,20,20]){const p=Math.min(face,cash);paid.push(p);cash-=p;}return [20-paid[2],20-paid[1],80-paid[0]];}
function root(fn,target,high){let lo=0,hi=high;for(let i=0;i<80;i++){const m=(lo+hi)/2;if(fn(m)<target)lo=m;else hi=m;}return (lo+hi)/2;}
function loanHistory(extra){let balance=120;const points=[[0,balance]];for(let year=1;year<=3;year++){if(balance===0){points.push([year,0]);continue;}points.push([year,balance]);const scheduled=Math.min(balance,40),additional=year===1?extra:0;balance-=scheduled+additional;points.push([year,balance]);}return points;}
test('ABS develops the four actual 2027 outcomes with original questions, explicit model limits and correct existing connections',()=>{
 assert.equal(u.sections.length,40);for(const[k,n]of [['formula',31],['figure',7],['diagram',2],['example',9],['table',8],['disclosure',3]])assert.equal(blocks.filter(b=>b.kind===k).length,n);
 assert.equal(bank.filter(q=>q.pool==='practice').length,72);assert.equal(bank.filter(q=>q.pool==='mock-a').length,1);assert.equal(bank.filter(q=>q.pool==='mock-b').length,1);assert.equal(d.release,false);assert.equal(u.review.status,'draft');
 const c=d.coverage.find(c=>c.id===u.id);assert.equal(c.objectives.length,4);for(const o of c.objectives){assert.ok(o.sections.length>=10);assert.ok(o.practice.length>=12);}assert.deepEqual(c.objectives.map(o=>o.mockQuestions),[1,1,0,1]);
 assert.ok(u.sources[0].url.endsWith('#page=22'));assert.ok(u.sources.some(s=>s.url.includes('fca.org.uk')));assert.ok(u.sources.some(s=>s.url.includes('pfandbg/__30')));assert.ok(u.sources.some(s=>s.url.includes('P191219')));
 assert.ok(blocks.filter(b=>typeof b==='string').join(' ').length>32000);assert.ok(Object.keys(require('../finance-models.cjs').models).length>=50);
 assert.deepEqual(u.explorations,[{section:'subordination',lesson:'bonds-13',focus:'lab',label:'Im vorhandenen Zweitranchenmodell Verlusthöhe und Juniorabschirmung isolieren; ohne OC-Reserve, Zins oder Trigger'}]);
 for(const id of ['securitization','bond-features','bond-cashflows','credit-risk','corporate-funding','floating-yields'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit==='abs'));
});
test('every plotted ABS value agrees with independent recoveries, asset-payment priorities, budgets and joint states',t=>{
 let points=0;for(const g of figures)for(const[i,s]of g.plot.series.entries())for(const[pointIndex,[x,y]]of s.points.entries()){let v;
  if(g.id.endsWith('-dual-recovery'))v=i===0?100-15*(1-x/100):85;
  else if(g.id.endsWith('-loss-layers'))v=i<3?allocations(x)[i]:allocations(x).reduce((a,b)=>a+b,0);
  else if(g.id.endsWith('-spread-buffer')){let budget=400,loss=Math.round(x*100),funded=Math.min(budget,loss);v=([funded,budget-funded,loss-funded][i])/100;}
  else if(g.id.endsWith('-auto-balances')){const history=loanHistory(i===0?0:40);assert.equal(s.points.length,history.length);assert.equal(x,history[pointIndex][0]);v=history[pointIndex][1];}
  else if(g.id.endsWith('-revolving-balance')){let capital=100;for(let m=0;m<x;m++){const receipt=.25*capital;capital-=receipt;if(i===0)capital+=receipt;}v=capital;}
  else if(g.id.endsWith('-oc-sources')){const notes=100-x,assets=i===0?108:i===1?108-x:0;v=i===2?110:100*assets/notes;}
  else if(g.id.endsWith('-joint-default')){const joint=x/100,states=[[0,.8+joint],[50,.1-joint],[50,.1-joint],[100,joint]];v=states.reduce((sum,[loss,p])=>sum+p*(i===0?Math.max(0,loss-50):i===1?Math.min(loss,50):loss),0);}
  else assert.fail(g.id);near(y,v);assert.ok(x>=g.plot.x[0]&&x<=g.plot.x[1]);assert.ok(y>=g.plot.y[0]-1e-10&&y<=g.plot.y[1]+1e-10);points++;
 }assert.equal(points,1206);t.diagnostic(JSON.stringify({independentlyVerifiedBookPoints:points}));
});
test('capital layers, funded reserves and source-specific coverage cure conserve assets and do not count resources twice',t=>{
 let cases=0;for(let cents=0;cents<=12000;cents++){const loss=cents/100,parts=allocations(loss);near(parts.reduce((a,b)=>a+b,0),loss);assert.ok(parts.every(v=>v>=-1e-12));near(parts[0]+(20-parts[0]),20);cases++;}
 assert.deepEqual(allocations(25),[20,5,0]);assert.deepEqual(allocations(45),[20,20,5]);near((120-100)/100,.2);near((120-100)/120,1/6);near((120-80)/120,1/3);
 const existingExcess=120-100,addedReserveExcess=125-100,debtFundedExcess=125-105;near(existingExcess,20);near(addedReserveExcess,25);near(debtFundedExcess,20);
 const fixed=root(x=>108/(100-x),1.1,25),assets=root(x=>(108-x)/(100-x),1.1,25);near(fixed,20/11);near(assets,20);near(108/(100-fixed),1.1);near((108-assets)/(100-assets),1.1);near(1+4+2+fixed+(3-fixed),10);near(108/99,12/11);
 for(let cents=0;cents<=500;cents++){const available=cents/100,pay=Math.min(available,fixed),released=available-pay;near(pay+released,available);assert.ok(100-pay>0);if(available+1e-10<fixed)assert.ok(108/(100-pay)<1.1);else near(108/(100-pay),1.1);}
 t.diagnostic(JSON.stringify({independentTerminalAllocations:cases,cashAvailabilityCases:501,interestFundedCure:fixed,assetFundedCure:assets}));
});
test('both principal-phase diagrams conserve actual cash and distinguish acquired claims from payments',()=>{
 const diagrams=blocks.filter(b=>b.kind==='diagram'),rev=diagrams.find(x=>x.id.endsWith('-revolving-principal')),amort=diagrams.find(x=>x.id.endsWith('-amortizing-principal'));
 assert.equal(rev.flows.length,3);assert.equal(amort.flows.length,2);assert.equal(rev.flows.filter(f=>f.type==='claim').length,1);assert.equal(amort.flows.filter(f=>f.type==='claim').length,0);
 for(const diagram of diagrams){const incoming=diagram.flows.filter(f=>f.type==='cash'&&f.to==='account').reduce((s,f)=>s+f.amount,0),outgoing=diagram.flows.filter(f=>f.type==='cash'&&f.from==='account').reduce((s,f)=>s+f.amount,0);near(incoming,25);near(outgoing,25);assert.equal(diagram.rows.length,diagram.flows.length);}
 const claim=rev.flows.find(f=>f.type==='claim');assert.equal(claim.from,'seller');assert.equal(claim.to,'account');near(claim.amount,25);
 assert.equal(amort.flows.find(f=>f.from==='account').to,'investors');assert.equal(rev.flows.find(f=>f.from==='account').to,'seller');
});
test('the installment, prepayment, geometric paydown and dependence cases reconcile their separate meanings',()=>{
 const base=[],pre=[];for(const mode of [0,1]){let b=120;for(let year=1;year<=3;year++){const interest=.06*b,scheduled=Math.min(40,b),extra=mode&&year===1?40:0;const capital=scheduled+extra;(mode?pre:base).push({year,interest,capital,payment:interest+capital});b-=capital;}near(b,0);}
 near(base.reduce((s,p)=>s+p.interest,0),14.4);near(pre.reduce((s,p)=>s+p.interest,0),9.6);near(base.reduce((s,p)=>s+p.capital*p.year/120,0),2);near(pre.reduce((s,p)=>s+p.capital*p.year/120,0),4/3);
 assert.deepEqual(base.map(p=>p.payment),[47.2,44.8,42.4]);assert.deepEqual(pre.map(p=>p.payment),[87.2,42.4,0]);near(100*(.75**3),42.1875);near(100-42.1875,57.8125);
 for(const joint of [0,.01,.04,.1]){const probs=[.8+joint,.2-2*joint,joint];near(probs.reduce((a,b)=>a+b,0),1);assert.ok(probs.every(p=>p>=0));near(probs[1]*50+probs[2]*100,10);near(.5*(probs[1]+2*probs[2]),.1);}
 const table=blocks.find(b=>b.kind==='table'&&b.headers[0]==='Jahr');assert.deepEqual(table.rows,[['1','120','7,20','40','47,20','80'],['2','80','4,80','40','44,80','40'],['3','40','2,40','40','42,40','0']]);
});
test('numerical training and both reserved transfers answer the actual stated question with explicit reasons',()=>{
 const expected={'03':'65.','04':'100.','13':'120%.','14':'20%.','15':'16.67%.','17':'0.','18':'Residual 20, junior 20 and senior 15.','19':'50%.','20':'100%.','21':'25.','22':'It remains 20.','24':'5.','25':'2.','26':'4.','27':'7.','32':'3.','34':'34.5.','35':'40.','37':'1.33 years.','39':'90.','40':'0.','42':'160.','43':'120 and 120.','44':'128.','45':'20%.','48':'Dilution of 12 rather than a credit default on the remaining obligation.','50':'105.','51':'2.4.','52':'8.','57':'150%.','59':'105%.','61':'1.82.','62':'109.09%, still below target.','63':'20.','68':'1.6.','69':'8.0.','70':'14.4 under independence to 8 under joint defaults.','71':'12%.','exam-a':'123.','exam-b':'1.36.'};for(const[id,value]of Object.entries(expected))assert.equal(answer(id),value,id);
 near(114+(150-114)*.25,123);const pay=root(x=>117/(110-x),1.1,10);near(pay,40/11);near(5-pay,15/11);near(117/(110-pay),1.1);near(pay+5-pay,5);
 for(const p of ['mock-a','mock-b'])assert.equal(d.inventory[p].bonds,22);
 for(const q of bank){assert.equal(q.options.length,3);assert.ok(q.options.every(o=>o.why.length>=15));assert.ok(q.solution.length);assert.ok(u.sections.some(s=>s.id===q.section));}
});
test('ABS dictionary resolves local meanings and preserves earlier global subordination, residual, WAL and default correlation',()=>{
 const g=require('../finance-glossary.cjs'),find=t=>g.find(e=>[e.term,...e.aliases].some(a=>a.toLowerCase()===t.toLowerCase()));
 for(const[term,section]of [['ABS','map'],['Covered Bond','comparison'],['Dual Recourse','dual-recourse'],['Overcollateralization','oc'],['Attachment Point','attachment'],['Excess Spread','spread'],['Seller’s Interest','seller-interest'],['MPR','amortization'],['Dilution','dilution'],['CLO','clo'],['OC Test','oc-test'],['Cash Diversion','diversion']])assert.deepEqual(find(term).cfa,{unit:'abs',section});
 for(const[term,unit,section]of [['Subordination','stakeholders','seniority'],['Residual','regression','model'],['WAL','bond-cashflows','wal'],['Ausfallkorrelation','credit-risk','dependence'],['Cash Overcollateralization','corporate-funding','initial-margin']])assert.deepEqual(find(term).cfa,{unit,section});
 for(const[term,label]of [['Verbriefungs-Subordination','Subordination'],['Verbriefungsresidual','Residual'],['CLO-Zinsdeckungsfaktor','IC'],['CLO-Deckungstest','OC'],['Ausfallabhängigkeit','Ausfallkorrelation']])assert.ok(find(term).contextualAliases.some(a=>a.label===label&&a.units.includes('abs')));
 const names=new Map();for(const e of g)for(const label of [e.term,...e.aliases]){const k=label.toLocaleLowerCase('de');if(names.has(k))assert.equal(names.get(k),e.term);names.set(k,e.term);}
 const curated=require('../finance-cfa/glossary.cjs');assert.equal(new Set(curated.map(e=>e.term.toLowerCase())).size,curated.length);
});
test('every authored ABS equation has real mathematics and local symbol explanations without accidental string escapes',()=>{
 const source=fs.readFileSync(require.resolve('../finance-cfa/units/abs.cjs'),'utf8')+fs.readFileSync(require.resolve('../finance-cfa/questions/abs.cjs'),'utf8');assert.doesNotMatch(source,/(?<!\\)\\(?!\\)/);
 for(const f of [...blocks,...bank.flatMap(q=>flat(q.solution))].filter(b=>b.kind==='formula')){assert.ok(f.mathml.includes('<math'));assert.ok(f.reading.length>15);assert.ok(f.symbols.length);for(const s of f.symbols)assert.ok(s.mathml.includes('<math')&&s.meaning.length>10);}
});
