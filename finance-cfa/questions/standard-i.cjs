const {Q}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('ei-'+id,'standard-i','ethics',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a c','Local rules permit an investment practice that the CFA Institute Standards prohibit. The local rules govern the analyst’s work, and compliance with the Standards does not violate local law. The analyst should:',[
  ['follow the local minimum because it is legally enforceable.','Die beruflichen Standards bleiben auch bei niedrigerer gesetzlicher Mindestanforderung verbindlich.'],
  ['follow the stricter applicable Standards.','Die beiden anwendbaren Anforderungen werden verglichen; hier verlangen die Standards mehr Schutz.'],
  ['select whichever rule is preferred by the employer.','Die Arbeitgeberpräferenz hebt keine anwendbare Pflicht auf.']
 ],1,['Die Aufgabe nennt einen echten Unterschied zwischen zwei einschlägigen Anforderungen. „Lokal erlaubt“ beantwortet nur die Gesetzesfrage, nicht die vollständige berufsrechtliche Frage.'],'law'),
 q('02','practice','a c','An analyst learns that her name will appear on a report containing a knowingly false liquidity statement. Her objections to the author and compliance department have failed. No law requires a report to an external authority. Her most appropriate next action is to:',[
  ['dissociate from the misleading report and refuse continued participation.','Die erfolglose Eskalation macht die Trennung von der unzulässigen Tätigkeit erforderlich.'],
  ['sign the report because she already notified compliance.','Eine Mitteilung beendet die eigene fortgesetzte Beteiligung nicht.'],
  ['assume that external reporting is the only possible form of dissociation.','Distanzierung und externe Meldung sind verschiedene Handlungen.']
 ],0,['Die entscheidende offene Pflicht betrifft ihre eigene Mitwirkung. Eine bloße interne Nachricht dokumentiert Bedenken, erlaubt aber keine weitere Unterstützung der Falschdarstellung.'],'law'),
 q('03','practice','a c','An issuer offers an analyst a substantial personal payment conditional on publishing a favorable recommendation. The analyst believes her recommendation would be favorable even without payment. Accepting the payment would most likely:',[
  ['be acceptable if the recommendation later proves correct.','Ein späterer Erfolg beseitigt die ergebnisabhängige Einflussnahme nicht.'],
  ['be acceptable solely because the payment is disclosed in a footnote.','Offenlegung ersetzt nicht die notwendige Unabhängigkeit.'],
  ['compromise independence and objectivity.','Die persönliche Vergütung ist an ein gewünschtes Researchergebnis gekoppelt.']
 ],2,['Die vorherige Bindung des Urteils ist das Problem. Die Analystin kann keine Gegenleistung für ein bestimmtes Ergebnis akzeptieren und die Beeinträchtigung allein durch eine Fußnote auflösen.'],'independence'),
 q('04','practice','a c','A client unexpectedly gives a portfolio manager a modest noncash gift after a completed year as thanks for past service. There was no prior compensation agreement, and the gift cannot reasonably impair objectivity. Which action is most appropriate under Standard I(B)?',[
  ['Conceal it because it was not from a broker.','Auch Kundenleistungen sind für die Arbeitgeberbeurteilung relevant.'],
  ['Disclose the benefit to the employer.','Der Fall grenzt eine nachträgliche Anerkennung von einer künftigen erfolgsabhängigen Vergütungsvereinbarung ab.'],
  ['Claim that every client gift is categorically prohibited.','Es gibt kein pauschales Verbot sämtlicher Kundenanerkennungen.']
 ],1,['Die Herkunft und der Zeitpunkt sind entscheidend. Eine vorher vereinbarte zukünftige Zusatzvergütung würde weitere Zustimmungspflichten auslösen; diese Vereinbarung ist im Fall ausdrücklich ausgeschlossen.'],'independence'),
 q('05','practice','a c','A presentation accurately calculates historical strategy simulations but labels them as returns earned in live client accounts. No such accounts existed. The presentation most likely violates Standard I(C) because:',[
  ['simulations can never be used in investment analysis.','Simulationen sind als korrekt gekennzeichnete Analysen grundsätzlich möglich.'],
  ['the calculations must be arithmetically incorrect.','Auch korrekte Zahlen können durch eine falsche Beschreibung irreführen.'],
  ['it misrepresents the nature of the performance record.','Simulierte Ergebnisse werden als tatsächlich erzielte Kundenergebnisse dargestellt.']
 ],2,['Der Wahrheitsgehalt umfasst die Bedeutung der Zahlen. Eine spätere korrekte Modellrechnung kann den falschen Eindruck über die tatsächliche Umsetzung nicht heilen.'],'representation'),
 q('06','practice','a c','An analyst copies another researcher’s original explanatory diagram into a client report and presents it as her own original work. She obtained permission to reproduce it, but does not acknowledge its source. Which statement is most accurate?',[
  ['Permission alone eliminates any possibility of misrepresentation.','Nutzungsrecht und wahrheitsgemäße Urheberschaft sind getrennte Fragen.'],
  ['Attribution is unnecessary whenever the underlying idea concerns public companies.','Der öffentliche Unternehmensbezug macht die fremde Originaldarstellung nicht zur eigenen Leistung.'],
  ['Presenting the original work as her own is still problematic.','Die Erlaubnis zur Nutzung rechtfertigt keine falsche Darstellung der Urheberschaft.']
 ],2,['Die Frage trennt zwei Voraussetzungen: erlaubte Verwendung und korrekte Kennzeichnung. Auch genehmigtes Material darf nicht wissentlich als selbst geschaffen ausgegeben werden.'],'representation'),
 q('07','practice','a c','A professional intentionally fabricates internal review records to make it appear that required model validation was completed. The model happens to make profitable predictions. His conduct most likely:',[
  ['violates the Standards despite the profitable result.','Die bewusste berufliche Täuschung besteht unabhängig vom späteren Anlageergebnis.'],
  ['complies because no client loss occurred.','Ein eingetretener Geldverlust ist keine Voraussetzung für diese Integritätsverletzung.'],
  ['complies unless a criminal court first convicts him.','Die berufliche Verhaltensbeurteilung hängt nicht erst von einer strafrechtlichen Verurteilung ab.']
 ],0,['Der erfundene Nachweis zerstört die Verlässlichkeit der Kontrolle. Die Prognose hätte zufällig richtig sein können; sie sagt nichts über die Ehrlichkeit des dargestellten Prüfprozesses aus.'],'misconduct'),
 q('08','practice','a c','A member experiences personal financial distress following an uninsured household loss. The facts disclose no fraud, deception, professional impairment, or related professional misconduct. Standard I(D) is:',[
  ['automatically violated whenever personal finances deteriorate.','Ein schlechtes privates Ergebnis beweist keine berufliche Integritätsverletzung.'],
  ['not shown to be violated by the stated facts alone.','Die für einen Standardverstoß notwendige Verbindung zu relevantem Verhalten fehlt im Sachverhalt.'],
  ['violated because all personal risks must be fully insured.','Eine solche universelle Versicherungspflicht wird nicht durch I(D) begründet.']
 ],1,['Eine Falllösung darf fehlende Tatsachen nicht durch Verdacht ersetzen. Andere Umstände könnten die Beurteilung ändern; sie sind hier ausdrücklich nicht gegeben.'],'misconduct'),
 q('09','practice','a c','A member is assigned independent responsibility for a new analytical method she does not understand. Which response best addresses Standard I(E)?',[
  ['Rely solely on a professional designation earned years earlier.','Eine allgemeine Qualifikation belegt nicht jede neue aufgabenspezifische Fähigkeit.'],
  ['Accept immediately and treat a favorable outcome as proof of competence.','Das Ergebnis ist kein Ersatz für notwendige Befähigung vor der Tätigkeit.'],
  ['Obtain sufficient training and qualified support before independently performing the role.','Die Reaktion schließt die konkrete Fähigkeitslücke vor eigenständiger Verantwortungsübernahme.']
 ],2,['Kompetenz muss der übernommenen Aufgabe entsprechen. Gezielte Vorbereitung, Unterstützung und eine passende Begrenzung des anfänglichen Verantwortungsumfangs sind hier sachgerecht.'],'competence'),
 q('10','practice','a c','A member maintains competence through relevant self-study, supervised practice, and specialist training. Standard I(E) itself:',[
  ['requires a single named continuing-education provider for all members.','Der Standard legt keinen universellen Anbieter fest.'],
  ['requires competence but does not mandate one particular continuing-education program.','Die Pflicht betrifft das erforderliche Können; geeignete Wege können unterschiedlich sein.'],
  ['makes competence optional once the CFA charter has been awarded.','Die aufgabenbezogene Pflicht bleibt laufend bestehen.']
 ],1,['Eine betriebliche oder gesetzliche Weiterbildungsvorgabe kann zusätzlich gelten. Sie darf aber nicht als automatisch identisch mit einer universellen Vorgabe von I(E) dargestellt werden.'],'competence'),
 q('11','practice','b','A research firm repeatedly discovers undisclosed issuer-paid benefits only after analysts publish recommendations. Which additional control most directly addresses the timing of this risk?',[
  ['A pre-acceptance disclosure and review process for benefits.','Der Konflikt wird vor Annahme und Empfehlung sichtbar.'],
  ['A requirement to remove all negative views from final reports.','Dies verstärkt die Gefahr beeinflusster Analysen.'],
  ['A larger disclaimer added only after publication.','Die Maßnahme setzt zu spät an und heilt keine beeinträchtigte Entscheidung.']
 ],0,['Die Ursache liegt im späten Erkennen. Eine wirksame Kontrolle greift vor der Annahme ein und ermöglicht, unzulässige Leistungen abzulehnen.'],'controls'),
 q('12','practice','b','A firm’s analysts increasingly use unfamiliar data models. Which measure best supports compliance with Standard I(E)?',[
  ['Assume that access to expensive software establishes user competence.','Kosten und Marke des Werkzeugs ersetzen keine aufgabenbezogene Befähigung.'],
  ['Allow all analysts to approve every model once they have read a general ethics statement.','Allgemeine Regeln vermitteln keine fehlenden fachlichen Modellkenntnisse.'],
  ['Match approval responsibilities to demonstrated skills and provide targeted training for gaps.','Befugnis und tatsächliche Fähigkeiten werden miteinander verbunden.']
 ],2,['Die Kontrolle muss die konkrete neue Verantwortung mit den vorhandenen Fähigkeiten abgleichen. Eine Schulung kann geeignet sein, wenn sie diese Lücke tatsächlich schließt.'],'controls'),
 q("a1",
  "mock-a",
  "a c",
  "A jurisdiction requires advisers to provide a particular risk disclosure that is more detailed than the minimum otherwise required by the CFA Standards. The requirement applies to the adviser’s activity. She should:",
  [["provide the more detailed disclosure required by the applicable local law.","Die strengere einschlägige Anforderung gilt."],["use the CFA minimum if the client acknowledges the shorter disclosure.","Die Zustimmung eines Kunden hebt die ausdrücklich anwendbare gesetzliche Mindestanforderung nicht auf. Die ausführlichere Information ist hier rechtlich verpflichtend."],["use the employer’s standard disclosure until its compliance manual is updated.","Ein veralteter interner Text suspendiert keine geltende Pflicht. Die Beraterin muss die erforderliche Information bereitstellen und den nötigen Prozess anpassen lassen."]],
  0,
  ["Die Pflicht folgt aus der tatsächlich anwendbaren strengeren Regel. Es ist keine Mehrheitsentscheidung zwischen Rechtsordnungen.","Die Aufgabe legt Anwendbarkeit und höhere Schutzanforderung fest. Daher ist keine weitere Erlaubnis des Kunden oder Aktualisierung einer internen Vorlage Voraussetzung für die Befolgung dieser Regel."],
  "law"),
 q("a2",
  "mock-a",
  "a c",
  "A consultant knowingly advertises that all client valuations are personally completed by her, while most are produced by qualified external specialists and she performs only a final review. The quality of the specialists’ work is satisfactory. The advertisement most likely:",
  [["complies because she accepts final professional responsibility for the specialists’ work.","Verantwortung für eine fremde Leistung und persönliche vollständige Durchführung sind unterschiedliche Aussagen. Die wissentlich unzutreffende Werbung bleibt auch bei sorgfältiger Endprüfung irreführend."],["misrepresents the delivery of the service despite satisfactory outsourced work.","Die sachliche Qualität beseitigt die falsche Behauptung persönlicher Durchführung nicht."],["complies if clients receive valuations of the quality promised in the advertisement.","Die Qualitätsaussage ist nur ein Teil des Versprechens. Auch die ausdrücklich behauptete persönliche Erstellung muss den Tatsachen entsprechen."]],
  1,
  ["Entscheidend ist die wissentlich falsche Beschreibung. Die Kundin darf qualifizierte Dritte einsetzen, muss deren Rolle aber mit ihrer Leistungsdarstellung in Einklang bringen.","Das Problem ist nicht die zulässige Beauftragung qualifizierter Dritter. Der behauptete Leistungsweg stimmt nicht mit dem tatsächlichen überein; ein gutes Ergebnis oder persönliche Verantwortung macht diese Beschreibung nicht wahr."],
  "representation"),
 q("a3",
  "mock-a",
  "b",
  "A company requires analysts to record gifts but never reviews the register or imposes restrictions. Several benefits are explicitly conditional on favorable coverage. The most appropriate improvement is to:",
  [["retain the recording process and provide clients with annual summaries of accepted gifts.","Zusätzliche Offenlegung allein verhindert keine ergebnisabhängige Einflussnahme. Die ausdrücklich bedingten Vorteile müssen materiell beurteilt und gegebenenfalls vor Annahme abgelehnt werden."],["authorize line managers to approve benefits whenever analysts state that their opinions are unchanged.","Eine Selbsteinschätzung ersetzt nicht die Prüfung der objektiv zu erwartenden Beeinträchtigung. Interne Freigaben dürfen die Pflicht zur Unabhängigkeit nicht außer Kraft setzen."],["review proposed benefits and reject those reasonably expected to compromise independent judgment.","Die Kontrolle muss Folgen haben und vor der beeinträchtigten Entscheidung greifen."]],
  2,
  ["Ein Register liefert Informationen. Erst die sachgerechte Beurteilung und Durchsetzung verhindert, dass bekannte Konflikte unverändert fortbestehen.","Die Ursache ist eine bekannte Kopplung von Vorteil und günstiger Berichterstattung. Eine Kontrolle muss diese Einflussnahme unterbrechen; mehr Dokumentation oder die bloße Bestätigung unveränderter Meinungen genügt dafür nicht."],
  "controls"),
 q("b1",
  "mock-b",
  "a c",
  "An analyst’s employer threatens to reduce her compensation unless she changes a well-supported unfavorable research conclusion to win an issuer mandate. The analyst’s primary professional response should be to:",
  [["maintain the supported independent conclusion and use appropriate escalation procedures.","Interner wirtschaftlicher Druck darf die Analyse nicht in ein gewünschtes Ergebnis umwandeln."],["publish the favorable conclusion after disclosing the employer’s investment-banking interest.","Die Offenlegung eines Mandatsinteresses rechtfertigt keine sachlich unbegründete Änderung des Urteils. Die veröffentlichte Empfehlung muss weiterhin die unabhängige Analyse widerspiegeln."],["replace the recommendation with neutral wording until the issuer mandate has been secured.","Ein aus Geschäftsinteresse abgeschwächtes Urteil bleibt ein Eingriff in die unabhängige Kommunikation. Die Sicherung des Mandats ist kein sachlicher Anlass, eine gut begründete Empfehlung zu verfälschen."]],
  0,
  ["Die Drohung betrifft die Ergebnisrichtung, nicht eine sachliche Korrektur der Analyse. Berufliche Objektivität erfordert, die Empfehlung an der Evidenz auszurichten.","Die Drohung liefert keine neue Anlageevidenz. Zulässig wäre eine sachlich begründete Änderung nach neuen Informationen; im gegebenen Fall soll dagegen das Ergebnis für ein Geschäftsmandat verändert werden."],
  "independence"),
 q("b2",
  "mock-b",
  "a c",
  "A member uses a technically sound process within her expertise and clearly communicates its risks. An unforeseeable adverse outcome produces a client loss. On these facts alone, the loss:",
  [["establishes a competence violation because the process did not preserve the client’s capital.","Die Kompetenzpflicht ist keine Kapitalerhaltungsgarantie. Ein unerwarteter Verlust kann trotz aufgabengerechten Könnens und technisch tragfähigen Vorgehens eintreten."],["does not establish a competence violation merely because the investment lost value.","Kompetenz wird am aufgabengerechten Können und Vorgehen beurteilt."],["establishes misrepresentation because the disclosed risks did not prevent the loss.","Risikokommunikation soll zutreffend informieren, nicht Risiken beseitigen. Der Fall nennt weder falsche Angaben noch eine verschwiegene wesentliche Eigenschaft."]],
  1,
  ["Prüfe, ob die notwendige Befähigung vorhanden war. Eine ungewisse Kapitalanlage kann trotz kompetenter Durchführung einen Verlust erzeugen.","Trenne Fähigkeit, wahrheitsgemäße Kommunikation und späteres Marktergebnis. Die gegebenen Tatsachen belegen einen Verlust, aber keinen Mangel an Kompetenz oder eine Falschdarstellung."],
  "competence"),
 q("b3",
  "mock-b",
  "a c",
  "A member knowingly invents evidence in a professional due-diligence report to conceal that a required site inspection never occurred. The most accurate conclusion is that:",
  [["is primarily a record-retention deficiency that can be remedied by arranging the inspection later.","Eine später durchgeführte Besichtigung macht einen zuvor wissentlich erfundenen Nachweis nicht wahr. Es fehlt nicht nur eine Datei, sondern der Bericht behauptet eine tatsächlich nicht erbrachte Prüfung."],["is acceptable if a supervisor assumes responsibility for the final due-diligence recommendation.","Die Verantwortung eines Vorgesetzten erlaubt dem Mitglied keine wissentlich falschen Belege. Eigene Integritätspflichten bleiben bei Delegation und Freigabe bestehen."],["violates professional integrity by knowingly claiming an inspection that never occurred.","Der Bericht täuscht den Empfänger über die tatsächliche Prüfung."]],
  2,
  ["Die Aussage muss dem wirklich durchgeführten Prozess entsprechen. Eine nachträgliche Vermutung über ein mögliches Prüfergebnis kann einen erfundenen Nachweis nicht ersetzen.","Der Nachweis wurde bewusst erfunden, um einen nicht ausgeführten Prozess als abgeschlossen darzustellen. Die spätere fachliche Arbeit oder die Verantwortung eines anderen kann die ursprüngliche Täuschung nicht rückwirkend aufheben."],
  "misconduct")
];
