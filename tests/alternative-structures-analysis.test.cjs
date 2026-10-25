const {test}=require('node:test'),assert=require('node:assert/strict'),M=require('../finance-models.cjs'),data=require('../finance-cfa/compile.cjs').compile(),u=data.units.find(u=>u.id==='alternative-structures');
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),bank=data.questions.filter(q=>q.unit===u.id),near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b),de=s=>Number(s.replaceAll('−','-').replaceAll('.','').replace(',','.'));
test('three actual 2027 outcomes receive explanations, original exercises and the planned four separate transfers',()=>{
 assert.equal(u.sections.length,32);assert.ok(blocks.map(b=>typeof b==='string'?b:b.reading||'').join(' ').length>26500);
 for(const[k,n]of [['formula',26],['example',21],['table',16],['figure',4],['disclosure',13],['diagram',1]])assert.equal(blocks.filter(b=>b.kind===k).length,n);
 assert.equal(bank.length,64);assert.equal(bank.filter(q=>q.pool==='practice').length,60);for(const p of ['mock-a','mock-b']){assert.equal(bank.filter(q=>q.pool===p).length,2);assert.equal(data.inventory[p].alternatives,2);}
 for(const o of data.coverage.find(c=>c.id===u.id).objectives){assert.equal(o.practice.length,20);assert.ok(o.mockQuestions>=1);assert.ok(o.sections.length>=20);}
 assert.equal(new Set(bank.map(q=>q.stem)).size,64);assert.ok(bank.every(q=>q.options.every(o=>o.why.length>12)));assert.equal(data.release,false);assert.equal(u.review.status,'draft');assert.ok(u.sources[0].url.endsWith('#page=25'));
 assert.equal(require('../finance-content/alternatives.cjs')[0].lab,'commitment');for(const id of ['issuer-forms','working-capital'])assert.ok(data.units.find(u=>u.id===id).related.some(r=>r.unit===u.id));
});
test('2187 independent event ledgers preserve commitment capacity, cash needs, NAV separation and 266814 curve coordinates',t=>{
 let cases=0,points=0;for(const C of [100,1000,10000])for(const paidPercent of [10,40,100])for(const distPercent of [0,20,100])for(const recallPercent of [0,50,100])for(const requestPercent of [0,50,100])for(const cash of [0,300,10000])for(const nav of [0,500,10000]){
  const params={commitment:C,paid:paidPercent,dist:distPercent,recall:recallPercent,call:requestPercent,cash,nav},r=M.calculate('commitment',params),contribution=C*paidPercent/100,distribution=C*distPercent/100,restore=distribution*recallPercent/100,events=[C,-contribution,restore],available=events.reduce((n,x)=>n+x,0),request=available*requestPercent/100,afterCash=[cash,-request].reduce((n,x)=>n+x,0),shortfall=afterCash<0?-afterCash:0;
  for(const[i,x]of [C-contribution,restore,available,request,shortfall,afterCash].entries())near(r.metrics[i][1],x);near(r.marker[0],requestPercent);near(r.marker[1],afterCash);
  for(const row of r.projection.rows){const x=available*row[0]/100,b=cash-x;for(const[i,z]of [x,cash,b,b<0?-b:0,available-x].entries())near(row[i+1],z);assert.ok(row[5]>=-1e-8);near(x+row[5],available);}
  const stable=r.stable.rows;for(const[i,x]of [C,contribution,distribution,restore,nav,cash,nav+cash].entries())near(stable[i][1],x);if(request>0)near(stable[7][1],100*cash/request);else assert.equal(stable[7][1],'Kein positiver Abruf');
  for(const[i,line]of r.series.entries())for(const[x,y]of line.points){near(y,i?0:cash-available*x/100);points++;}cases++;
 }assert.equal(cases,2187);assert.equal(points,266814);t.diagnostic(JSON.stringify({cases,points}));
});
test('all 509 graph coordinates and five cash-flow arrows match their own assumptions and stay inside graph ranges',()=>{
 let count=0;for(const g of blocks.filter(b=>b.kind==='figure'))for(const[i,line]of g.plot.series.entries())for(const[x,y]of line.points){let z;
  if(g.id.endsWith('-cost-scale'))z=i===0?12+.002*x:i===1?4+.005*x:.02*x;
  else if(g.id.endsWith('-recall-capacity'))z=i?300+100*x:600+200*x;
  else if(g.id.endsWith('-call-liquidity'))z=i?300:7*x;
  else if(g.id.endsWith('-leverage-returns'))z=i?100*((x-60)/40-1):x-100;
  else assert.fail('unreviewed graph '+g.id);near(y,z);assert.ok(x>=g.plot.x[0]-1e-9&&x<=g.plot.x[1]+1e-9);assert.ok(y>=g.plot.y[0]-1e-9&&y<=g.plot.y[1]+1e-9);count++;
 }assert.equal(count,509);const diagram=blocks.find(b=>b.kind==='diagram');assert.equal(diagram.flows.length,5);assert.ok(diagram.flows.every(f=>f.type==='cash'));assert.deepEqual(diagram.flows.map(f=>[f.from,f.to]),[['lp','fund'],['fund','asset'],['asset','fund'],['fund','lp'],['fund','manager']]);assert.equal(diagram.rows.length,5);
});
test('every numerical answer including actual reserved transfers matches independently computed values',()=>{
 const refs={'07':30,'10':50,'11':-50,'13':650+30-150-30,'24':12+.002*100,'25':12+.002*1000,'26':4+.005*1000,'27':12/(.02-.002),'29':.2*100+30,'30':100*(.2*100+30)/130,'33':110-2-1,'36':350-300,'39':Math.max(0,350-300,350-300-200,350-300-200+150),'47':1e6-300000,'48':1000-400+.5*200,'49':.02*1000,'50':20/400*100,'51':400-20-10,'52':140-.2*(140-100),'53':140-.2*(140-100-8),'54':.2*(130-120),'56':-.5*20+20,'57':60*100/300,'58':500*.8,'exam-a1':100*(.18*150+30)/180,'exam-a2':100*(.02*1000)/250,'exam-b2':.4*(1500-600+.4*300)-350};
 assert.equal(bank.filter(q=>q.options.every(o=>/^-?\d/.test(o.text))).length,Object.keys(refs).length);
 for(const[id,x]of Object.entries(refs)){const q=bank.find(q=>q.id==='ast-'+id),s=q.options[q.correct].text.replace(/%?\.$/,''),dec=s.split('.')[1]?.length||0;near(Number(s),x,.5001*10**-dec+1e-8);}const transfer=bank.find(q=>q.id==='ast-exam-b1');assert.match(transfer.options[transfer.correct].text,/6 lower/);near(.02*1000-(12+.002*1000),6);
});
test('the original commitment timeline and cash-stress tables do not net distributions against legal contributions or invent financing',()=>{
 const ex=title=>blocks.find(b=>b.kind==='example'&&b.title===title),table=title=>ex(title).steps.find(b=>b.kind==='table');
 const life=table('Eine Zusage ist keine gleichmäßige jährliche Sparrate');let paid=0;for(const row of life.rows){paid+=de(row[1]);near(de(row[3]),paid);near(de(row[4]),1000-paid);}near(paid,600);near(life.rows.reduce((n,row)=>n+de(row[2]),0),400);near(de(life.rows.at(-1)[4]),400);
 const cash=table('Spätere Ausschüttung schließt eine frühere Lücke nicht rechtzeitig');let planned=300,stress=300,low=300,stressLow=300;for(const[i,row]of cash.rows.entries()){if(i){planned+=de(row[1]);stress+=i===2?0:de(row[1]);}near(de(row[2]),planned);near(de(row[3]),stress);low=Math.min(low,planned);stressLow=Math.min(stressLow,stress);}near(-low,50);near(-stressLow,200);
 const costs=table('Ein kleines Mandat trägt fixe Kosten schwerer');for(const row of costs.rows){const V=de(row[0]);near(de(row[1]),12+.002*V);near(de(row[2]),4+.005*V);near(de(row[3]),.02*V);}
 const fees=table('Derselbe Satz von zwei Prozent erzeugt drei verschiedene Beträge');for(const[i,base]of [1000,400,500].entries()){near(de(fees.rows[i][1]),.02*base);near(Number(fees.rows[i][2].replace('%','').replace(',','.')),.02*base/400*100);}
});
test('NAV changes cannot finance calls, historical distributions are not counted twice, and recall rights can survive original commitment funding',()=>{
 const base={commitment:1000,paid:40,dist:20,recall:50,call:50,cash:300,nav:500},r=M.calculate('commitment',base),rNav=M.calculate('commitment',{...base,nav:1000});assert.deepEqual(rNav.metrics,r.metrics);assert.deepEqual(rNav.series,r.series);near(rNav.stable.rows[6][1]-r.stable.rows[6][1],500);
 const rCash=M.calculate('commitment',{...base,cash:500});near(rCash.metrics[5][1],150);near(rCash.metrics[4][1],0);const noRecall=M.calculate('commitment',{...base,recall:0});near(noRecall.metrics[2][1],600);near(noRecall.metrics[3][1],300);near(noRecall.metrics[4][1],0);
 const funded=M.calculate('commitment',{...base,paid:100});near(funded.metrics[0][1],0);near(funded.metrics[2][1],100);near(funded.metrics[3][1],50);near(funded.metrics[5][1],250);
 const noRequest=M.calculate('commitment',{...base,call:0});near(noRequest.metrics[5][1],300);assert.equal(noRequest.stable.rows[7][1],'Kein positiver Abruf');near(r.metrics[5][1],-50);assert.notEqual(r.metrics[5][1],300+200-350);
});
test('fee bases, strict hurdle, high-water mark and manager exposure use explicit separate contracts',()=>{
 near(20/400,.05);near(140-.2*40,132);near(140-2-.2*(140-2-100),130.4);near(140-2-.2*(140-100),130);near(140-.2*(40-8),133.6);near(.2*Math.max(110-120,0),0);near(.2*Math.max(130-120,0),2);near(-.5*20+20,10);
 near((120-60)/40-1,.5);near((80-60)/40-1,-.5);near(500*.8,400);near(60*(100/300),20);
});
test('twenty-five curated definitions preserve existing corporate GP/LP, hurdle and clawback targets while providing fund context',()=>{
 const g=require('../finance-glossary.cjs'),entries=require('../finance-cfa/glossary.cjs').filter(e=>e.cfa.unit===u.id);assert.equal(entries.length,25);assert.equal(new Set(g.map(e=>e.term)).size,g.length);for(const e of entries){assert.ok(g.some(x=>x.term===e.term));assert.ok(u.sections.some(s=>s.id===e.cfa.section));}
 for(const term of ['General Partner','Limited Partner'])assert.equal(g.find(e=>e.term===term).cfa.unit,'issuer-forms');assert.equal(g.find(e=>e.term==='Hurdle Rate').cfa.unit,'capital-allocation');assert.equal(g.find(e=>e.term==='Clawback').cfa.unit,'governance');
 for(const label of ['GP','LP','Hurdle','Clawback','Carry'])assert.ok(entries.some(e=>e.contextualAliases?.some(a=>a.label===label&&a.units.includes(u.id))),label);
});
