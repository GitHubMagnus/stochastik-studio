const {Q}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('evii-'+id,'standard-vii','ethics',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a','After a CFA exam, a candidate publicly identifies a curriculum topic that was not tested. She gives no exact question wording. This conduct:',[
 ['is permitted because only verbatim questions are confidential.','Auch die thematische Zusammensetzung ist geschützt.'],
 ['is permitted once she has left the test center.','Der Schutz endet nicht beim Verlassen des Prüfungsortes.'],
 ['discloses confidential exam information.','Die Abwesenheit eines Themas verrät Inhalt der tatsächlichen Prüfung.']
 ],2,['Information über geprüfte oder nicht geprüfte Bereiche bleibt vertraulich, sofern CFA Institute sie nicht freigegeben hat.'],'exam-integrity'),
 q('02','practice','a','A candidate criticizes exam scheduling without revealing any confidential exam or program information. Under Standard VII(A), expressing that opinion:',[
 ['is not prohibited merely because it criticizes CFA Institute.','Kritik ist nicht mit Verletzung der Vertraulichkeit gleichzusetzen.'],
 ['is always prohibited for registered candidates.','Der Standard verbietet nicht allgemein abweichende Meinungen.'],
 ['requires disclosure of actual exam topics to be credible.','Eine solche Offenbarung ist weder erforderlich noch erlaubt.']
 ],0,['Die Aufgabe schließt vertrauliche Inhalte ausdrücklich aus. Die bloße kritische Meinung verletzt den Standard nicht.'],'exam-integrity'),
 q('03','practice','a','A volunteer involved in developing exam questions shares an unreleased question with a friend preparing for the exam. The friend promises secrecy. The disclosure:',[
 ['is permitted because the recipient is a friend.','Die persönliche Beziehung schafft keine Berechtigung.'],
 ['compromises exam integrity despite the promise of secrecy.','Die vertrauliche Information wird unbefugt zugänglich.'],
 ['is permitted if the volunteer is unpaid.','Die Vergütung der Rolle ändert die Pflicht nicht.']
 ],1,['Rollenbezogener Zugang erlaubt nur den vorgesehenen Zweck. Eine private Weitergabe unterläuft diese Begrenzung.'],'exam-integrity'),
 q('04','practice','b','A study group receives a file advertised as an unreleased actual CFA exam. The most appropriate response is to:',[
 ['circulate it privately rather than publicly.','Private Verteilung bleibt eine problematische Weitergabe.'],
 ['use it only to identify missing topics.','Auch daraus entsteht ein Vorteil aus behauptet vertraulicher Information.'],
 ['avoid using or distributing it and use the appropriate reporting channel.','Die Gruppe schützt die Integrität und verwendet reguläre Lernquellen.']
 ],2,['Ungewisse Echtheit rechtfertigt keine gezielte Nutzung als Prüfungswissen. Die Vorbereitung kann auf unabhängigem und veröffentlichtem Material fortgesetzt werden.'],'conduct-controls'),
 q('05','practice','a','An individual who passed Level I in 2027 has not been awarded the CFA charter. Which statement is most appropriate if factually accurate?',[
 ['Passed Level I of the CFA Program in 2027.','Die Aussage nennt das tatsächlich bestandene Prüfungsergebnis.'],
 ['Name, CFA Level I.','Das suggeriert eine nicht verliehene Teilbezeichnung.'],
 ['CFA charterholder after one exam.','Das behauptet einen nicht erreichten Status.']
 ],0,['Sachliche Prüfungsinformationen sind von einer Berufsbezeichnung zu trennen.'],'status'),
 q('06','practice','a','A candidate has passed all CFA exam levels but has not met the remaining requirements for award of the charter. The candidate may:',[
 ['immediately use CFA after the name because exams are the only requirement.','Die Aufgabe nennt noch offene weitere Voraussetzungen.'],
 ['accurately state the exams passed without claiming the unawarded charter.','So wird die Leistung beschrieben, ohne Status hinzuzufügen.'],
 ['guarantee superior investment returns based on the exam results.','Prüfungserfolg beweist keine künftige Rendite.']
 ],1,['Bestandene Prüfungen und das Recht zur Bezeichnung sind getrennte Sachverhalte.'],'status'),
 q('07','practice','a','A charterholder claims that holding the CFA designation guarantees her clients higher returns than all non-charterholder advisers. This claim:',[
 ['is supported solely by the designation.','Der Status ist kein Vergleichsnachweis künftiger Anlageerfolge.'],
 ['is acceptable if it appears only in an email.','Der Kommunikationskanal schafft keine Ausnahme.'],
 ['improperly exaggerates the implications of the designation.','Eine unbelegte Ergebnisgarantie wird aus der Qualifikation abgeleitet.']
 ],2,['Die irreführende Schlussfolgerung betrifft die Bedeutung der Bezeichnung, selbst wenn der Status an sich wahr ist.'],'claims'),
 q('08','practice','b','An individual is no longer entitled to use the CFA designation under the applicable membership requirements. Her old website still presents her as a current charterholder. She should:',[
 ['update the current-status claims across relevant communications.','Die Website beschreibt die Gegenwart und muss zutreffend sein.'],
 ['leave them because they were true when first written.','Historische Richtigkeit erlaubt keine falsche aktuelle Darstellung.'],
 ['correct only statements made orally.','Schriftliche und elektronische Angaben sind ebenfalls erfasst.']
 ],0,['Statusänderungen müssen in allen relevanten öffentlichen Angaben nachvollzogen werden.'],'status-controls'),
 q('09','practice','a','A student intends to register for a future CFA exam but has not registered and has no current candidacy. Describing herself as a current CFA candidate is:',[
 ['accurate because intention alone establishes candidacy.','Die beabsichtigte spätere Anmeldung ist kein aktueller Status.'],
 ['inaccurate on the stated facts.','Die aktuelle Kandidatur fehlt ausdrücklich.'],
 ['required whenever she studies finance.','Allgemeines Lernen begründet keine solche Pflicht oder Berechtigung.']
 ],1,['Die Aufgabe setzt klar fest, dass aktuell keine Kandidatur besteht. Eine Zukunftsabsicht darf nicht als Gegenwartszustand ausgegeben werden.'],'status-controls'),
 q('10','practice','b','Which study-group rule best protects exam confidentiality?',[
 ['Permit actual exam recollections if no numbers are included.','Auch Themen und andere inhaltliche Informationen können vertraulich sein.'],
 ['Allow recollections only among people who already sat the exam.','Dieser Empfängerkreis bewirkt keine offizielle Freigabe.'],
 ['Use public curriculum material and independently written exercises; exclude unreleased exam details.','Die Quellenregel trennt legitime Vorbereitung von vertraulichen Inhalten.']
 ],2,['Die Grenze verläuft nicht zwischen Zahlen und Worten, sondern zwischen freigegebenem Lernstoff und vertraulicher Prüfung.'],'conduct-controls'),
 q('11','practice','a','A candidate lists an expected future date of receiving the CFA charter on a resume, although the remaining requirements and award are not yet complete. This is:',[
 ['inappropriate because candidacy does not permit citing an expected charter-completion date.','Die tatsächliche Verleihung hängt von noch zu erfüllenden Voraussetzungen ab.'],
 ['appropriate whenever the candidate expects to pass.','Zuversicht schafft keinen künftigen garantierten Status.'],
 ['required for every registered candidate.','Eine solche Pflicht besteht nicht.']
 ],0,['Eine wahrheitsgemäße Angabe zum heutigen Prüfungsstand ist etwas anderes als ein erwartetes Verleihungsdatum.'],'status-controls'),
 q('12','practice','a','A person’s application has been accepted, and the person has sat for a registered CFA examination but is still awaiting the result. Assuming the other applicable conditions are met, this person:',[
 ['must already use the CFA designation.','Das Warten auf ein Ergebnis verleiht keinen Charter.'],
 ['may accurately refer to current candidacy.','Die Phase nach der Prüfung bis zum Ergebnis ist in der Kandidatur berücksichtigt.'],
 ['has earned a partial charter.','Eine solche Teilbezeichnung entsteht nicht.']
 ],1,['Kandidatur, Prüfungsabschluss und verliehener Charter bleiben getrennte Zustände.'],'status-controls'),
 q('a1','mock-a','a','A candidate posts an original example explaining a published curriculum formula. The example uses no actual exam information. This activity is:',[
 ['permissible on the stated facts.','Eigene Lernarbeit mit öffentlichem Stoff ist keine Prüfungsenthüllung.'],
 ['prohibited because every curriculum formula is confidential.','Veröffentlichter Lernstoff ist nicht automatisch vertraulich.'],
 ['permitted only after the candidate obtains the charter.','Diese Einschränkung folgt nicht aus dem Standard.']
 ],0,['Die Aufgabe unterscheidet ausdrücklich eigene Lehrinhalte von tatsächlicher Prüfungserfahrung.'],'exam-integrity'),
 q('a2','mock-a','a','A professional accurately describes the rigor of the CFA Program but then states that the designation eliminates the possibility of investment losses. The latter statement:',[
 ['is a factual implication of passing the exams.','Keine Ausbildung beseitigt das wirtschaftliche Verlustrisiko.'],
 ['misrepresents the implications of the designation.','Es wird eine unbelegte Verlustgarantie suggeriert.'],
 ['is acceptable when preceded by a correct status statement.','Eine richtige erste Aussage heilt die falsche zweite nicht.']
 ],1,['Ausbildungsanforderung und Anlagerisiko sind getrennt. Eine korrekte Beschreibung des Programms begründet keine Garantie.'],'claims'),
 q('b1','mock-b','a','A candidate privately tells another candidate which formulas appeared in her actual exam. She does not share complete questions. Her conduct:',[
 ['is allowed because it is a private conversation.','Vertraulichkeit gilt auch bei einzelnen privaten Empfängern.'],
 ['is allowed because formulas themselves may appear in textbooks.','Die Information über ihre Verwendung in der echten Prüfung ist zusätzlich und vertraulich.'],
 ['violates the confidentiality of actual exam content.','Entscheidend ist die Verbindung zur konkreten Prüfung.']
 ],2,['Die Formel kann öffentlich bekannt sein, während ihr tatsächliches Vorkommen im Examen geschützt bleibt.'],'exam-integrity'),
 q('b2','mock-b','a','A resume uses the label “partial CFA charterholder” to describe passing two exam levels without having received the charter. This label:',[
 ['misrepresents the status achieved.','Es gibt daraus keine verliehene Teilbezeichnung.'],
 ['is accurate whenever more than one exam is passed.','Die Anzahl bestandener Prüfungen schafft keine Teilverleihung.'],
 ['is accurate if the person plans to take the final exam.','Ein künftiger Plan ändert den aktuellen Status nicht.']
 ],0,['Die Prüfungen dürfen zutreffend beschrieben werden. Der erfundene Zwischenstatus ist der Fehler.'],'status')
];
