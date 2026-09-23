const {F,T,X,S,G}=require('../author.cjs');
const output=[100,102,105,108,110,109,106,104,103,104,106,109,112,115,117,118];
module.exports={id:'cycles',intro:[
 'Konjunkturanalyse untersucht die gemeinsame Bewegung vieler realwirtschaftlicher Aktivitäten. Für Anleger reicht ein Etikett wie „Aufschwung“ nicht: Entscheidend sind Niveau, Veränderungsrate, Kapazitätsauslastung, Finanzierung und die bereits in Preisen enthaltenen Erwartungen. Dieselbe Wachstumszahl kann in unterschiedlichen Ausgangslagen etwas anderes bedeuten.',
 'Das Kapitel trennt den realwirtschaftlichen Konjunkturzyklus vom Kredit- und Finanzzyklus. Anschließend verbinden wir Konsum, Investitionen, Lager, Wohnen, Beschäftigung und Außenhandel mit geeigneten Messgrößen. Alle Zahlenbeispiele sind eigene Konstruktionen; sie sind keine aktuelle Konjunkturprognose.'
],sections:[
 S('phases','1. Wendepunkte betreffen wirtschaftliche Aktivität, nicht nur deren Wachstumsrate','a',[
  T(['Phase / Wendepunkt','Was mit breiter Aktivität geschieht','Was daraus nicht automatisch folgt'],[
   ['Expansion','Reale Aktivität steigt vom Tiefpunkt aus.','Die Wirtschaft muss noch nicht über ihrem Potenzial liegen.'],
   ['Hochpunkt / Peak','Übergang von Expansion zu Kontraktion.','Nicht zwingend der höchste Inflationswert oder die höchste Wachstumsrate.'],
   ['Kontraktion','Breite reale Aktivität geht zurück.','Jeder einzelne Sektor muss nicht gleichzeitig schrumpfen.'],
   ['Tiefpunkt / Trough','Übergang von Kontraktion zu Expansion.','Arbeitslosigkeit muss bereits sinken oder frühere Verluste müssen aufgeholt sein.']
  ],'Erholung bezeichnet häufig den frühen Teil einer Expansion. Zyklen kehren wieder, besitzen aber keine feste Kalenderlänge.'),
  'Ein Rückgang des Wachstums von 5 % auf 2 % ist eine Verlangsamung bei weiterhin steigendem Niveau. Ein Produktionsrückgang von 2 % auf −1 % Wachstum ist eine andere Aussage. „Schlechter als erwartet“ ist wiederum ein Vergleich mit einer Prognose, nicht direkt mit dem Vorperiodenniveau.',
  'Zwei aufeinanderfolgende Quartale mit negativem realem BIP-Wachstum sind eine verbreitete Faustregel. Eine formelle Zyklusdatierung muss davon nicht abhängen: Das NBER beurteilt für die USA Breite, Tiefe und Dauer eines Aktivitätsrückgangs anhand mehrerer Datenreihen. Länder und Institutionen können unterschiedliche Verfahren verwenden.',
  G({id:'cycle-levels',title:'Eine Expansion kann unter dem geschätzten Potenzial beginnen',
   caption:'Konstruierte Quartalsindizes: reale Aktivität und ein angenommener Potenzialpfad. Der lokale Hochpunkt liegt bei Quartal 4, der Tiefpunkt bei Quartal 8. Der Potenzialpfad ist hier nur eine Modellannahme.',
   reading:'Nach Quartal 8 steigt die Aktivität wieder, obwohl sie zunächst unter dem Potenzial bleibt. Die Lücke zwischen Linien ist ein Niveauabstand; die Steigung der Aktivitätslinie beschreibt die laufende Veränderung.',
   plot:{x:[0,15],y:[96,121],xLabel:'Modellquartal',yLabel:'Realer Aktivitätsindex',series:[
    {name:'Beobachtete Aktivität',points:output.map((y,x)=>[x,y])},
    {name:'Angenommenes Potenzial',dash:'6 4',points:output.map((_,x)=>[x,100*1.01**x])}
   ],marks:[{x:4,y:110,label:'Hochpunkt',dx:9,dy:-16},{x:8,y:103,label:'Tiefpunkt',dx:9,dy:22}]}})
 ]),
 S('measurement','2. Reales Niveau, Quartalswachstum und Jahresvergleich sauber messen','a c',[
  F('Y^{real}=\\frac{Y^{nom}}{D/100},\\qquad g_t=\\frac{Y_t^{real}}{Y_{t-1}^{real}}-1','Nominale Aktivität wird mit einem geeigneten Preisindex deflationiert. Wachstum bezieht sich anschließend auf dieselbe reale und gegebenenfalls saisonbereinigte Datenbasis.',[['Y^{real},Y^{nom}','Reales bzw. nominales BIP oder eine passend definierte Aktivitätsgröße.'],['D','Passender Deflator mit Basiswert 100.'],['g_t','Reale Veränderungsrate zwischen t−1 und t.'],['t','Zeitindex.']]),
  X('Mehr Euro sind nicht automatisch mehr Produktion','Nominales BIP steigt von 200 auf 220; der passende Deflator steigt von 100 auf 110.',[
   'Reales BIP zuerst: 200/(100/100) = 200. Danach: 220/(110/100) = 200. Die gesamte nominale Zunahme entspricht in diesem Beispiel der Preisänderung.',
   'Wer das nominale Wachstum von 10 % als reales Produktionswachstum interpretiert, würde den Konjunkturbefund verfälschen.'
  ],'Für Inflation und Volumen sind passende Indizes und ihre Konventionen nötig; ein Verbraucherpreisindex ist nicht automatisch der BIP-Deflator.'),
  F('g_{ann}=(1+g_q)^4-1,\\qquad g_{yoy}=\\frac{Y_t}{Y_{t-4}}-1','Eine annualisierte Quartalsrate unterstellt die viermalige Wiederholung der aktuellen Quartalsrate. Die Vorjahresrate vergleicht dagegen tatsächlich vier Quartale auseinanderliegende Niveaus.',[['g_q,g_{ann},g_{yoy}','Quartalsrate, annualisierte Quartalsrate und Vorjahresrate.'],['Y_t,Y_{t-4}','Vergleichbare reale Quartalsniveaus heute und vor vier Quartalen.']]),
  'Bei aktuellem Niveau 101, Vorquartal 100 und Vorjahresquartal 98 ist das Quartalswachstum 1 %, annualisiert rund 4,0604 %, während die Vorjahresrate rund 3,0612 % beträgt. Die Unterschiede entstehen aus verschiedenen Bezugszeiträumen, nicht aus widersprüchlichen Daten.',
  'Saisonbereinigung, Arbeitstage, Revisionen und Basiseffekte können den ersten Eindruck verändern. Ein Analyst dokumentiert Datenstand und Frequenz; nachträglich revidierte Werte sind keine damals verfügbaren Frühindikatoren.'
 ]),
 S('output-gap','3. Wachstum und Produktionslücke sind zwei Achsen der Lagebeurteilung','a c',[
  F('gap_t=\\frac{Y_t-Y_t^*}{Y_t^*}\\cdot100','Die Produktionslücke vergleicht tatsächlichen realen Output mit geschätztem Produktionspotenzial. Das Potenzial ist keine direkt beobachtete maximale physische Produktion, sondern ein modellabhängiges nachhaltiges Niveau.',[['gap_t','Output Gap in Prozent des Potenzials.'],['Y_t,Y_t^*','Tatsächlicher Output und geschätztes Potenzial.'],['t','Zeitpunkt.']]),
  X('Wachstum kann mit einer größer werdenden negativen Lücke zusammenfallen','Output steigt von 98 auf 100, das geschätzte Potenzial von 100 auf 104.',[
   'Reales Wachstum beträgt 100/98 − 1 ≈ 2,0408 %. Die Aktivität wächst.',
   'Die alte Lücke beträgt −2 %. Die neue Lücke ist (100 − 104)/104 ≈ −3,8462 %. Die Wirtschaft entfernt sich trotzdem relativ weiter vom schneller wachsenden Potenzial.',
   'Eine positive Wachstumszahl reicht deshalb nicht aus, um Überhitzung oder vollständige Erholung festzustellen.'
  ],'Potenzialschätzungen werden revidiert. Ein scheinbar präziser Output Gap kann erhebliche Unsicherheit enthalten.'),
  'Hohe Auslastung kann bei ansonsten stabilen Bedingungen Lohn- und Preisdruck begünstigen. Ein negativer Angebotsschock kann dagegen Inflation erhöhen, obwohl reale Aktivität sinkt. Der Zusammenhang zwischen Wachstum, Lücke und Inflation ist vom Schocktyp abhängig.'
 ]),
 S('demand-components','4. Haushalte und Unternehmen reagieren mit unterschiedlicher Geschwindigkeit','c',[
  F('Y=C+I+G+X-M','Die Ausgabenidentität zerlegt inländische Produktion in Konsum, Bruttoinvestitionen einschließlich Lagerveränderungen, staatliche Güter-/Dienstleistungsnachfrage und Nettoexporte. Sie ist eine Buchungsidentität, für sich allein noch keine kausale Erklärung.',[['Y','BIP auf der betrachteten konsistenten Preisbasis.'],['C,I,G','Privater Konsum, Bruttoinvestitionen und staatliche Käufe von Gütern und Dienstleistungen.'],['X,M','Exporte und Importe; hier bezeichnet X Exporte, nicht eine allgemeine erklärende Variable.']]),
  T(['Bereich','Typischer zyklischer Mechanismus','Wichtige Einschränkung'],[
   ['Langlebige Konsumgüter','Käufe können bei Unsicherheit verschoben und in Erholung nachgeholt werden.','Ersatzbedarf, Finanzierung und Angebotsengpässe verändern die Reaktion.'],
   ['Notwendiger Konsum','Grundbedarf schwankt häufig weniger stark.','„Defensiv“ bedeutet nicht völlig konjunkturunabhängig.'],
   ['Unternehmensinvestitionen','Nachfrageerwartung, Kapazitätsauslastung und Finanzierung bestimmen neue Projekte.','Lange Planungs- und Bauzeiten verzögern Anpassungen.'],
   ['Immobilien und Wohnungsbau','Zinsen, Kreditstandards, Einkommen, Erwartungen und Angebot wirken zusammen.','Bestandsumsatz, Preise und Neubauproduktion sind unterschiedliche Größen.'],
   ['Staatsnachfrage','Automatische und diskretionäre Politik kann private Schwankungen abfedern oder verstärken.','Ausgabenniveau, Finanzierung und Umsetzungsgeschwindigkeit sind entscheidend.']
  ],'Die Muster sind bedingte wirtschaftliche Mechanismen, keine sichere Branchenrenditeregel.'),
  'Beim Akzeleratoreffekt führt eine höhere gewünschte Kapazität zu zusätzlicher Investitionsnachfrage. Wenn das gewünschte Kapital proportional zum erwarteten Produktionsniveau ist, kann bereits eine Wachstumsverlangsamung die Nettoinvestition stark reduzieren, obwohl der Kapitalbestand weiter wächst.',
  F('K_t^*=vY_t^e,\\qquad I_t^{net}=K_t^*-K_{t-1}^*','Ein einfacher Akzelerator verknüpft den gewünschten Kapitalbestand mit erwarteter Produktion. Das ist ein stark vereinfachtes Modell ohne Anpassungskosten oder Lieferverzögerungen.',[['K_t^*','Gewünschter Kapitalbestand.'],['v','Angenommenes konstantes Kapital-Output-Verhältnis.'],['Y_t^e','Erwartete Produktion.'],['I_t^{net}','Hier erforderliche Nettoinvestition bei vollständiger sofortiger Anpassung.'],['t','Zeitindex.']]),
  'Bei v = 2 und erwartetem Output 100 → 110 → 115 wächst der gewünschte Kapitalbestand 200 → 220 → 230. Nettoinvestition fällt von 20 auf 10, obwohl Output und Kapitalbestand steigen. Bruttoinvestitionen enthalten zusätzlich Ersatz für Abschreibungen.'
 ]),
 S('inventories','5. Lagerbestände können einen Abschwung zunächst verbergen','c',[
  F('I_t^{stocks}=N_t-N_{t-1},\\qquad ISR_t=N_t/S_t','Lagerinvestition ist die Veränderung des Bestands. Die Lager-Umsatz-Relation misst dagegen, wie groß der Bestand relativ zum Absatz in der angegebenen Periode ist.',[['I_t^{stocks}','Lagerinvestition der Periode; kann positiv oder negativ sein.'],['N_t,N_{t-1}','Lagerbestände zum Periodenende und vorherigen Periodenende.'],['ISR_t','Inventory-to-Sales Ratio, bei Monatsumsatz beispielsweise in Monatsumsätzen.'],['S_t','Absatz/Umsatz der Periode auf passender Bewertungsbasis.'],['t','Periodenindex.']]),
  X('Weiter wachsendes Lager kann einen negativen Wachstumsbeitrag leisten','Eine vereinfachte geschlossene Güterrechnung hat konstante Endnachfrage 100 pro Quartal. Der Lagerbestand steigt von 100 auf 120 und danach auf 125; alle Größen sind zu konstanten Preisen bewertet.',[
   'Im ersten Quartal beträgt Lagerinvestition 20, Produktion deshalb 120. Im zweiten Quartal beträgt Lagerinvestition nur noch 5, Produktion 105.',
   'Der Lagerbestand steigt weiter, aber der Produktionsbeitrag aus Lagerinvestitionen sinkt um 15. Das Produktionsniveau fällt in diesem Beispiel von 120 auf 105.',
   'Es wäre falsch, aus einem noch steigenden Lagerbestand automatisch einen positiven Beitrag zum Produktionswachstum abzuleiten. Dafür zählt die Veränderung der Lagerinvestition, nicht nur ihr positives Niveau.'
  ],'Bestand, Bestandsänderung und Veränderung der Bestandsänderung müssen auseinandergehalten werden.'),
  'Fällt der Monatsabsatz von 100 auf 80 bei einem Lager von 200, steigt die Lager-Umsatz-Relation von 2 auf 2,5 Monate. Ungeplant hohe Bestände können anschließende Produktionskürzungen auslösen. Ein geplanter Lageraufbau vor erwarteter Nachfrage ist dagegen anders zu interpretieren.'
 ]),
 S('resources','6. Beschäftigung, Arbeitszeit und Auslastung lesen','c',[
  F('u=\\frac{U}{E+U}\\cdot100,\\qquad LFPR=\\frac{E+U}{W}\\cdot100','Arbeitslosenquote und Erwerbsbeteiligung verwenden unterschiedliche Nenner. Personen außerhalb des Arbeitskräfteangebots zählen nicht automatisch als arbeitslos; konkrete statistische Definitionen sind zu beachten.',[['u','Arbeitslosenquote in Prozent.'],['U,E','Arbeitslose im statistischen Sinn und Erwerbstätige.'],['W','Zur Erwerbsbeteiligung verwendete Bevölkerung im relevanten Alter nach der jeweiligen Statistik.'],['LFPR','Erwerbsbeteiligungsquote.']]),
  X('Eine fallende Arbeitslosenquote kann einen schwachen Arbeitsmarkt verdecken','Es gibt 90 Erwerbstätige und 10 Arbeitslose. Später bleiben 90 beschäftigt, aber vier der zuvor Arbeitslosen verlassen das statistische Arbeitskräfteangebot.',[
   'Zunächst ist u = 10/100 = 10 %. Danach ist u = 6/96 = 6,25 %.',
   'Die Quote fällt, obwohl kein zusätzlicher Arbeitsplatz entstanden ist. Die Erwerbsbeteiligung sinkt bei unveränderter relevanter Bevölkerung.',
   'Beschäftigungszahl, Arbeitszeit, Erwerbsbeteiligung, Lohnentwicklung und neue Stellen liefern deshalb wichtige Ergänzungen.'
  ],'Eine Quote kann sich durch Zähler und Nenner verändern; die wirtschaftliche Geschichte muss beide erklären.'),
  'Unternehmen passen bei Unsicherheit oft zunächst Überstunden, Arbeitszeit oder Leiharbeit an, bevor sie feste Beschäftigung stark verändern. In einer frühen Erholung kann Produktion daher steigen, während Einstellungen noch zögerlich bleiben. Produktivität und Auslastung reagieren dabei ebenfalls.',
  'Kapazitätsauslastung setzt tatsächliche Produktion zu einer geeigneten Kapazitätsschätzung ins Verhältnis. Hohe Auslastung kann zusätzliche Investitionen motivieren, doch Messung, Sektorstruktur und Kapazitätsänderungen beeinflussen die Aussage.'
 ]),
 S('credit-cycle','7. Kreditangebot und Risikoneigung können den Realzyklus verstärken','b',[
  'Im Kreditaufschwung erleichtern niedrig wahrgenommenes Risiko, lockere Kreditstandards und steigende Sicherheitenwerte zusätzliche Finanzierung. Höhere Kreditvergabe kann Nachfrage und Vermögenspreise weiter stützen. Im Abschwung können dieselben Verknüpfungen in die andere Richtung wirken.',
  T(['Aufwärtsverstärkung','Abwärtsverstärkung'],[
   ['Steigende Sicherheitenwerte erhöhen mögliche Beleihung.','Fallende Sicherheitenwerte senken Kreditspielraum.'],
   ['Niedrige Ausfälle verbessern gemessene aktuelle Kreditqualität.','Ausfälle und Verluste belasten Bilanzen und Risikobudgets.'],
   ['Lockerere Standards ermöglichen neue Projekte und Käufer.','Strengere Standards verhindern Refinanzierung auch bei hoher Nachfrage nach Kredit.'],
   ['Leverage verstärkt Eigenkapitalgewinne.','Leverage verstärkt Eigenkapitalverluste und kann Notverkäufe auslösen.']
  ],'Der Kreditzyklus ist nicht einfach ein zweiter Name für BIP-Wachstum. Finanzielle Ungleichgewichte können sich über mehrere Realzyklen aufbauen.'),
  'Breiter Kredit- und Immobilienpreisauftrieb, Laufzeiten, Kreditstandards, Schuldendienst und Finanzierungsstruktur gehören gemeinsam zur Analyse. Eine hohe Kreditmenge allein sagt nicht, wie verletzlich die Schuldner sind. Eigenwährung, Fremdwährung, feste oder variable Zinsen und Fälligkeiten verändern das Risiko.',
  'Ein allgemeiner Konjunkturabschwung muss nicht mit einer Finanzkrise zusammenfallen. Wenn jedoch schwache Aktivität und angeschlagene Bilanzen zusammentreffen, können sich Real- und Finanzwirtschaft gegenseitig stärker belasten.'
 ]),
 S('leverage','8. Warum ein kleiner Vermögensverlust großen Bilanzabbau auslösen kann','b',[
  F('E=A-D,\\qquad \\lambda=A/E,\\qquad LTV=D/A','Bei gegebenen Schulden trifft ein Vermögenswertverlust zunächst vollständig das Eigenkapital. Daher steigen Leverage und Beleihungsquote, obwohl keine neuen Schulden aufgenommen wurden.',[['A,D,E','Vermögenswerte, Schulden und Eigenkapital in derselben Währung.'],['\\lambda','Bilanzhebel als Vermögenswerte geteilt durch Eigenkapital, für E > 0.'],['LTV','Loan-to-Value, hier Schulden geteilt durch Vermögenswert.']]),
  X('Vom Preisrückgang zum Verkaufsdruck','Ausgangsbilanz: Vermögen 100, Schulden 80, Eigenkapital 20. Der Vermögenswert fällt um 10 %, die Schulden bleiben unverändert.',[
   'Danach: Vermögen 90, Schulden 80, Eigenkapital 10. Der Bilanzhebel steigt von 5 auf 9; LTV steigt von 80 % auf rund 88,889 %.',
   'Soll ohne neues Eigenkapital der Hebel 5 wiederhergestellt werden, werden Vermögenswerte zum aktuellen Wert verkauft und die Erlöse vollständig zur Schuldentilgung verwendet. Dieser vereinfachte Verkauf erzeugt keine zusätzlichen Gewinne, Verluste oder Kosten.',
   F('\\frac{90-x}{10}=5\\quad\\Longrightarrow\\quad x=40','Nach Verkauf und Tilgung verbleiben Vermögen 50, Schulden 40 und Eigenkapital 10. Der ursprüngliche Preisverlust von 10 hat einen Verkaufsbedarf von 40 erzeugt.',[['x','Zum aktuellen Wert verkaufte Vermögensmenge in Geldeinheiten; gleicher Betrag wird zur Schuldentilgung verwendet.']]),
   'Wenn viele Institute gleichzeitig verkaufen und die Preise dadurch weiter fallen, sinkt das Eigenkapital erneut. Das kann eine Rückkopplung erzeugen; neues Kapital, veränderte Hebelziele oder andere Anpassungsmaßnahmen würden die Rechnung verändern.'
  ],'Ein Bilanzziel macht fallende Preise nicht automatisch selbstkorrigierend. Die Anpassung kann zusätzlichen Druck erzeugen.'),
  G({id:'deleveraging',title:'Preisverluste treffen Eigenkapital und können Verkäufe erzwingen',
   caption:'Ausgangsbilanz A = 100, D = 80, E = 20. Nach einem Preisverlust wird Leverage 5 allein durch Verkäufe und gleich hohe Schuldentilgung wiederhergestellt. Keine weiteren Marktpreiswirkungen oder Transaktionskosten.',
   reading:'Bei 10 % Preisverlust verbleiben 10 Eigenkapital und es sind Verkäufe von 40 erforderlich. Die Kurven enden vor dem vollständigen Aufzehren des Eigenkapitals bei 20 % Preisverlust.',
   plot:{x:[0,18],y:[0,80],xLabel:'Preisverlust der Vermögenswerte (%)',yLabel:'Geldeinheiten bei Startvermögen 100',series:[
    {name:'Verbleibendes Eigenkapital',points:[[0,20],[18,2]]},
    {name:'Verkäufe zur Rückkehr auf Hebel 5',points:[[0,0],[18,72]]}
   ],marks:[{x:10,y:10,label:'Eigenkapital 10',dx:10,dy:20},{x:10,y:40,label:'Verkauf 40',dx:10,dy:-12}]}})
 ]),
 S('credit-pricing','9. Günstigere Zentralbankzinsen garantieren keine günstigere Kreditversorgung','b c',[
  F('r_{borrow}=r_{base}+s_{credit}+s_{other}','Eine vereinfachte Kreditrate enthält einen relevanten Basiszins und Aufschläge für Kreditrisiko sowie weitere Finanzierungs- oder Liquiditätskomponenten. Nicht jede Kreditrate reagiert gleich schnell auf einen Leitzins.',[['r_{borrow}','Kreditzins für den betrachteten Schuldner und Horizont.'],['r_{base}','Passender Basiszins.'],['s_{credit},s_{other}','Kreditrisikoaufschlag und weitere ausdrücklich definierte Aufschläge.']]),
  X('Lockerere Geldpolitik, trotzdem höherer Kreditzins','Der passende Basiszins fällt von 3 % auf 1 %, während der gesamte relevante Aufschlag von 1 % auf 4 % steigt.',[
   'Die Kreditrate steigt von 4 % auf 5 %. Die Senkung des Basiszinses um zwei Prozentpunkte wird von drei Prozentpunkten höherem Aufschlag mehr als ausgeglichen.',
   'Zusätzlich kann ein Institut Kredite rationieren, kürzere Laufzeiten verlangen oder Sicherheiten erhöhen. Finanzierungskonditionen sind mehr als eine einzige Preiszahl.'
  ],'Eine funktionierende monetäre Transmission hängt auch von Bilanzen, Risikobereitschaft, Refinanzierung und Kreditnachfrage ab.'),
  'Zinszahlungen plus Tilgungen relativ zum Einkommen beschreiben die laufende Schuldendienstbelastung. Bei variablen Zinsen oder baldiger Refinanzierung können Belastungen schnell steigen; bei langen festen Laufzeiten erfolgt der Effekt zeitversetzt.'
 ]),
 S('indicators','10. Früh-, Gleichlauf- und Spätindikatoren zusammen auswerten','a c',[
  T(['Typ','Beispiele','Interpretationsgrenze'],[
   ['Frühindikatoren','Neue Aufträge, Baugenehmigungen, geeignete Erwartungsumfragen, manche Zinsstruktur- oder Finanzierungsindikatoren.','Vorlauf ist unregelmäßig; Signale können falsch sein oder eine andere Schockart widerspiegeln.'],
   ['Gleichlaufende Reihen','Industrieproduktion, reale Einkommen oder reale Umsätze; Beschäftigung in manchen zusammengesetzten Aktivitätsmaßen.','Veröffentlichung kommt verzögert und kann revidiert werden.'],
   ['Häufig nachlaufende Reihen','Arbeitslosenquote, bestimmte Lohn- oder Kostenanpassungen und manche Bestandsquoten.','Zeitmuster hängen von Institutionen, Schock und Messdefinition ab.']
  ],'Die Einordnung betrifft typische zeitliche Beziehungen zum gewählten Referenzzyklus. Sie ist keine unveränderliche Eigenschaft jedes Landes und jeder Episode.'),
  F('DI=100(p_{up}+0{,}5p_{same})','Ein einfacher Diffusionsindex zählt, wie verbreitet Verbesserungen sind, und gewichtet unveränderte Antworten halb. Er misst nicht unmittelbar die Stärke oder prozentuale Größe der Veränderungen.',[['DI','Diffusionsindex auf einer Skala von 0 bis 100.'],['p_{up},p_{same}','Anteile mit Verbesserung bzw. unveränderter Lage als Dezimalzahlen; zusammen mit Verschlechterung Summe eins.']]),
  X('Ein Indexwert 55 ist keine Wachstumsrate von 5 %','In einer vereinfachten Umfrage melden 35 % Verbesserung, 40 % keine Änderung und 25 % Verschlechterung.',[
   F('DI=100(0{,}35+0{,}5\\cdot0{,}40)=55','Verbesserung ist weiter verbreitet als Verschlechterung; das Ergebnis sagt noch nicht, wie groß die einzelnen Veränderungen sind.',[['DI','Berechneter Diffusionsindex.']]),
   'Ein Rückgang des Index von 58 auf 55 zeigt bei dieser Konvention eine geringere Verbreitung von Verbesserung, aber weiterhin mehr positive als negative Antworten.',
   'Konkrete zusammengesetzte Einkaufsmanagerindizes können mehrere unterschiedlich gewichtete Teilreihen verwenden. Ein Branchenindex beschreibt nicht automatisch die ganze Volkswirtschaft.'
  ],'Niveau, Änderung und Bezug der Kennzahl müssen ausdrücklich benannt werden.')
 ]),
 S('housing-trade','11. Wohnen und Außenhandel in die Gesamtgeschichte einordnen','c',[
  'Wohnungsbau reagiert auf Finanzierungszinsen, Einkommenserwartung, Kreditverfügbarkeit und lokale Angebotsbedingungen. Genehmigungen können vor Baubeginn liegen, Baubeginn vor Fertigstellung. Transaktionen bestehender Wohnungen verändern den Eigentümer; ihr voller Verkaufspreis ist deshalb nicht automatisch neue Produktion im BIP.',
  'Steigende Hauspreise können Vermögen und Sicherheiten erhöhen, während Neubau wegen knappem Bauland oder Baukapazitäten wenig wächst. Umgekehrt kann viel gebaut werden, bevor schwächere Nachfrage sichtbar wird. Preise, Mengen und Finanzierung müssen getrennt beobachtet werden.',
  'Exporte hängen unter anderem von ausländischer Nachfrage, Wettbewerbsfähigkeit, Wechselkursen und Lieferfähigkeit ab. Importe reagieren auch auf inländische Nachfrage. Ein Einbruch der Binnennachfrage kann daher Nettoexporte rechnerisch verbessern, weil Importe stärker sinken als Exporte.',
  X('Bessere Nettoexporte müssen keine starke Wirtschaft bedeuten','Exporte bleiben bei 100, Importe fallen von 120 auf 90.',[
   'Nettoexporte verbessern sich von −20 auf +10, also um 30.',
   'Wenn Importe wegen eines starken Rückgangs heimischen Konsums und heimischer Investitionen fallen, ist die Verbesserung kein allgemeiner Wohlstandsnachweis.',
   'Importe werden in der BIP-Identität abgezogen, weil importierte Güter bereits in anderen Nachfragekomponenten enthalten sein können. Das macht Importe nicht grundsätzlich wirtschaftlich schädlich.'
  ],'Eine Saldenverbesserung muss nach ihren einzelnen Ursachen beurteilt werden.')
 ]),
 S('investment','12. Makrodaten sind kein mechanischer Handelssignalgeber','a b c',[
  T(['Beobachtung','Mögliche wirtschaftliche Folgerung','Zusätzliche Prüfung'],[
   ['Wachstum erholt sich von niedrigem Niveau','Zyklische Umsätze und Auslastung könnten steigen.','Ist die Erholung bereits in Gewinnen und Kursen erwartet?'],
   ['Hohe Auslastung und steigende Löhne','Margen oder Inflationsrisiken könnten unter Druck kommen.','Produktivität, Preissetzung und Art des Angebotsschocks beachten.'],
   ['Kreditstandards werden strenger','Refinanzierungs- und Investitionsrisiken steigen möglicherweise.','Fälligkeiten, Liquiditätspuffer und alternative Finanzierung unterscheiden.'],
   ['Marktzinsen fallen bei schwacher Konjunktur','Diskontsätze können sinken.','Fallende Cashflows und höhere Kreditaufschläge können gegenwirken.']
  ],'Ein positiver Effekt auf einen Bewertungsbestandteil kann von einem negativen Effekt auf einen anderen überlagert werden.'),
  'Aktien- und Kreditmärkte reagieren auf neue Informationen relativ zu Erwartungen. Sie können sich vor einem statistisch bestätigten Tiefpunkt erholen oder bei noch positivem BIP fallen. Eine rückblickend perfekte Zyklusdatierung wäre deshalb noch keine damals ausführbare Handelsstrategie.',
  'Ein belastbarer Bericht unterscheidet beobachtete Daten, deren Veröffentlichungsstand, geschätztes Potenzial, angenommene Wirkungsmechanismen und alternative Szenarien. Ein einzelner Frühindikator oder eine einzelne Branchenzahl reicht für eine umfassende Konjunkturdiagnose nicht aus.'
 ])
],related:[{unit:'market-structures',section:'scale',label:'Auslastung und langfristige Skaleneffekte unterscheiden'},{unit:'returns',section:'purchasing-power',label:'Nominale Veränderung von Kaufkraftänderung trennen'},{unit:'data-science',section:'time-split',label:'Veröffentlichungszeit und Datenrevisionen im Backtest beachten'},{unit:'tvm',section:'single-cashflow',label:'Cashflows und Diskontsätze gemeinsam bewerten'}],
 sources:[
 {title:'CFA Institute: offizieller Lernzielkatalog Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=5'},
 {title:'CFA Institute: Understanding Business Cycles',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/understanding-business-cycles'},
 {title:'NBER: Business Cycle Dating',url:'https://www.nber.org/research/business-cycle-dating'},
 {title:'NBER: Dating Procedure — Frequently Asked Questions',url:'https://www.nber.org/research/business-cycle-dating/business-cycle-dating-procedure-frequently-asked-questions'},
 {title:'BIS: The Financial Cycle and Recession Risk',url:'https://www.bis.org/publications/qr-201812/financial-cycle-and-recession-risk'},
 {title:'BIS: Debt, Leverage and Financial Cycles',url:'https://www.bis.org/publications/iv-8'}
 ],review:{status:'draft',date:'2026-09-23',note:'Eigene Beispiele für Wachstumsraten, Produktionslücke, Lagerbeiträge, Erwerbsbeteiligung und Bilanzabbau; konjunkturelle Muster als bedingte Mechanismen.'}};
