const {chapter:C}=require('./author.cjs');const T=String.raw;
module.exports=[
C('Portfoliovarianz addiert die gewichteten Einzelvarianzen und die gemeinsamen Schwankungen. Der Kreuzterm erklärt Diversifikation: Je geringer die Korrelation, desto weniger verstärken sich Abweichungen. Renditen werden mit einfachen Gewichten gemittelt, Varianzen benötigen dagegen Gewichtquadrate und Kovarianzen.',T`
sigma|\sigma_p,\ \sigma_A,\ \sigma_B,\ \sigma_{ij}=Standardabweichung des Portfolios und der Anlagen A und B. Das Symbol mit zwei Anlagenindizes, sigma_ij, bezeichnet dagegen deren Kovarianz; auf der Diagonale ist sie eine Varianz.
w|w_A,\ w_B,\ w,\ w_{MV}=Anteile der Anlagen am Vermögen und Gewicht des Minimum-Varianz-Portfolios. In der Herleitung ist w das Gewicht der ersten Anlage; in der mit A und B beschrifteten Grafik das Gewicht von B. Der jeweils andere Anteil ist 1 − w.
rho|\rho=Korrelation der Renditen, dimensionslos zwischen −1 und +1.
R|R_i,\ R_P=Rendite der Anlage i und des Portfolios über dieselbe Periode.
E|E[R_P]=Erwartete Portfoliorendite.
mu|\boldsymbol\mu,\ \mu_p=Vektor der erwarteten Einzelrenditen und erwartete Portfoliorendite.
Sigma|\Sigma=Kovarianzmatrix der Einzelrenditen; die Matrixform wᵀΣw enthält sämtliche Einzel- und Kreuzterme.
MRC RC|MRC_i,\ RC_i=Marginaler Risikobeitrag je zusätzlicher Gewichtseinheit und mit dem bestehenden Gewicht multiplizierter Risikobeitrag der Anlage i. Die RC summieren sich zur Portfoliostandardabweichung.
N=Anzahl gleich gewichteter Anlagen im Diversifikationsgrenzfall mit gleicher Einzelvarianz und gleicher paarweiser Korrelation.
`),
C('Der Anleger vergleicht erwartete Rendite mit einer Varianzstrafe. Bei gegebenem Risikoportfolio bestimmt die Risikoaversion, wie viel davon mit der sicheren Anlage kombiniert wird. Höhere erwartete Risikoprämie erhöht, höhere Varianz und höhere Risikoaversion senken den optimalen riskanten Anteil.',T`
U=Erwartungswert-Varianz-Nutzen als Bewertungszahl in Renditeeinheiten; keine sichere tatsächliche Auszahlung.
R|R,\ R_M=Rendite des Gesamtportfolios beziehungsweise des vorgegebenen riskanten Portfolios M.
E|E[R]=Erwartungswert der jeweils betrachteten Rendite.
A=Positiver Risikoaversionsparameter; höheres A bedeutet stärkere Bestrafung derselben Varianz.
sigma|\sigma,\ \sigma_M=Standardabweichung des Gesamtportfolios beziehungsweise des riskanten Portfolios M. In U(y) bezeichnet sigma die vorgegebene riskante Einzelanlage, deren Portfoliorisiko dann mit y skaliert wird.
mu|\mu,\ \mu^*=Erwartete Rendite der jeweils betrachteten Anlage; in der Grafik ist mu* die am Optimum erreichte Portfoliorendite.
r|r_f=Sicherer Periodenzins als Dezimalzahl.
y|y,\ y^*=Anteil in der riskanten Anlage und dessen unbeschränkt optimaler Wert; negative Werte bedeuten eine Short-Position, Werte über eins Kreditfinanzierung.
w|w_P=In der Grafik benötigtes Gewicht des vorgegebenen Risikoportfolios P, um die optimale Gesamtvolatilität zu erreichen.
`),
C('Die Kapitalmarktlinie beschreibt Kombinationen aus sicherer Anlage und effizientem Marktportfolio. Ihre Steigung ist dessen Sharpe Ratio: zusätzliche erwartete Rendite je Einheit Gesamtvolatilität. Die effiziente Grenze riskanter Anlagen entsteht davor aus einer Varianzminimierung für jede gewünschte Rendite.',T`
R|R_p,\ R_M,\ R_T,\ R_C=Rendite des Gesamtportfolios, Marktportfolios, Tangentialportfolios und der Kombination C. Im CAPM ist das Marktportfolio das Tangentialportfolio.
E|E[R]=Erwartete Rendite der im Index genannten Anlage, pro gemeinsamer Periode.
r|r_f=Risikofreier Zinssatz dieser Periode.
sigma|\sigma_p,\ \sigma_M,\ \sigma_T,\ \sigma_C=Standardabweichungen der jeweils indizierten Renditen; gleich lange Renditeintervalle und gleiche Skalierung verwenden.
w|\mathbf w,\ \mathbf w_T,\ w_{GMV}=Vektor der Anlagegewichte, Gewichte des Tangentialportfolios und Gewicht der zweiten riskanten Anlage im globalen Minimum-Varianz-Portfolio. w ohne Vektorschreibweise ist in der Zwei-Anlagen-Grafik der Anteil von B.
mu|\boldsymbol\mu,\ \mu^*,\ \mu_p=Erwartungsrenditevektor, vorgegebene Zielrendite in der Optimierung und erreichte Portfoliorendite; Indizes T und C bezeichnen Tangentialportfolio und Mischung.
Sigma|\Sigma=Kovarianzmatrix der riskanten Anlagen; die inverse Matrix setzt Invertierbarkeit voraus. Der Proportionalitätsausdruck für w_T muss auf Gewichtsumme eins normiert werden.
SR=Sharpe Ratio der jeweils bezeichneten Vergleichsanlage, als Risikoprämie geteilt durch Volatilität.
`),
C('Das CAPM vergütet die gemeinsame Bewegung einer Anlage mit dem Markt. Beta misst diese systematische Sensitivität, nicht die gesamte Volatilität. Alpha vergleicht eine beobachtete oder prognostizierte Rendite mit der zur gleichen Risikoposition passenden Modellrendite; statistische Sicherheit folgt daraus noch nicht.',T`
R|R_i,\ R_M=Rendite der Anlage i und des Marktportfolios. Ein Balken bezeichnet ein Stichprobenmittel, E davor einen Erwartungswert.
r|r_f=Risikofreier Zinssatz passend zur Renditeperiode.
beta|\beta_i,\ \widehat\beta=Markt-Beta und dessen Schätzwert: Kovarianz mit der Marktrendite geteilt durch deren Varianz. Ein Beta von 1,2 bedeutet im Modell 1,2 Einheiten Reaktion je Einheit Marktüberschussrendite.
E|E[\cdot]=Erwartungswert; die CAPM-Gleichung ist eine Beziehung erwarteter Renditen, keine Garantie für einzelne realisierte Perioden.
sigma|\sigma_i,\ \sigma_M,\ \sigma_\varepsilon=Standardabweichung der Anlage, des Markts und der nicht vom Markt erklärten Restkomponente.
rho|\rho_{iM}=Korrelation zwischen Anlage i und Marktportfolio M.
alpha|\alpha_i,\ \widehat\alpha=Modellbereinigte Überschussrendite beziehungsweise geschätzter Regressionsachsenabschnitt. Das Prognose-Alpha beruht auf Erwartungen; realisiertes Alpha und statistisch geschätztes Alpha sind entsprechend zu unterscheiden.
varepsilon|\varepsilon_i=Unsystematische Restkomponente der Rendite im Einfaktormodell.
Cov Var=Kovarianz zweier Größen und Varianz einer Größe; identische Beobachtungszeiträume und Renditeeinheiten verwenden.
SE=Standardfehler des geschätzten Alpha, also Unsicherheit seiner Schätzung und nicht die Volatilität der Anlage.
t|t_\alpha=t-Teststatistik zur Nullhypothese Alpha gleich null: geschätztes Alpha geteilt durch seinen Standardfehler.
k|k_e=Durch das CAPM abgeleitete erforderliche Eigenkapitalrendite.
RP|RP_M=Marktrisikoprämie, erwartete Marktrendite abzüglich sicherem Zinssatz.
`),
C('Ein Mehrfaktormodell erklärt Renditen mit mehreren systematischen Einflüssen. Der einzelne Faktorbeitrag ist Sensitivität mal Faktorrealisierung. Die APT-Beziehung für erwartete Renditen verwendet dagegen die vergüteten Faktorprämien; ein historischer Restgewinn ist kein Beweis für dauerhaftes Alpha.',T`
R|R_{i,t},\ R_P,\ R_M=Rendite der Anlage i in Periode t, des Portfolios und des Markts.
r|r_{f,t}=Risikofreier Zins derselben Periode.
alpha|\alpha_i,\ \hat\alpha=Interzept des jeweiligen Faktormodells und dessen Schätzung. Die Indizes 1 und 2 im Beispiel bezeichnen Ein- und Zweifaktormodell, nicht verschiedene Zeithorizonte.
beta|\beta_{ik}=Sensitivität der Anlage i gegenüber Faktor k; V im Index bezeichnet im Beispiel den Value-Faktor.
F|F_{k,t}=Realisierung beziehungsweise Rendite des Faktors k in Periode t auf der gewählten Skala.
lambda|\lambda_k=Erwartete Risikoprämie je Einheit Faktor-Exposure k.
varepsilon|\varepsilon_{i,t},\ \varepsilon_P=Nicht erklärte Restkomponente der Anlage beziehungsweise des Portfolios.
K=Anzahl der berücksichtigten Faktoren.
E|E[R_i]=Erwartete Rendite der Anlage i.
Var=Varianz der in Klammern genannten Restkomponente.
w|w_i=Gewicht der Anlage i im Portfolio; die einfache Residualvarianzsumme setzt unkorrelierte Residuen voraus.
sigma|\sigma_{\varepsilon_i}^2=Varianz des Residuums der Anlage i.
t=t-Teststatistik eines geschätzten Alpha gegen null.
`),
C('Ein reales Renditeziel wird durch Multiplikation mit dem Inflationsfaktor in ein nominales Ziel umgerechnet. Bei einem festen Endvermögensziel lässt sich die benötigte konstante Rendite aus Endbedarf und Anfangsvermögen ableiten. Diese erforderliche Rendite ist noch keine realistisch erzielbare Rendite.',T`
r|r_{\mathrm{nom}},\ r_{\mathrm{real}},\ r_{\mathrm{req}}=Nominale, reale und aus dem Finanzierungsziel erforderliche Periodenrendite.
pi|\pi=Inflationsrate derselben Periode als Dezimalzahl.
A|A_0=Für das Ziel verfügbares Anfangsvermögen.
L|L_T=Benötigter Vermögensbetrag zum Zieltermin T.
d=Entnahmequote relativ zum aktuellen Vermögen; im Beispiel jährlich.
`),
C('Eine Liquiditätsreserve muss den bis zum Horizont erwarteten Nettoabfluss plus einen zusätzlichen Stresspuffer decken. Langfristiges Vermögen kann nicht beliebig dafür eingesetzt werden, wenn es gerade im Stress nicht sicher liquidierbar ist.',T`
L|L_{\mathrm{reserve}},\ L_{\mathrm{req}}=Verfügbare Reserve beziehungsweise erforderlicher liquider Betrag.
O I|O_t,\ I_t=Auszahlungen und zuverlässig erwartete Einzahlungen zum Termin t; beide als positive Beträge, ihr Unterschied ist der Nettoabfluss.
B|B_{\mathrm{stress}}=Zusätzlicher Liquiditätspuffer für unerwartete Abflüsse, in Geldeinheiten.
H=Horizont, bis zu dem die Reserve reichen soll.
A|A_{\mathrm{free}}=Nach Reservierung verbleibendes investierbares Vermögen.
R|\bar R_T=Durchschnittliche additive Jahresrendite über T unabhängige Jahre im vereinfachten Streuungsbeispiel.
sigma|\sigma,\ \sigma_\ell=Jährliche Standardabweichung einfacher Renditen beziehungsweise von Logrenditen. Die beiden sind unterschiedliche Modellgrößen.
mu|\mu_\ell=Jährlicher Erwartungswert der Logrendite im Vermögensmodell.
W|W_0,\ W_T=Vermögen am Anfang und nach T Jahren, ohne zwischenzeitliche Entnahmen im grafischen Lognormalmodell.
N|N(T\mu_\ell,T\sigma_\ell^2)=Normalverteilung der kumulierten Logrendite; Parameter sind Mittelwert und Varianz, nicht Standardabweichung.
Q|Q_p(W_T)=p-Quantil des zukünftigen Vermögens: Betrag, der mit Wahrscheinlichkeit p unterschritten beziehungsweise erreicht wird.
z|z_p=p-Quantil der Standardnormalverteilung; p ist das in der Grafik angegebene Wahrscheinlichkeitsniveau.
`),
C('Aktive Gewichte sind Abweichungen von der strategischen oder sonst gewählten Benchmark. Bei gleicher vollständiger Kapitalanlage summieren sie sich zu null: Jedes Übergewicht wird durch Untergewichte finanziert. Ihre Renditewirkung hängt von den anschließend realisierten Anlagerenditen ab.',T`
a|a_i=Aktives Gewicht der Anlage i: Portfoliogewicht abzüglich Benchmarkgewicht.
w|w_i,\ \mathbf w_P,\ \mathbf w_S,\ \mathbf w_A=Portfoliogewicht beziehungsweise Gewichtsvektoren von Gesamtportfolio, Strategie und aktiver Abweichung. In der Zwei-Anlagen-Grafik bezeichnen w_A und w_B dagegen die Anlagen A und B.
b|b_i=Benchmarkgewicht der Anlage i, als Anteil am Benchmarkportfolio.
R|R_P,\ R_S,\ R_A=Portfoliorendite, strategische Vergleichsrendite und aktive Renditedifferenz im Beispiel.
mu|\mu_p=Erwartete Portfoliorendite in der eingeschränkten Allokationsgrafik.
sigma|\sigma_p^2=Portfoliovarianz in derselben Grafik.
`),
C('Tracking Difference misst die tatsächliche Renditedifferenz zum Index. Tracking Error misst dagegen die Schwankung dieser Differenz über mehrere Perioden. Ein Fonds kann einen gleichmäßigen Kostenrückstand und trotzdem einen niedrigen Tracking Error haben.',T`
TD=Tracking Difference, Fondsrendite minus Indexrendite über denselben Zeitraum.
TE=Tracking Error, Standardabweichung der periodischen aktiven Renditen; nur mit konsistenter Annualisierung vergleichen.
R|R_F,\ R_I,\ R_B=Rendite von Fonds, Index und Benchmark; I und B bezeichnen hier alternative Referenzen.
sigma|\sigma(R_F-R_I)=Standardabweichung der Renditedifferenz, nicht Differenz der Einzelstandardabweichungen.
W|W_0,\ W_T=Anfangs- und Endvermögen im Gebührenbeispiel.
r|r,\ r_{\mathrm{net}}=Periodenrendite vor beziehungsweise nach der proportionalen Gebühr.
c=Gebührenanteil, der im Modell nach der Periodenrendite vom dann vorhandenen Vermögen abgezogen wird.
`),
C('Ohne Handel ändern sich Gewichte, weil Anlagen unterschiedlich wachsen. Der Zähler bildet den Endwert einer Position ab, der Nenner den Endwert des gesamten Portfolios. Rebalancing setzt erst anschließend die Gewichte wieder auf die gewählte Zielverteilung.',T`
w|w_{i,0},\ w_{i,1},\ w_{A,t}^-,\ w_{A,t}^+=Anfangs- und Endgewicht der Anlage i sowie Gewicht von A unmittelbar vor (−) und nach (+) dem Rebalancing am Zeitpunkt t.
R r|R_i,\ r_i,\ R_{A,t}=Rendite der Anlage i beziehungsweise von A in der betrachteten Periode; große und kleine Buchstaben sind hier alternative Schreibweisen.
`),
C('Die Wertfunktion bewertet Gewinne und Verluste relativ zu einem Referenzpunkt. Unterschiedliche Krümmung beschreibt abnehmende Empfindlichkeit; der zusätzliche Faktor auf der Verlustseite bildet Verlustaversion ab. Das Modell beschreibt Verhalten und ist keine Empfehlung für optimale Entscheidungen.',T`
v|v(x)=Subjektiver Wert des Ergebnisses relativ zum Referenzpunkt, in modellabhängigen Nutzeneinheiten.
x=Gewinn oder Verlust gegenüber dem Referenzpunkt; positive Werte sind Gewinne, negative Verluste.
a alpha|a,\ \alpha=Krümmungsparameter auf der Gewinnseite; die Buchstaben sind alternative Notationen, typischerweise zwischen null und eins.
b beta|b,\ \beta=Krümmungsparameter auf der Verlustseite, ebenfalls typischerweise zwischen null und eins.
lambda|\lambda=Verlustaversionsfaktor größer als eins; verstärkt die negative Bewertung eines Verlusts gegenüber einem vergleichbaren Gewinn.
`),
C('VaR ist ein Verlustquantil: Mit dem angegebenen Niveau liegt der Verlust nicht darüber. Expected Shortfall betrachtet zusätzlich die besonders schlechten Fälle jenseits dieses Quantils. Die geschlossenen Ausdrücke gelten hier für normalverteilte Renditen; bei anderen Verteilungen können sie das Randrisiko verfehlen.',T`
VaR ES|\mathrm{VaR}_\alpha,\ \mathrm{ES}_\alpha=Verlustquantil und mittlerer Verlust im schlechtesten Anteil 1 − alpha. Ohne Vermögensfaktor sind es Renditeverluste, mit Faktor V Geldverluste.
alpha|\alpha=Konfidenzniveau zwischen null und eins, etwa 0,95; der betrachtete obere Verlustbereich hat Wahrscheinlichkeit 1 − alpha.
mu sigma|\mu,\ \sigma=Erwartungswert und Standardabweichung der Rendite über den Risikohorizont. Weil Verlust das negative Renditeergebnis ist, steht −mu in den Verlustformeln.
z|z_\alpha=alpha-Quantil der Standardnormalverteilung.
phi varphi|\phi(z),\ \varphi(z)=Dichte der Standardnormalverteilung an der Stelle z; zwei Schreibvarianten desselben Symbols, hier kein AR-Koeffizient.
V=Aktueller Positionswert zur Umrechnung relativer Verlustgrößen in Geldbeträge.
L=Zufälliger Verlust; in der Grafik in Prozentpunkten gemessen und positiv bei Verlust.
l=Ein möglicher Verlustgrenzwert in der allgemeinen Quantildefinition.
P|P(L\le l)=Wahrscheinlichkeit, dass der Verlust höchstens l beträgt.
u=Über die oberen Wahrscheinlichkeitsniveaus laufende Integrationsvariable zwischen alpha und eins.
N|N(0,10^2)=Normalverteilung des grafischen Verlustmodells mit Mittelwert null und Standardabweichung zehn Prozentpunkten; der zweite Parameter ist die Varianz.
`),
C('Die Szenariobewertung verändert mehrere Risikofaktoren gemeinsam und berechnet den Portfolioeffekt. Die Taylor-Formel ergänzt die linearen Sensitivitäten um Krümmung und Wechselwirkungen. Bei großen oder strukturellen Schocks kann eine vollständige Neubewertung nötig sein.',T`
V|V(\mathbf x)=Wert der Position beziehungsweise des Portfolios als Funktion aller Risikofaktoren.
x|\mathbf x_0,\ \mathbf x_s,\ \Delta\mathbf x=Ausgangsvektor, Szenariovektor und deren Differenz; jede Komponente hat die Einheit ihres eigenen Risikofaktors.
H|H_V=Hesse-Matrix des Werts: zweite partielle Ableitungen nach den Risikofaktoren, einschließlich Kreuzableitungen. Der Gradient davor ist der Vektor der ersten Ableitungen.
L|L_E,\ L_P=Positiv angegebener Verlust der Aktienkomponente beziehungsweise des Gesamtportfolios im Beispiel; Delta V ist dagegen vorzeichenbehaftete Wertänderung.
w=Anteil der zweiten Anlage B in der Korrelation-Stressgrafik; 1 − w ist der Anteil von A.
sigma|\sigma_A,\ \sigma_B,\ \sigma_p=Standardabweichungen der beiden Anlagen und des Portfolios für denselben Risikohorizont.
rho|\rho=Korrelation der beiden Anlagenrenditen; der Vergleich isoliert die Wirkung einer Änderung dieses Parameters.
`),
C('Sharpe Ratio vergleicht Überschussrendite mit dem gesamten Schwankungsrisiko. Information Ratio vergleicht aktive Rendite mit dem Risiko relativ zur Benchmark. Die Kennzahl ist nur sinnvoll, wenn Renditen, Risikomaß und Vergleichsmaßstab zeitlich und wirtschaftlich zusammenpassen.',T`
SR Sharpe=Sharpe Ratio, Überschussrendite pro Einheit Gesamtvolatilität.
IR=Information Ratio, aktive Rendite pro Einheit Tracking Error.
R|R_p,\ R_b,\ R_P,\ R_Q=Rendite des Portfolios, der Benchmark und der in der Grafik verglichenen Strategien P und Q. Q′ ist die auf Vergleichsrisiko skalierte Mischung.
r|r_f=Risikofreier Zinssatz derselben Periode.
sigma|\sigma_p=Standardabweichung der Portfoliorenditen über die verwendete Periodenlänge.
TE=Tracking Error, Standardabweichung der periodischen Benchmarkabweichungen.
TR=Treynor Ratio: Überschussrendite geteilt durch Markt-Beta, hier kein Umsatz.
beta|\beta_P=Markt-Beta des Portfolios P als Maß seines systematischen Marktrisikos.
E|E[R_{Q'}]=Erwartete Rendite der in der Grafik auf Vergleichsrisiko skalierten Strategie Q.
`)
];
