const {F,T,X,S}=require('../author.cjs');
module.exports={id:'analysis-framework',intro:[
 'Ein Abschluss ist eine geordnete Darstellung wirtschaftlicher Vorgänge nach bestimmten Regeln. Eine Analyse ist die begründete Antwort auf eine Entscheidung: Kann ein Unternehmen seinen Kredit bedienen, verdient es angemessen auf sein Kapital, oder ist ein Aktienpreis durch plausible künftige Zahlungsströme gedeckt? Dieselben Zahlen können für diese Fragen unterschiedlich wichtig sein.',
 'Dieses Kapitel verbindet Analysezweck, Datenprüfung, Interpretation und Nachverfolgung. Die Fallzahlen sind eigene Lehrbeispiele. Das Ziel ist ein nachvollziehbarer Arbeitsprozess, in dem jeder Schluss zu seiner Quelle und seinen Annahmen zurückverfolgt werden kann.'
],sections:[
 S('purpose','1. Die Entscheidung bestimmt die Analyse','a b',[
  'Ein Kreditgeber besitzt einen vertraglich begrenzten Anspruch und trägt insbesondere das Risiko ausbleibender Zahlung. Ein Aktionär erhält den verbleibenden Wert nach vorrangigen Ansprüchen und beteiligt sich an Aufwärts- wie Abwärtspotenzial. Deshalb kann eine Anleihe bei mäßigem Wachstum attraktiv sein, während die Aktie desselben Unternehmens zu teuer ist.',
  T(['Entscheidung','Vorrangige Fragen','Unzureichender Kurzschluss'],[
   ['Kurzfristiger Betriebsmittelkredit','Wann kommen Einzahlungen, welche Zahlungen sind vorher fällig, welche Sicherheiten sind verfügbar?','Hoher Jahresgewinn garantiert jederzeitige Zahlungsfähigkeit.'],
   ['Langfristige Anleihe','Wie belastbar sind Schuldendienst, Refinanzierung und Rang der Forderung?','Ein einmaliger hoher Cashbestand beweist dauerhafte Solvenz.'],
   ['Aktienbewertung','Welche nachhaltigen freien Cashflows bleiben nach notwendigen Investitionen und Finanzierung?','Umsatzwachstum macht jede Bewertung günstig.'],
   ['Unternehmenssteuerung','Welche Produkte, Prozesse und Kapitalbindungen erklären die Veränderung?','Eine Kennzahl liefert ihre Ursache bereits mit.']
  ],'Der Analysezweck legt Horizont, Vergleichsgruppe und relevante Risiken fest.'),
  'Vor dem Rechnen werden Bewertungsstichtag, Berichtswährung, Einzel- oder Konzernperspektive und Entscheidungshorizont festgelegt. Eine Liquiditätsfrage für die nächsten drei Monate verlangt andere Daten als eine zehnjährige Wachstumsannahme.'
 ]),
 S('process','2. Sechs Schritte mit überprüfbaren Ergebnissen','a',[
  T(['Schritt','Konkretes Arbeitsergebnis'],[
   ['1. Zweck und Kontext festlegen','Fragestellung, Adressat, Zeithorizont, verfügbare Mittel und benötigtes Entscheidungsformat.'],
   ['2. Daten sammeln','Abschlüsse, Anhang, Markt- und Branchendaten mit Quelle und Veröffentlichungsdatum.'],
   ['3. Daten aufbereiten','Vergleichbare Perioden, normalisierte Definitionen, nachvollziehbare Anpassungen und berechnete Kennzahlen.'],
   ['4. Analysieren und interpretieren','Erklärung von Ursachen, Szenarien und Gegenargumenten statt bloßer Zahlenliste.'],
   ['5. Schlussfolgerung kommunizieren','Begründete Empfehlung mit Unsicherheit, relevanten Annahmen und Einschränkungen.'],
   ['6. Nachverfolgen','Neue Informationen gegen die ursprüngliche These prüfen und bei Bedarf aktualisieren.']
  ],'Der Prozess kann Rücksprünge enthalten: Eine Unstimmigkeit bei der Interpretation führt zu erneuter Datensuche.'),
  'Aufbereitung beantwortet etwa, wie hoch eine bereinigte Marge ist. Interpretation beantwortet, warum sie sich verändert und ob die Ursache fortbesteht. Kommunikation verbindet diese Erkenntnis mit der eigentlichen Entscheidung. Wer diese Schritte vermischt, riskiert, die gewünschte Empfehlung bereits in die Datenanpassung einzubauen.'
 ]),
 S('statement-map','3. Vier Rechenwerke beantworten unterschiedliche Fragen','c',[
  T(['Rechenwerk','Zeitsicht','Analytische Rolle'],[
   ['Bilanz / Statement of Financial Position','Bestand an einem Stichtag','Vermögensbindung, Verpflichtungen und Eigenkapital.'],
   ['Ergebnisrechnung / Income Statement','Erträge und Aufwendungen einer Periode','Wirtschaftliche Leistung nach Abgrenzungsregeln.'],
   ['Cashflowrechnung','Zahlungsbewegungen einer Periode','Herkunft und Verwendung von Zahlungsmitteln.'],
   ['Eigenkapitalveränderungsrechnung','Überleitung von Anfangs- zu Endbestand','Ergebnis, sonstiges Gesamtergebnis und Eigentümertransaktionen auseinanderhalten.']
  ],'Der Anhang ist für die Interpretation aller vier Rechenwerke wesentlich.'),
  F('A=L+E,\\qquad E_1=E_0+NI+OCI+C-D','Die Bilanzidentität beschreibt einen Stichtag. Die zweite Gleichung ist eine vereinfachte Eigenkapitalüberleitung ohne sonstige direkte Anpassungen; Ergebnis ist nur eine Ursache der Veränderung.',[['A,L,E','Vermögenswerte, Verpflichtungen und Eigenkapital am gleichen Stichtag.'],['E_0,E_1','Anfangs- und Endeigenkapital desselben Berichtskreises.'],['NI,OCI','Periodenergebnis und sonstiges Gesamtergebnis.'],['C,D','Nettoeinlagen der Eigentümer und Ausschüttungen; Rückkäufe können als negative Einlagen erfasst werden.']]),
  X('Mehr Eigenkapital ist nicht immer Gewinn','Anfangseigenkapital 200; Periodengewinn 30; OCI −8; neue Einlagen 50; Ausschüttung 12.',[
   'Endeigenkapital: 200 + 30 − 8 + 50 − 12 = 260.',
   'Der Eigenkapitalanstieg beträgt 60, das Periodenergebnis aber nur 30. Die Kapitalaufnahme trägt 50 bei und die übrigen Positionen zusammen −20.',
   'Eine Kennzahl, die den gesamten Anstieg als Gewinn interpretiert, würde externe Finanzierung als operative Leistung ausweisen.'
  ],'Eine Bestandsänderung wird durch ihre vollständige Überleitung erklärt, nicht durch eine einzelne Ergebniszeile.')
 ]),
 S('filings','4. Pflichtberichte, Zeitpunkte und Prüfungskreis','c',[
  'Regulatorische Einreichungen liefern vergleichsweise strukturierte Ausgangsdaten. Bei US-Emittenten enthält ein Form 10-K den Jahresbericht; Form 10-Q betrifft Quartalsinformationen und Form 8-K bestimmte wesentliche Ereignisse. Ein Hochglanzbericht, eine Pressemitteilung und ein regulatorischer Bericht sind nicht automatisch deckungsgleich.',
  'Prüfe sowohl den Zeitraum, auf den Zahlen sich beziehen, als auch den Zeitpunkt, zu dem sie öffentlich verfügbar wurden. Wer eine Strategie rückwirkend mit erst später veröffentlichten Daten beurteilt, verwendet Zukunftsinformationen. Eine spätere Neudarstellung darf für eine historische Entscheidungsanalyse nicht still an die Stelle des damals bekannten Berichts treten.',
  T(['Prüfung','Beispiel einer möglichen Verwechslung'],[
   ['Berichtskreis','Konzernumsatz wird mit Schulden nur der Muttergesellschaft verglichen.'],
   ['Periodenlänge','Ein 53-Wochen-Jahr wird wie ein identisches 52-Wochen-Jahr behandelt.'],
   ['Währung und Skalierung','Millionen EUR werden mit Tausend USD kombiniert.'],
   ['Datenstand','Eine nachträgliche Berichtigung wird als bereits damals bekannt angesehen.'],
   ['Prüfungsumfang','Ein Lagebericht wird allein wegen räumlicher Nähe zum Testat als in gleicher Weise geprüft bezeichnet.']
  ],'Eine sauber dokumentierte Datenbasis verhindert Fehler, die später durch präzise Mathematik nur verdeckt würden.')
 ]),
 S('notes','5. Der Anhang erklärt, was die Zahl bedeutet','c',[
  'Eine Bilanzzeile ist ein verdichtetes Ergebnis vieler Regeln und Schätzungen. Im Anhang werden unter anderem Bilanzierungsmethoden, Bewertungsannahmen, Aufgliederungen, Fälligkeiten und Risiken erläutert. Zwei gleich bezeichnete Posten können daher unterschiedliche wirtschaftliche Inhalte besitzen.',
  X('Gleicher Schuldenbetrag, andere Fälligkeiten','Zwei Unternehmen melden jeweils 100 Finanzschulden. Bei A werden im nächsten Jahr 80 fällig, bei B nur 10. Beide besitzen 15 frei verfügbare Zahlungsmittel.',[
   'Die einfache Differenz Schulden minus Cash beträgt bei beiden 85 und zeigt den kurzfristigen Unterschied nicht.',
   'A muss ohne neue operative Mittel oder Refinanzierung 65 über seinen Cashbestand hinaus aufbringen; B könnte die genannte Fälligkeit aus Cash decken.',
   'Die Entscheidung benötigt danach erwartete Einzahlungen, weitere Auszahlungen, Kreditlinien, Sicherheiten und vertragliche Bedingungen. Die Differenz allein beweist bei A noch keinen Ausfall.'
  ],'Fälligkeitsangaben verwandeln einen abstrakten Bestand in eine zeitlich konkrete Finanzierungsfrage.'),
  'Auch Transaktionen mit nahestehenden Parteien, Konzentrationen, Eventualverpflichtungen und spätere Ereignisse können wesentlich sein. Eine nicht bilanzierte Verpflichtung ist nicht zwangsläufig wirtschaftlich irrelevant; ihre Eintrittswahrscheinlichkeit und mögliche Höhe müssen gesondert betrachtet werden.'
 ]),
 S('management','6. Managementkommentar als erklärungsbedürftige Perspektive','c e',[
  'Management Discussion and Analysis, Lagebericht, Earnings Calls und Investorentage erklären aus Sicht der Unternehmensleitung Strategie, Ergebnisse und Ausblick. Diese Informationen sind nützlich, aber die Leitung besitzt eigene Anreize und kann günstige Kennzahlen hervorheben.',
  X('Eine „bereinigte“ Marge nachvollziehen','Ein Unternehmen nennt berichteten operativen Gewinn 45 und bereinigten Gewinn 60 bei Umsatz 300. Es entfernt 10 Restrukturierungskosten und 5 Aktienvergütung.',[
   'Berichtete Marge: 45/300 = 15 %. Bereinigte Marge: 60/300 = 20 %. Die Überleitung ist rechnerisch nachvollziehbar.',
   'Ob 10 künftig entfallen, erfordert Prüfung der Maßnahme und früherer Restrukturierungen. Ein jährlich wiederkehrender Sonderposten ist wirtschaftlich nicht automatisch einmalig.',
   'Aktienvergütung kann den aktuellen Cashflow schonen, verursacht aber einen wirtschaftlichen Vergütungsaufwand und mögliche Verwässerung. Das Wort „non-cash“ begründet für sich keine dauerhafte Entfernung aus der Bewertung.'
  ],'Eine Überleitung beweist die Rechnung, noch nicht die wirtschaftliche Eignung der Bereinigung.'),
  'Die Begriffe Ergebnisqualität und Berichtsqualität sind zu trennen: Regelkonforme Zahlen können ein schwaches Geschäft zeigen. Umgekehrt macht ein profitables Geschäft einen irreführenden Ausweis nicht akzeptabel.'
 ]),
 S('audit','7. Was ein Prüfungsurteil aussagt und was offenbleibt','c',[
  'Ein Abschlussprüfer beurteilt im festgelegten Prüfungsrahmen, ob der Abschluss in wesentlichen Belangen nach dem maßgeblichen Regelwerk dargestellt ist. Hinreichende Sicherheit ist keine absolute Fehlerfreiheit und keine Garantie für Zahlungsfähigkeit, Kursentwicklung oder die Güte jeder Managementprognose.',
  T(['Urteil / Befund','Grundsätzliche Aussage','Analytische Konsequenz'],[
   ['Unqualified / unmodified','Uneingeschränktes Urteil zur wesentlichen Regelkonformität.','Weiterhin Schätzungen, Risiken und wirtschaftliche Qualität analysieren.'],
   ['Qualified','Einschränkung wegen eines wesentlichen abgegrenzten Problems, beispielsweise Ausweisfehler oder unzureichender Nachweise.','Den konkreten betroffenen Bereich und mögliche Auswirkungen prüfen.'],
   ['Adverse','Der Abschluss vermittelt wegen gravierender, umfassender Abweichungen kein angemessenes Bild nach dem Regelwerk.','Verlässlichkeit der Gesamtbasis ist ernsthaft beeinträchtigt.'],
   ['Disclaimer','Der Prüfer kann kein Urteil abgeben, etwa wegen schwerwiegender Einschränkungen verfügbarer Prüfungsnachweise.','Fehlende Erkenntnis ist von einem festgestellten falschen Gesamtbild zu unterscheiden.']
  ],'Bezeichnungen und technische Voraussetzungen richten sich nach dem Prüfungsstandard. Wesentlichkeit und Reichweite des Problems sind entscheidend, nicht allein seine Existenz.'),
  'Critical Audit Matters bzw. Key Audit Matters lenken Aufmerksamkeit auf anspruchsvolle Prüfungsbereiche. Ihr Vorliegen ist nicht automatisch ein eingeschränktes Urteil oder ein Betrugsnachweis. Ebenso ist ein ausdrücklicher Hinweis auf Unternehmensfortführungsrisiken im Kontext des gesamten Berichts und seiner Offenlegung zu lesen.'
 ]),
 S('comparability','8. Gleiche Wirtschaftsvorgänge, unterschiedliche Berichtszahlen','d',[
  'IFRS Accounting Standards werden vom IASB entwickelt, US-GAAP vom FASB. Aufsichtsbehörden überwachen die Einhaltung in ihrem Zuständigkeitsbereich; sie sind nicht mit den Standardsetzern identisch. Ein Unternehmen kann nicht beliebig je Transaktion das günstigste Regelwerk auswählen.',
  T(['Vergleichsfrage','Warum eine Anpassung nötig sein kann'],[
   ['Forschung und Entwicklung','Ansatzregeln können Zeitpunkt und Höhe von Aufwand und Vermögenswerten verändern.'],
   ['Vorratsbewertung','Zulässige Methoden können unterschiedliche Umsatzkosten und Bestände erzeugen.'],
   ['Leasing','Aufwandsmuster und Cashflowklassifikation können trotz gleicher Vertragszahlungen abweichen.'],
   ['Zinsen und Dividenden im Cashflow','Regelwerk und IFRS-18-Anwendungsstand beeinflussen die Kategorie.']
  ],'Unterschiedliche Zahlen sind zunächst ein Untersuchungsanlass, kein automatischer Manipulationsbeweis.'),
  'Anpassungen sollten einen klaren Vergleichszweck haben, beide Seiten der Bilanz bzw. Ergebnis- und Cashflowwirkungen berücksichtigen und ihre Grenzen zeigen. Sind notwendige Angaben nicht vorhanden, ist ein Unsicherheitsbereich ehrlicher als eine scheinbar exakte Korrektur.'
 ]),
 S('standards-change','9. Änderungen beobachten, ohne Entwürfe als geltendes Recht zu lesen','d',[
  'Bei einer neuen Vorschrift werden Herausgabe, verpflichtender Anwendungsbeginn, frühe Anwendung, Übergangsregeln und lokale Übernahme unterschieden. Ein Diskussionspapier oder ein Board-Meeting beschreibt nicht automatisch eine endgültige Regel.',
  'IFRS 18 gilt nach dem Standard für Geschäftsjahre, die am oder nach dem 1. Januar 2027 beginnen; frühe Anwendung ist zulässig. Die Änderungen betreffen unter anderem Darstellung der Ergebnisrechnung sowie verbundene IAS-7-Regeln. Daher darf eine alte IFRS-Wahlrechtstabelle nicht ohne Zeitbezug auf jeden 2027-Bericht übertragen werden.',
  X('Ein Sprung ohne zusätzlichen Zahlungseingang','Ein Unternehmen ändert zulässig die Darstellung von 12 gezahlten Zinsen aus operativem zu Finanzierungs-Cashflow. Sämtliche realen Zahlungen sind gleich geblieben.',[
   'Berichteter operativer Cashflow steigt allein dadurch um 12. Finanzierungs-Cashflow sinkt um 12.',
   'Gesamte Zahlungsmitteländerung bleibt gleich. Ein Wachstum des operativen Cashflows um 12 wäre hier kein Beweis für bessere Kundeninkassi.',
   'Für einen Zeitvergleich werden die Kategorien auf eine gemeinsame Basis gebracht; ursprünglicher Ausweis und analytische Umgliederung bleiben dokumentiert.'
  ],'Regeländerung, Schätzungsänderung und wirtschaftliche Veränderung dürfen nicht in einer Wachstumszahl verschwinden.')
 ]),
 S('other-sources','10. Ergänzende Daten und ihre Belastbarkeit','e',[
  T(['Quelle','Möglicher Nutzen','Prüfung der Grenzen'],[
   ['Branchen- und Wettbewerberberichte','Nachfrage, Marktanteile, Kosten und alternative Erklärungen.','Andere Produktmischung, Regionen und Definitionen.'],
   ['Amtliche Wirtschaftsstatistik','Konjunktur, Preise und Beschäftigung.','Veröffentlichungsverzug, Revisionen und Branchenpassung.'],
   ['Gespräche und Betriebsbesuche','Prozesse, Engpässe und qualitative Hinweise.','Auswahl, Interessenkonflikte und rechtmäßiger Informationszugang.'],
   ['Eigene Produkt- oder Kundenerhebung','Unabhängige Hinweise auf Qualität und Nachfrage.','Stichprobenauswahl, Rücklauf und Repräsentativität.'],
   ['Datenanbieter und Analystenberichte','Schnelle Vergleiche und weitere Hypothesen.','Originalquelle, Bereinigungsmethode und Aktualität.']
  ],'Ein Datenlieferant ersetzt keine Quellenprüfung.'),
  'Mehrere Meldungen, die alle denselben Unternehmensvortrag wiedergeben, sind nicht mehrere unabhängige Bestätigungen. Für jede wichtige These wird nach einer möglichst eigenständigen Gegenprüfung gesucht. Die Regeln zu wesentlichen nicht öffentlichen Informationen gelten auch dann, wenn eine Information analytisch sehr nützlich wäre.'
 ]),
 S('worked-process','11. Von auffälligen Forderungen zu einer prüfbaren These','a b e',[
  X('Wachstum oder spätere Zahlung?','Bei einem fiktiven Händler steigt Umsatz von 365 auf 438. Die für einen vereinfachten Vergleich als repräsentativ angenommenen Forderungsbestände steigen von 30 auf 54. Umsatzsteuer, Ausfälle und Wechselkurse werden zunächst ausgeschlossen.',[
   'Umsatz wächst um 20 %, Forderungen um 80 %. Diese Differenz begründet eine Frage, noch keinen Betrugsverdacht.',
   'Mit 365 Tagen entsprechen die Bestände 30 bzw. 45 Umsatztagen. Bei unverändert 30 Tagen wären im zweiten Jahr nur 36 an Forderungen erforderlich.',
   'Von der Erhöhung um 24 entfallen damit 6 auf größeres Geschäftsvolumen und 18 auf längere Kapitalbindung unter diesen Annahmen.',
   'Mögliche Ursachen sind längere Zahlungsziele, andere Kundenmischung, ein saisonaler Stichtag, verspätete Zahlung oder verfrühte Umsatzrealisierung. Geprüft werden unter anderem Altersstruktur, nachfolgende Zahlungseingänge, Vertragsbedingungen und Anhang.',
   'Eine Kreditentscheidung könnte einen Liquiditätspuffer verlangen. Eine Aktienanalyse müsste zusätzlich beurteilen, ob die Bedingungen Wachstum rentabel ermöglichen oder Ausfallrisiken verdecken.'
  ],'Die Kennzahl lokalisiert ein Problem. Erst Quellen, Vergleichbarkeit und Gegenhypothesen tragen die Schlussfolgerung.'),
  F('DSO=\\frac{AR}{S}\\,365','In diesem Lehrfall wird ein repräsentativer Forderungsbestand durch Jahresumsatz geteilt. In einer vollständigen Analyse sind geeignete Durchschnittsbestände und tatsächliche Periodentage vorzuziehen.',[['DSO','Forderungslaufzeit in Tagen nach der angegebenen Näherung.'],['AR','Passender repräsentativer Forderungsbestand.'],['S','Jahresumsatz auf vergleichbarer Basis.']])
 ]),
 S('report-followup','12. Eine gute Analyse bleibt überprüfbar','a b',[
  'Ein Bericht führt von Frage und Datengrundlage über wesentliche Anpassungen zur Begründung der Entscheidung. Er trennt beobachtete Tatsachen, berechnete Größen und Annahmen über die Zukunft. Sensitivitäten zeigen, bei welchen Änderungen die Empfehlung kippen würde.',
  T(['Dokumentierter Teil','Konkretes Beispiel aus dem Forderungsfall'],[
   ['Beobachtung','Forderungsbestand steigt relativ zum ausgewiesenen Umsatz.'],
   ['Annahme','Ein Teil der verlängerten Zahlungslaufzeit bleibt im Folgejahr bestehen.'],
   ['Folge','Zusätzliche Finanzierung ist nötig; freier Cashflow fällt geringer aus.'],
   ['Gegenprüfung','Nachfolgende Zahlungseingänge und saisonaler Vergleich.'],
   ['Aktualisierungssignal','Überfällige Bestände sinken oder vereinbarte Zahlungsziele ändern sich.']
  ],'Nachverfolgung vergleicht neue Information mit der ursprünglichen Argumentation.'),
  'Ein günstiges späteres Ergebnis beweist nicht rückwirkend einen guten Analyseprozess; Zufall kann eine schwache Entscheidung retten. Umgekehrt kann ein sauber begründetes Szenario durch neue, damals nicht verfügbare Information überholt werden. Deshalb werden sowohl Ergebnis als auch damalige Entscheidungsgrundlage beurteilt.'
 ])
],related:[{unit:'income-statement',section:'revenue',label:'Umsatz und Zahlung auseinanderhalten'},{unit:'ratios',section:'activity',label:'Forderungstage und Kapitalbindung berechnen'},{unit:'leases-compensation',section:'lease-comparison',label:'Gleiche Verträge unter zwei Regelwerken'},{unit:'standard-ii',section:'material-public',label:'Grenzen des Informationszugangs'}],
 sources:[
 {title:'CFA Institute: Lernziele Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=11'},
 {title:'CFA Institute: Introduction to Financial Statement Analysis',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/introduction-financial-statement-analysis'},
 {title:'SEC: How to Read a 10-K',url:'https://www.sec.gov/answers/reada10k.htm'},
 {title:'SEC: Beginners’ Guide to Financial Statements',url:'https://www.sec.gov/about/reports-publications/investorpubsbegfinstmtguide'},
 {title:'PCAOB: AS 3105, Departures from Unqualified Opinions',url:'https://pcaobus.org/oversight/standards/auditing-standards/details/AS3105'},
 {title:'PCAOB: Critical Audit Matters',url:'https://pcaobus.org/resources/staff-publications/audit-focus/audit-focus-critical-audit-matters'},
 {title:'IFRS Foundation: IFRS 18',url:'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-18-presentation-and-disclosure-in-financial-statements/'}
 ],review:{status:'draft',date:'2026-09-24',note:'Eigene Entscheidungssituationen und Gegenrechnungen; Prüfungsurteil, wirtschaftliche Prognose und Datenverfügbarkeit getrennt.'}};
