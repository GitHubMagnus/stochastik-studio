const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('inv-'+id,'inventory','statements',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a','An IFRS inventory item costs €84. Its estimated selling price is €98, with €9 required to complete it and €11 necessary to sell it. Its carrying amount is:',[
 ['€78','Der Nettobetrag nach beiden noch nötigen Kostenarten liegt unter den Kosten.'],
 ['€84','Der Kostenbetrag übersteigt den erzielbaren Nettobetrag.'],
 ['€98','Der Bruttoverkaufspreis lässt notwendige zukünftige Kosten unberücksichtigt.']
 ],0,[F('NRV=98-9-11=78,\\qquad BV=\\min(84,78)=78','Die Kostenobergrenze und der Nettorealisationsbetrag werden erst nach gleicher Abgrenzung verglichen.',[['NRV','Nettoveräußerungswert in Euro.'],['BV','Resultierender Buchwert in Euro.']])],'nrv'),
 q('02','practice','a','Two unrelated inventory items each cost €50. Their NRVs are €38 and €67. Assuming item-by-item measurement under IAS 2, total carrying value is:',[
 ['€88','Der Verlust des ersten Artikels wird erfasst; der Gewinn des zweiten wird nicht vorweggenommen.'],
 ['€100','Eine pauschale Gesamtverrechnung würde den notwendigen Einzelverlust verbergen.'],
 ['€105','Das ist die Summe der NRVs ohne Kostenbegrenzung.']
 ],0,[F('BV=\\min(50,38)+\\min(50,67)=88','Nicht zusammengehörige Artikel dürfen hier nicht durch ungeeignete Aggregation gegeneinander verrechnet werden.',[['BV','Gesamter Vorratsbuchwert in Euro.']])],'nrv'),
 q('03','practice','a','An inventory item with original cost €90 was written down to €64 in a prior IFRS annual report. No units are sold or added, and new evidence raises NRV to €102. The maximum reversal is:',[
 ['€26','Die Zuschreibung endet beim unveränderten ursprünglichen Kostenbetrag 90.'],
 ['€38','Das würde den Buchwert bis über die Kosten auf den neuen NRV anheben.'],
 ['€64','Der bisherige Buchwert ist nicht der Zuschreibungsbetrag.']
 ],0,[F('Rev=\\min(90,102)-64=26','Eine Werterholung erlaubt keine Vorwegnahme des über die Kosten hinausgehenden Verkaufserfolgs.',[['Rev','Zulässige Zuschreibung in Euro.']])],'reversal'),
 q('04','practice','a','A US GAAP inventory item was written down at the prior fiscal year-end. Its selling prospects subsequently improve before sale. In the ordinary annual-reporting case, the prior write-down:',[
 ['is reversed automatically up to original cost.','Dies überträgt die IFRS-Erholungsregel auf den beschriebenen US-Fall.'],
 ['establishes a new cost basis that is not simply marked up for the recovery.','Die spätere Marge kann durch die niedrigere Kostenbasis höher ausfallen.'],
 ['must be added to cash receipts.','Eine Buchwertkorrektur ist kein Kundenzahlungseingang.']
 ],1,['Ein zukünftiger höherer Verkaufspreis wird beim tatsächlichen Verkauf im Ergebnis relevant. Die Aufgabe beschreibt ausdrücklich die gewöhnliche Behandlung nach einer Abwertung im Jahresabschluss.'],'us-market'),
 q('05','practice','a','For inventory measured using FIFO under US GAAP, the ordinary subsequent measurement rule is:',[
 ['lower of cost and net realizable value.','FIFO gehört grundsätzlich zum durch ASU 2015-11 vereinfachten Modell.'],
 ['replacement cost without any limits.','Dies ist weder der FIFO-Grundfall noch die vollständig begrenzte Market-Definition.'],
 ['the higher of cost and expected selling price.','Unrealisierte Verkaufsmargen werden so nicht pauschal vorweggenommen.']
 ],0,['Die US-LIFO- und Retail-Methoden behalten einen anderen Lower-of-Cost-or-Market-Test. Die Kostenmethode muss daher vor dem Niederstwertvergleich feststehen.'],'us-market'),
 q('06','practice','a','US LIFO inventory has cost €120, NRV €108, a normal profit amount of €18, and replacement cost €82. Under lower of cost or market, carrying value is:',[
 ['€82','Die Wiederbeschaffungskosten liegen unter der Untergrenze und können nicht unverändert verwendet werden.'],
 ['€90','Die Untergrenze 108 − 18 begrenzt den Market-Betrag nach unten.'],
 ['€108','Die NRV-Obergrenze greift nicht, wenn der begrenzte Wiederbeschaffungswert niedriger ist.']
 ],1,[F('Floor=108-18=90,\\quad Market=\\min(108,\\max(82,90))=90,\\quad BV=90','Erst den Market-Betrag bestimmen, dann mit Kosten 120 vergleichen.',[['Floor,Market,BV','Untergrenze, begrenzter Marktwert und Buchwert in Euro.']])],'us-market'),
 q('07','practice','a','US LIFO inventory costs €100, has NRV €95, normal profit amount €20, and replacement cost €110. Its carrying value under lower of cost or market is:',[
 ['€75','Die Untergrenze greift nur bei entsprechend niedrigen Wiederbeschaffungskosten.'],
 ['€95','Der Market-Betrag wird durch NRV 95 gedeckelt und liegt unter Kosten 100.'],
 ['€100','Die Wiederbeschaffungskosten dürfen nicht über der NRV-Obergrenze angesetzt werden.']
 ],1,[F('Market=\\min(95,\\max(110,75))=95,\\qquad BV=\\min(100,95)=95','Die Obergrenze verhindert, dass ein nicht durch Verkauf gedeckter Wiederbeschaffungsbetrag den Verlusttest umgeht.',[['Market','Begrenzter Market-Betrag in Euro.'],['BV','Resultierender Buchwert in Euro.']])],'us-market'),
 q('08','practice','a c','Fixed production overhead is €72,000 at normal capacity of 12,000 units. Actual output is 8,000 units, all remaining in inventory; variable production cost is €9 per unit. Under the stated normal-capacity model, inventory production cost is:',[
 ['€120,000','Variable Kosten 72.000 plus zugeordnete fixe Kosten 48.000.'],
 ['€144,000','Der gesamte Fixkostenbetrag wurde trotz Unterauslastung aktiviert.'],
 ['€96,000','Variable Kosten 72.000 wurden mit nicht zugeordneten Fixkosten 24.000 statt mit den zugeordneten 48.000 addiert.']
 ],0,[F('c_{fixed}=\\frac{72000}{12000}=6,\\qquad Cost=8000(9+6)=120000','Nicht zugeordnete Fixkosten 24.000 werden im Fall als Periodenaufwand erfasst.',[['c_{fixed}','Normaler fixer Zuschlag in Euro je Einheit.'],['Cost','Kosten der auf Lager verbleibenden Produktion in Euro.']])],'cost'),
 q('09','practice','a c','Which expenditure is least likely to be included in ordinary IAS 2 inventory cost?',[
 ['Freight needed to bring purchased goods to the warehouse.','Zurechenbarer Transport zum aktuellen Standort gehört grundsätzlich zu den Anschaffungskosten.'],
 ['Abnormal wasted materials caused by an unusual production failure.','Ungewöhnliche Verluste werden nicht einfach auf die verbleibenden verkaufsfähigen Vorräte verteilt.'],
 ['Normal direct production labor.','Normale zurechenbare Fertigungsarbeit gehört grundsätzlich zu den Herstellungskosten.']
 ],1,['Die Aktivierung soll den ordnungsgemäßen Erwerb und Herstellungszustand abbilden. Ein außergewöhnlicher Fehler wird nicht dadurch künftiger Nutzen, dass das Unternehmen ihn gerne später aufwandswirksam machen würde.'],'cost'),
 q('10','practice','b','Beginning inventory is 60 units at €8. The firm then buys 90 units at €10 and sells 100 units after that purchase. With no impairment, FIFO ending inventory is:',[
 ['€400','Dies verwendet die alten Kosten 8 für die verbliebenen jüngsten Stücke.'],
 ['€460','Das wäre der Endbestand zum gewogenen Durchschnitt von 9,20.'],
 ['€500','Die 50 Reststücke gehören unter FIFO zur jüngsten Kostenschicht 10.']
 ],2,[F('EI_F=(60+90-100)\\cdot10=500','Die älteren 60 und weitere 40 aus dem Einkauf werden dem Verkauf zugeordnet.',[['EI_F','FIFO-Endbestandskosten in Euro.']])],'cost-flows'),
 q('11','practice','b','A firm begins with 40 units at €15 and purchases 60 at €18. It sells 70 units after the purchase. Using period-end weighted-average cost, cost of goods sold is:',[
 ['€1,140','Dies ist FIFO-COGS: 40 × 15 + 30 × 18.'],
 ['€1,176','Gewogener Stückkostenbetrag 16,80 mal 70 Verkäufe.'],
 ['€1,230','Dies ist LIFO-COGS: 60 × 18 + 10 × 15.']
 ],1,[F('\\bar c=\\frac{40\\cdot15+60\\cdot18}{100}=16{,}80,\\qquad COGS=70\\bar c=1176','Unterschiedliche Mengen verlangen Gewichtung der Einkaufspreise.',[['\\bar c','Gewogene Kosten je Stück in Euro.'],['COGS','Umsatzkosten in Euro.']])],'cost-flows'),
 q('12','practice','b','Under otherwise identical quantities, steadily declining unit purchase costs, and no write-downs or unusual layer effects, FIFO compared with LIFO generally produces:',[
 ['lower ending inventory and higher cost of goods sold.','Jüngere günstigere Kosten bleiben unter FIFO im Lager; ältere höhere Kosten gehen in den Verbrauch.'],
 ['higher ending inventory and lower cost of goods sold.','Dies ist die typische Richtung bei steigenden statt fallenden Kosten.'],
 ['higher ending inventory and higher cost of goods sold.','Bei identischen verfügbaren Kosten können nicht beide Teilgrößen zugleich höher sein.']
 ],0,['Die Kostenidentität verbindet beide Seiten: Ein kleinerer Endbestand bedeutet unter gleicher Anfangsbasis und gleichen Einkäufen entsprechend größere Umsatzkosten. Die Annahmen schließen störende Abwertungen und besondere Schichteffekte aus.'],'prices'),
 q('13','practice','b','A company’s FIFO calculation assigns the oldest costs to sold goods. This means that:',[
 ['the oldest physical units must necessarily have been shipped.','Rechnerische Kostenfolge und tatsächliche Lagerentnahme sind unterschiedliche Sachverhalte.'],
 ['older cost layers are expensed first, regardless of whether each shipped unit is physically traced that way.','FIFO ist eine Kostenflussannahme.'],
 ['the newest costs are always expensed first.','Dies beschreibt die entgegengesetzte Zuordnungsrichtung.']
 ],1,['Bei austauschbaren Waren dient die Kostenformel der systematischen Zuordnung. Spezifische Einzelidentifikation ist ein anderer Ansatz für geeignete nicht austauschbare Posten.'],'cost-flows'),
 q('14','practice','b','Beginning inventory is 10 units at €20. A firm purchases 10 units at €30, sells 12 units, buys 10 units at €40, then sells 6 units. Under perpetual LIFO, total COGS is:',[
 ['€500','Dies sind die Umsatzkosten bei gleitendem Durchschnitt: erster Verkauf 300, zweiter Verkauf 200.'],
 ['€580','Erster Verkauf 340; zweiter Verkauf 240.'],
 ['€640','Dies ist periodisches LIFO für die 18 Gesamtverkäufe.']
 ],1,[F('COGS=10\\cdot30+2\\cdot20+6\\cdot40=580','Beim ersten Verkauf steht der spätere Einkauf zu 40 noch nicht zur Verfügung.',[['COGS','Umsatzkosten in Euro unter laufendem LIFO.']]),'Es bleiben 8 Stück zu 20 und 4 Stück zu 40, insgesamt 320. Zusammen mit COGS ergibt das verfügbare Kosten von 900.'],'timing'),
 q('15','practice','b','A moving-average system starts with 20 units costing €10 each. It buys 20 units at €14, sells 10 units, then buys 10 units at €20. With no other changes, the new moving-average unit cost is:',[
 ['€13.60','Dies ist ein Durchschnitt aller Periodenzugänge ohne Herausnahme der bereits verkauften Kosten.'],
 ['€14.00','Restkosten 360 plus neuer Einkauf 200 ergeben 560 für 40 Stück.'],
 ['€16.00','Dies mittelt den vorherigen Durchschnitt 12 und den neuen Preis 20 ohne Mengen zu gewichten.']
 ],1,[F('\\bar c_1=\\frac{200+280}{40}=12,\\qquad\\bar c_2=\\frac{30\\cdot12+10\\cdot20}{40}=14','Vor dem zweiten Zugang werden Menge und Kosten der bereits verkauften zehn Stück entfernt.',[['\\bar c_1,\\bar c_2','Gleitender Stückkostenbetrag nach erstem und zweitem Zugang in Euro.']])],'timing'),
 q('16','practice','b c','LIFO inventory is €640 million and the disclosed FIFO-minus-LIFO reserve is €85 million at year-end. Comparable FIFO inventory is:',[
 ['€555 million','Die definierte Reserve muss zum niedrigeren LIFO-Bestand addiert werden.'],
 ['€640 million','Die offengelegte Methodendifferenz wurde ignoriert.'],
 ['€725 million','LIFO-Endbestand plus vollständige Endreserve.']
 ],2,[F('I_F=640+85=725','Der Endbestand benötigt die Endreserve, nicht bloß deren Veränderung.',[['I_F','Vergleichbarer FIFO-Endbestand in Mio. Euro.']])],'reserve'),
 q('17','practice','b c','LIFO COGS are €2,400 million. The comparable FIFO-minus-LIFO reserve falls from €120 million to €95 million. With identical purchases and no other differences, FIFO COGS are:',[
 ['€2,375 million','Die negative Reserveänderung wurde mit falschem Vorzeichen verarbeitet.'],
 ['€2,425 million','COGS nach FIFO = 2.400 − (−25).'],
 ['€2,495 million','Die Endreserve 95 wurde statt ihrer Periodenänderung verwendet.']
 ],1,[F('COGS_F=2400-(95-120)=2425','Ein sinkender Reservebestand dreht die übliche Vorzeichenrichtung eines Reserveaufbaus um.',[['COGS_F','Vergleichbare FIFO-Umsatzkosten in Mio. Euro.']])],'reserve'),
 q('18','practice','b','In a simplified rising-cost case, LIFO produces €160 million less pre-tax income than FIFO. Assume the same method applies for tax, a 30% rate, full immediate tax payment, and identical other cash flows. LIFO operating cash flow is:',[
 ['€48 million higher','Geringere aktuelle Steuerzahlungen entlasten Cash um 30 % von 160.'],
 ['€112 million lower','Dies ist der niedrigere Nachsteuergewinn, nicht die Cashflowdifferenz.'],
 ['€160 million higher','Der gesamte Ergebnisunterschied ist kein unmittelbarer Zahlungsvorteil.']
 ],0,[F('\\Delta Cash=160\\cdot0{,}30=48','Der Unterschied in tatsächlicher Zahlung entsteht ausschließlich durch die vorgegebene Steuerwirkung.',[['\\Delta Cash','Cashflowvorteil von LIFO gegenüber FIFO in Mio. Euro.']])],'tax-cash'),
 q('19','practice','b c','A LIFO firm sells substantially more units than it replaces, drawing on old low-cost layers. Its higher current gross margin most likely includes:',[
 ['an effect that may not be sustainable without further old-layer liquidation.','Der Gewinn profitiert von historisch niedrigen Kosten im aktuellen Verbrauch.'],
 ['proof that current replacement costs have fallen.','Alte niedrige Kosten sagen nichts über einen aktuellen Preisrückgang aus.'],
 ['a cash receipt equal to the accounting margin increase.','Kostenzuordnung erzeugt keine zusätzliche Kundenzahlung.']
 ],0,['Absatzmengen, Beschaffungskosten und veröffentlichte Liquidationseffekte helfen, den Margeneffekt einzuordnen. Auch ein sinnvoller Lagerabbau kann einen einmaligen Rechnungslegungseffekt enthalten.'],'liquidation'),
 q('20','practice','a b','Inventory is written down by €16 million with no immediate tax or cash effect. Before the write-down, current assets are €240 million and current liabilities €160 million. The new current ratio is:',[
 ['1.40','Der Aktivzähler fällt auf 224; der Schuldnenner bleibt 160.'],
 ['1.50','Dies ist die Quote vor der Wertminderung.'],
 ['1.67','Dies vermindert fälschlich den Verbindlichkeitsnenner.']
 ],0,[F('CR=\\frac{240-16}{160}=1{,}40','Die Buchung mindert Vorrat und Eigenkapital, nicht die kurzfristigen Verpflichtungen.',[['CR','Current Ratio nach Abwertung.']])],'write-down-effects'),
 q('21','practice','a b','A material inventory write-down is included in COGS and reduces ending inventory. Physical sales are unchanged. Using average beginning and ending inventory, reported inventory turnover may rise because:',[
 ['both COGS rises and the average inventory carrying amount falls.','Zähler und Nenner verbessern den rechnerischen Umschlag ohne höhere Verkaufsmenge.'],
 ['the write-down necessarily increases physical demand.','Die Bewertungsbuchung erzeugt keinen zusätzlichen Absatz.'],
 ['the write-down removes all obsolete units physically from the warehouse.','Buchwertminderung ist nicht automatisch physischer Abgang.']
 ],0,['Die Quote muss um Wertberichtigungen und Mengeninformationen ergänzt werden. Eine scheinbar effizientere Lagerhaltung kann vollständig durch dieselbe Verlustbuchung entstanden sein.'],'write-down-effects'),
 q('22','practice','c','A manufacturer’s finished-goods inventory rises while sales volumes decline and discounting increases. The most appropriate analytical response is to:',[
 ['investigate aging, subsequent selling prices, and required NRV adjustments.','Die Kombination begründet eine konkrete Absatz- und Werthaltigkeitsprüfung.'],
 ['conclude immediately that management committed fraud.','Warnsignale sind kein ausreichender Nachweis einer absichtlichen Falschdarstellung.'],
 ['interpret all inventory growth as improved future profitability.','Zusätzliche Bestände können auch unverkäuflich oder nur rabattiert absetzbar sein.']
 ],0,['Produktmix, Saison und geplante Lieferfähigkeit können alternative Erklärungen liefern. Die Prüfung verbindet veröffentlichte Buchwerte mit späteren realisierten Nettopreisen und physischen Mengen.'],'disclosures'),
 q('23','practice','c','Why is disclosure of inventory pledged as collateral relevant?',[
 ['It helps assess which assets are available to satisfy competing creditor claims.','Verpfändung verändert den Zugriff anderer Gläubiger, auch wenn der Bilanzwert gleich bleibt.'],
 ['It proves that book value equals liquidation value.','Sicherungsbindung bestimmt nicht den tatsächlich erzielbaren Notverkaufspreis.'],
 ['It means the pledged inventory must have been expensed.','Verpfändung ist nicht gleich Verkauf oder Verbrauch.']
 ],0,['Für Liquiditäts- und Kreditanalyse zählen Rechtsposition, Rang und Verwertbarkeit neben den bewerteten Beträgen. Eine unbelastete und eine bereits besichernde Ware sind nicht ohne Weiteres gleich verfügbar.'],'disclosures'),
 q('24','practice','c','An analyst observes a lower LIFO reserve. This observation alone:',[
 ['proves that old inventory layers were liquidated.','Auch Kostenrückgänge oder andere Zusammensetzungsänderungen können die Reserve vermindern.'],
 ['requires examination of prices, quantities, and the reserve definition before concluding that liquidation occurred.','Bestandsdifferenz und physische Mengenbewegung sind nicht identisch.'],
 ['proves that FIFO and LIFO ending balances are now equal.','Eine kleinere Reserve kann weiterhin deutlich von null abweichen.']
 ],1,['Der korrekte Schluss folgt aus der Überleitung und den Anhangangaben. Die Bedeutung der Reserve hängt zudem davon ab, welcher Vergleichskostenmaßstab tatsächlich veröffentlicht wird.'],'reserve'),
 q('a1','mock-a','a b','A company’s FIFO and weighted-average inventory costs are €360 million and €330 million for the same remaining goods. NRV is €310 million. Both methods use lower of cost and NRV, and all available costs are otherwise identical. After write-downs:',[
 ['ending inventory and total inventory expense including write-downs are equal under both methods.','Beide Endwerte sind 310; bei identischen verfügbaren Kosten muss dann auch der gesamte abgeflossene Kostenanteil gleich sein.'],
 ['FIFO ending inventory remains €30 million higher.','Die unterschiedliche Höhe der Abwertung beseitigt hier gerade den alten Abstand.'],
 ['weighted-average total inventory expense is necessarily €30 million lower.','Nach gleicher Endbewertung und identischen verfügbaren Kosten bleibt dieser Aufwandabstand nicht bestehen.']
 ],0,['FIFO verliert 50, Durchschnitt verliert 20. Unterschiedliche ursprüngliche COGS und gegenläufige Wertminderungen führen zusammen auf dieselben Endkosten. Ein Vergleich nur vor dem Niederstwerttest wäre unvollständig.'],'combined'),
 q('a2','mock-a','b c','An analyst restates LIFO results to FIFO. The year-end reserve is €140 million, versus €100 million at the start. Assuming a 25% full tax effect and no other differences, the increase in current-year net income is:',[
 ['€30 million','Nur der Reserveanstieg 40 gehört zur Periodenergebnisanpassung; davon verbleiben 75 %.'],
 ['€40 million','Die Vorsteuerdifferenz wurde nicht um Steuer angepasst.'],
 ['€105 million','Hier wurde der gesamte Reservebestand 140 statt des Periodenanstiegs verwendet.']
 ],0,[F('\\Delta NI=(140-100)(1-0{,}25)=30','Bestandsanpassung und Anpassung des Jahresergebnisses benötigen unterschiedliche Reservegrößen.',[['\\Delta NI','Analytischer Anstieg des Jahresüberschusses in Mio. Euro.']])],'reserve'),
 q('b1','mock-b','a b','Two otherwise identical companies originally buy an inventory item for €150. Both write it down to €100 in Year 1. In Year 2 its NRV rises to €140; the IFRS company reverses the permitted amount, while the US GAAP annual-reporting company retains its new cost basis. Both sell it for €170 with no selling costs in Year 3. Compared with IFRS, the US company’s Year 3 gross profit is:',[
 ['€40 higher, while the cumulative pre-tax result over the three years is the same.','US-Verkaufsgewinn 70 versus IFRS 30; die IFRS-Zuschreibung 40 wurde schon früher erfasst.'],
 ['€40 higher, and cumulative profit is also €40 higher.','Dies übersieht den früheren IFRS-Zuschreibungsgewinn.'],
 ['the same, because the sales price is identical.','Die Buchwerte vor Verkauf sind verschieden.']
 ],0,[F('GP_{US}=170-100=70,\\quad GP_{IFRS}=170-140=30','Die Differenz betrifft den Zeitraum der Erfassung.',[['GP_{US},GP_{IFRS}','Bruttogewinn im Verkaufsjahr in Euro.']]),'Gesamtergebnis: US −50 + 70 = 20; IFRS −50 + 40 + 30 = 20. Beide haben dieselben wirtschaftlichen Anschaffungs- und Verkaufsvorgänge.'],'reversal'),
 q('b2','mock-b','a c','An analyst separately adds an inventory write-down back to net income and also uses the unadjusted inventory balance decrease, which includes that write-down, as an operating cash-flow increase. All other adjustments are correct. The resulting CFO is:',[
 ['overstated by the amount of the write-down.','Derselbe nicht zahlungswirksame Verlust wird zweimal neutralisiert.'],
 ['correct because every non-cash expense requires two adjustments.','Eine Neutralisierung darf insgesamt nur einmal erfolgen.'],
 ['understated by the amount of the write-down.','Die zusätzliche positive Korrektur erhöht statt senkt den Cashflow.']
 ],0,['Entweder wird der Verlust über eine passend verwendete Bestandsüberleitung erfasst, oder er wird separat zurückgenommen und die Bestandsbewegung entsprechend bereinigt. Die vollständige Rechnung muss zur tatsächlichen Zahlung führen.'],'write-down-effects')
];
