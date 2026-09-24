const {F,T,X,S,G}=require('../author.cjs');
const changes=Array.from({length:61},(_,j)=>j-30);
module.exports={id:'fx-markets',intro:[
 'Ein Wechselkurs ist zunächst ein Preis mit zwei Währungseinheiten. Wer diese Einheiten nicht nennt, kann eine Aufwertung für eine Abwertung halten und die richtige Zahl wirtschaftlich falsch interpretieren. Deshalb wird hier jede Rechnung mit der Einheit „heimische Währung je Einheit Fremdwährung“ begonnen.',
 'Danach verbinden wir nominale und reale Kurse mit Marktteilnehmern, Wechselkursregimen, Handel und Kapitalbewegungen. Die Rechnungen sind eigene fiktive Beispiele; sie beschreiben keine aktuellen Devisenkurse oder geltenden Kapitalverkehrsbeschränkungen.'
],sections:[
 S('quotation','1. Die Einheit ist Teil der Definition','a',[
  F('S_{D/F}=\\frac{\\text{Einheiten D}}{\\text{eine Einheit F}},\\qquad S_{F/D}=1/S_{D/F}','Unsere Bruchnotation bezeichnet ausdrücklich die Preiseinheit: D je F. Eine Handelsplattform kann dasselbe Währungspaar in anderer Namensreihenfolge anzeigen; maßgeblich ist immer die angegebene Preiseinheit.',[['S_{D/F},S_{F/D}','Nominaler Kassakurs in D je F und dessen reziproke Notierung in F je D.'],['D,F','Heimische bzw. fremde Währung aus der ausdrücklich gewählten Perspektive.']]),
  'Bei 1,20 USD je EUR kostet ein Euro 1,20 US-Dollar. USD ist in dieser Einheit die Preiswährung und EUR die Basiswährung. Der Kehrwert beträgt 0,833333 EUR je USD. Die marktübliche Paarbezeichnung „EUR/USD“ kann den Preis 1,20 USD je EUR meinen; sie darf nicht unbesehen wie unsere mathematische Einheit gelesen werden.',
  F('V_D=N_FS_{D/F},\\qquad N_F=V_D/S_{D/F}','Multiplikation rechnet einen Fremdwährungsbetrag in heimische Währung um. Division beantwortet die umgekehrte Frage, wie viele Fremdwährungseinheiten ein gegebener heimischer Betrag kaufen kann.',[['V_D','Betrag bzw. Wert in heimischer Währung D.'],['N_F','Anzahl Fremdwährungseinheiten F.'],['S_{D/F}','Kurs in D je F; Gebühren und Handelsspanne zunächst ausgeschlossen.']]),
  '500 EUR entsprechen bei 1,20 USD je EUR 600 USD. Umgekehrt kaufen 600 USD genau 500 EUR. Einheitenkürzen ist der zuverlässigste Schutz gegen vertauschte Multiplikation und Division.'
 ]),
 S('changes','2. Prozentuale Aufwertung und Abwertung sind nicht symmetrisch','a',[
  F('g_F=\\frac{S_1}{S_0}-1,\\qquad g_D=\\frac{1/S_1}{1/S_0}-1=\\frac{S_0}{S_1}-1=\\frac{-g_F}{1+g_F}','Bei S in D je F misst seine Veränderung die Wertänderung von F in D. Die Gegenwährung D wird über den Kehrwert gemessen und hat daher einen anderen prozentualen Nenner.',[['S_0,S_1','Anfangs- und Endkurs, beide in D je F.'],['g_F,g_D','Nominale Wertänderung der Fremd- bzw. heimischen Währung gegenüber der jeweils anderen.']]),
  X('Euro verliert 10 %, Dollar gewinnt mehr als 10 %','Der Kurs fällt von 1,20 auf 1,08 USD je EUR.',[
   'Der EUR-Wert in USD fällt um 1,08/1,20 − 1 = −10 %. Ein Euro kauft weniger Dollar.',
   'Der USD-Wert in EUR steigt von 1/1,20 auf 1/1,08. Die Veränderung ist 1,20/1,08 − 1 ≈ +11,1111 %.',
   'Die gleiche wirtschaftliche Bewegung hat je nach betrachteter Währung einen anderen Prozentsatz. Lediglich bei sehr kleinen Veränderungen ist „gleich groß, anderes Vorzeichen“ eine brauchbare Näherung.'
  ],'Nenne zuerst die Währung, deren Wertänderung gefragt ist, und erst danach die Prozentzahl.'),
  G({id:'reciprocal-change',title:'Die Gegenwährung verändert sich mit einem anderen Nenner',
   caption:'Eigene exakte Kehrwertrechnung: x ist die Änderung des Fremdwährungswerts in heimischer Währung; y die zugehörige Änderung der heimischen Währung in Fremdwährung.',
   reading:'Bei −10 % auf der horizontalen Achse ergeben sich +11,11 % auf der vertikalen Achse. Die gestrichelte Gerade zeigt nur die Vorzeichennäherung. Mit zunehmender Bewegung wird deren Fehler größer.',
   plot:{x:[-30,30],y:[-35,50],xLabel:'Wertänderung F in D (%)',yLabel:'Wertänderung D in F (%)',series:[
    {name:'Exakte Kehrwertänderung',points:changes.map(g=>[g,(1/(1+g/100)-1)*100])},
    {name:'Näherung: nur Vorzeichen umkehren',dash:'5 4',points:[[-30,30],[30,-30]]}
   ],marks:[{x:-10,y:100/9,label:'−10 % / +11,11 %',dx:10,dy:-18}]}}),
  'Bei flexiblen Marktkursen spricht man von Appreciation oder Depreciation. Eine offizielle Änderung einer festgelegten Parität wird häufig als Revaluation oder Devaluation bezeichnet. In einer Aufgabe ist die Änderung des Regimes von einer normalen Marktbewegung zu unterscheiden.'
 ]),
 S('real-rate','3. Ein realer Wechselkurs vergleicht Güterpreise','a',[
  F('q=S_{D/F}\\frac{P_F}{P_D}','Der ausländische Güterkorb kostet zunächst P_F in Fremdwährung, nach Umrechnung S·P_F in heimischer Währung. Die Division durch den heimischen Korbpreis ergibt seinen relativen Preis.',[['q','Realer Wechselkurs in heimischen Güterkörben je ausländischem Güterkorb nach dieser Konvention.'],['S_{D/F}','Nominalkurs in D je F.'],['P_F,P_D','Preise geeigneter ausländischer bzw. heimischer Güterkörbe in der jeweiligen Währung.']]),
  'Steigt q in dieser Konvention, wird der ausländische Korb relativ teurer und der heimische relativ günstiger: reale Abwertung von D gegenüber F. Manche veröffentlichte Indizes verwenden die umgekehrte Richtung. Das Wort „steigend“ reicht deshalb ohne Indexdefinition nicht zur Interpretation.',
  X('Nominal stabil, real verändert','Anfangs kostet ein vergleichbarer ausländischer Korb 100 EUR, der heimische 120 USD, und S beträgt 1,20 USD je EUR. Danach bleiben S = 1,20, während die Korbpreise auf 110 EUR und 126 USD steigen.',[
   'Anfangs: q0 = 1,20 × 100/120 = 1. Danach: q1 = 1,20 × 110/126 ≈ 1,047619.',
   'Der ausländische Korb wird relativ zum heimischen um rund 4,7619 % teurer. D hat real abgewertet, obwohl der Nominalkurs unverändert ist.',
   'Um denselben realen Kurs q = 1 aufrechtzuerhalten, müsste der Nominalkurs nun 126/110 ≈ 1,145455 USD je EUR betragen. Das wäre eine nominale Aufwertung des Dollar gegenüber dem Euro.'
  ],'Nominale Kursstabilität ist keine Garantie für konstante internationale Preisrelationen.'),
  F('\\frac{q_1}{q_0}=\\frac{S_1}{S_0}\\frac{1+\\pi_F}{1+\\pi_D}','Reale Veränderung verbindet nominale Kursveränderung und die beiden Preisentwicklungen über Bruttofaktoren. Die einfache Differenz der Raten ist nur eine Näherung.',[['q_1/q_0','Realer Veränderungsfaktor.'],['S_1/S_0','Nominaler Veränderungsfaktor bei unveränderter Notierung.'],['\\pi_F,\\pi_D','Inflationsraten der verwendeten Preismaße im Ausland und Inland über denselben Zeitraum.']]),
  'Bei Preisindizes statt identischen absoluten Körben ist das Niveau oft auf ein Basisjahr normiert. Ein Indexwert von 110 bedeutet dann nicht automatisch „10 % fundamental überbewertet“. Nicht handelbare Güter, Produktivität, Qualität und unterschiedliche Konsumgewichte begrenzen einfache Kaufkraftvergleiche.'
 ]),
 S('effective-rate','4. Bilaterale und effektive Wechselkurse','a',[
  'Ein bilateraler Kurs beschreibt zwei Währungen. Ein effektiver Kurs fasst mehrere Partner zusammen. Nominal effektive Maße verwenden Währungsrelationen; real effektive Maße beziehen zusätzlich geeignete relative Preise oder Kosten ein.',
  F('I_1/I_0=\\prod_{j=1}^{n}(z_{j,1}/z_{j,0})^{w_j},\\qquad \\sum_{j=1}^{n}w_j=1','Ein möglicher geometrisch gewichteter Index kombiniert gleichgerichtete bilaterale Wertfaktoren. Hier steht z durchgehend für den Wert der heimischen Währung in Partnerwährung; ein Anstieg bedeutet nominale Aufwertung der heimischen Währung.',[['I_1/I_0','Veränderungsfaktor des hier definierten effektiven Index.'],['z_{j,1},z_{j,0}','End- und Anfangswert einer Einheit heimischer Währung in Währung des Partners j.'],['w_j','Nicht negatives Partnergewicht.'],['j,n','Partnerindex und Anzahl berücksichtigter Partner.']]),
  'Bei Gewichten 60 % und 40 %, einer Aufwertung von 10 % gegen Partner A und einer Abwertung von 5 % gegen Partner B steigt dieser Index um 1,10^0,6 × 0,95^0,4 − 1 ≈ 3,7349 %. Ein einzelner bilateraler Kurs würde diese gemeinsame Bewegung nicht beschreiben.',
  'Tatsächliche Indizes können andere Partnergewichte, Kostenmaße und Verkettungen verwenden. Ein Index für gesamtwirtschaftliche Wettbewerbsfähigkeit passt außerdem nicht automatisch zur Währungsexposition eines bestimmten Unternehmens.'
 ]),
 S('participants','5. Wer handelt Devisen und aus welchem Grund?','a',[
  T(['Teilnehmer','Typischer Zweck','Zu prüfendes Risiko'],[
   ['Unternehmen','Waren, Dienstleistungen und Investitionen in anderer Währung bezahlen oder Erlöse absichern.','Zeitpunkt und Höhe des tatsächlichen Zahlungsstroms können vom Plan abweichen.'],
   ['Anleger und Vermögensverwalter','Ausländische Anlagen erwerben, Währungsrisiko steuern oder eine Position eingehen.','Lokale Anlagerendite und Währungsrendite wirken gemeinsam.'],
   ['Banken und andere Intermediäre','Kurse stellen, Kundenströme vermitteln, Liquidität und eigene Risiken steuern.','Spreads, Gegenparteien, Finanzierung und Abwicklung.'],
   ['Zentralbanken und öffentliche Stellen','Reserven verwalten oder im Rahmen des Regimes intervenieren.','Mandat, Reserveverfügbarkeit und Auswirkungen auf monetäre Bedingungen.']
  ],'Der Devisenmarkt ist ein Netzwerk verschiedener Handelsplätze und bilateraler Beziehungen, keine einzige universelle Börse mit einem für alle identischen Preis.'),
  'Ein Kurs muss zu Zeitpunkt, Betrag, Instrument und Ausführbarkeit passen. Ein unverbindlicher Mittelkurs ist nicht automatisch ein handelbarer Kauf- oder Verkaufspreis. Große oder illiquide Transaktionen können andere Konditionen haben als kleine liquide Standardgeschäfte.',
  'Selbst bei korrekter Preisvereinbarung können Abwicklungs- und Gegenparteirisiken entstehen. Preisrisiko, Kreditrisiko und Settlement-Risiko sind getrennte Dimensionen; eine Absicherung des Wechselkursniveaus beseitigt sie nicht sämtlich.'
 ]),
 S('instruments','6. Spot, Forward und FX Swap nach ihren Zahlungszeitpunkten unterscheiden','a',[
  T(['Instrument','Vereinbarung','Wofür die Unterscheidung wichtig ist'],[
   ['Spot / Kassageschäft','Tausch zu einem vereinbarten Kassakurs mit marktüblicher zeitnaher Valuta.','Kassa bedeutet nicht bei jedem Währungspaar sofortige Abwicklung am Handelstag.'],
   ['Outright Forward','Heute vereinbarter Tausch zu einem späteren Termin zu festem Kurs.','Der vereinbarte Kurs ist ein Vertragspreis, keine sichere Prognose des späteren Kassakurses.'],
   ['FX Swap','Zwei verbundene gegenläufige Währungstausche an unterschiedlichen Valutatagen.','Kann Währungsliquidität zeitlich verschieben und unterscheidet sich von einer einzelnen ungesicherten Kassaposition.'],
   ['Währungsoption','Recht, unter festgelegten Bedingungen zu tauschen, gegen eine Prämie.','Ein Recht mit möglicher Nichtausübung ist nicht dieselbe Verpflichtung wie ein Forward.']
  ],'Konkrete Vertrags-, Margin- und Abwicklungsregeln hängen vom Instrument und Markt ab.'),
  F('1+R_D=(1+R_F)\\frac{S_1}{S_0}','Die heimische Rendite eines ungesicherten ausländischen Investments kombiniert lokale Rendite und Währungsfaktor, sofern sämtliche Rückflüsse am Ende umgerechnet werden und keine Zwischenzahlungen vorliegen.',[['R_D,R_F','Gesamtrendite in heimischer bzw. lokaler Fremdwährung.'],['S_0,S_1','Kurse in D je F bei Kauf und Endumrechnung.']]),
  'Eine lokale Rendite von 8 % und eine Abwertung der Anlagewährung von 10 % ergeben 1,08 × 0,90 − 1 = −2,8 % in heimischer Währung. Die einfache Summe −2 % übersieht den Kreuzterm. Zwischenzeitliche Cashflows oder eine Absicherung benötigen eine genauer passende Zahlungsrechnung.',
  F('R_D=\\frac{V_{F,T}S_T+\\sum_{j=1}^{n}C_{F,j}S_{t_j}-V_{F,0}S_0}{V_{F,0}S_0}','Eine einfache Haltedauerrendite bei Zwischenzahlungen: Jeder Fremdwährungszufluss wird bei Eingang zum dann gültigen Kurs umgerechnet und danach unverzinst in D gehalten. Bei Wiederanlage muss dessen Endwert statt des bloßen Umrechnungsbetrags eingesetzt werden.',[['R_D','Haltedauerrendite in D bei den angegebenen Wiederanlageannahmen.'],['V_{F,0},V_{F,T}','Anfänglicher und abschließender Anlagenwert in F, ohne schon ausgeschüttete Beträge.'],['S_0,S_T,S_{t_j}','Kurs in D je F zu Anfang, Ende und jeweiligem Ausschüttungszeitpunkt.'],['C_{F,j},t_j','Zwischenzahlung j in F und ihr Zeitpunkt.'],['j,n','Zahlungsindex und Anzahl Zwischenzahlungen.']]),
  X('Die Ausschüttung hat ihren eigenen Wechselkurs','Kaufpreis 100 EUR bei 1,20 USD je EUR. Eine Ausschüttung von 6 EUR wird bei 1,10 sofort in USD umgerechnet und unverzinst gehalten. Verkauf am Ende für 104 EUR bei 1,25 USD je EUR.',[
   'Der ursprüngliche Einsatz beträgt 120 USD. Die Ausschüttung liefert 6,60 USD; der Verkauf liefert 130 USD.',
   'Gesamter Endbestand: 136,60 USD. Haltedauerrendite: 136,60/120 − 1 ≈ 13,8333 %.',
   'Würde man fälschlich auch die frühere Ausschüttung zum Endkurs umrechnen, ergäben sich 137,50 USD und rund 14,5833 %. Das unterstellt eine andere Währungshaltung zwischen den Terminen.'
  ],'Nicht nur Betrag und Endkurs, sondern auch Umtauschzeitpunkt und Wiederanlage bestimmen die heimische Rendite.')
 ]),
 S('regimes','7. Wechselkursregime als Spektrum von Bindung und Flexibilität','b',[
  T(['Regime / Grundform','Charakteristik','Zentraler Zielkonflikt'],[
   ['Keine eigene gesetzliche Währung','Nutzung einer fremden Währung; eine Währungsunion ist institutionell gesondert zu beurteilen.','Wechselkursunsicherheit gegenüber dieser Währung entfällt, eigene monetäre Autonomie ist begrenzt.'],
   ['Currency Board','Strenge gesetzliche Umtauschbindung und Reserve-/Deckungsregeln für die monetäre Basis.','Hohe Bindung schränkt diskretionäre Liquiditäts- und Geldpolitik ein.'],
   ['Konventioneller fester Peg','Bindung an eine Währung oder einen Korb mit begrenztem Spielraum.','Verteidigung benötigt passende Politik und gegebenenfalls Reserven.'],
   ['Stabilisierte Anordnung','Der tatsächlich beobachtete Kurs bleibt eng stabil, auch ohne identische formelle Bindung.','De-facto-Verhalten und offiziell angekündigtes Regime können voneinander abweichen.'],
   ['Crawling Peg / Crawl-like','Angekündigte schrittweise Paritätsänderung bzw. ein entsprechend gleitendes beobachtetes Kursmuster.','Graduelle Anpassung begrenzt den Sprung, beseitigt aber Inflations- und Erwartungsprobleme nicht.'],
   ['Bandbreitenregime','Der Kurs kann innerhalb eines erlaubten Bandes schwanken.','Am Rand kann Intervention oder Zinsanpassung nötig werden.'],
   ['Andere gelenkte Anordnung','Diskretionäre Steuerung ohne einfache enge Bindung.','Eingriffe und Reaktionsweise können schwer vorhersehbar sein.'],
   ['Floating / Free Floating','Weitgehend marktbestimmter Kurs; freies Floating ist eine strengere Form mit besonders begrenzten Eingriffen.','Mehr nominale Anpassungsfreiheit, aber höhere laufende Wechselkursunsicherheit.']
  ],'Dies sind konzeptionelle Formen. Die technische Einstufung eines realen Landes hängt von beobachtetem Verhalten und aktueller Methodik ab.'),
  'De jure bezeichnet die angekündigte oder rechtlich festgelegte Ordnung, de facto das tatsächlich praktizierte Verhalten. Ein Land kann einen flexiblen Kurs ankündigen und dennoch stark eingreifen. Aus einem einzelnen ruhigen Kursmonat lässt sich kein dauerhaft fester Peg beweisen.',
  'Eine Bindung kann Handel und Planung gegenüber der Ankerwährung vereinfachen. Dafür kann die eigene Volkswirtschaft bei einem besonderen Schock weniger über den nominalen Wechselkurs reagieren. Eine gemeinsame Währung löst außerdem keine Produktivitäts- oder Haushaltsprobleme automatisch.'
 ]),
 S('policy-constraint','8. Warum ein Peg die Geldpolitik beeinflusst','b',[
  'Bei hoher Kapitalmobilität und glaubwürdiger Bindung können starke Renditeunterschiede grenzüberschreitende Anlagebewegungen auslösen. Eine unabhängig gesetzte heimische Zinsrate kann dann Druck auf die Bindung erzeugen. Fester Wechselkurs, freie Kapitalmobilität und vollständige geldpolitische Autonomie lassen sich nicht beliebig gleichzeitig wählen.',
  X('Abwertungsdruck bei vorgegebenem Kurs','Die Zentralbank will eine Parität halten, während private Akteure vermehrt Fremdwährung nachfragen.',[
   'Ein möglicher Eingriff ist der Verkauf eigener Devisenreserven gegen heimische Währung. Reserven fallen; ohne gegenläufige Operation wird heimische Liquidität eingezogen.',
   'Ein höherer heimischer Zins kann den Druck beeinflussen, belastet aber gegebenenfalls Kredit und Nachfrage. Eine Sterilisierung versucht, die Liquiditätswirkung eines Eingriffs durch andere Geschäfte auszugleichen; sie beseitigt nicht automatisch den zugrunde liegenden Kapitaldruck.',
   'Sind Erwartungen einer Paritätsänderung stark, reicht ein kleiner Zinsunterschied möglicherweise nicht aus. Die Glaubwürdigkeit einer Bindung ist daher keine allein aus der heutigen Notierung ablesbare Eigenschaft.'
  ],'Devisenintervention, Reservebestand und heimische Geldpolitik sind verknüpft; sie sind keine unbegrenzt unabhängig verfügbaren Werkzeuge.'),
  'Unter einem flexiblen Regime kann der Kurs einen Teil der Anpassung übernehmen. Das schützt jedoch nicht automatisch alle Bilanzen: Ein Schuldner mit hohen ungesicherten Fremdwährungsverpflichtungen kann gerade durch die Abwertung unter Druck geraten.'
 ]),
 S('trade-effects','9. Eine Abwertung hilft dem Handelsbilanzsaldo nicht immer sofort','b',[
  'Bei S in D je F macht ein Anstieg die Fremdwährung teurer. Wenn Importpreise in F fest sind und vollständig weitergegeben werden, steigen Importkosten in D. Wenn Exporteure ihren Preis in D halten, können ausländische Käufer die Waren günstiger in F erwerben. Preise, Mengen und vertragliche Rechnungswährung bestimmen gemeinsam den Effekt.',
  X('Preiswirkung sofort, Mengenanpassung später','Anfangs betragen Exporteinnahmen und Importausgaben jeweils 100 in D. S steigt um 10 %. Exportpreise in D und Importpreise in F bleiben konstant.',[
   'Ohne unmittelbare Mengenreaktion bleiben Exporteinnahmen 100, während die Importrechnung auf 110 steigt. Der Saldo verschlechtert sich zunächst von null auf −10.',
   'Später sei die Exportmenge um 8 % gestiegen und die Importmenge um 7 % gefallen. Exporteinnahmen sind nun 108; Importausgaben 110 × 0,93 = 102,3. Der Saldo beträgt +5,7.',
   'Die angenommene spätere Verbesserung entsteht aus Mengenreaktionen. Ohne diese Angaben wäre sie aus der Abwertung allein nicht ableitbar.'
  ],'Eine zunächst schlechtere und später bessere Handelsbilanz kann als J-Kurven-Muster auftreten; sie ist keine Garantie jeder Abwertung.'),
  F('\\frac{\\partial B}{\\partial\\ln S}=X\\varepsilon_X-M(1-\\varepsilon_M)','Im vereinfachten lokalen Modell bleiben Exportpreise in D und Importpreise in F konstant. Der Mengeneffekt auf Exporte und der Preis-/Mengeneffekt auf Importe werden getrennt.',[['B=X-M','Handelsbilanzsaldo in D.'],['X,M','Exporterlöse und Importausgaben in D vor der kleinen Änderung.'],['S','Nominalkurs in D je F.'],['\\varepsilon_X,\\varepsilon_M','Positive Beträge der Export- und Importnachfrageelastizitäten bei vollständiger Preisweitergabe.'],['\\partial/\\partial\\ln S','Lokale Änderung bei einer kleinen proportionalen Kursänderung.']]),
  'Bei anfangs ausgeglichenem Handel folgt daraus die bekannte Marshall-Lerner-Bedingung: Die Summe der beiden Elastizitätsbeträge muss im Modell größer als eins sein, damit die kleine Abwertung den Saldo verbessert. Ausgangssalden, unvollständige Weitergabe, Angebotsgrenzen und andere Fakturierung verändern diese einfache Bedingung.',
  'Ein besserer Saldo ist außerdem nicht identisch mit höherem Wohlstand. Teurere importierte Energie kann reale Kaufkraft belasten, auch wenn Mengen und Saldo später reagieren.'
 ]),
 S('capital-flows','10. Finanzierung und Währungsbilanz gemeinsam betrachten','a b',[
  'Kapital fließt etwa als Direktinvestition, Portfolioanlage oder Kredit über Grenzen. Motive sind erwartete Rendite, Risiko, Diversifikation, Finanzierung und politische bzw. rechtliche Rahmenbedingungen. Ein Leistungsbilanzdefizit ist deshalb nicht automatisch eine Vorhersage einer sofortigen Abwertung; es steht im Zusammenhang mit Finanzierung und Vermögensbewegungen.',
  'Kurzfristige Mittel können bei geänderten Erwartungen rasch abgezogen werden. Direktinvestitionen sind häufig weniger leicht rückgängig zu machen, aber ebenfalls nicht risikofrei. Bruttozuflüsse und Bruttoabflüsse können groß sein, obwohl der Nettosaldo klein ist.',
  X('Fremdwährungsschuld verstärkt einen Wechselkursschock','Ein Unternehmen besitzt heimische Aktiva von 300 D und schuldet 100 F. Anfangs ist S = 2 D je F; später S = 2,4. Aktiva bleiben in diesem Beispiel 300 D, und es gibt keine Absicherung.',[
   'Anfangs beträgt die Schuld 200 D und Eigenkapital 100 D. Danach beträgt dieselbe Schuld in F nun 240 D und Eigenkapital nur noch 60 D.',
   'Die Fremdwährung verteuert sich um 20 %, während das Eigenkapital um 40 % fällt. Ursache ist die ungesicherte Währungsinkongruenz auf einer gehebelten Bilanz.',
   'Erlöse in derselben Fremdwährung könnten eine natürliche Gegenposition bilden. Für den tatsächlichen Schutz müssen aber Höhe, Zeitpunkt und Verlässlichkeit dieser Erlöse passen.'
  ],'Wechselkursflexibilität auf gesamtwirtschaftlicher Ebene kann gleichzeitig bilanzielle Risiken einzelner Schuldner erhöhen.')
 ]),
 S('capital-controls','11. Ziele und Kosten von Kapitalverkehrsbeschränkungen','c',[
  T(['Mögliches Ziel','Beispiel eines Ansatzes','Mögliche Kosten oder Grenzen'],[
   ['Volatile kurzfristige Zuflüsse begrenzen','Anforderungen an Laufzeit, Reservehaltung oder bestimmte grenzüberschreitende Finanzierungen.','Finanzierung kann teurer werden; Wirksamkeit hängt von Gestaltung und Vollzug ab.'],
   ['Währungs- und Verschuldungsrisiken reduzieren','Begrenzung bestimmter Fremdwährungsverpflichtungen oder riskanter Zuflussstrukturen.','Ein sinnvolles Investitionsprojekt kann ebenfalls betroffen sein.'],
   ['Akuten Abflussdruck bremsen','Zeitweilige Beschränkung bestimmter Auslandsübertragungen.','Bindet Investoren, kann Vertrauen und künftige Mittelzuflüsse belasten.'],
   ['Mehr Raum für eigene Politik schaffen','Begrenzung besonders mobiler grenzüberschreitender Positionen.','Keine vollständige Unabhängigkeit von Inflation, Finanzierung und Erwartungen.']
  ],'Die Tabelle beschreibt Ziele, nicht garantierte Erfolge oder eine konkrete geltende nationale Regel.'),
  'Zufluss- und Abflussbeschränkungen sind zu unterscheiden. Ebenso kann eine makroprudenzielle Maßnahme auf Finanzstabilität zielen, ohne jede grenzüberschreitende Bewegung zu verbieten. Die genaue Einordnung hängt vom Zweck und Design ab.',
  'Eine Beschränkung kann in bestimmten Situationen zusätzliche Zeit oder Schutz bieten, ersetzt aber nicht automatisch erforderliche makroökonomische oder bilanzielle Anpassung. Für Anleger zählen neben erwarteter Rendite auch zulässiger Zugang, Haltefristen, Transferierbarkeit und verlässliche Abwicklung.'
 ]),
 S('workflow','12. Ein systematischer Weg durch Devisenfragen','a b c',[
  T(['Schritt','Kontrolle'],[
   ['Notierung','Welche Währung ist der Nenner der Preiseinheit, und welche Wertänderung wird gefragt?'],
   ['Instrument und Zeitpunkt','Kassa oder Termin, tatsächlicher Geldbetrag oder Index, passender Zeitraum?'],
   ['Nominal oder real','Sind relative Preise einzubeziehen und in welche Richtung ist der Index definiert?'],
   ['Regime','Kann der Kurs frei reagieren, oder bestehen Bindung, Intervention und Kapitalbeschränkungen?'],
   ['Wirkungskanal','Geht es um Güterpreise, Absatzmengen, Finanzierung, Währungsbilanz oder Repatriierung?']
  ],'Rechnung und wirtschaftliche Deutung werden nacheinander geprüft.'),
  'Die häufigsten Fehler sind vertauschte Einheiten, symmetrisch angenommene Prozentänderungen, die Gleichsetzung eines Forwardpreises mit einer Prognose und die Annahme einer automatisch verbesserten Handelsbilanz nach Abwertung. Die folgenden Rechenkapitel vertiefen ausführbare Kreuzkurse und gedeckte Zinsparität.'
 ])
],related:[{unit:'monetary',section:'targets',label:'Wechselkursbindung und geldpolitische Ziele'},{unit:'monetary',section:'transmission',label:'Währungsbewegung als Übertragungskanal'},{unit:'trade',section:'gains-costs',label:'Handelsvorteile von Verteilungsfolgen unterscheiden'},{unit:'cycles',section:'leverage',label:'Hebel und Bilanzverluste'},{unit:'tvm',section:'fx-forward',label:'Erste Herleitung eines Devisenterminkurses'}],
 sources:[
 {title:'CFA Institute: Lernzielkatalog Level I 2027',url:'https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf#page=6'},
 {title:'CFA Institute: Capital Flows and the FX Market',url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/capital-flows-and-the-fx-market'},
 {title:'IMF: Real Exchange Rates — What Money Can Buy',url:'https://www.imf.org/en/publications/fandd/issues/series/back-to-basics/real-exchange-rates'},
 {title:'IMF: Capital Flows',url:'https://www.imf.org/en/topics/capital-flows'},
 {title:'IMF: Guidance on Liberalization and Management of Capital Flows',url:'https://www.imf.org/en/publications/policy-papers/issues/2023/12/11/guidance-note-on-the-liberalization-and-management-of-capital-flows-542289'}
 ],review:{status:'draft',date:'2026-09-24',note:'Notierungsrichtung, reale Preisrelationen und Mengenreaktionen ausdrücklich definiert; eigene Umrechnungs-, Handelsbilanz- und Fremdwährungsbilanzfälle.'}};
