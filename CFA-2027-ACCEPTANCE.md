# Finance Studio: Abnahme für CFA Level I 2027

Prüfstand: **27. Oktober 2026**. Ergebnis der eigenen, dokumentierten Prüfung:
**Materialqualität 90/100**, **Eignung zur Level-I-Vorbereitung 82/100**.
Ausgangspunkt waren 60/100 und 35/100. Die Kriterien und Gewichte wurden vor
der Überarbeitung im [Qualitätsplan](CFA-QUALITY-PLAN.md) festgelegt.
Die Bewertungen sind fachliche Selbsteinschätzungen mit den unten genannten
Abzügen. **82/100 ist keine 82-prozentige persönliche Bestehenswahrscheinlichkeit.**
Es liegen weder eine externe Fachfreigabe noch Lernerfolgsdaten von Kandidaten vor.

## Was abgenommen wird

Der eigene Lernpfad **CFA Level I 2027** enthält alle 102 Module und 340 einzeln
zugeordneten Lernziele. Jedes Lernziel hat separate Zugänge zu Erklärung,
ausgearbeitetem Rechen- oder Fallbeispiel und selbstständiger Übung. Die
171 älteren Finance-Kapitel bleiben zusätzliche, als Bezugsjahr 2026 bezeichnete
Lehr- und Nachschlagetexte; dies ist keine Freigabe für CFA Level II oder III 2027.
Stochastik-Studio und Kelly Studio bleiben zugängliche eigenständige Module.

Die Abnahme verbindet die einzelnen Kapitelprüfungen im Qualitätsplan mit dem
vollständigen Errata-Abgleich, dem inhaltlichen Lernziel-/Beispielabgleich,
der redaktionellen Fragenprüfung und den Funktionsprüfungen. Es wird **keine neue
vollständige Lektüre sämtlicher Kapitel und sämtlicher 4118 Trainingslösungen
am letzten Prüftag** behauptet. Die Inhalte der bereits einzeln geprüften Kapitel
bleiben bei dieser Freigabe unverändert; lediglich ihre Prüfmetadaten werden
aktualisiert. Die früheren Prüfnotizen bleiben unter review.previous erhalten.
Die genaue geprüfte Fassung jedes Kapitels und seines Fragenpools steht mit
vollständigen SHA256-Werten in [acceptance.json](finance-cfa/acceptance.json).
Eine spätere inhaltliche Änderung muss vor dem Release erneut bestätigt werden;
eine pauschale checked-Markierung allein passiert die Freigabesperre nicht.

## Primärquellen und Aktualität

- Der [offizielle Lernzielkatalog 2027](https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf)
  wurde vollständig katalogisiert. Der erneute Abruf am 27.10.2026 stimmt
  bytegenau mit dem geprüften Exemplar überein: SHA256
  7099c76889428357ffb4f562a88fe7974e71808054f02df90526c2b6102c3c01.
- Die [Errata-Ausgabe Oktober 2026](https://www.cfainstitute.org/sites/default/files/2027-cfa-program-level-1-errata-notice.pdf)
  wurde über alle 42 Seiten abgeglichen; mathematische Originaldarstellungen
  und drei verlinkte Exhibits wurden zusätzlich gelesen. Der erneute Abruf
  stimmt ebenfalls bytegenau überein: SHA256
  44ed7cf1dc7fadbdfabab7ae923a429342f7f7c1173d0673e98e378369fea7af.
  Die Einzelentscheidungen stehen im [Errata-Audit](CFA-2027-ERRATA-AUDIT.md).
- Die [offiziellen Format- und Themenregeln](https://www.cfainstitute.org/programs/cfa-program/candidate-resources/level-i-exam)
  wurden am 27.10.2026 erneut geprüft. Die eigenen Klausuren verwenden je
  180 Fragen mit drei Optionen und zwei Sitzungen mit je 135 Minuten.
  Die gewählten Themenzahlen liegen jeweils innerhalb der veröffentlichten
  Gewichtungsintervalle 2027. Sie geben keine behauptete exakte Verteilung
  einer künftigen offiziellen Prüfung vor.
- IFRS Foundation, CFA Institute, Zentralbanken, OpenStax und weitere
  Primärquellen sind in den jeweiligen Kapiteln konkret verlinkt. Öffentlich
  zugängliche CFA-Refresher-Texte von 2026 sind als solche bezeichnet;
  maßgeblicher Lernziel- und Errata-Bezug ist 2027.

## Abgearbeitete ursprüngliche Befunde

| Befund | Ergebnis und konkrete Prüfbasis |
|---|---|
| Fehlender Jahrgang und bloße Themenliste | 102 Module/340 Lernziele aus dem Outline 2027; Erklärung, Beispiel und Training getrennt verlinkt. Alle 340 eigenen Lernzielbezeichnungen und ihre ersten Beispielzugänge wurden zusätzlich inhaltlich verglichen. |
| EPS, Kennzahlen, Indizes und Leasing zu knapp | Zeitgewichtete Aktien, Treasury Stock, If-Converted, Antidilution und Instrumentenreihenfolge; DuPont, Bestands-/Stromnenner; Indexdivisoren und externe Cashflows; IFRS-/US-GAAP-Leasing und Vergütung mit vollständigen Vergleichsrechnungen. |
| Zu geringe Herleitungstiefe | Kapitelweise eigene Ableitungen und kontrollierte Fälle. Duration verbindet Preisableitung, Macaulay, Modified, Money Duration und PVBP; Laufzeit-, Kupon-, Yield- und Positionsvergleiche enthalten auch nicht monotone Gegenbeispiele. Alpha wird von Roh-Intercept, Beta, Treynor, M², Kosten und Schätzunsicherheit abgegrenzt. |
| Unpräzise Ethics-Regeln | Zehn Module mit Einzelstandards, Zeitpunkt, Adressat, Zustimmung und Ausnahmen. Kompetenzstandard, unaufgeforderte Orders, Vertraulichkeit, Empfehlungen gegenüber Pflichten und Prüfungsvertraulichkeit sind getrennt. Alle 44 reservierten Ethics-Fragen wurden mit konkreten Regelkonflikten überarbeitet. |
| Unzureichende Anwendungen | [Anwendungs-Audit](CFA-2027-APPLICATION-AUDIT.md): zwölf fehlende Anwendungen ergänzt, weitere gezielte Fallvergleiche und 21 bessere vorrangige Beispielzugänge. Keine bloße Gleichsetzung von Abschnittslink und durchgerechneter Anwendung. |
| Formeln ohne Beschriftung | Lokales LaTeX/MathML, Lesart, Symbol- und Einheitentafeln; numerische Schritte und Konventionen. Auch ältere Finance-, Stochastik- und Kelly-Formeln besitzen Hilfen. Formeln werden bei Bedarf innerhalb ihres Bereichs per Tastatur verschoben. |
| Unanschauliche Zusammenhänge | Berechnete Kurven mit Achsen, Legende, Lesehilfe und Wertetabelle; Herleitung und Annahmen bleiben sichtbar. 347 CFA-Grafiken und 13 Ablaufbilder ergänzen die früheren 43 Lehrbuchgrafiken und die interaktiven Modelle. |
| Zu wenig selbstständige Übung | 4118 eigene englische Trainingsaufgaben, drei erläuterte Optionen, deutsche Lösungen und genaue Rücksprünge. Die 1034 älteren offenen Verständnisaufgaben werden separat gezählt. |
| Keine echten vollständigen Klausuren | Zwei disjunkte reservierte Pools mit je 180 Aufgaben; Training verwendet keine reservierten Fragen. Wiederholungen werden kenntlich gemacht; Lösungen erscheinen erst nach beiden Abgaben. |
| Mehrdeutige oder abhängige Aufgaben | [Aufgaben-Audit](CFA-2027-QUESTION-AUDIT.md): alle 360 reservierten Stems, Optionen und Einzelbegründungen gelesen; 44 Ethics-, zehn Quant- und 58 weitere Fragen präzisiert. Kontextsuche: 100 Treffer geprüft, 22 Abhängigkeiten beseitigt, darunter 21 in Phase 109. |
| Fehlerdiagnose und langfristiger Lernstand | Bewertung einschließlich Leerantworten, Themenquoten, Sicherheit und Fehlerjournal. Neu: letzte Antwort jeder Aufgabe bleibt über 4000 Antworten hinaus erhalten; ältere nachträglich angefügte Ergebnisse verdrängen keine neueren Antworten. JSON-Sicherung tatsächlich geprüft. |
| Rechner, Sprache und Ablauf | Englische Fragen, Fachbegriffe und zweisprachiges Wörterbuch; BA-II-Plus-Schritte einschließlich Vorzeichen, Perioden und END/BGN; offizielle Rechnerregel und HP-12C-Referenz verlinkt. PSM wird als separate offizielle Pflicht erklärt. |
| Offline, Mobilansicht und Bedienung | Eingebettete Texte, Mathematik, Grafiken und Modelle; Offline- und Dateiöffnung, vier Bildschirmbreiten, Tastatur und Rücksprünge geprüft. Fehlerhafte oder gesperrte Speicherung bleibt mit Hinweis benutzbar. |

## Bewertung anhand der vorher festgelegten Gewichte

| Materialqualität | Punkte | Begründung und Abzug |
|---|---:|---|
| Fachliche Richtigkeit und Quellen | 23/25 | Primärquellen, aktueller Errata-Abgleich und separat formulierte numerische Gegenprüfungen. Kein bekannter wesentlicher offener Fehler; zwei Punkte Abzug für fehlende unabhängige externe Fachredaktion. |
| Erklärungstiefe und Didaktik | 23/25 | Intuition, Ableitungen, Vergleichsfälle, Anwendungen, Grenzen und Querverweise kapitelweise ausgearbeitet. Die abschließenden gezielten Lektüren zu Duration, Jensen/M², EPS, Regressionsintervallen und Kundenaufträgen bestätigen die dokumentierte Tiefe. Zwei Punkte Abzug für ungleichmäßige narrative Ausführlichkeit und weiterhin knappe Antworten bei manchen einfachen Begriffsfällen. |
| Formeln und Visualisierung | 14/15 | Gesetzte Formeln mit Symbolen; numerisch geprüfte Diagramme und Modelle. Lange Formeln und Tabellen erfordern auf schmalen Geräten teilweise seitliches Verschieben. |
| Bedienbarkeit und Zugänglichkeit | 14/15 | Klare Module, Lernzielzugänge, Suche, Begriffs-/Kapitelrücksprünge, Tastatur und dauerhafte Ergebnisse. Die große eingebettete Gesamtdatei belastet Erstladen und schwache Geräte; keine vollständige Prüfung mit allen Screenreadern. |
| Aufgaben und Rückmeldung | 16/20 | Breiter eigener Pool, Einzelbegründungen und vollständige Auswertungen. Abzug für teilweise einfache Distraktoren und methodisch ähnliche Trainingsfälle, nur zwei reservierte Klausuren und fehlende empirische Schwierigkeitsschätzung. |
| **Summe** | **90/100** | **Ziel der eigenen Materialbewertung erreicht.** |

| Eignung zur CFA-Level-I-Vorbereitung | Punkte | Begründung und Abzug |
|---|---:|---|
| Nachgewiesene Lernzielabdeckung | 28/30 | 340 einzeln erklärte, angewandte und geübte Lernziele; zusätzlich semantischer Abgleich der Beispielzugänge. Abzug, weil der öffentliche Outline keine vollständige unabhängige Übereinstimmungsprüfung mit dem gesamten lizenzierten Curriculum ersetzt. |
| Selbstständiges Prüfungstraining | 21/30 | Reservierte Klausuren, korrekte Zeiten/Gewichte, englische Aufgaben, neue gemischte Sets. Deutlicher Abzug für fehlende empirische Kalibrierung, begrenzte Zahl unberührter Vollklausuren und methodische Wiederholungen im Trainingspool. |
| Ethics und Rechnungslegungspräzision | 13/15 | Standardbezogene Fallunterschiede, überarbeitete reservierte Aufgaben, IFRS-/US-GAAP- und IFRS-18-Abgrenzung. Externe Expertenprüfung fehlt. |
| Diagnose und Wiederholung | 9/10 | Tatsächliche Treffer, Leerantworten, Themen, selbstsichere Fehler, geratene Treffer und kapitelbezogene Nacharbeit. Keine empirische Beherrschensschätzung einzelner Kompetenzen. |
| Prüfungsjahr, Sprache und Arbeitsweise | 11/15 | 2027-Outline/Errata, englische Fragen und BA-II-Plus-Praxis. Abzug für überwiegend deutsche Lehrtexte, keinen vollständigen HP-12C-Tastenkurs und begrenzte Prüfung englischer Lesegeschwindigkeit. |
| **Summe** | **82/100** | **Ziel der eigenen Eignungsbewertung erreicht.** |

## Aussagekraft der Fragenprüfung

Alle 360 reservierten Aufgaben wurden redaktionell durchgesehen. Das ist eine
Prüfung von Angabe, Antwortentscheidung und Distraktoren; nicht jede ältere
Lösungszeile wurde am letzten Tag erneut vollständig gelesen. Die ursprünglichen
Kapitelprüfungen und separat berechneten numerischen Kontrollen bleiben Teil
der Evidenz. Bei den 4118 Trainingsfragen wurden zusätzlich zu diesen Prüfungen
eine vorab festgelegte 20-Fragen-Stichprobe über alle zehn Themen sowie die
100 Kontextsuchtreffer gelesen. Die Stichprobe ist zu klein, um eine Fehlerquote
für alle Trainingsfragen zu schätzen.

Ein einfacher Zahlennormalisierungsvergleich findet 4117 Stem-Muster und ein
ähnliches Paar im Training. Dies ist **keine semantische Duplikatprüfung** und
kein Nachweis von 4117 unabhängigen Aufgabendesigns. Die Gesamtzahl bezeichnet
verfasste Aufgaben, keine Zahl unabhängiger Kompetenzen. Weder Themenzahlen noch
automatisch gesetzte Musterantworten beweisen Lernerfolg. Offizielle
[Übungs- und Mock-Ressourcen](https://www.cfainstitute.org/programs/cfa-program/candidate-resources/mock-exam-and-practice-questions)
bleiben ein sinnvoller externer Schwierigkeitsvergleich.

## Funktionsnachweise und verbleibende Grenzen

Der Speicherfehler wurde zuerst mit 4001 verschiedenen gültigen Antworten
reproduziert. Nach der Korrektur bleiben sämtliche 4478 letzten Aufgabenstände
erhalten; zusätzlich werden jüngste Wiederholungen begrenzt aufbewahrt.
Ein real gespeicherter großer Edge-Fall enthält 8477 Datensätze, rund 1,82 MB
JSON beziehungsweise 3,63 MB UTF-16. Ein zusätzlicher Belastungsfall wiederholt
4000-mal den längsten tatsächlichen reservierten Ergebnisdatensatz
(rm-exam-a1 mit vier Lernzielreferenzen): auch dessen rund 4,51 MB UTF-16
werden über eine echte Antwortaktion gespeichert; laufende Klausur, Training
und 30 frühere Klausurversuche bleiben nach Reload erhalten.
Eine tatsächlich erneut gelöste erste
Trainingsfrage schließt ihren alten Fehler; Reload und JSON-Export erhalten
alle 4001 verschiedenen Aufgaben. Verlorene Einträge aus älteren Versionen
können dadurch nicht nachträglich rekonstruiert werden.

Beide tatsächlichen Vollklausuren wurden erneut beantwortet und alle 360
Erklärungen im Browser geöffnet: absichtlich gesetzte Antworten liefern bei A
162/180 und 18 Fehlerjournalzeilen, bei B 180/180 und null Fehlerjournalzeilen.
Das prüft die Software, nicht die Schwierigkeit für einen Lernenden. Uhr,
Sitzungswechsel, Reload, Markierungen, Selbsteinschätzung und Aufgabentrennung
sind dabei geprüft. Für den abschließenden Freigabebuild bestehen **580
Kernprüfungen und 50 Browserfälle**: 45 Fälle des vollständigen CFA-Laufs,
zwei echte Vollklausuren, zwei Speicher-/Exportfälle und ein zusätzlicher
Belastungsfall mit den längsten reservierten Ergebniszeilen. Die 49 gemeinsam
ausgeführten Fälle benötigen 800,5 Sekunden; der zusätzliche Belastungsfall
8,6 Sekunden. Alle drei aktuellen Mobil-/Desktopansichten des Fehlerjournals
wurden gelesen. Vollständige Build-/Datenhashes und der genaue Prüfumfang stehen
im letzten Eintrag des Qualitätsplans. Zur Auslieferung gehört zusätzlich der
Abgleich des tatsächlich öffentlich geladenen vollständigen Artefakts mit
genau diesem geprüften Build.

Frühere Prüfungen bleiben ausdrücklich datiert: zuletzt 45 vollständige
CFA-Browserfälle in Phase 103 und 55 allgemeine/Portfolio-/Notations-/Modellfälle
in Phase 102. Alle 65 Modelle wurden dort über vier Breiten mit 260 Ansichten
geprüft. Seither änderte sich das Modellprogramm nicht; vollständige
Dateigleichheit wird beim Release kontrolliert. Neue Inhalte und Revisionen
erhielten eigene Mathematik-, Browser- und Sichtprüfungen, dokumentiert in den
Phasen 104–110. Es wird kein neuer vollständiger Modelltest behauptet.

Die Inhalte sind ein ausführliches eigenes Lern- und Nachschlagewerk. Die
Bewertung garantiert keine persönliche Prüfungsleistung und ersetzt weder
Anmeldung noch [offizielle praktische Pflichtmodule](https://www.cfainstitute.org/programs/cfa-program/candidate-resources/practical-skills-modules).
Der Quellenstand endet am angegebenen Datum. Spätere Curriculum-Korrekturen
müssen vor einer erneuten Freigabe abgeglichen werden.

## Einzelnachweise der 102 Lerneinheiten

Für jede Einheit verbindet die folgende Liste den bisherigen kapitelbezogenen
Arbeitsnachweis mit den konkreten fachlichen Gegenprüfungen. Die gemeinsame
Gesamtabnahme umfasst zusätzlich die oben dokumentierten Lernziel-, Errata-,
Fragen- und Funktionsprüfungen. Die vollständigen Fingerprints in acceptance.json
binden diese Entscheidung an genau den geprüften Inhalt und Fragenpool.
Die frühere Kapitelnotiz beschreibt die damalige Einzelarbeit; damalige Hinweise
auf eine noch offene Gesamtfreigabe sind als Historie erhalten und durch die
vorliegende datierte Gesamtabnahme ergänzt.

<a id="abs"></a>

### ABS und Kreditschutz

[Kapitel](finance-cfa/units/abs.cjs) · [fachliche Gegenprüfungen](tests/abs-analysis.test.cjs) · 4 Lernziele · 72 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-23: Eigene Anspruchs-, Schutz-, Zahlungs-, Test- und Abhängigkeitsfälle. Quellenabgleich und technische Gegenrechnungen ersetzen keine fachliche Gesamtabnahme.

<a id="alternative-fees"></a>

### Nettorendite und Gebührenwasserfall

[Kapitel](finance-cfa/units/alternative-fees.cjs) · [fachliche Gegenprüfungen](tests/alternative-fees-analysis.test.cjs) · 2 Lernziele · 60 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-25: Eigene Cashflow-, IRR- und Gebührenfälle. Exakte Vertragsannahmen sowie Grenzen von Bewertung und Vergleich offengelegt; unabhängige Numerik und fachliche Gesamtabnahme erforderlich.

<a id="alternative-structures"></a>

### Zugang zu alternativen Anlagen

[Kapitel](finance-cfa/units/alternative-structures.cjs) · [fachliche Gegenprüfungen](tests/alternative-structures-analysis.test.cjs) · 3 Lernziele · 60 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-25: Eigene Struktur-, Kosten- und Liquiditätsfälle; vertragliche Modellannahmen explizit. Unabhängige Numerik, technische Prüfung und fachliche Gesamtabnahme erforderlich.

<a id="analysis-framework"></a>

### Abschlüsse systematisch untersuchen

[Kapitel](finance-cfa/units/analysis-framework.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 5 Lernziele · 18 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-24: Eigene Entscheidungssituationen und Gegenrechnungen; Prüfungsurteil, wirtschaftliche Prognose und Datenverfügbarkeit getrennt.

<a id="balance-sheet"></a>

### Bilanzpositionen und Vergleichbarkeit

[Kapitel](finance-cfa/units/balance-sheet.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 5 Lernziele · 26 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-24: Ansatz, Bewertung, GuV/OCI, Cashflow und Kennzahlen anhand eigener abgestimmter Fälle getrennt; vereinfachte Beispiele nennen ihre Voraussetzungen.

<a id="behavioral"></a>

### Verhaltensfehler erkennen

[Kapitel](finance-cfa/units/behavioral.cjs) · [fachliche Gegenprüfungen](tests/behavioral-analysis.test.cjs) · 3 Lernziele · 48 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-26: Eigene kontrollierte Fälle unterscheiden Verzerrung, legitime Präferenz und wirtschaftliche Restriktion. Illustrative Markt- und Wertfunktionen sind keine empirisch geschätzten Preis- oder Kundenmodelle. Fachliche Gesamtfreigabe bleibt ausstehend.

<a id="benchmarks"></a>

### Performance und Indexrechnung

[Kapitel](finance-cfa/units/benchmarks.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 2 Lernziele · 12 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-17: Eigene kontrastierende Beispiele; MWR, Indexgewichte und Divisor werden unabhängig geprüft.

<a id="binomial"></a>

### Einperiodige Optionsreplikation

[Kapitel](finance-cfa/units/binomial.cjs) · [fachliche Gegenprüfungen](tests/binomial-analysis.test.cjs) · 2 Lernziele · 50 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-25: Eigene Einperiodenfälle mit vollständigen Replikations- und Hedgezahlungen; unabhängige Numerik, Technik und fachliche Gesamtabnahme erforderlich.

<a id="bond-cashflows"></a>

### Zahlungsstruktur und Vertragsoptionen

[Kapitel](finance-cfa/units/bond-cashflows.cjs) · [fachliche Gegenprüfungen](tests/bond-cashflow-analysis.test.cjs) · 2 Lernziele · 46 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-17: Eigene abgestimmte Tilgungs-, Options-, Währungs- und Steuerfälle; tatsächliche Produkt- und Rechtsquellen ausdrücklich begrenzt. Technische Kontrollen und eigene Gegenrechnungen ersetzen keinen fachlichen Gesamtaudit.

<a id="bond-features"></a>

### Anleihevertrag und Schutzrechte

[Kapitel](finance-cfa/units/bond-features.cjs) · [fachliche Gegenprüfungen](tests/bond-contract-analysis.test.cjs) · 2 Lernziele · 42 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-17: Eigene vollständige Zahlungs-, Mittelverwendungs-, Covenant- und Verteilungsfälle; individuelle Vertragsbedingungen ausdrücklich von allgemeinen Begriffen getrennt. Technische Kontrollen und eigene Gegenrechnungen ersetzen keinen fachlichen Gesamtaudit.

<a id="bond-prices"></a>

### Anleihepreise auf und zwischen Kuponterminen

[Kapitel](finance-cfa/units/bond-prices.cjs) · [fachliche Gegenprüfungen](tests/bond-prices-analysis.test.cjs) · 3 Lernziele · 50 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-17: Eigene Festzins-, Bruchteils-, Sensitivitäts- und Matrixfälle; Anspruchs-, Rendite- und Kalendergrenzen explizit. Fachlicher Gesamtaudit ausstehend.

<a id="bond-return"></a>

### Anlagehorizont und Anleiherendite

[Kapitel](finance-cfa/units/bond-return.cjs) · [fachliche Gegenprüfungen](tests/bond-return-analysis.test.cjs) · 3 Lernziele · 60 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-19: Eigene kontrastierende Horizont-, Kupon-, Nullkupon-, Frequenz- und Grenzfälle; vollständige fachliche Gesamtfreigabe bleibt ausstehend.

<a id="bond-trading"></a>

### Emission und Anleihemärkte

[Kapitel](finance-cfa/units/bond-trading.cjs) · [fachliche Gegenprüfungen](tests/bond-trading-analysis.test.cjs) · 3 Lernziele · 50 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-17: Eigene Markt-, Index-, Auktions- und Ausführungsfälle mit vollständiger Geld- und Renditeabstimmung. Konkrete Anbieter- und Marktregeln bleiben abgegrenzt. Technische Kontrollen und eigene Gegenrechnungen ersetzen keinen fachlichen Gesamtaudit.

<a id="business-models"></a>

### Wie Unternehmen Geld verdienen

[Kapitel](finance-cfa/units/business-models.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 2 Lernziele · 36 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-28: Eigene vergleichende Geschäftsmodell-, Beitrags-, Bindungs- und Kapitalfälle. Zusätzliche Kennzahlenherleitungen sind Vertiefungen der beschreibenden Lernziele; Gesamtaudit und fachliche Freigabe bleiben offen.

<a id="capital-allocation"></a>

### Investitionen auswählen

[Kapitel](finance-cfa/units/capital-allocation.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 4 Lernziele · 40 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-28: Eigene vollständige Investitions-, Methodenvergleichs-, Rationierungs- und Optionsfälle. Risikoneutrale Gewichte sind ausdrückliche Modellannahmen; keine empirische Kalibrierung. Gesamtaudit bleibt offen.

<a id="capital-structure"></a>

### Finanzierung und Kapitalkosten

[Kapitel](finance-cfa/units/capital-structure.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 4 Lernziele · 40 Trainingsfragen · 6 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-28: Eigene Herleitungen, Zahlungsreplikation und Szenarien für die vier Capital-Structure-Lernziele. Technische und numerische Kontrollen ersetzen keinen vollständigen fachlichen Freigabeaudit.

<a id="carry"></a>

### Arbitrage und Haltekosten

[Kapitel](finance-cfa/units/carry.cjs) · [fachliche Gegenprüfungen](tests/carry-analysis.test.cjs) · 2 Lernziele · 50 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-24: Eigene Replikationspfade, kontrollierte Preisvergleiche und Fragen; mathematische und Browsergegenprüfung ersetzen keine unabhängige fachliche Gesamtabnahme.

<a id="cashflow-analysis"></a>

### Cashflows analysieren

[Kapitel](finance-cfa/units/cashflow-analysis.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 2 Lernziele · 24 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-24: Eigene FCFF-/FCFE-Brücken mit expliziter Zinsklassifikation, Steuerannahme, Kapitalbindung und alternativen Gegenrechnungen.

<a id="cashflow-preparation"></a>

### Cashflowrechnung aufstellen

[Kapitel](finance-cfa/units/cashflow-preparation.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 4 Lernziele · 26 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-24: Vollständig abgestimmter eigener Drei-Rechenwerke-Fall; US-GAAP, bisherige IAS-7-Wahlrechte und IFRS-18-Anwendung ausdrücklich getrennt.

<a id="code"></a>

### Kodex, Standards und Durchsetzung

[Kapitel](finance-cfa/units/code.cjs) · [redaktionelle Fallprüfung](CFA-2027-QUESTION-AUDIT.md#ethics-befund-und-verbesserung) · 3 Lernziele · 12 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-17: Eigene Strukturübersicht und Fallunterscheidungen; 6 Kodexkomponenten, 7 Standards und 23 Unterstandards.

<a id="company"></a>

### Unternehmen und Werttreiber

[Kapitel](finance-cfa/units/company.cjs) · [fachliche Gegenprüfungen](tests/company-analysis.test.cjs) · 3 Lernziele · 48 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-16: Eigene Strategie-, Preis-, Mix-, Kosten-, Kapital- und Finanzierungsszenarien mit vollständigen Jahresbeständen. Technische und numerische Kontrollen ersetzen nicht die fachliche Gesamtabnahme.

<a id="convexity"></a>

### Konvexität und Portfoliorisiko

[Kapitel](finance-cfa/units/convexity.cjs) · [fachliche Gegenprüfungen](tests/convexity-analysis.test.cjs) · 3 Lernziele · 60 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-20: Eigene vollständige Rechenfälle, Quoten- und Portfoliovergleiche; gemeinsame Yieldrichtung, Zahlungsstreuung und Grenzen ausdrücklich getrennt. Fachliche Gesamtfreigabe bleibt ausstehend.

<a id="corporate-credit"></a>

### Unternehmensbonität prüfen

[Kapitel](finance-cfa/units/corporate-credit.cjs) · [fachliche Gegenprüfungen](tests/corporate-credit-analysis.test.cjs) · 3 Lernziele · 60 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-22: Eigene Cashüberleitungen, Quotendefinitionen, Schuldnerkreise und Verteilungsregeln. Fachliche Gesamtfreigabe und vollständige CFA-Abdeckung bleiben ausstehend.

<a id="corporate-funding"></a>

### Unternehmens- und Bankfinanzierung

[Kapitel](finance-cfa/units/corporate-funding.cjs) · [fachliche Gegenprüfungen](tests/corporate-funding-analysis.test.cjs) · 3 Lernziele · 50 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-17: Eigene Finanzierungs-, Cash-, Rollover-, Repo-, Sicherheiten- und Bonitätsvergleichsfälle. Explizite Tages-, Nenner- und Marginkonventionen; technische und numerische Kontrollen ersetzen keinen fachlichen Gesamtaudit.

<a id="credit-risk"></a>

### Kreditrisiko und Spreads

[Kapitel](finance-cfa/units/credit-risk.cjs) · [fachliche Gegenprüfungen](tests/credit-risk-analysis.test.cjs) · 3 Lernziele · 72 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-22: Eigene Zahlungs-, Zustands-, Konzentrations- und Spreadfälle. Quote und Geldverlust, physisches und Bewertungsmaß, Marktpreis und Ausfallverlust ausdrücklich getrennt. Fachliche Gesamtfreigabe bleibt ausstehend.

<a id="curve-risk"></a>

### Kurvenrisiken und empirische Sensitivität

[Kapitel](finance-cfa/units/curve-risk.cjs) · [fachliche Gegenprüfungen](tests/curve-risk-analysis.test.cjs) · 4 Lernziele · 72 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-20: Eigene kontrollierte Kurven-, Ausübungs- und Regressionsfälle. Risikorichtung, Optionen, endliche Schockbreite und beobachtete Begleitfaktoren getrennt; fachliche Gesamtfreigabe bleibt ausstehend.

<a id="cycles"></a>

### Konjunktur und Kreditzyklus

[Kapitel](finance-cfa/units/cycles.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 16 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-23: Eigene Beispiele für Wachstumsraten, Produktionslücke, Lagerbeiträge, Erwerbsbeteiligung und Bilanzabbau; konjunkturelle Muster als bedingte Mechanismen.

<a id="data-science"></a>

### Datenwissenschaft im Investmentprozess

[Kapitel](finance-cfa/units/data-science.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 1 Lernziele · 16 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-18: Eigene Datenpipeline-, Klassifikations- und Kostenbeispiele; finanzielle Zeitlogik, Leakage und Grenzen generativer Systeme ausdrücklich behandelt.

<a id="dcf-equity"></a>

### Cashflows und Wachstum bewerten

[Kapitel](finance-cfa/units/dcf-equity.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 4 Lernziele · 54 Trainingsfragen · 6 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-03: Eigene Cashflowbrücken, algebraische Herleitungen und kontrollierte Wachstum-, Residualgewinn- und Vorzugsfälle. Noch keine vollständige fachliche Gesamtabnahme.

<a id="derivative-contracts"></a>

### Verpflichtung und bedingter Anspruch

[Kapitel](finance-cfa/units/derivative-contracts.cjs) · [fachliche Gegenprüfungen](tests/derivative-contracts-analysis.test.cjs) · 3 Lernziele · 60 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-24: Eigene Zahlungs-, Options- und CDS-Fälle; mathematische und Browsergegenprüfungen ersetzen keine unabhängige fachliche Gesamtabnahme.

<a id="derivative-markets"></a>

### Derivate und Marktorganisation

[Kapitel](finance-cfa/units/derivative-markets.cjs) · [fachliche Gegenprüfungen](tests/derivative-markets-analysis.test.cjs) · 2 Lernziele · 40 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-24: Eigene Vertrags-, Zahlungs-, Netting- und Marginfälle. Numerische Gegenprüfungen und Browserkontrolle ersetzen keine fachliche Gesamtabnahme.

<a id="derivative-uses"></a>

### Derivate nutzen und Risiken beurteilen

[Kapitel](finance-cfa/units/derivative-uses.cjs) · [fachliche Gegenprüfungen](tests/derivative-uses-analysis.test.cjs) · 2 Lernziele · 50 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-24: Eigene Ziel-, Zahlungs-, Basis-, Mengen-, Währungs-, Beta- und Finanzierungsfälle. Numerische und technische Prüfungen ersetzen keine unabhängige fachliche Gesamtabnahme.

<a id="digital-assets"></a>

### Digitale Vermögenswerte

[Kapitel](finance-cfa/units/digital-assets.cjs) · [fachliche Gegenprüfungen](tests/digital-assets-analysis.test.cjs) · 4 Lernziele · 80 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-26: Eigene Register-, Anspruchs-, Reserve-, Mengen-, Produkt- und Portfoliorechnungen mit vollständigen Modellannahmen. Unabhängige Numerik und technische Prüfung ersetzen keine fachliche Gesamtabnahme.

<a id="distributions"></a>

### Zufall, Verteilungen und Bayes

[Kapitel](finance-cfa/units/distributions.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 4 Lernziele · 20 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-18: Eigene Szenariotabellen, bedingte Momente und Bayes-Fälle. Gemeinsame und bedingte Verteilungen sowie Logparameter ausdrücklich getrennt.

<a id="duration"></a>

### Zinssensitivität und DV01

[Kapitel](finance-cfa/units/duration.cjs) · [fachliche Gegenprüfungen](tests/duration-analysis.test.cjs) · 2 Lernziele · 52 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-19: Eigene Ableitungs-, Positions- und Einheitenvergleiche; nicht monotone Discountbondfälle, negative Yields und Konventionswechsel ausdrücklich getrennt. Fachliche Gesamtfreigabe bleibt ausstehend.

<a id="equity-factors"></a>

### Eigenkapitalrendite und Faktoren

[Kapitel](finance-cfa/units/equity-factors.cjs) · [fachliche Gegenprüfungen](tests/equity-factor-analysis.test.cjs) · 2 Lernziele · 44 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-16: Eigene kontrollierte Risiko-, Regressions-, Bewertungs- und Faktorbeispiele. Zahlen, Grafiken und Modellverbindungen wurden technisch und durch unabhängige Gegenrechnungen geprüft. Der fachliche Gesamtaudit bleibt offen.

<a id="equity-features"></a>

### Aktien als Eigentumsansprüche

[Kapitel](finance-cfa/units/equity-features.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 2 Lernziele · 32 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-29: Eigenständige Vertrags-, Zahlungsrang- und Liquiditätsfälle mit offen gelegten Annahmen. Beschreibende Lernziele durch zusätzliche Rechenbeispiele vertieft; Gesamtaudit bleibt offen.

<a id="equity-returns"></a>

### Ausschüttungen und Gesamtrendite

[Kapitel](finance-cfa/units/equity-returns.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 40 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-30: Eigene Vermögenskonten, kontrollierte Rückkauf- und Wiederanlagevergleiche sowie abgegrenzte US-Terminregeln. Fachlicher Gesamtaudit und vollständige Prüfungsvorbereitung bleiben offen.

<a id="equity-trading"></a>

### Emission, Handel und Liquidität

[Kapitel](finance-cfa/units/equity-trading.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 4 Lernziele · 40 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-29: Eigene zusammenhängende Emissions-, Orderbuch-, Float-, Volumen- und Indexfälle. Zusätzliche Rechnungen vertiefen die überwiegend beschreibenden Lernziele. Fachlicher Gesamtaudit bleibt offen.

<a id="ethics-cases"></a>

### Mehrere Standards im selben Fall

[Kapitel](finance-cfa/units/ethics-cases.cjs) · [redaktionelle Fallprüfung](CFA-2027-QUESTION-AUDIT.md#ethics-befund-und-verbesserung) · 2 Lernziele · 12 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-17: Ausschließlich eigene kombinierte Fälle und Ein-Tatsachen-Gegenproben; keine offiziellen Prüfungsaufgaben.

<a id="ethics-foundations"></a>

### Vertrauen und professionelles Urteil

[Kapitel](finance-cfa/units/ethics-foundations.cjs) · [redaktionelle Fallprüfung](CFA-2027-QUESTION-AUDIT.md#ethics-befund-und-verbesserung) · 8 Lernziele · 14 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-17: Eigene Erklärungsfälle; grundlegende Konzepte mit dem 2027-Lernzielkatalog abgeglichen.

<a id="fiscal"></a>

### Fiskalpolitik beurteilen

[Kapitel](finance-cfa/units/fiscal.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 4 Lernziele · 20 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-23: Eigene Fiskalmultiplikator- und Schuldenrekursionen; Modellannahmen, Saldenkonventionen und die Grenzen einer mechanischen Politikbeurteilung ausdrücklich ausgewiesen.

<a id="fixed-yields"></a>

### Renditekonventionen und Spreads

[Kapitel](finance-cfa/units/fixed-yields.cjs) · [fachliche Gegenprüfungen](tests/fixed-yields-analysis.test.cjs) · 2 Lernziele · 54 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-18: Eigene Rendite-, Call-, Benchmark-, Z- und begrenzte Optionsmodellfälle. Anspruch, Frequenz, Maßeinheiten und Modellvorgaben explizit; vollständiger fachlicher Gesamtaudit ausstehend.

<a id="floating-yields"></a>

### Floater und Geldmarktrenditen

[Kapitel](finance-cfa/units/floating-yields.cjs) · [fachliche Gegenprüfungen](tests/floating-yields-analysis.test.cjs) · 2 Lernziele · 52 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-18: Eigene Floater- und Geldmarktfälle mit expliziten Zeit-, Tages- und Flachkurvenannahmen; Treasury-Sonderkonvention ergänzend gekennzeichnet. Fachliche Gesamtfreigabe ausstehend.

<a id="forecasting"></a>

### Integriertes Abschlussmodell

[Kapitel](finance-cfa/units/forecasting.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 5 Lernziele · 32 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-25: Eigener vollständiger Atlas-Prognosefall mit direkter Zahlungsgegenrechnung, ausgeglichener Bilanz, Finanzierungsschwelle, Zinszirkularität und langfristiger Reinvestition.

<a id="forward-value"></a>

### Forwardpreis und Vertragswert

[Kapitel](finance-cfa/units/forward-value.cjs) · [fachliche Gegenprüfungen](tests/forward-value-analysis.test.cjs) · 2 Lernziele · 50 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-24: Eigene Preis-, Kurven- und Cashfallrechnungen mit getrennten Annahmen; mathematische und Browsergegenprüfung ersetzen keine unabhängige fachliche Gesamtabnahme.

<a id="futures"></a>

### Futures und täglicher Ausgleich

[Kapitel](finance-cfa/units/futures.cjs) · [fachliche Gegenprüfungen](tests/futures-analysis.test.cjs) · 2 Lernziele · 50 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-25: Eigene Cash-, Zustands- und Quotenumrechnungen; zusätzliche Zwei-Zustände-Herleitung als Vertiefung. Mathematische und Browserprüfung ersetzen keine unabhängige fachliche Gesamtabnahme.

<a id="fx-calculation"></a>

### Kreuzkurse und Terminkurse

[Kapitel](finance-cfa/units/fx-calculation.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 2 Lernziele · 24 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-24: Eigene Einheiten-, Geld-Brief-, Zahlungsstrom- und Zinskonventionsbeispiele; gedeckte Preisrelation ausdrücklich von Kassakursprognose getrennt.

<a id="fx-markets"></a>

### Währungen und Kapitalverkehr

[Kapitel](finance-cfa/units/fx-markets.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 20 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-24: Notierungsrichtung, reale Preisrelationen und Mengenreaktionen ausdrücklich definiert; eigene Umrechnungs-, Handelsbilanz- und Fremdwährungsbilanzfälle.

<a id="geopolitics"></a>

### Geopolitik für Anlageentscheidungen

[Kapitel](finance-cfa/units/geopolitics.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 6 Lernziele · 18 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-24: Eigenständige Lieferketten-, Szenario- und Vorsorgefälle; Typologien als Analysehilfen, Wahrscheinlichkeiten ausdrücklich hypothetisch.

<a id="governance"></a>

### Unternehmensführung und Kontrolle

[Kapitel](finance-cfa/units/governance.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 32 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-26: Eigene Konflikt-, Vergütungs-, Minderheiten-, Wahl- und Kontrollrechnungen. Governancefunktion wird von formaler Struktur und rechtlich unterschiedlichen Anforderungen getrennt. Fachlicher Gesamtaudit bleibt offen.

<a id="government-funding"></a>

### Finanzierung öffentlicher Emittenten

[Kapitel](finance-cfa/units/government-funding.cjs) · [fachliche Gegenprüfungen](tests/government-funding-analysis.test.cjs) · 2 Lernziele · 46 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-17: Eigene Haushalts-, Finanzierungs-, Projekt-, Garantie-, Auktions- und Handelsfälle; konkrete Rechtsräume, Dokumentdaten, Mengenkonventionen und Zahlungsregeln ausdrücklich begrenzt. Technische Kontrollen ersetzen keinen fachlichen Gesamtaudit.

<a id="hedge-funds"></a>

### Hedgefonds verstehen

[Kapitel](finance-cfa/units/hedge-funds.cjs) · [fachliche Gegenprüfungen](tests/hedge-funds-analysis.test.cjs) · 3 Lernziele · 60 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-25: Eigene Positions-, Short-Cash-, Deal-, Gebühren- und Portfoliorechnungen mit ausdrücklich bezeichneten Annahmen. Unabhängige Numerik und technische Prüfung ersetzen keine fachliche Gesamtabnahme.

<a id="income-statement"></a>

### Erfolg, Abgrenzung und EPS

[Kapitel](finance-cfa/units/income-statement.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 5 Lernziele · 34 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung: Rechenfälle werden unabhängig getestet; fachliche Abschlussprüfung noch offen.

<a id="income-taxes"></a>

### Steueraufwand und latente Steuern

[Kapitel](finance-cfa/units/income-taxes.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 4 Lernziele · 28 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-24: Eigene mehrperiodige Abschreibungs- und Garantiefälle sowie vollständige Steuerquotenüberleitung. Gewinn, Steuerbasis, Aufwand, Zahlung, Ansatz und Saldierung werden getrennt.

<a id="industry"></a>

### Branche und Wettbewerb

[Kapitel](finance-cfa/units/industry.cjs) · [fachliche Gegenprüfungen](tests/industry-analysis.test.cjs) · 4 Lernziele · 48 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-06: Eigene Markt-, Anteils-, Margen-, Wettbewerbs- und Wertfälle; ergänzende Mathematik als Vertiefung. Technische und numerische Prüfungen ersetzen nicht die fachliche Gesamtabnahme.

<a id="inference"></a>

### Schätzen und Hypothesen prüfen

[Kapitel](finance-cfa/units/inference.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 28 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-18: Eigene vollständige Testbeispiele und bewusste Gegenvergleiche. Parametrische, gepaarte, rangbasierte und kategoriale Fragestellungen getrennt.

<a id="inventory"></a>

### Vorräte bewerten und vergleichen

[Kapitel](finance-cfa/units/inventory.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 24 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-24: Eigene Schicht-, Mengen- und Mehrperiodenfälle trennen Kostenmethode, Steuerannahme, Abwertung und tatsächliche Zahlungen.

<a id="investment-process"></a>

### Anleger und Investmentprozess

[Kapitel](finance-cfa/units/investment-process.cjs) · [fachliche Gegenprüfungen](tests/investment-process-analysis.test.cjs) · 6 Lernziele · 72 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-26: Eigene Fälle mit expliziten Zahlungs- und Gebührenkonventionen. Wirtschaftliche Grundmodelle werden von landes- und vertragsabhängigen Einzelregeln getrennt. Fachliche Gesamtfreigabe bleibt ausstehend.

<a id="ips"></a>

### Anlagepolitik und Portfoliokonstruktion

[Kapitel](finance-cfa/units/ips.cjs) · [fachliche Gegenprüfungen](tests/ips-analysis.test.cjs) · 8 Lernziele · 96 Trainingsfragen · 8 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-26: Eigene integrierte Ziel- und Zahlungsfälle mit ausdrücklich genannten Konventionen. Rechtliche und steuerliche Mechanismen werden von nationalen Einzelvorschriften getrennt. Fachliche Gesamtfreigabe bleibt ausstehend.

<a id="issuer-forms"></a>

### Unternehmensformen und Eigentum

[Kapitel](finance-cfa/units/issuer-forms.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 26 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-26: Eigene Fälle zu Haftung, mehrstufiger Steuer, Stimmrechten, fairer und unterbewerteter Ausgabe, IPO-Cash und Erwerbshebel. Globale Grundbegriffe werden von konkreten Rechts- und Steuerregeln getrennt. Numerische Gegenprüfungen und vollständiger Trainingsdurchlauf vorhanden; fachlicher Gesamtaudit bleibt offen.

<a id="leases-compensation"></a>

### Leasing, Pensionen und Vergütung

[Kapitel](finance-cfa/units/leases-compensation.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 12 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-17: Eigene Beispiele; Regelstand und IFRS-18-Abgrenzung explizit. Zahlen und Fragen werden separat geprüft.

<a id="long-assets"></a>

### Langfristige Vermögenswerte

[Kapitel](finance-cfa/units/long-assets.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 24 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-24: Eigene Abschreibungs-, Werthaltigkeits-, Zuschreibungs- und Abgangsfälle samt vollständigem Anlagenspiegel. Unterschiedliche Testebenen und Bewertungsmodelle werden getrennt.

<a id="market-structures"></a>

### Kosten, Wettbewerb und Marktmacht

[Kapitel](finance-cfa/units/market-structures.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 5 Lernziele · 24 Trainingsfragen · 6 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-23: Eigene Kosten-, Nachfrage-, Tangential- und Spielbeispiele; Kurz-/Langfrist, Kostenbegriffe und Konkurrenzmodelle ausdrücklich getrennt.

<a id="mbs"></a>

### Hypotheken und vorzeitige Tilgung

[Kapitel](finance-cfa/units/mbs.cjs) · [fachliche Gegenprüfungen](tests/mbs-analysis.test.cjs) · 4 Lernziele · 80 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-24: Eigene Hypotheken-, Prepayment-, Zeittranchierungs- und CMBS-Fälle; unabhängige Rechenprüfungen und Browserkontrolle ergänzen, aber ersetzen keine fachliche Gesamtabnahme.

<a id="monetary"></a>

### Geldpolitik und Transmission

[Kapitel](finance-cfa/units/monetary.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 4 Lernziele · 20 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-23: Eigene Realzins-, Bilanz-, Nachfrage-/Angebots- und Politikmixbeispiele; nominale und reale Größen sowie statische Identität und kausale Annahme getrennt.

<a id="multiples"></a>

### Relative Bewertung

[Kapitel](finance-cfa/units/multiples.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 4 Lernziele · 48 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-03: Eigene Gewinn-, Anspruchs-, Kapital- und Periodenfälle sowie vollständig erläuterte fundamentale Herleitungen. Unabhängige technische Gegenprüfungen ersetzen nicht die spätere fachliche Gesamtabnahme.

<a id="option-values"></a>

### Optionen bewerten und vergleichen

[Kapitel](finance-cfa/units/option-values.cjs) · [fachliche Gegenprüfungen](tests/option-values-analysis.test.cjs) · 3 Lernziele · 60 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-25: Eigene Preis-, Replikations- und Grenzfälle; unabhängige mathematische und technische Gegenprüfung sowie fachliche Gesamtabnahme erforderlich.

<a id="parity"></a>

### Put-Call-Parität und synthetische Positionen

[Kapitel](finance-cfa/units/parity.cjs) · [fachliche Gegenprüfungen](tests/parity-analysis.test.cjs) · 2 Lernziele · 50 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-25: Eigene zustandsweise Replikation und Kosten-/Ertragsfälle; mathematische und technische Gegenprüfung sowie fachliche Gesamtabnahme erforderlich.

<a id="portfolio-math"></a>

### Portfoliorechnung und optimale Mischung

[Kapitel](finance-cfa/units/portfolio-math.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 20 Trainingsfragen · 6 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-18: Eigene Herleitungen und Parametervergleiche mit drei berechneten Abbildungen; vollständige Gewichts-, Risiko- und Zinsannahmen.

<a id="portfolio-pricing"></a>

### Risiko, CAPM und Performancemaße

[Kapitel](finance-cfa/units/portfolio-pricing.cjs) · [fachliche Gegenprüfungen](tests/portfolio-pricing-analysis.test.cjs) · 9 Lernziele · 108 Trainingsfragen · 12 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-26: Eigene konsistente Risiko- und Performancevergleiche, ausdrücklich getrennte erwartete und historische Größen. CAPM-Theorie und historische Regressionsherleitungen werden aus dem Grundlagenkapitel kopiert und unter den Portfolio-Lernzielen vertieft; keine Mutation des dortigen Inhalts. Fachliche Gesamtabnahme bleibt ausstehend.

<a id="portfolio-risk"></a>

### Portfolioauswahl und Diversifikation

[Kapitel](finance-cfa/units/portfolio-risk.cjs) · [fachliche Gegenprüfungen](tests/portfolio-risk-analysis.test.cjs) · 7 Lernziele · 84 Trainingsfragen · 8 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-26: Eigene historische Daten, vollständige Rechenwege, explizite Zulässigkeitsgrenzen und Präferenzkonventionen. Die Herleitungen der Zweianlagenrechnung werden mit dem Grundlagenkapitel gemeinsam gepflegt; technische Prüfungen sind keine abgeschlossene externe Fachabnahme.

<a id="private-capital"></a>

### Privates Eigen- und Fremdkapital

[Kapitel](finance-cfa/units/private-capital.cjs) · [fachliche Gegenprüfungen](tests/private-capital-analysis.test.cjs) · 3 Lernziele · 60 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-25: Eigene Finanzierungs-, Kredit- und Diversifikationsfälle mit ausdrücklichen Vertragsannahmen. Unabhängige Numerik, technische Prüfung und fachliche Gesamtabnahme erforderlich.

<a id="ratios"></a>

### Kennzahlen als zusammenhängendes System

[Kapitel](finance-cfa/units/ratios.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 6 Lernziele · 32 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-25: Renditebasen, Branchenfälle, Prognosekonventionen und schrittweise DuPont-Brücke erweitert; Rechenfälle werden unabhängig getestet. Fachlicher Gesamtaudit bleibt offen.

<a id="real-assets"></a>

### Immobilien und Infrastruktur

[Kapitel](finance-cfa/units/real-assets.cjs) · [fachliche Gegenprüfungen](tests/real-assets-analysis.test.cjs) · 4 Lernziele · 80 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-25: Eigene Objekt-, DCF-, Konzessions- und Projektfälle mit ausdrücklichen Zahlungs- und Vertragsannahmen. Unabhängige numerische und technische Prüfung sowie fachliche Gesamtabnahme erforderlich.

<a id="regression"></a>

### Regression für Finanzfragen

[Kapitel](finance-cfa/units/regression.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 4 Lernziele · 24 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-18: Zusammenhängendes eigenes Rechenbeispiel von OLS bis CAPM; Nenner, Annahmen, Einheiten und Prognoseziele ausdrücklich getrennt.

<a id="reporting-quality"></a>

### Bilanzierungsqualität erkennen

[Kapitel](finance-cfa/units/reporting-quality.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 8 Lernziele · 32 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-25: Eigene mehrperiodige Korrektur-, Reserve-, Cashflow- und Produktionsfälle. Berichtsqualität, Ergebnisqualität, Regelverstoß und Prognosebereinigung bleiben getrennt.

<a id="research"></a>

### Research verständlich begründen

[Kapitel](finance-cfa/units/research.cjs) · [fachliche Gegenprüfungen](tests/research-analysis.test.cjs) · 3 Lernziele · 40 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-16: Eigene Berichtsfälle und nachvollziehbare Annahmenbrücken; Modellbereiche, Zielhorizonte und Empfängerkontext getrennt. Technische Gegenprüfung ersetzt nicht die fachliche Gesamtabnahme.

<a id="resources"></a>

### Land, Wald und Rohstoffe

[Kapitel](finance-cfa/units/resources.cjs) · [fachliche Gegenprüfungen](tests/resources-analysis.test.cjs) · 3 Lernziele · 60 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-25: Eigene Flächen-, Ernte-, Carry- und datierte Futures-Cashfälle. Natur-, Preis-, Kosten-, Anspruchs- und Liquiditätstreiber getrennt. Unabhängige Numerik, technische Prüfung und fachliche Gesamtabnahme erforderlich.

<a id="return-statistics"></a>

### Renditeverteilungen beschreiben

[Kapitel](finance-cfa/units/return-statistics.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 4 Lernziele · 22 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-18: Eigene Datensätze; explizite Einheiten, Nenner und Quantilkonventionen. Gleichverteilte Momente und Mischungsgrafik getrennt berechnet.

<a id="return-types"></a>

### Renditekonventionen sicher umrechnen

[Kapitel](finance-cfa/units/return-types.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 1 Lernziele · 16 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-18: Explizite Zeit-, Gebühren-, Steuer- und Währungskonventionen; eigene kontrollierte Vergleiche.

<a id="returns"></a>

### Rendite und Renditeforderung

[Kapitel](finance-cfa/units/returns.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 2 Lernziele · 12 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-18: Eigene Beispiele mit getrennten Erwartungs-, Vertrags- und Realgrößen; Fisher-Umrechnung und Prämiengrenzen ausdrücklich erläutert.

<a id="risk-management"></a>

### Risiken steuern

[Kapitel](finance-cfa/units/risk-management.cjs) · [fachliche Gegenprüfungen](tests/risk-management-analysis.test.cjs) · 7 Lernziele · 84 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-26: Eigene Fälle definieren Horizont, Einheit, Vertrag, Wahrscheinlichkeit und verfügbare Finanzierung. Risikomaße, Governance und Zahlungsfähigkeit sind getrennt erläutert. Gesamtfreigabe und vollständiger Abgleich aller Curriculum-Errata bleiben ausstehend.

<a id="securitization"></a>

### Forderungen verbriefen

[Kapitel](finance-cfa/units/securitization.cjs) · [fachliche Gegenprüfungen](tests/securitization-analysis.test.cjs) · 2 Lernziele · 60 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-23: Eigene Konten-, Zahlungs-, Verlust- und bedingte Bilanzfälle. Einzelprüfung und technische Gegenrechnungen ersetzen keine fachliche Gesamtabnahme.

<a id="simulation"></a>

### Simulation richtig einsetzen

[Kapitel](finance-cfa/units/simulation.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 18 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-18: Eigene historische Szenarien, vollständig aufzählbarer Bootstrap und analytische GBM-/Korrelationskontrollen. Quantilkonvention und Simulationsgrenzen explizit.

<a id="sovereign-credit"></a>

### Bonität öffentlicher Schuldner

[Kapitel](finance-cfa/units/sovereign-credit.cjs) · [fachliche Gegenprüfungen](tests/sovereign-credit-analysis.test.cjs) · 1 Lernziele · 64 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-22: Eigene abgegrenzte Bestands-, Währungs-, Finanzierungs- und Projektfälle; Umsetzbarkeit, Zugriff, Zahlungszeit und Konsolidierung getrennt. Fachliche Gesamtfreigabe bleibt ausstehend.

<a id="stakeholders"></a>

### Ansprüche und Interessengruppen

[Kapitel](finance-cfa/units/stakeholders.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 32 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-26: Eigene Rechenfälle zu Rangfolge, Ausfall, Risikoübertragung, Unterinvestition und finanziellen ESG-Wirkungen. Endauszahlungen und heutige Marktpreise werden getrennt; alle Bewertungsannahmen und Symbolbedeutungen sind ausdrücklich angegeben. Abschließender fachlicher Gesamtaudit bleibt offen.

<a id="standard-i"></a>

### Standard I: Professionalität

[Kapitel](finance-cfa/units/standard-i.cjs) · [redaktionelle Fallprüfung](CFA-2027-QUESTION-AUDIT.md#ethics-befund-und-verbesserung) · 3 Lernziele · 12 Trainingsfragen · 6 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-17: Eigene Fallbeispiele; aktueller Kompetenzstandard und beruflicher Anwendungsbereich ausdrücklich berücksichtigt.

<a id="standard-ii"></a>

### Standard II: Kapitalmarktintegrität

[Kapitel](finance-cfa/units/standard-ii.cjs) · [redaktionelle Fallprüfung](CFA-2027-QUESTION-AUDIT.md#ethics-befund-und-verbesserung) · 3 Lernziele · 12 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-17: Eigene Fälle; Materialität, Öffentlichkeit, Mosaik und manipulative Absicht getrennt.

<a id="standard-iii"></a>

### Standard III: Kundenpflichten

[Kapitel](finance-cfa/units/standard-iii.cjs) · [redaktionelle Fallprüfung](CFA-2027-QUESTION-AUDIT.md#ethics-befund-und-verbesserung) · 3 Lernziele · 16 Trainingsfragen · 8 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-17: Eigene Fallpaare, getrennte Kundenpflichten und explizite Rechenschritte; abschließende Fachprüfung offen.

<a id="standard-iv"></a>

### Standard IV: Arbeitgeberpflichten

[Kapitel](finance-cfa/units/standard-iv.cjs) · [redaktionelle Fallprüfung](CFA-2027-QUESTION-AUDIT.md#ethics-befund-und-verbesserung) · 3 Lernziele · 12 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-17: Eigene Fälle; vorherige schriftliche Zustimmung und Grenzen der Arbeitgeberloyalität präzisiert.

<a id="standard-v"></a>

### Standard V: Analyse und Kommunikation

[Kapitel](finance-cfa/units/standard-v.cjs) · [redaktionelle Fallprüfung](CFA-2027-QUESTION-AUDIT.md#ethics-befund-und-verbesserung) · 3 Lernziele · 12 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-17: Eigene Fälle; Kosteninformation und bedingte Siebenjahresempfehlung ausdrücklich abgegrenzt.

<a id="standard-vi"></a>

### Standard VI: Interessenkonflikte

[Kapitel](finance-cfa/units/standard-vi.cjs) · [redaktionelle Fallprüfung](CFA-2027-QUESTION-AUDIT.md#ethics-befund-und-verbesserung) · 3 Lernziele · 12 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-17: Konflikt, Priorität und Vermittlung getrennt; eigene Anwendungsfälle und Kontrollvergleiche.

<a id="standard-vii"></a>

### Standard VII: CFA-Mitglieder und Kandidaten

[Kapitel](finance-cfa/units/standard-vii.cjs) · [redaktionelle Fallprüfung](CFA-2027-QUESTION-AUDIT.md#ethics-befund-und-verbesserung) · 2 Lernziele · 12 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-17: Eigene Fallpaare zu Prüfungsvertraulichkeit, Status und Ergebnisversprechen.

<a id="swaps"></a>

### Swaps als Zahlungsreihen

[Kapitel](finance-cfa/units/swaps.cjs) · [fachliche Gegenprüfungen](tests/swaps-analysis.test.cjs) · 2 Lernziele · 50 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-25: Eigene Perioden-, Barwert-, Fixing- und Hedgefälle; weiterführende Formeln sind als Verständnisvertiefung abgegrenzt. Unabhängige Rechen- und Browserprüfung sowie fachliche Gesamtabnahme bleiben erforderlich.

<a id="trade"></a>

### Handel und Handelshemmnisse

[Kapitel](finance-cfa/units/trade.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 22 Trainingsfragen · 2 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-24: Eigene vollständig abgestimmte Handels-, Zoll-, Quoten- und Subventionsrechnungen; partielle nationale Wohlfahrt von Verteilung und umfassender Politikbewertung getrennt.

<a id="tvm"></a>

### Zahlungsströme bewerten

[Kapitel](finance-cfa/units/tvm.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 20 Trainingsfragen · 6 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-18: Eigene Herleitungen von Barwerten, Replikation, Forward- und Optionswerten; konkrete Rechnerkonventionen.

<a id="valuation-model"></a>

### Vom Abschlussmodell zum Aktienwert

[Kapitel](finance-cfa/units/valuation-model.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 40 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-06: Eigene integrierte Jahres- und Endphasenfälle, explizite marginale Kapitalrendite und Anspruchspolitik; Gegenprüfungen ersetzen nicht die abschließende fachliche Gesamtabnahme.

<a id="valuation-overview"></a>

### Preis und fundamentaler Wert

[Kapitel](finance-cfa/units/valuation-overview.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 40 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-03: Eigene abgestimmte Anspruchsbrücken, Buchwert-, Verwertungs- und Sensitivitätsfälle. Ergänzende Herleitungen ersetzen nicht die spätere vollständige fachliche Abnahme.

<a id="voting"></a>

### Stimmrechte und Abstimmung

[Kapitel](finance-cfa/units/voting.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 2 Lernziele · 32 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-29: Eigene Rechte-, Quorums-, Mehrheits- und Wahlfälle. Nationale Beispiele eng abgegrenzt; zusätzliche mathematische Herleitungen dienen der Intuition der beschreibenden Lernziele. Fachlicher Gesamtaudit bleibt offen.

<a id="working-capital"></a>

### Betriebskapital und Zahlungsfähigkeit

[Kapitel](finance-cfa/units/working-capital.cjs) · [fachliche Gegenprüfungen](tests/cfa-content.test.cjs) · 3 Lernziele · 32 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-09-27: Eigene Zeitachsen-, Tagesbasis-, Liquiditäts-, Finanzierungs- und Politikfälle mit ausdrücklichen Modellgrenzen. 2027-Lernzielzuordnung; fachlicher Gesamtaudit und vollständige Kursfreigabe bleiben offen.

<a id="yield-curves"></a>

### Spot-, Par- und Forwardkurven

[Kapitel](finance-cfa/units/yield-curves.cjs) · [fachliche Gegenprüfungen](tests/yield-curves-analysis.test.cjs) · 3 Lernziele · 60 Trainingsfragen · 4 reservierte Fragen.

Bisherige Kapitelprüfung vom 2026-10-19: Eigene Einzelzahlungs-, Par-, Bootstrap-, Replikations- und Kurvenformfälle. Endliche/stetige Quoten und negative Grenzfälle ausdrücklich getrennt; fachliche Gesamtfreigabe bleibt ausstehend.
