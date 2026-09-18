const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('ra-'+id,'ratios','statements',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a','A company acquires a large subsidiary on the final day of its reporting year. The acquisition is fully included in the year-end balance sheet but contributes almost no current-year revenue. Using year-end assets instead of appropriately weighted average assets would most likely:',[
  ['understate asset turnover for the operating resources used during the year.','Der zu große Jahresendnenner steht einem fast unveränderten Periodenumsatz gegenüber.'],
  ['overstate asset turnover because acquisitions always increase revenue.','Die Frage schließt einen nennenswerten Umsatzbeitrag im laufenden Jahr ausdrücklich aus.'],
  ['leave asset turnover unchanged because both statements are consolidated.','Konsolidierung allein beseitigt den Zeitunterschied zwischen Strom und Bestand nicht.']
 ],0,['Der Umsatz entstand überwiegend mit der bisherigen Vermögensbasis. Ein zusätzlicher Vermögensbestand für praktisch keinen Zeitraum der Periode ist kein geeigneter Nenner für deren Umschlag.','Eine korrekte Gewichtung berücksichtigt den Akquisitionszeitpunkt. Auch ein einfacher Mittelwert aus zwei Stichtagen kann dafür unzureichend sein.'],'methods'),
 q('02','practice','b','Cash is 12, marketable securities 8, net receivables 30, inventories 40, and prepaid expenses 10. Current liabilities are 50. The quick ratio is:',[
  ['0.4','Dies ist die Cash Ratio: liquide Mittel und Wertpapiere ohne Forderungen.'],
  ['1.0','Quick Assets betragen 12 + 8 + 30 = 50.'],
  ['2.0','Dies ist die Current Ratio einschließlich Vorräten und Vorauszahlungen.']
 ],1,[F('QR=\\frac{12+8+30}{50}=1','Vorräte und Vorauszahlungen werden bei der Quick Ratio ausgeschlossen.',[['QR','Quick Ratio als dimensionsloser Deckungsfaktor.']])],'liquidity'),
 q('03','practice','b','A firm has cash and marketable securities of 36 and receivables of 54. Its daily cash operating expenditures are 3. Its defensive interval is closest to:',[
  ['12 days','Dieser Wert lässt die geeigneten Forderungen aus der definierten Deckungsmasse weg.'],
  ['18 days','Dieser Wert berücksichtigt nur die Forderungen.'],
  ['30 days','90 liquide bzw. realisierbare Mittel decken 30 Tage zu je 3.']
 ],2,[F('DI=\\frac{36+54}{3}=30','Der Nenner ist eine Tagesausgabe; das Ergebnis ist daher eine Zahl von Tagen.',[['DI','Defensive Interval in Tagen.']]),'Die Kennzahl ist eine vereinfachte Reservenbetrachtung, keine genaue Liquiditätsplanung.'],'liquidity'),
 q('04','practice','b','Cost of goods sold is 600. Inventory rises from 80 to 110; there are no other inventory movements. Average trade payables are 70. Using 365 days, days payable outstanding are closest to:',[
  ['40.6 days','Dieser Wert verwendet Einkäufe von 630 als passenden Strom.'],
  ['42.6 days','Dieser Wert verwendet Umsatzkosten von 600 und ignoriert den Vorratsaufbau.'],
  ['44.8 days','Dieser Wert zieht den Vorratsaufbau fälschlich von den Umsatzkosten ab: 365 × 70/570.']
 ],0,[F('Purch=600+110-80=630,\\qquad DPO=365\\frac{70}{630}\\approx40{,}56','Einkäufe finanzieren sowohl den Verbrauch als auch den Bestandsaufbau.',[['Purch','Einkäufe der Periode.'],['DPO','Lieferantenverbindlichkeitstage.']])],'activity'),
 q('05','practice','b','Debt is 150, equity is 250, and total assets are 500. The debt-to-capital ratio is:',[
  ['30.0%','Dies ist Debt-to-Assets.'],
  ['37.5%','Kapital im genannten Verhältnis besteht aus Debt plus Equity.'],
  ['60.0%','Dies ist Debt-to-Equity.']
 ],1,[F('D_C=\\frac{150}{150+250}=37{,}5\\%','Nicht verzinsliche Verbindlichkeiten erklären hier die Differenz zwischen Aktiva und D + E.',[['D_C','Debt-to-Capital.']])],'solvency'),
 q('06','practice','c','A company with a current ratio above 1 pays a trade payable using cash. Assuming no other changes, the current ratio most likely:',[
  ['decreases.','Bei einer Ausgangsquote über eins sinkt der kleinere Nenner relativ stärker.'],
  ['remains unchanged.','Gleiche absolute Abzüge in Zähler und Nenner lassen einen Bruch nicht allgemein unverändert.'],
  ['increases.','Der Nenner sinkt relativ stärker; trotzdem nimmt der verfügbare Cashbestand ab.']
 ],2,['Für Current Assets 300 und Current Liabilities 150 ergibt sich zunächst 2. Eine Zahlung von 50 führt zu 250/100 = 2,5.','Die Aussage benötigt die Bedingung einer Ausgangsquote über eins und ausreichenden Cashbestand. Unter eins wäre die Richtung anders.'],'interactions'),
 q('07','practice','d','A firm has a tax burden factor of 0.75, an interest burden factor of 0.8, an operating margin of 0.15, asset turnover of 1.6, and financial leverage of 2.5. Its ROE is:',[
  ['9.0%','Dies ist die Nettomarge vor Multiplikation mit Umschlag und Hebel.'],
  ['14.4%','Dieser Wert lässt den Eigenkapitalmultiplikator von 2,5 aus.'],
  ['36.0%','Alle fünf konsistent definierten Faktoren werden multipliziert.']
 ],2,[F('ROE=0{,}75\\cdot0{,}8\\cdot0{,}15\\cdot1{,}6\\cdot2{,}5=36\\%','Die Zwischenfaktoren kürzen sich algebraisch zur direkten Eigenkapitalrendite.',[['ROE','Return on Equity.']])],'dupont'),
 q('08','practice','c d','Two firms have identical operating margins, asset turnover, and financial leverage. Firm A has the same tax burden factor but a lower interest burden factor than Firm B. With positive earnings throughout, Firm A has:',[
  ['lower ROE because less operating profit remains after interest.','Interest Burden ist der verbleibende Anteil EBT/EBIT. Ein niedrigerer Faktor bedeutet stärkere Zinsbelastung.'],
  ['higher ROE because a lower interest burden factor means lower interest expense.','Die Bezeichnung kann täuschen: Eine geringere Quote EBT/EBIT bedeutet gerade weniger verbleibendes Ergebnis.'],
  ['the same ROE because both firms have the same leverage.','Gleicher Leverage garantiert keine gleichen Zinskonditionen.']
 ],0,['In der fünfteiligen DuPont-Gleichung ist der Zinsbelastungsfaktor ein Multiplikator. Bei den gegebenen positiven, sonst gleichen Faktoren senkt sein Rückgang die ROE.','Die Ursache kann etwa ein höherer Fremdkapitalzinssatz sein, ohne dass sich die Verschuldungsquote verändert.'],'dupont'),
 q('09','practice','e','For an analyst comparing two banks, which supplementary measure is most directly focused on income generated from interest-earning assets?',[
  ['Inventory turnover.','Dies ist für eine Bank gewöhnlich kein passender zentraler Geschäftsmodelltreiber.'],
  ['Net interest margin.','Die Nettozinsmarge bezieht den Nettozinsertrag auf die geeigneten durchschnittlichen zinstragenden Aktiva.'],
  ['A manufacturer’s gross profit margin.','Diese industrielle Warenmarge bildet das Bankgeschäft nicht angemessen ab.']
 ],1,['Die Kennzahl muss den wirtschaftlichen Prozess erfassen. Bei Banken ist die Differenz aus Zinsertrag und zugehörigem Zinsaufwand ein wichtiger Ergebnisbaustein.','Kreditverluste, Kapitalausstattung und Liquidität sind zusätzlich zu prüfen; eine hohe Zinsmarge allein beweist keine hohe Qualität.'],'industry-forecast'),
 q('10','practice','f','Annual sales are forecast to rise from 730 to 876. Receivables days are expected to increase from 25 to 30. Using a 365-day planning convention, the increase in modeled receivables is:',[
  ['10','Dies wäre der reine Wachstumseffekt bei unveränderten 25 Tagen.'],
  ['12','Dies ist der zusätzliche Effekt der längeren Zahlungsdauer auf den neuen Umsatz.'],
  ['22','Die Forderungen steigen von 50 auf 72.']
 ],2,[F('\\Delta AR=876\\frac{30}{365}-730\\frac{25}{365}=72-50=22','Wachstum und Zahlungsbedingungen wirken gemeinsam auf die Kapitalbindung.',[['\\Delta AR','Zunahme der modellierten Forderungen in der verwendeten Geldeinheit.']])],'industry-forecast'),
 q('a1','mock-a','b','A company reports cash of 15, short-term marketable investments of 10, receivables of 35, inventories of 60, and current liabilities of 80. The cash ratio is closest to:',[
  ['0.31','Cash plus kurzfristige Anlagen ergeben 25; 25/80 = 0,3125.'],
  ['0.75','Dieser Wert ist die Quick Ratio einschließlich Forderungen.'],
  ['1.50','Dieser Wert ist die Current Ratio einschließlich Vorräten.']
 ],0,[F('CaR=\\frac{15+10}{80}=0{,}3125','Forderungen und Vorräte zählen bei der Cash Ratio nicht zum Zähler.',[['CaR','Cash Ratio.']])],'liquidity'),
 q('a2','mock-a','d','Sales are 800, EBIT is 160, interest expense is 40, taxes are 30, average assets are 600, and average equity is 300. The tax burden factor and ROE are, respectively:',[
  ['0.25 and 15%.','0,25 ist die Steuerquote, nicht der verbleibende Ergebnisanteil; 15 % verwendet Aktiva statt Eigenkapital.'],
  ['0.75 and 30%.','Vorsteuergewinn 120, Nettogewinn 90: 90/120 und 90/300.'],
  ['0.75 and 40%.','40 % teilt Vorsteuergewinn statt Nettogewinn durch Eigenkapital.']
 ],1,[F('EBT=160-40=120,\\quad NI=120-30=90,\\quad TB=\\frac{90}{120}=0{,}75,\\quad ROE=\\frac{90}{300}=30\\%','Steuerquote und Tax Burden addieren sich hier zu eins.',[['EBT,NI','Vorsteuer- und Nettogewinn.'],['TB','Tax Burden.'],['ROE','Return on Equity.']])],'dupont'),
 q('b1','mock-b','b','Revenue is 1,095, cost of goods sold is 730, average receivables are 90, and average inventories are 100. Using 365 days, the operating cycle before supplier financing is:',[
  ['50 days','Dies ist nur die Lagerdauer.'],
  ['80 days','30 Forderungstage plus 50 Lagertage ergeben den Operating Cycle.'],
  ['95 days','Hier werden die Forderungen fälschlich auf Umsatzkosten bezogen: 45 Forderungstage plus 50 Lagertage.']
 ],1,[F('OC=365\\frac{90}{1095}+365\\frac{100}{730}=30+50=80','Der Operating Cycle enthält noch keinen Abzug der Lieferantenverbindlichkeitstage.',[['OC','Operating Cycle in Tagen.']])],'activity'),
 q('b2','mock-b','c','A retailer purchases inventory for cash at its carrying value. There are no taxes or other effects. Which pair of changes is most likely?',[
  ['Current ratio decreases; quick ratio is unchanged.','Cash wird durch einen anderen Umlaufvermögensposten ersetzt; die Current Ratio bleibt unverändert.'],
  ['Both current ratio and quick ratio increase.','Es entsteht keine neue Deckungsmasse und kein Abbau kurzfristiger Verbindlichkeiten.'],
  ['Current ratio is unchanged; quick ratio decreases.','Vorräte gehören zum Umlaufvermögen, aber nicht zu den Quick Assets.']
 ],2,['Die Summe des Umlaufvermögens ändert sich nicht, weil Cash in gleich hoch bewertete Vorräte umgewandelt wird.','Der Quick-Ratio-Zähler sinkt um den bezahlten Betrag. Der Nenner bleibt unverändert.'],'interactions')
];
