const {F,T,X,S,G}=require('../author.cjs');
const sample=(fn)=>Array.from({length:121},(_,i)=>{const x=-3+i/20;return[x,fn(x)];});
const critical=3.182446305284263;
const half=(x,future)=>critical*Math.sqrt(4/3*((future?1:0)+1/5+x*x/10));
module.exports={id:'regression',intro:[
 'Regression übersetzt die Frage „Wie verändert sich Y typischerweise mit X?“ in eine überprüfbare Gleichung. Sie trennt einen systematischen Zusammenhang von den Abweichungen einzelner Beobachtungen. Ein gutes Modell muss dabei mehr leisten, als eine Linie durch historische Punkte zu ziehen: Einheiten, Annahmen und Prognoseunsicherheit müssen zur Anlagefrage passen.',
 'Wir verwenden durchgehend dieselben fünf konstruierten Beobachtungen. So lässt sich verfolgen, wie aus Rohdaten Koeffizienten, Residuen, ANOVA, Tests und Prognosen entstehen. Die kleine Fallzahl ist absichtlich gewählt, damit jede Rechnung nachprüfbar bleibt; sie wäre keine ausreichende Grundlage für eine reale Managerbeurteilung.'
],sections:[
 S('model','1. Population, Schätzung und Residuum unterscheiden','a',[
  F('Y_i=\\beta_0+\\beta_1X_i+\\varepsilon_i,\\qquad E[Y_i\\mid X_i]=\\beta_0+\\beta_1X_i','Die erste Gleichung zerlegt eine Beobachtung in bedingten Mittelwert und Fehler. Die zweite folgt, wenn der Fehler bedingt auf X Erwartungswert null hat.',[['Y_i,X_i','Abhängige Zielgröße und erklärende Variable der Beobachtung i.'],['\\beta_0','Unbekannter Populationsintercept: bedingter Y-Mittelwert bei X = 0.'],['\\beta_1','Unbekannte Populationssteigung: Änderung des bedingten Y-Mittels je Einheit X.'],['\\varepsilon_i','Unbeobachteter Fehler um den wahren bedingten Mittelwert.'],['E[Y_i\\mid X_i]','Bedingter Erwartungswert der Zielgröße.']]),
  F('\\hat y_i=b_0+b_1x_i,\\qquad e_i=y_i-\\hat y_i','Geschätzte Koeffizienten liefern angepasste Werte. Ein Residuum ist die beobachtete Abweichung von dieser geschätzten Linie; es ist nicht identisch mit dem unbeobachteten Populationsfehler.',[['b_0,b_1','Aus der Stichprobe geschätzter Intercept und geschätzte Steigung.'],['x_i,y_i','Beobachtete Werte des Paars i.'],['\\hat y_i','Angepasster Wert für Beobachtung i.'],['e_i','Residuum in Y-Einheiten.']]),
  'Wenn X in Prozentpunkten und Y in Prozentpunkten gemessen wird, bedeutet b₁ = 1,5: Ein um einen Prozentpunkt höheres X geht im Modell mit einem um 1,5 Prozentpunkte höheren bedingten Y-Mittel einher. Das ist keine garantierte Einzelbewegung und ohne Identifikationsargument kein kausaler Effekt.',
  'Der Intercept kann rechnerisch nötig sein, obwohl X = 0 außerhalb der Daten liegt und wirtschaftlich wenig Sinn ergibt. Eine Regression ohne Intercept ist ein anderes Modell; mehrere nachfolgende Identitäten gelten dann nicht mehr.'
 ]),
 S('least-squares','2. Warum OLS genau diese Gerade auswählt','a',[
  F('Q(b_0,b_1)=\\sum_{i=1}^n(y_i-b_0-b_1x_i)^2','Ordinary Least Squares minimiert die Summe quadrierter vertikaler Abstände. Quadrate verhindern die Aufhebung positiver und negativer Fehler und gewichten große Abweichungen stärker.',[['Q','Zu minimierende Residuenquadratsumme.'],['b_0,b_1','Bei der Minimierung veränderliche Intercept- und Steigungswerte.'],['x_i,y_i','Beobachtungen.'],['n,i','Fallzahl und Index.']]),
  F('\\frac{\\partial Q}{\\partial b_0}=-2\\sum_i(y_i-b_0-b_1x_i)=0,\\qquad \\frac{\\partial Q}{\\partial b_1}=-2\\sum_ix_i(y_i-b_0-b_1x_i)=0','An der optimalen Gerade sind die Ableitungen null. Die erste Bedingung macht die Residuen in Summe null; die zweite macht sie orthogonal zum beobachteten X.',[['Q,b_0,b_1','Zielfunktion und beide zu schätzenden Koeffizienten.'],['x_i,y_i,i','Datenpaare und Summenindex über alle n Beobachtungen.'],['\\partial','Partielle Ableitung bei Konstanthalten des jeweils anderen Koeffizienten.']]),
  F('S_{xx}=\\sum_i(x_i-\\bar x)^2,\\quad S_{xy}=\\sum_i(x_i-\\bar x)(y_i-\\bar y),\\quad b_1=\\frac{S_{xy}}{S_{xx}},\\quad b_0=\\bar y-b_1\\bar x','Die erste Bedingung ergibt b₀ = ȳ − b₁x̄. Einsetzen in die zweite und Zentrieren der Daten liefert die Steigung. X muss variieren, damit der Nenner positiv ist.',[['S_{xx}','Zentrierte Quadratsumme von X, nicht bereits eine Varianz.'],['S_{xy}','Zentrierte Kreuzproduktsumme von X und Y.'],['x_i,y_i,\\bar x,\\bar y','Beobachtungen und ihre Stichprobenmittelwerte.'],['b_0,b_1','OLS-Koeffizienten bei eingeschlossenem Intercept.'],['i','Summenindex über die Beobachtungen.']]),
  F('b_1=\\frac{\\widehat{\\operatorname{Cov}}(X,Y)}{s_X^2}=r_{XY}\\frac{s_Y}{s_X}','Mit demselben n−1-Nenner in Stichprobenkovarianz und Varianz kürzt sich dieser Nenner. Steigung kombiniert den standardisierten Zusammenhang mit dem Verhältnis der Messskalen.',[['b_1','OLS-Steigung.'],['\\widehat{\\operatorname{Cov}}(X,Y)','Stichprobenkovarianz.'],['s_X,s_Y','Stichprobenstandardabweichungen.'],['r_{XY}','Pearson-Stichprobenkorrelation.']]),
  'Die Linie geht damit durch den Schwerpunkt (x̄, ȳ). Das algebraische Nullsummen-Residuum beweist keine korrekte Modellspezifikation: Auch eine völlig ungeeignete OLS-Gerade mit Intercept hat diese Eigenschaft.'
 ]),
 S('worked-fit','3. Aus fünf Datenpaaren eine vollständige Schätzung gewinnen','a b',[
  T(['i','X (%)','Y (%)','X²','X × (Y − 1)'],[
   ['1','−2','−1','4','4'],['2','−1','−1,5','1','2,5'],['3','0','1','0','0'],['4','1','1,5','1','0,5'],['5','2','5','4','8']
  ],'Alle Renditewerte werden hier als Prozentzahlen eingesetzt: beispielsweise −2 statt −0,02. Summen: X = 0, Y = 5, X² = 10, X(Y−1) = 15.'),
  X('Eine Steigung von 1,5 ist aus den Abständen erklärbar','Fünf konstruierte Paare aus der Tabelle; n = 5, x̄ = 0 und ȳ = 1.',[
   F('b_1=15/10=1{,}5,\\qquad b_0=1-1{,}5\\cdot0=1,\\qquad \\hat y=1+1{,}5x','Ein zusätzlicher X-Prozentpunkt verändert den angepassten Y-Wert um 1,5 Prozentpunkte.',[['b_0,b_1','Intercept in Prozentpunkten und Steigung.'],['x,\\hat y','Eingesetzter X-Wert und geschätzter Y-Mittelwert, jeweils als Prozentzahl.']]),
   'Die angepassten Y-Werte lauten −2, −0,5, 1, 2,5 und 4. Tatsächlich beobachtet wurden −1, −1,5, 1, 1,5 und 5.',
   'Die Residuen sind +1, −1, 0, −1 und +1. Ihre Summe ist null; auch die Summe von X mal Residuum ist null. Ihre Quadratsumme ist 4.'
  ],'Die Gerade erklärt eine gemeinsame Tendenz, aber vier der fünf Einzelbeobachtungen liegen nicht auf ihr.'),
  G({id:'ols-fit',title:'Angepasste Gerade und beobachtete Renditepaare',
   caption:'Eigene Beispieldaten; die Punkte sind Beobachtungen, die Linie ist ŷ = 1 + 1,5x. Residuen sind vertikale Abstände zur Linie.',
   reading:'Bei X = 1 sagt die Gerade 2,5 % voraus, beobachtet werden 1,5 %: Residuum −1 Prozentpunkt. Bei X = 2 liegt die Beobachtung dagegen einen Prozentpunkt über der Gerade.',
   plot:{x:[-3,3],y:[-4,7],xLabel:'Erklärende Rendite X (%)',yLabel:'Zielrendite Y (%)',series:[{name:'OLS-Mittelwertlinie',points:[[-3,-3.5],[3,5.5]]}],marks:[[-2,-1],[-1,-1.5],[0,1],[1,1.5],[2,5]].map(([x,y],i)=>({x,y,label:String(i+1),dx:10,dy:-12}))}})
 ]),
 S('anova','4. Erklärte und unerklärte Variation: ANOVA ohne Abkürzungschaos','b c',[
  F('SST=\\sum_i(y_i-\\bar y)^2,\\quad SSR=\\sum_i(\\hat y_i-\\bar y)^2,\\quad SSE=\\sum_i(y_i-\\hat y_i)^2,\\quad SST=SSR+SSE','Mit OLS und Intercept zerfällt die totale zentrierte Y-Variation in erklärte Variation und Residuenvariation. Die Kreuzterme verschwinden durch die OLS-Orthogonalität.',[['SST','Total Sum of Squares, gesamte Quadratsumme.'],['SSR','Hier ausdrücklich Regression Sum of Squares, erklärte Quadratsumme.'],['SSE','Error Sum of Squares, Residuenquadratsumme.'],['y_i,\\hat y_i,\\bar y,i','Beobachteter und angepasster Y-Wert, Y-Mittel und Beobachtungsindex.']]),
  'Die Kürzel sind nicht überall einheitlich: Andere Quellen verwenden SSR für „sum of squared residuals“. Lies deshalb immer die Bedeutung oder Formel. In diesem Kapitel steht SSR ausschließlich für die erklärte Regression Sum of Squares.',
  T(['Quelle','Quadratsumme im Beispiel','Freiheitsgrade','Mittlere Quadratsumme'],[
   ['Regression','22,5','1','22,5'],['Residuen','4','n−2 = 3','4/3 ≈ 1,3333'],['Gesamt','26,5','n−1 = 4','26,5/4 = 6,625']
  ],'Die Einheit der Quadratsummen ist hier Prozentpunkte zum Quadrat. Zwei geschätzte Koeffizienten verbrauchen zwei Residuenfreiheitsgrade.'),
  F('R^2=\\frac{SSR}{SST}=1-\\frac{SSE}{SST},\\qquad s_e=\\sqrt{\\frac{SSE}{n-2}}','R² beschreibt den Anteil der in der Stichprobe erklärten zentrierten Variation. Der Standard Error of Estimate schätzt die Fehlerstreuung und besitzt wieder Y-Einheiten.',[['R^2','Bestimmtheitsmaß; bei positiver SST und OLS mit Intercept zwischen null und eins.'],['SSR,SST,SSE','Erklärte, totale und Residuenquadratsumme.'],['s_e','Residual Standard Error / Standard Error of Estimate.'],['n','Beobachtungszahl, hier größer als zwei.']]),
  X('Modellgüte und typische Abweichung sind verschiedene Zahlen','Im durchgehenden Beispiel gilt SST = 26,5 und SSE = 4.',[
   'R² = 22,5/26,5 ≈ 84,91 %. Die verbleibenden 15,09 % beziehen sich auf die beobachtete Variation um das Stichprobenmittel.',
   F('s_e=\\sqrt{4/(5-2)}\\approx1{,}1547\\%','Die geschätzte Fehlerstreuung beträgt rund 1,155 Prozentpunkte. Anders als R² enthält sie die wirtschaftliche Einheit der Zielgröße.',[['s_e','Geschätzte Standardabweichung des Regressionsfehlers.']]),
   'Der Nenner ist nicht n und nicht n−1. Bei gegebenen Daten reduzieren zwei geschätzte Koeffizienten die verbleibenden unabhängigen Residueninformationen.'
  ],'Hohes historisches R² beweist weder Kausalität noch stabile zukünftige Prognosegüte. Bei einfacher Regression mit Intercept gilt R² = r²; das Vorzeichen steckt in r und b₁, nicht in R².')
 ]),
 S('assumptions','5. Welche Annahme welche Aussage trägt','b',[
  T(['Annahme','Wofür sie relevant ist','Typischer Verstoß'],[
   ['Linearer bedingter Mittelwert und E[ε|X] = 0','Eine sinnvolle unverzerrte Koeffizientenschätzung im korrekt spezifizierten Modell.','Ausgelassener relevanter Einfluss, der mit X zusammenhängt; umgekehrte Kausalität.'],
   ['X variiert','Steigung ist identifizierbar; Sxx ist positiv.','Alle X-Werte identisch.'],
   ['Konstante bedingte Fehlervarianz','Übliche homoskedastische Standardfehler und Effizienzresultate.','Stärkere Fehlerstreuung bei großen Unternehmen oder großen X-Werten.'],
   ['Unkorrelierte Fehler zwischen Beobachtungen','Die einfachen Varianzformeln addieren keine zusätzlichen Kreuzkovarianzen.','Autokorrelation in monatlichen Daten oder gemeinsame Cluster.'],
   ['Bedingt gemeinsame Normalverteilung der Fehler bei den klassischen Annahmen','Exakte kleine-Stichproben-t-/F-Verteilungen und klassische Prognoseintervalle.','Ausreißer, starke Schiefe oder schwere Ränder.']
  ],'Normalität ist keine Voraussetzung dafür, die OLS-Geradenwerte algebraisch auszurechnen. Exakte Verteilungsaussagen brauchen mehr als die Rechenregel.'),
  'Heteroskedastizität macht bei weiterhin erfüllter Exogenität die OLS-Steigung nicht automatisch verzerrt; die üblichen Standardfehler können jedoch falsch sein. Geeignete robuste Standardfehler adressieren dieses Varianzproblem, lösen aber keine Endogenität oder falsche Funktionsform.',
  'Autokorrelation bedeutet, dass aufeinanderfolgende Fehler zusätzliche gemeinsame Information enthalten. Für geeignete Zeitreihen können HAC-Standardfehler in Betracht kommen. Stark trendende nichtstationäre Größen können scheinbar überzeugende Regressionen erzeugen, deren ökonomische Aussage unzuverlässig ist.',
  'Ein Residuenbild kann Warnsignale liefern, aber keine vollständige Unabhängigkeit oder Kausalität beweisen. Datenentstehung, Zeitstempel und wirtschaftlicher Mechanismus gehören zur Prüfung.'
 ]),
 S('diagnostics','6. Residuenbilder lesen statt nur R² ansehen','b',[
  G({id:'residual-curvature',title:'Eine U-Form verrät einen fehlenden nichtlinearen Zusammenhang',
   caption:'Separates konstruiertes Beispiel: X = −2, −1, 0, 1, 2 und Y = X². OLS mit Intercept und nur X ergibt ŷ = 2; die Residuen lauten 2, −1, −2, −1, 2.',
   reading:'Die Residuen summieren sich zu null und sind mit X in der Stichprobe unkorreliert. Trotzdem ist ihre systematische U-Form offensichtlich: Eine lineare Mittelwertfunktion lässt die Krümmung aus.',
   plot:{x:[-2.5,2.5],y:[-3,3],xLabel:'Erklärende Variable X',yLabel:'Residuum e',series:[{name:'Residualmuster (Punkte verbunden)',points:[[-2,2],[-1,-1],[0,-2],[1,-1],[2,2]]}],marks:[[-2,2],[-1,-1],[0,-2],[1,-1],[2,2]].map(([x,y])=>({x,y,label:''}))}}),
  T(['Muster','Mögliche Erklärung','Was daraus nicht folgt'],[
   ['U-Form oder andere systematische Kurve','Funktionsform des bedingten Mittels passt nicht.','Mehr Nachkommastellen lösen das Problem nicht.'],
   ['Trichter gegen X oder angepasste Werte','Fehlervarianz kann mit dem Niveau wachsen.','Eine Steigung muss dadurch nicht zwangsläufig verzerrt sein.'],
   ['Lange Folgen gleicher Vorzeichen über die Zeit','Mögliche serielle Fehlerabhängigkeit.','Die zeitliche Reihenfolge darf zur Diagnose nicht beliebig sortiert werden.'],
   ['Ein Punkt weit in X-Richtung','Hohe Hebelwirkung möglich.','Hohe Hebelwirkung ist nicht automatisch ein großes Residuum.'],
   ['Ein stark abweichender Y-Punkt','Großes Residuum bzw. möglicher Ausreißer.','Löschen ist nicht ohne Daten- oder Modellbegründung erlaubt.']
  ],'Einfluss auf die Gerade hängt von Hebelwirkung und Abweichung gemeinsam ab. Sensitivitätsanalyse wird dokumentiert, nicht zur Ergebnisoptimierung verborgen.')
 ]),
 S('coefficient-tests','7. Koeffizienten und Gesamtmodell testen','a b',[
  F('SE(b_1)=\\frac{s_e}{\\sqrt{S_{xx}}},\\qquad SE(b_0)=s_e\\sqrt{\\frac1n+\\frac{\\bar x^2}{S_{xx}}}','Breitere X-Streuung verbessert unter sonst gleichen klassischen Voraussetzungen die Präzision der Steigung. Der Intercept ist besonders unsicher, wenn null weit vom X-Schwerpunkt entfernt liegt.',[['SE(b_1),SE(b_0)','Geschätzte Standardfehler der Steigung und des Intercepts.'],['s_e','Geschätzte Fehlerstandardabweichung.'],['S_{xx}','Zentrierte X-Quadratsumme.'],['n,\\bar x','Beobachtungszahl und X-Mittelwert.']]),
  F('t=\\frac{b_j-\\beta_{j,0}}{SE(b_j)},\\qquad I_j=b_j\\pm t_{1-\\alpha/2,n-2}SE(b_j)','Getestet wird ein bestimmter behaupteter Koeffizient, nicht automatisch null. Unter den klassischen normalen Fehlerannahmen gilt eine t-Referenz mit n−2 Freiheitsgraden.',[['j','Koeffizientenindex 0 oder 1.'],['b_j,\\beta_{j,0}','Geschätzter Koeffizient und unter H₀ behaupteter Wert.'],['SE(b_j)','Zugehöriger geschätzter Standardfehler.'],['t,I_j','Beobachtete Teststatistik und zweiseitiges Konfidenzintervall.'],['\\alpha,n,t_{1-\\alpha/2,n-2}','Fehlerniveau, Fallzahl und kritisches t-Quantil.']]),
  X('Positiver Zusammenhang ist nicht dasselbe wie Beta über eins','Beispiel b₁ = 1,5, SSE = 4, Sxx = 10, n = 5. Für drei Freiheitsgrade sei der zweiseitige 5-%-kritische Betrag 3,18245.',[
   F('SE(b_1)=\\sqrt{\\frac4{3\\cdot10}}\\approx0{,}36515','Unsicherheit des Koeffizienten entsteht aus Fehlerstreuung relativ zur verfügbaren X-Variation.',[['SE(b_1)','Standardfehler der Steigung.']]),
   'Gegen H₀: β₁ = 0 ergibt sich t = 1,5/0,36515 ≈ 4,1079. H₀ wird auf 5 % verworfen.',
   'Gegen H₀: β₁ = 1 ergibt sich t = 0,5/0,36515 ≈ 1,3693. Diese andere Nullhypothese wird nicht verworfen.',
   'Das 95-%-Intervall reicht ungefähr von 0,338 bis 2,662. Es schließt null aus, enthält aber eins. Beide Testergebnisse sind damit vereinbar.'
  ],'Berichte immer den getesteten Nullwert. Die Aussage „der Koeffizient ist signifikant“ ohne Bezugswert ist unvollständig.'),
  F('F=\\frac{SSR/1}{SSE/(n-2)},\\qquad F=t_{\\beta_1=0}^2','In der einfachen Regression mit Intercept prüft der F-Test genau dieselbe Nullsteigung wie der zweiseitige t-Test. Die Identität gilt für die zugehörigen klassischen Statistiken.',[['F','Teststatistik mit Referenzfreiheitsgraden 1 und n−2.'],['SSR,SSE','Erklärte und Residuenquadratsumme.'],['n','Fallzahl.'],['t_{\\beta_1=0}','t-Statistik der Steigung gegen null.']]),
  'Hier gilt F = 22,5/(4/3) = 16,875 = 4,1079² bis auf Rundung. Ein F-Test auf einen allgemeinen Nichtnull-Steigungswert ist nicht einfach dieselbe ANOVA-Gesamtmodellstatistik.'
 ]),
 S('prediction','8. Punktschätzung, Mittelwertintervall und Einzelprognose','c',[
  F('\\hat y_*=b_0+b_1x_*,\\qquad h_* =\\frac1n+\\frac{(x_*-\\bar x)^2}{S_{xx}}','Die neue X-Eingabe wird in die geschätzte Linie eingesetzt. Der Hebelfaktor misst die Schätzunsicherheit am Vorhersageort: am kleinsten beim X-Schwerpunkt.',[['\\hat y_*,x_*','Prognostizierter bedingter Y-Mittelwert und vorgegebene neue X-Eingabe.'],['b_0,b_1','Geschätzte Koeffizienten.'],['h_*','Hebelfaktor des Vorhersageorts.'],['n,\\bar x,S_{xx}','Stichprobengröße, X-Mittel und zentrierte X-Quadratsumme.']]),
  F('SE_{mean}=s_e\\sqrt{h_*},\\qquad SE_{pred}=s_e\\sqrt{1+h_*}','Für den bedingten Mittelwert zählt nur die Schätzunsicherheit der Linie. Eine neue unabhängige Einzelbeobachtung enthält zusätzlich ihren eigenen Fehler; dessen Varianz erzeugt die zusätzliche Eins.',[['SE_{mean}','Standardfehler des geschätzten bedingten Mittelwerts.'],['SE_{pred}','Standardfehler für eine einzelne neue Beobachtung.'],['s_e','Geschätzte Fehlerstandardabweichung.'],['h_*','Hebelfaktor am vorgegebenen X-Wert.']]),
  F('I_{mean}=\\hat y_*\\pm t_{1-\\alpha/2,n-2}SE_{mean},\\qquad I_{pred}=\\hat y_*\\pm t_{1-\\alpha/2,n-2}SE_{pred}','Bei den klassischen normalen Fehlerannahmen ergeben sich zwei verschiedene Intervalle für zwei verschiedene Ziele. Das Prognoseintervall ist breiter.',[['I_{mean},I_{pred}','Konfidenzintervall des bedingten Mittels bzw. Prognoseintervall einer neuen Beobachtung.'],['\\hat y_*','Punktprognose.'],['SE_{mean},SE_{pred}','Zugehörige Standardfehler.'],['t_{1-\\alpha/2,n-2},\\alpha,n','Kritisches t-Quantil, Fehlerniveau und Fallzahl.']]),
  X('Bei X = 1 ist 2,5 % nur die Mitte','Beispiel n = 5, x̄ = 0, Sxx = 10, sₑ² = 4/3 und ŷ = 1 + 1,5x. Kritischer t-Wert: 3,18245.',[
   'Einsetzen von x* = 1 liefert ŷ* = 2,5 %. Der Hebelfaktor ist 1/5 + 1²/10 = 0,3.',
   F('SE_{mean}=\\sqrt{(4/3)\\cdot0{,}3}=0{,}63246\\%,\\qquad SE_{pred}=\\sqrt{(4/3)\\cdot1{,}3}=1{,}31656\\%','Die zusätzliche Varianz für die neue Beobachtung vergrößert den Standardfehler erheblich.',[['SE_{mean},SE_{pred}','Mittelwert- und Prognosestandardfehler, in Prozentpunkten.']]),
   'Das 95-%-Mittelwertintervall beträgt ungefähr [0,487 %; 4,513 %]. Das 95-%-Einzelprognoseintervall beträgt ungefähr [−1,690 %; 6,690 %].',
   'Eine künftige negative Einzelrendite ist daher trotz positiver Punktprognose nicht überraschend. Das Mittelwertintervall allein würde dieses Risiko unterschätzen.'
  ],'Alle Aussagen konditionieren hier auf ein bekanntes x*. Muss X selbst prognostiziert werden, kommt weitere Unsicherheit hinzu.'),
  G({id:'prediction-bands',title:'Einzelprognosen bleiben unsicherer als der geschätzte Mittelwert',
   caption:'Punktweise 95-%-Intervalle des Fünf-Punkte-Beispiels unter klassischen Normalannahmen. Beobachtete X-Spanne: −2 bis +2; Bereiche außerhalb sind Extrapolation.',
   reading:'Beide Bänder sind in der Mitte am schmalsten. Die äußeren Linien enthalten die zusätzliche Streuung eines neuen Y-Werts. Es handelt sich nicht um ein simultanes 95-%-Band für alle X zugleich.',
   plot:{x:[-3,3],y:[-10,13],xLabel:'Vorgegebene Rendite X (%)',yLabel:'Y-Prognose und Grenzen (%)',series:[
    {name:'Punktprognose',points:sample(x=>1+1.5*x)},
    {name:'Mittelwert: Untergrenze',color:'#ba6824',dash:'6 4',points:sample(x=>1+1.5*x-half(x,false))},
    {name:'Mittelwert: Obergrenze',color:'#ba6824',dash:'6 4',points:sample(x=>1+1.5*x+half(x,false))},
    {name:'Einzelwert: Untergrenze',color:'#5b64aa',points:sample(x=>1+1.5*x-half(x,true))},
    {name:'Einzelwert: Obergrenze',color:'#5b64aa',points:sample(x=>1+1.5*x+half(x,true))}
   ]}})
 ]),
 S('functional-forms','9. Linear in Koeffizienten bedeutet nicht linear in Rohdaten','c',[
  F('Y=b_0+b_1X,\\quad \\ln Y=b_0+b_1X,\\quad Y=b_0+b_1\\ln X,\\quad \\ln Y=b_0+b_1\\ln X','Die vier angepassten Funktionsformen in der Reihenfolge Lin–lin, Log–lin, Lin–log und Log–log; der Fehlerterm ist zur Darstellung der Funktion weggelassen.',[['Y,X','Ziel- und erklärende Größe der jeweiligen Funktion; logarithmierte Größen müssen positiv sein.'],['b_0,b_1','Intercept und Steigung der jeweils separat geschätzten Form.'],['\\ln','Natürlicher Logarithmus.']]),
  T(['Form','Interpretation der Steigung'],[
   ['Lin–lin','Eine X-Einheit verändert das geschätzte Y um b₁ Einheiten.'],
   ['Log–lin','Eine X-Einheit verändert das angepasste exponentierte Niveau um den Faktor exp(b₁); kleine Änderung näherungsweise 100b₁ %.'],
   ['Lin–log','Eine kleine relative X-Änderung wirkt mit b₁ auf das Y-Niveau; 1 % mehr X bedeutet näherungsweise 0,01b₁ Y-Einheiten.'],
   ['Log–log','b₁ ist die lokale Elastizität: relative Y-Änderung je relativer X-Änderung.']
  ],'Die Tabelle beschreibt die angepasste Funktion ohne explizit ausgeschriebenen Fehlerterm. Natürliche Logarithmen benötigen positive Werte.'),
  F('\\frac{\\hat Y_2}{\\hat Y_1}=e^{b_1\\Delta X}\\quad\\text{(Log–lin)},\\qquad \\Delta\\hat Y=b_1\\ln\\!\\left(\\frac{X_2}{X_1}\\right)\\quad\\text{(Lin–log)},\\qquad \\frac{\\hat Y_2}{\\hat Y_1}=\\left(\\frac{X_2}{X_1}\\right)^{b_1}\\quad\\text{(Log–log)}','Diese exakten Änderungen der angepassten Funktionen vermeiden die Verwechslung von Prozent und Prozentpunkten.',[['\\hat Y_1,\\hat Y_2','Angepasste Niveaus der Zielgröße vor und nach der Änderung; bei Log-Y hier exponentierte Logprognosen.'],['X_1,X_2,\\Delta X','Alte/neue positive X-Niveaus bzw. X-Differenz.'],['b_1','Geschätzte Steigung in der jeweiligen Form.'],['e,\\ln','Eulersche Zahl und natürlicher Logarithmus.']]),
  X('Drei Formen ergeben drei unterschiedliche Antworten','Betrachte jede Form separat, mit jeweils eigenem Koeffizienten.',[
   'Log–lin mit b₁ = 0,04 und ΔX = 2: exp(0,08) − 1 ≈ 8,33 % Niveauzuwachs. Die lineare Näherung 8 % ist nahe, aber nicht exakt.',
   'Lin–log mit b₁ = 3 und X-Anstieg von 100 auf 110: ΔŶ = 3 ln(1,1) ≈ 0,28593 Y-Einheiten. Das ist ohne weitere Skalierung keine Y-Prozentzahl.',
   'Log–log mit b₁ = 0,8 und demselben 10-%-X-Anstieg: 1,1^0,8 − 1 ≈ 7,923 % Änderung der exponentierten Logprognose.'
  ],'Die Bedeutung eines Koeffizienten ist erst mit Funktionsform und Einheiten vollständig.'),
  F('E[Y\\mid X]=e^{\\beta_0+\\beta_1X+\\sigma_\\varepsilon^2/2}\\quad\\text{bei normalem Logfehler}','Bei einem Log–lin-Modell mit normalem bedingtem Fehler ist einfaches Exponentieren des bedingten Logmittels der bedingte Median. Für den arithmetischen Mittelwert kommt der halbe Logvarianzterm hinzu. Ersetzt man die wahren Parameter durch Schätzwerte, erhält man eine Plug-in-Prognose mit eigener Schätzunsicherheit.',[['Y,X','Positive Zielgröße und vorgegebene erklärende Variable.'],['\\beta_0,\\beta_1','Wahre Intercept- und Steigungsparameter des Modells für ln Y.'],['\\sigma_\\varepsilon^2','Konstante bedingte Varianz des normalverteilten Fehlers in ln Y.'],['e,E[Y\\mid X]','Eulersche Zahl und bedingter arithmetischer Y-Mittelwert.']]),
  'R² aus einem Modell für Y und R² aus einem Modell für ln Y messen Variation auf unterschiedlichen Zielskalen und sollten nicht unbesehen gegeneinander ausgespielt werden. Eine Transformation ist keine automatische Lösung aller Diagnoseprobleme.'
 ]),
 S('capm','10. Alpha und Beta aus Überschussrenditen schätzen','d',[
  F('R_{i,t}-R_{f,t}=\\alpha_i+\\beta_i(R_{m,t}-R_{f,t})+\\varepsilon_{i,t}','Die empirische Marktregression erklärt die Asset-Überschussrendite mit der Markt-Überschussrendite. Risikofreie Renditen müssen zur gleichen Periode und Währung passen.',[['R_{i,t},R_{m,t},R_{f,t}','Asset-, Markt- und risikofreie einfache Rendite in Periode t.'],['\\alpha_i','Intercept: mittlere Asset-Überschussrendite, die das gewählte Marktmodell nicht erklärt.'],['\\beta_i','Marktsensitivität: bedingte Änderung der Asset-Überschussrendite je Markteinheit.'],['\\varepsilon_{i,t}','Modellfehler der Asset-Rendite.'],['i,t','Asset- und Zeitindex.']]),
  F('\\hat\\beta_i=\\frac{\\widehat{\\operatorname{Cov}}(R_i-R_f,R_m-R_f)}{\\widehat{\\operatorname{Var}}(R_m-R_f)},\\qquad \\hat\\alpha_i=\\overline{R_i-R_f}-\\hat\\beta_i\\overline{R_m-R_f}','Beta ist eine Regressionssteigung, keine Gesamtvolatilität. Alpha ist der zur geschätzten Marktsensitivität passende Intercept, nicht einfach die Differenz Assetrendite minus Marktrendite.',[['\\hat\\beta_i,\\hat\\alpha_i','Geschätztes Beta und periodisches Alpha.'],['R_i,R_m,R_f','Zeitlich zusammenpassende Renditereihen; Differenzen sind Überschussrenditen.'],['\\widehat{\\operatorname{Cov}},\\widehat{\\operatorname{Var}}','Stichprobenkovarianz und Stichprobenvarianz.'],['\\overline{R_i-R_f},\\overline{R_m-R_f}','Stichprobenmittel der beiden Überschussrenditen.']]),
  X('Das durchgehende Beispiel als Marktmodell','Lies X als monatliche Markt-Überschussrendite und Y als monatliche Asset-Überschussrendite.',[
   'Die Schätzung ergibt Beta 1,5 und monatliches Alpha 1 Prozentpunkt. Bei Markt-Überschussrendite 2 % lautet die angepasste Asset-Überschussrendite 1 % + 1,5 × 2 % = 4 %.',
   'Bei risikofreier Monatsrendite 0,2 % lautet die angepasste gesamte Assetrendite 4,2 %. Das risikofreie Niveau wird genau einmal hinzugefügt.',
   'Der Alpha-Standardfehler ist √(4/3 × 1/5) ≈ 0,5164 Prozentpunkte. t gegen Alpha null beträgt 1/0,5164 ≈ 1,9365 und ist kleiner als 3,18245: Alpha wird hier auf 5 % nicht als von null verschieden nachgewiesen.',
   'Ein positives geschätztes Alpha ist folglich noch kein Nachweis von Können. Gebühren, Benchmarkwahl, weitere Risikofaktoren, Datenfehler und die sehr kurze Stichprobe verändern die Aussage.'
  ],'Beta ist statistisch gegen null nachweisbar, Alpha in demselben Datensatz nicht. Zwei Koeffizienten derselben Gerade haben unterschiedliche Unsicherheiten.'),
  F('E[R_i]=R_f+\\beta_i(E[R_m]-R_f)','Das theoretische CAPM formuliert eine erwartete Renditeforderung für systematisches Risiko. Die Gleichung impliziert im passenden Gleichgewichtsmodell Alpha null; eine historische Regression ist eine empirische Schätzung mit Modell- und Stichprobenrisiko.',[['E[R_i],E[R_m]','Erwartete Asset- und Marktrendite für denselben Horizont.'],['R_f','Risikofreie Rendite für diesen Horizont.'],['\\beta_i','Systematisches Marktrisiko des Assets.']]),
  'Eine Prognose aus historischer Regression, eine historische Alpha-Schätzung und eine normative Renditeforderung sind unterschiedliche Aussagen. Ein Monatsalpha darf außerdem nicht gedankenlos als sicher verdienbare Jahres-Outperformance geometrisch hochgerechnet werden.'
 ]),
 S('risk-decomposition','11. Beta, Gesamtrisiko und Diversifikation verbinden','b d',[
  F('\\operatorname{Var}(Y)=\\beta_1^2\\operatorname{Var}(X)+\\operatorname{Var}(\\varepsilon)','Wenn X und Fehler unkorreliert sind, entfällt der Kreuzkovarianzterm. Die Varianz zerfällt in modellierten systematischen Anteil und Residualrisiko.',[['Y,X','Asset- bzw. Marktüberschussrendite im Einfaktormodell.'],['\\beta_1','Populationssteigung bzw. Beta.'],['\\varepsilon','Fehler mit Kovarianz null zu X.'],['\\operatorname{Var}','Populationsvarianz.']]),
  'Im Beispieldatensatz ist die Y-Stichprobenvarianz 26,5/4 = 6,625. Der erklärte Anteil beträgt 1,5² × (10/4) = 5,625. Die Residuenquadratsumme geteilt durch n−1 ergibt 4/4 = 1; zusammen genau 6,625.',
  'Der Fehler-Varianzschätzer für Inferenz ist dagegen SSE/(n−2) = 4/3. Wer 4/3 in die rein beschreibende Stichprobenzerlegung einsetzt, vermischt unterschiedliche Nenner und erhält keine exakte Identität.',
  'Zwei Anlagen können dasselbe Beta, aber sehr unterschiedliche Gesamtvolatilität besitzen, wenn ihr Residualrisiko verschieden ist. In einem breiten Portfolio kann voneinander hinreichend unabhängiges Residualrisiko diversifiziert werden; ein gemeinsamer ausgelassener Faktor verschwindet dadurch nicht automatisch.'
 ]),
 S('workflow','12. Ein Regressionsbericht muss außerhalb der Stichprobe standhalten','a b c d',[
  T(['Prüfschritt','Konkrete Anwendung'],[
   ['Zeit und Einheit festlegen','Gleiche Perioden, Währung und Renditekonvention; verfügbare Daten zum tatsächlichen Entscheidungszeitpunkt.'],
   ['Modell wirtschaftlich begründen','Warum sollte X mit Y zusammenhängen? Welche ausgelassenen Größen könnten beide treiben?'],
   ['Schätzung nachvollziehbar machen','Koeffizienten, Standardfehler, n, ANOVA und Residuenbilder gemeinsam berichten.'],
   ['Unsicherheit passend benennen','Mittelwertintervall und Einzelprognose trennen; unbekanntes künftiges X berücksichtigen.'],
   ['Außerhalb der Schätzstichprobe prüfen','Zeitlich spätere Daten, Transaktionskosten, Stabilität und angemessenen Vergleichsmaßstab verwenden.'],
   ['Grenzen dokumentieren','Extrapolation, Regimewechsel, Ausreißerempfindlichkeit und mögliche Datenüberanpassung offenhalten.']
  ],'Eine nachträglich gut passende Gleichung ist der Anfang einer Analyse, nicht ihr Qualitätsnachweis.'),
  'Die OLS-Rechnung lässt sich mit Tabellenkalkulation oder Statistiksoftware reproduzieren. Prüfe zuerst die kleine Handrechnung: Mittelwerte, Kreuzproduktsumme, Steigung und Residuenquadratsumme. Wenn Software andere Zahlen zeigt, kontrolliere Prozent- gegen Dezimalskalierung, fehlende Werte, Intercept und verwendete Zeitfenster, bevor du einen Rundungsfehler vermutest.'
 ])
],related:[{unit:'inference',section:'p-values',label:'Tests, p-Werte und Intervalle gemeinsam interpretieren'},{unit:'return-statistics',section:'covariance',label:'Kovarianz und Korrelation als Grundlage der Steigung'},{unit:'distributions',section:'lognormal',label:'Warum Exponentieren den Median statt des Mittels liefert'},{unit:'portfolio-math',section:'many-assets',label:'Diversifikation und gemeinsame Risikotreiber'}],
 sources:[
 {title:'CFA Institute: offizieller Level-I-Lernzielkatalog 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=3'},
 {title:'CFA Institute: Simple Linear Regression',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/simple-linear-regression'},
 {title:'NIST: Least Squares',url:'https://www.itl.nist.gov/div898/handbook/pmd/section4/pmd431.htm'},
 {title:'NIST: Uncertainty of a Single Response',url:'https://www.itl.nist.gov/div898/handbook/pmd/section5/pmd512.htm'},
 {title:'NIST: Regression Diagnostics',url:'https://itl.nist.gov/div898/software/dataplot/refman1/auxillar/regrdiag.htm'}
 ],review:{status:'draft',date:'2026-09-18',note:'Zusammenhängendes eigenes Rechenbeispiel von OLS bis CAPM; Nenner, Annahmen, Einheiten und Prognoseziele ausdrücklich getrennt.'}};
