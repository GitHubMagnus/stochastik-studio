const {test}=require('node:test'),assert=require('node:assert/strict');
const M=require('../finance-models.cjs'),unit=require('../finance-cfa/units/valuation-model.cjs');
const defaults=()=>Object.fromEntries(M.models.forecastvalue.controls.map(f=>[f.key,f.value]));
const near=(a,b,tol=1e-8)=>assert.ok(Math.abs(a-b)<tol,a+' != '+b);
const number=x=>Number(String(x).replace(',','.'));
const section=id=>unit.sections.find(s=>s.id===id);

test('Nordlicht ledgers reconcile with customer, supplier, tax and owner cash independently',()=>{
 const v=M.forecastValue(defaults());
 let ar=50,inv=80,ap=30,ppe=250,book=350;
 for(const y of v.years){
  const cashCosts=y.sales-y.ebit-y.depreciation+(y.inventory-inv)-(y.ap-ap);
  const cashCustomers=y.sales-(y.ar-ar),tax=y.ebit*.25;
  near(cashCustomers-cashCosts-tax,y.cfo);
  near(y.ppe,ppe+y.capex-y.depreciation);
  near(y.fcff,cashCustomers-cashCosts-tax-y.capex);
  near(0+y.ar+y.inventory+y.ppe,y.ap+y.book);
  near(y.book,book+y.nopat-y.dividend+y.contribution);
  near(y.fcff,y.dividend-y.contribution);
  [ar,inv,ap,ppe,book]=[y.ar,y.inventory,y.ap,y.ppe,y.book];
 }
 const rows=section('case-forecast').blocks.find(b=>b.kind==='table').rows;
 const expected=['sales','ebit','nopat','depreciation','capex','ppe','nwc','investment'];
 rows.forEach((row,i)=>v.years.forEach((y,j)=>near(number(row[j+1]),y[expected[i]])));
 const balance=section('balance-check').blocks.find(b=>b.kind==='table').rows;
 const values=y=>[y.ar,y.inventory,y.ppe,y.ar+y.inventory+y.ppe,y.ap,y.book];
 balance.forEach((row,i)=>v.years.forEach((y,j)=>near(number(row[j+1]),values(y)[i])));
});

test('stable growth investment reconciles old capital, later profits and end-year asset cash',()=>{
 const v=M.forecastValue(defaults()),last=v.years.at(-1);
 near(v.stableNOPAT/last.book,.1545);
 near(v.stableInvestment,16.10104755);near(v.stableFCFF,48.30314265);
 const changeWC=.2*(613.37324-595.508),changePPE=16.10104755-changeWC,dep=.12*297.754;
 near(changeWC,3.573048);near(changePPE,12.52799955);near(dep+changePPE,48.25847955);
 near(v.stableNOPAT+dep-changeWC-(dep+changePPE),v.stableFCFF);
 let capital=last.book,nopat=v.stableNOPAT;
 for(let h=0;h<30;h++){
  const investment=nopat*.03/.12,nextProfit=nopat*1.03;
  near((nextProfit-nopat)/investment,.12);
  capital+=investment;
  near(capital,last.book+v.stableNOPAT/.12*(1.03**(h+1)-1),1e-6);
  nopat=nextProfit;
 }
 assert.ok(Math.abs(nopat/capital-.12)<Math.abs(v.stableNOPAT/last.book-.12));
 assert.notEqual(v.stableFCFF,last.fcff*1.03,'a changed margin and investment basis require normalization');
});

test('dividend payments and residual income reproduce the same post-special-payout equity value',()=>{
 const v=M.forecastValue(defaults()),div=[50.55,53.583,56.79798];
 let dividendPV=0,riPV=350,book=350;
 for(let t=1;t<=3;t++){
  dividendPV+=div[t-1]/1.09**t;
  const profit=[71.55,75.843,80.39358][t-1];
  riPV+=(profit-.09*book)/1.09**t;book+=profit-div[t-1];
 }
 // Sum 1,000 actual future stable dividends as an independent convergent series.
 for(let t=4;t<=1003;t++)dividendPV+=48.30314265*1.03**(t-4)/1.09**t;
 riPV+=(805.0523775-book)/1.09**3;
 near(dividendPV,756.9824942144152,1e-7);near(riPV,dividendPV,1e-7);
 near(v.operating,dividendPV,1e-7);near(v.common,v.operating+30);
 near(v.share,(dividendPV+30)/10);
 const incorrect=(50.55/1.09+53.583/1.09**2+56.79798/1.09**3+56.79798*1.03/.06/1.09**3+30)/10;
 near(incorrect,91.82379429340963);assert.ok(incorrect>v.share+13);
});

test('margins, growth and working capital show economically different cash consequences',()=>{
 const p=defaults(),zero=M.forecastValue({...p,growth:0}),high=M.forecastValue({...p,growth:15});
 near(zero.years[0].fcff,67.5);near(high.years[0].fcff,25.125);
 assert.ok(high.years[0].nopat>zero.years[0].nopat);
 assert.ok(high.share>zero.share,'later scale can add value despite lower first cash');
 const stressed=M.forecastValue({...p,growth:15,margin:8,wc:35});
 near(stressed.years[0].fcff,-104.25);near(stressed.years[0].dividend,0);
 near(stressed.years[0].contribution,104.25);
 near(stressed.years[0].book,350+34.5+104.25);
 near(stressed.years[0].ar+stressed.years[0].inventory+stressed.years[0].ppe,stressed.years[0].ap+stressed.years[0].book);
 const changingWC=M.forecastValue({...p,wc:25});
 near(changingWC.years[0].investment,32.5);
 near(changingWC.years[0].fcff,50.55-26.5);
 assert.ok(M.forecastValue({...p,stableMargin:18}).share>M.forecastValue(p).share);
});

test('all forecast control corners preserve ledgers, finite charts and the selected marker',()=>{
 const controls=M.models.forecastvalue.controls;
 let valid=0,invalid=0;
 for(let mask=0;mask<2**controls.length;mask++){
  const p=Object.fromEntries(controls.map((f,i)=>[f.key,mask&(1<<i)?f.max:f.min]));
  if(p.stableGrowth>=p.discount){assert.throws(()=>M.calculate('forecastvalue',p),/Wachstum.*Diskontsatz/);invalid++;continue;}
  const r=M.calculate('forecastvalue',p),v=M.forecastValue(p);
  r.points.forEach(x=>x.forEach(n=>assert.ok(Number.isFinite(n))));
  near(r.marker[0],p.stableGrowth);near(r.marker[1],v.share);
  assert.ok(r.marker[0]<=r.points.at(-1)[0]);
  for(const y of v.years){
   near(y.book,y.ppe+y.nwc,1e-6);near(y.fcff,y.nopat-(y.ppe-(y.year===1?.5*p.sales:v.years[y.year-2].ppe))-y.investment,1e-6);
   assert.ok(y.capex>=0);near(y.dividend-y.contribution,y.fcff,1e-6);
  }
  assert.equal(r.projection.rows.length,3);assert.equal(r.stable.rows.length,1);valid++;
 }
 assert.equal(valid+invalid,256);assert.ok(invalid>0);
 assert.throws(()=>M.forecastValue({...defaults(),roic:3,stableGrowth:3}),/Rendite neuer Investitionen/);
});

test('every plotted point and sensitivity table uses its explicitly stated economic comparison',()=>{
 for(const s of unit.sections)for(const b of s.blocks.filter(b=>b.kind==='figure'))for(const line of b.plot.series)for(const [x,y]of line.points){
  assert.ok(x>=b.plot.x[0]-1e-9&&x<=b.plot.x[1]+1e-9,b.id+' x axis');
  assert.ok(y>=b.plot.y[0]-1e-9&&y<=b.plot.y[1]+1e-9,b.id+' y axis');
 }
 const figure=section('investment-growth').blocks.find(b=>b.kind==='figure');
 for(const [i,s]of figure.plot.series.entries())for(const [x,y]of s.points){
  const profit=500*(1+x/100)*.18*.75,investment=350*x/100;
  near(y,i===0?profit:profit-investment);
 }
 const stable=section('sensitivity').blocks.filter(b=>b.kind==='figure');
 for(const [i,s]of stable[0].plot.series.entries())for(const [x,y]of s.points){
  const r=[.06,.09,.15][i],g=x/100,cash=64.4041902-64.4041902*g/r;
  const detail=[50.55,53.583,56.79798].reduce((sum,c,t)=>sum+c/1.09**(t+1),0);
  near(y,(detail+cash/(.09-g)/1.09**3+30)/10);
 }
 for(const [x,y]of stable[1].plot.series[0].points)near(y,M.forecastValue({...defaults(),stableMargin:x}).share);
 const table=section('sensitivity').blocks.find(b=>b.kind==='table');
 for(const [i,row]of table.rows.entries())for(let j=1;j<4;j++)near(number(row[j]),M.forecastValue({...defaults(),discount:[7,9,11][i],stableGrowth:j}).share,.000051);
});

test('reverse DCF implied margin reproduces the conditional observed price',()=>{
 const v=M.forecastValue(defaults()),pv=[50.55,53.583,56.79798].reduce((s,c,i)=>s+c/1.09**(i+1),0);
 const neededTerminal=(80*10-30-pv)*1.09**3;
 const neededNOPAT=neededTerminal*.06/(1-.03/.12),margin=neededNOPAT/(613.37324*.75)*100;
 near(margin,14.293164359979796);
 near(M.forecastValue({...defaults(),stableMargin:margin}).share,80);
});
