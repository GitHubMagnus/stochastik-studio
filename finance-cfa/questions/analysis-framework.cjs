const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('af-'+id,'analysis-framework','statements',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a','Before collecting data for an investment analysis, an analyst should first:',[
 ['calculate all available ratios.','Kennzahlen folgen der Fragestellung; ihre Verfügbarkeit bestimmt nicht den Analysezweck.'],
 ['define the purpose, audience, and context of the analysis.','Entscheidung, Adressat und Horizont legen fest, welche Daten benötigt werden.'],
 ['write the investment recommendation.','Eine vorab festgelegte Empfehlung kann Auswahl und Interpretation verzerren.']
 ],1,['Zweck und Kontext stehen am Anfang. Erst danach werden Daten gesammelt, aufbereitet und interpretiert. Rücksprünge sind möglich, wenn eine spätere Prüfung neue Fragen aufwirft.'],'process'),
 q('02','practice','a','An analyst converts two companies’ statements to a common currency and computes comparable margins. This work primarily belongs to:',[
 ['processing data.','Die Daten werden in eine vergleichbare Form gebracht und berechnet.'],
 ['communicating conclusions.','Die Aufbereitung ist noch keine an einen Adressaten gerichtete Empfehlung.'],
 ['following up.','Es werden noch keine neuen Informationen gegen eine frühere These geprüft.']
 ],0,['Datenverarbeitung schafft vergleichbare Messgrößen. Die anschließende Interpretation erklärt Ursachen und Bedeutung für die Entscheidung.'],'process'),
 q('03','practice','a b','A previously recommended borrower loses its largest customer. The most appropriate next step is to:',[
 ['retain the recommendation until the next annual audit.','Wesentliche neue Informationen können vor dem nächsten geprüften Bericht entscheidungsrelevant sein.'],
 ['reassess the cash-flow assumptions supporting the recommendation.','Nachverfolgung verbindet neue Tatsachen mit den ursprünglichen Annahmen.'],
 ['replace all historical financial statements with the new forecast.','Historische Tatsachen und Zukunftsannahmen müssen unterscheidbar bleiben.']
 ],1,['Der Verlust kann Zahlungseingänge, Auslastung und Covenant-Spielraum verändern. Eine neue Schlussfolgerung benötigt eine aktualisierte, dokumentierte Analyse; sie folgt nicht allein aus einer Schlagzeile.'],'report-followup'),
 q('04','practice','b','For a lender evaluating a three-month working-capital loan, the most directly relevant information is the borrower’s:',[
 ['cash receipts and required payments over the loan period.','Die zeitliche Deckung fälliger Zahlungen betrifft die konkrete Kreditentscheidung.'],
 ['ten-year revenue growth target alone.','Langfristiges Wachstum kann neben kurzfristiger Zahlungsunfähigkeit bestehen.'],
 ['book value of goodwill alone.','Goodwill ist nicht unmittelbar zur fristgerechten Zahlung verfügbar.']
 ],0,['Kreditlaufzeit und Zahlungszeitpunkte müssen zusammenpassen. Sicherheiten und Kreditlinien ergänzen die Analyse; ein positiver Jahresgewinn allein schließt unterjährige Liquiditätslücken nicht aus.'],'purpose'),
 q('05','practice','b','Which statement best distinguishes equity analysis from credit analysis?',[
 ['Equity holders have a residual claim; lenders focus particularly on contractual payments and downside protection.','Die Anspruchsstruktur erklärt unterschiedliche Schwerpunkte trotz gemeinsamer Unternehmensdaten.'],
 ['Lenders receive all profits remaining after dividends.','Lender erhalten ihren Vertragsanspruch, nicht den gesamten Residualgewinn.'],
 ['Equity valuation does not depend on the firm’s financing obligations.','Vorrangige Ansprüche beeinflussen den für Aktionäre verbleibenden Wert.']
 ],0,['Ein begrenzter Kreditanspruch kann bei moderatem Wachstum attraktiv sein. Eine Aktie desselben Unternehmens kann zugleich zu teuer sein, wenn ihr Preis sehr optimistische Restcashflows voraussetzt.'],'purpose'),
 q('06','practice','c','Beginning equity is €420 million. Net income is €48 million, OCI is −€12 million, new owner contributions are €30 million, and distributions are €26 million. With no other changes, ending equity is:',[
 ['€412 million','Dieser Betrag berücksichtigt den Periodengewinn nicht.'],
 ['€460 million','Gewinn, OCI und Eigentümertransaktionen sind vollständig übergeleitet.'],
 ['€472 million','Dieser Betrag ignoriert das negative OCI.']
 ],1,[F('E_1=420+48-12+30-26=460','Alle Veränderungen betreffen denselben Berichtskreis.',[['E_1','Endeigenkapital in Mio. Euro.']]),'Der Anstieg um 40 ist weder identisch mit dem Gewinn 48 noch allein operative Wertschöpfung.'],'statement-map'),
 q('07','practice','c','The most useful initial source for the maturity schedule and collateral of reported borrowings is the:',[
 ['notes to the financial statements.','Der Anhang erläutert die verdichtete Schuldenposition.'],
 ['income statement’s revenue line.','Umsatz enthält keine vollständige Fälligkeitsstruktur der Finanzierung.'],
 ['share price chart.','Marktpreise ersetzen die vertraglichen Angaben nicht.']
 ],0,['Erst die Fälligkeitsverteilung zeigt, wann Mittel benötigt werden. Anschließend sind verfügbare Liquidität, operative Zahlungen und Refinanzierungsmöglichkeiten zu prüfen.'],'notes'),
 q('08','practice','c','An unmodified audit opinion most appropriately provides:',[
 ['absolute assurance that no fraud has occurred.','Hinreichende Prüfungssicherheit ist keine absolute Betrugsgarantie.'],
 ['reasonable assurance regarding material presentation under the applicable reporting framework.','Das Urteil betrifft den Abschluss im festgelegten Prüfungsrahmen.'],
 ['a guarantee that the company will repay all debt.','Zahlungsfähigkeit und Zukunftserfolg werden nicht garantiert.']
 ],1,['Wesentlichkeit, Prüfungskreis und Schätzungsunsicherheit bleiben relevant. Ein uneingeschränktes Urteil ersetzt keine Analyse wirtschaftlicher Risiken.'],'audit'),
 q('09','practice','c','An auditor cannot obtain sufficient appropriate evidence, and the possible effects are material and pervasive. The opinion most likely is a:',[
 ['disclaimer of opinion.','Eine umfassende Nachweisbeschränkung kann die Abgabe eines Urteils verhindern.'],
 ['clean opinion.','Fehlende wesentliche Nachweise erlauben hier kein uneingeschränktes Urteil.'],
 ['statement that all reported numbers are known to be false.','Eine fehlende Erkenntnisgrundlage ist nicht gleichbedeutend mit nachgewiesener Falschdarstellung sämtlicher Zahlen.']
 ],0,['Ein Disclaimer beschreibt die Unmöglichkeit eines belastbaren Urteils unter diesen Umständen. Ein adverse opinion betrifft dagegen ein festgestelltes wesentlich und umfassend falsches Gesamtbild.'],'audit'),
 q('10','practice','c','A critical audit matter concerning a complex valuation appears alongside an unqualified opinion. An analyst should conclude that:',[
 ['the audit opinion is automatically adverse.','Ein CAM ändert das Urteil nicht automatisch.'],
 ['the valuation deserves attention, but the CAM alone does not establish misstatement.','Die Angabe kennzeichnet einen besonders anspruchsvollen Prüfungsbereich.'],
 ['the valuation is guaranteed to be economically correct.','Prüfungsangaben beseitigen Schätzungs- und Bewertungsunsicherheit nicht.']
 ],1,['Die Begründung des CAM und die zugehörigen Abschlussangaben sind gemeinsam zu lesen. Weder Betrug noch eine Bewertungsgewissheit folgen allein aus dem Vorliegen eines CAM.'],'audit'),
 q('11','practice','c e','Management excludes share-based compensation from an adjusted earnings measure because it is non-cash. An analyst should most appropriately:',[
 ['accept the exclusion as proof that no economic cost exists.','Vergütung kann trotz fehlender sofortiger Zahlung Ressourcen beanspruchen und Aktionäre verwässern.'],
 ['reconcile the adjustment and assess its economic relevance and recurrence.','Rechnerische Überleitung und wirtschaftliche Beurteilung sind getrennte Prüfungen.'],
 ['treat all adjusted measures as fraudulent.','Eine Bereinigung kann nützlich sein, muss aber nachvollziehbar und sachgerecht sein.']
 ],1,['Eine korrekte Überleitung zeigt, wie die Kennzahl entstand. Ob sie nachhaltig erzielbare Leistung beschreibt, hängt unter anderem vom Vergütungsmodell und einer möglichen Verwässerung ab.'],'management'),
 q('12','practice','c','A historical investment backtest uses restated data that became public two years after the simulated decision. Unless explicitly modeling perfect hindsight, this introduces:',[
 ['look-ahead bias.','Die Simulation erhält Informationen, die am damaligen Entscheidungsdatum noch nicht verfügbar waren.'],
 ['a necessary adjustment that always improves the historical decision model.','Für die damalige Informationslage sind spätere Berichtigungen nicht automatisch zulässig.'],
 ['only a currency conversion difference.','Das Problem ist der Informationszeitpunkt, nicht die Währung.']
 ],0,['Neben dem Berichtszeitraum muss der tatsächliche Veröffentlichungsstand gespeichert werden. Eine Analyse der heute bekannten wirtschaftlichen Historie hat einen anderen Zweck als ein realistischer damaliger Entscheidungstest.'],'filings'),
 q('13','practice','d','Which pairing of standard setters is correct?',[
 ['IASB—IFRS Accounting Standards; FASB—US GAAP.','Die Institutionen entwickeln die jeweiligen Rechnungslegungsstandards.'],
 ['SEC—IFRS Accounting Standards; IASB—US GAAP.','Die SEC ist eine US-Aufsichtsbehörde; das IASB setzt IFRS-Standards.'],
 ['An external auditor—both IFRS and US GAAP.','Der Prüfer beurteilt die Anwendung, statt diese beiden Regelwerke selbst zu setzen.']
 ],0,['Standardsetzung, lokale Übernahme, Durchsetzung und Abschlussprüfung haben unterschiedliche Rollen. Eine Änderung muss zusätzlich auf Anwendungsbeginn und Übergangsregeln geprüft werden.'],'comparability'),
 q('14','practice','d','An ordinary IFRS company reclassifies €9 million of interest paid from operating to financing cash flows without changing any payments. The direct effect is:',[
 ['€9 million higher operating cash flow and unchanged total cash movement.','CFO steigt um 9, CFF sinkt um 9; die Summe bleibt gleich.'],
 ['€9 million higher total cash movement.','Eine andere Kategorie erzeugt keine zusätzliche Einzahlung.'],
 ['€9 million lower operating cash flow and higher financing cash flow.','Diese Richtung wäre die umgekehrte Umgliederung.']
 ],0,['Vor einem Wachstumsvergleich ist die Klassifikationsbasis zu vereinheitlichen. Rechenleistung oder Absatz sind durch diese Änderung nicht gestiegen.'],'standards-change'),
 q('15','practice','d','An accounting board publishes a discussion paper about a possible rule change. The analyst should:',[
 ['apply it immediately as an issued mandatory standard.','Ein Diskussionspapier ist noch kein endgültiger verbindlicher Standard.'],
 ['monitor the proposal and distinguish it from issued requirements and effective dates.','Entwicklungsstand und konkrete Anwendbarkeit müssen getrennt verfolgt werden.'],
 ['ignore all future developments until the company changes its numbers.','Frühzeitige Kenntnis möglicher Änderungen hilft bei Vergleichbarkeit und Prognose.']
 ],1,['Für verabschiedete Änderungen folgen Fragen nach Geltungsbereich, Erstanwendung, Übergangsregeln und gegebenenfalls lokaler Übernahme. Eine bloße Projektankündigung beantwortet diese Fragen noch nicht.'],'standards-change'),
 q('16','practice','e','Three industry articles repeat the same company press release. Relative to that release alone, they provide:',[
 ['three independent confirmations of the underlying claim.','Die gemeinsame Ursprungsquelle verhindert unabhängige Bestätigung.'],
 ['additional distribution of the claim but not three independent observations.','Mehr Veröffentlichungsorte sind nicht automatisch mehr eigenständige Evidenz.'],
 ['proof that the claim is false.','Abhängige Quellen sind kein Beweis für Unrichtigkeit.']
 ],1,['Eine Gegenprüfung könnte amtliche Branchenmengen, Kundenangaben oder belastbare Konkurrenzdaten heranziehen. Auch solche Quellen müssen zur konkreten Fragestellung und Periode passen.'],'other-sources'),
 q('17','practice','e','A customer survey contains only responses from customers who renewed their contracts. Its principal limitation for estimating overall customer satisfaction is:',[
 ['selection bias from excluding non-renewing customers.','Die Auswahl lässt gerade mögliche unzufriedene Abwanderer aus.'],
 ['that all surveys are prohibited sources.','Eigene rechtmäßig erhobene Informationen können analytisch nützlich sein.'],
 ['that a larger number of renewing respondents necessarily removes the bias.','Mehr Beobachtungen innerhalb derselben verzerrten Auswahl beheben die systematische Lücke nicht.']
 ],0,['Stichprobengröße und Repräsentativität sind unterschiedliche Fragen. Die Auswahlregel muss vor einer Verallgemeinerung dokumentiert und möglichst verbessert werden.'],'other-sources'),
 q('18','practice','a b','Annual revenue rises from €730 million to €876 million; representative receivables rise from €50 million to €84 million. Using a 365-day year and assuming no other distortions, the new receivables balance attributable to longer collection time rather than revenue growth is:',[
 ['€10 million','Das ist der durch 20 % Umsatzwachstum erklärte Bestandsanstieg.'],
 ['€24 million','Bei alter Laufzeit wären 60 gebunden; tatsächlich sind es 84.'],
 ['€34 million','Das ist der gesamte Anstieg, einschließlich des Volumeneffekts.']
 ],1,[F('AR^*=50\\frac{876}{730}=60,\\qquad\\Delta AR_{time}=84-60=24','Zuerst wird der Altbestand mit dem Umsatz skaliert, dann der verbleibende Unterschied ermittelt.',[['AR^*','Forderungsbestand bei neuer Umsatzhöhe und alter Laufzeit in Mio. Euro.'],['\\Delta AR_{time}','Zusätzliche Bindung durch veränderte Laufzeit unter den Annahmen.']]),'Der Befund erklärt noch nicht die Ursache: Zahlungsziele, Saisonalität, Kundenmix und Ausfälle sind zu untersuchen.'],'worked-process'),
 q('a1','mock-a','a c','A bank’s annual report shows consolidated assets, while a data vendor’s debt figure covers only the parent company. Before using their ratio in a lending decision, an analyst should:',[
 ['align the reporting entities and document the reconciliation.','Zähler und Nenner müssen einen sachlich zusammenpassenden Berichtskreis besitzen.'],
 ['use the ratio because both figures share the same year-end.','Ein gemeinsamer Stichtag behebt den unterschiedlichen Konsolidierungskreis nicht.'],
 ['replace parent debt with consolidated revenue.','Das würde die Kennzahl verändern, ohne die benötigte Schuldengröße zu ermitteln.']
 ],0,['Tochterunternehmen können eigene Verbindlichkeiten und eingeschränkt verfügbare Mittel haben. Die korrekte Abgrenzung hängt von Kreditnehmer, Garantien und Analysezweck ab; sie darf nicht zufällig vom Datenanbieter bestimmt werden.'],'filings'),
 q('a2','mock-a','d e','An analyst finds that the latest regulatory filing contradicts management’s earlier public forecast. The most appropriate response is to:',[
 ['keep the forecast because management is always the most informed source.','Eine Prognose muss gegen später veröffentlichte belastbare Daten aktualisiert werden.'],
 ['trace definitions and dates, investigate the discrepancy, and revise assumptions where warranted.','Die Abweichung kann aus neuer Information oder anderen Definitionen stammen und erfordert Klärung.'],
 ['average the two numbers without further investigation.','Ein Durchschnitt löst weder eine Definitionsabweichung noch eine zeitliche Veränderung.']
 ],1,['Quellenrang allein ersetzt keine Prüfung von Berichtskreis, Zeitraum und Kennzahlendefinition. Die Schlussfolgerung muss zeigen, welche Information die ursprüngliche Annahme verändert hat.'],'report-followup'),
 q('b1','mock-b','b c','A profitable firm has ample total assets but an auditor highlights uncertainty about refinancing a large debt maturity. An equity analyst should most appropriately:',[
 ['ignore the issue because a positive income statement proves liquidity.','Periodengewinn garantiert keine Mittel zum Fälligkeitstermin.'],
 ['incorporate refinancing scenarios and their effects on residual shareholder value.','Finanzierungslücken können trotz Gewinn den für Aktionäre verbleibenden Wert stark verändern.'],
 ['infer that an audit opinion is necessarily adverse whenever refinancing is uncertain.','Ein Hinweis auf Fortführungsrisiken ist im Gesamtbericht zu beurteilen, nicht automatisch ein adverse opinion.']
 ],1,['Zu prüfen sind Fälligkeiten, verfügbare Mittel, belastbare Kreditlinien und mögliche Kapitalmaßnahmen. Verwässerung oder ein Verkauf unter Zeitdruck können den Eigenkapitalwert beeinflussen, auch wenn der operative Betrieb profitabel ist.'],'purpose'),
 q('b2','mock-b','a e','After recommending a manufacturer, an analyst observes declining industry orders but stable company revenue. Which follow-up best tests whether reported growth is sustainable?',[
 ['Repeat the original conclusion because revenue has not yet declined.','Umsatz kann einem nachlassenden Auftragseingang zeitlich folgen.'],
 ['Compare order backlog, cancellation terms, deliveries, and subsequent collections with independent industry data.','Diese Daten verbinden Nachfrage, Leistung und Zahlungsqualität und prüfen alternative Erklärungen.'],
 ['Assume the firm must have misstated revenue.','Eine Branchenabweichung ist ein Untersuchungsanlass, kein alleiniger Fehlernachweis.']
 ],1,['Marktanteilsgewinn, andere Produktmischung und zeitliche Abgrenzung können die Differenz erklären. Die Analyse sollte unterscheiden, welche Erklärung durch eigenständige Beobachtungen gestützt wird.'],'other-sources')
];
