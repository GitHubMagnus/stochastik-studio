const {chapter:C}=require('./author.cjs');const T=String.raw;
module.exports=[
C('Active Share addiert die absoluten Gewichtsabweichungen von der Benchmark und halbiert die Summe, weil Über- und Untergewichte dieselbe Umschichtung zweimal zählen. Tracking Error ergänzt die gemeinsame Risikostruktur der Abweichungen; gleiche Active Share bedeutet daher nicht gleiches aktives Risiko.',T`
AS=Active Share als Dezimalanteil; bei vollständig investierten Long-only-Portfolios zwischen null und eins.
w b|w_i,\ b_i,\ \mathbf w_P,\ \mathbf w_B=Gewichte der einzelnen Anlage im Portfolio und in der Benchmark sowie die zugehörigen Gewichtsvektoren.
TE=Tracking Error, Standardabweichung der aktiven Rendite; TE² ist deren Varianz.
Sigma|\Sigma=Kovarianzmatrix der Einzelrenditen für denselben Horizont wie der Tracking Error.
IR=Erwartete Information Ratio im vereinfachten Fundamental Law of Active Management.
IC=Information Coefficient, Korrelation zwischen Prognosen und späteren risikobereinigten Ergebnissen; hier kein investiertes Kapital.
BR=Breadth, Zahl effektiv unabhängiger aktiver Entscheidungen pro Periode, nicht bloß Anzahl gehaltener Titel.
TC=Transfer Coefficient, Maß für die Übertragung der Prognosen in umsetzbare aktive Positionen unter Restriktionen.
`),
C('Die erste Preisnäherung summiert die Wirkungen einzelner Zinskurvenknoten und einer separaten Spreadänderung. Dadurch werden Kurvenform- und Kreditpositionen sichtbar, die sich in einer einzigen Duration verbergen können.',T`
P=Voller Anleihe- beziehungsweise Portfoliopreis auf einheitlicher Basis.
KRD|KRD_j=Key-Rate-Duration am Kurvenknoten j, bei festgelegter Verschiebungs- und Interpolationsmethode.
y|y_j=Zins am Kurvenknoten j; Delta y_j ist die absolute Änderung als Dezimalzahl.
D|D_s=Spread-Duration gegenüber dem gesondert veränderten Credit Spread.
s=Credit Spread als jährliche Dezimalrate; nicht nochmals in den reinen Kurvenzinsschock einrechnen.
C=Konvexität für die zusätzlich dargestellte parallele Zinsnäherung; die quadratische Korrektur beschreibt nicht sämtliche Kreuzwirkungen einer beliebigen Kurvenänderung.
V|V_L,\ V_S,\ V_P=Wert der Long-, Short- und Gesamtposition im Beispiel. Die Wertänderungen enthalten bereits die jeweilige Positionsrichtung.
`),
C('Eine lokale Immunisierung stimmt nicht nur Durationen, sondern auch die entsprechenden Barwerte ab. Dann heben sich kleine parallele Zinswirkungen auf den Überschuss näherungsweise auf. Eine ausreichende Aktivkonvexität kann bei der angenommenen Verschiebung zusätzlichen Schutz geben.',T`
A L=Barwert der Aktiva und der Verpflichtungen im Ausgangszustand.
D|D_A,\ D_L=Zinssensitivität der Aktiva und Verpflichtungen unter derselben Zinskonvention; bei modifizierter Duration bezieht sich die Ableitung auf den verwendeten effektiven beziehungsweise nominalen Renditesatz.
C|C_A,\ C_L=Konvexität der Aktiv- und Verpflichtungsseite nach derselben Bewertungskonvention.
y=Gemeinsam veränderter Zinssatz als Dezimalzahl.
w=Barwertgewicht des kürzeren Instruments im Zwei-Bond-Beispiel; 1 − w ist das Gewicht des längeren Instruments.
`),
C('Die Vermögensfortschreibung verzinst zuerst das Anfangsvermögen und zieht dann die Entnahme am Periodenende ab. Eine Ausgaberegel auf Basis geglätteter Vermögenswerte kann die Ausgaben stabilisieren, während die aktuelle Entnahmequote trotzdem steigt, wenn das Marktvermögen fällt.',T`
W|W_t,\ W_{t+1}=Vermögen zu Beginn und am Ende der nächsten Periode.
R|R_{t+1}=Anlagerendite während dieser Periode.
C|C_{t+1}=Auszahlung beziehungsweise institutionelle Ausschüttung am Periodenende.
A|\bar A=Über die angegebenen Vorjahre gemitteltes Vermögen als Basis der Ausschüttungsregel.
D=Aus dieser Regel resultierender jährlicher Ausschüttungsbetrag.
d=Ausschüttungsbetrag relativ zum aktuellen, nicht geglätteten Marktvermögen.
`),
C('Implementation Shortfall vergleicht den tatsächlich erreichten Wert mit einer hypothetischen vollständigen Ausführung zum Entscheidungspreis. Ausgeführte Mengen, nicht ausgeführte Restmengen und Gebühren werden getrennt erfasst. So wird auch der entgangene Wert einer nicht abgeschlossenen Order sichtbar.',T`
IS=Implementation Shortfall in Geldeinheiten; in dieser Kaufkonvention positiv bei Kosten gegenüber der Entscheidungspreis-Benchmark.
q|q_j,\ q_U=Ausgeführte Teilmenge j und am Bewertungsende nicht ausgeführte Restmenge.
Q=Ursprünglich geplante gesamte Kaufmenge.
P|P_j,\ P_0,\ P_d,\ P_T=Ausführungspreis einer Teilmenge, Entscheidungspreis (0 oder d) und Endkurs zur Bewertung der nicht ausgeführten Restmenge.
F Fees=Explizite Transaktionsgebühren in Geldeinheiten.
C|C_{\mathrm{exec}},\ C_{\mathrm{opp}}=Ausführungskosten und Opportunitätskosten der nicht ausgeführten Menge.
`),
C('Die einfache Liquiditätsrechnung prüft, welcher sofort verfügbare Betrag nach einer Maßnahme noch übrig bleibt.',T`L|L_{\mathrm{after}}=Verbleibende liquide Reserve nach Durchführung der im Fall betrachteten Maßnahme, in Geldeinheiten.`)
];
