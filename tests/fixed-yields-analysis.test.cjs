const {test}=require('node:test'),assert=require('node:assert/strict');
const d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(x=>x.id==='fixed-yields');
const sec=id=>u.sections.find(s=>s.id===id),near=(a,b,t=1e-7)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b);
const german=s=>Number(String(s).replaceAll('.','').replace(',','.').replace('−','-').match(/-?\d+(?:\.\d+)?/)?.[0]);
const annual=(C,n,y,R=100)=>{const v=1/(1+y);return y===0?n*C+R:C*v*(1-v**n)/(1-v)+R*v**n;};
const curve=(coupon,z,s)=>[1,2,3].reduce((sum,t)=>sum+(coupon+(t===3?100:0))/(1+z[t-1]+s)**t,0);
test('fixed yields meet both actual objectives with fifty-two independent training questions and original disjoint reserved cases',()=>{
 assert.equal(u.sections.length,33);assert.equal(u.review.status,'draft');assert.equal(d.release,false);assert.ok(u.sources[0].url.endsWith('#page=20'));
 const q=d.questions.filter(q=>q.unit===u.id);assert.equal(q.filter(q=>q.pool==='practice').length,52);
 for(const pool of ['mock-a','mock-b']){assert.equal(q.filter(q=>q.pool===pool).length,1);assert.ok(d.inventory[pool].bonds<=require('../finance-cfa/engine.cjs').blueprint.bonds);}
 for(const o of d.coverage.find(x=>x.id===u.id).objectives){assert.ok(o.sections.length>=9);assert.ok(o.practice.length>=10);assert.equal(o.mockQuestions,2);}
 const b=require('../finance-content/bonds.cjs');assert.equal(b[1].lab,'repofunding');assert.equal(b[2].lab,'repayment');assert.equal(b[4].lab,'bond');assert.equal(b[7].lab,'bond');assert.equal(b[10].lab,'yieldspread');assert.equal(b[12].lab,'abs');
 assert.equal(Object.keys(require('../finance-models.cjs').models).length,50);
 for(const id of ['bond-prices','bond-cashflows','bond-trading','corporate-funding','government-funding'])assert.ok(d.units.find(x=>x.id===id).related.some(r=>r.unit===u.id));
});
test('printed equivalent-rate and call tables preserve annual factors and complete dated cash flows',()=>{
 const conversions=sec('conversion-case').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 for(const row of conversions){const m=german(row[0]),y=german(row[1])/100;near((1+y/m)**m,1.06,1e-8);}
 const calls=sec('call-case').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows,ys=calls.map(r=>german(r[2])/100);
 near(112/(1+ys[0]),110,1e-6);near(6/(1+ys[1])+106/(1+ys[1])**2,110,1e-6);near(annual(6,5,ys[2]),110,2e-6);assert.ok(ys[1]<ys[0]&&ys[0]<ys[2]);
 near((1-.04/2)**2-1,-.0396,1e-12);near(Math.expm1(Math.log(1.06)),.06,1e-12);
});
test('all 704 textbook graph values match independent growth, payment and price residuals',()=>{
 let count=0;const figures=u.sections.flatMap(s=>s.blocks).filter(b=>b.kind==='figure');
 for(const f of figures)for(const[i,s]of f.plot.series.entries())for(const[k,[x,y]]of s.points.entries()){
  count++;assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]);assert.ok(y>=f.plot.y[0]&&y<=f.plot.y[1]);
  if(f.id.endsWith('yield-frequency')){const m=[1,2,12][i];let wealth=1;for(let j=0;j<m;j++)wealth*=1+x/100/m;near(y,100*(wealth-1),1e-10);}
  else if(f.id.endsWith('yield-current-ytm')){if(i===0)near(annual(6,5,y/100),x,1e-8);else near(y,i===1?600/x:6,1e-10);}
  else if(f.id.endsWith('yield-call-scenarios')){if(i===0)near(annual(6,5,y/100),x,1e-8);else if(i===1)near(112/(1+y/100),x,1e-8);else if(i===2)near(6/(1+y/100)+106/(1+y/100)**2,x,1e-8);else near(y,Math.min(...f.plot.series.slice(0,3).map(s=>s.points[k][1])),1e-10);}
  else if(f.id.endsWith('yield-z-price'))near(y,i?96.97926726495857:curve(5,[.03,.04,.05],x/10000),1e-9);
  else if(f.id.endsWith('yield-option-units'))near(curve(5,[.03,.04,.05],.01+y/10000),curve(5,[.03,.04,.05],.01)+(i?x:-x),1e-8);
  else assert.fail(f.id);
 }assert.equal(count,704);
});
test('numeric training and two novel mock cases use consistent rates, signs, cash flows and denominator units',()=>{
 const twoYearYield=(C,R,P)=>{const v=(-C+Math.sqrt(C*C+4*(C+R)*P))/(2*(C+R));return 1/v-1;};
 const refs={'01':[3,0],'02':[6.09,1e-10],'03':[2*(Math.sqrt(1.06)-1)*100,1e-6],'04':[12*(1.06**(1/12)-1)*100,1e-6],'06':[-3.96,1e-10],'07':[(1.15**(1/3)-1)*100,1e-6],'08':[Math.log(1.06)*100,1e-6],'10':[600/90,1e-6],'11':[600/110,1e-6],'12':[8.54033471832335,1e-6],'13':[3.7683279179861695,1e-6],'16':[(112/110-1)*100,1e-6],'17':[twoYearYield(6,100,110)*100,1e-6],'18':[twoYearYield(6,100,110)*100,1e-6],'23':[160,0],'24':[130,0],'27':[4,0],'28':[130,0],'31':[30,0],'32':[190,0],'35':[.012,0],'36':[curve(5,[.03,.04,.05],.012),1e-6],'39':[120,0],'40':[119.8917,.0001],'43':[97.502864-3,1e-8],'44':[97.502864+3,1e-8],'46':[216.647469,1e-6],'a1':[(1.03**2-1-.048)*10000,1e-9],'b1':[4/(1.02**2+.004)+104/(1.03**2+.004)**2,1e-6]};
 for(const[id,[expected,t]]of Object.entries(refs)){const q=d.questions.find(q=>q.id==='fyd-'+id),text=q.options[q.correct].text;const value=Number(text.replaceAll(',','').replace('−','-').match(/[+-]?\d+(?:\.\d+)?/)?.[0]);near(value,expected,t);}
 const b=d.questions.find(q=>q.id==='fyd-b1'),values=b.options.map(o=>Number(o.text.match(/\d+(?:\.\d+)?/)[0]));
 assert.ok(values.some(v=>Math.abs(v-(4/1.044+104/1.064**2))<1e-6));assert.ok(values.some(v=>Math.abs(v-(4/1.022**2+104/1.032**4))<1e-6));
});
test('given option-value cases reconcile monetary prices and fitted spreads without pretending to calculate an undisclosed option tree',()=>{
 const rows=sec('option-case').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows,base=curve(5,[.03,.04,.05],.01);
 for(const row of rows){const p=german(row[1]),z=german(row[2])/10000;near(curve(5,[.03,.04,.05],z),p,1e-6);near(german(row[3]),100);}
 near(german(rows[1][1]),base-3,1e-6);near(german(rows[2][1]),base+3,1e-6);
 const e=sec('option-case').blocks.find(b=>b.kind==='example');assert.match(e.given,/nicht aus einem Zinsbaum neu berechnet/);assert.match(sec('oas').blocks.join(' '),/zusätzliche Annahmen|außerhalb/);
 near(.058-.042,.016);near(.058-.045,.013);near((.056-.037)-(.058-.042),.003);
});
test('interactive spot calculator reconciles 243 independent scenarios including all 32 input corners and every plotted value',()=>{
 const {calculate}=require('../finance-models.cjs');let cases=0,corners=0,points=0;
 for(const coupon of [0,5,15])for(const price of [60,100,140])for(const z1 of [-2,4,15])for(const z2 of [-2,4,15])for(const z3 of [-2,4,15]){
  cases++;if([0,15].includes(coupon)&&[60,140].includes(price)&&[z1,z2,z3].every(z=>[-2,15].includes(z)))corners++;
  const p={coupon,price,z1,z2,z3},o=calculate('yieldspread',p),z=[z1,z2,z3].map(z=>z/100),s=o.metrics[0][1]/10000;
  assert.equal(o.metrics.length,6);near(curve(coupon,z,s),price,1e-8);near(annual(coupon,3,o.metrics[1][1]/100),price,1e-8);
  const base=curve(coupon,z,0);near(o.metrics[4][1],base,1e-9);near(annual(coupon,3,o.metrics[2][1]/100),base,1e-8);near(o.metrics[3][1],100*(o.metrics[1][1]-o.metrics[2][1]),1e-8);near(o.metrics[5][1],price-base,1e-9);
  assert.equal(o.projection.rows.length,3);let pvSum=0;
  for(const[k,row]of o.projection.rows.entries()){const cf=coupon+(k===2?100:0),discount=1/(1+z[k]+s)**(k+1);near(row[2],k===2?100:0);near(row[3],cf);near(row[6],discount);near(row[7],cf*discount);pvSum+=row[7];}near(pvSum,price,1e-8);
  assert.equal(o.points.length,121);assert.ok(o.yRange[0]>0&&o.yRange[1]-o.yRange[0]<25);for(const[x,y]of o.points){points++;near(y,curve(coupon,z,x/10000),1e-8);assert.ok(y>o.yRange[0]&&y<o.yRange[1]);}near(o.marker[0],s*10000);near(o.marker[1],price);near(o.points[60][0],o.marker[0],1e-8);near(o.points[60][1],price,1e-8);
 }assert.equal(cases,243);assert.equal(corners,32);assert.equal(points,29403);
});
test('flat curves, zero coupons and parallel spot shifts explain which calculator inputs can change each measure',()=>{
 const {calculate,models,yieldSpreadPlan}=require('../finance-models.cjs');
 for(const preset of models.yieldspread.presets)assert.ok(calculate('yieldspread',preset.values).metrics.every(m=>Number.isFinite(m[1])));
 const flat=calculate('yieldspread',{coupon:5,price:100,z1:4,z2:4,z3:4});near(flat.metrics[0][1],100,1e-8);near(flat.metrics[3][1],100,1e-8);
 const zero=models.yieldspread.presets[2].values,a=calculate('yieldspread',zero),b=calculate('yieldspread',{...zero,z1:-2,z2:15});for(let k=0;k<6;k++)near(a.metrics[k][1],b.metrics[k][1],1e-8);near(a.metrics[0][1],a.metrics[3][1],1e-8);
 const p={coupon:5,price:96.979267,z1:3,z2:4,z3:5},before=calculate('yieldspread',p),shift=calculate('yieldspread',{...p,z1:3.5,z2:4.5,z3:5.5});
 near(shift.metrics[0][1]-before.metrics[0][1],-50,1e-8);near(shift.metrics[1][1],before.metrics[1][1]);assert.ok(calculate('yieldspread',{...p,price:101}).metrics[0][1]<before.metrics[0][1]);
 assert.throws(()=>yieldSpreadPlan({...p,price:0}));assert.throws(()=>yieldSpreadPlan({...p,coupon:-1}));assert.throws(()=>yieldSpreadPlan({...p,z1:-100}));
});
test('yield vocabulary distinguishes swap and I-spreads and preserves existing equity, IRR, YTM and basis-point definitions',()=>{
 const gl=require('../finance-glossary.cjs'),find=w=>gl.find(g=>[g.term,...g.aliases].some(s=>s.toLowerCase()===w.toLowerCase()));
 for(const[w,section]of [['Periodicity','period-rate'],['Nominal Annual Yield','period-rate'],['Yield Equivalence','convert'],['Current Yield','current'],['YTC','call'],['YTW','worst'],['YTP','put'],['Bond Call Price','call-case'],['Call Schedule','call-case'],['G-Spread','g-spread'],['I-Spread','i-spread'],['Swap Spread','i-spread'],['Bond Yield Spread','drivers'],['Credit Spread Curve','term-structure'],['Z-Spread','z-definition'],['OAS','oas'],['Interest Rate Volatility','oas'],['Option Adjustment','option-value'],['Monetary Option Value','option-case'],['Nominal Yield Spread','z-nominal'],['Spread Calibration','z-root'],['Yield Benchmark','benchmarks']])assert.deepEqual(find(w)?.cfa,{unit:u.id,section},w);
 assert.deepEqual(find('Effective Annual Yield').cfa,{unit:'return-types',section:'compounding'});assert.equal(find('Effective Annual Yield').term,find('EAR').term);assert.equal(find('Effektive Jahresrendite').term,find('EAR').term);assert.equal(find('Call Price').cfa.unit,'equity-features');assert.notEqual(find('Swap Spread').term,find('I-Spread').term);assert.equal(find('Spread').cfa.unit,'equity-trading');assert.equal(find('YTM').cfa.unit,'bond-prices');assert.equal(find('IRR').cfa.unit,'capital-allocation');assert.equal(find('Basispunkt').cfa.unit,'returns');
});
