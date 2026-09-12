const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const plan=require('../finance-outline.json');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
const data=JSON.parse(html.match(/id="finance-data">([\s\S]*?)<\/script>/)[1]);
const byId=Object.fromEntries(data.map(l=>[l.id,l]));
const glossary=JSON.parse(html.match(/id="finance-glossary-data">([\s\S]*?)<\/script>/)[1]);
test('all 171 chapters embed distinct teaching explanations, complete worked steps and applications',t=>{
 let chapters=0,steps=0;const headings=new Set();
 for(const block of plan){
  const source=require('../finance-textbook/'+block.id+'.cjs');
  assert.equal(source.length,block.groups.flatMap(g=>g[1]).length);
  source.forEach((book,i)=>{
   const id=block.id+'-'+String(i+1).padStart(2,'0'),embedded=byId[id].textbook;
   assert.ok(!headings.has(book.heading),id+': repeated heading');headings.add(book.heading);
   assert.ok(book.explanation.length>=2,id);assert.deepEqual(embedded.explanation,book.explanation,id);
   for(const f of ['heading','example','applications','limitations','connections'])assert.equal(embedded[f],book[f],id+': '+f);
   assert.equal(byId[id].example,book.example,id+': old example accidentally used');
   assert.ok(book.steps.length>=3,id);
   book.steps.forEach((s,j)=>{assert.ok(s.calculation&&s.why,id+': incomplete reasoning');assert.equal(embedded.steps[j].calculation,s.calculation);assert.equal(embedded.steps[j].why,s.why);steps++;});
   if(book.table)for(const row of book.table.rows)assert.equal(row.length,book.table.headers.length,id);
   chapters++;
  });
 }
 assert.equal(chapters,171);assert.equal(steps,519);t.diagnostic(`${chapters} individual chapter expansions, ${steps} explained worked steps.`);
});
test('published worked-example results match independently recomputed arithmetic',t=>{
 let checks=0;
 function claim(id,step,needle,actual,expected,tolerance=0.005){
  assert.ok(byId[id].textbook.steps[step].calculation.includes(needle),id+': published claim changed');
  assert.ok(Math.abs(actual-expected)<=tolerance,id+': '+actual+' versus '+expected);checks++;
 }
 claim('start-05',3,'41,32',-1000+600/1.1+600/1.1**2,41.32);
 claim('quant-01',1,'1.360,54',1500/1.05**2,1360.54);
 claim('quant-02',1,'272,32',[1,2,3].reduce((s,n)=>s+100/1.05**n,0),272.32);
 claim('quant-04',2,'−3,71',((-100+Math.sqrt(85600))/200-1)*100,-3.71);
 claim('quant-06',2,'14,04',16/(16+98)*100,14.04);
 claim('quant-08',2,'8,128',4+2.064*10/Math.sqrt(25),8.128,0.0001);
 claim('quant-14',1,'3,667',(1+1+9)/3,3.667,0.0005);
 claim('economics-05',2,'4,08',(1020/980-1)*100,4.08);
 claim('economics-11',2,'0,88269',.9*1.02/1.04,.88269,.000005);
 claim('statements-07',0,'95,45',55/1.1+55/1.1**2,95.45);
 claim('statements-12',2,'30 %',12/200*200/100*100/40*100,30);
 claim('statements-16',1,'19,873',[1,2,3,4].reduce((s,n)=>s+6/1.08**n,0),19.873,.0005);
 claim('corporate-04',1,'4,13',-100+60/1.1+60/1.1**2,4.13);
 claim('equity-08',2,'42,59',2/1.08+(2.2+2.2*1.03/(.08-.03))/1.08**2,42.59);
 claim('equity-09',2,'54',(100-12)*.75+10-20-5+3,54);
 claim('equity-11',2,'103,70',100+(12-.08*100)/1.08,103.70);
 claim('bonds-05',1,'98,167',5/1.06+105/1.06**2,98.167,.0005);
 const d1=1/1.03,d2=1/1.04**2;
 claim('bonds-06',1,'5,0097',(1.04**2/1.03-1)*100,5.0097,.00005);
 claim('bonds-06',2,'3,9803',100*(1-d2)/(d1+d2),3.9803,.00005);
 claim('bonds-08',2,'24.625',1e6*(-5*.005+.5*30*.005**2),-24625);
 claim('bonds-09',2,'5,9615',5+105/1.04-100,5.9615,.00005);
 claim('bonds-12',1,'2.375',950000*.03*30/360,2375);
 claim('derivatives-03',1,'7,69',8/1.04,7.69);
 claim('derivatives-06',1,'5,238',10+100/1.05-100,5.238,.0005);
 claim('derivatives-07',2,'11,9048',((1.05-.8)/(1.2-.8)*20)/1.05,11.9048,.00005);
 claim('derivatives-09',2,'1,88',.6*2+.5*.04*4+.2*3,1.88);
 claim('alternatives-04',1,'14,87',(2**.2-1)*100,14.87);
 claim('alternatives-05',1,'77,16',90/(100*1.08**2)*100,77.16);
 claim('portfolio-01',1,'14,14',Math.sqrt(.25*.04+.25*.04)*100,14.14);
 claim('portfolio-05',4,'1,25',.1/.08,1.25);
 claim('portfolio-12',1,'=20',(12+14+16+20+38)/5,20);
 claim('advanced-01',0,'1,048',((18/20)**.1-1)*100,-1.048,.0005);
 claim('advanced-03',2,'102,08',(105+105*5*.01)/(100+100*8*.01)*100,102.08);
 claim('advanced-09',3,'1,6',(.6*.12+.4*.01-(.5*.10+.5*.02))*100,1.6);
 claim('advanced-10',1,'0,775',.2/(2/Math.sqrt(60)),.775,.0005);
 claim('path-portfolio-05',2,'550',600*(50.2-50)+400*(51-50)+30,550);
 claim('path-wealth-03',0,'=74',(100*.8-10)*1.2-10,74);
 claim('path-wealth-03',1,'=78',(100*1.2-10)*.8-10,78);
 const taxed=100*1.045**10,deferred=100+(100*1.06**10-100)*.75;
 claim('path-wealth-04',0,'155,30',taxed,155.30);
 claim('path-wealth-04',2,'4,02',deferred-taxed,4.02);
 t.diagnostic(`${checks} numerical claims recomputed independently; this is not an automated proof of every prose statement.`);
});
test('worked-step MathML, explanatory figures and glossary deep explanations have valid targets',t=>{
 const math=require('../finance-textbook-math.cjs'),figures=require('../finance-textbook-figures.cjs');let equations=0;
 for(const [id,steps] of Object.entries(math))for(const [i,tex] of Object.entries(steps)){
  const step=byId[id]?.textbook.steps[i];assert.ok(step,id);assert.equal(step.tex,tex);assert.match(step.mathml,/<math/);assert.match(step.mathml,/application\/x-tex/);equations++;
 }
 for(const [id,figure] of Object.entries(figures)){assert.equal(byId[id].textbook.figure.svg,figure.svg);assert.match(figure.svg,/<title>/);assert.ok(figure.caption);}
 for(const g of glossary.filter(g=>g.note)){assert.ok(g.note.paragraphs.length>=2);for(const id of g.note.links)assert.ok(byId[id]);}
 assert.match(glossary.find(g=>g.term==='Alpha').definition,/ein einzelnes gutes Jahr/);
 assert.match(byId['portfolio-05'].formulaTex,/R_\{i,t\}-r_\{f,t\}/);
 t.diagnostic(`${equations} additional worked-step equations and ${Object.keys(figures).length} explanatory graphics.`);
});
