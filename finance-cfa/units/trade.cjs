const {F,T,X,S,G}=require('../author.cjs');
module.exports={id:'trade',intro:[
 'Internationaler Handel erlaubt, Produktion und Konsum räumlich zu trennen. Entscheidend ist nicht, welches Land in allem absolut produktiver ist, sondern wo eine zusätzliche Einheit die geringsten aufgegebenen Alternativen kostet. Diese Logik erklärt mögliche Gesamtgewinne; die Verteilung dieser Gewinne ist eine zweite, ebenso wichtige Frage.',
 'Wir rechnen zunächst einen konsistenten Spezialisierungs- und Tauschfall durch. Danach benutzen Zoll, Quote und Subvention bewusst dieselben Angebots- und Nachfragefunktionen. Dadurch wird sichtbar, welche Ergebnisse aus dem Instrument folgen und welche aus einer veränderten Modellannahme.'
],sections:[
 S('comparative','1. Absoluter Vorteil und komparativer Vorteil unterscheiden','a',[
  T(['Arbeitsstunden je Einheit','Land A','Land B'],[
   ['Getreide W','1','3'],['Tuch C','2','4']
  ],'Eigenes Zweigütermodell mit einem Produktionsfaktor. Jedes Land verfügt über 120 Arbeitsstunden; Einheiten und Qualitäten der Güter sind vergleichbar.'),
  'A benötigt für beide Güter weniger Arbeitsstunden und hat damit in beiden einen absoluten Produktivitätsvorteil. Für den komparativen Vorteil vergleichen wir jedoch die Güter, auf deren Produktion beim Wechsel verzichtet wird.',
  F('OC_W=\\frac{a_W}{a_C},\\qquad OC_C=\\frac{a_C}{a_W}','Arbeitsbedarf einer Einheit wird durch den Arbeitsbedarf des alternativen Guts geteilt. Die Einheiten der Quotienten sind entscheidend.',[['OC_W,OC_C','Opportunitätskosten einer Einheit Getreide in Tuch bzw. einer Einheit Tuch in Getreide.'],['a_W,a_C','Arbeitsstunden je Einheit Getreide und Tuch im jeweiligen Land.']]),
  'In A kostet ein Getreide 0,5 Tuch, in B 0,75 Tuch. A hat den komparativen Vorteil bei Getreide. Ein Tuch kostet in A zwei Getreide und in B 4/3 Getreide: B hat den komparativen Vorteil bei Tuch, obwohl es absolut mehr Arbeit für beide Güter benötigt.',
  'Ein Land kann im einfachen Zweigütermodell nicht gleichzeitig bei beiden Gütern den streng niedrigeren relativen Opportunitätskostenquotienten haben: Die beiden Quotienten sind Kehrwerte. Sind sie in beiden Ländern gleich, entsteht aus genau diesem konstanten Produktivitätsmodell kein solcher Spezialisierungsvorteil.'
 ]),
 S('exchange','2. Den Tauschbereich und die Konsumgewinne vollständig nachrechnen','a',[
  F('\\frac43<p_C/p_W<2','Für strikt vorteilhaften Tausch liegt der relative Tuchpreis zwischen den Opportunitätskosten beider Länder. An einer Grenze wäre eines im einfachen Modell gerade indifferent.',[['p_C/p_W','Getreideeinheiten, die im Handel für eine Tucheinheit bezahlt werden.']]),
  X('Beide Länder gewinnen, obwohl A in beiden Gütern produktiver ist','Zunächst teilt jedes Land seine 120 Arbeitsstunden gleich auf beide Güter auf. Anschließend verschieben sie Produktion und tauschen zu 1,6 Getreide je Tuch.',[
   'Ohne Handel produziert und konsumiert A 60 Getreide und 30 Tuch. B produziert und konsumiert 20 Getreide und 15 Tuch. Weltproduktion: 80 Getreide und 45 Tuch.',
   'Neue Produktion: A verwendet 90 Stunden für 90 Getreide und 30 Stunden für 15 Tuch. B verwendet alle 120 Stunden für 30 Tuch. Weltproduktion: 90 Getreide und 45 Tuch. Die gleichen Ressourcen erzeugen zehn zusätzliche Getreideeinheiten.',
   'B liefert 15 Tuch an A und erhält dafür 24 Getreide. A konsumiert danach 66 Getreide und 30 Tuch. B konsumiert 24 Getreide und 15 Tuch. Beide besitzen genauso viel Tuch wie vorher und mehr Getreide.',
   'A könnte dieses Konsumbündel allein nur mit 66 + 2 × 30 = 126 Stunden herstellen, B seines mit 3 × 24 + 4 × 15 = 132 Stunden. Beide überschreiten über Handel ihre jeweilige eigene Produktionsmöglichkeit, ohne dass die Welt mehr als 240 Stunden einsetzt.'
  ],'Konsum kann außerhalb der eigenen Produktionsgrenze liegen; Produktion kann bei den gegebenen Ressourcen nicht außerhalb der globalen effizienten Grenze liegen.'),
  'Vollständige Spezialisierung beider Länder ist für einen Wohlfahrtsgewinn nicht nötig. Das Beispiel lässt A weiter etwas Tuch produzieren, damit der Vergleich die gleiche weltweite Tuchmenge enthält. Die endgültige Produktion und der Handelspreis hängen zusätzlich von Nachfrage ab.',
  G({id:'world-frontier',title:'Umschichtung kann bei gleicher Tuchmenge mehr Getreide ermöglichen',
   caption:'Globale Produktionsgrenze aus jeweils 120 Arbeitsstunden: A benötigt 1 Stunde je Getreide und 2 je Tuch, B 3 bzw. 4. Gezeichnet sind eigene Modellwerte ohne Handels- oder Anpassungskosten.',
   reading:'Das anfängliche Bündel (80; 45) liegt unterhalb der effizienten Weltgrenze. Die Umschichtung erreicht (90; 45). Der Knick bei (120; 30) entsteht, wenn A vollständig auf Getreide spezialisiert ist und zusätzliche Getreideproduktion danach in B teureres Tuch verdrängt.',
   plot:{x:[0,170],y:[0,100],xLabel:'Weltproduktion Getreide W',yLabel:'Weltproduktion Tuch C',series:[
    {name:'Effiziente globale Produktionsgrenze',points:[[0,90],[120,30],[160,0]]}
   ],marks:[{x:80,y:45,label:'Vorher (80; 45)',dx:-10,dy:24,anchor:'end'},{x:90,y:45,label:'Nachher (90; 45)',dx:10,dy:-14}]}})
 ]),
 S('gains-costs','3. Gesamtgewinne sind nicht automatisch Gewinne für jede Person','a',[
  T(['Möglicher Handelsgewinn','Gegenüberstehende Anpassungs- oder Verteilungsfrage'],[
   ['Spezialisierung nach relativen Kosten','Arbeitskräfte und Kapital sind kurzfristig nicht beliebig in neue Tätigkeiten versetzbar.'],
   ['Größere Märkte und Skaleneffekte','Kleine oder weniger produktive Anbieter können Marktanteile verlieren.'],
   ['Mehr Wettbewerb und Auswahl','Gewinne und Löhne in zuvor geschützten Bereichen können sinken.'],
   ['Wissen, Technologie und Zugang zu Vorprodukten','Abhängigkeiten von engen Liefernetzen können neue Risiken schaffen.']
  ],'Die Produktivitätsrechnung zeigt mögliche Gesamtgewinne, keine automatische Entschädigung der Verlierer.'),
  'Das Einfaktormodell hält Arbeitsproduktivität konstant, lässt innerhalb eines Landes Ressourcen reibungslos wechseln und ignoriert Transportkosten, externe Effekte und politische Risiken. Sind diese Voraussetzungen verletzt, muss die Größenordnung der Gewinne neu beurteilt werden.',
  'In Modellen mit mehreren Produktionsfaktoren können Sektoren und Faktorgruppen unterschiedlich betroffen sein. Arbeitnehmer einer importkonkurrierenden Branche können trotz niedrigerer Konsumentenpreise erhebliche Einkommensverluste erleiden. Kurzfristige Umschulungs- und Standortkosten können lange anhalten.',
  'Ein Argument für Versorgungssicherheit oder gegen einen externen Umweltschaden ist nicht bereits ein Beweis, dass jeder beliebige Zoll das beste Instrument ist. Die Analyse fragt nach dem konkreten Marktversagen, einem passenden Instrument und dessen Kosten gegenüber Alternativen.'
 ]),
 S('small-country','4. Ein konsistenter heimischer Markt als Ausgangspunkt','b',[
  F('Q_D=100-2P,\\qquad Q_S=P-10','Die Funktionen gelten im hier verwendeten relevanten positiven Mengenbereich. Nachfrage sinkt und Angebot steigt mit dem heimischen Preis.',[['Q_D,Q_S','Heimische nachgefragte und angebotene Menge pro Periode.'],['P','Heimischer Preis je Einheit in Geldeinheiten.']]),
  'Ohne Handel gilt QD = QS. Damit ist 100 − 2P = P − 10, also P = 110/3 ≈ 36,667 und Q = 80/3 ≈ 26,667. Dies ist der Autarkiepreis des gewählten Markts.',
  'Im kleinen offenen Land ist der Weltpreis für die heimische Entscheidung vorgegeben. Bei Weltpreis 20 konsumieren Käufer 60, heimische Anbieter produzieren 10 und Importe decken die Differenz 50. Transportkosten und andere Handelshemmnisse sind zunächst null.',
  F('M=Q_D-Q_S\\quad\\text{bei }Q_D>Q_S','Importe sind die positive Lücke zwischen heimischem Verbrauch und heimischer Produktion. Bei umgekehrter Lücke entstehen Exporte, sofern Handel möglich ist.',[['M','Importmenge.'],['Q_D,Q_S','Heimische Nachfrage- und Angebotsmenge zum gleichen Preis.']]),
  '„Klein“ bedeutet hier, dass das Land den Weltmarktpreis durch seine Mengenänderung nicht beeinflusst. Es geht nicht um seine geografische Fläche. Diese Annahme wird bei der Wohlfahrtsrechnung wesentlich.'
 ]),
 S('tariff','5. Importzoll: Preis, Mengen und Einnahmen zuerst bestimmen','b',[
  F('P_d=P_w+\\tau,\\qquad R_T=\\tau M','Ein spezifischer Zoll ist ein Betrag pro importierter Einheit. Bei weiterhin positiven Importen und elastischem Weltangebot steigt der heimische Preis im Modell um diesen Betrag.',[['P_d,P_w','Heimischer Preis und unveränderter Weltpreis.'],['\\tau','Zollbetrag pro importierter Einheit.'],['R_T,M','Zolleinnahmen pro Periode und Importmenge nach Einführung des Zolls.']]),
  X('Ein Zoll von 10 auf einen Weltpreis von 20','Es gelten weiterhin QD = 100 − 2P und QS = P − 10. Das Land kann den Weltpreis nicht beeinflussen.',[
   'Der Inlandspreis steigt von 20 auf 30. Nachfrage fällt von 60 auf 40; heimische Produktion steigt von 10 auf 20.',
   'Importe fallen von 50 auf 20. Die Staatseinnahmen sind 10 × 20 = 200, nicht 10 × 50: Der Zoll verändert seine eigene Bemessungsmenge.',
   'Heimische Anbieter erhalten den höheren Inlandspreis ebenfalls, obwohl auf ihre eigenen Verkäufe kein Importzoll erhoben wird. Importkonkurrenz zum alten Preis ist gerade nicht mehr verfügbar.'
  ],'Wer nur die staatlichen Einnahmen betrachtet, übersieht Konsumentenverluste, Produzentengewinne und die veränderten Mengen.'),
  'Ein Wertzoll wird dagegen als Anteil eines definierten Warenwerts berechnet. In demselben einfachen Modell wäre ein Zoll von 50 % auf Weltpreis 20 ebenfalls ein Betrag von 10. Bei anderen Preisen sind ein fixer Betrag von 10 und ein Satz von 50 % unterschiedliche Instrumente.',
  'Ein ausreichend hoher Zoll kann Importe ganz verhindern. Dann kann man den Inlandspreis nicht beliebig als Weltpreis plus Zoll fortschreiben: Ohne Importe greift der heimische Marktgleichgewichtspreis. Hier erreicht die Importlücke bei einem Preis von rund 36,667 null.'
 ]),
 S('tariff-welfare','6. Zollverluste: Umverteilung und echte Effizienzverluste trennen','b',[
  F('CS=\\tfrac12(50-P)Q_D,\\qquad PS=\\tfrac12(P-10)Q_S','Bei den linearen Kurven sind Konsumenten- und Produzentenrente Dreiecksflächen. Die 50 ist der Nachfrage-Achsenabschnitt, 10 der Angebots-Achsenabschnitt; sie sind keine universellen Konstanten.',[['CS,PS','Konsumenten- bzw. Produzentenrente pro Periode.'],['P,Q_D,Q_S','Gemeinsamer Inlandspreis, Nachfrage- und Angebotsmenge.']]),
  T(['Größe','Freihandel P = 20','Zoll P = 30','Änderung'],[
   ['Konsumentenrente','900','400','−500'],
   ['Produzentenrente','50','200','+150'],
   ['Zolleinnahmen','0','200','+200'],
   ['Summe heimischer Renten und Einnahmen','950','800','−150']
  ],'Eigene partielle Wohlfahrtsrechnung ohne externe Effekte, zusätzliche Steuerkosten, Übergangskosten oder Weltpreisreaktion.'),
  F('DWL=\\tfrac12\\tau\\Delta Q_S+\\tfrac12\\tau(-\\Delta Q_D)=50+100=150','Der Produktionsverlust entsteht durch zusätzliche heimische Einheiten, deren Grenzkosten über dem Weltpreis liegen. Der Konsumverlust entsteht durch aufgegebene Käufe, deren Zahlungsbereitschaft den Weltpreis übersteigt.',[['DWL','Nettowohlfahrtsverlust des kleinen Landes.'],['\\tau','Spezifischer Zoll, hier 10.'],['\\Delta Q_S,\\Delta Q_D','Mengenänderungen durch den Zoll, hier +10 bzw. −20.']]),
  'Von den Konsumentenverlusten 500 werden 150 an heimische Produzenten und 200 an den Staat umverteilt. Die verbleibenden 150 gehen in diesem Modell als verlorener Gesamtüberschuss unter. Staatseinnahmen sind für die nationale Summe deshalb ein Transfer und nicht zusätzlich zu den Konsumentenverlusten noch einmal als Schaden abzuziehen.',
  G({id:'tariff-welfare',title:'Zoll: zwei Verlustdreiecke und ein Einnahmenrechteck',
   caption:'Kleines Land, Weltpreis 20, Zoll 10, heimischer Preis 30. Nachfrage P = 50 − Q/2, Angebot P = 10 + Q. Die Mengen gelten jeweils für dieselben Preise wie in der Tabelle.',
   reading:'Das linke orange Dreieck ist die Produktionsverzerrung 50, das rechte die Konsumverzerrung 100. Das grüne Rechteck zwischen Menge 20 und 40 sind Zolleinnahmen 200. Seine Fläche ist ein Transfer, kein Deadweight Loss.',
   plot:{x:[0,105],y:[0,55],xLabel:'Heimische Menge pro Periode',yLabel:'Preis je Einheit',series:[
    {name:'Heimische Nachfrage',points:[[0,50],[100,0]]},{name:'Heimisches Angebot',points:[[0,10],[45,55]]},
    {name:'Weltpreis 20',dash:'5 4',points:[[0,20],[105,20]]},{name:'Inlandspreis mit Zoll 30',dash:'5 4',points:[[0,30],[105,30]]}
   ],areas:[
    {points:[[10,20],[20,20],[20,30]],color:'#ba6824',opacity:.2},
    {points:[[40,20],[60,20],[40,30]],color:'#ba6824',opacity:.2},
    {points:[[20,20],[40,20],[40,30],[20,30]],color:'#087f82',opacity:.13}
   ],marks:[{x:20,y:30,label:'Angebot 20',dx:-8,dy:-13,anchor:'end'},{x:40,y:30,label:'Nachfrage 40',dx:8,dy:-13}]}}),
  'Ein großes Land kann durch weniger Nachfrage den ausländischen Exportpreis drücken. Ein möglicher Terms-of-Trade-Gewinn muss dann gegen heimische Verzerrungen gerechnet werden. Daraus folgt keine allgemeine Empfehlung: Gegenmaßnahmen, Machtverhältnisse, Vertragsreaktionen und internationale Folgen können die Rechnung ändern.'
 ]),
 S('quota','7. Importquote: gleiche Ausgangsmenge, andere Rechte und Anpassung','b',[
  'Eine bindende Importquote begrenzt die erlaubte Importmenge. Im unveränderten Wettbewerbsmarkt erzeugt eine Quote von 20 denselben Inlandspreis 30 wie der Zoll von 10: Bei diesem Preis beträgt die Lücke zwischen Nachfrage 40 und Angebot 20 genau 20.',
  F('Rent_Q=(P_d-P_w)\\bar M','Die Quotenrente entsteht aus der Differenz zwischen heimischem Verkaufspreis und Weltbeschaffungspreis auf die erlaubte Menge. Wer die Einfuhrrechte erhält, bestimmt, wem diese Rente zufällt.',[['Rent_Q','Quotenrente pro Periode vor zusätzlichen Vergabe- oder Suchkosten.'],['P_d,P_w','Heimischer Preis und Weltpreis.'],['\\bar M','Bindende erlaubte Importmenge.']]),
  T(['Vergabe der Rechte','Wer erhält hier die Rente 200?','Nationale Wohlfahrt relativ zum Zollfall'],[
   ['Wettbewerbliche Auktion durch den Staat','Im idealisierten Fall der Staat.','Gleiche Summe unter sonst identischen Annahmen.'],
   ['Kostenlose Rechte an heimische Importeure','Die heimischen Rechteinhaber.','Gleiche nationale Summe vor Kosten des Rent Seeking, andere Verteilung.'],
   ['Rechte liegen bei ausländischen Exporteuren','Ausländische Rechteinhaber.','Zusätzlich 200 Abfluss; heimischer Gesamtverlust hier 350 statt 150.']
  ],'Eine Quote erzeugt nicht automatisch Staatseinnahmen. Vergaberegel und Eigentümer der Rechte sind zentrale Angaben.'),
  X('Bei steigender Nachfrage verhalten sich Zoll und Quote anders','Die Nachfrage steigt auf QD = 120 − 2P, das Angebot bleibt QS = P − 10, der Weltpreis bleibt 20.',[
   'Mit unverändertem Zoll 10 bleibt der Inlandspreis 30. Nachfrage ist 60, Angebot 20, Importe steigen auf 40.',
   'Mit unveränderter bindender Quote 20 gilt stattdessen 120 − 2P − (P − 10) = 20. Daraus folgt P = 110/3 ≈ 36,667; Angebot ≈ 26,667 und Nachfrage ≈ 46,667.',
   'Die Quote hält die Importmenge fest und lässt den Preis stärker reagieren. Der Zoll hält hier den Preisabstand zum Weltmarkt fest und lässt die Menge reagieren.'
  ],'Gleichwertigkeit in einer Ausgangssituation bedeutet nicht gleiche Wirkung nach einem Nachfrageschock.')
 ]),
 S('subsidies','8. Exportsubvention und Produktionssubvention auseinanderhalten','b',[
  'Für den Exportfall verwenden wir dieselben heimischen Kurven, aber einen Weltpreis von 40. Heimische Produktion beträgt dann 30, Verbrauch 20 und Exporte 10. Eine Exportsubvention von 5 erhöht bei freier Absatzwahl den erreichbaren Produzentenerlös auf 45; heimische Käufer müssen im Modell ebenfalls 45 zahlen.',
  X('Exportförderung kann heimische Konsumenten und den Haushalt belasten','Das Land beeinflusst den Weltpreis 40 nicht. Der Staat zahlt 5 je exportierter Einheit.',[
   'Bei Inlandspreis 45 steigt Produktion auf 35 und Verbrauch fällt auf 10. Exporte steigen auf 25. Die Subventionszahlung beträgt 5 × 25 = 125.',
   'Konsumentenrente fällt von 100 auf 25: Verlust 75. Produzentenrente steigt von 450 auf 612,5: Gewinn 162,5.',
   'Nationale Nettowirkung: −75 + 162,5 − 125 = −37,5. Die positive Produzentenwirkung ist somit größer als der Konsumentenverlust, aber kleiner als Konsumentenverlust plus Finanzierungskosten des Programms.',
   'Die beiden Verzerrungsdreiecke sind 0,5 × 5 × 5 = 12,5 für zusätzliche Produktion und 0,5 × 5 × 10 = 25 für verlorenen Konsum.'
  ],'Mehr Exportvolumen ist kein ausreichender Wohlfahrtsnachweis.'),
  'Eine reine Produktionssubvention ist anders: Im Importfall mit Weltpreis 20 erhalten Produzenten bei einer Stücksubvention 10 den Erlös 30, Konsumenten zahlen weiterhin 20. Produktion steigt auf 20, Verbrauch bleibt 60, Importe fallen auf 40. Staatliche Kosten 200 stehen Produzentenrentenanstieg 150 gegenüber; ohne weitere Effekte beträgt der Nettowohlfahrtsverlust 50.',
  'Im Vergleich zum Importzoll derselben Produzentenförderung entfällt hier die Konsumverzerrung, aber die Subvention muss finanziert werden. Ob sie ein geeignetes Instrument für ein zusätzliches Ziel ist, hängt von diesem Ziel und den tatsächlichen Finanzierungskosten ab.'
 ]),
 S('other-barriers','9. Nichttarifäre Hindernisse und die Begründung einer Maßnahme prüfen','a b',[
  T(['Form','Wirkungskanal','Analytische Unterscheidung'],[
   ['Technische oder administrative Vorgaben','Prüfung, Zulassung und Dokumentation verändern Zugang und Kosten.','Eine legitime Schutzfunktion und eine unnötig diskriminierende Hürde können wirtschaftlich verschieden sein.'],
   ['Local-Content-Vorgaben','Verpflichtender Anteil heimischer Vorleistungen verändert Beschaffung.','Heimische Produktion steigt möglicherweise bei gleichzeitig höheren Gesamtkosten.'],
   ['Freiwillige Exportbeschränkung','Exportierende Seite begrenzt Menge unter politischem Druck oder Vereinbarung.','Preis- und Renteneffekte können einer Quote ähneln; Eigentümer der Rente beachten.'],
   ['Beschränkungen von Dienstleistungen und Investitionen','Marktzugang, Beteiligung oder grenzüberschreitende Erbringung werden begrenzt.','Nicht jeder Handel betrifft Waren an einer Zollgrenze.']
  ],'Konkrete rechtliche Zulässigkeit richtet sich nach aktuellen Regeln. Das Kapitel analysiert die ökonomische Mechanik.'),
  'Infant-Industry-Argumente beziehen sich auf zeitweiligen Schutz einer lernenden Industrie. Dafür müsste erklärt werden, weshalb Lernen nicht privat finanziert werden kann und wie Schutz zeitlich beendet wird. Ein ineffizienter dauerhafter Schutz folgt aus der Bezeichnung einer Branche als „jung“ nicht logisch.',
  'Sicherheit, Versorgung, Gesundheit und Umwelt können eigenständige Ziele sein. Eine saubere Bewertung benennt diese Ziele offen, statt jede Maßnahme allein mit Beschäftigungsgewinnen bei geschützten Produzenten zu rechtfertigen und Kosten anderer Sektoren zu übergehen.'
 ]),
 S('integration','10. Freihandelszone, Zollunion, gemeinsamer Markt und Wirtschaftsunion','c',[
  T(['Integrationsform','Wesentliche zusätzliche Merkmale','Institutioneller Preis'],[
   ['Freihandelszone','Handelshemmnisse zwischen Mitgliedern werden für den vereinbarten Bereich abgebaut; eigene Außenzölle bleiben möglich.','Ursprungsregeln können nötig sein, damit Waren nicht bloß durch das Mitglied mit niedrigstem Außenzoll umgeleitet werden.'],
   ['Zollunion','Zusätzlich gemeinsame Außenzollpolitik für den vereinbarten Bereich.','Mitglieder geben eigene handelspolitische Freiheit gegenüber Dritten teilweise ab.'],
   ['Gemeinsamer Markt','Zusätzlich erleichterte Bewegung von Produktionsfaktoren wie Arbeit und Kapital.','Regeln, Anerkennung und Anpassungsmechanismen werden wichtiger.'],
   ['Wirtschaftsunion','Weitergehende Abstimmung wirtschaftspolitischer Regeln und Institutionen.','Größerer Koordinationsbedarf und weniger nationale Entscheidungsfreiheit.'],
   ['Währungsunion','Gemeinsame Währung bzw. gemeinsame monetäre Ordnung.','Eigenständige nationale Geld- und nominale Wechselkurspolitik entfällt im gemeinsamen Währungsraum.']
  ],'Eine Währungsunion ist eine gesonderte Dimension tiefer Integration; sie folgt nicht automatisch aus jeder Freihandelszone oder jeder Form wirtschaftlicher Zusammenarbeit.'),
  'Motive sind größere Märkte, mehr Wettbewerb, Verhandlungsmacht, Investitionschancen und verlässlichere Regeln. Gemeinsame Standards können Kosten senken, aber auch Anpassung erfordern. Die Mitgliedschaft allein beweist noch keinen gleichen Produktivitäts-, Inflations- oder Einkommenspfad.',
  'Ein Integrationsabkommen wird gegenüber zwei Gruppen bewertet: Mitgliedern und Nichtmitgliedern. Niedrigere Hindernisse innerhalb der Gruppe können Handel schaffen und gleichzeitig Beschaffung aus effizienteren Drittländern verdrängen.'
 ]),
 S('creation-diversion','11. Handelsschaffung und Handelsumlenkung mit Gegenrechnung','c',[
  T(['Gleiche Einheit, konstante Ressourcenkosten','Heimischer Anbieter','Partnerland','Nichtmitglied'],[
   ['Kosten ohne Abgaben','110','90','80']
  ],'Eigene Einzelgüterfälle mit genau einer gekauften Einheit, unveränderter Nachfrage, vollständiger Preisweitergabe und ohne Transportkosten. Nationale Wohlfahrt zählt Konsumenten und Staat gemeinsam.'),
  X('Fall A: Handelsschaffung','Vor dem Abkommen erhebt das Land auf beide ausländischen Anbieter 50 % Zoll; danach ist nur der Partner zollfrei.',[
   'Vorher kosten heimische Ware 110, Partnerware 135 und Drittlandware 120. Gekauft wird heimisch für 110.',
   'Danach kostet Partnerware 90 und ersetzt die heimische Produktion. Die reale Ressourcenersparnis beträgt 20; vorher gab es auf die heimische Einheit keine Zolleinnahme.',
   'Das Beispiel zeigt Handelsschaffung durch den Ersatz teurer heimischer Produktion durch günstigere Einfuhr.'
  ],'Der Effekt entsteht aus der geänderten Produktionsquelle, nicht bloß aus einem größeren gemessenen Handelsvolumen.'),
  X('Fall B: Handelsumlenkung','Statt 50 % beträgt der allgemeine Ausgangszoll nun 20 %. Wieder wird nach dem Abkommen nur der Partner zollfrei.',[
   'Vorher kostet Drittlandware 96, Partnerware 108 und heimische Ware 110. Gekauft wird im Drittland. Der Käufer zahlt 96; der Staat erhält 16.',
   'Danach wird Partnerware für 90 gekauft. Der Käufer spart 6, aber Zolleinnahmen von 16 entfallen. Nationale Nettowirkung in diesem festen Einmengenbeispiel: 6 − 16 = −10.',
   'Die tatsächlichen Beschaffungskosten steigen von 80 auf 90. Die günstigere Rechnung für den Konsumenten verdeckt hier den Wechsel zu einer ressourcenaufwendigeren Quelle.'
  ],'Sinkende Verbraucherpreise reichen nicht immer aus, um die gesamte nationale Wohlfahrtswirkung eines präferenziellen Abkommens festzustellen.'),
  'Bei reagierender Nachfrage, mehreren Gütern, Skaleneffekten und Investitionsantworten können weitere Gewinne und Verluste entstehen. Die beiden bewusst engen Fälle isolieren die Begriffe; sie bewerten kein reales Abkommen vollständig.'
 ]),
 S('investment','12. Handelsregeln in Unternehmens- und Branchenannahmen übersetzen','a b c',[
  'Eine geschützte heimische Branche kann höhere Preise erzielen, während nachgelagerte Unternehmen dieselben teureren Inputs bezahlen. Ein Exporteur kann neue Absatzmärkte gewinnen und gleichzeitig von Gegenmaßnahmen betroffen sein. Die Bilanz der gesamten Volkswirtschaft und der Gewinn einer einzelnen Aktie sind unterschiedliche Analyseobjekte.',
  T(['Zu prüfender Bestandteil','Konkrete Modellfrage'],[
   ['Umsatz','Ändern sich erreichbare Märkte, Absatzmenge und Preisweitergabe?'],
   ['Kosten','Welche Vorleistungen unterliegen der Maßnahme und welche Substitute gibt es?'],
   ['Investitionen','Muss Produktion verlagert werden, und wie lange dauert die Anpassung?'],
   ['Wettbewerb','Sind alle Anbieter gleich betroffen oder verschieben sich relative Kosten?'],
   ['Politikrisiko','Wie lange gilt die Maßnahme, welche Gegenreaktion und welche Integrationsänderung sind möglich?']
  ],'Die Annahmen werden mit Marktstruktur, Lieferketten und Konjunktur verbunden.'),
  'Für Prüfungsfragen werden zuerst Marktgröße, Preisannahme, Instrument und Rentenempfänger identifiziert. Danach werden Preis, Produktion, Konsum, Handel und Fiskalwirkung gerechnet. Erst zum Schluss folgt eine Aussage über Verteilung und Nettowohlfahrt.'
 ])
],related:[{unit:'market-structures',section:'monopoly-example',label:'Konsumentenrente und verlorenen Gesamtüberschuss verstehen'},{unit:'market-structures',section:'scale',label:'Größere Märkte und Skaleneffekte'},{unit:'fiscal',section:'instruments',label:'Abgaben und Subventionen im Staatshaushalt'},{unit:'geopolitics',section:'globalization',label:'Politische Verteilungsfragen und Lieferabhängigkeiten'}],
 sources:[
 {title:'CFA Institute: Lernzielkatalog Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=6'},
 {title:'CFA Institute: International Trade',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/international-trade'},
 {title:'OpenStax: Absolute and Comparative Advantage',url:'https://openstax.org/books/principles-economics-3e/pages/33-1-absolute-and-comparative-advantage'},
 {title:'OpenStax: Protectionism and the Distribution of Costs',url:'https://openstax.org/books/principles-economics-3e/pages/34-1-protectionism-an-indirect-subsidy-from-consumers-to-producers'},
 {title:'WTO: What We Do',url:'https://www.wto.org/english/thewto_e/whatis_e/what_we_do_e.htm'}
 ],review:{status:'draft',date:'2026-09-24',note:'Eigene vollständig abgestimmte Handels-, Zoll-, Quoten- und Subventionsrechnungen; partielle nationale Wohlfahrt von Verteilung und umfassender Politikbewertung getrennt.'}};
