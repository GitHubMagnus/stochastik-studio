const {F,T,X,S,G}=require('../author.cjs');
module.exports={id:'distributions',intro:[
 'Eine Verteilung beschreibt mögliche Ergebnisse und ihre Wahrscheinlichkeiten. Sie kann aus ausdrücklich vorgegebenen Szenarien bestehen oder durch ein Modell wie die Normal- oder Lognormalverteilung beschrieben werden. Das Modell ist eine überprüfbare Annahme über die Unsicherheit, keine Naturgarantie.',
 'Unbedingte Größen mitteln über die gesamte angenommene Situation. Bedingte Größen beziehen sich auf eine bestimmte Information, etwa eine Rezession oder ein neues Analysesignal. Bayes erklärt, wie eine solche Information Wahrscheinlichkeiten verändert, ohne Grundhäufigkeiten zu ignorieren.'
],sections:[
 S('probabilities','1. Ereignisse, gemeinsame und bedingte Wahrscheinlichkeit','a c d',[
  F('P(A\\cup B)=P(A)+P(B)-P(A\\cap B),\\qquad P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}','Bei der Vereinigung wird die Überschneidung einmal abgezogen, weil sie sonst doppelt zählt. Bedingung auf B beschränkt die betrachtete Grundgesamtheit auf Fälle, in denen B gilt.',[['P(\\cdot)','Wahrscheinlichkeit zwischen 0 und 1.'],['A,B','Ereignisse; für die bedingte Wahrscheinlichkeit gilt P(B) > 0.'],['\\cup,\\cap','Vereinigung („mindestens eines“) bzw. Schnitt („beide“).'],['\\mid','„Unter der Bedingung, dass“.']]),
  F('P(A\\cap B)=P(A\\mid B)P(B)','Ein gemeinsamer Pfad entsteht aus der Wahrscheinlichkeit des ersten Astes und der passenden bedingten Wahrscheinlichkeit des nächsten Astes.',[['P(A\\cap B)','Wahrscheinlichkeit, dass beide Ereignisse eintreten.'],['P(A\\mid B)','Wahrscheinlichkeit von A unter B.'],['P(B)','Wahrscheinlichkeit von B.']]),
  'Unabhängigkeit bedeutet, dass die Information B die Wahrscheinlichkeit von A nicht verändert. Sich gegenseitig ausschließende Ereignisse mit positiven Wahrscheinlichkeiten sind dagegen abhängig: Ist eines eingetreten, ist das andere unmöglich. Diese Begriffe dürfen nicht verwechselt werden.',
  X('Bedingt ist nicht die umgekehrte Bedingung','30 % der Unternehmen einer Modellgruppe sind hoch verschuldet. Unter diesen beträgt die Ausfallwahrscheinlichkeit 10 %.',[
   'Die gemeinsame Wahrscheinlichkeit „hoch verschuldet und Ausfall“ beträgt 0,30 × 0,10 = 3 %.',
   'Daraus folgt noch nicht, dass 10 % der ausgefallenen Unternehmen hoch verschuldet sind. Dafür braucht man zusätzlich die Ausfälle unter den übrigen Unternehmen.',
   'Das Multiplizieren zweier unbedingter Wahrscheinlichkeiten wäre nur bei geeigneter Unabhängigkeit richtig. Hier wurde gerade eine bedingte Rate gegeben.'
  ],'Bei jedem Prozentsatz zuerst fragen: Prozent von welcher Gruppe?')
 ]),
 S('moments','2. Unbedingte Momente aus einer Szenariotabelle','a',[
  F('\\mu_X=E[X]=\\sum_s p_sx_s,\\qquad \\sigma_X^2=\\sum_s p_s(x_s-\\mu_X)^2=E[X^2]-\\mu_X^2','Bei einer vollständig angegebenen diskreten Verteilung sind die Wahrscheinlichkeiten die Gewichte. Es gibt keine n−1-Korrektur, weil hier keine unbekannte Varianz aus einer Stichprobe geschätzt wird.',[['X,x_s','Zufallsvariable und ihr Wert in Szenario s.'],['p_s','Szenariowahrscheinlichkeit, nicht negativ und insgesamt Summe 1.'],['\\mu_X,\\sigma_X^2','Unbedingter Erwartungswert und Varianz.'],['E[X^2]','Erwartungswert der quadrierten Werte, nicht Quadrat des Erwartungswerts.'],['s','Szenarioindex.']]),
  X('Drei Renditeszenarien','Eine einjährige Rendite beträgt −10 % mit 20 %, +5 % mit 50 % und +20 % mit 30 % Wahrscheinlichkeit.',[
   F('\\mu_R=0{,}2(-0{,}10)+0{,}5(0{,}05)+0{,}3(0{,}20)=0{,}065','Die gewichteten Beiträge sind −2, +2,5 und +6 Prozentpunkte.',[['\\mu_R','Erwartete Jahresrendite, hier 6,5 %.']]),
   F('E[R^2]=0{,}2(0{,}10)^2+0{,}5(0{,}05)^2+0{,}3(0{,}20)^2=0{,}01525','Auch das negative Szenario liefert nach Quadrieren einen positiven Beitrag.',[['E[R^2]','Zweites Rohmoment der Dezimalrendite.']]),
   F('\\sigma_R^2=0{,}01525-0{,}065^2=0{,}011025,\\qquad \\sigma_R=0{,}105=10{,}5\\%','Erst das Quadrat des Mittelwerts abziehen, danach für die Standardabweichung die Wurzel ziehen.',[['\\sigma_R^2,\\sigma_R','Varianz und Standardabweichung der Rendite.']]),
   'Die erwarteten 6,5 % sind keiner der drei möglichen Ausgänge. Eine Standardabweichung von 10,5 % bedeutet außerdem nicht, dass der Verlust im schlechten Szenario exakt 10,5 % beträgt.'
  ],'Ein Mittelwert verdichtet die Verteilung. Für ein konkretes Verlustrisiko muss das passende Ereignis in der Verteilung betrachtet werden.')
 ]),
 S('joint','3. Gemeinsame Verteilung und Kovarianz','a c',[
  F('\\operatorname{Cov}(X,Y)=\\sum_s p_s(x_s-\\mu_X)(y_s-\\mu_Y)=E[XY]-\\mu_X\\mu_Y','Jedes Szenario enthält zusammengehörige Werte beider Größen. Die gemeinsame Verteilung entscheidet, welche Kombinationen auftreten können.',[['X,Y','Zufallsgrößen, beispielsweise zwei gleichperiodige Renditen.'],['x_s,y_s,p_s','Gemeinsame Szenariowerte und Wahrscheinlichkeit.'],['\\mu_X,\\mu_Y','Unbedingte Mittelwerte.'],['E[XY]','Erwartungswert des Produkts.'],['\\operatorname{Cov}(X,Y)','Kovarianz in X-Einheiten mal Y-Einheiten.'],['s','Index aller gemeinsamen Szenarien.']]),
  T(['X-Rendite / Y-Rendite','Y = −20 %','Y = 0 %','Y = +20 %','Zeilensumme'],[
   ['X = −10 %','25 %','25 %','0 %','50 %'],
   ['X = +10 %','0 %','25 %','25 %','50 %'],
   ['Spaltensumme','25 %','50 %','25 %','100 %']
  ],'Gemeinsame Wahrscheinlichkeiten. Zeilen- und Spaltensummen sind die jeweiligen Randwahrscheinlichkeiten.'),
  X('Die Randverteilungen reichen für gemeinsames Risiko nicht','Verwende die vorstehende Tabelle.',[
   'Beide Erwartungswerte sind null. X hat Varianz 0,01; Y hat Varianz 0,25 × 0,04 + 0,25 × 0,04 = 0,02.',
   F('E[XY]=0{,}25(-0{,}10)(-0{,}20)+0{,}25(0{,}10)(0{,}20)=0{,}01','Die beiden Szenarien mit Y = 0 tragen nichts zum Produkt bei.',[['E[XY]','Erwartetes Produkt, hier zugleich Kovarianz wegen beider Mittelwerte null.']]),
   'Die Korrelation beträgt 0,01/(0,1 × √0,02) ≈ 0,7071. Die Anlagen sind positiv verbunden.',
   'Wären dieselben Randverteilungen unabhängig gekoppelt, wäre jede Zellenwahrscheinlichkeit das Produkt ihrer Randsummen und die Kovarianz null. Gleiche Einzelverteilungen erzwingen somit keine bestimmte Portfoliovarianz.'
  ],'Für Diversifikation braucht man eine gemeinsame Verteilung oder eine konsistente Kovarianzstruktur, nicht nur Einzelrisiken.')
 ]),
 S('conditioning','4. Bedingte Momente neu normieren','c',[
  F('E[Y\\mid A]=\\sum_s P(s\\mid A)y_s,\\qquad \\operatorname{Var}(Y\\mid A)=\\sum_s P(s\\mid A)(y_s-E[Y\\mid A])^2','Nach Beobachtung von A werden nur noch damit vereinbare Szenarien betrachtet. Ihre bedingten Wahrscheinlichkeiten müssen erneut eins ergeben.',[['A','Beobachtetes Ereignis mit positiver Wahrscheinlichkeit.'],['Y,y_s','Zufallsgröße und Szenariowert.'],['P(s\\mid A)','Bedingte Szenariowahrscheinlichkeit nach Information A.'],['E[Y\\mid A]','Bedingter Mittelwert.'],['\\operatorname{Var}(Y\\mid A)','Varianz um diesen bedingten Mittelwert.'],['s','Index der verbleibenden Szenarien.']]),
  X('Information über X verändert die Verteilung von Y','In der gemeinsamen Tabelle ist bekannt geworden, dass X = +10 % gilt.',[
   'Die passende Zeile hat Gesamtwahrscheinlichkeit 50 %. Die beiden möglichen Y-Werte 0 % und +20 % hatten jeweils 25 % gemeinsame Wahrscheinlichkeit; bedingt haben sie deshalb jeweils 25/50 = 50 %.',
   'Der bedingte Mittelwert von Y ist nun +10 %. Die beiden Abstände hiervon sind −10 und +10 Prozentpunkte; bedingte Varianz 0,01, Standardabweichung 10 %.',
   'Vor der Information waren Mittelwert null und Standardabweichung rund 14,142 %. Information hat hier sowohl die Lage als auch die verbleibende Unsicherheit geändert.',
   'Würde man mit den ursprünglichen 25-%-Gewichten weiterrechnen, käme man fälschlich auf 5 % bedingten Mittelwert; die Gewichte würden nur 50 % ergeben.'
  ],'Bei bedingter Varianz nicht um den alten unbedingten Mittelwert streuen. Die neue Information definiert eine neue Bezugssituation.'),
  F('\\operatorname{Cov}(X,Y\\mid A)=E[XY\\mid A]-E[X\\mid A]E[Y\\mid A]','Die Kovarianzidentität gilt auch innerhalb einer Bedingung. Alle drei Erwartungen müssen dieselbe Information A verwenden.',[['X,Y','Zufallsgrößen.'],['A','Bedingung mit positiver Wahrscheinlichkeit.'],['E[\\cdot\\mid A]','Erwartungswert bedingt auf A.'],['\\operatorname{Cov}(X,Y\\mid A)','Bedingte Kovarianz.']])
 ]),
 S('total-risk','5. Unsicherheit innerhalb und zwischen Regimen','a c',[
  F('E[X]=E[E[X\\mid Z]],\\qquad \\operatorname{Var}(X)=E[\\operatorname{Var}(X\\mid Z)]+\\operatorname{Var}(E[X\\mid Z])','Die Gesamtvarianz enthält durchschnittliche Unsicherheit innerhalb eines Zustands und die Unsicherheit darüber, welcher Zustandsmittelwert gilt.',[['X','Untersuchte Rendite oder Zahlung.'],['Z','Zustandsvariable, etwa Konjunkturregime.'],['E[\\cdot],\\operatorname{Var}(\\cdot)','Unbedingter Erwartungswert und Varianz.'],['\\mid Z','Bedingung auf den jeweiligen Zustand.']]),
  X('Eine hohe Sicherheit innerhalb eines Szenarios beseitigt das Szenariorisiko nicht','Für Y aus der gemeinsamen Tabelle sind die beiden X-Zeilen jeweils mit 50 % möglich. Innerhalb jeder Zeile beträgt die Varianz von Y 0,01; die bedingten Mittelwerte sind −10 % bzw. +10 %.',[
   'Die durchschnittliche bedingte Varianz beträgt 0,01. Die Varianz der beiden bedingten Mittelwerte um null beträgt ebenfalls 0,01.',
   'Damit ist die Gesamtvarianz 0,02. Wer nur die innerhalb der Zeilen geschätzten Varianzen mittelt, unterschätzt das Gesamtrisiko um die Hälfte.',
   'Selbst bei völlig sicheren Werten innerhalb jedes Regimes könnte unbedingtes Risiko verbleiben, wenn die Regime unterschiedliche Werte liefern.'
  ],'Szenarioanalyse muss sowohl das Risiko innerhalb eines Szenarios als auch die Unsicherheit der Szenarioauswahl berücksichtigen.'),
  F('\\operatorname{Cov}(X,Y)=E[\\operatorname{Cov}(X,Y\\mid Z)]+\\operatorname{Cov}(E[X\\mid Z],E[Y\\mid Z])','Die gleiche Zerlegung gilt für gemeinsame Risiken. Gemeinsame Veränderungen der bedingten Mittelwerte können eine starke unbedingte Kovarianz erzeugen.',[['X,Y','Zwei Renditen.'],['Z','Gemeinsamer Zustand.'],['E[\\cdot\\mid Z]','Zustandsabhängige Mittelwerte.'],['\\operatorname{Cov}(X,Y\\mid Z)','Kovarianz innerhalb des jeweiligen Zustands.'],['E[\\cdot],\\operatorname{Cov}(\\cdot,\\cdot)','Unbedingtes Mittel bzw. Kovarianz.']]),
  X('Gemeinsame Konjunktur verstärkt die Verbindung','Guter Zustand mit 60 %: Mittelwerte X = 10 %, Y = 8 %, bedingte Kovarianz 0,001. Schlechter Zustand mit 40 %: Mittelwerte X = −5 %, Y = −2 %, bedingte Kovarianz 0,002.',[
   'Beide unbedingten Mittelwerte betragen 4 %. Der mittlere Kovarianzbeitrag innerhalb der Regime ist 0,6 × 0,001 + 0,4 × 0,002 = 0,0014.',
   'Die Kovarianz der bedingten Mittelwerte beträgt 0,6 × 0,06 × 0,04 + 0,4 × (−0,09) × (−0,06) = 0,0036.',
   'Die Gesamt-Kovarianz ist 0,005. Der größere Teil entsteht hier durch den gemeinsamen Regimewechsel, obwohl beide bedingten Kovarianzen deutlich kleiner sind.'
  ],'Eine durchschnittliche Korrelation innerhalb ruhiger Marktphasen kann die unbedingte Beziehung über unterschiedliche Regime hinweg unvollständig erfassen.')
 ]),
 S('discrete','6. Bernoulli und Binomial: Ereignisse zählen','b',[
  F('X\\sim\\operatorname{Bernoulli}(p),\\qquad E[X]=p,\\qquad \\operatorname{Var}(X)=p(1-p)','Ein Indikator ist eins bei Eintritt und null sonst. Weil X² = X gilt, folgt die Varianz unmittelbar aus E[X²] − E[X]².',[['X','Indikator eines Ereignisses.'],['p','Eintrittswahrscheinlichkeit zwischen 0 und 1.'],['E[X],\\operatorname{Var}(X)','Erwartungswert und Varianz.'],['\\sim','„Ist verteilt nach“.']]),
  F('N=\\sum_{i=1}^n X_i,\\qquad P(N=k)=\\binom nk p^k(1-p)^{n-k},\\qquad E[N]=np,\\qquad \\operatorname{Var}(N)=np(1-p)','Die Binomialverteilung zählt Erfolge in n unabhängigen Versuchen mit gleicher Eintrittswahrscheinlichkeit. Der Binomialkoeffizient zählt die möglichen Positionen der k Erfolge.',[['N','Anzahl der eingetretenen Ereignisse.'],['X_i','Unabhängige Bernoulli-Indikatoren.'],['n','Feste Zahl von Versuchen.'],['p','Gemeinsame Eintrittswahrscheinlichkeit.'],['k','Mögliche Ereigniszahl von 0 bis n.'],['\\binom nk','Anzahl der Kombinationen: n!/[k!(n−k)!].'],['i','Versuchsindex.']]),
  X('Zwei Ausfälle unter fünf Modellkrediten','Fünf Kredite fallen jeweils unabhängig mit 10 % Wahrscheinlichkeit innerhalb eines Jahres aus.',[
   F('P(N=2)=\\binom52 0{,}1^2 0{,}9^3=0{,}0729','Es gibt zehn Möglichkeiten, welche zwei Kredite ausfallen; jede konkrete Kombination hat Wahrscheinlichkeit 0,1² × 0,9³.',[['N','Ausfallzahl unter den fünf Krediten.'],['P(N=2)','Wahrscheinlichkeit genau zweier Ausfälle, hier 7,29 %.']]),
   'Die erwartete Zahl beträgt 0,5, die Varianz 0,45. Ein halber erwarteter Ausfall bedeutet nicht, dass ein einzelner Kredit zur Hälfte ausfällt.',
   'Gemeinsame Konjunkturrisiken verletzen häufig die Unabhängigkeit. Bei positiver Ausfallabhängigkeit können Häufungen wahrscheinlicher sein als im einfachen Binomialmodell.'
  ],'Die Binomialformel ist nur so passend wie ihre feste Versuchszahl, gleiche Einzelwahrscheinlichkeit und Unabhängigkeit.')
 ]),
 S('continuous','7. Stetige Dichte und Gleichverteilung','b',[
  F('P(a<X\\le b)=\\int_a^b f_X(x)\\,dx=F_X(b)-F_X(a)','Bei einer stetigen Verteilung ist eine Intervallwahrscheinlichkeit eine Fläche. Die Dichte an einem Punkt ist keine Punktwahrscheinlichkeit und kann auch größer als eins sein.',[['f_X(x)','Wahrscheinlichkeitsdichte an der Stelle x.'],['F_X(x)','Verteilungsfunktion P(X ≤ x).'],['a,b','Untere und obere Intervallgrenze, a < b.'],['x,dx','Integrationsvariable und ihr Differenzial.'],['X','Stetige Zufallsgröße.']]),
  F('X\\sim U(a,b),\\qquad f_X(x)=\\frac1{b-a}\\ (a\\le x\\le b),\\qquad E[X]=\\frac{a+b}2,\\qquad \\operatorname{Var}(X)=\\frac{(b-a)^2}{12}','Die stetige Gleichverteilung verteilt Wahrscheinlichkeit gleichmäßig über Intervalllängen. Außerhalb des angegebenen Intervalls ist die Dichte null.',[['X','Gleichverteilte stetige Größe.'],['U(a,b)','Gleichverteilung mit a < b.'],['a,b','Endpunkte des Wertebereichs.'],['f_X(x)','Dichte an einem inneren Punkt.'],['E[X],\\operatorname{Var}(X)','Mittelwert und Varianz.']]),
  X('Gleich wahrscheinlich bedeutet gleiche Intervalllänge','Eine Modellrendite ist gleichverteilt zwischen −4 % und +8 %.',[
   'Ihr Mittelwert ist 2 %. Eine positive Rendite liegt im Intervall von 0 bis 8 %, also auf 8 von insgesamt 12 Prozentpunkten: Wahrscheinlichkeit 2/3.',
   'Die Varianz in Dezimalrenditen beträgt 0,12²/12 = 0,0012; die Standardabweichung rund 3,464 %.',
   'Die Dichte beträgt 1/0,12 ≈ 8,333 pro Einheit Dezimalrendite. Das ist zulässig; die Gesamtfläche bleibt eins.'
  ],'Gleichverteilung kann eine einfache Modellannahme oder ein Ausgangspunkt der Simulation sein. Sie folgt nicht allein daraus, dass Unter- und Obergrenzen genannt werden.')
 ]),
 S('normal','8. Normalverteilung: standardisieren statt Tabellen auswendig lernen','b',[
  F('X\\sim N(\\mu,\\sigma^2),\\qquad Z=\\frac{X-\\mu}{\\sigma}\\sim N(0,1)','Subtraktion entfernt die Lage, Division durch die positive Standardabweichung entfernt die Skala. Alle Normalverteilungen lassen sich so auf dieselbe Standardform zurückführen.',[['X','Normalverteilte Zufallsgröße.'],['\\mu,\\sigma^2,\\sigma','Erwartungswert, Varianz und positive Standardabweichung.'],['Z','Standardisierte Zufallsgröße.'],['N(\\mu,\\sigma^2)','Hier Notation mit Varianz als zweitem Parameter.']]),
  F('P(X\\le c)=\\Phi\\!\\left(\\frac{c-\\mu}{\\sigma}\\right),\\qquad x_p=\\mu+\\sigma\\Phi^{-1}(p)','Die erste Beziehung macht aus einer Grenze eine Wahrscheinlichkeit. Die zweite macht aus einer Wahrscheinlichkeit eine Grenze.',[['c','Vorgegebene Grenze.'],['x_p','p-Quantil von X.'],['\\Phi,\\Phi^{-1}','Verteilungsfunktion der Standardnormalverteilung und ihre Quantilfunktion.'],['p','Kumulierte Wahrscheinlichkeit zwischen 0 und 1.'],['\\mu,\\sigma','Mittelwert und positive Standardabweichung.'],['X','Normalverteilte Größe.']]),
  X('Eine Verlustschwelle in Standardabweichungen ausdrücken','Eine Modellrendite ist normalverteilt mit Mittelwert 6 % und Standardabweichung 10 %. Gesucht ist die Wahrscheinlichkeit einer Rendite unter −4 %. Gegeben: Φ(−1) ≈ 0,158655.',[
   'Die Grenze liegt zehn Prozentpunkte unter dem Mittelwert, also genau eine Standardabweichung darunter.',
   F('z=\\frac{-0{,}04-0{,}06}{0{,}10}=-1,\\qquad P(R<-4\\%)=\\Phi(-1)\\approx15{,}866\\%','Die Symmetrie gilt um 6 %, nicht um null. Eine negative Renditegrenze ist nicht automatisch die linke Hälfte der Verteilung.',[['z','Standardisierte Grenze.'],['R','Modellrendite.'],['\\Phi','Standardnormal-Verteilungsfunktion.']]),
   'Erhöht sich nur die Volatilität auf 20 %, ist z = −0,5 und die Wahrscheinlichkeit rund 30,854 %. Dieselbe Verlustschwelle liegt nun näher am Mittelwert in Einheiten der neuen Streuung.'
  ],'Eine normalverteilte einfache Rendite erlaubt mathematisch Werte unter −100 %. Bei Anlagen ohne entsprechende Verlustmöglichkeit ist das eine Modellgrenze. Seltene Sprünge und schwere Ränder können weitere Abweichungen erzeugen.'),
  'Lineare Kombinationen gemeinsam normalverteilter Größen sind ebenfalls normalverteilt. Allein normalverteilte Randgrößen garantieren jedoch noch keine gemeinsame Normalverteilung. Der zentrale Grenzwertsatz betrifft unter seinen Voraussetzungen Mittelwerte bzw. standardisierte Summen und macht nicht jede einzelne Finanzrendite normal.'
 ]),
 S('lognormal','9. Lognormal: positive Preise aus normalverteilten Logrenditen','b',[
  F('L=\\ln(S_T/S_0)\\sim N(m,v),\\qquad S_T=S_0e^L','Wenn die Logrendite normalverteilt ist, ist der Endpreis lognormalverteilt und strikt positiv. Die Parameter m und v beziehen sich auf die Logrendite über den gesamten angegebenen Horizont.',[['L','Logrendite über den Horizont.'],['S_0,S_T','Positiver Startpreis und zufälliger Endpreis.'],['m,v','Mittelwert und Varianz von L.'],['\\ln,e','Natürlicher Logarithmus und Basis seiner Exponentialfunktion.'],['T','Endzeitpunkt.']]),
  F('E[S_T]=S_0e^{m+v/2},\\qquad \\operatorname{Med}(S_T)=S_0e^m,\\qquad \\operatorname{Var}(S_T)=S_0^2e^{2m+v}(e^v-1)','Exponentieren des durchschnittlichen Logwerts liefert den Median, nicht den Mittelwert. Die Krümmung der Exponentialfunktion erhöht den erwarteten Preis um den Faktor e^(v/2).',[['E[S_T]','Erwarteter Endpreis.'],['\\operatorname{Med}(S_T)','Median des Endpreises.'],['\\operatorname{Var}(S_T)','Preisvarianz.'],['S_0','Startpreis.'],['m,v','Mittelwert und Varianz der Logrendite.'],['e','Eulersche Zahl.']]),
  X('Den Logmittelwert nicht als einfache Rendite lesen','Der Startpreis ist 100. Die einjährige Logrendite hat Mittelwert 0,04 und Standardabweichung 0,20; ihre Varianz beträgt damit 0,04.',[
   F('E[S_T]=100e^{0{,}04+0{,}04/2}=100e^{0{,}06}\\approx106{,}184','Die erwartete einfache Rendite ist folglich rund 6,184 %, nicht 4 %.',[['E[S_T]','Erwarteter Endpreis am Ende des Horizonts T.'],['e','Eulersche Zahl; 0,04 im ersten Summanden ist der Logmittelwert, 0,04 im zweiten die Logvarianz.']]),
   'Der Medianpreis ist 100e^0,04 ≈ 104,081. Die Hälfte der Modellpreise liegt darunter, die Hälfte darüber; der rechte Rand hebt den Mittelwert über diesen Median.',
   'Bei gleichem Logmittel m erhöht größere Varianz den erwarteten Preis. Das ist eine Aussage über festgehaltene Logparameter. Sie bedeutet nicht, dass Volatilität bei festgehaltener erwarteter einfacher Rendite automatisch einen höheren Preis schafft.'
  ],'Beim Wechsel zwischen Preis, einfacher Rendite und Logrendite immer die Parameterbasis angeben. Insbesondere ist v eine Varianz, keine Standardabweichung.'),
  G({id:'lognormal-growth',title:'Ein positiver Wachstumsfaktor mit rechtem Rand',
   caption:'Lognormaler Wachstumsfaktor G = exp(L), mit L normalverteilt, Mittelwert 0 und Standardabweichung 0,2. Median G = 1; Mittelwert G ≈ 1,0202.',
   reading:'Die Verteilung ist auf positive Faktoren beschränkt und rechts-schief. Ein Faktor unter eins bedeutet eine negative einfache Rendite, obwohl der Faktor selbst positiv bleibt. Die gezeigte Dichte wird nicht als Punktwahrscheinlichkeit gelesen.',
   plot:{x:[0,2.2],y:[0,2.2],xTicks:[0,.5,1,1.5,2],xLabel:'Brutto-Wachstumsfaktor G',yLabel:'Wahrscheinlichkeitsdichte',series:[
    {name:'Lognormaler Wachstumsfaktor',points:Array.from({length:221},(_,i)=>{const x=i/100;return[x,x===0?0:Math.exp(-(Math.log(x)**2)/(2*.2**2))/(x*.2*Math.sqrt(2*Math.PI))];})}
   ]}})
 ]),
 S('distribution-choice','10. Das Verteilungsmodell nach seiner Aufgabe wählen','b',[
  T(['Modell','Typische Frage','Wesentliche Grenze'],[
   ['Bernoulli','Tritt genau ein definiertes Ereignis ein?','Betrag und Zeitpunkt eines Verlusts sind durch den Indikator allein nicht erfasst.'],
   ['Binomial','Wie viele unabhängige gleichartige Ereignisse treten unter n Versuchen ein?','Abhängigkeit oder unterschiedliche Einzelwahrscheinlichkeiten ändern das Modell.'],
   ['Gleichverteilung','Welche Intervallwahrscheinlichkeit folgt aus konstanter Dichte zwischen Grenzen?','Gleiche Dichte ist eine zusätzliche Annahme.'],
   ['Normalverteilung','Welche Wahrscheinlichkeiten folgen aus einer symmetrischen Lage-Skala-Verteilung?','Begrenzte Renditen, Sprünge und schwere Ränder können schlecht erfasst sein.'],
   ['Lognormalverteilung','Wie verteilen sich positive Preise bei normaler Logrendite?','Das Modell hat keine Masse exakt bei null; vollständiger Ausfall braucht eine Erweiterung.'],
   ['Student-t','Wie beeinflussen zusätzliche Randmasse oder geschätzte Streuung die Rechnung?','Mittelwert existiert erst bei Freiheitsgraden über 1, Varianz erst über 2.']
  ],'Ein Modell ist nach Wertebereich, Mechanismus, Momenten und beobachteten Grenzen zu beurteilen.'),
  F('T\\sim t_\\nu:\\qquad E[T]=0\\ (\\nu>1),\\qquad \\operatorname{Var}(T)=\\frac{\\nu}{\\nu-2}\\ (\\nu>2)','Eine Standard-t-Verteilung ist symmetrisch, aber bei endlichen Freiheitsgraden randstärker als eine Standardnormalverteilung. Ihr Skalenparameter eins bedeutet nicht Varianz eins.',[['T','Standard-t-verteilte Zufallsgröße.'],['t_\\nu,\\nu','Student-t-Verteilung und positive Freiheitsgrade.'],['E[T],\\operatorname{Var}(T)','Mittelwert bzw. Varianz, sofern sie existieren.']]),
  'Die t-Verteilung als Modell für eine Rendite und die t-Verteilung einer Teststatistik sind verschiedene Anwendungen. Für Tests folgen die Freiheitsgrade aus dem Schätzproblem; für ein Renditemodell sind sie Modellparameter. Ein beobachteter Stichprobenmittelwert existiert numerisch auch dann, wenn der theoretische Populationsmittelwert des angenommenen Modells nicht existiert.'
 ]),
 S('bayes','11. Bayes: Grundhäufigkeit mit neuer Evidenz verbinden','d',[
  F('P(H\\mid E)=\\frac{P(E\\mid H)P(H)}{P(E\\mid H)P(H)+P(E\\mid H^c)P(H^c)}','Im Zähler stehen Fälle, in denen Hypothese und Evidenz gemeinsam auftreten. Der Nenner zählt alle Wege zur beobachteten Evidenz.',[['H,H^c','Hypothese und ihr Gegenereignis.'],['E','Neue Evidenz mit positiver Gesamtwahrscheinlichkeit.'],['P(H)','Prior: Wahrscheinlichkeit vor der Evidenz.'],['P(E\\mid H)','Likelihood: Wahrscheinlichkeit der Evidenz unter H.'],['P(H\\mid E)','Posterior: aktualisierte Wahrscheinlichkeit nach der Evidenz.'],['P(E\\mid H^c),P(H^c)','Evidenzwahrscheinlichkeit unter der Alternative und deren Prior.']]),
  X('Ein gutes Warnsignal ist noch kein sicherer Ausfall','Vor einer Analyse wird die einjährige Ausfallwahrscheinlichkeit mit 5 % geschätzt. Ein Warnsignal tritt bei 80 % der späteren Ausfälle und bei 10 % der Nichtausfälle auf.',[
   T(['Modellgruppe von 10.000 Fällen','Warnsignal','Kein Warnsignal','Gesamt'],[
    ['Ausfall','400','100','500'],['Kein Ausfall','950','8.550','9.500'],['Gesamt','1.350','8.650','10.000']
   ],'Die Fallzahlen veranschaulichen die gegebenen Wahrscheinlichkeiten; sie sind keine empirisch erhobenen Daten.'),
   F('P(D\\mid W)=\\frac{0{,}80\\cdot0{,}05}{0{,}80\\cdot0{,}05+0{,}10\\cdot0{,}95}=\\frac{400}{1350}\\approx29{,}630\\%','Unter allen 1.350 Warnsignalen sind 400 Ausfälle. Die 80 % beantworten dagegen die umgekehrte Bedingung.',[['D','Ausfallereignis.'],['W','Warnsignal.'],['P(D\\mid W)','Aktualisierte Ausfallwahrscheinlichkeit nach einem Warnsignal.']]),
   'Das Signal erhöht die Ausfallschätzung deutlich von 5 % auf rund 29,63 %. Es macht einen Ausfall dennoch nicht zum sichersten der beiden Ergebnisse, weil Nichtausfälle in der Ausgangsgruppe sehr viel häufiger sind.',
   'Ohne Warnsignal beträgt die aktualisierte Wahrscheinlichkeit 100/8.650 ≈ 1,156 %. Ein negatives Signal senkt hier das Risiko, macht es aber nicht null.'
  ],'Likelihood und Posterior unterscheiden sich durch die Grundhäufigkeit und die alternativen Wege zur Evidenz.')
 ]),
 S('updating','12. Wiederholte Information und wirtschaftliche Entscheidung','c d',[
  F('\\frac{P(H\\mid E)}{P(H^c\\mid E)}=\\frac{P(H)}{P(H^c)}\\cdot\\frac{P(E\\mid H)}{P(E\\mid H^c)}','Posterior Odds ergeben sich aus Prior Odds mal Likelihood Ratio. Dies ist eine Umformung derselben Bayes-Gleichung.',[['H,H^c','Hypothese und Alternative mit hier positiven Wahrscheinlichkeiten.'],['E','Beobachtete Evidenz.'],['P(H)/P(H^c)','Prior Odds.'],['P(H\\mid E)/P(H^c\\mid E)','Posterior Odds.'],['P(E\\mid H)/P(E\\mid H^c)','Likelihood Ratio.']]),
  'Im Warnsignalbeispiel sind Prior Odds 1/19 und Likelihood Ratio 8. Posterior Odds sind daher 8/19; die Wahrscheinlichkeit ist 8/(8 + 19) = 8/27. Odds sind ein Verhältnis zweier Wahrscheinlichkeiten und können größer als eins sein; eine Wahrscheinlichkeit selbst kann das nicht.',
  'Zwei Warnmeldungen aus derselben Datenquelle dürfen nicht automatisch als unabhängige Bestätigungen gezählt werden. Multiplikation beider einzelnen Likelihood Ratios setzt geeignete bedingte Unabhängigkeit unter der Hypothese und unter ihrer Alternative voraus. Andernfalls ist die gemeinsame Evidenzwahrscheinlichkeit zu modellieren.',
  X('Von aktualisierter Wahrscheinlichkeit zum erwarteten Cashflow','Ein einjähriger Anspruch zahlt bei Nichtausfall 104 und bei Ausfall 40. Nach dem Warnsignal gilt die berechnete Ausfallwahrscheinlichkeit 8/27.',[
   F('E[CF\\mid W]=\\frac{19}{27}\\cdot104+\\frac8{27}\\cdot40\\approx85{,}037','Die neue Information verändert die Gewichte der möglichen Zahlungen; die vertraglichen Beträge selbst bleiben gleich.',[['CF','Zahlung in einem Jahr.'],['W','Warnsignal.'],['E[CF\\mid W]','Bedingte erwartete Zahlung.']]),
   'Dieser erwartete Cashflow ist noch kein heutiger Marktpreis. Zeitwert und Risikobeurteilung sind zusätzlich erforderlich.',
   'Ebenso ist eine Entscheidung wie Kauf, Verkauf oder weitere Prüfung nicht allein durch die Wahrscheinlichkeit bestimmt. Preis, Erholungsquote, Risikotragfähigkeit und Kosten möglicher Fehlentscheidungen spielen mit.'
  ],'Bayes aktualisiert ein Modell konsistent. Unzuverlässige Priors, falsch geschätzte Signalraten oder ein geänderter Prozess bleiben mögliche Fehlerquellen.')
 ])
],related:[{unit:'return-statistics',section:'degrees-freedom',label:'Populationsmomente von Stichprobenschätzungen unterscheiden'},{unit:'return-statistics',section:'shape',label:'Schiefe und schwere Ränder beurteilen'},{unit:'portfolio-math',section:'many-assets',label:'Gemeinsame Verteilungen in Portfoliorisiko übersetzen'},{unit:'return-types',section:'continuous',label:'Logrendite und einfache Rendite umrechnen'}],
 sources:[
 {title:'CFA Institute: Probability Trees and Conditional Expectations',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/probability-trees-and-conditional-expectations'},
 {title:'NIST: Normal Distribution',url:'https://www.itl.nist.gov/div898/handbook/eda/section3/eda3661.htm'},
 {title:'NIST: Student-t Distribution',url:'https://www.itl.nist.gov/div898/handbook/eda/section3/eda3664.htm'},
 {title:'NIST: Lognormal Distribution',url:'https://www.itl.nist.gov/div898/handbook/eda/section3/eda3669.htm'},
 {title:'NIST: Uniform Distribution',url:'https://www.itl.nist.gov/div898/handbook/eda/section3/eda3662.htm'},
 {title:'NIST: Binomial Distribution',url:'https://itl.nist.gov/div898/handbook/eda/section3/eda366i.htm'}
 ],review:{status:'draft',date:'2026-09-18',note:'Eigene Szenariotabellen, bedingte Momente und Bayes-Fälle. Gemeinsame und bedingte Verteilungen sowie Logparameter ausdrücklich getrennt.'}};
