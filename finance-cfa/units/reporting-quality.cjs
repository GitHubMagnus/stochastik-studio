const {F,T,X,S,G}=require('../author.cjs');
module.exports={id:'reporting-quality',intro:[
 'Ein hoher ausgewiesener Gewinn beantwortet noch nicht, ob das Unternehmen wirtschaftlich erfolgreich ist und ob der Bericht ein zutreffendes Bild vermittelt. Eine Firma kann einen echten einmaligen Gewinn transparent erläutern; eine andere kann mit denselben Zahlen den Eindruck wiederkehrenden Erfolgs erwecken. Analyse muss deshalb wirtschaftlichen Vorgang, Bilanzierung und Darstellung nacheinander prüfen.',
 'Dieses Kapitel verbindet die bisherigen Abschlusskapitel zu einem Prüfverfahren. Eigene Fälle zeigen, wie vorgezogener Umsatz, Aktivierung, Vorratsaufbau, Schätzungsänderung und Zahlungsverschiebung mehrere Berichte zugleich verändern. Warnsignale begründen gezielte Nachfragen; sie sind keine automatische Feststellung von Betrug.'
],sections:[
 S('dimensions','1. Berichtsqualität und Ergebnisqualität sind zwei Fragen','a b',[
  'Berichtsqualität betrifft die Verlässlichkeit und Entscheidungsnützlichkeit der Information. Ergebnisqualität betrifft unter anderem die wirtschaftliche Tragfähigkeit und Wiederholbarkeit der zugrunde liegenden Gewinne, Cashflows und Vermögenspositionen. Die beiden Fragen hängen zusammen, sind aber nicht austauschbar.',
  T(['Fall','Berichtsqualität','Wirtschaftliche bzw. Ergebnisqualität'],[
   ['Ein Werk verliert seinen wichtigsten Kunden; Verlust und Risiken sind klar erläutert.','Kann hoch sein: Das schlechte Ereignis wird zutreffend dargestellt.','Schwach, wenn die verbleibenden Geschäfte ihre Kapitalbindung nicht verdienen.'],
   ['Hoher Gewinn stammt aus einem einmaligen Grundstücksverkauf, separat offengelegt.','Kann hoch sein.','Der Gewinn ist real, aber keine unveränderte Basis für die nächste Verkaufsperiode.'],
   ['Ein erfolgreiches Geschäft verschweigt wesentliche Verpflichtungen.','Schwach trotz guter aktueller Absatzdaten.','Ohne vollständige Information ist der nachhaltige wirtschaftliche Überschuss schwer zuverlässig zu beurteilen.'],
   ['Wiederkehrende wettbewerbsfähige Margen, nutzbare Aktiva und stimmige Cashflows werden transparent berichtet.','Hohe Qualität ist mit wirtschaftlich guten Ergebnissen vereinbar.','Nachhaltigkeit muss dennoch gegen Wettbewerb und Investitionsbedarf geprüft werden.']
  ],'Eine schlechte Nachricht in einem guten Bericht ist nicht dasselbe wie eine schlechte Berichterstattung.'),
  'Die Beurteilung reicht über Nettogewinn hinaus. Ein hoher CFO kann aus nicht wiederholbarem Lagerabbau stammen; ein großer Vermögensbestand kann wenig nutzbar oder bereits verpfändet sein. Auch bei zutreffenden Buchungen braucht die Prognose daher Ursachen und Grenzen.'
 ]),
 S('spectrum','2. Ein Qualitätsspektrum ohne falsche Präzision','b',[
  'Qualität verschlechtert sich nicht erst beim frei erfundenen Umsatz. Fehlende Aufgliederung, eine einseitige Auswahl von Kennzahlen oder bewusst günstige Schätzungen können Entscheidungen schon vorher beeinträchtigen. Ein Spektrum hilft, die Art des Problems zu benennen; es ist keine mechanische Punktzahl und keine juristische Einstufung.',
  T(['Analytische Einordnung','Konkrete Beobachtung','Folge für den Analysten'],[
   ['Nützliche und unverzerrte Information','Wesentliche Vorgänge sind richtig erfasst, erklärt und vergleichbar.','Aus den Daten eine begründete wirtschaftliche Prognose bilden.'],
   ['Regelkonforme Zahlen, aber geringe Nachhaltigkeit','Einmaliger Vermögensverkauf dominiert den Gewinn.','Wiederholbaren Ertrag getrennt schätzen; nicht automatisch einen Buchungsfehler unterstellen.'],
   ['Einseitige Darstellung oder Auswahl','Nur günstige Bereinigungen werden hervorgehoben.','Überleitung, Symmetrie und unveränderte Definition verlangen.'],
   ['Ergebnissteuerung durch Wahlrechte oder Schätzungen','Annahmen werden gezielt um einen Ergebnisgrenzwert herum verändert.','Wirtschaftliche Begründung und Empfindlichkeit prüfen; Zulässigkeit ist fallabhängig.'],
   ['Wesentliche Abweichung vom Regelwerk','Nicht qualifizierender Aufwand wird als Vermögen gezeigt.','Betroffene Zahlen korrigieren, Umfang und Ursache untersuchen.'],
   ['Bewusste wesentliche Falschdarstellung oder Erfindung','Belege oder Geschäfte werden vorsätzlich fingiert.','Verlässlichkeit grundlegend neu beurteilen und einschlägige professionelle Pflichten beachten.']
  ],'Die zweite Zeile betrifft vor allem Ergebnisqualität. Andere Zeilen beschreiben zunehmende Informationsprobleme; sie dürfen nicht zu einer einzigen Zahlenrangliste vermischt werden.'),
  'Ein unbeabsichtigter wesentlicher Fehler schadet dem Bericht ebenfalls, ist aber nicht allein deshalb Betrug. Absicht, Umfang, Regelverstoß und wirtschaftliche Wirkung sind getrennte Feststellungen. Eine später korrigierte Zahl beseitigt zudem nicht automatisch die Frage nach früheren Kontrollen.'
 ]),
 S('economic-quality','3. Wiederkehrend, zahlungswirksam und wertschaffend prüfen','a',[
  X('Gleicher Jahresgewinn, andere Prognosebasis','A und B berichten jeweils 100 Vorsteuergewinn. Bei A stammen 80 aus dem laufenden Geschäft und 20 aus einem separat ausgewiesenen Grundstücksverkauf. Bei B stammen alle 100 aus wiederkehrenden Geschäften. Beide Berichte seien korrekt.',[
   'Der veröffentlichte Gewinnvergleich zeigt Gleichstand. Eine einfache Fortschreibung von 100 für A würde jedoch die Wiederholung des Grundstücksverkaufs voraussetzen.',
   'Unter der ausdrücklich angenommenen unveränderten Geschäftslage ist 80 die Ausgangsbasis für A und 100 für B. Das ist eine Prognoseanpassung, keine Behauptung, der Verkaufserfolg sei falsch gebucht.',
   'Auch die 100 von B sind noch kein Beweis ökonomischer Wertschaffung. Bei 2.000 gebundenem Kapital kann eine scheinbar stabile Marge eine unzureichende Kapitalrendite ergeben.',
   'Erforderlicher Ersatz von Anlagen und der Ausbau von Vorräten können Mittel binden, obwohl Aufwand und Ergebnis richtig erfasst wurden.'
  ],'Für Bewertung werden nachhaltiger Ertrag, Kapitalbedarf und Risiko gemeinsam betrachtet.'),
  F('ROIC=NOPAT/IC,\\qquad EP=NOPAT-k\\,IC','Im vereinfachten Einperiodenmodell schafft ein positiver operativer Gewinn erst oberhalb der geforderten Kapitalvergütung einen positiven ökonomischen Überschuss.',[['ROIC','Operative Nachsteuerrendite auf konsistent abgegrenztes investiertes Kapital.'],['NOPAT','Operativer Gewinn nach den passenden operativen Steuern.'],['IC','Relevante investierte Kapitalbasis.'],['k','Geforderter Kapitalkostensatz für diese Basis und Periode.'],['EP','Ökonomischer Überschuss nach rechnerischer Kapitalvergütung.']]),
  'Eigener Vergleich: NOPAT 100 auf Kapital 2.000 ergibt 5 %. Bei Kapitalkosten 8 % sind 160 erforderlich, der ökonomische Überschuss beträgt −60. Der positive Buchgewinn kann dabei vollkommen korrekt berichtet sein. Historische Buchwerte, Sonderposten und unterschiedliche Geschäftsrisiken begrenzen auch diese vereinfachte Kennzahl.'
 ]),
 S('prudence','4. Vorsicht ist keine Erlaubnis zur gezielten Unterbewertung','c',[
  'Aggressive Annahmen erhöhen typischerweise gegenwärtigen Gewinn, Aktiva oder CFO beziehungsweise vermindern ausgewiesene Belastungen. Konservative Behandlung wirkt im betrachteten Zeitraum häufig entgegengesetzt. Die Richtung allein entscheidet aber weder über Zulässigkeit noch über Qualität: Eine gut begründete höhere Nutzungsdauer kann angemessen sein, eine absichtlich überhöhte Rückstellung nicht.',
  'Das IFRS-Rahmenkonzept versteht Vorsicht als sorgfältiges Urteilen unter Unsicherheit, das Neutralität unterstützt. Bewusst zu kleine Vermögenswerte oder bewusst zu große Schulden sind damit nicht allgemein erlaubt. Einzelne Standards können asymmetrische Regeln enthalten; diese konkrete Regel ist von einer willkürlichen Managementreserve zu unterscheiden.',
  X('Ein heute konservativer Betrag kann morgen aggressiven Gewinn schaffen','Vor einer Garantieabgrenzung beträgt Gewinn 100. Eine sachgerechte Schätzung ergibt Aufwand 10. Stattdessen werden ohne Grundlage 25 erfasst; im Folgejahr werden die überschüssigen 15 ertragswirksam aufgelöst. Sonst gleiches Geschäft, keine Steuern.',[
   'Im ersten Jahr fällt der berichtete Gewinn auf 75 statt sachgerechter 90: scheinbar vorsichtig, tatsächlich um 15 verzerrt.',
   'Im zweiten Jahr steigert die Auflösung den Gewinn um 15 ohne neuen Verkauf oder neue Produktivität.',
   'Über beide Jahre heben sich die Verschiebungen auf. Gerade deshalb ist die einzelne Jahreszahl kein ausreichender Qualitätsmaßstab.',
   'Eine echte neue Information kann eine Reserveänderung rechtfertigen; entscheidend sind die ursprünglich verfügbaren Belege und die späteren Ursachen.'
  ],'Die Mehrperiodenwirkung entlarvt die einfache Regel „niedriger Gewinn bedeutet immer bessere Qualität“.')
 ]),
 S('smoothing','5. Glättung und Big Bath verschieben die sichtbare Geschichte','c g',[
  'Earnings Smoothing zielt auf einen gleichmäßigeren Ergebnisverlauf. Ein Big Bath bündelt hohe Belastungen in einer ohnehin schlechten Periode, um später eine günstigere Ausgangsbasis zu haben. Beides kann über Bilanzannahmen oder über reale Entscheidungen versucht werden. Ein tatsächlich erforderlicher großer Verlust ist dagegen nicht allein wegen seiner Höhe manipulativ.',
  X('Weniger schwankender Gewinn ohne weniger Geschäftsrisiko','Sachgerecht wären Gewinne 120 und 60. Im ersten Jahr werden ohne sachliche Grundlage 30 zusätzliche Aufwendungen abgegrenzt, im zweiten Jahr aufgelöst.',[
   'Berichtet werden 90 und 90. Gesamtgewinn bleibt 180; die Schwankung wird nur in der Rechnungslegung verborgen.',
   'Ein Modell, das aus den beiden gemeldeten Werten stabile Ertragskraft ableitet, würde das ursprüngliche Geschäftsrisiko unterschätzen.',
   'Ein großer Verlust im ersten Jahr kann außerdem spätere Abschreibung reduzieren. Der spätere Gewinnanstieg muss dann nicht aus einer Erholung von Nachfrage oder Preisen stammen.'
  ],'Die Analyse verfolgt Bestände und ihre Auflösung, statt nur eine geglättete Ergebnislinie zu bewundern.'),
  'Reale Ergebnissteuerung verändert dagegen tatsächliche Handlungen: Wartung wird verschoben, Forschung gekürzt oder Kunden erhalten Rabatte für vorgezogene Käufe. Solche Entscheidungen können korrekt verbucht sein und dennoch den langfristigen Unternehmenswert schwächen. Rechnungslegungsqualität und Qualität der Managemententscheidung bleiben getrennt.'
 ]),
 S('incentives','6. Anreiz, Gelegenheit und Rechtfertigung zusammen untersuchen','d',[
  T(['Dimension','Eigener Fall','Gezielte Gegenfrage'],[
   ['Druck oder Anreiz','Ein Bonus wird nur ab 100 Ergebnis gezahlt; vor Schätzungsänderung liegt es bei 98.','Welche Annahmen wurden wann geändert, und waren ihre Gründe schon früher bekannt?'],
   ['Gelegenheit','Wenige Personen können spät im Abschluss große manuelle Buchungen ohne unabhängige Freigabe einstellen.','Wer prüft Vollständigkeit, Befugnis und Belege dieser Einträge?'],
   ['Rechtfertigung','Ein vorgezogener Umsatz wird intern als bloße Überbrückung bis zum erwarteten Aufschwung beschrieben.','Wurden die heutigen Ansatzbedingungen tatsächlich erfüllt?']
  ],'Die Kombination ist eine Risikostruktur, kein aus drei Beobachtungen automatisch bewiesener Betrug.'),
  'Weitere Anreize können Finanzierung, drohende Covenant-Verstöße, ein geplanter Verkauf von Aktien oder die Vermeidung enttäuschter Gewinnerwartungen sein. Hohe Schätzungsunsicherheit, komplexe Geschäfte, schwache Überwachung und eine Kultur ohne Widerspruch können den Handlungsspielraum vergrößern.',
  'Der relevante Zusammenhang lautet: Welcher Entscheidungsträger profitiert von welcher konkreten Zahl, und über welchen beeinflussbaren Posten lässt sie sich verändern? Ein allgemeines Urteil über den Charakter einer Person ersetzt diese überprüfbare Kette nicht.'
 ]),
 S('discipline','7. Kontrollen helfen, besitzen aber eigene Grenzen','e',[
  T(['Mechanismus','Beitrag','Grenze'],[
   ['Interne Kontrollen und unabhängige Überwachung','Trennen Freigabe, Buchung, Verwahrung und Prüfung; hinterfragen große Schätzungen.','Umgehung durch leitende Personen oder abgestimmtes Verhalten kann Kontrollen schwächen.'],
   ['Externe Abschlussprüfung','Sammelt geeignete Nachweise für hinreichende Sicherheit über wesentliche Falschdarstellungen.','Keine absolute Sicherheit; Schätzungen, verdeckte Abreden und gefälschte Nachweise können die Erkennung erschweren.'],
   ['Aufsicht und Durchsetzung','Schaffen Berichtigungspflichten und mögliche Sanktionen.','Verfahren können spät beginnen; Zuständigkeit und Ressourcen unterscheiden sich.'],
   ['Kapitalgeber und Verträge','Vergütung, Berichtsrechte und präzise Covenant-Definitionen können Anreize ausrichten.','Schlecht gewählte Grenzwerte können selbst Druck zur Ergebnissteuerung erzeugen.'],
   ['Wettbewerb der Informationsnutzer','Analysten, Presse und Investoren vergleichen Aussagen und wirtschaftliche Daten.','Zugang, Anreize und Wissen sind ungleich; Konsens kann einen Fehler gemeinsam übersehen.']
  ],'Mehrere voneinander unabhängige Kontrollwege sind hilfreicher als unkritisches Vertrauen in ein einzelnes Gütesiegel.'),
  'Ein uneingeschränktes Prüfungsurteil ist relevante Information, garantiert aber weder dauerhaftes Geschäftsmodell noch vollständige Betrugserkennung. Umgekehrt ist ein Prüferwechsel ohne weitere Umstände kein Beweis einer Unregelmäßigkeit. Anlass, Streitpunkte, zeitlicher Verlauf und veröffentlichte Erläuterung müssen gemeinsam gelesen werden.'
 ]),
 S('adjusted','8. Bereinigten Gewinn selbst überleiten','f',[
  'Non-GAAP-Kennzahlen können einen bestimmten Aspekt verständlich machen. Nützlich werden sie durch klare Definition, passende Vergleichsgröße, nachvollziehbare Überleitung und konsistente Anwendung. Ein höherer bereinigter Gewinn ist weder automatisch falsch noch automatisch die bessere Prognosebasis.',
  X('Nur Kosten entfernen erzeugt eine einseitige Erfolgsgeschichte','Nettogewinn 60 enthält vor Steuern Restrukturierungsaufwand 16, aktienbasierte Vergütung 12, Wertminderung 20 und einmaligen Anlagenverkaufsgewinn 24. Für alle vier Posten gilt ausdrücklich ein voller Steuereffekt von 25 %. Keine Minderheitsanteile.',[
   'Management entfernt alle drei Aufwendungen, behält aber den Verkaufsgewinn: 60 + (16 + 12 + 20) × 75 % = 96.',
   'Ein Analyst will lediglich die ausdrücklich als einmalig angenommenen Restrukturierungs- und Wertminderungsposten sowie den einmaligen Verkauf entfernen. Aktienvergütung bleibt als wiederkehrender Personalaufwand enthalten.',
   F('NI_{adj}=60+(16+20-24)(1-0{,}25)=69','Bei der symmetrischen Bereinigung werden einmalige Gewinne abgezogen und einmalige Verluste hinzugefügt. Die angenommene Steuerwirkung gilt für jeden Posten.',[['NI_{adj}','Analytisch bereinigter Nachsteuergewinn im Fall.']]),
   'Differenz zur Managementzahl: 27. Davon stammen 9 aus ausgeschlossener Aktienvergütung und 18 aus beibehaltenem Verkaufsgewinn.',
   'Auch 69 ist keine universelle Wahrheit: Wenn Restrukturierungen regelmäßig für die Strategie nötig sind, muss ein angemessener laufender Kostenanteil in der Prognose bleiben.'
  ],'Die Auswahl und die Steuerbehandlung sind Teil der Analyse, nicht bloß eine Rechenkonvention.'),
  'Nicht zahlungswirksam bedeutet nicht wirtschaftlich kostenlos. Aktienvergütung kann Eigentümer verwässern; Abschreibungen verteilen früher eingesetztes Kapital. Eine reine Cashanalyse benötigt andere Korrekturen als eine nachhaltige Gewinnanalyse. EBITDA ist insbesondere kein Cashflow nach Working Capital, Investitionen und Steuern.'
 ]),
 S('presentation','9. Darstellung, Vergleichbarkeit und IFRS 18','f',[
  'Auch richtige Teilzahlen können irreführen: Eine Überschrift zeigt nur bereinigtes Wachstum, der Ausgangszeitraum wird günstig gewählt oder der Begriff „einmalig“ kehrt jedes Jahr wieder. Bei geänderter Definition ist eine vergleichbare Vorjahresrechnung hilfreicher als zwei Zahlen mit gleichem Namen, aber anderem Inhalt.',
  'Für US-Berichte im einschlägigen SEC-Anwendungsbereich können irreführende Non-GAAP-Anpassungen trotz rechnerischer Überleitung problematisch sein. Die SEC nennt unter anderem das Entfernen normaler wiederkehrender zahlungswirksamer Betriebsausgaben und inkonsistente Bereinigungen. Die genaue Beurteilung folgt Sachverhalt und Regelungsbereich.',
  'IFRS 18 gilt verpflichtend für Geschäftsjahre ab 1. Januar 2027, mit erlaubter früher Anwendung. Es verlangt für Kennzahlen, die seine Definition einer Management-defined Performance Measure erfüllen, unter anderem Erläuterung und Überleitung in einer gemeinsamen Anhangangabe. Steuer- und Minderheitsanteilseffekte der Überleitung werden erläutert. Nicht jede operative Kennzahl und nicht jede Cashflowgröße ist automatisch eine solche MPM.',
  T(['Prüfschritt','Warum'],[
   ['Zum nächstpassenden Abschlussbetrag zurückrechnen','Die Bereinigung darf keinen fehlenden Ausgangsaufwand oder einen falschen Vergleichsmaßstab verdecken.'],
   ['Gewinne und Verluste gleicher Art gleich behandeln','Asymmetrie kann eine systematisch günstigere Darstellung erzeugen.'],
   ['Definition über mehrere Jahre und Wettbewerber abstimmen','Ein gleiches Etikett garantiert keine identische Berechnung.'],
   ['Steuer, Minderheitsanteile und je-Aktie-Nenner passend zuordnen','Ein Vorsteuerposten darf nicht ungeprüft in eine Nachsteuer-je-Aktie-Zahl eingehen.']
  ],'Offenlegung macht eine Kennzahl prüfbarer; sie macht jede ausgeschlossene Ausgabe noch nicht irrelevant.')
 ]),
 S('revenue','10. Umsatzprüfung verbindet Verträge, Forderungen und spätere Zahlung','g h',[
  'Mehr Umsatz kann aus mehr Absatz, höheren Preisen, Zukäufen oder anderen Wechselkursen entstehen. Wachsen Forderungen wesentlich schneller, kommen zusätzliche Erklärungen hinzu: längere Zahlungsziele, später Umsatzschwerpunkt, schwächere Bonität oder eine zu frühe Erfassung. Erst Vertrags- und Zahlungsinformationen unterscheiden diese Ursachen.',
  X('20 % Umsatzwachstum, deutlich langsamerer Geldzufluss','Jahr 0: Umsatz 1.000, Anfangsforderungen 80, Endforderungen 100. Jahr 1: Umsatz 1.200, Anfangsforderungen 100, Endforderungen 240. Alle Umsätze sind Kreditumsätze; keine Abwertungen, Zukäufe, Währungseffekte oder sonstigen Forderungsbewegungen.',[
   'Kundeneinzahlung Jahr 0: 1.000 + 80 − 100 = 980. Jahr 1: 1.200 + 100 − 240 = 1.060.',
   'Umsatz wächst um 20 %, Einzahlungen dagegen nur um 80/980 ≈ 8,1633 %. Endforderungen steigen um 140 %.',
   F('DSO_{end,t}=365\\frac{AR_t}{S_t}','Dieser ausdrücklich als Stichtagsindikator bezeichnete Quotient verwendet Endforderungen. Er ist nicht identisch mit der sonst häufig verwendeten durchschnittlichen Forderungsdauer.',[['DSO_{end,t}','Stichtagsbasierter Forderungsindikator in Tagen für Jahr t.'],['AR_t','Endforderungen derselben Umsatzabgrenzung.'],['S_t','Jährlicher Kreditumsatz.'],['t','Jahresindex; Tagesbasis hier 365.']]),
   'Der Indikator steigt von 36,5 auf 73 Tage. Das begründet Prüfung von Zahlungskonditionen, Alterung, Retouren und Zahlungen nach dem Stichtag.'
  ],'Ein Warnsignal wird zur konkreten Frage; es darf alternative plausible Ursachen nicht unterschlagen.'),
  X('Ein zu früh erfasster Verkauf wirkt auf mehrere Positionen','Ein Unternehmen bucht Umsatz 120 und zugehörige Umsatzkosten 72 vorzeitig. Nach dem ausdrücklich geprüften Vertrag ist die Leistung am Stichtag noch nicht erbracht und das Eigentum an den Waren verbleibt; keine Zahlung, Steuern hier ausgeblendet.',[
   'Forderungen sind um 120 zu hoch, Vorräte um 72 zu niedrig. Gewinn und Eigenkapital sind netto um 48 zu hoch.',
   'Die Korrektur senkt Umsatz um 120 und nimmt Umsatzkosten 72 zurück. Der Gewinn fällt um 48; der Gesamtaktivüberhang verschwindet ebenfalls um 48.',
   'Ein richtig hergeleiteter CFO war durch diese zwei unbaren Buchungen nicht höher: +48 Gewinn −120 Forderungszunahme +72 Vorratsabnahme = 0.',
   'Eine tatsächlich erfolgte spätere Lieferung kann den richtigen Folgezeitpunkt begründen. Sie heilt die falsche ursprüngliche Periodenzuordnung nicht rückwirkend.'
  ],'Cashvergleich hilft, aber ein falscher Gewinn kann sogar mit korrekt unverändertem CFO zusammen auftreten.')
 ]),
 S('capitalization','11. Aktivierung verändert Gewinn und Cashflowausweis','g',[
  X('Eine laufende Ausgabe wird unzulässig zum Vermögenswert erklärt','Eine zahlungswirksame laufende Ausgabe 60 erfüllt im Fall keine Ansatzvoraussetzungen für ein Aktivum. Statt Sofortaufwand wird sie aktiviert und sofort über drei volle Jahre mit je 20 abgeschrieben. Die Zahlung wird zusätzlich unzutreffend als Investitionszahlung ausgewiesen; keine Steuern.',[
   'Im ersten Jahr sind Aufwand 20 statt 60 und Gewinn deshalb um 40 zu hoch. Es steht ein unbegründeter Restbuchwert 40 in der Bilanz.',
   'Die tatsächlich gezahlten 60 bleiben gleich. Im falschen Ausweis ist CFO um 60 höher und CFI um 60 niedriger als beim richtigen operativen Abfluss.',
   'Indirekte Gegenrechnung: Gewinnüberhöhung 40 plus zusätzlich zurückgenommene Abschreibung 20 erklären die CFO-Überhöhung 60.',
   'In den beiden Folgejahren belastet die falsche Aktivierung den Gewinn um je 20. Über drei Jahre ist der Gesamtaufwand gleich, sofern keine weiteren Fehler hinzukommen; die zeitliche Geschichte und Bilanz waren trotzdem falsch.'
  ],'Cash selbst lässt sich durch Umbuchung nicht erzeugen; eine einzelne Cashflowkategorie kann dennoch günstiger erscheinen.'),
  'Eine zulässige Aktivierung qualifizierender Entwicklungskosten oder einer echten Anlage ist anders zu beurteilen. Der richtige Test lautet zuerst, ob ein Vermögenswert nach dem einschlägigen Standard vorliegt. Weder die gewünschte Gewinnwirkung noch eine pauschale Bevorzugung von Sofortaufwand ersetzt diese Prüfung.'
 ]),
 S('production','12. Mehr produzieren kann Gewinn erhöhen und Liquidität belasten','g h',[
  'Bei aktivierten Produktionskosten trägt unverkaufte Ware einen Teil der zulässig zugeordneten Fixkosten in die nächste Periode. Mehr Produktion kann deshalb aktuellen Gewinn erhöhen, obwohl dieselbe Stückzahl verkauft wird. Dies ist im Modell zunächst eine Folge sachgerechter Kostenverteilung; problematisch können unnötiger Lageraufbau, fehlende Werthaltigkeit oder verschleierte Motive sein.',
  X('Ein zusätzlicher Lagerbestand ersetzt keinen zusätzlichen Kunden','Absatz 100 Stück zu 30, variable Fertigungskosten 10 je produzierter Einheit, fixe zahlungswirksame Produktionsgemeinkosten 1.000. Keine Anfangsvorräte. Normalkapazität 100; bei höherer Produktion werden insgesamt nur die tatsächlich angefallenen Fixkosten verteilt. Alle Verkäufe und Kosten sofort bezahlt, keine Steuern oder Abwertung.',[
   'Bei Produktion 100: Stückkosten 20, COGS 2.000, Bruttogewinn 1.000, Endvorrat null. Operativer Cashzufluss 3.000 − 2.000 = 1.000.',
   'Bei Produktion 200: fixe Kosten je Stück 5, gesamte Stückkosten 15. COGS der 100 Verkäufe 1.500, Bruttogewinn 1.500; die übrigen 100 Stück stehen mit 1.500 im Lager.',
   'Ausgezahlt werden jetzt variable Kosten 2.000 plus Fixkosten 1.000; CFO ist null. Gewinn steigt um 500, Cash sinkt um 1.000.',
   'Der Unterschied entspricht 1.500 zusätzlichen Vorräten. Sie benötigen spätere Nachfrage, Lagerhaltung und eine Werthaltigkeitsprüfung; der spätere Verkauf muss diese Vorgeschichte berücksichtigen.'
  ],'Eine bessere Bruttomarge kann aus Kapitalbindung entstehen, obwohl Absatz und Verkaufspreis unverändert sind.'),
  F('GP=100\\left(30-10-\\frac{1000}{Q}\\right),\\qquad CFO=3000-(10Q+1000)','Die Gleichungen variieren nur produzierte Menge Q zwischen 100 und 200; verkaufte Menge bleibt 100. Alle Aufwendungen sind im Modell bezahlt.',[['GP','Bruttogewinn der Periode in Geldeinheiten.'],['CFO','Operativer Zahlungsüberschuss unter den angegebenen Annahmen.'],['Q','Produzierte Stückzahl; mindestens Absatzmenge 100.']]),
  G({id:'production-cash',title:'Mehr Lagerproduktion: Gewinn steigt, Cash sinkt',
   caption:'Eigener Mengenfall mit unverändert 100 Verkäufen zu 30, variablen Produktionskosten 10 je Stück und fixen Gesamtkosten 1.000. Keine Steuern, Zahlungsabgrenzung oder Abwertung.',
   reading:'Zwischen 100 und 200 produzierten Einheiten steigt der Bruttogewinn von 1.000 auf 1.500, während CFO von 1.000 auf null fällt. Die Differenz beider Kurven ist der neu aufgebaute Vorratsbuchwert.',
   plot:{x:[100,200],y:[0,1650],xLabel:'Produzierte Stückzahl bei Absatz 100',yLabel:'Gewinn bzw. Cashflow',series:[
    {name:'Bruttogewinn',points:Array.from({length:21},(_,i)=>{const q=100+5*i;return [q,100*(20-1000/q)];})},
    {name:'Operativer Cashflow',dash:'5 4',points:Array.from({length:21},(_,i)=>[100+5*i,1000-50*i])}
   ],marks:[{x:200,y:1500,label:'Gewinn 1.500',dx:-10,dy:-12,anchor:'end'},{x:200,y:0,label:'Cash 0',dx:-10,dy:-14,anchor:'end'}]}})
 ]),
 S('estimates','13. Schätzungen durch Bestandsüberleitungen prüfen','c g h',[
  F('A_1=A_0+E-W','Vereinfachte Überleitung einer Forderungswertberichtigung ohne Rückflüsse, Zukäufe oder Währungseffekte. Die notwendige Endkorrektur bestimmt zusammen mit Abgängen den Periodenaufwand.',[['A_0,A_1','Wertberichtigungsbestand zu Beginn und Ende als positive Abzugsposten.'],['E','Erfasster Ausfallaufwand; eine Auflösung kann als negativer Betrag wirken.'],['W','Gegen vorhandene Wertberichtigung ausgebuchte Forderungen.']]),
  X('Niedrigerer Aufwand trotz schlechterer Forderungen','Anfangswertberichtigung 20, Forderungsausbuchungen 10. Belastbare neue Daten erfordern Endwertberichtigung 35. Management setzt ohne sachliche Grundlage nur 15 an; keine Steuern.',[
   'Sachgerechter Aufwand: 35 − 20 + 10 = 25. Berichteter Aufwand: 15 − 20 + 10 = 5.',
   'Gewinn und Nettoforderungen sind jeweils um 20 zu hoch. Die Bruttoforderung und tatsächliche Kundenzahlung werden durch diese Schätzung nicht größer.',
   'Eine Prüfung muss Altersstruktur, Ausfälle, spätere Zahlungen und relevante Wirtschaftsdaten verbinden. Ein sinkender Wertberichtigungssatz allein kann bei tatsächlich besserer Bonität angemessen sein.'
  ],'Nicht nur der neue Prozentsatz, sondern die vollständige Überleitung erklärt die Gewinnwirkung.'),
  'Analog werden verlängerte Nutzungsdauern, Restwerte, Garantieannahmen, Steuernutzbarkeit und Wertminderungsvoraussetzungen geprüft. Die Frage ist immer, welche neue Evidenz den Wechsel trägt und welche Perioden davon profitieren. Eine fachlich notwendige Schätzungsänderung ist kein Fehler, nur weil sie den Gewinn erhöht.'
 ]),
 S('cash-window','14. Zahlungsverschiebung und Klassifikation von echter Cashgenerierung trennen','a g h',[
  X('Eine gute Cashzahl kurz vor dem Bilanzstichtag','Unter normalen Zahlungsbedingungen läge CFO bei 90. Ein Unternehmen zahlt 30 fällige Lieferantenrechnungen erst nach dem Stichtag; keine Gebühren oder sonstigen Effekte.',[
   'Berichteter CFO steigt im Jahr auf 120. Cash und Lieferantenverbindlichkeiten sind beide um 30 höher.',
   'Der Gewinn ist durch die reine Zahlungsverschiebung unverändert. Die Ausgabe wurde bereits erfasst.',
   'Bei Zahlung im Folgejahr kehrt der Liquiditätseffekt um, sofern nicht wieder neue Rechnungen verschoben werden. Für eine unveränderte Normalbetriebsprognose ist 90 der passende Ausgangspunkt.',
   'Eine nachhaltig neu vereinbarte längere Zahlungsfrist ist wirtschaftlich anders als einmaliger Zahlungsverzug. Beide benötigen Angaben zu Bedingungen, Kosten und Lieferfähigkeit.'
  ],'Hoher CFO kann teilweise Kredit von Lieferanten darstellen, statt bessere Kundenmargen zu belegen.'),
  'Auch Forderungsverkäufe, Lieferantenfinanzierung, gezielter Lagerabbau oder ungewöhnliche Vorauszahlungen können Cash verändern. Rechtliche Gestaltung, Rückgriff, wirtschaftlicher Gehalt und maßgebliche Klassifikation sind einzeln zu prüfen. Die pauschale Aussage, Factoring sei stets Betrug oder stets harmlos, beantwortet keine dieser Fragen.',
  'Eine bloße Verschiebung zwischen CFO, CFI und CFF verändert die Gesamtzahlung nicht. Die Kontrollrechnung stimmt daher die Kategorien auf den gesamten Cashbestand ab und stellt daneben operative Nachhaltigkeit, verfügbare Liquidität und künftige Rückwirkungen dar.'
 ]),
 S('warning-signs','15. Warnsignale brauchen eine prüfbare Gegenhypothese','h',[
  T(['Beobachtung','Mögliche kritische Ursache','Plausible Alternative / passende Prüfung'],[
   ['Forderungen wachsen schneller als Umsatz','Zu früher Umsatz oder verschlechterte Einbringlichkeit.','Saison oder längere reguläre Zahlungsziele; Verträge, Alterung und spätere Eingänge prüfen.'],
   ['Vorräte wachsen bei sinkendem Absatz','Überproduktion oder unzureichende Abwertung.','Strategischer Sicherheitsbestand; Mengen, Lieferzeiten, spätere Verkäufe und NRV prüfen.'],
   ['Gewinn steigt, CFO fällt über mehrere Perioden','Unbare Ergebnisaufblähung oder zunehmende Kapitalbindung.','Wirtschaftlich sinnvolle Expansion; konkrete Working-Capital- und Investitionspläne nachvollziehen.'],
   ['Dauerhaft wiederkehrende Sonderbereinigungen','Laufende Kosten werden als Ausnahme behandelt.','Tatsächlich abgeschlossene Einmalprogramme; mehrjährige Überleitung und Folgezahlungen prüfen.'],
   ['Gewinn trifft auffällig knapp eine Schwelle','Schätzungen oder Transaktionen werden auf Zielwerte ausgerichtet.','Zufall oder sachgerechte Prognose; Änderungen und Freigaben um den Stichtag untersuchen.'],
   ['Unklare Geschäfte mit verbundenen Parteien','Nicht marktübliche Bedingungen oder verdeckte Verpflichtungen.','Echte wirtschaftliche Zusammenarbeit; Rechte, Preise, Rückgriff und Gegenparteien ermitteln.'],
   ['Späte Berichte, ungeklärte Kontrollmängel oder unerwartete Personalwechsel','Schwächen im Abschlussprozess.','Integration oder Systemumstellung; Gründe und Fortschritt der Behebung prüfen.']
  ],'Keine einzelne Zeile ist ein ausreichender Beweis. Mehrere unabhängige, zusammenpassende Beobachtungen erhöhen den Prüfbedarf.'),
  F('ACC=NI-CFO,\\qquad a=ACC/\\overline A','Ein einfacher Cashflow-basierter Abgrenzungsindikator vergleicht Gewinn und CFO derselben Abgrenzung. Er ist ein Suchsignal, keine universelle Betrugsschwelle.',[['ACC','Gewinn abzüglich operativem Cashflow der Periode.'],['NI','Passender Periodengewinn.'],['CFO','Operativer Cashflow nach vergleichbarer Klassifikation.'],['\\overline A','Geeignete durchschnittliche Aktiva als Skalierungsbasis.'],['a','Relativer Abgrenzungsindikator.']]),
  'Beispiel: Gewinn 100, CFO 40 und durchschnittliche Aktiva 600 ergeben ACC 60 und a = 10 %. Der Unterschied kann aus Forderungswachstum, Vorratsaufbau oder anderen Abgrenzungen stammen. Saison, Erwerbe, Geschäftsmodell und Klassifikation müssen geklärt werden; der Prozentsatz allein benennt weder Ursache noch Absicht.'
 ]),
 S('combined','16. Eine Korrektur ist etwas anderes als eine Prognosebereinigung','a f g h',[
  X('Vier Beiträge zu einem scheinbar starken Ergebnis','Berichteter Vorsteuergewinn 180 enthält: vorzeitig erfassten Umsatz 120 mit vorzeitigen Kosten 72; die unzulässige Aktivierung laufender Kosten 60 bei bereits erfasster Abschreibung 20; eine unbegründete Aufwandsentlastung 20; außerdem einen korrekt gebuchten einmaligen Anlagenverkaufsgewinn 40. Keine Wechselwirkungen. Sämtliche Ergebniskorrekturen haben im Fall einen vollen Steuereffekt von 25 %.',[
   'Fehlerkorrekturen: Umsatzfehler vermindert Gewinn um 48, Aktivierungsfehler um 40, Schätzungsfehler um 20. Korrigierter Vorsteuergewinn: 180 − 48 − 40 − 20 = 72.',
   'Die 40 aus dem Anlagenverkauf gehören weiterhin in den zutreffenden berichteten Gewinn. Sie zu löschen wäre keine Korrektur eines Buchungsfehlers.',
   'Für die ausdrücklich angenommene wiederkehrende Prognosebasis wird der Verkauf separat entfernt: 72 − 40 = 32.',
   'Nach Steuern lauten die drei Größen: ursprünglich berichtet 135, nach Fehlerkorrektur 54, wiederkehrende analytische Basis 24.',
   'Diese Basis ist nur so belastbar wie die Annahmen über Wiederholbarkeit und weitere Kosten. Die Korrekturen ändern bereits erfolgte Geldbewegungen nicht rückwirkend.'
  ],'Der Leser kann jeden Schritt einem Regelverstoß oder einer ausdrücklich begründeten Prognoseentscheidung zuordnen.'),
  'Doppelte Anpassungen sind zu vermeiden. Wer den vollständigen Aktivierungsfehler bereits korrigiert hat, darf dieselbe zu geringe Abschreibung nicht noch ein zweites Mal vom Gewinn abziehen. Eine übernommene Managementbereinigung wird deshalb erst auf ihre einzelnen Komponenten zurückgeführt.'
 ]),
 S('workflow','17. Von der Auffälligkeit zum belastbaren Urteil','d e h',[
  'Ein zweckmäßiges Verfahren beginnt beim Geschäftsmodell und den wirtschaftlichen Leistungstreibern. Danach werden vergleichbare Mehrjahresabschlüsse, Bilanzierungsmethoden, Schätzungen, Zahlungen und Anhanginformationen verbunden. Erst dann wird bewertet, welche Beobachtung mit der Geschäftserklärung nicht zusammenpasst.',
  T(['Arbeitsschritt','Konkretes Ergebnis'],[
   ['Behauptung festhalten','Zum Beispiel: Margenanstieg soll auf bessere Preise zurückgehen.'],
   ['Gegenrechnung erstellen','Stückpreise, Mengen und Kostenfolgen zerlegen; Lageraufbau separat messen.'],
   ['Alternative Erklärungen prüfen','Saison, Akquisition, Produktmix oder neue Zahlungsziele anhand von Quellen prüfen.'],
   ['Korrektur oder Szenario begründen','Nachgewiesenen Fehler von einer unsicheren Annahme und von einer freiwilligen Vergleichsanpassung trennen.'],
   ['Restunsicherheit sichtbar lassen','Bandbreite, fehlende Belege und entscheidende künftige Bestätigung benennen.'],
   ['Später nachverfolgen','Forderungseinzug, Abverkauf, Reserveauflösung und vorhergesagte Folgezahlungen vergleichen.']
  ],'Ein nachvollziehbares Urteil nennt Ursache, Beleg, Betrag und verbleibende Unsicherheit.'),
  'Ein Modell kann durch vorsichtigere Annahmen, geringeres Vertrauen in einen Teil der Daten oder ein zusätzliches Szenario auf ungeklärte Risiken reagieren. Ein willkürlicher pauschaler Abschlag ohne Verbindung zur Ursache macht die Analyse nicht automatisch sorgfältiger. Die professionelle Verantwortung umfasst auch, ungeklärte Vermutungen nicht als bewiesene Tatsachen auszugeben.'
 ])
],related:[
 {unit:'analysis-framework',section:'audit',label:'Prüfungsurteile im Kontext lesen'},
 {unit:'cashflow-preparation',section:'indirect',label:'Gewinnänderungen mit tatsächlichem Cash abstimmen'},
 {unit:'inventory',section:'cost',label:'Normale Kapazität und Fixkostenzuordnung'},
 {unit:'long-assets',section:'estimate-change',label:'Begründete Schätzungsänderung und Folgeaufwand'},
 {unit:'income-taxes',section:'valuation-allowance',label:'Steuerentlastung ohne sofortige Erstattung'},
 {unit:'standard-v',section:'basis',label:'Begründungen und Nachweise einer Empfehlung'}
],sources:[
 {title:'CFA Institute: Lernziele Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=13'},
 {title:'CFA Institute: Financial Reporting Quality, Einordnung und Lernziele',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/financial-reporting-quality'},
 {title:'IFRS Foundation: Conceptual Framework 2018, Neutralität und Vorsicht',url:'https://www.ifrs.org/content/dam/ifrs/meetings/2018/october/wss/wss5b-conceptual-framework.pdf'},
 {title:'PCAOB: AS 2401, Betrugsrisiken und Grenzen der Prüfung',url:'https://pcaobus.org/oversight/standards/auditing-standards/details/AS2401'},
 {title:'SEC: Non-GAAP Financial Measures, aktuelle Interpretationen',url:'https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures'},
 {title:'IFRS Foundation: veröffentlichter IFRS 18 und neue Transparenzanforderungen',url:'https://www.ifrs.org/news-and-events/news/2024/04/new-ifrs-accounting-standard-will-aid-investor-analysis-of-companies-financial-performance/'},
 {title:'IFRS Foundation: illustrative Beispiele für MPM-Überleitungen',url:'https://www.ifrs.org/issued-standards/ifrs-taxonomy/ifrs-taxonomy-illustrative-examples/'},
 {title:'IFRS Foundation: IAS 2 für Kosten der Bestandsproduktion',url:'https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/'}
],review:{status:'draft',date:'2026-09-25',note:'Eigene mehrperiodige Korrektur-, Reserve-, Cashflow- und Produktionsfälle. Berichtsqualität, Ergebnisqualität, Regelverstoß und Prognosebereinigung bleiben getrennt.'}};
