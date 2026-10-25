const {F,T,X,S,G,D}=require('../author.cjs'),{europeanOption:price}=require('../../finance-models.cjs');
const grid=(a,b,n,f)=>Array.from({length:n+1},(_,i)=>{const x=a+(b-a)*i/n;return[x,f(x)];});
const val=(s=100,k=100,r=.05,q=0,v=.2,t=1)=>price(s,k,r,q,v,t);
const fmt=x=>x.toLocaleString('de-DE',{minimumFractionDigits:4,maximumFractionDigits:4});
const fig=(id,title,caption,x,y,xLabel,yLabel,series,reading)=>G({id,title,caption,plot:{x,y,xLabel,yLabel,series},reading});
const symbols=[['S_t,K','Heutiger Aktienkurs und vertraglicher Strike, jeweils WE je Aktienrecht.'],['c_t,p_t','Heutiger Wert des europäischen Call beziehungsweise Put, WE je Aktienrecht.'],['\\tau=T-t','Restzeit bis zum Endtermin T in Jahren; t bezeichnet heute.'],['r,q','Konstanter stetiger jährlicher Zins beziehungsweise stetige proportionale Ausschüttungsrendite, Dezimalquoten.'],['\\sigma','Annualisierte Volatilität der logarithmischen Aktienrendite, Dezimalquote je Quadratwurzeljahr.']];
module.exports={id:'option-values',intro:[
 'Eine Option ist ein handelbares bedingtes Recht. Ihr heutiger Wert ist nicht einfach der Betrag, den eine Ausübung beim heutigen Aktienkurs liefern würde. Der Käufer besitzt die vorteilhafte Wahl, spätere ungünstige Ausübung zu unterlassen; zugleich sind Strike, Ausschüttungen und Finanzierung zeitlich gebunden. Dieses Zusammenspiel erklärt den Preis.',
 'Die drei tatsächlichen Lernziele für CFA Level I 2027 betreffen Ausübungswert, Moneyness und Zeitwert, Replikation im Vergleich zu Forward Commitments sowie die Wirkung der Werttreiber. Das Kapitel entwickelt zuerst diese Zusammenhänge. Geschlossene Modellformeln und lokale Sensitivitäten sind ausdrücklich zusätzliche Verständnisvertiefungen, keine neu erfundenen Pflichtlernziele.'
],sections:[
 S('map','1. Drei verschiedene Fragen an dieselbe Option','a b c',[
  'Was würde das Recht beim heutigen Kurs unmittelbar liefern? Was ist das noch laufende Recht heute wert? Welchen Gewinn hat der Käufer mit seinem früher gezahlten Preis erzielt? Diese Fragen verwenden unterschiedliche Größen. Ein Call kann im Geld liegen und seinem Käufer dennoch einen Verlust bereiten. Ein europäischer Put kann sogar unter seinem hypothetischen heutigen Ausübungswert gehandelt werden, ohne seine korrekte Preisuntergrenze zu verletzen.',
  T(['Größe','Fragestellung','Was ausdrücklich nicht enthalten ist'],[
   ['Ausübungswert','Vorteilhafte Differenz von aktuellem Basiswertkurs und Strike.','Früher gezahlte Prämie und Wert späterer Wahlmöglichkeiten.'],
   ['Heutiger Optionswert','Preis des verbleibenden vertraglichen Rechts unter heutigen Bedingungen.','Eine garantierte tatsächliche spätere Auszahlung.'],
   ['Positionsgewinn','Erlös beziehungsweise Auszahlung abzüglich zugehöriger Anschaffungs- und Finanzierungskosten.','Eine allein aus Moneyness ablesbare Größe.']
  ],'Zuerst wird bestimmt, welche dieser Fragen eine Aufgabe tatsächlich stellt.')
 ]),
 S('conventions','2. Zeitpunkte, Rechte und Recheneinheiten festlegen','a b c',[
  'Im Grundfall beziehen sich alle Geldwerte auf ein Recht über eine Aktie, dieselbe Währung und denselben Strike. Der Call erlaubt Kauf, der Put Verkauf. Kleine Buchstaben bezeichnen europäische Werte; große Buchstaben werden bei Bedarf für die amerikanische Form verwendet. Europäisch bedeutet Ausübung erst am Endtermin, nicht fehlende Handelbarkeit vorher. Amerikanisch bezeichnet zusätzliche vertragliche Ausübungsmöglichkeiten und keine geografische Herkunft.',
  F('\\tau=T-t,\\qquad D=e^{-r\\tau},\\qquad A=S_te^{-q\\tau},\\qquad B=KD','D ist der Faktor einer späteren sicheren Geldzahlung. A ist im konstanten stetigen Ausschüttungsmodell der vorab bezahlte Wert eines Aktienerhalts am Endtermin; B ist der heutige Strikebarwert.',[...symbols,['D','Positiver Diskontfaktor für den Zeitraum bis T.'],['A,B','Vorab bezahlter Aktienerhalt beziehungsweise Barwert der Strikezahlung, WE.']]),
  'Stetige Prozentsätze werden in Formeln als Dezimalquoten eingesetzt. Eine separat bezeichnete effektive Jahresrate verwendet stattdessen ihren eigenen Aufzinsungsfaktor. Beide Konventionen werden nicht innerhalb derselben Rechnung vermischt. Die Kontraktgröße wird erst nach einer konsistenten Rechnung je Recht multipliziert.'
 ]),
 S('exercise','3. Den Ausübungswert aus den beiden Leistungen herleiten','a',[
  'Beim Call würde man K zahlen und eine Aktie im Wert S erhalten. Eine negative Differenz wird durch Nichtausübung vermieden. Beim Put würde man die Aktie abgeben und K erhalten. Auch hier darf der Käufer verzichten. Die Untergrenze null entsteht aus diesem Wahlrecht; der Verkäufer hat bei wirksamer Ausübung gerade keine entsprechende freie Wahl.',
  F('I_c(S_t)=\\max(S_t-K,0),\\qquad I_p(S_t)=\\max(K-S_t,0)','Dies ist der Spot-Ausübungswert. Bei einem europäischen Recht vor T beschreibt er eine hypothetische Sofortausübung, keine heute erlaubte Transaktion.',[['I_c,I_p','Spot-Ausübungswert von Call und Put, WE je Recht.'],['S_t,K','Heutiger Aktienkurs und Strike, WE je Aktie.'],['\\max(x,0)','Wählt x, wenn x positiv ist, sonst null.']]),
  X('Ein einziger Kursvergleich dreht die beiden Rechte um','Strike 100 WE. Verglichen werden aktuelle Aktienkurse 80, 100 und 120 WE.',[
   T(['Aktienkurs (WE)','Call-Ausübungswert (WE)','Put-Ausübungswert (WE)'],[['80','0','20'],['100','0','0'],['120','20','0']],'Die Prämie verändert keine dieser drei Ausübungsrechnungen.'),
   'Bei Kurs 120 hätte Kauf für 100 einen Vorteil von 20. Verkauf für 100 wäre dagegen ungünstiger als Verkauf für 120 am Markt, also wird der Put nicht ausgeübt. Bei Kurs 80 ist es genau umgekehrt.'
  ],'Call und Put mit demselben Strike können beim selben Kurs nicht zugleich strikt im Geld liegen.'),
  fig('exercise','Call und Put haben entgegengesetzte Ausübungsrichtungen','Eigener Strike 100 WE; die Abbildung zeigt ausschließlich den Ausübungswert je Recht.',[50,150],[0,55],'Aktienkurs (WE)','Ausübungswert (WE)',[
   {name:'Call-Ausübungswert',points:grid(50,150,50,s=>Math.max(s-100,0))},{name:'Put-Ausübungswert',dash:true,points:grid(50,150,50,s=>Math.max(100-s,0))}
  ],'Der Knick liegt bei 100. Links davon ist der Put vorteilhaft, rechts davon der Call. Die Nullseite bedeutet nicht, dass ein noch laufendes Recht kostenlos sein muss.')
 ]),
 S('moneyness','4. Moneyness beschreibt Lage, nicht Gewinn','a',[
  'In the money, at the money und out of the money vergleichen hier heutigen Spot und Strike. Beim Call ist ein höherer Spot günstiger, beim Put ein niedrigerer. Ein aus dem Geld liegender Call kann heute trotzdem einen positiven Preis besitzen, weil vor seinem Endtermin noch günstige Kurszustände möglich sind. Moneyness ist weder eine tatsächliche Ausübungswahrscheinlichkeit noch ein Erfolgsausweis.',
  F('m=\\frac{S_t}{K},\\qquad \\ell=\\ln\\left(\\frac{S_t}{K}\\right)','Für den Call bedeuten m größer eins beziehungsweise ein positiver Logarithmus Spot-ITM; für den Put gilt die umgekehrte Richtung.',[['m','Dimensionsloses Verhältnis von Spot zu Strike.'],['\\ell','Logarithmisches Spot-Strike-Verhältnis.'],['S_t,K','Positiver heutiger Aktienkurs und positiver Strike, gleiche Einheit.'],['\\ln','Natürlicher Logarithmus.']]),
  D('Spot-Moneyness und Forward-Moneyness unterscheiden',[
   F('F_{t,T}=S_te^{(r-q)\\tau},\\qquad m_F=\\frac{F_{t,T}}{K}','Im bezeichneten stetigen Carrymodell wird auch der Forwardkurs mit dem Strike verglichen. Das ist eine andere Konvention als die hier zuerst definierte Spot-Moneyness.',[...symbols,['F_{t,T}','Heutige faire Lieferquote für eine Aktie am Termin T, WE.'],['m_F','Dimensionsloses Forward-Strike-Verhältnis.']]),
   'Bei Spot und Strike je 100, Zins fünf Prozent, keiner Ausschüttung und einem Jahr liegt die Option spotbezogen am Geld. Der Forward liegt dagegen bei rund 105,1271. Eine Quelle, die forward-at-the-money meint, muss diese Bezugsgröße ausdrücklich benennen.'
  ])
 ]),
 S('time-value','5. Zeitwert als präzise Restgröße verstehen','a',[
  'Der übliche Zeitwert ist die Differenz zwischen dem heutigen Optionswert und dem heutigen Spot-Ausübungswert. Er fasst unterschiedliche Wirkungen zusammen: weitere günstige Zustände, das Recht zur Nichtausübung, aufgeschobene Strikezahlung beziehungsweise aufgeschobenen Strikeempfang und Ausschüttungen. Deshalb ist er weder eine zusätzliche Auszahlung noch ein Betrag, der täglich gleichmäßig vom Konto abgezogen wird.',
  F('c_t=I_c+TV_c,\\qquad p_t=I_p+TV_p','Diese Zerlegung definiert den Zeitwert. Sie ist noch keine eigenständige Preisformel und setzt keinen stets positiven Rest voraus.',[['c_t,p_t','Heutiger europäischer Call- beziehungsweise Putwert, WE.'],['I_c,I_p','Heutiger Spot-Ausübungswert, WE.'],['TV_c,TV_p','Zeitwert als jeweilige Differenz von Optionswert und Spot-Ausübungswert, WE.']]),
  X('Gleicher Ausübungswert, verschiedener Preis','Ein Call hat Spot 108, Strike 100 und heutigen Marktpreis 11 WE. Ein zweiter sonst vergleichbarer Call hat denselben Spot und Strike, aber Preis 14 WE.',[
   F('I_c=108-100=8,\\qquad TV_{c,1}=11-8=3,\\qquad TV_{c,2}=14-8=6','Der unmittelbare Vorteil bleibt acht. Nur der im Preis enthaltene Rest unterscheidet sich.',[['I_c','Call-Ausübungswert, WE.'],['TV_{c,1},TV_{c,2}','Zeitwerte der zwei getrennten Optionen, WE.']]),
   'Eine andere Restlaufzeit oder erwartete Variabilität kann einen anderen Rest erklären. Ohne Angaben zu den übrigen Bedingungen wird jedoch nicht aus der Preisdifferenz allein genau eine Ursache diagnostiziert.'
  ],'Zeitwert wird aus einem ausdrücklich bezeichneten Preis und demselben heutigen Ausübungswert gebildet.')
 ]),
 S('negative-time','6. Warum europäischer Zeitwert negativ sein kann','a b',[
  'Die Untergrenze des hypothetischen Sofortausübungswerts ist nur dann unmittelbar durchsetzbar, wenn diese Ausübung heute vertraglich möglich ist. Ein europäischer Put kann einen hohen späteren Strikeempfang erst bei T realisieren. Positiver Zins macht den heutigen Wert dieses Empfangs kleiner. Dieser Finanzierungseffekt kann den zusätzlichen Versicherungswert übersteigen.',
  X('Ein sicherer europäischer Put zeigt den Effekt ohne Schätzmodell','Eine wertlose Aktie bleibt im eigenen deterministischen Grenzfall bis zum Endtermin wertlos. Europäischer Put, Strike 100, ein Jahr Restzeit, effektiver Jahreszins fünf Prozent, kein Ausfall und keine Kosten.',[
   F('p_t=\\frac{100}{1{,}05}=95{,}238095,\\qquad I_p=100,\\qquad TV_p=-4{,}761905','Die sichere Zahlung von 100 kommt erst in einem Jahr. Eine heute nicht erlaubte Ausübung zu 100 kann den Preis nicht auf 100 zwingen.',[['p_t','Heutiger Wert der sicheren späteren Putzahlung, WE.'],['I_p','Hypothetischer heutiger Spot-Ausübungswert, WE.'],['TV_p','Differenz von Putwert und Spot-Ausübungswert, WE.']]),
   'Der Gesamtwert ist positiv. Nur seine Differenz zu einer früheren, hier nicht verfügbaren Zahlung ist negativ. Ein entsprechender sofort ausübbarer amerikanischer Put wäre in diesem Grenzfall mindestens 100 wert.'
  ],'Negativer europäischer Zeitwert ist nicht mit negativem Optionspreis oder automatisch mit Arbitrage gleichzusetzen.'),
  D('Auch ein Call benötigt die richtige Zins- und Ertragsannahme',[
   X('Negativer Zins verändert den späteren Strikebarwert','Eigener deterministischer Fall ohne Ausschüttungen: Spot 180, Strike 100, stetiger Zins minus fünf Prozent, ein Jahr, Volatilität null.',[
    F('c_t=180-100e^{0{,}05}\\approx74{,}872890,\\qquad I_c=80,\\qquad TV_c\\approx-5{,}127110','Die Zahlung des Strikes am Endtermin hat hier einen höheren Barwert als der heutige Strike. Der sichere Endaktienkurs bleibt über dem Strike.',[['c_t','Heutiger europäischer Callwert, WE.'],['I_c,TV_c','Spot-Ausübungswert und verbleibender Zeitwert, WE.'],['e','Basis der natürlichen Exponentialfunktion.']]),
    'Der bekannte Merksatz eines stets nicht negativen Call-Zeitwerts benötigt im einfachen Fall keine Ausschüttung und nicht negative Zinsen. Das Zusatzrecht amerikanischer Ausübung wird hier nicht aus einer europäischen Modellformel herausgerechnet.'
   ],'Zinsvorzeichen und Ausübungsregel gehören zur Aussage, nicht nur in eine Fußnote.')
  ])
 ]),
 S('expiry-profit','7. Auszahlung, Gewinn und Kontraktgröße abstimmen','a',[
  'Am Endtermin ist die verbleibende Wahl auf den dann beobachteten Ausübungswert reduziert. Bei einem anfänglich gekauften und bis zum Ende gehaltenen Recht ist der einfache Gewinn diese Auszahlung minus ursprünglicher Prämie. Ein Gewinn am gemeinsamen Endzeitpunkt muss zusätzlich deren Finanzierung berücksichtigen. Ein heutiger Verkauf vor T verwendet dagegen den heutigen Verkaufserlös.',
  F('\\Pi_T^{simple}=H_T-v_0,\\qquad \\Pi_T^{funded}=H_T-v_0e^{rT},\\qquad \\Pi_T^{contract}=M\\Pi_T','Die letzte Multiplikation verwendet jeweils die zuvor festgelegte Gewinnkonvention; M ist die ausdrücklich vereinbarte Anzahl von Aktienrechten.',[['H_T','Call- oder Putauszahlung je Recht am Endtermin, WE.'],['v_0','Bei Abschluss gezahlte Prämie je Recht, WE.'],['r,T','Hier stetiger jährlicher Finanzierungszins und volle Haltedauer in Jahren.'],['\\Pi_T^{simple},\\Pi_T^{funded}','Einfacher beziehungsweise endzeitbezogen finanzierter Gewinn je Recht, WE.'],['M,\\Pi_T^{contract}','Rechte je Kontrakt und entsprechender Kontraktgewinn, WE.']]),
  X('Im Geld und trotzdem unter der Gewinnschwelle','Long Call, Strike 100, Prämie sieben, Endkurs 104, Kontrakt umfasst 50 Rechte. Zunächst ohne Verzinsung oder Gebühren.',[
   F('H_T=104-100=4,\\qquad \\Pi_T^{simple}=4-7=-3,\\qquad \\Pi_T^{contract}=50(-3)=-150','Die Ausübung liefert einen positiven Vorteil, deckt jedoch die frühere Ausgabe nicht.',[['H_T','Auszahlung je Recht, WE.'],['\\Pi_T^{simple}','Einfacher Gewinn je Recht, WE.'],['\\Pi_T^{contract}','Einfacher Gewinn des ausdrücklich 50 Rechte umfassenden Kontrakts, WE.']]),
   'Nichtausübung würde den positiven Endvorteil von vier zusätzlich aufgeben. Die frühere Prämie ist für diese letzte Wahl bereits gezahlt; sie bleibt für die Beurteilung des gesamten Anlageerfolgs relevant.'
  ],'Ausübungsentscheidung und Erfolg der gesamten Position haben verschiedene Vergleichsmaßstäbe.')
 ]),
 S('sale-exercise','8. Verkauf des Rechts und Ausübung vergleichen','a c',[
  'Bei einem ausübbaren Call kann eine Ausübung vorhandenen Zeitwert aufgeben. Wer stattdessen das Recht verkauft, kann dessen gesamten erzielbaren Marktpreis realisieren. Dieser Vergleich braucht tatsächlich ausführbare Geld-Brief-Kurse und Kosten; ein theoretischer Modellmittelwert ist kein garantierter Verkaufserlös. Europäische Inhaber dürfen vor T gegebenenfalls verkaufen, aber nicht daraus ein frühzeitiges Ausübungsrecht ableiten.',
  X('Ein amerikanischer Call enthält noch handelbaren Restwert','Spot 120, Strike 100, sofortige Ausübung erlaubt. Die Option kann im eigenen reibungsfreien Fall tatsächlich für 23 verkauft werden.',[
   F('I_c=120-100=20,\\qquad v^{sale}-I_c=23-20=3','Verkauf erhält hier drei WE mehr als die unmittelbare Ausübungswirkung.',[['I_c','Sofortausübungswert je Recht, WE.'],['v^{sale}','Tatsächlich erzielbarer Optionsverkaufserlös je Recht, WE.']]),
   'Das frühe Ausübungsrecht macht die Ausübung möglich, nicht zwingend optimal. Dividendentermine, Finanzierung, Marktfriktionen und die verbleibende Wahl beeinflussen die konkrete Entscheidung.'
  ],'Ein positiver Ausübungswert ist allein kein hinreichender Grund für frühe Ausübung.')
 ]),
 S('call-bounds','9. Die europäische Calluntergrenze durch einen Zahlungsweg begründen','b',[
  'Zunächst keine Ausschüttungen, keine Kosten, frei mögliche Finanzierung und Leerverkäufe. Call plus genügend sichere Anlage zur Zahlung des Strikes kann am Ende mindestens eine Aktie bereitstellen: Liegt der Kurs über K, wird ausgeübt; sonst bleibt der sichere Betrag K, der mindestens die dann billigere Aktie kaufen kann. Dieses Paket darf heute nicht weniger kosten als die Aktie.',
  F('c_t+KD\\ge S_t,\\qquad \\max(S_t-KD,0)\\le c_t\\le S_t','Die obere Grenze folgt daraus, dass das Callrecht nicht mehr als die jederzeit vollständig gehaltene Aktie leisten kann. Keine Ausschüttung wird hier vorausgesetzt.',[['c_t','Europäischer Callwert je Aktie, WE.'],['S_t,K','Heutiger Aktienkurs und Strike, WE.'],['D','Heutiger positiver Diskontfaktor einer sicheren Zahlung bei T.'],['KD','Heutiger Barwert der Strikezahlung, WE.']]),
  X('Strikebarwert und Sofortausübungswert nicht vertauschen','Spot 100, Strike 100, ein Jahr, effektiver Zins fünf Prozent, keine Ausschüttungen.',[
   F('KD=\\frac{100}{1{,}05}=95{,}238095,\\qquad c_t\\ge100-95{,}238095=4{,}761905','Der Call besitzt trotz Spot-ATM eine positive Finanzierungsuntergrenze.',[['KD','Strikebarwert, WE.'],['c_t','Europäischer Callwert, WE.']]),
   'Eine angebotene Prämie zwei läge nicht bloß unter einem subjektiven Prognosewert, sondern unter dieser replizierbaren Grenze. Die Richtung und alle späteren Verpflichtungen müssen trotzdem vollständig beschrieben werden.'
  ],'Die richtige europäische Grenze verwendet den Zeitpunkt der Strikezahlung.')
 ]),
 S('call-arbitrage','10. Die Callverletzung mit einem vollständigen Ledger ausnutzen','b',[
  X('Unterpreisiger Call ohne vergessene Lieferpflicht','Voriger Fall: Spot 100, Strike 100, sichere Anlage 95,238095 liefert 100, Call angeboten für zwei. Reibungsfrei, keine Ausschüttungen.',[
   T(['Position','Heute (WE)','Bei Endkurs höchstens 100','Bei Endkurs über 100'],[
    ['Eine Aktie leer verkaufen','+100','Aktie zum jeweiligen Endkurs zurückkaufen.','Aktie aus Call liefern.'],
    ['Call kaufen','−2','Verfällt; keine Ausübung.','100 zahlen, Aktie erhalten.'],
    ['Sicher 100 am Ende bereitstellen','−95,238095','100 verfügbar.','100 für Call verfügbar.'],
    ['Zusammen','+2,761905','Nicht negativer Endüberschuss; genaue Rechnung folgt.','Endrest null.']
   ],'Die positive Anfangseinnahme kann zusätzlich sicher angelegt werden; die Tabelle zeigt sie nicht nochmals als unabhängigen Endgewinn.'),
   F('W_T=\\max(S_T-100,0)-S_T+100=\\max(100-S_T,0)\\ge0','Callleistung, Rückkauf der leer verkauften Aktie und sichere Strikebereitstellung werden am gleichen Endtermin verrechnet.',[['W_T','Restwert des Endpakets je Recht in WE; ohne erneute Addition der bereits heute erhaltenen Anfangseinnahme.'],['S_T','Nicht negativer Aktienkurs am Endtermin, WE.'],['100','Strike und durch die sichere Anlage bereitgestellte Endzahlung, WE.']]),
   'Im niedrigen Zustand bleibt nach Rückkauf der leer verkauften Aktie ein nicht negativer Rest. Im hohen Zustand finanziert die Anlage die Callausübung und die erhaltene Aktie erfüllt die Leerverkaufspflicht. Die Prämie wird heute bezahlt und am Ende nicht ein zweites Mal abgezogen.'
  ],'Arbitrage wird aus allen Zahlungszuständen bewiesen, nicht aus einer vorteilhaften Kursprognose.')
 ]),
 S('put-bounds','11. Europäische Putgrenzen und die richtige obere Grenze','b',[
  'Put plus Aktie liefert am Ende mindestens den Strike: Bei niedrigem Aktienkurs wird zum Strike verkauft, bei hohem Kurs bleibt die mehr wertvolle Aktie. Der heutige Paketpreis muss deshalb mindestens dem Strikebarwert entsprechen. Die Putauszahlung kann bei nicht negativen Aktienkursen nie mehr als K betragen; ihr heutiger europäischer Wert kann daher höchstens dessen heutigen Barwert erreichen.',
  F('\\max(KD-S_t,0)\\le p_t\\le KD','Ohne Ausschüttungen. Bei negativem Zins kann D größer eins sein. Dann kann die korrekte obere europäische Grenze auch über dem nicht diskontierten Strike liegen.',[['p_t','Europäischer Putwert je Recht, WE.'],['K,S_t','Positiver Strike und nicht negativer Aktienkurs, WE.'],['D','Positiver passender Zahlungsdiskontfaktor bis T.']]),
  X('Ein sicherer späterer Strike darf bei negativem Zins heute mehr kosten','Eigener Grenzfall einer wertlos bleibenden Aktie, Strike 100, ein Jahr, effektiver Jahreszins minus fünf Prozent, nur Endausübung.',[
   F('p_t=\\frac{100}{0{,}95}=105{,}263158>100','Die sichere spätere Zahlung besitzt hier einen Barwert über ihrem Nennbetrag.',[['p_t','Heutiger europäischer Putwert, WE.']]),
   'Der pauschale Merksatz Putwert höchstens Strike setzt für diese Form der Grenze eine geeignete nicht negative Verzinsung voraus. Der spätere Geldbetrag bleibt trotzdem 100; heutiger Wert und spätere Zahlung sind nicht identisch.'
  ],'Die allgemeinere endzeitbezogene Putobergrenze ist der passende Strikebarwert.')
 ]),
 S('put-arbitrage','12. Auch die Putuntergrenze über beide Zustände prüfen','b',[
  X('Ein Put ist relativ zu Aktie und sicherer Zahlung zu billig','Spot 80, Strike 100, effektiver Jahreszins fünf Prozent, ein Jahr, keine Ausschüttung. Putpreis angeboten zehn; untere Grenze rund 15,238095.',[
   F('C_0=80+10-\\frac{100}{1{,}05}=-5{,}238095','Aktie und Put kosten 90; Kreditaufnahme mit Endschuld 100 liefert heute 95,238095. Es bleibt heute ein positiver Zufluss von 5,238095.',[['C_0','Nettoanfangsausgabe des gesamten Pakets je Recht, WE. Der negative Wert bedeutet einen heutigen Zufluss.']]),
   'Bei Endkurs unter 100 wird die Aktie über den Put für 100 verkauft; das tilgt die gesamte Schuld. Bei Endkurs mindestens 100 wird die Aktie am Markt verkauft; nach Tilgung bleibt mindestens null. Beide Endwege benötigen dieselbe tatsächlich finanzierbare Schuld. Die Anfangseinnahme wird nicht mit einem früheren hypothetischen Ausübungswert verwechselt.'
  ],'Die Grenze folgt aus einem finanzierbaren Paket; eine abweichende Erwartungsrendite widerlegt sie nicht.')
 ]),
 S('income','13. Ausschüttungen verändern den replizierten Aktienerhalt','b c',[
  'Ein Callinhaber ist vor Ausübung nicht allein wegen seines Kaufrechts Aktionär und erhält nicht automatisch die laufenden Dividenden. Ein passend vorab bezahlter Aktienerhalt am Ende ist deshalb weniger wert als eine heute gekaufte Aktie mit allen zwischenzeitlichen Ausschüttungen. Entscheidend ist die ausdrücklich bezeichnete Ertragskonvention.',
  F('\\max(A-B,0)\\le c_t\\le A,\\qquad \\max(B-A,0)\\le p_t\\le B','Hier gelten das konstante stetige proportionale Ausschüttungsmodell und die gemeinsamen europäischen Endtermine; A und B enthalten die passenden Ertrags- und Zinsfaktoren.',[...symbols,['A=S_te^{-q\\tau}','Heutiger Prepaid-Wert des Endaktienerhalts, WE.'],['B=Ke^{-r\\tau}','Heutiger Strikebarwert, WE.']]),
  D('Bekannte Gelddividenden sind nicht dieselbe Eingabe wie eine stetige Rendite',[
   F('A=S_t-\\sum_j D_jP(t,t_j)','Für passend bekannte und replizierbare Gelddividenden wird deren heutiger Barwert vom Spot abgezogen. Die Ersetzung durch eine stetige Rendite ist eine andere Modellannahme.',[['A,S_t','Vorab bezahlter Endaktienerhalt und heutiger Aktienkurs, WE.'],['D_j,t_j','Bekannter Gelddividendenbetrag je Aktie und sein Zeitpunkt vor dem Enderhalt.'],['P(t,t_j)','Passender Zahlungsdiskontfaktor vom heutigen t bis t_j.'],['j','Index der berücksichtigten Ausschüttung.']]),
   'In einem Modell unsicherer künftiger Dividenden darf ein bloßer Analystenmittelwert nicht ohne weitere Voraussetzungen wie eine bereits sichere replizierbare Zahlung behandelt werden. Vor allem für frühe Ausübung ist der tatsächliche Ex-Tag relevant, nicht nur ein geglätteter Jahresprozentsatz.'
  ])
 ]),
 S('forward-replication','14. Warum der Forward eine andere Replikation benötigt','b',[
  'Ein einzelner Forward hat eine lineare Endleistung: eine Aktie erhalten und den vereinbarten Lieferbetrag zahlen. Eine Aktie plus passende feste Finanzierung kann dieselbe Leistung in jedem Endzustand herstellen. Der faire Lieferpreis macht den heutigen Nettowert null. Beim alten Forward bleibt der alte Lieferbetrag dagegen fest.',
  F('H_T^F=S_T-K,\\qquad V_t^F=A-B','Die Formel verwendet den tatsächlichen Lieferbetrag K; bei neu fair vereinbarter Quote gilt A gleich B. Die Aktie und der sichere Geldbaustein replizieren eine lineare Pflicht.',[['H_T^F','Endleistung des Long-Forward je Aktie, WE.'],['V_t^F','Heutiger Wert dieses bestehenden Forward, WE.'],['S_T,K','Aktienkurs am Endtermin und vereinbarter Lieferbetrag, WE.'],['A,B','Vorab bezahlter Endaktienerhalt und heutiger Barwert des Lieferbetrags, WE.']]),
  'Call und Put schneiden dagegen jeweils eine ungünstige Seite der linearen Differenz bei null ab. Genau dieser Knick verhindert, eine Option im allgemeinen Mehrzustandsfall mit unverändert einer Aktie und einem unveränderten Geldbetrag exakt nachzubauen. Ein fehlender Anfangsnullwert einer allein gekauften Option ist keine Verletzung fairer Bewertung.'
 ]),
 S('option-replication','15. Einen bedingten Anspruch in zwei Zuständen vollständig replizieren','b',[
  X('Die Aktienquote wird aus der Zahlungsdifferenz bestimmt','Eigener Einperiodenmarkt ohne Ausschüttungen: heutige Aktie 100, mögliche Endkurse ausschließlich 130 und 80. Effektiver sicherer Jahreszins fünf Prozent. Callstrike 100.',[
   F('\\Delta=\\frac{30-0}{130-80}=0{,}6,\\qquad B_T=-0{,}6\\cdot80=-48,\\qquad c_0=0{,}6\\cdot100-\\frac{48}{1{,}05}=14{,}285714','0,6 Aktien liefern oben 78 und unten 48. Die feste Endschuld 48 lässt exakt die Callzahlungen 30 und null übrig.',[['\\Delta','Aktienanzahl je repliziertem Callrecht.'],['B_T','Endwert des Geldbausteins; negativ bezeichnet hier Schuld, WE.'],['c_0','Heutiger Replikationspreis des Call, WE.']]),
   T(['Endzustand','0,6 Aktien (WE)','Endschuld (WE)','Paket (WE)','Call (WE)'],[['Kurs 130','78','−48','30','30'],['Kurs 80','48','−48','0','0']],'Die Gleichheit muss in jedem im Modell enthaltenen Zustand gelten.'),
   'Die Replikation erfordert keine subjektive Wahrscheinlichkeit der beiden Kurse. Der heutige Preis des exakt gleichen Anspruchs folgt aus heutigen Aktien- und Finanzierungspreisen. Wer für denselben Anspruch abweichend bezahlt, kann durch Kauf der billigeren und Verkauf der teureren Variante eine Differenz isolieren.'
  ],'Die Quote 0,6 ist ein Hedgeverhältnis im bezeichneten Modell, keine garantierte Wahrscheinlichkeit realer Kurssteigerung.')
 ]),
 S('replication-limits','16. Warum das Zweizustandspaket nicht überall dieselbe Kurve ist','b c',[
  'Eine Gerade kann zwei festgelegte Punkte einer geknickten Auszahlungsfunktion treffen. Das beweist noch keine statische Gleichheit an allen anderen Aktienkursen. In einem Mehrperiodenmodell kann die Aktienquote bei neuen Informationen angepasst werden; in einer stetigen Theorie benötigt eine exakte dynamische Replikation besonders starke Handels- und Prozessannahmen.',
  F('0{,}6\\cdot100-48=12\\ne\\max(100-100,0)=0','Ein zusätzlich gedachter Endkurs 100 würde das vorherige Paket und den Call unterscheiden. Er war kein dritter bereits enthaltener Zustand des ursprünglichen Zweizustandsmarkts.',[['12','Paketendwert am zusätzlich betrachteten Kurs, WE.'],['0','Call-Endauszahlung bei Kurs gleich Strike, WE.']]),
  fig('replication','Zwei getroffene Punkte machen keine allgemeine statische Replikation','Voriger Zweizustandsfall: Endkurse 80 und 130. Dazwischen gezeichnete Kurse illustrieren ausschließlich die Begrenzung des statischen Pakets.',[80,130],[0,33],'Zusätzlich betrachteter Endkurs (WE)','Endleistung (WE)',[
   {name:'Call mit Strike 100',points:grid(80,130,50,s=>Math.max(s-100,0))},{name:'Statisches Paket 0,6 Aktien minus 48',dash:true,points:grid(80,130,50,s=>.6*s-48)}
  ],'An den zwei Modellendpunkten stimmen die Werte. Bei 100 liefert das Paket zwölf, der Call null. Wird ein weiterer möglicher Zustand wirklich zugelassen, muss die Bewertung mit den neuen Marktannahmen erneut erfolgen.'),
  'Transaktionskosten, diskrete Anpassung, Kurssprünge und begrenzte Finanzierung können verbleibende Risiken erzeugen. Ein rechnerisch delta-neutrales Portfolio ist deshalb nicht automatisch weltweit und dauerhaft risikofrei.'
 ]),
 S('state-prices','17. Bewertungsgewichte sind keine Kursprognose','b',[
  F('\\pi_u+\\pi_d=\\frac1{1{,}05},\\qquad130\\pi_u+80\\pi_d=100,\\qquad\\pi_u=\\pi_d=\\frac{10}{21}','Im vorherigen vollständigen Einperiodenmarkt stimmen die Preise einer sicheren Geldeinheit und der Aktie die beiden positiven Zustandspreise ab.',[['\\pi_u,\\pi_d','Heutige Preise eines Anspruchs auf eine WE nur im hohen beziehungsweise niedrigen Zustand.'],['130,80,100','Beide Endkurse und heutiger Aktienpreis, WE.']]),
  F('c_0=30\\pi_u+0\\pi_d=\\frac{100}{7},\\qquad p_0=0\\pi_u+20\\pi_d=\\frac{200}{21}','Die Preise folgen aus demselben System für Call und Put. Zustandspreise sind bereits diskontiert und summieren sich hier nicht zu eins.',[['c_0,p_0','Heutiger Call- und Putwert bei gleichem Strike 100, WE.'],['\\pi_u,\\pi_d','Zuvor bestimmte positive Zustandspreise je bedingter WE.']]),
  'Erst nach Division durch den Diskontfaktor entstehen die hier jeweils einhalb großen risikoneutralen Gewichte. Ein Analyst kann eine andere tatsächliche Steigerungswahrscheinlichkeit erwarten und dennoch denselben No-Arbitrage-Preis verwenden. Erwarteter Ertrag unter einer Prognoseverteilung und Replikationspreis sind unterschiedliche Rechnungen.'
 ]),
 S('convexity','18. Der Knick erklärt die Volatilitätswirkung','b c',[
  'Der Optionskäufer behält eine günstige Seite und kann die ungünstige Ausübung vermeiden. Die Call- und Put-Endfunktionen sind konvex. Bei einer passenden mittelwerterhaltenden Streuungsvergrößerung unter denselben Bewertungsgewichten kann deshalb der erwartete Optionsendwert steigen, obwohl die erwartete Aktie gleich bleibt. Ein bloß größerer historischer Varianzwert irgendeiner anderen Verteilung beweist diesen Vergleich nicht automatisch.',
  X('Gleicher Mittelwert, andere bedingte Leistung','Zwei eigene gleichgewichtete Endverteilungen, Zins null, Strike 100. Eng: Kurse 90 und 110. Breit: Kurse 70 und 130. Beide Mittelwerte 100.',[
   F('\\bar C_{eng}=\\tfrac12(0+10)=5,\\quad\\bar C_{breit}=\\tfrac12(0+30)=15,\\quad\\bar S_{eng}=\\bar S_{breit}=100','Die breitere symmetrische Verteilung erhöht den Callwert und analog den Putwert. Hier sind die Gewichte ausdrücklich Bewertungsgewichte im eigenen Einperiodenmarkt.',[['\\bar C_{eng},\\bar C_{breit}','Mit den bezeichneten Gewichten bewertete Call-Endleistungen, WE.'],['\\bar S_{eng},\\bar S_{breit}','Gleich gewichtete Aktienendmittelwerte, WE.']]),
   'Die zusätzlichen hohen Zustände vergrößern die günstige Ausübung. Zusätzliche niedrige Zustände machen die nicht ausgeübte Seite nicht unter null schlechter. Die höhere Prämie macht den Käufer aber nicht automatisch zu einem Anleger mit höherem erwarteten Nettogewinn.'
  ],'Mehr Variabilität und bessere gerichtete Kursprognose sind zwei verschiedene Werttreiber.')
 ]),
 S('spot','19. Den heutigen Aktienkurs isoliert verändern','c',[
  'Ein höherer Spot verbessert das Kaufrecht und verschlechtert das Verkaufsrecht, wenn Strike, Restzeit, Ausschüttungsregel und Modellparameter gleich bleiben. Dabei bewegt sich der Optionspreis typischerweise weniger als eine Aktie; die lokale Aktienquote wird Delta genannt. Sie ist keine über große Kursänderungen feste Multiplikationskonstante.',
  X('Dieselbe Kursänderung wirkt auf Call und Put entgegengesetzt','Europäisches stetiges Modell: Strike 100, ein Jahr, Zins fünf Prozent, Volatilität 20 %, keine Ausschüttung. Nur Spot wechselt von 100 auf 120.',[
   T(['Spot (WE)','Callwert (WE)','Putwert (WE)','Call-Ausübungswert (WE)'],[100,120].map(s=>[String(s),fmt(val(s).call),fmt(val(s).put),String(Math.max(s-100,0))]),'Modellwerte gerundet; alle übrigen Vorgaben bleiben gleich.'),
   'Der neue Callpreis ist nicht der alte Callpreis plus exakt 20. In den verschiedenen Zuständen verändert sich die Wahrscheinlichkeit vorteilhafter Ausübung und damit das passende lokale Hedgeverhältnis. Der Put verliert zugleich einen Teil seines Schutzwerts.'
  ],'Ein Kursanstieg kann in der Wirklichkeit von gleichzeitig sinkender impliziter Volatilität überlagert werden.'),
  fig('value-intrinsic','Heutige europäische Preise und heutige Spot-Ausübungswerte','Strike 100, ein Jahr, stetiger Zins fünf Prozent, Volatilität 20 %, keine Ausschüttung; eigenes Black–Scholes–Merton-Lehrmodell.',[50,150],[0,58],'Heutiger Aktienkurs (WE)','Wert je Recht (WE)',[
   {name:'Callpreis',points:grid(50,150,50,s=>val(s).call)},{name:'Call-Ausübungswert',dash:true,points:grid(50,150,50,s=>Math.max(s-100,0))},
   {name:'Putpreis',points:grid(50,150,50,s=>val(s).put)},{name:'Put-Ausübungswert',dash:true,points:grid(50,150,50,s=>Math.max(100-s,0))}
  ],'Der vertikale Abstand zwischen Preis und zugehörigem Ausübungswert ist der Zeitwert. Beim tief im Geld liegenden europäischen Put kann dieser Abstand negativ sein; das Kaufrecht des Call bleibt hier bei nicht negativem Zins und ohne Ausschüttung über seinem Ausübungswert.')
 ]),
 S('strike','20. Ein anderer Strike ist eine andere Vertragsbedingung','c',[
  'Ein höherer Strike macht das Kaufrecht schwächer: Für dieselbe Aktie muss mehr gezahlt werden. Beim Put wird dagegen das Verkaufsrecht besser, weil ein höherer Betrag verlangt werden darf. Dieser Vergleich verändert nicht rückwirkend den Strike eines bestehenden Vertrags, sondern vergleicht verschiedene Rechte mit sonst gleichen Bedingungen.',
  X('Call und Put reagieren auf den höheren Strike verschieden','Spot 100, ein Jahr, stetiger Zins fünf Prozent, Volatilität 20 %, keine Ausschüttung. Verglichen werden Strikes 100 und 120.',[
   T(['Strike (WE)','Callwert (WE)','Putwert (WE)'],[100,120].map(k=>[String(k),fmt(val(100,k).call),fmt(val(100,k).put)]),'Eigene Modellrechnung mit ausschließlich geändertem Strike.'),
   'Der teurere Put ist nicht automatisch ein besseres Geschäft: Die höhere mögliche Versicherungsleistung kostet eine höhere Prämie. Auch Gewinnschwelle und Finanzierung verändern sich. Ein niedriger nominaler Optionspreis kann schlicht ein viel weiter entferntes günstiges Ausübungsrecht bedeuten.'
  ],'Moneyness beschreibt das veränderte Recht; Preiswürdigkeit braucht zusätzlich den gezahlten Preis.')
 ]),
 S('volatility','21. Volatilität bei festgehaltenem Spot und Carry erhöhen','c',[
  'Im verwendeten europäischen Modell erhöht eine größere Volatilität beide Optionswerte. Sie verändert die Breite der risikoneutralen Endverteilung, ohne den durch Spot und Carry vorgegebenen Forward zu ändern. Call und Put können deshalb gleichzeitig teurer werden. Diese gemeinsame Wirkung unterscheidet Volatilität von Spot, Strike, Zins und Ausschüttung.',
  X('Mehr Schwankung ist keine höhere sichere Aktienrendite','Spot und Strike je 100, ein Jahr Restzeit, stetiger Zins fünf Prozent, keine Ausschüttung. Nur die annualisierte Volatilität steigt von 20 auf 40 Prozent.',[
   T(['Volatilität','Callwert (WE)','Putwert (WE)'],[.2,.4].map(v=>[(v*100)+' %',fmt(val(100,100,.05,0,v).call),fmt(val(100,100,.05,0,v).put)]),'Die gleichen Spot- und Carryannahmen halten die Forwardquote in beiden Fällen unverändert.'),
   'Wer das teurere Recht neu erwirbt, bezahlt den zusätzlichen Wahlwert. Aus einem höheren Preis bei gleicher erwarteter Kursrichtung folgt kein risikoloser Gewinn. Für Shortpositionen ist die größere mögliche bedingte Pflicht entsprechend nachteilig.'
  ],'Positive Vega-Wirkung gilt unter dem angegebenen Modellvergleich, nicht als vollständige reale Tagesprognose.'),
  fig('volatility','Eine isolierte Volatilitätserhöhung verteuert beide Rechte','Spot und Strike 100, ein Jahr, stetiger Zins fünf Prozent, keine Ausschüttung.',[0,60],[0,29],'Annualisierte Volatilität (%)','Europäischer Wert (WE)',[
   {name:'Callwert',points:grid(0,60,60,v=>val(100,100,.05,0,v/100).call)},{name:'Putwert',dash:true,points:grid(0,60,60,v=>val(100,100,.05,0,v/100).put)}
  ],'Bei Volatilität null bleibt im Grundfall der diskontierte sichere Callvorteil positiv und der Put null. Unsicherheit und Zeitfinanzierung sind verschiedene Bestandteile des Preises.')
 ]),
 S('maturity','22. Laufzeitwirkung mit ihren Voraussetzungen erklären','c',[
  'Eine längere Restzeit schafft mehr mögliche Kursentwicklung, verschiebt aber zugleich die vertragliche Ausübung und die Geldleistungen. Ein amerikanisches Recht mit späterem Ende und sonst identischen Rechten enthält mindestens die früheren Ausübungsmöglichkeiten; eine kürzere Position kann im Prinzip nachgebildet werden. Ein europäisches Recht mit späterem Endtermin enthält das Recht auf Ausübung am früheren Endtermin gerade nicht.',
  X('Ein europäischer Put kann mit längerer Laufzeit billiger werden','Eigener deterministischer Fall ohne Ausschüttung: Spot 20, Strike 100, stetiger Zins fünf Prozent, Volatilität null. Die Aktie bleibt für beide betrachteten Endtermine unter dem Strike.',[
   F('p(0{,}5)=100e^{-0{,}025}-20\\approx77{,}530991,\\qquad p(2)=100e^{-0{,}1}-20\\approx70{,}483742','Der spätere Empfang des Strikes wird stärker diskontiert; der vorab bezahlte Endaktienerhalt bleibt ohne Ausschüttung 20.',[['p(0{,}5),p(2)','Heutige europäische Putwerte bei halbem beziehungsweise zwei Jahren Restzeit, WE.'],['e','Natürliche Exponentialbasis.']]),
   'Die längere europäische Option darf den hohen heutigen Verkaufsbetrag nicht früher verlangen. Die Nullvolatilität macht den Gegenfall besonders durchsichtig; er muss nicht als allgemeiner normaler Preisverlauf aller Puts gelesen werden.'
  ],'Mehr Zeit erhöht häufig den Wahlwert, ist für europäische Preise aber kein voraussetzungsloser Monotoniesatz.'),
  fig('maturity','Längere Restzeit verbindet Wahlwert und aufgeschobenen Geldempfang','Stetiger Zins fünf Prozent, keine Ausschüttung. ATM-Call: Spot und Strike 100, Volatilität 20 %. Sicherer ITM-Put: Spot 20, Strike 100, Volatilität null.',[0,3],[-15,24],'Restlaufzeit (Jahre)','Preis minus Spot-Ausübungswert (WE)',[
   {name:'ATM-Call: positiver Zeitwert',points:grid(0,3,60,t=>val(100,100,.05,0,.2,t).tc)},{name:'Sicherer ITM-Put: negativer Zeitwert',dash:true,points:grid(0,3,60,t=>val(20,100,.05,0,0,t).tp)}
  ],'Die beiden bewusst verschieden bezeichneten Verträge illustrieren zwei Mechanismen. Sie sind kein isolierter Call-Put-Vergleich bei identischer Moneyness. Am Ablauf ist der Zeitwert beider null.')
 ]),
 S('decay','23. Zeitverfall ist eine lokale Bedingung, kein Tagesverlustgesetz','c',[
  'Theta beschreibt eine kleine Kalenderzeitänderung bei sonst festgehaltenen Modellgrößen. Positive Restlaufzeit wird beim Ablauf kleiner; deshalb ist die Ableitung nach Kalenderzeit das Negative der Ableitung nach Restzeit. Bei vielen üblichen gekauften Optionen ist Theta negativ. Der vorherige europäische Put kann dagegen mit näher rückendem Strikeempfang an Wert gewinnen.',
  F('\\Theta=\\left.\\frac{\\partial v}{\\partial t}\\right|_{S,\\sigma,r,q,K}=-\\frac{\\partial v}{\\partial\\tau}','Der Index unter dem Ableitungsstrich benennt die festgehaltenen übrigen Größen. Das ist keine Aussage, dass diese Größen in der Wirklichkeit konstant bleiben.',[['\\Theta','Lokale Kalenderzeitsensitivität, WE je Jahr. Für eine Tagesquote ist eine ausdrücklich gewählte Tageskonvention nötig.'],['v,t,\\tau','Optionswert, Kalenderzeit und Restlaufzeit.'],['S,\\sigma,r,q,K','Festgehaltene Modellgrößen: Spot, Volatilität, Zins, Ausschüttungsrendite und Strike.'],['\\partial','Partielle Ableitung.']]),
  'Die tatsächliche tägliche Preisänderung enthält zugleich Kursbewegung, Änderungen der Volatilitätsfläche und weitere Faktoren. Auch bei negativem Theta kann eine Longoption steigen. Ein täglich gleich großer Prämienabzug oder ein universelles zeitliches Halbierungsverhältnis wird daraus nicht abgeleitet.'
 ]),
 S('rates','24. Zinswirkung über den Strikebarwert und die Replikation verstehen','c',[
  'Höherer Zins verringert im einfachen europäischen Modell bei unverändertem Spot und Ausschüttungsparameter den heutigen Wert der späteren Strikezahlung. Das begünstigt den Call. Beim Put wird der aufgeschobene Strikeempfang weniger wert; das wirkt entgegengesetzt. Diese isolierte Betrachtung ist nicht die Behauptung, dass Aktienkurse bei einem realen Zinsanstieg unverändert bleiben.',
  X('Nur den Zins verändern','Spot und Strike 100, ein Jahr, Volatilität 20 %, keine Ausschüttung. Stetiger Zins steigt von fünf auf zehn Prozent.',[
   T(['Stetiger Zins','Callwert (WE)','Putwert (WE)','Strikebarwert (WE)'],[.05,.1].map(r=>[(r*100)+' %',fmt(val(100,100,r).call),fmt(val(100,100,r).put),fmt(100*Math.exp(-r))]),'Die Preise sind modellbasierte isolierte Vergleichswerte, keine Marktprognose.'),
   'Nur den Endoptionspayoff mit einem höheren Satz abzuzinsen wäre unvollständig. Die mit dem heutigen Spot konsistente Bewertungsverteilung und Carrybeziehung müssen gleichzeitig stimmen. Ein unverändert vorgegebener tatsächlicher Prognosemittelwert ersetzt diesen Zusammenhang nicht.'
  ],'Zinsänderung im Preismodell und simultane tatsächliche Marktänderungen werden getrennt.'),
  fig('rates','Der isolierte Zins wirkt auf Call und Put entgegengesetzt','Spot und Strike 100, ein Jahr, Volatilität 20 %, keine Ausschüttung. Dargestellt wird die Änderung gegenüber stetigem Zins null.',[-5,15],[-6,12],'Stetiger jährlicher Zins (%)','Wertänderung gegenüber Zins null (WE)',[
   {name:'Callwertänderung',points:grid(-5,15,60,r=>val(100,100,r/100).call-val(100,100,0).call)},{name:'Putwertänderung',dash:true,points:grid(-5,15,60,r=>val(100,100,r/100).put-val(100,100,0).put)}
  ],'Der Bezug auf dieselbe Nullzinsbasis macht die Richtungen sichtbar. Negative Zinsen bleiben zulässig; sie erfordern die passenden diskontierten Grenzen.')
 ]),
 S('dividends','25. Ausschüttung und Optionsinhaberschaft auseinanderhalten','c',[
  'Eine höhere vorgesehene Ausschüttung lässt unter sonst gleichen Bedingungen weniger Aktienwert für den Enderhalt übrig. Ein Call auf diese Aktie wird dadurch im Standardvergleich weniger wert; ein Put gewinnt an Wert. Der Putkäufer erhält dadurch nicht die Dividende selbst. Die Wirkung läuft über den Aktienanspruch und seinen Preisverlauf.',
  X('Die Renditeannahme ändern, ohne den Spot zugleich zu verschieben','Spot und Strike je 100, stetiger Zins fünf Prozent, Volatilität 20 %, ein Jahr. Nur die stetige Ausschüttungsrendite steigt von null auf fünf Prozent.',[
   T(['Ausschüttungsrendite','Callwert (WE)','Putwert (WE)','Prepaid-Aktienerhalt (WE)'],[0,.05].map(q=>[(q*100)+' %',fmt(val(100,100,.05,q).call),fmt(val(100,100,.05,q).put),fmt(100*Math.exp(-q))]),'Bei gleicher Zins- und Ausschüttungsrendite besitzen hier Call und Put desselben Strikes denselben europäischen Wert.'),
   'Das ist ein Vergleich von Zahlungsannahmen bei gleichem heutigen Kurs. Ein realer Ex-Dividenden-Kursabschlag und eine Änderung der erwarteten künftigen Ausschüttungen sind unterschiedliche Ereignisse. Die erwartete Ausschüttung darf nicht noch einmal als unabhängiger Optionszufluss addiert werden.'
  ],'Wer die Aktie nicht besitzt, erhält ihre Ausschüttung nicht automatisch durch den Optionskauf.'),
  fig('dividends','Mehr laufende Ausschüttung schwächt Call und stärkt Put','Spot und Strike 100, ein Jahr, stetiger Zins fünf Prozent, Volatilität 20 %; nur die stetige proportionale Ausschüttungsrendite verändert sich.',[0,12],[0,14],'Stetige Ausschüttungsrendite (%)','Europäischer Wert (WE)',[
   {name:'Callwert',points:grid(0,12,60,q=>val(100,100,.05,q/100).call)},{name:'Putwert',dash:true,points:grid(0,12,60,q=>val(100,100,.05,q/100).put)}
  ],'Die Kurven treffen sich bei Rendite fünf Prozent, weil dann der Prepaid-Aktienerhalt und der Strikebarwert gleich groß sind. Der historische Dividendenbetrag allein ist keine vollständige Modellprognose.')
 ]),
 S('factors','26. Die Werttreiber mit ihren Bedingungen zusammenfassen','c',[
  T(['Isolierte Erhöhung','Europäischer Call','Europäischer Put','Wesentliche Bedingung'],[
   ['Heutiger Aktienkurs','Steigt oder bleibt gleich.','Sinkt oder bleibt gleich.','Dasselbe Recht, übrige Parameter fest.'],
   ['Strike','Sinkt oder bleibt gleich.','Steigt oder bleibt gleich.','Vergleich verschiedener Strikes mit gleichen übrigen Rechten.'],
   ['Volatilität','Steigt im Standardmodell.','Steigt im Standardmodell.','Passender konvexer Streuungsvergleich; gleicher Spot und Carry.'],
   ['Restlaufzeit','Häufig höher; nicht uneingeschränkt.','Häufig höher; nicht uneingeschränkt.','Europäische Endtermine, Finanzierung und Ausschüttungen beachten.'],
   ['Zins','Steigt im bezeichneten Modell.','Sinkt im bezeichneten Modell.','Spot und Ausschüttungsparameter festgehalten.'],
   ['Ausschüttungsrendite','Sinkt im bezeichneten Modell.','Steigt im bezeichneten Modell.','Stetige proportionale Ertragskonvention.']
  ],'Ein Richtungsmerkblatt ist erst zusammen mit seinem Modell und seinen festgehaltenen Größen vollständig.'),
  'Bei Rohstoffen kann eine Besitzbelastung den Carry erhöhen und eine Besitzvergünstigung ihn senken. Das bedeutet nicht, dass jede ökonomische Lager- oder Nutzengröße für jeden Markt vollständig handelbar ist. Bei Währungsoptionen übernimmt der ausländische Zins im einfachen Modell die Rolle der laufenden Rendite; heimische und fremde Quote müssen konsistent bezeichnet werden.'
 ]),
 S('american','27. Das zusätzliche amerikanische Recht richtig begrenzen','a b c',[
  F('C_t\\ge c_t,\\quad C_t\\ge I_c,\\qquad P_t\\ge p_t,\\quad P_t\\ge I_p','Amerikanische Rechte können mindestens die passenden europäischen Endrechte wahrnehmen und bei erlaubter heutiger Ausübung den Spot-Ausübungswert sichern. Sonst gleiche Bedingungen und reibungsfreie Umsetzbarkeit werden vorausgesetzt.',[['C_t,P_t','Amerikanischer Call- und Putwert, WE je Recht.'],['c_t,p_t','Wert desselben Endrechts mit ausschließlich europäischer Ausübung, WE.'],['I_c,I_p','Heutiger Spot-Ausübungswert, WE.']]),
  'Ohne Ausschüttungen und bei nicht negativem Zins hat die frühe Ausübung eines einfachen amerikanischen Aktiencalls im Standardfall keinen Vorteil: Man gibt weitere Wahl auf und bezahlt den Strike vorzeitig. Diese Aussage wird bei negativen Zinsen oder passenden Ausschüttungen nicht pauschal übernommen. Bei Puts kann ein früher Strikeempfang einen Vorteil bieten.',
  D('Zusatzrecht ist nicht gleich Zusatzpreis in jedem einzelnen Fall',[
   'Amerikanischer Wert mindestens europäischer Wert erlaubt Gleichheit. Ein Zusatzrecht, das unter den gegebenen Bedingungen nie optimal verwendet wird, muss keinen positiven Aufpreis erzeugen. Umgekehrt darf die europäische Formel bei tatsächlich wichtiger früher Ausübung nicht einfach als amerikanischer Marktwert etikettiert werden.',
   'Bei negativen Zinsen ist auch die pauschale amerikanische Putobergrenze K keine allgemeine heutige Wertgrenze: Das Recht enthält mindestens das europäische Endrecht, dessen Strikebarwert über K liegen kann. Die obere Grenze muss zum möglichen Ausübungszeitraum und zur Geldmarktkurve passen.'
  ])
 ]),
 S('model','28. Eine geschlossene Modellformel als zusätzliche Vertiefung lesen','b c',[
  'Black–Scholes–Merton setzt im hier verwendeten Fall einen lognormalen Aktienprozess, konstante Parameter, kontinuierlichen reibungsfreien Handel und passende Finanzierung voraus. Der Anspruch ist europäisch; die Ausschüttung wird als stetige proportionale Rendite modelliert. Die Formel konkretisiert das Replikationsprinzip, sie ersetzt keine Prüfung dieser Annahmen.',
  F('d_1=\\frac{\\ln(S_t/K)+(r-q+\\sigma^2/2)\\tau}{\\sigma\\sqrt{\\tau}},\\qquad d_2=d_1-\\sigma\\sqrt{\\tau}','Diese beiden standardisierten Größen gelten für positive Restzeit und positive Volatilität. Ihre Definition ist keine direkte tatsächliche Kursprognose.',[...symbols,['d_1,d_2','Dimensionslose standardisierte Modellgrößen.'],['\\ln,e','Natürlicher Logarithmus und natürliche Exponentialbasis.']]),
  F('c_t=A\\Phi(d_1)-B\\Phi(d_2),\\qquad p_t=B\\Phi(-d_2)-A\\Phi(-d_1)','A ist der Prepaid-Aktienerhalt, B der Strikebarwert. Die Gewichte ergeben sich aus der bezeichneten risikoneutralen Modellrechnung.',[...symbols,['A,B','Heutiger vorab bezahlter Aktienerhalt beziehungsweise Strikebarwert, WE.'],['d_1,d_2','Zuvor definierte standardisierte Modellgrößen.'],['\\Phi(x)','Verteilungsfunktion der Standardnormalverteilung an x; dimensionslos.']]),
  X('Die zwei Geldbausteine der Callformel nachvollziehen','Spot und Strike 100, ein Jahr, stetiger Zins fünf Prozent, Volatilität 20 %, keine Ausschüttung.',[
   F('d_1=0{,}35,\\quad d_2=0{,}15,\\quad c_t\\approx100(0{,}63683065)-95{,}12294245(0{,}55961769)\\approx10{,}4506','Der Aktienbaustein und der diskontierte Strikebaustein werden jeweils mit dem zugehörigen Modellgewicht multipliziert.',[['d_1,d_2','Standardisierte Modellgrößen.'],['c_t','Europäischer Callwert je Recht, WE.']]),
   'Die Rechnung zeigt, warum zehn WE Optionspreis nicht mit hundert WE Aktienpreis identisch sind. Die Zahl 0,6368 ist im nicht ausschüttenden Fall zugleich das lokale Call-Delta. Sie ist nicht mit der hier 0,5596 großen risikoneutralen Ausübungswahrscheinlichkeit gleichzusetzen.'
  ],'Die Modellformel unterstützt Verständnis und kontrollierte Vergleiche; sie wird nicht als zusätzliches 2027-Pflichtrechenziel ausgegeben.')
 ]),
 S('limits','29. Ablauf und Nullvolatilität benötigen eigene Grenzrechnungen','a b c',[
  F('\\tau=0:\\quad c_T=\\max(S_T-K,0),\\quad p_T=\\max(K-S_T,0)','Am Ablauf verschwindet die verbleibende Zeit; die Endauszahlung ist der dann geltende Ausübungswert.',[['\\tau','Restlaufzeit in Jahren.'],['c_T,p_T','Call- und Putwert am Endtermin, WE.'],['S_T,K','Endaktienkurs und Strike, WE.']]),
  F('\\sigma=0:\\quad c_t=\\max(A-B,0),\\quad p_t=\\max(B-A,0)','Bei positiver Restzeit und null Modellvolatilität sind die passenden Endleistungen deterministisch. Die Grenzpreise werden direkt aus ihren diskontierten Geldbausteinen berechnet.',[['\\sigma','Modellvolatilität; hier null.'],['c_t,p_t','Heutiger europäischer Call- und Putwert, WE.'],['A,B','Vorab bezahlter Endaktienerhalt und Strikebarwert, WE.']]),
  X('Null Schwankung bedeutet nicht automatisch wertlose Optionen','ATM-Spot und Strike 100, ein Jahr, stetiger Zins fünf Prozent, keine Ausschüttung, Volatilität null.',[
   F('c_t=100-100e^{-0{,}05}=4{,}877058,\\qquad p_t=0','Die sichere Endaktie wächst im Modell mit der Finanzierung. Der spätere Kauf für 100 bleibt vorteilhaft.',[['c_t,p_t','Heutiger europäischer Call- und Putwert, WE.']]),
   'Eine direkte Einsetzung von null in den Nenner von d eins wäre numerisch ungültig. Der Rechner verwendet für diesen Fall die wirtschaftliche Grenzrechnung. Dasselbe gilt für Restlaufzeit null, wo kein noch fortbestehender Zeitwert übrig bleibt.'
  ],'Numerische Sonderfälle werden aus den Zahlungen gelöst, nicht durch künstlich kleine Ersatzparameter versteckt.')
 ]),
 S('greeks','30. Lokale Sensitivitäten und ihre Einheiten einordnen','c',[
  F('\\Delta_c=e^{-q\\tau}\\Phi(d_1),\\qquad\\Delta_p=e^{-q\\tau}\\bigl(\\Phi(d_1)-1\\bigr)','Delta misst die lokale Preisänderung je einer WE Spotänderung im angegebenen Modell.',[...symbols,['\\Delta_c,\\Delta_p','Lokale Aktienquote von Call beziehungsweise Put; WE Optionswert je WE Spot.'],['d_1,\\Phi','Standardisierte Modellgröße und Standardnormalverteilungsfunktion.']]),
  F('\\mathcal V=\\frac{\\partial c}{\\partial\\sigma}=\\frac{\\partial p}{\\partial\\sigma}=S_te^{-q\\tau}\\phi(d_1)\\sqrt{\\tau}','Vega ist für positive Restzeit und Volatilität positiv. Die angegebene Einheit bezieht sich auf eine Änderung der Dezimalvolatilität um 1,00.',[...symbols,['\\mathcal V','Vega in WE je 1,00 Dezimalvolatilität; pro einem Prozentpunkt wird durch 100 geteilt.'],['\\phi(d_1)','Dichte der Standardnormalverteilung an d eins.'],['\\partial','Partielle Ableitung bei festgehaltenen übrigen Parametern.']]),
  D('Mehr als Delta bleibt nach einem lokalen Hedge übrig',[
   F('\\Delta v\\approx\\Delta\\,\\Delta S+\\tfrac12\\Gamma(\\Delta S)^2+\\mathcal V\\Delta\\sigma+\\Theta\\Delta t+\\rho\\Delta r','Eine lokale Näherung, keine exakte globale Gleichung. Gemeinsame Kreuzwirkungen und höhere Ordnungen sind hier ausgelassen.',[['\\Delta v,\\Delta S','Optionswertänderung und Spotänderung, WE.'],['\\Delta,\\Gamma','Delta als erste Spotableitung und Gamma als zweite Spotableitung; Gamma hat Einheit je WE Spot.'],['\\mathcal V,\\Delta\\sigma','Vega je Dezimalvolatilität und Änderung derselben Dezimalvolatilität.'],['\\Theta,\\Delta t','Kalenderzeit-Theta in WE je Jahr und vergangene Jahre.'],['\\rho,\\Delta r','Zinsableitung je 1,00 stetiger Dezimalrate und Änderung dieser Rate.']]),
   'Das Symbol Delta wird hier sowohl traditionell für die erste Ableitung als auch als Differenzzeichen verwendet; der zugehörige Ausdruck entscheidet. Die zweideutige Notation wird deshalb nicht ohne Lesart gezeigt. Bei großen Bewegungen, Sprüngen und veränderter Volatilitätsfläche kann die Näherung deutlich abweichen.'
  ])
 ]),
 S('implied','31. Implizite Volatilität ist eine rückwärts gelöste Preiskennzahl','c',[
  'Historische Volatilität fasst vergangene Schwankungen zusammen. Implizite Volatilität ist diejenige Modelleingabe, die unter den übrigen gesetzten Bedingungen den beobachteten Optionspreis reproduziert. Die Rückrechnung ist nur so sinnvoll wie die Ausübungs- und Ausschüttungsannahmen. Sie ist weder direkt beobachtete künftige Schwankung noch automatisch eine unverzerrte Prognose.',
  F('v^{model}(S_t,K,r,q,\\sigma_{imp},\\tau)=v^{market}','Die Gleichung definiert eine modellabhängige Rückrechnung. Ein Preis außerhalb der korrekten Modellgrenzen muss nicht durch eine erfundene Volatilität passend gemacht werden.',[...symbols,['v^{model},v^{market}','Modellwert und ausdrücklich bezeichnete Marktquote, WE je Recht.'],['\\sigma_{imp}','Gesuchte implizite annualisierte Dezimalvolatilität.']]),
  X('Dieselbe Aktie, verschiedene Modellvolatilität','Spot und Strike je 100, ein Jahr, stetiger Zins fünf Prozent, keine Ausschüttung. Der europäische Callpreis beträgt rund 18,0230 statt rund 10,4506.',[
   'Im hier gesetzten Modell liefert Volatilität 40 Prozent rund 18,0230, Volatilität 20 Prozent rund 10,4506. Die höhere inverse Eingabe erklärt die Preisdifferenz innerhalb dieses Modells.',
   'Sie beweist nicht, dass die tatsächliche nächste Jahresvolatilität exakt 40 Prozent sein wird. Risikoaufschläge, Angebotsnachfrage und Modellabweichungen können in der impliziten Kennzahl enthalten sein. Unterschiedliche Strikes und Laufzeiten können unterschiedliche implizite Volatilitäten besitzen.'
  ],'Smile und Skew machen sichtbar, dass eine konstante Volatilität nicht sämtliche Marktpreise zugleich erklärt.')
 ]),
 S('joint','32. Gleichzeitige Änderungen verhindern einfache Tagesprognosen','c',[
  'Ein Call wird bei isoliert höherem Spot wertvoller. In einem tatsächlichen Marktvergleich kann zugleich die implizite Volatilität fallen, Zeit verstreichen und eine erwartete Ausschüttung steigen. Die Gesamtpreisänderung ist dann die Summe mehrerer Wirkungen mit möglichen Kreuztermen. Das Richtungsmerkblatt bleibt als partielle Aussage richtig, erklärt aber allein nicht das Endergebnis.',
  X('Aktie steigt, Call fällt im vollständigen Parametervergleich','Strike 100, stetiger Zins fünf Prozent, ein Jahr Restzeit, keine Ausschüttung. Zustand A: Spot 100 und Volatilität 40 %. Zustand B: Spot 105 und Volatilität 15 %. Die unveränderte Restzeit isoliert hier nur die zwei gemeinsam geänderten Größen.',[
   T(['Bezeichnete Situation','Spot (WE)','Volatilität','Callwert (WE)'],[['A','100','40 %',fmt(val(100,100,.05,0,.4).call)],['B','105','15 %',fmt(val(105,100,.05,0,.15).call)]],'Dies sind eigene hypothetische Vergleichssituationen, kein behaupteter realer Tagesverlauf.'),
   'Der Kursanstieg begünstigt den Call. Der starke Rückgang der Volatilität wirkt entgegengesetzt und überwiegt hier. Eine Erklärung nur über Kursrichtung würde den tatsächlich gesetzten Parameterwechsel ignorieren.'
  ],'Ceteris paribus ist eine Aussage über den Vergleich, keine Behauptung über die Wirklichkeit.')
 ]),
 S('applications','33. Anwendungen auf den vollständigen wirtschaftlichen Zweck beziehen','a b c',[
  'Ein Protective Put kann eine endzeitbezogene Aktienuntergrenze herstellen, kostet aber eine Prämie. Ein Call kann den Kaufpreiszugang begrenzen, ohne eine ungünstige Kaufpflicht zu erzwingen; das kostet ebenfalls. Ein Forward fixiert dagegen eine beidseitige spätere Verpflichtung. Die geeignete Wahl hängt davon ab, ob Sicherheit eines Preises, Teilnahme an günstigen Bewegungen oder Liquiditätsschutz benötigt wird.',
  F('S_T+\\max(K-S_T,0)=\\max(S_T,K)','Aktie plus passender Put liefert am gemeinsamen Endtermin eine Untergrenze K, bevor Anfangskosten und Finanzierung berücksichtigt werden.',[['S_T,K','Endaktienkurs und Putstrike, WE je Aktie.'],['\\max(S_T,K)','Größerer Wert aus Aktie und Strike; gemeinsame Endauszahlung.']]),
  'Der Schutz gilt nicht automatisch für einen beliebigen früheren Liquidationszeitpunkt, eine andere Aktienmenge oder ein Basisportfolio mit abweichenden Risiken. Eine schöne Endkurve ersetzt keine Liquiditätsplanung, keine Prüfung der tatsächlichen Kontraktgröße und keine Berücksichtigung möglicher Gegenparteirisiken.'
 ]),
 S('calculator','34. Interaktiv: Wertzerlegung und alle sechs Eingaben vergleichen','a b c',[
  'Der zusätzliche Rechner zeigt Call- und Putpreis, zugehörigen Spot-Ausübungswert sowie beide Zeitwerte. Die erste Tabelle prüft die europäischen Grenzen, die zweite die konsistenten Geldbausteine. Die Grafik variiert ausschließlich den heutigen Spot; alle anderen Eingaben bleiben für diese Kurve konstant.',
  'Beginne mit dem Grundfall. Ändere dann über die ausdrücklich beschrifteten Vergleichsfälle nur Spot, Strike, Volatilität, Restzeit, Zins oder Ausschüttungsrendite. Die weiteren Fälle für tiefen ITM-Put und Negativzins-Call ändern mehrere Bedingungen gezielt, um jeweils einen Gegenfall sichtbar zu machen; sie sind keine isolierten Ein-Faktor-Schocks.',
  'Prüfe danach Ablauf und Nullvolatilität. Am Ablauf müssen beide Zeitwerte null sein. Bei Volatilität null dürfen positive europäische Preise aus sicheren vorteilhaften Endleistungen bleiben. Ein negativer Zeitwert wird angezeigt und nicht heimlich auf null gesetzt. Die Grafik und breiten Tabellen sind bei Bedarf seitlich verschiebbar.',
  D('Der Rechner bewertet keine amerikanischen Rechte',[
   'Die Eingabe einer geglätteten Ausschüttungsrendite ist kein genauer Kalender diskreter Dividenden. Eine frühe amerikanische Ausübungsentscheidung wird aus diesem Modell nicht abgeleitet. Ebenso sind die Modellpreise keine ausführbaren Geld-Brief-Quoten und keine vollständige Prognose des persönlichen Anlagegewinns.'
  ])
 ]),
 S('workflow','35. Ein Lösungsweg für unbekannte Aufgaben','a b c',[
  T(['Schritt','Prüfung','Typisch vermiedener Fehler'],[
   ['Recht und Zeitpunkt','Call/Put, Long/Short, europäisch/amerikanisch, heute oder Endtermin.','Heutige europäische Ausübung voraussetzen.'],
   ['Einheit und Kosten','Je Recht oder Kontrakt; Prämie, Multiplikator und Finanzierung benennen.','ITM mit positivem Gesamtgewinn gleichsetzen.'],
   ['Wertzerlegung','Ausübungswert separat bilden; Zeitwert als Preisdifferenz.','Zeitwert mit Gesamtauszahlung verwechseln.'],
   ['Replikation und Grenzen','Passende Zahlungszeitpunkte und Ertragsbausteine einsetzen.','Nicht diskontierten Strike als universelle Grenze verwenden.'],
   ['Werttreiber','Genau die geänderten und festgehaltenen Parameter nennen.','Längere europäische Laufzeit pauschal als höheren Preis ausgeben.'],
   ['Durchführbarkeit','Kosten, Leerverkauf, Ausübungskalender und Modellannahmen prüfen.','Eine Modellabweichung automatisch als nutzbare Arbitrage bezeichnen.']
  ],'Eine gute Lösung nennt Annahmen und Zahlungsweg vor dem bloßen Ergebnis.')
 ]),
 S('review','36. Acht Verständnisfragen mit vollständigen Begründungen','a b c',[
  D('Frage 1: Kann ein ITM-Call seinem Käufer Verlust bringen?',[
   'Ja. Beispiel: Strike 100, Endkurs 104, ursprüngliche Prämie sieben. Die Auszahlung ist vier und der einfache Gewinn minus drei je Recht.',
   'Der Fehler besteht im Vermischen von Ausübungswert und Anlageerfolg. Die vorteilhafte Ausübung bleibt am Ende sinnvoll; Nichtausübung würde einen weiteren positiven Betrag aufgeben. Finanzierung würde eine zusätzliche, ausdrücklich zu berechnende Kostengröße ergänzen.'
  ]),
  D('Frage 2: Warum ist ein europäischer Put unter Spot-Ausübungswert nicht automatisch zu billig?',[
   'Das Recht auf den Strikeempfang kann erst später ausgeübt werden. Bei positivem Zins ist dessen heutiger Barwert kleiner.',
   'Die korrekte europäische Untergrenze verwendet den Strikebarwert und den passenden Aktienerhalt. Der eigene sichere Grenzfall mit wertloser Aktie und effektiv fünf Prozent ergibt 95,238095 heutigen Preis für die spätere Zahlung 100. Die hypothetische heutige Ausübung zu 100 ist gerade nicht erlaubt.'
  ]),
  D('Frage 3: Warum gilt die konstante Forward-Aktienquote nicht allgemein für einen Call?',[
   'Der Forward zahlt linear Aktienkurs minus Lieferbetrag, der Call nur die positive Seite.',
   'Im eigenen Zweizustandsbeispiel reichen 0,6 Aktien und Endschuld 48 für die Callzahlungen 30 und null. Ein zusätzlich zugelassener Endkurs 100 würde jedoch Paketwert zwölf statt Callwert null ergeben. Mehr mögliche Zustände erfordern zusätzliche Replikations- oder Modellannahmen; zwei getroffene Punkte beweisen keine globale statische Gleichheit.'
  ]),
  D('Frage 4: Warum können höhere Volatilität und unveränderter Forward zusammenpassen?',[
   'Die Breite einer passenden Bewertungsverteilung kann steigen, während ihr durch Spot und Carry bestimmter Mittelwert gleich bleibt.',
   'Bei Strike 100 und Zins null steigt im eigenen gleichgewichteten Beispiel die Endstreuung von 90/110 auf 70/130. Der Aktienmittelwert bleibt 100; der Callwert steigt von fünf auf 15. Die günstige Seite wächst, die nicht ausgeübte Seite bleibt null. Der Erwerber muss den höheren Wahlwert allerdings bezahlen.'
  ]),
  D('Frage 5: Warum ist längere europäische Laufzeit kein allgemeines Mehrwertrecht?',[
   'Das spätere europäische Recht enthält keine Ausübung am früheren Endtermin.',
   'Mehr mögliche Kursentwicklung steht neben späteren Geldzahlungen. Ein sicherer ITM-Put bei positivem Zins verliert durch späteren Strikeempfang an heutigem Wert. Das zusätzliche amerikanische Ausübungsfenster ist eine andere Rechtsstruktur. Auch Dividenden und negative Zinsen müssen zum konkreten Vergleich passen.'
  ]),
  D('Frage 6: Sind Delta und Ausübungswahrscheinlichkeit dieselbe Größe?',[
   'Nein. Delta ist eine lokale Preisableitung beziehungsweise Aktienquote.',
   'Im nicht ausschüttenden Grundfall des geschlossenen Modells ist Call-Delta rund 0,6368; die risikoneutrale Ausübungswahrscheinlichkeit ist rund 0,5596. Beide sind zusätzlich von einer tatsächlichen Prognosewahrscheinlichkeit zu unterscheiden. Ein Hedgeverhältnis wird nicht allein wegen seiner Lage zwischen null und eins zur Wahrscheinlichkeit.'
  ]),
  D('Frage 7: Kann ein Call bei steigendem Spot fallen?',[
   'Bei gleichzeitig veränderten übrigen Bedingungen ja. Ein ausreichend starker Rückgang der impliziten Volatilität kann die isolierte Spotwirkung überwiegen.',
   'Das widerspricht nicht dem Richtungsmerkblatt, denn dieses hält die anderen Parameter fest. Eine tatsächliche Marktbeobachtung muss alle relevanten Änderungen und gegebenenfalls den Unterschied zwischen Modellpreis und ausführbarer Quote berücksichtigen.'
  ]),
  D('Frage 8: Warum darf ein Nullvolatilitäts-Call trotzdem positiv sein?',[
   'Der Strike wird erst am Endtermin bezahlt. Bei positiver Finanzierung und ohne Ausschüttung kann die sichere Endaktie über dem Strike liegen.',
   F('c_t=100-100e^{-0{,}05}\\approx4{,}8771','Im ATM-Spot-Grundfall mit stetig fünf Prozent und einem Jahr wird der sichere Vorteil durch den vorab bezahlten Aktienerhalt minus den Strikebarwert bestimmt.',[['c_t','Heutiger europäischer Callwert je Recht, WE.'],['e','Natürliche Exponentialbasis; der Exponent verwendet stetige Jahresrate mal ein Jahr.']]),
   'Ein Ausdruck mit null im Nenner der standardisierten Modellgrößen ist nicht der richtige Rechenweg; die sichere Endleistung wird direkt bewertet.'
  ])
 ]),
 S('connections','37. Von Werttreibern zu Parität, Hedge und Modellkritik','a b c',[
  'Die Arbitrageeinheit erklärt, warum gleiche umsetzbare Zahlungswege gleiche Preise benötigen. Das Forwardkapitel zeigt die lineare Verpflichtung und die unveränderte alte Lieferkondition. Die Instrumenteinheit trennt Call/Put sowie Long/Short und vollständigen Gewinn. Hier kommt die Bewertung des verbleibenden asymmetrischen Rechts hinzu.',
  'Put-Call-Parität verknüpft passende Call-, Put-, Aktien- und Geldpositionen. Die Einperioden-Binomialbewertung baut die hier sichtbare Zustandsreplikation systematisch aus. Diese Themen werden in eigenen Einheiten vertieft. Bevor eine Kurzformel angewendet wird, bleiben Ausübungsstil, gleicher Strike und Endtermin, Ertragsrechte und tatsächliche Finanzierung zu prüfen.'
 ])
],explorations:[
 {section:'calculator',lesson:'derivatives-06',focus:'lab-optionvalue',label:'Europäischen Preis, Ausübungswert und Zeitwert mit elf kontrollierten Vergleichsfällen prüfen'},
 {section:'expiry-profit',lesson:'derivatives-06',focus:'lab',label:'Auszahlung und vollständigen Gewinn verschiedener Endpositionen getrennt vergleichen'}
],related:[
 {unit:'derivative-contracts',section:'moneyness',label:'Moneyness, Prämie und Endgewinn im Instrumentvergleich auseinanderhalten'},
 {unit:'carry',section:'calculator',label:'Aktienerhalt, Ausschüttung und Lieferpreis aus passenden Zahlungswegen bewerten'},
 {unit:'forward-value',section:'replication',label:'Die lineare Replikation eines alten Forward vollständig nachvollziehen'},
 {unit:'derivative-uses',section:'liquidity',label:'Wirtschaftliche Absicherung mit tatsächlichem Liquiditätsbedarf abstimmen'},
 {unit:'standard-v',section:'basis',label:'Annahmen, Modellgrenzen und ausreichende Analysebasis beurteilen'}
],sources:[
 {title:'CFA Institute: tatsächliche Level-I-Lernziele 2027, Pricing and Valuation of Options, Seite 24',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=24'},
 {title:'CFA Institute: ergänzende öffentliche Übersicht 2026; keine vollständige 2027-Curriculumquelle',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/pricing-valuation-options'},
 {title:'Clarke, de Silva und Thorley: Fundamentals of Futures and Options, CFA Research Foundation 2013; Hintergrund zu europäischen Preisgrenzen, Zeitwert und Modellannahmen; alle Fälle hier eigenständig',url:'https://www.cfainstitute.org/sites/default/files/-/media/documents/book/rf-publication/2013/rf-v2013-n3-1-pdf.pdf'},
 {title:'Options Industry Council: Option Price Behavior; isolierte Faktoren und gleichzeitige Preisänderungen',url:'https://www.optionseducation.org/referencelibrary/faq/option-price-behavior'},
 {title:'Options Industry Council: Options Exercise; Ausübung und Verkauf eines Rechts unterscheiden',url:'https://www.optionseducation.org/referencelibrary/faq/options-exercise'},
 {title:'ASX: Option pricing in detail; Wertzerlegung und Einflussgrößen als ergänzende Börsenerläuterung',url:'https://www.asx.com.au/investors/investment-tools-and-resources/online-courses/advancing-in-options-course/option-pricing-in-detail'}
],review:{status:'draft',date:'2026-10-25',note:'Eigene Preis-, Replikations- und Grenzfälle; unabhängige mathematische und technische Gegenprüfung sowie fachliche Gesamtabnahme erforderlich.'}};

module.exports.related.push({unit:'parity',section:'spot',label:'Passende Call- und Putrechte über ihre vollständigen Endpakete verknüpfen'});
