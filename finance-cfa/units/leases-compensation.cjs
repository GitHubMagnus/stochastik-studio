const {F,T,X,S,G}=require('../author.cjs');
const pv=[1,2,3].reduce((sum,t)=>sum+3000/1.1**t,0);
let balance=pv;const leaseExpense=[1,2,3].map(t=>{const interest=balance*.1;balance+=interest-3000;return [t,pv/3+interest];});
module.exports={id:'leases-compensation',intro:[
 'Leasing und Mitarbeitervergütung verbinden heutige Leistungen mit späteren Zahlungen. Ein Unternehmen nutzt heute eine Maschine oder erhält heute Arbeitsleistung; Cash kann erst später abfließen, aus einem Pensionsfonds stammen oder durch neue Aktien ersetzt werden. Deshalb reicht ein Blick auf die aktuellen Auszahlungen nicht aus, um Kosten und Verpflichtungen zu verstehen.',
 'Der gemeinsame Denkweg lautet: Welche Ressource oder Leistung erhält das Unternehmen? Welche Verpflichtung entsteht dafür? Wie verändern sich beide Bestände über die Zeit? Welche Änderung geht durch Gewinn, sonstiges Ergebnis oder Eigenkapital? Die folgenden Rechnungen verbinden diese vier Fragen mit der Bilanz, GuV und Cashflowrechnung.'
],sections:[
 S('lease-contract','1. Nutzungsrecht, Dienstleistung und Finanzierung','a',[
  'Ein Leasingverhältnis überträgt gegen Entgelt das Recht, die Nutzung eines identifizierten Vermögenswerts für eine vereinbarte Zeit zu kontrollieren. Eine bestimmte Maschine in der eigenen Produktion ist anders zu beurteilen als der bloße Bezug einer Transportleistung, bei der der Lieferant seine Fahrzeuge frei einsetzt. Prüfe den identifizierten Vermögenswert, wirtschaftlich substanzielle Austauschrechte und die Entscheidungsrechte über seine Nutzung.',
  'Der Leasingnehmer heißt Lessee, der Leasinggeber Lessor. Rechtliches Eigentum und bilanzielle Erfassung sind verschiedene Fragen: Der Leasingnehmer kann ein Nutzungsrecht aktivieren, obwohl der Leasinggeber Eigentümer bleibt. Ein Servicevertrag ohne kontrolliertes Nutzungsrecht erzeugt nicht allein wegen regelmäßiger Zahlungen einen Leasingvermögenswert.',
  'Unter IFRS 16 verwendet der Leasingnehmer grundsätzlich ein einheitliches Nutzungsrechtsmodell. Für geeignete kurzfristige Verträge und geringwertige Vermögenswerte bestehen Ausnahmen. US GAAP unterscheidet beim Leasingnehmer Finance Lease und Operating Lease; grundsätzlich stehen beide mit Nutzungsrecht und Verpflichtung in der Bilanz. Die historische Aussage „Operating Lease ist außerbilanziell“ ist für heutige gewöhnliche mehrjährige Verträge falsch.',
  T(['Prüfung','Wirtschaftliche Bedeutung'],[
   ['Eigentumsübergang oder hinreichend sichere Kaufoption','Spricht unter US GAAP für Finance Lease.'],
   ['Wesentlicher Teil der wirtschaftlichen Lebensdauer','Die Vertragsnutzung entspricht weitgehend einem finanzierten Erwerb.'],
   ['Barwert umfasst im Wesentlichen den Wert des Vermögenswerts','Die Zahlungen finanzieren wirtschaftlich nahezu den gesamten Vermögenswert.'],
   ['Spezialisierter Vermögenswert ohne alternative Nutzung beim Leasinggeber','Der Leasinggeber hat nach Vertragsende kaum einen anderen Verwendungszweck.']
  ],'Qualitative US-GAAP-Klassifikationsindikatoren; historische Prozentgrenzen sind keine universelle IFRS-16-Regel.'),
  'Die Vertragslaufzeit umfasst relevante Optionen, deren Ausübung nach dem Regelwerk hinreichend sicher ist. Eine lange Verlängerungsoption ist deshalb weder immer einzubeziehen noch immer auszuschließen. Neue Sachverhalte können Neubewertungen auslösen. Für eine Prüfungsaufgabe sind vorgegebene Klassifikation, Laufzeit und Diskontsatz konsequent zu verwenden.'
 ]),
 S('lease-measurement','2. Aus Raten entsteht ein Schuldenbestand','a',[
  'Die anfängliche Leasingverbindlichkeit ist der Barwert der einzubeziehenden noch unbezahlten Raten. Der Diskontsatz bildet die zeitliche Entfernung ab: Derselbe nominale Zahlungsbetrag führt bei höherem Zinssatz zu einem kleineren heutigen Schuldwert. Beim Lessee wird grundsätzlich der implizite Vertragszins verwendet, wenn er bestimmbar ist; sonst ein geeigneter Grenzfremdkapitalzinssatz.',
  F('L_0=\\sum_{t=1}^{n}\\frac{PMT_t}{(1+r)^t},\\qquad ROU_0=L_0+PP+IDC+RC-INC','Die Schuld bewertet zukünftige Zahlungen. Das Nutzungsrecht kann wegen weiterer Anschaffungskomponenten davon abweichen.',[
   ['L_0','Leasingverbindlichkeit zu Vertragsbeginn.'],['PMT_t','In die Bewertung einzubeziehende Zahlung am Ende der Periode t.'],['r','Diskontsatz je Zahlungsperiode als Dezimalzahl.'],['n,t','Anzahl der Perioden und Periodenindex.'],
   ['ROU_0','Anfänglicher Buchwert des Nutzungsrechts.'],['PP','Vor oder bei Bereitstellung geleistete Vorauszahlungen.'],['IDC','Einzubeziehende direkte Anfangskosten.'],['RC','Einzubeziehende geschätzte Rückbau-/Wiederherstellungskosten.'],['INC','Erhaltene Leasinganreize, soweit noch nicht anderweitig berücksichtigt.']
  ]),
  F('I_t=rL_{t-1},\\qquad P_t=PMT_t-I_t,\\qquad L_t=L_{t-1}+I_t-PMT_t','Eine Rate enthält Entgelt für Finanzierung und Rückzahlung des Schuldenbestands. Nur der Tilgungsanteil vermindert die Schuld.',[
   ['I_t','Zinskomponente der Periode t.'],['r','Periodischer Effektivzins.'],['L_{t-1},L_t','Verbindlichkeit vor und nach der Zahlung.'],['P_t','Tilgungsanteil der Zahlung.'],['PMT_t','Gesamte Rate am Periodenende.']
  ]),
  X('Drei Jahresraten mit vollständig nachvollziehbarem Verlauf','Drei nachschüssige Zahlungen zu je 3.000; jährlicher Diskontsatz 10 %. Keine Anfangskosten, Vorauszahlungen, Restwerte oder Optionen. Nutzungsrecht wird linear über drei Jahre abgeschrieben.',[
   F('L_0=\\frac{3000}{1{,}1}+\\frac{3000}{1{,}1^2}+\\frac{3000}{1{,}1^3}=7460{,}56,\\qquad Dep=\\frac{7460{,}56}{3}=2486{,}85','Der ungerundete Barwert wird für die Folgeperioden weitergeführt; Rundung erfolgt erst bei der Darstellung.',[['L_0','Anfängliche Leasingverbindlichkeit und hier zugleich Nutzungsrecht.'],['Dep','Jährliche lineare Abschreibung des Nutzungsrechts.']]),
   T(['Jahr','Schuld zu Beginn','Zins','Tilgung','Schuld am Ende','Abschreibung + Zins'],[
    ['1','7.460,56','746,06','2.253,94','5.206,61','3.232,91'],
    ['2','5.206,61','520,66','2.479,34','2.727,27','3.007,51'],
    ['3','2.727,27','272,73','2.727,27','0,00','2.759,58']
   ],'Eigene Beispielrechnung: jede Rate beträgt 3.000; Zins sinkt, Tilgung steigt.'),
   'Im ersten Jahr werden 746,06 für die Zeitnutzung des Kapitals verbraucht und 2.253,94 Schuld getilgt. Die GuV erfasst im Finanzierungsmodell dagegen 2.486,85 Abschreibung plus 746,06 Zins. Die Auszahlung von 3.000 ist daher weder der gesamte Aufwand noch die gesamte Tilgung.',
   'Über alle drei Jahre beträgt die Abschreibung insgesamt 7.460,56 und der Zins insgesamt 1.539,44. Zusammen ergibt das 9.000 Aufwand und genau 9.000 Auszahlungen. Die Modelle verändern hier die zeitliche Zuordnung, nicht die Summe.'
  ],'Der Verlauf ist dieselbe Effektivzinslogik wie bei einem amortisierenden Kredit. Ein immer gleicher Zinsanteil auf die ursprüngliche Schuld wäre falsch.')
 ]),
 S('lease-comparison','3. IFRS und US GAAP am selben Vertrag vergleichen','a c',[
  G({id:'lease-expense',title:'Gleiche Zahlungen, anderer zeitlicher Aufwand',
   caption:'Das Finanzierungsmodell verlagert Aufwand nach vorn. Über alle drei Jahre beträgt die Summe in beiden Modellen 9.000.',
   reading:'Die Punkte verwenden die ungerundeten Werte des Tilgungsplans. Verbindungslinien verdeutlichen den Jahresvergleich; die vertikale Achse zeigt zur besseren Unterscheidung nur den Ausschnitt von 2.500 bis 3.400.',
   plot:{x:[1,3],y:[2500,3400],xTicks:[1,2,3],xLabel:'Vertragsjahr',yLabel:'Periodischer Aufwand (Geldeinheiten)',series:[
    {name:'Abschreibung plus Zins',points:leaseExpense},
    {name:'US Operating: einheitlicher Aufwand',points:[[1,3000],[2,3000],[3,3000]],dash:'8 5'}
   ]}}),
  'Beim US Operating Lease entsteht gewöhnlich ein einheitlicher periodischer Leasingaufwand. Bei gleichmäßigen Raten ohne Sonderkomponenten entspricht er im Beispiel jährlich 3.000. Die Zinsaufzinsung wird bei der Fortschreibung der Verbindlichkeit trotzdem benötigt. Der Abbau des Nutzungsrechts wird so bemessen, dass sich zusammen der gleichmäßige Aufwand ergibt; er ist deshalb hier nicht linear.',
  T(['Erstes Jahr des Beispiels','IFRS-Nutzungsrecht / US Finance','US Operating'],[
   ['Bilanz zu Beginn','Nutzungsrecht 7.460,56; Schuld 7.460,56','Nutzungsrecht 7.460,56; Schuld 7.460,56'],
   ['Schuld am Jahresende','5.206,61','5.206,61'],
   ['Nutzungsrecht am Jahresende','4.973,70','5.206,61'],
   ['GuV-Aufwand gesamt','3.232,91','3.000,00'],
   ['Auszahlung gesamt','3.000,00','3.000,00']
  ],'Ohne Steuern, Wertminderung und Vertragsänderung. Das Finanzierungsmodell belastet den Gewinn anfangs stärker.'),
  'Im Finanzierungsmodell wird ein Teil der Gesamtkosten als Zins unterhalb des operativen Ergebnisses ausgewiesen. Ein üblich definiertes EBITDA ist deshalb höher als bei einem US Operating Lease mit operativem Leasingaufwand. Dieser Ausweis erzeugt keinen zusätzlichen Cashflow. EBITDA-Vergleiche zwischen Unternehmen benötigen konsistente Leasingbehandlung.',
  T(['Regel und ausdrücklich angenommene Basis','CFO','CFF'],[
   ['US Finance Lease','Zins 746,06 als Abfluss','Tilgung 2.253,94 als Abfluss'],
   ['US Operating Lease','Gesamte Rate 3.000 als Abfluss','Kein Tilgungsabfluss aus dieser Rate'],
   ['IFRS vor IFRS-18-Anwendung: Zins als operativ gewählt','Zins 746,06 als Abfluss','Tilgung 2.253,94 als Abfluss'],
   ['IFRS 18: Unternehmen ohne spezifizierte Investment-/Finanzierungshaupttätigkeit','Kein Abfluss aus der bewerteten Rate','Tilgung und Zins, zusammen 3.000']
  ],'CFO = operativer Cashflow, CFF = Finanzierungscashflow. Nicht aktivierte kurzfristige oder variable Zahlungen sind separat zu beurteilen.'),
  'IFRS 18 gilt für Geschäftsjahre, die am oder nach dem 1. Januar 2027 beginnen; frühere Anwendung ist möglich. Die damit geänderte IAS-7-Regel schränkt die bisherigen Wahlrechte bei Zins- und Dividenden-Cashflows ein. Für bestimmte Finanzierungs- und Investmentgeschäftsmodelle gelten besondere Zuordnungsregeln. Prüfungsjahr und Berichtsjahr sind nicht dasselbe: Eine 2027 gestellte Aufgabe über einen älteren Abschluss kann ausdrücklich die bisherige Basis verwenden.',
  'Höherer CFO durch Umklassifizierung bedeutet keinen höheren gesamten Mittelzufluss. Ebenso ist ein kleinerer Buchwert des Nutzungsrechts kein Marktwertgutachten über die Maschine. Die Aufgabe der Analyse besteht darin, wirtschaftliche Unterschiede von Ausweis- und Periodisierungseffekten zu trennen.'
 ]),
 S('lessor','4. Die Gegenposition des Leasinggebers','a',[
  'Beim Operating Lease behält der Leasinggeber den vermieteten Vermögenswert in seiner Bilanz, schreibt ihn ab und erfasst Miet-/Leasingerträge über die Nutzungszeit. Er bleibt typischerweise stärker dem Restwertrisiko ausgesetzt: Was lässt sich nach Ende der Vermietung noch mit dem Vermögenswert erzielen?',
  'Beim Finance Lease nach IFRS wird grundsätzlich eine Nettoinvestition in das Leasingverhältnis erfasst. Sie umfasst den abgezinsten Anspruch aus relevanten Raten und Restwertkomponenten. Spätere Einnahmen werden in Finanzierungsertrag und Rückführung der Nettoinvestition zerlegt. Ein Hersteller-/Händlerleasing kann zusätzlich einen anfänglichen Verkaufsgewinn enthalten.',
  'US GAAP unterscheidet auf Leasinggeberseite Operating, Sales-Type und Direct Financing Lease. Bei Sales-Type wird ein möglicher Verkaufsgewinn grundsätzlich bei Beginn erfasst, wenn die Ansatzvoraussetzungen einschließlich Einbringlichkeit erfüllt sind. Bei Direct Financing wird ein solcher Gewinn grundsätzlich in der Nettoinvestition aufgeschoben und über die Laufzeit vereinnahmt. Eine schematisch identische Erfassung bei beiden Vertragsparteien ist deshalb nicht zulässig.',
  X('Ein Kreditprofil aus einem Leasingvertrag','Im obigen Dreijahresvertrag besitzt der Leasinggeber anfangs eine Nettoinvestition von 7.460,56. Es gibt keinen Restwert und keinen anfänglichen Verkaufsgewinn.',[
   'Die erste Zahlung von 3.000 besteht für ihn aus 746,06 Finanzierungsertrag und 2.253,94 Rückfluss seiner Investition. Sein Forderungsbestand fällt auf 5.206,61.',
   'Der Leasingnehmer nennt denselben Finanzierungsteil Zinsaufwand; der Leasinggeber Finanzierungsertrag. Diese Gegenüberstellung erklärt die Symmetrie des Zahlungsstroms. Unterschiedliche Anfangskosten, Restwertgarantien oder Bilanzierungsvoraussetzungen können die ausgewiesenen Bestände dennoch auseinanderführen.'
  ],'Die gesamten Raten sofort als Umsatz zu erfassen und anschließend zusätzlich Zinsen zu buchen, würde die Erträge dieses Finanzierungsbeispiels doppelt zählen.')
 ]),
 S('pensions','5. Beitragszusage und Leistungszusage','b',[
  'Bei einem Defined Contribution Plan schuldet der Arbeitgeber vereinbarte Beiträge. Sind die fälligen Beiträge bezahlt, bleibt grundsätzlich keine Verpflichtung zur Garantie einer bestimmten späteren Rente. Ausstehende Beiträge können jedoch eine Verbindlichkeit erzeugen. Anlage- und Langlebigkeitsrisiken liegen gewöhnlich stärker beim Arbeitnehmer.',
  'Bei einem Defined Benefit Plan ist eine spätere Leistung versprochen, etwa abhängig von Gehalt und Dienstjahren. Der Arbeitgeber muss deshalb eine Verpflichtung schätzen und abzinsen. Planvermögen ist ein separater Deckungsbestand; seine Anlageerträge sind nicht dasselbe wie die im Unternehmen erwirtschafteten operativen Gewinne.',
  F('N=O-A,\\qquad O_1=O_0+SC+rO_0+AL-B,\\qquad A_1=A_0+R_A+C-B','Die Nettoverpflichtung entsteht aus zwei fortgeschriebenen Beständen. Die vereinfachte Überleitung nimmt Zahlungen am Periodenende an.',[
   ['N','Netto-Pensionsverpflichtung; positiver Wert bedeutet Unterdeckung.'],['O,O_0,O_1','Barwert der Leistungszusage, hier zu Beginn bzw. Ende der Periode.'],['A,A_0,A_1','Fair Value des Planvermögens zu denselben Zeitpunkten.'],
   ['SC','In der Periode zusätzlich erdienter Dienstzeitaufwand.'],['r','Passender Diskontsatz je Periode.'],['AL','Versicherungsmathematischer Verlust auf der Verpflichtung, mit umgekehrtem Vorzeichen bei Gewinn.'],
   ['B','Aus dem Plan ausgezahlte Rentenleistungen.'],['R_A','Tatsächlicher Anlageertrag des Planvermögens in Geldeinheiten.'],['C','Arbeitgeberbeiträge an den Plan.']
  ]),
  'Ein fallender Diskontsatz erhöht bei unveränderten versprochenen Leistungen deren Barwert. Höhere Gehaltssteigerungen oder längere erwartete Rentenbezugszeiten können ebenfalls die Verpflichtung erhöhen. Diese Schätzungen wirken auf den heutigen Bilanzwert, obwohl die zusätzliche Auszahlung erst später erfolgt. Ein niedriger ausgewiesener Aufwand kann daher keine ausreichende Finanzierung beweisen.',
  'IAS 19 trennt Dienstzeitaufwand, Nettozins und Neubewertungen. Dienstzeitaufwand und Nettozins laufen grundsätzlich durch Gewinn oder Verlust; Neubewertungen werden im sonstigen Ergebnis (OCI) erfasst und später nicht in die GuV umgegliedert. Das vereinfachte Nettozinsprinzip verwendet den Diskontsatz auf den Nettobestand; unterjährige Beiträge und Zahlungen erfordern Zeitgewichtung. Ein Nettovermögenswert kann durch die Begrenzung auf verfügbare wirtschaftliche Vorteile eingeschränkt werden.',
  X('Warum Aufwand, Beitrag und Bilanzveränderung verschieden sind','Anfangsverpflichtung 500, Planvermögen 440, Dienstzeitaufwand 20 und Diskontsatz 4 %. Beiträge 25 und Rentenzahlungen 30 am Jahresende. Tatsächlicher Anlageertrag 8; versicherungsmathematischer Verlust auf der Verpflichtung 15. Keine Planänderung oder Asset-Ceiling-Effekte.',[
   F('O_1=500+20+20+15-30=525,\\quad A_1=440+8+25-30=443,\\quad N_1=82','Die Schlussbestände werden zunächst getrennt aufgebaut.',[['O_1,A_1','Verpflichtung und Planvermögen am Jahresende.'],['N_1','Nettoverpflichtung am Jahresende.']]),
   F('PPC=20+0{,}04(500-440)=22{,}4,\\quad OCI_L=15+(17{,}6-8)=24{,}6','Der IFRS-Nettozins beträgt 2,4. Der Planvermögensertrag bleibt 9,6 hinter dem im Nettozins enthaltenen rechnerischen Zinsertrag zurück.',[['PPC','Hier in der GuV erfasster Pensionsaufwand.'],['OCI_L','Neubewertungsverlust im sonstigen Ergebnis.']]),
   F('N_1=60+22{,}4+24{,}6-25=82','GuV-Aufwand und OCI-Verlust erhöhen die Nettoschuld; der Arbeitgeberbeitrag senkt sie.',[['N_1','Schlussbestand der Nettoverpflichtung.']])
  ],'25 Cashzahlung, 22,4 GuV-Aufwand und 22 Zunahme der Nettoschuld sind drei verschiedene, miteinander vereinbare Zahlen.')
 ]),
 S('pension-comparison','6. Pensionsvergleich und versteckte Glättung','b c',[
  'Unter US GAAP enthält der periodische Pensionsaufwand einen erwarteten Planvermögensertrag. Dieser kann vom Diskontsatz auf die Verpflichtung abweichen. Bestimmte Gewinne, Verluste und frühere Dienstzeitkosten können zunächst im OCI verbleiben und später die GuV beeinflussen; genaue Amortisation und zulässige Methoden sind gesondert zu beachten. IFRS-Neubewertungen werden dagegen nicht später durch die GuV recycelt.',
  F('PPC_{US}=SC+IC-ER+Am','Ein vereinfachter US-GAAP-Aufbau zeigt, an welchen Stellen Erwartungen und zeitliche Verteilung den Aufwand verändern.',[
   ['PPC_{US}','Periodischer Pensionsaufwand nach den angegebenen US-GAAP-Annahmen.'],['SC','Dienstzeitaufwand.'],['IC','Zins auf die Leistungszusage.'],['ER','Erwarteter Ertrag des Planvermögens in Geldeinheiten.'],['Am','Netto einzubeziehende Amortisationen früherer Posten; hier als Aufwand positiv.']
  ]),
  'Würde im vorigen Beispiel ein erwarteter Planvermögensertrag von 6 % und keine Amortisation angesetzt, wären dies 26,4. Der vereinfachte US-GAAP-Aufwand wäre 20 + 20 − 26,4 = 13,6 statt des IFRS-Aufwands von 22,4. Die tatsächlichen Planaktiva und versprochenen Rentenzahlungen ändern sich dadurch nicht. Ein optimistischerer erwarteter Ertrag verbessert in diesem Modell die GuV, ohne den Deckungsbestand zu erhöhen.',
  'Für den Vergleich werden Finanzierungssituation, Annahmen und Ergebnisbestandteile getrennt analysiert. Pensionsangaben liefern dafür Diskontsatz, Gehalts- und Langlebigkeitsannahmen, Planvermögensstruktur, erwartete Beiträge und Sensitivitäten. Eine einzelne Deckungsquote blendet Laufzeiten und Risiken von Aktiv- und Passivseite aus.'
 ]),
 S('share-payments','7. Aktienbasierte Vergütung ist ein wirtschaftlicher Aufwand','b',[
  'Aktien und Optionen können Mitarbeiter binden und ihre Interessen an den Aktienwert koppeln. Die Leistung der Mitarbeiter ist trotzdem eine Ressource, die das Unternehmen verbraucht. Dass im Gewährungszeitpunkt kein Cash bezahlt wird, macht diese Vergütung nicht kostenlos: Bestehende Eigentümer geben Beteiligungsrechte ab oder finanzieren spätere Ausgleichszahlungen.',
  'Bei gewöhnlichen aktienbasierten Mitarbeiterzusagen mit Eigenkapitalerfüllung wird der maßgebliche Fair Value grundsätzlich am Gewährungszeitpunkt bestimmt und über die erforderliche Dienstzeit erfasst. Ein späterer Aktienkursanstieg führt bei dieser einfachen Eigenkapitalzusage nicht laufend zu einer Neubewertung dieses Grant-Date-Werts. Bar zu erfüllende Zusagen werden dagegen als Verpflichtung erfasst und grundsätzlich bis zur Erfüllung neu bewertet.',
  F('Exp_{cum,t}=FV_g\\,N_{vest,t}\\frac{t}{v},\\qquad Exp_t=Exp_{cum,t}-Exp_{cum,t-1}','Für eine einfache gleichmäßig erdiente Zusage wird der erwartete Gesamtaufwand anteilig der erbrachten Dienstzeit zugeordnet.',[
   ['Exp_{cum,t}','Bis zum Zeitpunkt t kumulativ zu erfassender Vergütungsaufwand.'],['FV_g','Maßgeblicher Fair Value je zugesagtem Eigenkapitalinstrument am Gewährungszeitpunkt.'],
   ['N_{vest,t}','Aktuell erwartete Zahl der nach den hier angenommenen Dienstzeitbedingungen unverfallbar werdenden Instrumente.'],['t,v','Bisher erbrachte Dienstzeit und gesamte erforderliche Dienstzeit in gleicher Einheit.'],['Exp_t','Aufwand der aktuellen Periode nach erforderlicher Anpassung.']
  ]),
  X('Verfallserwartungen verändern die Verteilung','1.000 eigenkapitalerfüllte Aktienzusagen, Grant-Date-Fair-Value 12 pro Stück, Dienstzeit drei Jahre. IFRS, einfache Dienstzeitbedingung: Ende Jahr 1 werden 90 %, Ende Jahr 2 werden 95 % als künftig unverfallbar erwartet.',[
   'Ende Jahr 1 beträgt der erwartete Gesamtaufwand 1.000 × 90 % × 12 = 10.800. Ein Drittel der Dienstzeit ist erbracht; erfasst werden 3.600.',
   'Ende Jahr 2 beträgt der revidierte Gesamtaufwand 11.400. Zwei Drittel ergeben kumulativ 7.600. Da 3.600 bereits erfasst wurden, beträgt der Aufwand des zweiten Jahres 4.000.',
   'Ein zwischenzeitlicher Börsenkurs von 20 ersetzt hier nicht den Grant-Date-Fair-Value von 12. Geändert hat sich die erwartete Stückzahl, nicht die Bewertungsbasis je gewährtem Instrument.'
  ],'Dienstzeit-, Leistungs- und Marktbedingungen sowie Änderungen von Zusagen können andere Details erfordern. US GAAP erlaubt bei Verfällen bestimmte Wahlrechte; die Beispielannahme ist ausdrücklich IFRS.'),
  'Bei indirekter Cashflowrechnung wird ein nicht zahlungswirksamer Vergütungsaufwand zunächst zum Gewinn zurückgerechnet. Diese Überleitung löscht die wirtschaftlichen Kosten nicht. Ein Aktienrückkauf zur Kompensation der Verwässerung verbraucht Cash. In einer Bewertung müssen Aufwandsbehandlung, Aktienzahl und Rückkäufe zusammenpassen, damit Vergütung weder ignoriert noch doppelt abgezogen wird.'
 ]),
 S('disclosures','8. Aus Angaben wird eine Analyse','c',[
  T(['Posten','Nötige Angaben','Analytische Anschlussfrage'],[
   ['Leasing','Fälligkeiten, Diskontsätze, Nutzungsrechte, Aufwand, Zahlungen und Optionen','Wie stark ändern Laufzeitannahmen und Anschlussmieten die tatsächliche Bindung?'],
   ['Pensionen','Überleitung der Zusage und Planaktiva, GuV/OCI, Annahmen und Sensitivitäten','Ist die Verbesserung finanziert oder durch neue Annahmen entstanden?'],
   ['Aktienvergütung','Zusagearten, Stückzahlentwicklung, Bewertungsannahmen, Vesting und Restaufwand','Wie unterscheiden sich laufender Aufwand und künftige Verwässerung?']
  ],'Die Tabelle verbindet Ausweis und Entscheidung; sie ist keine vollständige Checkliste jeder Spezialvorschrift.'),
  'Prüfe zuerst den Bilanzbestand, dann seine Überleitung und schließlich den Cashflow. Ein gestiegener Pensionsfehlbetrag kann trotz höherer Beiträge durch Marktrisiken entstehen. Eine unveränderte Leasingverbindlichkeit kann trotz Tilgung durch neue Verträge erklärt werden. Ein fallender Vergütungsaufwand kann aus auslaufenden Zusagen stammen und sagt wenig über die Kosten künftiger Neueinstellungen.',
  'Die Verbindungen zu anderen Kapiteln sind unmittelbar: Effektivzins und Barwert erklären Leasing; Duration erklärt die Zinssensitivität von Pensionszusagen; Basic und Diluted EPS zeigen die Wirkung potenzieller neuer Aktien; Kennzahlenanalyse trennt wirtschaftliche Verschuldung von unterschiedlichen Bilanzdefinitionen.'
 ])],
 sources:[
  {title:'IFRS Foundation: IFRS 16 Leases',url:'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/'},
  {title:'FASB: Topic 842, Überblick zu Ansatz und Klassifikation',url:'https://storage.fasb.org/FIF%20ASU%202016-02%20Leases%20(Topic%20842)%20(Rev%206-3-20).pdf'},
  {title:'IFRS Foundation: IAS 19 Employee Benefits',url:'https://www.ifrs.org/issued-standards/list-of-standards/ias-19-employee-benefits/'},
  {title:'IFRS Foundation: IFRS 2 Share-based Payment',url:'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-2-share-based-payment/'},
  {title:'IFRS Foundation: IFRS 18 und Anwendungsbeginn 2027',url:'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-18-presentation-and-disclosure-in-financial-statements/'},
  {title:'IASB 2026: Cashflowklassifikation einschließlich Leasing und IFRS 18',url:'https://www.ifrs.org/content/dam/ifrs/meetings/2026/april/iasb/ap7-usefulness-cash-flows.pdf'},
  {title:'CFA Institute: Employee Compensation',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/employee-compensation-post-employment-share-based'}
 ],review:{status:'draft',date:'2026-09-17',note:'Eigene Beispiele; Regelstand und IFRS-18-Abgrenzung explizit. Zahlen und Fragen werden separat geprüft.'}};
