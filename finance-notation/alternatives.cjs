const {chapter:C}=require('./author.cjs');const T=String.raw;
module.exports=[
C('Eine Kapitalzusage ist noch keine Einzahlung. Die verbleibende Verpflichtung ergibt sich aus der Zusage abzüglich bereits abgerufenen Kapitals. Das einfache Modell nimmt keine wiederauflebenden Zusagen durch Recycling oder Rückflüsse an.',T`
U|U_t=Noch nicht abgerufenes, aber zugesagtes Kapital am Zeitpunkt t.
C|C,\ C_{\mathrm{commit}},\ C_{\mathrm{called},t}=Gesamte Kapitalzusage beziehungsweise bereits bis t kumuliert abgerufenes Kapital mit Index called.
CC|CC_t=Einzelner Kapitalabruf zum Zeitpunkt t, in Geldeinheiten.
`),
C('DPI zeigt bereits realisierte Rückzahlungen, RVPI den noch im Fonds geschätzten Restwert. TVPI addiert beide relativ zum eingezahlten Kapital. Gebühren senken die Anlegerwerte; derselbe Multiplikator kann trotz unterschiedlicher Zahlungszeitpunkte zu verschiedenen internen Renditen gehören.',T`
D=Kumulierte Ausschüttungen an den Anleger auf derselben Brutto- oder Nettobasis wie die übrigen Größen.
G|G_{\mathrm{postMF}}=Gewinn nach der Managementgebühr, aber vor der hier berechneten erfolgsabhängigen Vergütung.
PF=Performance Fee, erfolgsabhängige Gebühr nach den im Beispiel angegebenen Vertragsregeln.
V|V_1=Anlegerendwert nach den im Beispiel abgezogenen Gebühren.
R=Rendite des Anlegers über die Beispielperiode nach diesen Gebühren.
`),
C('Die gemeldete Rendite mischt im Glättungsmodell die aktuelle wirtschaftliche Rendite mit dem zuletzt berichteten Wert. Je kleiner das Gewicht der neuen Information, desto träger erscheint die Zeitreihe. Das ist nicht automatisch ein geringeres wirtschaftliches Risiko.',T`
r|r_t^{\mathrm{obs}},\ r_t^*,\ \bar r,\ \bar r_S=Berichtete geglättete Rendite, aktuelle zugrunde liegende wirtschaftliche Rendite und arithmetische Mittelwerte aller beziehungsweise nur der überlebenden Fonds im Beispiel.
theta|\theta=Gewicht der aktuellen wirtschaftlichen Rendite zwischen null und eins; 1 − theta ist das Gewicht des alten Berichts.
Bias=Im Beispiel Differenz zwischen selektiv berechnetem und vollständigem Renditemittel, in Prozentpunkten.
`),
C('Der Exit-Unternehmenswert wird zuerst auf die Eigenkapitalgeber übergeleitet. Schulden werden abgezogen, zusätzlich zurechenbare liquide Mittel hinzugerechnet. Erst der resultierende Eigenkapitalrückfluss darf mit dem ursprünglichen Eigenkapitaleinsatz verglichen werden.',T`
E|E_0,\ E_T,\ E_{\mathrm{exit}}=Anfänglicher Eigenkapitaleinsatz und Eigenkapitalwert beziehungsweise -erlös beim Exit.
D|D_T=Am Exit noch ausstehende Finanzschulden.
C|C_T=Beim Exit zusätzlich zurechenbare liquide Mittel, sofern sie nicht bereits im Unternehmenswert enthalten sind.
M|M_{\mathrm{exit}}=Exit-Multiplikator auf das zum Exit passende EBITDA.
`),
C('Erwartete Kreditrückflüsse sind über Ausfallszenarien zu gewichten. Ein aufgelaufener vertraglicher Forderungsbetrag ist keine garantierte Zahlung. Bei PIK-Zinsen wächst die Forderung durch Zinseszins, während die tatsächlich realisierbare Recovery davon abweichen kann.',T`
p|p_s=Wahrscheinlichkeit des Rückzahlungsszenarios s; Summe aller Szenariowahrscheinlichkeiten gleich eins.
D|D_0,\ D_t=Anfänglicher und durch kapitalisierte Zinsen angewachsener vertraglicher Forderungsbetrag.
r|r_{PIK}=Pro Periode der Forderung zugeschlagener Payment-in-Kind-Zinssatz.
R=Tatsächlich erzielte Anlagerendite relativ zum ursprünglichen Einsatz, nicht relativ zur zuletzt ausgewiesenen PIK-Forderung.
`),
C('Direkte Kapitalisierung teilt den nachhaltig erwarteten Nettoobjektertrag durch die Kapitalisierungsrate. Ein niedrigerer Nenner erhöht den Wert. Die Näherung aus Diskontsatz minus Wachstum setzt eine konsistente, dauerhaft wachsende Ertragsreihe voraus.',T`
V=Immobilienwert in Geldeinheiten.
NOI|NOI,\ NOI_1=Nachhaltiger operativer Nettoobjektertrag der nächsten Periode vor Finanzierung und den im Text abgegrenzten weiteren Zahlungsströmen.
c|c,\ c_{\mathrm{cap}}=Kapitalisierungsrate, auch Cap Rate, als Dezimalzahl pro Jahr.
k g=Erforderliche jährliche Objektrendite und dauerhaftes jährliches Wachstum des zugehörigen Ertrags.
Rent=Effektiv erzielter Mietertrag nach Leerstand im Beispiel, vor den anschließend abgezogenen Objektkosten.
`),
C('Der Projektkapitalwert stellt abgezinste operative Rückflüsse und Investitionszahlungen gegenüber. Die Schuldendienstquote prüft separat, ob in einer Periode genug Mittel für Zinsen und Tilgung verfügbar sind. Positive Unternehmenswerte garantieren daher keine jederzeit ausreichende Liquidität.',T`
OCF|OCF_t=Operativer Projektcashflow der Periode t vor den separat abgezogenen Investitionen.
I|I_t=In der Kapitalwertformel Investitionsauszahlung; im Nenner der Schuldendienstquote dagegen Zinszahlung. Beide Rechnungen verwenden I mit unterschiedlichem Bezug.
k=Projektadäquater Diskontsatz pro Periode.
C|C_1=Operative Kosten im folgenden Jahr des Inflationsbeispiels.
CFADS=Cashflow Available for Debt Service, für Zinsen und Tilgung verfügbarer Zahlungsüberschuss.
DSCR=Debt Service Coverage Ratio: CFADS geteilt durch Schuldendienst, dimensionslos.
Principal=In der Periode vertraglich fälliger Tilgungsbetrag.
`),
C('Die Gesamtrendite einer besicherten Rohstoff-Futures-Strategie wird näherungsweise in Kassapreis-, Roll- und Sicherheitenbeitrag zerlegt. Eine Terminkurve im Contango kann bei unverändertem Kassapreis einen negativen Rollbeitrag erzeugen; die aktuelle Kurvenform allein garantiert aber keinen zukünftigen Ertrag.',T`
R|R_{TR},\ R_{\mathrm{spot}},\ R_{\mathrm{roll}},\ R_{\mathrm{coll}}=Gesamtrendite, Kassapreisbeitrag, Rollbeitrag und Verzinsung der hinterlegten Sicherheiten über denselben Zeitraum.
F|F_{0,T},\ F_0=Heutiger Futures- beziehungsweise Terminkurs zur Laufzeit T im dargestellten vereinfachten Carry-Modell.
S|S_0=Heutiger Kassapreis des Rohstoffs.
r u y=Stetiger Finanzierungssatz, Lagerkostensatz und Convenience Yield pro Jahr. Die Nettokosten r + u − y bestimmen im Modell die Steigung der Terminkurve.
Pi|\Pi_F=Gewinn oder Verlust der gehaltenen Futuresposition in Geldeinheiten, vor Sicherheitenverzinsung.
`),
C('Das Faktormodell zerlegt Überschussrendite in systematische Faktorbeiträge, einen Achsenabschnitt und eine unerklärte Restgröße. Marktneutralität in Nettogeldbeträgen ist deshalb nicht gleichbedeutend mit Neutralität gegenüber allen Risikofaktoren.',T`
R|R_t=Fondsrendite der Periode t vor oder nach Gebühren gemäß der angegebenen Datenbasis.
r|r_{f,t}=Sicherer Zinssatz derselben Periode.
alpha|\alpha=Regressionsinterzept nach Berücksichtigung der ausgewählten Faktoren; nicht automatisch nachgewiesene Managerfähigkeit.
beta|\beta_k=Sensitivität der Fondsüberschussrendite gegenüber Faktor k.
F|F_{k,t}=Faktorrealisierung beziehungsweise Faktorrendite k in Periode t; die Interpretation der Koeffizienten hängt von der Faktorskalierung ab.
varepsilon|\varepsilon_t=Vom Faktormodell nicht erklärte Renditekomponente der Periode t.
L S=In den Exposure-Quoten positive Marktwertbeträge der Long- und Short-Seite. L im Verlustbeispiel bezeichnet dagegen einen Verlustbetrag; L_L und L_S sind die Verluste der jeweiligen Seite.
N G=Im Beispiel Netto-Exposure als Long minus Short und Brutto-Exposure als Long plus Short, in Geldeinheiten.
Net Gross=Netto- und Brutto-Exposure relativ zum Nettoinventarwert, als dimensionslose Hebelquoten.
`),
C('Der Deckungsgrad vergleicht bewertete Reserven mit ausstehenden Ansprüchen. Buchmäßige Deckung und unter Stress tatsächlich liquidierbare Deckung können voneinander abweichen.',T`c|c_{\mathrm{book}},\ c_{\mathrm{real}}=Deckungsquote nach Buchwerten beziehungsweise unter der angenommenen realisierbaren Bewertung, jeweils Reserven geteilt durch ausstehende Ansprüche.`),
C('Portfoliorisiko hängt von den gemeinsamen Schwankungen der Anlagen ab. Alternative Anlagen können es senken, wenn ihre wirtschaftlichen Renditen sich ausreichend unabhängig entwickeln. Geglättete Berichtsrenditen können diesen Nutzen überschätzen.',T`
sigma|\sigma_p,\ \sigma_A,\ \sigma_B=Standardabweichung des Portfolios und der beiden Anlagegruppen über dieselbe Periode; Quadrate bezeichnen Varianzen.
w=Gewichtsvektor im Mehranlagenmodell; im Zwei-Anlagen-Beispiel Anteil von A, während 1 − w auf B entfällt.
Sigma|\Sigma=Kovarianzmatrix der wirtschaftlichen Anlagenrenditen; Diagonale enthält Varianzen, übrige Felder Kovarianzen.
rho|\rho=Korrelation zwischen den beiden Anlagenrenditen, zwischen −1 und +1.
R|R_P=Portfoliorendite im gezeigten Stressszenario.
`)
];
