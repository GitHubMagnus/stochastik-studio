const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,solution,section)=>Q('co-'+id,'company','equity',pool,los,stem,options,0,solution,{section});
module.exports=[
 q('01','practice','a b c','The most useful company analysis connects historical performance to:',[
 ['its underlying operating causes, current resources and obligations, and explicit future assumptions.','Die wirtschaftliche Ursache entscheidet, ob vergangene Leistung fortbestehen kann.'],
 ['a forecast in which every historical ratio remains unchanged.','Konstante Quoten können veränderte Preise, Kapazität oder Kapitalbedarf übersehen.'],
 ['an automatic buy recommendation whenever revenue has grown.','Umsatzwachstum beweist weder Ertragsqualität noch Attraktivität relativ zum Aktienpreis.']
 ],['Vergangenheit beschreibt Ergebnisse unter damaligen Umständen. Die Prognose benötigt Kunden, Wettbewerb, Kosten, Kapital und Finanzierung zum aktuellen Stichtag.','Die vollständige Kette macht Annahmen und Gegenhypothesen prüfbar.'],'scope'),
 q('02','practice','a b','Management attributes a margin increase to a stronger brand. The analyst should most appropriately:',[
 ['test realized prices, mix, costs and alternative explanations using additional evidence.','Eine Managementerklärung ist eine Hypothese, kein unabhängiger Beweis.'],
 ['accept the claim because margin is a directly measured brand-strength statistic.','Marge kann durch viele Ursachen verändert werden.'],
 ['ignore company information and use only the stock price.','Berichte sind wichtige Quellen, deren Aussagen dennoch geprüft werden.']
 ],['Preismix, Inputkosten, Auslastung und Einmaleffekte können dieselbe Margenänderung erzeugen.','Kundenverhalten, Vertragsverlängerung und genaue Finanzüberleitung helfen, die Brandthese zu beurteilen.'],'evidence'),
 q('03','practice','a','A firm promises broad customization, rapid delivery and the lowest full cost. A credible competitive-strategy assessment should first examine:',[
 ['whether the required activities and resources fit together and create valued differences for the intended customers.','Die Kombination benötigt tragfähige Fähigkeiten und Kosten.'],
 ['whether the strategy contains the word innovation.','Ein Name erklärt keine wirtschaftliche Position.'],
 ['only the size of its current market share.','Anteil ersetzt weder Kunden- noch Aktivitätsanalyse.']
 ],['Strategie benennt Kundengruppe, Nutzen, Aktivitätskette und wirtschaftliche Umsetzung.','Mehrere Leistungsversprechen können gemeinsam tragfähig sein, müssen aber mit Kapazität, Kosten und Kapital begründet werden.'],'strategy'),
 q('04','practice','a b','A company charges less than rivals. This fact alone establishes:',[
 ['neither cost leadership nor superior profitability.','Niedriger Preis kann aus niedrigen Kosten oder aus schwacher Wirtschaftlichkeit entstehen.'],
 ['that its complete costs are lower.','Der Preis ist keine vollständige Kostenmessung.'],
 ['that its return on capital is higher.','Kapitalbedarf und verbleibender Gewinn fehlen.']
 ],['Kostenführerschaft betrifft die vollständige Leistung zu vergleichbaren Anforderungen.','Kostengrenze, Qualität, variable und feste Kosten sowie Kapital werden geprüft, bevor der Preis interpretiert wird.'],'position'),
 q('05','practice','a b','A differentiated provider charges 110, incurs variable cost of 70, sells 2 million units and has fixed operating costs of 60 million. Its EBIT, in millions, is:',[
 ['20.00','Preisprämie und variable Mehrkosten lassen Stückbeitrag vierzig.'],
 ['40.00','Dies ist der Stückdeckungsbeitrag in Euro, nicht der gesamte EBIT in Millionen.'],
 ['80.00','Dies ist der Deckungsbeitrag vor Fixkosten.']
 ],[F('EBIT=(110-70)\\cdot2-60=20','Die hohe Preisposition liefert erst nach ihrer vollständigen Kostenbasis den Gewinn.',[['EBIT','Operativer Gewinn in Millionen.']]),'Eine niedrigere Preisfirma kann denselben oder höheren Gewinn besitzen, wenn ihre Kosten und ihr Kapitalbedarf anders sind.'],'position'),
 q('06','practice','a','A specialist targets one customer segment with particularly reliable service. Its strategy is best evaluated as:',[
 ['a focused position whose customer value, resource cost and concentration risk need evidence.','Die engere Kundengruppe kann einen Vorteil und zugleich Abhängigkeit schaffen.'],
 ['necessarily inferior to every broad-market strategy.','Keine allgemeine Rangfolge entscheidet die konkrete Wirtschaftlichkeit.'],
 ['a guarantee of permanent immunity from entry.','Konkurrenz und Kundenalternativen können sich ändern.']
 ],['Fokus benennt einen engeren Zielbereich; er kann kosten- oder leistungsorientiert sein.','Die Position benötigt passende Fähigkeiten und tragfähige Zahlungen, nicht nur eine kleine Marktdefinition.'],'strategy'),
 q('07','practice','a c','A firm has a high ROIC calculated from nearly fully depreciated assets. The most appropriate conclusion is that:',[
 ['the result may partly reflect the book-capital basis and requires examination of economic resources and replacement needs.','Ein kleiner Buchnenner kann die Quote erhöhen.'],
 ['it necessarily has a wide permanent economic moat.','Eine hohe einzelne historische Quote beweist keinen dauerhaften Schutz.'],
 ['replacement investment is irrelevant because book assets are low.','Physische Leistungsfähigkeit und aktuelle Ersatzkosten können trotzdem erheblich sein.']
 ],['Kapitaldefinition, Anlagenalter und nicht aktivierte Ressourcen beeinflussen die gemessene Rendite.','Wettbewerbsvorteile werden zusätzlich aus Kundennutzen, Kosten und tatsächlicher Haltbarkeit erklärt.'],'advantage'),
 q('08','practice','a b c','A firm has strong net revenue retention because a small number of large customers expand substantially. The analyst should additionally consider:',[
 ['concentration, renewal, delivery cost and the consequences of losing an expanding customer.','Die Gesamtquote kann starke Einzelabhängigkeit verdecken.'],
 ['that all customers must therefore remain.','Umsatzausbau kann verlorene Kunden überkompensieren.'],
 ['that no working capital is needed for the additional services.','Leistung und Zahlungsbedingungen können zusätzliche Ressourcen verlangen.']
 ],['Umsatzbindungsquote und Kundenanzahl sind andere Größen.','Eine gute Ertragsgeschichte benötigt zugleich Kosten-, Bestands- und Risikofolgen derselben Kundengruppe.'],'contracts'),
 q('09','practice','b','Unit volume rises 12%, local realized prices rise 3%, and each local-currency unit translates into 5% less reporting currency. With unchanged scope, reporting-currency revenue growth is:',[
 ['9.5920%','Drei passende Wachstumsfaktoren werden miteinander multipliziert.'],
 ['10.0000%','Dies addiert gewöhnliche Prozentänderungen und lässt Kreuzterme aus.'],
 ['15.3600%','Dies berücksichtigt den Wechselkurseffekt nicht.']
 ],[F('g_S=1{,}12\\cdot1{,}03\\cdot0{,}95-1=9{,}592\\%','Menge und lokaler Preis wachsen stärker als der in Berichtswährung sichtbare Umsatz.',[['g_S','Umsatzwachstum in Berichtswährung.']]),'Umfang, Periode und Nettopreisdefinition müssen für alle Faktoren gleich sein.'],'revenue'),
 q('10','practice','b','Every individual product price is unchanged, but the company sells a larger proportion of premium products. Its average realized price can:',[
 ['increase because of mix without any individual price increase.','Teurere Produktgruppen erhalten höhere Mengengewichte.'],
 ['increase only if its pricing power has improved.','Die Mischung kann dieselbe Beobachtung erzeugen.'],
 ['never change unless the currency changes.','Produktgewichte sind ein eigener Treiber.']
 ],['Ein Durchschnittspreis ist Gesamtumsatz relativ zu passender Menge.','Einzelpreise, Gewichte, Qualität und Währung werden auseinandergehalten; ein Mixanstieg wird nicht nochmals als Einzelpreismaßnahme addiert.'],'mix'),
 q('11','practice','b','A company sells 1.2 million basic units at 80 and 0.3 million premium units at 160. Next year, quantities are 1.3 million and 0.4 million and prices are 84 and 168. Total next-year revenue, in millions, is:',[
 ['176.40','Jeder Bereich wird mit seinem eigenen neuen Preis und seiner neuen Menge gerechnet.'],
 ['151.20','Dies erhöht nur die alten Umsätze um fünf Prozent.'],
 ['168.00','Dies rechnet die neuen Mengen nur mit den alten Preisen.']
 ],[F('S_1=1{,}3\\cdot84+0{,}4\\cdot168=176{,}4','Der Umsatz steigt gegenüber 144 auf neuer Preis- und Mengenbasis.',[['S_1','Gesamter neuer Jahresumsatz in Millionen.']]),'Premiumgewicht und Einzelpreise tragen beide bei; ein Gesamtstückpreis darf nicht ohne Gewichtskontrolle übernommen werden.'],'mix'),
 q('12','practice','b','Two exact revenue bridges allocate different amounts to price and volume because one changes price first and the other volume first. This difference:',[
 ['can reflect a different allocation of the cross effect even when both reconcile to the same revenue change.','Die Zerlegungskonvention beeinflusst Teilbeiträge.'],
 ['proves that at least one bridge must omit revenue.','Beide können dieselbe vollständige Änderung darstellen.'],
 ['permits adding both bridges’ price effects to one total.','Das würde Wirkungen doppelt erfassen.']
 ],['Ein Mengenfaktor multipliziert einen Preisfaktor; ihr gemeinsamer Kreuzterm muss genau einmal enthalten sein.','Die Reihenfolge wird dokumentiert und die Gesamtüberleitung kontrolliert.'],'bridge'),
 q('13','practice','b','An original customer cohort has revenue of 100. Churn removes 10, downgrades remove 5 and expansions add 20. New customers add 30. Net revenue retention for the original cohort is:',[
 ['105.00%','Neue Kunden gehören nicht in den Zähler der ursprünglichen Basis.'],
 ['135.00%','Dies schließt die neuen Kunden fälschlich ein.'],
 ['85.00%','Dies ist die Bruttoumsatzbindung vor Ausbau.']
 ],[F('NRR=(100-10-5+20)/100=105\\%','Die gesamte neue Umsatzgröße ist 135, aber NRR betrifft nur die ursprünglichen Kunden.',[['NRR','Net Revenue Retention der gegebenen ursprünglichen Kohorte.']]),'Die neue Kundenakquisition erklärt zusätzliche Unternehmensumsätze, nicht die Kundenbindungsquote dieser Basis.'],'contracts'),
 q('14','practice','a b','A net revenue retention rate of 100% implies that:',[
 ['expansion of retained accounts may offset lost revenue, so individual customer retention is not established.','Netto und Brutto messen verschiedene Wirkungen.'],
 ['no customers or revenue contracts have been lost.','Ausbau kann Verlust ausgleichen.'],
 ['all customer invoices have been collected in cash.','Erlösbindung ist keine Zahlungsquote.']
 ],['Abwanderung, Rückstufung und Ausbau derselben Basis werden gemeinsam im Nettoaggregat gemessen.','Logo-Bindung, Bruttoumsatzbindung, tatsächliche Zahlung und Kosten benötigen zusätzliche Angaben.'],'contracts'),
 q('15','practice','a b','A list price rises 6%, but discounts and concessions also increase. To assess pricing power, the most useful revenue measure is:',[
 ['the comparable realized net price together with volume and customer behavior.','Der tatsächlich durchgesetzte Erlös ist entscheidend.'],
 ['the new list price alone.','Ein nominelles Angebot kann durch andere Bedingungen aufgehoben werden.'],
 ['only the company’s registered share capital.','Diese Kapitalgröße misst keine Preisdurchsetzung.']
 ],['Rabatte, Retouren, Serviceumfang und Vertragszeit beeinflussen den realisierten Preis.','Mengen- und Kostenfolgen entscheiden, ob die Maßnahme wirtschaftlich erfolgreich ist.'],'pricing'),
 q('16','practice','b','A price rises from 100 to 110 and comparable quantity falls from 200 to 180, with no other demand changes. The midpoint price elasticity, using a negative sign, is closest to:',[
 ['−1.1053','Die Prozentänderungen werden auf ihre jeweiligen Mittelpunkte bezogen.'],
 ['−1.0000','Dies verwendet nur Anfangsbasen für beide Veränderungen.'],
 ['1.1053','Dies verliert das hier ausdrücklich negative Nachfragevorzeichen.']
 ],[F('\\varepsilon_{arc}=(-20/190)/(10/105)\\approx-1{,}105263','Die endliche Bogenelastizität ist nicht automatisch eine ganze geschätzte Nachfragekurve.',[['\\varepsilon_{arc}','Mittelpunktselastizität der gegebenen zwei Punkte.']]),'Sie setzt den genannten Vergleich ohne andere Nachfrageveränderung voraus.'],'elasticity'),
 q('17','practice','a b','Observed quantity falls after a price increase during a recession. The ratio of the two observed changes:',[
 ['does not by itself isolate the causal price elasticity because other demand drivers also changed.','Konjunktur und weitere Einflüsse können die Mengenreaktion erklären.'],
 ['must be the true stable demand curve parameter.','Ein Zeitvergleich liefert ohne Trennung der Ursachen keinen solchen Beweis.'],
 ['proves the company can never have pricing power.','Die konkrete Kunden- und Kostenposition bleibt zu untersuchen.']
 ],['Preiselastizität beschreibt eine Preisreaktion unter festgehaltenen übrigen Umständen.','Die Analystin untersucht alternative Ursachen, Perioden und spätere Verlängerungen, bevor sie eine dauerhaft konstante Reaktion annimmt.'],'elasticity'),
 q('18','practice','b','A company charges 100, sells 2 million units, incurs variable cost of 60 per unit and fixed costs of 60 million. At price 105 and volume 1.9 million, which conclusion is correct?',[
 ['revenue falls while EBIT rises because variable costs fall more than revenue.','Umsatz minus 0,5 und variable Kosten minus sechs erhöhen den EBIT um 5,5.'],
 ['EBIT must fall whenever revenue falls.','Die Kostenreaktion kann den Erlösrückgang überwiegen.'],
 ['revenue rises by exactly 5% because price rises by 5%.','Die Menge sinkt ebenfalls.']
 ],[F('S_1=199{,}5<200,\\quad EBIT_1=(105-60)\\cdot1{,}9-60=25{,}5>20','Die höhere Stückspanne und geringere variable Kosten wirken gemeinsam.',[['S_1,EBIT_1','Neuer Umsatz und operativer Gewinn in Millionen.']]),'Die übrigen Kosten und die Mengenreaktion sind ausdrücklich Vergleichsannahmen.'],'price-case'),
 q('19','practice','b','A firm passes a variable unit-cost increase fully into its selling price and keeps volume constant. This action:',[
 ['can preserve EBIT in money while reducing the EBIT percentage margin.','Eine gleiche absolute Stückspanne liegt auf höherem Umsatz.'],
 ['necessarily preserves every profit percentage ratio.','Nenner und Ergebnisstufen können sich ändern.'],
 ['guarantees that future customer volume remains unchanged.','Die konstante Menge ist eine Annahme, keine notwendige Folge.']
 ],['Preis, Kosten und Menge bilden den Gewinn gemeinsam.','Volle Stückkostenweitergabe kann gleichen Geldgewinn erzielen; höhere Erlöse ändern dennoch die Marge. Die tatsächliche Nachfrage wird separat geprüft.'],'pricing'),
 q('20','practice','b c','Revenue is 300, COGS is 180, other cash operating expense is 70 and depreciation outside COGS is 20. EBIT margin is:',[
 ['10.00%','Nach allen operativen Kosten bleibt EBIT dreißig.'],
 ['16.67%','Dies ist EBITDA-Marge vor der genannten Abschreibung.'],
 ['40.00%','Dies ist die Bruttomarge.']
 ],[F('m_{EBIT}=(300-180-70-20)/300=10\\%','Die ausdrücklich außerhalb der COGS liegende Abschreibung wird einmal abgezogen.',[['m_{EBIT}','Operative EBIT-Marge.']]),'Eine andere Kostenklassifikation benötigt eine entsprechend passende Überleitung.'],'margins'),
 q('21','practice','b c','EBIT is 40, interest is 8 and all taxable income is taxed immediately at 25%. There are no other claims or income items. Net income is:',[
 ['24.00','Zins wird vor der ausdrücklich nutzbaren Modellsteuer abgezogen.'],
 ['30.00','Dies ist NOPAT bei unverschuldeter Steuerbasis.'],
 ['22.00','Dies zieht Zins nach Steuer auf den gesamten EBIT ab.']
 ],[F('NI=(40-8)(1-0{,}25)=24','Nettogewinn enthält die Finanzierung; NOPAT besitzt eine andere Anspruchsgrenze.',[['NI','Nettogewinn der angegebenen Periode.']]),'Beide Erträge dürfen nicht bei einer Cashflowbrücke unbemerkt vertauscht werden.'],'margins'),
 q('22','practice','b','Reported EBIT of 32 includes a one-time disposal gain of 7 and an independently supported nonrecurring restructuring charge of 3. Excluding these two effects, normalized EBIT is:',[
 ['28.00','Veräußerungsgewinn wird entfernt, ausdrücklich einmaliger Aufwand zurückgenommen.'],
 ['42.00','Dies addiert beide Positionen ungeprüft.'],
 ['22.00','Dies entfernt den Gewinn und zieht den bereits enthaltenen Aufwand erneut ab.']
 ],[F('EBIT_{norm}=32-7+3=28','Die Überleitung ist an die genannten Belege und den analytischen Zweck gebunden.',[['EBIT_{norm}','Analytisch normalisierter operativer Gewinn.']]),'Tatsächliche Restrukturierungszahlungen und künftige Kostenfolgen bleiben Bestandteil der Kapital- und Zahlungsanalyse.'],'normalization'),
 q('23','practice','a b','An expense is labeled exceptional but similar charges recur annually. The analyst should:',[
 ['evaluate whether removing it is justified rather than automatically accept the label.','Wiederkehrender Bedarf kann Teil normaler Wirtschaftlichkeit sein.'],
 ['add it back forever because management calls it exceptional.','Eine Bezeichnung beweist keine Einmaligkeit.'],
 ['ignore its cash and future operating consequences.','Auch eine erklärte analytische Bereinigung entfernt reale Zahlungen nicht.']
 ],['Art, Wiederholung, Umfang und Belege werden geprüft.','Ein normalisierter Ertrag muss seine Abgrenzung und Überleitung erklären, ohne tatsächlich nötige Ressourcen wegzudefinieren.'],'normalization'),
 q('24','practice','b c','At price 100 and variable unit cost 60, volume reaches 2.4 million. The full required fixed operating cost, including depreciation, increases to 75 million. Forecast EBIT in millions is:',[
 ['21.00','Neuer Deckungsbeitrag 96 muss den zusätzlichen Ressourcenblock decken.'],
 ['36.00','Dies behält fälschlich den alten Fixblock sechzig bei.'],
 ['96.00','Dies ist Deckungsbeitrag vor Fixkosten.']
 ],[F('EBIT=(100-60)\\cdot2{,}4-75=21','Lieferbare Menge und benötigte Kapazität werden im selben Plan berücksichtigt.',[['EBIT','Operativer Gewinn in Millionen.']]),'Eine konstante alte Marge oder Kostenquote wäre ohne diesen Ressourcenbedarf unvollständig.'],'costs'),
 q('25','practice','b','A firm’s total contribution margin is 90 and its EBIT is 30. With fixed prices, unit costs and capacity cost, its operating leverage is:',[
 ['3.00','Deckungsbeitrag relativ zum Ausgangs-EBIT.'],
 ['0.33','Dies vertauscht Zähler und Nenner.'],
 ['60.00','Dies ist der absolute Fixkostenblock, kein Hebel.']
 ],[F('DOL=90/30=3','Eine kleine reine Mengenänderung wird unter den genannten Voraussetzungen im EBIT dreifach relativ verstärkt.',[['DOL','Operativer Hebel an der betrachteten Ausgangsstelle.']]),'Die gleiche Aussage über Umsatz benötigt unveränderten Preis und passende Mengenbasis.'],'operating-leverage'),
 q('26','practice','b','Using an operating leverage of 4 to forecast the profit effect of a price increase is generally inappropriate because:',[
 ['the simple sales-volume leverage assumes price is unchanged.','Preisänderung verändert Deckungsbeitrag und möglicherweise Menge.'],
 ['fixed costs never influence EBIT.','Sie sind gerade ein Grund des Mengenhebels.'],
 ['DOL measures only financing risk.','Finanzierungsrisiko wird durch DFL untersucht.']
 ],['DOL im linearen Mengenmodell erklärt eine Mengenänderung bei festem Preis, Stückkosten und Fixblock.','Eine Preisänderung wird aus Erlös, Nachfragerückwirkung und Kosten direkt gerechnet.'],'operating-leverage'),
 q('27','practice','b','Fixed operating cost is 48 million, price is 120 and variable cost is 80 per unit. Break-even volume, in millions, is:',[
 ['1.20','Fixkosten werden durch positiven Stückbeitrag geteilt.'],
 ['0.40','Dies teilt durch Preis ohne variable Kosten.'],
 ['0.60','Dies teilt durch variable Kosten statt Deckungsbeitrag.']
 ],[F('Q_{BE}=48/(120-80)=1{,}2','Diese Menge deckt den definierten operativen Aufwand, nicht automatisch den Kapitalkostensatz.',[['Q_{BE}','Operative Break-even-Menge in Millionen.']]),'Preis, Kosten und verfügbare Kapazität müssen im betrachteten Bereich gelten.'],'breakeven'),
 q('28','practice','b','At exactly zero EBIT, the ratio contribution margin divided by EBIT:',[
 ['is not a finite operating leverage measure.','Der Nenner ist null.'],
 ['is necessarily zero.','Ein positiver Zähler geteilt durch null ist nicht null.'],
 ['means that future operating profit cannot change.','Nahe der Grenze kann der Gewinn besonders empfindlich reagieren.']
 ],['Ein sehr kleiner positiver Ausgangsgewinn kann eine große relative Reaktion ergeben.','Bei null wird der Quotient nicht als brauchbare endliche Kennzahl ausgegeben; genaue Geldänderungen bleiben berechenbar.'],'breakeven'),
 q('29','practice','c','A complete balance sheet has cash 30, receivables 20, inventory 30, net PPE 100, trade payables 20, debt 60 and book equity 100. Defined operating capital excluding cash and financing debt is:',[
 ['130.00','Forderungen plus Vorrat plus Anlagen minus operative Lieferantenverbindlichkeiten.'],
 ['160.00','Dies lässt Cash auf der Finanzierungsseite unbereinigt.'],
 ['180.00','Dies ist der gesamte Aktivabetrag.']
 ],[F('IC=20+30+100-20=130','Die passende Finanzierungsbrücke ist zugleich 100 + 60 − 30.',[['IC','Definiertes operatives Kapital in den angegebenen Einheiten.']]),'Andere Vermögens- oder Anspruchsposten würden diese ausdrücklich vollständige Brücke erweitern.'],'opening'),
 q('30','practice','c','A positive balance-sheet net working capital value guarantees:',[
 ['neither immediate cash availability nor a favorable operating-capital composition.','Vorräte, Forderungen und Fälligkeiten können erheblich verschieden sein.'],
 ['that every payment due tomorrow can be made.','Eine Bilanzdifferenz ist kein heute verfügbares Bankguthaben.'],
 ['that operating working capital equals cash.','Die operative Bestandsbindung schließt Cash hier gerade aus.']
 ],['Bilanzielles Net Working Capital und operativer Waren-/Forderungsbedarf sind verschiedene Abgrenzungen.','Zahlungsfähigkeit verlangt verfügbare Mittel zu den tatsächlich fälligen Zeitpunkten.'],'working-capital'),
 q('31','practice','c','Beginning operating working capital is 40. Ending receivables are 35, inventory 50 and trade payables 25. Additional operating capital tied up is:',[
 ['20.00','Neuer operativer Bestand sechzig minus Anfang vierzig.'],
 ['60.00','Dies ist der gesamte Endbestand, nicht die Veränderung.'],
 ['85.00','Dies addiert Vermögen ohne Lieferantenfinanzierung und Anfangsbestand.']
 ],[F('\\Delta OWC=(35+50-25)-40=20','Nur der zusätzliche Bestand wird in der freien Zahlung als neue Bindung berücksichtigt.',[['\\Delta OWC','Veränderung des operativen Working Capital.']]),'Ein gleichbleibender späterer Endbestand sechzig erzeugt nicht nochmals zwanzig zusätzliche Bindung.'],'working-capital'),
 q('32','practice','b c','A customer negotiates longer payment terms while sales and recognized profit are unchanged. The supplier’s transition-year free cash flow most directly:',[
 ['falls as additional receivables tie up funds.','Ertrag bleibt gleich, der Zahlungseingang erfolgt später.'],
 ['rises because receivables are an asset.','Zusätzliche Forderungen benötigen zunächst Finanzierung.'],
 ['is unaffected whenever EBIT margin is unchanged.','Ergebnisquote und Kapitalbewegung sind andere Größen.']
 ],['Die Forderungsänderung wird aus alter und neuer Umsatz- und Tagesbasis gebildet.','Ausfall, unterjährige Spitzen und fortgesetzter Bestand benötigen weitere Prüfung; ein Bestandsaufbau wird nicht jährlich wiederholt als gleicher neuer Abfluss behandelt.'],'working-capital'),
 q('33','practice','c','Average trade payables are 30, annual credit purchases are 180 and COGS is 150. With 365 days, DPO using the specified purchase basis is closest to:',[
 ['60.8333','Die Lieferantenverbindlichkeiten werden zum passenden Krediteinkauf in Beziehung gesetzt.'],
 ['73.0000','Dies verwendet Umsatzkosten statt angegebenem Krediteinkauf.'],
 ['6.0000','Dies ist der Umschlag ohne Umrechnung in Tage.']
 ],[F('DPO=365\\cdot30/180\\approx60{,}833333','COGS und Einkauf müssen bei veränderter Vorratsbasis nicht übereinstimmen.',[['DPO','Lieferantentage auf der vorgegebenen Krediteinkaufsbasis.']]),'Bestandszeitpunkt, Kreditanteil und Jahresbasis werden neben der Kennzahl genannt.'],'cycle'),
 q('34','practice','b c','Multiplying a cash conversion cycle by daily sales does not generally reproduce operating working capital because:',[
 ['receivables and inventory/payables may use different revenue and cost denominators.','Die Tagesbestandteile stehen für unterschiedliche Zahlungsprozesse.'],
 ['CCC always excludes customer receivables.','DSO ist Teil der definierten Zyklusrechnung.'],
 ['all three balances are necessarily measured at selling prices.','Vorräte und Lieferantenbestände besitzen regelmäßig andere Betragsbasen.']
 ],['Die operative Bestandsrechnung AR plus Vorrat minus AP ermittelt den konkreten Kapitalbetrag.','Der Zyklus erklärt Dauer und Struktur, ist aber ohne passende Umrechnung kein einzelner gemeinsamer Umsatznenner.'],'cycle'),
 q('35','practice','c','Beginning net PPE is 90, cash capex is 25 and depreciation is 10. There are no other asset movements. Ending net PPE is:',[
 ['105.00','Anfangsbestand plus Investition minus Abschreibung.'],
 ['115.00','Dies lässt Abschreibung aus.'],
 ['75.00','Dies zieht Investition statt sie hinzuzufügen ab.']
 ],[F('PPE_1=90+25-10=105','Nettoanlagen wachsen fünfzehn, obwohl Bruttozahlung fünfundzwanzig beträgt.',[['PPE_1','Nettoanlagenbuchwert am Jahresende.']]),'Wertminderung, Verkauf, Leasingzugang oder Währung würde zusätzliche Bestandsbewegung benötigen.'],'investment'),
 q('36','practice','a c','An analyst treats depreciation as an exact estimate of maintenance capex for every company. The strongest criticism is that:',[
 ['historical cost allocation and actual replacement needs can differ because of asset age, prices, technology and capacity requirements.','Abschreibung ist keine garantierte aktuelle Ersatzrechnung.'],
 ['depreciation is always a cash payment to an equipment vendor.','Es ist eine Erfolgszuordnung vergangener Anlagenkosten.'],
 ['maintenance can never affect future service quality.','Unterlassene Erhaltung kann Leistung und spätere Zahlungen beeinträchtigen.']
 ],['Erhaltung wird nach benötigter Leistungsfähigkeit und tatsächlichen Zahlungen beurteilt.','Eine Modellgleichsetzung kann für einen ausdrücklich definierten Fall hilfreich sein, ist aber keine allgemeine Beobachtung.'],'investment'),
 q('37','practice','c','An investment plan includes allocated overhead that would be paid unchanged whether the project proceeds or not. For incremental NPV analysis, this overhead:',[
 ['is not an additional cash outflow solely because it is allocated to the project.','Der richtige Vergleich untersucht tatsächlich veränderte Zahlungen.'],
 ['must always be counted as a new project payment.','Reine Verrechnung schafft keinen zusätzlichen Mittelabfluss.'],
 ['permits ignoring additional inventory needed for the project.','Neu benötigter Bestand ist eine andere relevante Zahlung.']
 ],['Der Plan vergleicht Durchführung mit einer realistischen Alternative.','Neue Bestände, Folgekosten, Kannibalisierung und Gelegenheitseffekte bleiben relevant; unveränderliche Gemeinkosten werden nicht durch Zuordnung inkrementell.'],'project'),
 q('38','practice','a c','NOPAT is 18, defined beginning operating capital is 200 and the suitable comparison cost of capital is 10%. Economic profit for this period is:',[
 ['−2.00','Gewinn liegt unter der Kapitalanforderung zwanzig.'],
 ['18.00','Dies lässt die Kapitalbelastung aus.'],
 ['20.00','Dies ist die Kapitalanforderung, nicht der verbleibende Überschuss.']
 ],[F('EP=18-0{,}10\\cdot200=-2','Positive Erträge sind mit negativer wirtschaftlicher Überrendite vereinbar.',[['EP','Definierter ökonomischer Periodenertrag.']]),'Das ist eine Periodenrechnung; für den Aktienwert werden künftige Zahlungen und Anspruchsgrenzen benötigt.'],'capital-returns'),
 q('39','practice','a c','A company’s historical aggregate ROIC is high. The expected return from a new investment:',[
 ['still needs its own incremental earnings, capital, timing and risk analysis.','Neue Mittel können andere Erträge als der alte Gesamtbestand verdienen.'],
 ['must equal the historical aggregate ROIC.','Alte und neue Kapitalrenditen sind unterschiedliche Größen.'],
 ['can be inferred solely from the current stock price.','Der Aktienpreis enthält keinen eindeutigen beobachteten Projektertrag.']
 ],['Gesamtrendite erklärt die vorhandene Basis. Marginale neue Investition erfordert zusätzlich verursachte Erträge und Ressourcen.','Eine identische Rendite kann bewusst angenommen werden, darf aber nicht als allgemeine Identität ausgegeben werden.'],'capital-returns'),
 q('40','practice','b c','NOPAT is 24, depreciation 8, capex 15 and the increase in operating working capital 5. FCFF is:',[
 ['12.00','Nicht zahlungswirksamer Aufwand wird hinzugefügt, echte Investition und Bestandsaufbau werden abgezogen.'],
 ['24.00','Dies verwechselt operativen Ertrag mit freier Zahlung.'],
 ['28.00','Dies behandelt die zusätzliche Bestandsbindung mit falschem Vorzeichen.']
 ],[F('FCFF=24+8-15-5=12','Operative Nettoinvestition beträgt zwölf; NOPAT minus diese Bindung liefert dieselbe freie Zahlung.',[['FCFF','Freie operative Zahlung vor Finanzierung.']]),'Dieser Anspruch wird nicht nochmals um sämtliche Schuldenbestände als jährliche Kosten reduziert.'],'cashflow'),
 q('41','practice','c','Revenue is 210, receivables decline from 25 to 22, COGS is 120, inventory rises from 30 to 35 and trade payables rise from 20 to 24. All sales and purchases pass through the specified trade accounts. Customer cash receipts are:',[
 ['213.00','Forderungsabbau setzt zusätzlich zum neuen Umsatz alte Ansprüche in Cash um.'],
 ['207.00','Dies verwendet das Vorzeichen des Forderungsaufbaus statt Abbaus.'],
 ['210.00','Dies ignoriert die Bestandsänderung.']
 ],[F('Cash_{customers}=210-(22-25)=213','Der Lieferantenbereich wird getrennt über Einkauf und AP übergeleitet.',[['Cash_{customers}','Kundeneinzahlungen in der angegebenen Periode.']]),'Kreditumsatz ist ein Erlösanspruch; sein Zahlungseingang hängt von alten und neuen Forderungen ab.'],'balance'),
 q('42','practice','c','Using COGS 120, inventory rising from 30 to 35 and trade payables rising from 20 to 24, all purchases on credit, cash paid to suppliers is:',[
 ['121.00','Einkauf 125 minus vier zusätzliches Lieferantenkonto.'],
 ['116.00','Dies ignoriert den zusätzlichen Vorratseinkauf.'],
 ['129.00','Dies addiert statt subtrahiert die zusätzliche Lieferantenfinanzierung.']
 ],[F('Cash_{suppliers}=120+(35-30)-(24-20)=121','Warenverbrauch, Einkauf und Zahlung sind drei unterschiedliche Größen.',[['Cash_{suppliers}','Zahlung an Lieferanten unter den angegebenen Kontenannahmen.']]),'Die operative Cashrechnung vermeidet, Vorratsaufbau in Einkauf und nochmals separat als identischen Abfluss doppelt zu zählen.'],'balance'),
 q('43','practice','b c','FCFF is 30, paid interest is 4, all interest tax benefits are immediately usable at 25%, and net borrowing is 2. With no other claims, FCFE is:',[
 ['29.00','Nachsteuerzins drei wird abgezogen, neue Nettofinanzierung zwei hinzugefügt.'],
 ['28.00','Dies zieht den ganzen Zins ohne Steuerwirkung ab.'],
 ['35.00','Dies addiert Zins statt ihn dem Schuldanspruch zuzuordnen.']
 ],[F('FCFE=30-4(1-0{,}25)+2=29','Die Brücke bewertet den Eigentümeranspruch nach passender Finanzierung.',[['FCFE','Freie Eigentümerzahlung.']]),'Bei anderen Steuer- oder Zinsklassifikationen wird die tatsächliche Brücke angepasst.'],'price-capital'),
 q('44','practice','c','Beginning cash is 20, free equity cash flow before dividends is 12 and cash dividends are 7. There is no additional financing beyond that already included in the free equity cash flow. Ending cash is:',[
 ['25.00','Anfangskasse plus freie Zahlung minus Dividende.'],
 ['32.00','Dies lässt die tatsächliche Ausschüttung aus.'],
 ['39.00','Dies addiert die Dividende statt sie auszuzahlen.']
 ],[F('Cash_1=20+12-7=25','Eine Dividendenauszahlung mindert Kasse; Gewinnfortschreibung des Buchkapitals ist ein anderer Vergleich.',[['Cash_1','Endkasse.']]),'Cash- und Buchkapitalrechnung verwenden dieselbe Ausschüttung einmal, aber unterschiedliche Ausgangserträge.'],'balance'),
 q('45','practice','b c','An annual plan has cash of 30 initially and free equity cash flow before new borrowing of −41.5. No dividend is paid. To reach ending cash of 10, additional year-end borrowing is:',[
 ['21.50','Ohne neue Mittel fehlen nach dem Kapitalbedarf 21,5 bis zum geforderten Endbestand.'],
 ['41.50','Dies erhält die gesamte alte Kasse statt nur den genannten Zielbestand.'],
 ['11.50','Dies würde nur die negative Kasse auf null bringen.']
 ],[F('Borrowing=10-(30-41{,}5)=21{,}5','Der Jahresendbedarf wird aus der Cashfortschreibung abgeleitet, nicht allein aus dem Gewinn.',[['Borrowing','Zusätzlich benötigte Jahresendfinanzierung.']]),'Die Rechnung setzt Auszahlung am Jahresende voraus. Unterjährige Finanzierung und Zinsen benötigen bei anderer tatsächlicher Zeit eine genauere Planung.'],'growth-funding'),
 q('46','practice','c','A company’s EBIT interest coverage improves, but large upcoming capex and debt maturity exceed currently available cash. The analyst should:',[
 ['evaluate the actual payment schedule and credible financing rather than infer liquidity from the earnings ratio.','Zinsdeckung ist kein vollständiger Zahlungsmittelplan.'],
 ['conclude that all obligations can be met because interest coverage is higher.','Tilgung, Investition und Zeitpunkte fehlen in der Quote.'],
 ['treat restricted cash as automatically available for every maturity.','Verfügbarkeit und Bedingungen müssen geprüft werden.']
 ],['Gewinnmaß, Bestandsbedarf, fällige Ansprüche und verfügbare Ressourcen werden getrennt und danach gemeinsam betrachtet.','Nettoschulden setzen passend verfügbares Cash voraus; ein Buchwert allein garantiert keine heute nutzbare Liquidität.'],'financing'),
 q('47','practice','b c','At EBIT of 30 and fixed interest of 6, with a constant usable tax rate and no other claims, financial leverage is:',[
 ['1.25','EBIT relativ zum Ergebnis vor Steuer nach Zins.'],
 ['5.00','Dies ist Zinsdeckung, nicht der relative Gewinnhebel.'],
 ['0.80','Dies vertauscht den relativen Hebel.']
 ],[F('DFL=30/(30-6)=1{,}25','Eine relative EBIT-Änderung wird unter denselben festen Bedingungen im Nettogewinn stärker sichtbar.',[['DFL','Degree of Financial Leverage an dieser Ausgangsstelle.']]),'Aktienzahl, Zins, Steuer und übrige Anspruchsgrenze müssen für eine entsprechende EPS-Interpretation unverändert sein.'],'financial-leverage'),
 q('48','practice','a c','Two firms have the same operating assets and EBIT, but one has more debt and less beginning book equity and reports a higher ROE. This observation alone:',[
 ['does not establish superior operating strategy; financing can increase the ratio and its sensitivity.','Geringerer Buchkapitalnenner und feste Zinslast verändern Rendite und Risiko.'],
 ['proves that the more levered company has stronger pricing power.','Der operative Ertrag ist ausdrücklich gleich.'],
 ['proves that borrowing creates a costless shareholder benefit.','Höhere Belastung und finanzielles Risiko bleiben relevant.']
 ],['Operative Position wird über Kunden, Kosten und passend definierte Kapitalleistung geprüft.','Buch-ROE ist keine sichere künftige Aktienmarktrendite. Finanzierung, Kapitalbasis und Risiken werden im Vergleich offengelegt.'],'financial-leverage'),
 q('a1','mock-a','b c','A supplier’s annual plan has EBIT of 26.1, interest of 3 and an immediately usable 25% tax rate. Depreciation is 15 and capex is 25. Opening operating working capital is 30; ending receivables, inventory and trade payables are 28, 35 and 24. Starting cash is 30, dividends are 20 and required ending cash is 10. New borrowing occurs at year end. The additional borrowing needed is:',[
 ['1.6750','Nettogewinn, Bestandsaufbau, Anlagenzahlung und Ausschüttung werden gemeinsam in die Cashplanung übergeleitet.'],
 ['0.0000','Positiver Gewinn allein reicht nach Investition und Dividende nicht bis zum Zielbestand.'],
 ['21.6750','Dies verwendet das Zielcash zehn fälschlich auch als Anfangskasse statt dreißig.']
 ],[F('NI=(26{,}1-3)\\cdot0{,}75=17{,}325,\\quad\\Delta OWC=(28+35-24)-30=9','Ertrag und operative Bestandsänderung benötigen getrennte Schritte.',[['NI','Nettogewinn der Periode.'],['\\Delta OWC','Zusätzliche operative Bindung.']]),F('FCFE_{before}=17{,}325+15-25-9=-1{,}675','Positiver Nettogewinn wird durch tatsächlich benötigtes Kapital aufgebraucht.',[['FCFE_{before}','Freie Eigentümerzahlung vor neuem Kredit.']]),F('Borrowing=10-(30-1{,}675-20)=1{,}675','Dividende und Zielcash werden anschließend in die Finanzierung einbezogen.',[['Borrowing','Zusätzlicher Jahresendkredit.']]),'Der Anspruch auf Cash ist kein Beweis einer Kreditzusage oder unterjährig ausreichender Mittel.'],'growth-funding'),
 q('b1','mock-b','a c','A differentiated rapid-delivery service raises projected annual NOPAT from 15 to 18 but requires 40 of extra inventory already in place at the beginning of that year. Original operating capital is 130 and the suitable annual capital charge is 9%. All amounts are millions and other assumptions are unchanged. Relative to the original plan, the change in first-year economic profit is:',[
 ['−0.60','Der zusätzliche Gewinn drei liegt unter der zusätzlichen Kapitalanforderung 3,6.'],
 ['3.00','Dies berücksichtigt nur den zusätzlichen Ertrag, nicht den erforderlichen Bestand.'],
 ['2.70','Dies ist die neue gesamte Periodengröße, nicht ihre Änderung.']
 ],[F('\\Delta EP=(18-15)-0{,}09\\cdot40=-0{,}6','Die Position erzeugt mehr Nachsteuerertrag, benötigt dafür aber zusätzliche Ressourcen bereits am Periodenanfang.',[['\\Delta EP','Änderung des definierten ökonomischen Periodenertrags in Millionen.']]),F('EP_0=15-0{,}09\\cdot130=3{,}3,\\quad EP_1=18-0{,}09\\cdot170=2{,}7','Beide Gesamtbetriebe besitzen positiven ökonomischen Ertrag; die Erweiterung vermindert ihn im betrachteten Jahr.',[['EP_0,EP_1','Ökonomischer Periodenertrag ohne und mit dem neuen Service.']]),'Die zusätzliche Ertrags-Kapital-Relation beträgt hier 7,5 Prozent und liegt unter neun Prozent, obwohl der neue Gesamt-ROIC weiterhin darüber liegt. Für ein vollständiges Werturteil werden weitere zukünftige Zahlungen und Risiken benötigt.'],'capital-returns')
];
