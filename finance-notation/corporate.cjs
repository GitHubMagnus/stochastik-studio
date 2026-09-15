const {chapter:C}=require('./author.cjs');const T=String.raw;
module.exports=[
C('Bei beschränkter Haftung erhalten Eigenkapitalgeber den nach Bedienung der Schulden verbleibenden Unternehmenswert, mindestens aber null. Gläubiger erhalten höchstens den versprochenen Betrag. Die Gleichung ist eine vereinfachte Endauszahlung ohne Insolvenz- oder Abwicklungskosten.',T`
E|E_T=Endauszahlung an die Eigenkapitalgeber am Termin T, in Geldeinheiten.
A|A_T=Am Termin T verfügbarer Gesamtwert der Unternehmensaktiva.
D=Am Termin T vertraglich geschuldeter Rückzahlungsbetrag.
B|B_T=Tatsächlich an Fremdkapitalgeber gezahlter Betrag; der kleinere Wert aus Aktiva und geschuldeter Rückzahlung.
`),
C('Der Fall zeigt, wie ein sinkender Nenner den Gewinn je Aktie erhöhen kann, obwohl der Gesamtgewinn unverändert bleibt. Für die Beurteilung des Managements muss diese Rechenwirkung vom geschaffenen Unternehmenswert getrennt werden.',T`g|g_{EPS}=Relative Wachstumsrate des Gewinns je Aktie zwischen den Perioden 0 und 1.`),
C('Der Deckungsbeitrag je Einheit finanziert zuerst die Fixkosten. Die Gewinnschwelle ist die Menge, bei der sämtliche Fixkosten gedeckt sind. Zusätzliche Verkäufe erzeugen danach im linearen Modell Gewinn in Höhe ihres Deckungsbeitrags.',T`
pi|\pi=Operativer Gewinn pro Periode, hier entsprechend dem EBIT-Modell.
p v=Verkaufspreis und variable Kosten je Einheit; p − v ist der Stückdeckungsbeitrag.
Q|Q,\ Q_{BE}=Verkaufte Menge und Break-even-Menge, bei der der operative Gewinn null ist.
F=Fixkosten der Periode, in Geldeinheiten.
EP=Economic Profit, NOPAT abzüglich der Kapitalbelastung WACC mal IC.
`),
C('Der Kapitalwert zieht die Anfangsauszahlung von den abgezinsten Rückflüssen ab. Er misst den Wertzuwachs gegenüber der geforderten Rendite. Der interne Zins ist eine Nullstelle derselben Funktion; bei wechselnden Zahlungsrichtungen kann es mehrere Nullstellen geben.',T`
I|I_0=Anfangsinvestition als positiver Auszahlungsbetrag; das vorangestellte Minus macht daraus den Cashflow zum Zeitpunkt null.
k r=Diskontsatz pro Periode; r_c ist der Schnittpunktzins, bei dem zwei alternative Projekte A und B denselben Kapitalwert haben.
`),
C('Flexibilität schafft Wert, weil nach neuen Informationen nur wirtschaftlich günstige Handlungen ausgeführt werden müssen. Der Erwartungswert einer positiven Auszahlungsoption kann deshalb größer sein als die positive Komponente eines vorab gemittelten Projektergebnisses.',T`
V=Projektwert; die Indizes flex, static und option bezeichnen Wert mit Flexibilität, starren Projektwert und zusätzlichen Optionswert. V_s ist der Wert im Szenario s, V_u im günstigen Zweig, V_pilot nach dem Pilotversuch.
I=Erforderliche Investitionsauszahlung bei Ausübung der realen Option.
X=Unsicherer Nettoertrag vor Anwendung der Entscheidung, einen negativen Ausgang zu vermeiden.
E|E[\cdot]=Erwartungswert über die Modellzustände. Für einen Preis müssen Wahrscheinlichkeiten und Diskontierung mit der Risikobewertung vereinbar sein.
`),
C('Der WACC gewichtet Eigen- und Fremdkapitalkosten mit ihren Marktwertanteilen. Der Fremdkapitalterm wird um den nutzbaren steuerlichen Zinsvorteil vermindert. Die gleiche Kapitalstrukturannahme muss auch bei Cashflows, Beta-Anpassung und Bewertung verwendet werden.',T`
w|w_E,\ w_D=Marktwertanteile von Eigen- und Fremdkapital am Gesamtkapital; im Zwei-Komponenten-Modell summieren sie sich zu eins.
k|k_E,\ k_D=Geforderte Eigenkapitalrendite und Fremdkapitalzinssatz vor Steuern; kleine Indizes e und d meinen dieselben Größen.
E D=Marktwerte von Eigenkapital und verzinslichem Fremdkapital.
tau|\tau=Für den angenommenen Zinssteuervorteil relevanter Steuersatz; der Vorteil muss wirtschaftlich nutzbar sein.
beta|\beta_U,\ \beta_L=Unverschuldetes und verschuldetes Eigenkapital-Beta nach den in der Herleitung genannten Annahmen. target bezeichnet die Zielkapitalstruktur.
V|V_U,\ V_L=Unternehmenswert ohne beziehungsweise mit Verschuldung.
TS=Tax Shields, künftige steuerliche Vorteile der Finanzierung; PV(TS) ist deren Barwert.
FC=Finanzielle Krisen- und Folgekosten der Verschuldung; PV(FC) ist deren Barwert.
`),
C('Der operative Hebel misst die prozentuale EBIT-Reaktion auf eine prozentuale Absatzänderung. Der finanzielle Hebel misst anschließend die Gewinnreaktion auf eine EBIT-Änderung bei festen Zinsen. In der Nähe von Gewinnschwellen können diese Quotienten sehr groß oder nicht sinnvoll interpretierbar werden.',T`
DOL=Degree of Operating Leverage, relative Empfindlichkeit des EBIT gegenüber der Absatzmenge am betrachteten Ausgangspunkt.
DFL=Degree of Financial Leverage, relative Empfindlichkeit des Ergebnisses nach Zinsen gegenüber EBIT.
DTL=Degree of Total Leverage, Produkt aus operativem und finanziellem Hebel; hier keine latente Steuerschuld.
Q=Verkaufte Menge pro Periode; Q_BE bezeichnet die operative Gewinnschwelle.
p v=Preis und variable Kosten je verkaufter Einheit.
F=Fixe operative Kosten pro Periode.
I=Fester Zinsaufwand pro Periode; EBIT − I ist im vereinfachten Modell das Ergebnis vor Steuern.
TR TC=Gesamtumsatz und Gesamtkosten der Periode.
`),
C('Der Cash Conversion Cycle zählt die Tage zwischen eigener Zahlung für Waren und Zahlungseingang vom Kunden. Lager- und Forderungsdauer verlängern die Kapitalbindung, das Lieferantenziel verkürzt sie. Die Kapitalbedarfsrechnung mit einem täglichen Betrag ist eine vereinfachte Schätzung.',T`S=Jahresumsatz als Nenner der Forderungslaufzeit; der Balken über AR bezeichnet durchschnittliche Forderungen.`),
C('Ein Rückkauf verändert die Aktienzahl und damit den Gewinn je Aktie. Eine Dividende entzieht dem Unternehmen dagegen Zahlungsmittel, weshalb der Aktienpreis im vereinfachten Modell am Ex-Tag um die Dividende sinkt. Preisänderung und Ausschüttung müssen für die Gesamtrendite zusammen betrachtet werden.',T`
N|N_0,\ N_1=Aktienzahl vor und nach dem Rückkauf.
P|P_{\mathrm{cum}},\ P_{\mathrm{ex}},\ P_{\mathrm{rep}}=Aktienpreis mit Dividendenanspruch, ohne Dividendenanspruch und Ausführungspreis des Rückkaufs.
D DPS=Dividende je Aktie, in Geldeinheiten pro Aktie.
B=Für Aktienrückkäufe eingesetzter Geldbetrag.
W=Vermögen je ursprünglicher Aktie nach Ausschüttung: verbleibender Aktienwert plus erhaltene Dividende.
R=Gesamtrendite unter Berücksichtigung der Ausschüttung.
`),
C('Der Erwerber gewinnt nur, wenn der zusätzliche gemeinsame Wert den Kaufpreisaufschlag und die Transaktionskosten übersteigt. Der Gesamtwert der Kombination und der Wertzuwachs für die alten Erwerberaktionäre sind deshalb verschiedene Größen.',T`
V|V_A,\ V_B,\ V_{AB}=Eigenständig bewerteter Erwerber A, Zielunternehmen B und kombinierte Einheit AB, konsistent auf derselben Kapitalgeberbasis.
P|P_B=Für das Zielunternehmen gezahlter Kaufpreis auf derselben Bewertungsbasis.
S=Barwert der Synergien gegenüber der Summe der eigenständigen Werte.
Prem=Kaufpreisprämie: gezahlter Zielkaufpreis minus eigenständiger Zielwert.
C|C,\ C_T=Barwert der Transaktions- und Integrationskosten; C_T bezeichnet hier Kosten der Transaktion, keine Kuponzahlung.
`)
];
