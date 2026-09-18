const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('tv-'+id,'tvm','quant',pool,los,stem,options,correct,solution,{section});
const eq=(tex,reading,symbol,meaning)=>F(tex,reading,[[symbol,meaning]]);
module.exports=[
 q('01','practice','a','A certain payment of 1,331 is due in three years. At a 10% effective annual discount rate, its present value is:',[
 ['1,000.','1.000 × 1,1³ = 1.331.'],['970.30.','Das wäre dreimaliger Abzug von 10 % aus dem Endwert, kein korrektes Abzinsen.'],['1,210.','Das diskontiert nur eine statt drei Perioden.']
 ],0,[eq('PV=1331/1{,}1^3=1000','Jede der drei Perioden wird mit dem Jahresfaktor berücksichtigt.','PV','Heutiger Wert der Zahlung.')],'single-cashflow'),
 q('02','practice','a','An ordinary annuity pays 200 at each year-end for four years. At 5% annually, its present value is closest to:',[
 ['800.00.','Das ist die undiscounted Summe.'],['709.19.','Die vier zeitverschiedenen Zahlungen werden jeweils abgezinst.'],['744.65.','Das entspricht ungefähr einer um ein Jahr vorgezogenen vorschüssigen Rente.']
 ],1,[eq('PV=200\\frac{1-1{,}05^{-4}}{0{,}05}\\approx709{,}19','Die erste Zahlung liegt in einem Jahr.','PV','Barwert der nachschüssigen Rente.')],'annuities'),
 q('03','practice','a','Three payments of 100 occur at times 0, 1, and 2 years. At an 8% effective annual rate, their present value at time 0 is closest to:',[
 ['257.71.','Das wäre der Wert bei Zahlungen in 1, 2 und 3 Jahren.'],['300.00.','Das ignoriert den Zeitwert.'],['278.33.','Die erste Zahlung wird nicht diskontiert; die anderen um ein bzw. zwei Jahre.']
 ],2,[eq('PV=100+100/1{,}08+100/1{,}08^2\\approx278{,}33','Die Folge ist vorschüssig.','PV','Wert der drei Zahlungen heute.')],'annuities'),
 q('04','practice','a','A perpetuity pays 6 per year, starting one year from now. The appropriate annual discount rate is 8%. Its present value is:',[
 ['75.','6/0,08 = 75.'],['81.','Das würde zusätzlich eine sofortige Zahlung von 6 enthalten.'],['0.48.','Das multipliziert Zahlung und Zins, statt die ewige Reihe zu bewerten.']
 ],0,[eq('PV=6/0{,}08=75','Die konstante ewige Rente ist der Wachstumsfall g = 0.','PV','Heutiger Wert der ewigen Rente.')],'growing-cashflows'),
 q('05','practice','a','A stock has just paid a dividend of 1.50. Dividends are expected to grow perpetually at 4%, and the required annual return is 9%. Its constant-growth value is:',[
 ['30.00.','Das verwendet die bereits gezahlte Dividende im Zähler.'],['31.20.','Die nächste Dividende beträgt 1,56; geteilt durch 5 % ergibt sie 31,20.'],['17.33.','Das ignoriert das fortgesetzte Wachstum im Nenner.']
 ],1,[eq('P_0=1{,}50\\cdot1{,}04/(0{,}09-0{,}04)=31{,}20','Die nächste noch zustehende Dividende wird verwendet.','P_0','Modellwert je Aktie heute.')],'growing-cashflows'),
 q('06','practice','b','The next annual dividend is 3, the share price is 50, and dividends are expected to grow perpetually at 4%. The implied required return is:',[
 ['6%.','Das ist nur die nächste Dividendenrendite.'],['4%.','Das ist nur die Wachstumsrate.'],['10%.','3/50 + 4 % = 10 %.']
 ],2,[eq('r=3/50+0{,}04=10\\%','Die umgestellte Bewertung zerlegt die Rendite in Dividendenrendite und Wachstum.','r','Implizite jährliche Eigenkapitalrendite.')],'implied'),
 q('07','practice','b','A stock price is 55, the dividend just paid is 2, and the required return is 8%. Under constant dividend growth, the implied growth rate is closest to:',[
 ['4.21%.','(55 × 0,08 − 2)/(55 + 2) ≈ 4,2105 %.'],['4.36%.','Das behandelt die gerade gezahlte Dividende fälschlich als nächste Dividende.'],['3.64%.','Das ist D₀/P und keine Wachstumsrate.']
 ],0,[eq('g=\\frac{55\\cdot0{,}08-2}{55+2}\\approx4{,}2105\\%','D₁ hängt selbst vom gesuchten Wachstum ab.','g','Konstantes jährliches Dividendenwachstum.')],'implied'),
 q('08','practice','a','Expected dividends are 1.80 in year one and 2.00 in year two, followed by 3% perpetual growth from year three. At an 8% required return, the current value is closest to:',[
 ['37.31.','Das diskontiert einen Teil der Zahlungen zum falschen Zeitpunkt.'],['38.70.','Der Endwert in Jahr 2 ist 2,06/0,05 = 41,20.'],['41.20.','Das ist der Endwert in Jahr 2, noch nicht der Gesamtwert heute.']
 ],1,[eq('P_0=1{,}80/1{,}08+(2+2{,}06/0{,}05)/1{,}08^2\\approx38{,}70','Die zweite Dividende und der anschließende Fortführungswert stehen beide am Ende von Jahr 2.','P_0','Heutiger Aktienwert.')],'terminal-value'),
 q('09','practice','a','A bond pays annual coupons of 6 and returns principal of 100 in two years. At an annual yield of 5%, its price on a coupon date is closest to:',[
 ['100.00.','Par wäre bei Kuponrate gleich Yield passend.'],['95.24.','Das diskontiert weder die Kupons noch die Restlaufzeit korrekt.'],['101.86.','6/1,05 + 106/1,05² ≈ 101,8594.']
 ],2,[eq('P=6/1{,}05+106/1{,}05^2\\approx101{,}86','Der Kupon übersteigt die geforderte Rendite; deshalb liegt der Preis über Par.','P','Anleihepreis heute.')],'bonds'),
 q('10','practice','b','A default-free zero-coupon bond costs 81 and pays 100 in two years. Its effective annual yield is closest to:',[
 ['11.11%.','√(100/81) − 1 = 11,111… %.'],['23.46%.','Das ist die gesamte Zweijahresrendite.'],['9.50%.','Das verwendet weder das Anfangskapital noch den Zinseszins korrekt.']
 ],0,[eq('y=\\sqrt{100/81}-1\\approx11{,}1111\\%','Der Zweijahresfaktor wird in zwei gleiche Jahresfaktoren zerlegt.','y','Effektive jährliche Yield.')],'implied'),
 q('11','practice','c','The one-year and two-year effective annual spot rates are 3% and 4%, respectively. The one-year forward rate starting one year from now is closest to:',[
 ['5.00%.','Das ist nur die lineare Näherung.'],['5.01%.','1,04²/1,03 − 1 ≈ 5,0097 %.'],['1.00%.','Die bloße Zinsdifferenz ersetzt keine Forwardrechnung.']
 ],1,[eq('f_{1,2}=1{,}04^2/1{,}03-1\\approx5{,}0097\\%','Zwei äquivalente Anlagewege müssen denselben Endfaktor liefern.','f_{1,2}','Impliziter Zins des zweiten Jahres.')],'forwards'),
 q('12','practice','c','The spot rate is 1.25 units of domestic currency per foreign unit. One-year domestic and foreign risk-free rates are 4% and 2%. Under covered interest parity, the one-year forward rate is closest to:',[
 ['1.2260.','Das vertauscht den Zinsbruch.'],['1.2750.','Das ist eine lineare Näherung.'],['1.2745.','1,25 × 1,04/1,02 ≈ 1,27451.']
 ],2,[eq('F=1{,}25\\cdot1{,}04/1{,}02\\approx1{,}27451','Die Notation ist Heimatwährung je Fremdwährung, daher steht der Heimatzins im Zähler.','F','Einjähriger Terminkurs in der gegebenen Notation.')],'fx-forward'),
 q('13','practice','c','In a one-period model, a stock costs 50 and ends at either 60 or 40. A European call has strike 50, and the period risk-free rate is 4%. With frictionless trading and no dividends, its no-arbitrage value is closest to:',[
 ['5.77.','Eine halbe Aktie minus Barwert einer Schuld von 20 repliziert den Call.'],['5.00.','Das entspricht einer unbegründeten einfachen Hälfte des oberen Payoffs ohne korrekte Finanzierung.'],['10.00.','Das ist nur der obere Endpayoff.']
 ],0,[F('\\Delta=(10-0)/(60-40)=0{,}5,\\qquad C_0=0{,}5\\cdot50-20/1{,}04\\approx5{,}7692','Die Endwerte des Portfolios sind 30 − 20 = 10 oder 20 − 20 = 0.',[['\\Delta','Replizierende Aktienzahl.'],['C_0','Heutiger Callwert.']])],'option-replication'),
 q('14','practice','c','In a binomial model, the calculated risk-neutral up-state weight is 0.60. This value:',[
 ['must be the analyst’s actual forecast probability.','Bewertungsgewicht und tatsächliche Wahrscheinlichkeit sind verschieden.'],['is a pricing weight consistent with replication, not necessarily a real-world probability estimate.','Es wird aus Preisen und sicherer Finanzierung abgeleitet.'],['guarantees that exactly 60% of future observations will be up states.','Das Modellgewicht liefert keine solche Häufigkeitsgarantie.']
 ],1,['Risikoneutrale Bewertung schreibt die Replikation in Form einer abgezinsten gewichteten Zahlung um.'],'option-replication'),
 q('15','practice','c','A claim pays 50 in year one and 100 in year two. Matching default-free discount factors are 0.96 and 0.91. If the claim trades at 142, and exact replication and shorting are frictionless, the initial arbitrage profit per claim is:',[
 ['0.','Die gegebenen Preise sind nicht konsistent.'],['139.','Das ist der Replikationspreis, nicht der Preisunterschied.'],['3.','Der Claim wird für 142 verkauft und für 139 nachgebaut.']
 ],2,[eq('V=50\\cdot0{,}96+100\\cdot0{,}91=139','Die zukünftigen Zahlungen der gekauften Replikation decken die Shortverpflichtung exakt.','V','Kosten des replizierenden Zahlungsprofils.'),'Heute verbleiben 142 − 139 = 3; die späteren Nettozahlungen sind null.'],'additivity'),
 q('16','practice','a','Four annual payments start at 10 in one year and grow at 5% annually. The discount rate is also 5%. The present value is closest to:',[
 ['38.10.','Jede diskontierte Zahlung beträgt 10/1,05; viermal ergibt rund 38,095.'],['40.00.','Das vergisst die eine Periode bis zur ersten Zahlung.'],['Infinite.','Nur die geschlossene r−g-Schreibweise ist hier unbrauchbar; die endliche Summe bleibt endlich.']
 ],0,[eq('PV=4\\cdot10/1{,}05\\approx38{,}0952','Bei gleichem Wachstum und Diskontsatz hebt sich das Wachstum nach der ersten Zahlung im Barwert weg.','PV','Heutiger Wert der endlichen Zahlungsfolge.')],'growing-cashflows'),
 q('17','practice','a b','A BA II Plus calculation uses P/Y = C/Y = 1 and treats each input period as one half-year. To represent an 8% nominal annual yield compounded semiannually, I/Y should be entered as:',[
 ['0.04.','I/Y erwartet einen Prozentwert; dies wäre 0,04 % pro modellierter Periode.'],['4.','Der Halbjahreszins beträgt 4 %, eingegeben als Zahl 4.'],['8.','Das wäre in der gewählten manuellen Periodisierung 8 % je Halbjahr.']
 ],1,['Bei P/Y = 1 wird die manuell gewählte Periode konsistent behandelt. N und PMT müssen ebenfalls auf Halbjahre bezogen werden.'],'calculator'),
 q('18','practice','a b','For an investor buying a conventional bond using a financial calculator, future coupons and principal are entered as positive cash flows. The purchase price should normally be entered as:',[
 ['positive as well, because all prices are positive.','Das verwechselt Marktpreis mit Cashflowrichtung.'],['zero to avoid a sign error.','Dann würde die Anschaffungsausgabe fehlen.'],['negative, because it is an initial cash outflow.','Gegenüber den späteren Einnahmen ist der Kauf eine Ausgabe.']
 ],2,['Der Vorzeichenwechsel beschreibt die Perspektive des Anlegers. Ein negativer PV im Rechner ist kein negativer Marktwert.'],'calculator'),
 q('19','practice','b','A coupon bond’s yield to maturity is calculated from promised cash flows and its current price. It equals an investor’s realized annual compound return only when the relevant assumptions about payments, holding horizon, and reinvestment are satisfied. This statement is:',[
 ['correct.','Die mathematische Yield allein legt spätere Wiederanlage und tatsächliche Zahlungen nicht fest.'],['incorrect because YTM always guarantees the realized return.','Das würde Ausfall und Wiederanlagerisiko ignorieren.'],['incorrect because coupons are excluded from YTM.','Kupons gehören gerade zur YTM-Gleichung.']
 ],0,['Preisgleichung und tatsächlich realisierter Anlagepfad sind verschiedene Dinge.'],'implied'),
 q('20','practice','c','Two claims have the same expected payoff but different payoffs across states. Cash flow additivity alone:',[
 ['guarantees they have the same price.','Gleiche Erwartung bedeutet keine identische Risikoverteilung.'],['does not establish exact replication or equal no-arbitrage value.','Zustandsabhängige Zahlungen müssen übereinstimmen.'],['makes all state-dependent claims risk-free.','Additivität beseitigt keine Zustandsunsicherheit.']
 ],1,['Für die Replikationsargumentation werden vollständige Zahlungsprofile verglichen, nicht nur deren Mittelwerte.'],'additivity'),
 q('a1','mock-a','a','A default-free zero-coupon claim pays 100 in three years. At a 7.5% effective annual discount rate, its value is closest to:',[
 ['77.50.','Das zieht dreimal 7,5 % des Nennwerts linear ab.'],['80.50.','100/1,075³ ≈ 80,4961.'],['93.02.','Das diskontiert nur eine Periode.']
 ],1,[eq('P_0=100/1{,}075^3\\approx80{,}4961','Alle drei jährlichen Wachstumsfaktoren stehen im Nenner.','P_0','Heutiger Wert.')],'single-cashflow'),
 q('a2','mock-a','b','A share costs 80 and has just paid a dividend of 3. The required annual return is 10%. In the constant-growth dividend model, implied perpetual growth is closest to:',[
 ['6.25%.','Das setzt D₀ fälschlich als unabhängig gegebene D₁ ein.'],['3.75%.','Das ist die gerade gezahlte Dividende relativ zum Preis.'],['6.02%.','(8 − 3)/(80 + 3) ≈ 6,0241 %.']
 ],2,[eq('g=(80\\cdot0{,}10-3)/(80+3)\\approx6{,}0241\\%','Die nächste Dividende wächst selbst mit dem gesuchten g.','g','Implizite dauerhafte Wachstumsrate.')],'implied'),
 q('a3','mock-a','c','A stock costs 80 and will be either 100 or 60 in one period. A call has strike 80, the risk-free period rate is 5%, and there are no dividends or trading frictions. The replicated call value is closest to:',[
 ['11.43.','0,5 × 80 − 30/1,05 ≈ 11,4286.'],['10.00.','Das ignoriert den korrekten Barwert der Finanzierung.'],['20.00.','Das ist der obere Endpayoff, nicht der heutige Preis.']
 ],0,[F('\\Delta=20/40=0{,}5,\\qquad C_0=40-30/1{,}05\\approx11{,}4286','Eine halbe Aktie abzüglich einer endfälligen Schuld von 30 erzeugt die Payoffs 20 und 0.',[['\\Delta','Replizierende Aktienzahl.'],['C_0','Heutiger Callwert.']])],'option-replication'),
 q('b1','mock-b','a','A two-year bond with face value 100 pays an 8% annual coupon semiannually. Its nominal annual yield is 6%, compounded semiannually. On a coupon date, its price is closest to:',[
 ['100.00.','Kupon und Yield sind nicht gleich.'],['103.72.','Vier Kupons von 4 werden mit 3 % je Halbjahr diskontiert.'],['107.09.','Dieser Wert verwendet nicht die angegebenen vier Halbjahresperioden.']
 ],1,[eq('P=4\\frac{1-1{,}03^{-4}}{0{,}03}+100\\cdot1{,}03^{-4}\\approx103{,}7171','Kupon pro Periode 4, Periodenzins 3 %, vier Perioden.','P','Anleihepreis heute.')],'bonds'),
 q('b2','mock-b','c','The spot exchange rate is 1.20 domestic units per foreign unit. One-year risk-free rates are 2% domestic and 5% foreign. The covered no-arbitrage one-year forward rate is closest to:',[
 ['1.2353.','Das kehrt den vorgegebenen Währungszinsbruch um.'],['1.1640.','Das ist eine lineare Näherung.'],['1.1657.','1,20 × 1,02/1,05 ≈ 1,16571.']
 ],2,[eq('F=1{,}20\\cdot1{,}02/1{,}05\\approx1{,}16571','Die stärker verzinste Fremdwährung wird in dieser Quotierung mit Terminabschlag ausgeglichen.','F','Terminkurs in Heimatwährung je Fremdwährung.')],'fx-forward'),
 q('b3','mock-b','c','An implied forward interest rate is derived from current spot rates under no-arbitrage assumptions. It is best interpreted as:',[
 ['a rate consistent with current prices, not necessarily an unbiased forecast of the future spot rate.','Die Preisbeziehung ist von einer Erwartungshypothese zu trennen.'],['a guaranteed forecast of the rate available in the future spot market.','Ein heutiger Forwardpreis garantiert keine spätere Kassamarktnotierung.'],['the arithmetic difference between any two quoted yields.','Laufzeiten und Wachstumsfaktoren sind zu berücksichtigen.']
 ],0,['Replikation begründet einen heute konsistenten Preis. Eine Prognose benötigt zusätzliche ökonomische Annahmen.'],'forwards')
];
