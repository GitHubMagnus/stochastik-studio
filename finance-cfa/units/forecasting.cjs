const {F,T,X,S,G}=require('../author.cjs');
// Include the exact kink so SVG interpolation preserves the financing threshold.
const receivableShares=[...Array.from({length:41},(_,i)=>5+i*.5),(204.75-30)/11].sort((a,b)=>a-b);
module.exports={id:'forecasting',intro:[
 'Ein Abschlussmodell übersetzt eine wirtschaftliche Geschichte in Zahlen, die miteinander übereinstimmen müssen. Mehr Absatz benötigt häufig mehr Vorräte, Forderungen und Kapazität. Die Finanzierung dieses Wachstums beeinflusst Zinsen und Cash. Ein Modell mit gutem Gewinn kann deshalb gleichzeitig einen Kreditbedarf zeigen.',
 'Der eigene Fall der Atlas GmbH verbindet alle drei Abschlüsse bis zur ausgeglichenen Schlussbilanz. Anschließend werden Zahlungsgeschwindigkeit, Finanzierung, Wettbewerb, Inflation und langfristige Annahmen verändert. Jede Prozentannahme besitzt eine benannte Bezugsgröße; eine ausgeglichene Bilanz allein beweist noch keine realistische Prognose.'
],sections:[
 S('architecture','1. Eine wirtschaftliche Ursache durch das gesamte Modell verfolgen','a',[
  T(['Modellschritt','Wirtschaftliche Frage','Verknüpfung'],[
   ['Umsatztreiber','Welche Mengen werden zu welchen Preisen verkauft?','Erlös, Forderungen, Kapazitätsbedarf.'],
   ['Kosten und Investitionen','Welche Ressourcen werden für diese Leistung gebraucht?','Marge, Vorräte, Anlagenzugänge und spätere Abschreibung.'],
   ['Operative Kapitalbindung','Wann zahlen Kunden, wann wird produziert und wann werden Lieferanten bezahlt?','Working Capital und operativer Cashflow.'],
   ['Finanzierung und Ausschüttung','Reicht vorhandenes Geld, und welche Mittel sind tatsächlich verfügbar?','Neue Schulden, Eigenkapital, Zinsen und Dividenden.'],
   ['Abschlusskontrolle','Stimmen Anfangsbestände, Veränderungen und Endbestände überein?','Bilanzgleichung, Ergebnisverwendung und Cashbrücke.']
  ],'Die Reihenfolge folgt Ursachen. Eine beliebige Endbilanz wird nicht durch eine unsichtbare Restbuchung passend gemacht.'),
  'Pro forma bedeutet hier eine unter expliziten Annahmen projizierte Rechnung. Das Wort kann andernorts auch bereinigte historische Informationen bezeichnen. Eine Prognose wird daher immer mit Zweck, Zeithorizont, Rechnungslegungsbasis, Währung und Annahmen beschriftet.',
  'Für eine Kreditprüfung zählen kurzfristige Fälligkeiten und verfügbare Linien stärker, für eine Unternehmensbewertung langfristige operative Cashflows. Dasselbe Geschäftsmodell kann dafür unterschiedlich detaillierte zeitliche Auflösung benötigen.'
 ]),
 S('historical-base','2. Die Ausgangsbasis bereinigen, ohne Geschichte umzuschreiben','a',[
  'Zuerst werden historische Abschlüsse nach Einheiten, Vorzeichen und Zeitraum abgestimmt. Änderungen des Konsolidierungskreises, Geschäftsjahreslängen, Währungen, Bilanzierungsmethoden und Klassifikationen können scheinbares Wachstum erzeugen. Ein einmaliger Anlagenverkauf eignet sich nicht als unveränderter Treiber künftiger Produktmargen.',
  X('Eine normalisierte Marge braucht eine erklärte Überleitung','Gemeldeter operativer Gewinn 140 bei Umsatz 1.000 enthält einen klar identifizierten einmaligen Gewinn 30 und einmaligen Aufwand 10. Beide werden für die gegebene Prognose entfernt.',[
   'Normalisierter operativer Gewinn: 140 − 30 + 10 = 120.',
   'Normalisierte operative Marge: 120/1.000 = 12 % statt gemeldeter 14 %.',
   'Die frühere Gewinnrechnung wird dadurch nicht für falsch erklärt. Das Modell dokumentiert separat, welche Teile nicht wieder erwartet werden.',
   'Eine regelmäßig wiederkehrende Restrukturierung darf nicht allein aufgrund ihres Etiketts jedes Jahr vollständig verschwinden.'
  ],'Die Prognosebasis ist ein analytisches Urteil mit Gegenrechnung, keine pauschal immer günstigere Managementzahl.'),
  'Eingaben und Formeln bleiben unterscheidbar. Historische Ist-Zahlen, externe Annahmen und aus anderen Größen berechnete Ergebnisse werden im Arbeitsmodell getrennt geführt. So wird erkennbar, ob ein unerwartetes Ergebnis aus einer Annahme oder aus einer fehlerhaften Verknüpfung kommt.'
 ]),
 S('sales-drivers','3. Umsatz in Preis, Menge und Mix zerlegen','a d',[
  F('S_t=\\sum_{j=1}^{m}P_{j,t}Q_{j,t}','Mehrere Produkte werden zuerst einzeln mit passender Einheit gerechnet und anschließend addiert. Ein veränderter Durchschnittspreis kann auch aus anderem Produktmix stammen.',[['S_t','Gesamtumsatz in Periode t.'],['P_{j,t}','Durchschnittlich realisierter Nettoverkaufspreis je Einheit des Produkts j.'],['Q_{j,t}','Verkaufte Menge dieses Produkts.'],['j,m,t','Produktindex, Anzahl der Produktgruppen und Periodenindex.']]),
  F('1+g_S=(1+g_P)(1+g_Q),\\qquad g_S=g_P+g_Q+g_Pg_Q','Für ein homogenes Produkt ist die Umsatzänderung das Produkt der Preis- und Mengenfaktoren. Das bloße Addieren lässt den Kreuzterm weg.',[['g_S,g_P,g_Q','Relative Umsatz-, Preis- und Mengenänderung derselben Periode und Abgrenzung.']]),
  X('Preis und Menge wachsen gleichzeitig','Ein Produkt erzielt bislang 1.000 Umsatz. Die Menge steigt um 6 %, der realisierte Preis um 4 %; kein anderer Effekt.',[
   'Neuer Umsatz: 1.000 × 1,06 × 1,04 = 1.102,40.',
   'Wachstum: 10,24 %, nicht genau 10 %. Die Differenz 0,24 Prozentpunkte ist der zusätzliche Preiseffekt auf die ebenfalls gewachsene Menge.',
   'Bei mehreren Produkten können höherpreisige Produkte stärker wachsen. Dann ist der Umsatzanstieg nicht automatisch ein Nachweis von Preiserhöhungen innerhalb der einzelnen Produkte.'
  ],'Mengen, Preise, Mix, Zukäufe und Wechselkurse werden möglichst getrennt modelliert.'),
  'Ein Unternehmen kann seine Preise nicht beliebig unabhängig von Mengen anheben. Kundenausweichmöglichkeiten, Kapazität, Verträge und Wettbewerb müssen die Kombination tragen. Andernfalls entstehen gleichzeitig optimistische Preis- und Absatzannahmen ohne gemeinsame wirtschaftliche Grundlage.'
 ]),
 S('industry-company','4. Markt- und Unternehmensprognose miteinander abgleichen','a c d',[
  'Ein Top-down-Ansatz beginnt bei Marktgröße und Marktanteil; ein Bottom-up-Ansatz bei Unternehmensmengen, Standorten, Kapazitäten, Kunden oder Verträgen. Die Ansätze sind Gegenprüfungen. Eine Branchenprognose braucht die passende Region, Produktdefinition und nominale beziehungsweise reale Basis.',
  X('Marktwachstum und Marktanteil addieren sich nicht einfach','Ein in Geldeinheiten abgegrenzter Markt wächst von 10.000 auf 10.500. Der wertmäßige Unternehmensanteil steigt von 8 % auf 9 %.',[
   'Bisheriger Umsatz: 10.000 × 8 % = 800. Neuer Umsatz: 10.500 × 9 % = 945.',
   'Unternehmenswachstum: 945/800 − 1 = 18,125 %. Der Anteil steigt um einen Prozentpunkt, relativ aber um 12,5 %.',
   'Die gleiche Prognose muss zu lieferbarer Menge, Produktionskapazität und Vertrieb passen. Wenn eine Mengenrechnung nur Umsatz 880 plausibel macht, wird die Abweichung untersucht.',
   'Ein wertmäßiger Anteil darf nicht mit einem mengenmäßigen Anteil vertauscht werden, wenn die Preise vom Markt abweichen.'
  ],'Der Abgleich entdeckt inkonsistente Annahmen früher als eine bloße Ausgleichsrechnung am Ende.'),
  'Auch eine Konjunkturprognose ist nur ein Treiber. Luxusgüter, Grundbedarf und langfristige Vertragsumsätze reagieren unterschiedlich. Ein unverändertes Vielfaches des BIP-Wachstums braucht eine belastbare Branchenbegründung und darf nicht gleichzeitig nochmals als eigener Mengeneffekt hinzugefügt werden.'
 ]),
 S('cost-drivers','5. Kosten folgen ihren Treibern, nicht pauschal dem Umsatz','a c d',[
  F('EBIT=PQ-vQ-F-D','Das einfache Modell trennt variable Stückkosten, feste zahlungswirksame Betriebskosten und Abschreibung. Es gilt innerhalb eines Bereichs ohne zusätzliche Kapazitätssprünge.',[['EBIT','Operativer Gewinn vor Zinsen und Ertragsteuern.'],['P,Q','Nettoverkaufspreis je Einheit und verkaufte Menge.'],['v','Variable Kosten je verkaufter Einheit.'],['F','Fixe zahlungswirksame Betriebskosten der Periode.'],['D','Planmäßige Abschreibung und Amortisation derselben Abgrenzung.']]),
  X('Eine konstante Kostenquote übersieht den Fixkosteneffekt','Preis 100, variable Stückkosten 60, Absatz 100, fixe Kosten 2.000 und Abschreibung 500. Preise und Stückkosten bleiben gleich; Absatz steigt auf 110.',[
   'Alter EBIT: 10.000 − 6.000 − 2.000 − 500 = 1.500.',
   'Neuer EBIT: 11.000 − 6.600 − 2.000 − 500 = 1.900. Absatz wächst 10 %, EBIT dagegen 26,6667 %.',
   'Eine pauschale Erhöhung sämtlicher Kosten um 10 % würde den konstanten Fixkostenblock ignorieren.',
   'Erfordert die neue Menge eine zweite Schicht, teurere Wartung oder einen zusätzlichen Standort, sind die Fixkosten möglicherweise nicht mehr konstant.'
  ],'Der operative Hebel erklärt stärkere Ergebnisschwankung, garantiert aber keine dauerhaft kostenlose Kapazität.'),
  'Personalzahl, Lohnsatz, Energieverbrauch, Rohstoffpreis und Vertriebskanäle können eigene Treiber benötigen. Bei Banken, Versicherern oder Immobilienunternehmen sind andere Größen als die Produktionsmenge maßgeblich. Modellstruktur folgt Geschäftsmodell und verfügbarer Information.'
 ]),
 S('atlas-inputs','6. Atlas: überprüfbare Ausgangsbilanz und Annahmen','a',[
  'Alle folgenden Atlas-Beträge sind in Mio. Euro. Der Umsatz des Vorjahres beträgt 1.000. Die vereinfachte Anfangsbilanz enthält ausschließlich die aufgeführten Positionen. Es gibt keine Zukäufe, Währungseffekte, Wertminderungen, Leasingzugänge, latenten Steuern oder weiteren Bestandsbewegungen.',
  T(['Anfangsbilanz','Aktiva','Passiva'],[
   ['Cash','50',''],['Forderungen','100',''],['Vorräte','120',''],['Sachanlagen netto','300',''],
   ['Lieferantenverbindlichkeiten','','80'],['Finanzschulden','','200'],['Eigenkapital','','290'],
   ['Summe','570','570']
  ],'Die Anfangsbilanz ist ausgeglichen; alle Endwerte werden durch nachvollziehbare Bewegungen aufgebaut.'),
  T(['Prognoseeingabe','Annahme','Begründungsrolle'],[
   ['Umsatz','1.100','Im Fall begründet angenommene 10 % Zunahme.'],
   ['Umsatzkosten ohne Abschreibung','60 % des Umsatzes','Vereinfachte konstante Produktkostenquote.'],
   ['Sonstige zahlungswirksame Betriebskosten','20 % des Umsatzes','Im Fall proportionale Kosten; keine universelle Fixkostenannahme.'],
   ['Forderungen / Vorräte / Lieferantenverbindlichkeiten','10 % / 12 % / 8 % des Umsatzes','Explizite Endbestandsannahmen; keine Behauptung über exakte DSO, DIO oder DPO.'],
   ['Investitionszahlung und Zugang','70','Vollständig bezahlt, keine Abgänge.'],
   ['Abschreibung alter Anlagen','40','Aus der bestehenden Anlagenplanung.'],
   ['Neue Anlagen','Sieben Jahre linear, Restwert null, im Mittel zur Jahresmitte verfügbar','Daraus folgt zusätzliche Halbjahresabschreibung 5.'],
   ['Zins','5 % auf anfängliche Schulden 200','Neue Kredite würden erst am Jahresende aufgenommen.'],
   ['Steuer','25 % des positiven Vorsteuergewinns, sofort bezahlt','Buch- und Steuerbasis im Fall gleich; Zins vollständig abzugsfähig.'],
   ['Dividende / Mindestcash am Jahresende','40 / 30','Feste Ausschüttung und explizites Liquiditätsziel.']
  ],'Jede Bezugsgröße ist angegeben. Die vereinfachten Quoten müssen in echten Prognosen wirtschaftlich begründet werden.')
 ]),
 S('atlas-assets','7. Anlagenzugang und Abschreibung getrennt planen','a',[
  F('D_t=D_{old,t}+\\frac{I_t-RV_{new}}{n_{new}}\\,w_t,\\qquad PPE_t=PPE_{t-1}+I_t-D_t','Im Atlas-Grundfall entstehen nur vollständig bezahlte neue Anlagen. Der Zeitanteil steuert deren erste Abschreibung; in einer echten Anlagenplanung werden Zugänge nach Jahrgängen getrennt fortgeführt.',[['D_t,D_{old,t}','Gesamte Abschreibung und Abschreibung des Altbestands in Jahr t.'],['I_t','Anlagenzugang und im Fall identische Investitionszahlung.'],['RV_{new},n_{new}','Restwert und Nutzungsdauer der neuen Anlagen.'],['w_t','In der Periode genutzter Anteil eines vollen Jahres, zwischen null und eins.'],['PPE_t,PPE_{t-1}','Nettoanlagenbuchwert am Ende beziehungsweise Anfang.']]),
  'Atlas: Neue Jahresabschreibung bei voller Nutzung wäre 70/7 = 10. Bei durchschnittlich halbem Nutzungsjahr sind es 5. Zusammen mit 40 aus dem Altbestand ergibt das 45. Endanlagen: 300 + 70 − 45 = 325.',
  'Die Auszahlung 70 ist nicht derselbe Betrag wie der Aufwand 45. Wer 70 als Aufwand und zusätzlich 45 Abschreibung abzieht, zählt Kosten doppelt. Wer die neue Anlage erst am Jahresende anschafft, darf ohne entsprechende Nutzungszeit nicht dieselbe Halbjahresabschreibung ansetzen.',
  'Ab dem Folgejahr ist die neue Anlage grundsätzlich ein volles Jahr in der Planung. Ersatzinvestitionen, technische Lebensdauer und Buchabschreibung müssen nicht zeitlich zusammenfallen. Eine ewige Gleichsetzung von Capex und Abschreibung ist bei wachsender oder inflationsbedingt teurerer Kapazität oft unplausibel.'
 ]),
 S('atlas-income','8. Die Gewinnrechnung entsteht aus den Treibern','a',[
  T(['Atlas Jahr 1','Rechnung','Betrag'],[
   ['Umsatz','Vorgabe','1.100'],
   ['Umsatzkosten ohne Abschreibung','1.100 × 60 %','−660'],
   ['Sonstiger zahlungswirksamer Betriebsaufwand','1.100 × 20 %','−220'],
   ['Abschreibung','40 + 5','−45'],
   ['EBIT','1.100 − 660 − 220 − 45','175'],
   ['Zinsaufwand','200 × 5 %','−10'],
   ['Vorsteuergewinn','175 − 10','165'],
   ['Ertragsteuer','165 × 25 %','−41,25'],
   ['Nettogewinn','165 − 41,25','123,75']
  ],'Abschreibung steht im Fall separat und ist nicht nochmals in der 60-%-Quote enthalten.'),
  'Dividenden sind keine Aufwendungen in dieser Gewinnrechnung. Sie verändern Cash und Eigenkapital nach der Gewinnentstehung. Kreditaufnahme ist ebenfalls kein Umsatz, Tilgung kein betrieblicher Aufwand. Diese Trennung verhindert, dass Finanzierung scheinbar profitables Geschäft erzeugt.',
  'Für die operative Marge ist 175/1.100 ≈ 15,9091 % relevant; für die Nettomarge 123,75/1.100 = 11,25 %. Ein anderes Finanzierungsverhältnis kann die zweite Quote ändern, ohne die operative Leistung entsprechend zu verändern.'
 ]),
 S('working-capital','9. Wachstum bindet Mittel in Beständen','a',[
  F('NWC_t=AR_t+Inv_t-AP_t,\\qquad\\Delta NWC=NWC_t-NWC_{t-1}','Das vereinfachte operative Working Capital enthält hier ausschließlich Forderungen, Vorräte und Lieferantenverbindlichkeiten. Cash und verzinsliche Schulden sind ausgeschlossen.',[['NWC_t','Operative Nettokapitalbindung am Ende der Periode.'],['AR_t,Inv_t,AP_t','Forderungen, Vorräte und Lieferantenverbindlichkeiten.'],['\\Delta NWC','Zunahme der Nettokapitalbindung; positiv bedeutet im Fall Mittelbindung.'],['t','Periodenindex.']]),
  T(['Atlas-Position','Anfang','Ende','Veränderung und Cashwirkung'],[
   ['Forderungen','100','110','+10 bindet Cash.'],
   ['Vorräte','120','132','+12 bindet Cash.'],
   ['Lieferantenverbindlichkeiten','80','88','+8 finanziert einen Teil der Bindung.'],
   ['Netto','140','154','+14 ist im CFO abzuziehen.']
  ],'Nicht die Endbestände 110, 132 und 88 werden vom Gewinn abgezogen, sondern ihre passenden Periodenveränderungen.'),
  'Für eine genauere Prognose werden die Treiber getrennt: Forderungen hängen an Kreditumsatz und Zahlungszielen, Vorräte an Absatz- und Produktionsplanung und Lieferantenverbindlichkeiten an Käufen auf Ziel. Eine Umsatzquote ist eine Vereinfachung, die bei veränderten Margen oder Lieferbedingungen überprüft werden muss.',
  F('Purch=COGS+Inv_1-Inv_0','Ohne Abwertungen, nicht zahlungswirksame Zugänge und weitere Bewegungen verbinden Einkäufe den Verbrauch mit dem neuen Lagerbestand. Im Atlas-Fall sind COGS ausdrücklich ohne separat gezeigte Abschreibung abgegrenzt.',[['Purch','Periodeneinkäufe der betrachteten Waren bzw. vereinfachten Produktionskosten.'],['COGS','Im Absatz verbrauchte Kosten derselben Basis.'],['Inv_0,Inv_1','Anfangs- und Endvorräte.']]),
  'Tageskennzahlen mit Durchschnittsbeständen dürfen nicht ungeprüft wie Endbestandsregeln eingesetzt werden. Wenn eine Aufgabe durchschnittliche Forderungen vorgibt, muss die Gleichung mit Anfangs- und Endwert gelöst werden. Saisonale Verläufe können sogar einen Zweipunktdurchschnitt unzureichend machen.'
 ]),
 S('atlas-cash','10. Gewinn in direkte und indirekte Zahlungen überleiten','a',[
  F('CFO=NI+D-\\Delta NWC,\\qquad C_{pre}=C_0+CFO-I-Div','Diese einfache Brücke gilt für den Atlas-Fall mit bezahlten operativen Kosten, Zinsen und Steuern sowie ohne andere unbare Posten. Investitionen und Dividenden folgen danach; neue Finanzierung ist noch nicht enthalten.',[['CFO','Operativer Cashflow einschließlich bezahlter Zinsen und Steuern im gewählten Ausweis.'],['NI,D','Nettogewinn und nicht zahlungswirksame Abschreibung.'],['\\Delta NWC','Operative Nettobestandszunahme.'],['C_0,C_{pre}','Anfänglicher Cashbestand und Endcash vor zusätzlicher Finanzierung.'],['I,Div','Investitionsauszahlung und Dividendenzahlung.']]),
  'Indirekt: 123,75 + 45 − 14 = 154,75 CFO. Danach 50 + 154,75 − 70 − 40 = 94,75 Endcash. Die Mindestanforderung 30 ist erfüllt; in diesem Grundfall ist keine zusätzliche Kreditaufnahme nötig.',
  T(['Direkte Kontrollrechnung','Rechnung','Cash'],[
   ['Kundeneinzahlungen','1.100 + 100 − 110','1.090'],
   ['Einkäufe','660 + 132 − 120','672'],
   ['Lieferantenzahlungen','672 + 80 − 88','−664'],
   ['Sonstiger Betriebsaufwand','Sofort bezahlt','−220'],
   ['Zinsen','Sofort bezahlt','−10'],
   ['Ertragsteuern','Sofort bezahlt','−41,25'],
   ['Operativer Saldo','1.090 − 664 − 220 − 10 − 41,25','154,75']
  ],'Die Einkaufszeile 672 ist ein Zwischenschritt, keine zusätzliche zweite Auszahlung.'),
  'Die Klassifikation ist Teil der Modellkonvention. Ein anderer zulässiger Zinsausweis verändert Kategorien und Überleitung, aber nicht die tatsächlichen Gesamtzahlungen. Für Berichte nach IFRS 18 sind die geänderten Ausweisregeln und einschlägigen Geschäftsmodellausnahmen separat anzuwenden.'
 ]),
 S('atlas-balance','11. Die Schlussbilanz kontrolliert das gesamte Modell','a',[
  F('E_1=E_0+NI-Div','Im Fall ohne neue Eigenkapitalemission, Rückkauf, OCI oder andere direkte Eigenkapitalbewegungen ergibt sich die Schlussposition aus Gewinn und Ausschüttung.',[['E_0,E_1','Eigenkapital zu Beginn und Ende.'],['NI,Div','Periodengewinn und Dividenden.']]),
  T(['Atlas-Endbilanz','Aktiva','Passiva'],[
   ['Cash','94,75',''],['Forderungen','110',''],['Vorräte','132',''],['Sachanlagen netto','325',''],
   ['Lieferantenverbindlichkeiten','','88'],['Finanzschulden','','200'],['Eigenkapital: 290 + 123,75 − 40','','373,75'],
   ['Summe','661,75','661,75']
  ],'Cash stammt aus den tatsächlichen Strömen, Eigenkapital aus der Ergebnisverwendung; die Gleichheit wird kontrolliert.'),
  'Eine Differenz ist zunächst ein Fehlersignal. Häufige Ursachen sind vergessene Abschreibung, falsches Vorzeichen einer Bestandsbewegung, Dividenden als Aufwand oder doppelt erfasste Investitionen. Ein beliebiger „sonstiger Vermögenswert“ als Ausgleich würde die Ursache verdecken.',
  'Auch perfekte Bilanzgleichheit beweist nur rechnerische Konsistenz. Zu hohe Preise, nicht lieferbare Mengen oder ein tatsächlich nicht verfügbarer Kredit können weiterhin ein wirtschaftlich unmögliches Szenario ergeben.'
 ]),
 S('funding','12. Derselbe Gewinn kann zusätzlichen Kredit benötigen','a',[
  X('Kunden zahlen langsamer, obwohl der Umsatz gleich bleibt','Alle Atlas-Annahmen bleiben unverändert, außer Endforderungen: Sie betragen nun 20 % statt 10 % des Umsatzes. Mindestcash 30; zusätzliche Kredite können im Fall am Jahresende ohne aktuelle Zinswirkung aufgenommen werden.',[
   'Forderungen steigen auf 220. Gegenüber dem Grundfall fehlen 110 Kundenzahlungen. Gewinn bleibt 123,75, weil der Fall keine zusätzlichen Ausfälle oder Preisänderungen annimmt.',
   'Netto-Working-Capital-Zuwachs: 120 Forderungen + 12 Vorräte − 8 Lieferantenverbindlichkeiten = 124.',
   'CFO: 123,75 + 45 − 124 = 44,75. Cash vor neuer Finanzierung: 50 + 44,75 − 70 − 40 = −15,25.',
   'Um Cash 30 zu erreichen, werden 45,25 neue Schulden benötigt. Endschulden sind 245,25; Cash 30.',
   'Schlussbilanz: 30 + 220 + 132 + 325 = 707 Aktiva; 88 + 245,25 + 373,75 = 707 Passiva.'
  ],'Die größere Forderung und der höhere Kredit finanzieren dieselbe bereits berichtete Gewinnhöhe.'),
  F('B=\\max(0,C_{min}-C_{pre}),\\qquad C_1=C_{pre}+B','Diese einfache Finanzierungsvorschrift setzt verfügbare Kreditkapazität und keine aktuelle Rückwirkung der neuen Kreditaufnahme voraus. Sie tilgt einen Überschuss nicht automatisch.',[['B','Zusätzlich aufzunehmender Kredit am Jahresende.'],['C_{min}','Vorgegebener Mindestcashbestand.'],['C_{pre}','Rechnerischer Endcash vor Zusatzfinanzierung.'],['C_1','Cash nach Zusatzfinanzierung.']]),
  'Ein negatives C_pre ist ein ungedeckter Bedarf im Modell, kein physischer Bargeldbestand. Ist die Linie begrenzt oder nicht verfügbar, müssen beispielsweise Ausschüttung, Investitionen, Zahlungsziele oder Eigenkapitalfinanzierung angepasst werden. Der Kredit darf nicht als unbegrenzt verfügbarer stiller Restposten behandelt werden.'
 ]),
 S('circularity','13. Wenn neuer Kredit selbst neue Zinsen erzeugt','a',[
  'Atlas vermeidet im Grundfall eine Zirkularität, indem neue Schulden erst am Jahresende aufgenommen werden. Bei Finanzierung im Jahresverlauf erzeugt zusätzlicher Kredit jedoch Zinsen. Nach Steuern verringern sie Cash und erhöhen damit nochmals den Kreditbedarf. Einfach nur einmal die ursprüngliche Lücke zu finanzieren kann dann nicht genügen.',
  F('B=K+w\\,i(1-\\tau)B,\\qquad B=\\frac{K}{1-w\\,i(1-\\tau)}','Für einen positiven Ausgangsbedarf K und einen konstanten durchschnittlichen Nutzungsanteil w kann die Zirkularität algebraisch gelöst werden. Die vereinfachte Lösung benötigt einen positiven Nenner und vollständig nutzbaren aktuellen Steuerabzug.',[['B','Gesamter zusätzlicher Kreditbedarf inklusive eigener Zinsrückwirkung.'],['K','Finanzierungsbedarf vor Zinsen auf den neuen Kredit.'],['w','Durchschnittlich im Jahr zinspflichtiger Anteil des neuen Kredits.'],['i','Jährlicher Kreditzins als Dezimalzahl.'],['\\tau','Sofort wirksamer Ertragsteuersatz auf den zusätzlichen Zinsabzug.']]),
  X('Eine Lücke von 40 erfordert mehr als 40 Kredit','Bedarf vor neuen Zinsen 40, durchschnittliche Inanspruchnahme eines halben Jahres, Zins 8 %, sofort nutzbarer Steuersatz 25 %; keine Gebühren oder sonstigen Änderungen.',[
   'Nettozinsanteil am Kredit: 0,5 × 8 % × 75 % = 3 %.',
   'Kredit: 40/(1 − 0,03) ≈ 41,2371.',
   'Bruttozins: 41,2371 × 0,5 × 8 % ≈ 1,6495; Steuervorteil ≈ 0,4124; zusätzliche Nettobelastung ≈ 1,2371.',
   'Gegenprobe: Kredit 41,2371 minus Nettozins 1,2371 deckt die ursprüngliche Lücke 40.'
  ],'Die algebraische Lösung macht die Rückkopplung transparent. Iteration ohne Konvergenz- und Plausibilitätskontrolle würde sie nur verstecken.'),
  'Bei saisonaler Inanspruchnahme, gestaffelten Zinsen, Gebühren, Covenants oder nicht nutzbarem Steuerabzug ist eine detailliertere Zeitplanung nötig. Der vorgegebene Anteil w ist dann kein frei wählbarer Rechentrick, sondern muss zur tatsächlichen Zahlungsfolge passen.'
 ]),
 S('funding-figure','14. Eine einzelne Zahlungsannahme erzeugt eine Finanzierungsschwelle','a',[
  G({id:'receivables-funding',title:'Langsamere Kundenzahlung verbraucht Cash und löst Kreditbedarf aus',
   caption:'Atlas-Fall: Nur Endforderungen als Anteil am Jahresumsatz 1.100 variieren. Mindestcash 30, neue Kreditaufnahme erst am Jahresende und im Modell ausreichend verfügbar. Gewinn bleibt 123,75.',
   reading:'Bei 10 % Endforderungen sind 94,75 Cash vorhanden. Ab etwa 15,8864 % würde Cash unter 30 fallen; die Kreditlinie wird benötigt. Bei 20 % betragen der ungedeckte Endcash −15,25 und der neue Kredit 45,25. Die Linie ersetzt fehlende Kundenzahlungen, sie erhöht nicht den Gewinn.',
   plot:{x:[5,25],y:[-90,180],xTicks:[5,10,15,20,25],xLabel:'Endforderungen in % des Jahresumsatzes',yLabel:'Cash bzw. neuer Kredit in Mio. Euro',series:[
    {name:'Cash vor neuer Finanzierung',dash:'5 4',points:receivableShares.map(p=>[p,204.75-11*p])},
    {name:'Cash nach Finanzierung',points:receivableShares.map(p=>[p,Math.max(30,204.75-11*p)])},
    {name:'Neue Kreditaufnahme',points:receivableShares.map(p=>[p,Math.max(0,11*p-174.75)])}
   ],marks:[{x:10,y:94.75,label:'94,75 Cash',dx:8,dy:-12},{x:20,y:45.25,label:'45,25 Kredit',dx:8,dy:-14},{x:20,y:-15.25,label:'−15,25 vor Kredit',dx:-8,dy:20,anchor:'end'}]}}),
  F('\\alpha^*=\\frac{204{,}75-30}{1100}\\approx15{,}8864\\%','Die Schwelle folgt aus dem Cash vor Finanzierung: 204,75 minus Umsatz 1.100 mal Forderungsanteil. Sie ist spezifisch für die konstant gehaltenen übrigen Atlas-Annahmen.',[['\\alpha^*','Maximaler Endforderungsanteil am Jahresumsatz, bei dem Mindestcash ohne neuen Kredit gerade erreicht wird.']]),
  'Eine solche Sensitivität verändert genau eine Größe. In einer Krise können zugleich Absatz, Zahlungsdauer, Ausfallquote und Finanzierungskonditionen schlechter werden. Dann reicht eine einzelne Kurve nicht; ein gemeinsames Szenario muss alle betroffenen Treiber ändern.'
 ]),
 S('competition','15. Wettbewerb in konkrete Preis- und Kostenannahmen übersetzen','c',[
  T(['Porter-Kraft','Übertragungsweg im Modell','Zu prüfende eigene Annahme'],[
   ['Verhandlungsmacht der Kunden','Rabatte, zusätzlicher Service, Zahlungsziele.','Kann Atlas höhere Preise halten, ohne Menge oder Cash zu verlieren?'],
   ['Verhandlungsmacht der Lieferanten','Einkaufspreise, Mindestmengen, Vorauszahlung.','Bleibt die 60-%-Kostenquote bei knappem Material realistisch?'],
   ['Neue Wettbewerber','Zusätzliche Kapazität und Aufwand zur Kundenbindung.','Wie lange tragen Eintrittsbarrieren die angenommene Marge?'],
   ['Ersatzprodukte','Andere Lösungen für denselben Kundenbedarf begrenzen den Preis.','Wird die Preisannahme durch ein günstigeres alternatives Angebot begrenzt?'],
   ['Rivalität bestehender Anbieter','Preiswettbewerb, Werbung, Produktentwicklung.','Wachsen Kosten zum Schutz des Marktanteils schneller als der Umsatz?']
  ],'Die Kräfte liefern Prüfungen für Modellgrößen; aus einem Etikett wie „hohe Rivalität“ folgt noch kein präziser Prozentsatz.'),
  X('Ein weiterer Großkunde ist nicht nur zusätzliches Umsatzvolumen','Ein Großkunde würde 20 % mehr Menge kaufen, verlangt aber 5 % Rabatt auf sämtliche betroffenen Einheiten und längere Zahlungsziele.',[
   'Schon der Umsatzfaktor ist 1,20 × 0,95 = 1,14, also 14 % mehr Umsatz statt 20 %.',
   'Die Marge hängt zusätzlich davon ab, ob variable Stückkosten und erforderliche Kapazität unverändert bleiben.',
   'Längere Zahlungsziele können Forderungen und Kreditbedarf erhöhen. Ein günstiger Gewinnbeitrag muss deshalb nicht gleichzeitig einen günstigen kurzfristigen Cashbeitrag erzeugen.'
  ],'Eine Wettbewerbsannahme wirkt oft auf mehrere Abschlüsse. Diese Wirkungen dürfen nicht unabhängig optimiert werden.'),
  'Eintrittsbarrieren können überdurchschnittliche Renditen länger schützen, garantieren aber keine ewige Unveränderlichkeit. Technik, Regulierung, Kundenpräferenzen und Verhalten anderer Anbieter können die Position verändern.'
 ]),
 S('inflation','16. Inflation und Deflation wirken auf Preise, Kosten und Ersatzkapital','d',[
  X('Nominaler Umsatz steigt, obwohl die Stückmarge fällt','Bei konstanten Mengen steigt der Verkaufspreis von 100 um 5 %, während variable Stückkosten von 60 um 10 % steigen. Sonstige Effekte zunächst ausgeschlossen.',[
   'Neuer Preis 105, neue variable Kosten 66. Der Deckungsbeitrag je Stück fällt von 40 auf 39.',
   'Die zugehörige Marge fällt von 40 % auf 39/105 ≈ 37,1429 %. Nominales Umsatzwachstum allein zeigt deshalb keine bessere Ertragskraft.',
   'Steigen zusätzlich fixe Kosten, verschlechtert sich der operative Gewinn weiter. Gelingt eine spätere Preisanpassung, muss ihr Zeitpunkt zum Kostenanstieg passen.'
  ],'Outputpreise und Inputpreise besitzen unterschiedliche Änderungsraten und Vertragsverzögerungen.'),
  'Historische Lagerkosten können die Ergebniswirkung verzögern. Bei Deflation kann ein Verkaufspreis auf 90 fallen, während noch alte Stückkosten 60 verbraucht werden: aktueller Stückertrag 30. Neue Beschaffung zu 50 ermöglicht später 40 Stückertrag, sofern Verkaufspreis und übrige Bedingungen gleich bleiben. Kostenflussmethode und nötige Abwertungen sind gesondert zu prüfen.',
  'Anlagenbuchwerte beruhen teilweise auf alten Preisen; Ersatzanlagen können teurer sein. Deshalb kann Ersatz-Capex die historische Abschreibung übersteigen, auch ohne reale Kapazitätserweiterung. Nominale Prognosen enthalten passende Preisänderungen; reale Prognosen und Diskontsätze müssen dazu konsistent abgegrenzt werden.',
  F('1+g_{nom}=(1+g_{real})(1+\\pi)','Für den ausdrücklich einheitlich definierten Preisindex verbindet der Wachstumsfaktor reale Mengenentwicklung und Preisentwicklung. Ein Unternehmen benötigt häufig getrennte Indizes für Absatz, Einkauf und Löhne.',[['g_{nom},g_{real}','Nominale und reale Änderung derselben Größe.'],['\\pi','Passende Preisänderung der betrachteten Periode.']])
 ]),
 S('biases','17. Prognoseverzerrungen durch konkrete Verfahren begrenzen','b',[
  T(['Verzerrung','Beispiel im Modell','Gegenmaßnahme'],[
   ['Verankerung','Die erste Managementprognose von 20 % Wachstum bleibt Ausgangspunkt jeder kleinen Änderung.','Eigene Mengen- und Preisrechnung vor Übernahme der Managementzahl aufbauen.'],
   ['Bestätigungsfehler','Nur Kundenkommentare auswählen, die zur gewünschten Expansion passen.','Vorab festlegen, welche Beobachtung die These widerlegen würde; Gegenbelege systematisch prüfen.'],
   ['Überkonfidenz','Sehr enge Ergebnisbandbreite trotz unsicherer Preise und Kundenzahlung.','Historische Prognosefehler messen, plausible gemeinsame Stressfälle und Bandbreiten ausweisen.'],
   ['Konservatismus bei Aktualisierung','Neue belastbare Informationen verändern die alte Schätzung zu wenig.','Unveränderte und neue Evidenz mit klarer Änderungsregel getrennt dokumentieren.'],
   ['Rezenz und Verfügbarkeit','Ein außergewöhnlich starkes letztes Quartal wird als dauerhaft angesehen.','Mehrjahres- und Zyklusdaten sowie eine passende externe Vergleichsgruppe heranziehen.'],
   ['Anreizbedingter Optimismus','Ein gewünschtes Investitionsurteil bestimmt nachträglich die Annahmen.','Berechnung und unabhängige Gegenprüfung sowie dokumentierte Änderungen und Interessenkonflikte.']
  ],'Ein Etikett für einen Bias genügt nicht; die Gegenmaßnahme muss den konkreten Entstehungsweg verändern.'),
  'Eine Outside View betrachtet eine begründete Vergleichsgruppe: Wie oft erreichten ähnliche Kapazitätserweiterungen den geplanten Absatz, welche Anlaufkosten waren typisch und wie breit waren die Abweichungen? Die Gruppe muss wirtschaftlich passen; ein pauschaler Branchendurchschnitt ist nicht automatisch besser als Unternehmenswissen.',
  'Prognosen werden mit ihrem damaligen Informationsstand gespeichert. Spätere Ergebnisse werden nach Preis-, Mengen-, Timing- und Modellfehlern zerlegt. Nur so lässt sich feststellen, ob Abweichungen zufällig, systematisch optimistisch oder durch wiederkehrende falsche Verknüpfungen entstanden sind.'
 ]),
 S('scenarios','18. Sensitivität, Szenario und Erwartungswert nicht verwechseln','a b',[
  'Eine Sensitivität verändert einen Parameter bei sonst gleichen Bedingungen. Ein Szenario verändert zusammengehörige Annahmen gemeinsam, etwa Nachfrage, Rabatt, Zahlungsdauer und Kreditzins. Wahrscheinlichkeitsgewichte sind zusätzliche begründungsbedürftige Annahmen; drei Spalten mit „gut, mittel, schlecht“ liefern noch keine statistische Verteilung.',
  X('Der Finanzierungsbedarf des Durchschnitts ist nicht der durchschnittliche Finanzierungsbedarf','Im Atlas-Modell seien Endforderungen mit je 50 % Szenariogewicht entweder 5 % oder 25 % des Umsatzes. Andere Annahmen bleiben gleich. Die Gewichte sind ausdrücklich Fallannahmen.',[
   'Bei 5 %: Cash vor Finanzierung 149,75, kein neuer Kredit. Bei 25 %: Cash vor Finanzierung −70,25, neuer Kredit 100,25 zur Erfüllung des Mindestcash 30.',
   'Gewichteter Kreditbedarf: 0,5 × 0 + 0,5 × 100,25 = 50,125.',
   'Der durchschnittliche Forderungsanteil ist 15 %. Dort liegt Cash vor Finanzierung bei 39,75, der rechnerische Kreditbedarf wäre null.',
   'Der Unterschied entsteht durch die nichtlineare Mindestcashregel: Überschüsse werden nicht als negative neue Kreditaufnahme verrechnet. Ein einzelner Durchschnittsfall verbirgt den möglichen hohen Bedarf.'
  ],'Für verfügbare Kreditkapazität sind ungünstige Fälle und zeitliche Spitzen wichtiger als nur ein Erwartungswert.'),
  'Jahresendcash kann außerdem ausreichend sein, obwohl im Sommer eine Finanzierungslücke auftritt. Saisonale Käufe, Steuertermine und Investitionszahlungen benötigen gegebenenfalls eine Monats- oder Quartalsplanung. Ein bestandener Jahresendtest ist keine Garantie durchgehender Zahlungsfähigkeit.'
 ]),
 S('horizon','19. Detailhorizont am Geschäftsmodell ausrichten','e',[
  T(['Wirtschaftliche Situation','Sinnvolle Überlegung zur Detailphase'],[
   ['Reifes Geschäft mit stabilen Treibern','Eine überschaubare Detailphase kann genügen, wenn Margen und Kapitalbedarf bereits nachhaltig sind.'],
   ['Großes Investitionsprojekt mit mehrjähriger Bauphase','Anlauf, Finanzierung und Übergang zu normaler Auslastung explizit abbilden.'],
   ['Zyklisches Geschäft am Hoch- oder Tiefpunkt','Endannahmen nicht allein aus der aktuellen Extremmarge ableiten.'],
   ['Befristete Konzession oder endliche Ressource','Vertragsende, Abbau und mögliche Restwerte statt unbegründeter ewiger Fortführung modellieren.'],
   ['Unsichere neue Technologie','Mehr Detailjahre erzeugen nicht automatisch mehr Wissen; Szenarien und klare Übergangsannahmen sind nötig.']
  ],'Die Phase endet sinnvollerweise dort, wo ein tragfähiger langfristiger Zustand begründet werden kann.'),
  'Ein fünfjähriger Standardhorizont ist kein Naturgesetz. Andererseits erhöht eine zehnjährige Zeile mit unverändertem Wachstum allein die fachliche Qualität nicht. Marktgröße, Konkurrenz, Investitionszyklen und Informationsreichweite bestimmen, welche Details belastbar sind.',
  'Ein Übergang kann mehrere Jahre umfassen: Mengenwachstum, Marge, Kapitalumschlag und Finanzierungsstruktur nähern sich einem langfristigen Zustand an. Ein sprunghafter Wechsel genau am letzten Modelljahr braucht eine wirtschaftliche Begründung.'
 ]),
 S('continuing','20. Langfristiges Wachstum braucht passende Reinvestition','e',[
  F('g=RR\\,ROIC,\\qquad RR=\\frac{g}{ROIC},\\qquad FCFF_{t+1}=NOPAT_{t+1}(1-RR)','Im ausdrücklich stabilen Modell stammt Wachstum aus zusätzlicher Investition bei nachhaltig konstanter Kapitalrendite; Veränderungen der Ertragskraft vorhandenen Kapitals sind ausgeblendet. Die Rendite muss zur neuen Investition passen.',[['g','Langfristige Wachstumsrate des operativen Nachsteuergewinns.'],['RR','Reinvestitionsanteil des operativen Nachsteuergewinns.'],['ROIC','Nachhaltige Rendite auf das im Modell zusätzlich investierte Kapital.'],['NOPAT_{t+1}','Operativer Nachsteuergewinn im ersten Jahr nach der Detailphase.'],['FCFF_{t+1}','Freier Cashflow für alle Kapitalgeber in diesem Jahr.']]),
  X('Drei Prozent Wachstum ist nicht kostenlos','Am Ende der Detailphase liegt NOPAT bei 100. Angenommen werden dauerhaft 3 % Wachstum, 12 % Rendite auf neue Investitionen und ein dazu passender stabiler Zustand.',[
   'Erstes Folgejahr: NOPAT 103. Notwendige Reinvestitionsquote: 3 % / 12 % = 25 %.',
   'Reinvestition: 103 × 25 % = 25,75; FCFF: 103 − 25,75 = 77,25.',
   'Würde das Modell gleichzeitig FCFF 103 ansetzen, hätte es dasselbe Wachstum ohne den angenommenen Kapitalbedarf erzeugt.',
   'Bei nur 6 % nachhaltiger Rendite müsste die Reinvestitionsquote 50 % betragen; freier Cashflow wäre bei gleichem NOPAT nur 51,50.'
  ],'Wachstum, Rendite und Kapitalbindung müssen zusammenpassen. Ein höheres Wachstum allein beweist keinen höheren Wert.'),
  F('TV_t=\\frac{FCFF_{t+1}}{k-g},\\qquad k>g','Als Verbindung zur Bewertung kann ein passender stabiler Cashflow kapitalisiert werden. Der Terminalwert liegt am Ende der Detailphase und müsste für einen heutigen Wert noch abgezinst werden.',[['TV_t','Wert der nachfolgenden operativen Cashflows am Ende der Detailphase.'],['FCFF_{t+1}','Cashflow des ersten Folgejahrs, bereits nach passender Reinvestition.'],['k,g','Konsistent abgegrenzte Kapitalkosten und langfristiges Wachstum pro Periode.']]),
  'Bei k = 8 % ergibt der Fall 77,25/(8 % − 3 %) = 1.545. Die falsche Verwendung des gesamten NOPAT 103 ergäbe 2.060. Der Unterschied 515 entsteht hier aus ausgelassener Reinvestition, nicht aus einer anderen Diskontmeinung. Die Formel setzt eine plausible Fortführung und konsistente nominale oder reale Größen voraus; sie ist keine passende automatische Lösung für ein endendes Projekt.',
  G({id:'growth-capital-return',title:'Mehr Wachstum ist bei unzureichender Rendite kein Vorteil',
   caption:'Separater Modellvergleich: NOPAT im ersten Folgejahr bleibt bei 100, Kapitalkosten bei 8 %. Nur langfristiges Wachstum und nachhaltige Rendite auf zusätzliche Investitionen variieren. Reinvestitionsquote wird stets als Wachstum / ROIC angepasst.',
   reading:'Bei 12 % Kapitalrendite erhöhen zusätzliche profitable Investitionen den Fortführungswert. Bei 6 % verdienen sie weniger als die verlangten 8 %; mehr Wachstum senkt hier den Wert. Bei genau 8 % kompensieren sich Wachstumsvorteil und zusätzlicher Kapitalbedarf; der Wert bleibt bei 1.250.',
   plot:{x:[0,4],y:[750,1800],xLabel:'Langfristiges Wachstum in %',yLabel:'Fortführungswert am Ende der Detailphase',series:[.12,.08,.06].map(roc=>({
    name:'ROIC '+(roc*100)+' %',points:Array.from({length:17},(_,i)=>{const g=i*.0025;return [g*100,100*(1-g/roc)/(.08-g)];})
   })),marks:[{x:4,y:100*(1-.04/.12)/.04,label:'1.666,67',dx:-8,dy:-14,anchor:'end'},{x:4,y:1250,label:'1.250',dx:-8,dy:-14,anchor:'end'},{x:4,y:100*(1-.04/.06)/.04,label:'833,33',dx:-8,dy:20,anchor:'end'}]}}),
  F('ROIC=k\\quad\\Longrightarrow\\quad TV_t=\\frac{NOPAT_{t+1}(1-g/k)}{k-g}=\\frac{NOPAT_{t+1}}{k}','Bei konstantem NOPAT des ersten Folgejahres und Kapitalrendite genau in Höhe der Kapitalkosten schafft zusätzliches Wachstum in diesem stabilen Modell keinen zusätzlichen Wert.',[['ROIC,k','Rendite auf zusätzliche Investitionen und dafür geforderte Kapitalkosten.'],['g','Wachstumsrate mit g kleiner als k.'],['NOPAT_{t+1}','Konstant gehaltener operativer Nachsteuergewinn des ersten Folgejahres.'],['TV_t','Fortführungswert am Ende der Detailphase.']])
 ]),
 S('checks','21. Konsistenz und Plausibilität getrennt prüfen','a b e',[
  T(['Prüfung','Konkrete Frage'],[
   ['Bilanz','Sind Aktiva gleich Verbindlichkeiten plus Eigenkapital?'],
   ['Cashbrücke','Stimmen Anfangscash und sämtliche Bewegungen auf Endcash ab?'],
   ['Anlagen und Eigenkapital','Sind Zugänge, Abschreibung, Gewinn und Ausschüttung genau einmal verarbeitet?'],
   ['Zeitbasis und Einheiten','Passen Mio. Euro, Stückzahlen, Jahre, Tagesbasis und nominale oder reale Annahmen zusammen?'],
   ['Operative Durchführbarkeit','Reichen Kapazität, Personal, Kundenbedarf und Lieferfähigkeit für die geplante Menge?'],
   ['Finanzielle Durchführbarkeit','Sind Kreditlinie, Covenants, Zahlungsfristen und unterjährige Liquidität ausreichend?'],
   ['Prognosegüte','Welche Annahmen dominieren das Ergebnis, und welche Beobachtungen würden sie ändern?'],
   ['Endphase','Passen langfristige Marge, Wachstum, Kapitalbedarf und Wettbewerb zueinander?']
  ],'Eine rechnerisch fehlerfreie Prognose kann wirtschaftlich unplausibel bleiben. Beide Prüfarten sind erforderlich.'),
  'Das fertige Modell zeigt Basisszenario, wesentliche Unsicherheiten und konkrete Finanzierungslücken. Es dokumentiert, welche Eingaben aus veröffentlichten Daten stammen und welche eigene Schätzungen sind. Ein späteres Update verändert die betroffenen Ursachen und verfolgt ihre Folgen durch alle Abschlüsse, statt nur die gewünschte Gewinnzeile zu überschreiben.'
 ])
],related:[
 {unit:'reporting-quality',section:'combined',label:'Fehlerkorrektur von Prognosebereinigung unterscheiden'},
 {unit:'cashflow-preparation',section:'indirect',label:'Indirekte Cashflowrechnung herleiten'},
 {unit:'cashflow-analysis',section:'growth',label:'Wachstum und Kapitalbindung vergleichen'},
 {unit:'long-assets',section:'depreciation',label:'Abschreibung aus Nutzung ableiten'},
 {unit:'income-taxes',section:'reconciliation',label:'Steueraufwand und Zahlung vollständig überleiten'},
 {unit:'inventory',section:'prices',label:'Beschaffungspreise und Kostenfluss'},
 {unit:'ratios',section:'activity',label:'Tages- und Bestandskennzahlen abgrenzen'}
],sources:[
 {title:'CFA Institute: Lernziele Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=14'},
 {title:'CFA Institute: Introduction to Financial Statement Modeling',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/introduction-to-financial-statement-modeling'},
 {title:'CFA Institute: Company Analysis: Forecasting, ergänzender Methodenrahmen',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/company-analysis-forecasting'},
 {title:'Harvard Business School, Institute for Strategy and Competitiveness: The Five Forces',url:'https://www.isc.hbs.edu/strategy/business-strategy/Pages/the-five-forces.aspx'},
 {title:'Aswath Damodaran, NYU Stern: Wachstum aus Reinvestition und Kapitalrendite',url:'https://pages.stern.nyu.edu/adamodar/New_Home_Page/valquestions/growth.htm'},
 {title:'Aswath Damodaran, NYU Stern: stabile Reinvestition und Terminalwert, Vorlesungsunterlagen',url:'https://pages.stern.nyu.edu/~adamodar/pdfiles/country/valintroExtended2020.pdf'},
 {title:'IFRS Foundation: IAS 16, Abschreibung und Anlagenbewertung',url:'https://www.ifrs.org/issued-standards/list-of-standards/ias-16-property-plant-and-equipment/'}
],review:{status:'draft',date:'2026-09-25',note:'Eigener vollständiger Atlas-Prognosefall mit direkter Zahlungsgegenrechnung, ausgeglichener Bilanz, Finanzierungsschwelle, Zinszirkularität und langfristiger Reinvestition.'}};
