const {test}=require('node:test'),assert=require('node:assert/strict'),M=require('../finance-models.cjs'),{compile}=require('../finance-cfa/compile.cjs'),d=compile(),u=d.units.find(u=>u.id==='derivative-markets');
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),bank=d.questions.filter(q=>q.unit===u.id),figures=blocks.filter(b=>b.kind==='figure'),near=(a,b,t=1e-9)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),a+' vs '+b);
test('derivative market foundations explain the two actual 2027 outcomes with original practice, separate transfers and contextual chapter connections',()=>{
 assert.equal(u.sections.length,33);for(const[k,n]of [['formula',17],['figure',6],['diagram',2],['example',12],['table',13],['disclosure',2]])assert.equal(blocks.filter(b=>b.kind===k).length,n);
 assert.equal(bank.filter(q=>q.pool==='practice').length,40);for(const pool of ['mock-a','mock-b'])assert.equal(bank.filter(q=>q.pool===pool).length,1);
 const coverage=d.coverage.find(c=>c.id===u.id);assert.equal(coverage.objectives.length,2);for(const o of coverage.objectives){assert.equal(o.practice.length,20);assert.ok(o.sections.length>=15);assert.equal(o.mockQuestions,1);}
 assert.equal(d.release,false);assert.equal(u.review.status,'draft');assert.ok(u.sources[0].url.endsWith('#page=23'));assert.ok(u.sources.some(s=>s.url.includes('unidroit.org')));assert.ok(u.sources.some(s=>s.url.includes('cmegroup.com')));assert.ok(blocks.filter(b=>typeof b==='string').join(' ').length>25000);
 for(const pool of ['mock-a','mock-b'])assert.ok(d.inventory[pool].derivatives>=bank.filter(q=>q.pool===pool).length);assert.equal(require('../finance-content/derivatives.cjs')[0].lab,'forwardvalue');assert.equal(require('../finance-content/derivatives.cjs')[2].lab,'forwardvalue');assert.equal(Object.keys(M.models).length,50);
 for(const id of ['credit-risk','corporate-funding','tvm','mbs'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit==='derivative-markets'));
});
test('both forward-value series, every metric, zero sign and five presets agree with independent discounted gross cash legs',t=>{
 let cases=0,points=0;for(let forward=50;forward<=150;forward+=5)for(let strike=50;strike<=150;strike+=5)for(const df of [.5,.6,.7,.8,.9,1,1.05,1.5]){
  const out=M.calculate('forwardvalue',{forward,strike,df}),reference=df*forward-df*strike;assert.equal(out.metrics.length,2);near(out.metrics[0][1],reference);near(out.metrics[1][1],-reference);near(out.metrics[0][1]+out.metrics[1][1],0);assert.equal(out.series.length,2);assert.ok(out.series[1].dash);assert.deepEqual(out.points,out.series[0].points);assert.deepEqual(out.marker,[forward,out.metrics[0][1]]);
  for(const[i,s]of out.series.entries())for(const[x,y]of s.points){near(y,(i===0?1:-1)*(df*x-df*strike));points++;}
  if(forward===strike){assert.equal(Object.is(out.metrics[1][1],-0),false);assert.equal(out.metrics[0][1],0);}cases++;
 }
 assert.equal(cases,3528);assert.equal(points,430416);assert.equal(M.models.forwardvalue.presets.length,5);
 for(const preset of M.models.forwardvalue.presets){for(const c of M.models.forwardvalue.controls){const v=preset.values[c.key];assert.ok(v>=c.min&&v<=c.max);near((v-c.min)/c.step,Math.round((v-c.min)/c.step));}const out=M.calculate('forwardvalue',preset.values);near(out.metrics[0][1]+out.metrics[1][1],0);}
 t.diagnostic(JSON.stringify({independentForwardScenarios:cases,independentlyVerifiedCalculatorPoints:points}));
});
test('every plotted textbook value matches independent contractual cash, discounting, financing, netting and quantity balances',t=>{
 let count=0;for(const g of figures)for(const[i,s]of g.plot.series.entries())for(const[j,[x,y]]of s.points.entries()){let expected;
  if(g.id.endsWith('-terminal-sides'))expected=(i===0?1:-1)*(100*x-8000);
  else if(g.id.endsWith('-current-values'))expected=(i===0?1:-1)*(.96*x-.96*80);
  else if(g.id.endsWith('-margin-leverage')){const pnl=8000*x/100;expected=pnl/(i===0?8000:800)*100;}
  else if(g.id.endsWith('-margin-account')){const price=[80,77,82,79,84][j],external=j===0?1000:1300;expected=i===0?external+100*(price-80):external;}
  else if(g.id.endsWith('-netting-collateral'))expected=i===0?Math.max(18-10-5-x,0):Math.max(18-x,0);
  else if(g.id.endsWith('-contract-size'))expected=([370,370-300,370-400][i])*x;
  else assert.fail(g.id);near(y,expected);assert.ok(x>=g.plot.x[0]-1e-10&&x<=g.plot.x[1]+1e-10);assert.ok(y>=g.plot.y[0]-1e-10&&y<=g.plot.y[1]+1e-10);count++;
 }assert.equal(count,701);t.diagnostic(JSON.stringify({independentlyVerifiedBookPoints:count}));
});
test('daily account history reconciles cumulative contract results, total external funding and final return without double counting',()=>{
 const example=blocks.find(b=>b.kind==='example'&&b.title.startsWith('Ein Gewinn am Ende')),table=example.steps.find(b=>b.kind==='table'),prices=[80,77,82,79,84];let added=0;
 for(let day=1;day<prices.length;day++){const cumulative=100*(prices[day]-prices[0]),before=1000+added+cumulative,call=before<800?1000-before:0;added+=call;const end=1000+added+cumulative,row=table.rows[day-1].map(Number);assert.deepEqual(row,[day,prices[day],100*(prices[day]-prices[day-1]),before,call,end,1000+added]);}
 near(added,300);near(1700-(1000+added),100*(84-80));near(400,table.rows.reduce((n,r)=>n+Number(r[2]),0));
 for(const terminal of [60,80,100])near(100*terminal-100*(terminal-80),8000);
 const waterfall=blocks.find(b=>b.kind==='disclosure'&&b.title.startsWith('Einen fiktiven')).blocks.find(b=>b.kind==='table');let loss=13;
 for(const row of waterfall.rows){const available=Number(row[1]),paid=Number(row[2]);assert.ok(paid>=0&&paid<=available);loss-=paid;near(Number(row[3]),loss);}near(loss,0);
 near(15-12*.9,4.2);near(Math.max(6-3-2,0),1);
});
test('physical and CCP delivery diagrams conserve cash and share claims separately rather than adding amounts with unlike units',()=>{
 const diagrams=blocks.filter(b=>b.kind==='diagram'),direct=diagrams.find(b=>b.id.endsWith('-physical-forward')),cleared=diagrams.find(b=>b.id.endsWith('-cleared-delivery'));assert.equal(direct.flows.length,2);assert.equal(cleared.flows.length,4);
 near(direct.flows.find(f=>f.type==='cash').amount,8000);near(direct.flows.find(f=>f.type==='claim').amount,100);
 for(const type of ['cash','claim']){const incoming=cleared.flows.filter(f=>f.type===type&&f.to==='ccp').reduce((n,f)=>n+f.amount,0),outgoing=cleared.flows.filter(f=>f.type===type&&f.from==='ccp').reduce((n,f)=>n+f.amount,0);near(incoming,outgoing);near(incoming,type==='cash'?8000:100);}
 for(const diagram of diagrams){assert.equal(diagram.legend.length,2);assert.equal(diagram.rows.length,diagram.flows.length);}
});
test('all numerical answers use stated whole-position amounts, correct funding bases and separate counterparty sets',t=>{
 const expected={'03':40*75,'04':25*(72-64),'05':-25*(72-64),'06':30*(62-70),'07':50*40,'08':50*(46-40),'11':20*(93-90)*.97,'12':-20*(93-90)*.97,'13':Math.max(-22,0),'14':22,'15':.9*8,'18':250*43-250*(43-36),'19':-600/500*100,'20':15*4.9,'27':1500-(1500+100*(45-50)),'28':0,'29':2100-2000,'30':Math.max(25-18-4,0),'31':25,'32':9-4,'33':22-20*.85,'34':13-9,'35':13-9-2,'37':14-8-2-1,'38':(260-300)*5,'exam-a':80*(76-72)*.95,'exam-b':Math.max(20-12-3,0)+Math.max(6-10,0)};
 for(const[id,value]of Object.entries(expected)){const q=bank.find(q=>q.id==='dmk-'+id),answer=q.options[q.correct].text,match=/[-−]?\d[\d,]*(?:\.\d+)?/.exec(answer);assert.ok(match,q.id);near(Number(match[0].replaceAll(',','').replace('−','-')),value,1e-4);}
 for(const q of bank){assert.ok(q.options.every(o=>o.why.length>=15));assert.ok(q.solution.length);assert.ok(u.sections.some(s=>s.id===q.section));}t.diagnostic(JSON.stringify({independentlyVerifiedNumericalAnswers:Object.keys(expected).length}));
});
