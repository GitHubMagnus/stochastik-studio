const R=require('./schema.cjs');
module.exports=[
R('Preise koordinieren Knappheit und Nachfrage',`Eine Nachfragekurve zeigt, welche Menge Käufer bei unterschiedlichen Preisen nachfragen, wenn andere Einflüsse konstant bleiben. Eine Preiserhöhung bewegt entlang der Kurve. Höheres Einkommen, veränderte Präferenzen oder Substitute verschieben sie. Dasselbe unterscheidet man beim Angebot zwischen Preisreaktion und Änderungen der Produktionsbedingungen.

Elastizität misst relative statt absolute Reaktionen. Ihre Einheit ist daher unabhängig davon, ob Mengen in Stück oder Tausend Stück angegeben werden. Bei preiselastischer Nachfrage sinkt die Menge prozentual stärker als der Preis steigt; der Umsatz kann dann trotz höherem Stückpreis fallen.`,
'Eine Nachfragefunktion lautet Q=100−2P. Der Ausgangspreis ist P=20.',[
'Q=100−2×20=60; Umsatz 20×60=1.200.|Preis und Menge bestimmen gemeinsam den Umsatz.',
'Punktelastizität: (−2)×20/60=−0,667.|Ein kleiner Preisanstieg um 1 % senkt die Menge lokal um etwa 0,667 %.',
'Bei P=21 fällt Q auf 58; Umsatz 21×58=1.218.|Die Preissteigerung überwiegt hier den Mengenverlust. Die lokale Elastizität verändert sich entlang der linearen Kurve.'
],'Elastizität hilft bei Umsatzprognosen, Preisentscheidungen und der Bewertung von Steuerwirkungen.','Punktelastizitäten sind lokale Näherungen. Wettbewerbsreaktionen und Einkommensänderungen können die ganze Kurve verschieben.','Umsatzmodelle übertragen Preis und Menge in Unternehmenscashflows; Grenzerlös verbindet Nachfrage mit Gewinnmaximierung.'),
R('Entscheidend sind zusätzliche Erlöse und zusätzliche Kosten',`Fixkosten entstehen im relevanten Bereich unabhängig von der aktuellen Menge; variable Kosten verändern sich mit der Produktion. Grenzkosten sind die zusätzlichen Kosten einer weiteren Einheit. Durchschnittskosten teilen dagegen die gesamten Kosten durch die produzierte Menge.

Ein inneres Gewinnmaximum erfüllt Grenzerlös gleich Grenzkosten, wenn die Gewinnfunktion dort tatsächlich ein Maximum besitzt. Versunkene Kosten beeinflussen die gegenwärtige Entscheidung nicht. Kurzfristig kann Produktion trotz Gesamtverlust sinnvoll sein, wenn Erlöse vermeidbare Kosten decken und damit einen Beitrag zu ohnehin anfallenden Fixkosten leisten.`,
'Ein Preisnehmer verkauft zu 10 € je Einheit. Kostenfunktion: C(Q)=100+2Q+Q².',[
'Grenzerlös MR=10; Grenzkosten MC=2+2Q.|Der feste Betrag 100 verschwindet beim Ableiten, weil eine weitere Einheit ihn nicht verändert.',
'10=2+2Q ergibt Q=4.|Bei weniger Menge übersteigt zusätzlicher Erlös zusätzliche Kosten; danach kehrt sich das Verhältnis um.',
'Erlös 40, Kosten 124, Gewinn −84.|Stilllegung hätte kurzfristig −100 Fixkosten verursacht. Produktion verbessert das Ergebnis um 16, obwohl sie den Gesamtverlust nicht beseitigt.'
],'Anwendbar auf Kapazitätsauslastung, Stilllegungsentscheidungen und die Interpretation operativer Margen.','Langfristig sind mehr Kosten vermeidbar. Sprungfixkosten, Kapazitätsgrenzen und nicht differenzierbare Kosten verlangen Fallvergleiche.','Operativer Hebel erklärt die Gewinnsensitivität bei Fixkosten; reale Optionen bewerten Aufschub und Stilllegung.'),
R('Marktmacht verändert den Zusammenhang zwischen Preis und Grenzerlös',`Im vollständigen Wettbewerb kann die einzelne kleine Firma den Marktpreis nicht wesentlich beeinflussen. Ein Anbieter mit Marktmacht muss dagegen häufig den Preis reduzieren, um mehr zu verkaufen. Bei einheitlichem Preis betrifft die Senkung auch bereits verkaufte Einheiten; deshalb liegt Grenzerlös unter Preis.

Monopol, monopolistische Konkurrenz und Oligopol unterscheiden sich durch Eintrittsbarrieren, Produktdifferenzierung und strategische Abhängigkeit. Marktmacht garantiert keine hohen Renditen, wenn Kosten hoch sind oder Regulierung, neue Technologie und Substitute die Position angreifen.`,
'Inverse Nachfrage P=50−Q; konstante Grenzkosten 10; keine Fixkosten.',[
'Umsatz TR=(50−Q)Q=50Q−Q²; MR=50−2Q.|Die zusätzliche Einheit benötigt einen niedrigeren Preis für alle Einheiten.',
'MR=MC: 50−2Q=10 ergibt Q=20 und P=30.|Der gewinnmaximierende Preis liegt hier über Grenzkosten.',
'Gewinn=(30−10)×20=400.|Der Preisaufschlag ist Ergebnis der Nachfrage- und Kostenbedingungen, nicht ein beliebig wählbarer Prozentsatz.'
],'Branchenanalyse nutzt diese Mechanik zur Beurteilung nachhaltiger Margen und Eintrittsbarrieren.','Reale Oligopole reagieren strategisch; ein isoliertes Monopolmodell erfasst Preiswettbewerb und Innovation nur begrenzt.','Wettbewerbsposition beeinflusst ROIC, Wachstum und den Terminal Value.'),
R('Wachstum kann aus mehr Einsatz oder höherer Produktivität entstehen',`Reales BIP misst den Wert der Produktion bereinigt um Preisänderungen. Nominales BIP vermischt Mengen und Preise. Langfristiges Wachstum lässt sich gedanklich auf Kapital, Arbeit und Produktivität aufteilen. Produktivität beschreibt, wie wirksam Inputs kombiniert werden.

Eine Cobb-Douglas-Funktion mit Exponenten zwischen null und eins bildet abnehmende Grenzerträge einzelner Inputs ab. Mehr Kapital erhöht Produktion, aber bei unveränderter Arbeit immer weniger stark. Logarithmieren und Differenzieren ergibt eine näherungsweise additive Wachstumszerlegung.`,
'Kapital wächst um 4 %, Arbeit um 1 %, Produktivität um 2 %. Kapitalanteil α=0,3.',[
'Kapitalbeitrag: 0,3×4 %=1,2 Prozentpunkte.|Kapitalwachstum wird mit seinem modellierten Produktionsgewicht bewertet.',
'Arbeitsbeitrag: 0,7×1 %=0,7 Prozentpunkte.|Der verbleibende Anteil entfällt auf Arbeit.',
'Gesamtwachstum näherungsweise 2+1,2+0,7=3,9 %.|Produktivität hebt das Ergebnis zusätzlich zu den eingesetzten Mengen. Die Zerlegung ist eine lokale Näherung.'
],'Dient langfristigen Umsatz-, Staatsfinanz- und Kapitalmarktannahmen.','Produktivität ist oft ein statistischer Rest. Messfehler und Veränderungen der Auslastung können fälschlich als technischer Fortschritt erscheinen.','Langfristige Gewinnprognosen dürfen nicht beliebig schneller wachsen als ihre wirtschaftliche Grundlage.'),
R('Konjunktur ist die Abweichung vom nachhaltigen Produktionspfad',`Eine Wirtschaft kann zeitweise unter oder über ihrer geschätzten Kapazität produzieren. Die Produktionslücke setzt tatsächliche Leistung zum Produktionspotenzial ins Verhältnis. Auslastung beeinflusst Beschäftigung, Löhne, Preise und Gewinnmargen.

Frühindikatoren sollen Wendepunkte vorwegnehmen, gleichlaufende Indikatoren den aktuellen Zustand und nachlaufende Indikatoren vergangene Entwicklungen bestätigen. Kein Indikator ist fehlerfrei. Finanzmärkte reagieren außerdem auf Abweichungen von Erwartungen, nicht nur auf gute oder schlechte absolute Werte.`,
'Reale Produktion 980, geschätztes Potenzial 1.000. Im nächsten Jahr steigt Produktion auf 1.020 und Potenzial auf 1.030.',[
'Ausgangslücke: (980−1.000)/1.000=−2 %.|Die Wirtschaft produziert unter ihrem geschätzten Potenzial.',
'Neue Lücke: (1.020−1.030)/1.030=−0,97 %.|Die Auslastung verbessert sich, obwohl die Lücke weiterhin negativ ist.',
'Tatsächliches Wachstum: 1.020/980−1=4,08 %.|Hohe Wachstumsrate bedeutet hier teilweise Aufholung und nicht automatisch eine dauerhaft höhere Potenzialrate.'
],'Hilft bei zyklischen Branchen, Kreditrisiken und Szenarioprognosen.','Potenzial ist nicht direkt beobachtbar und wird revidiert. Echtzeitdaten können spätere Schlussfolgerungen verändern.','Operativer Hebel verstärkt Konjunkturwirkungen auf Gewinne; Geldpolitik reagiert auf Aktivität und Inflation.'),
R('Nominale Rendite misst Geld, reale Rendite Kaufkraft',`Inflation erhöht das Preisniveau eines definierten Warenkorbs. Sie ist von relativen Preisänderungen einzelner Güter zu unterscheiden. Ein nominaler Anlagegewinn erhöht den Geldbetrag; real zählt, welche Menge an Gütern damit erworben werden kann.

Die exakte Fisher-Umrechnung teilt den nominalen Wachstumsfaktor durch den Preiswachstumsfaktor. Die einfache Subtraktion von Inflation ist bei kleinen Raten eine Näherung. Erwartete Inflation ist für Ex-ante-Entscheidungen relevant, tatsächlich eingetretene Inflation für die nachträgliche Kaufkraftrechnung.`,
'Eine Anlage wächst von 1.000 auf 1.080 €. Der maßgebliche Warenkorb verteuert sich um 5 %.',[
'Nominaler Faktor: 1.080/1.000=1,08.|Das entspricht 8 % nominaler Rendite.',
'Realer Faktor: 1,08/1,05=1,028571.|Der höhere Geldbetrag wird durch das gestiegene Preisniveau geteilt.',
'Reale Rendite: 2,857 %, näherungsweise 8−5=3 %.|Die Differenz zeigt den Effekt der exakten multiplikativen Umrechnung.'
],'Relevant für Kaufkrafterhalt, reale Anleiherenditen, Gehalts- und Ruhestandsplanung.','Persönliche Inflation kann vom allgemeinen Index abweichen. Steuern werden häufig auf nominale Erträge erhoben und reduzieren reale Ergebnisse zusätzlich.','Reale Cashflows benötigen reale Diskontsätze; Asset-Liability-Management berücksichtigt inflationsabhängige Verpflichtungen.'),
R('Geldpolitik wirkt über mehrere Übertragungskanäle',`Zentralbanken beeinflussen kurzfristige Finanzierungskonditionen und Erwartungen. Höhere Zinsen verteuern neue Kredite, erhöhen Opportunitätskosten des Konsums und können Vermögenspreise durch höhere Diskontsätze belasten. Wechselkurse und Bankkreditbedingungen übertragen zusätzliche Wirkungen.

Die Reaktion ist weder sofort noch mechanisch. Entscheidend sind erwartete Realzinsen, Verschuldung, Laufzeiten bestehender Verträge und Glaubwürdigkeit. Langfristige Zinsen können nach einer kurzfristigen Anhebung sogar fallen, wenn der Markt dadurch weniger zukünftige Inflation erwartet.`,
'Der Nominalzins steigt von 4 % auf 5 %. Erwartete Inflation sinkt gleichzeitig von 3 % auf 2 %.',[
'Alter erwarteter Realzins näherungsweise 4−3=1 %.|Der relevante Kaufkraftpreis des Wartens lag unter dem Nominalzins.',
'Neuer erwarteter Realzins näherungsweise 5−2=3 %.|Sowohl der Zinsanstieg als auch die niedrigere Inflationserwartung straffen reale Bedingungen.',
'Reale Straffung etwa 2 Prozentpunkte.|Ein Vergleich allein der Leitzinsen hätte nur einen Prozentpunkt erfasst.'
],'Hilft bei Zins-, Währungs- und Konjunkturszenarien sowie der Bewertung zinssensitiver Unternehmen.','Erwartungen sind schwer messbar; globale Kapitalströme, Kreditspreads und verzögerte Wirkungen können den einfachen Kanal überlagern.','Barwertbewertung erklärt den Vermögenspreiskanal; Kapitalstruktur erklärt die Belastung variabel verzinster Schuldner.'),
R('Schuldenquoten hängen auch vom Nenner ab',`Die Staatsverschuldungsquote teilt Schulden durch Wirtschaftsleistung. Sie steigt durch Zinsen und Primärdefizite, kann aber durch Wachstum des nominalen BIP sinken. Ein Primärsaldo schließt Zinszahlungen aus und zeigt die laufende Haushaltspolitik vor Altlasten.

Die Näherung Δd≈(r−g)d−s verwendet zueinander passende Zins- und Wachstumsgrößen sowie einen Primärüberschuss s relativ zum BIP. Ob Schulden tragfähig sind, hängt außerdem von Laufzeit, Währung, Steuerbasis, Institutionen und Refinanzierungszugang ab.`,
'Schuldenquote 80 %, nominaler Durchschnittszins 4 %, nominales Wachstum 3 %, Primärüberschuss 1 % des BIP.',[
'Zins-Wachstums-Differenz: 4−3=1 Prozentpunkt.|Bestehende Schulden wachsen dadurch tendenziell schneller als der Nenner.',
'Beitrag zur Quote: 0,01×0,80=0,008, also 0,8 Prozentpunkte.|Die Differenz wirkt auf den vorhandenen Schuldenbestand.',
'Δd≈0,8−1,0=−0,2 Prozentpunkte.|Der Primärüberschuss überkompensiert im Näherungsmodell den ungünstigen Zins-Wachstums-Effekt.'
],'Anwendbar auf Staatskreditanalyse und fiskalische Szenarien.','Die Formel ist approximativ; Bewertungsänderungen, Fremdwährungsschulden und Eventualverbindlichkeiten können große zusätzliche Effekte erzeugen.','Staatsrisiko beeinflusst Anleiherenditen, Bankbilanzen und die vermeintlich risikofreie Diskontierungsbasis.'),
R('Außenwirtschaftliche Salden verbinden Sparen und Investieren',`Eine Volkswirtschaft kann mehr investieren, als sie selbst spart, wenn ausländisches Kapital die Differenz finanziert. In einer vereinfachten gesamtwirtschaftlichen Rechnung entspricht der Leistungsbilanzsaldo Ersparnis minus Investitionen. Ein Defizit ist daher nicht automatisch schlecht; entscheidend ist, wofür die Finanzierung verwendet wird und ob spätere Ansprüche tragbar sind.

Zahlungsbilanzpositionen müssen mit ihrer jeweiligen Vorzeichenkonvention gelesen werden. Güterhandel allein erklärt nicht den gesamten Leistungsbilanzsaldo: Dienstleistungen und grenzüberschreitende Einkommensströme spielen ebenfalls eine Rolle.`,
'Eine Volkswirtschaft spart 200 Mrd. € und investiert 250 Mrd. €.',[
'200−250=−50 Mrd. € Leistungsbilanzsaldo im vereinfachten Modell.|Die heimische Ersparnis deckt die Investitionen nicht vollständig.',
'Die Differenz benötigt Nettofinanzierung aus dem Ausland.|Daraus entstehen künftige Zahlungen oder Eigentumsansprüche gegenüber ausländischen Kapitalgebern.',
'Produktivität und Laufzeit der finanzierten Projekte prüfen.|Investitionen mit späteren Exporterlösen sind anders zu beurteilen als kurzfristiger Konsum mit unsicherer Refinanzierung.'
],'Nützlich für Länderanalyse, Währungsrisiken und internationale Kapitalmarktannahmen.','Aggregierte Salden zeigen nicht Verteilung und Qualität einzelner Ansprüche. Statistische Abgrenzungen und Bewertungsänderungen sind zusätzlich relevant.','Wechselkurse passen relative Preise an; Länder-Kreditanalyse untersucht die Nachhaltigkeit externer Finanzierung.'),
R('Währungsrendite und Anlagenrendite wirken gemeinsam',`Eine ausländische Anlage besitzt für den heimischen Investor zwei Preisdimensionen: den lokalen Wert und den Umrechnungskurs. Der Gesamtfaktor ist das Produkt beider Veränderungen. Die Währungsnotierung muss eindeutig sein: In dieser Rechnung ist der Kurs die Menge Heimatwährung je Einheit Fremdwährung.

Ein steigender solcher Kurs bedeutet, dass die Fremdwährung gegenüber der Heimatwährung aufwertet. Bei umgekehrter Notierung kehrt sich die Interpretation um. Übliche Handelspaare und beschreibende Einheiten können unterschiedlich gelesen werden; deshalb immer ausdrücklich etwa „EUR je USD“ hinschreiben.`,
'Eine US-Anlage steigt von 100 auf 110 USD. Der Europreis eines Dollars fällt von 0,90 auf 0,81 EUR je USD.',[
'Anfangswert: 100×0,90=90 €; Endwert: 110×0,81=89,10 €.|Beide Zeitpunkte werden mit ihrem jeweiligen Kurs umgerechnet.',
'Lokale Rendite +10 %, Währungsrendite −10 %.|Der lokale Gewinn und die Dollarabwertung beziehen sich auf verschiedene Faktoren.',
'Heimatrendite: 1,10×0,90−1=−1 %.|Einfaches Addieren hätte null ergeben und den Kreuzterm von −1 Prozentpunkt vergessen.'
],'Unverzichtbar für Auslandsanlagen, internationale Benchmarks und Konzernanalyse.','Die Rechnung unterstellt keine weiteren Cashflows und ignoriert Umtauschkosten. Ein Währungshedge verändert das Zahlungsprofil.','Währungsforwards sichern künftige Umrechnung; Performance Attribution kann Anlagen- und Währungseffekte trennen.'),
R('Terminwechselkurse entstehen aus zwei Finanzierungswegen',`Bei gedeckter Zinsparität werden zwei sichere Wege zum selben späteren Währungsbetrag verglichen. Man kann heute die Fremdwährung kaufen und dort verzinsen oder in Heimatwährung anlegen und den Umtausch per Forward festlegen. Ohne Kosten und bei vergleichbaren Kreditbedingungen dürfen die Wege keinen freien Mehrertrag erlauben.

Die Zinsdifferenz erklärt deshalb den Forwardkurs unter diesen Annahmen. Sie ist keine sichere Prognose des späteren Spotkurses. Ein nicht abgesicherter Carry Trade verzichtet gerade auf die Fixierung des künftigen Wechselkurses und trägt deshalb Abwertungsrisiko.`,
'Spot 0,90 EUR je USD, Eurozins 2 %, Dollarzins 4 %, Laufzeit ein Jahr.',[
'Ein Dollar heute wird in einem Jahr zu 1,04 USD; sein heutiger Europreis ist 0,90 €.|Das ist der fremdwährungsfinanzierte Vergleichspfad.',
'0,90 € wachsen alternativ auf 0,918 €.|Beide Pfade beginnen mit demselben heutigen Wert.',
'Fairer Forward: 0,918/1,04=0,88269 EUR je USD.|Zu diesem Umrechnungskurs besitzen die abgesicherten Endbeträge denselben Wert.'
],'Wird zur Bewertung von Währungsforwards und zur Analyse abgesicherter Auslandsrenditen verwendet.','Fundingkosten, Besicherung und Cross-Currency-Basis führen zu Abweichungen vom einfachen Modell. Ungedeckte Zinsparität benötigt zusätzlich eine Erwartungshypothese.','Arbitragefreiheit und Replikation sind dieselben Prinzipien wie bei Aktienforwards und Optionsbewertung.'),
R('Politische Risiken über konkrete Werttreiber modellieren',`Geopolitische Ereignisse beeinflussen Handel, Energie, Eigentumsrechte, Finanzierung und Lieferketten. Eine Länderbezeichnung allein beschreibt diese Exposition nicht. Ein Unternehmen mit Heimatstandort in einem stabilen Land kann den Großteil seiner Produktion in einem gefährdeten Markt haben.

Szenarioanalyse übersetzt Ereignisse in Mengen, Preise, Kosten und Diskontsätze. Die Abhängigkeit zwischen Annahmen muss beachtet werden: Ein Nachfragerückgang kann zugleich Wechselkurs, Finanzierung und Lagerhaltung verändern. Eine gewichtete Szenariobewertung ist nur dann probabilistisch interpretierbar, wenn die Gewichte als begründete Wahrscheinlichkeiten gelten.`,
'Ein Unternehmen erzielt 100 Mio. € Umsatz, davon 40 Mio. € in einem gefährdeten Exportmarkt. Dort sinkt Absatz im Stress um 25 %; Preise bleiben gleich.',[
'Umsatzverlust im Markt: 40×0,25=10 Mio. €.|Die 25 % betreffen nur den exponierten Anteil.',
'Gesamtumsatz: 100−10=90 Mio. €, also −10 %.|Die Gewichtung übersetzt ein lokales Ereignis in den Konzern.',
'Bei 40 % Deckungsbeitragsmarge sinkt der Beitrag um 4 Mio. € vor Gegenmaßnahmen.|Gewinnwirkung hängt von vermeidbaren Kosten ab; sie ist nicht gleich dem Umsatzverlust.'
],'Geeignet für Unternehmens-, Länder- und Portfoliostresstests.','Enteignung, Marktschließung und Kapitalverkehrskontrollen können sprunghafte Effekte erzeugen. Historische Volatilität erfasst sie nur unvollständig.','Operativer Hebel erklärt die Margenwirkung; Liquiditätsmanagement behandelt den möglichen Finanzierungsschock.')
];
