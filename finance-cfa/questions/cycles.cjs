const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('cyc-'+id,'cycles','economics',pool,los,stem,options,correct,solution,{section});
const eq=(tex,reading,symbol,meaning)=>F(tex,reading,[[symbol,meaning]]);
module.exports=[
 q('01','practice','a','Real economic activity grows by 2% after growing by 5% in the previous period. This observation alone indicates:',[
 ['slower growth, not necessarily a contraction in the activity level.','Das Niveau steigt weiterhin, nur langsamer.'],['a 3% decline in the level of activity.','Die Differenz der Wachstumsraten ist keine Niveauänderung.'],['that the economy must be at full capacity.','Wachstum allein bestimmt die Produktionslücke nicht.']
 ],0,['Niveau, Veränderungsrate und Veränderung der Wachstumsrate müssen getrennt werden.'],'phases'),
 q('02','practice','a','A business-cycle trough is most directly the turning point from:',[
 ['positive growth to negative growth in every individual industry simultaneously.','Zyklen betreffen breite Aktivität; Sektoren müssen nicht exakt gleichlaufen.'],['contraction to expansion in broad economic activity.','Der Tiefpunkt beendet den Rückgang und beginnt die Expansion.'],['high inflation to low inflation by definition.','Inflation ist nicht die Definition eines Aktivitätstiefpunkts.']
 ],1,['Arbeitslosigkeit kann nach dem Aktivitätstiefpunkt noch hoch bleiben oder zunächst weiter steigen.'],'phases'),
 q('03','practice','a c','Actual real output rises from 95 to 98 while estimated potential rises from 100 to 105. The new output gap is closest to:',[
 ['3.16%.','Das ist ungefähr die Wachstumsrate des tatsächlichen Outputs.'],['−7.00%.','Das teilt die Niveauabweichung durch 100 statt durch das neue Potenzial.'],['−6.67%.','(98 − 105)/105.']
 ],2,[eq('gap=(98-105)/105\\cdot100\\approx-6{,}6667\\%','Der Output wächst, aber die negative Potenziallücke vergrößert sich von −5 %.','gap','Produktionslücke in Prozent des geschätzten Potenzials.')],'output-gap'),
 q('04','practice','c','Nominal GDP is 330 and its deflator is 120 with base year 100. Real GDP is:',[
 ['275.','330/1,20.'],['396.','Das multipliziert mit dem Deflator statt zu deflationieren.'],['210.','Ein Preisindex wird nicht als Geldbetrag vom BIP abgezogen.']
 ],0,[eq('Y^{real}=330/(120/100)=275','Die Einheiten entsprechen den Preisen der angegebenen Basis.','Y^{real}','Reales BIP.')],'measurement'),
 q('05','practice','a c','Real GDP grows by 0.5% quarter over quarter. Its annualized quarterly growth rate is closest to:',[
 ['0.50%.','Das ist die nicht annualisierte Quartalsrate.'],['2.02%.','(1,005)⁴ − 1 ≈ 2,015 %.'],['5.00%.','Das skaliert die Rate falsch.']
 ],1,[eq('g_{ann}=(1{,}005)^4-1\\approx2{,}01505\\%','Die Annualisierung unterstellt Wiederholung derselben Quartalsrate und ist keine beobachtete Vorjahresrate.','g_{ann}','Annualisierte Quartalswachstumsrate.')],'measurement'),
 q('06','practice','c','A simplified accelerator model has desired capital equal to three times expected output. Expected output rises from 100 to 110 and then to 114. Required net investment in the second interval is:',[
 ['42.','Das ist dreimal die gesamte Outputänderung über beide Intervalle.'],['30.','Das ist die Nettoinvestition des ersten Intervalls.'],['12.','3 × (114 − 110).']
 ],2,[eq('I_2^{net}=3\\cdot114-3\\cdot110=12','Die Investition sinkt von 30 auf 12, obwohl der gewünschte Kapitalbestand weiter steigt.','I_2^{net}','Nettoinvestition des zweiten Intervalls im vollständigen Anpassungsmodell.')],'demand-components'),
 q('07','practice','c','Inventory investment falls from +12 to +4 while other final-demand components remain unchanged. This implies:',[
 ['inventories continue to rise, but their contribution to output growth is negative.','Die Bestandsänderung bleibt positiv, wird aber um 8 kleiner.'],['the inventory stock must fall by 8.','Ein Rückgang der positiven Bestandsänderung ist noch kein Bestandsabbau.'],['inventory investment contributes +8 to output growth.','Die Veränderung lautet 4 − 12 = −8.']
 ],0,['Die BIP-Komponente ist Lagerinvestition. Für die Änderung des BIP zählt deshalb die Änderung dieser Komponente.'],'inventories'),
 q('08','practice','c','Inventory is 240 and monthly sales fall from 120 to 80 with inventory unchanged. The new inventory-to-sales ratio is:',[
 ['2 months.','Das war das Verhältnis vor dem Absatzrückgang.'],['3 months.','240/80.'],['0.333 months.','Das vertauscht Bestand und monatlichen Absatz.']
 ],1,[eq('ISR=240/80=3','Mehr Monatsumsätze im Lager können auf ungewollten Bestandsaufbau relativ zur Nachfrage hinweisen.','ISR','Lagerbestand in Monatsumsätzen.')],'inventories'),
 q('09','practice','c','Employment is unchanged, but some unemployed people stop participating in the labor force. The unemployment rate can:',[
 ['only rise.','Der Zähler sinkt ebenso wie der Nenner; die Quote kann fallen.'],['remain unchanged by definition.','Der Nenner ist nicht die gesamte Bevölkerung.'],['fall without an increase in employment.','Der Rückgang kann durch Austritt aus dem Arbeitskräfteangebot entstehen.']
 ],2,['Beschäftigung, Beteiligung und Arbeitszeit helfen zu verstehen, ob eine niedrigere Quote tatsächlich eine bessere Lage signalisiert.'],'resources'),
 q('10','practice','b','An institution starts with assets 200, debt 160, and equity 40. Assets lose 5% of their value while debt stays fixed. Its new asset-to-equity leverage is closest to:',[
 ['6.333.','Neue Vermögenswerte 190, Eigenkapital 30; 190/30.'],['5.000.','Das ist der ursprüngliche Hebel.'],['4.750.','Das hält das Eigenkapital fälschlich konstant bei 40.']
 ],0,[eq('\\lambda=\\frac{200(1-0{,}05)}{200(1-0{,}05)-160}=\\frac{190}{30}\\approx6{,}33333','Der Wertverlust trifft bei unveränderten Schulden vollständig das Eigenkapital.','\\lambda','Bilanzhebel nach dem Vermögensverlust.')],'leverage'),
 q('11','practice','b','After a loss, assets are 190, debt is 160, and equity is 30. To restore asset-to-equity leverage of 5 solely by selling assets at current value and repaying debt, required sales are:',[
 ['10.','Das ist der ursprüngliche Vermögensverlust in einem anderen Vergleich, nicht der nötige Bilanzabbau.'],['40.','(190 − x)/30 = 5.'],['160.','Das würde alle Schulden tilgen und den Zielhebel unterschreiten.']
 ],1,[eq('190-x=5\\cdot30\\Rightarrow x=40','Nach der Transaktion: Vermögen 150, Schulden 120, Eigenkapital weiterhin 30.','x','Verkaufserlös und gleich hohe Schuldentilgung, ohne zusätzliche Preiswirkungen oder Kosten.')],'leverage'),
 q('12','practice','b c','A relevant base interest rate declines from 4% to 2%, while a borrower’s total spread rises from 1% to 4%. The new borrowing rate is:',[
 ['2%.','Das ignoriert den Aufschlag.'],['5%.','Das war die ursprüngliche Gesamtrate.'],['6%.','2 % + 4 %; trotz niedrigerem Basiszins höher als zuvor.']
 ],2,[eq('r_{borrow}=2\\%+4\\%=6\\%','Die vorherige Rate betrug 5 %. Eine Leitzinssenkung muss wegen anderer Komponenten nicht eins zu eins beim Schuldner ankommen.','r_{borrow}','Neue Kreditrate.')],'credit-pricing'),
 q('13','practice','c','In a simplified diffusion survey, 40% report improvement, 30% no change, and 30% deterioration. Using improvement plus half of unchanged responses, the index is:',[
 ['55.','100 × (0,4 + 0,5 × 0,3).'],['10.','Das ist die Differenz der positiven und negativen Anteile in Prozentpunkten.'],['70.','Das zählt unveränderte Antworten vollständig positiv.']
 ],0,[eq('DI=100(0{,}40+0{,}5\\cdot0{,}30)=55','Der Wert zeigt die Verbreitung einer Verbesserung, keine direkte Wachstumsrate von 5 %.','DI','Diffusionsindex.')],'indicators'),
 q('14','practice','c','Which indicator most directly represents an early stage of new housing production?',[
 ['the market value of all existing homes.','Das ist ein Vermögensbestand, keine frühe Neubauphase.'],['building permits.','Eine Genehmigung kann vor Baubeginn und Fertigstellung liegen.'],['the resale price of an existing house alone.','Ein Eigentümerwechsel ist keine neue Wohnungsproduktion.']
 ],1,['Nicht jede Genehmigung führt tatsächlich oder sofort zu einem Bau. Der Vorlauf ist deshalb keine Garantie.'],'housing-trade'),
 q('15','practice','a b','A financial cycle based on credit and property prices:',[
 ['must have exactly the same turning points as the business cycle.','Reale und finanzielle Dynamik können sich über unterschiedliche Zeiträume entfalten.'],['cannot influence investment or consumption.','Finanzierung und Sicherheiten können beide beeinflussen.'],['can reinforce a real downturn without being identical to the business cycle.','Verschuldung und Bilanzen bilden zusätzliche Rückkopplungen.']
 ],2,['Finanzielle Ungleichgewichte können über mehrere Realzyklen wachsen; nicht jede Rezession ist zugleich eine Finanzkrise.'],'credit-cycle'),
 q('16','practice','c','Exports stay at 80 while imports decline from 100 to 70 because domestic demand weakens. Net exports:',[
 ['improve by 30, which alone does not establish a stronger domestic economy.','Der Saldo steigt von −20 auf +10, aber die Ursache ist schwache Binnennachfrage.'],['deteriorate by 30.','Das verwechselt die Richtung des Importbeitrags im Saldo.'],['remain unchanged because exports do not change.','Importe sind der zweite Bestandteil von Nettoexporten.']
 ],0,['Die Ausgabenidentität und eine Wohlfahrts- oder Konjunkturbeurteilung sind unterschiedliche Aussagen.'],'housing-trade'),
 q('a1','mock-a','a c','Broad activity has started rising from a trough, while unemployment continues increasing. This combination is:',[
 ['impossible because every indicator turns simultaneously.','Messgrößen reagieren nicht zwingend gleichzeitig.'],['consistent with employment adjustment lagging an early recovery.','Unternehmen können zunächst Arbeitszeit und Auslastung erhöhen, bevor sie mehr Personal benötigen.'],['proof that the new expansion has already ended.','Eine einzelne nachlaufende Reihe reicht dafür nicht aus.']
 ],1,['Wendepunktdatierung und Diagnose benötigen mehrere Datenreihen mit ihren Veröffentlichungs- und Reaktionszeiten.'],'resources'),
 q('b1','mock-b','b','An institution has assets 120 and debt 90. Assets then fall by 10%, with debt unchanged. Equity falls by:',[
 ['10%.','Das ist der Vermögensverlust in Prozent des Vermögens, nicht des kleineren Eigenkapitals.'],['12%.','Das verwechselt den absoluten Verlustbetrag 12 mit der relativen Eigenkapitaländerung.'],['40%.','Eigenkapital fällt von 30 auf 18; Verlust 12/30.']
 ],2,[eq('\\frac{30-(108-90)}{30}=\\frac{12}{30}=40\\%','Unveränderte Schulden verstärken den relativen Eigenkapitalverlust.','108,90,30','Vermögenswerte nach dem Schock, unveränderte Schulden und ursprüngliches Eigenkapital.')],'leverage')
];
