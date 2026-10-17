const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,solution,section)=>Q('btr-'+id,'bond-trading','bonds',pool,los,stem,options,0,solution,{section});
module.exports=[
 q('01','practice','a','A long-maturity EUR corporate bond can most accurately be classified by:',[
 ['issuer type, credit quality, maturity and currency as distinct dimensions that can apply simultaneously.','Die Merkmale sind Koordinaten desselben Instruments und keine ausschließenden Alternativen.'],
 ['choosing only one label, because corporate status excludes maturity and currency classifications.','Das würde voneinander unabhängige Eigenschaften weglassen.'],
 ['assuming EUR denomination establishes identical credit and liquidity risk for all EUR bonds.','Eine gemeinsame Währung legt weder gleichen Schuldner noch gleiche Handelbarkeit fest.']
 ],['Marktsegmentierung hilft, passende Vergleichsgruppen zu bilden.','Erst die gemeinsamen und abweichenden Eigenschaften zeigen, welche Renditeunterschiede noch erklärt werden müssen.'],'segments'),
 q('02','practice','a','A bond is issued by a regional public entity. The government-related label alone establishes:',[
 ['neither an unconditional central-government guarantee nor identical credit risk to all sovereign debt.','Der tatsächliche Schuldner, seine Zahlungsquelle und jede Garantie müssen festgestellt werden.'],
 ['an automatic unlimited guarantee by every level of government.','Eine Marktgruppe erzeugt keinen neuen Garantievertrag.'],
 ['that all payments are made in the investor’s own currency.','Öffentlicher Status und Zahlungswährung sind verschiedene Angaben.']
 ],['Die Emittentengruppe ist ein Ausgangspunkt der Analyse.','Unterstützungsmechanismus, Rechtsanspruch und konkrete Verpflichtung bleiben gesondert zu prüfen.'],'issuers'),
 q('03','practice','a','An unrated bond should most appropriately be treated as:',[
 ['requiring separate credit assessment, rather than automatically equivalent to a specifically assigned low rating.','Keine Einschätzung und ausdrücklich niedrige Einschätzung sind nicht dieselbe Information.'],
 ['necessarily investment grade because no negative rating has been published.','Fehlende Ratinginformation beweist keine hohe Kreditqualität.'],
 ['necessarily identical in risk and mandate eligibility to every high-yield bond.','Zulässigkeit und Risiko folgen nicht aus dieser pauschalen Gleichsetzung.']
 ],['Ein Mandat oder Index kann eigene Regeln für fehlende Ratings besitzen.','Die konkrete Kreditprüfung und die jeweilige Auswahlregel werden auseinandergehalten.'],'credit'),
 q('04','practice','a','Two issues have the same assigned credit-rating category. The most justified conclusion is that:',[
 ['the category is one common attribute, while issue liquidity, claim priority and maturity may still differ.','Ein Ratingetikett beschreibt nicht alle Zahlungs- und Handelsmerkmale.'],
 ['their prices, recoveries and quoted spreads must always be identical.','Das würde alle anderen Instrument- und Marktunterschiede ausschließen.'],
 ['their coupons must reset to the same value whenever either bond trades.','Ein Sekundärgeschäft ändert nicht automatisch einen vertraglichen Kupon.']
 ],['Instrumentebene, Laufzeit, Optionen und verfügbare Marktmenge bleiben relevant.','Ein Renditeaufschlag ist deshalb nicht ausschließlich aus der Ratingüberschrift zu erklären.'],'credit'),
 q('05','practice','a b','A ten-year bullet was issued one year ago and has no early-redemption features. Its remaining maturity is now:',[
 ['9 years.','Ein verstrichenes Jahr wird von der ursprünglichen Endlaufzeit abgezogen.'],
 ['10 years.','Dies ist die ursprüngliche Laufzeit und keine aktualisierte Restlaufzeit.'],
 ['1 year.','Dies ist die bereits verstrichene Zeit statt der verbleibenden Zeit.']
 ],['Ein Restlaufzeitindex kann dadurch andere Mitglieder bekommen, ohne dass der Einzelvertrag neu verhandelt wird.','Ein laufend erneuerter Index besitzt nicht automatisch die Endfälligkeit dieses heutigen Mitglieds.'],'maturity'),
 q('06','practice','a','A ten-year bullet bond and a ten-year amortizing loan have the same initial principal. This alone establishes that:',[
 ['they share a final date, but not necessarily the same principal-weighted repayment time or interest-rate sensitivity.','Tilgungsweg, Kupon und Marktpreis beeinflussen andere Zeit- und Risikomaße.'],
 ['their weighted average lives must equal ten years in both cases.','Frühere Tilgung verkürzt die mittlere Kapitalrückgabe.'],
 ['all interim cash flows and all market prices are identical.','Gleiches Endnominal und gleiche Endlaufzeit beschreiben keinen vollständigen gleichen Zahlungsplan.']
 ],['WAL betrachtet Tilgungszeitpunkte; Duration betrachtet Marktwertgewichte der relevanten Zahlungen.','Beide werden von bloßer Endlaufzeit unterschieden.'],'maturity'),
 q('07','practice','a','A company incorporated outside the United States issues USD debt. USD denomination by itself determines:',[
 ['the contractual payment currency, not automatically the issuer’s country or the investor’s home-currency risk.','Sitz, Zahlungswährung und Anlegerperspektive sind getrennte Dimensionen.'],
 ['that the borrower must be a US sovereign entity.','Währung macht keinen ausländischen privaten Emittenten zum US-Staat.'],
 ['that every non-US investor has no exchange-rate exposure.','Für einen Anleger mit anderer Rechenwährung kann gerade Wechselkursrisiko bestehen.']
 ],['Lokale und fremde Währung werden relativ zum betrachteten Teilnehmer eingeordnet.','Ein Hedge hätte zusätzliche Bedingungen, Größen und Kosten.'],'currency'),
 q('08','practice','a','An insurer, a money-market fund and a pension investor may prefer different bond exposures primarily because:',[
 ['their obligations, horizons, liquidity needs and permitted mandates can differ.','Anlagezweck und Verpflichtungen erklären unterschiedliche Positionen im Markt.'],
 ['every institution must select the highest advertised yield regardless of cash-flow timing.','Ein hoher Yield beseitigt keine fällige Zahlung zu einem anderen Termin.'],
 ['all institutions have identical liabilities and legal investment constraints.','Das wäre ohne konkrete Grundlage eine falsche Verallgemeinerung.']
 ],['Die Teilnehmerübersicht zeigt mögliche Zwecke und keine identische Vorschrift für jede Institution.','Betrag, Zeitpunkt, Währung und Risiko der Verpflichtung gehören zur Auswahl.'],'investors'),
 q('09','practice','a','An investor owes EUR 100 million in one year. A ten-year bullet offers a EUR 6 million coupon at that date and EUR 100 million principal only in year 10, with no put. The unfunded amount at the one-year date before any sale or outside financing is:',[
 ['EUR 94 million.','Hundert Verpflichtung minus sechs tatsächlich fälliger Kupon.'],
 ['EUR 0 million.','Das spätere Endnominal ist am einjährigen Termin noch nicht zahlbar.'],
 ['EUR 106 million.','Dies addiert Anspruch und Verpflichtung statt die verfügbaren Mittel abzuziehen.']
 ],[F('L_{gap}=100-6=94','Ein möglicher Verkauf ist eine zusätzliche Marktannahme, kein bereits vereinbarter Kapitalrückfluss.',[['L_{gap}','Noch zu deckender Betrag in Millionen EUR am einjährigen Termin.']])],'liability'),
 q('10','practice','a','For an illustrative annual discount rate of 3%, the present value of an obligation of 100 due in one year is closest to:',[
 ['97.087379.','Der spätere Betrag wird durch den einjährigen Wachstumsfaktor geteilt.'],
 ['97.000000.','Dies zieht lediglich drei Prozent des späteren Betrags einfach ab.'],
 ['103.000000.','Dies zinst auf statt abzuzinsen.']
 ],[F('PV=100/1{,}03\\approx97{,}087379','Dieser Vergleichswert legt nicht automatisch den Marktpreis einer anderen langfristigen Anleihe fest.',[['PV','Heutiger Vergleichswert der angegebenen Verpflichtung.']])],'liability'),
 q('11','practice','a b','A manager of a short-maturity EUR investment-grade mandate proposes a long-maturity unhedged USD high-yield index solely because it is broad. The most appropriate assessment is that:',[
 ['currency, credit and maturity differences need to be addressed before the index can serve as a meaningful performance benchmark.','Breite allein macht ein anderes Risikoprofil nicht vergleichbar.'],
 ['the broadest index is automatically the correct benchmark for every fixed-income mandate.','Ein breiter Korb kann gerade wesentliche Mandatsunterschiede enthalten.'],
 ['the index’s USD label eliminates the portfolio’s EUR liability.','Eine Vergleichsreihe verändert keine bestehende Zahlungsverpflichtung.']
 ],['Eine Messlatte sollte zum vereinbarten Anlageproblem oder zu ausdrücklich erlaubten Abweichungen passen.','Sonst können andere Währungs-, Laufzeit- oder Kreditrisiken als vermeintliche Managerleistung erscheinen.'],'benchmark-fit'),
 q('12','practice','a c','A corporation has many bonds with different currencies, coupons and maturities. Its large total debt outstanding by itself:',[
 ['does not establish that a particular issue is liquid for an investor’s full order size.','Interesse und handelbarer Bestand verteilen sich auf verschiedene konkrete Instrumente.'],
 ['guarantees identical continuous order-book depth in every issue.','Gesamtverschuldung misst nicht die verfügbare Gegenorder in jeder einzelnen Note.'],
 ['makes every issue the latest government benchmark bond.','Dies verwechselt Unternehmensinstrumente mit einem bestimmten staatlichen Marktbegriff.']
 ],['Handelbarkeit ist titel-, größen- und zeitabhängig.','Ein breites Emittentenuniversum kann zusätzlich Replikationsaufwand für einen Index erzeugen.'],'liquidity'),
 q('13','practice','a c','In the Treasury-market context used in the chapter, on-the-run most commonly refers to:',[
 ['the most recent benchmark issue in the relevant segment.','Der Begriff bezieht sich auf eine konkrete aktuelle Benchmarkemission.'],
 ['every old security that has already matured and been repaid.','Off-the-run bedeutet nicht bereits erloschener Anspruch.'],
 ['any corporate bond whose coupon exceeds the government yield.','Ein Kuponvergleich definiert diesen Treasury-Begriff nicht.']
 ],['Ältere abgelöste Benchmarks können anders handeln.','Die abgegrenzte New-York-Fed-Untersuchung enthält Muster und Ausnahmen, keine pauschale Illiquiditätsregel für jeden alten Titel.'],'liquidity'),
 q('14','practice','a c','A rarely traded bond has an apparently smooth series of observed prices. The safest analytical conclusion is that:',[
 ['sparse observations may conceal valuation changes, so smooth recorded prices alone do not prove low economic risk or easy execution.','Seltene Beobachtung und geringe tatsächliche Schwankung sind nicht dasselbe.'],
 ['its actual value cannot change between recorded trades.','Der wirtschaftliche Wert kann sich auch ohne sichtbaren Umsatz verändern.'],
 ['any order size can be sold immediately at the last recorded price.','Ein vergangener Trade ist keine aktuelle Mengen- und Preiszusage.']
 ],['Quotezeit, Menge und Preisquelle werden geprüft.','Eine Index- oder Bewertungspreisreihe ist kein direkter Beleg einer kostengleichen realen Umsetzung.'],'liquidity'),
 q('15','practice','a c','A solvent issuer has one bond that is difficult to sell quickly in a large size. This situation illustrates that:',[
 ['issuer solvency and market liquidity are distinct, even though they can interact in stress.','Zahlungsfähigkeit und Handelbarkeit beantworten verschiedene Fragen.'],
 ['solvency guarantees a zero bid-ask spread in every outstanding instrument.','Der tatsächliche Handel hängt auch von Gegeninteresse, Bestand und Größe ab.'],
 ['illiquidity always means principal has already been legally cancelled.','Schlechte Verkäuflichkeit ist keine automatische Aufhebung des Anspruchs.']
 ],['Ein Investor kann einen gültigen Anspruch besitzen und dennoch eine teure oder verzögerte Umsetzung erleben.','Die beiden Risiken werden in einer vollständigen Analyse gemeinsam, aber getrennt erfasst.'],'liquidity'),
 q('16','practice','b','A hypothetical index requires EUR denomination, fixed coupons, investment-grade status and remaining maturity from one to ten years, all simultaneously. A five-year EUR investment-grade floater is:',[
 ['excluded under the specified fixed-coupon criterion.','Drei erfüllte Merkmale heben die vierte gleichzeitig geltende Bedingung nicht auf.'],
 ['included because investment-grade status supersedes every other criterion.','Die Fallregel bezeichnet keine solche alternative Freigabe.'],
 ['included because every instrument with a coupon is fixed-rate.','Ein variabler Kupon ist gerade keine unveränderliche feste Kuponstruktur.']
 ],['Die Fallgrenzen sind ausdrücklich eigene Indexbedingungen.','Ein anderer Index kann andere Produkte zulassen, was an dieser Regelprüfung nichts ändert.'],'index-rules'),
 q('17','practice','b','The same hypothetical index has a minimum remaining maturity of one year. A previously eligible issue now has 0.75 years remaining. According to this eligibility rule, it:',[
 ['no longer meets the maturity filter, subject to the index’s specified effective rebalance timing.','Restlaufzeit und tatsächlicher Wirksamkeitstermin der Änderung werden getrennt geprüft.'],
 ['must remain eligible forever because original maturity was longer than one year.','Die Bedingung bezieht sich auf verbleibende, nicht ursprüngliche Laufzeit.'],
 ['must have defaulted because it no longer meets the filter.','Herausfallen aus einem Laufzeitband ist keine automatische Zahlungsstörung.']
 ],['Zeitablauf kann die künftige Indexzusammensetzung ändern.','Der einzelne Bond und der laufend erneuerte Index besitzen nicht dieselbe Endfälligkeit.'],'maturity'),
 q('18','practice','b','A bond position has face value 2,000,000, clean price 98 and accrued interest 1, both quoted per 100 face. Its full market value is:',[
 ['1,980,000.00.','Der volle Preis 99 wird durch hundert geteilt und auf Nominal angewendet.'],
 ['198,000,000.00.','Dies behandelt neunundneunzig Punkte als Geldfaktor neunundneunzig.'],
 ['1,960,000.00.','Dies ignoriert die Stückzinsen im vollen Positionswert.']
 ],[F('MV=2000000(98+1)/100=1980000','Notierung und Geldfaktor werden ausdrücklich unterschieden.',[['MV','Voller Geldmarktwert der Position.']])],'market-value'),
 q('19','practice','b','At the beginning of a period, eligible bond A has face 200 and full price 100 per 100 face, and bond B has face 100 and full price 100. A’s market-value weight is closest to:',[
 ['66.666667%.','A stellt zweihundert von dreihundert Anfangsmarktwert.'],
 ['50.000000%.','Dies gewichtet Titelanzahl statt Marktwert.'],
 ['200.000000%.','Dies lässt den gesamten Korbwert als Nenner weg.']
 ],[F('w_A=200/(200+100)\\approx66{,}666667\\%','Die Gewichte werden vor der betrachteten Wertänderung festgelegt.',[['w_A','Anfangsmarktwertgewicht von A.']])],'index-weights'),
 q('20','practice','b','A debt-market-value-weighted benchmark assigns a larger weight to an issuer after more eligible debt is present at the same price, all else equal. This primarily reflects:',[
 ['the stated weighting rule, rather than proof that the issuer has better quality or will earn a higher return.','Menge und Preis bestimmen Marktwertgewicht, nicht ein unabhängiges Qualitätsurteil.'],
 ['a guarantee that more borrowing always reduces the benchmark’s risk.','Konzentration kann günstige und ungünstige Einzelergebnisse verstärken.'],
 ['a rule followed identically by all bond indexes, including capped and fundamentally weighted ones.','Andere Indizes können ausdrücklich andere Gewichtsregeln besitzen.']
 ],['Die Analyse benötigt die tatsächlich gewählte Methodik.','Eine Gewichtskurve über verschiedene Anfangskörbe ist kein zeitlicher Anlagegewinn aus neuer Verschuldung.'],'index-weights'),
 q('21','practice','b','During one specified observation period, a bond starts at full price 100 and ends at full price 99, while paying cash coupon 3 per 100 face at the period end. With unchanged holdings and no other payments, its total return is:',[
 ['2.00%.','Endwert neunundneunzig plus drei Cash relativ zu hundert Anfangswert.'],
 ['−1.00%.','Dies berücksichtigt nur den Vollpreisrückgang.'],
 ['3.00%.','Dies berücksichtigt nur den Cashkupon und ignoriert die Preisänderung.']
 ],[F('R=(99+3-100)/100=2\\%','Die Periodenlänge ist vorgegeben; eine Annualisierung wurde nicht verlangt.',[['R','Gesamtrendite über die genannte Beobachtungsperiode.']])],'index-case'),
 q('22','practice','b','A second bond starts and ends the same observation period at full price 100 and pays coupon 1 per 100 face at period end. Its total return is:',[
 ['1.00%.','Unveränderter Bondwert plus ein Cash auf hundert Anfangswert.'],
 ['0.00%.','Dies lässt den tatsächlich bezahlten Kupon weg.'],
 ['101.00%.','Dies verwendet Endvermögen als Rendite statt dessen Zuwachs relativ zum Anfang.']
 ],[F('R=(100+1-100)/100=1\\%','Der Rückerhalt des vorhandenen Werts ist kein zusätzlicher Gewinn von hundert Prozent.',[['R','Gesamtrendite der zweiten Anleihe.']])],'index-case'),
 q('23','practice','b','Two bond positions begin at market values 100 each. At period end their remaining values are 99 and 100, and their period-end cash coupons are 3 and 1. With no other flows, the portfolio total return is:',[
 ['1.50%.','Drei Gesamtzuwachs relativ zu zweihundert Anfangsvermögen.'],
 ['2.00%.','Dies ist der Cashkuponbeitrag ohne die fallende volle Bondwertkomponente.'],
 ['−0.50%.','Dies ist nur die volle Preisänderung ohne Cashzahlungen.']
 ],[F('R=(99+100+3+1-200)/200=1{,}5\\%','Die Geldwertrechnung stimmt mit den gleichgewichteten Einzelrenditen zwei und ein Prozent ab.',[['R','Gesamtrendite des eigenen Zweianleihenkorbs.']])],'index-case'),
 q('24','practice','b','For a portfolio with total opening full value 200 and remaining ending full value 199, the full-price-change contribution before adding any coupon cash is:',[
 ['−0.50 percentage points.','Der Bondwertbeitrag beträgt minus eins relativ zu zweihundert.'],
 ['1.50 percentage points.','Dies wäre im Grundfall bereits die Gesamtrendite einschließlich vier Cash.'],
 ['−1.00 percentage points.','Dies verwendet den falschen Nenner hundert für den Gesamtkorb.']
 ],[F('R_{full}=(199-200)/200=-0{,}5\\%','Ein negativer Teilbeitrag ist nicht automatisch dieselbe Größe wie die vollständige Gesamtrendite.',[['R_{full}','Beitrag der Vollpreisänderung zur Periodenrendite.']])],'return-formula'),
 q('25','practice','b','A bond begins at clean price 98 plus accrued interest 2 and ends at clean price 99 with zero accrued interest, paying coupon 3. All figures are per 100 face. The coupon-plus-accrual contribution, excluding the clean-price-change contribution, is:',[
 ['1.00 percentage point.','Cashkupon drei plus Stückzinsänderung minus zwei ergibt eins auf hundert Anfangsvollpreis.'],
 ['3.00 percentage points.','Dies setzt Cashkupon allein mit Periodenzinsertrag gleich und ignoriert die zuvor bezahlten Stückzinsen.'],
 ['2.00 percentage points.','Dies ist die gesamte Rendite einschließlich eines Punktes Clean-Price-Zuwachs.']
 ],[F('R_{income}=(3+0-2)/(98+2)=1\\%','Zusammen mit dem Clean-Price-Beitrag eins Prozent ergibt sich zwei Prozent Gesamtrendite.',[['R_{income}','Im Fall um Stückzinsänderung bereinigter Kuponbeitrag zur Periodenrendite.']])],'return-formula'),
 q('26','practice','b','Immediately before a coupon, clean price is 100 and accrued interest is 3. Immediately after payment of the 3 coupon, clean price is still 100 and accrued interest is zero. With no other movement, total return across this isolated payment event is:',[
 ['0.00%.','103 vorher sind hundert verbleibender Bondwert plus drei Cash nachher.'],
 ['3.00%.','Dies verwendet Clean Price statt den vorherigen vollen Anspruch als Gesamtanfangswert.'],
 ['−2.912621%.','Dies erfasst den Vollpreisrückgang, lässt aber den tatsächlich bezahlten Kupon weg.']
 ],[F('R=(100+3-103)/103=0','Ein Zahlungsanspruch wird in Cash umgesetzt; dadurch allein entsteht kein neuer Gewinn.',[['R','Gesamtrendite des isolierten Kuponterminvergleichs.']])],'coupon-date'),
 q('27','practice','b','A position starts with principal and full market value both 1,000. At period end, 200 principal has been repaid, the remaining principal is priced at 100 per 100, and cash coupon 40 is paid. With no other flows, total return is:',[
 ['4.00%.','Verbleibender Wert achthundert plus zweihundert Tilgung und vierzig Kupon.'],
 ['24.00%.','Dies würde das bereits getilgte Nominal im verbleibenden Wert nochmals enthalten.'],
 ['−16.00%.','Dies lässt die ausgezahlte Tilgung zweihundert aus dem Gesamtvermögen weg.']
 ],[F('R=(800+200+40-1000)/1000=4\\%','Die Tilgung steht genau einmal als Cash und nicht gleichzeitig als weiter ausstehendes Nominal im Ergebnis.',[['R','Gesamtrendite des eigenen Teiltilgungsfalls.']])],'principal-cash'),
 q('28','practice','b','After a principal repayment, a bond-index calculation adds that payment as cash while still valuing the original, unreduced principal at the ending full price. The most likely error is:',[
 ['counting repaid principal twice, once as cash and again as an outstanding claim.','Nominalfortschreibung und Zahlung müssen gemeinsam abstimmen.'],
 ['excluding coupon income correctly in all total-return calculations.','Die beschriebene Behandlung betrifft die Tilgung und ist gerade nicht korrekt.'],
 ['using opening weights, which is always a form of look-ahead bias.','Anfangsgewichte vermeiden bei unverändertem Bestand gerade die rückblickende Gewinnerübergewichtung.']
 ],['Der verbleibende Endwert basiert auf Anfangsnominal minus geleisteter Tilgung.','Cash und verbleibende Ansprüche dürfen nicht denselben Kapitalbetrag gleichzeitig enthalten.'],'principal-cash'),
 q('29','practice','b','Two positions start at value 100 each and end at 120 and 90, with no cash flows or trades. Their actual portfolio return is:',[
 ['5.00%.','Endvermögen 210 gegenüber zweihundert; Anfangsgewichte sind je fünfzig Prozent.'],
 ['7.142857%.','Dies ist die rückblickende Rechnung mit Endgewichten und übergewichtet den Gewinner.'],
 ['10.00%.','Dies setzt den Gesamtgewinn zehn in Geldeinheiten fälschlich direkt mit einer Prozentquote gleich.']
 ],[F('R=(120+90-200)/200=5\\%','Gleichwertig: halb mal zwanzig Prozent plus halb mal minus zehn Prozent.',[['R','Tatsächlich verdiente Gesamtrendite des unveränderten Korbs.']])],'beginning-weights'),
 q('30','practice','b','A hypothetical three-bond index starts at weights 60%, 25% and 15%. A is capped at 40%, and the remaining 60% is allocated to B and C in their original 25:15 ratio. No further cap binds. B’s new weight is:',[
 ['37.50%.','B erhält fünfundzwanzig Vierzigstel der verbleibenden sechzig Prozent.'],
 ['25.00%.','Dies lässt den frei gewordenen Gewichtsanteil unerklärt.'],
 ['60.00%.','Dies weist B den gesamten Rest zu und lässt C ohne Grundlage weg.']
 ],[F('w_B=0{,}60\\cdot25/(25+15)=37{,}5\\%','A vierzig, B 37,5 und C 22,5 ergeben zusammen hundert Prozent.',[['w_B','Neues Gewicht von B nach der ausdrücklich gegebenen Kappungsregel.']])],'index-caps'),
 q('31','practice','b','In an explicitly hypothetical constant-price world, an investment starts at 100 and earns 4% each year, with all proceeds reinvested at each year-end at the same rate. After five years, total wealth is closest to:',[
 ['121.665290.','Die jeweilige Vermögensbasis wächst durch jährliche Wiederanlage.'],
 ['120.000000.','Dies hält die Kupons der ursprünglichen Position separat unverzinst statt sie wiederanzulegen.'],
 ['100.000000.','Dies betrachtet nur den konstanten Preis und ignoriert Erträge.']
 ],[F('W_5=100\\cdot1{,}04^5\\approx121{,}665290','Die konstante zukünftige Wiederanlagebedingung ist hier eine Fallannahme.',[['W_5','Vermögen nach fünf vollständigen Jahren im eigenen Wiederanlagefall.']])],'reinvestment'),
 q('32','practice','b','A position remains valued at 100 and pays cash 4 at each year-end for five years. Those coupons are kept separately without interest. Total bond value plus accumulated cash at year 5 is:',[
 ['120.00.','Hundert verbleibender Wert plus fünfmal vier Cash.'],
 ['121.67.','Dies würde zusätzliche Wiederanlageerträge voraussetzen.'],
 ['100.00.','Dies lässt das separat gehaltene Cash weg.']
 ],[F('W_5=100+5\\cdot4=120','Ein reiner Preisindex und das vollständige Anlegervermögen sind verschiedene Messgrößen.',[['W_5','Gesamtvermögen aus Position und unverzinst gehaltenen Kupons nach fünf Jahren.']])],'reinvestment'),
 q('33','practice','b','A hypothetical index uses market value divided by a normalizing divisor. Its level is 100 before a neutral universe addition raises the measured basket value from 200 to 250, with no investment gain. The new divisor required to preserve the level is:',[
 ['2.50.','250 durch 2,5 hält den Indexstand bei hundert.'],
 ['2.00.','Der alte Divisor würde einen künstlichen Stand 125 erzeugen.'],
 ['0.50.','Dies ist nur die Divisoränderung, nicht der benötigte neue Divisor.']
 ],[F('D_1=250/100=2{,}5','Dies ist eine eigene äquivalente Normierung, keine Behauptung eines einheitlichen Implementierungsverfahrens aller Bondindexanbieter.',[['D_1','Neuer Divisor des gegebenen hypothetischen Index.']])],'rebalancing'),
 q('34','practice','b','An index member’s price falls from 100 to 85 before it is removed at a subsequent rebalance. Removing it from the next universe:',[
 ['does not erase the loss already experienced while the position was included.','Zukünftige Mitgliedschaft und vergangene erwirtschaftete Rendite sind getrennte Zeitabschnitte.'],
 ['automatically restores the historical return to zero.','Das würde den tatsächlichen Wertverlust rückwirkend verbergen.'],
 ['proves that every new replacement must immediately earn a 15% gain.','Ein neuer Titel erzeugt keinen garantierten Ausgleichsertrag.']
 ],['Eine neutrale Umbaukonvention verhindert neue künstliche Sprünge.','Sie macht die davor gehaltenen Ansprüche und ihre Preisbewegungen nicht ungeschehen.'],'rebalancing'),
 q('35','practice','b','A bond portfolio earns 2% locally during a period. Its local currency loses 5% against the investor’s home currency. All relevant proceeds are available at the end, with no hedge or costs. Home-currency total return is:',[
 ['−3.10%.','1,02 mal 0,95 minus eins berücksichtigt auch die Kreuzkomponente.'],
 ['−3.00%.','Dies ist nur die additive Näherung.'],
 ['7.00%.','Dies vertauscht die Richtung der angegebenen Währungsänderung.']
 ],[F('R_H=(1+0{,}02)(1-0{,}05)-1=-3{,}1\\%','Die Wechselkursdefinition wird konsistent in Heimatwährung je lokaler Einheit verwendet.',[['R_H','Ungehedgte Periodenrendite in Heimatwährung.']])],'fx'),
 q('36','practice','c','An issuer sells new face value 100 million at 99 per 100 face and pays issuance costs of 0.8 million. No accrued interest or other flows apply. Net funding received is:',[
 ['98.20 million.','Neunundneunzig Bruttoerlös minus 0,8 Kosten.'],
 ['99.20 million.','Dies zieht die Kosten vom Nominal hundert statt vom tatsächlichen Bruttoerlös neunundneunzig ab.'],
 ['100.00 million.','Dies verwechselt vertragliches Nominal mit tatsächlich verfügbarem Nettozufluss.']
 ],[F('E_{net}=100\\cdot99/100-0{,}8=98{,}2','Das ausstehende Nominal hundert bleibt vom Nettozufluss zu unterscheiden.',[['E_{net}','Nettoemissionserlös in Millionen Geldeinheiten.']])],'issuance-case'),
 q('37','practice','c','An investor buys an already outstanding bond from another holder in an ordinary secondary-market trade. The direct purchase price primarily goes to:',[
 ['the selling holder or relevant trading counterparty, rather than becoming new issue proceeds for the issuer.','Ein bestehender Anspruch wird übertragen.'],
 ['the issuer as an additional new loan every time that bond changes hands.','Bloßer Eigentümerwechsel schafft keine neue Nominalschuld.'],
 ['all shareholders as an automatically declared dividend.','Ein Bondtrade ist keine Dividendenerklärung.']
 ],['Sekundärliquidität kann primäre Finanzierungskonditionen indirekt beeinflussen.','Dieser Zusammenhang ändert den direkten Geldempfänger des konkreten Handels nicht.'],'secondary'),
 q('38','practice','c','Compared with a best-efforts placement, a stipulated firm-commitment underwriting arrangement primarily differs because:',[
 ['the intermediary takes the agreed placement or inventory risk for the committed portion under the contract.','Die konkrete Übernahmeverpflichtung ist ein zusätzlicher wirtschaftlicher Risikotransfer.'],
 ['a best-efforts label alone guarantees full unconditional purchase of every unsold bond.','Gerade diese unbedingte Übernahme folgt aus bloßem Bemühen nicht.'],
 ['the issuer’s final coupon becomes unrelated to all contractual terms.','Die Platzierungsorganisation hebt den Zahlungsplan nicht auf.']
 ],['Umfang und Bedingungen der Zusage werden geprüft.','Eine Vermittlungsrolle oder hohe unverbindliche Nachfrage ist nicht dasselbe wie eine feste vollständige Übernahme.'],'underwriting'),
 q('39','practice','c','A hypothetical uniform-price auction offers 100 million. Accepted noncompetitive bids use 10 million; competitive bids at lower yields use another 60 million. The next yield group requests 50 million. Under the stated proportional cutoff rule, that group receives:',[
 ['30.00 million.','Hundert Angebot minus zehn und sechzig bereits belegtes Volumen.'],
 ['50.00 million.','Dies würde mehr als das verfügbare Emissionsvolumen zuteilen.'],
 ['60.00 million.','Dies verwechselt den verbleibenden Anteil mit bereits akzeptiertem Volumen.']
 ],[F('N_{cut}=100-10-60=30','Der Grenzgruppe stehen dreißig ihrer gewünschten fünfzig Mio. zu.',[['N_{cut}','Der Grenzgruppe zugeteiltes Nominal in Millionen.']])],'auction'),
 q('40','practice','c','Under the same hypothetical cutoff, a yield group requesting 50 million receives 30 million. Its allocation fraction is:',[
 ['60.00%.','Dreißig tatsächlich zugeteilt durch fünfzig gewünscht.'],
 ['30.00%.','Dies setzt den Betrag dreißig ohne den angefragten Nenner direkt als Prozentquote ein.'],
 ['166.67%.','Dies kehrt den Quotienten um.']
 ],[F('f=30/50=60\\%','Zuteilungsbetrag und Zuteilungsquote sind verschiedene Größen.',[['f','Proportionale Zuteilungsquote im gegebenen Verfahren.']])],'auction'),
 q('41','practice','c','In a stipulated uniform-price bond auction, a successful competitive bidder offered a 3.8% yield and the highest accepted yield is 4.0%. Under the stated rule, its awarded yield is:',[
 ['4.00%.','Erfolgreiche Gebote erhalten die gemeinsame Ergebnisrendite.'],
 ['3.80%.','Dies würde eine andere gebotsspezifische Preisregel voraussetzen.'],
 ['0.20%.','Dies ist nur die Differenz zwischen zwei Renditezahlen.']
 ],['Auktionsverfahren unterscheiden sich. Hier ist die gemeinsame Preisregel ausdrücklich vorgegeben.','Die Ergebnisrendite ist trotzdem nicht automatisch gleich einem beliebig vorgegebenen Kuponsatz.'],'auction'),
 q('42','practice','c','A dealer’s clean bid/ask is 99.10/99.30 per 100 face. Accrued interest is 0.75 per 100. For an immediate investor purchase of 2,000,000 face, with the quote valid for the full amount and before separate fees, the cash price is:',[
 ['2,001,000.00.','Der Käufer verwendet Ask 99,30 plus 0,75 Stückzinsen.'],
 ['1,997,000.00.','Dies verwendet die Bid-Seite, zu der der Händler kaufen würde.'],
 ['1,986,000.00.','Dies verwendet den Clean Ask ohne Stückzinsen.']
 ],[F('K=2000000(99{,}30+0{,}75)/100=2001000','Die jeweilige Anlegerseite bestimmt den passenden Händlerpreis.',[['K','Voller Kaufbetrag vor separaten Gebühren.']])],'quote'),
 q('43','practice','c','Using the same valid clean bid/ask 99.10/99.30 and accrued interest 0.75 per 100 face, immediate sale of face 2,000,000 gives cash proceeds before separate fees of:',[
 ['1,997,000.00.','Der Anleger verkauft zum Händler-Bid plus Stückzinsen.'],
 ['2,001,000.00.','Dies ist die Ask-Seite für einen Anlegerkauf.'],
 ['1,982,000.00.','Dies ist nur der Clean Bid ohne die angegebenen Stückzinsen.']
 ],[F('K=2000000(99{,}10+0{,}75)/100=1997000','Der gleichzeitige isolierte Vergleich hält Termin und Stückzinsen unverändert.',[['K','Voller Verkaufserlös vor separaten Gebühren.']])],'quote'),
 q('44','practice','c','An investor immediately buys and sells face 2,000,000 at a valid unchanged clean bid/ask of 99.10/99.30. Accrued interest is identical on both legs. A fee of 500 applies to each leg, with no other cost or movement. Total roundtrip cost is:',[
 ['5,000.00.','Voller Spread viertausend plus zweimal fünfhundert Gebühr.'],
 ['3,000.00.','Dies verwendet nur einen halben Spread und addiert beide Gebühren.'],
 ['4,500.00.','Dies lässt eine der beiden ausdrücklich genannten Gebühren weg.']
 ],[F('TC=2000000(99{,}30-99{,}10)/100+2\\cdot500=5000','Stückzinsen heben sich in genau diesem gleichzeitigen Vergleich auf.',[['TC','Gesamter Cashverlust des gegebenen Hin- und Rückgeschäfts.']])],'costs'),
 q('45','practice','c','For a simultaneous clean bid/ask of 99.10/99.30, the midpoint is 99.20. On an immediate purchase of face 2,000,000, the ask-side cost relative to that midpoint, before fees and other effects, is:',[
 ['2,000.00.','0,10 Punkte je hundert auf zwei Mio. Nominal.'],
 ['4,000.00.','Dies ist die volle Spreadbelastung eines sofortigen Roundtrips.'],
 ['200,000.00.','Dies lässt die Division der Preis-Punkte durch hundert weg.']
 ],[F('TC_{buy}=2000000(99{,}30-99{,}20)/100=2000','Einseitiger Mid-Vergleich und vollständiges Hin- und Rückgeschäft werden getrennt.',[['TC_{buy}','Isolierter Kaufkostenbetrag relativ zum gleichzeitigen Mid.']])],'costs'),
 q('46','practice','c','For a 2,000,000-face purchase, dealer A quotes clean ask 99.30 and fee 500; dealer B quotes clean ask 99.25 and fee 2,000. Accrued interest is 0.75 per 100 with identical settlement and firm full-size execution. A’s all-in purchase cost is lower by:',[
 ['500.00.','A kostet 2.001.500, B trotz niedrigerem Clean Ask 2.002.000.'],
 ['1,000.00.','Dies betrachtet nur den Preisvorteil von B und ignoriert die größere Gebühr.'],
 ['1,500.00.','Dies ist nur der Gebührenunterschied ohne den gegenläufigen Preisvorteil.']
 ],[F('K_B-K_A=(2000000+2000)-(2001000+500)=500','Es werden dieselbe Anleihe, Größe, Abwicklung und dieselben Stückzinsen verglichen.',[['K_A,K_B','Gesamtkaufbeträge bei Händler A und B.']])],'rfq'),
 q('47','practice','c','Two valid purchase offers differ by 0.05 clean-price points per 100 face. The lower-price dealer charges a fixed fee that is 1,500 higher. Accrued interest and all other conditions are identical. The face amount where all-in costs are equal is:',[
 ['3,000,000.00.','0,0005 mal Nominal muss den Gebührennachteil 1.500 ausgleichen.'],
 ['30,000.00.','Dies verwendet 0,05 als Geldfaktor statt Preis-Punkte durch hundert zu teilen.'],
 ['300,000.00.','Dies verwendet einen um Faktor zehn zu großen Preisvorteil.']
 ],[F('N^*=1500/(0{,}05/100)=3000000','Feste Kosten und proportionale Preisbelastung treffen sich bei genau diesem Nominal.',[['N^*','Nominal am Schnittpunkt der eigenen Angebote.']])],'rfq'),
 q('48','practice','c','For a 5,000,000-face purchase, A quotes clean ask 99.30 plus fee 500; B quotes clean ask 99.25 plus fee 2,000. Both have accrued interest 0.75 per 100 and identical valid full-size execution. B’s total purchase cost is lower by:',[
 ['1,000.00.','Preisvorteil 2.500 minus zusätzliche Gebühr 1.500.'],
 ['2,500.00.','Dies ignoriert die zusätzliche feste Gebühr.'],
 ['1,500.00.','Dies verwendet nur die Gebührendifferenz und lässt den Preisvorteil weg.']
 ],[F('K_A-K_B=5000000\\cdot0{,}0005+500-2000=1000','Bei dieser größeren Order überwiegt der proportionale Preisvorteil die höhere Gebühr.',[['K_A,K_B','Gesamte Kaufbeträge der beiden eigenen Händlerangebote.']])],'rfq'),
 q('49','practice','c','A bond’s last reported TRACE transaction was executed earlier for a different size. The report alone:',[
 ['does not constitute a current executable quote for the investor’s full proposed order.','Transaktionsmeldung und aktuelle verbindliche Preis-Mengen-Zusage sind verschiedene Informationen.'],
 ['guarantees immediate execution at that same price in all international bond markets.','Das überdehnt Information und Geltungsbereich des Meldesystems.'],
 ['converts every OTC bond into a continuously quoted common share.','Meldetransparenz ändert nicht die wirtschaftliche Anspruchsart.']
 ],['TRACE ist in der beschriebenen Quelle ein Melde- und Transparenzmechanismus für erfasste Geschäfte.','Zeit, Seite, Größe und tatsächliche ausführbare Gegenofferte werden gesondert geprüft.'],'transparency'),
 q('50','practice','c','When comparing a favorable indicative bond price with a less favorable firm quote, a manager should most appropriately:',[
 ['compare executable size, timing, settlement, fees and relevant order requirements before concluding which implementation is appropriate.','Die günstigere Zahl allein beweist keine tatsächlich verfügbare vollständige Umsetzung.'],
 ['treat the indicative number as a guaranteed unlimited-size execution price.','Indikative Information ist keine solche Zusage.'],
 ['ignore every other condition whenever one displayed clean price is lower.','Das würde die tatsächlichen Geldflüsse und wesentlichen Auftragsbedingungen auslassen.']
 ],['Eine saubere All-in-Rechnung benötigt vergleichbare und verfügbare Bedingungen.','Die Ausführungsanalyse bleibt mit Mandat und Kundeninteressen verbunden.'],'venues'),
 q('a1','mock-a','a b c','A hypothetical index admits EUR fixed-rate investment-grade bonds with one to ten years remaining. Eligible A is a newly issued corporate bond with face 200, full price 100 initially, ending full price 102 and end-period coupon 2 per 100. Eligible B is an existing government bond with face 100, initial full price 100, ending full price 99 and coupon 1. The portfolio holds both unchanged; B was bought from an existing holder. With no other flows or costs, the most accurate combined assessment is:',[
 ['index total return is 2.666667%; the A new issue raises issuer funding, while the ordinary B secondary purchase does not itself create new issuer proceeds.','Anfangsgewichte zwei Drittel und ein Drittel ergeben die Rendite; der unmittelbare Geldempfänger ist je Geschäft verschieden.'],
 ['index total return is 2.000000%; equal title counts require equal market-value weights, and both purchases supply new issuer funding.','Titelanzahl ist hier nicht die Gewichtsregel; der Sekundärhandel finanziert nicht nochmals direkt den Emittenten.'],
 ['index total return is 4.000000%; B’s government label guarantees that it cannot affect the portfolio result.','Die tatsächlich gegebene B-Rendite null und sein positives Gewicht bleiben Teil der Rechnung.']
 ],[F('R_A=(102+2-100)/100=4\\%,\\quad R_B=(99+1-100)/100=0','Alle Preise und Kupons sind je hundert Nominal; A hat zweihundert und B hundert Anfangsmarktwert.',[['R_A,R_B','Perioden-Gesamtrenditen der zwei im Fall zulässigen Anleihen.']]),F('R_{idx}=\\frac{200\\cdot0{,}04+100\\cdot0}{300}\\approx2{,}666667\\%','Neuausgabe und Eigentümerwechsel werden anschließend nach ihrem tatsächlichen Geldfluss eingeordnet.',[['R_{idx}','Marktwertgewichtete Gesamtrendite des eigenen Korbs.']])],'index-case'),
 q('b1','mock-b','a b c','A manager has a short-maturity EUR investment-grade mandate but proposes a long-maturity unhedged USD high-yield benchmark solely because it is large. For a separate valid purchase of EUR 3 million face, firm dealer A quotes clean ask 99.40 with fee 1,000 and B quotes 99.35 with fee 3,000. Accrued interest is 0.60 per 100 and settlement and executable size are identical. The most appropriate combined assessment is:',[
 ['A has the lower all-in purchase cost by 500, and benchmark suitability still requires addressing currency, credit and maturity differences.','Der Gebührenvergleich und der passende Leistungsmaßstab sind eigenständige Prüfungen.'],
 ['B has the lower cost because its clean ask is lower, and the largest index automatically matches every bond mandate.','Dies ignoriert die höhere Gebühr und wesentliche Risikounterschiede.'],
 ['A’s lower cost by 500 proves that the USD high-yield benchmark necessarily matches the EUR mandate.','Ein günstigeres einzelnes Handelsangebot ändert nicht Währung, Kreditqualität oder Laufzeit der Messlatte.']
 ],[F('K_A=3000000(99{,}40+0{,}60)/100+1000=3001000','A: voller Preis hundert plus feste Gebühr.',[['K_A','Gesamter Kaufbetrag beim eigenen Händler A, in EUR.']]),F('K_B=3000000(99{,}35+0{,}60)/100+3000=3001500','B: voller Preis 99,95 und höhere Gebühr. A ist fünfhundert günstiger.',[['K_B','Gesamter Kaufbetrag beim eigenen Händler B, in EUR.']]),'Ein Performancebenchmark benötigt eine zum Mandat passende oder ausdrücklich begründete Abgrenzung; seine Größe allein reicht nicht.'],'benchmark-fit')
];
