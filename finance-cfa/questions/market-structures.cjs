const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('ms-'+id,'market-structures','economics',pool,los,stem,options,correct,solution,{section});
const eq=(tex,reading,symbol,meaning)=>F(tex,reading,[[symbol,meaning]]);
module.exports=[
 q('01','practice','a','A firm has revenue of 300, explicit costs of 210, and relevant implicit opportunity costs of 70. Economic profit is:',[
 ['20.','300 − 210 − 70.'],['90.','Das zieht nur explizite Zahlungen ab.'],['70.','Das sind die angegebenen Opportunitätskosten, nicht der Restgewinn.']
 ],0,[eq('\\pi=300-210-70=20','Ökonomischer Gewinn enthält bereits die angemessene Vergütung der eingesetzten Ressourcen.','\\pi','Ökonomischer Gewinn.')],'economic-profit'),
 q('02','practice','a','At its best positive output, a price-taking firm has revenue 80, avoidable variable costs 60, and unavoidable fixed costs 35. In the short run it should:',[
 ['shut down because total profit is negative.','Stilllegung würde den größeren Verlust der gesamten unvermeidbaren Fixkosten verursachen.'],['produce because its loss of 15 is smaller than the shutdown loss of 35.','Der Deckungsbeitrag von 20 trägt einen Teil der Fixkosten.'],['produce only if it can recover all sunk costs immediately.','Bereits versunkene Kosten sind nicht durch die heutige Entscheidung vermeidbar.']
 ],1,['Produktion: 80 − 60 − 35 = −15. Stilllegung: −35. Die Alternative, nicht nur das Vorzeichen des Gewinns, entscheidet.'],'shutdown'),
 q('03','practice','a','For a price-taking firm with unavoidable short-run fixed costs, price is below minimum average variable cost. The firm should:',[
 ['produce until price equals average total cost.','Eine solche Menge kann bei diesem Preis nicht einfach gewählt werden.'],['produce more to spread fixed costs over additional units.','Jede positive Produktionsalternative verschlechtert hier den Verlust gegenüber Stilllegung.'],['shut down in the short run.','Kein positiver Output deckt die vermeidbaren variablen Kosten.']
 ],2,['Die Fixkosten bleiben kurzfristig bestehen. Stilllegung minimiert unter den angegebenen Voraussetzungen den Verlust.'],'shutdown'),
 q('04','practice','a','At a smooth interior minimum of average total cost, marginal cost is:',[
 ['equal to average total cost.','Die Ableitung von ATC ist (MC − ATC)/q; am Minimum ist sie null.'],['necessarily zero.','Das Minimum der Stückkosten verlangt keine kostenfreie zusätzliche Einheit.'],['equal to total fixed cost.','Gesamte Fixkosten und Kosten je zusätzliche Einheit sind verschiedene Größen.']
 ],0,[eq('\\frac{dATC}{dq}=\\frac{MC-ATC}{q}=0\\Rightarrow MC=ATC','Die Aussage setzt positive Menge und eine glatte innere Minimumstelle voraus.','ATC,MC,q','Gesamte Durchschnittskosten, Grenzkosten und Menge.')],'costs'),
 q('05','practice','a','A firm’s cost function is TC = 18 + 6q + q². At q = 3, average total cost is:',[
 ['9.','Das sind die variablen Stückkosten.'],['15.','(18 + 18 + 9)/3.'],['12.','Das sind die Grenzkosten an dieser Stelle.']
 ],1,[eq('ATC(3)=\\frac{18+6\\cdot3+3^2}{3}=15','Fixkosten müssen für ATC mitgezählt und anschließend auf die drei Einheiten verteilt werden.','ATC(3)','Gesamte Stückkosten bei Menge drei.')],'costs'),
 q('06','practice','a','Average variable cost is AVC(q) = 12 − 4q + q² for q > 0. The price-taking firm’s short-run shutdown price is:',[
 ['12.','Das ist der Grenzwert von AVC bei Menge null, nicht das Minimum.'],['2.','Das ist die Menge am Minimum, nicht dessen Preis.'],['8.','AVC erreicht bei q = 2 den Wert 12 − 8 + 4.']
 ],2,[eq('AVC^{\\prime}=-4+2q=0\\Rightarrow q=2,\\qquad AVC(2)=8','Die positive zweite Ableitung bestätigt das Minimum.','AVC,q','Variable Stückkosten und Menge.')],'shutdown'),
 q('07','practice','a','Long-run total cost rises by less than 1% for a small 1% increase in output, with an efficient adjustment of inputs. This indicates:',[
 ['economies of scale.','Stückkosten fallen, weil Gesamtkosten weniger als proportional wachsen.'],['diseconomies of scale.','Dabei würden die Kosten mehr als proportional steigen.'],['proof that short-run marginal cost is always zero.','Langfristige Kostenskalierung impliziert keine kostenfreie Produktion.']
 ],0,['Die Kostenelastizität ist kleiner als eins. Technologie und Faktorpreise gehören zu den Voraussetzungen dieser Kostenbeurteilung.'],'scale'),
 q('08','practice','b','A small firm sells a homogeneous commodity in a market with many suppliers and low entry barriers. The standard model most directly suggests:',[
 ['a downward-sloping market demand implies the individual firm sets any price it chooses.','Markt- und Unternehmensnachfrage sind verschiedene Ebenen.'],['the individual firm takes the market price as given.','Die typische Annahme vollkommener Konkurrenz.'],['long-run economic profits are guaranteed to stay positive.','Eintritt kann ökonomische Überschüsse erodieren.']
 ],1,['Die Modellzuordnung hängt von tatsächlicher Substitution und Eintrittsmöglichkeiten ab, nicht nur von einer hohen Anbieterzahl.'],'structures'),
 q('09','practice','b e','Many firms sell differentiated products, and entry is relatively easy. This is most consistent with:',[
 ['pure monopoly.','Es gibt gerade viele vergleichbare Anbieter.'],['perfect competition with identical products.','Differenzierung verletzt hier die Homogenitätsannahme.'],['monopolistic competition.','Viele Anbieter verbinden Produktdifferenzierung mit relativ freiem Eintritt.']
 ],2,['Einzelne Firmen können fallende Nachfrage und Preis über Grenzkosten haben, während langfristiger ökonomischer Gewinn durch Eintritt begrenzt wird.'],'structures'),
 q('10','practice','b c','A firm faces inverse demand P = 80 − 2q and charges one price for all units. Its marginal revenue is:',[
 ['80 − 4q.','Gesamterlös ist 80q − 2q²; dessen Ableitung ist 80 − 4q.'],['80 − 2q.','Das ist der Preis, nicht der Grenzerlös bei fallender Nachfrage.'],['−2.','Das ist nur die Steigung der Nachfrage.']
 ],0,[eq('TR=80q-2q^2\\Rightarrow MR=80-4q','Die Preissenkung auf bisherige Einheiten reduziert den zusätzlichen Erlös.','TR,MR,q','Gesamterlös, Grenzerlös und Menge.')],'market-power'),
 q('11','practice','b','A single-price monopolist faces P = 90 − 3q, constant marginal cost 18, and fixed costs 30. The profit-maximizing price is:',[
 ['18.','Das ist MC bzw. MR an der optimalen Menge, nicht der Absatzpreis.'],['54.','MR = 90 − 6q = 18 ergibt q = 12; Nachfrage liefert 54.'],['36.','Das zieht die falsche Mengenwirkung vom Achsenabschnitt ab.']
 ],1,[eq('q^*=(90-18)/6=12,\\qquad P^*=90-3\\cdot12=54','Fixkosten beeinflussen hier den Gewinn und die Teilnahmeentscheidung, nicht die innere Grenzbedingung.','q^*,P^*','Gewinnmaximierende Menge und zugehöriger Preis.')],'monopoly-example'),
 q('12','practice','b c','At an interior single-price profit maximum, demand elasticity is −4. Under the standard assumptions, the Lerner index (P − MC)/P is:',[
 ['400%.','Das verwechselt Elastizitätsbetrag und relativen Preisaufschlag.'],['33.33%.','Das wäre der Aufschlag auf MC, wenn der Lerner-Index 25 % beträgt.'],['25%.','−1/(−4) = 0,25.']
 ],2,[eq('\\frac{P-MC}{P}=-\\frac1{-4}=0{,}25','Der Nenner ist der Preis. Ein prozentualer Aufschlag auf Grenzkosten verwendet einen anderen Nenner.','P,MC','Preis und Grenzkosten.')],'market-power'),
 q('13','practice','c','In the standard long-run equilibrium of monopolistic competition, a firm typically has:',[
 ['zero economic profit while price exceeds marginal cost.','Eintritt beseitigt den Gesamtüberschuss, nicht notwendigerweise den Preisaufschlag auf MC.'],['positive economic profit guaranteed by free entry.','Freier Eintritt begrenzt gerade diese Gewinne.'],['price equal to marginal cost and minimum average total cost necessarily.','Das ist die klassische Wettbewerbslösung unter zusätzlichen Voraussetzungen, nicht die übliche differenzierte Lösung.']
 ],0,['Der Preis entspricht ATC an der gewählten Menge. Diese Menge liegt im Standardmodell links vom ATC-Minimum.'],'monopolistic-competition'),
 q('14','practice','c','With other conditions unchanged, entry of close differentiated substitutes most directly tends to:',[
 ['increase every incumbent’s demand indefinitely.','Zusätzliche Substitute teilen die Nachfrage typischerweise auf.'],['reduce the demand faced by an existing monopolistic competitor.','Kunden können auf zusätzliche ähnliche Angebote ausweichen.'],['eliminate all product differences by definition.','Eintritt muss Differenzierung nicht aufheben.']
 ],1,['Die individuelle Nachfrage- und Grenzerlöskurve können sich nach innen verschieben, bis ökonomische Überschüsse im Standardmodell verschwinden.'],'monopolistic-competition'),
 q('15','practice','c','A differentiated firm has P = ATC = 24 and MC = 15 at its optimal output. Its economic profit per unit is:',[
 ['9.','Das ist Preis minus Grenzkosten, nicht Preis minus Gesamtkosten je Einheit.'],['15.','Das ist MC.'],['0.','P − ATC = 0.']
 ],2,[eq('\\pi/q=P-ATC=24-24=0','Ein positiver Preisaufschlag auf MC kann die übrigen Kosten decken, ohne ökonomischen Gesamtgewinn zu erzeugen.','\\pi,q,P,ATC','Ökonomischer Gewinn, Menge, Preis und gesamte Stückkosten.')],'monopolistic-competition'),
 q('16','practice','d','In the standard Cournot model, firms simultaneously choose:',[
 ['quantities, treating rivals’ quantities as given when finding their own best response.','Die Mengenwahl bestimmt anschließend den gemeinsamen Preis über die Nachfrage.'],['identical prices through an explicit joint agreement.','Cournot setzt keine Preisabsprache voraus.'],['a leader’s quantity before the follower observes it.','Das wäre eine sequenzielle Führer-Folger-Struktur.']
 ],0,['Das Nash-Gleichgewicht verlangt, dass die gewählten Mengen gegenseitige beste Antworten sind.'],'cournot'),
 q('17','practice','d','Two symmetric Cournot firms face P = 120 − (q₁ + q₂) and constant marginal cost 30, with no fixed costs. Each equilibrium quantity is:',[
 ['45.','Das ist die gemeinsame Monopolmenge, nicht die Menge jeder Cournot-Firma.'],['30.','(120 − 30)/3.'],['60.','Das ist die gesamte Cournot-Menge.']
 ],1,[eq('q_i^*=(120-30)/3=30','Jede Menge muss beste Antwort auf die andere sein; die Gesamtmenge ist 60 und der Preis 60.','q_i^*','Cournot-Menge jeder symmetrischen Firma.')],'cournot'),
 q('18','practice','d','In a homogeneous-product Bertrand model with identical constant marginal costs and sufficient capacity, the standard equilibrium price equals:',[
 ['the monopoly price.','Jede Firma hätte einen Unterbietungsanreiz.'],['zero regardless of cost.','Positive Grenzkosten begrenzen die gewinnsinnvolle Unterbietung.'],['marginal cost.','Unter den angegebenen strengen Voraussetzungen treibt Preiswettbewerb den Aufschlag auf null.']
 ],2,['Differenzierung, knappe Kapazität oder unterschiedliche Kosten können das Ergebnis verändern.'],'strategic-choices'),
 q('19','practice','d','A Nash equilibrium is a set of choices in which:',[
 ['no player benefits from a unilateral deviation while others’ choices remain fixed.','Das ist die Bedingung gegenseitiger bester Antworten.'],['joint industry profit must be maximized.','Individuelle Anreize können ein schlechteres gemeinsames Ergebnis erzeugen.'],['all players must earn equal profit.','Symmetrische Gewinne sind keine allgemeine Nash-Voraussetzung.']
 ],0,['Die Gleichgewichtsbedingung beschreibt strategische Stabilität innerhalb des Modells, nicht gesellschaftliche Optimalität.'],'cournot'),
 q('20','practice','d','Relative to simultaneous quantity competition in the stated symmetric linear model, a credible Stackelberg quantity leader benefits by:',[
 ['assuming the follower never reacts.','Der Führer berücksichtigt gerade die Reaktionsfunktion.'],['choosing its quantity while anticipating the follower’s best response.','Die Reihenfolge und Bindungswirkung verändern das Optimierungsproblem.'],['automatically forcing the market price to zero.','Das folgt nicht aus der Mengenführerschaft.']
 ],1,['Eine unverbindliche Ankündigung allein ist keine glaubwürdige Mengenverpflichtung.'],'strategic-choices'),
 q('21','practice','e','A market has percentage shares 50, 20, 15, and 15. Its HHI using percentage-point shares is:',[
 ['100.','Das ist die Anteilssumme.'],['0.335.','Das wäre dieselbe Konzentration in der Dezimalanteilsskala.'],['3,350.','50² + 20² + 15² + 15².']
 ],2,[eq('HHI=50^2+20^2+15^2+15^2=3350','Die maximale Skala bei Prozentanteilen ist 10.000.','HHI','Herfindahl-Hirschman-Index.')],'concentration'),
 q('22','practice','e','Market shares of 12% and 8% are combined, with all other shares unchanged. The mechanical change in HHI on the 0–10,000 scale is:',[
 ['192.','2 × 12 × 8.'],['20.','Das ist der zusammengelegte Marktanteil.'],['400.','Das ist das Quadrat des neuen Anteils, ohne die bisherigen Quadrate abzuziehen.']
 ],0,[eq('\\Delta HHI=20^2-12^2-8^2=192','Die zusätzliche Konzentration entsteht aus dem Kreuzprodukt der beiden Anteile.','\\Delta HHI','Änderung des HHI.')],'concentration'),
 q('23','practice','e','A high industry concentration ratio by itself is insufficient to establish pricing power primarily because it does not fully capture:',[
 ['the existence of numerical market shares.','Anteile sind gerade seine Grundlage.'],['market definition, entry threats, substitutes, and buyer power.','Diese Faktoren beeinflussen Wettbewerb über die bloße Anteilsverteilung hinaus.'],['the rule that every concentrated firm must incur losses.','Eine solche Regel existiert nicht.']
 ],1,['Die Marktgrenze und tatsächlichen Wettbewerbsmechanismen müssen zusätzlich untersucht werden.'],'concentration'),
 q('24','practice','a b c','A differentiated producer increases advertising, raising both demand and cost. The economically relevant decision criterion is whether:',[
 ['revenue rises, regardless of incremental cost.','Umsatz allein misst keinen zusätzlichen Überschuss.'],['all competitors use the same advertising budget.','Gleiche Ausgaben beweisen keinen Nutzen.'],['the change improves expected economic profit after relevant costs.','Nachfragewirkung, Kosten und Opportunitätskosten gehören gemeinsam in den Vergleich.']
 ],2,['Produktdifferenzierung kann Preissetzung beeinflussen, bleibt aber eine Investition mit Nutzen und Kosten.'],'monopolistic-competition'),
 q('a1','mock-a','a','A firm’s best positive output yields price 12, AVC 9, ATC 14, and quantity 10. Its fixed costs are unavoidable in the short run. Producing rather than shutting down improves profit by:',[
 ['20.','Das ist der Betrag des Verlusts bei Produktion.'],['50.','Das sind die gesamten Fixkosten.'],['30.','Deckungsbeitrag (12 − 9) × 10.']
 ],2,[eq('\\Delta\\pi=(12-9)10=30','Produktion verliert 20; Stilllegung verliert (14 − 9) × 10 = 50. Die Verbesserung beträgt 30.','\\Delta\\pi','Gewinnverbesserung gegenüber Stilllegung.')],'shutdown'),
 q('a2','mock-a','d','Two symmetric Cournot firms face P = 150 − 2(q₁ + q₂), with constant marginal cost 30 and zero fixed cost. Equilibrium market price is:',[
 ['70.','Jede Firma produziert 20, Gesamtmenge 40; 150 − 2 × 40.'],['30.','Das ist der Bertrand-/Grenzkostenpreis unter anderen Spielregeln.'],['90.','Das ist der Preis bei gemeinsamer Monopolmengenwahl.']
 ],0,[eq('q_i^*=(150-30)/(3\\cdot2)=20,\\qquad P^*=150-2(40)=70','Die Marktstruktur allein reicht nicht; hier ist die gleichzeitige Mengenwahl ausdrücklich vorgegeben.','q_i^*,P^*','Menge jeder Firma und Marktpreis im Cournot-Gleichgewicht.')],'cournot'),
 q('a3','mock-a','e','Two markets each have a four-firm concentration ratio of 100%. One has four equal firms, while the other has one dominant firm and three smaller firms. HHI will:',[
 ['necessarily be identical because CR4 is identical.','HHI erfasst die Verteilung innerhalb der vier Anbieter.'],['be higher in the more unequal market-share distribution.','Das Quadrieren gewichtet große Anteile überproportional.'],['be lower whenever one firm is larger.','Das kehrt den Konzentrationseffekt um.']
 ],1,['Die identische CR4 verdeckt Unterschiede, die der HHI im angegebenen Vergleich sichtbar macht.'],'concentration'),
 q('b1','mock-b','b c','A single-price firm faces demand elasticity −3 at an interior profit maximum with marginal cost 20. The implied optimal price is:',[
 ['26.67.','Das behandelt den Lerner-Index fälschlich als Aufschlag auf MC.'],['30.00.','(P − 20)/P = 1/3 ergibt P = 30.'],['60.00.','Das multipliziert MC mit dem Elastizitätsbetrag ohne die Grenzerlösbeziehung.']
 ],1,[eq('P=\\frac{20}{1-1/3}=30','Der relative Aufschlag bezieht sich auf den Verkaufspreis, nicht direkt auf die Grenzkosten.','P','Optimaler einheitlicher Preis unter den genannten Annahmen.')],'market-power'),
 q('b2','mock-b','c','A monopolistic competitor in standard long-run equilibrium produces below the quantity that minimizes ATC. This is associated with:',[
 ['a guaranteed negative economic profit.','Langfristig kann trotzdem genau Nullgewinn gelten.'],['the absence of any product differentiation.','Differenzierung ist Teil dieses Modells.'],['excess capacity despite zero economic profit.','Die Menge liegt links vom Stückkostenminimum, während P = ATC an der gewählten Menge gilt.']
 ],2,['Excess Capacity bezeichnet hier den Abstand zur kostenminimalen Menge, nicht automatisch eine direkt gemessene physische Leerlaufquote.'],'monopolistic-competition'),
 q('b3','mock-b','d','In a one-period pricing game, each firm earns more by cutting its price regardless of whether the rival holds or cuts. Price cutting is:',[
 ['a dominant strategy for each firm.','Die eigene beste Wahl bleibt bei beiden Rivalenentscheidungen dieselbe.'],['proof that jointly holding prices is the Nash equilibrium.','Jede Firma hätte von dort einen einseitigen Abweichungsanreiz.'],['possible only if firms explicitly coordinate.','Dominante individuelle Anreize benötigen keine Koordination.']
 ],0,['Das gemeinsame Gleichgewicht kann für beide schlechter sein als ein Ergebnis, von dem eine einseitige Abweichung verlockend wäre.'],'strategic-choices')
];
