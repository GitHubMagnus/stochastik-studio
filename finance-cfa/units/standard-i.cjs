const {T,X,S}=require('../author.cjs');
module.exports={id:'standard-i',intro:[
 'Standard I schützt die Verlässlichkeit des Berufsträgers: Er muss die geltenden Regeln beachten, unabhängig urteilen, wahrheitsgemäß darstellen, sich beruflich integer verhalten und seine Aufgaben kompetent erfüllen. Diese Anforderungen betreffen bereits den Entscheidungsprozess. Ein zufällig gutes Anlageergebnis heilt einen mangelhaften oder unehrlichen Prozess nicht.',
 'Bei einer Fallfrage hilft die Reihenfolge Rolle → Handlung → relevante Regel → entscheidende Tatsache → passende Reaktion. Unterstelle keine unbekannten Absichten oder zusätzlichen Gesetze. Unterscheide eine zwingende Pflicht von einer empfohlenen betrieblichen Kontrolle und ein bereits geschehenes Fehlverhalten von einem erst drohenden Konflikt.'
],sections:[
 S('law','1. I(A): Welche Regel gilt und was folgt aus einem Verstoß?','a c',[
  'Knowledge of the Law verlangt die Beachtung der für die eigene berufliche Tätigkeit anwendbaren Regeln. Bei unterschiedlichen Anforderungen ist die strengere einschlägige Regel einzuhalten. Das umfasst den CFA-Kodex auch dann, wenn lokales Recht weniger fordert. Man muss kein Spezialist für jedes Gesetz weltweit sein, aber die für die eigene Aufgabe relevanten Pflichten kennen und bei Unsicherheit sachkundigen Rat einholen.',
  'Bei erkannten oder vernünftigerweise erkennbaren Verstößen reicht passives Zuschauen nicht. Eine angemessene interne Eskalation kann helfen, die Handlung zu stoppen; setzt sie sich fort, muss man sich davon distanzieren. Eine externe Behördenmeldung ist nicht pauschal durch diesen Standard vorgeschrieben, kann aber gesetzlich erforderlich sein. Distanzierung und Meldung sind deshalb zwei unterschiedliche Fragen.',
  X('Eine Freigabe mit unzutreffender Kundeninformation','Eine Analystin entdeckt vor Veröffentlichung, dass ein Bericht einen verfügbaren negativen Liquiditätstest bewusst auslässt. Die zuständige Stelle bestätigt den Fehler, der Vertriebsleiter verlangt trotzdem ihre Unterschrift.',[
   'Die erste Entscheidung betrifft die eigene Beteiligung: Mit der Unterschrift würde die Analystin die irreführende Darstellung unterstützen. Die Weisung des Vertriebsleiters beseitigt ihre persönliche Pflicht nicht.',
   'Sie verlangt Korrektur, dokumentiert die Bedenken und nutzt den vorgesehenen Eskalationsweg. Bleibt die Veröffentlichung unverändert, verweigert sie ihre Mitwirkung und veranlasst eine tatsächliche Trennung von dieser Tätigkeit.',
   'Ob zusätzlich eine Aufsicht informiert werden muss, hängt von anwendbaren Meldepflichten ab. Die bloße Annahme, jede Ethics-Verletzung erfordere automatisch denselben externen Empfänger, überspringt diesen Prüfungsschritt.'
  ],'Die tragende Tatsache ist die fortgesetzte Beteiligung trotz Kenntnis. Weder ein Vorgesetztenwunsch noch eine günstige spätere Kursentwicklung macht den Prozess korrekt.')
 ]),
 S('independence','2. I(B): Unabhängigkeit wird vor der Entscheidung geschützt','a c',[
  'Independence and Objectivity verlangt, Vorteile abzulehnen, die ein sachliches Urteil vernünftigerweise beeinträchtigen können. Es gibt keine universelle CFA-Eurogrenze für Geschenke. Herkunft, Wert, Häufigkeit, zeitlicher Zusammenhang und Einflussmöglichkeit gehören zur Beurteilung. Auch wer selbst einen problematischen Vorteil anbietet, kann den Standard verletzen.',
  'Eine nachträgliche Anerkennung eines bestehenden Kunden wird anders beurteilt als eine Einflussnahme eines Emittenten oder Brokers. Kundenleistungen sind dem Arbeitgeber offenzulegen, möglichst vor Annahme; eine vorher vereinbarte Vergütung für künftige Ergebnisse kann zusätzlich Standard IV(B) mit schriftlicher Zustimmung aller betroffenen Parteien auslösen. Bloße Offenlegung macht einen objektiv beeinträchtigenden Drittvorteil nicht automatisch zulässig.',
  X('Researchzugang gegen gewünschtes Ergebnis','Ein Emittent bietet einem Analysten Zugang zu einer Testanlage an. Er verlangt dafür ausdrücklich, dass der nächste Bericht mindestens eine positive Empfehlung enthält.',[
   'Die Testanlage könnte sachlich relevante Informationen liefern. Die gekoppelte Empfehlung greift jedoch unmittelbar in das unabhängige Ergebnis ein.',
   'Der Analyst trennt Zugang und Urteil: Er akzeptiert keine Verpflichtung auf ein positives Ergebnis und verlangt Informationen ohne diese Bedingung. Die Behauptung, er könne trotz Abmachung innerlich objektiv bleiben, löst den Konflikt nicht.',
   'Eine Information im Kleingedruckten, dass Zugang gegen positive Bewertung gewährt wurde, ersetzt kein unabhängiges Research.'
  ],'Prüfe die Richtung der Bindung: Eine Untersuchung soll zum Urteil führen; ein vorher zugesagtes Urteil darf die Untersuchung nicht steuern.')
 ]),
 S('representation','3. I(C): Die Darstellung muss der Wirklichkeit entsprechen','a c',[
  'Misrepresentation umfasst wissentlich irreführende Aussagen und relevante Auslassungen über Analysen, Leistungen oder Qualifikationen. Fremdes Material darf nicht als eigene schöpferische Leistung ausgegeben werden. Quellen, Modellcharakter, Einschränkungen und tatsächlich erbrachte Leistungen müssen so erkennbar sein, dass der Empfänger kein falsches Bild erhält.',
  'Historische Ergebnisse sind keine zugesicherten zukünftigen Ergebnisse. Eine echte vertragliche Garantie eines identifizierten Dritten kann sachlich beschrieben werden, einschließlich ihres Umfangs und Risikos. Sie darf nicht mit einer persönlichen Garantie risikobehafteter Anlageergebnisse verwechselt werden. Auch zugelieferte Marketingunterlagen entbinden nicht von angemessener Prüfung der verwendeten Aussagen.',
  X('Ein schöner Backtest wird als Kundenergebnis verkauft','Ein Team simuliert eine Strategie auf historischen Daten. In der Präsentation stehen die Ergebnisse unter „von uns erzielte Kundenrenditen“, obwohl noch kein Kundenkonto damit gehandelt wurde.',[
   'Der Fehler besteht bereits in der Art der Darstellung. Auch vollständig korrekt nachgerechnete Simulationsergebnisse sind keine tatsächlich erzielten Kundenergebnisse.',
   'Die Darstellung muss Simulation, Annahmen, Datenbasis und relevante Grenzen erkennen lassen. Kosten, mögliche Rückschauauswahl und Umsetzbarkeit beeinflussen zusätzlich, was der Test aussagt.',
   'Wird ein extern entwickelter Datensatz oder ein fremdes Modell genutzt, ist dessen Rolle angemessen zu kennzeichnen. Ein pauschaler Firmenname auf der Titelseite ersetzt nicht automatisch eine notwendige Quellenangabe.'
  ],'Wahrheit betrifft nicht nur die Zahl, sondern auch ihre Herkunft, Bedeutung und den Eindruck beim Leser.')
 ]),
 S('misconduct','4. I(D): Berufliche Integrität und der Anwendungsbereich','a c',[
  'Misconduct erfasst berufliches Verhalten mit Unehrlichkeit, Betrug oder Täuschung sowie Verhalten, das sich nachteilig auf berufliche Reputation, Integrität oder Kompetenz auswirkt. Eine fehlende strafrechtliche Verurteilung beweist keine Standardkonformität. Umgekehrt ist nicht jede private Rechtsverletzung automatisch ein berufsbezogener Verstoß gegen I(D). Der Zusammenhang mit Beruf, CFA-Programm oder beruflich eingesetzter Qualifikation muss geprüft werden.',
  X('Prüfnachweise erfinden','Ein Mitarbeiter soll Datenquellen eines Bewertungsmodells kontrollieren. Er führt die Prüfung nicht durch, setzt aber erfundene Prüfdaten und eine fremde elektronische Unterschrift in das interne Freigabeprotokoll.',[
   'Die falsche Dokumentation täuscht unmittelbar über die berufliche Arbeit und untergräbt die Kontrollfunktion. Das ist unabhängig davon problematisch, ob im Modell später tatsächlich ein Fehler gefunden wird.',
   'Ein bloßer Rechenfehler ohne Täuschung hätte andere Ursachen und müsste anders analysiert werden. Hier sind die bewusste Erfindung und unberechtigte Unterschrift die entscheidenden Tatsachen.'
  ],'Ein verletzter Kontrollprozess kann das Vertrauen beschädigen, bevor ein messbarer Kundenschaden entsteht.'),
  'Private Überschuldung allein belegt beispielsweise noch keine berufliche Unehrlichkeit. Eine sachliche Falllösung benennt das relevante Verhalten, statt aus einem unerwünschten Ergebnis oder einer moralischen Abneigung automatisch einen Standardverstoß abzuleiten.'
 ]),
 S('competence','5. I(E): Kompetenz muss zur übernommenen Aufgabe passen','a c',[
  'Competence verlangt, für die übernommenen beruflichen Aufgaben die erforderlichen Kenntnisse und Fähigkeiten zu besitzen und aktuell zu halten. Ein früher erworbener Titel ersetzt keine Einarbeitung in ein neues Tätigkeitsgebiet. Der Standard schreibt jedoch kein bestimmtes allgemeines Weiterbildungsprogramm oder eine universelle jährliche Stundenzahl vor.',
  X('Von Aktienanalyse zu komplexen Zinsprodukten','Eine bisher auf Konsumaktien spezialisierte Analystin soll eigenständig ein Modell für kündbare Anleihen freigeben. Sie beherrscht weder die Optionslogik noch die zugrunde liegende Kalibrierung.',[
   'Ein Verweis auf ihre langjährige Berufserfahrung reicht für genau diese Aufgabe nicht. Sie identifiziert die fehlenden Fähigkeiten und organisiert geeignete Einarbeitung und fachkundige Unterstützung, bevor sie selbstständig Verantwortung übernimmt.',
   'Die Verwendung einer Software ist nicht an sich unzulässig. Sie muss aber die für ihre Rolle erforderliche Funktionsweise, Datenbasis und Grenzen ausreichend verstehen. Die Softwaremarke ersetzt diese Beurteilung nicht.',
   'Ein späterer Gewinn könnte das Kompetenzdefizit verdecken, beseitigt es aber nicht. Umgekehrt beweist ein Verlust bei sorgfältiger, kompetenter Arbeit nicht automatisch fehlende Kompetenz.'
  ],'Kompetenz ist rollenbezogen. Prüfe die Aufgabe und die tatsächlich vorhandene Befähigung, nicht nur Lebenslauf oder Ergebnis.')
 ]),
 S('controls','6. Kontrollen aus den Ursachen ableiten','b',[
  T(['Risiko','Sinnvolle Kontrolle','Was die Kontrolle leisten muss'],[
   ['Unbekannte Regeln','Zuständigkeit für Rechtsänderungen, Schulung und Eskalationswege','Relevante Änderungen rechtzeitig in tägliche Abläufe übersetzen.'],
   ['Einfluss durch Vorteile','Geschenkeregister, Genehmigungsprozess, organisatorische Trennung','Herkunft, Größe und Konflikt vor einer Entscheidung sichtbar machen.'],
   ['Irreführende Darstellung','Quellenprüfung, Versionskontrolle und sachliche Freigabe','Tatsächliche, simulierte und beworbene Leistung auseinanderhalten.'],
   ['Berufliche Täuschung','Nachvollziehbare Kontrollnachweise und unabhängige Stichproben','Selbstbestätigungen durch überprüfbare Belege ergänzen.'],
   ['Fehlende Fähigkeiten','Aufgabenbezogene Kompetenzprüfung und gezielte Weiterbildung','Neue Verantwortung erst mit ausreichender Befähigung ausüben.']
  ],'Eigene Kontrollvorschläge zur Umsetzung der Pflichten; die konkrete Ausgestaltung hängt von Größe und Tätigkeit ab.'),
  'Eine Richtlinie hat nur dann Wert, wenn sie verständlich, bekannt und im Alltag anwendbar ist. Ein Register ohne Prüfung erkennt zwar Geschenke, verhindert aber noch keine Einflussnahme. Eine jährliche Schulung ohne Anpassung an neue Produkte kann formal stattfinden und trotzdem die notwendige Kompetenz nicht herstellen.',
  'Bei einer Frage nach der wirksamsten Kontrolle suche die Maßnahme, die den beschriebenen Entstehungsweg des Risikos unterbricht. Eine allgemeine Ethikerklärung an der Wand löst keinen konkret fehlenden Genehmigungs- oder Prüfprozess.'
 ]),
 S('distinctions','7. Eng benachbarte Standards auseinanderhalten','a c',[
  T(['Konkrete Frage','Naheliegender Standard','Zusätzliche Verbindung'],[
   ['Welche anwendbare Regel muss beachtet werden?','I(A)','Andere Standards können strengere Anforderungen liefern.'],
   ['Wird das Urteil durch Druck oder Vorteile gelenkt?','I(B)','IV(B) und VI(A) können Zustimmung bzw. Konfliktbehandlung ergänzen.'],
   ['Entsteht ein falscher Eindruck über Tatsachen oder Leistung?','I(C)','V(B) konkretisiert die Kommunikation von Annahmen und Grenzen.'],
   ['Liegt berufliche Täuschung oder integritätsschädigendes Verhalten vor?','I(D)','Dasselbe Verhalten kann mehrere Standards verletzen.'],
   ['Ist die Person für ihre Aufgabe ausreichend befähigt?','I(E)','V(A) verlangt zusätzlich eine tragfähige Grundlage der konkreten Analyse.']
  ],'Eine Fallfrage kann den am unmittelbarsten einschlägigen Standard oder sämtliche betroffenen Standards verlangen.'),
  'Ein guter Lösungsweg nennt die entscheidende Bedingung: „Der Vorteil ist vor der unabhängigen Empfehlung an deren Ergebnis geknüpft“ erklärt mehr als „Geschenke sind schlecht“. Solche Bedingungen helfen auch beim Gegenfall: Ein anderer Sachverhalt kann trotz ähnlicher Schlagwörter eine andere Beurteilung erfordern.'
 ])],
 sources:['a','b','c','d','e'].map((x,i)=>({title:'CFA Institute: Standard I('+String.fromCharCode(65+i)+'), Guidance (Stand April 2024)',url:'https://www.cfainstitute.org/standards/professionals/code-ethics-standards/standards-of-practice-i-'+x})),
 review:{status:'draft',date:'2026-09-17',note:'Eigene Fallbeispiele; aktueller Kompetenzstandard und beruflicher Anwendungsbereich ausdrücklich berücksichtigt.'}};
