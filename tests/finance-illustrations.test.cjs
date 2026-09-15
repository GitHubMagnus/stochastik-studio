const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const F=require('../finance-illustrations.cjs'),P=require('../finance-illustrations/portfolio.cjs').models,E=require('../finance-illustrations/economics.cjs').models,M=require('../finance-illustrations/markets.cjs').models;
const {normalPDF}=require('../finance-illustrations/chart.cjs');
const byFigure=Object.fromEntries(Object.values(F).flat().map(f=>[f.id,f]));
const near=(a,b,tol=1e-9)=>assert.ok(Math.abs(a-b)<=tol,`${a} != ${b}`);
const integral=(fn,a,b,n=10000)=>{const h=(b-a)/n;let sum=fn(a)+fn(b);for(let i=1;i<n;i++)sum+=(i%2?4:2)*fn(a+i*h);return sum*h/3;};
const polygonArea=pts=>Math.abs(pts.reduce((a,[x,y],i)=>{const next=pts[(i+1)%pts.length];return a+x*next[1]-y*next[0];},0))/2;
test('43 illustrations are embedded with accessible SVG, mathematics, assumptions and valid chapter links',()=>{
 const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
 const data=JSON.parse(html.match(/id="finance-data">([\s\S]*?)<\/script>/)[1]);
 const ids=new Set(data.map(l=>l.id));let count=0;
 for(const lesson of data){
  assert.equal(lesson.illustrations.length,(F[lesson.id]||[]).length);
  for(const f of lesson.illustrations){
   assert.ok(byFigure[f.id]);assert.match(f.svg,/<title /);assert.match(f.svg,/<desc /);assert.match(f.svg,/aria-labelledby=/);assert.match(f.mathml,/<math/);
   assert.ok(f.assumptions.length>120&&f.read.length>180);assert.ok(f.sources.length);assert.ok(f.legend.every(x=>x.name));
   assert.ok(!/NaN|Infinity|undefined/.test(f.svg));assert.ok(!(f.svg.match(/(?:href|src)="https?:/)));
   assert.ok(f.links.every(id=>ids.has(id)));count++;
  }
 }
 assert.equal(count,43);assert.equal(Object.keys(F).filter(k=>k.startsWith('economics-')).length,12);
 assert.equal(Object.keys(F).filter(k=>k.startsWith('portfolio-')).length,12);
});
test('minimum variance and tangency weights satisfy independent first-order conditions',()=>{
 const h=1e-6,vol=w=>Math.sqrt(((1-w)*.1)**2+(w*.2)**2+2*(1-w)*w*.004);
 const sr=w=>(.06+.06*w-.02)/vol(w);
 near((vol(P.wGMV+h)-vol(P.wGMV-h))/(2*h),0,1e-7);
 near((sr(P.wT+h)-sr(P.wT-h))/(2*h),0,1e-7);
 for(let i=-100;i<=200;i++){const w=i/100;assert.ok(vol(w)>=vol(P.wGMV)-1e-12);assert.ok(sr(w)<=sr(P.wT)+1e-12);}
 const slopeAtT=.06/((vol(P.wT+h)-vol(P.wT-h))/(2*h));near(slopeAtT,sr(P.wT),1e-7);
 near(P.portfolio(1/3,-1)[0],0,1e-6);
 const utility=sigma=>.02+.4*sigma-2*sigma*sigma;near(utility(.1),.04);assert.ok(utility(.1)>utility(.09)&&utility(.1)>utility(.11));
});
test('correlation curves, diversification floor and regression coefficients match their claims',()=>{
 const correlation=byFigure['portfolio-correlation-sets'];
 for(const series of correlation.plot.series){near(series.points[0][0],10);near(series.points.at(-1)[0],20);}
 for(let w=0;w<=1;w+=.02)assert.ok(P.variance(w,.9)>=P.variance(w,.2)-1e-12);
 const x=P.marketX,y=x.map((v,i)=>1+1.2*v+P.eps[i]);
 const mx=x.reduce((a,b)=>a+b)/x.length,my=y.reduce((a,b)=>a+b)/y.length;
 const beta=x.reduce((a,v,i)=>a+(v-mx)*(y[i]-my),0)/x.reduce((a,v)=>a+(v-mx)**2,0);
 near(beta,1.2);near(my-beta*mx,1);near(.3*Math.sqrt(.25),.15);
 near(P.drift[10],(.6*1.1**10)/(.6*1.1**10+.4*1.02**10));
});
test('cost curves are derivatives and their crossings coincide with average-cost minima',()=>{
 const h=1e-5;
 for(const q of [1,2,3,4,5,7])near((E.cost(q+h)-E.cost(q-h))/(2*h),E.mc(q),1e-7);
 near(E.mc(3),E.avc(3));near((E.avc(3+h)-E.avc(3-h))/(2*h),0,1e-7);
 near(E.mc(E.qATC),E.atc(E.qATC));near((E.atc(E.qATC+h)-E.atc(E.qATC-h))/(2*h),0,1e-7);
 near(E.mc(5),15);near(75-E.cost(5),40/3);
});
test('equilibria, tariff rectangles and deadweight-loss triangles follow the stated economics models',()=>{
 for(const [q,p] of [[40,60],[50,70]])near(20+q,p);
 near(100-40,60);near(120-50,70);
 const monopoly=byFigure['monopoly-welfare'];near(polygonArea(monopoly.plot.areas[0].points),800);
 near(100-2*40,20);near(100-80,20);
 const tariff=byFigure['tariff-welfare'];near(polygonArea(tariff.plot.areas[0].points)+polygonArea(tariff.plot.areas[1].points),400);near(polygonArea(tariff.plot.areas[2].points),400);
 near(180-.6*(350/3),40+.6*(350/3));near(160-.6*(250/3),60+.6*(250/3));
 near(20+.75*80,80);near(30+.75*120,120);assert.ok(byFigure['keynesian-cross'].plot.square);
 near(1.46-.004*70,.9+.004*70);near(1.1*1.05/1.02,1.1323529411764706);
});
test('VaR, Expected Shortfall and hypothesis-test shading have the stated probability meanings',()=>{
 near(integral(x=>normalPDF(x,0,10),P.lossVaR,100),.05,1e-9);
 near(integral(x=>x*normalPDF(x,0,10),P.lossVaR,100)/.05,P.lossES,1e-8);
 near(P.lossVaR,16.448536269514722);near(P.lossES,20.62712807507425,1e-8);
 const c=1.6448536269514722,beta=integral(x=>normalPDF(x,2,1),-10,c);
 assert.ok(beta>.36&&beta<.37);near(integral(x=>normalPDF(x),c,10),.05,1e-9);
 near(integral(x=>normalPDF(x),-1,1),.682689492137,1e-9);near(integral(x=>normalPDF(x,0,2),-1,1),.382924922548,1e-9);
});
test('NPV roots, discount curve identities and risk-neutral option tree are internally consistent',()=>{
 near(M.npv(M.irr),0);near(M.multipleNPV(.1),0);near(M.multipleNPV(.2),0);assert.ok(M.multipleNPV(.15)>0&&M.multipleNPV(.05)<0);
 for(const r of M.rates){
  const discountedCoupons=Array.from({length:r.n},(_,j)=>100*r.par*M.df(j+1)).reduce((a,b)=>a+b,0);
  near(discountedCoupons+100*M.df(r.n),100);
  near((1+r.forward)*M.df(r.n),r.n===1?1:M.df(r.n-1));
 }
 const p=(1.05-.8)/(.4),up=(p*44)/1.05,down=0;near((p*up+(1-p)*down)/1.05,M.call0);
 near((p*120+(1-p)*80)/1.05,100);near(M.call0,15.589569160997732,1e-9);
});
test('option payoff kinks and strategy bounds hold at strikes, break-even and extreme prices',()=>{
 for(const [id,fn] of [
  ['call-payoff-profit',x=>Math.max(x-100,0)],['put-payoff-profit',x=>Math.max(100-x,0)]
 ])for(const [x,y] of byFigure[id].plot.series[0].points)near(y,fn(x));
 near(Math.max(108-100,0)-8,0);near(Math.max(100-94,0)-6,0);
 const strategy=byFigure['option-hedge-strategies'];
 for(const [x,y] of strategy.plot.series[1].points){assert.ok(y>=-6);near(y,x-100+Math.max(100-x,0)-6);}
 for(const [x,y] of strategy.plot.series[2].points){assert.ok(y<=15);near(y,x-100-Math.max(x-110,0)+5);}
});
test('immunized present values have equal first derivatives and positive convexity surplus',()=>{
 const h=1e-5,y=.05;near(M.assetPV(y),100);near(M.liabilityPV(y),100);
 near((M.assetPV(y+h)-M.assetPV(y-h))/(2*h),(M.liabilityPV(y+h)-M.liabilityPV(y-h))/(2*h),1e-5);
 const d2=f=>(f(y+h)+f(y-h)-2*f(y))/(h*h);
 assert.ok(d2(M.assetPV)>d2(M.liabilityPV));
 for(const shock of [-.05,-.02,-.01,.01,.02,.07])assert.ok(M.assetPV(y+shock)>M.liabilityPV(y+shock));
});
