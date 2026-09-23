const {F,T,X,S,G}=require('../author.cjs');
module.exports={id:'data-science',intro:[
 'Datenwissenschaft verbindet die wirtschaftliche Frage, belastbare Daten und überprüfbare Modelle. Der eigentliche Nutzen liegt nicht darin, möglichst viele Variablen oder das komplexeste Verfahren einzusetzen. Ein Modell muss zum richtigen Zeitpunkt verfügbare Information in eine Entscheidung übersetzen, die auch auf neuen Daten und nach Kosten sinnvoll bleibt.',
 'Dieses Kapitel deckt die begrifflichen Zusammenhänge des Level-I-Lernziels ab. Die Rechenbeispiele zu Klassifikation und Modellbewertung dienen der Vertiefung: Sie zeigen, warum eine scheinbar sehr hohe Trefferquote für Investmententscheidungen trotzdem wenig hilfreich sein kann.'
],sections:[
 S('map','1. Datenwissenschaft, Machine Learning und KI einordnen','a',[
  T(['Begriff','Kernidee','Investmentbeispiel'],[
   ['Datenwissenschaft','Daten gewinnen, strukturieren, untersuchen und in überprüfbare Erkenntnisse übersetzen.','Einen zum Entscheidungszeitpunkt verfügbaren Kennzahlendatensatz aufbauen und eine Hypothese prüfen.'],
   ['Künstliche Intelligenz','Systeme für Aufgaben wie Mustererkennung, Schlussfolgern, Sprachverarbeitung oder Entscheidungsunterstützung.','Dokumente klassifizieren, Informationen extrahieren oder Arbeitsabläufe unterstützen.'],
   ['Machine Learning','Modellverhalten aus Daten lernen, statt jede Zuordnungsregel einzeln vorzugeben.','Aus historischen Merkmals-/Ausfallpaaren eine Ausfallwahrscheinlichkeit schätzen.'],
   ['Deep Learning','Machine Learning mit mehrschichtigen neuronalen Netzen.','Komplexe Text- oder Bildmuster verarbeiten.'],
   ['Generative KI','Neue Inhalte aus gelernten Mustern und Eingaben erzeugen.','Einen Berichtsentwurf oder eine Zusammenfassung mit anschließendem Quellenabgleich erstellen.'],
   ['Fintech','Technologiegestützte Finanzprodukte und Finanzprozesse.','Digitale Beratung, Zahlungsverarbeitung, automatisierte Recherche oder Risikoprüfung.']
  ],'Die Begriffe überschneiden sich, sind aber keine Synonyme. Datenwissenschaft umfasst auch klassische Statistik; KI kann neben Machine Learning andere Verfahren enthalten.'),
  'Eine Regression kann je nach Aufgabe ein statistisches Erklärungsmodell oder ein datengetriebenes Vorhersagemodell sein. Der Methodenname allein entscheidet nicht über die Qualität. Ein komplexes neuronales Netz bleibt auf geeignete Daten, Zielgrößen und Validierung angewiesen.',
  'Ein Sprachmodell, das plausibel über eine Bilanz schreibt, hat damit noch nicht jede Zahl korrekt aus der Bilanz übernommen. Generierung, Dokumentenabruf und rechnerische Prüfung sind unterschiedliche Funktionen.'
 ]),
 S('big-data','2. Big Data: Umfang ist nur eine Dimension','a',[
  T(['Dimension','Was sich verändert','Finanzielle Konsequenz'],[
   ['Volume','Sehr große Datenmengen.','Speicherung und Verarbeitung werden aufwendiger; redundante Datensätze sind trotzdem keine unabhängige Evidenz.'],
   ['Velocity','Schnelle Entstehung und Aktualisierung.','Ein Intraday-Signal braucht andere Latenz- und Zeitstempelkontrollen als eine Quartalsanalyse.'],
   ['Variety','Tabellen, Texte, Bilder, Zeitreihen und weitere Formen.','Information muss für eine konkrete Frage vergleichbar und auswertbar gemacht werden.'],
   ['Veracity','Zuverlässigkeit, Herkunft und Fehlerhaftigkeit.','Ein großer fehlerhafter Datensatz kann sehr präzise falsche Muster erzeugen.'],
   ['Value','Entscheidungsrelevanter Nutzen.','Ein Signal muss zusätzliche Information oder einen besseren Prozess liefern, nicht nur mehr Daten.']
  ],'Volume, Velocity und Variety bilden eine verbreitete Kerneinteilung; Veracity und Value ergänzen sie um Datenqualität und Nutzen.'),
  'Strukturierte Daten besitzen ein festes Schema, etwa eine Tabelle mit Firma, Datum und Umsatz. Semistrukturierte Daten enthalten organisierende Kennzeichnungen bei flexibler Struktur, etwa JSON-Felder. Unstrukturierter Freitext oder Bilder besitzen kein für die Analyse unmittelbar ausreichendes festes Tabellenschema.',
  'Alternative Daten können Transaktionen, Webaktivität, Satellitenbeobachtungen oder öffentliche Texte umfassen. Sie sind nicht automatisch exklusiv, legal verwendbar, repräsentativ oder besser als traditionelle Informationen. Herkunft, Nutzungsrechte, Abdeckung, Veröffentlichungslags und mögliche Verzerrungen gehören zur wirtschaftlichen Bewertung.'
 ]),
 S('pipeline','3. Von der Anlagefrage zur sauberen Datentabelle','a',[
  T(['Schritt','Beispiel: Ausfallrisiko in zwölf Monaten'],[
   ['Ziel und Entscheidung','Eine Risikowarnung für heute existierende Emittenten; definierte Ausfallart und Prognosehorizont.'],
   ['Beobachtungseinheit','Ein Unternehmen zu einem konkreten Prognosestichtag, nicht eine zufällige Textzeile.'],
   ['Merkmale','Bis zum Stichtag veröffentlichte Verschuldung, Liquidität, Cashflows und gegebenenfalls Markt-/Textdaten.'],
   ['Zielvariable','Ob im folgenden Zwölfmonatsfenster ein nach Definition relevanter Ausfall eintritt.'],
   ['Bereinigung','Einheiten, Identifier, Duplikate, fehlende Werte, Unternehmensereignisse und Veröffentlichungstermine prüfen.'],
   ['Modell und Vergleich','Geeignetes Verfahren gegen einfache Basisregeln und bereits verfügbare Risikoinformation prüfen.'],
   ['Validierung und Betrieb','Zeitgerechte Testdaten, Kosten, Stabilität, Überwachung und nachvollziehbare Verantwortlichkeiten.']
  ],'Die Zieldefinition kommt vor der Modellwahl. Andernfalls kann ein mathematisch gut gelöstes Problem wirtschaftlich das falsche sein.'),
  'Fehlend bedeutet nicht null. Ein unbekannter Schuldenwert darf nicht automatisch als schuldenfreies Unternehmen codiert werden. Imputation, Ausschluss oder eine zusätzliche Kennzeichnung benötigen eine Begründung und werden nur anhand der Trainingsdaten angepasst.',
  'Ein extrem hoher Umsatz kann ein Eingabefehler, eine andere Währung oder ein tatsächlich großes Unternehmen sein. Ausreißer pauschal zu entfernen kann gerade die wirtschaftlich interessanten Fälle vernichten. Bereinigungen werden protokolliert und auf Sensitivität geprüft.'
 ]),
 S('learning-types','4. Überwachtes, unüberwachtes und bestärkendes Lernen','a',[
  T(['Lernaufgabe','Was die Daten liefern','Passendes Beispiel und Grenze'],[
   ['Supervised Regression','Merkmale und numerische Zielwerte.','Künftige Gewinnhöhe prognostizieren. Kleine historische Fehler beweisen keine kausale Wirkung der Merkmale.'],
   ['Supervised Classification','Merkmale und Klassen bzw. Ereignislabels.','Ausfall oder kein Ausfall; häufig wird zunächst eine Wahrscheinlichkeit geschätzt.'],
   ['Unsupervised Clustering','Merkmale ohne vorgegebene Zielklasse.','Unternehmen anhand ähnlicher Geschäftseigenschaften gruppieren. Die Cluster sind nicht automatisch Renditeklassen.'],
   ['Unsupervised Dimension Reduction','Viele Merkmale, aus denen eine kompaktere Darstellung gewonnen wird.','Korrelierte Zinskurvenbewegungen auf wenige Komponenten reduzieren. Hohe erklärte Eingangsvarianz ist keine Garantie hoher Prognosekraft.'],
   ['Reinforcement Learning','Zustände, Handlungen und Belohnungen über eine Folge von Entscheidungen.','Eine Ausführungsstrategie in einer geeigneten Marktumgebung untersuchen. Die Belohnungsdefinition und die Simulationsrealität sind kritisch.']
  ],'Supervised bedeutet nicht, dass ein Mensch jede einzelne Prognose überwacht; es bedeutet, dass beim Lernen passende Zielwerte vorliegen.'),
  'Ein Entscheidungsbaum teilt den Merkmalsraum nach Regeln auf. Ein Ensemble kombiniert mehrere Modelle, beispielsweise viele Bäume. Regularisierung begrenzt die Anpassungsfreiheit. Diese Methoden können Prognosen verbessern, ersetzen aber weder eine geeignete Zeitaufteilung noch eine wirtschaftliche Verlustfunktion.',
  F('\\hat\\theta=\\operatorname*{arg\\,min}_{\\theta}\\left[\\frac1n\\sum_{i=1}^n\\ell(y_i,f_\\theta(\\mathbf x_i))+\\lambda\\Omega(\\theta)\\right]','Eine allgemeine Lernregel minimiert den Trainingsverlust zuzüglich einer Komplexitätsstrafe. Die Strafe kann die In-sample-Passung verschlechtern und dennoch die Generalisierung verbessern.',[['\\hat\\theta,\\theta','Gewählte Modellparameter und bei der Optimierung veränderte Parameter.'],['\\mathbf x_i,y_i','Merkmalsvektor und beobachtetes Ziel des Falls i.'],['f_\\theta','Vorhersagefunktion.'],['\\ell','Verlustfunktion, etwa quadrierter Prognosefehler.'],['\\Omega(\\theta),\\lambda','Komplexitätsmaß und nichtnegatives Strafgewicht.'],['n,i','Trainingsfallzahl und Index.'],['\\operatorname*{arg\\,min}','Der Parameterwert, bei dem der Ausdruck minimal wird.']])
 ]),
 S('time-split','5. Training, Validierung und Test nach Informationszeit trennen','a',[
  'Training bestimmt die Modellparameter. Validierung dient der Auswahl von Verfahren, Merkmalen und Hyperparametern. Ein abschließender Test schätzt die Leistung nach dieser Auswahl auf bisher unbenutzten Daten. Wer nach jedem Testergebnis erneut optimiert, hat den Test faktisch in die Validierung aufgenommen.',
  T(['Fehlerquelle','Warum das Ergebnis zu gut erscheint','Geeignete Kontrolle'],[
   ['Look-ahead Bias','Eine Bilanz wird ab Periodenende genutzt, obwohl sie erst später veröffentlicht wurde.','Tatsächlichen Verfügbarkeitszeitpunkt statt nur Berichtsperiode speichern.'],
   ['Data Leakage','Skalierung oder Merkmalsauswahl verwendet bereits Testdaten oder zukünftige Zielinformationen.','Jeden gelernten Vorbereitungsschritt nur im jeweiligen Trainingsabschnitt fitten.'],
   ['Survivorship Bias','Später ausgeschiedene Firmen fehlen.','Historische Grundgesamtheit zum damaligen Stichtag rekonstruieren.'],
   ['Überlappende Labels','Ein Zwölfmonatsziel im Training reicht in den Zeitraum des Tests.','Zeitliche Trennung, geeignete Lücken und Bereinigung überlappender Informationsfenster.'],
   ['Wiederholte Firmen-/Kundendaten','Nahezu identische Fälle erscheinen auf beiden Seiten der Aufteilung.','Gruppenstruktur entsprechend dem tatsächlichen Prognoseeinsatz berücksichtigen.']
  ],'Ein zufälliger Split ist nicht für jede Finanzfrage falsch, aber er kann die reale zeitliche Verfügbarkeit und Abhängigkeit verfehlen.'),
  X('Eine Jahreszahl ist noch kein Verfügbarkeitsdatum','Eine Bilanz zum 31. Dezember wird erst am 20. März veröffentlicht. Das Modell soll eine Entscheidung am 1. Februar unterstützen.',[
   'Der Abschlussstichtag liegt zwar in der Vergangenheit. Die noch unveröffentlichte Bilanz wäre am Entscheidungsdatum trotzdem nicht verfügbar.',
   'Ein Backtest, der die endgültigen Jahreswerte bereits am 1. Januar kennt, nutzt spätere Information. Auch spätere Restatements dürfen nicht ungekennzeichnet in die damalige Sicht zurückgeschrieben werden.',
   'Ein Point-in-time-Datensatz hält fest, welche Version welcher Information bis zum Prognosezeitpunkt tatsächlich zugänglich war.'
  ],'Die richtige Uhr ist die Informationsverfügbarkeit, nicht nur die ökonomische Berichtsperiode.')
 ]),
 S('overfitting','6. Überanpassung und Modellrisiko erkennen','a',[
  'Overfitting bedeutet, dass das Modell Besonderheiten und Zufall der Trainingsdaten als scheinbar allgemeine Regel übernimmt. Es kann dadurch einen sehr kleinen Trainingsfehler, aber einen hohen Fehler auf neuen Daten haben. Underfitting entsteht, wenn das Modell wichtige Struktur nicht ausreichend abbilden kann.',
  'Wenige echte unabhängige Krisen, viele korrelierte Merkmale und die Suche über zahlreiche Strategien sind in Finanzanwendungen besonders problematisch. Eine Million Tick-Beobachtungen sind nicht automatisch eine Million unabhängige Beispiele verschiedener Marktregime.',
  T(['Mögliche Maßnahme','Nutzen','Grenze'],[
   ['Einfaches Vergleichsmodell','Zeigt, ob Komplexität zusätzliche Leistung liefert.','Ein schlechter Vergleichsmaßstab macht Verbesserungen zu leicht.'],
   ['Regularisierung und begründete Merkmalsauswahl','Begrenzen unnötige Freiheitsgrade.','Auswahl darf keine Testinformation nutzen.'],
   ['Zeitgerechte Validierung','Nähert die zukünftige Anwendung besser an.','Ein neuer Strukturbruch kann trotzdem außerhalb jeder beobachteten Historie liegen.'],
   ['Dokumentation aller Versuche','Macht Suchumfang und Mehrfachtestproblem sichtbar.','Ein ausgewähltes Spitzenergebnis bleibt ohne passende Bewertung verzerrt.'],
   ['Monitoring nach Einsatz','Erkennt Daten- und Leistungsänderungen.','Monitoring hilft nur mit definierten Schwellen und tatsächlichen Handlungsregeln.']
  ],'Ein Modell muss nicht nur einmal trainiert, sondern während seines Einsatzes beurteilt werden.'),
  'Data Drift bedeutet eine Änderung der Eingangsverteilung. Concept Drift bezeichnet eine Änderung des Zusammenhangs zwischen Eingaben und Ziel. Ein unverändertes Eingabemittel schließt Concept Drift nicht aus; etwa kann derselbe Verschuldungsgrad bei anderen Refinanzierungsbedingungen ein anderes Ausfallrisiko bedeuten.'
 ]),
 S('classification','7. Warum 98 % Accuracy nutzlos sein können','a',[
  T(['Tatsächlicher Zustand','Warnung ausgegeben','Keine Warnung'],[
   ['Ausfall','TP = 14','FN = 6'],['Kein Ausfall','FP = 49','TN = 931']
  ],'Eigener Validierungsdatensatz mit 1.000 Fällen, davon 20 Ausfällen. Positive Klasse und „Warnung“ bedeuten hier ein prognostiziertes Ausfallrisikosignal.'),
  F('Accuracy=\\frac{TP+TN}{N},\\quad Precision=\\frac{TP}{TP+FP},\\quad Recall=\\frac{TP}{TP+FN},\\quad FPR=\\frac{FP}{FP+TN}','Die Kennzahlen verwenden unterschiedliche Bezugsgruppen. Accuracy zählt alle richtigen Klassifikationen, Precision die tatsächlich ausgefallenen unter den Warnungen und Recall die gewarnten unter den tatsächlichen Ausfällen.',[['TP,FN','Richtig gewarnte bzw. verpasste Ausfälle.'],['FP,TN','Falsch gewarnte bzw. richtig nicht gewarnte Nichtausfälle.'],['N','Gesamtfallzahl.'],['Accuracy,Precision,Recall,FPR','Gesamttrefferrate, positiver Vorhersagewert, Sensitivität und Falsch-Positiv-Rate.']]),
  X('Die Nenner beantworten verschiedene Fragen','Verwende die 1.000 Fälle aus der Tabelle.',[
   'Accuracy = (14 + 931)/1.000 = 94,5 %. Eine Regel „niemals warnen“ hätte sogar 980/1.000 = 98 %, würde aber keinen einzigen Ausfall erkennen.',
   'Precision = 14/(14 + 49) = 22,22 %. Unter den 63 Warnungen sind 14 tatsächliche Ausfälle. Die geringe Basisrate macht zahlreiche falsche Warnungen trotz niedriger Falsch-Positiv-Rate möglich.',
   'Recall = 14/20 = 70 %. Sieben von zehn tatsächlichen Ausfällen werden erkannt. FPR = 49/980 = 5 % beschreibt dagegen die Nichtausfälle.',
   'Ob dieses Modell nützlich ist, hängt von den Folgen einer Warnung und eines verpassten Ausfalls ab. Accuracy allein beantwortet diese Frage nicht.'
  ],'Das Beispiel verbindet Modellbewertung mit Bayes: Wahrscheinlichkeit einer Warnung gegeben Ausfall ist nicht Wahrscheinlichkeit eines Ausfalls gegeben Warnung.'),
  'Bei einer veränderten Basisrate kann die Precision auch bei gleicher Sensitivität und Falsch-Positiv-Rate stark wechseln. Eine Kennzahl aus einem künstlich balancierten Datensatz darf deshalb nicht ungeprüft als Praxisquote ausgegeben werden.'
 ]),
 S('threshold','8. Wahrscheinlichkeiten in Entscheidungen übersetzen','a',[
  F('\\hat y_i=\\mathbf1(\\hat p_i\\ge\\tau),\\qquad C=c_{FN}FN+c_{FP}FP','Ein Klassifikator kann zuerst eine Ereigniswahrscheinlichkeit schätzen. Die Entscheidungsschwelle übersetzt sie in eine Warnung; die wirtschaftliche Bewertung gewichtet verschiedene Fehler unterschiedlich.',[['\\hat p_i,\\hat y_i','Geschätzte Ausfallwahrscheinlichkeit und binäre Warnentscheidung für Fall i.'],['\\tau,\\mathbf1','Entscheidungsschwelle und Indikatorfunktion, die bei erfüllter Bedingung eins ist.'],['C','Gesamtkosten im vereinfachten Fehlermodell.'],['FN,FP','Anzahl verpasster Ausfälle und falscher Warnungen.'],['c_{FN},c_{FP}','Kosten je verpasstem Ausfall bzw. je falscher Warnung.']]),
  T(['Validierungsregel','TP / FN','FP / TN','Kosten bei cFN = 100, cFP = 1'],[
   ['A: höhere Schwelle','14 / 6','49 / 931','649'],
   ['B: niedrigere Schwelle','18 / 2','147 / 833','347'],
   ['Keine Warnung','0 / 20','0 / 980','2.000']
  ],'Konstruierte Regeln auf derselben Validierungspopulation. Die Kosten sind didaktische Einheiten, keine vollständige Kreditgewinnrechnung.'),
  X('Mehr falsche Warnungen können im passenden Kostenmodell sinnvoll sein','Beim Senken der Schwelle von A zu B werden vier zusätzliche Ausfälle erkannt; gleichzeitig entstehen 98 zusätzliche falsche Warnungen.',[
   'Regel A: 6 × 100 + 49 × 1 = 649. Regel B: 2 × 100 + 147 × 1 = 347. B hat hier 302 Kosteneinheiten weniger, obwohl die Accuracy auf 85,1 % sinkt.',
   F('6c_{FN}+49=2c_{FN}+147\\quad\\Longrightarrow\\quad c_{FN}=24{,}5','Bei Kosten einer falschen Warnung von eins sind beide Regeln gleich teuer, wenn ein verpasster Ausfall 24,5 kostet. Darüber ist B günstiger, darunter A.',[['c_{FN}','Kosten je verpasstem Ausfall in Einheiten der Kosten einer falschen Warnung.']]),
   'Die Schwelle wird mit geeigneten Validierungsdaten festgelegt und anschließend auf unbenutzten Daten beurteilt. Sie immer wieder am abschließenden Test zu optimieren würde dessen Unabhängigkeit aufheben.'
  ],'Niedrigere Schwellen erhöhen typischerweise Recall und Fehlalarme. Welche Regel besser ist, verlangt ein Ziel und eine Kostenstruktur.'),
  G({id:'classification-cost',title:'Die bevorzugte Warnregel hängt vom Preis verpasster Ausfälle ab',
   caption:'Kostenmodell der Tabelle; Kosten einer falschen Warnung = 1. A verpasst sechs Ausfälle und erzeugt 49 Fehlalarme, B verpasst zwei und erzeugt 147.',
   reading:'Links vom Schnittpunkt 24,5 ist A billiger. Rechts davon wiegen die vier zusätzlich verpassten Ausfälle schwerer als die 98 vermiedenen Fehlalarme; B ist billiger. Die Fallzahlen selbst werden nicht verändert.',
   plot:{x:[0,150],y:[0,1000],xLabel:'Kosten je verpasstem Ausfall',yLabel:'Gesamtkosten',series:[{name:'Regel A: höhere Schwelle',points:[[0,49],[150,949]]},{name:'Regel B: niedrigere Schwelle',points:[[0,147],[150,447]]}],marks:[{x:24.5,y:196,label:'Gleich teuer',dx:10,dy:-14}]}})
 ]),
 S('probability-quality','9. Kalibrierung und Prognosefehler jenseits der Trefferquote','a',[
  'Eine Wahrscheinlichkeit ist kalibriert, wenn unter vergleichbaren Fällen mit derselben prognostizierten Wahrscheinlichkeit ungefähr dieser Ereignisanteil auftritt. Unter vielen Fällen mit vorhergesagten 10 % Ausfallwahrscheinlichkeit sollten bei einem stabilen geeigneten Modell ungefähr 10 % ausfallen. Kleine Gruppen erzeugen dabei erhebliche Stichprobenunsicherheit.',
  'Diskrimination beurteilt, ob riskantere Fälle höher gereiht werden als weniger riskante. Ein Modell kann gut ordnen und trotzdem überall zu hohe Wahrscheinlichkeiten ausgeben. Umgekehrt kann die konstante Basisrate durchschnittlich kalibriert sein und dennoch keine Fälle unterscheiden.',
  F('BS=\\frac1N\\sum_{i=1}^N(\\hat p_i-y_i)^2,\\qquad RMSE=\\sqrt{\\frac1N\\sum_{i=1}^N(\\hat z_i-z_i)^2}','Der Brier Score bewertet binäre Wahrscheinlichkeitsprognosen über quadrierte Fehler; RMSE misst numerische Prognosefehler in der Einheit des numerischen Ziels. Bei gleicher geeigneter Vergleichsbasis ist kleiner jeweils besser.',[['BS','Brier Score für binäre Ereignisse.'],['\\hat p_i,y_i','Vorhergesagte Wahrscheinlichkeit und tatsächlich eingetretener Indikator null oder eins.'],['RMSE','Root Mean Squared Error einer numerischen Prognose.'],['\\hat z_i,z_i','Vorhergesagter und realisierter numerischer Zielwert.'],['N,i','Zahl ausgewerteter Testfälle und Index.']]),
  X('Selbstsichere falsche Prognosen werden deutlich bestraft','Ein Ereignis tritt ein, also y = 1.',[
   'Eine vorhergesagte Wahrscheinlichkeit von 0,8 erzeugt einen quadrierten Fehler von (0,8 − 1)² = 0,04.',
   'Eine vorhergesagte Wahrscheinlichkeit von 0,1 erzeugt dagegen (0,1 − 1)² = 0,81. Das Modell war sehr sicher in der falschen Richtung.',
   'Über viele unbenutzte Fälle werden solche Beiträge gemittelt. Der Brier Score bewertet sowohl Kalibrierung als auch Trenninformation und ist nicht isoliert eine reine Kalibrierungskennzahl.'
  ],'Auch eine geeignete statistische Verlustfunktion ersetzt keine separate Rechnung der Handels- oder Entscheidungskosten.')
 ]),
 S('text-ai','10. Text, alternative Daten und generative KI sinnvoll einsetzen','a',[
  'Natural Language Processing kann Dokumente durchsuchen, Entitäten wie Firmen und Zeiträume erkennen, Themen gruppieren oder Textmerkmale für Prognosen gewinnen. Texttokenisierung zerlegt Text in verarbeitbare Einheiten. Embeddings bilden Ähnlichkeit in einem numerischen Merkmalsraum ab; geometrische Nähe ist dabei keine automatische wirtschaftliche Gleichwertigkeit.',
  X('Eine Negation ändert die Aussage','Vergleiche „Wir erwarten einen Verlust“ mit „Wir erwarten keinen Verlust“.',[
   'Eine reine Zählung des Worts „Verlust“ kann beide Texte gleich bewerten. Ein passendes Sprachverfahren muss den Kontext einschließlich Negation berücksichtigen.',
   'Bezieht sich die Aussage auf das nächste Quartal oder auf ein bereits abgeschlossenes Jahr? Ist sie ein Zitat, eine Prognose oder eine später korrigierte Meldung? Diese Unterschiede entscheiden über die Verwendbarkeit als Signal.',
   'Firmenzuordnung und Veröffentlichungszeitpunkt müssen stimmen. Ein nach Handelsschluss erschienener Bericht darf nicht rückwirkend eine Entscheidung zum vorherigen Schlusskurs erklären.'
  ],'Das Textmodell ist nur ein Teil der Daten- und Entscheidungsarchitektur.'),
  'Generative Systeme können Recherche beschleunigen, aber auch unbelegte Quellen, falsche Zahlen oder zu sichere Erklärungen erzeugen. Eine verwendbare Analyse verknüpft relevante Aussagen mit überprüften Ursprungsdokumenten, rechnet wichtige Werte nach und dokumentiert menschliche Prüfung.',
  'Erklärbarkeit hilft zu verstehen, welche Merkmale die Modellprognose beeinflussen. Ein hoher Feature-Importance-Wert beweist keine kausale Wirkung; bei korrelierten Merkmalen kann sich die zugeschriebene Bedeutung zwischen Variablen verschieben.'
 ]),
 S('investment-use','11. Vom statistischen Ergebnis zum tragfähigen Investmentprozess','a',[
  T(['Anwendung','Möglicher Nutzen','Wesentliche Grenze'],[
   ['Research und Screening','Große Dokumentmengen vorsortieren, Beziehungen und Ausreißer finden.','Fehlerhafte Extraktion oder Scheinkorrelation kann Aufmerksamkeit fehlleiten.'],
   ['Prognose und Portfoliokonstruktion','Signale, Risiko- oder Szenarioschätzungen verbessern.','Kosten, Kapazität, Crowding und Regimewechsel können den Vorteil aufheben.'],
   ['Handelsausführung','Orders zeitlich oder über Handelsplätze verteilen.','Ein Simulator kann Liquidität, Marktreaktion und extreme Bedingungen unzureichend abbilden.'],
   ['Risiko und Überwachung','Auffällige Muster oder Datenänderungen früh erkennen.','Fehlalarme und verpasste Fälle brauchen eine sinnvolle Eskalationsregel.'],
   ['Beratung und Prozesse','Information strukturieren und Routinearbeit unterstützen.','Eignung, Vertraulichkeit, Verantwortung und fachliche Prüfung bleiben nötig.']
  ],'Qualität wird am tatsächlichen Einsatz gemessen, nicht nur an der Modellmetrik.'),
  'Vor Verwendung werden Herkunft und erlaubte Nutzung der Daten, Zugriff auf vertrauliche Informationen, mögliche unfaire Verzerrungen sowie Nachvollziehbarkeit der Entscheidungen geprüft. Ein technischer Anbieter übernimmt dadurch nicht automatisch die Verantwortung für die Anlageempfehlung.',
  'Ein guter Abschlussbericht nennt Ziel, Datenstand, Verfügbarkeitsregeln, Trainings-/Validierungs-/Testdesign, Vergleichsmaßstab, Ergebnisse mit Unsicherheit, Kosten und Grenzen. Für den Betrieb kommen Datenüberwachung, Versionierung, dokumentierte Änderungen und ein Verfahren für Ausfälle oder unplausible Ergebnisse hinzu.',
  'Die Rolle des Analysten besteht auch darin, zu erkennen, wann die richtige Antwort „mit diesen Daten nicht zuverlässig entscheidbar“ lautet. Eine erzwungene präzise Prognose kann weniger nützlich sein als eine sauber begründete Unsicherheitsaussage.'
 ])
],related:[{unit:'inference',section:'interpretation',label:'Signifikanz, wirtschaftlicher Nutzen und Mehrfachtests'},{unit:'distributions',section:'bayes',label:'Basisraten und die Aussagekraft eines Warnsignals'},{unit:'regression',section:'workflow',label:'Ein verständliches statistisches Vergleichsmodell aufbauen'},{unit:'standard-v',section:'basis',label:'Daten und Modelle als tragfähige Analysegrundlage prüfen'},{unit:'standard-iii',section:'confidentiality',label:'Vertraulichkeit auch in Datenprozessen beachten'}],
 sources:[
 {title:'CFA Institute: offizieller Level-I-Lernzielkatalog 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=3'},
 {title:'CFA Institute: Introduction to Big Data Techniques',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/introduction-to-big-data-techniques'},
 {title:'CFA Institute: Data Science and AI — A Guide for Investment Managers',url:'https://www.cfainstitute.org/insights/articles/data-science-ai-guide-for-investment-managers'},
 {title:'scikit-learn: Common Pitfalls and Recommended Practices',url:'https://scikit-learn.org/stable/common_pitfalls.html'},
 {title:'NIST: AI Risk Management Framework',url:'https://www.nist.gov/itl/ai-risk-management-framework'}
 ],review:{status:'draft',date:'2026-09-18',note:'Eigene Datenpipeline-, Klassifikations- und Kostenbeispiele; finanzielle Zeitlogik, Leakage und Grenzen generativer Systeme ausdrücklich behandelt.'}};
