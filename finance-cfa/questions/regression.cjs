const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('rg-'+id,'regression','quant',pool,los,stem,options,correct,solution,{section});
const eq=(tex,reading,symbol,meaning)=>F(tex,reading,[[symbol,meaning]]);
module.exports=[
 q('01','practice','a','In a simple OLS regression with an intercept, Sxx = 40, Sxy = 60, mean X = 2, and mean Y = 7. The estimated intercept is:',[
 ['4.0.','Die Steigung ist 60/40 = 1,5; der Intercept ist 7 − 1,5 × 2.'],['1.5.','Das ist die Steigung.'],['7.0.','Das ist der Y-Mittelwert; bei X-Mittel ungleich null ist er nicht generell der Intercept.']
 ],0,[eq('b_0=7-\\frac{60}{40}\\cdot2=4','Die angepasste Gerade geht durch den Schwerpunkt (2,7).','b_0','OLS-Intercept.')],'least-squares'),
 q('02','practice','a','Sample correlation between X and Y is 0.60, with standard deviations of X and Y of 4 and 10. The simple OLS slope of Y on X is:',[
 ['0.24.','Das vertauscht das Verhältnis der Standardabweichungen.'],['1.50.','0,60 × 10/4.'],['0.60.','Die Steigung ist nur bei identischen Skalen gleich der Korrelation.']
 ],1,[eq('b_1=r\\frac{s_Y}{s_X}=0{,}6\\frac{10}{4}=1{,}5','Die Einheit lautet Y-Einheiten pro X-Einheit.','b_1,r,s_Y,s_X','Steigung, Korrelation und Standardabweichungen von Y bzw. X.')],'least-squares'),
 q('03','practice','a','An observation has Y = 8 and fitted value 6.5. Its residual is:',[
 ['−1.5.','Das vertauscht beobachtet minus angepasst.'],['14.5.','Die Werte werden nicht addiert.'],['1.5.','8 − 6,5 = 1,5; das Modell unterschätzt diese Beobachtung.']
 ],2,[eq('e=8-6{,}5=1{,}5','Ein positives Residuum bedeutet, dass der beobachtete Y-Wert oberhalb der angepassten Linie liegt.','e','Residuum der Beobachtung.')],'model'),
 q('04','practice','a b','OLS residuals sum to zero in a model with an intercept. This fact:',[
 ['is an algebraic fitting property and does not prove correct specification.','Auch ein falsches lineares Modell kann diese Recheneigenschaft erfüllen.'],['proves the errors are normally distributed.','Nullsumme impliziert keine Verteilungsform.'],['proves X causes Y.','Die OLS-Bedingung enthält kein Kausalitätsargument.']
 ],0,['Die erste Normalgleichung setzt die Residuen in Summe null. Inhaltliche Modellvoraussetzungen müssen separat geprüft werden.'],'least-squares'),
 q('05','practice','b','A simple regression with an intercept has total sum of squares 80 and error sum of squares 20. Its R-squared is:',[
 ['25%.','Das ist der unerklärte Anteil.'],['75%.','1 − 20/80 = 0,75.'],['400%.','Das kehrt einen Quotienten um und ist kein R².']
 ],1,[eq('R^2=1-20/80=0{,}75','Das Modell erklärt 75 % der zentrierten Y-Variation in dieser Stichprobe.','R^2','Bestimmtheitsmaß.')],'anova'),
 q('06','practice','b c','A simple regression with an intercept uses 12 observations and has residual sum of squares 90. Its standard error of estimate is:',[
 ['2.739.','Das dividiert durch n statt n−2.'],['2.860.','Das dividiert durch n−1 statt n−2.'],['3.000.','√(90/10) = 3.']
 ],2,[eq('s_e=\\sqrt{90/(12-2)}=3','Die beiden geschätzten Koeffizienten lassen zehn Residuenfreiheitsgrade.','s_e','Standard Error of Estimate in Y-Einheiten.')],'anova'),
 q('07','practice','b','A fitted simple model has intercept 1 and slope 2. If Y was measured in millions and is instead measured in thousands, with X unchanged, the new slope is:',[
 ['2,000.','Alle Y-Werte und daher beide Koeffizienten werden mit 1.000 multipliziert.'],['2.','Eine Steigung ist im Gegensatz zur Korrelation skalenabhängig.'],['0.002.','Das rechnet in die umgekehrte Richtung.']
 ],0,['R² und die Korrelation ändern sich durch diese positive Skalierung nicht. Koeffizienten und Residualstandardfehler ändern ihre Zahlenwerte entsprechend den neuen Einheiten.'],'model'),
 q('08','practice','b','With a correctly specified conditional mean and exogenous X, heteroskedasticity most directly threatens:',[
 ['the ability to calculate an OLS slope.','OLS bleibt algebraisch berechenbar.'],['the validity of conventional homoskedastic standard errors.','Die gleichbleibende Fehlervarianz wird bei diesen Formeln vorausgesetzt.'],['the claim that every OLS coefficient must be biased.','Heteroskedastizität allein impliziert bei Exogenität keine Koeffizientenverzerrung.']
 ],1,['Robuste Standardfehler können ein Varianzproblem behandeln, heilen aber keine ausgelassene Variable mit Endogenität.'],'assumptions'),
 q('09','practice','b','Residuals plotted against X show a clear U-shaped pattern. The most direct concern is:',[
 ['too many decimal places in the coefficients.','Rundung erklärt keine systematische Krümmung.'],['the need to force the intercept to zero.','Das behebt die fehlende Krümmung nicht allgemein.'],['an inadequate functional form for the conditional mean.','Eine Gerade lässt einen systematischen nichtlinearen Zusammenhang aus.']
 ],2,['Zuerst einen wirtschaftlich und statistisch passenden nichtlinearen Zusammenhang prüfen. Die Nullsumme der Residuen beseitigt das Muster nicht.'],'diagnostics'),
 q('10','practice','b','A simple regression has residual standard error 3 and Sxx = 100. The conventional standard error of its slope is:',[
 ['0.30.','3/√100 = 0,3.'],['0.03.','Das dividiert durch Sxx statt dessen Wurzel.'],['30.00.','Das multipliziert statt zu dividieren.']
 ],0,[eq('SE(b_1)=3/\\sqrt{100}=0{,}3','Mehr X-Variation liefert bei gleicher Fehlerstreuung eine präzisere Steigung.','SE(b_1)','Geschätzter Standardfehler der Steigung.')],'coefficient-tests'),
 q('11','practice','b d','An estimated beta is 1.30 with standard error 0.20. The t-statistic for the null hypothesis beta equals one is:',[
 ['6.50.','Das testet Beta gleich null.'],['1.50.','(1,30 − 1)/0,20.'],['0.30.','Das ist die unstandardisierte Differenz.']
 ],1,[eq('t=(1{,}30-1)/0{,}20=1{,}5','Der behauptete Nullwert muss vor der Division abgezogen werden.','t','Teststatistik gegen Beta eins.')],'coefficient-tests'),
 q('12','practice','b','In a simple regression with an intercept, the conventional t-statistic for a zero slope is −3. The corresponding ANOVA F-statistic is:',[
 ['−3.','Eine F-Statistik ist nicht negativ.'],['3.','Der Betrag allein genügt nicht.'],['9.','Für dieselbe Nullsteigung gilt F = t².']
 ],2,[eq('F=(-3)^2=9','Der F-Test prüft eine Abweichung von null in beide Richtungen, ohne das Vorzeichen zu bewahren.','F','ANOVA-Teststatistik.')],'coefficient-tests'),
 q('13','practice','b','For a simple OLS regression with an intercept, sample correlation is −0.80. R-squared equals:',[
 ['0.64.','(−0,8)² = 0,64.'],['−0.64.','R² bewahrt das Vorzeichen der Beziehung nicht.'],['0.80.','Die Korrelation muss quadriert werden.']
 ],0,[eq('R^2=r^2=(-0{,}8)^2=0{,}64','Die negative Richtung ist an der Steigung bzw. Korrelation erkennbar, nicht an R².','R^2,r','Bestimmtheitsmaß und Stichprobenkorrelation.')],'anova'),
 q('14','practice','c','A model has intercept 2 and slope 0.5. At X = 6, the predicted Y is:',[
 ['3.0.','Das lässt den Intercept weg.'],['5.0.','2 + 0,5 × 6.'],['8.0.','Das setzt eine Steigung von eins voraus.']
 ],1,[eq('\\hat y=2+0{,}5\\cdot6=5','Es ist eine bedingte Punktprognose, kein garantierter neuer Y-Wert.','\\hat y','Vorhergesagter Y-Wert.')],'prediction'),
 q('15','practice','c','At the same X and confidence level, a classical interval for one new Y observation is wider than an interval for mean Y because it includes:',[
 ['only uncertainty about the intercept.','Beide Intervalle enthalten Parameterschätzunsicherheit.'],['a higher t critical value by definition.','Bei denselben Voraussetzungen verwenden beide denselben kritischen Wert.'],['the additional noise of the future observation.','Die neue Beobachtung schwankt zusätzlich um den unbekannten bedingten Mittelwert.']
 ],2,['Im Prognosestandardfehler steht eine zusätzliche Eins unter der Wurzel, weil die neue Fehlerstreuung zur Unsicherheit der geschätzten Linie hinzukommt.'],'prediction'),
 q('16','practice','c','A simple regression has n = 10, mean X = 2, Sxx = 20, and residual standard error 3. At X = 2, the standard error for one new observation is closest to:',[
 ['3.146.','3√(1 + 1/10) = 3,14643.'],['0.949.','Das ist der Standardfehler des bedingten Mittelwerts.'],['3.000.','Das ignoriert die verbleibende Schätzunsicherheit.']
 ],0,[eq('SE_{pred}=3\\sqrt{1+1/10+(2-2)^2/20}\\approx3{,}14643','Am Schwerpunkt ist die Parameterschätzunsicherheit minimal, aber nicht null.','SE_{pred}','Prognosestandardfehler.')],'prediction'),
 q('17','practice','c','For a fixed estimated simple regression, prediction intervals usually become wider as the new X moves farther from the sample mean because:',[
 ['the residual standard error is automatically re-estimated upward.','Bei festem Modell bleibt sₑ unverändert.'],['the leverage term in prediction uncertainty increases.','Der quadrierte Abstand zum X-Mittel wächst relativ zur beobachteten X-Variation.'],['the number of fitted observations increases.','Ein neuer Vorhersageort fügt der Schätzung keine Daten hinzu.']
 ],1,['Extrapolation kann zusätzlich Modellrisiko verursachen, das die klassische Intervallformel nicht vollständig erfasst.'],'prediction'),
 q('18','practice','c','A log–linear fitted function has ln(Y) = a + 0.03X. For an increase of X by 2 units, the percentage change in the exponentiated fitted value is closest to:',[
 ['3.00%.','Das berücksichtigt nur eine X-Einheit und verwendet die Näherung.'],['6.00%.','Das ist die lineare Näherung, nicht die exakte Änderung.'],['6.18%.','100 × [exp(0,06) − 1].']
 ],2,[eq('g=100(e^{0{,}03\\cdot2}-1)\\approx6{,}18365','Die Zielgröße wurde logarithmiert; für die exakte relative Niveauänderung wird exponentiert.','g','Änderung der exponentierten angepassten Zielgröße in Prozent.')],'functional-forms'),
 q('19','practice','c','In a lin–log fitted function Y = a + 4 ln(X), X rises from 100 to 110. The change in fitted Y is closest to:',[
 ['0.3812 units.','4 ln(1,10) ≈ 0,381241.'],['40.0000 units.','Das multipliziert die absolute X-Differenz statt der Logänderung.'],['4.0000 units.','Das setzt die Logänderung fälschlich gleich eins.']
 ],0,[eq('\\Delta\\hat Y=4\\ln(110/100)\\approx0{,}381241','Das Ergebnis hat Y-Niveaueinheiten, nicht automatisch Prozent.','\\Delta\\hat Y','Änderung der angepassten Zielgröße.')],'functional-forms'),
 q('20','practice','c','In a log–log fitted function, the slope coefficient is most directly interpreted as:',[
 ['the absolute change in Y per unit X.','Das ist die Lin–lin-Interpretation.'],['a local elasticity of Y with respect to X.','Er verknüpft relative Änderungen beider Größen.'],['the residual standard deviation.','Das ist ein separates Streuungsmaß.']
 ],1,['Für eine endliche X-Änderung verwendet man das neue/alte X-Verhältnis hoch b₁. Für kleine Änderungen ist b₁ mal die relative X-Änderung eine Näherung.'],'functional-forms'),
 q('21','practice','d','An excess-return regression estimates monthly alpha of 0.4% and beta of 1.2. If expected monthly market return is 2.0% and the risk-free rate is 0.2%, the model’s predicted total asset return is:',[
 ['2.56%.','Das ist die prognostizierte Überschussrendite; die risikofreie Rate fehlt.'],['3.00%.','Das verwendet die Gesamtmarktrendite als Überschussrendite.'],['2.76%.','0,2 % + 0,4 % + 1,2 × (2,0 % − 0,2 %).']
 ],2,[eq('\\hat R_i=0{,}2\\%+0{,}4\\%+1{,}2(2{,}0\\%-0{,}2\\%)=2{,}76\\%','Die Markt-Überschussrendite beträgt 1,8 %; am Ende wird die risikofreie Rendite genau einmal hinzugefügt.','\\hat R_i','Prognostizierte gesamte monatliche Assetrendite.')],'capm'),
 q('22','practice','d','The mean asset excess return is 1.8% and mean market excess return 1.0%, with estimated beta 1.4. The estimated periodic alpha is:',[
 ['0.40%.','1,8 % − 1,4 × 1,0 %.'],['0.80%.','Das subtrahiert die Marktrendite ohne Beta-Anpassung.'],['1.80%.','Das lässt den erklärten Marktbeitrag ganz weg.']
 ],0,[eq('\\hat\\alpha=1{,}8\\%-1{,}4(1{,}0\\%)=0{,}4\\%','Alpha ist die Differenz zwischen mittlerer Asset-Überschussrendite und dem geschätzten betaabhängigen Marktbeitrag.','\\hat\\alpha','Geschätztes periodisches Alpha.')],'capm'),
 q('23','practice','d','Two assets have equal market betas but different residual variances in an otherwise appropriate one-factor model. Their total variances:',[
 ['must be equal because beta captures all risk.','Beta beschreibt den systematischen Marktanteil, nicht jedes Risiko.'],['can differ because residual risk also contributes.','Bei gleichem Beta kann idiosynkratische Streuung unterschiedlich sein.'],['must both be zero.','Ein Faktorbezug beseitigt keine Streuung.']
 ],1,['Die Varianzzerlegung addiert bei unkorreliertem Fehler den betaquadrierten Marktvarianzanteil und die Residualvarianz.'],'risk-decomposition'),
 q('24','practice','b d','An estimated positive alpha is not statistically different from zero. Which conclusion is most appropriate?',[
 ['Manager skill has been proven.','Ein positiver Punktschätzer allein beweist kein Können.'],['True alpha has been proven to be exactly zero.','Nichtverwerfen ist kein Gleichheitsbeweis.'],['The estimate is positive, but the test does not establish nonzero alpha at the chosen level.','Punktschätzung und Evidenzstärke sind getrennte Aussagen.']
 ],2,['Zusätzlich sind wirtschaftliche Größenordnung, Gebühren, Benchmark, weitere Risikofaktoren und Datenqualität zu prüfen.'],'capm'),
 q('a1','mock-a','b','A simple regression with an intercept uses 22 observations. Total sum of squares is 150 and residual sum of squares is 50. Its ANOVA F-statistic for a zero slope is:',[
 ['40.00.','Erklärte Quadratsumme 100; F = (100/1)/(50/20).'],['60.00.','Das verwendet die totale statt der erklärten Quadratsumme im Zähler.'],['2.00.','Das dividiert die Quadratsummen ohne die Residuenfreiheitsgrade.']
 ],0,[eq('F=\\frac{(150-50)/1}{50/(22-2)}=40','Die Referenzfreiheitsgrade sind 1 und 20.','F','ANOVA-Teststatistik für die Nullsteigung.')],'coefficient-tests'),
 q('a2','mock-a','d','Sample covariance of asset and market excess returns is 0.024, and market excess-return variance is 0.016, both in consistent decimal-return units. The estimated beta is:',[
 ['0.667.','Das vertauscht Kovarianz und Marktvarianz.'],['1.500.','0,024/0,016.'],['0.190.','Das dividiert durch die Standardabweichung statt durch die Varianz.']
 ],1,[eq('\\hat\\beta=0{,}024/0{,}016=1{,}5','Der Nenner ist die Varianz der erklärenden Markt-Überschussrendite.','\\hat\\beta','Geschätztes Asset-Beta.')],'capm'),
 q('b1','mock-b','c','A simple normal-error model predicts Y = 10 at the sample mean of X. It has n = 18 and residual standard error 2. Given a critical t-value of 2.12, the upper 95% prediction limit for one new observation is closest to:',[
 ['11.00.','Das verwendet nur den Standardfehler des Mittelwerts.'],['14.24.','Das lässt die Parameterschätzunsicherheit weg.'],['14.36.','10 + 2,12 × 2 × √(1 + 1/18).']
 ],2,[eq('U=10+2{,}12\\cdot2\\sqrt{1+1/18}\\approx14{,}3562','Am X-Mittel fällt der Abstandsterm weg, nicht aber die zusätzliche Eins für den zukünftigen Fehler.','U','Obere Grenze des Einzelprognoseintervalls.')],'prediction'),
 q('b2','mock-b','b','Keeping residual standard error unchanged, a larger centered sum of squared X deviations results in:',[
 ['a smaller conventional standard error of the slope.','Sxx steht unter der Wurzel im Nenner des Standardfehlers.'],['a larger conventional standard error of the slope.','Das kehrt die Abhängigkeit um.'],['proof of a causal relationship.','Mehr X-Variation liefert unter dem Modell mehr Präzision, keine Kausalitätsidentifikation.']
 ],0,['Die Aussage gilt bei passenden gleichen Modellannahmen. Ein extremer fehlerhafter X-Wert kann die Formel numerisch verändern, ohne das Modell verlässlicher zu machen.'],'coefficient-tests')
];
