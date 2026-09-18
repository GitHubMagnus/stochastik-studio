const {T,X,S}=require('../author.cjs');
module.exports={id:'standard-ii',intro:[
 'Kapitalmärkte brauchen verlässliche Preise und Vertrauen in die Informationsverarbeitung. Research darf bessere Schlussfolgerungen hervorbringen als die Analyse anderer Marktteilnehmer. Es darf jedoch weder einen unzulässigen Informationsvorsprung aus wesentlichen nicht öffentlichen Tatsachen ausnutzen noch anderen Marktteilnehmern künstliche Signale vorspiegeln.',
 'Standard II trennt deshalb zwei Fragen: Auf welcher Informationsgrundlage wird gehandelt, und wie wird auf Marktpreise oder Handelsaktivität eingewirkt? Ein Fall kann beide Bereiche betreffen, muss es aber nicht. Eine korrekte Beurteilung benennt die konkrete Handlung und ihre Voraussetzungen.'
],sections:[
 S('material-public','1. II(A): Zwei Bedingungen gemeinsam prüfen','a c',[
  'Material Nonpublic Information ist zugleich wesentlich und nicht öffentlich. Wesentlichkeit hängt unter anderem von Bedeutung, Konkretheit und Verlässlichkeit für eine vernünftige Anlageentscheidung ab. Öffentlichkeit setzt eine angemessene allgemeine Verbreitung voraus; eine geschlossene Analystenrunde ist nicht automatisch öffentlich. Wer solche Informationen besitzt, darf sie nicht für Anlagehandlungen nutzen oder andere dazu veranlassen.',
  T(['Information','Wesentlich?','Öffentlich?','Prüfgedanke'],[
   ['Allgemein veröffentlichter, unerwartet hoher Auftragsverlust','Typischerweise ja','Nach angemessener allgemeiner Verbreitung ja','Hohe Bedeutung allein ist kein Verbot, veröffentlichte Daten zu analysieren.'],
   ['Vertrauliche, zuverlässige Bestätigung desselben Auftragsverlusts vor Veröffentlichung','Typischerweise ja','Nein','Beide Merkmale liegen gemeinsam vor.'],
   ['Private belanglose Einzelbeobachtung ohne entscheidenden Aussagewert','Für sich genommen nein','Nein','Nicht öffentliche Information ist nicht immer wesentliche Insiderinformation.'],
   ['Ungesichertes Gerücht unbekannter Herkunft','Muss nach konkretem Inhalt und Verlässlichkeit geprüft werden','Nicht allein aus dem Wort Gerücht ableitbar','Schlagwörter ersetzen keine Sachverhaltsprüfung.']
  ],'Eigene Vergleichsfälle. Die Beurteilung hängt von den tatsächlich gegebenen Umständen ab.'),
  'Verwende keine mechanische Prozentgrenze für Wesentlichkeit. Eine scheinbar kleine Veränderung kann etwa einen vertraglichen Schwellenwert auslösen und dadurch große Folgen haben. Ebenso kann eine überraschende Information über einen wesentlichen Prozess wichtiger sein als eine sehr genaue, aber nebensächliche Einzelzahl.',
  X('Die Information ist vielen Analysten bekannt, aber nicht dem Markt','Bei einem nicht öffentlichen Fachgespräch erfahren 40 ausgewählte Analysten, dass der einzige große Kreditgeber eines Unternehmens eine entscheidende Anschlussfinanzierung abgelehnt hat. Eine allgemeine Veröffentlichung steht noch aus.',[
   'Die Zahl der anwesenden Analysten ersetzt keine allgemeine Marktverfügbarkeit. Die Gruppe bleibt ausgewählt.',
   'Die verlässlich berichtete Ablehnung einer entscheidenden Finanzierung ist für die Anlageentscheidung wesentlich. Eine Veräußerung auf dieser Grundlage vor allgemeiner Verbreitung wäre nicht durch die Größe der Gesprächsrunde gerechtfertigt.',
   'Auch eine Empfehlung an andere, sofort zu verkaufen, nutzt den Informationsvorsprung. Das Verbot lässt sich nicht dadurch umgehen, dass der Analyst selbst keine Position hält.'
  ],'Getrennt prüfen: Wer kennt die Information, und wie könnte sie eine vernünftige Anlageentscheidung verändern?')
 ]),
 S('mosaic','2. Die Mosaic Theory schützt eigenständige Analyse','a c',[
  'Eine erhebliche eigene Schlussfolgerung aus öffentlichen und nicht wesentlichen nicht öffentlichen Bausteinen kann zulässig sein. Dies ist die Mosaic Theory. Sie verwandelt jedoch einen bereits wesentlichen vertraulichen Hinweis nicht dadurch in zulässiges Research, dass zusätzlich öffentliche Daten in dasselbe Modell eingefügt werden.',
  X('Erkenntnisgewinn durch Zusammenführen','Eine Analystin kombiniert öffentlich verfügbare Bauanträge, veröffentlichte Lieferzeiten und für sich genommen unwesentliche Beobachtungen eines kleinen Zulieferers. Sie leitet daraus eine bisher nicht breit diskutierte Kapazitätserweiterung ab. Kein Baustein enthält wesentliche nicht öffentliche Information.',[
   'Der Informationsgewinn entsteht aus der eigenen Analyse zulässiger Bausteine. Dass die fertige Schlussfolgerung bedeutend ist, macht ihre Herkunft nicht rückwirkend unzulässig.',
   'Die Analystin dokumentiert Quellen und Herleitung. Dadurch bleibt sichtbar, wie aus den einzelnen Beobachtungen die Folgerung entstanden ist.',
   'Der Gegenfall wäre eine vertrauliche Bestätigung des Vorstands, dass ein entscheidender Erwerb bereits unterschrieben wurde. Diese wesentliche Tatsache wird nicht durch das Hinzufügen öffentlich bekannter Branchenzahlen neutralisiert.'
  ],'Prüfe die Qualität der Bausteine und den Entstehungsweg der Erkenntnis, nicht nur die Wichtigkeit des fertigen Ergebnisses.'),
  'Ein exklusives selbst erarbeitetes Analyseergebnis muss nicht allein deswegen kostenlos der gesamten Öffentlichkeit zugänglich gemacht werden. Kunden dürfen für Researchleistung bezahlen. Davon zu unterscheiden sind die Pflichten zur fairen Verteilung von Empfehlungen und die Herkunft der verwendeten Informationen.'
 ]),
 S('receipt','3. Versehentlicher Zugang und zulässiger Zweck','a c',[
  'Der zufällige Erhalt einer Information ist nicht mit einer darauf gestützten Transaktion gleichzusetzen. Wichtig ist die Reaktion: keine unzulässige Nutzung, geeignete Compliance-Eskalation und Schutz vor unnötiger Weiterverbreitung. Eine legitime vertrauliche Due Diligence kann einen begrenzten geschäftlichen Zweck erlauben, ohne persönliche Wertpapiergeschäfte mit denselben Informationen zu gestatten.',
  X('Eine falsche Dateifreigabe','Eine Beraterin erhält versehentlich Zugang zu einer internen Datei mit einer zuverlässigen, erheblichen Ergebniswarnung eines börsennotierten Kunden. Ihr Privatdepot enthält dessen Aktien.',[
   'Der Empfang allein ist nicht die Anlagehandlung. Nun muss sie die erkannte Einschränkung beachten und den zuständigen Compliance-Weg nutzen.',
   'Ein schneller Verkauf zur „bloßen Vermeidung eines Verlusts“ wäre ebenfalls eine Verwendung der Information. Die wirtschaftliche Richtung Gewinn erzielen oder Verlust vermeiden ist für diese Abgrenzung nicht entscheidend.',
   'Ein Kauf eines Derivats oder ein Tipp an ein Familienmitglied wäre kein zulässiger Ersatz. Die Analyse muss die wirtschaftlich veranlasste Handlung erfassen, nicht nur den Namen des gehandelten Instruments.'
  ],'Die notwendige Reaktion richtet sich nach Zugang und Nutzung; eine persönliche gute Absicht beseitigt die Informationsbeschränkung nicht.'),
  'Eine Veröffentlichung durch den zuständigen Emittenten kann den Informationsstatus verändern. Es besteht aber kein allgemeines Recht, fremde vertrauliche Unterlagen eigenmächtig ins Internet zu stellen, um anschließend handeln zu können. Vertraulichkeit und ordnungsgemäße Veröffentlichung sind gemeinsam zu beachten.'
 ]),
 S('manipulation','4. II(B): Ein falsches Marktbild erzeugen','a c',[
  'Market Manipulation betrifft Praktiken, die Preise oder Handelsaktivität verzerren und Marktteilnehmer irreführen sollen. Dazu können bewusst falsche Informationen oder künstliche Handelsaktivität gehören. Eine echte, wirtschaftlich begründete große Transaktion ist nicht allein wegen ihrer Preiswirkung Manipulation. Absicht und Gestaltung der Handlung sind entscheidend.',
  T(['Vorgehen','Signal an andere','Entscheidende Abgrenzung'],[
   ['Bewusst erfundene Nachricht zur Nachfrage eines Emittenten','Scheinbar neue wirtschaftliche Information','Falscher Inhalt wird gezielt zur Marktbeeinflussung verbreitet.'],
   ['Abgesprochene Geschäfte ohne echten Wechsel des wirtschaftlichen Risikos','Scheinbar lebhafter echter Handel','Die Aktivität soll Nachfrage oder Liquidität vortäuschen.'],
   ['Orders, die nur als irreführendes Nachfragesignal dienen sollen','Scheinbar vorhandenes Kauf- oder Verkaufsinteresse','Die Absicht ist Täuschung statt eines ernsthaften Handelsinteresses.'],
   ['Großer echter Verkauf zur Finanzierung eines Mittelabflusses','Tatsächliches Verkaufsinteresse','Preiswirkung allein beweist keine manipulative Absicht.']
  ],'Eigene Kategorien zur Einordnung; die tatsächliche Markt- und Rechtsbeurteilung benötigt den konkreten Sachverhalt.'),
  X('Volumen wird zur Werbeaussage','Ein Anbieter lässt abgestimmte Transaktionen zwischen von ihm kontrollierten Konten durchführen, damit ein kaum genutztes Produkt im Handelsbericht lebhaft gehandelt erscheint. Anschließend wirbt er mit diesem künstlich erzeugten Interesse.',[
   'Die Information „hohes Handelsvolumen“ soll echte Nachfrage anzeigen, obwohl der beschriebene wirtschaftliche Anlass fehlt. Die Transaktionen dienen dem falschen Eindruck.',
   'Dass jede Buchung technisch ausgeführt wurde, beweist keine echte unabhängige Nachfrage. Ein korrekt aufgezeichneter Vorgang kann trotzdem ein irreführendes Marktbild erzeugen.',
   'Der Fall unterscheidet sich von einem transparenten, echten Liquiditätsbedarf mehrerer unabhängiger Anleger. Für die Beurteilung sind Koordination, Zweck und wirtschaftlicher Gehalt entscheidend.'
  ],'Marktintegrität betrifft nicht nur die Wahrheit einer Nachricht, sondern auch die Wahrheit des durch Handlungen erzeugten Signals.')
 ]),
 S('controls','5. Informations- und Handelskontrollen verbinden','b',[
  T(['Gefahr','Geeignete betriebliche Maßnahme','Zweck'],[
   ['Unbemerkter Zugang zu vertraulichen Informationen','Festgelegter Prozess für vertrauliche Mandate, Schulung und Zugriffsbeschränkung','Beschränkte Informationsbereiche früh erkennen.'],
   ['Unzulässige Verwendung nach einem Hinweis','Compliance-Eskalation, passende Handelsbeschränkung und Überwachung','Die erkannte Information darf keine unzulässige Anlagehandlung auslösen.'],
   ['Übertragung zwischen Geschäftseinheiten','Tatsächlich wirksame Informationsbarrieren und dokumentierter berechtigter Zugang','Information nur an die für den erlaubten Zweck erforderlichen Personen geben.'],
   ['Scheinvolumen oder irreführende Ordermuster','Überwachung von Handelsmustern und wirtschaftlicher Gegenpartei','Scheinaktivität von echtem Risiko- und Liquiditätstransfer unterscheiden.'],
   ['Falsche marktbezogene Veröffentlichungen','Quellenprüfung, Freigabe und Nachverfolgung von Korrekturen','Erfundene Signale erkennen und ihre weitere Verwendung stoppen.']
  ],'Eigene Kontrollvorschläge; nicht jede Maßnahme passt unverändert zu jedem Geschäftsmodell.'),
  'Eine Informationsbarriere ist mehr als eine organisatorische Zeichnung. Zuständigkeiten, Datenzugriff, Kommunikation und persönliche Geschäfte müssen zu ihr passen. Eine unbeaufsichtigte gemeinsame Dateiablage kann die beabsichtigte Trennung praktisch aufheben.',
  'Eine Watch List dient typischerweise der besonderen Beobachtung, eine Restricted List einer ausdrücklich definierten Beschränkung. Die konkrete Wirkung ergibt sich aus dem betrieblichen Verfahren. Die bloße Aufnahme eines Namens in eine Liste erlaubt keinen Handel, der materiell verboten bleibt.'
 ]),
 S('boundaries','6. Die entscheidende Tatsache einer Fallfrage finden','a c',[
  X('Ein Portfolioverkauf bewegt den Kurs','Ein Fonds muss wegen tatsächlicher Kundenauszahlungen einen großen Aktienbestand verkaufen. Die Transaktionen sind ernsthaft, und der Fonds versucht nicht, andere durch falsche Informationen oder Scheinorders zu täuschen. Der Kurs fällt deutlich.',[
   'Der Kursrückgang allein genügt nicht, um aus dem Verkauf Manipulation abzuleiten. Die Ausführung reagiert auf einen echten Mittelbedarf.',
   'Andere Pflichten bleiben relevant, etwa sorgfältige Ausführung und faire Behandlung der Anleger. Ihr möglicher Prüfbedarf darf nicht mit einem bereits feststehenden II(B)-Verstoß verwechselt werden.',
   'Würde das Team dagegen zusätzlich wissentlich falsche Meldungen verbreiten, um den Verkauf zu erleichtern, käme eine neue entscheidende Tatsache hinzu.'
  ],'Eine sorgfältige Antwort erfindet keinen Täuschungszweck, wenn der Sachverhalt ausdrücklich nur echten Handel beschreibt.'),
  'II(A) prüft die Quelle und den Status der entscheidungsrelevanten Information. II(B) prüft die irreführende Einwirkung auf den Markt. Eine gefälschte Nachricht muss keine echte Insiderinformation enthalten, um manipulierend zu sein. Ein stiller Handel mit echten wesentlichen Insiderinformationen benötigt umgekehrt keine öffentliche Falschmeldung, um unzulässig zu sein.'
 ])],
 sources:[
  {title:'CFA Institute: Standard II(A), Material Nonpublic Information',url:'https://www.cfainstitute.org/standards/professionals/code-ethics-standards/standards-of-practice-ii-a'},
  {title:'CFA Institute: Standard II(B), Market Manipulation',url:'https://www.cfainstitute.org/standards/professionals/code-ethics-standards/standards-of-practice-ii-b'}
 ],review:{status:'draft',date:'2026-09-17',note:'Eigene Fälle; Materialität, Öffentlichkeit, Mosaik und manipulative Absicht getrennt.'}};
