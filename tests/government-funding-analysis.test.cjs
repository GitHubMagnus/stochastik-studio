const {test}=require('node:test'),assert=require('node:assert/strict');
const d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(u=>u.id==='government-funding');
const sec=id=>u.sections.find(s=>s.id===id),near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b);
const num=s=>Number(String(s).replaceAll('.','').replace(',','.').replace('−','-').match(/-?\d+(?:\.\d+)?/)?.[0]);
test('public funding addresses both actual 2027 objectives with original questions and preserves existing question identifiers and the repo model',()=>{
 assert.equal(u.sections.length,31);assert.equal(u.review.status,'draft');assert.equal(d.release,false);
 assert.match(u.sources[0].url,/#page=20$/);assert.ok(u.sources.some(s=>s.title.includes('1. April 2026')));
 const qs=d.questions.filter(q=>q.unit===u.id);assert.equal(qs.filter(q=>q.pool==='practice').length,46);assert.ok(qs.every(q=>q.id.startsWith('gfu-')));
 for(const o of d.coverage.find(c=>c.id===u.id).objectives){assert.ok(o.sections.length>=15);assert.ok(o.practice.length>=20);assert.equal(o.mockQuestions,2);}
 for(const pool of ['mock-a','mock-b']){assert.equal(qs.filter(q=>q.pool===pool).length,1);assert.ok(d.inventory[pool].bonds<=require('../finance-cfa/engine.cjs').blueprint.bonds);}
 assert.equal(d.questions.find(q=>q.id==='gov-01').unit,'governance');assert.equal(require('../finance-content/bonds.cjs')[1].lab,'repofunding');assert.equal(Object.keys(require('../finance-models.cjs').models).length,46);
 for(const id of ['fiscal','monetary','bond-trading','corporate-funding','bond-features','bond-cashflows'])assert.ok(d.units.find(x=>x.id===id).related.some(r=>r.unit===u.id));
});
test('printed gross and net funding reconcile household cash needs, old redemptions, reserve use, issue price and fees',()=>{
 const rows=sec('gross-net').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 for(const row of rows){const[m,b,change]=row.map(num);near(b-m,change);near(b,12+3+m);near(change,15);}
 const receipts=100,noninterest=108,interest=4,maturity=30,reserveGrowth=3;
 const deficit=noninterest+interest-receipts,cash=deficit+maturity+reserveGrowth,newFace=(cash+.3)/.99;
 near(deficit,12);near(cash,45);near(newFace,45.75757575757576);near(newFace*.99-.3-maturity-(noninterest+interest-receipts),reserveGrowth);
 near(newFace-maturity,15.757575757575758);near(deficit+maturity-3,39);
 assert.match(sec('cash-need').blocks.find(b=>b.kind==='formula').tex,/D_t\+M_t\+\\Delta K_t/);
});
test('maturity table and all eighteen cumulative redemption points preserve each discrete year-end payment without interpolated principal',()=>{
 const rows=sec('maturity').blocks.find(b=>b.kind==='table').rows;
 const f=sec('maturity').blocks.find(b=>b.kind==='figure');
 rows.forEach((row,i)=>{const repayments=row.slice(1).map(num);near(repayments.reduce((a,b)=>a+b,0),100);let total=0;const expected=[[0,0]];repayments.forEach((payment,k)=>{expected.push([k+1,total]);total+=payment;expected.push([k+1,total]);});assert.deepEqual(f.plot.series[i].points,expected);});
 near(100*(.02+4*.06),26);near(100*5*.04,20);near(100*.02*5,10);
});
test('every one of 212 figure points agrees with its cash, discrete redemption, project or actual submitted-bid interpretation',()=>{
 let count=0;
 for(const f of u.sections.flatMap(s=>s.blocks.filter(b=>b.kind==='figure')))for(const[i,s]of f.plot.series.entries())for(const[k,[x,y]]of s.points.entries()){
  count++;assert.ok(x>=f.plot.x[0]&&x<=f.plot.x[1]);assert.ok(y>=f.plot.y[0]&&y<=f.plot.y[1]);
  if(f.id.endsWith('government-gross-net'))near(y,i?15:12+x+3);
  else if(f.id.endsWith('government-redemption-path')){const row=sec('maturity').blocks.find(b=>b.kind==='table').rows[i],completed=k%2===0?x:Math.max(x-1,0);near(y,row.slice(1,1+completed).map(num).reduce((a,b)=>a+b,0));}
  else if(f.id.endsWith('government-project-cover'))near(y,i?1:(x-60)/(8+12));
  else if(f.id.endsWith('government-auction-demand')){if(i){near(x,90);assert.ok(y===99||y===101);}else{assert.ok([0,30,70,120,140].includes(x));assert.ok([100.5,100.2,99.8,99.5].includes(y));}}
  else assert.fail(f.id);
 }assert.equal(count,212);
 const steps=sec('allocation').blocks.find(b=>b.kind==='figure').plot.series[0].points;
 assert.deepEqual(steps,[[0,100.5],[30,100.5],[30,100.2],[70,100.2],[70,99.8],[120,99.8],[120,99.5],[140,99.5]]);
});
test('auction allocations, discriminatory and uniform cash, NC averaging and both cover denominators reconcile to the submitted table',()=>{
 const rows=sec('allocation').blocks.find(b=>b.kind==='example').steps.find(b=>b.kind==='table').rows;
 const nc=num(rows[0][1]),supply=100,bids=rows.slice(1).map(r=>({q:num(r[1]),p:num(r[2]),printed:num(r[3])}));let left=supply-nc,competitiveCash=0,competitiveAllocated=0;
 for(const bid of bids){const fill=Math.min(left,bid.q);near(fill,bid.printed);left-=fill;competitiveCash+=fill*bid.p/100;competitiveAllocated+=fill;}
 near(left,0);near(competitiveAllocated,90);near(competitiveCash,90.19);near(rows.reduce((n,r)=>n+num(r[3]),0),100);
 const cutoff=bids.filter(b=>b.printed>0).at(-1).p,average=competitiveCash/competitiveAllocated*100;
 near(cutoff,99.8);near(average,100.21111111111111);
 const uniform=supply*cutoff/100,multiple=competitiveCash+nc*average/100;
 near(uniform,99.8);near(multiple,100.21111111111111);near(multiple-uniform,.4111111111111114);
 near((nc+bids.reduce((n,b)=>n+b.q,0))/supply,1.5);near(bids.reduce((n,b)=>n+b.q,0)/(supply-nc),14/9);near(20/50,.4);
});
test('project coverage, partial guarantee, foreign-currency cash, real purchasing power and reopening do not invent payment rights',()=>{
 const ds=(revenue,cost,interest,principal)=>(revenue-cost)/(interest+principal);
 near(ds(100,60,8,12),2);near(ds(70,60,8,12),.5);near(ds(80,60,8,12),1);near((40-10)/40,.75);
 const unpaid=100-40,guarantee=Math.min(.5*unpaid,30);near(guarantee,30);near(40+guarantee,70);near(unpaid-guarantee,30);
 near((100*1.1/(100*.9)-1)*100,22.222222222222232);near(100/1.05**2,90.70294784580499);
 near(100*(98.5+1.2)/100,99.7);near((200+100)*.04,12);near((.034-.03)*10000,40);
 near(5e6*(100.02-99.98)/100,2000,.000001);near(5e6*(100.1-99.9)/100,10000,.000001);
 assert.match(sec('supranational').blocks.join(' '),/keine Schuldverpflichtung einer Regierung/);assert.match(sec('formats').blocks.find(b=>b.kind==='example').steps.join(' '),/Bieter ihre Strategie ändern/);
});
test('reserved public cases require both funding-source and market-procedure reasoning with novel numbers',()=>{
 const a=d.questions.find(q=>q.id==='gfu-a1'),b=d.questions.find(q=>q.id==='gfu-b1');
 near((215-200+5+60+2+.4)/.98,84.08163265306122);assert.match(a.options[a.correct].text,/84\.081633.*does not.*prohibit/);
 const remaining=80-8-20-40;near(remaining,12);near(80*99/100,79.2);near((70-40)/20,1.5);
 assert.match(b.options[b.correct].text,/79\.2.*1\.5.*no additional/);assert.equal(a.objectives.length,2);assert.equal(b.objectives.length,2);
});
test('new public-sector definitions have precise returns and preserve existing fiscal, FX, covenant and bond-index terms',()=>{
 const g=require('../finance-glossary.cjs'),find=w=>g.find(e=>[e.term,...e.aliases].some(s=>s.toLowerCase()===w.toLowerCase()));
 for(const[w,section]of [['Public-Sector Funding','map'],['Cash Primary Deficit','cash-need'],['Overall Cash Deficit','cash-need'],['Gross Financing Need','gross-net'],['Net Face-Value Debt Increase','gross-net'],['Cash Reserve Change','cash-need'],['Maturity Profile','maturity'],['General Obligation','general-obligation'],['Revenue Bonds','revenue'],['DSCR','project-case'],['Conduit Financing','conduit'],['Official Statement','general-obligation'],['Quasi-Government Issuer','agency'],['Explicit Government Guarantee','guarantee'],['Implicit Government Support','agency'],['Partial Guarantee','guarantee'],['Supranational Funding','supranational'],['Callable Capital','supranational'],['Paid-in Capital','supranational'],['Primary Dealer','dealers'],['GEMM','dealers'],['Competitive Bid','auction-rules'],['Noncompetitive Bid','auction-rules'],['Uniform Price','formats'],['Multiple Price','formats'],['Auction Cutoff Price','allocation'],['Marginal Allocation','allocation'],['Bid-to-Cover','cover'],['Reopening','reopening'],['Syndication','syndication'],['Gilt Tender','issuance'],['Reverse Auction','secondary'],['Switch Auction','secondary'],['Non-Recourse','conduit']])assert.deepEqual(find(w)?.cfa,{unit:u.id,section},w);
 assert.equal(find('Primärdefizit').term,'Primärsaldo');assert.equal(find('Primärdefizit').cfa.unit,'fiscal');assert.equal(find('Bid').cfa.unit,'fx-calculation');
 assert.equal(find('Spread').cfa.unit,'equity-trading');assert.equal(find('Uniform-Price Auction').cfa.unit,'bond-trading');assert.equal(find('Obligor').cfa.unit,'bond-features');
 for(const w of ['Government Bill','Treasury Note','Gilt'])assert.deepEqual(find(w).cfa,{unit:u.id,section:'instruments'});
 assert.deepEqual(find('Local-Currency Funding').cfa,{unit:u.id,section:'currency'});
 assert.deepEqual(find('Bond').cfa,{unit:'bond-features',section:'claim'});assert.equal(find('Bonds').term,'Anleihe');
 for(const w of ['Notes','Bills','Local Currency'])assert.equal(find(w),undefined,'context-only label must not acquire an unrelated global default: '+w);
});
