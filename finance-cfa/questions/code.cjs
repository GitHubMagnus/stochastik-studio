const {Q}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('ec-'+id,'code','ethics',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','b','Which statement is a component of the Code of Ethics?',[
 ['Guarantee positive annual returns for every client.','Ein garantierter Anlageerfolg ist keine Kodexpflicht.'],
 ['Maintain and improve professional competence and support competence in other professionals.','Kompetenzpflege ist eine der sechs Komponenten.'],
 ['Place personal compensation above client interests.','Die Rangfolge ist gerade umgekehrt.']
 ],1,['Die Kompetenzkomponente betrifft eigenes Lernen und die Förderung anderer. Sie verspricht keine bestimmten Marktergebnisse.'],'six-principles'),
 q('02','practice','b','The Code of Ethics most directly calls for:',[
 ['promoting market integrity only when personally profitable.','Die Pflicht ist nicht auf privaten Vorteil begrenzt.'],
 ['replacing independent judgment with popular opinion.','Unabhängiges berufliches Urteil ist ausdrücklich bedeutsam.'],
 ['promoting the integrity and viability of global capital markets for society’s benefit.','Die Verantwortung reicht über den eigenen Vertrag hinaus.']
 ],2,['Der Kodex verbindet professionelles Verhalten mit dem Nutzen für Markt und Gesellschaft.'],'six-principles'),
 q('03','practice','b','Which description of the structure is most accurate?',[
 ['The Code has six components, and the Standards are organized into seven major categories.','Dies ist die grundlegende Gliederung.'],
 ['The Code consists only of transaction-priority rules.','Das ist lediglich ein Teilbereich der Standards.'],
 ['The Standards replace all applicable laws.','Rechtliche Anforderungen bleiben bestehen.']
 ],0,['Kodex und Standards erfüllen zusammenhängende, aber verschiedene Funktionen: Grundsätze und konkretere Verhaltenspflichten.'],'standard-map'),
 q('04','practice','c','An analyst uses an external report without attribution and without reviewing whether it supports her recommendation. The two most directly relevant issues are:',[
 ['only exam confidentiality and candidate status.','Diese Themen werden im Sachverhalt nicht berührt.'],
 ['misrepresentation and diligence/reasonable basis.','Fremde Leistung und sachliche Grundlage sind getrennte Probleme.'],
 ['only the date of membership renewal.','Das erklärt die beschriebenen Handlungen nicht.']
 ],1,['I(C) betrifft die falsche Zuordnung der Leistung; V(A) die fehlende tragfähige Prüfung.'],'standard-map'),
 q('05','practice','c','A question asks whether a recommendation fits a client’s financial situation and total portfolio. The most direct standard is:',[
 ['VII(B), concerning references to the designation.','Es geht nicht um eine Statusaussage.'],
 ['IV(C), concerning supervision.','Eine Aufsichtsbeziehung ist nicht das zentrale Problem.'],
 ['III(C), Suitability.','Anlage, Kunde und Portfolio werden auf Eignung geprüft.']
 ],2,['Die entscheidenden Wörter sind finanzielle Situation und Gesamtportfolio.'],'substandards'),
 q('06','practice','c','A supervisor argues that a written compliance manual proves effective supervision even though known violations continue without investigation. The primary issue is:',[
 ['whether reasonable supervisory efforts actually occur.','Text allein beweist keine wirksame Aufsicht.'],
 ['whether the manual has enough pages.','Umfang ist kein Ersatz für Umsetzung.'],
 ['whether all employees hold the CFA charter.','Die Pflicht hängt von tatsächlicher Aufsicht ab.']
 ],0,['IV(C) verlangt angemessene Bemühungen. Die bekannte fortgesetzte Verletzung erfordert eine sachgerechte Reaktion.'],'substandards'),
 q('07','practice','a','Within the Professional Conduct Program, allegations are primarily investigated by:',[
 ['the client’s investment benchmark.','Eine Vergleichsgröße ist keine Untersuchungsinstanz.'],
 ['Professional Conduct staff.','Die Mitarbeitenden führen die Sachverhaltsuntersuchung durch.'],
 ['a randomly selected exam candidate.','Das ist keine vorgesehene Zuständigkeit.']
 ],1,['Untersuchung und disziplinarische Beurteilung durch Panels sind als Rollen zu unterscheiden.'],'conduct-program'),
 q('08','practice','a','The Disciplinary Review Committee is most accurately described as:',[
 ['a court that imposes criminal prison sentences.','Das Verbandsverfahren ist kein staatliches Strafgericht.'],
 ['a group that guarantees investment returns.','Die Aufgabe ist disziplinarische Prüfung, nicht Anlageerfolg.'],
 ['a volunteer body of charterholders involved in disciplinary review and sanctions.','DRC-Panels wirken an der fachlichen Prüfung und Entscheidung mit.']
 ],2,['Der DRC ist Teil der berufsbezogenen Durchsetzung. Seine Zuständigkeit darf nicht mit staatlicher Strafgewalt verwechselt werden.'],'conduct-program'),
 q('09','practice','a','A written complaint alleges misconduct. The complaint alone:',[
 ['can prompt an investigation but is not itself a final finding of violation.','Anlass und abschließende Feststellung sind getrennt.'],
 ['automatically proves every allegation.','Die Tatsachen müssen untersucht werden.'],
 ['can never be considered unless a criminal conviction already exists.','Eine solche generelle Voraussetzung besteht nicht.']
 ],0,['Ein faires Verfahren prüft Beweise und Erklärungen. Die Einreichung einer Beschwerde ersetzt diese Prüfung nicht.'],'process'),
 q('10','practice','a','A member contests proposed misconduct charges and sanctions. In the basic enforcement process, the contested matter is referred for review to:',[
 ['the member’s highest-paying client for a binding verdict.','Der Kunde ist keine solche Entscheidungsinstanz.'],
 ['an appropriate panel of DRC members.','Das Panel beurteilt den bestrittenen Sachverhalt im Verfahren.'],
 ['the member alone for final determination.','Persönliche Ablehnung beendet das Verfahren nicht.']
 ],1,['Die Struktur ermöglicht Prüfung bestrittener Vorwürfe, statt die erste Einschätzung automatisch als endgültig zu behandeln.'],'process'),
 q('11','practice','a','Which outcome can result from a professional conduct violation?',[
 ['A guaranteed increase in required client returns.','Das ist keine disziplinarische Sanktion.'],
 ['Automatic transfer of the member’s assets to CFA Institute in every case.','Eine solche pauschale Folge ist nicht gegeben.'],
 ['Suspension or revocation of membership and the right to use the designation.','Dies sind mögliche berufsbezogene Folgen.']
 ],2,['Die Sanktionen betreffen unter anderem Mitgliedschaft, Bezeichnungsrecht und Programmteilnahme. Art und Umfang hängen vom Verfahren ab.'],'sanctions'),
 q('12','practice','c','A recommended compliance procedure is not used in exactly the suggested form, but the relevant duty is effectively met through another appropriate procedure. The missing suggested form:',[
 ['does not alone prove a violation of the underlying duty.','Verbindliche Pflicht und empfohlene Umsetzung sind zu unterscheiden.'],
 ['always proves misconduct regardless of effectiveness.','Das würde Empfehlung und Pflicht gleichsetzen.'],
 ['eliminates all documentation requirements.','Andere Pflichten bleiben unberührt.']
 ],0,['Es ist die tatsächlich erforderliche Pflicht zu prüfen. Alternative angemessene Umsetzung kann möglich sein.'],'substandards'),
 q('a1','mock-a','a','Which source can give rise to a professional conduct investigation?',[
 ['Only a final criminal conviction.','Die möglichen Auslöser sind weiter.'],
 ['A credible written complaint or relevant public information.','Beides kann Anlass für eine Untersuchung liefern.'],
 ['Only a member’s voluntary admission.','Auch unabhängige Hinweise können relevant sein.']
 ],1,['Die Untersuchung soll gerade erst klären, ob eine Verletzung vorliegt. Ein vorheriges Geständnis oder Strafurteil ist keine allgemeine Voraussetzung.'],'conduct-program'),
 q('a2','mock-a','b c','An employee corrects a misleading investment analysis despite pressure to preserve a personal bonus. This most directly illustrates the Code’s requirement to:',[
 ['maximize personal compensation before considering clients.','Das wäre die entgegengesetzte Priorität.'],
 ['guarantee the analysis will predict prices perfectly.','Korrektheit und Sorgfalt sind keine Prognosegarantie.'],
 ['place client interests and professional integrity above personal interests.','Die Handlung ordnet den eigenen Bonus der beruflichen Pflicht unter.']
 ],2,['Die Entscheidung zeigt die Rangfolge der Interessen in einer konkreten Konfliktsituation.'],'six-principles'),
 q('b1','mock-b','a','Following an investigation, Professional Conduct staff finds insufficient grounds for disciplinary action. The process:',[
 ['can conclude without a disciplinary sanction.','Nicht jede Untersuchung endet mit einem festgestellten Verstoß.'],
 ['must impose a sanction because a complaint existed.','Eine Beschwerde ist noch kein Beweis.'],
 ['must guarantee compensation for every market loss.','Das ist nicht die Funktion des Verfahrens.']
 ],0,['Untersuchungen klären Sachverhalte; ein sanktionsloses Ergebnis ist möglich.'],'process'),
 q('b2','mock-b','b c','An adviser explains service costs, key process risks, and the distinction between facts and forecasts. These topics fall most directly under:',[
 ['only the rules for use of the CFA designation.','Es geht um Anlagekommunikation, nicht um Status.'],
 ['Standard V(B), communication with clients and prospective clients.','Kosten, Methode, Risiken und Aussageart sind zentrale Kommunikationspunkte.'],
 ['only the rules for exam security.','Prüfungsinhalte sind hier nicht betroffen.']
 ],1,['Die Sachverhaltsmerkmale führen zur konkreten Kommunikationspflicht, nicht nur allgemein zu „Ethik“.'],'standard-map')
];
