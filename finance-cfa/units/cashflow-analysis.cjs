const {F,T,X,S,G}=require('../author.cjs');
const growth=Array.from({length:31},(_,i)=>i);
module.exports={id:'cashflow-analysis',intro:[
 'Die Cashflowrechnung erklärt, woher Geld kam und wofür es verwendet wurde. Ihre Analyse fragt zusätzlich, ob diese Quellen wiederholbar sind, welche Investitionen nötig bleiben und welchen Kapitalgebern der verbleibende Betrag wirtschaftlich zusteht. Ein positiver Kontostand kann aus einem guten Geschäft, neuen Schulden oder dem Verkauf der Produktionsbasis stammen.',
 'Wir unterscheiden deshalb berichtete Cashflows, auf eine gemeinsame Basis gebrachte Zahlungsströme und freie Cashflows. Jede Kennzahl erhält eine ausdrückliche Definition. Eigene Vergleichsfälle zeigen, wann dieselbe Zahl verschiedene Ursachen hat und wann ein veränderter Ausweis keine wirtschaftliche Verbesserung bedeutet.'
],sections:[
 S('sources-uses','1. Geldquellen und Verwendungen gemeinsam lesen','a',[
  T(['Muster','Mögliche wirtschaftliche Erklärung','Erforderliche Gegenprüfung'],[
   ['CFO positiv, CFI negativ','Das Geschäft finanziert Investitionen.','Reicht CFO nach notwendigen Ersatzinvestitionen, und ist das Wachstum rentabel?'],
   ['CFO negativ, CFF positiv','Wachstum oder operative Verluste werden extern finanziert.','Wie lange reichen die Mittel, und welche Annahmen führen zur Tragfähigkeit?'],
   ['CFI positiv','Vermögenswerte oder Unternehmensteile werden verkauft.','Abbau unnötiger Aktiva oder Verbrauch künftiger Ertragsquellen?'],
   ['CFF negativ','Kredite werden getilgt oder Eigentümer bezahlt.','Aus nachhaltigem Überschuss oder aus schrumpfender Liquiditätsreserve?']
  ],'Ein Vorzeichenmuster ist ein Ausgangspunkt für Fragen, kein Qualitätsurteil.'),
  X('Gleicher Geldzuwachs, andere Herkunft','A meldet CFO 120, CFI −80, CFF 0. B meldet CFO −20, CFI +60, CFF 0. Wechselkurseffekte fehlen.',[
   'Beide erhöhen ihren Geldbestand um 40. Nur anhand der Geldänderung erscheinen sie gleich.',
   'A erwirtschaftet operativ mehr, als für die ausgewiesenen Investitionen abfließt. B erhält den Zuwachs durch Nettoverkäufe trotz operativer Abflüsse.',
   'B kann sich sinnvoll von unproduktiven Anlagen trennen. Wiederholt sich die Konstellation jedoch, muss die verbleibende Ertragsbasis die künftigen Zahlungen tragen.'
  ],'Der Geldbestand beantwortet eine Bestandsfrage; seine Quellen beantworten eine Nachhaltigkeitsfrage.')
 ]),
 S('common-size','2. Common-Size-Cashflows brauchen einen klaren Nenner','a',[
  F('CS_j=CF_j/R','Eine verbreitete Skalierung teilt Zahlungsströme durch den Umsatz derselben Periode. Negative Cashflows bleiben negativ; die Kennzahl ist kein Anteil an einer zwingend auf 100 % summierenden Geldquelle.',[['CS_j','Umsatzbezogener Cashflowanteil der Position j.'],['CF_j','Zahlungsstrom der betrachteten Position, mit Vorzeichen.'],['R','Vergleichbarer Periodenumsatz, hier positiv.']]),
  T(['Lumen-Fall mit Umsatz 1.000','Cashflow','In % des Umsatzes'],[
   ['Operativ nach US-GAAP-Fall','120','12,0 %'],['Investition','−45','−4,5 %'],['Finanzierung','−5','−0,5 %'],['Geldbestandsänderung','70','7,0 %']
  ],'Diese Zahlen stammen aus dem vorherigen Kapitel zur Aufstellung der Cashflowrechnung.'),
  'Eine andere Analyse stellt einzelne Bruttozuflüsse als Anteil aller Bruttozuflüsse und Bruttoabflüsse als Anteil aller Bruttoabflüsse dar. Dann summiert jede Seite auf 100 %, aber die beiden Nenner sind verschieden. Ein durch Umsatz geteilter CFO darf nicht als Anteil sämtlicher Geldzuflüsse bezeichnet werden.',
  X('Bruttoquellen und Bruttoverwendungen','Im Lumen-Fall stammen 970 aus Kunden, 35 aus Anlagenverkauf und 50 aus Kreditaufnahme. Abflüsse sind 595, 195, 20, 40, 80, 30 und 25 für die im Aufstellungskapitel genannten Zwecke.',[
   'Bruttozuflüsse: 970 + 35 + 50 = 1.055. Bruttoabflüsse: 595 + 195 + 20 + 40 + 80 + 30 + 25 = 985. Differenz: 70.',
   'Kunden liefern 970/1.055 ≈ 91,9431 % der Bruttozuflüsse. Anlagenkäufe verwenden 80/985 ≈ 8,1218 % der Bruttoabflüsse.',
   'Diese beiden Anteile erklären die Zusammensetzung unterschiedlicher Seiten. Sie sind nicht direkt miteinander zu addieren und unterscheiden sich von der CFO-Marge 12 %.'
  ],'Vor einem Vergleich werden Position, Vorzeichen, Nenner und Brutto- oder Nettobetrachtung festgelegt.')
 ]),
 S('cash-quality','3. CFO ist aussagekräftig, aber nicht unmanipulierbar','a',[
  'Eine Geldzahlung ist häufig leichter zu überprüfen als eine Schätzung. Trotzdem können Zeitpunkt, Vertragsgestaltung, Konsolidierung und Kategorie den ausgewiesenen CFO beeinflussen. Beispielsweise verbessern schnellere Kundenzahlungen, geringere Vorräte und später bezahlte Lieferanten den aktuellen Saldo auf unterschiedliche Weise.',
  T(['CFO-Anstieg entsteht durch …','Mögliche gute Erklärung','Mögliche Grenze'],[
   ['Geringere Forderungstage','Bessere Einziehung und passendere Kreditbedingungen.','Einmalige Einziehung lässt sich nicht jedes Jahr wiederholen.'],
   ['Lagerabbau','Weniger Überbestand.','Lieferfähigkeit und künftiger Umsatz könnten leiden.'],
   ['Spätere Lieferantenzahlung','Verhandelte längere Konditionen.','Überfälligkeit, verlorene Rabatte oder Finanzierungsabhängigkeit.'],
   ['Kundenanzahlungen','Nachfrage und günstige Vertragsstruktur.','Leistung und zugehörige Auszahlungen müssen noch erbracht werden.'],
   ['Umgliederung von Zinsen','Neue Regelbasis oder zulässige Darstellung.','Gesamtliquidität verbessert sich nicht.']
  ],'Die Ursache bestimmt, wie viel des aktuellen CFO in einer Prognose fortgeschrieben werden darf.'),
  'Factoring und Supplier-Finance-Vereinbarungen verlangen eine Prüfung wirtschaftlicher Finanzierung, Ausbuchung, Fälligkeiten und Offenlegung. Ein einzelner hoher CFO beweist nicht, dass das Geschäftsmodell seine Investitionen dauerhaft selbst trägt.'
 ]),
 S('free-cashflow','4. Frei für wen und nach welchen Investitionen?','b',[
  'Free Cash Flow to the Firm, FCFF, ist der modellierte operative Überschuss nach notwendigen Investitionen, bevor die Verteilung an Fremd- und Eigenkapitalgeber berücksichtigt wird. Free Cash Flow to Equity, FCFE, betrachtet den für Eigenkapitalgeber verbleibenden Betrag nach Fremdkapitalzahlungen und Nettokreditaufnahme.',
  '„Frei“ bedeutet hier eine analytische Abgrenzung, keine automatische rechtliche Ausschüttungsfähigkeit. Mindestliquidität, Kreditvereinbarungen, Ausschüttungsregeln und Zukunftsinvestitionen können die tatsächliche Auszahlung begrenzen. Ein positiver FCFE muss nicht als Dividende ausgezahlt werden.',
  F('FCFF=EBIT(1-\\tau)+NCC-FCInv-WCInv','Im vereinfachten operativen Modell wird der Gewinn vor Finanzierung besteuert, um nicht zahlungswirksame operative Aufwendungen ergänzt und um Investitionen in langfristige Vermögenswerte sowie operatives Working Capital vermindert.',[['FCFF','Freier Cashflow für sämtliche Kapitalgeber.'],['EBIT','Operatives Ergebnis vor Zinsen und Steuern nach den Modellanpassungen.'],['\\tau','Für das vereinfachte Modell geeigneter Steuersatz; vollständige zeitgleiche steuerliche Wirkung unterstellt.'],['NCC','Nicht zahlungswirksame operative Aufwendungen, netto nach nötigen Korrekturen.'],['FCInv','Nettozahlung für relevante langfristige operative Investitionen.'],['WCInv','Zunahme des operativen Working Capitals ohne Zahlungsmittel und Finanzschulden; negativ bei Freisetzung.']]),
  'Operatives Working Capital schließt hier Finanzschulden und Zahlungsmittel aus. Das englische „non-cash working capital“ bedeutet nicht „nur nicht monetäre Posten“: Kundenforderungen und operative Verbindlichkeiten gehören weiterhin zur Überleitung. Der Kauf eines Wertpapierportfolios oder einer ganzen Gesellschaft darf nicht automatisch wie eine gewöhnliche Ersatzinvestition in Produktionsanlagen behandelt werden. Die Prognose muss zu der bewerteten Geschäftstätigkeit passen.'
 ]),
 S('fcff-from-cfo','5. FCFF aus einem CFO mit operativen Zinsen herleiten','b',[
  F('FCFF=CFO_{after\\ interest}+I(1-\\tau)-FCInv','Wenn CFO bereits Zinszahlungen und deren zeitgleichen Steuereffekt enthält, wird für den Cashflow aller Kapitalgeber der Nettoeffekt der Finanzierung rückgängig gemacht.',[['CFO_{after\\ interest}','Operativer Cashflow, in dem die relevante Zinszahlung und ihre Steuerentlastung enthalten sind.'],['I','Gezahlte und im Modell zeitgleich steuerlich abzugsfähige Zinsen.'],['\\tau','Passender Steuersatz für diesen Zinsabzug.'],['FCInv','Relevante langfristige Nettoinvestitionen als positiver Abfluss.'],['FCFF','Cashflow vor Verteilung an Fremd- und Eigenkapitalgeber.']]),
  X('Ein Betrag, zwei vollständig abgestimmte Herleitungen','Operatives EBIT 200, Abschreibung 40, gezahlte Zinsen 20, Steuersatz 25 %, Working-Capital-Aufbau 30, Nettoinvestition 70. Keine weiteren Effekte; alle Steuern werden zeitgleich gezahlt.',[
   'Nettogewinn: (200 − 20) × 0,75 = 135. CFO nach Zinsen: 135 + 40 − 30 = 145.',
   'FCFF über CFO: 145 + 20 × 0,75 − 70 = 90. Die Nettozinskorrektur beträgt 15.',
   'Direkt operativ: 200 × 0,75 + 40 − 30 − 70 = 90. Beide Wege müssen denselben Anspruchskreis abbilden.',
   'Warum nicht volle 20 addieren? Ohne Zinsabzug wären im Modell 50 statt 45 Steuern fällig. Fünf des ursprünglichen CFO sind Steuerentlastung durch Fremdfinanzierung.'
  ],'Zahlungskategorie und Steuerannahme entscheiden über die richtige Zinskorrektur.'),
  'Bei Verlustvorträgen, beschränktem Zinsabzug, latenten Steuern, unterschiedlichen Steuerjurisdiktionen oder nicht zeitgleicher Zahlung kann ein pauschales I × (1 − τ) unzutreffend sein. Dann wird die konkrete Steuer- und Zahlungsüberleitung modelliert.'
 ]),
 S('fcfe','6. Von FCFF zum Anspruch der Eigenkapitalgeber','b',[
  F('FCFE=CFO_{after\\ interest}-FCInv+NB=FCFF-I(1-\\tau)+NB','Aus dem CFO nach Zinsen verbleibt nach langfristiger Investition ein Betrag, der durch Nettokreditaufnahme erhöht bzw. Nettotilgung vermindert wird.',[['FCFE','Freier Cashflow für Eigenkapitalgeber unter den Modellannahmen.'],['CFO_{after\\ interest}','CFO einschließlich operativer Zinszahlung.'],['FCInv','Langfristige Nettoinvestition.'],['NB','Neue Kreditaufnahme minus Tilgungen; positiver Wert bedeutet zusätzliche Fremdfinanzierung.'],['FCFF,I,\\tau','Cashflow aller Kapitalgeber, gezahlte abzugsfähige Zinsen und Steuersatz wie zuvor definiert.']]),
  X('Neue Schulden erhöhen FCFE, aber nicht die operative Wertschöpfung','Im vorherigen Fall beträgt FCFF 90, CFO 145 und Investition 70. Es werden netto 10 neue Kredite aufgenommen.',[
   'FCFE aus CFO: 145 − 70 + 10 = 85.',
   'FCFE aus FCFF: 90 − 15 + 10 = 85. Der nach Steuereffekt berücksichtigte Zinsanspruch und die neue Finanzierung erklären die Differenz.',
   'Ohne Nettokreditaufnahme wären es 75; bei Nettotilgung 10 wären es 65. Der operative FCFF bleibt in diesem kontrollierten Vergleich 90.'
  ],'Eine höhere Auszahlungsmöglichkeit durch neue Kredite ist keine kostenlose Steigerung des Unternehmenswerts. Künftige Zinsen, Tilgungen und Risiken ändern sich.')
 ]),
 S('classification','7. CFO ohne operative Zinsen verlangt eine andere Brücke','a b',[
  'Im selben Geschäftsfall würden Zinsen nach Anwendung von IFRS 18 bei einem Unternehmen ohne spezifizierte Hauptgeschäftstätigkeit im CFF stehen. CFO steigt dadurch von 145 auf 165. Die tatsächlichen Steuern bleiben im Beispiel 45 und enthalten weiterhin die Steuerentlastung durch die Zinsen.',
  F('FCFF=CFO_{before\\ interest}-\\tau I-FCInv,\\qquad FCFE=CFO_{before\\ interest}-I-FCInv+NB','Wenn der CFO die Zinszahlung nicht enthält, darf sie für FCFF nicht nochmals hinzuaddiert werden. Für einen finanzierungsneutralen FCFF wird nur die im CFO enthaltene Steuerentlastung herausgenommen. FCFE berücksichtigt die tatsächlich zu zahlenden Zinsen.',[['CFO_{before\\ interest}','CFO ohne Zinszahlung, aber mit den tatsächlichen im Modell durch Zinsabzug verminderten Steuern.'],['I,\\tau','Gezahlte abzugsfähige Zinsen und passender Steuersatz.'],['FCInv,NB','Langfristige Nettoinvestition und Nettokreditaufnahme.'],['FCFF,FCFE','Freier Cashflow aller Kapitalgeber bzw. der Eigenkapitalgeber.']]),
  T(['Rechenweg','Zinsen operativ','Zinsen finanziell'],[
   ['Berichteter CFO','145','165'],
   ['FCFF','145 + 15 − 70 = 90','165 − 5 − 70 = 90'],
   ['FCFE bei NB = 10','145 − 70 + 10 = 85','165 − 20 − 70 + 10 = 85']
  ],'Gleiche wirtschaftliche Zahlungen müssen nach korrekter Normalisierung gleiche freie Cashflows ergeben.'),
  'Diese Brücken gelten für die genannte Fallstruktur. Werden zusätzlich erhaltene Zinsen, Dividenden oder andere nicht operative Komponenten unterschiedlich ausgewiesen, müssen auch sie passend zum Bewertungsgegenstand bereinigt werden. CFO ist kein universell identischer Ausgangspunkt über alle Unternehmen und Standards.'
 ]),
 S('investment','8. Ersatz, Wachstum und Verkauf nicht verwechseln','a b',[
  'Abschreibung verteilt historische Anschaffungskosten; sie ist keine direkte Messung künftiger Ersatzinvestitionen. Inflation, technische Lebensdauer, Kapazitätsauslastung und neue Technik können Ersatzbedarf deutlich verändern. Eine Annahme „Capex gleich Abschreibung“ ist deshalb zu begründen.',
  X('Einmaliger Verkauf lässt freien Cashflow besser aussehen','Ein Unternehmen meldet CFO 100, neue Anlagenkäufe 90 und Erlös 40 aus dem Verkauf eines nicht mehr benötigten Grundstücks. Für diesen Vergleich gibt es keine Zinskorrektur.',[
   'Mit Nettoinvestition 90 − 40 = 50 ergibt sich ein aktueller Cashüberschuss von 100 − 50 = 50.',
   'Ohne erneuten Grundstücksverkauf und bei sonst gleichen Zahlungen wären es nur 100 − 90 = 10.',
   'Der Verkauf kann sinnvoll sein und echten Wert freisetzen. Er ist trotzdem keine wiederholbare operative Einnahme. Die Prognose behandelt den Einmalerlös getrennt.'
  ],'Eine Rechenkonvention für Nettoinvestition ersetzt keine Beurteilung ihrer Nachhaltigkeit.'),
  'Auch Akquisitionen können Wachstum kaufen, das im späteren Umsatz erscheint. Wer den Kaufpreis aus Investitionen entfernt, den übernommenen Umsatz aber dauerhaft fortschreibt, kann die für dieses Wachstum benötigten Mittel unterschätzen.'
 ]),
 S('growth','9. Wachstum kann heutigen Cashflow verbrauchen','a b',[
  F('FCFF(g)=m(1-\\tau)R_0(1+g)-kR_0g','Ein kontrolliertes Einperiodenmodell: operative Marge und Steuersatz bleiben konstant. Ersatzinvestitionen entsprechen nicht monetärem Werteverzehr; zusätzlicher Umsatz benötigt darüber hinaus k Geldeinheiten an langfristiger und kurzfristiger operativer Kapitalbindung je Umsatzanstieg.',[['FCFF(g)','Aktueller freier Cashflow bei Umsatzwachstum g.'],['m','Konstante operative EBIT-Marge.'],['\\tau','Steuersatz im vereinfachten Modell.'],['R_0','Ursprünglicher Jahresumsatz.'],['g','Umsatzwachstumsrate als Dezimalzahl.'],['k','Zusätzliche Nettoinvestition je zusätzlicher jährlicher Umsatzeinheit.']]),
  G({id:'growth-cash',title:'Die Kapitalbindung entscheidet über den heutigen Cashfloweffekt',
   caption:'Eigenes Modell: Ausgangsumsatz 1.000, EBIT-Marge 12 %, Steuersatz 25 %. Nur der zusätzliche Kapitalbedarf k variiert; Ersatzinvestition und Abschreibung gleichen sich aus.',
   reading:'Ohne Wachstum beginnen alle Fälle bei 90. Bei 20 % Wachstum steigt der operative Nachsteuergewinn auf 108. Zusätzliche Investition 10, 80 oder 160 ergibt FCFF 98, 28 bzw. −52. Ein negatives aktuelles Ergebnis beweist noch keinen negativen Kapitalwert der Wachstumsausgaben.',
   plot:{x:[0,30],y:[-140,130],xLabel:'Umsatzwachstum (%)',yLabel:'FCFF der Periode',series:[.05,.4,.8].map(k=>({name:'Zusatzkapital k = '+k.toLocaleString('de-DE'),points:growth.map(g=>[g,.12*.75*1000*(1+g/100)-k*1000*g/100])})),
    marks:[{x:20,y:98,label:'98',dx:8,dy:-12},{x:20,y:28,label:'28',dx:8,dy:-12},{x:20,y:-52,label:'−52',dx:8,dy:-12}]}}),
  'Die Grafik hält die Gewinnmarge bewusst gleich. Der Unterschied entsteht ausschließlich durch Investitionsbedarf. So wird sichtbar, warum Umsatz- und Gewinnwachstum nicht mit sofortiger Ausschüttungsfähigkeit gleichgesetzt werden können.',
  'Ob die Investition wertschaffend ist, hängt von ihren gesamten künftigen Cashflows, Risiken und Kapitalkosten ab. Die Einsparung einer lohnenden Investition kann den heutigen FCFF verbessern und gleichzeitig den Unternehmenswert senken.'
 ]),
 S('performance-ratios','10. Cashflow-Leistungskennzahlen richtig lesen','b',[
  F('M_{CFO}=CFO/R,\\qquad Q_{earn}=CFO/NI','Die CFO-Marge verbindet Cashflow mit Umsatz. Der zweite Quotient vergleicht operativen Cashflow und Periodengewinn; beide benötigen konsistente Kategorien und sinnvolle positive Nenner.',[['M_{CFO}','Operativer Cashflow je Umsatzeinheit.'],['Q_{earn}','Cashflow-Gewinn-Verhältnis nach dieser Definition.'],['CFO,R,NI','Vergleichbar abgegrenzter operativer Cashflow, Umsatz und Periodengewinn.']]),
  'Im Lumen-Fall betragen CFO-Marge 120/1.000 = 12 % und CFO/Gewinn 120/105 ≈ 1,1429. Ein Wert über eins ist nicht automatisch ein Gütesiegel: Abschreibungen, Anzahlungen und Lieferantenfinanzierung können ihn erhöhen.',
  F('ROA_{cash}=CFO/\\overline A','Diese ausdrücklich einfache Cashflow-Rendite verwendet durchschnittliche Gesamtaktiva. Sie ist kein vollständiger finanzierungsneutraler Return on Invested Capital.',[['ROA_{cash}','CFO bezogen auf durchschnittliche Aktiva nach der hier festgelegten Definition.'],['CFO','Operativer Cashflow mit ausgewiesener Klassifikation.'],['\\overline A','Geeigneter durchschnittlicher Gesamtvermögensbestand der Periode.']]),
  'Bei großen Akquisitionen oder saisonaler Schwankung kann ein bloßer Mittelwert aus Anfang und Ende ungeeignet sein. Bei Verlust oder fast null Gewinn wird CFO/NI instabil oder wirtschaftlich schwer deutbar; dann werden Beträge und Ursachen getrennt analysiert.'
 ]),
 S('coverage-ratios','11. Schuldendienst braucht passende Zähler und Nenner','b',[
  F('Cov_I=\\frac{CFO+I+Tax_{cash}}{I},\\qquad Cov_{DS}=\\frac{CFO+I}{I+Principal}','Links wird ein CFO nach Zinsen und Steuern auf einen Vorzins-/Vorsteuerbetrag zurückgeführt. Rechts bleibt die Steuerzahlung berücksichtigt, aber der Zins wird vor dem Vergleich mit Zins plus Tilgung zurückgenommen. Das sind hier ausdrücklich definierte Varianten.',[['Cov_I','Cashflowbasierte Zinsdeckung nach der angegebenen Vorsteuerdefinition.'],['Cov_{DS}','Schuldendienstdeckung nach der angegebenen Nachsteuerdefinition.'],['CFO','Operativer Cashflow nach enthaltenen Zins- und Steuerzahlungen.'],['I,Tax_{cash}','Tatsächlich bezahlte und im CFO enthaltene Zinsen bzw. Ertragsteuern.'],['Principal','Im betrachteten Zeitraum zu zahlende Kredittilgung.']]),
  X('Zinsdeckung und gesamte Schuldendienstdeckung unterscheiden sich','Im FCFF-Lehrfall gelten CFO 145, Zinsen 20, Steuerzahlung 45; zusätzlich seien Tilgungen von 50 fällig.',[
   'Cash-Zinsdeckung nach obiger Definition: (145 + 20 + 45)/20 = 10,5.',
   'Nachsteuer-Schuldendienstdeckung: (145 + 20)/(20 + 50) ≈ 2,3571.',
   'Ein ausreichender Betrag für Zinsen allein beweist somit nicht dieselbe Reserve gegenüber Zinsen plus Tilgung. Notwendige Investitionen und unterjährige Fälligkeiten sind in beiden Quotienten noch nicht vollständig abgebildet.'
  ],'Vertrags-Covenants können andere Bereinigungen und Definitionen verlangen. Sie sind anhand des Vertrags zu berechnen.'),
  F('Cov_D=CFO/Debt,\\qquad Cov_{Capex}=CFO/Capex','Weitere Indikatoren vergleichen periodischen CFO mit einem Schuldenbestand oder mit Investitionsauszahlungen. Ihr wirtschaftlicher Zeithorizont ist daher unterschiedlich.',[['Cov_D','Periodischer CFO im Verhältnis zum ausdrücklich gewählten Finanzschuldenbestand.'],['Cov_{Capex}','CFO im Verhältnis zu Bruttoanlagenzahlungen der Periode.'],['CFO,Debt,Capex','Operativer Cashflow, Finanzschulden und Anlagenzahlungen nach konsistenter Definition.']]),
  'Bei CFO 145, Schulden 400 und Brutto-Capex 70 ergeben sich 36,25 % und rund 2,0714. Der Kehrwert der ersten Zahl ist höchstens eine stark vereinfachte statische Rückzahlungsdauer, wenn sämtlicher CFO verfügbar und konstant wäre; er ignoriert laufende Investitionen, Ausschüttungen und Fälligkeiten.'
 ]),
 S('valuation-workflow','12. Cashflow und Diskontsatz müssen denselben Anspruch bewerten','a b',[
  'FCFF wird im passenden Unternehmensmodell mit Kapitalkosten sämtlicher Kapitalgeber verbunden; aus dem operativen Wert werden anschließend nicht operative Vermögenswerte und vorrangige Ansprüche konsistent behandelt. FCFE wird mit der erforderlichen Eigenkapitalrendite verbunden. Ein vor Zinsen gerechneter Zahlungsstrom mit einem reinen Eigenkapitaldiskontsatz vermischt Anspruchsebenen.',
  T(['Prüfschritt','Entscheidende Frage'],[
   ['Berichtsbasis','Welches Regelwerk und welche Zins-, Steuer- und Dividendenklassifikation gelten?'],
   ['Nachhaltigkeit','Welche Bestandsfreisetzungen, Verkäufe oder anderen Einmaleffekte sind enthalten?'],
   ['Investition','Welche Ausgaben erhalten die Kapazität, welche schaffen Wachstum?'],
   ['Kapitalgeber','Ist FCFF oder FCFE gefragt, und welche Finanzierung wurde bereits abgezogen?'],
   ['Steuern','Ist der angesetzte Zinssteuervorteil tatsächlich und zeitgleich nutzbar?'],
   ['Abstimmung','Ergeben alternative Herleitungen bei denselben Annahmen denselben Betrag?']
  ],'Die Zahlenrechnung folgt erst nach Festlegung der wirtschaftlichen Abgrenzung.'),
  'Freie Cashflows sind Analysegrößen, keine gesetzlich einheitlich definierte zusätzliche Abschlusszeile. Deshalb werden Definitionen, Anpassungen und Brücken zu den veröffentlichten Zahlen offengelegt. Sonst kann derselbe Begriff in zwei Präsentationen verschiedene Zahlungsströme meinen.'
 ])
],related:[{unit:'cashflow-preparation',section:'case-data',label:'Vollständige Ausgangsdaten des Lumen-Falls'},{unit:'cashflow-preparation',section:'ifrs18-case',label:'Die IFRS-18-Umgliederung nachrechnen'},{unit:'ratios',section:'industry-forecast',label:'Umsatztage in künftige Kapitalbindung übersetzen'},{unit:'tvm',section:'terminal-value',label:'Zahlungszeitpunkt und Fortführungswert'},{unit:'analysis-framework',section:'management',label:'Bereinigte Ergebnisgrößen kritisch beurteilen'}],
 sources:[
 {title:'CFA Institute: Lernziele Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=12'},
 {title:'CFA Institute: Analyzing Statements of Cash Flows II',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/analyzing-statements-of-cash-flows-ii'},
 {title:'CFA Institute: Financial Ratio List; Definitionen können abweichen',url:'https://www.cfainstitute.org/sites/default/files/-/media/documents/support/programs/cfa/cfa_program_level_ii_financial_ratio_list.pdf'},
 {title:'IFRS Foundation: IAS 7 und Änderungen der Cashflowdarstellung',url:'https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/'},
 {title:'IFRS Foundation: IFRS 18 Effects Analysis',url:'https://www.ifrs.org/content/dam/ifrs/publications/amendments/english/2024/effect-analysis-ifrs18-april2024.pdf'}
 ],review:{status:'draft',date:'2026-09-24',note:'Eigene FCFF-/FCFE-Brücken mit expliziter Zinsklassifikation, Steuerannahme, Kapitalbindung und alternativen Gegenrechnungen.'}};
