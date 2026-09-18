const {Q}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('evi-'+id,'standard-vi','ethics',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a c','An analyst has a significant beneficial interest in a company she recommends. She believes herself to be objective. This belief:',[
 ['eliminates any potential conflict.','Subjektive Sicherheit beseitigt den wirtschaftlichen Anreiz nicht.'],
 ['does not remove the obligation to address and disclose the relevant conflict.','Der vernünftigerweise mögliche Einfluss ist maßgeblich.'],
 ['makes the ownership relevant only after a client loses money.','Die Pflicht setzt vor einem eingetretenen Schaden an.']
 ],1,['Konfliktprüfung ist vorausschauend. Die Eigentumsbeziehung kann relevant sein, selbst wenn die Empfehlung fachlich vertretbar ist.'],'conflicts'),
 q('02','practice','a c','A report hides a material conflict in vague language in an obscure appendix. Under Standard VI(A), the disclosure is most likely:',[
 ['sufficient whenever the words appear somewhere.','Auffindbarkeit und wirksame Vermittlung fehlen.'],
 ['sufficient if the report is long.','Länge entschuldigt keine unverständliche Mitteilung.'],
 ['insufficient because relevant information must be communicated prominently and clearly.','Der Kunde muss den konkreten Konflikt verstehen können.']
 ],2,['Das Ziel ist eine informierte Beurteilung, nicht die bloße Existenz eines Satzes. Unbestimmtheit und versteckte Platzierung können dieses Ziel verfehlen.'],'conflicts'),
 q('03','practice','a c','A firm begins receiving compensation for promoting a product that its advisers recommend. Existing disclosures state that the firm receives no such compensation. The advisers should:',[
 ['ensure that the new relevant relationship is addressed and disclosures are updated.','Der bisherige Text beschreibt die tatsächliche Beziehung nicht mehr.'],
 ['keep the old disclosures because they were once accurate.','Historische Richtigkeit ist keine aktuelle Richtigkeit.'],
 ['wait until every client has made a purchase.','Die Information soll die Entscheidung ermöglichen, nicht nur nachträglich begleiten.']
 ],0,['Eine materielle Änderung erfordert eine erneute Konfliktbeurteilung und geeignete Kommunikation.'],'conflict-controls'),
 q('04','practice','a c','An adviser prominently discloses a sales incentive and then knowingly recommends an unsuitable product because of that incentive. The disclosure:',[
 ['cures the suitability problem.','Verschiedene Pflichten bestehen nebeneinander.'],
 ['does not excuse the unsuitable recommendation.','Transparenz ist keine Erlaubnis für eine ungeeignete Anlage.'],
 ['makes every product from that issuer permanently prohibited.','Der Fall begründet keine solche allgemeine Schlussfolgerung.']
 ],1,['Zuerst die Offenlegung, dann die konkrete Empfehlung prüfen. Ein erfüllter Prüfungspunkt beseitigt einen anderen Verstoß nicht.'],'conflict-controls'),
 q('05','practice','a c','A trader buys for her own account just before a known client order to profit from its anticipated price impact. She later executes the client order carefully. Her personal trade:',[
 ['complies because the client trade was eventually executed.','Die spätere Erledigung hebt den vorgezogenen Eigenvorteil nicht auf.'],
 ['complies if it is small.','Eine geringe Größe beseitigt die Ausnutzung nicht.'],
 ['violates the priority of transactions requirement.','Der bekannte Kundenauftrag wird für einen persönlichen Vorteil genutzt.']
 ],2,['Die Ursache des Gewinnplans ist der bevorstehende Kundenauftrag. Das ist der entscheidende Unterschied zu unabhängiger privater Anlage.'],'priority'),
 q('06','practice','a c','An adviser sells a personal holding to meet a genuine cash need while maintaining a well-supported buy recommendation for clients. No client is disadvantaged, no pending client trade is exploited, and applicable rules are followed. The sale is:',[
 ['not necessarily a violation solely because it differs from the recommendation.','Persönliche Zahlungsbedürfnisse können anders sein als die Ziele der Kunden.'],
 ['always prohibited until every client sells.','Der Standard enthält kein solches generelles Gleichlaufgebot.'],
 ['proof that the recommendation has no reasonable basis.','Die Aufgabe setzt eine tragfähige Grundlage ausdrücklich voraus.']
 ],0,['Ein privater Verkauf kann durch Liquidität statt durch eine geänderte Wertmeinung verursacht sein. Die ausdrücklich genannten Schutzbedingungen sind wesentlich.'],'priority'),
 q('07','practice','a c','An analyst moves personal trades to an account in which she has an indirect economic interest. This change:',[
 ['automatically removes the trades from Standard VI(B).','Indirektes wirtschaftliches Interesse kann ebenfalls erfasst sein.'],
 ['does not by itself remove the personal trading conflict.','Die ökonomische Berechtigung zählt, nicht nur der Kontoname.'],
 ['gives those trades priority over client trades.','Ein anderer Kontoname schafft keinen Vorrang.']
 ],1,['Durch die wirtschaftliche Betrachtung können Umgehungen über andere Konten erkannt werden.'],'priority'),
 q('08','practice','b','Which procedure most directly evaluates a proposed personal trade before execution?',[
 ['Deleting transaction records after settlement.','Das prüft den vorgeschlagenen Handel nicht.'],
 ['An annual summary prepared after every trade has occurred.','Das ist eine nachträgliche Kontrolle.'],
 ['A preclearance process using relevant current information.','Er prüft mögliche Hindernisse vor der Transaktion.']
 ],2,['Zeitpunkt und Daten sind entscheidend. Nachträgliche Berichte ergänzen Preclearance, ersetzen deren präventive Funktion aber nicht.'],'personal-controls'),
 q('09','practice','a c','A referral arrangement provides noncash research access rather than money. Under Standard VI(C), the arrangement:',[
 ['can require disclosure of the nature and estimated value of the benefit.','Sachleistungen haben wirtschaftlichen Wert und können die Empfehlung beeinflussen.'],
 ['is always exempt because it is noncash.','Die Zahlungsform begründet keine Ausnahme.'],
 ['must be disclosed only if the research is inaccurate.','Die Vergütungsbeziehung ist unabhängig von der Researchqualität relevant.']
 ],0,['Frage nach dem Vorteil für die Vermittlung. Ein Researchzugang erfüllt diese wirtschaftliche Funktion auch ohne Überweisung.'],'referrals'),
 q('10','practice','a c','A professional pays a third party for introducing a prospective client. The referral disclosure should be made to that prospect:',[
 ['only after the first annual performance report.','Dieser Zeitpunkt liegt nach der maßgeblichen Vertragsentscheidung.'],
 ['before the formal agreement for services is entered into.','Der Interessent soll den Anreiz vor seiner Entscheidung kennen.'],
 ['only if the third party also receives a gift.','Die Geldvergütung ist bereits relevant.']
 ],1,['Die Pflicht umfasst auch gezahlte Vergütung. Rechtzeitige Information ermöglicht eine informierte Auswahl des Dienstleisters.'],'referrals'),
 q('11','practice','a c','A banker receives an internal bonus for referring clients to another department of the same bank. The bonus:',[
 ['is automatically exempt from referral disclosure.','Die interne Organisation beseitigt den Anreiz nicht.'],
 ['is relevant only if the departments are in different countries.','Die geografische Trennung ist keine Voraussetzung.'],
 ['is a referral benefit that may require disclosure to the affected parties.','Auch interne Vermittlungsvergütung fällt in den relevanten Bereich.']
 ],2,['Wirtschaftlicher Anlass statt Rechtsform oder Abteilungsgrenze prüfen.'],'referrals'),
 q('12','practice','b','For an approved referral program, which practice best follows CFA guidance on reports to the employer?',[
 ['Regular updates, at least quarterly, on the amount and nature of referral compensation.','So bleibt die tatsächliche Vergütung intern nachvollziehbar.'],
 ['A report only when the employee changes jobs.','Das bietet keine laufende Übersicht.'],
 ['No updates after the first approval, regardless of changes.','Die ursprüngliche Freigabe ersetzt keine aktuelle Information.']
 ],0,['Die Leitlinie zur regelmäßigen internen Berichterstattung ist von der Information des Kunden vor Vertragsabschluss zu unterscheiden.'],'referral-controls'),
 q('a1','mock-a','a c','A research analyst is appointed to a paid board role at a company she covers. She keeps the role confidential because she has not yet changed any recommendation. Her approach:',[
 ['complies until a recommendation changes.','Der mögliche Einfluss ist bereits relevant.'],
 ['fails to address a relevant conflict created by the new role.','Die vergütete Organrolle kann Unabhängigkeit und Pflichten berühren.'],
 ['complies if she attends meetings outside working hours.','Die Uhrzeit beseitigt den Konflikt nicht.']
 ],1,['Die Rolle, nicht erst eine veränderte Empfehlung, löst die Prüfung aus. Arbeitgeber und betroffene Kunden benötigen angemessene Information bzw. Konfliktvermeidung.'],'conflicts'),
 q('a2','mock-a','a c','An adviser receives a one-time payment for each successful service referral. Before the client agrees to the service, the adviser says only “we sometimes cooperate” and omits the payment’s nature and estimated value. This is most likely:',[
 ['sufficient because the phrase mentions cooperation.','Sie vermittelt den wirtschaftlichen Vorteil nicht.'],
 ['sufficient if the service itself is suitable.','Eignung ersetzt die eigenständige Offenlegung nicht.'],
 ['insufficient disclosure of the referral benefit.','Art und wirtschaftlicher Umfang bleiben verborgen.']
 ],2,['Der Kunde soll die möglicherweise vergütete Empfehlung erkennen und einordnen. Die unbestimmte Formulierung erlaubt dies nicht.'],'referrals'),
 q('b1','mock-b','a c','A trader obtains personal-trade approval by omitting a pending customer order she knows about. She then trades ahead of that order for personal benefit. The approval:',[
 ['does not excuse the transaction-priority violation.','Eine auf unvollständigen Angaben beruhende Freigabe heilt den Verstoß nicht.'],
 ['fully transfers responsibility to the approval system.','Die Person bleibt für Angaben und Handlung verantwortlich.'],
 ['makes the pending client order irrelevant.','Gerade diese bekannte Information erklärt den Konflikt.']
 ],0,['Materielle Pflicht und Kontrollschritt sind getrennt. Eine erschlichene Freigabe beweist keine Regelkonformität.'],'personal-controls'),
 q('b2','mock-b','a c','A manager receives valuable software licenses for referring clients to a provider. He reports the arrangement only to his employer. Before affected clients sign the provider’s service contract, the manager should also:',[
 ['wait for a client to ask whether compensation exists.','Die relevante Information ist nicht nur auf Nachfrage erforderlich.'],
 ['make appropriate disclosure of the referral benefit to those clients.','Die Arbeitgeberinformation ersetzt die Kundeninformation nicht.'],
 ['describe the licenses as having no value because they are not cash.','Sachvorteile können erheblichen Wert haben.']
 ],1,['Empfänger getrennt prüfen. Die intern bekannte Vergütung bleibt für die Entscheidung der betroffenen Kunden relevant.'],'referrals')
];
