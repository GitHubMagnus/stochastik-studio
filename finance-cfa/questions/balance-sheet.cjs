const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('bs-'+id,'balance-sheet','statements',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a','An internally generated brand becomes widely recognized. Under IAS 38, management’s estimate of its market value is generally:',[
 ['recognized as an intangible asset immediately.','Eine Wertschätzung allein erfüllt für eine intern geschaffene Marke nicht die Ansatzregeln.'],
 ['not sufficient to recognize the internally generated brand as an asset.','Wirtschaftlicher Wert und bilanzieller Ansatz sind verschiedene Fragen.'],
 ['recognized as goodwill.','Intern erzeugter Goodwill wird nicht wie erworbener Goodwill angesetzt.']
 ],1,['Ein Unternehmen kann wertvolle Wettbewerbsvorteile besitzen, die in seiner Bilanz fehlen. Daraus folgt weder, dass alle intern geschaffenen Werte angesetzt werden dürfen, noch dass der Buchwert den Marktwert vollständig misst.'],'intangibles'),
 q('02','practice','a','An IFRS research project incurs €25 million during research, €15 million during development before all recognition criteria are met, and €50 million afterward. The asset is not yet available for use and has no impairment. The amount capitalized is:',[
 ['€50 million','Nur die zurechenbaren Kosten nach Erfüllung sämtlicher Bedingungen werden aktiviert.'],
 ['€65 million','Frühe Entwicklungskosten vor Kriterienerfüllung werden nicht nachträglich aktiviert.'],
 ['€90 million','Forschungskosten bleiben Aufwand.']
 ],0,[F('A_{dev}=50,\\qquad Exp=25+15=40','Der maßgebliche Zeitpunkt trennt Aufwand und Aktivierung.',[['A_{dev}','Aktivierter Entwicklungsbetrag in Mio. Euro.'],['Exp','Aufwand der Periode in Mio. Euro.']]),'Noch fehlende Nutzungsbereitschaft verhindert hier die planmäßige Amortisation; die Annahme schließt eine notwendige Wertminderung ausdrücklich aus.'],'research-development'),
 q('03','practice','a','An IFRS development project is technically feasible and has a promising market, but financing needed to complete it is not available. Capitalization is most appropriately:',[
 ['required because a promising market is sufficient.','Die Bedingungen gelten gemeinsam, nicht alternativ.'],
 ['not justified until all required recognition criteria are demonstrated.','Die verfügbaren Mittel zur Fertigstellung sind ein eigenständiges Nachweisfeld.'],
 ['permitted by assigning an indefinite useful life.','Die Nutzungsdauer beseitigt keine fehlende Ansatzvoraussetzung.']
 ],1,['Technik, Absicht, Einsatzmöglichkeit, Nutzen, Ressourcen und verlässliche Kostenmessung müssen zusammen belegt werden. Ein Erfolgswunsch ersetzt keinen Ressourcennachweis.'],'research-development'),
 q('04','practice','a','An intangible asset costing €72 million becomes available for use at the beginning of a year. It has a six-year useful life, no residual value, straight-line amortization, and no impairment. Its carrying amount after two full years is:',[
 ['€24 million','Das ist die kumulierte Amortisation, nicht der Restbuchwert.'],
 ['€48 million','Jährlich werden 12 aufwandswirksam; nach zwei Jahren verbleiben 48.'],
 ['€60 million','Das wäre der Buchwert nach nur einem Jahr.']
 ],1,[F('Amort=\\frac{72}{6}=12,\\qquad BV_2=72-2\\cdot12=48','Aufwand und verbleibender Vermögenswert ergänzen sich zu den ursprünglichen Kosten.',[['Amort','Jahresamortisation in Mio. Euro.'],['BV_2','Restbuchwert nach zwei Nutzungsjahren in Mio. Euro.']])],'amortisation'),
 q('05','practice','a','For an intangible asset with an indefinite useful life under IFRS, the most accurate statement is that it:',[
 ['is amortized over an arbitrarily long period.','Unbestimmte Nutzungsdauer wird nicht durch eine willkürliche lange Abschreibungsdauer ersetzt.'],
 ['is not amortized but is subject to annual impairment testing and review of the useful-life assessment.','Fehlende planmäßige Abschreibung entbindet nicht von Werthaltigkeitsprüfung.'],
 ['has a guaranteed permanent economic benefit.','Unbestimmt bedeutet derzeit nicht zuverlässig begrenzbar, nicht unendlich sicher.']
 ],1,['Ändern sich die Umstände, kann die Nutzungsdauer künftig als endlich einzuschätzen sein. Zudem können wirtschaftliche Verluste trotz bisher unbestimmter Dauer auftreten.'],'amortisation'),
 q('06','practice','a','Which statement about internally generated research and development under US GAAP is most accurate?',[
 ['All development expenditure must always be capitalized.','Das ist nicht der allgemeine US-Grundfall.'],
 ['R&D is generally expensed, with specific exceptions such as certain software costs.','Die allgemeine Regel muss von speziellen Anwendungsbereichen getrennt werden.'],
 ['No expenditure related to technology can ever create an asset.','Erworbene Technologie und spezielle Softwarefälle können als Vermögenswerte erfasst werden.']
 ],1,['Die Behandlung folgt dem konkreten Regelbereich. Eine pauschale Aussage „Technologie wird nie aktiviert“ verwechselt die allgemeine interne R&D-Regel mit sämtlichen erworbenen oder speziell geregelten Werten.'],'research-development'),
 q('07','practice','a','Two firms report the same carrying amount of licenses. One relies on a single license expiring next year; the other holds several long-duration licenses. An analyst should primarily:',[
 ['treat their replacement and concentration risks as identical.','Die gleiche Bilanzsumme verbirgt unterschiedliche Laufzeiten und Abhängigkeiten.'],
 ['examine renewal rights, replacement costs, and dependence of future cash flows on the licenses.','Die wirtschaftliche Tragfähigkeit erschließt sich aus Rechten und künftigen Zahlungen.'],
 ['assign zero value to every license expiring next year.','Restlaufzeit und Verlängerbarkeit müssen konkret geprüft werden; null folgt nicht automatisch.']
 ],1,['Der Buchwert ist eine verdichtete Rechnungslegungsgröße. Angaben über Restlaufzeit und Vertrag erlauben eine belastbarere Einschätzung von Ersatzbedarf und Ertragsrisiko.'],'intangible-disclosure'),
 q('08','practice','b','A buyer pays €380 million for 100% of a business. The acquired identifiable net assets, after all relevant acquisition adjustments, are €310 million; their old book value was €240 million. Goodwill is:',[
 ['€70 million','Verglichen wird mit den identifizierbaren Nettovermögenswerten nach Erwerbsbewertung.'],
 ['€140 million','Das ist Kaufpreis minus alter Buchwert; neu identifizierte bzw. bewertete Werte wären fälschlich Goodwill.'],
 ['€310 million','Das ist das identifizierbare Nettovermögen selbst.']
 ],0,[F('GW=380-310=70','Vor der Restbetragsberechnung werden die identifizierbaren Positionen bewertet.',[['GW','Erworbener Goodwill in Mio. Euro.']]),'Die 70 Differenz zwischen altem und neuem Nettovermögen ist vom Goodwill zu trennen.'],'goodwill'),
 q('09','practice','b','An acquirer buys 75% of a business for €150 million. Identifiable net assets are €160 million. The fair value of eligible non-controlling interests is €48 million. Under the full-goodwill method, goodwill is:',[
 ['€30 million','Das wäre anteiliger Goodwill: 150 minus 75 % von 160.'],
 ['€38 million','Gegenleistung plus Fair Value des NCI minus identifizierbares Nettovermögen.'],
 ['€48 million','Das ist die Bewertung des NCI, nicht der Erwerbsrestbetrag.']
 ],1,[F('GW_{full}=150+48-160=38','Der gesamte Beteiligungsanspruch wird den gesamten identifizierbaren Nettovermögenswerten gegenübergestellt.',[['GW_{full}','Vollständiger Goodwill in Mio. Euro.']])],'partial-goodwill'),
 q('10','practice','b','An IFRS acquirer pays €210 million for 70% of a business whose identifiable net assets are €250 million. Eligible ordinary NCI are measured proportionately. Goodwill is:',[
 ['€35 million','Die 30-%-Minderheit wird mit 75 angesetzt; der Restbetrag ist 35.'],
 ['€50 million','Dies rechnet den Kaufpreis mit 210/0,70 auf 100 % hoch und zieht 250 ab. Gefragt ist aber anteiliger Goodwill; Kontrollprämien verhindern zudem ein ungeprüftes Hochrechnen.'],
 ['€75 million','Das ist der proportionale NCI-Betrag, nicht Goodwill.']
 ],0,[F('NCI=0{,}30\\cdot250=75,\\qquad GW=210+75-250=35','Bei anteiligem Goodwill wird für geeignete NCI der proportionale Nettovermögensanteil verwendet.',[['NCI','Nicht beherrschender Anteil in Mio. Euro.'],['GW','Anteilig angesetzter Goodwill in Mio. Euro.']])],'partial-goodwill'),
 q('11','practice','b','A proposed acquisition produces a negative goodwill residual after the initial calculation. Under the acquisition method, the most appropriate next step is to:',[
 ['record an intangible liability and amortize it.','Ein bestätigter günstiger Erwerb wird nicht als negativer Goodwill planmäßig aufgelöst.'],
 ['reassess identification and measurement before recognizing any bargain-purchase gain.','Ein rechnerischer günstiger Erwerb kann auf übersehene Positionen oder Bewertungsfehler hinweisen.'],
 ['increase goodwill to zero by inventing additional consideration.','Die Gegenleistung darf nicht willkürlich verändert werden.']
 ],1,['Erst nach erneuter Prüfung wird ein verbleibender günstiger Erwerb nach den einschlägigen Regeln erfolgswirksam erfasst. Der anfängliche negative Restbetrag ist kein ausreichender Anlass für eine sofortige ungeprüfte Gewinnbuchung.'],'goodwill'),
 q('12','practice','a b','An IFRS cash-generating unit has a carrying amount of €420 million, including €55 million of goodwill. Value in use is €385 million and fair value less costs of disposal is €390 million. No allocation limits affect the result. Goodwill remaining after impairment is:',[
 ['€20 million','Dieser Betrag verwendet den niedrigeren Nutzungswert statt des erzielbaren Betrags.'],
 ['€25 million','Erzielbarer Betrag 390, Verlust 30, verbleibender Goodwill 25.'],
 ['€55 million','Die Einheit ist um 30 über ihrem erzielbaren Betrag angesetzt.']
 ],1,[F('RA=\\max(385,390)=390,\\quad Imp=420-390=30,\\quad GW_1=55-30=25','Der Verlust wird zuerst dem Goodwill zugeordnet und ist hier kleiner als dessen Buchwert.',[['RA','Erzielbarer Betrag in Mio. Euro.'],['Imp','Wertminderung in Mio. Euro.'],['GW_1','Goodwill nach Wertminderung in Mio. Euro.']])],'impairment'),
 q('13','practice','b','Following an earlier IFRS goodwill impairment, the acquired business performs better than expected. The previous goodwill impairment:',[
 ['must be reversed whenever the share price recovers.','Ein höherer Aktienpreis erlaubt keine Zuschreibung des abgeschriebenen Goodwills.'],
 ['is not reversed under IFRS.','Neu entstandene Ertragskraft wird nicht als wiederhergestellter erworbener Goodwill angesetzt.'],
 ['is reversed through OCI rather than profit.','Auch OCI schafft keine allgemeine Ausnahme vom Zuschreibungsverbot.']
 ],1,['Das Zuschreibungsverbot für Goodwill unterscheidet sich von den Regeln für bestimmte andere IAS-36-Vermögenswerte. Deren mögliche Zuschreibung besitzt eigene Voraussetzungen und Obergrenzen.'],'impairment'),
 q('14','practice','c','An IFRS debt asset is held in a business model whose objective is to collect contractual cash flows, and those flows meet SPPI. Absent a relevant fair-value designation, the most appropriate category is:',[
 ['amortized cost.','Geschäftsmodell und Vertragszahlungsbedingungen erfüllen den Grundfall dieser Kategorie.'],
 ['FVOCI solely because the bond is listed.','Börsenhandel allein begründet nicht das Geschäftsmodell Vereinnahmen und Verkaufen.'],
 ['equity-method accounting.','Ein schuldrechtlicher Anspruch ist keine entsprechende Beteiligung an einem assoziierten Unternehmen.']
 ],0,['Die Instrumentenbezeichnung „Anleihe“ allein wäre nicht ausreichend. Hier werden sowohl Geschäftsmodell als auch SPPI ausdrücklich vorgegeben. Kreditverlustregeln sind zusätzlich anzuwenden.'],'financial-assets'),
 q('15','practice','c','A debt instrument’s contractual return is directly linked to an equity index rather than basic lending risks. Under IFRS 9, it most likely:',[
 ['meets SPPI merely because principal is described in the contract.','Eine Bezeichnung als Kapitalrückzahlung beseitigt die aktienabhängige Renditestruktur nicht.'],
 ['fails SPPI and is measured at FVTPL in the ordinary case.','Aktienmarktexposition ist nicht bloß grundlegender Zins und Tilgung.'],
 ['qualifies for amortized cost whenever management plans to hold it.','Ein Haltewunsch ersetzt den eigenständigen Zahlungsstromtest nicht.']
 ],1,['Geschäftsmodell und Zahlungsstrommerkmale sind zwei getrennte Prüfungen. Ein Instrument kann langfristig gehalten werden und dennoch FVTPL erfordern.'],'financial-assets'),
 q('16','practice','c','A debt investment has an opening amortized amount of €98 million, an effective annual yield of 5%, and a year-end coupon receipt of €3 million. With no repayment, impairment, or other changes, its closing amortized amount is:',[
 ['€96.10 million','Diese Rechnung vertauscht Zinszuwachs und Couponabgang.'],
 ['€99.90 million','Effektivzinsertrag 4,90 abzüglich Zahlung 3 erhöht den Betrag um 1,90.'],
 ['€102.90 million','Das wäre der Betrag vor Abzug des erhaltenen Coupons.']
 ],1,[F('AC_1=98+98\\cdot0{,}05-3=99{,}90','Effektiver Ertrag und Barcoupon sind nicht identisch.',[['AC_1','Fortgeführter Endbetrag vor Kreditverlustkorrekturen in Mio. Euro.']])],'measurement-example'),
 q('17','practice','c','A debt investment measured at IFRS FVOCI begins the year at €100 million. Its effective yield and coupon rate are both 4%, the coupon is received, and year-end fair value is €94 million. Ignoring credit, currency, and tax effects, its OCI for the year is:',[
 ['−€6 million','Der fortgeführte Betrag bleibt 100; die Fair-Value-Differenz ist −6.'],
 ['−€2 million','Das ist der Gesamtergebnisbeitrag nach Einbezug des Zinsertrags 4.'],
 ['€4 million','Der Zinsertrag gehört im Fall zur GuV, nicht zum Wertänderungs-OCI.']
 ],0,[F('AC_1=100+4-4=100,\\quad OCI=94-100=-6','Die Couponzahlung beseitigt den im Jahr verdienten Zinszuwachs des fortgeführten Betrags.',[['AC_1','Fortgeführter Endbetrag in Mio. Euro.'],['OCI','Sonstiges Ergebnis aus der Bewertung in Mio. Euro.']]),'GuV-Ertrag 4 plus OCI −6 ergibt zusammen −2 Gesamtergebnis.'],'measurement-example'),
 q('18','practice','c','An IFRS non-trading equity investment has been irrevocably designated at FVOCI at initial recognition. On disposal, the accumulated fair-value gain is generally:',[
 ['reclassified from OCI to profit or loss.','Diese Recyclingregel betrifft grundsätzlich FVOCI-Schuldinstrumente, nicht diese Eigenkapitalwahl.'],
 ['not reclassified to profit or loss.','Bei der beschriebenen Equity-FVOCI-Wahl bleibt der Wertänderungsbetrag außerhalb der GuV.'],
 ['treated as coupon interest.','Eine Aktienwertänderung ist kein vertraglicher Schuldzins.']
 ],1,['Die gemeinsame Abkürzung FVOCI verdeckt zwei unterschiedliche Behandlungsmuster. Dividenden sind gesondert zu beurteilen und grundsätzlich GuV-Ertrag, sofern sie nicht eindeutig Kostenrückzahlung sind.'],'equity-instruments'),
 q('19','practice','c','Under current US GAAP, an ordinary equity security with a readily determinable fair value, outside consolidation and the equity method, is generally measured with changes in value recognized in:',[
 ['profit or loss.','Die allgemeine heutige Regel ordnet diese Änderungen dem Ergebnis zu.'],
 ['OCI under an unrestricted available-for-sale equity election.','Das schreibt eine veraltete allgemeine AFS-Behandlung für Aktien fort.'],
 ['a liability for all unrealized gains.','Ein Wertgewinn erzeugt nicht automatisch eine Verpflichtung gegenüber Dritten.']
 ],0,['US-Kategorien für Schuldpapiere dürfen nicht unverändert auf Aktien übertragen werden. Für Eigenkapitalanlagen ohne leicht bestimmbaren Fair Value existiert eine gesonderte Bewertungsalternative.'],'equity-instruments'),
 q('20','practice','d','A debt liability has an opening carrying amount of €190 million, an effective annual rate of 7%, and a year-end cash payment of €10 million. With no other changes, its closing carrying amount is:',[
 ['€180 million','Der Effektivzinsaufwand wurde ausgelassen.'],
 ['€193.30 million','Zinsaufwand 13,30 übersteigt die Zahlung um 3,30.'],
 ['€203.30 million','Das ist der Betrag vor Zahlung.']
 ],1,[F('L_1=190(1+0{,}07)-10=193{,}30','Der Buchwert wächst um Zinsaufwand und sinkt um die tatsächliche Zahlung.',[['L_1','Schuldbuchwert am Jahresende in Mio. Euro.']]),'Die Differenz zwischen Zinsaufwand und Barzahlung ist hier keine zusätzliche geleistete Zahlung.'],'liabilities'),
 q('21','practice','d','A recognized decommissioning obligation requires a fixed €121 million payment in two years. At a suitable 10% annual discount rate and with no changes in estimates, its present value is:',[
 ['€100 million','Zwei Jahre werden mit Zinseszins abgezinst.'],
 ['€110 million','Das ist der Barwert ein Jahr vor Zahlung.'],
 ['€121 million','Das ist der undiskontierte Zukunftsbetrag.']
 ],0,[F('PV=\\frac{121}{1{,}10^2}=100','Die heutige Verpflichtung wird über zwei Perioden zur Zahlung aufgezinst.',[['PV','Heutiger Verpflichtungsbetrag in Mio. Euro.']]),'Ohne Zahlung wächst der Betrag nach einem Jahr auf 110 und vor Erfüllung auf 121.'],'maturity-provisions'),
 q('22','practice','d','At an IFRS reporting date, management intends to refinance a loan due in six months but has no right at that date to defer settlement for at least twelve months. Intention alone:',[
 ['is sufficient for non-current classification.','Absicht schafft kein bestehendes vertragliches Aufschubrecht.'],
 ['does not justify non-current classification.','Das am Berichtsdatum bestehende Recht ist entscheidend.'],
 ['removes the liability from the balance sheet.','Ein geplanter neuer Kredit tilgt die bestehende Schuld noch nicht.']
 ],1,['Die Aufgabe schließt das erforderliche Recht ausdrücklich aus. Eine erst später vereinbarte Finanzierung und bereits am Stichtag bestehende vertragliche Rechte sind unterschiedliche Sachverhalte.'],'maturity-provisions'),
 q('23','practice','d','A firm plans to operate at a loss next year but has no present obligation arising from a past event for those operating losses. Under IAS 37, a general provision for those losses is:',[
 ['required because every forecast loss is a liability.','Ein erwartetes schwaches Geschäft ist für sich keine gegenwärtige Verpflichtung.'],
 ['not recognized merely because the losses are forecast.','Der Ansatz einer Rückstellung benötigt die entsprechenden Verpflichtungsvoraussetzungen.'],
 ['recognized as goodwill.','Eine künftige Verlustprognose ist kein Erwerbsrestbetrag.']
 ],1,['Eine konkrete belastende Verpflichtung, etwa aus einem onerous contract, müsste separat beurteilt werden. Die bloße Erwartung künftiger Betriebsverluste erlaubt keine allgemeine Rückstellung.'],'maturity-provisions'),
 q('24','practice','e','A firm reports cash of €30 million, trade receivables of €90 million, inventory of €180 million, and current liabilities of €200 million. Assuming no other quick assets, the quick ratio is:',[
 ['0.60','Cash und Forderungen summieren sich zu 120; Vorräte werden ausgeschlossen.'],
 ['0.90','Das ist Vorrat relativ zu kurzfristigen Verpflichtungen, nicht die Quick Ratio.'],
 ['1.50','Das ist die Current Ratio unter den angegebenen Posten.']
 ],0,[F('QR=\\frac{30+90}{200}=0{,}60','Schnell liquidierbare Posten werden zu kurzfristigen Verpflichtungen in Beziehung gesetzt.',[['QR','Quick Ratio nach der hier angegebenen Definition.']]),'Auch Forderungen können verzögert oder nur teilweise eingehen. Eine Kennzahl ist keine Garantie für verfügbare Mittel am Zahlungstermin.'],'common-size'),
 q('25','practice','e','Total assets are €800 million, total liabilities are €500 million, and interest-bearing debt included in liabilities is €320 million. The interest-bearing debt-to-assets ratio is:',[
 ['40.00%','Der verlangte Zähler ist 320, nicht sämtliche Verpflichtungen.'],
 ['62.50%','Dies ist Total Liabilities/Assets.'],
 ['106.67%','Dies ist Debt/Equity bei Eigenkapital 300.']
 ],0,[F('\\frac{D}{A}=\\frac{320}{800}=40\\%','Die genaue Schulddefinition bestimmt die Aussage.',[['D','Zinstragende Finanzschulden in Mio. Euro.'],['A','Gesamte Vermögenswerte in Mio. Euro.']])],'common-size'),
 q('26','practice','b e','A company has assets of €600 million, equity of €240 million, and interest-bearing debt of €180 million. A €40 million goodwill impairment has no tax effect or cash impact. Debt-to-equity after impairment is closest to:',[
 ['75.00%','Das ist die Kennzahl vor der Eigenkapitalminderung.'],
 ['90.00%','Schulden bleiben 180, Eigenkapital sinkt auf 200.'],
 ['100.00%','Der verbleibende Eigenkapitalbetrag beträgt nicht 180.']
 ],1,[F('\\frac{D}{E_1}=\\frac{180}{240-40}=90\\%','Der Quotient steigt durch den kleineren Nenner, nicht durch neue Kreditaufnahme.',[['D','Unveränderte Finanzschulden in Mio. Euro.'],['E_1','Eigenkapital nach Wertminderung in Mio. Euro.']]),'Cash bleibt unverändert. Die Wertminderung kann dennoch eine ungünstigere wirtschaftliche Einschätzung ausdrücken.'],'ratio-effects'),
 q('a1','mock-a','c','An IFRS debt investment classified at FVOCI is sold for its carrying fair value. Immediately before sale, its accumulated OCI gain is €7 million; no current interest, credit, currency, or tax effects remain. The disposal most likely causes:',[
 ['€7 million to be reclassified from OCI to profit, without creating €7 million of additional total comprehensive income.','Die Umgliederung verschiebt einen schon erfassten Betrag innerhalb der Ergebnisdarstellung.'],
 ['€7 million of entirely new comprehensive income in addition to the existing OCI gain.','Das würde denselben Wertzuwachs doppelt zählen.'],
 ['the same no-recycling treatment as the FVOCI election for ordinary equity investments.','Schuld- und Eigenkapital-FVOCI haben unterschiedliche Recyclingregeln.']
 ],0,['Der Verkaufspreis entspricht bereits dem Buchwert. Das relevante kumulierte Schuldinstrument-OCI wird ins Ergebnis umgegliedert; der Wertzuwachs entsteht nicht erst ein zweites Mal beim Verkauf.'],'equity-instruments'),
 q('a2','mock-a','a e','Two otherwise identical firms incur qualifying development expenditure. Firm A capitalizes part of it; Firm B expenses all of it. Before the capitalized asset is available for use, and ignoring taxes and impairment, which comparison is correct?',[
 ['Firm A has higher profit and equity, while total cash paid is unchanged.','Aktivierung verschiebt Aufwand und lässt einen Vermögenswert stehen; die Zahlung bleibt dieselbe.'],
 ['Firm A must have higher total cash because its expense is lower.','Gewinnabgrenzung ist nicht gleich Zahlung.'],
 ['Firm A has lower assets and the same equity.','Der nicht sofort erfasste Aufwand erhöht im Fall sowohl Vermögen als auch Eigenkapital gegenüber B.']
 ],0,['Die Gewinnverbesserung der ersten Periode ist durch spätere Amortisation und mögliche Wertminderung zu beurteilen. Eine größere Bilanzsumme beweist für sich keine höhere wirtschaftliche Rentabilität.'],'amortisation'),
 q('b1','mock-b','b e','An acquisition report uses full goodwill with NCI of €52 million. A comparable proportional-NCI presentation would show NCI of €44 million. All other acquisition measurements are unchanged. Converting from full to proportional goodwill would:',[
 ['reduce goodwill and total equity by €8 million each.','Der NCI-Unterschied wirkt gleich hoch auf den Erwerbsrestbetrag und das nicht beherrschende Eigenkapital.'],
 ['reduce acquisition cash paid by €8 million.','Die Bewertungsmethode ändert keine tatsächlich gezahlte Gegenleistung.'],
 ['increase the parent’s ownership percentage.','Die Beteiligungsquote bleibt vertraglich gleich.']
 ],0,['Die Bilanz bleibt ausgeglichen: Goodwill als Aktivum sinkt um 8, NCI im Eigenkapital ebenfalls. Das ist ein Darstellungsunterschied, kein neuer Zahlungsmittelzufluss oder veränderter Anteil.'],'partial-goodwill'),
 q('b2','mock-b','d','A borrower’s long-term IFRS loan requires a covenant test six months after the reporting date. The borrower has a right at the reporting date to defer settlement for more than twelve months; the covenant is required to be met only at that future date. Which is most accurate?',[
 ['The future test automatically makes the debt current at the reporting date.','Später einzuhaltende Bedingungen sind von Bedingungen am oder vor dem Stichtag zu unterscheiden.'],
 ['The future covenant does not by itself remove that reporting-date right, but relevant risk disclosures may be required.','Die Klassifikation und die Information über spätere Erfüllungsrisiken haben unterschiedliche Aufgaben.'],
 ['No covenant disclosures can be relevant because classification is non-current.','Nicht kurzfristiger Ausweis beseitigt die Informationsbedürfnisse über Bedingungen nicht.']
 ],1,['Der Sachverhalt gibt ein bestehendes Aufschubrecht vor und legt den Erfüllungszeitpunkt ausdrücklich in die Zukunft. Andere Vertragsbedingungen oder ein bereits am Stichtag bestehender Verstoß könnten die Beurteilung ändern.'],'maturity-provisions')
];
