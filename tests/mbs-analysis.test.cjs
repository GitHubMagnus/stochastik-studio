const {test}=require('node:test'),assert=require('node:assert/strict'),{compile}=require('../finance-cfa/compile.cjs'),d=compile(),u=d.units.find(u=>u.id==='mbs');
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),figures=blocks.filter(b=>b.kind==='figure'),bank=d.questions.filter(q=>q.unit==='mbs');
const near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),a+' vs '+b);
// Independent closed-form loan balances, rather than the executable monthly recursion.
function balance(t,c=0){const n=360,i=.005,p=100000;if(t===n)return 0;return p*Math.exp(t*Math.log1p(i))*Math.expm1((n-t)*Math.log1p(i))/Math.expm1(n*Math.log1p(i))*(1-c/100)**(t/12);}
function price(c,annualDiscount){let sum=0;for(let t=1;t<=360;t++){const before=balance(t-1,c),after=balance(t,c);sum+=(before-after+.055/12*before)/(1+annualDiscount/1200)**t;}return sum;}
function allocate(capital){let a=60,b=40;return capital.map(p=>{const openA=a,openB=b;let remaining=p;const pa=Math.min(a,remaining);a-=pa;remaining-=pa;const pb=Math.min(b,remaining);b-=pb;remaining-=pb;near(remaining,0);return {openA,openB,a,b,pa,pb};});}
test('MBS develops all four actual 2027 outcomes with 80 distinct original practice items and disjoint reserved transfers',()=>{
 assert.equal(u.sections.length,39);for(const[k,n]of [['formula',35],['figure',9],['diagram',1],['example',15],['table',19],['disclosure',5]])assert.equal(blocks.filter(b=>b.kind===k).length,n);
 assert.equal(bank.filter(q=>q.pool==='practice').length,80);for(const pool of ['mock-a','mock-b'])assert.equal(bank.filter(q=>q.pool===pool).length,1);
 const c=d.coverage.find(c=>c.id==='mbs');assert.equal(c.objectives.length,4);for(const o of c.objectives){assert.ok(o.sections.length>=10);assert.ok(o.practice.length>=20);}assert.deepEqual(c.objectives.map(o=>o.mockQuestions),[1,1,1,1]);
 assert.equal(d.release,false);assert.equal(u.review.status,'draft');assert.equal(d.inventory['mock-a'].bonds,22);assert.equal(d.inventory['mock-b'].bonds,22);assert.ok(blocks.filter(b=>typeof b==='string').join(' ').length>32000);
 assert.ok(u.sources[0].url.endsWith('#page=22'));assert.ok(u.sources.some(s=>s.url.includes('capitalmarkets.fanniemae.com')));assert.ok(u.sources.some(s=>s.title.includes('Suchauszug')));assert.equal(u.explorations[0].lesson,'bonds-14');assert.equal(require('../finance-content/bonds.cjs')[13].lab,'mortgage');
 for(const id of ['bond-cashflows','floating-yields','abs','securitization','curve-risk','credit-risk'])assert.ok(d.units.find(x=>x.id===id).related.some(r=>r.unit==='mbs'));
 assert.ok(Object.keys(require('../finance-models.cjs').models).length>=50);assert.ok(!JSON.stringify(u).includes('NaN'));assert.ok(!JSON.stringify(u).includes('undefined'));
});
test('all nine book figures agree with independent loan balances, valuation, PSA, cash allocation and refinancing limits',t=>{
 let count=0;for(const g of figures)for(const[i,s]of g.plot.series.entries())for(const[j,[x,y]]of s.points.entries()){
  let expected;if(g.id.endsWith('-cpr-smm'))expected=i===0?100*(1-(1-x/100)**(1/12)):x/12;
  else if(g.id.endsWith('-psa-ramp'))expected=i===2?6:Math.min(.2*x,6)*(i+1);
  else if(g.id.endsWith('-interest-principal')){const m=Math.round(x*12),before=balance(m-1),after=balance(m);expected=i===0?.005*before:before-after;}
  else if(g.id.endsWith('-pool-balances'))expected=balance(Math.round(x*12),[0,12,24][i]);
  else if(g.id.endsWith('-price-cpr'))expected=price(x,[3,5.5,8][i]);
  else if(g.id.endsWith('-option-price')){const yld=x/100,hold=6/(1+yld)+106/(1+yld)**2,exit=106/(1+yld);expected=i===0?hold:Math.min(hold,exit);}
  else if(g.id.endsWith('-sequential-balances')){const a=allocate([20,50,30]);expected=j===0?(i===0?60:40):j%2===1?(i===0?a[(j-1)/2].openA:a[(j-1)/2].openB):(i===0?a[j/2-1].a:a[j/2-1].b);}
  else if(g.id.endsWith('-pac-balances'))expected=[[60,40,20,0],[60,40,15,0],[60,50,20,0]][i][j];
  else if(g.id.endsWith('-refinancing'))expected=i===2?100:Math.min(.75*x/[.06,.08][i],x/(1.25*.07));
  else assert.fail(g.id);near(y,expected);assert.ok(x>=g.plot.x[0]-1e-9&&x<=g.plot.x[1]+1e-9);assert.ok(y>=g.plot.y[0]-1e-9&&y<=g.plot.y[1]+1e-9);count++;
 }assert.equal(figures.length,9);t.diagnostic(JSON.stringify({independentlyVerifiedBookPoints:count}));
 near(price(0,3),135172.51520129308);near(price(0,8),77136.05059708783);for(const c of [0,12,24,50])near(price(c,5.5),100000);
});
test('monthly book ledger, sequential examples, PAC resource limits, IO/PO and CMBS calculations conserve actual cash and capital',()=>{
 const tables=blocks.filter(b=>b.kind==='table'),ledger=u.sections.find(s=>s.id==='ledger').blocks.flatMap(b=>typeof b==='string'?[]:b.kind==='example'?b.steps:[]).find(b=>b.kind==='table');
 assert.ok(ledger);const parse=s=>Number(s.replaceAll('.','').replace(',','.'));const amounts=ledger.rows.map(r=>parse(r[1]));
 const rate=100000*.005/(1-(1.005)**-360),scheduled=rate-500,extra=(1-.88**(1/12))*(100000-scheduled),fee=100000*.005/12,expected=[500,rate,scheduled,extra,fee,500-fee,rate+extra-fee,100000-scheduled-extra];amounts.forEach((v,i)=>near(v,expected[i],.00005));
 const seq=allocate([20,50,30]);assert.deepEqual(seq.map(r=>[r.pa,r.pb]),[[20,0],[40,10],[0,30]]);near(seq.reduce((s,r,i)=>s+(i+1)*r.pa,0)/60,5/3);near(seq.reduce((s,r,i)=>s+(i+1)*r.pb,0)/40,2.75);
 for(const [name,capital,targetPayments]of [['Normal',[30,30,40],[20,20,20]],['Früh schnell',[55,30,15],[20,25,15]],['Früh langsam',[10,30,60],[10,30,20]]]){
  const table=tables.find(t=>t.headers[0]==='Jahr: '+name);let a=60,b=40;
  table.rows.forEach((row,i)=>{const p=Number(row[1]),pa=Number(row[2]),pb=Number(row[3]);assert.equal(p,capital[i]);assert.equal(pa,targetPayments[i]);near(pa+pb,p);assert.ok(pa<=a&&pb<=b);a-=pa;b-=pb;near(Number(row[4]),a);near(Number(row[5]),b);});near(a,0);near(b,0);
 }
 const flow=blocks.find(b=>b.kind==='diagram');near(flow.flows.filter(f=>f.to==='account').reduce((s,f)=>s+f.amount,0),26);near(flow.flows.filter(f=>f.from==='account').reduce((s,f)=>s+f.amount,0),26);
 near((50/1.05+50/1.05**2)+(6/1.05+3/1.05**2),56/1.05+53/1.05**2);near(100/1.05+6/1.05,106/1.05);
 const low=106/1.04,high=6/1.08+106/1.08**2;near((low-high)/(2*100*.02),1.3724016038830875);near((low+high-200)/(100*.02**2),-41.08631423446);
 near(6/.08,75);near(6/5,1.2);near(100-Math.min(.75*75,6/(1.25*.07)),43.75);near(106/1.03-100,2.9126213592233);
});
test('all numerical practice and reserved answers agree with independently calculated results at displayed precision',t=>{
 const values={'02':5.8,'03':4.5,'04':60,'05':50000*.048/12,'06':720-280,'07':2400/24,'09':210000/280000*100,'10':null,'11':1500/5000*100,'14':.3*3+.7*7,'15':.25*12+.75*36,'17':2.25,'25':100*(1-.8**(1/12)),'26':100*(1-.98**12),'27':.01*(200-4),'28':3,'29':9,'31':null,'32':20-12,'35':11,'36':30-5,'38':(30+3*70)/100,'42':60000*(.054-.006)/12,'43':7-1+13,'54':40/1.04+60/1.04**2,'55':5/1.05+2/1.05**2,'63':12/8,'64':9/(150*.04),'65':7/.07,'66':null,'68':.65*200,'69':14/(1.4*.08),'70':160-Math.min(130,125),'76':110/1.04,'77':70*.25-12,'exam-a':38-(45-32),'exam-b':180-Math.min(.7*15/.08,15/(1.4*.09))};
 let count=0;for(const[id,value]of Object.entries(values)){const q=bank.find(q=>q.id==='mbs-'+id),answer=q.options[q.correct].text;if(value===null){assert.equal(answer,{'10':'75% to 90%.','31':'A 22 and B 0.','66':'Falls by about 16.67%.'}[id]);continue;}const match=/[-−]?\d[\d,]*(?:\.\d+)?/.exec(answer);assert.ok(match,q.id);const n=Number(match[0].replaceAll(',','').replace('−','-'));assert.ok(Math.abs(n-value)<.006,q.id+': '+n+' vs '+value);count++;for(const o of q.options)assert.ok(o.why.length>20,q.id);}
 t.diagnostic(JSON.stringify({independentlyVerifiedNumericalAnswers:count,additionalPairedNumericComparisons:3}));
});
