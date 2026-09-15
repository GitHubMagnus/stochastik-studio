const {chapter:C}=require('./author.cjs');
module.exports=[
C('Aufzinsen multipliziert den heutigen Betrag in jeder Periode mit demselben Wachstumsfaktor. Abzinsen macht diese Schritte rückgängig. Zinssatz und Anzahl der Perioden müssen dieselbe Zeiteinheit verwenden.',String.raw`
P=Anfangskapital; in diesen Herleitungen dieselbe wirtschaftliche Größe wie der Barwert PV.
F=Einzelner zukünftiger Zahlungsbetrag, dessen Barwert berechnet wird.
r=Effektiver Zinssatz je Periode; r_eff ist der effektive Jahreszins.
j=Nominaler Jahreszinssatz bei m unterjährigen Zinsgutschriften; j/m ist der Satz pro Teilperiode.
m=Anzahl der Zinsgutschriften pro Jahr, beispielsweise zwölf bei monatlicher Verzinsung.
delta|\delta=Stetiger Jahreszinssatz; der natürliche Logarithmus des effektiven jährlichen Wachstumsfaktors.
`),
C('Eine nachschüssige Annuität ist eine Folge gleich hoher Zahlungen am Periodenende. Der Rentenbarwertfaktor fasst deren einzelne Barwerte zusammen. Die ewige Rente folgt als Grenzfall unendlich vieler Zahlungen bei positivem Diskontsatz.',String.raw`
A|A,\ A_1=Gleichbleibende Zahlung je Periode; A_1 ist bei wachsender Rente die erste Zahlung am Ende der ersten Periode.
P=Kreditbetrag beziehungsweise Barwert, aus dem die konstante Rate A bestimmt wird.
B|B_t=Restschuld unmittelbar nach Zahlung t; B_(t−1) ist die vorherige Restschuld.
r=Effektiver Zinssatz pro Zahlungsperiode. Die geschlossene Formel mit Division durch r gilt für r ungleich null; bei r = 0 ist PV = nA.
q=Abzinsungsfaktor für eine Periode, q = 1/(1+r); hier keine Wahrscheinlichkeit.
g=Wachstumsrate der Zahlungen je Periode. Für die unendliche wachsende Rente ist r größer als g erforderlich.
j=Nominaler Jahreszinssatz; j/m ist der unterjährige Periodenzins.
m=Zahl der unterjährigen Zinsgutschriften pro Jahr.
`),
C('Das geometrische Mittel ist die konstante Periodenrendite, die zum gleichen Endvermögen wie die tatsächliche Renditefolge führt. Logrenditen lassen sich über die Zeit addieren. Das arithmetische Mittel beschreibt dagegen den Durchschnitt einzelner Perioden; die Volatilitätskorrektur ist nur eine Näherung.',String.raw`
r|r_t,\ \bar r_a,\ \bar r_g=Einzelrendite in Periode t, arithmetische Durchschnittsrendite und geometrische Durchschnittsrendite; alle als Dezimalzahlen für dieselbe Periodenlänge.
ell|\ell_t,\ \ell=Natürlicher Logarithmus von 1 + r_t; ell ohne Index ist im Beispiel die Summe der Logrenditen, also die Logrendite der Gesamtdauer.
s=Standardabweichung der Periodenrenditen; s² ist ihre Varianz. Die Näherung verwendet Dezimalrenditen, nicht Prozentzahlen wie 10.
`),
C('Die zeitgewichtete Rendite verknüpft Renditen zwischen externen Zahlungen und trennt damit Anlageerfolg von der Größe der Ein- und Auszahlungen. Die geldgewichtete Rendite löst dagegen die Barwertgleichung aller Anlegerzahlungen; Zeitpunkt und Betrag jeder Zahlung beeinflussen das Ergebnis.',String.raw`
R|R_{\mathrm{TWR}}=Zeitgewichtete Rendite der Gesamtdauer; der Zusatz ann bezeichnet ihre annualisierte Fassung.
r=Teilperiodenrendite r_j; in der Barwertgleichung ohne Index der gesuchte interne Zins pro Jahr beziehungsweise angegebener Zeiteinheit.
V|V_j^-,\ V_j^+=Portfoliowert unmittelbar vor (−) beziehungsweise nach (+) einer externen Zahlung am Termin j.
W=Vermögen im Beispiel; W_(1+) nach der Einzahlung zum Zeitpunkt 1, W_2 am Ende.
`),
C('Die Varianz mittelt quadrierte Abstände vom Mittelwert. Quadrieren verhindert, dass sich positive und negative Abweichungen aufheben. Bei der Schätzung aus einer Stichprobe steht n − 1 im Nenner; die Wurzel ergibt die Standardabweichung wieder in der ursprünglichen Einheit.',String.raw`
r|r_i,\ \bar r=Beobachtete Rendite i und arithmetischer Mittelwert der Stichprobenrenditen.
x|x_i,\ \bar x=Beobachtung beziehungsweise möglicher Wert i einer allgemeinen Größe und ihr Stichprobenmittel.
X=Zufallsvariable der betrachteten Größe; X² ist ihr Quadrat.
E|E[\cdot]=Erwartungswert unter der angenommenen Wahrscheinlichkeitsverteilung.
mu|\mu=Populationsmittelwert beziehungsweise Erwartungswert der Zufallsvariablen.
sigma|\sigma,\ \sigma^2=Populationsstandardabweichung und Populationsvarianz; Varianz hat die quadrierte Einheit der Beobachtung.
s|s,\ s^2=Aus der Stichprobe geschätzte Standardabweichung und Varianz.
a b=Feste Skalierung a und feste Verschiebung b der Zufallsvariablen. Verschieben verändert die Varianz nicht, Skalieren multipliziert sie mit a².
p|p_i=Wahrscheinlichkeit des Werts x_i; die Wahrscheinlichkeiten summieren sich zu eins.
`),
C('Der Erwartungswert gewichtet mögliche Ergebnisse mit ihren Wahrscheinlichkeiten. Bayes dreht eine bedingte Wahrscheinlichkeit um: Für die Wahrscheinlichkeit einer Ursache nach einem Signal zählen sowohl die Trefferquote als auch die anfängliche Häufigkeit der Ursache.',String.raw`
P|P(A),\ P(A\mid B)=Wahrscheinlichkeit von A beziehungsweise Wahrscheinlichkeit von A unter der Bedingung, dass B bekannt ist; der Nenner P(B) muss positiv sein.
A B=Ereignisse. Aᶜ ist das Gegenereignis zu A; der hochgestellte Buchstabe c bezeichnet das Komplement, keine weitere Variable.
c|A^c=Gegenereignis zu A: Alle Ergebnisse, bei denen A nicht eintritt.
X Y=Zufallsvariablen; XY ist ihr Produkt, nicht eine zusätzliche Variable.
x|x_i=Möglicher Wert i der Zufallsvariablen X, beispielsweise ein Gewinnbetrag.
p|p_i=Wahrscheinlichkeit des Ergebnisses x_i; nichtnegative Anteile mit Summe eins.
E|E[\cdot]=Erwartungswert; Linearität gilt auch bei abhängigen Variablen. Bei Produkten muss die Kovarianz berücksichtigt werden.
D W=Ereignisse im Diagnosebeispiel: tatsächlicher Ausfall D und Warnsignal W.
TP FP=Anzahlen richtiger Warnungen (True Positives) und falscher Warnungen (False Positives); hier keine Wahrscheinlichkeiten.
`),
C('Der Standardfehler misst die Streuung des geschätzten Mittelwerts bei wiederholten Stichproben. Bei unabhängigen Beobachtungen mit gleicher endlicher Varianz sinkt er mit der Wurzel des Stichprobenumfangs. Er ist kleiner als die Streuung einzelner Beobachtungen, aber nicht dasselbe wie sie.',String.raw`
X|X_i,\ \bar X=Zufällige Einzelbeobachtung i und Mittelwert der Stichprobe.
x=Möglicher numerischer Wert der betrachteten Zufallsvariablen; Argument der Dichtefunktion.
s=Aus den Einzelbeobachtungen geschätzte Standardabweichung.
sigma|\sigma,\ \sigma^2=Wahre Standardabweichung und Varianz der Einzelbeobachtungen.
mu|\mu=Wahrer Mittelwert der Verteilung.
SE=Standardfehler der jeweiligen Schätzgröße, in derselben Einheit wie diese Größe.
f|f(x;\mu,\sigma)=Dichte der Normalverteilung. Die Fläche unter der Dichte über einem Intervall ist eine Wahrscheinlichkeit; die Höhe selbst ist keine Wahrscheinlichkeit.
P|P(\cdot)=Wahrscheinlichkeit des Ereignisses in Klammern.
a b=Untere und obere Grenze des betrachteten Intervalls auf der x-Achse.
N|N(0,1)=Standardnormalverteilung mit Mittelwert null und Varianz eins.
d|\overset d\longrightarrow=Konvergenz in Verteilung; die standardisierte Stichprobenmittelverteilung nähert sich der Normalverteilung an.
pi|\pi=Kreiszahl, ungefähr 3,14159, als Normierungskonstante der Normaldichte.
`),
C('Die Teststatistik misst den Abstand des beobachteten Mittelwerts vom behaupteten Wert in Standardfehlern. Das Konfidenzintervall reicht um den Stichprobenmittelwert jeweils einen kritischen t-Wert mal Standardfehler nach links und rechts. Sein Sicherheitsniveau beschreibt die langfristige Überdeckungsrate des Verfahrens.',String.raw`
x|\bar x=Beobachteter arithmetischer Stichprobenmittelwert.
mu|\mu_0=Unter der Nullhypothese behaupteter Populationsmittelwert.
s=Stichprobenstandardabweichung der Einzelbeobachtungen.
t|t,\ t^*,\ t_{1-\alpha/2,n-1}=t ohne Index ist die berechnete Teststatistik. t* beziehungsweise der indizierte t-Wert ist das Quantil der Student-t-Verteilung zum angegebenen Wahrscheinlichkeitsniveau mit n − 1 Freiheitsgraden.
CI=Konfidenzintervall; der Index 1 − alpha benennt das Konfidenzniveau.
alpha|\alpha=Signifikanzniveau: Wahrscheinlichkeit, eine wahre Nullhypothese zu verwerfen (Fehler erster Art).
beta|\beta=Wahrscheinlichkeit des Fehlers zweiter Art bei einer bestimmten Alternative; 1 − beta ist die Teststärke (Power).
H|H_0,\ H_1=Nullhypothese und Alternativhypothese. Im grafischen Beispiel bestimmen sie unterschiedliche Verteilungen der Teststatistik.
P|P(\cdot\mid\cdot)=Bedingte Wahrscheinlichkeit; reject bedeutet, dass die Testregel die Nullhypothese verwirft.
SE=Standardfehler des Mittelwerts, s geteilt durch die Wurzel von n.
df=Freiheitsgrade; im einfachen Mittelwerttest bei unbekannter Varianz gleich n − 1.
Z=Standardisierte Teststatistik im illustrierten Normalmodell.
N|N(\mu,\sigma^2)=Normalverteilung; erster Parameter ist ihr Mittelwert, zweiter ihre Varianz.
Phi|\Phi(z)=Verteilungsfunktion der Standardnormalverteilung, also die Wahrscheinlichkeit eines Werts höchstens z.
`),
C('Eine Regression erklärt einen Zielwert als Achsenabschnitt plus gewichtete Einflussgrößen. Kleinste Quadrate wählt die Koeffizienten so, dass die Summe der quadrierten Vorhersagefehler minimal wird. Die einfache Steigung ist die gemeinsame Variation von x und y geteilt durch die Variation von x.',String.raw`
y|y_i,\ \bar y,\ \hat y=Beobachteter Zielwert i, dessen Stichprobenmittel und geschätzter beziehungsweise vorhergesagter Zielwert. In der Matrixform ist y der Vektor aller Zielwerte.
x|x_i,\ x_j,\ \bar x=Erklärende Größe: i zählt im einfachen Modell Beobachtungen, j im multiplen Modell Merkmale. Ein Balken bezeichnet den Mittelwert.
beta|\hat\beta_0,\ \hat\beta_j=Geschätzter Achsenabschnitt und geschätzter Koeffizient des Merkmals j. Ein Koeffizient misst die Änderung von y pro Einheit x_j bei konstanten übrigen Merkmalen.
a b=Alternative Bezeichnungen für Achsenabschnitt a und einfache Steigung b; ein Dach bezeichnet ihre Schätzwerte.
S|S_{xy},\ S_{xx}=Summe der Produkte zentrierter x- und y-Werte beziehungsweise Summe quadrierter zentrierter x-Werte; keine Standardabweichungen.
X=Designmatrix: je Beobachtung eine Zeile, je Regressor eine Spalte, einschließlich Einsenspalte für den Achsenabschnitt.
k=Anzahl der erklärenden Merkmale ohne den Achsenabschnitt.
z=In der Einheitenaufgabe neu skalierte erklärende Größe z = 100x; derselbe Zusammenhang braucht dann eine entsprechend kleinere Steigung.
`),
C('Die Sandwich-Formel zeigt, wie die tatsächliche Fehlerkovarianz in die Unsicherheit der Regressionskoeffizienten eingeht. Nur bei unkorrelierten Fehlern mit konstanter Varianz vereinfacht sie sich zur üblichen OLS-Varianz. Robuste Standardfehler ändern die Unsicherheitsschätzung, nicht automatisch die geschätzte Steigung.',String.raw`
beta|\hat\beta=Vektor der mit OLS geschätzten Regressionskoeffizienten; die Varianzformel ergibt deren gesamte Kovarianzmatrix.
X=Designmatrix mit Beobachtungen in Zeilen und Regressoren in Spalten; X muss vollen Spaltenrang haben.
Omega|\Omega=Kovarianzmatrix der Regressionsfehler bedingt auf X. Diagonalelemente sind Fehlervarianzen, übrige Elemente Fehlerkovarianzen.
sigma|\sigma^2=Gemeinsame Fehlervarianz unter Homoskedastizität und fehlender Fehlerkorrelation.
I=Einheitsmatrix in der Dimension der Beobachtungszahl, mit Einsen auf der Diagonale und sonst Nullen.
t|t,\ t_{\mathrm{rob}}=Koeffizient abzüglich des Nullhypothesenwerts, geteilt durch seinen Standardfehler. Der Zusatz rob verwendet einen robusten Standardfehler.
`),
C(String.raw`Das AR(1)-Modell zerlegt den heutigen Wert in einen konstanten Achsenabschnitt, den fortwirkenden Anteil des Vorperiodenwerts und eine neue, noch unvorhersehbare Innovation. [[c]] ist dabei nicht der langfristige Mittelwert: Im stationären Zustand gilt für die Mittelwerte [[\mu=c+\phi\mu]]; Umstellen ergibt [[\mu=\frac{c}{1-\phi}]]. Mit [[c=2]] und [[\phi=0{,}8]] liegt dieser Mittelwert bei 10. Ist [[x_t=20]], beträgt die nächste bedingte Prognose 18; der tatsächlich beobachtete Wert kann wegen der neuen Innovation davon abweichen.`,String.raw`
x|x_t,\ x_{t-1},\ x_{t+h},\ \hat x_{t+h}=Beobachteter Zeitreihenwert zum Zeitpunkt t, Wert eine Periode davor, zukünftiger Wert h Perioden danach und dessen Prognose (Dach). Alle haben dieselbe Einheit, beispielsweise Indexpunkte. Delta x im Schockbeispiel ist die zusätzliche Wirkung eines einmaligen Schocks gegenüber dem Verlauf ohne diesen Schock.
c=Konstanter Achsenabschnitt des AR(1)-Modells in der Einheit von x. Der langfristige Mittelwert entsteht erst durch Berücksichtigung der Rückkopplung über phi.
phi|\phi=Autoregressiver Koeffizient, dimensionslos. Er bestimmt, wie stark Abweichungen vom Mittelwert fortbestehen. Für das hier behandelte kausale stationäre AR(1) muss sein Betrag kleiner als eins sein.
varepsilon|\varepsilon_t=Neue Innovation zum Zeitpunkt t, in der Einheit von x. Für die Prognoseformeln wird bedingter Erwartungswert null vorausgesetzt, für die bedingten Varianzformeln außerdem konstante bedingte Innovationsvarianz (keine ARCH-Effekte). Unabhängige Innovationen mit gleicher endlicher Varianz erfüllen diese Voraussetzungen.
mu|\mu=Zeitlich konstanter unbedingter Mittelwert des stationären Prozesses, in der Einheit von x; nicht gleich dem bedingten Prognosewert bei bekanntem x_t.
sigma|\sigma_\varepsilon^2=Varianz einer einzelnen Innovation; ihre Einheit ist die quadrierte Einheit von x. Die stationäre Varianz von x ist wegen fortwirkender früherer Schocks größer.
E|E_t[x_{t+h}]=Bedingter Erwartungswert des zukünftigen Werts unter allen zum Zeitpunkt t bekannten Informationen. Im linearen Modell entspricht er der Punktprognose.
h=Prognosehorizont als positive ganze Anzahl von Perioden. h = 1 bedeutet eine Periode voraus.
j=Laufindex der aufsummierten Schockbeiträge: j = 0 ist eine ungedämpfte neue Innovation, größere j stehen für Beiträge, die mit phi hoch j abklingen.
t=Zeitindex in gleich langen Perioden; t − 1 bezeichnet die Vorperiode. Var_t ist eine Varianz bedingt auf die zum Zeitpunkt t bekannten Informationen.
`),
C('Monte-Carlo-Schätzer mitteln unabhängig simulierte Ergebnisse. Ihre statistische Unsicherheit sinkt ungefähr mit der Wurzel der Simulationszahl. Viermal so viele unabhängige Läufe halbieren deshalb den Standardfehler; ein falsches Modell wird dadurch aber nicht richtiger.',String.raw`
M=Anzahl unabhängiger Simulationsläufe.
X|X_j,\ \bar X_M=Simulierter Wert im Lauf j beziehungsweise Mittelwert über M Läufe.
g|g(X_j)=Auszahlungs- oder Bewertungsfunktion, die aus dem simulierten Zustand den interessierenden Ergebnisbetrag erzeugt.
V|\hat V_M=Aus M Läufen geschätzter Erwartungswert der Auszahlung g(X), beispielsweise ein Preis; das Dach kennzeichnet eine Schätzung.
s|s_X,\ s_g=Stichprobenstandardabweichung der simulierten X-Werte beziehungsweise g(X)-Auszahlungen. Im Standardfehler muss die zur geschätzten Größe passende Streuung stehen.
SE=Standardfehler des Simulationsmittelwerts, in der Einheit des simulierten Ergebnisses; MC bezeichnet Monte Carlo.
`),
C('Die Zielfunktion belohnt erwartete Rendite und zieht eine vom Anleger gewichtete Varianzstrafe ab. Die Optimierung sucht die beste zulässige Gewichtung. Ein mathematisches Optimum ohne Nebenbedingungen kann durch eine Positionsgrenze eingeschränkt werden.',String.raw`
w=Vektor der Portfoliogewichte; seine Komponenten summieren sich bei vollständiger Anlage zu eins.
W|\mathcal W=Menge der zulässigen Portfoliogewichte, etwa unter Budget-, Leerverkaufs- und Positionsgrenzen.
mu|\mu=Im Mehranlagenmodell Vektor erwarteter Renditen, im Ein-Risikoanlage-Modell die erwartete Rendite dieser Anlage; jeweils pro Periode als Dezimalzahl.
Sigma|\Sigma=Kovarianzmatrix der Anlagenrenditen; wᵀΣw ist die Portfoliovarianz.
A=Positiver Risikoaversionsparameter, der bestimmt, wie stark Varianz die Nutzenzahl mindert; keine Vermögenssumme.
U|U(y)=Erwartungswert-Varianz-Nutzen der Gewichtung y, ausgedrückt in Renditeeinheiten.
y|y,\ y^*,\ y_c=Anteil des Vermögens in der riskanten Anlage, unbeschränkt optimierter Anteil und durch die Obergrenze beschränkter Anteil.
r|r_f=Sicherer Periodenzinssatz als Dezimalzahl.
sigma|\sigma^2=Varianz der riskanten Einzelanlage, bezogen auf dieselbe Periodenlänge wie die Rendite.
`),
C('Der Testfehler mittelt die Verluste des bereits trainierten Modells über zurückgehaltene Beobachtungen. Die Trainingsoptimierung minimiert dagegen den Trainingsfehler plus eine mögliche Komplexitätsstrafe. Testdaten dürfen nicht zum Anpassen des Modells oder seiner Parameter verwendet werden.',String.raw`
L|L(y_i,\hat f(x_i)),\ \widehat{\mathcal L}_{\mathrm{test}}=L mit zwei Argumenten ist die Verlustfunktion eines einzelnen Falls. Das große geschätzte kalligrafische L ist der mittlere Verlust auf dem Testsatz; bei quadratischen Fehlern hat er die quadrierte Einheit von y.
f|f,\ \hat f=Vorhersagefunktion beziehungsweise anhand der Trainingsdaten geschätzte Funktion.
F|\mathcal F=Menge der im Training zugelassenen Modellfunktionen.
x|x_i=Merkmale der Beobachtung i; häufig ein Vektor mehrerer Eingangsgrößen.
y|y_i=Tatsächlich beobachteter Zielwert der Beobachtung i.
n|n,\ n_{\mathrm{test}}=Zahl der Trainingsbeobachtungen beziehungsweise Zahl der Testbeobachtungen; die Mittelung muss den richtigen Nenner verwenden.
I|\mathcal I_{\mathrm{test}}=Indexmenge der zurückgehaltenen Testbeobachtungen, über die summiert wird.
lambda|\lambda=Nichtnegatives Gewicht der Regularisierungsstrafe; steuert den Kompromiss zwischen Anpassung und Modellkomplexität.
Omega|\Omega(f)=Gewählte Komplexitätsstrafe der Modellfunktion, etwa die Summe quadrierter Koeffizienten; hier keine Fehlerkovarianzmatrix.
MSE=Mean Squared Error: Mittelwert der quadrierten Vorhersagefehler.
`)
];
