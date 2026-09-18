const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('ds-'+id,'distributions','quant',pool,los,stem,options,correct,solution,{section});
const eq=(tex,reading,symbol,meaning)=>F(tex,reading,[[symbol,meaning]]);
module.exports=[
 q('01','practice','a c','Forty percent of a modeled group is exposed to a particular risk. Conditional on that exposure, the probability of default is 15%. The joint probability of exposure and default is:',[
 ['6%.','0,40 × 0,15 = 0,06.'],['15%.','Das ist die bedingte Rate innerhalb der exponierten Gruppe.'],['55%.','Gemeinsame Wahrscheinlichkeit wird hier nicht durch Addition berechnet.']
 ],0,[eq('P(E\\cap D)=0{,}40\\cdot0{,}15=0{,}06','Die zweite Rate bezieht sich nur auf die zuerst ausgewählte exponierte Gruppe.','P(E\\cap D)','Wahrscheinlichkeit von Exposition E und Ausfall D gemeinsam.')],'probabilities'),
 q('02','practice','a','A return is −10% with probability 25%, 6% with probability 50%, and 18% with probability 25%. Expected return is:',[
 ['4.67%.','Das ist das ungewichtete Mittel der drei Werte.'],['5.00%.','−2,5 + 3 + 4,5 = 5 Prozentpunkte.'],['6.00%.','Das ist der häufigste Ausgang, nicht das gewichtete Mittel.']
 ],1,[eq('E[R]=0{,}25(-0{,}10)+0{,}50(0{,}06)+0{,}25(0{,}18)=5\\%','Die Wahrscheinlichkeitssumme ist eins.','E[R]','Erwartete Rendite.')],'moments'),
 q('03','practice','a','A fully specified return distribution has E[R] = 0.055 and E[R²] = 0.0124, with decimal returns. Its standard deviation is closest to:',[
 ['11.14%.','Das ist √E[R²], ohne das Quadrat des Mittelwerts abzuziehen.'],['0.94%.','Das verwechselt Varianz und Standardabweichung.'],['9.68%.','√(0,0124 − 0,055²) ≈ 0,096825.']
 ],2,[eq('\\sigma_R=\\sqrt{0{,}0124-0{,}055^2}\\approx9{,}682\\%','Die Varianz ist 0,009375. Eine n−1-Korrektur ist bei der vollständig angegebenen Verteilung nicht erforderlich.','\\sigma_R','Standardabweichung der Rendite.')],'moments'),
 q('04','practice','a','Two equally likely states give paired returns (X,Y) of (−10%,−20%) and (+10%,+20%). Covariance in decimal-return units is:',[
 ['0.0200.','Beide Mittelwerte sind null und jedes Abweichungsprodukt beträgt 0,02.'],['0.0100.','Das halbiert das Produkt, ohne beide Zustände zu addieren.'],['1.0000.','Das ist die Korrelation, nicht die Kovarianz.']
 ],0,[eq('\\operatorname{Cov}(X,Y)=0{,}5(0{,}02)+0{,}5(0{,}02)=0{,}02','Gleiche Vorzeichen erzeugen in beiden Zuständen ein positives Produkt.','\\operatorname{Cov}(X,Y)','Kovarianz der beiden Renditen.')],'joint'),
 q('05','practice','c','P(A and B) is 0.12 and P(B) is 0.30. The conditional probability P(A | B) is:',[
 ['3.6%.','Das multipliziert statt auf die neue Bezugsgruppe zu normieren.'],['40.0%.','0,12/0,30 = 0,40.'],['12.0%.','Das ist die gemeinsame unbedingte Wahrscheinlichkeit.']
 ],1,[eq('P(A\\mid B)=0{,}12/0{,}30=0{,}40','Unter den Fällen mit B zählen nur diejenigen, die zusätzlich A erfüllen.','P(A\\mid B)','Bedingte Wahrscheinlichkeit von A bei gegebenem B.')],'conditioning'),
 q('06','practice','c','An event A has probability 0.50. Within A, a return of 10% has joint probability 0.20 and a return of 30% has joint probability 0.30. E[R | A] is:',[
 ['11%.','Das verwendet die nicht neu normierten gemeinsamen Wahrscheinlichkeiten.'],['20%.','Das gewichtet beide verbleibenden Werte fälschlich gleich.'],['22%.','Bedingte Gewichte sind 0,4 und 0,6; das Mittel ist 22 %.']
 ],2,[eq('E[R\\mid A]=\\frac{0{,}20(0{,}10)+0{,}30(0{,}30)}{0{,}50}=22\\%','Die gemeinsame gewichtete Summe wird durch die Wahrscheinlichkeit der Bedingung geteilt.','E[R\\mid A]','Bedingter Renditemittelwert.')],'conditioning'),
 q('07','practice','a c','A low regime has probability 40%, return mean −5%, and variance 0.0025. A high regime has probability 60%, mean 10%, and variance 0.0100. Unconditional variance is:',[
 ['0.0124.','Mittlere bedingte Varianz 0,007 plus Varianz der Regimemittel 0,0054.'],['0.0070.','Das ignoriert die Unsicherheit zwischen den Regimemittelwerten.'],['0.0054.','Das ignoriert die Varianz innerhalb der Regime.']
 ],0,[eq('\\sigma^2=0{,}4(0{,}0025)+0{,}6(0{,}01)+0{,}4(-0{,}05-0{,}04)^2+0{,}6(0{,}10-0{,}04)^2=0{,}0124','Der unbedingte Mittelwert beträgt 4 %. Beide Risikoquellen werden addiert.','\\sigma^2','Unbedingte Varianz.')],'total-risk'),
 q('08','practice','a c','Two equally likely regimes have mean-return pairs (−4%,−2%) and (8%,6%). Conditional covariance is 0.001 in each regime. Unconditional covariance is:',[
 ['0.0010.','Das erfasst nur die durchschnittliche Kovarianz innerhalb der Regime.'],['0.0034.','0,001 plus Kovarianz der bedingten Mittelwerte 0,0024.'],['0.0024.','Das erfasst nur die gemeinsame Bewegung der Regimemittel.']
 ],1,[eq('\\operatorname{Cov}(X,Y)=0{,}001+0{,}5(-0{,}06)(-0{,}04)+0{,}5(0{,}06)(0{,}04)=0{,}0034','Die beiden unbedingten Mittelwerte betragen jeweils 2 %.','\\operatorname{Cov}(X,Y)','Unbedingte Kovarianz der Renditen.')],'total-risk'),
 q('09','practice','b','An indicator equals one with probability 20% and zero otherwise. Its variance is:',[
 ['0.20.','Das ist der Erwartungswert.'],['0.04.','Das ist das Quadrat des Erwartungswerts.'],['0.16.','0,2 × 0,8 = 0,16.']
 ],2,[eq('\\operatorname{Var}(X)=0{,}2(1-0{,}2)=0{,}16','Für einen Null-Eins-Indikator gilt X² = X.','\\operatorname{Var}(X)','Varianz des Bernoulli-Indikators.')],'discrete'),
 q('10','practice','b','Four independent loans each have a 20% probability of default over the same horizon. The probability of exactly one default is:',[
 ['40.96%.','Vier mögliche Einzel-Ausfälle mit jeweils 0,2 × 0,8³ Wahrscheinlichkeit.'],['20.00%.','Das ist die Wahrscheinlichkeit eines bestimmten einzelnen Kreditausfalls ohne Bedingung an die anderen.'],['80.00%.','Das ist die erwartete Ausfallzahl 0,8 fälschlich als Wahrscheinlichkeit interpretiert.']
 ],0,[eq('P(N=1)=4\\cdot0{,}2\\cdot0{,}8^3=0{,}4096','Die drei anderen Kredite müssen jeweils nicht ausfallen.','N','Ausfallzahl der vier unabhängigen Kredite.')],'discrete'),
 q('11','practice','b','Twenty independent exposures each have event probability 3%. The expected number of events is:',[
 ['3.00.','Das verwendet die Prozentzahl 3 statt Dezimalzahl 0,03 und skaliert nicht richtig.'],['0.60.','20 × 0,03 = 0,6.'],['0.00.','Ein nicht ganzzahliger Erwartungswert darf nicht auf ein mögliches Zählergebnis abgerundet werden.']
 ],1,[eq('E[N]=20\\cdot0{,}03=0{,}6','Der Erwartungswert einer Zählgröße muss selbst keine ganze Zahl sein.','E[N]','Erwartete Ereigniszahl.')],'discrete'),
 q('12','practice','b','Defaults share a strong common economic driver. Modeling their total count as binomial with a common fixed probability is questionable primarily because:',[
 ['binomial counts can be negative.','Binomialwerte liegen zwischen null und n.'],['a binomial model never has a finite mean.','Sein Mittelwert ist np.'],['the independence assumption may be violated.','Gemeinsame Zustände können Ausfälle zusammen auftreten lassen.']
 ],2,['Eine gemeinsame unbedingte Ausfallrate reicht nicht aus, um die gemeinsame Verteilung der Ausfälle festzulegen.'],'discrete'),
 q('13','practice','b','A return is continuously uniform between −2% and +10%. The probability of a positive return is closest to:',[
 ['83.33%.','Das positive Teilintervall hat Länge 10 bei Gesamtlänge 12 Prozentpunkten.'],['50.00%.','Die Verteilung ist symmetrisch um 4 %, nicht um null.'],['10.00%.','Die obere Renditegrenze ist keine Wahrscheinlichkeit.']
 ],0,[eq('P(R>0)=\\frac{10-0}{10-(-2)}=\\frac56\\approx83{,}333\\%','Unter konstanter Dichte entscheidet das Verhältnis der Intervalllängen.','P(R>0)','Wahrscheinlichkeit einer positiven Modellrendite.')],'continuous'),
 q('14','practice','b','A return is normal with mean 8% and standard deviation 12%. Given Φ(−1) = 0.158655, the probability of a return below −4% is closest to:',[
 ['50.00%.','−4 % liegt nicht beim Mittelwert 8 %.'],['15.87%.','Die Grenze liegt genau eine Standardabweichung unter dem Mittelwert.'],['84.13%.','Das ist die Gegenwahrscheinlichkeit oberhalb der Grenze.']
 ],1,[eq('z=(-0{,}04-0{,}08)/0{,}12=-1','Anschließend die gegebene kumulierte Wahrscheinlichkeit links von −1 verwenden.','z','Standardisierte Renditegrenze.')],'normal'),
 q('15','practice','b','A normal return has mean 7% and standard deviation 10%. Using the standard-normal 5th percentile −1.644854, its 5th percentile is closest to:',[
 ['−16.45%.','Das vergisst, den Mittelwert hinzuzufügen.'],['23.45%.','Das verwendet das obere statt des unteren Quantils.'],['−9.45%.','7 % − 1,644854 × 10 % ≈ −9,44854 %.']
 ],2,[eq('r_{0{,}05}=0{,}07+0{,}10(-1{,}644854)\\approx-9{,}449\\%','Das Ergebnis ist eine Renditegrenze, keine Verlustwahrscheinlichkeit.','r_{0{,}05}','Unteres 5-%-Quantil der Modellrendite.')],'normal'),
 q('16','practice','b','A price starts at 50. Its horizon log return is normal with mean 0.03 and variance 0.09. The expected end price is closest to:',[
 ['53.89.','50 × exp(0,03 + 0,09/2).'],['51.52.','Das ist der Medianpreis 50 × exp(0,03).'],['56.37.','Das addiert die volle Varianz statt der halben Varianz im Exponenten.']
 ],0,[eq('E[S_T]=50e^{0{,}03+0{,}09/2}\\approx53{,}894','Die angegebene 0,09 ist bereits eine Varianz und wird nicht nochmals quadriert.','E[S_T]','Erwarteter Endpreis; e ist die Eulersche Zahl.')],'lognormal'),
 q('17','practice','b','For a non-degenerate lognormal price distribution, the mean price is:',[
 ['equal to the exponential of the mean log price.','Das liefert den Median, nicht den arithmetischen Erwartungswert.'],['greater than the median price.','Der Faktor aus der halben positiven Logvarianz hebt den Mittelwert über den Median.'],['negative whenever the mean log return is negative.','Lognormale Preise sind strikt positiv.']
 ],1,['Auch bei negativer mittlerer Logrendite bleibt der Preis positiv. Eine negative Rendite entspricht einem Preis unter dem Startpreis, nicht einem negativen Preis.'],'lognormal'),
 q('18','practice','d','Prior default probability is 10%. A warning occurs with probability 90% given default and 20% given no default. After a warning, default probability is closest to:',[
 ['90.00%.','Das verwechselt die Wahrscheinlichkeit des Signals unter Ausfall mit der umgekehrten Bedingung.'],['9.00%.','Das ist die gemeinsame Wahrscheinlichkeit von Ausfall und Warnung.'],['33.33%.','0,09/(0,09 + 0,18) = 1/3.']
 ],2,[eq('P(D\\mid W)=\\frac{0{,}9\\cdot0{,}1}{0{,}9\\cdot0{,}1+0{,}2\\cdot0{,}9}=\\frac13','Der Nenner erfasst Warnungen sowohl bei Ausfällen als auch bei Nichtausfällen.','P(D\\mid W)','Ausfallwahrscheinlichkeit D nach Warnsignal W.')],'bayes'),
 q('19','practice','d','Two research alerts reproduce the same underlying source. Multiplying their separately calculated likelihood ratios as if they were independent would most likely:',[
 ['double-count evidence unless appropriate conditional independence holds.','Die gemeinsame Informationsgrundlage kann die beiden Signale stark abhängig machen.'],['always produce the correct posterior.','Bayes benötigt die richtige gemeinsame Evidenzwahrscheinlichkeit.'],['make prior probabilities irrelevant.','Auch mehrfach aktualisierte Wahrscheinlichkeiten hängen von Ausgangsannahmen ab.']
 ],0,['Für eine einfache Multiplikation der einzelnen Likelihood Ratios ist bedingte Unabhängigkeit sowohl unter der Hypothese als auch unter der Alternative erforderlich.'],'updating'),
 q('20','practice','c d','Following new evidence, default probability is 25%. A claim pays 108 if no default occurs and 40 on default. The conditional expected payment is:',[
 ['108.','Das ist nur die versprochene Zahlung im Nichtausfall.'],['91.','0,75 × 108 + 0,25 × 40 = 91.'],['81.','Das lässt die Zahlung von 40 im Ausfall weg.']
 ],1,[eq('E[CF\\mid E]=0{,}75\\cdot108+0{,}25\\cdot40=91','Die erwartete Zahlung ist noch nicht ihr abgezinster risikoadjustierter Marktwert.','E[CF\\mid E]','Erwarteter Cashflow nach der neuen Evidenz E.')],'updating'),
 q('a1','mock-a','a c','Two equally likely regimes have conditional return means 0% and 10%, with variance 0.004 within either regime. The unconditional return variance is:',[
 ['0.0040.','Das ignoriert die Streuung zwischen den Regimemittelwerten.'],['0.0025.','Das ist nur die Varianz der beiden Mittelwerte um 5 %.'],['0.0065.','0,004 + 0,5 × 0,05² + 0,5 × 0,05².']
 ],2,[eq('\\sigma^2=0{,}004+0{,}0025=0{,}0065','Die beiden Komponenten der totalen Varianz werden addiert.','\\sigma^2','Unbedingte Renditevarianz.')],'total-risk'),
 q('a2','mock-a','d','A firm has a 20% prior probability of earnings deterioration. A signal appears in 75% of deterioration cases and 25% of other cases. After observing the signal, deterioration probability is closest to:',[
 ['42.86%.','0,15/(0,15 + 0,20) = 3/7.'],['75.00%.','Das ist die Signalwahrscheinlichkeit unter der Hypothese.'],['15.00%.','Das ist nur die gemeinsame Wahrscheinlichkeit von Verschlechterung und Signal.']
 ],0,[eq('P(H\\mid E)=\\frac{0{,}75\\cdot0{,}20}{0{,}75\\cdot0{,}20+0{,}25\\cdot0{,}80}\\approx42{,}857\\%','Auch Unternehmen ohne Verschlechterung können das Signal erzeugen.','P(H\\mid E)','Aktualisierte Wahrscheinlichkeit von Verschlechterung H nach Signal E.')],'bayes'),
 q('b1','mock-b','b','A stock starts at 80. Its one-year log return is normal with mean 0.02 and standard deviation 0.30. The expected end price is closest to:',[
 ['81.62.','Das ist der Median, der den Varianzterm nicht enthält.'],['85.37.','80 × exp(0,02 + 0,30²/2).'],['94.82.','Das setzt die Standardabweichung anstelle der Varianz in den halben Korrekturterm ein.']
 ],1,[eq('E[S_1]=80e^{0{,}02+0{,}30^2/2}\\approx85{,}373','Zuerst die Standardabweichung quadrieren: Logvarianz 0,09.','E[S_1]','Erwarteter Endpreis in einem Jahr; e ist die Eulersche Zahl.')],'lognormal'),
 q('b2','mock-b','c','A joint distribution has P(Y=0, A)=0.10 and P(Y=20, A)=0.30, with no other outcomes under A. The conditional variance of Y given A is:',[
 ['30.00.','Das verwendet die gemeinsamen statt der bedingten Wahrscheinlichkeiten bei den Abständen.'],['15.00.','Das ist der bedingte Mittelwert.'],['75.00.','Bedingte Gewichte 0,25 und 0,75, Mittelwert 15: 0,25 × 225 + 0,75 × 25.']
 ],2,[eq('\\operatorname{Var}(Y\\mid A)=0{,}25(0-15)^2+0{,}75(20-15)^2=75','Die Wahrscheinlichkeit von A beträgt 0,4; beide gemeinsamen Zellen werden dadurch geteilt.','\\operatorname{Var}(Y\\mid A)','Bedingte Varianz in quadrierten Y-Einheiten.')],'conditioning')
];
