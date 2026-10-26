const {test}=require('node:test'),assert=require('node:assert/strict'),d=require('../finance-cfa/compile.cjs').compile(),E=require('../finance-cfa/engine.cjs');
const q=id=>d.questions.find(q=>q.id===id),close=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<t,a+' != '+b);
function expected(id,values){const tokens=q(id).options[q(id).correct].text.match(/[−-]?\d+(?:\.\d+)?/g);assert.equal(tokens.length,values.length,id);tokens.forEach((s,i)=>{const digits=s.includes('.')?s.split('.')[1].length:0;close(Number(s.replace('−','-')),values[i],.50001*10**(-digits)+1e-10);});}
test('OC, catch-up and terminal waterfalls allocate only the available cash and use each claim’s own basis',()=>{
 expected('abs-62',[100*108/(100-1)]);assert.ok(108/99<1.1);
 const distribute=(cash,claims)=>{const paid=claims.map(c=>{const p=Math.min(cash,c);cash-=p;return p;});return {paid,residual:cash};},catchup=.2/(1-.2)*8,result=distribute(109,[100,8,catchup]);expected('afe-50',[result.paid[2]]);close(result.paid.reduce((a,b)=>a+b)+result.residual,109);close(result.paid[2],1);
 const recovery=distribute(160,[10,50,60,30]);expected('ccr-50',[recovery.residual]);close(recovery.residual,10);const juniorLoss=Math.min(30,20),seniorLoss=Math.max(0,30-juniorLoss);expected('scz-37',[seniorLoss,100*seniorLoss/80]);close(juniorLoss+seniorLoss,30);
});
test('the illustrative feedback update and the one-share maintenance requirement need no earlier question',()=>{
 const update=(now,previous,reference)=>now+.4*(reference-now)+.6*(now-previous),first=update(108,100,120),second=update(first,108,120);close(first,117.6);expected('bhv-40',[second]);assert.ok(second>120);
 const equity=cash=>cash-130,required=.3*130;let low=0,high=100;for(let i=0;i<80;i++){const mid=(low+high)/2;if(equity(150+mid)>=required)high=mid;else low=mid;}expected('bhv-42',[high]);close(equity(150+high),required);assert.ok(equity(150+high-1e-6)<required);
});
test('the repriced three-payment annual bond uses the supplied redemption, timing and annual rate',()=>{
 const payments=[5,5,105],price=y=>payments.reduce((p,c,i)=>p+c/(1+y)**(i+1),0);close(price(.05),100);expected('bpr-10',[price(.03)]);assert.ok(price(.03)>price(.05)&&price(.05)>price(.07));close(price(.07),94.7513679111676,1e-8);
});
test('structural subordination cannot transfer value beyond the direct subsidiary claims',()=>{
 const realization=50,directDebt=60,holdingDebt=80,directRecovery=Math.min(realization,directDebt),residual=Math.max(realization-directDebt,0),holdingRecovery=Math.min(residual,holdingDebt);expected('ccr-52',[100*directRecovery/directDebt,100*holdingRecovery/holdingDebt]);close(directRecovery+holdingRecovery,50);assert.equal(residual,0);
});
test('below-NAV issuance dilutes existing holders by the same amount new holders gain',()=>{
 const assets=100,shares=10,inflow=20,issuePrice=8,newShares=inflow/issuePrice,nav=(assets+inflow)/(shares+newShares),oldLoss=assets-shares*nav,newGain=newShares*(nav-issuePrice);expected('ipc-63',[nav]);close(oldLoss,newGain);close(oldLoss,4);close(newShares,2.5);
});
test('the qualifying sale followed by full reinvestment preserves debt, cash and the balance sheet',()=>{
 const before={cash:10,pool:100,other:40,debt:120,equity:30},after={...before,cash:before.cash+100-100,pool:0,newLoans:100};expected('scz-21',[after.debt,after.cash]);close(after.cash+after.pool+after.newLoans+after.other,after.debt+after.equity);assert.equal(after.debt,before.debt);
});
test('the stated reversal earns two initially and meets the stock-delivery obligation in every terminal state',()=>{
 const spot=100,put=6,call=9,deposit=95,strike=100,discount=.95;close(deposit/discount,strike);expected('pcp-13',[spot+put-call-deposit]);for(const terminal of [0,40,100,130,300]){const callPay=Math.max(terminal-strike,0),putPay=Math.max(strike-terminal,0);close(-terminal+callPay-putPay+strike,0);}
});
test('correlation comparisons and the minimum-variance table use one consistent covariance matrix',()=>{
 const sa=.2,sb=.1,variance=(w,rho)=>w*w*sa*sa+(1-w)**2*sb*sb+2*w*(1-w)*rho*sa*sb,vol=(w,rho)=>Math.sqrt(variance(w,rho));expected('prk-65',[100*vol(.1,.8)]);close(variance(.1,.8),.01138);const table=q('prk-65').solution.find(b=>b.kind==='table');for(const[i,r]of [.2,.8,1].entries())close(Number(table.rows[i][1].replace(',','.').replace('%','')),100*vol(.1,r),.000051);
 const c=.2*sa*sb,w=(sb*sb-c)/(sa*sa+sb*sb-2*c);close(w,1/7);const min=variance(w,.2);expected('prk-75',[100*Math.sqrt(min)]);close(min,(sa*sa*sb*sb-c*c)/(sa*sa+sb*sb-2*c));for(const delta of [-.1,-.01,.01,.1])assert.ok(variance(w+delta,.2)>min);const rows=q('prk-75').solution.find(b=>b.kind==='table').rows;for(const[i,weight]of [0,1/7,.5].entries())close(Number(rows[i][1].replace(',','.').replace('%','')),100*vol(weight,.2),.000051);
});
test('the property, user-pay, reserve and concession cases reconcile all separately dated cash flows',()=>{
 const property=2000,debt=1200,interest=debt*.05,operating=90,exit=2100,equity=property-debt,netIncome=operating-interest,exitEquity=exit-debt;expected('rea-34',[100*((netIncome+exitEquity)/equity-1)]);close(netIncome,30);close(100*((operating+exit)/property-1),9.5);expected('rea-62',[(2-.5)*60-80]);expected('rea-72',[24-6-4-12]);const concession=Array.from({length:10},(_,i)=>20/(1.08)**(i+1)).reduce((a,b)=>a+b,-100);expected('rea-67',[concession]);
});
test('continuous carry, complete commodity returns and settlement timing use the specified starting values',()=>{
 const net=.02+.04-.10,carry=100*Math.exp(net);expected('res-25',[carry]);close(100*(1+net/1e5)**1e5,carry,1e-6);const opening=[50,50],ending=opening[0]*1.2+opening[1]*.9;expected('res-45',[100*(ending/100-1)]);let balance=100;for(const settlement of [10,-10])balance=balance*1.02+settlement;expected('res-50',[balance]);close(balance,104.24);
});
test('discrete ES selects exactly the worst five observations of the equivalent hundred-state model',()=>{
 const states=[...Array(70).fill(0),...Array(20).fill(5),...Array(6).fill(10),...Array(3).fill(20),50].sort((a,b)=>b-a),tail=states.slice(0,5),mean=a=>a.reduce((x,y)=>x+y)/a.length;expected('rm-75',[mean(tail)]);assert.deepEqual(tail,[50,20,20,20,10]);close(mean(states.filter(x=>x>=10)),17);close(mean(states.filter(x=>x>10)),27.5);assert.ok(q('rm-75').solution.find(b=>b.kind==='table').rows[2][2].includes('1 %'));
});
