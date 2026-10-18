/* Pure, deterministic teaching models; bundled into index.html for offline use. */
(function(root){
'use strict';
const models={};
const field=(key,label,min,max,step,value)=>({key,label,min,max,step,value});
const seq=(lo,hi,fn,n=60)=>Array.from({length:n+1},(_,i)=>{const x=lo+(hi-lo)*i/n;return [x,fn(x)];});
const result=(metrics,points,xLabel,yLabel,note='')=>({metrics,points,xLabel,yLabel,note});
const add=(id,title,intro,controls,calc)=>{models[id]={title,intro,controls,calc};};
const cdf=x=>{const a=Math.abs(x),t=1/(1+.2316419*a),p=1-Math.exp(-a*a/2)/Math.sqrt(2*Math.PI)*t*(.319381530+t*(-.356563782+t*(1.781477937+t*(-1.821255978+t*1.330274429))));return x<0?1-p:p;};
const inv=p=>{let a=-10,b=10;for(let i=0;i<80;i++){let m=(a+b)/2;if(cdf(m)<p)a=m;else b=m;}return(a+b)/2;};
const annuity=(c,r,n)=>r===0?c*n:c*(-Math.expm1(-n*Math.log1p(r)))/r;
const price=(coupon,y,n)=>annuity(coupon,y,n)+100/(1+y)**n;
const bsm=(S,K,r,v,T)=>{const d1=(Math.log(S/K)+(r+v*v/2)*T)/(v*Math.sqrt(T)),d2=d1-v*Math.sqrt(T);const call=S*cdf(d1)-K*Math.exp(-r*T)*cdf(d2);return {call,put:call-S+K*Math.exp(-r*T),delta:cdf(d1)};};
add('dcf','Barwert und Zeit','Verändere Zinssatz und Zahlungszeitpunkt. Die Kurve zeigt den Wert derselben zukünftigen Zahlung heute.',[field('fv','Zahlung (€)',0,100000,100,1000),field('r','Diskontsatz (% p. a.)',-5,30,.25,5),field('n','Jahre',1,40,1,3)],p=>result([['Barwert (€)',p.fv/(1+p.r/100)**p.n]],seq(0,40,t=>p.fv/(1+p.r/100)**t),'Jahre bis Zahlung','Barwert (€)','Einzelzahlung, konstanter jährlicher Zinssatz; keine Steuern.'));
add('annuity','Eine Zahlungsreihe bewerten','Die Kurve addiert den Barwert weiterer gleich hoher Jahreszahlungen.',[field('c','Jahreszahlung (€)',0,50000,100,100),field('r','Zins (% p. a.)',0,20,.25,5),field('n','Zahlungen',1,50,1,3)],p=>result([['Barwert (€)',annuity(p.c,p.r/100,p.n)]],seq(1,50,n=>annuity(p.c,p.r/100,Math.round(n)),49),'Anzahl Jahreszahlungen','Barwert (€)','Zahlungen jeweils am Jahresende. Bei Zins null gilt Barwert = Zahlung × Anzahl.'));
add('growth','Wachstum und Schwankungen','Vergleiche das Wachstum eines jährlich wechselnden Renditepaares. Die Kurve ist deterministisch und keine Monte-Carlo-Prognose.',[field('mu','Mittlere Rendite (%)',-10,20,.5,5),field('d','Abweichung ± (%-Punkte)',0,60,1,20)],p=>{const g=Math.sqrt((1+(p.mu+p.d)/100)*(1+(p.mu-p.d)/100))-1;return result([['Arithmetisches Mittel (%)',p.mu],['Geometrisches Mittel (%)',g*100]],seq(0,30,n=>100*(1+g)**n),'Jahre','Geglätteter Wachstumsfaktor (Start 100)','Renditen wechseln zwischen Mittelwert plus und minus Abweichung; Kurve zeigt geometrischen Trend.');});
add('diversification','Zwei Anlagen kombinieren','Beobachte, wie Korrelation und Gewicht das Gesamtrisiko verändern.',[field('a','Volatilität A (%)',1,60,1,20),field('b','Volatilität B (%)',1,60,1,20),field('rho','Korrelation',-1,1,.05,0),field('w','Gewicht A (%)',0,100,1,50)],p=>{const vol=w=>Math.sqrt(Math.max(0,w*w*p.a*p.a+(1-w)**2*p.b*p.b+2*w*(1-w)*p.rho*p.a*p.b));return result([['Portfoliovolatilität (%)',vol(p.w/100)]],seq(0,100,w=>vol(w/100)),'Gewicht A (%)','Volatilität (%)','Zwei Anlagen, konstante Volatilitäten und Korrelation; keine erwartete Rendite modelliert.');});
add('capm','Beta und geforderte Rendite','Die Wertpapiermarktlinie vergütet im CAPM systematisches Risiko.',[field('rf','Risikofreier Zins (%)',0,10,.25,3),field('premium','Marktrisikoprämie (%)',0,12,.25,5),field('beta','Beta',-1,3,.1,1.2)],p=>result([['Erforderliche Rendite (%)',p.rf+p.beta*p.premium]],seq(-1,3,b=>p.rf+b*p.premium),'Beta','Erforderliche Rendite (%)','CAPM-Modellannahmen; die Linie ist keine Prognosegarantie.'));
add('wacc','Eigen- und Fremdkapitalkosten','Verändere die Kapitalstruktur bei hier konstant gehaltenen Finanzierungssätzen.',[field('e','Eigenkapitalanteil (%)',0,100,1,60),field('ke','Eigenkapitalkosten (%)',1,25,.5,10),field('kd','Fremdkapitalkosten (%)',0,20,.25,5),field('tax','Modellsteuersatz (%)',0,50,1,25)],p=>{const f=e=>e/100*p.ke+(1-e/100)*p.kd*(1-p.tax/100);return result([['WACC (%)',f(p.e)]],seq(0,100,f),'Eigenkapitalanteil (%)','WACC (%)','Marktwertgewichte; nutzbarer Tax Shield. In der Realität ändern sich Kapitalrisiko und Finanzierungssätze mit der Verschuldung.');});
add('gordon','Wachstum versus Diskontierung','Je näher ewiges Wachstum am Diskontsatz liegt, desto empfindlicher wird die Bewertung.',[field('d','Nächste Jahreszahlung',.1,20,.1,3),field('r','Diskontsatz (%)',1,20,.25,8),field('g','Ewiges Wachstum (%)',-5,10,.25,2)],p=>{if(p.g>=p.r)throw Error('Für eine endliche Gordon-Bewertung muss Wachstum g kleiner als Diskontsatz r sein.');return result([['Wert',p.d/((p.r-p.g)/100)]],seq(-5,Math.min(10,p.r-.5),g=>p.d/((p.r-g)/100)),'Wachstum (%)','Barwert','Konstantes ewiges Wachstum; Zahlung und Diskontsatz müssen zum selben Kapitalanspruch passen.');});
add('inflation','Nominal und real','Sieh, wie Inflation die Kaufkraft einer nominalen Rendite verändert.',[field('r','Nominalrendite (%)',-10,20,.5,6),field('pi','Inflation (%)',-2,15,.25,2)],p=>{const real=(1+p.r/100)/(1+p.pi/100)-1;return result([['Realrendite (%)',real*100]],seq(0,30,n=>100*(1+real)**n),'Jahre','Kaufkraft (Start 100)','Konstante Rendite und Inflation, ohne Entnahmen und Steuern.');});
add('fx','Währungsrendite übersetzen','Der Wechselkurs wird als Heimatwährung je Fremdwährungseinheit interpretiert.',[field('r','Lokale Anlagerendite (%)',-50,50,1,8),field('fx','Fremdwährungsänderung (%)',-40,40,1,-5)],p=>result([['Heimatrendite (%)',((1+p.r/100)*(1+p.fx/100)-1)*100]],seq(-40,40,f=>((1+p.r/100)*(1+f/100)-1)*100),'Fremdwährungsänderung (%)','Heimatrendite (%)','Ungesichert, eine Periode; die Kreuzkomponente wird berücksichtigt.'));
add('forward','Fairer Terminpreis','Finanzierung erhöht den Forwardpreis, laufende Erträge senken ihn.',[field('s','Spotpreis',1,200,.5,100),field('r','Finanzierung (% p. a.)',0,15,.25,5),field('q','Ertragsrate (% p. a.)',0,10,.25,0),field('t','Laufzeit (Jahre)',.25,5,.25,1)],p=>result([['Forwardpreis',p.s*Math.exp((p.r-p.q)/100*p.t)]],seq(0,5,t=>p.s*Math.exp((p.r-p.q)/100*t)),'Jahre','Forwardpreis','Stetige Zins- und Ertragsraten, keine Lagerkosten. Deshalb ergeben 5 % hier 105,13 statt 105 bei einfacher jährlicher Verzinsung.'));
add('bond','Anleihepreis, Duration und Zinsschock','Verändere jeweils Laufzeit, Kupon oder Rendite. Alle Kennzahlen stammen aus derselben vollständigen Barwertfunktion.',[field('c','Jahreskupon (% Nominal)',0,15,.25,5),field('y','Nominale Jahresrendite (%)',0,20,.25,6),field('n','Restlaufzeit (Jahre)',1,30,1,3),field('m','Kuponzahlungen pro Jahr',1,12,1,1),field('shock','Zinsschock (Basispunkte)',-500,500,25,100)],p=>{const y=p.y/100,m=p.m,kmax=p.n*m,calc=rate=>{let P=0,weighted=0,second=0;for(let k=1;k<=kmax;k++){const cf=p.c/m+(k===kmax?100:0),t=k/m,pv=cf/(1+rate/m)**k;P+=pv;weighted+=t*pv;second+=t*(t+1/m)*pv/(1+rate/m)**2;}const mac=weighted/P;return {P,mac,mod:mac/(1+rate/m),conv:second/P};},b=calc(y),d=p.shock/10000,exact=100*(calc(y+d).P/b.P-1),linear=-100*b.mod*d,quadratic=linear+50*b.conv*d*d;return result([['Preis je 100 Nominal',b.P],['Modified Duration (Jahre)',b.mod],['Macaulay Duration (Jahre)',b.mac],['DV01 je 100 Nominal',b.P*b.mod*.0001],['Konvexität (Jahre²)',b.conv],['Exakte Preisänderung (%)',exact],['Nur Duration (%)',linear],['Mit Konvexität (%)',quadratic]],seq(0,20,y=>calc(y/100).P),'Nominale Jahresrendite (%)','Preis je 100','Feste regelmäßige Kupons, Bewertung am Kupontermin; keine Ausfälle oder Optionen. Die Zahlungsfrequenz m bestimmt die Periodenrate y/m. Der Zinsschock verändert nur y. Negative Szenariorenditen sind im mathematisch zulässigen Bereich möglich.');});
add('credit','Erwarteter Kreditverlust','Ausfallhäufigkeit und Verlustschwere sind unterschiedliche Hebel.',[field('ead','Exposition (€)',1000,1000000,1000,1000000),field('pd','Ausfallwahrscheinlichkeit (%)',0,30,.5,2),field('lgd','Verlustquote bei Ausfall (%)',0,100,1,60)],p=>result([['Erwarteter Verlust (€)',p.ead*p.pd*p.lgd/10000]],seq(0,30,pd=>p.ead*pd*p.lgd/10000),'Ausfallwahrscheinlichkeit (%)','Erwarteter Verlust (€)','Ein definierter Zeitraum, konstante Exposition; erwarteter Verlust ist kein Worst Case und kein vollständiger Credit Spread.'));
add('waterfall','Gewinne zwischen LP und GP teilen','Ein vereinfachtes Carry-Modell zeigt den Unterschied zwischen Kapitalrückzahlung und Gewinnbeteiligung.',[field('capital','Eingezahltes Kapital',1,200,1,100),field('value','Ausschüttungsfähiger Endwert',0,400,1,150),field('carry','Carry auf Gewinn (%)',0,40,1,20)],p=>{const gp=v=>Math.max(0,v-p.capital)*p.carry/100;return result([['GP-Carry',gp(p.value)],['LP-Rückfluss',p.value-gp(p.value)]],seq(0,400,gp),'Endwert','GP-Carry','Ohne Gebühren, Hurdle, Catch-up, Recycling oder Clawback. Konkrete Verträge können wesentlich anders verteilen.');});
add('option','Call, Put und Absicherung am Laufzeitende','Wähle eine Strategie. Angezeigt wird der Nettogewinn nach Anfangskosten, ohne Finanzierung.',[field('strategy','Strategie',0,3,1,0),field('s','Aktienkaufpreis',10,200,1,100),field('k','Strike',10,200,1,100),field('premium','Optionsprämie',0,40,.5,5),field('end','Aktienkurs am Ende',0,250,1,110)],p=>{const names=['Long Call','Long Put','Protective Put','Covered Call'];const profit=x=>p.strategy===0?Math.max(x-p.k,0)-p.premium:p.strategy===1?Math.max(p.k-x,0)-p.premium:p.strategy===2?Math.max(x,p.k)-p.s-p.premium:x-p.s+p.premium-Math.max(x-p.k,0);return result([[names[p.strategy]+' · Gewinn',profit(p.end)]],seq(0,250,profit),'Endkurs','Nettogewinn je Einheit','0: Long Call · 1: Long Put · 2: Aktie + Put · 3: Aktie − Call. Europäisches Endprofil; kein Modell für den Optionswert vor Ablauf.');});
add('binomial','Eine Option replizieren','Das risikoneutrale Gewicht folgt aus Arbitragefreiheit, nicht aus einer Prognose der Trefferquote.',[field('s','Spot',10,200,1,100),field('k','Strike',10,200,1,100),field('u','Aufwärtsfaktor',1.05,1.8,.05,1.2),field('d','Abwärtsfaktor',.2,.95,.05,.8),field('r','Periodenzins (%)',0,20,1,5)],p=>{const B=1+p.r/100;if(!(p.d<B&&B<p.u))throw Error('Arbitragefreie Eingabe erfordert d < 1+r < u.');const q=(B-p.d)/(p.u-p.d),cu=Math.max(p.s*p.u-p.k,0),cd=Math.max(p.s*p.d-p.k,0);return result([['Risikoneutrales q (%)',100*q],['Callwert',(q*cu+(1-q)*cd)/B],['Delta',(cu-cd)/(p.s*(p.u-p.d))]],[[p.s*p.d,cd],[p.s*p.u,cu]],'Aktienkurs im Endzustand','Call-Auszahlung','Ein Zeitschritt, keine Dividenden; Linie verbindet nur die zwei modellierten Zustände.');});
add('bsm','Black–Scholes–Merton','Verändere Volatilität oder Laufzeit und vergleiche den Wert europäischer Optionen.',[field('s','Spot',10,200,1,100),field('k','Strike',10,200,1,100),field('r','Stetiger Zins (%)',0,15,.25,5),field('v','Volatilität (% p. a.)',1,80,1,20),field('t','Laufzeit (Jahre)',.1,5,.1,1)],p=>{const b=bsm(p.s,p.k,p.r/100,p.v/100,p.t);return result([['Callwert',b.call],['Putwert',b.put],['Call-Delta',b.delta]],seq(10,200,s=>bsm(s,p.k,p.r/100,p.v/100,p.t).call),'Spotpreis','Callwert','Keine Dividenden, konstante Volatilität und Zinsen, kontinuierlicher Handel. Keine amerikanische Ausübung.');});
add('supply','Angebot und Nachfrage','Ein Nachfrageimpuls verschiebt das Marktgleichgewicht.',[field('a','Nachfrage-Achsenabschnitt',30,180,5,100),field('b','Nachfragerückgang je Preiseinheit',.5,5,.5,2),field('c','Angebots-Achsenabschnitt',0,25,1,10)],p=>{const P=(p.a-p.c)/(p.b+1);return result([['Gleichgewichtspreis',P],['Gleichgewichtsmenge',p.c+P]],seq(0,60,x=>p.a-p.b*x-(p.c+x)),'Preis','Nachfrage minus Angebot','Q_D=a−bP und Q_S=c+P. Der Nulldurchgang der Überschussnachfrage ist das Gleichgewicht. Negative rechnerische Nachfrage ist außerhalb des ökonomischen Kurvenabschnitts.');});
add('regression','Eine Gerade und ihre Fehler','Verändere Achsenabschnitt und Steigung. Der Fehlervergleich nutzt fünf feste Beobachtungen.',[field('a','Achsenabschnitt',-5,10,.1,1),field('b','Steigung',-2,5,.1,2)],p=>{const x=[1,2,3,4,5],y=[3,5,8,8,11];return result([['Summe quadrierter Fehler',x.reduce((s,v,i)=>s+(y[i]-p.a-p.b*v)**2,0)]],x.map((v,i)=>[v,y[i]-p.a-p.b*v]),'x (Beobachtung)','Residuum y − ŷ','Feste Daten: (1,3), (2,5), (3,8), (4,8), (5,11). Die Grafik zeigt Residuen, keine neue Stichprobe. OLS-Optimum: a=1,3; b=1,9; SSE=1,9.');});
add('ar','Persistenz eines AR(1)-Prozesses','Die Kurve zeigt die bedingte Erwartung nach einem Anfangsschock, ohne neue Zufallsschocks.',[field('phi','Persistenz φ',-.95,1.05,.05,.8),field('c','Konstante c',-2,2,.1,1),field('start','Anfangswert',-10,20,1,10)],p=>{let x=p.start;const points=[[0,x]];for(let t=1;t<=30;t++){x=p.c+p.phi*x;points.push([t,x]);}return result([['Prognose nach 30 Perioden',x]],points,'Perioden','Bedingte Erwartung',Math.abs(p.phi)<1?'Stationär bei geeigneten Innovationsannahmen. Langfristiger Mittelwert c/(1−φ)='+ (p.c/(1-p.phi)).toFixed(2)+'.':'|φ| ≥ 1: kein stabiler stationärer AR(1)-Mittelwert unter den üblichen Annahmen.');});
add('dupont','Was treibt die Eigenkapitalrendite?','Marge, Kapitalumschlag und Verschuldungshebel wirken multiplikativ.',[field('margin','Nettomarge (%)',-10,30,.5,10),field('turn','Kapitalumschlag',.1,3,.1,1.2),field('lev','Aktiva / Eigenkapital',1,5,.1,2)],p=>result([['ROE (%)',p.margin*p.turn*p.lev]],seq(1,5,l=>p.margin*p.turn*l),'Aktiva / Eigenkapital','ROE (%)','Konsistente Durchschnittsbilanzen; Marge und Umschlag hier konstant. Mehr Verschuldung kann in der Realität die Zinslast und Marge verändern.'));
add('utility','Risikoaversion und Anlageanteil','Die Kurve bewertet Kombinationen einer riskanten Anlage mit Cash.',[field('mu','Riskante Rendite (%)',0,20,.5,8),field('rf','Cashrendite (%)',0,10,.25,2),field('vol','Volatilität (%)',1,50,1,20),field('a','Risikoaversion A',.5,10,.5,3)],p=>{const y=Math.max(0,Math.min(1,(p.mu-p.rf)/100/(p.a*(p.vol/100)**2)));return result([['Optimaler Anteil ohne Hebel (%)',100*y]],seq(0,100,w=>p.rf+w/100*(p.mu-p.rf)-50*p.a*(w/100*p.vol/100)**2),'Riskanter Anteil (%)','Nutzen × 100','Mittelwert-Varianz-Näherung, 0–100 % Anteil. Der Nutzenwert ist keine tatsächlich ausgezahlte Rendite.');});
add('rebalance','Gewichte driften lassen','Wie stark verändert eine Marktbewegung das Risiko ohne aktiven Handel?', [field('w','Anfangsgewicht Aktien (%)',0,100,1,60),field('a','Aktienrendite (%)',-50,50,1,20),field('b','Anleiherendite (%)',-20,20,1,0)],p=>{const w=p.w/100,drift=a=>100*w*(1+a/100)/(w*(1+a/100)+(1-w)*(1+p.b/100));return result([['Neues Aktiengewicht (%)',drift(p.a)]],seq(-50,50,drift),'Aktienrendite (%)','Aktiengewicht danach (%)','Zwei Anlagen, keine Ein- oder Auszahlungen; Rebalancingkosten hier nicht modelliert.');});
add('risk','VaR und Expected Shortfall','Die Normalannahme macht die Abhängigkeit von Volatilität und Konfidenzniveau sichtbar.',[field('mu','Mittlere Rendite (%)',-2,2,.1,0),field('vol','Volatilität (%)',.1,5,.1,1),field('confidence','Konfidenzniveau (%)',90,99.9,.1,95)],p=>{const z=inv(p.confidence/100);return result([['VaR (% Verlust)',-p.mu+z*p.vol],['Expected Shortfall (% Verlust)',-p.mu+p.vol*Math.exp(-z*z/2)/Math.sqrt(2*Math.PI)/(1-p.confidence/100)]],seq(90,99.9,c=>-p.mu+inv(c/100)*p.vol),'Konfidenzniveau (%)','VaR (% Verlust)','Normalverteilte Renditen; Mittelwert und Volatilität für denselben Horizont. Keine Verlustobergrenze.');});
add('alm','Vermögen und Verpflichtungen','Die Kurve zeigt die lineare Änderung des Überschusses bei einem parallelen Zinsschock.',[field('assets','Vermögen (Mio. €)',50,150,1,100),field('liab','Verpflichtungen (Mio. €)',50,150,1,105),field('da','Asset-Duration',0,15,.5,4),field('dl','Liability-Duration',0,15,.5,8),field('shock','Zinsschock (%-Punkte)',-3,3,.1,-1)],p=>{const surplus=s=>p.assets-p.liab-(p.assets*p.da-p.liab*p.dl)*s/100;return result([['Überschuss danach (Mio. €)',surplus(p.shock)],['Deckungsgrad vorher (%)',100*p.assets/p.liab]],seq(-3,3,surplus),'Zinsschock (%-Punkte)','Überschuss (Mio. €)','Modifizierte Duration, nur lineare Parallelverschiebung; Konvexität und weitere Risiken fehlen.');});
add('attribution','Allokation, Selektion, Interaktion','Ein Zwei-Segment-Beispiel zeigt, wie sich aktive Rendite vollständig zerlegen lässt.',[field('w','Portfolioanteil Segment A (%)',0,100,1,60),field('b','Benchmarkanteil Segment A (%)',0,100,1,50),field('alpha','Mehrrendite in Segment A (%-Punkte)',-5,5,.25,2)],p=>{const alloc=(p.w-p.b)/100*6,sel=p.b/100*p.alpha,inter=(p.w-p.b)/100*p.alpha;return result([['Allokation (%-Punkte)',alloc],['Selektion (%-Punkte)',sel],['Interaktion (%-Punkte)',inter],['Aktive Rendite (%-Punkte)',alloc+sel+inter]],seq(0,100,w=>(w-p.b)/100*6+w/100*p.alpha),'Portfolioanteil A (%)','Aktive Rendite (%-Punkte)','Benchmarksegmente A=10 %, B=4 %; Portfolio B=4 %, Portfolio A=10 % + Mehrrendite. Einperiodige Brinson-Fachler-Zerlegung.');});
add('execution','Kosten der Orderausführung','Auch nicht gekaufte Stücke können Opportunitätskosten verursachen.',[field('filled','Ausgeführte Stücke',0,100,1,80),field('price','Ausführungspreis (€)',45,55,.1,51),field('end','Schlusskurs (€)',45,55,.1,52),field('fees','Gebühren (€)',0,50,1,5)],p=>result([['Implementation Shortfall (€)',p.filled*(p.price-50)+(100-p.filled)*(p.end-50)+p.fees]],seq(45,55,e=>p.filled*(p.price-50)+(100-p.filled)*(e-50)+p.fees),'Schlusskurs (€)','Shortfall (€)','Kauf von 100 Stück geplant, Entscheidungspreis 50 €. Negativer Shortfall bedeutet Vorteil gegenüber dem Entscheidungsbenchmark.'));
add('tax','Steuerstundung und Zinseszins','Vergleiche jährlich besteuerte Erträge mit einer Besteuerung der Gewinne erst am Ende.',[field('r','Bruttorendite (%)',0,15,.25,6),field('tax','Modellsteuersatz (%)',0,50,1,25),field('n','Jahre',1,40,1,10)],p=>{const yearly=n=>10000*(1+p.r/100*(1-p.tax/100))**n,deferred=n=>10000*(1+((1+p.r/100)**n-1)*(1-p.tax/100));return result([['Jährlich besteuert (€)',yearly(p.n)],['Am Ende besteuert (€)',deferred(p.n)]],seq(0,40,n=>deferred(n)-yearly(n)),'Jahre','Vorteil der Stundung (€)','Start 10.000 €, konstanter Modellsteuersatz, keine Freibeträge oder Verluste; keine Abbildung einer konkreten Rechtsordnung.');});
add('npv','Investition und Kapitalwert','Zukünftige freie Zahlungen müssen die heutige Investition einschließlich Kapitalverzinsung decken.',[field('investment','Investition heute (€)',0,10000,100,1000),field('cash','Jährlicher Rückfluss (€)',0,5000,50,300),field('n','Jahre',1,30,1,5),field('r','Diskontsatz (%)',0,30,.25,8)],p=>result([['Kapitalwert (€)',annuity(p.cash,p.r/100,p.n)-p.investment]],seq(0,30,r=>annuity(p.cash,r/100,p.n)-p.investment),'Diskontsatz (%)','NPV (€)','Gleich hohe freie Jahresendzahlungen, kein separater Restwert. Positiver NPV bedeutet Wertzuwachs gegenüber dem verwendeten Diskontsatz.'));
add('fxforward','Zinsparität zweier Währungen','Die Notierung lautet Heimatwährung je Fremdwährungseinheit. Beide Zinssätze bestimmen den fairen Forward.',[field('spot','Spot (Heimat / Fremd)',.5,2,.01,.9),field('home','Heimatzins (%)',0,15,.25,2),field('foreign','Fremdzins (%)',0,15,.25,4),field('t','Jahre',1,5,1,1)],p=>result([['Forward (Heimat / Fremd)',p.spot*((1+p.home/100)/(1+p.foreign/100))**p.t]],seq(0,5,t=>p.spot*((1+p.home/100)/(1+p.foreign/100))**t),'Jahre','Forward (Heimat / Fremd)','Effektive Jahreszinsen, konstante Kurven, keine Cross-Currency-Basis oder Transaktionskosten.'));
add('forwardvalue','Wert eines bestehenden Forwards','Der Lieferpreis bleibt fest; der Marktwert verändert sich mit dem aktuellen Forward.',[field('forward','Aktueller Forward',50,150,1,110),field('strike','Vertraglicher Lieferpreis',50,150,1,105),field('df','Diskontfaktor',.5,1,.01,.98)],p=>result([['Long-Vertragswert',p.df*(p.forward-p.strike)]],seq(50,150,f=>p.df*(f-p.strike)),'Aktueller Forward','Long-Vertragswert','Eine Einheit, gleiche Restlaufzeit und Sicherheitenbedingungen; Short hat den entgegengesetzten Wert.'));
add('abs','Verluste durch Tranchen verteilen','Die nachrangige Tranche absorbiert zunächst Poolverluste. Erst danach wird Senior belastet.',[field('pool','Poolnominal',50,200,1,100),field('junior','Junioranteil (%)',5,40,1,20),field('loss','Poolverlust (%)',0,100,1,30)],p=>{const j=p.pool*p.junior/100,L=p.pool*p.loss/100;return result([['Juniorverlust',Math.min(L,j)],['Seniorverlust',Math.max(0,L-j)]],seq(0,100,l=>Math.max(0,p.pool*l/100-j)),'Poolverlust (%)','Verlust der Seniortranche','Zwei Tranchen, feste Verlustreihenfolge; keine Zinsen, Trigger, Prepayments oder Recovery-Verzögerung.');});
add('property','Immobilienertrag kapitalisieren','Der Cap Rate verbindet nachhaltigen operativen Nettoertrag mit dem Immobilienwert.',[field('noi','Jährlicher NOI (€)',10000,500000,1000,100000),field('cap','Cap Rate (%)',1,15,.25,5)],p=>result([['Immobilienwert (€)',p.noi/(p.cap/100)]],seq(1,15,c=>p.noi/(c/100)),'Cap Rate (%)','Wert (€)','Direkte Kapitalisierung stabilisierten NOI vor Finanzierung. Cap Rate ist nicht automatisch der gesamte Diskontsatz; Wachstum und Investitionsbedarf müssen zur Marktannahme passen.'));
add('frontier','Erreichbare Risiko-Rendite-Kombinationen','Jeder Punkt steht für ein anderes Gewicht zweier Anlagen. Nur nicht dominierte Kombinationen sind effizient.',[field('muA','Erwartete Rendite A (%)',0,15,.5,8),field('muB','Erwartete Rendite B (%)',0,15,.5,4),field('rho','Korrelation',-1,1,.05,0),field('w','Gewicht A (%)',0,100,1,50)],p=>{const vol=w=>Math.sqrt(Math.max(0,w*w*400+(1-w)**2*100+400*w*(1-w)*p.rho));return result([['Erwartete Rendite (%)',p.w/100*p.muA+(1-p.w/100)*p.muB],['Volatilität (%)',vol(p.w/100)]],seq(0,1,w=>w).map(([w])=>[vol(w),w*p.muA+(1-w)*p.muB]),'Portfoliovolatilität (%)','Erwartete Rendite (%)','Volatilität A=20 %, B=10 %, keine Leerverkäufe. Gezeigt ist die gesamte erreichbare Kurve, einschließlich ineffizienter Abschnitte; keine Kapitalmarktlinie.');});
add('montecarlo','Renditepfade simulieren','Ein Modell erzeugt 200 mögliche Pfade. Eine feste Zufallsfolge macht Parametervergleiche nachvollziehbar.',[field('mu','Erwartete Jahresrendite (%)',-5,15,.5,6),field('vol','Jahresvolatilität (%)',0,40,1,20),field('n','Jahre',1,30,1,10)],p=>{let seed=1947;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return(seed+.5)/4294967296;};const log=Array(200).fill(0),points=[[0,100]],mu=p.mu/100,sigma=p.vol/100;let wealth;for(let t=1;t<=p.n;t++){for(let i=0;i<log.length;i++)log[i]+=Math.log1p(mu)-sigma*sigma/2+sigma*Math.sqrt(-2*Math.log(random()))*Math.cos(2*Math.PI*random());wealth=log.map(x=>100*Math.exp(x)).sort((a,b)=>a-b);points.push([t,(wealth[99]+wealth[100])/2]);}const q=x=>{const i=199*x,k=Math.floor(i);return wealth[k]+(wealth[Math.min(k+1,199)]-wealth[k])*(i-k);};return result([['Endwert · 10%-Quantil',q(.1)],['Endwert · Median',q(.5)],['Endwert · 90%-Quantil',q(.9)]],points,'Jahre','Median des Vermögens (Start 100)','Unabhängige normalverteilte Logrenditen, Erwartungsfaktor 1+μ, konstante Parameter. Die Kurve zeigt nur den simulierten Median; Endquantile stehen darüber. Kein Bootstrap und keine Garantie.');});
function calculate(id,params){const model=models[id];if(!model)throw Error('Unbekanntes Modell');const p={};for(const f of model.controls){const v=params[f.key];if(v===''||v===null||!Number.isFinite(Number(v))||Number(v)<f.min||Number(v)>f.max)throw Error('Bitte '+f.label+' zwischen '+f.min+' und '+f.max+' eingeben.');p[f.key]=Number(v);if(f.step===1&&!Number.isInteger(p[f.key]))throw Error(f.label+': bitte eine ganze Zahl eingeben.');}const out=model.calc(p);if(out.metrics.some(m=>!Number.isFinite(m[1]))||out.points.some(v=>v.some(n=>!Number.isFinite(n))))throw Error('Für diese Eingaben ist kein endliches Ergebnis definiert.');const marks={dcf:[p.n,0],annuity:[p.n,0],diversification:[p.w,0],capm:[p.beta,0],wacc:[p.e,0],gordon:[p.g,0],fx:[p.fx,0],forward:[p.t,0],bond:[p.y,0],credit:[p.pd,0],waterfall:[p.value,0],option:[p.end,0],bsm:[p.s,0],dupont:[p.lev,0],rebalance:[p.a,0],risk:[p.confidence,0],alm:[p.shock,0],attribution:[p.w,3],execution:[p.end,0],npv:[p.r,0],fxforward:[p.t,0],forwardvalue:[p.forward,0],abs:[p.loss,1],property:[p.cap,0]};if(marks[id])out.marker=[marks[id][0],out.metrics[marks[id][1]][1]];if(id==='frontier')out.marker=[out.metrics[1][1],out.metrics[0][1]];return out;}
// Unlevered operating forecast. Initial surplus cash is distributed at t=0.
// End-year cash is zero: positive free cash is paid, deficits require owners' contributions.
function forecastValue(p){
 const growth=p.growth/100,margin=p.margin/100,wc=p.wc/100,k=p.discount/100,g=p.stableGrowth/100,r=p.roic/100;
 if(g>=k)throw Error('Das langfristige Wachstum muss unter dem passenden Diskontsatz liegen.');
 if(g>=r)throw Error('Das langfristige Wachstum muss in diesem Ausschüttungsmodell unter der Rendite neuer Investitionen liegen.');
 let sales=p.sales,ppe=.5*sales,nwc=.2*sales,book=ppe+nwc,pv=0;
 const years=[];
 for(let year=1;year<=3;year++){
  const oldSales=sales,oldPPE=ppe,oldWC=nwc,oldBook=book;
  sales=oldSales*(1+growth);ppe=.5*sales;nwc=wc*sales;
  const depreciation=.12*oldPPE,capex=ppe-oldPPE+depreciation,ebit=margin*sales,nopat=.75*ebit,investment=nwc-oldWC,cfo=nopat+depreciation-investment,fcff=cfo-capex;
  const dividend=Math.max(0,fcff),contribution=Math.max(0,-fcff);
  book=oldBook+nopat-dividend+contribution;pv+=fcff/(1+k)**year;
  years.push({year,sales,ppe,nwc,depreciation,capex,ebit,nopat,investment,cfo,fcff,dividend,contribution,book,ar:.5*nwc,inventory:.8*nwc,ap:.3*nwc});
 }
 // Marginal return on new stable growth capital, not an imposed ROIC on all old capital.
 const stableSales=sales*(1+g),stableNOPAT=stableSales*p.stableMargin/100*.75,stableInvestment=stableNOPAT*g/r,stableFCFF=stableNOPAT-stableInvestment,terminal=stableFCFF/(k-g),terminalPV=terminal/(1+k)**3;
 const operating=pv+terminalPV,common=operating+30,share=common/10;
 return {years,stableSales,stableNOPAT,stableInvestment,stableFCFF,terminal,terminalPV,operating,common,share};
}
add('forecastvalue','Vom Abschlussmodell zum Aktienwert','Drei Prognosejahre verbinden Umsatz, Ergebnis, Kapitalbindung und freie Zahlungen. Danach beginnt eine gesondert normalisierte stabile Phase. Vergleiche besonders Wachstum, Marge und Investitionsbedarf.',[
 field('sales','Ausgangsumsatz (Mio. €)',300,1500,50,500),
 field('growth','Umsatzwachstum Jahre 1–3 (%)',-10,15,.5,6),
 field('margin','EBIT-Marge Jahre 1–3 (%)',8,25,.5,18),
 field('stableMargin','EBIT-Marge stabile Phase (%)',10,20,.5,14),
 field('wc','Operatives Working Capital / Umsatz (%)',10,35,1,20),
 field('roic','Rendite neuer stabiler Investitionen (%)',8,25,.5,12),
 field('discount','Diskontsatz (%)',4,15,.5,9),
 field('stableGrowth','Wachstum stabile Phase (%)',0,4,.25,3)
],p=>{
 const v=forecastValue(p),upper=Math.max(p.stableGrowth,Math.min(4,p.discount-.5));
 const out=result([['Operativer Wert (Mio. €)',v.operating],['Stammkapitalwert vor Sonderzahlung (Mio. €)',v.common],['Wert je Aktie vor Sonderzahlung (€)',v.share],['Freier Cashflow Jahr 1 (Mio. €)',v.years[0].fcff]],seq(0,upper,g=>forecastValue({...p,stableGrowth:g}).share),'Stabiles Wachstum (%)','Wert je Aktie (€)','Unverschuldetes Lehrmodell; zehn Millionen gleiche Stammaktien, Steuersatz 25 %. Überschüssige liquide Mittel von 30 Mio. € werden heute ausgeschüttet (3 € je Aktie). Danach Cash am Jahresende null. In der Detailphase: anfänglich Anlagenbuchwert 50 % und operatives Working Capital 20 % des Ausgangsumsatzes; Endanlagen 50 % des jeweiligen Umsatzes, Abschreibung 12 % des Anfangsanlagenbuchwerts, Investitionen am Jahresende. Die gewählte Working-Capital-Quote gilt ab Jahr 1. Positive freie Zahlungen werden ausgeschüttet; negative benötigen proportionale Beiträge derselben Eigentümer ohne neue Aktien. In der stabilen Phase gilt die gewählte Rendite für neue Wachstumsinvestitionen. Die Kurve verändert nur stabiles Wachstum und den dazu passenden Kapitalbedarf. Jahresbilanzen belegen weder unterjährige Zahlungsfähigkeit noch verfügbare Finanzierung.');
 out.marker=[p.stableGrowth,v.share];
 out.projection={caption:'Detailphase: alle Beträge in Mio. €, Zahlungen am Jahresende. Buchkapital nach heutiger Sonderzahlung startet bei 70 % des Ausgangsumsatzes.',headers:['Jahr','Umsatz','EBIT','NOPAT = NI','Abschreibung','Capex','Δ Working Capital','FCFF = FCFE','Dividende','Eigentümerbeitrag','Endbuchkapital'],rows:v.years.map(y=>[y.year,y.sales,y.ebit,y.nopat,y.depreciation,y.capex,y.investment,y.fcff,y.dividend,y.contribution,y.book])};
 out.stable={caption:'Erste normalisierte stabile Periode (Jahr 4); Endwert und sein Barwert separat. Alle Beträge in Mio. €.',headers:['Umsatz Jahr 4','NOPAT Jahr 4','Nettoinvestition Jahr 4','FCFF Jahr 4','Endwert am Ende Jahr 3','Barwert des Endwerts'],rows:[[v.stableSales,v.stableNOPAT,v.stableInvestment,v.stableFCFF,v.terminal,v.terminalPV]]};
 return out;
});
function companyPlan(p){
 const sales=p.price*p.quantity,cost=p.variable*p.quantity,da=15,interest=3;
 const ebit=sales-cost-p.fixed-da,taxOperating=Math.max(0,ebit)*.25,taxEquity=Math.max(0,ebit-interest)*.25;
 const nopat=ebit-taxOperating,netIncome=ebit-interest-taxEquity,working=p.ar+p.inventory-p.payables,changeWC=working-30;
 const customers=sales-(p.ar-20),purchases=cost+(p.inventory-30),suppliers=purchases-(p.payables-20);
 if(customers<-.000000001)throw Error('Die Endforderungen übersteigen Anfangsforderungen plus Kreditumsatz. Ohne zusätzliche Forderungsbewegung ist dieser Zahlungsplan nicht möglich.');
 if(purchases<-.000000001)throw Error('Der Endvorrat erfordert negative Einkäufe. Ohne gesonderte Rückgaben oder andere Bestandsbewegungen ist dieser Plan nicht möglich.');
 if(suppliers<-.000000001)throw Error('Die End-Lieferantenverbindlichkeiten übersteigen Anfangsverbindlichkeiten plus Krediteinkauf. Ohne weitere Finanzierung ist dieser Zahlungsplan nicht möglich.');
 const cfo=customers-suppliers-p.fixed-interest-taxEquity,fcff=nopat+da-p.capex-changeWC,fcfe=cfo-p.capex;
 const cashBefore=30+fcfe-p.dividend,borrowing=Math.max(0,p.minimum-cashBefore),cash=cashBefore+borrowing;
 const debt=60+borrowing,book=100+netIncome-p.dividend,ppe=100+p.capex-da,capital=ppe+working;
 const assets=cash+p.ar+p.inventory+ppe,liabilities=p.payables+debt+book;
 return {sales,cost,da,interest,ebit,taxOperating,taxEquity,nopat,netIncome,working,changeWC,customers,purchases,suppliers,cfo,fcff,fcfe,cashBefore,borrowing,cash,debt,book,ppe,capital,assets,liabilities};
}
add('companydrivers','Kernwerk: Preis, Gewinn, Kapital und Finanzierung','Starte mit dem durchgerechneten Preisfall. Ändere einzelne Annahmen kontrolliert oder stimme mehrere Eingaben zu einem Szenario ab. Die Tabellen verbinden Ergebnis, tatsächliche Zahlungen und die Jahresendbilanz.',[
 field('price','Realisierter Preis (Euro je Einheit)',20,200,1,105),
 field('quantity','Absatz (Millionen Einheiten)',.5,3,.1,1.9),
 field('variable','Variable Stückkosten (Euro)',20,100,1,60),
 field('fixed','Fixe zahlungswirksame Kosten (Mio. Euro)',0,100,1,45),
 field('capex','Capex (Mio. Euro)',0,100,1,18),
 field('ar','Endforderungen (Mio. Euro)',0,100,.05,19.95),
 field('inventory','Endvorrat (Mio. Euro)',0,150,.5,28.5),
 field('payables','End-Lieferantenverbindlichkeiten (Mio. Euro)',0,100,.5,19),
 field('dividend','Dividende (Mio. Euro)',0,50,1,8),
 field('minimum','Benötigtes Jahresend-Cash (Mio. Euro)',0,100,1,10)
],p=>{
 const v=companyPlan(p),lower=Math.max(20,(p.ar-20)/p.quantity),out=result([['Umsatz (Mio. Euro)',v.sales],['EBIT (Mio. Euro)',v.ebit],['FCFF vor Finanzierung (Mio. Euro)',v.fcff],['Benötigter neuer Jahresendkredit (Mio. Euro)',v.borrowing]],seq(lower,200,price=>companyPlan({...p,price}).fcff),'Preis (Euro je Einheit)','FCFF (Mio. Euro)','Eigene vollständige Anfangsbilanz in Mio. Euro: Cash 30, Forderungen 20, Vorräte 30, Nettoanlagen 100; Lieferantenverbindlichkeiten 20, verzinsliche Schulden 60 und Buch-Eigenkapital 100. Abschreibung 15 und alter Zins 3 bleiben fest. Modellsteuer 25 %; negative steuerliche Ergebnisse erzeugen hier keine sofortige Steuererstattung. Keine übrigen Bestands- oder Ergebnisbewegungen. Alle Verkäufe und Teilekäufe laufen über Forderungs- beziehungsweise Lieferantenkonten; fixe Cashkosten, Zins, Capex, Dividende und Steuer werden bezahlt. Forderungen und Lieferantenverbindlichkeiten dürfen die aus Anfangsbestand und neuen Kreditgeschäften verfügbaren Ansprüche nicht übersteigen; negative Einkäufe werden abgewiesen. Die Kurve beginnt gegebenenfalls erst bei einem mit dem Forderungsendbestand vereinbaren Preis. Der neue Kredit ist nur ein berechneter Jahresendbedarf bei angenommener Auszahlung, keine Finanzierungszusage; er trägt im Jahresplan noch keinen Zins. Unterjährige Liquidität und spätere Zinsen fehlen. Endforderungen, Vorrat und Lieferantenbestand sind unabhängige Eingaben, keine automatisch an Absatz angepassten Prognosen. Die Kurve verändert nur den Preis bei konstant gehaltener Menge und übrigen Eingaben; sie enthält keine geschätzte Nachfrageelastizität. Negative freie Zahlungen und negatives Buchkapital werden sichtbar ausgewiesen.');
 out.marker=[p.price,v.fcff];
 out.projection={caption:'Jahresüberleitung in Millionen Euro: Gewinn, operative Bestandsänderung, Anlagenzahlung und zusätzlicher Jahresendkredit werden getrennt erfasst.',headers:['Umsatz','EBIT','NOPAT','Nettogewinn','Δ operatives WC','Capex','FCFF','CFO nach Zins','FCFE vor neuem Kredit','Neuer Kredit'],rows:[[v.sales,v.ebit,v.nopat,v.netIncome,v.changeWC,p.capex,v.fcff,v.cfo,v.fcfe,v.borrowing]]};
 out.stable={caption:'Direkte Zahlungen und Jahresendbilanz in Millionen Euro. Aktiva und Passiva müssen übereinstimmen; diese Konsistenz beweist weder die Absatzannahme noch verfügbare Finanzierung.',headers:['Kundeneinzahlung','Lieferantenzahlung','Cash Ende','Nettoanlagen Ende','Schulden Ende','Buchkapital Ende','Operatives Kapital Ende','Aktiva','Passiva'],rows:[[v.customers,v.suppliers,v.cash,v.ppe,v.debt,v.book,v.capital,v.assets,v.liabilities]]};
 return out;
});
models.companydrivers.presets=[
 {label:'Preisfall laden',values:Object.fromEntries(models.companydrivers.controls.map(f=>[f.key,f.value]))},
 {label:'Wachstumsfall laden',values:{price:100,quantity:2.4,variable:60,fixed:60,capex:40,ar:35,inventory:50,payables:25,dividend:0,minimum:10}}
];
function covenantPlan(p){
 if(![p.ebitda,p.borrow,p.use,p.dividend,p.rate].every(Number.isFinite)||p.ebitda<=0||[p.borrow,p.use,p.dividend,p.rate].some(v=>v<0))throw Error('Bitte endliche nicht negative Transaktionswerte und ein positives Vertrags-EBITDA verwenden.');
 const cash=25+p.borrow-p.use-p.dividend;
 if(cash<0)throw Error('Die geplanten Zahlungen übersteigen das verfügbare freie Cash einschließlich neuem Kredit.');
 const debt=220+p.borrow,net=Math.max(0,debt-Math.min(cash,50)),interest=12+p.borrow*p.rate/100;
 const leverage=net/p.ebitda,headroom=3*p.ebitda-net,coverage=p.ebitda/interest;
 const rules=[
  ['Netto-Leverage','höchstens 3 ×',leverage,leverage<=3+1e-10],
  ['Pro-forma Zinsdeckung','mindestens 4 ×',coverage,coverage>=4-1e-10],
  ['Freies Cash','mindestens 10 Mio.',cash,cash>=10-1e-10],
  ['Ausschüttungsbasket','höchstens 20 Mio.',p.dividend,p.dividend<=20+1e-10]
 ];
 const maxDividend=Math.max(0,Math.min(100,25+p.borrow-p.use));
 const points=seq(0,maxDividend,d=>3*p.ebitda-Math.max(0,debt-Math.min(25+p.borrow-p.use-d,50)));
 const out=result([['Bruttoschuld (Mio.)',debt],['Freies Cash (Mio.)',cash],['Netto-Leverage (×)',leverage],['Leverage-Spielraum (Mio.)',headroom],['Pro-forma Zinsdeckung (×)',coverage]],points,'Geplante Ausschüttung (Mio.)','Leverage-Spielraum (Mio.)','Eigener Auron-Modellvertrag: Anfangsschuld 220, freies Cash 25 und jährliche Zinsbasis 12 Mio. Neue Mittel werden für die eingegebene Zahlung verwendet oder bleiben frei. Nur höchstens 50 Mio. Cash sind für die Nettoquote anrechenbar. EBITDA und annualisierte Zinsbasis sind ausdrücklich Pro-forma-Vertragsgrößen, keine zugesagten künftigen Zahlungen. Spielraum ist weder eine Kreditzusage noch automatisch ein zusätzlich auszahlbarer Bruttokreditbetrag. Ein negativer Spielraum zeigt eine rechnerische Überschreitung; Vertragsfristen und Rechtsfolgen werden gesondert geprüft. Die Kurve hält neue Schulden, Verwendung, EBITDA und Zins fest.');
 out.marker=[p.dividend,headroom];out.covenants=rules;out.funding={opening:25,borrow:p.borrow,use:p.use,dividend:p.dividend,closing:cash};
 out.projection={caption:'Auron-Modellvertrag: vier getrennte Prüfungen nach der Transaktion',headers:['Prüfung','Eigene Vertragsgrenze','Rechenwert','Ergebnis'],rows:rules.map(([label,limit,value,pass])=>[label,limit,value,pass?'Erfüllt':'Rechnerisch verletzt'])};
 out.stable={caption:'Mittelherkunft und Verwendung: freie Beträge in Millionen',headers:['Position','Betrag'],rows:[['Anfängliches freies Cash',25],['Neuer Kredit',p.borrow],['Operative / Investitionszahlung',p.use],['Ausschüttung',p.dividend],['Verbleibendes freies Cash',cash]]};
 return out;
}
add('bondcovenants','Vertragsspielraum, Kredit und Mittelverwendung','Der Auron-Fall verbindet neue Finanzierung mit freiem Cash, Netto-Leverage, Pro-forma Zinsdeckung und Ausschüttungsgrenzen. Alle Grenzen sind eigene hypothetische Vertragsbedingungen.',[
 field('ebitda','Vertrags-EBITDA (Mio.)',20,140,1,80),
 field('borrow','Neuer Kredit (Mio.)',0,150,1,30),
 field('use','Mittelverwendung (Mio.)',0,150,1,30),
 field('dividend','Ausschüttung (Mio.)',0,100,1,10),
 field('rate','Neuer Kreditzins (% p. a.)',0,15,.25,6)
],covenantPlan);
models.bondcovenants.presets=[
 {label:'Projektzahlung laden',values:{ebitda:80,borrow:30,use:30,dividend:10,rate:6}},
 {label:'Cash behalten',values:{ebitda:80,borrow:30,use:0,dividend:10,rate:6}},
 {label:'Ertragsschock laden',values:{ebitda:50,borrow:30,use:30,dividend:10,rate:6}}
];
function repaymentSchedule({face,rate,n,shape,balloon=70}){
 if(![face,rate,n,shape,balloon].every(Number.isFinite)||face<=0||rate<0||!Number.isInteger(n)||n<1||!Number.isInteger(shape)||shape<0||shape>3||balloon<0||balloon>100)throw Error('Bitte positives Nominal, nicht negativen Zins, ganze positive Jahre und einen gültigen Tilgungsplan verwenden.');
 const r=rate/100,regular=r===0?face/n:face*r/(-Math.expm1(-n*Math.log1p(r)));
 let balance=face;const rows=[];
 for(let k=1;k<=n;k++){
  const opening=balance,interest=opening*r;
  let principal=shape===0?0:shape===1?face/n:shape===2?regular-interest:n===1?face:face*(1-balloon/100)/(n-1);
  if(k===n)principal=opening;
  principal=Math.min(opening,Math.max(0,principal));balance=Math.max(0,opening-principal);
  rows.push({year:k,opening,interest,principal,payment:interest+principal,closing:balance});
 }
 return {rows,interest:rows.reduce((s,r)=>s+r.interest,0),wal:rows.reduce((s,r)=>s+r.year*r.principal/face,0)};
}
const repaymentNames=['Endfällig','Gleiche Tilgung','Annuität','Ballon'];
add('repayment','Tilgungspläne: Zins, Zahlung und verbleibende Schuld','Vergleiche vier Pläne für dieselbe Finanzierung. Die Planart lässt sich auswählen; die Vergleichstabelle rechnet alle vier bei denselben übrigen Eingaben. Alle Zahlungen erfolgen jährlich am Periodenende.',[
 {...field('shape','Tilgungsplan',0,3,1,2),choices:repaymentNames.map((label,value)=>({value,label}))},
 field('face','Anfängliches Nominal',100,10000,1,1000),
 field('rate','Vertragszins (% p. a.)',0,20,.25,6),
 field('n','Planjahre',1,30,1,4),
 field('balloon','Ballon: Nominal am Endtermin (%)',0,100,1,70),
 field('discount','Diskontsatz (% p. a.)',0,20,.25,6)
],p=>{
 const selected=repaymentSchedule(p),pv=s=>s.rows.reduce((v,row)=>v+row.payment/(1+p.discount/100)**row.year,0);
 const points=[[0,p.face]];for(const row of selected.rows)points.push([row.year,row.opening],[row.year,row.closing]);
 const out=result([['Erste Zahlung',selected.rows[0].payment],['Letzte Zahlung',selected.rows.at(-1).payment],['Zinssumme',selected.interest],['Gewichtete Tilgungszeit (Jahre)',selected.wal],['Barwert zum Diskontsatz',pv(selected)]],points,'Jahre / Zahlungstermin','Ausstehendes Nominal','Ausgewählt: '+repaymentNames[p.shape]+'. Fester Vertragszins auf die jeweilige Anfangsschuld, jährliche Zahlung, keine Gebühren, Steuern, Optionen, Ausfälle oder Wiederanlage. Die Kurve springt am Zahlungstermin; Zins ist nicht zusätzlich getilgtes Nominal. WAL gewichtet nur Tilgung und ist keine Duration. Bei Diskontsatz gleich Vertragszins beträgt der Barwert in allen vier Plänen das anfängliche Nominal. Die Balloneingabe wirkt nur auf den Ballonplan; vor dem Endtermin wird der übrige Nominalanteil gleichmäßig getilgt. Bei einem Jahr fällt das gesamte Nominal am einzigen Termin an. Bei mehr als einem Jahr bedeutet ein Ballon von null vollständige Rückzahlung vor dem letzten Termin.');
 out.schedule=selected;
 out.projection={caption:repaymentNames[p.shape]+': vollständiger Zahlungs- und Restschuldplan',headers:['Jahr','Anfangsschuld','Zins','Tilgung','Zahlung','Restschuld'],rows:selected.rows.map(r=>[r.year,r.opening,r.interest,r.principal,r.payment,r.closing])};
 out.stable={caption:'Gleiche Ausgangsbedingungen: vier Tilgungspläne vergleichen',headers:['Plan','Erste Zahlung','Letzte Zahlung','Zinssumme','WAL (Jahre)','Barwert'],rows:repaymentNames.map((name,shape)=>{const s=repaymentSchedule({...p,shape});return [name,s.rows[0].payment,s.rows.at(-1).payment,s.interest,s.wal,pv(s)];})};
 return out;
});
models.repayment.presets=[
 {label:'Annuität laden',values:{shape:2,face:1000,rate:6,n:4,balloon:70,discount:6}},
 {label:'Gleiche Tilgung laden',values:{shape:1,face:1000,rate:6,n:4,balloon:70,discount:6}},
 {label:'Ballon laden',values:{shape:3,face:1000,rate:6,n:4,balloon:70,discount:6}},
 {label:'Zinsfrei vergleichen',values:{shape:2,face:1000,rate:0,n:4,balloon:70,discount:0}}
];
function bondIndexPlan(p){
 if(![p.nominal,p.open,p.close,p.coupon].every(Number.isFinite)||p.nominal<=0||p.open<=0||p.close<0||p.coupon<0)throw Error('Bitte positives Nominal und positiven Anfangsvollpreis sowie nicht negative Endpreise und Cashkupons verwenden.');
 const startA=p.nominal*p.open/100,startB=100,endA=p.nominal*p.close/100,endB=100,cashA=p.nominal*p.coupon/100,cashB=1,start=startA+startB;
 const weight=startA/start,returnA=(endA+cashA-startA)/startA*100,priceReturn=(endA+endB-start)/start*100,cashReturn=(cashA+cashB)/start*100,total=priceReturn+cashReturn;
 const atNominal=n=>{const a=n*p.open/100;return ((n*(p.close+p.coupon)/100+101)/(a+100)-1)*100;};
 const out=result([['Anfangsgewicht A (%)',weight*100],['Gesamtrendite A (%)',returnA],['Vollpreisbeitrag (%-Punkte)',priceReturn],['Cashkuponbeitrag (%-Punkte)',cashReturn],['Index-Gesamtrendite (%)',total],['Indexendstand (Start 100)',100+total]],seq(50,500,atNominal,45),'Für A anfangs erfasstes Nominal (Mio.)','Index-Gesamtrendite (%)','Eigener Zweianleihenindex in einer gemeinsamen Währung, eine festgelegte Beobachtungsperiode, keine Annualisierung. B bleibt fest: Nominal 100 Mio., Anfangs- und Endvollpreis je 100 Punkte und Cashkupon ein Punkt. Vollpreise enthalten Stückzinsen; Kursnotierungen und Cashkupons gelten je 100 Nominal. Während der Periode bleiben die Bestände unverändert. Cashkupons werden am Periodenende bezahlt; keine Tilgung, Kosten, Steuern oder Wiederanlage. Der Cashkuponbeitrag allein ist keine um Stückzinsen bereinigte reine Perioden-Zinsrendite. Die Kurve vergleicht unterschiedliche Anfangszusammensetzungen; zusätzliches Nominal erzeugt keinen Gewinn mitten in einer laufenden Periode. Gezeichnete Preise und Cashzahlungen sind Szenarien, keine Renditeprognosen oder Garantie.');
 out.marker=[p.nominal,total];out.index={startA,startB,endA,endB,cashA,cashB,start,weight,returnA,priceReturn,cashReturn,total};
 out.projection={caption:'Zwei Anleihen: Notierung, Marktwert und Cashzahlungen abstimmen',headers:['Größe','Anleihe A','Anleihe B'],rows:[['Erfasstes Nominal (Mio.)',p.nominal,100],['Anfangsvollpreis (je 100)',p.open,100],['Anfangsmarktwert (Mio.)',startA,startB],['Anfangsgewicht (%)',weight*100,(1-weight)*100],['Endvollpreis (je 100)',p.close,100],['Cashkupon (je 100)',p.coupon,1],['Endmarktwert (Mio.)',endA,endB],['Cashkuponzahlung (Mio.)',cashA,cashB],['Gesamtrendite (%)',returnA,1]]};
 out.stable={caption:'Die Indexrechnung verwendet Anfangsgewichte und vollständige Cashflows',headers:['Abstimmung','Wert'],rows:[['Anfangsmarktwert (Mio.)',start],['Endmarktwert (Mio.)',endA+endB],['Cashkuponzahlungen (Mio.)',cashA+cashB],['Vollpreisbeitrag (%-Punkte)',priceReturn],['Cashkuponbeitrag (%-Punkte)',cashReturn],['Gesamtrendite (%)',total],['Endstand bei Indexstart 100',100+total]]};
 return out;
}
add('bondindex','Anleiheindex: Gewichte und Gesamtrendite','Verändere jeweils nur eine Annahme für Anleihe A. B bleibt als Vergleich unverändert. Anfangsmarktwerte bestimmen die Gewichte; zum Periodenergebnis gehören sowohl Preisänderung als auch tatsächliche Cashzahlungen.',[
 field('nominal','Anfangsnominal A (Mio.)',50,500,1,100),
 field('open','Anfangsvollpreis A (je 100)',50,150,.25,100),
 field('close','Endvollpreis A (je 100)',0,160,.25,99),
 field('coupon','Cashkupon A (je 100)',0,10,.25,3)
],bondIndexPlan);
models.bondindex.presets=[
 {label:'Grundfall laden',values:{nominal:100,open:100,close:99,coupon:3}},
 {label:'Mehr Gewicht A',values:{nominal:300,open:100,close:99,coupon:3}},
 {label:'Kursrückgang A',values:{nominal:100,open:100,close:90,coupon:3}},
 {label:'Gleiche Einzelrenditen',values:{nominal:100,open:100,close:98,coupon:3}}
];
function repoFundingPlan(p){
 if(![p.size,p.haircut,p.rate,p.days,p.shock,p.marginhaircut].every(Number.isFinite)||p.size<=0||p.haircut<0||p.haircut>=100||p.marginhaircut<0||p.marginhaircut>=100||p.rate<0||p.days<=0||p.shock<=-100)throw Error('Bitte positiven Sicherheitenwert und positive Tage, gültige Haircuts unter 100 % sowie nicht negative Zinsen verwenden.');
 const cash=p.size*(1-p.haircut/100),interest=cash*p.rate/100*p.days/360,repurchase=cash+interest,current=p.size*(1+p.shock/100),required=cash/(1-p.marginhaircut/100),margin=required-current,uncovered=Math.max(cash-current,0),initialMargin=p.size/cash*100;
 const out=result([['Anfangscash (Mio.)',cash],['Repo-Zins (Mio.)',interest],['Endrückkaufpreis (Mio.)',repurchase],['Sicherheiten-Lieferbedarf (Mio.)',margin],['Ungedecktes Anfangscash (Mio.)',uncovered],['Initial-Margin-Verhältnis (%)',initialMargin]],seq(-50,20,s=>required-p.size*(1+s/100),70),'Sicherheitenpreisänderung (%)','Signierter Sicherheitenbedarf (Mio.)','Eigener einzelner Festzins-Repo in einer Währung, einfacher ACT/360-Zins; keine Sicherheitenkupons, Gebühren oder Ausfälle. Initialer Haircut bestimmt das ursprüngliche Cash. Der aktuelle Haircut ist eine gesonderte vertraglich erlaubte Marginanforderung. Für die Zwischenmargin bleibt die Cash-Exposition ohne Zinsabgrenzung auf dem ursprünglichen Kreditbetrag. Zusatzsicherheiten werden als Wertpapiere geliefert; negativer Bedarf bedeutet vertraglich erlaubte Freigabe, keine Kreditrückzahlung. Ungedecktes Anfangscash ist eine Momentaufnahme vor Transfer, Kosten und Close-out, kein berechneter Ausfallverlust. Endrückkaufpreis enthält dagegen den gesamten vereinbarten Repo-Zins. Die Kurve vergleicht gleichzeitige Preisszenarien, keinen zeitlichen Kursverlauf.');
 out.marker=[p.shock,margin];out.repo={cash,interest,repurchase,current,required,margin,uncovered,initialMargin};
 out.projection={caption:'Cash und Sicherheiten nach Zeit und Bezugsgröße trennen',headers:['Größe','Wert (Mio.)'],rows:[['Anfänglicher Sicherheitenwert',p.size],['Anfänglich erhaltenes Cash',cash],['Nicht durch Repo finanzierter Anfangswert',p.size-cash],['Aktueller Wert des ursprünglichen Bestands',current],['Exposition der Zwischenmargin ohne Zins',cash],['Aktuell geforderter Gesamtwert',required],['Signierter Sicherheiten-Lieferbedarf',margin],['Ungedecktes Anfangscash vor Transfer',uncovered],['Repo-Zins der gesamten Laufzeit',interest],['Endrückkaufpreis',repurchase]]};
 out.stable={caption:'Cashpfeile bei ordnungsgemäßem Beginn und Ende; Sicherheitenlieferung ist kein Cash',headers:['Cashtermin','Cashnehmer (Mio.)','Cashgeber (Mio.)'],rows:[['Anfang: Cash gegen Wertpapiere',cash,-cash],['Ende: Rückkauf gegen Rücklieferung',-repurchase,repurchase],['Saldo der Cashzahlungen',-interest,interest]]};
 return out;
}
add('repofunding','Repo: Finanzierung, Zins und Sicherheitenbedarf','Verändere jeweils eine Annahme. Der Anfangs-Haircut bestimmt die Kreditgröße; Preisbewegung und aktuelle Haircutanforderung bestimmen später den Sicherheitenbedarf bei festgehaltenem Anfangskredit.',[
 field('size','Anfangswert Sicherheiten (Mio.)',10,500,1,100),
 field('haircut','Anfangs-Haircut (%)',0,40,.5,5),
 field('rate','Repo-Satz (% p.a., ACT/360)',0,15,.25,4),
 field('days','Laufzeit (Tage)',1,360,1,30),
 field('shock','Sicherheitenpreisänderung (%)',-50,20,1,-2),
 field('marginhaircut','Aktuell verlangter Haircut (%)',0,50,.5,5)
],repoFundingPlan);
models.repofunding.presets=[
 {label:'Grundfall laden',values:{size:100,haircut:5,rate:4,days:30,shock:-2,marginhaircut:5}},
 {label:'Stärkerer Kursrückgang',values:{size:100,haircut:5,rate:4,days:30,shock:-15,marginhaircut:5}},
 {label:'Nur Haircutanforderung steigt',values:{size:100,haircut:5,rate:4,days:30,shock:-2,marginhaircut:10}},
 {label:'Sicherheitenüberschuss',values:{size:100,haircut:5,rate:4,days:30,shock:5,marginhaircut:5}}
];
function yieldSpreadPlan(p){
 if(![p.coupon,p.price,p.z1,p.z2,p.z3].every(Number.isFinite)||p.coupon<0||p.price<=0||Math.min(p.z1,p.z2,p.z3)<=-100)throw Error('Bitte positiven Vollpreis, nicht negativen Kupon und zulässige Spotzinsen verwenden.');
 const spots=[p.z1,p.z2,p.z3].map(z=>z/100),cashflows=[p.coupon,p.coupon,p.coupon+100];
 const curvePrice=s=>cashflows.reduce((sum,cf,k)=>sum+cf/(1+spots[k]+s)**(k+1),0);
 const annualPrice=y=>cashflows.reduce((sum,cf,k)=>sum+cf/(1+y)**(k+1),0);
 const root=(fn,target,lo,hi)=>{if(fn(lo)<target||fn(hi)>target)throw Error('Für diese Werte ist kein zulässiges Suchintervall vorhanden.');for(let k=0;k<90;k++){const mid=(lo+hi)/2;if(fn(mid)>target)lo=mid;else hi=mid;}return(lo+hi)/2;};
 const floor=-.99-Math.min(...spots),s=root(curvePrice,p.price,floor,1),reference=curvePrice(0),ytm=root(annualPrice,p.price,-.99,1),referenceYtm=root(annualPrice,reference,-.99,1),nominalSpread=(ytm-referenceYtm)*10000;
 const lo=Math.max(floor+.000001,s-.01),hi=s+.01;
 const out=result([['Z-Spread (bp)',s*10000],['Bond-YTM jährlich (%)',ytm*100],['Vergleichs-IRR jährlich (%)',referenceYtm*100],['Nominaler IRR-Abstand (bp)',nominalSpread],['Preis ohne Z-Aufschlag',reference],['Preisabstand zum Referenzwert',p.price-reference]],seq(lo*10000,hi*10000,bp=>curvePrice(bp/10000),120),'Konstanter Z-Spread (Basispunkte)','Vollpreis je hundert Nominal','Eigener dreijähriger Jahreskupon-Bond mit hundert Endtilgung; Bewertung unmittelbar nach Kuponzahlung. Die drei Spots sind effektive Jahresraten. Derselbe Spread wird in Dezimalform zu jedem Spot addiert. Feste Zahlungen ohne Optionen, Ausfall, Steuern oder Kosten; kein echter Kalender. Die Vergleichs-IRR entsteht aus demselben Zahlungsplan zum Preis der Referenzkurve und ist keine beobachtete Staatsquote. Der nominale IRR-Abstand ist nicht allgemein gleich Z. Die Kurve zeigt gleichzeitige Spreadannahmen um den passenden Wert, keinen erwarteten Zeitverlauf. OAS und Callausübung werden nicht berechnet.');
 out.marker=[s*10000,p.price];
 const plotted=out.points.map(point=>point[1]),low=Math.min(...plotted),high=Math.max(...plotted),pad=Math.max((high-low)*.1,.01);
 out.yRange=[low-pad,high+pad];
 out.note+=' Die Preisskala umfasst den gezeigten Szenariobereich.';
 out.spread={zSpread:s,ytm,referenceYtm,nominalSpread,reference,price:p.price,cashflows,spots};
 out.projection={caption:'Jede Zahlung mit ihrem passenden Spot plus konstantem Z-Aufschlag diskontieren',headers:['Jahr','Kupon','Tilgung','Gesamtzahlung','Spot (%)','Spot plus Z (%)','Diskontfaktor','Barwert'],rows:cashflows.map((cf,k)=>{const discount=(1+spots[k]+s)**-(k+1);return[k+1,p.coupon,k===2?100:0,cf,spots[k]*100,(spots[k]+s)*100,discount,cf*discount];})};
 out.stable={caption:'Preis, Kurvenaufschlag und einzelne Rechenrenditen abstimmen',headers:['Größe','Wert'],rows:[['Voller Kaufpreis',p.price],['Summe der Kurvenbarwerte',curvePrice(s)],['Einzel-YTM-Barwert zum Kaufpreis',annualPrice(ytm)],['Preis der Referenzkurve ohne Z',reference],['Einzel-YTM-Barwert der Referenz',annualPrice(referenceYtm)],['Z-Spread (bp)',s*10000],['Nominaler IRR-Abstand (bp)',nominalSpread]]};
 return out;
}
add('yieldspread','Spotkurve, Z-Spread und Rechenrenditen','Dreijähriger Jahreskupon-Bond mit hundert Endnominal, direkt nach einer Kuponzahlung bewertet. Verändere jeweils nur einen Wert. Der Rechner gleicht denselben festen Zahlungsplan mit einer gesamten Spotkurve ab und vergleicht anschließend die beiden daraus entstehenden einzelnen YTMs.',[
 field('coupon','Jahreskupon je hundert Nominal',0,15,.25,5),
 field('price','Voller Kaufpreis je hundert',60,140,.000001,96.979267),
 field('z1','Einjähriger Spot (% effektiv)',-2,15,.25,3),
 field('z2','Zweijähriger Spot (% effektiv)',-2,15,.25,4),
 field('z3','Dreijähriger Spot (% effektiv)',-2,15,.25,5)
],yieldSpreadPlan);
models.yieldspread.presets=[
 {label:'Steile Referenzkurve',values:{coupon:5,price:96.979267,z1:3,z2:4,z3:5}},
 {label:'Flache Referenzkurve',values:{coupon:5,price:100,z1:4,z2:4,z3:4}},
 {label:'Nur Endzahlung',values:{coupon:0,price:Number((100/1.062**3).toFixed(6)),z1:3,z2:4,z3:5}},
 {label:'Höherer Kaufpreis',values:{coupon:5,price:101,z1:3,z2:4,z3:5}}
];
const api={models,calculate,annuity,price,bsm,cdf,forecastValue,companyPlan,covenantPlan,repaymentSchedule,bondIndexPlan,repoFundingPlan,yieldSpreadPlan};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.FinanceModels=api;
})(globalThis);
