const {F,T,X,S,G}=require('../author.cjs');
module.exports={id:'cashflow-preparation',intro:[
 'Gewinn entsteht durch die Zuordnung von Erträgen und Aufwendungen; Liquidität entsteht durch Zahlungen. Wer eine Rechnung auf Ziel verkauft, kann bereits Gewinn ausweisen, obwohl noch kein Geld eingegangen ist. Die Cashflowrechnung erklärt diese Differenz und ordnet Zahlungen nach ihrem wirtschaftlichen Zweck.',
 'Wir stellen zuerst einen vollständigen eigenen Jahresfall nach US-GAAP auf. Anschließend rechnen wir ihn nach den durch IFRS 18 geänderten IAS-7-Vorgaben um. Alle Zahlen bleiben wirtschaftlich dieselben. So werden Methodenunterschiede, Klassifikationsunterschiede und tatsächliche Geldbewegungen getrennt.'
],sections:[
 S('scope','1. Was in die Zahlungsmittelüberleitung gehört','a d',[
  'Zahlungsmittel umfassen insbesondere Kassenbestand und Sichteinlagen. Zahlungsmitteläquivalente sind kurzfristige, hochliquide Anlagen mit verlässlich bestimmbarer Rückzahlung und nur unwesentlichem Wertänderungsrisiko. Eine kurze Restlaufzeit allein macht eine riskante Anlage nicht zum Zahlungsmitteläquivalent; im typischen Fall wird die kurze Laufzeit ab Erwerb beurteilt.',
  F('C_1=C_0+CFO+CFI+CFF+FX','Anfangsbestand plus Zahlungsströme und gesonderte Umrechnungseffekte ergeben den Endbestand des definierten Zahlungsmittelfonds.',[['C_0,C_1','Anfangs- und Endbestand von Zahlungsmitteln und Zahlungsmitteläquivalenten nach der verwendeten Abgrenzung.'],['CFO,CFI,CFF','Nettozahlungsstrom aus operativer, Investitions- und Finanzierungstätigkeit.'],['FX','Gesonderter Wechselkurseffekt auf den Zahlungsmittelfonds; hier nicht als Zahlung interpretiert.']]),
  'Tausch zwischen Bestandteilen desselben Zahlungsmittelfonds ist keine externe Geldquelle. Ein nicht zahlungswirksamer Erwerb, etwa ein neues Nutzungsrecht gegen Leasingverbindlichkeit, wird ebenfalls nicht als fiktiver Barzufluss und Barabfluss in die drei Kategorien eingebucht. Er gehört in die ergänzende Offenlegung.',
  'Unter IFRS kann ein jederzeit rückzahlbarer Banküberziehungskredit Teil der Zahlungsmittelsteuerung und damit unter engen Bedingungen Teil des Fonds sein. Unter US-GAAP werden Überziehungen im Allgemeinen als Finanzierung behandelt. Eingeschränkte Verfügbarkeit und die Überleitung eingeschränkter Zahlungsmittel sind nach dem jeweiligen Regelwerk gesondert zu prüfen.'
 ]),
 S('categories','2. Die Transaktion bestimmt die Kategorie','a d',[
  T(['Kategorie','Typischer Grundfall außerhalb spezieller Finanzgeschäfte','Was nicht folgt'],[
   ['Operating / CFO','Kundenzahlungen, Lieferanten, Löhne und laufende Geschäftsausgaben.','Jede Bewegung einer kurzfristigen Bilanzposition ist operativ.'],
   ['Investing / CFI','Zahlungen für oder aus Verkauf langfristiger Anlagen; Unternehmenskäufe nach passender Nettobetrachtung.','Jeder negative CFI bedeutet eine schlechte Investition.'],
   ['Financing / CFF','Aufnahme und Rückzahlung von Kreditkapital, Aktienemission und Rückkauf, nach Regelwerk Ausschüttungen.','Jeder Zufluss erhöht den Gewinn.']
  ],'Zinsen, Dividenden und bestimmte Spezialgeschäfte benötigen eine ausdrücklich genannte Regelbasis.'),
  'Ein Maschinenverkauf ist eine Investitionstransaktion. Die Differenz zwischen Verkaufserlös und Buchwert kann zugleich im Ergebnis erscheinen. Diese zwei Beschreibungen dürfen nicht dazu führen, dass der Erlös zusätzlich als operativer Cashflow gezählt wird.',
  'Bei Erwerb eines Unternehmens werden nicht nur Geld, sondern auch Forderungen, Vorräte und Schulden in den Konsolidierungskreis aufgenommen. Die Änderung dieser Bestände ist dann nicht vollständig auf laufende Geschäftszahlungen zurückzuführen. Die einfache Zwei-Bilanzen-Methode benötigt in solchen Fällen eine bereinigte Überleitung.'
 ]),
 S('case-data','3. Ein durchgängig abgestimmter Jahresfall','a b',[
  'Der fiktive Händler Lumen bilanziert in Geldeinheiten. Es gibt keine Umsatzsteuer, Wechselkurse, Ausfälle, Akquisitionen, latenten Steuern oder sonstigen nicht monetären Änderungen. Sämtliche Verkäufe und Warenkäufe laufen über Forderungen bzw. Lieferantenverbindlichkeiten. Die sonstigen operativen Aufwendungen betreffen hier ausschließlich zahlungsbezogene Personal- und Dienstleistungskosten.',
  T(['Bilanzposition','Anfang','Ende'],[
   ['Zahlungsmittel','100','170'],['Forderungen','80','110'],['Vorräte','90','100'],['Sachanlagen netto','300','315'],['Summe Aktiva','570','695'],
   ['Lieferantenverbindlichkeiten','70','85'],['Sonstige operative Verbindlichkeiten','20','25'],['Ertragsteuerverbindlichkeiten','10','15'],['Finanzschulden','200','220'],
   ['Eingezahltes Eigenkapital','200','200'],['Gewinnrücklagen','70','150'],['Summe Passiva und Eigenkapital','570','695']
  ],'Die Endbilanz wird später durch Gewinn-, Zahlungs- und Bestandsrechnungen kontrolliert.'),
  T(['Ergebnisposten','Betrag'],[
   ['Umsatz','1.000'],['Umsatzkosten','−600'],['Sonstige operative Aufwendungen ohne Abschreibung','−200'],['Abschreibung','−40'],['Gewinn aus Sachanlagenverkauf','+10'],
   ['Operatives Ergebnis einschließlich Verkaufsgewinn','170'],['Zinsaufwand','−20'],['Ergebnis vor Steuern','150'],['Steueraufwand','−45'],['Periodengewinn','105']
  ],'Der Verkaufserlös selbst beträgt 35; der abgegangene Sachanlagenbuchwert beträgt 25.'),
  'Weitere Transaktionen: 80 bar bezahlte Sachanlagenzugänge, 50 neue Kreditaufnahme, 30 Kredittilgung und 25 bar gezahlte Dividenden. Zinsaufwand 20 wurde vollständig bezahlt. In diesem Grundfall werden Zinsen nach US-GAAP operativ und Dividenden finanziell ausgewiesen.'
 ]),
 S('customer-cash','4. Kundeneinzahlungen aus der Forderungsbewegung','b c',[
  F('AR_1=AR_0+R-C_{cust}\\quad\\Longrightarrow\\quad C_{cust}=R-\\Delta AR','Umsatz erhöht im vereinfachten Kreditverkaufsmodell die Forderung. Zahlung vermindert sie. Umstellen dieser Bestandsbewegung erklärt das Vorzeichen.',[['AR_0,AR_1','Anfangs- und Endbestand der Kundenforderungen bei den genannten Vereinfachungen.'],['R','Periodenumsatz.'],['C_{cust}','Kundeneinzahlungen als positiver Betrag.'],['\\Delta AR=AR_1-AR_0','Forderungszunahme; positiv bedeutet noch nicht eingezogenen Umsatz.']]),
  X('30 des Umsatzes sind zusätzlich gebunden','Lumen hat Umsatz 1.000; Forderungen steigen von 80 auf 110.',[
   'Forderungszunahme: 110 − 80 = 30. Einzahlungen: 1.000 − 30 = 970.',
   'Kontrolle: 80 Anfangsforderungen + 1.000 neue Ansprüche − 970 Zahlung = 110 Endforderungen.',
   'Nicht jeder einzelne im Jahr vereinnahmte Euro stammt aus demselben Umsatzjahr. Die Rechnung enthält Zahlungen auf alte Forderungen und offene neue Forderungen zusammen.'
  ],'Ein Forderungsanstieg senkt die Einzahlungen relativ zum erfassten Umsatz. Er ist aber für sich noch kein Nachweis schlechter Zahlungsqualität.'),
  'Erhaltene Vorauszahlungen können vor Umsatz zu einem Zahlungszufluss führen. Ausfälle, Verkauf von Forderungen, Wechselkursumrechnung und Veränderungen des Konsolidierungskreises sind weitere Ursachen einer Forderungsänderung; dann reicht Umsatz minus bloße Bilanzdifferenz nicht.'
 ]),
 S('supplier-cash','5. Vom Warenverbrauch über Einkauf zur Lieferantenzahlung','b c',[
  F('Purch=COGS+\\Delta Inv,\\qquad C_{sup}=Purch-\\Delta AP','Zuerst wird Verbrauch in Einkäufe überführt. Danach werden Einkäufe um die noch nicht bezahlte Lieferantenfinanzierung korrigiert.',[['Purch','Warenkäufe der Periode.'],['COGS','Warenverbrauch bzw. Umsatzkosten; hier ohne enthaltene zusätzliche nicht zahlungswirksame Kosten.'],['\\Delta Inv','End- minus Anfangsvorrat, ohne andere Bestandsursachen.'],['AP,\\Delta AP','Lieferantenverbindlichkeiten für diese Einkäufe und deren Veränderung.'],['C_{sup}','Zahlungen an Lieferanten als positiver Betrag.']]),
  X('Mehr Einkauf als Verbrauch, aber weniger Zahlung als Einkauf','COGS 600; Vorräte steigen um 10; Lieferantenverbindlichkeiten steigen um 15.',[
   'Einkäufe: 600 + 10 = 610. Die zusätzlichen zehn Einheiten Wert wurden noch nicht verbraucht.',
   'Lieferantenzahlung: 610 − 15 = 595. Ein Teil der Einkäufe wurde durch zusätzliche offene Rechnungen finanziert.',
   'Bestandskontrollen: 90 + 610 − 600 = 100 Vorrat; 70 + 610 − 595 = 85 Lieferantenverbindlichkeiten.'
  ],'Lageraufbau bindet, ein Aufbau entsprechender Verbindlichkeiten entlastet im selben Vergleich zunächst Liquidität.'),
  'Sind Abschreibungen oder Wertminderungen in den Umsatzkosten enthalten, müssen diese für die Einkaufsüberleitung herausgelöst werden. Ebenso können Lieferantenverbindlichkeiten zu Anlagenkäufen gehören. Die Bilanzbezeichnung allein ersetzt keine Transaktionszuordnung.'
 ]),
 S('expense-cash','6. Sonstige Ausgaben und Steuern ableiten','b c',[
  F('C_{exp}=Exp+\\Delta Prepaid-\\Delta Accrued','Ausgaben übersteigen den Aufwand, wenn mehr vorausbezahlt wird, und unterschreiten ihn, wenn passende offene Verpflichtungen zunehmen. Nicht zahlungswirksame Aufwandsteile werden zuvor entfernt.',[['C_{exp}','Zahlung für die betrachtete Aufwandart als positiver Betrag.'],['Exp','Zahlungsbezogener Periodenaufwand nach Entfernung nicht monetärer Bestandteile.'],['\\Delta Prepaid','Veränderung zugehöriger aktiver Vorauszahlungen.'],['\\Delta Accrued','Veränderung zugehöriger aufgelaufener Verbindlichkeiten.']]),
  'Lumen erfasst 200 sonstigen operativen Aufwand; die zugehörigen Verbindlichkeiten steigen von 20 auf 25. Bei unveränderten Vorauszahlungen zahlt das Unternehmen 200 − 5 = 195.',
  F('C_{tax}=Tax_{current}-\\Delta TaxPayable','Bei fehlenden Steuervorauszahlungen und anderen Effekten wird laufender Steueraufwand um den Aufbau der Steuerverbindlichkeit vermindert. Gesamter Steueraufwand wäre bei latenten Steuern kein geeigneter Ausgangspunkt.',[['C_{tax}','Gezahlte Ertragsteuern als positiver Betrag.'],['Tax_{current}','Laufender Steueraufwand, hier identisch mit Gesamtsteueraufwand.'],['\\Delta TaxPayable','Veränderung der entsprechenden Steuerverbindlichkeit.']]),
  'Im Lehrfall sind es 45 − (15 − 10) = 40 Steuerzahlung. Der Zinsaufwand von 20 entspricht laut Angabe vollständig der Zahlung. In einem anderen Fall wären Zinsabgrenzungen, kapitalisierte Zinsen und nicht zahlungswirksame Aufzinsung gesondert zu untersuchen.'
 ]),
 S('direct','7. Die direkte Methode zeigt Ein- und Auszahlungen','b c',[
  T(['Operativer Zahlungsstrom nach US-GAAP-Grundfall','Betrag'],[
   ['Von Kunden erhalten','970'],['An Warenlieferanten gezahlt','−595'],['Für übrige operative Leistungen gezahlt','−195'],['Zinsen gezahlt','−20'],['Ertragsteuern gezahlt','−40'],['CFO','120']
  ],'Die direkte Methode zeigt die großen Zahlungsarten brutto.'),
  F('CFO=970-595-195-20-40=120','Der Saldo erklärt, wie viel Zahlungsmittel die operativen Zahlungsarten unter der gewählten Klassifikation beitragen.',[['CFO','Operativer Netto-Cashflow des Lehrfalls.']]),
  'Die direkte Methode verlangt nicht zwingend, dass jede Einzelzahlung aus dem Bankkonto neu aufgebaut wird. Sie kann bei hinreichenden Zusatzangaben auch aus Ergebnisposten und Bestandsüberleitungen rekonstruiert werden. Ihr Vorteil ist die Sicht auf Einziehungs- und Zahlungsvolumen, die ein einzelner CFO-Saldo verbirgt.'
 ]),
 S('indirect','8. Die indirekte Methode entfernt Abgrenzungen','a b c',[
  F('CFO=NI+NC-G-\\Delta AR-\\Delta Inv+\\Delta AP+\\Delta Accrued+\\Delta TaxPayable','Diese auf den Lehrfall begrenzte Gewinnüberleitung ergänzt nicht zahlungswirksame Aufwendungen, entfernt den Investitionsgewinn und korrigiert operative Bestandsbewegungen. Die Vorzeichen folgen den vorherigen Kontenüberleitungen.',[['NI','Periodengewinn einschließlich operativ ausgewiesener Zinsen und Steueraufwand.'],['NC','Nicht zahlungswirksame Aufwendungen; hier Abschreibung 40.'],['G','Gewinn aus Sachanlagenverkauf, dessen Erlös im CFI ausgewiesen wird.'],['\\Delta AR,\\Delta Inv','Veränderungen operativer Forderungen und Vorräte.'],['\\Delta AP,\\Delta Accrued,\\Delta TaxPayable','Veränderungen passender Lieferanten-, sonstiger operativer und Steuerverbindlichkeiten.'],['CFO','Operativer Cashflow nach der angegebenen Klassifikation.']]),
  T(['Überleitung','Beitrag','Laufender Saldo'],[
   ['Periodengewinn','105','105'],['Abschreibung zurücknehmen','+40','145'],['Verkaufsgewinn entfernen','−10','135'],
   ['Forderungsaufbau','−30','105'],['Lageraufbau','−10','95'],['Lieferantenfinanzierung','+15','110'],['Übrige operative Verbindlichkeiten','+5','115'],['Steuerverbindlichkeit','+5','120']
  ],'Die indirekte und direkte Methode müssen bei gleicher Kategorieabgrenzung denselben CFO liefern.'),
  'Abschreibung wird zurückaddiert, weil sie den Gewinn ohne Zahlung in dieser Periode gemindert hat. Das bedeutet nicht, dass die Anlage kostenlos war oder nie ersetzt werden muss. Die Anschaffungszahlung steht an anderer Stelle bzw. in einer anderen Periode.',
  'Ein Verlust aus Anlagenverkauf würde analog hinzugerechnet. Entscheidend ist, das enthaltene Ergebnis aus dem operativen Ausgangspunkt zu entfernen, während der gesamte Verkaufserlös einmal im CFI erscheint.'
 ]),
 S('investing-financing','9. Anlagen, Finanzierung und Eigenkapital separat überleiten','a b',[
  F('PPE_1=PPE_0+Capex-Dep-BV_{sold}','Die vereinfachte Nettobuchwertüberleitung trennt Zugänge, Werteverzehr und den Buchwert des abgegangenen Vermögens. Der Verkaufserlös ist kein Buchwertabgang.',[['PPE_0,PPE_1','Anfangs- und Endbuchwert der Sachanlagen.'],['Capex','Anlagenzugänge, im Fall vollständig bar bezahlt.'],['Dep','Periodenabschreibung.'],['BV_{sold}','Abgegangener Buchwert verkaufter Anlagen.']]),
  'Lumen: 300 + 80 − 40 − 25 = 315. Der Verkauf liefert 35 Geld und einen Gewinn von 35 − 25 = 10. CFI beträgt daher −80 + 35 = −45. Die Subtraktion nur des Verkaufsgewinns von Capex wäre falsch.',
  F('Debt_1=Debt_0+Borrow-Repay,\\qquad RE_1=RE_0+NI-Div','Ohne andere Ursachen erklären neue Kredite und Tilgungen den Schuldenbestand; Gewinn und Ausschüttung erklären die Gewinnrücklagen.',[['Debt_0,Debt_1','Anfangs- und Endbestand der Finanzschulden.'],['Borrow,Repay','Neue Kreditaufnahme und Tilgung als positive Beträge.'],['RE_0,RE_1','Anfangs- und Endgewinnrücklagen.'],['NI,Div','Periodengewinn und Ausschüttungen.']]),
  'Finanzschulden: 200 + 50 − 30 = 220. Gewinnrücklagen: 70 + 105 − 25 = 150. CFF: 50 − 30 − 25 = −5. Zinsen sind in diesem US-GAAP-Grundfall bereits im CFO und werden nicht noch einmal abgezogen.'
 ]),
 S('reconcile','10. Die gesamte Rechnung muss schließen','a b',[
  F('C_1=100+120-45-5=170','Die drei Cashflows erklären die Geldbestandsänderung um 70. Im Fall gibt es keinen zusätzlichen Umrechnungseffekt.',[['C_1','Endbestand der Zahlungsmittel.']]),
  G({id:'cash-bridge',title:'Drei Tätigkeitsbereiche erklären die Geldbestandsänderung',
   caption:'Eigene Überleitung des Lumen-Falls. Die Zwischensummen sind rechnerische Stufen, keine unterjährigen Bankkontostände.',
   reading:'Stufe 0 beginnt mit 100. Der CFO erhöht die Summe auf 220, CFI senkt sie auf 175 und CFF auf den Endbestand 170. Ein positiver CFO bedeutet deshalb nicht, dass der gesamte Betrag als zusätzlicher Endbestand erhalten bleibt.',
   plot:{x:[0,3],y:[0,260],xTicks:[0,1,2,3],xLabel:'Stufe: 0 Anfang, 1 CFO, 2 CFI, 3 CFF',yLabel:'Rechnerischer Geldbestand',series:[{name:'Anfang plus kumulierte Cashflows',points:[[0,100],[1,220],[2,175],[3,170]]}],marks:[
    {x:0,y:100,label:'Anfang 100',dx:8,dy:-12},{x:1,y:220,label:'+120 → 220',dx:8,dy:-12},{x:2,y:175,label:'−45 → 175',dx:-10,dy:24,anchor:'end'},{x:3,y:170,label:'−5 → 170',dx:-10,dy:-14,anchor:'end'}
   ]}}),
  'Endbilanzkontrolle: Aktiva 170 + 110 + 100 + 315 = 695. Verpflichtungen 85 + 25 + 15 + 220 = 345; Eigenkapital 200 + 150 = 350; zusammen ebenfalls 695. Gewinn, Anlagen, Schulden und Zahlungsmittel sind damit miteinander abgestimmt.',
  'Ein unerklärter Rest wird nicht als beliebiger „sonstiger Cashflow“ versteckt. Er löst eine Suche nach fehlenden Transaktionen, anderen Bestandsursachen, unpassenden Vorzeichen oder unterschiedlichem Konsolidierungskreis aus.'
 ]),
 S('standards','11. Regelwerk und IFRS-18-Anwendung ausdrücklich trennen','d',[
  'Die folgende Tabelle betrifft gewöhnliche Zins- und Dividendenzahlungen eines gewinnorientierten Unternehmens; kapitalisierte Zinsen, Sonderverträge und spezielle Finanzgeschäfte benötigen zusätzliche Prüfung. Historische IFRS-Wahlrechte werden von den Regeln nach Anwendung von IFRS 18 getrennt.',
  T(['Zahlungsart','US-GAAP-Grundfall','IFRS vor IFRS 18','IFRS nach IFRS 18: keine spezifizierte Hauptgeschäftstätigkeit'],[
   ['Gezahlte Zinsen','CFO','CFO oder CFF, konsistent','CFF'],
   ['Erhaltene Zinsen','CFO','CFO oder CFI, konsistent','CFI'],
   ['Erhaltene Dividenden','CFO','CFO oder CFI, konsistent','CFI'],
   ['Gezahlte Dividenden','CFF','CFO oder CFF, konsistent','CFF'],
   ['Ertragsteuern','Im Allgemeinen CFO','CFO, soweit nicht spezifisch CFI/CFF zuordenbar','CFO, soweit nicht spezifisch CFI/CFF zuordenbar']
  ],'CFO operativ, CFI Investition, CFF Finanzierung. Die konkrete Aufgabenannahme und der Anwendungsstand sind Teil der Lösung.'),
  'Für Unternehmen, deren Hauptgeschäft das Investieren in Vermögenswerte oder die Finanzierung von Kunden ist, enthält IAS 7 nach IFRS 18 besondere Regeln für Zinsen und erhaltene Dividenden. Sie beziehen die zugehörige Ergebnisklassifikation ein. Man darf die letzte Tabellenspalte deshalb nicht pauschal auf Banken oder Investmentunternehmen übertragen. Gezahlte Dividenden gehören auch dort zur Finanzierung.',
  'IFRS 18 gilt für Geschäftsjahre ab dem 1. Januar 2027, frühe Anwendung ist zulässig. Bei der indirekten Methode wird dann das nach IFRS 18 definierte operative Ergebnis als Ausgangspunkt verwendet. Eine analytische Überleitung vom Nettogewinn bleibt rechnerisch möglich, ist aber nicht mit dem vorgeschriebenen Ausgangspunkt gleichzusetzen.',
  'Direkte und indirekte Methode sind Methoden des operativen Ausweises. Die Wahl der Methode verschiebt nicht von sich aus eine Zinszahlung zwischen Tätigkeitsbereichen. Methode und Klassifikation sind zwei getrennte Entscheidungen.'
 ]),
 S('ifrs18-case','12. Denselben Fall nach IFRS 18 überleiten','a b c d',[
  'Lumen sei jetzt ein gewöhnliches Handelsunternehmen ohne die genannten spezifizierten Hauptgeschäftstätigkeiten und wende IFRS 18 an. Die Zinszahlung von 20 gehört dann zur Finanzierung. Der Sachanlagenverkauf betrifft im Betrieb genutzte Anlagen; sein Gewinn von 10 ist hier Bestandteil des operativen Ergebnisses 170.',
  F('CFO=OP+Dep-G-\\Delta AR-\\Delta Inv+\\Delta AP+\\Delta Accrued-C_{tax}','Vom operativen Ergebnis werden nicht zahlungswirksame und investitionsbezogene Bestandteile sowie operative Abgrenzungen übergeleitet. Steuerzahlungen werden direkt abgezogen, weil der Ausgangspunkt noch keinen Steueraufwand enthält.',[['OP','Operatives Ergebnis nach der Fallannahme, 170 einschließlich Verkaufsgewinn.'],['Dep,G','Abschreibung 40 und zu entfernender Verkaufsgewinn 10.'],['\\Delta AR,\\Delta Inv','Forderungs- und Vorratsaufbau 30 bzw. 10.'],['\\Delta AP,\\Delta Accrued','Aufbau von Lieferanten- und sonstigen operativen Verbindlichkeiten 15 bzw. 5.'],['C_{tax}','Operativ zugeordnete Steuerzahlung 40.'],['CFO','Operativer Cashflow nach Anwendung von IFRS 18 im Fall.']]),
  'Rechnung: 170 + 40 − 10 − 30 − 10 + 15 + 5 − 40 = 140. Direkte Kontrolle: 970 − 595 − 195 − 40 = 140. Die zusätzliche Rücknahme von Steueraufwand oder Zinsergebnis aus einem Nettogewinn wäre hier eine Doppelkorrektur.',
  T(['Cashflow','US-GAAP-Fall','IFRS-18-Fall','Ursache'],[
   ['CFO','120','140','20 Zinszahlung wird außerhalb CFO gezeigt.'],
   ['CFI','−45','−45','Anlagenzahlungen unverändert.'],
   ['CFF','−5','−25','Zinszahlung 20 zusätzlich zur Finanzierung.'],
   ['Gesamte Geldänderung','70','70','Keine wirtschaftliche Zahlung wurde verändert.']
  ],'Die Methoden liefern gleiche Gesamtliquidität trotz unterschiedlicher Kategorien.'),
  'Für eine Analyse können beide Abschlüsse auf dieselbe Klassifikation gebracht werden. Jede Anpassung muss in der Gegenkategorie gespiegelt werden. Ein höherer ausgewiesener CFO aufgrund einer Umgliederung ist keine zusätzliche Fähigkeit, Schulden und Dividenden insgesamt zu bedienen.'
 ]),
 S('noncash','13. Warum Bilanzdifferenzen allein manchmal scheitern','a b d',[
  X('Ein Forderungszugang ohne laufenden Umsatz','Ein Unternehmen meldet Umsatz 500. Forderungen steigen von 60 auf 100; davon stammen 25 aus einem neu konsolidierten Unternehmen. Weitere Effekte werden ausgeschlossen.',[
   'Unbereinigt würde 500 − (100 − 60) = 460 als Kundeneingang erscheinen.',
   'Die laufend entstandene Forderungszunahme beträgt aber nur 40 − 25 = 15. Kundeneingang aus dem erfassten laufenden Umsatz ist 500 − 15 = 485.',
   'Kontrolle: Anfang 60 + übernommene Forderungen 25 + Umsatz 500 − Einzahlungen 485 = Ende 100.'
  ],'Die Erwerbstransaktion und ihre übernommenen Bestände dürfen nicht als laufende Kapitalbindung aus eigener Geschäftstätigkeit missverstanden werden.'),
  'Ähnlich wirken Währungsumrechnung, Abschreibung von Forderungen, Umgliederung langfristiger Bestände oder eine nicht zahlungswirksame Schuldenübernahme. Eine Schuldenzunahme ist nur dann gleich Nettokreditaufnahme, wenn diese anderen Ursachen fehlen.',
  'Bei neuen Leasingverhältnissen entstehen zunächst Nutzungsrecht und Verpflichtung ohne Auszahlung des gesamten Ansatzbetrags. Spätere Raten sind echte Zahlungen und werden nach IFRS bzw. US-GAAP und Leasingart klassifiziert. Das bereits ausgearbeitete Leasingkapitel zeigt die Unterschiede am gleichen Vertrag.'
 ]),
 S('workflow','14. Aus einer indirekten Rechnung eine direkte machen','b c',[
  T(['Arbeitsschritt','Kontrolle'],[
   ['Ergebnisposten abgrenzen','Welche Aufwendungen enthalten nicht monetäre Bestandteile?'],
   ['Zugehörige Bilanzkonten zuordnen','Welche Forderung, Vorrat, Vorauszahlung oder Verbindlichkeit gehört tatsächlich dazu?'],
   ['Nicht operative Bestandsursachen entfernen','Akquisitionen, Umrechnung, Ausfälle, Umgliederungen und Sachtransaktionen.'],
   ['Bruttozahlungen herleiten','Umsatz zu Inkasso; Verbrauch zu Einkauf zu Lieferantenzahlung; Aufwand zu übriger Zahlung.'],
   ['Regelwerk anwenden','Zinsen, Dividenden, Steuern und Spezialfälle in passende Kategorien einordnen.'],
   ['Saldo und Gesamtbestand abstimmen','Direkter CFO = indirekter CFO bei gleicher Basis; Geldüberleitung und Bilanz müssen schließen.']
  ],'Ohne ausreichende Zusatzinformationen lässt sich eine exakte direkte Rechnung nicht aus jedem veröffentlichten Saldo rekonstruieren.'),
  'Die entscheidende Routine ist eine Bestandsidentität in Worten: Anfang plus Zugänge minus Abgänge gleich Ende. Erst danach wird nach dem gesuchten Geldbetrag umgestellt. Diese Vorgehensweise ist verlässlicher als eine auswendig gelernte Liste von Plus- und Minuszeichen.'
 ])
],related:[{unit:'analysis-framework',section:'statement-map',label:'Die Rechenwerke und ihren Zweck verbinden'},{unit:'income-statement',section:'revenue',label:'Warum Umsatz vor Zahlung entstehen kann'},{unit:'leases-compensation',section:'lease-comparison',label:'Leasing und Cashflowklassifikation'},{unit:'ratios',section:'activity',label:'Kapitalbindung über Umschlag und Tage erklären'}],
 sources:[
 {title:'CFA Institute: Lernziele Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=12'},
 {title:'CFA Institute: Analyzing Statements of Cash Flows I',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/analyzing-statements-of-cash-flows-i'},
 {title:'IFRS Foundation: IAS 7',url:'https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/'},
 {title:'IFRS Foundation: IFRS 18 Effects Analysis, insbesondere Seite 27',url:'https://www.ifrs.org/content/dam/ifrs/publications/amendments/english/2024/effect-analysis-ifrs18-april2024.pdf#page=27'},
 {title:'FASB: ASU 2016-15, Cashflowklassifikation und ASC-230-Auszüge',url:'https://storage.fasb.org/ASU%202016-15.pdf'},
 {title:'IASB: Leasing-Cashflows, Analyse bestehender Vorschriften; Diskussionspapier ist kein neuer Standard',url:'https://www.ifrs.org/content/dam/ifrs/meetings/2026/april/iasb/ap7-usefulness-cash-flows.pdf'}
 ],review:{status:'draft',date:'2026-09-24',note:'Vollständig abgestimmter eigener Drei-Rechenwerke-Fall; US-GAAP, bisherige IAS-7-Wahlrechte und IFRS-18-Anwendung ausdrücklich getrennt.'}};
