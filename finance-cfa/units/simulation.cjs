const {F,T,X,S,G}=require('../author.cjs');
const terminal=(t,z)=>100*Math.exp((.06-.2**2/2)*t+.2*Math.sqrt(t)*z);
module.exports={id:'simulation',intro:[
 'Eine Simulation beantwortet eine bedingte Frage: Welche Ergebnisse entstehen, wenn wir eine bestimmte Verteilung, Datenhistorie oder dynamische Regel als Modell verwenden? Viele erzeugte Szenarien sind keine zusätzlichen beobachteten Marktjahre. Sie machen die Konsequenzen der Annahmen sichtbar, beseitigen aber keine Fehler in diesen Annahmen.',
 'Historische Simulation, Bootstrap und Monte Carlo unterscheiden sich vor allem darin, woher ihre Zufallswelt stammt und was geschätzt werden soll. Wir trennen deshalb die Verteilung möglicher Anlageergebnisse von der Unsicherheit eines aus Daten geschätzten Parameters.'
],sections:[
 S('purpose','1. Zuerst Zielgröße und Unsicherheitsart festlegen','a b c',[
  T(['Ziel','Mögliche Methode','Entscheidende Frage'],[
   ['Portfolioverluste unter beobachteten Marktbewegungen','Historische Simulation.','Wie repräsentativ sind die historischen gemeinsamen Schocks für das heutige Portfolio?'],
   ['Unsicherheit einer geschätzten mittleren Rendite','Bootstrap der Schätzstatistik.','Ist das Resampling-Verfahren für Datendesign und Abhängigkeit geeignet?'],
   ['Künftige Vermögenspfade oder komplexe Zahlungsansprüche','Monte Carlo eines expliziten Modells.','Welche Dynamik, Parameter und Abhängigkeiten erzeugen die Szenarien?']
  ],'Die gleiche Rechentechnik kann mehrere Ziele unterstützen. Entscheidend bleibt, welche Größe über die Wiederholungen variiert.'),
  'Ein Verlustquantil für das nächste Jahr ist etwas anderes als ein Konfidenzintervall für die geschätzte langfristige Durchschnittsrendite. Das erste betrifft ein mögliches Marktergebnis, das zweite die Unsicherheit über einen Parameter. Ein enger Monte-Carlo-Fehler des geschätzten Quantils macht den künftigen Verlust nicht sicher.'
 ]),
 S('historical','2. Historische gemeinsame Schocks auf das heutige Portfolio anwenden','a',[
  F('R_{p,s}=\\sum_{j=1}^k w_jR_{j,s},\\qquad V_s=V_0(1+R_{p,s}),\\qquad L_s=V_0-V_s','Für ein lineares Einperiodenportfolio mit zu Periodenbeginn festgelegten Gewichten wird jede historische Zeile gemeinsam auf die heutigen Positionen angewendet. Positiver Verlust bedeutet sinkendes Vermögen.',[['R_{p,s}','Portfoliorendite im historischen Szenario s.'],['w_j','Heutiges Anfangsgewicht der Anlage j; hier Summe eins.'],['R_{j,s}','Historische einfache Rendite der Anlage j im selben Szenario.'],['k,j,s','Anlagezahl, Anlageindex und Szenarioindex.'],['V_0,V_s,L_s','Heutiger Portfoliowert, Szenarioendwert und Verlustbetrag.']]),
  T(['Historische Zeile','A-Rendite','B-Rendite','60/40-Rendite','Verlust bei 100.000'],[
   ['1','−10 %','+4 %','−4,4 %','+4.400'],['2','−4 %','+2 %','−1,6 %','+1.600'],['3','+2 %','+1 %','+1,6 %','−1.600'],['4','+5 %','−1 %','+2,6 %','−2.600'],['5','+10 %','−3 %','+4,8 %','−4.800']
  ],'Kleine konstruierte Historie zur Handrechnung; negative Verluste sind Gewinne. Fünf Beobachtungen reichen nicht für eine belastbare praktische Tail-Risikomessung.'),
  X('Diversifikation hängt an der gemeinsamen Zeile','Im ersten historischen Szenario fällt A um 10 %, während B um 4 % steigt.',[
   F('R_{p,1}=0{,}6(-0{,}10)+0{,}4(0{,}04)=-0{,}044,\\qquad L_1=100000\\cdot0{,}044=4400','B federt den Verlust von A ab. Die gemeinsame Beobachtung enthält diese Abhängigkeitsinformation.',[['R_{p,1}','Rendite des 60/40-Portfolios in Szenario 1.'],['L_1','Verlustbetrag in Szenario 1.']]),
   'Würde man stattdessen As schlechteste Rendite mit Bs schlechtester Rendite kombinieren, ergäbe sich −7,2 %. Das kann ein bewusst konstruiertes Stressszenario sein, war aber keine der beobachteten gemeinsamen historischen Zeilen.',
   'Wer jede Anlage unabhängig aus ihrer Historie zieht, verändert die empirische Abhängigkeit. Für ein gemeinsames historisches Portfolio-Szenario müssen passende Zeitpunkte zusammenbleiben.'
  ],'Historische Simulation übernimmt gemeinsame empirische Schocks, nicht bloß getrennte Listen von Einzelrenditen.')
 ]),
 S('tails','3. Quantile und Expected Shortfall mit offengelegter Konvention','a',[
  F('VaR_c=L_{(\\lceil cN\\rceil)}','Für dieses Lehrbeispiel verwenden wir das empirische Nearest-Rank-Quantil: aufsteigend sortierte Verluste und den aufgerundeten Rang. Andere Softwarekonventionen können interpolieren.',[['VaR_c','Value at Risk zum Konfidenzniveau c, als Verlustbetrag.'],['c,N','Konfidenzniveau zwischen null und eins und Zahl gleich gewichteter Szenarien.'],['L_{(r)}','r-kleinster Verlust in der sortierten Liste.'],['\\lceil cN\\rceil','Auf die nächste ganze Zahl aufgerundeter Rang.']]),
  X('Ein Quantil ist kein maximaler Verlust','Die fünf Verluste aus der Tabelle sind aufsteigend −4.800, −2.600, −1.600, +1.600 und +4.400.',[
   'Bei c = 80 % ist der Rang 0,8 × 5 = 4. Der VaR beträgt deshalb 1.600. Einer der fünf Modellfälle verliert mehr: 4.400.',
   'Der Durchschnitt im schlechtesten 20-%-Anteil beträgt hier 4.400; das ist der empirische Expected Shortfall bei 80 %. Genau ein gleich gewichteter Fall bildet diesen Anteil.',
   'Bei 95 % liefert dieselbe Nearest-Rank-Regel bereits den größten beobachteten Verlust 4.400. Das bedeutet nicht, dass es keinen größeren zukünftigen Verlust geben kann; die Historie hat nur fünf Punkte.'
  ],'Bei diskreten Verteilungen, Quantilsbindungen oder einem nicht ganzzahligen Tail-Anteil muss die ES-Gewichtung ausdrücklich festgelegt werden.'),
  F('ES_c=\\frac1{1-c}\\int_c^1VaR_u\\,du','Die Quantilmittel-Definition mittelt den schlechtesten Anteil der Verlustverteilung und behandelt auch diskrete Randmassen konsistent. Sie ist nicht in jedem diskreten Fall einfach E[L | L > VaR].', [['ES_c','Expected Shortfall zum Niveau c.'],['c,u','Festes Konfidenzniveau und Integrationsvariable für Quantilsniveaus.'],['VaR_u','Verlustquantil zum Niveau u.']]),
  'Im Lehrbeispiel ist jedes Szenario gleich wahrscheinlich. Gewichtete historische Simulation kann neuere Beobachtungen stärker gewichten, ändert damit aber Verteilung und Quantile. Ein ruhiges jüngstes Zeitfenster kann Krisenrisiken systematisch ausblenden.'
 ]),
 S('historical-limits','4. Nichtlinearität, Horizont und Regimewechsel','a',[
  'Für Aktienpositionen ist die gewichtete Renditegleichung im angegebenen Einperiodenfall exakt. Für Optionen, kündbare Anleihen oder andere nichtlineare Ansprüche muss man die relevanten Risikofaktoren schocken und das Instrument mit einem geeigneten Bewertungsmodell neu bewerten. Eine Delta-Näherung kann bei großen Bewegungen stark abweichen.',
  F('L_s=V_0-V(\\mathbf z_s,t+\\Delta t)','Full Revaluation berechnet den Portfoliowert nach einem gemeinsamen Faktor-Schock und gegebenenfalls Zeitablauf neu. Die Marktdynamik und Bewertungsannahmen bleiben ausdrücklich Teil des Verfahrens.',[['L_s,V_0','Szenarioverlust und heutiger Wert.'],['V(\\mathbf z_s,t+\\Delta t)','Bewertungsfunktion bei geschocktem Risikofaktorvektor und neuem Bewertungszeitpunkt.'],['\\mathbf z_s','Gemeinsame Faktoren wie Kurse, Zinsen, Spreads und implizite Volatilitäten.'],['t,\\Delta t,s','Ausgangszeit, Horizont und Szenarioindex.']]),
  'Mehrperiodige Renditen werden geometrisch verkettet. Tages-VaR einfach mit der Wurzel der Tageszahl zu skalieren benötigt restriktive Annahmen; Liquiditätsprobleme, Autokorrelation, Volatilitätscluster und nichtlineare Positionen können sie verletzen.',
  'Ein historisches Fenster enthält möglicherweise keine Pandemie, keine neue Zinsregimeverschiebung oder keine neuartige Marktstruktur. Stressszenarien ergänzen die historischen Fälle gezielt. Sie bekommen dadurch nicht automatisch eine empirisch nachgewiesene Eintrittswahrscheinlichkeit.'
 ]),
 S('bootstrap','5. Bootstrap: die Daten als empirische Population behandeln','b',[
  F('\\hat\\theta^{*(b)}=T(X_1^{*(b)},\\ldots,X_n^{*(b)}),\\qquad b=1,\\ldots,B','Im gewöhnlichen nichtparametrischen iid-Bootstrap werden n Beobachtungen mit Zurücklegen aus den n Originalfällen gezogen. Für jede Wiederholung wird dieselbe Schätzregel neu berechnet.',[['T','Schätzregel, beispielsweise arithmetischer Mittelwert oder Regressionssteigung.'],['\\hat\\theta^{*(b)}','Schätzwert in Bootstrap-Wiederholung b.'],['X_i^{*(b)}','Mit Zurücklegen gezogener Originalfall an Position i der Wiederholung b.'],['n,B,i,b','Original-/Resamplegröße, Zahl der Wiederholungen und Indizes.']]),
  'Zurücklegen ist entscheidend: Ein Originalfall kann mehrfach oder gar nicht vorkommen. Würde man alle n Fälle nur ohne Zurücklegen neu sortieren, bliebe ihr Mittelwert immer gleich; man hätte keine brauchbare Bootstrap-Verteilung dieses Schätzers.',
  X('Alle Wiederholungen eines winzigen Beispiels aufzählen','Drei beobachtete Renditen: −2 %, 0 % und 4 %. Der ursprüngliche Mittelwert ist 2/3 % ≈ 0,6667 %. Jeder Bootstrap zieht drei Werte mit Zurücklegen.',[
   'Eine mögliche Ziehung (−2, −2, 4) hat Mittelwert 0 %. Eine andere (0, 4, 4) hat 8/3 % ≈ 2,6667 %. Die Ziehung (4, 4, 4) hat Mittelwert 4 %.',
   'Es gibt 3³ = 27 gleich wahrscheinliche geordnete Ziehungen. Die gleiche Kombination kann in mehreren Reihenfolgen auftreten; diese Häufigkeiten dürfen nicht verloren gehen.',
   F('E_*[\\bar X^*]=\\bar x=\\frac23\\%,\\qquad \\operatorname{Var}_*(\\bar X^*)=\\frac{56}{27}\\;\\mathrm{pp}^2,\\qquad SE_*\\approx1{,}4402\\;\\mathrm{pp}','Die empirische Einzelvarianz ist 56/9 in quadrierten Prozentpunkten; der Mittelwert aus drei unabhängigen Ziehungen hat ein Drittel dieser Varianz.',[['E_*,\\operatorname{Var}_*','Erwartungswert und Varianz unter der empirischen Bootstrap-Verteilung, bedingt auf die Originaldaten.'],['\\bar X^*,\\bar x','Bootstrap-Mittel und beobachtetes Originalmittel.'],['SE_*','Exakter Standardfehler der Bootstrap-Mittel in diesem vollständig aufzählbaren Beispiel.'],['\\mathrm{pp}','Prozentpunkt; pp² ist dessen Quadrat.']]),
   'Der übliche analytische Standardfehler aus s/√n beträgt hier √(28/9) ≈ 1,7638 Prozentpunkte. Der Unterschied entsteht, weil die empirische Bootstrap-Population mit n statt n−1 normiert und das Beispiel extrem klein ist.'
  ],'Bootstrap ist keine magische Reparatur einer winzigen Stichprobe. Auch seine Approximation muss zur Fallzahl und Zielgröße passen.')
 ]),
 S('bootstrap-uncertainty','6. Standardfehler, Intervalle und Abhängigkeiten im Bootstrap','b',[
  F('\\bar\\theta^*=\\frac1B\\sum_{b=1}^B\\hat\\theta^{*(b)},\\qquad \\widehat{SE}_{boot}=\\sqrt{\\frac1{B-1}\\sum_{b=1}^B(\\hat\\theta^{*(b)}-\\bar\\theta^*)^2}','Bei einer endlichen Zahl unabhängig erzeugter Bootstrap-Wiederholungen wird deren Streuung um ihren eigenen Mittelwert gemessen. Sie schätzt die Unsicherheit der ursprünglichen Schätzstatistik.',[['\\bar\\theta^*','Mittelwert der B Bootstrap-Schätzwerte.'],['\\hat\\theta^{*(b)}','Schätzwert der Wiederholung b.'],['\\widehat{SE}_{boot}','Aus den Wiederholungen geschätzter Bootstrap-Standardfehler.'],['B,b','Zahl der Wiederholungen und Index.']]),
  F('I_{perc}=[q^*_{\\alpha/2},q^*_{1-\\alpha/2}]','Ein einfaches Percentile-Intervall verwendet Quantile der Bootstrap-Schätzwerte. Seine tatsächliche Überdeckung hängt von Verfahren, Verteilung, Bias und Stichprobengröße ab; es ist nicht automatisch exakt.',[['I_{perc}','Bootstrap-Percentile-Intervall.'],['q^*_p','p-Quantil der Bootstrap-Verteilung der Schätzstatistik.'],['\\alpha','Nominale Nichtüberdeckungsrate.']]),
  T(['Datenproblem','Passende Überlegung'],[
   ['Gemeinsame Renditen mehrerer Anlagen','Ganze zusammengehörige Zeilen resamplen; unabhängiges Ziehen jeder Spalte zerstört die Abhängigkeit.'],
   ['Zeitreihen mit serieller Abhängigkeit','Geeigneter Block-Bootstrap kann Abschnitte gemeinsam ziehen; Blocklänge und Stationarität bleiben Modellentscheidungen.'],
   ['Gepaarte Vorher-Nachher-Daten','Paare oder sinnvoll gebildete Differenzen als Einheit erhalten.'],
   ['Nicht repräsentative Ausgangsdaten','Resampling reproduziert die Verzerrung; es entdeckt keine fehlenden Unternehmensausfälle.']
  ],'Die Resampling-Einheit folgt dem Erhebungsdesign. Mehr Bootstrap-Wiederholungen ersetzen keine bessere Originalstichprobe.')
 ]),
 S('monte-carlo','7. Monte Carlo aus Zufallszahlen und einem expliziten Modell','c',[
  'Ein Monte-Carlo-Verfahren legt Zielgröße und Modell fest, erzeugt Zufallsvariablen, übersetzt sie in Faktor-/Vermögensszenarien und berechnet in jedem Szenario das interessierende Ergebnis. Die Wiederholungen werden danach zu Mittelwerten, Wahrscheinlichkeiten oder Quantilen zusammengefasst.',
  F('Z=\\Phi^{-1}(U),\\qquad U\\sim\\operatorname{Uniform}(0,1)','Eine gleichverteilte Zahl zwischen null und eins kann über die inverse Standardnormalverteilungsfunktion in eine normalverteilte Zahl umgewandelt werden. Das ist eine mögliche Erzeugungsmethode, nicht die einzige.',[['U','Gleichverteilte Zufallszahl; Endpunkte 0 und 1 werden bei der Inversion vermieden.'],['Z','Standardnormalverteilte Zufallszahl.'],['\\Phi^{-1}','Quantilfunktion der Standardnormalverteilung.']]),
  'Ein fester Seed macht einen Pseudozufallsstrom reproduzierbar. Er beweist weder Unabhängigkeit noch Realitätsnähe des Modells. Für Vergleiche zweier Strategien können gemeinsame Zufallszahlen die Streuung ihrer geschätzten Differenz reduzieren, wenn die Kopplung geeignet ist.',
  'Investmentanwendungen sind beispielsweise künftige Vermögensverteilungen mit Entnahmen, Kreditverluste mit gemeinsamen Faktoren, Cashflows in Projekten sowie pfadabhängige derivative Zahlungen. Die korrekte Verteilung für eine reale Risikoprognose muss von einer risikoneutralen Bewertungsverteilung unterschieden werden.'
 ]),
 S('price-model','8. Von normalen Logrenditen zu positiven Preisen','c',[
  F('S_{t+\\Delta t}=S_t\\exp\\!\\left[(\\mu-\\tfrac12\\sigma^2)\\Delta t+\\sigma\\sqrt{\\Delta t}\\,Z\\right]','Ein geometrisch-brownsches Preis-Modell mit konstanten Parametern besitzt diese exakte Übergangsverteilung. μ ist der kontinuierliche arithmetische Driftparameter; der Logdrift ist um die halbe Varianz niedriger.',[['S_t,S_{t+\\Delta t}','Positiver Preis vor und nach dem Zeitschritt.'],['\\mu','Kontinuierlicher erwarteter relativer Drift pro Jahr; nicht unmittelbar die einfache erwartete Einjahresrendite.'],['\\sigma','Jährliche Diffusionsvolatilität.'],['\\Delta t','Zeitschritt in Jahren.'],['Z','Neue Standardnormalvariable; für das Grundmodell unabhängige Schritte.'],['\\exp','Exponentialfunktion.']]),
  F('E[S_T]=S_0e^{\\mu T},\\qquad \\operatorname{Median}(S_T)=S_0e^{(\\mu-\\sigma^2/2)T}','Exponentieren des mittleren Logpreises ergibt den Median. Beim Erwartungswert kompensiert der halbe Logvarianzterm die Driftkorrektur.',[['S_0,S_T','Start- und Endpreis.'],['\\mu,\\sigma,T','Jährlicher Drift, jährliche Volatilität und Horizont in Jahren.'],['e,E,\\operatorname{Median}','Eulersche Zahl, Erwartungswert und Median.']]),
  X('Drei Standardschocks und die gesamte Verteilung','S₀ = 100, μ = 6 % pro Jahr, σ = 20 % pro Jahr, T = 1.',[
   'Der deterministische Term der Logrendite ist 0,06 − 0,20²/2 = 0,04. Für Z = −1, 0 und +1 ergeben sich Preise von rund 85,21, 104,08 und 127,12.',
   'Diese drei ausgewählten Schocks sind keine vollständige Monte-Carlo-Stichprobe mit repräsentativen Gewichten. Ihr Durchschnitt darf nicht mit dem Modell-Erwartungswert verwechselt werden.',
   F('E[S_1]=100e^{0{,}06}\\approx106{,}184,\\qquad \\operatorname{Median}(S_1)=100e^{0{,}04}\\approx104{,}081','Die einfache erwartete Jahresrendite beträgt somit rund 6,184 %, nicht exakt 6 %.',[['S_1','Endpreis nach einem Jahr.'],['E[S_1],\\operatorname{Median}(S_1)','Modell-Erwartungswert und Median des Endpreises.'],['e','Eulersche Zahl.']]),
   'Das Modell garantiert positive Preise, verhindert aber keine großen Verluste. Konstante Volatilität, stetige Pfade und normalverteilte Logschritte schließen Sprünge und wechselnde Risikoregime aus.'
  ],'Eine passend wirkende Grafik ist nur so aussagekräftig wie das Preisprozess-Modell.'),
  G({id:'price-quantiles',title:'Erwartungswert, Median und zentrale Preisquantile trennen sich',
   caption:'Dasselbe Modell: Startpreis 100, μ = 6 %, σ = 20 %. Linien zeigen marginale Größen für jeden Horizont, keine simulierten Pfade und kein simultanes Pfadband.',
   reading:'Das 5-%- und 95-%-Quantil gehen mit dem Zeithorizont auseinander. Der Median liegt unter dem Erwartungswert. Ein Preisverlauf kann zwischen den Horizonten die Quantilgrenzen überschreiten.',
   plot:{x:[0,5],y:[0,260],xLabel:'Horizont (Jahre)',yLabel:'Preis',series:[
    {name:'Erwartungswert',points:Array.from({length:101},(_,i)=>[i/20,100*Math.exp(.06*i/20)])},
    {name:'Median',points:Array.from({length:101},(_,i)=>[i/20,terminal(i/20,0)])},
    {name:'5-%-Quantil',dash:'6 4',color:'#5b64aa',points:Array.from({length:101},(_,i)=>[i/20,terminal(i/20,-1.644853626951)])},
    {name:'95-%-Quantil',dash:'6 4',color:'#5b64aa',points:Array.from({length:101},(_,i)=>[i/20,terminal(i/20,1.644853626951)])}
   ]}})
 ]),
 S('dependence','9. Mehrere Anlagen müssen gemeinsam simuliert werden','c',[
  F('Z_1=U_1,\\qquad Z_2=\\rho U_1+\\sqrt{1-\\rho^2}\\,U_2','Aus zwei unabhängigen Standardnormalvariablen entstehen zwei Standardnormalvariablen mit der vorgegebenen Korrelation. Ein Teil des zweiten Schocks ist gemeinsam, der Rest ist eigenständig.',[['U_1,U_2','Unabhängige Standardnormalvariablen; hier nicht die gleichverteilte Variable U des vorigen Abschnitts.'],['Z_1,Z_2','Korrelierte standardnormale Schocks.'],['\\rho','Zielkorrelation zwischen −1 und +1.']]),
  X('Korrelation aus den Komponenten nachrechnen','Setze ρ = 0,6; dann ist der unabhängige Anteil √(1 − 0,36) = 0,8.',[
   'Die Varianz von Z₂ ist 0,6² × 1 + 0,8² × 1 = 1, weil die Kreuzkovarianz der beiden U-Variablen null ist.',
   'Die Kovarianz von Z₁ und Z₂ beträgt 0,6. Da beide Standardabweichungen eins sind, ist auch ihre Korrelation 0,6.',
   'Für eine konkrete Ziehung U₁ = 1 und U₂ = −0,5 ergibt sich Z₁ = 1 und Z₂ = 0,2. Diese einzelne Ziehung beweist keine Korrelation; Korrelation beschreibt die gemeinsame Verteilung.'
  ],'Unabhängig simulierte Anlagen würden hier den gemeinsamen Risikoanteil auslassen.'),
  'Für viele Anlagen lässt sich eine geeignete positiv semidefinite Kovarianzmatrix faktorisieren. Paarweise plausibel wirkende Korrelationszahlen bilden nicht automatisch eine zulässige Gesamtmatrix. Außerdem sind normal korrelierte Schocks noch keine Garantie, dass extreme gemeinsame Verluste realistisch dargestellt werden.',
  'Die Schockkorrelation ist bei exponentierter Preisentwicklung nicht generell identisch mit der Korrelation einfacher Endrenditen. Der Zusammenhang hängt zusätzlich von Volatilitäten und Horizont ab.'
 ]),
 S('simulation-error','10. Simulationsfehler von Marktrisiko und Modellrisiko trennen','b c',[
  F('\\hat m=\\frac1M\\sum_{s=1}^M g_s,\\qquad \\widehat{SE}_{MC}=\\frac{s_g}{\\sqrt M}','Für unabhängige Szenarien und eine Zielgröße mit endlicher Varianz schätzt das Mittel den Modell-Erwartungswert. Der Monte-Carlo-Standardfehler beschreibt die numerische Unsicherheit dieses Mittelwerts.',[['g_s','Zielwert in Szenario s, etwa Endvermögen oder abgezinster Payoff.'],['\\hat m','Monte-Carlo-Mittelwert.'],['s_g','Stichprobenstandardabweichung der Szenariozielwerte.'],['M,s','Zahl unabhängiger Szenarien und Szenarioindex.'],['\\widehat{SE}_{MC}','Geschätzter Standardfehler des Monte-Carlo-Mittels.']]),
  X('Mehr Pfade verringern Rechenunsicherheit, nicht die Modellstreuung','Die simulierten abgezinsten Zahlungen haben Standardabweichung 20. Es werden 10.000 unabhängige Pfade verwendet.',[
   'Der Monte-Carlo-Standardfehler des durchschnittlichen Werts beträgt 20/100 = 0,2. Unter einer passenden Normalapproximation beträgt eine 95-%-Fehlerspanne rund ±0,392.',
   '40.000 Pfade halbieren den Standardfehler auf 0,1. Die Standardabweichung möglicher Zahlungen bleibt im selben Modell ungefähr 20.',
   'Eine falsche Ausfallkorrelation, ein falscher Drift oder ein vergessener Gebührenabzug bleibt auch bei einer Million Pfaden falsch. Mehr Wiederholungen machen dann lediglich die Konsequenz der falschen Annahme genauer.'
  ],'Die Formel ist für Mittelwerte. Die Unsicherheit eines seltenen Quantils erfordert eine dafür geeignete Analyse.'),
  F('\\hat p=K/M,\\qquad \\widehat{SE}(\\hat p)=\\sqrt{\\frac{\\hat p(1-\\hat p)}M}','Für unabhängig simulierte binäre Ereignisse ist die Ereignisquote ein Mittelwert von Indikatoren. Die einfache Standardfehlernäherung ist bei wenigen oder keinen Ereignissen problematisch.',[['K,M','Anzahl eingetretener Ereignisse und Zahl unabhängiger Simulationen.'],['\\hat p','Geschätzte Ereigniswahrscheinlichkeit im Modell.'],['\\widehat{SE}(\\hat p)','Geschätzter Monte-Carlo-Standardfehler der Quote.']]),
  'Null beobachtete Ausfälle beweisen keine Wahrscheinlichkeit null. Insbesondere bei seltenen Ereignissen müssen genügend relevante Fälle, geeignete Unsicherheitsintervalle oder besondere Simulationsverfahren vorgesehen werden.'
 ]),
 S('pricing','11. Reale Szenarien und risikoneutrale Bewertung nicht vermischen','c',[
  F('V_0=e^{-rT}E_Q[H(S_{[0,T]})]','Unter geeigneten arbitragefreien Bewertungsannahmen wird eine Zahlung unter dem passenden risikoneutralen Maß erwartet und mit dem risikofreien Satz diskontiert. Das Maß Q ist keine Behauptung, dass Anleger in Wirklichkeit risikoneutral sind.',[['V_0','Heutiger modellbasierter Wert des Anspruchs.'],['r,T','Konstanter stetiger risikofreier Satz und Laufzeit.'],['E_Q','Erwartungswert unter dem geeigneten risikoneutralen Bewertungsmaß.'],['H(S_{[0,T]})','Payoff als Funktion des relevanten Preisverlaufs bis T.'],['e','Eulersche Zahl.']]),
  'Im einfachen nicht dividendenzahlenden GBM-Aktienmodell ersetzt r den realen Drift μ. Dann entspricht der erwartete diskontierte Aktienendpreis dem heutigen Aktienpreis. Für eine reale Vermögensprognose ist dagegen eine begründete Realwelt-Renditeannahme nötig.',
  'Für eine europäische Endpreiszahlung genügt häufig die Endverteilung. Für eine asiatische Option oder eine Barriere muss man den passenden Pfad berücksichtigen; bei Barrieren können zwischen diskreten Simulationszeitpunkten unbemerkte Überschreitungen zu Bewertungsfehlern führen.',
  'Ein reales erwartetes Aktienergebnis einfach risikofrei abzuzinsen liefert im Allgemeinen keinen korrekten Marktpreis. Erwartung, Risikoadjustierung und Diskontierung müssen zum gleichen Bewertungsmodell gehören.'
 ]),
 S('validation','12. Ein Simulationsergebnis prüfbar machen','a b c',[
  T(['Kontrolle','Beispiel'],[
   ['Analytischer Vergleich','Im GBM muss der simulierte mittlere Endpreis zum analytischen Erwartungswert konvergieren.'],
   ['Grenzfall','Bei Volatilität null entsteht bei gleichem Drift ein deterministischer Preisverlauf.'],
   ['Abhängigkeit','Empirische Schockkorrelation und Varianzen gegen die vorgegebenen Werte prüfen.'],
   ['Reproduzierbarkeit','Seed, Datenstand, Parameter, Zeitraster, Bewertungsmodell und Szenariozahl dokumentieren.'],
   ['Konvergenz','Mehrere Läufe und größere Fallzahlen vergleichen; erwartete Monte-Carlo-Streuung berücksichtigen.'],
   ['Sensitivität und Stress','Drift, Volatilität, Korrelation und Extremfälle gezielt ändern, statt nur den Basismittelwert zu berichten.']
  ],'Eine bestandene technische Kontrolle beweist keine richtige Markthypothese; beide Prüfungsebenen werden benötigt.'),
  'Historische Simulation braucht repräsentative gemeinsame Daten, Bootstrap ein geeignetes Resampling-Design und Monte Carlo eine geeignete stochastische Welt. Alle drei profitieren von wirtschaftlicher Plausibilität, dokumentierten Grenzen und verständlicher Kommunikation der Unsicherheit.'
 ])
],related:[{unit:'distributions',section:'lognormal',label:'Normalverteilte Logrenditen und lognormale Preise'},{unit:'inference',section:'estimators',label:'Schätzunsicherheit und Standardfehler unterscheiden'},{unit:'portfolio-math',section:'two-assets',label:'Wie Abhängigkeit das Portfoliorisiko verändert'},{unit:'standard-v',section:'basis',label:'Modelle vor einer Empfehlung ausreichend prüfen'}],
 sources:[
 {title:'CFA Institute: offizieller Level-I-Lernzielkatalog 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=3'},
 {title:'CFA Institute: Simulation Methods',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/simulation-methods'},
 {title:'NIST: Bootstrap Plot',url:'https://www.itl.nist.gov/div898/handbook/eda/section3/eda334.htm'},
 {title:'NIST: Bootstrap Fit',url:'https://itl.nist.gov/div898/software/dataplot/refman1/auxillar/bootfit.htm'}
 ],review:{status:'draft',date:'2026-09-18',note:'Eigene historische Szenarien, vollständig aufzählbarer Bootstrap und analytische GBM-/Korrelationskontrollen. Quantilkonvention und Simulationsgrenzen explizit.'}};
