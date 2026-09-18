const {T,X,S}=require('../author.cjs');
module.exports={id:'code',intro:[
 'Der Code of Ethics formuliert übergeordnete berufliche Verpflichtungen. Die sieben Standards machen sie für bestimmte Tätigkeiten und Beziehungen genauer prüfbar. Das Professional Conduct Program ergänzt diese Regeln um ein Verfahren zur Untersuchung und Durchsetzung.',
 'Lerne diese drei Ebenen gemeinsam: Welcher Grundsatz erklärt die Pflicht, welcher Standard beschreibt die konkrete Handlung, und wie wird ein möglicher Verstoß untersucht? Ein Kapitelname allein ist noch keine Falllösung.'
],sections:[
 S('six-principles','1. Die sechs Komponenten des Kodex','b',[
  T(['Komponente in eigenen Worten','Eigene Anwendung'],[
   ['Integer, kompetent, sorgfältig, respektvoll und ethisch handeln.','Einen bekannten Modellfehler nicht hinter fachlich klingender Sprache verbergen.'],
   ['Berufsintegrität und Kundeninteressen über eigene Interessen stellen.','Eine ungeeignete, aber provisionsstarke Empfehlung ablehnen.'],
   ['Angemessene Sorgfalt und unabhängiges berufliches Urteil einsetzen.','Eine verbreitete Marktmeinung vor Übernahme kritisch prüfen.'],
   ['Professionelles, ethisches Verhalten selbst praktizieren und bei anderen fördern.','Eine Kollegin bei der sachgerechten Eskalation eines Problems unterstützen.'],
   ['Integrität und Funktionsfähigkeit der Kapitalmärkte im Interesse der Gesellschaft fördern.','Kein Scheinvolumen als echte Nachfrage darstellen.'],
   ['Eigene Kompetenz erhalten und verbessern sowie die Kompetenz anderer fördern.','Nach einer Aufgabenänderung erforderliche Fähigkeiten aufbauen und Wissen teilen.']
  ],'Kurze eigene Lernfassung der sechs Komponenten; maßgeblich bleibt der verlinkte offizielle Kodex.'),
  'Die Komponenten überschneiden sich bewusst. Sorgfältige Analyse kann zugleich Kundeninteresse, Unabhängigkeit und Kompetenz ausdrücken. In einer Anwendung ist deshalb weniger wichtig, nur ein Schlagwort zu nennen, als die Verbindung zur konkreten Handlung zu erklären.',
  X('Ein technischer Fehler ist auch eine Verantwortungsfrage','Ein Teammitglied entdeckt, dass das Bewertungsmodell Auszahlungen doppelt zählt. Der Fehler macht ein Produkt attraktiver und hilft dem Vertrieb. Die Korrektur würde einen wichtigen Termin gefährden.',[
   'Kompetenz und Sorgfalt verlangen, die Berechnung zu verstehen und die Abweichung sachgerecht zu bearbeiten.',
   'Kundeninteressen verlangen, den Produktvergleich nicht auf dem bekannten Fehler aufzubauen.',
   'Unabhängiges Urteil bedeutet, den Termin- und Vertriebsdruck nicht an die Stelle der fachlichen Bewertung treten zu lassen.'
  ],'Mehrere Grundsätze erklären dieselbe richtige Richtung. Für die genaue Regelanwendung werden anschließend die einschlägigen Standards geprüft.')
 ]),
 S('standard-map','2. Die sieben Standards als Orientierungsplan','b c',[
  T(['Standard','Worum geht es?','Untergliederung als Suchhilfe'],[
   ['I · Professionalism','Verlässliches berufliches Handeln.','A Recht; B Unabhängigkeit; C falsche Darstellung; D Fehlverhalten; E Kompetenz.'],
   ['II · Integrity of Capital Markets','Verlässliche Information und Marktbildung.','A wesentliche nicht öffentliche Information; B Marktmanipulation.'],
   ['III · Duties to Clients','Pflichten gegenüber Kunden.','A Loyalität/Sorgfalt; B Fairness; C Eignung; D Performance; E Vertraulichkeit.'],
   ['IV · Duties to Employers','Pflichten aus der Beschäftigung und Aufsicht.','A Loyalität; B Zusatzvergütung; C Aufsichtsverantwortung.'],
   ['V · Investment Analysis, Recommendations, and Actions','Begründung und Kommunikation der Anlagearbeit.','A tragfähige Analyse; B Kundenkommunikation; C Nachweise.'],
   ['VI · Conflicts of Interest','Anreize, Transaktionsvorrang und Vermittlung.','A vermeiden/offenlegen; B Transaktionspriorität; C Vermittlungsvergütung.'],
   ['VII · Responsibilities as a CFA Institute Member or CFA Candidate','Programmintegrität und zutreffende Statusangaben.','A Verhalten im Zusammenhang mit Programmen; B Bezeichnungs- und Statusangaben.']
  ],'Orientierungsübersicht der aktuellen Struktur mit 23 Unterstandards. Die Detailkapitel erklären Voraussetzungen und Ausnahmen.'),
  'Die aktuellen Anforderungen enthalten insbesondere I(E) zur erforderlichen Kompetenz, Angaben zu Art und Kosten der Leistung in V(B) sowie Konfliktvermeidung oder Offenlegung in VI(A). Ältere Lernzettel können diese Punkte unvollständig wiedergeben.',
  X('Die richtige Adresse finden','Eine Analystin nutzt eine fremde Analyse ohne Quellenhinweis, prüft deren Annahmen nicht und verteilt sie nur an einen bevorzugten Kunden.',[
   'Die fehlende Zuschreibung führt zur Prüfung von I(C): Was wird als eigene Leistung dargestellt?',
   'Die fehlende sachliche Prüfung führt zu V(A): Besteht eine tragfähige Grundlage?',
   'Die selektive Verteilung führt zu III(B): Werden betroffene Kunden fair behandelt? Dafür ist der konkrete Empfängerkreis weiter zu betrachten.'
  ],'Eine Tätigkeit kann mehreren Standards zugleich unterliegen. Das Finden eines passenden Standards beendet die Analyse nicht.')
 ]),
 S('substandards','3. Verwandte Pflichten präzise unterscheiden','c',[
  T(['Verwechslung','Entscheidende Frage'],[
   ['I(B) und VI(A)','Wird Unabhängigkeit tatsächlich durch einen unzulässigen Vorteil gefährdet, oder muss eine relevante Beziehung vermieden/offengelegt werden? Offenlegung erlaubt nicht jeden Vorteil.'],
   ['III(B) und III(C)','Geht es um faire Behandlung mehrerer Kunden oder um die Eignung für einen bestimmten Kunden bzw. ein Mandat?'],
   ['III(D) und V(B)','Geht es speziell um die wahrheitsgemäße Darstellung von Leistung oder um Methoden, Kosten, Risiken und sonstige Anlagekommunikation?'],
   ['IV(B) und VI(C)','Geht es um vorherige Zustimmung zu konfliktträchtiger Zusatzvergütung oder um Transparenz über einen Vermittlungsvorteil?'],
   ['II(A) und VI(B)','Wird wesentliche nicht öffentliche Information verwendet oder das Wissen über einen bevorstehenden Kundenauftrag zum Eigenvorteil genutzt?'],
   ['IV(C) und V(A)','Geht es um angemessene Aufsicht über andere oder die tragfähige Grundlage der eigenen Anlageanalyse?']
  ],'Eigene Abgrenzungsfragen; beide Standards eines Paares können im selben Sachverhalt relevant sein.'),
  'Die Formulierung einer Pflicht ist wichtig. „Must“ bezeichnet eine verbindliche Anforderung; eine empfohlene Compliance-Praxis beschreibt eine mögliche angemessene Umsetzung. Das Fehlen genau einer empfohlenen organisatorischen Form beweist nicht automatisch einen Verstoß, wenn die Pflicht anders wirksam erfüllt wird.'
 ]),
 S('conduct-program','4. Zuständigkeiten im Professional Conduct Program','a',[
  'Das Board of Governors trägt die Aufsicht und Verantwortung für die Durchsetzung. Professional-Conduct-Mitarbeitende untersuchen mögliche Verstöße. Das Disciplinary Review Committee (DRC), ein ehrenamtliches Gremium von Charterholdern, wirkt durch Prüfungsgremien an Beurteilung und Sanktionen mit. Bylaws und Rules of Procedure bilden den Verfahrensrahmen.',
  T(['Rolle','Funktion im vereinfachten Lernmodell'],[
   ['Board of Governors','Aufsicht und übergeordnete Verantwortung.'],
   ['Professional Conduct staff','Sachverhalte untersuchen, Informationen einholen und Vorwürfe bearbeiten.'],
   ['Disciplinary Review Committee','Peer Review, Beurteilung in zuständigen Panels und Beteiligung an Sanktionen.'],
   ['Betroffene Person','Erklärung und Stellungnahme im vorgesehenen Verfahren; wahrheitsgemäße Mitwirkung.']
  ],'Die Übersicht erklärt Zuständigkeiten, nicht sämtliche formalen Schritte eines konkreten Verfahrens.'),
  'Eine Untersuchung kann unter anderem durch eigene Angaben, Beschwerden, öffentliche Informationen oder Hinweise aus Prüfungsaufsicht und Auswertung ausgelöst werden. Ein Verdacht ist dabei noch keine abschließend festgestellte Verletzung.'
 ]),
 S('process','5. Von einem Hinweis zur begründeten Entscheidung','a',[
  'Im Lernmodell folgt auf einen Hinweis die Untersuchung, etwa anhand von Stellungnahmen, Gesprächen und Unterlagen. Danach sind Einstellung ohne Sanktion, ein warnender Hinweis oder weitere disziplinarische Schritte möglich. Bei bestrittenen Vorwürfen und vorgeschlagenen Sanktionen erfolgt die Beurteilung durch ein zuständiges DRC-Panel; auch vereinbarte Ergebnisse werden auf Angemessenheit geprüft.',
  X('Beschwerde und Beweis auseinanderhalten','Ein Kunde behauptet, seine Order sei zugunsten eines bevorzugten Kontos zurückgestellt worden. Die ursprünglichen Orders, Zeitstempel und Zuteilungen sind vorhanden.',[
   'Die Beschwerde liefert einen Anlass zur Prüfung. Sie ist nicht selbst der vollständige Nachweis der behaupteten Handlung.',
   'Die Unterlagen ermöglichen einen Vergleich von Regel, Reihenfolge und tatsächlicher Ausführung. Die betroffene Person erhält im vorgesehenen Verfahren Gelegenheit zur Erklärung.',
   'Erst die bewerteten Tatsachen tragen eine Feststellung. Eine plausible alternative Erklärung muss anhand des Sachverhalts beurteilt werden, statt sie bloß zu unterstellen.'
  ],'Durchsetzung braucht sowohl wirksame Untersuchung als auch eine begründete Bewertung. Beschwerde, Vorwurf und festgestellter Verstoß sind verschiedene Stufen.'),
  'Die aktuellen Verfahrensregeln unterscheiden insbesondere berufliche und prüfungsbezogene Verfahren. Für konkrete Fristen und Verfahrensrechte ist die jeweils einschlägige offizielle Fassung maßgeblich; die Lernübersicht ersetzt sie nicht.'
 ]),
 S('sanctions','6. Konsequenzen und persönliche Verantwortlichkeit','a c',[
  'Berufsrechtliche Konsequenzen können öffentliche Rüge, zeitweilige Suspendierung oder Entzug von Mitgliedschaft und Bezeichnungsrecht umfassen. Bei Kandidaten kommen Suspendierung oder Ausschluss von der Programmteilnahme in Betracht. Ein solches Verbandsverfahren ist von staatlicher Strafverfolgung oder gerichtlichem Schadenersatz zu unterscheiden.',
  X('Keine Strafanzeige, trotzdem eine Berufsfrage','Ein Mitglied macht im Research eine wissentlich falsche Leistungsangabe. Es liegt keine strafrechtliche Verurteilung vor. Die Person meint deshalb, eine berufliche Prüfung sei ausgeschlossen.',[
   'Eine Berufsregel kann Anforderungen stellen, deren Durchsetzung keine vorherige strafrechtliche Verurteilung voraussetzt.',
   'Umgekehrt darf das Verbandsverfahren nicht einfach als staatliches Strafurteil dargestellt werden. Zuständigkeit und Folgen sind verschieden.',
   'Die tatsächliche Handlung wird nach den einschlägigen Regeln und Beweisen beurteilt. Der Status als angestellte Person beseitigt die eigene Verantwortung nicht.'
  ],'Persönliche Verantwortung folgt aus den einschlägigen Verpflichtungen. Andere Verfahren können daneben bestehen, sind aber nicht identisch.'),
  'Für die Prüfung solltest du erklären können, wer untersucht, wer über bestrittene Vorwürfe befindet und welche Arten von Folgen möglich sind. Das Auswendiglernen einzelner Fristen ohne Kenntnis der aktuellen Verfahrensfassung hilft dabei wenig.'
 ])],sources:[
 {title:'CFA Institute: aktueller Code und Standards',url:'https://www.cfainstitute.org/standards/professionals/code-ethics-standards'},
 {title:'CFA Institute: Code of Ethics, Fassung 2024',url:'https://www.cfainstitute.org/sites/default/files/-/media/documents/ethics-in-practice/code_of_ethics_and_standards_of_professional_conduct_2024.pdf'},
 {title:'CFA Institute: Standards of Practice Handbook, Vorwort',url:'https://www.cfainstitute.org/sites/default/files/-/media/documents/code/code-ethics-standards/standards-practice-handbook-12th-edition.pdf'},
 {title:'CFA Institute: Professional Conduct',url:'https://www.cfainstitute.org/standards/professionals/conduct'},
 {title:'CFA Institute: aktuelle Rules of Procedure',url:'https://www.cfainstitute.org/standards/professionals/conduct/rules-procedure'}
 ],review:{status:'draft',date:'2026-09-17',note:'Eigene Strukturübersicht und Fallunterscheidungen; 6 Kodexkomponenten, 7 Standards und 23 Unterstandards.'}};
