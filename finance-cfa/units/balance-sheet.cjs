const {F,T,X,S,G}=require('../author.cjs');
module.exports={id:'balance-sheet',intro:[
 'Eine Bilanz zeigt angesetzte Ressourcen und Ansprüche zu einem Stichtag. Sie ist weder eine vollständige Liste aller wirtschaftlichen Stärken noch ein Verzeichnis aktueller Verkaufspreise. Selbst entwickelte Kundenbeziehungen können fehlen, erworbene Marken dagegen erscheinen; eine Anleihe kann zu fortgeführten Kosten oder zum Fair Value stehen.',
 'Für die Analyse werden deshalb Ansatz, Bewertung und wirtschaftliche Bedeutung getrennt. Wir verfolgen die Wirkung auf Ergebnis, Eigenkapital und Kennzahlen an eigenen Zahlenfällen. Die Darstellung bezieht sich auf IFRS und die ausdrücklich genannten US-GAAP-Grundfälle; besondere Branchen, Privatunternehmensalternativen und Einzelverträge benötigen ihre eigene Regelprüfung.'
],sections:[
 S('measurement','1. Warum Buchwert und Unternehmenswert verschieden sind','a b c d e',[
  'Ein Vermögenswert wird nicht allein deshalb angesetzt, weil die Leitung ihn für wertvoll hält. Es müssen die einschlägigen Ansatzkriterien erfüllt sein. Danach bestimmt ein Bewertungsmodell den Betrag; Anhangangaben erläutern Unsicherheit und Risiken.',
  T(['Ebene','Leitfrage','Beispiel'],[
   ['Ansatz','Gehört der Posten überhaupt in die Bilanz?','Eine selbst geschaffene Reputation wird nicht einfach zum geschätzten Marktwert aktiviert.'],
   ['Erstbewertung','Mit welchem Betrag beginnt der Ansatz?','Separater Kaufpreis eines Patents oder beizulegender Wert eines übernommenen Vermögenswerts.'],
   ['Folgebewertung','Wie verändert sich der Buchwert?','Amortisation, Effektivzins, Fair-Value-Änderung oder Wertminderung.'],
   ['Offenlegung','Welche Information fehlt in der Hauptzeile?','Restlaufzeiten, Bewertungsannahmen, Sicherheiten und Sensitivitäten.']
  ],'Zahlen werden erst vergleichbar, wenn diese vier Ebenen hinreichend übereinstimmen.'),
  F('E=A-L','Eigenkapital ist der Residualbetrag der angesetzten Vermögenswerte nach Abzug der angesetzten Verpflichtungen. Es ist damit vom Bewertungsmodell abhängig.',[['E,A,L','Buchmäßiges Eigenkapital, angesetzte Aktiva und angesetzte Verpflichtungen desselben Stichtags.']]),
  'Ein hohes Kurs-Buchwert-Verhältnis kann Wachstum und nicht bilanzierte Ressourcen widerspiegeln, aber auch einen hohen Marktpreis. Ein niedriger Wert kann günstig erscheinen oder auf überhöhte Buchwerte und schlechte Ertragserwartungen hinweisen. Die Differenz ist keine fertige Kaufentscheidung.'
 ]),
 S('intangibles','2. Identifizierbare immaterielle Ressourcen','a',[
  'Ein immaterieller Vermögenswert besitzt keine körperliche Substanz und ist nicht monetär. Identifizierbarkeit kann aus separater Übertragbarkeit oder aus vertraglichen bzw. rechtlichen Ansprüchen entstehen. Eine Patentlizenz kann deshalb einzeln erklärt werden, während die allgemeine Qualität einer Belegschaft nicht einfach als frei beherrschbarer Vermögenswert angesetzt wird.',
  T(['Entstehung','Typische Analysefrage'],[
   ['Separat erworben','Welche Rechte wurden zu welchem Preis und für welche Laufzeit gekauft?'],
   ['Bei einem Unternehmenserwerb identifiziert','Welche Marken, Technologie oder Kundenverträge werden getrennt von Goodwill bewertet?'],
   ['Intern entwickelt','Ab wann sind die spezifischen Ansatzbedingungen nachweisbar, und welche Kosten gehören dazu?'],
   ['Intern geschaffene Marke oder Reputation','Wirtschaftlicher Nutzen kann bestehen, ohne dass ein eigener Bilanzansatz zulässig ist.']
  ],'Erwerbsweg und Ansatzregel beeinflussen die Bilanz auch bei ähnlicher wirtschaftlicher Leistungsfähigkeit.'),
  'Erwirbt A eine Marke, während B seine vergleichbare Marke selbst aufgebaut hat, können A und B bei gleichem wirtschaftlichem Nutzen unterschiedliche Aktiva und spätere Aufwendungen ausweisen. Ein Vergleich von Kapitalrenditen muss diesen Unterschied erkennen; aus fehlendem Buchwert folgt nicht Wertlosigkeit.'
 ]),
 S('research-development','3. Forschung, Entwicklung und der Zeitpunkt des Nachweises','a',[
  'Nach IAS 38 werden Forschungsausgaben grundsätzlich als Aufwand erfasst. Entwicklung wird erst ab nachgewiesener Erfüllung sämtlicher Ansatzbedingungen aktiviert. Es genügt nicht, dass das Management die Erfolgsaussicht positiv einschätzt.',
  T(['Nachweisfeld','Frage an das konkrete Projekt'],[
   ['Technische Fertigstellbarkeit','Kann die verwendbare oder verkäufliche Lösung tatsächlich fertiggestellt werden?'],
   ['Fertigstellungsabsicht','Will das Unternehmen das Projekt vollenden und verwenden oder verkaufen?'],
   ['Nutzungs- oder Verkaufsmöglichkeit','Kann es das Ergebnis tatsächlich einsetzen bzw. vermarkten?'],
   ['Künftiger wirtschaftlicher Nutzen','Welche Nachfrage oder interne Einsparung begründet den erwarteten Nutzen?'],
   ['Verfügbare Ressourcen','Sind technische, finanzielle und weitere Mittel zur Fertigstellung vorhanden?'],
   ['Zuverlässige Kostenerfassung','Lassen sich die zurechenbaren Entwicklungskosten belastbar messen?']
  ],'Die Bedingungen wirken gemeinsam; früher erfasster Aufwand wird nicht nachträglich allein wegen späteren Erfolgs wieder zum Vermögenswert.'),
  X('Der Zeitpunkt der Kriterienerfüllung verändert den Ansatz','Ein Projekt verursacht zunächst 40 Forschungskosten, danach 20 Entwicklungskosten vor und 60 nach dem belegten Erfüllen aller IAS-38-Bedingungen. Nutzung beginnt erst im Folgejahr.',[
   'Forschung 40 und frühe Entwicklung 20 bleiben Aufwand: zusammen 60.',
   'Die späteren zurechenbaren Entwicklungskosten 60 werden aktiviert. Im Entstehungsjahr gibt es im Fall noch keine planmäßige Amortisation, weil die Nutzung noch nicht möglich ist.',
   'Ein Ansatz aller 120 würde zu spät erreichte Erkenntnisse rückwirkend auf frühere Ausgaben anwenden. Vollständiger Aufwand aller 120 würde hingegen die erfüllten IFRS-Ansatzbedingungen ignorieren.'
  ],'Die Wahl besteht nicht zwischen beliebig günstigen Ergebniszahlen; sie folgt aus Regeln und belegbaren Zeitpunkten.'),
  'Unter US-GAAP werden interne Forschungs- und Entwicklungskosten im allgemeinen Grundfall als Aufwand erfasst. Spezielle Softwarevorschriften und erworbene Forschungsvorhaben können abweichen. Die Regel „US-GAAP aktiviert niemals Entwicklung“ wäre deshalb zu weit.'
 ]),
 S('amortisation','4. Nutzungsdauer erklärt das Aufwandsmuster','a',[
  F('Amort=\\frac{Cost-RV}{n},\\qquad BV_t=Cost-t\\,Amort','Bei linearer Abschreibung ab Nutzungsbereitschaft wird der abschreibbare Betrag gleichmäßig auf die geschätzte endliche Nutzungsdauer verteilt. Die Buchwertformel gilt ohne Wertminderung und bis zum Ende dieser Dauer.',[['Amort','Jährlicher Amortisationsaufwand.'],['Cost,RV','Aktivierte Kosten und angesetzter Restwert.'],['n,t','Nutzungsdauer und vergangene volle Nutzungsjahre.'],['BV_t','Buchwert nach t Nutzungsjahren.']]),
  'Für die aktivierten 60 im Projektfall, Restwert null und drei Nutzungsjahre beträgt die Amortisation 20 pro Jahr. Der Buchwert verläuft von 60 über 40 und 20 zu null. Die ursprüngliche Zahlung von 120 wird dadurch nicht verändert.',
  G({id:'development-timing',title:'Aktivierung verschiebt Aufwand, sie beseitigt ihn nicht',
   caption:'Eigener Projektvergleich ohne Steuern und Wertminderung: 120 Gesamtkosten in Jahr 0; davon 60 nach IFRS-Bedingungen aktiviert, ab Jahr 1 drei Jahre genutzt. Der Vergleichsfall erfasst alle 120 sofort.',
   reading:'Im Entstehungsjahr stehen 60 statt 120 Aufwand. Dafür folgen in den drei Nutzungsjahren jeweils 20. Kumuliert sind nach Jahr 3 bei beiden Varianten 120 erfasst. Zwischenzeitlicher Gewinn und Vermögen unterscheiden sich trotz gleicher Gesamtzahlung.',
   plot:{x:[0,3],y:[0,130],xTicks:[0,1,2,3],xLabel:'Jahr: 0 Entwicklung, 1–3 Nutzung',yLabel:'Kumulierter Aufwand',series:[
    {name:'Teilweise Aktivierung, dann Amortisation',points:[[0,60],[1,80],[2,100],[3,120]]},
    {name:'Vollständige sofortige Aufwandserfassung',dash:'5 4',points:[[0,120],[1,120],[2,120],[3,120]]}
   ],marks:[{x:0,y:60,label:'Jahr 0: Aufwand 60',dx:10,dy:-15},{x:3,y:120,label:'Beide insgesamt 120',dx:-10,dy:-15,anchor:'end'}]}}),
  'Eine unbestimmte Nutzungsdauer bedeutet, dass derzeit keine verlässliche zeitliche Begrenzung des Nutzens erkennbar ist. Sie bedeutet nicht „unendlich“ oder „risikolos“. Solche Werte werden nach IAS 38 nicht planmäßig amortisiert, aber mindestens jährlich auf Wertminderung geprüft; die Nutzungsdauereinschätzung wird überprüft.',
  'Ein endlicher immaterieller Wert wird amortisiert und bei Wertminderungsanzeichen geprüft. Noch nicht nutzungsbereite immaterielle Werte benötigen ebenfalls die vorgeschriebene jährliche Werthaltigkeitsprüfung. Ein längerer angesetzter Zeitraum senkt den aktuellen Aufwand, erhöht aber das Risiko eines zu hohen Restbuchwerts, wenn der Nutzen früher endet.'
 ]),
 S('intangible-disclosure','5. Wie Angaben die Vermögensqualität erklären','a',[
  'Für die Analyse werden Anfangs- und Endbuchwerte, Zugänge, Abgänge, Amortisation, Wertminderung, Nutzungsdauern und Bewertungsmethoden zusammen gelesen. Beim IFRS-Neubewertungsmodell ist ein aktiver Markt erforderlich, der bei einzigartigen Marken oder Patenten selten vorhanden ist; eine interne Wunschbewertung genügt nicht.',
  X('Gleicher Endbuchwert, andere Kapitalbasis','A und B melden jeweils 100 immaterielle Aktiva. Bei A entfallen 90 auf eine bald auslaufende Lizenz und 10 auf neue Software. Bei B verteilen sich 100 auf mehrere jüngere Rechte.',[
   'Die Bilanzsumme allein zeigt weder Ersatzbedarf noch Konzentration auf ein einzelnes Recht.',
   'Für A sind Verlängerbarkeit, Kosten einer Ersatzlizenz und Ertragsabhängigkeit entscheidend. B kann breiter verteilt sein, besitzt aber weiterhin Technologie- und Bewertungsrisiken.',
   'Die nächste Analyse verbindet die Buchwertstruktur mit erwarteten Zahlungsströmen und Sensitivitäten statt allein mit dem Anteil immaterieller Werte.'
  ],'Ein hoher immaterieller Anteil ist weder automatisch gut noch schlecht; seine Zusammensetzung und wirtschaftliche Tragfähigkeit entscheiden.')
 ]),
 S('goodwill','6. Goodwill ist ein Erwerbsrestbetrag','b',[
  F('GW=C+NCI+FV_{old}-NA_{ident}','Bei einem Unternehmenserwerb wird der Gesamtgegenleistung bzw. dem bewerteten Beteiligungsanspruch das übernommene identifizierbare Nettovermögen gegenübergestellt. Das ist eine vereinfachte Darstellung der Erwerbsmethode, keine Bewertung jeder Einzelposition.',[['GW','Erworbener Goodwill.'],['C','Nach den Erwerbsregeln bewertete Gegenleistung.'],['NCI','Angesetzter nicht beherrschender Anteil am erworbenen Unternehmen.'],['FV_{old}','Beizulegender Wert einer gegebenenfalls schon vorher gehaltenen Beteiligung.'],['NA_{ident}','Angesetzte identifizierbare Nettovermögenswerte einschließlich relevanter Erwerbsanpassungen.']]),
  'Erworbene identifizierbare Marken und Technologie werden zunächst getrennt angesetzt; erst danach bleibt Goodwill übrig. Er kann erwartete Synergien und nicht einzeln erkennbare Vorteile widerspiegeln, aber auch Überzahlung. Ein hoher Goodwill ist deshalb kein unabhängig nachgewiesener zusätzlicher Verkaufserlös.',
  X('Warum Kaufpreis minus alter Buchwert zu kurz greift','Ein Käufer zahlt für 100 % eines Geschäfts 250. Das alte buchmäßige Nettovermögen beträgt 140. Nach Erwerbsbewertung beträgt das identifizierbare Nettovermögen einschließlich aller hier relevanten Anpassungen 190.',[
   'Goodwill: 250 − 190 = 60.',
   'Die Differenz zum alten Buchwert beträgt 110, enthält aber auch 50 neu identifizierte bzw. neu bewertete Nettovermögenswerte. Sie vollständig als Goodwill zu behandeln würde diese Komponenten vermischen.',
   'Allgemeine Erwerbsnebenkosten werden nicht automatisch Teil von Goodwill; konkrete Finanzierungskosten und spezielle Vertragsbestandteile haben ihre eigenen Regeln.'
  ],'Die Vergleichsbasis ist das nach Erwerbsregeln angesetzte identifizierbare Nettovermögen.'),
  'Ein negativer Restbetrag löst eine erneute Prüfung von Identifizierung und Bewertung aus. Bestätigt sich danach ein günstiger Erwerb, wird der entsprechende Gewinn nach den einschlägigen Erwerbsregeln erfasst; er ist kein negativer dauerhaft zu amortisierender Goodwill.'
 ]),
 S('partial-goodwill','7. Nicht beherrschende Anteile beeinflussen den Ansatz','b',[
  X('Vollständiger und anteiliger Goodwill unter IFRS','Ein Käufer erwirbt 80 % für 200. Identifizierbares Nettovermögen beträgt 180. Der Fair Value der verbleibenden gewöhnlichen 20-%-Anteile ist 45. Es gibt keine vorherige Beteiligung.',[
   'Bei Fair-Value-Bewertung des nicht beherrschenden Anteils: Goodwill = 200 + 45 − 180 = 65.',
   'Bei der für geeignete gewöhnliche Eigentumsanteile zulässigen proportionalen IFRS-Bewertung: NCI = 0,20 × 180 = 36; Goodwill = 200 + 36 − 180 = 56.',
   'Der Unterschied 9 liegt sowohl im Goodwill als auch im nicht beherrschenden Eigenkapital. Die vom Käufer tatsächlich gezahlten 200 ändern sich nicht.',
   'Man darf den Fair Value der Minderheit nicht ungeprüft aus 200/0,80 hochrechnen: Kontrollprämien können die Preise je Anteil unterscheiden.'
  ],'Das Bewertungswahlrecht für geeignete NCI-Komponenten verändert ausgewiesene Bilanzgrößen, nicht die erworbene wirtschaftliche Beteiligung.'),
  'US-GAAP verwendet bei der üblichen Erwerbsmethode den vollständigen Goodwill. Die genaue IFRS-Wahlmöglichkeit betrifft geeignete gegenwärtige Eigentumsanteile mit proportionalem Liquidationsanspruch; andere NCI-Instrumente benötigen ihre spezifischen Bewertungsregeln.'
 ]),
 S('impairment','8. Goodwill-Wertminderung ist kein neuer Geldabfluss','a b',[
  F('RA=\\max(VIU,FVLCOD),\\qquad Imp=\\max(0,BV-RA)','Unter IAS 36 wird der Buchwert mit dem höheren Betrag aus Nutzungswert und beizulegendem Wert abzüglich Veräußerungskosten verglichen. Für Goodwill erfolgt die Prüfung auf der zugeordneten Einheitsebene.',[['RA','Erzielbarer Betrag nach IAS 36.'],['VIU','Nutzungswert aus geeignet abgezinsten künftigen Zahlungsströmen.'],['FVLCOD','Beizulegender Wert abzüglich Veräußerungskosten.'],['BV','Vergleichbarer Buchwert des Vermögenswerts bzw. der zahlungsmittelgenerierenden Einheit.'],['Imp','Erforderliche Wertminderung in der vereinfachten Vergleichsrechnung.']]),
  X('Der Verlust trifft zuerst den Goodwill','Eine IFRS-Einheit hat Buchwert 300 einschließlich Goodwill 60. Nutzungswert beträgt 250, beizulegender Wert abzüglich Veräußerungskosten 260; andere besondere Bewertungsgrenzen spielen hier keine Rolle.',[
   'Erzielbarer Betrag ist max(250; 260) = 260, nicht der niedrigere Wert 250.',
   'Wertminderung: 300 − 260 = 40. Diese wird vollständig gegen den Goodwill gebucht, dessen Restbuchwert 20 beträgt.',
   'Die Buchung senkt Ergebnis und Eigenkapital vor Steuerfolgen um 40, verursacht aber im Buchungszeitpunkt keine zusätzliche Zahlung. Die wirtschaftlich ungünstigere Erwartung kann trotzdem sehr relevant sein.'
  ],'Eine nicht zahlungswirksame Abschreibung kann auf einen früheren zu hohen Kaufpreis oder schlechtere künftige Cashflows hinweisen.'),
  'Goodwill wird im gewöhnlichen IFRS- und US-GAAP-Modell für börsennotierte Unternehmen nicht planmäßig amortisiert und mindestens jährlich sowie bei relevanten Anzeichen geprüft. US-GAAP verwendet seine Reporting-Unit-Regeln; das ist nicht einfach dieselbe IFRS-CGU-Rechnung. Private US-Unternehmen können besondere Alternativen anwenden.',
  'Eine Goodwill-Wertminderung wird unter IFRS nicht später rückgängig gemacht. Für andere IAS-36-Vermögenswerte kann unter den Regeln eine Zuschreibung bis höchstens zum hypothetischen Buchwert ohne frühere Wertminderung zulässig sein. Neue intern geschaffene Ertragskraft darf nicht als wiederauferstandener erworbener Goodwill bilanziert werden.'
 ]),
 S('financial-assets','9. Finanzinstrumente nach Zahlungsrechten und Geschäftsmodell ordnen','c',[
  'Ein Finanzinstrument verknüpft typischerweise einen vertraglichen Anspruch der einen mit einer Verpflichtung oder einem Eigenkapitalinstrument der anderen Seite. Für Finanzaktiva reicht „wir halten die Anlage lange“ nicht als vollständige Bilanzierungsentscheidung.',
  T(['IFRS-9-Grundkategorie für Schuldinstrumente','Wesentliche Voraussetzungen','Ausweisidee'],[
   ['Amortized Cost','Geschäftsmodell vereinnahmt vertragliche Zahlungen; Zahlungen erfüllen SPPI.','Effektivzinsrechnung und erforderliche Kreditverlustkorrekturen.'],
   ['FVOCI für Schuldinstrumente','Geschäftsmodell vereinnahmt und verkauft; SPPI ist erfüllt.','Fair Value in der Bilanz; bestimmte Ergebnisbestandteile und OCI werden getrennt.'],
   ['FVTPL','Andere Fälle bzw. einschlägige zulässige Designation.','Fair-Value-Änderungen grundsätzlich in der Ergebnisrechnung.']
  ],'SPPI betrifft vertragliche Zins- und Tilgungszahlungen einer grundlegenden Kreditbeziehung; eine Prüfung komplexer Klauseln kann nötig sein.'),
  'Ein bloßes Etikett wie „sicher“ oder „langfristig“ ersetzt weder den Geschäftsmodelltest noch die Analyse der Vertragszahlungen. Derivate werden grundsätzlich zum Fair Value erfasst; Sicherungsbilanzierung besitzt zusätzliche Anforderungen und darf nicht aus dem bloßen Absicherungswunsch abgeleitet werden.'
 ]),
 S('measurement-example','10. Effektivzins, Fair Value und OCI am selben Instrument','c',[
  F('AC_1=AC_0(1+r_{eff})-Coupon','Ohne Tilgung und Wertberichtigung wächst der fortgeführte Betrag mit dem Effektivzins und sinkt um den erhaltenen Coupon.',[['AC_0,AC_1','Fortgeführter Betrag am Anfang und Ende der Periode vor Kreditverlustkorrektur.'],['r_{eff}','Effektiver Periodenzins bei der erstmaligen Bewertung.'],['Coupon','Erhaltener Zinscoupon in Geldeinheiten.']]),
  X('Ein Kursrückgang kann in unterschiedlichen Ergebniszeilen ankommen','Ein Schuldinstrument wird für 95 erworben. Effektivzins 6 %, Jahrescoupon 4, Jahresend-Fair-Value 92. Keine Kreditverluste, Währungs- oder Steuerwirkungen.',[
   'Effektivzinsertrag: 95 × 0,06 = 5,70. Fortgeführter Betrag nach Coupon: 95 + 5,70 − 4 = 96,70.',
   'Bei Amortized Cost steht die Anlage im vereinfachten Fall bei 96,70; der beobachtete Kurs 92 ändert diesen Betrag nicht automatisch.',
   'Bei FVOCI für dieses Schuldinstrument steht die Anlage bei 92. Der Effektivzinsertrag 5,70 wird im Ergebnis erfasst; die Differenz 92 − 96,70 = −4,70 ist hier OCI.',
   'Bei FVTPL beträgt der gesamte Ergebnisbeitrag aus Coupon und Wertänderung 4 + (92 − 95) = 1. Bei FVOCI ergeben Ergebnis 5,70 und OCI −4,70 zusammen ebenfalls Gesamtergebnis 1.'
  ],'Unterschiedliche GuV-Volatilität bedeutet nicht unterschiedliche wirtschaftliche Kursbewegung.'),
  'Expected Credit Losses betreffen erwartete Kreditausfälle in den erfassten Kategorien. Sie sind nicht dasselbe wie jeder Fair-Value-Rückgang durch Zinsänderung. Bei FVOCI-Schuldinstrumenten werden relevante Zins-, Währungs- und Wertminderungseffekte im Ergebnis behandelt; bei Ausbuchung wird der kumulierte entsprechende OCI-Betrag grundsätzlich in das Ergebnis überführt.'
 ]),
 S('equity-instruments','11. Schuldinstrumente und Aktien nicht gleichsetzen','c',[
  'Für IFRS-Eigenkapitalanlagen außerhalb von Konsolidierung und Equity-Methode gilt grundsätzlich FVTPL. Für geeignete nicht zu Handelszwecken gehaltene Beteiligungen kann bei Erstansatz unwiderruflich FVOCI gewählt werden. Diese Eigenkapitalvariante ist nicht dieselbe Kategorie wie FVOCI-Schuldinstrumente.',
  T(['Merkmal','IFRS-FVOCI-Schuldinstrument','Geeignete IFRS-FVOCI-Eigenkapitalanlage'],[
   ['Laufender Ertrag','Effektivzins und weitere vorgeschriebene Komponenten im Ergebnis.','Dividenden grundsätzlich im Ergebnis, soweit sie nicht eindeutig eine Rückzahlung von Anschaffungskosten darstellen.'],
   ['Marktwertänderung','Wesentliche Restkomponente im OCI.','Wertänderung im OCI nach der gewählten Designation.'],
   ['Verkauf','Relevantes kumuliertes OCI wird grundsätzlich ins Ergebnis umgegliedert.','Keine spätere Umgliederung des Wertänderungs-OCI ins Ergebnis.']
  ],'Die gemeinsame Abkürzung FVOCI rechtfertigt keine Gleichbehandlung aller Instrumente.'),
  'Unter US-GAAP werden Eigenkapitalanlagen außerhalb von Equity-Methode und Konsolidierung grundsätzlich mit Wertänderungen im Ergebnis erfasst; für bestimmte Anlagen ohne leicht bestimmbaren Fair Value besteht eine besondere Bewertungsalternative. Alte „Available for Sale“-Regeln für Aktien dürfen nicht unbesehen fortgeschrieben werden. Bei US-Schuldpapieren bleiben Kategorien wie Held to Maturity, Available for Sale und Trading relevant.',
  'Für einen Unternehmensvergleich werden deshalb Instrumentenart, Regelwerk, Bewertungskategorie, Kreditverlustmethode und mögliche Sicherungsbeziehungen zusammen dokumentiert.'
 ]),
 S('liabilities','12. Langfristige Verpflichtungen nach Betrag, Zeit und Bedingungen lesen','d',[
  T(['Verpflichtung','Zentrale Bewertungs- und Analysefrage'],[
   ['Darlehen und Anleihen','Vertragszahlung, Effektivzinsbuchwert, Fälligkeit, Sicherheiten und Covenants.'],
   ['Leasing','Nutzungsrecht und Verpflichtung; Optionen und Diskontsatz beeinflussen den Ansatz.'],
   ['Pensionsverpflichtung','Künftige Leistungen, Planvermögen und versicherungsmathematische Annahmen.'],
   ['Rückstellung','Bestehende Verpflichtung bei unsicherem Betrag oder Zeitpunkt; Schätzung und gegebenenfalls Diskontierung.'],
   ['Latente Steuerverbindlichkeit','Künftige steuerliche Folgen temporärer Bewertungsunterschiede statt einer bereits heute fälligen Steuerrechnung.']
  ],'Nicht jede langfristige Verpflichtung ist ein frei handelbares Bankdarlehen.'),
  F('L_1=L_0(1+r_{eff})-Pay','Für eine zum Effektivzins fortgeführte Verpflichtung ohne andere Änderungen erhöht Zinsaufwand den Buchwert und die Zahlung vermindert ihn.',[['L_0,L_1','Anfangs- und Endbuchwert der Verpflichtung.'],['r_{eff}','Effektiver Periodenzins.'],['Pay','Tatsächliche Zahlung einschließlich enthaltener Zins- und Tilgungsanteile.']]),
  'Bei Anfangsbuchwert 95, Effektivzins 6 % und Zahlung 4 steigt der Buchwert auf 96,70. Der Zinsaufwand 5,70 ist größer als die Zahlung, weil sich ein ursprünglicher Abschlag auflöst. Die Differenz 1,70 ist im Jahr keine zusätzliche Barzahlung.',
  'Finanzschulden können unter bestimmten Voraussetzungen zum Fair Value bewertet werden. Ein Wertgewinn durch gestiegenes eigenes Ausfallrisiko wäre kein operativer Erfolg; die Regeln zur getrennten Darstellung eigener Kreditrisikoeffekte müssen beachtet werden.'
 ]),
 S('maturity-provisions','13. Langfristig bezeichnet keinen bedingungslosen Zahlungsaufschub','d',[
  'Für die IFRS-Klassifikation von Schulden ist unter anderem das am Berichtsdatum bestehende Recht relevant, die Erfüllung mindestens zwölf Monate aufzuschieben. Vertragsbedingungen, die am oder vor dem Stichtag einzuhalten sind, können dieses Recht beeinflussen. Später einzuhaltende Covenants können stattdessen wesentliche Offenlegung auslösen; Absicht allein schafft kein Recht.',
  X('Rückstellung ohne heutige Zahlung','Für eine bestehende Rückbaupflicht wird in drei Jahren eine feste Zahlung von 133,10 erwartet. Ein geeigneter jährlicher Diskontsatz von 10 % werde angenommen; keine Schätzungsänderung.',[
   'Heutiger Barwert: 133,10/1,10³ = 100.',
   'Nach einem Jahr ohne Zahlung wächst der Betrag auf 110; nach zwei Jahren auf 121; im dritten Jahr auf 133,10 unmittelbar vor Zahlung.',
   'Die jährliche Aufzinsung ist zunächst Aufwand bzw. eine nach den einschlägigen Regeln zu behandelnde Wertänderung, aber keine bereits geleistete Zahlung. Eine Änderung der erwarteten Kosten oder des Diskontsatzes würde die Überleitung zusätzlich verändern.'
  ],'Nominaler Erfüllungsbetrag, Buchwert und aktuelle Zahlung sind drei verschiedene Größen.'),
  'IAS 37 verlangt für eine Rückstellung eine gegenwärtige Verpflichtung aus einem vergangenen Ereignis, wahrscheinlichen Ressourcenabfluss und eine verlässlich schätzbare Höhe. Ein allgemeiner Plan für künftige Verluste schafft keine solche Verpflichtung. Eine Eventualverbindlichkeit kann stattdessen eine Angabe erfordern. US-GAAP-Schwellen und Detailregeln sind nicht automatisch mit den IFRS-Begriffen identisch.',
  'Mindestangaben für eine Analyse sind Fälligkeiten, Zinsbindung, Währung, Sicherheiten, Vertragsauflagen und relevante Schätzunsicherheiten. Ein niedriger ausgewiesener Kurzfristanteil schützt nicht vor einer künftigen Vertragsverletzung oder schwieriger Refinanzierung.'
 ]),
 S('common-size','14. Bilanzstruktur und Kennzahlen zusammen rechnen','e',[
  F('w_j=A_j/A,\\qquad CR=CA/CL,\\qquad DR=Debt/E','Common-Size-Anteile skalieren einzelne Aktiva auf Gesamtaktiva. Liquiditäts- und Verschuldungsquoten verbinden andere klar definierte Bestände.',[['w_j,A_j,A','Anteil der Aktivposition j, deren Buchwert und Gesamtaktiva.'],['CR,CA,CL','Current Ratio, kurzfristige Aktiva und kurzfristige Verpflichtungen.'],['DR','Hier Debt-to-Equity Ratio: Finanzschulden im Verhältnis zum Eigenkapital.'],['Debt,E','Ausdrücklich definierte Finanzschulden und Eigenkapital; nicht sämtliche Verpflichtungen sind automatisch Debt.']]),
  X('Ein vollständiges Strukturbeispiel','Cash 40, Forderungen 60, Vorräte 100, Sachanlagen 240 und Goodwill 60. Kurzfristige Verpflichtungen 150, langfristige Verpflichtungen 200, Eigenkapital 150; Finanzschulden innerhalb aller Verpflichtungen 250.',[
   'Gesamtaktiva 500. Aktivanteile: Cash 8 %, Forderungen 12 %, Vorräte 20 %, Sachanlagen 48 %, Goodwill 12 %; zusammen 100 %.',
   'Kurzfristige Aktiva 200. Current Ratio = 200/150 ≈ 1,3333. Bei Quick Assets nur Cash und Forderungen: 100/150 ≈ 0,6667.',
   'Gesamtverpflichtungen/Aktiva = 350/500 = 70 %. Finanzschulden/Aktiva = 250/500 = 50 %. Debt/Equity = 250/150 ≈ 1,6667.',
   'Die Unterschiede zwischen 70 % und 50 % entstehen aus der Definition, nicht aus Rundung. Forderungsqualität, Vorratsverkäuflichkeit und Fälligkeiten bleiben zusätzlich zu prüfen.'
  ],'Eine Quote ohne klare Postenabgrenzung lässt sich weder verlässlich vergleichen noch interpretieren.')
 ]),
 S('ratio-effects','15. Eine Buchung verändert mehrere Kennzahlen gleichzeitig','a b e',[
  X('Goodwill-Abschreibung verändert den Nenner','Im vorigen Bilanzbeispiel werden 30 Goodwill ohne Steuerwirkung wertgemindert. Keine Zahlung und keine Schuldenänderung.',[
   'Aktiva fallen von 500 auf 470, Eigenkapital von 150 auf 120. Finanzschulden bleiben 250.',
   'Debt/Equity steigt von 1,6667 auf 250/120 ≈ 2,0833. Debt/Assets steigt von 50 % auf 250/470 ≈ 53,1915 %.',
   'Bei unveränderten künftigen Gewinnen kann eine spätere Rendite auf den niedrigeren Buchwert mechanisch höher aussehen. Im Abschreibungsjahr drückt aber zugleich der Verlust den Gewinnzähler.',
   'Die aktuelle Kasse bleibt 40. Das heißt nicht, dass sich das Risiko nicht verändert hat: Die Abschreibung kann neue Informationen über schwächere künftige Cashflows offenlegen.'
  ],'Kennzahleneffekt, aktueller Zahlungsstrom und neue wirtschaftliche Information werden getrennt beurteilt.'),
  'Ein analytisches Herausrechnen von Goodwill muss Aktiva und Eigenkapital konsistent anpassen und die Frage nennen, die damit beantwortet werden soll. Es beweist nicht, dass der beim Erwerb gezahlte Betrag bedeutungslos oder künftig erneut ohne Kosten verfügbar wäre.'
 ])
],related:[{unit:'income-statement',section:'expenses',label:'Aktivierung mit Periodenaufwand verbinden'},{unit:'tvm',section:'bonds',label:'Effektivzins und Barwert einer Anleihe'},{unit:'leases-compensation',section:'pensions',label:'Pensionsverpflichtungen und Planvermögen'},{unit:'cashflow-preparation',section:'noncash',label:'Bestandsbewegung von Zahlung trennen'},{unit:'ratios',section:'interactions',label:'Kennzahleneffekte einer Transaktion'}],
 sources:[
 {title:'CFA Institute: Lernziele Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=12'},
 {title:'CFA Institute: Analyzing Balance Sheets',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/analyzing-balance-sheets'},
 {title:'IFRS Foundation: IAS 38',url:'https://www.ifrs.org/issued-standards/list-of-standards/ias-38-intangible-assets/'},
 {title:'EUR-Lex: IAS 38, ursprünglicher veröffentlichter Standardtext, insbesondere Absatz 57',url:'https://eur-lex.europa.eu/eli/reg/2004/2236/oj/eng'},
 {title:'IFRS Foundation: IFRS 3',url:'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-3-business-combinations/'},
 {title:'IFRS Foundation: Erläuterung zur Bewertung geeigneter NCI-Komponenten',url:'https://media.ifrs.org/IFRICUpdateJan2010.html'},
 {title:'IFRS Foundation: IAS 36',url:'https://www.ifrs.org/issued-standards/list-of-standards/ias-36-impairment-of-assets/'},
 {title:'IFRS Foundation: IFRS 9',url:'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/'},
 {title:'IFRS Foundation: IFRS 7',url:'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-7-financial-instruments-disclosures/'},
 {title:'IFRS Foundation: IAS 37',url:'https://www.ifrs.org/issued-standards/list-of-standards/ias-37-provisions-contingent-liabilities-and-contingent-assets/'},
 {title:'IFRS Foundation: Schuldklassifikation und Covenants',url:'https://www.ifrs.org/news-and-events/news/2022/10/iasb-amends-accounting-standard-to-improve-information-about-long-term-debt-with-covenants/'},
 {title:'FASB: ASU 2016-01, Änderungen für Finanzinstrumente',url:'https://storage.fasb.org/ASU%202016-01.pdf'},
 {title:'FASB: ASU 2017-04, Goodwill-Wertminderung',url:'https://storage.fasb.org/ASU2017-04.pdf'},
 {title:'FASB: Darstellung bestehender R&D-Grundsätze im Forschungsdokument; kein neuer Standard',url:'https://storage.fasb.org/2023%20FRIC%20Materials.pdf'}
 ],review:{status:'draft',date:'2026-09-24',note:'Ansatz, Bewertung, GuV/OCI, Cashflow und Kennzahlen anhand eigener abgestimmter Fälle getrennt; vereinfachte Beispiele nennen ihre Voraussetzungen.'}};
