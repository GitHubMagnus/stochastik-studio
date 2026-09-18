const {F,T,X,S,G}=require('../author.cjs');
const sd=(w,rho)=>Math.sqrt(Math.max(0,w*w*.2**2+(1-w)**2*.1**2+2*w*(1-w)*rho*.2*.1));
const wmin=(.01-.004)/(.04+.01-2*.004),sigmin=sd(wmin,.2),mumin=.06+.04*wmin;
module.exports={id:'portfolio-math',intro:[
 'Ein Portfolio ist wirtschaftlich mehr als eine Liste von Anlagen. Seine Rendite ergibt sich aus den Anfangsgewichten; sein Risiko hängt zusätzlich davon ab, wie die Anlagen gemeinsam reagieren. Eine riskante Einzelanlage kann deshalb in einer passenden Mischung das Gesamtrisiko senken.',
 'Wir leiten zunächst die Zweianlagenformel aus den Renditeabweichungen her. Daraus folgen Diversifikation, das Minimumvarianzportfolio und die effiziente Grenze. Erst anschließend kommt die persönliche Risikoaversion hinzu: Das mathematisch risikoärmste Portfolio ist nicht automatisch die beste Wahl für jeden Anleger.'
],sections:[
 S('weights','1. Gewichte und Rendite müssen zum selben Zeitraum gehören','a',[
  F('w_i=\\frac{V_{i,0}}{V_{P,0}},\\qquad \\sum_{i=1}^n w_i=1,\\qquad R_P=\\sum_{i=1}^n w_iR_i,\\qquad E[R_P]=\\sum_{i=1}^n w_iE[R_i]','Die einfache Portfoliorendite ist die mit Anfangsgewichten gemittelte einfache Anlagerendite. Die Erwartung ist linear, unabhängig davon, ob die Anlagen unabhängig sind.',[['w_i','Anfangsgewicht der Anlage i; negative Gewichte bedeuten Shortpositionen.'],['V_{i,0},V_{P,0}','Anfangswert der Position bzw. Nettovermögen des Portfolios.'],['R_i,R_P','Einfache Rendite der Anlage bzw. des Portfolios über dieselbe Periode.'],['E[\\cdot]','Erwartungswert.'],['n,i','Anzahl der Positionen und Index.']]),
  X('Gewichte driften durch unterschiedliche Renditen','60 werden in A und 40 in B investiert. A erzielt 10 %, B −5 %. Es gibt keine weiteren Zahlungen.',[
   'Die Endwerte sind 66 und 38. Zusammen werden aus 100 nun 104: Portfoliorendite 4 %.',
   F('R_P=0{,}60\\cdot0{,}10+0{,}40\\cdot(-0{,}05)=4\\%','Die Renditen werden mit Anfangsgewichten gewichtet, weil sie auf den anfänglichen jeweiligen Kapitalbeträgen verdient werden.',[['R_P','Portfoliorendite der Periode.']]),
   'Am Ende beträgt das Gewicht von A 66/104 ≈ 63,46 %. Dieses Endgewicht rückwirkend in die Renditeformel einzusetzen würde eine andere Rechnung erzeugen.',
   'Wer nächste Periode wieder 60/40 halten will, muss umschichten. Rebalancing kann Kosten und Steuern auslösen und verändert die künftige Strategie.'
  ],'Negative Gewichte, Kreditfinanzierung und Rebalancing sind ausdrückliche Modellentscheidungen, keine unsichtbaren Details.')
 ]),
 S('two-assets','2. Die Zweianlagenvarianz herleiten','a',[
  F('R_P-\\mu_P=w_A(R_A-\\mu_A)+w_B(R_B-\\mu_B)','Die Abweichung des Portfolios vom eigenen Erwartungswert ist die gewichtete Summe der einzelnen Abweichungen.',[['R_P,R_A,R_B','Zufällige Periodenrenditen von Portfolio und Anlagen.'],['\\mu_P,\\mu_A,\\mu_B','Ihre jeweiligen Erwartungswerte.'],['w_A,w_B','Feste Anfangsgewichte mit Summe 1.']]),
  F('\\sigma_P^2=w_A^2\\sigma_A^2+w_B^2\\sigma_B^2+2w_Aw_B\\sigma_{AB}','Quadriere die Summe: zwei Quadratterme und zweimal das Kreuzprodukt. Deren Erwartungswerte sind Varianzen und Kovarianz.',[['\\sigma_P^2,\\sigma_A^2,\\sigma_B^2','Varianzen der Portfoliorendite und der beiden Anlagen.'],['\\sigma_{AB}','Kovarianz zwischen A und B für dieselbe Periode.'],['w_A,w_B','Anfangsgewichte.']]),
  F('\\sigma_{AB}=\\rho_{AB}\\sigma_A\\sigma_B,\\qquad \\sigma_P=\\sqrt{w_A^2\\sigma_A^2+w_B^2\\sigma_B^2+2w_Aw_B\\rho_{AB}\\sigma_A\\sigma_B}','Korrelation allein ist einheitslos. Erst die Multiplikation mit beiden Standardabweichungen liefert die Kovarianz für die Risikorechnung.',[['\\sigma_{AB}','Kovarianz.'],['\\rho_{AB}','Korrelation zwischen −1 und +1.'],['\\sigma_A,\\sigma_B,\\sigma_P','Standardabweichungen pro einheitlicher Periode.'],['w_A,w_B','Portfoliogewichte.']]),
  X('Eine Beimischung wirkt über ihr gemeinsames Verhalten','A: erwartete Rendite 10 %, Standardabweichung 20 %. B: erwartete Rendite 6 %, Standardabweichung 10 %. Die Korrelation beträgt 0,2. Es werden je 50 % investiert.',[
   F('\\mu_P=0{,}5\\cdot0{,}10+0{,}5\\cdot0{,}06=8\\%','Die erwartete Rendite liegt auf dem gewichteten Durchschnitt; hierfür wird die Korrelation nicht benötigt.',[['\\mu_P','Erwartete Portfoliorendite.']]),
   F('\\sigma_P^2=0{,}25\\cdot0{,}04+0{,}25\\cdot0{,}01+2\\cdot0{,}5\\cdot0{,}5\\cdot0{,}2\\cdot0{,}2\\cdot0{,}1=0{,}0145','Die beiden Einzelbeiträge sind 0,0100 und 0,0025; das Kreuzglied ist 0,0020.',[['\\sigma_P^2','Portfoliovarianz bei Renditen als Dezimalzahlen.']]),
   'Die Wurzel beträgt rund 0,120416, also 12,042 %. Der bloße gewichtete Durchschnitt der Volatilitäten wäre 15 % und überschätzt hier das Ergebnis.',
   'Die Streuungsreduktion entsteht nicht durch eine niedrigere erwartete Rendite als 8 %, sondern durch teilweise gegensätzliche Abweichungen um die jeweiligen Erwartungswerte.'
  ],'Die Gewichte werden in den Varianztermen quadriert. Die Standardabweichung wird erst nach Addition aller Terme gezogen.')
 ]),
 S('correlation','3. Korrelation isoliert verändern','a b',[
  T(['Korrelation','Varianz der 50/50-Mischung','Standardabweichung','Erwartete Rendite'],[
   ['+1','0,0225','15,000 %','8 %'],['+0,2','0,0145','12,042 %','8 %'],['0','0,0125','11,180 %','8 %'],['−1','0,0025','5,000 %','8 %']
  ],'Einzelrenditen, Einzelvolatilitäten und Gewichte bleiben unverändert. Nur die gemeinsame Bewegung verändert sich.'),
  'Schon Korrelation kleiner als +1 ermöglicht bei positiven Gewichten eine Verringerung gegenüber dem gewichteten Volatilitätsmittel. Die Portfoliovolatilität muss dadurch aber nicht bereits kleiner als die niedrigere Einzelvolatilität sein.',
  F('\\sigma_P=|w_A\\sigma_A-w_B\\sigma_B|\\quad(\\rho_{AB}=-1),\\qquad w_A=\\frac{\\sigma_B}{\\sigma_A+\\sigma_B}','Bei perfekter negativer Korrelation neutralisiert das angegebene Gewicht die zufälligen Abweichungen exakt. Gleiche Gewichte reichen bei unterschiedlichen Volatilitäten nicht aus.',[['\\sigma_P,\\sigma_A,\\sigma_B','Portfolio- und Einzelstandardabweichungen.'],['w_A,w_B','Gewichte mit w_B = 1 − w_A.'],['\\rho_{AB}','Korrelation.']]),
  X('Warum 50/50 nicht das risikofreie Verhältnis ist','Im Grenzfall perfekter negativer Korrelation schwankt A mit 20 %, B mit 10 %.',[
   '50/50 erzeugt verbleibende Schwankung |0,5 × 20 % − 0,5 × 10 %| = 5 %. Die Ausschläge von A sind doppelt so groß.',
   'Ein Drittel A und zwei Drittel B erzeugen auf beiden Seiten 6,667 Prozentpunkte gewichtete Schwankung; diese heben sich im Modell exakt auf.',
   'Die erwartete Rendite dieser Mischung beträgt 7,333 %. Existiert im selben reibungslosen Markt eine frei handelbare sichere Anlage mit anderer Rendite, wären diese Eingaben nicht gemeinsam arbitragefrei. Ein mathematisch konstruierter Korrelationsgrenzfall ist nicht automatisch eine realistische Kapitalmarktkonstellation.'
  ],'In realen Daten sind perfekte Beziehungen selten stabil. Das Ergebnis null gilt nur unter den exakten Modellvoraussetzungen.')
 ]),
 S('diversification-figure','4. Die Wirkung der Gewichtung sichtbar machen','a b',[
  G({id:'correlation-risk',title:'Gleiche Anlagen, andere Korrelation: andere Risikokurve',
   caption:'A schwankt mit 20 %, B mit 10 %. Auf der horizontalen Achse steigt der Anteil von A von 0 auf 100 %; Shortpositionen sind ausgeschlossen.',
   reading:'An beiden Endpunkten zählt nur eine Anlage; deshalb treffen sich die drei Kurven dort. Dazwischen verringert niedrigere Korrelation das Risiko. Die Kurve bei −1 erreicht bei einem Drittel A null, nicht bei 50/50.',
   plot:{x:[0,100],y:[0,21],xTicks:[0,25,50,75,100],xLabel:'Anfangsgewicht von A (%)',yLabel:'Portfoliostandardabweichung (%)',series:[
    {name:'Korrelation +1',points:Array.from({length:121},(_,i)=>[i/120*100,sd(i/120,1)*100])},
    {name:'Korrelation +0,2',points:Array.from({length:121},(_,i)=>[i/120*100,sd(i/120,.2)*100])},
    {name:'Korrelation −1',points:Array.from({length:121},(_,i)=>[i/120*100,sd(i/120,-1)*100]),dash:'8 5'}
   ]}})
 ]),
 S('minimum-variance','5. Das Minimumvarianzgewicht algebraisch finden','b',[
  F('v(w)=w^2\\sigma_A^2+(1-w)^2\\sigma_B^2+2w(1-w)\\sigma_{AB}','Setze das Gewicht von B als 1 − w ein. Damit hängt das Risiko nur noch von einem freien Gewicht ab.',[['v(w)','Portfoliovarianz als Funktion des Gewichts w.'],['w','Gewicht von A.'],['\\sigma_A^2,\\sigma_B^2','Einzelvarianzen.'],['\\sigma_{AB}','Kovarianz.']]),
  F('v^{\\prime}(w)=2w(\\sigma_A^2+\\sigma_B^2-2\\sigma_{AB})+2(\\sigma_{AB}-\\sigma_B^2)','Ausmultiplizieren und Ableiten zeigt, um wie viel sich die Varianz bei einer kleinen Erhöhung von w verändert.',[['v^{\\prime}(w)','Ableitung der Varianz nach w.'],['w','Gewicht von A.'],['\\sigma_A^2,\\sigma_B^2,\\sigma_{AB}','Varianzen und Kovarianz.']]),
  F('w_A^{GMV}=\\frac{\\sigma_B^2-\\sigma_{AB}}{\\sigma_A^2+\\sigma_B^2-2\\sigma_{AB}}','Setze die Ableitung null. Bei positivem Nenner ist die zweite Ableitung positiv, sodass die stationäre Stelle das globale Varianzminimum auf der unbeschränkten Gewichtsgeraden ist.',[['w_A^{GMV}','Gewicht von A im Global Minimum Variance Portfolio.'],['\\sigma_A^2,\\sigma_B^2,\\sigma_{AB}','Einzelvarianzen und Kovarianz.']]),
  'Der Nenner ist die Varianz der Renditedifferenz A − B und daher nicht negativ. Bei null ist die Differenz nicht zufällig; die Kurzform kann unbestimmt sein und muss über die ursprüngliche Varianzfunktion beurteilt werden. Bei einem Verbot von Shortpositionen muss w zwischen null und eins liegen; ein außerhalb liegendes unbeschränktes Minimum wird für diese Zweianlagenaufgabe auf den passenden Rand begrenzt.',
  X('Das risikoärmste Portfolio enthält die volatilere Anlage','A: 20 % Volatilität, B: 10 %, Korrelation 0,2; erwartete Renditen 10 % und 6 %.',[
   F('w_A^{GMV}=\\frac{0{,}01-0{,}004}{0{,}04+0{,}01-0{,}008}=\\frac17\\approx14{,}286\\%','Die Kovarianz beträgt 0,2 × 0,2 × 0,1 = 0,004. Der Rest, 6/7, wird in B gehalten.',[['w_A^{GMV}','Minimumvarianzgewicht von A.']]),
   F('\\sigma_{GMV}^2\\approx0{,}009142857,\\qquad \\sigma_{GMV}\\approx9{,}562\\%,\\qquad \\mu_{GMV}\\approx6{,}571\\%','Einsetzen der Gewichte in Varianz- und Renditeformel ergibt weniger Risiko als die 10 % von B allein.',[['\\sigma_{GMV}^2,\\sigma_{GMV}','Varianz und Standardabweichung der Minimumvarianzmischung.'],['\\mu_{GMV}','Erwartete Rendite dieser Mischung.']]),
   'Eine kleine Menge der volatileren Anlage senkt das Gesamtrisiko, weil ihr Beitrag teilweise anders verläuft. Die Renditeerwartungen bestimmen nicht dieses Gewicht, sondern erst die erwartete Rendite des gefundenen Minimums.'
  ],'Die Aussage „die risikoärmste Anlage ergibt das risikoärmste Portfolio“ ist im Allgemeinen falsch.')
 ]),
 S('efficient-frontier','6. Minimumvarianz ist nicht dasselbe wie effizient','b',[
  'Im Mittelwert-Varianz-Modell ist ein Portfolio dominiert, wenn ein anderes mindestens so viel erwartete Rendite bei höchstens so viel Risiko bietet und mindestens eine Eigenschaft strikt besser ist. Die effiziente Grenze enthält die nicht dominierten Kombinationen. Für ein gegebenes Renditeziel sucht man zunächst die niedrigstmögliche Varianz; nur der obere Teil dieser Minimumvarianzgrenze ist effizient.',
  G({id:'two-asset-frontier',title:'Die untere Kurve ist möglich, aber dominiert',
   caption:'Die gleichen zwei Anlagen mit Korrelation 0,2; ausschließlich Gewichte zwischen null und eins. A erwartet 10 %, B 6 % Rendite.',
   reading:'Die horizontale Achse zeigt Risiko, nicht das Gewicht. Links liegt das globale Varianzminimum. Der untere Ast führt zu B: Hier existiert bei gleichem Risiko eine Mischung auf dem oberen Ast mit höherer erwarteter Rendite. Die Grafik zeigt nur dieses Zweianlagenuniversum, keine vollständige Marktgrenze.',
   plot:{x:[8,21],y:[5.5,10.5],xLabel:'Standardabweichung (%)',yLabel:'Erwartete Rendite (%)',series:[
    {name:'Dominierter unterer Ast',points:Array.from({length:51},(_,i)=>{const w=wmin*i/50;return[sd(w,.2)*100,(.06+.04*w)*100];}),dash:'8 5'},
    {name:'Effizienter oberer Ast',points:Array.from({length:101},(_,i)=>{const w=wmin+(1-wmin)*i/100;return[sd(w,.2)*100,(.06+.04*w)*100];})}
   ],marks:[{x:sigmin*100,y:mumin*100,label:'GMV',dx:12,dy:0},{x:10,y:6,label:'B',dx:12,dy:10},{x:20,y:10,label:'A',dx:-12,anchor:'end'}]}}),
  X('Gleiches Risiko, mehr erwartete Rendite','B allein hat 10 % Standardabweichung und 6 % erwartete Rendite. Suche eine andere Mischung mit ebenfalls 10 % Risiko.',[
   'Die Varianzfunktion vereinfacht sich zu 0,042w² − 0,012w + 0,01. Gleichsetzen mit 0,01 liefert w = 0 oder w = 2/7.',
   'Die Mischung 2/7 A und 5/7 B hat erwartete Rendite 6 % + (2/7) × 4 % ≈ 7,143 % bei demselben Risiko von 10 %.',
   'Unter ausschließlicher Beurteilung nach Erwartung und Varianz dominiert diese Mischung B. Bei unterschiedlichen Liquiditäts-, Steuer- oder Verlustprofilen können zusätzliche Kriterien die Entscheidung ändern.'
  ],'Effizienz gilt immer relativ zum betrachteten Anlageuniversum, den Nebenbedingungen und den verwendeten Risikomaßen.')
 ]),
 S('many-assets','7. Viele Anlagen, Portfoliokovarianz und Risikogrenzen','a b',[
  F('\\sigma_P^2=\\sum_{i=1}^n\\sum_{j=1}^n w_iw_j\\sigma_{ij}=\\mathbf w^{\\mathsf T}\\boldsymbol\\Sigma\\mathbf w','Die Diagonale der Kovarianzmatrix enthält Einzelvarianzen, die übrigen Felder paarweise Kovarianzen. Die doppelte Summe zählt jedes unterschiedliche Paar zweimal.',[['\\sigma_P^2','Portfoliovarianz.'],['w_i,w_j,\\mathbf w','Einzelgewichte und Gewichtsvektor.'],['\\sigma_{ij},\\boldsymbol\\Sigma','Kovarianz zwischen i und j bzw. gesamte Kovarianzmatrix.'],['n,i,j','Anlagenzahl und Indizes.'],['\\mathsf T','Transposition eines Vektors.']]),
  F('\\operatorname{Cov}(R_P,R_Q)=\\sum_i\\sum_j w_iv_j\\sigma_{ij},\\qquad \\rho_{PQ}=\\frac{\\operatorname{Cov}(R_P,R_Q)}{\\sigma_P\\sigma_Q}','Dieselbe Bilinearität berechnet die Beziehung zwischen zwei Portfolios oder zwischen einem Portfolio und einer Benchmark.',[['R_P,R_Q','Renditen der beiden Portfolios.'],['w_i,v_j','Anfangsgewichte in P und Q.'],['\\sigma_{ij}','Kovarianz der zugrunde liegenden Anlagen.'],['\\sigma_P,\\sigma_Q','Positive Portfoliostandardabweichungen.'],['\\rho_{PQ}','Korrelation der Portfolios.'],['i,j','Anlagenindizes.']]),
  X('Eine Portfoliobeziehung berechnen','P hält 50/50 in A/B, Q besteht nur aus B. Verwende erneut Varianzen 0,04 und 0,01 sowie Kovarianz 0,004.',[
   'Cov(P,B) = 0,5 × 0,004 + 0,5 × 0,01 = 0,007.',
   'Die Korrelation ist 0,007/(√0,0145 × 0,1) ≈ 0,5813. Sie ist weder der einfache Durchschnitt von Korrelationen noch bloß das Gewicht von B.'
  ],'Für eine neue Position zählt ihre Beziehung zum bereits vorhandenen Portfolio, nicht nur ihre eigene Volatilität.'),
  F('\\sigma_P^2=\\sigma^2\\left(\\rho+\\frac{1-\\rho}{n}\\right)','Bei n gleich gewichteten Anlagen mit gleicher Varianz und identischer paarweiser Korrelation zerfällt das Risiko in einen gemeinsamen und einen mit n sinkenden Teil. Das Modell setzt eine zulässige Kovarianzmatrix voraus.',[['\\sigma_P^2','Portfoliovarianz.'],['\\sigma^2','Gleiche Einzelvarianz.'],['\\rho','Gleiche paarweise Korrelation; für beliebig wachsende n hier nicht negativ.'],['n','Anlagenzahl.']]),
  'Bei positiver gemeinsamer Korrelation bleibt auch für sehr viele Titel ein Risikosockel. Zwanzig fast gleich reagierende Positionen können wirtschaftlich viel weniger Diversifikation bieten als ihre Anzahl suggeriert.',
  F('\\mathbf w_{GMV}=\\frac{\\boldsymbol\\Sigma^{-1}\\mathbf 1}{\\mathbf 1^{\\mathsf T}\\boldsymbol\\Sigma^{-1}\\mathbf 1}','Für mehrere Anlagen lässt sich das unbeschränkte globale Varianzminimum in Matrixform ausdrücken. Vorausgesetzt werden eine positiv definite Kovarianzmatrix und ausschließlich die Bedingung, dass die Gewichte eins ergeben. Zusätzliche Gewichtsgrenzen erfordern eine entsprechend beschränkte Optimierung.',[['\\mathbf w_{GMV}','Vektor der Minimumvarianzgewichte.'],['\\boldsymbol\\Sigma,\\boldsymbol\\Sigma^{-1}','Kovarianzmatrix und ihre Inverse.'],['\\mathbf 1','Vektor, dessen Einträge sämtlich eins sind.'],['\\mathsf T','Transposition.']]),
  'Die Bedingung erster Ordnung lautet, dass die kovarianzgewichteten Grenzbeiträge bei dieser unbeschränkten Lösung übereinstimmen. Multiplikation mit der inversen Kovarianzmatrix liefert einen Vektor proportional zu Σ⁻¹1; der Nenner normiert seine Gewichte auf Summe eins. Erwartete Renditen kommen auch hier nicht in der reinen Minimumvarianzlösung vor.'
 ]),
 S('risk-free','8. Eine sichere Anlage erzeugt die Kapitalallokationslinie','c',[
  F('\\mu_C=r_f+y(\\mu_P-r_f),\\qquad \\sigma_C=|y|\\sigma_P','Das vollständige Portfolio C investiert den Anteil y in ein festes riskantes Portfolio P und 1 − y sicher. Der sichere Ertrag hat für den betrachteten Horizont keine Varianz und keine Kovarianz mit P.',[['\\mu_C,\\mu_P','Erwartete Renditen des vollständigen bzw. riskanten Portfolios.'],['r_f','Sicherer Periodenzins in derselben Währung und über denselben Horizont.'],['y','Gewicht des riskanten Portfolios, gegebenenfalls über 1 bei Kreditaufnahme.'],['\\sigma_C,\\sigma_P','Standardabweichungen.']]),
  F('\\mu_C=r_f+\\frac{\\mu_P-r_f}{\\sigma_P}\\sigma_C\\quad(y\\ge0)','Für nicht negative Risikoanlage ist dies eine Gerade im Risiko-Rendite-Diagramm. Ihre Steigung ist die Sharpe Ratio des gewählten riskanten Portfolios.',[['\\mu_C,\\mu_P','Erwartete Renditen.'],['r_f','Sicherer Zins.'],['\\sigma_C,\\sigma_P','Standardabweichungen.'],['y','Gewicht der riskanten Anlage.']]),
  X('Sparen, vollständig investieren oder Kredit aufnehmen','Das riskante Portfolio erwartet 9 % bei 15 % Volatilität. Der sichere Zins beträgt 3 %. Gleicher Kredit- und Anlagezins wird zunächst unterstellt.',[
   T(['Anteil y','Sicherer Anteil','Erwartete Rendite','Standardabweichung'],[
    ['0,5','+50 %','6 %','7,5 %'],['1,0','0 %','9 %','15 %'],['1,5','−50 %','12 %','22,5 %']
   ],'Die Renditedifferenz zum sicheren Zins wird proportional zu y skaliert.'),
   'Bei y = 1,5 werden je 100 Eigenkapital weitere 50 geliehen und 150 riskant investiert. Verluste und Schwankungen werden ebenso vergrößert wie die erwartete Überschussrendite.',
   'Wäre der Kreditzins 5 % statt 3 %, ergäbe sich 1,5 × 9 % − 0,5 × 5 % = 11 % erwartete Rendite. Die Linie knickt ab voller Eigenkapitalanlage ab.'
  ],'Risikofreiheit und Finanzierungskosten sind horizon-, währungs- und vertragsabhängige Annahmen.')
 ]),
 S('utility','9. Risikoaversion bestimmt den persönlichen Punkt auf der Linie','c',[
  F('U=\\mu_C-\\frac A2\\sigma_C^2','Die Mittelwert-Varianz-Nutzenfunktion zieht von der erwarteten Rendite einen mit der Varianz wachsenden Risikopreis ab. Wir verwenden Renditen als Dezimalzahlen und A > 0.',[['U','Nutzenindex in Renditeeinheiten; keine garantierte Rendite.'],['\\mu_C','Erwartete Rendite.'],['\\sigma_C^2','Varianz bei Dezimalrenditen.'],['A','Parameter der Risikoaversion in dieser Konvention.']]),
  'Die Formel ist ein Entscheidungsmodell. Sie beschreibt nicht jede Präferenz über schiefe, begrenzte oder stark verlustbetonte Verteilungen. Ein höherer positiver A-Wert bedeutet: Für dieselbe zusätzliche Varianz verlangt der Anleger mehr erwartete Rendite. Es bedeutet nicht, dass er stets ausschließlich sichere Anlagen halten muss.',
  F('U(y)=r_f+y(\\mu_P-r_f)-\\frac A2y^2\\sigma_P^2,\\qquad y^*=\\frac{\\mu_P-r_f}{A\\sigma_P^2}','Einsetzen der Kapitalallokation und Nullsetzen der Ableitung liefert das unbeschränkte optimale Gewicht. Die zweite Ableitung ist −Aσ² und bei positiver Varianz negativ.',[['U(y)','Nutzen als Funktion des Risikoanteils.'],['y,y^*','Gewählter bzw. optimaler unbeschränkter Risikoanteil.'],['r_f','Sicherer Zins.'],['\\mu_P,\\sigma_P^2','Erwartete Rendite und Varianz des riskanten Portfolios.'],['A','Positiver Risikoaversionsparameter.']]),
  X('Die Risikoaversion verdoppeln','P erwartet 9 % bei 15 % Volatilität; r_f = 3 %. Vergleiche A = 4 mit A = 8.',[
   F('y^*_{A=4}=\\frac{0{,}09-0{,}03}{4\\cdot0{,}15^2}=\\frac23,\\qquad y^*_{A=8}=\\frac13','Bei unverändertem Anlageangebot halbiert doppelte Risikoaversion den unbeschränkten Risikoanteil.',[['y^*_{A=4},y^*_{A=8}','Optimale Gewichte unter den beiden A-Werten.']]),
   'A = 4: erwartete Rendite 7 %, Standardabweichung 10 %, Nutzen 0,07 − 2 × 0,01 = 0,05.',
   'A = 8: erwartete Rendite 5 %, Standardabweichung 5 %. Der geringere Ertrag wird bewusst gegen weniger Schwankung eingetauscht.',
   'Bei Kredit- oder Shortverbot wird das Gewicht auf den zulässigen Bereich begrenzt. Negative erwartete Überschussrendite oder A ≤ 0 erfordern eine gesonderte Betrachtung; die übliche innere Lösung ist dann keine pauschale Empfehlung.'
  ],'Erst Anlageangebot, dann persönliche Präferenz und Nebenbedingungen. Ein globales Varianzminimum beantwortet eine andere Optimierungsfrage.')
 ]),
 S('cal-figure','10. Tangentialpunkt von Präferenz und Kapitalallokation','c',[
  G({id:'cal-utility',title:'Das optimale Risiko liegt dort, wo sich die Steigungen gleichen',
   caption:'Riskantes Portfolio: 9 % erwartete Rendite, 15 % Volatilität. Sicherer Zins 3 %, Risikoaversion A = 4. Gleicher Kredit- und Anlagezins, keine weiteren Beschränkungen.',
   reading:'Die Gerade zeigt erreichbare Kombinationen. Die gekrümmte Linie zeigt Kombinationen mit demselben Nutzen wie das Optimum. Bei 10 % Risiko und 7 % erwarteter Rendite berühren sie sich. Anderswo auf der Geraden ist der Nutzen niedriger, auch wenn die erwartete Rendite rechts höher ist.',
   plot:{x:[0,25],y:[0,18],xTicks:[0,5,10,15,20,25],xLabel:'Standardabweichung (%)',yLabel:'Erwartete Rendite (%)',series:[
    {name:'Kapitalallokationslinie',points:[[0,3],[25,13]]},
    {name:'Indifferenzkurve U = 0,05',points:Array.from({length:101},(_,i)=>{const s=i/400;return[s*100,(.05+2*s*s)*100];}),dash:'8 5'}
   ],marks:[{x:10,y:7,label:'Optimum: y = 2/3',dx:12,dy:-15,guides:true},{x:15,y:9,label:'P',dx:12,dy:10}]}})
 ]),
 S('market','11. Von einer CAL zur Kapitalmarktlinie','b c',[
  'Für jedes mögliche riskante Portfolio gibt es eine eigene Kapitalallokationslinie. Wenn sichere Anlage und Kredit zum selben Satz möglich sind, bevorzugt das Mittelwert-Varianz-Modell unter geeigneten Voraussetzungen die höchste erreichbare positive Steigung. Diese Linie berührt die effiziente Grenze riskanter Anlagen im Tangentialportfolio.',
  'Welche Gewichtung innerhalb dieses Tangentialportfolios liegt, folgt aus erwarteten Renditen, Kovarianzen und Nebenbedingungen. Wie viel davon ein Anleger hält, bestimmt anschließend seine Risikoaversion. Diese Trennung wird als Separation bezeichnet; bei unterschiedlichen Informationen, Finanzierungssätzen oder Beschränkungen müssen Anleger nicht dasselbe riskante Portfolio wählen.',
  'Erst zusätzliche CAPM-Gleichgewichtsannahmen identifizieren das gemeinsame Tangentialportfolio mit dem Marktportfolio aller relevanten riskanten Anlagen. Die zugehörige Linie heißt Capital Market Line. Nicht jede beliebige CAL ist deshalb bereits eine CML.',
  T(['Beziehung','Horizontale Risikogröße','Worauf sie sich bezieht'],[
   ['Capital Allocation Line','Gesamtstandardabweichung','Mischungen aus einer sicheren Anlage und einem bestimmten riskanten Portfolio.'],
   ['Capital Market Line','Gesamtstandardabweichung','Effiziente Mischungen mit dem Marktportfolio im passenden Gleichgewichtsmodell.'],
   ['Security Market Line','Beta','CAPM-Beziehung für erwartete Rendite und systematisches Risiko, auch bei einzelnen Wertpapieren.']
  ],'Eine einzelne Aktie muss nicht auf der CML liegen. Gesamtvolatilität und Beta beantworten verschiedene Risikofragen.'),
  'Schätzfehler sind eine praktische Grenze: Optimierung reagiert oft stark auf kleine Änderungen erwarteter Renditen. Korrelationen können in Stressphasen steigen, Liquidität kann verschwinden und Modellvolatilität bildet nicht jede relevante Verlustart ab. Gegenprüfungen mit Stressszenarien, Gewichtsgrenzen und plausiblen Eingabebereichen gehören deshalb zur Anwendung.'
 ])
],related:[{unit:'return-statistics',section:'covariance',label:'Kovarianz aus historischen Renditepaaren berechnen'},{unit:'return-statistics',section:'shape',label:'Warum Varianz nicht alle Verlustmerkmale erfasst'},{unit:'standard-iii',section:'suitability',label:'Mathematische Optimierung mit Kundenzielen und Eignung verbinden'},{unit:'return-types',section:'leverage',label:'Kreditfinanzierung und Eigenkapitalrendite nachvollziehen'}],
 sources:[
 {title:'CFA Institute: Portfolio Risk and Return, Part I',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/portfolio-risk-return-part-1'},
 {title:'CFA Institute: Portfolio Risk and Return, Part II',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/portfolio-risk-return-part-2'}
 ],review:{status:'draft',date:'2026-09-18',note:'Eigene Herleitungen und Parametervergleiche mit drei berechneten Abbildungen; vollständige Gewichts-, Risiko- und Zinsannahmen.'}};
