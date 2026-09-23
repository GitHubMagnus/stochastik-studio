const {F,T,X,S,G}=require('../author.cjs');
const pdf=(x,mu,s)=>Math.exp(-.5*((x-mu)/s)**2)/(s*Math.sqrt(2*Math.PI));
module.exports={id:'inference',intro:[
 'Eine historische Durchschnittsrendite ist eine Beobachtung. Ob sie belastbare Information über einen zugrunde liegenden Mittelwert enthält, hängt von Stichprobenauswahl, Streuung, Beobachtungszahl und Modellannahmen ab. Inferenz macht diese Unsicherheit ausdrücklich zum Gegenstand der Rechnung.',
 'Wir gehen vom Datendesign über Schätzung und Konfidenzintervalle zur Testentscheidung. Die Beispiele zeigen bewusst ähnliche Ergebnisse mit unterschiedlichen Schlussfolgerungen: ein wirtschaftlich kleiner, aber präzise gemessener Effekt; ein großer, aber unsicherer Unterschied; und scheinbar überzeugende Befunde, die durch nachträgliche Auswahl entstanden sind.'
],sections:[
 S('sampling','1. Die Stichprobe muss zur Aussage passen','a',[
  T(['Verfahren','Vorgehen','Stärke und Grenze'],[
   ['Einfache Zufallsstichprobe','Elemente werden nach einer bekannten Zufallsregel aus dem Auswahlrahmen gezogen.','Ermöglicht wahrscheinlichkeitstheoretische Fehlerbeurteilung; ein unvollständiger Auswahlrahmen bleibt problematisch.'],
   ['Geschichtete Stichprobe','Die Population wird in Gruppen geteilt; innerhalb jeder Gruppe wird zufällig gezogen.','Sichert Repräsentation und kann Präzision erhöhen. Unterschiedliche Auswahlanteile verlangen passende Gewichte.'],
   ['Clusterstichprobe','Einige ganze natürliche Gruppen werden zufällig ausgewählt.','Kann Erhebungskosten sparen; ähnliche Elemente innerhalb einer Gruppe verringern die effektive unabhängige Information.'],
   ['Systematische Auswahl','Nach zufälligem Start wird beispielsweise jedes zehnte Element genommen.','Einfach umsetzbar; ein periodisches Muster in der Reihenfolge kann die Auswahl verzerren.'],
   ['Convenience/Judgment','Leicht verfügbare oder gezielt ausgewählte Fälle werden untersucht.','Kann eine sinnvolle Fallstudie sein, rechtfertigt aber nicht automatisch dieselben Zufallsschlüsse auf eine Population.']
  ],'Die Zahl der Datensätze allein entscheidet nicht über die Repräsentativität.'),
  X('Eine Branche nicht versehentlich übergewichten','Eine Population besteht zu 80 % aus kleinen und zu 20 % aus großen Unternehmen. In beiden Gruppen werden jeweils 50 Fälle untersucht; die Gruppenmittelwerte betragen 6 % und 10 %.',[
   'Das ungewichtete Stichprobenmittel ist 8 %, weil beide Gruppen gleich oft vorkommen. Das entspricht nicht ihrer Populationszusammensetzung.',
   F('\\hat\\mu=0{,}80\\cdot6\\%+0{,}20\\cdot10\\%=6{,}8\\%','Die Schichten werden mit ihren Populationsanteilen gewichtet, sofern die innerhalb jeder Schicht geschätzten Mittelwerte geeignet sind.',[['\\hat\\mu','Geschätzter Populationsmittelwert.']]),
   'Die Überstichprobe großer Unternehmen kann zur präziseren Analyse dieser Gruppe beabsichtigt sein. Für die Gesamtpopulation muss sie anschließend richtig gewichtet werden.'
  ],'Zufallsauswahl innerhalb einer verzerrt zusammengesetzten Teilmenge macht diese Teilmenge nicht automatisch repräsentativ.'),
  'In Finanzdaten sind Survivorship Bias, Look-ahead Bias und Selbstselektion besonders relevant. Bereits ausgeschiedene Fonds auszulassen, später veröffentlichte Bilanzdaten rückwirkend zu verwenden oder nur freiwillige Erfolgsberichte auszuwerten kann systematisch verzerren. Ein größeres n beseitigt solche Auswahlfehler nicht.'
 ]),
 S('estimators','2. Schätzer, Schätzwert und Stichprobenverteilung','a',[
  'Ein Schätzer ist eine Rechenregel vor der Datenerhebung. Ein Schätzwert ist ihr konkretes Ergebnis danach. Würde man das gleiche Erhebungsverfahren wiederholen, entstünden andere Werte; deren Verteilung heißt Stichprobenverteilung. Sie ist von der Verteilung einzelner Renditen zu unterscheiden.',
  F('E[\\bar X]=\\mu,\\qquad \\operatorname{Var}(\\bar X)=\\frac{\\sigma^2}{n},\\qquad SE(\\bar X)=\\frac{\\sigma}{\\sqrt n}','Für unabhängige identisch verteilte Beobachtungen mit endlicher Varianz ist der Stichprobenmittelwert unverzerrt. Seine Streuung sinkt mit der Wurzel der Stichprobengröße.',[['\\bar X','Zufälliger Stichprobenmittelwert.'],['\\mu,\\sigma^2,\\sigma','Populationsmittelwert, Varianz und Standardabweichung einzelner Beobachtungen.'],['n','Zahl unabhängiger Beobachtungen.'],['SE(\\bar X)','Standardfehler des Mittelwerts.']]),
  F('MSE(\\hat\\theta)=\\operatorname{Var}(\\hat\\theta)+\\operatorname{Bias}(\\hat\\theta)^2','Mittlerer quadratischer Schätzfehler enthält Zufallsschwankung und systematische Abweichung. Eine geringere Varianz allein ist daher nicht gleichbedeutend mit besserer Gesamtschätzung.',[['\\hat\\theta','Schätzer eines Parameters θ.'],['MSE','Erwarteter quadrierter Abstand zwischen Schätzer und wahrem Parameter.'],['\\operatorname{Bias}(\\hat\\theta)','E[θ̂] − θ, systematischer Schätzfehler.'],['\\operatorname{Var}(\\hat\\theta)','Varianz des Schätzers.']]),
  'Konsistenz bedeutet Annäherung an den wahren Parameter bei wachsender Stichprobe unter geeigneten Annahmen. Effizienz vergleicht die Streuung geeigneter Schätzer im gleichen Problem. Diese Begriffe sind keine Garantie, dass eine konkret realisierte Schätzung nahe am unbekannten Wert liegt.',
  'Bei Zeitabhängigkeit ist die einfache Standardfehlerformel nicht allgemein korrekt. Positive Autokorrelation kann beispielsweise die Information von 100 aufeinanderfolgenden Monatswerten gegenüber 100 unabhängigen Beobachtungen verringern.'
 ]),
 S('clt','3. Was der zentrale Grenzwertsatz normal werden lässt','a',[
  F('\\frac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\ \\xrightarrow{d}\\ N(0,1)','Für unabhängige identisch verteilte Beobachtungen mit endlicher positiver Varianz nähert sich die standardisierte Verteilung des Mittels der Standardnormalverteilung. Der Pfeil bezeichnet Konvergenz in Verteilung.',[['\\bar X','Stichprobenmittelwert.'],['\\mu,\\sigma','Populationsmittelwert und Standardabweichung.'],['n','Stichprobengröße, die im Grenzübergang wächst.'],['N(0,1)','Normalverteilung mit Mittelwert null und Varianz eins.'],['\\xrightarrow{d}','Konvergenz in Verteilung.']]),
  'Die ursprünglichen Daten werden dadurch nicht normalverteilt. Bei stark schiefen oder schweren Rändern kann die Annäherung langsam sein. Eine pauschale Regel „ab 30 immer exakt normal“ ist falsch. Bei normalverteilten Ausgangsdaten ist das Mittel dagegen bereits für jedes n normalverteilt.',
  G({id:'sampling-means',title:'Mehr Beobachtungen verengen die Verteilung des Mittels',
   caption:'Konstruierte unabhängige normalverteilte Einzelrenditen: Mittelwert 4 %, Standardabweichung 12 %. Gezeichnet werden die exakten Verteilungen der Mittelwerte bei n = 4, 16 und 64.',
   reading:'Das wahre Renditeniveau bleibt 4 %. Nur die Unsicherheit der Mittelwertschätzung sinkt: Standardfehler 6, 3 und 1,5 Prozentpunkte. Die Einzelrenditen bleiben mit 12 % genauso volatil.',
   plot:{x:[-14,22],y:[0,.29],xLabel:'Stichprobenmittelwert (%)',yLabel:'Dichte pro Prozentpunkt',series:[4,16,64].map(n=>({name:'n = '+n,points:Array.from({length:181},(_,i)=>{const x=-14+i*.2;return[x,pdf(x,4,12/Math.sqrt(n))];})}))}}),
  X('Für die halbe Unsicherheit viermal so viele Daten','Bei unverändertem Verfahren und unveränderter Streuung beträgt der Standardfehler für 25 unabhängige Beobachtungen 2 Prozentpunkte.',[
   'Für 100 Beobachtungen steigt √n von 5 auf 10: Der Standardfehler halbiert sich auf 1 Prozentpunkt.',
   'Eine bloße Verdopplung auf 50 reduziert ihn nur auf 2/√2 ≈ 1,414 Prozentpunkte.',
   'Mehr Daten aus einem nicht mehr vergleichbaren alten Marktregime können allerdings einen Bias hinzufügen. Präzision unter einem falschen Modell ist keine zusätzliche Wahrheit.'
  ],'Stichprobengröße, Modellstabilität und Abhängigkeit müssen zusammen beurteilt werden.')
 ]),
 S('intervals','4. Konfidenzintervalle konstruieren und richtig lesen','a b',[
  F('\\bar x\\pm z_{1-\\alpha/2}\\frac{\\sigma}{\\sqrt n}','Bei bekannter Populationsstreuung und normalem Mittel bzw. gerechtfertigter Normalapproximation wird die Fehlerspanne aus kritischem z-Wert und Standardfehler gebildet.',[['\\bar x','Beobachteter Stichprobenmittelwert.'],['z_{1-\\alpha/2}','Quantil der Standardnormalverteilung, für 95 % etwa 1,96.'],['\\alpha','Gesamte Nichtüberdeckungsrate, auf beide Enden verteilt.'],['\\sigma','Bekannte Populationsstandardabweichung.'],['n','Stichprobengröße.']]),
  F('\\bar x\\pm t_{1-\\alpha/2,n-1}\\frac{s}{\\sqrt n}','Bei unbekannter Streuung wird s geschätzt. Für unabhängige normale Daten verwendet das exakte Mittelwertintervall die t-Verteilung mit n−1 Freiheitsgraden.',[['\\bar x','Beobachteter Mittelwert.'],['s','Stichprobenstandardabweichung mit n−1-Nenner.'],['t_{1-\\alpha/2,n-1}','t-Quantil zum gewünschten Niveau und den angegebenen Freiheitsgraden.'],['\\alpha','Gesamte Nichtüberdeckungsrate.'],['n','Zahl der Beobachtungen.']]),
  X('Eine Renditeschätzung mit Fehlerspanne','25 unabhängige normalverteilte Monatsbeobachtungen haben mittlere Überschussrendite 1,2 % und Stichprobenstandardabweichung 2 %. Für 24 Freiheitsgrade sei das 97,5-%-t-Quantil 2,0639.',[
   F('SE=2\\%/\\sqrt{25}=0{,}4\\%,\\qquad I_{95\\%}=1{,}2\\%\\pm2{,}0639\\cdot0{,}4\\%=[0{,}3744\\%;2{,}0256\\%]','Das Intervall beschreibt den zugrunde liegenden Monatsmittelwert; es ist kein Intervall für eine einzelne zukünftige Monatsrendite.',[['SE','Geschätzter Standardfehler.'],['I_{95\\%}','Zweiseitiges 95-%-Konfidenzintervall für den Mittelwert.']]),
   'Unter wiederholter Anwendung des Verfahrens enthalten 95 % der so erzeugten Intervalle den festen wahren Parameter. Nach Beobachtung dieses einen Intervalls ist der Parameter darin oder nicht darin.',
   'Die frequentistische Aussage ist daher nicht automatisch „der feste unbekannte Parameter liegt mit 95 % Wahrscheinlichkeit in genau diesem Intervall“. Eine Wahrscheinlichkeitsaussage über den Parameter selbst benötigt ein anderes, beispielsweise bayesianisches Modell.',
   'Höhere Konfidenz verbreitert bei gleichen Daten das Intervall. Größeres n verengt es unter sonst gleichen Voraussetzungen.'
  ],'Intervallniveau, Zeitraum, Einheit und Zielparameter immer zusammen nennen.')
 ]),
 S('test-logic','5. Eine Testentscheidung vor Sichtung des Ergebnisses festlegen','b',[
  T(['Schritt','Konkrete Entscheidung'],[
   ['Parameter und Hypothesen','Geht es um einen Mittelwert, eine Differenz, Varianz, Korrelation oder kategoriale Unabhängigkeit?'],
   ['Richtung','Zweiseitig bei Abweichung in beide Richtungen; einseitig nur bei vorher begründeter Richtung.'],
   ['Niveau und Voraussetzungen','Fehler-I-Niveau festlegen und geeignete Stichproben-/Verteilungsannahmen prüfen.'],
   ['Statistik und Referenz','Berechneten Abstand durch passende Unsicherheit standardisieren und mit der Nullverteilung vergleichen.'],
   ['Schlussfolgerung','Verwerfen oder nicht verwerfen; Effektgröße, Intervall und wirtschaftliche Bedeutung ergänzen.']
  ],'Die Testwahl wird aus Frage und Datendesign abgeleitet, nicht nachträglich aus dem günstigsten p-Wert.'),
  F('H_0:\\mu=\\mu_0,\\qquad H_1:\\mu\\ne\\mu_0,\\qquad t=\\frac{\\bar x-\\mu_0}{s/\\sqrt n}','Der Mittelwerttest misst, wie viele geschätzte Standardfehler der beobachtete Mittelwert vom Nullwert entfernt liegt.',[['H_0,H_1','Null- und Alternativhypothese, hier zweiseitig.'],['\\mu,\\mu_0','Unbekannter Populationsmittelwert und behaupteter Nullwert.'],['t','Beobachtete Teststatistik; unter H₀ bei unabhängigen normalen Daten t-verteilt mit n−1 Freiheitsgraden.'],['\\bar x,s,n','Stichprobenmittelwert, Stichprobenstandardabweichung und Beobachtungszahl.']]),
  'Eine einseitige Prüfung auf einen höheren Mittelwert verwendet als Nullhypothese μ ≤ μ₀ und als Alternative μ > μ₀. Die kritische Verteilung wird am Rand μ = μ₀ bestimmt. Wer nach Ansicht eines positiven Ergebnisses von zwei Seiten auf eine Seite wechselt, verändert die ursprünglich kontrollierte Fehlerrate.'
 ]),
 S('p-values','6. p-Wert, kritischer Wert und Intervall gehören zusammen','b',[
  F('p=2P(T_{n-1}\\ge|t_{obs}|)\\quad\\text{(zweiseitig)}','Der p-Wert beschreibt unter der Nullhypothese und den Modellannahmen die Wahrscheinlichkeit einer mindestens so extremen Teststatistik. Beim symmetrischen t-Test werden beide Ränder berücksichtigt.',[['p','Zweiseitiger p-Wert.'],['T_{n-1}','Zufällige t-Statistik unter H₀ mit n−1 Freiheitsgraden.'],['t_{obs}','Beobachteter Wert der Statistik.'],['n','Stichprobengröße.']]),
  X('Dasselbe Beispiel als Test lesen','Monatsmittel 1,2 %, s = 2 %, n = 25. Prüfe H₀: μ = 0 gegen H₁: μ ≠ 0 bei 5 %. Kritischer Betrag 2,0639; der zweiseitige p-Wert bei t = 3 und 24 Freiheitsgraden beträgt rund 0,0062.',[
   F('t=\\frac{1{,}2\\%-0}{2\\%/5}=3','Der beobachtete Mittelwert liegt drei geschätzte Standardfehler oberhalb von null.',[['t','Beobachtete t-Statistik.']]),
   'Da 3 größer als 2,0639 ist, wird verworfen. Gleichwertig ist p ≈ 0,0062 kleiner als 0,05. Ebenso enthält das zugehörige zweiseitige 95-%-Intervall null nicht.',
   'Der p-Wert ist nicht die Wahrscheinlichkeit, dass H₀ wahr ist, nicht die Wahrscheinlichkeit eines zukünftigen Verlusts und nicht die Größe der Outperformance.',
   'Ein Nichtverwerfen würde bedeuten, dass die Daten auf diesem Niveau nicht genügend Evidenz gegen H₀ liefern. Es beweist weder μ = 0 noch ökonomische Gleichwertigkeit.'
  ],'Die Äquivalenz zwischen Intervall und Test gilt bei zueinander passenden Verfahren, Niveau und Seitenzahl.')
 ]),
 S('errors-power','7. Fehlerarten und Teststärke getrennt beurteilen','b',[
  T(['Wahrer Zustand','H₀ nicht verworfen','H₀ verworfen'],[
   ['H₀ gilt','Korrekte Nichtverwerfung.','Fehler I; Wahrscheinlichkeit durch α kontrolliert.'],
   ['Eine konkrete Alternative gilt','Fehler II; Wahrscheinlichkeit β für diese Alternative.','Treffer; Power = 1 − β.']
  ],'Power ist keine universelle Eigenschaft einer Stichprobe. Sie hängt unter anderem von Effektgröße, Streuung, n und Testregel ab.'),
  F('\\operatorname{Power}(\\delta)=1-\\Phi\\!\\left(z_{1-\\alpha}-\\frac{\\delta\\sqrt n}{\\sigma}\\right)','Für einen rechtsseitigen z-Test mit bekannter Streuung ist die Statistik unter einem wahren Mehrmittelwert δ nach rechts verschoben. Die Fläche rechts der festen Schwelle ist die Teststärke.',[['\\delta','Wahrer Unterschied μ − μ₀, hier positiv.'],['\\alpha,z_{1-\\alpha}','Fehler-I-Niveau und rechtsseitiges Standardnormalquantil.'],['n,\\sigma','Stichprobengröße und bekannte Populationsstandardabweichung.'],['\\Phi','Verteilungsfunktion der Standardnormalverteilung.'],['\\operatorname{Power}(\\delta)','Verwerfungswahrscheinlichkeit unter der angegebenen Alternative.']]),
  G({id:'power-overlap',title:'Eine Schwelle, zwei mögliche Verteilungen der Teststatistik',
   caption:'Rechtsseitiger z-Test mit α = 5 %. Unter H₀ ist Z standardnormal; unter der gewählten Alternative hat Z Mittelwert 2 und weiterhin Standardabweichung 1. Die Schwelle ist 1,64485.',
   reading:'Rechts der Schwelle liegen unter H₀ 5 % der Fläche. Unter der Alternative liegt dort rund 63,9 %: die Power. Die verbleibenden rund 36,1 % links davon sind Fehler II für genau diese Alternative.',
   plot:{x:[-4,6],y:[0,.43],xLabel:'Standardisierte Teststatistik Z',yLabel:'Wahrscheinlichkeitsdichte',series:[
    {name:'Nullhypothese: Mittelwert 0',points:Array.from({length:201},(_,i)=>{const x=-4+i/20;return[x,pdf(x,0,1)];})},
    {name:'Alternative: Mittelwert 2',points:Array.from({length:201},(_,i)=>{const x=-4+i/20;return[x,pdf(x,2,1)];})},
    {name:'Ablehnungsschwelle',points:[[1.644853626951,0],[1.644853626951,.42]],dash:'6 5'}
   ]}}),
  'Bei festem n und fester Alternative senkt ein strengeres α gewöhnlich die Power: Die Schwelle wandert nach außen. Mehr unabhängige Daten oder ein größerer wahrer Effekt erhöhen die Trennbarkeit. Die Wahrscheinlichkeit eines Fehlers II kann deshalb nicht allein aus α berechnet werden.'
 ]),
 S('paired','8. Verbundene Stichproben: die Differenzen testen','b c',[
  F('d_i=x_i-y_i,\\qquad t=\\frac{\\bar d-d_0}{s_d/\\sqrt n}','Bei zeitgleich gepaarten Fondsrenditen oder Vorher-Nachher-Daten sind die Differenzen die Beobachtungen. Ihre Streuung enthält die Beziehung zwischen den beiden Reihen bereits.',[['x_i,y_i','Zusammengehöriges Beobachtungspaar.'],['d_i,\\bar d,s_d','Paarweise Differenz, Differenzmittel und Stichprobenstandardabweichung der Differenzen.'],['d_0','Unter H₀ behaupteter Differenzmittelwert.'],['n,i','Zahl der Paare und Paarindex.'],['t','Paarteststatistik; bei unabhängigen normalen Differenzen unter H₀ t mit n−1 Freiheitsgraden.']]),
  X('Zwei Manager im selben Marktumfeld vergleichen','Fünf unabhängige gepaarte Perioden liefern Renditedifferenzen A minus B von 1, 2, 0, 3 und 4 Prozentpunkten. Normale Differenzen werden angenommen. H₀: mittlere Differenz null, zweiseitig 5 %; t-kritisch mit vier Freiheitsgraden 2,77645.',[
   'Das Differenzmittel beträgt 2. Die quadrierten Abstände sind 1, 0, 4, 1 und 4; Summe 10. Daraus folgen s_d² = 10/4 = 2,5 und s_d ≈ 1,5811.',
   F('t=\\frac2{\\sqrt{2{,}5}/\\sqrt5}=\\sqrt8\\approx2{,}8284','Der Standardfehler der mittleren Differenz beträgt rund 0,7071 Prozentpunkte.',[['t','Paarteststatistik.']]),
   '2,8284 liegt knapp oberhalb von 2,77645: H₀ wird auf 5 % verworfen. Die geringe Stichprobe und die Normalitätsannahme bleiben wichtig; Verwerfen macht den Befund nicht unangreifbar.',
   'Die beiden Fondsreihen als unabhängige Gruppen zu behandeln würde die Paarinformation wegwerfen. Für Zeitreihen muss zudem die Unabhängigkeit zwischen den Differenzperioden plausibel sein.'
  ],'Paare werden aus dem Erhebungsdesign erkannt, nicht daraus, ob beide Reihen zufällig gleich viele Werte haben.')
 ]),
 S('two-samples','9. Unabhängige Mittelwerte: Welch oder gepoolter t-Test','b c',[
  F('t_W=\\frac{(\\bar x_1-\\bar x_2)-d_0}{\\sqrt{s_1^2/n_1+s_2^2/n_2}}','Für zwei unabhängige Gruppen schätzt Welch die Unsicherheit beider Mittel getrennt. Eine Gleichheit der unbekannten Populationsvarianzen ist nicht erforderlich.',[['t_W','Welch-Teststatistik.'],['\\bar x_1,\\bar x_2','Gruppenmittelwerte.'],['s_1^2,s_2^2','Stichprobenvarianzen.'],['n_1,n_2','Gruppengrößen.'],['d_0','Unter H₀ behauptete Differenz.']]),
  F('\\nu\\approx\\frac{(s_1^2/n_1+s_2^2/n_2)^2}{(s_1^2/n_1)^2/(n_1-1)+(s_2^2/n_2)^2/(n_2-1)}','Die Welch-Satterthwaite-Näherung liefert die zur geschätzten Unsicherheit passenden Freiheitsgrade. Sie müssen nicht ganzzahlig sein.',[['\\nu','Näherungsweise Freiheitsgrade des Welch-Tests.'],['s_1^2,s_2^2','Stichprobenvarianzen.'],['n_1,n_2','Beobachtungszahlen beider unabhängiger Gruppen.']]),
  X('Zwei getrennte Unternehmensgruppen','Gruppe 1: n₁ = 16, mittlere Rendite 8 %, s₁ = 4 %. Gruppe 2: n₂ = 25, Mittel 5 %, s₂ = 5 %. Teste gleiche Populationsmittel zweiseitig. Geeignete unabhängige Normalmodelle werden angenommen.',[
   'Der Standardfehler der Differenz ist √(16/16 + 25/25) = √2 ≈ 1,4142 Prozentpunkte.',
   F('t_W=3/\\sqrt2\\approx2{,}1213,\\qquad \\nu=\\frac4{1/15+1/24}\\approx36{,}923','Beide Gruppen tragen hier denselben Anteil 1 zur quadrierten Standardunsicherheit bei, obwohl ihre Streuungen verschieden sind.',[['t_W','Welch-Statistik.'],['\\nu','Welch-Freiheitsgrade.']]),
   'Mit einem gegebenen 5-%-kritischen Betrag von rund 2,03 wird die Nullhypothese verworfen. Die positive geschätzte Differenz beträgt drei Prozentpunkte; diese Effektgröße ist zusätzlich zum Testurteil zu berichten.'
  ],'Unabhängige Gruppen benötigen einen anderen Standardfehler als gepaarte Daten.'),
  F('s_p^2=\\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2},\\qquad t_p=\\frac{(\\bar x_1-\\bar x_2)-d_0}{s_p\\sqrt{1/n_1+1/n_2}}','Bei zusätzlich begründeter gleicher Populationsvarianz kann eine gemeinsame Varianz gepoolt werden. Die Referenzfreiheitsgrade sind n₁+n₂−2.',[['s_p^2,s_p','Gepoolte Varianz und ihre Wurzel.'],['t_p','Gepoolte t-Statistik.'],['n_1,n_2,s_1^2,s_2^2','Gruppengrößen und Stichprobenvarianzen.'],['\\bar x_1,\\bar x_2,d_0','Beobachtete Gruppenmittel und behauptete Differenz.']]),
  'Die Annahme gleicher Varianzen folgt nicht daraus, dass beide Größen in Prozent gemessen werden. Welch und Pooling dürfen nicht nach dem erwünschten Signifikanzurteil ausgewählt werden. Bei kleinen stark nichtnormalen Stichproben sind robuste oder nichtparametrische Verfahren zu prüfen.'
 ]),
 S('variance-tests','10. Aussagen über Varianzen testen','b c',[
  F('\\chi^2=\\frac{(n-1)s^2}{\\sigma_0^2}\\sim\\chi^2_{n-1}\\quad(H_0)','Für unabhängige normalverteilte Beobachtungen kann eine behauptete Populationsvarianz mit einer Chi-Quadrat-Statistik geprüft werden. Die Referenzverteilung ist asymmetrisch.',[['\\chi^2','Teststatistik und rechts Referenzverteilungsfamilie.'],['n','Beobachtungszahl.'],['s^2','Stichprobenvarianz.'],['\\sigma_0^2','Unter H₀ behauptete Populationsvarianz.'],['H_0','Nullhypothese zur Varianz.']]),
  X('Ist die Volatilität höher als behauptet?','21 unabhängige normale Jahresbeobachtungen liefern s = 12 %. Prüfe H₀: σ² ≤ 0,10² gegen H₁: σ² > 0,10² bei 5 %. Die obere 5-%-Grenze für 20 Freiheitsgrade beträgt 31,4104.',[
   F('\\chi^2=20\\cdot0{,}12^2/0{,}10^2=28{,}8','Standardabweichungen werden quadriert, weil eine Varianzbehauptung getestet wird.',[['\\chi^2','Beobachtete Chi-Quadrat-Statistik.']]),
   '28,8 ist kleiner als 31,4104. Obwohl die gemessene Volatilität 12 % statt 10 % beträgt, wird die Nullhypothese auf diesem Niveau nicht verworfen.',
   'Der Befund beweist keine Volatilität unter 10 %. Er zeigt nur, dass die Stichprobe für diese Testregel nicht genügend Evidenz für die Überschreitung liefert.'
  ],'Bei einem zweiseitigen Varianztest sind zwei unterschiedlich weit liegende Grenzen zu verwenden. Normalitätsverletzungen können Varianztests stark beeinflussen.'),
  F('F=\\frac{s_1^2}{s_2^2}\\sim F_{n_1-1,n_2-1}\\quad(H_0:\\sigma_1^2=\\sigma_2^2)','Für zwei unabhängige normale Gruppen wird das Varianzverhältnis mit einer F-Verteilung verglichen. Die Freiheitsgrade folgen der Reihenfolge von Zähler und Nenner.',[['F','Varianzquotient und Referenzverteilungsfamilie.'],['s_1^2,s_2^2','Stichprobenvarianzen.'],['\\sigma_1^2,\\sigma_2^2','Populationsvarianzen.'],['n_1,n_2','Gruppengrößen.'],['H_0','Gleichheitshypothese.']]),
  'Bei s₁ = 20 % und s₂ = 10 % beträgt F = 4, nicht 2. Ein Vertauschen der Gruppen kehrt den Quotienten um und vertauscht zugleich die Freiheitsgrade und die passende Randwahrscheinlichkeit. Beim zweiseitigen Test darf die gesamte Fehlerrate nicht versehentlich zweimal verwendet werden.'
 ]),
 S('correlation-tests','11. Pearson und Spearman: welche Beziehung wird geprüft?','b c',[
  F('t=r\\sqrt{\\frac{n-2}{1-r^2}}\\sim t_{n-2}\\quad(H_0:\\rho=0)','Für unabhängige Paare aus einer gemeinsam normalen Verteilung prüft diese Statistik eine Populationskorrelation von null.',[['r','Beobachtete Pearson-Korrelation, hier Betrag kleiner als 1.'],['\\rho','Unbekannte Populationskorrelation.'],['n','Zahl der Beobachtungspaare.'],['t','Teststatistik mit n−2 Referenzfreiheitsgraden unter H₀.'],['H_0','Nullhypothese der Pearson-Korrelation null.']]),
  'Bei n = 18 und r = 0,5 ergibt sich t = 0,5√(16/0,75) ≈ 2,3094. Gegen den gegebenen zweiseitigen 5-%-kritischen Betrag 2,1199 wird verworfen. Das beweist keine Kausalität und erfasst unter anderem keine nichtlineare Beziehung mit Korrelation null.',
  F('r_s=1-\\frac{6\\sum_{i=1}^n d_i^2}{n(n^2-1)}\\quad\\text{(ohne Bindungen)}','Spearman berechnet die Pearson-Korrelation der Ränge. Die Kurzform gilt ohne Rangbindungen; bei Bindungen werden mittlere Ränge verwendet und deren Korrelation direkt berechnet.',[['r_s','Spearman-Rangkorrelation.'],['d_i','Differenz der beiden Ränge des Paars i.'],['n,i','Zahl der Paare und Index.']]),
  X('Monotone Ordnung statt linearer Abstände','X-Ränge: 1, 2, 3, 4, 5. Zugehörige Y-Ränge: 2, 1, 3, 5, 4.',[
   'Die Rangdifferenzen lauten −1, +1, 0, −1, +1; ihre Quadratsumme beträgt 4.',
   F('r_s=1-\\frac{6\\cdot4}{5(25-1)}=0{,}8','Die Rangordnung stimmt weitgehend überein, obwohl vier Paare vertauschte Nachbarränge enthalten.',[['r_s','Spearman-Rangkorrelation.']]),
   'Bei nur fünf Paaren sollte man keinen großen-Stichproben-p-Wert unkritisch verwenden. Unter H₀ der Unabhängigkeit von X und Y bei unabhängigen austauschbaren Beobachtungspaaren liefert das vollständige Durchgehen der 120 möglichen Y-Rangfolgen hier zweiseitig 16/120 ≈ 0,1333.',
   'Trotz Rangkorrelation 0,8 wird deshalb auf 5 % nicht verworfen. Ein hoher Punktschätzer bei kleiner Stichprobe ist noch kein präziser Nachweis.'
  ],'Spearman ist für monotone Beziehungen und ordinale Daten nützlich. „Nichtparametrisch“ bedeutet trotzdem nicht voraussetzungslos.')
 ]),
 S('rank-tests','12. Vorzeichen- und Rangtests selbst konstruieren','c',[
  T(['Frage und Daten','Geeignetes Verfahren','Was zusätzlich zu beachten ist'],[
   ['Unabhängige ordinale Gruppen','Mann-Whitney / Wilcoxon Rank Sum.','Prüft Rang-/Verteilungsunterschiede. Eine reine Medianinterpretation benötigt zusätzliche Formannahmen.'],
   ['Gepaarte Differenzen, Vorzeichen aussagekräftig','Vorzeichentest.','Benötigt passende Unabhängigkeit und eine Nullhypothese zur Wahrscheinlichkeit positiver Differenzen; Null-Differenzen gesondert behandeln.'],
   ['Gepaarte stetige Differenzen mit symmetrischer Verteilung','Wilcoxon Signed Rank.','Nutzt Ränge absoluter Differenzen mit Vorzeichen. Symmetrie ist für die übliche Lageinterpretation wichtig.']
  ],'Rank Sum und Signed Rank sind verschiedene Tests: unabhängige Gruppen gegenüber verbundenen Differenzen.'),
  F('U_A=R_A-\\frac{n_A(n_A+1)}2,\\qquad U_B=n_An_B-U_A','Die Rangsumme einer Gruppe wird um ihren kleinsten möglichen Wert bereinigt. Die Richtung der U-Konvention muss bei Softwarevergleichen beachtet werden.',[['U_A,U_B','Komplementäre Mann-Whitney-Statistiken.'],['R_A','Summe der gemeinsamen aufsteigenden Ränge der Gruppe A.'],['n_A,n_B','Zahl der Beobachtungen beider unabhängiger Gruppen.']]),
  X('Perfekte Trennung, trotzdem wenig Daten','A enthält 1, 2, 3; B enthält 4, 5, 6. Keine Bindungen. Unter H₀ sind alle Zuordnungen von drei der sechs Ränge zu A gleich wahrscheinlich.',[
   'A hat Rangsumme 6 und U_A = 6 − 3 × 4/2 = 0. B hat U_B = 9.',
   'Es gibt 20 mögliche Zuordnungen. Nur eine liefert A vollständig unter B, nur eine vollständig darüber. Der exakte zweiseitige p-Wert für diese extreme Beobachtung beträgt 2/20 = 0,10.',
   'Auf 5 % wird trotz vollständiger Trennung nicht verworfen. Das ist kein Fehler des Tests: Eine sehr kleine Stichprobe liefert nur wenige mögliche Rangkonstellationen.'
  ],'Exakte kleine-Stichproben-Verfahren können andere Entscheidungen ergeben als eine unpassende Normalapproximation.'),
  F('K\\sim\\operatorname{Bin}(n,0{,}5)\\quad(H_0)','Für unabhängige nicht nullwertige Differenzen zählt der einfache Vorzeichentest die positiven Vorzeichen. Unter einer geeigneten Nullhypothese sind beide Vorzeichen gleich wahrscheinlich.',[['K','Anzahl positiver Differenzen.'],['n','Zahl verwendeter nicht nullwertiger Differenzen.'],['\\operatorname{Bin}(n,0{,}5)','Binomialverteilung mit n Versuchen und Wahrscheinlichkeit 0,5.'],['H_0','Nullhypothese gleicher Vorzeichenwahrscheinlichkeit.']]),
  'Sind alle sechs unabhängigen Differenzen positiv, beträgt der exakte zweiseitige Vorzeichen-p-Wert 2 × 0,5⁶ = 0,03125. Beim Signed-Rank-Test ordnet man zusätzlich die sechs absoluten Differenzen: ohne Bindungen summieren sich die positiven Ränge hier zu 21 und die negativen zu null. In dieser Extremkonstellation stimmen die zweiseitigen p-Werte überein; das gilt nicht generell.'
 ]),
 S('contingency','13. Kategoriale Unabhängigkeit mit Häufigkeiten prüfen','b c',[
  F('E_{ij}=\\frac{O_{i+}O_{+j}}N,\\qquad \\chi^2=\\sum_{i=1}^r\\sum_{j=1}^c\\frac{(O_{ij}-E_{ij})^2}{E_{ij}},\\qquad df=(r-1)(c-1)','Unter Unabhängigkeit zerfallen die Zellanteile in Zeilen- und Spaltenanteile. Die Statistik misst, wie stark beobachtete Häufigkeiten von diesen erwarteten Häufigkeiten abweichen.',[['O_{ij},E_{ij}','Beobachtete bzw. unter H₀ erwartete Anzahl in Zelle i,j.'],['O_{i+},O_{+j}','Zeilen- und Spaltensumme.'],['N','Gesamtzahl unabhängiger Fälle.'],['r,c,i,j','Zahl der Zeilen/Spalten und Zellindizes.'],['\\chi^2,df','Chi-Quadrat-Teststatistik und Referenzfreiheitsgrade.']]),
  X('Strategiekategorie und Erfolg sind nicht automatisch unabhängig','Kategorie A: 30 Erfolge und 20 Misserfolge. Kategorie B: 10 Erfolge und 40 Misserfolge. Jeder der 100 Fälle gehört genau einer Zelle. Gegebene 5-%-kritische Grenze bei einem Freiheitsgrad: 3,8415.',[
   'Beide Zeilensummen sind 50; die Spaltensummen sind 40 und 60. Unter Unabhängigkeit erwartet man in jeder Zeile 20 Erfolge und 30 Misserfolge.',
   F('\\chi^2=\\frac{100}{20}+\\frac{100}{30}+\\frac{100}{20}+\\frac{100}{30}\\approx16{,}6667','Jede beobachtete Häufigkeit liegt hier zehn Fälle vom Erwartungswert entfernt; quadriert ergibt das 100.',[['\\chi^2','Teststatistik für die 2×2-Tabelle.']]),
   '16,6667 ist größer als 3,8415: Unabhängigkeit wird verworfen. Die Erfolgsquoten von 60 % und 20 % beschreiben Richtung und Größenordnung des beobachteten Unterschieds.',
   'Das beweist keine kausale Wirkung der Kategorie. Andere Merkmale können beide Gruppen unterscheiden. Außerdem darf man Prozentwerte nicht anstelle der zugrunde liegenden Fallzahlen in die Testformel einsetzen.'
  ],'Bei kleinen erwarteten Zellhäufigkeiten kann die asymptotische Chi-Quadrat-Näherung unzuverlässig sein; geeignete exakte Verfahren oder eine begründete Kategorienplanung sind dann zu prüfen.')
 ]),
 S('interpretation','14. Signifikanz in eine vernünftige Anlagebeurteilung übersetzen','a b c',[
  X('Ein sehr kleiner Effekt kann statistisch klar sein','Eine geschätzte zusätzliche Rendite beträgt 0,02 % pro Periode, der Standardfehler 0,005 %. Die Anwendung würde Kosten von 0,05 % pro Periode verursachen.',[
   'Die standardisierte Abweichung von null beträgt 4. Unter einer passenden Referenzverteilung kann das hoch signifikant sein.',
   'Ökonomisch bleibt vor weiteren Risiken eine geschätzte Nettowirkung von −0,03 % pro Periode. Statistische Evidenz für einen positiven Bruttoeffekt ist kein Beleg für einen lohnenden Handel.',
   'Umgekehrt kann ein potenziell wertvoller Effekt bei wenigen Beobachtungen unpräzise sein. „Nicht signifikant“ ist weder „kein Effekt“ noch „sicher harmlos“.'
  ],'Berichte Effekt, Unsicherheit, Annahmen und praktische Kosten gemeinsam.'),
  F('P(\\text{mindestens ein Fehler I})=1-(1-\\alpha)^m','Wenn m voneinander unabhängige Tests jeweils eine wahre Nullhypothese mit Fehlerwahrscheinlichkeit α prüfen, steigt die Chance mindestens eines falschen Alarms. Bei abhängigen Tests gilt diese einfache Produktrechnung nicht exakt.',[['m','Zahl der unabhängigen Tests wahrer Nullhypothesen.'],['\\alpha','Fehler-I-Wahrscheinlichkeit jedes einzelnen Tests.'],['P(\\cdot)','Wahrscheinlichkeit über wiederholte Datensätze.']]),
  'Bei 20 unabhängigen Tests mit 5 % Niveau beträgt diese Wahrscheinlichkeit rund 64,15 %. Nur den besten Backtest zu zeigen ignoriert die Auswahl aus vielen Versuchen. Vorab festgelegte Hypothesen, getrennte Validierungsdaten, vollständige Dokumentation und geeignete Mehrfachtestkorrekturen begrenzen dieses Problem.',
  'Nichtparametrische Tests sind hilfreich, wenn Ranginformation belastbarer ist als ein parametrisches Verteilungsmodell. Sie testen jedoch gegebenenfalls einen anderen Zielparameter und können bei tatsächlich passenden parametrischen Annahmen Information verlieren. Die Wahl wird deshalb durch die Frage und Voraussetzungen bestimmt, nicht durch das Etikett „robust“ allein.'
 ])
],related:[{unit:'return-statistics',section:'degrees-freedom',label:'Streuung einzelner Beobachtungen von Schätzunsicherheit trennen'},{unit:'distributions',section:'normal',label:'Normalverteilung und Quantile berechnen'},{unit:'distributions',section:'bayes',label:'Posterior-Wahrscheinlichkeit von einem p-Wert unterscheiden'},{unit:'standard-v',section:'basis',label:'Statistische Evidenz als Teil einer tragfähigen Analysegrundlage'}],
 sources:[
 {title:'CFA Institute: Estimation and Inference',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/estimation-and-inference'},
 {title:'CFA Institute: Hypothesis Testing',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/hypothesis-testing'},
 {title:'NIST: Confidence Limits for the Mean',url:'https://itl.nist.gov/div898/handbook/eda/section3/eda352.htm'},
 {title:'NIST: Two-Sample t-Test',url:'https://www.itl.nist.gov/div898/handbook/eda/section3/eda353.htm'},
 {title:'NIST: Rank Sum Test',url:'https://www.itl.nist.gov/div898/software/dataplot/refman1/auxillar/ranksum.htm'},
 {title:'NIST: Rank Correlation Independence Test',url:'https://itl.nist.gov/div898/software/dataplot/refman1/auxillar/rankcorr.htm'},
 {title:'NIST: Chi-Square Independence Test',url:'https://itl.nist.gov/div898/software/dataplot/refman1/auxillar/chistest.htm'}
 ],review:{status:'draft',date:'2026-09-18',note:'Eigene vollständige Testbeispiele und bewusste Gegenvergleiche. Parametrische, gepaarte, rangbasierte und kategoriale Fragestellungen getrennt.'}};
