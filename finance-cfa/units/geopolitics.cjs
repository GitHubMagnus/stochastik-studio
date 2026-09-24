const {F,T,X,S,G}=require('../author.cjs');
module.exports={id:'geopolitics',intro:[
 'Geopolitik verbindet räumliche Bedingungen mit Macht, Interessen und internationalen Beziehungen. Für die Anlageanalyse wird daraus eine konkrete Aufgabe: Welche politischen Entscheidungen können welche Zahlungsströme, Finanzierungsmöglichkeiten oder Eigentumsrechte verändern? Ein dramatischer Nachrichtentitel allein beantwortet diese Frage nicht.',
 'Wir entwickeln einen Analyseweg von Akteuren und Interessen über politische Instrumente bis zu überprüfbaren Unternehmens- und Portfoliowirkungen. Die Fallbeispiele sind bewusst fiktiv. Wahrscheinlichkeiten und Verlustbeträge dienen zum Nachrechnen und sind keine Schätzung eines realen Konflikts.'
],sections:[
 S('actors','1. Akteure, Interessen und Handlungsspielräume bestimmen','a',[
  'Zu den staatlichen Akteuren gehören Regierungen und staatliche Institutionen. Unternehmen, internationale Organisationen, gesellschaftliche Gruppen und andere nichtstaatliche Akteure beeinflussen ebenfalls grenzüberschreitende Beziehungen. Der Sitz eines Unternehmens allein verrät noch nicht, welchen Interessen und Abhängigkeiten es ausgesetzt ist.',
  T(['Analysefrage','Warum sie wichtig ist','Fiktives Beispiel'],[
   ['Welche Ressourcen und Zugänge sind knapp?','Geografie beeinflusst Transport, Energie, Rohstoffe und Sicherheit.','Ein Produktionsstandort benötigt einen einzigen Seezugang.'],
   ['Welche Ziele sind vorrangig?','Sicherheitsziele können gegen kurzfristige wirtschaftliche Vorteile abgewogen werden.','Eine Regierung akzeptiert höhere Beschaffungskosten für weniger Abhängigkeit.'],
   ['Wer kann tatsächlich entscheiden?','Ankündigung, politische Mehrheit und administrativer Vollzug sind verschiedene Stufen.','Ein Minister kündigt eine Regel an, die noch parlamentarische Zustimmung benötigt.'],
   ['Welche Gegenreaktion ist zu erwarten?','Andere Akteure können ausweichen, verhandeln oder Gegenmaßnahmen ergreifen.','Ein Exportverbot beschleunigt die Entwicklung von Ersatzmaterialien.']
  ],'Das Raster verlangt überprüfbare Annahmen über Interessen und Fähigkeiten; nationale Etiketten ersetzen diese Arbeit nicht.'),
  'Interessen besitzen häufig eine Rangordnung: Versorgung, Sicherheit und politische Stabilität können höher gewichtet werden als eine einzelne Handelschance. Analysten sollten diese Gewichtung erläutern, ohne aus eigener wirtschaftlicher Präferenz auf die tatsächliche Entscheidung eines Akteurs zu schließen.'
 ]),
 S('cooperation','2. Kooperation und Wettbewerb können gleichzeitig auftreten','a b',[
  'Kooperation senkt etwa Abstimmungs-, Informations- oder Transaktionskosten, wenn gemeinsame Regeln und wechselseitige Zusagen verlässlich sind. Wettbewerb entsteht, wenn Akteure um knappe Ressourcen, Marktpositionen oder Einfluss ringen. Zwei Staaten können in einem Bereich kooperieren und in einem anderen konkurrieren.',
  X('Gemeinsamer technischer Standard, konkurrierende Hersteller','Zwei Länder vereinbaren einen gemeinsamen Sicherheitsstandard für industrielle Komponenten. Ihre Unternehmen bleiben Wettbewerber.',[
   'Ein gemeinsamer Standard kann Doppelprüfungen verringern und den nutzbaren Markt vergrößern. Mehr Anbieter können aber zugleich den Preisdruck erhöhen.',
   'Ein Hersteller gewinnt möglicherweise Absatzmöglichkeiten und verliert gleichzeitig einen bisherigen lokalen Schutz. Kooperation zwischen Staaten garantiert somit keine höhere Marge jedes Unternehmens.',
   'Die Wirkung wird getrennt nach Umsätzen, Kosten, Konkurrenz und notwendigen Anpassungsinvestitionen untersucht.'
  ],'Eine geopolitische Kooperationsmaßnahme kann Gewinner und Verlierer innerhalb derselben Volkswirtschaft erzeugen.'),
  'Soft Power bezeichnet Einfluss über Attraktivität, Vertrauen und Überzeugung, beispielsweise durch Kultur, Bildung oder glaubwürdige Institutionen. Zwang, wirtschaftliche Anreize und freiwillige Regelübernahme sind andere Wirkungsmechanismen. Die Kanäle können sich ergänzen oder widersprechen.',
  'Kooperation hat Kosten: Abstimmung dauert, Verpflichtungen beschränken den eigenen Spielraum und Gewinne können ungleich verteilt sein. Dauerhafte Vereinbarungen müssen deshalb nicht nur insgesamt nützlich sein, sondern auch für Beteiligte hinreichend tragfähige Anreize bieten.'
 ]),
 S('globalization','3. Globalisierung verknüpft Güter, Kapital, Wissen und Risiken','b',[
  T(['Verflechtung','Möglicher Vorteil','Mögliche Verwundbarkeit'],[
   ['Güter- und Dienstleistungsverkehr','Spezialisierung, größere Märkte und Zugang zu Vorleistungen.','Transportausfälle oder Handelshemmnisse können mehrere Produktionsstufen treffen.'],
   ['Kapitalverkehr','Finanzierung und internationale Risikoteilung.','Plötzliche Mittelabzüge oder Fremdwährungsschulden können Krisen verstärken.'],
   ['Wissens- und Informationsaustausch','Technologieübertragung, gemeinsame Forschung und Lernmöglichkeiten.','Technologische Abhängigkeiten, Cyberrisiken und Konflikte über Datenzugang.'],
   ['Mobilität und kultureller Austausch','Zugang zu Fähigkeiten, Perspektiven und Netzwerken.','Anpassungs- und Verteilungsfragen können politische Gegenreaktionen auslösen.']
  ],'Ökonomische Integration kann Effizienz erhöhen und zugleich Abhängigkeiten schaffen. Beides gehört in dieselbe Analyse.'),
  'Die Verteilung ist entscheidend: Niedrigere Importpreise können viele Konsumenten begünstigen, während Beschäftigte einer importkonkurrierenden Branche konzentrierte Anpassungskosten tragen. Ein gesamtwirtschaftlicher Vorteil garantiert weder automatische Entschädigung noch politische Akzeptanz.',
  'Reshoring verlagert Produktion zurück ins Inland; Nearshoring näher an den Absatzmarkt; Friendshoring bevorzugt politisch als verlässlicher eingeschätzte Standorte. Diese Strategien können bestimmte Abhängigkeiten verringern, aber neue Konzentrationen und höhere Kosten erzeugen. Mehrere Lieferländer sind keine echte Diversifikation, wenn alle denselben kritischen Vorlieferanten nutzen.',
  'Deglobalisierung ist nicht gleichbedeutend mit sofortiger vollständiger Abschottung. Fragmentierung kann selektiv verlaufen: Technologiegüter werden stärker beschränkt, während andere Handelsbeziehungen wachsen. Die Analyse benötigt Produkt-, Finanzierungs- und Wertschöpfungsdaten statt nur den Anteil ausländischer Umsätze.'
 ]),
 S('archetypes','4. Vier Verhaltensmuster als Analysehilfen','a b',[
  T(['Idealtyp','Grundidee','Wichtiger Zielkonflikt'],[
   ['Autarkie','Streben nach Selbstversorgung und geringer externer Abhängigkeit.','Mehr Kontrolle kann mit weniger Spezialisierung und höherem Ressourcenbedarf einhergehen.'],
   ['Hegemonie','Eine dominante Macht prägt Regeln und Abhängigkeiten nach ihren Interessen.','Integration kann Zugang bieten, aber asymmetrische Verhandlungsmacht schaffen.'],
   ['Bilateralismus','Gezielte Zusammenarbeit über Beziehungen zwischen jeweils zwei Partnern.','Vereinbarungen können passgenau sein, aber ein unübersichtliches Netz verschiedener Regeln erzeugen.'],
   ['Multilateralismus','Zusammenarbeit mehrerer Akteure über gemeinsame Regeln und Institutionen.','Breite Verlässlichkeit wird gegen Abstimmungsaufwand und begrenzte Einzelautonomie abgewogen.']
  ],'Die Begriffe beschreiben vereinfachte Muster. Ein Land kann je nach Thema Elemente mehrerer Muster verfolgen.'),
  'Für eine Anlageentscheidung ist die pauschale Zuordnung weniger wichtig als der konkrete Mechanismus: Welche Regel könnte geändert werden, wer kann diese Änderung durchsetzen und welche Exposition trifft sie? Hegemonie ist beispielsweise nicht automatisch das Ende des Handels; sie kann sich gerade über bestehende Handels- und Finanzverbindungen entfalten.',
  'Ein Analyst sollte eine beobachtete Handlung nicht aus einem Etikett heraus vorhersagen und das Etikett anschließend durch dieselbe Handlung bestätigen. Besser sind unabhängige Indikatoren, alternative Erklärungen und klar benannte Bedingungen, unter denen die Einschätzung revidiert würde.'
 ]),
 S('institutions','5. IMF, Weltbank und WTO erfüllen verschiedene Funktionen','c',[
  T(['Institution','Schwerpunkt und typische Arbeit','Häufige Verwechslung'],[
   ['International Monetary Fund / IMF','Makroökonomische und finanzielle Stabilität; Überwachung, Beratung, Kapazitätsaufbau und Finanzierung bei Zahlungsbilanzproblemen.','Kein gewöhnlicher Fonds, der Privatanlegern eine Aktienrendite garantiert.'],
   ['Weltbank','Langfristige Entwicklung und Armutsreduktion durch Finanzierung, Wissen und Unterstützung von Reformen oder Projekten.','Nicht einfach eine Zentralbank, die allen Ländern einen gemeinsamen Leitzins vorgibt.'],
   ['World Trade Organization / WTO','Rahmen für Handelsvereinbarungen, Verhandlungen, Überwachung und Verfahren zu Handelsstreitigkeiten.','Keine internationale Geschäftsbank für die Finanzierung einzelner Importe.']
  ],'Die Institutionen können zusammenarbeiten, sind aber weder identisch noch allgemeine Garantien gegen Länder- und Vertragsrisiken.'),
  X('Die passende Institution am Problem erkennen','Ein Land hat Schwierigkeiten, fällige internationale Zahlungen zu leisten. Ein anderes plant ein langfristiges Wasserversorgungsprojekt. Zwei Handelspartner streiten über eine zugesagte Handelsregel.',[
   'Makroökonomische Stabilisierung und Zahlungsbilanzfinanzierung gehören typischerweise zum Aufgabenfeld des IMF.',
   'Langfristige Entwicklungsfinanzierung und Projektexpertise passen zur Weltbank. Zugang und Bedingungen müssen trotzdem im konkreten Programm geprüft werden.',
   'Der Streit über Handelsverpflichtungen betrifft den institutionellen Rahmen der WTO. Die Existenz eines Verfahrens sagt noch nicht, wann oder wie eine bestimmte Streitigkeit praktisch gelöst wird.'
  ],'Die Zuordnung richtet sich nach Aufgabe und Mandat, nicht nur danach, dass alle drei mit internationalen Beziehungen zu tun haben.'),
  '„Weltbank“ bezeichnet im engeren institutionellen Sinn IBRD und IDA; die Weltbankgruppe umfasst weitere Organisationen mit eigenen Aufgaben. Für Level-I-Grundfragen steht die Abgrenzung zur makroökonomischen Stabilisierung des IMF und zum handelsrechtlichen Rahmen der WTO im Vordergrund.'
 ]),
 S('instruments','6. Politische Instrumente in wirtschaftliche Kanäle übersetzen','e',[
  T(['Instrumentengruppe','Kooperative oder begrenzende Beispiele','Möglicher wirtschaftlicher Kanal'],[
   ['Diplomatie und sicherheitspolitische Maßnahmen','Vereinbarungen, Sicherheitszusagen, Verhandlungen oder militärische Druckmittel.','Versorgungswahrscheinlichkeit, Standortwahl, Versicherungs- und Transportkosten.'],
   ['Wirtschaftliche Maßnahmen','Gemeinsame Standards, Handelsabkommen, Zölle, Quoten, Exportbeschränkungen oder Verstaatlichung.','Absatzmöglichkeiten, Inputpreise, Eigentumsrechte und Investitionsanreize.'],
   ['Finanzielle Maßnahmen','Zugang zu Kapital und Währungsmärkten, Zahlungsbeschränkungen oder Begrenzung ausländischer Investitionen.','Finanzierungskosten, Refinanzierungsfähigkeit, Zahlungsabwicklung und Repatriierung.']
  ],'Die Wirkung hängt von Reichweite, Durchsetzung, Ausweichmöglichkeiten und Gegenreaktionen ab. Die Tabelle beschreibt ökonomische Kategorien, keine aktuelle Rechtslage.'),
  'Ein Importzoll kann Kosten eines heimischen Importeurs erhöhen und zugleich einen heimischen Konkurrenten begünstigen. Eine Exportbeschränkung für einen kritischen Input wirkt über Verfügbarkeit und Ersatzmöglichkeiten. Eine finanzielle Beschränkung kann einen wirtschaftlich werthaltigen Anspruch vorübergehend oder dauerhaft schwer realisierbar machen.',
  'Mehrere Instrumente können gleichzeitig eingesetzt werden. Der Analyst prüft deshalb nicht nur die direkte Maßnahme, sondern auch Finanzierung, Logistik und rechtlich zulässige Abwicklung. Eine theoretisch positive Rendite ist für ein Portfolio nicht nutzbar, wenn der Vermögenswert nicht rechtmäßig gehalten, übertragen oder abgerechnet werden kann.'
 ]),
 S('risk-types','7. Ereignisrisiko, exogener Schock und thematisches Risiko','d',[
  T(['Risikotyp','Zeitliche Struktur','Fiktives Beispiel'],[
   ['Event Risk / Ereignisrisiko','Der Termin ist bekannt, Ergebnis oder Folgen sind unsicher.','Eine bevorstehende Abstimmung über ein Handelsabkommen.'],
   ['Exogenous Risk / exogenes Risiko','Ein unerwarteter Schock verändert Rahmenbedingungen rasch.','Eine überraschende Grenzschließung unterbricht Lieferungen.'],
   ['Thematic Risk / thematisches Risiko','Ein längerfristiger bekannter Problemkomplex entwickelt sich über Zeit.','Zunehmende technologische Fragmentierung und anhaltende Cyberbedrohung.']
  ],'Ein längerfristiges Thema kann einen plötzlichen Schock hervorbringen; Kategorien und Wirkungshorizonte sind deshalb nicht vollkommen trennscharf.'),
  'Geopolitisches Risiko ist breiter als militärischer Konflikt. Es betrifft auch Änderungen grenzüberschreitender Kooperation, Eigentumsrechte, finanzieller Verbindungen und wirtschaftlicher Regeln. Die relevante Unsicherheit lautet nicht nur „tritt etwas ein?“, sondern auch „über welchen Kanal und mit welcher Geschwindigkeit wirkt es?“. ',
  'Likelihood beschreibt die angenommene Eintrittswahrscheinlichkeit, Velocity die Geschwindigkeit der Wirkung, Impact deren Größe und Art. Eine kleine erwartete Verlustsumme kann mit einem existenzbedrohenden seltenen Liquiditätsbedarf vereinbar sein. Deshalb werden diese Dimensionen getrennt dokumentiert.'
 ]),
 S('exposures','8. Ein Ländername ist noch keine Expositionsanalyse','e f',[
  X('Zwei Unternehmen im selben Index, unterschiedliche politische Risiken','Maschinenbauer A produziert im Inland, bezieht aber einen nicht kurzfristig ersetzbaren Controller aus Region X. Dienstleister B erzielt dort Umsatz, kann seine Leistung jedoch aus mehreren Standorten anbieten.',[
   'A kann trotz geringer direkter Auslandsumsätze von einem Inputausfall stark betroffen sein. Ein Controller mit kleinem Kostenanteil kann den Verkauf einer viel teureren ganzen Maschine verhindern.',
   'Bei B sind Kunden- und Zahlungsrisiko möglicherweise wichtiger als physische Lieferfähigkeit. Ein Umsatzanteil von 10 % bedeutet nicht zwingend einen Gewinnverlust von genau 10 %, weil fixe Kosten und Margen unterschiedlich sind.',
   'Beide benötigen eine zusätzliche Analyse von Währungen, Verträgen, finanziellen Gegenparteien und Ersatzmöglichkeiten. Börsenplatz und Konzernsitz erfassen diese Abhängigkeiten nur unvollständig.'
  ],'Wirtschaftliche Exposition folgt den Zahlungs- und Produktionsketten, nicht ausschließlich der rechtlichen Adresse.'),
  F('\\Delta\\Pi\\approx q\\,m-F_A','Ein einfaches operatives Szenario verbindet zusätzlich lieferbare Stückzahl und Stückdeckungsbeitrag mit Anpassungskosten. Es ist keine vollständige Unternehmensbewertung.',[['\\Delta\\Pi','Zusätzlicher operativer Ergebnisbeitrag im Szenario.'],['q','Durch die Anpassung zusätzlich lieferbare Einheiten.'],['m','Deckungsbeitrag je zusätzlicher Einheit nach variablen Kosten.'],['F_A','Zusätzliche fixe Anpassungskosten der betrachteten Periode.']]),
  'Ermöglicht eine alternative Beschaffung 200 zusätzliche Lieferungen mit je 3.000 Deckungsbeitrag und kostet sie 150.000 fixe Umstellung, verbleiben 450.000 zusätzlicher Ergebnisbeitrag. Der Beschaffungspreis allein hätte diesen Nutzen nicht gezeigt. Dauerhafte Investitionszahlungen, Steuern und Finanzierung sind für einen Kapitalwert zusätzlich nötig.'
 ]),
 S('scenarios','9. Szenarien rechnen, ohne Scheingenauigkeit zu erzeugen','d f',[
  F('E[L]=\\sum_{s=1}^{n}p_sL_s,\\qquad \\sum_{s=1}^{n}p_s=1','Ein erwarteter Verlust gewichtet die Verluste ausdrücklich definierter, sich gegenseitig ausschließender und zusammen vollständiger Szenarien. Die Summe ist nur so belastbar wie Szenarien und Wahrscheinlichkeiten.',[['E[L]','Erwarteter Verlust über den betrachteten gemeinsamen Horizont.'],['p_s,L_s','Wahrscheinlichkeit und Verlust im Szenario s.'],['s,n','Szenarioindex und Anzahl der Szenarien.']]),
  X('Gleicher Erwartungswert, anderes Risiko','Position A verliert mit 2 % Wahrscheinlichkeit 80 und sonst null. Position B verliert mit 20 % Wahrscheinlichkeit 8 und sonst null.',[
   'Beide erwarteten Verluste betragen 1,6. A besitzt aber einen zehnmal größeren Verlust im Schadensfall.',
   'Ein Portfolio mit kurzfristiger Zahlungspflicht von 50 könnte den seltenen A-Schaden anders verkraften als den B-Schaden. Erwartungswert, Liquidität und Verlusttragfähigkeit beantworten verschiedene Fragen.',
   'Aus identischen Erwartungswerten folgt auch keine identische Risikoprämie: Entscheidend sind unter anderem die Zustände, in denen der Verlust eintritt, und sein Zusammenhang mit dem übrigen Portfolio.'
  ],'Ein Erwartungswert ist kein hinreichender Risikobericht und keine Zusage eines typischen Einzelergebnisses.'),
  'Die Annahme einer Eintrittswahrscheinlichkeit kann auf Szenarioarbeit beruhen, ohne statistisch kalibriert zu sein. In diesem Fall werden Bandbreiten und Sensitivitäten gezeigt. Scheingenauigkeit durch viele Dezimalstellen verbessert die Evidenz nicht.'
 ]),
 S('mitigation','10. Resilienz kostet etwas — Nichtstun ebenfalls','e f',[
  X('Zweite Bezugsquelle gegen Unterbrechungsrisiko abwägen','Ohne zusätzliche Vorsorge beträgt der Verlust bei einer Unterbrechung 50, sonst null. Eine vorbereitete Ersatzquelle kostet sicher 2 und reduziert den zusätzlichen Unterbrechungsverlust auf 20. Die Unterbrechungswahrscheinlichkeit bleibt p.',[
   F('E[L_0]=50p,\\qquad E[L_1]=2+20p','Die sichere Vorsorgezahlung wird in jedem Szenario angesetzt, nicht nur im Schadensfall.',[['E[L_0],E[L_1]','Erwartete Gesamtkosten ohne und mit Vorsorge.'],['p','Unterbrechungswahrscheinlichkeit im gemeinsamen Planungshorizont.']]),
   F('2+20p<50p\\quad\\Longleftrightarrow\\quad p>2/30\\approx6{,}6667\\%','Oberhalb der Schwelle senkt die Ersatzquelle in dieser reinen Erwartungskostenrechnung die Gesamtkosten.',[['p','Unterbrechungswahrscheinlichkeit; die übrigen Zahlen sind vorgegebene Kosten in gleichen Geldeinheiten.']]),
   'Bei p = 10 % betragen die erwarteten Kosten 5 ohne und 4 mit Vorsorge. Bei p = 2 % sind es 1 gegenüber 2,4. Die gleiche Maßnahme ist je nach Annahme unterschiedlich attraktiv.',
   'Ein Unternehmen mit sehr geringer Verlusttragfähigkeit kann Vorsorge auch unterhalb dieser Erwartungskostenschwelle wünschen. Umgekehrt würde eine ebenfalls ausfallende Ersatzquelle den unterstellten Nutzen verringern.'
  ],'Die Rechnung macht die Annahme sichtbar, von der die Entscheidung abhängt; sie ersetzt keine Prüfung der tatsächlichen Lieferfähigkeit.'),
  G({id:'resilience-cost',title:'Die Attraktivität von Vorsorge hängt von der Risikoeinschätzung ab',
   caption:'Eigenes Einperiodenmodell: Verlust ohne Vorsorge 50 im Schadensfall. Vorsorge kostet sicher 2 und begrenzt den zusätzlichen Schaden auf 20. Keine Diskontierung oder Preisrückwirkung.',
   reading:'Die Linien schneiden sich bei rund 6,67 % Eintrittswahrscheinlichkeit und erwarteten Kosten 3,33. Unterhalb davon ist Vorsorge nach dem Erwartungswert teurer; oberhalb günstiger. Tail Risk und Liquiditätsbedarf bleiben zusätzliche Entscheidungskriterien.',
   plot:{x:[0,30],y:[0,16],xLabel:'Angenommene Unterbrechungswahrscheinlichkeit (%)',yLabel:'Erwartete Gesamtkosten',series:[
    {name:'Ohne zusätzliche Vorsorge',points:[[0,0],[30,15]]},
    {name:'Mit vorbereiteter Ersatzquelle',points:[[0,2],[30,8]]}
   ],marks:[{x:20/3,y:10/3,label:'Kostengleichheit',dx:12,dy:-18,guides:true}]}}),
  'Portfoliomaßnahmen können Positionsgrößen, Liquiditätsreserven, Diversifikation oder passende Absicherung betreffen. Ein Währungshedge kann den Wechselkurskanal begrenzen, beseitigt aber nicht automatisch einen Produktionsausfall oder eine Beschränkung der Übertragbarkeit von Vermögenswerten.'
 ]),
 S('signposts','11. Beobachtbare Signale und Revisionsregeln festlegen','d f',[
  T(['Szenarioannahme','Beobachtbares Signal / Signpost','Was nach einem Signal zu prüfen ist'],[
   ['Ein Lieferengpass bleibt kurz.','Lieferzeiten, Auslastung alternativer Routen und tatsächliche Lagerreichweite.','Ändert sich Dauer oder nur die Berichterstattung über das gleiche Ereignis?'],
   ['Eine angekündigte Regel wird nicht umgesetzt.','Gesetzgebungsschritte, Vollzugsfristen und veröffentlichte Ausführungsregeln.','Wie konkret und rechtlich wirksam ist die neue Information?'],
   ['Finanzierung bleibt zugänglich.','Tatsächliche Kreditstandards, Fälligkeiten, Spreads und Abwicklungsfähigkeit.','Sind höhere Preise oder bereits Mengen- und Zugangsprobleme erkennbar?'],
   ['Ersatzquellen sind unabhängig.','Herkunft kritischer Vorprodukte und gemeinsame Transport-/Zahlungsinfrastruktur.','Besteht eine verdeckte gemeinsame Engstelle?']
  ],'Ein Signal dient der Aktualisierung eines begründeten Szenarios, nicht als mechanischer Kauf- oder Verkaufsbefehl.'),
  'Ein gutes Monitoring legt im Voraus fest, was die Einschätzung ändern würde. Sonst besteht die Gefahr, jede neue Nachricht nur zur Bestätigung der ursprünglichen Ansicht zu verwenden. Die Zahl ähnlicher Schlagzeilen ist außerdem kein unabhängiger Mehrfachbeleg, wenn alle dieselbe Ursprungsquelle wiederholen.',
  'Ein veröffentlichtes Ereignis und seine Marktüberraschung sind zu unterscheiden. Wenn ein negatives Ergebnis bereits mit hoher Wahrscheinlichkeit eingepreist war, kann die unmittelbare Marktreaktion klein sein. Eine weniger schlechte Entwicklung als erwartet kann sogar mit steigenden Preisen zusammenfallen.'
 ]),
 S('valuation','12. Von der politischen Analyse zu einer konsistenten Anlagebeurteilung','f',[
  T(['Bewertungsbestandteil','Möglicher geopolitischer Einfluss','Kontrollfrage'],[
   ['Cashflows','Absatzverlust, höhere Inputkosten, Unterbrechung oder Anpassungsinvestition.','Ist der Kanal bereits in Umsatz, Marge oder Szenariogewichten erfasst?'],
   ['Diskontierung und Risikoprämie','Geänderte systematische Risiken, Zinsen oder verlangte Entschädigung.','Wird derselbe erwartete Verlust noch einmal pauschal abgezogen?'],
   ['Liquidität und Handelbarkeit','Breitere Spreads, eingeschränkte Märkte oder Abwicklungsprobleme.','Ist ein theoretischer Modellwert tatsächlich realisierbar?'],
   ['Portfoliowirkung','Gemeinsame Expositionen und veränderte Abhängigkeiten.','Sind Positionen wirklich verschieden oder teilen sie denselben Risikotreiber?']
  ],'Die Bewertung muss erwartete Cashflowverluste und Entschädigung für verbleibendes Risiko konsistent behandeln; sie sind nicht einfach dieselbe Größe.'),
  'Ein Bericht trennt deshalb Ausgangsexposition, Szenario, angenommene Wahrscheinlichkeit, Wirkungskanal, zeitlichen Verlauf, mögliche Handlung und die Kosten dieser Handlung. Der nächste Schritt ist eine Prüfung gegen Mandat, Risikotragfähigkeit und Umsetzbarkeit.',
  'Weder „im Ausland“ noch „im Inland“ ist ein verlässliches Risikosiegel. Entscheidend sind die konkreten Abhängigkeiten und die bereits bezahlten Preise. Geopolitische Analyse erweitert die Bewertungs- und Risikologik; sie ersetzt sie nicht durch eine allgemeine politische Meinung.'
 ])
],related:[{unit:'cycles',section:'credit-cycle',label:'Finanzielle Rückkopplungen von realen Schocks verstehen'},{unit:'monetary',section:'transmission',label:'Zins-, Kredit- und Wechselkurskanäle unterscheiden'},{unit:'distributions',section:'bayes',label:'Neue Information und bedingte Wahrscheinlichkeiten'},{unit:'portfolio-math',section:'diversification-figure',label:'Gemeinsame Risiken hinter mehreren Positionen'}],
 sources:[
 {title:'CFA Institute: Lernzielkatalog Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=6'},
 {title:'CFA Institute: Introduction to Geopolitics',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/introduction-geopolitics'},
 {title:'IMF: The IMF and the World Bank',url:'https://www.imf.org/en/about/factsheets/sheets/2022/imf-world-bank-new'},
 {title:'World Bank Group: Who We Are',url:'https://www.worldbank.org/ext/en/who-we-are'},
 {title:'WTO: What We Do',url:'https://www.wto.org/english/thewto_e/whatis_e/what_we_do_e.htm'}
 ],review:{status:'draft',date:'2026-09-24',note:'Eigenständige Lieferketten-, Szenario- und Vorsorgefälle; Typologien als Analysehilfen, Wahrscheinlichkeiten ausdrücklich hypothetisch.'}};
