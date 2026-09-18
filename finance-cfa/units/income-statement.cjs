const {F,T,X,S}=require('../author.cjs');
module.exports={
 id:'income-statement',
 intro:[
  'Eine Gewinnrechnung ordnet wirtschaftliche Leistung und Ressourcenverbrauch einer Periode zu. Sie ist deshalb weder ein Kontoauszug noch unmittelbar eine Unternehmensbewertung. Für eine belastbare Analyse müssen drei Fragen getrennt beantwortet werden: Welche Leistung ist tatsächlich erbracht? Welche Kosten gehören zu dieser Leistung oder Periode? Welcher Anteil des Ergebnisses entfällt auf eine Stammaktie?',
  'Dieser Lernbaustein verbindet Umsatz- und Aufwandsabgrenzung mit Ergebnisqualität, vergleichbaren Margen und vollständigen EPS-Rechnungen. Bearbeite zuerst die wirtschaftliche Transaktion, dann den Buchungseffekt und zuletzt die Kennzahl. Andernfalls lässt sich ein höheres EPS leicht mit einem besseren Geschäft verwechseln.'
 ],
 sections:[
 S('revenue','1. Umsatz: Leistung, Zahlungsanspruch und Kontrolle','a',[
  'Bei einem Kundenvertrag werden Vertrag, einzelne Leistungsverpflichtungen, Transaktionspreis, Preiszuordnung und Erfüllung untersucht. Eine Unterschrift schafft allein noch keinen Umsatz. Eine Vorauszahlung schafft häufig zunächst eine Verpflichtung. Erst wenn die zugesagte Kontrolle über die Ware oder Dienstleistung übertragen wird, entsteht der zugeordnete Erlös. Bei laufenden Dienstleistungen kann das über einen Zeitraum geschehen; bei einer Warenlieferung häufig zu einem bestimmten Zeitpunkt.',
  'Mehrere versprochene Leistungen werden getrennt betrachtet, wenn die einschlägigen Kriterien für eigenständige Leistungen erfüllt sind. Der Paketpreis wird anhand relativer Einzelverkaufspreise zugeordnet. Ein Rabatt darf nicht einfach willkürlich der späteren Leistung zugerechnet werden, um den heutigen Umsatz zu erhöhen. Variable Gegenleistungen, Rückgaben, Finanzierungskomponenten sowie Prinzipal- oder Agentenstellung erfordern zusätzliche Beurteilungen.',
  F('R_j=TP\\frac{SSP_j}{\\sum_{k=1}^{m}SSP_k}','Der Paketpreis wird im Verhältnis der Einzelverkaufspreise auf die Leistungen verteilt.',[
   ['R_j','Der Leistung j zugeordneter Erlösbetrag; Geldbetrag, noch keine Aussage über dessen Erfassungszeitpunkt.'],
   ['TP','Transaktionspreis des Gesamtpakets.'],
   ['SSP_j','Einzelverkaufspreis der eigenständigen Leistung j.'],
   ['j,k,m','j bezeichnet die betrachtete Leistung; k läuft über alle m Leistungen im Paket.']
  ]),
  X('Ein Paket mit sofortiger und späterer Leistung','Ein Gerät kostet einzeln 900 €, ein zwölfmonatiger Service 300 €. Das Paket wird für 1.080 € verkauft und sofort bezahlt. Das Gerät wird sofort geliefert, der Service gleichmäßig erbracht. Keine Steuer oder Finanzierungskomponente.',[
   'Die Summe der Einzelverkaufspreise beträgt 1.200 €. Das Gerät repräsentiert 75 %, der Service 25 % dieses Werts.',
   F('R_G=1080\\frac{900}{1200}=810,\\qquad R_S=1080\\frac{300}{1200}=270','810 € entfallen auf die gelieferte Ware, 270 € auf den noch zu erbringenden Service.',[['R_G','Geräteerlös in Euro.'],['R_S','Dem Service zugeordneter Gesamtbetrag in Euro.']]),
   'Bei Lieferung werden 810 € als Erlös erfasst. Die restlichen 270 € bleiben zunächst Vertragsverbindlichkeit. Jeden vollständig erbrachten Servicemonat werden 22,50 € aufgelöst.',
   F('R_{1}=810+\\frac{270}{12}=832{,}50,\\qquad L_{1}=270-22{,}50=247{,}50','Nach einem Servicemonat sind 832,50 € verdient; 247,50 € betreffen ausstehende Leistung.',[['R_1','Bis zum Ende des ersten Servicemonats kumulierter Erlös.'],['L_1','Verbleibende Vertragsverbindlichkeit zu diesem Zeitpunkt.']])
  ],'Die Einzahlung von 1.080 € ist in allen Schritten dieselbe. Der Leistungsverlauf bestimmt, wann welcher Teil davon zum Umsatz wird.'),
  'Analytisch sind Forderungen, Vertragsvermögenswerte und Vertragsverbindlichkeiten gemeinsam mit Umsatz zu lesen. Umsatzwachstum bei stark steigenden Forderungstagen kann ein Warnsignal sein, beweist aber noch keine Manipulation. Eine Expansion, andere Vertragsbedingungen oder saisonale Effekte können dieselbe Beobachtung erklären.'
 ]),
 S('expenses','2. Aufwand sofort erfassen oder über die Nutzung verteilen','b',[
  'Auszahlung und Aufwand unterscheiden sich, wenn eine Zahlung einen künftigen wirtschaftlichen Nutzen betrifft. Bei erfüllten Ansatzkriterien wird ein Vermögenswert gebucht und sein Verbrauch später über Abschreibung oder Umsatzkosten erfasst. Andernfalls wird die Ausgabe sofort zum Aufwand. Aktivierung ist damit keine zusätzliche Einnahme, sondern eine andere zeitliche Zuordnung.',
  'Der Vergleich muss Gewinn und Bilanz gleichzeitig berücksichtigen. Aktivierung erhöht zunächst beide, senkt aber bei gleicher Umsatzhöhe den Vermögensumschlag. In Folgeperioden entstehen zusätzliche Abschreibungen. Ein oberflächlicher Vergleich der heutigen Gewinnmarge kann deshalb eine Bilanzierungsdifferenz als operative Überlegenheit missverstehen.',
  X('Derselbe Cashabfluss, andere Ergebnisverteilung','Zwei analytische Varianten einer Ausgabe von 120 werden verglichen. Variante A erfasst sofort Aufwand. Variante B erfüllt die Ansatzkriterien und wird über drei Jahre ohne Restwert linear abgeschrieben. Volles Nutzungsjahr; Steuern werden isolierend weggelassen.',[
   'In A beträgt der Aufwand im ersten Jahr 120; es bleibt kein zugehöriger Vermögenswert.',
   F('D=\\frac{120}{3}=40,\\qquad BV_1=120-40=80','Die aktivierte Variante zeigt 40 Jahresabschreibung und 80 Restbuchwert.',[['D','Jährliche lineare Abschreibung in Geldeinheiten.'],['BV_1','Buchwert am Ende des ersten vollen Nutzungsjahrs.']]),
   'In B liegt der Gewinn im ersten Jahr um 80 höher. In den folgenden beiden Jahren liegt er jeweils um 40 niedriger als in A. Über die gesamte Nutzungsdauer wird derselbe Betrag von 120 verbraucht.'
  ],'Ohne Zeitwert, Steuer- oder Restwertunterschied erzeugt die Rechnungslegungswahl keinen zusätzlichen Cashüberschuss. Für einen Vergleich sind auch künftige Perioden anzupassen.'),
  'Nicht jede Ausgabe mit erhofftem Zukunftsnutzen darf aktiviert werden. Forschung, Entwicklung, Werbung und Software unterliegen unterschiedlichen Regelungen. Ansatzkriterien und das genannte Regelwerk haben Vorrang vor dem Wunsch nach einer glatten Gewinnentwicklung. Schätzungen zu Nutzungsdauer, Restwert und Einbringlichkeit müssen zusätzlich auf Plausibilität geprüft werden.'
 ]),
 S('nonrecurring','3. Dauerhafte Ertragskraft, Sondereffekte und Änderungen','c',[
  'Ein einmaliger Gewinn aus dem Verkauf eines Gebäudes kann den Nettogewinn erhöhen, ohne dass mehr Produkte verkauft wurden. Eine Abschreibung nach einer Fehlakquisition kann das Ergebnis belasten, obwohl die zugehörige Auszahlung Jahre zurückliegt. Für die Prognose wird zwischen wiederkehrender Leistung, ungewöhnlichen Vorgängen und aufgegebenen Geschäftsbereichen unterschieden. Die Anpassung muss begründet und nach Steuern konsistent sein.',
  'Ein als „einmalig“ bezeichnetes Restrukturierungsprogramm, das fast jedes Jahr stattfindet, ist wirtschaftlich nicht automatisch einmalig. Ebenso ist aktienbasierte Vergütung nicht kostenlos, nur weil sie zunächst ohne Auszahlung erfolgt. Bereinigtes Ergebnis ist nur dann nützlich, wenn die Überleitung zum berichteten Ergebnis sichtbar bleibt und positive wie negative Sondereffekte symmetrisch behandelt werden.',
  T(['Vorgang','Typische zeitliche Behandlung','Analytische Frage'],[
   ['Neue Schätzung einer Restnutzungsdauer','Künftige Perioden auf neuer Schätzbasis; keine bloße Rückrechnung aller Vorjahre','Ist eine neue Information eingetreten oder soll das Ergebnis geglättet werden?'],
   ['Änderung einer Rechnungslegungsmethode','Grundsätzlich rückwirkende Vergleichbarkeit, soweit Regel und Durchführbarkeit dies verlangen','Welche Vorjahreswerte wurden angepasst?'],
   ['Wesentlicher Vorperiodenfehler','Berichtigung der betroffenen Vergleichsinformation nach dem Regelwerk','Welche Kennzahlen und Trends sind neu zu berechnen?'],
   ['Aufgegebener Geschäftsbereich','Gesonderte Darstellung der einschlägigen Nachsteuerergebnisse','Welcher Teil steht künftig nicht mehr zur Verfügung?']
  ],'Methodenwechsel, neue Schätzung und Fehlerkorrektur sind unterschiedliche Ereignisse.'),
  X('Ein Gewinnsprung ohne entsprechendes operatives Wachstum','Der Nettogewinn steigt von 40 auf 70. Im neuen Jahr ist ein Veräußerungsgewinn von 40 vor Steuern enthalten; der zugehörige Steuersatz beträgt 25 %. Sonst keine Anpassungen.',[
   F('G_{\\mathrm{netto}}=40(1-0{,}25)=30,\\qquad NI_{\\mathrm{bereinigt}}=70-30=40','Der nach Steuern verbleibende Sondereffekt erklärt den gesamten beobachteten Anstieg.',[['G_{\\mathrm{netto}}','Nachsteuer-Veräußerungsgewinn.'],['NI_{\\mathrm{bereinigt}}','Um genau diesen Effekt bereinigter Nettogewinn.']]),
   'Der berichtete Gewinn steigt um 75 %. Der um diesen einzelnen Effekt bereinigte Gewinn bleibt unverändert. Weitere operative Änderungen sind damit noch nicht ausgeschlossen.'
  ],'Eine Anpassung erklärt eine Ursache. Sie ist keine pauschale Erlaubnis, alle unangenehmen Kosten aus dem Ergebnis zu entfernen.')
 ]),
 S('basic-eps','4. Basic EPS: welchen Gewinn auf welche Aktien verteilen?','d',[
  'Basic Earnings per Share verteilt den den Stammaktionären zurechenbaren Periodengewinn auf die zeitlich gewichtete Zahl tatsächlich ausstehender Stammaktien. Vom maßgeblichen Gewinn werden die vorrangigen Dividendenansprüche der Vorzugsaktionäre abgezogen. Bei kumulativen Vorzugsaktien zählt der Anspruch der Periode unabhängig von der Erklärung; bei nicht kumulativen Vorzugsaktien sind grundsätzlich die erklärten Dividenden maßgeblich. Dividenden an Stammaktionäre werden im EPS-Zähler nicht abgezogen.',
  'Eine gegen neue Mittel ausgegebene Aktie zählt erst ab dem Zeitpunkt, ab dem diese Mittel zur Verfügung stehen. Zurückgekaufte eigene Aktien zählen danach nicht mehr als ausstehend. Die Aktienzahl am Bilanzstichtag bildet diese Zeitgewichtung nicht ab. Aktiensplits und Gratisaktien ändern dagegen die Stückelung ohne einen entsprechenden Zufluss neuer Ressourcen: Die vergleichbare Aktienbasis wird rückwirkend angepasst.',
  F('EPS_B=\\frac{NI-PD}{N_W},\\qquad N_W=\\sum_{j=1}^{m}N_j\\frac{d_j}{D}','Der Zähler betrifft Stammaktionäre, der Nenner die während der Periode verfügbare Aktienbasis.',[
   ['EPS_B','Basic EPS, Geld je Stammaktie für die betrachtete Berichtsperiode.'],
   ['NI','Für diese Berechnung maßgeblicher Gewinn nach Steuern, vor Abzug der relevanten Vorzugsdividenden.'],
   ['PD','Der Periode zuzurechnende Vorzugsdividenden.'],
   ['N_W','Gewichtete durchschnittliche Zahl ausstehender Stammaktien.'],
   ['N_j','In Teilperiode j ausstehende Aktienzahl, konsistent um Splits angepasst.'],
   ['d_j,D,m','d_j ist die Dauer der Teilperiode, D die Dauer der gesamten Periode in derselben Zeiteinheit; m ist die Zahl der Teilperioden.']
  ]),
  X('Emission, Rückkauf und Split gemeinsam','Jahresbeginn: 1.000.000 Aktien. Am 1. April werden 400.000 neue Aktien gegen Cash ausgegeben. Am 1. Oktober werden 200.000 zurückgekauft. Am 1. November erfolgt ein Split 2:1. Gewinn 5.200.000 €, relevante Vorzugsdividenden 200.000 €. Zur Vereinfachung Monatsgewichtung.',[
   F('N_W^{\\mathrm{vor\\ Split}}=1000000+400000\\frac9{12}-200000\\frac3{12}=1250000','Emission und Rückkauf zählen nur für die verbleibenden Monate.',[['N_W^{\\mathrm{vor\\ Split}}','Gewichtete durchschnittliche Aktienzahl in der alten Stückelung.']]),
   F('N_W=2\\cdot1250000=2500000,\\qquad EPS_B=\\frac{5200000-200000}{2500000}=2','Der Split verdoppelt die gesamte vergleichbare Aktienbasis. Basic EPS beträgt 2 €.',[['N_W','Gewichtete Aktienzahl in der neuen Stückelung.'],['EPS_B','Basic EPS in Euro je Aktie.']]),
   'Die tatsächliche Jahresendzahl ist 2.400.000. Sie ist für die Periodenrechnung der falsche Nenner. Auch den Split nur mit zwei Monaten zu gewichten wäre falsch, weil durch die reine Stückelung keine neuen Ressourcen zufließen.'
  ],'Ein Split halbiert unter sonst gleichen Bedingungen EPS und Aktienkurs. Er verdoppelt nicht die wirtschaftliche Ertragskraft eines Eigentümers.')
 ]),
 S('dilution','5. Optionen und Wandelanleihen: Zähler und Nenner zusammen ändern','d',[
  'Diluted EPS untersucht potenzielle Stammaktien, wenn ihre Berücksichtigung die maßgebliche EPS-Größe verschlechtert. Es ist kein Szenario, in dem man wahllos alle denkbaren Aktien zum Nenner addiert. Die angenommene Umwandlung kann gleichzeitig Zinsaufwand oder Vorzugsdividenden beseitigen. Deshalb müssen beide Seiten des Bruchs angepasst werden.',
  'Bei Optionen und Warrants unterstellt die vereinfachte Treasury-Stock-Rechnung eine Ausübung und einen Aktienrückkauf mit den Erlösen zum durchschnittlichen Marktpreis der Periode. Nur die netto zusätzlich entstehenden Aktien erhöhen den Nenner. Dies ist eine Rechenannahme für EPS und keine Behauptung, dass der Emittent tatsächlich zurückkauft. Bei komplexen Vergütungsplänen können weitere angenommene Erlöse relevant sein.',
  F('\\Delta N_{\\mathrm{opt}}=N_{\\mathrm{opt}}\\left(1-\\frac{X}{\\overline P}\\right),\\qquad \\overline P>X','Nur bei einem durchschnittlichen Kurs oberhalb des Ausübungspreises entstehen hier verwässernde zusätzliche Aktien.',[
   ['\\Delta N_{\\mathrm{opt}}','Zusätzliche gewichtete Aktien aus der vereinfachten Optionsrechnung.'],
   ['N_{\\mathrm{opt}}','Gewichtete Anzahl ausübbarer Optionen; hier eine Aktie je Option.'],
   ['X','Ausübungspreis je Aktie.'],
   ['\\overline P','Durchschnittlicher Aktienmarktpreis der Berichtsperiode; nicht automatisch der Schlusskurs.']
  ]),
  'Bei einer Wandelanleihe wird die Umwandlung grundsätzlich zu Periodenbeginn oder, bei späterer Emission, ab diesem späteren Zeitpunkt unterstellt. Der dann entfallende Zins erhöht den Gewinn nach Abzug seines entfallenden Steuervorteils. Bei wandelbaren Vorzugsaktien wird der entsprechende Dividendenabzug rückgängig gemacht; Vorzugsdividenden sind kein steuerlich abzugsfähiger Fremdkapitalzins.',
  F('EPS_D=\\frac{NI-PD+I(1-\\tau)+PD_{\\mathrm{conv}}}{N_W+\\Delta N_{\\mathrm{opt}}+N_{\\mathrm{bond}}+N_{\\mathrm{pref}}}','Diese gemeinsame Rechnung enthält ausschließlich nach der Verwässerungsprüfung einzubeziehende Instrumente.',[
   ['EPS_D','Diluted EPS in Geld je Stammaktie.'],
   ['NI,PD,N_W','Gewinn, relevante Vorzugsdividenden und gewichtete Stammaktien wie bei Basic EPS.'],
   ['I,\\tau','Durch Umwandlung entfallender Zins und dafür maßgeblicher Steuersatz.'],
   ['PD_{\\mathrm{conv}}','Vorzugsdividende, deren Abzug bei unterstellter Umwandlung entfällt.'],
   ['\\Delta N_{\\mathrm{opt}},N_{\\mathrm{bond}},N_{\\mathrm{pref}}','Gewichtete zusätzliche Aktien aus Optionen, Wandelanleihen und wandelbaren Vorzugsaktien. Nicht einbezogene Instrumente tragen null bei.']
  ]),
  X('Warum eine Wandelanleihe nicht wie eine Option gerechnet wird','Für Stammaktionäre verfügbarer Gewinn: 6 Mio. €, gewichtete Aktien: 2 Mio. Ganzjährig bestehen 200.000 Optionen mit Ausübungspreis 30 €; Durchschnittskurs 50 €. Zusätzlich besteht eine Wandelanleihe mit 120.000 € Jahreszins, Steuersatz 25 % und 300.000 zusätzlichen Aktien bei Wandlung.',[
   F('EPS_B=\\frac{6000000}{2000000}=3,\\quad \\Delta N_{\\mathrm{opt}}=200000\\left(1-\\frac{30}{50}\\right)=80000','Die Optionen bringen Erlöse für den rechnerischen Rückkauf. Netto verbleiben 80.000 neue Aktien.',[['EPS_B','Basic EPS in Euro.'],['\\Delta N_{\\mathrm{opt}}','Zusätzliche Aktien aus der Optionsrechnung.']]),
   F('EPS_{\\mathrm{nach\\ Optionen}}=\\frac{6000000}{2080000}\\approx2{,}8846,\\qquad \\Delta E_{\\mathrm{bond}}=120000(1-0{,}25)=90000','Die Optionsrechnung verändert hier nur die Aktienzahl; die Wandlung der Schuld verändert zusätzlich den verfügbaren Gewinn.',[['EPS_{\\mathrm{nach\\ Optionen}}','Zwischenwert nach Berücksichtigung der Optionen.'],['\\Delta E_{\\mathrm{bond}}','Durch die Wandlung entfallender Nachsteuerzins in Euro.']]),
   F('EPS_D=\\frac{6000000+90000}{2080000+300000}\\approx2{,}5588','Nach der unten erläuterten Verwässerungsprüfung werden beide Instrumente berücksichtigt.',[['EPS_D','Gemeinsames Diluted EPS in Euro je Aktie.']])
  ],'Nur 300.000 Aktien zu addieren und den Zins zu vergessen würde EPS zu stark verringern. Den vollen Vorsteuerzins zu addieren würde den Gewinn zu stark erhöhen.')
 ]),
 S('antidilution','6. Antidilutive Instrumente erkennen und die Reihenfolge prüfen','d',[
  'Bei positivem maßgeblichem Ergebnis ist ein zusätzliches Instrument verwässernd, wenn sein zusätzlicher Gewinn je zusätzlicher Aktie unter dem bisher berechneten EPS liegt. Die Prüfung wird instrumentweise vorgenommen. Sehr stark verwässernde Instrumente werden zuerst berücksichtigt; Optionen haben im einfachen Fall keinen zusätzlichen Zählergewinn und stehen daher früh in der Reihenfolge. Jedes weitere Instrument wird gegen den bereits angepassten Zwischenwert geprüft.',
  F('\\frac{\\Delta E}{\\Delta N}<\\frac{E}{N}\\quad\\Longleftrightarrow\\quad\\frac{E+\\Delta E}{N+\\Delta N}<\\frac EN,\\qquad N>0,\\ \\Delta N>0','Kreuzmultiplikation zeigt, warum der inkrementelle Gewinn je Aktie die Verwässerung entscheidet.',[
   ['E,N','Der bisher maßgebliche Gewinn für Stammaktionäre und die dazugehörige Aktienzahl.'],
   ['\\Delta E,\\Delta N','Zusätzlicher Gewinn und zusätzliche Aktien durch das nächste Instrument.']
  ]),
  X('Ein Instrument muss trotz möglicher Wandlung draußen bleiben','Im vorigen Fall beträgt das EPS nach Optionen und Wandelanleihe rund 2,5588 €. Eine weitere wandelbare Vorzugsaktie würde 160.000 € Dividendenabzug beseitigen und 40.000 zusätzliche Aktien schaffen.',[
   F('\\frac{\\Delta E}{\\Delta N}=\\frac{160000}{40000}=4>2{,}5588','Der zusätzliche Gewinn je Aktie liegt über dem bisherigen Zwischenwert.',[['\\Delta E','Wegfallender Vorzugsdividendenabzug in Euro.'],['\\Delta N','Zusätzliche Stammaktien bei Umwandlung.']]),
   'Die Einbeziehung würde EPS erhöhen. Das Instrument ist für diese Rechnung antidilutiv und wird ausgeschlossen. Diluted EPS bleibt rund 2,5588 €, obwohl die Wandlung wirtschaftlich möglich sein kann.'
  ],'Potenziell zusätzliche Aktien und für Diluted EPS einzubeziehende Aktien sind unterschiedliche Mengen.'),
  'Bei einem Verlust aus fortgeführten Aktivitäten kann eine größere Aktienzahl den Verlust je Aktie rechnerisch weniger negativ machen. Das wäre eine Verbesserung statt Verwässerung. Beispielsweise würden −2 Mio. € geteilt durch 1,1 Mio. Aktien etwa −1,82 € statt −2 € ergeben; im einfachen Fall werden die zusätzlichen Optionen deshalb ausgeschlossen. Für die formelle Verwässerungsprüfung ist die maßgebliche Ergebnisgröße aus fortgeführten Aktivitäten zu beachten; nicht allein ein durch aufgegebene Bereiche verändertes Gesamtergebnis.',
  'Grenzen: bedingt auszugebende Aktien, teilnehmende Instrumente und bestimmte Abwicklungswahlrechte benötigen zusätzliche Regeln. Die hier gerechneten Fälle sind klar bezeichnete Standardfälle. Die Prüfung beginnt stets mit dem genauen Vertrag und den in der Aufgabe gegebenen Annahmen.'
 ]),
 S('common-size','7. Gemeinsame Größenbasis und wirtschaftliche Interpretation','e',[
  'Eine Common-Size-Gewinnrechnung teilt jeden Posten durch denselben Periodenumsatz. Dadurch werden Unternehmen verschiedener Größe vergleichbar. Die Methode entfernt allerdings keine Unterschiede in Brutto-/Nettoausweis, Geschäftsmodell, Steuersatz oder Finanzierung. Ein Vermittler kann mit Nettoumsatz eine hohe Marge ausweisen, ohne mehr absoluten Gewinn zu erzielen als ein Prinzipal mit höherem Bruttoumsatz.',
  F('g=\\frac{S-COGS}{S},\\qquad m_{op}=\\frac{EBIT}{S},\\qquad m_{net}=\\frac{NI}{S}','Die drei Margen beantworten verschiedene Fragen entlang der Gewinnrechnung.',[
   ['S','Periodenumsatz.'],['COGS','Umsatzkosten der Periode.'],['EBIT','Ergebnis vor Zinsen und Steuern.'],['NI','Nettogewinn nach Steuern.'],
   ['g,m_{op},m_{net}','Brutto-, operative und Nettomarge, dimensionslose Anteile; mal 100 in Prozent.']
  ]),
  T(['Posten','Jahr 1','Jahr 2','Anteil Jahr 1 / Jahr 2'],[
   ['Umsatz','1.000','1.200','100 % / 100 %'],
   ['Umsatzkosten','600','780','60 % / 65 %'],
   ['Bruttogewinn','400','420','40 % / 35 %'],
   ['Operative weitere Kosten','200','204','20 % / 17 %'],
   ['EBIT','200','216','20 % / 18 %']
  ],'Wachstum kann einen absoluten Gewinn erhöhen und gleichzeitig die Marge senken.'),
  'Der Umsatz steigt um 20 %, EBIT nur um 8 %. Die Bruttomarge verliert fünf Prozentpunkte, während die übrigen operativen Kosten relativ zum Umsatz um drei Prozentpunkte sinken. Netto bleibt die operative Marge zwei Prozentpunkte niedriger. Diese Brücke lenkt die weitere Untersuchung auf Einkaufspreise, Produktmix, Verkaufspreise und Skaleneffekte. EPS allein hätte diese Ursachen nicht offengelegt.'
 ])
 ],
 sources:[
  {title:'IFRS Foundation: IAS 33 – Earnings per Share',url:'https://www.ifrs.org/issued-standards/list-of-standards/ias-33-earnings-per-share/'},
  {title:'CFA Institute: Analyzing Income Statements – Lerngebiet und Analysefragen',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/analyzing-income-statements'}
 ],
 review:{status:'draft',note:'Rechenfälle werden unabhängig getestet; fachliche Abschlussprüfung noch offen.'}
};
