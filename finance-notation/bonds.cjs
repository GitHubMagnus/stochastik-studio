const {chapter:C}=require('./author.cjs');const T=String.raw;
module.exports=[
C('Jeder reguläre Zahlungstermin enthält den anteiligen Jahreskupon. Nur am letzten Termin kommt die Rückzahlung des Nennwerts hinzu. Das Indikatorzeichen schaltet diese Schlusszahlung genau dann ein, wenn der Zahlungsindex den letzten Termin erreicht.',T`
F=Nennwert beziehungsweise vertraglicher Tilgungsbetrag der Anleihe, in Geldeinheiten.
c=Nominaler jährlicher Kuponsatz als Dezimalzahl.
m=Anzahl gleich großer Kuponzahlungen pro Jahr.
C=Kuponbetrag je Jahr im jährlichen Beispiel; bei m Terminen beträgt der einzelne Kupon Fc/m.
k n=Nummer des Zahlungstermins und Gesamtzahl der Zahlungstermine. Der Indikator 1_{k=n} ist am letzten Termin eins und sonst null.
`),
C('Die Haltedauerrendite bezieht den Gewinn auf den tatsächlich gezahlten Preis. Eine Diskontrendite bezieht denselben Gewinn dagegen auf den Rückzahlungsnennwert und rechnet ihn mit einer Tagesbasis hoch. Diese Notierungen sind daher nicht unmittelbar vergleichbar.',T`
F P=Nennwert bei Rückzahlung und heutiger Kaufpreis des Geldmarktpapiers.
G=Gewinnbetrag bei Rückzahlung, F − P.
HPR r|\mathrm{HPR},\ r_{HP}=Einfache Rendite über die tatsächliche Haltedauer, nicht automatisch eine Jahresrendite.
d=Auf den Nennwert bezogener annualisierter Diskontsatz als Dezimalzahl.
y|y_{360},\ y_{365}=Einfache annualisierte Anlagerendite mit 360- beziehungsweise 365-Tage-Basis.
D=Restlaufzeit in Tagen.
B=Verwendete Tage pro Jahr der Notierung, hier 360 oder 365.
`),
C('Der tatsächlich abzurechnende Dirty Price enthält den notierten Clean Price plus aufgelaufene Stückzinsen. Stückzinsen ordnen den bereits verstrichenen Teil des laufenden Kupons dem Verkäufer zu. Zwischen Kuponterminen ändern sich außerdem die Abzinsungsexponenten.',T`
P|P_d,\ P_c,\ P_{\mathrm{dirty}},\ P_{\mathrm{clean}}=Preis einschließlich beziehungsweise ohne Stückzinsen, jeweils auf derselben Nennwertbasis; d/c und dirty/clean sind alternative Kennzeichnungen.
AI=Accrued Interest, seit dem letzten Kupontermin aufgelaufene Stückzinsen in Geldeinheiten.
F c=Nennwert und nominaler Jahreskuponsatz als Dezimalzahl.
m=Zahl der Kuponzahlungen pro Jahr.
d D=Seit dem letzten Kupontermin verstrichene Tage und gesamte Tage der Kuponperiode nach der verwendeten Zähltagskonvention. d_accrued und d_period sind alternative Indizes dafür.
w=Bruchteil einer Kuponperiode von der Abrechnung bis zum nächsten Kupontermin; im einfachen Modell eins minus bereits verstrichener Anteil.
y=Annualisierte nominale Rendite mit m Zinsperioden pro Jahr; y/m ist der Periodenzins.
k n=Nummer der noch ausstehenden Zahlung und Gesamtzahl der noch ausstehenden Zahlungen.
`),
C('Ausführungskosten vergleichen den tatsächlich erzielten Kurs mit einem Referenzkurs und addieren Gebühren. Die Richtung der Transaktion entscheidet über das Vorzeichen. Ein relativer Round-trip-Spread misst näherungsweise die Kosten eines sofortigen Kaufs und Wiederverkaufs.',T`
C|C,\ C_{\mathrm{round}}=In der Kostenformel gesamte Ausführungskosten in Geld; C_round bezeichnet dagegen die näherungsweise relative Round-trip-Belastung. C im Kaufbeispiel ist der gezahlte Kaufbetrag.
q=Vorzeichenbehaftete gehandelte Menge: positiv für Kauf, negativ für Verkauf in der angegebenen Kostenformel.
P|P_{\mathrm{exec}},\ P_{\mathrm{mid}}=Ausführungspreis und Referenzmittelkurs je Einheit; bei Prozentnotierung zuerst mit dem Nennwert konsistent in Geld umrechnen.
F|F_{\mathrm{fees}}=Explizite Gebühren der Transaktion, in Geldeinheiten.
Ask Bid Mid=Briefkurs, Geldkurs und deren Mittelpunkt auf derselben Notierungsbasis.
V=Marktwert nach der im Beispiel angenommenen Kursänderung.
L=Verlustbetrag im Beispiel; relativ zum ursprünglichen Kaufbetrag ergibt sich die Verlustquote.
`),
C('Der Anleihepreis ist die Summe der Barwerte aller noch ausstehenden Kupons und Tilgungen. Bei einer einheitlichen Rendite wird jede Zahlung mit derselben Periodenrendite, aber entsprechend ihrer Wartezeit abgezinst. Eine höhere geforderte Rendite senkt bei positiven festen Zahlungen den Preis.',T`
P|P(y)=Voller Anleihepreis als Funktion der annualisierten nominalen Rendite y.
y|y,\ y_{\mathrm{eff}}=Nominale Jahresrendite bei m Verzinsungen pro Jahr und daraus abgeleitete effektive Jahresrendite.
m=Zahl der Kupon- und Zinsperioden pro Jahr; mT ist die Anzahl ausstehender Zahlungen bei vollen Perioden.
F c=Nennwert und nominaler Jahreskuponsatz; cF ist der jährliche Kuponbetrag.
CY=Current Yield, jährlicher Kuponbetrag geteilt durch aktuellen Preis; berücksichtigt keinen Kursgewinn bis zur Tilgung.
D|D_{\mathrm{mod}}=Modifizierte Duration: negative relative Preisableitung nach y; näherungsweise relative Preisempfindlichkeit pro absoluter Renditeänderung.
`),
C('Ein Spotzins diskontiert eine einzelne Zahlung mit bestimmter Laufzeit. Forward-Zinsen verbinden zwei solche Abzinsungsfaktoren durch Arbitragefreiheit. Die Par-Rendite bestimmt dagegen den Kupon, bei dem die Summe aller Zahlungsbarwerte genau dem Nennwert entspricht.',T`
s|s_t=Effektiver jährlicher Spotzins für eine Zahlung in t Jahren.
r|r_t=Stetiger Spotzins derselben Laufzeit; die Umrechnung erfolgt über den identischen Abzinsungsfaktor.
d|d_1,\ d_2=Abzinsungsfaktoren für die ersten beiden Jahreszahlungen im Rechenbeispiel; alternative Schreibweise zu DF.
f|f_{t,T},\ f_{1,2}=Heute implizierter effektiver jährlicher Forward-Zins für den Zeitraum t bis T, beziehungsweise Jahr eins bis zwei.
c|c_{\mathrm{par}},\ c_n,\ c=Par-Kuponsatz pro Jahr bei Nennwert eins. c ohne Index im Zahlenbeispiel mit Nennwert 100 bezeichnet dagegen den jährlichen Kuponbetrag; dort muss mit 100 skaliert werden.
alpha|\alpha_k=Jahresbruchteil der Kuponperiode k nach der Zähltagskonvention; skaliert den jährlichen Kuponsatz auf die einzelne Zahlung.
P=Beobachteter voller Anleihepreis, der beim Bootstrapping zusammen mit bekannten früheren Abzinsungsfaktoren den letzten Faktor bestimmt.
n=Anzahl der Kupontermine; in der Jahreskurvengrafik zugleich Laufzeit in Jahren.
`),
C('Eine längere Anleiherendite lässt sich näherungsweise in den Durchschnitt erwarteter kurzer Zinsen und eine Laufzeitprämie zerlegen. Daraus folgt, dass eine steigende Zinskurve nicht allein steigende Leitzinserwartungen beweist.',T`
y|y_n=Rendite einer Anleihe mit n kurzen Perioden Laufzeit, konsistent annualisiert.
i|i_t,\ \bar i=Kurzer Zinssatz der künftigen Periode t beziehungsweise Durchschnitt solcher Zinsen.
E|E[i_t]=Heute erwarteter künftiger Kurzfristzins.
TP|TP_n=Laufzeitprämie der n-periodigen Anleihe, in derselben Renditeeinheit.
x=Gesuchter zukünftiger kurzer Zinssatz im Beispiel.
r|r_t=Momentaner kurzer Zinssatz im kontinuierlichen Zinsmodell.
a b=Positive Rückkehrgeschwindigkeit a und langfristiges Zinsniveau b der Mean-Reversion-Modelle.
sigma|\sigma=Diffusionsparameter des Zinsmodells; im Vasicek-Modell konstante, im CIR-Modell mit der Wurzel des kurzen Zinses skalierte lokale Schwankung.
W|W_t=Standard-Wienerprozess; dW_t ist ein zufälliges Inkrement mit Erwartungswert null und Varianz dt, kein Vermögenswert.
d=In dr und dt Differentialzeichen: sehr kleine Änderung des Zinses beziehungsweise der Zeit.
`),
C('Macaulay-Duration ist der mit Zahlungsbarwerten gewichtete mittlere Zahlungszeitpunkt. Ableiten der Preisformel nach der nominalen Jahresrendite erzeugt zusätzlich den Faktor 1/(1+y/m); dadurch entsteht die modifizierte Duration als Preisempfindlichkeit. Die Konvexität ergänzt die lineare Preisnäherung um die Krümmung. Alle drei Größen müssen zur gleichen Preis-, Zins- und Zeitkonvention gehören.',T`
D|D_{\mathrm{Mac}},\ D_{\mathrm{mod}},\ D_{\mathrm{eff}},\ D_s=Macaulay-Duration in Jahren; modifizierte Duration als relative Preissensitivität nach y; effektive Duration aus neu bewerteten Szenarien; Spread-Duration nach Spread z. D ohne Index steht im einfachen Preisbeispiel für modifizierte Duration. approx bezeichnet eine numerische Näherung, FW Fisher-Weil-Duration, Zero einen Nullkuponbond.
P|P(y),\ P_0,\ P_-,\ P_+=Voller Ausgangspreis als Funktion der Rendite, unveränderter Basispreis sowie neu berechneter Preis nach Absenkung beziehungsweise Anhebung des betrachteten Zinses. Zahlenindizes 2 und 10 kennzeichnen in der Laufzeitaufgabe zwei- und zehnjährige Bonds; A und B die verglichenen Positionen.
y=Nominale Jahresrendite mit m Verzinsungsperioden; y/m ist der Periodenzins. Delta y wird als Dezimaländerung eingesetzt, etwa 0,005 für 50 Basispunkte.
m=Anzahl der Kupon- und Zinsperioden je Jahr; etwa zwei bei halbjährlichen Kupons.
F c=Nennwert der Anleihe und jährlicher Kuponsatz als Dezimalzahl.
k n=Nummer des Zahlungstermins und Gesamtzahl der verbleibenden Zahlungen. Der Tilgungsindikator ist nur für k = n gleich eins.
t|t_k=Zeit bis zur Zahlung k in Jahren, bei vollen Perioden k/m. Der Index zählt Zahlungen, der Zahlenwert t_k misst Jahre.
w|w_k=Barwertanteil der Zahlung k am vollen Anleihepreis. Bei festen positiven Cashflows sind die Gewichte nichtnegativ und summieren sich zu eins.
C Conv|C_y,\ C_{\mathrm{approx}},\ C_{\mathrm{eff}}=Konvexität nach der jeweiligen Renditekonvention: zweite Preisableitung geteilt durch Preis, beziehungsweise ihre numerische oder effektive Näherung; bei Jahreszinsen üblicherweise in Jahren² angegeben. Conv und C ohne Index meinen im Beispiel dieselbe Krümmungsgröße.
r=Stetiger Jahreszins, der über r = m ln(1+y/m) denselben Abzinsungsfaktor wie die nominale Rendite erzeugt. Seine relative Preisableitung ergibt die Macaulay-Duration.
V=Marktwert der gesamten gehaltenen Position, nicht bloß ein auf 100 Nennwert normierter Stückpreis.
MD|MD,\ D_{\mathrm{money}}=Money Duration: Marktwert mal modifizierte Duration. Sie skaliert die relative Empfindlichkeit auf den Geldbetrag der Position.
DV|\mathrm{DV01}=Näherungsweiser Geldwert einer Zinsbewegung von einem Basispunkt; hier als positiver Risikobetrag einer Long-Position angegeben. Ein Zinsanstieg führt näherungsweise zur negativen entsprechenden Wertänderung.
h delta|h,\ \delta=Positiver Betrag des symmetrischen Zinsschocks als Dezimalzahl; im Beispiel 0,001 für zehn Basispunkte. Der Nenner 2h berücksichtigt den gesamten Abstand zwischen Minus- und Plus-Szenario.
KRD|\mathrm{KRD}_j=Key-Rate-Duration am Kurvenknoten j: negative relative Preisableitung nach genau diesem Knoten bei festgelegter Verschiebungs- und Interpolationsmethode.
s|s_j,\ s(t_k)=Spotzins am Kurvenknoten j beziehungsweise stetiger Spotzins zur Zahlungszeit t_k. Nicht mit dem Spread z verwechseln.
z=Separat modellierter Kredit- oder Optionsadjusted Spread; Delta z verändert den Spread bei sonst festgehaltener Basiskurve.
H=Anlagehorizont in Jahren; im Wiederanlagebeispiel wird bis zu diesem Termin bewertet.
W|W_H=Wert am Anlagehorizont einschließlich Kupons und deren Wiederanlage. Die Sensitivitätsformel setzt den im Text beschriebenen einheitlichen Zins- und Wiederanlageschock voraus.
T=Vertragliche Restlaufzeit in Jahren. Nur beim Nullkuponbond ist die Macaulay-Duration genau gleich T.
`),
C('Die Haltedauerrendite erfasst den Verkaufspreis am Horizont und alle bis dahin erhaltenen, gegebenenfalls wiederangelegten Kupons. Sie kann von der anfänglichen Rendite bis Fälligkeit abweichen, weil Verkaufspreis und Wiederanlagezins unsicher sind.',T`
R HPR|R_H,\ \mathrm{HPR}=Gesamtrendite über den Anlagehorizont H, vor einer möglichen Annualisierung.
P|P_0,\ P_H=Anfänglicher voller Kaufpreis und voller Verkaufs- beziehungsweise Restwert am Horizont H.
C|C_t=Bis zum Horizont erhaltene Kuponzahlung am Zeitpunkt t.
r|r_{\mathrm{re}}=Für die Kupons verwendeter Wiederanlagezinssatz pro Jahr bei in Jahren gemessenen Exponenten.
W|W_H=Gesamter Endwert aus Verkaufserlös und wiederangelegten Zahlungen.
H=Anlagehorizont in Jahren; nur Zahlungen mit t höchstens H werden wiederangelegt.
`),
C('Erwarteter Kreditverlust kombiniert die Wahrscheinlichkeit des Ausfalls, den im Ausfall gefährdeten Betrag und den davon verlorenen Anteil. Das einfache Produkt setzt feste oder passend bedingt definierte Größen voraus; bei Abhängigkeiten muss der bedingte Erwartungswert verwendet werden.',T`
D=Ereignis des Ausfalls im betrachteten Zeitraum; L_D bezeichnet den Verlustbetrag unter diesem Ereignis.
L|L_D=Verlustbetrag bei eingetretenem Ausfall, noch nicht mit der Ausfallwahrscheinlichkeit gewichtet.
P|P(D)=Wahrscheinlichkeit des Ausfallereignisses.
E|E[\cdot\mid D]=Erwarteter Verlustbetrag bedingt auf den Eintritt eines Ausfalls.
Q|Q(T)=Überlebenswahrscheinlichkeit bis zum Zeitpunkt T im konstanten Intensitätsmodell.
lambda|\lambda=Konstante Ausfallintensität pro Jahr; nicht identisch mit einer mehrjährigen kumulierten Ausfallwahrscheinlichkeit.
`),
C('Die Zinsdeckungsquote vergleicht operativen Gewinn und Zinslast. Der Credit Spread enthält neben erwarteten Ausfallverlusten auch Risiko- und Liquiditätsprämien. Deshalb darf der gesamte Spread nicht ohne zusätzliche Annahmen in eine Ausfallwahrscheinlichkeit übersetzt werden.',T`
ICR=Interest Coverage Ratio, Zinsdeckungsgrad: EBIT geteilt durch Zinsaufwand.
I=Zinsaufwand der Periode.
s=Jährlicher Credit Spread als Dezimalzahl.
lambda|\lambda=Ausfallintensität pro Jahr in der vereinfachten Spread-Näherung.
RP LP=Risiko- und Liquiditätsprämie innerhalb des Spreads, in derselben jährlichen Renditeeinheit.
D|D_s=Spread-Duration, relative Preisempfindlichkeit gegenüber dem Spread.
P=Voller Anleihepreis; Delta P/P ist seine relative Veränderung.
`),
C('Ein Haircut vermindert den Finanzierungsbetrag gegenüber dem Marktwert der Sicherheit. Der Rückkaufpreis enthält anschließend den Repo-Zins für die tatsächliche Zahl von Finanzierungstagen. Sicherheit, Kreditbetrag und selbst zu finanzierender Anteil sind dadurch klar getrennt.',T`
L=Ausgereichter Repo-Kreditbetrag, in Geldeinheiten.
V|V_C=Marktwert der hinterlegten Sicherheit zum Ausgangszeitpunkt.
h=Haircut als Dezimalanteil des Sicherheitenwerts, beispielsweise 0,05 für 5 %.
P|P_{\mathrm{rep}}=Vereinbarter Rückkaufbetrag einschließlich Repo-Zinsen.
r|r,\ r_{\mathrm{repo}}=Annualisierter einfacher Repo-Zinssatz.
d D=Zahl der Finanzierungstage; d im Ausgangspunkt, D in der Herleitung.
B=Tagesbasis des Jahres, im Beispiel 360.
I=Repo-Zinsbetrag über die Finanzierungstage.
E=Vom Anleger selbst finanzierter Eigenmittelanteil an der Sicherheit, im vereinfachten Modell h mal V_C.
`),
C('Der Wasserfall weist Verluste zuerst nachrangigen Tranchen zu. Eine betrachtete Tranche verliert erst, wenn die Verluste des Pools ihre vorgelagerte Schutzschicht überschreiten, und höchstens ihren eigenen Nennwert.',T`
L|L_P,\ L_j=Gesamter Poolverlust in Geld und der Tranche j zugewiesener Geldverlust. L ohne Index in der normierten Formel ist dagegen die Poolverlustquote; L_[a,d] ist die daraus folgende Trancheverlustquote.
N|N_j,\ N_i=Nennwert der betrachteten Tranche j und Nennwerte vorher verlusttragender Tranchen i; i kleiner j bezeichnet hier Nachrang vor der betrachteten Tranche.
a d=Attachment und Detachment Point als Anteile des Poolnennwerts. d − a ist die Breite der Tranche, nicht eine Geldsumme.
`),
C('Das Recht zur vorzeitigen Rückzahlung gehört wirtschaftlich dem Kreditnehmer. Sein Optionswert wird deshalb vom Wert einer ansonsten identischen Zahlungsreihe ohne dieses Recht abgezogen. Bei fallenden Zinsen können kürzere Cashflows den Kursanstieg begrenzen und negative Konvexität erzeugen.',T`
P|P_{\mathrm{MBS}},\ P_{\mathrm{no\ option}}=Wert des MBS mit Vorzahlungsrecht und Wert der vergleichbaren Zahlungsreihe ohne dieses Recht.
C|C_{\mathrm{prepay}},\ C_{\mathrm{eff}}=Mit Index prepay der Wert der Kreditnehmeroption; mit Index eff dagegen die effektive Konvexität aus Szenariopreisen.
P|P_0,\ P_-,\ P_+=Basispreis und neu bewertete Preise bei niedrigerem beziehungsweise höherem Zins.
D|D_{\mathrm{eff}}=Effektive Duration unter erneuter Modellierung der zinsabhängigen Cashflows.
r=Für die Szenariobewertung verschobener Referenzzins; Delta r ist der positive Betrag des symmetrischen Schocks.
CPR SMM=Conditional Prepayment Rate pro Jahr und Single Monthly Mortality pro Monat, jeweils bedingte Vorzahlungsquoten; die Formel übersetzt über den verbleibenden Restbestand.
I|I_0,\ I_1=Jährlicher Zinsertrag vor beziehungsweise nach der vorzeitigen Rückzahlung und Wiederanlage im Beispiel.
`),
C('Eine kündbare Anleihe entspricht wirtschaftlich einer normalen Anleihe abzüglich der Option des Emittenten. Ein Rückgaberecht des Investors erhöht dagegen den Wert. Der OAS ist der zusätzliche konstante Spread, der im verwendeten Zins- und Optionsmodell den Marktpreis reproduziert.',T`
P|P_{\mathrm{callable}},\ P_{\mathrm{putable}},\ P_{\mathrm{straight}}=Wert der kündbaren, der vom Investor rückgebbaren und der sonst gleichen optionsfreien Anleihe. P_mkt ist der beobachtete Marktpreis.
C|C_{\mathrm{issuer}},\ C=Wert des Kündigungsrechts des Emittenten, das dem Anleger wirtschaftlich entgegensteht.
P|P_{\mathrm{opt}},\ P_{\mathrm{investor}}=Mit Index opt oder investor der Wert der Rückgabeoption, nicht der Preis der gesamten Anleihe.
E|E^Q[\cdot]=Erwartungswert unter dem risikoneutralen Bewertungsmaß Q, nicht unter realen Häufigkeiten.
Q=Risikoneutrales Wahrscheinlichkeitsmaß als hochgestellte Kennzeichnung des Erwartungswerts.
omega|\omega=Ein möglicher Pfad des Zins- und Cashflow-Modells.
r|r_u(\omega)=Stetiger kurzer Zinssatz zum Zeitpunkt u auf Pfad omega.
s=Optionsadjustierter Spread als konstanter Zuschlag zum kurzen Zins im Modell.
u=Integrationsvariable für die Zeit zwischen heute und Zahlungstermin t.
`)
];
