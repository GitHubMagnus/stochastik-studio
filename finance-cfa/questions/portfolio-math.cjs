const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('pm-'+id,'portfolio-math','quant',pool,los,stem,options,correct,solution,{section});
const eq=(tex,reading,symbol,meaning)=>F(tex,reading,[[symbol,meaning]]);
module.exports=[
 q('01','practice','a','A portfolio begins with 70% invested in A and 30% in B. Over one period A returns 12% and B returns −4%, with no external cash flows. The portfolio return is:',[
 ['4.00%.','Das ist das gleich gewichtete Mittel und ignoriert die Anfangsgewichte.'],['7.20%.','0,7 × 12 % + 0,3 × (−4 %) = 7,2 %.'],['9.60%.','Die negative Rendite von B darf nicht als positiver Beitrag addiert werden.']
 ],1,[eq('R_P=0{,}7\\cdot0{,}12+0{,}3\\cdot(-0{,}04)=7{,}2\\%','Anfangsgewichte beziehen jede Rendite auf ihren ursprünglichen Anteil am Gesamtvermögen.','R_P','Einfache Portfoliorendite.')],'weights'),
 q('02','practice','a','Initially, 40 is invested in A and 60 in B. A gains 25% and B loses 10%. Without rebalancing, the end-of-period weight of A is closest to:',[
 ['40.00%.','Das ist das Anfangsgewicht.'],['50.00%.','50 ist der Endwert von A, aber der Gesamtendwert beträgt 104 statt 100.'],['48.08%.','A endet bei 50 und B bei 54; 50/104 ≈ 48,08 %.']
 ],2,[eq('w_{A,1}=\\frac{40\\cdot1{,}25}{40\\cdot1{,}25+60\\cdot0{,}90}\\approx48{,}077\\%','Die Endgewichte müssen zusammen wieder 100 % ergeben.','w_{A,1}','Gewicht von A am Periodenende.')],'weights'),
 q('03','practice','a','A portfolio holds 40% in A and 60% in B. Their standard deviations are 30% and 10%, and their correlation is zero. Portfolio standard deviation is closest to:',[
 ['13.42%.','√(0,4² × 0,3² + 0,6² × 0,1²) = √0,018.'],['18.00%.','Das ist das gewichtete Volatilitätsmittel und entspräche hier Korrelation +1.'],['1.80%.','0,018 ist die Varianz als Dezimalzahl; die Wurzel fehlt.']
 ],0,[eq('\\sigma_P=\\sqrt{0{,}0144+0{,}0036}\\approx13{,}416\\%','Bei Korrelation null verschwindet das Kreuzglied, nicht die Einzelrisiken.','\\sigma_P','Portfoliostandardabweichung.')],'two-assets'),
 q('04','practice','a','Standard deviations are 18% and 12%, with correlation −0.25. Covariance in decimal-return units equals:',[
 ['−0.0540.','Das enthält einen Dezimalstellenfehler.'],['−0.0054.','−0,25 × 0,18 × 0,12 = −0,0054.'],['−0.2500.','Das ist die Korrelation, nicht die Kovarianz.']
 ],1,[eq('\\sigma_{AB}=-0{,}25\\cdot0{,}18\\cdot0{,}12=-0{,}0054','Die Kovarianz trägt die quadrierte Renditeeinheit.','\\sigma_{AB}','Kovarianz der beiden Renditen.')],'two-assets'),
 q('05','practice','a b','For two risky assets held with strictly positive fixed weights, expected returns and individual volatilities remain unchanged. A decrease in their correlation:',[
 ['reduces expected portfolio return.','Die erwartete Rendite hängt hier nur von Gewichten und Einzelmittelwerten ab.'],['increases portfolio variance.','Das Kreuzglied wird bei positiven Gewichten kleiner.'],['reduces portfolio variance without changing expected portfolio return.','Nur der gemeinsame Risikoterm wird verändert.']
 ],2,['Im Varianzausdruck steht die Korrelation mit Faktor 2wAwBσAσB. Dieser ist unter den genannten Voraussetzungen positiv. Die Renditeformel enthält keine Korrelation.'],'correlation'),
 q('06','practice','a b','A has standard deviation 20% and B has standard deviation 30%. Their correlation is exactly −1. The long-only weight in A that eliminates variance in this model is:',[
 ['60%.','0,6 × 20 % = 0,4 × 30 %, sodass sich die Schwankungen aufheben.'],['40%.','Das vertauscht die Gewichte.'],['50%.','Gleiche Gewichte neutralisieren unterschiedliche Schwankungsgrößen nicht.']
 ],0,[eq('w_A=\\frac{0{,}30}{0{,}20+0{,}30}=0{,}60','Die volatilere Anlage B erhält das kleinere Gewicht.','w_A','Gewicht von A bei exakt verschwindender Portfoliovarianz.')],'correlation'),
 q('07','practice','b','Asset A has variance 0.0225, asset B variance 0.0100, and their covariance is 0.0030. The unconstrained global minimum-variance weight of A is closest to:',[
 ['73.58%.','Das ist das Gewicht von B.'],['26.42%.','(0,0100 − 0,0030)/(0,0225 + 0,0100 − 0,0060).'],['50.00%.','Gleichgewichtung folgt nicht aus Varianzminimierung.']
 ],1,[eq('w_A^{GMV}=0{,}0070/0{,}0265\\approx26{,}415\\%','Die Kovarianz steht im Nenner zweimal, im Zähler einmal.','w_A^{GMV}','Globales Minimumvarianzgewicht von A.')],'minimum-variance'),
 q('08','practice','b','Expected return estimates change while the covariance matrix and feasible weight constraints remain unchanged. The global minimum-variance portfolio:',[
 ['must change because all optimization uses expected returns.','Die reine Varianzminimierung benötigt kein Renditeziel.'],['becomes risk-free.','Geänderte Renditeannahmen beseitigen keine Varianz.'],['has unchanged optimal weights, assuming the same unique variance minimum.','Seine Zielfunktion und Nebenbedingungen sind unverändert.']
 ],2,['Erwartete Renditen verändern die Rendite des Minimumvarianzportfolios und andere renditeabhängige Entscheidungen. Das reine eindeutige Varianzminimum bleibt jedoch gleich.'],'minimum-variance'),
 q('09','practice','b','Two feasible portfolios both have standard deviation 11%. Portfolio X has expected return 6% and Y has expected return 8%. Under mean-variance preferences:',[
 ['Y dominates X.','Bei gleichem Risiko bietet Y mehr erwartete Rendite.'],['X dominates Y because its expected return is lower.','Weniger erwartete Rendite ist bei gleichem Risiko kein Vorteil in diesem Modell.'],['both must lie on the efficient frontier.','X kann wegen der verfügbaren besseren Alternative nicht effizient sein.']
 ],0,['Effizienz ist eine vergleichende Eigenschaft innerhalb des betrachteten Anlageuniversums. Zusätzliche Kriterien außerhalb des Mittelwert-Varianz-Modells können separat relevant sein.'],'efficient-frontier'),
 q('10','practice','a','Portfolio P holds 25% in A and 75% in B. Variance of A is 0.04 and Cov(A,B) is 0.006. Cov(P,A) equals:',[
 ['0.0115.','Das folgt nicht aus der linearen Gewichtung der Kovarianzen.'],['0.0145.','0,25 × 0,04 + 0,75 × 0,006 = 0,0145.'],['0.0460.','Das ignoriert die Portfoliogewichte.']
 ],1,[eq('\\operatorname{Cov}(R_P,R_A)=0{,}25\\cdot0{,}04+0{,}75\\cdot0{,}006=0{,}0145','Die Kovarianz einer Anlage mit sich selbst ist ihre Varianz.','\\operatorname{Cov}(R_P,R_A)','Kovarianz zwischen Portfolio P und Anlage A.')],'many-assets'),
 q('11','practice','a b','Twenty equally weighted assets each have standard deviation 30% and pairwise correlation 0.20. Portfolio standard deviation is closest to:',[
 ['6.71%.','Das würde unabhängige Anlagen unterstellen.'],['30.00%.','Das würde perfekte positive Korrelation unterstellen.'],['14.70%.','√[0,09 × (0,20 + 0,80/20)] ≈ 14,697 %.']
 ],2,[eq('\\sigma_P=\\sqrt{0{,}09(0{,}20+0{,}80/20)}\\approx14{,}697\\%','Ein gemeinsamer Risikoteil bleibt trotz vieler Titel erhalten.','\\sigma_P','Portfoliostandardabweichung.')],'many-assets'),
 q('12','practice','a b','A long-only portfolio adds more assets that all have identical volatility and pairwise correlation +1. The portfolio volatility:',[
 ['remains equal to the common individual volatility.','Die Anlagen schwanken proportional gleich; die Gewichte summieren sich zu eins.'],['falls toward zero as the number grows.','Die bloße Titelzahl erzeugt ohne unterschiedliche Bewegungen keine Risikoverringerung.'],['necessarily doubles.','Bei vollständig investierten positiven Gewichten steigt sie hier auch nicht über die gemeinsame Einzelvolatilität.']
 ],0,['Die Gleichgewichtsformel wird bei ρ = 1 zu σP² = σ², unabhängig von der Zahl der Titel.'],'many-assets'),
 q('13','practice','c','A risky portfolio has expected return 12% and volatility 20%. The risk-free rate is 4%. Investing 60% in the risky portfolio and 40% risk-free gives expected return of:',[
 ['7.20%.','Das vergisst die Verzinsung des sicheren Anteils.'],['8.80%.','0,6 × 12 % + 0,4 × 4 % = 8,8 %.'],['12.00%.','Das wäre die vollständige Anlage im riskanten Portfolio.']
 ],1,[eq('\\mu_C=4\\%+0{,}6(12\\%-4\\%)=8{,}8\\%','Die zugehörige Volatilität beträgt 0,6 × 20 % = 12 %.','\\mu_C','Erwartete Rendite des vollständigen Portfolios.')],'risk-free'),
 q('14','practice','c','An investor has equity of 100, borrows 20 at 6%, and invests 120 in a risky portfolio with expected return 10%. The expected return on equity is:',[
 ['12.0%.','Das ignoriert den Kreditzins.'],['11.2%.','Dieser Wert entspricht nicht den angegebenen Zahlungsbeträgen.'],['10.8%.','Erwarteter Anlagegewinn 12 minus Kreditzins 1,2 ergibt 10,8 auf Eigenkapital 100.']
 ],2,[eq('\\mu_E=1{,}2\\cdot0{,}10-0{,}2\\cdot0{,}06=10{,}8\\%','Die Kreditaufnahme wird mit ihrem tatsächlichen Zinssatz bewertet.','\\mu_E','Erwartete Eigenkapitalrendite.')],'risk-free'),
 q('15','practice','c','A risky portfolio has expected excess return 6% and standard deviation 20%. With utility U = μ − (A/2)σ², decimal returns, and risk aversion A = 3, the unconstrained optimal risky weight is:',[
 ['50%.','0,06/(3 × 0,04) = 0,5.'],['10%.','Das setzt Standardabweichung statt Varianz in den Nenner ein.'],['150%.','Das lässt die Risikoaversion weg.']
 ],0,[eq('y^*=\\frac{0{,}06}{3\\cdot0{,}20^2}=0{,}5','Der verbleibende Anteil von 50 % wird sicher investiert.','y^*','Optimales Gewicht des gegebenen riskanten Portfolios.')],'utility'),
 q('16','practice','c','For a fixed risky portfolio with positive expected excess return, risk aversion doubles from A = 3 to A = 6. With no binding constraints, the optimal risky weight:',[
 ['doubles.','Höhere Risikoaversion verlangt einen geringeren Risikoanteil.'],['halves.','Das Gewicht ist invers proportional zu A.'],['is unchanged.','Die Präferenz beeinflusst den Punkt auf der Kapitalallokationslinie.']
 ],1,['Bei unveränderter Überschussrendite und Varianz verdoppelt sich der Nenner der optimalen Gewichtungsformel. Das riskante Portfolio selbst muss sich dabei nicht ändern.'],'utility'),
 q('17','practice','c','Expected return is 8%, standard deviation is 20%, and risk aversion is A = 3. Using decimal returns in U = μ − (A/2)σ², utility is:',[
 ['−0.22.','Das zieht 1,5 mal Standardabweichung statt Varianz ab.'],['0.06.','Das ist der Risikoabzug, nicht der verbleibende Nutzen.'],['0.02.','0,08 − 1,5 × 0,04 = 0,02.']
 ],2,[eq('U=0{,}08-\\frac32\\cdot0{,}20^2=0{,}02','Der Nutzenindex beträgt 2 % in der gewählten Renditeskalierung; er ist keine sichere Auszahlung.','U','Mittelwert-Varianz-Nutzenindex.')],'utility'),
 q('18','practice','c','An unconstrained calculation gives optimal risky weight 1.50. The investor may hold only this risky portfolio and a risk-free asset, with no borrowing or shorting. The feasible optimum is:',[
 ['1.00.','Das strikt konkave Nutzenmaximum liegt außerhalb; im erlaubten Intervall steigt der Nutzen bis zum Rand 1.'],['1.50.','Das würde 50 % Kreditaufnahme voraussetzen.'],['0.50.','Die Überschreitung wird nicht einfach vom unbeschränkten Gewicht abgezogen, um eine neue innere Lösung zu schaffen.']
 ],0,['Das zulässige Intervall ist 0 bis 1. Liegt das unbeschränkte Maximum rechts davon, ist der rechte Rand die beste zulässige Lösung in diesem Modell.'],'utility'),
 q('19','practice','c','Which statement correctly distinguishes the capital market line from the security market line?',[
 ['Both use beta on the horizontal axis.','Die CML verwendet die Gesamtstandardabweichung.'],['The CML relates efficient portfolio returns to total standard deviation; the SML relates expected return to beta.','Die Linien verwenden unterschiedliche Risikogrößen und Anwendungsbereiche.'],['Every individual stock must lie on the CML.','Eine einzelne Aktie ist im Allgemeinen kein effizientes vollständiges Portfolio.']
 ],1,['Die CML ist eine besondere CAL mit dem Marktportfolio unter den entsprechenden Gleichgewichtsannahmen. Die SML ist die CAPM-Beziehung zum systematischen Risiko.'],'market'),
 q('20','practice','b c','An optimized portfolio lies on an estimated mean-variance efficient frontier. This finding alone:',[
 ['guarantees its future realized return.','Die Grenze basiert auf geschätzten Erwartungen und Kovarianzen.'],['proves suitability for every client.','Ziele, Liquidität, Einschränkungen und Präferenzen müssen zusätzlich passen.'],['does not eliminate estimation error, tail risk, or client-specific constraints.','Modelloptimierung ist ein Teil der Entscheidung, kein vollständiger Eignungsnachweis.']
 ],2,['Eine effiziente Lösung kann durch geänderte Eingaben ihre Position verlieren. Sie kann außerdem Merkmale besitzen, die die beiden betrachteten Momente nicht abbilden.'],'market'),
 q('a1','mock-a','a','A portfolio holds 25% in A and 75% in B. Volatilities are 24% and 12%, and correlation is 0.50. Portfolio standard deviation is closest to:',[
 ['13.08%.','Die Varianz beträgt 0,0036 + 0,0081 + 0,0054 = 0,0171.'],['15.00%.','Das ist das gewichtete Volatilitätsmittel bei Korrelation +1.'],['10.82%.','Das lässt den positiven Kovarianzterm weg.']
 ],0,[eq('\\sigma_P=\\sqrt{0{,}25^2\\cdot0{,}24^2+0{,}75^2\\cdot0{,}12^2+2\\cdot0{,}25\\cdot0{,}75\\cdot0{,}5\\cdot0{,}24\\cdot0{,}12}\\approx13{,}077\\%','Beide gewichteten Einzelvarianzen und das Kreuzglied werden addiert.','\\sigma_P','Portfoliostandardabweichung.')],'two-assets'),
 q('a2','mock-a','b','Two assets have equal variances of 0.04 and covariance 0.01. Their unconstrained global minimum-variance weight in the first asset is:',[
 ['25%.','Das entspricht nicht der symmetrischen Varianzfunktion.'],['50%.','(0,04 − 0,01)/(0,08 − 0,02) = 0,5.'],['75%.','Auch dieses Gewicht würde die Symmetrie ohne Grund brechen.']
 ],1,[eq('w_1^{GMV}=0{,}03/0{,}06=0{,}5','Die Anlagen haben dieselbe Einzelvarianz; bei nicht perfekter Korrelation liegt das eindeutige Minimum in der Mitte.','w_1^{GMV}','Minimumvarianzgewicht der ersten Anlage.')],'minimum-variance'),
 q('a3','mock-a','c','A risky portfolio expects 11% return with 20% volatility. The risk-free rate is 3%, risk aversion is A = 4, and utility uses decimal returns. The unconstrained optimal risky weight is:',[
 ['25%.','Das ist nur halb so groß wie das Ergebnis der angegebenen Formel.'],['100%.','Das ignoriert den Risikoabzug der Nutzenfunktion.'],['50%.','(0,11 − 0,03)/(4 × 0,04) = 0,5.']
 ],2,[eq('y^*=0{,}08/(4\\cdot0{,}20^2)=0{,}5','Der sichere Anteil ist ebenfalls 50 %.','y^*','Optimales Risikoanlagegewicht.')],'utility'),
 q('b1','mock-b','a','Portfolio P holds 60% in A and 40% in B. Cov(A,B) is 0.002 and Var(B) is 0.01. Cov(P,B) equals:',[
 ['0.0052.','0,6 × 0,002 + 0,4 × 0,01 = 0,0052.'],['0.0070.','Dieser Wert verwendet nicht die gegebenen Gewichte.'],['0.0120.','Das addiert Kovarianz und Varianz ohne Gewichtung.']
 ],0,[eq('\\operatorname{Cov}(R_P,R_B)=0{,}6\\cdot0{,}002+0{,}4\\cdot0{,}01=0{,}0052','Kovarianz ist in den Portfoliogewichten linear.','\\operatorname{Cov}(R_P,R_B)','Kovarianz von P und B.')],'many-assets'),
 q('b2','mock-b','b','A feasible portfolio lies on the lower branch of a conventional risky-asset minimum-variance frontier, below the global minimum-variance portfolio. It is:',[
 ['efficient because it is on a minimum-variance frontier.','Die gesamte Minimumvarianzgrenze und ihr effizienter oberer Teil sind nicht identisch.'],['inefficient because an attainable portfolio offers higher expected return for the same risk.','Der untere Ast wird durch den oberen dominiert.'],['necessarily risk-free.','Die Position unterhalb des GMV-Erwartungswerts sagt nicht, dass Varianz null ist.']
 ],1,['Die effiziente Grenze ist der obere nicht dominierte Teil. Die reine Minimierung der Varianz bei einem niedrigen Renditeziel kann einen Punkt auf dem unteren Ast liefern.'],'efficient-frontier'),
 q('b3','mock-b','c','A risky portfolio expects 8% return with 10% volatility. An investor allocates 150% to it by borrowing 50% of equity at 4%. Expected portfolio return is:',[
 ['12%.','Das ist der Anlageertrag vor Finanzierungskosten.'],['8%.','Das ist die ungehebelte Rendite des riskanten Portfolios.'],['10%.','1,5 × 8 % − 0,5 × 4 % = 10 %.']
 ],2,[eq('\\mu_C=1{,}5\\cdot0{,}08-0{,}5\\cdot0{,}04=10\\%','Die Volatilität beträgt dabei 15 %, sofern die Finanzierung selbst über den Horizont sicher ist.','\\mu_C','Erwartete Rendite relativ zum Eigenkapital.')],'risk-free')
];
