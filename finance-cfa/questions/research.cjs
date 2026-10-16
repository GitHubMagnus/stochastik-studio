const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,solution,section)=>Q('rr-'+id,'research','equity',pool,los,stem,options,0,solution,{section});
module.exports=[
 q('01','practice','a','The most useful purpose of a detailed equity research report is to:',[
 ['make the evidence, assumptions, valuation and conclusion traceable and open to challenge.','Eine nachvollziehbare Begründung kann überprüft und aktualisiert werden.'],
 ['standardize reports around a single target so recipients can compare conclusions without reviewing assumptions.','Ein gleicher Zahlenaufbau macht unterschiedliche Annahmen nicht vergleichbar; diese müssen prüfbar bleiben.'],
 ['emphasize the recommendation while moving material model limitations into undocumented analyst judgment.','Wesentliche Grenzen gehören zur nachvollziehbaren Begründung und dürfen nicht in undokumentierter Einschätzung verschwinden.']
 ],['Der Bericht verbindet Unternehmensverständnis mit Prognose, geeignetem Anspruch, Bewertung und Risiken.','Wesentliche Annahmen bleiben sichtbar, damit ein Leser ihre Tragfähigkeit selbst beurteilen kann.'],'scope'),
 q('02','practice','a','A report gives a recommendation and a price target but no price date, currency or target horizon. The primary weakness is that:',[
 ['the reader cannot reliably identify the comparison or timing underlying the conclusion.','Gleiche Zahlen können zu anderen Zeitpunkten und Ansprüchen gehören.'],
 ['every research report must use an identical number of pages.','Eine universelle Seitenzahl beweist keine vollständige Analyse.'],
 ['all price targets must equal the current book value.','Kursziel, Buchwert und heutiger innerer Wert beantworten andere Fragen.']
 ],['Identifikation, Stichtag, Währung und Horizont legen die Frage fest.','Der Leser benötigt danach die relevanten Methoden, Annahmen und Grenzen, statt nur ein isoliertes Label zu erhalten.'],'blueprint'),
 q('03','practice','a','Which statement should be identified as a forecast rather than a historical fact?',[
 ['The company is expected to achieve an EBIT margin of 17% next year.','Die nächste Marge hängt von noch unsicherer Zukunft ab.'],
 ['The specified published statement reports revenue of 480 for the last period.','Dies ist bei benannter Quelle eine Aussage über den bekannten Bericht.'],
 ['The specified current quote is 50 at the recorded timestamp.','Ein entsprechend belegter Kurs ist eine Stichtagsbeobachtung.']
 ],['Auch eine gut begründete Prognose bleibt eine bedingte Erwartung.','Faktenquelle, Zeitpunkt und eigene Interpretation werden kenntlich gemacht; Dezimalstellen ändern die Art der Aussage nicht.'],'facts'),
 q('04','practice','a','Three industry summaries reproduce the same original supplier survey. Their agreement:',[
 ['does not constitute three independent confirmations of market size.','Die Ausgangsunsicherheit kann in allen drei Quellen dieselbe sein.'],
 ['should receive the weight of three independent observations because three publishers reviewed the figures.','Redaktionelle Prüfung kann helfen, schafft aber keine drei unabhängigen Stichproben.'],
 ['provides a stronger basis for averaging the three figures than for inspecting the underlying survey.','Der gemeinsame Ursprung und seine Definitionen sind zu prüfen; Mittelung beseitigt gemeinsame Fehler nicht.']
 ],['Quellenzahl ist von unabhängiger Evidenz zu unterscheiden.','Die Analystin prüft Ursprung, Stichprobe, Definition, Interessen und Aktualität, bevor sie die Marktgröße verwendet.'],'sources'),
 q('05','practice','a c','A company’s premium service requires additional staffing and spare parts. An optimistic report forecasts higher prices while leaving all costs and operating capital unchanged. The report should:',[
 ['explain how the promised service can be delivered under the unchanged resource assumptions.','Leistungsversprechen, Aufwand und Kapital müssen zueinander passen.'],
 ['apply a higher terminal multiple for service quality before assessing whether the resource forecast is consistent.','Eine Bewertungsprämie rechtfertigt keine ausgelassene Prüfung von Kosten und Kapitalbedarf.'],
 ['accept the unchanged resource forecast if the historical operating margin was already above the peer average.','Eine vergangene hohe Marge beweist nicht, dass das neue Leistungsversprechen ohne zusätzliche Ressourcen erfüllbar ist.']
 ],['Ein Preismodell erhält seine wirtschaftliche Bedeutung aus Kundennutzen, Konkurrenz und Umsetzung.','Die gesamte Zahlung nach benötigter Investition entscheidet, nicht allein eine höhere Umsatz- oder Margenzeile.'],'business'),
 q('06','practice','a c','An investment thesis states only that a stock is cheap because the model value exceeds its price. It most clearly lacks:',[
 ['an explanation of the economic mechanism, differentiated assumptions and evidence that support the model.','Ein Rechenergebnis ist noch nicht die Ursache seines behaupteten Vorteils.'],
 ['a second valuation method whose output can be averaged with the first estimate.','Eine zweite Methode kann beim Vergleich helfen, ersetzt aber nicht die wirtschaftliche Begründung der gemeinsamen Inputs.'],
 ['a recent positive price trend that independently validates the projected operating improvement.','Eine Preisbewegung ist kein unabhängiger Beleg für den behaupteten operativen Mechanismus.']
 ],['Eine These benennt die abweichende Sicht und verbindet sie mit künftigen Zahlungen, Zeit und Gegenhypothesen.','Der Wertabstand wird erst durch die begründeten Inputs kritisch prüfbar.'],'thesis'),
 q('07','practice','a c','A report describes an environmental exposure as financially material. The most useful next step is to:',[
 ['identify the channel through revenue, costs, investment, financing or risk and avoid counting the same effect twice.','Ein konkreter Kanal verbindet das Thema mit dem Wert.'],
 ['apply a separate conservative valuation discount under each related heading before mapping the economic effects.','Überlappende Kategorien können denselben Nachteil mehrfach abziehen; die wirtschaftlichen Kanäle müssen zuerst klar sein.'],
 ['leave operating forecasts unchanged and represent the entire exposure through an unexplained discount-rate adjustment.','Ein Risiko kann auch konkrete Zahlungen und Investitionen verändern; ein unbegründeter Sammelzuschlag ersetzt die Analyse nicht.']
 ],['Eine qualitative Beobachtung wird durch einen wirtschaftlichen Mechanismus und passende Annahmen nutzbar.','Unsicherheit, Zeitpunkt und Gegenwirkung bleiben Teil der Beurteilung.'],'business'),
 q('08','practice','a c','A report discounts FCFF and calls the resulting amount the value of common equity without considering debt or non-operating assets. The most appropriate criticism is that:',[
 ['the operating valuation still needs a consistent bridge to the specific ownership claim.','Zahlungsanspruch und gesuchter Eigentümerwert sind noch nicht vollständig abgestimmt.'],
 ['net income should replace FCFF while the operating discount rate remains unchanged.','Gewinn ist keine gleichwertige Zahlung; der Wechsel löst weder die Anspruchs- noch die Diskontsatzfrage.'],
 ['book equity should be deducted from the operating value to obtain the ownership value.','Eigenkapitalbuchwert ist kein vorrangiger Schuldanspruch, der pauschal vom operativen Wert abzuziehen wäre.']
 ],['Modellwahl, Cashflow, Diskontsatz und Anspruch werden zusammen geprüft.','Ein richtiger operativer Barwert kann eine falsche Antwort auf die Frage nach Stammaktienwert sein.'],'method'),
 q('09','practice','a c','Operating value is 750, separate non-operating cash is 30, debt claims at market value are 100 and there are 10 million common shares. All value amounts are millions. Common-equity value per share is:',[
 ['68.00','Operativer Wert plus separate Kasse minus Schulden, danach je aktuellem Anspruch.'],
 ['75.00','Dies verteilt nur den operativen Wert auf die Aktien.'],
 ['88.00','Dies addiert Schuldansprüche statt sie abzuziehen.']
 ],[F('v=(750+30-100)/10=68','Es gibt im Fall keine weiteren Vermögens- oder Anspruchsposten.',[['v','Heutiger Wert je Stammaktie.']]),'Kasse und Schulden müssen zum selben Umfang und Zeitpunkt passen und dürfen nicht schon im Ausgangswert doppelt enthalten sein.'],'case'),
 q('10','practice','a c','A model value is 80 and the current price is 60. The upside relative to price and the value-based margin of safety are, respectively:',[
 ['33.33% and 25.00%.','Dieselben zwanzig werden auf verschiedene Nenner bezogen.'],
 ['25.00% and 33.33%.','Die beiden Bezugsbasen sind vertauscht.'],
 ['33.33% and 33.33%.','Die wertbezogene Sicherheitsmarge verwendet achtzig als Nenner.']
 ],[F('U=(80-60)/60\\approx33{,}3333\\%,\\quad MOS_v=(80-60)/80=25\\%','Der Nenner beschreibt die konkrete Frage.',[['U,MOS_v','Wertabstand relativ zum Preis und wertbezogene Sicherheitsmarge.']]),'Diese Quoten sind weder sichere Renditen noch Eintrittswahrscheinlichkeiten.'],'recommendation'),
 q('11','practice','a c','In a separate one-period equity model, current intrinsic value is 60, required annual equity return is 10% and expected year-end dividend is 3. The consistent conditional year-end remaining value is:',[
 ['63.00','Zwischenzeitliche Ausschüttung wird von der gesamten Wertfortentwicklung abgezogen.'],
 ['66.00','Dies lässt die Dividende im verbleibenden Wert stehen.'],
 ['69.00','Dies addiert die Ausschüttung noch einmal.']
 ],[F('V_1=60\\cdot1{,}10-3=63','Dividende und Endwert ergeben gemeinsam die bedingte Gesamtzahlung sechsundsechzig.',[['V_1','Konsistenter Wert des verbleibenden Eigentümeranspruchs am Jahresende.']]),'Die Rechnung ist kein garantierter Börsenkurs.'],'horizon'),
 q('12','practice','a c','A report assumes a year-end price of 63 and a year-end dividend of 3. If an investor pays 50 today, the total return in this assumed outcome is:',[
 ['32.00%','Endkurs und Dividende werden gemeinsam zum Einstiegspreis verglichen.'],
 ['26.00%','Dies erfasst nur den Kursgewinn.'],
 ['10.00%','Dies wäre die Rendite bei Einstieg sechzig unter denselben Endzahlungen.']
 ],[F('R=(63+3-50)/50=32\\%','Die Rendite hängt vom gezahlten Preis ab.',[['R','Gesamtrendite genau des angenommenen Endzahlungsszenarios.']]),'Ein Zielwert allein liefert keine kalibrierte Wahrscheinlichkeit dieses Ergebnisses.'],'horizon'),
 q('13','practice','a b','Two providers both label a stock Buy. Before treating the conclusions as equivalent, the reader should:',[
 ['compare rating definitions, horizons, benchmarks, assumptions and risk limits.','Die Bezeichnung besitzt keine universell identische Bedeutung.'],
 ['assume every Buy means the same guaranteed absolute return.','Weder gleiche Skala noch Sicherheit sind damit gegeben.'],
 ['ignore the valuation method because the labels match.','Methoden und Datenbasis können wesentlich verschieden sein.']
 ],['Ein Urteil kann absolute oder relative Leistung meinen.','Stichtag, Zeithorizont, Risiko und Empfängerkontext müssen vor einem Vergleich erkennbar sein.'],'recommendation'),
 q('14','practice','b','Sell-side equity research typically aims to:',[
 ['provide analysis and defined security views to external clients or recipients.','Der typische externe Empfängerkontext unterscheidet sich von einer konkreten internen Allokationsentscheidung.'],
 ['allocate the research provider’s own fund capital among its existing holdings.','Dies beschreibt typischerweise eine interne Buy-Side-Allokationsentscheidung.'],
 ['supply factual issuer data while leaving the formation of any valuation view entirely to recipients.','Datenlieferung allein beschreibt die typische analytische Wertpapiereinschätzung eines Sell-Side-Berichts nicht vollständig.']
 ],['Sell Side beschreibt eine typische Researchfunktion und keinen Beweis von Qualität oder Mangel.','Vertriebs-, Zugangs- und Vergütungsmodelle variieren; relevante Beziehungen und Grenzen bleiben erkennbar.'],'sell-side'),
 q('15','practice','b','Which issue is most directly an additional buy-side decision consideration?',[
 ['how a proposed position fits existing portfolio exposure, mandate and available risk budget.','Einzelwertanalyse wird mit der konkreten Kapitalverwendung verbunden.'],
 ['whether historical accounting data can ever be relevant.','Vergangene Daten sind für beide Rollen wichtige Ausgangsinformation.'],
 ['whether analysts should distinguish facts from opinions.','Diese Trennung ist nicht auf Buy Side beschränkt.']
 ],['Ein günstiges Wertpapier kann wegen Konzentration, Verpflichtungen oder attraktiverer Alternativen keinen weiteren Zukauf rechtfertigen.','Die interne Entscheidung dokumentiert diese zusätzlichen Bedingungen.'],'buy-side'),
 q('16','practice','a b','A sell-side report is positive on a stock, but a buy-side team declines to add to an already concentrated holding. These conclusions:',[
 ['can be consistent because a security view and a portfolio allocation decision answer different questions.','Mandat und Bestand verändern die mögliche Umsetzung.'],
 ['prove that one team has made an arithmetic valuation error.','Gleiche Wertschätzung kann verschiedene Handlungen zulassen.'],
 ['prove that the internal team believes the company has no value.','Nichtzukauf ist nicht gleich Wert null.']
 ],['Ein externer Researchleser kann andere bestehende Positionen besitzen.','Der Fonds berücksichtigt zusätzlich die für ihn geltenden Beschränkungen, Kosten und Alternativen.'],'mandate'),
 q('17','practice','b','A hypothetical fund has assets of 200 million, an existing company position of 5.6 million and a self-imposed 3% position limit. At price 40, ignoring costs and asset changes, remaining capacity in shares is:',[
 ['10,000.00','Verbleibender Betrag vierhunderttausend wird durch vierzig geteilt.'],
 ['150,000.00','Dies ist die ganze Positionsobergrenze ohne bisherigen Bestand.'],
 ['140,000.00','Dies ist der bisherige Bestand, nicht der zusätzliche Spielraum.']
 ],[F('N_{room}=(0{,}03\\cdot200-5{,}6)10^6/40=10000','Die interne Grenze bezieht sich auf die gesamte Position.',[['N_{room}','Zusätzliche Aktienobergrenze dieses hypothetischen isolierten Vergleichs.']]),'Der berechnete Spielraum ist kein automatischer Auftrag und keine universelle gesetzliche Grenze.'],'mandate'),
 q('18','practice','a b','A potential objectivity concern in buy-side research is:',[
 ['pressure to defend a large existing position despite contrary new evidence.','Bestätigung früherer Entscheidungen kann die aktuelle Analyse verzerren.'],
 ['a documented review that tests both the original thesis and its preidentified falsifiers.','Eine solche Gegenprüfung unterstützt Objektivität; sie ist selbst kein Bestätigungsanreiz.'],
 ['the use of the same historical statements available to external analysts.','Gemeinsame Daten sind allein kein Interessenkonflikt; entscheidend sind Anreiz, Auswahl und Interpretation.']
 ],['Beide Rollen benötigen tragfähige Untersuchung und objektive Interpretation.','Quelle, Anreiz, Kontrollen und tatsächliche Belege werden geprüft, statt einer Rolle pauschal Unabhängigkeit zu unterstellen.'],'conflicts'),
 q('19','practice','a b','A report discloses a commercial relationship with its subject company. This disclosure:',[
 ['does not permit knowingly biased analysis or replace the need for an appropriate independent basis.','Offenlegung und fachliche Sorgfalt sind keine austauschbaren Pflichten.'],
 ['allows the analyst to adopt the issuer’s preferred unsupported forecast if the relationship is prominently stated.','Auch wirksame Offenlegung ersetzt keine angemessene unabhängige Analysegrundlage.'],
 ['requires discarding otherwise well-supported company data rather than assessing the relationship’s potential influence.','Ein Konflikt erfordert angemessene Behandlung; daraus folgt kein pauschales Verbot tragfähiger Daten.']
 ],['Relevante Konflikte werden angemessen vermieden beziehungsweise wirksam offengelegt und behandelt.','Der Leser soll Einflussmöglichkeiten erkennen; eine offengelegte Beziehung ist keine Erlaubnis für bewusst irreführende Schlussfolgerungen.'],'conflicts'),
 q('20','practice','a b','A short earnings update can be useful when it:',[
 ['clearly states its scope, important changed assumptions and implications and references the supporting work.','Begrenzter Umfang kann mit prüfbarer Tiefe vereinbar sein.'],
 ['retains the prior recommendation and therefore omits discussion of a newly material model limitation.','Eine unveränderte Einstufung macht eine neue wesentliche Grenze nicht unwichtig.'],
 ['reports only the revised value because the numerical change is a sufficient explanation of the altered assumptions.','Der Wertunterschied ersetzt keine Erklärung seiner wirtschaftlichen Ursachen.']
 ],['Format folgt Zweck und Empfänger.','Ein Update erklärt relevante Änderungen und verbleibende Grenzen; ein bloßer Umfangvergleich beweist keine Qualität.'],'audience'),
 q('21','practice','b','An internal research memo may recommend no trade even when its intrinsic-value estimate is above price because:',[
 ['portfolio constraints or a more attractive use of capital may outweigh the standalone opportunity.','Wert und relative Kapitalverwendung sind getrennte Fragen.'],
 ['the estimated value should be reduced solely to match the portfolio manager’s desired position size.','Die gewünschte Handlung ist kein Grund, die unabhängige Wertschätzung passend umzuschreiben.'],
 ['recent outperformance removes the need to compare the remaining opportunity with alternative investments.','Vergangener Kurserfolg beseitigt weder heutige Opportunitätskosten noch Mandatsgrenzen.']
 ],['Opportunitätskosten, Zeithorizont und Risikobudget werden mitbetrachtet.','Eine begründete Entscheidung kann daher kaufen, halten, reduzieren oder bewusst abwarten sein.'],'buy-side'),
 q('22','practice','a b','Which statement best describes the relationship between buy-side and sell-side report quality?',[
 ['both require suitable evidence and reasoning; organizational role alone does not establish accuracy or objectivity.','Qualität wird anhand von Inhalt und Verfahren beurteilt.'],
 ['direct responsibility for invested capital makes internal research sufficiently objective without examining its incentives.','Eigene Kapitalverantwortung kann helfen, beseitigt aber Bestätigungs- und Vergütungsanreize nicht.'],
 ['agreement on a valuation should lead to the same portfolio action before mandate and existing holdings are considered.','Einzelwerturteil und konkrete Allokation beantworten verschiedene Fragen; der Handlungskontext ist vor der Umsetzung relevant.']
 ],['Eine Rollenbeschreibung hilft, Zweck und mögliche Konflikte zu verstehen.','Sie ersetzt keine Prüfung von Quellen, Modell, Risiken und nachvollziehbarer Schlussfolgerung.'],'conflicts'),
 q('23','practice','c','A stable report model assumes next-year NOPAT of 60, growth of 3% and a marginal return on new investment of 12%. Required net reinvestment is:',[
 ['15.00','Zusätzlicher Ertrag 1,8 benötigt bei zwölf Prozent neuen Kapitaleinsatz fünfzehn.'],
 ['1.80','Dies ist der zusätzliche Folgeertrag, nicht der Kapitalbetrag.'],
 ['45.00','Dies ist die verbleibende freie Zahlung.']
 ],[F('I_{net}=60\\cdot0{,}03/0{,}12=15','Wachstum wird nicht ohne zusätzliche Kapitalbindung modelliert.',[['I_{net}','Neue operative Nettoinvestition.']]),'Dies setzt die ausdrücklich stabile Ertrags- und Zeitkonstruktion voraus, nicht automatisch jede historische Buchrendite.'],'reinvestment'),
 q('24','practice','c','With NOPAT of 60 and growth of 3%, reducing the marginal new-investment return from 12% to 10% changes first-period FCFF to:',[
 ['42.00','Der höhere Investitionsbedarf achtzehn wird vom gleichen Ertrag abgezogen.'],
 ['45.00','Dies behält die alte bessere Kapitalrendite bei.'],
 ['60.00','Dies ignoriert Wachstumsinvestition.']
 ],[F('FCFF=60(1-0{,}03/0{,}10)=42','Gleicher Gewinn kann wegen anderer Kapitalannahme weniger freie Zahlung liefern.',[['FCFF','Erste freie operative Zahlung.']]),'Die weitere Bewertung braucht danach weiterhin passende Kosten und Anspruchsbrücke.'],'reinvestment'),
 q('25','practice','c','Using the Mareon stable model, revenue is 500, EBIT margin 14%, tax 25%, growth 3%, new-investment return 12% and operating discount rate 9%. Separate cash is 30, debt 100 and shares 10, with totals in millions. Value per share is:',[
 ['58.6250','Nachsteuerertrag, Nettoinvestition und Anspruchsbrücke werden vollständig verbunden.'],
 ['65.6250','Dies verteilt den operativen Wert ohne Nettoanspruchskorrektur.'],
 ['68.0000','Dies verwendet die alte Marge sechzehn Prozent.']
 ],[F('v=\\{500\\cdot0{,}14\\cdot0{,}75(1-0{,}03/0{,}12)/0{,}06+30-100\\}/10=58{,}625','Die veränderte Marge wirkt über Ertrag und konsistente Reinvestition.',[['v','Bedingter heutiger Wert je Stammaktie.']])],'single'),
 q('26','practice','c','A stable FCFF model uses next-period revenue 500, EBIT margin 16%, tax 25%, growth 3%, new-investment return 12% and operating discount rate 9%. Separate cash is 30, debt 100 and shares 10, with totals in millions. If only next-period revenue changes to 480, the revised share value is:',[
 ['65.00','Die operative Zahlungsbasis sinkt auf 43,2 bei gleichen Ansprüchen.'],
 ['68.00','Dies ignoriert die Umsatzänderung.'],
 ['43.40','Dies wäre die gemeinsame zusätzliche Revision mehrerer Annahmen.']
 ],[F('v=\\{480\\cdot0{,}16\\cdot0{,}75\\cdot0{,}75/0{,}06-70\\}/10=65','Die beiden Faktoren 0,75 betreffen getrennt Steuer und nach Reinvestition verbleibenden Ertrag.',[['v','Neuer Aktienwert unter der isolierten Umsatzänderung.']])],'single'),
 q('27','practice','c','Mareon’s first FCFF remains 45 and stable growth remains 3%. The operating discount rate rises to 10%, while cash, debt and shares remain 30, 100 and 10. Value per share is closest to:',[
 ['57.2857','Dieselben Zahlungen werden mit höherer Renditeanforderung diskontiert.'],
 ['68.0000','Dies behält den alten Neunprozentdiskontsatz bei.'],
 ['64.2857','Dies ist operativer Wert je Aktie ohne Anspruchsbrücke.']
 ],[F('v=(45/0{,}07+30-100)/10\\approx57{,}285714','Ein gleicher Gewinn- und Zahlungsansatz beweist keinen gleichen Risikoinput.',[['v','Bedingter Eigentümerwert je Aktie.']])],'sensitivity'),
 q('28','practice','a c','Two analysts use the same DCF approach. In a comparison bridge, one changes revenue, margin, investment return and discount rate sequentially. The individual step contributions:',[
 ['depend on the chosen order even though the complete start-to-end difference does not.','Zwischenstände sind neue Kombinationen und enthalten nichtlineare Wirkungen.'],
 ['must equal a sum of separate one-input sensitivities from the original base.','Jede isolierte Sensitivität besitzt dieselbe alte Bezugsbasis; das ist eine andere Rechnung.'],
 ['prove a unique historical causal attribution of the price move.','Die Brücke ist eine analytische Zerlegung von Modellwerten.']
 ],['Die vollständige Rechnung stimmt Start und Endzustand ab.','Änderungsreihenfolge und festgehaltene Inputs werden genannt, statt Teilbeiträge als einzig mögliche Ursachen auszugeben.'],'joint'),
 q('29','practice','c','Current price is 50 with 10 million shares, separate cash 30 and debt 100. Holding the Mareon base inputs fixed, the market-price-consistent operating value in millions is:',[
 ['570.00','Der Eigentümerpreis wird zur operativen Anspruchsgrenze zurückgeführt.'],
 ['500.00','Dies ist nur der betrachtete Eigenkapitalmarktwert.'],
 ['430.00','Dies verwendet die Anspruchsbrücke mit umgekehrten Vorzeichen.']
 ],[F('V_{op,price}=50\\cdot10+100-30=570','Die Rückrechnung braucht dieselben Vermögens- und Anspruchsgrenzen wie die Vorwärtsbewertung.',[['V_{op,price}','Aus dem Preis abgeleiteter operativer Vergleichswert in Millionen.']])],'reverse'),
 q('30','practice','a c','A reverse DCF implies an EBIT margin of 12.16% after every other input is fixed. The most accurate statement is that:',[
 ['12.16% is a conditional margin consistent with the price under those fixed assumptions, not a uniquely identified market belief.','Andere Inputkombinationen können denselben Preis erklären.'],
 ['every investor must expect exactly that margin.','Ein Preis identifiziert nicht gleichzeitig alle Erwartungen.'],
 ['the calculation proves the stock price is incorrect.','Auch die festgehaltenen Annahmen können ungeeignet sein.']
 ],['Reverse DCF macht eine überprüfbare Gegenfrage sichtbar.','Wenn stattdessen der Diskontsatz oder Kapitalbedarf verändert wird, können andere passende Lösungen entstehen.'],'reverse'),
 q('31','practice','c','Existing common-equity value is 680 million with 10 million shares. Two million identical new shares are immediately issued for 50 each and the 100 million proceeds remain separate cash. There are no costs or other value changes. Post-issue value per share is:',[
 ['65.00','Mittelzufluss und zusätzliche Eigentümeransprüche werden gemeinsam erfasst.'],
 ['56.67','Dies berücksichtigt neue Aktien, lässt aber den Zufluss aus.'],
 ['78.00','Dies addiert Cash, lässt aber die neuen Ansprüche aus.']
 ],[F('v_{after}=(680+100)/(10+2)=65','Der Preis der neuen Anteile liegt unter dem vorher geschätzten Wert achtundsechzig.',[['v_{after}','Bedingter Wert je gleicher Aktie direkt nach der modellierten Ausgabe.']]),'Der niedrige Ausgabepreis verteilt im idealisierten Vergleich Wert von bisherigen zu neuen Eigentümern.'],'financing'),
 q('32','practice','a c','A report adds the cash from an expected stock issue but leaves the total ownership share count unchanged, with no special share rights. The most appropriate criticism is that:',[
 ['financing proceeds and new ownership claims are not treated consistently.','Die zusätzliche Kasse gehört auch den neuen gleichberechtigten Anteilen.'],
 ['cash proceeds from stock issues can never be relevant to value.','Zufluss ist relevant, wenn der zugehörige Anspruch mitberücksichtigt wird.'],
 ['every stock issue must create value solely because cash increases.','Ein Kapitalzufluss ist nicht automatisch zusätzlicher wirtschaftlicher Projektwert.']
 ],['Bewertungsstichtag, Zeitpunkt des Zuflusses, Verwendung und Anteilrechte werden abgestimmt.','Ein Bericht darf Verwässerung nicht durch alleinige Kasse- oder alleinige Aktienzahlanpassung ersetzen.'],'financing'),
 q('33','practice','c','A company borrows 100 at fair value and retains all proceeds as separate cash, with no costs, taxes, risk change or operating value change in this comparison. Immediately, the common-equity value:',[
 ['is unchanged because the added cash and added debt claim offset.','Mittelzufluss allein ist keine kostenlose Eigentümerwertschöpfung.'],
 ['rises by 100 because only the cash is relevant.','Der neue Schuldanspruch fehlt.'],
 ['falls by 100 because the proceeds must be ignored.','Das vorhandene zusätzliche Cash fehlt dann.']
 ],['Dies ist ein bewusst idealisierter Stichtagsvergleich.','Tatsächliche Risiko-, Steuer-, Investitions- oder Kosteneffekte benötigen eine erweiterte konsistente Rechnung.'],'financing'),
 q('34','practice','c','Three coherent operating scenarios have share values 51.8, 68 and 84.928571 and hypothetical weights 25%, 50% and 25%. Their weighted model value is closest to:',[
 ['68.1821','Die vorgegebenen Werte werden mit ihren eigenen Gewichten zusammengefasst.'],
 ['68.0000','Dies ist hier das Ergebnis der durchschnittlichen Inputs, nicht der gewichteten Szenariowerte.'],
 ['84.9286','Dies übernimmt nur den starken Fall.']
 ],[F('\\bar v=0{,}25\\cdot51{,}8+0{,}5\\cdot68+0{,}25\\cdot84{,}928571\\approx68{,}182143','Gemeinsamer Diskontierungsansatz, Anspruch und Zeitpunkt sind für diesen Vergleich vorgegeben.',[['\\bar v','Gewichteter bedingter Modellwert je Aktie.']]),'Die Rechnung beweist nicht, dass die subjektiven Gewichte empirisch richtige Wahrscheinlichkeiten sind.'],'scenarios'),
 q('35','practice','c','A model uses products and ratios of revenue, margins and investment-return assumptions. Valuing average assumptions will:',[
 ['not generally equal averaging the separately valued scenarios.','Nichtlineare Verknüpfung und gemeinsame Veränderungen sind entscheidend.'],
 ['always yield the identical result because weights sum to one.','Einheitliche Gewichte machen die Bewertungsfunktion nicht linear in allen Inputs.'],
 ['automatically yield a statistical confidence interval.','Dafür fehlen Verfahren und Verteilungsannahmen.']
 ],['Erwartungswerte von Modellergebnissen und ein Modellergebnis bei erwarteten Inputs sind verschiedene Rechnungen.','Die Herkunft der Szenarien und die zulässige Diskontierung werden daneben erklärt.'],'scenarios'),
 q('36','practice','a c','A report varies one model input over an analyst-chosen range and calls the resulting value range a 95% confidence interval without a statistical procedure. The label is:',[
 ['unsupported because a sensitivity range is not automatically a confidence interval.','Grenzenwahl liefert keine statistische Überdeckungswahrscheinlichkeit.'],
 ['correct whenever a DCF model is used.','Der Modellname schafft keine Intervallkalibrierung.'],
 ['correct if the range is narrow enough.','Breite oder Enge ersetzt das nötige Verfahren nicht.']
 ],['Eine Sensitivität zeigt kontrollierte Rechenwirkung bei festgehaltenen anderen Inputs.','Ein Konfidenzintervall hat eine andere, von einem passenden statistischen Verfahren und seinen Voraussetzungen abhängige Bedeutung.'],'sensitivity'),
 q('37','practice','a c','A thesis identifies contract renewal as a catalyst. This means that the event:',[
 ['may reveal relevant information, but neither occurrence nor a particular price response is guaranteed.','Erwartung, Ergebnis und Informationsgehalt werden getrennt.'],
 ['provides independent confirmation of the thesis even if the renewal outcome was already incorporated in both price and forecast.','Ein bereits erwartetes Ergebnis ist nicht automatisch eine neue unabhängige Bestätigung oder ein neuer Wertbeitrag.'],
 ['justifies raising the target by the full renewed revenue amount before assessing associated costs and capital.','Umsatz ist weder freie Zahlung noch ohne Anspruchs- und Zeitbezug zusätzlicher Aktienwert.']
 ],['Zeitpunkt, mögliche Ergebnisse und bisherige Erwartungen gehören zur These.','Ein schon erwartetes Ereignis kann wenig neue Information liefern oder wirtschaftlich anders wirken.'],'risks'),
 q('38','practice','a','A report’s forecast was reasonable given the available evidence, but a genuinely new adverse event later occurs. The analyst should:',[
 ['distinguish new information from an original calculation error and explain its effect on assumptions and conclusions.','Nachträglicher Ausgang und ursprüngliche Grundlage sind getrennt zu beurteilen.'],
 ['rewrite the old report as though the event had always been known.','Das würde den damaligen Informationsstand verschleiern.'],
 ['assume every loss proves the initial research was careless.','Prozessqualität ist nicht allein durch den späteren Ausgang bestimmt.']
 ],['Berichtsversion, Stichtag und neue Information ermöglichen nachvollziehbare Aktualisierung.','Ein tatsächlicher Fehler wird ebenso offen benannt; er darf nicht als bloße neue Information umetikettiert werden.'],'monitoring'),
 q('39','practice','a b','When important contrary evidence appears, an internal memo is strongest if it:',[
 ['tests the original mechanism and its preidentified falsifiers rather than merely defending the existing holding.','Die These soll durch relevante Information überprüfbar bleiben.'],
 ['treats a rising recent stock price as sufficient proof the thesis is right.','Preisbewegung allein bestätigt keine bestimmte wirtschaftliche Erklärung.'],
 ['treats a prior committee approval as permanent evidence against updating.','Eine frühere Entscheidung ersetzt keine aktuelle Prüfung.']
 ],['Neue Verträge, Kosten, Kundenbindung oder Finanzierung werden auf die vorherigen Annahmen zurückgeführt.','Die Portfolioentscheidung kann sich ändern, ohne dass jede ursprüngliche Aussage rückwirkend falsch gewesen sein muss.'],'monitoring'),
 q('40','practice','a c','Two reports both show an intrinsic value of 68 using different methods but share the same optimistic margin forecast. Their agreement:',[
 ['does not provide fully independent evidence that the margin forecast or value is correct.','Eine gemeinsame unsichere Annahme kann beide Ergebnisse treiben.'],
 ['eliminates model risk because two method names are present.','Verschiedene Verfahren können dieselben Daten- und Prognosefehler teilen.'],
 ['makes all scenario analysis unnecessary.','Die wichtige gemeinsame Annahme bleibt zu prüfen.']
 ],['Der Methodenvergleich kann Rechnungsgrenzen und Inkonsistenzen aufdecken.','Die wirtschaftliche Plausibilität der geteilten Annahmen benötigt weiterhin eigenständige Belege.'],'method'),
 q('a1','mock-a','a c','A report labels a future debt-funded expansion “free financing value.” Its valuation adds the new borrowed cash, deducts only the old debt and omits the expansion’s required operating investment. Which revision is most appropriate?',[
 ['reconcile new financing claims, proceeds, use of funds, future cash flows and risk before drawing the ownership-value conclusion.','Die Kapitalquelle, neue Schuld und wirtschaftliche Verwendung gehören in dieselbe Geschichte.'],
 ['retain the cash addition because every loan creates an equal equity gain.','Neue gleichwertige Ansprüche dürfen nicht ausgelassen werden.'],
 ['deduct the new loan but permanently ignore all cash or assets created with the proceeds.','Auch das wäre keine vollständige Mittel- und Anspruchsrechnung.']
 ],['Der Bericht mischt mehrere Bewertungsgrenzen. Ein bloßer Mittelzufluss ist kein zusätzlicher operativer Projektwert.','Neues Kapital kann Wert schaffen, wenn seine zusätzlichen risikogerechten Zahlungen die erforderlichen Mittel rechtfertigen. Dafür müssen Kosten, Investitionen, Zeitpunkte und Schuldansprüche konsistent modelliert werden.'],'financing'),
 q('b1','mock-b','a b','An external report expects a stock to outperform its sector over twelve months. A fund’s internal memo accepts the valuation work but recommends no addition because its mandate requires lower sector exposure and the existing holding is near its own limit. The most defensible interpretation is that:',[
 ['the security outlook and portfolio action can be consistent because benchmarks, mandate and existing exposure affect the decision.','Eine akzeptierte Einzelwertanalyse muss nicht dieselbe konkrete Allokation auslösen.'],
 ['one report must be wrong solely because its final action differs.','Verschiedene Entscheidungsfragen können andere Handlungen ergeben.'],
 ['the external report has already established suitable position size for the fund.','Ein allgemeines relatives Urteil berücksichtigt nicht automatisch dieses Mandat.']
 ],['Rollen, Zeithorizont und verwendete Einstufung werden zuerst angeglichen.','Danach erklärt der interne Bericht die eigene Kapitalverwendung und Beschränkung. Zustimmung zur Analyse und Nichtzukauf können gemeinsam begründet sein.'],'mandate')
];
