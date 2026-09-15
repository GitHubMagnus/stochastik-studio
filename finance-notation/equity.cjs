const {chapter:C}=require('./author.cjs');const T=String.raw;
module.exports=[
C('Die Marktkapitalisierung ist Aktienpreis mal ausstehende Aktienzahl. Bei mehreren Aktiengattungen werden deren Marktwerte addiert. Stimmrechte folgen dagegen den jeweiligen Rechten pro Aktie und können deutlich vom Kapitalanteil abweichen.',T`
MC E=Marktkapitalisierung beziehungsweise Gesamtmarktwert des Eigenkapitals.
P N=Marktpreis je Aktie und Anzahl ausstehender Aktien; k im Index bezeichnet die Aktiengattung.
w|w_B=Kapitalanteil der Gattung B im Beispiel, als Anteil am gesamten Aktienkapital.
V=Anzahl der Stimmen im Stimmrechtsbeispiel: V_B für Gattung B, V_all für alle Gattungen zusammen.
p|p_B=Stimmrechtsanteil der Gattung B, nicht deren Kapitalanteil.
`),
C('Der Spread ist die Differenz zwischen dem niedrigsten angebotenen Verkaufspreis und dem höchsten gebotenen Kaufpreis. Die relative Fassung teilt durch den Mittelpunkt, damit unterschiedlich teure Titel vergleichbar werden. Ein größerer Auftrag kann mehrere Preisstufen ausführen.',T`
s|s,\ s_{\mathrm{rel}}=Absoluter Spread in Geldeinheiten je Stück und relativer Spread als Dezimalzahl.
P|P_a,\ P_b,\ P_{\mathrm{avg}},\ P_{VWAP}=Briefkurs (ask), Geldkurs (bid), durchschnittlicher Ausführungspreis und volumengewichteter Durchschnittspreis.
Ask Bid Mid Spread=Ausgeschriebene Kursbezeichnungen: Ask = Briefkurs, Bid = Geldkurs, Mid = deren arithmetischer Mittelpunkt, Spread = Ask minus Bid.
C=Gesamter gezahlter Geldbetrag für alle ausgeführten Teilmengen.
Q|Q_i=Ausgeführte Stückzahl auf Preisstufe beziehungsweise in Transaktion i.
`),
C('Eine Indexrendite ergibt sich aus den gewichteten Einzelrenditen. Marktkapitalisierungsgewichte geben großen Börsenwerten mehr Einfluss; Gleichgewichtung setzt dagegen alle Anfangsanteile gleich. Die Gewichte müssen für die betrachtete Renditeperiode zeitlich richtig bestimmt werden.',T`
R|R_I,\ R_i,\ R_{EW}=Indexrendite, Rendite der Einzelanlage i und Rendite des gleichgewichteten Vergleichsindex, jeweils als Dezimalzahl.
w|w_i,\ w_{i,0},\ w_i^{\mathrm{cap}}=Anlagegewicht i, ihr Anfangsgewicht und ihr Gewicht nach Marktkapitalisierung; die Summe der Gewichte ist eins.
P N|P_i,\ N_i=Preis je Aktie und für die Indexgewichtung berücksichtigte Aktienzahl des Unternehmens i.
`),
C('Ökonomischer Gewinn entsteht erst, wenn die Rendite auf das operative Kapital dessen Kapitalkosten übersteigt. Die Renditedifferenz wird mit dem eingesetzten Kapital multipliziert, um aus einer Quote einen Wertbeitrag in Geld zu machen.',T`EP|EP_t=Ökonomischer Gewinn der Periode t. Im periodischen Modell bezieht er sich auf das zu Periodenbeginn eingesetzte Kapital IC_(t−1).`),
C('Umsatz wächst durch Preis und Menge. Nachhaltiges Gewinnwachstum verlangt außerdem Reinvestitionen. Die Wachstumsidentität muss zur Kapitalbasis passen: Einbehaltquote mal ROE betrifft Eigenkapital, operative Reinvestitionsquote mal ROIC das Gesamtkapital.',T`
p Q=Durchschnittlicher Verkaufspreis je Einheit und verkaufte Menge pro Periode.
g=Nachhaltige Wachstumsrate pro Periode.
b=Im ROE-Modell Gewinnthesaurierungsquote; im ROIC-Modell Anteil des operativen Nachsteuergewinns, der reinvestiert wird. Die beiden Quoten haben unterschiedliche Bezugsgrößen.
I|I_{\mathrm{net}},\ I_{\mathrm{total}}=Nettoinvestitionen in langfristige Anlagen beziehungsweise gesamte Reinvestitionen einschließlich zusätzlichem Nettoumlaufvermögen.
V=Unternehmenswert aus dem stabilen Wachstumsmodell für operative Cashflows; WACC muss größer als g sein.
`),
C('Die geforderte Eigenkapitalrendite besteht im CAPM aus sicherem Zins und Vergütung für systematisches Marktrisiko. Ein Beta von 1,2 skaliert die Marktprämie um den Faktor 1,2; es addiert nicht einfach 1,2 Prozentpunkte.',T`
k|k_E,\ k_e=Geforderte Eigenkapitalrendite je Periode.
r|r_f=Risikofreier Zinssatz für dieselbe Währung und Periode.
beta|\beta,\ \beta_e,\ \beta_j=Markt-Beta des Eigenkapitals; im Mehrfaktormodell Sensitivität gegenüber Faktor j.
R|R_M=Rendite des Marktportfolios.
E|E[R_M]=Erwartete Marktrendite; abzüglich r_f die erwartete Marktüberschussrendite.
lambda|\lambda_j=Risikoprämie je Einheit Sensitivität zum Faktor j, pro Periode.
`),
C('Die erwartete Gesamtrendite berücksichtigt sowohl die erwartete Kursänderung als auch die Ausschüttung relativ zum heutigen Preis. Szenariogewichte machen die Annahmen hinter einem Kursziel sichtbar; ein positiver Erwartungswert schließt erhebliche Verluste im ungünstigen Szenario nicht aus.',T`
R|R,\ R_d=Gesamtrendite der Anlage und Rendite im Downside-Szenario d.
P|P_0,\ P_1=Heutiger Aktienpreis und unsicherer Aktienpreis am Ende der Haltedauer.
D|D_1=Ausschüttung je Aktie während der Haltedauer.
E|E[\cdot]=Erwartungswert über die Szenarien mit ihren angegebenen Wahrscheinlichkeiten.
`),
C('Der heutige Aktienwert ist die Summe abgezinster Dividenden. Im mehrstufigen Modell werden zunächst einzelne Prognosejahre bewertet und danach ein Fortführungswert angesetzt. Die erste dauerhaft wachsende Dividende liegt eine Periode nach dem Ende der Detailplanung.',T`
P V|P_0,\ V_0,\ V_T=Heutiger Wert je Aktie beziehungsweise Fortführungswert am Ende der Detailplanungsphase T; ein Fortführungswert muss nochmals auf heute abgezinst werden.
D|D_t,\ D_{T+1}=Dividende je Aktie im Jahr t beziehungsweise erste Dividende nach Ende der Detailplanung.
k|k_E,\ k_e=Geforderte Eigenkapitalrendite pro Jahr.
g=Dauerhafte jährliche Dividendenwachstumsrate im Fortführungsmodell; kleiner als k_E.
N T=Anzahl der expliziten Prognosejahre beziehungsweise deren Endtermin; N und T werden hier alternativ verwendet.
`),
C('FCFF beginnt beim operativen Ergebnis nach Steuern und zieht die zur Aufrechterhaltung und Erweiterung des Geschäfts nötigen Investitionen ab. FCFE berücksichtigt anschließend Zinszahlungen nach Steuern und Nettoneuverschuldung. Diskontsatz und Anspruchsgruppe müssen immer zusammenpassen.',T`
tau|\tau=Im Modell relevanter Gewinnsteuersatz als Dezimalzahl.
I=Zinsaufwand vor Steuern; I(1 − tau) ist die angenommene Nachsteuerbelastung.
D=Finanzschulden; Delta D ist neue Aufnahme abzüglich Tilgung in der Periode. In der Wertbrücke wird der Bestand D abgezogen.
V|V_{\mathrm{op}}=Wert des operativen Geschäfts aus abgezinsten FCFF.
A|A_{\mathrm{nonop}}=Zusätzlich anzurechnende nicht operative Vermögenswerte, die in den FCFF nicht enthalten sind.
E=Gesamtwert des den betrachteten Aktionären zustehenden Eigenkapitals.
NCI OC=Wert nicht beherrschender Anteile und anderer vorrangiger Ansprüche, die in der Wertbrücke vom operativen Unternehmenswert abzuziehen sind.
k|k_e=Geforderte Eigenkapitalrendite als Diskontsatz für FCFE.
`),
C('Ein Multiplikator setzt einen Wert ins Verhältnis zu einer dazu passenden Ergebnisgröße. Aktienpreis durch Gewinn je Aktie ist das Kurs-Gewinn-Verhältnis; Unternehmenswert durch EBITDA bezieht sich auf alle Kapitalgeber. Erwartetes Wachstum und Risiko erklären, warum Multiplikatoren zwischen Firmen abweichen.',T`
PE=Price-to-Earnings Ratio, Kurs-Gewinn-Verhältnis als dimensionsloser Multiplikator.
P|P,\ P_0=Preis beziehungsweise Wert je Aktie heute.
M|M_{EV/EBITDA}=Unternehmenswert-zu-EBITDA-Multiplikator; keine Gewinnmarge.
E|E_0,\ E_1=In der KGV-Herleitung Gewinn je Aktie der laufenden und nächsten Periode. E ohne Index im Beispiel ist dagegen der gesamte Eigenkapitalwert.
b=Einbehaltquote des Gewinns; 1 − b ist die Ausschüttungsquote.
k|k_e=Geforderte Eigenkapitalrendite pro Periode.
g=Dauerhafte Gewinn- und Dividendenwachstumsrate im vereinfachten Modell, kleiner als k_e.
`),
C('Residualgewinn ist der Gewinn nach Abzug einer Eigenkapitalverzinsung auf den Anfangsbuchwert. Der heutige Wert besteht aus dem bereits vorhandenen Buchwert plus dem Barwert künftiger Übergewinne. Die Herleitung setzt eine konsistente Fortschreibung des Eigenkapitals voraus.',T`
RI|RI_t=Residualgewinn in Periode t, in Geldeinheiten oder pro Aktie entsprechend der gewählten Rechnungsbasis.
B|B_0,\ B_{t-1},\ B_t=Eigenkapitalbuchwert heute, zu Periodenbeginn und zu Periodenende; nicht der Marktwert.
k|k_E,\ k_e=Geforderte Eigenkapitalrendite pro Periode.
D|D_t=Ausschüttung aus dem Eigenkapital in Periode t.
P V|P_0,\ V_0=Abgeleiteter heutiger Eigenkapitalwert auf derselben Gesamt- oder Pro-Aktie-Basis wie B und RI.
`),
C('Bei unsicheren privaten Unternehmen werden Werttreiber und Diskontsätze je Szenario konsistent kombiniert. Der Wert einer konkreten Beteiligung kann zusätzlich von Kontrollrechten und Liquidität abhängen; ein pauschaler Abschlag ersetzt diese Analyse nicht.',T`
V|V_s,\ V_{\mathrm{low}},\ V_{\mathrm{high}},\ V_{\mathrm{stake}}=Wert im Szenario s, untere und obere Bewertungsvariante sowie Wert des konkreten Beteiligungspakets.
k|k_s=Zum Szenario s passender Diskontsatz pro Periode.
p|p_s=Wahrscheinlichkeit des Szenarios s; die Gewichte summieren sich zu eins.
E|E[V]=Erwarteter Wert über die Szenarien.
f|f(V,C,L)=Allgemeine Bewertungsbeziehung, keine festgelegte geschlossene Preisformel: Paketwert hängt von Unternehmenswert, Kontrolle und Liquidität ab.
C L=Kontrollrechte beziehungsweise Liquiditätseigenschaften der konkreten Beteiligung; keine direkt vorgegebenen Geldbeträge.
`)
];
