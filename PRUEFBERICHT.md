# Prüfbericht · Stand 15. September 2026

Geprüfter Stand: `C:\Users\magnu\Studio\stochastik-studio`. Die Anwendung enthält Statistik, Finance Studio und Kelly Studio.

## Lehrbuchgrafiken · 15. September 2026

Neu sind **43 berechnete Lehrbuchgrafiken in 36 Kapiteln**. Zusammen mit den neun vorhandenen Erklärungsgrafiken enthält der Lernbereich jetzt **52 statische Abbildungen**; die interaktiven Modelle bleiben zusätzlich verfügbar. Alle zwölf VWL-Kapitel enthalten neue Grafiken, zusammen 15. In zwölf Kapiteln der Portfoliotheorie sind 14 neue Abbildungen hinzugekommen. Weitere 14 behandeln quantitative Grundlagen, Investitionsrechnung, operativen Hebel, Zinskurven, Derivate, Rohstoffe und Asset-Liability-Management.

Die VWL-Abbildungen zeigen Nachfrageverschiebungen, Punktelastizitäten, konsistente Grenz- und Durchschnittskosten, Monopol und Wohlfahrtsverlust, Kapitalvertiefung, AD-AS-Schocks, erwartungsabhängige Phillipskurven, den klassischen Geldmarkt, das Keynesianische Kreuz, Schuldenquoten, komparativen Vorteil, Devisennachfrage, gedeckte Zinsparität und Zölle. Die Portfolio-Abbildungen unterscheiden unter anderem Korrelation und Diversifikation, Nutzen und Risikoaversion, Minimumvarianz- und Tangentialportfolio, CAL/CML und SML, Beta-Regression, Horizont- und Gebühreneffekte, Restriktionen, Rebalancing, Verlustaversion, VaR/ES, Korrelationsstress und Sharpe-Vergleiche.

Jede neue Abbildung besitzt einen Kapitelsprung über **Grafiken**, einen eigenen Direktlink, eine Kernaussage, beschriftete Achsen, eine Legende und eine Lesehilfe. Die Formeln werden ausdrücklich in LaTeX verfasst und als MathML eingebettet. Modellannahmen, Grenzen, Quellen und Kapitelverbindungen sind aufklappbar. Die SVG-Koordinaten stammen aus den beschriebenen Modellen; es werden keine fremden Lehrbuchabbildungen kopiert. Die neuen Begriffe ergänzen das Wörterbuch um 16 Einträge auf **506 Definitionen und 1.086 Begriffe beziehungsweise Aliase**. Auch Grafiktexte werden im Wörterbuch-Fundstellenindex berücksichtigt.

**Aktueller vollständiger Prüflauf: 68 Testfälle bestanden – 46 Rechen-, Struktur- und Servertests sowie 22 Browsertests.** Damit wurden auch sämtliche bisherigen Module, 171 Finance-Kapitel, 1.034 Aufgaben, 33 Stochastik-Kapitel und Kelly Studio nach der Integration erneut geprüft. Der Finance-Durchlauf erfasst jetzt 6.857 Bedienaktionen und 10.521 verlinkte Begriffsvorkommen.

Die neuen Rechentests überprüfen Tangential- und Minimumvarianzbedingungen unabhängig durch Ableitungen und Vergleichsraster, Grenzkosten durch Ableitungen der Gesamtkosten, Wohlfahrtsflächen geometrisch, VaR/ES und Fehlerwahrscheinlichkeiten durch numerische Integration sowie Kapitalwertnullstellen, Zinskurvenidentitäten, Optionsauszahlungen, Binomialbewertung und Immunisierung. Ein eigener Browsertest durchläuft **alle 43 Abbildungen** und kontrolliert SVG-Beschriftungsgrenzen, überlappende Punktbeschriftungen, aufklappbare Formeln und Quellen, Direktlinks und Tastaturbedienung. Alle 43 Grafiken bleiben bei 390 Pixel Bildschirmbreite innerhalb horizontal verschiebbarer Grafikbereiche; die Seite selbst läuft nicht über. Repräsentative Portfolio-, Kosten-, Monopol-, AD-AS-, Wahrscheinlichkeits- und Binomialgrafiken wurden zusätzlich visuell geprüft. Screenshots liegen in `test-results/illustrations/`.

Die numerische Prüfung bestätigt die angegebenen Modellrechnungen und geometrischen Beziehungen. Sie ist keine empirische Bestätigung der Modellannahmen. Unterschiede wie erwartete gegenüber realisierten Renditen, Preisniveau gegenüber Inflationsrate, CML gegenüber SML und VaR gegenüber ES werden ausdrücklich erläutert. Die folgenden Abschnitte dokumentieren außerdem den vorherigen Hosting- und Lehrmaterialstand.

## Website über GitHub Pages · 15. September 2026

Die Anwendung ist unter [Studio · Statistik & Finance](https://githubmagnus.github.io/stochastik-studio/) erreichbar. GitHub Pages veröffentlicht `main` aus dem Stammordner. Die README enthält einen hervorgehobenen Website-Link und öffentliche Direktlinks zu den Modulen, Kapiteln und Aufgaben. `.nojekyll` verhindert eine zusätzliche Jekyll-Verarbeitung der fertigen Website.

Beim Online-Abruf lieferten beide App-Dokumente HTTP 200 und stimmten bytegenau mit dem zuvor veröffentlichten lokalen Stand überein. Die Prüfung im Browser umfasste Modulnavigation, die Finance-Übersicht mit 171 Kapiteln, Suche, die 14 Duration-Aufgaben mit Direktlinks, getrennte Hinweise und Lösungen, gesetzte Formeln, Speicherung der Selbsteinschätzung, den Duration-Rechner, das Wörterbuch und den eingebetteten Kelly-Rechner unter dem GitHub-Unterpfad.

Dabei wurde ein horizontaler Überlauf langer Themenüberschriften in der mobilen Finance-Übersicht gefunden und behoben: Auf schmalen Bildschirmen stehen Bereich und Kapitelzahl jetzt unter dem Titel. Nach dem Build bestanden der vorhandene Browsertest zur Finance-Übersicht und die lokale Funktionsprüfung einschließlich sechs Einstiegsseiten bei 390 Pixel Breite ohne Seitenüberlauf, JavaScript-Fehler oder fehlgeschlagene Netzwerkanfragen. Die mathematischen Inhalte wurden bei dieser Veröffentlichung nicht geändert. Die nachfolgend beschriebenen vollständigen Testsuiten stammen vom 12. September.

## Bestehende Lehrmaterialien · Prüfung vom 12. September 2026

Alle **171 Finance-Kapitel in 16 Themenblöcken** enthalten individuell verfasste Vertiefungen. Hinzugekommen sind **361 Erklär- und Herleitungsabschnitte** sowie **175 Vergleichstabellen**. Die Kapitel verbinden Intuition, mathematische oder sachliche Begründung, erläuterte Beispiele, Anwendungen, Voraussetzungen und Grenzen. Aufklappbare Ergänzungen und Abschnittsverweise halten die Lernansicht übersichtlich. Die Kapitelbeispiele enthalten **519 begründete Lösungsschritte**; hinzu kommen **740 thematische Kapitelverbindungen** und **neun zusätzliche Erklärungsgrafiken**.

Der zuvor auf eine Frage je Kapitel begrenzte Übungsbereich wurde in **allen 171 Finance-Kapiteln** ersetzt. Er enthält nun **1.034 Aufgaben**: sechs je Kapitel, im Duration-Kapitel 14. Die sechs Grundtypen sind Grundverständnis, Herleitung beziehungsweise sachliche Begründung, Rechnung beziehungsweise Fallanalyse, Vergleich, Transfer und Fehlersuche. Die Aufgabenstellungen sind kapitelspezifisch verfasst. Bestehende ausführliche Herleitungen und Rechenwege werden gezielt als Lösung wiederverwendet; Transferfälle, Fehlerkorrekturen und zusätzliche Duration-Aufgaben ergänzen sie. Es handelt sich um eigene Lernaufgaben, nicht um übernommene offizielle Prüfungsfragen.

Aufgabenangaben und Ergebnistabellen sind getrennt. Hinweise und Lösungen lassen sich unabhängig öffnen. Die Lösungen erklären Annahmen, Zwischenschritte und Schlussfolgerungen; **544 Formeltafeln** und **90 Inline-Formeln** werden aus ausdrücklich festgelegtem LaTeX gesetzt. Ein Filter unterscheidet Grundlagen, Anwendung und Vertiefung. Jede Aufgabe hat einen Direktlink und einen Rückverweis zur Erklärung. Markierungen sind eine lokale Selbsteinschätzung und keine automatische Korrektur freier Antworten.

Das Duration-Kapitel führt von diskontierten Cashflows über Macaulay und Modified Duration zu Geld-Duration, DV01 und Konvexität. Es erklärt Zahlungsfrequenz, stetige Verzinsung, effektive Duration, Key-Rate- und Fisher-Weil-Duration sowie die Grenzen der Immunisierung. Fünf berechnete Vergleichstabellen zeigen Cashflowgewichte, Laufzeit-, Kupon- und Renditeeffekte sowie die Abweichungen linearer und quadratischer Preisnäherungen. Zwei Grafiken stellen Laufzeit und tatsächliche Preisreaktion gegenüber. Der zugehörige Rechner erlaubt getrennte Änderungen von Kupon, Rendite, Laufzeit, Zahlungsfrequenz und Zinsschock.

**156 zentrale mathematische Formeltafeln**, **219 Formeltafeln innerhalb der Herleitungen** und **383 Lösungsschritte** besitzen ausdrücklich verfasste LaTeX-Fassungen. Auch ausgewählte Formeln in Vergleichstabellen und die **neun Kelly-Formeltafeln** werden als offline verfügbares MathML eingebettet. Qualitative Entscheidungsprinzipien bleiben Prosa. Der frühere automatische Versuch, Wörter in Gleichungen umzusetzen, wurde entfernt. Die übrigen 136 Lösungsschritte erläutern Entscheidungen in Worten; keiner enthält eine ungesetzte Gleichung mit Gleichheits- oder Näherungszeichen.

Das Fachwörterbuch enthält **490 Definitionen** mit **1.047 eindeutigen Begriffen und Aliasen**. Der abschließende Finance-Browsertest erfasst einschließlich Aufgaben **10.246 verlinkte Begriffsvorkommen**. Die Lerntexte führen zu Definitionen; das Wörterbuch verknüpft Hauptkapitel und weitere Fundstellen. Auch die neuen Aufgaben werden für die Fundstellen berücksichtigt.

**34 interaktive Finance-Modelle** sind in **58 Kapiteln** eingebunden. Die bestehenden **33 Stochastik-Kapitel** und Kelly Studio bleiben integriert. Texte, Modelle, Grafiken und Formeln funktionieren auch beim direkten Öffnen von `index.html`; nur externe Quellen benötigen Internet.

## Basisprüfung vom 12. September 2026

**58 Testfälle bestanden: 37 Rechen-, Struktur- und Servertests sowie 21 Browsertests.** Beide vollständigen Testsuiten wurden nach Einbindung der Aufgabenbanken erfolgreich ausgeführt.

- `npm.cmd test`: Prüfung der Modelle, Inhalte, Formeln, Wörterbuchdaten und Serverrouten.
- `npm.cmd run test:browser`: Playwright mit Microsoft Edge, Desktop und Mobilbreite von 390 Pixeln.
- `node tests/deep-inventory.cjs`: Zählung der tatsächlich in die Anwendung eingebetteten Inhalte.

Die Finance-Browserprüfung durchläuft alle **171 Kapitel**, alle **34 Modelltypen** und **6.771 Bedienaktionen**. Sie prüft gültige Verweisziele, aufklappbare Inhalte, Regler und Zahlenfelder, Eingabegrenzen, Fehlerzustände und Reset. Die vollständige Mobilprüfung durchläuft ebenfalls alle 171 Kapitel ohne horizontalen Seitenüberlauf. Breite Tabellen, Formeln und Grafiken lassen sich innerhalb ihres jeweiligen Bereichs verschieben. Abschnittssprünge öffnen das passende Kapitel und setzen den Tastaturfokus.

Eine zusätzliche Prüfung durchläuft **alle 1.034 Aufgaben**, ihre getrennten Hinweise und Lösungen, Eingabetabellen, Formelansichten und Verweise. Auch bei 390 Pixel Breite werden sämtliche Kapitel mit geöffneten Lösungen geprüft. Weitere Tests kontrollieren Aufgabenfilter, direkte Ansteuerung zuvor ausgefilterter Aufgaben, Tastaturbedienung, gemeinsames Schließen der Erläuterungen, Offline-Aufruf sowie Erhalt der Selbsteinschätzung nach Navigation und Neuladen. Beschädigter oder gesperrter Browserspeicher führt nicht zum Ausfall des Übungsbereichs. Desktop- und Mobilansichten der neuen Duration-Aufgaben wurden visuell geprüft.

Die zusätzlichen Duration-Rechnungen werden unabhängig anhand von Cashflowbarwerten, symmetrischen Differenzen und Sensitivitätsidentitäten kontrolliert. Geprüft sind Zahlungsfrequenz, Nullkupon-Laufzeitvergleich, Kupongewichtung, Euro-DV01, positive und negative Konvexität, Key-Rate-Drehung sowie der lokale Horizonteffekt. Ergänzende Rechnungen prüfen unter anderem Durchschnittsvorräte, reale Endwerte, Schuldenquotennäherung und Leasingtilgung. Aufgabenstellungen wurden an die tatsächlich verwendeten Angaben angepasst, damit keine unerklärten Zahlen erst in der Lösung auftauchen.

Die Rechentests vergleichen deterministische Modelle mit Referenzwerten und prüfen **920 Parameter- und Definitionsbereichsfälle**. Duration und Konvexität werden für **192 Kombinationen** aus Laufzeit, Kupon, Rendite und Zahlungsfrequenz unabhängig durch numerische Ableitungen überprüft. Weitere Prüfungen umfassen Nullkuponidentitäten, Immunisierung am Anlagehorizont und den Vergleich exakter, linearer und quadratischer Preisänderungen.

**72 ausgewählte veröffentlichte Rechnungen** werden unabhängig nachgerechnet: 40 bisherige Beispielaussagen und 32 zusätzliche Aussagen aus den neuen Vergleichen. Dazu gehören Anleihepreise, Par-Kupons, NPV, Renditen, Optionsreplikation, Alpha, Steuerstundung und Attribution. Bei der Prüfung wurde unter anderem der zweijährige Par-Kupon bei ein- und zweijährigen Spotzinsen von 4 % und 5 % auf **4,9755 %** korrigiert.

Der Build verlangt eine passende Vertiefung für jedes Kapitel und prüft Tabellenstruktur, Verweise und LaTeX-Syntax. Tests prüfen die Einbettung der Lehrtexte und Formeln. Das Wörterbuch wird auf eindeutige Schlüssel, vollständige Definitionen, Sortierung, Aliase und gültige Kapitelziele geprüft. Repräsentative Duration-Grafiken, Herleitungen und mobile Ansichten wurden zusätzlich visuell kontrolliert.

Die Regressionstests für bestehende Bereiche umfassen **742 Bedienaktionen in den 33 Stochastik-Kapiteln** und **298 Bedienaktionen in Kelly Studio**. Numerische Kelly-Prüfungen decken unter anderem 432 binäre Parameterkombinationen, unabhängige Optimierungsraster, Stressgrenzen und deterministische Simulationspfade ab. Offline-Aufruf, Browsernavigation, Wörterbuchsuche, Modulwechsel und Zustandserhalt sind ebenfalls geprüft.

## Aussagekraft der Prüfung

Die Tests bestätigen die genannten Struktur-, Rechen- und Bedienprüfungen. Sie sind keine automatische Verifikation sämtlicher fachlicher Sätze oder aller denkbaren Eingabekombinationen. Die fachlichen Erläuterungen wurden anhand von Primärquellen überprüft und eigenständig formuliert.

Die CFA-Levelhinweise beziehen sich auf **2026** und unterscheiden Grundlagen, Vertiefung und die alternativen Level-III-Wahlpfade. Die 171 Kapitel decken die vereinbarte Themenübersicht ab; sie sind keine vollständige Wiedergabe jedes offiziellen Learning Outcome. Modellannahmen und Einschränkungen werden in den jeweiligen Kapiteln erläutert. Steuerbeispiele verwenden fiktive konstante Modellsteuersätze.

Die vollständige Inhalts- und Modellprüfung erfolgte lokal mit Edge einschließlich der beschriebenen mobilen Ansichten. Die ergänzende Prüfung der öffentlichen Website ist oben separat beschrieben. Screenshots und der zusätzliche Funktionsbericht liegen im nicht versionierten Ordner `test-results/`.

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
