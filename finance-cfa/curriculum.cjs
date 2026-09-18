// Own short study labels. References point to the ordered objectives in the
// official 2027 outline; the copyrighted curriculum text is not reproduced.
const source='https://www.cfainstitute.org/sites/default/files/2027levelitopicoutline_online.pdf';
const topics=[
 ['ethics','Ethics & Professional Standards',10,15,1,22],
 ['quant','Quantitative Methods',11,14,1,22],
 ['economics','Economics',6,9,1,12],
 ['statements','Financial Statement Analysis',11,14,1,22],
 ['corporate','Corporate Finance',6,9,1,12],
 ['equity','Equities',11,14,2,22],
 ['bonds','Fixed Income',11,14,2,22],
 ['derivatives','Derivatives & Risk Management',6,9,2,13],
 ['alternatives','Alternative Investments',6,9,2,13],
 ['portfolio','Portfolio Construction',8,12,2,20]
].map(([id,title,min,max,session,questions])=>({id,title,min,max,session,questions}));
const modules=[];
function M(topic,key,title,lessons,page,labels){
 const ordinal=modules.filter(m=>m.topic===topic).length+1;
 modules.push({id:key,topic,title,lessons:lessons.split(' '),page,ordinal,
  source:source+'#page='+page,
  objectives:labels.split('|').map((label,i)=>({id:key+'-'+String.fromCharCode(97+i),label,letter:String.fromCharCode(97+i)}))});
}
M('quant','returns','Rendite und Renditeforderung','quant-01 quant-03',1,'Renditebegriffe|Zinsbausteine und Kaufkraft');
M('quant','return-types','Renditekonventionen sicher umrechnen','quant-03 start-04',1,'Renditen berechnen und passend vergleichen');
M('quant','benchmarks','Performance und Indexrechnung','quant-04 equity-03',1,'Zeit- und geldgewichtete Rendite|Indexregeln und Indexwerte');
M('quant','tvm','Zahlungsströme bewerten','quant-01 quant-02 bonds-05 equity-08',1,'Barwerte von Ansprüchen|Implizite Rendite und Wachstum|Additivität und Replikation');
M('quant','return-statistics','Renditeverteilungen beschreiben','quant-05 portfolio-01',2,'Lage und Streuung|Schiefe und Wölbung|Kovarianz und Korrelation|Semideviation und Variationskoeffizient');
M('quant','distributions','Zufall, Verteilungen und Bayes','quant-06 quant-07',2,'Unbedingte Momente|Verteilungsmodelle|Bedingte Momente|Bayes im Anlagefall');
M('quant','inference','Schätzen und Hypothesen prüfen','quant-07 quant-08 quant-10',2,'Stichproben und Intervalle|Testentscheidung und Fehlerarten|Parametrische und rangbasierte Verfahren');
M('quant','portfolio-math','Portfoliorechnung und optimale Mischung','portfolio-01 portfolio-02 portfolio-03 quant-13',2,'Portfoliomomente|Minimumvarianz und Effizienz|Risikoaversion und Kapitalallokation');
M('quant','simulation','Simulation richtig einsetzen','quant-12',2,'Historische Simulation|Bootstrap|Monte Carlo');
M('quant','regression','Regression für Finanzfragen','quant-09 quant-10 portfolio-04',3,'OLS und Koeffizienten|Annahmen, ANOVA und Modellgüte|Prognosen und funktionale Formen|CAPM-Schätzung');
M('quant','data-science','Datenwissenschaft im Investmentprozess','quant-14',3,'Big Data, maschinelles Lernen und KI');
M('economics','market-structures','Kosten, Wettbewerb und Marktmacht','economics-02 economics-03',5,'Betriebs- und Gewinnschwelle|Marktformen|Monopolistische Konkurrenz|Strategische Oligopolentscheidungen|Konzentration messen');
M('economics','cycles','Konjunktur und Kreditzyklus','economics-05',5,'Konjunkturphasen|Kreditzyklus|Indikatoren und Sektoren');
M('economics','fiscal','Fiskalpolitik beurteilen','economics-08',6,'Abgrenzung zur Geldpolitik|Staatsschuld und Ziele|Instrumente und Zielkonflikte|Umsetzung und Politikrichtung');
M('economics','monetary','Geldpolitik und Transmission','economics-07',6,'Zentralbankaufgaben|Instrumente und Wirkungsketten|Glaubwürdigkeit, Zielsysteme und Grenzen|Zusammenspiel mit Fiskalpolitik');
M('economics','geopolitics','Geopolitik für Anlageentscheidungen','economics-12',6,'Kooperation und Wettbewerb|Globalisierung|Internationale Institutionen|Geopolitische Risiken|Politische Instrumente|Anlagefolgen');
M('economics','trade','Handel und Handelshemmnisse','economics-09',6,'Handelsgewinne und Verteilung|Zoll, Quote und Subvention|Integrationsstufen');
M('economics','fx-markets','Währungen und Kapitalverkehr','economics-10 economics-11',6,'FX-Markt und reale Wechselkurse|Wechselkursregime|Kapitalverkehrskontrollen');
M('economics','fx-calculation','Kreuzkurse und Terminkurse','economics-10 economics-11',7,'Cross Rates|Zinsparität und Forward Points');
M('corporate','issuer-forms','Unternehmensformen und Eigentum','corporate-01',9,'Rechtsformen|Emittenteneigenschaften|Börsennotierung und privates Eigentum');
M('corporate','stakeholders','Ansprüche und Interessengruppen','corporate-01 corporate-02',9,'Gläubiger und Eigentümer|Stakeholderkonflikte|ESG-Faktoren');
M('corporate','governance','Unternehmensführung und Kontrolle','corporate-02',9,'Prinzipal und Agent|Kontrollmechanismen|Governancefolgen');
M('corporate','working-capital','Betriebskapital und Zahlungsfähigkeit','corporate-08',10,'Cash Conversion Cycle|Liquiditätsbeurteilung|Steuerung kurzfristiger Mittel');
M('corporate','capital-allocation','Investitionen auswählen','corporate-04 corporate-05',10,'Investitionsarten|NPV, IRR und ROIC|Entscheidungsprinzipien und Fehler|Reale Optionen');
M('corporate','capital-structure','Finanzierung und Kapitalkosten','corporate-06 corporate-07',10,'WACC rechnen|Treiber der Finanzierungskosten|Modigliani–Miller|Zielstruktur');
M('corporate','business-models','Wie Unternehmen Geld verdienen','corporate-03',10,'Geschäftsmodellbausteine|Geschäftsmodelltypen');
M('statements','analysis-framework','Abschlüsse systematisch untersuchen','statements-01 statements-02',11,'Analyseprozess|Analysezweck|Berichtsteile und Prüfungsurteil|Regelwerke und Änderungen|Weitere Informationsquellen');
M('statements','income-statement','Erfolg, Abgrenzung und EPS','statements-04 statements-09 statements-12',11,'Umsatzrealisierung|Aufwand und Aktivierung|Sondereffekte und Methodenwechsel|Basic und Diluted EPS|Strukturquoten der GuV');
M('statements','balance-sheet','Bilanzpositionen und Vergleichbarkeit','statements-01 statements-06 statements-10',12,'Immaterielle Werte|Goodwill|Finanzinstrumente|Langfristige Verpflichtungen|Bilanzstrukturquoten');
M('statements','cashflow-preparation','Cashflowrechnung aufstellen','statements-02 statements-03',12,'Abschlussverknüpfung|Direkte und indirekte Methode|Methodenüberleitung|IFRS und US GAAP');
M('statements','cashflow-analysis','Cashflows analysieren','statements-13 equity-09',12,'Cashflowstruktur|FCFF, FCFE und Cashflowkennzahlen');
M('statements','inventory','Vorräte bewerten und vergleichen','statements-05 statements-03',12,'Niederstwert und Nettoveräußerungswert|Preisänderungen und Verbrauchsfolgen|Vorratsangaben analysieren');
M('statements','long-assets','Langfristige Vermögenswerte','statements-06',12,'Herkunft immaterieller Werte|Wertminderung und Abgang|Anlagenspiegel und Angaben');
M('statements','leases-compensation','Leasing, Pensionen und Vergütung','statements-07 statements-09',13,'Leasing bei beiden Vertragsparteien|Pensions- und Vergütungspläne|Ausweis und Angaben');
M('statements','income-taxes','Steueraufwand und latente Steuern','statements-08',13,'Gewinn- und Steuerbegriffe|Latente Ansprüche und Schulden|Steuerquoten|Steuerüberleitung');
M('statements','reporting-quality','Bilanzierungsqualität erkennen','statements-13',13,'Berichtsqualität und Ergebnisqualität|Qualitätsspektrum|Konservative und aggressive Wahl|Anreize und Bedingungen|Kontrolle und Grenzen|Bereinigte Kennzahlen|Ergebnissteuerung|Warnsignale');
M('statements','ratios','Kennzahlen als zusammenhängendes System','statements-12 corporate-08',13,'Analysewerkzeuge|Kennzahlen rechnen|Ursachen und Wechselwirkungen|DuPont in drei und fünf Faktoren|Branchenkennzahlen|Kennzahlen in Prognosen');
M('statements','forecasting','Integriertes Abschlussmodell','statements-15 equity-05',14,'Umsatzbasiertes Modell|Prognoseverzerrungen|Wettbewerb und Kosten|Preis- und Mengenprognose|Detailphase und Endphase');
M('equity','equity-features','Aktien als Eigentumsansprüche','equity-01',15,'Aktientypen|Öffentliche und private Beteiligungen');
M('equity','voting','Stimmrechte und Abstimmung','equity-01 corporate-02',15,'Rechte nach Aktienklasse und Rechtsordnung|Rollen im Abstimmungsprozess');
M('equity','equity-trading','Emission, Handel und Liquidität','equity-02 equity-03',15,'Primär- und Sekundärmarkt|Handelsplätze|Free Float und Handelsvolumen|Aktienindexarten');
M('equity','equity-returns','Ausschüttungen und Gesamtrendite','corporate-09 quant-03',16,'Dividenden, Rückkäufe und Splits|Dividendentermine|Kurs- und Gesamtrendite');
M('equity','valuation-overview','Preis und fundamentaler Wert','equity-08 equity-10 equity-11',16,'Preis gegen Wert|Buchwert, Marktwert und Enterprise Value|Bewertungsverfahren auswählen');
M('equity','dcf-equity','Cashflows und Wachstum bewerten','equity-08 equity-09 equity-11',16,'DDM, FCFE, FCFF und Residualgewinn|Konstantes und mehrstufiges Wachstum|Wachstumsannahmen prüfen|Vorzugsaktien');
M('equity','multiples','Relative Bewertung','equity-10',16,'Vergleich und fundamentale Multiplikatoren|Preis- und Unternehmenswertmultiplikatoren|Vergleichsgruppe|Historische und zukünftige Basis');
M('equity','valuation-model','Vom Abschlussmodell zum Aktienwert','statements-15 equity-09',16,'Modellkonstruktion und Zweck|Unternehmensgerechte Modellwahl|Bewertung aus Modellzahlen');
M('equity','industry','Branche und Wettbewerb','equity-04',17,'Analyseablauf|Klassifikation|Marktgröße und Anteile|Five Forces und PESTLE');
M('equity','company','Unternehmen und Werttreiber','equity-05 corporate-03',17,'Wettbewerbsposition|Umsatz, Marge und Preissetzung|Kapitalbindung und Finanzierung');
M('equity','research','Research verständlich begründen','equity-07',17,'Berichtsbestandteile|Buy Side und Sell Side|Annahmen und Wertbandbreite');
M('equity','equity-factors','Eigenkapitalrendite und Faktoren','equity-06 portfolio-04 portfolio-05',17,'CAPM und Marktmodell|APT und Mehrfaktormodelle');
M('bonds','bond-features','Anleihevertrag und Schutzrechte','bonds-01',19,'Vertragsmerkmale|Covenants');
M('bonds','bond-cashflows','Zahlungsstruktur und Vertragsoptionen','bonds-01 bonds-03',19,'Zahlungspläne und Optionen|Recht, Steuern und Regulierung');
M('bonds','bond-trading','Emission und Anleihemärkte','bonds-04',19,'Marktsegmente|Anleiheindizes|Primär- und Sekundärhandel');
M('bonds','corporate-funding','Unternehmens- und Bankfinanzierung','bonds-02 bonds-12',20,'Kurzfristige Finanzierung|Repo|Investment Grade und High Yield');
M('bonds','government-funding','Finanzierung öffentlicher Emittenten','bonds-02',20,'Emittenten und Finanzierungswege|Emissions- und Handelsvergleich');
M('bonds','bond-prices','Anleihepreise auf und zwischen Kuponterminen','bonds-03 bonds-05',20,'Preisberechnung|Preis-Rendite-Zusammenhänge|Matrix Pricing');
M('bonds','fixed-yields','Renditekonventionen und Spreads','bonds-05 bonds-11',20,'Zahlungsfrequenz und Annualisierung|Rendite- und Spreadmaße');
M('bonds','floating-yields','Floater und Geldmarktrenditen','bonds-02 bonds-05',20,'Floater-Spreads|Geldmarktkonventionen');
M('bonds','yield-curves','Spot-, Par- und Forwardkurven','bonds-06',20,'Spotbewertung|Par und Forward umrechnen|Kurvenvergleich');
M('bonds','bond-return','Anlagehorizont und Anleiherendite','bonds-08 bonds-09',20,'Renditequellen|Horizont und Wiederanlage|Macaulay Duration');
M('bonds','duration','Zinssensitivität und DV01','bonds-08',21,'Modified und Money Duration, PVBP|Laufzeit, Kupon und Renditeniveau');
M('bonds','convexity','Konvexität und Portfoliorisiko','bonds-08',21,'Konvexität|Preisnäherung|Portfolioaggregation und Grenzen');
M('bonds','curve-risk','Kurvenrisiken und empirische Sensitivität','bonds-08 bonds-15',21,'Effektive Risikomaße|Preisänderung aus Kurvenschock|Key Rate Duration|Empirisch gegen analytisch');
M('bonds','credit-risk','Kreditrisiko und Spreads','bonds-10 bonds-11',21,'PD und LGD|Ratings|Spreadtreiber');
M('bonds','sovereign-credit','Bonität öffentlicher Schuldner','bonds-02 bonds-11',21,'Souveräne und nicht souveräne Bonität');
M('bonds','corporate-credit','Unternehmensbonität prüfen','bonds-10 bonds-11',21,'Qualitative und quantitative Faktoren|Kreditkennzahlen|Rang, Sicherheit und Rating');
M('bonds','securitization','Forderungen verbriefen','bonds-13',21,'Nutzen und Risiken|Parteien und Aufgaben');
M('bonds','abs','ABS und Kreditschutz','bonds-13',22,'Covered Bonds|Credit Enhancement|Nicht hypothekarische ABS|CDO');
M('bonds','mbs','Hypotheken und vorzeitige Tilgung','bonds-13 bonds-14',22,'Prepayment und Zeittranchierung|Hypothekenmerkmale|RMBS, Pass-through und CMO|CMBS');
M('derivatives','derivative-markets','Derivate und Marktorganisation','derivatives-01',23,'Instrumentmerkmale|OTC und Börse');
M('derivatives','derivative-contracts','Verpflichtung und bedingter Anspruch','derivatives-01 derivatives-06 derivatives-11',23,'Instrumentvergleich|Optionsauszahlung und Gewinn|Forward Commitment und Contingent Claim');
M('derivatives','derivative-uses','Derivate nutzen und Risiken beurteilen','derivatives-12',23,'Nutzen und Risiken|Emittenten und Anleger');
M('derivatives','carry','Arbitrage und Haltekosten','derivatives-02',23,'Replikation|Spot, Erwartung und Carry');
M('derivatives','forward-value','Forwardpreis und Vertragswert','derivatives-03',24,'Bewertung über die Vertragslaufzeit|Zinstermingeschäft');
M('derivatives','futures','Futures und täglicher Ausgleich','derivatives-04',24,'Forward und Future vergleichen|Preisunterschiede');
M('derivatives','swaps','Swaps als Zahlungsreihen','derivatives-05',24,'Swap und Forwardserie|Preis gegen Marktwert');
M('derivatives','option-values','Optionen bewerten und vergleichen','derivatives-06 derivatives-08 derivatives-09',24,'Moneyness und Zeitwert|Replikation bedingter Ansprüche|Werttreiber');
M('derivatives','parity','Put-Call-Parität und synthetische Positionen','derivatives-06',24,'Spot-Parität|Forward-Parität');
M('derivatives','binomial','Einperiodige Optionsreplikation','derivatives-07',24,'Binomialbewertung|Risikoneutrale Bewertung');
M('alternatives','alternative-structures','Zugang zu alternativen Anlagen','alternatives-01',25,'Merkmale und Kategorien|Direkt, Co-Investment und Fonds|Eigentum und Vergütung');
M('alternatives','alternative-fees','Nettorendite und Gebührenwasserfall','alternatives-02 alternatives-03',25,'Performancebeurteilung|Brutto- und Nettorendite');
M('alternatives','private-capital','Privates Eigen- und Fremdkapital','alternatives-04 alternatives-05',25,'Private Equity|Private Debt|Diversifikation');
M('alternatives','real-assets','Immobilien und Infrastruktur','alternatives-06 alternatives-07',25,'Immobilienmerkmale|Immobilienanlage|Infrastrukturmerkmale|Infrastrukturanlage');
M('alternatives','resources','Land, Wald und Rohstoffe','alternatives-07 alternatives-08',26,'Land- und Forstanlagen|Rohstoffe|Risiko- und Renditetreiber');
M('alternatives','hedge-funds','Hedgefonds verstehen','alternatives-09',26,'Strategien und Eigenschaften|Zugangsformen|Risiken und Diversifikation');
M('alternatives','digital-assets','Digitale Vermögenswerte','alternatives-10',26,'Distributed Ledger|Anlageeigenschaften|Anlagevehikel|Risiko und Rendite');
M('portfolio','portfolio-risk','Portfolioauswahl und Diversifikation','portfolio-01 portfolio-02 portfolio-03',27,'Anlageklassen|Risikoaversion|Optimale Allokation|Historische Momente|Portfoliovolatilität|Diversifikationseffekt|Effizienz und Minimumvarianz');
M('portfolio','portfolio-pricing','Risiko, CAPM und Performancemaße','portfolio-03 portfolio-04 portfolio-14',27,'Sichere und riskante Anlage|CAL und CML|Systematisches und spezifisches Risiko|Renditemodelle|Beta|CAPM und SML|CAPM-Rendite|CAPM-Anwendung|Sharpe, Treynor, M² und Alpha');
M('portfolio','investment-process','Anleger und Investmentprozess','start-02 portfolio-06 portfolio-09',28,'Portfoliosicht|Prozessphasen|Anlegertypen|Pensionspläne|Asset-Management-Branche|Fonds und Anlagevehikel');
M('portfolio','ips','Anlagepolitik und Portfoliokonstruktion','portfolio-06 portfolio-07 portfolio-08',28,'Zweck des IPS|IPS-Bestandteile|Risiko- und Renditeziele|Bereitschaft und Tragfähigkeit|Restriktionen|Anlageklassen abgrenzen|Allokation aus dem Auftrag|ESG im Portfolio');
M('portfolio','behavioral','Verhaltensfehler erkennen','portfolio-11',28,'Kognitive und emotionale Fehler|Einzelne Biases|Marktfolgen');
M('portfolio','risk-management','Risiken steuern','portfolio-12 portfolio-13',28,'Risikomanagementbegriff|Rahmenwerk|Governance|Risikotoleranz|Risikobudget|Finanzielle und operative Risiken|Messen und verändern');
M('ethics','ethics-foundations','Vertrauen und professionelles Urteil','ethics-01 ethics-11',29,'Ethikbegriff|Berufskodex|Profession und Vertrauen|Hohe Standards|Professionalität|Entscheidungsdruck|Recht und Ethik|Entscheidungsrahmen');
M('ethics','code','Kodex, Standards und Durchsetzung','ethics-01 ethics-08',29,'Professional Conduct Program|Kodex und Standardstruktur|Pflichten der Unterstandards');
M('ethics','standard-i','Standard I: Professionalität','ethics-02',30,'Fälle zu Standard I|Kontrollen zu Standard I|Regelkonformes Verhalten erkennen');
M('ethics','standard-ii','Standard II: Kapitalmarktintegrität','ethics-03',30,'Fälle zu Standard II|Kontrollen zu Standard II|Regelkonformes Verhalten erkennen');
M('ethics','standard-iii','Standard III: Kundenpflichten','ethics-04',30,'Fälle zu Standard III|Kontrollen zu Standard III|Regelkonformes Verhalten erkennen');
M('ethics','standard-iv','Standard IV: Arbeitgeberpflichten','ethics-05',30,'Fälle zu Standard IV|Kontrollen zu Standard IV|Regelkonformes Verhalten erkennen');
M('ethics','standard-v','Standard V: Analyse und Kommunikation','ethics-06',30,'Fälle zu Standard V|Kontrollen zu Standard V|Regelkonformes Verhalten erkennen');
M('ethics','standard-vi','Standard VI: Interessenkonflikte','ethics-07',30,'Fälle zu Standard VI|Kontrollen zu Standard VI|Regelkonformes Verhalten erkennen');
M('ethics','standard-vii','Standard VII: CFA-Mitglieder und Kandidaten','ethics-08',31,'Standard VII in Fällen anwenden|Verstöße verhindern');
M('ethics','ethics-cases','Mehrere Standards im selben Fall','ethics-11',31,'Verhalten und Richtlinien beurteilen|Regelverletzung begründen');
module.exports={year:2027,level:1,reviewed:'2026-09-16',source,topics,modules};
