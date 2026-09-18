const {T,X,S}=require('../author.cjs');
module.exports={id:'standard-iv',intro:[
 'Standard IV behandelt die Beziehung zum Arbeitgeber: loyale Nutzung der eigenen Arbeitsleistung, transparente Zusatzvergütung und angemessene Aufsicht. Diese Pflichten sollen verhindern, dass Beschäftigte heimlich Firmenressourcen oder Kundenbeziehungen für eigene Zwecke verwenden oder dass eine Organisation Verantwortung nur auf dem Papier verteilt.',
 'Die Arbeitgeberpflicht steht im Zusammenhang mit Kundeninteressen und geltenden Regeln. Sie rechtfertigt keine Mitarbeit an unzulässigen Handlungen. Zugleich ist sie keine unbegrenzte Verpflichtung, jede private oder familiäre Entscheidung den Interessen des Unternehmens unterzuordnen.'
],sections:[
 S('loyalty','1. IV(A): Arbeitsleistung, Informationen und Chancen','a c',[
  'Loyalty verlangt in beruflichen Angelegenheiten, den Arbeitgeber nicht um die zugesagte Arbeitsleistung, vertrauliche Informationen, Eigentum oder Geschäftschancen zu bringen. Ein konkurrierendes Nebengeschäft während bestehender Beschäftigung benötigt entsprechende Zustimmung. Die Erlaubnis muss die tatsächliche Tätigkeit, ihren Umfang und ihre Vergütung erfassen; eine vage Information über „private Projekte“ reicht dafür nicht.',
  X('Eine Anfrage landet im privaten Unternehmen','Ein Analyst erhält über die Firmenadresse eine Anfrage für ein Bewertungsmandat. Er leitet sie ohne Genehmigung an seine private Beratung um und nutzt die Datenbank seines Arbeitgebers für das Angebot.',[
   'Die Anfrage wurde an die Firma gerichtet. Ihr heimliches Umlenken eignet eine Geschäftschance an; die Datennutzung fügt die nicht genehmigte Verwendung von Firmenressourcen hinzu.',
   'Dass der Analyst die spätere Arbeit abends erledigen möchte, beantwortet diese beiden Fragen nicht. Zeit außerhalb des Büros macht weder die Chance noch die Daten automatisch zu Privateigentum.',
   'Ein regelkonformer Ablauf müsste den Konflikt offenlegen und vor konkurrierender Tätigkeit eine ausreichende Erlaubnis einholen. Gegebenenfalls sind auch Kundeninteressen und Datenschutz zu prüfen.'
  ],'Unterscheide Ort und Uhrzeit der Arbeit vom wirtschaftlichen Eigentum an Ressourcen und Chancen.'),
  'Spezialisierte Erfahrung und allgemeine Fähigkeiten bleiben bei einem Stellenwechsel nutzbar. Vertrauliche Dateien werden dadurch nicht frei verfügbar. Auch ein eigener Laptop kann Arbeitgeberunterlagen enthalten; der Speicherort entscheidet nicht über deren Eigentum.'
 ]),
 S('leaving','2. Den Stellenwechsel als zeitliche Abfolge prüfen','a c',[
  'Die Kündigung beendet die Loyalitätspflicht nicht automatisch am selben Tag. Solange das Beschäftigungsverhältnis fortbesteht, sind etwaige Kündigungsfristen und die verbleibenden Aufgaben zu beachten. Vorbereitungen für ein neues Unternehmen können zulässig sein, sofern sie keine unzulässige Kundenwerbung, konkurrierende Leistung oder Schädigung des bisherigen Arbeitgebers umfassen.',
  T(['Handlung','Entscheidende Frage'],[
   ['Privat Büroräume für eine künftige Firma suchen','Ist dies eine bloße Vorbereitung ohne Schädigung oder Ressourcennutzung?'],
   ['Während laufender Beschäftigung neue Mandate bei bisherigen Kunden anwerben','Liegt die notwendige Erlaubnis vor, oder wird bereits konkurrierend geworben?'],
   ['Kundendateien auf ein privates Gerät kopieren','Besteht eine ausdrückliche Berechtigung, diese Firmenunterlagen mitzunehmen?'],
   ['Nach dem Ausscheiden allgemeine Berufserfahrung nutzen','Werden nur Fähigkeiten genutzt oder tatsächlich vertrauliche Informationen übernommen?']
  ],'Die gleiche Absicht „ich wechsle die Firma“ erlaubt nicht jede vorbereitende Handlung.'),
  X('Zwei Schritte, zwei unterschiedliche Bewertungen','Eine Portfoliomanagerin kündigt zum Monatsende. Am Wochenende reserviert sie privat eine Domain für die neue Beratung. Am Montag verschickt sie ohne Erlaubnis über den bisherigen Kundenverteiler ein Angebot mit günstigeren Gebühren bei der neuen Firma.',[
   'Die Domainreservierung kann eine zulässige Vorbereitung sein. Sie nimmt noch kein Mandat an und verwendet nach den Angaben keine Firmenressourcen.',
   'Der Werbeversand erfolgt dagegen während fortbestehender Beschäftigung, nutzt die Kundenliste und fördert ein konkurrierendes Geschäft. Die bereits ausgesprochene Kündigung beseitigt diese Konflikte nicht.',
   'Ein neutraler, erlaubter Hinweis auf den bevorstehenden Weggang ist vom Werben um einen Wechsel zu unterscheiden. Inhalt und Wirkung der Nachricht zählen, nicht nur die Überschrift „Information“.'
  ],'Bei Zeitabläufen markiere den tatsächlichen Endpunkt des Beschäftigungsverhältnisses und beurteile jede Handlung an ihrem Zeitpunkt.'),
  'Auch nach dem Ausscheiden bleiben wirksame Vertraulichkeits-, Vertrags- und Rechtspflichten relevant. Der Arbeitgeber besitzt nicht pauschal alle Erinnerungen an berufliche Erfahrungen; ein Recht, Dateien oder Forschungsarchive ohne Erlaubnis zu übernehmen, entsteht daraus aber ebenfalls nicht.'
 ]),
 S('compensation','3. IV(B): Zusatzvergütung vor der Annahme klären','a c',[
  'Additional Compensation Arrangements betrifft Geld, Sachleistungen und andere Vorteile, die mit Arbeitgeberinteressen konkurrieren oder vernünftigerweise einen Konflikt erzeugen können. Vor Annahme ist schriftliche Zustimmung aller betroffenen Parteien erforderlich. Dokumentierbare elektronische Zustimmung kann genügen. Mitteilung, Schweigen oder bloß mündliches Einverständnis sind nicht automatisch die geforderte schriftliche Zustimmung.',
  'Der Arbeitgeber braucht die wesentlichen Bedingungen: Art und ungefähre Höhe des Vorteils, Laufzeit, Leistungspflicht und erfolgsabhängige Auslöser. Nur so kann er beurteilen, ob ein Mitarbeiter einzelne Mandate bevorzugen, Risiken erhöhen oder Arbeitszeit anders verteilen könnte. Ein Vorteil muss nicht bar ausgezahlt werden, um solche Anreize zu setzen.',
  X('Ein zusätzlicher Bonus verändert die Anreize','Ein institutioneller Kunde bietet einer Managerin vor Beginn des nächsten Jahres persönlich 8.000 an, falls sein Mandat eine vereinbarte Schwelle überschreitet. Sie betreut auch andere Mandate mit denselben verfügbaren Anlagechancen.',[
   'Der künftige persönliche Bonus verändert den relativen Anreiz, Zeit und knappe Chancen auf dieses Konto zu verteilen. Dass der Kunde bereits die reguläre Firmengebühr zahlt, beseitigt den zusätzlichen Konflikt nicht.',
   'Die Managerin legt die vollständige geplante Vereinbarung offen und holt vor Annahme die dokumentierte Zustimmung der betroffenen Parteien ein. Eine E-Mail mit überprüfbarer Zustimmung kann dafür geeignet sein.',
   'Erst nach Ablauf des Jahres über einen bereits vereinbarten Bonus zu informieren, lässt dem Arbeitgeber keine vorgängige Entscheidungsmöglichkeit. Der Zeitpunkt gehört deshalb zum Tatbestand.'
  ],'Bei einer Frage zu IV(B) suche nach vier Angaben: zusätzliche Leistung, möglicher Konflikt, vorherige Zustimmung und dokumentierbare Form.')
 ]),
 S('gift-boundaries','4. Offenlegung und Zustimmung sind nicht austauschbar','a c',[
  T(['Situation','Prüfschritt','Typische Fehlannahme'],[
   ['Unerwartete Anerkennung für bereits erbrachte Kundenleistung','I(B), Arbeitgeberoffenlegung und mögliche Beeinträchtigung prüfen','Jede nachträgliche Aufmerksamkeit sei eine vorherige Bonusvereinbarung.'],
   ['Vorher vereinbarter Vorteil für künftige Ergebnisse','IV(B), schriftliche Zustimmung aller betroffenen Parteien vor Annahme','Eine spätere Mitteilung reiche.'],
   ['Emittent bezahlt eine bestimmte Empfehlung','I(B), unabhängiges Urteil kann unzulässig beeinträchtigt werden','Jede Zustimmung heile eine ergebnisgekaufte Empfehlung.'],
   ['Vergütete Nebentätigkeit im Geschäftsfeld des Arbeitgebers','IV(A), IV(B) und mögliche weitere Konflikte prüfen','Arbeit am Wochenende sei automatisch frei von Arbeitgeberpflichten.']
  ],'Die Standards können nebeneinander gelten. Eine erfüllte Formalität hebt andere materielle Pflichten nicht auf.'),
  'Die wirksame Zustimmung zu einer Zusatzvergütung erlaubt beispielsweise keine unfaire Zuteilung von Anlagen. Fair Dealing und Suitability bleiben zu erfüllen. Eine gute Falllösung arbeitet deshalb erst die fehlende Zustimmung heraus und prüft anschließend, ob die geplante Handlung trotz Zustimmung anderweitig unzulässig wäre.'
 ]),
 S('supervision','5. IV(C): Aufsicht ist ein funktionierender Prozess','a c',[
  'Responsibilities of Supervisors verlangt angemessene Bemühungen, Regelverstöße im eigenen Aufsichtsbereich zu verhindern und aufzudecken. Die Pflicht hängt von tatsächlicher Verantwortung und Einfluss ab; sie umfasst auch unterstellte Personen ohne CFA-Mitgliedschaft. Aufgaben dürfen delegiert werden, doch die verantwortliche Person muss geeignete Delegation, Anleitung und Überwachung sicherstellen.',
  'Ein wirksames System verbindet klare Zuständigkeiten, verständliche Regeln, Schulung, Prüfungen und Reaktion auf Auffälligkeiten. Fehlende oder unzureichende Verfahren müssen nach oben eskaliert werden. Wenn angemessene Aufsicht mangels eines brauchbaren Systems nicht möglich ist, sollte die Verantwortung bis zur Abhilfe nicht übernommen werden.',
  X('Warnsignale werden an eine andere Stelle weitergereicht','Ein Teamleiter erhält wiederholt Hinweise auf ungewöhnliche nachträgliche Handelszuordnungen. Er schickt die erste Nachricht an Compliance, kontrolliert aber weder die Bearbeitung noch die fortgesetzten Zuordnungen.',[
   'Weiterleitung ist ein Anfang, aber keine vollständige Bearbeitung des erkannten Risikos. Wiederkehrende Hinweise verlangen angemessene Untersuchung und Maßnahmen gegen weitere mögliche Verstöße.',
   'Der Leiter sichert relevante Daten, klärt die Ursache, koordiniert die Untersuchung und veranlasst je nach Befugnis verstärkte Überwachung oder vorläufige Begrenzung problematischer Aktivitäten.',
   'Ein pauschales Versprechen des Mitarbeiters, künftig vorsichtiger zu sein, liefert noch keinen Nachweis, dass die Ursache behoben wurde.'
  ],'Prüfe bei Aufsichtsfällen nicht nur, ob eine Regel existiert, sondern ob Hinweise tatsächlich in Untersuchung und wirksame Abhilfe münden.'),
  'Ein versteckter Einzelverstoß eines Mitarbeiters beweist umgekehrt nicht automatisch, dass jede Aufsicht unzureichend war. Maßstab sind die unter den Umständen angemessenen Bemühungen. Bekannte Warnzeichen zu ignorieren ist jedoch mit einem ernsthaft betriebenen Kontrollsystem schwer vereinbar.'
 ]),
 S('controls','6. Ein prüfbarer Ablauf für Arbeitgeberkonflikte','b',[
  T(['Phase','Dokument oder Kontrolle','Begründung'],[
   ['Vor Nebentätigkeit','Beschreibung von Leistung, Zeit, Ressourcen und Vergütung; zuständige Genehmigung','Der Arbeitgeber kann Umfang und Interessenkonflikt vor Beginn beurteilen.'],
   ['Bei Zusatzvergütung','Bestätigte Bedingungen und schriftliche Zustimmungen','Die tatsächlich akzeptierte Vereinbarung bleibt überprüfbar.'],
   ['Während Betreuung','Kontrolle von Zuteilungen, Zeitaufwand und Änderungen','Ein genehmigter Rahmen kann später verändert oder überschritten werden.'],
   ['Bei Personalwechsel','Geordnete Kundenkommunikation, Rückgabe von Daten, Berechtigungsentzug','Vertrauliche Ressourcen werden geschützt und Zuständigkeiten bleiben klar.'],
   ['Bei Warnsignalen','Untersuchung, Sicherung von Belegen, risikogerechte Einschränkung und Nachkontrolle','Die bekannte Gefahr wird bearbeitet statt nur weitergeleitet.']
  ],'Eigene Umsetzungshilfe; konkrete Prozesse müssen zur Organisation und zum anwendbaren Recht passen.'),
  'Eine Genehmigung sollte angeben, wer wozu zugestimmt hat und für welchen Zeitraum. Ändert sich etwa eine Nebenberatung in ein erfolgsabhängiges Vermögensverwaltungsmandat, kann die ursprüngliche Beschreibung unzureichend werden. Die Kontrolle muss deshalb auch Änderungen erfassen.',
  'Die Verbindung zu Standard V(C) liegt in der Nachweisbarkeit: Eine Zustimmung, die nicht auffindbar ist, oder eine Untersuchung ohne Belege lässt sich später kaum beurteilen. Die Verbindung zu Standard III liegt im Zweck: Arbeitgeberinteressen dürfen niemals als Vorwand dienen, Kunden unfair zu behandeln.'
 ])],
 sources:['a','b','c'].map((x,i)=>({title:'CFA Institute: Standard IV('+String.fromCharCode(65+i)+'), Guidance (April 2024)',url:'https://www.cfainstitute.org/standards/professionals/code-ethics-standards/standards-of-practice-iv-'+x})),
 review:{status:'draft',date:'2026-09-17',note:'Eigene Fälle; vorherige schriftliche Zustimmung und Grenzen der Arbeitgeberloyalität präzisiert.'}};
