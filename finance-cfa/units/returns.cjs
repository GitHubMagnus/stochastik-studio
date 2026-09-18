const {F,T,X,S,G}=require('../author.cjs');
module.exports={id:'returns',intro:[
 'Eine Rendite ist zunächst eine Veränderung relativ zum eingesetzten Kapital. Erst zusätzliche Angaben machen daraus eine brauchbare Information: Zeitraum, Zahlungszeitpunkte, Währung, Risiko, Gebühren und die Frage, ob der Wert beobachtet, erwartet oder gefordert wird.',
 'Dieses Kapitel verbindet die wirtschaftliche Bedeutung mit der Rechnung. Die Zahlenbeispiele verändern jeweils gezielt eine Voraussetzung. So wird erkennbar, warum eine höhere ausgewiesene Rendite nicht automatisch eine bessere Anlage bedeutet.'
],sections:[
 S('return-meanings','1. Beobachtet, erwartet, versprochen und gefordert','a',[
  T(['Begriff','Zeitliche Sicht','Welche Frage wird beantwortet?'],[
   ['Realized Return','Nach Ablauf der Anlageperiode.','Welches Ergebnis ist tatsächlich eingetreten?'],
   ['Expected Return','Vor Ablauf, auf Basis eines Modells oder einer Einschätzung.','Welches wahrscheinlichkeitsgewichtete Ergebnis wird erwartet?'],
   ['Promised Return','Aus vertraglich zugesagten Zahlungen.','Welche Rendite ergäbe sich, wenn die versprochenen Zahlungen vollständig erfolgen?'],
   ['Required Return','Entscheidungsmaßstab vor der Anlage.','Welche Kompensation verlangt der Anleger für Zeit und Risiko?']
  ],'Die Begriffe können für dasselbe Wertpapier gleichzeitig verschiedene Zahlen bezeichnen.'),
  F('E[R]=\\sum_{s=1}^{k}p_sR_s,\\qquad \\sum_{s=1}^{k}p_s=1','Die erwartete Rendite gewichtet mögliche Renditen mit ihren Wahrscheinlichkeiten. Sie muss in keinem einzelnen Szenario tatsächlich eintreten.',[['E[R]','Erwartete einfache Rendite der betrachteten Periode.'],['R_s','Rendite im Szenario s.'],['p_s','Wahrscheinlichkeit des Szenarios s, zwischen 0 und 1.'],['k,s','Anzahl der Szenarien und Szenarioindex.']]),
  X('Erwartet heißt nicht garantiert','Eine Anlage erzielt mit Wahrscheinlichkeit 60 % eine Rendite von +15 % und mit Wahrscheinlichkeit 40 % eine Rendite von −10 %. Dies seien alle möglichen Ergebnisse.',[
   F('E[R]=0{,}60\\cdot0{,}15+0{,}40\\cdot(-0{,}10)=0{,}05=5\\%','Die positive gewichtete Komponente beträgt 9 Prozentpunkte, die negative −4 Prozentpunkte.',[['E[R]','Erwartete Periodenrendite.']]),
   'Die 5 % sind ein Mittelwert der Verteilung. In diesem Modell tritt tatsächlich entweder +15 % oder −10 % ein.',
   'Ein Vergleich mit einer sicheren Rendite von 4 % braucht eine Risikobeurteilung. Der um einen Prozentpunkt höhere Erwartungswert beweist keine Dominanz für jeden Anleger.'
  ],'Erwartung beschreibt eine Verteilung, Forderung einen Entscheidungsmaßstab und Realisierung einen tatsächlich beobachteten Ausgang.')
 ]),
 S('holding-return','2. Ertrag und Kursbewegung zusammenführen','a',[
  F('R=\\frac{P_1-P_0+D_1}{P_0}=\\frac{P_1-P_0}{P_0}+\\frac{D_1}{P_0}','Die einfache Haltedauerrendite besteht aus Kursänderung und laufendem Ertrag relativ zum Anfangspreis. Die Zahlung fällt hier am Ende an; während der Periode gibt es keine externen Anlegerzahlungen.',[['R','Gesamtrendite der Haltedauer als Dezimalzahl.'],['P_0,P_1','Preis am Anfang bzw. am Ende je identischer Anlageeinheit.'],['D_1','Am Periodenende gezahlter Ertrag je Einheit, in derselben Währung.']]),
  X('Eine Ausschüttung ist kein Geschenk neben dem Kurs','Eine Aktie wird für 80 gekauft. Am Ende der Periode notiert sie bei 77 und zahlt gleichzeitig 5 Dividende. Steuern und Gebühren bleiben unberücksichtigt.',[
   F('R=\\frac{77-80+5}{80}=2{,}5\\%','Der Kursverlust beträgt 3, der laufende Ertrag 5; der wirtschaftliche Nettozuwachs beträgt 2.',[['R','Gesamtrendite der Anlageperiode.']]),
   'Die reine Kursrendite beträgt −3,75 %, die Ertragskomponente 6,25 %. Zusammen ergeben sie 2,5 %.',
   'Würde der Kurs bei Ausschüttung um genau 5 auf 75 fallen, wäre die Gesamtrendite null. Nur auf die Dividende zu schauen würde den Wertverlust der Aktie ignorieren.'
  ],'Immer den gesamten Zahlungsanspruch betrachten. Preisrendite und Gesamtrendite sind verschiedene Größen.'),
  'Bei Zahlungen innerhalb der Periode muss ein genauer Mehrperiodenvergleich auch deren Zeitpunkte und Wiederanlage berücksichtigen. Eine einfache Summe der Ausschüttungen unterstellt keine automatisch tatsächlich erzielte Wiederanlagerendite.'
 ]),
 S('rate-roles','3. Renditeforderung, Diskontsatz und Opportunitätskosten','a b',[
  'Ein Zinssatz kann drei zusammenhängende Rollen spielen. Als Renditeforderung beschreibt er den verlangten Ertrag für eine passende Alternative. Als Diskontsatz übersetzt er eine zukünftige Zahlung in einen heutigen Wert. Als Opportunitätskosten zeigt er, auf welche geeignete andere Anlage man durch eine Entscheidung verzichtet. Vergleichbar müssen insbesondere Risiko, Währung und Zeitraum sein.',
  F('P_0=\\frac{CF_1}{1+k},\\qquad k=\\frac{CF_1}{P_0}-1','Bewertung und implizite Rendite sind zwei Umstellungen derselben Einperiodengleichung.',[['P_0','Heutiger Wert bzw. Marktpreis.'],['CF_1','Zahlung nach genau einer Periode; bei Risiko ist die verwendete Cashflow- und Diskontierungslogik ausdrücklich festzulegen.'],['k','Passender Diskontsatz bzw. aus Preis und Zahlung implizierte Rendite dieser Periode.']]),
  X('Gleiche Zahlung, höhere verlangte Rendite','Eine sichere Zahlung von 105 in einem Jahr wird zunächst mit einem passenden Satz von 5 %, später mit 8 % bewertet. Währung und Zahlung bleiben gleich.',[
   F('P_0^{(5\\%)}=\\frac{105}{1{,}05}=100,\\qquad P_0^{(8\\%)}=\\frac{105}{1{,}08}\\approx97{,}22','Die höhere attraktive Alternative macht dieselbe künftige Zahlung heute weniger wert.',[['P_0^{(5\\%)},P_0^{(8\\%)}','Heutige Werte unter den beiden angegebenen Diskontsätzen.']]),
   'Bei Preis 100 bietet die Zahlung weiterhin nur 5 % Haltedauerrendite. Wenn vergleichbare Alternativen nun 8 % bieten, muss der Preis sinken, damit die Rendite des Kaufs steigt.',
   'Die zusätzliche Rendite entsteht beim neuen Käufer durch den günstigeren Einstieg. Die vertragliche Zahlung selbst wurde nicht erhöht.'
  ],'Preis und Renditeforderung bewegen sich bei unveränderten positiven künftigen Zahlungen in entgegengesetzte Richtungen.')
 ]),
 S('premia','4. Was eine Renditeforderung kompensieren soll','b',[
  F('k\\approx r^*+\\pi^e+RP_D+RP_L+RP_M','Die additive Zerlegung ist eine ökonomische Lernnäherung: reale sichere Verzinsung plus erwarteter Kaufkraftausgleich und Prämien für bestimmte Risiken.',[['k','Nominale geforderte Rendite für einen passend definierten Zeitraum.'],['r^*','Realer risikofreier Zinssatz.'],['\\pi^e','Erwartete Inflationsrate; das hochgestellte e kennzeichnet eine Erwartung.'],['RP_D','Prämie im Zusammenhang mit Ausfallrisiko.'],['RP_L','Prämie für eingeschränkte Liquidität.'],['RP_M','Prämie für laufzeitbezogenes Risiko.']]),
  T(['Baustein','Intuition','Wichtige Grenze'],[
   ['Realer risikofreier Satz','Kompensation für den zeitlichen Verzicht auf reale Kaufkraft.','Abhängig von Laufzeit und ökonomischer Situation.'],
   ['Inflation','Nominales Geld muss bei steigenden Preisen mehr werden, um dieselbe Gütermenge zu kaufen.','Erwartete und tatsächliche Inflation können abweichen.'],
   ['Ausfall','Zahlungen können verspätet, reduziert oder gar nicht erfolgen.','Versprochene Rendite ist nicht gleich erwartete Rendite.'],
   ['Liquidität','Ein Verkauf kann teuer, langsam oder nur mit Abschlag möglich sein.','Liquidität kann gerade in Stressphasen verschwinden.'],
   ['Laufzeit','Längere Bindung und Zinssensitivität können zusätzliche Risiken erzeugen.','Prämien sind keine mechanisch beobachtbaren konstanten Zuschläge.']
  ],'Die Komponenten dienen der wirtschaftlichen Erklärung. Marktspreads enthalten oft mehrere überlappende Einflüsse.'),
  X('Einen Spread nicht vollständig als Ausfallwahrscheinlichkeit lesen','Zwei ansonsten ähnliche Anleihen unterscheiden sich in Handelbarkeit. Die weniger liquide wird mit höherer Rendite gehandelt, obwohl die erwarteten Ausfallverluste gleich eingeschätzt werden.',[
   'Die Mehrverzinsung kann die schwerere Veräußerbarkeit kompensieren. Ein Renditeunterschied ist daher nicht automatisch vollständig ein Maß für Kreditverluste.',
   'Erhöht man nur die angenommene Ausfallwahrscheinlichkeit, um den gesamten Spread zu erklären, kann das Modell die Ursache falsch zuordnen.',
   'Die additive Darstellung hilft, mögliche Ursachen zu ordnen; sie liefert ohne zusätzliche Daten keine eindeutige empirische Zerlegung.'
  ],'Risikoprämien erklären geforderte Kompensation, nicht einen sicher eintretenden Mehrgewinn.')
 ]),
 S('purchasing-power','5. Nominal und real: die Fisher-Beziehung herleiten','b',[
  'Nominale Rendite misst Geldwachstum. Reale Rendite misst das Wachstum der damit kaufbaren Gütermenge. Steigt das Geldvermögen um einen Faktor und das Preisniveau um einen anderen, muss man die Faktoren dividieren. Prozentzahlen einfach abzuziehen ist nur eine Näherung.',
  F('1+R_{real}=\\frac{1+R_{nom}}{1+\\pi},\\qquad R_{real}=\\frac{R_{nom}-\\pi}{1+\\pi}','Die Beziehung ist eine exakte Umrechnung realisierter Größen für dieselbe Periode und denselben Preisindex; erforderlich ist ein positives Preisniveau.',[['R_{real}','Realisierte reale Rendite, Veränderung der Kaufkraft.'],['R_{nom}','Realisierte nominale Rendite, Veränderung des Geldwerts.'],['\\pi','Realisierte Inflation des gewählten Preisindex in derselben Periode.']]),
  F('R_{nom}=R_{real}+\\pi+R_{real}\\pi\\approx R_{real}+\\pi','Der Produktterm erklärt den Unterschied zwischen exakter Rechnung und der Näherung. Bei kleinen Raten ist er häufig klein.',[['R_{nom},R_{real}','Nominale bzw. reale Periodenrendite.'],['\\pi','Inflationsrate derselben Periode.']]),
  X('Mehr Geld, trotzdem weniger Kaufkraft','1.000 werden in einem Jahr zu 1.080. Ein repräsentativer Warenkorb verteuert sich im selben Jahr von 100 auf 110.',[
   'Zu Beginn können 10 Warenkörbe gekauft werden; am Ende nur 1.080/110 = 9,81818. Das Vermögen in Euro ist gestiegen, seine Kaufkraft gefallen.',
   F('R_{real}=\\frac{1{,}08}{1{,}10}-1\\approx-1{,}818\\%','Die Näherung 8 % − 10 % = −2 % liegt in der Nähe, ist aber nicht exakt.',[['R_{real}','Reale Jahresrendite relativ zum angegebenen Warenkorb.']]),
   'Ein anderer Warenkorb kann eine andere Inflationsrate ergeben. Der reale Erfolg eines bestimmten Haushalts muss daher nicht exakt dem allgemeinen Verbraucherpreisindex entsprechen.'
  ],'Für reale Vergleiche müssen Zeitraum, Währung und Preisindex zusammenpassen.'),
  'Ex ante verwendet die einfache Fisher-Beziehung erwartete Inflation und reale Renditeforderungen. Bei unsicherer Inflation sind Erwartungswerte von Quotienten nicht allgemein Quotienten von Erwartungswerten; Inflationsrisikoprämien und Kovarianzen können zusätzlich relevant sein.'
 ]),
 S('inflation-horizon','6. Kleine jährliche Unterschiede wirken über die Laufzeit','b',[
  F('W_n^{nom}=W_0(1+r)^n,\\qquad W_n^{real}=W_0\\left(\\frac{1+r}{1+\\pi}\\right)^n','Bei konstanten Raten wird der nominale Endwert durch das kumulierte Preiswachstum geteilt. Reale Werte sind hier in Kaufkraft des Startjahres ausgedrückt.',[['W_0','Anfangsvermögen in Geldeinheiten.'],['W_n^{nom},W_n^{real}','Nominales bzw. kaufkraftbereinigtes Vermögen nach n Jahren.'],['r','Konstante jährliche nominale Rendite.'],['\\pi','Konstante jährliche Inflation.'],['n','Anzahl der Jahre.']]),
  G({id:'nominal-real',title:'Geldwachstum und Kaufkraft wachsen unterschiedlich',
   caption:'Startvermögen 100, jährlich 6 % nominale Rendite und 4 % Inflation; keine Zahlungen, Steuern oder Gebühren.',
   reading:'Die obere Kurve zeigt Geldbeträge des jeweiligen Jahres. Die untere zeigt deren Kaufkraft in Preisen des Startjahres. Die Differenz ist kein zusätzlicher Kontoabzug, sondern ein Unterschied der Maßeinheit.',
   plot:{x:[0,10],y:[90,190],xTicks:[0,2,4,6,8,10],xLabel:'Jahre seit Anlagebeginn',yLabel:'Vermögen / Kaufkraft des Startjahres',series:[
    {name:'Nominales Vermögen',points:Array.from({length:11},(_,n)=>[n,100*1.06**n])},
    {name:'Reale Kaufkraft bei 4 % Inflation',points:Array.from({length:11},(_,n)=>[n,100*(1.06/1.04)**n]),dash:'8 5'}
   ]}}),
  'Die reale Jahresrendite beträgt hier rund 1,923 %. Sie wird ebenfalls verzinst: Nach zehn Jahren ist die reale Zunahme deshalb nicht genau zehnmal die Jahresrendite. Das Diagramm hält alle Annahmen konstant; es ist keine Prognose künftiger Marktrenditen.'
 ]),
 S('promised-expected','7. Warum versprochene Rendite erwartete Verluste nicht zeigt','a b',[
  X('Ein Kredit mit zwei Rückzahlungsszenarien','Ein einjähriger Anspruch kostet 100 und verspricht 108. Mit Wahrscheinlichkeit 95 % werden 108 gezahlt, mit Wahrscheinlichkeit 5 % nur 60. Es gibt keine weiteren Zahlungen.',[
   F('R_{prom}=\\frac{108}{100}-1=8\\%,\\qquad E[R]=\\frac{0{,}95\\cdot108+0{,}05\\cdot60}{100}-1=5{,}6\\%','Die erwartete Zahlung beträgt 105,6. Sie liegt wegen des Ausfallszenarios unter der zugesagten Zahlung.',[['R_{prom}','Rendite bei vollständiger Vertragserfüllung.'],['E[R]','Erwartete Rendite unter den angegebenen tatsächlichen Szenariowahrscheinlichkeiten.']]),
   'Die Differenz von 2,4 Prozentpunkten folgt hier aus dem erwarteten Zahlungsverlust von 5 % × 48 = 2,4 bezogen auf den Preis 100.',
   'Die erwarteten 5,6 % sind trotzdem nicht risikofrei. Der Anleger kann 8 % gewinnen oder 40 % verlieren; das Risiko der Verteilung ist noch vorhanden.',
   'Beim Bewerten darf ein bereits reduzierter erwarteter Cashflow nicht unbesehen nochmals mit einem Zuschlag belastet werden, der denselben erwarteten Verlust doppelt erfasst. Erwartete Cashflows mit risikoadjustiertem Diskontsatz und zugesagte Cashflows mit passender Rendite sind unterschiedliche Bewertungsdarstellungen.'
  ],'Kupon, versprochene Yield und erwartete Rendite müssen begrifflich getrennt bleiben.')
 ]),
 S('comparison','8. Vergleichskonventionen vor dem Urteil prüfen','a b',[
  T(['Angabe','Notwendige Zusatzfrage'],[
   ['„8 % Rendite“','Für welchen Zeitraum, welche Währung und welche Zahlungen?'],
   ['„Risikofrei“','Bezogen auf welche Währung, Haltedauer und nominale oder reale Zahlung?'],
   ['„Rendite steigt um 10 %“','Relativer Anstieg oder Veränderung in Prozentpunkten?'],
   ['„Hohe Verzinsung“','Versprochen, erwartet oder tatsächlich realisiert; welche Risiken werden getragen?']
  ],'Ein Staatsinstrument kann beispielsweise nominale Zahlungen sehr zuverlässig erfüllen und trotzdem reale Kaufkraft- oder Wechselkursrisiken besitzen.'),
  F('\\Delta r_{bp}=10\\,000(r_1-r_0)','Bei als Dezimalzahlen eingegebenen Zinssätzen entsprechen 0,01 einem Prozentpunkt und 100 Basispunkten.',[['\\Delta r_{bp}','Zinsänderung in Basispunkten.'],['r_0,r_1','Alter und neuer Zinssatz als Dezimalzahl.']]),
  X('30 Basispunkte sind nicht 30 Prozent','Eine Rendite steigt von 2,8 % auf 3,1 %.',[
   'Die absolute Veränderung beträgt 0,3 Prozentpunkte bzw. 30 Basispunkte.',
   'Relativ zum alten Renditeniveau ist das ein Anstieg von 0,3/2,8 ≈ 10,714 %. Diese relative Prozentänderung beantwortet eine andere Frage.',
   'Ein Zinsschock von 30 Basispunkten wird in einer Durationformel als 0,003 eingesetzt, nicht als 0,3 oder 30.'
  ],'Einheiten sind Teil der Formel. Eine richtige Rechnung mit einer falsch eingegebenen Einheit erzeugt ein falsches Ergebnis.')
 ])],related:[{unit:'return-types',section:'annualization',label:'Haltedauern, Jahresrenditen und Zinskonventionen umrechnen'},{unit:'benchmarks',section:'time-weighted',label:'Externe Einzahlungen bei der Performancemessung behandeln'},{unit:'tvm',section:'single-cashflow',label:'Aus Renditeforderungen werden Barwerte'}],
 sources:[
 {title:'CFA Institute: Rates and Returns – wirtschaftliche Grundlagen',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/rates-and-returns'},
 {title:'OpenStax: Time Value of Money Basics',url:'https://openstax.org/books/principles-finance-2e/pages/7-2-time-value-of-money-tvm-basics'}
 ],review:{status:'draft',date:'2026-09-18',note:'Eigene Beispiele mit getrennten Erwartungs-, Vertrags- und Realgrößen; Fisher-Umrechnung und Prämiengrenzen ausdrücklich erläutert.'}};
