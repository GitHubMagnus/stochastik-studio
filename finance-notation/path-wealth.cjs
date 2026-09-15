const {chapter:C}=require('./author.cjs');const T=String.raw;
module.exports=[
C('Der Gebührenvergleich rechnet unterschiedliche Vergütungsmodelle auf denselben Vermögensbetrag und denselben Zeitraum um.',T`C|C_A,\ \Delta C=Jährlicher Geldbetrag der Gebühr im Modell A und Mehrkosten gegenüber dem Vergleichsmodell; nach Division durch das betreute Vermögen ein jährlicher Kostenanteil.`),
C('Die Vermögensbilanz fasst finanzielle, unternehmerische und reale Vermögenswerte zusammen und zieht Verbindlichkeiten ab. Für Ausgaben muss daneben geprüft werden, welcher Teil dieses Nettovermögens rechtzeitig liquide verfügbar ist.',T`
W=Gesamtes Nettovermögen der Familie, in Geldeinheiten zum Bewertungsstichtag.
FA BA RA=Financial Assets, Business Assets und Real Assets: Finanzanlagen, Unternehmensbeteiligungen und reale Vermögenswerte, jeweils konsistent bewertet.
L=Gesamte Verbindlichkeiten und abzuziehende finanzielle Verpflichtungen der Vermögensbilanz.
O=Im Beispiel fälliger Geldbedarf.
Gap=Fehlbetrag zwischen fälligem Bedarf und rechtzeitig verfügbaren liquiden Mitteln.
`),
C('Der Barwert des realen Ausgabenplans zeigt den heutigen Kapitalbedarf unter einem konsistent realen Diskontsatz. Bei laufenden Entnahmen beeinflusst zusätzlich die Reihenfolge der Renditen das Restvermögen, weil nach frühen Verlusten weniger Kapital an einer späteren Erholung teilnimmt.',T`
C|C_t=In der Barwertformel gewünschte reale Konsumausgabe am Termin t. In der allgemeinen Vermögensfortschreibung bezeichnet C_t dagegen eine Einzahlung; Entnahmen heißen dort D_t. Der Zahlungszweck und das Vorzeichen gehören zur jeweiligen Gleichung.
r|r_{\mathrm{real}},\ r_1,\ r_2=Realer Periodendiskontsatz des Ausgabenplans und die im Reihenfolgebeispiel tatsächlich erzielten Periodenrenditen.
W|W_0,\ W_t,\ W_2=Anfangsvermögen, Vermögen am jeweiligen Periodenbeginn und Endvermögen nach zwei Perioden.
D|D_t,\ D=Entnahmebetrag zu dem in der jeweiligen Formel ausdrücklich bezeichneten Zeitpunkt.
R|R_{t+1}=Rendite der nächsten Periode in der Vermögensfortschreibung.
`),
C('Bei jährlicher Besteuerung wird jedes Jahr nur der Nachsteuerertrag reinvestiert. Bei Steuerstundung wächst zunächst das gesamte Kapital, und am Ende wird nur der aufgelaufene Gewinn besteuert. Die Differenz isoliert den Zinseszinseffekt des Steuerzeitpunkts unter den Modellannahmen.',T`
FV|FV_A,\ FV_B=Nachsteuerendwert bei jährlicher Besteuerung A und bei Besteuerung des gesamten Gewinns erst am Ende B.
P W|P,\ W_0,\ W_n=Anfangskapital und Vermögensstand nach n Jahren. annual und deferred kennzeichnen jährliche Besteuerung und Steuerstundung; gross den Endwert vor Steuern.
r=Konstante jährliche Rendite vor Steuern als Dezimalzahl.
tau|\tau=Im fiktiven Vergleich konstanter Steuersatz auf den Gewinn; keine Aussage über eine bestimmte Steuerrechtsordnung.
G=Über das unversteuerte Anfangskapital hinaus entstandener Gewinn im Stundungsbeispiel.
T n=Anlagezeit in Jahren, T und n als alternative Notationen.
`),
C('Das Gesamtvermögens-Beta gewichtet die Sensitivitäten aller Vermögensbestandteile mit ihren Anteilen. Eine große Unternehmensbeteiligung kann das Risiko dominieren, selbst wenn das liquide Depot breit gestreut ist. Optionsschutz verändert zusätzlich die Form der Endauszahlung.',T`
beta|\beta_W,\ \beta_i=Beta des gesamten Vermögens und der einzelnen Vermögenskomponente i relativ zu derselben Markt- oder Risikoreferenz.
w|w_i=Marktwertanteil der Vermögenskomponente i am Gesamtvermögen.
L|L_B,\ L_F,\ L_{\mathrm{div}}=Geldverluste der Unternehmensbeteiligung, des Finanzdepots und der stärker diversifizierten Variante im Szenario.
W|W_T^{\mathrm{collar}}=Endauszahlung einer Einheit Basiswert mit gekauftem Put und verkauftem Call; Optionsprämien und Finanzierungskosten sind in dieser Auszahlung noch nicht abgezogen.
S|S_T=Basiswertpreis am Optionsfälligkeitstermin.
K|K_P,\ K_C=Ausübungspreis des gekauften Puts und des verkauften Calls.
`),
C('Das übertragbare Nettovermögen folgt aus dem Bruttowert abzüglich noch zu bedienender Verbindlichkeiten, Transferkosten und modellierter Steuern. Steuerbetrag, Finanzierung und Bewertungsstichtag müssen zur konkreten Übertragung passen.',T`
W|W_N,\ W_G=Nettovermögen beim Empfänger und Bruttovermögenswert vor den gezeigten Abzügen.
L=Vor der Übertragung zu bedienende Verbindlichkeiten.
C=Kosten der Übertragung und Abwicklung in Geldeinheiten.
T|\mathcal T=Im Fall angenommener Steuerbetrag, kein Steuersatz und kein Zeithorizont.
`)
];
