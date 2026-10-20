const {test}=require('node:test'),assert=require('node:assert/strict');
const d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(u=>u.id==='yield-curves'),M=require('../finance-models.cjs');
const near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b),sec=id=>u.sections.find(s=>s.id===id);
const number=s=>Number(String(s).replaceAll('.','').replace(',','.').replace('−','-').match(/-?\d+(?:\.\d+)?/)?.[0]);
const factors=z=>z.map((s,k)=>1/Math.pow(1+s,k+1)),par=(D,n)=>(1-D[n-1])/D.slice(0,n).reduce((a,b)=>a+b,0);
const run=p=>M.calculate('yieldcurve',{z1:3,z2:4,z3:5,coupon:5,...p});
test('yield curves implement the three actual 2027 objectives with original questions, two disjoint questions per mock and a dedicated curve calculator',()=>{
 assert.equal(u.sections.length,36);assert.equal(u.review.status,'draft');assert.equal(d.release,false);assert.ok(u.sources[0].url.endsWith('#page=20'));
 const qs=d.questions.filter(q=>q.unit===u.id);assert.equal(qs.filter(q=>q.pool==='practice').length,60);
 for(const pool of ['mock-a','mock-b']){assert.equal(qs.filter(q=>q.pool===pool).length,2);assert.ok(d.inventory[pool].bonds<=require('../finance-cfa/engine.cjs').blueprint.bonds);}
 for(const o of d.coverage.find(c=>c.id===u.id).objectives){assert.ok(o.sections.length>=10);assert.ok(o.practice.length>=20);assert.equal(o.mockQuestions,2);}
 const b=require('../finance-content/bonds.cjs');assert.equal(b[5].lab,'yieldcurve');assert.equal(b[4].lab,'bond');assert.equal(b[1].lab,'repofunding');assert.deepEqual(b[1].additionalLabs,['floater','moneyyield']);assert.equal(Object.keys(M.models).length,47);
 for(const id of ['tvm','fixed-yields','floating-yields','bond-prices','government-funding','simulation'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit==='yield-curves'));
});
test('all 136 static graph values match independent spot, par and last-period forward equations and stay within the labelled axes',()=>{
 const shapes={'rising-curves':[.03,.04,.05],'falling-curves':[.05,.04,.03],'humped-curves':[.03,.06,.04],'negative-curves':[-.03,-.02,-.01]};let count=0;
 const figures=u.sections.flatMap(s=>s.blocks).filter(b=>b.kind==='figure');assert.equal(figures.length,6);
 for(const f of figures)for(const [i,s]of f.plot.series.entries())for(const [x,y]of s.points){
  let expected;if(f.id.endsWith('zero-price'))expected=1000/(1+x/100)**3;
  else if(f.id.endsWith('forward-earlier-spot'))expected=i===0?(1.05**3/(1+x/100)**2-1)*100:5;
  else{const z=Object.entries(shapes).find(([id])=>f.id.endsWith(id))?.[1];assert.ok(z,f.id);const D=factors(z);expected=i===0?z[x-1]*100:i===1?par(D,x)*100:((x===1?1:D[x-2])/D[x-1]-1)*100;}
  near(y,expected,1e-10);assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]);assert.ok(y>=f.plot.y[0]&&y<=f.plot.y[1],f.id+' point outside axis');count++;
 }
 assert.equal(count,136);
});
test('printed payment, par and bootstrap cases reconstruct prices and recover all three original spots',()=>{
 const D=factors([.03,.04,.05]),table=sec('price-case').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 for(const [k,r]of table.entries()){near(number(r[2]),D[k],6e-10);near(number(r[3]),Number(r[1])*D[k],6e-10);}
 const pc=par(D,3)*100,rows=sec('par-case').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 near(number(rows[0][2]),pc*D.reduce((a,b)=>a+b),6e-10);near(number(rows[1][2]),100*D[2],6e-10);near(number(rows[2][2]),100,1e-12);
 const prices=[100,4*D[0]+104*D[1],5*D[0]+5*D[1]+105*D[2]],recovered=[100/103];
 recovered.push((prices[1]-4*recovered[0])/104);recovered.push((prices[2]-5*recovered[0]-5*recovered[1])/105);
 recovered.forEach((x,k)=>{near(x,D[k],1e-14);near(x**(-1/(k+1))-1,[.03,.04,.05][k],1e-14);});
 near(prices[1],100.03734129947722,1e-11);near(prices[2],100.18009784293258,1e-11);
 const f=sec('bootstrap-case').blocks.find(b=>b.kind==='example').steps.filter(b=>b.kind==='formula');assert.equal(f.length,3);assert.ok(f[1].tex.includes('100{,}037341299'));
});
test('375 curve scenarios reconcile every series, bond price, YTM and all three par benchmarks including every control corner',t=>{
 let cases=0,points=0;const rates=[-3,0,3,6,12];
 for(const z1 of rates)for(const z2 of rates)for(const z3 of rates)for(const coupon of [0,5,12]){
  const r=run({z1,z2,z3,coupon}),s=r.curve,D=factors([z1,z2,z3].map(x=>x/100));assert.equal(r.series.length,3);
  let product=1,forwardPrice=0;
  for(let k=0;k<3;k++){
   near(s.discounts[k],D[k],1e-14);near(s.par[k],par(D,k+1),1e-14);product*=1+s.forward[k];
   near(1/product,D[k],1e-13);forwardPrice+=s.cashflows[k]/product;
   const c=par(D,k+1)*100;near(c*D.slice(0,k+1).reduce((a,b)=>a+b)+100*D[k],100,2e-12);
   const weighted=s.forward.slice(0,k+1).reduce((v,f,j)=>v+f*D[j],0)/D.slice(0,k+1).reduce((a,b)=>a+b);near(weighted,s.par[k],1e-13);
  }
  near(forwardPrice,s.price,2e-11);near(r.projection.rows.reduce((v,row)=>v+row[6],0),s.price,1e-11);near(r.stable.rows.reduce((v,row)=>v+row[4],0),100,1e-11);
  const y=s.ytm,annuity=Math.abs(y)<1e-14?coupon*3:coupon*(-Math.expm1(-3*Math.log1p(y)))/y;
  near(annuity+100/(1+y)**3,s.price,2e-10);
  for(const [i,line]of r.series.entries())for(const [x,y]of line.points){near(y,[s.spots,s.par,s.forward][i][x-1]*100,1e-12);assert.ok(y>=r.yRange[0]&&y<=r.yRange[1]);points++;}
  assert.ok(r.series.every(line=>line.points.every(p=>p.every(Number.isFinite))));cases++;
 }
 assert.equal(cases,375);assert.equal(points,3375);assert.throws(()=>run({z1:-100}));assert.throws(()=>run({coupon:-1}));
 t.diagnostic(JSON.stringify({scenarios:cases,seriesPoints:points,allValidControlCorners:true}));
});
test('controlled input changes isolate coupon effects, neighbouring forwards, flat curves, humps and negative-rate exceptions',()=>{
 const a=run().curve,b=run({coupon:0}).curve;for(const key of ['spots','discounts','par','forward'])assert.deepEqual(a[key],b[key]);assert.notEqual(a.price,b.price);assert.notEqual(a.ytm,b.ytm);
 const mid=run({z2:5}).curve;assert.ok(mid.forward[1]>a.forward[1]);assert.ok(mid.forward[2]<a.forward[2]);near(run({z1:6}).curve.forward[2],a.forward[2],1e-14);
 const flat=run({z1:4,z2:4,z3:4}).curve;for(const x of [...flat.par,...flat.forward])near(x,.04,1e-14);
 assert.ok(a.par[2]<a.spots[2]&&a.forward[2]>a.spots[2]);
 const inverse=run({z1:5,z2:4,z3:3}).curve;assert.ok(inverse.par[2]>inverse.spots[2]&&inverse.forward[2]<inverse.spots[2]);
 const hump=run({z1:3,z2:6,z3:4}).curve;assert.ok(hump.par[1]<hump.spots[1]&&hump.par[2]>hump.spots[2]);near(hump.forward[2],.0011249555001779932,1e-14);
 const negative=run({z1:-3,z2:-2,z3:-1}).curve;assert.ok(negative.discounts.every(x=>x>1));assert.ok(negative.par[2]>negative.spots[2]&&negative.par[2]<0);assert.ok(negative.forward[2]>0);assert.ok(run({z1:-3,z2:-2,z3:-1}).stable.rows.every(row=>row[1]<0));
});
test('both printed arbitrage directions are self financing at every date and agree with synthetic loan factors',()=>{
 const repay=100/1.03*1.04**2;
 for(const id of ['arbitrage-high','arbitrage-low']){
  const rows=sec(id).blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
  for(let col=1;col<=3;col++)near(rows.slice(0,3).reduce((sum,row)=>sum+number(row[col]),0),number(rows[3][col]),2e-10);
  near(number(rows[0][1]),100/1.03,6e-7);near(number(rows[3][1]),0,1e-12);near(number(rows[3][2]),0,1e-12);
  near(number(rows[3][3]),id==='arbitrage-high'?106-repay:repay-104,6e-7);
 }
 assert.ok(repay<106&&repay>104);
});
test('forward interval length, semiannual quotation and loglinear interpolation preserve their stated total factors',()=>{
 const f=(1.05**3/1.03)**.5-1;near(f,.06014516316884233,1e-14);near(1.03*(1+f)**2,1.05**3,1e-14);
 const semi=2*(1.03**2/1.02-1);near(semi,.08019607843137244,1e-14);near(1.02**2*(1+semi/2)**2,1.03**4,1e-14);
 near(Math.sqrt(1.03*1.05)-1,.03995192196562636,1e-14);near(Math.sqrt(.96*.91),.9346657156438338,1e-14);
 const logD=t=>-(.03+.005*t)*t,h=1e-5;
 for(const T of [.5,1,3,5])near(-(logD(T+h)-logD(T-h))/(2*h),.03+.01*T,1e-10);
 const instant=sec('instantaneous').blocks.find(b=>b.kind==='formula');assert.ok(instant.tex.includes('-\\frac{d\\ln D(0,T)}{dT}'));assert.ok(instant.tex.includes('r(T)+Tr^{\\prime}(T)'));
});
test('all independently checked numerical training and reserved answers use their own dates, rates and full final coupon',()=>{
 const qs=d.questions.filter(q=>q.unit===u.id),answer=id=>{const q=qs.find(q=>q.id==='ycv-'+id);return q.options[q.correct].text;},english=s=>Number(s.replaceAll(',','').match(/-?\d+(?:\.\d+)?/)[0]);
 const refs={'01':90,'02':1/1.04**2,'03':1000/1.05**3,'04':4,'05':100.18009784293258,'06':105,'12':100/.97,'20':164,'22':4.934729838067931,'23':3.980299299109686,'24':104.934729838,'26':5.0097087378640826,'27':7.028938609467472,'28':6.014516316884233,'30':3.995192196562636,'31':100.18009784293258,'33':100/103,'34':1/1.04**2,'37':100/1.03,'38':106-100/1.03*1.04**2,'39':100/1.03*1.04**2-104,'41':8.019607843137244,'48':.11249555001779932,'50':-.9865424819938684,'59':Math.sqrt(.96*.91),'a1':.19,'a2':4.6409129852710285,'b1':99.06706107836669,'b2':4};
 for(const [id,x]of Object.entries(refs))near(english(answer(id).replace('−','-')),x,6e-7);
 assert.equal(qs.length,64);assert.ok(qs.every(q=>q.options.length===3&&q.options.every(o=>o.why.trim())));
});
test('new curve definitions keep prior statistical bootstrap and foundational spot destinations while exposing precise curve-context explanations',()=>{
 const g=require('../finance-glossary.cjs'),find=t=>g.filter(g=>[g.term,...g.aliases].includes(t));
 for(const [term,section]of [['Spotkurve','spot'],['Parkurve','par'],['Par Rate','par'],['Forwardkurve','forward'],['Einjahresforward','forward'],['Mehrperiodenforward','multi-period'],['Momentanforward','instantaneous'],['Zinskurven-Bootstrapping','bootstrap'],['Kurvenschätzung','estimation'],['Zinsstrukturkurve','map'],['Preisadditivität','cashflows']]){assert.equal(find(term).length,1,term);assert.deepEqual(find(term)[0].cfa,{unit:u.id,section});}
 assert.equal(find('Cashflow-Matching').length,1);assert.deepEqual(find('Cashflow-Matching')[0].cfa,{unit:'bond-trading',section:'liability'});
 assert.deepEqual(find('Bootstrap')[0].cfa,{unit:'simulation',section:'bootstrap'});assert.deepEqual(find('Bootstrapping')[0].cfa,{unit:'simulation',section:'bootstrap'});
 assert.ok(find('Zinskurven-Bootstrapping')[0].contextualAliases.some(a=>a.label==='Bootstrapping'&&a.units.includes(u.id)));
 assert.deepEqual(find('Spotrate')[0].cfa,{unit:'tvm',section:'bonds'});assert.deepEqual(find('Forward Rate')[0].cfa,{unit:'tvm',section:'forwards'});
});
test('reserved transfer cases reconcile zero-coupon replication, multiyear factor pricing and semiannual par conventions',()=>{
 const face=[100,100],weights=[3/100,103/100],zeroPrices=[96,91],flows=weights.map((w,k)=>w*face[k]);
 assert.deepEqual(flows,[3,103]);const replication=weights.reduce((v,w,k)=>v+w*zeroPrices[k],0);near(replication,96.61,1e-12);near(96.8-replication,.19,1e-12);
 const D1=98/100,D3=89.5/100,f=(D1/D3)**.5-1,spot=D3**(-1/3)-1;near(D1/(1+f)**2,D3,1e-14);assert.ok(f>spot);near(f,.046409129852710285,1e-14);
 const P=2.5/(1+.04/2)+102.5/(1+.06/2)**2;near(P,99.06706107836669,1e-11);near(P-(2.5/1.03+102.5/1.03**2),.02379592613745,1e-11);
 const dHalf=1/1.02,dYear=1/1.02**2,c=2*(1-dYear)/(dHalf+dYear);near(c,.04,1e-14);near(100*c/2*dHalf+(100+100*c/2)*dYear,100,1e-12);
 near(dHalf**-2-1,.0404,1e-14);near(dYear**-1-1,.0404,1e-14);
 assert.ok(100*.0404/2*dHalf+(100+100*.0404/2)*dYear>100);assert.ok(100*.02/2*dHalf+(100+100*.02/2)*dYear<100);
});
