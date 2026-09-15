const {chapter:C}=require('./author.cjs');const T=String.raw;
module.exports=[
C('Normalisiertes EBITDA entsteht durch nachvollziehbare Korrekturen des berichteten Ergebnisses. Jede Korrektur verändert die Bewertungsbasis und wird durch einen darauf angewendeten Multiplikator im Unternehmenswert verstärkt.',T`
EBITDA|EBITDA_N,\ EBITDA_R=Normalisiertes und berichtetes EBITDA; N und R kennzeichnen unterschiedliche Abgrenzungen derselben Periodenergebnisgröße.
Delta|\Delta_j=Einzelne Ergebnisanpassung j in Geldeinheiten, positiv bei Erhöhung und negativ bei Verminderung. Delta V im Beispiel ist ausdrücklich der Abstand zwischen berichtetem und normalisiertem Wert, nicht eine Rendite.
V|V_R,\ V_N=Unternehmenswert auf berichteter beziehungsweise normalisierter Ergebnisbasis.
`),
C('Die Eigenkapitalanforderung ergibt sich aus sämtlichen Mittelverwendungen abzüglich neuer Schulden und anderer Finanzierungsquellen. Eine zusätzliche Finanzierung beim Unternehmen ist von einem bloßen Erwerb bestehender Anteile zu unterscheiden.',T`
E|E,\ E_0=Benötigter Eigenkapitalbeitrag zur Transaktion.
P|P_A=Für den Erwerb zu zahlender Kaufpreis auf der im Fall festgelegten Basis.
D|D_{\mathrm{ref}},\ D_{\mathrm{new}}=Abzulösende alte Finanzschulden und neu aufgenommene Finanzierung; alte Schulden nicht zusätzlich ansetzen, wenn sie bereits im Kaufpreis enthalten sind.
F=Gebühren und weitere Transaktionsmittelverwendungen.
S|S_O,\ S=Andere Finanzierungsquellen; S ohne Index in der Sources-and-Uses-Gleichung bezeichnet die Summe aller Quellen.
U O=Gesamte Mittelverwendungen und andere Quellen im vereinfachten Finanzierungsbeispiel.
V|V_{\mathrm{pre}},\ V_{\mathrm{post}}=Eigenkapitalbewertung unmittelbar vor und nach einer neuen Einzahlung bei einer Kapitalerhöhung.
I=Neuer Geldbetrag, der bei der Kapitalerhöhung in das Unternehmen fließt.
p|p_{\mathrm{new}}=Kapitalanteil des neuen Investors nach Einzahlung, als Dezimalzahl.
`),
C('Der Exit-Eigenkapitalwert hängt von operativem Ergebnis, Bewertungsmultiplikator und Nettoschulden ab. Die Zerlegung zeigt, ob Wertzuwachs aus Geschäftsentwicklung, Marktneubewertung oder Entschuldung stammt. Diese Quellen dürfen nicht mehrfach gezählt werden.',T`
E|E_0,\ E_T=Eigenkapitalwert bei Einstieg und Exit.
M|M_0,\ M_T=Unternehmenswert-zu-EBITDA-Multiplikator bei Einstieg und Exit.
EBITDA|EBITDA_0,\ EBITDA_T=Für die jeweilige Bewertung konsistent abgegrenztes operatives Ergebnis vor Abschreibungen.
EV|EV_0,\ EV_1=Unternehmenswert bei Einstieg und im Vergleichszustand; die logarithmische Zerlegung addiert Ergebnis- und Multiplikatorwachstum.
`),
C('Nicht abgerufenes Kapital bleibt eine künftige Verpflichtung des Investors. Die Liquiditätsplanung verfolgt zusätzlich Einzahlungen, Ausschüttungen und sonstige Auszahlungen nach Zeitpunkten. Ausschüttungen und Carry richten sich nach dem konkret beschriebenen Wasserfall.',T`
U=Verbleibende nicht abgerufene Kapitalzusage, ohne Recycling im einfachen Modell.
C=Gesamte vertragliche Kapitalzusage.
CC|CC_t=Kapitalabruf am Zeitpunkt t.
G|G_1,\ G_2=Gewinn oberhalb der Kapitalrückzahlung und danach verbleibender Gewinn oberhalb der bevorzugten Verzinsung im Wasserfallbeispiel.
Carry=Erfolgsbeteiligung des General Partners nach den angenommenen Vertragsregeln.
V|V_{LP}=Gesamter Rückfluss an die Limited Partners im Beispiel, einschließlich Kapitalrückzahlung.
Cash|Cash_t=Verfügbarer Zahlungsmittelbestand am Periodenende.
In Dist Calls Out=Sonstige Einzahlungen, Fondsausschüttungen, Kapitalabrufe und sonstige Auszahlungen der Periode; jeweils als positive Beträge mit dem in der Gleichung angegebenen Vorzeichen.
`),
C('Erwarteter Kreditverlust und Beteiligungsmultiplikator beantworten unterschiedliche Fragen. Der Verlustansatz gewichtet einen Ausfallbetrag mit seiner Wahrscheinlichkeit; der Multiplikator vergleicht aggregierte Rückflüsse mit dem eingesetzten Kapital und enthält keine Zeitinformation.',T`
I=Gesamter ursprünglicher Kapitaleinsatz über die Beispielinvestments.
D=Gesamte Rückflüsse aus den im Beispiel unterschiedlich erfolgreichen Beteiligungen.
`),
C('TVPI erfasst realisierte Rückzahlungen und den noch geschätzten Restwert gemeinsam. DPI und RVPI legen offen, welcher Anteil bereits ausgezahlt ist. Eine Restwertkorrektur verändert RVPI und TVPI, aber nicht die schon geflossenen Ausschüttungen.',T`
D=Kumulierte tatsächliche Ausschüttungen an die Anleger auf der gewählten Nettobasis.
NAV|NAV,\ NAV_s=Verbleibender Fondsrestwert und im Stressszenario s korrigierter Restwert.
`)
];
