const {Q}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('ex-'+id,'ethics-cases','ethics',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a b','An analyst receives reliable material nonpublic information and urges clients to trade on it. He sends the recommendation to all affected clients simultaneously. Fair distribution:',[
 ['makes the information public before trading.','Die Verteilung der Empfehlung ist keine ordnungsgemäße allgemeine Veröffentlichung der zugrunde liegenden Tatsache.'],
 ['cures the information-use violation.','Eine erfüllte Verteilungspflicht hebt II(A) nicht auf.'],
 ['does not permit clients to be induced to act on the material nonpublic information.','Informationsgrundlage und Fairness sind getrennte Pflichten.']
 ],2,['Der Sachverhalt erfüllt einen möglichen Fairnesspunkt, lässt aber die unzulässige Informationsverwendung bestehen.'],'research-chain'),
 q('02','practice','a b','An analyst fully credits an external report but accepts its recommendation without any appropriate review of its basis. Proper attribution:',[
 ['does not by itself establish diligence and a reasonable basis.','Quellenangabe prüft keine Modellannahmen oder Eignung.'],
 ['automatically satisfies every analysis obligation.','Die Aussage setzt verschiedene Pflichten gleich.'],
 ['requires the analyst to claim authorship.','Das wäre das Gegenteil korrekter Zuschreibung.']
 ],0,['I(C) und V(A) fragen Verschiedenes. Ein sauberer Herkunftshinweis ersetzt die sachliche Prüfung nicht.'],'research-chain'),
 q('03','practice','a b','A manager obtains all required written consent for a client-paid bonus before accepting it. She later favors that client in a scarce allocation at other suitable clients’ expense. Which statement is most accurate?',[
 ['The consent automatically authorizes preferential allocation.','Die Genehmigung betrifft nicht das Recht, andere Kunden zu benachteiligen.'],
 ['The stated consent requirement was met, but fair dealing was violated.','Ein korrekt erledigter Teil und ein späterer Verstoß können nebeneinander bestehen.'],
 ['Every additional bonus is prohibited regardless of consent.','Der Standard enthält keine solche absolute Regel.']
 ],1,['Die Aufgabe verlangt eine differenzierte Antwort. Nicht pauschal alles als korrekt oder alles als falsch bewerten.'],'bonus-allocation'),
 q('04','practice','a b','A manager treats all clients fairly but accepts conflicting additional compensation without the required prior written consent. Fair allocation:',[
 ['retroactively supplies the missing consent.','Die spätere Handlung erzeugt keine vorherige Zustimmung.'],
 ['makes the compensation arrangement irrelevant.','Die Zusatzvergütung bleibt eigenständig zu prüfen.'],
 ['does not cure the separate compensation-consent violation.','IV(B) und III(B) sind unabhängig einzuhalten.']
 ],2,['Die Gegenprobe zum vorherigen Fall zeigt, dass beide Pflichten getrennt funktionieren.'],'bonus-allocation'),
 q('05','practice','a b','An adviser describes a model-based estimate as a certainty and omits known important limitations. Naming the model vendor prominently:',[
 ['does not correct the misleading communication.','Der Anbietername erläutert weder Unsicherheit noch Grenzen.'],
 ['converts the estimate into a fact.','Herkunft verändert den Aussagecharakter nicht.'],
 ['eliminates the adviser’s communication responsibilities.','Die Verwendung gegenüber Kunden bleibt eigene berufliche Handlung.']
 ],0,['Die Korrektur muss den Fehler treffen: Schätzung kennzeichnen und wesentliche Einschränkungen erklären.'],'vendor-model'),
 q('06','practice','a b','A supervisor knows that staff repeatedly use unreviewed model outputs in misleading client presentations and takes no action. Outsourcing the model:',[
 ['eliminates all supervision responsibilities.','Die Aufsicht über die eigene Verwendung und Kommunikation bleibt.'],
 ['does not excuse failing to respond reasonably to the known problem.','Warnzeichen verlangen eine angemessene Reaktion.'],
 ['proves that no client can be harmed.','Dafür gibt es keine Grundlage.']
 ],1,['Arbeitsteilung und Verantwortung sind nicht identisch. Der Sachverhalt nennt ausdrücklich bekannte wiederholte Probleme.'],'vendor-model'),
 q('07','practice','a b','An employee uses only personal funds to arrange future office space, but also copies protected employer files without authorization before leaving. Which assessment is most accurate?',[
 ['Both actions are automatically allowed because departure is planned.','Der Wechselplan erlaubt keine geschützte Datenmitnahme.'],
 ['Both actions are automatically prohibited in every circumstance.','Reine organisatorische Vorbereitung kann zulässig sein.'],
 ['The preparation may be permissible, while the unauthorized copying is a separate violation.','Die beiden Handlungen benötigen getrennte Beurteilungen.']
 ],2,['Nicht die Absicht „Arbeitgeberwechsel“ pauschal bewerten, sondern die einzelnen Tätigkeiten.'],'departure'),
 q('08','practice','a b','An employee claims that record-retention duties allow him to take the employer’s confidential research files to a competing firm without permission. This claim is:',[
 ['incorrect because retention requirements do not confer ownership or authorization to take files.','Nachweispflicht und Berechtigung an Daten sind verschiedene Fragen.'],
 ['correct whenever the files are stored on a personal laptop.','Das Speichermedium ändert die Rechte am Inhalt nicht automatisch.'],
 ['correct if the new employer pays more.','Vergütung ist keine Berechtigungsgrundlage.']
 ],0,['V(C) ist keine Ausnahme von Arbeitgeberloyalität und Vertraulichkeit.'],'departure'),
 q('09','practice','a b','A client signs a waiver and asks an adviser to trade on reliable material nonpublic information the client provided. The waiver:',[
 ['automatically makes the information public.','Eine private Erklärung ist keine öffentliche Verbreitung.'],
 ['does not authorize the adviser to act on that information.','Die Marktintegritätspflicht ist nicht durch den Kunden abwählbar.'],
 ['requires the adviser to publish every client record.','Auch die Vertraulichkeit bleibt relevant.']
 ],1,['Kundenwunsch, Informationsstatus und zulässige Weitergabe sind getrennte Prüfungspunkte.'],'client-instruction'),
 q('10','practice','a b','A firm falsely labels its best account’s return as representative of all accounts. A separate statement accurately warns that past performance does not guarantee future results. The warning:',[
 ['corrects the false historical representation.','Die Warnung betrifft Zukunft, nicht die falsche Auswahlbehauptung.'],
 ['makes the best account representative.','Die Stichprobeneigenschaft ändert sich nicht durch Text.'],
 ['does not cure the misleading claim about historical performance.','Beide Aussagen sind inhaltlich getrennt.']
 ],2,['Eine korrekte allgemeine Warnung kann neben einer falschen konkreten Aussage stehen.'],'presentation'),
 q('11','practice','a','Which review best detects a performance report that uses correct calculations but misrepresents which accounts are included?',[
 ['Checking account-selection rules and labels as well as arithmetic.','Die Kontrolle trifft die konkrete Darstellungsursache.'],
 ['Checking only the multiplication in each return.','Das würde den Auswahlfehler übersehen.'],
 ['Checking only whether a disclaimer exists.','Eine beliebige Warnung prüft keine Repräsentativität.']
 ],0,['Kontrollen müssen auf den Fehlermodus passen. Hier ist nicht die Rechnung falsch, sondern die behauptete Bedeutung.'],'presentation'),
 q('12','practice','b','A case states that a manager has a potential conflict but provides no evidence of unsuitable investments or false reporting. The best analysis is to:',[
 ['invent an undisclosed loss to complete the case.','Nicht genannte Tatsachen dürfen nicht ergänzt werden.'],
 ['evaluate the stated conflict obligations without assuming unrelated violations.','Die Schlussfolgerung muss von den gegebenen Fakten getragen werden.'],
 ['ignore the conflict unless a loss is proven.','Potenzielle Konflikte können schon vor einem Schaden relevant sein.']
 ],1,['Sorgfalt bedeutet weder pauschale Entlastung noch pauschale Verdächtigung. Jede Verletzung braucht ihre Voraussetzungen.'],'case-method'),
 q('a1','mock-a','a b','An adviser discloses a product-sales incentive but knowingly gives clients a false description of the product’s redemption terms. Which assessment is most accurate?',[
 ['Disclosure permits the false statement.','Konflikttransparenz hebt das Verbot falscher Darstellung nicht auf.'],
 ['A sales incentive automatically makes every statement false.','Das wäre eine nicht belegte allgemeine Schlussfolgerung.'],
 ['The false description remains a separate violation despite the incentive disclosure.','Die zwei Pflichten sind unabhängig.']
 ],2,['Der entscheidende Fehler ist die wissentlich falsche Produktinformation. Die Offenlegung einer anderen Tatsache korrigiert sie nicht.'],'case-method'),
 q('b1','mock-b','a b','An analyst has a reasonable research basis, fairly informs all affected clients, and retains the supporting records. The investment subsequently loses value. On these facts alone:',[
 ['the loss does not establish a violation of those duties.','Ein Ergebnisverlust beweist keine fehlende Sorgfalt, Fairness oder Dokumentation.'],
 ['the analyst must have violated record retention.','Der Sachverhalt nennt ausdrücklich vorhandene Nachweise.'],
 ['fair distribution becomes a violation retroactively.','Das spätere Ergebnis ändert die frühere Verteilung nicht.']
 ],0,['Die Aufgabe verlangt, Prozess und Ergebnis auseinanderzuhalten. Nicht genannte weitere Verstöße dürfen nicht unterstellt werden.'],'case-method')
];
