const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('lc-'+id,'leases-compensation','statements',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a','A lessee applying current US GAAP enters a five-year lease classified as an operating lease. No recognition exemption applies. At commencement, the lessee most likely recognizes:',[
  ['only rental expense and no balance sheet obligation.','Dies verwechselt das heutige Nutzungsrechtsmodell mit der früheren außerbilanziellen Behandlung.'],
  ['a right-of-use asset and a lease liability.','Auch ein gewöhnliches US Operating Lease wird grundsätzlich bilanziell erfasst.'],
  ['the legal ownership of the underlying asset as inventory.','Rechtliches Eigentum geht durch die Nutzungserlaubnis nicht automatisch über; erfasst wird das Nutzungsrecht.']
 ],1,['Klassifikation und Bilanzansatz sind getrennte Entscheidungen. Finance und Operating unterscheiden sich unter anderem im Aufwands- und Cashflowausweis, aber beide erzeugen grundsätzlich Nutzungsrecht und Leasingverbindlichkeit.'],'lease-contract'),
 q('02','practice','a','A lease liability is 100,000 at the start of a year. The annual effective interest rate is 6%, and a payment of 30,000 occurs at year-end. With no remeasurement, the year-end liability is:',[
  ['70,000','Hier wird die gesamte Rate als Tilgung behandelt und die Zinskomponente ignoriert.'],
  ['76,000','6.000 Zinsen erhöhen zunächst den Bestand; die Zahlung vermindert ihn um 30.000.'],
  ['106,000','Dieser Wert enthält die Aufzinsung, aber noch nicht die Zahlung.']
 ],1,[F('L_1=100000(1{,}06)-30000=76000','Die tatsächliche Tilgung beträgt 24.000, nicht 30.000.',[['L_1','Leasingverbindlichkeit nach der Jahresendzahlung.']])],'lease-measurement'),
 q('03','practice','a c','Two otherwise identical lessees have level annual payments and no initial adjustments or impairment. One reports a finance lease and the other a US GAAP operating lease. Early in the lease, the finance lease generally produces:',[
  ['lower total cash payments.','Die Bilanzierung verändert die vertraglich gleichen Raten nicht.'],
  ['equal annual total expense throughout the contract.','Im Finanzierungsmodell sinkt die Zinskomponente bei linearer Abschreibung.'],
  ['higher total lease-related expense and lower net income.','Die Kombination aus konstanter Abschreibung und anfangs hohem Zins zieht Aufwand vor.']
 ],2,['Die Rate bleibt gleich, aber die Aufwandsverteilung unterscheidet sich. Anfangs ist die Schuld hoch und damit der Zinsaufwand größer; beim US Operating Lease ist der gesamte periodische Leasingaufwand unter den angegebenen Bedingungen gleichmäßig.'],'lease-comparison'),
 q('04','practice','a c','A US GAAP finance lessee pays 18,000, comprising interest of 3,000 and principal of 15,000. Ignoring other cash flows, the payment is classified as:',[
  ['3,000 operating outflow and 15,000 financing outflow.','US Finance Lease trennt Zins und Tilgung in dieser Weise.'],
  ['18,000 operating outflow.','Dies wäre die gewöhnliche Behandlung einer US-Operating-Lease-Rate.'],
  ['18,000 financing outflow.','Der US-GAAP-Zinsanteil gehört hier zum operativen Cashflow.']
 ],0,['Zuerst wird die Vertragsart identifiziert. Danach wird die Rate zerlegt: Zinsen sind unter US GAAP operativ, Tilgung ist beim Finance Lease Finanzierung. Der gesamte Cashabfluss bleibt 18.000.'],'lease-comparison'),
 q('05','practice','a','An IFRS lessor retains an asset under an operating lease. It most likely:',[
  ['derecognizes the asset and recognizes all future rentals as immediate revenue.','Eine sofortige Erfassung sämtlicher künftiger Mieten ist keine periodengerechte Operating-Lease-Abbildung.'],
  ['continues to recognize and depreciate the asset while recognizing lease income.','Der Vermögenswert bleibt beim Leasinggeber; Nutzungsertrag und Abschreibung werden über die Zeit erfasst.'],
  ['recognizes the lessee’s right-of-use asset in addition to the physical asset.','Das Nutzungsrecht des Lessee ist nicht ein zusätzlicher Vermögenswert des Lessor.']
 ],1,['Die Frage betrifft den Leasinggeber. Seine Operating-Lease-Bilanzierung darf nicht mit dem Nutzungsrechtsmodell des Leasingnehmers verwechselt werden.'],'lessor'),
 q('06','practice','b','An employer sponsors a defined contribution plan and has paid all contractually required contributions. The employer does not guarantee investment returns or benefits. Who primarily bears the risk that investment performance is insufficient to fund the employee’s desired retirement income?',[
  ['The employee.','Die Beitragshöhe ist zugesagt; das gewünschte spätere Rentenniveau ist ausdrücklich nicht garantiert.'],
  ['The employer, because every pension plan guarantees a benefit.','Eine Beitragszusage ist gerade keine pauschale Leistungszusage.'],
  ['Neither party, because making the contribution eliminates investment risk.','Das Risiko wird durch die Zahlung nicht beseitigt; es liegt weiterhin im Anlageergebnis.']
 ],0,['Die wirtschaftliche Risikozuordnung folgt der Zusage. Eine noch unbezahlte fällige Rate könnte eine Arbeitgeberverbindlichkeit sein; im Fall wurden jedoch alle erforderlichen Beiträge geleistet.'],'pensions'),
 q('07','practice','b','A defined benefit obligation is 800 and plan assets have a fair value of 690. Ignoring asset ceilings and other adjustments, the sponsor reports:',[
  ['a pension asset of 110.','Das Vorzeichen ist vertauscht: Verpflichtung übersteigt das Deckungsvermögen.'],
  ['a pension liability of 690.','Planaktiva sind der Deckungsbestand, nicht die Nettoschuld.'],
  ['a net pension liability of 110.','800 minus 690 ergibt die Unterdeckung.']
 ],2,[F('N=800-690=110','Die Zusage wird mit dem zugehörigen Planvermögen saldiert.',[['N','Netto-Pensionsverpflichtung.']])],'pensions'),
 q('08','practice','b','Holding promised benefits and all other assumptions constant, a decrease in the discount rate used for a defined benefit obligation most likely:',[
  ['decreases the obligation because financing is cheaper.','Ein niedrigerer Abzinsungssatz erhöht den Barwert einer unveränderten späteren Zahlung.'],
  ['increases the obligation.','Die künftigen Leistungen werden weniger stark abgezinst.'],
  ['does not affect the obligation until benefits are paid.','Der Bilanzwert enthält bereits heute die Bewertung künftiger Leistungen.']
 ],1,['Für eine Leistung von 100 in zehn Jahren ergeben 5 % einen heutigen Wert von etwa 61,39; bei 4 % sind es 67,56. Die tatsächliche Zahlung bleibt 100. Die Bewertungsänderung geschieht vor der Auszahlung.'],'pensions'),
 q('09','practice','b','Under IAS 19, service cost is 24, the opening defined benefit obligation is 600, opening plan assets are 500, and the discount rate is 5%. All contributions and benefits occur at year-end. With no other profit-or-loss components, pension expense in profit or loss is:',[
  ['24','Hier fehlt der Nettozins auf die Unterdeckung.'],
  ['29','Nettozins 5 plus Dienstzeitaufwand 24.'],
  ['54','Dieser Wert enthält Verpflichtungszinsen, aber keinen korrespondierenden Zinsertrag des Planvermögens.']
 ],1,[F('PPC=24+0{,}05(600-500)=29','Der IFRS-Nettozins verwendet denselben Diskontsatz für die beiden Anfangsbestände.',[['PPC','Pensionsaufwand in der GuV unter den angegebenen Bedingungen.']])],'pensions'),
 q('10','practice','b c','Under IFRS, an actuarial loss from remeasuring a defined benefit obligation is generally:',[
  ['recognized in OCI without subsequent recycling to profit or loss.','IAS 19 trennt Neubewertungen von Dienstzeitaufwand und Nettozins.'],
  ['ignored until the sponsor makes an additional contribution.','Bilanzielle Neubewertung hängt nicht davon ab, ob sofort Cash eingezahlt wird.'],
  ['recognized only as an increase in service cost in the next year.','Eine Neubewertung ist nicht automatisch neu erdiente Dienstzeit.']
 ],0,['Das sonstige Ergebnis verändert Eigenkapital und Nettopensionsposition, auch wenn die laufende GuV den Neubewertungsverlust nicht enthält. Deshalb gehört OCI zur Analyse der Finanzierungslage.'],'pension-comparison'),
 q('11','practice','b','A company grants 600 equity-settled share awards with a grant-date fair value of 15 each, conditional only on three years of service. Under IFRS, all are expected to vest, and the service is provided evenly. First-year expense is:',[
  ['0','Kein aktueller Cashabfluss bedeutet nicht, dass keine Arbeitsleistung verbraucht wird.'],
  ['3,000','9.000 Gesamtwert werden über drei Dienstjahre verteilt.'],
  ['9,000','Dies ist der Gesamtwert, nicht der Aufwand eines von drei Dienstjahren.']
 ],1,[F('Exp_1=\\frac{600\\cdot15}{3}=3000','Bewertungsbasis und Zeitraum der Leistung bestimmen gemeinsam den Aufwand.',[['Exp_1','Aufwand des ersten Dienstjahres.']])],'share-payments'),
 q('12','practice','c','A pension deficit increases even though the employer has paid substantial contributions. Which disclosure is most useful for distinguishing a change in actuarial assumptions from cash underfunding?',[
  ['Only the closing cash balance of the operating company.','Der Cashbestand isoliert weder Planaktiva noch versicherungsmathematische Effekte.'],
  ['Only the number of common shares outstanding.','Diese Größe erklärt keine Überleitung der Pensionsverpflichtung.'],
  ['Reconciliations of the benefit obligation and plan assets, including remeasurements and contributions.','Die Überleitungen trennen Markt- und Schätzänderungen von Ein- und Auszahlungen.']
 ],2,['Eine Schlussbilanz zeigt den Zustand, die Überleitung seine Ursachen. Zusätzliche Sensitivitäten helfen zu beurteilen, wie stark die Position auf Diskontsatz oder Langlebigkeit reagiert.'],'disclosures'),
 q('a1','mock-a','a','An IFRS lessee has an initial lease liability of 50,000, prepaid rentals of 4,000, qualifying initial direct costs of 1,500, and a lease incentive of 2,000 not already reflected in those amounts. With no restoration obligation, the initial right-of-use asset is:',[
  ['49,500','Hier wurde die Vorauszahlung fälschlich nicht als Kostenbestandteil berücksichtigt.'],
  ['53,500','50.000 + 4.000 + 1.500 − 2.000 ergibt das Nutzungsrecht.'],
  ['57,500','Hier wird der Anreiz addiert, obwohl er die Anschaffungskosten senkt.']
 ],1,[F('ROU_0=50000+4000+1500-2000=53500','Verbindlichkeit und Nutzungsrecht müssen nicht denselben Anfangsbetrag haben.',[['ROU_0','Anfänglicher Buchwert des Nutzungsrechts.']])],'lease-measurement'),
 q('a2','mock-a','b','A company reports an opening net pension liability of 40. During the year it recognizes pension expense of 12 in profit or loss and a remeasurement loss of 7 in OCI. Employer contributions are 15. There are no other changes. The closing net pension liability is:',[
  ['37','Dieser Wert lässt den Neubewertungsverlust aus.'],
  ['44','40 + 12 + 7 − 15 = 44.'],
  ['74','Hier wird der Arbeitgeberbeitrag als zusätzliche Schuld statt als Finanzierung des Plans behandelt.']
 ],1,[F('N_1=40+12+7-15=44','Beiträge verringern den ungedeckten Teil; Aufwand und Neubewertungsverlust erhöhen ihn.',[['N_1','Netto-Pensionsverpflichtung am Periodenende.']])],'pensions'),
 q('b1','mock-b','a c','A manufacturing company applies IFRS 18 and the related IAS 7 amendments. It has no specified main business activity of investing in assets or providing financing. Its recognized lease payment consists of principal of 20 and interest of 4. These components are classified as:',[
  ['24 in financing cash outflows.','Unter der ausdrücklich angegebenen neuen Basis gehören hier Tilgung und gezahlter Zins zur Finanzierung.'],
  ['4 in operating and 20 in financing cash outflows.','Dies entspricht etwa US Finance Lease oder einem früheren IFRS-Wahlrecht, nicht der angegebenen Basis.'],
  ['24 in investing cash outflows.','Eine Leasingrückzahlung ist kein Cashkauf des Nutzungsrechts in dieser Zuordnung.']
 ],0,['Die Frage benennt sowohl IFRS-18-Anwendung als auch den Geschäftstyp. Dadurch ist das ältere IAS-7-Wahlrecht keine passende Antwort. Die Unterscheidung ist besonders wichtig, wenn Lernunterlagen aus unterschiedlichen Berichtsjahren verglichen werden.'],'lease-comparison'),
 q('b2','mock-b','b','A cash-settled share-based award remains outstanding at the reporting date. Compared with an otherwise simple equity-settled award, its measurement most likely requires:',[
  ['using only the grant-date share price with no subsequent adjustment.','Dies verwechselt die Verpflichtungsbewertung mit einer gewöhnlichen Eigenkapitalzusage.'],
  ['ignoring the award until cash is paid.','Die bereits erbrachte Arbeitsleistung ist vor der Auszahlung zu erfassen.'],
  ['remeasuring the liability at the reporting date.','Der bar zu erfüllende Anspruch wird grundsätzlich bis zur Erfüllung neu bewertet.']
 ],2,['Die Erfüllungsart ist die entscheidende Weiche. Ein späterer Kursanstieg kann deshalb bei der bar erfüllten Zusage zusätzlichen Aufwand erzeugen, während der Grant-Date-Fair-Value einer einfachen Eigenkapitalzusage grundsätzlich bestehen bleibt.'],'share-payments')
];
