const {F,T,X,S}=require('../author.cjs');
module.exports={id:'standard-iii',intro:[
 'Ein fachlich gutes Wertpapier kann für einen bestimmten Kunden ungeeignet sein. Eine geeignete Anlage kann unfair zugeteilt werden. Und eine richtig berechnete Rendite kann in einer irreführenden Darstellung stehen. Standard III verlangt deshalb mehrere voneinander unabhängige Prüfungen: Wem gilt die Pflicht, passt die Handlung zum Auftrag, werden Kunden fair behandelt und erhalten sie ein zutreffendes Bild?',
 'Die folgenden eigenen Fälle verwenden bewusst ähnliche Entscheidungen mit unterschiedlichen Ausgangsbedingungen. Lies zuerst Rolle, Auftrag und Informationsstand. Erst dann lässt sich beurteilen, welche Kundenpflicht betroffen ist. Ein späterer Gewinn beweist ebenso wenig regelkonformes Verhalten wie ein späterer Verlust bereits einen Verstoß beweist.'
],sections:[
 S('loyalty','1. III(A): Den richtigen Begünstigten bestimmen','a c',[
  'Kundeninteressen gehen eigenen Interessen und Arbeitgeberinteressen vor. Bei einem Pensionsmandat gilt die Loyalität den Begünstigten, nicht automatisch der Unternehmensleitung, die den Verwalter auswählt. Die konkrete Rolle und die maßgeblichen Vertragsunterlagen bestimmen den Auftrag. Der Standard verlangt Sorgfalt und umsichtiges Urteil, macht aber nicht jede berufliche Rolle automatisch zu einer rechtlichen Treuhandstellung.',
  X('Ein Auftraggeber mit zwei Interessen','Ein Pensionsverwalter soll eine wenig liquide Anleihe des Arbeitgebers der Begünstigten kaufen. Der Finanzvorstand verspricht dafür weitere Verwaltungsmandate. Nach dokumentierter Analyse passt die Anleihe weder zum Liquiditätsbedarf noch zu den Risikogrenzen des Pensionsplans.',[
   'Das mögliche Neugeschäft nützt der Verwaltungsgesellschaft. Es verbessert weder Zahlungsfähigkeit noch Diversifikation des Plans.',
   'Die Person, die den Vertrag unterschrieben hat, ist nicht automatisch die Person, deren wirtschaftlicher Nutzen die Anlageentscheidung steuern darf. Hier stehen die Ansprüche der Begünstigten im Mittelpunkt.',
   'Eine nachträgliche gute Kursentwicklung würde die ungeeignete Motivation und den Verstoß gegen die Mandatsgrenzen nicht rückwirkend beseitigen.'
  ],'Identifiziere zuerst den geschützten Kunden bzw. Begünstigten. Sonst kann ein Interessenkonflikt fälschlich als bloße Kundenanweisung erscheinen.'),
  'Best Execution betrifft die unter den Umständen günstigsten erreichbaren Ausführungsbedingungen insgesamt; die niedrigste sichtbare Provision allein genügt nicht. Mit Kundenprovisionen finanzierte Leistungen müssen den Kunden zugutekommen. Bei Stimmrechten sind wirtschaftliche Bedeutung und Kosten zu prüfen; eine begründete Kosten-Nutzen-Entscheidung kann vom schematischen Abstimmen bei jeder Gelegenheit abweichen.',
  X('Billige Ausführung, teures Gesamtergebnis','Broker A verlangt 20 Euro Provision und führt den Auftrag zu einem um 180 Euro ungünstigeren Gesamtpreis aus als Broker B mit 50 Euro Provision. Alle sonstigen relevanten Ausführungsmerkmale seien gleich.',[
   'A spart gegenüber B 30 Euro Provision. Dafür kostet der Ausführungspreis 180 Euro zusätzlich.',
   'Die Gesamtdifferenz beträgt 150 Euro zulasten von A. Ein Provisionsvergleich ohne Ausführungspreis verfehlt den wirtschaftlichen Vergleich.',
   'Im echten Auftrag sind außerdem Ausführungswahrscheinlichkeit, Marktbedingungen, Größe und Zeitvorgaben zu berücksichtigen. Die Zahlen isolieren nur den Denkfehler „billigste Provision = beste Ausführung“.'
  ],'Sorgfalt bewertet den Entscheidungsprozess und die gesamten Kundenbedingungen, nicht einen einzelnen Werbewert.')
 ]),
 S('fair-dealing','2. III(B): Fair bedeutet sachgerecht, nicht identisch','a c',[
  'Faire Behandlung erlaubt Unterschiede, die sich aus Bedürfnissen, Interesse, Eignung oder offen angebotenen Leistungsstufen ergeben. Sie erlaubt keine bevorzugte Vorabinformation, die andere betroffene Kunden benachteiligt. Zusätzliche persönliche Erläuterungen nach einer fairen allgemeinen Verteilung können dagegen zulässig sein.',
  T(['Situation','Bewertung des entscheidenden Unterschieds'],[
   ['Eine illiquide Anlage wird nur für Kunden mit passendem Horizont geprüft.','Unterschiede beruhen auf Eignung, nicht auf persönlicher Bevorzugung.'],
   ['Ein besonders profitabler Kunde erhält eine kursrelevante Empfehlung vor allen anderen betroffenen Kunden.','Der wirtschaftliche Wert des Kunden begründet keinen unfairen Informationsvorsprung.'],
   ['Ein allen zugänglicher, offengelegter Beratungsservice enthält zusätzliche Gespräche nach der fairen Researchverteilung.','Mehr Service kann zulässig sein, wenn andere Kunden dadurch nicht benachteiligt werden.'],
   ['Nach einer Herabstufung möchte ein noch uninformierter Kunde aufgrund der alten Empfehlung kaufen.','Vor Annahme des Auftrags muss die geänderte Empfehlung erläutert werden.']
  ],'Die Vergleichsfälle betreffen Verteilung und Kommunikation; individuelle Eignung bleibt separat zu prüfen.'),
  'Die Reihenfolge und Zuteilung von Aufträgen braucht ein sachliches, dokumentiertes Verfahren. Eine Offenlegung macht ein offensichtlich unfaires Verfahren nicht fair. Bei knappen Neuemissionen haben Kunden Vorrang vor persönlichen Zuteilungen. Ein regulär wie andere Kunden geführtes Familienkundenkonto darf aber auch nicht allein wegen der Verwandtschaft benachteiligt werden.'
 ]),
 S('allocation','3. Eine Teilzuteilung nachvollziehbar berechnen','a c',[
  'Proportionale Zuteilung ist ein verbreitetes Verfahren für eine teilweise ausgeführte Sammelorder. Sie ist kein universeller Ersatz für alle Regeln: Mindeststückelungen, Zeitpunkt, vorherige Interessenbekundung und Anlageeignung müssen zur konkreten Methode passen.',
  F('q_i=Q\\frac{o_i}{\\sum_{j=1}^{n}o_j}','Jeder geeignete teilnehmende Kunde erhält denselben Erfüllungsanteil seiner vorab dokumentierten Order. Im Beispiel gibt es keine Mindeststückelung oder Rundungsreste.',[
   ['q_i','Zuteilung an Kunde i, in Stück.'],['Q','Insgesamt ausgeführte Stückzahl der Sammelorder.'],['o_i','Vorab dokumentierte Ordergröße des Kunden i, in Stück.'],['o_j','Ordergröße des teilnehmenden Kunden j, in Stück.'],['n','Anzahl der teilnehmenden geeigneten Kunden.'],['i,j','Kundenindizes.']
  ]),
  X('400 Stück für 1.000 bestellte Stück','Drei geeignete Kunden haben vor Ausführung 200, 300 und 500 Stück bestellt. Es werden nur 400 Stück ausgeführt. Die dokumentierte Regel sieht proportionale Zuteilung ohne Mindestlosgröße vor.',[
   'Die gesamte Nachfrage beträgt 1.000 Stück. Die Ausführung deckt 40 % dieser Nachfrage.',
   F('(q_1,q_2,q_3)=400\\left(\\frac{200}{1000},\\frac{300}{1000},\\frac{500}{1000}\\right)=(80,120,200)','Die unterschiedlich großen Zuteilungen folgen derselben Regel und erfüllen jeweils 40 % der Order.',[['q_1,q_2,q_3','Zuteilungen an die drei Kunden in Stück.']]),
   'Eine Zuteilung von jeweils gleich vielen Stücken wäre hier nicht dieselbe Art von Fairness: Der Kunde mit der kleinsten Bestellung erhielte den höchsten Erfüllungsanteil.',
   'Ein nachträgliches Verschieben der erfolgreichen Transaktionen zum bevorzugten Kunden würde die vorab festgelegte Regel durch Ergebniswahl ersetzen.'
  ],'Beurteile das faire Verfahren vor Kenntnis des späteren Erfolgs. Identische Stückzahlen und gleiche relative Behandlung sind verschiedene Dinge.')
 ]),
 S('suitability','4. III(C): Anlage und Kunde zusammen beurteilen','a c',[
  'In einer Beratungsbeziehung sind Erfahrung, Ziele, Risikotoleranz und finanzielle Einschränkungen vor einer Empfehlung angemessen zu erheben und regelmäßig zu aktualisieren. Die Eignung wird im Gesamtportfolio beurteilt. Ein Fondsmanager mit festem Mandat muss dieses einhalten; ohne individuelle Beratungsbeziehung prüft er nicht die persönliche Eignung jedes Fondsanlegers.',
  T(['Frage im Kundenprofil','Warum sie die Anlagewahl verändert'],[
   ['Wann wird welcher Betrag benötigt?','Hohe langfristige Rendite hilft wenig, wenn kurzfristig ein Verkauf zu ungünstigen Bedingungen notwendig wird.'],
   ['Welche Verluste kann und will der Kunde tragen?','Finanzielle Tragfähigkeit und psychologische Bereitschaft können auseinanderfallen.'],
   ['Welche Positionen und Verpflichtungen bestehen bereits?','Ein zusätzliches Wertpapier kann vorhandene Risiken verstärken oder begrenzen.'],
   ['Welche verbindlichen Grenzen gelten?','Rechtliche, steuerliche, ethische oder vertragliche Grenzen können selbst ein sonst attraktives Investment ausschließen.']
  ],'Ein Investment Policy Statement (IPS) übersetzt die relevanten Informationen in Ziele, Grenzen und eine überprüfbare Arbeitsgrundlage.'),
  X('Gleiche Renditeerwartung, andere Eignung','Zwei Anleger besitzen jeweils 100.000 Euro. Anlegerin A benötigt davon in sechs Monaten sicher 70.000 Euro. Anleger B hat für zehn Jahre keinen vorgesehenen Mittelabfluss und trägt das Risiko aus anderen Mitteln. Eine angebotene Anlage lässt sich fünf Jahre nicht regulär zurückgeben.',[
   'Für A steht eine bekannte Zahlung einem nicht rechtzeitig verfügbaren Vermögenswert gegenüber. Eine höhere erwartete Rendite löst dieses Fristenproblem nicht.',
   'Bei B entfällt genau dieser Konflikt. Daraus folgt noch keine automatische Eignung: Bonität, Bewertung, Risikobudget und Gesamtportfolio müssen weiterhin geprüft werden.',
   'Die gleiche Vermögenshöhe reicht deshalb nicht aus, um identische Empfehlungen zu begründen. Schon die Zahlungszeitpunkte verändern die Entscheidung.'
  ],'Eignung ist eine Beziehung zwischen Anlage, Portfolio und Lebenssituation. Sie ist kein dauerhaftes Gütesiegel eines Produkts.'),
  'Ein riskantes Einzelinstrument kann im Gesamtportfolio einen sinnvollen Zweck erfüllen, etwa zur Begrenzung eines bestehenden Risikos. Das erlaubt aber nicht, ausdrückliche Mandatsverbote mit einem Diversifikationsargument zu übergehen.'
 ]),
 S('unsolicited','5. Kundenwunsch und veränderte Umstände','a b c',[
  'Ein unaufgeforderter, erkennbar ungeeigneter Handelswunsch ist zunächst mit dem Kunden zu besprechen. Er ist über die Abweichung vom IPS aufzuklären und die Reaktion ist zu dokumentieren. Bei wesentlicher Portfoliowirkung ist das IPS neu zu prüfen. Beharrt der Kunde auf widersprüchlichen Anforderungen, muss auch die Fortsetzung der Beratungsbeziehung beurteilt werden; eine Unterschrift heilt nicht jede Pflichtverletzung.',
  X('Eine Auszahlung wird vorgezogen','Ein Kunde hatte einen zehnjährigen Anlagehorizont dokumentiert. Nun ist eine größere Zahlung in einem Jahr verbindlich geworden. Er bittet den Berater, das Profil unverändert zu lassen, damit keine Arbeit entsteht.',[
   'Die wirtschaftliche Einschränkung hat sich verändert, auch wenn der Kunde keine neue Dokumentation wünscht. Der alte Horizont beschreibt den aktuellen Bedarf nicht mehr.',
   'Der Berater bespricht Liquidität, mögliche Umschichtung und Folgen für das Renditeziel. Ein Update soll eine echte neue Entscheidung ermöglichen, nicht bloß ein Formular vervollständigen.',
   'Würde der Kunde stattdessen einen kleinen zusätzlichen spekulativen Auftrag wünschen, wären Größenordnung und Gesamtportfolio neu zu prüfen. Nicht jede Abweichung hat denselben materiellen Einfluss.'
  ],'Regelmäßige Prüfung bedeutet auch anlassbezogene Prüfung. Eine wesentliche neue Information sollte nicht bis zum nächsten Kalendertermin liegen bleiben.')
 ]),
 S('performance','6. III(D): Rechenrichtigkeit und Darstellungswahrheit','a c',[
  'Leistungsdarstellungen müssen mit angemessener Sorgfalt fair, korrekt und vollständig sein. Auswahl günstiger Konten oder Zeiträume, verschleierte Simulationen und fehlende Angaben zur Herkunft eines Track Records können ein falsches Bild erzeugen. GIPS-Anwendung ist eine empfohlene Möglichkeit zur strukturierten Darstellung, aber keine allgemeine Voraussetzung zur Erfüllung dieses Standards. Wer GIPS-Konformität behauptet, muss sie tatsächlich erfüllen.',
  X('Zwei wahre Zahlen erzählen verschiedene Geschichten','Eine Strategie erzielt im ersten Jahr +20 % und im zweiten Jahr −20 %. Ein Bericht nennt nur „durchschnittlich 0 % pro Jahr“ und erweckt damit den Eindruck unveränderten Vermögens. Es gab keine Ein- oder Auszahlungen.',[
   F('100(1+0{,}20)(1-0{,}20)=96','Das Startvermögen von 100 Geldeinheiten wächst zunächst auf 120 und fällt dann auf 96. Der zweite Verlust bezieht sich auf die größere Basis.',[['0{,}20','Betrag der jeweiligen Jahresrendite als Dezimalzahl.']]),
   'Der arithmetische Durchschnitt von +20 % und −20 % beträgt tatsächlich 0 %. Der gesamte Wertverlust beträgt aber 4 %. Die korrekte Einzelzahl erklärt das Vermögensergebnis nicht ausreichend.',
   'Eine informative Darstellung nennt Zeitraum und Methode, zeigt beide Jahreswerte und erklärt den kumulierten Verlust. Die Behauptung, das Vermögen sei unverändert, wäre falsch.'
  ],'Eine Berechnung kann formal richtig sein und im gewählten Kontext dennoch einen unzutreffenden Eindruck erzeugen.'),
  'Bei Renditen gehören insbesondere Zeitraum, Gebührenbasis, verwendete Methode, relevante Auswahl und etwaige Simulation erkennbar zusammen. Im Kapitel zu Benchmarks wird erklärt, warum Geld- und Zeitgewichtung bei denselben Anlagen unterschiedliche Fragen beantworten.'
 ]),
 S('confidentiality','7. III(E): Vertraulichkeit mit begrenzten Ausnahmen','a c',[
  'Geschützt sind Informationen über bestehende, frühere und potenzielle Kunden aus der vertraulichen Beziehung. Offenlegung kann bei Kundenzustimmung, gesetzlicher Pflicht oder Informationen über illegale Kundenaktivitäten zulässig bzw. erforderlich sein. Das ist keine pauschale Erlaubnis zur Veröffentlichung: einschlägige Gesetze, Empfänger und zulässiger Umfang bleiben entscheidend. Auch bei illegalen Aktivitäten ist ein anwendbares gesetzliches Offenlegungsverbot zu beachten.',
  X('Eine frühere Kundin als Referenz','Ein Berater möchte bei einem Verkaufsgespräch Vermögen und Anlagestrategie einer früheren Kundin nennen. Der Interessent verspricht, die Angaben nicht weiterzugeben. Die Kundin hat nicht zugestimmt und keine gesetzliche Ausnahme liegt vor.',[
   'Das beendete Mandat beendet den Schutz nicht. Auch eine mündliche Weitergabe an eine einzelne Person ist eine Offenlegung.',
   'Das Versprechen des Empfängers ersetzt die Zustimmung der betroffenen Kundin nicht. Der Berater darf Vertraulichkeit nicht als eigene Werberessource einsetzen.',
   'Ein tatsächlich anonymisiertes und nicht rückführbares Lehrbeispiel wäre anders zu prüfen. Bloßes Weglassen des Namens reicht nicht, wenn die Person anhand der übrigen Details erkennbar bleibt.'
  ],'Prüfe Betroffenen, Herkunft der Information, Berechtigung, Empfänger und Umfang getrennt.'),
  'Ein mit Zustimmung vorab benannter Kontakt kann beim Schutz gefährdeter Kunden helfen. Familienzugehörigkeit allein schafft dagegen keinen unbegrenzten Kontozugang. Bei Unsicherheit sind Compliance und rechtliche Beratung einzubeziehen; Kooperation mit einer ordnungsgemäßen CFA-Institute-Untersuchung wird durch den Standard nicht grundsätzlich ausgeschlossen.'
 ]),
 S('controls','8. Aus Pflichten überprüfbare Abläufe machen','b',[
  T(['Pflicht','Konkreter Kontrollpunkt','Was die Kontrolle sichtbar macht'],[
   ['Loyalität und Sorgfalt','Auftrag und Begünstigte dokumentieren; Ausführungskosten insgesamt vergleichen.','Wessen Interesse steuert die konkrete Entscheidung?'],
   ['Faire Behandlung','Empfängerkreis, Versandzeiten und Zuteilungsregeln dokumentieren; Ausnahmen prüfen.','Entsteht ein sachlich nicht begründeter Vorteil für einzelne Kunden?'],
   ['Eignung','IPS vor Empfehlungen abgleichen und bei relevanten Ereignissen aktualisieren.','Verwendet das Team noch zutreffende Kundendaten?'],
   ['Performance','Rechnung, Kontenauswahl, Gebühren, Zeitraum und Kennzeichnung separat kontrollieren.','Ist die Aussage auch dann zutreffend, wenn jede Einzelzahl stimmt?'],
   ['Vertraulichkeit','Zugriff und Empfänger begrenzen; Freigaben und Ausnahmen dokumentieren.','Wurde nur der für den erlaubten Zweck benötigte Umfang weitergegeben?']
  ],'Eigene Umsetzungsvorschläge. Dokumentation unterstützt eine sachgerechte Entscheidung, ersetzt sie aber nicht.'),
  'Prüfungsfälle lassen sich mit einer kurzen Reihenfolge ordnen: Rolle bestimmen, relevante Tatsache markieren, betroffene Pflicht nennen, Handlung mit der Pflicht vergleichen. Anschließend prüfen, ob eine weitere Pflicht unabhängig verletzt wird. Ein offengelegter Interessenkonflikt kann beispielsweise weiterhin eine ungeeignete Empfehlung begleiten.'
 ])],sources:['a','b','c','d','e'].map((s,i)=>({title:'CFA Institute: Standard III('+String.fromCharCode(65+i)+')',url:'https://www.cfainstitute.org/standards/professionals/code-ethics-standards/standards-of-practice-iii-'+s})),
 review:{status:'draft',date:'2026-09-17',note:'Eigene Fallpaare, getrennte Kundenpflichten und explizite Rechenschritte; abschließende Fachprüfung offen.'}};
