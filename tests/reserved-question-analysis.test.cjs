const {test}=require('node:test'),assert=require('node:assert/strict'),d=require('../finance-cfa/compile.cjs').compile();
const question=id=>d.questions.find(q=>q.id===id),numbers=q=>q.options.map(o=>Number.parseFloat(o.text.replace('−','-'))).sort((a,b)=>a-b);
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-6,`${a} != ${b}`);

test('stock-dividend alternatives distinguish total cash return from count and price adjustment',()=>{
 const initialShares=500,initialPrice=24,endingShares=600,endingPrice=20,cashPerEndingShare=.5,initial=initialShares*initialPrice;
 const capitalOnly=100*(endingShares*endingPrice/initial-1),total=100*((endingShares*(endingPrice+cashPerEndingShare))/initial-1),doubleCount=total+100*(endingShares/initialShares-1),q=question('eqr-a2');
 close(Number.parseFloat(q.options[q.correct].text),total);numbers(q).forEach((v,i)=>close(v,[capitalOnly,total,doubleCount].sort((a,b)=>a-b)[i]));
 assert.equal(endingShares*endingPrice,initial);assert.equal(endingShares*cashPerEndingShare,300);
});
test('enterprise-value alternatives use the stated reinvestment requirement and debt-cash bridge',()=>{
 const nopat=(120-20)*(1-.25),growth=.03,roic=.0625,wacc=.09,reinvestment=nopat*growth/roic,fcf=nopat-reinvestment,ev=fcf/(wacc-growth),equity=ev-120+20,q=question('mult-b1');
 close(reinvestment,36);close(fcf,39);close(ev,650);close(Number.parseFloat(q.options[q.correct].text),equity/10);
 const wrongEVPerShare=ev/10,wrongNoReinvestment=(nopat/(wacc-growth)-120+20)/10;
 numbers(q).forEach((v,i)=>close(v,[equity/10,wrongEVPerShare,wrongNoReinvestment].sort((a,b)=>a-b)[i]));
});
test('call-price alternatives identify the physical-probability error and the exact missing financing leg',()=>{
 const s=100,up=150,down=90,k=110,gross=1.02,cu=Math.max(up-k,0),cd=Math.max(down-k,0),delta=(cu-cd)/(up-down),terminalDebt=delta*down-cd,stockCost=delta*s,price=stockCost-terminalDebt/gross,riskNeutral=(s*gross-down)/(up-down),q=question('opv-exam-b');
 close(delta*up-terminalDebt,cu);close(delta*down-terminalDebt,cd);close(price,(riskNeutral*cu+(1-riskNeutral)*cd)/gross);
 close(Number.parseFloat(q.options[q.correct].text),price);numbers(q).forEach((v,i)=>close(v,[price,(.75*cu+.25*cd)/gross,stockCost].sort((a,b)=>a-b)[i]));assert.ok(terminalDebt>0);
});
test('M-squared level alternatives preserve the target volatility and distinguish level from scaled excess',()=>{
 const rp=-.02,rf=.02,sp=.20,sb=.15,w=sb/sp,level=rf+(rp-rf)*w,q=question('ppc-exam-b4');
 close(w*sp,sb);close(level,w*rp+(1-w)*rf);close(Number.parseFloat(q.options[q.correct].text.replace('−','-')),100*level);
 numbers(q).forEach((v,i)=>close(v,[100*level,100*(rp-rf)*w,100*(rf+(rp-rf)/w)].sort((a,b)=>a-b)[i]));
});
test('risk-aversion allocation maximizes utility and exposes the retained-half-factor error',()=>{
 const mu=.10,sigma=.20,rf=.02,A=5,U=y=>rf+y*(mu-rf)-.5*A*y*y*sigma*sigma,q=question('prk-exam-a2'),grid=Array.from({length:1001},(_,i)=>i/1000),best=grid.reduce((a,b)=>U(a)>U(b)?a:b);
 close(100*best,Number.parseFloat(q.options[q.correct].text));close(U(.4),.036);close(U(.8),.02);close(U(1),0);assert.ok(U(.4)>U(.399)&&U(.4)>U(.401));
 const withA=a=>grid.reduce((x,y)=>(rf+x*(mu-rf)-.5*a*x*x*sigma*sigma)>(rf+y*(mu-rf)-.5*a*y*y*sigma*sigma)?x:y);
 assert.ok(withA(10)<best);assert.ok(withA(2.5)>best);
});
