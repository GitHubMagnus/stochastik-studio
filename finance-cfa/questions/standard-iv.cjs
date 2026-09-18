const {Q}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('eiv-'+id,'standard-iv','ethics',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a c','While employed, an analyst diverts a new valuation inquiry sent to his employer into his own competing business without permission. He plans to perform the work at home. His conduct most likely:',[
  ['complies because the work will occur outside office hours.','Der Arbeitsort ändert nichts an der umgeleiteten Geschäftschance.'],
  ['violates the duty of loyalty by appropriating the employer’s business opportunity.','Die Anfrage gehörte zum Geschäft des Arbeitgebers und wurde ohne Erlaubnis umgelenkt.'],
  ['complies if he charges a lower fee than his employer.','Ein günstigeres Konkurrenzangebot beseitigt die Loyalitätspflicht nicht.']
 ],1,['Zuerst wird die Herkunft der Chance betrachtet. Private Durchführung nach Feierabend macht eine Firmenanfrage nicht zu einer frei verfügbaren persönlichen Gelegenheit.'],'loyalty'),
 q('02','practice','a c','A departing employee remains employed for another month. Using personal funds and no employer resources, she reserves office space for a future business. She neither solicits nor serves clients and causes no harm to the employer. Under Standard IV(A), this preparation is:',[
  ['necessarily prohibited until her final day.','Die bloße Vorbereitung wird nicht pauschal mit tatsächlichem Konkurrenzgeschäft gleichgesetzt.'],
  ['proof that she may immediately copy employer client records.','Eine zulässige Vorbereitung erlaubt keine unberechtigte Mitnahme von Daten.'],
  ['generally permissible on the stated facts.','Die entscheidenden unzulässigen Tätigkeiten sind im Sachverhalt ausgeschlossen.']
 ],2,['Der Fall beschreibt organisatorische Vorbereitung mit eigenen Mitteln. Sobald Werbung, Dienstleistung oder Nutzung geschützter Firmenressourcen hinzukämen, wäre erneut zu prüfen.'],'leaving'),
 q('03','practice','a c','After submitting notice but before employment ends, an adviser uses the employer’s client mailing list to promote a new competing firm without authorization. The adviser most likely:',[
  ['violates the continuing duty of loyalty.','Kündigung und tatsächliches Beschäftigungsende sind hier zeitlich verschieden.'],
  ['complies because notice automatically ends every employer duty.','Die Pflicht endet nicht allein mit dem Kündigungsschreiben.'],
  ['complies because all client lists become public after notice.','Ein solcher automatischer Eigentums- oder Vertraulichkeitswechsel findet nicht statt.']
 ],0,['Der Werbecharakter und die Verwendung der Firmenliste gehen über eine bloße organisatorische Vorbereitung oder neutrale erlaubte Mitteilung hinaus.'],'leaving'),
 q('04','practice','a c','A manager is offered a personal bonus by a client for achieving a target next year. The arrangement could conflict with the employer’s interests. Before accepting, Standard IV(B) requires:',[
  ['only a verbal notice to the employer after the bonus is earned.','Es fehlen sowohl der richtige Zeitpunkt als auch die geforderte dokumentierte Zustimmung.'],
  ['written consent from all parties involved.','Die Zustimmung muss vor Annahme der konfliktträchtigen Vereinbarung vorliegen.'],
  ['no action because the client already pays the firm’s usual fee.','Die reguläre Firmengebühr beseitigt die zusätzliche persönliche Anreizwirkung nicht.']
 ],1,['Die Aufgabe betrifft eine im Voraus vereinbarte Zusatzvergütung, keine erst nachträglich überraschende Anerkennung. Bedingungen, Parteien und Zustimmung sind vor Annahme zu klären.'],'compensation'),
 q('05','practice','a c','All relevant parties approve a fully disclosed additional compensation agreement through retrievable emails before it is accepted. Assuming no other violations, this method of consent is:',[
  ['invalid unless it uses paper and handwritten signatures.','Dokumentierbare elektronische Kommunikation kann die Schriftanforderung erfüllen.'],
  ['insufficient solely because the compensation is noncash.','Sachleistungen sind erfasst, aber deswegen nicht grundsätzlich unzulässig.'],
  ['capable of satisfying the written-consent requirement.','Die Zustimmung ist vorab, vollständig und nachvollziehbar dokumentiert.']
 ],2,['Die Form muss einen dokumentierbaren Nachweis liefern. Der Standard verlangt keine ausschließliche Papierform; der Inhalt und die beteiligten Parteien bleiben entscheidend.'],'compensation'),
 q('06','practice','a c','An analyst receives valuable noncash benefits for outside services that may conflict with her employer’s interests. She claims that Standard IV(B) covers only cash payments. Her claim is:',[
  ['incorrect because noncash benefits can create the same type of conflict.','Wirtschaftlicher Vorteil und Anreiz hängen nicht von Barzahlung ab.'],
  ['correct if the benefits are provided by a corporation.','Die Rechtsform des Gebers schafft keine solche Ausnahme.'],
  ['correct if the analyst records the benefits only on her personal calendar.','Eine private Notiz ersetzt weder Offenlegung noch erforderliche Zustimmung.']
 ],0,['Prüfe den wirtschaftlichen Wert und den möglichen Konflikt. Ein Vorteil kann Aufmerksamkeit oder Loyalität beeinflussen, auch wenn kein Geld überwiesen wird.'],'compensation'),
 q('07','practice','a c','A manager has obtained all required consent for a client-paid additional bonus. She then gives that client preferential access to scarce investments at the expense of other suitable clients. The consent:',[
  ['automatically permits the preferential allocation.','Die Zustimmung zur Vergütung hebt Pflichten gegenüber anderen Kunden nicht auf.'],
  ['does not eliminate the separate fair-dealing obligation.','Verschiedene Standards gelten nebeneinander.'],
  ['makes the investments unsuitable for every client.','Aus dem Zuteilungsproblem folgt nicht, dass die Anlage für sämtliche Kunden ungeeignet ist.']
 ],1,['Eine korrekt genehmigte Vergütungsvereinbarung ist nur ein Teil der Prüfung. Die konkrete spätere Zuteilung muss weiterhin fair und auftragsgerecht sein.'],'gift-boundaries'),
 q('08','practice','a c','A supervisor receives credible repeated warnings of unauthorized trading. She forwards one message to compliance and takes no further action despite evidence that the trading continues. Her response is most likely:',[
  ['sufficient because forwarding permanently transfers all responsibility.','Eine Weiterleitung beendet die angemessene Aufsicht bei fortgesetzten Warnzeichen nicht.'],
  ['sufficient if the trader promises informally to stop.','Ein Versprechen ersetzt keine notwendige Untersuchung und Kontrolle.'],
  ['insufficient without reasonable investigation and measures to prevent further violations.','Die Reaktion muss dem bekannten fortdauernden Risiko entsprechen.']
 ],2,['Der Sachverhalt enthält wiederholte und glaubwürdige Warnzeichen. Angemessene Nachverfolgung und wirksame Zwischenmaßnahmen sind deshalb erforderlich.'],'supervision'),
 q('09','practice','a c','A supervisor’s team includes employees who are neither CFA candidates nor CFA Institute members. Under Standard IV(C), the supervisor’s responsibilities:',[
  ['extend to employees subject to her supervision regardless of their CFA status.','Die tatsächliche Aufsicht ist maßgeblich.'],
  ['apply only to charterholders in the team.','Die Pflicht ist nicht auf Untergebene mit CFA-Bezug begrenzt.'],
  ['disappear if the team is sufficiently large.','Größe kann Delegation erfordern, beseitigt die Pflicht aber nicht.']
 ],0,['Die Vorgesetzte kann Aufgaben angemessen delegieren. Sie muss die Delegation dennoch so organisieren, dass die erforderliche Aufsicht funktioniert.'],'supervision'),
 q('10','practice','a c','A proposed supervisory role lacks any workable compliance procedures. Senior management refuses to correct the deficiency, and adequate supervision is clearly impossible. The prospective supervisor should most appropriately:',[
  ['accept and rely solely on every employee’s personal goodwill.','Die bekannte strukturelle Unmöglichkeit angemessener Aufsicht bleibt bestehen.'],
  ['decline the supervisory responsibility until reasonable procedures are established.','Die Rolle darf nicht nur formal übernommen werden, wenn ihre verantwortliche Ausübung unmöglich ist.'],
  ['accept because the title alone fulfills the standard.','Ein Titel ist kein Kontrollsystem.']
 ],1,['Zunächst ist die Lücke zu eskalieren und Abhilfe zu verlangen. Der Fall legt fest, dass dies erfolglos bleibt und ausreichende Aufsicht unmöglich ist.'],'supervision'),
 q('11','practice','b','An employee requests approval for an outside engagement but omits the expected services, compensation terms, and duration. The employer should most appropriately:',[
  ['approve automatically because a request was submitted.','Die fehlenden Bedingungen verhindern eine sachgerechte Konfliktbeurteilung.'],
  ['treat silence as approval of any future arrangement.','Schweigen ist keine dokumentierte Zustimmung zu unbekannten Bedingungen.'],
  ['require enough detail to evaluate the actual arrangement before consent.','Der Genehmigungsprozess braucht den relevanten Inhalt.']
 ],2,['Die Kontrolle soll eine informierte Entscheidung ermöglichen. Eine leere Formalität mit unbestimmtem Umfang erfüllt diesen Zweck nicht.'],'controls'),
 q('12','practice','b','A firm wants to reduce the risk of confidential employer records leaving with departing staff. Which procedure most directly addresses that risk?',[
  ['An orderly return of records and devices, access changes, and clear written permissions for any retained materials.','Die Maßnahme verbindet Eigentum, Berechtigungen und konkrete Unterlagen.'],
  ['A requirement that departing staff forget all general professional experience.','Allgemeine Fähigkeiten lassen sich nicht mit geschützten Firmenunterlagen gleichsetzen.'],
  ['Automatic permission to retain every file on a personal device.','Der private Speicherort ändert nicht automatisch die Eigentums- und Vertraulichkeitslage.']
 ],0,['Die Kontrolle muss auf tatsächliche Daten und Zugänge zielen. Allgemeines Wissen bleibt nutzbar, unberechtigt mitgenommene Datensätze dagegen nicht.'],'controls'),
 q('a1','mock-a','a c','An adviser accepts a conflicting client bonus arrangement after receiving only a verbal approval from her employer. She plans to obtain written confirmation after the performance period. At acceptance, she most likely:',[
  ['complies because verbal approval is always equivalent to documented consent.','Die geforderte schriftliche Zustimmung fehlt zum maßgeblichen Zeitpunkt.'],
  ['violates the requirement for prior written consent.','Spätere Dokumentation ist kein bereits vor Annahme vorliegender schriftlicher Konsens.'],
  ['complies if no bonus is ultimately paid.','Die Annahme der Vereinbarung löst die Prüfung aus, nicht erst die spätere Auszahlung.']
 ],1,['Die fehlende Voraussetzung ist konkret: schriftliche Zustimmung vor Annahme. Ein späteres wirtschaftliches Ergebnis ändert diese zeitliche Tatsache nicht.'],'compensation'),
 q('a2','mock-a','a c','A senior supervisor delegates daily monitoring to a qualified team leader but gives no instructions about compliance responsibilities and ignores reports of control failures. The delegation:',[
  ['eliminates the senior supervisor’s obligations.','Delegation beseitigt nicht die eigene angemessene Organisations- und Überwachungspflicht.'],
  ['is prohibited in every organization.','Geeignete Delegation ist grundsätzlich möglich.'],
  ['does not excuse the failure to ensure reasonable supervision.','Die bekannten Kontrolllücken und fehlende Anleitung bleiben relevant.']
 ],2,['Die Frage richtet sich nicht gegen Delegation selbst. Sie betrifft deren mangelhafte Durchführung und das Ignorieren konkreter Hinweise.'],'supervision'),
 q('b1','mock-b','a c','After employment ends, a researcher uses her general valuation skills at a new firm. She takes no former-employer records or confidential information, and no applicable agreement restricts the activity. Standard IV(A) most likely:',[
  ['permits the use of that general professional experience.','Fachliche Fähigkeiten sind nicht automatisch vertrauliches Firmeneigentum.'],
  ['requires her to abandon all skills learned at the prior firm.','Dies überdehnt den Schutz von Unterlagen und vertraulichen Informationen.'],
  ['allows her to recreate confidential client databases from unauthorized copies.','Diese Zusatzhandlung ist gerade ausgeschlossen und wäre gesondert problematisch.']
 ],0,['Der Sachverhalt grenzt allgemeine Fähigkeiten von Daten und geschützten Informationen ab. Diese Trennung ist für den Stellenwechsel zentral.'],'leaving'),
 q('b2','mock-b','b','A firm has a detailed compliance manual, but staff are not trained on it and no one reviews whether procedures are followed. The best assessment is that:',[
  ['a written manual alone necessarily establishes effective supervision.','Vorhandener Text belegt keine tatsächliche Anwendung.'],
  ['communication, implementation, and monitoring are also needed.','Ein System muss im Arbeitsalltag funktionieren.'],
  ['monitoring is unnecessary if employees are experienced.','Erfahrung ersetzt keine angemessene Kontrolle.']
 ],1,['Die Ursache liegt im Unterschied zwischen geschriebenen Regeln und gelebtem Prozess. Schulung, Zuständigkeiten und Prüfung der Anwendung schließen diese Lücke.'],'controls')
];
