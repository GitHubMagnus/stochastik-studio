const {F,T,X,S,G}=require('../author.cjs');
const steps=Array.from({length:25},(_,i)=>-2+i*.25);
module.exports={id:'inventory',intro:[
 'Vorräte verbinden Einkauf, Produktion, Verkauf und Zahlung. Eine heute bezahlte Ware kann bis zur späteren Veräußerung in der Bilanz stehen; erst ihr Verbrauch belastet das Verkaufsergebnis. Wenn sich Einkaufspreise ändern, beeinflusst die Kostenzuordnung daher zugleich Bilanzwert und Marge, ohne dass eine andere Menge verkauft worden sein muss.',
 'Dieses Kapitel trennt drei Entscheidungen: Welche Ausgaben gehören zu den Kosten? Welche Kosten werden verkauften und verbliebenen Einheiten zugeordnet? Muss der so ermittelte Restbestand anschließend abgewertet werden? Eigene durchgehende Mengen- und Wertrechnungen zeigen die Auswirkungen auf Gewinn, Steuern, Liquidität und Kennzahlen.'
],sections:[
 S('measurement','1. Kostenzuordnung und Werthaltigkeit sind zwei Prüfungen','a b',[
  'Im gewöhnlichen Handels- und Produktionsfall wird zunächst der Kostenbetrag der Vorräte ermittelt. Danach wird geprüft, ob der durch Verkauf erwartete realisierbare Betrag diesen Buchwert trägt. Eine Kostenformel wie FIFO ist deshalb keine Erlaubnis, unverkäufliche Ware zu unveränderten Kosten stehen zu lassen.',
  T(['Frage','Entscheidung','Typischer Fehler'],[
   ['Was wird aktiviert?','Anschaffungs- und Herstellungskosten nach dem Regelwerk.','Jede Ausgabe des Unternehmens wird zu Lagerkosten.'],
   ['Welche Kosten sind verkauft?','Einzelzuordnung, FIFO, gewogener Durchschnitt oder ein zulässiger anderer Ansatz.','Rechnerische Kostenfolge wird mit der physischen Entnahmereihenfolge gleichgesetzt.'],
   ['Ist der Restwert noch gedeckt?','Niederstwertprüfung nach dem einschlägigen Standard.','Ein hoher historischer Einkaufspreis gilt als Beweis heutiger Werthaltigkeit.']
  ],'Die drei Fragen bauen aufeinander auf. Die letzte Prüfung kann eine zuvor durchgerechnete Methodendifferenz teilweise beseitigen.'),
  'IAS 2 erlaubt im üblichen Fall austauschbarer Güter FIFO oder gewogenen Durchschnitt, nicht LIFO. US-GAAP kann LIFO zulassen und unterscheidet beim Niederstwerttest nach Kostenmethode. Besondere Regeln etwa für bestimmte landwirtschaftliche Erzeugnisse oder Commodity-Broker-Vorräte gehören nicht zum hier modellierten gewöhnlichen Kostenfall.'
 ]),
 S('cost','2. Kosten bis zum heutigen Zustand und Standort','a c',[
  'Zum Vorrat gehören grundsätzlich die zurechenbaren Kosten, um ihn an seinen gegenwärtigen Ort und in seinen gegenwärtigen Zustand zu bringen: beispielsweise Kaufpreis nach Rabatten, nicht erstattbare Abgaben, Transport und passende Produktionskosten. Ungewöhnlicher Ausschuss, vermeidbare Leerkosten und Vertriebskosten sind nicht allein wegen eines Bezuges zur Ware aktivierbar. Lagerkosten können nur in besonderen Produktionssituationen dazugehören; gewöhnliche Verkaufs- und Verwaltungskosten werden nicht pauschal auf Vorräte verteilt.',
  X('Unterauslastung darf die Stückkosten nicht beliebig aufblähen','Eine Anlage hat normale Kapazität 100 Einheiten. Fixe Produktionsgemeinkosten betragen 50; tatsächlich werden nur 60 Einheiten gefertigt. Variable zurechenbare Kosten betragen 3 je Einheit. Alle gefertigten Einheiten bleiben zunächst auf Lager.',[
   'Der normale fixe Zuschlag beträgt 50/100 = 0,50 je Einheit. Auf 60 produzierte Einheiten werden daher 30 fixe Kosten verteilt.',
   'Variable Kosten: 60 × 3 = 180. Herstellkosten des Bestands: 180 + 30 = 210.',
   'Die übrigen 20 Fixkosten sind im Fall Aufwand der Unterauslastung. Würden sämtliche 50 auf nur 60 Einheiten verteilt, stünde der Bestand bei 230; ein Teil des aktuellen Leerstands würde in zukünftige Gewinne verschoben.',
   'Bei ungewöhnlich hoher Produktion wird die Zuordnung je Stück entsprechend reduziert, damit insgesamt nicht mehr Fixkosten als tatsächlich angefallen aktiviert werden.'
  ],'Normale Kapazität verhindert, dass schlechte Auslastung überhöhte Lagerwerte und scheinbar bessere Ergebnisse erzeugt.'),
  F('c_{fixed}=F_{prod}/Q_{normal},\\qquad Cost_{inv}=Q_{actual}(c_{var}+c_{fixed})','Diese vereinfachte Rechnung gilt für den dargestellten Unterauslastungsfall. Die Fixkostenzuordnung wird nicht über die tatsächlich angefallenen Kosten hinaus erhöht.',[['c_{fixed},c_{var}','Normaler fixer Zuschlag und zurechenbare variable Kosten je Einheit.'],['F_{prod}','Fixe Produktionsgemeinkosten der Periode.'],['Q_{normal},Q_{actual}','Normale Kapazität und tatsächliche Produktionsmenge.'],['Cost_{inv}','Kosten der im Beispiel vollständig auf Lager verbleibenden Produktion.']])
 ]),
 S('cost-flows','3. Derselbe Warenstrom unter drei Kostenmethoden','b',[
  'Für den Vergleich gibt es einen Anfangsbestand von 100 Stück zu 10, danach einen Einkauf von 100 Stück zu 12 und einen weiteren von 100 Stück zu 14. Erst anschließend werden 220 Stück zu je 20 verkauft. Es bleiben 80 Stück; keine Rückgaben, Ausfälle oder Abwertungen.',
  F('BI+Purch=COGS+EI','Die Kosten der verfügbaren Güter werden zwischen verkauftem Verbrauch und Endbestand verteilt. Der Vergleich unterstellt identische Mengen und Einkäufe.',[['BI,EI','Anfangs- und Endbestand zu Kosten.'],['Purch','Kosten der in der Periode hinzugekommenen Waren.'],['COGS','Den verkauften Einheiten zugeordnete Umsatzkosten.']]),
  T(['Methode','Kosten der 220 Verkäufe','Kosten der 80 Reststücke','Bruttogewinn bei Umsatz 4.400'],[
   ['FIFO','100 × 10 + 100 × 12 + 20 × 14 = 2.480','80 × 14 = 1.120','1.920'],
   ['Periodisches LIFO','100 × 14 + 100 × 12 + 20 × 10 = 2.800','80 × 10 = 800','1.600'],
   ['Gewogener Periodendurchschnitt','220 × 12 = 2.640','80 × 12 = 960','1.760']
  ],'Verfügbare Kosten sind in allen drei Fällen 1.000 + 1.200 + 1.400 = 3.600; COGS plus Endbestand müssen darauf zurückführen.'),
  F('\\bar c=\\frac{100\\cdot10+100\\cdot12+100\\cdot14}{300}=12','Der gewogene Durchschnitt teilt sämtliche zugeordneten Kosten durch die entsprechende verfügbare Menge. Bei unterschiedlichen Mengen wäre ein ungewichtetes Mittel der Einkaufspreise falsch.',[['\\bar c','Gewogener Kostenbetrag je Stück.']]),
  'FIFO ordnet ältere Kosten zuerst den Verkäufen zu und lässt jüngere Kosten im Bestand. LIFO ordnet im periodischen Modell jüngere Kosten zuerst dem Verbrauch zu. Keine dieser Rechenregeln beweist, welches physische Stück tatsächlich aus dem Lager genommen wurde.'
 ]),
 S('prices','4. Preisrichtung erklärt die Methodendifferenz','b',[
  'Im vorigen Fall sind jüngere Stückkosten höher. Deshalb hat FIFO geringere Umsatzkosten und einen höheren Endbestand als LIFO. Dreht man die Preisfolge um, dreht sich bei gleicher Mengenstruktur auch diese Rangfolge um. „FIFO bedeutet immer höheren Gewinn“ ist keine allgemeingültige Regel.',
  F('EI_F=80(10+2d),\\qquad EI_L=80\\cdot10,\\qquad EI_W=80(10+d)','Für die Grafik bleiben Mengen, Absatz und der erste Preis 10 gleich; die beiden späteren Preise sind 10+d und 10+2d. Abwertungen sind zunächst ausgeschlossen.',[['EI_F,EI_L,EI_W','Endbestandskosten unter FIFO, periodischem LIFO und gewogenem Periodendurchschnitt.'],['d','Preisänderung in Geldeinheiten zwischen zwei aufeinanderfolgenden Einkaufsschichten.']]),
  G({id:'price-methods',title:'Gleiche 80 Reststücke, andere Kostenwerte',
   caption:'Eigene Mengenrechnung: 100 Stück je Kostenschicht, Preise 10, 10+d und 10+2d; 220 Verkäufe. Negative d bedeuten fallende, positive d steigende Beschaffungspreise. Kein Niederstwertverlust.',
   reading:'Bei d = 2 stehen dieselben Stücke mit FIFO bei 1.120, mit Durchschnitt bei 960 und mit LIFO bei 800. Bei d = −2 ist die Reihenfolge 480, 640 und 800. Die Gegenbewegung liegt in den Umsatzkosten: Was im Endbestand verbleibt, wurde noch nicht als Verbrauch erfasst.',
   plot:{x:[-2,4],y:[400,1500],xLabel:'Preisschritt d je Einkaufsschicht',yLabel:'Endbestand zu Kosten',series:[
    {name:'FIFO',points:steps.map(d=>[d,80*(10+2*d)])},
    {name:'Gewogener Durchschnitt',points:steps.map(d=>[d,80*(10+d)])},
    {name:'Periodisches LIFO',dash:'5 4',points:steps.map(d=>[d,800])}
   ],marks:[{x:2,y:1120,label:'1.120',dx:8,dy:-12},{x:2,y:960,label:'960',dx:8,dy:-12},{x:2,y:800,label:'800',dx:8,dy:20}]}}),
  'Die Gesamtwirtschaft kann Inflation melden, während eine konkrete Warengruppe durch technischen Fortschritt billiger wird. Für den Methodenvergleich sind die tatsächlich relevanten Beschaffungspreise entscheidend. Mischbestände, Mengenabbau und Wertminderungen können einfache Rangfolgen zusätzlich verändern.'
 ]),
 S('timing','5. Periodische und laufende Rechnung unterscheiden','b',[
  'Ein Periodendurchschnitt wird erst aus sämtlichen für die Periode verfügbaren Mengen und Kosten berechnet. Ein gleitender Durchschnitt wird nach jedem Zugang aktualisiert; ein späterer Zugang ändert den Kostenbetrag bereits vorher gebuchter Verkäufe nicht rückwirkend. Auch laufendes LIFO kann von periodischem LIFO abweichen.',
  X('Der Zeitpunkt eines späteren Einkaufs zählt','Anfang: 10 Stück zu 10. Dann Kauf 10 Stück zu 14, Verkauf 12 Stück, Kauf 10 Stück zu 18 und Verkauf 8 Stück. Insgesamt stehen 30 Stück mit Kosten 420 zur Verfügung, 20 werden verkauft.',[
   'Periodischer Durchschnitt: 420/30 = 14 je Stück; COGS 280 und Endbestand 140.',
   'Gleitender Durchschnitt: Nach dem ersten Kauf sind es 240/20 = 12. Erster Verkauf kostet 144; Rest 8 Stück mit Wert 96. Nach dem zweiten Kauf liegen 18 Stück mit Wert 276 vor: 15,3333 je Stück. Der zweite Verkauf kostet 122,6667; Gesamt-COGS 266,6667 und Endbestand 153,3333.',
   'Periodisches LIFO: Die 20 Verkäufe erhalten am Periodenende die beiden jüngsten Schichten 10 × 18 + 10 × 14 = 320; Endbestand 100.',
   'Laufendes LIFO: Erster Verkauf kostet 10 × 14 + 2 × 10 = 160. Zweiter Verkauf kostet 8 × 18 = 144. Gesamt-COGS 304; Rest 8 × 10 + 2 × 18 = 116.',
   'FIFO führt bei dieser Transaktionsfolge in beiden Varianten zu COGS 240 und Endbestand 180. Alle Varianten erfüllen COGS + Endbestand = 420.'
  ],'Die Aufgabenangabe muss erkennen lassen, ob ein periodisches oder ein laufendes Kostenmodell gemeint ist. Gerechnet wird bis zum Schluss mit ungerundeten Zwischenwerten.')
 ]),
 S('tax-cash','6. Gewinnunterschied ist nicht automatisch Cashunterschied','b',[
  'Ohne Steuerwirkung ändern die Kostenmethoden zunächst die Verteilung zwischen Vorratsbuchwert und Aufwand. Die Zahlung für denselben Einkauf und die Kundeneinzahlung bleiben gleich. Ein tatsächlicher Steuereffekt kann jedoch Liquidität verändern, wenn Steuerbemessung und gewählte Kostenmethode zusammenpassen.',
  X('Steuern als eigener Übertragungsweg','Im 300-Stück-Grundfall werden alle Verkäufe und aktuellen Einkäufe bar abgewickelt. Kein anderer Aufwand. Für den Vergleich gelte dieselbe Methode auch steuerlich, der Satz sei 25 %, alle Steuern werden sofort bezahlt. Der Anfangsbestand wurde bereits früher bezahlt.',[
   'Aktuelle Einkaufszahlung: 1.200 + 1.400 = 2.600; Kundeneinzahlung 4.400. Vor Steuern beträgt der aktuelle Nettozufluss bei allen Methoden 1.800.',
   'FIFO: Gewinn vor Steuer 1.920, Steuer 480, Nachsteuergewinn 1.440 und Cashzufluss 1.320.',
   'LIFO: Gewinn vor Steuer 1.600, Steuer 400, Nachsteuergewinn 1.200 und Cashzufluss 1.400.',
   'Durchschnitt: Gewinn vor Steuer 1.760, Steuer 440, Nachsteuergewinn 1.320 und Cashzufluss 1.360.',
   'FIFO hat hier 240 mehr Nachsteuergewinn als LIFO, aber 80 weniger Cash. Die um 320 höheren Vorratskosten und die um 80 höheren Steuerzahlungen erklären zusammen die Differenz im Reinvermögen.'
  ],'Die Liquiditätsdifferenz entsteht durch die ausdrücklich angenommene Steuerregel, nicht durch ein anderes physisches Einkaufsgeschäft.'),
  'Ohne entsprechende steuerliche Anwendbarkeit, bei Verlusten oder abweichenden Zahlungszeitpunkten folgt dieser Cashvorteil nicht automatisch. Eine analytische Umrechnung veröffentlichten LIFO-Ergebnisses in FIFO ändert ebenfalls keine bereits geleistete Steuerzahlung.'
 ]),
 S('reserve','7. Die LIFO-Reserve verbindet Bilanz und Gewinn','b c',[
  F('LR_t=I_{F,t}-I_{L,t},\\qquad COGS_F=COGS_L-(LR_t-LR_{t-1})','Die erste Gleichung ist eine Bestandsdifferenz. Die zweite folgt aus derselben Warenkostenidentität zu Anfang und Ende, sofern die Vergleichsbasis und die Einkäufe identisch sind und keine zusätzlichen nicht vergleichbaren Effekte vorliegen.',[['LR_t,LR_{t-1}','LIFO-Reserve am Ende bzw. Anfang der Periode: FIFO-Kostenwert minus LIFO-Kostenwert.'],['I_{F,t},I_{L,t}','Vergleichbare FIFO- und LIFO-Endbestandskosten.'],['COGS_F,COGS_L','Umsatzkosten nach FIFO bzw. LIFO.']]),
  X('Bestand und Veränderung nicht vertauschen','LIFO-Endbestand 500, LIFO-COGS 1.500; LIFO-Reserve steigt von 60 auf 90.',[
   'FIFO-Endbestand: 500 + 90 = 590. Für den Bestand wird die gesamte Endreserve verwendet.',
   'FIFO-COGS: 1.500 − (90 − 60) = 1.470. Für die Periode zählt nur die Reserveänderung 30.',
   'Bei angenommener voller Steuerwirkung von 25 % liegt der analytische FIFO-Nachsteuergewinn um 22,50 höher. Eine um 90 höhere Gewinnzahl würde Bestands- und Stromgröße verwechseln.',
   'Eine vereinfachte analytische Bilanzüberleitung könnte die zusätzliche Vorratsgröße 90 mit einer hypothetischen Steuerkomponente 22,50 und einer Eigenkapitalkomponente 67,50 verbinden. Sie ist keine Behauptung über heute tatsächlich fällige zusätzliche Steuern.'
  ],'Eine saubere Anpassung dokumentiert Zeitraum, Steuerannahmen und Gegenbuchungen.'),
  'Die Reserve kann bei entsprechenden Kostenentwicklungen auch negativ sein. In realen Angaben können Vergleichswerte statt exaktem FIFO aktuelle Kosten oder andere Verfahren verwenden. Der Name allein ersetzt nicht das Lesen der veröffentlichten Definition.'
 ]),
 S('liquidation','8. Alte Kostenschichten können aktuelle Margen verzerren','b c',[
  'Eine LIFO-Liquidation liegt vor, wenn der Mengenabbau in alte Kostenschichten hineinreicht. Bei historisch steigenden Kosten werden dann besonders niedrige alte Beträge in heutigen COGS erfasst. Die Marge kann steigen, obwohl Preise, Produktivität und aktueller Beschaffungsmarkt keine entsprechende Verbesserung zeigen.',
  X('Mengenabbau schafft einen nicht wiederholbaren Margeneffekt','Anfangsbestand: 100 Stück zu 5 und 100 Stück zu 10. Neueinkauf: 100 Stück zu 14. Verkauf: 250 Stück zu 20; periodisches LIFO.',[
   'COGS: 100 × 14 + 100 × 10 + 50 × 5 = 2.650. Endbestand: 50 × 5 = 250.',
   'Berichteter Bruttogewinn: 5.000 − 2.650 = 2.350.',
   'Ein ausdrücklich hypothetischer Verbrauch von 250 Stück zu aktuellen Kosten 14 läge bei 3.500. Der zugehörige Bruttogewinn wäre 1.500.',
   'Der Unterschied 850 setzt sich aus 100 × (14 − 10) + 50 × (14 − 5) zusammen. Er zeigt den Effekt alter Kosten gegenüber diesem aktuellen Kostenmaßstab, nicht einen zusätzlichen Barzufluss.'
  ],'Die Vergleichsmarge braucht den verwendeten Kostenmaßstab. Eine sinkende Reserve allein beweist keine Liquidation, weil auch Preisänderungen die Reserve beeinflussen.'),
  'Bei fallenden historischen Kosten können alte Schichten umgekehrt teurer sein. Geplanter Lagerabbau kann betrieblich vernünftig sein, dennoch darf sein einmaliger Ergebniseffekt nicht ohne Begründung als dauerhafte Marge prognostiziert werden.'
 ]),
 S('nrv','9. Nettoveräußerungswert begrenzt den Ansatz','a',[
  F('NRV=P_{sell}-C_{complete}-C_{sell},\\qquad BV=\\min(Cost,NRV),\\qquad WD=\\max(0,Cost-NRV)','Für den gewöhnlichen IFRS-Kostenfall wird der erwartete Verkaufserlös um noch notwendige Fertigstellungs- und Verkaufskosten vermindert. Mit bereits aktivierten Kosten darf man diese zukünftigen Ausgaben nicht doppelt verwechseln.',[['NRV','Geschätzter Nettoveräußerungswert derselben betrachteten Vorräte.'],['P_{sell}','Erwarteter Verkaufserlös im normalen Geschäftsverlauf.'],['C_{complete},C_{sell}','Noch erwartete Fertigstellungs- und notwendige Verkaufskosten.'],['Cost,BV','Zugeordnete Kosten und resultierender Buchwert.'],['WD','Erforderliche Wertminderung ohne weitere Besonderheiten.']]),
  X('Ein Verkaufspreis oberhalb der Kosten kann trotzdem nicht genügen','Aktivierte Kosten 100, erwarteter Verkaufserlös 112, noch nötige Fertigstellung 8 und notwendige Verkaufskosten 9.',[
   'NRV = 112 − 8 − 9 = 95. Der Bruttoerlös 112 ist nicht der für die bisherigen Kosten verbleibende Nettobetrag.',
   'Buchwert min(100; 95) = 95, Wertminderung 5.',
   'Die geschätzten Verkaufskosten sind nach IAS 2 nicht automatisch auf Kosten begrenzt, die allein durch genau einen zusätzlichen Verkauf entstehen. Welche Kosten für den Verkauf notwendig sind, hängt von den Umständen ab.'
  ],'NRV ist eine Schätzung des konkreten Nettorealisationsbetrags, nicht einfach ein allgemeiner Marktpreis.'),
  'Die Prüfung erfolgt gewöhnlich für einzelne Artikel; sachgerecht zusammengehörige ähnliche Posten können unter den Voraussetzungen gemeinsam beurteilt werden. Gewinne anderer, nicht passend zusammengehöriger Artikel dürfen Verluste nicht beliebig kompensieren. Bei zwei getrennten Artikeln mit Kosten je 100 und NRV 80 bzw. 125 ergeben sich daher 80 + 100 = 180, nicht min(200; 205) = 200.'
 ]),
 S('us-market','10. US-LIFO benötigt den richtigen Niederstwerttest','a b',[
  'Für US-Vorräte außerhalb von LIFO und Retail Inventory Method gilt im allgemeinen Grundfall der Vergleich von Kosten und NRV. Für LIFO und die Retail-Methode bleibt dagegen Lower of Cost or Market relevant. Das Wort „market“ besitzt dort eine technische Definition und ist nicht automatisch gleich Verkaufspreis.',
  F('Floor=NRV-P_{normal},\\qquad Market=\\min(NRV,\\max(RC,Floor)),\\qquad BV=\\min(Cost,Market)','Der Wiederbeschaffungskostenbetrag wird zuerst zwischen Unter- und Obergrenze eingeordnet. Erst anschließend wird der so bestimmte Marktwert mit den Kosten verglichen.',[['Floor','Untergrenze des hier definierten Market-Betrags.'],['NRV','Nettoveräußerungswert als Obergrenze.'],['P_{normal}','Normaler Gewinnbetrag für dieselbe Vorratsmenge, keine unskalierte Prozentzahl.'],['RC','Aktuelle Wiederbeschaffungskosten.'],['Market','Innerhalb der Grenzen bestimmter Vergleichswert.'],['Cost,BV','Kosten und resultierender Buchwert.']]),
  T(['Kosten 100; NRV 90; normaler Gewinnbetrag 15','Wiederbeschaffungskosten','Market','Buchwert'],[
   ['Unterhalb der Untergrenze 75','70','75','75'],
   ['Zwischen beiden Grenzen','85','85','85'],
   ['Oberhalb der Obergrenze 90','95','90','90']
  ],'Ein unmittelbarer Ansatz von NRV 90 würde die US-LIFO-Regel in den ersten beiden Fällen nicht abbilden.'),
  'Eine Aufgabe ohne Angabe des Regelwerks oder der relevanten Methode kann diese Unterschiede nicht eindeutig auflösen. Im Jahresabschluss führt eine US-Abwertung grundsätzlich zu einer neuen Kostenbasis; eine spätere bloße Werterholung erzeugt anders als im IFRS-Fall keine allgemeine Zuschreibung.'
 ]),
 S('write-down-effects','11. Abwertung verändert mehrere Kennzahlen gleichzeitig','a b',[
  X('Ein besserer Lagerumschlag kann aus einem Verlust entstehen','Vor Abwertung: Endvorrat 200, kurzfristige Aktiva 400, kurzfristige Verpflichtungen 250, Aktiva insgesamt 800, Finanzschulden 300. Umsatz 1.000, COGS 600, Anfangsvorrat 180. Eine Wertminderung von 30 wird in COGS erfasst; keine Steuerwirkung.',[
   'Endvorrat fällt auf 170, kurzfristige Aktiva auf 370 und Gesamtaktiva auf 770. Bruttogewinn sinkt von 400 auf 370; Eigenkapital und Gewinn sinken um 30.',
   'Current Ratio sinkt von 400/250 = 1,60 auf 370/250 = 1,48. Debt/Assets steigt von 300/800 = 37,50 % auf 300/770 ≈ 38,9610 %.',
   'Vor Abwertung: Durchschnittsvorrat (180 + 200)/2 = 190; Umschlag 600/190 ≈ 3,1579. Nach Abwertung: Durchschnitt 175; Umschlag 630/175 = 3,60.',
   'Der rechnerische Lagerumschlag steigt, obwohl kein zusätzliches Stück verkauft wurde. Ein kleinerer Buchwertnenner und ein größerer Aufwandzähler wirken gleichzeitig.',
   'Die Abschreibung selbst erzeugt keine neue Zahlung. In einer indirekten Cashflowüberleitung darf man sie nicht zugleich separat zurückaddieren und über eine unbereinigte Vorratsbestandsänderung ein zweites Mal korrigieren.'
  ],'Buchwertkennzahlen werden zusammen mit Mengen, Wertberichtigungen und tatsächlichem Absatz interpretiert.'),
  F('IT=COGS/\\overline I,\\qquad DIO=Days/IT','Die Definition verbindet den bewerteten Verbrauch mit einem passenden durchschnittlichen Vorratsbestand. Wertänderungen können beide Größen beeinflussen.',[['IT','Inventory Turnover bzw. Vorratsumschlag pro betrachteter Periode.'],['COGS','Umsatzkosten nach der offengelegten Abgrenzung.'],['\\overline I','Geeigneter durchschnittlicher Vorratsbuchwert.'],['Days','Tage der betrachteten Periode.'],['DIO','Rechnerische Lagerdauer in Tagen.']])
 ]),
 S('reversal','12. IFRS-Zuschreibung und US-Kostenbasis auseinanderhalten','a',[
  'Erholen sich die maßgeblichen Umstände bzw. der NRV, begrenzt IAS 2 die Zuschreibung auf die zuvor erfasste Abwertung. Der neue Buchwert bleibt höchstens bei den ursprünglichen Kosten. Eine noch unverkaufte Ware wird nicht allein wegen guter Nachfrage mit einem Gewinn über ihre Kosten gehoben.',
  F('BV_{new}=\\min(Cost,NRV_{new}),\\qquad Rev=BV_{new}-BV_{old}','Diese vereinfachte positive Zuschreibungsrechnung gilt bei belegter Erholung für dieselben unveränderten Vorräte ohne zusätzliche Kosten oder Abgänge. Der ursprüngliche Kostenbetrag bleibt die Obergrenze.',[['BV_{old},BV_{new}','Buchwert vor und nach der zulässigen Erholung.'],['Cost','Ursprüngliche unveränderte Kosten.'],['NRV_{new}','Neu geschätzter Nettoveräußerungswert.'],['Rev','Erfolgswirksame Zuschreibung als Verminderung des Vorratsaufwands.']]),
  G({id:'write-down-reversal',title:'Erholung endet bei den ursprünglichen Kosten',
   caption:'Eigener Jahresvergleich desselben unveränderten Warenpostens: Kosten 100; NRV nacheinander 70, 85 und 110. Keine Verkäufe, Nachkäufe oder zusätzlichen Kosten während dieser drei Jahre.',
   reading:'Nach der Abwertung auf 70 steigt der IFRS-Buchwert auf 85 und dann höchstens 100. Die US-Jahresabschlusskostenbasis bleibt nach der ersten Abwertung bei 70. Eine spätere Verkaufsperiode kann deshalb unterschiedliche Margen zeigen, obwohl der gesamte wirtschaftliche Erfolg über alle Perioden gleich ist.',
   plot:{x:[0,3],y:[0,120],xTicks:[0,1,2,3],xLabel:'Zeitpunkt: 0 vor Abwertung, 1–3 Jahresende',yLabel:'Vorratsbuchwert',series:[
    {name:'IFRS bei belegter NRV-Erholung',points:[[0,100],[1,70],[2,85],[3,100]]},
    {name:'US-Jahresabschluss, neue Kostenbasis',dash:'5 4',points:[[0,100],[1,70],[2,70],[3,70]]}
   ],marks:[{x:3,y:100,label:'Kostenobergrenze 100',dx:-8,dy:-14,anchor:'end'},{x:3,y:70,label:'70 bleibt Kostenbasis',dx:-8,dy:24,anchor:'end'}]}}),
  X('Spätere Marge kann eine alte Abschreibung spiegeln','Der Posten der Grafik wird im vierten Jahr für 120 ohne weitere Kosten verkauft.',[
   'IFRS: Im ersten Jahr Verlust 30, danach Zuschreibungen 15 und 15, beim Verkauf Gewinn 20. Summe: −30 + 15 + 15 + 20 = 20.',
   'US-Jahresvergleich: Verlust 30, keine Zuschreibungen in den beiden Folgejahren, beim Verkauf Gewinn 50. Summe ebenfalls −30 + 50 = 20.',
   'Der höhere Verkaufsgewinn 50 belegt daher keine bessere Wirtschaftlichkeit des Verkaufsgeschäfts; er verwendet lediglich die niedrigere Kostenbasis aus einer früheren Verlustperiode.'
  ],'Periodenergebnisse werden über die vollständige Lebensgeschichte des Postens nachvollzogen.')
 ]),
 S('combined','13. Kostenmethode und NRV gemeinsam anwenden','a b',[
  X('Ein niedrigerer NRV verkleinert den ursprünglichen Methodenabstand','Im 300-Stück-Grundfall bleiben 80 Stück. Ihr geschätzter NRV beträgt jetzt nur 11 je Stück. Für den US-LIFO-Vergleich liege auch der korrekt begrenzte Market-Wert bei 11 je Stück. Keine Steuerwirkung.',[
   'FIFO: Kosten 1.120, Vergleichswert 880, Verlust 240. Endbestand 880 und Gesamtaufwand aus Verkauf plus Abwertung 2.480 + 240 = 2.720.',
   'Durchschnitt: Kosten 960, Vergleichswert 880, Verlust 80. Endbestand ebenfalls 880 und Aufwand 2.640 + 80 = 2.720.',
   'LIFO: Kosten 800 sind bereits niedriger als der vorgegebene Market-Wert 880; kein zusätzlicher Verlust. Endbestand 800 und Aufwand 2.800.',
   'FIFO- und Durchschnittsbruttogewinn betragen nach Abwertung beide 1.680; der LIFO-Bruttogewinn bleibt 1.600. Die Aussage über Margen vor Abwertung hätte diesen Endzustand nicht vollständig erklärt.'
  ],'Erst Kostenzuordnung, dann passender Niederstwerttest, anschließend Kennzahlenvergleich.')
 ]),
 S('disclosures','14. Aus Angaben eine belastbare Lageranalyse machen','c',[
  T(['Angabe oder Zusatzinformation','Analytischer Nutzen','Offene Grenze'],[
   ['Bilanzierungsmethode und Abgrenzung','Methodeneffekte von Mengen- und Preiseffekten unterscheiden.','Ein Konzern kann für verschiedene Bestände unterschiedliche zulässige Methoden nutzen.'],
   ['Rohstoffe, unfertige und fertige Erzeugnisse','Engpass, Produktionsfortschritt oder Absatzstau lokalisieren.','Ein hoher Rohstoffbestand kann vorsorglich oder veraltet sein.'],
   ['Als Aufwand erfasste Vorratskosten','Umsatzkosten und periodenfremde Bewertungswirkungen nachvollziehen.','Unzugeordnete Gemeinkosten und außergewöhnlicher Ausschuss können enthalten sein.'],
   ['Abwertungen und zulässige Zuschreibungen samt Gründen','Vorsicht, veränderte Nachfrage und spätere Margeneffekte beurteilen.','Schätzungen benötigen Abgleich mit tatsächlichem Verkauf und Alter.'],
   ['Als Sicherheit verpfändete Vorräte','Verfügbarkeit für andere Gläubiger und Finanzierung untersuchen.','Bilanzwert ist nicht automatisch kurzfristiger Liquidationserlös.'],
   ['LIFO-Reserve und Liquidationseffekte','Vergleichskosten und nicht nachhaltige Margen prüfen.','Definition des veröffentlichten Vergleichsmaßstabs muss passen.'],
   ['Absatzmengen, Rabatte, Rückgaben und Branchenpreise','Buchwertkennzahlen mit wirtschaftlichem Warenfluss vergleichen.','Andere Produktmischung und Saison können aggregierte Vergleiche verzerren.']
  ],'IAS-2-Angaben werden mit Geschäftsmodell und externen Informationen verbunden.'),
  'Eine steigende Vorratsquote bei fallendem Absatz begründet eine Nachfrage- und Werthaltigkeitsfrage. Sie beweist allein weder Manipulation noch Unverkäuflichkeit. Sinnvolle Gegenprüfungen sind Altersstruktur, Lieferzeiten, Produktwechsel, spätere Abverkäufe und tatsächlich erzielte Nettopreise.',
  'Der Abschluss der Analyse nennt Mengenentwicklung, Preisentwicklung, Methode, Wertberichtigungen und Finanzierung getrennt. So lässt sich erklären, welcher Teil einer Margenänderung aus Wettbewerb, Beschaffung oder bloßer zeitlicher Kostenzuordnung stammt.'
 ])
],related:[{unit:'cashflow-preparation',section:'supplier-cash',label:'Vorratsverbrauch in Lieferantenzahlung überleiten'},{unit:'ratios',section:'activity',label:'Umschlag und operative Kapitalbindung'},{unit:'income-statement',section:'common-size',label:'Margen statt bloßer Gewinnbeträge vergleichen'},{unit:'analysis-framework',section:'notes',label:'Angaben und Quellen kritisch lesen'}],
 sources:[
 {title:'CFA Institute: Lernziele Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=12'},
 {title:'CFA Institute: Analysis of Inventories',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/analysis-of-inventories'},
 {title:'IFRS Foundation: IAS 2, Überblick',url:'https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/'},
 {title:'IFRS Foundation: IAS 2, veröffentlichter Standardtext 2021',url:'https://www.ifrs.org/content/dam/ifrs/publications/pdf-standards/english/2021/issued/part-a/ias-2-inventories.pdf'},
 {title:'EUR-Lex: übernommene IFRS, konsolidierte Fassung 8. März 2026, IAS 2',url:'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02023R1803-20260308'},
 {title:'IFRS Interpretations Committee: notwendige Verkaufskosten, endgültige Entscheidung Juni 2021',url:'https://www.ifrs.org/content/dam/ifrs/supporting-implementation/agenda-decisions/2021/costs-necessary-to-sell-inventories-jun-21.pdf'},
 {title:'FASB: ASU 2015-11, unterschiedliche US-Niederstwertregeln',url:'https://storage.fasb.org/ASU%202015-11.pdf'},
 {title:'SEC: Staff Accounting Bulletin Topic 5, Vorratsabwertung und neue Kostenbasis',url:'https://www.sec.gov/interps/account/sabcodet5.htm'}
 ],review:{status:'draft',date:'2026-09-24',note:'Eigene Schicht-, Mengen- und Mehrperiodenfälle trennen Kostenmethode, Steuerannahme, Abwertung und tatsächliche Zahlungen.'}};
