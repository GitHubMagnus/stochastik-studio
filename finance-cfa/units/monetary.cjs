const {F,T,X,S,G}=require('../author.cjs');
const inflationGrid=Array.from({length:61},(_,j)=>j/10);
module.exports={id:'monetary',intro:[
 'Geldpolitik wirkt über Finanzierungskonditionen, Erwartungen und Entscheidungen vieler einzelner Akteure. Eine Leitzinsänderung ist deshalb der Beginn einer Wirkungskette, nicht bereits ein bestimmter Inflations- oder Wachstumserfolg. Für ihre Beurteilung brauchen wir den erwarteten Realzins, die Kreditbedingungen, den Zeithorizont und die Ursache des wirtschaftlichen Schocks.',
 'Das Kapitel verbindet die klassischen Instrumente mit ihrer praktischen Umsetzung und trennt eine Zentralbankbilanz von den Bilanzen der Geschäftsbanken. Zwei eigene Rechengrafiken zeigen, wie Erwartungen die Zinswirkung verändern und weshalb ein Angebotsschock einen Zielkonflikt erzeugen kann. Länderspezifische Mandate und Betriebsrahmen sind unterschiedlich; die Beispiele behaupten keine einheitliche Regel für jede Zentralbank.'
],sections:[
 S('roles','1. Welche Aufgaben erfüllt eine Zentralbank?','a',[
  T(['Funktion','Wirtschaftlicher Zweck','Abgrenzung'],[
   ['Bereitstellung von Zentralbankgeld','Bargeld und Abwicklungsguthaben der zugelassenen Banken bilden eine monetäre Grundlage.','Bankeinlagen der Kunden sind überwiegend Verbindlichkeiten von Geschäftsbanken.'],
   ['Bank der Banken und Zahlungsabwicklung','Bereitstellung bzw. Absicherung verlässlicher Abwicklungsmechanismen.','Ein funktionierender Zahlungsverkehr ist nicht gleichbedeutend mit unbegrenzter Kreditwürdigkeit aller Institute.'],
   ['Geldpolitik','Monetäre Bedingungen im Rahmen des Mandats beeinflussen.','Ziele, Instrumente und operative Zinssätze sind verschiedene Ebenen.'],
   ['Lender of Last Resort','Unter festgelegten Bedingungen Liquidität in Stresssituationen bereitstellen.','Liquiditätsunterstützung ersetzt nicht automatisch die Lösung fehlenden Eigenkapitals.'],
   ['Weitere institutionelle Aufgaben','Je nach Land etwa Bank des Staates, Reservemanagement oder Aufsichtsfunktionen.','Bankenaufsicht und Einlagensicherung müssen nicht vollständig bei der Zentralbank liegen.']
  ],'Die Aufgabenverteilung hängt von Gesetzen und Institutionen des jeweiligen Währungsraums ab.'),
  'Ein Institut kann langfristig ausreichend werthaltige Aktiva besitzen und dennoch heute Zahlungen nicht leisten können. Das ist ein Liquiditätsproblem. Übersteigen Verpflichtungen den wirtschaftlichen Wert der Aktiva, geht es zusätzlich um Solvenz. Krisenmaßnahmen müssen diese Unterscheidung beachten, obwohl sie unter unsicheren Marktpreisen schwer zu beurteilen sein kann.',
  'Die Möglichkeit späterer Unterstützung kann vorsorgliche Risikobegrenzung schwächen. Geeignete Sicherheiten, Zugangsbedingungen und Aufsicht sollen solchen Fehlanreizen entgegenwirken; sie machen die Diagnose in einer Krise nicht trivial.'
 ]),
 S('objectives','2. Preisstabilität, Beschäftigung und das langfristige Potenzial','a c',[
  'Preisstabilität bedeutet gewöhnlich eine niedrige und stabile Inflationsrate nach einer festgelegten Messgröße, nicht die unveränderte Einzelpreisstruktur aller Güter. Andere Mandate können Beschäftigung, Wachstum oder weitere Ziele ausdrücklich einbeziehen. Ein numerisches Ziel ist nur zusammen mit Index, Horizont und institutioneller Priorität verständlich.',
  X('Sinkende Inflation bedeutet nicht sinkende Preise','Ein Preisindex liegt bei 100. Er steigt im ersten Jahr um 6 % und im zweiten Jahr um 2 %. ',[
   'Nach dem ersten Jahr ist der Index 106. Nach dem zweiten Jahr ist er 106 × 1,02 = 108,12.',
   'Inflation ist von 6 % auf 2 % zurückgegangen, das Preisniveau steigt aber weiter. Das heißt Disinflation. Ein fallendes Preisniveau wäre Deflation.',
   'Ein Inflationsziel verlangt nicht automatisch, einen früheren Preisniveausprung später vollständig rückgängig zu machen. Das wäre eine andere Zielsystematik.'
  ],'Rate, Preisniveau und kumulierter Kaufkraftverlust müssen getrennt werden.'),
  'Bei trägen Preisen und Löhnen beeinflussen veränderte nominale Finanzierungskonditionen kurzfristig auch reale Ausgaben und Produktion. Langfristige Produktionsmöglichkeiten hängen wesentlich von Arbeit, Kapital, Technologie und Institutionen ab. Dauerhaft höheres nominales Ausgabenwachstum kann reale Knappheit nicht beliebig beseitigen.',
  'Eine Zentralbank kann einen fehlenden Energierohstoff nicht durch einen niedrigeren Zinssatz herstellen. Sie beeinflusst Nachfrage und Erwartungen und muss dabei gegebenenfalls einen Zielkonflikt zwischen kurzfristiger Aktivität und Preisstabilität abwägen.'
 ]),
 S('reserves','3. Reserven, Einlagen und Bankkredite sind unterschiedliche Bilanzposten','b',[
  T(['Transaktion im vereinfachten Beispiel','Aktivseite der Geschäftsbank','Passivseite der Geschäftsbank'],[
   ['Neuer Kredit 100 wird dem eigenen Kunden gutgeschrieben.','Kreditforderung +100.','Kundeneinlage +100.'],
   ['Kunde überweist 30 zu einer anderen Bank.','Abwicklungsreserven −30.','Kundeneinlage −30.'],
   ['Zentralbank kauft der Bank eine Anleihe für 20 ab.','Anleihe −20, Reserveguthaben +20.','Zunächst unverändert.']
  ],'Eigenes schematisches Beispiel ohne Gebühren, Bewertungsänderungen oder zusätzliche Sicherheitenbuchungen; die empfangende Bank erhält beim Transfer Reserven und eine Kundeneinlage.'),
  'Die Kreditvergabe schafft in diesem Beispiel zunächst eine Einlage. Die Bank benötigt anschließend geeignete Finanzierung, Zahlungsliquidität, Kapital und Risikokapazität. Kredite sind deshalb weder ein mechanisches Ausleihen vorhandener Reserveeinheiten an Nichtbanken noch unbegrenzt frei schaffbar.',
  F('H=C+R,\\quad M=C+D,\\quad \\frac{M}{H}=\\frac{1+c}{c+rr+er}','Die Bilanzrelation verbindet Geldbasis und eine vereinfachte breite Geldmenge. Sie folgt durch Division durch D; ein stabiler kausaler Geldschöpfungsmultiplikator entsteht erst mit zusätzlichen Verhaltensannahmen.',[['H','Geldbasis: Bargeld C plus Bankreserven R.'],['M','Hier vereinfachte Geldmenge aus Bargeld C und den betrachteten Bankeinlagen D.'],['C,D,R','Bargeld beim Publikum, Bankeinlagen und Bankreserven einschließlich gegebenenfalls angerechneter Kassenbestände.'],['c=C/D','Bargeld-Einlagen-Verhältnis.'],['rr,er','Mindestreserve- bzw. Überschussreserveanteil relativ zu D; zusammen R/D.']]),
  'Wenn ausschließlich im klassischen Modell c = er = 0 und rr = 0,1 festgehalten werden, ergibt sich M/H = 10. Steigt er auf 0,1, halbiert sich die Relation auf 5. In einem System reichlicher, verzinster Reserven liefert allein der Kehrwert einer Mindestreservequote daher keine verlässliche Kredit- oder Inflationsprognose.',
  'Der Kauf von Wertpapieren von einer Nichtbank über deren Geschäftsbank kann zusätzlich deren Kundeneinlage erhöhen. Wer die Bilanzwirkung erklären will, muss daher sagen, wer an wen verkauft und welche Geldmengendefinition betrachtet wird.'
 ]),
 S('tools','4. Wie die Zentralbank monetäre Bedingungen umsetzt','b',[
  T(['Instrument','Unmittelbarer Mechanismus','Was man zusätzlich wissen muss'],[
   ['Offenmarktgeschäfte','Käufe, Verkäufe oder befristete Geschäfte verändern Reserven und/oder Wertpapierbestände.','Geschäftspartner, Laufzeit, Besicherung und operativer Rahmen bestimmen die Wirkung.'],
   ['Refinanzierungs- oder Kreditfazilität','Zentralbank stellt zugelassenen Instituten Liquidität zu vorgegebenen Bedingungen bereit.','Der Zugang ist nicht automatisch für jeden Schuldner oder jede Sicherheit offen.'],
   ['Zins auf Reserveguthaben / Einlagefazilität','Verändert die Rendite einer kurzfristigen Zentralbankanlage und damit die Orientierung anderer Geldmarktzinsen.','Zugangsregeln und Marktsegmentierung können Abstände zwischen Zinssätzen erzeugen.'],
   ['Mindestreserveanforderung','Verändert vorgeschriebene Reservehaltung relativ zu relevanten Verbindlichkeiten.','Geringere Anforderungen führen nicht bei jeder Bank sofort zu mehr Kreditvergabe.'],
   ['Kommunikation und Forward Guidance','Verändert Erwartungen über den künftigen Instrumentenpfad.','Wirkung hängt von Glaubwürdigkeit und den genannten Bedingungen ab.']
  ],'Ein Leitzins ist ein politisch gesetzter oder angestrebter Zinssatz. Der tatsächlich beobachtete Marktzins bleibt ein Ergebnis des jeweiligen Betriebsrahmens.'),
  'Im stilisierten Korridorsystem begrenzen Einlage- und Kreditmöglichkeiten die kurzfristigen Zinsalternativen zugelassener Banken. In einem System mit reichlichen Reserven kann deren Verzinsung ein besonders wichtiger Anker sein. Diese Erklärungen sind konzeptionell; reale Zugangsbeschränkungen und Sicherheitenkosten verhindern eine perfekte Gleichsetzung aller Geldmarktsätze.',
  'Ein Wertpapierkauf ist nicht automatisch ein neuer dauerhafter expansiver Kurs. Er kann auch kurzfristig eine technische Reserveknappheit ausgleichen und einen bereits beschlossenen Zins sichern. Instrumententransaktion, operatives Ziel und wirtschaftliche Ausrichtung sind deshalb getrennt zu beurteilen.'
 ]),
 S('real-rate','5. Der erwartete Realzins erklärt die wirtschaftliche Richtung besser','b c',[
  F('r^e=\\frac{1+i}{1+\\pi^e}-1\\approx i-\\pi^e','Unter einer als fest angenommenen Inflationsprognose vergleicht die Bruttozinsrelation künftige nominale Zahlung und Kaufkraft. Bei kleinen Raten genügt oft die Differenz; bei zufälliger Inflation ist dies nicht ohne Weiteres der exakte Erwartungswert einer realen Rendite.',[['r^e','Ex-ante-Realzins unter der angegebenen Inflationsannahme.'],['i','Nominaler Zinssatz über denselben Horizont.'],['\\pi^e','Erwartete Inflationsrate über diesen Horizont.']]),
  X('Eine nominale Zinssenkung kann mit einem höheren Realzins einhergehen','Der nominale Jahreszins sinkt von 5 % auf 4 %. Gleichzeitig fällt die angenommene Inflationserwartung von 4 % auf 2 %. ',[
   F('r_0^e=1{,}05/1{,}04-1\\approx0{,}9615\\%,\\qquad r_1^e=1{,}04/1{,}02-1\\approx1{,}9608\\%','Trotz niedrigerem Nominalzins steigt der unterstellte Kaufkraftzins um rund einen Prozentpunkt.',[['r_0^e,r_1^e','Realzins vor und nach der Veränderung bei den jeweiligen Inflationsannahmen.']]),
   'Die Näherung liefert 1 % vorher und 2 % danach. Für eine vollständige Aussage zur Restriktion ist zusätzlich zu prüfen, ob sich der geschätzte neutrale Realzins verändert hat.',
   'Eine niedrige Nominalrate während starker Deflationserwartungen muss daher nicht besonders expansiv sein.'
  ],'Bei einem Zinsvergleich sind Inflationserwartung, Laufzeit, Kreditrisiko und neutraler Vergleichszins ausdrücklich anzugeben.'),
  G({id:'real-interest',title:'Nominalzins und Inflationserwartung gemeinsam betrachten',
   caption:'Exakte Bruttozinsrechnung bei festen Inflationsannahmen. Jede Linie hält den Nominalzins konstant; die markierten Punkte vergleichen 5 % Nominalzins / 4 % Inflation mit 4 % / 2 %.',
   reading:'Ein Wechsel zur niedrigeren Nominalzinslinie senkt für sich genommen den Realzins. Die gleichzeitige Bewegung nach links zu geringerer Inflationserwartung kann diesen Effekt überwiegen.',
   plot:{x:[0,6],y:[-3,6],xLabel:'Angenommene Inflation (%)',yLabel:'Realzins (%)',series:[
    {name:'Nominalzins 5 %',points:inflationGrid.map(p=>[p,(1.05/(1+p/100)-1)*100])},
    {name:'Nominalzins 4 %',points:inflationGrid.map(p=>[p,(1.04/(1+p/100)-1)*100])}
   ],marks:[{x:4,y:(1.05/1.04-1)*100,label:'Vorher: 0,96 %',dx:10,dy:22},{x:2,y:(1.04/1.02-1)*100,label:'Nachher: 1,96 %',dx:10,dy:-20}]}}),
  'Der neutrale Realzins ist der modellabhängige Zins, der bei stabiler Inflation mit normal ausgelasteter Wirtschaft vereinbar wäre. Ein tatsächlicher Realzins darüber wirkt im Modell tendenziell dämpfend, darunter stimulierend. Dieser Vergleichsmaßstab ist nicht direkt beobachtbar und kann sich ändern.'
 ]),
 S('yield-curve','6. Warum längere Zinsen nicht eins zu eins dem heutigen Leitzins folgen','b',[
  F('y_n\\approx\\frac{1}{n}\\sum_{j=1}^{n}E_t(i_j)+TP_n','Eine stilisierte Zerlegung erklärt die längerfristige risikofreie Rendite durch erwartete künftige kurzfristige Zinsen und eine Laufzeitprämie. Die arithmetische Form ist eine Näherung; exakte Anleihebewertung verwendet passende Diskontfaktoren.',[['y_n','Rendite einer betrachteten risikofreien Laufzeit von n Perioden.'],['n,j','Anzahl Perioden und deren Laufindex.'],['E_t(i_j)','Zum heutigen Zeitpunkt t erwarteter kurzfristiger Zins in Periode j.'],['TP_n','Laufzeitprämie in derselben Zinseinheit.']]),
  X('Eine erwartete Senkung kann schon im Marktpreis stehen','Für drei aufeinanderfolgende Jahre werden kurze Zinsen von 4 %, 3 % und 2 % erwartet. Die angenommene Laufzeitprämie beträgt 0,4 Prozentpunkte.',[
   'Die angenäherte Dreijahresrendite beträgt (4 + 3 + 2)/3 + 0,4 = 3,4 %.',
   'Wird eine bereits erwartete spätere Senkung nur bestätigt, muss sich dieser Durchschnitt nicht ändern. Eine unerwartete Revision aller künftigen Zinserwartungen hätte dagegen einen anderen Preiseffekt.',
   'Steigt gleichzeitig die Laufzeitprämie auf 0,8 Punkte, erhöht sie die Rendite bei unverändertem Erwartungspfad auf 3,8 %. Eine längerfristige Rendite ist daher kein reines Ablesen des heutigen Leitzinses.'
  ],'Für Reaktionen an Märkten zählt die neue Information gegenüber vorherigen Erwartungen.'),
  'Eine Unternehmens- oder Hypothekenrate enthält zusätzlich unter anderem Kredit-, Liquiditäts- und Vermittlungskomponenten. Selbst wenn eine risikofreie Rendite fällt, kann ein Kredit wegen höherer Aufschläge teurer werden. Bestehende festverzinsliche Verträge und variable oder neu zu finanzierende Verträge reagieren außerdem unterschiedlich schnell.'
 ]),
 S('transmission','7. Die einzelnen Übertragungskanäle bis zur Nachfrage verfolgen','b',[
  T(['Kanal bei einer unerwarteten Straffung','Wirkungskette unter sonst gleichen Bedingungen','Warum die Wirkung abweichen kann'],[
   ['Zins / Substitution','Höherer realer Finanzierungspreis verschiebt Konsum und Investitionen.','Sparer erhalten höhere Einkommen; Schuldner tragen höhere Lasten. Nettoeffekt hängt von Verhalten und Verteilung ab.'],
   ['Cashflow','Variable Kreditzahlungen oder Refinanzierung werden teurer.','Lange Zinsbindung verzögert den Effekt; nicht jeder Vertrag passt sich sofort an.'],
   ['Vermögenspreise / Sicherheiten','Höhere Diskontsätze können Preise senken; schwächere Sicherheiten begrenzen Kredite.','Erwartete Cashflows, Risikoprämien und Ausgangsbilanzen können zugleich anders reagieren.'],
   ['Bankkredit','Finanzierungskosten, Kapitalbelastung oder Risikobereitschaft verändern Angebot und Standards.','Mehr Reserven allein beseitigen weder Kreditrisiko noch mangelnde Kreditnachfrage.'],
   ['Wechselkurs','Relativ attraktivere inländische Anlagen können die Währung stützen; Importpreise und Nettoexporte reagieren.','Ausländische Politik, Risikoprämien und Erwartungen können den Zinseffekt überlagern.'],
   ['Erwartungen','Glaubwürdige Reaktion kann erwartete Inflation und Preis-/Lohnsetzung verändern.','Eine unerwartet unglaubwürdige oder widersprüchliche Kommunikation wirkt anders.']
  ],'Die Tabelle beschreibt Kanäle, keine Garantie über das Vorzeichen jeder beobachteten Marktbewegung.'),
  F('DS=i_vL+P_R','Eine einfache variable Schuldendienstrechnung zeigt den direkten Cashflowkanal. Hier bleiben Schuldenbetrag und planmäßige Tilgung zunächst konstant.',[['DS','Zins plus planmäßige Tilgung pro Jahr.'],['i_v','Jährlicher variabler Kreditzins.'],['L','Für die Zinsrechnung angenommener Kreditbetrag.'],['P_R','Planmäßige jährliche Tilgung; nicht das Preisniveau P anderer Modelle.']]),
  'Bei L = 200.000 und Tilgung 4.000 steigt der angenommene jährliche Schuldendienst bei einer Zinsänderung von 3 % auf 5 % von 10.000 auf 14.000. Die Erhöhung um 4.000 ist eine Belastung dieses Schuldners, aber nicht automatisch der Rückgang des gesamten Konsums in gleicher Höhe.',
  'Marktpreise können binnen kurzer Zeit reagieren, Ausgaben und Inflation deutlich später. Die Transmission sollte daher über den gesamten Pfad und die Struktur der Verträge beurteilt werden.'
 ]),
 S('quantity','8. Geldmenge, Umlaufgeschwindigkeit und Preisniveau sauber verknüpfen','b c',[
  F('MV=PY,\\qquad (1+g_M)(1+g_V)=(1+\\pi)(1+g_Y)','Bei konsistenten Definitionen ist die Quantitätsgleichung eine Identität: V ist nominales Einkommen geteilt durch Geldmenge. Die Wachstumsrelation ist die entsprechende exakte Bruttofaktorzerlegung.',[['M,V','Definierte Geldmenge und zugehörige Einkommensumlaufgeschwindigkeit.'],['P,Y','Preisniveau und realer Output; Produkt ist nominales Einkommen.'],['g_M,g_V,g_Y','Periodische Wachstumsraten von Geldmenge, Umlaufgeschwindigkeit und realem Output.'],['\\pi','Inflation über dieselbe Periode.']]),
  F('\\pi=\\frac{(1+g_M)(1+g_V)}{1+g_Y}-1\\approx g_M+g_V-g_Y','Die häufige Näherung setzt kleine Raten voraus. Eine Inflationsprognose braucht zusätzlich Annahmen über reales Wachstum, Umlaufgeschwindigkeit und den relevanten Geldbegriff.',[['\\pi','Preisniveauwachstum.'],['g_M,g_V,g_Y','Wachstum von Geldmenge, Umlaufgeschwindigkeit und realem Output.']]),
  X('Geldmengenwachstum ist noch keine identische Inflationsrate','Die betrachtete Geldmenge wächst um 8 %, ihre Umlaufgeschwindigkeit sinkt um 3 %, reales BIP wächst um 2 %. ',[
   F('\\pi=1{,}08\\cdot0{,}97/1{,}02-1\\approx2{,}7059\\%','Nominales Einkommen wächst um 4,76 %. Davon entfällt ein Teil auf reale Produktion; der verbleibende Preisfaktor ergibt sich durch Division.',[['\\pi','Mit diesen Angaben konsistente Inflation.']]),
   'Die additive Näherung liefert 8 − 3 − 2 = 3 %. Der Unterschied zur exakten Rechnung entsteht durch die multiplikative Verknüpfung.',
   'Wenn Reserven steigen, muss die hier gemeinte breite Geldmenge nicht im gleichen Verhältnis steigen. Selbst bei bekanntem Geldmengenwachstum ist eine konstante Umlaufgeschwindigkeit eine zusätzliche, nicht automatische Annahme.'
  ],'Eine Identität wird erst durch unabhängige Verhaltensannahmen zu einer kausalen Theorie oder Prognose.')
 ]),
 S('targets','9. Instrumentenzins, Inflationsziel und Wechselkursziel unterscheiden','c',[
  T(['Zielsystem','Woran die Politik ausgerichtet wird','Typischer Zielkonflikt'],[
   ['Inflationsziel','Prognose der passenden Inflationsrate über den relevanten Horizont.','Angebotsschocks können kurzfristig Inflation und Aktivität in entgegengesetzte Richtungen bewegen.'],
   ['Zinsziel','Ein bestimmter Marktzins dient als operatives Ziel oder ausdrücklich angestrebte Größe.','Ein unveränderter Nominalzins hält weder Realzins noch Inflation automatisch konstant.'],
   ['Wechselkursziel','Stabilisierung des Außenwerts gegenüber einer Währung oder einem Korb.','Eigene Zinsentscheidungen werden bei freiem Kapitalverkehr durch die Bindung eingeschränkt.']
  ],'Eine inflationsorientierte Zentralbank kann einen kurzfristigen Zins als Instrument benutzen. Die Kategorien liegen deshalb teilweise auf unterschiedlichen Ebenen.'),
  'Bei einer glaubwürdigen festen Wechselkursbindung und hoher Kapitalmobilität können Anleger starke Zinsunterschiede durch grenzüberschreitende Anlagen ausnutzen. Eine unabhängige heimische Zinspolitik kollidiert dann mit der Bindung, sofern nicht andere Hindernisse oder Risiken die Kapitalbewegungen begrenzen. Wechselkursstabilität, freie Kapitalmobilität und volle monetäre Autonomie sind nicht beliebig gleichzeitig erreichbar.',
  'Verteidigung eines Wechselkurses kann Devisenintervention und eine Anpassung heimischer monetärer Bedingungen erfordern. Reserven sind endlich, und Erwartungen können die Verteidigung erschweren. Eine scheinbar feste Notierung macht deshalb weder Abwertungsrisiko noch Kreditrisiko null.',
  'Unter einem Inflationsziel können Wechselkursbewegungen dennoch relevant sein, wenn sie Importpreise, Aktivität und Inflationserwartungen beeinflussen. Die Beachtung des Wechselkurses ist noch nicht gleichbedeutend mit einem festen Wechselkursziel.'
 ]),
 S('credibility','10. Unabhängigkeit, Glaubwürdigkeit und Transparenz','a c',[
  'Instrumentenunabhängigkeit ermöglicht Entscheidungen über den Mitteleinsatz innerhalb eines vorgegebenen Mandats. Zielunabhängigkeit würde zusätzlich die Zielsetzung betreffen. Beide Begriffe dürfen nicht gleichgesetzt werden; Unabhängigkeit hebt demokratische Rechenschaft und gesetzliche Grenzen nicht auf.',
  'Glaubwürdigkeit bedeutet, dass Haushalte und Märkte die angekündigte Zielverfolgung für verlässlich halten. Wenn Unternehmen trotz einer vorübergehenden Teuerung stabile mittelfristige Inflation erwarten, können Preis- und Lohnanpassungen anders ausfallen als bei der Erwartung einer dauerhaft höheren Inflation.',
  'Transparenz betrifft die verständliche Erklärung von Zielen, Daten, Unsicherheit und Reaktionslogik. Sie ist nicht das Versprechen, jeden künftigen Zinsschritt unabhängig von neuen Informationen unverändert auszuführen. Zustandsabhängige Kommunikation erläutert, welche Beobachtung eine Reaktion auslösen würde.',
  X('Eine bedingte Ankündigung ist kein bedingungsloser Vertrag','Eine Zentralbank erwartet bei ihrer Prognose eine spätere Lockerung, wenn der Inflationsdruck weiter nachlässt. Ein unerwarteter anhaltender Schock erhöht danach die Inflationsprognose.',[
   'Eine Anpassung des Zinspfads kann mit der ursprünglichen bedingten Strategie vereinbar sein.',
   'Widersprüchlich wäre es, eine ausdrücklich unbedingte Zusage nachträglich so darzustellen, als hätte sie immer andere Bedingungen enthalten. Entscheidend sind die tatsächliche Formulierung und nachvollziehbare Reaktion auf neue Informationen.'
  ],'Glaubwürdigkeit entsteht aus konsistenter Zielverfolgung und nachvollziehbarer Erklärung, nicht aus Starrheit gegenüber jeder Datenänderung.')
 ]),
 S('supply-shock','11. Warum ein Angebotsschock einen anderen Zielkonflikt erzeugt','b c',[
  'Ein reiner Nachfragerückgang kann kurzfristig Output und Preisdruck senken; eine Nachfragebelebung kann beide wieder stützen. Ein negativer Angebotsschock kann dagegen gleichzeitig Output senken und Preise erhöhen. Dann kann eine reine Nachfragepolitik nicht beide Ausgangswerte unverändert wiederherstellen.',
  F('P_D=200-Y,\\quad P_S=50+0{,}5Y,\\quad P_S^{shock}=65+0{,}5Y','Die eigenen linearen Kurven sind ein statischer AD-AS-Modellvergleich, keine geschätzten Verhaltensgleichungen. Am Gleichgewicht stimmen nachfrage- und angebotsseitiges Preisniveau überein.',[['P_D,P_S,P_S^{shock}','Nachfragekurve, ursprüngliche kurzfristige Angebotskurve und Angebotskurve nach dem Schock, jeweils als Preisindex.'],['Y','Realer Outputindex.']]),
  'Zunächst gilt 200 − Y = 50 + 0,5Y, also Y = 100 und P = 100. Nach dem Angebotsanstieg um 15 gilt 200 − Y = 65 + 0,5Y: Y fällt auf 90 und P steigt auf 110. Preisniveau und Output bewegen sich in unterschiedliche Richtungen.',
  'Soll zusätzliche Nachfrage den Output wieder auf 100 bringen, liegt das Angebot dort nun bei P = 115. Die passende neue Nachfragekurve wäre P = 215 − Y. Das stellt Output wieder her, erhöht aber das Preisniveau gegenüber 110 weiter. Um bei unveränderter geschockter Angebotskurve P = 100 zu erreichen, müsste Output sogar auf 70 fallen.',
  G({id:'supply-demand',title:'Nachfragestützung kann den Angebotsschock nicht kostenlos beseitigen',
   caption:'Eigene statische AD-AS-Rechnung: Ausgangspunkt (100; 100), nach Angebotsschock (90; 110), nach zusätzlicher Nachfragestützung (100; 115). Die vertikale Achse zeigt ein Preisniveau, keine Inflationsrate.',
   reading:'Der Angebotsschock verschiebt das kurzfristige Angebot nach oben. Nachfragebelebung stellt hier den alten Output wieder her, aber zu einem höheren Preisniveau. Langfristige Angebotsanpassung ist in dieser Grafik nicht modelliert.',
   plot:{x:[75,115],y:[80,145],xLabel:'Realer Outputindex Y',yLabel:'Preisindex P',series:[
    {name:'Ursprüngliche Nachfrage',points:[[75,125],[115,85]]},
    {name:'Ursprüngliches kurzfristiges Angebot',points:[[75,87.5],[115,107.5]]},
    {name:'Angebot nach Schock',points:[[75,102.5],[115,122.5]]},
    {name:'Gestützte Nachfrage',dash:'5 4',points:[[75,140],[115,100]]}
   ],marks:[{x:100,y:100,label:'Ausgangslage',dx:10,dy:21},{x:90,y:110,label:'Schock',dx:-8,dy:-13,anchor:'end'},{x:100,y:115,label:'Nachfragestützung',dx:10,dy:-15}]}}),
  'Inflation ist die zeitliche Änderung des Preisniveaus. Der einmalige Niveauvergleich der Grafik beweist deshalb nicht, dass Inflation dauerhaft auf einer höheren Rate bleibt. Dafür müssten wiederholte Schocks, Erwartungen und dynamische Preis-/Lohnanpassungen betrachtet werden.'
 ]),
 S('unconventional','12. QE, QT und Forward Guidance verstehen','b c',[
  'Bei quantitativer Lockerung (QE) kauft die Zentralbank Wertpapiere in erheblichem Umfang und schafft bei der Abwicklung typischerweise Reserven. Sie kann damit Laufzeit- und andere Marktprämien, Liquidität und Erwartungen beeinflussen. Die Wirkung entsteht nicht allein dadurch, dass die Summe der Reservekonten größer geworden ist.',
  'Bei quantitativer Straffung (QT) werden Bestände beispielsweise durch ausbleibende Wiederanlage fälliger Papiere oder Verkäufe reduziert. Zeitpunkt, Marktbedingungen und das übrige Zinsinstrumentarium bestimmen die Gesamtwirkung. Gleiche Bilanzbeträge müssen in unterschiedlichen Situationen nicht gleich starke Zins- oder Nachfrageeffekte erzeugen.',
  'Forward Guidance spricht den erwarteten künftigen Politikpfad an. Glaubwürdige Hinweise auf niedrigere künftige kurze Zinsen können längere Finanzierungskosten schon heute beeinflussen; ein bereits vollständig erwarteter Hinweis enthält dagegen wenig zusätzliche Information.',
  T(['Mechanismus','Was für eine Beurteilung nötig ist'],[
   ['Portfolioeffekt','Welche Laufzeit- oder Risikoposition wird dem Markt entzogen und wie gut kann sie ersetzt werden?'],
   ['Signalwirkung','Was wird neu über den künftigen Zinspfad oder die Reaktionsfunktion gelernt?'],
   ['Marktfunktionswirkung','Wird eine gestörte Liquidität oder Preisbildung verbessert?'],
   ['Grenzen','Kreditnachfrage, Bankkapital, Risikoprämien, Mandat und Ausgangsbedingungen bleiben relevant.']
  ],'QE ist weder ein garantiertes prozentgleiches Kreditwachstum noch eine Überweisung desselben Betrags an jeden Haushalt.')
 ]),
 S('limits','13. Warum Wirkung und Geschwindigkeit begrenzt sind','c',[
  'Sehr niedrige nominale Zinsen können den Spielraum konventioneller Senkungen begrenzen. Die effektive Untergrenze ist nicht zwingend exakt null: Bargeldhaltung, Bankbilanzwirkungen und institutionelle Kosten beeinflussen, wie weit negative Zinsen praktikabel sind.',
  'Wenn zusätzliche liquide Guthaben überwiegend gehalten werden und kaum zusätzliche Ausgaben auslösen, kann die konventionelle Transmission schwach werden. Solche Situationen werden häufig mit einer Liquiditätsfalle verbunden. Daraus folgt nicht, dass jede Form von Geld- und Fiskalpolitik vollständig wirkungslos wäre.',
  'Banken mit schwachem Kapital oder Schuldner mit unsicheren Erträgen können trotz günstiger Reserven wenig neue Kredite abschließen. Fiskalische Dominanz kann entstehen, wenn die Sicherung staatlicher Finanzierung die unabhängige Preisstabilitätsreaktion unter Druck setzt. Eine solide Analyse trennt diese institutionellen Probleme von einem normalen zeitlichen Wirkungsverzug.',
  'Unbekanntes Potenzial, schwankender neutraler Realzins, Datenrevisionen und Änderungen der Vertragsstruktur erschweren die Dosierung. Eine schnelle Reaktion der Anleihemärkte beweist deshalb noch nicht, dass die spätere Inflationswirkung genau bekannt ist.',
  'Asymmetrien sind möglich: Teure Finanzierung kann Ausgabenpläne unmittelbar verhindern, während billigere Finanzierung bei pessimistischen Erwartungen nicht automatisch neue rentable Projekte erzeugt. Ebenso kann eine Straffung bei hoher Verschuldung stärker wirken als in einer Volkswirtschaft mit langen festen Zinsbindungen.'
 ]),
 S('policy-mix','14. Fiskal- und Geldpolitik gemeinsam beurteilen','d',[
  T(['Fiskalische Änderung','Geldpolitische Änderung','Typischer Nachfrageeffekt bei sonst gleichen Bedingungen'],[
   ['Expansiv','Expansiv','Beide stützen Nachfrage; bei knappen Kapazitäten können Preisdruck und Überhitzung zunehmen.'],
   ['Restriktiv','Restriktiv','Beide dämpfen Nachfrage; Inflation kann sinken, aber auch Aktivität und Beschäftigung können kurzfristig belastet werden.'],
   ['Expansiv','Restriktiv','Effekte auf Gesamtnachfrage konkurrieren; Zusammensetzung kann stärker zu Staatskäufen und weg von zinsabhängiger Privatnachfrage gehen.'],
   ['Restriktiv','Expansiv','Gegenläufige Impulse; günstigere Finanzierung kann private Aktivität gegenüber Staatsnachfrage begünstigen.']
  ],'Bei gegenläufigen Maßnahmen lässt sich der gesamte Outputeffekt ohne relative Stärke und Transmission nicht bestimmen.'),
  X('Gegenläufige Politik ist keine automatische Neutralität','In einem ausdrücklich vereinfachten Gütermarktmodell beträgt der Ausgabenmultiplikator 2. Fiskalisch steigen Staatskäufe um 12, während höhere Finanzierungskosten autonome private Investitionen um 7 senken.',[
   'Der angenommene autonome Nettoimpuls beträgt +5, der Outputeffekt +10. Staats- und Privatnachfrage verändern sich dabei unterschiedlich.',
   'Wäre der Investitionsrückgang stattdessen 15, wäre der Nettoimpuls −3 und der Outputeffekt −6. Die Etiketten „expansiv“ und „restriktiv“ allein bestimmen den Gesamteffekt somit nicht.',
   'Das Beispiel hält Preise, Wechselkurs und weitere Gegenreaktionen konstant. Es ist kein vollständiges Modell zur Vorhersage eines bestimmten Landes.'
  ],'Eine Prüfungsantwort nennt Richtung, Kanal, Zusammensetzung und verbleibende Unsicherheit.'),
  'Fiskalische Transfers an stark ausgabebeschränkte Haushalte können die Nachfrage anders verändern als eine Investitionssteuervergünstigung. Eine pauschale Leitzinssenkung kann diese Unterschiede nicht exakt spiegeln. Politikkoordination bedeutet deshalb nicht nur, zwei Plus- und Minuszeichen zu addieren.'
 ])
],related:[{unit:'fiscal',section:'multipliers',label:'Nachfragerückkopplungen und ihre Annahmen herleiten'},{unit:'fiscal',section:'debt-dynamics',label:'Zinsen, Wachstum und staatliche Finanzierung'},{unit:'cycles',section:'credit-pricing',label:'Kreditaufschläge und eingeschränkte Transmission'},{unit:'returns',section:'purchasing-power',label:'Nominalzins und Kaufkraftrechnung'},{unit:'tvm',section:'bonds',label:'Anleihepreise aus Cashflows und Diskontierung'}],
 sources:[
 {title:'CFA Institute: offizieller Lernzielkatalog Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=6'},
 {title:'CFA Institute: Monetary Policy',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/monetary-policy'},
 {title:'Bank of England: How Monetary Policy Transmits',url:'https://www.bankofengland.co.uk/quarterly-bulletin/2024/2024/about-a-rate-of-general-interest-how-monetary-policy-transmits'},
 {title:'Bank of England: Money Creation in the Modern Economy',url:'https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy'},
 {title:'Bank of England: The Transmission Mechanism of Monetary Policy',url:'https://www.bankofengland.co.uk/quarterly-bulletin/1999/q2/the-transmission-mechanism-of-monetary-policy'},
 {title:'Bank of England: QE — Functioning and Effectiveness',url:'https://www.bankofengland.co.uk/quarterly-bulletin/2022/2022-q1/qe-at-the-bank-of-england-a-perspective-on-its-functioning-and-effectiveness'}
 ],review:{status:'draft',date:'2026-09-23',note:'Eigene Realzins-, Bilanz-, Nachfrage-/Angebots- und Politikmixbeispiele; nominale und reale Größen sowie statische Identität und kausale Annahme getrennt.'}};
