const {F,T,X,S,G}=require('../author.cjs');
const maturities=Array.from({length:41},(_,j)=>j/20);
module.exports={id:'fx-calculation',intro:[
 'Wechselkursrechnung wird verständlich, wenn jede Zahl eine Einheit und jede Transaktion eine Richtung bekommt. Wir rechnen daher zuerst tatsächliche Währungsbeträge um. Erst danach verdichten wir die Zahlungsströme zur Formel für einen Kreuz- oder Terminkurs.',
 'Die Beispiele verwenden fiktive Kurse. Zunächst gelten gleiche Kredit- und Anlagezinsen ohne Gebühren; anschließend ergänzen wir Geld-Brief-Spannen und unterschiedliche Finanzierungszinsen. So wird sichtbar, welche Abweichung tatsächlich handelbar wäre und welche nur auf einem unpassenden Vergleich beruht.'
],sections:[
 S('cross-rates','1. Kreuzkurse durch Einheitenkürzen','a',[
  F('S_{A/C}=S_{A/B}S_{B/C}','Ein Kreuzkurs verbindet zwei Umrechnungen. Die mittlere Währung B kürzt sich heraus. Unsere Indexreihenfolge bezeichnet ausdrücklich A je C, nicht zwingend die Paarbezeichnung einer Handelsplattform.',[['S_{A/C}','Einheiten Währung A je Einheit Währung C.'],['S_{A/B},S_{B/C}','Kurse in A je B und B je C.'],['A,B,C','Drei unterschiedliche Währungen.']]),
  X('Vom Euro über Dollar zum Yen','Gegeben sind 1,10 USD je EUR und 150 JPY je USD, vorläufig ohne Spanne.',[
   '1 EUR kauft 1,10 USD. Diese kaufen 1,10 × 150 = 165 JPY. Der Kreuzkurs beträgt deshalb 165 JPY je EUR.',
   'Bei zusätzlich 1,25 USD je GBP wird durch den EUR-Kurs dividiert: 1,25/1,10 = 1,136364 EUR je GBP. Dollar je Pfund dividiert durch Dollar je Euro ergibt Euro je Pfund.',
   'Der inverse Kurs beträgt 1,10/1,25 = 0,88 GBP je EUR. Erst am Ende runden; vorzeitiges Runden kann eine kleine scheinbare Arbitrage erzeugen.'
  ],'Die Rechenart folgt aus den Einheiten. Zwei Kurse mit derselben Preiswährung werden für den passenden Kreuzkurs dividiert.'),
  F('S_{A/C}=\\frac{S_{B/C}}{S_{B/A}}','Wenn beide beobachteten Kurse B als Preiswährung verwenden, wird durch den Kurs in B je A dividiert.',[['S_{A/C}','Gesuchter Preis einer Einheit C in A.'],['S_{B/C},S_{B/A}','Beobachtete Preise von C und A in B.']])
 ]),
 S('bid-ask','2. Geld und Brief hängen von der Händlersicht ab','a',[
  'Beim Kurs in D je F kauft der Händler F zum Geldkurs (Bid) und verkauft F zum Briefkurs (Ask). Wer F besitzt und abgibt, erhält den Geldkurs. Wer F kaufen möchte, bezahlt den Briefkurs. Der höhere Briefkurs ist keine Bonuszahlung an den Kunden.',
  F('S_{F/D}^{bid}=\\frac{1}{S_{D/F}^{ask}},\\qquad S_{F/D}^{ask}=\\frac{1}{S_{D/F}^{bid}}','Beim Invertieren wechseln nicht nur die Zahlen, sondern auch Geld- und Briefseite. Der neue Geldkurs muss weiterhin höchstens so groß sein wie der Briefkurs.',[['S_{D/F}^{bid},S_{D/F}^{ask}','Händler-Geld- und Briefkurs in D je F.'],['S_{F/D}^{bid},S_{F/D}^{ask}','Entsprechende invertierte Kurse in F je D.'],['D,F','Preis- und Basiswährung der ursprünglichen Notierung.']]),
  X('Warum der Kehrwert die Seiten tauscht','Der Händler notiert 1,10/1,12 USD je EUR.',[
   'Wer 100 EUR verkauft, erhält 110 USD. Wer anschließend diese 110 USD wieder in EUR tauscht, kauft zum Briefkurs und erhält 110/1,12 = 98,214286 EUR.',
   'Die inverse Notierung lautet 1/1,12 bis 1/1,10, also 0,892857/0,909091 EUR je USD. Der erste Umtausch wird bei der inversen Sicht zum Kauf von USD zum dortigen Briefkurs.',
   'Der Verlust beim sofortigen Hin- und Rücktausch entsteht durch die Spanne; eine Umbenennung des Paares beseitigt ihn nicht.'
  ],'Eine Plausibilitätsprüfung lautet: Bid ≤ Ask und ein sofortiger Rundtausch darf ohne besondere Marktchance keinen Gewinn erzeugen.')
 ]),
 S('cross-spread','3. Handelbare Kreuzkurse statt Mittelwertvergleich','a',[
  'Gegeben sind 1,10/1,12 USD je EUR und 1,25/1,28 USD je GBP. Gesucht ist eine synthetische Notierung in EUR je GBP. Für beide Seiten wird ein tatsächlich ausführbarer Tauschweg konstruiert.',
  F('S_{EUR/GBP}^{bid}=\\frac{S_{USD/GBP}^{bid}}{S_{USD/EUR}^{ask}},\\qquad S_{EUR/GBP}^{ask}=\\frac{S_{USD/GBP}^{ask}}{S_{USD/EUR}^{bid}}','Die schlechtere Seite jeder Teiltransaktion gehört in die Rechnung. Für den Verkauf von GBP wird zuerst GBP zum Geldkurs verkauft und anschließend EUR zum Briefkurs gekauft.',[['S_{EUR/GBP}^{bid},S_{EUR/GBP}^{ask}','Synthetischer Geld- und Briefkurs in EUR je GBP.'],['S_{USD/GBP}^{bid},S_{USD/GBP}^{ask}','Beobachtete USD-je-GBP-Notierung.'],['S_{USD/EUR}^{bid},S_{USD/EUR}^{ask}','Beobachtete USD-je-EUR-Notierung.']]),
  T(['Kundenwunsch','Ausführbare Schritte','Ergebnis'],[
   ['1 GBP verkaufen','1 GBP → 1,25 USD → 1,25/1,12 EUR','Geld: 1,116071 EUR je GBP'],
   ['1 GBP kaufen','1,28 USD nötig; diese kosten 1,28/1,10 EUR','Brief: 1,163636 EUR je GBP']
  ],'Der synthetische Spread enthält die Kosten beider Teilmärkte.'),
  'Eine direkte Notierung von 1,15/1,18 EUR je GBP eröffnet hier trotz abweichendem Mittelwert keine Arbitrage zwischen direktem und synthetischem Markt: Direktverkauf bringt 1,15, synthetischer Kauf kostet 1,163636. Synthetischer Verkauf bringt 1,116071, direkter Kauf kostet 1,18.'
 ]),
 S('triangular','4. Dreiecksarbitrage als geschlossener Zahlungsweg','a',[
  X('Eine ausführbare Preisdifferenz','Die beiden USD-Notierungen bleiben 1,10/1,12 USD je EUR und 1,25/1,28 USD je GBP. Direkt werden jetzt 1,18/1,20 EUR je GBP notiert. Alle Kurse seien gleichzeitig für die benötigte Größe handelbar.',[
   'Beginne mit 1.000.000 EUR. Verkaufe EUR zum Geldkurs 1,10: Du erhältst 1.100.000 USD.',
   'Kaufe GBP zum Briefkurs 1,28 USD je GBP: 1.100.000/1,28 = 859.375 GBP.',
   'Verkaufe diese GBP direkt zum Geldkurs 1,18 EUR je GBP: 859.375 × 1,18 = 1.014.062,50 EUR.',
   'Der geschlossene Rundtausch liefert 14.062,50 EUR mehr als den Anfangsbetrag, also 1,40625 %, vor zusätzlichen Gebühren und Ausführungskosten.'
  ],'Die Chance entsteht, weil der direkte Geldkurs 1,18 über dem synthetischen Briefkurs 1,163636 liegt.'),
  F('V_{EUR,1}=V_{EUR,0}S_{USD/EUR}^{bid}\\frac{1}{S_{USD/GBP}^{ask}}S_{EUR/GBP}^{bid}','Der Faktor multipliziert drei gerichtete Umrechnungen; alle Zwischenwährungen kürzen sich heraus. Ein Wert über eins bedeutet einen positiven Bruttoertrag des Rundtauschs.',[['V_{EUR,0},V_{EUR,1}','EUR-Betrag vor und nach dem Rundtausch.'],['S_{USD/EUR}^{bid}','Ausführbarer EUR-Verkaufskurs in USD.'],['S_{USD/GBP}^{ask}','Ausführbarer GBP-Kaufskurs in USD.'],['S_{EUR/GBP}^{bid}','Ausführbarer GBP-Verkaufskurs in EUR.']]),
  'In der Realität gehören Zeitgleichheit, verfügbare Handelsgröße, Abwicklung, Kreditlinien und alle Kosten zur Prüfung. Drei historische Bildschirmkurse oder drei Mittelkurse beweisen noch keine ausführbare Arbitrage.'
 ]),
 S('covered-parity','5. Gedeckte Zinsparität aus zwei Anlagewegen','b',[
  'Ein Anleger kann heimisches Geld direkt anlegen oder heute in Fremdwährung tauschen, dort anlegen und den späteren Rücktausch schon heute per Forward festlegen. Sind Laufzeit, Kreditqualität und weitere Bedingungen vergleichbar, dürfen die beiden gedeckten Wege im reibungslosen Modell nicht verschiedene Endwerte liefern.',
  F('1+i_D=\\frac{1}{S_{D/F}}(1+i_F)F_{D/F}\\quad\\Longrightarrow\\quad F_{D/F}=S_{D/F}\\frac{1+i_D}{1+i_F}','Aus einer Einheit D werden zunächst 1/S Einheiten F. Nach Verzinsung werden diese zum vereinbarten Terminkurs wieder in D getauscht. Die Gleichheit der Endwerte ergibt die gedeckte Zinsparität.',[['S_{D/F}','Heutiger Kassakurs in D je F.'],['F_{D/F}','Heute vereinbarter Terminkurs in D je F zur selben Endfälligkeit.'],['i_D,i_F','Effektive Zinssätze in D und F über genau diese Anlageperiode; Kredit und Anlage vorläufig gleich.']]),
  X('Zinsunterschied erklärt den Terminaufschlag','Kassakurs 1,20 USD je EUR; Jahreszins USD 4 %, EUR 2 %; Laufzeit ein Jahr.',[
   'Der faire Modell-Terminkurs ist 1,20 × 1,04/1,02 = 1,223529 USD je EUR.',
   'Eine direkte Anlage von 1.200.000 USD wächst auf 1.248.000 USD.',
   'Der alternative Weg kauft 1.000.000 EUR, die zu 1.020.000 EUR wachsen. Deren gedeckter Rücktausch liefert 1.020.000 × 1,223529… = 1.248.000 USD.',
   'Der EUR-Zins ist niedriger. Der EUR-Terminaufschlag in USD gleicht im gedeckten Vergleich den geringeren Zinsertrag aus. Er ist keine Vorhersage eines künftigen Kassakurses.'
  ],'Die Zinsen stehen entsprechend der Preiseinheit: Preiswährungszins im Zähler, Basiswährungszins im Nenner.'),
  'Das Wort „gedeckt“ bedeutet hier, dass der Endkurs vertraglich festgelegt ist. Es bedeutet nicht, dass Kredit-, Besicherungs- und Abwicklungsrisiken realer Verträge verschwinden.'
 ]),
 S('covered-arbitrage','6. Zu hoher und zu niedriger Terminkurs','b',[
  T(['Position bei zu hohem Forward 1,25 USD je EUR','Heute','In einem Jahr'],[
   ['USD-Kredit','+1.200.000 USD','−1.248.000 USD'],
   ['Kassatausch und EUR-Anlage','−1.200.000 USD; +1.000.000 EUR, sofort angelegt','+1.020.000 EUR'],
   ['Terminverkauf der späteren EUR','Bei fairem Vertragsabschluss kein Anfangswert unterstellt','−1.020.000 EUR; +1.275.000 USD'],
   ['Summe verfügbarer Zahlungsströme','0 nach Anlage','+27.000 USD']
  ],'Modellannahmen: einjährige gleiche Kredit-/Anlagezinsen USD 4 % und EUR 2 %, Kassakurs 1,20, keine Gebühren, Sicherheitenkosten oder Ausfälle. „Kein Anfangswert“ bezieht sich auf den jeweils angebotenen Marktforward.'),
  'Ist der Marktforward höher als der Paritätskurs, verkauft man die relativ teure EUR-Terminposition. Die EUR, die später geliefert werden müssen, stammen aus einer heute finanzierten EUR-Anlage. Damit hängt der Überschuss nicht vom späteren Kassakurs ab.',
  X('Die Gegenrichtung bei zu niedrigem Forward','Bei denselben Kassakursen und Zinsen notiert der Marktforward nur 1,20 USD je EUR.',[
   'Leiht man 1.000.000 EUR, müssen in einem Jahr 1.020.000 EUR zurückgezahlt werden. Die geliehenen EUR werden heute für 1.200.000 USD verkauft.',
   'Die USD-Anlage wächst mit 4 % auf 1.248.000 USD. Gleichzeitig wird heute der Terminkauf von 1.020.000 EUR zu 1,20 vereinbart.',
   'Der Terminkauf kostet später 1.224.000 USD und liefert exakt die EUR-Kreditrückzahlung. 1.248.000 − 1.224.000 = 24.000 USD bleiben übrig.'
  ],'Die Richtung wird aus der teuren und billigen gedeckten Alternative abgeleitet. Ein auswendig gelerntes „immer die Hochzinswährung kaufen“ kann sie nicht ersetzen.')
 ]),
 S('tenor','7. Laufzeit und Zinskonvention gehören in die Formel','b',[
  F('F_{D/F}(T)=S_{D/F}\\frac{A_D(T)}{A_F(T)}','Die allgemeine Formel verwendet Aufzinsungsfaktoren bis exakt demselben Enddatum. Dadurch bleibt klar, welche Zinskonvention angewendet wird.',[['F_{D/F}(T)','Terminkurs für die Laufzeit T, in D je F.'],['S_{D/F}','Kassakurs in D je F.'],['A_D(T),A_F(T)','Vertragliche Aufzinsungsfaktoren in D und F bis zum gemeinsamen Enddatum.'],['T','Laufzeit in Jahren nach der angegebenen Zeitkonvention.']]),
  F('A_c(T)=1+i_cT\\quad\\text{oder}\\quad A_c(T)=(1+i_c)^T','Links gilt ein einfacher annualisierter Geldmarktzins, rechts ein effektiver Jahreszins mit entsprechender Wiederanlagekonvention. Beide dürfen nicht ohne Kennzeichnung vermischt werden.',[['A_c(T)','Aufzinsungsfaktor in Währung c über T.'],['i_c','Links einfacher annualisierter Zins, rechts effektiver Jahreszins.'],['c,T','Währungsindex und Laufzeit in Jahren.']]),
  X('Gleiche Jahreszahlen, unterschiedliche Konvention','S = 1,20 USD je EUR, USD-Zins 5 %, EUR-Zins 2 %, T = 0,5 Jahre.',[
   'Bei ausdrücklich einfachen Jahreszinsen: F = 1,20 × (1 + 0,05 × 0,5)/(1 + 0,02 × 0,5) = 1,217822 USD je EUR.',
   'Bei effektiven Jahreszinsen lautet die Rechnung dagegen 1,20 × (1,05/1,02)^0,5 ≈ 1,217519 USD je EUR.',
   'Die kleine Differenz ist kein Rechenfehler, sondern folgt aus verschiedenen Aufzinsungsannahmen. Bei Tageszählung sind zudem die zu den jeweiligen Zinssätzen gehörenden Jahresbruchteile zu verwenden.'
  ],'Eine korrekt aussehende Formel mit unpassenden Zeit- oder Zinsangaben kann einen falschen Terminkurs liefern.'),
  F('i_D=\\frac{(F/S)(1+i_FT)-1}{T}','Bei einfachen Jahreszinsen lässt sich die Paritätsgleichung nach einem impliziten heimischen Jahreszins auflösen: erst den Forward/Spot-Faktor mit dem fremden Aufzinsungsfaktor multiplizieren, dann eins abziehen und durch die Laufzeit teilen.',[['i_D,i_F','Impliziter heimischer bzw. gegebener fremder einfacher Jahreszins.'],['F,S','Termin- und Kassakurs in D je F.'],['T','Gemeinsame Laufzeit als Jahresbruchteil.']]),
  'Ein auf diese Weise implizierter Zinssatz ist ein relativer Preisvergleich unter den Paritätsannahmen. Er muss nicht dem tatsächlich verfügbaren Kredit- oder Anlagezins entsprechen, wenn unterschiedliche Spreads, Referenzkurven oder Besicherungen verwendet wurden.'
 ]),
 S('points','8. Forward Points und Terminprämien','b',[
  F('F=S+p\\kappa,\\qquad f=F/S-1','Explizit vorzeichenbehaftete Punkte werden mit ihrer angegebenen Einheit in Kurswerte übersetzt. Der relative Aufschlag bezieht sich auf den Kassakurs, nicht auf den Forward.',[['F,S','Termin- und Kassakurs in derselben Preiseinheit.'],['p','Vorzeichenbehaftete Anzahl Forward Points.'],['\\kappa','Angegebene Kurswerteinheit eines Punkts, beispielsweise 0,0001.'],['f','Terminaufschlag der Basiswährung für die betrachtete Laufzeit; negativ bedeutet Abschlag.']]),
  T(['Kassakurs und ausdrücklich signierte Punkte','Rechnung','Terminkurs'],[
   ['1,0850; +35 Punkte à 0,0001','1,0850 + 0,0035','1,0885'],
   ['1,0850; −24 Punkte à 0,0001','1,0850 − 0,0024','1,0826'],
   ['1,1000/1,1002; Geld +10, Brief +14','1,1000 + 0,0010 / 1,1002 + 0,0014','1,1010/1,1016'],
   ['1,1000/1,1002; Geld −18, Brief −12','1,1000 − 0,0018 / 1,1002 − 0,0012','1,0982/1,0990']
  ],'Die Punktgröße und die Vorzeichen sind hier ausdrücklich vorgegeben. Marktbildschirme können andere Anzeige- oder Vorzeichenkonventionen verwenden.'),
  F('f_{ann,simple}=\\frac{F/S-1}{T},\\qquad f_{ann,eff}=(F/S)^{1/T}-1','Einfach annualisierter und effektiv annualisierter Terminaufschlag sind verschiedene Kennzahlen. Die Annualisierung ist keine Zusage einer realisierbaren zukünftigen Jahresrendite.',[['f_{ann,simple},f_{ann,eff}','Einfach bzw. effektiv annualisierter relativer Terminaufschlag.'],['F,S','Termin- und Kassakurs in derselben Richtung.'],['T','Laufzeit in Jahren.']]),
  'Bei S = 1,20 und einem sechsmonatigen F = 1,224 beträgt der Aufschlag 2 % für sechs Monate, einfach annualisiert 4 % und effektiv annualisiert 4,04 %. In der Gegenrichtung beträgt die Sechsmonatsänderung 1,20/1,224 − 1 = −1,960784 %. Kehrwert, Vorzeichen und Annualisierung sind drei getrennte Schritte.'
 ]),
 S('carry-curve','9. Was Laufzeit und Zinsdifferenz bewirken','b',[
  G({id:'forward-curves',title:'Die Terminstruktur folgt hier den angenommenen Zinsdifferenzen',
   caption:'Eigene Paritätsrechnung mit S = 1,20 D je F und konstanten effektiven Jahreszinsen. Die Laufzeitkurven sind Modellpreise, keine Kassakursprognosen.',
   reading:'Bei höherem D-Zins steigt F mit der Laufzeit. Bei höherem F-Zins fällt F. Sind beide Zinsen gleich, bleibt der Terminkurs im Modell gleich dem Kassakurs. Alle Kurven beginnen bei T = 0 am selben Kassakurs.',
   plot:{x:[0,2],y:[1.14,1.26],xLabel:'Laufzeit T (Jahre)',yLabel:'Terminkurs (D je F)',series:[
    {name:'D 4 %, F 2 %',points:maturities.map(t=>[t,1.2*(1.04/1.02)**t])},
    {name:'D 2 %, F 2 %',dash:'5 4',points:maturities.map(t=>[t,1.2])},
    {name:'D 2 %, F 4 %',points:maturities.map(t=>[t,1.2*(1.02/1.04)**t])}
   ],marks:[{x:1,y:1.2*1.04/1.02,label:'1 Jahr: 1,2235',dx:12,dy:-16}]}}),
  'Für eine echte Terminkurve müssen passende Laufzeitfaktoren aus beiden Zinskurven eingesetzt werden. Eine flache Zinskurve ist hier nur eine kontrollierte Annahme, damit der Einfluss der Laufzeit isoliert erkennbar ist.'
 ]),
 S('funding-bounds','10. Spreads und Finanzierung erzeugen eine Arbitragebandbreite','b',[
  F('F^{bid}\\leq S^{ask}\\frac{A_D^{borrow}}{A_F^{lend}},\\qquad F^{ask}\\geq S^{bid}\\frac{A_D^{lend}}{A_F^{borrow}}','Links darf der Erlös aus dem Terminverkauf von F nicht über den gedeckten Beschaffungskosten liegen. Rechts darf der Preis für den Terminkauf von F nicht unter dem Erlös des entgegengesetzten gedeckten Weges liegen.',[['F^{bid},F^{ask}','Ausführbarer Termin-Geld- und Briefkurs in D je F.'],['S^{bid},S^{ask}','Kassa-Geld- und Briefkurs in D je F.'],['A_D^{borrow},A_F^{borrow}','Aufzinsungsfaktoren der Kreditaufnahme in D und F.'],['A_D^{lend},A_F^{lend}','Aufzinsungsfaktoren der Anlage in D und F; alle bis zum selben Enddatum.']]),
  X('Ein Band statt eines einzigen Vergleichspreises','Kassa 1,1990/1,2010 D je F. Einjährige D-Anlage 3 %, D-Kredit 5 %; F-Anlage 1 %, F-Kredit 3 %.',[
   'Ein D-finanzierter Kauf und spätere Lieferung einer F-Einheit kostet 1,2010 × 1,05/1,01 = 1,248564 D. Erst ein ausführbarer Termin-Geldkurs oberhalb davon ermöglicht diese Richtung vor weiteren Kosten.',
   'Die Gegenrichtung liefert höchstens 1,1990 × 1,03/1,03 = 1,1990 D je später zurückzuzahlender F-Einheit. Erst ein Termin-Briefkurs darunter ermöglicht die andere Richtung.',
   'Ein Marktforward von 1,21/1,22 liegt bezüglich dieser beiden Grenzen im arbitragefreien Bereich. Ein Vergleich mit einer einzigen aus Mittelzinsen errechneten Zahl wäre kein ausreichender Handelsnachweis.'
  ],'Die Grenzen gelten für den angegebenen Akteur und seine verfügbaren Konditionen. Andere Marktteilnehmer können andere Kosten haben.'),
  'In realen Märkten können Besicherungsregeln, Kreditrisiko, Bilanzkosten, Liquidität und Hedgingnachfrage Abweichungen von einer einfachen Referenzzins-Parität erklären. Eine Cross-Currency Basis ist eine Marktpreisdifferenz relativ zur gewählten Referenz; ihre Vorzeichenkonvention muss ausdrücklich genannt werden.'
 ]),
 S('hedge','11. Einen bekannten Fremdwährungsbetrag absichern','b',[
  F('N_FS_T+N_F(F_0-S_T)=N_FF_0','Ein späterer Fremdwährungseingang und ein passender Terminverkauf derselben Menge ergeben einen festen heimischen Erlös. Die Zerlegung beschreibt den wirtschaftlichen Nettowert; der Vertrag kann stattdessen physisch erfüllt werden.',[['N_F','Bekannter Zahlungseingang in Einheiten F.'],['S_T','Kassakurs am Zahlungstermin in D je F.'],['F_0','Heute vereinbarter Terminkurs für diesen Termin in D je F.']]),
  X('Warum die Absicherung bei beiden Kursrichtungen funktioniert','Ein Exporteur erhält in einem Jahr sicher 100.000 EUR und verkauft diese heute auf Termin zu 1,22 USD je EUR.',[
   'Bei späteren 1,10 USD je EUR wäre der Eingang am Kassamarkt 110.000 USD wert. Die wirtschaftliche Terminposition gewinnt 100.000 × (1,22 − 1,10) = 12.000 USD: zusammen 122.000 USD.',
   'Bei späteren 1,30 wäre der Eingang 130.000 USD wert. Die Terminposition verliert 8.000 USD: erneut 122.000 USD.',
   'Der Exporteur tauscht Wechselkurssicherheit gegen die Teilnahme an günstigen Kursänderungen. Der Forward ist keine Versicherung mit einseitig begrenztem Verlust.'
  ],'Menge und Zahlungstermin müssen zur Verpflichtung passen. Ein erwarteter, aber unsicherer Umsatz kann nach Absatzausfall eine überschüssige Terminposition hinterlassen.'),
  'Ein Importeur mit bekannter F-Zahlungsverpflichtung nutzt entsprechend einen Terminkauf. Bei einem ausländischen Wertpapier ist dessen zukünftiger Fremdwährungswert selbst unsicher: Die Absicherung nur des heutigen Nominalwerts deckt nicht automatisch Kursgewinn, Ausschüttung und Zeitpunkt vollständig ab.'
 ]),
 S('interpretation','12. Preisrelation, Prognose und Carry Trade trennen','b',[
  'Gedeckte Zinsparität vergleicht heute vertraglich festgelegte Wege. Eine Erwartung über den späteren Kassakurs ist dafür nicht erforderlich. Die ungedeckte Zinsparität ersetzt dagegen den festgelegten Terminkurs durch eine Erwartungsbeziehung und benötigt zusätzliche Annahmen über Risiko und Erwartungen.',
  'Ein ungedeckter Carry Trade finanziert typischerweise eine Anlage in einer höher verzinsten Währung durch eine niedrig verzinste Währung. Der Zinsvorteil ist beobachtbar, der spätere Umtauschwert unsicher. Eine ungünstige Wechselkursbewegung kann den Carry übersteigen. Wird dieselbe Position vollständig auf Termin gedeckt, wird der Zinsunterschied im reibungslosen Modell durch den Forward ausgeglichen.',
  T(['Prüfschritt','Kontrollfrage'],[
   ['Einheit','Welche Währung wird in welcher anderen bewertet?'],
   ['Handelsseite','Kaufe oder verkaufe ich die Basiswährung?'],
   ['Zeit','Stimmen Fälligkeit und Aufzinsungsfaktoren überein?'],
   ['Deckung','Ist der Endkurs festgelegt und die zu liefernde Menge gesichert?'],
   ['Kosten','Welche Spreads, Kredit-, Sicherheiten- und Ausführungskosten gelten?'],
   ['Interpretation','Beschreibe ich eine Preisrelation, eine Erwartung oder eine riskante Strategie?']
  ],'Diese Reihenfolge verbindet Rechenweg und wirtschaftliche Bedeutung.')
 ])
],related:[{unit:'fx-markets',section:'quotation',label:'Kursrichtung und Basiswährung festlegen'},{unit:'fx-markets',section:'changes',label:'Kehrwert und asymmetrische Prozentänderungen'},{unit:'tvm',section:'additivity',label:'Gleiche Zahlungsströme und Arbitragefreiheit'},{unit:'fx-markets',section:'instruments',label:'Währungsrendite und Deviseninstrumente'}],
 sources:[
 {title:'CFA Institute: Lernzielkatalog Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=7'},
 {title:'CFA Institute: Exchange Rate Calculations',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/exchange-rate-calculations'},
 {title:'Bank for International Settlements: Covered Interest Parity and the Cross-Currency Basis',url:'https://www.bis.org/publications/qr-201609/covered-interest-parity-lost-understanding-cross-currency-basis'}
 ],review:{status:'draft',date:'2026-09-24',note:'Eigene Einheiten-, Geld-Brief-, Zahlungsstrom- und Zinskonventionsbeispiele; gedeckte Preisrelation ausdrücklich von Kassakursprognose getrennt.'}};
