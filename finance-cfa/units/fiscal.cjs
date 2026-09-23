const {F,T,X,S,G}=require('../author.cjs');
const debtPath=(i,g,pb)=>{let d=.8;return Array.from({length:11},(_,t)=>{if(t)d=(1+i)/(1+g)*d-pb;return[t,d*100];});};
module.exports={id:'fiscal',intro:[
 'Fiskalpolitik verändert öffentliche Einnahmen und Ausgaben. Damit beeinflusst sie nicht nur die Höhe der Nachfrage, sondern auch deren Zusammensetzung, Einkommensverteilung und künftige Produktionsmöglichkeiten. Eine Investition in Infrastruktur, eine Transferzahlung und eine Steuersenkung sind daher wirtschaftlich keine austauschbaren Buchungen.',
 'Wir beginnen mit den Instrumenten, leiten den einfachen Fiskalmultiplikator her und trennen anschließend politische Entscheidungen von automatischen Konjunktureffekten. Danach wird die Schuldendynamik aus der staatlichen Budgetgleichung aufgebaut. Die Rechenmodelle sind bewusst transparent: Ihre Annahmen erklären zugleich, weshalb eine reale Prognose mehr Informationen benötigt.'
],sections:[
 S('policy-map','1. Fiskalpolitik und Geldpolitik: ähnliche Ziele, andere Eingriffe','a b',[
  T(['Merkmal','Fiskalpolitik','Geldpolitik'],[
   ['Typische Entscheidungen','Steuern, Transfers, laufende Staatskäufe und öffentliche Investitionen.','Leitzinsen, Liquiditätsbereitstellung und weitere Zentralbankinstrumente.'],
   ['Unmittelbarer Ansatzpunkt','Öffentlicher Ressourcenverbrauch und verfügbare private Einkommen.','Finanzierungskonditionen, Erwartungen und monetäre Bedingungen.'],
   ['Institutionelle Zuständigkeit','Regierung und Gesetzgeber nach der jeweiligen Haushaltsordnung.','Zentralbank innerhalb ihres gesetzlichen Mandats.'],
   ['Verteilungswirkung','Kann Gruppen, Regionen oder konkrete Vorhaben gezielt adressieren.','Wirkt breiter, aber Schuldner, Sparer und Vermögenseigentümer sind unterschiedlich betroffen.']
  ],'Die Zuständigkeiten sind zu unterscheiden, obwohl sich ihre wirtschaftlichen Wirkungen gegenseitig beeinflussen.'),
  'Stabilisierung ist nur eine Aufgabe des Haushalts. Weitere Ziele können öffentliche Güter, soziale Absicherung, Umverteilung, die Korrektur externer Effekte und Investitionen in langfristige Leistungsfähigkeit sein. Ob eine Maßnahme diese Ziele effizient erreicht, ist eine eigene Frage neben ihrer kurzfristigen Nachfragewirkung.',
  'Eine schuldenfinanzierte Ausgabe der Regierung ist nicht schon deshalb eine geldpolitische Maßnahme. Umgekehrt ändert ein Zentralbankkauf einer bereits vorhandenen Staatsanleihe zunächst die Vermögens- und Finanzierungsstruktur, ohne automatisch einen neuen staatlichen Güterauftrag zu schaffen.'
 ]),
 S('instruments','2. Was genau wird verändert? Käufe, Investitionen, Transfers und Steuern','c',[
  T(['Instrument','Wirkung und möglicher Vorteil','Grenze oder Zielkonflikt'],[
   ['Laufende staatliche Käufe','Direkte Nachfrage nach Arbeit, Gütern und Dienstleistungen; bestehende Programme können rasch ausgeweitet werden.','Zusätzliche Beschaffung kann auf Kapazitätsengpässe treffen; laufende Verpflichtungen sind später schwer zurückzunehmen.'],
   ['Öffentliche Investition','Direkte Nachfrage heute; geeignete Infrastruktur kann private Produktivität morgen erhöhen.','Planung, Genehmigung und Bau dauern; ein teures Vorhaben ist nicht allein wegen seines BIP-Beitrags sinnvoll.'],
   ['Transfers','Stützen verfügbares Einkommen ausgewählter Haushalte; gezielte Hilfe bei Einkommensausfällen.','Empfänger können sparen oder Schulden tilgen; die Zahlung selbst ist keine aktuelle staatliche Güterproduktion.'],
   ['Direkte Steuern','Ändern verfügbares Einkommen und Nachsteuerrenditen; Gestaltung kann Verteilungsziele berücksichtigen.','Arbeits-, Spar- und Investitionsanreize sowie Ausweichreaktionen beeinflussen die Steuerbasis.'],
   ['Indirekte Steuern','Breite Einnahmebasis, gezielte Belastung bestimmter Aktivitäten möglich.','Preisniveau, reale Kaufkraft und Belastung verschiedener Einkommensgruppen können sich verändern.']
  ],'Die tatsächliche Wirkung hängt von Empfängern, Dauer, Finanzierung, Verwaltung und Gegenreaktionen ab.'),
  X('Warum eine Zahlung nicht immer in G eingeht','Der Staat bezahlt eine neu erbrachte Bauleistung von 10 oder überweist alternativ 10 als Haushaltshilfe.',[
   'Die Bauleistung ist bei geeigneter Abgrenzung unmittelbar staatliche Güter- bzw. Investitionsnachfrage. Die Überweisung ist zunächst ein Transfer und erhöht nicht für sich allein die produzierte Gütermenge.',
   'Konsumiert der Haushalt aus dem Transfer 8, entsteht daraus zunächst private Konsumnachfrage 8. Die übrigen 2 können gespart oder zur Schuldentilgung genutzt werden.',
   'Eine zusätzliche Importkomponente wäre in der BIP-Rechnung wieder abzuziehen. Der Zahlungsbetrag und die zusätzliche inländische Produktion sind deshalb nicht automatisch identisch.'
  ],'Die BIP-Identität erfasst Produktion und Endverwendung; der Staatshaushalt erfasst darüber hinaus Umverteilung und Finanzierung.')
 ]),
 S('multipliers','3. Den Ausgabenmultiplikator aus dem Gütermarkt herleiten','c d',[
  'Ein Fiskalmultiplikator misst die Änderung des Outputs je Einheit eines genau benannten fiskalischen Impulses. Der Ausgabenmultiplikator und der Steuermultiplikator unterscheiden sich, weil staatliche Käufe unmittelbar Nachfrage schaffen, während eine Steueränderung zunächst verfügbares Einkommen verändert.',
  'Für den folgenden kurzfristigen Modellfall sind Preise und Zinsen konstant, Kapazitäten frei, Investitionen und Exporte autonom und Erwartungen unverändert. Geplante Ausgaben bestimmen die Produktion. Das ist eine Lernrechnung für einen Mechanismus, keine universelle Schätzung eines Fiskalpakets.',
  F('C=C_0+c(Y-T),\\quad T=T_0+tY,\\quad M=mY','Ein Teil zusätzlichen verfügbaren Einkommens wird konsumiert. Einkommensabhängige Nettosteuern und Importe verringern die weitere Nachfrage nach heimischer Produktion.',[['C,C_0','Konsum und einkommensunabhängiger Konsum, in realen Geldeinheiten.'],['c','Marginale Konsumneigung aus verfügbarem Einkommen, hier 0 < c < 1.'],['Y','Reales Einkommen bzw. Produktion pro Periode.'],['T,T_0','Nettosteuern (Steuern minus Transfers) insgesamt und ihr autonomer Bestandteil.'],['t','Marginaler Nettosteuersatz auf zusätzliches Einkommen.'],['M,m','Importe und marginale Importneigung aus Gesamteinkommen.']]),
  F('Y=C_0+c[(1-t)Y-T_0]+I+G+X-mY','Einsetzen in die Ausgabenidentität macht die Rückkopplung sichtbar: Mehr Produktion erzeugt Einkommen, das teilweise erneut Nachfrage nach inländischen Gütern erzeugt.',[['Y,C_0,c,t,T_0,m','Einkommen und die zuvor definierten Konsum-, Steuer- und Importparameter.'],['I,G,X','Autonome Investitionen, staatliche Güterkäufe und Exporte pro Periode.']]),
  F('Y=\\frac{C_0-cT_0+I+G+X}{1-c(1-t)+m}','Alle einkommensabhängigen Terme werden auf die linke Seite gebracht. Die Division löst das Gleichgewicht; der Nenner muss positiv sein.',[['Y','Gleichgewichtseinkommen des vereinfachten Modells.'],['C_0,T_0,I,G,X','Autonomer Konsum, autonome Nettosteuern, Investitionen, Staatskäufe und Exporte.'],['c,t,m','Marginale Konsumneigung, Nettosteuersatz und Importneigung.']]),
  F('k_G=\\frac{\\Delta Y}{\\Delta G}=\\frac{1}{1-c(1-t)+m},\\qquad k_T=\\frac{\\Delta Y}{\\Delta T_0}=\\frac{-c}{1-c(1-t)+m}','Staatskäufe wirken im Modell direkt in der ersten Runde. Eine Senkung autonomer Nettosteuern wirkt zunächst nur mit dem konsumierten Anteil.',[['k_G,k_T','Fiskalmultiplikatoren für Staatskäufe bzw. autonome Nettosteuern.'],['\\Delta Y,\\Delta G,\\Delta T_0','Änderung von Einkommen, Staatskäufen und autonomen Nettosteuern.'],['c,t,m','Unveränderte marginale Konsumneigung, Nettosteuersatz und Importneigung.']]),
  'Im geschlossenen Sonderfall ohne proportionale Nettosteuer entsteht aus einer zusätzlichen staatlichen Nachfrage von 10 bei c = 0,8 die Folge 10 + 8 + 6,4 + 5,12 + … . Die geometrische Reihe summiert sich auf 50. Die ersten 10 sind kein fünfmal ausgegebener identischer Gegenstand: Jede neue Runde ist zusätzliche Produktion und zusätzliches Einkommen, sofern das Modell tatsächlich passende freie Kapazität unterstellt.'
 ]),
 S('leakages','4. Vergleichsrechnung: derselbe Impuls, verschiedene Rückkopplungen','c d',[
  X('Steuern und Importe verringern den einfachen Fiskalmultiplikator','Verglichen werden Modelle mit c = 0,8. In Modell A sind t und m null. In Modell B sind t = 0,25 und m = 0,1.',[
   F('k_G^A=1/(1-0{,}8)=5,\\qquad k_G^B=1/[1-0{,}8(1-0{,}25)+0{,}1]=2','In Modell B beträgt die zusätzliche Nachfrage nach heimischer Produktion aus einem zusätzlichen Einkommen nur 0,5; der Rest fließt in andere Verwendungen.',[['k_G^A,k_G^B','Ausgabenmultiplikatoren der beiden ausdrücklich definierten Modelle.']]),
   'Zusätzliche Staatskäufe von 10 erhöhen das Gleichgewichtseinkommen um 50 in A und um 20 in B. Bei B ergibt eine Nettosteuersenkung von 10 dagegen nur +16: kT = −1,6 wird mit ΔT0 = −10 multipliziert.',
   'Eine Transfererhöhung von 10 ist in dieser Nettosteuerkonvention ebenfalls ΔT0 = −10. Unterschiedliche Konsumneigungen der tatsächlichen Empfänger sind hier noch nicht modelliert.'
  ],'Das Vorzeichen des Instruments und das Vorzeichen des Multiplikators gehören zusammen: Ein negativer Steuermultiplikator macht eine Steuersenkung expansiv.'),
  G({id:'spending-cross',title:'Ein Nachfrageimpuls von 10 verschiebt das Gleichgewicht um 20',
   caption:'Eigenes Modell B: geplante Gesamtausgaben AE = 50 + 0,5Y, nach zusätzlichen Staatskäufen AE = 60 + 0,5Y. Preise und Zinsen sind konstant; alle Werte sind reale Geldeinheiten pro Periode.',
   reading:'Am Schnitt mit AE = Y stimmen geplante Nachfrage und Produktion überein. Die Gleichgewichte liegen bei 100 und 120. Bei unverändertem Y beträgt der vertikale Impuls 10, die gesamte Outputreaktion im Modell aber 20.',
   plot:{x:[60,160],y:[60,160],square:true,xLabel:'Produktion / Einkommen Y',yLabel:'Geplante Gesamtausgaben AE',series:[
    {name:'Gleichgewichtsbedingung AE = Y',dash:'5 4',points:[[60,60],[160,160]]},
    {name:'Vor dem Impuls',points:[[60,80],[160,130]]},
    {name:'Nach dem Impuls',points:[[60,90],[160,140]]}
   ],marks:[{x:100,y:100,label:'Y = 100',dx:8,dy:24},{x:120,y:120,label:'Y = 120',dx:8,dy:-14}]}}),
  'Die Grafik ist ein Keynesianisches Kreuz mit Ausgaben auf der vertikalen Achse. Sie ist keine Preis-Mengen-Darstellung und zeigt daher keinen Inflationsanstieg. Sobald Preise, Zinsen, Wechselkurse oder private Erwartungen reagieren, kann die tatsächliche Outputänderung deutlich anders sein.'
 ]),
 S('balanced-budget','5. Ein unverändertes Defizit garantiert keinen unveränderten Nachfrageimpuls','c d',[
  F('\\Delta G=\\Delta T_0\\quad\\Longrightarrow\\quad\\Delta Y=\\frac{1-c}{1-c(1-t)+m}\\Delta G','Eine gleich hohe Erhöhung von Käufen und autonomen Nettosteuern kombiniert den positiven Kauf- und den negativen Steuereffekt. Gemeint ist die gleiche anfängliche Instrumentenänderung; spätere konjunkturelle Einnahmen können den tatsächlichen Saldo weiter verändern.',[['\\Delta G,\\Delta T_0','Gleich große Änderung der Staatskäufe und autonomen Nettosteuern.'],['\\Delta Y','Modellbedingte Einkommensänderung.'],['c,t,m','Marginale Konsumneigung, Nettosteuersatz und Importneigung.']]),
  'Bei t = m = 0 kürzen sich Zähler und Nenner: Der klassische Balanced-Budget-Fiskalmultiplikator ist eins. Bei c = 0,8, t = 0,25 und m = 0,1 beträgt er dagegen 0,4. Jeweils +10 bei G und T0 erzeugen hier +4 Einkommen.',
  'Der Grund ist die erste Runde: Käufe von 10 erhöhen Nachfrage sofort um 10. Eine Steuererhöhung von 10 senkt Konsum bei c = 0,8 zunächst um 8. Der verbleibende Impuls von 2 durchläuft die weiteren Runden. Eine bloße Betrachtung „Ausgaben und Einnahmen steigen gleich stark“ übersieht diesen Unterschied.',
  'Das Ergebnis gilt für die angenommenen autonomen, nicht verzerrenden Nettosteuern und konstante Modellparameter. Eine tatsächliche Einkommensteuersatzerhöhung verändert t und damit auch den Nenner; sie darf nicht ohne Weiteres wie ein pauschaler Betrag behandelt werden.'
 ]),
 S('stabilizers','6. Automatische Stabilisatoren und diskretionäre Politik trennen','c d',[
  'Bei unveränderten Regeln fallen in einer Rezession häufig Steuerzahlungen und steigen bestimmte Sozialtransfers. Dadurch sinkt verfügbares Einkommen weniger stark als Markteinkommen. Diese automatischen Stabilisatoren benötigen keinen neuen Beschluss für jede Konjunkturbewegung.',
  X('Die automatische Reaktion abschätzen','Das Einkommen fällt exogen zunächst um 100. Der marginale Nettosteuersatz beträgt 25 %; die marginale Konsumneigung aus verfügbarem Einkommen beträgt 80 %. Alle anderen Größen bleiben für diese erste Runde gleich.',[
   'Nettosteuern fallen um 25. Verfügbares Einkommen sinkt deshalb um 75 statt um 100.',
   'Der erste Konsumrückgang ist 0,8 × 75 = 60 statt 80 ohne diese Steuer-/Transferreaktion. Der Haushaltssaldo verschlechtert sich, ohne dass Steuersätze oder Leistungsregeln geändert wurden.',
   'Das ist eine erste-Runden-Rechnung. Eine vollständige Gleichgewichtsänderung erfordert zusätzlich das Rückkopplungsmodell; die 20 vermiedenen Konsumausgabenverluste sind nicht automatisch der gesamte BIP-Effekt.'
  ],'Ein größeres Defizit ist kein ausreichender Beleg für eine neu beschlossene expansive Politik.'),
  'Diskretionäre Maßnahmen verändern dagegen die Regeln oder Programme ausdrücklich. Sie können gezielt wirken, benötigen aber Entscheidungen und Umsetzung. Automatische Stabilisatoren können Abschwünge abfedern, lösen jedoch weder jeden Angebotsschock noch dauerhaft schwache Produktivität.'
 ]),
 S('stance','7. Budgetsaldo, struktureller Saldo und Richtung der Politik','b d',[
  F('PB=R-G_P,\\qquad BUD=PB-iB_{-1}','Der Primärsaldo lässt Zinsausgaben weg. Der gesamte Budgetsaldo zieht sie ab. Positive Werte bedeuten hier Überschüsse; ein positives Defizit ist das Negative des Budgetsaldos.',[['PB','Primärüberschuss pro Periode; bei negativem Wert Primärdefizit.'],['R','Staatliche Einnahmen im betrachteten Abgrenzungssystem.'],['G_P','Primärausgaben einschließlich Transfers, aber ohne Zinsen; nicht identisch mit G in der BIP-Güteridentität.'],['BUD','Gesamtbudgetüberschuss.'],['i','Effektiver nominaler Zins auf den anfänglichen Schuldenstand.'],['B_{-1}','Schuldenstand zu Beginn der Periode.']]),
  'Für die konjunkturbereinigte Betrachtung wird geschätzt, wie der Saldo bei einer geeigneten Normalauslastung aussähe. Ein struktureller Saldo bereinigt nach der verwendeten Methodik außerdem bestimmte einmalige Effekte. Die Schätzung hängt von Potenzialoutput, Einnahmeelastizitäten und der Behandlung von Sonderposten ab.',
  T(['Vereinfachter Vergleich in % eines konsistenten BIP-Maßstabs','Vorher','Nachher'],[
   ['Beobachteter Primärsaldo','−3','−2'],
   ['Geschätzte zyklische Komponente','−2','0'],
   ['Konjunkturbereinigter Primärsaldo','−1','−2']
  ],'Der beobachtete Saldo verbessert sich um einen Punkt, während sich der bereinigte Saldo um einen Punkt verschlechtert. Einheiten und Bereinigungsmethode bleiben im Beispiel gleich.'),
  'Hier verdeckt der Konjunkturaufschwung eine expansive Veränderung der bereinigten Position. Eine Verschlechterung des strukturellen Primärsaldos gilt häufig als Hinweis auf einen expansiven Fiskalimpuls; die tatsächliche Nachfragewirkung hängt zusätzlich von der Zusammensetzung ab.',
  'Man unterscheidet das Niveau der Position von ihrer Veränderung: Ein Defizit von 4 % kann gegenüber einem vorherigen Defizit von 6 % eine restriktive Veränderung darstellen. Zinsausgaben und automatische Einnahmen dürfen dabei nicht unbesehen als neue diskretionäre Maßnahmen gezählt werden.'
 ]),
 S('debt-dynamics','8. Vom jährlichen Saldo zur Schuldenquote','b',[
  F('B_t=(1+i)B_{t-1}-PB_t+SFA_t','Der alte Schuldenstand plus Zinsen wird durch einen Primärüberschuss verringert. Stock-Flow Adjustments erfassen die ausdrücklich verbleibenden Veränderungen, beispielsweise Bewertungs- oder Finanztransaktionen außerhalb des hier gewählten Saldos.',[['B_t,B_{t-1}','Nominaler Schuldenstand am aktuellen und vorherigen Periodenende.'],['i','Effektiver nominaler Periodenzins auf Bₜ₋₁.'],['PB_t','Primärüberschuss derselben Periode in nominalen Geldeinheiten.'],['SFA_t','Sonstige Bestandsänderung; positiv erhöht sie die Schulden.'],['t','Periodenindex.']]),
  F('Y_t=(1+g)Y_{t-1},\\qquad d_t=\\frac{1+i}{1+g}d_{t-1}-pb_t+sfa_t','Die Division durch das aktuelle nominale BIP erzeugt die Schuldenquotengleichung. Beim alten Schuldenstand ist deshalb zusätzlich die BIP-Wachstumsanpassung nötig.',[['Y_t,Y_{t-1}','Nominales BIP der aktuellen und vorherigen Periode.'],['g','Nominale BIP-Wachstumsrate.'],['d_t,d_{t-1}','Schuldenquoten B/Y, jeweils mit dem BIP der eigenen Periode.'],['pb_t,sfa_t','Primärüberschuss bzw. sonstige Bestandsänderung geteilt durch aktuelles BIP Yₜ.'],['i','Effektiver nominaler Zins; mit nominalem g vergleichen.']]),
  F('\\Delta d_t=\\frac{i-g}{1+g}d_{t-1}-pb_t+sfa_t','Nach Abzug der alten Quote bleibt der Zins-Wachstums-Effekt plus Primärsaldo und sonstige Änderungen. Die Näherung (i−g)d lässt den Nenner weg und ist nicht exakt.',[['\\Delta d_t','Änderung der Schuldenquote als Dezimalzahl; mal 100 ergibt Prozentpunkte.'],['i,g,d_{t-1},pb_t,sfa_t','Nominalzins, nominales Wachstum, alte Schuldenquote, aktueller Primärüberschuss und Bestandsänderung relativ zum aktuellen BIP.']]),
  'Ein Nominalzins darf in dieser Gleichung nicht mit realem BIP-Wachstum kombiniert werden. Ebenso ist der heutige Zins einer neu begebenen Anleihe nicht automatisch der effektive Durchschnittszins des gesamten Bestands: Fälligkeiten und Refinanzierung verteilen die Anpassung über die Zeit.'
 ]),
 S('debt-example','9. Warum ein Primärüberschuss die Quote nicht immer stabilisiert','b',[
  X('Schuldenquote 80 %, Nominalzins 5 %, nominales Wachstum 3 %','Das alte BIP beträgt 100 und die alte Schuld 80. Ein Primärüberschuss von 1 % des neuen BIP wird erzielt; sonstige Bestandsänderungen sind null.',[
   'Neues BIP: 103. Zinsen: 0,05 × 80 = 4. Primärüberschuss: 0,01 × 103 = 1,03. Neue Schuld: 80 + 4 − 1,03 = 82,97.',
   F('d_1=82{,}97/103\\approx80{,}5534\\%','Der Primärüberschuss reicht nicht, um den Zins-Wachstums-Effekt auszugleichen. Die Quote steigt um rund 0,5534 Prozentpunkte.',[['d_1','Schuldenstand geteilt durch aktuelles nominales BIP.']]),
   F('pb^*=\\frac{i-g}{1+g}d_0=\\frac{0{,}05-0{,}03}{1{,}03}\\cdot0{,}8\\approx1{,}5534\\%','Ohne sonstige Bestandsänderungen stabilisiert ein Primärüberschuss von etwa 1,5534 % des aktuellen BIP die Quote.',[['pb^*','Zur Stabilisierung benötigter Primärüberschuss relativ zum aktuellen BIP.'],['i,g,d_0','Nominaler Zins, nominales Wachstum und Ausgangsschuldenquote.']]),
   'In Geldeinheiten sind das 1,60. Neue Schuld wäre dann 82,40; geteilt durch 103 ergibt das wieder 80 %. Der nominale Schuldenstand steigt trotz stabiler Quote.'
  ],'Bestand und Quote beantworten unterschiedliche Fragen. Ein Primärüberschuss bedeutet außerdem noch keinen gesamten Haushaltsüberschuss.'),
  'Sind dagegen i = 3 % und g = 6 %, erlaubt dieselbe Ausgangsquote rechnerisch einen stabilisierenden Primärsaldo von rund −2,2642 % des aktuellen BIP. Der negative Wert bedeutet ein Primärdefizit. Das ist eine bedingte Rechnung, kein dauerhafter Freibrief: Wachstum, Zinsen und Finanzierungsmöglichkeiten können sich ändern.',
  G({id:'debt-paths',title:'Kleine dauerhafte Unterschiede kumulieren in der Schuldenquote',
   caption:'Eigene Szenarien mit Anfangsquote 80 %, nominalem Wachstum 3 % und konstantem Primärüberschuss von 1 % des jeweiligen aktuellen BIP. Effektiver Nominalzins alternativ 2 %, 5 % oder 7 %; keine sonstigen Bestandsänderungen.',
   reading:'Bei gleichem Primärsaldo fällt die Quote im 2%-Zinsszenario und steigt bei 5 % sowie stärker bei 7 %. Die Linien wenden in jedem Jahr dieselbe Bestandsrekursion an; sie sind keine empirische Prognose.',
   plot:{x:[0,10],y:[60,110],xLabel:'Jahre im Modell',yLabel:'Schuldenquote (% des BIP)',series:[
    {name:'Zins 2 %, Wachstum 3 %',points:debtPath(.02,.03,.01)},
    {name:'Zins 5 %, Wachstum 3 %',points:debtPath(.05,.03,.01)},
    {name:'Zins 7 %, Wachstum 3 %',points:debtPath(.07,.03,.01)}
   ]}})
 ]),
 S('debt-assessment','10. Wofür die Höhe der Staatsschuld wichtig ist — und wofür nicht allein','b',[
  T(['Grund zur Sorge','Warum eine einzelne Bruttoquote trotzdem nicht genügt'],[
   ['Zinslast verdrängt andere Haushaltszwecke.','Effektiver Zins, Laufzeiten, Einnahmen und Refinanzierungsprofil unterscheiden sich.'],
   ['Umschuldungs- oder Liquiditätsrisiko kann steigen.','Eigene Währung, Fremdwährungsschuld, Investorenbasis und institutionelle Glaubwürdigkeit verändern das Risiko.'],
   ['Zukünftige Steuern können Anreize belasten.','Ertragreiche öffentliche Vermögenswerte und höheres Produktionspotenzial können gegenüberstehen.'],
   ['Hoher Finanzierungsbedarf kann privaten Kapitaleinsatz verdrängen.','Bei freien Ressourcen oder produktiver Infrastruktur kann private Aktivität auch gestützt werden.'],
   ['Verdeckte Verpflichtungen können später materialisieren.','Bruttoschulden erfassen nicht automatisch Garantien, öffentliche Beteiligungen oder alle künftigen Leistungszusagen.']
  ],'Es gibt hier keine zeitlose universelle Schuldenquote, oberhalb derer jede Volkswirtschaft zwangsläufig ausfällt.'),
  'Bei inländisch gehaltenen Schulden stehen staatlichen Zahlungsverpflichtungen Forderungen privater Halter gegenüber. Damit verschwinden aber weder Verteilungsfragen noch Steuerverzerrungen oder die Bindung realer Ressourcen. Ausländische Gläubiger, Währungsrisiko und Kapitalabflüsse ergänzen andere Übertragungskanäle.',
  'Ein Vergleich sollte Brutto- und Nettoschulden, Qualität staatlicher Vermögenswerte, Schuldenlaufzeiten, Währung, Zinsbindung und wahrscheinliche künftige Primärsalden offenlegen. Eine Liquiditätskrise wegen kurzfristiger Fälligkeiten und langfristig untragbare Zahlungsversprechen sind eng verwandt, aber nicht dieselbe Diagnose.'
 ]),
 S('crowding-out','11. Verdrängung, private Reaktionen und Ricardianische Äquivalenz','b c d',[
  'Bei hoher Auslastung konkurriert zusätzliche Staatsnachfrage um knappe Arbeitskräfte und Kapitalgüter. Steigende Finanzierungskosten können private Investitionen verdrängen; bei offenen Kapitalmärkten können außerdem Kapitalzuflüsse, Wechselkurs und Nettoexporte reagieren. Stärke und Richtung hängen auch von der Geldpolitik ab.',
  'Sind Ressourcen unbeschäftigt, kann höhere Nachfrage dagegen Kapazitäten auslasten und private Absatzprognosen verbessern. Geeignete öffentliche Infrastruktur kann zusätzlich die Produktivität privater Projekte erhöhen. Diese Möglichkeit heißt nicht, dass jedes staatliche Projekt automatisch einen positiven gesellschaftlichen Kapitalwert besitzt.',
  X('Wie eine private Gegenreaktion den Modellmultiplikator verändert','Im Modell B mit kG = 2 steigen Staatskäufe um 10. Angenommen, ein ausdrücklich zusätzlicher Zinseffekt senkt autonome private Investitionen um 3.',[
   'Der autonome Nettoimpuls ist 10 − 3 = 7. Unter sonst unverändertem Modell steigt Output um 2 × 7 = 14 statt um 20.',
   'Die 3 sind eine angenommene Gegenreaktion, keine aus dem einfachen Gütermarktmodell selbst hergeleitete Zahl. Ohne Zins- und Investitionsmodell lässt sie sich nicht automatisch vorhersagen.'
  ],'Eine Modellannahme darf nicht als empirisch gesicherte Größe ausgegeben werden.'),
  'Ricardianische Äquivalenz bezeichnet einen restriktiven theoretischen Fall: Eine heutige kreditfinanzierte Steuersenkung erzeugt bei unverändertem staatlichem Ausgabenpfad die Erwartung entsprechender künftiger Steuern. Vorausschauende, unbeschränkt kreditfähige Haushalte sparen den Vorteil, sodass ihr Konsum nicht steigt. Dafür sind unter anderem passende Planungshorizonte, hinreichende Sicherheit und nicht verzerrende Steuern nötig.',
  'Liquiditätsbeschränkungen, unterschiedliche Zeithorizonte, Unsicherheit und verzerrende Steuern können diese Neutralität brechen. Das Argument beweist weder, dass Defizite immer wirkungslos sind, noch, dass private Erwartungen immer unwichtig wären.'
 ]),
 S('implementation','12. Zeitverzögerungen und eine überprüfbare Politikanalyse','c d',[
  T(['Verzögerung','Konkrete Frage','Mögliche Folge'],[
   ['Erkennung','Ist die Schwäche bereits verlässlich in Daten erkennbar?','Revisionen und uneindeutige Signale können die Diagnose verzögern.'],
   ['Entscheidung','Wann stehen Entwurf, Mehrheit und Finanzierung?','Ein Paket kann beschlossen werden, nachdem sich die Lage schon geändert hat.'],
   ['Umsetzung','Wann können Behörden zahlen, beschaffen oder bauen?','Geld im Haushalt ist noch keine tatsächliche Güterlieferung.'],
   ['Wirkung','Wann ändern Haushalte und Unternehmen ihre Ausgaben?','Die maximale Wirkung kann erst in einer anderen Konjunkturphase auftreten.']
  ],'Automatische Stabilisatoren verkürzen insbesondere die Notwendigkeit neuer Einzelentscheidungen; sie beseitigen nicht jede Reaktionsverzögerung.'),
  'Ein verspäteter expansiver Impuls kann auf eine bereits ausgelastete Wirtschaft treffen. Umgekehrt können starre jährliche Ausgleichsregeln im Abschwung Steuererhöhungen oder Kürzungen erzwingen und den Zyklus verstärken. Temporäre Maßnahmen sind zudem politisch und administrativ nicht immer leicht zu beenden.',
  'Für eine gute Prüfungsantwort werden nacheinander Instrument, Begünstigte, unmittelbarer Nachfragekanal, automatische Reaktion, mögliche Gegenwirkung und Zeithorizont benannt. Danach erst wird die Politik als expansiv oder restriktiv eingeordnet und die Aussage gegen den bereinigten Haushalt sowie den Schuldenpfad geprüft.',
  'Eine Maßnahme kann kurzfristig Nachfrage stärken und gleichzeitig die langfristige Tragfähigkeit belasten; produktive Investition kann beide Horizonte günstiger verbinden. Die richtige Beurteilung nennt die Annahmen, unter denen die jeweilige Wirkung erwartet wird.'
 ])
],related:[{unit:'cycles',section:'output-gap',label:'Konjunkturlage und Produktionslücke auseinanderhalten'},{unit:'cycles',section:'demand-components',label:'Bestandteile der gesamtwirtschaftlichen Nachfrage'},{unit:'returns',section:'purchasing-power',label:'Nominale und reale Größen konsistent vergleichen'},{unit:'tvm',section:'growing-cashflows',label:'Wachstum und Diskontierung über mehrere Perioden'}],
 sources:[
 {title:'CFA Institute: offizieller Lernzielkatalog Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=6'},
 {title:'CFA Institute: Fiscal Policy',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/fiscal-policy'},
 {title:'OpenStax: Fiscal Policy, Recession and Inflation',url:'https://openstax.org/books/principles-macroeconomics-3e/pages/17-4-using-fiscal-policy-to-fight-recession-unemployment-and-inflation'},
 {title:'OpenStax: Automatic Stabilizers',url:'https://openstax.org/books/principles-macroeconomics-3e/pages/17-5-automatic-stabilizers'},
 {title:'OpenStax: Practical Problems with Discretionary Fiscal Policy',url:'https://openstax.org/books/principles-macroeconomics-3e/pages/17-6-practical-problems-with-discretionary-fiscal-policy'},
 {title:'IMF: Fiscal and Financial Risks of a High-Debt, Slow-Growth World',url:'https://www.imf.org/en/Blogs/Articles/2024/03/28/the-fiscal-and-financial-risks-of-a-high-debt-slow-growth-world'}
 ],review:{status:'draft',date:'2026-09-23',note:'Eigene Fiskalmultiplikator- und Schuldenrekursionen; Modellannahmen, Saldenkonventionen und die Grenzen einer mechanischen Politikbeurteilung ausdrücklich ausgewiesen.'}};
