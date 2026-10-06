const {Q,F,T}=require('../author.cjs');
const q=(id,pool,los,stem,options,solution,section)=>Q('ind-'+id,'industry','equity',pool,los,stem,options,0,solution,{section});
module.exports=[
 q('01','practice','a','An analyst observes strong industry demand and concludes that every stock in the industry is undervalued. The most appropriate criticism is that:',[
 ['industry attractiveness does not establish a company’s competitive position or value relative to its stock price.','Die Branchenchance, die eigene Umsetzung und der bereits bezahlte Preis sind getrennte Fragen.'],
 ['industry analysis cannot be relevant to valuation.','Nachfrage, Wettbewerb und Kapitalbedarf liefern wichtige Bewertungsannahmen.'],
 ['every firm in a growing industry must have the same return on capital.','Unterschiedliche Kosten, Angebote und Kapitalbestände erzeugen andere Renditen.']
 ],['Zuerst wird die strukturelle Ertragsmöglichkeit untersucht. Danach werden die konkrete Firmenposition, notwendige Investitionen und der Eigentümeranspruch bewertet.','Eine gute Zukunft kann im heutigen Preis schon vollständig enthalten sein; Branchenwachstum allein begründet kein Unterbewertungsurteil.'],'scope'),
 q('02','practice','a b','Before combining two market-size estimates, an analyst should first:',[
 ['reconcile their products, geography, period, value-chain stage and measurement units.','Ohne gemeinsame Definition werden verschiedene wirtschaftliche Fragen addiert.'],
 ['choose whichever estimate produces the higher growth forecast.','Das Ergebnis darf nicht die Auswahl der Datengrundlage bestimmen.'],
 ['average the estimates without examining their definitions.','Ein Mittelwert heilt unpassende Abgrenzungen nicht.']
 ],['Ein Endkundengerätemarkt, Herstellerumsätze und installierte Anlagenbasis können alle korrekt gemessen sein und dennoch nicht dieselbe Größe darstellen.','Der Analyseprozess legt die Frage fest und harmonisiert die Daten, bevor Größe, Anteil oder Wachstum berechnet werden.'],'workflow'),
 q('03','practice','a d','An analyst expects margins to fall as customer switching becomes easier. The most useful next step is to:',[
 ['identify evidence on available alternatives, contract renewal and the link to realized prices.','Eine prüfbare Wirkungskette kann bestätigt oder widerlegt werden.'],
 ['convert the statement into a margin forecast solely by assigning a competition score.','Ein beliebiger Score legt keine wirtschaftliche Wirkungshöhe fest.'],
 ['ignore subsequent information once the initial forecast is made.','Die These muss anhand neuer Information überprüft werden.']
 ],['Die These benennt Kundenaustauschbarkeit als Mechanismus und Preise beziehungsweise Verlängerungsbedingungen als konkrete Folge.','Verträge, beobachtete Wechsel, Konkurrenzangebote und Gegenhypothesen erlauben die Aktualisierung; eine bloße Branchenbezeichnung reicht nicht.'],'workflow'),
 q('04','practice','a b c','A group has total revenue of 600, including 180 from regional external maintenance. The relevant regional external-maintenance market is 900. Its share of this market is:',[
 ['20.00%','Nur die passenden regionalen Wartungsumsätze gehören in den Zähler.'],
 ['66.67%','Dies verwendet den gesamten Gruppenumsatz für einen engeren Markt.'],
 ['30.00%','Dies ist Wartung relativ zum Konzern, nicht relativ zum Markt.']
 ],[F('s=180/900=20\\%','Die Gruppenumsätze außerhalb des betrachteten Markts werden ausgeschlossen.',[['s','Anteil am regionalen externen Wartungsmarkt.']]),'600 ist für die Konzernanalyse relevant, aber nicht als Zähler dieses Marktanteils.'],'boundaries'),
 q('05','practice','b','GICS and ICB hierarchy labels are best compared by recognizing that:',[
 ['the words Industry and Sector occupy different hierarchy levels in the two systems.','Gleich klingende Namen sind nicht automatisch gleiche Ebenen.'],
 ['Sector is the top level in both systems.','ICB beginnt mit Industry.'],
 ['both systems classify each company solely by its registered office.','Geschäftstätigkeit und methodisch verwendete Ertragsinformationen bestimmen die Einordnung.']
 ],[T(['System','Von breit zu fein'],[['GICS','Sector, Industry Group, Industry, Sub-Industry'],['ICB','Industry, Supersector, Sector, Subsector']],'Die veröffentlichte Methodik und ihr Stand werden beim Vergleich genannt.'),'Taxonomien ordnen Unternehmen; die wirtschaftlich relevante Kundenaustauschbarkeit wird zusätzlich geprüft.'],'taxonomies'),
 q('06','practice','a b','A diversified group obtains 65% of revenue from equipment and 35% from software. The most appropriate approach to peer selection is to:',[
 ['review its assigned classification and separately examine segment economics for the valuation question.','Eine Hauptzuordnung kann erhebliche andere Geschäftsteile verdecken.'],
 ['assume that every classification provider must classify it using an identical 65% threshold.','Eine selbst angenommene Umsatzschwelle ersetzt die jeweilige Methodik nicht.'],
 ['treat the software business as economically irrelevant because it is the smaller segment.','Ein kleinerer Umsatzteil kann erheblichen Gewinn oder einen anderen Kapitalbedarf besitzen.']
 ],['Umsatz ist eine relevante Einordnungsinformation; die konkret verwendeten Anbieterregeln werden geprüft.','Für die Bewertung können Ertragsbeitrag, Vertragslogik und Ressourcen beider Segmente wichtiger sein als eine einzelne Hauptkategorie.'],'taxonomies'),
 q('07','practice','b','A statistical grouping based on stock return correlations is most useful for assessing:',[
 ['measured co-movement over the selected period, subject to common risk and financing influences.','Statistische Ähnlichkeit kann Portfoliofragen beantworten, ohne Produktkonkurrenz zu beweisen.'],
 ['whether customers regard the firms’ products as interchangeable.','Das benötigt Kunden- und Angebotsanalyse.'],
 ['whether every company has an identical operating business model.','Renditen können durch gemeinsame Faktoren trotz anderer Geschäftsmodelle zusammenlaufen.']
 ],['Markteinfluss, Finanzierung, Währung und Messzeitraum können die gemeinsame Renditebewegung erklären.','Eine statistische Gruppe ist deshalb von einer Produktgruppe und einer wirtschaftlich begründeten Bewertungs-Peer-Gruppe zu unterscheiden.'],'grouping'),
 q('08','practice','b c','An equipment maker and a maintenance provider serve the same factories. When grouping them for an industry forecast, the analyst should recognize that:',[
 ['new-equipment demand and service demand from the installed base can have different cyclical drivers.','Dieselben Kunden kaufen Investitionsgüter und laufende Leistungen aus unterschiedlichen Gründen.'],
 ['their revenue must decline by the same percentage whenever capital spending falls.','Vorhandene Anlagen können weiter Wartung benötigen.'],
 ['their capital requirements must be identical because the end customers are identical.','Herstellung, Service und Vorratshaltung benötigen unterschiedliche Ressourcen.']
 ],['Ein gemeinsamer Endmarkt rechtfertigt einen gemeinsamen Nachfrageblick. Die Prognose bleibt nach Neuanschaffung, installierter Basis und Ersatz getrennt.','Auch Service ist nicht risikofrei: Stilllegung, Budgetkürzung oder Eigenwartung können die externe Nachfrage reduzieren.'],'cycle'),
 q('09','practice','a b c','A group reports segment revenue of 260 and 190. The first segment’s amount includes an internal sale of 50 to the second segment. With no other internal sales, consolidated external revenue is:',[
 ['400.00','Die interne Lieferung wird einmal eliminiert.'],
 ['450.00','Dies addiert den internen Umsatz nochmals zum externen Absatz.'],
 ['350.00','Dies zieht die interne Lieferung zweimal ab.']
 ],[F('S_{external}=260+190-50=400','Der Verkauf zwischen eigenen Segmenten erzeugt keinen zusätzlichen externen Konzernumsatz.',[['S_{external}','Konsolidierter externer Umsatz.']]),'Das gleiche Erhebungsprinzip schützt auch eine Marktgröße vor interner Doppelzählung.'],'segments'),
 q('10','practice','a b','A company is listed and headquartered in Country A but earns most sales from customers in Country B. For a demand forecast, the most relevant initial geographic measure is:',[
 ['the location and economic exposure of its customers, rather than the listing location alone.','Absatzregion und Sitz beantworten andere Fragen.'],
 ['only the exchange on which the stock is listed.','Die Notierung legt nicht die Kundennachfrage fest.'],
 ['only the legal address of the parent.','Ein Sitz im Inland verhindert ausländische Nachfrageexposition nicht.']
 ],['Die operative Nachfrage folgt den relevanten Kunden. Produktionsort, Lieferanten- und Finanzierungswährung werden daneben gesondert geprüft.','Keine dieser Regionen ersetzt automatisch alle anderen geografischen Expositionen.'],'segments'),
 q('11','practice','a c','A company’s comparable revenue is 150. Estimated market revenue lies between 600 and 750. The implied market-share interval is:',[
 ['20.00% to 25.00%','Großer Nenner liefert den unteren, kleiner Nenner den oberen Anteil.'],
 ['15.00% to 20.00%','Diese Grenzen folgen nicht aus den angegebenen Umsätzen.'],
 ['25.00% to 30.00%','Der größte Nenner würde hierbei übersehen.']
 ],[F('s_{min}=150/750=20\\%,\\quad s_{max}=150/600=25\\%','Die Unsicherheit der Marktgröße wird in die entgegengesetzte Anteilsrichtung übertragen.',[['s_{min},s_{max}','Untere und obere Anteilsgrenze.']]),'Ein Punktwert innerhalb dieses Bereichs wäre ohne weitere Evidenz scheinpräzise.'],'data'),
 q('12','practice','a','Two industry reports use the same underlying survey but present similar market-size estimates. Their agreement:',[
 ['does not provide two independent confirmations of the estimate.','Beide Angaben können dieselbe Ausgangsunsicherheit besitzen.'],
 ['proves that omitted firms cannot affect the estimate.','Eine gemeinsame Quelle kann dieselben Firmen ausschließen.'],
 ['eliminates the need to inspect the survey coverage.','Erhebungseinheit und Auswahl bleiben zu prüfen.']
 ],['Quellenzahl und unabhängige Evidenz sind verschieden. Zwei Aufbereitungen derselben Erhebung können nützlich sein, erhöhen aber nicht automatisch ihre Vollständigkeit.','Die Analystin untersucht Teilnahme, Definitionen, Zeitraum und Schätzmethode.'],'data'),
 q('13','practice','a c','A supplier sells equipment to a dealer for 70, and the dealer sells the same equipment to the end user for 90. The end-user equipment market revenue from this transaction is:',[
 ['90.00','Die gewählte Frage erfasst den Endkundenverkauf einmal.'],
 ['160.00','Dies summiert zwei Stufen desselben Geräts.'],
 ['20.00','Dies ist die einfache Verkaufsspanne des Händlers, nicht Endkundenumsatz.']
 ],['Zunächst wird die Wertschöpfungsstufe festgelegt. Bei einer Endkundendefinition gehört der Verkauf für neunzig in den Markt.','Andere Aggregationen können bewusst Produktions- oder Handelsumsätze betrachten, müssen aber anders bezeichnet werden.'],'size'),
 q('14','practice','a c','A market has 12,000 comparable annual service contracts at an average realized annual price of EUR 40,000. Annual market revenue, in EUR millions, is:',[
 ['480.00','Menge mal realisierter Jahrespreis wird anschließend in Millionen umgerechnet.'],
 ['48.00','Dies ist ein Größenordnungsfehler bei der Einheit.'],
 ['4,800.00','Dies überschätzt den Betrag um den Faktor zehn.']
 ],[F('M=12000\\cdot40000/10^6=480','480 Millionen sind 480.000.000 Euro; Preis und Vertragszahl besitzen dieselbe Jahresbasis.',[['M','Jährlicher Marktumsatz in Millionen Euro.']]),'Die Zahl installierter Anlagen wäre nur dann austauschbar, wenn jede tatsächlich genau diesen Jahresvertrag besitzt.'],'size'),
 q('15','practice','a c','An analyst identifies a large total addressable market, but the company can serve only a limited geographic area and has constrained capacity. The most defensible conclusion is that:',[
 ['total potential must be narrowed for access, competition, time and execution before forecasting attainable revenue.','Potenzial, bedienbarer Bereich und erreichbar verkaufter Umsatz sind verschiedene Größen.'],
 ['total addressable market equals guaranteed company revenue.','Kunden müssen gewonnen und tatsächlich bedient werden.'],
 ['capacity constraints can be ignored because the market is large.','Personal und Anlagen begrenzen die Ausführung.']
 ],['TAM ist ein ergänzender Planungsbegriff mit expliziter eigener Abgrenzung. Es beschreibt keinen automatisch gewonnenen Anteil.','Geografie, technische Eignung, Kapazität, Abschlusswahrscheinlichkeit und Zeithorizont bestimmen die nächste Eingrenzung.'],'potential'),
 q('16','practice','c','Comparable market volume rises by 5% and the realized price per comparable unit rises by 3%. Nominal market revenue growth is:',[
 ['8.15%','Beide Wachstumsfaktoren einschließlich Kreuzterm wirken gemeinsam.'],
 ['8.00%','Dies addiert die gewöhnlichen Prozentänderungen nur näherungsweise.'],
 ['15.00%','Dies ist keine korrekte Umsatzzerlegung.']
 ],[F('g_M=1{,}05\\cdot1{,}03-1=8{,}15\\%','Der neue Umsatz ist 108,15 Prozent des alten.',[['g_M','Nominales Marktumsatzwachstum.']]),'Bei mehreren Produkten können Qualitäts- und Mischungseffekte zusätzlich zu beachten sein.'],'growth'),
 q('17','practice','c','Comparable market revenue grows from 800 to 1,000 over three years. Its compound annual growth rate is closest to:',[
 ['7.72%','Der geometrische Jahresfaktor wird aus dem Dreijahres-Endpunkt abgeleitet.'],
 ['8.33%','Dies verteilt die gesamte Änderung arithmetisch auf drei Jahre.'],
 ['25.00%','Dies ist das gesamte Dreijahreswachstum.']
 ],[F('CAGR=(1000/800)^{1/3}-1\\approx7{,}7217\\%','Dreimalige Anwendung desselben Jahresfaktors ergibt den Endwert.',[['CAGR','Geometrisch geglättete jährliche Wachstumsrate.']]),'Die Rechnung sagt nicht, dass jedes tatsächliche Zwischenjahr genau diese Rate besaß.'],'growth'),
 q('18','practice','a c','Company revenue rises following an acquisition, while total sales to end customers in the unchanged market remain constant. The most appropriate interpretation is that:',[
 ['ownership and company market share may change without new aggregate market demand.','Bisher fremder Umsatz wird der Käufergruppe zugeordnet.'],
 ['the acquisition necessarily creates equal growth in total market demand.','Ein Eigentümerwechsel allein schafft keinen zusätzlichen Endkundenverkauf.'],
 ['all of the company growth must be organic.','Übernommene Umsätze sind für die Definition organischen Wachstums getrennt zu behandeln.']
 ],['Der Firmenumfang verändert sich. Der Marktumfang verändert sich bei der genannten unveränderten Nachfrage nicht.','Wachstum nach Übernahme, organisches Wachstum und Constant Currency benötigen deshalb getrennte Definitionen.'],'growth'),
 q('19','practice','c','A company has revenue of 120 in a market of 600. Next year the market grows by 8% and the company’s share rises to 21%. Forecast company revenue is:',[
 ['136.08','Neuer Markt 648 wird mit neuem Anteil 21 Prozent multipliziert.'],
 ['129.60','Dies hält den alten Anteil zwanzig Prozent unverändert.'],
 ['142.56','Dies behandelt einen Anteilspunkt fälschlich als zusätzlichen zehnprozentigen relativen Wachstumseffekt.']
 ],[F('S_1=600\\cdot1{,}08\\cdot0{,}21=136{,}08','Der Markt- und der Anteilstreiber sind gleichzeitig berücksichtigt.',[['S_1','Passender Firmenumsatz der nächsten Periode.']]),'Der relative Anteilseffekt ist 21/20 − 1 oder fünf Prozent. Gemeinsam ergibt das 13,4 Prozent Firmenwachstum.'],'shares'),
 q('20','practice','c','A company’s market share rises from 15% to 18%. Its relative increase in share is:',[
 ['20.00%','Drei Anteilspunkte werden auf den Ausgangsanteil fünfzehn bezogen.'],
 ['3.00%','Dies verwechselt Prozentpunkte mit relativen Prozent.'],
 ['18.00%','Dies ist der neue Anteil, nicht seine Veränderung.']
 ],[F('g_s=18/15-1=20\\%','Die absolute Änderung beträgt drei Prozentpunkte, die relative Änderung zwanzig Prozent.',[['g_s','Relative Marktanteilsänderung.']]),'Bei einer Umsatzprognose wird dieser relative Faktor mit dem Marktgrößenfaktor multipliziert.'],'shares'),
 q('21','practice','c','A company’s comparable revenue grows 6% while comparable market revenue grows 10%. Its market share:',[
 ['falls because its growth factor is lower than the market growth factor.','Ein wachsendes Unternehmen kann relativ zurückfallen.'],
 ['rises because company revenue is positive and increasing.','Positive eigene Umsätze sagen nichts über relative Entwicklung.'],
 ['must remain unchanged because both company and market grow.','Unveränderter Anteil benötigt gleiche Wachstumsfaktoren.']
 ],[F('s_1/s_0=1{,}06/1{,}10\\approx0{,}963636','Der Anteil fällt relativ um etwa 3,6364 Prozent; seine Prozentpunktänderung hängt vom Ausgangsanteil ab.',[['s_0,s_1','Vorheriger und neuer Marktanteil.']]),'Der relative Nenner verhindert, absolutes Wachstum mit Wettbewerbsgewinn gleichzusetzen.'],'shares'),
 q('22','practice','a c d','A forecast assumes a firm starting with 40% market share grows 20% annually while the same market grows 5% annually indefinitely. The forecast should be challenged because:',[
 ['the implied share eventually exceeds 100% unless relative growth fades or the business and market definition changes explicitly.','Unbegrenztes Überwachstum ist innerhalb desselben vollständigen Markts unmöglich.'],
 ['a firm can never grow faster than its industry for even one year.','Zeitlich begrenzte Anteilsgewinne sind möglich.'],
 ['a high starting share removes the need to examine competitors.','Gerade die verbleibende Gewinnbarkeit und Reaktionen anderer Anbieter sind zu prüfen.']
 ],[F('s_t=0{,}4(1{,}20/1{,}05)^t','Der Faktor ist größer eins und wächst deshalb über die Anteilsgrenze hinaus.',[['s_t','Rechnerisch impliziter Anteil nach t Jahren.'],['t','Jahre der unveränderten Fortschreibung.']]),'Eine Expansion in neue Produkte oder Regionen erfordert einen ausdrücklich zusätzlichen Markt sowie seine Kosten und Konkurrenz.'],'share-limits'),
 q('23','practice','c d','The installed base is unchanged and new-equipment sales decline. A service forecast based on this installed base should:',[
 ['separately test utilization, outsourcing and maintenance frequency rather than assume perfectly fixed service revenue.','Vorhandene Anlagen geben eine Grundlage, aber Kundenverhalten und Preise können sich ändern.'],
 ['automatically decline by the exact same rate as new-equipment sales.','Bestand und Neuverkaufsstrom sind unterschiedliche Treiber.'],
 ['assume that recession cannot affect service providers.','Stilllegung, Aufschub, Eigenleistung und Neuverhandlung sind mögliche Kanäle.']
 ],['Der einfache Ansatz multipliziert vorhandene Anlagen mit extern vergebenem Anteil und Leistungshäufigkeit.','Diese Größen und der realisierte Preis werden gesondert geprüft. Der Bestandsbezug kann eine defensivere Nachfrage erklären, ohne eine Garantie zu liefern.'],'cycle'),
 q('24','practice','a b','An analyst compares an NAICS establishment statistic with the consolidated revenue of a group operating several types of establishments. Before using them in one market estimate, the analyst should:',[
 ['reconcile the production-based establishment scope with the company and segment scope.','Betriebsstätte und Konzern sind unterschiedliche Erhebungseinheiten.'],
 ['assume that every establishment of a group has the same activity code as the parent.','Verschiedene Produktionsprozesse können verschiedene Einordnungen besitzen.'],
 ['treat establishment and consolidated company revenue as interchangeable without examining their scope.','Unterschiedliche Einheiten und Konsolidierung können Umfang und Doppelzählung verändern.']
 ],['NAICS gruppiert Betriebsstätten nach Ähnlichkeit ihrer Produktionsprozesse. Eine diversifizierte Firma kann mehrere Aktivitäten enthalten.','Standardisierte Unternehmenseinordnung, Segmentumsatz und statistische Betriebsstättendaten werden vor der Kombination passend abgegrenzt.'],'taxonomies'),
 q('25','practice','c','Two firms have revenue of 100 and 300 and comparable EBIT margins of 20% and 4%, respectively. Aggregate industry EBIT margin is:',[
 ['8.00%','Gesamter EBIT 32 wird auf Gesamtumsatz 400 bezogen.'],
 ['12.00%','Dies ist der gleich gewichtete Firmenmittelwert.'],
 ['4.00%','Dies übernimmt nur die Marge des größten Anbieters.']
 ],[F('m=(100\\cdot0{,}20+300\\cdot0{,}04)/(100+300)=8\\%','Die Umsatzgewichte sind ein Viertel und drei Viertel.',[['m','Aggregierte vergleichbare EBIT-Marge.']]),'Der ungewichtete Mittelwert beschreibt eine durchschnittliche Firmenbeobachtung; er ist nicht die Marge des gesamten Umsatzes.'],'profitability'),
 q('26','practice','a c','A company with losses is removed from a full industry sample because its margin looks unusual. The resulting margin estimate should be described as:',[
 ['a measure for a changed, selectively chosen group, requiring an explicit justification.','Ein Verlust ist Teil der ursprünglichen vollständigen wirtschaftlichen Frage.'],
 ['automatically a more accurate measure of the original full industry.','Ausschluss kann die Profitabilität systematisch erhöhen.'],
 ['unaffected by the exclusion as long as the remaining companies are profitable.','Zähler und Nenner ändern sich.']
 ],['Ein Ausschluss kann für eine andere begründete Frage zulässig sein, etwa eine ausdrücklich profitable Peer-Gruppe.','Die Aussage muss diesen Umfang nennen. Sie darf nicht stillschweigend als Profitabilität aller Marktteilnehmer ausgegeben werden.'],'profitability'),
 q('27','practice','c','Two companies have identical comparable after-tax operating margins but Company A requires less operating capital per unit of revenue. With the same beginning-capital convention, Company A has:',[
 ['higher return on invested capital.','Gleicher Ertrag pro Umsatz wird mit weniger Kapital erzielt.'],
 ['necessarily lower return on invested capital.','Der geringere Nenner erhöht bei gleichem Ertrag die Rendite.'],
 ['identical return on invested capital because margins are identical.','Kapitalumschlag ist der zweite Renditetreiber.']
 ],[F('ROIC=\\frac{NOPAT}{S}\\frac{S}{IC_0}','Nachsteuermarge mal Kapitalumschlag verbindet die beiden Seiten.',[['ROIC','Operative Kapitalrendite auf den definierten Anfangsbestand.'],['NOPAT,S,IC_0','Operativer Nachsteuerertrag, zugehöriger Umsatz und Anfangskapital.']]),'Anlagealter und nicht aktivierte Ressourcen können den Buchkapitalvergleich zusätzlich einschränken.'],'capital'),
 q('28','practice','c','An industry consists of four companies with comparable market shares of 40%, 30%, 20% and 10%. The percentage-point convention HHI is:',[
 ['3,000.00','Alle einzeln bekannten Anteile werden quadriert und addiert.'],
 ['100.00','Dies addiert Anteile ohne Quadrierung.'],
 ['1,600.00','Dies erfasst nur die größte Firma.']
 ],[F('HHI=40^2+30^2+20^2+10^2=3000','Die Dezimalanteilskonvention würde stattdessen 0,30 liefern.',[['HHI','Herfindahl-Hirschman-Index auf der Skala bis zehntausend.']]),'Dies misst Konzentration. Es ist kein alleiniger Beweis hoher Preise, hoher Margen oder einer rechtlichen Entscheidung.'],'concentration'),
 q('29','practice','c d','Market shares of several small firms are reported only as one combined “Other” share. Squaring that combined share in an HHI calculation:',[
 ['overstates their contribution relative to summing their individual squared shares.','Die zusammengefasste Rechnung enthält positive Kreuzterme.'],
 ['necessarily understates their individual contribution.','Die Richtung ist bei mehreren positiven Einzelanteilen umgekehrt.'],
 ['gives the exact index regardless of the number of small firms.','Ein einziger Anbieter und mehrere Anbieter sind verschiedene Konzentrationen.']
 ],[F('(a+b)^2=a^2+b^2+2ab','Bei zwei positiven Anteilen ist der zusätzliche Kreuzterm positiv.',[['a,b','Getrennte Marktanteile zweier Firmen in derselben Konvention.']]),'Eine Gruppe mit zehn Prozent verteilt auf fünf und fünf trägt fünfzig bei, nicht hundert. Ein Restblock kann deshalb eine obere Schätzung ermöglichen, keine exakte Konzentration.'],'concentration'),
 q('30','practice','d','Few firms operate in an industry, but customers can readily switch to a different technology and entry requires little investment. The most appropriate conclusion is that:',[
 ['high observed concentration alone does not establish durable industry profitability.','Substitute und Eintritt begrenzen mögliche Preise trotz weniger bestehender Firmen.'],
 ['few incumbents guarantee high economic returns.','Rivalität und andere Kräfte können Renditen stark drücken.'],
 ['substitutes are irrelevant unless supplied by current industry members.','Eine andere Lösung desselben Bedarfs kann von außen kommen.']
 ],['Konzentration beschreibt Anbieteranteile. Five Forces untersucht zusätzlich Käufer, Lieferanten, Eintritt, Substitute und interne Rivalität.','Diese Mechanismen und die Kapitalanforderung bestimmen gemeinsam, ob attraktive Erträge bestehen können.'],'five-forces'),
 q('31','practice','d','In a simplified example, annual volume is 2 million, price is EUR 100, variable cost is EUR 60 and committed fixed operating costs are EUR 60 million. A price cut to EUR 95 with unchanged volume reduces EBIT to EUR millions of:',[
 ['10.00','Der Deckungsbeitrag sinkt um zehn Millionen bei unveränderten Fixkosten.'],
 ['20.00','Dies ist das Ergebnis vor dem Nachlass.'],
 ['70.00','Dies ist der neue Deckungsbeitrag vor Fixkosten.']
 ],[F('EBIT=(95-60)\\cdot2-60=10','Bei Mengen in Millionen ergibt die Rechnung EBIT in Millionen Euro.',[['EBIT','Jährlicher operativer Gewinn vor Finanzierung und Steuern.']]),'Vorher sind es (100 − 60) × 2 − 60 = 20. Ein fünfprozentiger Preisnachlass halbiert hier den EBIT wegen der festen Kostenbasis.'],'rivalry'),
 q('32','practice','d','Using price EUR 95, variable cost EUR 60 and fixed cost EUR 60 million, volume in millions needed to achieve EBIT of EUR 20 million is closest to:',[
 ['2.2857','Deckungsbeitrag muss Fixkosten plus Zielgewinn decken.'],
 ['2.0000','Dies ergibt nur EBIT zehn.'],
 ['2.1053','Dies erhält annähernd Umsatz, nicht den Deckungsbeitrag nach variablen Kosten.']
 ],[F('Q=(60+20)/(95-60)\\approx2{,}285714','Der nötige Mengenzuwachs gegenüber zwei Millionen beträgt etwa 14,2857 Prozent.',[['Q','Verkäufe in Millionen Einheiten.']]),'Der Vergleich setzt verfügbare Kapazität und unveränderte Kosten pro Einheit voraus. Zusätzliche Ressourcen könnten die erforderliche Menge erhöhen.'],'rivalry'),
 q('33','practice','d','An industry has substantial committed capacity, slow demand growth and costly exit. These features most directly support concern about:',[
 ['intense rivalry and incentives to discount to fill available capacity.','Verfügbares Volumen und schwieriger Ausstieg können Preisdruck erzeugen.'],
 ['the complete absence of rivalry because fixed costs are already incurred.','Versunkene oder gebundene Kosten beseitigen Absatzkonkurrenz nicht.'],
 ['guaranteed pricing power for each incumbent.','Die beschriebenen Anreize können gerade die Preisdurchsetzung schwächen.']
 ],['Kurzfristig kann zusätzlicher Deckungsbeitrag attraktiv erscheinen, obwohl die langfristige vollständige Kapitalverzinsung schwach ist.','Damit wird der Rivalitätsmechanismus erklärt, nicht eine allgemeine Gewissheit über jeden tatsächlichen Preis.'],'rivalry'),
 q('34','practice','d','A potential entrant expects NOPAT of 3 on required operating capital of 30. The relevant annual required return is 12%. The simple return comparison indicates that:',[
 ['expected return on capital is below its cost, so entry is not justified by this comparison alone.','Zehn Prozent Rendite reichen bei zwölf Prozent Anforderung nicht.'],
 ['positive NOPAT guarantees attractive entry.','Positiver Gewinn ist kein Beweis wirtschaftlicher Überrendite.'],
 ['capital requirements have no bearing on entry economics.','Die Rendite setzt den Gewinn zum benötigten Kapital in Beziehung.']
 ],[F('ROIC=3/30=10\\%<12\\%','Die Kapitalbasis und Zeitkonvention müssen zur Gewinnprognose passen.',[['ROIC','Vereinfachte operative Rendite auf die vorgegebene Kapitalbasis.']]),'Technik, Qualifikation, Kundenzugang und Risiko werden daneben geprüft. Ein hoher absoluter Investitionsbetrag ist allein noch kein dauerhafter Schutz der etablierten Firmen.'],'entry'),
 q('35','practice','d','A company’s customers obtain greater platform utility when more other users join. This mechanism is best described as:',[
 ['a network effect, which is distinct from lower unit costs from larger operating scale.','Teilnehmer erhöhen den Kundennutzen; Skalierung betrifft die Kostenkurve.'],
 ['economies of scale solely because the company has many users.','Viele Nutzer beweisen keinen Stückkostenvorteil.'],
 ['a guarantee that entry and substitution are permanently impossible.','Kundennutzen, Mehrfachnutzung, Wechsel und neue Technik bleiben zu prüfen.']
 ],['Ein Netzwerkeffekt kann den Zugang anderer Anbieter erschweren, wenn der gemeinsame Nutzen für Kunden relevant und nicht leicht erreichbar ist.','Seine Existenz und Dauer werden mit beobachtetem Verhalten begründet. Sie werden nicht bloß aus Größe abgeleitet.'],'entry'),
 q('36','practice','d','Which observation most directly supports buyer bargaining power?',[
 ['a customer can credibly move a material order to several qualified alternative suppliers at low switching cost.','Größe plus tatsächlich nutzbare Alternativen schafft Verhandlungsfähigkeit.'],
 ['a customer is large but cannot obtain the required product from another qualified supplier.','Großer Umsatzanteil allein garantiert keine glaubwürdige Ausweichoption.'],
 ['a customer accepts all offered prices and payment terms without alternatives.','Diese Beobachtung stützt keine starke Verhandlungsmacht.']
 ],['Bestellgröße, Vergleichbarkeit, Wechselkosten und Informationsstand werden gemeinsam geprüft.','Käufermacht kann neben Preis auch Qualität, Service, Zahlungsziel und den Verbleib von Risiko beeinflussen.'],'buyers'),
 q('37','practice','c d','Comparable annual credit sales remain EUR 120 million. A payment-term change raises DSO from 30 to 45, using a 365-day year and a steady sales rate. Additional receivables in EUR millions are closest to:',[
 ['4.9315','Die zusätzlichen fünfzehn Tage binden entsprechenden Jahresumsatz.'],
 ['14.7945','Dies ist der gesamte neue Forderungsbestand.'],
 ['9.8630','Dies ist der alte Forderungsbestand.']
 ],[F('\\Delta AR=120(45-30)/365\\approx4{,}931507','Die Änderung vergleicht neue und alte Bestände auf derselben Umsatzbasis.',[['\\Delta AR','Zusätzlich gebundene Forderungen in Millionen Euro.']]),'Dies ist eine Übergangsbindung, keine automatisch jährlich erneut anfallende zusätzliche Bindung desselben Bestands. Marge und Liquidität können sich deshalb unterschiedlich entwickeln.'],'buyers'),
 q('38','practice','d','Price is EUR 100, variable unit cost rises from EUR 60 to EUR 64, volume stays at 2 million and fixed costs stay at EUR 60 million. Raising price to EUR 104:',[
 ['preserves EBIT in euros but lowers the EBIT margin because revenue increases.','Die Stückspanne bleibt vierzig; der Umsatznenner steigt.'],
 ['preserves both EBIT and the percentage EBIT margin exactly.','Euroergebnis und Prozentquote haben unterschiedliche Nenner.'],
 ['guarantees higher volume because the cost increase has been passed through.','Höherer Preis kann die Nachfrage senken.']
 ],[F('EBIT=(104-64)\\cdot2-60=20,\\quad m=20/(104\\cdot2)\\approx9{,}6154\\%','Vorher ist EBIT ebenfalls zwanzig, aber die Marge zehn Prozent.',[['EBIT','Operativer Gewinn in Millionen Euro.'],['m','EBIT relativ zum passenden Umsatz.']]),'Der konstante Absatz ist hier eine kontrollierte Vergleichsannahme. In einer vollständigen Prognose wird eine mögliche Mengenreaktion geprüft.'],'suppliers'),
 q('39','practice','d','After supplier costs rise to EUR 64 per unit, a firm charges EUR 104 but volume falls to 1.9 million. Fixed costs remain EUR 60 million. EBIT in EUR millions is:',[
 ['16.00','Unveränderte Stückspanne wird auf weniger verkaufte Einheiten angewendet.'],
 ['20.00','Dies hält fälschlich die alte Menge zwei Millionen bei.'],
 ['76.00','Dies ist der Deckungsbeitrag vor Fixkosten.']
 ],[F('EBIT=(104-64)\\cdot1{,}9-60=16','Volle Stückkostenweitergabe erhält bei fallender Menge den alten Gesamtgewinn nicht.',[['EBIT','Jährlicher operativer Gewinn in Millionen Euro.']]),'Die Wirkungskette umfasst Lieferantenpreis, eigenen Preis, Nachfrage und verfügbare Kapazität. Ein isolierter Pass-through-Satz reicht nicht.'],'suppliers'),
 q('40','practice','d','A factory can replace an external maintenance contract with its own maintenance staff. In the provider’s Five Forces analysis, this is most directly:',[
 ['a substitute meeting the underlying need through a different delivery approach.','Eigenleistung kann externe Nachfrage ersetzen.'],
 ['another identical incumbent solely because it performs maintenance.','Ein Kunde mit interner Lösung muss kein externer Anbieter im definierten Markt sein.'],
 ['irrelevant because no competing external vendor is involved.','Kunden können auch außerhalb der bisherigen Anbietergruppe ausweichen.']
 ],['Direkte Rivalität betrifft die bestehenden Anbieter des abgegrenzten Markts. Substitution betrachtet eine andere Lösung desselben Kundenbedarfs.','Die Grenze wird wirtschaftlich begründet; eigene Leistung kann Marktanteilsnenner und Nachfrage unterschiedlich beeinflussen.'],'substitutes'),
 q('41','practice','d','A customer can switch to a substitute with an immediate switching cost of 50 and year-end savings of 20 for three years. At an 8% discount rate, the simplified net present value of switching is closest to:',[
 ['1.54','Abgezinste Einsparungen werden dem heutigen Wechselaufwand gegenübergestellt.'],
 ['10.00','Dies addiert künftige Einsparungen ohne Zeitwert.'],
 ['51.54','Dies ist der Barwert der Einsparungen vor Wechselkosten.']
 ],[F('NPV=\\sum_{t=1}^{3}20/1{,}08^t-50\\approx1{,}541940','Die finanzielle Vorteilhaftigkeit ist in diesem einfachen Fall gering.',[['NPV','Netto-Barwert des Wechsels in denselben Einheiten wie Aufwand und Einsparung.'],['t,\\sum','Jahresindex und Summe über drei Jahresendzahlungen.']]),'Qualität, Ausfallrisiko und nicht enthaltene Kosten können die Entscheidung verändern. Ein positiver kleiner Rechenwert ist keine risikofreie Wechselgarantie.'],'substitutes'),
 q('42','practice','a d','An analyst rates each of the Five Forces from one to five and averages them to forecast an EBIT margin. The strongest criticism is that:',[
 ['the ratings need evidence and economically justified links; their average does not automatically determine a financial margin.','Qualitative Kategorien besitzen keine natürliche gemeinsame finanzielle Maßeinheit.'],
 ['Five Forces cannot be used to organize industry evidence.','Der Rahmen ist gerade als Struktur der Wettbewerbsanalyse hilfreich.'],
 ['each force always affects profit by the exact same amount.','Relevanz, Größenordnung und Zusammenwirkung können verschieden sein.']
 ],['Ein entscheidender Käufer und ein unbedeutender Input haben nicht automatisch denselben Ergebnisbeitrag. Kräfte können sich gegenseitig verändern.','Die Analystin begründet konkrete Preis-, Kosten-, Mengen- und Kapitalfolgen samt Unsicherheit.'],'interactions'),
 q('43','practice','d','In a PESTLE analysis, changing customer preferences concerning resource use are most directly a social influence, while a new hypothetical mandatory technical requirement is primarily:',[
 ['a legal influence, with possible additional technical and environmental channels.','Eine Regel und ihr Ausführungsmechanismus können mehrere Perspektiven besitzen.'],
 ['only a social influence with no cost consequences.','Eine verbindliche technische Anforderung kann Zugang und Ressourcen beeinflussen.'],
 ['necessarily a guaranteed permanent increase in every firm’s profits.','Anpassungsbedarf, Eintritt und Nachfrage können unterschiedlich wirken.']
 ],['PESTLE ordnet externe politische, wirtschaftliche, soziale, technologische, rechtliche und ökologische Einflüsse. Es behauptet hier keine tatsächlich geltende neue Vorschrift.','Überlappende Perspektiven führen nicht dazu, dieselbe finanzielle Folge doppelt zu erfassen.'],'pestle'),
 q('44','practice','a d','A monitoring technology may reduce technician time and lower the price customers are willing to pay. An analyst should:',[
 ['model related price, volume, cost and investment effects together in a coherent scenario.','Technik verändert mehrere miteinander verbundene Treiber.'],
 ['forecast a value increase solely because the technology is new.','Neuerung kann Wettbewerb und Preisdruck verstärken.'],
 ['subtract the same development cost once under Technology and again under Legal merely because both labels apply.','Dies würde identische Zahlungen doppelt erfassen.']
 ],['Eine Umfeldbeobachtung wird über den wirtschaftlichen Mechanismus in konkrete Finanzgrößen übersetzt.','Relevante Zahlungen werden genau einmal erfasst; Preiswirkung, neue Kapazität und Entwicklungsausgaben brauchen ausdrücklich abgestimmte Annahmen.'],'channels'),
 q('45','practice','c d','An external service provider increases contracts from 2,000 to 2,500 but lowers the realized annual price from EUR 50,000 to EUR 44,000. Revenue growth is:',[
 ['10.00%','Mehr Menge und niedrigerer Preis wirken gemeinsam.'],
 ['25.00%','Dies berücksichtigt nur die Vertragszahl.'],
 ['13.00%','Dies addiert 25 Prozent und minus zwölf Prozent ohne Kreuzterm.']
 ],[F('g_S=(2500\\cdot44000)/(2000\\cdot50000)-1=10\\%','Der Umsatz steigt von hundert auf hundertzehn Millionen Euro.',[['g_S','Nominales Firmenumsatzwachstum.']]),'Ob diese Entwicklung Wert schafft, hängt zusätzlich von Technikerkosten, Qualität, Investitionen und der Konkurrenzreaktion ab.'],'channels'),
 q('46','practice','a d','An analyst varies only price while holding volume and other inputs constant. Compared with a scenario that changes price and volume together, this calculation is:',[
 ['a controlled sensitivity that does not by itself predict the full economic response.','Die isolierte Wirkung ist hilfreich, aber die konstant gehaltene Menge ist eine Annahme.'],
 ['a complete demand forecast in all circumstances.','Eine tatsächliche Mengenreaktion kann fehlen.'],
 ['an estimate of scenario probabilities automatically.','Wahrscheinlichkeiten entstehen nicht aus dem bloßen Verändern von Inputs.']
 ],['Eine Sensitivität trennt einen Recheneffekt. Ein Szenario kombiniert wirtschaftlich zusammengehörige Veränderungen.','Beide werden entsprechend benannt; ohne weitere Evidenz werden keine Eintrittswahrscheinlichkeiten behauptet.'],'channels'),
 q('47','practice','c d','A stable operating business has next-period revenue of 200, EBIT margin of 12%, tax of 25%, beginning operating capital of 100 and constant growth of 3%. New investment earns the same return as the existing business. With no other capital movements, next-period free operating cash flow is:',[
 ['15.00','NOPAT achtzehn abzüglich zusätzlichem Kapital drei.'],
 ['18.00','Dies lässt die Wachstumsinvestition aus.'],
 ['21.00','Dies addiert Kapitalbedarf statt ihn abzuziehen.']
 ],[F('NOPAT=200\\cdot0{,}12\\cdot0{,}75=18,\\quad I_{net}=100\\cdot0{,}03=3,\\quad FCFF=18-3=15','Die feste Anfangskapitalquote benötigt denselben prozentualen Kapitalzuwachs wie Umsatz.',[['NOPAT','Operativer Nachsteuerertrag.'],['I_{net}','Zusätzlich gebundenes operatives Kapital.'],['FCFF','Freie operative Zahlung.']]),'Der ROIC beträgt achtzehn Prozent. Dies ist ein ausdrücklich stabiler ergänzender Modellvergleich, keine allgemeine Gleichsetzung alter und neuer Kapitalrenditen.'],'integrated'),
 q('48','practice','a c d','Two growth plans have the same positive EBIT margin, but one requires much more additional operating capital and earns less than its cost of capital. The most defensible industry-to-valuation conclusion is that:',[
 ['positive revenue growth and profit do not ensure value creation when the required capital earns too little.','Die freie Zahlung und die Kapitalrendite erklären den wirtschaftlichen Unterschied.'],
 ['higher sales always imply a higher intrinsic value.','Kapitalbedarf und Kosten können den zusätzlichen Gewinn überwiegen.'],
 ['investment can be ignored when comparing positive EBIT margins.','Marge ist nur eine Ertragsquote, kein vollständiger Werttreiber.']
 ],['Zuerst werden Markt- und Anteilshypothesen zu Umsatz und Marge verbunden. Danach werden erforderliche Bestände, Anlagen und Risiken einbezogen.','Im ausdrücklich stabilen Vergleich kann Wachstum unterrentablen Kapitals Wert senken, obwohl der ausgewiesene Gewinn positiv bleibt.'],'integrated'),
 q('a1','mock-a','a b','For a cross-border demand analysis, an analyst selects companies solely by their headquarters and matches the word “Sector” across GICS and ICB as if it represented the same level. The most appropriate correction is to:',[
 ['reconcile the different hierarchy levels and investigate actual segment and customer exposures.','Klassifikationsebene und wirtschaftliche Region müssen beide zur Frage passen.'],
 ['retain both choices because all providers use identical hierarchy labels and headquarters determine sales.','Beide Annahmen verwechseln administrative Ordnung mit wirtschaftlichem Inhalt.'],
 ['discard all standardized classifications because no classification can help organize a universe.','Standardisierte Taxonomien sind nützlich, wenn ihre Bedeutung und Grenzen beachtet werden.']
 ],['GICS verwendet Sector als breiteste Ebene, ICB Industry. Gleiche Wörter können deshalb nicht ohne Zuordnung verglichen werden.','Firmensitz, Segmentaktivitäten und Absatzregion werden anschließend getrennt erfasst. Klassifikation unterstützt die Auswahl, ersetzt sie nicht.'],'taxonomies'),
 q('a2','mock-a','c d','A supplier wins new business from a large buyer. Annual credit sales rise from 120 to 146, DSO rises from 25 to 55, and after-tax operating profit rises by 20. Use 365 days and steady sales within each period. All other operating capital and net investment are unchanged. The increase in free operating cash flow from these changes is closest to:',[
 ['6.2192','Der zusätzliche Ertrag wird um den tatsächlichen Forderungsaufbau bei veränderter Umsatzbasis reduziert.'],
 ['8.0000','Dies verwendet den neuen Umsatz fälschlich auch für den alten Forderungsbestand.'],
 ['20.0000','Dies lässt den neuen Bestandsbedarf aus.']
 ],[F('\\Delta AR=146\\cdot55/365-120\\cdot25/365\\approx13{,}780822','Beide Bestände werden aus den jeweils passenden Umsätzen und Tagen gebildet.',[['\\Delta AR','Zusätzliche Forderungsbindung in denselben Einheiten wie Umsatz.']]),F('\\Delta FCFF=20-13{,}780822\\approx6{,}219178','Profitables zusätzliches Geschäft liefert im Übergang wegen der ausgehandelten Zahlungsbedingungen wesentlich weniger zusätzliche freie Zahlung.',[['\\Delta FCFF','Änderung der freien operativen Zahlung unter den ausdrücklich unveränderten übrigen Bestands- und Investitionsannahmen.']]),'Wachstum und Käufermacht wirken gemeinsam. Bloße Subtraktion der Tage auf einer einzigen Umsatzbasis würde die Umfangsänderung übersehen.'],'buyers'),
 q('b1','mock-b','a c','A complete industry sample has comparable revenues of 200, 500 and 300 and EBIT margins of 15%, 6% and −2%. An analyst excludes the loss-making firm and reports the resulting profitable-peer margin as the full-industry margin. The correct full-industry margin is:',[
 ['5.40%','Auch der Verlustbeitrag gehört in die unveränderte vollständige Frage.'],
 ['8.57%','Dies ist die Quote der selektiv verbleibenden Firmen.'],
 ['6.33%','Dies ist der gleich gewichtete Mittelwert der drei Einzelmargen.']
 ],[F('m=(200\\cdot0{,}15+500\\cdot0{,}06-300\\cdot0{,}02)/1000=5{,}4\\%','Gesamt-EBIT vierundfünfzig wird durch Gesamtumsatz tausend geteilt.',[['m','Aggregierte EBIT-Marge des vollständigen angegebenen Universums.']]),'Die profitable Gruppe kann separat dargestellt werden, darf aber nicht als unveränderte ganze Branche bezeichnet werden.'],'profitability'),
 q('b2','mock-b','a d','After a diagnostic protocol becomes publicly available, independent providers can qualify technicians more quickly and factories can maintain equipment internally. The defined market covers external maintenance only. With the current incumbent count unchanged, the most appropriate conclusion is that:',[
 ['entry and substitution threats may increase, so industry profitability and external market size need reassessment.','Die Technologie beeinflusst Marktzugang und die Entscheidung zwischen externer Leistung und Eigenwartung.'],
 ['competitive conditions cannot change until the number of incumbents changes.','Glaubwürdiger Eintritt und eine Ersatzlösung können schon vorher wirken.'],
 ['external market demand must increase whenever the installed equipment base is unchanged.','Eigenwartung kann externe Leistung ersetzen, obwohl gleich viele Anlagen vorhanden sind.']
 ],['PESTLE ordnet das offene Verfahren als technologische Umfeldänderung ein. Five Forces verfolgt getrennt den leichteren Eintritt und die Substitution durch Kunden-Eigenleistung.','Der unveränderte vorhandene Anbieterbestand beweist deshalb weder stabile Preise noch stabile externe Nachfrage. Marktanteile müssen mit dem ausdrücklich externen Nenner aktualisiert werden.'],'channels')
];
