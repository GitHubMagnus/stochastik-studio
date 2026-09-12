const {test}=require('node:test');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const plan=require('../finance-outline.json'),bond=require('../finance-deep/duration.cjs').calculateBond;
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
const data=JSON.parse(html.match(/id="finance-data">([\s\S]*?)<\/script>/)[1]);
const byId=Object.fromEntries(data.map(l=>[l.id,l]));
const near=(a,b,tol=1e-8)=>assert.ok(Math.abs(a-b)<=tol,`${a} != ${b}`);
test('every chapter has embedded derivations, controlled comparisons, symbolic equations and valid links',t=>{
 let sections=0,comparisons=0,equations=0,worked=0,figures=0;
 for(const block of plan){
  const source=require('../finance-deep/'+block.id+'.cjs');assert.equal(source.length,block.groups.flatMap(g=>g[1]).length);
  source.forEach((d,i)=>{
   const id=block.id+'-'+String(i+1).padStart(2,'0'),l=byId[id];assert.ok(l.deep);assert.ok(d.sections.length>=2);
   assert.equal(l.deep.sections.length,d.sections.length);assert.ok(d.comparisons.length>0);
   for(const [j,s] of d.sections.entries()){
    assert.equal(l.deep.sections[j].title,s.title);assert.deepEqual(l.deep.sections[j].paragraphs,s.paragraphs);
    assert.ok(s.paragraphs.length>=2,id+': two connected explanations');
    if(s.tex){assert.match(l.deep.sections[j].mathml,/<math/);assert.ok(!/undefined|NaN/.test(s.tex));equations++;}sections++;
   }
   for(const c of l.deep.comparisons){assert.ok(c.intro&&c.paragraphs.length&&c.rows.length>=2);for(const row of c.rows)assert.equal(row.length,c.headers.length);for(const row of c.mathmlCells||[])for(const cell of row)if(cell)assert.match(cell,/<math/);comparisons++;}
   for(const [target,why] of d.links){assert.ok(byId[target]||target==='kelly');assert.ok(why.length>15);}
   worked+=l.textbook.steps.filter(s=>s.mathml).length;
   for(const f of l.deep.figures){assert.match(f.svg,/<title/);assert.match(f.svg,/<desc/);assert.ok(!/NaN|Infinity/.test(f.svg));figures++;}
  });
 }
 assert.equal(data.length,171);assert.equal(comparisons,175);assert.ok(worked>380);assert.equal(figures,5);
 assert.ok(!fs.readFileSync(path.join(__dirname,'../finance-math.cjs'),'utf8').includes('function convert'));
 t.diagnostic(JSON.stringify({chapters:171,sections,comparisons,equations,worked,figures}));
});
test('analytic duration and convexity agree with independent numerical derivatives across coupon frequencies',t=>{
 let cases=0;
 for(const n of [1,2,10,30])for(const c of [0,.05,.1])for(const y of [-.01,0,.05,.12])for(const m of [1,2,4,12]){
  const b=bond(n,c,y,m),h=1e-5,up=bond(n,c,y+h,m),down=bond(n,c,y-h,m);
  near(b.mod,-(up.price-down.price)/(2*h*b.price),2e-6);
  near(b.conv,(up.price+down.price-2*b.price)/(h*h*b.price),.004);
  near(b.mac,b.mod*(1+y/m));assert.ok(b.mac<=n+1e-10&&b.mac>=1/m-1e-10);assert.ok(b.conv>0);
  if(c===0){near(b.mac,n);near(b.conv,n*(n+1/m)/(1+y/m)**2,1e-8);}
  near(b.dv01,b.price*b.mod*.0001);cases++;
 }
 t.diagnostic(cases+' price/duration/convexity combinations, including negative yields and semiannual coupons.');
});
test('controlled maturity, coupon and yield changes have the published duration effects',()=>{
 const maturities=[2,10,30].map(n=>bond(n,.05,.05));
 assert.ok(maturities[0].mod<maturities[1].mod&&maturities[1].mod<maturities[2].mod);
 const shocks=[2,10,30].map(n=>bond(n,.05,.06).price/bond(n,.05,.05).price-1);
 assert.ok(shocks[0]>shocks[1]&&shocks[1]>shocks[2]);
 const coupons=[0,.05,.1].map(c=>bond(10,c,.05).mac);assert.ok(coupons[0]>coupons[1]&&coupons[1]>coupons[2]);
 const yields=[.02,.05,.1].map(y=>bond(10,.05,y).mac);assert.ok(yields[0]>yields[1]&&yields[1]>yields[2]);
 const b=bond(10,.05,.05);for(const dy of [-.02,-.01,.01,.02]){
  const actual=bond(10,.05,.05+dy).price/b.price-1,linear=-b.mod*dy,quadratic=linear+.5*b.conv*dy*dy;
  assert.ok(Math.abs(actual-quadratic)<Math.abs(actual-linear));
 }
 const H=b.mac,h=1e-5,W=y=>bond(10,.05,y).price*(1+y)**H;
 near((W(.05+h)-W(.05-h))/(2*h),0,.0001);
});
test('new bond controls preserve Macaulay/Modified units and compare exact shock with both approximations',()=>{
 const M=require('../finance-models.cjs'),defaults=Object.fromEntries(M.models.bond.controls.map(f=>[f.key,f.value]));
 for(const m of [1,2,12])for(const n of [2,10,30]){
  const p={...defaults,m,n,y:5,c:5,shock:100},r=M.calculate('bond',p).metrics.map(x=>x[1]),b=bond(n,.05,.05,m);
  near(r[0],b.price);near(r[1],b.mod);near(r[2],b.mac);near(r[3],b.dv01);near(r[4],b.conv);
  near(r[5],100*(bond(n,.05,.06,m).price/b.price-1));assert.ok(Math.abs(r[5]-r[7])<Math.abs(r[5]-r[6]));
 }
});
test('published comparison results match independent calculations across the curriculum',t=>{
 let n=0;
 function claim(id,needle,actual,expected,tolerance=.005){assert.ok(JSON.stringify(byId[id].deep.comparisons).includes(needle),id+': publication changed');near(actual,expected,tolerance);n++;}
 claim('quant-01','37,20',100*(1-(1.05/1.1)**10),37.20);
 claim('quant-03','8,17',100*(Math.sqrt(1.3*.9)-1),8.17);
 claim('economics-08','101,96',104/1.02,101.96);
 claim('economics-10','−1 %',100*(1.1*.9-1),-1);
 claim('economics-11','1,13235',1.1*1.05/1.02,1.13235,.00001);
 claim('statements-07','272,32',100/1.05+100/1.05**2+100/1.05**3,272.32);
 claim('statements-09','55,37',100/1.03**20,55.37);
 claim('corporate-04','90,91',1200/1.1-1000,90.91);
 claim('corporate-04','18,89',100*(1070/900-1),18.89);
 claim('corporate-06','1,4',.8*(1+.75),1.4);
 claim('equity-04','37,91',Array.from({length:5},(_,i)=>10/1.1**(i+1)).reduce((a,b)=>a+b),37.91);
 claim('equity-05','133,33',10*(1-.04/.2)/(.1-.04),133.33);
 claim('equity-09','29',100*.75+20-30-10-8*.75-20,29);
 claim('bonds-02','4,1383',100*(100/98-1)*365/180,4.1383,.00005);
 claim('bonds-05','96,38',5/1.07+105/1.07**2,96.38);
 claim('bonds-06','4,9755',100*(1-1/1.05**2)/(1/1.04+1/1.05**2),4.9755,.0001);
 claim('bonds-06','6,0096',100*(1.05**2/1.04-1),6.0096,.0001);
 claim('bonds-14','−200',(103+95-200)/(100*.01**2),-200);
 claim('derivatives-04','12 %',.2*Math.sqrt(1-.8**2)*100,12);
 claim('derivatives-07','11,9048',.5*100-40/1.05,11.9048,.0001);
 claim('derivatives-10','−14',90-104,-14);
 claim('alternatives-02','125,6',100+8+(30-8)*.8,125.6);
 claim('alternatives-06','33,3',100*(1-(100000/.06-1e6)/1e6),33.3,.04);
 claim('alternatives-11','18,33',100*Math.sqrt(.8**2*.04+.2**2*.04+2*.8*.2*.5*.04),18.33);
 claim('portfolio-01','17,32',100*Math.sqrt(.02*(1+.5)),17.32);
 claim('portfolio-06','8,45',100*(1.5**.2-1),8.45);
 claim('advanced-09','2,2',100*(.6*.12-.5*.1),2.2);
 claim('advanced-11','2,72',1/1.05+1/1.05**2+1/1.05**3,2.72);
 claim('path-portfolio-05','200',600*.1+400*.3+20,200);
 claim('path-wealth-03','78,4',((100-10)*1.2-10)*.8,78.4);
 claim('path-wealth-03','74,4',((100-10)*.8-10)*1.2,74.4);
 claim('path-wealth-04','186,92',100*(1+(1.08**10-1)*.75),186.92);
 t.diagnostic(n+' published comparison claims independently recomputed.');
});
