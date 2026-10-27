const {test}=require('node:test'),assert=require('node:assert/strict');
const data=require('../finance-cfa/compile.cjs').compile(),unit=data.units.find(u=>u.id==='research');
const section=id=>unit.sections.find(s=>s.id===id),example=id=>section(id).blocks.find(b=>b.kind==='example');
const number=s=>Number(String(s).replaceAll('.','').replace(',','.').replace('−','-').replace(' %',''));
const near=(a,b,tol=1e-9)=>assert.ok(Math.abs(a-b)<tol,a+' differs from '+b);
// Explicit annual cash-flow summation is independent of the authored closed-form value helper.
const pv=({sales=500,margin=.16,r=.12,k=.09,g=.03}={})=>{
 const profit=sales*margin*.75,cash=profit-profit*g/r;let operating=0;
 for(let t=1;t<=1000;t++)operating+=cash*(1+g)**(t-1)/(1+k)**t;
 return {profit,cash,operating,share:(operating+30-100)/10};
};

test('research reports cover the three actual 2027 objectives with original practice and disjoint reserved cases',()=>{
 const coverage=data.coverage.find(c=>c.id===unit.id),bank=data.questions.filter(q=>q.unit===unit.id);
 assert.equal(unit.sections.length,28);assert.equal(unit.review.status,'checked');assert.equal(data.release,false);
 assert.equal(bank.filter(q=>q.pool==='practice').length,40);
 for(const pool of ['mock-a','mock-b']){assert.equal(bank.filter(q=>q.pool===pool).length,1);assert.ok(data.inventory[pool].equity<=require('../finance-cfa/engine.cjs').blueprint.equity);}
 assert.deepEqual(coverage.objectives.map(o=>o.id),['research-a','research-b','research-c']);
 const required={a:['blueprint','facts','memo'],b:['sell-side','buy-side','mandate','conflicts'],c:['assumption-map','single','joint','financing','scenarios','reverse']};
 for(const o of coverage.objectives){assert.ok(o.practice.length>=10);assert.ok(o.mockQuestions);for(const id of required[o.id.at(-1)])assert.ok(o.sections.includes(id));}
 assert.match(unit.sources[0].url,/2027levelitopicoutline_online\.pdf#page=17$/);
 assert.ok(unit.sources.some(s=>s.url.includes('rc-equity-research-report-essentials.pdf')));
});

test('Mareon historical and forecast rows reconcile income, net capital use and explicit future cash values',()=>{
 const rows=section('forecast').blocks.find(b=>b.kind==='table').rows;
 for(const [j,input]of [[440,.14,25,30,4],[480,.15,26,35,5],[500,.16,28,38,5]].entries()){
  const [sales,margin,da,capex,wc]=input,ebit=sales*margin,nopat=ebit*.75,fcff=nopat+da-capex-wc;
  const expected=[sales,margin*100,ebit,nopat,da,capex,wc,fcff];
  rows.forEach((r,i)=>near(number(r[j+1]),expected[i]));
 }
 const v=pv();near(v.profit,60);near(v.cash,45);near(v.operating,750);near(v.share,68);
 near(38-28+5,60*.03/.12);near(500+15,515);
 const weights=[.25,.5,.25],scenarios=[{sales:480,margin:.14,r:.10},{},{sales:520,margin:.18,r:.14}].map(pv);
 const table=section('scenarios').blocks.find(b=>b.kind==='table').rows;
 table.forEach((r,i)=>{near(number(r[4]),scenarios[i].profit);near(number(r[5]),scenarios[i].cash,.000051);near(number(r[6]),scenarios[i].share,.000051);near(number(r[7])/100,weights[i]);});
 const weighted=scenarios.reduce((sum,v,i)=>sum+weights[i]*v.share,0);near(weighted,68.18214285714286);
 assert.ok(Math.abs(weighted-pv().share)>.18,'weighted values are not the valuation of weighted average inputs');
});

test('one-input comparisons and joint analyst revisions have coherent bases and order-dependent partial contributions',()=>{
 const rows=section('single').blocks.find(b=>b.kind==='table').rows,inputs=[{},{sales:480},{margin:.14},{r:.10},{k:.10}];
 rows.forEach((r,i)=>{const v=pv(inputs[i]).share;near(number(r[1]),v,.000051);near(number(r[2]),v-68,.000051);});
 const joint=example('joint').steps.find(b=>b.kind==='table').rows,path=[{},{sales:480},{sales:480,margin:.14},{sales:480,margin:.14,r:.10},{sales:480,margin:.14,r:.10,k:.10}].map(x=>pv(x).share);
 joint.forEach((r,i)=>{near(number(r[1]),path[i]);if(i)near(number(r[2]),path[i]-path[i-1]);});
 near(path.at(-1),43.4);near(path.at(-1)-path[0],-24.6);
 const reverseOrder=[{},{k:.10},{k:.10,r:.10},{k:.10,r:.10,margin:.14},{k:.10,r:.10,margin:.14,sales:480}].map(x=>pv(x).share);
 near(reverseOrder.at(-1),path.at(-1));assert.ok(Math.abs(reverseOrder[1]-reverseOrder[0]-(path[1]-path[0]))>1);
 const isolatedSum=68+inputs.slice(1).reduce((sum,x)=>sum+pv(x).share-68,0);
 assert.ok(Math.abs(isolatedSum-path.at(-1))>1,'independent base sensitivities do not reproduce the joint scenario');
});

test('all 133 report figure points agree with independently summed values and their stated plotting domains',()=>{
 const figures=unit.sections.flatMap(s=>s.blocks.filter(b=>b.kind==='figure'));assert.equal(figures.length,3);let count=0;
 for(const f of figures)for(const [i,s]of f.plot.series.entries())for(const [x,y]of s.points){
  count++;assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]);assert.ok(y>=f.plot.y[0]&&y<=f.plot.y[1]);
  if(f.id.endsWith('margin-value'))near(y,i?50:pv({margin:x/100}).share,1e-8);
  else if(f.id.endsWith('discount-value'))near(y,pv({k:x/100}).share,1e-8);
  else if(f.id.endsWith('investment-value'))near(y,pv({r:x/100}).share,1e-8);
  else assert.fail('unchecked report figure '+f.id);
 }
 assert.equal(count,133);
 near(pv({margin:.1216}).share,50);near(pv({k:.03+45/570}).share,50);
 const noGrowth=(60/.09-70)/10;near(noGrowth,59.66666666666667);near(pv({r:.09}).share,noGrowth);
 assert.ok(pv({r:.08}).share<noGrowth);assert.ok(pv({r:.12}).share>noGrowth);
});

test('financing comparisons include proceeds, new claims and transfers instead of treating cash as free value',()=>{
 const oldShares=10,oldValue=680,newShares=2,issuePrice=50;
 const equityAfter=oldValue+newShares*issuePrice,valueAfter=equityAfter/(oldShares+newShares);
 near(equityAfter,780);near(valueAfter,65);
 near(oldShares*(oldValue/oldShares-valueAfter),30);
 near(newShares*(valueAfter-issuePrice),30);
 near((oldValue+newShares*68)/(oldShares+newShares),68);
 near((oldValue+100)/(oldShares+100/68),68);
 near(750+(30+100)-(100+100),oldValue);
 assert.notEqual(680/12,valueAfter);assert.notEqual(780/10,valueAfter);
});

test('dated values, targets, return numerators and internal mandate capacity remain distinct',()=>{
 const future=60*1.1-3;near(future,63);near((future+3)/1.1,60);
 const rows=example('horizon').steps.find(b=>b.kind==='table').rows;
 rows.forEach(r=>near(number(r[3]),(number(r[1])+number(r[2])-number(r[0]))/number(r[0])*100,.000051));
 near((68-50)/50,.36);near((68-50)/68,.2647058823529412);
 near((.03*100-2.8)*1e6/50,4000);
 const q=data.questions.find(q=>q.id==='rr-10'),numbers=q.options[q.correct].text.match(/\d+\.\d+/g).map(Number);
 near(numbers[0],100*(80-60)/60,.0051);near(numbers[1],100*(80-60)/80,.0051);
});

test('research dictionary separates valuation sensitivity from classifier recall and preserves established definitions',()=>{
 const g=require('../finance-glossary.cjs'),find=t=>g.find(g=>[g.term,...g.aliases].includes(t));
 for(const [term,target]of [['Equity Research Report','blueprint'],['Sell-Side-Research','sell-side'],['Buy-Side-Research','buy-side'],['Investment Memorandum','buy-side'],['Investment Committee','buy-side'],['Initiation Report','audience'],['Investment Thesis','thesis'],['Variant Perception','thesis'],['Price Target Horizon','horizon'],['Information Cutoff','sources'],['Assumption Bridge','joint'],['Valuation Range','sensitivity'],['Valuation Sensitivity','sensitivity'],['Scenario Analysis','scenarios'],['Scenario Weight','scenarios'],['Investment Recommendation','recommendation'],['Conditional Model Value','case']])assert.deepEqual(find(term).cfa,{unit:'research',section:target});
 assert.deepEqual(find('Sensitivität').cfa,{unit:'data-science',section:'classification'});
 assert.deepEqual(find('Sensitivity Analysis').cfa,{unit:'forecasting',section:'scenarios'});
 const context=find('Valuation Sensitivity').contextualAliases;
 assert.equal(context[0].label,'Sensitivität');for(const id of ['research','company','valuation-model','standard-v','ratios','simulation'])assert.ok(context[0].units.includes(id));
 assert.equal(context[0].legacyFinance,true);assert.deepEqual(context[0].exceptLessons,['quant-06','quant-14']);
 assert.deepEqual(find('Kursziel').cfa,{unit:'valuation-overview',section:'gap'});
 assert.deepEqual(find('Catalyst').cfa,{unit:'valuation-overview',section:'uncertainty'});
 assert.deepEqual(find('Reverse DCF').cfa,{unit:'valuation-model',section:'reverse'});
 for(const id of ['company','industry','multiples','valuation-overview','valuation-model','standard-v'])assert.ok(data.units.find(u=>u.id===id).related.some(r=>r.unit==='research'));
});
