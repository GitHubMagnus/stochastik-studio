const {sample:s,line:l,mark:m,normalPDF,root,fmt}=require('./chart.cjs'),S=require('./sources.cjs');
const figs={},add=(chapter,f)=>(figs[chapter]??=[]).push(f);
const stat={title:'OpenStax · Normalverteilung',url:'https://openstax.org/books/introductory-statistics-2e/pages/6-1-the-standard-normal-distribution'};
add('quant-01',{
 id:'compound-discount',title:'Aufzinsen und Abzinsen wirken in entgegengesetzte Richtungen',
 takeaway:'Ein gleicher Zinssatz vergrößert den Endwert heutiger Mittel und verkleinert den heutigen Wert künftiger Mittel.',
 read:'Aus 100 heute werden bei 5 % nach zehn Jahren 162,89. Umgekehrt sind 100, die erst in zehn Jahren fällig werden, heute 61,39 wert. Die Kurven starten beide bei 100, beziehen sich aber auf unterschiedliche feste Zahlungsbeträge: einmal auf 100 heute, einmal auf 100 am jeweils betrachteten Endtermin.',
 assumptions:'Konstanter effektiver Jahreszins 5 %, keine Ausfälle, Steuern oder Zwischenzahlungen. Die fallende Linie ist keine Verlustentwicklung eines Kontos, sondern eine Reihe heutiger Barwerte bei wachsender Wartezeit.',
 tex:String.raw`FV_T=100(1{,}05)^T,\qquad PV_0(T)=\frac{100}{(1{,}05)^T},\qquad DF(0,T)=(1{,}05)^{-T}`,sources:[S.tvm],links:['bonds-05','corporate-04'],
 plot:{x:[0,20],y:[0,300],xLabel:'Zeit bis zur Zahlung T (Jahre)',yLabel:'Zahlungswert (GE)',series:[l('Endwert von 100 heute',s(0,20,t=>100*1.05**t)),l('Heutiger Barwert von 100 in T',s(0,20,t=>100/1.05**t),{dash:'8 5'})],marks:[m(10,100*1.05**10,'FV₁₀'),m(10,100/1.05**10,'PV₀',{dy:25})]}
});
add('quant-07',{
 id:'normal-scale',title:'Mehr Streuung verteilt dieselbe Wahrscheinlichkeit breiter',
 takeaway:'Eine breitere Normalverteilung hat einen niedrigeren Gipfel, bleibt aber auf Gesamtwahrscheinlichkeit eins normiert.',
 read:'Beide Verteilungen haben Mittelwert null. Die zweite hat die doppelte Standardabweichung und deshalb am Mittelpunkt die halbe Dichte. Bei σ = 1 liegen etwa 68,27 % innerhalb [−1; 1], bei σ = 2 nur etwa 38,29 %. Erst das Intervall [−2; 2] umfasst für die breitere Verteilung wieder etwa 68,27 %.',
 assumptions:'Dichtekurven stetiger normalverteilter Modellgrößen. Die Höhe ist keine Punktwahrscheinlichkeit; Wahrscheinlichkeiten entsprechen Flächen über Intervallen. Die außerhalb der Abbildung liegenden Verteilungsschwänze werden nicht abgeschnitten oder umnormiert.',
 tex:String.raw`f(x;\mu,\sigma)=\frac{1}{\sigma\sqrt{2\pi}}\exp\!\left[-\frac{(x-\mu)^2}{2\sigma^2}\right],\qquad P(a\le X\le b)=\int_a^b f(x)\,dx`,sources:[stat],links:['quant-08','portfolio-12'],
 plot:{x:[-6,6],y:[0,.45],xLabel:'Abweichung x (Modelleinheiten)',yLabel:'Wahrscheinlichkeitsdichte',series:[l('μ = 0, σ = 1',s(-6,6,x=>normalPDF(x))),l('μ = 0, σ = 2',s(-6,6,x=>normalPDF(x,0,2)),{dash:'8 5'})],areas:[{points:[[-1,0],...s(-1,1,x=>normalPDF(x)),[1,0]],color:'#087f82'}]}
});
const critical=1.6448536269514722;
add('quant-08',{
 id:'hypothesis-errors-power',title:'Fehler erster und zweiter Art stammen aus verschiedenen Verteilungen',
 takeaway:'Ein kleiner Fehler erster Art garantiert noch keine hohe Teststärke.',
 read:'Der einseitige Test verwirft H₀ bei Z > 1,645. Rechts der Grenze liegt unter der grünen H₀-Verteilung eine Fläche von 5 %: α. Unter der orangefarbenen Alternative mit Mittelwert 2 liegt links derselben Grenze die Fläche β ≈ 36 %. Die Teststärke ist deshalb nur etwa 64 %. α und β werden unter unterschiedlichen Annahmen über den wahren Zustand berechnet.',
 assumptions:'Bekannter Standardfehler, standardisierte Teststatistik, gerichtete Alternative und einseitiges Signifikanzniveau 5 %. Der Mittelwert 2 unter H₁ ist eine ausdrücklich gewählte Effektgröße in Standardfehlern. Andere Effekte, Stichprobengrößen oder zweiseitige Tests verändern β und die Ablehnungsgrenze.',
 tex:String.raw`Z\mid H_0\sim N(0,1),\quad Z\mid H_1\sim N(2,1);\qquad \alpha=1-\Phi(1{,}64485)=0{,}05,\quad\beta=\Phi(1{,}64485-2),\quad\mathrm{Power}=1-\beta`,sources:[{title:'OpenStax · Fehler erster und zweiter Art',url:'https://openstax.org/books/introductory-statistics-2e/pages/9-2-outcomes-and-the-type-i-and-type-ii-errors'}],links:['quant-07','quant-09'],
 plot:{x:[-4,6],y:[0,.46],xLabel:'Teststatistik Z (Standardfehlereinheiten)',yLabel:'Wahrscheinlichkeitsdichte',series:[l('Verteilung unter H₀: Mittel 0',s(-4,6,x=>normalPDF(x))),l('Verteilung unter gewähltem H₁: Mittel 2',s(-4,6,x=>normalPDF(x,2,1)),{dash:'8 5'}),l('Ablehnungsgrenze Z = 1,645',[[critical,0],[critical,.46]],{dash:'3 5'})],areas:[{points:[[critical,0],...s(critical,6,x=>normalPDF(x)),[6,0]],color:'#087f82',opacity:.4},{points:[[-4,0],...s(-4,critical,x=>normalPDF(x,2,1)),[critical,0]],opacity:.18}],marks:[m(critical,.435,'Grenze',{dx:-12,anchor:'end'})]}
});
const npv=r=>-100+60/(1+r)+60/(1+r)**2,irr=root(npv,0,.5);
add('corporate-04',{
 id:'npv-profile',title:'Kapitalwertprofil und interner Zinsfuß',
 takeaway:'Bei einer normalen Zahlungsreihe senkt ein höherer Diskontsatz den Kapitalwert.',
 read:'Das Projekt kostet heute 100 und liefert in den beiden Folgejahren jeweils 60. Bei 10 % Kapitalkosten beträgt der Kapitalwert 4,13; bei 20 % ist er −8,33. Der Schnittpunkt mit der Nulllinie liegt bei IRR ≈ '+fmt(irr*100)+' %. Nur bei einem kleineren geforderten Diskontsatz ist dieses Projekt im Modell wertsteigernd.',
 assumptions:'Sichere oder bereits angemessen risikoadjustierte Zahlungsprognosen, einheitlicher Diskontsatz, Investition heute und ausschließlich positive spätere Zahlungen. Für Projekte unterschiedlicher Größe ist der höchste IRR nicht automatisch das beste Entscheidungskriterium.',
 tex:String.raw`NPV(r)=-100+\frac{60}{1+r}+\frac{60}{(1+r)^2},\qquad NPV(IRR)=0,\qquad NPV'(r)<0\quad(r>-1)`,sources:[S.npv],links:['quant-01','corporate-06'],
 plot:{x:[0,35],y:[-25,25],xLabel:'Diskontsatz r (%)',yLabel:'Kapitalwert NPV (GE)',series:[l('NPV der Zahlungsreihe (−100; 60; 60)',s(0,35,r=>npv(r/100)))],marks:[m(10,npv(.1),'r = 10 %',{dx:-12,anchor:'end'}),m(irr*100,0,'IRR',{dy:26,guides:true}),m(20,npv(.2),'r = 20 %',{dy:25})]}
});
const multipleNPV=r=>-100+230/(1+r)-132/(1+r)**2;
add('corporate-04',{
 id:'multiple-irr',title:'Zwei interne Zinsfüße bei mehrfachen Vorzeichenwechseln',
 takeaway:'Nicht jede Zahlungsreihe besitzt einen einzigen, eindeutig interpretierbaren IRR.',
 read:'Auf −100 heute folgen +230 nach einem Jahr und −132 nach zwei Jahren, beispielsweise durch Rückbaukosten. Der Kapitalwert ist sowohl bei 10 % als auch bei 20 % null. Dazwischen ist er positiv, außerhalb im gezeigten Bereich negativ. Die Regel „investieren, wenn der IRR größer als die Kapitalkosten ist“ hat hier ohne weitere Auswahl keinen eindeutigen Sinn.',
 assumptions:'Fiktive Zahlungsreihe mit zwei Vorzeichenwechseln, Jahresperioden und einem gemeinsamen Diskontsatz. Mehrere Vorzeichenwechsel ermöglichen mehrere positive IRRs, erzwingen sie aber nicht. Der Kapitalwert am tatsächlich passenden Diskontsatz bleibt das Entscheidungskriterium.',
 tex:String.raw`NPV(r)=-100+\frac{230}{1+r}-\frac{132}{(1+r)^2};\qquad100(1+r)^2-230(1+r)+132=0;\qquad IRR_1=10\%,\quad IRR_2=20\%`,sources:[S.npv],links:['corporate-05'],
 plot:{x:[0,30],y:[-2.2,.6],xLabel:'Diskontsatz r (%)',yLabel:'Kapitalwert NPV (GE)',series:[l('NPV: −100, +230, −132',s(0,30,r=>multipleNPV(r/100)))],marks:[m(10,0,'10 %',{dx:-12,dy:24,anchor:'end'}),m(20,0,'20 %',{dy:24})]}
});
add('corporate-07',{
 id:'operating-break-even',title:'Fixkosten und operative Gewinnschwelle',
 takeaway:'Fixkosten erzeugen eine Gewinnschwelle und verstärken prozentuale Gewinnänderungen nahe dieser Schwelle.',
 read:'Der Preis beträgt 10 je Stück, die variablen Kosten 6, die Fixkosten 200. Bei 50 Stück sind Umsatz und Gesamtkosten jeweils 500: E ist die Gewinnschwelle. Bei 60 Stück entsteht Gewinn 40, bei 70 Stück Gewinn 80. Nur 16,67 % mehr Absatz verdoppelt also hier den operativen Gewinn. Unterhalb 50 ist er negativ.',
 assumptions:'Konstanter Preis und konstante variable Stückkosten im gezeigten Mengenbereich, unveränderte Fixkosten, keine Kapazitätssprünge oder Steuern. Der Degree of Operating Leverage ist am Break-even wegen EBIT = 0 nicht definiert.',
 tex:String.raw`TR=pQ=10Q,\quad TC=F+vQ=200+6Q,\quad EBIT=(p-v)Q-F;\qquad Q_{BE}=\frac{F}{p-v}=50,\quad DOL=\frac{(p-v)Q}{EBIT}`,sources:[S.costs],links:['economics-02','corporate-06'],
 plot:{x:[0,100],y:[0,1100],xLabel:'Absatz Q (Stück)',yLabel:'Umsatz / Gesamtkosten (GE)',series:[l('Umsatz TR',s(0,100,q=>10*q)),l('Gesamtkosten TC',s(0,100,q=>200+6*q),{dash:'8 5'})],marks:[m(50,500,'E · Break-even',{guides:true})]}
});
const spot=n=>.02+.003*n,df=n=>(1+spot(n))**(-n);
const rates=Array.from({length:10},(_,i)=>{const n=i+1;return{n,spot:spot(n),par:(1-df(n))/Array.from({length:n},(_,j)=>df(j+1)).reduce((a,b)=>a+b,0),forward:(n===1?1:df(n-1))/df(n)-1};});
add('bonds-06',{
 id:'spot-par-forward',title:'Spot-, Par- und Forward-Zinsen aus derselben Diskontkurve',
 takeaway:'Die drei Zinskurven beantworten unterschiedliche Fragen und müssen rechnerisch zusammenpassen.',
 read:'Die Spotkurve steigt hier jährlich um 0,3 Prozentpunkte. Der n-jährige Spotzins bewertet eine einzige Zahlung in n Jahren. Der Parzins ist der jährliche Kupon, bei dem eine n-jährige Anleihe genau 100 kostet. Der Forwardzins gehört nur zum Jahr von n − 1 bis n. Bei zehn Jahren sind Spotzins 5 %, Parzins '+fmt(rates[9].par*100)+' % und letzter Jahresforward '+fmt(rates[9].forward*100)+' %.',
 assumptions:'Jährliche effektive Zinsen und Kuponzahlungen, keine Ausfälle, keine Optionen, konsistente Diskontfaktoren. Die Verbindungslinien dienen nur dem Lesen diskreter Jahreswerte; zwischenjährige Arbitragefreiheit wird damit nicht durch eine besondere Interpolation modelliert. Forward-Zinsen enthalten Erwartungen und Prämien und sind keine sicheren Prognosen.',
 tex:String.raw`DF_n=(1+s_n)^{-n},\quad c_n=\frac{1-DF_n}{\sum_{t=1}^nDF_t},\quad f_{n-1,n}=\frac{DF_{n-1}}{DF_n}-1,\quad DF_0=1`,sources:[S.curves],links:['bonds-05','bonds-07','economics-07'],
 plot:{x:[1,10],y:[0,9],xTicks:[1,2,4,6,8,10],xLabel:'Laufzeit / Endjahr n',yLabel:'Jahreszins (%)',series:[l('Spotzins sₙ',rates.map(r=>[r.n,r.spot*100])),l('Par-Kupon cₙ',rates.map(r=>[r.n,r.par*100]),{dash:'8 5'}),l('Einjähriger Forward fₙ₋₁,ₙ',rates.map(r=>[r.n,r.forward*100]),{dash:'3 5'})]}
});
add('derivatives-03',{
 id:'forward-terminal-payoff',title:'Long und Short Forward: spiegelbildliche Endauszahlungen',
 takeaway:'Der Forward tauscht einen unsicheren Endpreis gegen einen heute fest vereinbarten Lieferpreis.',
 read:'Der Lieferpreis K ist 100. Liegt der Basiswert am Ende bei 130, erhält die Long-Seite netto 30 und die Short-Seite verliert 30. Bei Sₜ = 70 ist es umgekehrt. Die Steigungen +1 und −1 entsprechen der vereinbarten Stückzahl eins. Der Schnittpunkt bei K bedeutet eine Endauszahlung von null.',
 assumptions:'Eine Einheit, Nettoausgleich bei Fälligkeit, keine Ausfälle oder Kosten. Ein fair abgeschlossener Forward benötigt anfänglich keine Prämie. Die Grafik zeigt die Endauszahlung; der laufende Vertragswert vor Fälligkeit erfordert den aktuellen Terminpreis und Abzinsung.',
 tex:String.raw`\Pi_T^{long}=S_T-K,\qquad\Pi_T^{short}=K-S_T,\qquad V_t^{long}=DF(t,T)\,[F_{t,T}-K]`,sources:[S.parity],links:['derivatives-02','derivatives-06'],
 plot:{x:[40,160],y:[-70,70],xLabel:'Basiswertpreis bei Fälligkeit Sₜ',yLabel:'Endauszahlung je Einheit (GE)',series:[l('Long Forward, K = 100',s(40,160,x=>x-100)),l('Short Forward, K = 100',s(40,160,x=>100-x),{dash:'8 5'})],marks:[m(100,0,'K',{dy:25}),m(130,30,'Long: +30'),m(130,-30,'Short: −30',{dy:25})]}
});
for(const put of [false,true]){
 const premium=put?6:8,payoff=x=>Math.max(put?100-x:x-100,0),be=put?94:108;
 add('derivatives-06',{
  id:put?'put-payoff-profit':'call-payoff-profit',title:put?'Long Put: Auszahlung und Gewinn getrennt lesen':'Long Call: Auszahlung ist noch kein Gewinn',
  takeaway:put?'Der Put gewinnt an Auszahlungswert, wenn der Basiswert unter den Strike fällt; zunächst muss aber die Prämie verdient werden.':'Ein Call kann im Geld sein und trotzdem nach Prämie noch einen Verlust erzeugen.',
  read:put?'Der Put hat Strike 100 und Prämie 6. Bei Endkurs 100 ist seine Auszahlung null, der Gewinn −6. Bei Endkurs 94 ist die Auszahlung 6 und der Gewinn null. Bei Endkurs 80 entstehen Auszahlung 20 und Gewinn 14. Der maximale Verlust des gekauften Put ist die Prämie 6.':'Der Call hat Strike 100 und Prämie 8. Bei Endkurs 104 ist die Auszahlung 4, der Gewinn aber −4. Erst bei 108 liegt der Break-even. Bei Endkurs 130 entstehen Auszahlung 30 und Gewinn 22. Unter oder am Strike verfällt der Call ohne Auszahlung; der Verlust bleibt auf 8 begrenzt.',
  assumptions:'Europäische gekaufte Option auf eine Einheit, Darstellung ausschließlich am Verfallstag. Prämie zu Beginn bezahlt, Zinssatz null, keine Gebühren. Bei positivem Finanzierungszins ist für einen Endwertvergleich die Prämie aufzuzinsen. Ein Optionspreis vor Verfall enthält zusätzlich Zeitwert.',
  tex:put?String.raw`P_T=\max(K-S_T,0),\quad\Pi_T=P_T-P_0;\qquad K=100,\ P_0=6,\quad S_{BE}=K-P_0=94`:String.raw`C_T=\max(S_T-K,0),\quad\Pi_T=C_T-C_0;\qquad K=100,\ C_0=8,\quad S_{BE}=K+C_0=108`,sources:[S.options],links:['derivatives-07','derivatives-10'],
  plot:{x:[40,160],y:[-15,70],xLabel:'Basiswertpreis bei Verfall Sₜ',yLabel:'Auszahlung / Gewinn (GE je Option)',series:[l('Endauszahlung',s(40,160,payoff)),l('Gewinn nach Prämie '+premium,s(40,160,x=>payoff(x)-premium),{dash:'8 5'})],marks:[m(100,0,'K',{dx:put?10:-12,anchor:put?'start':'end',dy:24}),m(be,0,'Break-even',{dx:put?-12:12,anchor:put?'end':'start',dy:-18})]}
 });
}
const pUp=.625,call0=pUp*pUp*44/1.05**2;
add('derivatives-07',{
 id:'binomial-price-tree',title:'Rekombinierender Binomialbaum: vom Endwert rückwärts rechnen',
 takeaway:'Der Preisbaum gibt die Zustände vor; die Option wird mit risikoneutralen Gewichten rückwärts bewertet.',
 read:'Der Basiswert startet bei 100; pro Periode steigt er um 20 % oder fällt um 20 %. Nach zwei Perioden sind 144, 96 und 64 möglich. Ein Call mit Strike 100 zahlt daher 44, 0 oder 0. Bei sicherem Periodenzins 5 % ist die risikoneutrale Aufwärtswahrscheinlichkeit 0,625. Der heutige Callwert ist '+fmt(call0)+'; die reale Aufwärtswahrscheinlichkeit wird dafür nicht benötigt.',
 assumptions:'Zwei gleich lange Perioden, konstante Faktoren u = 1,2 und d = 0,8, keine Dividenden, Kosten oder Ausfälle, europäische Ausübung. Die Strecke 100 → 120 → 96 und 100 → 80 → 96 endet im selben Knoten. Die gezeichneten Kurse sind mögliche Zustände, kein zeitlicher Prognosepfad.',
 tex:String.raw`p^*=\frac{1+r-d}{u-d}=\frac{1{,}05-0{,}8}{1{,}2-0{,}8}=0{,}625,\qquad C_0=\frac{(p^*)^2\cdot44}{(1{,}05)^2}\approx15{,}59`,sources:[{title:'CFA Institute · Binomialbewertung',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/valuing-derivative-one-period-binomial-model'}],links:['derivatives-02','derivatives-08'],
 plot:{x:[0,2.5],y:[50,165],xTicks:[0,1,2],xLabel:'Zeitpunkt / Periode',yLabel:'Möglicher Basiswertpreis S (GE)',series:[l('Aufwärtszweige',[[0,100],[1,120],[2,144]]),l('Abwärtszweige',[[0,100],[1,80],[2,64]],{dash:'8 5'}),l('Rekombination bei 96',[[1,120],[2,96],[1,80]],{dash:'3 5'})],marks:[m(0,100,'100',{dy:24}),m(1,120,'120'),m(1,80,'80',{dy:24}),m(2,144,'144 · C = 44'),m(2,96,'96 · C = 0'),m(2,64,'64 · C = 0',{dy:24})]}
});
add('derivatives-10',{
 id:'option-hedge-strategies',title:'Protective Put und Covered Call verändern verschiedene Seiten des Risikos',
 takeaway:'Ein Put begrenzt die Verlustseite; ein verkaufter Call begrenzt die Gewinnseite.',
 read:'Die Aktie wird für 100 gekauft. Der Protective Put mit Strike 100 kostet 6 und begrenzt den Gesamtverlust am Verfall auf 6. Der Covered Call mit Strike 110 bringt Prämie 5: Sein Gewinn ist auf 15 begrenzt, während bei stark fallendem Kurs weiterhin große Verluste entstehen. Die ungesicherte Aktie liegt als Referenz dazwischen.',
 assumptions:'Eine Aktie und eine Option, europäische Ausübung, Verfallstag, keine Dividenden, Gebühren oder Finanzierungskosten. Die Prämien sind feste illustrative Eingaben; die Grafik bewertet sie nicht. Ein Covered Call ist kein Ersatz für eine harte Verlustgrenze.',
 tex:String.raw`\Pi_{stock}=S_T-100,\quad\Pi_{protective}=S_T-100+\max(100-S_T,0)-6;\qquad\Pi_{covered}=S_T-100-\max(S_T-110,0)+5`,sources:[S.options],links:['derivatives-06','portfolio-13'],
 plot:{x:[40,160],y:[-65,70],xLabel:'Aktienpreis bei Verfall Sₜ',yLabel:'Gesamtgewinn nach Prämie (GE)',series:[l('Aktie ohne Option',s(40,160,x=>x-100),{color:'#8298a4',dash:'3 5'}),l('Aktie + Put (K = 100, Prämie 6)',s(40,160,x=>x-100+Math.max(100-x,0)-6),{color:'#087f82'}),l('Aktie − Call (K = 110, Prämie 5)',s(40,160,x=>x-100-Math.max(x-110,0)+5),{dash:'8 5',color:'#ba6824'})],marks:[m(60,-6,'Verlustgrenze −6',{dy:24}),m(140,15,'Gewinndeckel +15',{anchor:'end',dx:-8,dy:25})]}
});
add('alternatives-08',{
 id:'commodity-term-curves',title:'Contango und Backwardation sind Formen der heutigen Terminkurve',
 takeaway:'Tragekosten und Verfügbarkeitsnutzen können Terminpreise über oder unter den Kassapreis legen.',
 read:'Beide Beispiele beginnen beim heutigen Kassapreis 100. In der Contango-Welt beträgt die Nettotragelast 5 % stetig pro Jahr; ein Zweijahreskontrakt kostet 110,52. In der Backwardation-Welt übersteigt die Convenience Yield Finanzierung und Lagerkosten um 4 %; derselbe Terminpreis beträgt 92,31. Es sind verschiedene Modellannahmen, keine zwei gleichzeitig arbitragefrei handelbaren Kurven desselben Guts.',
 assumptions:'Vereinfachtes Cost-of-Carry-Modell für lagerfähige Güter, stetige konstante Raten, keine saisonalen oder Lagerrestriktionen. Die horizontale Achse sind heute verfügbare Fälligkeiten, nicht realisierte Preise in der Zukunft. Eine steigende Kurve allein legt die künftige Gesamt- oder Rollrendite nicht sicher fest.',
 tex:String.raw`F_{0,T}=S_0e^{(r+u-y)T},\qquad S_0=100;\qquad r+u-y=5\%\ \text{bzw.}\ -4\%`,sources:[{title:'CFA Institute · Rohstoffe und Rohstoffderivate',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/introduction-commodities-commodity-derivatives'}],links:['derivatives-02','bonds-06'],
 plot:{x:[0,3],y:[80,125],xLabel:'Heutige Kontraktlaufzeit T (Jahre)',yLabel:'Terminpreis (GE je Einheit)',series:[l('Contango: Nettotragelast +5 %',s(0,3,t=>100*Math.exp(.05*t))),l('Backwardation: Nettotragelast −4 %',s(0,3,t=>100*Math.exp(-.04*t)),{dash:'8 5'}),l('Heutiger Kassapreis 100',s(0,3,()=>100),{dash:'3 5'})]}
});
const assetPV=y=>50*(1.05/(1+y))**2+50*(1.05/(1+y))**8,liabilityPV=y=>100*(1.05/(1+y))**5;
add('advanced-03',{
 id:'alm-duration-convexity',title:'Immunisierung: gleicher Barwert, gleiche Duration, andere Konvexität',
 takeaway:'Gleiche Anfangswerte allein reichen nicht; die erste Zinsreaktion von Vermögen und Verpflichtung muss ebenfalls passen.',
 read:'Die Verpflichtung ist eine sichere Zahlung in fünf Jahren mit heutigem Barwert 100 bei 5 % Zins. Die Vermögensseite besteht aus zwei Nullkuponanlagen mit Barwerten je 50 und Laufzeiten zwei und acht Jahre. Ihre Macaulay Duration ist ebenfalls fünf Jahre. Bei 5 % berühren sich die Preisfunktionen; das stärker konvexe Vermögen liegt bei parallelen Zinsverschiebungen beiderseits darüber.',
 assumptions:'Flache Zinskurve, jährliche effektive Verzinsung, sichere feste Zahlungen, keine Optionen, Kosten oder Zwischenentnahmen. Dies ist der heutige Barwertüberschuss bei parallelen Schocks, keine vollständige Sicherung gegen Zinskurvendrehungen, spätere Rebalancingkosten oder zukünftige Liquiditätsprobleme.',
 tex:String.raw`PV_A(y)=50\left(\frac{1{,}05}{1+y}\right)^2+50\left(\frac{1{,}05}{1+y}\right)^8,\quad PV_L(y)=100\left(\frac{1{,}05}{1+y}\right)^5;\qquad D_A=0{,}5\cdot2+0{,}5\cdot8=D_L=5`,sources:[S.bonds],links:['bonds-08','path-portfolio-03'],
 plot:{x:[0,12],y:[60,135],xLabel:'Paralleler Jahreszins y (%)',yLabel:'Heutiger Barwert (GE)',series:[l('Vermögen: zwei Nullkuponanlagen',s(0,12,y=>assetPV(y/100))),l('Verpflichtung: Zahlung in fünf Jahren',s(0,12,y=>liabilityPV(y/100)),{dash:'8 5'})],marks:[m(5,100,'Gleicher Wert und gleiche Tangente',{guides:true,dy:26})]}
});
module.exports=figs;
Object.defineProperty(module.exports,'models',{value:{npv,irr,multipleNPV,spot,df,rates,call0,assetPV,liabilityPV}});
