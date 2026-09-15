const {chapter:C}=require('./author.cjs');
module.exports=[C(''),C(''),C(''),C('Der Anteil einer Position am betreuten Vermögen zeigt die Konzentration des Kundenportfolios.',String.raw`w=Positionsgewicht: Marktwert der Position geteilt durch den gesamten Portfoliowert, als Dezimalzahl.`),C(''),
C('Der Bewertungsfall zeigt die Empfindlichkeit einer ewigen wachsenden Zahlung gegenüber Annahmen: Ein größerer Abstand zwischen Diskontsatz und Wachstum senkt den berechneten Wert.',String.raw`
V=Barwert der künftig erwarteten Zahlungen, in Geldeinheiten.
k=Geforderte Rendite beziehungsweise Diskontsatz pro Jahr.
g=Unterstelltes dauerhaftes jährliches Zahlungswachstum; es muss kleiner als k sein.
`),C(''),C(''),C(''),
C('Teilperiodenrenditen werden geometrisch verknüpft. Innerhalb einer Periode wird die Composite-Rendite dagegen als vermögensgewichteter Durchschnitt der Portfoliorenditen berechnet. Die beiden Operationen erfüllen unterschiedliche Zwecke.',String.raw`
R=Rendite als Dezimalzahl. R_TWR ist die zeitgewichtete Gesamtrendite, R_(0,T) die Rendite über den gesamten Zeitraum und R_(C,t) die Composite-Rendite der Periode t.
r=Einzelrendite: r_j bezeichnet eine Teilperiode, r_(i,t) Portfolio i in Periode t.
w|w_{i,t}=Gewicht von Portfolio i im Composite während Periode t, auf Grundlage der anzuwendenden Vermögensgewichtung; alle Gewichte summieren sich zu eins.
`),C('')];
