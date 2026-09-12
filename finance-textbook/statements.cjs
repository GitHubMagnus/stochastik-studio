const R=require('./schema.cjs');
module.exports=[
R('Drei Abschlüsse beschreiben ein zusammenhängendes System',`Die Bilanz ordnet Mittelverwendung und Mittelherkunft zu einem Stichtag. Aktiva zeigen Ressourcen, Passiva Gläubiger- und Eigentümeransprüche. Die Gewinnrechnung misst Erträge abzüglich Aufwendungen einer Periode. Die Kapitalflussrechnung erklärt, warum sich Zahlungsmittel verändert haben.

Jeder wirtschaftliche Vorgang kann mehrere Stellen gleichzeitig verändern. Eine Kreditaufnahme erhöht Cash und Schulden, aber keinen Umsatz. Ein Verkauf auf Rechnung erhöht Forderungen und zunächst den Gewinn, aber noch kein Cash. Analyse beginnt deshalb mit dem Vorgang und verfolgt dann seine Wirkungen durch alle Abschlüsse.`,
'Ein Unternehmen erhält 50 € Kredit und kauft damit eine Maschine. Zunächst fallen weder Zins noch Abschreibung an.',[
'Kreditaufnahme: Cash +50, Schulden +50.|Die Bilanz verlängert sich, Eigenkapital und Gewinn bleiben gleich.',
'Maschinenkauf: Cash −50, Sachanlage +50.|Innerhalb der Aktivseite wird Geld gegen Produktionskapazität getauscht.',
'Cashflow-Rechnung: Finanzierung +50, Investition −50, netto null.|Ein unveränderter Cashbestand kann erhebliche Finanzierung und Investition verbergen.'
],'Diese Logik wird für Bilanzanalyse und integrierte Finanzmodelle benötigt.','Bilanzwerte sind nicht automatisch Marktwerte. Eine ausgeglichene Bilanz kann unzutreffende Bewertungsannahmen enthalten.','Free Cashflow und Kapitalstruktur bauen auf der getrennten Erfassung operativer und finanzieller Vorgänge auf.'),
R('Vom Gewinn zu den tatsächlichen Zahlungen überleiten',`Der indirekte operative Cashflow startet beim Gewinn. Nicht zahlungswirksame Aufwendungen werden zurückgerechnet; Veränderungen operativer Vermögenswerte und Schulden ergänzen den Zahlungszeitpunkt. Forderungs- und Vorratsaufbau binden Geld, Lieferantenkredite stellen vorübergehend Finanzierung bereit.

Der Anhang erläutert Methoden, Fälligkeiten, Schätzungen und Verpflichtungen, die eine Summenzahl allein nicht erklärt. Ein guter Analyst liest deshalb Gewinnrechnung und Anhang gemeinsam: Die gleiche Gewinnzahl kann aus laufenden Verkäufen, einmaligen Bewertungseffekten oder veränderten Schätzungen entstehen.`,
'Gewinn 40 €, Abschreibung 10 €, Forderungen steigen um 15 €, Vorräte um 5 €, Lieferantenverbindlichkeiten um 8 €.',[
'40+10=50 € vor Working-Capital-Veränderungen.|Abschreibung minderte den Gewinn ohne aktuelle Auszahlung.',
'50−15−5+8=38 € operativer Cashflow.|Forderungen und Vorräte binden 20 €; spätere Lieferantenzahlungen finanzieren davon 8 €.',
'38−40=−2 € Differenz zwischen Cashflow und Gewinn.|Der zusätzliche Zahlungsbedarf übersteigt die nicht zahlungswirksame Abschreibung um 2 €.'
],'Hilft bei Liquiditätsprognosen und der Bewertung von Ergebnisqualität.','Die exakte Einordnung einzelner Zahlungen hängt vom angewandten Standard ab. Akquisitionen und Währungsumrechnung können Bestandsveränderungen verzerren.','Working Capital erklärt den Kapitalbedarf von Wachstum; Cashflow-Qualität prüft, ob Gewinne in Zahlungen übergehen.'),
R('Bilanzierungsmethoden beeinflussen den Vergleich',`Rechnungslegungsstandards regeln Ansatz, Bewertung und Ausweis. Methodendifferenzen können Gewinne und Kennzahlen verändern, obwohl die zugrunde liegenden Zahlungen ähnlich sind. Ein Vergleich braucht daher eine gemeinsame wirtschaftliche Basis und Kenntnis des Berichtsjahrs.

Bei Vorräten ist LIFO unter IFRS nicht zulässig, während US GAAP es unter Voraussetzungen zulässt. Bei Entwicklungskosten oder Wertaufholungen bestehen weitere Unterschiede. Bereinigungen müssen konsistent auf Gewinn, Bilanz und gegebenenfalls Steuern wirken; nur eine Kennzahl kosmetisch anzupassen erzeugt neue Widersprüche.`,
'Ein Unternehmen weist LIFO-Vorräte von 80 und eine LIFO-Reserve von 20 aus. Die Reserve betrug im Vorjahr 15. Steuern werden zunächst ignoriert.',[
'Vergleichbarer FIFO-Vorrat: 80+20=100.|Die Reserve überbrückt die Bewertungsdifferenz der vorhandenen Bestände.',
'Reserveanstieg: 20−15=5; FIFO-Umsatzkosten liegen um 5 unter LIFO-Umsatzkosten.|Die Veränderung der Bewertungsdifferenz erklärt den periodischen Gewinnunterschied.',
'FIFO-Gewinn liegt vor Steuern um 5 höher.|Auch Eigenkapital und Kennzahlen müssen auf derselben bereinigten Basis betrachtet werden.'
],'Relevant für internationale Vergleichsunternehmen und historische Zeitreihen.','Tatsächliche Überleitungen benötigen Detailangaben. Unterschiede hängen vom konkreten Posten und Standardstand ab; pauschale konservativ/aggressiv-Etiketten sind ungeeignet.','Vorratsanalyse liefert die LIFO-Mechanik; Multiplikatoren benötigen methodisch vergleichbare Gewinne.'),
R('Leistungserbringung und Geldfluss fallen oft auseinander',`Umsatzrealisierung ordnet Erlöse der erfüllten Leistung zu. Kundenvorauszahlungen können zunächst Verpflichtungen darstellen, weil die Leistung noch aussteht. Ein Verkauf auf Rechnung erzeugt dagegen eine Forderung. Die Zahlung allein bestimmt somit nicht die Gewinnperiode.

Aufwendungen werden nach ihrer wirtschaftlichen Zugehörigkeit erfasst. Aktivierung verschiebt Aufwand in spätere Nutzungsperioden, während eine sofortige Aufwandserfassung den aktuellen Gewinn stärker belastet. Beide Behandlungen ändern zunächst nicht dieselbe bereits erfolgte Auszahlung, wohl aber Periodenergebnisse und Bilanzwerte.`,
'Ein Kunde zahlt am 1. Januar 1.200 € für eine gleichmäßig über zwölf Monate erbrachte Dienstleistung.',[
'Zahlungseingang: Cash +1.200 €, zunächst Leistungs-/Vertragsverbindlichkeit +1.200 €.|Die Firma schuldet noch die gesamte Jahresleistung.',
'Pro Monat werden 1.200/12=100 € Umsatz verdient.|Bei gleichmäßiger Erfüllung gehört nur ein Zwölftel in den jeweiligen Monat.',
'Nach drei Monaten: 300 € Umsatz und 900 € verbleibende Verpflichtung.|Der volle Cashzufluss ist kein Beweis dafür, dass bereits 1.200 € verdient wurden.'
],'Wichtig bei Abonnements, Vorauszahlungen und mehrperiodigen Verträgen.','Komplexe Leistungsverpflichtungen, variable Gegenleistungen und Rückgaberechte verlangen detaillierte Standardanwendung.','Accrual Accounting erklärt den Unterschied; Cashflow-Analyse verfolgt die tatsächlichen Zahlungen.'),
R('Kostenlagen verteilen Anschaffungskosten auf Verkauf und Bestand',`FIFO ordnet ältere Anschaffungskosten zuerst den verkauften Einheiten zu. LIFO ordnet jüngere zuerst zu; Durchschnittskosten glätten die Zuordnung. Die physische Reihenfolge der Warenbewegung muss der buchhalterischen Methode nicht entsprechen.

Bei steigenden Preisen führt FIFO häufig zu niedrigeren Umsatzkosten und höherem Endbestand als LIFO. Der höhere Gewinn ist dann teilweise eine Methodenfolge. Bei LIFO-Liquidation werden alte günstige Schichten aufgelöst, wodurch Gewinn temporär steigt. Abschreibungsregeln begrenzen zusätzlich überhöhte Vorratsansätze.`,
'Zwei Einheiten werden für 10 € und 14 € gekauft. Eine wird für 20 € verkauft.',[
'FIFO: Umsatzkosten 10 €, Bruttogewinn 20−10=10 €, Restbestand 14 €.|Der ältere Kostenbetrag wird dem Verkauf zugeordnet.',
'LIFO: Umsatzkosten 14 €, Bruttogewinn 6 €, Restbestand 10 €.|Der jüngere Kostenbetrag wird zuerst verbraucht.',
'Vorratsdifferenz 4 € entspricht hier der Gewinndifferenz vor Steuern.|Die gesamten Anschaffungsauszahlungen von 24 € bleiben in beiden Fällen identisch.'
],'Anwendbar auf Handelsunternehmen, Inflationseffekte und Vergleichsanalysen.','Die Richtung hängt von Preis- und Mengenverlauf ab. Fallende Preise oder Liquidationen können das übliche Muster umkehren.','Bruttomarge und Working Capital ändern sich durch die Methode; Cashflow und Bewertung müssen diese Effekte unterscheiden.'),
R('Abschreibung verteilt Nutzung, Wertminderung reagiert auf Verlust',`Bei Aktivierung wird ein Aufwand zunächst als Vermögenswert erfasst, weil mehrperiodiger Nutzen erwartet wird. Planmäßige Abschreibung verteilt den abschreibbaren Betrag auf die Nutzungsdauer. Nutzungsdauer, Restwert und Methode sind Schätzungen, die den jährlichen Gewinn beeinflussen.

Eine Wertminderung ist ein zusätzlicher Schritt, wenn der relevante erzielbare oder zulässige Wert unter dem Buchwert liegt. Sie ist nicht dieselbe Frage wie jährlicher Verbrauch. Eine längst bezahlte Anlage kann daher heute den Gewinn stark belasten, ohne heute eine gleich große Auszahlung zu verursachen.`,
'Maschine: Anschaffung 110 €, Restwert 10 €, Nutzungsdauer fünf Jahre. Lineare Abschreibung.',[
'Abschreibbarer Betrag: 110−10=100 €.|Der erwartete Restwert wird nicht planmäßig verbraucht.',
'Jährliche Abschreibung: 100/5=20 €; Buchwert nach zwei Jahren 70 €.|Zwei Perioden haben 40 € des Nutzungswerts verbraucht.',
'Bei maßgeblichem Wert von 50 € ergibt sich eine zusätzliche Minderung um 20 €.|Diese reagiert auf einen Wertverlust jenseits der planmäßigen Nutzung; künftige Abschreibungen müssen neu beurteilt werden.'
],'Wichtig für Anlagenintensität, Gewinnqualität und Investitionsprognosen.','Abschreibung ist kein automatischer Maßstab für tatsächlich nötige Erhaltungsinvestitionen. Standardabhängige Tests und Wertaufholungsregeln sind gesondert zu prüfen.','FCFF rechnet Abschreibungen zurück und zieht echte Investitionszahlungen ab.'),
R('Leasing verbindet Nutzungsrecht und Finanzierungspflicht',`Ein Leasingvertrag erlaubt die Nutzung eines Vermögenswerts gegen zukünftige Zahlungen. Wirtschaftlich entstehen häufig ein Nutzungsrecht und eine Finanzierungspflicht. Die anfängliche Verpflichtung wird aus dem Barwert maßgeblicher Zahlungen ermittelt; in späteren Perioden verändern Zins und Tilgung ihren Buchwert.

Diese Sicht erleichtert den Vergleich zwischen Kauf auf Kredit und Leasing. Die genaue Bilanzierung besitzt standardabhängige Unterschiede und Ausnahmen. Variable Zahlungen, Verlängerungsoptionen und Restwertgarantien machen die richtige Abgrenzung der Zahlungsreihe besonders wichtig.`,
'Zwei nachschüssige Leasingzahlungen von 55 € bei 10 % Diskontsatz, keine Zusatzkomponenten.',[
'Barwert: 55/1,10 + 55/1,10² = 50+45,45=95,45 €.|Die Anfangsverbindlichkeit ist der heutige Wert beider Zahlungen.',
'Erster Zins: 95,45×10 %=9,55 €; nach Zahlung Restschuld 95,45+9,55−55=50 €.|Nur der Teil der Zahlung oberhalb des Zinses tilgt Kapital.',
'Zweiter Zins 5 €; 50+5−55=0 € Restschuld.|Die Folge lässt sich wie ein Tilgungsplan nachvollziehen.'
],'Relevant für Verschuldungsvergleiche, Einzelhandel, Airlines und Immobiliennutzung.','Nicht jeder Vertrag oder Zahlungsbestandteil folgt derselben Behandlung. Ausnahmen und Optionen dürfen nicht aus einer bloßen Ratenliste abgeleitet werden.','Anleihebarwerte und Annuitäten liefern die Rechnung; Enterprise-Value-Überleitungen müssen Leasing konsistent behandeln.'),
R('Latente Steuern erklären zeitliche Bewertungsunterschiede',`Buchhalterischer Gewinn und steuerpflichtiger Gewinn entstehen nach unterschiedlichen Regeln. Temporäre Differenzen kehren sich in späteren Perioden grundsätzlich um. Eine latente Steuerschuld beschreibt zukünftige Steuerbelastung aus solchen Differenzen; ein latenter Steueranspruch einen potenziellen zukünftigen Steuervorteil.

Permanente Differenzen kehren sich nicht um und erzeugen deshalb nicht dieselbe latente Steuerlogik. Ein Steueranspruch ist außerdem nur wirtschaftlich nutzbar, wenn passende zukünftige steuerliche Ergebnisse oder andere zulässige Nutzungsmöglichkeiten bestehen.`,
'Buchwert einer Anlage 100 €, Steuerbasis 70 €, anwendbarer Modellsteuersatz 30 %.',[
'Temporäre Differenz: 100−70=30 €.|Steuerlich sind bereits mehr Kosten abgezogen als bilanziell.',
'Latente Steuerschuld: 30×0,30=9 €.|Später verbleiben steuerlich weniger Abzüge; daraus folgt unter diesen Annahmen zusätzliche Steuerbelastung.',
'Bei Rückgang der Differenz auf 20 € sinkt die Schuld auf 6 €.|Die Auflösung um 3 € bildet die teilweise Umkehrung ab, nicht automatisch eine Cashzahlung genau heute.'
],'Wichtig für Steuerquote, Gewinnprognosen und Unternehmensbewertung.','Die Rechnung ist ein vereinfachtes Modell ohne bestimmte Rechtsordnung. Steuersatzänderungen, Verlustvorträge und Ansatzkriterien können die Behandlung verändern.','Bilanzanalyse trennt Steueraufwand und Steuerzahlung; DCF benötigt den tatsächlich erwarteten Zahlungsweg.'),
R('Vergütung kann zukünftige Verpflichtungen schaffen',`Leistungsorientierte Pensionen versprechen zukünftige Zahlungen, deren Barwert von Gehalt, Dienstzeit, Lebenserwartung und Diskontsatz abhängt. Planvermögen steht diesen Verpflichtungen gegenüber. Der Finanzierungsstatus zeigt die Differenz, aber nicht sämtliche künftigen Zahlungsrisiken.

Aktienbasierte Vergütung schont zunächst Cash, ist wirtschaftlich dennoch nicht kostenlos. Sie überträgt einen Anspruch oder verwässert bestehende Eigentümer. Aufwand, Zahlungsmittel und Zahl der Aktien müssen deshalb gemeinsam beurteilt werden.`,
'Pensionsvermögen 90 Mio. €, Verpflichtungsbarwert 100 Mio. €. Danach steigt das Vermögen um 5 %, die Verpflichtung um 8 %.',[
'Anfangsstatus: 90−100=−10 Mio. €.|Es besteht eine Unterdeckung.',
'Neue Werte: 94,5 und 108 Mio. €; Unterdeckung 13,5 Mio. €.|Trotz positiver Anlagerendite ist die Finanzierungslage schlechter.',
'Verschlechterung: 13,5−10=3,5 Mio. €.|Die Verpflichtungsseite ist stärker gewachsen als das Vermögen; allein auf Anlageperformance zu schauen würde das Problem übersehen.'
],'Relevant für Bilanzanalyse, Unternehmensrisiko und Pensionsportfolios.','Barwertänderungen können aus Diskontsätzen statt neuen Versprechen stammen. Finanzierungsvorschriften und Bilanzierung sind nicht identisch.','ALM betrachtet Vermögen und Verpflichtungen gemeinsam; verwässertes EPS erfasst mögliche zusätzliche Aktien.'),
R('Die Art des Einflusses bestimmt die wirtschaftliche Darstellung',`Eine Beteiligung kann eine reine Finanzanlage, einen maßgeblichen Einfluss oder Kontrolle über ein anderes Unternehmen darstellen. Bei Kontrolle werden in der Konzernsicht grundsätzlich die maßgeblichen Vermögenswerte und Schulden zusammengeführt und konzerninterne Beziehungen bereinigt. Die Equity-Methode entwickelt dagegen einen Beteiligungsbuchwert anhand anteiliger Ergebnisse und Ausschüttungen.

Beim Unternehmenskauf wird der Kaufpreis identifizierbaren Nettovermögenswerten zugeordnet; ein verbleibender Mehrbetrag kann Goodwill sein. Dieser ist kein frei verfügbares Cashpolster. Die spätere Werthaltigkeit hängt von den tatsächlich erzielten wirtschaftlichen Vorteilen ab.`,
'Eine nach Equity-Methode bilanzierte Beteiligung startet bei 100 €. Anteiliger Periodengewinn 12 €, erhaltene Dividende 5 €; weitere Effekte fehlen.',[
'Buchwert nach Gewinnanteil: 100+12=112 €.|Der Anteil am Ergebnis erhöht den bilanziellen Anspruch.',
'Nach Dividende: 112−5=107 €.|Die Auszahlung verwandelt einen Teil des Beteiligungswerts in Cash.',
'Cash steigt um 5 €, Ergebnis enthält hier 12 €.|Dividende und anteiliges Ergebnis dürfen nicht als zwei unabhängige Gewinnquellen addiert werden.'
],'Hilft bei Konzernvergleichen, Akquisitionsanalyse und versteckten Beteiligungswerten.','Kontrolle ist nicht ausschließlich aus einer starren Prozentzahl ableitbar. Kaufpreiszuordnung, Minderheiten und konzerninterne Transaktionen benötigen Detailprüfung.','Enterprise Value und Multiplikatoren müssen Konsolidierungskreis und Minderheitsansprüche konsistent behandeln.'),
R('Währungsumrechnung verändert Berichte ohne Mengenänderung',`Lokale Währung, funktionale Währung und Berichtswährung können auseinanderfallen. Die funktionale Währung beschreibt das primäre wirtschaftliche Umfeld. Umrechnungsmethoden legen fest, welche Positionen zu historischen, aktuellen oder Periodenkursen übersetzt werden und wo Differenzen erscheinen.

Transaktionsrisiko entsteht aus konkreten Fremdwährungsforderungen oder Schulden. Umrechnungsrisiko entsteht durch die Darstellung ausländischer Einheiten in einer anderen Berichtswährung. Beide können zusammen auftreten, sind aber analytisch verschieden. Organisches Wachstum sollte deshalb von Währungs- und Akquisitionseffekten getrennt werden.`,
'Eine Tochter erzielt in beiden Jahren 100 USD Umsatz. Der Durchschnittskurs sinkt von 0,90 auf 0,80 EUR je USD.',[
'Erstes Jahr: 100×0,90=90 € berichteter Umsatz.|Die Dollarleistung wird zum Periodenkurs übersetzt.',
'Zweites Jahr: 100×0,80=80 €.|Lokaler Umsatz und Menge bleiben gleich.',
'Berichtete Veränderung: 80/90−1=−11,11 %.|Der Rückgang ist in diesem Beispiel vollständig ein Umrechnungseffekt; er beweist keinen operativen Absatzeinbruch.'
],'Nützlich für internationale Gewinnanalysen und Vergleichbarkeit von Wachstumsraten.','Durchschnittskurse sind Näherungen; starke Schwankungen, Hyperinflation und unterschiedliche Bewertungsbasen erfordern zusätzliche Behandlung.','Währungsrenditen verwenden dieselbe Umrechnungslogik; ökonomisches Währungsrisiko hängt zusätzlich von Kosten und Wettbewerbern ab.'),
R('DuPont zeigt, woher Eigenkapitalrendite kommt',`ROE setzt Gewinn zum Eigenkapital ins Verhältnis. Ein hoher Wert kann aus hoher Gewinnmarge, effizientem Vermögenseinsatz oder hoher Verschuldung entstehen. Die DuPont-Zerlegung multipliziert diese drei Komponenten so, dass sich Umsatz und Vermögen algebraisch herauskürzen.

Der wirtschaftliche Nutzen liegt nicht im Umformen allein, sondern in der Diagnose. Steigt ROE nur wegen geringeren Eigenkapitals nach Rückkauf oder Verlust, ist das kein Beweis besserer operativer Leistung. Für Periodengewinne sind durchschnittliche Bestandsgrößen häufig aussagekräftiger als einzelne Stichtage.`,
'Nettogewinn 12, Umsatz 200, durchschnittliche Aktiva 100, durchschnittliches Eigenkapital 40.',[
'Marge: 12/200=6 %; Vermögensumschlag: 200/100=2.|Die Firma verdient 6 Cent pro Umsatzeuro und setzt jeden Vermögenseuro zweimal um.',
'Eigenkapitalmultiplikator: 100/40=2,5.|Ein Teil der Aktiva wird durch andere Ansprüche finanziert.',
'ROE: 0,06×2×2,5=30 %; Kontrolle 12/40=30 %.|Der hohe Wert enthält einen erheblichen Finanzierungshebel.'
],'Dient Zeitreihen- und Wettbewerbsvergleich sowie der Suche nach Werttreibern.','Negative oder sehr kleine Eigenkapitalwerte machen ROE schwer interpretierbar. Methodenunterschiede und Einmaleffekte verzerren die Komponenten.','Kapitalstruktur vertieft den Hebel; nachhaltiges Wachstum verbindet ROE mit Gewinnthesaurierung.'),
R('Gewinnqualität betrifft Nachhaltigkeit und Zahlungsnähe',`Ein guter Gewinn sollte aus nachvollziehbaren, wiederholbaren wirtschaftlichen Vorgängen entstehen. Hohe Abgrenzungen sind ein Prüfungssignal, aber kein automatischer Betrugsbeweis. Wachstum kann echte Forderungs- und Vorratsaufbauten erfordern.

Warnsignale entstehen, wenn Umsätze wesentlich schneller als Cashzuflüsse wachsen, Einmaleffekte regelmäßig als Sonderfälle ausgeblendet werden oder Aktivierung den Aufwand dauerhaft nach hinten verschiebt. Man prüft Zeitreihen, Branchenvergleich, Anhang und spätere Einzahlungen gemeinsam.`,
'Gewinn 50 Mio. €, operativer Cashflow 20 Mio. €. Im Vorjahr lagen beide bei 40 Mio. €.',[
'Vereinfachte Accruals aktuell: 50−20=30 Mio. €.|Ein großer Teil des Ergebnisses ist nicht als operativer Cashflow angekommen.',
'Gewinn steigt um 25 %, Cashflow fällt um 50 %.|Die auseinanderlaufenden Trends benötigen eine wirtschaftliche Erklärung.',
'Forderungen, Vorräte, Lieferantenkredite und Einmaleffekte untersuchen.|Erst diese Aufschlüsselung unterscheidet plausibles Wachstum von fragwürdiger Ergebnisdarstellung.'
],'Relevant für Aktien- und Kreditanalyse sowie Due Diligence.','CFO-Ausweis und kurzfristige Stichtagsmaßnahmen können die Kennzahl beeinflussen. Ein einzelnes Jahr genügt selten für ein Urteil.','Umsatzrealisierung und Working Capital erklären Abgrenzungen; Bewertung verlangt normalisierte zukünftige Cashflows.'),
R('Finanzinstitute verdienen und riskieren anders als Industriefirmen',`Für Banken sind Finanzforderungen und Finanzierung operative Bestandteile des Geschäfts. Zinsmarge, Kreditqualität, Kapital und Liquidität stehen deshalb im Mittelpunkt. Eine gewöhnliche Industriekennzahl wie Nettoverschuldung lässt sich nicht unkritisch übertragen.

Versicherungen erhalten Prämien vor vielen späteren Schadenzahlungen. Die Combined Ratio fasst Schaden- und Kostenquote zusammen und beschreibt das versicherungstechnische Ergebnis vor Anlageerträgen. Reservierung und Katastrophenrisiken können dieses Bild stark verändern.`,
'Eine Bank erzielt 6 Mio. € Zinsertrag, zahlt 2 Mio. € Zinsen und hält durchschnittlich 100 Mio. € zinstragende Aktiva. Ein Versicherer hat Schadenquote 70 % und Kostenquote 35 %.',[
'Nettozinsertrag: 6−2=4 Mio. €; NIM=4/100=4 %.|Die Marge setzt das Zinsgeschäft zur dazugehörigen Vermögensbasis ins Verhältnis.',
'Combined Ratio: 70+35=105 %.|Pro Prämieneuro übersteigen Schäden und Kosten die Prämie um 5 Cent.',
'Anlageerträge und Reserven separat prüfen.|Eine Combined Ratio über 100 % schließt einen Gesamtgewinn nicht aus; Kreditverluste können umgekehrt die Bankmarge aufzehren.'
],'Die getrennten Geschäftslogiken bestimmen branchengerechte Bewertung und Stressanalyse.','Kapital- und Liquiditätsquoten folgen detaillierten Regeln. Ausreichendes Buchkapital garantiert keine sofortige Zahlungsfähigkeit.','LCR untersucht kurzfristige Stressliquidität; Kreditverlustmodelle und ALM erklären zentrale Bilanzrisiken.'),
R('Ein integriertes Modell lässt Annahmen durch alle Abschlüsse laufen',`Eine Umsatzprognose benötigt Preis, Menge und gegebenenfalls Produktmix. Daraus folgen operative Kosten, Forderungen, Vorräte, Investitionen und Finanzierung. Ein integriertes Modell verknüpft Gewinnrechnung, Bilanz und Cashflow statt jeden Abschluss isoliert fortzuschreiben.

Operative Annahmen wie Forderungslaufzeit haben direkte Cashwirkungen. Steigt Umsatz, wächst bei unveränderten Zahlungstagen der Forderungsbestand. Der Gewinn kann daher steigen, während freie Liquidität sinkt. Ein Finanzierungsbedarf ist ein Ergebnis des Modells und darf nicht durch eine unbegründete Ausgleichsposition versteckt werden.`,
'Umsatz steigt von 365 auf 438 Mio. €, Forderungslaufzeit bleibt 30 Tage. Vereinfachtes Jahr mit 365 Tagen.',[
'Alte Forderungen: 365×30/365=30 Mio. €.|Die Kennzahl übersetzt Jahresumsatz in den durchschnittlich unbezahlten Zeitraum.',
'Neue Forderungen: 438×30/365=36 Mio. €.|20 % mehr Umsatz erzeugen bei gleicher Laufzeit auch 20 % mehr Forderungen.',
'Zusätzliche Cashbindung: 36−30=6 Mio. €.|Diese 6 Mio. € müssen finanziert oder aus anderem Cashflow gedeckt werden, obwohl die Verkäufe Gewinn erzeugen können.'
],'Genutzt in Budgetierung, DCF und Kreditprüfung.','Saisonalität, Umsatzsteuern, Akquisitionen und Tageskonventionen können die einfache Beziehung verändern. Zirkuläre Zins- und Schuldenrechnungen brauchen kontrollierte Lösung.','Working Capital und FCFF verbinden operative Planung mit Kapitalbedarf und Bewertung.'),
R('Nachhaltigkeitsfaktoren in wirtschaftliche Wirkungen übersetzen',`Umwelt-, Sozial- und Governancefaktoren werden für Bewertung relevant, wenn sie Absatz, Kosten, Investitionen, Verpflichtungen oder Risiko verändern. Eine Kennzeichnung allein ist weder ein Cashflow noch ein fairer Preis. Materialität hängt vom Geschäftsmodell ab.

Physische Klimarisiken betreffen etwa Produktionsausfälle; Übergangsrisiken etwa Technologie, Nachfrage und Regulierung. Menschenrechts- oder Mitarbeiterprobleme können Lieferketten und Produktivität beeinflussen. Die gleiche Wirkung darf nicht zugleich vollständig im Cashflow und nochmals pauschal im Diskontsatz abgezogen werden.`,
'Eine Effizienzmaßnahme kostet heute 20 Mio. € und spart vier Jahre lang jeweils 6 Mio. € am Jahresende. Vergleichszins 8 %, danach kein Restwert.',[
'Barwerte der Einsparungen: 5,556; 5,144; 4,763; 4,410 Mio. €.|Jede Einsparung wird auf heute abgezinst, weil sie erst später entsteht.',
'Summe 19,873 Mio. €; NPV=19,873−20=−0,127 Mio. €.|Die reinen modellierten Einsparungen decken Investition und Renditeanforderung knapp nicht.',
'Zusatznutzen wie vermiedene Ausfälle getrennt schätzen und belegen.|Ein zusätzlicher positiver Effekt kann das Urteil ändern, darf aber nicht bloß aus einem Nachhaltigkeitslabel unterstellt werden.'
],'Wird in Branchenanalyse, Projektbewertung und Portfoliorisikoprüfung verwendet.','Datenqualität, Systemgrenzen und unsichere langfristige Wirkungen begrenzen präzise Schätzungen. Finanzielle und gesellschaftliche Ziele müssen transparent unterschieden werden.','NPV bewertet Zahlungswirkungen; Governance und Ergebnisqualität prüfen die Verlässlichkeit der Angaben.')
];
