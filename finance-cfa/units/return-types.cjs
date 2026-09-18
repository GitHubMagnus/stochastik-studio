const {F,T,X,S,G}=require('../author.cjs');
module.exports={id:'return-types',intro:[
 'Zwei Renditezahlen lassen sich nur vergleichen, wenn sie dieselbe Frage beantworten. Eine einfache Haltedauerrendite, eine nominale Jahresnotierung und eine stetige Rendite können dieselbe Wertentwicklung in unterschiedlichen Konventionen ausdrücken.',
 'Der sichere Rechenweg führt zunächst zum Wachstumsfaktor: Wie viel wird aus einer investierten Einheit? Anschließend wird dieser Faktor auf die gewünschte Zeit- und Zahlungsbasis umgerechnet. So vermeidet man, Prozentwerte mit unterschiedlicher Bedeutung unmittelbar zu vergleichen.'
],sections:[
 S('holding-period','1. Von Preis und Zahlung zum Wachstumsfaktor','a',[
  F('R_H=\\frac{P_1+D_1}{P_0}-1,\\qquad G_H=1+R_H','Bei einer endfälligen Ausschüttung und ohne externe Mittelbewegung beschreibt der Wachstumsfaktor das Endvermögen je investierter Einheit.',[['R_H','Einfache Rendite über die Haltedauer H.'],['G_H','Wachstumsfaktor derselben Haltedauer.'],['P_0,P_1','Anfangs- und Endpreis derselben Anlageeinheit.'],['D_1','Ausschüttung am Ende in derselben Währung.']]),
  X('Kursgewinn plus Einkommen','Ein Anteil kostet 50, wird am Ende für 54 verkauft und zahlt gleichzeitig 1 aus.',[
   F('R_H=\\frac{54+1}{50}-1=10\\%,\\qquad G_H=1{,}10','Aus 50 werden insgesamt 55; je investierter Einheit werden daraus 1,10.',[['R_H','Haltedauerrendite.'],['G_H','Wachstumsfaktor.']]),
   'Die Kurskomponente beträgt 8 %, die laufende Ertragskomponente 2 %. Eine jährliche Rendite liegt erst vor, wenn die Haltedauer ein Jahr beträgt.',
   'Bei derselben Rendite in drei Monaten und in drei Jahren ist der Wachstumsfaktor gleich, aber die Geschwindigkeit des Wachstums verschieden.'
  ],'Erst die Haltedauer verleiht einer Rendite ihre zeitliche Bedeutung.')
 ]),
 S('annualization','2. Annualisierung aus der äquivalenten Jahresentwicklung','a',[
  F('r_{ann}=(1+R_H)^{1/Y}-1,\\qquad R_H=(1+r_{ann})^Y','Eine konstante Jahresrendite soll über Y Jahre genau denselben Gesamtfaktor erzeugen. Voraussetzung ist ein positiver Wachstumsfaktor.',[['r_{ann}','Geometrisch annualisierte effektive Rendite.'],['R_H','Gesamtrendite der beobachteten Haltedauer.'],['Y','Haltedauer in Jahren nach der angegebenen Zeitbasis.']]),
  F('Y=\\frac{d}{B},\\qquad r_{ann}=(1+R_H)^{B/d}-1','Bei einer einfachen Tagesbasis wird die Zahl der gehaltenen Tage durch die vorgegebene Jahresbasis geteilt.',[['Y','Zeit in Jahren.'],['d','Zahl der Tage der Haltedauer.'],['B','Verwendete Tagesbasis, beispielsweise 365.'],['R_H','Haltedauerrendite.'],['r_{ann}','Effektive annualisierte Rendite.']]),
  X('2 % in 90 Tagen','Eine Anlage verdient 2 % in 90 Tagen. Für den Vergleich wird ausdrücklich eine 365-Tage-Basis verwendet.',[
   F('r_{ann}=1{,}02^{365/90}-1\\approx8{,}36\\%','Der Jahresfaktor beruht auf 365/90 hypothetisch gleichen Teilperioden.',[['r_{ann}','Effektive Jahresrendite unter der angegebenen Konvention.']]),
   'Die lineare Rechnung 2 % × 365/90 ergibt rund 8,11 %. Sie ist eine einfache Jahresnotierung ohne Zinseszins, keine identische effektive Jahresrendite.',
   'Die Annualisierung besagt nicht, dass sich das 90-Tage-Ergebnis künftig sicher wiederholen lässt. Gerade extreme kurzfristige Renditen können annualisiert irreführend groß wirken.'
  ],'Die Umrechnung schafft Vergleichbarkeit der Einheit, keine neue Prognosequalität.'),
  'Eine Rendite von −100 % besitzt Wachstumsfaktor null und keinen endlichen Logarithmus. Bei negativen Vermögenswerten oder Renditen unter −100 % sind die üblichen geometrischen Renditeformeln nicht ohne weiteres anwendbar.'
 ]),
 S('compounding','3. Nominale Zinsnotierung und effektive Jahresrendite','a',[
  F('i=\\frac{j^{(m)}}{m},\\qquad EAR=\\left(1+\\frac{j^{(m)}}m\\right)^m-1,\\qquad j^{(m)}=m\\left[(1+EAR)^{1/m}-1\\right]','Eine nominale Jahresnotierung mit m Verzinsungen wird zunächst in den Periodenzins geteilt. Erst die Verkettung aller Perioden ergibt die effektive Jahresrendite.',[['j^{(m)}','Nominaler Jahreszins mit m Verzinsungsperioden; das hochgestellte m bezeichnet die Konvention, keine Potenz.'],['m','Zahl gleich langer Verzinsungsperioden pro Jahr.'],['i','Zinssatz je Verzinsungsperiode.'],['EAR','Effective Annual Rate, effektive Jahresrendite.']]),
  X('Zwei Angebote mit „12 %“','Angebot A bietet 12 % effektiv jährlich. Angebot B nennt 12 % nominal bei monatlicher Verzinsung und Wiederanlage.',[
   'Für B beträgt der monatliche Satz 1 %. Nach zwölf Monaten werden aus 100 genau 100 × 1,01¹².',
   F('EAR_B=1{,}01^{12}-1\\approx12{,}6825\\%','B liefert unter den genannten Annahmen mehr als 12 % effektiv, weil frühere Zinsen ebenfalls verzinst werden.',[['EAR_B','Effektive Jahresrendite von Angebot B.']]),
   'Bei konstant gehaltener effektiver Rendite von 12 % muss die äquivalente monatliche nominale Notierung niedriger sein: rund 11,3866 %. Man darf nicht gleichzeitig nominalen und effektiven Jahreswert unverändert halten.'
  ],'Häufigere Verzinsung erhöht den Endwert bei gleichem positivem nominalem Satz. Bei gleichem effektivem Satz ist der Jahresendwert definitionsgemäß gleich.'),
  T(['Notation','Periodenzins','Wachstumsfaktor über ein Jahr'],[
   ['12 % effektiv jährlich','12 % je Jahr','1,12'],
   ['12 % nominal, halbjährlich','6 % je Halbjahr','1,06² = 1,1236'],
   ['12 % nominal, monatlich','1 % je Monat','1,01¹² ≈ 1,126825']
  ],'Alle Vergleiche unterstellen Wiederanlage ohne Kosten und gleichbleibende Zinssätze.')
 ]),
 S('continuous','4. Stetige Rendite und Logarithmus','a',[
  F('r_c=\\ln(1+R),\\qquad R=e^{r_c}-1','Eine stetige Rendite ist der natürliche Logarithmus des einfachen Wachstumsfaktors derselben Periode.',[['r_c','Stetige bzw. logarithmische Periodenrendite.'],['R','Einfache Periodenrendite; erforderlich ist R größer als −1.'],['\\ln','Natürlicher Logarithmus.'],['e','Eulersche Zahl, Basis der natürlichen Exponentialfunktion.']]),
  F('\\lim_{m\\to\\infty}\\left(1+\\frac{j}{m}\\right)^{mY}=e^{jY}','Wird eine feste nominale Jahresrate immer häufiger verzinst, ergibt sich die stetige Verzinsung als Grenzfall.',[['j','Feste nominale Jahresrate im Grenzübergang.'],['m','Anzahl der Verzinsungen pro Jahr.'],['Y','Zeit in Jahren.'],['e','Eulersche Zahl.']]),
  X('10 % einfach ist nicht 10 % stetig','Ein Vermögen wächst während eines Jahres von 100 auf 110.',[
   F('r_c=\\ln(1{,}10)\\approx0{,}0953102=9{,}5310\\%','Die stetige Darstellung desselben Jahreswachstums ist kleiner als die einfache positive Rendite.',[['r_c','Stetige Jahresrendite.']]),
   'Eine stetige Jahresrate von 10 % würde dagegen einen Faktor e^0,10 und damit rund 10,5171 % einfache Rendite erzeugen.',
   'Der Unterschied entsteht aus der Konvention, nicht aus einer anderen Anlage. Bei kleinen Raten liegen Logrendite und einfache Rendite nahe beieinander.'
  ],'Renditekonvention im Exponenten und angegebene Zeiteinheit müssen zusammenpassen.'),
  F('\\ln\\left[\\prod_{t=1}^{n}(1+R_t)\\right]=\\sum_{t=1}^{n}\\ln(1+R_t)','Logrenditen addieren sich über aufeinanderfolgende Perioden. Einfache Renditen werden über ihre Faktoren multipliziert.',[['R_t','Einfache Rendite in Periode t, jeweils größer als −1.'],['n,t','Zahl der Perioden und Periodenindex.'],['\\ln','Natürlicher Logarithmus.']]),
  'Über gleichzeitig gehaltene Portfolioanlagen gilt dagegen im Allgemeinen keine einfache gewichtete Addition der Logrenditen. Für eine Einperioden-Portfoliorendite werden bei passenden Anfangsgewichten die einfachen Renditen gewichtet; erst danach kann der Logarithmus des Portfoliowachstums genommen werden.'
 ]),
 S('averages','5. Arithmetischer Mittelwert und geometrisches Wachstum','a',[
  F('\\bar R_A=\\frac1n\\sum_{t=1}^{n}R_t,\\qquad \\bar R_G=\\left[\\prod_{t=1}^{n}(1+R_t)\\right]^{1/n}-1','Das arithmetische Mittel beschreibt den Durchschnitt der einzelnen Periodenwerte. Das geometrische Mittel ist die konstante Periodenrendite mit demselben kumulierten Vermögenswachstum.',[['\\bar R_A,\\bar R_G','Arithmetischer bzw. geometrischer Renditemittelwert.'],['R_t','Einfache Rendite der Periode t.'],['n,t','Anzahl gleich langer Perioden und Index.']]),
  X('25 % Gewinn und 20 % Verlust','100 wachsen im ersten Jahr um 25 % und fallen im zweiten um 20 %. Es gibt keine Zahlungen.',[
   F('W_2=100\\cdot1{,}25\\cdot0{,}80=100,\\qquad \\bar R_A=\\frac{25\\%-20\\%}{2}=2{,}5\\%,\\qquad \\bar R_G=\\sqrt{1{,}25\\cdot0{,}80}-1=0','Der Verlust wird auf die größere Basis 125 angewendet und beträgt deshalb ebenfalls 25 Geldeinheiten.',[['W_2','Vermögen am Ende des zweiten Jahres.'],['\\bar R_A,\\bar R_G','Arithmetischer bzw. geometrischer Jahresmittelwert.']]),
   'Der arithmetische Durchschnitt ist nicht falsch; er beantwortet eine andere Frage. Als konstante Wachstumsrate des tatsächlich beobachteten Zweijahrespfads wäre 2,5 % falsch.',
   'Bei ausschließlich positiven Wachstumsfaktoren ist das geometrische Mittel höchstens so groß wie das arithmetische. Gleichheit gilt bei identischen Periodenrenditen.'
  ],'Für rückblickendes Mehrperiodenwachstum die Faktoren verwenden; für eine Einperiodenerwartung das geeignete Wahrscheinlichkeitsmittel.'),
  G({id:'return-sequence',title:'Gleicher Anfang und Schluss trotz positivem arithmetischem Mittel',
   caption:'Die gegebene Folge +25 %, −20 % wird mit einer hypothetischen konstanten Verzinsung von 2,5 % verglichen.',
   reading:'Der arithmetische Mittelwert reproduziert den Endwert nicht. Die Linien verbinden nur Jahresstichtage und sind keine Aussage über den Verlauf innerhalb des Jahres.',
   plot:{x:[0,2],y:[95,130],xTicks:[0,1,2],xLabel:'Jahr',yLabel:'Vermögen (Geldeinheiten)',series:[
    {name:'Beobachteter Pfad',points:[[0,100],[1,125],[2,100]]},
    {name:'Fälschlich als Wachstum verwendete 2,5 %',points:[[0,100],[1,102.5],[2,100*1.025**2]],dash:'8 5'}
   ]}}),
  'Die oft verwendete Näherung „geometrisches Wachstum ≈ arithmetisches Mittel minus halbe Varianz“ ist keine exakte Identität für beliebige Renditefolgen. Hohe Schwankungen und starke Verluste machen einfache Näherungen unzuverlässiger.'
 ]),
 S('harmonic','6. Das harmonische Mittel bei gleichen Geldbeträgen','a',[
  F('\\bar P_H=\\frac{n}{\\sum_{t=1}^{n}1/P_t}=\\frac{nA}{\\sum_{t=1}^{n}A/P_t}','Wer wiederholt denselben Geldbetrag investiert, erwirbt bei niedrigen Preisen mehr Stücke. Gesamtaufwand geteilt durch Gesamtstücke ergibt das harmonische Mittel der positiven Kaufpreise.',[['\\bar P_H','Durchschnittlicher Einstandspreis je erworbener Einheit.'],['P_t','Positiver Kaufpreis je Einheit beim Kauf t.'],['A','Konstanter Geldbetrag je Kauf.'],['n,t','Anzahl der Käufe und Kaufindex.']]),
  X('Gleicher Betrag statt gleicher Stückzahl','Jeweils 120 werden zu Preisen von 20 und 40 investiert. Gebühren sind null.',[
   'Der erste Kauf liefert 6 Stück, der zweite 3 Stück. Insgesamt kosten 9 Stück 240.',
   F('\\bar P_H=\\frac{240}{9}=\\frac2{1/20+1/40}\\approx26{,}67','Der durchschnittliche Einstandspreis liegt unter dem arithmetischen Preismittel 30, weil mehr Stücke zum niedrigeren Preis gekauft wurden.',[['\\bar P_H','Durchschnittlicher Kaufpreis je Stück.']]),
   'Bei je einem gekauften Stück läge der Durchschnitt dagegen bei 30. Die Gewichtungsregel des Kaufplans bestimmt das passende Mittel.',
   'Ein niedrigerer Durchschnitt gegenüber dem ungewichteten Preismittel beweist keinen sicheren Gewinn. Nach beiden Käufen kann der Marktpreis unter 26,67 liegen.'
  ],'Das harmonische Mittel löst eine spezifische Mengen-Geld-Beziehung. Es ist kein allgemeiner Ersatz für eine Portfoliorendite.')
 ]),
 S('fees-taxes','7. Brutto, netto und nach Steuern','a',[
  F('1+R_{net}=(1+R_{gross})(1-f)','Hier wird eine Gebühr am Ende als Anteil des nach Anlageerfolg vorhandenen Vermögens abgezogen. Andere Gebührenbasen oder Zeitpunkte ergeben andere Formeln.',[['R_{net},R_{gross}','Nettorendite nach bzw. Bruttorendite vor der modellierten Gebühr.'],['f','Gebührenquote auf den Endwert vor Gebühr.']]),
  X('Warum 8 % minus 1 % nicht immer exakt 7 % ist','100 verdienen 8 %. Danach wird eine Gebühr von 1 % des dann vorhandenen Vermögens belastet.',[
   'Vor Gebühr sind 108 vorhanden. Die Gebühr beträgt 1,08; übrig bleiben 106,92.',
   F('R_{net}=1{,}08\\cdot0{,}99-1=6{,}92\\%','Die Gebühr belastet auch den im Jahr erzielten Zuwachs.',[['R_{net}','Nettorendite unter der angegebenen Gebührenbasis.']]),
   'Eine Gebühr von 1 % nur auf den Anfangswert hätte 1 gekostet und 7 % netto ergeben. Die Differenz ist eine Vertragsfrage, kein Rundungsfehler.'
  ],'Gebührenbasis, Höhe und Zeitpunkt müssen ausdrücklich gegeben sein.'),
  F('R_{after}=R(1-\\tau),\\qquad R_{real,after}=\\frac{1+R(1-\\tau)}{1+\\pi}-1','Vereinfachtes Modell: der positive nominale Ertrag wird vollständig am Periodenende mit einem einheitlichen Satz besteuert. Verlustverrechnung, Stundung und unterschiedliche Einkunftsarten bleiben außen vor.',[['R','Nominale Rendite vor Steuer.'],['\\tau','Einheitlicher Steuersatz auf den Ertrag.'],['\\pi','Inflation derselben Periode.'],['R_{after}','Nominale Rendite nach Steuer.'],['R_{real,after}','Reale Rendite nach Steuer.']]),
  'Bei 8 % nominal vor Steuer, 25 % Ertragsteuer und 3 % Inflation bleiben nominal 6 % und real rund 2,913 %. Zuerst Inflation abzuziehen und dann den Rest zu besteuern würde in diesem Modell die falsche Steuerbasis verwenden.'
 ]),
 S('leverage','8. Fremdfinanzierung verändert die Eigenkapitalrendite','a',[
  F('R_E=\\frac{AR_A-DR_D}{E}=R_A+\\frac DE(R_A-R_D),\\qquad A=E+D','Bei konstantem Anfangskapital, endfälliger Finanzierung und ohne weitere Kosten fließt dem Eigenkapital der Anlagegewinn abzüglich Finanzierungskosten zu.',[['R_E','Eigenkapitalrendite der Periode.'],['A','Anfangswert der gesamten Anlage.'],['E','Eingesetztes Anfangseigenkapital, hier positiv.'],['D','Anfängliche Fremdfinanzierung.'],['R_A','Rendite der gesamten Anlage.'],['R_D','Finanzierungssatz der Periode.']]),
  X('Derselbe Hebel verstärkt Gewinn und Verlust','Eine Anlage von 150 wird mit 100 Eigenkapital und 50 Kredit finanziert. Der Kredit kostet 4 % für die Periode.',[
   F('R_E^{(+)}=\\frac{150\\cdot0{,}10-50\\cdot0{,}04}{100}=13\\%,\\qquad R_E^{(-)}=\\frac{150\\cdot(-0{,}10)-50\\cdot0{,}04}{100}=-17\\%','Bei +10 % Anlagenrendite beträgt der Gewinn vor Zins 15; bei −10 % ist der Verlust 15. In beiden Fällen kostet der Kredit zusätzlich 2.',[['R_E^{(+)},R_E^{(-)}','Eigenkapitalrenditen im positiven und negativen Anlageszenario.']]),
   'Ohne Kredit wären die Eigenkapitalrenditen +10 % und −10 %. Die Finanzierung verschiebt beide Ergebnisse um die Zinsbelastung und erhöht die Ausschläge.',
   'In realen Portfolios können Nachschusspflichten, Zwangsverkäufe, variable Finanzierung und begrenzte Haftung den einfachen Endzeitvergleich verändern.'
  ],'Leverage erzeugt keine kostenlose Rendite. Der Abstand zwischen Anlagenrendite und Finanzierungssatz bestimmt die Wirkung auf das Eigenkapital.')
 ]),
 S('currency','9. Anlage- und Wechselkursrendite verknüpfen','a',[
  F('1+R_D=(1+R_F)\\frac{S_1}{S_0}=(1+R_F)(1+R_{FX})','S ist hier in Einheiten der Heimatwährung je Einheit Fremdwährung notiert. Eine steigende Notierung bedeutet eine Aufwertung der Fremdwährung.',[['R_D','Rendite in Heimatwährung.'],['R_F','Rendite der Anlage in Fremdwährung.'],['S_0,S_1','Wechselkurs zu Beginn und Ende: Heimatwährung je Fremdwährung.'],['R_{FX}','Rendite der Fremdwährung in Heimatwährung, S₁/S₀ − 1.']]),
  X('Die Aktie steigt, die Fremdwährung fällt','Eine Aktie gewinnt in ihrer lokalen Währung 10 %. Der Preis dieser Währung in Euro fällt gleichzeitig um 5 %. Es gibt keine Absicherung und keine Zwischenzahlungen.',[
   F('R_{EUR}=1{,}10\\cdot0{,}95-1=4{,}5\\%','Ein Anfangseuro wächst zuerst um den lokalen Anlagefaktor, der Endbetrag wird zum veränderten Wechselkurs umgerechnet.',[['R_{EUR}','Rendite aus Euroanlegersicht.']]),
   'Die bloße Summe 10 % − 5 % = 5 % lässt den Kreuzterm von −0,5 Prozentpunkten weg.',
   'Wäre der Wechselkurs umgekehrt notiert, müsste die Umrechnung entsprechend invertiert werden. Ein Pluszeichen beim notierten Kurs bedeutet nicht unabhängig von der Notation immer dasselbe Währungsereignis.'
  ],'Die Kursnotation vor der Rechnung in Worten aussprechen: Welche Währung kostet wie viele Einheiten der anderen?')
 ]),
 S('selection','10. Das passende Maß auswählen','a',[
  T(['Frage','Passendes Grundmaß','Worauf zusätzlich achten?'],[
   ['Wie wuchs das Kapital über mehrere Perioden?','Geometrische Verkettung.','Externe Zahlungen getrennt behandeln.'],
   ['Wie hoch ist der durchschnittliche einzelne Periodenwert?','Arithmetisches Mittel.','Stichprobe ist keine garantierte Zukunftserwartung.'],
   ['Wie lassen sich unterschiedliche Haltedauern vergleichen?','Effektive Annualisierung.','Zeitbasis und Wiederholungsannahme.'],
   ['Was zahlte ich durchschnittlich je Stück bei gleichen Geldraten?','Harmonisches Preismittel.','Kein Ersatz für Geld- oder Zeitgewichtung der Rendite.'],
   ['Welche Kaufkraft bleibt nach Gebühren und Steuer?','Passende Nettorechnung und realer Wachstumsfaktor.','Vertrags- und Steuerannahmen ausdrücklich nennen.'],
   ['Was verdient das fremdfinanzierte Eigenkapital?','Eigenkapitalrendite nach Finanzierungskosten.','Hebel, Nachschuss und Haftungsbedingungen.']
  ],'Ein Maß wird aus der Frage gewählt; die attraktivste Zahl ist kein Auswahlkriterium.'),
  'Vergleiche veröffentlichte Zahlen erst nach Angleichung von Zeitraum, Gebührenbasis, Steuerperspektive und Währung. Der nächste Schritt sind TWR und MWR: Sie lösen das zusätzliche Problem unterschiedlich getimter Anlegerzahlungen.'
 ])],related:[{unit:'returns',section:'purchasing-power',label:'Nominale und reale Größen wirtschaftlich verstehen'},{unit:'benchmarks',section:'performance-example',label:'TWR und MWR am gleichen Zahlungsstrom vergleichen'},{unit:'tvm',section:'calculator',label:'Perioden und Vorzeichen am Finanzrechner eingeben'}],
 sources:[
 {title:'CFA Institute: Rates and Returns',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/rates-and-returns'},
 {title:'OpenStax: TVM Basics',url:'https://openstax.org/books/principles-finance-2e/pages/7-2-time-value-of-money-tvm-basics'}
 ],review:{status:'draft',date:'2026-09-18',note:'Explizite Zeit-, Gebühren-, Steuer- und Währungskonventionen; eigene kontrollierte Vergleiche.'}};
