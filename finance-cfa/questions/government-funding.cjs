const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,solution,section)=>Q('gfu-'+id,'government-funding','bonds',pool,los,stem,options,0,solution,{section});
module.exports=[
 q('01','practice','a','A public-sector bond is most appropriately classified initially by identifying:',[
 ['the actual legal obligor, repayment sources, currency and any explicit guarantee.','Diese Eigenschaften bestimmen den Anspruch und seine Finanzierungsquelle.'],
 ['only whether its name contains the word government.','Ein Name schafft keine zusätzliche Haftung oder Cashquelle.'],
 ['only the coupon, because all public issuers have the same tax authority.','Regionen, Agencies und Institutionen besitzen nicht automatisch identische Befugnisse.']
 ],['Emittentengruppe, öffentlicher Zweck und Garantie werden getrennt.','Erst darauf bauen Preis-, Rating- und Liquiditätsvergleiche auf.'],'map'),
 q('02','practice','a','A sovereign’s authority to levy taxes most accurately indicates:',[
 ['a potential source of revenue, subject to economic, legal, administrative and political conditions.','Steuerbefugnis ist nicht bereits vollständig verfügbares Cash.'],
 ['an unconditional guarantee of full timely payment in every currency.','Zahlungswährung, Fähigkeit und Bereitschaft bleiben relevant.'],
 ['that outstanding debt cannot ever require refinancing.','Fällige Verträge benötigen unabhängig von Steuerhoheit Zahlungen.']
 ],['Eine Steuerbasis und eine kurzfristige Liquiditätsreserve sind verschiedene Größen.','Institutionelle Besonderheiten unterscheiden die Analyse von einem normalen Unternehmensumsatz.'],'sovereign'),
 q('03','practice','a','A government has cash non-interest spending of 108 million and non-borrowing receipts of 100 million. Its cash PRIMARY deficit is:',[
 ['8 million.','Nichtzinsausgaben minus Einnahmen.'],
 ['12 million.','Das würde zusätzliche hier nicht zur Primärgröße gehörende Zinsen einschließen.'],
 ['208 million.','Ausgaben und Einnahmen werden nicht addiert.']
 ],[F('D^P=108-100=8','Die Primärgröße schließt den Zins bewusst aus.',[['D^P','Primärdefizit, in Millionen.']]),'Eine positive Zahl bedeutet in dieser Konvention Ausgabenüberschuss.'],'cash-need'),
 q('04','practice','a','A cash primary deficit is 8 million and cash interest is 4 million. The overall cash deficit, excluding principal redemptions, is:',[
 ['12 million.','Der Zins kommt einmal zum Primärdefizit hinzu.'],
 ['4 million.','Das ließe den Primärfehlbetrag weg.'],
 ['8 million.','Das wäre weiterhin die Größe ohne Zins.']
 ],[F('D=8+4=12','Gesamtdefizit und Primärdefizit werden nicht gleichgesetzt.',[['D','Gesamtes Cashdefizit einschließlich Zins, in Millionen.']]),'Kapitalrückzahlung wird für den Finanzierungsbedarf gesondert berücksichtigt.'],'cash-need'),
 q('05','practice','a','The overall cash deficit INCLUDING interest is 12 million, principal redemptions are 30 million and desired cash reserve growth is 3 million. With no other transactions, required NET financing cash is:',[
 ['45 million.','Zwölf plus dreißig plus drei; Zins ist bereits enthalten.'],
 ['15 million.','Das ist hier die Pari-Nettozunahme der Schuld, nicht der volle neue Cashbedarf.'],
 ['49 million.','Dies könnte einen bereits enthaltenen Vier-Mio.-Zins doppelt zählen.']
 ],[F('B=12+30+3=45','Haushaltsfehlbetrag, Kapitalersatz und Reservebewegung werden zusammengeführt.',[['B','Erforderlicher neuer Nettofinanzierungszufluss, in Millionen.']]),'Bei Ausgabeabschlag oder Gebühren kann das notwendige Nominal abweichen.'],'cash-need'),
 q('06','practice','a','A government issues 45 million NEW face value at par without fees and redeems 30 million face value. Ignoring all other debt adjustments, outstanding face value increases by:',[
 ['15 million.','Neues Nominal abzüglich zurückgezahltem Nominal.'],
 ['45 million.','Das ist die Bruttoausgabe und lässt ersetzte alte Schuld weiter bestehen.'],
 ['75 million.','Tilgung wird mit falschem Vorzeichen addiert.']
 ],[F('\\Delta N=45-30=15','Bruttoaufnahme und Bestandsänderung beantworten verschiedene Fragen.',[['\\Delta N','Nettoänderung des ausstehenden Schuldnominals, in Millionen.']]),'Ein hoher Ersatzbedarf kann trotz kleinerer Nettozunahme bestehen.'],'gross-net'),
 q('07','practice','a b','A government needs 45 million NET cash. A new bond is issued on a coupon date at 99 per 100 face value and issuance costs are 0.3 million. Required new face value is closest to:',[
 ['45.757576 million.','Die Brutto-Cashzahlung muss 45,3 Mio. betragen; durch 0,99 teilen.'],
 ['45 million.','Das ignoriert sowohl Abschlag als auch Kosten.'],
 ['44.55 million.','Das multipliziert den Bedarf mit dem Preisfaktor statt das erforderliche Nominal aufzulösen.']
 ],[F('N=(45+0{,}3)/0{,}99\\approx45{,}757576','Nur nach Abzug der Kosten bleiben 45 Mio. nutzbar.',[['N','Erforderliches neues Nominal, in Millionen.']]),'Keine Stückzinsen sind hier gegeben, weil am Kupontermin ausgegeben wird.'],'proceeds'),
 q('08','practice','a b','Newly issued face value is 45.757576 million and 30 million old face value is redeemed. There are no other nominal adjustments. The net increase in face value is closest to:',[
 ['15.757576 million.','Beide Beträge werden auf derselben Nominalbasis verrechnet.'],
 ['15 million.','Das wäre der andere gebührenfreie Pari-Fall.'],
 ['45.757576 million.','Das ignoriert die Rückzahlung alter Schuld.']
 ],[F('\\Delta N=45{,}757576-30=15{,}757576','Cashbedarf und Nominalzuwachs sind bei Abschlag nicht automatisch identisch.',[['\\Delta N','Nettozunahme Nominal, in Millionen.']]),'Die genaue Ausgabe- und Tilgungsbasis wird angegeben.'],'proceeds'),
 q('09','practice','a','An overall cash deficit is 12 million and principal redemptions are 30 million. Instead of building cash, the government CONSUMES 3 million of its reserve. With no other transactions, net new financing cash required is:',[
 ['39 million.','Reserveverbrauch vermindert den neuen Bedarf: zwölf plus dreißig minus drei.'],
 ['45 million.','Dies hätte die Reserve fälschlich aufgebaut statt verwendet.'],
 ['9 million.','Das ignoriert die fällige Kapitaltilgung.']
 ],[F('B=12+30-3=39','Die Richtung der Reservebewegung ist Teil der Cashidentität.',[['B','Erforderlicher Nettofinanzierungszufluss, in Millionen.']]),'Bestandsveränderung der Reserve und Haushaltsausgabe sind unterschiedliche Ebenen.'],'cash-need'),
 q('10','practice','a b','Two governments have identical debt face value. One must redeem 70% next year and the other 25%. This difference most directly concerns:',[
 ['the concentration of near-term replacement funding needs, rather than total debt alone.','Fälligkeiten bestimmen, wann Cash oder neue Zusagen gebraucht werden.'],
 ['proof that the first government must have a lower market yield.','Eine solche Preisfolge ist nicht aus den Anteilen allein ableitbar.'],
 ['proof that both governments have identical annual cash obligations.','Gleiche Gesamtschuld bedeutet gerade keinen gleichen Terminplan.']
 ],['Zinsen, Reserven und freie Einnahmen werden ergänzend geplant.','Eine durchschnittliche Laufzeit kann eine einzelne große Spitze verdecken.'],'maturity'),
 q('11','practice','a','A government rolls 100 million par principal annually for five years. It pays interest separately from revenue: 2% in year one and 6% in each of the next four years. No interest is capitalized and all rollovers succeed. Total nominal interest paid is:',[
 ['26 million.','Zwei Mio. im ersten Jahr und jeweils sechs Mio. in vier weiteren Jahren.'],
 ['10 million.','Das unterstellt unverändert zwei Prozent in allen Jahren.'],
 ['20 million.','Das ist die Zinscash-Summe einer anderen festen Vier-Prozent-Fünfjahresschuld.']
 ],[F('I=100(0{,}02+4\\cdot0{,}06)=26','Neue Jahreskonditionen wirken auf neue Finanzierung; keine Kapitalisierung ist gegeben.',[['I','Summe nominaler Jahreszinsen, in Millionen.']]),'Dies ist keine Barwertrechnung und setzt erfolgreiche Erneuerung voraus.'],'cost-risk'),
 q('12','practice','a','A fixed 100 million USD debt payment costs 0.90 home-currency units per USD initially and 1.10 later. Its home-currency equivalent increases by closest to:',[
 ['22.222222%.','Der Gegenwert steigt von neunzig auf 110; zwanzig werden durch neunzig geteilt.'],
 ['20%.','Dies verwendet den USD-Nominalbetrag als falschen Nenner der Heimatwertänderung.'],
 ['0%.','Die USD-Zahlung bleibt gleich, aber nicht ihr Heimatwährungsgegenwert.']
 ],[F('R=110/90-1\\approx22{,}222222\\%','Der Quotierungsrichtung Heimatwährung je USD wird gefolgt.',[['R','Relative Änderung des Heimatwährungsgegenwerts.']]),'Ein Anleger kann seinerseits eine andere Rechenwährung und andere Risiken haben.'],'currency'),
 q('13','practice','a','A government pays 100 in full after two years. Inflation is 5% in EACH year. The payment’s purchasing power in today’s price units is closest to:',[
 ['90.702948.','Beide jährlichen Preisfaktoren werden herausgerechnet.'],
 ['95.238095.','Das würde nur ein Jahr Inflation berücksichtigen.'],
 ['110.25.','Dies erhöht den Betrag mit Inflation statt seine heutige Kaufkraft zu berechnen.']
 ],[F('C=100/1{,}05^2\\approx90{,}702948','Vollständige Nominalzahlung und unveränderte reale Kaufkraft sind verschiedene Aussagen.',[['C','Zahlung in heutigen Kaufkrafteinheiten.']]),'Ein indexierter Vertrag hätte andere Cashflows.'],'nominal-real'),
 q('14','practice','a','The SEC’s US municipal guidance indicates that a “general obligation” label by itself:',[
 ['does not prove unlimited taxing authority or a security interest in all public assets.','GO-Strukturen und Steuerbefugnisse unterscheiden sich; Unterlagen bleiben maßgeblich.'],
 ['guarantees identical tax powers for every local issuer worldwide.','US-Begriffe sind keine weltweite Einheitsregel.'],
 ['means payment comes exclusively from one specified project’s toll revenue.','Das beschreibt eine andere Quelle als den allgemeinen GO-Ausgangspunkt.']
 ],['Verpflichteter, genannte Mittel und rechtliche Grenzen werden gelesen.','Ein öffentlicher Name schafft keine zusätzliche Garantie.'],'general-obligation'),
 q('15','practice','a','A region receives central-government transfers. This fact alone establishes:',[
 ['an identified possible revenue source, not an automatic full central-government guarantee of every regional bond.','Zuflussmechanismus und direkter Garantieanspruch sind getrennt.'],
 ['that the central government is the direct obligor on all regional securities.','Dafür braucht es einen entsprechenden tatsächlichen Anspruch.'],
 ['that no timing or conditionality of the transfers matters.','Gerade diese Bedingungen beeinflussen verfügbare Zahlungen.']
 ],['Eigene Steuern, Transfers, Gebühren und Garantien sind verschiedene Finanzierungselemente.','Die relevante Rechts- und Vertragsebene wird nicht übersprungen.'],'nonsovereign'),
 q('16','practice','a','A hypothetical revenue-bond project receives 100 million cash revenue and pays 60 million operating costs before debt service. With no other deductions, cash available BEFORE debt service is:',[
 ['40 million.','Umsatz minus vorgelagerte Betriebsauszahlungen.'],
 ['100 million.','Das wäre Bruttoumsatz ohne die angegebenen Kosten.'],
 ['20 million.','Das wäre im eigenen Zwanzig-Mio.-Schuldendienstfall der Überschuss danach, nicht der gesuchte Betrag davor.']
 ],[F('C=100-60=40','Die Zahlungsreihenfolge wird ausdrücklich beachtet.',[['C','Cash vor Schuldendienst, in Millionen.']]),'Investitionen, Steuern oder weitere Vorränge würden gegebenenfalls zusätzliche Abzüge verlangen.'],'project-case'),
 q('17','practice','a','Project cash revenue is 100 million and operating cash costs are 60 million. Interest of 8 million and principal of 12 million are due. There are no other deductions. The defined DSCR is:',[
 ['2.','Vierzig Mio. verfügbarer Cashflow geteilt durch zwanzig Mio. gesamten Schuldendienst.'],
 ['5.','Dies würde den Bruttoumsatz statt verfügbarer Mittel verwenden.'],
 ['3.333333.','Dies teilt durch Tilgung allein und lässt den Zins weg.']
 ],[F('\\mathrm{DSCR}=(100-60)/(8+12)=2','Zins und Kapital werden zusammen gedeckt.',[['\\mathrm{DSCR}','Schuldendienstdeckungsquote des gegebenen Falls.']]),'Die eigene Definition muss mit einer tatsächlichen Vertragsdefinition abgeglichen werden.'],'project-case'),
 q('18','practice','a','Project cash revenue falls to 70 million while operating costs remain 60 million. Interest is 8 million and principal is 12 million. With no other sources, the defined DSCR becomes:',[
 ['0.5.','Zehn Mio. verbleiben für zwanzig Mio. Schuldendienst.'],
 ['1.5.','Dies überschätzt die nach festen Betriebskosten verbleibenden Mittel.'],
 ['3.5.','Dies verwendet Bruttoumsatz statt verfügbarem Cashflow.']
 ],[F('\\mathrm{DSCR}=(70-60)/(8+12)=0{,}5','Nur die Einnahme wird verändert, die vorgelagerten Kosten bleiben fest.',[['\\mathrm{DSCR}','Deckung im beschriebenen Stresszustand.']]),'Es fehlen zehn Mio. für die volle laufende Zahlung.'],'project-case'),
 q('19','practice','a','Operating cash costs are fixed at 60 million and annual debt service is 20 million. No other deductions or reserves apply. Cash revenue required for DSCR exactly equal to one is:',[
 ['80 million.','Betriebskosten plus voller laufender Schuldendienst.'],
 ['60 million.','Dann bliebe kein Cash für den Schuldendienst.'],
 ['20 million.','Dies deckt nicht einmal die angegebenen Betriebskosten.']
 ],[F('R=60+20=80','Bei dieser Einnahme bleiben nach Betrieb genau zwanzig Mio.',[['R','Erforderlicher Cashumsatz, in Millionen.']]),'Eine Deckung eins ist hier eine Rechenschwelle und keine behauptete universelle zulässige Covenant-Grenze.'],'project-case'),
 q('20','practice','a','Debt of 100 million receives 40 million from the debtor. A valid, fulfilled guarantee pays 50% of the remaining unpaid amount, capped at 30 million. The guarantee payment is:',[
 ['30 million.','Fünfzig Prozent des Fehlbetrags sechzig entsprechen dem Höchstbetrag dreißig.'],
 ['50 million.','Dies wendet den Prozentsatz auf das falsche ursprüngliche Nominal an und überschreitet den Cap.'],
 ['60 million.','Das wäre volle Deckung des Restbetrags statt der vereinbarten Teilgarantie.']
 ],[F('G=\\min(0{,}5(100-40),30)=30','Bemessungsgrundlage und Cap werden zusammen angewendet.',[['G','Tatsächliche Garantiezahlung nach den eigenen Regeln, in Millionen.']]),'Die Rechnung setzt erfüllte Bedingungen und Zahlung des Garanten voraus.'],'guarantee'),
 q('21','practice','a','An investor’s 100 million claim receives 40 million from the debtor and 30 million from a valid fulfilled guarantee. Ignoring other recoveries and costs, total cash recovery is:',[
 ['70 million.','Die zwei tatsächlich erhaltenen Beträge werden addiert.'],
 ['100 million.','Das setzt einen nicht zugesagten zusätzlichen vollen Ausgleich voraus.'],
 ['30 million.','Dies ignoriert die bereits erfolgte Schuldnerzahlung.']
 ],[F('C=40+30=70','Eine Teilgarantie beseitigt nicht automatisch den ganzen Restverlust.',[['C','Gesamter Cashrückfluss, in Millionen.']]),'Dreißig Mio. bleiben in dieser isolierten Endrechnung ungedeckt.'],'guarantee'),
 q('22','practice','a','A government owns an agency that issues its own bonds. Government ownership alone means:',[
 ['an ownership relationship, while the scope of any bond guarantee must still be established.','Eigentum und einzelne Haftungszusage sind unterschiedliche Rechtsbeziehungen.'],
 ['every agency bond is automatically identical to direct sovereign debt.','Das würde ohne Prüfung einen anderen Schuldner verpflichten.'],
 ['the agency can never issue through a syndicate.','Eigentumsart legt das Emissionsverfahren nicht allein fest.']
 ],['Öffentlicher Auftrag, Unterstützungserwartung und ausdrückliche Garantie werden getrennt.','Andere Rechte können andere Preise und Liquidität tragen.'],'agency'),
 q('23','practice','a','Callable capital of a supranational institution is most accurately understood as:',[
 ['capital commitments that may be called under the institution’s conditions, rather than cash already fully available.','Abrufbedingungen und Verfahren sind Teil des Schutzmechanismus.'],
 ['a bondholder’s unrestricted right to collect the full bond amount directly from any member government.','Institutionelle Kapitalunterstützung schafft nicht automatisch diesen individuellen Anspruch.'],
 ['an issuer’s right to redeem every outstanding bond at any moment for no cash.','Das verwechselt Kapitalzusagen mit einem anderen vertraglichen Call-Recht.']
 ],['Bereits eingezahltes Kapital und noch abrufbare Zusagen haben unterschiedliche Funktionen.','Auch eingezahltes Kapital kann bereits in Vermögenswerten gebunden sein.'],'supranational'),
 q('24','practice','a','IBRD Article IV, Section 9 most directly supports which conclusion?',[
 ['An IBRD security is not an obligation of a government unless that is expressly stated on the security.','Die tatsächliche Regel trennt Institutionsschuld und direkte Regierungsverpflichtung.'],
 ['Every holder has an unconditional individual claim against every member’s tax revenue.','Dies ist gerade keine zulässige Folgerung aus Mitgliedschaft.'],
 ['Supranational institutions can never raise market debt.','Die Regel betrifft die Natur eines ausgegebenen oder garantierten Instruments, nicht ein Ausgabeverbot.']
 ],['Kapitalunterstützung, eigene Vermögenswerte und rechtlicher Bondanspruch werden zusammen, aber nicht als identisch analysiert.','Das Beispiel wird auf die konkrete Institution begrenzt.'],'supranational'),
 q('25','practice','a','Compared with otherwise suitable longer fixed-rate funding, repeated short-maturity government borrowing most directly:',[
 ['requires earlier renewal of principal and exposes later funding terms to future market access and rates.','Kurze Frist verändert den Ersatzbedarf und die späteren Zusagen.'],
 ['guarantees lower total funding cost in every future rate path.','Der Anfangssatz legt spätere Konditionen nicht fest.'],
 ['eliminates all principal repayment dates.','Die kurzen Fälligkeiten schaffen gerade frühere Zahlungstermine.']
 ],['Ein zeitweiser Cashbedarf kann kurze Schuld sinnvoll machen.','Passung und Risiko werden dennoch ausdrücklich geprüft.'],'instruments'),
 q('26','practice','a','A government chooses between fixed-rate and floating-rate debt. The most accurate general comparison is:',[
 ['a contractual floating reset can transmit reference-rate changes to cash interest sooner, while an existing fixed coupon does not automatically reset.','Der Vertrag legt fest, welche Zahlung auf neue Sätze reagiert.'],
 ['all floating instruments remove credit, liquidity and refinancing risks.','Variabler Kupon ist keine umfassende Risikobeseitigung.'],
 ['every fixed coupon rises immediately whenever the market yield rises.','Marktrendite und fest vereinbarte Cashzahlung sind verschiedene Größen.']
 ],['Zinsbindung des Emittenten und Marktpreisrisiko des Anlegers werden getrennt.','Indexierung und Währung ergänzen weitere eigene Vertragsdimensionen.'],'instruments'),
 q('27','practice','a b','A student claims that governments must always issue at auction and corporations must always use syndication. The best assessment is:',[
 ['these are common patterns, but the issuer category does not impose that universal exclusive split.','Tatsächliche UK-Pläne enthalten etwa auch staatliche Syndizierungen und Tender.'],
 ['the claim is universally true regardless of jurisdiction or instrument.','Die Ausschließlichkeit ist nicht durch die Quellen gedeckt.'],
 ['neither governments nor corporations ever use intermediaries.','Beide Märkte können Intermediation verwenden.']
 ],['Verfahren und Schuldnerart sind unterschiedliche Vergleichsebenen.','Die Bedingungen einer konkreten Ausgabe entscheiden.'],'issuance'),
 q('28','practice','b','A primary-dealer designation by itself most accurately indicates:',[
 ['a market-specific intermediary role and associated rules, not a sovereign guarantee of that dealer’s obligations.','Zugang und Pflichten werden nicht mit staatlicher Haftung verwechselt.'],
 ['an unconditional right to buy every government bond at a fixed profitable price.','Emissions- und Marktrisiken verschwinden durch den Namen nicht.'],
 ['that all countries give every investor identical direct auction access.','Zugangswege sind ausdrücklich marktbezogen.']
 ],['Im UK-Beispiel ist GEMM-Zugang ein bestimmter Auktionsmechanismus.','Kundengebote und eigene Positionen verlangen weiterhin Konfliktbehandlung.'],'dealers'),
 q('29','practice','b','In a hypothetical PRICE auction for identical bonds, higher submitted prices are accepted first. This is consistent with:',[
 ['the issuer receiving more cash per unit of the same promised payments; for a normal fixed payment structure, yield moves inversely to price.','Preisrichtung und geforderte Renditerichtung sind entgegengesetzt.'],
 ['accepting the lowest price first because it provides the issuer the most cash.','Niedrigerer Preis liefert weniger Cash je Nominal.'],
 ['treating a higher price as necessarily a higher yield for the same cash flows.','Dies kehrt die normale Barwertbeziehung um.']
 ],['Bei Yield-Geboten wird daher andersherum nach der Renditerichtung sortiert.','Die konkrete Auktionsregel wird vor dem Rechnen genannt.'],'auction-rules'),
 q('30','practice','b','An auction offers 100 million face value and first allocates 10 million to accepted noncompetitive bids. Face value remaining for competitive allocation is:',[
 ['90 million.','Gesamtangebot abzüglich bereits vorrangig vergebener Menge.'],
 ['100 million.','Das würde die zuerst zugeteilte Gruppe nochmals verfügbar lassen.'],
 ['110 million.','NC-Zuteilung vergrößert das angekündigte Gesamtangebot nicht.']
 ],[F('Q_c=100-10=90','Das Competitive-Angebot wird aus dem Gesamtangebot abgeleitet.',[['Q_c','Für Competitive-Gebote verbleibendes Nominal, in Millionen.']]),'Diese Mengenregel gehört zum ausdrücklich eigenen Lehrfall.'],'allocation'),
 q('31','practice','b','Competitive supply is 90 million. Higher-price bids A for 30 million and B for 40 million are accepted in full. The next price group C bids 50 million. Required allocation to C is:',[
 ['20 million.','Nach dreißig und vierzig fehlen von neunzig noch zwanzig.'],
 ['50 million.','Das würde das verbleibende Angebot überschreiten.'],
 ['30 million.','Dies übersieht die bereits angenommene Gesamtmenge siebzig.']
 ],[F('Q_C=90-30-40=20','Grenzmenge wird nach den vorher angenommenen Geboten bestimmt.',[['Q_C','Tatsächlich an C vergebene Menge, in Millionen.']]),'Ein niedrigeres Gebot wird im eigenen Fall nicht mehr benötigt.'],'allocation'),
 q('32','practice','b','A marginal auction bidder requests 50 million and receives 20 million. Its fill fraction is:',[
 ['40%.','Zugewiesene Menge geteilt durch eigene gebotene Menge.'],
 ['20%.','Dies teilt möglicherweise durch das falsche gesamte Hundert-Mio.-Angebot.'],
 ['250%.','Dies verwendet den Kehrwert.']
 ],[F('a=20/50=40\\%','Die eigene Gebotsmenge ist der Nenner der Zuteilungsquote.',[['a','Anteil des marginalen Gebots, der angenommen wird.']]),'Diese Quote ist nicht der Yield und auch kein Anlagereturn.'],'allocation'),
 q('33','practice','b','An own uniform-price auction allocates 100 million face value at a common price of 99.80 per 100. There are no accrued interest or fees. Gross cash proceeds are:',[
 ['99.8 million.','Nominal mal vollständigem Preisfaktor.'],
 ['100 million.','Das verwechselt Nominal mit Kaufpreis.'],
 ['9,980 million.','Dies vergisst die Notierung je hundert.']
 ],[F('C=100\\cdot99{,}80/100=99{,}8','Der einheitliche Preis gilt für die gesamte zugeteilte Menge.',[['C','Brutto-Casherlös, in Millionen.']]),'Ein uniformer Preis sagt noch nichts über sichere zukünftige Anlegergewinne.'],'formats'),
 q('34','practice','b','Accepted competitive quantities are 30, 40 and 20 million at prices 100.50, 100.20 and 99.80 per 100. The face-value-weighted average accepted price is closest to:',[
 ['100.211111.','Die individuellen Cashbeträge ergeben 90,19 Mio. auf neunzig Mio. Nominal.'],
 ['100.166667.','Dies ist der ungewichtete Durchschnitt der drei Preisangaben.'],
 ['99.80.','Das ist der niedrigste angenommene Preis statt der gewichtete Durchschnitt.']
 ],[F('\\bar P=\\frac{30\\cdot100{,}50+40\\cdot100{,}20+20\\cdot99{,}80}{90}\\approx100{,}211111','Unterschiedliche Nominalmengen werden berücksichtigt.',[['\\bar P','Gewichteter Preis je hundert Nominal.']]),'Welche Gruppe diesen Durchschnitt zahlt, legt die eigene Zahlungsregel fest.'],'formats'),
 q('35','practice','b','An own multiple-price auction assigns 10 million noncompetitive face value at the accepted competitive weighted-average price 100.211111 per 100. Its noncompetitive gross payment is closest to:',[
 ['10.021111 million.','Zehn Mio. Nominal werden mit dem Preisfaktor 1,00211111 multipliziert.'],
 ['10 million.','Das ignoriert den Preis über pari.'],
 ['9.98 million.','Das wäre eine andere Uniform-Price-Regel bei Preis 99,80.']
 ],[F('C_{NC}=10\\cdot100{,}211111/100\\approx10{,}021111','Die Zuteilungsmenge bleibt gleich, die Zahlungsregel ist anders.',[['C_{NC}','Cashzahlung der NC-Gruppe, in Millionen.']]),'Dies ist eine explizite Annahme des eigenen Formats.'],'formats'),
 q('36','practice','b','With the SAME submitted bids, an own uniform-price auction raises 99.8 million. An own multiple-price format with its stated NC average-price rule raises 100.211111 million. The latter raises more cash by closest to:',[
 ['0.411111 million.','Die tatsächlichen Gesamterlöse werden voneinander abgezogen.'],
 ['0.211111 million.','Das vergleicht fälschlich mit hundert statt 99,8.'],
 ['0 million.','Gleiche Zuteilungsmenge erzwingt keinen gleichen bezahlten Preis.']
 ],[F('\\Delta C=100{,}211111-99{,}8=0{,}411111','Preisregel und Menge wirken gemeinsam auf Cash.',[['\\Delta C','Unterschied der Bruttoerlöse, in Millionen.']]),'Die Gebote wurden für diesen Vergleich ausdrücklich festgehalten.'],'formats'),
 q('37','practice','b','A fixed-bid example produces higher revenue under a multiple-price format than under uniform pricing. The most appropriate limitation is that:',[
 ['real bidders may change their strategies when the format changes, so the example does not prove universal revenue superiority.','Die festgehaltenen Gebote sind eine erklärende Vergleichsannahme.'],
 ['the result proves the same ranking for every future auction regardless of behavior.','Das erweitert den eigenen Rechenfall unzulässig.'],
 ['payment rules never affect cash proceeds.','Der gleiche Mengenfall zeigt gerade einen Unterschied der Zahlungen.']
 ],['Auktionsmechanik und strategische Reaktion sind zwei Analyseebenen.','Tatsächliche Marktregeln bleiben zusätzlich zu lesen.'],'formats'),
 q('38','practice','b','An explicitly TOTAL bid-to-cover measure includes 140 million competitive bids plus 10 million accepted noncompetitive bids, against 100 million total offered face value. Total bid-to-cover is:',[
 ['1.5.','150 Mio. erfasste Gebote geteilt durch hundert Mio. Gesamtangebot.'],
 ['1.4.','Dies lässt die ausdrücklich zum Zähler gehörende NC-Gruppe weg.'],
 ['1.0.','Das wäre hier angenommene Menge durch Angebot und nicht eingereichte Nachfrage.']
 ],[F('\\mathrm{BTC}=150/100=1{,}5','Die Definition legt das Mengenuniversum fest.',[['\\mathrm{BTC}','Cover nach der angegebenen Gesamtdefinition.']]),'Eine andere Kennzahl kann andere Gruppen erfassen.'],'cover'),
 q('39','practice','b','A measure includes ONLY 140 million competitive bids and the 90 million supply left for competitive allocation. This competitive-only cover is closest to:',[
 ['1.555556.','140 geteilt durch neunzig.'],
 ['1.5.','Das wäre die andere Gesamtdefinition 150 geteilt durch hundert.'],
 ['1.4.','Das mischt Competitive-Zähler mit Gesamtangebot.']
 ],[F('\\mathrm{BTC}_c=140/90\\approx1{,}555556','Zähler und Nenner werden konsistent auf die Competitive-Gruppe begrenzt.',[['\\mathrm{BTC}_c','Competitive-only Cover nach der eigenen Definition.']]),'Die unterschiedliche Zahl widerspricht dem Gesamt-Cover nicht.'],'cover'),
 q('40','practice','b','A high auction bid-to-cover ratio by itself:',[
 ['does not reveal all submitted prices or guarantee a profitable secondary-market price.','Menge allein beschreibt weder Gebotsqualität noch spätere Kurse.'],
 ['guarantees that every submitted bid received its full requested amount.','Eine überzeichnete Auktion kann gerade Kürzungen und Ablehnungen erfordern.'],
 ['means the issuer has no future interest or principal obligations.','Nachfrage entfernt keine Vertragszahlungen.']
 ],['Grenzpreis, Ausführbarkeit und Mengenabgrenzung ergänzen die Kennzahl.','Ein einzelnes Ratio ist kein allgemeines Erfolgssiegel.'],'cover'),
 q('41','practice','a b','An own reopening issues 100 million additional face value at clean price 98.50 plus accrued interest 1.20 per 100. There are no fees. Initial cash proceeds are:',[
 ['99.7 million.','Clean und Stückzins ergeben Vollpreis 99,70.'],
 ['98.5 million.','Das wäre nur die Clean-Preis-Komponente.'],
 ['101.2 million.','Das setzt den Clean Price fälschlich auf hundert.']
 ],[F('C=100(98{,}50+1{,}20)/100=99{,}7','Vollpreis wird vor der Umrechnung in Cash bestimmt.',[['C','Casherlös der Aufstockung, in Millionen.']]),'Nominaler Bestandszuwachs und Erlös sind nicht identisch.'],'reopening'),
 q('42','practice','a b','A fixed-rate issue has 200 million face value outstanding at a 4% annual coupon. A reopening adds 100 million of the SAME claim with unchanged coupon rate. Total annual contractual coupon on the 300 million face value is:',[
 ['12 million.','Vier Prozent des gesamten neuen Bestands.'],
 ['16 million.','Dies zählt einen Teil des alten Bestands doppelt.'],
 ['4 million.','Das wäre nur der Kupon der zusätzlichen hundert Mio.']
 ],[F('C=(200+100)\\cdot0{,}04=12','Mehr Nominal erzeugt mehr gesamten Kupon bei gleicher Rate.',[['C','Gesamter Jahreskupon, in Millionen.']]),'Neuer Kaufpreis und aufgelaufener Zins bleiben eigene Renditekomponenten.'],'reopening'),
 q('43','practice','b','An investor sells an existing government bond to another investor in an ordinary secondary trade. The purchase cash primarily goes to:',[
 ['the selling investor, rather than being a new direct issuance receipt of the government.','Ein gewöhnlicher Halterwechsel ist kein zweiter Primärzufluss.'],
 ['the government as an automatic new tax receipt.','Das folgt nicht aus diesem Geschäft.'],
 ['the central bank as a mandatory new equity contribution.','Dafür gibt es im beschriebenen Fall keine Grundlage.']
 ],['Gute Sekundärliquidität kann spätere Finanzierung indirekt erleichtern.','Dieser Zusammenhang wird vom heutigen Cashpfeil getrennt.'],'secondary'),
 q('44','practice','a b','A matched government benchmark yield is 3.0% and an agency comparison yield is 3.4%, in the same convention. The simple agency yield spread is:',[
 ['40 basis points.','0,4 Prozentpunkte sind vierzig Basispunkte.'],
 ['4 basis points.','Das ist um den Faktor zehn zu klein.'],
 ['400 basis points.','Das wäre eine Differenz vier ganzer Prozentpunkte.']
 ],[F('s=0{,}034-0{,}030=0{,}004=40\\,\\mathrm{bp}','Ein Basispunkt ist 0,0001 als Zinsdezimalzahl.',[['s','Einfacher Yield-Aufschlag.'],['\\mathrm{bp}','Basispunkt.']]),'Der Aufschlag ist keine automatische reine Ausfallwahrscheinlichkeit oder sichere Rendite.'],'benchmark'),
 q('45','practice','b','A government bond has a firm full-size quote of 99.98 bid and 100.02 ask per 100 face value. A 5 million immediate buy-and-sell roundtrip has no fees, price changes or differing accrued interest. Quote cost is:',[
 ['2,000.','Der volle Spread 0,04 Punkte wirkt auf fünf Mio. Nominal je hundert.'],
 ['1,000.','Das wäre nur eine Seite relativ zum gegebenen Mid hundert.'],
 ['200,000.','Dies vergisst die Notierung je hundert Nominal.']
 ],[F('K=5\\,000\\,000(100{,}02-99{,}98)/100=2\\,000','Ein Roundtrip nutzt Ask für den Kauf und Bid für den Verkauf.',[['K','Isolierte Quotekosten in Geldeinheiten.']]),'Ohne tatsächliche verfügbare Menge wäre diese Quote noch keine sichere Vollausführung.'],'liquidity'),
 q('46','practice','b','Another government bond has an unchanged firm full-size quote of 99.90 bid and 100.10 ask per 100 face value. Under the same no-fee assumptions, a 5 million immediate roundtrip costs:',[
 ['10,000.','Der volle Spread 0,20 Punkte wird auf fünf Mio. je hundert angewendet.'],
 ['5,000.','Das wäre einseitig relativ zum gegebenen Mid.'],
 ['0.','Öffentlicher Emittent bedeutet nicht kostenloser Handel.']
 ],[F('K=5\\,000\\,000(100{,}10-99{,}90)/100=10\\,000','Die andere Quotenbreite verändert Cashkosten bei gleicher Größe.',[['K','Isolierte Roundtrip-Quotekosten in Geldeinheiten.']]),'Ein staatlicher Name vereinheitlicht die Handelbarkeit verschiedener Titel nicht.'],'liquidity'),
 q('a1','mock-a','a b','A sovereign has non-interest cash spending of 215 million, receipts of 200 million, interest of 5 million, redemptions of 60 million and planned cash-reserve growth of 2 million. No other financing transactions occur. It proposes a SYNDICATED new issue on a coupon date at 98 per 100, with 0.4 million issue costs. Which assessment is most accurate?',[
 ['Required new face value is approximately 84.081633 million; sovereign status does not by itself prohibit syndicated issuance.','Netto-Cashbedarf ist 15 plus fünf plus sechzig plus zwei gleich 82; Kosten und Abschlag erhöhen das Nominal. Das Verfahren ist nicht exklusiv durch die Schuldnerart bestimmt.'],
 ['Required face value is 82 million, and every sovereign is legally confined to auctions in all jurisdictions.','Dies ignoriert Kosten und Abschlag und erfindet eine universelle Verfahrensgrenze.'],
 ['Required face value is 144.081633 million because redemptions must be added again after computing the full cash need.','Die fällige Tilgung ist schon in den 82 Mio. Bedarf enthalten und wird nicht doppelt addiert.']
 ],[F('B=215-200+5+60+2=82,\\quad N=(82+0{,}4)/0{,}98\\approx84{,}081633','Haushalt, Kapitalersatz, Reserve, Preis und Kosten werden in dieser Reihenfolge abgestimmt.',[['B','Benötigtes Netto-Cash, in Millionen.'],['N','Erforderliches neues Nominal, in Millionen.']]),'Auktionen sind verbreitet; tatsächliche staatliche Syndizierungen zeigen, weshalb eine weltweite Ausschließlichkeit falsch wäre.'],'workflow'),
 q('b1','mock-b','a b','A public project issuer has NO central-government guarantee. Cash revenue is 70 million, operating costs are 40 million and total debt service is 20 million, with no other deductions. Its own uniform-price auction offers 80 million face value, first allocates 8 million NC, and accepts higher prices first: A bids 20 million at 101, B 40 million at 100, C 30 million at 99 and D 10 million at 98. All accepted bidders, including NC, pay the marginal price. No fees or accrued interest apply. Which statement is correct?',[
 ['Gross auction proceeds are 79.2 million and defined DSCR is 1.5; the public label creates no additional central-government guarantee.','Competitive-Angebot 72 benötigt nach A und B noch zwölf von C; Grenzpreis 99 gilt für achtzig Mio. Die Deckungsquote ist dreißig geteilt durch zwanzig.'],
 ['Gross proceeds are 80 million and DSCR is 3.5; the central government automatically pays any shortfall.','Nominal wird mit Cash und Bruttoumsatz mit verfügbarer Deckung verwechselt; die Garantie ist ausdrücklich nicht vorhanden.'],
 ['Gross proceeds are 79.2 million and DSCR is 1.5, so bondholders have no exposure to future revenue changes.','Die aktuelle eigene Deckung beseitigt zukünftige Umsatz-, Kosten- und Vertragsrisiken nicht.']
 ],[F('Q_C=80-8-20-40=12,\\quad C=80\\cdot99/100=79{,}2,\\quad\\mathrm{DSCR}=(70-40)/20=1{,}5','Menge, Preis und laufende Zahlungsquelle werden getrennt gerechnet.',[['Q_C','Competitive-Grenzzuteilung an C, in Millionen Nominal.'],['C','Brutto-Casherlös der eigenen Auktion, in Millionen.'],['\\mathrm{DSCR}','Definierte laufende Schuldendienstdeckungsquote.']]),'Eine rechnerische Quote oder gute Platzierung schafft keinen vertraglich nicht vorhandenen Garantieanspruch.'],'workflow')
];
