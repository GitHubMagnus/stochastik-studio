const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('fxc-'+id,'fx-calculation','economics',pool,los,stem,options,correct,solution,{section});
const eq=(tex,reading,symbol,meaning)=>F(tex,reading,[[symbol,meaning]]);
module.exports=[
 q('01','practice','a','Quotes are 1.15 USD per EUR and 140 JPY per USD, ignoring spreads. The cross-rate in JPY per EUR is:',[
 ['121.74.','Division passt nicht zu den geforderten Einheiten.'],['161.00.','1,15 × 140.'],['0.00821.','Das ist eine unpassende Kombination inverser Einheiten.']
 ],1,[eq('S_{JPY/EUR}=1{,}15\\cdot140=161','USD kürzt sich im Produkt heraus.','S_{JPY/EUR}','Yen je Euro.')],'cross-rates'),
 q('02','practice','a','Quotes are 1.30 USD per GBP and 1.04 USD per EUR, ignoring spreads. The rate in EUR per GBP is:',[
 ['1.25.','1,30/1,04.'],['0.80.','Das ist GBP je EUR.'],['1.352.','Das Produkt hat die falsche Währungseinheit.']
 ],0,[eq('S_{EUR/GBP}=1{,}30/1{,}04=1{,}25','Ein GBP kauft 1,30 USD; diese kaufen 1,25 EUR.','S_{EUR/GBP}','Euro je Pfund.')],'cross-rates'),
 q('03','practice','a','A dealer quotes 1.24 bid and 1.26 ask, in USD per EUR. A customer sells 50,000 EUR. The customer receives:',[
 ['63,000 USD.','Das ist der Briefkurs; er gilt beim Kauf von EUR.'],['62,500 USD.','Der Mittelwert ist kein zugesicherter Ausführungskurs.'],['62,000 USD.','50.000 × Geldkurs 1,24.']
 ],2,[eq('V_{USD}=50000\\cdot1{,}24=62000','Der Händler kauft die EUR zum Geldkurs.','V_{USD}','USD-Erlös des Kunden.')],'bid-ask'),
 q('04','practice','a','The dealer quote is 1.24/1.26 USD per EUR. The reciprocal bid in EUR per USD is closest to:',[
 ['0.80645.','Das ist der inverse Briefkurs aus 1/1,24.'],['0.79365.','Inverse Geldseite = 1/ursprünglicher Briefkurs.'],['1.25000.','Das ist weder der Kehrwert noch eine Geldseite.']
 ],1,[eq('S_{EUR/USD}^{bid}=1/1{,}26\\approx0{,}79365','Beim Invertieren wechseln Geld- und Briefseite.','S_{EUR/USD}^{bid}','Geldkurs in EUR je USD.')],'bid-ask'),
 q('05','practice','a','Dealer quotes are 1.08/1.10 USD per EUR and 1.32/1.35 USD per GBP. The synthetic bid in EUR per GBP is:',[
 ['1.22222.','Das verwendet zwei Geldkurse statt eines ausführbaren Verkaufs- und Kaufwegs.'],['1.25000.','Das ist der synthetische Briefkurs.'],['1.20000.','GBP zum Geldkurs verkaufen, EUR zum Briefkurs kaufen: 1,32/1,10.']
 ],2,[eq('S_{EUR/GBP}^{bid}=1{,}32/1{,}10=1{,}20','Eine verkaufte GBP-Einheit liefert 1,32 USD und damit 1,20 EUR.','S_{EUR/GBP}^{bid}','Synthetischer Geldkurs in EUR je GBP.')],'cross-spread'),
 q('06','practice','a','Quotes are 1.08/1.10 USD per EUR and 1.32/1.35 USD per GBP. The synthetic ask in EUR per GBP is:',[
 ['1.25000.','Benötigte 1,35 USD für ein GBP kosten 1,35/1,08 EUR.'],['1.20000.','Das ist die andere Handelsrichtung.'],['1.22727.','Das verwendet zwei Briefkurse und ignoriert den EUR-Verkauf zum Geldkurs.']
 ],0,[eq('S_{EUR/GBP}^{ask}=1{,}35/1{,}08=1{,}25','EUR werden gegen USD zum EUR-Geldkurs verkauft; GBP werden zum GBP-Briefkurs gekauft.','S_{EUR/GBP}^{ask}','Synthetischer Briefkurs in EUR je GBP.')],'cross-spread'),
 q('07','practice','a','The synthetic executable quote is 1.20/1.25 EUR per GBP. A direct dealer quotes 1.22/1.27 EUR per GBP. Before any additional costs:',[
 ['buying synthetically and selling directly earns 0.02 EUR per GBP.','Synthetischer Kauf kostet 1,25, direkter Verkauf liefert nur 1,22.'],['neither direction between the two quotes produces an arbitrage profit.','Direkt-Geld liegt unter synthetisch-Brief; synthetisch-Geld liegt unter Direkt-Brief.'],['buying directly and selling synthetically earns 0.05 EUR per GBP.','Direkter Kauf 1,27 und synthetischer Verkauf 1,20 erzeugen Verlust.']
 ],1,['Unterschiedliche Mittelkurse reichen für Arbitrage nicht aus. Die tatsächlich gegeneinander handelbaren Seiten sind zu vergleichen.'],'cross-spread'),
 q('08','practice','a','Executable quotes are 1.08/1.10 USD per EUR, 1.32/1.35 USD per GBP, and 1.27/1.29 EUR per GBP. Starting with 100,000 EUR, sell EUR for USD, buy GBP, then sell GBP for EUR. The profit before additional costs is:',[
 ['2,000 EUR.','Das ist nicht das Ergebnis der drei angegebenen Handelsseiten.'],['−1,550 EUR.','Die gewählte Runde verwendet nicht die teurere direkte GBP-Kaufseite.'],['1,600 EUR.','100.000 × 1,08/1,35 × 1,27 − 100.000.']
 ],2,[eq('\\Pi=100000(1{,}08/1{,}35\\cdot1{,}27-1)=1600','Der Weg führt über 108.000 USD und 80.000 GBP zurück zu 101.600 EUR.','\\Pi','Rundtauschgewinn in EUR.')],'triangular'),
 q('09','practice','b','Spot is 1.40 domestic units per foreign unit. One-year effective rates are 6% domestic and 3% foreign. Ignoring spreads, the covered-parity forward is closest to:',[
 ['1.44078.','1,40 × 1,06/1,03.'],['1.36038.','Das vertauscht Zähler und Nenner.'],['1.44200.','Das verwendet die additive Zinsdifferenznäherung statt der exakten Relation.']
 ],0,[eq('F=1{,}40\\cdot1{,}06/1{,}03\\approx1{,}44078','Preiswährungszins im Zähler; Basiswährungszins im Nenner.','F','Einjahres-Terminkurs in D je F.')],'covered-parity'),
 q('10','practice','b','A one-year foreign-currency deposit pays 2%; the domestic deposit pays 5%. Under frictionless covered interest parity, with the quote in domestic units per foreign unit, the foreign currency trades at a:',[
 ['forward discount because its interest rate is lower.','Der niedrigere Zins wird durch einen Terminaufschlag ausgeglichen.'],['forward premium.','(1,05/1,02) > 1.'],['zero forward premium because credit risk is absent.','Auch ohne Kreditrisiko erzeugt der Zinsunterschied einen Terminunterschied.']
 ],1,['Die Aussage betrifft einen heute festgelegten Terminpreis und keine Vorhersage einer späteren Aufwertung.'],'covered-parity'),
 q('11','practice','b','Spot is 1.50 D per F. One-year borrowing and lending rates are 4% in D and 2% in F. The market forward is 1.55 D per F. Borrow 150,000 D, buy and invest F, and sell the maturity F amount forward. The maturity profit in D is:',[
 ['5,000.','Das ignoriert beide Zinszahlungen.'],['3,000.','Das berücksichtigt den endgültigen Terminverkauf nicht vollständig.'],['2,100.','102.000 F × 1,55 − 150.000 D × 1,04.']
 ],2,[eq('\\Pi_D=100000\\cdot1{,}02\\cdot1{,}55-150000\\cdot1{,}04=2100','Alle F-Zahlungen sind gedeckt; der verbleibende Überschuss liegt in D.','\\Pi_D','Modell-Arbitragegewinn bei Fälligkeit in D.')],'covered-arbitrage'),
 q('12','practice','b','Spot is 1.50 D per F. One-year rates are 4% D and 2% F with no spreads. The forward is 1.48 D per F. Borrow 100,000 F, sell spot, invest D, and buy the F repayment forward. The maturity profit in D is:',[
 ['5,040.','150.000 × 1,04 − 102.000 × 1,48.'],['2,000.','Das ist nur die Spot-Forward-Differenz auf den Anfangsbetrag.'],['6,000.','Das sind die D-Zinsen ohne Fremdwährungskreditrückzahlung.']
 ],0,[eq('\\Pi_D=150000\\cdot1{,}04-100000\\cdot1{,}02\\cdot1{,}48=5040','Der günstige Terminkauf liefert die gesamte verzinste F-Verbindlichkeit.','\\Pi_D','Überschuss in D nach Rückzahlung aller Kredite.')],'covered-arbitrage'),
 q('13','practice','b','Spot is 0.90 D per F. Simple annualized rates are 8% D and 4% F. For a quarter-year with T = 0.25, the parity forward is closest to:',[
 ['0.93462.','Das verwendet volle Jahreszinsen trotz Vierteljahreslaufzeit.'],['0.90891.','0,90 × 1,02/1,01.'],['0.90900.','Das ist die Zinsdifferenznäherung.']
 ],1,[eq('F=0{,}90\\frac{1+0{,}08\\cdot0{,}25}{1+0{,}04\\cdot0{,}25}\\approx0{,}90891','Einfache Jahreszinsen werden mit dem angegebenen Jahresbruchteil skaliert.','F','Vierteljahres-Terminkurs in D je F.')],'tenor'),
 q('14','practice','b','Spot is 1.10 D per F. Effective annual rates are 9% D and 4% F. For T = 0.5 years under the effective compounding convention, the parity forward is closest to:',[
 ['1.15288.','Das verwendet die vollen effektiven Jahresfaktoren für eine Halbjahreslaufzeit.'],['1.12696.','Das wäre die Verwendung einfacher Halbjahreszinsen, nicht der angegebenen effektiven Jahreszinsen.'],['1.12613.','1,10 × Quadratwurzel aus 1,09/1,04.']
 ],2,[eq('F=1{,}10(1{,}09/1{,}04)^{0{,}5}\\approx1{,}12613','Die effektiven Jahresfaktoren werden auf die halbe Laufzeit potenziert.','F','Halbjahres-Terminkurs in D je F.')],'tenor'),
 q('15','practice','b','Spot is 1.0720. Forward points are explicitly −18, with each point equal to 0.0001 in the same quote. The outright forward is:',[
 ['1.0702.','1,0720 − 0,0018.'],['1.0738.','Das ignoriert das negative Vorzeichen.'],['1.0540.','Das verwendet eine zehnfach zu große Punkteinheit.']
 ],0,[eq('F=1{,}0720-18\\cdot0{,}0001=1{,}0702','Punkte sind zunächst in Kurseinheiten umzuwandeln.','F','Outright-Terminkurs.')],'points'),
 q('16','practice','b','Spot bid/ask is 1.2000/1.2003. Signed forward points are bid +12 and ask +17, each point 0.0001. The forward ask is:',[
 ['1.2012.','Das ist die Forward-Geldseite.'],['1.2020.','1,2003 + 0,0017.'],['1.2017.','Das addiert Briefpunkte zur falschen Kassaseite.']
 ],1,[eq('F^{ask}=1{,}2003+17\\cdot0{,}0001=1{,}2020','Briefpunkte werden hier zur ausdrücklich zugeordneten Kassa-Briefseite addiert.','F^{ask}','Outright-Terminbriefkurs.')],'points'),
 q('17','practice','b','Spot is 1.25 D per F and the six-month forward is 1.275 D per F. The simple annualized forward premium on F is:',[
 ['2.00%.','Das ist der Aufschlag für sechs Monate.'],['4.04%.','Das ist eine effektive Annualisierung.'],['4.00%.','(1,275/1,25 − 1)/0,5.']
 ],2,[eq('f_{ann}=\\frac{1{,}275/1{,}25-1}{0{,}5}=4\\%','Gefragt ist ausdrücklich einfache Annualisierung.','f_{ann}','Einfach annualisierter Terminaufschlag.')],'points'),
 q('18','practice','b','Spot is 1.25 D per F and the six-month forward is 1.275 D per F. In the reciprocal quote, the six-month forward premium or discount on D is closest to:',[
 ['−1.96%.','1,25/1,275 − 1.'],['−2.00%.','Das kehrt nur das Vorzeichen um, nicht den Nenner.'],['+2.00%.','Das beschreibt F in der ursprünglichen Quote.']
 ],0,[eq('f_D=1{,}25/1{,}275-1\\approx-1{,}9608\\%','Inverse Quote und Annualisierung sind unterschiedliche Operationen; hier wird nicht annualisiert.','f_D','Sechsmonatiger Terminabschlag von D in F.')],'points'),
 q('19','practice','b','With spot fixed and flat effective annual interest rates, the domestic rate exceeds the foreign rate. In a D-per-F quote, extending maturity from one to two years causes the parity forward to:',[
 ['fall below the spot rate.','Bei höherem D-Zins liegt der Aufzinsungsquotient über eins.'],['rise further above spot under these assumptions.','Ein Faktor über eins wird über eine längere Laufzeit aufgezinst.'],['remain equal to its one-year value.','Das würde die zusätzliche Zinsperiode ignorieren.']
 ],1,['Die Aussage hält beide Zinskurven ausdrücklich flach. Bei tatsächlichen Laufzeitstrukturen sind die jeweiligen Faktoren einzusetzen.'],'carry-curve'),
 q('20','practice','b','Spot ask is 1.02 D per F. One-year D borrowing costs 6% and F lending earns 2%. Before other costs, the upper bound for an executable forward bid in D per F is closest to:',[
 ['1.04.','Das addiert einen Zinsunterschied ohne konsistente Faktoren.'],['1.08.','Das addiert den vollen D-Zins zum Kurs und ignoriert F-Zinsen.'],['1.06.','1,02 × 1,06/1,02.']
 ],2,[eq('F_{max}^{bid}=1{,}02\\cdot1{,}06/1{,}02=1{,}06','Die spätere F-Lieferung wird zum Kassa-Briefkurs beschafft und in D finanziert.','F_{max}^{bid}','Obere Arbitragegrenze des Termin-Geldkurses in D je F.')],'funding-bounds'),
 q('21','practice','b','A domestic exporter will receive 80,000 F and sells that amount forward at 1.30 D per F. At maturity spot is 1.18. Ignoring credit and transaction costs, total domestic proceeds are:',[
 ['104,000.','Der festgelegte Erlös ist 80.000 × 1,30.'],['94,400.','Das ist der ungedeckte Kassawert ohne Terminposition.'],['9,600.','Das ist nur der wirtschaftliche Forward-Gewinn.']
 ],0,[eq('V_D=80000\\cdot1{,}18+80000(1{,}30-1{,}18)=104000','Der Terminverkauf gleicht den niedrigeren Kassawert aus.','V_D','Gesamter abgesicherter Erlös in D.')],'hedge'),
 q('22','practice','b','A firm sells its expected foreign revenue forward, but the underlying customer order is later cancelled. The most immediate implication is:',[
 ['the forward obligation necessarily disappears with the sales forecast.','Der eigenständige Vertrag bleibt grundsätzlich bestehen.'],['the firm may now have an unoffset foreign-currency delivery obligation.','Der geplante Eingang als Deckung fehlt.'],['the forward has become an option with no obligation to perform.','Ein Forward wird durch Umsatzunsicherheit nicht zur Option.']
 ],1,['Ein perfekter Hedge eines sicheren Betrags kann bei unsicherer Menge eine zusätzliche offene Position hinterlassen.'],'hedge'),
 q('23','practice','b','A forward differs from an analyst forecast of the future spot rate. Which conclusion is most appropriate?',[
 ['Covered interest parity must be violated.','CIP hängt nicht von der individuellen Prognose ab.'],['The analyst forecast must equal the forward by definition.','Das wäre eine zusätzliche Erwartungsannahme.'],['The difference alone does not establish covered arbitrage.','Eine Prognose ist kein vertraglich gesicherter Umtauschkurs.']
 ],2,['Ein Vergleich riskanter erwarteter Erträge ist von einer Strategie mit feststehenden gedeckten Zahlungsströmen zu trennen.'],'interpretation'),
 q('24','practice','b','An investor earns a higher foreign deposit rate than the domestic borrowing rate and leaves the currency exposure unhedged. The strategy can lose money primarily because:',[
 ['adverse exchange-rate changes can outweigh the interest differential.','Der Rücktauschkurs ist nicht festgelegt.'],['the interest differential alone is always negative.','Die Aufgabe gibt einen positiven Zinsunterschied vor.'],['a higher foreign rate eliminates exchange-rate volatility.','Zinsniveau und Wechselkursrisiko sind nicht dasselbe.']
 ],0,['Das ist eine riskante Carry-Position. Eine vollständige Terminabsicherung berücksichtigt einen anderen, heute festgelegten Endkurs.'],'interpretation'),
 q('a1','mock-a','a','Quotes are 146/148 JPY per USD and 1.18/1.20 USD per EUR. An importer must buy EUR using JPY. The executable synthetic ask in JPY per EUR is:',[
 ['172.28.','Das ist die synthetische Geldseite aus 146 × 1,18.'],['174.64.','Das verwendet den EUR-Geldkurs, obwohl EUR gekauft werden müssen.'],['177.60.','Für 1 EUR sind 1,20 USD nötig, die jeweils 148 JPY kosten.']
 ],2,[eq('S_{JPY/EUR}^{ask}=148\\cdot1{,}20=177{,}60','Hier werden zwei Kaufwege mit passender Einheitenkürzung multipliziert. Die Notierungen haben keine gemeinsame Preiswährung, die eine Division verlangen würde.','S_{JPY/EUR}^{ask}','Ausführbarer synthetischer Briefkurs in JPY je EUR.')],'cross-rates'),
 q('b1','mock-b','b','Spot is 1.25 D per F and the six-month forward is 1.26 D per F. The foreign simple annualized rate is 4%, T = 0.5, and covered interest parity holds without spreads. The implied domestic simple annualized rate is closest to:',[
 ['5.60%.','Das ist nur die Näherung aus Auslandszins plus annualisiertem Forwardaufschlag.'],['5.63%.','[(1,26/1,25) × 1,02 − 1]/0,5.'],['2.82%.','Das ist der implizite Zuwachs für sechs Monate, noch nicht annualisiert.']
 ],1,[eq('i_D=\\frac{(1{,}26/1{,}25)(1+0{,}04\\cdot0{,}5)-1}{0{,}5}=5{,}632\\%','Der heimische Halbjahres-Aufzinsungsfaktor ist 1,02816. Der einfache Jahreszins ergibt sich durch Division des Zuwachses durch 0,5.','i_D','Impliziter einfacher heimischer Jahreszins.')],'tenor')
];
