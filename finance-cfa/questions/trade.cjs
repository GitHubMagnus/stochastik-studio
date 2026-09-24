const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('tr-'+id,'trade','economics',pool,los,stem,options,correct,solution,{section});
const eq=(tex,reading,symbol,meaning)=>F(tex,reading,[[symbol,meaning]]);
module.exports=[
 q('01','practice','a','Country A needs 2 labor hours per unit of wheat and 3 per unit of cloth. Country B needs 4 and 5 hours, respectively. Which statement is correct?',[
 ['B has an absolute advantage in cloth.','B braucht auch für Tuch mehr Arbeitsstunden.'],['A has an absolute advantage in both goods and B a comparative advantage in cloth.','Tuch kostet B 5/4 Weizen, A dagegen 3/2 Weizen.'],['A has a comparative advantage in both goods.','Im Zwei-Güter-Modell kann A bei unterschiedlichen relativen Kosten nicht in beiden komparativ überlegen sein.']
 ],1,['Absolute Vorteile vergleichen direkte Produktivität. Komparative Vorteile vergleichen entgangene Produktion des anderen Gutes.'],'comparative'),
 q('02','practice','a','A worker can produce either 12 units of wheat or 8 units of cloth in a day. The opportunity cost of one unit of cloth is:',[
 ['0.67 units of wheat.','Das ist der Kehrwert und beschreibt Tuch je Weizeneinheit.'],['4.00 units of wheat.','Die Differenz der Tagesmengen ist kein relativer Stückpreis.'],['1.50 units of wheat.','12/8 Weizeneinheiten werden pro Tucheinheit aufgegeben.']
 ],2,[eq('OC_C=12/8=1{,}5','Die Opportunitätskosten vergleichen alternative Nutzung derselben Tagesarbeitszeit.','OC_C','Weizeneinheiten je Tucheinheit.')],'comparative'),
 q('03','practice','a','The opportunity cost of cloth is 2 units of wheat in A and 1.25 units of wheat in B. Which trade price permits both to gain under the simple two-good model?',[
 ['1.60 units of wheat per cloth.','Der Preis liegt strikt zwischen den Opportunitätskosten.'],['2.20 units of wheat per cloth.','A würde Tuch günstiger selbst herstellen.'],['1.00 unit of wheat per cloth.','B erhält weniger Weizen als seine entgangene Eigenproduktion.']
 ],0,['B exportiert Tuch und erhält mehr als 1,25 Weizen; A importiert Tuch für weniger als die eigenen Kosten von 2 Weizen.'],'exchange'),
 q('04','practice','a','Trade increases aggregate consumption opportunities, but workers cannot quickly move out of an import-competing industry. Which conclusion is best supported?',[
 ['The comparative-advantage argument implies that their adjustment costs are zero.','Der einfache Gesamtgewinnbeweis beseitigt keine realen Anpassungsfriktionen.'],['Aggregate gains and losses for some groups can occur together.','Verteilung und gesamtwirtschaftliche Möglichkeiten sind verschiedene Ebenen.'],['All gains from trade must accrue to the displaced workers.','Eine solche automatische Verteilung folgt aus dem Modell nicht.']
 ],1,['Mobilität, Ausbildung, Übergangszeit und Politik bestimmen, wie Gewinne und Kosten verteilt werden.'],'gains-costs'),
 q('05','practice','b','For a small importing economy, demand is QD = 120 − 2P and supply is QS = P − 15. At the world price of 25, imports equal:',[
 ['70.','Das ist die gesamte Nachfrage.'],['10.','Das ist die inländische Produktion.'],['60.','Nachfrage 70 minus Angebot 10.']
 ],2,[eq('M=(120-2\\cdot25)-(25-15)=60','Importe decken die Differenz zwischen inländischem Konsum und Produktion.','M','Importmenge.')],'small-country'),
 q('06','practice','b','Demand is QD = 120 − 2P and supply QS = P − 15. The world price is 25 and a specific tariff is 5. The country is small and remains an importer. Its domestic price becomes:',[
 ['30.','Weltpreis plus Stückzoll.'],['20.','Der Zoll senkt den Importpreis im kleinen Land nicht.'],['45.','Das wäre der Autarkiepreis dieser Kurven.']
 ],0,['Arbitrage zwischen importierter und inländischer Ware setzt im Modell den Preis auf 25 + 5. Der Zoll liegt unter dem prohibitiv wirkenden Niveau.'],'tariff'),
 q('07','practice','b','Demand is QD = 120 − 2P, supply QS = P − 15, and the world price is 25. After a specific tariff of 5, tariff revenue equals:',[
 ['300.','Das multipliziert den Zoll mit der alten Importmenge 60.'],['225.','Nach dem Zoll: QD 60, QS 15, Importe 45; 5 × 45.'],['75.','Das multipliziert den Zoll nur mit der inländischen Produktion.']
 ],1,[eq('TR=5[(120-2\\cdot30)-(30-15)]=225','Der Zoll wird auf tatsächliche Importe nach der Verhaltensreaktion erhoben.','TR','Zolleinnahmen.')],'tariff'),
 q('08','practice','b','In a small country, a tariff of 6 raises domestic production by 4 units and reduces consumption by 8 units. With linear curves and no other distortions, the national deadweight loss is:',[
 ['72.','Das lässt den Dreiecksfaktor 1/2 weg.'],['24.','Das erfasst nur das Konsumdreieck.'],['36.','0,5 × 6 × (4 + 8).']
 ],2,[eq('DWL=\\tfrac12\\cdot6\\cdot4+\\tfrac12\\cdot6\\cdot8=36','Überproduktion und entgangener Konsum verursachen getrennte Effizienzverluste.','DWL','Nationaler Nettowohlfahrtsverlust.')],'tariff-welfare'),
 q('09','practice','b','A tariff reduces consumer surplus by 420, increases producer surplus by 110, and generates government revenue of 250. The change in national welfare is:',[
 ['−60.','−420 + 110 + 250.'],['−310.','Das lässt die staatlichen Einnahmen weg.'],['−420.','Das ignoriert Umverteilungen an Produzenten und Staat.']
 ],0,[eq('\\Delta W=-420+110+250=-60','Nicht jeder Konsumentenverlust ist ein nationaler Nettoverlust; ein Teil fließt anderen inländischen Gruppen zu.','\\Delta W','Veränderung der nationalen Wohlfahrt im partiellen Modell.')],'tariff-welfare'),
 q('10','practice','b','A binding import quota yields a domestic price of 34, a world price of 26, and imports of 15 units. The total quota rent is:',[
 ['510.','Das ist der inländische Verkaufswert aller Importe.'],['120.','(34 − 26) × 15.'],['390.','Das sind die Ausgaben zum Weltpreis.']
 ],1,[eq('R=(34-26)15=120','Die Knappheitsrente ist die Preisdifferenz je importierter Einheit mal erlaubte Menge.','R','Gesamte Quotenrente.')],'quota'),
 q('11','practice','b','An import quota generates rent of 120. If the rights are awarded free to foreign exporters rather than auctioned domestically, with prices and quantities unchanged, national welfare is:',[
 ['unchanged because domestic prices are unchanged.','Die Empfänger der Rente beeinflussen nationale Wohlfahrt.'],['higher by 120.','Die Rente fließt aus dem Inland heraus.'],['lower by 120.','Dem Inland entgehen gegenüber der Auktion 120 an Einnahmen.']
 ],2,['Preise und Mengen bestimmen Produktions- und Konsumverzerrungen. Zusätzlich bestimmt die Eigentümerschaft der Importrechte, in welchem Land die Rente anfällt.'],'quota'),
 q('12','practice','b','After an outward demand shift, compare a fixed specific tariff with an initially equivalent binding import quota in a small country. Other conditions are unchanged. The tariff is more likely to allow:',[
 ['imports to rise while keeping the domestic price at world price plus tariff.','Bei fixer Weltpreisannahme ist die Importmenge unter dem Zoll anpassungsfähig.'],['imports to remain fixed while the domestic price rises above its old level.','Das beschreibt die bindende Quote.'],['the world price to rise solely because the country is small.','Die kleine Volkswirtschaft beeinflusst im Modell den Weltpreis gerade nicht.']
 ],0,['Eine statische Äquivalenz bei einer Nachfragekurve bedeutet keine gleiche Reaktion auf spätere Schocks.'],'quota'),
 q('13','practice','b','A small exporting economy has supply QS = P − 10 and demand QD = 100 − 2P. The world price is 40. A subsidy of 4 per exported unit raises the domestic price to 44. Government expenditure is:',[
 ['40.','Das verwendet die alte Exportmenge 10.'],['88.','Neue Exporte: 34 − 12 = 22, mal 4.'],['136.','Das subventioniert rechnerisch auch im Inland verkaufte Produktion.']
 ],1,[eq('G=4[(44-10)-(100-2\\cdot44)]=88','Eine Exportsubvention wird auf exportierte, nicht auf sämtliche produzierten Einheiten gezahlt.','G','Staatliche Subventionsausgabe.')],'subsidies'),
 q('14','practice','b','An export subsidy of 4 in a small economy increases output by 4 and reduces domestic consumption by 8. With linear curves and no other distortions, the national deadweight loss is:',[
 ['48.','Das zählt die vollen Rechtecke statt der Verzerrungsdreiecke.'],['16.','Das erfasst nur die Konsumverzerrung.'],['24.','0,5 × 4 × (4 + 8).']
 ],2,[eq('DWL=\\tfrac12\\cdot4(4+8)=24','Produzentenrenten sind um Konsumentenverluste und öffentliche Kosten zu ergänzen.','DWL','Nationaler Effizienzverlust.')],'subsidies'),
 q('15','practice','b','A small importing country pays a subsidy on each unit of domestic production while maintaining free imports. Relative to a tariff designed to produce the same output increase, the production subsidy most directly avoids:',[
 ['the tariff-induced consumption distortion.','Konsumenten können weiterhin zum Weltpreis kaufen.'],['all budgetary costs.','Die Subvention belastet den Staatshaushalt.'],['the incentive to expand domestic production.','Diese Expansion ist gerade das gemeinsame Ziel der beiden Maßnahmen.']
 ],0,['Die Produktionsverzerrung bleibt; Steuerfinanzierung kann zusätzliche Kosten erzeugen, die im einfachen Teilmodell fehlen.'],'subsidies'),
 q('16','practice','b','A proposed technical product standard may reduce a genuine safety risk but also raises foreign firms compliance costs. The most appropriate analysis should:',[
 ['classify every standard as welfare reducing without assessing the risk.','Ein legitimer Sicherheitsnutzen kann relevant sein.'],['compare the safety benefit with trade and compliance costs, including less restrictive alternatives.','Ziel, Wirksamkeit und Kosten müssen gemeinsam beurteilt werden.'],['ignore unequal compliance costs because the instrument is not a tariff.','Auch nichttarifäre Maßnahmen können Marktzugang beeinflussen.']
 ],1,['Die Instrumentenbezeichnung entscheidet nicht allein über Nettowohlfahrt oder Motivation.'],'other-barriers'),
 q('17','practice','c','Members remove internal tariffs but each retains its own external tariff schedule. This arrangement is a:',[
 ['customs union.','Eine Zollunion hat einen gemeinsamen Außenzoll.'],['common market.','Ein gemeinsamer Markt ergänzt unter anderem Faktormobilität und geht über diese Angaben hinaus.'],['free trade area.','Interne Handelsliberalisierung bei eigenständiger Außenhandelspolitik.']
 ],2,['Ursprungsregeln sollen verhindern, dass Güter nur über das Mitglied mit dem niedrigsten Außenzoll umgeleitet werden.'],'integration'),
 q('18','practice','c','Relative to a customs union, a common market most directly adds:',[
 ['greater freedom of movement for labor and capital.','Faktormobilität ist die wesentliche zusätzliche Dimension.'],['independent external tariffs for every member.','Das würde die gemeinsame Zollpolitik zurücknehmen.'],['a requirement that a single currency must immediately be adopted.','Währungsunion ist eine eigene Integrationsdimension.']
 ],0,['Wirtschaftspolitische Koordination einer Wirtschaftsunion und monetäre Integration sind weitere, zu unterscheidende Schritte.'],'integration'),
 q('19','practice','c','Producing one unit domestically costs 130. A partner can produce it for 100. A trade agreement removes a barrier and replaces domestic production with the partner import. Ignoring demand changes and other costs, the resource saving is:',[
 ['130.','Die Partnerproduktion benötigt weiterhin Ressourcen.'],['30.','130 − 100.'],['230.','Ressourcenkosten werden verglichen, nicht addiert.']
 ],1,[eq('\\Delta C=130-100=30','Teurere heimische Produktion wird durch günstigere Partnerproduktion ersetzt.','\\Delta C','Ressourcenersparnis je Einheit durch Handelsschaffung.')],'creation-diversion'),
 q('20','practice','c','A country initially imports one unit from a nonmember at world cost 70 plus a tariff of 20. After a preferential agreement, it imports tariff-free from a partner at cost 82. With quantity fixed, the national welfare change is:',[
 ['+8.','Das ist nur der Konsumentengewinn von 90 auf 82.'],['−20.','Das ist nur der entfallene staatliche Ertrag.'],['−12.','Konsument +8, Staat −20, netto −12.']
 ],2,[eq('\\Delta W=(90-82)-20=-12','Die neue Quelle verbraucht 12 mehr Ressourcen. Der niedrigere Käuferpreis allein beweist keinen nationalen Gewinn.','\\Delta W','Nationale Wohlfahrtsänderung je Einheit.')],'creation-diversion'),
 q('21','practice','b','A small country has an autarky price of 45 and a world price of 25. A specific tariff is increased from 25 to 30. With no imports under either tariff, the domestic equilibrium price is:',[
 ['45.','Die prohibitive Barriere lässt den Binnenmarkt zum Autarkiegleichgewicht zurückkehren.'],['55.','Weltpreis plus Zoll ist bei ausbleibenden Importen keine bindende Preisgleichheit.'],['50.','Auch der alte Weltpreis-plus-Zoll liegt über dem Autarkiepreis.']
 ],0,['Die Formel Inlandspreis = Weltpreis + Zoll gilt für weiterhin positive Importe. Andernfalls bestimmen heimische Nachfrage und Angebot den Preis.'],'tariff'),
 q('22','practice','a b','A large importing country considers a tariff. Relative to the small-country model, a potentially relevant additional effect is:',[
 ['the disappearance of domestic consumption distortion.','Die Verzerrung kann bestehen bleiben.'],['a change in the foreign export price and hence terms of trade.','Marktmacht kann einen Teil der Last auf ausländische Anbieter verlagern.'],['automatic immunity from retaliation.','Handelspartner können reagieren.']
 ],1,['Ein möglicher Terms-of-Trade-Gewinn ist gegen Verzerrungen und Gegenmaßnahmen abzuwägen. Er macht nicht jeden Zoll wohlfahrtssteigernd.'],'tariff-welfare'),
 q('a1','mock-a','b','Demand is QD = 140 − 3P and supply QS = 2P − 20 in a small country. The world price is 24. A specific tariff of 4 is introduced. National deadweight loss is closest to:',[
 ['40.','Produktion steigt um 8, Konsum fällt um 12; 0,5 × 4 × 20.'],['80.','Der Dreiecksfaktor fehlt; 80 sind hier zugleich die Zolleinnahmen, nicht der Nettowohlfahrtsverlust.'],['32.','Das ist Zollhöhe mal Produktionsanstieg ohne Dreiecksfaktor; der Konsumverlust fehlt.']
 ],0,[eq('DWL=\\tfrac12\\cdot4[(36-28)+(68-56)]=40','Bei P = 24 sind Angebot/Nachfrage 28/68, bei P = 28 sind sie 36/56.','DWL','Nationaler Nettowohlfahrtsverlust.')],'tariff-welfare'),
 q('b1','mock-b','c','Before a trade agreement, a country imports one unit from an outsider at 60 plus a tariff of 18. After the agreement, a partner supplies that unit tariff-free for 68. Holding quantity fixed, the national welfare change is:',[
 ['+10.','Das ist lediglich der Preisvorteil für den Käufer.'],['−8.','Käufer +10, Staat −18, netto −8.'],['−18.','Der verlorene Zoll muss mit dem Konsumentengewinn verrechnet werden.']
 ],1,[eq('\\Delta W=(78-68)-18=-8','Handelsumlenkung ersetzt Ressourcenaufwand 60 durch 68.','\\Delta W','Nationale Wohlfahrtsänderung je Einheit.')],'creation-diversion')
];
