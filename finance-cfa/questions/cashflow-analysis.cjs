const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('cfl-'+id,'cashflow-analysis','statements',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a','Firm A generates €140 million operating cash flow and spends €100 million on investing activities. Firm B has −€30 million operating cash flow and receives €70 million from asset sales. Neither has financing cash flows. The most accurate conclusion is:',[
 ['Both increase cash by €40 million, but their sources differ substantially.','Gleiche Nettobewegung verbirgt Mittel aus Betrieb bei A und Vermögensverkauf bei B.'],
 ['Both demonstrate the same sustainable operating cash generation.','B hat im Betrieb einen Abfluss; die Gesamtänderung beweist keine gleiche Ertragskraft.'],
 ['Firm B is necessarily insolvent.','Ein einmaliger Mittelabfluss ist ohne Kontext kein ausreichender Ausfallbeweis.']
 ],0,['Die nächste Prüfung betrifft Geschäftsphase, wiederkehrende Zahlungen und verbleibendes Vermögen. Ein Anlagenverkauf kann sinnvoll sein, ersetzt aber nicht unbegrenzt den operativen Mittelzufluss.'],'sources-uses'),
 q('02','practice','a','A common-size cash-flow statement uses revenue as the denominator. Revenue is €1,200 million and operating cash flow is €156 million. The operating cash-flow margin is:',[
 ['7.69%','Dies ist nicht der verlangte Verhältniswert; Umsatz/CFO wäre zudem ein Vielfaches.'],
 ['13.00%','156 wird durch den Umsatz derselben Periode geteilt.'],
 ['15.60%','Dieser Betrag verwendet eine nicht gegebene Umsatzbasis von 1.000.']
 ],1,[F('m_{CFO}=\\frac{156}{1200}=13\\%','Die Kennzahl beschreibt operativen Cashflow je Umsatzeinheit.',[['m_{CFO}','Cashflow-Umsatzmarge.']])],'common-size'),
 q('03','practice','a','An analyst scales cash inflows by total inflows and outflows by total outflows. Customer receipts are €760 million, borrowing proceeds €120 million, and asset-sale proceeds €70 million; these are all inflows. Customer receipts as a percentage of total inflows are:',[
 ['80.00%','Die relevante Bruttozuflussbasis beträgt 950.'],
 ['86.36%','Anlagenverkaufserlöse wurden aus dem Nenner ausgelassen.'],
 ['100.00%','Nicht alle Zuflüsse stammen von Kunden.']
 ],0,[F('w_{cust}=\\frac{760}{760+120+70}=80\\%','Bruttoquellen werden nicht mit einem Netto-Cashflow als Nenner vermischt.',[['w_{cust}','Anteil der Kundeneinzahlungen an allen Zuflüssen.']])],'common-size'),
 q('04','practice','a','A company improves current operating cash flow by delaying supplier payments substantially beyond normal terms. The best interpretation is that:',[
 ['cash generation may be temporarily improved at the cost of supplier or liquidity risk.','Die Kapitalbindung wird auf Lieferanten verlagert, kann sich aber später umkehren.'],
 ['the improvement necessarily represents better product profitability.','Zahlungszeitpunkt und Produktmarge sind verschiedene Sachverhalte.'],
 ['payables can grow indefinitely without consequences.','Lieferanten können Bedingungen verschärfen oder Lieferungen einstellen.']
 ],0,['Fälligkeitsstruktur, überfällige Beträge und mögliche Supplier-Finance-Vereinbarungen müssen geprüft werden. Der höhere CFO allein beweist keine dauerhaft bessere operative Leistung.'],'cash-quality'),
 q('05','practice','a','A retailer receives large customer advances before delivering products. Current operating cash flow rises. An analyst should:',[
 ['recognize the entire advance as current profit without examining performance obligations.','Zahlung ist nicht automatisch bereits verdienter Umsatz.'],
 ['assess the future delivery costs and whether similar advances recur.','Der Zufluss kann mit noch ausstehenden Leistungs- und Auszahlungsverpflichtungen verbunden sein.'],
 ['exclude advances from every cash-flow analysis because they are not revenue.','Tatsächliche operative Zahlungen sind trotz anderer Erfolgsabgrenzung relevant.']
 ],1,['Vorauszahlungen können ein günstiges Finanzierungsmodell schaffen. Ihre Qualität hängt aber von Wachstum, Erfüllungskosten, Rückerstattungsrisiken und Wiederholbarkeit ab.'],'cash-quality'),
 q('06','practice','a','Operating cash flow rises by €18 million solely because interest paid is reclassified from operating to financing. To assess operating improvement, the analyst should first:',[
 ['normalize classifications across periods.','Die gleiche Zahlungsbasis muss hergestellt werden, bevor Wachstum interpretiert wird.'],
 ['treat the €18 million increase as additional customer demand.','Die Nachfrage hat sich durch eine Umgliederung nicht verändert.'],
 ['reduce revenue by €18 million.','Die Änderung betrifft Cashflowkategorien, nicht ausgewiesenen Umsatz.']
 ],0,['Die berichteten Originalwerte bleiben dokumentiert; eine analytische Vergleichsreihe legt die Anpassung offen. Der gesamte Zahlungsmittelbestand ist durch die Umgliederung unverändert.'],'classification'),
 q('07','practice','b','Free cash flow to the firm is most appropriately described as cash flow:',[
 ['available to all providers of capital after the operating and investment requirements reflected in the model, before financing distributions.','Die Anspruchsgruppe umfasst Eigen- und Fremdkapitalgeber.'],
 ['identical to dividends actually paid.','Dividenden sind eine konkrete Eigentümerausschüttung, keine FCFF-Definition.'],
 ['always legally distributable without restrictions.','Verträge, Liquiditätsreserven und gesellschaftsrechtliche Grenzen können Ausschüttungen begrenzen.']
 ],0,['FCFF ist eine analytische Modellgröße. Welche Investitionen, nicht zahlungswirksamen Anpassungen und operativen Abgrenzungen einbezogen werden, muss konsistent zur Bewertung festgelegt werden.'],'free-cashflow'),
 q('08','practice','b','A firm has EBIT of €240 million, a 25% tax rate, depreciation of €35 million, fixed-capital investment of €80 million, and an increase in operating working capital of €20 million. With no other adjustments, FCFF is:',[
 ['€115 million','Nachsteuerbetriebsergebnis 180 plus Abschreibung abzüglich beider Investitionsarten.'],
 ['€135 million','Die zusätzliche operative Kapitalbindung wurde ausgelassen.'],
 ['€175 million','Der Vorsteuergewinn wurde ohne Steuerkorrektur verwendet.']
 ],0,[F('FCFF=240(1-0{,}25)+35-80-20=115','Nicht zahlungswirksamer Aufwand wird korrigiert; tatsächliche Kapitalbindung wird abgezogen.',[['FCFF','Freier Cashflow an alle Kapitalgeber in Mio. Euro.']])],'free-cashflow'),
 q('09','practice','b','Operating cash flow of €168 million is after €24 million of fully tax-deductible cash interest. The cash tax rate is 30%; fixed-capital investment is €75 million. With no other adjustments, FCFF is:',[
 ['€93.00 million','CFO minus Investitionen bleibt noch durch die Zinsfinanzierung beeinflusst.'],
 ['€109.80 million','Nachsteuerzins 16,80 wird zurückgerechnet.'],
 ['€117.00 million','Der gesamte Vorsteuerzins wurde addiert und der Steuervorteil übersehen.']
 ],1,[F('FCFF=168+24(1-0{,}30)-75=109{,}80','CFO enthält bereits die Zinszahlung und ihren angenommenen Steuervorteil.',[['FCFF','Finanzierungsneutraler freier Cashflow in Mio. Euro.']])],'fcff-from-cfo'),
 q('10','practice','b','Operating cash flow after interest is €130 million. Fixed-capital investment is €85 million, new borrowing €35 million, and debt principal repaid €15 million. With no other adjustments, FCFE is:',[
 ['€45 million','Die Nettoaufnahme 20 steht den Eigenkapitalgebern zusätzlich zur Verfügung.'],
 ['€65 million','CFO minus Investitionen plus Nettokreditaufnahme.'],
 ['€80 million','Die Tilgung wurde von der Neuaufnahme nicht abgezogen.']
 ],1,[F('NB=35-15=20,\\qquad FCFE=130-85+20=65','Nur die Nettoaufnahme verändert den nach Finanzierung verbleibenden Betrag.',[['NB','Nettokreditaufnahme in Mio. Euro.'],['FCFE','Freier Cashflow an Eigenkapitalgeber in Mio. Euro.']])],'fcfe'),
 q('11','practice','b','FCFF is €102 million, cash interest €20 million, the applicable cash tax rate 25%, and net borrowing −€12 million. With no other adjustments, FCFE is:',[
 ['€75 million','Nachsteuerzins 15 und Nettotilgung 12 mindern den Residualcashflow.'],
 ['€99 million','Die negative Nettoaufnahme wurde mit falschem Vorzeichen verwendet.'],
 ['€105 million','Der Nachsteuerzins wurde addiert statt abgezogen.']
 ],0,[F('FCFE=102-20(1-0{,}25)-12=75','Negatives Net Borrowing bedeutet mehr Tilgung als neue Kreditaufnahme.',[['FCFE','Freier Cashflow an Eigenkapitalgeber in Mio. Euro.']])],'fcfe'),
 q('12','practice','a b','An ordinary IFRS 18 company reports CFO of €210 million excluding interest paid, while cash taxes in CFO still reflect a €9 million interest tax shield. Cash interest is €30 million and fixed-capital investment €95 million. With no other adjustments, FCFF is:',[
 ['€106 million','Der im CFO enthaltene Steuervorteil muss entfernt werden; der Zins selbst wurde dort nicht abgezogen.'],
 ['€115 million','Der Finanzierungssteuervorteil bliebe unbereinigt enthalten.'],
 ['€136 million','Nachsteuerzins wurde zu einem CFO addiert, der den Zinsabfluss bereits ausschließt.']
 ],0,[F('FCFF=210-9-95=106','Die gegebene Steuerersparnis gehört zur Finanzierung und wird aus dem unverschuldeten Cashflow entfernt.',[['FCFF','Finanzierungsneutraler freier Cashflow in Mio. Euro.']]),'Die vertraute Formel CFO + Nachsteuerzins − Investitionen setzt dagegen voraus, dass CFO die Zinszahlung enthält.'],'classification'),
 q('13','practice','b','An ordinary company reports CFO of €180 million excluding cash interest of €25 million. Capital expenditures are €90 million and net borrowing is €5 million. With taxes already included in CFO and no other adjustments, FCFE is:',[
 ['€70 million','Für den Eigenkapitalrest wird der tatsächlich noch ausstehende Zinsabfluss vollständig abgezogen.'],
 ['€95 million','Die Zinszahlung wurde bei der Ableitung des Eigenkapitalcashflows vergessen.'],
 ['€120 million','Ein bereits aus CFO ausgeschlossener Zins wurde fälschlich addiert.']
 ],0,[F('FCFE=180-25-90+5=70','Für FCFE wird nicht auf unverschuldete Steuern umgestellt; es zählt der verbleibende Betrag nach tatsächlicher Finanzierung.',[['FCFE','Freier Cashflow an Eigenkapitalgeber in Mio. Euro.']])],'classification'),
 q('14','practice','a b','A firm has CFO of €150 million, recurring gross capital expenditures of €125 million, and €50 million from selling a building that it cannot sell again. No interest adjustment is needed. Its cash surplus excluding that one-time disposal is:',[
 ['€25 million','Der wiederholbare Vergleich verwendet CFO minus die angegebenen Bruttoinvestitionen.'],
 ['€75 million','Dieser Betrag enthält den einmaligen Verkaufserlös.'],
 ['€150 million','Notwendige Investitionen wurden nicht berücksichtigt.']
 ],0,[F('CF_{rec}=150-125=25','Der Verkauf schafft heute Liquidität, ist aber nicht jedes Jahr in gleicher Höhe verfügbar.',[['CF_{rec}','Cashüberschuss ohne den einmaligen Verkauf in Mio. Euro.']]),'Ob die Bruttoinvestitionen tatsächlich dauerhaft erforderlich sind, wäre in einer vollständigen Prognose zusätzlich zu prüfen.'],'investment'),
 q('15','practice','b','Management uses depreciation as an estimate of maintenance capital expenditures. An analyst should regard this as:',[
 ['an exact identity under every inflation and technology environment.','Historische Kosten, Preisänderungen und technischer Wandel können den Ersatzbedarf stark verändern.'],
 ['a possible starting approximation requiring economic validation.','Die buchmäßige Kostenverteilung ist nicht automatisch der künftige Ersatzpreis.'],
 ['a reason to ignore all future investment.','Bestehende Abschreibung schafft keine neuen Produktionsmittel.']
 ],1,['Anlagenalter, Auslastung, Produktwechsel und Ersatzpreise sind relevant. Eine analytische Trennung von Wachstums- und Erhaltungsinvestition kann nützlich sein, muss aber nachvollziehbar begründet werden.'],'investment'),
 q('16','practice','a b','Base revenue is €800 million and grows 15%. EBIT margin is 10%, the tax rate 25%, and incremental operating capital investment is €0.40 per €1 of additional revenue. Replacement capex equals depreciation. Under these assumptions, FCFF is:',[
 ['€21 million','NOPAT 69 abzüglich wachstumsbedingter Investition 48.'],
 ['€60 million','Das ist NOPAT auf dem alten Umsatz ohne Wachstumsinvestition.'],
 ['€69 million','Die zusätzliche Kapitalbindung wurde nicht abgezogen.']
 ],0,[F('R_1=800\\cdot1{,}15=920,\\quad FCFF=920\\cdot0{,}10\\cdot0{,}75-0{,}40(920-800)=21','Wachstum erhöht sowohl den operativen Nachsteuergewinn als auch den Investitionsbedarf.',[['R_1','Neuer Jahresumsatz in Mio. Euro.'],['FCFF','Freier Cashflow an alle Kapitalgeber in Mio. Euro.']])],'growth'),
 q('17','practice','a b','Two firms have the same revenue growth, operating margin, taxes, and replacement requirements. Firm A needs much more incremental operating capital per additional sales dollar than Firm B. All else equal, A will have:',[
 ['lower current FCFF because growth ties up more capital.','Zusätzliche Investition mindert den gegenwärtig freien Betrag.'],
 ['higher current FCFF solely because it invests more.','Investition kann künftig Nutzen bringen, ist heute aber zunächst Mittelverwendung.'],
 ['necessarily lower firm value regardless of future returns.','Wert hängt von künftigen zusätzlichen Cashflows und Risiko ab, nicht nur dem aktuellen FCF.']
 ],0,['Ein negativer Wachstums-Cashflow kann zu einem wertschaffenden Projekt gehören, wenn spätere Erträge die Kapitalkosten angemessen übersteigen. Die aktuelle Liquiditätsbelastung bleibt trotzdem real.'],'growth'),
 q('18','practice','b','CFO is €126 million and net income €105 million. The cash conversion ratio defined as CFO divided by net income is:',[
 ['0.83','Dies ist der umgekehrte Quotient.'],
 ['1.20','CFO ist 20 % höher als der Periodengewinn.'],
 ['2.31','Das Addieren beider Größen liefert nicht die definierte Umwandlungsquote.']
 ],1,[F('CCR=\\frac{126}{105}=1{,}20','Zähler und Nenner betreffen dieselbe Periode und denselben Berichtskreis.',[['CCR','Cash Conversion Ratio nach der angegebenen Definition.']]),'Ein hoher Wert kann unter anderem durch Abschreibungen, Kapitalfreisetzung oder vorgezogene Einzahlungen entstehen; er ist kein alleiniger Qualitätsbeweis.'],'performance-ratios'),
 q('19','practice','b','Net income is close to zero while operating cash flow remains positive. CFO divided by net income is most likely:',[
 ['highly sensitive and potentially misleading as a stand-alone quality measure.','Ein sehr kleiner Nenner kann extreme Werte ohne entsprechend große wirtschaftliche Verbesserung erzeugen.'],
 ['automatically the most reliable cash-flow measure.','Die Nennerinstabilität wird durch einen positiven Zähler nicht beseitigt.'],
 ['equal to zero.','Ein positiver Zähler geteilt durch einen kleinen Nenner ist nicht null.']
 ],0,['Vor einer Interpretation werden Ergebnisstruktur, Vorzeichen und alternative Maßstäbe wie Umsatz oder Schuldendienst geprüft. Für negative Gewinne ist die übliche einfache Verhältnisinterpretation ebenfalls problematisch.'],'performance-ratios'),
 q('20','practice','b','CFO after interest and taxes is €112 million, cash interest €16 million, and cash taxes €32 million. Using cash interest coverage = (CFO + interest + taxes)/interest, coverage is:',[
 ['7.00 times','Das ist CFO/Zins, ohne die in der Definition verlangten Rückaddierungen.'],
 ['8.00 times','Die Steuerrückaddierung fehlt.'],
 ['10.00 times','Der definierte Cashbetrag vor Zinsen und Steuern beträgt 160.']
 ],2,[F('Cov_I=\\frac{112+16+32}{16}=10','Die genannte Definition wird ausdrücklich auf CFO nach Zins und Steuer angewandt.',[['Cov_I','Cash-Zinsdeckung als Vielfaches.']]),'Ein anderer Covenant kann eine andere Definition verlangen. Zudem sagt die Jahresquote allein nichts über unterjährige Fälligkeiten.'],'coverage-ratios'),
 q('21','practice','b','CFO after cash interest is €144 million, cash interest €24 million, and scheduled debt principal €60 million. Using debt-service coverage = (CFO + interest)/(interest + principal), coverage is:',[
 ['1.71 times','Dies ist 144/84 ohne Rückaddierung des bereits abgezogenen Zinses.'],
 ['2.00 times','Vor Schuldendienst stehen nach der Definition 168 gegenüber Zahlungen von 84.'],
 ['2.80 times','Der Nenner enthält nur Tilgung statt Zins plus Tilgung.']
 ],1,[F('Cov_{DS}=\\frac{144+24}{24+60}=2','Zähler und Nenner behandeln Zins konsistent.',[['Cov_{DS}','Schuldendienstdeckung nach der vorgegebenen Definition.']]),'Notwendige Investitionen sind in dieser Definition noch nicht abgezogen. Daher darf die Quote nicht ungeprüft als frei verfügbarer Sicherheitspuffer verstanden werden.'],'coverage-ratios'),
 q('22','practice','b','CFO is €96 million, ending total interest-bearing debt €480 million, and capital expenditures €80 million. CFO divided by debt is:',[
 ['16.67%','Dies verwechselt die Investitionsgröße mit dem verlangten Cashflowzähler.'],
 ['20.00%','96 relativ zu 480 ergibt 20 %.'],
 ['120.00%','Dies ist CFO/Capex, eine andere Deckungskennzahl.']
 ],1,[F('Cov_D=\\frac{96}{480}=20\\%','Eine Periodenstromgröße wird auf den angegebenen Schuldbestand bezogen.',[['Cov_D','CFO-zu-Schulden-Quote.']]),'Die rechnerische Quote ist keine Zusage, dass 20 % sofort zur Tilgung eingesetzt werden können; Investitionen und andere Verpflichtungen bleiben relevant.'],'coverage-ratios'),
 q('23','practice','b','An analyst discounts FCFF using the cost of equity alone. The principal conceptual error is:',[
 ['mismatching the cash-flow claim with its discount rate.','FCFF gehört allen Kapitalgebern; der Satz muss zum Risiko und Anspruch dieses Zahlungsstroms passen.'],
 ['failing to add dividends to every FCFF forecast.','Dividenden sind keine zusätzliche operative Wertschöpfung oberhalb von FCFF.'],
 ['using a forecast rather than historical cash flows.','Bewertung betrifft gerade erwartete künftige Zahlungsströme.']
 ],0,['Im üblichen konsistenten Modell wird FCFF mit WACC und FCFE mit Eigenkapitalkosten diskontiert. Schulden und weitere nicht operative Positionen müssen bei der Überleitung zum Eigenkapitalwert sachgerecht berücksichtigt werden.'],'valuation-workflow'),
 q('24','practice','a b','A mature firm reports negative FCFE because it repays a large amount of debt. Its operating cash flow is strong and necessary investment is modest. The most appropriate conclusion is:',[
 ['negative FCFE alone does not establish operating weakness.','Nettotilgung kann den Eigenkapitalrest verringern, obwohl der Betrieb Mittel erzeugt.'],
 ['negative FCFE always means negative FCFF.','FCFE enthält Finanzierungseffekte, die FCFF nicht in gleicher Weise enthält.'],
 ['the debt repayment must be reclassified as revenue.','Tilgung ist keine Leistung an Kunden.']
 ],0,['Die Überleitung FCFF minus Nachsteuerzins plus Nettoaufnahme zeigt, welche Anspruchsgruppe den Cashflow erhält. Ein Finanzierungsabbau kann kurzfristige Ausschüttungen begrenzen und zugleich das Kreditrisiko reduzieren.'],'fcfe'),
 q('a1','mock-a','a b','CFO after interest is €190 million and FCFE is €100 million. Capital investment is €120 million, cash interest €40 million, and the applicable cash tax rate is 25%. With no other adjustments, net borrowing is:',[
 ['€0 million','Dies ignoriert die Differenz zwischen CFO nach Investition und beobachtetem FCFE.'],
 ['€30 million','CFO nach Investition ist 70; zur Überleitung auf 100 sind 30 Nettoaufnahme erforderlich.'],
 ['€60 million','Nachsteuerzins wurde unnötig in eine bereits nach Zins definierte CFO-zu-FCFE-Brücke eingefügt.']
 ],1,[F('NB=FCFE-CFO+FCInv=100-190+120=30','Die Zinsdaten werden für diese konkrete Überleitung nicht benötigt, weil CFO bereits nach Zins gemessen ist.',[['NB','Nettokreditaufnahme in Mio. Euro.'],['FCFE','Freier Cashflow an Eigenkapitalgeber.'],['CFO','Operativer Cashflow nach Zins.'],['FCInv','Kapitalinvestition.']])],'fcfe'),
 q('a2','mock-a','a b','A company has positive CFO and an interest-coverage ratio above its covenant minimum. Most of its annual customer receipts arrive after a large mandatory debt payment date. The ratio alone:',[
 ['does not establish that cash is available when that debt payment falls due.','Eine Jahresaggregation verdeckt die zeitliche Liquiditätslücke.'],
 ['guarantees that the company can meet every interim payment.','Jahressumme und Zahlungszeitpunkt sind nicht identisch.'],
 ['makes the maturity schedule irrelevant.','Fälligkeiten sind gerade zur Einschätzung der beschriebenen Lücke erforderlich.']
 ],0,['Ein Liquiditätsplan mit Zahlungsterminen, verfügbaren Anfangsmitteln und belastbaren Kreditlinien ergänzt die Deckungsquote. Zusätzlich kann eine reine Zinsquote große Tilgungszahlungen ausblenden.'],'coverage-ratios'),
 q('b1','mock-b','a b','A firm changes from CFO after interest of €154 million to CFO excluding interest of €182 million. Its €28 million interest payment remains fully deductible at a 25% cash tax rate; taxes paid are unchanged. Capital investment is €90 million. Correct FCFF under either presentation is:',[
 ['€85 million','Alte Basis: 154 + 21 − 90; neue Basis: 182 − 7 − 90.'],
 ['€92 million','Die neue CFO-Basis enthält noch den Zinssteuervorteil 7.'],
 ['€113 million','Nachsteuerzins wurde zur bereits zinsfreien CFO-Darstellung nochmals addiert.']
 ],0,[F('FCFF=154+28(1-0{,}25)-90=182-28\\cdot0{,}25-90=85','Die beiden gleichwertigen Herleitungen korrigieren unterschiedliche CFO-Ausgangspunkte.',[['FCFF','Freier Cashflow an alle Kapitalgeber in Mio. Euro.']]),'Eine bloße Klassifikationsänderung darf bei identischen wirtschaftlichen Zahlungsströmen den finanzierungsneutralen Betrag nicht verändern.'],'classification'),
 q('b2','mock-b','a b','In a simplified growth model, replacement capex equals depreciation, EBIT margin is 16%, the tax rate 25%, and incremental capital investment is k per additional sales dollar. The maximum k for which additional growth does not reduce current FCFF, all else equal, is:',[
 ['0.04','Das ist der steuerliche Anteil der Marge, nicht die Nachsteuermarge.'],
 ['0.12','Ein zusätzlicher Umsatzdollar liefert 0,12 Nachsteuerbetriebsergebnis; darüberliegende Investition reduziert den aktuellen freien Betrag.'],
 ['0.16','Die operative Marge wurde nicht um Steuer korrigiert.']
 ],1,[F('\\Delta FCFF=[0{,}16(1-0{,}25)-k]\\Delta R,\\qquad k_{max}=0{,}12','Für positive zusätzliche Umsätze muss der Ausdruck in der Klammer mindestens null sein.',[['\\Delta FCFF','Zusätzlicher aktueller freier Cashflow.'],['\\Delta R','Positiver zusätzlicher Umsatz.'],['k,k_{max}','Investition je zusätzlicher Umsatzeinheit und ihre Schwelle.']]),'Die Schwelle betrifft den aktuellen Cashflow, nicht die gesamte Vorteilhaftigkeit mehrjähriger Wachstumsprojekte.'],'growth')
];
