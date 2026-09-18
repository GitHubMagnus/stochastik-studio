const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('bm-'+id,'benchmarks','quant',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a','A portfolio begins a quarter at 200 and ends at 270 after an external contribution of 50 made immediately at quarter-end. No other external cash flows occur. The quarterly return is:',[
  ['8%','Dieser Wert behandelt die Endzeiteinzahlung fälschlich wie Anfangskapital: 20/250.'],
  ['10%','Der bereinigte Schlusswert beträgt 220, also 20 Gewinn auf 200 Anfangskapital.'],
  ['35%','Dieser Wert zählt die externe Einzahlung als Anlagegewinn.']
 ],1,[F('r=\\frac{270-50}{200}-1=10\\%','Die Einzahlung hat während der Quartalsperiode keine Rendite verdient.',[['r','Quartalsrendite des Portfolios.']])],'cashflow-timing'),
 q('02','practice','a','A portfolio starts at 100, grows to 130 in year 1, then receives a contribution of 70. It ends year 2 at 180. The cumulative two-year time-weighted return is:',[
  ['10%','Dies ist der arithmetische Durchschnitt von 30 % und −10 %, keine zweijährige Gesamtrendite.'],
  ['17%','Die Wachstumsfaktoren 1,30 und 0,90 werden verkettet.'],
  ['20%','Dieser Wert addiert die Teilrenditen und lässt den Verkettungseffekt weg.']
 ],1,[F('R=\\frac{130}{100}\\frac{180}{130+70}-1=17\\%','Die zweite Phase beginnt erst nach der Einzahlung bei 200.',[['R','Kumulative TWR über beide Jahre.']])],'time-weighted'),
 q('03','practice','a','An investor contributes 100 at time 0 and 100 at the end of year 1. The portfolio is liquidated for 231 at the end of year 2. The annual money-weighted return is:',[
  ['5.0%','Bei 5 % ergäbe die Aufzinsung nur 110,25 + 105 = 215,25.'],
  ['10.0%','100 × 1,10² + 100 × 1,10 ergibt 231.'],
  ['15.5%','Dieser Wert ist Geldgewinn geteilt durch die Summe der Beiträge und ignoriert deren Anlagezeit.']
 ],1,[F('100(1+r)^2+100(1+r)=231,\\qquad r=10\\%','Beide Beiträge werden über ihre tatsächliche Anlagedauer auf den Endzeitpunkt gebracht.',[['r','Jährlicher interner Zinsfuß.']])],'money-weighted'),
 q('04','practice','a','A manager does not control client deposits or withdrawals. Which measure is generally most appropriate for comparing the manager’s investment performance with a benchmark independently of client-controlled cash-flow amounts?',[
  ['Time-weighted return.','Die Verkettung neutralisiert den direkten Größeneffekt der externen Kundenzahlungen.'],
  ['Money-weighted return in all circumstances.','MWR enthält gerade den Einfluss von Höhe und Zeitpunkt des eingesetzten Kapitals.'],
  ['Change in account value divided by the initial value without cash-flow adjustments.','Eine Einzahlung würde dadurch als Erfolg des Managers erscheinen.']
 ],0,['Der Manager soll für die Wertentwicklung der verwalteten Anlagen beurteilt werden. Die persönliche Anlegererfahrung kann zusätzlich mit MWR beschrieben werden; das ist eine andere Fragestellung.'],'time-weighted'),
 q('05','practice','a','Two annual subperiod returns are +15% and −5%. A large external contribution is made between the years. Compared with reversing the order of the two returns while keeping the contribution unchanged, which statement is most accurate?',[
  ['Both the cumulative TWR and investor ending wealth must be identical.','Die TWR bleibt gleich, aber die zweite Rendite wirkt auf unterschiedlich viel beigetragenes Kapital.'],
  ['The cumulative TWR changes because more money is invested in year 2.','Die Produktverkettung hängt nicht von der Beitragshöhe ab.'],
  ['The cumulative TWR is unchanged, but investor ending wealth can differ.','Multiplikation der Renditefaktoren ist vertauschbar; die externe Zahlung macht den Vermögenspfad zeitabhängig.']
 ],2,['Für anfänglich 100 und weiteren 100 zwischen den Jahren ergeben sich zuerst +15 %, dann −5 %: 204,25. Umgekehrt entstehen 224,25. Beide TWR betragen 1,15 × 0,95 − 1 = 9,25 %.'],'performance-example'),
 q('06','practice','a','A calculated IRR uses one period for each of two consecutive six-month intervals and equals 4% per period. The effective annual rate is closest to:',[
  ['4.00%','Dies ist die Halbjahresrate.'],
  ['8.00%','Dies ist eine einfache Verdoppelung ohne Verzinsung des ersten Halbjahresertrags.'],
  ['8.16%','Zwei Halbjahresfaktoren von 1,04 werden multipliziert.']
 ],2,[F('r_{ann}=1{,}04^2-1=8{,}16\\%','Die CF-Zeitbasis muss vor der Annualisierung festgestellt werden.',[['r_{ann}','Effektive Jahresrendite.']])],'money-weighted'),
 q('07','practice','b','An index holds two stocks. Stock A has a price of 10 and 100 million shares. Stock B has a price of 40 and 10 million shares. In a price-weighted index, the initial weight of Stock B is:',[
  ['28.57%','Dies wäre das Marktkapitalisierungsgewicht: 400/(1.000 + 400).'],
  ['50.00%','Dies wäre Gleichgewichtung.'],
  ['80.00%','40/(10 + 40) ergibt das Preisgewicht.']
 ],2,[F('w_B^P=\\frac{40}{10+40}=80\\%','Für diese Gewichtung geht die Aktienzahl nicht in den Zähler ein.',[['w_B^P','Preisgewicht von B.']])],'index-weights'),
 q('08','practice','b','A three-stock price-weighted index has prices of 20, 50, and 80 and a divisor of 3. The third stock undergoes a 2-for-1 split with no market movement. The new divisor is:',[
  ['2.2','Die neue Kurssumme 110 muss weiterhin das Indexniveau 50 ergeben.'],
  ['3.0','Der unveränderte Divisor würde einen künstlichen Indexrückgang anzeigen.'],
  ['4.4','Dieser Wert verdoppelt den bereits korrekt angepassten Divisor nochmals.']
 ],0,[F('I_{vor}=\\frac{150}{3}=50,\\qquad d_{neu}=\\frac{20+50+40}{50}=2{,}2','Der Divisor stellt Kontinuität her; er ist nach Anpassungen nicht zwingend die Titelanzahl.',[['I_{vor}','Indexniveau vor dem Split.'],['d_{neu}','Neuer Divisor.']])],'divisor'),
 q('09','practice','b','Stock A has a market capitalization of 300 and a free-float factor of 0.4. Stock B has a market capitalization of 200 and a free-float factor of 0.9. Stock A’s float-adjusted index weight is:',[
  ['40%','Investierbare Marktwerte sind 120 und 180; A hat 120/300.'],
  ['60%','Dies ist A’s unbereinigtes Kapitalisierungsgewicht.'],
  ['66.67%','Dieser Wert teilt A’s investierbaren Wert durch denjenigen von B statt durch die Summe.']
 ],0,[F('w_A=\\frac{300\\cdot0{,}4}{300\\cdot0{,}4+200\\cdot0{,}9}=40\\%','Der Free-Float-Faktor muss auf jede Titelkapitalisierung vor der Normalisierung angewendet werden.',[['w_A','Float-adjustiertes Gewicht von A.']])],'index-weights'),
 q('10','practice','b','An equal-weighted two-stock index begins with 50 invested in each stock. One stock gains 20% and the other is unchanged. Immediately before rebalancing, the weight of the first stock is closest to:',[
  ['50.00%','Gleichgewichtet beschreibt die gesetzten Zielgewichte, nicht automatisch die Gewichte nach Kursbewegungen.'],
  ['54.55%','Die Positionen sind 60 und 50 wert; 60/110 = 54,55 %.'],
  ['60.00%','Dieser Wert bezieht die gewachsene Position auf den alten statt den neuen Gesamtwert.']
 ],1,[F('w_{1,end}=\\frac{50\\cdot1{,}2}{50\\cdot1{,}2+50}=54{,}545\\%','Um wieder 50/50 zu erreichen, muss relativ Gewinner verkauft und der andere Titel gekauft werden.',[['w_{1,end}','Gewicht des ersten Titels vor Rücksetzung.']])],'index-weights'),
 q('11','practice','b','A stock begins at 50, pays a dividend of 2 at period-end, and ends at 49. Ignoring taxes and fees, its total return is:',[
  ['−2%','Dieser Wert berücksichtigt nur die Kursänderung.'],
  ['2%','−1 Kursänderung plus 2 Dividende ergibt 1 Gesamtertrag auf 50.'],
  ['4%','Dies ist die Dividendenrendite ohne Kursveränderung.']
 ],1,[F('R=\\frac{49-50+2}{50}=2\\%','Kurs- und Ausschüttungskomponente müssen zusammen berücksichtigt werden.',[['R','Gesamtrendite der Periode.']])],'total-return'),
 q('12','practice','b','An analyst replaces one index constituent with another under a scheduled membership review. This action is most accurately described as:',[
  ['reconstitution.','Die Zusammensetzung der Mitgliedschaft wird geändert.'],
  ['only the reinvestment of dividends.','Eine Dividendenausschüttung verändert nicht auf diese Weise die Mitgliedschaft.'],
  ['a market return that must increase the index level.','Ein Mitgliederwechsel ist kein Marktgewinn; technische Wertänderungen werden neutralisiert.']
 ],0,['Reconstitution und Rebalancing können gleichzeitig stattfinden, beschreiben aber unterschiedliche Entscheidungen. Der erste Begriff betrifft die Titelmenge, der zweite ihre Gewichte.'],'index-weights'),
 q('a1','mock-a','a','A portfolio begins a year at 80. Just before a midyear contribution of 40 it is worth 88. It ends the year at 121.6. No other external flows occur. The time-weighted return for the year is:',[
  ['1.33%','Dieser Quotient verwendet den Geldgewinn 1,6 und die Summe der Beiträge 120 ohne Zeitaufteilung.'],
  ['4.50%','1,10 × 0,95 − 1 = 4,5 %.'],
  ['5.00%','Die Summe von +10 % und −5 % lässt den Verkettungseffekt weg.']
 ],1,[F('R=\\frac{88}{80}\\frac{121{,}6}{128}-1=4{,}5\\%','Die zweite Hälfte beginnt nach dem Beitrag bei 128.',[['R','Zeitgewichtete Jahresrendite.']])],'time-weighted'),
 q('a2','mock-a','b','A capitalization-weighted index has an adjusted market value of 900 and a divisor of 6. A non-market constituent change raises adjusted market value to 960. To maintain continuity, the new divisor is:',[
  ['5.625','Dieser Wert bewegt den Divisor in die falsche Richtung und vergrößert den Sprung.'],
  ['6.000','Hier wird die technische Zähleränderung nicht neutralisiert.'],
  ['6.400','Das Niveau bleibt 150, also muss 960 durch 6,4 geteilt werden.']
 ],2,[F('I=\\frac{900}{6}=150,\\qquad d_{neu}=\\frac{960}{150}=6{,}4','Bei größerem Zähler wird auch der Divisor vergrößert, um das Niveau zu erhalten.',[['I','Unverändertes Indexniveau.'],['d_{neu}','Angepasster Divisor.']])],'divisor'),
 q('b1','mock-b','a','An investor makes a large contribution immediately before a weak-return period. The manager does not control the contribution. All else equal, which statement best explains why the investor’s MWR may be below the portfolio’s annualized TWR?',[
  ['More of the investor’s capital was exposed to the weak period.','MWR berücksichtigt die Geldbeträge, die zu den jeweiligen Zeitpunkten investiert sind.'],
  ['TWR treats the contribution itself as an investment gain.','Korrekt berechnete TWR entfernt gerade den unmittelbaren Beitragseffekt.'],
  ['MWR always exceeds TWR when there are contributions.','Es gibt keine solche allgemeine Rangfolge; das Timing relativ zu den Renditen ist entscheidend.']
 ],0,['Die Reihenfolge guter und schlechter Perioden gewinnt für den Anleger Gewicht, sobald Kapitalbeträge verändert werden. Eine geringere MWR beweist hier für sich allein keine schlechtere Managementleistung.'],'performance-example'),
 q('b2','mock-b','b','A manager’s reinvested-dividend portfolio returns 7%, while a matching price-return index rises 4% and its total-return version rises 6%. Before considering fees and risk, the economically comparable return difference is:',[
  ['1 percentage point.','7 % und 6 % verwenden beide eine Gesamtertragsbasis.'],
  ['3 percentage points.','Hier wird eine Gesamtrendite mit einer Kursrendite verglichen.'],
  ['11 percentage points.','Benchmark- und Portfoliorendite werden nicht addiert.']
 ],0,['Der erste notwendige Abgleich betrifft die Ertragsdefinition. Die verbleibende Differenz von einem Prozentpunkt ist eine vergleichbare Roh-Renditedifferenz; sie ist noch kein modellbereinigtes Alpha.'],'total-return')
];
