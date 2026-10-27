const {test}=require('node:test'),assert=require('node:assert/strict');
const data=require('../finance-cfa/compile.cjs').compile(),u=data.units.find(u=>u.id==='convexity'),M=require('../finance-models.cjs');
const near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b),rel=(a,b,t=3e-10)=>near(a,b,t*Math.max(1,Math.abs(b)));
const defaults=Object.fromEntries(M.models.bondconvex.controls.map(c=>[c.key,c.value])),run=p=>M.calculate('bondconvex',{...defaults,...p}),sec=id=>u.sections.find(s=>s.id===id);
// Different route from the chapter's payment loop: differentiate the closed-form annuity.
function ref(c,y,T,m=1){
 const n=T*m,K=c/m,r=y/m,b=1+r,B=b**-n;let P,d1,d2;
 if(r===0){P=K*n+100;d1=(-K*n*(n+1)/2-100*n)/m;d2=(K*n*(n+1)*(n+2)/3+100*n*(n+1))/m**2;}
 else{P=K*(1-B)/r+100*B;d1=(K*(n*b**(-n-1)/r-(1-B)/r**2)-100*n*b**(-n-1))/m;d2=(K*(2*(1-B)/r**3-2*n*b**(-n-1)/r**2-n*(n+1)*b**(-n-2)/r)+100*n*(n+1)*b**(-n-2))/m**2;}
 return{P,D:-d1/P,C:d2/P,DM:-d1/P*b,d1,d2};
}
const question=id=>data.questions.find(q=>q.id==='bcv-'+id),answer=id=>question(id).options[question(id).correct].text;
const num=s=>Number(s.replaceAll(',','').match(/[−-]?\d+(?:\.\d+)?/)?.[0].replace('−','-'));
test('convexity implements all three actual 2027 objectives with distinct reserved transfer cases and working cross-chapter destinations',()=>{
 assert.equal(u.sections.length,38);assert.equal(u.review.status,'checked');assert.equal(data.release,false);assert.ok(u.sources[0].url.endsWith('#page=21'));
 const qs=data.questions.filter(q=>q.unit===u.id);assert.equal(qs.filter(q=>q.pool==='practice').length,60);for(const pool of ['mock-a','mock-b']){assert.equal(qs.filter(q=>q.pool===pool).length,1);assert.ok(data.inventory[pool].bonds<=require('../finance-cfa/engine.cjs').blueprint.bonds);}
 for(const o of data.coverage.find(c=>c.id===u.id).objectives){assert.ok(o.sections.length>=19);assert.ok(o.practice.length>=25);assert.ok(o.mockQuestions>=1);}
 const l=require('../finance-content/bonds.cjs')[7];assert.equal(l.lab,'bond');assert.ok(l.additionalLabs.includes('bondconvex'));assert.ok(Object.keys(M.models).length>=50);
 for(const id of ['duration','bond-return','bond-prices','yield-curves','tvm'])assert.ok(data.units.find(x=>x.id===id).related.some(r=>r.unit==='convexity'));
 assert.deepEqual(u.explorations.map(e=>[e.lesson,e.focus]),[['bonds-08','lab'],['bonds-08','lab-bondconvex']]);
});
test('264 portfolio scenarios and 48,312 curve values independently reprice fixed end payments, with every native control corner',t=>{
 const scenarios=[];for(const early of [.5,5])for(const late of [5,30])for(const weight of [0,100])for(const yield of [0,12])for(const shock of [-300,300])for(const value of [1000,10000000])scenarios.push({early,late,weight,yield,shock,value});
 let seed=202712;const rand=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/2**32;};
 for(let k=0;k<200;k++)scenarios.push({early:.5+4.5*rand(),late:5+25*rand(),weight:100*rand(),yield:12*rand(),shock:-300+600*rand(),value:1000+9999000*rand()});
 let count=0;
 for(const p of scenarios){
  const out=run(p),r=out.convexity,w=p.weight/100,b=1+p.yield/100,V=p.value,center=w*p.early+(1-w)*p.late;
  const claims=[{T:p.early,F:w*V*b**p.early},{T:p.late,F:(1-w)*V*b**p.late}],single=[{T:center,F:V*b**center}];
  const price=(claims,y)=>claims.reduce((sum,c)=>sum+c.F/(1+y)**c.T,0);
  const slope=(claims,y)=>claims.reduce((sum,c)=>sum-c.T*c.F/(1+y)**(c.T+1),0);
  const curve=(claims,y)=>claims.reduce((sum,c)=>sum+c.T*(c.T+1)*c.F/(1+y)**(c.T+2),0);
  const y=p.yield/100,dy=p.shock/10000,D=-slope(claims,y)/V,C=curve(claims,y)/V,CU=curve(single,y)/V;
  rel(r.duration,D);rel(r.duration,-slope(single,y)/V);rel(r.barConvexity,C);rel(r.bulletConvexity,CU);rel(r.center,center);
  rel(r.varTime,w*(p.early-center)**2+(1-w)*(p.late-center)**2);rel(C-CU,r.varTime/b**2);
  rel(r.barValue,price(claims,y+dy));rel(r.bulletValue,price(single,y+dy));rel(r.earlyFace,claims[0].F);rel(r.lateFace,claims[1].F);rel(r.bulletFace,single[0].F);
  rel(r.barReturn,r.barValue/V-1);rel(r.bulletReturn,r.bulletValue/V-1);rel(r.barTaylor,-D*dy+.5*C*dy**2);rel(r.bulletTaylor,-D*dy+.5*CU*dy**2);
  rel(out.metrics[10][1],curve(claims,y));rel(out.metrics[11][1],curve(single,y));
  out.projection.rows.slice(0,2).forEach((row,i)=>{rel(row[4],claims[i].F);rel(row[5],claims[i].F/(b+dy)**claims[i].T);});
  for(const[i,line]of out.series.entries())for(const[x,v]of line.points){const expected=i===2?-D*x/10000*100:(price(i===0?claims:single,y+x/10000)/V-1)*100;rel(v,expected,2e-9);assert.ok(v>=out.yRange[0]&&v<=out.yRange[1]);count++;}
  assert.ok(r.barValue>=r.bulletValue-2e-8*Math.max(1,r.barValue));assert.ok(C>=CU-1e-10);
  out.metrics.forEach(([,v])=>assert.ok(Number.isFinite(v)));
 }
 assert.equal(scenarios.length,264);assert.equal(count,48312);t.diagnostic(JSON.stringify({scenarios:264,curveValues:count,all64Corners:true}));
});
test('exact coincidence, shock-zero, position scaling, genuine degeneracies and all six presets respect the disclosed model',()=>{
 const a=run(),half=run({value:500000});assert.deepEqual(a.series,half.series);
 for(const k of ['earlyFace','lateFace','bulletFace','barValue','bulletValue'])rel(half.convexity[k],a.convexity[k]/2);
 for(const p of [{early:5,late:5},{weight:0},{weight:100}]){const o=run(p);near(o.convexity.varTime,0);rel(o.convexity.barConvexity,o.convexity.bulletConvexity);rel(o.convexity.barReturn,o.convexity.bulletReturn);o.series[0].points.forEach((p,i)=>rel(p[1],o.series[1].points[i][1]));assert.notDeepEqual(o.series[0].points,o.series[2].points);}
 const zero=run({shock:0});for(const k of ['barReturn','bulletReturn','linear','barTaylor','bulletTaylor'])assert.equal(Object.is(zero.convexity[k],0),true,k);
 assert.ok(run({early:4,late:6}).convexity.barConvexity<a.convexity.barConvexity);rel(run({early:4,late:6}).convexity.duration,a.convexity.duration);
 const h=1e-4,down=run({shock:-1}).convexity,up=run({shock:1}).convexity;near((down.barValue+up.barValue-2e6)/(1e6*h*h),a.convexity.barConvexity,5e-6);
 for(const p of M.models.bondconvex.presets)for(const c of M.models.bondconvex.controls){const v=p.values[c.key];assert.ok(v>=c.min&&v<=c.max);near((v-c.min)/c.step,Math.round((v-c.min)/c.step),1e-9);}
 assert.throws(()=>M.convexityPlan({...defaults,value:0}));assert.throws(()=>M.convexityPlan({...defaults,early:10,late:5}));assert.throws(()=>M.convexityPlan({...defaults,yield:-100}));
});
test('all 753 textbook figure values match independent annuity derivatives or fixed-face repricing, within labelled axes',t=>{
 let count=0;const figs=u.sections.flatMap(s=>s.blocks).filter(b=>b.kind==='figure'),B=ref(5,.05,5);assert.equal(figs.length,6);
 for(const f of figs)for(const[i,l]of f.plot.series.entries())for(const[x,y]of l.points){
  let v;
  if(f.id.endsWith('taylor-price'))v=i===0?(ref(5,.05+x/10000,5).P/B.P-1)*100:i===1?-B.D*x/10000*100:(-B.D*x/10000+.5*B.C*(x/10000)**2)*100;
  else if(f.id.endsWith('convexity-adjustment'))v=.5*(i===0?B.C:ref(0,.05,5).C)*(x/10000)**2*100;
  else if(f.id.endsWith('yield-convexity'))v=ref([0,5,10][i],x/100,5).C;
  else if(f.id.endsWith('maturity-convexity'))v=ref(i===0?5:0,.05,x).C;
  else if(f.id.endsWith('dispersion-convexity'))v=i===0?(.5*(5-x)*(6-x)+.5*(5+x)*(6+x))/1.05**2:ref(0,.05,5).C;
  else if(f.id.endsWith('barbell-bullet')){const b=1.05+x/10000;v=i===0?((.5*1.05/b+.5*1.05**9/b**9)-1)*100:i===1?(1.05**5/b**5-1)*100:-5/1.05*x/10000*100;}
  else assert.fail(f.id);
  rel(y,v,1e-7);assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]);assert.ok(y>=f.plot.y[0]&&y<=f.plot.y[1],f.id);count++;
 }
 assert.equal(count,753);t.diagnostic(count+' independently verified book graph values');
});
test('periodic and nonlinear yield-coordinate conversions preserve prices and correctly transform first and second derivatives',()=>{
 const b=ref(5,.05,5,2),eff=1.025**2-1,claims=Array.from({length:10},(_,i)=>({T:(i+1)/2,F:2.5+(i===9?100:0)}));
 const Ceff=claims.reduce((s,c)=>s+c.T*(c.T+1)*c.F/(1+eff)**(c.T+2),0)/b.P,Deff=claims.reduce((s,c)=>s+c.T*c.F/(1+eff)**(c.T+1),0)/b.P;
 near(b.C,22.612322185130576);near(b.C*4,90.4492887405223);near(Ceff,23.554524139813715);near(b.C,Ceff*1.025**2-Deff*.5);
 assert.ok(Math.abs(b.C/1.025**2-Ceff)>1);near(b.C,(b.DM**2+b.DM/2+1.395247527491533)/1.025**2);
 const h=.0001,B=ref(5,.05,5);near((ref(5,.05-h,5).P+ref(5,.05+h,5).P-2*B.P)/(B.P*h*h),B.C,2e-6);
});
test('long discount counterexample, coupon normalization, negative yields and aggregate portfolio IRR limitations are numerically true',()=>{
 assert.ok(ref(1,.1,30).C>ref(1,.1,100).C);near(ref(1,.1,100).C,205.1709782238,1e-7);assert.equal(2/.1**2,199.99999999999997);
 for(const y of [0,.03,.05,.1]){const seq=[0,2,5,10].map(c=>ref(c,y,5));seq.forEach((b,i)=>{if(i){assert.ok(b.C<seq[i-1].C);assert.ok(b.d2>seq[i-1].d2);}});}
 assert.ok(ref(0,-.01,5).C>0);
 const F1=50*1.03,F3=50*1.07**3,P=y=>F1/(1+y)+F3/(1+y)**3;let lo=0,hi=.1;for(let i=0;i<90;i++){const mid=(lo+hi)/2;if(P(mid)>100)lo=mid;else hi=mid;}const y=(lo+hi)/2;
 near(y,.060069981109348,1e-12);const D=(F1/(1+y)**2+3*F3/(1+y)**4)/100,C=(2*F1/(1+y)**3+12*F3/(1+y)**5)/100;
 near(D,1.913426537992464);near(C,6.35536423750662);near(.5/1.03+.5*3/1.07,1.887306052082388);near(.5*2/1.03**2+.5*12/1.07**2,6.183228278773024);assert.ok(Math.abs(C-6.183228278773024)>.17);
 const r=run().convexity;near(1e6*r.duration-1e6*r.duration,0);assert.ok(1e6*(r.barConvexity-r.bulletConvexity)>0);assert.match(sec('signed').blocks.join(' '),/undefiniert/);
});
test('quantitative practice and reserved transfer answers, including every reserved numerical distractor, reconcile independently',()=>{
 const ledger=sec('main-case').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 let PV=0,numerator=0;for(let i=0;i<5;i++){const t=i+1,cf=i===4?105:5,pv=cf/1.05**t,values=ledger[i].map(s=>Number(s.replaceAll('.','').replace(',','.')));near(values[0],t);near(values[1],cf);near(values[2],pv,5.1e-7);near(values[3],pv/100,5.1e-7);near(values[4],t*(t+1)*pv,5.1e-7);PV+=pv;numerator+=t*(t+1)*pv;}
 near(PV,100);near(numerator,2638.942621644273);near(numerator/(PV*1.05**2),ref(5,.05,5).C);near(Number(ledger[5][4].replaceAll('.','').replace(',','.')),numerator,5.1e-7);
 const refs={'04':.0001,'05':.15,'06':-2.4625,'07':2.5375,'09':4,'11':95.790203,'13':20,'14':40,'18':30000000,'19':1500,'21':27.210884,'26':200,'29':16,'30':14.512472,'32':5.6,'33':43.2,'34':-2.746,'35':40,'56':3.4,'57':-3.3};
 for(const[id,v]of Object.entries(refs))near(num(answer(id)),v,1e-6);
 near(num(answer('a1')),1e6*(-8*(-.001)+.5*90*.001**2));const a=question('a1');for(const o of a.options){const expected=o.why.includes('halbiert zwar')?1e6*(-4*(-.002)+.5*90*.002**2):o.why.includes('unverändert mit')?1e6*(-8*(-.002)+.5*90*.002**2):8045;near(num(o.text),expected);}
 const RA=-2*.002+.5*6*.002**2,RB=-7*(-.001)+.5*60*.001**2;near(num(answer('b1')),(.4*RA+.6*RB)*100);
 const b=question('b1'),D=.4*2+.6*7,C=.4*6+.6*60;for(const o of b.options){const shock=o.why.includes('durchschnittlichen')?.0002:.002,expected=o.why.includes('zuerst')?(.4*RA+.6*RB)*100:(-D*shock+.5*C*shock**2)*100;near(num(o.text),expected,5.1e-7);}
 // The supplied reserved coefficients correspond to possible positive fixed payment plans at period yield zero.
 near(1/3*2+2/3*11,8);near(1/3*2*3+2/3*11*12,90);near(.5*5+.5*9,7);near(.5*5*6+.5*9*10,60);
});
test('risk vocabulary has unique entries, precise return links and preserves the end-redemption meaning of bare Bullet outside this unit',()=>{
 const gl=require('../finance-glossary.cjs'),find=t=>gl.find(g=>[g.term,...g.aliases].includes(t));
 for(const[term,section]of [['Convexity','definition'],['Money Convexity','money'],['Konvexitätsanpassung','units'],['Periodic Convexity','frequency'],['Portfolio Convexity','portfolio'],['Barbell','barbell'],['Bullet Portfolio','barbell'],['Central Second Price Difference','finite'],['Portfolio IRR','aggregate-case'],['Common Yield Shift','parallel'],['Jensen Inequality','jensen']])assert.deepEqual(find(term)?.cfa,{unit:'convexity',section},term);
 assert.equal(find('Bullet').term,'Bullet Bond');assert.deepEqual(find('Bullet Portfolio').contextualAliases,[{label:'Bullet',units:['convexity','curve-risk']} ]);assert.equal(gl.filter(g=>g.term==='Konvexität').length,1);
});
