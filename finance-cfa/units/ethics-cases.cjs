const {T,X,S}=require('../author.cjs');
module.exports={id:'ethics-cases',intro:[
 'In der beruflichen Praxis erscheinen Standards selten sauber getrennt. Ein Researchbericht kann zugleich Fragen zur Informationsquelle, zur Analysequalität, zur Vergütung und zur Verteilung auslösen. Dieses Kapitel übt die Verbindung, ohne neue Regeln zu erfinden.',
 'Alle Fälle sind eigens konstruiert. Bearbeite sie zuerst mit drei Notizen: Welche konkrete Handlung ist gegeben? Welche Pflicht betrifft sie? Welche zusätzliche Tatsache würde die Bewertung ändern? Die Lösung folgt jeweils Schritt für Schritt.'
],sections:[
 S('research-chain','1. Research: Quelle, Methode und Verteilung','a b',[
  X('Drei Probleme in einem Bericht','Ein Analyst erhält von einem Unternehmensleiter eine verlässliche vertrauliche Bestätigung eines erheblichen Finanzierungsausfalls. Er nutzt sie als entscheidenden Input für eine Verkaufsempfehlung, übernimmt daneben Text eines externen Spezialisten ohne Quellenangabe und sendet die Empfehlung vorab an einen bevorzugten Kunden, der sofort handelt. Andere betroffene Kunden erhalten sie erst später und werden benachteiligt.',[
   'Informationsquelle: Die entscheidende Tatsache ist wesentlich und nicht öffentlich. Ihre Verwendung, um einen anderen zu einer Anlagehandlung zu veranlassen, führt zu II(A).',
   'Leistungsdarstellung: Der nicht gekennzeichnete fremde Text wird als eigene Arbeit ausgegeben. Das ist getrennt unter I(C) zu beurteilen.',
   'Verteilung: Die benachteiligende Vorabinformation eines bevorzugten Kunden berührt III(B). Die öffentliche oder vertrauliche Herkunft ist nicht dieselbe Frage wie faire Verteilung.',
   'Eine bloße Quellenangabe würde nur das Zuschreibungsproblem bearbeiten. Sie erlaubt weder die Informationsverwendung noch die unfaire Verteilung.'
  ],'Repariere jede Ursache separat. Ein einzelner korrekter Schritt kann die übrigen Verstöße nicht neutralisieren.'),
  T(['Geänderte Tatsache','Was dadurch anders wird','Was nicht automatisch verschwindet'],[
   ['Finanzierungsausfall ist bereits angemessen öffentlich verbreitet.','Die beschriebene II(A)-Grundlage entfällt.','Quellenverschleierung und unfaire Verteilung.'],
   ['Externer Text wird zutreffend gekennzeichnet.','Das konkrete Zuschreibungsproblem entfällt.','Unzulässige Informationsverwendung und bevorzugte Verteilung.'],
   ['Alle betroffenen Kunden werden fair informiert.','Das konkrete Verteilungsproblem entfällt.','II(A) wird nicht durch breitere Verbreitung einer unzulässigen Empfehlung geheilt.']
  ],'Eigene Gegenproben: Ändere immer nur eine Tatsache, um ihre Wirkung sichtbar zu machen.')
 ]),
 S('bonus-allocation','2. Genehmigte Vergütung, unfaire spätere Handlung','a b',[
  X('Ein Bonus und eine knappe Zuteilung','Ein Kunde bietet einer Managerin eine zusätzliche Vergütung bei Erreichen eines Renditeziels. Vor Annahme informiert sie alle betroffenen Parteien vollständig und erhält deren dokumentierte schriftliche Zustimmung. Später teilt sie diesem Kunden sämtliche knappen Stücke einer geeigneten Neuemission zu, obwohl nach der festgelegten fairen Regel auch andere geeignete Kunden hätten teilnehmen sollen.',[
   'Die Zusatzvergütung wurde im Sachverhalt korrekt genehmigt. Es wäre falsch, allein aus ihrer Existenz einen IV(B)-Verstoß abzuleiten.',
   'Die spätere Zuteilung verletzt die unabhängige Pflicht zur fairen Kundenbehandlung. Die Zustimmung zur Vergütung gab keine Erlaubnis, andere Kunden zu benachteiligen.',
   'Die Ursache der problematischen Anreizwirkung sollte bei Konfliktkontrolle und Aufsicht berücksichtigt werden. Materielle Kontrollen bleiben auch nach einer Freigabe erforderlich.',
   'Ein Kontrollvorschlag wäre ein vorab dokumentiertes Zuteilungsverfahren mit Prüfung von Ausnahmen durch eine unabhängige zuständige Stelle.'
  ],'Fälle enthalten oft einen korrekt erledigten Teil. Erkenne ihn ausdrücklich, statt jedes genannte Thema automatisch als Verstoß zu markieren.'),
  'Die andere Variante wäre eine faire Zuteilung, aber eine ohne erforderliche Zustimmung angenommene Bonusvereinbarung. Dann läge das Problem an einer anderen Stelle. Das Ergebnis der Zuteilung beantwortet nicht rückwirkend die Zustimmungsfrage.'
 ]),
 S('vendor-model','3. Externe Modelle und die eigene Verantwortung','a b',[
  X('Die bekannte Marke des Anbieters','Ein Team übernimmt ein neues Liquiditätsmodell eines angesehenen Anbieters. Niemand prüft seine Annahmen. In Kundengesprächen wird eine geschätzte Auszahlungsdauer als sichere Zusage dargestellt. Bekannte Grenzen werden weggelassen. Die zuständige Führungskraft kennt wiederholte Warnungen, unternimmt aber nichts.',[
   'Researchprozess: Ein bekannter Anbieter ersetzt keine angemessene Prüfung der Eignung des Modells. V(A) betrifft die Grundlage der Empfehlung.',
   'Kommunikation: Schätzung und sichere Tatsache werden verwechselt; wichtige Grenzen fehlen. V(B) verlangt eine passende Erklärung von Methode, Risiken und Aussageart. Je nach konkreter wissentlich falscher Darstellung ist auch I(C) betroffen.',
   'Aufsicht: Die Führungskraft muss auf bekannte Warnzeichen angemessen reagieren. Eine formale Zuständigkeit des Anbieters hebt die eigene IV(C)-Verantwortung nicht auf.',
   'Die richtige Reaktion verbindet Modellprüfung, Korrektur der Kommunikation und wirksame Aufsicht. Nur den Namen des Anbieters prominenter zu nennen, bearbeitet keine dieser Ursachen hinreichend.'
  ],'Delegation verteilt Arbeit. Sie beseitigt nicht die Verantwortung für Auswahl, Verwendung und Kommunikation.'),
  T(['Kontrollziel','Geeignete Prüfung'],[
   ['Modell versteht den relevanten Markt.','Daten, Annahmen, Stressfälle und Grenzen prüfen.'],
   ['Kunden verstehen den Modelloutput.','Schätzungen kennzeichnen und wesentliche Beschränkungen erklären.'],
   ['Warnzeichen führen zu Handlungen.','Zuständigkeit, Nachverfolgung und dokumentierte Entscheidung sicherstellen.']
  ],'Eigene Kontrollmatrix. Jeder Prüfungspunkt entspricht einem anderen Fehlermodus.')
 ]),
 S('departure','4. Arbeitgeberwechsel ohne Daten- oder Kundenabkürzung','a b',[
  X('Ein privater Computer mit beruflichen Dateien','Eine noch beschäftigte Beraterin plant einen Wechsel. Mit eigenen Mitteln mietet sie künftige Büroräume. Zusätzlich kopiert sie ohne Erlaubnis Kundendateien und interne Modelle ihres Arbeitgebers auf einen privaten Datenträger und beginnt, dessen Kunden für das neue Geschäft abzuwerben.',[
   'Die reine Vorbereitung mit eigenen Mitteln kann zulässig sein. Dieser Teil wird nicht automatisch durch den geplanten Wechsel zum Verstoß.',
   'Unberechtigte Mitnahme geschützter Unterlagen und aktive Konkurrenzwerbung während der Beschäftigung betreffen IV(A). Ein eigener Datenträger macht die Inhalte nicht zu persönlichem Eigentum.',
   'Soweit vertrauliche Kundendaten weiterverwendet werden, ist zusätzlich III(E) zu prüfen. Arbeitgeberrechte und Kundenschutz betreffen unterschiedliche geschützte Interessen.',
   'V(C) ist keine Erlaubnis, fremde Unterlagen zu stehlen. Aufbewahrungspflicht und berechtigte Verfügung über die Unterlagen müssen zusammen erfüllt werden.'
  ],'Unterscheide zulässige organisatorische Vorbereitung von tatsächlichem Konkurrenzgeschäft und unberechtigter Datenverwendung.'),
  'Die Gegenprobe: Nach Ende der Beschäftigung kann das Werben um frühere Kunden anders zu beurteilen sein, sofern keine einschlägigen Beschränkungen verletzt und keine geschützten Arbeitgeberdaten verwendet werden. „Ehemaliger Kunde“ ist deshalb weder eine automatische Erlaubnis noch ein pauschales lebenslanges Verbot.'
 ]),
 S('client-instruction','5. Ein Kundenwunsch ersetzt nicht jede Prüfung','a b',[
  X('Handeln mit einem vertraulichen Hinweis','Ein Kunde erzählt seinem Berater eine verlässliche, erhebliche nicht öffentliche Information über einen Emittenten und verlangt daraufhin ein Geschäft. Er erklärt schriftlich, sämtliche Risiken zu übernehmen, und bittet ausdrücklich um Diskretion.',[
   'Die Kundenanweisung und ihre schriftliche Form verändern den Informationsstatus nicht. II(A) ist vor jeder Anlagehandlung zu prüfen.',
   'Vertraulichkeit bedeutet, die Information angemessen zu schützen. Sie verpflichtet den Berater nicht, eine unzulässige Transaktion auszuführen.',
   'Eine richtige Reaktion ist, das verbotene Geschäft nicht auf dieser Grundlage vorzunehmen und die zuständigen Compliance-Verfahren einzuhalten. Eine öffentliche Preisgabe der Kundendaten ist nicht die automatische Alternative.',
   'Eine Risikoverzichtserklärung des Kunden kann keine allgemein geltende Marktintegritätspflicht aufheben.'
  ],'Kundenloyalität bedeutet keine bedingungslose Ausführung jeder Anweisung. Mehrere Pflichten begrenzen gemeinsam die zulässige Handlung.')
 ]),
 S('presentation','6. Eine transparente Einzelzahl in einer irreführenden Geschichte','a b',[
  X('Das beste Konto repräsentiert angeblich alle','Eine Firma zeigt die korrekte Rendite ihres besten Kontos. Die Präsentation bezeichnet diese als „typisches Ergebnis aller gleich verwalteten Konten“, obwohl die übrigen Ergebnisse erheblich niedriger sind. Ein allgemeiner Hinweis erklärt, vergangene Renditen garantierten keine künftigen Ergebnisse.',[
   'Die historische Einzelzahl kann korrekt sein. Falsch ist die Behauptung ihrer Repräsentativität. III(D) betrifft die Gesamtaussage über die erzielte Leistung.',
   'Die Zukunftswarnung ist kein Widerruf der falschen Aussage über die Vergangenheit. Beide Aussagen beziehen sich auf verschiedene Sachverhalte.',
   'Eine angemessene Korrektur stellt Umfang, Auswahl, Zeitraum und Methode zutreffend dar. Der schöne Kontowert kann nicht ohne diesen Kontext für eine andere Population sprechen.',
   'Die Aufsicht sollte sowohl Rechnungen als auch Beschriftungen und Auswahlregeln prüfen. Ein Kontrollblatt, das nur Zahlen nachrechnet, würde diesen Fehler übersehen.'
  ],'Prüfe bei Darstellungen die Aussage, die beim Leser entsteht. Richtige Zahlen und richtige Einzelwarnungen können trotzdem eine falsche Gesamtaussage begleiten.')
 ]),
 S('case-method','7. Die Falllösung in vier Sätzen','a b',[
  T(['Schritt','Eigene Formulierung am Datenkopierfall'],[
   ['Handlung nennen','Die noch beschäftigte Person kopiert geschützte Arbeitgeberdateien ohne Erlaubnis.'],
   ['Pflicht zuordnen','IV(A) verlangt Loyalität gegenüber dem Arbeitgeber; III(E) kann Kundendaten zusätzlich schützen.'],
   ['Begründende Tatsache nennen','Privates Speichermedium und künftiger Job ändern die Berechtigung an den Dateien nicht.'],
   ['Passende Alternative nennen','Erlaubte Vorbereitung mit eigenen Mitteln und ohne unberechtigte Datenübernahme.']
  ],'Eigene Lösungshilfe. In einer Multiple-Choice-Frage dient sie als kurze innere Begründung.'),
  'Eine starke Lösung erklärt auch, warum die anderen Antworten nicht passen. Häufig verwechseln sie Zeitpunkt, Person, vorgeschlagene Kontrolle oder eine erfüllte Pflicht mit einer anderen. Die Fragen dieses Kapitels enthalten deshalb bewusst auch Sachverhalte, in denen ein genannter Standard korrekt eingehalten wurde.',
  '„Mindestens“, „am ehesten“, „zunächst“ und „nur“ verändern die Frage. Beantworte die tatsächlich gefragte Handlung oder Abgrenzung. Zusätzliche plausible Probleme dürfen nicht aus einer Vermutung heraus als feststehende Tatsachen behandelt werden.'
 ])],
 related:[{unit:'standard-i',section:'representation',label:'Falsche Darstellung und fremde Leistung'},{unit:'standard-ii',section:'material-public',label:'Wesentlichkeit und Öffentlichkeit prüfen'},{unit:'standard-iii',section:'fair-dealing',label:'Faire Behandlung von Eignung unterscheiden'},{unit:'standard-iv',section:'compensation',label:'Vorherige Zustimmung zu Zusatzvergütung'},{unit:'standard-v',section:'basis',label:'Tragfähige Analysegrundlage'},{unit:'standard-vi',section:'priority',label:'Priorität vor persönlichen Geschäften'},{unit:'standard-vii',section:'exam-integrity',label:'Prüfungsintegrität'}],
 sources:[
 {title:'CFA Institute: aktuelle Standards und Einzelguidance',url:'https://www.cfainstitute.org/standards/professionals/code-ethics-standards'},
 {title:'CFA Institute: Ethical Decision-Making Framework',url:'https://www.cfainstitute.org/insights/professional-learning/ethics-resources/ethical-decision-making'}
 ],review:{status:'draft',date:'2026-09-17',note:'Ausschließlich eigene kombinierte Fälle und Ein-Tatsachen-Gegenproben; keine offiziellen Prüfungsaufgaben.'}};
