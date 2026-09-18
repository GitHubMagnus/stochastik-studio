const {Q}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('ef-'+id,'ethics-foundations','ethics',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a','Which statement best describes an ethical evaluation of an investment professional’s decision?',[
 ['It considers relevant duties and effects on others, not only the decision maker’s gain.','Eigener Gewinn erfasst die Verantwortung gegenüber anderen nicht vollständig.'],
 ['It is identical to calculating the professional’s bonus.','Vergütung ist ein möglicher Anreiz, kein vollständiger ethischer Maßstab.'],
 ['It depends only on whether misconduct is likely to be detected.','Entdeckungswahrscheinlichkeit entscheidet nicht über die Pflicht.']
 ],0,['Ethik fragt nach der vertretbaren Handlung und ihren Gründen. Die Bewertung ist breiter als eine private Erfolgsrechnung.'],'ethics'),
 q('02','practice','a','A manager violates a client’s mandate but earns a high return. The return:',[
 ['proves that the action was ethical.','Ein guter Ausgang hebt die Mandatsverletzung nicht auf.'],
 ['does not by itself justify the decision process.','Ergebnis und regelgerechter Prozess müssen getrennt beurteilt werden.'],
 ['automatically changes the original mandate.','Erfolg ändert den ursprünglichen Auftrag nicht rückwirkend.']
 ],1,['Eine spätere Zufallsentwicklung kann die zum Entscheidungszeitpunkt geltenden Pflichten nicht ersetzen.'],'trust'),
 q('03','practice','b','A profession’s public code of ethics primarily helps to:',[
 ['guarantee that no member will ever act improperly.','Ein Kodex kann Verhalten nicht vollständig garantieren.'],
 ['replace all technical knowledge.','Verhaltensmaßstäbe und Fachwissen erfüllen verschiedene Aufgaben.'],
 ['communicate shared behavioral expectations for its members.','Außenstehende und Mitglieder können Verhalten an bekannten Maßstäben prüfen.']
 ],2,['Der Kodex macht den gemeinsamen Anspruch sichtbar. Seine Veröffentlichung allein beweist noch keine Umsetzung.'],'profession'),
 q('04','practice','c','Which combination most strongly supports professional trust?',[
 ['Specialized competence, clear duties, and meaningful accountability.','Wissen, verantwortliche Anwendung und Überprüfbarkeit ergänzen sich.'],
 ['High fees and unverifiable claims of past success.','Preis und Behauptung sind kein belastbarer Vertrauensnachweis.'],
 ['A promise that uncertainty has been eliminated.','Eine solche Zusage verdeckt die Eigenschaften von Anlageentscheidungen.']
 ],0,['Professionelles Vertrauen braucht sowohl Befähigung als auch verantwortliche Anwendung und nachvollziehbare Standards.'],'profession'),
 q('05','practice','d','High ethical standards are especially important in investment management because clients often:',[
 ['can independently verify every analysis at no cost.','Gerade dies ist häufig nicht möglich.'],
 ['depend on expertise and decisions they cannot fully observe or evaluate.','Informationsasymmetrie und delegierte Entscheidungen erhöhen den Vertrauensbedarf.'],
 ['receive outcomes completely free of randomness.','Renditen enthalten Unsicherheit und Zufall.']
 ],1,['Die eingeschränkte Beobachtbarkeit macht einen verantwortlichen Prozess besonders wichtig.'],'trust'),
 q('06','practice','e','A professional is assigned a model-validation task beyond her current expertise. The most professional response is to:',[
 ['approve the model solely because its vendor is well known.','Anbieterreputation ersetzt nicht die erforderliche Prüfung.'],
 ['pretend she understands it to preserve confidence.','Das verbirgt eine wesentliche Kompetenzgrenze.'],
 ['obtain appropriate expertise and ensure competent performance of the task.','Weiterbildung, Unterstützung und geeignete Arbeitsteilung können die Lücke bearbeiten.']
 ],2,['Professionalität umfasst das Erkennen und verantwortliche Bearbeiten eigener Grenzen.'],'professionalism'),
 q('07','practice','f','An employee says, “Everyone in our team omits this disclosure, so it must be acceptable.” This reasoning most clearly reflects:',[
 ['pressure to conform being mistaken for an ethical justification.','Verbreitung einer Praxis beweist ihre Richtigkeit nicht.'],
 ['independent verification of the applicable standard.','Eine solche Prüfung wurde nicht beschrieben.'],
 ['proof that disclosure has no value.','Die Gewohnheit liefert keinen solchen Nachweis.']
 ],0,['Die Aussage ersetzt Regel- und Folgenprüfung durch Gruppenverhalten.'],'pressure'),
 q('08','practice','f','A professional believes that being an honest person makes him immune to incentive-related bias. This belief most likely:',[
 ['eliminates the need to review conflicts.','Die Person kann trotzdem von Anreizen beeinflusst werden.'],
 ['underestimates situational influences and overestimates his own objectivity.','Ein positives Selbstbild ist keine Kontrolle der konkreten Entscheidung.'],
 ['proves that every decision he makes is biased.','Die Aussage ist ein Risikofaktor, kein Beweis für jede einzelne Entscheidung.']
 ],1,['Weder Immunität noch automatische Schuld folgt aus dem Selbstbild. Eine konkrete Prüfung bleibt erforderlich.'],'pressure'),
 q('09','practice','g','Conduct is not explicitly prohibited by one applicable law, but it breaches a binding professional ethical standard. The absence of the specific legal prohibition:',[
 ['automatically makes the conduct ethically acceptable.','Rechtliche und berufsethische Maßstäbe sind nicht identisch.'],
 ['removes the professional standard.','Die zusätzliche Verpflichtung verschwindet dadurch nicht.'],
 ['does not by itself excuse the ethical breach.','Die einschlägige berufliche Pflicht bleibt zu prüfen.']
 ],2,['Eine Lücke in einer Einzelvorschrift ist keine universelle Freigabe.'],'law'),
 q('10','practice','g','Which statement about legal and ethical standards is most accurate?',[
 ['They overlap, but ethical obligations may extend beyond a particular legal minimum.','Die Maßstäbe können unterschiedliche Reichweite haben.'],
 ['Any ethical belief automatically authorizes violation of applicable law.','Persönliche Überzeugung hebt anwendbares Recht nicht auf.'],
 ['They are always identical in every jurisdiction.','Diese Gleichsetzung ignoriert unterschiedliche Quellen und Anwendungsbereiche.']
 ],0,['Beide Ebenen sind zu prüfen. Eine persönliche ethische Überzeugung ersetzt keine sorgfältige Rechts- und Regelanalyse.'],'law'),
 q('11','practice','h','Within the Identify–Consider–Act–Reflect framework, determining who is affected and which duties apply most directly belongs to:',[
 ['Reflect only, after the decision is irreversible.','Pflichten sollen bereits vor der Entscheidung erkannt werden.'],
 ['Identify.','Fakten, Betroffene und Pflichten sind Ausgangspunkte der Analyse.'],
 ['Act, without gathering further facts.','Ungeprüftes Handeln überspringt einen wesentlichen Teil des Rahmens.']
 ],1,['Die erste Einordnung verhindert, dass die Entscheidung nur aus Sicht der handelnden Person betrachtet wird.'],'framework'),
 q('12','practice','h','A manager considers alternative responses and asks an independent colleague whether a sales target is influencing her judgment. This most directly illustrates:',[
 ['ignoring situational influences.','Der Einfluss wird gerade bewusst geprüft.'],
 ['replacing personal responsibility with a colleague’s decision.','Beratung ist nicht automatisch Verantwortungsabgabe.'],
 ['the Consider component of ethical decision making.','Alternativen, Einflüsse und zusätzliche Perspektiven werden abgewogen.']
 ],2,['Unabhängige Rückmeldung kann blinde Flecken sichtbar machen; die eigene Verantwortung bleibt.'],'framework'),
 q('13','practice','h','After correcting a client billing error, a team examines why the error escaped detection and changes its controls. This most directly illustrates:',[
 ['Reflect.','Der Prozess wird ausgewertet und daraus wird gelernt.'],
 ['a requirement to ignore the original problem.','Die ursprüngliche Ursache steht im Mittelpunkt.'],
 ['proof that the initial error was harmless.','Eine spätere Verbesserung beseitigt den ursprünglichen Fehler nicht.']
 ],0,['Reflexion betrachtet Ursache, Reaktion und künftige Verbesserung.'],'framework'),
 q('14','practice','f h','In an ethics exam question, which approach is most appropriate?',[
 ['Assume hidden misconduct whenever a person earns a high bonus.','Ein Anreiz ist nicht automatisch Beweis einer nicht genannten Handlung.'],
 ['Apply the relevant rules to the facts given and distinguish facts from assumptions.','Eine tragfähige Schlussfolgerung braucht die beschriebenen Voraussetzungen.'],
 ['Treat every missing consent statement as explicit approval.','Nicht genannte Zustimmung darf nicht erfunden werden.']
 ],1,['Sorgfältiges Fallverständnis vermeidet sowohl erfundene Schuld als auch erfundene Entlastung.'],'limits'),
 q('a1','mock-a','f','An analyst removes a risk warning after colleagues say that including it will make the team miss its sales target. The most evident situational influence is:',[
 ['a guaranteed improvement in analysis quality.','Ein Verkaufsziel belegt keine bessere Analyse.'],
 ['the elimination of all conflicts by teamwork.','Gruppenarbeit kann selbst Druck erzeugen.'],
 ['group and incentive pressure on the analyst’s judgment.','Sozialer und wirtschaftlicher Druck wirken auf die Darstellung.']
 ],2,['Der Fall nennt die Einflussquelle ausdrücklich. Die richtige Analyse erkennt diesen Druck, statt Teamzustimmung als Rechtfertigung zu verwenden.'],'pressure'),
 q('a2','mock-a','b c','A professional association publishes a code but never investigates credible allegations or holds members accountable. The main weakness is that:',[
 ['announced expectations are not supported by meaningful enforcement.','Ein öffentlicher Anspruch benötigt auch glaubwürdige Verantwortlichkeit.'],
 ['technical expertise has become unnecessary.','Die Aussage folgt nicht aus fehlender Durchsetzung.'],
 ['a code must guarantee positive investment returns.','Das ist nicht die Funktion eines Berufskodex.']
 ],0,['Vertrauen verlangt mehr als einen gedruckten Text. Verantwortlichkeit verbindet Grundsätze mit tatsächlichem Verhalten.'],'profession'),
 q('b1','mock-b','h','A professional reports a credible problem to a supervisor and later observes that it continues unchanged. Under an ethical decision-making framework, the professional should most appropriately:',[
 ['assume the initial report has permanently ended all responsibility.','Neue Beobachtungen können weitere Schritte erfordern.'],
 ['reassess the situation and pursue appropriate follow-up or escalation.','Handlung und tatsächliche Wirkung müssen verbunden bleiben.'],
 ['erase the original evidence because the matter was reported.','Das erschwert angemessene Untersuchung und Nachverfolgung.']
 ],1,['Die fortgesetzte Störung ist neue Information. Ein Rahmen ist kein einmalig abzuhakender Ablauf.'],'framework'),
 q('b2','mock-b','d e','Clients cannot easily distinguish skill from luck in a single year of investment returns. This most strongly supports the need for:',[
 ['judging ethical conduct only by the highest return.','Das verstärkt gerade den beschriebenen Bewertungsfehler.'],
 ['removing all professional standards.','Unsicherheit erhöht den Bedarf an nachvollziehbaren Prozessen.'],
 ['competent processes, transparent duties, and ethical accountability.','Diese Merkmale ergänzen die unsichere Ergebnisbeobachtung.']
 ],2,['Renditeunsicherheit macht Prozessqualität wertvoll. Sie kann Pflichten nicht ersetzen.'],'trust')
];
