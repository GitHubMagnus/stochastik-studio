const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('sim-'+id,'simulation','quant',pool,los,stem,options,correct,solution,{section});
const eq=(tex,reading,symbol,meaning)=>F(tex,reading,[[symbol,meaning]]);
module.exports=[
 q('01','practice','a','A historical scenario gives returns of −8% for asset A and +3% for B. A 200,000 portfolio has beginning weights 75% and 25%. Its scenario loss is:',[
 ['10,500.','Die Portfoliorendite ist −5,25 %; der Verlust beträgt 200.000 × 0,0525.'],['12,000.','Das ignoriert den positiven Beitrag von B.'],['16,000.','Das legt das gesamte Vermögen in A an.']
 ],0,[eq('L=-200000[0{,}75(-0{,}08)+0{,}25(0{,}03)]=10500','Verlust wird als Anfangswert minus Endwert definiert.','L','Verlustbetrag im angegebenen gemeinsamen Szenario.')],'historical'),
 q('02','practice','a','For a historical simulation of a multi-asset portfolio, independently resampling each asset’s return column would most directly:',[
 ['preserve every historical joint shock.','Die zeitlichen Paare werden gerade aufgetrennt.'],['alter the empirical dependence between assets.','Gemeinsame historische Zeilen müssen für die direkte empirische Abhängigkeit zusammenbleiben.'],['make all simulated returns normal.','Resampling impliziert keine Normalverteilung.']
 ],1,['Ein gezielt unabhängiges Modell kann eine andere Fragestellung untersuchen, darf aber nicht als unveränderte historische gemeinsame Verteilung ausgegeben werden.'],'historical'),
 q('03','practice','a','Five equally weighted scenario losses sorted ascending are −4, −1, 2, 5, and 9. Using the nearest-rank empirical quantile, 80% VaR is:',[
 ['9.','Das ist der größte Verlust und hier das 100-%-Quantil.'],['4.','Das ist der Rang, nicht der zugehörige Verlust.'],['5.','Aufgerundeter Rang 0,8 × 5 = 4; vierter Verlust ist 5.']
 ],2,[eq('VaR_{0{,}8}=L_{(4)}=5','Das Beispiel verwendet ausdrücklich keine Quantilinterpolation.','VaR_{0{,}8},L_{(4)}','80-%-Verlustquantil und vierter sortierter Verlust.')],'tails'),
 q('04','practice','a','Five equally weighted scenario losses are −4, −1, 2, 5, and 9. The average loss in the worst 20% of this empirical distribution is:',[
 ['9.','Der schlechteste Anteil von 20 % besteht genau aus dem größten Verlust.'],['5.','Das ist das 80-%-Nearest-Rank-VaR, nicht der Durchschnitt des schlechtesten Fünftels.'],['2.2.','Das ist der Durchschnitt aller fünf Verluste.']
 ],0,['Expected Shortfall betrachtet die Verlusthöhe im Tail. Bei diesem Beispiel besteht der Tail aus genau einer ungeteilten Szenariomasse.'],'tails'),
 q('05','practice','a','A portfolio contains options with material nonlinear exposure. For large historical factor shocks, an appropriate loss estimate most directly requires:',[
 ['assuming every option has a constant return equal to the underlying.','Eine Option ist ein nichtlinearer Anspruch.'],['revaluing positions under the joint shocked factors using an appropriate pricing model.','Full Revaluation kann Krümmung und weitere Risikofaktoren erfassen.'],['adding each asset’s worst standalone loss regardless of dates and describing it as an observed joint event.','Das konstruiert ein neues Stressszenario statt einer beobachteten gemeinsamen Zeile.']
 ],1,['Auch vollständige Neubewertung hängt von Bewertungsmodell, Zeitfortschritt und berücksichtigten Faktoren ab.'],'historical-limits'),
 q('06','practice','b','An ordinary nonparametric iid bootstrap sample of size n is obtained by:',[
 ['sorting the original n values into a random order without replacement.','Der Mittelwert bliebe bei jeder Wiederholung gleich.'],['generating all values from an assumed normal distribution.','Das wäre ein parametrisches Simulationsmodell.'],['drawing n times with replacement from the original sample.','Einige Fälle können mehrfach vorkommen, andere fehlen.']
 ],2,['Die empirische Originalverteilung übernimmt die Rolle der unbekannten Population. Das ist eine Approximation, keine neue Datenerhebung.'],'bootstrap'),
 q('07','practice','b','An observed sample contains −2%, 0%, and 4%. A bootstrap resample is −2%, 4%, and 4%. Its mean is:',[
 ['2.0000%.','(−2 + 4 + 4)/3.'],['0.6667%.','Das ist der Mittelwert der Originalstichprobe.'],['4.0000%.','Das ist hier der Median, nicht das arithmetische Mittel.']
 ],0,[eq('\\bar x^*=(-2+4+4)/3=2\\%','Die wiederholt gezogene 4 bleibt zweimal in der Rechnung.','\\bar x^*','Mittelwert dieses Bootstrap-Resamples.')],'bootstrap'),
 q('08','practice','b','There are three distinct original observations. How many ordered samples of length three can be drawn with replacement?',[
 ['6.','Das zählt Permutationen ohne Wiederholung.'],['27.','Drei Möglichkeiten an jeder der drei Positionen.'],['9.','Das berücksichtigt nur zwei Positionen.']
 ],1,[eq('N=3^3=27','Geordnete Ziehungen haben gleiche Wahrscheinlichkeit; gleiche ungeordnete Zusammensetzungen können mehrfach auftreten.','N','Anzahl möglicher geordneter Bootstrap-Ziehungen.')],'bootstrap'),
 q('09','practice','b','Daily returns display material serial dependence. An ordinary iid resampling of individual days is questionable because it:',[
 ['requires all original returns to be positive.','Das ist keine Bootstrap-Voraussetzung.'],['automatically adds new market history.','Resampling erzeugt keine neuen tatsächlichen Beobachtungen.'],['breaks the temporal dependence that may matter for the statistic.','Ein geeignetes Blockverfahren kann zusammenhängende Abschnitte erhalten.']
 ],2,['Blocklänge und angenommene Prozessstabilität müssen trotzdem begründet werden.'],'bootstrap-uncertainty'),
 q('10','practice','b c','Increasing bootstrap replications from 1,000 to 100,000 while keeping the original sample unchanged primarily:',[
 ['reduces Monte Carlo noise in the estimated bootstrap distribution.','Die Wiederholungsverteilung wird genauer approximiert.'],['eliminates selection bias in the original data.','Die gleiche Auswahlverzerrung wird weiterverwendet.'],['creates 99,000 new independent real-world observations.','Erzeugte Resamples sind keine neue Marktgeschichte.']
 ],0,['Numerische Genauigkeit, Unsicherheit des ursprünglichen Schätzers und Repräsentativität der Daten sind getrennte Ebenen.'],'bootstrap-uncertainty'),
 q('11','practice','c','A geometric Brownian price model has annual arithmetic drift parameter 8% and annual volatility 20%. Its mean one-year log return is:',[
 ['8.00%.','Das ignoriert die halbe Varianzkorrektur.'],['6.00%.','0,08 − 0,20²/2 = 0,06.'],['−2.00%.','Das zieht die halbe Standardabweichung statt der halben Varianz ab.']
 ],1,[eq('m_{log}=0{,}08-\\tfrac12(0{,}20)^2=0{,}06','Die Zeit beträgt ein Jahr; für einen anderen Horizont würde der Driftterm entsprechend skaliert.','m_{log}','Erwartete einjährige Logrendite.')],'price-model'),
 q('12','practice','c','A GBM price starts at 50 with annual drift parameter 4% and volatility 30%. Its expected price in two years is closest to:',[
 ['49.50.','Das entspricht dem Median, der die halbe Varianzkorrektur im Logdrift enthält.'],['54.00.','Das verwendet einfache statt exponentielle Driftakkumulation.'],['54.16.','50 exp(0,04 × 2).']
 ],2,[eq('E[S_2]=50e^{0{,}04\\cdot2}\\approx54{,}1644','Die Volatilitätskorrektur des Logdrifts wird beim arithmetischen Erwartungswert durch die Logvarianz kompensiert.','E[S_2]','Erwarteter Endpreis nach zwei Jahren.')],'price-model'),
 q('13','practice','c','If U₁ and U₂ are independent standard normal variables, Z₁ = U₁ and Z₂ = 0.6U₁ + 0.8U₂ have correlation:',[
 ['0.60.','Kovarianz 0,6 und beide Varianzen eins.'],['0.80.','Das ist der unabhängige Anteil im zweiten Schock.'],['1.40.','Korrelation entsteht nicht durch Addition der Koeffizienten.']
 ],0,[eq('\\operatorname{Var}(Z_2)=0{,}6^2+0{,}8^2=1,\\quad\\operatorname{Cov}(Z_1,Z_2)=0{,}6','Da beide Standardabweichungen eins sind, entspricht die Kovarianz der Korrelation.','Z_1,Z_2','Die beiden konstruierten Standardschocks.')],'dependence'),
 q('14','practice','c','Independent simulated discounted payoffs have sample standard deviation 12. With 3,600 scenarios, the Monte Carlo standard error of the mean is:',[
 ['12.00.','Das ist die Streuung einzelner Payoffs.'],['0.20.','12/√3600 = 0,2.'],['0.0033.','Das dividiert durch die Fallzahl statt durch deren Wurzel.']
 ],1,[eq('\\widehat{SE}_{MC}=12/\\sqrt{3600}=0{,}2','Der Mittelwert ist numerisch präziser als ein einzelner möglicher Zahlungswert.','\\widehat{SE}_{MC}','Monte-Carlo-Standardfehler des Durchschnittswerts.')],'simulation-error'),
 q('15','practice','c','Under otherwise identical independent simulation, reducing Monte Carlo standard error by a factor of three requires the number of scenarios to increase by a factor of:',[
 ['3.','Die Verringerung erfolgt mit der Quadratwurzel der Fallzahl.'],['6.','Das ist keine aus der Standardfehlerformel folgende Skalierung.'],['9.','√9 = 3.']
 ],2,[eq('M_2/M_1=3^2=9','Der Zusammenhang setzt eine unveränderte endliche Szenariovarianz voraus.','M_1,M_2','Alte und neue Szenariozahl.')],'simulation-error'),
 q('16','practice','c','A risk-neutral GBM model for a non-dividend-paying stock uses a constant risk-free rate r as its drift. Its expected discounted terminal stock price is:',[
 ['the current stock price.','exp(−rT) × S₀ exp(rT) = S₀.'],['necessarily greater than the current price because investors demand a risk premium.','Das verwechselt Realwelt-Renditeforderung und risikoneutrales Maß.'],['zero because discounting removes growth.','Diskontieren entfernt den Wachstumsfaktor, nicht den Startwert.']
 ],0,[eq('e^{-rT}E_Q[S_T]=e^{-rT}S_0e^{rT}=S_0','Dies ist eine Konsistenzkontrolle für das angegebene dividendenfreie Modell.','r,T,E_Q,S_T,S_0','Stetiger risikofreier Satz, Horizont, risikoneutrale Erwartung, End- und Startpreis.')],'pricing'),
 q('17','practice','c','For a path-dependent claim, simulation of the terminal asset-price distribution alone is generally insufficient because:',[
 ['terminal prices cannot be simulated.','Sie können simuliert werden, enthalten aber nicht alle Pfadinformationen.'],['different paths with the same terminal price can generate different payoffs.','Durchschnittspreise und Barrieren hängen vom Verlauf ab.'],['every path-dependent payoff is linear in the final price.','Das ist gerade keine allgemeine Eigenschaft.']
 ],1,['Auch die Zeitdiskretisierung kann wichtig sein, etwa bei Barriereüberschreitungen zwischen beobachteten Simulationspunkten.'],'pricing'),
 q('18','practice','a b c','A simulation result is highly stable across repeated runs, but its correlation assumptions are wrong. The appropriate conclusion is:',[
 ['model risk has disappeared.','Numerische Stabilität validiert die Annahmen nicht.'],['the simulated result must match future market outcomes.','Auch ein korrekt gerechnetes Modell kann unpassend sein.'],['numerical precision can coexist with material model error.','Rechenunsicherheit und Modellrisiko sind getrennte Probleme.']
 ],2,['Analytische Kontrollen, wirtschaftliche Plausibilität und Sensitivitätsanalysen ergänzen die Prüfung der Konvergenz.'],'validation'),
 q('a1','mock-a','c','A GBM stock starts at 100 with annual drift parameter 5%, annual volatility 30%, and horizon one year. The median terminal price is closest to:',[
 ['100.50.','100 exp(0,05 − 0,30²/2).'],['105.13.','Das ist der erwartete Preis.'],['95.60.','Das lässt den positiven Drift weg.']
 ],0,[eq('\\operatorname{Median}(S_1)=100e^{0{,}05-0{,}09/2}\\approx100{,}5013','Für den Median wird die mittlere Logrendite exponentiert.','\\operatorname{Median}(S_1)','Median des einjährigen Endpreises.')],'price-model'),
 q('b1','mock-b','a b','To bootstrap the covariance between two assets from paired historical returns, the analyst should ordinarily:',[
 ['resample each asset separately to ensure independent assets.','Das würde die zu schätzende Abhängigkeit verändern.'],['resample entire paired observations together.','Jede gezogene Einheit enthält die zusammengehörigen Renditen beider Anlagen.'],['use only the largest return from each asset.','Das erhält weder die gemeinsame Verteilung noch die Stichprobeninformation.']
 ],1,['Bei serieller Abhängigkeit ist zusätzlich ein geeignetes zeitliches Resampling-Design zu prüfen.'],'bootstrap-uncertainty')
];
