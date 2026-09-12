# Abschlussprüfung · 12. September 2026

Geprüfter Stand: `C:\Users\magnu\Studio\stochastik-studio`. Die Anwendung enthält Statistik, Finance Studio und Kelly Studio.

## Ausgebaute Lehrmaterialien

Alle **171 Finance-Kapitel in 16 Themenblöcken** enthalten individuell verfasste Vertiefungen. Hinzugekommen sind **361 Erklär- und Herleitungsabschnitte** sowie **175 Vergleichstabellen**. Die Kapitel verbinden Intuition, mathematische oder sachliche Begründung, erläuterte Beispiele, Anwendungen, Voraussetzungen und Grenzen. Aufklappbare Ergänzungen und Abschnittsverweise halten die Lernansicht übersichtlich. Insgesamt enthalten die Lehrmaterialien **519 begründete Lösungsschritte**, **740 Kapitelverbindungen** und **neun zusätzliche Erklärungsgrafiken**.

Das Duration-Kapitel führt von diskontierten Cashflows über Macaulay und Modified Duration zu Geld-Duration, DV01 und Konvexität. Es erklärt Zahlungsfrequenz, stetige Verzinsung, effektive Duration, Key-Rate- und Fisher-Weil-Duration sowie die Grenzen der Immunisierung. Fünf berechnete Vergleichstabellen zeigen Cashflowgewichte, Laufzeit-, Kupon- und Renditeeffekte sowie die Abweichungen linearer und quadratischer Preisnäherungen. Zwei Grafiken stellen Laufzeit und tatsächliche Preisreaktion gegenüber. Der zugehörige Rechner erlaubt getrennte Änderungen von Kupon, Rendite, Laufzeit, Zahlungsfrequenz und Zinsschock.

**156 zentrale mathematische Formeltafeln**, **219 Formeltafeln innerhalb der Herleitungen** und **383 Lösungsschritte** besitzen ausdrücklich verfasste LaTeX-Fassungen. Auch ausgewählte Formeln in Vergleichstabellen und die **neun Kelly-Formeltafeln** werden als offline verfügbares MathML eingebettet. Qualitative Entscheidungsprinzipien bleiben Prosa. Der frühere automatische Versuch, Wörter in Gleichungen umzusetzen, wurde entfernt. Die übrigen 136 Lösungsschritte erläutern Entscheidungen in Worten; keiner enthält eine ungesetzte Gleichung mit Gleichheits- oder Näherungszeichen.

Das Fachwörterbuch enthält **490 Definitionen** mit **1.047 eindeutigen Begriffen und Aliasen**. Der abschließende Finance-Browsertest erfasst **6.371 verlinkte Begriffsvorkommen**. Die Lerntexte führen zu Definitionen; das Wörterbuch verknüpft Hauptkapitel und weitere Fundstellen. Suche, Fachbereichsfilter, Anfangsbuchstaben und Direktlinks sind vorhanden.

**34 interaktive Finance-Modelle** sind in **58 Kapiteln** eingebunden. Die bestehenden **33 Stochastik-Kapitel** und Kelly Studio bleiben integriert. Texte, Modelle, Grafiken und Formeln funktionieren auch beim direkten Öffnen von `index.html`; nur externe Quellen benötigen Internet.

## Testergebnis

**51 Testfälle bestanden: 33 Rechen-, Struktur- und Servertests sowie 18 Browsertests.** Die vollständige Browsersuite bestand; nach der abschließenden Anpassung von Tabellenformeln und Lösungsdarstellung wurden die drei davon betroffenen umfassenden Finance- und Mobiltests erneut erfolgreich ausgeführt.

- `npm.cmd test`: Prüfung der Modelle, Inhalte, Formeln, Wörterbuchdaten und Serverrouten.
- `npm.cmd run test:browser`: Playwright mit Microsoft Edge, Desktop und Mobilbreite von 390 Pixeln.
- `node tests/deep-inventory.cjs`: Zählung der tatsächlich in die Anwendung eingebetteten Inhalte.

Die Finance-Browserprüfung durchläuft alle **171 Kapitel**, alle **34 Modelltypen** und **2.977 Bedienaktionen**. Sie prüft gültige Verweisziele, aufklappbare Inhalte, Regler und Zahlenfelder, Eingabegrenzen, Fehlerzustände und Reset. Die vollständige Mobilprüfung durchläuft ebenfalls alle 171 Kapitel ohne horizontalen Seitenüberlauf. Breite Tabellen, Formeln und Grafiken lassen sich innerhalb ihres jeweiligen Bereichs verschieben. Abschnittssprünge öffnen das passende Kapitel und setzen den Tastaturfokus. Die Duration-Prüfung kontrolliert außerdem Herleitungen, Grafikdaten und die neuen Rechnerparameter.

Die Rechentests vergleichen deterministische Modelle mit Referenzwerten und prüfen **920 Parameter- und Definitionsbereichsfälle**. Duration und Konvexität werden für **192 Kombinationen** aus Laufzeit, Kupon, Rendite und Zahlungsfrequenz unabhängig durch numerische Ableitungen überprüft. Weitere Prüfungen umfassen Nullkuponidentitäten, Immunisierung am Anlagehorizont und den Vergleich exakter, linearer und quadratischer Preisänderungen.

**72 ausgewählte veröffentlichte Rechnungen** werden unabhängig nachgerechnet: 40 bisherige Beispielaussagen und 32 zusätzliche Aussagen aus den neuen Vergleichen. Dazu gehören Anleihepreise, Par-Kupons, NPV, Renditen, Optionsreplikation, Alpha, Steuerstundung und Attribution. Bei der Prüfung wurde unter anderem der zweijährige Par-Kupon bei ein- und zweijährigen Spotzinsen von 4 % und 5 % auf **4,9755 %** korrigiert.

Der Build verlangt eine passende Vertiefung für jedes Kapitel und prüft Tabellenstruktur, Verweise und LaTeX-Syntax. Tests prüfen die Einbettung der Lehrtexte und Formeln. Das Wörterbuch wird auf eindeutige Schlüssel, vollständige Definitionen, Sortierung, Aliase und gültige Kapitelziele geprüft. Repräsentative Duration-Grafiken, Herleitungen und mobile Ansichten wurden zusätzlich visuell kontrolliert.

Die Regressionstests für bestehende Bereiche umfassen **742 Bedienaktionen in den 33 Stochastik-Kapiteln** und **298 Bedienaktionen in Kelly Studio**. Numerische Kelly-Prüfungen decken unter anderem 432 binäre Parameterkombinationen, unabhängige Optimierungsraster, Stressgrenzen und deterministische Simulationspfade ab. Offline-Aufruf, Browsernavigation, Wörterbuchsuche, Modulwechsel und Zustandserhalt sind ebenfalls geprüft.

## Aussagekraft der Prüfung

Die Tests bestätigen die genannten Struktur-, Rechen- und Bedienprüfungen. Sie sind keine automatische Verifikation sämtlicher fachlicher Sätze oder aller denkbaren Eingabekombinationen. Die fachlichen Erläuterungen wurden anhand von Primärquellen überprüft und eigenständig formuliert.

Die CFA-Levelhinweise beziehen sich auf **2026** und unterscheiden Grundlagen, Vertiefung und die alternativen Level-III-Wahlpfade. Die 171 Kapitel decken die vereinbarte Themenübersicht ab; sie sind keine vollständige Wiedergabe jedes offiziellen Learning Outcome. Modellannahmen und Einschränkungen werden in den jeweiligen Kapiteln erläutert. Steuerbeispiele verwenden fiktive konstante Modellsteuersätze.

Geprüft wurde der lokale Stand mit Edge einschließlich der beschriebenen mobilen Ansichten. Screenshots liegen im nicht versionierten Ordner `test-results/`. Der GitHub-Upload veröffentlicht den Quellstand; er ist kein gesondert geprüfter Website-Hostingdienst.

## Fachliche Primärquellen

Die Kapitel enthalten passende Quellen- und Curriculumlinks. Für die Vertiefung und Prüfung wurden insbesondere herangezogen:

- [CFA Institute · Yield-Based Bond Duration Measures and Properties 2026](https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/yield-based-bond-duration-measures-and-properties)
- [OpenStax · Bond Valuation](https://openstax.org/books/principles-finance/pages/10-2-bond-valuation)
- [OpenStax · Time Value of Money](https://openstax.org/books/principles-finance/pages/7-2-time-value-of-money-tvm-basics)
- [OpenStax · Capital Asset Pricing Model](https://openstax.org/books/principles-finance/pages/15-3-the-capital-asset-pricing-model-capm)
- [CFA Institute · Principles of Asset Allocation 2026](https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/principles-asset-allocation)
- [CFA Institute · Measuring and Managing Market Risk 2026](https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/measuring-managing-market-risk)
- [CFA Institute · Option Replication Using Put–Call Parity 2026](https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/option-replication-using-put-call-parity)
- [CFA Institute · Code of Ethics and Standards of Professional Conduct](https://www.cfainstitute.org/standards/professionals/code-ethics-standards)
- [NYU Stern · Aswath Damodaran · Investment Valuation](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/Inv2ed.htm)
- [NYU Stern · Aswath Damodaran · Valuation materials](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/valuation/val.htm)
- [IFRS Foundation · IAS 12 Income Taxes](https://www.ifrs.org/issued-standards/list-of-standards/ias-12-income-taxes/)
- [IFRS Foundation · IFRS 16 Leases](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/)
- [IFRS Foundation · IAS 2 Inventories](https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/)
- [GIPS · Handbook for Firms](https://www.gipsstandards.org/standards/gips-standards-for-firms/gips-standards-handbook-for-firms/)
