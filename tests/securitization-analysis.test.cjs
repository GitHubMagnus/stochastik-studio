const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),M=require('../finance-models.cjs'),{compile,compileBlock}=require('../finance-cfa/compile.cjs'),d=compile(),u=d.units.find(u=>u.id==='securitization');
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),figures=blocks.filter(b=>b.kind==='figure'),diagrams=blocks.filter(b=>b.kind==='diagram'),bank=d.questions.filter(q=>q.unit===u.id),q=id=>bank.find(q=>q.id==='scz-'+id),answer=id=>q(id).options[q(id).correct].text;
const near=(a,b,t=1e-9)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),a+' vs '+b);
// Independently fund a priority queue in integer cents; unfilled capacity stays outstanding.
function queue(cash){let remaining=Math.round(cash*100);const paid=[];for(const capacity of [100,400,2000,Infinity]){const pay=Math.min(remaining,capacity);paid.push(pay/100);remaining-=pay;}return paid;}
test('securitization explains both actual 2027 objectives with original practice, two disjoint reserved cases and explicit release limits',()=>{
 assert.equal(u.sections.length,31);assert.equal(figures.length,4);assert.equal(diagrams.length,2);assert.equal(blocks.filter(b=>b.kind==='formula').length,15);assert.equal(blocks.filter(b=>b.kind==='example').length,6);assert.equal(blocks.filter(b=>b.kind==='table').length,2);assert.equal(blocks.filter(b=>b.kind==='disclosure').length,2);
 assert.equal(bank.filter(q=>q.pool==='practice').length,60);for(const pool of ['mock-a','mock-b'])assert.equal(bank.filter(q=>q.pool===pool).length,1);
 const coverage=d.coverage.find(c=>c.id===u.id);assert.equal(coverage.objectives.length,2);for(const o of coverage.objectives){assert.ok(o.sections.length>=20);assert.ok(o.practice.length>=35);assert.equal(o.mockQuestions,o.id.endsWith('-a')?1:2);}
 assert.equal(d.release,false);assert.equal(u.review.status,'draft');assert.ok(u.sources[0].url.endsWith('#page=21'));assert.ok(u.sources.some(s=>s.url.includes('COMPfeb25_01-26')));assert.equal(Object.keys(M.models).length,50);assert.deepEqual(u.explorations,[{section:'losses',lesson:'bonds-13',focus:'lab',label:'Den vorhandenen ABS-Rechner nutzen: gleicher Poolverlust bei anderer Juniorabschirmung'}]);
 for(const id of ['corporate-credit','bond-features','corporate-funding','bond-cashflows','credit-risk','cashflow-analysis'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit==='securitization'));
 assert.ok(blocks.filter(b=>typeof b==='string').join(' ').length>23000);for(const p of ['mock-a','mock-b'])assert.ok(d.inventory[p].bonds<=require('../finance-cfa/engine.cjs').blueprint.bonds);
});
test('the two original diagrams separate legal claims from money and conserve cash at every intermediate account',()=>{
 const issue=diagrams.find(x=>x.id.endsWith('-issuance')),live=diagrams.find(x=>x.id.endsWith('-collections'));
 assert.equal(issue.width,870);assert.equal(issue.flows.length,4);assert.equal(issue.legend.length,2);assert.equal(live.flows.length,4);assert.equal(live.legend.length,1);
 const transfer=(diagram,from,to,type)=>diagram.flows.find(f=>f.from===from&&f.to===to&&f.type===type).amount;
 near(transfer(issue,'investors','spe','cash'),80+20);near(transfer(issue,'spe','seller','cash'),100);near(transfer(issue,'seller','spe','claim'),100);near(transfer(issue,'spe','investors','claim'),80+20);
 const cashAt=(diagram,id)=>diagram.flows.filter(f=>f.type==='cash').reduce((s,f)=>s+(f.to===id?f.amount:0)-(f.from===id?f.amount:0),0);near(cashAt(issue,'spe'),0);near(cashAt(issue,'investors'),-100);near(cashAt(issue,'seller'),100);
 near(transfer(live,'borrowers','account','cash'),7+20);near(transfer(live,'account','servicer','cash'),1);near(transfer(live,'account','senior','cash'),80*.05+20);near(transfer(live,'account','junior','cash'),7-1-80*.05);near(cashAt(live,'account'),0);
 for(const v of diagrams){assert.equal(v.rows.length,v.flows.length);assert.match(v.svg,/<svg[^>]+role="img"/);assert.match(v.svg,/<title/);assert.match(v.svg,/<desc/);for(const f of v.flows){assert.ok(v.svg.includes('data-from="'+f.from+'" data-to="'+f.to+'" data-type="'+f.type+'"'));assert.ok(v.rows.some(r=>r[2]===f.label));}}
});
test('the running waterfall and all plotted numerical values agree with independent cash, portfolio and discounted-payment calculations',t=>{
 let points=0;for(const g of figures)for(const[i,s]of g.plot.series.entries())for(const[x,y]of s.points){let expected;
  if(g.id.endsWith('-retention')){const retained=20*x/100;expected=i===0?100-retained-2:i===1?retained:98;}
  else if(g.id.endsWith('-cash-priority'))expected=queue(x)[i];
  else if(g.id.endsWith('-losses')){const remainingPool=100-x,seniorPaid=Math.min(80,remainingPool),juniorPaid=remainingPool-seniorPaid;expected=i===0?20-juniorPaid:i===1?80-seniorPaid:x;}
  else if(g.id.endsWith('-costs'))expected=i===0?[1,2,3].reduce((a,year)=>a+.01*x/(1.05**year),-2):0;
  else assert.fail(g.id);near(y,expected);assert.ok(x>=g.plot.x[0]&&x<=g.plot.x[1]);assert.ok(y>=g.plot.y[0]-1e-10&&y<=g.plot.y[1]+1e-10);points++;
 }
 for(let c=0;c<=3500;c++){const paid=queue(c/100);near(paid.reduce((a,b)=>a+b,0),c/100);assert.ok(paid.every(x=>x>=0));if(paid[3]>0){near(paid[0],1);near(paid[1],4);near(paid[2],20);}}
 assert.deepEqual(queue(27),[1,4,20,2]);assert.deepEqual(queue(20),[1,4,15,0]);assert.deepEqual(queue(4),[1,3,0,0]);assert.deepEqual(queue(10),[1,4,5,0]);near(7-(20-queue(20)[2]),2);
 let lo=0,hi=200;for(let i=0;i<70;i++){const mid=(lo+hi)/2,npv=[1,2,3].reduce((sum,year)=>sum+.01*mid/1.05**year,-2);if(npv<0)lo=mid;else hi=mid;}near((lo+hi)/2,73.44171292624897);
 t.diagnostic(JSON.stringify({verifiedBookFigurePoints:points,independentCashQueueBalances:3501}));
});
test('the reused ABS calculator gives the same total loss after priority allocation over 2424 scenarios and every displayed curve point',t=>{
 let cases=0,points=0;for(const pool of [50,100,200])for(let junior=5;junior<=40;junior+=5)for(let loss=0;loss<=100;loss++){
  const out=M.calculate('abs',{pool,junior,loss}),S=pool*(1-junior/100),J=pool-S,left=pool*(1-loss/100),seniorPaid=Math.min(S,left),juniorPaid=left-seniorPaid;
  near(out.metrics[0][1],J-juniorPaid);near(out.metrics[1][1],S-seniorPaid);near(out.metrics.reduce((s,m)=>s+m[1],0),pool*loss/100);near(out.marker[0],loss);near(out.marker[1],out.metrics[1][1]);for(const[x,y]of out.points){near(y,S-Math.min(S,pool*(1-x/100)));points++;}cases++;
 }t.diagnostic(JSON.stringify({independentCalculatorScenarios:cases,verifiedCalculatorPoints:points}));
});
test('worked sources/uses, accounting assumptions and answer keys preserve the differences between proceeds, income, principal and loss',()=>{
 near(80+20,100);near(100-2-1,97);near(100+2+1,103);near(100-2,98);near(100-95-2,3);near(80-2,78);near(80+10-2,88);near(10+100-80,30);near(120-80,40);near(30+40,40+30);
 near(.2*1+.8*.125,.3);near(.5*(20-(100-15-80)),7.5);near(105-3,102);near(32-2-6,24);near(27-24,3);
 const numeric={'10':100,'11':97,'12':103,'15':78,'16':88,'23':27,'24':4,'25':24,'26':2,'29':5,'32':3,'33':5,'34':5,'40':15,'45':[1,2,3].reduce((s,t)=>s+1/1.05**t,-2),'46':[1,2,3].reduce((s,t)=>s+.3/1.05**t,-2),'47':73.44171292624897,'exam-a':102};
 for(const[id,value]of Object.entries(numeric)){const found=Number(answer(id).replaceAll(',','').replace('−','-').match(/^-?\d+(?:\.\d+)?/)[0]);assert.ok(Math.abs(found-value)<=.0050001,id+': '+found+' vs '+value);}
 assert.equal(answer('13'),'98 and 3.');assert.equal(answer('20'),'30 and 40.');assert.equal(answer('21'),'Remain 120 and 10.');assert.equal(answer('27'),'80, 60 and 20.');assert.equal(answer('36'),'Junior 15 and senior 0.');assert.equal(answer('37'),'10 and 12.5%.');assert.equal(answer('41'),'7.5 and 7.5.');assert.equal(answer('exam-b'),'24 and 0.');
 for(const q of bank){assert.equal(q.options.length,3);assert.ok(q.options.every(o=>o.why.length>=15));assert.ok(q.solution.length);assert.ok(u.sections.some(s=>s.id===q.section));}
});
test('new process definitions return exactly while established trustee, equity-underwriter and generic waterfall routes remain available',()=>{
 const g=require('../finance-glossary.cjs'),find=t=>g.find(e=>[e.term,...e.aliases].includes(t));for(const[term,section]of [['Verbriefung','claim'],['Originator','originator'],['SPE','spe'],['Servicer','servicer'],['Verbriefungs-Trustee','trustee'],['Verbriefungs-Underwriter','arranger'],['Tranche','losses'],['True Sale','remoteness'],['Insolvenzferne','remoteness'],['Verbriefungswasserfall','waterfall'],['Commingling Risk','servicer'],['Originate-to-Distribute','capacity']])assert.deepEqual(find(term).cfa,{unit:'securitization',section});
 for(const[term,unit,section]of [['Trustee','bond-features','indenture'],['Underwriter','equity-trading','underwriting'],['Waterfall','bond-cashflows','waterfall'],['Zahlungswasserfall','bond-cashflows','waterfall']])assert.deepEqual(find(term).cfa,{unit,section});
 for(const[term,label]of [['Verbriefungs-Trustee','Trustee'],['Verbriefungs-Underwriter','Underwriter'],['Verbriefungswasserfall','Zahlungswasserfall'],['Forderungspool','Pool']])assert.ok(find(term).contextualAliases.some(a=>a.label===label&&a.units.includes(u.id)));
 const source=fs.readFileSync(require.resolve('../finance-cfa/units/securitization.cjs'),'utf8')+fs.readFileSync(require.resolve('../finance-cfa/questions/securitization.cjs'),'utf8');assert.doesNotMatch(source,/(?<!\\)\\(?!\\)/);for(const f of [...blocks,...bank.flatMap(q=>flat(q.solution))].filter(b=>b.kind==='formula'))assert.ok(f.mathml.includes('<math')&&f.symbols.every(s=>s.mathml.includes('<math')&&s.meaning));
});
test('native diagram validation rejects inconsistent routes and preserves text as text, never raw SVG markup',()=>{
 const render=require('../finance-cfa/diagram.cjs').render,source={id:'test',title:'A & B',caption:'Own <case>',reading:'A direction, not a guarantee.',width:400,height:150,nodes:[{id:'a',x:10,y:50,w:120,h:70,lines:['A <issuer>']},{id:'b',x:260,y:50,w:120,h:70,lines:['B & buyer']}],flows:[{from:'a',to:'b',type:'cash',amount:5,label:'5 < 6 & "cash"',points:[[130,85],[260,85]],at:[195,65]}]};
 const out=render(source,'diagram-test');assert.ok(out.svg.includes('&lt;issuer&gt;'));assert.ok(out.svg.includes('5 &lt; 6 &amp; &quot;cash&quot;'));assert.ok(!out.svg.includes('<issuer>'));assert.deepEqual(out.rows,[['A <issuer>','B & buyer','5 < 6 & "cash"','Geldzahlung']]);
 for(const patch of [{width:NaN},{height:0},{nodes:[source.nodes[0],source.nodes[0]]},{nodes:[{...source.nodes[0],x:-1},source.nodes[1]]},{flows:[{...source.flows[0],from:'missing'}]},{flows:[{...source.flows[0],type:'guaranteed'}]},{flows:[{...source.flows[0],amount:-1}]},{flows:[{...source.flows[0],points:[[120,85],[260,85]]}]},{flows:[{...source.flows[0],at:[500,65]}]}])assert.throws(()=>render({...source,...patch},'invalid'));
 const compiled=compileBlock({kind:'diagram',...source},'test/section');assert.match(compiled.id,/^cfa-diagram-test-section-/);assert.ok(compiled.svg.includes(compiled.id+'-title'));
});
