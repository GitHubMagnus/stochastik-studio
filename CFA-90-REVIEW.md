# CFA Level I 2027: Ausbau der Vorbereitung ab 82/100

Prüftag: 9. November 2026. Ausgangspunkt ist die veröffentlichte Fassung
24d3a4636333dbe27fc0fe6fa6104814bb387abe mit Materialqualität 90/100 und
Vorbereitungseignung 82/100. Der [Arbeitsplan](CFA-90-PLAN.md) behält die zuvor
festgelegten Kriterien und Gewichte bei. Nach abgeschlossener Funktionsprüfung beträgt die
Vorbereitungseignung nach eigener Einschätzung **90/100**; die konservative
Materialbewertung bleibt **90/100**. Dies ist eine eigene redaktionelle und
technische Prüfung, keine externe Freigabe und keine Bestehenswahrscheinlichkeit.

## Inhaltlicher Prüfungsumfang

Die 360 neuen Aufgaben in `finance-cfa/questions/new-exams-*.cjs` wurden
einzeln in einer gesonderten redaktionellen Durchsicht gelesen: Fragestellung,
richtige Option, beide falschen Optionen, deren Einzelbegründungen, Rechenweg,
Zeitpunkt, Einheit und Kapitelbezug. Die 201 skalaren Rechenentscheidungen und
fünf weiteren mathematischen Fälle wurden zusätzlich mit separat formulierten
Rechnungen geprüft. Diese Rechnungen werten keine verfasste TeX-Zeichenfolge aus.

| Themenbereich | Neue Fragen C und D | Mit gesetztem Rechenschritt | Besonders geprüfte Unterschiede |
|---|---:|---:|---|
| Ethics | 44 | 0 | Mitwirkung, Verfahrensausgang, Zustimmung, Zeitpunkt, eigenes Urteil, Vertraulichkeit und Kundenvorrang |
| Quantitative Methods | 44 | 29 | Versprochen/erwartet, Steuer/Kaufkraft, Cashflowzeitpunkt, Nenner, Konfidenz/Prognose, mehrere IRRs, Datenleck |
| Economics | 24 | 13 | Stilllegung/Verlust, Lagerbestand/-investition, Schuldenquote, reale/nominale FX-Notierung, Wohlfahrt und Geldpolitik |
| Financial Statement Analysis | 44 | 32 | Basic/Diluted EPS, IFRS/US GAAP, CFO/FCFF/FCFE, Steueranspruch/-schuld, Bestandsüberleitung und Kennzahlbasis |
| Corporate Finance | 24 | 17 | Eigentümer-/Gläubigeranreiz, Primär-/Sekundärerlös, Kapitalbindung, Kapitalwert/IRR, Projekt- und Finanzierungsrisiko |
| Equities | 44 | 33 | Stimm-/Kapitalrechte, Ausschüttung/Wert, DCF-Datierung, Anspruchsbrücke, Multiplikatoraggregation und Kapitalbedarf |
| Fixed Income | 44 | 30 | Cash/Nominal, Haircut/Margin, Perioden-/Jahresquote, Macaulay/Modified, lokale Immunisierung, Ausfall und Tranchierung |
| Derivatives | 26 | 19 | Preis/Wert, Payoff/finanzierter Gewinn, FRA-Termin, Forward-/Spotperiode, Hedgequote, Replikation und Optionsgrenzen |
| Alternative Investments | 26 | 17 | Gebührenreihenfolge, HWM, Commitment/NAV, IRR/MOIC, Anspruchsrang, NOI/Cash, Finanzierung und Tokenpreis/-menge |
| Portfolio Construction | 40 | 16 | Gewicht/Volatilität, gemeinsame Matrixgültigkeit, SML/CML, M²-Konvention, Liquidität/Risikowille, VaR/ES und Risikokanäle |
| **Summe** | **360** | **206** | **206 mathematische Entscheidungen und 154 qualitative Fallentscheidungen** |

Die fünf nichtskalaren Sonderfälle prüfen ein Koeffizientenintervall, zwei
IRR-Nullstellen, Werterhaltung beim Split, eine ungültige Korrelationsmatrix
und Vermögen vor/nach einer Fondsausschüttung. Jede Klausur enthält 180 Fragen;
die Themenzahlen entsprechen demselben zulässigen 2027-Bauplan wie A und B.
Die erste und zweite Sitzung enthalten jeweils 90 Fragen.

In der Prüfung wurden unter anderem folgende Punkte verbessert:

- `d-derivatives-05`: ungerundeter USD-Forwardwert −2547,3421 statt einer
  ungenauen Nachkommastelle; die richtige Centantwort bleibt −2547,34.
- `d-alternatives-02`: DPI und RVPI werden in den falschen Optionen getrennt
  mit ihren tatsächlich unterschiedlichen Zählern erläutert.
- `c-alternatives-03`: der Abstand des Anfangs-NAV zur HWM wird nicht mit dem
  aktuellen Abstand oder einer Erfolgsgebühr verwechselt.
- `c-statements-05`: Entwicklungsvermögen ist ausdrücklich noch nicht
  nutzungsbereit; keine ungeklärte Amortisation verändert den Gewinnvergleich.
- `d-derivatives-06`: plausible Verwechslungen zwischen Forwardperiode,
  Spotlaufzeit und physischer Erwartung ersetzen eine fachfremde Ablenkung.
- Mehrere verbale Bond-Optionen wurden in vergleichbarer Länge formuliert;
  falsche Antworten prüfen konkrete Konventions- oder Risikoverwechslungen.
- `d-ethics-01` prüft einen tatsächlichen möglichen Verfahrensausgang statt
  einer wenig aussagekräftigen logischen Umformulierung. Referenz:
  [CFA Rules of Procedure, Rule 2.5](https://www.cfainstitute.org/sites/default/files/-/media/documents/support/conduct/rules-of-procedure-for-conduct-related-to-the-profession-2022.pdf#page=10).

Die zusätzlichen Aufgaben sind selbst verfasst. Disjunkte IDs und andere
Situationen bedeuten keine 360 voneinander unabhängigen Kompetenzen. Zentrale
Rechenmethoden wiederholen sich notwendigerweise. Schwierigkeit, Trennschärfe,
Lesedauer und Bestehensgrenzen sind nicht empirisch kalibriert. Manche einfachen
Begriffsdistraktoren bleiben leichter als komplexe offizielle Prüfungsfälle.

## Training unter Zeitdruck

`#cfa~sprint` stellt 10, 20 oder 40 englische Trainingsfragen aus allen zehn
Themen zusammen. Jedes Thema erhält mindestens eine Frage; weitere Plätze
nähern die Klausurgewichte an. Unbekannte Aufgaben werden bevorzugt.
Die vier reservierten Klausurpools sind ausgeschlossen.

Es gibt eine gemeinsame Zeitreserve von 90 Sekunden je Frage, Navigation,
Markierung, Antwortlöschung und Sicherheitseinschätzung. Die Uhr verwendet
verstrichene Zeit und läuft beim Verlassen der Ansicht weiter. Abgabe oder
Zeitablauf sperrt Antworten und öffnet die vollständigen Begründungen,
Themenauswertung und Kapitelrücksprünge. Leerantworten werden als solche
gespeichert. Ergebnisse fließen einmalig in das vorhandene Fehlerjournal ein;
geratene richtige Antworten bleiben ebenfalls zum Nacharbeiten sichtbar.

Eine laufende Vollklausur und ein Zeitset schließen sich gegenseitig aus.
Dies ist selbst organisiertes Lernen mit zugänglichen Lehrtexten, keine
beaufsichtigte Prüfung oder behauptete Zertifizierung.

<a id="rechner-und-sprache"></a>
## Rechner und Sprache

`#cfa~skills` erläutert 20 englische Arbeitsausdrücke und typische Lesefehler,
prüft acht Auswahlrichtungen/Angaben und bietet neun eigene Zahlenaufgaben:
jährlicher und halbjährlicher Bond-PV, vorschüssige Rente, Kreditrate, NPV,
IRR mit Nullperiode, effektive Jahresrate, Stichprobenstreuung und Bond-YTM.
Alle neun Ergebnisse wurden unabhängig aus Zahlungen bzw. Momenten berechnet.
Ein NPV-Entwurfsfehler wurde vor Freigabe auf 13,67392938 korrigiert.

Die Lösungen zeigen gesetzte Gleichungen, Symbol-/Einheitenhilfen,
BA-II-Plus-Schritte und HP-12C-Schritte im RPN-Modus. Grundlage sind die
aktuell abgerufenen [TI-Anleitung](https://education.ti.com/html/eguides/financials/pdfs/EN/BA-II-PLUS_EN.pdf),
[HP-12C-Anleitung](https://h10032.www1.hp.com/ctg/Manual/c00363319.pdf) und
[Platinum-Anleitung](https://h10032.www1.hp.com/ctg/Manual/bpia5184.pdf).
Kontrolliert wurden Registerlöschung, Periodisierung, END/BGN, Vorzeichen,
CF0/CFj, explizite Nullperiode, NPV/IRR, Stichproben-Sx und RPN/ALG.
Bei schwer extrahierbaren Tastensymbolen wurde die gerenderte Originalseite
gelesen. Die Rezepte wurden nicht auf physischer Hardware oder einem
Herstelleremulator ausgeführt. Die Website prüft Zahlen und zeigt die Schritte;
sie simuliert keinen zugelassenen Prüfungsrechner.

Die [CFA-Rechnerregel](https://www.cfainstitute.org/about/governance/policies/cfa-calculator-policy)
wurde am 9.11.2026 erneut gelesen. Zugelassene Modelle und Varianten werden
in der offiziellen Quelle genannt. Das offizielle Practical Skills Module
bleibt eine separate Pflicht.

| Abgerufene Datei | SHA256 |
|---|---|
| TI BA II Plus | 904bd9832f18b132d87e42c7d2cfce2ed376478fe579806f47c90b69a949ffd2 |
| HP 12C | b1a21f9dd5b57df37426ca696df27334167a26941272ad4c9f17c6ed53c94a07 |
| HP 12C Platinum | ccff40871a94ad5230665a323b015666ebac284a15247f418b96b14febbc5106 |

<a id="november-errata"></a>
## November-Errata

Der [aktuelle Outline 2027](https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf)
ist am 9.11.2026 bytegleich zur vorher geprüften Fassung:
7099c76889428357ffb4f562a88fe7974e71808054f02df90526c2b6102c3c01.
Die [November-Errata](https://www.cfainstitute.org/sites/default/files/2027-cfa-program-level-1-errata-notice.pdf)
haben nun 43 Seiten und SHA256
8c14c06a44af4a0183a5fb846a7a65e9fb79e796395b1235e97642e868cfe3a1.
Alle 43 aktuellen Seiten wurden gelesen; die neuen Einträge auf Seiten 4–6
wurden zusätzlich in den gerenderten Originalseiten gelesen. Die historischen
Prüfungen mathematischer Darstellungen und der drei verlinkten Ergänzungen
bleiben im [Errata-Audit](CFA-2027-ERRATA-AUDIT.md) nachvollziehbar.

Sieben neue Zeilen betreffen fünf Sachzusammenhänge: positive statt negative
große Spreadänderungen, PMT-Funktion und richtige Kreditbasis,
Binomialschiefe, Beta gegenüber Korrelation sowie drei Gleichungsverweise im
Prognosekapitel. Die eigenen Median- und Zahlungsrechnungen stimmen bereits
mit der sachlichen Korrektur überein. Fremde Gleichungsnummern werden nicht
als eigene Kapitelreferenzen übernommen.

`distributions/discrete` ergänzt die Binomialschiefe einschließlich aller
Symbole, einen Vergleich p = 0,2/0,5/0,8 und die degenerierten Grenzen.
`multiples/peers` ergänzt aufklappbar die Kovarianz-/Korrelationsidentität
des Beta und zwei Peers mit gleicher Korrelation, verschiedener Volatilität
und folglich anderer CAPM-Renditeforderung. Die Vorzeichen der Marktprämie
und die Grenzen historischer Schätzung sind ausdrücklich genannt.
Getrennte Prüfungen summieren die Binomialwahrscheinlichkeiten bzw.
konstruieren vier gemeinsame Renditezustände; sie prüfen nicht nur eine
wiederholte Eingabe derselben Formel.

## Bestandsschutz und Freigabe

Ein Vergleich mit dem veröffentlichten Commit bestätigt: alle bisherigen
4478 Fragen einschließlich Antwortreihenfolge, Lösungen und Revisionen sind
inhaltlich identisch. Die 4118 Trainingsaufgaben bleiben erhalten. Bei 100
Lerneinheiten ist der gesamte Inhalt identisch; bei den übrigen zwei bleiben
alle bisherigen Abschnitte erhalten und werden um die genannten Vergleiche
ergänzt. Die 340 Lernziel-, Beispiel- und Trainingszuordnungen bleiben erhalten.
Es wird keine neue vollständige Lektüre aller älteren Lehrtexte behauptet.

Die Abnahmefingerprints binden die jetzt geprüften Kapitel und Fragen;
zusätzlich ist der vollständige Rechner-/Sprachdatensatz einschließlich
Quellen und Tastenschritten gebunden. Eine Inhaltsänderung ohne passenden
Nachweis scheitert am Release-Gate. Die ursprünglichen Kapitelprüfungen
vom 27.10.2026 bleiben mit datierten Ergänzungen nachvollziehbar.

Die technische Abnahme ist abgeschlossen: **599 Kernprüfungen, 58 Browserfälle**.
Alle 360 neuen Aufgaben mit 206 Formeln wurden bei 320, 390, 600 und 1440 Pixeln
geprüft; 171 lange Formelbereiche wurden zusätzlich mit der Tastatur verschoben.
Alle acht Sprachchecks und neun Rechneraufgaben, Komma-/Fehleingaben,
beide Geräteansichten und alle neun tatsächlichen Kapitelrücksprünge bestehen.
Zeitablauf auf anderer Route und nach Reload, Leerantworten, einmalige Speicherung,
Fehlerjournal und die gegenseitige Klausur-/Zeitset-Sperre bestehen.

Alle vier tatsächlichen Klausuren liefen über beide Sitzungen einschließlich
720 geöffneter Erklärungen. Ein real abgeleiteter Oktober-Speicherfall bleibt
kompatibel. Edge speichert auch den Belastungsfall mit 8837 Ergebnissen und
4,70 MB UTF-16 ohne Verlust der laufenden Klausur oder des Trainings.
Ein gefundener Desktopüberlauf wurde durch eine ausschließlich auf die
Fragennavigation begrenzte CSS-Korrektur behoben. Die 25 neuen ausgewählten
Ansichten wurden tatsächlich gelesen.

<a id="bewertung"></a>
## Neubewertung anhand derselben Gewichte

| Kriterium | Vorher | Jetzt | Begründete Veränderung |
|---|---:|---:|---|
| Lernzielabdeckung | 28/30 | 28/30 | Ergänzte Präzision; kein neuer unabhängiger Vollabgleich mit dem lizenzierten Curriculum. |
| Prüfungstraining | 21/30 | 26/30 | Zusätzliche neue Gesamtdurchläufe nach Nacharbeit, kontrollierte Transfervergleiche und gemischte Abrufpraxis unter Zeitdruck. Keine Punkte allein für die Zahl neuer IDs oder Softwaretests. |
| Ethics/FSA | 13/15 | 13/15 | Neue präzise Fälle; externe Fachredaktion fehlt weiterhin. |
| Diagnose/Wiederholung | 9/10 | 9/10 | Neue Modi nutzen das geprüfte Journal, keine empirische Kompetenzkalibrierung. |
| Jahr, Sprache, Arbeitsweise | 11/15 | 14/15 | Aktueller Quellenstand; Auswahlrichtungen und englisches Lesen unter Zeitdruck sowie zentrale Operationen auf beiden Rechnerfamilien praktisch übbar. |
| **Vorbereitungseignung** | **82/100** | **90/100** | **Begründete Selbstbewertung des Angebots, keine persönliche Bestehenswahrscheinlichkeit.** |

Der Fünf-Punkte-Zuwachs im Training betrifft Verfügbarkeit neuer vollständiger
Transferprüfungen und Methodenabruf. Der Drei-Punkte-Zuwachs in der Arbeitsweise
betrifft konkrete Lese- und Rechnerfertigkeiten. Beide Nutzenaspekte werden
getrennt beurteilt. Mehr Bildschirmansichten und bestandene Softwaretests sind
Prüfnachweise der Funktion, keine Belege einer erhöhten Lernwirkung.

Die Materialteilnoten bleiben konservativ 23/25, 23/25, 14/15, 14/15 und 16/20,
also 90/100. Die verbleibenden Einschränkungen werden nicht wegdefiniert:
keine unabhängige externe Fachredaktion, kein vollständiger lizenzierter
Curriculum-Vergleich, keine empirische Fragen-/Bestehenskalibrierung, teils
leichte Distraktoren und überwiegend deutsche Lehrtexte.

Hashvergleiche beziehen sich auf die LF-normalisierte UTF-8-Fassung.
Geprüftes Artefakt: ea704f25a8b95efa; CFA-Datenversion e93a6ac6b0676003.
HTML: 29126298 Bytes, SHA256 ea704f25a8b95efa62745ebafc9ce37a275c36d9b82168c03726b375834b8b46.
CFA-Daten: SHA256 7e21c40310f232899cb2096a00605d2efe63f791a84e89fc817bb754e449a26a.
