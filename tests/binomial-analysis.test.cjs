const {test}=require('node:test'),assert=require('node:assert/strict'),M=require('../finance-models.cjs'),d=require('../finance-cfa/compile.cjs').compile(),u=d.units.find(u=>u.id==='binomial');
const flat=a=>a.flatMap(b=>typeof b==='string'?[b]:[b,...flat(b.blocks||b.steps||[])]),blocks=u.sections.flatMap(s=>flat(s.blocks)),bank=d.questions.filter(q=>q.unit===u.id),near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<=t,a+' vs '+b),de=s=>Number(s.replaceAll('−','-').replaceAll('.','').replace(',','.'));
test('both actual 2027 outcomes receive full derivation, distinct examples, original practice and two reserved transfers',()=>{
 assert.equal(u.sections.length,34);assert.ok(blocks.map(b=>typeof b==='string'?b:b.reading||'').join(' ').length>26000);
 for(const[k,n]of [['formula',48],['example',26],['table',11],['figure',5],['disclosure',14]])assert.equal(blocks.filter(b=>b.kind===k).length,n,k);
 assert.equal(bank.length,52);assert.equal(bank.filter(q=>q.pool==='practice').length,50);for(const p of ['mock-a','mock-b']){assert.equal(bank.filter(q=>q.pool===p).length,1);assert.equal(d.inventory[p].derivatives,13);}
 for(const o of d.coverage.find(c=>c.id===u.id).objectives){assert.ok(o.practice.length>=25);assert.equal(o.mockQuestions,2);assert.ok(o.sections.length>=29);}
 assert.equal(new Set(bank.map(q=>q.stem)).size,52);for(const q of bank){assert.ok(q.options.every(o=>o.why.length>12));assert.ok(u.sections.some(s=>s.id===q.section));}
 assert.equal(u.review.status,'draft');assert.equal(d.release,false);assert.ok(u.sources[0].url.endsWith('2027levelitopicoutline_online.pdf#page=24'));
 assert.equal(require('../finance-content/derivatives.cjs')[6].lab,'binomial');assert.ok(require('../finance-content/derivatives.cjs')[6].additionalLabs.includes('binomialrep'));for(const id of ['parity','option-values'])assert.ok(d.units.find(u=>u.id===id).related.some(l=>l.unit==='binomial'));
});
test('independent state-price portfolios reconcile all metrics, four complete cash ledgers and 78732 plotted coordinates across 486 valid cases',t=>{
 let valid=0,rejected=0,points=0;for(const s of [25,100,250])for(const k of [25,100,250])for(const up of [1.05,1.2,1.8])for(const down of [.2,.8,.95])for(const rate of [-10,0,20])for(const physical of [5,60,95]){
  const params={s,k,u:up,d:down,r:rate,p:physical},R=1+rate/100;if(!(down<R&&R<up)){assert.throws(()=>M.calculate('binomialrep',params),/Arbitrage/);rejected++;continue;}
  const r=M.calculate('binomialrep',params),a=s*up,b=s*down,priceUp=(s-b/R)/(a-b),priceDown=1/R-priceUp,cu=a>k?a-k:0,cd=b>k?b-k:0,pu=a<k?k-a:0,pd=b<k?k-b:0,C=cu*priceUp+cd*priceDown,P=pu*priceUp+pd*priceDown,dc=(cu-cd)/(a-b),dp=(pu-pd)/(a-b),bc=C-dc*s,bp=P-dp*s,p=physical/100;
  const ref=[priceUp*R*100,C,P,dc,bc,p*cu+(1-p)*cd];for(const[i,x]of ref.entries())near(r.metrics[i][1],x);
  near(priceUp*a+priceDown*b,s);near(priceUp+priceDown,1/R);near(C-P,s-k/R);near(dc-dp,1);near(bc-bp,-k/R);
  const ledgers=[[a,cu,dc,bc],[b,cd,dc,bc],[a,pu,dp,bp],[b,pd,dp,bp]];for(const[i,[x,H,delta,B]]of ledgers.entries()){const row=r.projection.rows[i];for(const[j,v]of [x,H,delta,delta*x,R*B,H,0].entries())near(row[j+1],v);}
  const stable=r.stable.rows;for(const[i,value]of [[0,R],[1,priceUp],[2,priceDown],[3,1/R],[4,dp],[5,bp],[6,p*a+(1-p)*b],[7,p*pu+(1-p)*pd]])near(stable[i][1],value);
  for(const[i,V,E]of [[8,C,p*cu+(1-p)*cd],[9,P,p*pu+(1-p)*pd]]){if(V>1e-10)near(stable[i][1],100*(E/V-1));else assert.equal(stable[i][1],'Nicht definiert bei Preis null');}
  for(const[i,line]of r.series.entries())for(const[x,y]of line.points){near(y,i?dc*x+R*bc:(x>k?x-k:0));points++;}
  valid++;
 }assert.equal(valid,486);assert.equal(rejected,243);assert.equal(points,78732);t.diagnostic(JSON.stringify({valid,rejected,points}));
});
test('all 438 authored graph coordinates use the stated states, time references, financing and controlled changes',()=>{
 let coords=0;for(const g of blocks.filter(b=>b.kind==='figure')){const id=g.id.split('-').slice(-1)[0];for(const[i,line]of g.plot.series.entries())for(const[x,y]of line.points){let z;
  if(g.id.endsWith('-tree'))z=i===0?100+20*x:i===1?100-20*x:100+5*x;
  else if(g.id.endsWith('-physical'))z=i?250/21:20*x;
  else if(g.id.endsWith('-rate-weights'))z=i?(1.2-x)/.4:(x-.8)/.4;
  else if(g.id.endsWith('-dispersion'))z=50*(x+(i?-.05:.05))/1.05;
  else if(g.id.endsWith('-hedge-gap'))z=i?.5*x-40:(x>100?x-100:0);
  else assert.fail('unreviewed graph '+id);near(y,z);assert.ok(x>=g.plot.x[0]-1e-10&&x<=g.plot.x[1]+1e-10);assert.ok(y>=g.plot.y[0]-1e-10&&y<=g.plot.y[1]+1e-10);coords++;
 }}assert.equal(coords,438);
});
test('every numerical published choice including both reserved transfers matches separately computed values',()=>{
 const refs={'01':100*.8,'02':120-100,'03':100-80,'04':20/40,'05':-.5*80,'06':-40/1.05,'07':50-40/1.05,'08':-20/40,'09':60/1.05,'10':-50+60/1.05,'11':50-250/21,'12':60-20,'13':14-(50-40/1.05),'14':(50-40/1.05)-10,'15':40*75*.5,'16':100-60/1.05,'17':140/1.05-100,'18':.5*30/1.05,'19':.375*20/.95,'20':.575*20/1.03,'21':.625/1.05,'22':.5*100-40,'26':.25/.4,'28':.625*120+.375*80,'29':.375/1.05,'30':1/1.05,'31':.8*20,'32':100*(16/(250/21)-1),'36':(.95-.8)/.4,'37':.2/.4,'43':16/1.05,'44':.625**2*44/1.05**2,'45':(.625*10/7+.375*20)/1.05,'47':.35*20/1.05,'48':.5625*40/1.05,'exam-a':(.58*20)/1.04,'exam-b':.54*24/.98};
 const numeric=bank.filter(q=>q.options.every(o=>/^-?\d/.test(o.text)));assert.equal(numeric.length,Object.keys(refs).length);
 for(const[id,x]of Object.entries(refs)){const q=bank.find(q=>q.id==='bnm-'+id),s=q.options[q.correct].text.replace(/%?\.$/,''),dec=s.split('.')[1]?.length||0;near(Number(s),x,.5001*10**-dec+1e-8);}
});
test('both executable price directions clear all end liabilities and do not count initial surplus twice',()=>{
 const examples=blocks.filter(b=>b.kind==='example');for(const title of ['14 WE Marktpreis gegen rund 11,9048 WE Replikationskosten','10 WE Kaufpreis gegen den verkauften teureren Nachbau']){const table=examples.find(e=>e.title===title).steps.find(b=>b.kind==='table');for(const col of [1,2,3])near(table.rows.slice(0,-1).reduce((n,row)=>n+de(row[col]),0),de(table.rows.at(-1)[col]),.000002);}
 for(const end of [80,120]){const call=end>100?end-100:0;near(-call+.5*end-40,0);near(call-.5*end+40,0);}
 near((14-50+40/1.05)*1.05,2.2);near((50-10-40/1.05)*1.05,2);
 for(const end of [80,120]){assert.ok(125-end>0);assert.ok(120-end>=0);assert.ok(end-75>0);}near(120-120,0);near(120-80,40);
});
test('the authored comparison tables reconcile actual expectations, put/call packages, spread cases and dynamic hedge quantities',()=>{
 const ex=title=>blocks.find(b=>b.kind==='example'&&b.title===title),table=title=>ex(title).steps.find(b=>b.kind==='table');
 for(const[i,row]of table('Mehr Optimismus verändert die Ertragserwartung, nicht denselben Replikationspreis').rows.entries()){const p=[.2,.6,.8][i];near(de(row[0]),p);near(de(row[1]),p*120+(1-p)*80);near(de(row[2]),20*p);near(de(row[3]),250/21,1e-6);}
 for(const[i,row]of table('Zehn, zwanzig und vierzig Prozent Spreizung unter gleicher Finanzierung').rows.entries()){const a=[.1,.2,.4][i],q=(.05+a)/(2*a);near(de(row[0]),a);near(de(row[2]),q);near(de(row[3]),100*a*q/1.05,1e-6);near(de(row[4]),100*a*(1-q)/1.05,1e-6);}
 for(const [title,delta,money,call]of [['Der Kredit beseitigt den zu hohen Sockel der halben Aktie',.5,-40,true],['Eine verkaufte halbe Aktie ergänzt den Schutzanspruch',-.5,60,false]])for(const[i,row]of table(title).rows.entries()){const x=[120,80][i],H=call?Math.max(x-100,0):Math.max(100-x,0);near(de(row[1]),delta*x);near(de(row[2]),money);near(de(row[3]),H);near(de(row[4]),H);}
 const rows=table('Zwei ganze Modellperioden sind ein anderer Horizont als der Grundfall').rows;for(const[i,x,V,delta]of [[0,144,44],[1,96,0],[2,64,0],[3,120,550/21,11/12],[4,80,0,0],[5,100,6875/441,55/84]]){near(de(rows[i][1]),x);near(de(rows[i][2]),V,1e-6);if(delta!==undefined)near(de(rows[i][3]),delta,1e-6);}
});
test('risk-neutrality preserves different physical returns and a third state prevents exact generic replication',()=>{
 near((.8*20)/(250/21)-1,.344);near((.2*20)/(50/7)-1,-.44);near(.8*120+.2*80,112);near(.625/(1.05*.8),125/168);near(.375/(1.05*.2),25/14);
 for(const p of [5,20,60,80,95]){const r=M.calculate('binomialrep',{s:100,k:100,u:1.2,d:.8,r:5,p});near(r.metrics[1][1],250/21);near(r.metrics[5][1],p/100*20);}
 const dist=[[.1,.55,.35],[.3,.15,.55]];for(const w of dist){near(w.reduce((a,b)=>a+b,0),1);near(w[0]*80+w[1]*100+w[2]*120,105);assert.ok(w.every(x=>x>0));}near(dist[0][2]*20/1.05,20/3);near(dist[1][2]*20/1.05,220/21);near(.5*100-40,10);
});
test('two-step replication is self-financing at both intermediate nodes and American early exercise is properly distinct',()=>{
 const q=.625,R=1.05,upValue=44*q/R,downValue=0,initial=upValue*q/R,delta=(upValue-downValue)/40,B=initial-delta*100;
 for(const[state,price,next1,next2]of [['up',120,144,96],['down',80,96,64]]){const oldWealth=delta*price+R*B,nodeValue=state==='up'?upValue:0,deltaNext=state==='up'?44/48:0,cashNext=nodeValue-deltaNext*price;near(oldWealth,nodeValue);near(deltaNext*next1+R*cashNext,Math.max(next1-100,0));near(deltaNext*next2+R*cashNext,Math.max(next2-100,0));}
 const euroDown=(q*4+(1-q)*36)/R,euroUp=(1-q)*4/R;near(euroDown,320/21);assert.ok(euroDown<20);near(euroUp,10/7);near((q*euroUp+(1-q)*euroDown)/R,925/147);near((q*euroUp+(1-q)*20)/R,1175/147);
});
test('twenty curated definitions have precise returns and preserve broad Delta and statistical binomial meanings',()=>{
 const g=require('../finance-glossary.cjs'),entries=require('../finance-cfa/glossary.cjs').filter(e=>e.cfa.unit===u.id);assert.equal(entries.length,20);assert.equal(new Set(g.map(e=>e.term)).size,g.length);
 for(const e of entries){assert.ok(g.some(x=>x.term===e.term));assert.ok(u.sections.some(s=>s.id===e.cfa.section));}
 assert.equal(g.find(e=>e.term==='Delta').cfa.unit,'option-values');assert.equal(g.find(e=>e.term==='Binomialverteilung').cfa.unit,'distributions');assert.equal(g.find(e=>e.term==='Replikation').cfa.unit,'tvm');
 for(const label of ['Delta','Geldposition','Replikation','Fortführungswert'])assert.ok(entries.some(e=>e.contextualAliases?.some(a=>a.label===label&&a.units.includes('binomial'))),label);
});
