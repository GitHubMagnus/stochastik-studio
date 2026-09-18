const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('rs-'+id,'return-statistics','quant',pool,los,stem,options,correct,solution,{section});
const eq=(tex,reading,symbol,meaning)=>F(tex,reading,[[symbol,meaning]]);
module.exports=[
 q('01','practice','a c','An analyst estimates correlation between two funds. Fund A returns are monthly total returns in euros; fund B data are annual price returns in dollars. The most appropriate first step is to:',[
 ['calculate correlation because it has no units.','Die Kennzahl ist zwar einheitslos, die gepaarten Daten müssen aber dieselbe wirtschaftliche und zeitliche Grundlage haben.'],
 ['align periods, currency, and return definitions before forming paired observations.','Erst dann ist die geschätzte Beziehung interpretierbar.'],
 ['replace every missing observation with zero.','Fehlende Beobachtung und tatsächliche Nullrendite sind nicht identisch.']
 ],1,['Die mathematische Standardisierung beseitigt weder falsche Zeitzuordnung noch Unterschiede zwischen Preis- und Gesamtrendite.'],'data'),
 q('02','practice','a','Returns of 2%, 5%, and 11% receive weights of 20%, 30%, and 50%. The weighted arithmetic mean return is:',[
 ['6.00%.','Das ist das gleich gewichtete Mittel; die gegebenen Gewichte werden ignoriert.'],['8.00%.','Dieser Wert folgt nicht aus den angegebenen gewichteten Beiträgen.'],['7.40%.','0,2 × 2 + 0,3 × 5 + 0,5 × 11 = 7,4.']
 ],2,[eq('\\bar R_w=0{,}2\\cdot2\\%+0{,}3\\cdot5\\%+0{,}5\\cdot11\\%=7{,}4\\%','Die Beiträge sind 0,4, 1,5 und 5,5 Prozentpunkte.','\\bar R_w','Gewichtetes arithmetisches Renditemittel.')],'center'),
 q('03','practice','a','The observations are 1, 2, 3, 4, and 40. One observation is trimmed from each end. The trimmed mean is:',[
 ['3.00.','Die verbleibenden Werte 2, 3 und 4 haben Mittelwert 3.'],['10.00.','Das ist der ungetrimmte Mittelwert aller fünf Werte.'],['1.80.','Das teilt die Summe der verbleibenden Werte durch die alte Beobachtungszahl.']
 ],0,['Nach Entfernen beider Randwerte bleiben drei Beobachtungen. Deshalb wird 9 durch 3 geteilt. Beim Winsorisieren würden dagegen die Positionen erhalten bleiben und die Randwerte ersetzt.'],'center'),
 q('04','practice','a','Ordered observations are −4, 0, 3, 5, 8, and 12. Using position h = (n + 1)p and linear interpolation, the 25th percentile is:',[
 ['0.00.','Das wählt die zweite Beobachtung ohne die vorgegebene Interpolation.'],['−1.00.','h = 7 × 0,25 = 1,75; −4 + 0,75 × 4 = −1.'],['−2.00.','Das ist die Hälfte zwischen den ersten beiden Werten statt drei Vierteln.']
 ],1,[eq('Q_{0{,}25}=-4+0{,}75(0-(-4))=-1','Die Position 1,75 liegt zu 75 % auf dem Weg von Beobachtung 1 zu Beobachtung 2.','Q_{0{,}25}','Erstes Quartil nach der angegebenen Regel.')],'quantiles'),
 q('05','practice','a','Four observed annual returns are −3%, 1%, 5%, and 9%. Their sample standard deviation is closest to:',[
 ['4.47%.','Das verwendet den Populationsnenner 4 statt des Stichprobennenners 3.'],['26.67%.','Das ist die Zahl der Stichprobenvarianz in quadrierten Prozentpunkten, keine Standardabweichung.'],['5.16%.','Die quadrierten Abstände vom Mittel 3 % summieren sich zu 80; √(80/3) ≈ 5,164.']
 ],2,[eq('s=\\sqrt{\\frac{(-6)^2+(-2)^2+2^2+6^2}{3}}\\approx5{,}164','Die Standardabweichung hat dieselbe Einheit wie die ursprünglichen Renditen.','s','Stichprobenstandardabweichung in Prozentpunkten.')],'dispersion'),
 q('06','practice','a','The complete population consists of the four values −3, 1, 5, and 9. Its variance is:',[
 ['20.00.','Die Summe der quadrierten Abstände 80 wird durch vier Populationselemente geteilt.'],['26.67.','Das wäre die n−1-Stichprobenvarianz.'],['4.47.','Das ist die Populationsstandardabweichung, nicht die Varianz.']
 ],0,[eq('\\sigma^2=80/4=20','Es wird die vollständige beschriebene Population ausgewertet, keine unbekannte Populationsvarianz aus einer Stichprobe geschätzt.','\\sigma^2','Populationsvarianz in quadrierten Dateneinheiten.')],'degrees-freedom'),
 q('07','practice','a','A constant 3 percentage points is added to every return observation. The standard deviation:',[
 ['increases by 3 percentage points.','Nur das Niveau verschiebt sich, die Abstände vom ebenfalls verschobenen Mittel bleiben gleich.'],['is unchanged.','Translation ändert die Streuung um das Mittel nicht.'],['is multiplied by three.','Multiplikation wäre eine Skalierung, keine Addition.']
 ],1,['Für jeden Wert gilt (xᵢ + 3) − (Mittelwert + 3) = xᵢ − Mittelwert. Daher bleiben alle quadrierten Abstände gleich.'],'dispersion'),
 q('08','practice','a','Return variance is 0.0009 when returns are expressed as decimals. The standard deviation expressed as a percentage is:',[
 ['0.09%.','Das wandelt die Varianz in Prozent um, ohne die Wurzel zu ziehen.'],['0.03%.','Das vergisst nach dem Wurzelziehen die Umrechnung von Dezimalzahl in Prozent.'],['3.00%.','√0,0009 = 0,03 = 3 %.']
 ],2,[eq('\\sigma=\\sqrt{0{,}0009}=0{,}03=3\\%','Die Wurzel entfernt die quadrierte Einheit.','\\sigma','Standardabweichung der Rendite.')],'dispersion'),
 q('09','practice','d','Returns are −6%, 0%, 4%, and 10%. With a target of 2% and a denominator equal to all four observations, target downside deviation is closest to:',[
 ['4.12%.','Nur die Abstände −8 und −2 zählen: √(68/4).'],['5.83%.','Das teilt nur durch die zwei Unterschreitungen.'],['3.00%.','Das verwendet Ziel null statt Ziel 2 %.']
 ],0,[eq('DD_2=\\sqrt{(64+4+0+0)/4}=\\sqrt{17}\\approx4{,}123','Beobachtungen über dem Ziel tragen null bei, bleiben aber im ausdrücklich festgelegten Gesamtnenner.','DD_2','Zielabweichung um 2 % in Prozentpunkten.')],'downside'),
 q('10','practice','d','A downside deviation calculation divides squared shortfalls by the number of shortfall observations only, instead of by all observations. Relative to the full-sample convention, it:',[
 ['always gives the same number.','Bei positiven Nichtunterschreitungen im Datensatz unterscheiden sich die Nenner.'],['measures conditional shortfall severity and removes the direct frequency weighting.','Die Rechnung betrachtet die schlechten Beobachtungen unter der Bedingung, dass eine Unterschreitung vorliegt.'],['becomes a measure of upside volatility.','Die ausgewählten Abstände bleiben unterhalb des Ziels.']
 ],1,['Zwei Anlagen können gleich schwere schlechte Perioden, aber unterschiedliche Häufigkeiten dieser Perioden besitzen. Der bedingte Nenner macht diesen Häufigkeitsunterschied im Maß unsichtbar.'],'downside'),
 q('11','practice','d','Fund A has mean return 8% and standard deviation 12%. Fund B has mean 12% and standard deviation 15%. Based only on the coefficient of variation, the fund with lower relative dispersion is:',[
 ['A, because its standard deviation is lower.','Das ist ein Vergleich absoluter statt relativer Streuung.'],['neither, because both coefficients equal 1.5.','B hat 15/12 = 1,25.'],['B, because 1.25 is lower than 1.50.','Die Streuung je Einheit positiver mittlerer Rendite ist bei B kleiner.']
 ],2,['A: 12/8 = 1,5. B: 15/12 = 1,25. Das Urteil gilt für diese Kennzahl; es ersetzt keine vollständige Eignungs- oder Risikobeurteilung.'],'relative-risk'),
 q('12','practice','b','A strategy produces many modest gains and occasional very large losses. Its return distribution is most likely:',[
 ['negatively skewed.','Seltene große negative Abweichungen erzeugen einen ausgeprägten linken Rand.'],['positively skewed.','Das würde einen ausgeprägten rechten Rand bezeichnen.'],['necessarily symmetric.','Die beschriebenen Gewinn- und Verlustmuster sind gerade asymmetrisch.']
 ],0,['Die Häufigkeit positiver Perioden allein kann die Größe der seltenen Verluste verdecken. Deshalb ergänzt Schiefe die Lage- und Streuungsmaße.'],'shape'),
 q('13','practice','b','A distribution has kurtosis, defined as the fourth standardized central moment, equal to 6. Its excess kurtosis is:',[
 ['9.','Das addiert statt subtrahiert die Normalreferenz.'],['3.','Exzess-Kurtosis ist Kurtosis minus 3.'],['6.','Das setzt beide Konventionen gleich.']
 ],1,[eq('\\gamma_2=6-3=3','Die Normalverteilung hat viertes standardisiertes Moment 3 und Exzess 0.','\\gamma_2','Exzess-Kurtosis.')],'shape'),
 q('14','practice','b','Two investments have identical expected returns and variances. One has substantially greater downside tail risk. Mean and variance alone:',[
 ['prove the investments have identical distributions.','Zwei Momente bestimmen eine allgemeine Verteilung nicht vollständig.'],['guarantee equal suitability for every investor.','Verlustschwellen und Präferenzen können auf weitere Verteilungsmerkmale reagieren.'],['do not fully describe the difference in loss profiles.','Höhere Momente und konkrete Verlustwahrscheinlichkeiten ergänzen die Beschreibung.']
 ],2,['Das Gleichsetzen von Mittelwert und Varianz ist keine Garantie gleicher Extremverluste. Die Kapitelbeispiele konstruieren unterschiedliche Verteilungen mit denselben ersten beiden Momenten.'],'shape'),
 q('15','practice','c','Paired observations are X = (1, 3, 5) and Y = (2, 1, 6). Their sample covariance is:',[
 ['4.00.','Die Abweichungsprodukte summieren sich zu 8, geteilt durch n−1 = 2.'],['2.67.','Das verwendet den Populationsnenner 3.'],['0.76.','Das ist näherungsweise die Korrelation nach zusätzlicher Standardisierung.']
 ],0,[eq('s_{XY}=\\frac{(-2)(-1)+0(-2)+2(3)}{2}=4','Beide Mittelwerte sind 3; nur zeitgleich gepaarte Abweichungen werden multipliziert.','s_{XY}','Stichprobenkovarianz in X-Einheiten mal Y-Einheiten.')],'covariance'),
 q('16','practice','c','Two return series have standard deviations of 20% and 15%. Their covariance is 0.018 in decimal-return units. Correlation is:',[
 ['0.12.','Das teilt nur durch eine Standardabweichung.'],['0.60.','0,018/(0,20 × 0,15) = 0,6.'],['1.20.','Das folgt nicht aus der Standardisierung und läge zudem außerhalb des zulässigen Bereichs.']
 ],1,[eq('\\rho=\\frac{0{,}018}{0{,}20\\cdot0{,}15}=0{,}6','Beide Standardabweichungen stehen im Nenner.','\\rho','Dimensionslose Korrelation.')],'covariance'),
 q('17','practice','c','Every observation of Y is multiplied by −2, while X is unchanged. Provided both original variances are positive, the new correlation equals:',[
 ['twice the original correlation.','Die Skalierung hebt sich zwischen Kovarianz und Standardabweichung auf.'],['the original correlation.','Eine negative Skalierung kehrt die Richtung um.'],['the negative of the original correlation.','Der Betrag bleibt gleich; das Vorzeichen wechselt.']
 ],2,['Die Kovarianz wird mit −2 multipliziert, die Standardabweichung von Y mit |−2| = 2. Im Quotienten verbleibt Faktor −1.'],'covariance'),
 q('18','practice','c','X takes −1, 0, and 1 with equal probabilities, and Y = X². The two variables are:',[
 ['uncorrelated but dependent.','Cov(X,Y) ist null, obwohl X den Wert von Y vollständig bestimmt.'],['independent because correlation is zero.','Die Umkehrung von unabhängig zu unkorreliert gilt im Allgemeinen nicht.'],['perfectly positively correlated.','Die exakte Beziehung ist nicht linear.']
 ],0,['E[X] = 0 und E[XY] = 0; damit ist die Kovarianz null. Kennt man X = 0, weiß man aber Y = 0, womit Unabhängigkeit ausgeschlossen ist.'],'limits'),
 q('19','practice','a c','Two consecutive log returns each have variance 0.01 and covariance 0.002. The standard deviation of their sum is closest to:',[
 ['14.14%.','Das lässt die zeitliche Kovarianz weg.'],['15.49%.','√(0,01 + 0,01 + 2 × 0,002) ≈ 0,154919.'],['20.00%.','Das addiert Standardabweichungen, als wäre die Korrelation +1.']
 ],1,[eq('\\sigma_{sum}=\\sqrt{0{,}024}\\approx15{,}492\\%','Logrenditen sind über die Zeit additiv. Positive zeitliche Kovarianz erhöht die Varianz ihrer Summe.','\\sigma_{sum}','Standardabweichung der Zweiperioden-Logrendite.')],'limits'),
 q('20','practice','a','For 36 independent observations from a stable return distribution, the sample standard deviation is 18%. The estimated standard error of the sample mean is:',[
 ['18%.','Das ist die Streuung einzelner Beobachtungen.'],['0.50%.','Das teilt durch n statt durch √n.'],['3%.','18 %/√36 = 3 %.']
 ],2,[eq('SE(\\bar R)=18\\%/\\sqrt{36}=3\\%','Mehr unabhängige Beobachtungen verringern die Unsicherheit des Mittels, nicht die Volatilität einer einzelnen Periode.','SE(\\bar R)','Geschätzter Standardfehler des Stichprobenmittels.')],'degrees-freedom'),
 q('a1','mock-a','a','A sample contains the values 2, 4, and 6. Its sample variance is:',[
 ['4.00.','Die quadrierten Abstände sind 4, 0 und 4; geteilt durch 2 ergibt 4.'],['2.67.','Das wäre die Populationsvarianz dieser drei Werte.'],['2.00.','Das ist die Stichprobenstandardabweichung.']
 ],0,[eq('s^2=(4+0+4)/2=4','Der Mittelwert ist 4; n−1 = 2.','s^2','Stichprobenvarianz.')],'degrees-freedom'),
 q('a2','mock-a','b','A manager highlights that a strategy earns a small positive return in most months but does not discuss rare large negative outcomes. The distributional characteristic most directly omitted is:',[
 ['positive skewness.','Große seltene Verluste betreffen den linken Rand.'],['negative skewness.','Der lange linke Rand kann trotz vieler positiver Monate bedeutsam sein.'],['a guaranteed zero variance.','Seltene Verluste sind gerade eine Quelle von Streuung.']
 ],1,['Eine hohe Gewinnhäufigkeit allein sagt wenig über das Verhältnis kleiner Gewinne zu großen Verlusten aus.'],'shape'),
 q('b1','mock-b','d','Returns are −5%, 0%, 5%, and 10%. Target downside deviation is calculated around zero using a denominator of n−1. The result is closest to:',[
 ['2.50%.','Das verwendet n statt des ausdrücklich angegebenen n−1.'],['5.00%.','Das verwendet nur die eine negative Beobachtung als Nenner.'],['2.89%.','√(25/3) ≈ 2,8868 Prozentpunkte.']
 ],2,[eq('DD_0=\\sqrt{25/3}\\approx2{,}887','Nur −5 % liegt unter null. Der vorgegebene Nenner beträgt trotzdem 3.','DD_0','Zielabweichung um null in Prozentpunkten, mit n−1-Konvention.')],'downside'),
 q('b2','mock-b','c','The covariance of two return series is 0.003, with standard deviations of 10% and 5%. Their correlation is:',[
 ['0.60.','0,003/(0,10 × 0,05) = 0,6.'],['0.06.','Das enthält einen Dezimalstellenfehler.'],['0.30.','Das verwendet nicht das Produkt beider Standardabweichungen.']
 ],0,[eq('\\rho=0{,}003/(0{,}10\\cdot0{,}05)=0{,}6','Die Renditen werden konsistent als Dezimalzahlen eingesetzt.','\\rho','Korrelation.')],'covariance')
];
