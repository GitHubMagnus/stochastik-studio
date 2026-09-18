const {F,T,X,S,G}=require('../author.cjs');
const phi=(x,s)=>Math.exp(-x*x/(2*s*s))/(s*Math.sqrt(2*Math.PI));
module.exports={id:'return-statistics',intro:[
 'Eine einzelne Durchschnittsrendite lässt offen, wie oft Verluste auftraten, wie groß Ausschläge waren und ob zwei Anlagen gleichzeitig schlecht liefen. Dieses Kapitel baut die notwendigen Kennzahlen aus konkreten Beobachtungen auf. Jede Kennzahl verdichtet Informationen und verliert dabei andere.',
 'Historische Beschreibung, Schätzung einer unbekannten Verteilung und Modellrechnung sind unterschiedliche Aufgaben. Deshalb legen wir bei jeder Rechnung fest, welche Daten vorliegen, welche Einheit verwendet wird und warum der jeweilige Nenner passt.'
],sections:[
 S('data','1. Erst die Datenbasis, dann die Kennzahl','a c',[
  'Für einen Vergleich müssen Renditen dieselbe Frequenz, Währung und Ertragsabgrenzung besitzen. Monatsrenditen eines Fonds und Jahresrenditen eines Index unmittelbar zusammenzurechnen wäre sinnlos. Für Kovarianz müssen die Beobachtungen außerdem dieselben Zeiträume paarweise abdecken.',
  T(['Prüfung','Warum sie das Ergebnis verändert'],[
   ['Preis- oder Gesamtrendite?','Fehlende Ausschüttungen unterschätzen den Anlageerfolg und können Beziehungen zwischen Anlagen verzerren.'],
   ['Einfache oder logarithmische Rendite?','Sie unterscheiden sich besonders bei großen Ausschlägen. Eine gemischte Datenreihe hat keine einheitliche Bedeutung.'],
   ['Fehlende Beobachtung oder null?','Ein fehlender Kurs bedeutet nicht automatisch eine Rendite von null. Ein stiller Ersatz kann Volatilität künstlich senken.'],
   ['Nur überlebende Fonds?','Geschlossene schlechte Fonds auszulassen kann die beobachtete Erfolgsverteilung verbessern, ohne dass die ursprüngliche Anlageauswahl besser war.'],
   ['Tatsächlich handelbarer Kurs?','Seltene oder geglättete Bewertungen können gemessene Volatilität und Korrelation vermindern. Das wirtschaftliche Risiko verschwindet dadurch nicht.']
  ],'Ein präziser Rechenweg kann eine verzerrte Datenauswahl nicht reparieren.'),
  'Im Folgenden sind Prozentpunkte ausdrücklich gekennzeichnet. Die Rendite 8 % kann als Zahl 8 in einer Prozentpunkterechnung oder als Dezimalzahl 0,08 verarbeitet werden. Standardabweichungen unterscheiden sich dann um Faktor 100, Varianzen und Kovarianzen um Faktor 10.000; Korrelation bleibt unverändert.'
 ]),
 S('center','2. Mittelwert, Median und robuste Alternativen','a',[
  F('\\bar x=\\frac1n\\sum_{i=1}^n x_i,\\qquad \\bar x_w=\\sum_{i=1}^n w_ix_i,\\qquad \\sum_{i=1}^n w_i=1','Der einfache Mittelwert gibt jeder Beobachtung dasselbe Gewicht. Beim gewichteten Mittel muss die wirtschaftliche Bedeutung der Gewichte feststehen.',[['\\bar x,\\bar x_w','Ungewichteter bzw. gewichteter Mittelwert.'],['x_i','Beobachtung i in einer einheitlichen Maßeinheit.'],['w_i','Gewicht der Beobachtung, hier nicht negativ.'],['n,i','Beobachtungszahl und Index.']]),
  'Der Median teilt geordnete Daten in zwei Hälften. Bei ungerader Anzahl ist er die mittlere Beobachtung, bei gerader Anzahl hier das Mittel der beiden mittleren Werte. Er reagiert weniger stark auf einen einzelnen sehr großen Ausreißer, nutzt aber dessen Größe auch nicht zur Beschreibung des Durchschnittsergebnisses.',
  X('Ein Ausreißer verändert die Frage nach dem typischen Ergebnis','Fünf gleich gewichtete Jahresrenditen lauten −8 %, −2 %, 4 %, 6 % und 10 %. Danach wird nur die letzte Beobachtung von 10 % auf 60 % geändert.',[
   'Ursprünglich beträgt die Summe 10 Prozentpunkte: Mittelwert 2 %, Median 4 %. Es gibt keinen eindeutigen Modalwert, weil alle Werte nur einmal auftreten.',
   'Nach der Änderung beträgt die Summe 60 Prozentpunkte: Mittelwert 12 %, Median weiterhin 4 %. Die zusätzlichen 50 Prozentpunkte erhöhen den Mittelwert um 50/5 = 10 Prozentpunkte.',
   'Der Median beschreibt weiterhin die Mitte der geordneten Beobachtungen. Der Mittelwert zeigt dagegen die veränderte durchschnittliche Einperiodenrendite. Keiner ist pauschal der einzig richtige Wert.'
  ],'Wähle die Kennzahl nach der Frage: mittlere Position, durchschnittliches Periodenergebnis oder tatsächliches Vermögenswachstum. Für Letzteres ist bei verketteten Renditen das geometrische Mittel relevant.'),
  T(['Verfahren','Operation','Grenze'],[
   ['Modalwert','Am häufigsten auftretender Wert bzw. Kategorie.','Kann fehlen oder mehrfach vorkommen; bei stetigen Daten hängt eine modale Klasse von der Klasseneinteilung ab.'],
   ['Getrimmter Mittelwert','Entfernt einen ausdrücklich festgelegten Anteil an beiden Rändern und mittelt den Rest.','Die Beobachtungszahl sinkt; echte Extremrisiken können verdeckt werden.'],
   ['Winsorisierter Mittelwert','Ersetzt Randwerte durch die festgelegten inneren Grenzwerte und mittelt alle Positionen.','Die Zahl der Positionen bleibt gleich, aber Originalwerte wurden verändert.']
  ],'Eine robuste Alternative sollte mit Originaldaten und klarer Regel dokumentiert werden, nicht zur nachträglichen Verbesserung eines Ergebnisses dienen.')
 ]),
 S('quantiles','3. Quantile und relative Positionen','a',[
  'Ein Quantil ist eine Grenze in einer geordneten Verteilung. Quartile teilen in vier, Dezile in zehn und Perzentile in hundert Bereiche. Bei endlichen Stichproben gibt es mehrere zulässige Interpolationsregeln; Programme können deshalb bei kleinen Datensätzen unterschiedliche Zahlen ausgeben.',
  F('h=(n+1)p,\\qquad Q_p=x_{(j)}+(h-j)\\bigl(x_{(j+1)}-x_{(j)}\\bigr),\\qquad j=\\lfloor h\\rfloor','Hier verwenden wir die n+1-Positionsregel mit linearer Interpolation für innere Positionen 1 ≤ h ≤ n. An den äußeren Grenzen muss eine zusätzliche Konvention festgelegt werden.',[['Q_p','Quantil zum Anteil p, beispielsweise p = 0,25.'],['x_{(j)}','j-kleinste geordnete Beobachtung; Klammern kennzeichnen den Rang.'],['n','Zahl der Beobachtungen.'],['h,j','Rechnerische Position und abgerundete ganze Position.'],['\\lfloor h\\rfloor','Größte ganze Zahl, die h nicht übersteigt.'],['p','Gewünschter kumulierter Anteil zwischen 0 und 1.']]),
  X('Die Quantilregel ausdrücklich anwenden','Geordnete Renditen: −8 %, −2 %, 4 %, 6 %, 10 %. Verwende die angegebene n+1-Regel.',[
   'Für Q₁ ist p = 0,25 und h = 6 × 0,25 = 1,5. Die Grenze liegt zur Hälfte zwischen −8 % und −2 %: Q₁ = −5 %.',
   'Für Q₃ ist h = 4,5. Die Grenze liegt zwischen 6 % und 10 %: Q₃ = 8 %. Der Interquartilsabstand beträgt 8 − (−5) = 13 Prozentpunkte.',
   'Der Interquartilsabstand beschreibt die Breite der mittleren Hälfte nach dieser Regel. Er ist keine Aussage darüber, dass künftige Renditen sicher in diesem Intervall liegen.'
  ],'Bei Aufgaben zuerst die vorgegebene Quantilkonvention verwenden. Unterschiedliche Softwarewerte sind ohne Konventionsprüfung noch kein Rechenfehler.')
 ]),
 S('dispersion','4. Streuung aus Abständen aufbauen','a',[
  F('MAD=\\frac1n\\sum_{i=1}^n|x_i-\\bar x|,\\qquad s^2=\\frac{\\sum_{i=1}^n(x_i-\\bar x)^2}{n-1},\\qquad s=\\sqrt{s^2}','Absolute Abweichung verhindert die Aufhebung positiver und negativer Abstände. Die Varianz quadriert Abstände und gewichtet große Ausschläge stärker; ihre Wurzel stellt die ursprüngliche Einheit wieder her.',[['MAD','Hier: mittlere absolute Abweichung vom arithmetischen Mittel, nicht Median Absolute Deviation.'],['s^2,s','Stichprobenvarianz und Stichprobenstandardabweichung.'],['x_i,\\bar x','Beobachtung und Stichprobenmittel.'],['n,i','Beobachtungszahl n > 1 und Index.']]),
  X('Dieselben Daten vollständig nachrechnen','Erneut −8 %, −2 %, 4 %, 6 %, 10 %, Mittelwert 2 %. Rechne zunächst in Prozentpunkten.',[
   T(['Rendite (%)','Abstand (Prozentpunkte)','Absoluter Abstand','Quadrierter Abstand'],[
    ['−8','−10','10','100'],['−2','−4','4','16'],['4','2','2','4'],['6','4','4','16'],['10','8','8','64'],['Summe','0','28','200']
   ],'Die bloße Summe der vorzeichenbehafteten Abstände ist null und eignet sich daher nicht als Streuungsmaß.'),
   F('MAD=28/5=5{,}6,\\qquad s^2=200/4=50,\\qquad s=\\sqrt{50}\\approx7{,}071','MAD und Standardabweichung stehen in Prozentpunkten; die Varianz steht in quadrierten Prozentpunkten.',[['MAD','Mittlere absolute Abweichung in Prozentpunkten.'],['s^2','Stichprobenvarianz in Prozentpunkten zum Quadrat.'],['s','Stichprobenstandardabweichung in Prozentpunkten.']]),
   'Mit Dezimalrenditen beträgt die Varianz 0,005 und die Standardabweichung 0,07071, also wieder 7,071 %. Die Zahl 50 als Dezimalvarianz weiterzuverwenden würde das Risiko massiv überzeichnen.'
  ],'Eine Standardabweichung beschreibt Streuung um das Mittel. Ohne weitere Verteilungsannahme ist sie weder ein maximaler Verlust noch automatisch ein bestimmtes Wahrscheinlichkeitsintervall.')
 ]),
 S('degrees-freedom','5. Warum n−1 und wann stattdessen n gilt','a',[
  'Wenn die fünf Zahlen die vollständige interessierende Grundgesamtheit darstellen, wird deren Varianz durch fünf geteilt: 40 statt 50. Wenn sie eine unabhängige Stichprobe aus einer größeren Verteilung sind und deren unbekannte Varianz geschätzt werden soll, korrigiert n−1 die systematische Unterschätzung durch das zuvor geschätzte Mittel.',
  F('\\sum_{i=1}^n(x_i-\\bar x)=0,\\qquad E\\!\\left[\\sum_{i=1}^n(X_i-\\bar X)^2\\right]=(n-1)\\sigma^2','Nach Schätzung des Mittels können nicht alle Abweichungen unabhängig gewählt werden: Ihre Summe ist fest null. Die Erwartungswertbeziehung gilt bei unabhängigen, identisch verteilten Beobachtungen mit endlicher Varianz.',[['x_i,\\bar x','Beobachtete Werte und ihr Mittel.'],['X_i,\\bar X','Zufällige Stichprobenwerte und zufälliges Stichprobenmittel vor Beobachtung.'],['E[\\cdot]','Erwartungswert über mögliche Stichproben.'],['\\sigma^2','Unbekannte Varianz der zugrunde liegenden Verteilung.'],['n,i','Stichprobengröße und Index.']]),
  'Die Korrektur macht s² unter diesen Voraussetzungen unverzerrt, nicht automatisch s. Die Wurzel ist nicht linear. Bei abhängigen Zeitreihen genügt das Schlagwort „Freiheitsgrade“ außerdem nicht, um sämtliche Schätzeigenschaften zu rechtfertigen.',
  F('SE(\\bar X)\\approx\\frac{s}{\\sqrt n}','Das Risiko einer einzelnen Rendite ist von der Unsicherheit ihres geschätzten Mittelwerts zu trennen. Diese Schätzung setzt unabhängige identisch verteilte Beobachtungen mit endlicher Varianz voraus.',[['SE(\\bar X)','Standardfehler des Stichprobenmittels.'],['s','Stichprobenstandardabweichung der einzelnen Beobachtungen.'],['n','Stichprobengröße.'],['\\bar X','Zufälliges Stichprobenmittel.']]),
  'Mehr Beobachtungen machen den Mittelwert präziser, nicht eine einzelne Anlageperiode automatisch weniger volatil.'
 ]),
 S('downside','6. Unterhalb eines Ziels: Semideviation und Downside Deviation','d',[
  F('DD_B=\\sqrt{\\frac1n\\sum_{i=1}^n\\min(x_i-B,0)^2}','Diese empirische Zielabweichung mittelt über alle n Beobachtungen. Werte am oder über dem Ziel tragen null bei; negative Abstände werden quadriert.',[['DD_B','Downside Deviation relativ zum Ziel B in derselben Einheit wie die Renditen.'],['B','Vorgegebenes Renditeziel für dieselbe Periode.'],['x_i','Beobachtete Rendite.'],['n,i','Gesamte Beobachtungszahl und Index.'],['\\min(x_i-B,0)','Nur der negative Zielabstand, ansonsten null.']]),
  'Bei Ziel gleich Mittelwert betrachtet man die untere Halbseite und spricht von Semideviation. In einer Stichproben-Schätzkonvention wird auch durch n−1 statt n geteilt. Das Teilen allein durch die Anzahl der Unterschreitungen misst dagegen die bedingte Schwere der schlechten Beobachtungen und entfernt den direkten Häufigkeitseffekt. Deshalb immer Ziel und Nenner nennen.',
  X('Gleiches Datenset, verschiedene Ziele','Die Renditen sind −8 %, −2 %, 4 %, 6 %, 10 %. Wir verwenden ausdrücklich den Nenner n = 5.',[
   F('DD_0=\\sqrt{(64+4)/5}\\approx3{,}688','Beim Ziel null tragen nur die tatsächlichen Verluste −8 % und −2 % bei.',[['DD_0','Downside Deviation um null in Prozentpunkten.']]),
   F('DD_2=\\sqrt{(100+16)/5}\\approx4{,}817','Beim Ziel 2 % zählen Abstände −10 und −4 Prozentpunkte. Das höhere Ziel erhöht hier die Abweichung.',[['DD_2','Semideviation um den Mittelwert 2 %, mit Nenner 5, in Prozentpunkten.']]),
   'Mit n−1-Konvention beträgt die Semideviation √(116/4) ≈ 5,385 Prozentpunkte. Mit Nenner 2 ergäbe sich √(116/2) ≈ 7,616; das beantwortet die andere Frage nach der mittleren quadrierten Unterschreitung nur in den schlechten Perioden.'
  ],'Downside-Maße passen zu Mindestzielen. Sie liefern aber allein weder die maximale Verlusthöhe noch die Wahrscheinlichkeit einer bestimmten zukünftigen Unterschreitung.')
 ]),
 S('relative-risk','7. Variationskoeffizient und Skalierung','d',[
  F('CV=\\frac{s}{\\bar x},\\qquad \\bar x>0','Der Variationskoeffizient stellt Streuung relativ zum positiven Mittelwert dar. Zähler und Nenner müssen dieselbe Einheit und Frequenz besitzen.',[['CV','Dimensionsloser Variationskoeffizient.'],['s','Standardabweichung.'],['\\bar x','Positiver Mittelwert.']]),
  X('Absolutes und relatives Risiko sind unterschiedliche Rangfolgen','Anlage A hat durchschnittlich 6 % Rendite und 9 % Standardabweichung, Anlage B 10 % und 12 %.',[
   'A schwankt absolut weniger: 9 % statt 12 %. Ihr CV beträgt jedoch 9/6 = 1,5; B hat CV = 12/10 = 1,2.',
   'B besitzt in diesem Sinn weniger Streuung je Einheit positiver Durchschnittsrendite. Das beweist keine allgemeine Überlegenheit: Anlagehorizont, Verlustschwelle und Portfoliozusammenhang fehlen.',
   'Bei Mittelwert nahe null wird der Quotient instabil. Ein negativer Mittelwert würde einen negativen CV erzeugen, dessen scheinbar kleinerer Wert keine bessere Anlage bedeutet.'
  ],'CV ist weder eine vollständige Präferenzfunktion noch die Sharpe Ratio, die eine Überschussrendite gegenüber einem Referenzzins verwendet.')
 ]),
 S('shape','8. Schiefe und Kurtosis zeigen, was Varianz auslässt','b',[
  F('\\gamma_1=\\frac{E[(X-\\mu)^3]}{\\sigma^3},\\qquad \\beta_2=\\frac{E[(X-\\mu)^4]}{\\sigma^4},\\qquad \\gamma_2=\\beta_2-3','Dritte Potenzen behalten das Vorzeichen und beschreiben Asymmetrie. Vierte Potenzen gewichten extreme standardisierte Abstände stark. Dies sind Populationsmomente; sie setzen existierende Momente und positive Varianz voraus.',[['X,\\mu','Zufallsvariable und ihr Erwartungswert.'],['\\sigma','Positive Standardabweichung.'],['E[\\cdot]','Erwartungswert.'],['\\gamma_1','Momentenschiefe.'],['\\beta_2','Kurtosis; für die Normalverteilung gleich 3.'],['\\gamma_2','Exzess-Kurtosis; für die Normalverteilung gleich 0.']]),
  'Positive Schiefe beschreibt einen vergleichsweise ausgeprägten rechten Rand, negative Schiefe einen linken. Eine Strategie mit vielen kleinen Gewinnen und seltenen großen Verlusten kann links-schief sein. Der Mittelwert allein kann deren Verlustcharakter schlecht vermitteln. Die oft genannte Reihenfolge von Mittelwert, Median und Modus ist eine Orientierung für bestimmte Formen, kein allgemeingültiger Satz.',
  X('Gleicher Mittelwert und gleiche Varianz, andere Extremrisiken','Verteilung A liefert −1 oder +1 mit je 50 %. Verteilung B liefert mit 90 % den Wert null und mit je 5 % die Werte −√10 und +√10.',[
   'Beide Verteilungen sind symmetrisch um null. A hat Varianz 1; B hat 0,05 × 10 + 0,05 × 10 = 1. Beide besitzen also Standardabweichung 1.',
   'Das vierte Moment von A ist 1. Für B ist es 0,05 × 100 + 0,05 × 100 = 10. Weil die Varianz jeweils 1 beträgt, sind die Kurtosiswerte 1 und 10.',
   'A erreicht nie einen Betrag über 1. B erreicht selten den viel größeren Betrag √10 ≈ 3,162. Gleiches Mittel und gleiche Varianz machen diese Verteilungen nicht austauschbar.'
  ],'Hohe Kurtosis weist auf ausgeprägte extreme standardisierte Abstände hin. Sie ist keine direkte Zahl für die Wahrscheinlichkeit eines konkret gewählten Verlusts; dafür braucht man die Verteilung.'),
  'Stichprobenprogramme verwenden unterschiedliche Korrekturen für Schiefe und Kurtosis. Insbesondere muss klar sein, ob „Kurtosis“ das vierte standardisierte Moment oder bereits den Exzess bezeichnet. Aus wenigen Beobachtungen sind diese Kennzahlen sehr unsicher.'
 ]),
 S('shape-figure','9. Gleiche Volatilität in einer Dichtegrafik','b',[
  G({id:'equal-variance-tails',title:'Gleiche Varianz bedeutet nicht dieselbe Verteilungsform',
   caption:'Zwei konstruierte stetige Verteilungen mit Mittelwert 0 und Varianz 1. Die Mischung besteht zu 90 % aus einer Normalverteilung mit Standardabweichung 0,5 und zu 10 % aus einer mit Standardabweichung √7,75.',
   reading:'Die Mischung sammelt mehr Masse nahe null und besitzt zugleich schwerere äußere Ränder. Dichtehöhe ist keine Punktwahrscheinlichkeit: Wahrscheinlichkeiten entsprechen Flächen über Intervallen. Die Grafik zeigt einen Ausschnitt von −5 bis +5 Standardabweichungen; beide Verteilungen sind außerhalb dieses Ausschnitts nicht exakt null.',
   plot:{x:[-5,5],y:[0,.8],xTicks:[-4,-2,0,2,4],xLabel:'Abweichung in Einheiten der Gesamtstandardabweichung',yLabel:'Wahrscheinlichkeitsdichte',series:[
    {name:'Normalverteilung N(0,1)',points:Array.from({length:201},(_,i)=>{const x=-5+i/20;return[x,phi(x,1)];})},
    {name:'Mischung mit seltenen großen Ausschlägen',points:Array.from({length:201},(_,i)=>{const x=-5+i/20;return[x,.9*phi(x,.5)+.1*phi(x,Math.sqrt(7.75))];}),dash:'8 5'}
   ]}}),
  F('0{,}9\\cdot0{,}5^2+0{,}1\\cdot(\\sqrt{7{,}75})^2=1','Da beide Mischungskomponenten denselben Mittelwert null besitzen, ist die Mischungsvarianz hier das gewichtete Mittel der Komponentenvarianzen. Bei verschiedenen Komponentenmitteln käme die Streuung zwischen diesen Mitteln hinzu.',[['0{,}9,0{,}1','Wahrscheinlichkeiten der beiden Komponenten.'],['0{,}5,\\sqrt{7{,}75}','Standardabweichungen der Komponenten.']])
 ]),
 S('covariance','10. Gemeinsame Abweichungen: Kovarianz und Korrelation','c',[
  F('s_{XY}=\\frac{\\sum_{i=1}^n(x_i-\\bar x)(y_i-\\bar y)}{n-1},\\qquad r_{XY}=\\frac{s_{XY}}{s_Xs_Y}','Gleichgerichtete Abweichungen liefern positive Produkte, entgegengesetzte negative. Standardisierung durch beide Standardabweichungen ergibt eine einheitslose lineare Beziehung.',[['s_{XY}','Stichprobenkovarianz, Einheit X mal Einheit Y.'],['r_{XY}','Stichprobenkorrelation, zwischen −1 und +1.'],['x_i,y_i','Zeitgleich gepaarte Beobachtungen.'],['\\bar x,\\bar y','Mittelwerte beider Reihen.'],['s_X,s_Y','Positive Stichprobenstandardabweichungen.'],['n,i','Zahl vollständiger Paare und Index.']]),
  X('Korrelation aus fünf zeitgleichen Paaren','X = (−8, −2, 4, 6, 10) %, Y = (−2, 4, 0, 8, 10) %. Die Mittelwerte sind 2 % und 4 %.',[
   T(['Paar','X-Abstand','Y-Abstand','Produkt'],[['1','−10','−6','60'],['2','−4','0','0'],['3','2','−4','−8'],['4','4','4','16'],['5','8','6','48']], 'Abstände in Prozentpunkten; Produkte in quadrierten Prozentpunkten.'),
   F('s_{XY}=116/4=29,\\qquad s_X^2=50,\\qquad s_Y^2=26,\\qquad r_{XY}=\\frac{29}{\\sqrt{50}\\sqrt{26}}\\approx0{,}8043','Die Summe der Produkte beträgt 116. Beide Varianzen müssen mit derselben n−1-Konvention berechnet werden.',[['s_{XY}','Kovarianz in Prozentpunkten zum Quadrat.'],['s_X^2,s_Y^2','Varianzen in derselben quadrierten Einheit.'],['r_{XY}','Dimensionslose Korrelation.']]),
   'In Dezimalrenditen wären Kovarianz 0,0029 und Varianzen 0,005 sowie 0,0026. Der Korrelationsquotient bleibt exakt gleich.',
   'Wird Y allein mit einer positiven Konstanten multipliziert, ändern sich seine Standardabweichung und die Kovarianz proportional. Ihr Verhältnis bleibt gleich; bei einer negativen Multiplikation wechselt das Korrelationsvorzeichen.'
  ],'Korrelation beschreibt gemeinsame Bewegungen relativ zur jeweiligen Streuung. Für Portfoliorisiko braucht man zusätzlich die Streuungen selbst.')
 ]),
 S('limits','11. Null Korrelation, Zeitabhängigkeit und Modellgrenzen','a b c d',[
  X('Unkorreliert ist nicht allgemein unabhängig','X nimmt −1, 0 und +1 mit je einem Drittel an. Y = X² ist vollständig durch X bestimmt.',[
   'E[X] = 0 und E[Y] = 2/3. Die Produkte X·Y sind −1, 0, +1 und mitteln sich zu null.',
   'Daher ist Cov(X,Y) = E[XY] − E[X]E[Y] = 0. Beide Größen haben positive Varianz, also ist auch die Korrelation null.',
   'Trotzdem gilt: Wer X kennt, kennt Y exakt. Die Beziehung ist gekrümmt und wird von einer linearen Kennzahl nicht erfasst.'
  ],'Unabhängigkeit impliziert bei existierenden zweiten Momenten null Kovarianz. Die Umkehrung benötigt zusätzliche Voraussetzungen, beispielsweise gemeinsame Normalverteilung.'),
  'Eine hohe Korrelation beweist keine Ursache. Gemeinsame Treiber, Ausreißer oder eine Mischung unterschiedlicher Marktphasen können die Kennzahl prägen. Scatterplots, Zeitsynchronität und wirtschaftliche Erklärung gehören deshalb zur Auswertung.',
  F('\\operatorname{Var}\\!\\left(\\sum_{t=1}^m R_t\\right)=\\sum_{t=1}^m\\operatorname{Var}(R_t)+2\\sum_{i<j}\\operatorname{Cov}(R_i,R_j)','Die bekannte Wurzel-der-Zeit-Regel entsteht erst, wenn die Kovarianzen verschwinden und die Periodenvarianzen gleich sind. Die Gleichung betrifft eine Summe, bei einfachen Renditen nicht automatisch die exakte verkettete Mehrperiodenrendite.',[['R_t','Rendite der Periode t; logarithmische Renditen sind über die Zeit additiv.'],['m,t,i,j','Anzahl der Perioden und Zeitindizes; i < j zählt jedes Paar einmal.'],['\\operatorname{Var},\\operatorname{Cov}','Varianz und Kovarianz.']]),
  'Für eine Anlageentscheidung sollten Lage, Gesamtstreuung, Zielunterschreitungen, Verteilungsform und Beziehungen zu anderen Anlagen gemeinsam betrachtet werden. Eine einzelne kleine Volatilitätszahl reicht besonders bei illiquiden Bewertungen oder seltenen Verlusten nicht aus.'
 ])
],related:[{unit:'return-types',section:'averages',label:'Arithmetisches Mittel und tatsächliches Vermögenswachstum unterscheiden'},{unit:'portfolio-math',section:'two-assets',label:'Kovarianz in die Portfoliovarianz einsetzen'},{unit:'returns',section:'return-meanings',label:'Historisches Ergebnis und erwartete Rendite auseinanderhalten'}],
 sources:[
 {title:'CFA Institute: Statistical Measures of Asset Returns – fachlicher Einstieg',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/statistical-measures-of-asset-returns'},
 {title:'NIST: Measures of Skewness and Kurtosis – Konventionen',url:'https://www.itl.nist.gov/div898/handbook/eda/section3/eda35b.htm'},
 {title:'OpenStax: Measures of the Spread of the Data',url:'https://openstax.org/books/introductory-statistics/pages/2-7-measures-of-the-spread-of-the-data'}
 ],review:{status:'draft',date:'2026-09-18',note:'Eigene Datensätze; explizite Einheiten, Nenner und Quantilkonventionen. Gleichverteilte Momente und Mischungsgrafik getrennt berechnet.'}};
