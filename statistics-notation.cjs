// Explicit notation for the original interactive statistics chapters.
const {chapter:C}=require('./finance-notation/author.cjs'),T=String.raw;
module.exports={
deskriptiv:C('',T`
x|x_i,\ \bar x=Einzelner Datenwert i und arithmetischer Mittelwert aller n Werte; gleiche Einheit wie die Beobachtungen.
n i=Anzahl der Datenwerte und Laufindex von eins bis n.
sigma s|\sigma^2,\ \sigma,\ s^2,\ s=Varianz und Standardabweichung des vollständig beschriebenen Datensatzes (Division durch n) sowie Stichprobenschätzungen (Varianz mit n − 1). Varianz hat die quadrierte Dateneinheit.
Q IQR|Q_1,\ Q_3,\ \mathrm{IQR}=Erstes und drittes Quartil und ihr Abstand; IQR umfasst die mittleren 50 % der geordneten Werte. Die Anderthalbfach-Regel markiert mögliche Ausreißer, keine automatisch falschen Daten.
mu|\mu=Populationsmittelwert im Variationskoeffizienten sigma/mu; für eine sinnvolle relative Streuung muss er positiv und von null verschieden sein.
`),
konzentration:C('',T`
G=Gini-Koeffizient als dimensionslose Konzentrationskennzahl.
A=Fläche zwischen Gleichverteilungsdiagonale und Lorenzkurve in auf 0 bis 1 normierten Achsen; hier keine Geldsumme.
x|x_i,\ x_{(i)}=Einkommen der Person i und Einkommen an Rang i nach aufsteigender Sortierung. Die Formel setzt nichtnegative Einkommen und eine positive Gesamtsumme voraus.
n i=Zahl gleich gewichteter Beobachtungen und Rangindex von eins bis n.
`),
wregeln:C('',T`
P|P(A),\ P(A\mid B)=Wahrscheinlichkeit von A beziehungsweise von A unter der Bedingung B; für die bedingte Fassung muss P(B) positiv sein.
A B=Ereignisse, also Mengen möglicher Ausgänge; ein Balken über A bezeichnet das Gegenereignis.
Omega empty|\Omega,\ \varnothing=Gesamter Ergebnisraum und leere Menge beziehungsweise unmögliches Ereignis.
sets|A\cap B,\ A\cup B=Schnittmenge (beide Ereignisse) und Vereinigung (mindestens eines der Ereignisse).
n=Personenzahl im Geburtstagsmodell; die Rechnung nimmt 365 gleich wahrscheinliche, unabhängige Geburtstage an.
`),
kombinatorik:C('',T`
n k=Anzahl verfügbarer verschiedener Elemente und Anzahl gezogener beziehungsweise ausgewählter Elemente.
factorial|n!=Fakultät: Produkt aller ganzen Zahlen von eins bis n; definitionsgemäß ist 0! = 1.
P|P(n,k)=Anzahl geordneter Auswahlen ohne Wiederholung; hier keine Wahrscheinlichkeit.
choose|\binom nk=Binomialkoeffizient, Zahl ungeordneter k-elementiger Auswahlen aus n Elementen ohne Wiederholung.
prob|P(A)=Wahrscheinlichkeit des Ereignisses A. Günstige Fälle geteilt durch mögliche Fälle gilt bei gleich wahrscheinlichen Elementarereignissen.
`),
bayes:C('',T`
P|P(A\mid B),\ P(A\cap B)=Wahrscheinlichkeit von A bei bekanntem B und Wahrscheinlichkeit des gemeinsamen Auftretens beider Ereignisse.
K G plus|K,\ G,\ +=Ereignisse krank, gesund und positives Testergebnis im Diagnosemodell. G ist das Gegenereignis zu K.
rates|P(K),\ P(+\mid K),\ P(+\mid G)=Prävalenz, Sensitivität und Falsch-positiv-Rate; letztere ist eins minus Spezifität. Alle werden als Dezimalwahrscheinlichkeiten eingesetzt.
posterior|P(K\mid +),\ P(+)=Gesuchte Erkrankungswahrscheinlichkeit nach positivem Test und gesamte Wahrscheinlichkeit eines positiven Tests.
A B=Allgemeine Ereignisse. In Spam-, DNA- und Türbeispielen stehen ausgeschriebene Ereignisnamen an ihrer Stelle; die Richtung des Bedingungsstrichs bleibt entscheidend.
`),
zufall:C('',T`
X Y=Zufallsvariablen; sie ordnen jedem zufälligen Ausgang einen numerischen Wert zu.
x|x_i=Einzelner möglicher Wert beziehungsweise beobachteter Wert von X.
P|P(X=x_i)=Wahrscheinlichkeit des diskreten Werts x_i; die Summe aller Einzelwahrscheinlichkeiten ist eins.
E Var|E(X),\ \operatorname{Var}(X)=Erwartungswert und Varianz. E(X²) ist der Erwartungswert des Quadrats, [E(X)]² das Quadrat des Erwartungswerts; diese sind im Allgemeinen verschieden.
f|f(x)=Wahrscheinlichkeitsdichte einer stetigen Größe; Wahrscheinlichkeit ergibt sich aus Fläche, nicht aus einer einzelnen Dichtehöhe.
a b=Feste Skalierung und Verschiebung der Zufallsvariablen; a² skaliert die Varianz, b ändert sie nicht.
`),
binom:C('',T`
X k=Zufällige Anzahl der Erfolge und die konkrete ganze Trefferzahl, deren Wahrscheinlichkeit berechnet wird.
n=Feste Anzahl unabhängiger Versuche.
p=In jedem Versuch gleiche Erfolgswahrscheinlichkeit, zwischen null und eins; 1 − p ist die Misserfolgswahrscheinlichkeit.
choose|\binom nk=Anzahl der Möglichkeiten, die k Erfolge auf n Versuchspositionen zu verteilen; n!/(k!(n−k)!).
P|P(X=k),\ P(X\ge1)=Wahrscheinlichkeit von genau k Treffern und von mindestens einem Treffer.
`),
poisson:C('',T`
X Y=Anzahl der Ereignisse im betrachteten Zeit- oder Raumintervall. Die Summe zweier Poisson-Variablen ist unter Unabhängigkeit wieder Poisson-verteilt.
k=Konkrete nichtnegative ganze Ereigniszahl.
lambda|\lambda,\ \lambda_1,\ \lambda_2=Erwartete Ereigniszahl im Intervall; bei einer konstanten Rate gleich Rate mal Intervalllänge. lambda ist hier ein Erwartungswert, keine Wahrscheinlichkeit.
e factorial|e,\ k!=Eulersche Zahl ungefähr 2,71828 und Fakultät der Ereigniszahl, mit 0! = 1.
P|P(X=k)=Wahrscheinlichkeit von genau k Ereignissen.
`),
normal:C('',T`
X x=Normalverteilte Zufallsvariable und ein konkreter Wert auf ihrer Skala.
mu sigma|\mu,\ \sigma=Erwartungswert und positive Standardabweichung in derselben Einheit wie X; sigma² ist die Varianz.
f|f(x)=Dichtehöhe am Wert x. Wahrscheinlichkeiten ergeben sich aus Flächen unter dieser Kurve.
Z|Z=Standardisierte Variable (X − mu)/sigma; sie ist dimensionslos und standardnormalverteilt.
N|N(0,1)=Normalverteilung mit Mittelwert null und Varianz eins.
pi e|\pi,\ e=Kreiszahl ungefähr 3,14159 und Eulersche Zahl ungefähr 2,71828; feste mathematische Konstanten.
`),
weitere:C('',T`
X k=Zufällige Treffer- beziehungsweise Wartezahl und ihr konkreter Wert; beim geometrischen Modell zählt k alle Versuche bis einschließlich des ersten Erfolgs.
p=Erfolgswahrscheinlichkeit eines unabhängigen Einzelversuchs im geometrischen Modell.
N M n=Gesamtzahl der Objekte, Zahl der markierten Objekte darin und Zahl der Ziehungen ohne Zurücklegen im hypergeometrischen Modell.
a b=Untere und obere Grenze der stetigen Gleichverteilung; die Dichte 1/(b − a) gilt nur innerhalb dieses Intervalls und sonst ist sie null.
lambda|\lambda=Positive Ereignisrate des Exponentialmodells, in Ereignissen je Zeiteinheit.
T t=Zufällige Wartezeit und konkreter Wartezeitschwellenwert; P(T > t) ist die Wahrscheinlichkeit längeren Wartens.
f P e|f(x),\ P(\cdot),\ e=Dichte, Wahrscheinlichkeit und Eulersche Zahl als Basis der Exponentialfunktion.
`),
lln:C('',T`
h|h_n=Relative Trefferhäufigkeit nach n Versuchen.
k|k_n=Bis Versuch n beobachtete Anzahl der Treffer.
n=Anzahl durchgeführter unabhängiger Versuche.
p=Wahre konstante Erfolgswahrscheinlichkeit je Versuch.
epsilon|\varepsilon=Beliebige positive Toleranz für den Abstand zwischen beobachteter Häufigkeit und wahrer Wahrscheinlichkeit.
P|P(|h_n-p|\ge\varepsilon)=Wahrscheinlichkeit, dass die Abweichung mindestens die Toleranz erreicht; die gezeigte Schranke beschreibt keine garantierte Fehlergrenze eines einzelnen Verlaufs.
`),
clt:C('',T`
X|X_i,\ \bar X=Unabhängige Einzelbeobachtung i und Mittelwert der n Beobachtungen.
mu sigma|\mu,\ \sigma^2,\ \sigma=Erwartungswert, endliche Varianz und Standardabweichung der gleich verteilten Einzelbeobachtungen.
n=Stichprobenumfang; sigma geteilt durch Wurzel n ist der Standardfehler des Mittelwerts.
N|N(\mu,\sigma^2/n)=Näherungsverteilung des Mittelwerts mit Mittelwert mu und Varianz sigma²/n. Der zweite Parameter ist eine Varianz, nicht die Standardabweichung.
`),
schaetzen:C('',T`
theta|\theta,\ \hat\theta=Unbekannter wahrer Parameter und sein aus Zufallsdaten berechneter Schätzer; das Dach markiert die Schätzung.
MSE Bias|\mathrm{MSE},\ \operatorname{Bias}(\hat\theta)=Mittlerer quadratischer Schätzfehler und systematische Verzerrung E(theta-Dach) minus theta. MSE zerfällt in Schätzervarianz plus quadrierte Verzerrung.
E Var|E[\cdot],\ \operatorname{Var}(\hat\theta)=Erwartungswert bei wiederholten Stichproben und Varianz des Schätzers.
L ell|L(p),\ \ell(p)=Likelihood als Funktion des möglichen Parameters p und deren natürlicher Logarithmus. Ein parameterunabhängiger Binomialfaktor wurde hier weggelassen.
p k n=Erfolgswahrscheinlichkeit, beobachtete Trefferzahl und Gesamtzahl unabhängiger Versuche. ln p und ln(1 − p) werden an den Randpunkten über die passenden Grenzwerte behandelt.
`),
pruefvert:C('',T`
Z|Z,\ Z_i=Standardnormalverteilte Zufallsvariablen. Die Quadratsumme setzt unabhängige Z_i voraus.
chi|\chi_k^2=Chi-Quadrat-verteilte Größe mit k Freiheitsgraden, gebildet aus k unabhängigen standardnormalen Quadraten.
t|t_k=Student-t-verteilte Größe mit k Freiheitsgraden; Z im Zähler ist unabhängig von der Chi-Quadrat-Größe im Nenner.
F|F_{d_1,d_2}=F-verteilte Größe als Verhältnis zweier unabhängiger, durch ihre Freiheitsgrade geteilter Chi-Quadrat-Größen.
k d|k,\ d_1,\ d_2=Positive Freiheitsgrade der jeweiligen Verteilungen; im F-Modell getrennt für Zähler und Nenner.
`),
konfidenz:C('',T`
x|\bar x=Beobachteter Stichprobenmittelwert.
sigma s|\sigma,\ s=Bekannte Populationsstandardabweichung beziehungsweise aus der Stichprobe geschätzte Standardabweichung.
n=Anzahl unabhängiger Beobachtungen.
alpha|\alpha=Irrtumsniveau; 1 − alpha ist die langfristige Überdeckungsrate des Intervallverfahrens.
z t|z_{1-\alpha/2},\ t_{n-1;1-\alpha/2}=Kritisches Quantil der Standardnormal- beziehungsweise Student-t-Verteilung. Beim t-Quantil benennt n − 1 die Freiheitsgrade.
`),
bootstrap:C('',T`
n B=Größe der ursprünglichen Stichprobe und Zahl der Bootstrap-Wiederholungen.
theta|\hat\theta,\ \hat\theta_b^*=Schätzung aus den Originaldaten und Schätzung aus der Bootstrap-Stichprobe b. Stern bezeichnet hier erneutes Ziehen mit Zurücklegen, kein optimales Portfolio.
SE=Bootstrap-Standardfehler: Standardabweichung der erneut berechneten Schätzwerte über die Wiederholungen.
`),
hypothese:C('',T`
z=Standardisierte Teststatistik: Abstand des Stichprobenmittels vom Nullhypothesenwert, gemessen in Standardfehlern.
x mu|\bar x,\ \mu_0=Beobachteter Mittelwert und unter der Nullhypothese behaupteter Populationsmittelwert.
sigma n|\sigma,\ n=Als bekannt angenommene Einzelstandardabweichung und Zahl unabhängiger Beobachtungen.
p=Zweiseitiger p-Wert der Teststatistik unter der Nullhypothese; keine Wahrscheinlichkeit, dass die Nullhypothese wahr ist.
Phi|\Phi(z)=Standardnormal-Verteilungsfunktion; der Betrag von z vereinigt die beiden symmetrischen Verteilungsränder.
`),
ttest:C('',T`
t=Teststatistik des ungepaarten t-Tests mit gepoolter Varianz; Nullhypothese ist hier gleiche Populationsmittelwerte.
x|\bar x_1,\ \bar x_2=Stichprobenmittelwerte der beiden unabhängigen Gruppen.
n|n_1,\ n_2=Stichprobenumfänge der beiden Gruppen.
s|s_1^2,\ s_2^2,\ s_p^2,\ s_p=Gruppen-Stichprobenvarianzen, gepoolte Varianz und deren Wurzel. Das Poolen setzt gleiche Populationsvarianzen voraus.
d=Cohens d, Mittelwertdifferenz relativ zur gepoolten Standardabweichung, dimensionslos; keine Teststatistik mit derselben Verteilung wie t.
`),
chiquadrat:C('',T`
chi|\chi^2=Chi-Quadrat-Teststatistik, Summe der skalierten quadratischen Abweichungen über die berücksichtigten Tabellenzellen.
O E|O_{ij},\ E_{ij}=Beobachtete und unter Unabhängigkeit erwartete Anzahl in Zeile i und Spalte j. E ist hier eine erwartete Zellhäufigkeit, nicht der Erwartungswertoperator.
n=Gesamtzahl der Beobachtungen in der Kontingenztabelle.
V=Cramérs V, dimensionsloses Zusammenhangsmaß; es skaliert die Teststatistik nach Fallzahl und kleinerer Tabellendimension.
dimensions|\min(r,c)-1=Kleinere Anzahl nichtleerer Zeilen r oder Spalten c minus eins; im Kapitel sind diese Dimensionen ausgeschrieben.
`),
anova:C('',T`
SS|SS_{\mathrm{gesamt}},\ SS_{\mathrm{zwischen}},\ SS_{\mathrm{innerhalb}}=Quadratsummen insgesamt, zwischen den Gruppenmitteln und innerhalb der Gruppen; jeweils in quadrierten Dateneinheiten.
F=ANOVA-Teststatistik: mittlere Quadratsumme zwischen Gruppen geteilt durch mittlere Quadratsumme innerhalb der Gruppen.
k N=Anzahl der Gruppen und Gesamtzahl aller Beobachtungen; k − 1 und N − k sind die jeweiligen Freiheitsgrade.
`),
nonparam:C('',T`
U=Mann-Whitney-U-Statistik in der dargestellten Orientierung, aus der Rangsumme der ersten Gruppe abgeleitet.
R|R_1=Summe der Ränge der Beobachtungen aus Gruppe eins in der gemeinsam sortierten Stichprobe.
n|n_1,\ n_2=Anzahlen der Beobachtungen in den beiden unabhängigen Gruppen.
z=Normalapproximation der standardisierten U-Statistik. Der gezeigte Varianzausdruck gilt ohne Bindungen; bei gleichen Werten ist eine Bindungskorrektur nötig.
`),
regression:C('',T`
x y|x_i,\ y_i,\ \bar x,\ \bar y=Beobachtete Wertepaare und ihre jeweiligen Mittelwerte.
r=Pearson-Korrelation, Kovarianz geteilt durch das Produkt der Stichprobenstandardabweichungen, dimensionslos.
Cov s|\operatorname{Cov}(x,y),\ s_x,\ s_y=Gemeinsame Stichprobenvariation und Standardabweichungen; gleiche Nennerkonvention verwenden.
a b=Achsenabschnitt und Steigung der Geraden. b hat die Einheit von y je Einheit x; a die Einheit von y.
yhat|\hat y=Von der Geraden vorhergesagter Zielwert, im Allgemeinen verschieden vom beobachteten y.
`),
ols:C('',T`
x y|x_i,\ y_i,\ \bar x,\ \bar y=Beobachtungspaar i und Stichprobenmittel der beiden Größen.
a b|a,\ b,\ a^*,\ b^*=Achsenabschnitt und Steigung einer Kandidatengeraden sowie deren durch OLS minimierende Werte mit Stern.
SSR|\mathrm{SSR}(a,b)=Summe quadrierter Residuen zur gewählten Geraden, in quadrierten y-Einheiten.
S|S_{xy},\ S_{xx}=Summe der zentrierten Kreuzprodukte beziehungsweise Summe der quadrierten x-Abweichungen vom Mittelwert.
e|e_i=Residuum der Beobachtung i: beobachteter y-Wert minus angepasster Wert. Die beiden Orthogonalitätsgleichungen gelten für die OLS-Lösung mit Achsenabschnitt.
`),
rsq:C('',T`
y|y_i,\ \hat y_i,\ \bar y=Beobachteter Zielwert, durch das Modell angepasster Wert und Mittelwert der Zielwerte.
SS|\mathrm{SST},\ \mathrm{SSE},\ \mathrm{SSR}=Hier SST = gesamte Quadratsumme, SSE = erklärte Quadratsumme und SSR = Residuenquadratsumme. Andere Lehrbücher vertauschen SSE und SSR; maßgeblich ist diese Kapitelkonvention.
R|R^2,\ \bar R^2=Bestimmtheitsmaß und um Freiheitsgrade korrigiertes Bestimmtheitsmaß; der Balken kennzeichnet hier eine Korrektur, keinen einfachen Mittelwert.
n k=Zahl der Beobachtungen und Zahl der Regressoren ohne Achsenabschnitt.
F=Teststatistik des einfachen Regressionsmodells mit einer Steigung, Zählerfreiheitsgrad eins und Nennerfreiheitsgrad n − 2.
`),
reginf:C('',T`
b|\hat b=Geschätzte Regressionssteigung.
SE|SE(\hat b)=Standardfehler der Steigung in y-Einheiten je x-Einheit.
s|s^2=Geschätzte Fehlervarianz: Residuenquadratsumme geteilt durch n − 2.
SSR=Summe quadrierter Regressionsresiduen, in quadrierten y-Einheiten.
S|S_{xx}=Summe der quadrierten Abweichungen der x-Werte von ihrem Mittelwert.
n=Zahl der unabhängigen Beobachtungen; zwei Freiheitsgrade gehen für Achsenabschnitt und Steigung verloren.
t|t,\ t_{n-2;0{,}975}=Berechnete Teststatistik gegen Steigung null und kritisches Quantil der t-Verteilung für das zweiseitige 95-%-Intervall.
`),
diag:C('',T`
e epsilon|e_i,\ \varepsilon_i=Beobachtetes Residuum nach Anpassung und theoretischer, nicht direkt beobachtbarer Modellfehler.
x y|x_i,\ y_i,\ \hat y_i=Erklärender Wert, beobachteter Zielwert und vom Modell angepasster Zielwert der Beobachtung i.
a b=Achsenabschnitt und Steigung der angepassten Geraden.
E|E(\varepsilon\mid x)=Bedingter Erwartungswert des theoretischen Fehlers bei gegebenem x; null ist eine Exogenitätsannahme.
rho|\rho,\ \hat\rho=Autokorrelationsparameter der Fehler und dessen Schätzwert; t im Index zählt Zeitperioden.
u|u_t=Neue Fehlerinnovation in Periode t, im AR(1)-Fehlermodell ohne eigene zeitliche Korrelation.
d=Durbin-Watson-Statistik; die Beziehung zu 2(1 − rho-Dach) ist eine Näherung, keine exakte Identität.
`),
multireg:C('',T`
y x|y,\ x_1,\ x_2=Zielvariable und zwei gleichzeitig berücksichtigte erklärende Größen.
beta|\beta_0,\ \beta_1,\ \beta_2=Achsenabschnitt und partielle Steigungen des wahren Modells; eine partielle Steigung hält die andere erklärende Größe konstant.
epsilon|\varepsilon=Theoretischer Regressionsfehler.
b|\hat b_1,\ b_1^{\mathrm{einfach}}=Geschätzte partielle Steigung beziehungsweise Steigung des unvollständigen einfachen Modells ohne x_2.
E Cov Var|E[\cdot],\ \operatorname{Cov}(\cdot,\cdot),\ \operatorname{Var}(\cdot)=Erwartungswert, Kovarianz und Varianz.
s S|s^2,\ S_{11}=Geschätzte Fehlervarianz und zentrierte Quadratsumme der ersten erklärenden Größe.
r|r_{12}=Korrelation zwischen x_1 und x_2.
VIF=Variance Inflation Factor, hier 1/(1 − r_12²); Faktor der Varianzvergrößerung durch die Korrelation der beiden Regressoren.
`),
logit:C('',T`
p|p(x)=Bedingte Wahrscheinlichkeit des Ereignisses mit Zielwert eins bei Merkmalswert x.
x=Erklärender Merkmalswert.
beta|\beta_0,\ \beta_1=Achsenabschnitt und Steigung der Log-Odds, nicht der Wahrscheinlichkeit selbst.
odds|\frac{p}{1-p}=Odds: Ereigniswahrscheinlichkeit geteilt durch Gegenwahrscheinlichkeit; ihr natürlicher Logarithmus ist der Logit.
e=Eulersche Zahl als Basis der Exponentialfunktion.
`),
modellwahl:C('',T`
AIC BIC=Akaike- und Bayes-Informationskriterium; kleinere Werte vergleichen Anpassung und Komplexität innerhalb vergleichbarer Modelle auf denselben Daten.
L=Am geschätzten Modell maximierte Likelihood; ln L ist die dazugehörige Log-Likelihood.
k n=Zahl der im Kriterium gezählten freien Modellparameter und Zahl der Beobachtungen.
y|y_i,\ \hat y_i=Beobachteter und vom Modell vorhergesagter Zielwert.
lambda|\lambda=Nichtnegatives Regularisierungsgewicht; die Skalierung muss zur Fehlerquadratsumme und den Regressoreinheiten passen.
beta|\beta_j=Zu bestrafender Regressionskoeffizient j. Quadrate ergeben Ridge-, Beträge Lasso-Regularisierung; der Achsenabschnitt wird üblicherweise separat behandelt.
`),
iv:C('',T`
b beta|b_{OLS},\ b_{IV},\ \beta=OLS-Schätzung, Instrumentvariablen-Schätzung und wahre strukturelle Steigung.
x y z=Endogener Regressor, Zielvariable und Instrument. Das Instrument muss mit x zusammenhängen und die geforderte Exogenitäts-/Ausschlussbedingung erfüllen.
epsilon|\varepsilon=Struktureller Fehler der Zielgleichung.
Cov Var|\operatorname{Cov}(x,\varepsilon),\ \operatorname{Var}(x)=Kovarianz und Varianz; ein von null verschiedener Fehlerzusammenhang verursacht hier den Verzerrungsterm.
plim|\operatorname{plim}=Wahrscheinlichkeitsgrenzwert bei wachsender Stichprobe; beschreibt das asymptotische Ziel eines Schätzverfahrens.
`),
bayesinf:C('',T`
theta|\theta=Unbekannter Parameter, über den die Bayes-Analyse eine Wahrscheinlichkeitsverteilung führt.
f|f(\theta),\ f(\mathrm{Daten}\mid\theta),\ f(\theta\mid\mathrm{Daten})=Prior-Dichte, Likelihood der beobachteten Daten unter theta und Posterior-Dichte nach Beobachtung der Daten. Die Argumente bestimmen die Bedeutung von f.
propto|\propto=Proportionalität; die ausgelassene Normierung stellt sicher, dass die Posterior-Dichte zu eins integriert.
a b k n|a,\ b,\ k,\ n=Positive Formparameter der Beta-Prior-Verteilung, beobachtete Erfolge und Gesamtzahl der Versuche. Die Posterior-Parameter sind a + k und b + n − k.
`),
markov:C('',T`
X|X_n=Zustand der Kette nach n Schritten; i und j bezeichnen einzelne mögliche Zustände.
P p|P,\ p_{ij},\ p_n=Übergangsmatrix, Wahrscheinlichkeit des Übergangs von i nach j in einem Schritt und Zeilenvektor der Zustandswahrscheinlichkeiten nach n Schritten. P mit Ereignisklammer ist der Wahrscheinlichkeitsoperator.
power|p_{ij}^{(n)},\ (P^n)_{ij}=n-Schritt-Übergangswahrscheinlichkeit; P hoch n ist eine Matrixpotenz, keine elementweise Potenz.
pi|\pi,\ \pi_i=Stationäre Verteilung und ihr Anteil für Zustand i; Summe der Anteile gleich eins.
T E|T_{ii},\ E[T_{ii}]=Zufällige erste Rückkehrzeit nach i und ihr Erwartungswert in Schritten.
N I Q|N,\ I,\ Q=Fundamentalmatrix einer absorbierenden Kette, Einheitsmatrix und Übergangsblock zwischen transienten Zuständen. Die inverse Matrix existiert unter der beschriebenen Transienzannahme.
one|\mathbf1=Spaltenvektor aus Einsen; N mal diesen Vektor liefert die erwarteten Schritte bis zur Absorption je Startzustand.
B R|B,\ R=Matrix der Absorptionswahrscheinlichkeiten und Übergangsblock von transienten zu absorbierenden Zuständen.
ruin|k,\ N=Im Ruinbeispiel Anfangskapital und Zielkapital in Spieleinheiten; N ist dort eine Zahl und nicht die zuvor definierte Fundamentalmatrix.
`),
rwalk:C('',T`
S|S_n=Position nach n Schritten relativ zum Startwert null.
n=Anzahl unabhängiger Zufallsschritte.
drift|d=Erwartete Verschiebung je Schritt, im Kapitel als Drift ausgeschrieben; bei Drift null bleibt die erwartete Position am Startpunkt.
E Var sigma|E(S_n),\ \operatorname{Var}(S_n),\ \sigma(S_n)=Erwartete Position, Varianz und Standardabweichung der Position. Die Gleichungen setzen die im Simulator verwendete Schrittvarianz eins voraus; daher wächst die Standardabweichung mit Wurzel n.
`)
};
