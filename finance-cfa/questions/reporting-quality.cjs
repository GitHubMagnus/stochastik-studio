const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('rq-'+id,'reporting-quality','statements',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a','A manufacturer loses its main customer, reports the resulting loss correctly, and clearly explains the implications for future cash flows. The most appropriate assessment is:',[
 ['Reporting quality may be high even though the underlying results are poor.','Eine ungünstige wirtschaftliche Entwicklung kann zutreffend und nützlich berichtet werden.'],
 ['Reporting quality is low because the company reports a loss.','Die Höhe des Gewinns ist kein Maß für die Richtigkeit der Darstellung.'],
 ['Results quality must be high because the disclosure is transparent.','Gute Offenlegung macht den verlorenen Kunden nicht wirtschaftlich unproblematisch.']
 ],0,['Informationsqualität und wirtschaftliche Tragfähigkeit werden separat beurteilt. Der offene Bericht verbessert die Analyse der schlechten Lage, nicht automatisch die Lage selbst.'],'dimensions'),
 q('02','practice','a','Two firms report pre-tax profit of €140 million. Firm A includes a transparently disclosed €45 million one-time disposal gain; Firm B has no non-recurring items. If all recurring operations remain unchanged, A’s recurring starting profit is:',[
 ['€95 million','Der reale, aber nicht erneut erwartete Verkaufserfolg wird für die Prognose entfernt.'],
 ['€140 million','Dies unterstellt implizit einen gleich hohen erneuten Sondergewinn.'],
 ['€185 million','Ein im Gewinn enthaltener positiver Sonderposten muss abgezogen werden.']
 ],0,[F('P_{rec}=140-45=95','Dies ist eine Prognosebereinigung, keine Korrektur eines fehlerhaften Verkaufs.',[['P_{rec}','Wiederkehrender Vorsteuergewinn in Mio. Euro.']])],'economic-quality'),
 q('03','practice','a','Operating after-tax profit is €65 million on invested capital of €1,000 million. The required return on that capital is 9%. Under the stated simple economic-profit model, economic profit is:',[
 ['−€25 million','Die geforderte Kapitalvergütung 90 übersteigt den operativen Nachsteuergewinn.'],
 ['€25 million','Das Vorzeichen des Fehlbetrags wurde vertauscht.'],
 ['€65 million','Die rechnerische Kapitalvergütung wurde vollständig ausgelassen.']
 ],0,[F('EP=65-0{,}09\\cdot1000=-25','Positiver Buchgewinn kann bei höherem Kapitalbedarf wirtschaftlich unzureichend sein.',[['EP','Ökonomischer Überschuss in Mio. Euro.']])],'economic-quality'),
 q('04','practice','a','A company’s CFO rises because it sells down its entire excess inventory during a one-time plant closure. All accounting and disclosures are correct. For a continuing-business forecast, the analyst should:',[
 ['separate the temporary inventory release from recurring cash generation.','Der Bestand kann nach vollständigem Abbau nicht im selben Umfang erneut freigesetzt werden.'],
 ['repeat the same inventory cash release each future year.','Eine endliche Bestandsauflösung ist keine unbegrenzt wiederholbare operative Quelle.'],
 ['classify the historical cash receipt as fictitious because it will not recur.','Fehlende Wiederholbarkeit macht einen echten früheren Zufluss nicht falsch.']
 ],0,['Der historische Cashflow bleibt richtig. Seine Zerlegung zeigt jedoch, welcher Teil eine wiederholbare Prognose trägt.'],'dimensions'),
 q('05','practice','b','A company follows the numerical recognition rules but emphasizes favorable subtotals and omits useful context about their limitations. Relative to neutral and complete communication, its report is best described as:',[
 ['potentially less decision-useful despite formal compliance of the stated amounts.','Auch Auswahl und Darstellung beeinflussen die Informationsqualität.'],
 ['necessarily fabricated because the presentation is selective.','Einseitigkeit beweist noch keine frei erfundenen Geschäfte.'],
 ['equally high quality as long as all highlighted amounts are arithmetically correct.','Rechnerische Richtigkeit allein gewährleistet keine ausgewogene Kommunikation.']
 ],0,['Qualität besitzt mehrere Dimensionen. Ein korrekter Teilbetrag kann ohne seinen Zusammenhang zu einer unzutreffenden Gesamtvorstellung führen.'],'spectrum'),
 q('06','practice','b d','Management knowingly conceals a side agreement that invalidates a material recognized sale, intending to deceive report users. This most clearly differs from a reasonable estimation error because it involves:',[
 ['intentional material misrepresentation.','Der Sachverhalt benennt bewusste Täuschung und eine wesentliche falsche Erfassung.'],
 ['only a conservative choice between equally reasonable estimates.','Die versteckte Abrede ist entscheidungsrelevante Vertragsinformation, keine neutrale Bandbreite.'],
 ['only an unfavorable but faithfully reported business outcome.','Die Beschreibung enthält gerade eine bewusst falsche Darstellung.']
 ],0,['Die Beurteilung stützt sich hier auf ausdrücklich gegebene Absicht und Vertragswirkung. In einer realen Analyse müssten beide erst belegt werden.'],'spectrum'),
 q('07','practice','b','A material spreadsheet error unintentionally overstates inventory. Once discovered, it is corrected and the cause is disclosed. The original error:',[
 ['damaged reporting quality, but its materiality alone does not establish fraud.','Wesentlichkeit und Absicht sind getrennte Merkmale.'],
 ['was fraud solely because it affected a material balance.','Der Sachverhalt bezeichnet die Entstehung als unbeabsichtigt.'],
 ['had no effect on reporting quality because it was later corrected.','Die frühere Information war dennoch fehlerhaft.']
 ],0,['Die Korrektur ist positiv für die aktuelle Informationslage. Zusätzlich bleibt zu prüfen, warum Kontrollen den Fehler zunächst nicht erkannt haben.'],'spectrum'),
 q('08','practice','c g','A company initially overstates an expense provision by €18 million without support, then releases the excess the following year. Ignoring tax and other effects, compared with correct reporting, next-year profit is:',[
 ['€18 million higher.','Die spätere Auflösung kehrt die frühere überhöhte Belastung ertragswirksam um.'],
 ['unchanged because a provision is a balance-sheet item.','Die Veränderung des Bestands kann über die Gewinnrechnung laufen.'],
 ['€18 million lower.','Dies beschreibt die erste Periode, nicht die Folgeauflösung.']
 ],0,['Die ursprünglich scheinbar vorsichtige Behandlung kann später einen unbegründeten Gewinn erzeugen. Über beide Jahre verschiebt sie Erfolg, statt neuen wirtschaftlichen Nutzen zu schaffen.'],'prudence'),
 q('09','practice','c','New engineering evidence supports a longer remaining useful life for a machine. Management documents the evidence and revises depreciation prospectively. The resulting higher current profit:',[
 ['is not by itself evidence that the revision is inappropriate.','Die Eignung folgt der belastbaren Schätzung, nicht allein der günstigen Gewinnwirkung.'],
 ['makes the revision aggressive regardless of the new evidence.','Dies ignoriert die tatsächliche Änderung der Nutzungsprognose.'],
 ['requires past depreciation to be reversed through current income.','Eine begründete neue Schätzung ist nicht automatisch eine rückwirkende Fehlerkorrektur.']
 ],0,['Die neue Restverteilung muss zu Buchwert, Restwert und verbleibender Nutzung passen. Derselbe Effekt wäre anders zu beurteilen, wenn seine fachliche Grundlage fehlte.'],'prudence'),
 q('10','practice','c g','Correct profits would be €150 million and €70 million in two successive years. Unsupported expense of €40 million is added in Year 1 and released in Year 2. Reported profits become:',[
 ['€110 million and €110 million.','Die Zusatzbelastung und spätere Auflösung glätten den Verlauf bei gleichem Gesamtgewinn.'],
 ['€110 million and €70 million.','Die ausdrücklich genannte Auflösung im zweiten Jahr fehlt.'],
 ['€150 million and €110 million.','Die ursprüngliche zusätzliche Belastung fehlt.']
 ],0,['150 − 40 = 110; 70 + 40 = 110. Beide Reihen summieren sich auf 220. Die gleichmäßigere Darstellung bedeutet nicht, dass das Geschäft weniger schwankt.'],'smoothing'),
 q('11','practice','d','A bonus is payable only if reported profit exceeds €100 million. Preliminary profit is €99 million, and management changes a discretionary estimate near year-end. This combination most directly suggests:',[
 ['an incentive to investigate the estimate and its supporting evidence.','Die Schwelle liefert einen konkreten Vorteil für eine bestimmte Änderungsrichtung.'],
 ['conclusive proof that the revised estimate is false.','Der Anreiz ersetzt die Prüfung der tatsächlichen neuen Informationen nicht.'],
 ['that no reporting concern exists if the final profit is audited.','Prüfung beseitigt weder den Anreiz noch jede mögliche Fehlerrisikoquelle.']
 ],0,['Ein sachlicher Prüfpfad verbindet Vergütungsregel, Zeitpunkt, Gewinnwirkung und dokumentierte Schätzungsgrundlage.'],'incentives'),
 q('12','practice','d','Senior management can post large late journal entries without independent review. In a fraud-risk framework, this most directly represents:',[
 ['opportunity.','Fehlende unabhängige Kontrolle schafft einen möglichen Umsetzungsweg.'],
 ['pressure.','Ein Ergebnisziel oder Finanzierungserfordernis wäre eher eine Druckquelle.'],
 ['rationalization.','Eine innere Rechtfertigung betrifft die Begründung des Handelns, nicht die technische Möglichkeit.']
 ],0,['Die Kontrollschwäche ist auch ohne nachgewiesene unzulässige Buchung relevant. Konkrete Befugnisse und Protokolle sind zu prüfen.'],'incentives'),
 q('13','practice','d','A manager argues that an unsupported revenue entry is acceptable because next quarter’s recovery will make everyone whole. The statement primarily illustrates:',[
 ['rationalization of a potentially improper action.','Ein erwarteter späterer Erfolg wird als Rechtfertigung für heutige falsche Erfassung verwendet.'],
 ['independent corroboration that the current recognition criteria are met.','Die Hoffnung auf die Zukunft belegt keine heutige Leistung.'],
 ['a reduction in the need for internal controls.','Eine solche Rechtfertigung kann zusätzliche Überwachung gerade wichtiger machen.']
 ],0,['Eine spätere Erholung ersetzt die heutige Ansatzprüfung nicht. Die Aussage wird als Risikohinweis eingeordnet, nicht als Beleg für jeden einzelnen Buchungsbetrag.'],'incentives'),
 q('14','practice','e','An unqualified audit opinion most appropriately provides:',[
 ['relevant assurance about material financial reporting, with inherent limitations.','Das Urteil ist wichtig, garantiert aber keine absolute Fehlerfreiheit.'],
 ['a guarantee of the company’s ability to generate sustainable future returns.','Künftige Wirtschaftlichkeit ist nicht Gegenstand einer solchen Erfolgsgarantie.'],
 ['a guarantee that collusion or concealed agreements have been detected.','Verdeckte abgestimmte Täuschung kann auch eine sachgerecht durchgeführte Prüfung erschweren.']
 ],0,['Hinreichende Sicherheit und vollständige Gewissheit sind unterschiedliche Ansprüche. Der Analyst liest zudem besondere Prüfungsangaben und den zugrunde liegenden Berichtsrahmen.'],'discipline'),
 q('15','practice','e d','A debt contract imposes penalties for misleading reports but also contains a sharp profit-based covenant threshold. The contract:',[
 ['can discipline reporting while also creating an incentive to manage the threshold measure.','Schutzmechanismus und Druckwirkung können gleichzeitig bestehen.'],
 ['eliminates reporting incentives because penalties exist.','Eine drohende Sanktion kann den Nutzen irreführender Darstellung begrenzen, beseitigt aber nicht jeden Anreiz.'],
 ['makes every permitted accounting estimate a covenant violation.','Zulässige Schätzungen sind nicht allein wegen einer vertraglichen Grenze verboten.']
 ],0,['Definition, Prüfungsrechte und Folgen sind gemeinsam zu lesen. Ein einzelner Kontrollmechanismus wirkt nicht losgelöst vom Verhalten der Beteiligten.'],'discipline'),
 q('16','practice','e','A customer and issuer secretly coordinate a false transaction confirmation. Why may ordinary confirmation procedures be less effective in this case?',[
 ['The apparently independent evidence may itself be part of the collusion.','Die zweite Quelle bestätigt nicht unabhängig, wenn sie an der Täuschung beteiligt ist.'],
 ['Confirmations provide no evidence in any financial audit.','Die beschriebene Einschränkung macht das Verfahren nicht grundsätzlich wertlos.'],
 ['The issuer’s high reported margin validates the confirmation.','Eine ebenfalls berichtete Kennzahl ist kein unabhängiger Echtheitsnachweis.']
 ],0,['Prüfung benötigt je nach Risiko zusätzliche, anders gelagerte Nachweise. Plausibilität und Übereinstimmung mehrerer Aussagen sind bei abgestimmtem Verhalten nicht dasselbe wie Unabhängigkeit.'],'discipline'),
 q('17','practice','f','Net income of €72 million includes a one-time pre-tax expense of €12 million and a one-time pre-tax gain of €8 million. Both have a full 25% tax effect. Symmetrically excluding both items produces adjusted net income of:',[
 ['€75 million','Netto wird der Nachsteuereffekt von 12 minus 8 zurückgenommen.'],
 ['€76 million','Dies ignoriert den Steuereffekt der Vorsteuerkorrekturen.'],
 ['€81 million','Dies entfernt nur den Aufwand und behält den Sondergewinn.']
 ],0,[F('NI_{adj}=72+(12-8)(1-0{,}25)=75','Eine symmetrische Nachsteuerbereinigung berücksichtigt beide Vorzeichen.',[['NI_{adj}','Bereinigter Nettogewinn in Mio. Euro.']])],'adjusted'),
 q('18','practice','f','Management excludes recurring share-based compensation from adjusted earnings because it is non-cash. For a forecast of sustainable economic earnings, the analyst should:',[
 ['consider the recurring compensation and ownership effects rather than treat non-cash as automatically costless.','Arbeitsleistung und mögliche Verwässerung bleiben wirtschaftlich relevant.'],
 ['accept the exclusion solely because no current cash payment occurs.','Gewinnqualität ist nicht auf heutige Auszahlungen beschränkt.'],
 ['deduct the expense twice to offset its non-cash nature.','Eine konsistente Rechnung erfasst denselben Aufwand nicht doppelt.']
 ],0,['Die angemessene Behandlung hängt vom Bewertungsmodell ab. Eine Cashflowüberleitung, eine Gewinnbereinigung und eine Verwässerungsanalyse sind verschiedene Rechnungen.'],'adjusted'),
 q('19','practice','f','A company changes the definition of adjusted operating profit and reports growth relative to an unrevised prior-year figure calculated under the old definition. The most useful next step is to:',[
 ['reconstruct both periods on a comparable basis and review the reason for the change.','Erst gleiche Abgrenzung erlaubt eine sinnvolle Wachstumsinterpretation.'],
 ['treat the percentage as comparable because the metric’s title is unchanged.','Gleiche Namen können unterschiedliche Rechenregeln verdecken.'],
 ['discard all statutory financial statements.','Das Problem betrifft zunächst die zusätzliche Kennzahl und ihre Überleitung.']
 ],0,['Die Anpassungsursachen können sachlich begründet sein. Transparenz über Auswirkungen und vergleichbare Vorperioden sind trotzdem erforderlich für die Analyse.'],'presentation'),
 q('20','practice','f','For IFRS 18 analysis, management-defined performance measures are most appropriately identified by:',[
 ['testing whether each measure meets the standard’s definition, rather than treating every disclosed operating or cash metric as an MPM.','Die Kategorie besitzt einen konkreten Anwendungsbereich.'],
 ['assuming every company-specific ratio is an MPM.','Verhältniszahlen oder reine operative Mengen erfüllen die Definition nicht allein durch ihre Veröffentlichung.'],
 ['assuming a reconciliation makes a measure economically superior to the statutory figure.','Eine Überleitung verbessert Nachvollziehbarkeit, entscheidet aber nicht über wirtschaftliche Relevanz.']
 ],0,['Ansatz der Offenlegungsregeln und analytische Beurteilung bleiben getrennt. Eine MPM stellt eine bestimmte Sicht des Managements dar und benötigt die einschlägigen Erläuterungen.'],'presentation'),
 q('21','practice','g h','Revenue of €96 million and related COGS of €60 million are recorded before the contractual recognition criteria are met. No cash changes hands and taxes are ignored. Correcting both entries reduces current profit by:',[
 ['€36 million','Der zu früh erfasste Nettoerfolg beträgt 96 minus 60.'],
 ['€60 million','Dies ist der zurückzunehmende Aufwand, der die Gewinnkorrektur teilweise kompensiert.'],
 ['€96 million','Dies korrigiert den Umsatz, vergisst aber die ebenfalls vorgezogenen Umsatzkosten.']
 ],0,[F('\\Delta P=-(96-60)=-36','Die Forderung wird ausgebucht und der Vorratsverbrauch rückgängig gemacht.',[['\\Delta P','Änderung des Periodengewinns in Mio. Euro.']])],'revenue'),
 q('22','practice','g','A €48 million cash operating cost that fails asset recognition criteria is incorrectly capitalized and depreciated by €12 million in the same year. Its payment is also wrongly classified as investing. Ignoring tax, the reported overstatements of profit and CFO are respectively:',[
 ['€36 million and €48 million.','Gewinnfehler ist 48 − 12; der gesamte operative Abfluss 48 wurde aus CFO entfernt.'],
 ['€48 million and €48 million.','Die bereits erfasste Abschreibung vermindert den Gewinnfehler.'],
 ['€36 million and €36 million.','Dies verwechselt die Gewinnüberhöhung mit der vollen Cashflowumgliederung.']
 ],0,['Die indirekte Brücke stimmt mit dem vollen Zahlungsfehler überein: Gewinn +36 und Abschreibungsrücknahme +12 ergeben CFO +48. Die gesamte Veränderung des Cashbestands bleibt unverändert.'],'capitalization'),
 q('23','practice','g h','Opening allowance for credit losses is €18 million. Write-offs are €9 million and supported required closing allowance is €30 million. No recoveries or other movements occur. Required current expense is:',[
 ['€12 million','Dies verwendet nur die Netto-Bestandszunahme und vergisst die verbrauchte Wertberichtigung.'],
 ['€21 million','Endbestand 30 minus Anfang 18 plus Ausbuchungen 9.'],
 ['€39 million','Der vorhandene Anfangsbestand wurde nicht berücksichtigt.']
 ],1,[F('E=30-18+9=21','Ausbuchungen vermindern die vorhandene Korrektur und müssen in der Aufwandsableitung berücksichtigt werden.',[['E','Erforderlicher Ausfallaufwand in Mio. Euro.']])],'estimates'),
 q('24','practice','g h','Sales are 100 units at €30. Variable production cost is €10 per unit and total fixed cash production overhead is €900. Output rises from 100 to 150 units; all actual fixed cost is allocated across output, all amounts are paid, no beginning inventory or taxes exist, and ending inventory is recoverable. Compared with producing 100, gross profit and CFO change by:',[
 ['€300 higher profit and €500 lower CFO.','Stückkosten fallen von 19 auf 16; zusätzliche variable Zahlung beträgt 500.'],
 ['€500 higher profit and €500 lower CFO.','Die zusätzliche variable Produktionszahlung ist nicht zugleich der Gewinnanstieg.'],
 ['€300 higher profit and €300 higher CFO.','Die Gewinnwirkung wird fälschlich als zusätzliche Kundenzahlung interpretiert.']
 ],0,['Alte COGS: 100 × 19 = 1.900; neue COGS: 100 × 16 = 1.600. Profit steigt um 300. Tatsächliche Produktionszahlungen steigen von 1.900 auf 2.400, daher CFO −500. Endvorrat 50 × 16 = 800 erklärt beide Änderungen zusammen.'],'production'),
 q('25','practice','g','To meet this year’s target, management cancels useful maintenance that would otherwise be performed and paid now. The accounting records the actual decision correctly. This is most directly an example of:',[
 ['a real operating decision that can improve current figures while harming future performance.','Die Handlung verändert tatsächlichen Ressourceneinsatz und möglicherweise spätere Ausfälle.'],
 ['a purely accrual-based estimate with no operational consequences.','Wartung wird tatsächlich nicht ausgeführt.'],
 ['a transaction that must be fictitious if it increases profit.','Die Ergebniswirkung allein beweist keine falsche Buchung.']
 ],0,['Ergebnissteuerung kann echte Aktivitäten betreffen. Die korrekte Abbildung einer kurzsichtigen Entscheidung macht diese noch nicht wirtschaftlich gut.'],'smoothing'),
 q('26','practice','g a','New evidence supports releasing €14 million of a deferred-tax valuation allowance entirely through profit or loss. The entry itself most directly:',[
 ['raises net income by €14 million without generating a €14 million cash refund.','Ein höherer nutzbarer latenter Anspruch ist keine unmittelbare Zahlung.'],
 ['raises net income and cash receipts by €14 million each.','Die Neubewertung löst laut Sachverhalt keine solche Erstattung aus.'],
 ['reduces operating pre-tax earnings by €14 million.','Der Effekt gehört zur Steuerposition und wirkt gewinnerhöhend.']
 ],0,['Eine sachgerechte Neubewertung kann trotzdem einen nicht wiederholbaren Gewinnbeitrag erzeugen. Berichtsqualität und zukünftige Ertragsbasis werden getrennt beurteilt.'],'estimates'),
 q('27','practice','g a','A company defers payment of €35 million in already recognized supplier costs until after year-end. No penalties or other effects arise. Relative to paying on time, current-year CFO and profit are:',[
 ['CFO €35 million higher; profit unchanged.','Die offene Verbindlichkeit ersetzt die aktuelle Auszahlung, nicht die bereits gebuchte Aufwandserfassung.'],
 ['both €35 million higher.','Zahlungszeitpunkt und Aufwandserfassung wurden gleichgesetzt.'],
 ['CFO unchanged; profit €35 million higher.','Die Wirkungen werden gerade vertauscht.']
 ],0,['Cash und Lieferantenverbindlichkeiten sind am Stichtag höher. Eine unveränderte Normalbetriebsprognose darf den einmaligen Finanzierungseffekt nicht jährlich neu erzeugen.'],'cash-window'),
 q('28','practice','g c','A large justified impairment reduces an asset’s carrying amount. The remaining life is unchanged. Higher subsequent profit, with all operating revenues unchanged, may partly reflect:',[
 ['lower future depreciation from the smaller cost base.','Der frühere Verlust verteilt weniger Restbuchwert auf die Folgejahre.'],
 ['a reversal of all prior cash spent on the asset.','Die Wertminderung erstattet keine früheren Investitionszahlungen.'],
 ['necessarily better physical productivity.','Der mechanische Aufwandsrückgang benötigt keine tatsächliche Leistungsverbesserung.']
 ],0,['Die ursprüngliche Wertminderung kann erforderlich sein. Trotzdem muss die Folgegewinnverbesserung von wirtschaftlicher Erholung unterschieden werden.'],'smoothing'),
 q('29','practice','h','Annual credit sales rise from €800 million to €880 million and ending receivables from €64 million to €132 million. Using a 365-day ending-receivables indicator, current-year days are:',[
 ['29.20 days','Dies ist der Vorjahresindikator 64/800 × 365.'],
 ['54.75 days','Der aktuelle Endbestand wird auf die aktuellen Jahresumsätze bezogen.'],
 ['60.23 days','Dies verwendet aktuelle Forderungen mit dem alten Umsatznenner.']
 ],1,[F('DSO_{end}=365\\frac{132}{880}=54{,}75','Der Anstieg ist ein Anlass zur Prüfung, kein eigenständiger Manipulationsbeweis.',[['DSO_{end}','Ausdrücklich stichtagsbasierter Forderungsindikator in Tagen.']])],'revenue'),
 q('30','practice','h','Net income is €120 million, CFO €72 million, and average assets €600 million. Under the defined cash-flow-based accrual indicator, accruals relative to average assets are:',[
 ['8.00%','Gewinn minus CFO beträgt 48; auf 600 skaliert ergibt das 8 %.'],
 ['12.00%','Dies ist CFO relativ zu durchschnittlichen Aktiva.'],
 ['20.00%','Dies ist Nettogewinn relativ zu durchschnittlichen Aktiva.']
 ],0,[F('a=\\frac{120-72}{600}=8\\%','Der Indikator lokalisiert die zu erklärende Erfolgs-/Zahlungsdifferenz.',[['a','Relativer Abgrenzungsindikator.']]),'Die Ursache kann etwa im Working Capital liegen. Branchen-, Saison- und Klassifikationsunterschiede sind zu prüfen.'],'warning-signs'),
 q('31','practice','h','After a large write-down, asset turnover rises although revenue is unchanged. Before concluding that operating efficiency improved, the analyst should:',[
 ['separate the denominator reduction from changes in physical operations.','Die kleinere Buchwertbasis kann die Quote mechanisch erhöhen.'],
 ['infer that sales volumes must have risen.','Der Sachverhalt enthält gerade keinen notwendigen Mengenanstieg.'],
 ['reverse every write-down to maximize historical comparability.','Eine pauschale Rücknahme kann echte Wertverluste und zulässige Bewertung ignorieren.']
 ],0,['Vergleichbarkeit erfordert eine erklärte Gegenrechnung. Produktions-, Mengen- und Zahlungsdaten helfen, echte Leistungsänderung von der Bilanzwirkung zu trennen.'],'warning-signs'),
 q('32','practice','h e','Receivables rise unusually fast, and management attributes the change to longer agreed terms. The strongest next analytical response is to:',[
 ['compare contracts, aging and subsequent collections with that explanation.','Unterschiedliche Belege können die konkrete Erklärung bestätigen oder widerlegen.'],
 ['accept the explanation solely because management has historically been credible.','Vergangene Glaubwürdigkeit ersetzt keine Prüfung eines aktuellen auffälligen Sachverhalts.'],
 ['label all current revenue fraudulent immediately.','Ein Warnsignal und eine noch ungeprüfte Erklärung genügen nicht für diese Feststellung.']
 ],0,['Die Aussage wird in überprüfbare Teilbehauptungen zerlegt: Welche Kunden, welche Laufzeiten, welche Fälligkeiten und welche tatsächlichen Folgezahlungen?'],'workflow'),
 q('a1','mock-a','a f','Management reports adjusted net income of €78 million. Its only adjustments add back a €20 million restructuring charge with a 30% tax effect and €10 million recurring share-based compensation with a 25% tax effect. It retains a €30 million disposal gain with a 20% tax effect. The analyst accepts excluding the restructuring, retains recurring compensation, and removes the disposal gain. The analyst’s adjusted net income is:',[
 ['€46.50 million','Von 78 wird die bereits ausgeschlossene Vergütung nach Steuer wieder abgezogen und der enthaltene Verkaufsgewinn entfernt.'],
 ['€54.00 million','Dies entfernt den Verkaufsgewinn, behält aber die ungewollte Vergütungsbereinigung bei.'],
 ['€64.00 million','Dies nimmt nur die Restrukturierungsbereinigung zurück, die der Analyst gerade beibehalten will.']
 ],0,[F('NI_{adj}=78-10(1-0{,}25)-30(1-0{,}20)=46{,}50','Jede Korrektur verwendet ihren eigenen Steuereffekt und die richtige bereits bereinigte Ausgangsbasis.',[['NI_{adj}','Nach den Annahmen des Analysten bereinigter Nettogewinn in Mio. Euro.']]),'Gegenkontrolle über den Abschluss: 78 − 20 × 70 % − 10 × 75 % = 56,50 berichteter Nettogewinn. Danach 56,50 + 14 − 24 = 46,50. Die Restrukturierung darf nicht versehentlich zweimal zurückgenommen werden.'],'adjusted'),
 q('b1','mock-b','a g h','Reported CFO is €150 million, CFI −€90 million and CFF €20 million. A €30 million ordinary cash operating cost is wrongly included in CFI rather than CFO. A separate €20 million one-time delay in supplier payments correctly increases current CFO. No other adjustments apply. Corrected actual CFO and analytically normalized CFO are respectively:',[
 ['€120 million and €100 million.','Zuerst wird der falsche Ausweis korrigiert; anschließend wird der echte, aber einmalige Zahlungseffekt analytisch entfernt.'],
 ['€100 million and €100 million.','Die tatsächliche historische Cashgröße wird mit der normalisierten Prognosegröße verwechselt.'],
 ['€120 million and €140 million.','Der bereits enthaltene positive Zeitbeitrag wird zur Normalisierung nochmals addiert.']
 ],0,[F('CFO_{corr}=150-30=120,\\qquad CFO_{norm}=120-20=100','Die Zahlungsverschiebung ist im tatsächlichen aktuellen Cashflow vorhanden und wird erst für die ausdrücklich definierte Normalbasis entfernt.',[['CFO_{corr}','Nach Klassifikationskorrektur tatsächlicher operativer Cashflow in Mio. Euro.'],['CFO_{norm}','Zusätzlich um den einmaligen Zahlungszeitpunkt bereinigte analytische Größe.']]),'Korrigiertes CFI = −90 + 30 = −60. Tatsächliche Cashveränderung bleibt 120 − 60 + 20 = 80, genau wie 150 − 90 + 20. Die analytische Normalisierung schreibt diesen historischen Geldbestand nicht um.'],'cash-window')
];
