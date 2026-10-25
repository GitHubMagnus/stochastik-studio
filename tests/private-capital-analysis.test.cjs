const {test}=require('node:test'),assert=require('node:assert/strict'),M=require('../finance-models.cjs'),data=require('../finance-cfa/compile.cjs').compile(),u=data.units.find(u=>u.id==='private-capital'),flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),bank=data.questions.filter(q=>q.unit===u.id),near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b),de=s=>Number(s.replaceAll('−','-').replaceAll('.','').replace(',','.'));
const defaults=Object.fromEntries(M.models.privatecapital.controls.map(c=>[c.key,c.value]));
function ledger(p){
 const EV=p.ebitda*p.entry,loan=EV*p.leverage/100,equity=EV-loan,rows=[],flows=[-equity];let debt=loan,paid=0,added=0,divs=0;
 for(let t=1;t<=p.years;t++){const income=p.ebitda*(1+p.growth/100)**t,cash=income*p.conversion/100,opening=debt,I=opening*p.interest/100;let account=cash-I,add=0;if(account<0){add=-account;account=0;}let repayment;if(account<debt){repayment=account;debt-=account;account=0;}else{repayment=debt;account-=debt;debt=0;}added+=add;divs+=account;paid+=repayment;rows.push([t,income,cash,I,add,repayment,debt,account,account-add]);flows.push(account-add);}
 const exit=p.ebitda*(1+p.growth/100)**p.years*p.exit,recovery=Math.min(exit,debt),sale=exit-recovery;flows[flows.length-1]+=sale;rows.at(-1)[8]+=sale;
 return {EV,equity,loan,debt,added,divs,paid,exit,recovery,sale,payout:divs+sale,contributions:equity+added,flows,rows};
}
test('three actual 2027 outcomes have substantial teaching, twenty practice questions each and separate reserved transfers',()=>{
 assert.equal(u.sections.length,35);assert.ok(blocks.map(b=>typeof b==='string'?b:b.reading||'').join(' ').length>31000);
 for(const[k,n]of [['formula',42],['example',26],['table',11],['figure',7],['disclosure',16]])assert.equal(blocks.filter(b=>b.kind===k).length,n);
 assert.equal(bank.filter(q=>q.pool==='practice').length,60);assert.equal(bank.length,64);for(const o of data.coverage.find(c=>c.id===u.id).objectives){assert.equal(o.practice.length,20);assert.ok(o.mockQuestions>=1);assert.ok(o.sections.length>=12);}
 for(const p of ['mock-a','mock-b']){assert.equal(bank.filter(q=>q.pool===p).length,2);assert.ok(data.inventory[p].alternatives>=6&&data.inventory[p].alternatives<=require('../finance-cfa/engine.cjs').blueprint.alternatives);}
 assert.equal(new Set(bank.map(q=>q.stem)).size,64);for(const q of bank){assert.equal(new Set(q.options.map(o=>o.text)).size,3);assert.ok(q.options.every(o=>o.why.length>15),q.id);}
 assert.equal(u.review.status,'draft');assert.equal(data.release,false);assert.ok(u.sources[0].url.endsWith('#page=25'));assert.equal(require('../finance-content/alternatives.cjs')[3].lab,'privatecapital');for(const id of ['corporate-credit','alternative-fees'])assert.ok(data.units.find(u=>u.id===id).related.some(r=>r.unit===u.id));
});
test('6561 independent buyout cash ledgers, 34992 annual accounts and 1062882 curve coordinates preserve all funding and payment identities',t=>{
 let cases=0,years=0,points=0;for(const ebitda of [5,10,100])for(const entry of [5,10,20])for(const growth of [-20,0,20])for(const exit of [0,12,20])for(const leverage of [0,60,80])for(const interest of [0,5,15])for(const conversion of [0,70,100])for(const horizon of [1,5,10]){
  const p={ebitda,entry,growth,exit,leverage,interest,conversion,years:horizon},v=M.privateCapitalPlan(p),o=ledger(p),r=M.calculate('privatecapital',p);
  for(const[i,x]of [o.EV,o.equity,o.debt,o.added,o.payout,o.payout/o.contributions].entries())near(r.metrics[i][1],x);near(v.e0+v.d0,v.ev0);near(v.repaymentTotal+v.bank+v.shortfall,v.d0);near(v.bank+v.sale,v.exitEV);
  for(const[i,row]of o.rows.entries()){for(const[j,z]of row.entries())near(r.stable.rows[i][j],z);near(row[2]+row[4],row[3]+row[5]+row[7]);near(v.cashflows[i+1],row[8]);years++;}near(v.cashflows[0],-o.equity);near(v.additions,o.added);near(v.dividends,o.divs);
  for(const row of r.projection.rows){const ev=p.ebitda*(1+growth/100)**horizon*row[0],rec=Math.min(ev,o.debt),sale=ev-rec,pay=o.divs+sale;for(const[i,x]of [ev,rec,sale,pay,pay/o.contributions,Math.max(o.debt-ev,0)].entries())near(row[i+1],x);}
  for(const[i,line]of r.series.entries())for(const[x,y]of line.points){near(y,i?o.contributions:o.divs+Math.max(p.ebitda*(1+growth/100)**horizon*x-o.debt,0));points++;}
  near(r.marker[0],exit);near(r.marker[1],o.payout);if(o.flows.some((x,i)=>i>0&&x>0)){assert.notEqual(v.irr,null);const terms=o.flows.map((c,t)=>c/(1+v.irr)**t),residual=terms.reduce((n,x)=>n+x,0);near(residual,0,1e-7+Math.max(...terms.map(Math.abs))*1e-11);}else assert.equal(v.irr,null);cases++;
 }assert.equal(cases,6561);assert.equal(years,34992);assert.equal(points,1062882);t.diagnostic(JSON.stringify({cases,years,points}));
});
test('all fourteen presets have valid native steps and independently checked debt, additional contributions and return outcomes',()=>{
 const expected=[
 [37.897475,0,82.102525,2.052563125,.15467378102585772],[37.897475,0,62.102525,1.552563125,.09196785365536397],[37.897475,0,42.102525,1.052563125,.01029831861269137],
 [31.9070390625,0,121.2467484375,3.0311687109375,.2483087705764807],[47.773648125,0,23.085151875,.577128796875,-.10411028887512536],[0,0,155,1.55,.10259097397878791],
 [63.42310625,0,56.57689375,2.8288446875,.2311807621475538],[53.8949,0,66.1051,1.6526275,.105694107245217],[54.47436875,0,65.52563125,1.63814078125,.10374880002496589],
 [60,15,60,60/55,.020905408393853908],[9.688429857804689,0,110.31157014219531,2.757789253554883,.10676676045795863],[0,0,148.3725,1.85465625,.13727611655291383],
 [37.897475,0,0,0,null],[76.185921875,0,43.814078125,.7302346354166666,-.06094185141998004]
 ];
 for(const[i,P]of M.models.privatecapital.presets.entries()){for(const c of M.models.privatecapital.controls){const x=P.values[c.key];assert.ok(x>=c.min&&x<=c.max);near((x-c.min)/c.step,Math.round((x-c.min)/c.step));}const v=M.privateCapitalPlan(P.values);for(const[j,x]of [v.debt,v.additions,v.payout,v.multiple,v.irr].entries())if(x===null)assert.equal(expected[i][j],null);else near(x,expected[i][j]);}
});
test('zero exit recovery, actual support, early debt retirement, cash timing and scale behave economically',()=>{
 const zero=M.privateCapitalPlan({...defaults,exit:0});near(zero.sale,0);near(zero.shortfall,zero.debt);assert.equal(zero.irr,null);assert.match(M.calculate('privatecapital',{...defaults,exit:0}).note,/Keine IRR/);assert.ok(zero.cashflows.every(c=>c<=0));
 const support=M.privateCapitalPlan({...defaults,conversion:0});near(support.contributions,55);near(support.payout,60);assert.deepEqual(support.cashflows,[-40,-3,-3,-3,-3,57]);near(support.multiple,60/55);assert.ok(Math.abs((60/55)**.2-1-support.irr)>.001);
 const early=M.privateCapitalPlan({...defaults,leverage:20,conversion:100});assert.deepEqual(early.rows.map(r=>r.debt),[11,1.5500000000000007,0,0,0]);near(early.dividends,28.3725);near(early.rows[2].repayment,1.55);near(early.rows[2].dividend,8.3725);assert.ok(Math.abs(early.multiple**.2-1-early.irr)>.001);
 const base=M.privateCapitalPlan(defaults),scaled=M.privateCapitalPlan({...defaults,ebitda:100});for(const k of ['ev0','e0','d0','debt','additions','dividends','exitEV','sale','contributions','payout'])near(scaled[k],10*base[k]);near(scaled.multiple,base.multiple);near(scaled.irr,base.irr);
 for(const key of Object.keys(defaults))for(const value of ['',null,NaN,Infinity])assert.throws(()=>M.calculate('privatecapital',{...defaults,[key]:value}));assert.throws(()=>M.calculate('privatecapital',{...defaults,years:1.5}));
});
test('all 1435 book-figure coordinates and claim allocations match their independent equations and axis ranges',()=>{
 let count=0;for(const g of blocks.filter(b=>b.kind==='figure'))for(const[i,line]of g.plot.series.entries())for(const[x,y]of line.points){let z;
  if(g.id.endsWith('-funding-dilution'))z=100*80/(80+x);
  else if(g.id.endsWith('-preferred-exit')){const pref=x<20?x:(.2*x>20?.2*x:20);z=i?x-pref:pref;}
  else if(g.id.endsWith('-exit-equity'))z=Math.max(x-(i?40:60),0);
  else if(g.id.endsWith('-debt-path')){let debt=60;const r=[0,.05,.1][i];for(let t=1;t<=x;t++)debt-=Math.min(debt,Math.max(7-r*debt,0));z=debt;}
  else if(g.id.endsWith('-claim-waterfall')){let remaining=x;const senior=Math.min(remaining,80);remaining-=senior;const junior=Math.min(remaining,40);remaining-=junior;z=[senior,junior,remaining][i];near(senior+junior+remaining,x);}
  else if(g.id.endsWith('-pik-claim'))z=i?100:100*1.1**x;
  else if(g.id.endsWith('-correlation-risk'))z=i?20:Math.sqrt(.25*20**2+.25*30**2+.5*x*20*30);
  else assert.fail('unreviewed graph '+g.id);near(y,z);assert.ok(x>=g.plot.x[0]-1e-8&&x<=g.plot.x[1]+1e-8);assert.ok(y>=g.plot.y[0]-1e-8&&y<=g.plot.y[1]+1e-8);count++;
 }assert.equal(count,1435);
});
test('all thirty-six numerical answers, including actual withheld transfers, use separately computed results',()=>{
 let debt=57.6;for(let t=0;t<3;t++)debt=debt*(1+.06)-9;
 const refs={'04':6/.5,'05':100*20/100,'07':100*.8*150/200,'08':20,'09':40,'10':150/100,'11':150*.06,'13':100-60,'14':100*(2**.2-1),'15':60-40,'16':120*.12*8,'17':60-(7-.05*60),'19':20+100-60,'22':8,'23':6,'25':100-80,'26':100*20/40,'29':60*.06+40*.1,'32':10*(5-2),'33':100*1.1**2,'35':100*((60/40)**.5-1),'36':100*((20/40)**.5-1),'37':.6*60/1.1**2+.4*20/1.1**4,'39':12/6,'42':100*(40+20*.5)/60,'43':Math.sqrt(385),'44':Math.sqrt(565),'45':(400-325)/300,'47':5,'49':1.2,'51':20,'53':100*40/(40+30),'exam-a1':100*.75*120/160,'exam-a2':100*((50/30)**.25-1),'exam-b1':108-debt,'exam-b2':58};
 const numeric=q=>q.options.every(o=>/^[-]?\d+(?:\.\d+)?%?\.$/.test(o.text));assert.equal(bank.filter(numeric).length,36);assert.equal(Object.keys(refs).length,36);
 for(const[id,x]of Object.entries(refs)){const q=bank.find(q=>q.id==='pca-'+id),s=q.options[q.correct].text.replace(/%?\.$/,''),dec=s.split('.')[1]?.length||0;near(Number(s),x,.5001*10**-dec+1e-8);}
});
test('the annual cash tables, preference choices, operating value bridge and recovery timing reconcile',()=>{
 const ex=title=>blocks.find(b=>b.kind==='example'&&b.title===title),table=title=>ex(title).steps.find(b=>b.kind==='table');
 let d=60;for(const row of table('Sieben Cash-WE und fünf Prozent Zins führen zu zunehmender Tilgung').rows){near(de(row[1]),d);near(de(row[2]),7);near(de(row[3]),d*.05);near(de(row[4]),7-d*.05);d-=de(row[4]);near(de(row[5]),d);}near(d,37.897475);
 d=20;let divs=0;for(const row of table('Nach früher Entschuldung folgen laufende Dividenden').rows){const I=.05*d,rep=Math.min(d,10-I),div=10-I-rep;near(de(row[1]),I);near(de(row[2]),rep);near(de(row[3]),div);d-=rep;near(de(row[4]),d);divs+=div;}near(divs+120,148.3725);
 for(const r of table('Nicht teilnehmender Vorzug mit Umwandlungswahlrecht').rows){const V=de(r[0]),pay=de(r[1]);near(pay,Math.max(Math.min(V,20),.2*V));near(pay+de(r[2]),V);}
 near((120-40)-(100-60),(120-100)+(60-40));near(120*.12*8,115.2);near(.6*60/1.1**2+.4*20/1.1**4,35.21617375862304);
 near((.8*100+1.6*100)/200,1.2);near((Math.sqrt(385)/100)**2,.0385);near((70/100)**.5-1,-.16333997346592444);
});
test('private-capital dictionary contexts preserve earlier ownership, PIK and CLO meanings',()=>{
 const g=require('../finance-glossary.cjs'),entries=require('../finance-cfa/glossary.cjs').filter(e=>e.cfa.unit===u.id);assert.equal(entries.length,29);for(const e of entries){assert.ok(g.some(x=>[x.term,...x.aliases].includes(e.term)),e.term);assert.ok(u.sections.some(s=>s.id===e.cfa.section));}
 for(const[t,unit]of [['Venture Capital','equity-features'],['Growth Equity','equity-features'],['Leveraged Buyout','issuer-forms'],['Pre-Money-Bewertung','issuer-forms'],['Payment-in-Kind','bond-cashflows'],['CLO-Mezzanine','abs']])assert.equal(g.find(e=>e.term===t).cfa.unit,unit);
 for(const[label,target]of [['Venture Capital','Venture-Finanzierung'],['Growth Equity','Wachstumsbeteiligung'],['PIK','PIK-Forderung'],['Mezzanine','Mezzanine-Finanzierung']])assert.ok(entries.find(e=>e.term===target).contextualAliases.some(a=>a.label===label&&a.units.includes(u.id)));
});
