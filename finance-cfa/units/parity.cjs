const {F,T,X,S,G,D}=require('../author.cjs');
const grid=(a,b,n,f)=>Array.from({length:n+1},(_,i)=>{const x=a+(b-a)*i/n;return[x,f(x)];});
const fig=(id,title,caption,x,y,xLabel,yLabel,series,reading)=>G({id,title,caption,plot:{x,y,xLabel,yLabel,series},reading});
const base=[['c_t,p_t','Heutiger europäischer Call- beziehungsweise Putpreis, WE je Aktienrecht.'],['K,T','Gemeinsamer positiver Strike in WE und gemeinsamer Endtermin.'],['S_t,S_T','Heutiger Aktienkurs und Aktienkurs am Endtermin, WE je Aktie.'],['D=P(t,T)','Positiver heutiger Diskontfaktor einer sicheren Geldeinheit bei T; keine jährliche Zinsquote.'],['A,B=KD','Heutiger vorab bezahlter Endaktienerhalt und heutiger Barwert der Strikezahlung, WE.']];
module.exports={id:'parity',intro:[
 'Ein Call plus genügend sicheres Geld für den Strike und ein Put plus eine passende Endaktie erscheinen zunächst wie verschiedene Anlagen. Am gemeinsamen Endtermin leisten sie jedoch in jedem Aktienzustand dasselbe. Die Put-Call-Parität übersetzt diese vollständige Zahlungsgleichheit in eine heutige Preisbeziehung. Sie ist eine Replikationsaussage und benötigt keine gerichtete Kursprognose.',
 'Für CFA Level I 2027 werden zwei tatsächliche Lernziele bearbeitet: europäische Put-Call-Parität und Put-Call-Forward-Parität. Der Kernfall hat keinen laufenden Ertrag. Bekannte Ausschüttungen, Geld-Brief-Spannen, Finanzierung und amerikanische Rechte folgen als ausdrücklich abgegrenzte Erweiterungen. Eigene Fälle erklären auch, was die Parität nicht leisten kann.'
],sections:[
 S('map','1. Vom Auszahlungsbild zur Preisgleichheit','a b',[
  'Gleiche Marktmeinung reicht für Replikation nicht aus. Benötigt wird dieselbe Leistung bei niedrigem, gleichem und hohem Endkurs, am selben Termin und in derselben Einheit. Erst dann können zwei durchführbare Pakete unter gleichen Finanzierungs- und Erfüllungsbedingungen gegeneinander gehandelt werden, ohne dass ein unbekannter späterer Kurs über das Ergebnis entscheidet.',
  'Die folgende Herleitung beginnt deshalb mit den Endleistungen und erst danach mit den heutigen Preisen. Das verhindert zwei häufige Verwechslungen: Der heute angelegte Strikebarwert ist nicht der erst später ausgezahlte Strike; Call minus Put ist ein bestehender Forward zum bezeichneten Strike, nicht automatisch eine bereits bezahlte Aktie.'
 ]),
 S('claims','2. Welche Rechte wirklich zusammenpassen müssen','a b',[
  T(['Merkmal','Nötige Übereinstimmung','Warum eine Abweichung stört'],[
   ['Basiswert und Erfüllung','Dieselbe tatsächlich lieferbare Referenz und passende Abrechnungsreferenz.','Ähnliche Indizes oder verschiedene Schlussreferenzen können abweichen.'],
   ['Strike und Endtermin','Gleicher Strike, gleicher Endtermin.','Sonst fallen Knick oder Geldzahlung an anderen Stellen an.'],
   ['Ausübungsstil','Hier europäisch, ohne zusätzliche frühere Entscheidung.','Frühe Ausübung kann einen anderen Zwischenzahlungsweg erzeugen.'],
   ['Einheit und Währung','Passende Rechtezahl und dieselbe Bewertungswährung.','Ein Kontrakt mit 50 Rechten gleicht keinen mit 100 Rechten aus.'],
   ['Aktienertrag und Finanzierung','Richtiger Endaktienerhalt und passende sichere Geldzahlungen.','Zwischendividenden und Leihzahlungen dürfen nicht verschwinden.']
  ],'Produktnamen allein beweisen diese Übereinstimmungen nicht.'),
  F('B=KD,\\qquad D=e^{-r(T-t)}','Die zweite Gleichung gilt im ausdrücklich konstanten stetigen Zinsmodell. Allgemeiner genügt der passende handelbare Zahlungsdiskontfaktor.',[...base,['r','Konstanter stetiger jährlicher Zins als Dezimalquote.'],['t','Heutiger Bewertungszeitpunkt; T minus t wird in Jahren gemessen.']])
 ]),
 S('terminal','3. Die grundlegende Identität unmittelbar herleiten','a',[
  'Ist die Aktie am Ende teurer als der Strike, wird der Call ausgeübt. Zusammen mit der sicheren Strikezahlung finanziert er die Aktie; der Put ist dann wertlos. Ist die Aktie billiger, verfällt der Call und das Geld bleibt erhalten. Im anderen Paket ergänzt der Put die billigere Aktie genau bis zum Strike. Bei Gleichheit leisten beide Pakete den gemeinsamen Betrag.',
  F('\\max(S_T-K,0)+K=\\max(K-S_T,0)+S_T=\\max(S_T,K)','Beide Seiten beschreiben dieselbe Endleistung. Die sichere Geldleistung K wird genau einmal pro Paket gezählt.',[['S_T,K','Nicht negativer Endaktienkurs und positiver gemeinsamer Strike, WE.'],['\\max(x,y)','Größerer der beiden angegebenen Werte.']]),
  X('Drei Endkurse machen die Gleichheit sichtbar','Gemeinsamer Strike 100; betrachtet werden ausschließlich Endleistungen je Recht.',[
   T(['Endkurs (WE)','Call (WE)','Call + 100 (WE)','Put (WE)','Put + Aktie (WE)'],[['60','0','100','40','100'],['100','0','100','0','100'],['140','40','140','0','140']],'Die Beträge in verschiedenen Zeilen sind alternative Zustände, keine aufeinanderfolgenden Zahlungen.'),
   'Unterhalb des Strikes liefert der Put den fehlenden Schutzbetrag. Oberhalb trägt die Aktie im rechten Paket denselben Mehrwert wie der Call im linken. Es wird nicht angenommen, dass die Aktie später sicher bei 100 stehen wird.'
  ],'Die Identität gilt zustandsweise; eine erwartete Durchschnittszahlung allein wäre ein schwächerer Vergleich.'),
  fig('packages','Zwei verschiedene Pakete liefern dieselbe Endleistung','Strike 100 WE; Call plus sichere Strikezahlung und Put plus Endaktie. Die zwei Linien liegen deckungsgleich.',[0,180],[0,190],'Aktienkurs am Endtermin (WE)','Endleistung je Paket (WE)',[
   {name:'Call + sichere 100',points:grid(0,180,60,x=>Math.max(x-100,0)+100)},{name:'Put + Endaktie',dash:true,points:grid(0,180,60,x=>Math.max(100-x,0)+x)}
  ],'Beide Pakete haben unten die Untergrenze 100 und nehmen oberhalb davon am Aktienwert teil. Heutige Anschaffungskosten sind noch nicht abgezogen.')
 ]),
 S('spot','4. Die heutige Spot-Parität aus den Paketen gewinnen','a',[
  'Ohne zwischenzeitliche Ausschüttungen entspricht der vorab bezahlte Erhalt einer Aktie am Endtermin dem heutigen Aktienkauf. Eine sichere Anlage zum Preis des Strikebarwerts liefert am Ende genau K. Wenn die beiden identischen Endpakete heute unterschiedlich viel kosteten, könnte die teurere Leistung verkauft und die billigere gekauft werden.',
  F('c_t+KD=p_t+S_t,\\qquad c_t-p_t=S_t-KD','Europäische Rechte ohne laufenden Ertrag; gleiche handelbare Finanzierung, keine Gebühren oder Beschränkungen. Beide Gleichungen sind dieselbe Preisbeziehung.',base),
  'Die Gleichheit bestimmt die Differenz der beiden Optionspreise. Sind ein Optionspreis, Aktienpreis und passende Finanzierung bekannt, kann der andere Optionspreis daraus folgen. Sind beide Optionspreise unbekannt, ist eine Gleichung für zwei Unbekannte keine vollständige einzelne Optionsbewertung.'
 ]),
 S('put','5. Einen Put aus einem Call und Finanzierung bestimmen','a',[
  F('p_t=c_t+KD-S_t','Zum Kaufrecht kommt die sichere Strikebereitstellung; der Verkauf des passenden Aktienerhalts finanziert einen Teil dieses Pakets.',base),
  X('Warum der Putpreis nicht einfach dem Callpreis entspricht','Keine Ausschüttungen. Spot und Strike je 100, Enddiskontfaktor 0,95, europäischer Callpreis elf.',[
   F('B=100(0{,}95)=95,\\qquad p_t=11+95-100=6','Der heutige Strikebarwert ist 95. Die Differenz von Spot und Strikebarwert erklärt den Preisabstand der Optionen.',[['B','Heutiger Preis der sicheren späteren Strikezahlung, WE.'],['p_t','Heutiger europäischer Putpreis je Recht, WE.']]),
   'Spot und Strike sind gleich, aber Geld für den erst später zu zahlenden Strike kostet heute weniger als 100. Deshalb müssen Call und Put im Spot-ATM-Fall bei diesem positiven Finanzierungszins nicht gleich teuer sein.'
  ],'Am Geld muss benennen, ob Spot oder Forward mit dem Strike verglichen wird.')
 ]),
 S('call','6. Einen Call aus einem Put bestimmen','a',[
  F('c_t=p_t+S_t-KD','Aktie und Put erzeugen den geschützten Endwert. Die separat finanzierte sichere Strikeleistung wird für das Callrecht wieder herausgerechnet.',base),
  X('Ein höherer Putpreis bei unveränderter Differenz','Voriger Markt: Spot 100, Strikebarwert 95. Ein anderer konsistenter Optionspreisvergleich hat Putpreis 16 statt sechs.',[
   F('c_t=16+100-95=21,\\qquad c_t-p_t=21-16=5','Beide Optionspreise steigen hier um zehn; ihre durch Aktie und Finanzierung bestimmte Differenz bleibt fünf.',[['c_t,p_t','Heutige europäische Optionspreise je Recht, WE.']]),
   'Die Parität erklärt diesen gemeinsamen Preisanstieg allein nicht. Beispielsweise kann eine andere passende Verteilung der Endkurse mehr Wahlwert begründen. Die Beziehung verbietet nicht jede Änderung beider Preise, sondern bindet ihren Abstand an die übrigen Ansprüche.'
  ],'Eine erfüllte Parität ist eine notwendige Preisrestriktion, keine vollständige Theorie der beiden Preisniveaus.')
 ]),
 S('synthetic-share','7. Eine Aktie synthetisch nachbauen, ohne den Geldbaustein zu vergessen','a b',[
  F('S_t=c_t-p_t+KD','Ohne Ausschüttung gehört zur synthetischen Aktie neben Long Call und Short Put auch die sichere Strikebereitstellung.',base),
  X('Fünf WE Optionsdifferenz kaufen noch keine ganze Aktie','Spot 100, Strike 100, Diskontfaktor 0,95, Call elf, Put sechs.',[
   F('11-6+95=100,\\qquad \\max(S_T-100,0)-\\max(100-S_T,0)+100=S_T','Der Optionskauf und Putverkauf kosten netto fünf. Die zusätzlich angelegten 95 stellen die später nötigen 100 bereit.',[['S_T','Aktienkurs am gemeinsamen Endtermin, WE.']]),
   'Fällt die Aktie tief, kann die Short-Put-Pflicht trotzdem die Zahlung des Strikes auslösen. Der kleine Optionsnettopreis ist kein Beweis eines kleinen Gesamtverlustrisikos. Ohne die zusätzliche sichere Finanzierung bleibt ein gehebelter Forwardanspruch übrig.'
  ],'Cashflowgleichheit überträgt nicht automatisch Stimmrechte oder sonstige rechtliche Eigentümerrechte.')
 ]),
 S('synthetic-bond','8. Die sichere Geldleistung aus Aktie und Optionen bilden','a',[
  F('KD=S_t+p_t-c_t,\\qquad S_T+\\max(K-S_T,0)-\\max(S_T-K,0)=K','Aktie plus Put minus Call erzeugt am Ende eine feste Zahlung. Die heutige Ausgabe ist deren Barwert, nicht deren späterer Nennbetrag.',base),
  X('Fester Endbetrag und heutiger Preis sind verschieden','Voriger Markt ohne Ausschüttungen: Spot 100, Call elf, Put sechs, gemeinsamer Strike 100.',[
   F('B=100+6-11=95,\\qquad B_T=100','Die heutige Ausgabe 95 liefert unter den genannten reibungsfreien Voraussetzungen in jedem Endzustand 100.',[['B,B_T','Heutiger Preis und spätere Zahlung des synthetischen Geldanspruchs, WE.']]),
   'Diese Konstruktion wird Conversion genannt. Sie kann trotzdem Zwischenliquidität, Sicherheiten und tatsächliche Finanzierung benötigen. Eine formal sichere Endleistung beseitigt keine beliebigen Gegenpartei-, Liefer- oder Implementierungsrisiken.'
  ],'Eine Darstellung nur mit Endgrafik darf den nötigen heutigen Kapitaleinsatz nicht auslassen.')
 ]),
 S('synthetics','9. Vorzeichen und synthetische Gegenpositionen ordnen','a b',[
  T(['Gesuchter heutiger Anspruch','Passendes synthetisches Paket','Endbedeutung ohne Ausschüttungen'],[
   ['Long Call','Long Put + Aktie − Strikebarwert.','Positiver Teil des Kursüberschusses über Strike.'],
   ['Long Put','Long Call − Aktie + Strikebarwert.','Positiver Teil des Strikes über Kurs.'],
   ['Long Aktie','Long Call − Long Put + Strikebarwert.','Eine Aktie am Endtermin.'],
   ['Sicherer Strike','Aktie + Long Put − Long Call.','Fest K am Endtermin.'],
   ['Short Aktie','Short Call + Long Put − Strikebarwert.','Negative Aktienendleistung.']
  ],'Ein Minuszeichen bezeichnet den Verkauf beziehungsweise die Verpflichtung des jeweiligen Bausteins; es lässt ihn nicht verschwinden.'),
  'Wer eine Gleichung nach einem anderen Anspruch umstellt, muss jeden verschobenen Baustein mit dem richtigen Vorzeichen mitnehmen. Insbesondere wird aus dem verkauften Put eine bedingte Pflicht. Die Finanzierung kann durch Kreditaufnahme oder sichere Anlage umgesetzt werden, aber deren Kosten und Zeitpunkte bleiben Bestandteil der Rechnung.'
 ]),
 S('protection','10. Protective Put und Fiduciary Call vergleichen','a',[
  'Ein Protective Put kombiniert die Aktie mit einem Put als Enduntergrenze. Ein Fiduciary Call kombiniert den Call mit genügend sicherem Geld für den Strike. Ohne laufenden Aktienertrag und mit passenden europäischen Rechten liefern beide am Ende den größeren Wert aus Aktie und Strike. Die Parität verbindet deshalb auch diese beiden Strategiepreise.',
  F('V_t^{PP}=S_t+p_t=c_t+KD=V_t^{FC}','Die heutigen Gesamtpakete werden verglichen, nicht nur die Optionsprämien.',[...base,['V_t^{PP},V_t^{FC}','Heutiger Gesamtpreis von Protective Put beziehungsweise Fiduciary Call je Aktienrecht, WE.']]),
  X('Gleiche Untergrenze ist noch kein garantierter Gewinn','Spot 100, Put sechs, Call elf, Strikebarwert 95; gemeinsamer Strike 100, keine Ausschüttung.',[
   F('V_t^{PP}=100+6=106,\\qquad V_t^{FC}=11+95=106','Beide Pakete kosten heute 106 und leisten am Ende mindestens 100.',[['V_t^{PP},V_t^{FC}','Heutige Paketkosten je Recht, WE.']]),
   'Ohne Verzinsung der Anschaffungsausgabe beträgt der mögliche einfache Verlust bis zur Enduntergrenze sechs. Für einen endzeitbezogenen finanzierten Gewinn wird dagegen die gesamte Ausgabe 106 mit derselben passenden Finanzierung auf den Endtermin gebracht. Untergrenze und Anschaffungspreis werden nicht gleichgesetzt.'
  ],'Gleiche Endleistung bedeutet unter den Preisannahmen gleiche heutige Kosten, nicht kostenlosen Schutz.')
 ]),
 S('covered','11. Covered Call und cashgesicherte Putpflicht verbinden','a',[
  F('S_T-\\max(S_T-K,0)=K-\\max(K-S_T,0)=\\min(S_T,K)','Aktie minus Call und sichere Strikezahlung minus Put haben dieselbe begrenzte Endleistung.',[['S_T,K','Endaktienkurs und Strike, WE.'],['\\min(x,y)','Kleinerer der beiden Werte.']]),
  F('S_t-c_t=KD-p_t','Ohne Ausschüttung vergleicht diese heutige Gleichheit den Covered Call mit einem über den Endstrike cashgesicherten Short Put.',base),
  'Der Optionsverkauf tauscht weiteres Aufwärtspotenzial gegen Prämie. Die Aktie kann weiterhin stark fallen; ein Covered Call besitzt keine vollständige untere Aktienversicherung. Bei einem Short Put muss die Sicherung genügend echtes Geld für den Strike bereitstellen. Ein kleiner vom Broker verlangter anfänglicher Marginbetrag ist nicht dasselbe wie eine volle Cashsicherung.'
 ]),
 S('conversion','12. Die eine Arbitragerichtung vollständig abrechnen','a',[
  X('Call relativ zum passenden Putpaket zu teuer','Keine Ausschüttung. Spot 100, Strike 100, Diskontfaktor 0,95, Put sechs. Callquote 13 statt der konsistenten elf.',[
   T(['Position','Heutiger Cash (WE)','Endrolle'],[['Aktie kaufen','−100','Aktie für Lieferung beziehungsweise Putverkauf halten.'],['Put kaufen','−6','Bei niedrigem Kurs für 100 verkaufen.'],['Call verkaufen','+13','Bei hohem Kurs Aktie gegen 100 liefern.'],['Gegen Endschuld 100 leihen','+95','Am Endtermin 100 zurückzahlen.'],['Summe','+2','Aktie plus Put minus Call liefert exakt die Schuld 100.']],'Alle Leistungen beziehen sich auf ein Recht und denselben Endtermin.'),
   F('G_t=13+95-6-100=2,\\qquad W_T=S_T+\\max(100-S_T,0)-\\max(S_T-100,0)-100=0','Heute entsteht ein Zufluss; das abgeglichene Paket hat am Ende keinen Rest, bevor der heutige Zufluss separat angelegt wird.',[['G_t','Heutiger Anfangszufluss je Replikationspaket, WE.'],['W_T','Endrest aller bezeichneten Positionen ohne erneute Addition des Anfangszuflusses, WE.'],['S_T','Aktienendkurs, WE.']]),
   'Die sichere Anfangseinnahme kann für den Endtermin angelegt werden. Ihr endzeitbezogener Wert ist dann nicht zusätzlich zur unveränderten Anfangseinnahme noch ein zweiter Gewinn. Eine reine Kursprognose wird zur Absicherung der Endschuld nicht benötigt.'
  ],'Bei teurem Call wird dieser verkauft; Aktie, Put und Finanzierung erfüllen seine Gegenleistung.')
 ]),
 S('reversal','13. Die Gegenrichtung mit dem billigen Call prüfen','a',[
  X('Call relativ zu den anderen Ansprüchen zu billig','Gleicher Markt: Spot 100, Strike 100, Diskontfaktor 0,95, Put sechs. Callquote neun statt elf.',[
   T(['Position','Heutiger Cash (WE)','Endrolle'],[['Aktie leer verkaufen','+100','Später eine Aktie zurückliefern.'],['Put verkaufen','+6','Bei niedrigem Kurs Aktie für 100 übernehmen.'],['Call kaufen','−9','Bei hohem Kurs Aktie für 100 erwerben.'],['Sicheren Endstrike anlegen','−95','Am Ende 100 verfügbar.'],['Summe','+2','Endstrike finanziert in beiden Regionen die nötige Aktie.']],'Die tatsächliche Verfügbarkeit der Leerverkaufseinnahme ist hier ausdrücklich angenommen.'),
   F('G_t=6+100-9-95=2,\\qquad W_T=\\max(S_T-100,0)-\\max(100-S_T,0)-S_T+100=0','Der Call ersetzt zusammen mit der Short-Put-Pflicht und Finanzierung die geschuldete Aktie.',[['G_t,W_T','Heutiger Nettozufluss und späterer Paketrest, WE je Recht.'],['S_T','Aktienkurs am Endtermin, WE.']]),
   'Ein Leerverkaufserlös ist in realen Märkten nicht zwingend vollständig frei verfügbar. Leihgebühren, Rückruf, Sicherheitsleistung und unterschiedliche Finanzierung können die tatsächliche Umsetzbarkeit verändern. Die ideale Identität wird deshalb nicht als sofort ausführbare Handelsanweisung ausgegeben.'
  ],'Beide Richtungen werden über alle Pflichten kontrolliert; die billigere Option allein bestimmt keinen vollständigen Hedge.')
 ]),
 S('income','14. Den richtigen Aktienanspruch bei Ausschüttungen auswählen','a b',[
  'Ein heutiger Aktienkauf enthält neben der Endaktie mögliche Zwischenzahlungen. Die Call-Put-Kombination enthält diese Dividenden nicht automatisch. Für die Parität wird deshalb der heute vorab bezahlte reine Endaktienerhalt benötigt. Sind die Gelddividenden bekannt und replizierbar, wird deren Barwert vom heutigen Aktienpreis getrennt.',
  F('I=\\sum_j d_jP(t,t_j),\\qquad A=S_t-I,\\qquad c_t+KD=p_t+A','Die allgemeine Endpaketbeziehung verwendet den passenden Prepaid-Aktienerhalt. Hier liegen die bezeichneten Dividendentermine vor dem Enderhalt.',[...base,['I','Heutiger Barwert der berücksichtigten bekannten Ausschüttungen, WE je Aktie.'],['d_j,t_j','Bekannter Geldbetrag der Ausschüttung und ihr Zwischenzahlungstermin.'],['P(t,t_j)','Passender heutiger Zahlungsdiskontfaktor für diesen Zwischentermin.'],['j','Index der einzelnen Ausschüttung.']]),
  'Bei unsicheren künftigen Dividenden darf ein bloßer Prognosemittelwert nicht ohne passende zusätzliche Annahmen wie eine sicher handelbare Zahlung behandelt werden. Eine Dividendenrendite über ein Jahr ist ebenfalls nicht automatisch der Barwert eines einzelnen bekannten Geldbetrags.'
 ]),
 S('dividend-case','15. Eine bekannte Zwischenzahlung mit dem Endtermin abstimmen','a b',[
  X('Ein eigener Fall mit zwei verschiedenen Diskontfaktoren','Spot 105, Strike 100. Bekannte Dividende vier vor Ablauf mit Faktor 0,97; Endfaktor 0,94. Europäischer Putpreis vier. Alle Werte je Aktie beziehungsweise Recht.',[
   F('I=4(0{,}97)=3{,}88,\\qquad A=105-3{,}88=101{,}12,\\qquad B=100(0{,}94)=94','Die Zwischenzahlung und der Endstrike verwenden ihre jeweils passenden heutigen Faktoren.',[['I,A,B','Ausschüttungsbarwert, reiner Endaktienerhalt und Strikebarwert, WE.']]),
   F('c_t=4+101{,}12-94=11{,}12,\\qquad c_t+B=p_t+A=105{,}12','Der Dividendenbarwert wird nicht zusätzlich zum schon ertragsbereinigten Aktienerhalt hinzugefügt.',[['c_t,p_t','Europäische Optionspreise, WE je Recht.'],['A,B','Prepaid-Aktienerhalt und Strikebarwert, WE.']]),
   'Der reine Endaktienerhalt lässt sich hier durch Aktienkauf für 105 und Kreditaufnahme 3,88 nachbilden. Die Schuld wird bereits am bekannten Dividendentermin mit den tatsächlich erhaltenen vier getilgt. Am Endtermin bleibt die Aktie ohne diese Zwischenschuld übrig.'
  ],'Die Finanzierung der Zwischenleistung und die Finanzierung des Endstrikes sind zwei unterschiedliche Geldbausteine.')
 ]),
 S('dividend-ledger','16. Ausschüttungen in beiden Arbitragerichtungen berücksichtigen','a',[
  X('Die Zwischenzahlung geht auch beim Leerverkauf nicht verloren','Voriger Dividendenfall. Put vier, passende Callquote 11,12; untersucht werden Call 13,12 und Call 9,12.',[
   T(['Baustein','Teurer Call: heutiger Cash (WE)','Billiger Call: heutiger Cash (WE)'],[['Call','+13,12','−9,12'],['Put','−4','+4'],['Aktie','−105','+105'],['Endstrike finanzieren','+94','−94'],['Zwischendividende finanzieren','+3,88','−3,88'],['Anfangszufluss','+2','+2']],'Teurer Call: Conversion. Billiger Call: Reversal. Kredit und Anlage werden hier zum gleichen passenden Preis gehandelt.'),
   'Bei der Conversion tilgt die erhaltene Dividende die hierfür aufgenommene Zwischenschuld. Bei der Reversal liefert die separate Zwischenanlage genau die an den Aktienverleiher zu ersetzende Dividende. Wer diese Leihzahlung weglässt, erklärt einen unvollständigen Zahlungsweg fälschlich zum Gewinn.',
   F('G_t^{conv}=13{,}12-4-105+94+3{,}88=2,\\qquad G_t^{rev}=-9{,}12+4+105-94-3{,}88=2','Die entsprechenden Zwischen- und Endpositionen gleichen sich nach ihrer jeweiligen Erfüllung vollständig aus.',[['G_t^{conv},G_t^{rev}','Heutiger Zufluss der Conversion beziehungsweise Reversal je Aktienrecht, WE.']])
  ],'Gleicher Dividendenbarwert bedeutet je nach gehaltenem oder geliehenem Aktienanspruch eine andere Geldrichtung.')
 ]),
 S('continuous-income','17. Stetige Ertragsrendite als andere Konvention lesen','a b',[
  F('A=S_te^{-q\\tau},\\qquad c_t-p_t=S_te^{-q\\tau}-Ke^{-r\\tau}','Hier werden Zins und proportionale Ausschüttungsrendite ausdrücklich konstant und stetig modelliert. Das ist nicht unverändert die Rechnung eines diskreten Gelddividendenkalenders.',[...base,['q,r','Stetige jährliche Ertragsrendite beziehungsweise Finanzierung, Dezimalquoten.'],['\\tau=T-t','Restzeit in Jahren.']]),
  'Der Zusammenhang liefert im entsprechenden Modell auch die Analogie für Währungen: Die ausländische Finanzierung übernimmt die laufende Ertragsrolle, die heimische Finanzierung diskontiert die Strikezahlung. Eine Währungsquote muss benennen, welche Währung pro welcher Währung ausgedrückt wird. Das ersetzt keine Prüfung der eigentlichen Kontraktspezifikation.'
 ]),
 S('forward','18. Aus der Spotbeziehung die Forward-Parität herleiten','b',[
  'Ein heute fair neu vereinbarter Forward hat den Lieferpreis, bei dem der vorab bezahlte Endaktienerhalt dem Barwert der späteren Zahlung entspricht. Derselbe Endaktienanspruch, der bisher mit A bezeichnet wurde, lässt sich deshalb über Forwardquote und Diskontfaktor ausdrücken.',
  F('F_{t,T}=\\frac{A}{D},\\qquad A=DF_{t,T},\\qquad c_t-p_t=D(F_{t,T}-K)','Die Optionenkombination enthält den Lieferbetrag K. Der neue faire Forward würde dagegen den aktuellen Lieferpreis F verwenden.',[...base,['F_{t,T}','Heute faire Lieferquote für den bezeichneten Endaktienerhalt, WE je Aktie.']]),
  F('c_t+DK=p_t+DF_{t,T}','Dies ist die Put-Call-Forward-Parität in einer gemeinsamen heutigen Geldbewertung.',[...base,['F_{t,T}','Aktuelle faire Forwardquote gleicher Referenz und gleicher Endlieferung, WE.']]),
  'Ein bereits bekannter Forwardkurs ist keine unbedingte tatsächliche Prognose des späteren Spot. Er ist eine durch Preise und Finanzierung gebundene Lieferkondition. Genau diese Verbindung erlaubt die Bewertung ohne zusätzliche gerichtete Erwartung.'
 ]),
 S('forward-case','19. Forwardquote und alten Vertragswert numerisch trennen','b',[
  X('Drei verschiedene Zahlen für drei verschiedene Fragen','Voriger Dividendenfall: Prepaid-Aktienerhalt 101,12, Endfaktor 0,94, Strike 100, Call 11,12 und Put vier.',[
   F('F_{t,T}=\\frac{101{,}12}{0{,}94}\\approx107{,}574468,\\qquad V_t(K)=0{,}94(F_{t,T}-100)=7{,}12','Die neue faire Lieferquote ist rund 107,57; der bestehende Forward zum Lieferbetrag 100 besitzt heute Wert 7,12.',[['F_{t,T}','Aktuelle faire Lieferquote, WE je Aktie.'],['V_t(K)','Heutiger Wert des bestehenden Long-Forward mit Lieferbetrag K, WE je Aktie.']]),
   F('c_t-p_t=11{,}12-4=7{,}12,\\qquad F_{imp}=100+\\frac{7{,}12}{0{,}94}\\approx107{,}574468','Die Optionen implizieren bei denselben Voraussetzungen dieselbe Forwardquote. Die Prämien werden heute gezahlt und nicht einfach unaufgezinst zum späteren Strike addiert.',[['c_t,p_t','Europäische Optionspreise je Recht, WE.'],['F_{imp}','Aus dem heutigen Optionspreisabstand und Diskontfaktor abgeleitete Lieferquote, WE.']]),
   'Ein neuer Forward mit Lieferquote rund 107,57 kann zunächst Wert null haben. Die Kombination mit Strike 100 ist ein anderer Anspruch. Sie behält ihren heutigen Wert 7,12 und wird nicht durch die Existenz eines neuen fairen Vertrags kostenlos.'
  ],'Lieferquote, alter Marktwert und späterer Aktienkurs sind unterschiedliche Größen.')
 ]),
 S('synthetic-forward','20. Die Endpflicht von Call minus Put erkennen','b',[
  F('\\max(S_T-K,0)-\\max(K-S_T,0)=S_T-K','Long Call und Short Put erzeugen zusammen eine beidseitige Forward-Endpflicht. Die Nulluntergrenze eines einzelnen Longoptionsrechts bleibt im Gesamtpaket nicht erhalten.',[['S_T,K','Endaktienkurs und gemeinsamer Strike, WE je Aktie.']]),
  X('Der synthetische Forward verliert auch bei einem verfallenden Call','Strike 100, Callkauf und Putverkauf derselben europäischen Endrechte. Endkurs fällt auf 40.',[
   F('H_T^{syn}=0-(100-40)=-60','Der Call verfällt, während der verkaufte Put die ungünstige Leistung verursacht.',[['H_T^{syn}','Nettoendleistung der Optionskombination je Recht, WE.']]),
   'Die frühere Optionsnettoausgabe wird für einen vollständigen Gewinn zusätzlich passend auf den Endtermin gebracht. Der Endverlust 60 ist keine neue Prämie und kein Betrag, der wegen des Callkaufs automatisch bei null abgeschnitten würde.'
  ],'Kombinationen müssen als Gesamtheit beurteilt werden, einschließlich verkaufter bedingter Pflichten.'),
  fig('synthetic-forward','Der synthetische Forward besitzt dieselbe lineare Endpflicht','Gemeinsamer Strike 100, Long Call minus Long Put, also Long Call plus Short Put. Beide Linien liegen deckungsgleich.',[0,200],[-105,105],'Aktienkurs am Endtermin (WE)','Nettoendleistung je Recht (WE)',[
   {name:'Call minus Put',points:grid(0,200,80,x=>Math.max(x-100,0)-Math.max(100-x,0))},{name:'Long-Forward zu 100',dash:true,points:grid(0,200,80,x=>x-100)}
  ],'Unterhalb 100 ist die Leistung negativ. Eine kleine heutige Nettoprämie begrenzt diesen späteren Verlust nicht. Anschaffung und Finanzierung sind hier noch nicht abgezogen.')
 ]),
 S('funded-profit','21. Gleiche Endleistung von gleichem finanziertem Gewinn unterscheiden','a b',[
  F('\\Pi_T=H_T-\\frac{V_t}{D}','Wenn die gesamte heutige Anschaffung mit derselben sicheren Finanzierung auf den gemeinsamen Endtermin gebracht wird, entsteht der entsprechend finanzierte Gewinn.',[['\\Pi_T','Finanzierter Gewinn am Endtermin, WE je Paket.'],['H_T,V_t','Gesamte Endleistung und heutiger Gesamtpreis des Pakets, WE.'],['D','Passender positiver Zahlungsdiskontfaktor bis T.']]),
  X('Die Optionsnettoausgabe gehört zum Ergebnis','Dividendenfall: synthetischer Long-Forward zum Strike 100 kostet heute 7,12; Endfaktor 0,94. Späterer Aktienkurs 120.',[
   F('H_T=120-100=20,\\qquad\\Pi_T=20-\\frac{7{,}12}{0{,}94}\\approx12{,}425532','Der Endvorteil 20 wird um die auf den Endtermin gebrachte Anfangsausgabe vermindert.',[['H_T','Endleistung des alten Forward beziehungsweise der identischen Optionenkombination, WE.'],['\\Pi_T','Finanzierter Endgewinn, WE je Recht.']]),
   'Ein Vergleich nur der 20 mit einer anfangs kostenlosen neuen Lieferquote wäre ein Vergleich verschiedener Strikes und Anschaffungssituationen. Bei unterschiedlichen tatsächlichen Kreditbedingungen kann außerdem der persönliche Gewinn von der idealen einheitlichen Finanzierungsrechnung abweichen.'
  ],'Die Parität bindet passende Preise und Leistungen; sie ist kein Versprechen gleicher persönlicher Gebühren oder Kreditsätze.')
 ]),
 S('quantity','22. Rechtezahlen und Teilabsicherung tatsächlich multiplizieren','a b',[
  F('M\\,[c_t-p_t]=MD(F_{t,T}-K)','Die Multiplikation gilt für dieselbe Aktienrechtezahl M auf allen entsprechenden Seiten.',[...base,['M','Gemeinsame Anzahl tatsächlich enthaltener Aktienrechte.'],['F_{t,T}','Passende aktuelle Forwardquote, WE je Aktie.']]),
  X('Ein Optionskontrakt muss nicht dieselbe Stückzahl wie ein anderer haben','Callkontrakt umfasst 50 Rechte, Putkontrakt 100 Rechte. Gleicher Strike 100 und gleiche europäische Endrechte. Ein Callkontrakt und ein verkaufter Putkontrakt werden gehalten.',[
   F('H_T=50\\max(S_T-100,0)-100\\max(100-S_T,0)','Die unterschiedlichen Multiplikatoren werden sichtbar eingesetzt. Die resultierende Funktion ist nicht die eines einheitlichen 50-Rechte-Forward.',[['H_T','Gesamte Endleistung der bezeichneten Position, WE.'],['S_T','Aktienendkurs, WE.']]),
   'Bei Endkurs 80 entsteht ein Verlust von 2.000 WE aus 100 Putrechten. Ein passender 50-Rechte-Forward hätte dagegen nur 1.000 WE Verlust. Wer bloß die Zahl der Kontrakte gleichsetzt, lässt die zusätzliche bedingte Pflicht offen.'
  ],'Ein gleicher Produktname oder eine gleiche Kontraktzahl ersetzt keine Mengenabstimmung.')
 ]),
 S('difference','23. Warum die Differenz keine zwei eindeutigen Einzelpreise bestimmt','a b',[
  'Bei Prepaid-Aktienerhalt 101,12 und Strikebarwert 94 verlangt die Parität einen Call-Put-Abstand 7,12. Sowohl 11,12 und vier als auch 21,12 und 14 besitzen diesen Abstand und liegen innerhalb ihrer europäischen Einzelpreisgrenzen. Weitere Information über mögliche Endleistungen beziehungsweise die Replikationsstruktur wird gebraucht, um einzelne Preise zu bestimmen.',
  F('c_t-p_t=A-B,\\qquad c_t\\in[\\max(A-B,0),A],\\qquad p_t\\in[\\max(B-A,0),B]','Parität und notwendige Einzelgrenzen werden gemeinsam gelesen. Die Intervalle gelten für den bezeichneten nicht negativen Aktienendwert und passenden europäischen Endanspruch.',base),
  X('Gleich hohe Überteuerung kann die Parität trotzdem erfüllen','Gleicher Markt: A gleich 101,12 und B gleich 94. Callquote 111,12, Putquote 104.',[
   F('111{,}12-104=7{,}12,\\qquad111{,}12>101{,}12,\\qquad104>94','Der Preisabstand passt, aber beide Optionspreise überschreiten ihre eigenen oberen Grenzen.',[['101{,}12,94','Heutige obere Call- beziehungsweise Putpreisgrenze in diesem Markt, WE.']]),
   'Die überhöhten Einzelquoten werden nicht allein deshalb plausibel, weil ihre Fehler dieselbe Größe besitzen. Ein Paritätsrechner muss deshalb neben dem Paketvergleich auch die passenden Einzelgrenzen anzeigen. Umgekehrt beweist ein innerhalb der Grenzen liegendes Paar nicht jede einzelne Modellannahme.'
  ],'Eine notwendige Gleichung ist kein vollständiges Gütesiegel für alle beteiligten Preise.')
 ]),
 S('factors','24. Was Zins, Ertrag und Strike über den Preisabstand aussagen','a b',[
  'Ein höherer Strikebarwert verschiebt den Abstand zugunsten des Put. Ein kleinerer Prepaid-Aktienerhalt durch höhere passende Ausschüttungen wirkt ebenso. Ein höherer Finanzierungszins verringert bei sonst gleichem Spot und Ertrag den Strikebarwert und vergrößert den Abstand. Diese Aussagen betreffen den Unterschied der Preise, nicht automatisch eine vollständige Erklärung jeder isolierten Einzelpreisänderung.',
  fig('strike-spread','Der Strike und sein Barwert verändern die gebundene Preisdifferenz','Eigener Markt: Spot 105, bekannter Ausschüttungsbarwert 3,88, Endfaktor 0,94. Zum Vergleich die unpassend vereinfachte Spot-minus-Strike-Rechnung.',[60,160],[-60,50],'Gemeinsamer Strike (WE)','Callpreis minus Putpreis (WE)',[
   {name:'Korrekt: Prepaid-Erhalt minus Strikebarwert',points:grid(60,160,50,k=>101.12-.94*k)},{name:'Unpassend: Spot minus unverschobener Strike',dash:true,points:grid(60,160,50,k=>105-k)}
  ],'Die zwei Geraden sind nicht allgemein gleich. Finanzierung und Ertragsabgrenzung gehören zum Preisabstand. Es werden verschiedene Rechte verglichen, keine rückwirkenden Strikeänderungen eines alten Vertrags.'),
  fig('income','Zwischenertrag und reiner Endaktienerhalt sind verschiedene Ansprüche','Spot 105 und Strikebarwert 94 bleiben fest. Nur der bekannte Ausschüttungsbarwert wird verändert.',[0,20],[80,110],'Bekannter Ausschüttungsbarwert (WE)','Heutiger Anspruchswert (WE)',[
   {name:'Prepaid-Endaktienerhalt',points:grid(0,20,50,i=>105-i)},{name:'Strikebarwert',dash:true,points:[[0,94],[20,94]]}
  ],'Der vertikale Abstand ist die erforderliche Call-Put-Differenz. Bei hohem Ausschüttungsbarwert kann sich ihr Vorzeichen ändern. Eine zusätzliche direkte Dividende an den bloßen Optionsinhaber wird daraus nicht abgeleitet.')
 ]),
 S('negative-rates','25. Negative Zinsen und Forward-ATM ohne falsche Merksätze','a b',[
  X('Der Put darf bei erfüllter Parität teurer sein','Keine Ausschüttung, Spot und Strike je 100, Enddiskontfaktor 1,05. Putpreis zehn und Callpreis fünf.',[
   F('c_t-p_t=5-10=-5=100-100(1{,}05),\\qquad F_{t,T}=\\frac{100}{1{,}05}\\approx95{,}238095','Ein Faktor über eins ist mit negativer Finanzierung vereinbar. Die Preisbeziehung bleibt algebraisch dieselbe.',[['c_t,p_t','Europäische Optionspreise, WE.'],['F_{t,T}','Aktuelle faire Lieferquote, WE je Aktie.']]),
   'Ein universeller Satz Call immer teurer als Put ist falsch. Entscheidend ist der Unterschied zwischen dem passenden Aktienerhalt und dem Strikebarwert. Der Diskontfaktor darf nicht allein wegen seines Namens auf höchstens eins begrenzt werden.'
  ],'Das Vorzeichen des Preisabstands folgt aus den Ansprüchen, nicht aus dem Wort Call.'),
  F('K=F_{t,T}\\ \\Longrightarrow\\ c_t=p_t','Forward-ATM bedeutet hier Strike gleich passender fairer Forwardquote. Spot-ATM ist bei nicht neutralem Carry eine andere Bedingung.',[...base,['F_{t,T}','Aktuelle faire Forwardquote derselben Endlieferung, WE.']]),
  fig('discount','Ein positiver Diskontfaktor kann den Preisabstand durch null führen','Prepaid-Aktienerhalt 101,12 und Strike 100 bleiben fest. D ist der Endfaktor, keine Jahreszinsquote.',[.7,1.2],[-22,34],'Positiver Enddiskontfaktor','Gebundene Call-Put-Differenz (WE)',[
   {name:'Prepaid-Erhalt minus Strikebarwert',points:grid(.7,1.2,60,d=>101.12-100*d)},{name:'Gleiche Optionspreise',dash:true,points:[[.7,0],[1.2,0]]}
  ],'Bei Faktor 1,0112 ist die Differenz null. Hält man reale Optionsquoten zugleich unverändert fest, können diese bei einer Faktoränderung die neue Beziehung verletzen; die Grafik behauptet keine automatische Anpassung eines alten Quotes.')
 ]),
 S('bid-ask','26. Aus Mittelpreisen werden noch keine ausführbaren Gewinne','a',[
  'Bei einem Kauf wird die angebotene Briefseite bezahlt; ein Verkauf erzielt die Geldseite. Für den teuren Call werden Call-Geld, Put-Brief und Aktien-Brief kombiniert. In der Gegenrichtung werden Put-Geld, Aktien-Geld und Call-Brief verwendet. Ein kleiner Abstand zwischen Mittelpreisen kann durch diese Spannen vollständig verschwinden.',
  F('G_t^{conv}=c_{bid}+B-p_{ask}-A_{ask},\\qquad G_t^{rev}=p_{bid}+A_{bid}-c_{ask}-B','Für bekannte replizierbare Erträge gilt hier A auf der jeweiligen Aktienquoteseite gleich Aktienquote minus Ausschüttungsbarwert. Finanzierung ist zunächst noch einheitlich.',[['G_t^{conv},G_t^{rev}','Anfangszufluss der jeweiligen ausführbar quotierten Paketkombination je Recht, WE.'],['c_{bid},c_{ask},p_{bid},p_{ask}','Geld- beziehungsweise Briefseiten der europäischen Optionsquoten, WE.'],['A_{bid},A_{ask}','Endaktienerhalt aus der jeweiligen Aktienquoteseite und derselben bekannten Ertragsbereinigung, WE.'],['B','Strikebarwert bei einheitlicher Finanzierung, WE.']]),
  X('Ein positiver Mittelpreisabstand reicht nicht','Dividendenmarkt mit I gleich 3,88 und B gleich 94. Aktie Geld/Brief 104,90/105,10; Put 3,80/4,20; Call 11,15/11,65.',[
   F('G_t^{conv}=11{,}15+94-4{,}20-(105{,}10-3{,}88)=-0{,}27','Die vermeintlich teure Callseite liefert mit ausführbaren Seiten keinen positiven Anfangszufluss.',[['G_t^{conv}','Ausführbar quotierter Conversion-Anfangszufluss je Recht, WE.']]),
   F('G_t^{rev}=3{,}80+(104{,}90-3{,}88)-11{,}65-94=-0{,}83','Auch die Gegenrichtung ist nach Geld-Brief-Spannen negativ.',[['G_t^{rev}','Ausführbar quotierter Reversal-Anfangszufluss je Recht, WE.']]),
   'Callmittel 11,40 und Putmittel vier würden gegenüber dem mittleren Aktienerhalt einen scheinbaren Abstand 0,28 zeigen. Dieser Mittelpreisabstand ist nicht der mit den tatsächlich bezeichneten Quoten erzielbare Kassenüberschuss.'
  ],'Beide Handelsrichtungen benötigen ihre eigene Rechnung mit den richtigen Quoteseiten.'),
  fig('bid-ask','Die ausführbaren Spannen erzeugen ein Band ohne positiven Anfangszufluss','Vorige Aktie- und Putquoten, I gleich 3,88, B gleich 94. Call-Geld liegt 0,25 unter und Call-Brief 0,25 über dem veränderten Callmittel.',[8,15],[-5,4],'Callmittelpreis (WE)','Anfangszufluss je Paket (WE)',[
   {name:'Conversion mit richtigen Quoteseiten',points:grid(8,15,70,c=>c-11.67)},{name:'Reversal mit richtigen Quoteseiten',dash:true,points:grid(8,15,70,c=>10.57-c)},{name:'Kein positiver Zufluss',dash:true,points:[[8,0],[15,0]]}
  ],'Zwischen Callmitteln 10,57 und 11,67 ist keine der beiden Rechnungen positiv. Das ist ein eigenes vereinfachtes Quoteband; weitere Gebühren, Finanzierung und Erfüllungsrisiken sind noch nicht enthalten.')
 ]),
 S('funding-costs','27. Gebühren und verschiedene Finanzierungssätze getrennt hinzufügen','a b',[
  F('G_t^{net}=G_t^{quotes}-C_t','Ein hier vollständig heute anfallender Kostenbetrag wird vom schon korrekt quotierten Anfangszufluss abgezogen. Anders terminierte Kosten benötigen zunächst ihren passenden Barwert.',[['G_t^{net},G_t^{quotes}','Anfangszufluss nach Kosten beziehungsweise nach richtigen Quoteseiten vor Kosten, WE je Paket.'],['C_t','Gesamte zusätzlich angesetzte heutige Kosten, WE je Paket.']]),
  X('Ein sichtbarer Quotenabstand wird kleiner oder verschwindet','Voriger Geld-Brief-Markt, aber Callmittel 13,12 und gleiche Halbspanne 0,25. Zusätzliche heutige Gesamtkosten 0,60 je Paket.',[
   F('G_t^{quotes}=13{,}12-11{,}67=1{,}45,\\qquad G_t^{net}=1{,}45-0{,}60=0{,}85','Nur der nach Quote und Kosten verbleibende Betrag ist in diesem vereinfachten Paket positiv.',[['G_t^{quotes},G_t^{net}','Anfangszufluss vor beziehungsweise nach Zusatzkosten, WE.']]),
   'Lägen die zusätzlichen Kosten über 1,45, wäre auch diese Richtung nicht positiv. Ein behaupteter Bruttobetrag darf nicht als bereits realisierter Nettogewinn präsentiert werden.'
  ],'Kosten werden dem richtigen Zeitpunkt und der richtigen Handelsrichtung zugeordnet.'),
  D('Kreditaufnahme und sichere Anlage können unterschiedliche Preise haben',[
   F('B_{borrow}=\\frac{K}{(1+r_{borrow})^{\\tau}},\\qquad B_{lend}=\\frac{K}{(1+r_{lend})^{\\tau}}','Hier sind die beiden Sätze ausdrücklich effektive Jahresraten und die Laufzeit ist in Jahren angegeben. Bei höherem Kreditzins liefert dieselbe Endschuld heute weniger Kreditmittel.',[['B_{borrow},B_{lend}','Heutiger Krediterlös gegen Endschuld K beziehungsweise heutige Anlageausgabe für Endzahlung K, WE.'],['K,\\tau','Endstrike in WE und Jahre bis dahin.'],['r_{borrow},r_{lend}','Effektiver jährlicher Kredit- beziehungsweise Anlagesatz als Dezimalquote.']]),
   'In der Conversion wird der passende Krediterlös angesetzt; in der Reversal der nötige Anlagepreis. Ein einzelner gemeinsamer Faktor muss dann durch die tatsächlichen gerichteten Geldbausteine ersetzt werden. Bei Leerverkäufen kann zudem die Verzinsung der hinterlegten Erlöse vom normalen sicheren Anlagesatz abweichen.'
  ])
 ]),
 S('american','28. Warum amerikanische Rechte nicht unverändert dieselbe Gleichung erfüllen','a',[
  'Amerikanische Rechte können zusätzliche frühere Zahlungsentscheidungen auslösen. Ein kurzer Put kann zu einer früheren Zahlung und Aktienübernahme führen, während ein anderer Baustein erst später Geld bereitstellt. Die ausschließlich endzeitbezogene europäische Gleichheit darf daher nicht ohne weitere Begründung als exakte amerikanische Preisgleichung verwendet werden.',
  F('S_t-K\\le C_t-P_t\\le S_t-KD','Diese bekannte Schranke wird hier ausschließlich für nicht ausschüttende Aktien, nicht negative konstante Finanzierung und sonst passende amerikanische Rechte angegeben.',[['C_t,P_t','Heutiger amerikanischer Call- und Putpreis, WE.'],['S_t,K','Spot und gemeinsamer Strike, WE.'],['D','Unter den bezeichneten Zinsbedingungen höchstens eins großer Endfaktor.']]),
  'Ohne Ausschüttung und bei nicht negativem Zins bringt frühe Callausübung im Standardfall keinen Vorteil. Der amerikanische Put kann dagegen einen wertvollen früheren Strikeempfang besitzen. Diese Asymmetrie erklärt, weshalb ein Intervall statt einer ungeprüften europäischen Gleichheit verwendet wird. Bei negativen Zinsen oder Ausschüttungen gelten gerade nicht unverändert diese eingegrenzten Voraussetzungen.',
  D('Ein gemeinsames Endbild beweist keine gleichen Zwischenpflichten',[
   'Selbst wenn zwei am Ende gezeichnete Kurven übereinstimmen, können eine frühe Zuteilung, eine Dividendenersatzzahlung und eine Marginanforderung vorher Liquidität benötigen. Ein theoretisches Endpaket ist keine Garantie, dass ohne Finanzierung bis dahin durchgehalten werden kann.'
  ])
 ]),
 S('box','29. Zwei Paritäten als zusätzliche feste Zahlung kombinieren','a b',[
  D('Vertiefung: Der europäische Box-Spread',[
   F('(c_1-p_1)-(c_2-p_2)=D(K_2-K_1),\\qquad K_2>K_1','Zwei ansonsten gleiche europäische Paritäten unterschiedlicher Strikes werden voneinander abgezogen. Der gemeinsame Aktienerhalt fällt heraus.',[['c_1,p_1,c_2,p_2','Heutige Call- und Putpreise zu den beiden Strikes, WE.'],['K_1,K_2','Unterer und oberer Strike, WE je Aktie.'],['D','Gemeinsamer positiver Enddiskontfaktor.']]),
   'Die entsprechende Kombination liefert am Ende den konstanten Strikeabstand. Das ist eine weitere Anwendung derselben Zahlungsidentität und hier zusätzliche Vertiefung, kein neues verpflichtendes 2027-Lernziel. Unterschiedliche Erfüllung, Kosten oder amerikanische Ausübung können die einfache Umsetzung einschränken.',
   X('Eine feste Differenz richtig diskontieren','Strikes 90 und 110, gemeinsamer Endfaktor 0,95; sonst exakt passende europäische Rechte.',[
    F('V_t^{box}=0{,}95(110-90)=19,\\qquad H_T^{box}=20','Die spätere feste Zahlung 20 kostet heute 19 unter denselben Finanzierungsannahmen.',[['V_t^{box},H_T^{box}','Heutiger Paketpreis und spätere konstante Boxleistung, WE je Strikerechtepaar.']])
   ],'Ein gleich großer Kredit- oder Anlagebetrag ist nach Zeitpunkt und nicht nur nach Nennzahl zu vergleichen.')
  ])
 ]),
 S('settlement','30. Prämie, Lieferung und Futuresabrechnung nicht vermischen','a b',[
  'Die hier verwendeten europäischen Aktienoptionspreise sind heutige Prämienwerte. Die zugehörige Lieferung beziehungsweise Geldleistung erfolgt am Endtermin. Bei anders marginierten oder laufend abgerechneten Derivaten können andere Zwischenzahlungen entstehen. Eine äußerlich ähnliche Futures- oder Optionsformel darf deshalb nicht ohne Prüfung der tatsächlichen Zahlungsregeln übertragen werden.',
  'Dasselbe gilt für eine Aktie mit anderem Referenzschlusskurs, eine Option mit besonderem Durchschnittsfixing oder unterschiedliche Ausübungstermine. Eine binäre Behauptung Parität gilt oder gilt nicht ist weniger hilfreich als die genaue Frage, welche Cashs und Rechte der Vergleich tatsächlich enthält. Erst diese Prüfung bestimmt die passende Gleichung.'
 ]),
 S('calculator','31. Interaktiv: Preisgleichheit und identische Endzustände prüfen','a b',[
  'Der Rechner bietet sechs Eingaben und zehn Vergleichsfälle. Die beiden Optionspreise sind unabhängige hypothetische Quoten. Die ersten Kennzahlen vergleichen ihre heutigen Gesamtpakete; danach folgen Optionspreisabstand, alter Forwardwert und neue faire Lieferquote. Die zwei Grafikkurven liegen bewusst deckungsgleich, weil die Endleistungen der Pakete identisch sind.',
  'Verändere nur den Callpreis um zwei nach oben oder unten. Die heutigen Paketpreise unterscheiden sich, obwohl die Endleistung gleich bleibt. Setze dann beide Optionspreise um zehn höher: Der Abstand bleibt gleich. Beim Fall beide plus 100 bleibt ebenfalls die Paketparität erhalten, doch die eigene Grenzprüfung erkennt die überhöhten Einzelpreise.',
  'Ändere danach den Diskontfaktor oder Ausschüttungsbarwert und behalte die alten Optionsquoten fest. Die Abweichung zeigt dann gerade, dass sich der passende Vergleich geändert hat. Die Quoten werden nicht heimlich nachgerechnet, um jede Eingabe immer korrekt erscheinen zu lassen. Ein Faktor 1,05 illustriert negative Finanzierung, nicht eine Aktienkursprognose.',
  'Die zweite Tabelle hält die notwendigen europäischen Einzelgrenzen sichtbar. Eine Gleichheit dort als bestanden zu lesen, obwohl ein Recht seine Obergrenze überschreitet, wäre genau der Denkfehler, den der Rechner verhindern soll. Die Endzustandstabelle und Kurvenwerte sind bei Bedarf seitlich und per Tastatur verschiebbar.'
 ]),
 S('workflow','32. Ein Arbeitsweg für neue Paritätsaufgaben','a b',[
  T(['Schritt','Konkrete Prüfung','Typisch vermiedener Fehler'],[
   ['Rechte abgleichen','Basiswert, Strike, Endtermin, Stil und Rechtezahl.','Verschiedene Ansprüche blind gleichsetzen.'],
   ['Endleistungen aufschreiben','Niedrige, gleiche und hohe Aktienkurse einzeln betrachten.','Eine einzige günstige Szenariozahlung als Replikation ausgeben.'],
   ['Heutige Werte bestimmen','Reiner Endaktienerhalt und Strikebarwert; Zwischenzahlungen gesondert.','Dividenden oder Finanzierungszeitpunkt vergessen.'],
   ['Quote oder Wert benennen','Neue faire Lieferquote gegen alten Forwardwert unterscheiden.','Eine bestehende wertvolle Kombination als kostenlosen neuen Forward behandeln.'],
   ['Richtung wählen','Teures Paket verkaufen, günstiges kaufen; alle Bausteine mitnehmen.','Nur die teure Option ohne passende Gegenposition verkaufen.'],
   ['Durchführbarkeit prüfen','Richtige Quoteseiten, Finanzierung, Gebühren, Sicherheiten und Lieferung.','Mittelpreisresidual als ausgeführten Gewinn darstellen.']
  ],'Das Ergebnis wird zusammen mit den Annahmen, Leistungen und Einheiten begründet.')
 ]),
 S('review','33. Acht Verständnisfragen mit Lösungen und Gegenbeispielen','a b',[
  D('Frage 1: Warum braucht die Parität keine Wahrscheinlichkeit eines Kursanstiegs?',[
   'Die Endpakete stimmen in jedem im Vertrag enthaltenen Endzustand überein. Eine unbekannte gewichtete Durchschnittszahlung wird nicht als Ersatz verwendet.',
   'Bei niedrigem Kurs ergänzen Geld beziehungsweise Put die Aktie zum Strike; bei hohem Kurs liefern Aktie beziehungsweise Call denselben Mehrwert. Die heutige Gleichpreisforderung folgt aus dieser Zustandsidentität und durchführbarer Replikation. Die tatsächliche Kursprognose beeinflusst nicht die algebraische Gleichheit.'
  ]),
  D('Frage 2: Sind Call und Put bei Spot gleich Strike immer gleich teuer?',[
   'Nein. Bei Spot und Strike 100, Endfaktor 0,95 und keinem Ertrag beträgt der geforderte Call-Put-Abstand fünf.',
   'Gleichheit folgt stattdessen aus Strike gleich passender fairer Forwardquote. Finanzierung und Ausschüttungsabgrenzung erklären, weshalb Forward-ATM und Spot-ATM verschieden sein können.'
  ]),
  D('Frage 3: Warum sind Call minus Put nicht schon eine bezahlte ganze Aktie?',[
   'Die Endleistung ist Aktienkurs minus Strike. Die zusätzliche sichere Strikebereitstellung fehlt.',
   'Im eigenen Beispiel kosten Call elf minus Put sechs nur fünf. Erst weitere 95 heute stellen später den Strike 100 bereit. Bei tiefem Aktienkurs bleibt sonst die Short-Put-Pflicht als erheblicher Verlust bestehen.'
  ]),
  D('Frage 4: Wo bleibt die Dividende beim synthetischen Endaktienerhalt?',[
   'Im bekannten Gelddividendenfall wird die Endaktie mit Aktienkauf und passend früher Tilgung der Dividendenfinanzierung hergestellt.',
   'Die tatsächliche Zwischenzahlung bedient die hierfür vorgesehene Schuld. In der Gegenrichtung muss der Aktienleerverkäufer die Dividende ersetzen; eine passende Zwischenanlage finanziert diese Pflicht. Der Dividendencash darf nicht doppelt im Endaktienerhalt und separat als Gewinn enthalten sein.'
  ]),
  D('Frage 5: Warum kann ein heutiger Paketabstand null und dennoch ein Einzelpreis falsch sein?',[
   'Gleiche Preisfehler von Call und Put heben sich in ihrer Differenz auf.',
   'Im Beispiel A gleich 101,12 und B gleich 94 erfüllen Call 111,12 und Put 104 den geforderten Abstand 7,12. Beide liegen jedoch über ihren eigenen europäischen Obergrenzen. Die Parität ist nur eine notwendige Bedingung.'
  ]),
  D('Frage 6: Warum ist eine positive Mittelpreisabweichung keine Garantie einer Arbitrage?',[
   'Käufe und Verkäufe verwenden verschiedene ausführbare Quoteseiten. Die Spannen können den gesamten Mittelpreisabstand aufbrauchen.',
   'Die beiden Richtungen werden getrennt gerechnet. Danach folgen zusätzlich zeitlich richtig angesetzte Gebühren, Finanzierung und Erfüllungsbedingungen. Eine isolierte schöne Zahl ohne vollständige Gegenpositionen ist kein gesicherter Zahlungsüberschuss.'
  ]),
  D('Frage 7: Darf eine neue faire Forwardquote den alten Vertragswert auf null setzen?',[
   'Nein. Der alte Vertrag beziehungsweise die Optionskombination behält ihren alten Strike.',
   'Im eigenen Dividendenfall ist die neue Quote rund 107,5745; der alte Lieferbetrag 100 erzeugt heute einen Wert 7,12. Nur ein neu fair vereinbarter Forward mit der passenden neuen Quote beginnt im idealen Fall bei null.'
  ]),
  D('Frage 8: Warum werden amerikanische Rechte nicht nur mit einem anderen Buchstaben eingesetzt?',[
   'Das zusätzliche frühere Ausübungsfenster kann Zahlung und Aktienübernahme vor den geplanten Endtermin verschieben.',
   'Die ausschließlich endzeitbezogene europäische Gleichheit kontrolliert diese Zwischenpflichten nicht automatisch. Besonders Ausschüttungen und Finanzierung beeinflussen die Entscheidung. Die gezeigte amerikanische Schranke besitzt ausdrücklich nicht negative Zinsen und keine laufenden Ausschüttungen als Bedingungen.'
  ])
 ]),
 S('connections','34. Die Parität als Bindeglied im Lernpfad nutzen','a b',[
  'Die Instrumenteinheit liefert die einzelnen Call- und Put-Endleistungen samt vollständigem Positionsgewinn. Die Optionsbewertung ergänzt Ausübungswert, Zeitwert, Grenzen und Werttreiber. Das Carrykapitel erklärt, welche Zwischenzahlungen zur Aktie gehören; das Forwardkapitel trennt alten Wert von neuer Lieferquote.',
  'Die Einperiodenreplikation bestimmt als nächster Schritt einzelne bedingte Anspruchswerte in einem vollständigen Zustandsmodell. Die Parität bleibt dabei eine wichtige Gegenkontrolle: Ein Modellpreis für Call und Put muss zu denselben Aktien- und Finanzierungspreisen passen. Eine bestandene Gegenkontrolle ersetzt aber nicht jede übrige Annahmenprüfung.'
 ])
],explorations:[{section:'calculator',lesson:'derivatives-06',focus:'lab-parity',label:'Zwei heutige Paketpreise, identische Endleistungen und separate Einzelpreisgrenzen mit zehn Fällen vergleichen'}],related:[
 {unit:'option-values',section:'option-replication',label:'Die einzelne bedingte Leistung und ihr Hedgeverhältnis nachvollziehen'},
 {unit:'option-values',section:'negative-time',label:'Europäische Zeitwerte und diskontierte Grenzen ohne falsche Merksätze lesen'},
 {unit:'derivative-contracts',section:'moneyness',label:'Moneyness, Auszahlung und vollständigen Gewinn voneinander trennen'},
 {unit:'carry',section:'calculator',label:'Passende Aktien-, Ertrags- und Finanzierungsleistungen gemeinsam bewerten'},
 {unit:'forward-value',section:'replication',label:'Alten Liefervertrag, aktuellen Marktwert und neue Quote unterscheiden'},
 {unit:'futures',section:'funding',label:'Zwischenzahlungen und deren Finanzierung beim Instrumentvergleich beachten'},
 {unit:'binomial',section:'neutral-price',label:'Einzelne Call- und Putpreise aus zwei Zuständen und ihrer Finanzierung bestimmen'}
],sources:[
 {title:'CFA Institute: tatsächliche Level-I-Lernziele 2027, Option Replication Using Put-Call Parity, Seite 24',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=24'},
 {title:'CFA Institute: ergänzende öffentliche Übersicht 2026; Kernfall europäische Rechte ohne laufenden Ertrag, keine vollständige 2027-Curriculumquelle',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/option-replication-using-put-call-parity'},
 {title:'Options Industry Council: Put/Call Parity; synthetische Beziehungen und Grenzen durch Finanzierung, Leerverkauf und Kosten; spezielle Vereinfachungen nicht ungeprüft verallgemeinern',url:'https://www.optionseducation.org/advancedconcepts/put-call-parity'},
 {title:'Clarke, de Silva und Thorley: Fundamentals of Futures and Options, CFA Research Foundation 2013; Grundlagen der Parität und frühen Ausübung; alle Zahlenfälle hier eigenständig',url:'https://www.cfainstitute.org/sites/default/files/-/media/documents/book/rf-publication/2013/rf-v2013-n3-1-pdf.pdf'}
],review:{"status":"checked","date":"2026-10-27","method":"documented-self-audit","acceptance":"CFA-2027-ACCEPTANCE.md#parity","note":"Eigene dokumentierte Gesamtabnahme: Lernziel-, Errata-, Fach- und Funktionsprüfungen; keine externe CFA-Freigabe. Genaue Evidenz und Grenzen im verlinkten Abnahmebericht.","previous":{"status":"draft","date":"2026-10-25","note":"Eigene zustandsweise Replikation und Kosten-/Ertragsfälle; mathematische und technische Gegenprüfung sowie fachliche Gesamtabnahme erforderlich."}}};
