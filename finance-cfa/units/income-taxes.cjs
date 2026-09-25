const {F,T,X,S,G}=require('../author.cjs');
module.exports={id:'income-taxes',intro:[
 'Ein Unternehmen kann steuerlich früher Aufwand abziehen, als es denselben Vermögensverbrauch im Abschluss erfasst. Es zahlt dann heute weniger Steuer, besitzt dafür aber in späteren Perioden weniger steuerliches Abzugspotenzial. Latente Steuern machen diese zeitliche Verschiebung sichtbar. Sie sind weder automatisch heute fällige Steuern noch frei verfügbares Guthaben beim Finanzamt.',
 'Das Kapitel verbindet die Gewinnrechnung mit den Steuerbasen einzelner Vermögenswerte und Verpflichtungen. Eigene Mehrperiodenfälle zeigen die Entstehung, Umkehr und Neubewertung latenter Steuern. Alle Steuersätze und steuerlichen Behandlungsvorgaben in den Beispielen sind ausdrücklich angenommene Fallregeln, keine Empfehlung zur Steuerplanung in einem bestimmten Land.'
],sections:[
 S('vocabulary','1. Fünf Größen, die nicht gleichgesetzt werden dürfen','a',[
  T(['Größe','Bedeutung','Warum sie abweichen kann'],[
   ['Accounting Profit / Gewinn vor Steuern','Ergebnis vor Ertragsteueraufwand nach Rechnungslegungsregeln.','Andere Ansatz-, Bewertungs- und Abgrenzungsregeln als im Steuerrecht.'],
   ['Taxable Income / steuerpflichtiger Gewinn','Bemessungsgrundlage nach dem angenommenen Steuerrecht.','Nicht abzugsfähiger Aufwand, steuerfreie Erträge oder andere zeitliche Zuordnung.'],
   ['Current Tax Expense / laufender Steueraufwand','Laufende Steuerbelastung für die relevante Bemessungsgrundlage.','Noch nicht vollständig bezahlt; gegebenenfalls Anpassungen früherer Perioden.'],
   ['Current Tax Payable / laufende Steuerverbindlichkeit','Am Stichtag noch zu zahlender Betrag nach Anrechnung geleisteter Zahlungen.','Bestandsgröße statt gesamter Aufwand oder gesamter Jahreszahlung.'],
   ['Income Tax Expense / gesamter Steueraufwand','Laufende plus in der Gewinnrechnung erfasste latente Steuerwirkung.','Enthält zukünftige Steuerfolgen und Veränderungen ihrer Bewertung.']
  ],'Cash Taxes Paid sind zusätzlich die tatsächlich geleisteten Ertragsteuerzahlungen der Periode; sie werden gesondert abgegrenzt.'),
  F('CT=\\tau TI,\\qquad CashTax=CT+TP_0-TP_1','Die erste Formel ist ein vereinfachter einheitlicher proportionaler Steuerfall ohne Credits oder Sonderkomponenten. Die zweite gilt ohne Vorauszahlungs-, Erwerbs-, Umrechnungs- oder sonstige Änderungen.',[['CT','Laufender Steueraufwand der Periode.'],['\\tau,TI','Angenommener laufender Steuersatz und steuerpflichtiger Gewinn.'],['CashTax','Tatsächliche Steuerzahlung.'],['TP_0,TP_1','Laufende Steuerverbindlichkeit zu Beginn und Ende.']]),
  X('Eine kleine Schlussverbindlichkeit bedeutet keine kleine Jahressteuer','Laufender Steueraufwand 40; Anfangssteuerverbindlichkeit 8, Endverbindlichkeit 12. Sonst keine Änderungen.',[
   'Bezahlte Steuer: 40 + 8 − 12 = 36. Vier der laufenden Belastung erhöhen die noch offene Verpflichtung.',
   '40 ist Periodenaufwand, 36 ist Zahlung, 12 ist Endbestand. Alle drei können gleichzeitig korrekt sein.',
   'Latente Steuern sind in dieser einfachen Zahlungsüberleitung noch nicht enthalten und werden nicht wie eine bereits fällige Finanzamtsrechnung eingesetzt.'
  ],'Erst die Größen und ihren Zeitraum benennen, danach die Rechnung beginnen.')
 ]),
 S('temporary-permanent','2. Zeitliche Umkehr oder dauerhafter Unterschied?','a b',[
  'Eine temporäre Differenz entsteht zwischen Buchwert und Steuerbasis eines Vermögenswerts oder einer Verpflichtung. Ihre Rückgewinnung bzw. Erfüllung hat in künftigen Perioden steuerliche Wirkungen. Viele bekannte Fälle beginnen als zeitliche Abweichung in der Erfolgsrechnung, etwa unterschiedliche Abschreibung. Aber auch eine unmittelbar über OCI erfasste Neubewertung kann temporäre Differenzen erzeugen.',
  T(['Vorgang nach ausdrücklich angenommener Steuerregel','Art des Unterschieds','Logik'],[
   ['Steuerliche Abschreibung fällt früher an als Buchabschreibung','Temporär','Heute größerer Abzug, später entsprechend weniger verbleibender steuerlicher Abzug.'],
   ['Garantieaufwand wird heute bilanziert, steuerlich erst bei Zahlung abgezogen','Temporär','Der Aufwand wurde im Abschluss bereits berücksichtigt, die steuerliche Entlastung kommt später.'],
   ['Ertrag ist dauerhaft steuerfrei','Permanent im Ergebnisvergleich','Derselbe Ertrag wird nicht später nachgeholt besteuert.'],
   ['Eine Geldbuße ist dauerhaft nicht abzugsfähig','Permanent im Ergebnisvergleich','Auch spätere Zahlung erzeugt keinen steuerlichen Abzug.']
  ],'Permanent bedeutet hier nicht, dass der Geldbetrag nie bezahlt wird, sondern dass die Erfolgsdifferenz nicht steuerlich umkehrt.'),
  'Permanente Unterschiede beeinflussen häufig den effektiven Steuersatz, begründen aber für sich keinen latenten Steueranspruch auf eine spätere Umkehr. Eine vorgezogene steuerliche Abschreibung kann dagegen den heutigen Cash Tax Rate senken, ohne unter konstantem Satz und vollständiger Erfassung den langfristigen Steueraufwand auf den Buchgewinn zu vermindern.'
 ]),
 S('tax-base','3. Die Steuerbasis fragt nach den künftigen Steuerfolgen','a b',[
  'Der Buchwert gehört zum Finanzabschluss; die Steuerbasis beschreibt den zugehörigen steuerlichen Betrag. Bei einem Vermögenswert ist insbesondere entscheidend, welche Beträge bei der Rückgewinnung steuerlich abzugsfähig bleiben. Sind seine wirtschaftlichen Vorteile überhaupt nicht steuerpflichtig, ist die Steuerbasis nach IAS 12 nicht pauschal null.',
  T(['Posten','Buchwert','Steuerbasis','Warum'],[
   ['Maschine: noch 80 Buchwert, nur 60 künftige steuerliche Abschreibung','80','60','20 des Buchwerts können künftig nicht nochmals steuerlich abgezogen werden.'],
   ['Garantieverpflichtung: Aufwand 12 bereits erfasst; Zahlung später voll abzugsfähig','12','0','Die gesamte Erfüllung 12 schafft noch künftigen Steuerabzug.'],
   ['Bereits steuerlich erfasste Kundenvorauszahlung, Leistung 60 noch ausstehend','60','0','Der spätere Buchumsatz wird nicht erneut besteuert.'],
   ['Noch unbezahlte Geldbuße 20, dauerhaft nicht abzugsfähig','20','20','Die Erfüllung hat keinen künftigen Steuerabzug.']
  ],'Die Fälle verwenden jeweils die angegebenen steuerlichen Regeln und schließen Ansatz-Ausnahmen zunächst aus.'),
  F('TB_L=CA_L-D_{future}','Für gewöhnliche aufwandsbezogene Verpflichtungen ergibt sich die Steuerbasis aus Buchwert minus künftig bei Erfüllung abzugsfähigem Betrag. Für erhaltene Vorauszahlungen lautet die entsprechende IAS-12-Frage stattdessen, welcher Teil des zukünftigen Erlöses nicht mehr besteuert wird.',[['TB_L,CA_L','Steuerbasis und Buchwert der betrachteten Verpflichtung.'],['D_{future}','Bei ihrer Erfüllung künftig steuerlich abzugsfähiger Betrag.']]),
  'Die Steuerbasis wird aus der geltenden Behandlung ermittelt, nicht aus dem Wunsch, eine bestimmte Steuerposition zu erhalten. Deshalb ist es sicherer, zunächst die spätere Rückgewinnung oder Zahlung zu beschreiben und erst dann das Vorzeichen der Differenz zuzuordnen.'
 ]),
 S('signs','4. Das Vorzeichen hängt von Aktivum oder Verpflichtung ab','b',[
  T(['Grundfall bei einheitlichem Satz und ohne Ausnahmen','Künftige Wirkung','Latente Position'],[
   ['Aktivum: Buchwert größer als Steuerbasis','Mehr Rückgewinnung als noch verfügbarer steuerlicher Abzug.','Steuerpflichtige Differenz → DTL.'],
   ['Aktivum: Buchwert kleiner als Steuerbasis','Mehr künftiger Steuerabzug als noch im Buchwert enthaltener Verbrauch.','Abzugsfähige Differenz → DTA, soweit nutzbar.'],
   ['Verpflichtung: Buchwert größer als Steuerbasis','Bei Erfüllung entsteht zusätzlicher Steuerabzug bzw. bereits besteuerter Erlös wird nicht erneut besteuert.','Abzugsfähige Differenz → DTA, soweit nutzbar.'],
   ['Verpflichtung: Buchwert kleiner als Steuerbasis','Die spätere Erfüllung erzeugt unter dieser Abgrenzung eine steuerpflichtige Differenz.','DTL im entsprechenden Grundfall.']
  ],'Die verbreitete Merkhilfe „Buchwert höher bedeutet immer DTL“ ist für Verpflichtungen falsch.'),
  F('DTL=\\tau_{rev}\\,TD_{tax},\\qquad DTA_{gross}=\\tau_{rev}\\,TD_{ded}','Positive steuerpflichtige und abzugsfähige temporäre Differenzen werden mit dem für ihre Umkehr passenden anzuwendenden Steuersatz bewertet. Der ansetzbare DTA kann wegen fehlender Nutzbarkeit kleiner sein.',[['DTL','Latente Steuerverbindlichkeit.'],['DTA_{gross}','Rechnerischer latenter Steueranspruch vor nötiger Nutzbarkeitsbegrenzung.'],['TD_{tax},TD_{ded}','Positive Beträge der steuerpflichtigen bzw. abzugsfähigen temporären Differenzen.'],['\\tau_{rev}','Nach dem Regelwerk anzuwendender Steuersatz für die erwartete Umkehr.']]),
  'Im Maschinenfall mit 80 Buchwert und 60 Steuerbasis ergibt sich bei 25 % DTL 5. Im Garantiefall mit Verpflichtung 12 und Steuerbasis null entsteht rechnerisch DTA 3. Gleiche Richtung Buchwert minus Steuerbasis führt hier wegen des unterschiedlichen Postentyps zu entgegengesetzten Steuerpositionen.'
 ]),
 S('expense-bridge','5. Steueraufwand mit den Bestandsänderungen abstimmen','a b',[
  F('TE=CT+\\Delta DTL-\\Delta DTA_{net}','Diese Brücke gilt, soweit sämtliche angesetzten Veränderungen der latenten Steuern in der Gewinnrechnung derselben Periode erfasst werden. Erwerbe, OCI, direkte Eigenkapitalbuchungen, Währungsumrechnung und andere Fremdeffekte müssen zuvor getrennt werden.',[['TE','Ertragsteueraufwand der Gewinnrechnung.'],['CT','Dort enthaltener laufender Steueraufwand.'],['\\Delta DTL','GuV-wirksame Erhöhung der latenten Steuerverbindlichkeit; Rückgang negativ.'],['\\Delta DTA_{net}','GuV-wirksame Veränderung des tatsächlich angesetzten latenten Steueranspruchs nach Nutzbarkeitskorrektur.']]),
  'Ein DTL-Aufbau ergänzt heutigen niedrigen laufenden Steueraufwand um eine künftige Belastung. Ein DTA-Aufbau nimmt einen Teil heutigen hohen laufenden Aufwands zurück, weil eine künftige Entlastung erfasst wird. Bei Umkehr wirken die Vorzeichen entsprechend anders.',
  X('Bestandsaufbau ist nicht derselbe Betrag wie Endbestand','Laufender Steueraufwand 30. GuV-bezogene DTL steigt von 8 auf 13; nutzbarer DTA steigt von 4 auf 6. Keine anderen Veränderungen.',[
   'Latenter Nettoaufwand: (13 − 8) − (6 − 4) = 3.',
   'Gesamter Steueraufwand: 30 + 3 = 33.',
   '13 und 6 sind Endbestände; sie werden nicht vollständig zum laufenden Aufwand addiert oder davon abgezogen. Die Vorperiode hat einen Teil ihrer Wirkungen bereits erfasst.'
  ],'Wie bei Forderungen und Vorräten verbindet eine Bestandsüberleitung die beiden Perioden.')
 ]),
 S('depreciation','6. Beschleunigte Steuerabschreibung über die gesamte Lebensdauer','a b c',[
  'Eine Anlage kostet 120 und wird im Abschluss drei Jahre linear mit je 40 abgeschrieben; Restwert null. Steuerlich sind in den drei Jahren 60, 40 und 20 abziehbar. Das Ergebnis vor dieser Abschreibung und vor Steuer beträgt jährlich 100. Steuersatz konstant 25 %, laufende Steuern werden sofort bezahlt. Sonst keine Unterschiede.',
  T(['Größe','Jahr 1','Jahr 2','Jahr 3','Summe bzw. Schluss'],[
   ['Buchabschreibung','40','40','40','120'],
   ['Steuerliche Abschreibung','60','40','20','120'],
   ['Buchgewinn vor Steuer','60','60','60','180'],
   ['Steuerpflichtiger Gewinn','40','60','80','180'],
   ['Laufender Steueraufwand = Zahlung','10','15','20','45'],
   ['Buchwert am Jahresende','80','40','0','0'],
   ['Steuerbasis am Jahresende','60','20','0','0'],
   ['DTL am Jahresende','5','5','0','0'],
   ['DTL-Veränderung','+5','0','−5','0'],
   ['Gesamter Steueraufwand','15','15','15','45'],
   ['Nettogewinn','45','45','45','135']
  ],'Die Steuern werden in der Zeit verschoben, aber die gesamten Abzüge und Steuern sind unter den Annahmen gleich.'),
  F('DTL_1=(80-60)\\cdot0{,}25=5,\\qquad TE_1=10+5=15','Die im ersten Jahr zusätzlich abgezogenen 20 fehlen als künftiger Steuerabzug. Die DTL erfasst ihre Steuerwirkung.',[['DTL_1','Latente Steuerverbindlichkeit am Ende von Jahr 1.'],['TE_1','Gesamter Steueraufwand von Jahr 1.']]),
  'Jahr 2 hat dieselbe Buch- und Steuerabschreibung 40, aber die frühere Differenz bleibt bestehen. Deshalb bleibt DTL bei 5; gleiche laufende Abschreibung bedeutet nicht automatisch Steuerbasis gleich Buchwert. Erst Jahr 3 holt die steuerliche Abschreibung mit nur 20 gegenüber 40 die frühere Vorziehung auf.',
  G({id:'tax-timing',title:'Gleicher Steueraufwand, andere Zahlungszeitpunkte',
   caption:'Eigene Anlage mit Kosten 120, Buchabschreibung 40/40/40, Steuerabschreibung 60/40/20 und konstant 25 % Steuersatz. Es gibt keine Zahlungsrückstände; laufender Aufwand entspricht hier Cash Taxes.',
   reading:'Im ersten Jahr werden 10 gezahlt und weitere 5 als latente Belastung erfasst. Im letzten Jahr werden 20 gezahlt, aber 5 durch Abbau der DTL im Steueraufwand ausgeglichen. Über alle drei Jahre betragen beide Reihen insgesamt 45.',
   plot:{x:[1,3],y:[0,24],xTicks:[1,2,3],xLabel:'Nutzungsjahr',yLabel:'Steuerbetrag pro Jahr',series:[
    {name:'Laufende Steuer und Zahlung',points:[[1,10],[2,15],[3,20]]},
    {name:'Gesamter Steueraufwand',dash:'5 4',points:[[1,15],[2,15],[3,15]]}
   ],marks:[{x:1,y:10,label:'DTL-Aufbau +5',dx:10,dy:24},{x:3,y:20,label:'DTL-Abbau −5',dx:-10,dy:-14,anchor:'end'}]}}),
  'Der zeitliche Finanzierungsvorteil kann wirtschaftlich wertvoll sein. Eine DTL misst diesen Vorteil jedoch im Abschluss nicht als abgezinsten Kapitalwert; sie zeigt nach den Steuerbilanzierungsregeln den entsprechenden künftigen Steuerbetrag.'
 ]),
 S('warranty','7. Früher Buchaufwand, späterer Steuerabzug erzeugt einen DTA','a b',[
  X('Garantieverpflichtung in zwei Perioden','In Jahr 1 beträgt der Buchgewinn vor Steuern nach Garantieaufwand 100. Darin sind 12 Garantieaufwand enthalten, die erst bei Zahlung in Jahr 2 steuerlich abzugsfähig sind. Auch Jahr 2 hat Buchgewinn vor Steuer 100; dort ist kein neuer Garantieaufwand enthalten. Satz 25 %, vollständige DTA-Nutzbarkeit, Steuern jeweils sofort bezahlt.',[
   'Jahr 1: Steuergewinn 100 + 12 = 112, laufende Steuer 28. Die Verpflichtung 12 besitzt Steuerbasis null; DTA 3 entsteht. Steueraufwand 28 − 3 = 25.',
   'Jahr 2: Zahlung 12 tilgt die Verpflichtung und schafft den jetzt erlaubten Steuerabzug. Steuergewinn 100 − 12 = 88, laufende Steuer 22.',
   'Der DTA fällt in Jahr 2 von 3 auf null. Steueraufwand: 22 − (0 − 3) = 25.',
   'Über beide Jahre werden 50 Steuern gezahlt und 50 als Aufwand erfasst. Die latente Aktivposition bildet die zunächst noch ausstehende Entlastung ab, nicht einen zusätzlichen Bonus.'
  ],'Beim DTA-Abbau steigt der Aufwand relativ zur laufenden Steuerzahlung; das negative Änderungszeichen muss erhalten bleiben.'),
  'Bei einer dauerhaft nicht abzugsfähigen Geldbuße 12 gäbe es diesen späteren Abzug nicht. Ihre noch offene Verpflichtung hätte im IAS-12-Grundfall dieselbe Steuerbasis wie ihr Buchwert; allein die spätere Auszahlung erzeugt keinen DTA.'
 ]),
 S('loss-carryforward','8. Ein Verlustvortrag benötigt nutzbare künftige Steuergewinne','b d',[
  'Ein steuerlicher Verlustvortrag kann nach den angenommenen Regeln zukünftige steuerpflichtige Gewinne verringern. Der ökonomische Nutzen hängt von Verfallsdatum, Verrechnungsgrenzen, Steuergebiet, Einkunftsart und tatsächlich verfügbaren Gewinnen ab. Ein hoher nominaler Verlust ist daher nicht automatisch ein ebenso belastbarer Vermögenswert.',
  F('DTA_{potential}=L\\tau,\\qquad DTA_{usable}=\\min(L,TI_{usable})\\tau','Die vereinfachte Fallformel unterstellt einen einheitlichen Satz und vollständige Verrechnung ohne weitere jährliche Grenzen innerhalb des zulässigen Zeitraums. Die Gewinnprognose muss die maßgeblichen Ansatzvoraussetzungen erfüllen.',[['L','Verfügbarer steuerlicher Verlustvortrag.'],['TI_{usable}','Belastbar erwarteter, tatsächlich passend verrechenbarer steuerpflichtiger Gewinn.'],['\\tau','Anwendbarer Steuersatz.'],['DTA_{potential},DTA_{usable}','Rechnerischer Gesamtanspruch und unter den Annahmen nutzbarer Anteil.']]),
  X('Nominaler Verlust 200, belastbarer DTA nur 30','Ein Unternehmen kann Verlustvorträge 200 vor ihrem Verfall nutzen. Steuersatz 25 %. Unter den gegebenen Grenzen und belastbaren Prognosen sind nur 120 künftiger steuerlicher Gewinn verfügbar; keine anderen Nutzungsquellen.',[
   'Rechnerischer voller Steuereffekt: 200 × 25 % = 50.',
   'Nutzbarer Effekt: 120 × 25 % = 30. Der verbleibende Teil 20 ist unter den Annahmen nicht als werthaltiger Nettoanspruch darstellbar.',
   'Unter US-GAAP kann dies als Brutto-DTA 50 minus Valuation Allowance 20 erscheinen. Unter IFRS wird der DTA nur im durch die Ansatzvoraussetzungen getragenen Umfang angesetzt.',
   'Die Beurteilung darf nicht bloß denselben gewünschten Gewinnplan übernehmen, dessen Plausibilität der Analyst gerade untersuchen soll.'
  ],'Ein DTA ist eine von künftiger Steuerentlastung abhängige Größe; fehlende Zahlungsmittel werden durch seinen Ansatz nicht sofort ersetzt.')
 ]),
 S('valuation-allowance','9. Nutzbarkeit prüfen und Ergebniswirkung einer Änderung erkennen','b d',[
  'US-GAAP reduziert den rechnerischen DTA durch eine Valuation Allowance, soweit es nach dem maßgeblichen Evidenzmaßstab mehr wahrscheinlich als nicht ist, dass die Entlastung nicht realisiert wird. IFRS verlangt die entsprechende Wahrscheinlichkeit ausreichender künftiger steuerpflichtiger Gewinne für den Ansatz. Die Darstellung unterscheidet sich; beide Systeme verlangen eine Begründung der Nutzbarkeit.',
  F('DTA_{net}=DTA_{gross}-VA','Die Wertberichtigung korrigiert die Nutzbarkeit des rechnerischen Anspruchs, nicht die Höhe des nominalen steuerlichen Verlustvortrags selbst.',[['DTA_{net},DTA_{gross}','Angesetzter Netto-DTA und rechnerischer Brutto-DTA.'],['VA','Valuation Allowance als positiver Abzugsposten im US-Modell.']]),
  T(['Evidenzfrage','Warum sie wichtig ist'],[
   ['Welche steuerpflichtigen Differenzen kehren passend um?','Vorhandene DTL können eine Nutzungsquelle bilden, aber Zeitpunkt, Art und Steuergebiet müssen passen.'],
   ['Gibt es überzeugende künftige steuerpflichtige Gewinne?','Vergangene Verluste und belastbare Aufträge sind unterschiedlich starke Hinweise.'],
   ['Sind rechtlich und wirtschaftlich umsetzbare Steuerplanungen verfügbar?','Ein theoretisch denkbarer Abzug ist keine automatisch verfügbare Nutzung.'],
   ['Wann und in welchem Umfang verfallen Ansprüche?','Ein Gewinn nach Verfall hilft dem heutigen Verlustvortrag nicht.']
  ],'Positive und negative Evidenz werden gemeinsam geprüft; eine einzelne optimistische Managementaussage genügt nicht.'),
  X('Besserer Gewinn ohne heutige Steuererstattung','Im Verlustvortragsfall bleibt der Brutto-DTA 50. Neue belastbare Informationen erhöhen den rechtzeitig nutzbaren Gewinn von 120 auf 180; alle anderen Annahmen bleiben gleich.',[
   'Nutzbarer Netto-DTA steigt von 30 auf 45. Die US-Valuation-Allowance fällt von 20 auf 5.',
   'Bei vollständig GuV-wirksamer Änderung sinkt der Steueraufwand um 15 und der Nettogewinn steigt um 15.',
   'Heute fließt dadurch kein Geld vom Finanzamt. Die Buchung erkennt eine stärker belegte zukünftige Entlastung an.',
   'Für eine nachhaltige Gewinnprognose ist die einmalige Neubewertung von der laufenden operativen Leistung zu trennen.'
  ],'Wertberichtigungsauflösungen können den effektiven Steuersatz stark verändern, ohne laufende Produktmargen zu verbessern.')
 ]),
 S('tax-rate-change','10. Der maßgebliche Satz gehört zur künftigen Umkehr','b c d',[
  'IFRS verwendet für die erwartete Umkehr die nach dem Regelwerk am Stichtag beschlossenen oder materiell beschlossenen Steuersätze. US-GAAP knüpft grundsätzlich an enacted law an. Ein unverbindlicher politischer Vorschlag ist nicht automatisch eine neue Bewertungsbasis. Bei mehreren Umkehrzeitpunkten kann eine differenzierte Zuordnung nötig sein.',
  X('Satzanstieg kann Aufwand und Ertrag gleichzeitig erzeugen','Steuerpflichtige temporäre Differenz 80 und vollständig nutzbare abzugsfähige Differenz 60. Bisheriger Satz 25 %, neu maßgeblicher Satz für alle Umkehrungen 30 %. Beide ursprünglichen Positionen betreffen im Fall die GuV.',[
   'DTL steigt von 80 × 25 % = 20 auf 80 × 30 % = 24: zusätzlicher Aufwand 4.',
   'DTA steigt von 60 × 25 % = 15 auf 60 × 30 % = 18: Entlastung 3.',
   'Netto erhöht sich der Steueraufwand um 4 − 3 = 1, obwohl sich keine Buchwert-Steuerbasis-Differenz und keine heutige Steuerzahlung geändert hat.',
   'Bei einem DTA ohne hinreichende Nutzbarkeit wäre die positive Bruttoneubewertung nicht automatisch vollständig als Nettovermögen und Gewinn verfügbar.'
  ],'Nicht nur Differenzen, sondern auch anzuwendender Satz und Ansatzfähigkeit erklären Bestandsänderungen.'),
  F('\\Delta DTL=TD_{tax}(\\tau_{new}-\\tau_{old}),\\qquad\\Delta DTA=TD_{ded}(\\tau_{new}-\\tau_{old})','Die Formeln isolieren die Satzänderung bei konstanten Differenzen und unveränderter vollständiger Nutzbarkeit.',[['TD_{tax},TD_{ded}','Unveränderte positive steuerpflichtige bzw. abzugsfähige temporäre Differenz.'],['\\tau_{new},\\tau_{old}','Neu und bisher anzuwendender Umkehrsteuersatz.'],['\\Delta DTL,\\Delta DTA','Allein dadurch verursachte Änderung der jeweiligen latenten Position.']]),
  'Latente Steuerbestände werden im gewöhnlichen Rechnungslegungsmodell nicht diskontiert. Eine separate ökonomische Analyse kann Zahlungszeitpunkte berücksichtigen, muss aber klar von der bilanziellen Bewertung unterschieden werden.'
 ]),
 S('tax-rates','11. Gesetzlicher, effektiver und zahlungsbezogener Satz beantworten verschiedene Fragen','c',[
  F('ETR=TE/PBT,\\qquad CTR=CashTax/PBT','Die effektive Quote verwendet den gesamten Ertragsteueraufwand. Die hier ausdrücklich definierte Cash Tax Rate setzt die Zahlung ins Verhältnis zum selben Buchgewinn vor Steuern. Andere Veröffentlichungen können andere Nenner verwenden.',[['ETR','Effective Tax Rate bzw. effektiver Steuersatz.'],['CTR','Cash Tax Rate nach der angegebenen Definition.'],['TE','Ertragsteueraufwand in der Gewinnrechnung.'],['CashTax','Tatsächlich gezahlte Ertragsteuer.'],['PBT','Vergleichbarer positiver Buchgewinn vor Ertragsteuern.']]),
  T(['Satz','Interpretation','Nicht automatisch'],[
   ['Statutory Tax Rate','Gesetzlicher Bezugssatz der betrachteten Jurisdiktion.','Exakter Konzernsteuersatz bei unterschiedlichen Ländern und permanenten Effekten.'],
   ['Effective Tax Rate','Gesamter erfasster Steueraufwand relativ zum Buchgewinn.','Aktuell tatsächlich bezahlter Anteil.'],
   ['Cash Tax Rate','Gezahlte Steuer relativ zum ausdrücklich festgelegten Gewinnmaßstab.','Nachhaltiger zukünftiger Steueraufwand.']
  ],'Vor einer Interpretation werden Zähler, Nenner, Zeitraum und Berichtskreis abgestimmt.'),
  'Im Abschreibungsfall beträgt die effektive Quote in jedem Jahr 15/60 = 25 %. Die Cashquote ist dagegen 10/60 ≈ 16,6667 %, dann 25 % und schließlich 20/60 ≈ 33,3333 %. Eine einzelne niedrige Cashquote würde die gesamte Steuerbelastung unterschätzen.',
  X('Gewinnverteilung zwischen Ländern verändert den Konzernsatz','In Land A entstehen 100 Vorsteuergewinn bei 30 %; in Land B 300 bei 10 %. Keine weiteren Effekte.',[
   'Steueraufwand: 100 × 30 % + 300 × 10 % = 60. Gesamtgewinn: 400.',
   'Effektiver Konzernsatz: 60/400 = 15 %. Das ungewichtete Mittel der beiden Sätze wäre 20 % und würde die Gewinnverteilung ignorieren.',
   'Eine Verlagerung der Gewinnanteile kann die Quote verändern, obwohl die gesetzlichen Sätze beider Länder unverändert bleiben.'
  ],'Bei Verlusten, sehr kleinem PBT oder großen Einmaleffekten werden Quoten instabil; dann sind Beträge und Ursachen vorrangig zu erläutern.')
 ]),
 S('reconciliation','12. Eine vollständige Steuerüberleitung mit permanenten und temporären Effekten','a c d',[
  'Eigener Einperiodenfall: Buchgewinn vor Steuer 200 enthält steuerfreien Ertrag 20 und dauerhaft nicht abzugsfähigen Aufwand 10. Steuerliche Abschreibung übersteigt Buchabschreibung um 30. Einheitlicher Satz 25 %, kein DTA, keine sonstigen Änderungen; die zusätzliche DTL entsteht vollständig in der GuV. Laufende Steuerverbindlichkeit steigt von 8 auf 12.',
  T(['Schritt','Rechnung','Betrag'],[
   ['Steuerpflichtiger Gewinn','200 − 20 + 10 − 30','160'],
   ['Laufender Steueraufwand','160 × 25 %','40'],
   ['Zusätzliche DTL','30 × 25 %','7,50'],
   ['Gesamter Steueraufwand','40 + 7,50','47,50'],
   ['Tatsächliche Steuerzahlung','40 + 8 − 12','36'],
   ['Effektiver Steuersatz','47,50 / 200','23,75 %'],
   ['Cash Tax Rate nach Kapiteldefinition','36 / 200','18,00 %']
  ],'Steueraufwand, Steuerzahlung und gesetzlicher Referenzbetrag sind vollständig getrennt.'),
  F('TE=\\tau PBT-\\tau Exempt+\\tau NonDed','In diesem Fall verschwinden die temporären Abschreibungsunterschiede aus der Überleitung zum gesamten Aufwand, weil ihre Steuerwirkung vollständig latent erfasst ist. Die permanenten Unterschiede bleiben.',[['TE','Gesamter Steueraufwand im Fall.'],['\\tau,PBT','Einheitlicher Satz und Buchgewinn vor Steuern.'],['Exempt','Im Buchgewinn enthaltener dauerhaft steuerfreier Ertrag.'],['NonDed','Im Buchgewinn abgezogener dauerhaft nicht steuerlich abzugsfähiger Aufwand.']]),
  'Gegenrechnung: 200 × 25 % − 20 × 25 % + 10 × 25 % = 47,50. Als Prozentpunkte: 25,00 % − 2,50 % + 1,25 % = 23,75 %. Die niedrigere Cashquote 18 % enthält zusätzlich zeitliche Effekte der Abschreibung und der noch offenen Steuerzahlung.',
  'Eine Steuerüberleitung kann darüber hinaus Länder- und Gemeindesteuern, Steuergutschriften, Vorperiodenanpassungen, Nutzbarkeitsänderungen, Satzänderungen oder unsichere Steuerpositionen enthalten. Jede Zeile wird auf Wiederholbarkeit geprüft, statt die letzte Gesamtquote automatisch fortzuschreiben.'
 ]),
 S('outside-profit','13. Nicht jede latente Bestandsänderung gehört in den Steueraufwand','b d',[
  X('Neubewertung über OCI','Eine IFRS-Sachanlage wird ohne frühere gegenläufige Effekte um 40 über OCI aufgewertet. Ihre Steuerbasis bleibt unverändert. Ein DTL-Ansatz ist erforderlich; Satz 30 %, sonst keine Änderungen.',[
   'Neue steuerpflichtige Differenz 40 erzeugt DTL 12.',
   'Der zugehörige Steuereffekt wird hier ebenfalls OCI zugeordnet. Netto steigen OCI und Eigenkapital um 28.',
   'Würde man den gesamten DTL-Anstieg 12 in CT + ΔDTL − ΔDTA einsetzen, ohne die OCI-Herkunft zu entfernen, würde man den GuV-Steueraufwand fälschlich erhöhen.'
  ],'Der Bestandsvergleich benötigt eine Bewegungsrechnung nach Entstehungsursache.'),
  X('Erwerbsbewertung verändert identifizierbares Nettovermögen','Bei einem Unternehmenszusammenschluss wird ein identifizierbarer Vermögenswert mit Fair Value 150 und Steuerbasis null erfasst. Im Fall ist die zugehörige DTL bei 30 % anzusetzen; keine weiteren Wechselwirkungen.',[
   'Der Vermögenswert schafft eine DTL von 45. Sein Nettoeffekt auf das identifizierbare Nettovermögen beträgt deshalb 105.',
   'Bei sonst gleicher Gegenleistung ist der Erwerbsrestbetrag Goodwill um 45 höher als in einer Rechnung, die den Steuerposten auslässt.',
   'Die ursprüngliche Erfassung ist Teil der Erwerbsrechnung und nicht schlicht ein zusätzlicher laufender Steueraufwand des Erwerbsjahres.'
  ],'Steuern, Kaufpreiszuordnung und Goodwill sind miteinander verbunden. Die besonderen Ansatz-Ausnahmen für Goodwill selbst bleiben separat zu prüfen.'),
  'Auch Währungsumrechnung, direkte Eigenkapitaltransaktionen und Änderungen des Konsolidierungskreises können DTA oder DTL verändern. Ein Analyst rekonstruiert diese Beiträge, bevor er aus Netto-Endbeständen einen Steueraufwand ableitet.'
 ]),
 S('analytical-treatment','14. DTL und DTA wirtschaftlich beurteilen','b d',[
  'Eine DTL ist bilanziell eine latente Verpflichtung, aber nicht automatisch ein verzinslicher Kredit mit festem Fälligkeitstag. Für Liquidität und Bewertung zählt, wann ihre Differenzen voraussichtlich umkehren. Ein wachsendes Unternehmen kann laufend neue steuerliche Vorziehungen erzeugen, während alte gleichzeitig auslaufen.',
  X('Ein stabiler Bestand kann viele tatsächliche Umkehrungen verbergen','Der gesamte DTL-Bestand beträgt anfangs und am Ende 50. Während des Jahres kehren alte Unterschiede mit Steuerwirkung 12 um; neue Unterschiede erzeugen gleichzeitig DTL 12.',[
   'Nettoänderung ist null. Daraus folgt nicht, dass keine alten Steuerentlastungen auslaufen.',
   'Für eine Cashflowprognose werden alte Umkehrungen und neue Investitionspläne getrennt modelliert.',
   'Ein Investitionsstopp könnte neue DTL-Zugänge vermindern, während alte Umkehrungen weiterlaufen. Die bisher stabile Bilanzgröße könnte dann sinken und tatsächliche Cashsteuern könnten relativ zum Aufwand steigen.'
  ],'Eine dauerhafte Nettohöhe ist keine Garantie, dass wirtschaftlich nie gezahlt wird.'),
  'Eine analytische Kennzahl kann bestimmte Steuerposten gesondert behandeln, muss dies begründen und konsistent mit Cashflowannahmen tun. Eine DTL pauschal als Eigenkapital zu behandeln oder stets vollständig zu verzinslichen Schulden zu addieren, verdeckt die unterschiedlichen Entstehungs- und Umkehrprofile.',
  'Bei einem DTA prüft man umgekehrt, ob sein Nutzen bereits in künftigen Cashsteuern enthalten ist. Wer erwartete Steuerersparnis in der Cashflowprognose berücksichtigt und anschließend den vollen DTA nochmals als zusätzliches Vermögen addiert, kann denselben Vorteil doppelt bewerten.'
 ]),
 S('exceptions','15. Die Grundformel ersetzt keine Prüfung von Ausnahmen','b d',[
  'Die Beziehung Differenz mal Steuersatz ist eine Bewertungsrechnung nach der Ansatzprüfung. IAS 12 besitzt begrenzte Ausnahmen, unter anderem bei bestimmten Erstansatzsituationen, bei ursprünglicher Erfassung von Goodwill und unter Voraussetzungen bei Beteiligungsdifferenzen. Diese Regeln sind nicht mit dem Nutzbarkeitsnachweis eines DTA identisch.',
  'Für Transaktionen wie Leasing und Rückbauverpflichtungen wurde die frühere Erstansatzausnahme eingegrenzt: Gleich hohe steuerpflichtige und abzugsfähige temporäre Differenzen dürfen nicht allein wegen des zunächst gleichen Aktiv- und Passivbetrags ignoriert werden. Die genaue Steuerbasis folgt aber weiterhin der steuerlichen Zuordnung der Abzüge.',
  X('Netto null bedeutet nicht, dass keine Differenzen existieren','Ein Leasingfall habe anfangs Nutzungsrecht 100 und Verpflichtung 100. Die ausdrücklich vorgegebenen Steuerbasen sind beide null; Satz 25 %, DTA vollständig nutzbar und keine einschlägige Ansatz-Ausnahme.',[
   'Nutzungsrecht: steuerpflichtige Differenz 100 → DTL 25.',
   'Verpflichtung: abzugsfähige Differenz 100 → DTA 25.',
   'Netto ist der Steuerbetrag null, die beiden Positionen und ihre späteren Verläufe sind dennoch vorhanden.',
   'Ob sie in der Bilanz saldiert gezeigt werden dürfen, hängt von zusätzlichen rechtlichen und steuerlichen Saldierungsvoraussetzungen ab. Gleich große Beträge allein reichen dafür nicht.'
  ],'Ansatz, Bewertung und Saldierung sind drei getrennte Entscheidungen.'),
  'Neue Sonderregeln, etwa zu internationaler Mindestbesteuerung, benötigen ihren eigenen aktuellen Anwendungsbezug. Das Kapitel verwendet keine pauschale Annahme, dass jede Steuerreform ohne weitere Prüfung einen gewöhnlichen DTA oder DTL erzeugt.'
 ]),
 S('disclosures','16. Steuerangaben in eine Prognose übersetzen','c d',[
  T(['Angabe','Analytische Frage'],[
   ['Laufender und latenter Steueraufwand','Welche Wirkung betrifft heutige Bemessungsgrundlagen, welche künftige Umkehr oder Neubewertung?'],
   ['Steuerquotenüberleitung','Welche permanenten Effekte, Ländergewichte und Einmalposten erklären die Abweichung zum Bezugssatz?'],
   ['DTA und DTL nach Ursachen','Wann laufen Abschreibungs-, Vergütungs-, Vorrats- oder andere Unterschiede aus?'],
   ['Verlustvorträge, Verfall und Nutzbarkeitskorrektur','Ist genügend rechtzeitig verrechenbarer Gewinn belastbar belegt?'],
   ['Gezahlte Steuern nach relevanten Gebieten','Wo entstehen tatsächliche Abflüsse, und wie passen sie zur Gewinnverteilung?'],
   ['Unsichere Steuerbehandlungen und Vorperiodenänderungen','Welche Schätzungen oder Streitentscheidungen können künftig Zahlungen verändern?'],
   ['Beträge außerhalb der GuV','Welche Bestandsbewegungen dürfen nicht in den laufenden effektiven Satz einfließen?']
  ],'Die zusätzlichen US-Angaben nach ASU 2023-09 stärken insbesondere die Aufgliederung von Überleitungsursachen und Steuerzahlungen; konkrete Anforderungen hängen von Unternehmensart und Anwendungszeitraum ab.'),
  'Die Prognose beginnt mit künftigen steuerpflichtigen Gewinnen je relevanter Abgrenzung und deren Abzügen, nicht mit einer mechanischen Fortschreibung der letzten Cashquote. Danach folgen tatsächliche Nutzbarkeit, Umkehrungsplan, mögliche Satzänderungen und Zahlungszeitpunkte.',
  'Zum Schluss werden drei Rechnungen gegengeprüft: Vorsteuergewinn zum Steueraufwand, Buchwert-Steuerbasis-Differenzen zu den latenten Beständen und laufender Aufwand zu tatsächlichen Zahlungen. Ein Ergebnis, das nur eine dieser Beziehungen erfüllt, ist noch kein abgestimmtes Steuermodell.'
 ])
],related:[{unit:'long-assets',section:'depreciation',label:'Buchmäßigen Werteverzehr zuerst herleiten'},{unit:'long-assets',section:'revaluation',label:'Neubewertung und OCI verstehen'},{unit:'balance-sheet',section:'goodwill',label:'Steuerposten verändern den Erwerbsrestbetrag'},{unit:'cashflow-preparation',section:'expense-cash',label:'Laufenden Steueraufwand in Zahlung überleiten'},{unit:'cashflow-analysis',section:'classification',label:'Steuervorteil aus Zinsen konsistent behandeln'},{unit:'leases-compensation',section:'lease-measurement',label:'Leasing-Nutzungsrecht und Verpflichtung'}],
 sources:[
 {title:'CFA Institute: Lernziele Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=13'},
 {title:'CFA Institute: Analysis of Income Taxes',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/analysis-of-income-taxes'},
 {title:'IFRS Foundation: IAS 12, Überblick und Änderungen',url:'https://www.ifrs.org/issued-standards/list-of-standards/ias-12-income-taxes/'},
 {title:'IFRS Foundation: IAS 12, veröffentlichter Standardtext 2021; spätere Änderungen zusätzlich beachten',url:'https://www.ifrs.org/content/dam/ifrs/publications/pdf-standards/english/2021/issued/part-a/ias-12-income-taxes.pdf'},
 {title:'EUR-Lex: konsolidierte übernommene IFRS am 8. März 2026, IAS 12',url:'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02023R1803-20260308'},
 {title:'IFRS Foundation: beschlossene Änderung zu latenten Steuern bei Leasing und Rückbau',url:'https://www.ifrs.org/news-and-events/news/2021/05/iasb-clarifies-accounting-for-deferred-tax-on-leases-and-decommissioning-obligations/'},
 {title:'FASB: ASU 2023-09, Angaben zu Ertragsteuern',url:'https://storage.fasb.org/ASU%202023-09.pdf'},
 {title:'SEC: Unternehmensangaben 2025 zur Anwendung von enacted rates und Valuation Allowance',url:'https://www.sec.gov/Archives/edgar/data/315374/000110465926002512/R15.htm'},
 {title:'IFRS Foundation: Änderungen zur internationalen Mindestbesteuerung',url:'https://www.ifrs.org/news-and-events/news/2023/05/iasb-amends-tax-accounting-requirements/'}
 ],review:{status:'draft',date:'2026-09-24',note:'Eigene mehrperiodige Abschreibungs- und Garantiefälle sowie vollständige Steuerquotenüberleitung. Gewinn, Steuerbasis, Aufwand, Zahlung, Ansatz und Saldierung werden getrennt.'}};
