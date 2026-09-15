const {chapter:C}=require('./author.cjs');
module.exports=[
C('Der Finanzierungssaldo eines Sektors ist seine Ersparnis abzüglich seiner Investitionen. Ein positiver Saldo bedeutet, dass der Sektor anderen Mittel zur Verfügung stellt; ein negativer Saldo zeigt Finanzierungsbedarf. Die Veränderung seiner finanziellen Forderungen abzüglich neuer finanzieller Verbindlichkeiten bildet denselben Saldo ab.',String.raw`
B|B_s=Finanzierungssaldo des Sektors s, in Geldeinheiten pro Periode. B ohne Index ist im Beispiel der Finanzierungsbedarf als positiver Kreditbetrag.
S|S_s=Ersparnis des Sektors s in derselben Periode.
I|I_s,\ I=I_s sind reale Investitionen des Sektors. I ohne Index bezeichnet im Kreditbeispiel dagegen die Zinszahlung, also Kreditbetrag mal Zinssatz.
FA FL|FA_s,\ FL_s=Finanzielle Aktiva (Forderungen) und finanzielle Verbindlichkeiten des Sektors s. Delta bezeichnet deren Veränderung in der Periode.
F=Kreditnennbetrag im Rückzahlungsbeispiel; F + I ist Rückzahlung einschließlich Zinsen.
`),
C('Die Nettorendite setzt den gesamten wirtschaftlichen Gewinn ins Verhältnis zum eingesetzten Anfangsvermögen: Endwert und Ausschüttungen erhöhen ihn, Kosten, Steuern und Anfangseinsatz werden abgezogen. Zahlungsströme werden in derselben Währung und ohne doppelte Erfassung eingesetzt.',String.raw`
R|R_{\mathrm{net}}=Nettorendite der betrachteten Haltedauer als Dezimalzahl; 0,05 entspricht 5 %.
V|V_0,\ V_1,\ V_H=Anlagewert zu Beginn, am Ende und am Planungshorizont H, in Geldeinheiten.
D|D_1=Ausschüttungen während der Haltedauer, soweit sie nicht bereits im Endwert enthalten sind.
C|C_1=Anlagekosten der Haltedauer; bereits im Endwert abgezogene Kosten nicht erneut abziehen.
T|T_1=Steuerbetrag der Haltedauer, hier kein Zeitindex.
p|p_{\mathrm{short}}=Wahrscheinlichkeit, das benötigte Vermögen am Horizont H zu unterschreiten.
P|P(\cdot)=Wahrscheinlichkeit des Ereignisses in der Klammer.
L|L_H,\ L=L_H ist der am Horizont benötigte Betrag. L ohne Index ist im Verlustbeispiel der Verlustbetrag.
A|A_{\mathrm{free}}=Nach Abzug der Liquiditätsreserve frei investierbares Vermögen.
W|W_1=Gesamtvermögen nach dem Szenario einschließlich unveränderter Reserve.
`),
C('Die Bilanzgleichung ordnet jeden Vermögenswert einer Finanzierung durch Fremd- oder Eigenkapital zu. Die Cashflow-Gleichung erklärt separat die Veränderung der Zahlungsmittel. Ein Gewinn ist deshalb nicht automatisch ein Zahlungsmittelzufluss.',String.raw`
A=Aktiva beziehungsweise Gesamtvermögen zum Bilanzstichtag, in Geldeinheiten.
L=Verbindlichkeiten zum Bilanzstichtag.
E=Eigenkapital; E_t und E_(t−1) sind End- und Anfangsbestand der Periode t.
C=Zahlungsmittelbestand; Delta C ist seine Veränderung.
CI=Einlagen beziehungsweise neu eingezahltes Eigenkapital der Periode.
OCI=Sonstiges Ergebnis, das außerhalb des laufenden Periodengewinns das Eigenkapital verändert.
`),
C('Ein Basispunkt ist ein Hundertstel eines Prozentpunkts. Mehrperiodenrenditen werden durch Multiplikation der Wachstumsfaktoren verknüpft: Der Gewinn oder Verlust jeder Periode wirkt auf das bis dahin erreichte Vermögen.',String.raw`
R=Rendite als Dezimalzahl. R_(0,T) ist die kumulierte Rendite von 0 bis T, R_p die Portfoliorendite und R_i die Einzelrendite der Anlage i.
r=Periodenrendite r_t; r_recovery ist die erforderliche Aufholrendite nach einem Verlust.
W|W_1=Vermögen nach der ersten Periode in Geldeinheiten.
L=Verlustquote als positive Dezimalzahl; nach einem Verlust L verbleibt der Anteil 1 − L.
f=Gebührensatz; Delta f ist die Änderung in Prozentpunkten, nicht die relative prozentuale Erhöhung.
w|w_{i,0}=Anfangsgewicht der Anlage i am Gesamtportfolio, als Dezimalzahl.
C|C_i=Renditebeitrag der Anlage i: Anfangsgewicht mal Einzelrendite; Einheit wie die Portfoliorendite.
`),
C('Jede Zahlung wird mit dem zu ihrem Zeitpunkt passenden Abzinsungsfaktor in einen heutigen Wert umgerechnet. Die Summe einschließlich der meist negativen Anfangsauszahlung ist der Kapitalwert. Der interne Zins ist der Diskontsatz, bei dem diese Summe null wird.',String.raw`
r k=Diskontsatz pro Zahlungsperiode als Dezimalzahl. r_a ist der effektive Jahreszins, r_m der dazu äquivalente Monatszins; nicht einfach durch zwölf teilen.
`),
C('Der Unternehmenswert gehört allen Kapitalgebern. Für den Wert der Aktionäre werden die Finanzschulden abgezogen und überschüssige Zahlungsmittel hinzugerechnet. Erst dieser Eigenkapitalwert wird durch die Aktienzahl geteilt.',String.raw`
E=Marktwert des gesamten Eigenkapitals, in Geldeinheiten.
D=Marktwert der Finanzschulden.
C|C_{\mathrm{ex}}=Überschüssige, nicht betriebsnotwendige Zahlungsmittel; auch C_excess genannt.
P=Abgeleiteter Wert je Aktie, in Geldeinheiten pro Aktie.
N n=Anzahl der ausstehenden Aktien; N in der Herleitung, n in der Aufgabe.
`)
];
