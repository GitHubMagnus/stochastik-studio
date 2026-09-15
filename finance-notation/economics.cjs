const {chapter:C}=require('./author.cjs');const T=String.raw;
module.exports=[
C('Die Preiselastizität setzt die relative Mengenreaktion ins Verhältnis zur relativen Preisänderung. Bei einer fallenden Nachfrage ist sie negativ. Die linearen Funktionen beschreiben dagegen Mengen in absoluten Einheiten; erst die Multiplikation der Steigung mit P/Q macht daraus eine dimensionslose Elastizität.',T`
Q|Q,\ Q_D,\ Q_S=Gehandelte Menge, nachgefragte Menge und angebotene Menge je Periode. Ein Stern bezeichnet die Gleichgewichtsmenge.
P|P,\ P^*,\ P_c=Preis je Einheit, Gleichgewichtspreis und vom Verbraucher gezahlter Preis nach einer Steuer. In den Grafiken kennzeichnen D und S Nachfrage- und Angebotskurven, 0 und 1 Ausgangs- und verschobene Kurve.
a b=In Q_D = a − bP ist a die bei Preis null nachgefragte Menge und b der positive Betrag der Mengenabnahme je Preiseinheit.
c d=In Q_S = c + dP ist c der Mengenachsenabschnitt und d die positive Mengenänderung je Preiseinheit. d unmittelbar vor Q oder P im Ableitungsbruch ist dagegen das Differentialzeichen.
varepsilon|\varepsilon_{Q,P},\ \varepsilon_D,\ \varepsilon_S=Preiselastizität der Menge, der Nachfrage und des Angebots: relative Mengenänderung pro relativer Preisänderung, dimensionslos.
TR=Total Revenue, Umsatz: Preis mal verkaufte Menge, in Geldeinheiten je Periode.
tau|\tau=Stücksteuer in Geldeinheiten je verkaufter Einheit. Die Ableitung des Verbraucherpreises nach tau misst den auf Käufer überwälzten Anteil.
`),
C('Gewinn ist Umsatz abzüglich Gesamtkosten. Seine Ableitung zeigt den zusätzlichen Gewinn einer weiteren Einheit: Grenzerlös minus Grenzkosten. Ein inneres Gewinnmaximum erfordert Gleichheit der beiden und eine passende Krümmung; Stilllegung und Randlösungen müssen zusätzlich geprüft werden.',T`
pi|\pi(Q)=Gewinn bei Produktionsmenge Q, in Geldeinheiten pro Periode; hier keine Inflationsrate und nicht die Kreiszahl.
Q=Produzierte und verkaufte Menge je Periode.
P|P(Q)=Preis je verkaufter Einheit; bei Marktmacht von der eigenen Menge abhängig.
C TC=Gesamtkosten als Funktion der Menge, in Geldeinheiten pro Periode.
MR MC=Grenzerlös und Grenzkosten: Änderung von Umsatz beziehungsweise Gesamtkosten pro zusätzlicher Mengeneinheit.
FC VC=Fixkosten, die kurzfristig unabhängig von Q anfallen, und mengenabhängige variable Kosten.
ATC AVC=Durchschnittliche Gesamtkosten beziehungsweise durchschnittliche variable Kosten: entsprechende Kosten geteilt durch Q, in Geldeinheiten je Einheit.
L=Eingesetzte Arbeitsmenge, etwa Arbeitsstunden.
MPL=Grenzprodukt der Arbeit: zusätzliche Produktion pro zusätzlicher Arbeitseinheit.
w=Lohn je Arbeitseinheit. w/MPL sind die Arbeitskosten einer zusätzlichen Produktionseinheit.
`),
C('Bei fallender Nachfrage senkt ein Monopolist für zusätzliche Verkäufe auch den Preis. Deshalb liegt der Grenzerlös unter dem Preis. In der hier verwendeten Ausgangsnotation Q = a − bP ergibt das Auflösen nach P die inverse Nachfrage und daraus durch Ableiten des Umsatzes den Grenzerlös.',T`
P|P(Q)=Preis je Einheit bei verkaufter Menge Q; Indizes m und c beziehungsweise comp bezeichnen Monopol und Wettbewerb.
Q=Verkaufte Menge je Periode; Q_m und Q_c sind die jeweiligen Modellmengen.
a b=Parameter der Nachfrage. Im Ausgangspunkt Q = a − bP ist a ein Mengenabschnitt und b die Mengenreaktion je Preis. Die Herleitung P = a − bQ verwendet neu parametrisierte Koeffizienten: dort ist a der Preisabschnitt und b die Preisabnahme je Menge. Zahlen aus diesen beiden Schreibweisen dürfen nicht unverändert vermischt werden.
MR MC=Grenzerlös beziehungsweise Grenzkosten je zusätzlicher Einheit.
TR=Umsatz als Preis mal Menge.
pi|\pi=Gewinn, also Umsatz abzüglich Kosten.
varepsilon|\varepsilon_D=Preiselastizität der Nachfrage; bei fallender Nachfrage negativ. Der Lerner-Ausdruck setzt einen inneren optimalen Monopolpreis voraus.
DWL=Deadweight Loss, Wohlfahrtsverlust: entgangene Summe aus Konsumenten- und Produzentenrente durch ausbleibende vorteilhafte Transaktionen.
`),
C('Die Produktionsfunktion verbindet Technologie, Kapital und Arbeit mit realer Produktion. Logarithmisches Differenzieren liefert die Wachstumszerlegung: Kapital- und Arbeitswachstum tragen jeweils mit ihrer Produktionselastizität bei, zusätzlich wirkt Produktivitätswachstum.',T`
Y=Reale gesamtwirtschaftliche Produktion pro Periode; g_Y ist ihre Wachstumsrate.
A=Gesamtfaktorproduktivität, also der technologische Effizienzfaktor; g_A ist dessen Wachstumsrate.
K L=Eingesetzter realer Kapitalstock und Arbeitseinsatz; g_K und g_L sind ihre Wachstumsraten.
alpha|\alpha=Produktionselastizität des Kapitals zwischen null und eins; 1 − alpha ist hier die Produktionselastizität der Arbeit.
g=Wachstumsrate der im Index bezeichneten Größe. In der Solow-Gleichung ohne Index bezeichnet g den technischen Fortschritt pro Periode.
C I G=Realer privater Konsum, reale Investitionen und staatliche Güternachfrage der Periode.
X M=Exporte und Importe, real und in derselben Einheit wie Y.
k y=Kapital und Produktion pro Arbeitseinheit; in der Solow-Dynamik pro effektiver Arbeitseinheit. Die Grafik hält A fest.
f|f(k)=Produktion pro effektiver Arbeitseinheit bei Kapitalintensität k.
s=Sparquote als Anteil der Produktion, der investiert wird.
delta|\delta=Abschreibungsrate des Kapitalstocks pro Periode.
n=Wachstumsrate der Arbeitsbevölkerung in der Solow-Gleichung; hier keine Anzahl von Beobachtungen.
d=Im Ableitungsbruch Differentialzeichen; der Punkt über k bedeutet zeitliche Änderungsrate der Kapitalintensität.
`),
C('Die Produktionslücke misst die Abweichung der tatsächlichen Produktion vom geschätzten Produktionspotenzial relativ zu diesem Potenzial. Ein steigendes BIP kann gleichzeitig mit einer negativen Lücke auftreten, wenn die Wirtschaft weiterhin unter ihrem Potenzial liegt.',T`
Gap x|\mathrm{Gap}_t,\ x_t=Produktionslücke der Periode t, als Dezimalzahl; −0,02 bedeutet 2 % unter Potenzial.
Y|Y_t,\ Y_t^*=Tatsächliche reale Produktion und geschätztes Produktionspotenzial zur selben Zeit; der Stern bezeichnet Potenzial, kein Multiplikationszeichen.
g=Reale Wachstumsrate zwischen den im Beispiel verglichenen Perioden.
z|z_t=Veröffentlichter Wert eines Konjunkturindikators zum Zeitpunkt t.
u|u_t=Überraschung der Veröffentlichung: Istwert minus zuvor erwarteter Wert, in der Einheit des Indikators.
E|E_{t-1}[z_t],\ E_1=Mit eckiger Klammer der auf Vorperiodeninformationen bedingte Erwartungswert. E_1 als Koordinatenpaar in der Grafik bezeichnet dagegen einen Gleichgewichtspunkt (Produktion; Preisniveau).
P=Gesamtwirtschaftliches Preisniveau; AD bezeichnet aggregierte Nachfrage, SRAS kurzfristiges aggregiertes Angebot. 0 und 1 kennzeichnen die Lage vor und nach der Verschiebung.
`),
C('Die reale Kaufkraftveränderung ergibt sich, indem der nominale Wachstumsfaktor durch den Preiswachstumsfaktor geteilt wird. Nominalzins minus Inflation ist nur die lineare Näherung; bei größeren Raten ist der Kreuzterm wirtschaftlich relevant.',T`
r|r_{\mathrm{real}}=Realer Zinssatz beziehungsweise Kaufkraftrendite pro Periode, als Dezimalzahl.
i=Nominaler Zins derselben Periode, als Dezimalzahl.
pi|\pi,\ \pi_t,\ \pi^e=Inflationsrate, Inflationsrate der Periode t und erwartete Inflationsrate (hochgestelltes e).
E|E_{t-1}[\pi_t]=Erwartete Inflation unter den Informationen vor Beginn der Periode t.
kappa|\kappa=Steigungsparameter der Phillips-Gleichung: Reaktion der Inflation auf die Produktionslücke x.
x|x_t=Produktionslücke als relative Abweichung der Produktion vom Potenzial.
v=Angebots- beziehungsweise Kostenschock im Inflationsmodell, in derselben Einheit wie die Inflation.
alpha|\alpha=Positiver Steigungsparameter der Phillips-Kurve in Arbeitslosigkeitsnotation.
u|u,\ u^*=Tatsächliche Arbeitslosenquote und gleichgewichtige beziehungsweise natürliche Arbeitslosenquote. Differenzen sind in konsistenten Quoten- oder Prozentpunkteinheiten einzusetzen.
V|V_{\mathrm{real}}=In Kaufkraft des Anfangszeitpunkts umgerechneter Endbetrag.
e=Als hochgestelltes e Kennzeichnung eines erwarteten Werts, etwa erwartete Inflation; keine zusätzliche Zahlenvariable.
`),
C('Für die Wirkung der Geldpolitik zählt der erwartete Realzins: Nominalzins abzüglich erwarteter Inflation. Er kann sich stärker als der Leitzins bewegen, wenn sich Inflationserwartungen gleichzeitig ändern. Langfristige Zinsen enthalten außerdem Erwartungen über künftige kurze Zinsen und eine Laufzeitprämie.',T`
r|r_t^e,\ r^*=Erwarteter Realzins zum Zeitpunkt t und langfristiger neutraler Realzins im Taylor-Regelbeispiel.
i|i_t=Kurzfristiger nominaler Zinssatz beziehungsweise Leitzins; in der Geldmarktgrafik ausdrücklich in Prozentpunkten, sonst als Dezimalzahl.
pi|\pi_t,\ \pi_t^e,\ \pi^*=Tatsächliche Inflation, erwartete Inflation und Inflationsziel; gleiche Perioden- und Skaleneinheit verwenden.
e=Hochgestelltes e kennzeichnet einen erwarteten Wert.
y|y_{n,t}=Langfristige Rendite mit n Perioden Laufzeit am Zeitpunkt t.
n=Anzahl der kurzen Zinsperioden innerhalb der Laufzeit der betrachteten Anleihe.
E|E_t[i_{t+j}]=Heute erwarteter kurzer Nominalzins in der zukünftigen Periode t + j.
TP=Term Premium, Laufzeitprämie als zusätzlicher Bestandteil der Langfristrendite.
a b=Reaktionskoeffizienten der Taylor-Regel auf Inflationsabweichung beziehungsweise Produktionslücke.
x|x_t=Produktionslücke in der Periode t.
M|M^d,\ M^s=Nominale Geldnachfrage (d) und nominales Geldangebot (s); nach Division durch P ergeben sich reale Geldbestände.
P=Preisniveau zur Umrechnung nominaler in reale Geldbestände.
d s=Hochgestellte Kennzeichnungen demand und supply, also Nachfrage und Angebot; keine Potenzrechnung mit Zahlen.
`),
C('Die Schuldenquote steigt, wenn sich der bestehende Schuldenbetrag schneller verzinst als die Wirtschaft wächst, und sinkt durch Primärüberschüsse. Die exakte Gleichung dividiert den verzinsten Vorperiodenbestand durch den Wachstumsfaktor der Bezugsgröße; der Ausdruck Zins minus Wachstum ist eine Näherung.',T`
d b|d_t,\ b_t=Staatsschuldenquote: Schuldenbestand geteilt durch das BIP am Periodenende; d und b sind alternative Schreibweisen.
B|B_t=Nominaler Staatsschuldenbestand in Geldeinheiten.
r i=Effektiver Schuldzinssatz pro Periode. In einer nominalen Schuldenrechnung nominalen Zins mit nominalem BIP-Wachstum paaren; reale Größen nur konsistent mit realem Wachstum verwenden.
g=Wachstumsrate des zur Schuldenquote verwendeten BIP pro Periode.
s|s_t=Primärüberschuss als Anteil am aktuellen BIP; positiv bei Überschuss, negativ bei Primärdefizit.
S|S_t=Primärüberschuss in Geldeinheiten, ohne Zinszahlungen.
Y=Gesamtwirtschaftliches Einkommen beziehungsweise Produktion im Multiplikatormodell.
G=Staatliche Güternachfrage; Delta G ist ihre exogene Änderung.
c=Marginale Konsumneigung im einfachen Multiplikatormodell, zwischen null und eins.
a=Autonome, vom aktuellen Einkommen unabhängige Nachfrage.
AE=Aggregierte geplante Ausgaben. Im einfachen Gütermarktgleichgewicht sind sie gleich Y.
`),
C('Ein Leistungsbilanzüberschuss entspricht gesamtwirtschaftlicher Ersparnis, die nicht im Inland investiert wird. Die Zahlungsbilanzgegenbuchung hängt von der Vorzeichenkonvention ab; hier bezeichnet die Finanzbilanz den Nettoerwerb finanzieller Auslandsaktiva abzüglich neuer Auslandsverbindlichkeiten.',T`
CA=Current Account, Leistungsbilanzsaldo in Geldeinheiten je Periode; positiv bei Überschuss.
S=Gesamtwirtschaftliche Ersparnis der Periode.
I=Reale gesamtwirtschaftliche Investitionen derselben Periode.
KA=Capital Account, Vermögensänderungsbilanzsaldo; keine gewöhnliche Finanzbilanz.
FA=Financial Account nach der verwendeten Konvention: Nettoerwerb von Finanzaktiva minus Nettoaufnahme von Verbindlichkeiten.
T W=In der Handelsgrafik produzierte beziehungsweise konsumierte Einheiten der Güter Tuch (T) und Wein (W). A und B kennzeichnen die Länder; Konsum im Index die Konsummenge.
P|P_W,\ P_T=Preise je Einheit Wein und Tuch. P_W/P_T ist der relative Preis beziehungsweise das Tauschverhältnis.
`),
C('Die Heimwährungsrendite verbindet die lokale Anlagerendite mit der Wechselkursänderung durch Multiplikation der beiden Wachstumsfaktoren. Eine positive lokale Rendite kann durch eine Abwertung der Fremdwährung vollständig aufgezehrt werden. Die Notierung muss vor jeder Rechnung feststehen.',T`
R|R_H,\ R_F,\ R_{FX}=Gesamtrendite in Heimwährung H, Anlagerendite in Fremdwährung F und Rendite der Fremdwährung gegenüber H; alle über dieselbe Haltedauer.
S|S_0,\ S_1=Wechselkurs als Einheiten Heimwährung pro Einheit Fremdwährung zu Beginn und Ende. Ein steigendes S bedeutet eine teurere Fremdwährung.
H F=Heim- und Fremdwährung als Währungseinheiten beziehungsweise Indizes, keine Geldbeträge. In der Grafik ist USD die Heimwährung und EUR die Fremdwährung.
V|V_0,\ V_1=In Heimwährung umgerechneter Anfangs- und Endwert der Anlage.
q=Realer Wechselkurs in der hier festgelegten Konvention: nominaler Kurs mal fremdes Preisniveau geteilt durch heimisches Preisniveau.
P|P_F,\ P_H=Preisniveau im Fremd- beziehungsweise Heimatland; für den realen Wechselkurs vergleichbar definieren.
Q=Gehandelte Menge an Fremdwährung in der Devisenmarktgrafik; S_D und S_S bezeichnen Nachfrage- und Angebotskurse bei dieser Menge.
`),
C('Die gedeckte Zinsparität setzt den durch einen Devisentermin abgesicherten Ertrag einer Fremdwährungsanlage mit dem Heimwährungsertrag gleich. Der Terminaufschlag gleicht die Zinsdifferenz aus. Er ist deshalb nicht automatisch eine Prognose des späteren Kassakurses.',T`
F|F_{0,T}=Heute vereinbarter Devisenterminkurs für Termin T, in Heimwährung je Einheit Fremdwährung.
S|S_0,\ S_1=Kassakurs heute beziehungsweise später, mit derselben Notierung wie F.
r i|r_H,\ r_F,\ i_H,\ i_F=Effektive Zinssätze in Heim- und Fremdwährung; r und i sind hier alternative Symbole. Bei einer Laufzeit T in Jahren müssen es passende Jahreszinssätze sein.
pi|\pi_H,\ \pi_F=Inflationsraten im Heimat- und Fremdland für den verglichenen Zeitraum.
E|E[S_1]=Erwarteter zukünftiger Kassakurs; ein Erwartungswert, keine garantierte Terminauszahlung.
`),
C('Der Szenariowert ist ein mit Wahrscheinlichkeiten gewichteter Durchschnitt. Innerhalb jedes Szenarios werden dessen eigene Zahlungen und konsistente Diskontsätze verwendet. Unterschiedliche Szenarien können Umsatz, Kosten, Investitionen und Risikoprämien gleichzeitig verändern.',T`
V|V_s,\ V_0=Wert im Szenario s beziehungsweise heutiger erwarteter Wert über alle Szenarien.
p|p_s=Wahrscheinlichkeit des Szenarios s, nichtnegativ und mit Summe eins.
r|r_s=Zum Szenario und den Cashflows passender Diskontsatz pro Periode.
S=Umsatz im Geschäftsszenario, in Geldeinheiten; Delta S ist die Umsatzänderung, g_S deren relative Wachstumsrate.
g|g_S=Relative Änderung des Szenarioumsatzes.
P=Preis je Einheit in der Zollgrafik; D, S und W bezeichnen Nachfrage, Angebot und Weltmarktpreis.
Q=Gehandelte Menge des Guts je Periode in der Zollgrafik.
t=Im Szenariobarwert Zeitindex. In der Zollgrafik dagegen Stückzoll in Geldeinheiten pro Einheit; dessen Zahlenwert 20 gehört nicht zum Zeitstrahl.
T=In der Zollgrafik gesamte Zolleinnahmen: Stückzoll mal verbleibende Importmenge.
DWL=Wohlfahrtsverlust aus Produktions- und Konsumverzerrungen durch den Zoll.
`)
];
