# Studio · Statistik & Finance

Ein online, lokal und offline nutzbarer Lernbereich im gemeinsamen Kelly-Studio-Design.

**[Website öffnen → Studio · Statistik & Finance](https://githubmagnus.github.io/stochastik-studio/)**

Direkt im Browser nutzbar, ohne Download oder Installation.

- **Statistik → Stochastik-Studio:** 33 interaktive Kapitel von Wahrscheinlichkeit bis Regression und stochastischen Prozessen.
- **Finance → Finance Studio:** 171 Kapitel in 16 Themenblöcken. Alle Kapitel enthalten zusätzliche Herleitungen oder begründete Fallanalysen, gezielte Vergleiche, Anwendungen, Grenzen, Querverweise, Kontrollfragen und CFA-Levelhinweise.
- **Verständnis prüfen:** 1.034 Aufgaben, mindestens sechs in jedem Finance-Kapitel und 14 bei Duration. Grundverständnis, Herleitung oder Begründung, Rechen- oder Fallaufgabe, Vergleich, Transfer und Fehlersuche besitzen getrennte Hinweise und ausführliche Lösungen. Aufgabenangaben und Ergebnistabellen sind getrennt. Die Lösungen enthalten 544 gesetzte Formeltafeln und 90 gesetzte Inline-Formeln, einschließlich bewusst wiederverwendeter Kapitelrechnungen.
- **Vertiefungen:** 361 zusätzliche Erklärabschnitte, 175 Vergleichstabellen, insgesamt 519 erläuterte Lösungsschritte, 740 Kapitelverbindungen und neun Erklärungsgrafiken. Wichtige Zusammenhänge wie Duration, Cashflowbewertung, CAPM und Optionsreplikation erhalten mehrere aufeinander aufbauende Herleitungen.
- **Mathematische Notation:** 156 zentrale mathematische Formeltafeln, 219 Formeltafeln in Herleitungen und 383 numerische Lösungsschritte werden ausdrücklich in LaTeX verfasst und als MathML eingebettet. Auch Formeln in Vergleichstabellen und alle neun Kelly-Formeltafeln sind gesetzt. Qualitative Entscheidungsfragen werden als Prosa dargestellt. Es gibt keine automatische Umwandlung von Wörtern in vermeintliche Gleichungen.
- **Fachwörterbuch:** 490 alphabetisch sortierte Definitionen mit 1.047 Begriffen und Aliasen; automatische Verlinkung aus den Lerntexten und Rückverweise auf erklärende Kapitel.
- **Kelly Studio:** Einzelpositionen, Szenarien, Portfoliooptimierung, Simulation und Herleitung. Der Zustand bleibt beim Modulwechsel erhalten.

## Öffnen

Die veröffentlichte Website ist über [GitHub Pages](https://githubmagnus.github.io/stochastik-studio/) erreichbar. Direkte Einstiege:

- [Finance Studio](https://githubmagnus.github.io/stochastik-studio/#finance)
- [Kelly Studio](https://githubmagnus.github.io/stochastik-studio/#kelly)
- [Stochastik-Studio](https://githubmagnus.github.io/stochastik-studio/#stochastik)
- [Duration: Herleitungen und Vergleiche](https://githubmagnus.github.io/stochastik-studio/#lesson-bonds-08~derivations)
- [Duration-Rechner](https://githubmagnus.github.io/stochastik-studio/#lesson-bonds-08~lab)
- [Die 14 Duration-Aufgaben](https://githubmagnus.github.io/stochastik-studio/#lesson-bonds-08~question)
- [Aufgabe zum Laufzeitvergleich](https://githubmagnus.github.io/stochastik-studio/#lesson-bonds-08~question-08)
- [Alpha und Beta](https://githubmagnus.github.io/stochastik-studio/#lesson-portfolio-04~derivations)
- [Fachwörterbuch](https://githubmagnus.github.io/stochastik-studio/#glossary)

Offline: Das Projekt herunterladen und `index.html` direkt im Browser öffnen; `kelly-studio.html` muss daneben liegen. Inhalte, Styles, Formeln und Modelle sind eingebettet. Nur externe Quellenlinks benötigen Internet. Alternativ `node .server.js` starten und [das lokale Studio](http://127.0.0.1:8477/) öffnen.

### Veröffentlichung auf GitHub Pages

GitHub Pages veröffentlicht den Stammordner `/` des Branches `main` unter der oben verlinkten Adresse. `.nojekyll` kennzeichnet die Dateien als fertige statische Website. Änderungen werden nach einem Push auf `main` automatisch veröffentlicht; die Veröffentlichung kann einige Minuten dauern. Bei Änderungen an Lerntexten oder Modulen zuvor `node build-finance.cjs` ausführen und die aktualisierten HTML-Dateien mit einchecken. Der Website-Link steht auch rechts im GitHub-Repository unter **About**.

Kapiteladressen verwenden `#lesson-<id>`. Abschnittsverweise sind beispielsweise `~explanation`, `~formula`, `~derivations`, `~derivation-2`, `~comparison-0`, `~example` oder `~lab`. Browser-Zurück/Vorwärts und Tastaturfokus werden unterstützt. Der lokale Server liefert ausschließlich die beiden App-Dokumente aus.

Der Fragenbereich ist über `~question` erreichbar, einzelne Aufgaben über `~question-01` usw. Der Filter unterscheidet Grundlagen, Anwendung und Vertiefung. Ein Hinweis öffnet nicht die Lösung. Die Markierung „Selbstständig gelöst und verstanden“ ist eine Selbsteinschätzung, keine automatische Benotung; sie wird bei verfügbarem lokalem Browserspeicher über Kapitelwechsel und Neuladen erhalten. Die Aufgaben bleiben auch ohne verfügbaren Speicher bedienbar.

## Modelle und Lernumfang

34 interaktive Modelle werden in 58 Kapiteln eingesetzt. Der Anleihenrechner zeigt Preis, Macaulay und Modified Duration, DV01, Konvexität und den Vergleich zwischen exaktem Zinsschock, linearer und quadratischer Näherung. Kupon, Rendite, Laufzeit, Zahlungsfrequenz und Schock lassen sich getrennt verändern. Alle Modelle nennen ihre Annahmen und Einheiten.

Die CFA-Einordnung bezieht sich auf **2026**. Kapitel verbinden Grundlagen und Vertiefungen über mehrere Levels; die drei Level-III-Wahlpfade sind Alternativen. Das eigenständige Lehrmaterial folgt der vereinbarten Themenübersicht und bildet nicht jedes offizielle Learning Outcome oder Pflichtmodul vollständig ab. Für eine konkrete Prüfung ist deren jahresspezifisches Curriculum maßgeblich. Quellen zu CFA Institute, OpenStax, IFRS und den NYU-Lehrmaterialien sind im Lernbereich verlinkt.

## Bearbeiten und bauen

- `finance-outline.json`: Themenstruktur und Titel.
- `finance-content/` und `finance-textbook/`: Grundtexte, erklärte Beispiele, Anwendungen und Grenzen.
- `finance-deep/`: individuelle Herleitungen und kontrollierte Vergleiche für alle 171 Kapitel.
- `finance-questions/`: kapitelspezifische Aufgabenstellungen, neue Transferfälle, Fehlersuche und zusätzliche Duration-Aufgaben. Herleitungen und bereits erklärte Rechenwege werden gezielt als Lösungen wiederverwendet.
- `finance-questions.cjs`, `finance-questions-givens.cjs`, `finance-questions-supplements.cjs`, `finance-questions-math.cjs`: Zusammenstellung, ausdrücklich ausgewählte Aufgabeneingaben, ergänzende Rechenwege und explizite mathematische Notation.
- `finance-questions-ui.js` und `finance-questions.css`: Aufgabenfilter, getrennte Hinweise/Lösungen, Direktlinks und lokale Selbsteinschätzung.
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
