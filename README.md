# Studio · Statistik & Finance

Ein lokal und offline nutzbarer Lernbereich im gemeinsamen Kelly-Studio-Design.

- **Statistik → Stochastik-Studio:** 33 interaktive Kapitel von Wahrscheinlichkeit bis Regression und stochastischen Prozessen.
- **Finance → Finance Studio:** 171 Kapitel in 16 Themenblöcken. Alle Kapitel enthalten zusätzliche Herleitungen oder begründete Fallanalysen, gezielte Vergleiche, Anwendungen, Grenzen, Querverweise, Kontrollfragen und CFA-Levelhinweise.
- **Vertiefungen:** 361 zusätzliche Erklärabschnitte, 175 Vergleichstabellen, insgesamt 519 erläuterte Lösungsschritte, 740 Kapitelverbindungen und neun Erklärungsgrafiken. Wichtige Zusammenhänge wie Duration, Cashflowbewertung, CAPM und Optionsreplikation erhalten mehrere aufeinander aufbauende Herleitungen.
- **Mathematische Notation:** 156 zentrale mathematische Formeltafeln, 219 Formeltafeln in Herleitungen und 383 numerische Lösungsschritte werden ausdrücklich in LaTeX verfasst und als MathML eingebettet. Auch Formeln in Vergleichstabellen und alle neun Kelly-Formeltafeln sind gesetzt. Qualitative Entscheidungsfragen werden als Prosa dargestellt. Es gibt keine automatische Umwandlung von Wörtern in vermeintliche Gleichungen.
- **Fachwörterbuch:** 490 alphabetisch sortierte Definitionen mit 1.047 Begriffen und Aliasen; automatische Verlinkung aus den Lerntexten und Rückverweise auf erklärende Kapitel.
- **Kelly Studio:** Einzelpositionen, Szenarien, Portfoliooptimierung, Simulation und Herleitung. Der Zustand bleibt beim Modulwechsel erhalten.

## Öffnen

[index.html](index.html) direkt im Browser öffnen; `kelly-studio.html` muss daneben liegen. Inhalte, Styles, Formeln und Modelle sind eingebettet. Nur externe Quellenlinks benötigen Internet.

Alternativ `node .server.js` starten und [Finance Studio](http://127.0.0.1:8477/#finance) öffnen. Direkte Einstiege:

- [Duration: Herleitungen und Vergleiche](http://127.0.0.1:8477/#lesson-bonds-08~derivations)
- [Duration-Rechner](http://127.0.0.1:8477/#lesson-bonds-08~lab)
- [Alpha und Beta](http://127.0.0.1:8477/#lesson-portfolio-04~derivations)
- [Fachwörterbuch](http://127.0.0.1:8477/#glossary)

Kapiteladressen verwenden `#lesson-<id>`. Abschnittsverweise sind beispielsweise `~explanation`, `~formula`, `~derivations`, `~derivation-2`, `~comparison-0`, `~example` oder `~lab`. Browser-Zurück/Vorwärts und Tastaturfokus werden unterstützt. Der lokale Server liefert ausschließlich die beiden App-Dokumente aus.

## Modelle und Lernumfang

34 interaktive Modelle werden in 58 Kapiteln eingesetzt. Der Anleihenrechner zeigt Preis, Macaulay und Modified Duration, DV01, Konvexität und den Vergleich zwischen exaktem Zinsschock, linearer und quadratischer Näherung. Kupon, Rendite, Laufzeit, Zahlungsfrequenz und Schock lassen sich getrennt verändern. Alle Modelle nennen ihre Annahmen und Einheiten.

Die CFA-Einordnung bezieht sich auf **2026**. Kapitel verbinden Grundlagen und Vertiefungen über mehrere Levels; die drei Level-III-Wahlpfade sind Alternativen. Das eigenständige Lehrmaterial folgt der vereinbarten Themenübersicht und bildet nicht jedes offizielle Learning Outcome oder Pflichtmodul vollständig ab. Für eine konkrete Prüfung ist deren jahresspezifisches Curriculum maßgeblich. Quellen zu CFA Institute, OpenStax, IFRS und den NYU-Lehrmaterialien sind im Lernbereich verlinkt.

## Bearbeiten und bauen

- `finance-outline.json`: Themenstruktur und Titel.
- `finance-content/` und `finance-textbook/`: Grundtexte, erklärte Beispiele, Anwendungen und Grenzen.
- `finance-deep/`: individuelle Herleitungen und kontrollierte Vergleiche für alle 171 Kapitel.
- `finance-formulas.cjs`, `finance-worked-equations.cjs`, `finance-textbook-math.cjs`, `finance-comparison-math.cjs`: explizite symbolische Formeln.
- `finance-math.cjs`: KaTeX ausschließlich beim Build; im ausgelieferten HTML wird natives MathML verwendet.
- `finance-deep-figures.cjs` und `finance-textbook-figures.cjs`: datenbasierte SVG-Erklärungsgrafiken mit Beschriftung und Textalternative.
- `finance-models.cjs`: reine, testbare Rechenmodelle.
- `finance-glossary*.cjs`: Definitionen, Synonyme und vertiefte Wörterbucheinträge.
- `finance-ui.js`, `finance-deep-ui.js` und CSS-Dateien: Lernansicht und Navigation.

`node build-finance.cjs` prüft Vollständigkeit, Verweise, Formelsyntax und Tabellenstruktur und bettet das Ergebnis in `index.html` ein. `node tests/deep-inventory.cjs` zählt die tatsächlich eingebetteten Inhalte.

## Prüfen

`npm.cmd test` führt die mathematischen, strukturellen und Serverprüfungen aus. `npm.cmd run test:browser` prüft die Anwendung mit Playwright. Nach `npm.cmd install` entweder `npx.cmd playwright install chromium` verwenden oder für installiertes Edge in PowerShell `$env:BROWSER_CHANNEL='msedge'` setzen.

Die Prüfungen umfassen alle Kapitel, Modelle, Eingabegrenzen, Offline-Aufruf, Querverweise und Mobilbreite von 390 Pixeln. Zusätzlich werden Duration und Konvexität gegen numerische Ableitungen und ausgewählte veröffentlichte Rechnungen unabhängig überprüft. Screenshots liegen unter dem nicht versionierten Ordner `test-results/`. Ergebnisse und Grenzen sind im [Prüfbericht](PRUEFBERICHT.md) dokumentiert.
