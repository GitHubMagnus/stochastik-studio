const {test}=require('node:test'),assert=require('node:assert/strict');
const data=require('../finance-cfa/compile.cjs').compile(),unit=data.units.find(u=>u.id==='company'),M=require('../finance-models.cjs');
const near=(a,b,tol=1e-9)=>assert.ok(Math.abs(a-b)<tol,a+' differs from '+b);
const number=s=>Number(String(s).replaceAll('.','').replace(',','.').replace('−','-').replace(' %',''));
const section=id=>unit.sections.find(s=>s.id===id);
const example=id=>section(id).blocks.find(b=>b.kind==='example');
const table=id=>example(id).steps.find(b=>b.kind==='table').rows;
const defaults=()=>Object.fromEntries(M.models.companydrivers.controls.map(c=>[c.key,c.value]));

test('company analysis covers its actual 2027 strategy, operating and capital objectives with original training',()=>{
 const coverage=data.coverage.find(c=>c.id===unit.id),qs=data.questions.filter(q=>q.unit===unit.id);
 assert.equal(unit.sections.length,32);assert.equal(unit.review.status,'draft');assert.equal(data.release,false);
 assert.equal(qs.filter(q=>q.pool==='practice').length,48);
 for(const pool of ['mock-a','mock-b'])assert.equal(qs.filter(q=>q.pool===pool).length,1);
 assert.deepEqual(coverage.objectives.map(o=>o.id),['company-a','company-b','company-c']);
 const required={a:['strategy','advantage','position'],b:['mix','elasticity','margins','operating-leverage'],c:['opening','price-capital','growth-funding','financial-leverage']};
 for(const o of coverage.objectives){for(const id of required[o.id.at(-1)])assert.ok(o.sections.includes(id));assert.ok(o.practice.length>=15);assert.ok(o.mockQuestions);}
 assert.deepEqual(unit.explorations,[{section:'price-capital',lesson:'equity-05',focus:'lab',label:'Kernwerk: Preis, Menge, Kapital und Finanzierung gemeinsam verändern'}]);
 assert.equal(require('../finance-content/equity.cjs')[4].lab,'companydrivers');
 for(const pool of ['mock-a','mock-b'])assert.ok(data.inventory[pool].equity<=require('../finance-cfa/engine.cjs').blueprint.equity);
 assert.match(unit.sources[0].url,/2027levelitopicoutline_online\.pdf#page=17$/);
});

test('revenue product tables and both bridge orders reconcile without turning mix into a pure price increase',()=>{
 const rows=table('mix').slice(0,2),oldSales=[],newSales=[];
 for(const r of rows){near(number(r[3]),number(r[1])*number(r[2]));near(number(r[6]),number(r[4])*number(r[5]));oldSales.push(number(r[3]));newSales.push(number(r[6]));near(number(r[5])/number(r[2]),1.05);}
 near(oldSales.reduce((a,b)=>a+b),140);near(newSales.reduce((a,b)=>a+b),178.5);
 const quantityFirst=rows.reduce((s,r)=>s+(number(r[4])-number(r[1]))*number(r[2]),0);
 const priceSecond=rows.reduce((s,r)=>s+number(r[4])*(number(r[5])-number(r[2])),0);
 const priceFirst=rows.reduce((s,r)=>s+number(r[1])*(number(r[5])-number(r[2])),0);
 const quantitySecond=rows.reduce((s,r)=>s+(number(r[4])-number(r[1]))*number(r[5]),0);
 near(quantityFirst,30);near(priceSecond,8.5);near(priceFirst,7);near(quantitySecond,31.5);
 near(quantityFirst+priceSecond,quantitySecond+priceFirst);
 const oldMean=140/1.2,newMean=178.5/1.4;
 assert.ok(newMean/oldMean>1.05);near((newMean/oldMean-1)*100,9.28571428571428);
 near((1.1*.92-1)*100,1.2);near((100-10-5+20)/100,1.05);
});

test('price elasticity, operating leverage and all plotted economic relationships have independent numerical checks',()=>{
 const figures=unit.sections.flatMap(s=>s.blocks.filter(b=>b.kind==='figure'));assert.equal(figures.length,4);
 let points=0;
 for(const f of figures)for(const s of f.plot.series)for(const [x,y]of s.points){points++;assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]);assert.ok(y>=f.plot.y[0]&&y<=f.plot.y[1]);}
 assert.equal(points,393);
 const priceFigure=section('price-case').blocks.find(b=>b.kind==='figure');
 for(const [i,series]of priceFigure.plot.series.entries())for(const [p,profit]of series.points){
  const e=i?-3:-1.5,q=2*Math.exp(e*Math.log(p/100));
  near(profit,p*q-60*q-60);
 }
 const P=110,e=-1.5,Q=2*(P/100)**e,h=.00001;
 const revenue=p=>p*2*(p/100)**e,profit=p=>(p-60)*2*(p/100)**e-60;
 near((revenue(P+h)-revenue(P-h))/(2*h),Q*(1+e),1e-8);
 near((profit(P+h)-profit(P-h))/(2*h),Q*(1+e*(1-60/P)),1e-8);
 assert.ok(revenue(P)<revenue(100));assert.ok(profit(P)>profit(100));
 for(const [i,series]of section('operating-leverage').blocks.find(b=>b.kind==='figure').plot.series.entries())for(const [q,p]of series.points){
  near(p,100*q-(i?80:60)*q-(i?20:60));
 }
 for(const [i,series]of section('financial-leverage').blocks.find(b=>b.kind==='figure').plot.series.entries())for(const [ebit,roe]of series.points){
  const debt=i?120:60,equity=180-20-debt,net=(ebit-debt*.05)*.75;
  near(roe,net/equity*100);
 }
 for(const [i,series]of section('cashflow').blocks.find(b=>b.kind==='figure').plot.series.entries())for(const [sales,cash]of series.points){
  const earnings=sales*.1*.75;near(cash,i?earnings+15-18-((i===1?.15:.25)*sales-30):earnings);
 }
 near(60/(100-60),1.5);near((2-1.5)/2,.25);near((100-60)*2/20,4);
 for(const [interest,drop,combined]of [[3,-47.05882352941176,80/17],[6,-57.14285714285714,80/14]]){
  const original=((100-60)*2-60-interest)*.75,after=((100-60)*1.8-60-interest)*.75;
  near((after/original-1)*100,drop);near((after/original-1)/(-.1),combined);
 }
});

test('Kernwerk price plan reconciles direct cash, tax, both claim cashflows and the published balance',()=>{
 const v=M.companyPlan(defaults());
 const cashCustomers=199.5-(19.95-20),cashParts=114+(28.5-30)-(19-20);
 const tax=(199.5-114-45-15-3)*.25;
 const cfo=cashCustomers-cashParts-45-3-tax,cashEnd=30+cfo-18-8;
 near(cashCustomers,199.55);near(cashParts,113.5);near(tax,5.625);near(cfo,32.425);near(cashEnd,36.425);
 near(v.cfo,cfo);near(v.cash,cashEnd);near(v.fcff,16.675);near(v.fcfe,14.425);
 near(v.fcff-v.fcfe,3-((25.5*.25)-tax));
 near(v.capital,132.45);near(v.capital-130,18-15+(19.95+28.5-19-30));
 const rows=table('balance'),expected=[v.cash,19.95,28.5,v.ppe,19,v.debt,v.book,v.assets];
 for(const [i,row]of rows.entries())near(number(row[i<4?1:2]),expected[i]);
 near(v.assets,v.liabilities);near(v.assets,187.875);near(v.book,100+16.875-8);
 const priceRows=table('price-case');near(number(priceRows[2][2]),v.sales);near(number(priceRows[3][2]),v.cost);near(number(priceRows[4][2]),v.ebit);near(number(priceRows[5][2]),v.ebit/v.sales*100,.000051);
});

test('Kernwerk growth needs additional funding despite profit and closes its full alternative balance',()=>{
 const p={...defaults(),price:100,quantity:2.4,fixed:60,capex:40,ar:35,inventory:50,payables:25,dividend:0},v=M.companyPlan(p);
 near(v.sales,240);near(v.ebit,21);near(v.nopat,15.75);near(v.netIncome,13.5);near(v.changeWC,30);
 near(v.fcff,-39.25);near(v.fcfe,-41.5);near(v.borrowing,21.5);near(v.cash,10);
 near(v.book,113.5);near(v.capital,185);near(v.debt,81.5);near(v.debt*.05,4.075);
 const rows=table('growth-funding'),expected=[v.cash,35,50,v.ppe,25,v.debt,v.book,v.assets];
 for(const [i,row]of rows.entries())near(number(row[i<4?1:2]),expected[i]);
 near(v.assets,v.liabilities);near(v.assets,220);near(v.ppe,125);
 assert.deepEqual(M.models.companydrivers.presets[1].values,p);
 near(M.calculate('companydrivers',M.models.companydrivers.presets[0].values).metrics[2][1],16.675);
 assert.ok(v.nopat>15&&v.fcff<0);
 const projection=section('integration').blocks.find(b=>b.kind==='table').rows;
 const price=M.companyPlan(defaults()),fields=['sales','ebit','nopat',null,'fcff','borrowing'];
 projection.forEach((r,i)=>{near(number(r[1]),fields[i]?price[fields[i]]:price.capital-130);near(number(r[2]),fields[i]?v[fields[i]]:v.capital-130);});
});

test('Kernwerk loss taxes, invalid trade ledgers and all 1024 input corners give coherent outcomes or explicit reasons',()=>{
 const p0=defaults(),loss=M.companyPlan({...p0,price:20});
 assert.ok(loss.ebit<0);near(loss.taxOperating,0);near(loss.taxEquity,0);
 near(loss.netIncome,loss.ebit-3);near(loss.fcff-loss.fcfe,3);assert.ok(loss.book<0);
 const partial=M.companyPlan({...p0,price:91,quantity:2});
 near(partial.ebit,2);near(partial.taxOperating,.5);near(partial.taxEquity,0);near(partial.netIncome,-1);
 near(partial.fcff-partial.fcfe,2.5);assert.notEqual(partial.fcff-partial.fcfe,3*.75,'the full interest tax benefit is unavailable when EBT is negative');
 assert.throws(()=>M.calculate('companydrivers',{...p0,price:20,ar:100}),/Endforderungen/);
 assert.throws(()=>M.calculate('companydrivers',{...p0,quantity:.5,variable:20,inventory:0,payables:0}),/negative Einkäufe/);
 assert.throws(()=>M.calculate('companydrivers',{...p0,quantity:.5,inventory:0,payables:100}),/End-Lieferantenverbindlichkeiten/);
 const clipped=M.calculate('companydrivers',{...p0,ar:100});near(clipped.points[0][0],80/1.9);
 let valid=0,invalid=0;
 const fields=M.models.companydrivers.controls;
 for(let mask=0;mask<2**fields.length;mask++){
  const p=Object.fromEntries(fields.map((f,i)=>[f.key,mask&(1<<i)?f.max:f.min]));
  const sales=p.price*p.quantity,cost=p.variable*p.quantity,purchases=cost+p.inventory-30;
  const isFeasible=(20+sales>=p.ar)&&(purchases>=0)&&(20+purchases>=p.payables);
  if(!isFeasible){assert.throws(()=>M.calculate('companydrivers',p),/Endforderungen|negative Einkäufe|End-Lieferantenverbindlichkeiten/);invalid++;continue;}
  const r=M.calculate('companydrivers',p),v=M.companyPlan(p);valid++;
  near(v.assets,v.liabilities);assert.ok(v.cash>=p.minimum-1e-9);
  near(v.cash,30+v.cfo-p.capex-p.dividend+v.borrowing);
  near(v.cfo,v.netIncome+15-(p.ar+p.inventory-p.payables-30));
  near(v.fcff-v.fcfe,3-v.taxOperating+v.taxEquity);
  near(r.marker[1],v.fcff);r.points.forEach(([price,value])=>near(value,M.companyPlan({...p,price}).fcff));
 }
 assert.equal(valid+invalid,1024);assert.ok(valid>100);assert.ok(invalid>100);
});

test('company dictionary returns preserve valuation safety margin and existing cashflow and product-mix definitions',()=>{
 const glossary=require('../finance-glossary.cjs'),find=t=>glossary.find(g=>[g.term,...g.aliases].includes(t));
 for(const [term,target]of [['Competitive Strategy','strategy'],['Competitive Position','position'],['Cost Leadership','strategy'],['Differentiation','strategy'],['Focus Strategy','strategy'],['Strategic Fit','strategy'],['Economic Moat','advantage'],['Pricing Power','pricing'],['Revenue Driver','revenue'],['Realized Net Price','revenue'],['Revenue Bridge','bridge'],['Arc Elasticity','elasticity'],['Gross Margin','margins'],['Normalized EBIT','normalization'],['Capacity Step','costs'],['DOL','operating-leverage'],['DFL','financial-leverage'],['Degree of Total Leverage','financial-leverage'],['MOS','breakeven'],['Maintenance Capex','investment'],['Growth Capex','investment'],['Liquidity Buffer','growth-funding'],['Funding Gap','growth-funding'],['Customer Concentration','contracts'],['Net Debt','financing'],['Book ROE','financial-leverage']])assert.deepEqual(find(term).cfa,{unit:'company',section:target});
 assert.deepEqual(find('Operativer Sicherheitsabstand').contextualAliases,[{label:'Margin of Safety',units:['company']}]);
 assert.deepEqual(find('Margin of Safety').cfa,{unit:'valuation-overview',section:'gap'});
 assert.deepEqual(find('Degree of Total Leverage').contextualAliases,[{label:'DTL',units:['company']}]);
 assert.deepEqual(find('DTL').cfa,{unit:'income-taxes',section:'signs'});
 assert.deepEqual(find('Produktmix').cfa,{unit:'forecasting',section:'sales-drivers'});
 assert.deepEqual(find('FCFE').cfa,{unit:'cashflow-analysis',section:'fcfe'});
 for(const term of ['DOL','DFL','Net Debt'])assert.equal(glossary.filter(g=>[g.term,...g.aliases].includes(term)).length,1);
 for(const id of ['industry','business-models','forecasting','working-capital','capital-structure','valuation-model'])assert.ok(data.units.find(u=>u.id===id).related.some(r=>r.unit==='company'));
});
