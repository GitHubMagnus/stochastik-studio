const {F,T,X,S,G}=require('../author.cjs');
module.exports={id:'benchmarks',intro:[
 'Ein Depot kann wachsen, weil Anlagen steigen, Dividenden anfallen oder der Anleger neues Geld einzahlt. Nur die ersten beiden Ursachen sind Anlageerfolg. Eine Renditemessung muss deshalb zunächst festlegen, aus wessen Sicht sie Erfolg beurteilt und wie sie Ein- und Auszahlungen behandelt.',
 'Ein Vergleichsindex beantwortet anschließend eine andere Frage: Was wäre mit einer vorher festgelegten Anlagealternative geschehen? Seine Auswahlregeln, Gewichte, Ausschüttungsbehandlung und Währung beeinflussen das Ergebnis. „Der Markt stieg um fünf Prozent“ ist erst dann eine präzise Aussage, wenn diese Konventionen bekannt sind.'
],sections:[
 S('cashflow-timing','1. Anlageerfolg von externen Geldbewegungen trennen','a',[
  'Eine externe Einzahlung führt Kapital in das zu messende Portfolio hinein; eine Entnahme führt es heraus. Der Kauf einer Aktie aus bereits vorhandenem Portfoliocash ist dagegen eine interne Umschichtung. Ebenso ist eine Dividende, die im Portfolio verbleibt, ein Anlageertrag und kein neuer Anlegerbeitrag. Entscheidend ist die vorab definierte Grenze des betrachteten Portfolios.',
  F('r=\\frac{V_1-CF_1}{V_0}-1','Bei einer einzigen externen Geldbewegung am Periodenende wird diese aus dem Endwert herausgerechnet.',[
   ['r','Einfache Rendite der betrachteten Periode.'],['V_0','Portfoliowert zu Beginn.'],['V_1','Portfoliowert am Ende nach der externen Geldbewegung.'],['CF_1','Externe Einzahlung am Periodenende positiv, Entnahme negativ.']
  ]),
  'Eine Einzahlung zu Beginn verdient dagegen während der ganzen Periode mit und gehört zum anfänglichen eingesetzten Kapital. Eine Einzahlung mitten in der Periode kann nicht einfach mit derselben Endzeitformel behandelt werden. Für eine genaue zeitgewichtete Messung benötigt man eine Bewertung an der Grenze vor bzw. nach der Geldbewegung.',
  X('Warum Kontowachstum keine Rendite ist','Das Depot beginnt mit 100. Nach einem Anlagegewinn von 10 zahlt der Anleger unmittelbar vor dem Schlussstichtag 50 ein; der Endwert beträgt 160.',[
   'Das Vermögen ist um 60 gestiegen, aber 50 davon wurden von außen hinzugefügt. Die Anlage selbst hat 10 verdient.',
   F('r=\\frac{160-50}{100}-1=10\\%','Die Endzeiteinzahlung wird aus dem Schlusswert herausgenommen.',[['r','Rendite vor der Einzahlung am Stichtag.']]),
   'Wären die 50 bereits zu Beginn investiert worden und wäre derselbe Endwert 160 entstanden, wäre die Rendite nur 160/150 − 1 = 6,67 %. Zeitpunkt und Höhe der Einzahlung gehören deshalb zwingend zu den Daten.'
  ],'Ohne Cashflowzeitpunkte ist eine behauptete Portfoliorendite unter Umständen nicht eindeutig berechenbar.')
 ]),
 S('time-weighted','2. Zeitgewichtete Rendite: die Anlagephasen verketten','a',[
  'Die Time-Weighted Return (TWR) zerlegt den Zeitraum an externen Geldbewegungen. Innerhalb jedes Teilintervalls wird die Wertentwicklung des dort tatsächlich angelegten Kapitals berechnet. Die Wachstumsfaktoren werden anschließend multipliziert. Dadurch wird der direkte Einfluss der vom Anleger bestimmten Ein- und Auszahlungsbeträge auf das Gesamtmaß entfernt.',
  F('r_j=\\frac{V_j^-}{V_{j-1}^+}-1,\\qquad V_j^+=V_j^-+CF_j,\\qquad R_{TWR}=\\prod_{j=1}^{m}(1+r_j)-1','Vor der Geldbewegung wird die beendete Anlagephase bewertet; danach beginnt die nächste Phase mit dem neuen Kapital.',[
   ['r_j','Rendite des Teilintervalls j ohne externe Geldbewegung innerhalb dieses Intervalls.'],['V_j^-,V_j^+','Portfoliowert unmittelbar vor und nach der externen Geldbewegung am Zeitpunkt j.'],
   ['CF_j','Externer Nettozufluss am Grenzzeitpunkt, Einzahlung positiv.'],['m,j','Anzahl der Teilintervalle und Intervallindex.'],['R_{TWR}','Kumulative zeitgewichtete Rendite über den Gesamtzeitraum.']
  ]),
  F('r_{TWR,ann}=(1+R_{TWR})^{1/Y}-1','Annualisiert wird nach der gesamten verstrichenen Zeit, nicht nach der bloßen Zahl beliebig langer Teilintervalle.',[
   ['r_{TWR,ann}','Geometrisch annualisierte zeitgewichtete Rendite.'],['R_{TWR}','Kumulative TWR als Dezimalzahl.'],['Y','Gesamtdauer in Jahren nach der angegebenen Tageskonvention.']
  ]),
  'TWR eignet sich insbesondere zum Vergleich eines Managers, der keinen Einfluss auf die Kundeneinzahlungen hat. Sie zeigt, wie eine fortlaufend investierte Einheit Kapital durch die Renditephasen gewachsen wäre. Sie ist weder ein arithmetischer Durchschnitt noch ein Versprechen, dass jeder Anleger dieselbe persönliche Rendite erzielt hat.',
  'Genauigkeit erfordert passende Bewertungen an Cashflowzeitpunkten. Sind nur Anfangswert, Endwert und Geldbewegungen bekannt, sind Verfahren wie Modified Dietz Näherungen und müssen entsprechend bezeichnet werden. Bei sehr großen Bewegungen und starken Marktänderungen können solche Näherungen erheblich abweichen.'
 ]),
 S('money-weighted','3. Geldgewichtete Rendite: der Anleger und sein eingesetztes Kapital','a',[
  'Die Money-Weighted Return (MWR) ist der interne Zinsfuß der Anlegerzahlungen. Aus Sicht des Anlegers sind Einzahlungen in das Depot Ausgaben und Entnahmen oder der abschließende Vermögenswert Einnahmen. Die gesuchte Rendite setzt deren Barwertsumme auf null. Ein größerer Kapitalbetrag vor einer bestimmten Renditephase verleiht dieser Phase dadurch mehr Einfluss.',
  F('0=\\sum_{j=0}^{m}\\frac{C_j}{(1+r_{MWR})^{t_j}}','Der interne Zinsfuß ist die Rendite, bei der Ausgaben und Einnahmen des Anlegers denselben Barwert haben.',[
   ['C_j','Cashflow aus Anlegersicht: Einzahlung in das Portfolio negativ, Auszahlung an den Anleger positiv; der Endwert ist ein fiktiver Liquidationserlös.'],
   ['t_j','Zeit seit dem Anfang in Jahren; bei Jahresabständen 0, 1, 2 usw.'],['m,j','Letzter Zahlungsindex und laufender Index.'],['r_{MWR}','Jährlicher interner Zinsfuß für die gewählte Zeitbasis.']
  ]),
  'Bei unregelmäßigen Daten muss die Zeitbasis zum Rechenverfahren passen. Ein Taschenrechner mit gleichmäßig periodisierten CF-Eingaben behandelt aufeinanderfolgende Zahlungen gewöhnlich als gleich weit auseinanderliegend. Halbjahresabstände liefern zunächst einen Halbjahreszins, wenn sie als einzelne Perioden eingegeben wurden. Annualisierung und Frequenzen sind anschließend ausdrücklich zu prüfen.',
  'MWR beschreibt die Erfahrung des tatsächlich eingesetzten Anlegerkapitals. Sie ist besonders relevant, wenn ein Manager den Zeitpunkt von Kapitalabrufen und Rückzahlungen mitbestimmt. Beim Vergleich zweier Manager mit ganz unterschiedlichen kundengesteuerten Einzahlungen kann sie jedoch Anlagequalität und Anleger-Timing vermischen.',
  F('-100+\\frac{230}{1+r}-\\frac{132}{(1+r)^2}=0','Mehrere Vorzeichenwechsel können mehrere interne Zinsfüße erzeugen; hier erfüllen 10 % und 20 % die Gleichung.',[
   ['r','Möglicher interner Jahreszinsfuß des Zahlungsstroms −100, +230, −132.']
  ]),
  'Dieser Sonderfall zeigt eine Grenze des Verfahrens: Nicht jede Zahlungsfolge besitzt einen eindeutigen ökonomisch hilfreichen IRR. Eine angezeigte Rechnerlösung muss zur Zahlungsstruktur passen. Auch ein hoher kurzer IRR bedeutet nicht zwangsläufig einen großen Geldgewinn oder eine lange wiederholbare Anlagemöglichkeit.'
 ]),
 S('performance-example','4. Derselbe Managerpfad, unterschiedliche Anlegererfahrung','a',[
  X('Positive TWR und trotzdem ein Geldverlust','Zu Beginn werden 100 investiert. Im ersten Jahr steigt das Portfolio um 20 % auf 120. Dann werden weitere 100 eingezahlt. Im zweiten Jahr fällt das nun 220 große Portfolio um 10 % auf 198. Keine Gebühren, Steuern oder weiteren Zahlungen.',[
   T(['Zeitpunkt','Vorgang','Wert vor Beitrag','Beitrag','Wert nach Beitrag'],[
    ['Start','Erste Einzahlung','0','100','100'],
    ['Ende Jahr 1','20 % Anlageerfolg','120','100','220'],
    ['Ende Jahr 2','−10 % Anlageerfolg','198','0','198']
   ],'Eigene Zahlungsfolge; die zweite Rate nimmt nur am zweiten Anlagejahr teil.'),
   F('R_{TWR}=1{,}2\\cdot0{,}9-1=8\\%,\\qquad r_{TWR,ann}=\\sqrt{1{,}08}-1\\approx3{,}923\\%','Die beiden Jahresfaktoren ergeben 8 % kumulativ über zwei Jahre.',[['R_{TWR}','Zweijährige zeitgewichtete Gesamtrendite.'],['r_{TWR,ann}','Geometrische Jahresrendite derselben Folge.']]),
   F('-100-\\frac{100}{1+r}+\\frac{198}{(1+r)^2}=0\\quad\\Longleftrightarrow\\quad100(1+r)^2+100(1+r)=198','Die erste Einzahlung muss zwei Jahre, die zweite ein Jahr bis zum Endwert aufgezinst werden.',[['r','Gesuchter jährlicher interner Zinsfuß.']]),
   F('r=\\frac{\\sqrt{8{,}92}-1}{2}-1\\approx-0{,}668\\%','Aus der quadratischen Gleichung wird die ökonomisch zulässige Lösung mit positivem Wachstumsfaktor gewählt.',[['r','Jährliche geldgewichtete Rendite.']]),
   'Der erste Jahresgewinn beträgt 20; der zweite Jahresverlust 22. Der Anleger hat insgesamt 200 eingezahlt und besitzt 198. Die negative MWR beschreibt diese Erfahrung. Die positive TWR beschreibt dagegen, dass eine einzige anfängliche Einheit ohne Nachschuss über beide Jahre um 8 % gewachsen wäre.'
  ],'Die Maße widersprechen sich nicht. Sie beantworten unterschiedliche Fragen und verwenden unterschiedliche Kapitalgewichte.'),
  X('Reihenfolge umdrehen und die Ursache isolieren','Dieselben Jahresrenditen werden vertauscht: zuerst −10 %, dann +20 %. Die Einzahlung von weiteren 100 bleibt zwischen den Jahren.',[
   'Aus den ersten 100 werden 90; nach dem Beitrag sind 190 investiert. Das zweite Jahr endet mit 228.',
   'Die TWR bleibt 0,9 × 1,2 − 1 = 8 %. Die MWR erfüllt jetzt 100(1 + r)² + 100(1 + r) = 228 und beträgt rund 9,060 % pro Jahr.',
   'Im ersten Fall wurde mehr Kapital vor dem schlechten Jahr bereitgestellt, im zweiten vor dem guten Jahr. Der reine Renditepfad hat denselben kumulativen Faktor, aber die Anlegerzahlungen machen die Reihenfolge relevant.'
  ],'Erst der Vergleich beider Fälle macht sichtbar, welchen Einfluss die Kapitalallokation über die Zeit ausübt.'),
  G({id:'cashflow-order',title:'Der Beitrag macht die Reihenfolge der Renditen relevant',
   caption:'Beide Reihen beginnen mit 100 und erhalten am Ende von Jahr 1 weitere 100. Die TWR ist jeweils 8 %, die Endvermögen sind verschieden.',
   reading:'Die vertikalen Sprünge bei Jahr 1 zeigen die externe Einzahlung, keinen Anlagegewinn. Die übrigen Linien verbinden nur die gegebenen Stichtagswerte; sie behaupten keinen tatsächlich gleichmäßigen Kursverlauf innerhalb der Jahre.',
   plot:{x:[0,2],y:[0,240],xTicks:[0,1,2],xLabel:'Zeit seit Anlagebeginn (Jahre)',yLabel:'Portfoliowert (Geldeinheiten)',series:[
    {name:'Zuerst +20 %, dann −10 %',points:[[0,100],[1,120],[1,220],[2,198]]},
    {name:'Zuerst −10 %, dann +20 %',points:[[0,100],[1,90],[1,190],[2,228]],dash:'8 5'}
   ],marks:[{x:2,y:198,label:'198',dx:-12,dy:24,anchor:'end'},{x:2,y:228,label:'228',dx:-12,dy:-12,anchor:'end'}]}})
 ]),
 S('index-weights','5. Ein Index ist eine regelgebundene Portfoliorechnung','b',[
  'Ein Index benötigt ein Anlageuniversum, Auswahlregeln, Gewichte und Regeln für Änderungen. Ein großer nominaler Aktienkurs bedeutet nicht automatisch ein großes Unternehmen: Ein Split kann den Stückkurs halbieren, während der Unternehmenswert unverändert bleibt. Genau deshalb führen Preisgewichtung und Kapitalisierungsgewichtung zu unterschiedlichen wirtschaftlichen Aussagen.',
  F('w_i^{P}=\\frac{P_i}{\\sum_kP_k},\\quad w_i^{M}=\\frac{P_iQ_i}{\\sum_kP_kQ_k},\\quad w_i^{F}=\\frac{P_iQ_if_i}{\\sum_kP_kQ_kf_k},\\quad w_i^{E}=\\frac1N','Die Gewichtungsregel entscheidet, welches Merkmal den Einfluss einer Aktie bestimmt.',[
   ['w_i^{P},w_i^{M},w_i^{F},w_i^{E}','Gewicht von Titel i bei Preis-, Marktkapitalisierungs-, Free-Float- und Gleichgewichtung.'],
   ['P_i,Q_i','Kurs je Aktie und berücksichtigte Aktienzahl von Titel i.'],['f_i','Investierbarer Streubesitzfaktor zwischen 0 und 1.'],['N','Anzahl gleich gewichteter Titel.'],['i,k','Titelindex und Summationsindex über alle Indexmitglieder.']
  ]),
  F('R_I=\\sum_{i=1}^{N}w_{i,0}R_i','Für eine Periode mit unverändertem Bestand und passender Ertragskonvention ist die Indexrendite die Summe der mit Anfangsgewichten bewerteten Titelrenditen.',[
   ['R_I','Indexrendite der Periode.'],['w_{i,0}','Portfoliogewicht des Titels i am Anfang der Periode.'],['R_i','Passend definierte Einzelrendite dieses Titels.'],['N,i','Anzahl der Titel und Titelindex.']
  ]),
  T(['Methode','Typischer Einfluss','Wichtige Grenze'],[
   ['Preisgewichtet','Hoher Stückkurs erhält hohes Gewicht','Splits beeinflussen die relativen Gewichte, obwohl der Unternehmenswert unverändert sein kann.'],
   ['Marktkapitalisiert','Große bewertete Unternehmen erhalten hohes Gewicht','Konzentration in wenigen großen Titeln kann steigen.'],
   ['Free-Float-kapitalisiert','Nur investierbarer Anteil zählt','Definition und Aktualisierung des Free Float sind methodische Entscheidungen.'],
   ['Gleichgewichtet','Jeder Titel startet mit demselben Kapitalanteil','Gewichte driften; regelmäßige Rücksetzung verursacht Handel.'],
   ['Fundamental gewichtet','Zum Beispiel Umsatz, Cashflow oder Buchwert bestimmt die Zielgewichte','Andere Faktor- und Branchenneigungen; Kennzahlendefinition und Datenverzögerung sind relevant.']
  ],'Gewichtung bestimmt Exposition und Umsetzungsbedarf; keine Methode ist für jede Frage automatisch überlegen.'),
  'Rebalancing setzt Gewichte zurück oder passt sie an neue Zielwerte an. Reconstitution verändert die Mitgliedschaft. Beides ist zu unterscheiden. Ein marktwertgewichtetes Portfolio folgt bei unveränderten Aktienzahlen den relativen Kursbewegungen ohne ständiges Zurücksetzen. Neue Aktien, Free-Float-Änderungen und Mitgliederwechsel können dennoch Anpassungen und Handel erfordern.'
 ]),
 S('weight-example','6. Gleiche Aktien, verschiedene Marktrenditen','b',[
  X('Zwei Titel genügen, um Gewichtungsunterschiede zu sehen','A kostet 20 und besitzt 10 Millionen Aktien; B kostet 80 und besitzt 1 Million Aktien. In der Periode steigt A auf 22, B fällt auf 76. Keine Ausschüttungen oder Kapitalmaßnahmen.',[
   T(['Größe','A','B'],[
    ['Anfangskurs','20','80'],['Marktkapitalisierung in Mio.','200','80'],['Einzelrendite','10 %','−5 %'],
    ['Preisgewicht','20 %','80 %'],['Kapitalisierungsgewicht','71,429 %','28,571 %'],['Gleichgewicht','50 %','50 %']
   ],'Der höhere Stückkurs von B ist mit einem kleineren Unternehmenswert vereinbar.'),
   F('R_P=0{,}2\\cdot0{,}10+0{,}8(-0{,}05)=-2\\%,\\quad R_M=\\frac{200}{280}0{,}10+\\frac{80}{280}(-0{,}05)\\approx5{,}714\\%','Preisgewichtung wird vom fallenden hochpreisigen Titel dominiert; Kapitalisierung vom steigenden größeren Unternehmen.',[['R_P,R_M','Rendite des preis- bzw. marktkapitalisierungsgewichteten Index.']]),
   F('R_E=0{,}5\\cdot0{,}10+0{,}5(-0{,}05)=2{,}5\\%','Ein gleich großer Anfangsbetrag in beiden Titeln liefert den Mittelwert ihrer Periodenrenditen.',[['R_E','Rendite bei gleichen Anfangsgewichten.']]),
   'Hat A nur 40 % Free Float und B 100 %, sind die investierbaren Marktwerte jeweils 80 Millionen. Die Float-Gewichte sind dann ebenfalls 50/50 und die Rendite beträgt in dieser Periode 2,5 %. Ein fundamental definierter Zielmix von 60/40 ergäbe dagegen 4 %.'
  ],'Drei unterschiedliche Indexrenditen können alle korrekt sein. Ein Benchmarkvergleich ohne Gewichtungsmethode kann deshalb eine falsche Schlussfolgerung über Managerleistung erzeugen.')
 ]),
 S('divisor','7. Der Divisor verhindert künstliche Renditen','b',[
  'Ein Indexniveau ist eine skalierte Größe, keine in einem Depot liegende Geldsumme. Der Divisor legt die Skala fest und wird bei bestimmten nicht marktbedingten Änderungen so angepasst, dass allein die technische Änderung keinen Sprung erzeugt. Echte Kursbewegungen dürfen dadurch nicht weggerechnet werden.',
  F('I_t=\\frac{Z_t}{d_t},\\qquad d_{neu}=\\frac{Z_{nach}}{I_{vor}}=d_{alt}\\frac{Z_{nach}}{Z_{vor}}','Die Kontinuitätsbedingung hält das Indexniveau unmittelbar vor und nach einer rein technischen Anpassung gleich.',[
   ['I_t,I_{vor}','Indexniveau zur Zeit t bzw. unmittelbar vor der technischen Änderung.'],['Z_t,Z_{vor},Z_{nach}','Indexzähler: z. B. Kurssumme oder angepasste Marktkapitalisierung.'],
   ['d_t,d_{alt},d_{neu}','Divisor zur Zeit t, vor und nach der Anpassung.']
  ]),
  X('Ein Split darf keinen Verlust vortäuschen','Preisindex aus zwei Aktien: A kostet 40, B 60. Divisor 2; Indexniveau 50. B führt ohne wirtschaftliche Wertänderung einen 3:1-Split durch und kostet danach 20.',[
   'Die Kurssumme fällt rein mechanisch von 100 auf 60. Der alte Divisor würde ein Niveau von 30 anzeigen, also einen erfundenen Verlust von 40 %.',
   F('d_{neu}=\\frac{40+20}{50}=1{,}2,\\qquad I_{nach}=\\frac{60}{1{,}2}=50','Der neue Divisor erhält das bisherige Niveau, obwohl die Stückpreise anders skaliert sind.',[['d_{neu}','Angepasster Divisor.'],['I_{nach}','Indexniveau unmittelbar nach dem Split.']]),
   'Steigen danach beide Kurse um 10 % auf 44 und 22, beträgt das Indexniveau 66/1,2 = 55. Die echte anschließende Marktbewegung von 10 % bleibt sichtbar.'
  ],'Bei einem kapitalisierungsgewichteten Index verdreifacht sich beim einfachen 3:1-Split die Aktienzahl, während sich der Preis drittelt. Der Marktwert bleibt gleich; allein dieser Split benötigt dort keine Divisorkorrektur.'),
  'Ein neuer Indexbestandteil kann den Marktwertzähler dagegen ohne Kursgewinn erhöhen. Bei einem bisherigen Zähler von 1.000 und Divisor 10 liegt der Index bei 100. Steigt der Zähler durch einen neutral einzubauenden Mitgliederwechsel netto auf 1.200, wird der Divisor 12. Der Einbau selbst liefert dann keine Rendite. Die konkrete Behandlung von Bezugsrechten, Sonderdividenden oder Abspaltungen hängt von der dokumentierten Indexmethodik ab.'
 ]),
 S('total-return','8. Ausschüttungen und ein fairer Leistungsvergleich','b',[
  'Ein Price Return Index verfolgt Kursveränderungen. Ein Total Return Index berücksichtigt zusätzlich die Wiederanlage der relevanten Ausschüttungen. Gross und Net Total Return unterscheiden sich durch die angenommene Steuerbehandlung; reale Anleger können wiederum andere Steuersätze oder Rückforderungsmöglichkeiten besitzen.',
  F('R_{price}=\\frac{P_1-P_0}{P_0},\\qquad R_{total}=\\frac{P_1-P_0+D}{P_0}','Für eine Aktie und eine Endzeitausschüttung trennt die Formel Kursgewinn und Gesamtertrag. Über mehrere Ausschüttungszeitpunkte wird nach der Indexmethodik verkettet und reinvestiert.',[
   ['R_{price},R_{total}','Kursrendite und Gesamtrendite derselben Periode.'],['P_0,P_1','Anfangs- und Endkurs je Aktie.'],['D','Ausschüttung je Aktie nach der gewählten Brutto-/Nettokonvention.']
  ]),
  X('Der Kurs fällt und das Vermögen bleibt gleich','Eine Aktie kostet vor Ausschüttung 100, zahlt 4 Dividende und steht danach bei 96. Keine sonstige Marktbewegung oder Steuer.',[
   'Der Kursindex zeigt −4 %. Der Anleger besitzt jedoch eine Aktie im Wert von 96 und Cash von 4.',
   F('R_{total}=\\frac{96-100+4}{100}=0','Der Vermögenstransfer von der Gesellschaft zum Aktionär ist hier kein Verlust des gesamten Anlegervermögens.',[['R_{total}','Gesamtrendite einschließlich Dividende.']]),
   'Ein Fonds mit einbehaltenen oder reinvestierten Ausschüttungen darf deshalb nicht unkommentiert mit einem Kursindex verglichen werden. Sonst wird ein Teil seiner vermeintlichen Überrendite nur durch eine ungleiche Ertragsdefinition erzeugt.'
  ],'Aus derselben Aktie können gleichzeitig eine negative Kursrendite und eine unveränderte Gesamtrendite entstehen.'),
  'Ein sinnvoller Benchmark sollte zum Anlageauftrag passen, vorab festgelegt und nachvollziehbar sein. Region, Anlageklasse, Währung, Risiko, Wiederanlage, Gebühren und Bewertungszeitpunkt müssen vergleichbar sein. Ein Index enthält gewöhnlich keine tatsächlichen Handelskosten eines konkreten Fonds; eine rechnerische Outperformance gegenüber einem ungeeigneten Vergleich ist kein Beleg für Fähigkeit.',
  'Eine reine Renditedifferenz ist außerdem noch kein risikobereinigtes Alpha. Alpha benötigt ein angegebenes Renditemodell und dessen Risikofaktoren. Die Verbindung zum CAPM und zur Regression zeigt später, warum ein Fonds mit höherem Marktrisiko in einem guten Markt eine höhere Roh-Rendite erzielen kann, ohne positiven modellbereinigten Mehrwert geschaffen zu haben.'
 ])],
 sources:[
  {title:'CFA Institute: Rates and Returns',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/rates-and-returns'},
  {title:'CFA Institute: Security Market Indexes',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/security-market-indexes'},
  {title:'S&P Dow Jones Indices: Index Mathematics Methodology',url:'https://www.spglobal.com/spdji/en/documents/methodologies/methodology-index-math.pdf'},
  {title:'S&P Dow Jones Indices: Methodology Matters',url:'https://www.spglobal.com/spdji/en/research-insights/index-literacy/methodology-matters/'}
 ],review:{status:'draft',date:'2026-09-17',note:'Eigene kontrastierende Beispiele; MWR, Indexgewichte und Divisor werden unabhängig geprüft.'}};
