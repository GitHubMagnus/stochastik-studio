const {test}=require('node:test'),assert=require('node:assert/strict'),d=require('../finance-cfa/compile.cjs').compile(),E=require('../finance-cfa/engine.cjs');
const fresh=d.questions.filter(q=>q.origin==='2027-additional-exams'),expected=new Map();
const pv=(cash,r)=>cash.reduce((sum,v,i)=>sum+v/(1+r)**i,0),pct=x=>100*x;
const add=(pool,topic,values)=>Object.entries(values).forEach(([i,v])=>expected.set(pool+'-'+topic+'-'+i.padStart(2,'0'),v));
// Independently formulated calculations use the stated cash ledgers, moments,
// capital balances and payoffs. They never evaluate an authored TeX formula.
add('c','alternatives',{1:100-40,2:20-2-(18/5),3:0,4:130/80,5:20+80/5,6:12/.06,10:150+50,11:pct(92/90-1),12:90-80});
add('d','alternatives',{2:100/80,4:pct(6/18),5:80+8,6:pct(5/40),7:10-2,8:1,11:10-1-.9,12:88-100});
add('c','bonds',{1:100-80,2:100+10+11,3:pct(2/98*4),4:105-5.25,5:15+20-3,6:2,7:102.2,8:pv([0,3,103],.05),9:pct(1.03*1.03-1),12:pct(1.1025/1.04-1),14:2e6*.01,15:-8+.5,16:-2+1.5,17:100*.03*.4,19:20,21:pct(20/120),22:pct(1-Math.pow(.99,12))});
add('d','bonds',{2:(50+100)/100,3:2e6*.04/12,5:25,6:5,8:100-1.25,9:pct(15/274),10:pct(Math.sqrt(120.2/100)-1),11:3/1.03,13:.5*30*.01,15:2+98*.03,17:pct(20/60),20:75,22:1.2});
add('c','corporate',{2:60-3,3:40,5:45+30-25,6:pct(2/98),7:pv([-100,60,60],.10),8:24-18,10:1.5+6,11:200+20,12:10/1.1/(1-.8/1.1)-40});
add('d','corporate',{1:50,4:pct(2/78),5:150/50,7:80+5+15,8:6+.7,10:.8+.4,11:20,12:20});
add('c','derivatives',{1:10,2:10-4.2,4:48.05*1.04,5:8*.95,6:5000/1.025,7:-600,8:pct(.10/1.86),9:3*10000,10:10,11:100,12:.6*100-48/1.05});
add('d','derivatives',{2:20+5-10,3:.8*.8,4:43*1.05,5:100000/1.01*1.2-125000/1.03,8:1.8,9:2,11:9.5,12:2/3});
add('c','economics',{2:[30,30,20,20].reduce((s,x)=>s+x*x,0),3:-3,5:pct(81/102),8:10+10,9:1.5/1.2,10:1.1*1.04/1.02});
add('d','economics',{1:-10-(-30),2:30,4:pct(5/195),5:2,7:pct(108/110-1),10:100/110,11:11000});
add('c','equity',{1:18,2:120,3:1750,4:.16,5:50,6:39,7:800/80,8:120,10:4.5,11:40,13:380,15:70,16:10,17:42-40,18:pv([0,1,21.8],.09),19:9,20:2+1.5-2,21:40/.06,22:25});
add('d','equity',{1:30,4:70,5:5,7:104+104*5/95,10:-13,13:30,14:160,15:200/15,16:20+1/1.1,17:6,18:100,20:1.6,22:215});
add('c','portfolio',{1:4*Math.sqrt(12),2:Math.sqrt(.0184)*100,6:8,7:.84,8:2,9:.5,14:(1.0608/.99-1)*100,18:2*Math.sqrt(10)});
add('d','portfolio',{1:5,3:Math.sqrt(.0297)*100,5:0,6:5.6,17:(4*10+100)/5,18:53});
add('c','quant',{1:6,2:(1.09/1.03-1)*100,3:9,4:pv([100,100,100],.1),5:4,6:-1,7:5,8:Math.sqrt(5),9:.3,10:Math.expm1(.04)*100,11:100*10/18,12:.025+.0016,17:20,18:50,22:75});
add('d','quant',{1:(211/204-1)*100,3:(Math.sqrt(.75)-1)*100,4:4.5,5:186,7:100/75,9:4,10:50,14:2,15:Math.expm1(.03)*100,16:.8,17:40,19:.5});
add('c','statements',{2:0,3:2,4:2.6/1.05,5:80,6:150,7:280,8:89,10:57,12:22.5,13:100,14:30,15:20,16:10,17:20,18:12,19:20000,20:30,22:30});
add('d','statements',{2:5,4:1.045/1.1,5:0,7:210,8:45,12:10,13:0,14:27.5,15:2,16:75,17:15,18:6,19:30,21:40});
const special=new Set(['c-quant-15','d-quant-06','d-equity-06','d-portfolio-02','d-portfolio-10']);
test('two additional genuine exam pools contain the 2027 blueprint, unique IDs and valid chapter/objective links',()=>{
 assert.equal(fresh.length,360);for(const pool of ['mock-c','mock-d']){assert.deepEqual(d.inventory[pool],E.blueprint);assert.equal(E.createExam(d.questions,pool).items.length,180);}
 assert.equal(new Set(d.questions.map(q=>q.stem.toLowerCase().replace(/\s+/g,' ').trim())).size,d.questions.length);
 assert.equal(new Set(E.MOCKS.flatMap(pool=>E.createExam(d.questions,pool).items)).size,720);
 for(const q of fresh){assert.equal(q.options.length,3);assert.ok(q.options.every(o=>o.why.length>20));assert.ok(d.units.find(u=>u.id===q.unit).sections.some(s=>s.id===q.section));assert.ok(q.objectives.every(o=>d.coverage.some(c=>c.objectives.some(x=>x.id===o))));}
});
for(const topic of Object.keys(E.blueprint).filter(t=>t!=='ethics'))test('independent numerical decisions and displayed approximations: '+topic,()=>{
 for(const q of fresh.filter(q=>q.topic===topic&&q.solution.some(b=>b.kind==='formula')&&!special.has(q.id))){
  assert.ok(expected.has(q.id),'missing independent result '+q.id);const value=expected.get(q.id),text=q.options[q.correct].text,n=Number.parseFloat(text),digits=(text.match(/^-?\d+\.(\d+)/)?.[1]||'').length,tol=Math.pow(10,-digits)/2+1e-8;
  assert.ok(Math.abs(n-value)<=tol,q.id+': displayed '+n+' expected '+value);const distances=q.options.map(o=>Math.abs(Number.parseFloat(o.text)-value));assert.equal(distances.indexOf(Math.min(...distances)),q.correct,q.id+' nearest answer');
  const f=q.solution.find(b=>b.kind==='formula'),approx=f.tex.match(/\\approx(-?\d+(?:\.\d+)?)/);if(approx){const raw=(text.includes('%')&&q.id!=='c-quant-08'||q.id==='d-bonds-13')?value/100:value,dec=(approx[1].split('.')[1]||'').length;assert.ok(Math.abs(Number(approx[1])-raw)<=.5*10**-dec+1e-9,q.id+' equation approximation '+approx[1]+' expected '+raw);}
 }
});
test('all 206 formula-bearing decisions are checked, including intervals, multiple roots, matrix validity and wealth conservation',()=>{
 const actual=fresh.filter(q=>q.solution.some(b=>b.kind==='formula')).map(q=>q.id);assert.equal(actual.length,206);assert.deepEqual(new Set(actual),new Set([...expected.keys(),...special]));
 const right=id=>d.questions.find(q=>q.id===id).options[d.questions.find(q=>q.id===id).correct].text;
 assert.equal(right('c-quant-15'),'[0.6, 1.8]');assert.equal(1.2-2*.3,.6);assert.ok(Math.abs(1.2+2*.3-1.8)<1e-12);
 for(const rate of [.1,.2])assert.ok(Math.abs(pv([-100,230,-132],rate))<1e-10);assert.match(right('d-quant-06'),/cannot uniquely/);
 assert.equal(10*60,15*40);assert.equal(right('d-equity-06'),'15 shares at 40 each.');
 assert.ok(1+2*.9*.9*(-.9)-3*.9**2<0);assert.match(right('d-portfolio-02'),/reject or repair/);
 assert.equal(10-1+1,10);assert.equal(right('d-portfolio-10'),'NAV 9 plus cash 1.');
});
