const R=require('./schema.cjs');
module.exports=[
R('Eigentum, Kontrolle und Haftung sind unterschiedliche Fragen',`Ein Unternehmen verbindet Kapital, Arbeit, Verträge und Entscheidungsrechte. Eigentümer besitzen einen Residualanspruch: Nach Erfüllung vorrangiger Ansprüche gehört ihnen der verbleibende Wert. Gläubiger haben vertragliche Ansprüche, deren Rang und Sicherheiten ihre Verlustbeteiligung bestimmen.

Rechtsform und Eigentümerstruktur beeinflussen Haftung, Kapitalzugang und Kontrolle. Stakeholder umfassen neben Kapitalgebern auch Beschäftigte, Kunden, Lieferanten und weitere Betroffene. Eine Entscheidung kann den Gewinn heute erhöhen und zugleich Kundenbindung oder Finanzierungsmöglichkeiten beschädigen; Unternehmensführung muss solche Rückwirkungen verstehen.`,
'Ein Geschäft besitzt einen wirtschaftlichen Vermögenswert von 120. Vorrangige Schulden betragen 80.',[
'Residualwert des Eigenkapitals: 120−80=40.|Die Eigentümer erhalten den Wert nach den Gläubigeransprüchen.',
'Fällt der Vermögenswert auf 90, bleibt Eigenkapital 10.|Ein Rückgang des Gesamtwerts um 25 % verursacht beim Eigenkapital einen Rückgang um 75 %.',
'Bei Vermögenswert 70 reichen die Mittel nicht mehr für die Schulden von 80.|Rang und Sicherheiten bestimmen dann die Verteilung; begrenzte Haftung verhindert nicht den Verlust des eingesetzten Eigenkapitals.'
],'Diese Anspruchslogik wird in Kapitalstruktur, Bewertung und Restrukturierung verwendet.','Rechtliche Rangfolge und Haftung hängen vom konkreten Vertrag und Rechtsrahmen ab. Buchwerte können deutlich von realisierbaren Werten abweichen.','Kreditanalyse betrachtet vorrangige Ansprüche; Aktienbewertung den nachrangigen Rest.'),
R('Anreize können Entscheidungen vom wirtschaftlichen Ziel entfernen',`Beim Principal-Agent-Problem überträgt ein Auftraggeber Entscheidungen an einen Beauftragten. Unterschiedliche Informationen und Interessen erschweren die Kontrolle. Manager können Wachstum, Status oder kurzfristigen Bonus stärker gewichten als langfristigen Eigentümerwert.

Governance versucht, Informationsfluss, Aufsicht und Vergütung passend zu gestalten. Eine einzelne Zielkennzahl kann Ausweichhandlungen fördern. EPS kann durch Rückkäufe steigen, ohne dass die Investition einen positiven Kapitalwert besitzt. Unabhängigkeit von Kontrollorganen ist deshalb wertvoll, muss aber mit Fachkenntnis und tatsächlichem Zugang zu Informationen verbunden sein.`,
'Gewinn 10 Mio. €, 10 Mio. Aktien. Die Firma kauft eine Million Aktien zurück; vereinfachend bleibt der Gewinn unverändert.',[
'Vorher EPS=10/10=1 €.|Die Kennzahl verteilt Gewinn auf Eigentumsanteile.',
'Nachher EPS=10/9=1,111 €; Anstieg 11,11 %.|Der Nenner sinkt, obwohl operativ kein zusätzlicher Gewinn entstanden ist.',
'Kaufpreis, Finanzierungskosten und entgangene Alternativen prüfen.|Der EPS-Anstieg allein zeigt nicht, ob der Rückkauf Wert geschaffen hat.'
],'Genutzt bei Vergütungsprüfung, Aktionärsrechten und Governance-Risikobewertung.','Jede Kennzahl kann bei einseitiger Steuerung Fehlanreize erzeugen. Formal unabhängige Aufsicht garantiert keine wirksame Kontrolle.','Ethik behandelt Interessenkonflikte; Investitionsrechnung beurteilt den ökonomischen Nutzen einer Maßnahme.'),
R('Ein Geschäftsmodell erklärt, warum Kunden zahlen und Kapital gebunden wird',`Ein Geschäftsmodell verbindet Kundennutzen, Preissetzung, Kosten und Kapitalbedarf. Hoher Umsatz ist kein Selbstzweck: Wert entsteht, wenn nach angemessener Entlohnung aller eingesetzten Ressourcen ein Überschuss verbleibt. Skalierbarkeit hängt davon ab, wie zusätzliche Nachfrage variable Kosten und Investitionen verändert.

Geschäftsrisiken entstehen aus Wettbewerb, Technologie, Lieferanten, Kundenkonzentration und Finanzierung. Eine hochwertige Marke kann Preisaufschläge ermöglichen; sie muss aber durch Produktqualität und Investitionen erhalten werden. Daher darf eine historische hohe Marge nicht automatisch unbegrenzt fortgeschrieben werden.`,
'Ein Produkt verkauft sich für 50 €, variable Kosten betragen 30 €, jährliche Fixkosten 100.000 €.',[
'Deckungsbeitrag je Stück: 50−30=20 €.|Jede zusätzliche Einheit trägt vor Kapazitätssprüngen 20 € zur Deckung der Fixkosten bei.',
'Break-even-Menge: 100.000/20=5.000 Stück.|Erst ab dieser Menge sind im vereinfachten Modell alle operativen Kosten gedeckt.',
'Bei 6.000 Stück: 6.000×20−100.000=20.000 € Betriebsgewinn.|Weitere 1.000 Stück erzeugen 20.000 € Gewinn, solange Stückmarge und Kapazität unverändert bleiben.'
],'Nützlich für Unternehmensanalyse, Start-up-Planung und Szenariorechnungen.','Kapitalbedarf, Steuern und Finanzierung fehlen im einfachen Break-even. Eine profitable Menge kann trotzdem nicht finanzierbar sein.','Elastizität beeinflusst Preis und Menge; Working Capital und Capex übersetzen Wachstum in Finanzierungsbedarf.'),
R('Kapitalwert misst zusätzlichen Wert nach Opportunitätskosten',`Eine Investition bindet heute Kapital, das anderweitig eingesetzt werden könnte. Deshalb werden alle zusätzlichen Projektcashflows mit einer zum Risiko passenden Renditeanforderung bewertet. Ein positiver NPV bedeutet, dass die erwarteten Zahlungen nach diesen Opportunitätskosten einen heutigen Überschuss erzeugen.

Relevant sind inkrementelle Zahlungen: versunkene Kosten entfallen, entgangene Alternativerträge und Kannibalisierung bestehender Produkte gehören hinein. IRR setzt den NPV auf null und berichtet eine Rate. Bei verschiedenen Projektgrößen oder ungewöhnlichen Zahlungsfolgen kann diese Rate jedoch zu anderen Rangfolgen als der NPV führen.`,
'Ein Projekt kostet 100 € und zahlt zwei Jahre lang jeweils 60 €. Diskontsatz 10 %.',[
'Barwerte: 60/1,10=54,55 und 60/1,10²=49,59 €.|Die zweite Zahlung wird wegen längerer Wartezeit stärker abgezinst.',
'NPV=60/1,10+60/1,10²−100≈4,13 €; Zwischenwerte erst am Ende runden.|Das Projekt deckt die geforderte Verzinsung und schafft einen zusätzlichen erwarteten Gegenwartswert.',
'Bei 15 %: 52,17+45,37−100=−2,46 €.|Eine höhere Opportunitätsrendite kann dieselben Zahlungen unattraktiv machen.'
],'Wird bei Projekten, Akquisitionen und alternativen Kapitaleinsätzen verwendet.','Diskontsatz und Prognosen sind unsicher. Ein positiver NPV beseitigt keine Liquiditätsengpässe während der Umsetzung.','DCF nutzt dasselbe Prinzip für Unternehmen; reale Optionen ergänzen die Handlungsflexibilität.'),
R('Flexibilität kann einen zusätzlichen Wert besitzen',`Eine reale Option ist die Möglichkeit, eine wirtschaftliche Handlung später an neue Informationen anzupassen. Ein Projekt kann erweitert, verschoben, verkleinert oder aufgegeben werden. Ein statischer Kapitalwert unterstellt dagegen häufig einen einmal festgelegten Plan.

Wert entsteht, wenn ungünstige Entscheidungen vermieden werden können, während günstige Chancen erhalten bleiben. Dazu braucht es ein tatsächlich durchsetzbares Handlungsrecht. Allgemeine Hoffnung auf spätere Verbesserungen ist keine bewertbare Option. Lernen, Entscheidungskosten und Konkurrenz müssen berücksichtigt werden.`,
'Eine Pilotanlage kostet heute 5 €. Danach zeigt sich mit 50 % Wahrscheinlichkeit ein guter Markt. Nur dann darf für 50 € erweitert werden; der sofortige Wert dieser Erweiterung wäre 80 €. Zins hier null.',[
'Guter Zustand: Erweiterungswert 80−50=30 €.|Die Investition wird nur ausgelöst, wenn sie vorteilhaft ist.',
'Schlechter Zustand: nicht erweitern, zusätzlicher Wert 0.|Die Ausübung ist ein Recht und keine Pflicht.',
'Erwarteter Pilotwert: 0,5×30+0,5×0−5=10 €.|Die Flexibilität vermeidet den schlechten Ausbau. In diesem vereinfachten Entscheidungsbaum sind Wahrscheinlichkeiten und Risikobewertung ausdrücklich vorgegeben.'
],'Anwendbar auf Forschung, Rohstoffprojekte und gestufte Kapazitätserweiterung.','Reale Projekte sind oft nicht handelbar; risikoneutrale Optionsformeln lassen sich nicht automatisch übertragen. Konkurrenz kann Warteoptionen entwerten.','Optionsauszahlungen erklären die Asymmetrie; Szenariobäume bilden Lernen und bedingte Entscheidungen ab.'),
R('Kapitalkosten passen zum Anspruch und zum Risiko',`Eigenkapital und Fremdkapital verlangen unterschiedliche erwartete Vergütung. WACC gewichtet ihre Kosten nach einer geeigneten Kapitalstruktur und berücksichtigt im einfachen Modell den steuerlichen Zinsvorteil. Marktwerte sind als Gewichte meist relevanter als historische Buchwerte.

Ein Unternehmens-WACC passt nur zu Cashflows mit ähnlichem Risiko und passender Finanzierungspolitik. Ein völlig neues Hochrisikoprojekt darf nicht allein deshalb billig diskontiert werden, weil die bestehende Firma günstig Kredit erhält. Cashflowdefinition und Diskontsatz müssen dieselben Kapitalgeber abbilden.`,
'Zielstruktur 60 % Eigenkapital und 40 % Schulden, Eigenkapitalkosten 10 %, Fremdkapitalkosten 5 %, Modellsteuersatz 25 %.',[
'Nachsteuer-Fremdkapitalkosten: 5 %×(1−0,25)=3,75 %.|Die Formel setzt voraus, dass der steuerliche Zinsvorteil tatsächlich nutzbar ist.',
'Gewichtete Beiträge: 0,60×10 %=6 % und 0,40×3,75 %=1,5 %.|Beide Finanzierungsquellen werden nach ihrem Anteil bewertet.',
'WACC=7,5 %.|Dieser Satz passt zum freien Cashflow für alle Kapitalgeber unter den Modellannahmen.'
],'Dient FCFF-Bewertung und Investitionsrechnung vergleichbarer Projekte.','Verschuldung verändert Eigenkapitalrisiko und möglicherweise Ausfallkosten. WACC ist daher nicht durch beliebiges Ersetzen von Eigenkapital mit billigem Kredit unbegrenzt senkbar.','CAPM schätzt Eigenkapitalkosten; FCFF/FCFE unterscheiden die passenden Cashflows.'),
R('Fixe Ansprüche verstärken die Schwankung des verbleibenden Ergebnisses',`Operativer Hebel entsteht, wenn Fixkosten zunächst gedeckt werden müssen. Finanzieller Hebel entsteht zusätzlich durch Zinsen und andere feste Finanzierungsansprüche. Kleine Umsatzänderungen können dadurch große prozentuale Änderungen des Eigenkapitalergebnisses verursachen.

Modigliani-Miller dient als Referenz: Unter idealisierten Bedingungen erzeugt die Verpackung identischer operativer Zahlungen keinen zusätzlichen Gesamtwert. Reale Steuern, Insolvenzkosten und Informationsprobleme erklären Abweichungen. Mehr Verschuldung verschiebt Risiken und kann Vorteile besitzen, ist aber kein kostenloser Renditegenerator.`,
'Umsatz 100, variable Kosten 60, Fixkosten 20, Zins 5. Preise und Kostenquoten bleiben lokal konstant.',[
'Deckungsbeitrag 40, EBIT 20, EBT 15.|Fixkosten werden vor EBIT, Zinsen vor EBT abgezogen.',
'DOL=40/20=2; DFL=20/15=1,333.|Die beiden Hebel messen lokale prozentuale Ergebnissensitivitäten.',
'Bei Umsatz +1 % steigt der Beitrag um 0,4 auf 40,4; EBT auf 15,4, also +2,667 %.|Der kombinierte Hebel 2×1,333 erklärt die verstärkte Wirkung.'
],'Relevant für Unternehmensstresstests und Schuldentragfähigkeit.','Nahe null EBIT oder EBT werden Quotienten instabil. Fixkosten, Preise und Finanzierung können sich bei großen Änderungen mitverändern.','Beta steigt durch Finanzierungshebel; Kreditrisiko untersucht die festen Ansprüche im Stress.'),
R('Wachstum bindet häufig Geld, bevor Kunden bezahlen',`Working Capital verbindet Vorräte, Forderungen und kurzfristige operative Schulden. Der Cash Conversion Cycle zählt die Zeit zwischen eigener Auszahlung und Kundeneinzahlung: Lagerdauer plus Forderungslaufzeit minus Lieferantenzahlungsziel.

Ein kürzerer Zyklus kann Liquidität freisetzen, aber aggressive Kürzung hat Grenzen. Zu wenig Vorrat gefährdet Lieferung, zu strenge Kundenziele Umsatz und überlange Lieferantenziele die Versorgung. Liquiditätsmanagement optimiert daher den wirtschaftlichen Ablauf und nicht bloß eine Kennzahl.`,
'Lagerdauer 50 Tage, Kundenzahlungsziel 40 Tage, Lieferantenziel 30 Tage; täglicher vereinfachter Finanzierungsbedarf 10.000 €.',[
'Cash Conversion Cycle: 50+40−30=60 Tage.|Der Lieferantenkredit finanziert einen Teil des Betriebszyklus.',
'Vereinfachte Bindung: 60×10.000=600.000 €.|Die Dauer wird in einen groben Kapitalbedarf übersetzt.',
'Zehn Tage schnellerer Zahlungseingang senken die Bindung um etwa 100.000 €.|Der Umsatz bleibt gleich, aber früher verfügbares Cash reduziert Finanzierungskosten.'
],'Wird in Liquiditätsplanung, Kreditprüfung und Abschlussprognosen verwendet.','Für exakte Rechnungen haben Vorräte und Forderungen unterschiedliche Bewertungsbasen. Der vereinfachte Tagesbedarf ersetzt keine Einzelplanung.','Kapitalflussrechnung erfasst Bestandsänderungen; Free Cashflow zieht zusätzlichen operativen Kapitalbedarf ab.'),
R('Ausschüttungen verteilen Wert und verändern Ansprüche',`Dividenden übertragen Cash an Eigentümer. Rückkäufe reduzieren zusätzlich die Zahl ausstehender Aktien. Beides muss aus tatsächlich verfügbarem Kapital und unter Berücksichtigung alternativer Investitionen beurteilt werden.

Bei einer Dividende verlässt Geld das Unternehmen; der Aktienwert sinkt unter sonst gleichen Bedingungen entsprechend. Ein Rückkauf kann verbleibenden Eigentümern nützen, wenn Aktien günstig erworben werden, oder Wert übertragen, wenn zu teuer gekauft wird. Höheres EPS allein reicht zur Beurteilung nicht.`,
'Eine Aktie steht bei 50 € und schüttet 2 € aus. Steuern und andere Kursbewegungen fehlen.',[
'Theoretischer Ex-Dividendenpreis: 50−2=48 €.|Der Unternehmensanspruch enthält nach Auszahlung 2 € weniger Cash.',
'Anlegervermögen: 48 € Aktie +2 € Cash=50 €.|Die Ausschüttung erzeugt durch sich selbst keinen zusätzlichen Gesamtwert.',
'Gesamtrendite am Auszahlungstag: (48+2−50)/50=0 %.|Nur den Preisrückgang als Verlust zu berichten würde die Dividende ignorieren.'
],'Relevant für Ausschüttungspolitik, Total-Return-Indizes und Renditevergleiche.','Steuern, Informationssignale und Handelsfriktionen beeinflussen reale Ex-Tagespreise. Zahlungsfähigkeit und rechtliche Ausschüttungsgrenzen sind zusätzlich zu beachten.','Dividend Discount Models bewerten künftige Ausschüttungen; Unternehmensbewertung betrachtet verbleibende Investitionsmöglichkeiten.'),
R('Akquisitionen müssen mehr schaffen als sie zusätzlich kosten',`Eine Übernahme kann Synergien aus Kosten, Umsatz oder Kapitalnutzung erzeugen. Der Käufer zahlt dafür häufig einen Aufschlag auf den eigenständigen Wert des Ziels. Wertschaffung für Käuferaktionäre entsteht nur, wenn der Barwert ihrer Vorteile den Aufschlag und die Umsetzungskosten übersteigt.

Finanzierung, Kaufpreis und operativer Nutzen sind getrennt zu prüfen. Eine Transaktion kann EPS erhöhen, weil das Ziel ein niedrigeres KGV besitzt, ohne positiven NPV zu erzeugen. Integrationsrisiken, Kundenverluste und personelle Abgänge können prognostizierte Synergien reduzieren.`,
'Eigenständiger Zielwert 100 Mio. €, Kaufpreis 125 Mio. €, Barwert der Synergien 40 Mio. €, Transaktions- und Integrationskosten 10 Mio. €.',[
'Übernahmeprämie: 125−100=25 Mio. €.|Dieser Betrag muss aus zusätzlichem Nutzen gerechtfertigt werden.',
'Käufer-NPV: 40−25−10=5 Mio. €.|Nur der nach Prämie und Kosten verbleibende Vorteil schafft erwarteten Käuferwert.',
'Fallen Synergien auf 30 Mio. €, wird NPV=−5 Mio. €.|Eine überschaubare Prognoseänderung kann das Vorzeichen der Entscheidung umkehren.'
],'Genutzt bei M&A-Bewertung, Restrukturierung und Integrationsplanung.','Synergien dürfen nicht bereits im eigenständigen Zielwert stecken. Timing und Wahrscheinlichkeit ihrer Umsetzung müssen berücksichtigt werden.','DCF diskontiert Synergien; Governance untersucht mögliche Größen- und Vergütungsanreize des Managements.')
];
