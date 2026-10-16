const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,solution,section)=>Q('fa-'+id,'equity-factors','equity',pool,los,stem,options,0,solution,{section});
module.exports=[
 q('01','practice','a','The annual risk-free rate is 3%, expected market return is 8% and a stock’s beta is 1.2. Its CAPM required return is:',[
 ['9.00%.','Zur risikofreien Rendite kommt Beta mal die erwartete Marktprämie fünf Prozent.'],
 ['12.60%.','Dies verwendet die volle Marktrendite acht statt der Prämie fünf Prozent.'],
 ['6.00%.','Dies lässt die risikofreie Basis weg und nennt nur den systematischen Prämienbeitrag.']
 ],[F('k_E=3\\%+1{,}2(8\\%-3\\%)=9\\%','Marktrendite und Marktprämie sind verschieden.',[['k_E','Geforderte erwartete jährliche Eigenkapitalrendite im CAPM.']])],'capm'),
 q('02','practice','a','Two stocks have betas 0.8 and 1.6. With risk-free return 3% and an expected market premium of 5%, their CAPM required returns differ by:',[
 ['4.00 percentage points.','Die Beta-Differenz 0,8 wird mit derselben Prämie fünf Prozent multipliziert.'],
 ['0.80 percentage points.','Dies ist nur der dimensionslose Beta-Unterschied.'],
 ['8.00 percentage points.','Dies vergleicht elf Prozent mit risikofrei drei statt mit der niedrigeren Aktienforderung sieben Prozent.']
 ],[F('\\Delta k_E=(1{,}6-0{,}8)5\\%=4\\%','Die einzelnen Renditeforderungen sind elf und sieben Prozent.',[['\\Delta k_E','Differenz der jährlichen Renditeforderungen in Prozentpunkten.']])],'capm'),
 q('03','practice','a','A stock has return standard deviation 30%, the market 20% and their correlation is 0.8. The stock’s beta is:',[
 ['1.20.','Korrelation mal relative Standardabweichung ergibt das Beta.'],
 ['1.50.','Dies verwendet nur das Verhältnis der Standardabweichungen.'],
 ['0.80.','Dies verwechselt Korrelation und Beta.']
 ],[F('\\beta=0{,}8(0{,}30/0{,}20)=1{,}2','Eine hohe Einzelstreuung wird nur entsprechend ihrer gemeinsamen Marktbewegung erfasst.',[['\\beta','Dimensionslose Marktsensitivität.']])],'beta'),
 q('04','practice','a','Stock B has volatility 40%, market volatility 20% and correlation with the market 0.3. With risk-free return 3% and expected market premium 5%, CAPM requires:',[
 ['6.00%.','Beta 0,6 führt zu drei Prozentpunkten zusätzlicher Vergütung.'],
 ['13.00%.','Dies setzt Beta allein als Volatilitätsverhältnis zwei an.'],
 ['4.50%.','Dies verwendet Korrelation 0,3 statt Beta 0,6.']
 ],[F('\\beta_B=0{,}3(0{,}40/0{,}20)=0{,}6,\\quad k_B=3\\%+0{,}6(5\\%)=6\\%','Die volatilere Aktie muss kein höheres systematisches Beta besitzen.',[['\\beta_B,k_B','Beta und jährliche CAPM-Renditeforderung von B.']])],'beta'),
 q('05','practice','a','With risk-free return 3%, expected market premium 5% and beta −0.3, the CAPM required return is:',[
 ['1.50%.','Negative systematische Exposition liefert bei positiver Prämie einen negativen Prämienbeitrag.'],
 ['4.50%.','Dies ignoriert das negative Vorzeichen des Betas.'],
 ['−1.50%.','Dies lässt die risikofreie Basis drei Prozent weg.']
 ],[F('k_E=3\\%-0{,}3(5\\%)=1{,}5\\%','Eine erwartete Rendite unter risikofrei ist bei einem möglicherweise nützlichen Hedge-Beitrag mit dem Modell vereinbar.',[['k_E','Modellierte jährliche Renditeforderung.']]),'Negatives Beta bedeutet weder risikofreie Zahlung noch garantierten Schutz in jedem Zustand.'],'sml'),
 q('06','practice','a','A stock has zero market beta but positive residual variance. Under the CAPM, it:',[
 ['can have a required expected return equal to the risk-free rate while still having uncertain realized returns.','Nicht bepreistes spezifisches Risiko ist nicht gleich fehlendes Risiko.'],
 ['must have constant realized returns because its systematic premium is zero.','Gesamtstreuung und gemeinsamer Risikobeitrag sind verschieden.'],
 ['requires a premium equal to its residual standard deviation.','Das CAPM vergütet keine beliebig zusätzliche spezifische Konzentration.']
 ],['Beta null setzt den systematischen Prämienbeitrag auf null.','Der Restterm kann trotzdem schwanken; die Gleichung beschreibt erwartete Vergütung unter Modellvoraussetzungen.'],'risk-decomposition'),
 q('07','practice','a','In a one-factor model, beta is 1.2, market standard deviation 20% and residual standard deviation 12%. The residual is uncorrelated with the market. Total standard deviation is closest to:',[
 ['26.8328%.','Systematische und spezifische Varianzen werden addiert, danach die Wurzel gezogen.'],
 ['36.0000%.','Dies addiert Standardabweichungen statt Varianzen.'],
 ['24.0000%.','Dies berücksichtigt nur den systematischen Anteil.']
 ],[F('\\sigma=\\sqrt{(1{,}2\\cdot0{,}20)^2+0{,}12^2}\\approx26{,}8328\\%','Die unkorrelierte Restkomponente besitzt trotzdem positive Varianz.',[['\\sigma','Gesamte jährliche Renditestandardabweichung.']])],'risk-decomposition'),
 q('08','practice','a','Two stocks have the same beta and face the same expected market premium and risk-free rate. One has substantially higher independent residual variance. Relative to the other stock, CAPM assigns it:',[
 ['the same required expected return, although its total return risk can be greater.','Das zusätzliche unabhängige Einzelrisiko erhält im CAPM keine zusätzliche Prämie.'],
 ['a higher required return equal to the increase in total volatility.','Gesamte Standardabweichung ist nicht die SML-Risikokoordinate.'],
 ['a lower beta because its residual risk is more diversifiable.','Restvarianz verändert das ausdrücklich gleich gehaltene Beta nicht.']
 ],['Das Modell trennt gemeinsame Exposition von spezifischer Streuung.','Eine konzentrierte Position kann deshalb zusätzliche tatsächliche Risiken tragen, ohne dass die CAPM-Forderung steigt.'],'risk-decomposition'),
 q('09','practice','a b','Sixteen equal-weight stocks each have beta 1.2, market standard deviation 20% and residual standard deviation 24%. Residuals are pairwise uncorrelated and uncorrelated with the market. Portfolio standard deviation is closest to:',[
 ['24.7386%.','Marktvarianz bleibt; die einzelne Restvarianz wird durch sechzehn geteilt.'],
 ['8.4853%.','Dies verteilt fälschlich auch die gemeinsame Marktvarianz auf sechzehn unabhängige Anlagen.'],
 ['33.9411%.','Dies behält die Restvarianz einer einzelnen Aktie bei.']
 ],[F('\\sigma_P=\\sqrt{0{,}24^2+0{,}24^2/16}\\approx24{,}7386\\%','Gleiche gemeinsame Exposition wird durch mehr unabhängige Reste nicht kleiner.',[['\\sigma_P','Standardabweichung des gleich gewichteten Portfolios.']])],'diversification'),
 q('10','practice','a','The horizontal risk coordinate on the security market line, in contrast with the capital market line, is:',[
 ['market beta for securities and portfolios.','Die SML bepreist systematisches Marktrisiko.'],
 ['total standard deviation for any individual stock.','Gesamtstandardabweichung gehört zur CML effizienter Kombinationen, nicht zur SML.'],
 ['the estimated regression intercept.','Alpha ist eine Modellabweichung, keine SML-Risikokoordinate.']
 ],['Die CML beschreibt Kombinationen von Marktportfolio und risikofreiem Anspruch anhand ihrer Gesamtstreuung.','Eine einzelne ineffiziente Aktie kann nicht allein wegen einer Standardabweichungsangabe auf die CML gesetzt werden.'],'sml'),
 q('11','practice','a','An analyst forecasts a stock’s future expected return at 10%, while a suitable CAPM estimate requires 9%. A point above the SML most appropriately indicates:',[
 ['a potentially attractive pricing gap if the analyst’s forecast and risk estimate are well founded.','Die Aussage ist an die Tragfähigkeit beider Schätzungen gebunden.'],
 ['a riskless 1% gain available regardless of realized market outcomes.','Erwarteter Abstand ist keine sichere Endzahlung.'],
 ['that last year’s realized 10% return proves permanent underpricing.','Vergangener Ausgang ist keine automatisch gültige Erwartungskoordinate.']
 ],['Die SML vergleicht erforderliche und geschätzte erwartete Rendite.','Die aktive These muss Daten, Anspruch, Horizont und Unsicherheit erläutern.'],'sml'),
 q('12','practice','a','A valuation forecasts nominal cash flows in euros. When choosing the risk-free input for its cost of equity, the analyst should primarily seek:',[
 ['a defensible rate consistent with the cash-flow currency, price basis and relevant horizon.','Währung und Konvention bestimmen die Konsistenz der Diskontierung.'],
 ['the government yield in the issuer’s headquarters country regardless of the valuation currency.','Unternehmenssitz allein legt die Währung der Zahlungsbewertung nicht fest.'],
 ['a real short-term rate without adjustment because nominal forecasts already include inflation.','Nominale Zahlungen benötigen eine konsistente nominale Renditeforderung.']
 ],['Ein staatlicher Emittentenname allein beseitigt weder Ausfall- noch Währungs- oder Fristrisiken.','Die verwendete risikofreie Näherung und ihre Grenzen werden offengelegt.'],'inputs'),
 q('13','practice','a','With beta held at 1.2 and risk-free return 3%, increasing the expected market premium from 5% to 6% changes the CAPM required return to:',[
 ['10.20%.','Die Forderung steigt von neun um 1,2 Prozentpunkte.'],
 ['10.00%.','Dies überträgt die Prämienänderung ohne Beta-Skalierung.'],
 ['13.80%.','Dies addiert risikofrei zur bereits angegebenen Prämie, bevor Beta angewendet wird.']
 ],[F('k_E=3\\%+1{,}2(6\\%)=10{,}2\\%','Nur die Prämienannahme wird verändert.',[['k_E','Neue jährliche CAPM-Renditeforderung.']])],'premium'),
 q('14','practice','a','An excess-return regression has alpha 0.5% per month and beta 1.25. If the risk-free return is constant at 0.25% per month, the corresponding raw-return intercept is:',[
 ['0.4375%.','Die Überleitung verwendet Alpha plus eins minus Beta mal risikofrei.'],
 ['0.5000%.','Dies setzt die beiden unterschiedlichen Intercepts gleich.'],
 ['0.8125%.','Dies addiert Beta mal risikofrei statt des passenden Korrekturterms.']
 ],[F('a=0{,}5\\%+(1-1{,}25)0{,}25\\%=0{,}4375\\%','Die Steigung bleibt hier wegen des ausdrücklich konstanten risikofreien Satzes gleich.',[['a','Monatlicher Intercept der entsprechenden Roh-Renditeregression.']])],'excess'),
 q('15','practice','a','When the risk-free return varies across observations, replacing an excess-return regression with a raw-return regression while assuming identical slopes and unchanged intercepts is:',[
 ['not generally justified because the transformation introduces a time-varying risk-free term.','Eine ausgelassene zeitveränderliche Größe kann auch die Steigung beeinflussen.'],
 ['justified whenever the two regressions use the same number of observations.','Gleiche Beobachtungszahl beseitigt den Zusatzterm nicht.'],
 ['justified if the average risk-free rate is used in every historical observation.','Die Mittelung bildet nicht allgemein jede historische Veränderung korrekt ab.']
 ],['Aus dem Überschussrenditemodell folgt in Roh-Renditen zusätzlich der Term eins minus Beta mal r_f,t.','Nur unter passenden Bedingungen, insbesondere im hier erklärten konstanten-r_f-Fall, gilt die einfache Intercept-Überleitung unmittelbar.'],'excess'),
 q('16','practice','a','For six paired excess-return observations, the sum of squared market deviations is 70 and the sum of cross-products with stock deviations is 87.5. OLS beta is:',[
 ['1.25.','Kreuzproduktsumme wird durch die Markt-Abweichungsquadratsumme geteilt.'],
 ['0.80.','Dies kehrt den Regressionsquotienten um.'],
 ['1.75.','Dies kann ein Mittelwert sein, ist aber nicht der Quotient dieser Abweichungssummen.']
 ],[F('\\hat\\beta=87{,}5/70=1{,}25','Eine gemeinsame Skalierung beider Renditereihen ändert die dimensionslose Steigung nicht.',[['\\hat\\beta','Geschätztes Beta der Aktien- auf Markt-Überschussrendite.']])],'ols'),
 q('17','practice','a','Mean monthly stock excess return is 1.75%, mean monthly market excess return is 1% and estimated beta is 1.25. Estimated monthly alpha is:',[
 ['0.50%.','Beta mal Marktmittel wird vom Aktienmittel abgezogen.'],
 ['0.75%.','Dies zieht nur eine Einheit Marktmittel ab.'],
 ['1.75%.','Dies ignoriert den geschätzten Marktbeitrag.']
 ],[F('\\hat\\alpha=1{,}75\\%-1{,}25(1\\%)=0{,}5\\%','Marktmehrertrag und modellbereinigtes Alpha sind unterschiedliche Größen.',[['\\hat\\alpha','Geschätzter monatlicher Intercept des Überschussrenditemodells.']])],'alpha'),
 q('18','practice','a','A regression with an intercept has residual sum of squares 12 and total sum of squares 121.375. Its R-squared is closest to:',[
 ['0.9011.','Nicht erklärte Streuung wird von eins abgezogen.'],
 ['0.0989.','Dies ist der Anteil nicht erklärter Streuung.'],
 ['0.1097.','Dies ist nicht das Verhältnis zur gesamten Streuung.']
 ],[F('R^2=1-12/121{,}375\\approx0{,}901133','R² beschreibt die Anpassung an diese Stichprobe, keine Erfolgswahrscheinlichkeit.',[['R^2','Bestimmtheitsmaß der angepassten Regression.']])],'fit'),
 q('19','practice','a','A simple regression estimates an intercept and one slope from six observations. Its residual sum of squares is 12 in squared percentage-point units. The conventional estimated residual standard deviation is closest to:',[
 ['1.7321 percentage points.','Zwei geschätzte Parameter lassen vier Fehler-Freiheitsgrade.'],
 ['1.5492 percentage points.','Dies verwendet den Nenner fünf wie bei einer anderen Stichprobenvarianz.'],
 ['1.4142 percentage points.','Dies verwendet alle sechs Beobachtungen ohne Parameterkorrektur.']
 ],[F('s_\\varepsilon=\\sqrt{12/(6-2)}\\approx1{,}73205','Die Einheit ist diejenige der abhängigen Renditegröße je Beobachtungsperiode.',[['s_\\varepsilon','Geschätzte Residualstandardabweichung der Regression.']])],'fit'),
 q('20','practice','a','An analyst explicitly assumes a historical beta estimate of 1.25 is appropriate for a prospective annual CAPM calculation. With annual risk-free return 3% and expected annual market premium 5%, the required return is:',[
 ['9.25%.','Beta wird mit passenden vorwärts gerichteten Jahresinputs verwendet.'],
 ['8.00%.','Dies verwendet das Marktportfolio-Beta eins.'],
 ['13.00%.','Dies interpretiert die gegebene Prämie als zu klein und addiert risikofrei nochmals.']
 ],[F('k_E=3\\%+1{,}25(5\\%)=9{,}25\\%','Die Eignung des Betas für den Zukunftshorizont ist hier eine ausdrücklich vorgegebene Annahme.',[['k_E','Prospektive jährliche CAPM-Renditeforderung.']])],'forecast'),
 q('21','practice','a','A monthly market regression estimates positive historical alpha. When using CAPM to estimate a future annual cost of equity, the analyst should:',[
 ['keep that estimated active component separate rather than automatically add it to the annual risk-based required return.','Historische Modellabweichung, Periodeneinheit und faire Risikovergütung sind getrennte Fragen.'],
 ['multiply the intercept by twelve and add it because all historical alpha is a required risk premium.','Weder reine Periodenskalierung noch vergangene Schätzung begründet eine dauerhaft geforderte Prämie.'],
 ['replace beta with the intercept because the intercept measures systematic exposure more directly.','Der Intercept ist keine Marktsensitivität.']
 ],['Eine aktive Zukunftsprognose benötigt eigene Begründung und Unsicherheitsprüfung.','CAPM setzt die Renditeforderung aus passender risikofreier Rendite, Beta und erwarteter Marktprämie zusammen.'],'forecast'),
 q('22','practice','a','A company substantially changes both its business mix and financing. The most appropriate treatment of its published historical beta is to:',[
 ['assess whether its estimation window, market proxy and historical exposures remain suitable for the future claim.','Das zukünftige Eigentümerrisiko kann von der Stichprobe abweichen.'],
 ['retain it unchanged because increasing the number of historical observations removes structural breaks.','Viele frühere Beobachtungen stellen das neue Geschäft nicht automatisch dar.'],
 ['replace it with total stock volatility because the firm now has more than one business segment.','Volatilität ist kein Ersatz für systematische Exposition.']
 ],['Ein Beta ist eine geschätzte Beziehung innerhalb einer definierten Daten- und Modellbasis.','Geschäftsrisiko, Verschuldung, Währung und Referenzmarkt werden wirtschaftlich und statistisch geprüft.'],'estimation'),
 q('23','practice','a','In an idealized no-tax claim-weighting model, asset beta is 0.8, debt beta 0.2 and market-value D/E is 1. Equity beta is:',[
 ['1.40.','Der Hebel überträgt nur das gegenüber Schuld-Beta zusätzliche Asset-Risiko.'],
 ['1.60.','Dies unterstellt stillschweigend Schuld-Beta null.'],
 ['0.80.','Dies ignoriert die Aufteilung auf Eigen- und Fremdkapital.']
 ],[F('\\beta_E=0{,}8+(0{,}8-0{,}2)1=1{,}4','Alle Ansprüche und Marktwerte gehören zur selben vereinfachten Konstruktion.',[['\\beta_E','Eigenkapitalbeta im angegebenen Fall ohne besondere Steueransprüche.']])],'leverage'),
 q('24','practice','a','A no-tax company has asset beta 0.8 and debt beta zero. If its market-value D/E is 1, annual risk-free return is 3% and expected market premium 5%, CAPM equity cost is:',[
 ['11.00%.','Eigenkapitalbeta steigt durch den Hebel auf 1,6.'],
 ['7.00%.','Dies verwendet das unverschuldete Asset-Beta als Aktienbeta.'],
 ['9.00%.','Dies setzt ohne Grundlage Beta 1,2 ein.']
 ],[F('\\beta_E=0{,}8(1+1)=1{,}6,\\quad k_E=3\\%+1{,}6(5\\%)=11\\%','Die Geschäftsexposition wird im Fall konstant gehalten; verändert wird ihre Verteilung auf Ansprüche.',[['\\beta_E,k_E','Aktienbeta und geforderte erwartete jährliche Eigenkapitalrendite.']])],'leverage'),
 q('25','practice','a','A stable stock is expected to pay a dividend of 4 next year, growing thereafter at 3% annually. Risk-free return is 3%, expected market premium 5% and beta 1.2. Its Gordon value is closest to:',[
 ['66.6667.','Der passende CAPM-Eigenkapitalsatz neun Prozent liegt sechs Prozentpunkte über Wachstum.'],
 ['44.4444.','Dies diskontiert wie eine konstante Zahlung ohne Wachstumsabzug.'],
 ['100.0000.','Dies würde im Fall einen Eigenkapitalsatz sieben Prozent verwenden.']
 ],[F('k_E=3\\%+1{,}2(5\\%)=9\\%,\\quad V_0=4/(0{,}09-0{,}03)\\approx66{,}6667','Die erste Zahlung liegt ein Jahr nach dem Bewertungszeitpunkt.',[['k_E,V_0','Passende jährliche Eigenkapitalrenditeforderung und heutiger bedingter Aktienwert.']])],'valuation'),
 q('26','practice','a','A chart varies beta while keeping the next dividend and its growth unchanged. It shows a lower value when beta increases. The most accurate interpretation is that:',[
 ['the chart isolates a discount-rate effect; a real business change may also alter expected dividends and growth.','Kontrollierter Vergleich und gemeinsames wirtschaftliches Szenario sind verschieden.'],
 ['any observed increase in beta must lower the stock’s value by exactly the plotted amount.','Tatsächliche Prognosen und andere Modellinputs können sich zugleich ändern.'],
 ['higher beta directly reduces the contractual amount of every future dividend.','Die isolierte Risikoveränderung ist keine mechanische Änderung einer Zahlung.']
 ],['Die SML liefert unter denselben Marktinputs eine andere Renditeforderung.','Bei unveränderten Zahlungen sinkt dadurch der Barwert; reale gemeinsame Veränderungen müssen zusätzlich modelliert werden.'],'valuation'),
 q('27','practice','a b','Two stocks have equal market betas but different exposures to other priced systematic factors. In a multifactor pricing model they:',[
 ['can have different required expected returns despite equal CAPM market betas.','Weitere Expositionen können verschiedene erwartete Prämienbeiträge erzeugen.'],
 ['must have equal required returns because the market beta identifies every factor exposure.','Ein einzelner Koeffizient bestimmt nicht alle gemeinsamen Risikokanäle.'],
 ['must offer riskless arbitrage whenever their forecast returns differ.','Andere Faktoren und Restunsicherheit können den Unterschied erklären.']
 ],['Mehrere Faktoren beschreiben verschiedene gemeinsame Zustandsrisiken.','Die gewählte Spezifikation muss ihre Faktorpreise und ihre wirtschaftliche Bedeutung begründen.'],'factor-logic'),
 q('28','practice','b','A stipulated annual three-factor pricing model uses risk-free return 3% and market, size and value premiums of 5%, 2% and 3%. With exposures 1.1, 0.3 and 0.5 and no additional alpha, required return is:',[
 ['10.60%.','Risikofrei plus drei getrennte Expositions-Prämien-Produkte.'],
 ['8.50%.','Dies berücksichtigt nur das Marktbeta.'],
 ['9.10%.','Dies berücksichtigt Markt und Size, lässt Value aus.']
 ],[F('k=3\\%+1{,}1(5\\%)+0{,}3(2\\%)+0{,}5(3\\%)=10{,}6\\%','Die Prämien sind in der Aufgabe angesetzt, nicht empirisch als sichere Zukunftsgrößen bestätigt.',[['k','Geforderte erwartete Jahresrendite im vorgegebenen Drei-Faktor-Ansatz.']])],'multifactor-case'),
 q('29','practice','b','Risk-free return is 3% and expected market, size and value premiums are 5%, 2% and 3%. In a no-alpha three-factor pricing illustration, exposures 1.1, −0.2 and −0.4 imply:',[
 ['6.90%.','Negative Expositionen erzeugen bei positiven Prämien negative zusätzliche Beiträge.'],
 ['10.10%.','Dies verliert die Vorzeichen beider zusätzlichen Expositionen.'],
 ['8.50%.','Dies ignoriert Size und Value.']
 ],[F('k=3\\%+1{,}1(5\\%)-0{,}2(2\\%)-0{,}4(3\\%)=6{,}9\\%','Prämienvorzeichen und Expositionsvorzeichen sind getrennt zu prüfen.',[['k','Modellierte erwartete Jahresrenditeforderung.']])],'multifactor-case'),
 q('30','practice','b','An annual factor-return model has risk-free return 3%, exposures 1.1, 0.3 and 0.5, and no intercept. Realized market-excess, size and value returns are −6%, 2% and −1%. A residual adds 0.4 percentage points. The stock’s realized return is:',[
 ['−3.10%.','Die tatsächlichen Faktorwerte werden einmal mit den Expositionen gewichtet.'],
 ['7.50%.','Dies addiert nochmals eine bereits in den vollen Faktorrenditen enthaltene erwartete Rendite von 10,6 Prozent.'],
 ['−6.10%.','Dies lässt die risikofreie Basis weg.']
 ],[F('R=3\\%+1{,}1(-6\\%)+0{,}3(2\\%)+0{,}5(-1\\%)+0{,}4\\%=-3{,}1\\%','Die erste Faktorgröße ist bereits eine Markt-Überschussrendite.',[['R','Realisierte Aktienrendite im gegebenen Jahresfall.']])],'realized'),
 q('31','practice','b','The expected market-excess factor return is 5%, but its realized value is −6%. In an expected-return-plus-factor-surprises representation, the market surprise is:',[
 ['−11.00%.','Tatsächlich minus zuvor erwartet: minus sechs minus fünf.'],
 ['−6.00%.','Dies ist die volle realisierte Faktorrendite, nicht ihre Überraschung.'],
 ['−1.00%.','Dies addiert die erwartete Prämie statt sie abzuziehen.']
 ],[F('u_M=-6\\%-5\\%=-11\\%','Die erwartete Vergütung ist im Ausgangserwartungswert bereits enthalten.',[['u_M','Unerwartete Markt-Faktoränderung in Prozentpunkten.']])],'factor-conventions'),
 q('32','practice','b','A model starts from expected return inclusive of factor premiums, then adds exposures times the full realized factor returns. Without further adjustment, it:',[
 ['double counts the expected factor compensation; that representation should add factor surprises instead.','Erwartung plus unerwartete Abweichung ergibt realisierte Faktorwirkung.'],
 ['is equivalent to using a risk-free intercept and the full factor returns.','Die Ausgangswerte unterscheiden sich gerade um die erwarteten Prämienbeiträge.'],
 ['removes factor risk because expected and realized factor values have the same units.','Gleiche Einheiten machen verschiedene Zufallsgrößen nicht identisch.']
 ],['Entweder verwendet man eine passende risikofreie Basis plus volle Faktorrenditen oder eine erwartete Gesamtrendite plus unerwartete Faktorabweichungen.','Der Restterm und ein gegebenenfalls begründeter Intercept werden konsistent mitgeführt.'],'factor-conventions'),
 q('33','practice','b','A size factor is defined as the return on a specified small-stock portfolio minus the return on a specified large-stock portfolio. When including it alongside market excess return in an excess-return regression, the analyst should:',[
 ['use the specified spread consistently rather than subtract another risk-free return from that spread.','Die Renditedifferenz enthält bereits ihre Long-Short-Definition.'],
 ['subtract risk-free return once from every long-short factor because the dependent variable is an excess return.','Eine zusätzliche Subtraktion verändert die definierte Faktorgröße.'],
 ['replace the spread with the average market capitalization of the stock being evaluated.','Charakteristik, Faktorportfoliorendite und Exposition sind verschiedene Ebenen.']
 ],['Die Regression braucht die tatsächlich definierte Faktorreihenfolge und Einheit.','Ein Long-Short-Spread ist keine weitere unbereinigte Markt-Roh-Rendite.'],'factor-conventions'),
 q('34','practice','b','Arbitrage pricing theory most directly provides:',[
 ['a relation between expected returns and systematic factor exposures under its assumptions, without uniquely specifying all factors.','Faktorstruktur, Diversifikation und fehlende Arbitrage tragen die Preisbeziehung.'],
 ['a unique list of five fundamental factors for every equity market.','Eine konkrete empirische Faktorwahl folgt nicht allein aus APT.'],
 ['a conclusion that individual residual risk vanishes whenever two stocks share a market beta.','Gleiches Marktbeta beseitigt weder andere Faktoren noch einzelne Restunsicherheit.']
 ],['APT unterscheidet die theoretische Beziehung von der empirischen Identifikation relevanter Risiken.','In endlichen Portfolios ist die idealisierte exakte Replikation nicht automatisch verfügbar.'],'apt'),
 q('35','practice','b','Portfolio A has factor exposures (1, 0.5) and B has (0.4, 1.5). A portfolio invested two-thirds in A and one-third in B has exposures:',[
 ['0.8 and 5/6.','Jede Exposition wird mit denselben Anfangswertgewichten gemittelt.'],
 ['1.4 and 2.0.','Dies addiert die Einzelwerte ohne Portfolioanteile.'],
 ['0.6 and 1.0.','Dies verwendet nicht die angegebenen Gewichte.']
 ],[F('b_1=\\tfrac23\\cdot1+\\tfrac13\\cdot0{,}4=0{,}8,\\quad b_2=\\tfrac23\\cdot0{,}5+\\tfrac13\\cdot1{,}5=\\tfrac56','Die gesamte Anfangsgewichtssumme beträgt eins.',[['b_1,b_2','Expositionen des kombinierten Portfolios gegenüber den zwei Faktoren.']])],'replication'),
 q('36','practice','b','Two portfolios have expected returns 9% and 8%. A replicating portfolio invests two-thirds in the first and one-third in the second, with no costs. Its expected return is closest to:',[
 ['8.6667%.','Die erwarteten Zahlungen werden mit passenden Anfangswertgewichten kombiniert.'],
 ['8.5000%.','Dies verwendet gleiche statt der angegebenen Gewichte.'],
 ['17.0000%.','Dies addiert beide Renditen ohne Kapitalgewichte.']
 ],[F('\\mathbb E[R_P]=\\tfrac23(9\\%)+\\tfrac13(8\\%)\\approx8{,}666667\\%','Diese lineare Erwartungsrechnung benötigt keine Unabhängigkeit der Portfoliorenditen.',[['\\mathbb E[R_P]','Erwartete Rendite des angegebenen Portfolios.']])],'replication'),
 q('37','practice','b','In an explicitly frictionless one-period model, D and a replicating portfolio have identical factor-surprise exposures and zero residuals. D has expected return 9.2%, replication 8.6666667%. Buying 10,000 of D and shorting 10,000 of replication produces a state-independent end profit closest to:',[
 ['53.3333.','Gleiche Risikobeiträge und Anfangsbeträge heben sich auf; übrig bleibt die vorgegebene Renditedifferenz mal zehntausend.'],
 ['533.3333.','Dies überschätzt die Dezimalrenditedifferenz um den Faktor zehn.'],
 ['920.0000.','Dies ignoriert die Rückzahlung der Short-Position.']
 ],[F('\\Pi=10000(0{,}092-0{,}086666667)\\approx53{,}3333','Alle besonderen Voraussetzungen der Aufgabe sind nötig; dies ist kein Nachweis einer realen Aktienarbitrage.',[['\\Pi','Zustandsunabhängiger Endgewinn in Geldeinheiten im angegebenen Idealmodell.']]),'Eine Rendite auf Nettoanfangsinvestition null ist nicht definiert.'],'replication'),
 q('38','practice','b','Two individual stocks have matching estimated factor exposures but uncertain unmatched residual returns. A positive expected long-short spread alone:',[
 ['does not establish riskless arbitrage because the residual payoff remains uncertain.','Gleiche gemeinsame Faktoren sind nur ein Teil der Risikorechnung.'],
 ['establishes arbitrage whenever estimated market beta is zero.','Marktneutralität beseitigt nicht die ungesicherte Restzahlung.'],
 ['becomes state-independent by quoting the expected spread to more decimal places.','Rechengenauigkeit ändert das Auszahlungsrisiko nicht.']
 ],['Die exakte Lehrreplikation setzt ausdrücklich Rest null, passende Handelsansprüche und keine Friktionen voraus.','Ein positiver erwarteter Spread kann eine riskante Anlageidee sein und ist deshalb noch keine sichere kostenlose Zahlung.'],'apt'),
 q('39','practice','b','In a macroeconomic factor model, a loading on an inflation surprise most appropriately measures:',[
 ['sensitivity to the defined unexpected inflation change in its stated units.','Die Überraschung ist tatsächliche Inflation minus eine zuvor gebildete Erwartung.'],
 ['the firm’s market capitalization relative to a small-stock breakpoint.','Dies ist eine Größencharakteristik, keine Inflationsreaktion.'],
 ['the average past inflation rate regardless of what was anticipated.','Niveau, historischer Durchschnitt und unerwartete Veränderung sind verschieden.']
 ],['Die Definition des Faktors legt Einheit und Bedeutung der Exposition fest.','Eine vorab bekannte Größe darf nicht nachträglich wie ein unvorhergesehener Schock behandelt werden.'],'factor-types'),
 q('40','practice','b','In a Fama–French model, the distinction between a firm characteristic and a factor exposure is best illustrated by:',[
 ['book-to-market being a characteristic, HML a specified portfolio-return spread, and the HML loading an estimated sensitivity.','Datenmerkmal, Faktor und Exposition sind drei verschiedene Ebenen.'],
 ['a high book-to-market ratio being numerically identical to the firm’s HML loading.','Ein bilanzielles Verhältnis ist keine automatisch gleiche Regressionssteigung.'],
 ['the size spread having an identical construction in every three-factor and five-factor data implementation.','Insbesondere die veröffentlichte Fünf-Faktor-SMB-Konstruktion kombiniert mehrere Größen-Sortierungen.']
 ],['Eine Modellbezeichnung ersetzt keine Prüfung der tatsächlichen Portfoliokonstruktion.','Historische Renditen und eine positive geschätzte Exposition garantieren keine kommende positive Prämie.'],'fama-french'),
 q('41','practice','b','A two-factor model has loadings 1.1 and 0.5, factor standard deviations 20% and 10%, factor correlation 0.3, and residual standard deviation 12%. The residual is uncorrelated with both factors. Total return variance is:',[
 ['0.0719.','Einzelvarianzen, doppelter Kovarianzbeitrag und Restvarianz werden zusammengezählt.'],
 ['0.0653.','Dies lässt den positiven Kovarianzterm weg.'],
 ['0.0575.','Dies lässt die Restvarianz weg.']
 ],[F('\\sigma^2=1{,}1^2(0{,}20^2)+0{,}5^2(0{,}10^2)+2(1{,}1)(0{,}5)(0{,}3)(0{,}20)(0{,}10)+0{,}12^2=0{,}0719','Varianz ist eine quadratische Dezimalrenditegröße, keine Standardabweichung in Prozent.',[['\\sigma^2','Gesamte Renditevarianz des angegebenen Zweifaktormodells.']])],'covariance'),
 q('42','practice','a b','In the same linear pricing model, stocks A and B have required expected returns 10.6% and 6.9%. A portfolio invests 60% in A and 40% in B. Its required expected return is:',[
 ['9.12%.','Die gleichen Anfangsgewichte kombinieren Zahlungen und Faktorexpositionen.'],
 ['8.75%.','Dies gewichtet beide Aktien gleich.'],
 ['17.50%.','Dies addiert Renditen ohne Kapitalgewichte.']
 ],[F('k_P=0{,}6(10{,}6\\%)+0{,}4(6{,}9\\%)=9{,}12\\%','Die Aufgabe unterstellt dieselbe konsistente lineare Faktorpreisbeziehung.',[['k_P','Erwartete Portfoliorenditeforderung in diesem Modell.']])],'portfolio'),
 q('43','practice','a b','A long-short portfolio has market exposure zero, size exposure 0.5 and value exposure 0.9, with additional residual uncertainty. Calling it risk-free is:',[
 ['incorrect because non-market systematic exposure and residual uncertainty remain.','Marktneutral ist nur eine Aussage über eine einzelne Koordinate.'],
 ['correct because the CAPM market factor accounts for every possible risk.','Eine gegebene Mehrfaktorspezifikation beschreibt ausdrücklich zusätzliche gemeinsame Risiken.'],
 ['correct if the long and short positions have equal initial market values.','Eine Nettoanfangszahlung null beseitigt keine unsichere Endzahlung.']
 ],['Faktor-Neutralität muss für die relevanten gemeinsamen Faktoren geprüft werden.','Auch dann benötigen Restunsicherheit, Finanzierung, Leihe und Kosten eine eigene Beurteilung.'],'portfolio'),
 q('44','practice','a b','A previously estimated annual alpha is 1.0%. In a controlled attribution with otherwise unchanged coefficients, a justified added factor explains 0.8 percentage points of it. The remaining alpha is:',[
 ['0.20%.','Der ausdrücklich zugeordnete Beitrag wird vom bisherigen nicht erklärten Anteil abgezogen.'],
 ['1.80%.','Dies addiert einen bereits erklärenden Beitrag statt ihn umzuzuordnen.'],
 ['0.80%.','Dies berichtet den neu erklärten Anteil als verbleibenden Intercept.']
 ],[F('\\alpha_{new}=1{,}0\\%-0{,}8\\%=0{,}2\\%','Dies ist eine vorgegebene vereinfachte Attribution; in realen Mehrfachregressionen können sich auch andere Koeffizienten ändern.',[['\\alpha_{new}','Verbleibender jährlicher Intercept im angegebenen erweiterten Modell.']]),'Ein anderer Modellrest beweist weder automatisch Können noch dessen Abwesenheit.'],'model-alpha'),
 q('a1','mock-a','a','An analyst explicitly adopts beta 1.25 as suitable for a prospective annual CAPM valuation. Historical monthly excess-return alpha was 0.5%. Annual risk-free return is 3%, expected annual market premium 5%, next annual dividend 4 and perpetual dividend growth 3%. Which value is most consistent with using CAPM as the required return without treating historical alpha as an additional required premium?',[
 ['64.0000.','Jährliche Forderung 9,25 Prozent minus Wachstum drei ergibt einen Kapitalisierungsabstand 6,25 Prozent.'],
 ['66.6667.','Dies würde Beta 1,2 statt des vorgegebenen 1,25 verwenden.'],
 ['59.2593.','Dies addiert den vergangenen monatlichen Intercept fälschlich als zusätzlichen jährlichen Aufschlag 0,5 Prozentpunkte.']
 ],[F('k_E=3\\%+1{,}25(5\\%)=9{,}25\\%,\\quad V_0=4/(0{,}0925-0{,}03)=64','Anspruch, Zeitraum, Risikoprämie und erster Zahlungstermin werden abgestimmt.',[['k_E,V_0','Prospektive jährliche CAPM-Forderung und heutiger bedingter Aktienwert.']]),'Vergangene aktive Modellabweichung ist nicht automatisch faire dauerhafte Risikovergütung.'],'forecast'),
 q('b1','mock-b','a b','Two stocks have market betas 1.0 each. Their size and value loadings are A: (0.5, 1.0), B: (−0.5, 0). A stipulated annual pricing model has risk-free return 2% and market, size and value premiums 6%, 3% and 2%. Both stocks retain residual uncertainty. An analyst calls an equal-value long A, short B trade a riskless 5% gain. The best assessment is:',[
 ['the expected 5-percentage-point spread compensates the remaining size and value exposures in this model; market neutrality does not remove factor and residual risk.','Die Expositionsdifferenzen sind eins für Size und eins für Value, nicht null.'],
 ['the trade is riskless because equal market betas and equal initial position values eliminate every source of payoff uncertainty.','Andere gemeinsame Faktoren und Restterme bleiben bestehen.'],
 ['the trade is impossible because equal market betas require identical expected returns in every multifactor model.','Weitere bepreiste Expositionen erlauben verschiedene erwartete Renditen.']
 ],[F('k_A=11{,}5\\%,\\quad k_B=6{,}5\\%,\\quad\\Delta k=3\\%+2\\%=5\\%','Der Unterschied ist unter den vorgegebenen Faktorpreisen erklärt. Eine Rendite auf Nettoinvestition null wäre zudem nicht als gewöhnliche Portfoliorendite definiert.',[['k_A,k_B','Modellierte jährliche Renditeforderungen der beiden Aktien.'],['\\Delta k','Differenz pro gleich großem Long- und Short-Anfangsbetrag, keine sichere Nettokapitalrendite.']]),'Die vollständige Risiko- und Zahlungsrechnung ist erforderlich, bevor von Arbitrage gesprochen wird.'],'portfolio')
];
