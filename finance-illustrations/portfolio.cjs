const {sample:s,line:l,mark:m,fmt,normalPDF}=require('./chart.cjs'),S=require('./sources.cjs');
const figs={},add=(chapter,f)=>(figs[chapter]??=[]).push(f);
// A: mean 6%, volatility 10%; B: mean 12%, volatility 20%; weight w is B.
const variance=(w,rho=.2)=>(1-w)**2*.1**2+w*w*.2**2+2*w*(1-w)*rho*.1*.2;
const portfolio=(w,rho=.2)=>[100*Math.sqrt(Math.max(0,variance(w,rho))),6+6*w];
const curve=(lo,hi,rho=.2)=>s(lo,hi,w=>w).map(([w])=>portfolio(w,rho));
const wGMV=1/7,wT=7/17,T=portfolio(wT),sharpe=(T[1]-2)/T[0];
add('portfolio-01',{
 id:'portfolio-correlation-sets',title:'Zwei Anlagen: Korrelation verändert die erreichbare Kurve',
 takeaway:'Bei gleichen Renditeannahmen und Einzelrisiken verschiebt geringerer Gleichlauf die Portfolios nach links.',
 read:'A hat erwartete Rendite 6 % und Volatilität 10 %, B 12 % und 20 %. Jede Kurve enthält sämtliche Mischungen ohne Leerverkäufe. Bei perfektem Gleichlauf ρ = 1 entsteht eine Gerade. Bei ρ = −1 kann die Kombination aus 2/3 A und 1/3 B die Schwankungen im Modell vollständig ausgleichen: Punkt H bei 0 % Volatilität und 8 % erwarteter Rendite. Diese Nullrisikokombination ist keine allgemeine Marktmöglichkeit.',
 assumptions:'Ein Periodenhorizont, stabile Momente, identische Renditeeinheiten, Gewichte summieren sich zu eins. Verglichen werden drei alternative Modellwelten. Ein unveränderter sicherer Satz von 2 % wäre mit der risikolosen 8-%-Kombination und unbegrenzter Arbitrage nicht vereinbar; hier wird daher kein sicherer Anlagebaustein unterstellt.',
 tex:String.raw`\mu_p=(1-w)\mu_A+w\mu_B,\qquad \sigma_p^2=(1-w)^2\sigma_A^2+w^2\sigma_B^2+2w(1-w)\rho\sigma_A\sigma_B,\quad0\le w\le1`,sources:[S.portfolio],links:['portfolio-02','portfolio-03'],
 plot:{x:[0,23],y:[4,14],xLabel:'Portfoliovolatilität σₚ (%)',yLabel:'Erwartete Rendite E[Rₚ] (%)',series:[l('ρ = 1: perfekter Gleichlauf',curve(0,1,1)),l('ρ = 0,2: begrenzter Gleichlauf',curve(0,1,.2),{dash:'8 5'}),l('ρ = −1: perfekter Gegenlauf',[portfolio(0,-1),portfolio(1/3,-1),portfolio(1,-1)],{dash:'3 5'})],marks:[m(10,6,'A',{dy:25}),m(20,12,'B'),m(0,8,'H',{dx:13})]}
});
add('portfolio-01',{
 id:'diversification-number',title:'Mehr Titel entfernen nur das diversifizierbare Risiko',
 takeaway:'Bei positivem durchschnittlichem Gleichlauf bleibt selbst in einem sehr großen Portfolio ein Risikosockel.',
 read:'Alle Titel haben Volatilität 30 % und paarweise Korrelation 0,25; sie werden gleich gewichtet. Bei einem Titel beträgt das Risiko 30 %, bei zehn rund '+fmt(Math.sqrt(.09*(.25+.75/10))*100)+' %, bei 60 rund '+fmt(Math.sqrt(.09*(.25+.75/60))*100)+' %. Der Grenzwert ist 15 %, nicht null. Die ersten zusätzlichen Titel bewirken am meisten.',
 assumptions:'Gleichgewichtetes Modell mit identischer Varianz und einheitlicher, unveränderter positiver Korrelation. In der Realität sind Titel, Sektoren und Risikobeiträge unterschiedlich; viele stark ähnliche Positionen bieten wenig zusätzliche Diversifikation.',
 tex:String.raw`\sigma_p^2=\frac{\sigma^2}{N}+\frac{N-1}{N}\rho\sigma^2=\sigma^2\left(\rho+\frac{1-\rho}{N}\right),\qquad \lim_{N\to\infty}\sigma_p=\sigma\sqrt\rho=15\%`,sources:[S.capm],links:['portfolio-05','portfolio-12'],
 plot:{x:[0,60],y:[0,35],xLabel:'Anzahl gleich gewichteter Titel N',yLabel:'Portfoliovolatilität σₚ (%)',series:[l('Gesamtrisiko',s(1,60,n=>30*Math.sqrt(.25+.75/n),59)),l('Grenzwert bei sehr vielen Titeln',s(0,60,()=>15),{dash:'8 5'})],marks:[m(1,30,'N = 1'),m(10,30*Math.sqrt(.325),'N = 10')]}
});
const utilityA=4,sigmaOpt=.4/utilityA,U=.02+.4*sigmaOpt-.5*utilityA*sigmaOpt**2;
add('portfolio-02',{
 id:'utility-capital-allocation',title:'Risikoaversion bestimmt die Mischung auf der Kapitalallokationslinie',
 takeaway:'Das optimale Gesamtportfolio liegt dort, wo die höchste erreichbare Indifferenzkurve die CAL berührt.',
 read:'Ein riskantes Portfolio P bietet 8 % erwartete Rendite und 15 % Volatilität; der sichere Satz beträgt 2 %. Die CAL hat damit eine Sharpe Ratio von 0,4. Bei Risikoaversion A = 4 liegt das Optimum O bei 10 % Volatilität und 6 % erwarteter Rendite: 2/3 in P, 1/3 sicher. Die steilere Indifferenzkurve für A = 8 hätte bei gleichem Nutzenniveau höhere Renditeanforderungen; deren eigenes Optimum liegt bei 5 % Volatilität und 4 % Rendite.',
 assumptions:'Mean-Variance-Nutzen U = μ − Aσ²/2 mit Renditen in Dezimalform; gleiche sichere Kredit- und Anlagezinsen, keine Kosten. Die gezeichnete CAL gehört zu einem vorgegebenen P. Sie heißt nur dann CML, wenn P unter CAPM-Annahmen das Marktportfolio ist. Die Kurve A = 8 wird bewusst beim selben U = 4 % verglichen, nicht als deren erreichbares Optimum.',
 tex:String.raw`U=\mu-\frac{A}{2}\sigma^2,\quad\mu=0{,}02+0{,}4\sigma,\quad\sigma^*=\frac{0{,}4}{A};\qquad A=4:\quad\sigma^*=0{,}10,\ \mu^*=0{,}06,\ w_P=\frac{0{,}10}{0{,}15}=\frac23`,sources:[S.portfolio],links:['portfolio-03','portfolio-07'],
 plot:{x:[0,22],y:[0,16],xLabel:'Gesamtvolatilität σ (%)',yLabel:'Erwartete Rendite μ (%)',series:[l('CAL durch den sicheren Satz und P',s(0,22,x=>2+.4*x)),l('Indifferenz: A = 4, U = 4 %',s(0,22,x=>100*(U+2*(x/100)**2)),{dash:'8 5'}),l('Indifferenz: A = 8, U = 4 %',s(0,17,x=>100*(U+4*(x/100)**2)),{dash:'3 5'})],marks:[m(0,2,'rᶠ'),m(10,6,'O',{guides:true,dy:25}),m(15,8,'P',{dy:25})]}
});
add('portfolio-03',{
 id:'efficient-frontier-cml',title:'Minimumvarianz, effiziente Grenze und Tangentialportfolio',
 takeaway:'Die Kapitalallokationslinie mit der höchsten Steigung berührt die effiziente Grenze im Tangentialportfolio.',
 read:`Die beiden riskanten Anlagen sind A (6 % Rendite, 10 % Volatilität) und B (12 %, 20 %), bei Korrelation 0,2. G ist das globale Minimumvarianzportfolio: ${fmt(portfolio(wGMV)[0])} % Risiko und ${fmt(portfolio(wGMV)[1])} % Rendite. Unterhalb G sind die Portfolios ineffizient. Die Gerade ab rᶠ = 2 % berührt die obere Grenze in T: ${fmt(T[0])} % Risiko, ${fmt(T[1])} % Rendite, Gewicht B = ${fmt(wT*100)} %.`,
 assumptions:'Zwei riskante Anlagen, bekannte erwartete Renditen und Kovarianzen; für die vollständige Grenze sind Leerverkäufe zugelassen. Einheitlicher sicherer Anlage- und Kreditzins. Die Gerade ist die optimale CAL dieses Anlageuniversums; sie ist nur unter den zusätzlichen CAPM-Gleichgewichtsannahmen mit dem gesamten Markt als T die Kapitalmarktlinie CML.',
 tex:String.raw`\sigma_p^2=0{,}01-0{,}012w+0{,}042w^2,\quad\mu_p=0{,}06+0{,}06w;\qquad w_{GMV}=\frac17,\quad w_T=\frac7{17};\qquad \mu_C=r_f+\frac{\mu_T-r_f}{\sigma_T}\sigma_C`,sources:[S.portfolio,S.capm],links:['portfolio-02','portfolio-04','portfolio-08'],
 plot:{x:[0,31],y:[0,19],xLabel:'Gesamtrisiko σ (%)',yLabel:'Erwartete Rendite μ (%)',series:[l('Effizienter Ast riskanter Portfolios',curve(wGMV,1.5)),l('Ineffizienter Ast',curve(-.7,wGMV),{dash:'8 5'}),l('Optimale CAL; im CAPM die CML',s(0,28,x=>2+sharpe*x),{dash:'3 5'})],marks:[m(...portfolio(wGMV),'G',{dx:-12,dy:20,anchor:'end'}),m(...T,'T',{dx:-10,dy:-17,anchor:'end',guides:true}),m(20,12,'B',{dy:23}),m(0,2,'rᶠ')]}
});
add('portfolio-04',{
 id:'security-market-line',title:'Wertpapiermarktlinie: Beta statt Gesamtvolatilität',
 takeaway:'Das CAPM ordnet erwartete Rendite dem systematischen Risiko Beta zu.',
 read:'Bei rᶠ = 2 % und erwarteter Marktrendite 8 % beträgt die Marktrisikoprämie 6 Prozentpunkte. Für β = 1,5 verlangt das CAPM 11 % (R). Eine eigene Erwartung von 13 % (A) liegt zwei Prozentpunkte darüber. Dieser Abstand ist ein prognostiziertes Alpha gegenüber dem Modell, kein sicherer Gewinn. M hat β = 1 und erwartete Rendite 8 %.',
 assumptions:'Es werden erwartete Renditen verglichen, keine realisierten Einjahresrenditen. Die SML gilt im CAPM für einzelne Titel und Portfolios. Ihre horizontale Achse ist Beta; die CML des vorherigen Kapitels verwendet dagegen Gesamtvolatilität und betrifft effiziente Gesamtportfolios.',
 tex:String.raw`E[R_i]=r_f+\beta_i(E[R_M]-r_f)=2\%+\beta_i\cdot6\%;\qquad \alpha^{\mathrm{Prognose}}=13\%-11\%=2\%`,sources:[S.capm],links:['portfolio-03','equity-06'],
 plot:{x:[0,2],y:[0,16],xLabel:'Beta β (dimensionslos)',yLabel:'Erwartete Rendite E[R] (%)',series:[l('SML: CAPM-Renditeforderung',s(0,2,b=>2+6*b)),l('Abstand der eigenen Prognose',[[1.5,11],[1.5,13]],{dash:'4 4'})],marks:[m(1,8,'M'),m(1.5,11,'R',{dy:25}),m(1.5,13,'A · Prognose'),m(0,2,'rᶠ')]}
});
const marketX=[-10,-8,-6,-4,-2,0,2,4,6,8,10],eps=[1,-1,2,-2,-1,2,-1,-2,2,-1,1];
add('portfolio-04',{
 id:'beta-regression',title:'Beta als Regressionssteigung, Alpha als Achsenabschnitt',
 takeaway:'Beta beschreibt die Reaktion auf den Markt; einzelne Beobachtungen können deutlich von der Geraden abweichen.',
 read:'Die Punkte sind elf konstruierte Periodenbeobachtungen der Überschussrenditen. Die Regressionsgerade besitzt Steigung 1,2 und Achsenabschnitt 1 Prozentpunkt. Ein Marktanstieg um einen Prozentpunkt ist entlang der Geraden mit 1,2 Prozentpunkten höherer Titelrendite verbunden. Die vertikalen Abstände sind Residuen und zeigen, warum Beta nicht das gesamte Risiko misst.',
 assumptions:'Didaktischer Datensatz, keine empirische Schätzung eines echten Titels. Die Residuen sind so gewählt, dass ihre Summe und ihre Kovarianz mit dem Markt null sind; OLS ergibt dadurch genau α = 1 Prozentpunkt und β = 1,2. Ein solches Stichprobenalpha belegt keine dauerhafte Fähigkeit.',
 tex:String.raw`R_i-r_f=\alpha+\beta(R_M-r_f)+\varepsilon_i,\qquad \widehat\beta=\frac{\operatorname{Cov}(R_i-r_f,R_M-r_f)}{\operatorname{Var}(R_M-r_f)},\quad \widehat\alpha=\bar R_i-r_f-\widehat\beta(\bar R_M-r_f)`,sources:[S.capm],links:['quant-09','portfolio-05'],
 plot:{x:[-12,12],y:[-16,18],xLabel:'Marktüberschussrendite Rₘ − rᶠ (%)',yLabel:'Titelüberschussrendite Rᵢ − rᶠ (%)',series:[l('Regressionsgerade: 1 + 1,2x',s(-12,12,x=>1+1.2*x))],marks:marketX.map((x,i)=>m(x,1+1.2*x+eps[i],''))}
});
add('portfolio-07',{
 id:'horizon-wealth-band',title:'Längerer Horizont beseitigt die Unsicherheit des Endvermögens nicht',
 takeaway:'Selbst mit stabilen positiven Wachstumsaussichten kann die Streuung möglicher Endvermögen über die Zeit stark wachsen.',
 read:'Aus Anfangsvermögen 1 entstehen bei unabhängig normalverteilten jährlichen Logrenditen drei Quantilpfade. Die mittlere Linie ist der Median, nicht der Erwartungswert. Nach 20 Jahren liegt der Median bei 2,72; das 10-%-Quantil bei etwa '+fmt(Math.exp(1-1.281551565545*.2*Math.sqrt(20)))+' und das 90-%-Quantil bei '+fmt(Math.exp(1+1.281551565545*.2*Math.sqrt(20)))+'. Der Abstand der Endvermögen wächst. Eine konkrete Zahlung zu einem festen Termin kann deshalb nicht allein mit „langem Horizont“ abgesichert werden.',
 assumptions:'Jährliche Logrendite mit Mittel 5 % und Standardabweichung 20 %, unabhängig und identisch verteilt; keine Entnahmen, Steuern, Gebühren oder Inflation. Es sind Quantile für jeden Endzeitpunkt, kein Band, in dem ein ganzer Anlagepfad mit 80 % Wahrscheinlichkeit bleibt. Strukturbrüche und Liquiditätsbedarf werden nicht erfasst.',
 tex:String.raw`\log(W_T/W_0)\sim N(T\mu_\ell,T\sigma_\ell^2),\qquad Q_p(W_T)=W_0\exp(T\mu_\ell+z_p\sigma_\ell\sqrt T);\quad\mu_\ell=0{,}05,\ \sigma_\ell=0{,}20`,sources:[S.portfolio],links:['quant-03','path-wealth-03'],
 plot:{x:[0,30],y:[0,20],xLabel:'Anlagehorizont T (Jahre)',yLabel:'Endvermögen / Anfangsvermögen',series:[l('10-%-Quantil',s(0,30,t=>Math.exp(.05*t-1.281551565545*.2*Math.sqrt(t)))),l('Median (50-%-Quantil)',s(0,30,t=>Math.exp(.05*t)),{dash:'8 5'}),l('90-%-Quantil',s(0,30,t=>Math.exp(.05*t+1.281551565545*.2*Math.sqrt(t))),{dash:'3 5'})]}
});
add('portfolio-08',{
 id:'allocation-constraints',title:'Restriktionen begrenzen das erreichbare Anlageuniversum',
 takeaway:'Eine zulässige Höchstquote kann die renditestärkeren Portfolios einer ansonsten möglichen Kurve ausschließen.',
 read:'Im Zwei-Anlagen-Modell der effizienten Grenze wird nun die Gewichtung der riskanteren Anlage B auf höchstens 30 % begrenzt; Leerverkäufe sind ausgeschlossen. Der dick gezeichnete Abschnitt enthält die zulässigen Mischungen. Am Rand K liegen erwartete Rendite 7,8 % und Risiko '+fmt(portfolio(.3)[0])+' %. Das Tangentialportfolio des unbeschränkten Modells mit 41,18 % B ist nicht zulässig. Innerhalb des zulässigen Abschnitts ist der untere Ast bis G weiterhin ineffizient.',
 assumptions:'Feste Modellmomente und eine einzelne Gewichtsobergrenze. Die Grafik zeigt erreichbare Portfolios, keine Empfehlung für eine strategische Quote. Liquiditäts-, Währungs-, Steuer- und Verpflichtungsrestriktionen können die Auswahl zusätzlich verändern.',
 tex:String.raw`w_A+w_B=1,\quad w_A,w_B\ge0,\quad w_B\le0{,}30;\qquad\mu_p=0{,}06+0{,}06w_B,\quad\sigma_p^2=0{,}01-0{,}012w_B+0{,}042w_B^2`,sources:[S.portfolio,S.process],links:['portfolio-03','advanced-02'],
 plot:{x:[8,23],y:[5,13],xLabel:'Portfoliovolatilität σₚ (%)',yLabel:'Erwartete Rendite μₚ (%)',series:[l('Alle Mischungen ohne Leerverkauf',curve(0,1),{color:'#8b9ea8',dash:'8 5'}),l('Zulässig: Gewicht B höchstens 30 %',curve(0,.3),{color:'#087f82',width:5})],marks:[m(...portfolio(0),'A',{dx:-12,anchor:'end'}),m(...portfolio(.3),'K',{guides:true}),m(...portfolio(wGMV),'G',{dx:-12,dy:5,anchor:'end'})]}
});
add('portfolio-09',{
 id:'fees-compound',title:'Kleine jährliche Gebühren erzeugen wachsende Vermögensabstände',
 takeaway:'Die Gebühr vermindert nicht nur den aktuellen Wert, sondern auch dessen künftigen Zinseszins.',
 read:'Alle Linien unterstellen dieselbe Bruttorendite von 6 % und Startvermögen 100. Die Gebühr wird jeweils am Jahresende nach der Rendite abgezogen. Nach 30 Jahren ergeben sich ohne Gebühr '+fmt(100*1.06**30)+', bei 0,2 % Gebühr '+fmt(100*(1.06*.998)**30)+' und bei 1,5 % Gebühr '+fmt(100*(1.06*.985)**30)+'. Der Unterschied stammt ausschließlich aus den Gebührenannahmen; ein möglicher Mehrertrag aktiver Verwaltung ist hier nicht eingebaut.',
 assumptions:'Konstante hypothetische Bruttorendite, proportionale jährliche Gebühr, keine Steuern oder Zu- und Abflüsse. Gebühren können in echten Produkten anders berechnet werden. Der Vergleich isoliert die Kostenwirkung und trifft keine Aussage darüber, welches konkrete Produkt besser ist.',
 tex:String.raw`W_T=W_0[(1+r)(1-c)]^T,\qquad r_{net}=(1+r)(1-c)-1=r-c-rc`,sources:[S.tvm,S.process],links:['quant-01','portfolio-14'],
 plot:{x:[0,30],y:[0,600],xLabel:'Jahre T',yLabel:'Vermögen (Startwert 100)',series:[0,.002,.015].map((c,i)=>l('Jährliche Gebühr '+fmt(c*100,1)+' %',s(0,30,t=>100*(1.06*(1-c))**t,30),{dash:i===1?'8 5':i===2?'3 5':undefined}))}
});
const rebalanced=[.6],drift=[.6];for(let t=1;t<=10;t++){const growth=w=>w*1.10/(w*1.10+(1-w)*1.02);drift.push(growth(drift.at(-1)));rebalanced.push(growth(.6));}
add('portfolio-10',{
 id:'rebalancing-drift',title:'Gewichtsdrift und periodisches Rebalancing',
 takeaway:'Ein Portfolio hält seine Zielgewichte nicht automatisch, wenn seine Anlagen unterschiedlich wachsen.',
 read:'Gestartet wird mit 60 % Aktien und 40 % Anleihen. Bei jährlich 10 % Aktien- und 2 % Anleiherendite wächst die Aktienquote ohne Rebalancing nach zehn Jahren auf '+fmt(drift.at(-1)*100)+' %. Beim jährlichen Rebalancing steigt sie jeweils vor dem Handel auf '+fmt(rebalanced[1]*100)+' % und fällt durch den Verkauf von Aktien zurück auf 60 %. Die senkrechten Linien zeigen die Handelszeitpunkte.',
 assumptions:'Deterministischer Pfad zur isolierten Darstellung der Gewichtsmechanik, keine Renditeprognose. Die Grafik zeigt Quoten, nicht den Anlageerfolg. Kosten, Steuern und Mindesthandelsgrößen fehlen; in einem stetigen Aktienaufwärtspfad kann Nicht-Rebalancieren höhere Rendite bei höherem Aktienrisiko liefern.',
 tex:String.raw`w_{A,t}^{-}=\frac{w_{A,t-1}^{+}(1+R_{A,t})}{w_{A,t-1}^{+}(1+R_{A,t})+(1-w_{A,t-1}^{+})(1+R_{B,t})},\qquad w_{A,t}^{+}=0{,}60`,sources:[S.process],links:['portfolio-08','path-portfolio-05'],
 plot:{x:[0,10],y:[50,80],xLabel:'Jahre t',yLabel:'Aktiengewicht im Portfolio (%)',series:[l('Ohne Rebalancing',drift.map((w,t)=>[t,w*100])),l('Jährlich nach Rendite zurück auf 60 %',[[0,60],...Array.from({length:10},(_,i)=>[[i+1,rebalanced[1]*100],[i+1,60]]).flat()],{dash:'8 5'})]}
});
add('portfolio-11',{
 id:'prospect-value',title:'Referenzabhängige Bewertung und Verlustaversion',
 takeaway:'Gleich große Gewinne und Verluste können subjektiv unterschiedlich stark wirken.',
 read:'Der Referenzpunkt liegt bei null. Auf der Gewinnseite flacht die Kurve mit wachsendem Gewinn ab, auf der Verlustseite ist sie konvex. Bei gleich großen Beträgen von 25 besitzt ein Verlust hier den 2,25-fachen absoluten subjektiven Wert eines Gewinns. Die rote Vergleichslinie zeigt eine lineare Bewertung mit gleich starker Reaktion auf Gewinne und Verluste.',
 assumptions:'Schematische Wertfunktion der Prospect Theory, keine kardinal messbare Zufriedenheit. Die Parameter 0,88 und 2,25 sind illustrative Modellwerte und gelten nicht für jede Person. Wahrscheinlichkeitsgewichtung und der Entscheidungsrahmen einer vollständigen Prospect-Theory-Anwendung werden hier nicht dargestellt.',
 tex:String.raw`v(x)=\begin{cases}x^{0{,}88},&x\ge0,\\-2{,}25(-x)^{0{,}88},&x<0.\end{cases}`,sources:[{title:'Kahneman & Tversky · Prospect Theory (1979)',url:'https://doi.org/10.2307/1914185'}],links:['portfolio-02','portfolio-06'],
 plot:{x:[-50,50],y:[-80,55],xLabel:'Gewinn / Verlust relativ zum Referenzpunkt',yLabel:'Subjektiver Wert v(x) (Modellskala)',series:[l('Referenzabhängige Wertfunktion',s(-50,50,x=>x>=0?x**.88:-2.25*(-x)**.88)),l('Lineare Vergleichsbewertung v(x) = x',s(-50,50,x=>x),{dash:'8 5'})],marks:[m(0,0,'Referenzpunkt',{dy:25}),m(25,25**.88,'Gewinn'),m(-25,-2.25*25**.88,'Verlust',{dx:-12,dy:24,anchor:'end'})]}
});
const z95=1.6448536269514722,lossVaR=10*z95,lossES=10*normalPDF(z95)/.05;
add('portfolio-12',{
 id:'loss-var-expected-shortfall',title:'VaR als Schwelle, Expected Shortfall als Durchschnitt dahinter',
 takeaway:'Der VaR sagt, wo der Verlustschwanz beginnt; der Expected Shortfall beschreibt dessen durchschnittliche Höhe.',
 read:'Die horizontale Achse zeigt Verluste: positive Werte rechts sind schlecht, negative Werte entsprechen Gewinnen. Bei normalverteiltem Einperiodenverlust mit Mittel null und Standardabweichung 10 % liegt der 95-%-VaR bei 16,45 % des Vermögens. Die schattierte rechte Fläche enthält 5 % Wahrscheinlichkeit; deren bedingter mittlerer Verlust beträgt 20,63 %. Der ES ist damit keine zweite Quantilsgrenze.',
 assumptions:'Stetige Normalverteilung, fester Zeithorizont, Verluste in Prozent des heutigen Vermögens. Die Dichte hat die Einheit 1/Prozentpunkt. Der rechte Schwanz setzt sich über den dargestellten Bereich hinaus fort. Reale Sprünge, fette Verteilungsschwänze und Liquiditätskosten können Verluste wesentlich erhöhen.',
 tex:String.raw`L\sim N(0,10^2)\quad(L\text{ in Prozentpunkten});\qquad VaR_{0{,}95}=10z_{0{,}95}\approx16{,}45,\quad ES_{0{,}95}=10\frac{\varphi(z_{0{,}95})}{0{,}05}\approx20{,}63`,sources:[S.risk],links:['quant-07','portfolio-13'],
 plot:{x:[-35,40],y:[0,.045],xLabel:'Einperiodenverlust L (% des Vermögens)',yLabel:'Wahrscheinlichkeitsdichte (1/Prozentpunkt)',yTicks:[0,.01,.02,.03,.04],series:[l('Normaldichte des Verlusts',s(-35,40,x=>normalPDF(x,0,10))),l('95-%-VaR',[[lossVaR,0],[lossVaR,.035]],{dash:'8 5'}),l('Expected Shortfall',[[lossES,0],[lossES,.028]],{dash:'3 5'})],areas:[{points:[[lossVaR,0],...s(lossVaR,40,x=>normalPDF(x,0,10)),[40,0]]}],marks:[m(lossVaR,.035,'VaR',{dx:-10,anchor:'end'}),m(lossES,.028,'ES')]}
});
add('portfolio-13',{
 id:'stress-correlation',title:'Diversifikation kann im gemeinsamen Stress schwächer werden',
 takeaway:'Eine höhere Korrelation hebt das Risiko gemischter Portfolios, obwohl die Einzelvolatilitäten unverändert bleiben.',
 read:'A schwankt mit 10 %, B mit 20 %. Die Kurven vergleichen die Portfoliovolatilität über alle B-Gewichte: einmal bei Korrelation 0,2, einmal bei 0,9. Am 50/50-Punkt steigt das Risiko von '+fmt(portfolio(.5,.2)[0])+' % auf '+fmt(portfolio(.5,.9)[0])+' %. An den Endpunkten gibt es keinen Unterschied, weil dort jeweils nur eine Anlage gehalten wird.',
 assumptions:'Dies ist ein isolierter Korrelationsstress. Erwartete Renditen, Volatilitäten, Liquidität und Gewichte bleiben konstant; reale Krisen verändern oft mehrere Größen gleichzeitig. Eine hypothetische Stresskorrelation wird nicht mit einer geschätzten Eintrittswahrscheinlichkeit gleichgesetzt.',
 tex:String.raw`\sigma_p^2=(1-w)^2\sigma_A^2+w^2\sigma_B^2+2w(1-w)\rho\sigma_A\sigma_B,\qquad\frac{\partial\sigma_p^2}{\partial\rho}=2w(1-w)\sigma_A\sigma_B`,sources:[S.portfolio,S.risk],links:['portfolio-01','advanced-08'],
 plot:{x:[0,100],y:[0,23],xLabel:'Gewicht der Anlage B (%)',yLabel:'Portfoliovolatilität σₚ (%)',series:[l('Ausgangsmodell: ρ = 0,2',s(0,100,w=>portfolio(w/100,.2)[0])),l('Korrelationsstress: ρ = 0,9',s(0,100,w=>portfolio(w/100,.9)[0]),{dash:'8 5'})],marks:[m(50,portfolio(.5,.2)[0],'A',{guides:true,dy:24}),m(50,portfolio(.5,.9)[0],'B')]}
});
add('portfolio-14',{
 id:'sharpe-risk-matching',title:'Sharpe Ratio: Renditen erst bei gleichem Gesamtrisiko vergleichen',
 takeaway:'Das Portfolio mit der höheren Roh-Rendite muss nicht das bessere Verhältnis von Überschussrendite zu Risiko besitzen.',
 read:'P erzielt erwartete 8 % bei 10 % Volatilität, Q 11 % bei 20 %. Bei sicherem Satz 2 % beträgt die Sharpe Ratio von P 0,6, von Q 0,45. Wird Q mit 50 % sicherer Anlage auf Risiko 10 % skaliert, bietet es 6,5 % Rendite (Q′); P bietet bei demselben Risiko 8 %. Die unterschiedliche Steigung macht den Vergleich sichtbar.',
 assumptions:'Identischer Horizont und sicherer Satz, erwartete Renditen und Volatilitäten, lineare Kombination mit einer sicheren Anlage. Die Geraden sind CALs für zwei gegebene Portfolios, keine gemeinsame effiziente Grenze. Treynor verwendet Beta und Information Ratio verwendet Tracking Error; diese Kennzahlen beantworten andere Fragen.',
 tex:String.raw`SR_P=\frac{0{,}08-0{,}02}{0{,}10}=0{,}60,\quad SR_Q=\frac{0{,}11-0{,}02}{0{,}20}=0{,}45;\qquad E[R_{Q'}]=0{,}02+0{,}45\cdot0{,}10=0{,}065`,sources:[S.capm],links:['portfolio-04','advanced-10'],
 plot:{x:[0,23],y:[0,17],xLabel:'Gesamtvolatilität σ (%)',yLabel:'Erwartete Rendite (%)',series:[l('CAL für P: Sharpe Ratio 0,60',s(0,23,x=>2+.6*x)),l('CAL für Q: Sharpe Ratio 0,45',s(0,23,x=>2+.45*x),{dash:'8 5'})],marks:[m(10,8,'P'),m(20,11,'Q',{dy:24}),m(10,6.5,'Q′',{guides:true,dx:-12,dy:24,anchor:'end'})]}
});
module.exports=figs;
Object.defineProperty(module.exports,'models',{value:{variance,portfolio,wGMV,wT,T,sharpe,marketX,eps,lossVaR,lossES,drift}});
