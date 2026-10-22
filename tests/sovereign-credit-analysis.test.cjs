const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),M=require('../finance-models.cjs'),d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(u=>u.id==='sovereign-credit');
const base=Object.fromEntries(M.models.sovereign.controls.map(c=>[c.key,c.value])),run=p=>M.calculate('sovereign',{...base,...p}),near=(a,b,t=1e-9)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),a+' vs '+b);
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...(b.blocks?flat(b.blocks):[]),...(b.steps?flat(b.steps):[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),q=id=>d.questions.find(q=>q.id==='svr-'+id),answer=id=>q(id).options[q(id).correct].text;
// Independent transaction ledger: remove old principal, then add financing or extra repayment.
function ledger(p,debt=p.debt,shock=p.depreciation){
 const positions=[{face:debt*(1-p.fx/100),rate:1},{face:debt*p.fx/100,rate:1+shock/100}];
 const values=positions.map(a=>a.face*a.rate),interest=positions.reduce((s,a)=>s+a.face*p.interest/100*a.rate,0),maturity=positions.reduce((s,a)=>s+a.face*p.maturity/100*a.rate,0),cash=maturity+interest+p.contingent-p.primary,issue=Math.max(0,cash),extra=Math.max(0,-cash),remaining=positions.reduce((s,a)=>s+a.face*(1-p.maturity/100)*a.rate,0),end=remaining+issue-extra,Y=100+p.growth;
 return{positions,values,interest,maturity,cash,issue,extra,end,Y,ratio:end/Y*100,need:issue/Y*100};
}
test('public credit supplies the actual single objective, 40 sections, independent practice and two reserved transfers while retaining the original spread model',()=>{
 assert.equal(u.sections.length,40);assert.equal(u.review.status,'draft');assert.equal(d.release,false);
 for(const[k,n]of Object.entries({formula:28,example:8,table:3,figure:6,disclosure:3}))assert.equal(blocks.filter(b=>b.kind===k).length,n,k);
 const coverage=d.coverage.find(c=>c.id===u.id);assert.equal(coverage.objectives.length,1);assert.equal(coverage.objectives[0].sections.length,40);assert.equal(coverage.objectives[0].practice.length,64);assert.equal(coverage.objectives[0].mockQuestions,2);
 assert.ok(u.sources[0].url.endsWith('#page=21'));const bonds=require('../finance-content/bonds.cjs');assert.equal(bonds[10].lab,'yieldspread');assert.deepEqual(bonds[10].additionalLabs,['sovereign']);assert.equal(bonds[1].lab,'repofunding');assert.deepEqual(bonds[1].additionalLabs,['floater','moneyyield']);assert.equal(Object.keys(M.models).length,48);
 for(const id of ['government-funding','fiscal','monetary','fx-markets','credit-risk','bond-cashflows'])assert.ok(d.units.find(u=>u.id===id).related.some(r=>r.unit===u.id));
 for(const b of blocks.filter(b=>b.kind==='formula'))assert.ok(b.mathml.includes('<math')&&b.symbols.every(s=>s.meaning&&s.mathml));
 // Authoring regression: a single JS backslash silently turned \mathrm into the letters "mathrm".
 for(const f of ['units','questions'])assert.equal(/(?<!\\)\\(?!\\)/.test(fs.readFileSync(require('node:path').join(__dirname,'../finance-cfa',f,'sovereign-credit.cjs'),'utf8')),false,'escaped TeX in '+f);
});
test('456 independently balanced portfolios reconcile all 256 corners, cash and stock ledgers, stabilizing surplus and 83,448 curve values',t=>{
 const cases=[];for(const debt of [10,150])for(const fx of [0,100])for(const depreciation of [-20,40])for(const interest of [0,12])for(const growth of [-5,10])for(const primary of [-5,8])for(const contingent of [0,10])for(const maturity of [0,50])cases.push({debt,fx,depreciation,interest,growth,primary,contingent,maturity});
 let seed=20271022;const rand=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/2**32;};
 for(let i=0;i<200;i++)cases.push(Object.fromEntries(M.models.sovereign.controls.map(c=>[c.key,c.min+Math.floor(rand()*(Math.round((c.max-c.min)/c.step)+1))*c.step])));
 let points=0;
 for(const p of cases){const out=run(p),a=out.sovereign,b=ledger(p),v=b.values.reduce((s,v)=>s+v,0),valuation=v-p.debt;
  near(a.revalued,v);near(a.valuation,valuation);near(a.I,b.interest);near(a.M,b.maturity);near(a.raw,b.cash);near(a.issue,b.issue);near(a.extra,b.extra);near(a.end,b.end);near(a.ratio,b.ratio);near(a.needRatio,b.need);near(a.end-p.debt,valuation+b.issue-b.maturity-b.extra);assert.ok(a.end>=0);
  near(a.neutral.end,ledger(p,p.debt,0).end);near(a.neutral.ratio,ledger(p,p.debt,0).ratio);
  let lo=-300,hi=300;for(let k=0;k<75;k++){const PB=(lo+hi)/2;if(ledger({...p,primary:PB}).end>p.debt*(1+p.growth/100))lo=PB;else hi=PB;}const required=(lo+hi)/2;near(a.requiredPB,required);
  [p.debt,valuation,b.interest,b.end,b.ratio,b.maturity,b.issue,b.need,b.extra,required].forEach((v,i)=>near(out.metrics[i][1],v));
  out.projection.rows.slice(0,2).forEach((r,i)=>{near(r[1],b.positions[i].face);near(r[2],b.positions[i].rate);near(r[3],b.values[i]);near(r[4],b.positions[i].face*p.interest/100*b.positions[i].rate);near(r[5],b.positions[i].face*p.maturity/100*b.positions[i].rate);});
  near(out.projection.rows[2][3],v);near(out.projection.rows[2][4],b.interest);near(out.projection.rows[2][5],b.maturity);near(out.stable.rows[5][1],b.end);near(out.stable.rows[10][1],b.end);near(out.stable.rows[11][1],b.Y);
  for(const[j,s]of out.series.entries())for(const[x,y]of s.points){const ref=ledger(p,x,j===1?0:p.depreciation);near(y,j===2?ref.need:ref.ratio);points++;}
  near(out.marker[0],p.debt);near(out.marker[1],b.ratio);
 }
 assert.equal(cases.length,456);assert.equal(points,83448);t.diagnostic(JSON.stringify({balancedScenarios:456,nativeCorners:256,independentCurveValues:points}));
});
test('the seven native presets isolate currency, maturities, growth, extra cost and ratio stabilization',()=>{
 const def=run(),a=def.sovereign;near(a.end,87.2);near(a.issue,11.6);near(a.requiredPB,5);near(a.ratio,83.84615384615384);
 const large=run({maturity:40}).sovereign;near(large.end,a.end);near(large.ratio,a.ratio);near(large.issue-a.issue,25.2);
 const noShock=run({depreciation:0}),noFX=run({fx:0});near(noShock.sovereign.end,83);near(noFX.sovereign.end,83);assert.deepEqual(noShock.series[0].points,noShock.series[1].points);assert.deepEqual(noFX.series[0].points,noFX.series[1].points);
 const extra=run({contingent:5}).sovereign;near(extra.end-a.end,5);near(extra.issue-a.issue,5);near(extra.requiredPB-a.requiredPB,5);
 const growth=run({growth:-2}).sovereign;near(growth.end,a.end);near(growth.issue,a.issue);near(growth.ratio,87.2/98*100);
 const stab=run(M.models.sovereign.presets[6].values).sovereign;near(stab.end,83.2);near(stab.ratio,80);near(stab.issue,7.6);
 for(const pre of M.models.sovereign.presets){assert.deepEqual(Object.keys(pre.values).sort(),Object.keys(base).sort());for(const c of M.models.sovereign.controls){const v=pre.values[c.key];assert.ok(v>=c.min&&v<=c.max);near((v-c.min)/c.step,Math.round((v-c.min)/c.step));}run(pre.values);}
});
test('cash surpluses, zero quantities, finite bounds and genuinely unsupported asset cases are explicit',()=>{
 const out=run({debt:10,fx:0,depreciation:0,interest:0,primary:8,maturity:0,contingent:0}),a=out.sovereign;near(a.raw,-8);assert.equal(a.issue,0);near(a.extra,8);near(a.end,2);near(run({debt:10,fx:0,interest:0,primary:8,maturity:50,contingent:0}).sovereign.end,2);
 const zero=run({fx:0,depreciation:0,interest:0,primary:0,maturity:0,contingent:0});for(const i of [1,2,5,6,7,8,9])assert.equal(Object.is(zero.metrics[i][1],-0),false);assert.equal(Object.is(zero.stable.rows[3][1],-0),false);near(zero.sovereign.end,80);
 for(const p of [{debt:0},{fx:101},{depreciation:-100},{interest:-1},{growth:-100},{contingent:-1},{maturity:101},{primary:NaN},{debt:10,fx:0,primary:20}])assert.throws(()=>M.sovereignPlan({...base,...p}));
 assert.match(out.note,/keine sofortige Kuponänderung/);assert.match(out.note,/am Ende zu pari/);assert.match(out.note,/Keine Gebühren/);
});
test('all 888 figure values reconcile independently with nominal stock paths, matched currency claims and available project cash',t=>{
 let total=0;
 for(const f of blocks.filter(b=>b.kind==='figure'))for(const[j,s]of f.plot.series.entries())for(const[x,y]of s.points){assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]);assert.ok(y>=f.plot.y[0]-1e-9&&y<=f.plot.y[1]+1e-9);
  if(f.id.endsWith('debt-paths')){const[i,g,b]=[[.05,.04,.01],[.07,.02,.01],[.07,.02,.04]][j];let D=80,Y=100;for(let k=0;k<x;k++){const interest=D*i;Y*=1+g;D+=interest-b*Y;}near(y,100*D/Y);}
  else if(f.id.endsWith('interest-reset'))near(y,j===0?80*(1-x/100)*.03+80*x/100*.07:80*.07);
  else if(f.id.endsWith('maturity-needs'))near(y,j===0?83/104*100:(80*x/100+3)/104*100);
  else if(f.id.endsWith('fx-ratios')){const f=[0,.25,.6][j],home=80*(1-f),foreign=80*f*(1+x/100);near(y,(home*1.05+foreign*1.05-1)/104*100);}
  else if(f.id.endsWith('fx-assets'))near(y,j===0?20*x/100:20*x/100-20*x/100);
  else if(f.id.endsWith('project-cover'))near(y,j===0?(2*x-60-.5*x-10)/(15+25):1);
  else assert.fail('Unknown figure '+f.id);total++;
 }
 assert.equal(total,888);t.diagnostic(JSON.stringify({independentlyRecalculatedFigureValues:total}));
});
test('all worked numerical cases retain their distinct periods, cash bases and denominators',()=>{
 near(3/20,.15);near(3/8,.375);near(80+20-10,90);near(101-100-4,-3);near(20+4-1,23);
 near((.05-.04)*80,.8);near(.8/104*100,.7692307692307693);near(83/104*100,79.8076923076923);near((1.02*1.03-1)*100,5.06);
 near(60*.03+20*.07,3.2);near(8+4-1,11);near(32+4-1,35);near(80-32+35,83);
 near(60+20*1.2,84);near(.05*84,4.2);near(.1*84,8.4);near(84+4.2-1,87.2);near(8.4+4.2-1,11.6);near(87.2-80,4+11.6-8.4);
 near(.5*2.2,1.1);near(10*2.4,24);near(4*2.4,9.6);near(6*2.4,14.4);near(50-60-2+1,-11);near(10/25,.4);near(4/25,.16);near(8-(10-3-2),3);
 near((1.04/1.1-1)*100,-5.454545454545455);near(84*1.05-80*1.04,5);near(50+30*.8-70,4);
 near((2*80-(60+.5*80)-10)/(15+25),1.25);near((2*60-(60+.5*60)-10)/40,.5);near((40+70)/1.5,73.33333333333333);
});
test('all quantitative practice answers and two genuinely separate reserved transfers are independently reconciled',()=>{
 const expected={'06':'15% and 37.5%.','09':'88.','13':'+2 and −3.','14':'23.','17':'0.8.','19':'5.06%.','21':'3.2.','25':'104.','27':'8 and 48.','28':'0, 8 and 2.','31':'4.','32':'84.','33':'87.2.','34':'83.8462%.','36':'1.1.','37':'14.4.','39':'−11.','41':'3.','44':'−5.4545%.','49':'5.0.','53':'4.','54':'0.4 and 6.','56':'1.25.','57':'30.','a1':'16.84.'};for(const[id,text]of Object.entries(expected))assert.equal(answer(id),text,id);
 const p={debt:60,fx:40,depreciation:25,interest:4,growth:5,primary:2,contingent:3,maturity:20},a=ledger(p);near(a.issue,16.84);near(a.end,69.64);near(a.end-p.debt,9.64);near(a.issue-p.contingent,13.84);assert.ok(!q('a1').stem.includes('debt 80'));
 const cash=180*.8-100-20,service=12+28;near(cash/service,.6);near((180*.8-100)/service,1.1);near(cash/12,2);near(service-cash,16);assert.ok(answer('b1').startsWith('Available cash covers 60%'));
});
test('public glossary enrichments preserve general fiscal, support, debt-service and accounting meanings',()=>{
 const g=require('../finance-glossary.cjs'),find=t=>g.find(g=>[g.term,...g.aliases].includes(t));
 for(const[term,section]of [['Zahlungsfähigkeit','ability'],['Zahlungsbereitschaft','willingness'],['Fremdwährungsschuld','currency'],['Auslandsschuld','external-accounts'],['CFADS','project'],['Leistungsbilanz','external-accounts'],['Projekt-DSCR','project'],['Erwartete Staatsunterstützung','support']])assert.deepEqual(find(term).cfa,{unit:u.id,section});
 for(const[term,unit,section]of [['Primärsaldo','fiscal','stance'],['Schuldenquote','fiscal','debt-dynamics'],['SFA','fiscal','debt-dynamics'],['General Obligation','government-funding','general-obligation'],['DSCR','government-funding','project-case'],['Implizite Staatsunterstützung','government-funding','agency']])assert.deepEqual(find(term).cfa,{unit,section});
 assert.ok(find('Projekt-DSCR').contextualAliases.some(a=>a.label==='DSCR'&&a.units.includes(u.id)));assert.ok(find('Konsolidierte Staatsschuld').contextualAliases.some(a=>a.label==='Konsolidierung'&&a.units.includes(u.id)));
});
