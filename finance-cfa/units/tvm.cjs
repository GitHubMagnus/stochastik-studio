const {F,T,X,S,G}=require('../author.cjs');
module.exports={id:'tvm',intro:[
 'Bewertung bringt Zahlungen mit verschiedenen Zeitpunkten auf eine gemeinsame Basis. Ein zukünftiger Geldbetrag wird nicht kleiner gerechnet, weil er unwichtig wäre, sondern weil ein heute angelegter Betrag bis dahin wachsen kann. Der passende heutige Betrag und die spätere Zahlung beschreiben denselben wirtschaftlichen Anspruch unter den angegebenen Bedingungen.',
 'Zeitwertrechnung verbindet deshalb sehr unterschiedliche Instrumente. Eine Rente ist eine Summe einzelner Zahlungen, eine Anleihe eine Rente plus Rückzahlung, eine Aktie eine Folge erwarteter Eigentümerzahlungen. Replikation geht einen Schritt weiter: Identische Zahlungsprofile müssen unter geeigneten Marktannahmen denselben Preis haben.'
],sections:[
 S('single-cashflow','1. Aufzinsen und Abzinsen sind inverse Rechnungen','a',[
  F('V_{t+1}=V_t(1+r),\\qquad FV_n=PV_0(1+r)^n,\\qquad PV_0=\\frac{FV_n}{(1+r)^n}','Der Faktor 1 + r wird pro Periode angewendet. Durch Division erhält man den Betrag, der am Anfang zum gegebenen Endwert anwachsen würde.',[['V_t,V_{t+1}','Vermögen an aufeinanderfolgenden Periodenenden.'],['PV_0','Barwert heute.'],['FV_n','Endwert nach n Perioden.'],['r','Effektiver Zins pro verwendeter Periode, hier größer als −1.'],['n,t','Anzahl der Perioden bzw. Zeitindex.']]),
  X('Eine Zahlung in zwei Jahren','In zwei Jahren werden 1.210 gezahlt. Der passende effektive Jahreszins beträgt 10 %.',[
   F('PV_0=\\frac{1210}{1{,}1^2}=1000','1.000 wachsen zuerst auf 1.100 und danach auf 1.210. Der zweite Zinsbetrag beträgt bereits 110.',[['PV_0','Barwert in Geldeinheiten heute.']]),
   'Durch zweimaliges Abziehen von 10 % aus 1.210 erhielte man nicht 1.000. Abzinsung teilt durch den Wachstumsfaktor; sie zieht nicht denselben Prozentsatz vom Endwert ab.',
   'Würde die Zahlung schon in einem Jahr erfolgen, wäre ihr Wert 1.100. Bei unveränderter Zahlung und positivem Zins ist die frühere Zahlung mehr wert.'
  ],'Zeichne zuerst Zeitpunkt und Vorzeichen jeder Zahlung. Erst dann die Rate passend zur Periode einsetzen.'),
  G({id:'discount-horizon',title:'Zeit und Zinssatz verändern den Barwert derselben Zahlung',
   caption:'Barwert einer sicheren Zahlung von 100 nach n Jahren; konstante effektive Jahreszinssätze von 2 % und 8 %.',
   reading:'Beide Kurven beginnen bei 100 für sofortige Zahlung. Spätere Zahlungen werden bei 8 % stärker abgezinst. Die Kurven zeigen eine Bewertungsbeziehung, keinen Kursverlauf eines bereits gehaltenen Bonds.',
   plot:{x:[0,10],y:[40,105],xTicks:[0,2,4,6,8,10],xLabel:'Jahre bis zur Zahlung',yLabel:'Barwert (Geldeinheiten)',series:[
    {name:'Diskontsatz 2 %',points:Array.from({length:41},(_,i)=>[i/4,100/1.02**(i/4)])},
    {name:'Diskontsatz 8 %',points:Array.from({length:41},(_,i)=>[i/4,100/1.08**(i/4)]),dash:'8 5'}
   ]}}),
  'Bei einem negativen Zins zwischen −100 % und null kann der Barwert einer positiven künftigen Zahlung über ihrem Nennbetrag liegen. Der verbreitete Satz „später ist immer weniger wert“ benötigt deshalb seine Zinsannahme.'
 ]),
 S('annuities','2. Gleichmäßige Renten aus der geometrischen Reihe','a',[
  F('PV_{ord}=\\sum_{t=1}^{n}\\frac{C}{(1+r)^t}=C\\frac{1-(1+r)^{-n}}{r}','Die nachschüssige Rente zahlt erstmals in einer Periode. Die geschlossene Form gilt für r ungleich null; bei r = 0 ist der Wert nC.',[['PV_{ord}','Heutiger Wert einer nachschüssigen Rente.'],['C','Gleich hohe Zahlung je Periode.'],['r','Diskontsatz je Zahlungsperiode.'],['n,t','Zahl der Zahlungen und Zahlungsindex.']]),
  F('q=(1+r)^{-1},\\qquad \\sum_{t=1}^{n}q^t=\\frac{q(1-q^n)}{1-q}','Setze den einperiodigen Diskontfaktor q ein. Weil q/(1 − q) = 1/r, folgt unmittelbar die Rentenformel.',[['q','Einperiodiger Diskontfaktor.'],['r','Periodenzinssatz, ungleich null.'],['n,t','Anzahl der Zahlungen und Index.']]),
  F('PV_{due}=(1+r)PV_{ord},\\qquad FV_{ord}=C\\frac{(1+r)^n-1}{r}','Bei der vorschüssigen Rente wird jede Zahlung eine Periode nach vorn verschoben. Der Endwert der nachschüssigen Rente entsteht durch Aufzinsen ihres Barwerts bis n.',[['PV_{due},PV_{ord}','Barwerte der vor- bzw. nachschüssigen Rente.'],['FV_{ord}','Endwert unmittelbar nach der letzten nachschüssigen Zahlung.'],['C','Zahlung pro Periode.'],['r','Effektiver Periodenzins.'],['n','Zahl der Zahlungen.']]),
  X('Der Zahlungszeitpunkt kostet oder verdient einen Jahreszins','Dreimal 100 werden entweder am Ende der Jahre 1, 2 und 3 oder zu Beginn der Jahre 1, 2 und 3, also zu den Zeiten 0, 1 und 2, gezahlt. Der Jahreszins beträgt 5 %.',[
   F('PV_{ord}=\\frac{100}{1{,}05}+\\frac{100}{1{,}05^2}+\\frac{100}{1{,}05^3}\\approx272{,}32','Jede der drei Zahlungen wird entsprechend ihrem eigenen Abstand zu heute abgezinst.',[['PV_{ord}','Barwert der nachschüssigen Zahlungen.']]),
   F('PV_{due}=1{,}05PV_{ord}\\approx285{,}94','Alle drei Zahlungen sind eine Periode früher fällig. Deshalb steigt der gesamte Wert um denselben Faktor 1,05.',[['PV_{due},PV_{ord}','Vor- bzw. nachschüssiger Barwert.']]),
   'Es werden nicht vier Zahlungen. Die Veränderung betrifft ausschließlich deren Zeitpunkte. Ein Wechsel des Rechnermodus END/BGN muss genau diese Verschiebung abbilden.'
  ],'Die Rentenformel ist eine Abkürzung für einzelne Barwerte. Ein Zeitstrahl verhindert, dass die Abkürzung auf den falschen Zahlungsplan angewendet wird.')
 ]),
 S('growing-cashflows','3. Wachstum und ewige Rente','a b',[
  F('PV_0=\\sum_{t=1}^{n}\\frac{C_1(1+g)^{t-1}}{(1+r)^t}=\\frac{C_1}{r-g}\\left[1-\\left(\\frac{1+g}{1+r}\\right)^n\\right]','Die endliche wachsende Rente verwendet den ersten künftigen Betrag C₁. Für die geschlossene Form wird r ungleich g vorausgesetzt.',[['PV_0','Heutiger Wert der n Zahlungen.'],['C_1','Zahlung in einer Periode, nicht die gerade erfolgte Zahlung.'],['g','Konstante Wachstumsrate der Zahlungen pro Periode.'],['r','Passender Diskontsatz pro Periode.'],['n,t','Zahl der Zahlungen und Index.']]),
  'Bei r = g ist jede abgezinste Zahlung gleich C₁/(1 + r), sodass die Summe nC₁/(1 + r) beträgt. Die scheinbare Division durch null in der Kurzform ist dann eine Grenze der Schreibweise, nicht ein unendlicher Wert der endlichen Zahlungsfolge.',
  F('P_0=\\frac{D_1}{r-g},\\qquad D_1=D_0(1+g),\\qquad r>g','Für eine ewige geometrisch wachsende Dividendenfolge verschwindet der Restterm nur bei ausreichender Abzinsung. Mit positiven Wachstumsfaktoren ist dafür r > g erforderlich.',[['P_0','Aktienwert heute im konstanten Dividendenwachstumsmodell.'],['D_0,D_1','Gerade gezahlte bzw. nächste erwartete Dividende je Aktie.'],['r','Geforderte Eigenkapitalrendite pro Periode.'],['g','Dauerhafte Dividendenwachstumsrate pro Periode.']]),
  X('Die nächste Dividende gehört in den Zähler','Eine Aktie zahlte gerade 2 Dividende. Erwartetes dauerhaftes Wachstum beträgt 5 %, die geforderte Rendite 10 %.',[
   F('D_1=2\\cdot1{,}05=2{,}10,\\qquad P_0=\\frac{2{,}10}{0{,}10-0{,}05}=42','Die heutige Bewertung beginnt mit der nächsten noch zustehenden Zahlung. Die bereits gezahlten 2 werden nicht nochmals erworben.',[['D_1','Dividende in einem Jahr.'],['P_0','Heutiger Modellwert je Aktie.']]),
   'Mit D₀ statt D₁ im Zähler erhielte man 40. Das wäre hier ein Zeitfehler, keine andere Rundung.',
   'Steigt die Renditeforderung auf 11 % bei unverändertem Wachstum, sinkt der Wert auf 35. Die Differenz r − g macht das Modell sehr empfindlich gegen Annahmen.'
  ],'Dauerhaftes Wachstum ist eine starke Annahme. Bei r nahe g werden kleine Eingabefehler stark verstärkt; g ≥ r liefert hier keinen endlichen ökonomisch brauchbaren Modellwert.')
 ]),
 S('terminal-value','4. Mehrere Phasen und der richtige Endwertzeitpunkt','a',[
  F('P_0=\\sum_{t=1}^{N}\\frac{D_t}{(1+r)^t}+\\frac{P_N}{(1+r)^N},\\qquad P_N=\\frac{D_{N+1}}{r-g}','Ein Terminal Value zum Zeitpunkt N enthält die Zahlungen ab N + 1. Die explizite Zahlung in N bleibt außerhalb dieses Endwerts.',[['P_0','Heutiger Aktienwert.'],['D_t','Explizit geschätzte Dividende am Ende der Periode t.'],['N','Letzter expliziter Prognosezeitpunkt.'],['P_N','Fortführungswert zum Zeitpunkt N nach der Dividende D_N.'],['D_{N+1}','Erste Dividende der anschließenden konstanten Wachstumsphase.'],['r,g','Konstanter Diskontsatz und dauerhaftes Wachstum, r > g.'],['t','Periodenindex.']]),
  X('Zwei explizite Jahre, danach konstantes Wachstum','Die nächsten Dividenden betragen 2 und 2,4. Ab Jahr 3 wachsen sie dauerhaft mit 5 %. Die Renditeforderung beträgt 10 %.',[
   F('D_3=2{,}4\\cdot1{,}05=2{,}52,\\qquad P_2=\\frac{2{,}52}{0{,}10-0{,}05}=50{,}40','Der Endwert steht am Ende von Jahr 2 und repräsentiert die Dividenden ab Jahr 3.',[['D_3','Dividende am Ende von Jahr 3.'],['P_2','Fortführungswert am Ende von Jahr 2 nach D₂.']]),
   F('P_0=\\frac2{1{,}1}+\\frac{2{,}4+50{,}4}{1{,}1^2}\\approx45{,}45','Dividende und Fortführungswert am Ende von Jahr 2 werden gemeinsam zwei Jahre abgezinst.',[['P_0','Heutiger Aktienwert.']]),
   'Eine zusätzliche separate Einbeziehung von D₃ neben dem Endwert würde dieselbe Zahlung doppelt zählen. Abzinsung des Endwerts über drei statt zwei Jahre wäre dagegen ein Zeitverschiebungsfehler.'
  ],'Für jeden Endwert zuerst in Worten angeben, an welchem Datum er steht und welche künftigen Zahlungen er bereits enthält.')
 ]),
 S('bonds','5. Anleihe: Kuponrente plus Rückzahlung','a',[
  F('P=\\sum_{t=1}^{n}\\frac{C}{(1+i)^t}+\\frac{F}{(1+i)^n},\\qquad C=\\frac{Fc}{m},\\qquad i=\\frac{y^{(m)}}m,\\qquad n=mT','Im einfachen Modell liegen Bewertung und Kupontermine genau auf dem Raster. Ein konstanter Yield diskontiert alle vertraglichen Zahlungen.',[['P','Anleihepreis am Kupontermin, ohne Stückzinsproblem.'],['C','Kuponzahlung je Teilperiode.'],['F','Rückzahlungsbetrag bzw. Nennwert.'],['c','Jährliche Kuponrate.'],['m','Kupon- und Verzinsungsperioden pro Jahr.'],['y^{(m)}','Nominale annualisierte Yield bei m Verzinsungen.'],['i','Yield pro Zahlungsperiode.'],['T','Restlaufzeit in Jahren.'],['n,t','Zahl der verbleibenden Zahlungen und Index.']]),
  X('Kuponrate ist nicht Marktrendite','Eine Anleihe zahlt jährlich 4 auf Nennwert 100 und wird in drei Jahren zu 100 zurückgezahlt. Die passende jährliche Yield beträgt 5 %.',[
   F('P=\\frac4{1{,}05}+\\frac4{1{,}05^2}+\\frac{104}{1{,}05^3}\\approx97{,}28','Die letzte Zahlung enthält sowohl Kupon als auch Rückzahlung.',[['P','Preis der Anleihe heute.']]),
   'Weil der Kupon unter der Marktrendite liegt, wird unter 100 gekauft. Der spätere Rückzahlungsgewinn ergänzt die laufenden Kupons.',
   'Bei Yield 4 % wäre der Preis 100. Bei einer niedrigeren Yield wäre dieselbe Kuponfolge mehr als 100 wert. Die Marktverzinsung ändert den Preis, nicht rückwirkend die vertragliche Kuponrate.'
  ],'Kupon beschreibt die Zahlung relativ zum Nennwert. Yield beschreibt den Zusammenhang zwischen Marktpreis und allen Zahlungen.'),
  F('P=\\sum_{t=1}^{n}CF_t d_t,\\qquad d_t=(1+z_t)^{-t}','Bei einer nicht flachen Zinsstruktur kann jede Zahlung mit ihrem eigenen passenden Spot-Diskontfaktor bewertet werden. Hier sind Zeitpunkte und Spotraten auf jährlicher effektiver Basis.',[['P','Heutiger Wert der Zahlungsfolge.'],['CF_t','Zahlung am Jahreszeitpunkt t.'],['d_t','Heutiger Preis einer passenden sicheren Einheit Zahlung in t.'],['z_t','Effektiver jährlicher Spotzins für die Laufzeit t.'],['n,t','Letzter Zahlungszeitpunkt und Index.']]),
  'Eine aus dem Preis bestimmte einheitliche YTM ist eine Zusammenfassung, nicht die Behauptung einer flachen Spotkurve. Unsichere Zahlungen erfordern zusätzlich eine passende Behandlung von Kredit- und anderen Risiken.'
 ]),
 S('implied','6. Rendite und Wachstum aus dem Preis zurückrechnen','b',[
  F('y=\\left(\\frac F{P_0}\\right)^{1/T}-1','Beim ausfallfreien Nullkuponanspruch ergibt sich die annualisierte implizite Rendite direkt aus Rückzahlung und Preis.',[['y','Effektive jährliche Rendite.'],['F','Einzige Rückzahlung nach T Jahren.'],['P_0','Heutiger positiver Preis.'],['T','Zeit bis zur Rückzahlung in Jahren.']]),
  X('Dieselbe Endzahlung mit zwei Einstiegspreisen','Eine Nullkuponanleihe zahlt in zwei Jahren 100. Sie kostet einmal 90, einmal 95.',[
   F('y_{90}=\\sqrt{100/90}-1\\approx5{,}409\\%,\\qquad y_{95}=\\sqrt{100/95}-1\\approx2{,}598\\%','Der niedrigere Preis bedeutet bei identischer Rückzahlung die höhere Rendite.',[['y_{90},y_{95}','Effektive Jahresrenditen für die beiden angegebenen Preise.']]),
   'Bei einem Kuponinstrument wird die Yield dagegen aus einer Gleichung mit mehreren Zahlungen bestimmt, gewöhnlich numerisch.',
   'YTM setzt im mathematischen Sinn den Barwert der zugesagten Zahlungen gleich dem Preis. Damit sie der tatsächlich realisierten kumulierten Jahresrendite entspricht, müssen insbesondere Vertragserfüllung, Haltedauer und geeignete Kuponwiederanlage zusammenpassen.'
  ],'Eine implizite Rendite erklärt den Marktpreis unter einem Zahlungsmodell. Sie ist nicht automatisch eine Prognose des persönlichen Anlageergebnisses.'),
  F('r=\\frac{D_1}{P_0}+g,\\qquad g=r-\\frac{D_1}{P_0}','Wenn die nächste Dividende unabhängig vorgegeben ist, kann das konstante Wachstumsmodell nach Rendite oder Wachstum umgestellt werden.',[['r','Implizite bzw. geforderte jährliche Eigenkapitalrendite.'],['g','Dauerhafte Dividendenwachstumsrate.'],['D_1','Unabhängig bekannte nächste Dividende.'],['P_0','Heutiger Aktienpreis.']]),
  F('P_0(r-g)=D_0(1+g)\\quad\\Longrightarrow\\quad g=\\frac{P_0r-D_0}{P_0+D_0}','Ist dagegen die gerade gezahlte Dividende D₀ gegeben, hängt D₁ selbst von g ab. Diese Abhängigkeit muss beim Umstellen erhalten bleiben.',[['P_0','Heutiger Aktienpreis.'],['r','Geforderte Rendite.'],['g','Gesuchte konstante Wachstumsrate.'],['D_0','Gerade gezahlte Dividende.']]),
  'Bei Preis 42, D₀ = 2 und r = 10 % ergibt sich (4,2 − 2)/44 = 5 %. Die falsche Formel 10 % − 2/42 ergäbe etwa 5,238 %, weil sie D₀ fälschlich als nächste Dividende behandelt.'
 ]),
 S('additivity','7. Cashflow-Additivität und No Arbitrage','c',[
  F('V(aX+bY)=aV(X)+bV(Y)','Bei identischen Risiken, Zeitpunkten und Handelsbedingungen muss der Wert einer replizierbaren Zahlungsfolge der Summe ihrer Bestandteile entsprechen. Die Schreibweise ist ein Bewertungsprinzip unter den genannten Marktannahmen.',[['X,Y','Vollständige Zahlungsprofile einschließlich ihrer Zustandsabhängigkeit.'],['a,b','Gehaltene Stückzahlen; negative Werte stehen für zulässige Shortpositionen.'],['V','Heutiger Marktwert des jeweiligen Zahlungsprofils.']]),
  X('Ein Anspruch lässt sich günstiger nachbauen','Sichere Zahlungen in einem und zwei Jahren haben Diskontfaktoren 0,95 und 0,90. Anspruch A zahlt 10 und 110; B zahlt 100 und 0. Ein dritter Anspruch C zahlt 100 und 100.',[
   T(['Anspruch','Zahlung Jahr 1','Zahlung Jahr 2','Konsistenter heutiger Wert'],[['A','10','110','10 × 0,95 + 110 × 0,90 = 108,50'],['B','100','0','95,00'],['C','100','100','185,00']],'Alle Zahlungen sind sicher, in derselben Währung und an identischen Terminen.'),
   F('a=\\frac{100}{110}=\\frac{10}{11},\\qquad b=\\frac{100-10a}{100}=\\frac{10}{11}','Zuerst wird die zweite Zahlung mit A repliziert. B ergänzt anschließend die noch fehlende erste Zahlung.',[['a,b','Stückzahlen von A und B zur Replikation eines C.']]),
   F('V(C)=\\frac{10}{11}(108{,}50+95)=185','Die Kosten des replizierenden Portfolios stimmen mit der direkten Summe beider abgezinster Zahlungen überein.',[['V(C)','Arbitragefreier Wert des Zahlungsanspruchs C.']]),
   'Würde C für 190 verkauft, könnte man unter reibungslosen Bedingungen C leerverkaufen und die Replikation für 185 kaufen. Heute verbleiben 5; die späteren Zahlungen gleichen sich vollständig aus.',
   'In der Praxis begrenzen Spreads, Finanzierungskosten, Leerverkaufsbeschränkungen, Ausfallrisiken und nicht identische Bedingungen diese idealisierte Strategie.'
  ],'Gleiche erwartete Zahlungen reichen für sichere Replikation nicht. Die Zahlungen müssen an jedem relevanten Zeitpunkt und in jedem relevanten Zustand übereinstimmen.')
 ]),
 S('forwards','8. Impliziter Forwardzins aus zwei Anlagewegen','c',[
  F('(1+z_2)^2=(1+z_1)(1+f_{1,2}),\\qquad f_{1,2}=\\frac{(1+z_2)^2}{1+z_1}-1','Eine zweijährige Anlage muss denselben Endwert haben wie eine einjährige Anlage mit heute fest vereinbarter Verzinsung des zweiten Jahres.',[['z_1,z_2','Effektive jährliche sichere Spotzinsen für ein bzw. zwei Jahre.'],['f_{1,2}','Heute implizierter einjähriger Forwardzins für den Zeitraum von Jahr 1 bis Jahr 2.']]),
  X('4 % kurz, 5 % über zwei Jahre','Der Einjahres-Spotzins beträgt 4 %, der Zweijahres-Spotzins 5 %. Die gleichen sicheren Anlage- und Finanzierungsmöglichkeiten stehen zu diesen Konditionen zur Verfügung.',[
   F('f_{1,2}=\\frac{1{,}05^2}{1{,}04}-1\\approx6{,}0096\\%','Der Zweijahresfaktor 1,1025 wird durch den schon bekannten Erstjahresfaktor 1,04 geteilt.',[['f_{1,2}','Impliziter Forwardzins des zweiten Jahres.']]),
   '100 wachsen im direkten Zweijahresweg auf 110,25. Der andere Weg liefert zunächst 104 und anschließend ebenfalls 110,25.',
   'Die Näherung 2 × 5 % − 4 % = 6 % lässt einen kleinen Zinseszinseffekt weg. Der exakte Wert ist rund 6,0096 %.',
   'Ein impliziter Forward ist nicht automatisch der erwartete künftige Spotzins. Er ist zunächst der heute durch No Arbitrage bestimmte Preis einer späteren Verzinsung.'
  ],'Bei Forwardrechnungen Wachstumsfaktoren statt bloßer Zinssatzdifferenzen verknüpfen.')
 ]),
 S('fx-forward','9. Devisenterminpreis aus gedeckten Zahlungswegen','c',[
  F('F_{D/F}=S_{D/F}\\frac{(1+r_D)^T}{(1+r_F)^T}','Unter den üblichen reibungslosen Annahmen gleicht der Terminwechselkurs eine Anlage in Heimatwährung und eine in Fremdwährung mit fest abgesichertem Rücktausch aus.',[['S_{D/F}','Heutiger Kassakurs: Einheiten Heimatwährung D je Einheit Fremdwährung F.'],['F_{D/F}','Heute vereinbarter Terminkurs mit derselben Notation.'],['r_D,r_F','Passende sichere effektive Jahreszinsen der Heimat- bzw. Fremdwährung.'],['T','Laufzeit in Jahren.']]),
  X('Dollaranlage oder abgesicherte Euroanlage','Heimatwährung ist USD. Der Kassakurs beträgt 1,10 USD je EUR, der sichere USD-Zins 5 % und der EUR-Zins 3 %, jeweils für ein Jahr.',[
   F('F_{USD/EUR}=1{,}10\\frac{1{,}05}{1{,}03}\\approx1{,}12136','Die höher verzinste Dollarwährung steht in dieser Quotierung als Zähler. Der Terminkurs muss den Zinsunterschied ausgleichen.',[['F_{USD/EUR}','Einjähriger USD-Preis eines EUR im Termingeschäft.']]),
   '100 USD liefern direkt 105 USD. Der alternative Weg kauft zunächst 90,9091 EUR, lässt diese auf 93,6364 EUR wachsen und tauscht sie zum vorab gesicherten Terminkurs ebenfalls in 105 USD.',
   'Ohne fest vereinbarten Rücktausch wäre der Endbetrag in USD unsicher. Dann wäre der Vergleich keine gedeckte risikofreie Replikation.',
   'Der Terminpreis ist daher keine notwendige Prognose des späteren Kassakurses. Unterschiedliche Kredit-, Besicherungs- und Finanzierungskonditionen können reale Marktpreise zusätzlich beeinflussen.'
  ],'Kursnotation, Zinssatzwährung und Absicherung gemeinsam prüfen. Ein Vertauschen des Bruchs erzeugt einen anderen Zahlungsweg.')
 ]),
 S('option-replication','10. Eine Option aus Aktie und Finanzierung nachbauen','c',[
  F('\\Delta=\\frac{C_u-C_d}{S_u-S_d},\\qquad B_0=\\frac{C_d-\\Delta S_d}{1+r},\\qquad C_0=\\Delta S_0+B_0','Im Einperioden-Binomialmodell werden Aktienzahl und sicherer Geldbetrag so gewählt, dass beide möglichen Optionszahlungen exakt reproduziert werden.',[['S_0,S_u,S_d','Aktienpreis heute sowie im oberen und unteren Endzustand.'],['C_0,C_u,C_d','Optionspreis heute sowie Optionszahlungen in beiden Endzuständen.'],['\\Delta','Anzahl Aktien im replizierenden Portfolio.'],['B_0','Heute angelegter sicherer Betrag; negativ bedeutet Kreditaufnahme.'],['r','Sicherer Zinssatz für genau die Modellperiode.']]),
  X('Ein Call ohne Annahme einer tatsächlichen Aufwärtswahrscheinlichkeit','Die Aktie kostet 100 und steht in einem Jahr entweder bei 120 oder 80. Ein europäischer Call hat Ausübungspreis 100. Der sichere Jahreszins beträgt 5 %. Es gibt keine Dividende, Kosten oder Handelsbeschränkungen.',[
   F('C_u=\\max(120-100,0)=20,\\qquad C_d=\\max(80-100,0)=0','Die Optionszahlung hängt vom positiven Überschuss des Aktienpreises über den Ausübungspreis ab.',[['C_u,C_d','Callzahlung im oberen bzw. unteren Zustand.']]),
   F('\\Delta=\\frac{20-0}{120-80}=0{,}5,\\qquad B_0=\\frac{-40}{1{,}05}\\approx-38{,}0952','Eine halbe Aktie hat im unteren Zustand Wert 40; eine dann fällige Schuld von 40 setzt den unteren Nettowert auf null.',[['\\Delta','Benötigte Aktienzahl.'],['B_0','Anfänglicher sicherer Geldbetrag; hier eine Kreditaufnahme.']]),
   F('C_0=0{,}5\\cdot100-\\frac{40}{1{,}05}\\approx11{,}9048','Im oberen Zustand bleiben 60 − 40 = 20; im unteren 40 − 40 = 0. Beide Optionen werden exakt repliziert.',[['C_0','Arbitragefreier Callpreis im gegebenen Modell.']]),
   'Eine tatsächliche Wahrscheinlichkeit für den oberen Zustand wurde nicht benötigt. Die Bewertung folgt aus der Replikation beider Zustände, nicht aus einer ungesicherten Kursprognose.'
  ],'Der Diskontsatz für die replizierte sichere Finanzierung ist nicht einfach die geforderte Aktienrendite. Unterschiedliche Risiken gehören in unterschiedliche Zahlungsbausteine.'),
  F('p^*=\\frac{(1+r)S_0-S_d}{S_u-S_d},\\qquad C_0=\\frac{p^*C_u+(1-p^*)C_d}{1+r}','Dieselbe Replikation kann als risikoneutrale Bewertung geschrieben werden. p* ist ein Bewertungsgesichtspunkt, keine Behauptung der tatsächlichen Aufwärtswahrscheinlichkeit.',[['p^*','Risikoneutrales Gewicht des oberen Zustands; für das einfache arbitragefreie Modell zwischen 0 und 1.'],['S_0,S_u,S_d','Aktienpreise heute und in beiden Endzuständen.'],['C_0,C_u,C_d','Optionspreis und Endzahlungen.'],['r','Sicherer Periodenzins.']]),
  'Im Beispiel ist p* = 0,625 und der abgezinste gewichtete Payoff 12,5/1,05 = 11,9048. Die Arbitragebedingung verlangt hier 80 < 105 < 120. Außerhalb dieser Grenzen wäre bereits das Aktien-/Finanzierungsmodell nicht arbitragefrei.'
 ]),
 S('calculator','11. BA II Plus: Die Eingaben aus dem Zeitstrahl ableiten','a b',[
  'Die folgenden Eingaben verwenden ausdrücklich Jahresperioden, P/Y = 1, C/Y = 1 und END. Vor einer Rechnung die TVM-Variablen löschen und anschließend Einstellungen prüfen; CLR TVM setzt nicht automatisch jede globale Einstellung zurück. I/Y erwartet einen Prozentwert, also 5 für 5 %, nicht 0,05.',
  T(['Schritt am BA II Plus','Zweck im Beispiel der dreijährigen 4%-Anleihe'],[
   ['2nd → I/Y (P/Y); 1 → ENTER; ↓; C/Y kontrollieren bzw. 1 → ENTER; 2nd → CPT (QUIT)','Jahresperioden und jährliche Verzinsung festlegen.'],
   ['2nd → PMT (BGN); END prüfen; bei BGN mit 2nd → ENTER (SET) umschalten; QUIT','Kupons am Ende der Periode.'],
   ['2nd → FV (CLR TVM)','Frühere Werte der fünf TVM-Variablen löschen.'],
   ['3 → N; 5 → I/Y; 4 → PMT; 100 → FV','Drei Jahre, 5 % Yield, jährlicher Kupon 4 und Rückzahlung 100.'],
   ['CPT → PV','Ergebnis ungefähr −97,28; der Kaufpreis ist aus Anlegersicht ein Abfluss.']
  ],'Eigener Zahlungsfall nach den dokumentierten TI-Tastenfunktionen; Tastenaufschriften in Klammern sind die Zweitfunktionen.'),
  'Das negative Rechnerergebnis ist kein negativer Marktpreis. Im Zahlungsmodell steht die heutige Ausgabe den späteren positiven Eingängen gegenüber. Für die Yield derselben Anleihe werden N, PMT, FV und der negative PV eingegeben; CPT → I/Y löst nach der Rendite.',
  X('Halbjährliche Kupons ohne doppelte Umrechnung','Eine zweijährige Anleihe mit 6 % jährlichem Kupon und Nennwert 100 zahlt halbjährlich. Die nominale jährliche Yield beträgt 8 % bei Halbjahresverzinsung.',[
   'Bei bewusst auf 1 gesetzten P/Y und C/Y kann in Halbjahresperioden gerechnet werden: N = 4, I/Y = 4, PMT = 3, FV = 100. I/Y ist in dieser gewählten manuellen Periodisierung der eingegebene Prozentwert pro Halbjahr.',
   'Alternativ kann man die Jahreskonvention des Rechners mit P/Y = C/Y = 2, N = 4 und I/Y = 8 verwenden. Beide Methoden müssen denselben Preis liefern.',
   'P/Y = 2 und zusätzlich eine bereits halbierte Jahresnotierung von 4 einzugeben würde die gewünschte Verzinsung nochmals halbieren. Nach der Rechnung die verwendete Konvention dokumentieren.'
  ],'Eine einzige konsequente Periodisierung wählen. Zahl der Zahlungen, Kupon und Zins müssen dieselbe Periode beschreiben.'),
  'Ungleichmäßige Zahlungen passen nicht in eine einzige konstante PMT. Dafür sind einzelne Barwerte oder ein geeignetes Cashflow-Arbeitsblatt nötig. Der Rechner ersetzt weder Zahlungsanalyse noch die Prüfung, ob eine gefundene IRR-Lösung eindeutig ist.'
 ])],related:[{unit:'returns',section:'rate-roles',label:'Warum ein Diskontsatz eine Renditeforderung ausdrückt'},{unit:'return-types',section:'compounding',label:'Nominale und effektive Raten konsistent umrechnen'},{unit:'benchmarks',section:'money-weighted',label:'IRR als Anlegerergebnis und seine Mehrdeutigkeiten'},{unit:'leases-compensation',section:'lease-measurement',label:'Barwertrechnung für Leasingverbindlichkeiten'}],
 sources:[
 {title:'CFA Institute: Time Value of Money in Finance',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/time-value-money'},
 {title:'OpenStax: Methods for Solving TVM Problems',url:'https://openstax.org/books/principles-finance/pages/7-3-methods-for-solving-time-value-of-money-problems'},
 {title:'Texas Instruments: TVM-Funktionen',url:'https://education.ti.com/en/customer-support/knowledge-base/financial-calculators/general-information/11254'},
 {title:'Texas Instruments: P/Y, C/Y und BGN/END',url:'https://education.ti.com/en/customer-support/knowledge-base/financial-calculators/product-usage/11228'},
 {title:'Texas Instruments: Ursachen unerwarteter TVM-Ergebnisse',url:'https://education.ti.com/en/customer-support/knowledge-base/financial-calculators/product-usage/21590'}
 ],review:{status:'draft',date:'2026-09-18',note:'Eigene Herleitungen von Barwerten, Replikation, Forward- und Optionswerten; konkrete Rechnerkonventionen.'}};
