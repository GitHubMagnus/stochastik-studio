# Stochastik-Studio

Interaktive Visualisierungen zu Wahrscheinlichkeiten, die abstrakte Formeln begreifbar machen. Die Anwendung besteht aus einer einzigen, in sich geschlossenen HTML-Datei ohne Abhängigkeiten und läuft direkt im Browser.

Der erste Reiter erklärt den Satz von Bayes am klassischen Beispiel eines Krankheitstests. Über Regler oder Zahlenfelder lassen sich Prävalenz, Sensitivität, Spezifität und Bevölkerungsgröße einstellen, und ein Punktbild sowie ein Baumdiagramm zeigen live, wie viele der positiv Getesteten wirklich krank sind. Darunter folgt ein ausführlicher Lehrbuch-Teil mit der Formel in Worten, der bedingten Wahrscheinlichkeit samt Venn-Diagramm, der Herleitung und weiteren durchgerechneten Beispielen von Spam-Filter über die DNA-Spur vor Gericht bis zur Gesichtserkennung.

Zwei weitere Reiter behandeln die Normalverteilung mit der 68–95–99,7-Regel und das Gesetz der großen Zahlen als animierte Simulation, deren relative Häufigkeit gegen den wahren Wert strebt. Weitere Themen sind in Arbeit.

## Starten

Die Datei `index.html` lässt sich direkt im Browser öffnen. Für einen lokalen Server genügt `node .server.js`, danach ist die Seite unter http://localhost:8477/ erreichbar.
