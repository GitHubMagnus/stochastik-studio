const {chapter:C}=require('./author.cjs');const T=String.raw;
module.exports=[
C('Kontrollgleichungen rechnen zusammengehörige Bestände und Veränderungen gegeneinander. Bei konsistenter Modellierung ist der Rest null. Ein von null verschiedener Rest ist ein Suchhinweis für einen fehlenden oder falsch zugeordneten Posten.',T`
A L E=Aktiva, Verbindlichkeiten und Eigenkapital derselben Bilanz.
C Cash|C_0,\ C_1,\ Cash_t=Zahlungsmittelbestand zu Beginn, am Ende und zum indizierten Zeitpunkt.
Check|Check_{BS},\ Check_{Cash}=Kontrollrest der Bilanzgleichung und der Zahlungsmittelfortschreibung, in Geldeinheiten; Sollwert jeweils null.
`),
C('Die Gesamtrendite setzt Endkurs und erhaltene Ausschüttung ins Verhältnis zum Anfangskurs. Die Formel gilt unmittelbar für konsistente Kurse ohne nicht berücksichtigte Kapitalmaßnahmen. Bei Splits und bereits dividendenbereinigten Daten muss die Datenbasis zuerst korrekt abgestimmt werden.',T`
R|R_t,\ R_{\mathrm{raw}},\ R_{\mathrm{adj}}=Gesamtrendite der Periode und im Datenbeispiel aus unbereinigten beziehungsweise korrekt splitbereinigten Kursen berechnete Rendite.
P|P_t,\ P_{t-1}=End- und Anfangskurs auf identischer Stück- und Kapitalmaßnahmenbasis.
D|D_t=Während der Periode je Anfangsanteil zurechenbare Ausschüttung; nicht noch einmal addieren, wenn sie bereits in Total-Return-Daten enthalten ist.
`),
C('Die Research-Bewertung übersetzt Annahmen in konsistente Szenario-Cashflows und Diskontsätze. Die Umsatzbrücke trennt zuvor organisches Wachstum von Akquisitionen und Währungseffekten, hier als vereinfachte additive Näherung.',T`
V|V_s=Abgeleiteter Wert im Szenario s.
k|k_s=Zum Szenario s, zur Währung und zum Cashflow passender Periodendiskontsatz.
g|g_{\mathrm{organic}}=Organische Wachstumsrate nach den im Beispiel isolierten Akquisitions- und Wechselkurseffekten.
`),
C('Renditebeiträge multiplizieren den Anfangsanteil einer Anlage mit ihrer Periodenrendite. Die Beiträge summieren sich zur Portfoliorendite und lassen sich deshalb sinnvoll in einer Brückengrafik darstellen. Eine Änderung in Prozentpunkten ist von einer relativen Prozentänderung zu unterscheiden.',T`
C|C_i=Beitrag der Anlage i zur gesamten Portfoliorendite, in Rendite- beziehungsweise Prozentpunkteinheiten.
w|w_i=Anfangsgewicht der Anlage i am Gesamtportfolio.
R|R_i,\ R_p=Einzelrendite der Anlage i und gesamte Portfoliorendite derselben Periode.
r=Im Kommunikationsbeispiel verglichener Rendite- oder Zinssatz; Delta r ist dessen absolute Änderung, Delta r geteilt durch den Ausgangssatz die relative Änderung.
`),
C('Einheitenkontrolle beginnt mit der Umrechnung eines Basispunkts in eine Dezimaländerung. Die relative Duration-Näherung wird erst durch Multiplikation mit dem Positionswert zum Geldbetrag. Beim Abzinsen müssen Periodenzins und Laufzeit dieselbe Zeiteinheit verwenden.',T`
r=Diskontsatz je Periode der Barwertrechnung.
P=Ausgangsmarktwert der betrachteten Anleiheposition; Delta P ist ihre Geldwertänderung.
D|D_{\mathrm{mod}}=Modifizierte Duration, also negative relative Preisempfindlichkeit gegenüber dem Zinssatz.
PD|P D_{\mathrm{mod}}=In der ohne Zwischenraum geschriebenen Preisnäherung das Produkt aus Positionswert P und modifizierter Duration D_mod; hier ausdrücklich keine Ausfallwahrscheinlichkeit PD.
DD=Money beziehungsweise Dollar Duration: Positionswert mal modifizierte Duration, hier in der gewählten Positionswährung.
DV|\mathrm{DV01}=Näherungsweise Geldwertänderung bei einem Basispunkt Zinsschock, als positiver Sensitivitätsbetrag.
y=Rendite in der zur Duration passenden Konvention; Delta y als Dezimalzahl, beispielsweise 0,0025 für 25 Basispunkte.
`),
C('Gesamtrendite zählt Kursgewinn und Ausschüttung zusammen und bezieht beides auf den tatsächlichen Anfangseinsatz. Die Ausschüttung darf weder vergessen noch zweimal erfasst werden.',T`
R=Gesamtrendite der Haltedauer als Dezimalzahl.
P|P_0,\ P_1=Anfangs- und Endpreis je Anlageeinheit.
D|D_1=Ausschüttung je Anlageeinheit innerhalb der Haltedauer.
G|G_P=Reiner Kursgewinn im Beispiel, Endpreis minus Anfangspreis.
`),C(''),
C('Die beobachtete Trefferquote ist die Zahl richtig gelöster Aufgaben geteilt durch die Gesamtzahl. Fehleranteile verwenden dagegen nur die Fehlerzahl als Nenner. Beide Quoten haben daher unterschiedliche Bezugsgruppen.',T`
p|\hat p,\ p_C,\ p_M,\ p_R=Geschätzte Trefferquote und Anteile der im Beispiel bezeichneten Konzept-, Methoden- und Rechenfehler an allen Fehlern. Das Dach markiert eine Schätzung aus den bearbeiteten Aufgaben.
k=Zahl richtig gelöster Aufgaben.
n=Gesamtzahl bearbeiteter Aufgaben für die Trefferquote; nicht nur die Fehlerzahl.
`)
];
