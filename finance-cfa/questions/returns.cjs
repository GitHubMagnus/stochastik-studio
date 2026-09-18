const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('ret-'+id,'returns','quant',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a','An asset returns 12% with probability 70% and −8% with probability 30%. Its expected one-period return is closest to:',[
 ['2.0%.','Das wäre das ungewichtete Mittel der beiden Szenarien.'],['6.0%.','0,7 × 12 % + 0,3 × (−8 %) = 6 %.'],['10.8%.','Das wäre die falsche Verwendung des Verlusts als positiver Ertrag.']
 ],1,[F('E[R]=0{,}7\\cdot0{,}12+0{,}3\\cdot(-0{,}08)=0{,}06','Wahrscheinlichkeiten gewichten beide möglichen Ergebnisse; der Verlust behält sein negatives Vorzeichen.',[['E[R]','Erwartete Periodenrendite.']]),'Die tatsächliche Rendite beträgt in diesem Modell 12 % oder −8 %, nicht zwingend den Mittelwert.'],'return-meanings'),
 q('02','practice','a','A share is bought for 60 and sold at the end of the period for 57, when it also pays a distribution of 6. Ignoring taxes and costs, the holding-period return is:',[
 ['−5%.','Das berücksichtigt nur die Kursbewegung.'],['10%.','Das berücksichtigt nur die Ausschüttung.'],['5%.','Gesamtertrag 57 + 6 − 60 = 3; 3/60 = 5 %.']
 ],2,[F('R=(57+6-60)/60=5\\%','Der Kursverlust wird mit der Ausschüttung zusammengeführt.',[['R','Haltedauerrendite.']])],'holding-return'),
 q('03','practice','a b','A certain payment of 110 is due in one year. At an appropriate effective annual discount rate of 8%, its present value is closest to:',[
 ['101.85.','110/1,08 ist der Betrag, der auf 110 anwächst.'],['101.20.','Das wäre 110 × (1 − 0,08), kein korrektes Abzinsen.'],['118.80.','Das wäre Aufzinsen der künftigen statt Abzinsen auf die heutige Zahlung.']
 ],0,[F('P_0=110/1{,}08\\approx101{,}85','Die inverse Wachstumsrechnung teilt durch 1,08.',[['P_0','Heutiger Wert.']])],'rate-roles'),
 q('04','practice','b','Nominal wealth rises 8% while the relevant price index rises 5% over the same year. The exact real return is closest to:',[
 ['3.00%.','Das ist nur die Subtraktionsnäherung.'],['2.86%.','1,08/1,05 − 1 ≈ 2,857 %.'],['13.40%.','Das multipliziert beide Wachstumsfaktoren, statt das Preiswachstum herauszurechnen.']
 ],1,[F('R_{real}=1{,}08/1{,}05-1\\approx2{,}857\\%','Kaufkraft wird durch Division der nominalen Entwicklung durch den Preisfaktor gemessen.',[['R_{real}','Reale Jahresrendite.']])],'purchasing-power'),
 q('05','practice','b','Using the exact Fisher relation in a setting with known inflation, a real return of 3% and inflation of 2% correspond to a nominal return of:',[
 ['1.00%.','Das vertauscht die Richtung der Kaufkraftumrechnung.'],['5.00%.','Das lässt den Produktterm weg.'],['5.06%.','1,03 × 1,02 − 1 = 5,06 %.']
 ],2,[F('R_{nom}=1{,}03\\cdot1{,}02-1=5{,}06\\%','Der Produktterm beträgt 0,06 Prozentpunkte.',[['R_{nom}','Nominale Jahresrendite.']])],'purchasing-power'),
 q('06','practice','b','Nominal wealth increases 9% while the relevant price index increases 12%. The real return is closest to:',[
 ['−2.68%.','1,09/1,12 − 1 ≈ −2,679 %.'],['−3.00%.','Das ist die Näherung durch Subtraktion.'],['2.75%.','Das kehrt die Kaufkraftrelation um.']
 ],0,[F('R_{real}=1{,}09/1{,}12-1\\approx-2{,}679\\%','Geldwachstum unterhalb des Preiswachstums bedeutet Kaufkraftverlust.',[['R_{real}','Reale Jahresrendite.']])],'purchasing-power'),
 q('07','practice','b','An approximate additive required-return model uses a 1% real risk-free rate, 2% expected inflation, a 1.5% default premium, a 0.4% liquidity premium, and a 0.6% maturity premium. The nominal required return is:',[
 ['3.0%.','Das berücksichtigt nur realen sicheren Satz und Inflation.'],['5.5%.','Alle fünf angegebenen Komponenten werden addiert.'],['4.5%.','Das lässt Liquiditäts- und Laufzeitkomponenten zusammen weg.']
 ],1,[F('k\\approx1\\%+2\\%+1{,}5\\%+0{,}4\\%+0{,}6\\%=5{,}5\\%','Die Aufgabe verlangt ausdrücklich die additive Näherung.',[['k','Nominale geforderte Rendite.']]),'Die Bausteine sind hier vorgegeben. Aus einem beobachteten Marktspread allein ließen sie sich nicht automatisch eindeutig identifizieren.'],'premia'),
 q('08','practice','a b','A one-year claim costs 100. It pays 105 with probability 90% and 70 with probability 10%. Its expected return is:',[
 ['5.0%.','Das ist die Rendite bei vollständiger Vertragserfüllung.'],['−30.0%.','Das ist allein das schlechte Szenario.'],['1.5%.','Erwartete Zahlung 0,9 × 105 + 0,1 × 70 = 101,5.']
 ],2,[F('E[R]=(0{,}9\\cdot105+0{,}1\\cdot70)/100-1=1{,}5\\%','Die zugesagte Zahlung ist nicht die wahrscheinlichkeitsgewichtete Zahlung.',[['E[R]','Erwartete Jahresrendite.']])],'promised-expected'),
 q('09','practice','a','A yield rises from 3.25% to 3.65%. The increase is:',[
 ['40 basis points.','0,40 Prozentpunkte entsprechen 40 Basispunkten.'],['0.40 basis points.','Das verwechselt Prozentpunkte mit Basispunkten.'],['400 basis points.','Das wäre eine Änderung um vier Prozentpunkte.']
 ],0,[F('\\Delta r_{bp}=10\\,000(0{,}0365-0{,}0325)=40','Dezimaldifferenz 0,004 wird in Basispunkte umgerechnet.',[['\\Delta r_{bp}','Zinsänderung in Basispunkten.']])],'comparison'),
 q('10','practice','b','A government instrument has negligible default risk and a fixed nominal payment in a foreign currency. For a domestic investor, it:',[
 ['must also eliminate inflation and exchange-rate risk.','Ausfallsicherheit allein begrenzt diese Risiken nicht.'],['can still expose the investor to purchasing-power and currency risk.','Währung, Zeithorizont und reale Kaufkraft bleiben eigenständige Fragen.'],['must provide the same realized real return in every country.','Preisniveaus und Wechselkurse können sich verschieden entwickeln.']
 ],1,['„Risikofrei“ braucht einen Bezug: Welche Zahlung ist in welcher Währung und über welchen Zeitraum sicher?'],'comparison'),
 q('11','practice','b','Two otherwise comparable bonds have equal assessed default losses but different trading liquidity. A yield spread between them:',[
 ['must equal a difference in default probabilities.','Die Aufgabe nennt gleiche eingeschätzte Ausfallverluste und einen anderen Unterschied.'],['proves that the higher-yield bond will earn more in every state.','Eine Prämie ist kein garantierter Mehrertrag.'],['may compensate investors for the liquidity difference.','Schlechtere Handelbarkeit kann eine zusätzliche Renditeforderung auslösen.']
 ],2,['Ein beobachteter Spread kann mehrere Ursachen enthalten. Die Unterschiede müssen mit den Eigenschaften der Instrumente verbunden werden.'],'premia'),
 q('12','practice','a b','For an unchanged positive certain future payment, an increase in the appropriate discount rate most directly:',[
 ['reduces its present value.','Der Nenner der Barwertrechnung steigt.'],['increases the contractual payment automatically.','Die Renditeforderung ändert nicht den Vertrag.'],['leaves the present value unchanged.','Das würde den Zeitwert ignorieren.']
 ],0,['Bei konstantem Zahlungsbetrag wird die passende Anlagealternative attraktiver; der heutige Preis desselben Anspruchs sinkt.'],'rate-roles'),
 q('a1','mock-a','a b','A claim purchased for 100 pays 110 in one year with probability 92% and 50 with probability 8%. Its expected return is closest to:',[
 ['10.0%.','Das setzt vollständige Zahlung in allen Fällen voraus.'],['5.2%.','0,92 × 110 + 0,08 × 50 = 105,2.'],['−4.0%.','Das berücksichtigt nur den gewichteten Verlustbeitrag.']
 ],1,[F('E[R]=(0{,}92\\cdot110+0{,}08\\cdot50)/100-1=5{,}2\\%','Die Szenariogewichte beziehen sich auf sämtliche Zahlungen.',[['E[R]','Erwartete Einjahresrendite.']])],'promised-expected'),
 q('a2','mock-a','a','An investor’s minimum acceptable return for an investment of a given risk and horizon is best described as the:',[
 ['realized return.','Diese wird erst nach Ablauf beobachtet.'],['promised return.','Diese folgt aus Vertrag und Preis bei vollständiger Erfüllung.'],['required return.','Sie ist der vorab festgelegte angemessene Entscheidungsmaßstab.']
 ],2,['Die Frage betrifft eine Forderung an eine Anlage, nicht die spätere Beobachtung oder vertragliche Zusage.'],'return-meanings'),
 q('b1','mock-b','b','An investment earns 6% nominally while inflation is 8% over the same year. The exact real return is closest to:',[
 ['−1.85%.','1,06/1,08 − 1 ≈ −1,852 %.'],['−2.00%.','Das ist die lineare Näherung.'],['1.89%.','Das kehrt die beiden Wachstumsfaktoren um.']
 ],0,[F('R_{real}=1{,}06/1{,}08-1\\approx-1{,}852\\%','Das Preisniveau wächst schneller als das Geldvermögen.',[['R_{real}','Reale Jahresrendite.']])],'purchasing-power'),
 q('b2','mock-b','b','A quoted corporate-bond yield exceeds a comparable government-bond yield. Without additional information, interpreting the entire spread as expected default loss is:',[
 ['necessarily correct because liquidity never affects yields.','Liquidität kann relevant sein.'],['unwarranted because other risk premia and market effects may contribute.','Der Gesamtspread ist keine eindeutige Verlustzerlegung.'],['required whenever both yields are annualized.','Annualisierung schafft nur eine Zeitkonvention.']
 ],1,['Einheitenangleichung ermöglicht den Vergleich, identifiziert aber noch nicht seine wirtschaftlichen Ursachen.'],'premia')
];
