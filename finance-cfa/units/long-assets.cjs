const {F,T,X,S,G}=require('../author.cjs');
module.exports={id:'long-assets',intro:[
 'Langfristige Vermögenswerte verteilen eine heutige Investition auf mehrere künftige Nutzungsperioden. Ihr Buchwert beantwortet deshalb weder allein die Frage nach bereits bezahltem Geld noch die nach heutigem Verkaufspreis oder wirtschaftlichem Unternehmenswert. Aktivierung, planmäßige Abschreibung, Wertminderung und Abgang beschreiben unterschiedliche Teile dieser Entwicklung.',
 'Wir verfolgen eigene Anlagenfälle von den Anschaffungskosten über den laufenden Verbrauch bis zu Verlust, Erholung und Verkauf. Die Bilanzanalyse zu Goodwill und Finanzinstrumenten bleibt verknüpft; hier stehen Sachanlagen und identifizierbare immaterielle Werte mit ihren konkreten Überleitungen im Mittelpunkt.'
],sections:[
 S('origin','1. Die Herkunft eines immateriellen Werts beeinflusst seinen Ansatz','a',[
  T(['Herkunft','Grundsätzlicher Ansatz','Analytische Folge'],[
   ['Gesondert erworben','Identifizierbarer Vermögenswert grundsätzlich zu zurechenbaren Erwerbskosten.','Ein beobachtbarer Kaufpreis unterstützt die Bewertung, ersetzt aber nicht die Prüfung späteren Nutzens.'],
   ['Intern entwickelt','IFRS-Forschung bleibt Aufwand; Entwicklung wird erst ab erfüllten Ansatzbedingungen aktiviert. US-GAAP besitzt einen allgemeinen Aufwandsgrundfall mit Spezialregeln.','Wirtschaftlich ähnliche Technik kann unterschiedlich stark in der Bilanz erscheinen.'],
   ['Im Unternehmenszusammenschluss übernommen','Identifizierbare Werte werden im Rahmen der Erwerbsmethode grundsätzlich zum Erwerbs-Fair-Value getrennt von Goodwill erfasst.','Ein zuvor beim Verkäufer nicht angesetzter Wert kann beim Käufer erstmals bilanziert werden.']
  ],'Die Bilanzhistorie des Verkäufers bestimmt nicht automatisch die Erwerbsbilanz des Käufers.'),
  X('Dieselbe Art von Kundenbeziehung, verschiedene Entstehungswege','Unternehmen A baut intern Kundenbeziehungen auf; B erwirbt ein Geschäft mit identifizierbaren, nach Erwerbsregeln anzusetzenden Kundenbeziehungen mit Fair Value 80 und endlicher Nutzungsdauer.',[
   'A darf gewöhnliche interne Vertriebs- und Kundenaufbauausgaben nicht allein wegen erwarteter Folgeumsätze als selbst geschaffenen Kundenstamm aktivieren.',
   'B erfasst den im Erwerb identifizierten Wert getrennt von Goodwill. Die anschließende Amortisation kann B stärker belasten, obwohl beide Unternehmen Kunden bedienen.',
   'Ein unveränderter Vergleich von Gewinnmarge und Asset Turnover vermischt daher gegebenenfalls Betriebsleistung und Erwerbshistorie.',
   'Die spätere Amortisation ist nicht automatisch wirtschaftlich bedeutungslos: Der beim Erwerb bezahlte Kundenstamm kann tatsächlich abwandern und Ersatzaufwand benötigen.'
  ],'Vergleichbarkeit verlangt Kenntnis von Entstehung, Erwerbspreiszuordnung und verbleibender Nutzbarkeit.'),
  'Für Forschung und Entwicklung sind technische Machbarkeit, Absicht, Nutzbarkeit, Nutzen, Ressourcen und Kostenmessung gemeinsam zu prüfen. Ein erworbenes Forschungsprojekt besitzt eine andere Erwerbsbewertungsfrage als ein eigenes noch unsicheres Vorhaben; die jeweiligen Detailregeln dürfen nicht aus einem einzigen Schlagwort abgeleitet werden.'
 ]),
 S('initial-cost','2. Vom Kaufpreis zu den nutzungsbereiten Anschaffungskosten','a c',[
  'Bei einer Sachanlage gehören im Grundfall Kaufpreis nach Nachlässen und direkt zurechenbare Aufwendungen bis zum notwendigen Ort und betriebsbereiten Zustand zu den Kosten. Eine einschlägige Rückbauverpflichtung kann mit ihrem anfänglichen Barwert hinzukommen. Schulungen, allgemeine Anlaufverluste und fortlaufende Instandhaltung werden nicht pauschal zu Anlagenkosten, nur weil sie im selben Projekt anfallen.',
  X('Projektzahlung und Anlagenzugang sind unterschiedliche Beträge','Eine Maschine kostet 100; Transport und Installation 8, Mitarbeiterschulung 4, anfänglich anzusetzender Barwert einer Rückbaupflicht 6. Keine Steuerwirkung, alle genannten Zahlungen außer Rückbau sind sofort fällig.',[
   'Anlagenzugang: 100 + 8 + 6 = 114. Schulung 4 ist im beschriebenen Grundfall Aufwand.',
   'Aktuelle Barzahlung: 100 + 8 + 4 = 112. Die Rückbaupflicht 6 ist ein nicht zahlungswirksamer Zugang von Vermögen und Verpflichtung.',
   'Anlagenbuchwert 114, Projektzahlung 112 und laufender Aufwand 4 messen somit drei verschiedene Dinge.',
   'Ein späterer Austausch eines wesentlichen Bauteils kann bei erfüllten Ansatzvoraussetzungen ein neuer Zugang sein; der ersetzte Restbuchwert wird dann ausgebucht. Einfache Wartung wird nicht allein wegen positiver Wirkung aktiviert.'
  ],'Ansatz, Zeitpunkt und Zahlung werden einzeln zugeordnet. Besondere Regeln wie qualifizierende Fremdkapitalkosten benötigen ihren eigenen Anwendungsfall.'),
  'Abschreibung beginnt grundsätzlich mit der Nutzungsbereitschaft. Ein ungenutztes, aber einsatzbereites Anlagegut wird dadurch nicht automatisch abschreibungsfrei. Wesentliche Bestandteile mit unterschiedlichen Nutzungsmustern sind unter IAS 16 gesondert zu betrachten.'
 ]),
 S('depreciation','3. Abschreibung bildet Verbrauchsmuster ab','b c',[
  F('Dep_{SL}=\\frac{Cost-RV}{n},\\qquad Dep_{UOP,t}=(Cost-RV)\\frac{q_t}{Q}','Lineare Abschreibung verteilt den abschreibbaren Betrag zeitlich gleichmäßig. Leistungsabhängige Abschreibung folgt der verbrauchten Menge des erwarteten Leistungspotenzials.',[['Dep_{SL}','Jährliche lineare Abschreibung bei vollen Nutzungsjahren.'],['Dep_{UOP,t}','Leistungsabhängige Abschreibung in Periode t.'],['Cost,RV','Anschaffungs- bzw. relevante Bewertungskosten und geschätzter Restwert.'],['n','Geschätzte Nutzungsdauer in Jahren.'],['q_t,Q','Nutzung der Periode und erwartete gesamte Nutzungsmenge.']]),
  T(['Anlagekosten 100; Restwert 10; drei Jahre','Jahr 1','Jahr 2','Jahr 3','Gesamt'],[
   ['Lineare Abschreibung','30','30','30','90'],
   ['Nutzung: 450, 300, 150 von insgesamt 900 Einheiten','45','30','15','90'],
   ['Buchwert nach linearer Abschreibung','70','40','10',''],
   ['Buchwert nach leistungsabhängiger Abschreibung','55','25','10','']
  ],'Gleiche Gesamtkosten, gleiche Zahlung und gleicher Restwert können unterschiedliche Periodengewinne erzeugen.'),
  F('Dep_{DB,t}=\\max(0,\\min(d\\,BV_{t-1},BV_{t-1}-RV))','Bei einer degressiven Variante wird ein fester Satz auf den jeweiligen Anfangsbuchwert angewendet, ohne den Restwert zu unterschreiten. Die gewählte Methode muss den gesamten abschreibbaren Betrag über die Nutzungsdauer verteilen; gegebenenfalls ist ein geplanter Wechsel zur linearen Restverteilung nötig.',[['Dep_{DB,t}','Degressiver Abschreibungsbetrag der Periode.'],['d','Gewählter nicht negativer degressiver Periodensatz.'],['BV_{t-1}','Buchwert vor der Periodenabschreibung.'],['RV','Geschätzter Restwert im Modell.']]),
  'Die ersten beiden Formeln setzen Kosten mindestens in Höhe des Restwerts voraus. Steigt der Restwert einer Sachanlage nach IAS 16 auf oder über ihren Buchwert, ist die planmäßige Abschreibung zunächst null. Eine negative Abschreibung und damit eine automatische Aufwertung folgen daraus nicht. Die Abschreibung setzt erst wieder ein, wenn ein abschreibbarer Betrag besteht.',
  'Eine längere Nutzungsdauer oder ein höherer Restwert senkt bei unveränderter Kostenbasis die aktuelle lineare Abschreibung. Das hebt heutigen Gewinn und Buchwert, schafft aber kein zusätzliches Kundengeld. Für eine Beurteilung zählen technische Alterung, Wartung, Auslastung und Ersatzbedarf; ein günstigerer Rechnungslegungseffekt beweist nicht die bessere Schätzung.'
 ]),
 S('estimate-change','4. Neue Schätzung verändert die verbleibende Verteilung','b c',[
  X('Restnutzung wird aufgrund neuer Informationen angepasst','Kosten 120, ursprüngliche Nutzungsdauer fünf Jahre, Restwert 20, linear. Nach zwei vollen Jahren wird die verbleibende Nutzungsdauer auf vier Jahre und der Restwert auf 8 geschätzt.',[
   'Ursprüngliche Jahresabschreibung: (120 − 20)/5 = 20. Buchwert nach zwei Jahren: 120 − 40 = 80.',
   'Neuer künftig abzuschreibender Betrag: 80 − 8 = 72. Verteilung auf vier verbleibende Jahre: 18 pro Jahr.',
   'Die Änderung wirkt prospektiv. Die bisher erfassten 40 werden im Fall neuer Informationen nicht nachträglich wie ein Fehler umgeschrieben.',
   'Die gesunkene Restwertannahme allein würde den jährlichen Aufwand erhöhen; die verlängerte Restnutzung wirkt hier stärker in die andere Richtung. Man muss beide Änderungen zusammen rechnen.'
  ],'Ein Methoden- oder Schätzungsvergleich benötigt Anfangsbuchwert, Restwert und Restnutzungsdauer, nicht nur eine neue Prozentzahl.'),
  F('Dep_{new}=\\frac{\\max(0,BV_{change}-RV_{new})}{n_{remaining}}','Die neue Kostenverteilung startet beim noch vorhandenen Buchwert nach gegebenenfalls erforderlicher Werthaltigkeitsprüfung. Ein höherer Restwert erzeugt keinen negativen Aufwand.',[['Dep_{new}','Künftige lineare Abschreibung pro Jahr.'],['BV_{change}','Buchwert zum Änderungszeitpunkt.'],['RV_{new}','Neu geschätzter Restwert.'],['n_{remaining}','Neu geschätzte positive Zahl verbleibender Nutzungsjahre.']])
 ]),
 S('impairment-scope','5. Vor der Wertminderung den Prüfungsgegenstand bestimmen','b',[
  'Wertminderung ist ein zusätzlicher Werthaltigkeitsverlust und nicht bloß die ohnehin vorgesehene zeitliche Kostenverteilung. Auslöser können technischer Ersatz, schwache Nachfrage, Schäden, regulatorische Beschränkungen oder veränderte Diskontsätze sein. Eine Maschine ohne unabhängige Zuflüsse wird häufig in einer passenden Einheit oder Asset Group geprüft.',
  T(['Gegenstand','Relevante Abgrenzung'],[
   ['Sachanlagen und endliche immaterielle Werte in Nutzung','IAS-36-Test bei relevanten Anzeichen; US-GAAP-Held-and-Used-Regeln besitzen einen anderen Ablauf.'],
   ['Goodwill oder bestimmte unbestimmte immaterielle Werte','Besondere mindestens jährliche Tests und unterschiedliche Testebenen; nicht pauschal der US-Sachanlagen-Zweistufentest.'],
   ['Vorräte','Eigener Niederstwerttest; kein gewöhnlicher IAS-36-Anlagentest.'],
   ['Finanzielle Forderungen','Je nach Kategorie Kreditverlust- und Finanzinstrumentenregeln.'],
   ['Anlagen zum Verkauf','Bei erfüllter Klassifikation eigene Held-for-Sale-Bewertung und Abschreibungsfolgen.']
  ],'Erst Standard und Testebene, dann Vergleichswert und Buchung.'),
  'Eine laufende Anlage wird nach einer Wertminderung weiter über die verbleibende Nutzungsdauer abgeschrieben. Der niedrigere Buchwert kann deshalb künftige Gewinne mechanisch erhöhen, obwohl das Geschäftsmodell durch die zugrunde liegende schlechte Nachricht geschwächt wurde.'
 ]),
 S('ifrs-impairment','6. IFRS: Nutzung und Veräußerung als Alternativen','b',[
  F('VIU=\\sum_{t=1}^{n}\\frac{CF_t}{(1+r)^t},\\qquad RA=\\max(VIU,FVLCOD),\\qquad Imp=\\max(0,BV-RA)','Das Modell vergleicht den Buchwert mit dem besseren der beiden geeigneten Rückgewinnungswege. Diskontierung, Cashflowabgrenzung und Testeinheit müssen zueinander passen.',[['VIU','Nutzungswert nach den Modellannahmen.'],['CF_t','Geeigneter erwarteter Netto-Cashflow zum Ende von Periode t, einschließlich eines passenden Endabgangs soweit relevant.'],['r,n,t','Passender Periodendiskontsatz, Periodenzahl und Zahlungsindex.'],['FVLCOD','Beizulegender Wert abzüglich Veräußerungskosten.'],['RA,BV,Imp','Erzielbarer Betrag, vergleichbarer Buchwert und Wertminderung.']]),
  X('Der höhere Rückgewinnungsweg schützt vor zu großer Abschreibung','Buchwert einer geprüften Einheit 110. Erwartete Nettozuflüsse 40 am Ende jedes der nächsten drei Jahre, kein weiterer Enderlös. Passender Diskontsatz 10 %, Fair Value abzüglich Veräußerungskosten 90.',[
   F('VIU=\\frac{40}{1{,}10}+\\frac{40}{1{,}10^2}+\\frac{40}{1{,}10^3}\\approx99{,}4741','Die späteren 40 sind heute weniger wert als die gleich hohe erste Zahlung.',[['VIU','Nutzungswert des Falles in Geldeinheiten.']]),
   'Erzielbarer Betrag max(99,4741; 90) = 99,4741. Wertminderung 110 − 99,4741 = 10,5259.',
   'Eine Abschreibung auf 90 wäre zu groß, weil der geeignete Nutzungswert höher ist. Die ungewichtete Summe 120 wäre hingegen kein diskontierter Nutzungswert.'
  ],'Eine wirtschaftliche Zukunftszahlung wird weder mit ihrem Nominalbetrag noch automatisch mit dem Verkaufspreis gleichgesetzt.'),
  'Der einfache Fall hat keinen Goodwill und keine besonderen Allokationsgrenzen. Bei einer echten CGU sind Verlustzuordnung, Mindestwerte und die Zusammensetzung des Vergleichsbuchwerts gesondert zu berücksichtigen.'
 ]),
 S('us-impairment','7. US-Held-and-Used: erst undiskontierter Test, dann Fair Value','b',[
  'Im gewöhnlichen US-GAAP-Modell für langfristige Sachanlagen und endliche immaterielle Werte in Nutzung wird bei einem relevanten Anlass zunächst geprüft, ob der Buchwert durch die passenden undiskontierten Cashflows gedeckt ist. Erst bei nicht bestandenem Recoverability Test wird der Verlust anhand des Fair Value gemessen. Diese zwei Beträge erfüllen unterschiedliche Aufgaben.',
  F('UCF=\\sum_{t=1}^{n}CF_t,\\qquad Imp_{US}=\\begin{cases}BV-FV,&BV>UCF\\\\0,&BV\\le UCF\\end{cases}','Die vereinfachte Fallregel unterstellt eine korrekt abgegrenzte Asset Group und einen unter dem Buchwert liegenden Fair Value im nicht gedeckten Fall. Sie gilt nicht pauschal für Goodwill oder Held-for-Sale-Objekte.',[['UCF','Geeignete undiskontierte Netto-Cashflows aus Nutzung und späterem Abgang.'],['CF_t,t,n','Periodenzahlungen, Index und Zahl der berücksichtigten Perioden.'],['BV,FV','Vergleichbarer Buchwert und Fair Value der geprüften Gruppe.'],['Imp_{US}','US-Wertminderung im beschriebenen Held-and-Used-Grundfall.']]),
  T(['Gleicher Buchwert 110; drei Jahreszahlungen; Diskontsatz im IFRS-Modell 10 %','Fall A','Fall B'],[
   ['Zahlung pro Jahr','40','30'],
   ['Undiskontierte Summe','120','90'],
   ['Diskontierter Nutzungswert','99,4741','74,6056'],
   ['Fair Value; Veräußerungskosten hier null','90','70'],
   ['IFRS-Wertminderung','10,5259','35,3944'],
   ['US-Held-and-Used-Wertminderung','0','40']
  ],'In Fall A fällt nur der IFRS-Buchwert. In Fall B greifen beide Verfahren, aber mit verschiedenen Vergleichswerten.'),
  'In Fall A bestehen die undiskontierten 120 den US-Test; aus dem niedrigeren Fair Value 90 allein folgt deshalb noch keine US-Abschreibung. In Fall B scheitert der Test mit 90 gegenüber 110. Der US-Verlust beträgt dann 110 − 70 = 40, nicht 110 − 90 = 20. Die zweite Differenz würde die Testschwelle fälschlich zum Bewertungsmaßstab machen.',
  'Unterschiedliche Verluste bedeuten hier keine unterschiedliche physische Anlage. Sie entstehen aus den Regeln. Ein Analyst kann beide Informationen für eine eigene Werthaltigkeitsbeurteilung nutzen, ohne damit den offiziellen Abschluss eigenmächtig umzubuchen.'
 ]),
 S('reversal','8. Die Zuschreibungsgrenze enthält die inzwischen verbrauchte Nutzung','b',[
  'Bei geeigneten IFRS-Vermögenswerten außer Goodwill kann eine belegte Änderung der maßgeblichen Schätzungen eine Zuschreibung verlangen. Die Grenze ist nicht der ursprüngliche Anschaffungsbetrag, sondern der Buchwert, der heute ohne frühere Wertminderung nach normalem Verbrauch bestünde. Bloßer Zeitablauf und Aufzinsung allein genügen nicht als Nachweis verbesserten Nutzungspotenzials.',
  F('BV_{restored}=\\min(RA_{new},BV_{without}),\\qquad Rev=\\max(0,BV_{restored}-BV_{before})','Der Wiederanstieg setzt eine zulässige belegte Erholung voraus. Die Vergleichsobergrenze verhindert, dass bereits vergangener Verbrauch erneut als Vermögen entsteht.',[['BV_{restored}','Buchwert nach zulässiger Zuschreibung.'],['RA_{new}','Neu ermittelter erzielbarer Betrag.'],['BV_{without}','Hypothetischer heutiger Buchwert ohne frühere Wertminderung, nach normaler Abschreibung.'],['BV_{before}','Buchwert unmittelbar vor Zuschreibung.'],['Rev','Zuschreibungsbetrag.']]),
  X('Warum ein erzielbarer Betrag von 110 nur zu Buchwert 90 führt','Kosten 150, fünf Jahre linear, Restwert null. Nach Jahr 1 fällt der Buchwert von 120 durch eine Wertminderung auf 90. Nach Jahr 2 rechtfertigen neue Schätzungen einen erzielbaren Betrag von 110.',[
   'Nach dem ersten Verlust verbleiben vier Nutzungsjahre: 90/4 = 22,50 jährliche Abschreibung.',
   'Buchwert vor Erholung am Ende von Jahr 2: 90 − 22,50 = 67,50.',
   'Ohne den früheren Verlust wäre der Buchwert jetzt 150 − 2 × 30 = 90. Dieser Betrag begrenzt die Zuschreibung trotz erzielbarem Betrag 110.',
   'Zuschreibung: 90 − 67,50 = 22,50. Anschließend werden die 90 über die verbleibenden drei Jahre mit je 30 verteilt.',
   'Unter dem gewöhnlichen US-Held-and-Used-Modell bleibt eine frühere Wertminderung dagegen eine neue Kostenbasis; die bloße Erholung wird nicht in derselben Weise zugeschrieben.'
  ],'Eine geringere Folgeabschreibung und eine spätere Zuschreibung sind verschiedene Ergebniseffekte.'),
  G({id:'impairment-path',title:'Wertminderung, Folgeabschreibung und begrenzte Erholung',
   caption:'Eigene Anlage mit Kosten 150, fünf Nutzungsjahren und Restwert null. Beide Fälle erhalten nach Jahr 1 denselben Verlust von 30; nur IFRS darf im ausdrücklich angenommenen Erholungsfall nach Jahr 2 auf den hypothetischen Buchwert 90 zurückkehren.',
   reading:'Die Sprünge zeigen Buchungen am Jahresende. Nach der Abwertung beträgt der jährliche Verbrauch zunächst 22,50. Die IFRS-Zuschreibung erreicht die Referenz ohne Verlust, nicht den höheren erzielbaren Betrag 110. Danach steigen die jährlichen Abschreibungen wieder auf 30.',
   plot:{x:[0,5],y:[0,165],xTicks:[0,1,2,3,4,5],xLabel:'Nutzungsjahr',yLabel:'Anlagenbuchwert',series:[
    {name:'IFRS: Verlust, dann zulässige Erholung',points:[[0,150],[1,120],[1,90],[2,67.5],[2,90],[3,60],[4,30],[5,0]]},
    {name:'US: Verlust bleibt neue Kostenbasis',dash:'5 4',points:[[0,150],[1,120],[1,90],[2,67.5],[3,45],[4,22.5],[5,0]]},
    {name:'Referenz ohne ursprünglichen Verlust',dash:'2 5',points:[[0,150],[1,120],[2,90],[3,60],[4,30],[5,0]]}
   ],marks:[{x:1,y:90,label:'−30',dx:-9,dy:18,anchor:'end'},{x:2,y:90,label:'+22,50 bis 90',dx:8,dy:-14}]}})
 ]),
 S('revaluation','9. Neubewertung ist nicht dasselbe wie Verlustumkehr','b c',[
  'IAS 16 erlaubt neben dem Kostenmodell unter Voraussetzungen ein Neubewertungsmodell für ganze Anlagenklassen. Es ist kein beliebiges Herausgreifen einzelner Gewinner. Ein positiver Neubewertungsbetrag läuft grundsätzlich über OCI und Neubewertungsrücklage, soweit er nicht einen früher in der GuV erfassten entsprechenden Verlust umkehrt. Negative Veränderungen und vorhandene Rücklagen erfordern die spiegelbildliche Einzelprüfung.',
  X('Mehr Eigenkapital, aber kein zusätzlicher Geldzufluss','Eine zulässig neu bewertete Sachanlage steigt von 100 auf 140. Es bestehen keine früheren Verluste oder Rücklagen; verbleibende Nutzungsdauer vier Jahre, Restwert null, keine Steuern.',[
   'Der Zuwachs 40 erhöht im Grundfall den Vermögenswert und die Neubewertungsrücklage im Eigenkapital über OCI. Er ist kein operativer Barzufluss.',
   'Künftige lineare Abschreibung beträgt 140/4 = 35 statt 100/4 = 25. Der höhere Ansatz erhöht also später den Aufwand um 10 je Jahr.',
   'Eine Verschuldungsquote auf Buchkapital kann sinken; eine Gewinnrendite auf die größere Vermögensbasis kann zugleich sinken. Das ist zunächst eine Bewertungswirkung.',
   'US-GAAP erlaubt für gewöhnliche in Nutzung gehaltene Sachanlagen nicht allgemein dasselbe freie Aufwertungsmodell. IAS-38-Neubewertung immaterieller Werte setzt unter anderem einen aktiven Markt voraus, der bei individuellen Rechten selten ist.'
  ],'Die Darstellung darf nicht mit sofortiger Verkaufsmöglichkeit oder automatisch höherem frei verfügbarem Eigenkapital verwechselt werden.')
 ]),
 S('held-for-sale','10. Zum Verkauf bestimmt: ein eigener Bewertungszustand','b',[
  'Die bloße Absicht, irgendwann zu verkaufen, reicht nicht. Die einschlägigen Kriterien verlangen unter anderem einen hinreichend konkreten, hochwahrscheinlichen Verkauf und unmittelbare Verfügbarkeit in der gegenwärtigen Form unter üblichen Bedingungen. Erwarteter Abschluss, aktives Programm und sonstige Voraussetzungen sind nach dem Regelwerk zu prüfen.',
  F('BV_{HFS}=\\min(BV,FV-C_{sell})','Für den beschriebenen Held-for-Sale-Grundfall wird der vorher sachgerecht ermittelte Buchwert auf den niedrigeren Nettoveräußerungsmaßstab begrenzt.',[['BV_{HFS}','Buchwert nach Held-for-Sale-Bewertung.'],['BV','Zuvor nach den einschlägigen Regeln bestimmter Buchwert.'],['FV','Fair Value der Anlage.'],['C_{sell}','Für diese Kategorie relevante Verkaufskosten.']]),
  X('Verkaufsplanung und reine Stilllegung nicht verwechseln','Eine Anlage mit Buchwert 90 erfüllt die Held-for-Sale-Kriterien. Fair Value 85, erwartete Verkaufskosten 4.',[
   'Bewertungsmaßstab: 85 − 4 = 81. Der Buchwert wird um 9 auf 81 reduziert.',
   'Bei fortbestehender zutreffender Held-for-Sale-Klassifikation wird die planmäßige Abschreibung ausgesetzt. Weitere notwendige Bewertungen bleiben möglich.',
   'Eine nur stillgelegte, weiter zur Nutzung gehaltene Anlage hat nicht automatisch denselben Status. Auch ein Verlassen oder Verschrotten ist nicht schlicht ein hochwahrscheinlicher gewöhnlicher Verkauf.',
   'Eine spätere Wertänderung im Held-for-Sale-Modell muss nach dessen Regeln beurteilt werden; das allgemeine US-Verbot einer Zuschreibung in Nutzung darf nicht ungeprüft auf jede Verkaufskategorie übertragen werden.'
  ],'Nutzungsstrategie, Klassifikation und Bewertung müssen zusammenpassen.')
 ]),
 S('disposal','11. Beim Abgang werden Erlös und Restbuchwert getrennt','b',[
  F('BV=Cost-AD-Imp_{cum},\\qquad Gain=Proceeds_{net}-BV','Der Abgang entfernt ursprüngliche Kosten und die zugehörigen kumulierten Wertminderungen. Nur die Differenz zum Nettoerlös ist Gewinn oder Verlust.',[['BV','Restbuchwert unmittelbar vor Verkauf.'],['Cost','Zugeordnete ursprüngliche bzw. angepasste Bruttokosten.'],['AD,Imp_{cum}','Kumulierte planmäßige Abschreibung und zusätzliche Wertminderung.'],['Proceeds_{net}','Verkaufserlös nach den im Fall zugehörigen Abgangskosten.'],['Gain','Veräußerungsgewinn; negativ bei Verlust.']]),
  X('Geldzufluss 70, Gewinn nur 10','Historische Anlagenkosten 160, kumulierte Abschreibung 100, keine Wertminderung. Bruttoverkaufserlös 75 und unmittelbar gezahlte Abgangskosten 5.',[
   'Restbuchwert: 160 − 100 = 60. Nettozufluss: 75 − 5 = 70. Gewinn: 70 − 60 = 10.',
   'Die Sachanlage verschwindet mit 60 aus der Bilanz; Cash steigt netto um 70. Ohne Steuern steigt die Summe der Aktiva und das Eigenkapital um 10.',
   'Der Gewinn 10 wird bei einer indirekten Überleitung aus einem ihn enthaltenden Ergebnis entfernt; die zugehörigen Anlagezahlungen gehören in den Investitionsbereich.',
   'Wäre der Nettoerlös nur 35, läge ein Verlust von 25 vor. Der Verlust wird im entsprechenden indirekten CFO-Ausgangspunkt zurückgenommen; tatsächlicher Nettozufluss bleibt 35.'
  ],'Ein Anlagenverkauf senkt nicht automatisch Gesamtaktiva: Er tauscht zunächst einen Buchwert gegen Geld und kann zusätzlich Gewinn oder Verlust erzeugen.')
 ]),
 S('roll-forward','12. Der Anlagenspiegel kontrolliert den Endbestand','c',[
  T(['Bewegung','Bruttowert','Kumulierte Abschreibung','Kumulierte Wertminderung','Nettowert'],[
   ['Anfangsbestand','600','200','0','400'],
   ['Neue Anlagen','+100','0','0','+100'],
   ['Abgang','−80','−50','0','−30'],
   ['Planmäßige Abschreibung','0','+70','0','−70'],
   ['Wertminderung','0','0','+20','−20'],
   ['Währungsumrechnung','+15','+5','0','+10'],
   ['Endbestand','635','225','20','390']
  ],'Eigener vollständiger Anlagenspiegel: Kumulierte Abschreibungen und Wertminderungen sind hier positive Abzugsposten.'),
  F('NBV_1=NBV_0+Add-Disposal-Dep-Imp+FX','Die Nettobewegung fasst die getrennten Spalten zusammen. Erwerbe, Neubewertung oder andere Vorgänge würden zusätzliche eigene Beiträge benötigen.',[['NBV_0,NBV_1','Nettoanlagenbuchwert zu Beginn und Ende.'],['Add','Aktivierte Zugänge, nicht automatisch vollständig bezahlte Zugänge.'],['Disposal','Abgegangener Nettobuchwert, nicht Verkaufserlös.'],['Dep,Imp','Planmäßige Abschreibung und zusätzliche Wertminderung der Periode.'],['FX','Nettoeffekt der Währungsumrechnung.']]),
  'Kontrolle: 400 + 100 − 30 − 70 − 20 + 10 = 390; außerdem 635 − 225 − 20 = 390. Würde man den Verkaufserlös statt des abgegangenen Buchwerts verwenden, wäre die Bilanzüberleitung falsch.',
  'Der Anlagenzugang 100 kann unbezahlte Rechnungen oder Leasing enthalten. Eine Cashflowprognose benötigt deshalb eine zusätzliche Zahlungsüberleitung. Währungsumrechnung 10 ist ebenfalls kein Anlagenkauf. Die passende Erläuterung ist häufig wichtiger als der bloße Prozentanstieg des Endbestands.'
 ]),
 S('age-capacity','13. Alter und Ersatzbedarf nur unter klaren Annahmen schätzen','c',[
  F('Age\\approx AD/Dep,\\qquad Life\\approx GBV/Dep,\\qquad Remaining\\approx NBV/Dep','Diese Näherungen setzen insbesondere ein vergleichbares Portfolio linear abgeschriebener Anlagen, vernachlässigbare Restwerte und keine störenden Neubewertungen oder Wertminderungen voraus. Nicht abschreibbares Land wird ausgeschlossen.',[['Age,Life,Remaining','Geschätztes durchschnittliches Alter, gesamte Nutzungsdauer und Restnutzungsdauer in Jahren.'],['AD','Kumulierte planmäßige Abschreibung derselben Anlagenbasis.'],['Dep','Geeignete repräsentative Jahresabschreibung dieser Basis.'],['GBV,NBV','Brutto- und Nettoanlagenbuchwert dieser abschreibbaren Basis.']]),
  X('Eine Näherung ist kein technisches Gutachten','Vergleichbare Anlagen mit Bruttokosten 600, kumulierter Abschreibung 240 und repräsentativer Jahresabschreibung 60; Restwerte null, keine weiteren Bewertungsänderungen.',[
   'Geschätztes Alter: 240/60 = 4 Jahre. Gesamtdauer: 600/60 = 10 Jahre.',
   'Nettowert 360 ergibt Restdauer 360/60 = 6 Jahre. Alter plus Restdauer stimmt mit der Gesamtdauer überein.',
   'Ein großer neuer Zugang kurz vor Jahresende verändert Bruttowert, Abschreibung und Altersmix ungleich. Eine Wertminderung senkt den Nettowert, ohne dass die Anlage entsprechend viele zusätzliche Jahre verbraucht hätte.',
   'Steigende Ersatzpreise, neue Technik und Auslastung entscheiden über künftiges Capex; die historische Abschreibung allein liefert keinen zuverlässigen Ersatzinvestitionsplan.'
  ],'Die Näherung lokalisiert Fragen zu Alterung und Erneuerung; belastbare Investitionsprognosen benötigen technische und wirtschaftliche Zusatzinformationen.')
 ]),
 S('ratio-analysis','14. Kennzahlenwirkung und wirtschaftliche Änderung auseinanderhalten','b c',[
  T(['Vorgang','Unmittelbare Rechnungswirkung ohne Steuern','Vorsicht bei der Interpretation'],[
   ['Aktivierung statt Sofortaufwand','Zunächst höheres Vermögen und höherer Gewinn.','Nicht mit automatisch mehr Cash oder höherer Produktivität gleichsetzen.'],
   ['Längere geschätzte Restnutzung','Geringere laufende Abschreibung und höherer Restbuchwert.','Technische Begründung und spätere Verlustrisiken prüfen.'],
   ['Wertminderung','Gewinn und Eigenkapital fallen; künftige Abschreibung kann sinken.','Später höhere ROA können aus kleinerer Basis und geringerem Aufwand stammen.'],
   ['Neubewertung nach zulässigem Modell','Vermögen und häufig OCI/Eigenkapital steigen; Folgeabschreibung steigt.','Buchhebel und Gewinne zwischen Regelwerken nicht unbereinigt vergleichen.'],
   ['Verkauf zum Buchwert','Anlage wird durch Cash ersetzt; gesamte Aktiva zunächst gleich.','Operative Produktionsbasis kann dennoch schrumpfen.']
  ],'Zähler, Nenner, Zahlung und künftiger Nutzen sind vier getrennte Analyseebenen.'),
  'Ein hoher Asset Turnover kann auf effizienter Nutzung beruhen, aber ebenso auf sehr alten abgeschriebenen Anlagen, Outsourcing oder einer früheren Wertminderung. Ein niedriger Wert kann durch unproduktive Kapazität oder durch eine gerade begonnene lohnende Investitionsphase entstehen. Die Richtung einer Quote allein trägt noch kein Urteil.'
 ]),
 S('disclosures','15. Angaben mit Investitions- und Risikofragen verbinden','a c',[
  'Für jede wesentliche Anlagenklasse werden Bewertungsbasis, Nutzungsdauer oder Sätze, Abschreibungsmethode, Bruttowerte, kumulierte Abschreibungen und die Bewegungsüberleitung zusammen gelesen. Immaterielle Werte benötigen zusätzlich eine nachvollziehbare Trennung endlicher und unbestimmter Dauer sowie ihrer Entstehungsart.',
  T(['Angabe','Weiterführende Frage'],[
   ['Zugänge und Erwerbe','Wächst echte Kapazität, oder wird vor allem ein bestehendes Unternehmen gekauft?'],
   ['Abgänge und Veräußerungsergebnis','Wird überflüssige Kapazität verkauft oder die künftige Ertragsbasis ausgehöhlt?'],
   ['Wertminderung, Testeinheit und Bewertungsannahmen','Welche Mengen-, Margen- oder Diskontannahme hat sich verschlechtert?'],
   ['Neubewertung und OCI-Überleitung','Welche Teile des Eigenkapitalanstiegs stammen aus Bewertung statt aus einbehaltenen Gewinnen?'],
   ['Rechtsbeschränkungen und Sicherheiten','Welche Aktiva stehen anderen Kapitalgebern tatsächlich noch als Sicherheit zur Verfügung?'],
   ['Vertragliche Investitionsverpflichtungen','Welche zukünftigen Zahlungen fehlen im heutigen Capex-Saldo?'],
   ['Forschung, Entwicklung und Amortisation','Wird die technologische Basis erneuert, und wie beeinflusst die Ansatzregel den Vergleich?']
  ],'Bilanzangaben erklären die historische Bewertung; Kapazitäts-, Markt- und Technologieinformationen ergänzen die Zukunftsanalyse.'),
  'Ein sauberer Vergleich normalisiert bei Bedarf Definitionen und zeigt die Grenzen fehlender Angaben. Eine rein rechnerische Anpassung darf weder die damalige Zahlung vergessen noch unbelegte Marktwerte als sichere Fakten darstellen.'
 ])
],related:[{unit:'balance-sheet',section:'research-development',label:'Entwicklungsansatz im Detail'},{unit:'balance-sheet',section:'goodwill',label:'Identifizierbare Werte von Goodwill trennen'},{unit:'cashflow-preparation',section:'noncash',label:'Anlagenzugang ist nicht automatisch Barzahlung'},{unit:'inventory',section:'reversal',label:'Warum Vorratszuschreibung eine andere Grenze besitzt'},{unit:'ratios',section:'profitability',label:'Renditezähler und Anlagenbasis abstimmen'},{unit:'tvm',section:'single-cashflow',label:'Zeitwert der Rückgewinnung'}],
 sources:[
 {title:'CFA Institute: Lernziele Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=12'},
 {title:'CFA Institute: Analysis of Long-Term Assets',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/analysis-of-long-term-assets'},
 {title:'IFRS Foundation: IAS 16',url:'https://www.ifrs.org/issued-standards/list-of-standards/ias-16-property-plant-and-equipment/'},
 {title:'IFRS Foundation: IAS 38',url:'https://www.ifrs.org/issued-standards/list-of-standards/ias-38-intangible-assets/'},
 {title:'IFRS Foundation: IAS 36',url:'https://www.ifrs.org/issued-standards/list-of-standards/ias-36-impairment-of-assets/'},
 {title:'IFRS Foundation: IAS 36, veröffentlichter Text 2021, insbesondere Zuschreibungsgrenze',url:'https://www.ifrs.org/content/dam/ifrs/publications/pdf-standards/english/2021/issued/part-a/ias-36-impairment-of-assets.pdf'},
 {title:'IFRS Foundation: IFRS 5',url:'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-5-non-current-assets-held-for-sale-and-discontinued-operations/'},
 {title:'EUR-Lex: übernommene IFRS, konsolidierte Fassung 8. März 2026',url:'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02023R1803-20260308'},
 {title:'FASB: historischer Standard 144, Ursprung des Held-and-Used-Modells; heutige Regeln in ASC 360',url:'https://storage.fasb.org/aop_fas144.pdf'},
 {title:'SEC: veröffentlichter Unternehmensfall 2025 mit zweistufiger US-Recoverability- und Fair-Value-Prüfung',url:'https://www.sec.gov/Archives/edgar/data/1581280/000158128025000009/R25.htm'}
 ],review:{status:'draft',date:'2026-09-24',note:'Eigene Abschreibungs-, Werthaltigkeits-, Zuschreibungs- und Abgangsfälle samt vollständigem Anlagenspiegel. Unterschiedliche Testebenen und Bewertungsmodelle werden getrennt.'}};
