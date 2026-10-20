const {test}=require('node:test'),assert=require('node:assert/strict');
const data=require('../finance-cfa/compile.cjs').compile(),u=data.units.find(x=>x.id==='bond-prices');
const near=(a,b,t=1e-6)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b);
const price=(c,y,n,m=1)=>{const i=y/m,C=100*c/m;return i===0?C*n+100:C*(-Math.expm1(-n*Math.log1p(i)))/i+100*Math.exp(-n*Math.log1p(i));};
const full=(c,y,n,m,w)=>price(c,y,n,m)*(1+y/m)**(1-w);
const sec=id=>u.sections.find(s=>s.id===id),number=s=>Number(String(s).replaceAll('.','').replace(',','.').replace('−','-').match(/-?\d+(?:\.\d+)?/)?.[0]);
test('bond prices address all three actual objectives with disjoint original practice and two cases in each reserved pool',()=>{
 assert.equal(u.sections.length,30);assert.equal(u.review.status,'draft');assert.equal(data.release,false);
 const qs=data.questions.filter(q=>q.unit===u.id);assert.equal(qs.length,54);assert.equal(qs.filter(q=>q.pool==='practice').length,50);
 for(const p of ['mock-a','mock-b']){assert.equal(qs.filter(q=>q.pool===p).length,2);assert.ok(data.inventory[p].bonds<=require('../finance-cfa/engine.cjs').blueprint.bonds);}
 for(const o of data.coverage.find(x=>x.id===u.id).objectives){assert.ok(o.sections.length>=7);assert.ok(o.practice.length>=8);assert.ok(o.mockQuestions>=2);}
 assert.equal(require('../finance-content/bonds.cjs')[2].lab,'repayment');assert.equal(require('../finance-content/bonds.cjs')[4].lab,'bond');assert.equal(Object.keys(require('../finance-models.cjs').models).length,47);
});
test('all 672 plotted values agree with closed-form cash-flow references, matching units and stated assumptions',()=>{
 let count=0;for(const f of u.sections.flatMap(s=>s.blocks).filter(b=>b.kind==='figure'))for(const[i,s]of f.plot.series.entries())for(const[k,[x,y]]of s.points.entries()){
  count++;assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]);assert.ok(y>=f.plot.y[0]&&y<=f.plot.y[1]);
  if(f.id.endsWith('bond-price-yield'))near(y,price([.02,.05,.08][i],x/100,3),1e-9);
  else if(f.id.endsWith('bond-relative-shock')){const o=[{c:.02,n:2},{c:.02,n:10},{c:.08,n:2},{c:.08,n:10}][i];near(y,100*(price(o.c,x/100,o.n)/price(o.c,.04,o.n)-1),1e-9);}
  else if(f.id.endsWith('bond-matrix-yield'))near(y,4+1.2*(x-2)/4,1e-10);
  else if(f.id.endsWith('bond-clean-full-path')){let expected=price(.06,.08,6,2)*1.04**x;if(i)expected-=3*x;else if(k===101)expected-=3;near(y,expected,1e-9);}
  else assert.fail(f.id);
 }assert.equal(count,672);
 const series=sec('coupon-jump').blocks.find(b=>b.kind==='figure').plot.series;
 near(series[0].points[100][1]-series[0].points[101][1],3,1e-10);near(series[1].points[100][1],series[1].points[101][1],1e-10);
});
test('printed ledgers, matched sensitivity and maturity-limit tables reconcile independently',()=>{
 const ledger=sec('ledger').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 for(const row of ledger){const[k,c,n,cf,pv]=row.map(number);near(c+n,cf);near(pv,cf/1.07**k);}
 const rows=sec('sensitivity').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 for(const row of rows){const[n,c,p0,p1,change]=row.map(number);near(p0,price(c/100,.04,n));near(p1,price(c/100,.05,n));near(change,100*(p1/p0-1),2e-6);}
 const extreme=sec('maturity-limit').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 for(const row of extreme){const[n,p0,p1,change]=row.map(number);near(p0,price(.01,.2,n));near(p1,price(.01,.21,n));near(change,100*(price(.01,.21,n)/price(.01,.2,n)-1));}
 assert.ok(Math.abs(number(extreme[1][3]))<Math.abs(number(extreme[0][3])));
});
test('full, clean, cash settlement and paid-coupon values use the same entitlements without double accrual',()=>{
 const p=full(.06,.08,6,2,.4);near(p,97.01419002584747,1e-10);near(p-3*.6,95.21419002584747,1e-10);near(p*500000/100,485070.9501292373,1e-6);
 let direct=0;for(let k=0;k<6;k++)direct+=(3+(k===5?100:0))/1.04**(k+.4);near(p,direct,1e-10);
 const before=price(.06,.08,6,2)*1.04;near(before-3,price(.06,.08,5,2),1e-10);
 const wealth=100+5+5*1.05+5*1.05**2;near(wealth,115.7625);near((wealth/100)**(1/3)-1,.05,1e-12);near((1.15**(1/3)-1)*100,4.768955317164725,1e-10);
});
test('original numerical practice and novel reserved cases have independently calculated correct answers',()=>{
 const refs={'01':[105,0],'02':[3,0],'03':[4,0],'04':[6,0],'05':[price(.05,.07,3),.0001],'07':[100/1.05,.0001],'08':[118,0],'10':[price(.05,.03,3),.0001],'15':[115.7625,1e-8],'16':[(1.15**(1/3)-1)*100,.0001],'17':[price(.06,.08,6,2),.0001],'18':[.4,0],'19':[1.8,1e-10],'20':[full(.06,.08,6,2,.4),.0001],'21':[full(.06,.08,6,2,.4)-1.8,.000001],'22':[full(.06,.08,6,2,.4)*5000,.01],'25':[98.5482-3,.000001],'34':[100*(price(.02,.05,2)/price(.02,.04,2)-1),.0001],'35':[100*(price(.02,.05,10)/price(.02,.04,10)-1),.0001],'36':[100*(1-price(.08,.05,10)/price(.08,.04,10)),.0001],'41':[.5,0],'42':[4.6,1e-10],'43':[price(.045,.046,4),.0001],'a1':[full(.04,.06,4,2,5/6)-2/6,.0001],'a2':[price(.05,.046,5),.0001],'b1':[full(.04,.03,3,1,.75)-1,.0001],'b2':[price(.035,.048,5),.0001]};
 for(const[id,[expected,t]]of Object.entries(refs)){const q=data.questions.find(q=>q.id==='bpr-'+id);const value=Number(q.options[q.correct].text.replaceAll(',','').match(/[-−]?\d+(?:\.\d+)?/)?.[0]?.replace('−','-'));near(value,expected,t);}
});
test('existing interactive bond model agrees with this chapter at coupon dates and preserves other model uses',()=>{
 const {calculate}=require('../finance-models.cjs');
 for(const c of [0,2,6])for(const y of [0,4,8])for(const m of [1,2]){const out=calculate('bond',{c,y,n:3,m,shock:0,position:1000000});near(out.metrics[0][1],price(c/100,y/100,3*m,m),1e-9);}
 assert.deepEqual(u.explorations,[{section:'calculator',lesson:'bonds-05',focus:'lab',label:'Kupon, Laufzeit, Frequenz und Yield am vollständigen Barwertmodell vergleichen'}]);
 assert.match(sec('calculator').blocks.join(' '),/keinen tatsächlichen Kalender/);
});
test('matrix and pull-to-par tables use target cash flows and disclose the uncertainty and coupon-date boundaries',()=>{
 near(price(.045,.046,4),99.64208522541867,1e-10);
 const rows=sec('matrix-band').blocks.find(b=>b.kind==='table').rows;for(const row of rows)near(number(row[1]),price(.045,number(row[0])/100,4));
 const pull=sec('pull-par').blocks.find(b=>b.kind==='table').rows;for(const row of pull.slice(0,3)){const n=number(row[0]);near(number(row[1]),price(.02,.04,n));near(number(row[2]),price(.06,.04,n));}
 assert.match(sec('matrix-band').blocks.find(b=>b.kind==='table').caption,/kein statistisches Konfidenzintervall/);assert.match(sec('pull-par').blocks.join(' '),/letzten zwei oder sechs Kupon/);
});
test('pricing vocabulary has precise section links and protects established full and clean price defaults',()=>{
 const gl=require('../finance-glossary.cjs'),find=w=>gl.find(g=>[g.term,...g.aliases].some(a=>a.toLowerCase()===w.toLowerCase()));
 for(const[w,section]of [['YTM','yield'],['Bond Periodic Yield','units'],['Coupon Frequency','units'],['Nominal Annual YTM','units'],['Bond Present Value','discount'],['Coupon Entitlement','claim'],['Day-Count Convention','day-count'],['Ex-Coupon','day-count'],['Stub Period','day-count'],['Discount Bond','par'],['Premium Bond','par'],['Pull to Par','pull-par'],['Matrix Pricing','matrix-process'],['Yield Interpolation','interpolation'],['Matrix Valuation Range','matrix-band'],['Terminal-Wealth Return','realized'],['Comparable Bond','matrix-peers'],['Fractional-Period Discounting','settlement']])assert.deepEqual(find(w)?.cfa,{unit:u.id,section},w);
 assert.deepEqual(find('Convexity').cfa,{unit:'convexity',section:'definition'});
 assert.equal(find('Clean Price').cfa.unit,'bond-trading');assert.equal(find('Dirty Price').cfa.unit,'bond-trading');assert.equal(find('IRR').cfa.unit,'capital-allocation');assert.equal(find('Nullkuponanleihe').cfa.unit,'bond-cashflows');
 for(const id of ['bond-features','bond-cashflows','bond-trading','corporate-funding','government-funding'])assert.ok(data.units.find(x=>x.id===id).related.some(r=>r.unit===u.id));
});
