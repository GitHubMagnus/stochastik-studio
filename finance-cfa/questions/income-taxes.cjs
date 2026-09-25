const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('tax-'+id,'income-taxes','statements',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a','Income tax expense most accurately differs from cash taxes paid because the expense may include:',[
 ['deferred tax effects as well as current tax accruals that are not yet paid.','Aufwand enthält zeitliche Steuerfolgen und laufende Abgrenzungen; Zahlung folgt dem tatsächlichen Geldfluss.'],
 ['only the closing balance of tax payable.','Eine Schlussverbindlichkeit ist ein Bestand, kein vollständiger Jahresaufwand.'],
 ['all future taxes on profits not yet earned.','Latente Steuern erfassen bestimmte bereits entstandene Differenzen, nicht beliebige künftige Geschäftstätigkeit.']
 ],0,['Für die Überleitung sind laufender Aufwand, laufende Steuerverbindlichkeiten und GuV-wirksame latente Veränderungen getrennt zu bestimmen. Der Aufwand kann deshalb trotz niedriger heutiger Zahlung hoch sein.'],'vocabulary'),
 q('02','practice','a','Pre-tax accounting profit is €180 million. It includes €12 million tax-exempt income and €8 million permanently non-deductible expense. Tax depreciation exceeds book depreciation by €26 million. With no other differences, taxable income is:',[
 ['€150 million','Steuerfreier Ertrag wird entfernt, nicht abzugsfähiger Aufwand zurückgerechnet und zusätzlicher steuerlicher Abzug vermindert die Basis.'],
 ['€134 million','180 − 12 − 8 − 26 zieht den nicht abzugsfähigen Aufwand ab, obwohl er dem Buchgewinn wieder hinzugerechnet werden muss.'],
 ['€202 million','180 − 12 + 8 + 26 addiert den zusätzlichen steuerlichen Abschreibungsabzug mit falschem Vorzeichen.']
 ],0,[F('TI=180-12+8-26=150','Die steuerliche Bemessungsgrundlage wird aus dem Buchgewinn hergeleitet, ohne beide Regelwerke zu vermischen.',[['TI','Steuerpflichtiger Gewinn in Mio. Euro.']])],'temporary-permanent'),
 q('03','practice','a b','A fine is expensed in the accounts and, under the stated tax law, is never deductible. This difference generally:',[
 ['creates a deferred tax asset until the fine is paid.','Die Zahlung führt laut Angabe gerade nicht zu einem späteren Steuerabzug.'],
 ['is permanent in the profit reconciliation and does not itself create a future deductible tax benefit.','Ohne spätere Umkehr gibt es keinen entsprechenden latenten Vorteil.'],
 ['reduces the effective tax rate below the statutory rate.','Nicht abzugsfähiger Aufwand erhöht im isolierten positiven Gewinnfall eher die Belastung relativ zum Buchgewinn.']
 ],1,['Entscheidend ist nicht, ob die Ausgabe irgendwann bezahlt wird, sondern ob ihre steuerliche Behandlung später einen Abzug erzeugt. Die tatsächliche Rechtsregel wird in dieser Frage ausdrücklich vorgegeben.'],'temporary-permanent'),
 q('04','practice','b','An asset has carrying amount €110 million and tax base €80 million. Its recovery is taxable, a 25% rate applies on reversal, and no recognition exception applies. The resulting deferred tax position is:',[
 ['€7.50 million liability','30 des Buchwerts stehen keinem künftigen steuerlichen Abzug gegenüber.'],
 ['€7.50 million asset','Bei einem Aktivum mit Buchwert über Steuerbasis entsteht im angegebenen Fall eine steuerpflichtige Differenz.'],
 ['€27.50 million liability','Hier wurde der gesamte Buchwert statt der temporären Differenz besteuert.']
 ],0,[F('DTL=(110-80)\\cdot0{,}25=7{,}50','Der relevante Betrag ist die Differenz zwischen zwei Bewertungsbasen desselben Aktivums.',[['DTL','Latente Steuerverbindlichkeit in Mio. Euro.']])],'signs'),
 q('05','practice','b','A warranty liability of €45 million is deductible only when paid. Its tax base is zero, the applicable rate is 20%, and the future deduction is fully usable. The deferred tax position is:',[
 ['€9 million asset','Die spätere Erfüllung schafft noch einen steuerlichen Abzug, obwohl der Buchaufwand bereits erfasst wurde.'],
 ['€9 million liability','Dies überträgt das Vorzeichen eines Aktivums fälschlich auf eine Verpflichtung.'],
 ['€45 million asset','Der Steueranspruch ist nur die Steuerwirkung, nicht die gesamte Verpflichtung.']
 ],0,[F('DTA=(45-0)\\cdot0{,}20=9','Die Aufgabe setzt die Nutzbarkeit des künftigen Abzugs voraus.',[['DTA','Angesetzter latenter Steueranspruch in Mio. Euro.']])],'signs'),
 q('06','practice','a b','A €50 million fine payable is never deductible under the stated tax law. Under the ordinary IAS 12 liability tax-base definition, its tax base is:',[
 ['€0 million','Dies würde fälschlich einen künftigen Abzug von 50 unterstellen.'],
 ['€12.50 million','Ein angenommener Steuerbetrag wäre keine Steuerbasis der Verpflichtung.'],
 ['€50 million','Buchwert 50 abzüglich künftiger abzugsfähiger Beträge null.']
 ],2,[F('TB_L=50-0=50','Die spätere Zahlung erzeugt keine steuerliche Entlastung.',[['TB_L','Steuerbasis der Verpflichtung in Mio. Euro.']]),'Buchwert und Steuerbasis sind gleich; aus diesem offenen Bußgeld entsteht daher keine temporäre Differenz.'],'tax-base'),
 q('07','practice','a b','A company has received €80 million for services it will provide later. The cash receipt has already been fully taxed and will not be taxed again when book revenue is recognized. The contract liability is €80 million; the applicable rate is 25%, with full recoverability and no exception. The deferred tax asset is:',[
 ['€0 million','Die künftige Buchertragserfassung ohne erneute Besteuerung wurde ignoriert.'],
 ['€20 million','Verpflichtungsbuchwert 80 minus Steuerbasis null ergibt eine abzugsfähige temporäre Differenz.'],
 ['€80 million','Das ist die Vertragsverbindlichkeit, nicht ihr Steuerbetrag.']
 ],1,[F('TB_L=80-80=0,\\qquad DTA=(80-0)\\cdot0{,}25=20','Für Vorauszahlungen wird der künftig nicht mehr steuerpflichtige Erlös vom Verbindlichkeitsbuchwert abgezogen.',[['TB_L','Steuerbasis der Vertragsverbindlichkeit in Mio. Euro.'],['DTA','Latenter Steueranspruch in Mio. Euro.']])],'tax-base'),
 q('08','practice','a b','Current tax expense is €45 million. DTL increases from €10 million to €18 million, while net DTA increases from €7 million to €12 million. All changes arise through profit or loss. Total income tax expense is:',[
 ['€58 million','45 + 8 + 5 addiert den DTA-Aufbau als Aufwand, obwohl er den Steueraufwand vermindert.'],
 ['€48 million','45 plus DTL-Aufbau 8 minus DTA-Aufbau 5.'],
 ['€51 million','Hier werden die Endbestände 18 und 12 statt ihrer Veränderungen verwendet.']
 ],1,[F('TE=45+(18-10)-(12-7)=48','Die Überleitung verwendet ausschließlich die in der GuV entstandenen Periodenveränderungen.',[['TE','Gesamter Steueraufwand in Mio. Euro.']])],'expense-bridge'),
 q('09','practice','a b','In Year 1, book depreciation is €40 million and tax depreciation €70 million. The relevant assets had no opening temporary difference. The tax rate is 30%, and no other differences or recognition exceptions apply. Closing DTL is:',[
 ['€9 million','Der zusätzliche Steuerabzug 30 schafft eine künftige steuerpflichtige Differenz mit Steuerwirkung 9.'],
 ['€12 million','Dies besteuert die gesamte Buchabschreibung statt der Bewertungsdifferenz.'],
 ['€21 million','Dies besteuert die gesamte steuerliche Abschreibung.']
 ],0,[F('DTL_1=(70-40)\\cdot0{,}30=9','Die beschleunigte steuerliche Abschreibung vermindert die Steuerbasis stärker als den Buchwert.',[['DTL_1','Latente Steuerverbindlichkeit am ersten Jahresende in Mio. Euro.']])],'depreciation'),
 q('10','practice','b','An asset has a positive opening DTL from earlier accelerated tax depreciation. During the current year, book and tax depreciation are equal, the tax rate is unchanged, and no other relevant changes occur. The DTL generally:',[
 ['remains unchanged rather than automatically becoming zero.','Die frühere kumulierte Buchwert-Steuerbasis-Differenz bleibt trotz gleicher aktueller Abzüge bestehen.'],
 ['must disappear because the current depreciation amounts match.','Gleiche Periodenaufwendungen beseitigen eine bereits bestehende Bestandsdifferenz nicht.'],
 ['must double.','Ohne zusätzliche Differenz oder Satzänderung gibt es keinen solchen Aufbau.']
 ],0,['Der DTL-Bestand folgt der kumulierten Differenz. Nur eine tatsächliche Umkehr, eine neue Differenz, Satzänderung oder andere einschlägige Ursache verändert ihn.'],'depreciation'),
 q('11','practice','a','Current tax expense is €72 million. Current tax payable rises from €8 million to €14 million, with no prepayments, acquisitions, currency movements, or other adjustments. Cash taxes paid are:',[
 ['€66 million','Sechs der laufenden Belastung erhöhen die offene Steuerverbindlichkeit.'],
 ['€72 million','Der Aufbau noch unbezahlter Steuer wurde ausgelassen.'],
 ['€78 million','Der Verbindlichkeitsanstieg wurde als zusätzliche Zahlung behandelt.']
 ],0,[F('CashTax=72+8-14=66','Laufender Aufwand und Zahlung unterscheiden sich um die Abgrenzungsänderung.',[['CashTax','Tatsächliche Ertragsteuerzahlung in Mio. Euro.']])],'vocabulary'),
 q('12','practice','b d','A US company has an unchanged gross DTA of €80 million. Its valuation allowance decreases from €30 million to €18 million based on new supported evidence. Assuming the entire change is recognized in profit or loss, the immediate effect is:',[
 ['€12 million lower tax expense, without a cash refund caused by this entry itself.','Der Nettoanspruch steigt um 12; die Entlastung betrifft zunächst künftige Nutzbarkeit.'],
 ['€12 million higher tax expense.','Eine sinkende Wertberichtigung erhöht den Netto-DTA und wirkt hier entlastend.'],
 ['€62 million cash received from tax authorities.','62 ist der neue Netto-DTA, kein durch die Bewertungsbuchung ausgelöster Geldzufluss.']
 ],0,[F('\\Delta DTA_{net}=(80-18)-(80-30)=12','Die Neubewertung ändert nicht den nominalen Bruttoanspruch, sondern seine angesetzte Nutzbarkeit.',[['\\Delta DTA_{net}','Anstieg des Netto-DTA in Mio. Euro.']])],'valuation-allowance'),
 q('13','practice','b','A loss carryforward of €150 million can offset future taxable profit without annual limits, but supported qualifying profit before expiration is only €85 million. There are no other utilization sources. At a 20% rate, the usable DTA is:',[
 ['€13 million','Das ist der nicht nutzbare Steueranteil von 65.'],
 ['€17 million','Nur 85 des Verlustvortrags können unter den Annahmen steuerlich entlasten.'],
 ['€30 million','Dies ist der volle rechnerische Anspruch ohne Nutzbarkeitsprüfung.']
 ],1,[F('DTA_{usable}=\\min(150,85)\\cdot0{,}20=17','Die Steuerwirkung ist durch passende zukünftige Gewinne begrenzt.',[['DTA_{usable}','Nutzbarer latenter Steueranspruch in Mio. Euro.']])],'loss-carryforward'),
 q('14','practice','b d','A subsidiary has losses expiring soon in Country A. Another subsidiary expects large taxable profits in Country B, but the countries’ rules do not permit cross-border loss offset. Those Country B profits:',[
 ['automatically establish recoverability of the Country A loss DTA.','Konzerngewinn ist ohne rechtliche Verrechnungsmöglichkeit keine passende Nutzungsquelle.'],
 ['do not by themselves support using the Country A losses.','Steuergebiet und rechtliche Verrechenbarkeit müssen übereinstimmen.'],
 ['must be recognized as a tax refund in Country A.','Die Annahmen schaffen keinen Erstattungsanspruch.']
 ],1,['DTA-Analyse benötigt Gewinnart, Zeitpunkt, rechtliche Einheit und Steuergebiet. Ein zusammengefasster Konzernplan kann diese Grenzen verdecken.'],'valuation-allowance'),
 q('15','practice','b d','A €120 million loss carryforward expires at the end of Year 2. Supported taxable profits before loss relief are €30 million in Year 1, €50 million in Year 2, and €80 million in Year 3. Assume full offset before expiry, no annual limits or other sources, and a 25% rate. Usable DTA is:',[
 ['€20 million','Nur die ersten beiden Jahre mit zusammen 80 liegen im zulässigen Zeitraum.'],
 ['€30 million','Dies nutzt den gesamten Verlust und ignoriert das Verfallsdatum.'],
 ['€40 million','Dies besteuert alle 160 künftigen Gewinne, obwohl Verlusthöhe und Zeitraum begrenzen.']
 ],0,[F('DTA=\\min(120,30+50)\\cdot0{,}25=20','Nach dem Verfall erzielter Gewinn kann diesen Anspruch nicht mehr tragen.',[['DTA','Nutzbarer latenter Steueranspruch in Mio. Euro.']])],'loss-carryforward'),
 q('16','practice','b c','Taxable temporary differences of €120 million and fully usable deductible differences of €80 million are unchanged. The applicable reversal tax rate rises from 20% to 30%. All related effects belong to profit or loss. Net additional tax expense is:',[
 ['€4 million','DTL steigt um 12, DTA um 8; netto bleibt 4 Aufwand.'],
 ['€8 million','Dies ist nur der DTA-Anstieg und hätte im Fall entlastende Wirkung.'],
 ['€12 million','Der gegenläufige DTA-Neubewertungseffekt wurde ausgelassen.']
 ],0,[F('\\Delta TE=(120-80)(0{,}30-0{,}20)=4','Beide latenten Seiten werden mit dem neu anzuwendenden Satz bewertet.',[['\\Delta TE','Zusätzlicher Steueraufwand in Mio. Euro.']])],'tax-rate-change'),
 q('17','practice','b','A government announces that it may reduce corporate taxes, but no law has been enacted and the change is not substantively enacted. The announcement alone generally:',[
 ['requires immediate use of the proposed lower rate under both IFRS and US GAAP.','Ein politischer Vorschlag erfüllt die genannten Bewertungsanforderungen noch nicht.'],
 ['does not establish a new deferred-tax measurement rate.','Die notwendige rechtliche Verbindlichkeit fehlt nach dem Sachverhalt.'],
 ['eliminates all existing temporary differences.','Die Differenzen zwischen Buchwert und Steuerbasis verschwinden nicht durch eine Ankündigung.']
 ],1,['IFRS und US-GAAP unterscheiden sich hinsichtlich des maßgeblichen Beschlussstatus. Der Fall schließt ausdrücklich sowohl enacted als auch substantively enacted aus.'],'tax-rate-change'),
 q('18','practice','c','A company reports pre-tax accounting profit of €200 million, total income tax expense €52 million, and cash taxes paid €36 million. Its effective tax rate is:',[
 ['18.00%','Dies ist die Cash Tax Rate mit Buchgewinn als Nenner.'],
 ['26.00%','Der effektive Satz verwendet gesamten Steueraufwand 52.'],
 ['44.00%','Aufwand und Zahlung dürfen nicht als zwei unabhängige Steuerbelastungen addiert werden.']
 ],1,[F('ETR=\\frac{52}{200}=26\\%','Effektiver Satz und Zahlungsquote beantworten verschiedene Fragen.',[['ETR','Effektiver Ertragsteuersatz.']])],'tax-rates'),
 q('19','practice','c','In a simplified year, PBT is €90 million, total tax expense €22.5 million, and cash taxes €13.5 million. Using cash taxes divided by PBT, the cash tax rate is:',[
 ['15.00%','Die tatsächlich gezahlten 13,5 werden auf Buchgewinn 90 bezogen.'],
 ['25.00%','Das ist die Quote des gesamten Steueraufwands.'],
 ['60.00%','Das ist Cash Taxes/Tax Expense und damit ein anderer Quotient.']
 ],0,[F('CTR=\\frac{13{,}5}{90}=15\\%','Der Nenner wird ausdrücklich festgelegt und bleibt für den Vergleich derselbe Gewinnmaßstab.',[['CTR','Cash Tax Rate nach der angegebenen Definition.']])],'tax-rates'),
 q('20','practice','a c d','Pre-tax accounting profit is €160 million, including permanently non-deductible expense €16 million and exempt income €8 million. Extra tax depreciation of €32 million creates a fully recognized DTL. The rate is 25%, with no other effects. The effective tax rate is:',[
 ['21.25%','Dies verwendet nur laufenden Aufwand 34 und lässt den DTL-Aufbau 8 weg.'],
 ['25.00%','Die permanenten Unterschiede wurden nicht berücksichtigt.'],
 ['26.25%','Gesamtsteueraufwand 42 berücksichtigt permanente Effekte und die latente Steuer.']
 ],2,[F('CT=(160+16-8-32)\\cdot0{,}25=34,\\quad TE=34+8=42,\\quad ETR=42/160=26{,}25\\%','Die temporäre Abzugsverschiebung verändert den Gesamtaufwand im Fall nicht dauerhaft.',[['CT','Laufender Steueraufwand in Mio. Euro.'],['TE','Gesamter Steueraufwand in Mio. Euro.'],['ETR','Effektiver Steuersatz.']])],'reconciliation'),
 q('21','practice','c','A group earns €240 million pre-tax in a 30% tax jurisdiction and €60 million in a 10% jurisdiction, with no other effects. Its consolidated effective tax rate is:',[
 ['20.00%','Das ungewichtete Mittel ignoriert die unterschiedliche Gewinnverteilung.'],
 ['26.00%','Steuer 72 + 6 auf Gesamtgewinn 300.'],
 ['30.00%','Dies berücksichtigt nur das größere Steuergebiet.']
 ],1,[F('ETR=\\frac{240\\cdot0{,}30+60\\cdot0{,}10}{240+60}=26\\%','Die Gewichte folgen den Vorsteuergewinnen, nicht der Zahl der Länder.',[['ETR','Konzernsteuersatz unter den gegebenen Annahmen.']])],'tax-rates'),
 q('22','practice','c d','A very small pre-tax profit is accompanied by a large one-time release of a deferred-tax valuation allowance. The reported effective tax rate is most appropriately:',[
 ['used unchanged as the long-run forecast rate.','Ein kleiner Nenner und eine einmalige Bewertungskorrektur sind keine stabile Prognosebasis.'],
 ['analyzed in amounts and recurring components before projecting future taxes.','Die Quote kann stark von einer einmaligen Nutzbarkeitsneubewertung bestimmt werden.'],
 ['proof that all future income is permanently tax-free.','Die DTA-Bewertung ändert keine allgemeine Steuerfreiheit sämtlicher künftiger Gewinne.']
 ],1,['Die Steuerüberleitung zeigt, welche Komponenten aus laufender Geschäftstätigkeit, Ländergewichten und einmaligen Änderungen stammen. Die Entstehungsursache ist wichtiger als der isolierte Prozentwert.'],'reconciliation'),
 q('23','practice','b d','An IFRS asset revaluation creates a €12 million DTL increase recognized in OCI. In reconciling current tax expense to income-statement tax expense, an analyst should:',[
 ['add the entire €12 million DTL increase to profit-or-loss tax expense.','Dies würde den bereits außerhalb der GuV erfassten Effekt in die falsche Ergebniszeile verschieben.'],
 ['exclude that OCI-related movement from the profit-or-loss deferred-tax bridge.','Die Überleitung muss dieselbe Erfolgsabgrenzung wie der Steueraufwand verwenden.'],
 ['treat the €12 million as cash paid immediately.','Die Neubewertung löst im beschriebenen Fall keine solche Zahlung aus.']
 ],1,['Eine einfache Differenz der gesamten DTL-Bilanzwerte ist ohne Bewegungsanalyse unzureichend. Erwerbe und Währungsumrechnung können ähnliche Abgrenzungsprobleme verursachen.'],'outside-profit'),
 q('24','practice','b d','In a business combination, an identifiable asset is recognized at fair value €80 million with tax base €20 million. A related DTL must be recognized at 30%, with no other complications. The asset’s net contribution to identifiable net assets is:',[
 ['€56 million','Dies besteuert den gesamten Fair Value statt der temporären Differenz.'],
 ['€62 million','Fair Value 80 abzüglich DTL 18.'],
 ['€80 million','Die erforderliche latente Verpflichtung wurde ausgelassen.']
 ],1,[F('DTL=(80-20)\\cdot0{,}30=18,\\qquad NA=80-18=62','Die Steuerbasis vermindert die steuerpflichtige Differenz, nicht den angesetzten Brutto-Fair-Value.',[['DTL','Latente Steuerverbindlichkeit in Mio. Euro.'],['NA','Nettoeffekt auf identifizierbare Nettovermögenswerte in Mio. Euro.']]),'Bei unveränderter Gegenleistung steigt dadurch der Erwerbsrestbetrag gegenüber einer Rechnung ohne DTL um 18.'],'outside-profit'),
 q('25','practice','b d','A growing company’s total DTL remains constant because reversals of older differences are offset by new differences. The best conclusion is that:',[
 ['the DTL will never affect cash taxes and should always be treated as equity.','Ein konstanter Nettobestand beweist keine fehlenden Umkehrungen oder dauerhafte Neuaufnahme.'],
 ['gross reversals and new investments must be analyzed separately.','Ein Investitionsrückgang könnte neue Differenzen vermindern, während alte weiter auslaufen.'],
 ['every DTL is a conventional interest-bearing loan due next year.','Latente Verpflichtungen besitzen nicht pauschal diesen festen Kreditvertrag.']
 ],1,['Eine wirtschaftliche Beurteilung folgt Entstehungsart, Umkehrzeitraum und Investitionsplan. Die bilanzielle Klassifikation wird nicht allein durch eine konstante historische Summe aufgehoben.'],'analytical-treatment'),
 q('26','practice','b','An equity valuation already forecasts all cash-tax savings from recognized loss carryforwards. Adding the full related DTA again as an extra asset without adjustment would risk:',[
 ['double-counting the same economic tax benefit.','Der Vorteil steckt bereits in den höheren bewerteten Cashflows.'],
 ['omitting every tax benefit from value.','Die Prognose enthält die Einsparung ausdrücklich.'],
 ['increasing actual tax refunds by the DTA balance.','Eine Bewertungsrechnung erzeugt keinen zusätzlichen Erstattungsanspruch.']
 ],0,['Entweder wird die Steuerentlastung in den passenden Cashflows berücksichtigt oder konsistent separat bewertet. Beide Wege dürfen denselben Nutzen nicht ungeprüft doppelt erfassen.'],'analytical-treatment'),
 q('27','practice','b d','A qualifying IFRS lease creates equal taxable and deductible temporary differences. The DTA is fully usable and no recognition exception applies. Equal amounts alone:',[
 ['mean that no deferred-tax analysis is needed.','Gleiche Nettobeträge ersetzen nicht die Prüfung beider Differenzen.'],
 ['do not by themselves establish that the resulting DTA and DTL may be offset in presentation.','Saldierung verlangt zusätzliche einschlägige rechtliche und steuerliche Voraussetzungen.'],
 ['make both deferred amounts current cash receivables.','Latente Steuerfolgen sind keine automatisch sofort fälligen Zahlungsansprüche.']
 ],1,['Ansatz, Bewertung und Darstellung sind getrennte Schritte. Gleiche Anfangswerte können in späteren Perioden zudem unterschiedlich verlaufen.'],'exceptions'),
 q('28','practice','d','A company’s current-year effective tax rate falls following a one-time settlement of a prior-year tax dispute. For a forecast, the analyst should most appropriately:',[
 ['separate the settlement effect from recurring taxes and assess its actual cash timing.','Ein vergangenheitsbezogener Erfolg muss nicht die künftige laufende Belastung senken.'],
 ['assume the same settlement benefit repeats every year.','Der Sachverhalt nennt ausdrücklich einen Einmaleffekt.'],
 ['remove all taxes because the tax authority accepted a settlement.','Eine einzelne Streitbeilegung beseitigt nicht die laufenden Steuerpflichten des Geschäfts.']
 ],0,['Steuerquotenüberleitung und Angaben zu gezahlten Steuern helfen, Aufwandseffekt und Zahlung auseinanderzuhalten. Eine belastbare Prognose berücksichtigt außerdem künftige Gewinnverteilung und Umkehr temporärer Unterschiede.'],'disclosures'),
 q('a1','mock-a','a b','The only temporary difference concerns an asset with carrying value €180 million. Its recognized DTL is €20 million at an applicable 25% rate, with no valuation or recognition exceptions. The tax base is:',[
 ['€100 million','Die steuerpflichtige Differenz ist 20/25 % = 80; sie wird vom Buchwert abgezogen.'],
 ['€160 million','Dies zieht den Steuerbetrag direkt ab, statt ihn zunächst in die zugrunde liegende Differenz umzurechnen.'],
 ['€260 million','Dies addiert die steuerpflichtige Differenz und würde die entgegengesetzte Aktivabgrenzung erzeugen.']
 ],0,[F('TD=20/0{,}25=80,\\qquad TB=180-80=100','Steuerbetrag und temporäre Bewertungsdifferenz haben unterschiedliche Größenordnungen.',[['TD','Steuerpflichtige temporäre Differenz in Mio. Euro.'],['TB','Steuerbasis des Aktivums in Mio. Euro.']])],'signs'),
 q('a2','mock-a','a b d','Current tax expense is €65 million. DTL rises from €20 million to €35 million, of which €6 million is recognized in OCI and the rest in profit or loss. Gross DTA rises from €30 million to €40 million, while its valuation allowance falls from €10 million to €6 million; both DTA-related changes are in profit or loss. There are no other movements. Total income-statement tax expense is:',[
 ['€60 million','GuV-DTL steigt um 9; Netto-DTA steigt von 20 auf 34, also um 14.'],
 ['€64 million','Die Entlastung durch den Rückgang der Valuation Allowance um 4 wurde übergangen.'],
 ['€66 million','Der OCI-bezogene DTL-Anstieg 6 wurde unzulässig in den GuV-Steueraufwand aufgenommen.']
 ],0,[F('TE=65+[(35-20)-6]-[(40-6)-(30-10)]=60','Zuerst die Bewegungen nach Ausweis und tatsächlichem Nettoansatz bereinigen.',[['TE','Steueraufwand der Gewinnrechnung in Mio. Euro.']])],'outside-profit'),
 q('b1','mock-b','a b','Total tax expense is €54 million. Profit-or-loss DTL increases by €8 million and net DTA decreases by €2 million. Current tax payable decreases from €10 million to €6 million. No other movements or prepayments exist. Cash taxes paid are:',[
 ['€44 million','Das ist der hergeleitete laufende Aufwand vor Berücksichtigung der Steuerverbindlichkeit.'],
 ['€48 million','Laufender Aufwand 44 plus Abbau alter offener Steuern 4.'],
 ['€54 million','Gesamter Aufwand wurde ohne latente und laufende Abgrenzungsüberleitung als Zahlung interpretiert.']
 ],1,[F('CT=54-8-2=44,\\qquad CashTax=44+10-6=48','Der DTA-Rückgang ist zusätzlicher Aufwand und wird bei Rückrechnung auf laufende Steuer abgezogen.',[['CT','Laufender Steueraufwand in Mio. Euro.'],['CashTax','Gezahlte Steuer in Mio. Euro.']])],'expense-bridge'),
 q('b2','mock-b','b d','Loss carryforwards of €100 million expire at the end of Year 2. Supported operating taxable profit before loss relief totals only €20 million before expiry, but taxable temporary differences of €50 million also reverse before expiry in the same jurisdiction and qualifying income category. No double counting, annual limits, or other restrictions apply. At 30%, the usable DTA is:',[
 ['€6 million','Dies berücksichtigt nur operative Gewinne und lässt die ausdrücklich passende weitere Nutzungsquelle weg.'],
 ['€21 million','Verrechenbare Basis 20 + 50 = 70, begrenzt durch verfügbaren Verlust 100.'],
 ['€30 million','Es wurde der gesamte Verlust ohne ausreichende Nutzungsquelle angesetzt.']
 ],1,[F('DTA_{usable}=\\min(100,20+50)\\cdot0{,}30=21','Passende Umkehrungen steuerpflichtiger Unterschiede können neben operativen Gewinnen Nutzbarkeit tragen.',[['DTA_{usable}','Nutzbarer latenter Steueranspruch in Mio. Euro.']])],'valuation-allowance')
];
