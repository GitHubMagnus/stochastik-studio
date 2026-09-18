const {Q}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('eiii-'+id,'standard-iii','ethics',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a c','A pension sponsor asks its investment manager to buy an unsuitable asset to support the sponsor’s business. The manager’s primary loyalty in managing plan assets is to:',[
 ['the sponsor’s finance director, who selected the manager.','Die Auswahl des Verwalters macht den Finanzvorstand nicht zum maßgeblichen Begünstigten.'],
 ['the plan participants and beneficiaries.','Ihre Ansprüche und das Mandat sind für die Verwaltung des Plans maßgeblich.'],
 ['the manager’s employer, which could receive more business.','Neugeschäft steht nicht vor den Kundeninteressen.']
 ],1,['Zuerst den Kunden der konkreten Tätigkeit identifizieren. Die Pensionsverwaltung soll den Planbegünstigten dienen; der Auftrag zur Unterstützung anderer Geschäftsinteressen beseitigt diese Pflicht nicht.'],'loyalty'),
 q('02','practice','a c','Broker X offers a lower commission but predictably worse total execution terms than Broker Y, with all relevant facts known in advance. Selecting X solely for its lower commission:',[
 ['necessarily satisfies best execution.','Ein Einzelpreis bildet die Gesamtkosten nicht ab.'],
 ['is required whenever the client has a small account.','Die Kontogröße schafft keine solche allgemeine Regel.'],
 ['does not establish that the manager acted in the client’s best interest.','Preiswirkung und andere Ausführungsmerkmale gehören in den Vergleich.']
 ],2,['Best Execution wird nicht aus einer isolierten Provision abgeleitet. Die Aufgabe gibt ausdrücklich ungünstigere Gesamtbedingungen an.'],'loyalty'),
 q('03','practice','a c','An adviser offers a disclosed premium discussion service to every client willing to pay. Research recommendations are first distributed fairly to all relevant clients, and the later discussions do not disadvantage others. The service is:',[
 ['permissible on the stated facts.','Unterschiedliche offen zugängliche Serviceumfänge sind nicht automatisch unfaire Behandlung.'],
 ['prohibited because fair treatment requires identical service.','Fair ist nicht gleichbedeutend mit in jeder Hinsicht identisch.'],
 ['permissible only if research is first given to premium clients.','Eine benachteiligende Vorabverteilung wäre gerade problematisch.']
 ],0,['Die entscheidenden Voraussetzungen sind offene Verfügbarkeit, Offenlegung und fehlende Benachteiligung. Prüfe diese statt allein den unterschiedlichen Preis.'],'fair-dealing'),
 q('04','practice','a c','A manager gives a favored client advance notice of a recommendation before the firm’s other affected clients. The advance notice disadvantages those clients. Disclosure of this practice:',[
 ['makes the practice fair.','Offenlegung hebt den Nachteil nicht auf.'],
 ['does not cure the unfair treatment.','Die Pflicht bleibt materiell bestehen.'],
 ['removes the need to assess suitability.','Eignung ist eine zusätzliche unabhängige Pflicht.']
 ],1,['Der Sachverhalt stellt die Benachteiligung ausdrücklich fest. Eine Beschreibung des Verfahrens verwandelt diese nicht in faire Behandlung.'],'fair-dealing'),
 q('05','practice','a c','Three suitable clients submit orders for 100, 300, and 600 shares before a block trade. Only 250 shares are filled. Under a preannounced pro rata policy with no minimum lot size, the second client receives:',[
 ['83 shares.','Das wäre annähernd gleiche Stückzahl statt proportionaler Erfüllung.'],
 ['150 shares.','Das ist die Zuteilung des dritten Kunden.'],
 ['75 shares.','250 × 300 / 1.000 = 75.']
 ],2,['Gesamtbestellung 1.000 Stück; Erfüllungsquote 25 %. Die zweite Bestellung von 300 Stück erhält daher 75 Stück. Die übrigen erhalten 25 und 150; zusammen sind das 250.'],'allocation'),
 q('06','practice','a c','A client has an unavoidable large payment due in three months. An adviser recommends investing the required cash in an asset that cannot be sold or redeemed for four years, solely because its expected return is higher. The recommendation most directly fails to consider:',[
 ['the client’s liquidity constraint.','Die Anlage kann den bekannten Zahlungstermin nicht bedienen.'],
 ['whether all other clients own the same asset.','Identische Portfolios sind keine Voraussetzung der Eignung.'],
 ['whether the adviser personally owns it.','Persönliches Eigentum beseitigt die Fristenabweichung nicht.']
 ],0,['Die zeitliche Verfügbarkeit ist hier entscheidend. Erwartete Rendite und pünktliche Zahlungsfähigkeit sind unterschiedliche Eigenschaften.'],'suitability'),
 q('07','practice','a c','An adviser adds an instrument that is risky in isolation but reduces a client portfolio’s relevant risk. It is consistent with the client’s objectives and constraints and has been properly assessed. Under Standard III(C), the instrument:',[
 ['is automatically unsuitable because of its stand-alone risk.','Die isolierte Betrachtung ignoriert die Portfoliowirkung.'],
 ['may be suitable in the context of the total portfolio.','Eignung hängt von Rolle, Gewicht und Kundenumständen ab.'],
 ['must be purchased by every client with lower risk tolerance.','Eine konkrete Eignungsbeurteilung ist nicht universell übertragbar.']
 ],1,['Ein risikoreiches Instrument kann eine bestehende Exponierung absichern. Die Aufgabe setzt eine sorgfältige Prüfung und Mandatskonformität ausdrücklich voraus.'],'suitability'),
 q('08','practice','a c','A manager runs a fund under a published short-term government-bond mandate and has no advisory relationship with individual fund buyers. Standard III(C) primarily requires the manager to:',[
 ['collect a personal IPS from every investor before trading.','Die individuelle Beratungsbeziehung ist ausdrücklich nicht gegeben.'],
 ['replace the mandate whenever a single investor seeks greater returns.','Ein individueller Wunsch ersetzt den veröffentlichten Fondsauftrag nicht.'],
 ['invest consistently with the fund’s stated objectives and constraints.','Der maßgebliche Auftrag ist das Fondsmandat.']
 ],2,['Trenne Fondsverwaltung von persönlicher Anlageberatung. Der Fondsmanager muss die vereinbarte Strategie einhalten.'],'suitability'),
 q('09','practice','a b c','A long-standing client’s liquidity needs change materially. The adviser should most appropriately:',[
 ['reassess the client’s circumstances and update the investment policy as needed.','Neue wesentliche Informationen erfordern eine neue Beurteilung.'],
 ['wait until the client’s next decade of investment results is available.','Vergangene Ergebnisse lösen den aktuellen Bedarf nicht.'],
 ['retain the old policy because it was signed.','Die Unterschrift macht veraltete Annahmen nicht aktuell.']
 ],0,['Das IPS soll tatsächliche Ziele und Grenzen abbilden. Eine wesentliche Änderung löst eine anlassbezogene Prüfung aus.'],'unsolicited'),
 q('10','practice','a c','A client unexpectedly asks an adviser to make a trade known to be inconsistent with the client’s IPS. The most appropriate initial response is to:',[
 ['execute immediately because every unsolicited order overrides the IPS.','Ein Kundenwunsch beseitigt die Beratungspflicht nicht automatisch.'],
 ['discuss the inconsistency and its implications before proceeding.','Zunächst sind Aufklärung und eine sachgerechte dokumentierte Reaktion erforderlich.'],
 ['terminate every such client relationship without discussion.','Die Beurteilung hängt von Größenordnung, Umständen und Reaktion ab.']
 ],1,['Es wird nach dem ersten Schritt gefragt. Vor einer Ausführung muss der bekannte Konflikt besprochen werden; weitergehende Maßnahmen hängen vom Ergebnis ab.'],'unsolicited'),
 q('11','practice','a c','A marketing report labels returns from a historical model simulation as results earned in actual client accounts. The mathematical calculations are correct. This presentation:',[
 ['complies because arithmetic is the only requirement.','Auch Herkunft und Bedeutung der Ergebnisse müssen stimmen.'],
 ['complies if the simulation contains many observations.','Mehr Beobachtungen ändern den simulierten Charakter nicht.'],
 ['misrepresents the nature of the performance record.','Simulation und tatsächlich erzieltes Kundenergebnis sind verschieden.']
 ],2,['Die Frage trennt Rechenrichtigkeit von Darstellungswahrheit. Korrekte Zahlen rechtfertigen keine falsche Herkunftsangabe.'],'performance'),
 q('12','practice','a c','A firm has not adopted GIPS but makes reasonable efforts to present performance fairly, accurately, and completely. It makes no claim of GIPS compliance. Under Standard III(D):',[
 ['not adopting GIPS does not by itself establish a violation.','GIPS-Anwendung ist keine allgemeine Voraussetzung dieses Standards.'],
 ['the firm necessarily violates the standard.','Das würde Empfehlung und zwingende Voraussetzung verwechseln.'],
 ['the firm may claim partial GIPS compliance without further review.','Aus III(D)-Konformität folgt keine GIPS-Konformität.']
 ],0,['Es sind zwei Prüfungen: Erfüllt die Darstellung III(D)? Und ist eine etwaige GIPS-Behauptung wahr? Hier wird keine solche Behauptung gemacht.'],'performance'),
 q('13','practice','a c','An adviser reveals a former client’s confidential account details to a prospect without permission or a lawful exception. The former relationship ended two years ago. The disclosure:',[
 ['is allowed because confidentiality ends when fees stop.','Der Schutz reicht über das Mandatsende hinaus.'],
 ['violates the continuing confidentiality obligation.','Frühere Kunden sind weiterhin geschützt.'],
 ['is allowed if the prospect promises not to repeat it.','Das Empfängerversprechen ersetzt die Berechtigung nicht.']
 ],1,['Weder Zeitablauf seit Mandatsende noch Diskretion des Empfängers schafft die erforderliche Offenlegungsgrundlage.'],'confidentiality'),
 q('14','practice','a c','Applicable law explicitly requires an adviser to disclose specified client information to a regulator. The client refuses permission. Assuming the legal requirement is valid, the adviser should:',[
 ['disclose all client files publicly.','Die Pflicht ist auf bestimmte Informationen und einen bestimmten Empfänger begrenzt.'],
 ['always refuse because confidentiality has no exceptions.','Gesetzlich erforderliche Offenlegung ist eine anerkannte Ausnahme.'],
 ['provide the legally required information through the appropriate process.','Die Pflicht und ihr Umfang sind einzuhalten.']
 ],2,['Die Kundenzustimmung ist nicht die einzige zulässige Grundlage. Aus der begrenzten Meldepflicht folgt aber keine uneingeschränkte Veröffentlichungsbefugnis.'],'confidentiality'),
 q('15','practice','b','Which control most directly helps detect unfair allocation of favorable trades after their results are known?',[
 ['Comparing timestamped original orders and allocation rules with actual allocations.','Der Vergleich deckt nachträgliche Abweichungen vom vorab dokumentierten Verfahren auf.'],
 ['Deleting the original orders once settlement occurs.','Ohne Ursprung fehlt eine wichtige Vergleichsbasis.'],
 ['Checking only whether the firm earned a profit.','Firmengewinn misst keine faire Kundenbehandlung.']
 ],0,['Die Kontrolle muss die konkrete Gefahr treffen: nachträgliche Ergebniswahl. Dafür braucht man einen dokumentierten Ausgangsplan und die tatsächlichen Zuteilungen.'],'controls'),
 q('16','practice','b','Which procedure best supports the confidentiality of potentially vulnerable clients while allowing appropriate assistance?',[
 ['Giving every relative unlimited account access.','Verwandtschaft ist keine pauschale Berechtigung.'],
 ['Agreeing an appropriate trusted-contact process with the client in advance.','Vorab geklärte Zustimmung und Grenzen erleichtern eine zulässige Reaktion.'],
 ['Posting concerns on social media to seek assistance.','Öffentliche Offenlegung ist keine angemessene Schutzmaßnahme.']
 ],1,['Ein dokumentierter Kontaktprozess verbindet Schutz und Vertraulichkeit. Der zulässige Umfang und geltendes Recht sind weiterhin zu beachten.'],'controls'),
 q('a1','mock-a','a c','A manager directs client brokerage commissions to pay the manager’s office rent, providing no client investment benefit. Even though the manager discloses this arrangement, it most likely:',[
 ['complies because disclosure cures all conflicts.','Offenlegung beseitigt die materielle Kundenpflicht nicht.'],
 ['complies if the rent is reasonably priced.','Der Preis macht eine eigene Betriebsausgabe nicht zum Kundennutzen.'],
 ['violates the duty to act for the clients’ benefit.','Die Kundenressource wird für einen eigenen Betriebszweck eingesetzt.']
 ],2,['Entscheidend ist die Verwendung der Kundenprovisionen. Die eigene Bürofinanzierung ohne Kundennutzen wird durch ihre Offenlegung nicht angemessen.'],'loyalty'),
 q('a2','mock-a','a c','An adviser changes a stock recommendation from buy to sell. An unaware client submits a purchase order based on the old advice. Before accepting that order, the adviser should:',[
 ['inform the client of the changed recommendation.','Die wesentliche Änderung ist vor Annahme zu erläutern.'],
 ['execute it and explain the change only after settlement.','Die rechtzeitige Information fehlt.'],
 ['conceal the change unless the client asks directly.','Die Pflicht hängt nicht von dieser Nachfrage ab.']
 ],0,['Der Kunde entscheidet auf einer bekannten veralteten Grundlage. Rechtzeitige Kommunikation gibt ihm die Möglichkeit, die Entscheidung neu zu treffen.'],'fair-dealing'),
 q('a3','mock-a','a c','A fund’s binding mandate prohibits leverage. Its manager uses borrowing because a model predicts a higher risk-adjusted return. Under Standard III(C), the model result:',[
 ['automatically amends the mandate.','Eine Modellrechnung ändert keine verbindliche Grenze.'],
 ['does not justify violating the mandate.','Die wirtschaftliche Attraktivität ersetzt keine Erlaubnis.'],
 ['removes the requirement to communicate with clients.','Kommunikationspflichten entfallen dadurch ebenfalls nicht.']
 ],1,['Mandatstreue ist eine eigenständige Bedingung. Selbst eine plausible Verbesserung darf nicht gegen ausdrücklich geltende Grenzen umgesetzt werden.'],'suitability'),
 q('a4','mock-a','a c','A client authorizes an adviser to share only the account balance with a named accountant. The adviser sends the balance and unrelated confidential medical notes. No other disclosure basis applies. This action:',[
 ['complies because any permission releases all client information.','Die Einwilligung hat einen begrenzten Umfang.'],
 ['complies because accountants are professionals.','Der Beruf des Empfängers erweitert die Erlaubnis nicht.'],
 ['exceeds the permitted scope of disclosure.','Die zusätzlichen Notizen sind nicht umfasst.']
 ],2,['Prüfe nicht nur das Vorliegen einer Zustimmung, sondern Inhalt und Empfänger. Die medizinischen Angaben überschreiten den ausdrücklich erlaubten Umfang.'],'confidentiality'),
 q('b1','mock-b','a c','A client directs use of a particular broker. The adviser explains that this may prevent best execution, follows applicable requirements, and prudently implements the instruction. The broker restriction:',[
 ['should be understood as a client-imposed limit on execution choices.','Der Auftrag begrenzt den verfügbaren Ausführungsraum; die Folgen sind erläutert.'],
 ['eliminates every remaining duty of care.','Auch innerhalb der Einschränkung bleibt sorgfältige Ausführung erforderlich.'],
 ['proves that the adviser must ignore the client’s instruction.','Die Aufgabe gibt keine Grundlage für ein pauschales Ignorieren.']
 ],0,['Directed Brokerage ist nach seinen konkreten Bedingungen zu beurteilen. Offen erläuterte Kundenbeschränkungen und fortbestehende Sorgfaltspflichten sind gemeinsam zu betrachten.'],'loyalty'),
 q('b2','mock-b','a c','A manager’s sibling holds an ordinary fee-paying client account managed under the same rules as all other suitable accounts. For a scarce issue, the manager should:',[
 ['automatically award the sibling priority.','Verwandtschaft begründet keinen Vorrang.'],
 ['treat the account fairly under the normal client allocation policy.','Ein echtes Kundenkonto darf weder bevorzugt noch allein wegen Verwandtschaft ausgeschlossen werden.'],
 ['automatically exclude the account solely because of the relationship.','Das wäre die umgekehrte unsachliche Benachteiligung.']
 ],1,['Unterscheide persönliche Eigenzuteilungen von einem regulären Familienkundenkonto. Die Aufgabe beschreibt ausdrücklich den zweiten Fall.'],'fair-dealing'),
 q('b3','mock-b','a c','A client’s new employment contract creates a large, concentrated exposure to the same company already held in the investment portfolio. Before recommending more of that company’s shares, an adviser should:',[
 ['consider only the return forecast for those shares.','Die neue Konzentration und die Kundensituation fehlen.'],
 ['assume employment income is unrelated to investment risk.','Beide Exponierungen können vom selben Unternehmen abhängen.'],
 ['reassess the recommendation in the context of the updated client circumstances and total portfolio.','Die neue Information kann die geeignete Risikoposition verändern.']
 ],2,['Eine attraktive Einzelprognose beantwortet die Konzentrationsfrage nicht. Aktuelle Kundeninformationen müssen in die Eignungsprüfung einfließen.'],'suitability'),
 q('b4','mock-b','a c','An adviser accurately reports a strategy’s one-year return but describes it as the firm’s consistent ten-year result, although no such record exists. This most directly:',[
 ['misrepresents the period and representativeness of performance.','Die einzelne Zahl ist richtig, ihre behauptete Bedeutung nicht.'],
 ['complies because at least one return is correct.','Darstellungswahrheit erfordert mehr als eine richtige Einzelzahl.'],
 ['complies if a risk disclaimer appears elsewhere.','Eine allgemeine Risikoklausel korrigiert keine falsche Historie.']
 ],0,['Der Zeitraum ist Bestandteil der Aussage. Eine Rendite aus einem Jahr kann keinen nicht vorhandenen zehnjährigen Nachweis ersetzen.'],'performance')
];
