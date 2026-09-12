const R=require('./schema.cjs');
module.exports=[
R('Warum braucht eine Volkswirtschaft ein Finanzsystem?',
`Ein Haushalt kann heute mehr verdienen, als er ausgeben möchte. Ein Unternehmen kann gleichzeitig eine Maschine brauchen, deren Erträge erst später entstehen. Finanzierung bringt beide Zeitpläne zusammen: Der Sparer stellt Kaufkraft bereit und erhält dafür einen Anspruch auf spätere Zahlungen. Der Schuldner erhält heute Geld und übernimmt Verpflichtungen. Eine Finanzanlage ist deshalb immer auch eine Beziehung zwischen Parteien und Zeitpunkten.

Beim direkten Weg kauft ein Anleger eine neu emittierte Anleihe. Beim indirekten Weg hält er eine Bankeinlage; die Bank entscheidet über ihre Kreditvergabe und übernimmt Fristen-, Liquiditäts- und Kreditrisiken. Primärmärkte führen dem Emittenten neues Kapital zu. Auf Sekundärmärkten wechseln bereits bestehende Ansprüche den Besitzer. Ein Aktienkauf an der Börse zahlt den Kaufpreis gewöhnlich an den bisherigen Eigentümer. Trotzdem erleichtert ein liquider Sekundärmarkt die ursprüngliche Finanzierung, weil Anleger später aussteigen können.

Die wichtigsten Aufgaben sind Zahlungsabwicklung, Kapitalverteilung, Preisbildung und Risikoteilung. Versicherungen bündeln Risiken, Fonds bündeln Anlegergelder, Börsen organisieren Handel. Banken transformieren kurzfristige Einlagen in längerfristige Kredite. Diese Transformation ist nützlich, macht sie aber anfällig für gleichzeitige Abzüge. Ein Finanzsystem besteht daher nicht nur aus Produkten, sondern auch aus Verträgen, Informationen und Regeln.`,
'Ein Haushalt spart 12.000 € im Jahr. Eine Firma möchte eine Maschine für 20.000 € kaufen und kann 8.000 € selbst finanzieren.',[
'20.000 − 8.000 = 12.000 € Finanzierungsbedarf.|Der Firma fehlt genau der Betrag, den der Haushalt vorübergehend nicht konsumiert.',
'Die Firma emittiert eine einjährige Anleihe über 12.000 € mit 5 % Zins.|Beim Kauf fließt Kapital vom Haushalt zur Firma; auf beiden Seiten entsteht ein entsprechender Vermögenswert beziehungsweise eine Verpflichtung.',
'12.000 × 0,05 = 600 € Zins; versprochene Rückzahlung 12.600 €.|Der Zins entlohnt Zeitverzicht und Risiken. Die vertragliche Zusage garantiert nicht, dass die Firma tatsächlich zahlen kann.',
'Ein späterer Verkauf für 11.800 € bringt der Firma kein weiteres Kapital.|Nun tauschen zwei Anleger den bestehenden Anspruch. Der erste Anleger realisiert einen Kursverlust von 200 € vor erhaltenen Zinsen.'
], 'Damit lässt sich bei jedem Finanzprodukt fragen: Wer erhält das Geld, wer schuldet später etwas, wer trägt Ausfall- und Liquiditätsrisiko? Diese Fragen sind der Ausgangspunkt einer Anlageanalyse.',
'Finanzierungsüberschüsse sind periodische Größen; Vermögen ist ein Bestand zu einem Stichtag. Die einfache Gegenüberstellung ignoriert hier Ausland, Staat und zusätzliche Finanzintermediäre. Sekundärmarktliquidität kann in Krisen verschwinden.',
'Die Bilanz erklärt die beidseitigen Ansprüche. Der Zeitwert des Geldes erklärt die Verzinsung. Kreditanalyse untersucht, ob die Rückzahlung tragfähig ist.',{headers:['Institution','Leistung','Zentrales Risiko'],rows:[['Bank','Zahlungen und Kreditvermittlung','Kreditverlust und Einlagenabzug'],['Fonds','Bündelung und Anlage von Kundengeldern','Marktrisiko der gehaltenen Anlagen'],['Börse','Handel und Preisfindung','Liquiditäts- und Ausführungsrisiko']]}),
R('Vom Anlageziel zum passenden Instrument',
`Eine Anlageklasse beschreibt typische wirtschaftliche Ansprüche, ein Instrument deren konkrete Verpackung. Aktien verbriefen einen nachrangigen Eigentumsanspruch; Anleihen einen vertraglichen Gläubigeranspruch. Ein Fonds ist ein Vehikel, das unterschiedliche Anlageklassen halten kann. Ein ETF ist deshalb nicht automatisch risikoarm: Ein Aktien-ETF kann stark schwanken, auch wenn seine tägliche Handelbarkeit gut ist.

Ein sinnvoller Investmentprozess beginnt mit Ziel, Zeithorizont, Liquiditätsbedarf und Verlusttragfähigkeit. Erst danach folgen Auswahl der Anlageklassen, Instrumente, Ausführung und Kontrolle. Wer in zwei Jahren eine feste Zahlung leisten muss, hat ein anderes Problem als ein langfristiger Pensionsfonds. Erwartete Rendite ist nur eine Dimension; Zeitpunkt und Unsicherheit der Zahlungen müssen ebenfalls passen.

Diversifikation bedeutet, verschiedene wirtschaftliche Risikotreiber zu kombinieren. Zehn Fonds mit denselben großen Technologieaktien können weniger diversifiziert sein als ein kleineres Portfolio aus tatsächlich unterschiedlichen Ertragsquellen.`,
'Ein Anleger benötigt von 30.000 € in einem Jahr 10.000 € sicher für eine Ausgabe. Für den Rest betrachtet er ein Aktienportfolio.',[
'30.000 − 10.000 = 20.000 € langfristig verfügbares Kapital.|Die Pflichtzahlung wird vor der Risikowahl abgezogen, damit ihr Termin nicht von Aktienkursen abhängt.',
'20.000 × 0,30 = 6.000 € Verlust bei einem angenommenen Aktienrückgang um 30 %.|Das Szenario übersetzt eine abstrakte Renditezahl in eine konkrete Vermögenseinbuße.',
'10.000 + 14.000 = 24.000 € Restvermögen im Szenario.|Die Zahlung ist bei entsprechend sicherer Reserve finanzierbar; das übrige Vermögen kann dennoch stärker fallen als angenommen.'
], 'Der Ablauf hilft bei privaten Sparplänen, institutionellen Mandaten und der Produktauswahl. Ein Instrument wird daran gemessen, ob es den Auftrag erfüllt, einschließlich Kosten und Handelbarkeit.',
'Eine angenommene Verlusthöhe ist keine Verlustgrenze. Auch Liquiditätsreserven können Kredit-, Inflations- oder Währungsrisiken enthalten. Der geeignete Reservebetrag hängt von allen Zahlungsverpflichtungen ab.',
'Das Investment Policy Statement hält den Auftrag fest. Asset Allocation verteilt Risiken; Rebalancing führt das tatsächliche Portfolio später an diese Ziele zurück.'),
R('Bestände, Zahlungsströme und wirtschaftlicher Erfolg',
`Die Bilanz ist eine Momentaufnahme: Sie zeigt, welche Vermögenswerte vorhanden sind und welche Gläubiger- und Eigentümeransprüche ihnen gegenüberstehen. Die Gewinn- und Verlustrechnung erklärt dagegen die Erfolgsentstehung über einen Zeitraum. Die Kapitalflussrechnung verfolgt tatsächliche Ein- und Auszahlungen. Alle drei berichten über dasselbe Unternehmen aus unterschiedlichen Perspektiven.

Umsatz wird nicht allein dadurch zu Cash, dass er in der Gewinnrechnung erscheint. Ein Verkauf auf Rechnung schafft zunächst eine Forderung. Umgekehrt ist die Auszahlung für eine Maschine nicht sofort in voller Höhe Aufwand, wenn ihre Nutzung mehrere Perioden betrifft. Die Anschaffung wird aktiviert und über Abschreibungen verteilt. Diese zeitlichen Unterschiede sind die Ursache dafür, dass Gewinn und operativer Cashflow auseinanderfallen.

Rendite benötigt zusätzlich eine Bezugsgröße: 10 € Gewinn sind bei 100 € eingesetztem Kapital anders zu beurteilen als bei 1.000 €. Bilanz, Ergebnis und Zahlungsströme sind daher die Rohdaten, aus denen Bewertungs- und Renditekennzahlen entstehen.`,
'Eine Firma startet mit 100 € Cash und 100 € Eigenkapital. Sie kauft eine Maschine für 60 €, verkauft eine Leistung auf Rechnung für 30 € und schreibt die Maschine um 10 € ab. Weitere Kosten fehlen.',[
'Cash nach Maschinenkauf: 100 − 60 = 40 €.|Die Auszahlung tauscht Geld gegen eine Maschine; sie reduziert zunächst nicht den Gewinn.',
'Gewinn: 30 − 10 = 20 €.|Der Umsatz ist verdient, obwohl der Kunde noch nicht gezahlt hat. Abschreibung erfasst den angenommenen periodischen Verbrauch der Maschine.',
'Aktiva: 40 Cash + 30 Forderung + 50 Maschine = 120 €; Eigenkapital: 100 + 20 = 120 €.|Die Bilanz bleibt ausgeglichen. Der Gewinn erklärt den Eigenkapitalanstieg, nicht einen Cashanstieg.',
'Operativer Cashflow: 20 + 10 − 30 = 0 €; investiver Cashflow: −60 €.|Abschreibung wird als nicht zahlungswirksamer Aufwand zurückgerechnet; der Forderungsaufbau bindet den noch nicht bezahlten Umsatz.'
], 'Diese Verknüpfung wird zur Abschlussanalyse, Liquiditätsplanung und DCF-Bewertung benötigt. Besonders bei starkem Wachstum zeigt sie, warum profitable Firmen neue Finanzierung brauchen können.',
'Das Beispiel ignoriert Steuern, Lagerbestände und Lieferantenkredite. Tatsächliche Ausweisregeln können sich unterscheiden. Bilanzgleichheit ist nur eine Rechenkontrolle und kein Beweis wirtschaftlich korrekter Bewertung.',
'Working Capital vertieft den Forderungseffekt; Free Cashflow zieht zusätzlich die erforderlichen Investitionen ab.'),
R('Prozente brauchen immer eine Bezugsgröße',
`Ein Prozent ist ein Hundertstel. Ein Basispunkt ist ein Hundertstel eines Prozentpunkts. Eine Zinsänderung von 2 % auf 3 % beträgt einen Prozentpunkt oder 100 Basispunkte, relativ zum Ausgangszins aber 50 %. Diese Aussagen beschreiben denselben Vorgang mit unterschiedlichen Bezugsgrößen.

Mehrperiodenrenditen wirken auf ein jeweils verändertes Vermögen. Daher werden Wachstumsfaktoren multipliziert. Gewinne und Verluste gleicher Prozenthöhe gleichen sich nicht aus, weil der Verlust nach einem Gewinn auf einer größeren Basis und der Gewinn nach einem Verlust auf einer kleineren Basis ansetzt. Bei Renditebeiträgen im Portfolio muss außerdem zwischen dem Ertrag einer Anlage und ihrem Beitrag zum gesamten Vermögen unterschieden werden.`,
'Ein Depot von 1.000 € steigt zunächst um 20 % und fällt danach um 20 %. Eine Gebührenquote steigt gleichzeitig von 0,50 % auf 0,75 %.',[
'1.000 × 1,20 = 1.200 € nach der ersten Periode.|Der Gewinn wird Teil des Vermögens, auf das die zweite Rendite wirkt.',
'1.200 × 0,80 = 960 €; 960/1.000 − 1 = −4 %.|Die Renditen summieren sich arithmetisch zu null, die Vermögensentwicklung aber nicht.',
'0,75 % − 0,50 % = 0,25 Prozentpunkte = 25 Basispunkte.|Das ist die absolute Änderung der Gebührenquote. Relativ steigt sie um 0,25/0,50 = 50 %.'
], 'Basispunkte vereinfachen Zins-, Spread- und Gebührenvergleiche. Verkettete Renditen werden für Vermögensentwicklung und Performance verwendet.',
'Runden sollte erst am Ende erfolgen. Bei Zu- und Abflüssen lässt sich die persönliche Rendite nicht allein aus Anfangs- und Endbestand berechnen.',
'Geometrische Rendite und TWR beruhen auf derselben Verkettung. Duration übersetzt eine Zinsänderung in Basispunkten in eine näherungsweise Preisänderung.'),
R('Jede Zahlung erhält einen Zeitpunkt und ein Vorzeichen',
`Ein Zeitstrahl ist die Buchhaltung eines Bewertungsproblems. Auf ihm steht t = 0 für heute, t = 1 für eine Periode später und so weiter. Aus Sicht des Investors sind eingesetzte Gelder negativ und Rückflüsse positiv. Die gleiche Transaktion hat aus Schuldnersicht umgekehrte Vorzeichen. Die Perspektive muss innerhalb einer Rechnung gleich bleiben.

Um Zahlungen vergleichbar zu machen, transportiert man sie mit Diskontfaktoren auf einen gemeinsamen Zeitpunkt. Der Zinssatz muss zur Periodenlänge passen. Bei Monatszahlungen wird entweder mit Monatszins und Monaten oder mit einer äquivalenten zeitgenauen Methode gearbeitet. Ein nominaler Jahreszins mit monatlicher Verzinsung ist dabei nicht automatisch ein effektiver Jahreszins.

BGN verschiebt gleichmäßige Zahlungen an den Periodenanfang, END an das Ende. Eine Zahlung früher hat bei positivem Zins einen höheren Barwert. Diese Rechnereinstellung ist eine wirtschaftliche Annahme über den Zahlungszeitpunkt.`,
'Heute werden 1.000 € investiert; nach einem und zwei Jahren fließen jeweils 600 €. Geforderter effektiver Jahreszins: 10 %.',[
'Zeitstrahl: t = 0: −1.000; t = 1: +600; t = 2: +600 €.|Die Anfangsinvestition liegt schon am Bewertungszeitpunkt und wird nicht diskontiert.',
'Erster Rückfluss: 600/1,10 = 545,45 € Barwert.|545,45 € heute wachsen bei 10 % auf ungefähr 600 € in einem Jahr.',
'Zweiter Rückfluss: 600/1,10² = 495,87 € Barwert.|Die längere Wartezeit erfordert zwei Abzinsungsschritte; deshalb ist derselbe Betrag heute weniger wert.',
'Kapitalwert: −1.000 + 545,45 + 495,87 = 41,32 €.|Die Rückflüsse decken unter diesen Annahmen das eingesetzte Kapital und die geforderte Verzinsung; 41,32 € sind der zusätzliche heutige Wert.'
], 'Zeitstrahlen verhindern Eingabefehler bei Krediten, Renten, Anleihen und Investitionsprojekten. Sie sind besonders nützlich bei unregelmäßigen Zahlungen.',
'Ein positiver Kapitalwert ist nur so verlässlich wie Zahlungsprognose und Diskontsatz. Ein Finanzrechner prüft weder Kreditrisiko noch Vollständigkeit der Cashflows.',
'Barwert erklärt den einzelnen Transport, NPV die Addition einer Zahlungsreihe und IRR die Rückwärtssuche nach einem Zinssatz.'),
R('Finanzsprache als System von Ansprüchen lesen',
`Viele englische Begriffe bezeichnen unterschiedliche Ebenen desselben Vorgangs. Revenue ist Umsatz, Earnings ist bilanzieller Gewinn und Cashflow ist Zahlungsstrom. Enterprise Value bewertet das operative Geschäft für seine Kapitalgeber; Equity Value ist der Wert, der nach Berücksichtigung anderer Ansprüche den Eigentümern verbleibt. Ohne diese Abgrenzung werden Multiplikatoren und DCF-Modelle falsch kombiniert.

Formelzeichen erhalten ihre Bedeutung aus der Definition, nicht allein aus dem Buchstaben. P kann Preis oder Wahrscheinlichkeit bedeuten; Alpha kann im Renditemodell ein Interzept und beim Hypothesentest ein Signifikanzniveau sein. Ein Index i bezeichnet oft eine Anlage, t einen Zeitpunkt. Ein Dach kennzeichnet häufig eine Schätzung, ein Querstrich einen Mittelwert. Die Einheiten helfen beim Lesen: Ein Wert in Euro kann nicht ohne Umrechnung zu einer Prozentzahl addiert werden.`,
'Ein operatives Unternehmen wird mit 150 Mio. € bewertet. Finanzschulden betragen 60 Mio. €, überschüssiges Cash 10 Mio. €. Es gibt 20 Mio. Aktien und keine weiteren Ansprüche.',[
'Net Debt = 60 − 10 = 50 Mio. €.|Überschüssiges Cash kann die wirtschaftliche Nettoverschuldung reduzieren. Betrieblich notwendiges Cash darf nicht beliebig abgezogen werden.',
'Equity Value = 150 − 50 = 100 Mio. €.|Vom Wert des Geschäfts wird der Nettoanspruch der Kreditgeber abgezogen.',
'100 Mio. €/20 Mio. Aktien = 5 € je Aktie.|Erst jetzt wird der Unternehmenswert auf den einzelnen Eigentumsanteil verteilt. 150/20 = 7,50 € würde die Schulden ignorieren.'
], 'Die Begriffsprüfung gehört vor jede Unternehmensbewertung. Eine kleine Symbol- und Einheitentabelle neben dem Modell erleichtert spätere Kontrolle und Zusammenarbeit.',
'Pensionen, Minderheitsanteile, Leasing, Optionen und nicht operative Vermögenswerte können weitere Überleitungen erfordern. Eine kurze Wörterbuchdefinition ersetzt diese fallbezogene Abgrenzung nicht.',
'FCFF wird mit WACC zum Enterprise Value bewertet; FCFE mit Eigenkapitalkosten zum Equity Value. Das Wörterbuch verbindet dieselben Begriffe über alle Kapitel hinweg.')
];
