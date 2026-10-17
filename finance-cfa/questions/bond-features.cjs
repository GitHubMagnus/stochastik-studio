const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,solution,section)=>Q('bfi-'+id,'bond-features','bonds',pool,los,stem,options,0,solution,{section});
module.exports=[
 q('01','practice','a','An investor buys an ordinary fixed-coupon corporate bond rather than common stock. The investor primarily obtains:',[
 ['the specified debt claim against the identified issuer, rather than a residual ownership interest.','Vertraglicher Gläubigeranspruch und Eigentümerrest sind verschiedene Ansprüche.'],
 ['a residual claim whose coupon rises automatically with the issuer’s profits.','Ein fester Kupon wird durch höheren Gewinn nicht automatisch neu festgesetzt.'],
 ['an ownership claim on every company included in the issuer’s consolidated statements.','Konzernabschluss und unmittelbare Rechte gegen jeden Rechtsträger sind nicht dasselbe.']
 ],['Zahlungsbasis, Schuldner und Rang werden aus den Bedingungen bestimmt.','Ein vertraglicher Anspruch ist deshalb noch keine Garantie tatsächlicher Zahlung.'],'claim'),
 q('02','practice','a','The description fixed income most accurately implies that:',[
 ['the instrument has a defined contractual payment framework, which can include variable interest or contingent provisions.','Die Instrumentenklasse ist weiter als nur unveränderliche Kupons.'],
 ['every coupon and the resale price must remain fixed until maturity.','Variable Verzinsung und Marktpreisänderungen sind möglich.'],
 ['the issuer’s contractual promise removes default and refinancing risk.','Versprechen und tatsächliche Zahlungsfähigkeit sind verschiedene Ebenen.']
 ],['Auch Nullkupon-, variable und andere vertragliche Schuldinstrumente gehören zum Bereich.','Cashflowstruktur, Optionen, Kredit- und Marktpreisrisiken werden einzeln untersucht.'],'cashflow-types'),
 q('03','practice','a b','A note uses a well-known group brand but is issued by a finance subsidiary. The first step in assessing access to operating assets is to:',[
 ['identify the actual obligor, guarantees, security and relevant legal entities.','Der Markenname allein bestimmt den erreichbaren Zugriff nicht.'],
 ['assume consolidated ownership makes every operating subsidiary a direct co-obligor.','Konsolidierung erzeugt nicht automatisch eine gemeinsame Schuld aller Gesellschaften.'],
 ['use the group’s total assets without examining which entity owns them.','Struktureller Rang und konkrete Rechte können die erreichbare Zahlungsbasis verändern.']
 ],['Ein Emittentenname, ein Garantiegeber und ein Konzernabschluss beantworten verschiedene Fragen.','Der Vertrag und die Struktur legen fest, wo ein Anspruch tatsächlich besteht.'],'issuer'),
 q('04','practice','a','A fixed-coupon note has face value 1,000, annual coupon rate 4% and two equal coupon payments per year. It is purchased for 950. Each regular coupon is:',[
 ['20.00.','Jahreskupon vierzig wird auf zwei Termine verteilt.'],
 ['19.00.','Dies verwendet den Kaufpreis statt des vertraglichen Nominals.'],
 ['40.00.','Dies zahlt den ganzen Jahreskupon an jedem Halbjahrestermin.']
 ],[F('C=1000\\cdot0{,}04/2=20','Der angegebene Preis ändert die feste Bemessungsgrundlage nicht.',[['C','Halbjährlicher vertraglicher Kupon je Note.']])],'coupon'),
 q('05','practice','a','An issue contains 100,000 notes with contractual face value 1,000 each and issue price 95% of face. Total contractual principal is:',[
 ['100,000,000.00','Stückzahl mal vertragliches Nominal.'],
 ['95,000,000.00','Dies ist der Erlös vor Kosten, nicht die gesamte Forderungsbasis.'],
 ['5,000,000.00','Dies ist nur die Differenz zwischen Nominal und Ausgabepreis.']
 ],[F('N_{issue}=100000\\cdot1000=100000000','Vertraglicher Nennbetrag und aufgenommene Mittel unterscheiden sich bei Ausgabe unter pari.',[['N_{issue}','Gesamtes Vertragsnominal.']])],'nominal'),
 q('06','practice','a','An issuer sells 100,000 notes with face value 1,000 each for 95% of face. Ignoring issuance costs, cash proceeds are:',[
 ['95,000,000.00','Der gegebene Ausgabepreis wird auf das gesamte Nominal angewendet.'],
 ['100,000,000.00','Dies setzt den Erlös trotz des Abschlags gleich dem Nominal.'],
 ['105,000,000.00','Dies addiert den Abschlag statt ihn abzuziehen.']
 ],[F('P_{issue}=100000\\cdot1000\\cdot0{,}95=95000000','Der Anlegeranspruch bleibt separat nach den Vertragsbedingungen definiert.',[['P_{issue}','Gesamter Mittelzufluss bei Ausgabe vor Kosten.']])],'nominal'),
 q('07','practice','a','An issue has 100 million face value and a fixed annual coupon rate of 4%, payable in two equal regular periods. The total coupon paid on each payment date is:',[
 ['2,000,000.00','Vier Millionen Jahreskupon werden in zwei gleiche Zahlungen geteilt.'],
 ['4,000,000.00','Dies verwendet an jedem Termin den gesamten Jahresbetrag.'],
 ['1,900,000.00','Dies würde fälschlich einen 95-Prozent-Ausgabepreis als Kuponbasis einsetzen.']
 ],[F('C=100000000\\cdot0{,}04/2=2000000','Regelmäßige gleich lange Modellperioden ohne Rumpfzins sind vorgegeben.',[['C','Gesamter Kupon je Halbjahrestermin.']])],'coupon'),
 q('08','practice','a','A bond has annual coupon payments totaling 40 and a current price of 950. Its current yield is closest to:',[
 ['4.2105%.','Der Jahreskupon wird zum heutigen Preis verglichen.'],
 ['4.0000%.','Dies ist der Kuponsatz bei Nominal eintausend, nicht der laufende Preisbezug.'],
 ['5.2632%.','Dies ist der Tilgungsabstand fünfzig relativ zum Preis, kein laufender Jahreskupon.']
 ],[F('CY=40/950\\approx4{,}210526\\%','Current Yield ist keine vollständige Rendite-bis-Fälligkeit-Rechnung.',[['CY','Laufende Kuponrendite.']])],'price-return'),
 q('09','practice','a','A bullet note has face value 1,000 and a fixed annual coupon rate 4%, paid semiannually. With no default or early redemption, its final regular payment is:',[
 ['1,020.00','Endkupon zwanzig und einmalige Nominaltilgung eintausend.'],
 ['1,000.00','Dies lässt den letzten Kupon aus.'],
 ['1,040.00','Dies setzt den ganzen Jahreskupon am letzten Halbjahrestermin an.']
 ],[F('CF_{last}=1000+1000\\cdot0{,}04/2=1020','Nominal wird bei dieser Bullet-Struktur einmal am Ende zurückgezahlt.',[['CF_{last}','Gesamte vertragliche Endzahlung je Stück.']])],'schedule'),
 q('10','practice','a','A five-year bond pays equal semiannual coupons. Exactly two years after issuance, immediately after a coupon payment, the number of remaining regular payment dates is:',[
 ['6.00','Drei Restjahre mal zwei Termine.'],
 ['10.00','Dies zählt alle ursprünglichen Termine einschließlich bereits vergangener.'],
 ['3.00','Dies verwechselt Restjahre mit halbjährlichen Zahlungsterminen.']
 ],[F('n=(5-2)2=6','Der Zeitstrahl wird ab dem aktuellen Bewertungszeitpunkt aufgebaut.',[['n','Verbleibende halbjährliche Zahlungstermine.']]),'Duration ist dadurch nicht automatisch gleich drei Jahren.'],'maturity'),
 q('11','practice','a','A zero-coupon bond differs from an ordinary periodic coupon bond because it:',[
 ['has no periodic coupons, although its purchase price and final payment can still imply a return.','Laufende Zahlung und gesamter Anlageertrag sind verschieden.'],
 ['has no interest-related return because it has no periodic coupons.','Ein Kauf unter der vertraglichen Endzahlung kann einen impliziten Ertrag enthalten.'],
 ['must have a stable market price because no coupon is reinvested.','Der Preis der Endzahlung kann sich mit Zins und Kreditrisiko verändern.']
 ],['Ein definierter Endanspruch kann ohne laufende Kupons bewertet werden.','Fehlendes Kupon-Reinvestitionsrisiko beseitigt weder Preis- noch Ausfallrisiko.'],'cashflow-types'),
 q('12','practice','a','A separate floating-rate note has principal 1,000, annual reference rate 3.5%, contractual spread 1.5% and interest-period fraction 0.5. Its coupon for that period is:',[
 ['25.00','Referenz plus Spread werden auf Nominal und Zinsfraktion angewendet.'],
 ['17.50','Dies lässt den vertraglichen Aufschlag aus.'],
 ['50.00','Dies verwendet die volle Jahresverzinsung ohne Periodenfraktion.']
 ],[F('C=1000(0{,}035+0{,}015)0{,}5=25','Alle Sätze sind passende jährliche Dezimalsätze der vorgegebenen Modellperiode.',[['C','Zinszahlung für die definierte halbe Jahresperiode.']])],'cashflow-types'),
 q('13','practice','a','A fixed-coupon bond’s market price falls while all its contractual terms remain unchanged. The most accurate immediate conclusion is that:',[
 ['the next fixed coupon does not change merely because a new buyer pays a different price.','Vertraglicher Betrag und Preis der verbleibenden Ansprüche sind getrennt.'],
 ['the coupon must rise to keep the original current yield unchanged.','Eine Preisänderung schreibt einen festen Vertrag nicht automatisch um.'],
 ['the bond’s current yield becomes the guaranteed realized yield to maturity.','Kuponpreisquote und tatsächliche gesamte Rendite sind verschiedene Größen.']
 ],['Ein neuer Einstiegspreis verändert den Ertrag einer passenden Zahlungsrechnung.','Ausfall, Verkaufshorizont, Wiederanlage und Optionen können die tatsächlich erzielte Rendite verändern.'],'price-return'),
 q('14','practice','a b','A bond indenture is most useful to an analyst as the document framework specifying:',[
 ['payment terms, relevant obligors, protections, restrictions and consequences under the defined contract.','Es verbindet Zahlungsanspruch und Verhalten sowie Rechtsfolgen.'],
 ['only the coupon rate, with other obligations determined by the issuer’s brand.','Umfang und Schuldner sind nicht allein aus Kupon oder Marke ableitbar.'],
 ['a forecast that overrides the stated contractual claim if management becomes more optimistic.','Zukunftsprognose und vertragliche Verpflichtung sind verschiedene Ebenen.']
 ],['Definitionen, Ergänzungen und einbezogene Dokumente können entscheidend sein.','Ein Termsheet oder eine isolierte Überschrift ersetzt keine vollständige Bedingungenprüfung.'],'indenture'),
 q('15','practice','b','The appointment of an indenture trustee most appropriately means that:',[
 ['specified collective or administrative responsibilities are assigned under the contract and applicable framework, without itself guaranteeing payment.','Rolle und Befugnisse sind von einer Garantie zu unterscheiden.'],
 ['the trustee’s own assets automatically back all principal and interest.','Eine Vertretungsrolle ist kein eigener unbeschränkter Schuldbeitritt.'],
 ['bondholders no longer need to examine covenant definitions because every business decision is continuously audited by the trustee.','Die konkreten Pflichten können erheblich enger sein als eine vollständige wirtschaftliche Dauerprüfung.']
 ],['Der Vertrag bestimmt, wer Informationen erhält und unter welchen Voraussetzungen handelt.','Eine benannte Institution ersetzt weder Bonitäts- noch Anspruchsanalyse.'],'indenture'),
 q('16','practice','b','Which stipulated clause is most clearly an affirmative covenant?',[
 ['The issuer must maintain the specified insurance coverage on named operating assets.','Eine bestimmte Handlung beziehungsweise Erhaltungspflicht wird verlangt.'],
 ['The issuer may not pledge specified assets except under permitted exceptions.','Dies beschränkt Sicherheitenbestellung und ist eine negative Klausel.'],
 ['Additional debt is permitted only within the specified incurrence limits.','Dies beschränkt eine neue Handlung.']
 ],['Positiv bezieht sich auf die verlangte Handlung, nicht auf garantierten wirtschaftlichen Erfolg.','Versicherungsumfang, Ausnahmen und Erfüllung werden weiterhin konkret geprüft.'],'affirmative'),
 q('17','practice','b','A clause states that the issuer must satisfy a leverage condition before incurring additional debt. Its economic function is best described as:',[
 ['a restriction on the additional-debt action, even though it uses the word must.','Die geregelte Handlung und der Auslöser entscheiden.'],
 ['an affirmative reporting duty solely because the sentence begins with must.','Grammatik allein klassifiziert die Klausel nicht.'],
 ['a scheduled principal repayment because the clause includes a numerical ratio.','Eine Zugangsvoraussetzung für Schuld ist kein Tilgungsplan.']
 ],['Man unterscheidet verlangte Handlung und begrenzte Handlung.','Zusätzlich wird der transaktionsbezogene Test von einer laufenden Maintenance-Verpflichtung getrennt.'],'negative'),
 q('18','practice','b','An indenture contains only a specified negative pledge restriction on new liens, with no general debt cap stated in the question. A proposed unsecured borrowing:',[
 ['is not automatically prohibited by that lien clause; other applicable restrictions must be checked separately.','Sicherheitenbestellung und zusätzliche Bruttoschuld sind verschiedene Handlungen.'],
 ['necessarily violates the clause because every new borrowing is a new lien.','Eine unbesicherte Schuld schafft nicht allein durch ihre Aufnahme eine Sicherheit.'],
 ['is automatically permitted under every other covenant because no lien is proposed.','Eine nicht einschlägige Sicherheitenklausel ersetzt keine Prüfung anderer Bedingungen.']
 ],['Negative Pledge ist kein universelles Verbot jeder weiteren Finanzierung.','Der vollständige Vertrag kann zusätzliche Schuld-, Ausschüttungs- oder andere Grenzen enthalten.'],'negative-pledge'),
 q('19','practice','b','An unsecured bond includes a negative pledge covenant. The covenant itself:',[
 ['does not by its name create the same direct collateral right as a valid security interest.','Eine Beschränkung der Sicherheitenbestellung ist nicht selbst die bestellte Sicherheit.'],
 ['makes the bond secured by all issuer assets even without a collateral grant.','Vertragliche Verhaltenspflicht und dinglicher beziehungsweise entsprechender Sicherheitenzugriff sind verschiedene Rechte.'],
 ['removes the need to read permitted lien exceptions.','Ausnahmen und Umfang bestimmen gerade die tatsächliche Schutzwirkung.']
 ],['Bei einem Verstoß werden die konkreten Rechte, Fristen und Rechtsfolgen geprüft.','Die Bezeichnung allein liefert keinen automatisch identischen Zugriff wie eine wirksame Besicherung.'],'negative-pledge'),
 q('20','practice','a b','A stipulated covenant uses gross debt 220 and permits deduction of eligible free cash up to 50. Total cash is 40, including 15 that is ineligible. Defined net debt is:',[
 ['195.00','Nur die zulässigen fünfundzwanzig werden abgezogen.'],
 ['180.00','Dies zieht das gesamte Cash einschließlich gesperrter fünfzehn ab.'],
 ['170.00','Dies setzt die Obergrenze fünfzig als tatsächlich vorhandenes anrechenbares Cash ein.']
 ],[F('D_{net}=220-\\min(40-15,50)=195','Eine Anrechnungsobergrenze erzeugt kein zusätzliches Cash.',[['D_{net}','Definierte Nettoschuld im gegebenen Vertragstest.']])],'definitions'),
 q('21','practice','b','An analyst substitutes reported EBITDA for contractual EBITDA without reviewing the covenant definition. The primary problem is that:',[
 ['the permitted scope, adjustments and measurement period may differ from the reported accounting measure.','Vertragsdefinition und Abschlusskennzahl müssen abgestimmt werden.'],
 ['the reported measure necessarily proves the covenant is breached.','Ohne die tatsächliche Definition ist noch keine solche Schlussfolgerung belegt.'],
 ['contractual add-backs automatically represent an equal amount of free cash.','Eine zulässige Nenneranpassung ist nicht automatisch zusätzliche Zahlungsmittelverfügbarkeit.']
 ],['Ein Verhältnis braucht konsistente Definitionen von Zähler und Nenner.','Geltungsbereich, Zeit, Tochtergesellschaften und Ausnahmen sind Teil der Berechnung.'],'definitions'),
 q('22','practice','b','A stipulated pure incurrence covenant tests leverage only when additional debt is incurred. EBITDA subsequently declines, but no covered transaction occurs. The decline:',[
 ['does not by itself establish a breach of that transaction-only test; other obligations can still matter.','Auslöser und weitere Klauseln werden getrennt geprüft.'],
 ['must breach the same covenant immediately because every ratio is a continuous maintenance test.','Laufende und handlungsbezogene Prüfungen sind verschiedene Vertragsarten.'],
 ['proves that the issuer may take unlimited additional debt without a new calculation.','Die nächste erfasste Handlung kann erneut eine Pro-forma-Prüfung verlangen.']
 ],['Eine wirtschaftliche Verschlechterung ist relevant, aber die vertragliche Pflicht folgt ihrer Definition.','Zahlungsverpflichtungen und andere Tests bleiben unabhängig davon zu untersuchen.'],'maintenance-incurrence'),
 q('23','practice','b','A separate covenant explicitly requires a leverage limit at each quarter-end. If a covered ratio exceeds its limit at the defined quarter-end, the analyst should:',[
 ['assess the maintenance breach and the contract’s cure, notice and remedy provisions.','Hier ist der laufende Prüfzeitpunkt ausdrücklich erreicht.'],
 ['ignore the ratio unless a new borrowing has occurred.','Dies würde den Maintenance-Test in einen anderen Incurrence-Test umdeuten.'],
 ['treat all principal as immediately due without examining whether acceleration is automatic or must be declared.','Eine verletzte Quote allein ersetzt keine Prüfung des Event of Default und der Fälligstellungsregeln.']
 ],['Testzeitpunkt, Verletzung, Event of Default und Fälligstellung sind verschiedene Schritte.','Eine konkrete Nachfrist oder Rechtsfolge muss aus den Bedingungen stammen.'],'maintenance-incurrence'),
 q('24','practice','a b','An issuer starts with eligible free cash 25, borrows 30, makes an operating or investment payment 30 and distributes 10. With no other immediate cash flows, closing free cash is:',[
 ['15.00','Anfang plus neuer Kredit minus beide Verwendungen.'],
 ['45.00','Dies lässt die Zahlung dreißig aus.'],
 ['55.00','Dies behält den gesamten Krediterlös und ignoriert beide Verwendungen.']
 ],[F('C_1=25+30-30-10=15','Quelle und Verwendung werden in derselben Transaktion abgestimmt.',[['C_1','Verbleibendes freies Cash unmittelbar nach der Transaktion.']])],'funding'),
 q('25','practice','b','Gross debt starts at 220 and rises by a new borrowing of 30. Closing eligible cash is 15, below a covenant cash cap of 50. Defined net debt is:',[
 ['235.00','Neue Bruttoschuld 250 minus anrechenbares Cash fünfzehn.'],
 ['205.00','Dies behält die alte Bruttoschuld trotz neuer Finanzierung bei.'],
 ['200.00','Dies zieht die Cash-Obergrenze fünfzig statt der vorhandenen fünfzehn ab.']
 ],[F('D_{net}=220+30-15=235','Neue Schuld und tatsächliches zulässiges Cash werden gleichzeitig erfasst.',[['D_{net}','Vertraglich definierte Nettoschuld nach der Transaktion.']])],'funding'),
 q('26','practice','b','A stipulated maximum net-debt-to-EBITDA ratio is 3. Contractual EBITDA is 80 and defined net debt is 235. Net-debt headroom with EBITDA held constant is:',[
 ['5.00','Zulässige Nettoschuld 240 minus vorhandene 235.'],
 ['15.00','Dies kann ein Cashbetrag sein, ist aber nicht der verbleibende Leverage-Spielraum.'],
 ['45.00','Dies wäre der Spielraum bei Nettoschuld 195 vor der beschriebenen Transaktion.']
 ],[F('H_L=3\\cdot80-235=5','Das ist weder eine Kreditzusage noch ohne Cashverwendungsprüfung ein Bruttokreditlimit.',[['H_L','Verbleibender Spielraum in der definierten Nettoschuldgröße.']])],'funding'),
 q('27','practice','b','A stipulated covenant annualizes contractual interest. Existing annual interest is 12, new borrowing is 30 and its annual rate is 6%. Pro-forma annual interest is:',[
 ['13.80','Die neue annualisierte Last 1,8 wird addiert.'],
 ['12.00','Dies lässt den neuen Anspruch weg.'],
 ['30.00','Dies verwechselt Kreditbetrag und laufende Zinsbasis.']
 ],[F('I_{run}=12+30\\cdot0{,}06=13{,}8','Die Aufgabe definiert einen annualisierten Vertragstest, nicht schon tatsächlich angefallenen Zins für ein beliebiges Rumpfjahr.',[['I_{run}','Annualisierte vertragliche Zinsbasis.']])],'funding'),
 q('28','practice','b','Contractual EBITDA is 80 and annualized interest for a specified pro-forma coverage test is 13.8. Interest coverage is closest to:',[
 ['5.7971','Vertragliches EBITDA wird durch dieselbe definierte Zinsbasis geteilt.'],
 ['6.6667','Dies verwendet die alte Zinsbasis zwölf.'],
 ['0.1725','Dies kehrt die Deckungsquote um.']
 ],[F('ICR=80/13{,}8\\approx5{,}797101','Bei einer ausdrücklich vorgegebenen Mindestgrenze vier wäre dieser einzelne Test erfüllt.',[['ICR','EBITDA-Zinsdeckungsquote des Vertragstests.']])],'funding'),
 q('29','practice','b','Starting debt is 220 and eligible cash 25. An issuer borrows 30, retains the proceeds and pays a dividend of 10, with no other use. Cash cap is 50. Defined net debt after the transaction is:',[
 ['205.00','Bruttoschuld 250 minus verbleibendes anrechenbares Cash 45.'],
 ['235.00','Dies unterstellt zusätzlich eine nicht angegebene Mittelverwendung dreißig.'],
 ['195.00','Dies ignoriert den durch die Ausschüttung verbrauchten Cashbetrag.']
 ],[F('C_1=25+30-10=45,\\quad D_{net}=250-45=205','Kredit behalten und Kredit ausgeben sind verschiedene Quotenfälle.',[['C_1,D_{net}','Verbleibendes freies Cash und definierte Nettoschuld.']])],'retained-cash'),
 q('30','practice','b','Starting debt is 220 and eligible cash 25. A new borrowing of 30 is entirely retained as free cash. There is no dividend or other use. Only cash up to 50 may offset debt. Defined net debt is:',[
 ['200.00','Von tatsächlichem Cash 55 sind nur fünfzig anrechenbar.'],
 ['195.00','Dies ignoriert die Anrechnungsobergrenze.'],
 ['250.00','Dies zieht überhaupt kein zulässiges Cash ab.']
 ],[F('D_{net}=250-\\min(25+30,50)=200','Die ersten fünfundzwanzig zusätzlicher Mittel erhöhen das anrechenbare Cash; darüber bindet der Cap.',[['D_{net}','Vertraglich definierte Nettoschuld.']])],'retained-cash'),
 q('31','practice','b','Before a proposed dividend, debt is 250, free cash 25 and contractual EBITDA 80. Net debt deducts this cash, maximum leverage is 3, minimum free cash 10 and the dividend basket 20. Interest coverage already passes and does not change. Maximum dividend is:',[
 ['15.00','Leverage und Mindestcash begrenzen hier beide auf fünfzehn.'],
 ['20.00','Dies prüft nur den Basket.'],
 ['25.00','Dies würde das ganze Cash ausschütten und andere Grenzen ignorieren.']
 ],[F('Div_{max}=\\min\\{3\\cdot80-(250-25),25-10,20\\}=15','Es wird die engste gleichzeitig geltende Grenze gesucht.',[['Div_{max}','Maximale Ausschüttung unter genau den angegebenen Bedingungen.']])],'dividend-headroom'),
 q('32','practice','b','Defined net debt is 235 and annualized interest 13.8. A specified transaction test requires net leverage at most 3 and EBITDA interest coverage at least 4. If contractual EBITDA is 50, the two tests:',[
 ['both fail, but their contractual consequences still require examination of the specified triggers and remedies.','Leverage 4,7 und Deckung rund 3,62 verfehlen die Grenzen.'],
 ['both pass because EBITDA is positive.','Ein positiver Nenner allein erfüllt keine Schwelle.'],
 ['imply that a missed coupon has already occurred, regardless of the actual payment dates.','Kennzahlverletzung und tatsächliche Nichtzahlung sind verschiedene Ereignisse.']
 ],[F('L=235/50=4{,}7,\\quad ICR=50/13{,}8\\approx3{,}623188','Die Rechentests sind eindeutig; Event of Default und Fälligkeit folgen ihren eigenen Bedingungen.',[['L,ICR','Netto-Leverage und EBITDA-Zinsdeckung.']])],'stress'),
 q('33','practice','b','A stipulated clause permits an additional borrowing either entirely under a ratio route with capacity 40 or entirely within a separate basket of 10. It does not allow splitting a transaction across routes. A proposed borrowing of 45:',[
 ['fits neither permitted route under that wording.','45 überschreitet sowohl vierzig als auch zehn; eine Addition ist nicht erlaubt.'],
 ['fits because 40 plus 10 equals total available capacity 50.','Dies fügt ein ausdrücklich nicht gewährtes Kombinationsrecht hinzu.'],
 ['fits because either always means that both limits must be added.','Die konkrete Vertragsfassung sagt gerade etwas anderes.']
 ],['Andere Klauseln können eine Aufteilung erlauben; diese Aufgabe schließt sie ausdrücklich aus.','Quoten, Baskets, Geltungsbereich und Kombinationsregeln werden gemeinsam gelesen.'],'baskets'),
 q('34','practice','a b','In a stipulated net distribution model, a bank has a secured claim 80, collateral realizes 60 and its deficiency shares pari passu with senior unsecured notes of 100 in a separate free pool of 80. Other claims are junior. The bank’s total recovery amount is closest to:',[
 ['73.3333','Zur Sicherheitenzahlung sechzig kommt der anteilige Rückfluss des Fehlbetrags zwanzig.'],
 ['60.0000','Dies ignoriert den ausdrücklich erlaubten Fehlbetragsanspruch im freien Pool.'],
 ['80.0000','Dies setzt volle Rückzahlung trotz unzureichender Verteilungsmittel voraus.']
 ],[F('Pay_B=60+(80-60)\\frac{80}{100+80-60}\\approx73{,}333333','Der freie Pool muss sich auf alle dort gleichrangigen Ansprüche verteilen.',[['Pay_B','Gesamter Bankrückfluss im definierten Nettoverteilungsfall.']])],'recovery'),
 q('35','practice','a b','Using a stipulated distribution rule, bank principal is 80 with collateral proceeds 60. Its deficiency shares a free pool of 80 equally in rank with note principal 100. All prior interest is paid. Recovery on the note’s principal is closest to:',[
 ['66.6667%.','Der freie Pool achtzig steht hundertzwanzig gleichrangigen Ansprüchen gegenüber.'],
 ['80.0000%.','Dies ignoriert den Bankfehlbetrag bei der Verteilung des freien Pools.'],
 ['63.6364%.','Dies verteilt die Gesamtdeckung 140/220 pauschal auf alle Schuldklassen.']
 ],[F('q_U=80/(100+20)\\approx66{,}666667\\%','Die Note erhält diese Quote ihres Nominals; besicherte und nachrangige Klassen können andere Gesamtquoten haben.',[['q_U','Recovery-Quote auf Nominal im freien gleichrangigen Pool.']])],'recovery'),
 q('36','practice','b','Existing claims are bank 80, senior notes 100 and junior debt 40. Total net assets stay 140. Under a specified model, bank collateral rises from 60 to 90 by reassigning existing assets; the other pool falls from 80 to 50. Collateral surplus returns to the free pool. No new loan or proceeds arise. The senior notes receive:',[
 ['60.00','Die Bank nimmt achtzig; Überschuss zehn kehrt zum freien Pool fünfzig zurück.'],
 ['50.00','Dies lässt den zurückgegebenen Sicherheitenüberschuss weg.'],
 ['66.67','Dies behält die alte Verteilung trotz geänderter Sicherheitenrechte bei.']
 ],[F('Pay_N=50+\\max(90-80,0)=60','Der Bankrückfluss steigt auf achtzig und der Noterückfluss sinkt; die Gesamtmittel bleiben 140.',[['Pay_N','Senior-Note-Rückfluss im veränderten eigenen Sicherheitenfall.']])],'collateral-transfer'),
 q('37','practice','a b','A holding company owns only its operating subsidiary’s equity, has notes of 100 and no guarantees or other assets. The subsidiary has net assets 140 and its own debt 80. Under the specified distribution assumptions, holding-note recovery amount is:',[
 ['60.00','Nur der nach Tochtergläubigern verbleibende Eigentümerrest erreicht die Holding.'],
 ['100.00','Dies behandelt das ganze Tochtervermögen als direkt freien Pool der Holding.'],
 ['77.78','Dies würde ohne gegebene Garantie beide Schulden in einen gemeinsamen gleichrangigen Pool legen.']
 ],[F('Pay_H=\\min\\{100,\\max(140-80,0)\\}=60','Die Rechts- und Anspruchsgrenzen werden vor der Verteilung festgelegt.',[['Pay_H','Zahlung auf Holding-Notes.']])],'structural'),
 q('38','practice','a b','In a separate idealized case, an operating subsidiary has net assets 140 and debt 80. It provides an effective, collectible guarantee of holding notes 100 ranking pari passu with that debt. There are no other assets, claims or costs and no double collection. The noteholders receive closest to:',[
 ['77.7778','Beide Ansprüche teilen denselben Pool mit einer Quote 140/180.'],
 ['60.0000','Dies behandelt den Anspruch weiter nur als Eigentümerrest ohne die gegebene Garantie.'],
 ['100.0000','Die Garantie macht die begrenzten Mittel nicht automatisch ausreichend.']
 ],[F('Pay_H=100\\frac{140}{80+100}\\approx77{,}777778','Die unmittelbare Garantie verändert die Verteilung, nicht die Gesamtmittel.',[['Pay_H','Gesamter Rückfluss auf die garantierten Notes im vorgegebenen Modell.']])],'guarantees'),
 q('39','practice','b','A stipulated cross-acceleration clause applies when covered debt above 10 million is actually accelerated. A 12-million covered loan has a curable reporting breach but has not been accelerated. Under the stated clause:',[
 ['the specified acceleration trigger has not yet been established.','Die Aufgabe setzt tatsächliche Fälligstellung voraus, nicht nur irgendeine Verletzung.'],
 ['all bonds are necessarily already due because any breach equals acceleration.','Verstoß, Event of Default und Fälligstellung sind zu trennen.'],
 ['the size threshold alone proves the acceleration condition has occurred.','Betrag und tatsächlicher Auslöser sind getrennte Voraussetzungen.']
 ],['Andere Klauseln können andere Auslöser haben.','Hier werden weder zusätzliche Bedingungen erfunden noch der vorgegebene Beschleunigungsauslöser ausgelassen.'],'cross-default'),
 q('40','practice','b','A stipulated amendment needs at least 75% of eligible outstanding principal. Eligible principal is 100, held as 40, 20, 15 and 25 by four investors. The last three approve. Their principal-weighted support is:',[
 ['60.00%.','Die zustimmenden Nominalbeträge zwanzig, fünfzehn und fünfundzwanzig addieren sich zu sechzig.'],
 ['75.00%.','Dies zählt drei von vier Personen statt ihrer tatsächlich gehaltenen Nominalbeträge.'],
 ['65.00%.','Dies wäre das Gewicht des ersten und vierten Halters, nicht der benannten letzten drei.']
 ],[F('w=(20+15+25)/100=60\\%<75\\%','Die Nominalgrenze ist nicht erreicht, obwohl drei von vier Personen zustimmen.',[['w','Zustimmendes Nominalgewicht für diese definierte Änderung.']]),'Eine andere Kombination aus ebenfalls drei Haltern könnte 75 Prozent erreichen. Personenzahl und Forderungsgewicht sind nicht austauschbar.'],'consent'),
 q('41','practice','a b','Two claims are described as senior, but one has collateral and the other is issued by a different group entity. The labels alone:',[
 ['do not establish equal access to assets or equal total recoveries.','Sicherheiten, Pool und Rechtsträger können verschieden sein.'],
 ['establish identical recovery percentages because senior is a universal consolidated ranking.','Die gleiche Bezeichnung ersetzt keine konkrete Anspruchsgrenze.'],
 ['establish that the unsecured claim is contractually subordinated in every jurisdiction.','Fehlende Sicherheit ist nicht allein eine vertragliche Nachrangigkeitsklausel.']
 ],['Vertraglicher Rang, Sicherheitenvorrang und strukturelle Nachrangigkeit sind verschiedene Mechanismen.','Pari Passu gilt für den benannten Anspruchskreis und beseitigt keine abweichenden Vermögenszugriffe.'],'security'),
 q('42','practice','a b','A term sheet identifies a call right but omits exercise dates, call prices and conditions. To complete the contractual cash-flow analysis, the analyst should:',[
 ['examine the full exercise provisions because the issuer’s permitted choices can alter timing and amounts.','Ein Optionsname allein definiert keinen vollständigen Zahlungsplan.'],
 ['assume the final maturity schedule remains unchanged in all states.','Das würde das genannte Recht gerade ignorieren.'],
 ['assume the investor controls the call and can demand repayment whenever prices fall.','Ein Emittenten-Call ist nicht automatisch ein jederzeitiger Anleger-Put.']
 ],['Ausübungsberechtigter, Termin, Preis und Auslöser werden gemeinsam gelesen.','Ein künftiger Vertragspfad ist von einem festen versprochenen Basisplan zu unterscheiden.'],'options'),
 q('a1','mock-a','a b','A stipulated indenture prohibits a new lien on covered assets unless the notes receive the specified equal security; no exception applies and none is provided. It also caps pro-forma net debt/EBITDA at 2.5 and requires EBITDA/annualized interest at least 4. Debt is 180, eligible cash 30, EBITDA 70 and annual interest 10. A new secured loan 40 at 8% is fully spent on equipment, with no immediate EBITDA gain. The proposed transaction:',[
 ['fails the lien restriction and leverage test even though the stated interest-coverage test passes.','Die neue Sicherheit ist nicht erlaubt und Nettoschuld 190 übersteigt die zulässigen 175.'],
 ['passes because the new loan proceeds offset all added debt even after those proceeds are spent.','Ausgegebener Erlös bleibt nicht zugleich anrechenbares Cash.'],
 ['passes all restrictions once interest coverage exceeds 4, because it supersedes the lien and leverage clauses.','Mehrere gleichzeitig geltende Bedingungen werden nicht durch eine gute einzelne Quote aufgehoben.']
 ],[F('D_{net}=180+40-30=190,\\quad L=190/70\\approx2{,}714286','Der angegebene Kredit wurde vollständig verwendet; Cash bleibt dreißig.',[['D_{net},L','Nettoschuld und Leverage nach der beschriebenen Transaktion.']]),F('I_{run}=10+40\\cdot0{,}08=13{,}2,\\quad ICR=70/13{,}2\\approx5{,}303030','Zinsdeckung besteht, Leverage und Sicherheitenbedingung bestehen nicht.',[['I_{run},ICR','Annualisierte Zinsbasis und EBITDA-Zinsdeckung im gegebenen Vertragstest.']]),'Der Rechner beziehungsweise Bericht darf die Bedingungen nicht als alternative Freigaben behandeln, wenn der Vertrag ihre gleichzeitige Erfüllung verlangt.'],'funding'),
 q('b1','mock-b','a b','A parent owns only subsidiary equity and issues senior notes. The subsidiary has its own creditors and does not guarantee the parent notes. Parent noteholders approve a waiver under a stated principal-majority rule. A report claims that their vote alone makes all subsidiary assets a common pari passu pool for both entities’ creditors. The most appropriate assessment is that:',[
 ['the report must separately establish actual obligations and asset access; the stated parent-holder waiver alone does not create the omitted subsidiary guarantee or eliminate subsidiary claims.','Änderungsbefugnis im eigenen Vertrag und Anspruch gegen einen anderen Rechtsträger sind verschiedene Fragen.'],
 ['the report is supported because a senior label and a majority vote imply consolidated equal recovery.','Weder Titel noch die gegebene Stimmregel begründen den behaupteten gemeinsamen Pool.'],
 ['the report is supported whenever consolidated assets exceed the parent note principal, irrespective of subsidiary debt.','Der Eigentümerrest muss zuerst nach den Tochteransprüchen bestimmt werden.']
 ],['Ein struktureller Verteilungsfall verlangt die Zuordnung von Vermögen, Schuldner, Garantie und Rang.','Ein Waiver behandelt die konkret erfassten Vertragsrechte unter seinen Bedingungen. Ohne zusätzliche Grundlage darf daraus kein neuer Schuldbeitritt einer anderen Gesellschaft konstruiert werden.'],'structural')
];
