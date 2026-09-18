const {T,X,S}=require('../author.cjs');
module.exports={id:'standard-v',intro:[
 'Standard V beschreibt die Kette von einer tragfähigen Untersuchung über verständliche Kommunikation bis zur später überprüfbaren Dokumentation. Ein Ergebnis muss fachlich begründet sein, richtig erklärt werden und anhand der damaligen Informationen nachvollziehbar bleiben. Keine der drei Stufen ersetzt die andere.',
 'Die Logik gilt für Aktienberichte, automatisierte Modelle, Managerauswahl und laufende Portfolioentscheidungen. Sie gilt auch dann, wenn die Empfehlung sehr kurz ist oder nach sorgfältiger Prüfung gerade keine Transaktion vorgenommen wird.'
],sections:[
 S('basis','1. V(A): Eine Empfehlung braucht eine tragfähige Grundlage','a c',[
  'Diligence and Reasonable Basis verlangt sorgfältige, unabhängige und angemessen gründliche Analyse sowie eine durch geeignete Untersuchung gestützte Grundlage. Der nötige Umfang hängt von Produkt, Risiko, Daten und Rolle ab. Eine externe Empfehlung darf verwendet werden, wenn ihre Verlässlichkeit angemessen beurteilt wurde; bloßes Vertrauen in Namen oder Bekanntheit reicht nicht.',
  'Prozessqualität ist vor dem Ergebnis zu beurteilen. Ein Verlust beweist nicht allein einen Verstoß; ein Gewinn beweist nicht allein Sorgfalt. Neue wesentliche Informationen können eine erneute Bewertung erforderlich machen. Bei Teamarbeit muss nicht jede Person dieselbe Meinung vertreten, solange die gemeinsame Grundlage vertretbar ist; fehlt diese, darf der Bericht nicht unbesehen mitgetragen werden.',
  X('Ein verbreitetes Modell ohne Prüfung übernehmen','Ein Fonds will ein externes Ausfallmodell einsetzen. Der Anbieter zeigt eine hohe Trefferquote, nennt aber weder den getesteten Zeitraum noch die Datenabgrenzung. Der Fonds würde damit neue Kreditrisiken eingehen.',[
   'Die Trefferquote ist erst nach Kenntnis von Stichprobe, Definition und Testsituation interpretierbar. Die Zahl könnte etwa durch eine geringe Ausfallhäufigkeit oder eine nachträglich gewählte Stichprobe gut aussehen.',
   'Eine angemessene Untersuchung prüft Daten, Modellannahmen, Grenzen und Eignung für den eigenen Einsatz. Sie muss zum übernommenen Risiko passen. Nicht jeder Nutzer muss den gesamten Quellcode neu schreiben, aber relevante Schwächen dürfen nicht wegen des Produktnamens ignoriert werden.',
   'Solange die notwendigen Nachweise fehlen, ist die angegebene Erfolgszahl keine ausreichende Grundlage für den geplanten Einsatz.'
  ],'Die Brücke zur Statistik ist direkt: Ein Modellgütemaß ohne Daten- und Testkontext ist keine vollständige Evidenz.')
 ]),
 S('research-process','2. Von der Frage zur nachvollziehbaren Entscheidung','b',[
  T(['Schritt','Konkrete Prüfung','Typischer Fehler'],[
   ['Auftrag bestimmen','Welche Entscheidung soll mit welchem Risiko getroffen werden?','Daten sammeln, ohne die Entscheidungsfrage festzulegen.'],
   ['Daten beurteilen','Herkunft, Aktualität, Abdeckung, Verzerrungen und Konsistenz','Eine große Datenmenge mit hoher Datenqualität verwechseln.'],
   ['Modell verstehen','Annahmen, Eingaben, Sensitivitäten und relevante Stressfälle','Ein günstiges Basisszenario als vollständige Untersuchung behandeln.'],
   ['Alternative Erklärungen prüfen','Widersprechende Evidenz und geeignete Vergleichsmodelle','Nur Informationen auswählen, die die erste Meinung bestätigen.'],
   ['Entscheidung begründen','Warum folgt die Handlung aus den Befunden und dem Auftrag?','Eine starke Überzeugung als Beleg ansehen.'],
   ['Aktualisieren','Welche neue Information würde die Empfehlung ändern?','Ein altes Ergebnis trotz veränderter Voraussetzungen weiterreichen.']
  ],'Eigener Arbeitsablauf zur Umsetzung von Sorgfalt; Tiefe und Dokumentation richten sich nach der Aufgabe.'),
  'Bei der Auswahl externer Manager gehören etwa Prozess, Personal, Risiko, Historie und organisatorische Fähigkeiten zur Prüfung. Bei einem Einzelwert können Bilanz, Branche, Bewertung und Risiken entscheidend sein. Eine identische Checkliste für jede Aufgabe würde die notwendige Rollenbezogenheit verlieren.',
  'Kontrollen sollen nicht nur das Vorhandensein von Text prüfen. Eine lange Researchdatei kann wesentliche Risiken auslassen; eine kurze, gut belegte Entscheidung kann in einem einfachen Fall ausreichend sein. Der Zusammenhang zwischen Belegen und Entscheidung ist ausschlaggebend.'
 ]),
 S('communication','3. V(B): Der Empfänger muss Leistung, Methode und Kosten verstehen','a c',[
  'Communication with Clients and Prospective Clients umfasst Art der angebotenen Dienstleistungen und ihre Kosten, Grundzüge des Anlageprozesses, wesentliche Änderungen, bedeutsame Risiken und Grenzen sowie die wichtigen Entscheidungsfaktoren. Tatsachen und Meinungen müssen unterscheidbar sein. Diese Pflicht betrifft auch Gespräche, kurze digitale Nachrichten und soziale Medien.',
  'Ein Kunde muss erkennen können, was die Dienstleistung umfasst und was sie nicht umfasst. Bei einer verkürzten Empfehlung sollte deutlich sein, dass weitere Analysen verfügbar sind. Ein allgemein gehaltener Risikohinweis ersetzt keine im konkreten Prozess besonders bedeutende Einschränkung. Die Kommunikation soll eine informierte Entscheidung ermöglichen.',
  X('Der Dienstleistungsumfang wird falsch verstanden','Eine digitale Beratung nennt eine Verwaltungsgebühr, verschweigt aber, dass sie nur ein Standardportfolio auswählt und keine individuelle Steuerplanung erbringt. Die Werbung legt eine vollständige persönliche Finanzplanung nahe.',[
   'Die Kunden könnten aufgrund einer falschen Vorstellung über den Leistungsumfang einen Vertrag schließen. Die Gebühr allein beantwortet nicht, welche Leistungen sie dafür erhalten.',
   'Die Beschreibung muss den tatsächlichen Umfang und relevante Kosten nachvollziehbar machen. Auch Grenzen der Individualisierung gehören dazu, wenn sie für die Entscheidung wesentlich sind.',
   'Ein späterer Verweis auf allgemeine Geschäftsbedingungen löst nicht automatisch eine zuvor irreführende oder unzureichende Erklärung.'
  ],'Transparenz bedeutet, dem Empfänger die entscheidungsrelevante Bedeutung einer Leistung zu vermitteln.')
 ]),
 S('fact-opinion','4. Fakten, Schätzungen und Änderungen sauber trennen','a c',[
  X('Eine Wachstumsannahme klingt wie eine feststehende Tatsache','Ein Aktienbericht enthält geprüften Vorjahresumsatz und daneben die Aussage: „Der Umsatz wird in den nächsten fünf Jahren jährlich um 12 % steigen.“ Die 12 % sind die eigene Prognose des Analysten.',[
   'Der historische Umsatz und die Wachstumsprognose haben unterschiedliche Erkenntnisgrundlagen. Der erste ist ein berichteter Vergangenheitswert, die zweite eine bedingte Erwartung.',
   'Die Prognose muss als solche erkennbar sein und durch relevante Annahmen und Risiken eingeordnet werden. Eine genaue Dezimalzahl verleiht ihr keine Gewissheit.',
   'Wenn der Wert überwiegend auf der Wachstumsannahme beruht, ist deren Sensitivität besonders wichtig. Eine bloße Kaufempfehlung ohne diese entscheidende Einschränkung kann beim Empfänger ein falsches Bild der Sicherheit erzeugen.'
  ],'Rechengenauigkeit und Prognosesicherheit sind verschiedene Eigenschaften.'),
  'Eine wesentliche Änderung des Prozesses muss zeitnah erläutert werden. Wechselt ein bisheriger Ansatz beispielsweise von liquiden großen Aktien zu schwer handelbaren kleinen Titeln, ändern sich nicht nur mögliche Renditen, sondern auch Ausführung und Liquiditätsrisiko. Die Bezeichnung des Fonds unverändert zu lassen ist keine ausreichende Information.',
  'Nicht jede kleinere Parameteranpassung ist eine vollständige Strategieveränderung. Entscheidend ist, ob die Änderung den beschriebenen Prozess wesentlich beeinflusst. Die Fallfrage liefert dafür häufig Informationen über Anlageuniversum, Hebel, Liquidität oder neue Datenmethoden.'
 ]),
 S('records','5. V(C): Die damalige Grundlage rekonstruierbar halten','a c',[
  'Record Retention verlangt geeignete Unterlagen zu Analysen, Empfehlungen, Handlungen und relevanter Kundenkommunikation. Datenformat und Kanal ändern diese Pflicht nicht. Erfasst werden auch begründete Entscheidungen, eine Position unverändert zu lassen. Bei Modellen können damalige Eingaben, Versionen, Ergebnisse und Annahmen wesentlich sein.',
  'Zuerst gelten einschlägige gesetzliche und betriebliche Aufbewahrungsvorgaben. Fehlen solche Vorgaben, empfiehlt CFA Institute mindestens sieben Jahre. Diese Empfehlung ist keine universelle starre Siebenjahresfrist, die längere Regeln verkürzt oder jede kürzere wirksame Vorgabe automatisch überschreibt. Beruflich für den Arbeitgeber erstellte Unterlagen gehören grundsätzlich der Firma.',
  X('Die Empfehlung bleibt, die Begründung verschwindet','Ein Team archiviert nur die letzte Fassung seines Bewertungsmodells. Nach einem Jahr sind frühere Annahmen überschrieben. Ein Kunde fragt nach der Grundlage einer damaligen Halteempfehlung.',[
   'Das aktuelle Modell zeigt möglicherweise eine andere Datenlage. Es beweist nicht, welche Informationen und Annahmen die frühere Entscheidung stützten.',
   'Ein geeigneter Nachweis umfasst den damals relevanten Stand und die Entscheidungsbegründung. Auch eine Halteentscheidung benötigt eine nachvollziehbare Grundlage; der fehlende Handel macht sie nicht bedeutungslos.',
   'Versionierung, Datensicherung und auffindbare Freigaben verbinden hier Modellpflege mit der Aufbewahrungspflicht. Ein Screenshot des heutigen Ergebnisses ersetzt nicht die früheren Eingaben.'
  ],'Die Dokumentation soll damalige Entscheidungen erklären, ohne nachträglich Wissen von heute in die Vergangenheit einzubauen.')
 ]),
 S('retention-controls','6. Aufbewahrungsregeln als Entscheidungssystem','b',[
  T(['Prüffrage','Folge für den Prozess'],[
   ['Welche gesetzlichen Fristen und betrieblichen Regeln gelten?','Anwendbare Anforderungen erfassen und einen passenden Aufbewahrungsplan festlegen.'],
   ['Welche Unterlagen erklären die konkrete Entscheidung?','Daten, Versionen, wesentliche Kommunikation und Begründung passend zur Rolle sichern.'],
   ['Welcher Kommunikationskanal wird verwendet?','Auch geschäftlich relevante digitale Nachrichten angemessen archivieren.'],
   ['Sind die Unterlagen auffindbar und unverändert nachvollziehbar?','Zugriffsrechte, Backups, Versionierung und Wiederauffindbarkeit testen.'],
   ['Wechselt ein Mitarbeiter den Arbeitgeber?','Firmenunterlagen nicht ohne ausdrückliche Erlaubnis mitnehmen; neue Arbeit auf zulässige Nachweise stützen.']
  ],'Eigene Prozessübersicht: Aufbewahrung ist mehr als eine Zahl von Jahren.'),
  'Eine rechtliche Mindestfrist von beispielsweise fünf Jahren und eine betriebliche Vorgabe von acht Jahren dürfen nicht mechanisch durch „immer sieben“ ersetzt werden. In diesem einfachen Fall erfüllt eine Aufbewahrung von acht Jahren beide genannten Anforderungen. Fehlen dagegen beide Arten von Vorgaben, greift die genannte CFA-Empfehlung als Orientierung.',
  'Eine nachträglich frei erfundene Gesprächsnotiz stellt keine Rekonstruktion dar. Wenn Unterlagen fehlen, muss dies ehrlich behandelt werden; neue Analysen benötigen eine neue zulässige Grundlage. Der Wunsch nach einem vollständigen Archiv rechtfertigt keine falschen Belege.'
 ]),
 S('linked-case','7. Die drei Pflichten an einem Entscheidungsweg prüfen','a c',[
  X('Ein neues Liquiditätsmodell wird eingeführt','Ein Vermögensverwalter prüft ein neues Modell sorgfältig, übernimmt es anschließend in Kundenportfolios, informiert die Kunden aber nicht über eine wesentliche neue Liquiditätsbeschränkung. Die Modellstände werden vollständig gespeichert.',[
   'Die sorgfältige Untersuchung spricht für die analytische Grundlage nach V(A). Sie beantwortet noch nicht, ob der Kunde die neue Einschränkung verstanden hat.',
   'Die verschwiegene wesentliche Einschränkung betrifft V(B). Gute Analyse und vollständiges Archiv ersetzen die Kommunikation nicht.',
   'Die erhaltenen Modellstände helfen unter V(C), später nachzuvollziehen, was entschieden wurde. Sie beseitigen aber den Kommunikationsmangel nicht.'
  ],'Beurteile jede Stufe eigenständig: untersuchen, erklären, belegen. Ein erfüllter Teil kompensiert keinen anderen fehlenden Teil.'),
  'Die Verbindung zur Statistik, Bewertung und Risikomessung ist praktisch: Datenverzerrung kann die Grundlage schwächen, ein falsch als sicher dargestellter Erwartungswert die Kommunikation verfälschen und fehlende Modellversionen die spätere Prüfung verhindern. Ethics ist damit Teil des fachlichen Arbeitsprozesses.'
 ])],
 sources:['a','b','c'].map((x,i)=>({title:'CFA Institute: Standard V('+String.fromCharCode(65+i)+'), aktuelle Guidance',url:'https://www.cfainstitute.org/standards/professionals/code-ethics-standards/standards-of-practice-v-'+x})),
 review:{status:'draft',date:'2026-09-17',note:'Eigene Fälle; Kosteninformation und bedingte Siebenjahresempfehlung ausdrücklich abgegrenzt.'}};
