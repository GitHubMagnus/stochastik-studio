const {chapter:C}=require('./author.cjs');const T=String.raw;
module.exports=[
C('Die Bilanz stellt Vermögen und dessen Finanzierung am Stichtag gegenüber. Die Gewinnrechnung erfasst dagegen Umsätze und Aufwendungen über eine Periode. Bestands- und Stromgrößen dürfen deshalb nicht ohne zeitliche Überleitung miteinander verrechnet werden.',T`
A L E=Aktiva, Verbindlichkeiten und Eigenkapital zum gleichen Bilanzstichtag, in derselben Währung.
BV|BV_{\mathrm{disposals},t}=Buchwert der in Periode t abgegangenen Sachanlagen, der aus dem Anlagenbestand entfernt wird.
ADJ=Sonstige Bestandsanpassungen, etwa Umrechnungseffekte; mit ihrem tatsächlichen Vorzeichen einzusetzen.
`),
C('Die indirekte Cashflow-Rechnung beginnt beim Gewinn, korrigiert nicht zahlungswirksame Posten und berücksichtigt gebundene oder freigesetzte Liquidität im operativen Umlaufvermögen. Die Vorzeichen erklären, warum mehr Umsatzforderungen den Cashflow senken.',T`
Cash=Zahlungsmittelbestand; Delta Cash ist seine Veränderung zwischen zwei Stichtagen.
FX|FX_{\mathrm{Cash}}=Umrechnungseffekt auf vorhandene Zahlungsmittel; kein operativer Zahlungsstrom.
`),
C('Ein bereinigter Gewinn entsteht aus dem berichteten Gewinn durch einzeln begründete Anpassungen. Jede Anpassung muss nach denselben Rechnungslegungs- und Steuerannahmen erfolgen, damit Unternehmen vergleichbar werden.',T`
NI|NI_{\mathrm{adj}},\ NI_{\mathrm{rep}},\ \Delta NI_j=Bereinigter Gewinn, berichteter Gewinn und Gewinnkorrektur j einschließlich ihres Vorzeichens. Steuerwirkungen sind gegebenenfalls mit einzubeziehen.
INV|INV_F,\ INV_L=Vorratsbuchwert unter FIFO beziehungsweise LIFO.
COGS|COGS_F,\ COGS_L=Warenaufwand unter FIFO beziehungsweise LIFO für dieselbe Periode.
LR=LIFO-Reserve: FIFO-Vorratswert minus LIFO-Vorratswert. Ihre Veränderung vermittelt zwischen den beiden Warenaufwänden.
`),
C('Periodengewinn folgt aus dem in dieser Periode realisierten Umsatz abzüglich zugehöriger Aufwendungen. Bei einem Vertrag mit mehreren Leistungsverpflichtungen wird der Gesamtpreis anhand relativer Einzelveräußerungspreise verteilt; der Zahlungszeitpunkt allein bestimmt den Umsatz nicht.',T`
TP|TP,\ TP_i=Gesamter Transaktionspreis des Vertrags und der Leistungsverpflichtung i zugeteilter Anteil.
SSP|SSP_i=Stand-alone Selling Price, Einzelveräußerungspreis der Leistung i; die Summe im Nenner umfasst alle Vertragsleistungen.
`),
C('Der Endbestand der Vorräte folgt aus Anfangsbestand plus Zugängen minus dem Warenaufwand für Abgänge. Bewertungsverfahren beeinflussen die Zuordnung der Anschaffungskosten zu Aufwand und Restbestand, nicht die tatsächlich vorhandene Stückzahl.',T`
I|I_0,\ I_1=Anfangs- und Endwert der Vorräte; alternative Notation zu INV.
PUR=Wert der Vorratszugänge beziehungsweise Einkäufe der Periode.
LR=LIFO-Reserve, Differenz zwischen FIFO- und LIFO-Vorratsbewertung; Delta LR ist ihre Veränderung.
IT=Inventory Turnover, Lagerumschlag: jährlicher Warenaufwand geteilt durch durchschnittlichen Vorratsbestand, in Umschlägen pro Jahr.
GP=Gross Profit, Bruttogewinn: Umsatz abzüglich Warenaufwand.
c|\bar c=Durchschnittlicher Anschaffungswert je Stück im Beispiel.
`),
C('Lineare Abschreibung verteilt den abschreibbaren Betrag gleichmäßig auf die Nutzungsdauer. Der erwartete Restwert wird vorher abgezogen. Eine Wertminderung ist eine zusätzliche Prüfung gegen den erzielbaren Betrag und folgt nicht automatisch aus dieser linearen Verteilung.',T`
K C=Anschaffungs- beziehungsweise aktivierter Ausgangswert des Vermögenswerts; K im Ausgangspunkt, C in der Herleitung.
S=Geschätzter Restwert am Ende der Nutzungsdauer, in Geldeinheiten.
n=Geschätzte Nutzungsdauer in Jahren beziehungsweise Abschreibungsperioden.
BV|BV_t=Buchwert nach t planmäßigen Abschreibungsperioden; weitere Zu- oder Abgänge werden im Beispiel nicht angenommen.
RA=Recoverable Amount, erzielbarer Betrag nach der dargestellten IFRS-Systematik.
VIU=Nutzungswert aus der Verwendung des Vermögenswerts.
FVLCD=Fair Value less Costs of Disposal, beizulegender Zeitwert abzüglich Veräußerungskosten.
IL=Impairment Loss, Wertminderungsaufwand: positiver Überschuss des Buchwerts über den erzielbaren Betrag, sonst null.
`),
C('Die anfängliche Leasingverbindlichkeit ist der Barwert der relevanten ausstehenden Leasingzahlungen. In jeder Folgeperiode erhöht die Verzinsung die Schuld und die Zahlung vermindert sie. Der Tilgungsanteil ist die Zahlung abzüglich des Zinsanteils.',T`
L|L_0,\ L_t=Leasingverbindlichkeit bei Beginn beziehungsweise nach Zahlung t, in Geldeinheiten.
PMT|PMT_t=Zu berücksichtigende Leasingzahlung am Ende der Periode t; als positiver Zahlungsbetrag angegeben.
r=Diskontsatz je Zahlungsperiode, passend zur Leasingbewertung des Beispiels.
I|I_t=Zinsaufwand der Periode t: Zinssatz mal Verbindlichkeit vor der Zahlung.
Principal=Tilgungsanteil einer Leasingzahlung: gesamter Zahlungsbetrag abzüglich Zinsanteil.
`),
C('Latente Steuern erfassen künftige Steuerwirkungen temporärer Unterschiede zwischen Bilanzwert und Steuerbasis. Bei einem Vermögenswert führt ein höherer Bilanzwert hier zu einer latenten Steuerschuld; bei Verbindlichkeiten kehrt sich die wirtschaftliche Richtung um.',T`
DTL DTA=Latente Steuerschuld und latenter Steueranspruch, in Geldeinheiten; Anerkennungsvoraussetzungen für Ansprüche sind zusätzlich zu prüfen.
BV|BV_A,\ BV_L=Bilanzwert eines Vermögenswerts A beziehungsweise einer Verbindlichkeit L.
TB|TB_A,\ TB_L=Steuerbasis desselben Vermögenswerts beziehungsweise derselben Verbindlichkeit.
tau|\tau=Für die Auflösung des temporären Unterschieds relevanter Steuersatz als Dezimalzahl.
TE=In der Gewinnrechnung erfasster gesamter Steueraufwand der Periode.
CTE=Laufender Steueraufwand ohne latente Komponente.
`),
C('Der Finanzierungsstatus vergleicht den Wert des Planvermögens mit dem Barwert der zugesagten Leistungen. Ein negativer Wert kennzeichnet eine Unterdeckung. Beide Seiten können unterschiedlich auf Zins- und Marktänderungen reagieren.',T`
FS=Funding Status, Planvermögen abzüglich Pensionsverpflichtung; positiv bei Überdeckung, negativ bei Unterdeckung.
PA|PA,\ FV_{PA}=Zum beizulegenden Zeitwert bewertetes Planvermögen.
DBO|DBO,\ PV_{DBO}=Barwert der leistungsorientierten Pensionsverpflichtung.
B|B_t=Erwartete Pensionszahlung zum künftigen Termin t, in Geldeinheiten.
E|E[B_t]=Erwartungswert der künftigen Leistungszahlung unter den Bewertungsannahmen.
r|r_t=Zum Zahlungstermin t passender Diskontsatz.
L=Im Szenariobeispiel der Betrag der Pensionsunterdeckung; Delta L ist dessen Veränderung.
`),
C('Bei der Equity-Methode erhöht der zurechenbare Anteil am Gewinn des Beteiligungsunternehmens den Beteiligungsbuchwert. Erhaltene Ausschüttungen vermindern ihn wieder, weil sonst derselbe Wertzuwachs doppelt erfasst würde.',T`
BV I|BV_t,\ I_t=Buchwert der Beteiligung am Periodenende; I in der Herleitung und BV im Ausgangspunkt bezeichnen dieselbe Bestandsgröße.
a p=Beteiligungsquote beziehungsweise für die Equity-Methode anzuwendender Gewinnanteil als Dezimalzahl.
NI|NI_t^{(A)}=Periodengewinn des assoziierten Unternehmens A; das hochgestellte A kennzeichnet das Unternehmen, keine Potenz.
DIV|DIV_t^{(I)}=Beim Investor I erhaltene Ausschüttung der Beteiligung; nicht die gesamte Dividende aller Gesellschafter.
ADJ=Zusätzliche sachlich begründete Buchwertanpassungen, etwa aus Kaufpreisallokation oder Wertminderung, mit Vorzeichen.
GW=Goodwill des Unternehmenszusammenschlusses, in Geldeinheiten.
C=Übertragene Gegenleistung zum Erwerb.
NCI=Bewertete nicht beherrschende Anteile am erworbenen Unternehmen.
FV|FV_{\mathrm{old}},\ FV_{NA}=Beizulegender Zeitwert zuvor gehaltener Anteile beziehungsweise identifizierbarer erworbener Nettoaktiva.
A=Hochgestelltes A bezeichnet das assoziierte Unternehmen in der Gewinnangabe.
`),
C('Ein Fremdwährungsumsatz wird mit dem passenden Umrechnungskurs in Berichtswährung übersetzt. Berichtetes Wachstum kombiniert deshalb das lokale Umsatzwachstum und die Wechselkursänderung multiplikativ.',T`
S|S_{H/F}=Umrechnungskurs in Einheiten Heim- beziehungsweise Berichtswährung H je Einheit Fremdwährung F.
REV|REV_H,\ REV_F=Umsatz in Berichtswährung beziehungsweise lokaler Fremdwährung; die Indizes 0 und 1 bezeichnen Vergleichsperioden.
g|g_H,\ g_{\mathrm{local}},\ g_{FX}=Wachstum in Berichtswährung, lokales Umsatzwachstum und relative Änderung des Umrechnungskurses; gleiche Zeitspanne verwenden.
`),
C('Die DuPont-Zerlegung multipliziert Gewinnmarge, Kapitalumschlag und Eigenkapitalmultiplikator. Umsatz und Gesamtvermögen kürzen sich heraus, sodass wieder Gewinn durch Eigenkapital übrig bleibt. So wird erkennbar, ob eine hohe Eigenkapitalrendite aus operativer Stärke oder hoher Verschuldung entsteht.',T`
A E|\bar A,\ \bar E=Durchschnittliches Gesamtvermögen und durchschnittliches Eigenkapital der betrachteten Periode; der Balken signalisiert die Durchschnittsbildung.
S=Umsatz der Periode, alternative Schreibweise zu REV.
m=Gewinnmarge: Periodengewinn geteilt durch Umsatz.
AT=Asset Turnover, Kapitalumschlag: Umsatz geteilt durch durchschnittliche Aktiva.
EM=Equity Multiplier, durchschnittliche Aktiva geteilt durch durchschnittliches Eigenkapital.
`),
C('Die Differenz zwischen Gewinn und operativem Cashflow misst die hier verwendete breite Abgrenzung der Accruals. Ein hoher positiver Wert bedeutet, dass ein größerer Teil des Gewinns noch nicht als operativer Zahlungsmittelüberschuss vorliegt; die Ursache muss anschließend untersucht werden.',T`
ACC|ACC,\ ACC_R=Abgrenzungsbetrag NI − CFO in Geldeinheiten beziehungsweise dieser Betrag relativ zu durchschnittlichen Aktiva, als dimensionslose Quote.
A|\bar A=Durchschnittlicher Gesamtvermögenswert der Periode, als Größenmaßstab für die Accrual-Quote.
`),
C('Die Nettozinsmarge setzt den Nettozinsertrag einer Bank ins Verhältnis zu ihrem durchschnittlichen zinstragenden Vermögen. Die Combined Ratio einer Versicherung addiert dagegen Schaden- und Kostenquote; unter 100 % verbleibt im einfachen Modell ein versicherungstechnischer Gewinn vor Kapitalanlageergebnis.',T`
NIM=Net Interest Margin, Nettozinsmarge für die betrachtete Periode.
NII=Net Interest Income, Zinserträge abzüglich Zinsaufwendungen in Geldeinheiten.
II IE=Zinserträge beziehungsweise Zinsaufwendungen derselben Periode.
A EA|\bar A_{\mathrm{int}},\ \overline{EA}=Durchschnittliche zinstragende beziehungsweise ertragbringende Aktiva; Nenner der Nettozinsmarge.
CR=Combined Ratio als Summe von Schadenquote und Kostenquote.
LR ER=Loss Ratio und Expense Ratio: Schadenaufwand beziehungsweise zugeordnete Kosten im Verhältnis zur jeweils konsistenten Prämienbasis.
CET|\mathrm{CET1}=Hartes Kernkapital nach der im Beispiel verwendeten regulatorischen Abgrenzung.
R|\mathrm{CET1R}=Harte Kernkapitalquote; das R gehört zur Abkürzung CET1R und ist hier keine Rendite.
RWA=Risk-weighted Assets, risikogewichtete Aktiva als Nenner der Kernkapitalquote.
`),
C('Eine Umsatzprognose erzeugt über die Forderungslaufzeit einen prognostizierten Forderungsbestand. Die Anlagenfortschreibung verbindet Anfangsbestand, Investitionen und Abschreibungen. Beide Beziehungen schließen die Gewinn-, Cashflow- und Bilanzplanung zusammen.',T`
Cash=Geplanter Zahlungsmittelbestand am angegebenen Periodenende.
D=Finanzschulden; Delta D ist die Nettoneuaufnahme von Schulden in der Periode.
A L E=Aktiva, Verbindlichkeiten und Eigenkapital derselben Planbilanz; ihre Kontrollgleichung muss null ergeben.
`),
C('Nachhaltigkeitsrisiken gehen als konkrete Änderungen künftiger Zahlungen oder erforderlicher Renditen in eine Bewertung ein. Die EBIT-Brücke zeigt beispielsweise, welcher Teil höherer Emissionskosten selbst getragen wird und welcher Teil weitergegeben werden kann.',T`
V|V_0=Heutiger Wert der betrachteten Cashflows, in Geldeinheiten.
k=Zu Risiko, Währung und Zahlungsperiode passender Diskontsatz.
c|c_{CO2}=Preis je Emissionseinheit; Delta c_CO2 ist dessen Änderung.
E=Emissionsmenge in der EBIT-Brücke, beispielsweise Tonnen CO₂ pro Jahr. E mit Erwartungswertklammer bezeichnet in der Bewertungsformel dagegen einen Erwartungswert.
theta|\theta=Anteil der Mehrkosten, der im vereinfachten Modell an Kunden weitergegeben werden kann, zwischen null und eins.
OPEX=Sonstige operative Ausgaben beziehungsweise Aufwendungen der Periode in der dargestellten Brücke.
S=Umsatz; Delta S erfasst zusätzliche Umsatzwirkungen außerhalb der bereits eingerechneten Kostenweitergabe.
`)
];
