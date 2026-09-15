const {chapter:C}=require('./author.cjs');const T=String.raw;
module.exports=[
C('Das ökonomische Nominal beschreibt die durch Kontraktzahl, Multiplikator und Basiswertkurs bewegte Marktposition. Schon eine kleine Kursänderung wirkt auf dieses gesamte Exposure, obwohl die hinterlegte Margin deutlich kleiner sein kann.',T`
N|N_{\mathrm{econ}}=Ökonomisches Nominal beziehungsweise Markt-Exposure in Geldeinheiten.
q=Anzahl der Kontrakte einschließlich Positionsrichtung; positive Werte für Long, negative für Short.
M=Kontraktmultiplikator: Geldeinheiten je Basiswertpunkt und Kontrakt.
S|S_0=Anfänglicher Kurs beziehungsweise Indexstand des Basiswerts; Delta S ist dessen absolute Änderung.
V|V_t=Wert des Derivatevertrags; Delta V ist die Wertänderung der Gesamtposition.
C|C_t=Anrechenbare Sicherheit des Kontrahenten zum Zeitpunkt t.
E|E[\cdot]=Erwartungswert über die künftigen Marktzustände im Exposure-Modell.
EE|EE_t=Expected Exposure, erwartete positive unbesicherte Forderung zum Zeitpunkt t.
CVA=Credit Valuation Adjustment, Bewertungsabschlag für erwartete Gegenparteiverluste; im dargestellten einfachen Modell barwertgewichtete Summe der Verluste je Zeitabschnitt.
`),
C('Der faire Terminkurs finanziert den heutigen Basiswert bis zur Lieferung. Finanzierung und Lagerung erhöhen ihn; laufende Erträge und Besitzvorteile vermindern ihn. Die stetigen Raten werden über die Laufzeit zu einem gemeinsamen Wachstumsfaktor zusammengesetzt.',T`
F|F_{0,T},\ F_0=Heute vereinbarter fairer Lieferpreis für Termin T, je Einheit des Basiswerts.
S|S_0=Heutiger Kassapreis je Einheit des Basiswerts.
r=Stetiger jährlicher Finanzierungssatz im Arbitragemodell.
u=Als stetige jährliche Rate ausgedrückte Lager- und sonstige Carry-Kosten.
q=Stetige jährliche Ertrags- beziehungsweise Dividendenrendite des Basiswerts.
y=Convenience Yield, als stetige Jahresrate ausgedrückter Besitzvorteil eines physischen Bestands.
Pi|\Pi=Gewinn aus der im Beispiel verglichenen Arbitragestrategie nach den angegebenen Kosten.
`),
C('Der Lieferpreis eines bestehenden Forwards bleibt vertraglich fest. Sein laufender Wert ist die abgezinste Differenz zwischen dem heute für dieselbe Lieferung fairen Terminkurs und diesem alten Lieferpreis. Bei Vertragsabschluss kann der Wert null sein, obwohl das Nominal groß ist.',T`
V|V_{t,\mathrm{long}},\ V_t=Heutiger Wert einer Einheit der Long-Position im bestehenden Forward; eine Short-Position hat im gleichen Vertrag den negativen Wert.
F|F_{t,T}=Zum Bewertungszeitpunkt t fairer Terminkurs für Lieferung am Termin T.
K=Im bestehenden Vertrag vereinbarter unveränderlicher Lieferpreis je Einheit.
S|S_t,\ S_T=Kassapreis bei Bewertung beziehungsweise am Liefertermin.
r=Stetiger risikofreier Finanzierungssatz für die verbleibende Laufzeit T − t.
Pi|\Pi_T^{\mathrm{long}},\ \Pi_T^{\mathrm{short}}=Endauszahlung der Long- beziehungsweise Short-Seite, ohne zusätzliche separat angefallene Kosten.
`),
C('Das Minimum-Varianz-Hedgeverhältnis berücksichtigt, wie eng und wie stark Kassapreis und Future gemeinsam schwanken. Bei unvollständiger Korrelation verbleibt Basisrisiko; ein betragsmäßig identisches Nominal ist daher nicht automatisch der risikominimierende Hedge.',T`
h|h,\ h^*=Hedgequote und varianzminimierende Hedgequote. In der Varianzherleitung ist h die gegen die Kassaposition verkaufte Future-Exposition auf konsistenter Mengen- oder Wertbasis.
S F=Kassapreis und Futurespreis; Delta S und Delta F sind ihre Veränderungen über denselben Hedgehorizont.
rho|\rho=Korrelation der Kassapreis- und Futurespreisänderungen beziehungsweise der konsistent verwendeten Renditen.
sigma|\sigma_S,\ \sigma_F,\ \sigma_H=Standardabweichungen der Kassaänderung, Futureänderung und gehedgten Position; das Sternchen beim Hedge-Risiko bezeichnet die optimierte Variante.
N|N_F=Erforderliches Futures-Nominal in Geldeinheiten im Beispiel.
q|q_F=Erforderliche Kontraktzahl vor Rundung auf handelbare ganze Kontrakte.
`),
C('Der Par-Swapsatz macht den Barwert des festen und des variablen Zahlungsstroms bei Abschluss gleich. Der Nenner ist der Barwert einer Einheit jährlicher Festzinszahlungen; deshalb übersetzt er einen Wertunterschied in eine jährliche Rate.',T`
K|K_{\mathrm{par}},\ K=Aktuell fairer fester Swapsatz und vertraglicher fester Satz eines bestehenden Swaps, als jährliche Dezimalraten.
alpha|\alpha_i=Jahresbruchteil der Zinsperiode i nach der vereinbarten Tageszählung.
A=Swap-Annuity, Summe der mit den Periodenbruchteilen gewichteten Abzinsungsfaktoren; bei Jahresbruchteilen in Jahren gemessen.
N=Nominalbetrag des Swaps, auf den die Zinsen berechnet werden.
F|F_i=Für die variable Zahlung i relevante Forward-Rate im gewählten Kurvenmodell.
V|V_{\mathrm{rec}},\ V_{\mathrm{pay}}=Wert für den Festzinsempfänger beziehungsweise Festzinszahler; Vorzeichen sind entgegengesetzt.
C=Fester jährlicher Zahlungsbetrag im Zahlenbeispiel.
t|t_0,\ t_i=Beginn der betrachteten variablen Zinsreihe und Zahlungstermin i. Die vereinfachte Hauptformel setzt den Beginn auf heute, sodass DF(t_0) = 1.
`),
C('Ein Call zahlt bei Fälligkeit den positiven Überschuss des Basiswerts über den Ausübungspreis, ein Put die umgekehrte positive Differenz. Die Put-Call-Parität vergleicht zwei Portfolios mit derselben Endauszahlung. Optionsauszahlung und Gewinn nach gezahlter Prämie sind dabei unterschiedliche Größen.',T`
C|C,\ C_0,\ C_T=Preis des europäischen Calls heute beziehungsweise seine Auszahlung bei Fälligkeit; ohne Index ist der heutige Callwert gemeint.
P|P,\ P_0,\ P_T=Preis des europäischen Puts heute beziehungsweise seine Auszahlung bei Fälligkeit.
S|S_0,\ S_T,\ S_{BE}=Basiswertpreis heute, bei Fälligkeit und am Break-even-Punkt des dargestellten Gewinnprofils.
K=Ausübungspreis je Einheit des Basiswerts, identisch für die verglichenen Optionen.
r q=Stetiger risikofreier Jahreszins und stetige Dividendenrendite des Basiswerts.
Pi|\Pi_C,\ \Pi_T=Gewinn der Optionsposition nach Prämie. Die Herleitung berücksichtigt den Zins auf die Prämie; die ausdrücklich vereinfachten Grafiken rechnen ohne diese Finanzierungskosten.
`),
C('Im Binomialmodell werden Call und ein passendes Portfolio aus Basiswert und Geldanlage in beiden möglichen Zuständen gleichgesetzt. Daraus folgen der replizierende Bestand und eine risikoneutrale Wahrscheinlichkeit. Diese Bewertungswahrscheinlichkeit ist keine Prognose der realen Kurswahrscheinlichkeit.',T`
q p|q,\ p^*=Risikoneutrale Wahrscheinlichkeit des Aufwärtszustands; q im Einperiodenmodell und p* in der Baumgrafik sind alternative Schreibweisen.
u d=Multiplikative Auf- und Abwärtsfaktoren des Basiswerts pro Zeitschritt, etwa 1,2 und 0,8. Arbitragefreiheit erfordert d kleiner 1+r kleiner u.
r=Sicherer Zinssatz je Baumperiode, als Dezimalzahl.
S|S_0=Basiswertpreis vor dem Zeitschritt; in den Folgezuständen uS_0 beziehungsweise dS_0.
C|C_0,\ C_u,\ C_d=Heutiger Callwert und Callauszahlungen beziehungsweise Folgeknotenwerte im Auf- und Abwärtszustand.
Delta|\Delta=Anzahl von Basiswerteinheiten je Option im replizierenden Portfolio, berechnet aus der Auszahlungsdifferenz geteilt durch die Kursdifferenz. Hier ist das allein stehende Delta ein Hedgekoeffizient.
B=Heutiger Betrag im sicheren Konto des Replikationsportfolios; negativ bedeutet Kreditaufnahme.
K=Ausübungspreis der Option.
V|V_{Am},\ V_{\mathrm{cont}},\ V_{\mathrm{exercise}}=Wert einer amerikanischen Option am Knoten, Fortführungswert und sofortiger Ausübungswert; jeweils auf denselben Knotenzeitpunkt bezogen.
`),
C('Die BSM-Formel bewertet einen europäischen Call als Differenz zweier zustandsgewichteter Barwerte. Die standardisierten Größen d₁ und d₂ bündeln Moneyness, Laufzeit und Schwankung. Die Normalverteilungsfunktionen sind Modellgewichte und setzen die genannten Annahmen über Kursprozess und Handelbarkeit voraus.',T`
C=Heutiger Preis des europäischen Calls je Basiswerteinheit.
S|S_0,\ S=Aktueller Basiswertpreis je Einheit.
K=Ausübungspreis der Option.
r q=Stetiger risikofreier Jahreszins und stetige jährliche Dividendenrendite.
sigma|\sigma=Konstante annualisierte Volatilität der Basiswertrendite, als Dezimalzahl; 20 % wird als 0,20 eingesetzt.
T=Verbleibende Laufzeit in Jahren; zur annualisierten Volatilität gehört die Wurzel von T.
d|d_1,\ d_2=Dimensionslose Hilfsgrößen der Formel. d_1 standardisiert logarithmische Moneyness und Drift; d_2 liegt um sigma mal Wurzel T darunter.
N|N(z)=Verteilungsfunktion der Standardnormalverteilung an der Stelle z, zwischen null und eins; hier keine Kontraktzahl.
V|V(S,t)=Allgemeiner Derivatewert als Funktion von Basiswertpreis und Kalenderzeit in der BSM-Differentialgleichung.
t=Fortschreitende Kalenderzeit in der Differentialgleichung; sie ist von der dort entsprechend abnehmenden Restlaufzeit zu unterscheiden.
`),
C('Die Taylor-Näherung zerlegt die Wertänderung einer Option in kleine Änderungen ihrer Einflussgrößen. Delta und Gamma erfassen lineare und gekrümmte Kurswirkungen; Vega, Theta und Rho ergänzen Volatilität, Zeit und Zins. Jede Sensitivität muss zur Einheit ihres zugehörigen Schocks passen.',T`
V=Options- beziehungsweise Portfoliowert. Ein Index am V in der Ableitungsnotation bezeichnet eine partielle Ableitung, beispielsweise V_S nach dem Basiswertpreis und V_SS die zweite Ableitung danach.
Delta|\Delta,\ \Delta S,\ \Delta V=Allein stehendes Delta ist die erste Preisableitung nach S. Direkt vor einer Größe bezeichnet Delta dagegen deren endliche Änderung; Delta mal Delta S ist daher Sensitivität mal Kursschock.
Gamma|\Gamma=Zweite Ableitung des Optionswerts nach dem Basiswertpreis; Einheit Wert je quadrierter Kurseinheit.
nu|\nu,\ \nu_{\mathrm{pt}}=Vega: Wertänderung je absoluter Dezimaländerung der Volatilität; nu_pt ist die auf einen Volatilitätsprozentpunkt umgerechnete Größe. Die beiden sind um Faktor 100 verschieden.
Theta|\Theta=Ableitung des Werts nach fortschreitender Kalenderzeit; die Einheit ist Wert pro Jahr oder entsprechend umgerechnet pro Tag.
rho|\rho=Rho: Ableitung des Werts nach dem Zinssatz. Hier keine Korrelation; Zinsschock und Rho müssen in Dezimal- oder Prozentpunkteinheiten zueinander passen.
S=Aktueller Basiswertpreis; Delta S ist eine absolute Kursänderung in derselben Währung.
sigma|\sigma,\ \Delta\sigma=Annualisierte Volatilität als Dezimalzahl und deren Änderung. Der Zusatz pt kennzeichnet ausdrücklich Volatilitätsprozentpunkte.
r q=Stetiger risikofreier Jahreszins und stetige jährliche Dividendenrendite des BSM-Modells.
t T=Fortschreitende Kalenderzeit und verbleibende Laufzeit in Jahren.
d|d_1=Standardisierte BSM-Hilfsgröße aus logarithmischer Moneyness, Zins, Dividendenrendite, Volatilität und Restlaufzeit; die vollständige Definition steht im BSM-Kapitel.
N phi|N(z),\ \phi(z)=Verteilungsfunktion und Dichte der Standardnormalverteilung. Die Dichte ist keine Wahrscheinlichkeit eines einzelnen Punktes.
`),
C('Die Summe aus Basiswert und passendem Put setzt eine Untergrenze für den Endwert. Der Schutz kostet jedoch eine Prämie. Für den Gewinn müssen deshalb Anschaffungskosten und Optionsprämien von der Endauszahlung abgezogen werden.',T`
V W|V_T,\ W_T^{PP}=Gesamter Endwert beziehungsweise Auszahlung des abgesicherten Portfolios; PP bezeichnet Protective Put. V_0 sind dessen Anfangskosten.
S|S_T=Basiswertpreis bei Optionsfälligkeit.
K|K,\ K_1,\ K_2=Ausübungspreis des Schutz-Puts beziehungsweise unterer und oberer Ausübungspreis eines vertikalen Spreads.
X|X_T=Endauszahlung des gezeigten Call-Spreads, begrenzt zwischen null und K_2 − K_1.
Pi|\Pi=Gewinn nach Anfangskosten; Indizes stock, protective und covered bezeichnen Aktie, Protective Put und Covered Call. Die Grafik lässt Finanzierungskosten weg.
P|PP=Hochgestelltes PP ist die Strategieabkürzung für Protective Put, keine zusätzliche Preisvariable.
`),
C('Aus Sicht des Sicherungskäufers ist der CDS der Barwert des Schutzbeins abzüglich des Barwerts der Prämienzahlungen. Der faire Spread gleicht diese beiden Werte aus. Die einfache Intensitätsnäherung vernachlässigt unter anderem Details der Zahlungszeitpunkte.',T`
V|V_{CDS}=Wert des Credit Default Swaps für den Sicherungskäufer.
PV|PV_{\mathrm{prot}},\ PV_{\mathrm{prem}}=Barwert der erwarteten Ausfallschutzleistung und Barwert der erwarteten Prämienzahlungen auf konsistenter Nominalbasis.
s=Annualisierter CDS-Prämiensatz, als Dezimalzahl oder eindeutig ausgewiesene Basispunkte.
lambda|\lambda=Risikoneutrale jährliche Ausfallintensität in der vereinfachten Preisnäherung.
R=Recovery-Quote in der Kurzschreibweise; gleichbedeutend mit RR, hier keine Anlagerendite.
Q|Q_i=Risikoneutrale Überlebenswahrscheinlichkeit bis Zahlungstermin i; Q_(i−1) − Q_i ist die Ausfallwahrscheinlichkeit des Zeitabschnitts.
alpha|\alpha_i=Jahresbruchteil der Prämienperiode i.
Prem Prot=Prämienbetrag beziehungsweise Schutzleistung im Rechenbeispiel, jeweils in Geldeinheiten.
`),
C('Die Kontraktzahl folgt aus der gewünschten Änderung einer Risikosensitivität geteilt durch die Sensitivität eines Kontrakts. Für eine vollständige Neutralisierung hat das Hedgegeschäft die entgegengesetzte Risikorichtung zur vorhandenen Position. Erst danach wird auf handelbare Kontrakte gerundet.',T`
N|N,\ N^*=Erforderliche, gegebenenfalls vorzeichenbehaftete Kontraktzahl. Delta N im Aktienbeispiel bezeichnet dagegen die zu reduzierende Nominalexposition in Geld.
S|\mathcal S_{\mathrm{target}},\ \mathcal S_{\mathrm{contract}}=Gewünschte Änderung der Risikosensitivität und Sensitivität eines einzelnen Hedgekontrakts, etwa DV01, Delta oder Beta-Exposure. Zähler und Nenner müssen identische Risikoeinheiten haben.
V|V_P,\ V_F=Wert des abzusichernden Portfolios und Wert eines Hedgekontrakts als Funktionen desselben Risikofaktors.
x=Abzusichernder Risikofaktor, beispielsweise Aktienkurs, Wechselkurs oder Zinssatz.
`)
];
