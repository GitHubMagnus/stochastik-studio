const {Q,F}=require('../author.cjs');
const q=(id,pool,stem,options,correct,solution,section)=>Q('rt-'+id,'return-types','quant',pool,'a',stem,options,correct,solution,{section});
const eq=(tex,reading,symbol,meaning)=>F(tex,reading,[[symbol,meaning]]);
module.exports=[
 q('01','practice','An asset bought for 40 is sold for 43 and pays 1 at the end of the holding period. Its total holding-period return is:',[
 ['10.0%.','Gesamtzufluss 44 relativ zum Einsatz 40 ergibt 10 %.'],['7.5%.','Das ignoriert die Ausschüttung.'],['2.5%.','Das ignoriert den Kursgewinn.']
 ],0,[eq('R_H=(43+1)/40-1=10\\%','Preis und Ausschüttung bilden zusammen den Endzufluss.','R_H','Haltedauerrendite.')],'holding-period'),
 q('02','practice','A six-month investment earns 4%. Treating six months as exactly half a year, the effective annualized return is:',[
 ['8.00%.','Das verdoppelt linear, ohne Zinseszins.'],['8.16%.','Zwei Faktoren von 1,04 ergeben 1,0816.'],['4.00%.','Das lässt die unterschiedliche Zeitbasis unverändert.']
 ],1,[eq('r_{ann}=1{,}04^2-1=8{,}16\\%','Die äquivalente Jahresrendite verkettet zwei Halbjahresfaktoren.','r_{ann}','Effektive Jahresrendite.')],'annualization'),
 q('03','practice','A nominal annual rate of 10% is compounded quarterly. The effective annual rate is closest to:',[
 ['10.00%.','Nominale Notierung und effektive Jahresrate sind bei unterjähriger Verzinsung verschieden.'],['46.41%.','Das verzinst fälschlich 10 % in jedem Quartal.'],['10.38%.','Der Quartalszins beträgt 2,5 %; vier Faktoren werden verknüpft.']
 ],2,[eq('EAR=(1+0{,}10/4)^4-1\\approx10{,}3813\\%','Zuerst durch vier teilen, danach über vier Quartale verzinsen.','EAR','Effektive Jahresrendite.')],'compounding'),
 q('04','practice','An asset has a simple one-year return of 12%. Its continuously compounded return over the same year is closest to:',[
 ['11.33%.','ln(1,12) ≈ 0,113329.'],['12.00%.','Das übernimmt die einfache Rendite ohne Konventionswechsel.'],['12.75%.','Das wäre ungefähr die einfache Rendite zu 12 % stetig.']
 ],0,[eq('r_c=\\ln(1{,}12)\\approx11{,}3329\\%','Der Logarithmus wird auf den Wachstumsfaktor angewendet.','r_c','Stetige Jahresrendite.')],'continuous'),
 q('05','practice','A continuously compounded annual rate is 7%. The equivalent effective annual return is closest to:',[
 ['6.77%.','Das ist ungefähr ln(1,07), also die umgekehrte Umrechnung.'],['7.25%.','e^0,07 − 1 ≈ 7,2508 %.'],['7.00%.','Das lässt den Konventionsunterschied weg.']
 ],1,[eq('R=e^{0{,}07}-1\\approx7{,}2508\\%','Exponentiation liefert den einfachen Jahresfaktor.','R','Effektive einfache Jahresrendite.')],'continuous'),
 q('06','practice','An investment earns 30% in year one and −10% in year two, with no external cash flows. The geometric average annual return is closest to:',[
 ['10.00%.','Das ist das arithmetische Jahresmittel.'],['17.00%.','Das ist die gesamte Zweijahresrendite.'],['8.17%.','Die Quadratwurzel aus 1,3 × 0,9 liefert den jährlichen Wachstumsfaktor.']
 ],2,[eq('\\bar R_G=\\sqrt{1{,}3\\cdot0{,}9}-1\\approx8{,}1665\\%','Zuerst die Faktoren verknüpfen, dann auf zwei gleich lange Jahre verteilen.','\\bar R_G','Geometrische Jahresrendite.')],'averages'),
 q('07','practice','A return series is +30% followed by −10%. Its cumulative return, assuming no cash flows, is:',[
 ['17%.','1,3 × 0,9 − 1 = 17 %.'],['20%.','Das addiert einfache Renditen fälschlich über die Zeit.'],['10%.','Das ist das arithmetische Mittel, keine Gesamtrendite.']
 ],0,[eq('R_{total}=1{,}3\\cdot0{,}9-1=17\\%','Der zweite Prozentwert wirkt auf das nach Jahr 1 vorhandene Vermögen.','R_{total}','Kumulative Zweijahresrendite.')],'averages'),
 q('08','practice','An investor spends 90 at a price of 15 per unit and another 90 at a price of 30 per unit. Ignoring costs, the average purchase price per unit is:',[
 ['22.50.','Das ist das ungewichtete arithmetische Preismittel.'],['20.00.','180 Gesamtaufwand geteilt durch 6 + 3 Stück.'],['25.00.','Dieser Wert folgt weder aus den Stückzahlen noch den Geldbeträgen.']
 ],1,[eq('\\bar P=180/(90/15+90/30)=20','Gleiche Geldbeträge kaufen unterschiedliche Stückzahlen.','\\bar P','Durchschnittlicher Einstandspreis je Einheit.')],'harmonic'),
 q('09','practice','An account earns a gross return of 10%. A fee of 2% is then charged on the ending value before fees. The net return is:',[
 ['8.0%.','Das wäre ein Abzug von 2 % des Anfangswerts.'],['12.2%.','Das addiert die Gebühr als Gewinn.'],['7.8%.','1,10 × 0,98 − 1 = 7,8 %.']
 ],2,[eq('R_{net}=1{,}10\\cdot0{,}98-1=7{,}8\\%','Bei Anfangswert 100 werden 2,20 vom Wert 110 abgezogen.','R_{net}','Rendite nach der angegebenen Endwertgebühr.')],'fees-taxes'),
 q('10','practice','A 10% nominal return is fully taxed at 30% at year-end. Inflation is 4%. Under this simplified tax model, the real after-tax return is closest to:',[
 ['2.88%.','Nominal bleiben 7 %; real 1,07/1,04 − 1.'],['4.20%.','Das besteuert fälschlich erst die um Inflation verminderte nominale Rendite.'],['3.00%.','Das ist nur die Subtraktionsnäherung nach Steuer.']
 ],0,[eq('R_{real,after}=\\frac{1+0{,}10(1-0{,}30)}{1{,}04}-1\\approx2{,}8846\\%','Zuerst die vorgegebene nominale Steuerbasis verwenden, dann die Kaufkraft berechnen.','R_{real,after}','Reale Jahresrendite nach Steuer.')],'fees-taxes'),
 q('11','practice','An investment of 200 is financed by 100 of equity and 100 of debt. Asset return is 8%, and debt costs 5% for the period. Ignoring other costs, the equity return is:',[
 ['3%.','Das ist nur der Renditeabstand, ohne Grundrendite und Gewichtung.'],['11%.','Anlagegewinn 16 minus Zins 5, bezogen auf Eigenkapital 100.'],['16%.','Das lässt die Finanzierungskosten weg.']
 ],1,[eq('R_E=(200\\cdot0{,}08-100\\cdot0{,}05)/100=11\\%','Zins wird vom Anlagegewinn abgezogen; der Nenner ist das Eigenkapital.','R_E','Eigenkapitalrendite.')],'leverage'),
 q('12','practice','A foreign asset loses 4% in its local currency while that currency appreciates 6% in the investor’s home currency. With no intermediate payments or hedge, the home-currency return is:',[
 ['2.00%.','Das ist die einfache Summe und lässt den Kreuzterm weg.'],['−10.00%.','Das behandelt die Aufwertung als zusätzliche Abwertung.'],['1.76%.','0,96 × 1,06 − 1 = 1,76 %.']
 ],2,[eq('R_D=0{,}96\\cdot1{,}06-1=1{,}76\\%','Lokaler Anlage- und Währungsfaktor werden multipliziert.','R_D','Rendite in Heimatwährung.')],'currency'),
 q('13','practice','Investment A earns 2% per quarter and investment B earns 4% per half-year. Assuming reinvestment at unchanged rates, which has the higher effective annual return?',[
 ['A.','1,02⁴ − 1 ≈ 8,2432 % liegt über 1,04² − 1 = 8,16 %.'],['B.','Der größere Teilperiodensatz allein entscheidet nicht.'],['They are equal.','Beide ergeben zwar 8 % einfache Jahresnotierung, aber unterschiedliche effektive Faktoren.']
 ],0,[F('EAR_A=1{,}02^4-1\\approx8{,}2432\\%,\\qquad EAR_B=1{,}04^2-1=8{,}16\\%','Beide Anlagen werden auf denselben Jahreszeitraum und dieselbe effektive Konvention gebracht.',[['EAR_A,EAR_B','Effektive Jahresrenditen der beiden Anlagen.']])],'compounding'),
 q('14','practice','Which statement about log returns is most accurate?',[
 ['They always equal simple returns exactly.','Nur näherungsweise bei kleinen Raten, nicht allgemein.'],['They add across successive periods, but a portfolio log return is not generally a weighted average of asset log returns.','Zeitaggregation und Zusammenfassung gleichzeitig gehaltener Anlagen sind verschiedene Operationen.'],['They remain finite for a complete loss of initial wealth.','ln(0) ist nicht endlich.']
 ],1,['Der Logarithmus macht ein Produkt von Zeitfaktoren zu einer Summe. Er verteilt sich aber nicht über eine gewichtete Summe von Anlagenfaktoren.'],'continuous'),
 q('15','practice','Annualizing a large observed return from a very short holding period:',[
 ['guarantees that the same rate will be earned over the next year.','Die Umrechnung ist keine Zukunftsprognose.'],['removes all risk from the investment.','Eine andere Einheit verändert das Risiko nicht.'],['expresses an equivalent annual growth rate under the stated convention without proving repeatability.','Der Zeitvergleich ist von der Prognose zu trennen.']
 ],2,['Die Extrapolation auf eine Jahreseinheit kann mathematisch richtig und wirtschaftlich nicht wiederholbar sein.'],'annualization'),
 q('16','practice','Which mean reproduces the ending wealth of a sequence of positive growth factors over equally long periods with no external cash flows?',[
 ['The geometric mean return.','Es ist genau als konstante äquivalente Wachstumsrate definiert.'],['The arithmetic mean return in every case.','Bei schwankenden Renditen stimmt dies im Allgemeinen nicht.'],['The harmonic mean of observed security prices in every case.','Das beantwortet einen anderen Kaufpreisvergleich.']
 ],0,['Die Definition der Frage führt zur geometrischen Verkettung; die anderen Mittel haben andere Bezugsgrößen.'],'selection'),
 q('a1','mock-a','A nominal annual deposit rate is 6%, compounded monthly. Its effective annual rate is closest to:',[
 ['6.00%.','Das ist die nominale Notierung.'],['6.17%.','Zwölf Monatsfaktoren von 1,005 ergeben rund 6,1678 %.'],['6.36%.','Das entspricht nicht der angegebenen monatlichen Periodisierung.']
 ],1,[eq('EAR=(1+0{,}06/12)^{12}-1\\approx6{,}1678\\%','Der Monatszins beträgt 0,5 %.','EAR','Effektive Jahresrendite.')],'compounding'),
 q('a2','mock-a','An investor finances assets of 150 with equity of 100 and debt of 50. Assets lose 8% and the debt costs 6% for the period. The equity return is:',[
 ['−8%.','Das ignoriert den Fremdkapitalhebel und seine Kosten.'],['−9%.','Das verwendet nicht die tatsächlichen Gewinne und Finanzierungskosten.'],['−15%.','Anlageverlust 12 plus Zins 3, bezogen auf Eigenkapital 100.']
 ],2,[eq('R_E=(150\\cdot(-0{,}08)-50\\cdot0{,}06)/100=-15\\%','Die Kreditkosten fallen auch im Verlustszenario an.','R_E','Eigenkapitalrendite.')],'leverage'),
 q('b1','mock-b','A portfolio earns 12% before a year-end fee of 2% of its ending value. No other costs or flows occur. Its net return is:',[
 ['9.76%.','1,12 × 0,98 − 1 = 9,76 %.'],['10.00%.','Das würde eine Gebühr auf den Anfangswert unterstellen.'],['14.24%.','Das zählt die Gebühr fälschlich als Zuwachs.']
 ],0,[eq('R_{net}=1{,}12\\cdot0{,}98-1=9{,}76\\%','Der Abzug ist 2 % des nach Rendite vorhandenen Werts.','R_{net}','Nettorendite.')],'fees-taxes'),
 q('b2','mock-b','An unhedged foreign asset earns 8% locally, while the foreign currency depreciates 10% in the investor’s home currency. The home-currency return is:',[
 ['−2.0%.','Die einfache Summe lässt den Kreuzterm weg.'],['−2.8%.','1,08 × 0,90 − 1 = −2,8 %.'],['18.8%.','Das würde eine Aufwertung statt Abwertung unterstellen.']
 ],1,[eq('R_D=1{,}08\\cdot0{,}90-1=-2{,}8\\%','Die lokale Wertsteigerung wird zum schwächeren Wechselkurs umgerechnet.','R_D','Rendite in Heimatwährung.')],'currency')
];
