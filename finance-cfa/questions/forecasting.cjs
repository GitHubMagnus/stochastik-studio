const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('fm-'+id,'forecasting','statements',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a','Reported operating profit is €175 million on sales of €1,250 million. It includes a non-recurring gain of €40 million and a genuinely non-recurring expense of €15 million. Excluding both for the stated forecast, normalized operating margin is:',[
 ['12.00%','Normalisierter Gewinn 150 auf Umsatz 1.250.'],
 ['14.00%','Dies ist die unbereinigte gemeldete Marge.'],
 ['15.20%','Dies entfernt nur den Aufwand und behält den Sondergewinn.']
 ],0,[F('m=\\frac{175-40+15}{1250}=12\\%','Einmaliger Ertrag wird entfernt, einmaliger Aufwand für diese Prognose zurückgenommen.',[['m','Normalisierte operative Marge.']])],'historical-base'),
 q('02','practice','a d','A single product’s price rises 8% while unit volume falls 3%. There are no other revenue effects. Revenue growth is:',[
 ['4.76%','Die Preis- und Mengenfaktoren werden miteinander multipliziert.'],
 ['5.00%','Dies addiert die Änderungen und lässt den negativen Kreuzterm weg.'],
 ['11.00%','Der Mengenrückgang wird fälschlich wie Wachstum behandelt.']
 ],0,[F('g_S=1{,}08\\cdot0{,}97-1=4{,}76\\%','Preiserhöhung auf eine kleinere Menge wirkt anders als eine reine additive Überschlagsrechnung.',[['g_S','Umsatzwachstum.']])],'sales-drivers'),
 q('03','practice','a','A market’s annual sales grow from €12,000 million to €12,600 million. A company’s value-based share rises from 7% to 8%, on the same market definition. Company sales growth is:',[
 ['6.00%','Dies addiert 5 % Marktwachstum und einen Prozentpunkt Anteil ohne richtige Bezugsbasis.'],
 ['19.29%','Dies addiert 5 % und die relative Anteilsänderung, lässt aber ihren Kreuzterm weg.'],
 ['20.00%','Umsatz steigt von 840 auf 1.008.']
 ],2,[F('g_S=\\frac{12600\\cdot0{,}08}{12000\\cdot0{,}07}-1=20\\%','Marktanteilsniveau, Prozentpunktänderung und relatives Anteilswachstum werden getrennt.',[['g_S','Unternehmensumsatzwachstum.']])],'industry-company'),
 q('04','practice','a','A company sells 200 units at €80, with variable cost €45 per unit, fixed cash operating cost €3,000 and depreciation €1,000. Volume rises to 220 with all prices, unit costs and fixed amounts unchanged. Forecast EBIT is:',[
 ['€3,300','Dies erhöht den bisherigen EBIT 3.000 nur proportional zur Menge.'],
 ['€3,700','Zusätzliche 20 Stück tragen je 35 zum unveränderten Fixkostenblock bei.'],
 ['€4,700','Die Abschreibung wurde ausgelassen.']
 ],1,[F('EBIT=220(80-45)-3000-1000=3700','Innerhalb der angenommenen Kapazität bleibt der Fixkostenbetrag gleich.',[['EBIT','Operativer Gewinn in Euro.']])],'cost-drivers'),
 q('05','practice','a','Existing equipment is forecast to incur €35 million depreciation. New equipment costing €140 million has a seven-year straight-line life, zero residual value, and becomes available exactly halfway through the year. Total forecast depreciation is:',[
 ['€45 million','35 Altabschreibung plus 10 für das halbe erste Nutzungsjahr.'],
 ['€55 million','Für den Zugang wurde ein ganzes Nutzungsjahr statt eines halben angesetzt.'],
 ['€175 million','Der vollständige Anlagenkauf wurde als zusätzliche Abschreibung behandelt.']
 ],0,[F('D=35+\\frac{140}{7}\\cdot0{,}5=45','Auszahlung, aktivierter Zugang und Jahresverbrauch haben verschiedene Zeitbezüge.',[['D','Gesamte Jahresabschreibung in Mio. Euro.']])],'atlas-assets'),
 q('06','practice','a','Receivables rise from €80 million to €104 million, inventory from €60 million to €75 million, and trade payables from €50 million to €59 million. There are no other working-capital items. The increase in operating NWC is:',[
 ['€30 million','24 Forderungen plus 15 Vorräte minus 9 zusätzliche Lieferantenfinanzierung.'],
 ['€48 million','Der Verbindlichkeitsaufbau wurde als zusätzliche Mittelbindung addiert.'],
 ['€120 million','Das ist der Schlussbestand 104 + 75 − 59, nicht die Veränderung.']
 ],0,[F('\\Delta NWC=(104-80)+(75-60)-(59-50)=30','Für die Cashflowüberleitung zählt die Periodenänderung.',[['\\Delta NWC','Zusätzliche operative Nettokapitalbindung in Mio. Euro.']])],'working-capital'),
 q('07','practice','a','Forecast credit sales are €900 million; opening and closing receivables are €70 million and €95 million. No losses, acquisitions or other changes occur. Customer cash collections are:',[
 ['€875 million','25 des Umsatzes erhöhen die noch offenen Forderungen.'],
 ['€900 million','Die zusätzliche Forderungsbindung wurde ignoriert.'],
 ['€925 million','Der Forderungsanstieg wurde mit umgekehrtem Vorzeichen verarbeitet.']
 ],0,[F('R=900+70-95=875','Ein höherer Endbestand bedeutet bei sonst gleichen Bedingungen weniger eingegangene Zahlung.',[['R','Kundeneinzahlungen in Mio. Euro.']])],'atlas-cash'),
 q('08','practice','a','COGS are €500 million. Inventory rises from €60 million to €75 million and trade payables from €50 million to €59 million. Assume the same goods scope, no depreciation in COGS, and no other movements. Cash paid to suppliers is:',[
 ['€491 million','Dies behandelt COGS als Einkäufe und lässt den Lageraufbau weg.'],
 ['€506 million','Einkäufe 515 abzüglich zusätzlicher offener Lieferantenrechnungen 9.'],
 ['€524 million','Die Lieferantenverbindlichkeitszunahme wurde zusätzlich ausgezahlt statt als Finanzierung abgezogen.']
 ],1,[F('Purch=500+75-60=515,\\quad Paid=515+50-59=506','Erst vom Verbrauch zu den Einkäufen, danach von Einkäufen zur Zahlung überleiten.',[['Purch','Einkäufe in Mio. Euro.'],['Paid','Lieferantenzahlungen in Mio. Euro.']])],'atlas-cash'),
 q('09','practice','a','Forecast net income is €90 million, depreciation €25 million, and operating NWC increases €30 million. All interest and tax are paid and included in CFO; no other adjustments exist. CFO is:',[
 ['€85 million','Gewinn plus nicht zahlungswirksamer Verbrauch minus neue Kapitalbindung.'],
 ['€95 million','Dies vertauscht die Vorzeichen von Abschreibung und Working Capital.'],
 ['€145 million','Die zusätzliche Kapitalbindung wurde als Geldquelle addiert.']
 ],0,[F('CFO=90+25-30=85','Die drei Größen müssen dieselbe operative und periodische Abgrenzung verwenden.',[['CFO','Operativer Cashflow in Mio. Euro.']])],'atlas-cash'),
 q('10','practice','a','Opening cash is €50 million, CFO €85 million, cash capex €70 million and cash dividends €30 million. With no other movements or new financing, ending cash is:',[
 ['€35 million','Anfangsgeld plus operativer Zufluss minus beide Zahlungsverwendungen.'],
 ['€65 million','Die Dividendenzahlung wurde ausgelassen.'],
 ['−€15 million','Dies verwendet nur 85 − 70 − 30 und lässt die vorhandenen 50 Anfangscash weg.']
 ],0,[F('C_1=50+85-70-30=35','Gewinn oder Abschreibung werden nicht zusätzlich zu einem bereits hergeleiteten CFO addiert.',[['C_1','Endcash in Mio. Euro.']])],'atlas-cash'),
 q('11','practice','a','Opening equity is €300 million. Forecast net income is €90 million and dividends €30 million. There is no issuance, repurchase, OCI or other equity movement. Ending equity is:',[
 ['€420 million','Die Dividende wurde zum Eigenkapital addiert statt davon abgezogen.'],
 ['€360 million','Der einbehaltene Teil des Gewinns beträgt 60.'],
 ['€390 million','Die Ausschüttung wurde nicht vom Eigenkapital abgezogen.']
 ],1,[F('E_1=300+90-30=360','Eine Dividende vermindert Eigenkapital nach der Gewinnentstehung.',[['E_1','Endeigenkapital in Mio. Euro.']])],'atlas-balance'),
 q('12','practice','a','Forecast ending cash before additional financing is −€12 million. The required minimum ending cash is €25 million. Assume new debt is available at year-end without current-year interest effects. The necessary new borrowing is:',[
 ['€13 million','Die negative Ausgangsposition wurde bei der Differenzbildung nicht richtig berücksichtigt.'],
 ['€25 million','Dies finanziert das Mindestniveau, lässt aber die vorhandene Lücke 12 offen.'],
 ['€37 million','12 decken den ungedeckten Bedarf; weitere 25 schaffen das Mindestcash.']
 ],2,[F('B=25-(-12)=37','Negative Modellliquidität wird zuerst gedeckt, anschließend das positive Mindestniveau erreicht.',[['B','Zusätzliche Kreditaufnahme in Mio. Euro.']])],'funding'),
 q('13','practice','a','A funding need of €60 million excludes interest on new borrowing. New debt is outstanding for half a year on average at 10% annual interest; the 20% tax benefit is fully usable immediately. No other feedback exists. Total new borrowing required is:',[
 ['€60.00 million','Die eigene Nettozinswirkung des neuen Kredits fehlt.'],
 ['€62.40 million','Dies berechnet die Zinsen nur einmal auf den ursprünglichen Bedarf, nicht auf den endgültigen Kredit.'],
 ['€62.50 million','Vier Prozent des endgültigen Kredits erzeugen erneut zu finanzierende Nettozinsen.']
 ],2,[F('B=\\frac{60}{1-0{,}5\\cdot0{,}10(1-0{,}20)}=62{,}50','Gegenrechnung: 62,50 minus 2,50 Nettozins deckt die ursprünglichen 60.',[['B','Kreditbedarf einschließlich Zinsrückwirkung in Mio. Euro.']])],'circularity'),
 q('14','practice','a','A projected balance sheet differs by €17 million. The analyst inserts an unexplained other asset of €17 million to make it balance. The most appropriate assessment is:',[
 ['The balancing entry hides an unresolved model inconsistency.','Eine nicht begründete Vermögensposition ist keine sachgerechte Fehlerbehebung.'],
 ['The model is validated because assets now equal liabilities plus equity.','Die Gleichheit wurde künstlich erzeugt und beweist keine korrekten Verknüpfungen.'],
 ['The entry demonstrates that lenders have committed €17 million.','Eine Aktivbuchung belegt keine zugesagte Finanzierung.']
 ],0,['Anlagen-, Cash-, Eigenkapital- und Working-Capital-Überleitungen werden auf Vorzeichen und fehlende Bewegungen geprüft. Finanzierung braucht eine ausdrücklich modellierte Quelle.'],'atlas-balance'),
 q('15','practice','b','An analyst starts with management’s 25% growth forecast and makes only small adjustments despite having enough data for an independent estimate. The most directly relevant bias and remedy are:',[
 ['Anchoring; build an independent driver forecast before comparing it with guidance.','Eine eigene Ausgangsrechnung vermindert die Bindung an die zuerst gesehene Zahl.'],
 ['Confirmation bias; narrow the forecast range around management’s estimate.','Eine engere Bandbreite beseitigt die Bindung an die Ausgangszahl nicht.'],
 ['Conservatism; preserve the original estimate until the year ends.','Das Festhalten verschärft statt begrenzt die unzureichende Aktualisierung.']
 ],0,['Ein begründeter Vergleich kann danach erklären, warum Mengen, Preise oder Margen von der Guidance abweichen.'],'biases'),
 q('16','practice','b','An analyst seeks only customer evidence that supports a previously chosen expansion thesis. The most useful corrective practice is to:',[
 ['specify disconfirming evidence in advance and actively search for it.','Die Suche erhält einen Gegenpfad zur bevorzugten Erklärung.'],
 ['collect more examples exclusively from enthusiastic customers.','Mehr gleichgerichtete Auswahl behebt den Bestätigungsfehler nicht.'],
 ['replace every company estimate with the latest market price.','Ein Marktpreis liefert keine konkrete alternative Mengen- oder Kostenannahme.']
 ],0,['Der Analyst prüft die These anhand vorher benannter Gegenbeobachtungen. Eine begründete Schlussfolgerung darf bestätigt werden, aber die Suche soll nicht einseitig sein.'],'biases'),
 q('17','practice','b','Forecast ranges are consistently too narrow relative to the analyst’s observed out-of-sample errors. The strongest response is to:',[
 ['calibrate uncertainty against recorded forecast errors and relevant scenarios.','Die Bandbreite wird mit tatsächlich beobachteter Prognoseunsicherheit abgeglichen.'],
 ['add more decimal places to the central estimate.','Numerische Präzision verändert die zugrunde liegende Unsicherheit nicht.'],
 ['discard all outcomes outside the original range as irrelevant.','Gerade diese Abweichungen enthalten Information über fehlende Unsicherheit.']
 ],0,['Die Fehler müssen außerdem nach Zeitraum, Informationsstand und möglicher Strukturänderung untersucht werden. Eine breite Spanne ohne Ursachenanalyse ist ebenfalls unzureichend.'],'biases'),
 q('18','practice','b','Reliable new evidence shows that a company’s largest contract has been cancelled, but an analyst barely changes the old sales forecast. This most closely illustrates:',[
 ['insufficient updating of prior beliefs despite relevant new evidence.','Die bisherige Schätzung wird nicht angemessen an die veränderte Informationslage angepasst.'],
 ['appropriate prudence because forecasts should remain stable.','Stabilität ist kein Selbstzweck, wenn sich der Sachverhalt wesentlich ändert.'],
 ['proof that the original forecast was dishonest.','Neue Informationen machen die vorherige Schätzung nicht automatisch vorsätzlich falsch.']
 ],0,['Eine konsistente Revision identifiziert die betroffene Menge und Folgen für Preise, Kosten, Investitionen und Finanzierung.'],'biases'),
 q('19','practice','b','A proposed factory forecast is compared with outcomes of economically similar past factory launches. This outside view is most useful when:',[
 ['the reference group is relevant and complements project-specific evidence.','Passende Basisraten können systematischen Optimismus begrenzen, ohne alle Unterschiede zu ignorieren.'],
 ['the group is selected only from the most successful launches.','Das würde den gewünschten Optimismus in die Vergleichsbasis einbauen.'],
 ['its average is adopted regardless of differences in technology and market.','Eine ungeeignete Gruppe kann eine neue Verzerrung erzeugen.']
 ],0,['Produkt, Kapazität, Region, Wettbewerb und Anlaufstadium beeinflussen die Vergleichbarkeit. Auswahl und Abweichungen werden dokumentiert.'],'biases'),
 q('20','practice','c','A powerful customer offers higher unit volume but demands lower prices and longer payment terms. The company forecast should most appropriately reflect:',[
 ['the joint effects on revenue, margin and receivables financing.','Menge, Stückertrag und Zeitpunkt der Zahlung können in verschiedene Richtungen wirken.'],
 ['only the volume increase because demand is the driver of all profit.','Preis- und Finanzierungsfolgen sind ausdrücklich Teil des Angebots.'],
 ['an immediate reduction in all fixed costs equal to the price discount.','Der Rabatt verändert den Erlös, nicht automatisch den Fixkostenbetrag.']
 ],0,['Die wirtschaftliche Kette wird gemeinsam modelliert. Ein zusätzlicher Auftrag kann profitabel sein und trotzdem Cash binden.'],'competition'),
 q('21','practice','c','An essential component is available from only one supplier and switching takes two years. The forecast most directly needs to assess how this concentration affects:',[
 ['input prices, supply reliability and purchase terms.','Ein knapper, schwer ersetzbarer Lieferant kann Kosten und Beschaffungsbedingungen verändern.'],
 ['the accounting identity equating assets with liabilities and equity.','Die Bilanzidentität bleibt unabhängig von der Zahl der Lieferanten bestehen.'],
 ['historical cash amounts already paid for equipment.','Lieferantenmacht verändert keine bereits erfolgten historischen Zahlungen rückwirkend.']
 ],0,['Kontrakte, Ersatztechnik, Lagerstrategie und mögliche Weitergabe an Kunden bestimmen die tatsächliche Wirkung. Die Kraft allein liefert keinen exakten Preisprozentsatz.'],'competition'),
 q('22','practice','c','A new technology satisfies the same customer need through a different product with low switching costs. In a five-forces forecast, this most directly affects:',[
 ['the threat of substitutes and the incumbent’s sustainable pricing.','Eine andere Lösung für denselben Bedarf begrenzt die Zahlungsbereitschaft für das bisherige Angebot.'],
 ['only the accounting useful life of office furniture.','Die wesentliche Wirkung betrifft Kundenwahl, Absatz und Preis.'],
 ['only supplier payment dates, with no possible revenue effect.','Die Alternative wirkt ausdrücklich auf den Kundennutzen und damit die Erlösseite.']
 ],0,['Produktabgrenzung und Austauschbarkeit aus Kundensicht sind wichtiger als identische technische Merkmale.'],'competition'),
 q('23','practice','c','A mature industry has excess capacity, high fixed costs and intense rivalry. Assuming a permanent increase in margins without additional evidence is most questionable because:',[
 ['price competition and spending to retain customers may absorb the expected improvement.','Die Struktur liefert einen konkreten Gegenmechanismus zur dauerhaft höheren Marge.'],
 ['high fixed costs guarantee that every new sale has a negative contribution margin.','Hohe Fixkosten sagen allein nichts über den variablen Stückdeckungsbeitrag.'],
 ['rivalry eliminates the need to forecast capital investment.','Kapazität und Ersatzinvestitionen bleiben gerade relevant.']
 ],0,['Kapazitätsabbau, Differenzierung oder geänderte Verträge können die Lage verbessern. Ohne solchen Mechanismus darf die günstige Endmarge nicht einfach gesetzt werden.'],'competition'),
 q('24','practice','d','Selling price rises from €100 by 4%, while variable unit cost rises from €70 by 12%. Ignoring other costs, the new contribution margin as a percentage of sales is closest to:',[
 ['24.62%','Neuer Deckungsbeitrag 25,60 auf Preis 104.'],
 ['25.60%','Dies verwendet den Eurobetrag des Deckungsbeitrags ohne neuen Umsatznenner als Prozentzahl.'],
 ['30.00%','Dies übernimmt die alte Marge trotz unterschiedlicher Preis- und Kosteninflation.']
 ],0,[F('m=\\frac{100\\cdot1{,}04-70\\cdot1{,}12}{100\\cdot1{,}04}\\approx24{,}6154\\%','Ein höherer nominaler Preis kann mit niedrigerer prozentualer Marge einhergehen.',[['m','Deckungsbeitragsmarge.']])],'inflation'),
 q('25','practice','d','A multi-product firm’s average revenue per unit rises while each product’s own selling price is unchanged. The most direct explanation to investigate is:',[
 ['a shift toward higher-priced products in the sales mix.','Andere Mengenanteile verändern den Durchschnitt ohne einzelne Preiserhöhung.'],
 ['a price increase necessarily applied to every product.','Dies widerspricht den ausdrücklich unveränderten Einzelpreisen.'],
 ['a change in depreciation necessarily recognized as revenue.','Abschreibung wird nicht dadurch zum Verkaufserlös.']
 ],0,['Produktbezogene Preis- und Mengendaten verhindern, dass Mixeffekte als reine Preissetzungsmacht fehlinterpretiert werden.'],'sales-drivers'),
 q('26','practice','d','Nominal growth is 9% and the relevant price index rises 4%. Under a consistent multiplicative price-volume decomposition, real growth is closest to:',[
 ['4.81%','Nominaler Faktor 1,09 geteilt durch Preisfaktor 1,04.'],
 ['5.00%','Dies ist die einfache Differenznäherung.'],
 ['13.00%','Die Inflation wurde hinzugezählt statt aus dem nominalen Faktor entfernt.']
 ],0,[F('g_{real}=\\frac{1{,}09}{1{,}04}-1\\approx4{,}8077\\%','Beide Raten müssen dieselbe Abgrenzung und Periode betreffen.',[['g_{real}','Reales Wachstum der betrachteten Größe.']])],'inflation'),
 q('27','practice','d','During deflation a firm sells goods for €90 each, recognizing historical inventory cost of €60. Replacement goods now cost €50, but those new goods are not yet sold. The current gross margin is:',[
 ['33.33%','Der aktuelle Verbrauch trägt noch die historischen Kosten 60.'],
 ['44.44%','Dies verwendet die niedrigeren künftigen Ersatzkosten bereits für den aktuellen Verkauf.'],
 ['50.00%','Dies teilt den Ertrag 30 durch Kosten 60 statt durch Umsatz 90.']
 ],0,[F('m=\\frac{90-60}{90}\\approx33{,}3333\\%','Beschaffungspreis und tatsächlich im aktuellen Verkauf erfasste Kosten sind zeitlich zu unterscheiden.',[['m','Aktuelle Bruttomarge.']])],'inflation'),
 q('28','practice','e','A concession expires after seven years with no expected renewal or ongoing business. The most appropriate forecast beyond that period should:',[
 ['reflect closure, settlement and any supportable residual proceeds rather than assume perpetual operations.','Die ökonomische Lebensdauer begrenzt die Fortführung.'],
 ['automatically apply perpetual growth to Year 7 profit.','Die Annahme würde ein Geschäft nach seinem erwarteten Ende erfinden.'],
 ['set every final obligation to zero because revenue stops.','Abwicklung kann auch nach Umsatzende Zahlungen erfordern.']
 ],0,['Endphase kann Fortführung oder Abwicklung bedeuten. Die Wahl folgt Rechten und wirtschaftlichem Sachverhalt.'],'horizon'),
 q('29','practice','e','A cyclical producer is currently earning unusually high peak margins. For the end of an explicit forecast period, the analyst should most appropriately:',[
 ['assess a sustainable cycle-adjusted state and the path toward it.','Die heutige Extremmarge ist keine automatisch dauerhafte Ausgangsbasis.'],
 ['perpetuate the peak solely because it is the most recent observation.','Dies verwechselt Aktualität mit langfristiger Nachhaltigkeit.'],
 ['assume negative margins forever to offset the recent high profit.','Eine unbegründete Gegenverzerrung verbessert die Prognose nicht.']
 ],0,['Kapazität, Preiszyklen, Kosten und Konkurrenz begründen den Übergang. Ein längerer Horizont allein löst die Margenfrage nicht.'],'horizon'),
 q('30','practice','e','In the first stable year, forecast NOPAT is €150 million. Sustainable growth is 4% and the return on additional investment is 16%, with no efficiency changes. Required reinvestment and FCFF are respectively:',[
 ['€37.50 million and €112.50 million.','Reinvestitionsquote 4/16 = 25 %, verbleibender Cashanteil 75 %.'],
 ['€6.00 million and €144.00 million.','Dies setzt die Wachstumsrate direkt als Reinvestitionsquote an.'],
 ['€24.00 million and €126.00 million.','Dies behandelt die Kapitalrendite als Anteil des Gewinns, der reinvestiert werden muss.']
 ],0,[F('RR=0{,}04/0{,}16=0{,}25,\\quad I=150RR=37{,}50,\\quad FCFF=150-I=112{,}50','Wachstumsrate und Reinvestitionsquote sind über die Rendite auf neues Kapital verbunden.',[['RR','Reinvestitionsquote.'],['I','Zusätzliche operative Reinvestition in Mio. Euro.'],['FCFF','Freier Unternehmenscashflow in Mio. Euro.']])],'continuing'),
 q('31','practice','e','The first cash flow after an explicit forecast period is €114 million, already after consistent reinvestment. Stable growth is 3% and the matching capital cost is 9%. The continuing value at the end of the explicit period is:',[
 ['€1,266.67 million','Dies kapitalisiert ohne das vorgegebene langfristige Wachstum.'],
 ['€1,900.00 million','114 geteilt durch 9 % minus 3 %.'],
 ['€1,957.00 million','Der bereits als erstes Folgejahr angegebene Cashflow wurde nochmals mit 1,03 erhöht.']
 ],1,[F('TV_t=\\frac{114}{0{,}09-0{,}03}=1900','Dieser Wert liegt am Ende der Detailphase und ist nicht ohne weitere Abzinsung der heutige Wert.',[['TV_t','Fortführungswert am Ende der Detailphase in Mio. Euro.']])],'continuing'),
 q('32','practice','e a','A forecast doubles long-run sales but holds all working capital and productive capacity fixed, with no efficiency explanation. The strongest initial criticism is:',[
 ['growth and resource requirements may be internally inconsistent.','Mehr Geschäft braucht eine begründete Beziehung zu Kapitalbindung und Kapazität.'],
 ['every asset must necessarily grow by exactly the same percentage as revenue.','Es kann Effizienz, freie Kapazität oder andere Treiber geben; die fehlende Begründung ist das Problem.'],
 ['a balanced projected balance sheet proves the resource assumptions are feasible.','Rechnerische Gleichheit beantwortet keine Kapazitätsfrage.']
 ],0,['Der Analyst prüft vorhandene Reserven, Umschlag, Auslastung und neue Investitionen. Eine starre Gleichlaufregel wäre ebenso unbegründet wie kostenlose Expansion.'],'checks'),
 q('a1','mock-a','a','Annual credit sales are €1,460 million. A 45-day DSO assumption uses the average of opening and closing receivables on a 365-day basis; opening receivables are €120 million. Inventory rises €35 million and payables €20 million. Net income is €160 million and depreciation €40 million, with no other CFO adjustments. Opening cash is €30 million, capex €95 million, dividends €20 million and required ending cash €25 million. New debt is available at year-end without current interest. Required new borrowing is:',[
 ['€0 million','Dies behandelt den erforderlichen Durchschnittsbestand 180 als Endbestand und unterschätzt dadurch die Forderungsbindung.'],
 ['€20 million','Dies deckt nur das negative Cash vor Finanzierung, nicht zusätzlich den Mindestbestand.'],
 ['€45 million','Endforderungen 240 führen zu CFO 65 und Cash vor Kredit −20; Mindestcash 25 erfordert 45.']
 ],2,[F('\\overline{AR}=1460\\frac{45}{365}=180,\\quad AR_1=2\\cdot180-120=240','Eine durchschnittsbasierte Tagesannahme muss zuerst in den Endbestand überführt werden.',[['\\overline{AR}','Durchschnittliche Forderungen in Mio. Euro.'],['AR_1','Endforderungen in Mio. Euro.']]),F('CFO=160+40-(120+35-20)=65,\\quad B=25-(30+65-95-20)=45','Der Kredit deckt sowohl die verbleibende Lücke als auch das positive Mindestcash.',[['CFO','Operativer Cashflow in Mio. Euro.'],['B','Neue Kreditaufnahme in Mio. Euro.']])],'working-capital'),
 q('b1','mock-b','e','First-year stable NOPAT is held fixed at €120 million. Capital cost and sustainable return on additional invested capital both equal 10%. An analyst raises perpetual growth from 2% to 4% and adjusts reinvestment consistently. The new continuing value is:',[
 ['€1,200 million','Reinvestitionsquote steigt auf 40 %, FCFF fällt auf 72; 72/6 % bleibt 1.200.'],
 ['€1,600 million','Dies verwendet die alte 20-%-Reinvestition bei der neuen Wachstumsrate.'],
 ['€2,000 million','Dies lässt die gesamte erforderliche Reinvestition weg.']
 ],0,[F('RR=0{,}04/0{,}10=0{,}40,\\quad TV=\\frac{120(1-0{,}40)}{0{,}10-0{,}04}=1200','Bei Rendite genau in Höhe der Kapitalkosten schafft zusätzliches Wachstum unter diesen stabilen Annahmen keinen Mehrwert.',[['RR','Reinvestitionsquote.'],['TV','Fortführungswert in Mio. Euro.']]),'Vorher waren es 120 × 80 % / 8 % = 1.200. Der höhere Wachstumsfaktor darf nicht ohne den zugehörigen Kapitalbedarf betrachtet werden.'],'continuing')
];
