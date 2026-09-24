const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('fxm-'+id,'fx-markets','economics',pool,los,stem,options,correct,solution,{section});
const eq=(tex,reading,symbol,meaning)=>F(tex,reading,[[symbol,meaning]]);
module.exports=[
 q('01','practice','a','A rate is explicitly quoted as 1.25 USD per EUR. Ignoring transaction costs, 800 EUR are worth:',[
 ['640 USD.','Division würde einen USD-Betrag in EUR umrechnen.'],['1,000 USD.','800 × 1,25.'],['800 USD.','Das unterstellt ohne Grundlage Parität.']
 ],1,[eq('V_{USD}=800\\cdot1{,}25=1000','EUR kürzt sich bei Multiplikation mit USD je EUR heraus.','V_{USD}','Wert des EUR-Betrags in USD.')],'quotation'),
 q('02','practice','a','A currency is quoted at 1.60 domestic units per foreign unit. The reciprocal quote, in foreign units per domestic unit, is:',[
 ['0.625.','1/1,60.'],['0.600.','Das ist die Differenz zu eins, nicht der Kehrwert.'],['1.600.','Die Einheit wird gewechselt; die Zahl kann hier nicht gleich bleiben.']
 ],0,[eq('S_{F/D}=1/1{,}60=0{,}625','Eine Einheit D kauft weniger als eine Einheit F.','S_{F/D}','Kurs in F je D.')],'quotation'),
 q('03','practice','a','The rate moves from 0.80 to 0.88 domestic units per foreign unit. The foreign currency has:',[
 ['depreciated by 9.09%.','Das beschreibt näherungsweise die heimische Gegenwährung, nicht F.'],['appreciated by 8.00%.','Die absolute Kursdifferenz wird fälschlich als Prozentsatz gelesen.'],['appreciated by 10.00%.','0,88/0,80 − 1.']
 ],2,[eq('g_F=0{,}88/0{,}80-1=10\\%','Eine Einheit F kauft jetzt mehr D.','g_F','Wertänderung von F in D.')],'changes'),
 q('04','practice','a','The rate rises from 0.80 to 0.88 domestic units per foreign unit. The domestic currency return measured in foreign currency is closest to:',[
 ['−10.00%.','Das ist nur die Vorzeichennäherung.'],['−9.09%.','0,80/0,88 − 1.'],['+10.00%.','Das ist die Änderung der anderen Währung.']
 ],1,[eq('g_D=0{,}80/0{,}88-1\\approx-9{,}0909\\%','Die inverse Notierung hat einen anderen prozentualen Nenner.','g_D','Wertänderung von D in F.')],'changes'),
 q('05','practice','a','Define the real exchange rate as q = S PF/PD, with S in domestic units per foreign unit. If S = 2, PF = 80 and PD = 200, q equals:',[
 ['0.80.','2 × 80/200.'],['1.25.','Das ist der Kehrwert der ausdrücklich definierten Größe.'],['5.00.','Preisniveaus sind vertauscht.']
 ],0,[eq('q=2\\cdot80/200=0{,}8','Der ausländische Korb kostet umgerechnet 160 D gegenüber 200 D für den heimischen Korb.','q','Relative Kosten des ausländischen Korbs nach der angegebenen Konvention.')],'real-rate'),
 q('06','practice','a','For q = S PF/PD, the nominal rate S is unchanged. Foreign prices rise 8% and domestic prices rise 3%. The percentage change in q is closest to:',[
 ['5.00%.','Das ist die additive Näherung.'],['−4.63%.','Das vertauscht den relativen Preisfaktor.'],['4.85%.','1,08/1,03 − 1.']
 ],2,[eq('q_1/q_0-1=1{,}08/1{,}03-1\\approx4{,}8544\\%','Fremde Güter werden relativ teurer; D wertet nach dieser Konvention real ab.','q_1/q_0-1','Reale Wechselkursänderung.')],'real-rate'),
 q('07','practice','a','A real effective exchange-rate index is normalized to 100 in a base year and is now 112. Without a model of equilibrium value, this alone establishes:',[
 ['a fundamental overvaluation of exactly 12%.','Das Basisjahr muss kein Gleichgewichtsjahr sein.'],['a 12% increase in the defined index relative to its base.','Die Normierung erlaubt diesen Zeitvergleich.'],['a 12% appreciation against every individual partner.','Der effektive Index aggregiert verschiedene bilaterale Entwicklungen.']
 ],1,['Für die wirtschaftliche Richtung ist zusätzlich zu klären, ob ein Indexanstieg Auf- oder Abwertung bedeutet.'],'effective-rate'),
 q('08','practice','a','A geometric currency-value index uses equal weights on two partners. The domestic currency gains 20% against one and loses 20% against the other. The index return is closest to:',[
 ['0.00%.','Das wäre das arithmetische Mittel, nicht der geometrische Index.'],['−4.00%.','Das ist das Produkt minus eins ohne die Quadratwurzel.'],['−2.02%.','Quadratwurzel aus 1,20 × 0,80 minus eins.']
 ],2,[eq('g_I=\\sqrt{1{,}20\\cdot0{,}80}-1\\approx-2{,}0204\\%','Gleich große entgegengesetzte Prozentänderungen heben sich geometrisch nicht auf.','g_I','Veränderung des definierten effektiven Index.')],'effective-rate'),
 q('09','practice','a','An importer must pay a fixed foreign-currency invoice in six months and wants to fix the domestic-currency cost now. The most direct instrument is:',[
 ['a forward purchase of the invoice currency for the payment date.','Menge und Fälligkeit entsprechen der Zahlungspflicht.'],['a spot sale of the invoice currency without an offsetting asset.','Das ist die falsche Richtung und sichert den späteren Kauf nicht.'],['an uncovered position in an unrelated currency.','Dadurch wird eine andere Währungsposition aufgebaut.']
 ],0,['Ein passender Forward fixiert den Tauschpreis vertraglich. Kredit- und Sicherheitenbedingungen bleiben zu berücksichtigen.'],'instruments'),
 q('10','practice','a','A foreign investment earns 6% in its local currency with no interim cash flows. The local currency loses 12% of its value in the investor home currency. The home-currency return is:',[
 ['−6.00%.','Das addiert Renditen und ignoriert den Kreuzterm.'],['−6.72%.','1,06 × 0,88 − 1.'],['+18.72%.','Die Währungsänderung hat das falsche Vorzeichen.']
 ],1,[eq('R_D=1{,}06\\cdot0{,}88-1=-6{,}72\\%','Die Währungsbewegung betrifft den gesamten Endwert einschließlich lokaler Rendite.','R_D','Rendite in heimischer Währung.')],'instruments'),
 q('11','practice','a','A dealer quotes a bid and an ask. A customer assumes every trade can execute at their arithmetic midpoint. This assumption most directly ignores:',[
 ['the definition of a foreign currency.','Die Währungseinheiten können trotzdem korrekt bezeichnet sein.'],['the existence of a maturity date for every asset.','Die konkrete Schwäche ist der Ausführungspreis.'],['the difference between an indicative midpoint and executable prices.','Der Mittelwert ist nicht automatisch ein handelbarer Kurs.']
 ],2,['Für Erträge, Absicherung und Arbitrage sind passende Geld- und Briefseiten sowie verfügbare Mengen relevant.'],'participants'),
 q('12','practice','b','A government announces a fixed parity, but persistent interventions allow a materially different rate pattern in practice. A regime assessment should distinguish:',[
 ['the announced de jure regime from the observed de facto behavior.','Formelle Zusage und tatsächliche Umsetzung können auseinanderfallen.'],['only the nominal value of a single currency unit.','Ein einzelnes Kursniveau beschreibt kein Regime.'],['the exchange-rate regime from any observations of intervention.','Interventionen sind gerade relevante Evidenz.']
 ],0,['Die Einordnung benötigt einen Beobachtungszeitraum und ein klares Klassifikationsschema.'],'regimes'),
 q('13','practice','b','A currency board generally differs from a discretionary floating regime most directly through:',[
 ['the absence of any domestic monetary liabilities.','Ein Currency Board kann heimische monetäre Verbindlichkeiten emittieren.'],['a commitment to convert domestic currency at a fixed rate supported by specified reserve backing.','Regelgebundene Konvertibilität und Reservebindung kennzeichnen das Grundprinzip.'],['a requirement to reset the parity every trading day.','Das widerspricht einer festen Bindung.']
 ],1,['Die konkrete rechtliche Ausgestaltung kann variieren. Eine Bindung schränkt autonome Geldschöpfungs- und Stabilisierungsmöglichkeiten ein.'],'regimes'),
 q('14','practice','b','A central bank defends its currency against depreciation pressure by selling foreign reserves and buying domestic currency. Before sterilization, the direct monetary effect is most likely:',[
 ['an increase in domestic base money.','Der Ankauf heimischer Währung zieht diese zunächst ab.'],['no change in the bank reserve assets.','Die Zentralbank verkauft ausdrücklich Devisenreserven.'],['a contraction in domestic base money.','Die heimische Liquidität wird durch den Währungsankauf reduziert.']
 ],2,['Eine zusätzliche gegenläufige Offenmarktoperation kann den Liquiditätseffekt sterilisieren. Die Reserveverwendung und Glaubwürdigkeit sind davon getrennt.'],'policy-constraint'),
 q('15','practice','b','With a credible fixed exchange rate and highly mobile capital, a country generally cannot also maintain:',[
 ['fully independent monetary policy under the same idealized conditions.','Die Kombination bildet das Trilemma.'],['any cross-border trade in goods.','Die Bindung verbietet Warenhandel nicht.'],['a domestic banking system.','Banken sind auch bei gebundenen Kursen möglich.']
 ],0,['Risiko, Kapitalbeschränkungen oder unvollständige Glaubwürdigkeit verändern die Bedingungen, unter denen die enge Zinsbindung gilt.'],'policy-constraint'),
 q('16','practice','b','Initially exports and imports are each worth 200 in domestic currency. The domestic currency depreciates 5%. Export prices in domestic currency, import prices in foreign currency, and quantities are initially fixed. The immediate trade balance is:',[
 ['+10.','Importe werden in heimischer Währung teurer, nicht billiger.'],['−10.','Exportwert bleibt 200, Importwert steigt auf 210.'],['0.','Das ignoriert die Umrechnung der Importpreise.']
 ],1,[eq('B=200-200\\cdot1{,}05=-10','Der sofortige Preiseffekt kann vor einer Mengenreaktion die Handelsbilanz verschlechtern.','B','Handelsbilanz in heimischer Währung.')],'trade-effects'),
 q('17','practice','b','Starting from balanced trade with full pass-through, absolute export- and import-demand elasticities are 0.7 and 0.5. In the standard small-change Marshall–Lerner analysis, depreciation is associated with:',[
 ['deterioration because each elasticity separately is below one.','Entscheidend ist unter diesen Annahmen ihre Summe.'],['no change because the initial trade balance is zero.','Das Ausgangsgleichgewicht schließt eine Reaktion nicht aus.'],['improvement after the assumed quantity adjustment.','0,7 + 0,5 > 1.']
 ],2,['Der Schluss gilt unter den ausdrücklich genannten Preis-, Ausgangsbilanz- und Anpassungsannahmen; er ist keine sofortige unbedingte Prognose.'],'trade-effects'),
 q('18','practice','a b','A company has domestic-currency assets of 500 and foreign debt of 150 units. The exchange rate rises from 2 to 2.4 domestic units per foreign unit. Assets are unchanged and there is no hedge. Its equity changes by:',[
 ['−30.00%.','Anfangs 500 − 300 = 200; danach 500 − 360 = 140.'],['−20.00%.','Das ist die Kursänderung, nicht die gehebelte Eigenkapitaländerung.'],['−12.00%.','Das teilt den Verlust durch die Aktiva statt durch anfängliches Eigenkapital.']
 ],0,[eq('g_E=(500-150\\cdot2{,}4)/(500-150\\cdot2)-1=-30\\%','Unveränderte Aktiva treffen auf eine höhere heimische Schuldenlast.','g_E','Relative Eigenkapitaländerung.')],'capital-flows'),
 q('19','practice','c','A country restricts short-term foreign-currency inflows to limit volatile leveraged borrowing. An appropriate assessment recognizes:',[
 ['that the measure removes the need for domestic financial supervision.','Kapitalregeln ersetzen keine angemessene Aufsicht.'],['the stability objective and possible costs to financing access and efficiency.','Ziel und Nebenwirkungen gehören gemeinsam in die Bewertung.'],['that every type of foreign investment is necessarily prohibited.','Die beschriebene Regel zielt auf eine bestimmte Finanzierungsform.']
 ],1,['Gestaltung, Umgehung, Durchsetzung und die zugrunde liegenden makroökonomischen Schwächen beeinflussen die Wirkung.'],'capital-controls'),
 q('20','practice','c','Temporary outflow controls are introduced during an external financing crisis. Which inference is least justified?',[
 ['The controls may reduce some immediate outflow pressure.','Das kann ihr kurzfristiges Ziel sein.'],['The controls may affect investor confidence and future funding costs.','Diese Folgewirkungen sind plausibel.'],['The controls by themselves establish that the underlying solvency problem is resolved.','Eine Transferbeschränkung schafft keine fehlenden realen Rückzahlungsressourcen.']
 ],2,['Liquiditätsdruck, Transfermöglichkeit und Solvenz müssen getrennt geprüft werden.'],'capital-controls'),
 q('a1','mock-a','a','An asset costs 100 foreign units when the rate is 1.50 home units per foreign unit. A distribution of 5 foreign units is immediately converted at 1.40 and held as non-interest-bearing home cash. The asset is sold for 100 foreign units at a rate of 1.35. The home-currency holding-period return is closest to:',[
 ['−5.33%.','(100 × 1,35 + 5 × 1,40)/150 − 1.'],['−5.50%.','Das rechnet die frühere Ausschüttung fälschlich zum Endkurs um.'],['−10.00%.','Das lässt die Ausschüttung weg.']
 ],0,[eq('R_H=\\frac{100\\cdot1{,}35+5\\cdot1{,}40}{100\\cdot1{,}50}-1\\approx-5{,}3333\\%','Der Endbestand ist 142 in Heimatwährung: Verkauf 135 plus bereits umgerechnete Ausschüttung 7.','R_H','Haltedauerrendite in Heimatwährung.')],'instruments'),
 q('b1','mock-b','a','Define q = S PF/PD with S in domestic units per foreign unit. Over a year q rises 3%, foreign prices rise 4%, and domestic prices rise 2%. The nominal change of the foreign currency against the domestic currency is closest to:',[
 ['1.00% appreciation.','Das ist die additive Näherung aus 3 − 4 + 2.'],['1.02% appreciation.','1,03 × 1,02/1,04 − 1; S steigt, also wird F in D teurer.'],['5.02% appreciation.','Die relative Preisentwicklung muss aus der realen Änderung herausgerechnet werden.']
 ],1,[eq('S_1/S_0-1=1{,}03\\cdot1{,}02/1{,}04-1\\approx1{,}0192\\%','Die Aufgabe gibt die reale Änderung vor. Zur nominalen Änderung wird der heimische Preisfaktor multipliziert und der ausländische dividiert.','S_1/S_0-1','Nominale Wertänderung von F in D.')],'real-rate')
];
