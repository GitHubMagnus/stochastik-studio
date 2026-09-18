const {Q,F}=require('../author.cjs');
const q=(id,pool,objectives,stem,options,correct,solution,extra)=>Q('is-'+id,'income-statement','statements',pool,objectives,stem,options,correct,solution,extra);
module.exports=[
 q('01','practice','a','A company receives €2,400 on 1 October for a service provided evenly over the next 12 months. Its year ends on 31 December. Revenue from this contract for the year is closest to:',[
  ['€600','Drei von zwölf Leistungsmonaten sind erbracht. Der Zahlungstermin ändert diese Zuordnung nicht.'],
  ['€1,800','Das ist die verbleibende Vertragsverbindlichkeit, nicht der bereits verdiente Erlös.'],
  ['€2,400','Die gesamte Einzahlung ist noch nicht als Leistung verdient.']
 ],0,[F('R=2400\\frac3{12}=600','Nur Oktober bis Dezember gehören zur laufenden Jahresleistung.',[['R','Im laufenden Jahr erfasster Erlös in Euro.']]),'Die verbleibenden 1.800 € werden bei Erfüllung in der nächsten Periode als Erlös erfasst.'],{section:'revenue'}),
 q('02','practice','a','A device and a two-year support service are distinct performance obligations. Their stand-alone prices are €800 and €400. A customer pays €1,050 for the package. Revenue recognized when only the device is delivered is closest to:',[
  ['€350','Dieser Betrag ist dem Support zugeordnet und bei noch ausstehender Leistung nicht verdient.'],
  ['€700','Der Anteil des Geräts am gesamten Einzelverkaufswert beträgt zwei Drittel.'],
  ['€800','Der Einzelverkaufspreis muss um den anteiligen Paketrabatt angepasst werden.']
 ],1,[F('R_D=1050\\frac{800}{800+400}=700','Die Preiszuordnung wird vor der zeitlichen Erfassung vorgenommen.',[['R_D','Dem Gerät zugeordneter Erlös in Euro.']]),'350 € entfallen auf den Support. Der Fall unterstellt relative Preiszuordnung ohne gesondert zuzuweisenden Rabatt.'],{section:'revenue'}),
 q('03','practice','b','Two otherwise identical firms pay €90 for a qualifying expenditure at the beginning of the year. Firm A expenses it; Firm B capitalizes it and depreciates it straight-line over three years with no residual value. Ignoring taxes, Firm B has:',[
  ['€30 higher profit and €60 higher assets','30 € ist die Abschreibung, nicht der Unterschied zum Sofortaufwand.'],
  ['€60 higher profit and €60 higher assets','Der Aufwand sinkt von 90 auf 30; der Restbuchwert beträgt ebenfalls 60.'],
  ['€90 higher profit and €90 higher assets','Auch die aktivierte Variante muss im ersten Jahr Abschreibung erfassen.']
 ],1,[F('\\Delta NI=90-\\frac{90}{3}=60,\\qquad\\Delta A=90-30=60','Die Differenz in Gewinn und Vermögenswert folgt aus demselben noch nicht verbrauchten Anteil.',[['\\Delta NI','Gewinnunterschied B minus A im ersten Jahr.'],['\\Delta A','Unterschied der Vermögenswerte am Jahresende.']]),'Die Zahlung von 90 ist in beiden Unternehmen gleich. Die spätere Ergebnisverteilung unterscheidet sich.'],{section:'expenses'}),
 q('04','practice','c','Net income is €84 million, including a €20 million pre-tax gain on selling a building. The applicable tax rate is 30%. Assuming no other adjustments, income excluding the gain is closest to:',[
  ['€64 million','Der Vorsteuergewinn darf nicht vollständig aus einem Nachsteuerergebnis abgezogen werden.'],
  ['€70 million','Der Nachsteuereffekt ist 14 Mio. €.'],
  ['€78 million','6 Mio. € ist die Steuer auf den Gewinn, nicht der herauszurechnende Nettogewinn.']
 ],1,[F('NI_{adj}=84-20(1-0{,}30)=70','Die Anpassung verwendet denselben Nachsteuermaßstab wie der Ausgangswert.',[['NI_{adj}','Um den Veräußerungsgewinn bereinigter Nettogewinn in Mio. Euro.']]),'Damit ist nur dieser identifizierte Effekt entfernt; weitere Anpassungen können erforderlich sein.'],{section:'nonrecurring'}),
 q('05','practice','c','Following new information about usage, a company revises the remaining useful life of equipment from four years to six years. The most appropriate general treatment is to:',[
  ['restate all prior depreciation as an error.','Neue Informationen über die Restnutzung sind grundsätzlich eine Schätzungsänderung, kein Beweis für einen früheren Fehler.'],
  ['apply the revised estimate prospectively.','Die neue Restnutzung verändert die Abschreibungen ab der Schätzungsänderung.'],
  ['recognize the change directly in shareholders’ equity.','Eine normale Schätzungsänderung wird nicht pauschal außerhalb der Gewinnrechnung gebucht.']
 ],1,['Nutzungsdauer ist eine Schätzung. Neue relevante Informationen verändern die Verteilung des verbleibenden abschreibbaren Betrags über die künftigen Perioden.','Anders zu beurteilen wären ein wesentlicher Vorperiodenfehler oder ein Methodenwechsel. Die Frage beschreibt ausdrücklich neue Informationen.'],{section:'nonrecurring'}),
 q('06','practice','d','A firm has 800,000 common shares on 1 January and issues 240,000 shares for cash on 1 July. Net income is €2.4 million and the current annual dividend on cumulative preferred shares is €0.1 million, whether declared or not. Basic EPS is closest to:',[
  ['€2.21','Dieser Betrag verwendet die Jahresendzahl statt der gewichteten Aktienzahl.'],
  ['€2.50','Gewichtete Aktienzahl 920.000; verfügbarer Stammgewinn 2,3 Mio. €.'],
  ['€2.61','Dieser Betrag zieht den Anspruch der kumulativen Vorzugsaktionäre nicht ab.']
 ],1,[F('N_W=800000+240000\\frac6{12}=920000','Die neue Emission zählt ein halbes Jahr.',[['N_W','Gewichtete durchschnittliche Stammaktienzahl.']]),F('EPS_B=\\frac{2400000-100000}{920000}=2{,}50','Kumulative Vorzugsdividenden werden für die Periode berücksichtigt.',[['EPS_B','Basic EPS in Euro je Aktie.']])],{section:'basic-eps'}),
 q('07','practice','d','A company has 600,000 common shares throughout a year until a three-for-one split on 1 December. It has no other share transactions or preferred shares. Annual net income is €3.6 million. Basic EPS after adjusting for the split is:',[
  ['€2.00','Die gesamte vergleichbare Aktienbasis wird auf 1,8 Mio. Stück umgerechnet.'],
  ['€5.14','Dies gewichtet die reine Stückelungsänderung fälschlich nur mit einem Monat.'],
  ['€6.00','Dies ignoriert die neue Stückelung vollständig.']
 ],0,[F('EPS_B=\\frac{3600000}{600000\\cdot3}=2','Ein Split bringt keine neuen Ressourcen; die Nenneranpassung erfolgt rückwirkend.',[['EPS_B','Basic EPS in Euro je Aktie nach Split.']])],{section:'basic-eps'}),
 q('08','practice','d','A firm has 150,000 options outstanding for the full year, each allowing the purchase of one share for €24. The average market price is €40. Under the simplified treasury stock method, incremental shares are:',[
  ['60,000','Ausübung schafft 150.000 Aktien; angenommene Rückkäufe beseitigen rechnerisch 90.000.'],
  ['90,000','Dies ist die Zahl der angenommen zurückgekauften Aktien.'],
  ['150,000','Die mit dem Ausübungserlös möglichen Rückkäufe wurden nicht berücksichtigt.']
 ],0,[F('\\Delta N=150000\\left(1-\\frac{24}{40}\\right)=60000','Nur die netto zusätzlich entstehenden Aktien erhöhen den EPS-Nenner.',[['\\Delta N','Inkrementelle Aktienzahl aus den Optionen.']]),'Der durchschnittliche Marktpreis der Periode ist entscheidend, nicht der Ausübungspreis als Nenner.'],{section:'dilution'}),
 q('09','practice','d','Income available to common shareholders is €4 million and weighted-average common shares are 1 million. A convertible bond, outstanding all year, has annual interest of €80,000 and converts into 100,000 shares. The tax rate is 25%. With no other potentially dilutive instruments, diluted EPS is closest to:',[
  ['€3.64','Hier wurde der entfallende Nachsteuerzins im Zähler vergessen.'],
  ['€3.69','Nachsteuerzins 60.000 €; 4,06 Mio. € werden durch 1,1 Mio. Aktien geteilt.'],
  ['€3.71','Dieser Betrag addiert den Vorsteuerzins statt des Nachsteuerzinses.']
 ],1,[F('EPS_D=\\frac{4000000+80000(1-0{,}25)}{1000000+100000}\\approx3{,}6909','Die unterstellte Wandlung verändert Zähler und Nenner.',[['EPS_D','Diluted EPS in Euro je Aktie.']]),'Inkrementelles EPS ist 60.000/100.000 = 0,60 €. Es liegt unter Basic EPS von 4 €; die Anleihe ist verwässernd.'],{section:'dilution'}),
 q('10','practice','d','After including dilutive options, a firm has adjusted common earnings of €5 million and 2 million shares. A convertible preferred issue would add €0.3 million to earnings and 100,000 shares. The preferred issue should be:',[
  ['included because it increases the number of shares.','Eine steigende Aktienzahl genügt nicht; zugleich steigt der verfügbare Gewinn.'],
  ['excluded because its incremental EPS exceeds current adjusted EPS.','Inkrementelles EPS 3 € liegt über dem Zwischenwert von 2,50 €.'],
  ['included because preferred dividends are tax-deductible.','Vorzugsdividenden sind kein hier abzugsfähiger Fremdkapitalzins; zudem ist die Wandlung antidilutiv.']
 ],1,[F('EPS_{current}=\\frac{5}{2}=2{,}50,\\qquad EPS_{increment}=\\frac{0{,}3}{0{,}1}=3','Millioneneinheiten kürzen sich; die Einbeziehung würde EPS erhöhen.',[['EPS_{current}','Zwischenwert in Euro je Aktie.'],['EPS_{increment}','Zusätzlicher Gewinn je zusätzlicher Aktie in Euro.']]),'Die Ausschlussentscheidung wird gegen den bereits angepassten EPS-Wert getroffen.'],{section:'antidilution'}),
 q('11','practice','d','A company reports a loss from continuing operations attributable to common shareholders of €900,000 and has 300,000 weighted-average shares. Options would add 30,000 shares without changing earnings. There are no other items or instruments. Diluted EPS is:',[
  ['−€3.30','Zusätzliche Aktien werden nicht zum Verlust addiert; der Betrag verwechselt Einheiten.'],
  ['−€3.00','Die Optionen wären antidilutiv und werden ausgeschlossen.'],
  ['−€2.73','Dies würde den Verlust je Aktie verringern und darf im beschriebenen Fall nicht als Verwässerung angesetzt werden.']
 ],1,[F('EPS_B=\\frac{-900000}{300000}=-3','Eine Einbeziehung der Optionen würde den Betrag auf rund −2,73 € verbessern.',[['EPS_B','Basic EPS und hier zugleich Diluted EPS in Euro je Aktie.']]),'Der Fall nennt ausdrücklich den Verlust aus fortgeführten Aktivitäten als maßgebliche Ergebnisgröße.'],{section:'antidilution'}),
 q('12','practice','e','Revenue rises from €500 million to €600 million, while gross profit rises from €200 million to €210 million. The most accurate statement is that:',[
  ['gross margin rises because gross profit rises.','Die absolute Ergebnisgröße und die Marge müssen getrennt betrachtet werden.'],
  ['gross margin falls by five percentage points.','Die Marge sinkt von 40 % auf 35 %.'],
  ['gross margin falls by 2.5 percentage points.','5 % Wachstum des Bruttogewinns ist nicht die Änderung seiner Umsatzquote.']
 ],1,[F('g_0=\\frac{200}{500}=40\\%,\\qquad g_1=\\frac{210}{600}=35\\%','Common-Size setzt beide Gewinne zum Umsatz derselben Periode in Beziehung.',[['g_0,g_1','Bruttomarge in alter und neuer Periode.']]),'Der Umsatz steigt schneller als der Bruttogewinn. Die Differenz von fünf Prozentpunkten ist keine prozentuale Veränderungsrate.'],{section:'common-size'}),
 q('a1','mock-a','d','At the start of a year, a company has 1.2 million common shares. On 1 April it issues 0.4 million shares for cash, and on 1 October it repurchases 0.2 million shares. Net income is €4.65 million; cumulative preferred dividends for the year are €0.3 million. Basic EPS is closest to:',[
  ['€3.00','Der verfügbare Gewinn von 4,35 Mio. € wird durch 1,45 Mio. gewichtete Aktien geteilt.'],
  ['€3.11','Dieser Betrag verwendet die Jahresendzahl von 1,4 Mio. Aktien statt 1,45 Mio. gewichteter Aktien.'],
  ['€3.21','4,65/1,45 ignoriert die Vorzugsdividenden.']
 ],0,[F('N_W=1{,}2+0{,}4\\frac9{12}-0{,}2\\frac3{12}=1{,}45,\\quad EPS_B=\\frac{4{,}65-0{,}30}{1{,}45}=3','Emission und Rückkauf wirken für unterschiedliche Zeiträume.',[['N_W','Gewichtete Aktienzahl in Mio. Stück.'],['EPS_B','Basic EPS in Euro je Aktie.']])],{section:'basic-eps'}),
 q('a2','mock-a','a e','An online marketplace acts as an agent. A customer pays €250, of which €225 is owed to the supplier. The marketplace earns the remaining fee after completing its only performance obligation. The marketplace’s revenue from this transaction is:',[
  ['€25','Als Agent erfasst das Unternehmen seine verdiente Vermittlungsvergütung.'],
  ['€225','Dieser Betrag gehört dem Lieferanten und ist kein eigener Erlös des Agenten.'],
  ['€250','Der Bruttobetrag wäre ohne weitere Voraussetzungen kein sachgerechter Agentenumsatz.']
 ],0,['Die Aufgabe legt die Agentenstellung ausdrücklich fest. Der eigene Anspruch ist die Gebühr von 250 − 225 = 25 €.','Ein Prinzipal-/Agentenunterschied kann Umsatz und Umsatzmarge stark verändern. Er verändert nicht automatisch den wirtschaftlich verdienten Betrag.'],{section:'revenue'}),
 q('b1','mock-b','d','Income available to common shareholders is €3 million and there are 1 million weighted-average common shares. All year, 100,000 options with an exercise price of €20 are outstanding; the average share price is €25. No other instruments exist. Diluted EPS is closest to:',[
  ['€2.73','Hier werden sämtliche 100.000 Optionsaktien ohne angenommenen Rückkauf addiert.'],
  ['€2.94','Netto zusätzliche Aktien sind 20.000; 3 Mio. / 1,02 Mio. ergibt rund 2,94 €.'],
  ['€3.00','Die im Geld liegenden Optionen verwässern den positiven Gewinn.']
 ],1,[F('\\Delta N=100000\\left(1-\\frac{20}{25}\\right)=20000,\\quad EPS_D=\\frac{3000000}{1020000}\\approx2{,}9412','Die Ausübungserlöse finanzieren rechnerisch den Rückkauf von 80.000 Aktien.',[['\\Delta N','Zusätzliche Aktienzahl.'],['EPS_D','Diluted EPS in Euro je Aktie.']])],{section:'dilution'}),
 q('b2','mock-b','b e','Holding revenue constant and ignoring taxes, a company lengthens the estimated remaining useful lives of its depreciable assets. In the current year, the most likely direct effect is:',[
  ['lower depreciation expense and a higher operating margin.','Ein über mehr Perioden verteilter Restbetrag senkt den aktuellen Aufwand und erhöht EBIT relativ zum unveränderten Umsatz.'],
  ['higher operating cash receipts and a higher gross margin.','Eine geänderte Schätzung erzeugt keine zusätzlichen Kundeneinzahlungen.'],
  ['lower asset carrying amounts and a lower operating margin.','Geringere Abschreibung lässt den Restbuchwert höher und die operative Marge höher ausfallen.']
 ],0,['Die Frage isoliert den direkten Abschreibungseffekt ohne Steuer- oder Umsatzänderung. Ein höheres Ergebnis kann hier vollständig aus einer geänderten Schätzung entstehen.','Eine wirtschaftliche Verbesserung der Nutzung ist damit nicht bewiesen. Analytisch sind die neue Schätzung und ihre Begründung zu prüfen.'],{section:'expenses'})
];
