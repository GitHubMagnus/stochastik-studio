const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,solution,section)=>Q('cfu-'+id,'corporate-funding','bonds',pool,los,stem,options,0,solution,{section});
module.exports=[
 q('01','practice','a','A company starts with cash of 8 million, receives 12 million, must pay 26 million and wants an ending cash reserve of 2 million. Its required NET new funding is:',[
 ['8 million.','Sechs Mio. schließen den Zahlungsfehlbetrag; weitere zwei Mio. erhalten die Reserve.'],
 ['6 million.','Das deckt nur die fälligen Auszahlungen und lässt keine gewünschte Endreserve.'],
 ['28 million.','Dies ignoriert das Anfangscash und die tatsächlichen Eingänge.']
 ],[F('F=2-8-12+26=8','Die Cashplanung wird nach dem fehlenden Nettofinanzierungszufluss aufgelöst.',[['F','Benötigter Nettozufluss, in Millionen.']]),'Gebühren könnten einen höheren Bruttokredit erforderlich machen.'],'need'),
 q('02','practice','a','Compared with an uncommitted credit line, a committed revolving facility generally provides:',[
 ['a contractual funding commitment within its conditions, rather than cash already sitting in the borrower’s account.','Zusage und tatsächliche Ziehung bleiben getrennt; Vertragsbedingungen gelten weiter.'],
 ['an unconditional grant that never creates debt when drawn.','Ziehung schafft eine rückzahlbare Verbindlichkeit und ist keine Schenkung.'],
 ['proof that no covenants or drawing conditions can restrict access.','Die konkreten Bedingungen bleiben relevant.']
 ],['Ein Revolver erlaubt nach seinen Regeln wiederholte Ziehung und Tilgung.','Der freie tatsächlich verfügbare Teil ist die passende Backup-Größe.'],'lines'),
 q('03','practice','a','A 90-day bank loan pays 10 million gross. An additional 1 million must remain in a non-interest-bearing restricted deposit, and a 0.05 million fee is withheld at inception. Usable initial cash is:',[
 ['8.95 million.','Bruttomittel abzüglich zusätzlicher Bindung und Anfangsgebühr.'],
 ['9.95 million.','Die zusätzliche gesperrte Einlage fehlt im Abzug.'],
 ['10 million.','Bruttoauszahlung ist nicht vollständig frei verwendbar.']
 ],[F('U=10-1-0{,}05=8{,}95','Nur verfügbare Anfangsmittel finanzieren den eigentlichen Bedarf.',[['U','Nutzbares Anfangscash, in Millionen.']]),'Die spätere Freigabe der Einlage ist gesondert im Endcashflow zu berücksichtigen.'],'bank-cost'),
 q('04','practice','a','A 90-day loan provides 8.95 million of usable initial cash after its fee and an additional restricted deposit. Its net end payment, after deposit release, is 9.15 million. On a simple 360-day basis, its annualized financing cost is closest to:',[
 ['8.938547%.','0,20 Mio. Gesamtkosten werden durch 8,95 Mio. und ein Vierteljahr geteilt.'],
 ['6%.','Das kann der ausgeschriebene Satz auf Bruttoschuld sein, nicht die Kosten auf nutzbares Cash.'],
 ['2.234637%.','Das ist die 90-Tage-Quote vor einfacher Annualisierung.']
 ],[F('r=\\frac{9{,}15-8{,}95}{8{,}95}\\frac{360}{90}\\approx8{,}938547\\%','Gleiche Anfangs- und Endcashbasis verhindert einen unpassenden Bruttonenner.',[['r','Einfach annualisierte Kostenquote.']]),'Das ist keine effektive Jahresquote mit Wiederanlageannahme.'],'bank-cost'),
 q('05','practice','a','A discount CP issue promises 20 million in 90 days. Its quoted discount rate is 5% on ACT/360 and a 0.02 million issuance fee is withheld. Net proceeds are:',[
 ['19.73 million.','20 minus 0,25 Mio. Diskont minus 0,02 Mio. Gebühr.'],
 ['19.75 million.','Dies ist der Bruttoerlös vor Gebühren.'],
 ['20.02 million.','Gebühren erhöhen nicht den nutzbaren Erlös.']
 ],[F('U=20(1-0{,}05\\cdot90/360)-0{,}02=19{,}73','Diskont und Gebühr werden zu Beginn abgezogen.',[['U','Nettoerlös, in Millionen.']]),'Bei Fälligkeit bleibt die vertragliche Nominalzahlung zwanzig Mio. bestehen.'],'cp-cost'),
 q('06','practice','a','A company receives CP net proceeds of 19.73 million and pays 20 million in 90 days. Its simple annualized financing cost on a 360-day basis is closest to:',[
 ['5.473898%.','Die 0,27 Mio. Differenz beziehen sich auf den Nettozufluss 19,73 Mio.'],
 ['5%.','Dies verwechselt den ursprünglichen Diskontsatz auf Nominal mit Kosten auf Nettomittel.'],
 ['1.368474%.','Das ist die Periodenkostenquote, noch nicht annualisiert.']
 ],[F('r=\\left(\\frac{20}{19{,}73}-1\\right)\\frac{360}{90}\\approx5{,}473898\\%','Ein anderer Nenner und Gebühren ändern den Satzvergleich.',[['r','Einfach annualisierte Kostenquote.']]),'Effektive jährliche Verzinsung ist ein weiteres, gesondert definiertes Maß.'],'cp-cost'),
 q('07','practice','a','Ordinary unsecured corporate commercial paper most accurately represents:',[
 ['a short-term issuer payment obligation whose market placement does not guarantee rollover at maturity.','Das einzelne Papier bleibt fällig, auch wenn die nächste Platzierung nicht gelingt.'],
 ['a secured deposit that every company may issue under identical banking rules.','Unbesicherte Unternehmensschuld ist weder automatisch Einlage noch allgemeine Banklizenz.'],
 ['a perpetual equity claim with no contractual maturity.','CP ist gerade ein kurzfristiger Schuldanspruch.']
 ],['Programm, einzelne Note und zugesagte Anschlusslinie werden unterschieden.','Asset-backed CP wird als andere Struktur gesondert geprüft.'],'cp'),
 q('08','practice','a c','A borrower funds 10 million for two 180-day periods using simple ACT/360 rates. The first annual rate is 4%, the second is 10%, and all first-period interest is refinanced. Final debt is:',[
 ['10.71 million.','Zuerst wächst die Schuld auf 10,2 Mio., dann um fünf Prozent dieser neuen Basis.'],
 ['10.70 million.','Das addiert beide Zinsen auf die alte Basis und ignoriert die mitfinanzierten ersten Zinsen.'],
 ['10.50 million.','Das wäre die Endschuld einer ausdrücklich anderen festen Fünf-Prozent-Jahresfinanzierung.']
 ],[F('L=10(1+0{,}04/2)(1+0{,}10/2)=10{,}71','Die Basis der zweiten Periode schließt den ersten Zins ein.',[['L','Endschuld, in Millionen.']]),'Die Rechnung setzt voraus, dass die zweite Finanzierung tatsächlich verfügbar ist.'],'rollover'),
 q('09','practice','a c','A one-year fixed loan turns 10 million into 10.5 million. A rolled alternative first turns 10 million into 10.2 million in 180 days. What second-period annual rate on simple ACT/360, over another 180 days, makes its final debt equal 10.5 million?',[
 ['5.882353%.','Der zweite Halbjahresfaktor muss 10,5 geteilt durch 10,2 sein.'],
 ['6%.','Dies ignoriert, dass die zweite Rate auf 10,2 statt zehn Mio. wirkt.'],
 ['5%.','Der ursprüngliche Jahresvergleichssatz ist nicht der gesuchte zweite Periodensatz.']
 ],[F('r=2(10{,}5/10{,}2-1)\\approx5{,}882353\\%','Der Halbjahreszuwachs wird auf die einfache Jahresbasis umgerechnet.',[['r','Gesuchter zweiter Jahressatz.']]),'Unterhalb dieses Satzes ist Rollen im eigenen zahlungsidentischen Fall günstiger, sofern es gelingt.'],'rollover'),
 q('10','practice','a','CP of 50 million matures today. The issuer has free cash of 8 million and 35 million of genuinely drawable unused backup capacity. The remaining funding gap is:',[
 ['7 million.','Nur acht plus 35 Mio. stehen den fünfzig Mio. gegenüber.'],
 ['0 million.','Dies unterstellt weitere nicht angegebene Mittel.'],
 ['42 million.','Dies ignoriert den ausdrücklich verfügbaren Backup.']
 ],[F('D=\\max(50-8-35,0)=7','Bereits gezogene oder nicht verfügbare Zusagen werden nicht erneut gezählt.',[['D','Ungedeckter Betrag, in Millionen.']]),'Ein nominell größeres Gesamtlimit kann bereits durch frühere Ziehung beansprucht sein.'],'backup'),
 q('11','practice','a b','A bank has 20 million cash, an executable 30 million asset sale and 40 million of immediately available repo cash secured by DIFFERENT unencumbered assets. Withdrawals are 100 million. Its current shortfall is:',[
 ['10 million.','Die drei getrennt nutzbaren Quellen ergeben neunzig Mio.'],
 ['0 million.','Dies setzt weitere verfügbare Mittel voraus.'],
 ['40 million.','Dies lässt den tatsächlich ausführbaren Verkauf weg.']
 ],[F('D=100-20-30-40=10','Die Quellen dürfen wegen verschiedener Sicherheiten gemeinsam angesetzt werden.',[['D','Unmittelbarer Cashfehlbetrag, in Millionen.']]),'Ein Bewertungswert ohne ausführbaren Verkauf wäre noch keine gleichwertige Cashquelle.'],'liquidity-ladder'),
 q('12','practice','a','For a deposit-taking bank, customer deposits and loans granted to customers are generally, respectively:',[
 ['liabilities of the bank and assets of the bank.','Die Bank schuldet Einlegern Geld und besitzt Ansprüche gegen Kreditnehmer.'],
 ['assets of the bank and liabilities of the bank.','Dies vertauscht die Perspektive des Instituts.'],
 ['equity of the bank and cash that is always immediately recoverable.','Einlagen sind keine Verlustabsorptions-Eigenmittel; Kundenkredite sind nicht notwendig sofort Cash.']
 ],['Langfristig werthaltige Kredite können kurzfristige Abzüge trotzdem nicht rechtzeitig decken.','Nicht jedes Finanzinstitut darf überhaupt Einlagen annehmen.'],'fi-map'),
 q('13','practice','a','A negotiable certificate of deposit is most accurately described as:',[
 ['a transferable deposit claim subject to its contractual terms, without automatic issuer redemption at par whenever its holder wants to sell.','Übertragbarkeit und vertraglicher Auszahlungstermin sind verschiedene Rechte.'],
 ['an equity share that absorbs all losses before common shareholders.','Das Instrument ist eine Forderung und kein automatisch unterstes Eigenkapital.'],
 ['proof that every non-financial corporation can accept insured retail deposits.','Emissionsrecht und Sicherungssystem folgen dem jeweiligen Rechtsraum.']
 ],['Sekundärhandel kann Liquidität schaffen, garantiert aber keinen jederzeitigen Nominalerlös.','Wholesale- und Retail-Verhalten werden nicht gleichgesetzt.'],'deposits'),
 q('14','practice','a','A bank diversifies from customer deposits into unsecured interbank borrowing. This most directly means that:',[
 ['its funding sources change, but access, counterparty confidence and rollover still require assessment.','Eine neue Quelle kann gleichzeitig auf denselben Bonitätsstress reagieren.'],
 ['all liquidity and credit risks disappear because both parties are banks.','Gegenparteien bleiben ausfall- und zugangsabhängig.'],
 ['interbank borrowing must automatically transfer title to specified collateral.','Unbesicherte Finanzierung erfordert gerade nicht automatisch diese Sicherheitenstruktur.']
 ],['Diversifikation wird nach gemeinsamen Stressfaktoren und nicht nur nach Namen beurteilt.','Besicherte und unbesicherte Geschäfte werden gesondert verglichen.'],'fi-map'),
 q('15','practice','a b','A liquidity plan counts the full immediate sale proceeds of a securities portfolio and the full repo proceeds from delivering that SAME entire portfolio at the same time. Unless another source of securities is specified, this plan:',[
 ['double-counts the available use of the securities.','Die gleichen vollständig verkauften Titel können nicht zugleich vollständig für das Repo geliefert werden.'],
 ['is conservative because repo proceeds are always independent of collateral.','Repo-Cash hängt gerade von lieferbaren Sicherheiten und Haircut ab.'],
 ['proves that financial assets can be spent an unlimited number of times.','Ein Vermögensbestand ist keine unbegrenzte Cashquelle.']
 ],['Unbelasteter verfügbarer Bestand muss jeder Verwendung konkret zugeordnet werden.','Re-use unter tatsächlichen Verträgen ist kein Freibrief für diese gleichzeitige fiktive Doppelnutzung.'],'liquidity-ladder'),
 q('16','practice','a','A company describes its entire nominal revolving limit as unused liquidity even though part has been drawn and some drawing conditions are not met. The most appropriate correction is to:',[
 ['separately identify cash already received, remaining unused capacity and the portion actually drawable under current conditions.','Nur der tatsächlich freie nutzbare Teil ist zusätzliche Liquiditätskapazität.'],
 ['add the full nominal limit again to current bank cash.','Das zählt frühere Ziehungen gegebenenfalls doppelt.'],
 ['classify every undrawn limit as operating income.','Eine Finanzierungszusage ist weder Cashzufluss noch Umsatz.']
 ],['Vertrag, Ziehung und Cashbestand werden konsistent abgegrenzt.','Liquiditätsstresstests dürfen nicht von bloßen Limitüberschriften ausgehen.'],'lines'),
 q('17','practice','b','In an ordinary corporate repo, the party selling securities today and committing to repurchase equivalent securities later initially:',[
 ['receives cash and delivers securities.','Der Wertpapierverkäufer ist in diesem Fall Cashnehmer.'],
 ['pays cash and receives securities.','Das ist die anfängliche Richtung des Cashgebers.'],
 ['receives both cash and permanent unencumbered ownership of the same securities.','Die rechtliche Anfangslieferung und spätere Rücklieferung werden ignoriert.']
 ],['Die wirtschaftliche Funktion ist gesicherte Finanzierung.','Rechtlicher Verkauf und Rückkauf sind von einem bloßen Pfand sprachlich zu unterscheiden.'],'repo-legs'),
 q('18','practice','b','Under the ordinary corporate convention, the cash lender’s reverse-repo side consists of:',[
 ['buying securities now and agreeing to sell equivalent securities back later.','Cash fließt anfangs vom Käufer zum Verkäufer.'],
 ['selling securities now and paying no cash at any date.','Dies bildet weder den Cashgeber noch die Rückabwicklung korrekt ab.'],
 ['buying the issuer’s equity with no future contractual cash exchange.','Repo ist kein unbefristeter Eigenkapitalkauf.']
 ],['Die Perspektive wird mit den Cash- und Wertpapierpfeilen angegeben.','Spezielle Zentralbank-Operationsnamen werden nicht ungeprüft übernommen.'],'repo-legs'),
 q('19','practice','b','Collateral has an initial market value of 100 million. A repo haircut of 5% is measured against that collateral value. Initial cash funding is:',[
 ['95 million.','Cash ist 95 Prozent des Sicherheitenwerts.'],
 ['105 million.','Ein Haircut vermindert statt erhöht den Cashvorschuss.'],
 ['5 million.','Das ist der nicht durch das Repo finanzierte Wertanteil.']
 ],[F('L=100(1-0{,}05)=95','Der Nenner des Haircut ist der Sicherheitenwert.',[['L','Anfangscash, in Millionen.']]),'Der Haircutbetrag ist keine zusätzliche Repo-Zinszahlung.'],'haircut'),
 q('20','practice','b','For unchanged collateral value of 100 million, increasing the INITIAL haircut from 5% to 10% on a NEW repo changes initial cash funding to:',[
 ['90 million.','Bei Neuabschluss werden nur neunzig Prozent des Bestandswerts finanziert.'],
 ['95 million.','Das hält den alten Kredit fest und beantwortet eine andere Frage.'],
 ['110 million.','Der höhere Abschlag führt nicht zu einem höheren Cashvorschuss.']
 ],[F('L=100(1-0{,}10)=90','Dies ist ein Vergleich neuer Finanzierungsgrößen.',[['L','Neuer anfänglicher Cashbetrag, in Millionen.']]),'Der Nachschuss bei festem bestehendem Cash wird in einem anderen Abschnitt gerechnet.'],'haircut'),
 q('21','practice','b','Collateral is worth 100 million and initial repo cash is 95 million. Using ICMA’s collateral-value-to-cash convention, initial margin expressed as a percentage is closest to:',[
 ['105.263158%.','Das gesamte Verhältnis ist hundert geteilt durch 95.'],
 ['5%.','Dies ist der Haircut auf den Sicherheitenwert.'],
 ['5.263158%.','Dies ist nur die Übersicherungsquote auf Cash, nicht das gesamte Initial-Margin-Verhältnis.']
 ],[F('m=100/95\\approx1{,}052632','Hundert mal dieses Verhältnis ergibt die Prozentdarstellung.',[['m','Initial-Margin-Verhältnis nach der angegebenen Repo-Konvention.']]),'Die drei Prozentzahlen haben verschiedene Definitionen.'],'initial-margin'),
 q('22','practice','b','Initial margin is quoted as 105% of repo cash, meaning collateral value divided by cash equals 1.05. The corresponding haircut on collateral value is closest to:',[
 ['4.761905%.','Haircut ist eins minus der Kehrwert des Initial-Margin-Verhältnisses.'],
 ['5%.','Fünf Prozent ist die Übersicherung auf Cash; deren Nenner ist ein anderer.'],
 ['95%.','Das ist weder der gesuchte Abschlag noch die richtige Finanzierungsquote.']
 ],[F('h=1-1/1{,}05\\approx4{,}761905\\%','Der Haircut-Nenner ist der größere Sicherheitenwert.',[['h','Haircut als Anteil des Sicherheitenwerts.']]),'Eine Margin-Angabe braucht immer die Konvention.'],'initial-margin'),
 q('23','practice','b','Repo cash is 95 million, its simple annual repo rate is 4%, and the term is 30 days on ACT/360. Interest is closest to:',[
 ['316,666.67.','95 Mio. mal vier Prozent mal dreißig geteilt durch 360.'],
 ['333,333.33.','Dies berechnet den Zins fälschlich auf hundert Mio. Sicherheitenwert.'],
 ['3,800,000.','Dies ist der ungekürzte einfache Jahreszins statt des 30-Tage-Zinses.']
 ],[F('I=95\\,000\\,000\\cdot0{,}04\\frac{30}{360}\\approx316\\,666{,}67','Das Cash und nicht der Bruttosicherheitenwert wird verzinst.',[['I','Zinsbetrag in Geldeinheiten.']]),'Kupon des als Sicherheit gelieferten Wertpapiers ist eine eigene Vertragskomponente.'],'repo-interest'),
 q('24','practice','b','A repo provides 95 million cash and accrues 0.316666667 million of interest. With no other cash payments, the contractual repurchase price is closest to:',[
 ['95.316667 million.','Anfangscash plus vereinbarter Zins.'],
 ['100.316667 million.','Der Sicherheitenmarktwert wird nicht statt des Kredits zurückgezahlt.'],
 ['94.683333 million.','Der Cashnehmer zahlt Zins zusätzlich und zieht ihn nicht von der Schuld ab.']
 ],[F('P_R=95+0{,}316666667\\approx95{,}316667','Rückkaufpreis und aktueller Sicherheitenwert sind verschiedene Größen.',[['P_R','Rückkaufpreis, in Millionen.']]),'Ein späterer Kursrückgang ändert diesen Festzinsvertrag nicht automatisch.'],'repo-interest'),
 q('25','practice','b','A repo lends 95 million at a fixed simple 4% ACT/360 rate. Extending the agreed term from 30 to 60 days, with all other assumptions unchanged, makes total repo interest closest to:',[
 ['0.633333 million.','Bei einfachem festen Satz verdoppelt sich der Zeitanteil.'],
 ['0.316667 million.','Das ist unverändert der ursprüngliche Dreißig-Tage-Zins.'],
 ['5 million.','Das verwechselt einen möglichen Haircutbetrag mit Zeitverzinsung.']
 ],[F('I=95\\cdot0{,}04\\frac{60}{360}\\approx0{,}633333','Es gibt in diesem eigenen einfachen Vertrag keine Zinseszinsstufe.',[['I','Zinsbetrag, in Millionen.']]),'Der Vergleich nimmt eine tatsächlich entsprechend vereinbarte Laufzeit an.'],'repo-interest'),
 q('26','practice','b','A repo keeps principal exposure fixed at 95 million and requires a 5% haircut on collateral market value. Original collateral falls from 100 to 98 million. Ignoring accrued interest and thresholds, additional collateral value required is:',[
 ['2 million.','Der erforderliche Gesamtwert bleibt 95 geteilt durch 0,95 gleich hundert Mio.'],
 ['0 million.','98 liegt zwar über 95, erfüllt aber die vereinbarte Quote nicht.'],
 ['1.9 million.','Dies ist die Verringerung eines neu dimensionierten Cashvorschusses, nicht der zusätzliche Sicherheitenwert bei festem Kredit.']
 ],[F('M=95/0{,}95-98=2','Der Vertrag dieses Falls verlangt zusätzliche Sicherheit, nicht automatische Kredittilgung.',[['M','Zusätzlicher Sicherheitenmarktwert, in Millionen.']]),'Andere Marginverträge können eine andere Exposition und Transferform vorsehen.'],'margin-call'),
 q('27','practice','b','A repo’s fixed principal is 95 million and current collateral is worth 98 million. Before interest, costs or any transfer, the amount by which principal exceeds collateral is:',[
 ['0 million.','Der positive Fehlbetrag ist null, weil 98 größer als 95 ist.'],
 ['2 million.','Das kann der Nachschuss zur Hundert-Mio.-Quote sein, aber nicht diese ungedeckte Principal-Exposition.'],
 ['3 million.','Drei Mio. sind der vorhandene Sicherheitenüberschuss, kein Fehlbetrag.']
 ],[F('U=\\max(95-98,0)=0','Nachschuss und ungedecktes Anfangscash verwenden verschiedene Zielgrößen.',[['U','Positiver ungedeckter Principalbetrag, in Millionen.']]),'Null in dieser Momentaufnahme beweist keine verlustfreie spätere Verwertung.'],'margin-call'),
 q('28','practice','b','Principal exposure remains 95 million. Current collateral is worth 98 million and the contract now requires a 10% haircut. Ignore interest and thresholds. Required additional collateral value is closest to:',[
 ['7.555556 million.','Zielwert ist 95 geteilt durch 0,90, danach werden vorhandene 98 Mio. abgezogen.'],
 ['5 million.','Dies ignoriert den neuen Nenner und den bereits gesunkenen Bestandswert.'],
 ['1.9 million.','Dies vergleicht andere Cashgrößen statt den erforderlichen Sicherheiten-Nachschuss.']
 ],[F('M=95/0{,}90-98\\approx7{,}555556','Kursrückgang und höhere Haircutanforderung wirken gemeinsam.',[['M','Zusätzlicher Sicherheitenmarktwert, in Millionen.']]),'Eine tatsächliche Änderung muss nach den Vertragsrechten möglich sein.'],'haircut-change'),
 q('29','practice','b','An issuer can deliver only 100 million of collateral and wants a NEW repo with a 10% haircut. Which amount can it borrow under that quote?',[
 ['90 million.','Neunzig Prozent des lieferbaren Sicherheitenwerts.'],
 ['95 million.','Das wäre der Cashbetrag bei fünf Prozent anfänglichem Haircut.'],
 ['105.555556 million.','Dies ist ein erforderlicher Sicherheitenwert bei einem anderen festgehaltenen Kreditbetrag.']
 ],[F('L=100(1-0{,}10)=90','Cashgröße und zusätzlich erforderliche Sicherheit werden nicht vertauscht.',[['L','Neuer Cashvorschuss, in Millionen.']]),'Ein bestehendes Darlehen 95 Mio. zu erhalten wäre ein anderer Fall.'],'haircut-change'),
 q('30','practice','b','Fixed principal is 95 million, the haircut remains 5%, and collateral rises to 105 million. The contract permits release of surplus collateral and ignores accrued interest. The SIGNED collateral requirement, positive for delivery and negative for release, is:',[
 ['−5 million.','Geforderter Wert hundert Mio. minus vorhandene 105 Mio. ergibt negativen Lieferbedarf.'],
 ['5 million.','Dies kehrt das ausdrücklich angegebene Vorzeichen um.'],
 ['10 million.','Dies verwechselt den Marktwertüberschuss über Cash mit der Freigabe gegenüber dem Haircutziel.']
 ],[F('M=95/0{,}95-105=-5','Ein negativer Bedarf bedeutet hier eine vertraglich erlaubte Freigabe fünf Mio.',[['M','Signierter Sicherheiten-Lieferbedarf, in Millionen.']]),'Die Freigabe ist weder ein automatischer Gewinn noch eine Änderung des Rückkaufpreises.'],'margin-call'),
 q('31','practice','b','Principal exposure is 95 million and the maintained haircut is 5%. Collateral falls to 85 million; ignore accrued interest and costs. The required collateral top-up and uncovered principal before that top-up are, respectively:',[
 ['15 million and 10 million.','Zur vereinbarten Quote fehlen fünfzehn; gegenüber bloßem Principal fehlen zehn.'],
 ['10 million and 15 million.','Die beiden unterschiedlichen Zielwerte werden vertauscht.'],
 ['5 million and zero.','Das unterschätzt den Kursrückgang und die fehlende Deckung.']
 ],[F('M=100-85=15,\\quad U=95-85=10','Der Haircutpuffer ist nicht dasselbe wie der aktuell geforderte Transfer.',[['M','Zusätzlicher Sicherheitenmarktwert, in Millionen.'],['U','Ungedecktes Anfangscash vor Transfer, in Millionen.']]),'Ein Ausfallverlust verlangt zusätzlich Verwertung, Zins und Vertragsprüfung.'],'repo-risks'),
 q('32','practice','b c','A lender advances 95 million against collateral initially worth 100 million. In the borrower’s default state, correlated collateral is worth 70 million before costs. The principal amount not covered by this collateral alone is:',[
 ['25 million.','95 Mio. minus siebzig Mio. im entscheidenden Zustand.'],
 ['5 million.','Dies ist nur der anfängliche Marktwertpuffer.'],
 ['0 million.','Ein anfänglicher Haircut garantiert nicht volle spätere Deckung.']
 ],[F('U=\\max(95-70,0)=25','Gleiche Anfangswerte können sehr verschiedene Stressrückflüsse haben.',[['U','Ungedecktes Principal vor weiteren Ansprüchen und Kosten, in Millionen.']]),'Fällt das Kollateral gerade mit der Schuldnerqualität, ist Wrong-Way Risk relevant.'],'wrong-way'),
 q('33','practice','b','Using a tri-party agent for collateral selection, valuation and settlement by itself:',[
 ['does not turn that agent into a guarantor of the repo counterparty’s credit obligations.','Dienstleistung und Kreditrisikoübernahme sind unterschiedliche Rollen.'],
 ['eliminates the need for any legal agreement between borrower and lender.','Die Finanzierungsparteien benötigen weiterhin ihre maßgebliche Vereinbarung.'],
 ['is automatically identical to novation through a central counterparty.','Zentrales Clearing ist eine andere Rechts- und Risikostruktur.']
 ],['Der Agent kann operative Aufgaben übernehmen, ohne zum wirtschaftlichen Kreditgeber zu werden.','Gegenpartei, Preisrisiko und Vertragsdurchsetzung bleiben prüfbar.'],'triparty'),
 q('34','practice','b','During a fixed-rate repo, the collateral’s price falls. Which statement is most accurate?',[
 ['The price change may affect margin requirements, while the agreed repo interest remains governed by its own cash and time terms.','Sicherheitenmarktwert und fest vereinbarte Cashverzinsung sind getrennt.'],
 ['The security’s price automatically becomes the repo repurchase price.','Dies ersetzt die vertragliche Cashforderung durch eine andere Wertgröße.'],
 ['The full haircut is automatically paid again as interest every day.','Haircut ist kein täglicher Zinsaufschlag.']
 ],['Ein Margintransfer kann zusätzlich erforderlich sein, ändert aber den beschriebenen Festzins nicht automatisch.','Ein Sicherheitenkupon benötigt wiederum seine eigene Vertragsbehandlung.'],'repo-interest'),
 q('35','practice','a b','A borrower funds a multi-year securities position with an overnight repo. It should most directly assess:',[
 ['whether the repo can be renewed and on what future rate, haircut and collateral terms.','Der heutige Vertrag fixiert nicht automatisch jede künftige Tagesfinanzierung.'],
 ['only today’s repo rate because it guarantees the same terms for the full asset life.','Der Zusammenhang zwischen Laufzeiten wird unzulässig übergangen.'],
 ['whether an overnight agreement removes all need to repay cash.','Gerade der nahe Rückkauf schafft einen Zahlungstermin.']
 ],['Term Repo und Open Repo folgen anderen vereinbarten Fristen und Beendigungsregeln.','Kurzer Vertrag ist kein Synonym langfristig gesicherter Finanzierung.'],'repo-terms'),
 q('36','practice','b','The New York Fed’s ON RRP description says the Desk sells securities and agrees to repurchase them. A student should infer that:',[
 ['the Desk receives cash initially; the specific operations label must be read together with its stated perspective.','Die tatsächlich angegebenen Cashpfeile werden nicht wegen des Namens umgedreht.'],
 ['the Desk must pay cash initially because every use of “reverse repo” is identical to the corporate buyer convention.','Die Quelle verwendet eine ausdrücklich besondere Operationsbenennung.'],
 ['any non-financial corporation automatically has identical access to this central-bank facility.','Programmberechtigung folgt eigenen Bedingungen.']
 ],['Im gewöhnlichen Corporate-Beispiel nennt der Wertpapierkäufer seine Cashanlage Reverse Repo.','Ein spezieller Marktname ersetzt keine Prüfung der tatsächlichen Geschäfte.'],'repo-terms'),
 q('37','practice','a b','A company needs exactly 90 million of repo cash. The haircut is 5% of collateral market value. Required initial collateral is closest to:',[
 ['94.736842 million.','Neunzig Mio. werden durch die Finanzierungsquote 0,95 geteilt.'],
 ['94.5 million.','Dies addiert fünf Prozent des Cashbetrags statt den richtigen Nenner aufzulösen.'],
 ['85.5 million.','Dies wäre der Cashvorschuss auf neunzig Mio. Sicherheiten.']
 ],[F('V=90/0{,}95\\approx94{,}736842','Gesuchter Sicherheitenwert und gegebener Nettobedarf werden getrennt.',[['V','Erforderlicher Marktwert, in Millionen.']]),'Der direkte Repo-Satz allein sagt noch nicht, ob genug freie Sicherheit vorhanden ist.'],'comparison'),
 q('38','practice','a b','Only 90 million of eligible unencumbered collateral is available. A repo quote applies a 5% haircut. Maximum initial cash from that collateral is:',[
 ['85.5 million.','Cash ist 95 Prozent des lieferbaren Bestandswerts.'],
 ['90 million.','Dies ignoriert den Abschlag.'],
 ['94.736842 million.','Dies wäre der benötigte Sicherheitenwert für neunzig Mio. Cash statt das Ergebnis hier.']
 ],[F('L=90\\cdot0{,}95=85{,}5','Lieferbare Menge begrenzt die Finanzierung trotz attraktivem Satz.',[['L','Anfangscash, in Millionen.']]),'Ein Bedarf neunzig Mio. bleibt damit um 4,5 Mio. unvollständig gedeckt.'],'comparison'),
 q('39','practice','a b','An investor earns a bond coupon rate above its repo financing rate. This difference alone:',[
 ['does not establish a riskless profit, because price changes, different cash bases, collateral funding and rollover terms still matter.','Kupon und Repo-Satz können auf unterschiedliche Beträge wirken; weitere Risiken bleiben.'],
 ['guarantees that the bond price cannot fall.','Finanzierungssatz und Marktpreis sind unterschiedliche Ebenen.'],
 ['means the haircut is permanently received as income.','Der nicht finanzierte Wertanteil ist kein sicherer Ertrag.']
 ],['Ein vollständiger Trade benötigt Vermögenscashflows und Finanzierungscashflows.','Besicherte Finanzierung ist keine umfassende Ertragsgarantie.'],'repo-use'),
 q('40','practice','c','Which claim about investment-grade and high-yield corporate funding is most defensible?',[
 ['Credit classification informs funding conditions, but security, seniority, maturity and call rights still require instrument-specific review.','Bonität ist keine vollständige Liste identischer Vertragsmerkmale.'],
 ['Every high-yield bond is secured and every investment-grade bond is unsecured.','Das ist keine Definition der Ratingklassen.'],
 ['High-yield debt must always have lower interest-rate sensitivity than every investment-grade bond.','Duration hängt unter anderem von Zahlungsstruktur und Laufzeit ab.']
 ],['Typische Marktunterschiede werden von zwingenden Definitionsmerkmalen getrennt.','Der konkrete rechtliche Anspruch bleibt maßgeblich.'],'credit-class'),
 q('41','practice','c','A matched benchmark yield is 3% and a corporate bond’s quoted yield spread is 5 percentage points. Its comparison yield is:',[
 ['8%.','Benchmark und in gleicher Konvention definierter Spread werden addiert.'],
 ['5%.','Das lässt den Benchmarkanteil weg.'],
 ['2%.','Das zieht den Spread fälschlich vom Benchmark ab.']
 ],[F('y=3\\%+5\\%=8\\%','Die Rechenzerlegung ist kein zugesagter tatsächlicher Mehrertrag.',[['y','Versprochener Vergleichsyield.']]),'Liquidität, Optionen und andere Vergleichsunterschiede können im Restaufschlag enthalten sein.'],'yield-parts'),
 q('42','practice','c','Initially a high-yield issuer’s benchmark is 3% and its spread is 5 percentage points. The benchmark falls by 1 percentage point but the spread rises by 3 percentage points. Its new comparison yield is:',[
 ['10%.','Neuer Benchmark zwei Prozent plus neuer Spread acht Prozentpunkte.'],
 ['7%.','Dies berücksichtigt nur den Benchmarkrückgang.'],
 ['8%.','Dies hält den gesamten alten Yield unverändert.']
 ],[F('y=(0{,}03-0{,}01)+(0{,}05+0{,}03)=0{,}10=10\\%','Zinsrückgang und Ausweitung des Kredit-/Restaufschlags wirken gegeneinander.',[['y','Neuer Vergleichsyield, erst dezimal und dann in Prozent angegeben.']]),'Für eine neue Pari-Emission kann die Finanzierung dadurch trotz fallender Benchmark teurer werden.'],'yield-shocks'),
 q('43','practice','c','An investment-grade comparison yield starts at a 3% benchmark plus a 1 percentage point spread. The benchmark falls by 1 percentage point and the spread increases by 0.5 percentage points. The new yield is:',[
 ['3.5%.','Zwei Prozent Benchmark plus 1,5 Prozentpunkte Spread.'],
 ['4.5%.','Dies berücksichtigt die Spreadänderung, aber nicht den Benchmarkrückgang.'],
 ['2.5%.','Dies würde den Spread statt ihn zu erhöhen verringern.']
 ],[F('y=(0{,}03-0{,}01)+(0{,}01+0{,}005)=0{,}035=3{,}5\\%','Beide Änderungen werden konsistent addiert.',[['y','Neuer Vergleichsyield, erst dezimal und dann in Prozent angegeben.']]),'Die andere Spreadreaktion erklärt den Unterschied zum HY-Fall.'],'yield-shocks'),
 q('44','practice','c','An existing 100 million fixed-rate bond pays an 8% annual coupon and has no rate-reset clause. Its market yield rises to 10%. Its next unchanged full-year contractual coupon is:',[
 ['8 million.','Der bestehende feste Kupon bleibt acht Prozent des Nominals.'],
 ['10 million.','Das wäre ein anderer Kupon, etwa bei neuer Pari-Schuld unter zusätzlichen Annahmen.'],
 ['2 million.','Dies ist die Yieldänderung mal Nominal, nicht die vereinbarte Zahlung.']
 ],[F('C=100\\cdot0{,}08=8','Marktrendite ändert den Preis, nicht automatisch diesen festen Vertragskupon.',[['C','Vertraglicher Jahreskupon, in Millionen.']]),'Eine tatsächliche Floaterklausel würde einen anderen Zahlungsplan schaffen.'],'yield-shocks'),
 q('45','practice','c','A one-year zero promises 100. Default probability is 10%; payment is 40 in default and 100 otherwise. Expected end cash is:',[
 ['94.','Neunzig Prozent mal hundert plus zehn Prozent mal vierzig.'],
 ['100.','Das ist nur der volle versprochene Betrag.'],
 ['90.','Dies unterstellt fälschlich null Rückfluss im Ausfall.']
 ],[F('\\mathbb E[C]=0{,}9\\cdot100+0{,}1\\cdot40=94','Die Recovery ersetzt die volle Zahlung im Ausfallzustand.',[['\\mathbb E[C]','Erwarteter Endcashflow.'],['C','Zustandsabhängige Endzahlung.']]),'Die Annahmen sind eine eigene Zustandsrechnung, keine aus einem Spread geschätzte Wahrscheinlichkeit.'],'expected'),
 q('46','practice','c','A one-year zero costs 90 and has expected end cash of 94 under stated real-world probabilities. There are no other payments. Its expected simple holding-period return is closest to:',[
 ['4.444444%.','Vier erwartete Geldeinheiten Zuwachs werden durch den Kaufpreis neunzig geteilt.'],
 ['11.111111%.','Das ist der versprochene Yield bei voller Zahlung hundert.'],
 ['4%.','Das verwendet fälschlich hundert statt den Kaufpreis als Nenner.']
 ],[F('\\mathbb E[R]=94/90-1\\approx4{,}444444\\%','Promised Yield und erwartete Zustandsrendite sind verschiedene Größen.',[['\\mathbb E[R]','Erwartete einfache Einjahresrendite.'],['R','Zustandsabhängige Haltedauerrendite.']]),'Angemessene Bewertung erfordert zusätzlich eine konsistente Risikobeurteilung.'],'expected'),
 q('47','practice','c','An incurrence covenant and a maintenance covenant are most accurately distinguished by:',[
 ['a test associated with a specified proposed action versus an ongoing or periodic compliance obligation, as the contract defines them.','Auslöser und Prüfzeitpunkt werden im Vertrag gelesen.'],
 ['investment-grade versus high-yield status alone, with no need to read the agreement.','Die Bonitätsklasse bestimmt diese Rechtsbegriffe nicht allein.'],
 ['whether a bond can ever have a market price.','Das ist kein Merkmal der Covenant-Unterscheidung.']
 ],['Schutz, Handlungsspielraum, Schwellen und Rechtsfolgen gehören zur Finanzierungsanalyse.','Häufige Marktmuster werden nicht zu universellen Vertragsregeln gemacht.'],'credit-terms'),
 q('48','practice','c','A negative pledge in a corporate debt agreement by itself:',[
 ['does not establish an already perfected security interest in specified assets.','Eine Einschränkung künftiger Besicherung ist nicht selbst die Bestellung einer gegenwärtigen Sicherheit.'],
 ['means the creditor already owns every asset of the issuer.','Das erweitert den Anspruch ohne entsprechende Vereinbarung.'],
 ['guarantees full recovery regardless of asset values.','Vertragsschutz beseitigt Wert- und Durchsetzungsrisiken nicht.']
 ],['Rang, Haftungseinheit, Sicherheiten und Verhaltensbeschränkungen werden getrennt geprüft.','Die genaue Klausel kann Ausnahmen und Bedingungen enthalten.'],'credit-terms'),
 q('49','practice','c','A company may call 100 million debt at 103 million. Old annual interest is 8 million; replacement principal remains 100 million at annual interest of 7 million. The 3 million premium is paid from cash. Ignoring discounting, taxes and other costs, the premium equals how many years of annual interest savings?',[
 ['3 years.','Drei Mio. Einmalprämie geteilt durch eine Mio. jährliche Ersparnis.'],
 ['1 year.','Das würde die ganze Callprämie mit nur einer Jahresersparnis verwechseln.'],
 ['103 years.','Der gesamte Rückkaufpreis ist nicht die zusätzliche Prämie.']
 ],[F('\\tau=(103-100)/(8-7)=3','Dies ist nur der ausdrücklich vereinfachte undiscountierte Vergleich.',[['\\tau','Jahre bis die isolierte Prämie durch nominale Zinsersparnisse erreicht ist.']]),'Eine echte Refinanzierungsentscheidung bewertet alle Cashflows und Vertragsrechte.'],'callable'),
 q('50','practice','a c','An issuer must repay 70 million principal next year. It has a 10 million free cash reserve and will generate 20 million after operating needs AND all interest. With no other source, additional funding required is:',[
 ['40 million.','Siebzig Mio. Tilgung abzüglich zehn Mio. Reserve und zwanzig Mio. freier Mittel.'],
 ['50 million.','Dies ignoriert die angegebene freie Reserve.'],
 ['0 million.','Das unterstellt nicht vorhandene Finanzierungsquellen.']
 ],[F('D=\\max(70-10-20,0)=40','Bereits berücksichtigte Zinsen werden nicht noch einmal abgezogen.',[['D','Zusätzlicher Finanzierungsbedarf, in Millionen.']]),'Gleiche Gesamtschuld kann bei anderen Tilgungsterminen einen anderen nahen Engpass erzeugen.'],'maturity-wall'),
 q('a1','mock-a','a b c','A financial institution must repay 55 million CP today and has 5 million free cash. A NEW repo can deliver securities worth 50 million against a 10% haircut on collateral value. No other funding is available. For later refinancing, a proposed new HY bond would be issued at par with a 2% benchmark plus 6 percentage points spread and matching annual coupon. Which statement is correct?',[
 ['The repo supplies 45 million, leaving a 5 million funding gap; the proposed new bond’s comparison yield and coupon rate are 8%.','Repo-Cash ist fünfzig mal 0,90; heutiger Fehlbetrag bleibt fünf. Neue Pari-Konditionen ergeben zwei plus sechs Prozent.'],
 ['The repo supplies 50 million, fully closing the gap; the new bond’s yield is 6%.','Dies ignoriert den Haircut und lässt beim Yield den Benchmark weg.'],
 ['The repo supplies 55 million and creates a cash surplus; the new bond’s yield is guaranteed realized investor return.','Ein Haircut erhöht Cash nicht; versprochener Yield ist zudem keine Ertragsgarantie.']
 ],[F('L=50(1-0{,}10)=45,\\quad D=55-5-45=5,\\quad y=2\\%+6\\%=8\\%','Kurzfristige Quelle, heutige Zahlungslücke und langfristige neue Konditionen bleiben getrennt.',[['L','Neues Repo-Cash, in Millionen.'],['D','Heute ungedeckter Betrag, in Millionen.'],['y','Vergleichsyield der vorgeschlagenen neuen Pari-Anleihe.']]),'Ein vorhandenes Rating oder günstiger Plan für später schließt die heutige Cashlücke nicht automatisch.'],'workflow'),
 q('b1','mock-b','a b c','A company must repay 45 million CP, has 10 million free cash and 15 million of genuinely drawable unused backup. In a SEPARATE existing repo, principal exposure remains 76 million, collateral is now worth 72 million, and the contract requires a 10% haircut; margin is posted in additional securities and ignores interest. Its existing 100 million fixed-rate bond has a 6% coupon and no reset, while market yield is now 9%. Which assessment is correct?',[
 ['The CP cash gap is 20 million, the repo needs 12.444444 million of additional collateral value, and the existing bond’s annual coupon remains 6 million.','Cashlücke, Sicherheitenbedarf und fester Vertragskupon werden jeweils auf ihrer richtigen Basis gerechnet.'],
 ['The CP cash gap is zero, the repo needs only 4 million collateral, and the fixed coupon automatically rises to 9 million.','Die freie Linie deckt die gesamte Fälligkeit nicht; vier Mio. sind nur ungedecktes Principal, nicht das Haircutziel.'],
 ['The CP cash gap is 20 million, the repo need is 12.444444 million, and this automatically repays the original repo principal by that amount.','Der Vertrag fordert zusätzliche Wertpapiere; das ist keine automatische Cashschuldtilgung.']
 ],[F('D=45-10-15=20,\\quad M=76/0{,}90-72\\approx12{,}444444,\\quad C=100\\cdot0{,}06=6','Die drei Rechnungen betreffen verschiedene Ansprüche und dürfen nicht gegeneinander verschwinden.',[['D','Zusätzlicher Cashbedarf für die CP-Fälligkeit, in Millionen.'],['M','Zusätzlicher Sicherheitenmarktwert im bestehenden Repo, in Millionen.'],['C','Weiter vereinbarter Jahreskupon der bestehenden Festzinsschuld, in Millionen.']]),'Die Sicherheitenlieferung beschafft nicht von selbst das zur CP-Tilgung fehlende Cash.'],'workflow')
];
