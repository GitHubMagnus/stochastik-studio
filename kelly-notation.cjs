const {chapter:C}=require('./finance-notation/author.cjs'),T=String.raw;
const shared=T`
f|f,\ f^*=Investierter Anteil des aktuellen Depotvermögens und logwachstumsoptimierender Anteil; 0,5 entspricht 50 %. Ein Stern bedeutet Optimum innerhalb der jeweils genannten Grenzen.
g|g(f)=Erwarteter natürlicher Logarithmus des Vermögensfaktors pro Wiederholung. exp(g) − 1 übersetzt ihn in eine geometrische Wachstumsrate.
p q|p,\ q=Gewinn- und Verlustwahrscheinlichkeit im Zwei-Ausgänge-Modell; q = 1 − p.
G L|G,\ L=Positive Gewinn- und Verlustquote der Position als Dezimalzahl, nicht des ganzen Depots. Der Depotverlust ohne weitere Effekte ist f mal L.
r c|r,\ c=Cash-Rendite pro Wiederholung und Kosten je investiertem Euro derselben Wiederholung. Kosten fallen hier in jedem Ausgang an; Cash wird auf den nicht investierten Teil verdient.
R|R_j,\ R_t=Positionsrendite im Szenario j beziehungsweise in Wiederholung t, jeweils vor den separat berücksichtigten Kosten.
W|W_0,\ W_n=Depotvermögen zu Beginn und nach n Wiederholungen, in Geldeinheiten.
n t j|n,\ t,\ j=Gesamtzahl der Wiederholungen, Zeitindex einer Wiederholung und Index eines möglichen Szenarios.
lambda|\lambda=Gewählter Kelly-Bruchteil zwischen null und eins; 0,5 halbiert die unter den genannten Grenzen optimierte Position.
`;
function select(reading,keys,extra=''){
 const entries=C('',shared).entries.filter(e=>e.keys.some(k=>keys.split(' ').includes(k)));
 const additions=C('',extra).entries;const replaced=new Set(additions.flatMap(e=>e.keys));
 return {reading,entries:[...entries.filter(e=>!e.keys.some(k=>replaced.has(k))),...additions]};
}
module.exports={
'scenario-growth':select('Jedes Szenario erzeugt einen Vermögensfaktor aus Cash und investierter Position. Der Logarithmus dieses Faktors wird mit der Szenariowahrscheinlichkeit gewichtet. Alle Faktoren für Szenarien mit positiver Wahrscheinlichkeit müssen strikt positiv sein.','f g r c R j',T`p|p_j=Wahrscheinlichkeit des Szenarios j; nichtnegative Anteile, die nach der im Tool verwendeten Normierung zu eins summieren.`),
'compound-growth':select('Bei konstantem Depotanteil multiplizieren sich die Vermögensfaktoren der Wiederholungen. Logarithmieren verwandelt dieses Produkt in eine Summe. Kelly maximiert den erwarteten Log-Faktor, nicht den arithmetischen Erwartungswert des Endvermögens.','f g R W n t',T`operators|\prod,\ \sum,\ E[\cdot],\ \operatorname*{arg\,max}_f=Produkt über alle Perioden, Summe der Log-Faktoren, Erwartungswert unter der angenommenen Verteilung und der Wert von f, der dieses Kriterium maximiert.`),
'binary-solution':select('Die erste Ableitung gleicht den zusätzlichen Log-Nutzen einer höheren Position im Gewinnfall mit dem zusätzlichen Log-Schaden im Verlustfall aus. Auflösen der inneren Bedingung g′ = 0 liefert f*. Die zulässigen Randpunkte müssen zusätzlich geprüft werden.','f g p q G L',T`derivative|g'(f),\ g''(f)=Erste und zweite Ableitung des erwarteten Log-Wachstums nach dem Depotanteil f; sie messen lokale Steigung und Krümmung.`),
'binary-concavity':select('Die zweite Ableitung ist auf dem zulässigen Bereich negativ, sofern mindestens ein wirksamer unsicherer Ausgang vorliegt. Damit ist die Zielfunktion strikt konkav und eine innere stationäre Lösung das eindeutige Maximum.','f g p q G L',T`derivative|g''(f)=Zweite Ableitung nach f. Die quadrierten Nenner entstehen beim erneuten Ableiten der Brüche; die Vermögensfaktoren müssen vorher bereits positiv sein.`),
'worked-example':select('Die Zahlen trennen Positionsgewicht und Depotrisiko: 50 % Anlagegewicht bei 20 % Positionsverlust kosten 10 % des Depots. Der gewichtete Log-Ertrag unterscheidet sich vom einfachen durchschnittlichen Depotertrag.','f g',T`numbers|p,\ q,\ G,\ L,\ W_0=55 % Gewinnwahrscheinlichkeit, 45 % Verlustwahrscheinlichkeit, je 20 % Positionsbewegung und 100.000 Euro Anfangskapital. Alle Prozentsätze werden als Dezimalzahlen eingesetzt.`),
'cash-costs':select('Die Abkürzungen U, D und B machen den Vorteil gegenüber der Cash-Alternative sichtbar. Beide möglichen Depotfaktoren müssen positiv bleiben. Die Gewinnschwelle prüft, ob eine kleine positive Long-Position das Log-Wachstum gegenüber reinem Cash verbessert.','f g p q G L r c',T`
U=Gewinnrendite der Position abzüglich Kosten und entgangener Cash-Rendite; Vorteil je investiertem Euro im günstigen Ausgang.
D=Verlustquote zuzüglich Kosten und entgangener Cash-Rendite; relativer Nachteil im ungünstigen Ausgang.
B=Vermögensfaktor bei vollständiger Anlage in Cash über eine Wiederholung.
`),
'fractional-kelly':select('Zunächst wird das unter vorsichtigeren Annahmen bestimmte Optimum mit dem Kelly-Bruchteil reduziert. Danach begrenzen Positionsobergrenze und Stressbudget den tatsächlichen Plananteil. Alle drei Kandidaten im Minimum sind Depotanteile.','f lambda c',T`
fractions|f^*_{\mathrm{vorsichtig}},\ f_{\mathrm{reduziert}},\ f_{\mathrm{Plan}}=Mit dem gewählten Wahrscheinlichkeitsabschlag neu optimierter Anteil, mit lambda skalierter Anteil und zuletzt durch die Risikogrenzen begrenzter Plananteil.
limits|f_{\max},\ b_{\mathrm{stress}},\ L_{\mathrm{stress}}=Die ausgeschriebenen Größen Positionsgrenze, Stressbudget und Stressverlust: maximaler Depotanteil, maximal im Szenario akzeptierter Depotverlustanteil und positive Verlustquote der Position im Stress. Stressbudget geteilt durch Stressverlust plus Kosten ergibt wieder einen maximalen Depotanteil.
`),
'portfolio-discrete':select('Jeder gemeinsame Zustand enthält die Renditen aller Anlagen zugleich. Erst werden daraus die Depotfaktoren berechnet, dann deren Logarithmen über die Zustände gemittelt. Einzelne Gewinnwahrscheinlichkeiten ohne gemeinsame Zustände reichen für diese Optimierung nicht aus.','r',T`
w|w,\ w_i=Vektor der investierten Depotanteile und Anteil der Anlage i; der nicht investierte Rest bleibt in Cash.
p|p_j=Wahrscheinlichkeit des gemeinsamen Szenarios j, mit Summe eins.
R|R_{j,i}=Rendite der Anlage i im gemeinsamen Szenario j.
c|c_i=Kosten je investiertem Euro der Anlage i für die betrachtete Periode.
indices|i,\ j=Index einer Anlage und Index eines gemeinsamen Szenarios; die innere Summe addiert Anlagen, die äußere gewichtet Szenarien.
`),
'portfolio-continuous':select('Im kontinuierlichen Diffusionsmodell ist die Log-Wachstumsrate die arithmetische Renditerate abzüglich der halben Portfoliovarianzrate. Die inverse Lösung gilt bei invertierbarer Kovarianzmatrix ohne Gewichtsgrenzen. Der Rechner löst dagegen die ausdrücklich beschränkte gemeinsame Optimierung.','',T`
g|g(w)=Erwartete Log-Wachstumsrate je Zeiteinheit unter kontinuierlicher Anpassung der Gewichte.
w|w,\ w^*=Vektor der Depotgewichte und unbeschränkt optimaler Gewichtsvektor.
r=Cash-Renditerate je derselben Zeiteinheit wie die übrigen Modellraten.
alpha|\alpha=Vektor der erwarteten arithmetischen Renditeraten abzüglich r je Anlage. Hier Überschussdrift gegenüber Cash, nicht ein Regressions-Alpha nach mehreren Risikofaktoren.
Sigma|\Sigma,\ \Sigma_{ij}=Kovarianzratenmatrix und ihr Eintrag für Anlagen i und j; Diagonale enthält Varianzraten.
sigma rho|\sigma_i,\ \sigma_j,\ \rho_{ij}=Volatilitäten der beiden Anlagen auf konsistenter Zeitbasis und Korrelation ihrer Änderungen.
matrix|w^{\mathsf T},\ \Sigma^{-1},\ \nabla g=Transponierter Gewichtsvektor, inverse Kovarianzmatrix und Vektor der ersten Ableitungen des Log-Wachstums nach den Gewichten. Die Nullbedingung gilt für eine innere unbeschränkte Lösung.
`)
};
