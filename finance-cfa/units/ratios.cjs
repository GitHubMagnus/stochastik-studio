const {F,T,X,S}=require('../author.cjs');
module.exports={id:'ratios',intro:[
 'Eine Kennzahl ist eine verdichtete Frage an einen Abschluss: Reichen kurzfristige Mittel? Wie viel Kapital bindet das Geschäft? Wer trägt das Finanzierungsrisiko? Woher stammt die Eigentümerrendite? Erst die Fragestellung entscheidet über die passende Kennzahl. Eine große Zahl ist nicht grundsätzlich gut und eine kleine nicht grundsätzlich schlecht.',
 'Dieses Kapitel baut ein Rechensystem auf, mit dem Bilanz, Gewinnrechnung und Cashflow gemeinsam interpretiert werden. Stromgrößen wie Umsatz und Gewinn gehören zur Periode; Bestände wie Forderungen und Eigenkapital gehören zu Stichtagen. Bei Strom-Bestands-Verhältnissen verwenden wir deshalb nach Möglichkeit Durchschnittsbestände. Die Aufgabenangaben können eine andere Konvention ausdrücklich vorgeben.'
 ],sections:[
 S('methods','1. Vergleichbarkeit vor dem Rechnen','a',[
  'Zeitreihenvergleich untersucht dasselbe Unternehmen über mehrere Perioden. Querschnittsvergleich stellt ähnliche Unternehmen gegenüber. Eine Common-Size-Rechnung setzt jeden Posten zur selben Basis ins Verhältnis, etwa Umsatz bei der GuV oder Gesamtvermögen bei der Bilanz. Ein Trendindex setzt das Basisjahr auf 100. Dadurch lassen sich Größen- und Wachstumsunterschiede erkennen, aber nicht automatisch unterschiedliche Geschäftsmodelle oder Rechnungslegungsmethoden neutralisieren.',
  'Prüfe vor einem Vergleich Konsolidierungskreis, Währung, Berichtsperiode, Geschäftsmodell und Bilanzierungswahl. Ein am Jahresende übernommenes Unternehmen kann die Bilanz bereits vollständig erhöhen, während sein Umsatz erst wenige Wochen zur Gewinnrechnung beiträgt. Ein bloßer Anfangs-/Enddurchschnitt ist bei starken saisonalen Schwankungen ebenfalls nur eine Näherung. Monats- oder Quartalsbestände können geeigneter sein.',
  F('X_t^{idx}=100\\frac{X_t}{X_0},\\qquad \\overline B\\approx\\frac{B_{Anfang}+B_{Ende}}2','Ein Trendindex normalisiert eine Zeitreihe; ein Durchschnittsbestand stellt näherungsweise den über die Periode eingesetzten Bestand dar.',[
   ['X_t^{idx}','Indexwert der Größe X in Periode t, Basisperiode 0 = 100.'],['X_t,X_0','Vergleichbare Werte derselben Größe in aktueller und Basisperiode.'],
   ['\\overline B','Durchschnittlicher Bestand; gleiche Einheit wie B.'],['B_{Anfang},B_{Ende}','Bestand zu Beginn und Ende der Berichtsperiode.']
  ]),
  'Eine belastbare Analyse führt Beobachtung, mögliche Ursache und zusätzliche Prüfung getrennt auf: „Forderungstage steigen“ ist eine Beobachtung; „Kunden zahlen später“ eine mögliche Erklärung; Altersstruktur, Ausfälle und neue Vertragsbedingungen sind zusätzliche Prüfungen. Eine Kennzahl allein liefert selten einen kausalen Beweis.'
 ]),
 S('liquidity','2. Liquidität: vier verschiedene Sicherheitsreserven','b',[
  'Current Ratio verwendet das gesamte Umlaufvermögen. Quick Ratio schränkt die Deckungsmasse auf liquide Mittel, kurzfristig veräußerbare Anlagen und geeignete Forderungen ein. Vorräte und Vorauszahlungen sind darin nicht enthalten. Cash Ratio lässt auch Forderungen weg. So wird die Frage zunehmend strenger: Welche Mittel stehen ohne Warenverkauf oder Kundenzahlung bereits zur Verfügung?',
  F('CR=\\frac{CA}{CL},\\qquad QR=\\frac{C+MS+AR}{CL},\\qquad CaR=\\frac{C+MS}{CL}','Die Nenner bleiben gleich; nur die Qualität und Verfügbarkeit der Deckungsmasse wird enger definiert.',[
   ['CR,QR,CaR','Current Ratio, Quick Ratio und Cash Ratio; dimensionslose Deckungsverhältnisse.'],['CA,CL','Umlaufvermögen und kurzfristige Verbindlichkeiten zum selben Stichtag.'],
   ['C','Liquide Mittel einschließlich der nach Datenabgrenzung geeigneten Zahlungsmitteläquivalente.'],['MS','Kurzfristige marktgängige Wertpapieranlagen.'],['AR','Geeignete kurzfristige Nettoforderungen aus Lieferungen und Leistungen.']
  ]),
  F('DI=\\frac{C+MS+AR}{DCE}','Das Defensive Interval übersetzt die liquiden Reserven in Tage gewöhnlicher betrieblicher Barausgaben.',[
   ['DI','Defensive Interval in Tagen.'],['C,MS,AR','Liquide Mittel, kurzfristige marktgängige Anlagen und geeignete Nettoforderungen.'],
   ['DCE','Durchschnittliche tägliche betriebliche Barausgaben; Abschreibungen und andere nicht zahlungswirksame Aufwendungen sind ausgeschlossen.']
  ]),
  X('Gleiche kurzfristige Schuld, unterschiedliche Deckung','Cash 20, kurzfristige Anlagen 10, Forderungen 50, Vorräte 90 und Vorauszahlungen 10. Kurzfristige Verbindlichkeiten 100. Durchschnittliche betriebliche Barausgaben 2 pro Tag.',[
   F('CR=\\frac{180}{100}=1{,}8,\\quad QR=\\frac{80}{100}=0{,}8,\\quad CaR=\\frac{30}{100}=0{,}3,\\quad DI=\\frac{80}{2}=40','Jede Zahl beschreibt einen anderen Liquidations- oder Zahlungszeitraum.',[['CR,QR,CaR','Current, Quick und Cash Ratio.'],['DI','Defensive Interval in Tagen.']]),
   'Die Current Ratio sieht komfortabler aus, weil sie Waren und Vorauszahlungen mitzählt. Vorauszahlungen bezahlen jedoch keine neue Lieferantenrechnung. Forderungen können überfällig sein; kurzfristige Anlagen können Kurs- oder Verfügungsrisiken besitzen.'
  ],'Eine hohe Current Ratio beseitigt keine Fälligkeitslücke. Umgekehrt kann ein Unternehmen mit schnellem Cashumschlag und stabiler Finanzierung mit einer niedrigeren Quote arbeiten.'),
  'Das Defensive Interval ist eine vereinfachte Reservenrechnung und keine exakte Überlebensdauer. Es unterstellt keine neuen Zuflüsse und eine passende Ausgabenbasis. Fällige Kredite, saisonale Spitzen und gebundene Sicherheiten müssen zusätzlich betrachtet werden.'
 ]),
 S('activity','3. Aktivität: aus Umschlag werden gebundene Tage','b f',[
  'Ein Umschlag setzt den zugehörigen Periodenstrom zum durchschnittlichen Bestand ins Verhältnis. Forderungen entstehen aus Umsatz, Vorräte werden über Umsatzkosten verbraucht, Lieferantenverbindlichkeiten entstehen durch Einkäufe. Der Nenner der Tagekennzahl ist jeweils der passende Strom. Insbesondere Umsatzkosten und Einkäufe sind bei veränderlichem Vorratsbestand nicht identisch.',
  F('RT=\\frac{S}{\\overline{AR}},\\quad IT=\\frac{COGS}{\\overline{Inv}},\\quad PT=\\frac{Purch}{\\overline{AP}},\\quad AT=\\frac{S}{\\overline A}','Die Umschläge geben an, wie oft die jeweilige durchschnittliche Bestandsgröße im Jahr durch den zugehörigen Strom bewegt wird.',[
   ['RT,IT,PT,AT','Forderungs-, Vorrats-, Lieferantenverbindlichkeits- und Gesamtvermögensumschlag pro Jahr.'],['S,COGS,Purch','Jahresumsatz, jährliche Umsatzkosten und jährliche Einkäufe.'],
   ['\\overline{AR},\\overline{Inv},\\overline{AP},\\overline A','Durchschnittliche Forderungen, Vorräte, Lieferantenverbindlichkeiten und Gesamtaktiva.']
  ]),
  F('DSO=\\frac{365}{RT},\\quad DIO=\\frac{365}{IT},\\quad DPO=\\frac{365}{PT},\\quad CCC=DIO+DSO-DPO','Umschlag und Tagekennzahl sind inverse Darstellungen; der Cash Conversion Cycle verbindet die Zahlungsphasen.',[
   ['DSO,DIO,DPO','Forderungs-, Vorrats- und Verbindlichkeitstage.'],['RT,IT,PT','Die oben definierten Jahresumschläge.'],['CCC','Cash Conversion Cycle in Tagen; hier ein Jahr mit 365 Tagen.']
  ]),
  X('Warum Einkäufe und Umsatzkosten auseinanderfallen','Umsatz 730, Umsatzkosten 438, Vorräte Anfang 90 und Ende 110. Durchschnittliche Forderungen 80, durchschnittliche Lieferantenverbindlichkeiten 60. Keine sonstigen Vorratsbewegungen.',[
   F('Purch=438+110-90=458,\\quad\\overline{Inv}=100','Einkäufe müssen zusätzlich den Aufbau des Vorrats finanzieren.',[['Purch','Einkäufe der Periode.'],['\\overline{Inv}','Durchschnittlicher Vorratsbestand.']]),
   F('DSO=365\\frac{80}{730}=40,\\quad DIO=365\\frac{100}{438}\\approx83{,}33,\\quad DPO=365\\frac{60}{458}\\approx47{,}82','Die drei Tagekennzahlen verwenden unterschiedliche wirtschaftlich passende Ströme.',[['DSO,DIO,DPO','Forderungs-, Vorrats- und Verbindlichkeitstage.']]),
   F('CCC\\approx83{,}33+40-47{,}82=75{,}51','Lieferantenkredit finanziert einen Teil der Lager- und Kundenphase.',[['CCC','Cash Conversion Cycle in Tagen.']])
  ],'Umsatzkosten als Ersatz für Einkäufe sind nur eine ausdrücklich bezeichnete Näherung. Sie werden ungenauer, wenn sich Vorräte stark verändern.'),
  'Ein sehr hoher Vorratsumschlag kann Effizienz oder einen drohenden Lagerengpass anzeigen. Ein sinkender Vermögensumschlag kann eine Fehlallokation oder gerade einen noch nicht ausgelasteten Kapazitätsausbau widerspiegeln. Der Modellzusammenhang hilft, die richtigen Anschlussfragen zu stellen.'
 ]),
 S('solvency','4. Solvenz und Schuldendienst','b',[
  'Solvenzkennzahlen untersuchen die Finanzierungsstruktur über längere Zeiträume. Zinsdeckung verbindet einen Ergebnisstrom mit dem zugehörigen Zinsaufwand. Schuldenquoten verwenden dagegen Bilanz- oder Marktbestände. Die Definition von „Debt“ muss festgehalten werden: Üblicherweise ist verzinsliche Verschuldung gemeint, nicht pauschal die Summe aller Verbindlichkeiten. Leasing und Pensionsdefizite können für eine konkrete Analyse zusätzlich relevant sein.',
  F('D_A=\\frac{D}{A},\\quad D_C=\\frac{D}{D+E},\\quad D_E=\\frac{D}{E},\\quad FL=\\frac{\\overline A}{\\overline E},\\quad IC=\\frac{EBIT}{I}','Die ersten drei Quoten beschreiben Verschuldung, Financial Leverage den Vermögenshebel und Interest Coverage die periodische Zinsdeckung.',[
   ['D_A,D_C,D_E','Debt-to-Assets, Debt-to-Capital und Debt-to-Equity; dimensionslose Quoten.'],['D,A,E','Nach festgelegter Definition erfasste Schulden, Aktiva und Eigenkapital zum selben Stichtag.'],
   ['FL','Financial Leverage bzw. Eigenkapitalmultiplikator.'],['\\overline A,\\overline E','Durchschnittliche Aktiva und durchschnittliches Eigenkapital.'],['IC,EBIT,I','Zinsdeckung, Ergebnis vor Zinsen und Steuern und Zinsaufwand derselben Periode.']
  ]),
  F('FCCR=\\frac{EBIT+LP}{I+LP}','Ein einfacher Fixed-Charge-Coverage-Ansatz berücksichtigt zusätzlich die im EBIT bereits abgezogenen Miet-/Leasingaufwendungen.',[
   ['FCCR','Fixed Charge Coverage in diesem ausdrücklich abgegrenzten Ansatz.'],['EBIT','Ergebnis nach den betrachteten Mietaufwendungen, vor Zinsen und Steuern.'],
   ['LP','In EBIT abgezogene fixe Miet-/Leasingaufwendungen der Periode.'],['I','Zinsaufwand derselben Periode.']
  ]),
  'Die letzte Formel darf nach einer Leasingaktivierung nicht ungeprüft mit alten Mietkosten weitergerechnet werden: Dann sind Zins- und Abschreibungskomponenten anders erfasst. Bei negativem oder sehr kleinem Eigenkapital werden Debt-to-Equity und ROE instabil oder schwer sinnvoll interpretierbar. EBITDA ist zudem keine freie Kasse; notwendige Investitionen und Working Capital können Mittel verbrauchen, die für den Schuldendienst fehlen.'
 ]),
 S('profitability','5. Ertragskraft auf Umsatz oder Kapital beziehen','b c',[
  'Umsatzmargen messen, wie viel Ergebnis aus einem Umsatzeuro übrig bleibt. Kapitalrenditen fragen, wie effizient das dafür benötigte Kapital eingesetzt wird. Ein Unternehmen kann deshalb eine geringe Marge und trotzdem eine gute Kapitalrendite besitzen, wenn es das gebundene Vermögen häufig umschlägt.',
  F('GM=\\frac{S-COGS}{S},\\quad OM=\\frac{EBIT}{S},\\quad NM=\\frac{NI}{S},\\quad ROA=\\frac{NI}{\\overline A},\\quad ROE=\\frac{NI}{\\overline E}','Marge und Kapitalrendite verwenden verschiedene Bezugsgrößen; die angegebene ROA-Konvention verwendet Nettogewinn.',[
   ['GM,OM,NM','Brutto-, operative und Nettomarge.'],['S,COGS,EBIT,NI','Umsatz, Umsatzkosten, Ergebnis vor Zinsen und Steuern sowie Nettogewinn.'],
   ['ROA,ROE','Return on Assets und Return on Equity in der hier verwendeten Definition.'],['\\overline A,\\overline E','Durchschnittliche Aktiva und durchschnittliches Eigenkapital.']
  ]),
  F('ROIC=\\frac{EBIT(1-\\tau)}{\\overline{IC}}','ROIC verbindet den operativen Nachsteuergewinn mit dem dafür eingesetzten Kapital aller betrachteten Kapitalgeber.',[
   ['ROIC','Return on Invested Capital.'],['EBIT','Operatives Ergebnis vor Zinsen und Steuern.'],['\\tau','Für die operative Nachsteuerrechnung angesetzter Steuersatz.'],
   ['\\overline{IC}','Durchschnittliches investiertes Kapital nach konsistenter Abgrenzung, beispielsweise verzinsliche Schulden plus Eigenkapital abzüglich nicht operativ benötigter Liquidität.']
  ]),
  'ROIC-Definitionen variieren bei überschüssigem Cash, Goodwill und Leasing. Ein Vergleich mit WACC ist nur sinnvoll, wenn Risiko, Zeitmaßstab und Kapitalabgrenzung zusammenpassen. Eine hohe historische Buchkapitalrendite kann aus alten niedrigen Buchwerten stammen und ist nicht automatisch die Rendite auf einen heutigen Aktienkauf.'
 ]),
 S('dupont','6. Die vollständige DuPont-Brücke','c d',[
  'Die Zerlegung entsteht durch Multiplizieren mit Brüchen, die jeweils eins sind. Umsatz und Aktiva werden in Zähler und Nenner eingefügt und kürzen sich in der Gesamtgleichung wieder heraus. Die drei Faktoren trennen Nettomarge, Umschlag und Finanzierungshebel. Eine Steigerung der ROE kann dadurch auf die jeweils veränderte Ursache zurückgeführt werden.',
  F('ROE=\\frac{NI}{S}\\frac{S}{\\overline A}\\frac{\\overline A}{\\overline E}','Marge mal Vermögensumschlag mal Eigenkapitalmultiplikator ergibt dieselbe Eigenkapitalrendite wie die direkte Rechnung.',[
   ['ROE','Eigenkapitalrendite der Periode.'],['NI,S','Nettogewinn und Umsatz dieser Periode.'],['\\overline A,\\overline E','Durchschnittliche Aktiva und durchschnittliches Eigenkapital.']
  ]),
  F('ROE=\\underbrace{\\frac{NI}{EBT}}_{TB}\\underbrace{\\frac{EBT}{EBIT}}_{IB}\\underbrace{\\frac{EBIT}{S}}_{OM}\\underbrace{\\frac{S}{\\overline A}}_{AT}\\underbrace{\\frac{\\overline A}{\\overline E}}_{FL}','Die Nettomarge wird zusätzlich in Steuerbelastungsfaktor, Zinsbelastungsfaktor und operative Marge zerlegt.',[
   ['NI,EBT,EBIT,S','Nettogewinn, Vorsteuergewinn, Ergebnis vor Zinsen und Steuern und Umsatz.'],['\\overline A,\\overline E','Durchschnittliche Aktiva und Eigenkapital.'],
   ['TB,IB','Tax Burden und Interest Burden: verbleibende Ergebnisanteile nach Steuer bzw. Zins. Bei positiven Bezugsgrößen bedeutet ein kleinerer Faktor eine stärkere Belastung.'],
   ['OM,AT,FL','Operative Marge, Gesamtvermögensumschlag und Eigenkapitalmultiplikator.'],['ROE','Eigenkapitalrendite; Faktoren werden als Dezimalwerte multipliziert.']
  ]),
  X('Ein vollständiger Abschlussausschnitt','Umsatz 1.000; EBIT 200; Zinsaufwand 40; Steueraufwand 48; durchschnittliche Aktiva 800 und Eigenkapital 400. Keine weiteren Ergebnisbestandteile.',[
   F('EBT=200-40=160,\\quad NI=160-48=112','Zins und Steuer führen vom operativen Ergebnis zum Ergebnis der Eigentümer.',[['EBT','Vorsteuergewinn.'],['NI','Nettogewinn.']]),
   F('ROE=0{,}7\\cdot0{,}8\\cdot0{,}2\\cdot1{,}25\\cdot2=0{,}28=28\\%','Die fünf Faktoren sind 112/160, 160/200, 200/1.000, 1.000/800 und 800/400.',[['ROE','Eigenkapitalrendite.']]),
   'Direkte Kontrolle: 112/400 = 28 %. Steigt bei sonst unveränderten Angaben der Zinsaufwand auf 80 und bleibt die Steuerquote 30 %, sinkt der Nettogewinn auf 84. Der Zinsbelastungsfaktor fällt auf 0,6; ROE sinkt auf 21 %. Die operative Marge bleibt 20 %.'
  ],'Die Ursache des Rückgangs liegt hier in der Finanzierung, nicht im Produktgeschäft. Eine höhere Verschuldung darf deshalb nicht nur im Hebelfaktor berücksichtigt werden, während der Zinsaufwand künstlich unverändert bleibt.'),
  'Wenn EBIT oder EBT null sind, kann die fünfteilige Schreibweise undefinierte Zwischenbrüche enthalten, obwohl eine direkte ROE berechenbar bleibt. Bei negativen Ergebnissen kehren sich manche intuitive Richtungen um. Die Zerlegung ist eine algebraische Diagnose, keine automatische Empfehlung, einen einzelnen Faktor zu maximieren.'
 ]),
 S('interactions','7. Transaktionen verändern mehrere Kennzahlen gleichzeitig','c',[
  X('Eine bessere Quote bei weniger Cash','Umlaufvermögen 200, kurzfristige Verbindlichkeiten 100. Eine Lieferantenrechnung von 40 wird aus vorhandenen liquiden Mitteln bezahlt.',[
   F('CR_0=\\frac{200}{100}=2,\\qquad CR_1=\\frac{200-40}{100-40}=\\frac83\\approx2{,}67','Die Current Ratio steigt, weil bei einer Ausgangsquote über eins der Nenner relativ stärker fällt.',[['CR_0,CR_1','Current Ratio vor und nach Zahlung.']]),
   'Die Firma besitzt jetzt 40 weniger Cash und 40 weniger kurzfristige Schuld. Eine bessere Quote ist damit vereinbar, dass ein unerwarteter zusätzlicher Cashbedarf schwieriger zu finanzieren wäre.'
  ],'Absolute Beträge, Fälligkeiten und Quoten gehören zusammen. Eine Stichtagsverbesserung kann rein mechanisch entstehen.'),
  'Ein Wareneinkauf gegen Cash lässt bei gleicher Bewertung das Umlaufvermögen unverändert. Current Ratio bleibt gleich, während Quick Ratio und Cash Ratio sinken. Ein Forderungseinzug verschiebt dagegen AR in Cash: Quick Ratio bleibt im einfachen Fall gleich, Cash Ratio steigt. Solche Vergleiche zeigen, was die Kennzahl jeweils tatsächlich misst.'
 ]),
 S('industry-forecast','8. Branchenfragen und Prognosen','e f',[
  'Für eine Bank kann die Nettozinsmarge auf durchschnittliche zinstragende Aktiva aussagekräftiger sein als eine industrielle Umsatzmarge. Kreditverluste, Kapitalquoten und Liquidität müssen ergänzend untersucht werden. Bei einem Sachversicherer zeigt die kombinierte Schaden- und Kostenquote die Zeichnungsleistung; die konkrete Prämienbasis der Teilquoten muss geprüft werden. Ein Immobilienunternehmen benötigt unter anderem Belegungs-, Miet- und Betriebsergebnisgrößen. Branchenkennzahlen ersetzen die allgemeinen Rechnungslegungsprüfungen nicht.',
  'In Prognosen werden Verhältnisse zu Treibern: Aus erwartetem Umsatz und Forderungstagen entsteht eine erwartete Forderungsposition. Aus Umsatzkosten und Lagerdauer folgt der notwendige Vorrat. So wird Umsatzwachstum in Finanzierungsbedarf übersetzt. Historische Quotenkonstanz ist dabei eine Modellannahme, die Preisänderungen, Kreditpolitik und Kapazitätsgrenzen verletzen können.',
  F('AR_1=S_1\\frac{DSO_1}{365},\\qquad Inv_1=COGS_1\\frac{DIO_1}{365}','Zieltage werden zurück in modellierte Bestände übersetzt; die vereinfachte Jahresplanung behandelt die genannten Bestände als passende Repräsentanten des Zieljahrs.',[
   ['AR_1,Inv_1','Modellierte Forderungen und Vorräte der Zielperiode.'],['S_1,COGS_1','Geplanter Jahresumsatz und geplante Umsatzkosten.'],['DSO_1,DIO_1','Geplante Forderungs- und Lagerdauer in Tagen.']
  ]),
  X('Wachstum mit schlechteren Zahlungsbedingungen','Der Umsatz steigt von 365 auf 438. Forderungstage steigen von 30 auf 45. Gleichmäßige Verkäufe, keine Umsatzsteuer oder Ausfälle.',[
   F('AR_0=365\\frac{30}{365}=30,\\quad AR_1=438\\frac{45}{365}=54,\\quad\\Delta AR=24','Umsatzwachstum und spätere Zahlung erhöhen gemeinsam die Forderungsbindung.',[['AR_0,AR_1','Forderungsbestände im vereinfachten Ausgangs- und Zielmodell.'],['\\Delta AR','Zusätzliche Bindung in Forderungen.']]),
   'Bei unveränderten 30 Tagen wären nur 36 erforderlich. Von den zusätzlichen 24 entstehen also 6 durch Wachstum und 18 durch die Verschlechterung der Zahlungslaufzeit.'
  ],'Gewinnwachstum kann mit einem operativen Cashabfluss einhergehen. Die Zerlegung macht sichtbar, welche operative Annahme dafür verantwortlich ist.')
 ])],
 sources:[
  {title:'CFA Institute: Financial Analysis Techniques',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/financial-analysis-techniques'},
  {title:'CFA Institute: Financial Ratio List – Definitionen und Konventionsunterschiede',url:'https://www.cfainstitute.org/sites/default/files/-/media/documents/support/programs/cfa/cfa_program_level_ii_financial_ratio_list.pdf'}
 ],review:{status:'draft',note:'Inhalt ausgebaut; unabhängige Rechenkontrolle und Abschlussreview folgen.'}};
