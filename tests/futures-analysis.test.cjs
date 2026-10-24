const {test}=require('node:test'),assert=require('node:assert/strict'),M=require('../finance-models.cjs'),d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(u=>u.id==='futures');
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),bank=d.questions.filter(q=>q.unit==='futures'),near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<=1e-8+t*Math.max(1,Math.abs(a),Math.abs(b)),a+' vs '+b),defaults=Object.fromEntries(M.models.futuresstates.controls.map(c=>[c.key,c.value]));
test('the actual2027 comparison outcomes have a complete original chapter, separate practice and two real reserved transfers',()=>{
 assert.equal(u.sections.length,32);assert.ok(blocks.filter(b=>typeof b==='string').join(' ').length>20000);
 for(const[k,n]of [['formula',30],['example',15],['table',9],['figure',6],['disclosure',13]])assert.equal(blocks.filter(b=>b.kind===k).length,n,k);
 assert.equal(bank.length,52);assert.equal(bank.filter(q=>q.pool==='practice').length,50);for(const p of ['mock-a','mock-b'])assert.equal(bank.filter(q=>q.pool===p).length,1);
 for(const o of d.coverage.find(c=>c.id==='futures').objectives){assert.equal(o.practice.length,25);assert.equal(o.mockQuestions,1);assert.ok(o.sections.length>=15);}
 for(const q of bank){assert.ok(q.options.every(o=>o.why.length>=15),q.id);assert.ok(u.sections.some(s=>s.id===q.section));}assert.equal(new Set(bank.map(q=>q.stem)).size,bank.length);
 assert.equal(u.review.status,'draft');assert.equal(d.release,false);assert.ok(u.sources[0].url.endsWith('2027levelitopicoutline_online.pdf#page=24'));
 for(const site of ['cftc.gov','cmegroup.com','bis.org','lme.com'])assert.ok(u.sources.some(s=>s.url.includes(site)),site);
 assert.equal(require('../finance-content/derivatives.cjs')[3].lab,'futuresstates');for(const id of ['carry','forward-value'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit==='futures'));
});
// References are state-price and full cash-ledger tests, not a second invocation of the product quote formula.
function verify(p){
 const r=M.calculate('futuresstates',p),[g,k,gap,spot,a,b]=r.metrics.map(m=>m[1]),w=p.p/100,weights=[w,1-w],end=[p.sa,p.sb],rates=[p.ra,p.rb].map(x=>x/100),statePrices=weights.map((w,i)=>w/1.04/(1+rates[i]));
 near(weights.reduce((s,w,i)=>s+w*(end[i]-g)/1.04,0),0);near(statePrices.reduce((s,q,i)=>s+q*(end[i]-k),0),0);near(spot,statePrices.reduce((s,q,i)=>s+q*end[i],0));near(k*statePrices.reduce((s,q)=>s+q,0),spot);near(g-k,gap);
 near(a,p.qty*(end[0]-g));near(b,p.qty*(end[1]-g));near(w*a+(1-w)*b,0);
 assert.equal(r.projection.rows.length,3);assert.equal(r.stable.rows.length,2);near(r.projection.rows[2][3],statePrices[0]+statePrices[1]);
 for(const[i,row]of r.stable.rows.entries()){near(row[1],end[i]);near(row[2],p.qty*(end[i]-g));near(row[3],row[2]*(1+rates[i]));near(row[4],p.qty*(end[i]-k));}
 near(statePrices.reduce((s,q,i)=>s+q*r.stable.rows[i][3],0),0);near(statePrices.reduce((s,q,i)=>s+q*r.stable.rows[i][4],0),0);
 const cov=w*(1-w)*(1/(1+rates[0])-1/(1+rates[1]))*(end[0]-end[1]);near(k-g,cov/(w/(1+rates[0])+(1-w)/(1+rates[1])));
 if(p.ra===p.rb||p.sa===p.sb){assert.equal(g,k);assert.equal(gap,0);}assert.ok(r.yRange[0]<r.yRange[1]);
 for(const s of r.series)for(const[x,y]of s.points){assert.ok(y>=r.yRange[0]&&y<=r.yRange[1]);if(s.dash)near(y,g);else{const qA=w/1.04/(1+x/100),qB=(1-w)/1.04/(1+p.rb/100);near(qA*(p.sa-y)+qB*(p.sb-y),0);}}
 return r;
}
test('729 endpoint and interior parameter combinations reconcile every model point and cash table against state prices',t=>{
 let n=0,points=0;for(const sa of [60,120,180])for(const sb of [20,80,140])for(const p of [10,50,90])for(const ra of [-5,10,20])for(const rb of [-5,0,20])for(const qty of [0,100,1000]){const r=verify({sa,sb,p,ra,rb,qty});n++;points+=r.series.reduce((n,s)=>n+s.points.length,0);}
 assert.equal(n,729);assert.equal(points,147258);t.diagnostic(JSON.stringify({scenarios:n,modelCoordinates:points}));
});
test('all controlled presets preserve exactly stated changes, zero quantity and price-rate reversals',()=>{
 for(const p of M.models.futuresstates.presets)verify(p.values);const run=p=>M.calculate('futuresstates',{...defaults,...p}).metrics.map(m=>m[1]);
 const base=run({}),rev=run({ra:0,rb:10}),double=run({qty:200}),zero=run({qty:0});near(base[0],100);near(base[1],2080/21);near(base[3],1000/11);assert.ok(base[2]>0&&rev[2]<0);near(rev[1],2120/21);
 for(let i=0;i<4;i++){near(base[i],double[i]);near(base[i],zero[i]);}near(double[4],2*base[4]);near(double[5],2*base[5]);assert.equal(zero[4],0);assert.equal(zero[5],0);assert.ok(!zero.some(x=>Object.is(x,-0)));
 assert.equal(M.models.futuresstates.presets.length,8);for(const key of ['sa','sb','p','ra','rb','qty'])for(const v of ['',NaN,Infinity])assert.throws(()=>M.calculate('futuresstates',{...defaults,[key]:v}));
});
test('all687 book coordinates independently match cash ledgers, funding, covariance and inverse quotation',t=>{
 const refs={
  'cash-margin':(s,x)=>s===0?[0,-200,150,300][x]:[1000,1000,1350,1500][x],
  'funded-paths':(s,x)=>{const payments=s===0?[-200,350,150]:[200,-150,250];return payments.reduce((sum,c,i)=>sum+c*(1+x/100)**(2-i),0);},
  convergence:(s,x)=>s===0?100*1.05**(1-x):100,
  'state-quotes':(s,x)=>{if(s===0)return 100;const stateA=.5/1.04/(1+x/100),stateB=.5/1.04;return(120*stateA+80*stateB)/(stateA+stateB);},
  'inverse-rate':(s,x)=>100-x,
  'fra-curvature':(s,x)=>s===0?1e6-1e6*1.01/(1+.25*x/100):250000*(x/100-.04)
 };let n=0;for(const f of blocks.filter(b=>b.kind==='figure')){const key=Object.keys(refs).find(k=>f.id.endsWith('-'+k));assert.ok(key,f.id);for(const[i,s]of f.plot.series.entries())for(const[x,y]of s.points){near(y,refs[key](i,x));assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]&&y>=f.plot.y[0]&&y<=f.plot.y[1]);n++;}}assert.equal(n,687);t.diagnostic(JSON.stringify({bookCoordinates:n}));
});
test('the full margin, physical delivery and funded-state cases conserve cash without double counting',()=>{
 let free=-1000,balance=1000,totalVM=0;const quotes=[100,96,103,106],deposits=[1000];for(let i=1;i<quotes.length;i++){const vm=50*(quotes[i]-quotes[i-1]);balance+=vm;totalVM+=vm;if(balance<850){const top=1000-balance;free-=top;balance+=top;deposits.push(top);}}near(balance,1500);near(free+balance,totalVM);near(totalVM,300);assert.deepEqual(deposits,[1000,200]);
 near(6-106,-100);near(-200*1.1**2+350*1.1+150,293);near(200*1.1**2-150*1.1+250,327);
 // Dynamic quantities replicate a terminal difference; a fixed futures quantity need not.
 near((10/11)*(104-100)*1.1+(106-104),6);near((104-100)*1.1+(106-104),6.4);
 for(const Q of [1,50])for(const r of [-.01,0,.1])for(const middle of [40,120])for(const terminal of [30,140]){const q1=Q/(1+r),q2=Q;near(q1*(middle-100)*(1+r)+q2*(terminal-middle),Q*(terminal-100));}
 const r=verify(defaults),a=r.stable.rows[0],b=r.stable.rows[1];near(.5*a[3]+.5*b[3],100);near(.5*a[3]/1.1/1.04+.5*b[3]/1.04,0);
 near(1e6-1.01e6/1.0075,-2481.3895781638);near(1e6-1.01e6/1.0125,2469.1358024691);near((1+.04*3/360)-1,.0003333333333333);
 const examples=blocks.filter(b=>b.kind==='example');assert.equal(examples.length,15);const table=examples.find(x=>x.title.includes('Nachschuss')).steps.find(s=>s.kind==='table');assert.equal(table.rows[1][2],200);assert.equal(table.rows[3][3],1500);
});
test('all24 numerical original questions including both actual reserved transfers have independently correct choices',t=>{
 const ref={'02':-200,'03':350,'04':-140,'05':300,'06':200,'07':300,'09':1200,'10':100,'11':-2500,'12':96,'13':.5,'19':105,'22':-25,'24':100.5,'30':293,'31':327,'32':34,'33':2080/21,'34':2120/21,'35':100,'36':1000/11,'42':110,'exam-a':80*4,'exam-b':(98*1.08+94*1.02)/(1.08+1.02)};
 for(const[id,x]of Object.entries(ref)){const q=bank.find(q=>q.id==='fut-'+id);assert.ok(q,id);const text=q.options[q.correct].text.replace(/\.$/,''),dec=(text.split('.')[1]||'').length,value=Number(text.replaceAll(',',''));assert.ok(Math.abs(value-x)<=.50001*10**-dec+1e-8,id+': '+value+' vs '+x);}
 assert.equal(Object.keys(ref).length,24);t.diagnostic(JSON.stringify({numericalQuestions:24}));
});
test('twenty exact dictionary returns distinguish claim, margin, settlement law and rate quoting',()=>{
 const g=require('../finance-glossary.cjs'),curated=require('../finance-cfa/glossary.cjs').filter(e=>e.cfa.unit==='futures');assert.equal(curated.length,20);assert.equal(new Set(g.map(e=>e.term)).size,g.length);for(const e of curated){assert.ok(g.some(x=>x.term===e.term));assert.ok(u.sections.some(s=>s.id===e.cfa.section));}
 for(const label of ['Futuresquote','Vertragswert','Variation Margin','Initial Margin','Maintenance Margin','SOFR'])assert.ok(g.some(e=>e.contextualAliases?.some(a=>a.label===label&&a.units.includes('futures'))),label);
 assert.equal(g.find(e=>e.term==='Forwardpreis').cfa.unit,'carry');assert.equal(g.find(e=>e.term==='Forward Rate').cfa.unit,'tvm');
});
