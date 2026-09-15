const {chapter:C}=require('./author.cjs');const T=String.raw;
module.exports=[
C('Die erwartete Aktienrendite lässt sich näherungsweise aus Dividendenrendite, Gewinnwachstum je Aktie und Veränderung des Bewertungsmultiplikators zusammensetzen. Die Zerlegung trennt laufende Ausschüttung, Geschäftsentwicklung und Bewertungsänderung; ihre Summe ist eine Näherung.',T`
R|R,\ R_E=Erwartete Gesamtrendite der Aktienanlage über die angegebene Periode.
DY=Dividend Yield, Dividendenrendite der betrachteten Aktienanlage.
g|g_{EPS},\ g_{PE},\ g_{P/E},\ g_{\mathrm{Multiple}}=Wachstumsrate des Gewinns je Aktie und annualisierte Änderungsrate des Kurs-Gewinn-Multiplikators; PE und P/E bezeichnen denselben Multiplikator.
E|E[R]=Erwartungswert der Rendite.
mu|\mu_{\mathrm{post}},\ \mu_{\mathrm{sample}},\ \mu_{\mathrm{prior}}=Kombinierte Renditeschätzung, aus der Stichprobe gewonnene Schätzung und vorherige beziehungsweise strukturelle Einschätzung.
w=Gewicht der Stichprobenschätzung zwischen null und eins; 1 − w gewichtet die vorherige Einschätzung.
`),
C('Die Optimierung wägt erwartete Rendite gegen Risiko und gegebenenfalls Umschichtungskosten ab. Zulässige Portfolios müssen zusätzlich Liquiditäts-, Konzentrations- und andere Grenzen einhalten. Das theoretische freie Optimum kann dadurch nicht umsetzbar sein.',T`
w|\mathbf w,\ \Delta\mathbf w=Vektor der Zielgewichte und Änderungen gegenüber den bestehenden Gewichten.
W|\mathcal W=Menge aller Portfolios, die sämtliche Nebenbedingungen erfüllen.
mu|\boldsymbol\mu=Vektor erwarteter Anlagenrenditen auf einheitlicher Periodenbasis.
Sigma|\Sigma=Kovarianzmatrix dieser Renditen.
A=Positiver Risikoaversionsparameter der Zielfunktion.
C|C(\Delta\mathbf w)=Auf dieselbe Zielgröße skalierte Handels- und Umschichtungskosten der Gewichtsänderung.
G h=Koeffizientenmatrix G und Grenzwertvektor h der linearen Nebenbedingungen G w ≤ h; jede Zeile bildet eine einzelne Beschränkung ab.
`),
C('ALM betrachtet Vermögen relativ zu den zu finanzierenden Verpflichtungen. Der Überschuss misst die Geldlücke, der Deckungsgrad das Verhältnis. Bei Zinsänderungen hängt die Überschusswirkung von beiden Marktwerten und beiden Durationen ab, nicht nur vom Anlagerisiko.',T`
S=Surplus: Markt- beziehungsweise Barwert der Aktiva abzüglich Barwert der Verpflichtungen.
A L=Vermögenswert der Aktiva und konsistent bewerteter Verpflichtungswert.
FR=Funding Ratio, Deckungsgrad A/L; über eins bei Überdeckung.
D|D_A,\ D_L=Zinssensitivität der Aktiva und Verpflichtungen in der jeweils verwendeten Zinskonvention. In der Zero-Bond-Grafik sind die angegebenen 2, 5 und 8 zunächst Macaulay-Laufzeiten; für die Sensitivität nach effektivem y ist durch 1+y zu teilen.
y=Gemeinsam veränderter Jahreszinssatz; Delta y als Dezimaländerung.
Var Cov=Varianz eines Vermögens- oder Verpflichtungswerts und Kovarianz beider. Beide Bestände müssen auf derselben Geld- und Zeitbasis modelliert sein.
PV|PV_A(y),\ PV_L(y)=Barwerte der Aktiv- und Verpflichtungszahlungen als Funktionen des Bewertungszinses in der Grafik.
`),
C('Liquiditätsbedarf entsteht aus geplanten Auszahlungen abzüglich verfügbarer Einzahlungen plus Reserve. Bei der Fortschreibung des Vermögens ist entscheidend, ob eine Entnahme am Anfang oder Ende der Renditeperiode stattfindet.',T`
L|L_{\mathrm{req}}=Benötigter liquider Betrag für den betrachteten Horizont.
O I B=Erwartete Auszahlungen, erwartete Einzahlungen und zusätzlicher Liquiditätspuffer, in derselben Währung.
W|W_t=Verfügbares Vermögen zu Beginn der Periode t.
D|D_t,\ D_H=Entnahme am Periodenanfang beziehungsweise Nettoentnahme des Haushalts im Beispiel.
R|R_{t+1}=In der nächsten Periode erzielte Vermögensrendite nach der Anfangsentnahme.
d|d_F,\ d_H=Entnahmequote der Institution beziehungsweise des Haushalts im Beispiel.
`),
C('Ein gemeinsames Faktormodell macht sichtbar, welche Risiken sich hinter verschiedenen Anlageklassen wiederholen. Die Portfoliovarianz zerfällt in systematische Faktorvarianz und verbleibende spezifische Varianz, sofern diese Komponenten wie angenommen unkorreliert sind.',T`
w=Vektor der Portfoliogewichte.
B=Matrix der Faktorsensitivitäten: Zeilen stehen für Anlagen, Spalten für Faktoren.
Omega|\Omega=Kovarianzmatrix der Faktoränderungen beziehungsweise Faktorrenditen.
D Psi|D,\ \Psi=Kovarianzmatrix der spezifischen Restkomponenten. Bei unkorrelierten spezifischen Risiken diagonal; D und Psi sind alternative Notationen.
Sigma|\Sigma=Gesamte Kovarianzmatrix der Anlagenrenditen, zusammengesetzt aus Faktor- und Restkovarianz.
sigma|\sigma_p^2=Gesamte Portfoliovarianz.
b|\mathbf b_P=Aggregierter Vektor der Portfolio-Faktorsensitivitäten, Bᵀw.
C|C_E,\ C_{PE},\ C_B=Renditebeiträge von Aktien, Private Equity und Anleihen im Szenario: Gewicht mal jeweilige Rendite.
R|R_P=Gesamte Portfoliorendite im betrachteten Szenario.
`),
C('Die ungesicherte Heimwährungsrendite kombiniert lokale Anlage- und Währungsrendite. Ein Devisenhedge reduziert den Währungsanteil, verändert aber auch das Zusammenspiel mit der Anlage. Die varianzminimierende Hedgequote hängt deshalb von ihrer Kovarianz ab.',T`
R|R_H,\ R_F,\ R_L,\ R_{FX}=Rendite in Heimwährung, lokale Fremdwährungsrendite (F oder L) und Wechselkursrendite der Fremdwährung gegenüber der Heimwährung.
h|h,\ h^*=Abgesicherter Anteil des Währungsexposures und dessen varianzminimierender Wert in der linearen Näherung ohne Hedgekosten.
Cov Var=Kovarianz von lokaler Anlage- und Währungsrendite beziehungsweise Varianz der Währungsrendite.
V|V_0,\ V_{1,u},\ V_{1,h}=Anfangsvermögen und Endvermögen ungesichert (u) beziehungsweise gehedgt (h), jeweils in Heimwährung.
Pi|\Pi_F=Gewinn des Devisenforwards in Heimwährung; er wird zum ungesicherten Anlageendwert addiert.
`),
C('Ein Overlay verändert ausgewählte Sensitivitäten, ohne sämtliche Basisanlagen zu handeln. Die Taylor-Zerlegung zeigt die zu steuernden Kurs- und Volatilitätsrisiken. Mehrere Kontrakte können gemeinsam so gewählt werden, dass ihre Sensitivitäten die gewünschte Änderung ergeben.',T`
V S=Portfoliowert und Basiswertkurs; Delta V und Delta S sind deren Änderungen.
Delta|\Delta=Allein stehendes Delta ist Kurssensitivität. Als Präfix vor V, S oder DV01 bezeichnet es dagegen die Veränderung dieser Größe.
Gamma nu|\Gamma,\ \nu=Gamma als zweite Kursableitung und Vega als Volatilitätsableitung des Portfolio- beziehungsweise Optionswerts.
sigma|\sigma=Volatilitätsparameter; seine Änderung muss in derselben Dezimal- oder Prozentpunktkonvention wie Vega eingesetzt werden.
DV|\mathrm{DV01}=Geldempfindlichkeit einer Zinsänderung um einen Basispunkt.
N=Kontraktzahl im einzelnen DV01-Hedgebeispiel.
A=Matrix der Sensitivitäten je Overlay-Kontrakt; Zeilen kennzeichnen Risiken, Spalten Kontrakte.
n|\mathbf n=Vektor der zu handelnden, vorzeichenbehafteten Kontraktzahlen.
b|\Delta\mathbf b=Vektor der angestrebten Änderungen der Risikosensitivitäten.
`),
C('Die Liquiditätsquote vergleicht unter Stress verfügbare Mittel mit den im selben Horizont fälligen Abflüssen. Eine Quote über eins bedeutet nur unter den gesetzten Stressannahmen ausreichende Deckung. Konzentration wird separat anhand der Gewichtsverteilung beurteilt.',T`
ell|\ell_H=Liquiditätsdeckungsquote für Horizont H, verfügbare liquide Mittel geteilt durch Abflüsse.
L A|L_{\mathrm{stress}},\ A_{\mathrm{liq},H}=Unter dem Stressszenario rechtzeitig verfügbare liquide Vermögenswerte nach Haircuts.
O|O_{\mathrm{stress}},\ O_{\mathrm{net},H}=Im Horizont zu bedienende Stressabflüsse; der Zusatz net bezeichnet bereits um verlässliche Einzahlungen verminderte Abflüsse.
V|V_{\mathrm{sell}}=Vor Haircut zu verkaufender Vermögensbetrag, um den nötigen Nettoerlös zu erreichen.
HHI=Herfindahl-Hirschman-Index der Portfoliogewichte: Summe ihrer Quadrate; bei höheren Werten stärkere Konzentration.
w|w_i=Anteil der Position i am Gesamtportfolio.
`),
C('Die Brinson-Zerlegung ordnet aktive Rendite drei Quellen zu: anderer Bereichsgewichtung, anderer Titelauswahl innerhalb eines Bereichs und deren Wechselwirkung. Nur bei konsistenten Gewichten und Renditen addieren sich die Effekte zur tatsächlichen Benchmarkabweichung.',T`
A|A_i=Allokationseffekt des Bereichs i nach der dargestellten Brinson-Fachler-Konvention.
S|S_i=Selektionseffekt des Bereichs i bei dessen Benchmarkgewicht.
I|I_i=Interaktion zwischen aktiver Gewichtung und aktiver Bereichsrendite.
w b|w_i,\ b_i,\ w_{Pi},\ w_{Bi}=Portfolio- und Benchmarkgewicht des Bereichs i; die längeren Indizes sind alternative Notationen.
R|R_{P,i},\ R_{B,i},\ R_P,\ R_B=Rendite des Portfolio- und Benchmarksegments i sowie Gesamtrenditen von Portfolio und Benchmark. R_A ist die aktive Gesamtrenditedifferenz.
`),
C('Eine historische aktive Rendite muss im Verhältnis zu ihrer Schätzunsicherheit bewertet werden. Bei unabhängigen gleich verteilten Perioden sinkt der Standardfehler mit der Wurzel der Beobachtungszahl. Die Verbindung zur Information Ratio gilt nur bei gleicher Periodisierung und der angenommenen Fehlerstruktur.',T`
t=t-Statistik zum Test einer mittleren aktiven Rendite gegen null; hier kein Zeitindex.
R a|\bar R_a,\ \bar a=Arithmetische mittlere aktive Rendite, also Rendite abzüglich Benchmark, pro beobachteter Periode.
s|s_a=Stichprobenstandardabweichung der aktiven Periodenrenditen.
SE=Standardfehler der geschätzten mittleren aktiven Rendite.
T n=Anzahl unabhängiger Beobachtungsperioden; 60 Monatswerte bedeuten hier T = 60, nicht fünf Jahre.
IR=Information Ratio auf derselben Periodenbasis wie die Beobachtungen; eine Jahres-IR darf nicht mit der Wurzel einer Monatszahl multipliziert werden.
`),
C('Für den Anleger zählt die aktive Rendite nach Verwaltungs- und Umsetzungskosten. Bei einem Managerwechsel müssen außerdem einmalige Wechselkosten mit dem Barwert erwarteter künftiger Vorteile verglichen werden. Eine kurze Amortisationszeit allein ist keine vollständige Bewertung.',T`
alpha|\alpha_{\mathrm{net}},\ \alpha_{\mathrm{gross}}=Modellbereinigte Überschussrendite nach beziehungsweise vor den ausdrücklich abgezogenen Kosten.
f c=Laufende Managementgebühr und laufende Umsetzungskosten als Renditeanteile pro derselben Periode.
C|C_0=Einmalige Kosten des Mandatswechsels in Geldeinheiten.
B=Jährlicher erwarteter Nettovorteil des Wechsels im Amortisationsbeispiel.
T|T_{\mathrm{payback}}=Einfache Amortisationsdauer in Jahren bei konstantem jährlichem Vorteil, ohne Abzinsung.
E|E[\Delta CF_t]=Erwarteter zusätzlicher Cashflow durch den Wechsel in Periode t.
r=Zum Risiko dieser zusätzlichen Cashflows passender Periodendiskontsatz.
`),
C('Eine Composite-Rendite fasst Portfoliorenditen mit Vermögensgewichten zusammen. Über mehrere Perioden werden diese Composite-Renditen geometrisch verknüpft. Welche Portfolios dazugehören und wie externe Cashflows behandelt werden, muss mit den angewendeten Darstellungsregeln konsistent sein.',T`
R|R_C,\ R_i,\ R_{C,t},\ R_{C,0:T}=Composite-Rendite, Einzelportfoliorendite, Composite-Rendite einer Periode und geometrisch verknüpfte Gesamtrendite von 0 bis T.
V|V_{i,0}=Für die Periodengewichtung verwendeter Anfangswert des Portfolios i.
w|w_{i,t}=Vermögensgewicht des Portfolios i in der Composite-Berechnung für Periode t; Summe aller Gewichte eins.
`)
];
