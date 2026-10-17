const {test}=require('node:test'),assert=require('node:assert/strict');
const d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(u=>u.id==='corporate-funding'),M=require('../finance-models.cjs');
const near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b),sec=id=>u.sections.find(s=>s.id===id);
const base={size:100,haircut:5,rate:4,days:30,shock:-2,marginhaircut:5},run=p=>M.calculate('repofunding',{...base,...p});
const numeric=s=>Number(String(s).replaceAll('.','').replace(',','.').replace('−','-').match(/-?\d+(?:\.\d+)?/)?.[0]);
test('corporate funding addresses all three actual 2027 objectives with distinct original practice and reserved cases',()=>{
 assert.equal(u.sections.length,33);assert.equal(u.review.status,'draft');assert.equal(d.release,false);
 assert.match(u.sources[0].url,/#page=20$/);const qs=d.questions.filter(q=>q.unit===u.id);assert.equal(qs.filter(q=>q.pool==='practice').length,50);
 const coverage=d.coverage.find(c=>c.id===u.id);for(const o of coverage.objectives){assert.ok(o.sections.length>=10,o.id);assert.ok(o.practice.length>=10,o.id);assert.equal(o.mockQuestions,2);}
 for(const pool of ['mock-a','mock-b']){assert.equal(qs.filter(q=>q.pool===pool).length,1);assert.ok(d.inventory[pool].bonds<=require('../finance-cfa/engine.cjs').blueprint.bonds);}
 for(const id of ['working-capital','bond-features','bond-cashflows','bond-trading','capital-structure'])assert.ok(d.units.find(x=>x.id===id).related.some(r=>r.unit===u.id));
 assert.equal(u.explorations[0].lesson,'bonds-02');assert.equal(require('../finance-content/bonds.cjs')[1].lab,'repofunding');
});
test('bank and CP costs reconcile net initial resources with net end payments and explicit quote denominators',()=>{
 const bankStart=10000000-1000000-50000,bankEnd=10000000+10000000*.06*90/360-1000000;
 near(bankStart,8950000);near(bankEnd,9150000);near((bankEnd/bankStart-1)*400,8.93854748603352);
 const bankFormula=sec('bank-cost').blocks.find(b=>b.kind==='formula');assert.match(bankFormula.tex,/Z_T\+G_T\+G_0/);
 const cpNet=20000000*(1-.05*90/360)-20000;near(cpNet,19730000);near((20000000/cpNet-1)*400,5.473897617840852);
 near((20000000/19750000-1)*400,5.063291139240507);near(2-8-12+26,8);near(50-8-35,7);near(100-20-30-40,10);
});
test('rollover and maturity comparisons use their own full period cash bases rather than unfinanced interest or average debt',()=>{
 const rows=sec('rollover').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 for(const row of rows){const r=numeric(row[0])/100;near(numeric(row[1]),10*1.02*(1+r/2),.0000001);}
 near(2*(10.5/10.2-1)*100,5.882352941176472);near(70-20-10,40);near(Math.max(25-20-10,0),0);
 near((103-100)/(8-7),3);assert.ok(sec('callable').blocks.some(b=>typeof b==='string'||b.kind==='example'));
});
test('729 repo cash-and-security ledgers including all 64 control corners conserve payments and distinguish margin from unsecured principal',()=>{
 let count=0;
 for(const size of [10,100,500])for(const haircut of [0,5,40])for(const rate of [0,4,15])for(const days of [1,30,360])for(const shock of [-50,-2,20])for(const marginhaircut of [0,5,50]){
  count++;const r=run({size,haircut,rate,days,shock,marginhaircut}),initialValue=size*1e6;
  const haircutValue=initialValue*haircut/100,cash=initialValue-haircutValue,interest=cash*rate/100*days/360,current=initialValue+initialValue*shock/100;
  const required=cash*100/(100-marginhaircut),signed=required-current,gap=cash>current?cash-current:0,im=initialValue/cash*100;
  [cash/1e6,interest/1e6,(cash+interest)/1e6,signed/1e6,gap/1e6,im].forEach((v,i)=>near(r.metrics[i][1],v));
  near((current+signed)*(1-marginhaircut/100),cash,.000001);near(r.repo.cash+r.repo.interest,r.repo.repurchase);
  assert.equal(r.stable.rows.length,3);for(const row of r.stable.rows)near(row[1]+row[2],0);
  near(r.stable.rows[0][1]+r.stable.rows[1][1],-interest/1e6);
  assert.equal(r.points.length,71);for(const[s,y]of r.points)near(y,(required-(initialValue+initialValue*s/100))/1e6);
  near(r.marker[1],signed/1e6);assert.ok(r.metrics.flatMap(m=>m.slice(1)).every(Number.isFinite));
 }assert.equal(count,729);
 for(const p of [{size:0},{haircut:100},{haircut:-1},{rate:-1},{days:0},{shock:-100},{marginhaircut:100},{marginhaircut:-1},{size:NaN},{rate:Infinity}])assert.throws(()=>M.repoFundingPlan({...base,...p}));
});
test('repo presets expose signed release, price stress and haircut stress while rates and days affect interest rather than the stated principal-only margin',()=>{
 const r=run();near(r.repo.cash,95);near(r.repo.interest,19/60);near(r.repo.repurchase,95+19/60);near(r.repo.margin,2);near(r.repo.uncovered,0);near(r.repo.initialMargin,100/95*100);
 const stress=run({shock:-15});near(stress.repo.margin,15);near(stress.repo.uncovered,10);near(stress.repo.cash,95);
 const higher=run({marginhaircut:10});near(higher.repo.margin,95/.9-98);near(higher.repo.cash,95);near(higher.repo.interest,r.repo.interest);
 const release=run({shock:5});near(release.repo.margin,-5);near(release.repo.uncovered,0);
 for(const p of [{rate:0},{rate:15},{days:360}])near(run(p).repo.margin,2);
 const newLoan=run({haircut:10,marginhaircut:10});near(newLoan.repo.cash,90);near(newLoan.repo.interest,.3);near(newLoan.repo.margin,2);
 assert.equal(M.models.repofunding.presets.length,4);near(1-1/1.05,1/21);
});
test('all 266 plotted values independently show haircut funding, margin targets and controlled benchmark comparisons',()=>{
 let count=0;
 for(const f of u.sections.flatMap(s=>s.blocks.filter(b=>b.kind==='figure')))for(const[i,s]of f.plot.series.entries())for(const[x,y]of s.points){
  count++;assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]);assert.ok(y>=f.plot.y[0]&&y<=f.plot.y[1]);
  if(f.id.endsWith('repo-haircut-cash'))near(y,i?100*x/100:100*(1-x/100));
  else if(f.id.endsWith('repo-margin-vs-gap'))near(y,Math.max((i?95:100)-x,0));
  else if(f.id.endsWith('corporate-benchmark-yield'))near(y,x+(i?5:1));
  else assert.fail(f.id);
 }assert.equal(count,266);
 const rows=sec('comparison').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 near(numeric(rows[0][2]),90*.05*30/360+.03);near(numeric(rows[1][2]),90.36-90);near(numeric(rows[2][2]),90*.04*30/360);
 near(90/.95,94.73684210526316);near(90*.95,85.5);
});
test('credit and reserved integrated cases retain distinct promised yields, cash gaps, margin requirements and existing coupons',()=>{
 const rows=sec('yield-shocks').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 for(const row of rows){near(numeric(row[1])+numeric(row[2]),numeric(row[3]));near(numeric(row[1])+numeric(row[4]),numeric(row[5]));}
 near(.9*100+.1*40,94);near((94/90-1)*100,4.444444444444444);near((100/90-1)*100,11.11111111111111);
 const a=d.questions.find(q=>q.id==='cfu-a1'),b=d.questions.find(q=>q.id==='cfu-b1');
 const cash=50-50*.1;near(cash,45);near(55-5-cash,5);assert.match(a.options[a.correct].text,/45 million.*5 million.*8%/);
 near(45-10-15,20);near(76/.9-72,12.444444444444443);near(100*.06,6);assert.match(b.options[b.correct].text,/20 million.*12\.444444.*6 million/);
});
test('context-specific repo meanings preserve the existing derivative margin, equity spread and original CP definitions',()=>{
 const g=require('../finance-glossary.cjs'),find=w=>g.find(e=>[e.term,...e.aliases].some(t=>t.toLowerCase()===w.toLowerCase()));
 for(const[w,section]of [['Repo','repo-legs'],['Reverse Repo','repo-terms'],['Haircut','haircut'],['Repo Initial Margin','initial-margin'],['Cash Overcollateralization','initial-margin'],['Repo Margin Call','margin-call'],['Repo Collateral','repo-risks'],['Corporate CP','cp'],['CP Discount Rate','cp-cost'],['Credit Line','lines'],['Committed Facility','lines'],['Uncommitted Facility','lines'],['Revolver','lines'],['Backup Facility','backup'],['Incremental Compensating Balance','bank-cost'],['Funding Rollover','rollover'],['Demand Deposit','deposits'],['Time Deposit','deposits'],['Negotiable CD','deposits'],['Interbank Funding','fi-map'],['Retail Funding','deposits'],['Wholesale Funding','deposits'],['Unencumbered Collateral','liquidity-ladder'],['Funding Liquidity','liquidity-ladder'],['Wrong-Way Risk','wrong-way'],['Tri-party Repo','triparty'],['Tri-party Agent','triparty'],['Overnight Repo','repo-terms'],['Term Repo','repo-terms'],['Open Repo','repo-terms'],['Funding Yield Spread','yield-parts'],['Maturity Wall','maturity-wall'],['Liquidity Spiral','spiral'],['Repo Close-out','repo-risks']])assert.deepEqual(find(w)?.cfa,{unit:u.id,section},w);
 assert.equal(find('Initial Margin').term,'Margin');assert.equal(find('Spread').cfa.unit,'equity-trading');assert.equal(find('Commercial Paper').cfa.unit,'working-capital');
 assert.equal(find('Compensating Balance').cfa.unit,'working-capital');assert.equal(find('Collateral').term,'Sicherheit');assert.equal(find('Rollover').term,'Roll-over');assert.equal(find('Close-out').term,'Close-out');
});
