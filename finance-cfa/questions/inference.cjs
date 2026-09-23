const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('inf-'+id,'inference','quant',pool,los,stem,options,correct,solution,{section});
const eq=(tex,reading,symbol,meaning)=>F(tex,reading,[[symbol,meaning]]);
module.exports=[
 q('01','practice','a','An analyst randomly samples companies within every industry, then weights industry means by their population shares. This is best described as:',[
 ['stratified random sampling.','Zufallsauswahl innerhalb aller vorab definierten Schichten und passende Populationsgewichte.'],['cluster sampling.','Dabei werden zunächst ganze Gruppen ausgewählt; nicht jede Gruppe wird zwingend repräsentiert.'],['convenience sampling.','Leichte Verfügbarkeit ist hier nicht die Auswahlregel.']
 ],0,['Schichtung kann die Präzision erhöhen, wenn Unternehmen innerhalb der Schichten relativ ähnlich sind. Die Gewichte müssen zum Zielparameter passen.'],'sampling'),
 q('02','practice','a','Small firms are 70% of a population and large firms 30%. An equal-size sample from each group has mean returns of 4% and 12%, respectively. The population-weighted mean estimate is:',[
 ['8.00%.','Das gewichtet die Gruppen wie in der Stichprobe statt wie in der Population.'],['6.40%.','0,70 × 4 % + 0,30 × 12 %.'],['9.60%.','Das vertauscht die Populationsanteile.']
 ],1,[eq('\\hat\\mu=0{,}7(4\\%)+0{,}3(12\\%)=6{,}4\\%','Jeder Gruppenmittelwert wird mit dem Anteil seiner Gruppe in der Zielpopulation gewichtet.','\\hat\\mu','Geschätzter Populationsmittelwert.')],'sampling'),
 q('03','practice','a','A database includes only funds still operating today. Increasing the sample from 500 to 5,000 surviving funds will most likely:',[
 ['eliminate survivorship bias.','Mehr Beobachtungen derselben verzerrten Auswahl beseitigen den Auswahlfehler nicht.'],['guarantee an unbiased population mean.','Die ausgelassenen geschlossenen Fonds können systematisch andere Ergebnisse aufweisen.'],['leave the underlying selection bias unresolved.','Eine größere Stichprobe kann Zufallsfehler verringern, während systematischer Auswahlfehler bestehen bleibt.']
 ],2,['Die Datengrundlage muss auch ausgeschiedene Fonds und deren damalige verfügbare Ergebnisse angemessen erfassen.'],'sampling'),
 q('04','practice','a','Independent identically distributed returns have population standard deviation 18%. For a sample of 36 observations, the standard error of the mean is:',[
 ['3.00%.','18 % / √36 = 3 %.'],['0.50%.','Das dividiert durch n statt durch √n.'],['18.00%.','Das ist die Streuung einzelner Renditen, nicht die des Mittelwerts.']
 ],0,[eq('SE=18\\%/\\sqrt{36}=3\\%','Die Varianz des Mittels ist die Einzelvarianz geteilt durch n; nach dem Wurzelziehen entsteht √n im Nenner.','SE','Standardfehler des Stichprobenmittelwerts.')],'estimators'),
 q('05','practice','a','Under independent sampling with unchanged population variance, reducing the standard error of a mean from 2% to 1% requires sample size to be multiplied by:',[
 ['2.','Der Standardfehler fällt nur mit der Quadratwurzel der Fallzahl.'],['4.','Eine Halbierung verlangt viermal so viele unabhängige Beobachtungen.'],['0.25.','Weniger Daten erhöhen den Standardfehler.']
 ],1,[eq('n_2/n_1=(SE_1/SE_2)^2=(2/1)^2=4','Diese Skalierung setzt dasselbe Varianzniveau und eine geeignete unabhängige Stichprobe voraus.','n_1,n_2,SE_1,SE_2','Alte/neue Stichprobengrößen und zugehörige Standardfehler.')],'clt'),
 q('06','practice','a','For independent identically distributed observations with finite variance, the central limit theorem concerns the large-sample distribution of:',[
 ['each individual observation becoming normal.','Die Einzelverteilung verändert sich nicht durch mehr Beobachtungen.'],['the population becoming symmetric.','Die Population bleibt dieselbe.'],['the appropriately standardized sample mean.','Die Verteilung wiederholt erhobener standardisierter Mittelwerte nähert sich der Standardnormalverteilung.']
 ],2,['Endliche Varianz und passende Abhängigkeitsbedingungen sind wesentlich; eine feste Fallzahl wie 30 ist keine universelle Garantie.'],'clt'),
 q('07','practice','a b','A normal-population sample has n = 16, mean 5%, and sample standard deviation 4%. Given t(0.975,15) = 2.131, the lower endpoint of the two-sided 95% confidence interval for the mean is:',[
 ['2.869%.','5 % − 2,131 × (4 %/4).'],['−3.524%.','Das verwendet die Einzelstreuung statt des Standardfehlers.'],['3.040%.','Das verwendet 1,96 statt des angegebenen t-Quantils.']
 ],0,[eq('L=5\\%-2{,}131\\frac{4\\%}{\\sqrt{16}}=2{,}869\\%','Unbekannte Populationsstreuung wird durch s geschätzt; unter Normalität gilt die t-Referenz mit 15 Freiheitsgraden.','L','Untere Konfidenzgrenze des Populationsmittelwerts.')],'intervals'),
 q('08','practice','a','A frequentist 95% confidence-interval procedure is correctly interpreted as a procedure that:',[
 ['contains 95% of individual future returns.','Das verwechselt ein Mittelwertintervall mit einem Vorhersageintervall.'],['covers the fixed population parameter in 95% of repeated samples under its assumptions.','Die Überdeckungsrate bezieht sich auf das wiederholte Verfahren.'],['assigns a 95% posterior probability to the realized interval.','Das wäre eine bayesianische Aussage mit zusätzlichem Prior und Modell.']
 ],1,['Nach Beobachtung ist das konkrete Intervall fest. Die frequentistische 95-%-Aussage beschreibt die langfristige Zuverlässigkeit der Intervallregel.'],'intervals'),
 q('09','practice','b','An analyst decides to use a one-sided test only after seeing which direction gives the smaller p-value. The primary problem is:',[
 ['one-sided tests are never permissible.','Sie sind für vorab festgelegte gerichtete Fragestellungen möglich.'],['the sample mean cannot be calculated.','Die Rechenbarkeit des Mittels ist nicht das Problem.'],['the stated significance level no longer reflects the complete selection rule.','Die Auswahl der günstigeren Richtung muss in der Fehlerbeurteilung berücksichtigt werden.']
 ],2,['Hypothese, Richtung und Niveau werden vor der Ergebnisprüfung festgelegt. Nachträgliche Auswahl kann die tatsächliche Fehlalarmrate erhöhen.'],'test-logic'),
 q('10','practice','b','A two-sided test produces p = 0.03. At a preselected 5% significance level, the analyst should:',[
 ['reject the null hypothesis.','0,03 ist kleiner als 0,05.'],['accept the null as certainly true.','Der Test liefert gerade Evidenz gegen H₀ und grundsätzlich keinen Wahrheitsbeweis.'],['conclude that the null has a 3% probability of being true.','Ein p-Wert ist keine posteriori Wahrscheinlichkeit der Nullhypothese.']
 ],0,['Der p-Wert bezieht sich auf mindestens so extreme Testergebnisse unter dem Nullmodell. Die Entscheidung ist an das vorab gewählte Niveau gebunden.'],'p-values'),
 q('11','practice','b','A researcher rejects a null hypothesis that is actually true. This is:',[
 ['a Type II error.','Fehler II ist das Nichtverwerfen einer falschen Nullhypothese.'],['a Type I error.','Ein falscher Alarm: die wahre Nullhypothese wird verworfen.'],['the power of the test.','Power ist die Wahrscheinlichkeit, unter einer bestimmten Alternative richtig zu verwerfen.']
 ],1,['Das Signifikanzniveau begrenzt unter den Modellannahmen die Wahrscheinlichkeit dieses Fehlers, nicht die Wahrscheinlichkeit irgendeines Fehlers nach jeder konkreten Entscheidung.'],'errors-power'),
 q('12','practice','b','A test has a Type II error probability of 0.25 at a specified alternative. Its power at that alternative is:',[
 ['25%.','Das ist β, die Wahrscheinlichkeit des verpassten Effekts.'],['95%.','Power ist nicht generell 1 minus Signifikanzniveau.'],['75%.','1 − β = 0,75.']
 ],2,[eq('\\pi=1-0{,}25=0{,}75','Power muss sich auf eine konkret bestimmte Alternative beziehen.','\\pi','Teststärke bei der angegebenen Alternative.')],'errors-power'),
 q('13','practice','b','With sample size and true effect fixed, lowering a test’s significance level generally:',[
 ['reduces Type I error and reduces power.','Ein strengerer Ablehnungsbereich erzeugt weniger falsche Alarme, verpasst aber mehr echte Effekte.'],['reduces both Type I and Type II error.','Ohne zusätzliche Information sind beide Fehlerarten nicht auf diese Weise gleichzeitig reduzierbar.'],['increases Type I error.','Das Niveau wird gerade gesenkt.']
 ],0,['Die Aussage gilt bei sonst gleicher Testkonstruktion. Eine größere geeignete Stichprobe kann den Zielkonflikt verbessern.'],'errors-power'),
 q('14','practice','b c','The same 12 accounts are measured before and after a change. A suitable mean-effect test under normal independent account-level differences primarily uses:',[
 ['an unpaired test treating all 24 values as independent.','Messungen desselben Kontos können zusammenhängen; die Paarung wird ignoriert.'],['a one-sample t-test of the 12 within-account differences.','Die Einheit ist das Konto; aus jedem Paar entsteht eine Differenz.'],['an F-test of equal variances.','Der Zielparameter ist der mittlere Unterschied, nicht das Varianzverhältnis.']
 ],1,['Die Streuung der Differenzen berücksichtigt die Verbindung der beiden Messungen. Unabhängigkeit wird zwischen Konten benötigt.'],'paired'),
 q('15','practice','b c','For n = 9 independent paired differences, the mean is 3 and the sample standard deviation is 4.5. Testing a population mean difference of zero gives a t-statistic of:',[
 ['0.667.','Das dividiert nur durch die Standardabweichung.'],['6.000.','Das dividiert die Standardabweichung durch n statt √n.'],['2.000.','3/(4,5/√9) = 2.']
 ],2,[eq('t=\\frac{3}{4{,}5/\\sqrt9}=2','Die Referenz besitzt unter normalverteilten unabhängigen Differenzen acht Freiheitsgrade.','t','Beobachtete Teststatistik des gepaarten Mittelwerttests.')],'paired'),
 q('16','practice','b c','Two independent samples have (n₁, mean₁, s₁) = (25, 9, 10) and (n₂, mean₂, s₂) = (16, 6, 4). The Welch statistic for equal population means is closest to:',[
 ['1.342.','(9 − 6)/√(100/25 + 16/16) = 3/√5.'],['0.279.','Das ignoriert die Fallzahlen in den Varianzbeiträgen.'],['3.000.','Das verwendet den Unterschied ohne den vollständigen Standardfehler.']
 ],0,[eq('t=\\frac{9-6}{\\sqrt{10^2/25+4^2/16}}\\approx1{,}34164','Beide Gruppen tragen die Varianz ihres Mittelwerts zum Standardfehler der Differenz bei; Gruppe 1 hier viermal so viel wie Gruppe 2.','t','Welch-Teststatistik.')],'two-samples'),
 q('17','practice','b c','Compared with the pooled two-sample t-test, the Welch test does not require:',[
 ['independent groups.','Die hier verwendete Welch-Form setzt unabhängige Gruppen voraus.'],['equal population variances.','Die Gruppenvarianzen werden separat in Standardfehler und Freiheitsgraden berücksichtigt.'],['a clearly defined mean difference.','Auch Welch prüft eine Aussage zum Mittelwertunterschied.']
 ],1,['Gleiche Varianzen rechtfertigen einen gemeinsamen gepoolten Schätzer. Bei ungleichen Varianzen kann dessen Testniveau insbesondere bei ungleichen Gruppengrößen problematisch sein.'],'two-samples'),
 q('18','practice','b c','A sample of 17 independent normal observations has standard deviation 15%. Testing a population standard deviation of 12% uses a chi-square statistic of:',[
 ['20.0000.','Das verwendet das Verhältnis der Standardabweichungen statt der Varianzen.'],['26.5625.','Das verwendet n statt n−1.'],['25.0000.','16 × 0,15²/0,12² = 25.']
 ],2,[eq('\\chi^2=(17-1)\\frac{0{,}15^2}{0{,}12^2}=25','Die Referenz hat 16 Freiheitsgrade.','\\chi^2','Teststatistik für die behauptete Populationsvarianz.')],'variance-tests'),
 q('19','practice','b c','Two independent normal samples have standard deviations of 18% and 12%. With the first variance in the numerator, the F-statistic for equal variances is:',[
 ['2.25.','(18/12)² = 2,25.'],['1.50.','Das ist das Verhältnis der Standardabweichungen.'],['0.444.','Das kehrt den vorgeschriebenen Quotienten um.']
 ],0,[eq('F=0{,}18^2/0{,}12^2=2{,}25','Zähler- und Nennerfreiheitsgrade müssen in derselben Gruppenreihenfolge stehen.','F','Varianzquotient.')],'variance-tests'),
 q('20','practice','b c','For 27 independent observations from a bivariate normal population, the sample Pearson correlation is 0.40. The t-statistic for zero population correlation is closest to:',[
 ['2.268.','Das verwendet n statt n−2.'],['2.182.','0,4 × √(25/0,84).'],['0.436.','Das lässt den Fallzahlbeitrag weg.']
 ],1,[eq('t=0{,}4\\sqrt{\\frac{27-2}{1-0{,}4^2}}\\approx2{,}18218','Die Referenz besitzt 25 Freiheitsgrade; eine signifikante Korrelation beweist keine Kausalität.','t','Teststatistik für die Nullhypothese ρ = 0.')],'correlation-tests'),
 q('21','practice','c','For six pairs without tied ranks, the sum of squared rank differences is 10. Spearman rank correlation is closest to:',[
 ['0.2857.','Das ist der von eins abzuziehende Korrekturterm.'],['0.9524.','Das lässt den Faktor 6 im Zähler weg.'],['0.7143.','1 − 6 × 10/[6 × (36 − 1)].']
 ],2,[eq('r_s=1-\\frac{6\\cdot10}{6(6^2-1)}=\\frac57\\approx0{,}714286','Die Kurzform setzt voraus, dass keine Bindungen vorliegen.','r_s','Spearman-Rangkorrelation.')],'correlation-tests'),
 q('22','practice','c','A Mann–Whitney test compares two independent samples. Without additional same-shape assumptions, it is best interpreted as evidence about:',[
 ['a rank/distribution difference rather than necessarily only a difference in medians.','Unterschiede in Form und Streuung können eine reine Medianinterpretation verhindern.'],['equal population variances only.','Das ist nicht der Zielparameter des Rangsummentests.'],['a paired mean difference.','Mann–Whitney verwendet unabhängige Gruppen und Ranginformation.']
 ],0,['Die Fragestellung bestimmt, ob ein Verteilungstest zur wirtschaftlichen Aussage passt. „Nichtparametrisch“ heißt nicht „beliebiger Test jeder Lagebehauptung“.'],'rank-tests'),
 q('23','practice','c','Eight independent nonzero paired differences are all positive. Under the sign-test null of equally likely signs, the exact two-sided p-value is:',[
 ['0.390625%.','Das ist nur die Wahrscheinlichkeit der acht positiven Vorzeichen.'],['0.781250%.','Die ebenso extreme Konstellation acht negativer Vorzeichen wird mitgezählt.'],['50.000000%.','Das ist die Wahrscheinlichkeit eines einzelnen positiven Vorzeichens.']
 ],1,[eq('p=2(0{,}5)^8=0{,}0078125','Unter H₀ sind die 256 Vorzeichenfolgen gleich wahrscheinlich; zwei sind mindestens so extrem.','p','Exakter zweiseitiger p-Wert.')],'rank-tests'),
 q('24','practice','b c','An independence table has 3 rows and 4 columns, with no fitted additional parameters. The asymptotic chi-square reference distribution has how many degrees of freedom?',[
 ['12.','Das ist die Zahl der Zellen.'],['7.','Das addiert die Kategorienanzahlen.'],['6.','(3 − 1) × (4 − 1).']
 ],2,[eq('df=(3-1)(4-1)=6','Die geschätzten Randanteile beschränken die unabhängigen Zellabweichungen.','df','Freiheitsgrade des Unabhängigkeitstests.')],'contingency'),
 q('25','practice','b c','In a sample of 200 independent cases, a table row totals 80 and a column totals 50. Under independence, their intersecting cell has expected count:',[
 ['20.','80 × 50/200 = 20.'],['40.','Das berücksichtigt den Spaltenanteil nicht richtig.'],['130.','Randhäufigkeiten werden nicht addiert.']
 ],0,[eq('E=80\\cdot50/200=20','Die 80 Fälle der Zeile werden im Gesamtspaltenanteil 50/200 auf diese Spalte verteilt.','E','Erwartete Zellhäufigkeit unter Unabhängigkeit.')],'contingency'),
 q('26','practice','b','A return enhancement of 0.02% per month is statistically significant, but implementation costs 0.05% per month. Ignoring other effects, the estimated net enhancement is:',[
 ['0.03%.','Die Reihenfolge von Nutzen minus Kosten ist vertauscht.'],['−0.03%.','0,02 % − 0,05 % = −0,03 %.'],['0.07%.','Kosten werden nicht als zusätzlicher Ertrag addiert.']
 ],1,[eq('\\Delta r_{net}=0{,}02\\%-0{,}05\\%=-0{,}03\\%','Statistische Nachweisbarkeit ersetzt keine Prüfung der wirtschaftlichen Größenordnung.','\\Delta r_{net}','Geschätzte zusätzliche Nettorendite pro Monat.')],'interpretation'),
 q('27','practice','b','Ten independent tests each examine a true null at significance level 1%. The probability of at least one rejection is closest to:',[
 ['1.00%.','Das ignoriert die zehn Gelegenheiten zu einem falschen Alarm.'],['10.00%.','10 × 1 % ist hier nicht die exakte Vereinigungswahrscheinlichkeit.'],['9.56%.','1 − 0,99¹⁰ ≈ 0,095618.']
 ],2,[eq('P(\\text{mindestens eine Verwerfung})=1-0{,}99^{10}\\approx9{,}56179\\%','Zuerst die Wahrscheinlichkeit berechnen, dass kein Test verwirft; dann von eins abziehen.','P','Wahrscheinlichkeit unter den angegebenen unabhängigen wahren Nullhypothesen.')],'interpretation'),
 q('28','practice','a b','An otherwise unchanged two-sided confidence interval uses a higher confidence level. It becomes:',[
 ['wider because the critical quantile increases.','Höhere Überdeckung erfordert einen größeren Sicherheitsabstand um denselben Schätzwert.'],['narrower because the estimate becomes more precise.','Das Konfidenzniveau fügt keine Information hinzu.'],['unchanged because the sample size is fixed.','Auch der kritische Wert bestimmt die Breite.']
 ],0,['Intervallbreite hängt sowohl von Standardfehler als auch von kritischem Quantil ab. Die Wahl von 99 % statt 95 % ändert den Standardfehler nicht.'],'intervals'),
 q('a1','mock-a','b c','Two independent normal samples have sizes 10 and 14, and sample variances 9 and 16. Assuming equal population variances, the pooled variance estimate is closest to:',[
 ['12.500.','Das ist das ungewichtete Mittel der Varianzen.'],['13.000.','Das verwendet n-Gewichte statt der Freiheitsgrade.'],['13.136.','(9 × 9 + 13 × 16)/22.']
 ],2,[eq('s_p^2=\\frac{(10-1)9+(14-1)16}{10+14-2}=\\frac{289}{22}\\approx13{,}13636','Jede Varianz wird mit ihren Freiheitsgraden gewichtet; der gemeinsame Schätzer hat 22 Freiheitsgrade.','s_p^2','Gepoolte Varianz unter der Gleichheitsannahme.')],'two-samples'),
 q('a2','mock-a','b','A test fails to reject a null hypothesis at 5%. Which conclusion is most appropriate?',[
 ['The available evidence is insufficient for rejection under this test rule.','Nichtverwerfen bedeutet keine hinreichende Evidenz gegen H₀ bei der festgelegten Regel.'],['The null hypothesis has been proven true.','Ein verpasster tatsächlicher Effekt bleibt möglich.'],['The true effect must be economically unimportant.','Ein unpräzise gemessener Effekt kann wirtschaftlich groß sein.']
 ],0,['Effektschätzung und Konfidenzintervall können zeigen, ob die Daten auch bedeutende Alternativen noch zulassen.'],'interpretation'),
 q('b1','mock-b','a b','A normal-population sample has n = 25 and sample standard deviation 5%. Given t(0.975,24) = 2.064, the total width of its 95% confidence interval for the mean is:',[
 ['2.064 percentage points.','Das ist nur die halbe Breite.'],['4.128 percentage points.','Zweimal 2,064 × (5/√25).'],['20.640 percentage points.','Das verwendet s statt des Standardfehlers.']
 ],1,[eq('W=2\\cdot2{,}064\\cdot\\frac{5\\%}{\\sqrt{25}}=4{,}128\\%','Das Intervall reicht eine Fehlerspanne unter und eine über den Mittelwert; die Gesamtbreite wird in Prozentpunkten angegeben.','W','Gesamte Breite des Mittelwert-Konfidenzintervalls.')],'intervals'),
 q('b2','mock-b','c','An analyst has ordinal rankings for two variables and seeks evidence of a monotonic association. The most directly suitable measure is:',[
 ['a paired t-statistic.','Das setzt quantitative Differenzen mit einem sinnvollen Mittelwertziel voraus.'],['a chi-square variance ratio.','Das ist weder eine Rangkorrelation noch eine passende Form des Varianztests.'],['Spearman rank correlation.','Sie misst die lineare Übereinstimmung der Ränge und damit monotone Ordnung.']
 ],2,['Die Signifikanzbewertung muss zur Fallzahl und zu etwaigen Rangbindungen passen. Rangkorrelation ist kein Kausalitätsnachweis.'],'correlation-tests')
];
