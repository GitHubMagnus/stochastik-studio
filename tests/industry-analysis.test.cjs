const {test}=require('node:test'),assert=require('node:assert/strict');
const {compile}=require('../finance-cfa/compile.cjs'),data=compile(),unit=data.units.find(u=>u.id==='industry');
const section=id=>unit.sections.find(s=>s.id===id);
const number=s=>Number(String(s).replaceAll('.','').replace(',','.').replace('−','-').replace(' %',''));
const near=(a,b,tol=1e-9)=>assert.ok(Math.abs(a-b)<tol,a+' differs from '+b);
const table=(id,index=0)=>section(id).blocks.filter(b=>b.kind==='table')[index];

test('industry analysis connects the four 2027 objectives to independent training without claiming release',()=>{
 const coverage=data.coverage.find(c=>c.id===unit.id),bank=data.questions.filter(q=>q.unit===unit.id);
 assert.equal(unit.sections.length,28);assert.equal(unit.review.status,'draft');assert.equal(data.release,false);
 assert.deepEqual(coverage.objectives.map(o=>o.id),['industry-a','industry-b','industry-c','industry-d']);
 assert.equal(bank.filter(q=>q.pool==='practice').length,48);
 for(const o of coverage.objectives){assert.ok(o.sections.length);assert.ok(o.practice.length>=9);assert.ok(o.mockQuestions>=1);}
 const required={a:['workflow','data'],b:['taxonomies','grouping','segments'],c:['size','growth','shares','profitability'],d:['five-forces','pestle','entry','buyers','suppliers','substitutes']};
 for(const o of coverage.objectives)for(const id of required[o.id.at(-1)])assert.ok(o.sections.includes(id),o.id+' lacks '+id);
 for(const id of ['potential','shares','profitability','concentration','entry','substitutes','interactions','integrated'])assert.equal(section(id).objectives.includes('b'),false,'classification tags are not added to adjacent financial applications');
 for(const pool of ['mock-a','mock-b']){
  assert.equal(bank.filter(q=>q.pool===pool).length,2);
  assert.ok(data.inventory[pool].equity<=require('../finance-cfa/engine.cjs').blueprint.equity);
 }
 const forms=[];function walk(bs){for(const b of bs)if(typeof b!=='string'){if(b.kind==='formula')forms.push(b);if(b.steps)walk(b.steps);}}
 unit.sections.forEach(s=>walk(s.blocks));
 assert.ok(forms.length>=47);
 assert.ok(forms.every(f=>f.reading&&f.symbols.length&&f.mathml.includes('<math')));
 assert.equal(forms.some(f=>f.tex.includes('Signal')||f.tex.includes('Mechanism')),false,'causal prose is not a mathematical word equation');
 assert.match(unit.sources[0].url,/2027levelitopicoutline_online\.pdf#page=17$/);
});

test('market shares, industry margins and concentration reconcile to the same complete Nordmarkt sample',()=>{
 const rows=table('shares').rows.slice(0,5);
 const revenue0=rows.map(r=>number(r[1])),revenue1=rows.map(r=>number(r[3]));
 near(revenue0.reduce((a,b)=>a+b),1000);near(revenue1.reduce((a,b)=>a+b),1100);
 rows.forEach((r,i)=>{near(number(r[2]),revenue0[i]/10);near(number(r[4]),revenue1[i]/11);});
 near((revenue1[0]/revenue0[0]-1)*100,21);
 assert.ok(revenue1[1]>revenue0[1]);assert.ok(number(rows[1][4])<number(rows[1][2]));
 near(Math.log(revenue1[0]/revenue0[0]),Math.log(1.1)+Math.log(22/20));
 const profit=table('profitability').rows;
 const ebit0=profit.map(r=>number(r[3])),ebit1=profit.map(r=>number(r[6]));
 profit.forEach(r=>{near(number(r[3]),number(r[1])*number(r[2])/100);near(number(r[6]),number(r[4])*number(r[5])/100);});
 near(ebit0.reduce((a,b)=>a+b)/10,6.2);near(ebit1.reduce((a,b)=>a+b)/11,6.56);
 near(profit.reduce((s,r)=>s+number(r[2]),0)/5,5.2);
 near(ebit0.slice(0,4).reduce((a,b)=>a+b)/900*100,7.111111111111111);
 near(rows.reduce((s,r)=>s+number(r[2])**2,0),2250);
 near(rows.reduce((s,r)=>s+number(r[4])**2,0),2184);
 near(rows.map(r=>number(r[2])).sort((a,b)=>b-a).slice(0,4).reduce((a,b)=>a+b),90);
 near(rows.map(r=>number(r[4])).sort((a,b)=>b-a).slice(0,4).reduce((a,b)=>a+b),88);
 assert.ok(5**2+5**2<10**2,'a combined positive rest group overstates its true HHI contribution');
});

test('industry diagrams obey their axes and independently verified economic relationships',()=>{
 const figures=unit.sections.flatMap(s=>s.blocks.filter(b=>b.kind==='figure'));
 assert.equal(figures.length,4);
 for(const f of figures)for(const s of f.plot.series)for(const [x,y]of s.points){
  assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1],f.id);
  assert.ok(y>=f.plot.y[0]&&y<=f.plot.y[1],f.id);
 }
 const share=section('share-limits').blocks.find(b=>b.kind==='figure').plot.series;
 for(const [t,pct]of share[0].points){
  const firmRevenue=200*1.21**t,marketRevenue=1000*1.10**t;
  near(pct,100*firmRevenue/marketRevenue);
 }
 const bound=Math.log(5)/Math.log(1.1);near(bound,16.886317030755073);
 assert.ok(share[0].points.at(-1)[1]>100);assert.match(section('share-limits').blocks.find(b=>b.kind==='figure').caption,/unzulässige/);
 share[1].points.forEach(p=>near(p[1],100));
 const diffusion=section('lifecycle').blocks.find(b=>b.kind==='figure').plot.series[0].points;
 let previous=-Infinity;
 for(const [t,pct]of diffusion){near(Math.log(pct/(100-pct)),.8*(t-6));assert.ok(pct>previous);previous=pct;}
 near(diffusion.find(p=>p[0]===6)[1],50);
 for(const [i,s]of section('rivalry').blocks.find(b=>b.kind==='figure').plot.series.entries()){
  const price=i?95:100;for(const [quantity,profit]of s.points)near(profit,price*quantity-60*quantity-60);
 }
 // Independent PV of explicit investment and cash-flow sequences, not the chart's value helper.
 for(const [i,s]of section('integrated').blocks.find(b=>b.kind==='figure').plot.series.entries()){
  const capitalRatio=i?.8:.5;
  for(const [margin,published]of s.points){
   let capital=242*capitalRatio,pv=0;
   for(let t=1;t<=1000;t++){
    const sales=242*1.03**(t-1),profit=sales*margin/100*.75,nextCapital=capital*1.03;
    pv+=(profit-(nextCapital-capital))/1.09**t;capital=nextCapital;
   }
   near(published,pv,1e-8);
  }
 }
});

test('price competition, pass-through and buyer payment terms explain profit and cash separately',()=>{
 const rows=section('suppliers').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 for(const r of rows){
  const price=number(r[1]),volume=number(r[2]),profit=price*volume-64*volume-60;
  near(number(r[3]),profit);near(number(r[4]),100*profit/(price*volume),.000051);
 }
 near((100-60)*2-60,20);near((95-60)*2-60,10);
 const target=(20+60)/(95-60);near(target,2.2857142857142856);near((95-60)*target-60,20);
 near((95-60)*2.4-60,24);
 const oldReceivables=100*30/365,newReceivables=100*60/365;
 near(newReceivables-oldReceivables,8.219178082191782);
 assert.equal(newReceivables-newReceivables,0,'the same unchanged additional stock does not require another annual increment');
 const cashSavings=[25000,25000,25000,25000];near(cashSavings.reduce((pv,c,i)=>pv+c/1.08**(i+1),-80000),2803.171001108294);
});

test('stable industry value cases reconcile margins, capital stocks, reinvestment and the sign of growth value',()=>{
 const rows=section('integrated').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 for(const r of rows){
  const margin=number(r[1])/100,ratio=number(r[2]),opening=ratio*242,profit=margin*242*.75,investment=opening*.03,cash=profit-investment;
  near(number(r[3]),profit);near(number(r[4]),profit/opening*100);near(number(r[5]),investment);near(number(r[6]),cash);
  let pv=0;for(let t=1;t<=1000;t++)pv+=cash*1.03**(t-1)/1.09**t;
  near(number(r[7]),pv);
  if(profit/opening>.09)assert.ok(pv>profit/.09);else assert.ok(pv<profit/.09);
 }
 const marginValue=100*120/(1000*100);near(marginValue,.12);near(100/1000,.10);
 // Same NOPAT but different beginning capital produces different ROIC, not just different sales.
 near(21.78/121,.18);near(21.78/193.6,.1125);near(242*.08*.75/193.6,.075);
});

test('industry terminology resolves to precise new sections without replacing established concentration definitions',()=>{
 const glossary=require('../finance-glossary.cjs'),find=t=>glossary.find(g=>[g.term,...g.aliases].includes(t));
 for(const [term,target]of [['Industry Analysis','workflow'],['Market Definition','boundaries'],['GICS','taxonomies'],['ICB','taxonomies'],['NAICS','taxonomies'],['Statistical Unit','data'],['Market Size','size'],['Market Share','shares'],['Revenue Share','shares'],['Volume Share','shares'],['TAM','potential'],['SAM','potential'],['SOM','potential'],['CAGR','growth'],['Organic Growth','growth'],['Constant Currency','growth'],['Installed Base','cycle'],['Industry Life Cycle','lifecycle'],['Logistic Diffusion','lifecycle'],['Industry Profit Margin','profitability'],['Industry ROIC','capital'],['Five Forces','five-forces'],['Rivalität','rivalry'],['Barriers to Entry','entry'],['Buyer Power','buyers'],['Supplier Power','suppliers'],['Substitute','substitutes'],['PESTLE','pestle'],['Growth Outperformance','share-limits']]){
  assert.deepEqual(find(term).cfa,{unit:'industry',section:target});
  assert.equal(glossary.filter(g=>[g.term,...g.aliases].includes(term)).length,1,term);
 }
 assert.deepEqual(find('HHI').cfa,{unit:'market-structures',section:'concentration'});
 assert.deepEqual(find('Price Premium').cfa,{unit:'industry',section:'shares'});
 assert.deepEqual(find('Substitution').cfa,{unit:'industry',section:'substitutes'});
 assert.deepEqual(find('CR4').cfa,{unit:'market-structures',section:'concentration'});
 for(const id of ['market-structures','business-models','forecasting','multiples','valuation-model'])assert.ok(data.units.find(u=>u.id===id).related.some(r=>r.unit==='industry'));
});
