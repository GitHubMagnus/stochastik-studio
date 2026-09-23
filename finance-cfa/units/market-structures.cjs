const {F,T,X,S,G}=require('../author.cjs');
const sample=(lo,hi,fn,n=120)=>Array.from({length:n+1},(_,i)=>{const x=lo+(hi-lo)*i/n;return[x,fn(x)];});
module.exports={id:'market-structures',intro:[
 'Marktstruktur beeinflusst, wie lange hohe Unternehmensrenditen bestehen können. Ein Unternehmen kann seine Produktion effizient organisieren und trotzdem kaum Preissetzungsmacht haben. Ein anderes kann durch Differenzierung, knappe Ressourcen oder Eintrittsbarrieren einen Preis über Grenzkosten verlangen. Für die Bewertung zählt, welcher Mechanismus die Marge trägt und wie er sich durch Wettbewerb verändern könnte.',
 'Wir verbinden deshalb drei Ebenen: die Kostenentscheidung eines einzelnen Unternehmens, das Verhalten seiner Konkurrenten und die langfristige Reaktion auf Gewinne. Die Beispiele halten jeweils Nachfrage oder Kosten bewusst konstant, damit sichtbar wird, welche Annahme das Ergebnis verändert.'
],sections:[
 S('economic-profit','1. Gewinn heißt mehr als positiver Jahresüberschuss','a b',[
  F('\\pi(q)=TR(q)-TC(q)=P(q)q-F-VC(q)','Ökonomischer Gewinn berücksichtigt die wirtschaftlichen Kosten der eingesetzten Ressourcen einschließlich ihrer Opportunitätskosten. Umsatz minus explizite Zahlungen allein ist eine andere Größe.',[['\\pi(q)','Ökonomischer Gewinn bei Menge q.'],['TR,TC','Gesamterlös und ökonomische Gesamtkosten.'],['P(q),q','Preis je Einheit und Absatzmenge.'],['F,VC(q)','Im betrachteten kurzen Entscheidungszeitraum unvermeidbare Fixkosten und mengenabhängige variable Kosten.']]),
  X('Normaler Gewinn kann in der Gewinnrechnung positiv aussehen','Ein inhabergeführtes Unternehmen erzielt 200.000 Umsatz und zahlt 140.000 für eingekaufte Ressourcen. Für die Arbeit des Inhabers wäre anderswo ein Gehalt von 40.000 erreichbar; das gebundene Kapital könnte bei vergleichbarem Risiko 20.000 erwirtschaften.',[
   'Nach Abzug nur der expliziten Zahlungen bleiben 60.000. Darin stecken aber die normale Vergütung der Inhaberarbeit und der Kapitaleinsatz.',
   F('\\pi=200000-140000-40000-20000=0','Der ökonomische Überschuss ist null, obwohl die Differenz aus Umsatz und expliziten Zahlungen positiv ist.',[['\\pi','Ökonomischer Gewinn nach den angegebenen Opportunitätskosten.']]),
   'Ein langfristiges Gleichgewicht mit ökonomischem Gewinn null bedeutet deshalb nicht, dass Arbeit und Kapital unentgeltlich eingesetzt werden.'
  ],'Die relevante Alternative und deren Risiko müssen zum Ressourceneinsatz passen. Eine beliebige besonders hohe Vergleichsrendite ist kein sinnvoller Kostenmaßstab.'),
  'Fixkosten, versunkene Kosten und vermeidbare Kosten sind nicht dasselbe. Ein heute vermeidbarer Mietvertrag kann für eine Stilllegungsentscheidung relevant sein; eine bereits unwiederbringlich bezahlte Entwicklungsleistung lässt sich durch Schließung nicht zurückholen. Die Entscheidung vergleicht veränderbare zukünftige Zahlungs- und Ressourcenwirkungen.'
 ]),
 S('costs','2. Durchschnittskosten und Grenzkosten beantworten verschiedene Fragen','a',[
  F('AFC=\\frac Fq,\\quad AVC=\\frac{VC(q)}q,\\quad ATC=\\frac{TC(q)}q=AFC+AVC,\\quad MC=\\frac{dTC}{dq}','Durchschnittskosten verteilen Kosten auf alle Einheiten. Grenzkosten beschreiben die zusätzliche Kostenänderung bei einer kleinen Mengenerhöhung; bei diskreten Einheiten verwendet man entsprechende Differenzen.',[['AFC,AVC,ATC','Durchschnittliche fixe, variable und gesamte Kosten je Einheit, für q > 0.'],['F,VC(q),TC(q)','Fixkosten, variable und Gesamtkosten.'],['MC,q','Grenzkosten und Outputmenge.'],['dTC/dq','Ableitung der Gesamtkosten nach der Menge.']]),
  F('\\frac{dATC}{dq}=\\frac{MC-ATC}{q},\\qquad \\frac{dAVC}{dq}=\\frac{MC-AVC}{q}','Eine zusätzliche Einheit unter dem bisherigen Durchschnitt senkt den Durchschnitt; oberhalb davon erhöht sie ihn. Bei einem glatten inneren Minimum schneidet MC deshalb die entsprechende Durchschnittskostenkurve.',[['ATC,AVC,MC','Gesamte bzw. variable Durchschnittskosten und Grenzkosten.'],['q','Positive Menge.'],['d/dq','Ableitung nach der Menge.']]),
  'Grenzkosten entscheiden, ob eine weitere Einheit sinnvoll ist. Durchschnittskosten entscheiden, ob der Erlös insgesamt die betreffende Kostenbasis deckt. Wer beide vertauscht, kann eine kurzfristig sinnvolle Produktion trotz Verlust einstellen oder eine zusätzliche verlustreiche Einheit nur wegen eines niedrigen bisherigen Durchschnitts herstellen.'
 ]),
 S('price-taker','3. Ein Preisnehmer wählt die Menge, nicht den Marktpreis','a b',[
  F('MR=\\frac{dTR}{dq},\\qquad \\frac{d\\pi}{dq}=MR-MC,\\qquad MR=P\\quad\\text{beim Preisnehmer}','Ein gewinnmaximierender Betrieb vergleicht zusätzlichen Erlös und zusätzliche Kosten. Bei einem konstant vorgegebenen Preis bringt jede weitere Einheit genau diesen Preis als zusätzlichen Erlös.',[['MR,MC','Grenzerlös und Grenzkosten.'],['TR,\\pi,q','Gesamterlös, ökonomischer Gewinn und Outputmenge.'],['P','Für das einzelne Unternehmen vorgegebener Marktpreis.'],['d/dq','Ableitung nach der Menge.']]),
  'MR = MC ist zunächst eine notwendige Bedingung für ein glattes inneres Optimum. Die passende Schnittstelle muss ein Maximum liefern; bei der üblichen Preisnehmerkurve liegt sie auf dem steigenden MC-Abschnitt. Außerdem werden Randlösungen wie Nichtproduktion und vorhandene Kapazitätsgrenzen geprüft.',
  'Die Marktnachfrage kann fallen, obwohl ein einzelner kleiner Preisnehmer eine horizontale Nachfrage zum Marktpreis wahrnimmt. Die Summe vieler kleiner Anbieter und Nachfrager bestimmt den Preis; ein einzelner Anbieter beeinflusst ihn im Modell nicht merklich.',
  'Eine Verschiebung der Marktnachfrage verändert den Marktpreis. Erst danach reagiert der einzelne Preisnehmer entlang seiner kurzfristigen Angebotskurve. Unternehmensnachfrage und gesamte Marktnachfrage sind zwei verschiedene Betrachtungsebenen.'
 ]),
 S('shutdown','4. Betriebsschwelle und Gewinnschwelle auseinanderhalten','a',[
  F('TR-VC\\ge0\\quad\\Longleftrightarrow\\quad P\\ge AVC\\quad(q>0)','Bei unvermeidbaren Fixkosten lohnt die beste positive Produktionsalternative gegenüber Stilllegung nur, wenn ihr Erlös mindestens die vermeidbaren variablen Kosten deckt. Am Gleichheitspunkt ist der Betrieb zwischen beiden Möglichkeiten indifferent.',[['TR,VC','Gesamterlös und vermeidbare variable Kosten dieser Produktionsalternative.'],['P,AVC,q','Preis, durchschnittliche variable Kosten und positive Menge.']]),
  F('P_{SD}=\\min_{q>0}AVC(q),\\qquad P_{BE}=\\min_{q>0}ATC(q)','Für einen Preisnehmer mit der üblichen Kostenstruktur ist der niedrigste kurzfristig tragbare Preis das AVC-Minimum. Ökonomischer Gewinn null ist bei kostenminimaler Menge am ATC-Minimum möglich.',[['P_{SD}','Kurzfristige Betriebsschwelle / Shutdown-Preis.'],['P_{BE}','Gewinnschwelle / Break-even-Preis.'],['AVC(q),ATC(q)','Variable bzw. gesamte Durchschnittskosten.'],['q,\\min','Positive Menge und Minimum über die betrachteten zulässigen Mengen.']]),
  T(['Preis bei der besten positiven Menge','Kurzfristige Konsequenz','Ökonomischer Gewinn'],[
   ['Unter AVC','Stilllegen, falls dadurch die variablen Kosten vermieden werden.','Bei unvermeidbarem F verbleibt −F.'],
   ['Gleich AVC','Produktion und Stilllegung können gleichwertig sein.','Der gesamte Fixkostenbetrag bleibt ungedeckt.'],
   ['Über AVC, unter ATC','Produktion deckt einen Teil der Fixkosten.','Verlust, aber geringer als bei Stilllegung.'],
   ['Gleich ATC','Gesamte ökonomische Kosten gedeckt.','Null; normale Ressourcenvergütung ist bereits enthalten.'],
   ['Über ATC','Produktion erwirtschaftet einen Überschuss.','Positiver ökonomischer Gewinn.']
  ],'Die Tabelle setzt passende optimale Mengen und unvermeidbare kurzfristige Fixkosten voraus. Langfristig werden andere Kosten vermeidbar.'),
  'Bei Marktmacht ist der Preis nicht frei unabhängig von der Menge wählbar. Allgemeiner vergleicht man den maximal erreichbaren Erlösüberschuss über vermeidbare Kosten mit der Stilllegungsalternative. Die einfache Preisnehmer-Angebotskurve darf nicht unverändert auf einen Monopolisten übertragen werden.'
 ]),
 S('cost-example','5. Dieselben Kosten, fünf Preise: was ändert sich wirklich?','a',[
  F('TC(q)=8+10q-2q^2+q^3,\\quad AVC(q)=10-2q+q^2,\\quad ATC(q)=8/q+10-2q+q^2,\\quad MC(q)=10-4q+3q^2','Eine konstruierte kontinuierliche Kostenfunktion erzeugt getrennte Betriebs- und Gewinnschwellen. Die 8 sind kurzfristig unvermeidbar; Produktion null verursacht daher Kosten von 8.',[['TC,AVC,ATC,MC','Gesamtkosten, variable und gesamte Durchschnittskosten sowie Grenzkosten in Geldeinheiten bzw. Geldeinheiten pro Einheit.'],['q','Outputmenge; für Durchschnittskosten strikt positiv.']]),
  X('Die beiden Schwellen aus der Funktion herleiten','Es gilt F = 8. Alle Mengen und Preise sind Modellwerte, keine Unternehmensdaten.',[
   'AVC hat Ableitung −2 + 2q. Sie ist bei q = 1 null; dort liegt AVC = 9. Der Shutdown-Preis ist 9.',
   'ATC hat Ableitung −8/q² − 2 + 2q. Bei q = 2 ist sie null; ATC = 4 + 10 − 4 + 4 = 14. Dies ist das Kostenminimum und damit der Break-even-Preis.',
   'Bei Preis 10 ergibt die steigende MC-Schnittstelle q = 4/3. Der Betrieb macht rund 6,815 Verlust, vermeidet gegenüber Stilllegung mit Verlust 8 aber einen zusätzlichen Verlust von rund 1,185.',
   'Bei Preis 25 wird q = 3 gewählt: Umsatz 75, Gesamtkosten 47, Gewinn 28. Ein höherer Preis ändert die optimale Menge, nicht rückwirkend die vorgegebene Kostenfunktion.'
  ],'Ein Verlust allein rechtfertigt kurzfristige Schließung noch nicht; entscheidend ist der Vergleich mit der tatsächlichen Alternative.'),
  T(['Marktpreis','Gewählte Menge','Gewinn','Entscheidungsgrund'],[
   ['8','0','−8','Keine positive Menge deckt ihre variablen Kosten.'],
   ['9','0 oder 1','−8','Am AVC-Minimum gerade indifferent.'],
   ['10','4/3 ≈ 1,333','≈ −6,815','Ein positiver Deckungsbeitrag reduziert den Verlust.'],
   ['14','2','0','MC = ATC = Preis am ATC-Minimum.'],
   ['25','3','28','Preis liegt oberhalb der gesamten Stückkosten.']
  ],'Alle Fälle verwenden dieselbe Kostenfunktion. Dadurch sind Preisänderung und Kostenänderung sauber getrennt.'),
  G({id:'cost-thresholds',title:'Grenzkosten schneiden die Durchschnittskosten an ihren Minima',
   caption:'Berechnete Kurven des Kostenbeispiels. Betriebsschwelle bei q = 1 und Preis 9; Gewinnschwelle bei q = 2 und Preis 14.',
   reading:'Zwischen den beiden Preisschwellen kann Produktion trotz ökonomischem Verlust kurzfristig sinnvoll sein. Für die Menge wird der steigende MC-Abschnitt verwendet; für den Gewinn wird der Preis mit ATC verglichen.',
   plot:{x:[.5,3.5],y:[0,40],xLabel:'Menge q',yLabel:'Kosten / Preis je Einheit',series:[
    {name:'Grenzkosten MC',points:sample(.5,3.5,q=>10-4*q+3*q*q)},
    {name:'Variable Stückkosten AVC',points:sample(.5,3.5,q=>10-2*q+q*q)},
    {name:'Gesamte Stückkosten ATC',points:sample(.5,3.5,q=>8/q+10-2*q+q*q)},
    {name:'Betriebsschwelle: 9',color:'#466273',dash:'5 5',points:[[.5,9],[3.5,9]]},
    {name:'Gewinnschwelle: 14',color:'#b6475b',dash:'5 5',points:[[.5,14],[3.5,14]]}
   ],marks:[{x:1,y:9,label:'AVC-Minimum',dx:9,dy:22},{x:2,y:14,label:'ATC-Minimum',dx:9,dy:-14}]}})
 ]),
 S('scale','6. Kurzfristige Auslastung ist nicht langfristiger Skaleneffekt','a',[
  'Kurzfristig ist mindestens ein Produktionsfaktor festgelegt. Eine zusätzliche Schicht kann die bestehende Fabrik besser auslasten; bei immer mehr Personal an denselben Maschinen kann das Grenzprodukt jedoch sinken. Langfristig können auch Anlagegröße und Technologie angepasst werden.',
  T(['Langfristiger Zusammenhang','Kostenverlauf','Möglicher Mechanismus'],[
   ['Economies of Scale','Langfristige Durchschnittskosten fallen bei größerem Output.','Spezialisierung, gemeinsame Infrastruktur oder effizientere Anlagengröße.'],
   ['Constant Returns to Scale bei passenden Inputpreisen','Durchschnittskosten bleiben ungefähr konstant.','Ein proportional größerer Betrieb kann dieselbe Kombination wiederholen.'],
   ['Diseconomies of Scale','Langfristige Durchschnittskosten steigen.','Koordinationsprobleme, Bürokratie oder schwierige Überwachung.']
  ],'Skalenerträge sind eine technische Input-Output-Eigenschaft; Skaleneffekte auf Kosten hängen zusätzlich von Faktorpreisen und kosteneffizienter Anpassung ab.'),
  F('\\eta_C=\\frac{dC_{LR}}{dq}\\frac q{C_{LR}}=\\frac{MC_{LR}}{AC_{LR}}','Die Kostenelastizität misst, um wie viel Prozent langfristige Gesamtkosten bei einer kleinen einprozentigen Outputänderung steigen. Unter eins fallen die Durchschnittskosten, bei eins bleiben sie lokal konstant, über eins steigen sie.',[['\\eta_C','Langfristige Kostenelastizität bezüglich Output.'],['C_{LR},MC_{LR},AC_{LR}','Langfristige Gesamt-, Grenz- und Durchschnittskosten.'],['q','Positive Outputmenge.']]),
  'Die langfristige Durchschnittskostenkurve ist die untere Hülle geeigneter kurzfristiger Kostenkurven verschiedener Anlagengrößen. Sie berührt diese nicht notwendigerweise jeweils an deren Minimum. Die Minimum Efficient Scale bezeichnet die kleinste Größe, bei der das minimale langfristige Stückkostenniveau erreicht wird.',
  'Eine große Mindestgröße relativ zur Marktnachfrage kann wenige Anbieter begünstigen. Sie beweist allein weder dauerhafte Preissetzungsmacht noch ein bestimmtes Gewinnniveau; technischer Wandel, Markteintritt und Nachfragesubstitute bleiben relevant.'
 ]),
 S('structures','7. Vier Marktformen anhand ihrer Mechanik vergleichen','b e',[
  T(['Form','Anbieter und Produkt','Eintritt und Preissetzung','Langfristiger Mechanismus'],[
   ['Vollkommene Konkurrenz','Viele kleine Anbieter, homogenes Produkt.','Freier Eintritt; einzelner Anbieter nimmt Preis hin.','Eintritt bei ökonomischen Gewinnen drückt sie im Standardmodell auf null.'],
   ['Monopolistische Konkurrenz','Viele Anbieter mit differenzierten Produkten.','Relativ freier Eintritt; einzelne fallende Nachfrage.','Eintritt verringert die Nachfrage je Anbieter; typischerweise ökonomischer Gewinn null bei Preis über MC.'],
   ['Oligopol','Wenige strategisch bedeutende Anbieter; Produkte homogen oder differenziert.','Wichtige Eintrittsbarrieren möglich; Konkurrentenreaktionen zählen.','Ergebnis hängt von Preis-/Mengenwahl, Kapazität, Differenzierung und Spielstruktur ab.'],
   ['Monopol','Ein Anbieter im definierten relevanten Markt ohne enge Substitute.','Wirksame Eintrittsbarrieren; Anbieter wählt eine Kombination auf der Marktnachfrage.','Gewinne können bestehen bleiben, sind aber durch Nachfrage, Kosten und Rahmenbedingungen begrenzt.']
  ],'Es handelt sich um Modelle. Eine reale Branche kann je nach Produktsegment und geografischer Abgrenzung unterschiedlich eingeordnet werden.'),
  'Eine bekannte Marke allein macht ein Unternehmen nicht zum Monopolisten. Vier Unternehmen allein beweisen keine bestimmte oligopolistische Preisregel. Prüfe Substitutionsmöglichkeiten, Eintrittshürden, Kapazitäten und die tatsächliche Abhängigkeit der Entscheidungen.',
  'Wettbewerb kann über Preis, Qualität, Service, Standort, Innovation oder Werbung stattfinden. Hohe aktuelle Marge und dauerhafte Eintrittsbarriere sind verschiedene Befunde.'
 ]),
 S('market-power','8. Fallende Nachfrage: warum Grenzerlös unter Preis liegt','b c d',[
  F('TR(q)=P(q)q,\\qquad MR=P(q)+qP^{\\prime}(q)','Bei einheitlicher Preisgestaltung bringt eine zusätzliche Einheit ihren eigenen Preis. Wenn zu ihrem Verkauf der Preis gesenkt werden muss, sinkt zugleich der Erlös auf den bisherigen Einheiten.',[['TR,MR','Gesamterlös und Grenzerlös.'],['P(q),P^{\\prime}(q)','Inverse Nachfrage und ihre Mengenableitung.'],['q','Absatzmenge.']]),
  F('P=a-bq\\quad\\Longrightarrow\\quad TR=aq-bq^2,\\quad MR=a-2bq','Bei linearer fallender Nachfrage hat die Grenzerlöskurve denselben Preisachsenabschnitt und die doppelte Mengensteigung. Der gewählte Preis wird nach der Mengenentscheidung an der Nachfrage abgelesen.',[['P,q','Einheitlicher Absatzpreis und Menge.'],['a,b','Positive Nachfrageparameter: Preisachsenabschnitt und Betrag der Steigung.'],['TR,MR','Gesamt- und Grenzerlös.']]),
  F('MR=P\\left(1+\\frac1{\\varepsilon_D}\\right),\\qquad \\frac{P-MC}{P}=-\\frac1{\\varepsilon_D}\\quad(MR=MC)','Für eine glatte fallende Nachfrage verbindet die Gewinnbedingung den relativen Preisaufschlag mit der Preiselastizität. Bei positiven Grenzkosten liegt ein inneres Optimum im elastischen Nachfragebereich.',[['\\varepsilon_D','Vorzeichenbehaftete Nachfrageelastizität (dq/dP)(P/q), negativ.'],['P,MC,MR','Preis, Grenzkosten und Grenzerlös.']]),
  'Bei Elastizität −2 beträgt der Lerner-Index 1/2: Grenzkosten sind die Hälfte des Preises. Das ist ein Aufschlag von 50 % des Preises, aber 100 % auf die Grenzkosten. Beide Prozentangaben haben unterschiedliche Nenner.',
  'Die Beziehung setzt die angegebene einzelne Preis-/Mengenentscheidung voraus. Mehrproduktstrategien, dynamische Preise, Kapazitätsrestriktionen, Netzwerkeffekte oder strategische Reaktionen können zusätzliche Überlegungen verlangen.'
 ]),
 S('monopoly-example','9. Marktmacht verändert Preis, Menge und Wohlfahrt','b',[
  X('Ein kontrollierter Vergleich mit konstanten Grenzkosten','Nachfrage P = 50 − 2q, Grenzkosten 10, kurzfristig unvermeidbare Fixkosten 20.',[
   F('50-4q=10\\quad\\Longrightarrow\\quad q_M=10,\\quad P_M=30,\\quad \\pi_M=30\\cdot10-(20+10\\cdot10)=180','Der Mengenwert entsteht aus MR = MC; der Verkaufspreis 30 aus der Nachfrage, nicht aus dem Grenzerlös 10.',[['q_M,P_M,\\pi_M','Monopolmenge, Monopolpreis und ökonomischer Gewinn.']]),
   'Der statische effiziente Mengenvergleich setzt Zahlungsbereitschaft gleich Grenzkosten: 50 − 2q = 10 liefert q = 20. Die zusätzlichen zehn Einheiten zwischen 10 und 20 wären Käufern mehr wert als ihre zusätzlichen Ressourcenkosten.',
   F('DWL=\\frac12(20-10)(30-10)=100','Das Dreieck zwischen Nachfrage und Grenzkosten über den nicht produzierten Einheiten misst hier den Wohlfahrtsverlust durch Mengenbeschränkung.',[['DWL','Deadweight Loss im angegebenen statischen Modell.']]),
   'Die Konsumentenrente bei der Monopolmenge beträgt 100. Der variable Produzentenüberschuss beträgt 200; nach Fixkosten bleibt Gewinn 180. Produzentenüberschuss und ökonomischer Gewinn sind deshalb nicht identisch.'
  ],'Der Vergleich P = MC ist hier eine statische effiziente Menge bei gegebenen Fixkosten, keine vollständig modellierte langfristige Wettbewerbseintrittslösung.'),
  G({id:'market-power-welfare',title:'Erst MR = MC, dann den Preis an der Nachfrage ablesen',
   caption:'Eigenes lineares Beispiel: P = 50 − 2q, MR = 50 − 4q und MC = 10. Die schattierte Fläche ist der verlorene Überschuss zwischen q = 10 und q = 20.',
   reading:'Das Maximum des Monopolgewinns liegt bei q = 10 und P = 30. MR ist dort 10. Den Preis am MR-Schnittpunkt abzulesen würde Preis und Grenzerlös verwechseln.',
   plot:{x:[0,25],y:[0,55],xLabel:'Menge q',yLabel:'Preis / Grenzerlös / Grenzkosten',series:[
    {name:'Nachfrage P',points:[[0,50],[25,0]]},{name:'Grenzerlös MR',points:[[0,50],[12.5,0]]},{name:'Grenzkosten MC',points:[[0,10],[25,10]]}
   ],areas:[{points:[[10,10],[10,30],[20,10]],color:'#ba6824',opacity:.16}],marks:[{x:10,y:30,label:'Monopolpreis 30',guides:true},{x:20,y:10,label:'Effiziente Menge 20',dx:-10,dy:25,anchor:'end'}]}})
 ]),
 S('monopolistic-competition','10. Differenzierung schützt den Preis, Eintritt begrenzt den Gewinn','c',[
  'Ein monopolistischer Konkurrent hat eine eigene fallende Nachfrage, weil Kunden sein Produkt nicht als vollkommen austauschbar ansehen. Kurzfristig maximiert er wie ein einzelner Preissetzer bei passendem MR = MC und kann Gewinn oder Verlust erzielen. Neue ähnliche Angebote verringern bei sonst gleichen Bedingungen die Nachfrage nach seinem Produkt.',
  F('MR(q^*)=MC(q^*),\\qquad P(q^*)=ATC(q^*)\\quad\\text{im Standard-Langfristgleichgewicht}','Freier Eintritt und Austritt treiben den ökonomischen Gewinn im Standardmodell auf null. Das beseitigt die Differenzierung nicht: Preis kann weiterhin über Grenzkosten liegen.',[['q^*','Langfristige gewinnmaximierende Menge eines einzelnen Unternehmens.'],['MR,MC','Grenzerlös und Grenzkosten.'],['P,ATC','Preis auf der individuellen Nachfrage und gesamte Durchschnittskosten.']]),
  X('Nullgewinn trotz Preis über Grenzkosten','Für einen Anbieter seien TC = 100 + 10q + q² und die durch Eintritt angepasste individuelle Nachfrage P = 50 − 3q.',[
   'MR = 50 − 6q und MC = 10 + 2q. Gleichsetzen ergibt q = 5. Die Nachfrage liefert Preis 35; ATC = 100/5 + 10 + 5 = 35. Gewinn ist null.',
   'MC beträgt bei q = 5 nur 20. Der Preisaufschlag 15 finanziert die übrigen Kosten, statt einen positiven ökonomischen Gesamtgewinn zu garantieren.',
   'Das ATC-Minimum liegt bei q = 10 und Stückkosten 30. Die gewählte Menge 5 ist kleiner: Das ist die im Modell als Excess Capacity bezeichnete Unterauslastung relativ zur kostenminimalen Anlagengröße, nicht automatisch ungenutzte Maschinenzeit in einer realen Fabrik.',
   'Bei q = 5 haben Nachfrage und ATC beide Steigung −3. Sie berühren sich, während MR und MC bei 20 schneiden. So passen Nullgewinn und Gewinnmaximierung gleichzeitig zusammen.'
  ],'Wer „langfristig kein Gewinn“ mit „Preis gleich Grenzkosten“ gleichsetzt, verwechselt monopolistische mit vollkommener Konkurrenz.'),
  G({id:'differentiation-entry',title:'Langfristiger Nullgewinn bei Differenzierung',
   caption:'Eigenes konsistentes Tangentialbeispiel: Nachfrage berührt ATC bei q = 5 und P = 35. MR schneidet MC bei derselben Menge, aber dem niedrigeren Wert 20.',
   reading:'Das ATC-Minimum liegt rechts davon bei q = 10. Eintritt hat den ökonomischen Gewinn beseitigt, obwohl Preis über Grenzkosten liegt und die Menge unter der kostenminimalen Größe bleibt.',
   plot:{x:[2,12],y:[0,65],xLabel:'Menge q',yLabel:'Preis / Kosten je Einheit',series:[
    {name:'Individuelle Nachfrage',points:sample(2,12,q=>50-3*q)},
    {name:'Grenzerlös MR',points:sample(2,25/3,q=>50-6*q)},
    {name:'Grenzkosten MC',points:sample(2,12,q=>10+2*q)},
    {name:'Durchschnittskosten ATC',points:sample(2,12,q=>100/q+10+q)}
   ],marks:[{x:5,y:35,label:'P = ATC = 35',dx:9,dy:-20},{x:10,y:30,label:'ATC-Minimum',dx:-8,dy:25,anchor:'end'}]}}),
  'Werbung, Service und Produktentwicklung können Nachfrage und Zahlungsbereitschaft verändern, erhöhen aber zugleich Kosten. Der richtige Vergleich ist der zusätzliche erwartete ökonomische Überschuss, nicht Umsatzwachstum allein. Differenzierung kann Kunden Auswahl bieten; ein reiner Kostenvergleich erfasst diesen Nutzen nicht vollständig.'
 ]),
 S('cournot','11. Oligopol: die beste Entscheidung hängt vom Konkurrenten ab','d',[
  F('P=a-b(q_1+q_2),\\qquad \\pi_1=[a-b(q_1+q_2)-c]q_1','Im symmetrischen Cournot-Modell wählen zwei Firmen ihre Mengen gleichzeitig. Jede behandelt bei der eigenen Entscheidung die Menge der anderen als gegeben. Grenzkosten sind konstant, Fixkosten hier null.',[['P,q_1,q_2','Gemeinsamer Marktpreis und Mengen der Firmen 1 und 2.'],['a,b,c','Positive Nachfrageparameter und gemeinsame konstante Grenzkosten, a > c.'],['\\pi_1','Gewinn von Firma 1.']]),
  F('\\frac{\\partial\\pi_1}{\\partial q_1}=a-c-2bq_1-bq_2=0\\quad\\Longrightarrow\\quad q_1=\\frac{a-c-bq_2}{2b}','Die Reaktionsfunktion beschreibt die beste innere Menge für jede vorgegebene Konkurrenzmenge. Bei zu großer Konkurrenzmenge wird die Randlösung q₁ = 0 relevant.',[['\\pi_1,q_1,q_2','Gewinn und beide Firmenmengen.'],['a,b,c','Nachfrageparameter und konstante Grenzkosten.'],['\\partial/\\partial q_1','Partielle Ableitung nach der eigenen Menge bei festgehaltener Konkurrenzmenge.']]),
  F('q_1^*=q_2^*=\\frac{a-c}{3b},\\quad Q^*=\\frac{2(a-c)}{3b},\\quad P^*=\\frac{a+2c}{3}','Im symmetrischen Nash-Gleichgewicht ist jede Menge die beste Antwort auf die andere. Symmetrie wird in die Reaktionsfunktion eingesetzt, nicht als Preisabsprache angenommen.',[['q_1^*,q_2^*,Q^*','Beide Gleichgewichtsmengen und Gesamtmenge.'],['P^*','Gleichgewichtspreis.'],['a,b,c','Nachfrageparameter und Grenzkosten.']]),
  X('Zwei unabhängige Mengenentscheidungen','Setze a = 100, b = 1 und c = 20.',[
   'Jede Firma produziert 80/3 ≈ 26,667. Gesamtmenge 160/3 ≈ 53,333. Der Preis beträgt 140/3 ≈ 46,667.',
   F('\\pi_i=\\left(\\frac{140}3-20\\right)\\frac{80}3=\\frac{6400}9\\approx711{,}111','Preis minus Grenzkosten mal Menge ergibt den Gewinn, weil hier keine Fixkosten angesetzt sind.',[['\\pi_i','Gewinn jeder der beiden symmetrischen Firmen.']]),
   'Würde eine Firma bei unveränderter Konkurrenzmenge allein auf 40 Einheiten ausweiten, fiele der Preis auf rund 33,333. Ihr Gewinn wäre nur rund 533,333; mehr Absatz wäre keine Verbesserung.'
  ],'Nash-Gleichgewicht bedeutet, dass keine Firma durch eine einseitige Änderung bei festgehaltener Entscheidung der anderen besser wird. Es bedeutet weder größtmöglichen gemeinsamen Gewinn noch gesellschaftliche Effizienz.'),
  G({id:'cournot-responses',title:'Zwei beste Antworten treffen sich im Cournot-Gleichgewicht',
   caption:'Reaktionsfunktionen für P = 100 − q₁ − q₂ und MC = 20. Für Firma 1 wird ihre Reaktionsgleichung nach der senkrechten Achse q₂ umgestellt; die ökonomische Wahlvariable bleibt q₁.',
   reading:'Am Schnittpunkt q₁ = q₂ = 26,667 sind beide Firmen gleichzeitig mit ihrer Menge zufrieden, sofern die jeweils andere Menge unverändert bleibt.',
   plot:{x:[0,80],y:[0,80],square:true,xLabel:'Menge Firma 1: q₁',yLabel:'Menge Firma 2: q₂',series:[
    {name:'Beste Antwort Firma 1',points:[[0,80],[40,0]]},{name:'Beste Antwort Firma 2',points:[[0,40],[80,0]]}
   ],marks:[{x:80/3,y:80/3,label:'Nash-Gleichgewicht',dx:12,dy:-15,guides:true}]}})
 ]),
 S('strategic-choices','12. Preiswahl, Führerschaft und Kooperationsanreize verändern das Ergebnis','d',[
  T(['Modell im gleichen Markt P = 100 − Q, MC = 20','Gesamtmenge','Preis','Warum anders?'],[
   ['Gemeinsame Gewinnmaximierung als Benchmark','40','60','Gesamterlös wird wie bei einem Monopol optimiert.'],
   ['Cournot: gleichzeitige Mengenwahl','160/3 ≈ 53,333','140/3 ≈ 46,667','Jede Firma berücksichtigt ihren eigenen Preiseffekt.'],
   ['Stackelberg: Mengenführer und nachfolgende Reaktion','60','40','Führer setzt 40, reagierender Konkurrent 20.'],
   ['Bertrand: gleiche homogene Produkte und Kosten, freie ausreichende Kapazität','80','20','Preisunterbietung führt im Standardmodell bis zu Grenzkosten.']
  ],'Identische Nachfrage und Grenzkosten führen unter verschiedenen Spielregeln zu verschiedenen Preisen. Ein Oligopol hat keine universelle Preisformel.'),
  F('q_2=\\frac{80-q_1}{2}\\quad\\Longrightarrow\\quad \\pi_1=\\left(40-\\frac{q_1}{2}\\right)q_1,\\qquad q_1^*=40,\\quad q_2^*=20','Der Stackelberg-Führer berücksichtigt die nachfolgende Reaktionsfunktion bei seiner Entscheidung. Seine Gewinnableitung ist 40 − q₁; bei q₁ = 40 ist sie null.',[['q_1,q_2','Menge des Führers und des folgenden Unternehmens.'],['\\pi_1','Führergewinn bei den angegebenen Nachfrage- und Kostenwerten.'],['q_1^*,q_2^*','Gleichgewichtsmengen im sequenziellen Modell.']]),
  'Der Führer verdient im Beispiel 800, der Folger 400. Die Führerstellung hilft nur, wenn die erste Entscheidung tatsächlich bindend und die Reaktion passend modelliert ist. Ein bloß früher angekündigter Preis ohne Glaubwürdigkeit ist nicht dieselbe Spielstruktur.',
  T(['Firma A / Firma B','B hält höheren Preis','B senkt Preis'],[
   ['A hält höheren Preis','10 / 10','4 / 14'],
   ['A senkt Preis','14 / 4','6 / 6']
  ],'Separates konstruiertes Einperiodenspiel; jede Zelle zeigt Gewinn A / Gewinn B. Es beschreibt Anreize, keine Handlungsempfehlung.'),
  'Für jede Firma ist Preissenken im gezeigten Spiel die dominante Strategie: 14 statt 10, wenn die andere hält, und 6 statt 4, wenn die andere senkt. Das Nash-Ergebnis 6/6 ist für beide schlechter als 10/10. Wiederholung, Transparenz und glaubwürdige Reaktionen verändern Anreize, garantieren aber keine Kooperation.',
  'Beim geknickten Nachfragemodell reagieren Konkurrenten annahmegemäß eher auf Preissenkungen als auf Erhöhungen. Daraus kann eine Lücke im Grenzerlös und Preisstarrheit trotz bestimmter Kostenänderungen entstehen. Das Modell erklärt nicht automatisch, wie der Ausgangspreis überhaupt entstanden ist.',
  'Differenzierte Produkte, knappe Kapazität, unterschiedliche Kosten und Suchkosten lockern den extremen Bertrand-Preiswettbewerb. Preisführerschaft, Mengenwettbewerb und nichtpreisliche Strategien müssen deshalb anhand des konkreten Markts beurteilt werden.'
 ]),
 S('concentration','13. Konzentration messen, ohne Marktstruktur auf eine Zahl zu reduzieren','e',[
  F('CR_k=\\sum_{i=1}^k s_{(i)},\\qquad HHI=\\sum_{i=1}^N s_i^2','Die Konzentrationsrate summiert die Anteile der k größten Anbieter. Der Herfindahl-Hirschman-Index verwendet alle Anbieter und gewichtet große Anteile durch Quadrieren stärker.',[['CR_k','Konzentrationsrate der k größten Unternehmen.'],['s_{(i)}','Absteigend geordneter Marktanteil des i-größten Anbieters.'],['s_i','Marktanteil des Anbieters i; im Zahlenbeispiel Prozentzahlen zwischen 0 und 100.'],['HHI','Herfindahl-Hirschman-Index, bei Prozentzahlen höchstens 10.000.'],['N,k,i','Anbieterzahl, Zahl der größten berücksichtigten Anbieter und Index.']]),
  X('Gleiche CR4, trotzdem unterschiedliche Konzentration','Markt A hat Anteile 40 %, 30 %, 20 %, 10 %. Markt B hat vier Anbieter mit je 25 %.',[
   'In beiden Märkten ist CR4 = 100 %. Die Vier-Firmen-Rate unterscheidet ihre Größenverteilung nicht.',
   F('HHI_A=40^2+30^2+20^2+10^2=3000,\\qquad HHI_B=4\\cdot25^2=2500','Markt A ist nach HHI stärker konzentriert. Bei Dezimalanteilen wären die Werte 0,30 und 0,25; die Skalen dürfen nicht vermischt werden.',[['HHI_A,HHI_B','Konzentrationsindizes der beiden Märkte.']]),
   F('\\Delta HHI=(s_a+s_b)^2-s_a^2-s_b^2=2s_as_b','Bei unveränderten übrigen Anteilen lässt sich der rechnerische Konzentrationsanstieg einer Zusammenlegung direkt bestimmen.',[['\\Delta HHI','Rechnerischer Anstieg des Index.'],['s_a,s_b','Anteile der beiden zusammengelegten Anbieter in derselben Skala.']]),
   'Für Anteile 15 und 10 ergibt sich ein Anstieg um 300 Punkte. Das ist eine mechanische Anteilsrechnung, keine vollständige Prognose der künftigen Preise oder regulatorischen Entscheidung.'
  ],'Ohne Definition des relevanten Produkt- und geografischen Markts sind die Anteile selbst nicht eindeutig.'),
  'Konzentrationsmaße erfassen weder alle Eintrittsbarrieren noch potenzielle Konkurrenz, Importdruck, Käufermacht, Innovationswettbewerb oder Kapazitätsreserven. Hohe Konzentration kann auf Marktmacht, aber auch auf Kosten- oder Produktvorteile zurückgehen. Rechtliche Schwellenwerte sind vom jeweiligen Regelwerk abhängig und werden hier nicht als zeitlose ökonomische Naturgrenzen verwendet.'
 ]),
 S('investment','14. Aus Marktstruktur eine überprüfbare Margenannahme ableiten','a b c d e',[
  T(['Analyseschritt','Was eine gute Antwort enthält'],[
   ['Relevanten Markt abgrenzen','Welche Angebote und Regionen sind aus Kundensicht tatsächlich Substitute?'],
   ['Kosten und Auslastung verstehen','Grenzkosten, vermeidbare Kosten, Kapitalbedarf und langfristige effiziente Größe unterscheiden.'],
   ['Preissetzung erklären','Differenzierung, Elastizität und Reaktion der Wettbewerber begründen.'],
   ['Eintritt und Dauerhaftigkeit prüfen','Welche Ressource oder welcher Mechanismus schützt den Überschuss, und wie könnte er erodieren?'],
   ['Zahlen mit Szenarien verbinden','Marge unter Preisrückgang, Kostenanstieg, Eintritt oder Kapazitätsausbau vergleichen.'],
   ['Wert statt nur Gewinn schätzen','Reinvestitionsbedarf und Kapitalkosten berücksichtigen; hohe Marge allein garantiert keinen hohen Unternehmenswert.']
  ],'Die Modelle liefern strukturierte Gegenfragen und bedingte Rechnungen. Sie ersetzen keine branchenspezifische Untersuchung.'),
  'Ein hoher aktueller Gewinn kann neuen Wettbewerb anziehen. Für eine ewige Wachstumsbewertung ist deshalb entscheidend, ob die zugrunde gelegte Rendite auf neues Kapital trotz Wettbewerb plausibel bleibt. Kostenführerschaft, hohe Nachfrage und echte Eintrittsbarrieren wirken unterschiedlich und sollten in der Bewertung nicht zu einer einzigen optimistischen Wachstumszahl verschmelzen.'
 ])
],related:[{unit:'income-statement',section:'revenue',label:'Berichteten Umsatz von wirtschaftlicher Ertragskraft unterscheiden'},{unit:'tvm',section:'growing-cashflows',label:'Dauerhafte Wachstumsannahmen und ihren Barwert prüfen'},{unit:'ratios',section:'dupont',label:'Marge, Umschlag und Eigenkapitalrendite gemeinsam analysieren'}],
 sources:[
 {title:'CFA Institute: offizieller Lernzielkatalog Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=5'},
 {title:'CFA Institute: The Firm and Market Structures',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/firm-market-structures'},
 {title:'OpenStax: Output Decisions in Perfect Competition',url:'https://openstax.org/books/principles-microeconomics-3e/pages/8-2-how-perfectly-competitive-firms-make-output-decisions'},
 {title:'OpenStax: Monopoly Output and Price',url:'https://openstax.org/books/principles-microeconomics-3e/pages/9-2-how-a-profit-maximizing-monopoly-chooses-output-and-price'},
 {title:'OpenStax: Monopolistic Competition',url:'https://openstax.org/books/principles-microeconomics-3e/pages/10-1-monopolistic-competition'},
 {title:'OpenStax: Oligopoly',url:'https://openstax.org/books/principles-microeconomics-3e/pages/10-2-oligopoly'},
 {title:'MIT OpenCourseWare: Cournot and Stackelberg Quantity Competition',url:'https://ocw.mit.edu/courses/6-254-game-theory-with-engineering-applications-spring-2010/688240e73afefbf4a6293fef0e529398_MIT6_254S10_lec12.pdf'}
 ],review:{status:'draft',date:'2026-09-23',note:'Eigene Kosten-, Nachfrage-, Tangential- und Spielbeispiele; Kurz-/Langfrist, Kostenbegriffe und Konkurrenzmodelle ausdrücklich getrennt.'}};
