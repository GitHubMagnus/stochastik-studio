const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('cfp-'+id,'cashflow-preparation','statements',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a','A company recognizes credit sales of €80 million and receives no customer payment by year-end. Ignoring taxes and costs, the immediate effects are:',[
 ['higher revenue and receivables, with no customer cash receipt.','Leistung und Anspruch werden erfasst, obwohl die Zahlung noch aussteht.'],
 ['higher cash and no revenue.','Diese Richtung würde eher eine Vorauszahlung vor Leistung beschreiben.'],
 ['no change in any financial statement.','Die erfüllte Leistung und entstandene Forderung sind bilanzierungsrelevant.']
 ],0,['Die indirekte Cashflowrechnung neutralisiert den ohne Zahlung erfassten Ertrag durch den zugehörigen Forderungsanstieg. Der Fall zeigt, warum Gewinn und operativer Cashflow voneinander abweichen.'],'scope'),
 q('02','practice','a d','An equipment purchase is financed entirely by issuing a note directly to the seller; no cash changes hands. The initial transaction should generally be:',[
 ['reported as equal cash investing outflow and cash financing inflow.','Das würde nicht stattgefundene Zahlungen in die Kapitalflussrechnung aufnehmen.'],
 ['excluded from cash-flow totals and disclosed as a non-cash investing and financing transaction.','Vermögen und Verpflichtung entstehen ohne aktuellen Cashflow.'],
 ['ignored in both the balance sheet and disclosures.','Fehlende Zahlung bedeutet nicht fehlenden wirtschaftlichen Vorgang.']
 ],1,['Die Bilanz enthält den erworbenen Vermögenswert und die neue Schuld. Spätere tatsächliche Zahlungen sind dann nach ihrem Charakter zu klassifizieren.'],'noncash'),
 q('03','practice','a d','A firm sells machinery for €46 million; its carrying amount is €38 million. Under the indirect method, ignoring taxes, the gain and proceeds are most appropriately treated as:',[
 ['subtract the €8 million gain from operating profit reconciliation and report €46 million investing inflow.','Der gesamte Verkaufserlös gehört zur Investitionstätigkeit; der bereits enthaltene Gewinn wird aus CFO entfernt.'],
 ['subtract €46 million from operating cash flow and report only €8 million investing inflow.','Gewinn und Erlös wurden vertauscht.'],
 ['report €46 million in both operating and investing cash flows.','Dies würde denselben Eingang doppelt erfassen.']
 ],0,['Der Bilanzabgang 38 plus Veräußerungsgewinn 8 ergibt Erlös 46. Die indirekte Überleitung korrigiert den Gewinnanteil im Ausgangsergebnis, nicht einen zweiten Zahlungsvorgang.'],'indirect'),
 q('04','practice','b c','Annual revenue is €720 million; trade receivables increase from €65 million to €92 million. With no write-offs, acquisitions, foreign exchange, taxes on sales, or other receivable changes, cash collected from customers is:',[
 ['€693 million','27 zusätzliche Forderungen sind noch nicht eingezahlt.'],
 ['€720 million','Dies setzt Umsatz fälschlich mit Einzahlung gleich.'],
 ['€747 million','Ein Forderungsanstieg senkt statt erhöht die Einnahmen relativ zum Umsatz.']
 ],0,[F('C_{cust}=720-(92-65)=693','Der Forderungsbestand erklärt die zeitliche Differenz.',[['C_{cust}','Kundeneinzahlungen in Mio. Euro.']])],'customer-cash'),
 q('05','practice','b c','Cost of goods sold is €450 million. Inventory declines by €20 million and trade payables increase by €15 million. With no other changes, cash paid to suppliers is:',[
 ['€415 million','Käufe 430 abzüglich zusätzlicher Lieferantenfinanzierung 15.'],
 ['€445 million','Der Payables-Anstieg wurde zum Einkauf addiert statt abgezogen.'],
 ['€485 million','Beide Bestandswirkungen haben hier das falsche Vorzeichen.']
 ],0,[F('Purch=450-20=430,\\qquad C_{sup}=430-15=415','Zuerst wird Verbrauch in Einkauf, dann Einkauf in Zahlung übergeleitet.',[['Purch','Warenkäufe in Mio. Euro.'],['C_{sup}','Lieferantenauszahlungen in Mio. Euro.']])],'supplier-cash'),
 q('06','practice','b c','Recognized insurance expense is €24 million. Prepaid insurance rises by €5 million and insurance payable falls by €2 million. With no other changes, cash paid for insurance is:',[
 ['€17 million','Beide zeitlichen Abgrenzungen wurden in die falsche Richtung angewendet.'],
 ['€27 million','Der Abbau der Verpflichtung erfordert ebenfalls eine Zahlung.'],
 ['€31 million','Zusätzliche Vorauszahlung 5 plus Abbau alter Verpflichtungen 2 erhöhen Cash gegenüber Aufwand.']
 ],2,[F('C_{ins}=24+5-(-2)=31','Eine geringere Verbindlichkeit bedeutet, dass zusätzlich zum laufenden Aufwand alte Beträge bezahlt wurden.',[['C_{ins}','Versicherungsauszahlungen in Mio. Euro.']])],'expense-cash'),
 q('07','practice','b c','Current tax expense is €36 million; income taxes payable increase by €4 million. Deferred tax expense of €8 million is reported separately. With no other changes, cash taxes paid are:',[
 ['€32 million','Vom laufenden Steueraufwand bleiben 4 zusätzlich unbezahlt.'],
 ['€40 million','Dieser Betrag vermischt latenten Steueraufwand mit der laufenden Steuerzahlung.'],
 ['€48 million','Latenter Aufwand und Payables-Anstieg wurden fälschlich hinzugefügt.']
 ],0,[F('C_{tax}=36-4=32','Ausgangspunkt ist der laufende, nicht der gesamte Steueraufwand.',[['C_{tax}','Steuerauszahlung in Mio. Euro.']]),'Latente Steuern betreffen zeitliche Bewertungsunterschiede. Die ausdrücklich separat genannten 8 sind hier keine laufende Barzahlung.'],'expense-cash'),
 q('08','practice','b c','A US GAAP firm receives €840 million from customers and pays €510 million to suppliers, €175 million for employees and other operations, €18 million interest, and €42 million income taxes. Operating cash flow is:',[
 ['€95 million','Alle genannten operativen Zahlungen werden von den Kundeneinzahlungen abgezogen.'],
 ['€113 million','Der nach US GAAP operative gezahlte Zins fehlt im Abzug.'],
 ['€155 million','Zinsen und Steuern wurden ausgelassen.']
 ],0,[F('CFO=840-510-175-18-42=95','Der direkte Ausweis addiert die tatsächlichen operativen Ein- und Auszahlungen.',[['CFO','Operativer Cashflow in Mio. Euro nach US-GAAP-Klassifikation.']])],'direct'),
 q('09','practice','a b','Net income is €88 million, depreciation €24 million, and a gain on an asset sale €6 million. Receivables increase €12 million, inventory decreases €7 million, and operating payables increase €9 million. No other adjustments apply. Operating cash flow under the indirect method is:',[
 ['€94 million','Der Vorratsabbau von 7 und die zusätzliche Lieferantenfinanzierung von 9 wurden ausgelassen.'],
 ['€110 million','Nicht zahlungswirksame Aufwendungen und operative Bestandsänderungen sind korrekt übergeleitet.'],
 ['€122 million','Der Veräußerungsgewinn wurde addiert statt entfernt.']
 ],1,[F('CFO=88+24-6-12+7+9=110','Depreciation wird zurückaddiert, der Investitionsgewinn entfernt; Kapitalfreisetzung und noch ausstehende Zahlungen erhöhen CFO.',[['CFO','Operativer Cashflow in Mio. Euro.']])],'indirect'),
 q('10','practice','a','Holding all other items constant, a decrease in trade payables most directly:',[
 ['reduces operating cash flow relative to expense-based profit.','Das Unternehmen zahlt mehr als den aktuell neu entstandenen Aufwand bzw. Einkauf.'],
 ['increases operating cash flow because liabilities are lower.','Weniger Verpflichtungen können durch zusätzliche Zahlung entstehen; das verbraucht Cash.'],
 ['has no effect because liabilities are balance-sheet items.','Bestandsänderungen erklären gerade die Differenz zwischen Aufwand und Zahlung.']
 ],0,['Die indirekte Methode addiert einen Anstieg operativer Verbindlichkeiten und subtrahiert einen Rückgang. Fremdfinanzierungsschulden sind davon zu trennen.'],'indirect'),
 q('11','practice','a b','Opening net property, plant, and equipment is €260 million, depreciation is €35 million, assets with carrying amount €20 million are sold, and ending net PP&E is €300 million. There are no other changes, and all additions are paid in cash. Capital expenditures are:',[
 ['€55 million','Der abgegangene Buchwert 20 wurde abgezogen statt hinzugefügt; Zugänge müssen auch diesen Abgang ausgleichen.'],
 ['€75 million','Der abgegangene Buchwert 20 wurde ausgelassen.'],
 ['€95 million','Zugänge müssen Endbestand, Abschreibung und Abgang vollständig erklären.']
 ],2,[F('Capex=300-260+35+20=95','Aus der Bestandsidentität wird nach dem unbekannten Zugang aufgelöst.',[['Capex','Bezahlte Anlagenzugänge in Mio. Euro.']]),'Der Verkaufserlös wäre für den gesamten Investitions-Cashflow zusätzlich erforderlich; der genannte Abgang 20 ist nur sein Buchwert.'],'investing-financing'),
 q('12','practice','a b','A firm pays €110 million for equipment and receives €28 million from selling old equipment with a €22 million carrying amount. With no other investing transactions, investing cash flow is:',[
 ['−€104 million','Hier wurde nur der Gewinn 6 statt des gesamten Erlöses 28 berücksichtigt.'],
 ['−€88 million','Hier wurde der Buchwert 22 statt des Verkaufserlöses verwendet.'],
 ['−€82 million','Der gesamte Erlös wird den tatsächlichen Investitionsauszahlungen gegenübergestellt.']
 ],2,[F('CFI=-110+28=-82','Die Kapitalflussrechnung verwendet Zahlungen, nicht Verkaufsmargen.',[['CFI','Investitions-Cashflow in Mio. Euro.']])],'investing-financing'),
 q('13','practice','a b','Beginning retained earnings are €90 million, net income is €62 million, and ending retained earnings are €137 million. No other retained-earnings changes apply. Cash dividends declared and paid during the year are:',[
 ['€15 million','Der einbehaltene Gewinnanstieg 47 bleibt um 15 unter dem Jahresgewinn.'],
 ['€47 million','Dies ist der Anstieg einbehaltener Gewinne, nicht die Ausschüttung.'],
 ['€62 million','Der gesamte Gewinn wurde nicht ausgeschüttet.']
 ],0,[F('D=90+62-137=15','Der Fall schließt andere Eigenkapitalanpassungen und ungezahlt gebliebene Dividenden aus.',[['D','Gezahlte Dividenden in Mio. Euro.']])],'investing-financing'),
 q('14','practice','a b','A US GAAP company borrows €70 million, repays debt principal of €25 million, issues shares for €30 million, and pays dividends of €12 million. No other financing transactions occur. Financing cash flow is:',[
 ['€33 million','Der Aktienemissionserlös wurde ausgelassen.'],
 ['€63 million','Neue Schulden und Eigenkapitalzufuhr abzüglich Tilgung und Ausschüttung.'],
 ['€87 million','Dividenden wurden als Zufluss statt als Abfluss behandelt.']
 ],1,[F('CFF=70-25+30-12=63','Tilgung ist vom gesonderten Zinsaufwand zu unterscheiden.',[['CFF','Finanzierungs-Cashflow in Mio. Euro.']])],'investing-financing'),
 q('15','practice','a b','Opening cash is €40 million, operating cash flow €75 million, investing cash flow −€60 million, financing cash flow −€10 million, and the exchange-rate effect on cash −€3 million. Ending cash is:',[
 ['€42 million','Die gesonderte Währungswirkung gehört in die Bestandsüberleitung.'],
 ['€45 million','Die Währungswirkung wurde ausgelassen.'],
 ['€48 million','Die negative Währungswirkung wurde mit umgekehrtem Vorzeichen verwendet.']
 ],0,[F('Cash_1=40+75-60-10-3=42','Die Summe der drei Tätigkeitsbereiche allein erklärt bei Währungseffekten nicht immer die gesamte Bestandsänderung.',[['Cash_1','Zahlungsmittelendbestand in Mio. Euro.']])],'reconcile'),
 q('16','practice','b c','A company reports revenue of €600 million and an increase in trade receivables of €45 million. The increase includes €17 million of receivables acquired in a business combination; there are no other non-operating changes. Customer cash receipts from the reported revenue are:',[
 ['€555 million','Dies behandelt übernommene Altforderungen fälschlich als Ergebnis des eigenen aktuellen Umsatzes.'],
 ['€572 million','Operativer Forderungsaufbau beträgt nur 28.'],
 ['€617 million','Die tatsächliche operative Forderungsänderung wurde nicht berücksichtigt.']
 ],1,[F('\\Delta AR_{op}=45-17=28,\\qquad C_{cust}=600-28=572','Akquisitionsbedingte Bestandszugänge werden vor der direkten Überleitung entfernt.',[['\\Delta AR_{op}','Operativer Forderungsanstieg in Mio. Euro.'],['C_{cust}','Zugehörige Kundeneinzahlungen in Mio. Euro.']])],'noncash'),
 q('17','practice','c','An indirect cash-flow statement reports net income and depreciation but gives no information about customer, supplier, tax, or working-capital balances. These two figures alone are:',[
 ['always sufficient to reconstruct all direct operating cash-flow categories.','Für einzelne Zahlungsarten fehlen die zugehörigen periodischen Abgrenzungen.'],
 ['insufficient to reconstruct all direct cash-flow categories reliably.','Gesamtgewinn und Abschreibung bestimmen nicht separat Kundeneingänge und Lieferantenzahlungen.'],
 ['sufficient if net income is positive.','Das Vorzeichen ergänzt die fehlenden Informationen nicht.']
 ],1,['Eine Umrechnung benötigt passende Erlös- und Aufwandsdaten sowie zugehörige Bestandsbewegungen, bereinigt um nicht operative Änderungen. Derselbe CFO kann aus verschiedenen Bruttozahlungen entstehen.'],'workflow'),
 q('18','practice','d','For an ordinary company under US GAAP, interest paid is generally classified as:',[
 ['operating.','Die allgemeine US-Klassifikation behandelt gezahlten Zins operativ.'],
 ['financing solely because the principal is debt.','Die Finanzierungsnatur des Kredits ändert diese allgemeine US-Zinsklassifikation nicht.'],
 ['investing because interest affects present value.','Bewertungszusammenhänge bestimmen nicht diese Cashflowkategorie.']
 ],0,['Die Tilgung des Kreditbetrags gehört dagegen zur Finanzierungstätigkeit. Zins und Tilgung dürfen bei der Klassifikation nicht zusammengeworfen werden.'],'standards'),
 q('19','practice','d','Under IAS 7 before applying the IFRS 18 amendments, an ordinary company generally could classify interest paid as operating or financing, provided that the classification was:',[
 ['changed each period to maximize reported operating cash flow.','Die Wahl wird konsistent angewendet, nicht je Ergebnisziel gewechselt.'],
 ['applied consistently from period to period.','Die frühere Wahlmöglichkeit bedeutet keine beliebige jährliche Darstellung.'],
 ['omitted from the cash-flow statement.','Eine tatsächliche relevante Zahlung verschwindet nicht durch ein Wahlrecht.']
 ],1,['Beim Zeitvergleich muss der Anwendungsstand angegeben werden. Die durch IFRS 18 geänderten Regeln beseitigen wesentliche frühere Wahlmöglichkeiten für gewöhnliche Unternehmen.'],'standards'),
 q('20','practice','d','For a company applying IFRS 18 that neither invests in assets nor provides financing to customers as a specified main business activity, interest received and dividends received are generally classified as:',[
 ['investing cash flows.','Für den beschriebenen gewöhnlichen Unternehmensfall ist die Zuordnung zur Investitionstätigkeit vorgesehen.'],
 ['operating cash flows in every industry.','Spezielle Hauptgeschäftstätigkeiten müssen getrennt beurteilt werden; die allgemeine Aussage wäre zu weit.'],
 ['financing cash flows.','Dies verwechselt erhaltene Anlageerträge mit Zahlungen an Kapitalgeber.']
 ],0,['Die Aufgabe schließt die besonderen Hauptgeschäftstätigkeiten bewusst aus. Bei Banken oder bestimmten Anlageunternehmen muss die Zuordnung anhand der einschlägigen Regeln geprüft werden.'],'standards'),
 q('21','practice','d','Under IFRS 18’s IAS 7 amendments, dividends paid are classified as:',[
 ['operating whenever net income is positive.','Das Vorzeichen des Gewinns begründet keine operative Klassifikation.'],
 ['financing.','Ausschüttungen werden der Finanzierungstätigkeit zugeordnet.'],
 ['investing whenever shareholders reinvest them.','Die spätere Verwendung durch die Aktionäre bestimmt nicht die Kategorie beim zahlenden Unternehmen.']
 ],1,['Die neue Regel ist von früheren IAS-7-Wahlmöglichkeiten zu unterscheiden. Für eine konkrete Aufgabe sind angegebenes Regelwerk und Anwendungsstand maßgeblich.'],'standards'),
 q('22','practice','a b d','An ordinary firm applying IFRS 18 has operating profit of €150 million, depreciation of €30 million, a €5 million gain on an investing asset sale, an operating working-capital increase of €18 million excluding tax balances, and cash taxes paid of €32 million. All interest paid is financing; no other adjustments apply. Operating cash flow is:',[
 ['€125 million','Betriebsergebnis wird um nicht zahlungswirksame und nicht operative Posten sowie tatsächliche Steuern übergeleitet.'],
 ['€135 million','Der Veräußerungsgewinn wurde addiert statt entfernt.'],
 ['€157 million','Die tatsächliche Steuerzahlung wurde ausgelassen.']
 ],0,[F('CFO=150+30-5-18-32=125','Der Ausgangspunkt ist hier Operating Profit; deshalb werden Steuerauszahlungen erst in der Überleitung abgezogen.',[['CFO','Operativer Cashflow in Mio. Euro unter den angegebenen IFRS-18-Annahmen.']]),'Ein zusätzlicher Abzug gezahlter Finanzierungszinsen wäre in diesem Fall falsch. Steuerverbindlichkeiten sind nicht noch einmal zu korrigieren, weil bereits Cash Taxes verwendet werden.'],'ifrs18-case'),
 q('23','practice','a d','A company changes its cash-flow presentation so that €14 million of interest paid moves from operating to financing activities. Operating cash flow had been €86 million and financing cash flow −€25 million. With identical payments, the new figures are:',[
 ['€100 million operating and −€39 million financing.','Der entfernte operative Abfluss erhöht CFO und belastet CFF gleich hoch.'],
 ['€72 million operating and −€11 million financing.','Dies wäre die umgekehrte Umgliederung.'],
 ['€100 million operating and −€25 million financing.','Der Abfluss darf nicht aus beiden Kategorien verschwinden.']
 ],0,[F('CFO_1=86+14=100,\\qquad CFF_1=-25-14=-39','Die Summe bleibt in beiden Darstellungen 61.',[['CFO_1','Neuer operativer Cashflow in Mio. Euro.'],['CFF_1','Neuer Finanzierungs-Cashflow in Mio. Euro.']])],'standards'),
 q('24','practice','d','A bank adopts IFRS 18. An analyst should classify the bank’s interest-related cash flows by:',[
 ['automatically applying the table for companies with no specified main business activities.','Die Aufgabe beschreibt gerade ein Unternehmen, bei dem Finanzierung zentrale Geschäftstätigkeit sein kann.'],
 ['assessing the specified-main-business-activity rules and the relevant income-statement classification.','Die Ausnahmen verlangen eine auf den Geschäftstyp bezogene Prüfung.'],
 ['excluding all interest because it is internal to banking.','Zinsen aus Bankgeschäften sind reale Zahlungsströme gegenüber anderen Parteien.']
 ],1,['Die vereinfachte Tabelle für gewöhnliche Industrieunternehmen darf nicht ungeprüft auf Banken übertragen werden. Die konkrete Art des Ertrags und seine IFRS-18-Klassifikation sind relevant.'],'standards'),
 q('25','practice','a c','A company’s trade receivables fall by €12 million because of a write-off, with no cash receipt from the affected customers. Treating the entire decrease as customer cash collection would:',[
 ['overstate the related customer cash receipts by €12 million.','Die Ausbuchung verringert den Anspruch ohne Eingang; sie muss aus der Bestandsüberleitung entfernt werden.'],
 ['understate receipts by €12 million.','Es wurde gerade ein nicht vorhandener Eingang hinzugefügt.'],
 ['be correct because all receivable decreases are cash receipts.','Bestände können sich auch durch Ausfall, Erwerb, Währung und andere Vorgänge ändern.']
 ],0,['Die einfache Formel Umsatz minus Forderungsänderung benötigt bereinigte Bewegungen. Im beschriebenen isolierten Vorgang ist die zugehörige Einzahlung null.'],'noncash'),
 q('26','practice','a b','A firm switches from indirect to direct presentation of operating cash flows while applying identical accounting and classification policies to the same transactions. Total operating cash flow should:',[
 ['remain unchanged.','Beide Methoden überleiten dieselben tatsächlichen operativen Zahlungen.'],
 ['increase by depreciation.','Der indirekte Rückaddierungsposten ist keine zusätzliche Zahlung, die beim Methodenwechsel entsteht.'],
 ['become equal to revenue.','Direkter Ausweis verwendet Einzahlungen und Auszahlungen, nicht nur Umsatz.']
 ],0,['Der Unterschied liegt in der Darstellung der Herleitung: Zahlungsarten direkt oder Überleitung aus einem Ergebniswert. Ein abweichender Gesamtbetrag wäre ein Anlass zur Fehlersuche.'],'workflow'),
 q('a1','mock-a','b c','Revenue is €900 million. Receivables rise by €50 million, including a €12 million increase from foreign-currency translation and an €8 million write-off that reduced the balance. No other changes occur. Customer cash receipts are:',[
 ['€854 million','Der operative Aufbau vor Ausbuchung beträgt 46; dieser wird vom Umsatz abgezogen.'],
 ['€862 million','Der Forderungsausfall wurde nicht aus der Bestandsüberleitung herausgerechnet.'],
 ['€870 million','Die Ausbuchung wurde in die falsche Richtung korrigiert.']
 ],0,[F('50=900-C_{cust}+12-8,\\qquad C_{cust}=854','Die vollständige Bewegungsgleichung verhindert Vorzeichenfehler bei gegenläufigen nicht zahlungswirksamen Effekten.',[['C_{cust}','Kundeneinzahlungen in Mio. Euro.']]),'Alternativ: operativer Forderungsaufbau = 50 − 12 + 8 = 46. Die Wertberichtigung im Ergebnis ist von der Bestandsausbuchung zu unterscheiden.'],'noncash'),
 q('a2','mock-a','a b','A cash-flow reconstruction reports PP&E additions of €150 million. Of these, €40 million were acquired through a non-cash lease and €15 million remain unpaid to the equipment supplier. All other additions were paid in cash, and no prior equipment payables were settled. The cash outflow for these additions is:',[
 ['€95 million','Nicht zahlungswirksamer Lease und noch offene Anlagenrechnung werden entfernt.'],
 ['€110 million','Die unbezahlte Anlagenrechnung wurde fälschlich als Zahlung behandelt.'],
 ['€150 million','Alle Bilanzzugänge wurden mit Zahlung gleichgesetzt.']
 ],0,[F('C_{capex}=150-40-15=95','Die Bestandsgröße Zugang muss für den Cashflow um Finanzierungs- und Abgrenzungsvorgänge bereinigt werden.',[['C_{capex}','Investitionsauszahlung für die beschriebenen Zugänge in Mio. Euro.']]),'Die Anlagenverbindlichkeit gehört nicht ohne Prüfung in eine Überleitung der operativen Lieferantenzahlungen.'],'noncash'),
 q('b1','mock-b','a b c','A company reports opening and closing operating payables of €60 million and €75 million. Total supplier cash payments are €420 million, and inventory rises by €25 million. Assume all payables relate to inventory purchases and no other changes. Cost of goods sold is:',[
 ['€380 million','Der Verbindlichkeitsanstieg wurde vom Cashbetrag abgezogen statt zum Einkauf hinzugefügt.'],
 ['€410 million','Käufe 435 abzüglich Lageraufbau 25 ergeben Verbrauch 410.'],
 ['€460 million','Der Lageraufbau wurde zum Einkauf addiert statt vom Verbrauch getrennt.']
 ],1,[F('Purch=420+(75-60)=435,\\qquad COGS=435-25=410','Vom bekannten Zahlungsbetrag wird rückwärts zu Einkauf und dann zum Verbrauch gerechnet.',[['Purch','Warenkäufe in Mio. Euro.'],['COGS','Umsatzkosten in Mio. Euro.']])],'supplier-cash'),
 q('b2','mock-b','b d','An ordinary IFRS 18 company reconciles operating profit to operating cash flow. It subtracts cash taxes paid of €27 million and also adds the €6 million increase in tax payable that was already used to derive those cash taxes. With all other adjustments correct, this treatment:',[
 ['overstates operating cash flow by €6 million.','Die Steuerabgrenzung wird nach Verwendung der tatsächlichen Zahlung doppelt berücksichtigt.'],
 ['correctly removes deferred tax expense.','Eine laufende Steuerverbindlichkeitsänderung ist nicht automatisch latenter Steueraufwand.'],
 ['understates operating cash flow by €6 million.','Der zusätzliche positive Posten erhöht statt senkt den ausgewiesenen Betrag.']
 ],0,['Operating Profit enthält im Fall noch keinen Steueraufwand. Die Subtraktion von Cash Taxes genügt daher für diese Steuerzahlung. Wer stattdessen von Steueraufwand ausgeht, benötigt eine eigene korrekte Überleitung, darf sie aber nicht zusätzlich auf bereits ermittelte Cash Taxes anwenden.'],'ifrs18-case')
];
