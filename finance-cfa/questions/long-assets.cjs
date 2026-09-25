const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('la-'+id,'long-assets','statements',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a','A company separately purchases a patent for €96 million and incurs €4 million of directly attributable acquisition costs. It also incurs €7 million of general staff training. Under the ordinary recognition assumptions stated, the initial patent asset is:',[
 ['€96 million','Zurechenbare Erwerbskosten gehören im Grundfall ebenfalls zum Ansatz.'],
 ['€100 million','Kaufpreis und zurechenbare Erwerbskosten werden aktiviert; allgemeine Schulung nicht.'],
 ['€107 million','Allgemeine Mitarbeiterschulung wurde zusätzlich aktiviert.']
 ],1,[F('Cost=96+4=100','Die Art der Ausgabe bestimmt den Ansatz, nicht allein ihre zeitliche Nähe zum Kauf.',[['Cost','Anfänglicher Patentkostenbetrag in Mio. Euro.']])],'initial-cost'),
 q('02','practice','a','An acquiree has never recognized its internally developed customer relationships. In a business combination, the acquirer identifies those relationships and can measure their acquisition-date fair value under the applicable requirements. The acquirer should generally:',[
 ['leave them unrecognized solely because they were absent from the acquiree’s balance sheet.','Die bisherige Verkäuferbilanz ist nicht die vollständige Erwerbsbewertung.'],
 ['recognize the identifiable intangible separately from goodwill.','Ein qualifizierender identifizierbarer Wert wird vor dem Erwerbsrestbetrag gesondert bewertet.'],
 ['include every such identified value in goodwill without separate analysis.','Das würde identifizierbare Werte und den Restbetrag vermischen.']
 ],1,['Entstehungsart und Erwerbsvorgang beeinflussen die Ansatzprüfung. Dadurch können Unternehmen mit internem Wachstum und Unternehmen mit Zukäufen unterschiedliche Bilanz- und Amortisationsprofile haben.'],'origin'),
 q('03','practice','a','An IFRS project first meets all development recognition criteria in September. Management proposes capitalizing January–August research and development expenditure because the project is now successful. The proposal is:',[
 ['appropriate whenever future sales are expected.','Späterer Erfolg macht zuvor als Aufwand erfasste frühe Ausgaben nicht rückwirkend aktivierbar.'],
 ['inappropriate as a retroactive capitalization of those earlier expenses.','Der Ansatzzeitpunkt folgt dem belegten Erfüllen der Voraussetzungen.'],
 ['required only if the project has an indefinite useful life.','Nutzungsdauer ersetzt keine fehlenden früheren Ansatzvoraussetzungen.']
 ],1,['Qualifizierende zurechenbare Entwicklungskosten nach dem maßgeblichen Zeitpunkt sind von den früheren Ausgaben zu trennen. Forschung bleibt nach den allgemeinen IAS-38-Regeln Aufwand.'],'origin'),
 q('04','practice','a b','An acquired trademark has an indefinite useful life under IAS 38. Compared with a finite-lived trademark, it generally:',[
 ['is not amortized but remains subject to required impairment testing.','Unbestimmte Dauer beseitigt planmäßige Amortisation, nicht das Werthaltigkeitsrisiko.'],
 ['is never reviewed after acquisition.','Werthaltigkeit und Nutzungsdauereinschätzung müssen überprüft werden.'],
 ['is automatically classified as goodwill.','Ein identifizierbares Markenrecht bleibt vom Erwerbsrestbetrag unterscheidbar.']
 ],0,['Die Einordnung folgt dem erwarteten Nutzungshorizont. Ein endlicher Vermögenswert wird über seine Nutzungsdauer verteilt; ein unbestimmter Wert besitzt besondere laufende Prüfungspflichten.'],'impairment-scope'),
 q('05','practice','b c','Equipment costs €600,000, has a €130,000 residual value, and is expected to produce 235,000 units. It produces 47,000 units in the year. Units-of-production depreciation is:',[
 ['€26,000','Dies ist der verbrauchte Anteil des Restwerts, der nicht abschreibbar ist.'],
 ['€94,000','20 % der abschreibbaren Kosten 470.000 werden verbraucht.'],
 ['€120,000','Der Restwert wurde nicht vom abschreibbaren Betrag entfernt.']
 ],1,[F('Dep=(600000-130000)\\frac{47000}{235000}=94000','Nur der abschreibbare Betrag wird nach dem Leistungsanteil verteilt.',[['Dep','Leistungsabhängige Jahresabschreibung in Euro.']])],'depreciation'),
 q('06','practice','b c','A machine costs €180 million with a €20 million residual value and an eight-year straight-line life. After three full years, new information changes the remaining life to three years and residual value to €12 million. Annual depreciation prospectively is:',[
 ['€20 million','Dies wäre die unveränderte alte Verteilung.'],
 ['€36 million','Restbuchwert 120 minus neuer Restwert 12 wird auf drei verbleibende Jahre verteilt.'],
 ['€56 million','Dies verwendet erneut die ursprünglichen Kosten statt des Restbuchwerts.']
 ],1,[F('BV=180-3\\frac{180-20}{8}=120,\\qquad Dep_{new}=\\frac{120-12}{3}=36','Eine neue Schätzung verteilt nur den noch vorhandenen abschreibbaren Betrag.',[['BV','Buchwert am Änderungszeitpunkt in Mio. Euro.'],['Dep_{new}','Neue jährliche Abschreibung in Mio. Euro.']])],'estimate-change'),
 q('07','practice','b','An IFRS asset has a carrying amount of €160 million, value in use of €132 million, and fair value less costs of disposal of €140 million. Its impairment loss is:',[
 ['€20 million','Der höhere Rückgewinnungswert 140 wird mit dem Buchwert verglichen.'],
 ['€28 million','Dies verwendet den niedrigeren Nutzungswert allein.'],
 ['€140 million','Das ist der erzielbare Betrag, nicht der Verlust.']
 ],0,[F('RA=\\max(132,140)=140,\\qquad Imp=160-140=20','Die Nutzung und Veräußerung sind alternative Rückgewinnungswege.',[['RA','Erzielbarer Betrag in Mio. Euro.'],['Imp','Wertminderung in Mio. Euro.']])],'ifrs-impairment'),
 q('08','practice','b','A US GAAP held-and-used asset group has carrying value €200 million, expected undiscounted cash flows €185 million, and fair value €150 million. Under the ordinary recoverability model, the impairment loss is:',[
 ['€15 million','Das ist die Unterschreitung der Testschwelle, nicht die anschließende Verlustmessung.'],
 ['€35 million','Dies vergleicht zwei Bewertungsgrößen ohne den Buchwert.'],
 ['€50 million','Nach Scheitern des undiskontierten Tests wird auf Fair Value abgeschrieben.']
 ],2,[F('200>185,\\qquad Imp_{US}=200-150=50','Zuerst Entscheidung über Werthaltigkeit, danach eigenständige Messung des Verlusts.',[['Imp_{US}','US-Held-and-Used-Wertminderung in Mio. Euro.']])],'us-impairment'),
 q('09','practice','b','A US GAAP held-and-used asset group has carrying value €180 million, undiscounted expected cash flows €195 million, and fair value €145 million. No other special rules apply. The impairment loss under the ordinary model is:',[
 ['€0 million','Der Buchwert ist durch die undiskontierten Cashflows gedeckt.'],
 ['€15 million','Ein Überschuss der Testgröße über Buchwert ist kein Verlust.'],
 ['€35 million','Der niedrigere Fair Value allein löst bei bestandenem Test hier keine Abschreibung aus.']
 ],0,['195 deckt 180. Der zweite Bewertungsschritt wird deshalb im angegebenen Modell nicht ausgelöst. Für Goodwill, bestimmte andere immaterielle Werte oder eine Held-for-Sale-Kategorie wäre die Prüfung anders abzugrenzen.'],'us-impairment'),
 q('10','practice','b','A production machine does not generate independent cash inflows without the surrounding line. Under IAS 36, the analyst should most appropriately:',[
 ['ignore possible impairment because individual machine revenue is unavailable.','Fehlende Einzelzuflüsse beseitigen die Werthaltigkeitsfrage nicht.'],
 ['identify the appropriate cash-generating unit for the impairment analysis.','Der Prüfungsbereich muss zu im Wesentlichen unabhängigen Mittelzuflüssen passen.'],
 ['use consolidated revenue as the machine’s fair value.','Konzernumsatz ist weder ein passender Buchwertvergleich noch ein Fair Value der Maschine.']
 ],1,['Vermögenswerte, Cashflows und gegebenenfalls relevante Verpflichtungen müssen auf derselben sachgerechten Ebene abgegrenzt werden. Eine beliebig große profitable Gruppe kann Verluste einzelner unabhängiger Einheiten verdecken.'],'impairment-scope'),
 q('11','practice','b','An IFRS asset costs €240 million, has a six-year straight-line life and no residual value. After Year 1 depreciation, it is impaired by €50 million. At the end of Year 2, new evidence supports recoverable amount €170 million. With unchanged remaining useful life, the impairment reversal is:',[
 ['€40 million','Buchwert vor Erholung 120; die hypothetische Obergrenze ohne Verlust ist 160.'],
 ['€50 million','Dies schreibt auf den erzielbaren Betrag 170 zu und überschreitet die zulässige Buchwertobergrenze.'],
 ['€80 million','Die bisher erfassten Abschreibungen wurden nicht sachgerecht fortgeführt.']
 ],0,[F('BV_{before}=(240-40-50)\\frac45=120,\\quad BV_{cap}=240-2\\cdot40=160,\\quad Rev=160-120=40','Nach der ersten Abwertung werden 150 auf fünf Restjahre verteilt.',[['BV_{before}','Buchwert nach Jahr-2-Abschreibung vor Erholung in Mio. Euro.'],['BV_{cap}','Hypothetischer Buchwert ohne frühere Wertminderung.'],['Rev','Zulässige Zuschreibung.']])],'reversal'),
 q('12','practice','b','An IFRS asset’s discounted value rises solely because a forecast payment is one year closer; the underlying service potential and all estimates are unchanged. This passage of time alone:',[
 ['is sufficient evidence to reverse a prior impairment.','Bloße Aufzinsung ohne entsprechend verbesserte Schätzungen genügt nach IAS 36 nicht.'],
 ['does not by itself justify reversing the prior impairment.','Die Verlustumkehr verlangt eine geeignete Änderung der maßgeblichen Schätzungen.'],
 ['requires the asset to be valued above original cost.','Eine solche automatische Aufwertung gibt es nicht.']
 ],1,['Die Zuschreibungsgrenze ist erst nach Feststellung eines zulässigen Erholungsgrundes relevant. Ein höherer rein rechnerischer Barwert kann auch aus dem Ablaufen von Zeit entstehen.'],'reversal'),
 q('13','practice','b c','A qualifying IAS 16 revaluation increases an asset from €104 million to €144 million, with no prior related losses or tax effects. Remaining life is four years with zero residual value. Compared with retaining €104 million, future annual straight-line depreciation is:',[
 ['€10 million higher','Der Bewertungszuwachs 40 wird auf vier verbleibende Jahre verteilt.'],
 ['€26 million higher','26 ist die alte jährliche Abschreibung, nicht die Differenz.'],
 ['€40 million higher','Der gesamte Zuwachs wird nicht jedes einzelne Jahr verbraucht.']
 ],0,[F('\\Delta Dep=\\frac{144}{4}-\\frac{104}{4}=10','Die erste Aufwertung und die spätere Aufwandsverteilung sind getrennte Wirkungen.',[['\\Delta Dep','Zusätzliche jährliche Abschreibung in Mio. Euro.']])],'revaluation'),
 q('14','practice','b','An IAS 16 revaluation decrease is €20 million. A revaluation surplus of €12 million exists for that same asset, with no tax effects or other complications. The amount recognized as a loss in profit or loss is:',[
 ['€8 million','12 kann gegen die zugehörige Rücklage wirken; der Rest belastet die GuV.'],
 ['€12 million','Dies ist der verfügbare Rücklagenbetrag, nicht der verbleibende GuV-Verlust.'],
 ['€20 million','Die vorhandene zugehörige Neubewertungsrücklage wurde ignoriert.']
 ],0,[F('Loss_{PL}=20-12=8','Die Vorhistorie desselben Vermögenswerts entscheidet über den Ausweis.',[['Loss_{PL}','Erfolgswirksamer Verlust in Mio. Euro.']])],'revaluation'),
 q('15','practice','b','Management may consider selling a plant several years from now, but the plant is not currently available for immediate sale and no active sale plan exists. This alone:',[
 ['is sufficient for held-for-sale classification.','Ein unverbindlicher ferner Gedanke erfüllt die spezifischen Klassifikationskriterien nicht.'],
 ['does not justify held-for-sale classification or automatic cessation of depreciation.','Nutzungsstrategie und konkrete Verkaufsvoraussetzungen sind zu prüfen.'],
 ['requires immediate derecognition of the plant.','Eine mögliche spätere Veräußerung ist kein bereits erfolgter Abgang.']
 ],1,['Ein Einsatzende oder eine Verkaufsabsicht ist von einem qualifizierenden hochwahrscheinlichen Verkauf zu unterscheiden. Auch andere Werthaltigkeitsfragen können bestehen, ohne dass Held for Sale zutrifft.'],'held-for-sale'),
 q('16','practice','b','An asset with carrying amount €85 million meets IFRS 5 held-for-sale requirements. Fair value is €80 million and relevant costs to sell €6 million. Its new carrying amount is:',[
 ['€74 million','Der Vergleichswert ist Fair Value nach Verkaufskosten.'],
 ['€80 million','Verkaufskosten wurden nicht berücksichtigt.'],
 ['€85 million','Der geringere Nettoverkaufsmaßstab wurde ignoriert.']
 ],0,[F('BV_{HFS}=\\min(85,80-6)=74','Die Wertminderung beträgt 11; bei zutreffender Klassifikation endet die planmäßige Abschreibung.',[['BV_{HFS}','Held-for-Sale-Buchwert in Mio. Euro.']])],'held-for-sale'),
 q('17','practice','b','Equipment originally cost €160 million and has accumulated depreciation €110 million with no impairment. It is sold for €65 million, with €5 million of direct disposal costs. The gain is:',[
 ['€10 million','Nettoerlös 60 minus Restbuchwert 50.'],
 ['€15 million','Die direkten Abgangskosten wurden ausgelassen.'],
 ['€60 million','Das ist der Nettozufluss, nicht der Veräußerungsgewinn.']
 ],0,[F('Gain=(65-5)-(160-110)=10','Nur die Differenz zwischen Nettoerlös und verbleibendem Buchwert ist Erfolg.',[['Gain','Veräußerungsgewinn in Mio. Euro.']])],'disposal'),
 q('18','practice','b','A company sells equipment for net cash proceeds exactly equal to its carrying value and retains all proceeds as cash. Ignoring taxes, the immediate effect on total assets is:',[
 ['no change.','Ein gleich hoher Sachanlagenbuchwert wird durch Cash ersetzt.'],
 ['a decrease equal to the carrying value.','Diese Aussage entfernt die Anlage, vergisst aber den Geldzugang.'],
 ['an increase equal to the cash proceeds.','Diese Aussage erfasst Cash, vergisst aber den Anlagenabgang.']
 ],0,['Die Zusammensetzung der Aktiva ändert sich; die Produktionskapazität kann sinken. Gesamte Aktiva würden erst durch einen zusätzlichen Gewinn, Verlust oder die spätere Verwendung des Cash anders reagieren.'],'disposal'),
 q('19','practice','b c','Opening net PP&E is €500 million. Additions are €120 million, depreciation €65 million, impairment €15 million, and positive net currency translation €8 million. An asset with carrying value €30 million is sold for €42 million. Ending net PP&E is:',[
 ['€506 million','Dies verwendet Verkaufserlös 42 statt abgegangenen Buchwert 30.'],
 ['€518 million','Alle Bestandsbewegungen verwenden den passenden Buchwertmaßstab.'],
 ['€530 million','Der Verkaufsgewinn 12 gehört nicht zusätzlich in den verbleibenden PP&E-Bestand.']
 ],1,[F('NBV_1=500+120-65-15+8-30=518','Der Verkaufserlös erklärt Cash und Gewinn, nicht den ausgebuchten Anlagenbetrag.',[['NBV_1','Nettoanlagenendbestand in Mio. Euro.']])],'roll-forward'),
 q('20','practice','c','A comparable pool of straight-line depreciated equipment has gross cost €900 million, accumulated depreciation €360 million, zero residual values, and representative annual depreciation €90 million. With no revaluations or impairment, approximate remaining life is:',[
 ['4 years','Das ist die approximative bisherige Nutzungsdauer 360/90.'],
 ['6 years','Nettobuchwert 540 relativ zur Jahresabschreibung 90.'],
 ['10 years','Das ist die approximative gesamte Nutzungsdauer 900/90.']
 ],1,[F('Remaining=\\frac{900-360}{90}=6','Die vereinfachte Restdauer passt zu Gesamtdauer 10 minus Alter 4.',[['Remaining','Geschätzte durchschnittliche Restnutzungsdauer in Jahren.']])],'age-capacity'),
 q('21','practice','c','A firm makes a very large equipment acquisition just before year-end. Applying accumulated depreciation divided by current-year depreciation as an age estimate without adjustment is most questionable because:',[
 ['the year-end asset mix and annual expense may no longer represent the same stable asset pool.','Zugangszeitpunkt und unterschiedliches Alter verzerren die einfache Quotienteninterpretation.'],
 ['all age estimates necessarily use market share prices.','Der Näherungsansatz verwendet gerade Kosten- und Abschreibungsgrößen.'],
 ['equipment purchases cannot affect any balance-sheet ratios.','Neue Aktiva können die Nenner und die historische Vergleichbarkeit erheblich verändern.']
 ],0,['Land, Neubewertungen, Wertminderungen und unterschiedliche Methoden sind weitere mögliche Störgrößen. Die Kennzahl ist ein Hinweis für vertiefte Prüfung, kein exaktes technisches Alter.'],'age-capacity'),
 q('22','practice','c','Which disclosure is most useful for identifying future contracted investment cash requirements that may not yet appear in current capex?',[
 ['Contractual commitments for acquiring property, plant, and equipment.','Die Verpflichtungen zeigen bereits vereinbarte zukünftige Investitionsbedarfe.'],
 ['Current-year depreciation alone.','Abschreibung verteilt alte Kosten und erfasst keine vollständigen künftigen Vertragszahlungen.'],
 ['The current share price alone.','Ein Marktpreis ersetzt keine Investitionsverpflichtungsangabe.']
 ],0,['Zusätzlich wird geprüft, welche Anlagenzugänge bereits bezahlt, noch offen oder nicht zahlungswirksam erworben wurden. Ein Zukunftsplan benötigt mehr als den vergangenen Investitionssaldo.'],'disclosures'),
 q('23','practice','b c','After a large impairment, a company reports higher asset turnover with unchanged revenue. This improvement:',[
 ['may arise mechanically from the lower asset denominator.','Die Quote kann ohne zusätzlichen Absatz oder effizientere Produktion steigen.'],
 ['proves that the impairment increased productive capacity.','Eine Bewertungsbuchung baut keine neue Kapazität auf.'],
 ['requires revenue to be restated upward.','Der Umsatz muss bei bloßer Nenneränderung nicht verändert werden.']
 ],0,['Auch künftige Abschreibung kann nach einer Wertminderung geringer sein. Für echte Leistungsverbesserung sind Produktions-, Absatz- und Zahlungsdaten neben den Buchwertquoten erforderlich.'],'ratio-analysis'),
 q('24','practice','a c','Two firms use similar technology, but one developed it internally and the other obtained it through acquisitions. Before comparing operating margins and asset turnover, an analyst should:',[
 ['assess recognition and amortization differences created by their growth histories.','Erwerbswerte und interne Aufwandsregeln können Zähler und Nenner unterschiedlich prägen.'],
 ['assume equal technology always produces equal intangible carrying amounts.','Wirtschaftliche Ähnlichkeit hebt unterschiedliche Ansatzhistorien nicht auf.'],
 ['remove every acquired intangible and all related amortization without considering economic consumption.','Eine pauschale Entfernung kann tatsächlichen Kaufpreis und Nutzungsverbrauch ausblenden.']
 ],0,['Der Vergleich sollte die Bewertungshistorie offenlegen und bei Anpassungen beide Seiten konsistent berücksichtigen. Nicht zahlungswirksame Amortisation ist nicht automatisch wirtschaftlich kostenlos.'],'origin'),
 q('a1','mock-a','b','A US held-and-used asset group has carrying value €180 million. Originally expected net cash flows of €60 million in each of four years fall by 30% in every year. There are no other cash flows, and revised fair value is €140 million. The impairment loss is:',[
 ['€12 million','Das ist die Unterschreitung der undiskontierten Testschwelle: 180 − 168.'],
 ['€40 million','Nach Scheitern des Tests wird der Buchwert auf den gegebenen Fair Value vermindert.'],
 ['€54 million','Dies wendet die Cashflow-Rückgangsrate direkt auf den Buchwert an.']
 ],1,[F('UCF=4\\cdot60(1-0{,}30)=168<180,\\quad Imp_{US}=180-140=40','Die wirtschaftliche Prognoseänderung löst zunächst den Test aus; dessen Unterschreitung ist nicht der Verlustbetrag.',[['UCF','Undiskontierte revidierte Nettozuflüsse in Mio. Euro.'],['Imp_{US}','Wertminderung nach US-Grundmodell in Mio. Euro.']])],'us-impairment'),
 q('a2','mock-a','b c','Opening net PP&E is €600 million and closing net PP&E €650 million. Depreciation is €80 million, impairment €30 million, the net book value disposed of €40 million, and currency translation reduces net PP&E by €20 million. No other changes occur. Additions include €50 million from non-cash leases and €30 million of unpaid equipment invoices; no old equipment invoices are settled. Cash paid for additions is:',[
 ['€140 million','Gesamte Zugänge 220 werden um nicht bezahlte Komponenten 80 vermindert.'],
 ['€100 million','Ein falsches Vorzeichen der negativen Währungswirkung ergibt Zugänge 180 und nach Zahlungsbereinigung nur 100.'],
 ['€220 million','Das sind die gesamten bilanziellen Zugänge vor Zahlungsbereinigung.']
 ],0,[F('Add=650-600+80+30+40+20=220,\\quad CashAdd=220-50-30=140','Die Buchwertüberleitung und die Zahlungsüberleitung beantworten zwei verschiedene Fragen.',[['Add','Bilanzielle Anlagenzugänge in Mio. Euro.'],['CashAdd','Tatsächliche Auszahlung für diese Zugänge in Mio. Euro.']])],'roll-forward'),
 q('b1','mock-b','b c','A company records a €40 million impairment on equipment with four remaining straight-line years and zero residual value. Compared with no impairment, all later revenues and costs are identical except depreciation. Assume a 25% full tax effect. The next year’s net income is:',[
 ['€7.50 million higher','Die geringere Jahresabschreibung 10 erhöht Nachsteuergewinn um 7,50.'],
 ['€10.00 million higher','Dies ist der Vorsteuereffekt ohne den angenommenen Steuerabzug.'],
 ['€30.00 million lower','Dies verwechselt den früheren Nachsteuerverlust mit der folgenden jährlichen Ergebniswirkung.']
 ],0,[F('\\Delta NI=\\frac{40}{4}(1-0{,}25)=7{,}50','Die spätere Ergebnisverbesserung kann vollständig aus der niedrigeren Kostenbasis stammen.',[['\\Delta NI','Anstieg des folgenden Jahresüberschusses in Mio. Euro.']])],'ratio-analysis'),
 q('b2','mock-b','b','An IAS 16 revaluation increases an asset’s carrying value by €30 million. A prior revaluation decrease of €10 million for the same asset had been recognized in profit or loss. Assume no other related amounts or tax effects. The current increase is recognized as:',[
 ['€10 million in profit or loss and €20 million in OCI.','Zuerst wird der entsprechende frühere GuV-Verlust umgekehrt, dann die verbleibende Aufwertung über OCI erfasst.'],
 ['€30 million in OCI with no profit-or-loss effect.','Die ausdrücklich genannte frühere GuV-Erfassung wurde übergangen.'],
 ['€30 million in profit or loss.','Die über den früheren Verlust hinausgehende Aufwertung folgt nicht derselben GuV-Behandlung.']
 ],0,['Der Ausweis hängt von der Geschichte desselben Vermögenswerts ab. Ein positiver Neubewertungsbetrag ist nicht ausnahmslos vollständig OCI und ebenso wenig ausnahmslos laufender Gewinn.'],'revaluation')
];
