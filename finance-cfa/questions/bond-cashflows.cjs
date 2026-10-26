const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,solution,section)=>Q('bcf-'+id,'bond-cashflows','bonds',pool,los,stem,options,0,solution,{section});
module.exports=[
 q('01','practice','a','In a simple amortizing loan, an annual payment consists of 60 interest and 250 principal. Immediately after this payment, the outstanding principal decreases by:',[
 ['250.','Nur der Tilgungsanteil vermindert das bereits ausstehende Nominal.'],
 ['310.','Die gesamte Rate enthält zusätzlich sechzig Zins; dieser ist keine weitere Tilgung.'],
 ['60.','Dies verwechselt das Entgelt auf die Schuld mit der Rückführung der Schuld.']
 ],['Zahlung ist Zins plus Tilgung.','Die Restschuld wird im einfachen nicht kapitalisierenden Plan um die Tilgung vermindert.'],'building-blocks'),
 q('02','practice','a','A four-year bullet note has face value 1,000 and a 6% annual coupon, paid once a year. With no default or early redemption, its total payment at the final annual date is:',[
 ['1,060.00.','Der letzte Kupon sechzig und das Nominal 1.000 fallen gemeinsam an.'],
 ['1,000.00.','Dies lässt den letzten noch fälligen Kupon weg.'],
 ['1,240.00.','Dies addiert auch bereits früher gezahlte Kupons zur letzten Zahlung.']
 ],[F('CF_4=1000+1000\\cdot0{,}06=1060','Die ersten drei Kupons wurden an ihren jeweiligen Terminen bezahlt.',[['CF_4','Gesamtzahlung am vierten Jahrestermin.']])],'bullet'),
 q('03','practice','a','A loan of 1,000 is repaid through four equal annual principal payments. Interest is 6% of each year’s opening balance. The first total payment is:',[
 ['310.00.','Tilgung 250 plus Zins sechzig.'],
 ['250.00.','Dies ist nur die Tilgung und enthält keinen Jahreszins.'],
 ['288.59.','Das ist näherungsweise die konstante Annuität eines anderen Plans.']
 ],[F('A_1=1000/4+1000\\cdot0{,}06=310','Gleiche Tilgung ist nicht gleiche Gesamtzahlung.',[['A_1','Gesamte erste Jahreszahlung.']])],'equal-principal'),
 q('04','practice','a','For the same 1,000 loan with four equal annual principal repayments and 6% annual interest on the opening balance, interest in year 3 is:',[
 ['30.00.','Nach zwei Tilgungen zu 250 bleiben zu Beginn von Jahr drei fünfhundert.'],
 ['45.00.','Dies gehört zum zweiten Jahr mit Anfangsschuld 750.'],
 ['60.00.','Dies verzinst weiterhin das ursprüngliche Nominal, obwohl bereits getilgt wurde.']
 ],[F('B_2=1000-2\\cdot250=500,\\quad I_3=500\\cdot0{,}06=30','Der Zins folgt der Anfangsschuld der betrachteten Periode.',[['B_2','Schuld nach der zweiten Zahlung.'],['I_3','Zins für das dritte Jahr.']])],'equal-principal'),
 q('05','practice','a','A four-year 1,000 loan carries 6% interest on its opening annual balance and repays 250 principal at each year-end. Its total undiscounted interest is:',[
 ['150.00.','Die Zinsbasis sinkt von 1.000 über 750 und fünfhundert auf 250.'],
 ['240.00.','Dies ist die Zinssumme einer vollständig endfälligen Schuld bei gleichen übrigen Daten.'],
 ['1,150.00.','Dies enthält neben Zins auch die Rückzahlung des Nominals.']
 ],[F('I_{total}=0{,}06(1000+750+500+250)=150','Die geringere Zinssumme entsteht durch frühere Kapitalrückgabe.',[['I_{total}','Summe aller vier Jahreszinsen.']])],'equal-principal'),
 q('06','practice','a','A fully amortizing loan of 1,000 has four equal year-end payments and a 6% annual rate. Ignoring rounding until the end, the annual payment is closest to:',[
 ['288.591492.','Der Barwert von vier gleichen Raten zum Vertragszins wird auf 1.000 abgestimmt.'],
 ['310.000000.','Dies ist die erste Rate bei gleicher Tilgung, nicht bei konstanter Gesamtzahlung.'],
 ['265.000000.','Dies ist die letzte Rate im Plan mit gleicher Tilgung.']
 ],[F('A=\\frac{1000\\cdot0{,}06}{1-1{,}06^{-4}}\\approx288{,}591492','Die Formel setzt jährliche nachschüssige Zahlung und den dazu passenden Periodenzins voraus.',[['A','Konstante gesamte Jahresrate aus Zins und Tilgung.']])],'annuity-derivation'),
 q('07','practice','a','A 1,000 annuity loan at 6% has an unrounded annual payment of 288.591492373273. The principal repaid in the first payment is closest to:',[
 ['228.591492.','Von der Rate werden zunächst sechzig Jahreszins abgezogen.'],
 ['288.591492.','Dies behandelt die gesamte Rate als Tilgung.'],
 ['771.408508.','Dies ist die verbleibende Schuld nach der ersten Rate.']
 ],[F('T_1=288{,}591492373273-1000\\cdot0{,}06\\approx228{,}591492','Die Zinszahlung reduziert nicht nochmals zusätzlich das Nominal.',[['T_1','Tilgungsanteil der ersten Jahresrate.']])],'annuity-case'),
 q('08','practice','a','After its first payment, a 6% annuity loan has outstanding principal 771.408507626727. The next full year’s interest is closest to:',[
 ['46.284510.','Die verbliebene Anfangsschuld wird ein Jahr mit sechs Prozent verzinst.'],
 ['60.000000.','Dies verwendet weiter das bereits teilweise getilgte Anfangsnominal.'],
 ['242.306982.','Dies ist der Tilgungsanteil einer zweiten Rate von rund 288,59.']
 ],[F('I_2=771{,}408507626727\\cdot0{,}06\\approx46{,}284510','Die konstante Rate kann deshalb einen größeren Tilgungsanteil enthalten.',[['I_2','Zins in der zweiten Jahresrate.']])],'annuity-case'),
 q('09','practice','a','For a fixed-rate, fully amortizing annuity loan with equal total payments and no fees, the usual payment pattern is that:',[
 ['interest decreases and principal repayment increases as the outstanding balance declines.','Sinkende Anfangsschuld senkt Zins; bei gleicher Gesamtzahlung bleibt mehr für Tilgung.'],
 ['principal repayment stays constant while total payment stays constant.','Bei positivem Zins würden dann auch die Zinsen konstant bleiben müssen; das passt nicht zur fallenden Schuld.'],
 ['interest increases because each constant payment creates additional outstanding debt.','Eine normale Annuität tilgt Schuld; sie kapitalisiert nicht jede Rate als neue Schuld.']
 ],['Aus Rate gleich Zins plus Tilgung folgt der veränderliche Anteil.','Bei Zins null ist die Rate dagegen reine gleiche Tilgung.'],'annuity-case'),
 q('10','practice','a','A 1,000 loan charges 6% annual interest on the opening balance. It repays 100 principal at the end of each of years 1–3 and the remaining principal in year 4. Its year-4 total payment is:',[
 ['742.00.','Zu Beginn von Jahr vier bleiben siebenhundert; dazu kommen 42 Zins.'],
 ['700.00.','Dies ist nur die verbleibende Tilgung.'],
 ['760.00.','Dies verzinst im letzten Jahr fälschlich noch das ursprüngliche Nominal 1.000.']
 ],[F('B_3=1000-3\\cdot100=700,\\quad A_4=700(1+0{,}06)=742','Der Ballon ist die Endtilgung; der letzte Kupon wird zusätzlich bezahlt.',[['B_3','Restschuld nach dem dritten Jahrestermin.'],['A_4','Gesamte vierte Jahreszahlung.']])],'balloon'),
 q('11','practice','a','A loan repays principal 250 at the end of each of years 1, 2, 3 and 4. Its weighted average life, considering only principal, is:',[
 ['2.50 years.','Jeder der vier Termine erhält ein Viertel des Tilgungsgewichts.'],
 ['4.00 years.','Dies ist die Endlaufzeit und die WAL einer vollständig endfälligen Schuld.'],
 ['1.00 year.','Dies würde die gesamte Tilgung an den ersten Termin verlegen.']
 ],[F('WAL=\\frac{250(1+2+3+4)}{1000}=2{,}5','Kupons und Abzinsung gehören nicht in diese Tilgungsgewichtung.',[['WAL','Gewichtete durchschnittliche Tilgungszeit in Jahren.']])],'wal'),
 q('12','practice','a','A loan repays principal 100, 100, 100 and 700 at the end of years 1 through 4. Its principal-weighted average life is:',[
 ['3.40 years.','Die große Endtilgung erhält siebzig Prozent Gewicht.'],
 ['2.50 years.','Dies würde gleiche Tilgungsbeträge an allen Terminen voraussetzen.'],
 ['4.00 years.','Dies ignoriert die vorherigen Tilgungen.']
 ],[F('WAL=\\frac{1\\cdot100+2\\cdot100+3\\cdot100+4\\cdot700}{1000}=3{,}4','Gleiche Endlaufzeit bedeutet keine gleiche mittlere Kapitalrückgabe.',[['WAL','Gewichtete Tilgungszeit des gegebenen Ballonplans, in Jahren.']])],'wal'),
 q('13','practice','a','Bullet, equal-principal, annuity and balloon plans each start with 1,000 and charge 6% annually on opening outstanding principal. All promised payments are made, with no fees. If every plan is discounted at that same 6% annual rate, each present value is:',[
 ['1,000.00.','Jeder vollständige Plan stimmt zum Vertragszins auf denselben Anfangsbetrag ab.'],
 ['1,240.00.','Dies ist die undiskontierte gesamte Zahlungssumme eines der Pläne.'],
 ['the same as its own undiscounted interest sum.','Ein Preisbarwert ist weder bloße Zinssumme noch bloße Zahlungssumme.']
 ],['Frühere Tilgung verringert die spätere Zinsbasis, bringt das Kapital aber früher zum Anleger zurück.','Die Gleichheit gilt unter den angegebenen einheitlichen Zins- und Zahlungsannahmen; andere Diskontsätze können unterschiedliche Werte erzeugen.'],'comparison'),
 q('14','practice','a','Weighted average life differs from Macaulay duration primarily because weighted average life:',[
 ['weights principal repayment dates without discounting coupon payments into market-value weights.','WAL verwendet Tilgung; Macaulay Duration verwendet abgezinste gesamte Zahlungen.'],
 ['measures percentage price change for one basis point directly.','Dies ist keine Definition der WAL.'],
 ['must equal final contractual maturity for every amortizing instrument.','Frühere Teiltilgung kann die WAL unter die Endlaufzeit senken.']
 ],['Endlaufzeit, mittlere Tilgungszeit und Marktpreissensitivität beantworten verschiedene Fragen.','Unsichere vorzeitige Tilgung macht zusätzlich die Annahmen der verwendeten WAL relevant.'],'wal'),
 q('15','practice','a','A zero-coupon instrument promises 1,000 in three years. At a 5% annually compounded discount rate, its price is closest to:',[
 ['863.837599.','Die einzige Endzahlung wird drei Jahresperioden abgezinst.'],
 ['850.000000.','Dies zieht dreimal fünf Prozent des Endnominals einfach ab und ignoriert Zinseszins.'],
 ['1,157.625000.','Dies zinst die Endzahlung auf statt sie abzuzinsen.']
 ],[F('P_0=1000/1{,}05^3\\approx863{,}837599','Es gibt in diesem Vertrag keine zusätzlichen laufenden Kupons.',[['P_0','Heutiger Preis des angegebenen versprochenen Endbetrags.']])],'zero'),
 q('16','practice','a','A 1,000 obligation pays no cash interest for two years. Instead, 8% interest is added annually to the then-outstanding debt. With no principal repayment, debt after two years is:',[
 ['1,166.40.','Im zweiten Jahr werden auch die im ersten Jahr hinzugekommenen achtzig verzinst.'],
 ['1,160.00.','Dies verwendet einfache Verzinsung ohne Zins auf kapitalisierten Zins.'],
 ['1,000.00.','Keine Cashzahlung bedeutet hier nicht, dass keine Zinsverpflichtung entsteht.']
 ],[F('B_2=1000\\cdot1{,}08^2=1166{,}4','Die gesamte Verzinsung wird in diesem eigenen PIK-Modell jährlich kapitalisiert.',[['B_2','Schuld nach der zweiten Jahreskapitalisierung.']])],'pik'),
 q('17','practice','a','An issue must redeem 20% of original principal annually under a sinking fund, but individual notes are selected for redemption according to the indenture. A holder should conclude that:',[
 ['issue-level principal declines, while the holder’s own redemption dates depend on the selection and purchase provisions.','Gesamtemission und einzelne Note können verschiedene Zahlungsfolgen haben.'],
 ['every individual note must pay exactly 20% of its principal to its owner each year.','Dies folgt ohne eine entsprechende anteilige Tilgungsregel nicht aus dem Emissionsplan.'],
 ['all future redemptions are already fully funded and free from issuer credit risk.','Eine Verpflichtung zur Mittelbereitstellung ist kein Nachweis vorhandener insolvenzfester Mittel.']
 ],['Vertragliche Auswahl, Rückkauf und Einlösung werden getrennt geprüft.','Der persönliche Wiederanlagebedarf kann sich vom gleichmäßigen Gesamtplan unterscheiden.'],'sinking'),
 q('18','practice','a','A stipulated payment waterfall pays senior interest 6 first, senior principal 20 second, junior interest 4 third, then junior principal 10. Available cash is only 20, with no costs or reserves. Senior principal paid now is:',[
 ['14.00.','Nach sechs Senior-Zins bleiben vierzehn verfügbar.'],
 ['20.00.','Dies würde zusammen mit dem zuerst zu zahlenden Zins mehr Cash als verfügbar verteilen.'],
 ['10.00.','Eine pauschal proportionale Aufteilung entspricht nicht der gegebenen Reihenfolge.']
 ],[F('T_{senior}=\\min(20,20-6)=14','Die übrigen Senior-Tilgung sechs und alle Juniorzahlungen sind in dieser Periode noch nicht bedient.',[['T_{senior}','Jetzt geleistete Senior-Tilgung im gegebenen Wasserfall.'],['\\min','Kleinerer Wert aus fälliger Tilgung und verbleibendem Cash.']])],'waterfall'),
 q('19','practice','a','A floater has outstanding principal 1,000, a 1 percentage point contractual spread and a half-year accrual fraction of 0.5. For the next period, its reference rate is fixed at 5% at the beginning of the period. The period-end coupon is:',[
 ['30.00.','Sechs Prozent annualisiert werden für eine halbe Jahresperiode angewendet.'],
 ['60.00.','Dies zahlt den ganzen Jahreszins in einer Halbjahresperiode.'],
 ['25.00.','Dies lässt den vertraglichen Spread weg.']
 ],[F('C=1000(0{,}05+0{,}01)0{,}5=30','Die gegebene Reset- und Zinsfraktionsregel wird ausdrücklich verwendet.',[['C','Cashkupon für die kommende Halbjahresperiode.']])],'floating'),
 q('20','practice','a','A floater’s contractual reference-rate reset works as specified, but the market requires a higher credit spread for the issuer. The most accurate assessment is that:',[
 ['the contractual spread need not reset, so the note’s market price can fall despite the reference-rate adjustment.','Referenzanpassung beseitigt nicht die Abweichung zwischen Vertragsaufschlag und Marktanforderung.'],
 ['the contractual spread automatically increases to the newly required market spread.','Das müsste als zusätzlicher Vertragsmechanismus vereinbart sein.'],
 ['all credit and market-price risk disappears because the coupon is floating.','Variable Verzinsung ist keine Ausfall- oder Preisgarantie.']
 ],['Der nächste Cashkupon und der Diskontsatz für die Ansprüche sind verschiedene Größen.','Reset-Termin, bereits festgelegte Periode und eventuelle Grenzen werden ebenfalls geprüft.'],'floating'),
 q('21','practice','a','A stipulated floater applies a 0% floor and 5% cap to the total coupon rate, including a 1 percentage point spread. If the reference rate is −2%, the resulting annualized coupon rate is:',[
 ['0.00%.','Erst Referenz und Spread addieren, dann den Gesamtfloor anwenden.'],
 ['1.00%.','Dies würde stattdessen den Referenzsatz vor Addition des Spreads auf null begrenzen.'],
 ['−1.00%.','Dies ignoriert den ausdrücklich vereinbarten Floor auf den Gesamtkupon.']
 ],[F('c=\\min(0{,}05,\\max(0,-0{,}02+0{,}01))=0','Der Ort der Begrenzung im Vertrag bestimmt die richtige Rechnung.',[['c','Annualisierter tatsächlich anzuwendender Gesamtkuponsatz als Dezimalzahl.'],['\\min,\\max','Kleinerer beziehungsweise größerer Vergleichswert.']])],'floor-cap'),
 q('22','practice','a','A stipulated trigger raises a note’s annual coupon rate by 25 basis points on face value 1,000. The additional annual coupon is:',[
 ['2.50.','25 Basispunkte entsprechen 0,0025 als Dezimalzahl.'],
 ['25.00.','Dies verwendet 2,5 statt 0,25 Prozentpunkte.'],
 ['250.00.','Dies verwendet 25 Prozent statt 25 Basispunkten.']
 ],[F('\\Delta C=1000\\cdot0{,}0025=2{,}5','Ein solcher Aufschlag ist keine automatische vollständige Kompensation jedes Kreditwertverlusts.',[['\\Delta C','Zusätzlicher Jahreskupon bei Eintritt des angegebenen Triggers.']])],'step-up'),
 q('23','practice','a','Under a simplified index-linked contract, original principal is 1,000, the base price index is 100 and the current applicable index is 104. The annual coupon rate is fixed at 2% on indexed principal. The annual cash coupon is:',[
 ['20.80.','Das Nominal steigt auf 1.040, während der Satz zwei Prozent bleibt.'],
 ['20.00.','Dies ignoriert die vereinbarte Anpassung der Kuponbasis.'],
 ['40.00.','Die vierprozentige Indexänderung ist nicht selbst der Kuponsatz.']
 ],[F('N=1000\\cdot104/100=1040,\\quad C=0{,}02\\cdot1040=20{,}8','Dieser eigene direkte Jahresindexfall ist keine tatsächliche TIPS-Terminrechnung mit Beobachtungsverzögerung.',[['N,C','Indexiertes Nominal und Jahreskupon im angegebenen Vertrag.']])],'inflation'),
 q('24','practice','a b','An inflation-linked security has a contractual maturity floor equal to original principal 1,000. An investor buys it later for 1,080. The floor by itself:',[
 ['does not guarantee recovery of the investor’s 1,080 purchase price or an unchanged price before maturity.','Die Untergrenze bezieht sich auf ursprüngliches Nominal am Endtermin.'],
 ['guarantees at least 1,080 at every possible sale date.','Dies macht aus einem Endtilgungsfloor eine jederzeitige Kaufpreisgarantie.'],
 ['requires each coupon to be computed on at least the investor’s purchase price.','Die Kuponbasis wird vom Vertrag bestimmt, nicht durch den Kaufbetrag eines einzelnen Anlegers.']
 ],['Indexiertes Nominal, Endfloor und sekundärer Kaufpreis werden getrennt gelesen.','Das konkrete TIPS-Beispiel im Kapitel besitzt eigene Produktregeln; diese werden nicht auf alle Indexanleihen übertragen.'],'inflation'),
 q('25','practice','a b','A note pays USD coupons but a fixed final principal amount of JPY 150,000. At redemption the rate is JPY 200 per USD. Ignoring fees and hedging, the principal receipt translated into USD is:',[
 ['750.00.','Bei JPY je USD wird der JPY-Betrag durch den Kurs geteilt.'],
 ['1,000.00.','Dies verwendet einen anderen Endkurs von 150 JPY je USD.'],
 ['30,000,000.00.','Multiplikation lässt die Einheiten in dieser Notierung nicht korrekt kürzen.']
 ],[F('CF_{USD}=150000/200=750','Die USD-Kupons werden nicht nochmals in diese reine Tilgungsumrechnung addiert.',[['CF_{USD}','In USD umgerechnete Endtilgung.']])],'dual-currency'),
 q('26','practice','a','With all other contractual and credit features held comparable, adding an issuer call to a plain bond gives the investor a value conventionally expressed as:',[
 ['plain-bond value minus the value of the call held by the issuer.','Der Anleger gibt dem Emittenten ein zusätzliches Wahlrecht.'],
 ['plain-bond value plus the issuer’s call value.','Dies ordnet den Optionsvorteil dem falschen Inhaber zu.'],
 ['the call price as a guaranteed minimum market price at all times.','Eine Kündigungsmöglichkeit ist keine jederzeitige Anleger-Verkaufsuntergrenze.']
 ],['Bei gleichem Kupon ist ein werthaltiges abgegebenes Recht eine Belastung des Anlegerwerts.','Bei gleichem Ausgabepreis kann stattdessen ein höherer Kupon zur Kompensation vereinbart werden.'],'rights'),
 q('27','practice','a','Immediately after a coupon, a plain continuation claim pays 80 in one year and 1,080 in two years. At a 3% annual discount rate, its value before considering any call is closest to:',[
 ['1,095.673485.','Beide verbleibenden Zahlungen werden zu ihren eigenen Zeitpunkten abgezinst.'],
 ['1,020.000000.','Ein gesonderter Call-Preis ist nicht der abgefragte Fortsetzungswert ohne Call.'],
 ['1,160.000000.','Dies ist nur die undiskontierte Summe.']
 ],[F('B_{cont}=80/1{,}03+1080/1{,}03^2\\approx1095{,}673485','Der gerade bereits gezahlte Kupon wird nicht erneut hinzugefügt.',[['B_{cont}','Heutiger Wert des verbleibenden Plans ohne Optionsausübung.']])],'call-case'),
 q('28','practice','a','An issuer can call now for 1,020 immediately after a coupon. The otherwise identical continuation claim is worth 1,000 at the current discount rate. Ignoring all fees and other benefits, exercising this call:',[
 ['is not economically attractive under these stated conditions because it costs more than continuation.','Der Emittent würde 1.020 ausgeben, um einen Anspruch im Wert 1.000 abzulösen.'],
 ['is always optimal because every issuer call must be exercised.','Ein Recht ist im Grundfall eine Wahl, keine Pflicht zur unvorteilhaften Ausübung.'],
 ['forces the investor to pay 20 to the issuer while keeping the bond.','Dies beschreibt nicht die gegebene Ablösung gegen Rückzahlung.']
 ],['Die Entscheidung vergleicht wirtschaftlichen Wert und erlaubten Ausübungsbetrag.','Andere konkrete Kosten, Bedingungen oder Vorteile müssten zusätzlich modelliert werden.'],'call-case'),
 q('29','practice','a','A bond’s normal call is prohibited for the next three years and later allowed only on listed dates. Its stated call price most accurately represents:',[
 ['an exercise amount under those specified provisions, not a universal current market-price boundary.','Zeitfenster, Kündigungsfrist und Zahlungen gehören zum Recht.'],
 ['an immediate guaranteed purchase offer to investors at every date.','Ein Emittenten-Call ist kein ständig ausübbarer Anleger-Put.'],
 ['a requirement that the issuer redeem the bond immediately whenever its market price moves.','Dies ignoriert Call Protection und die genannten Ausübungstermine.']
 ],['Die min-Rechnung im Kapitel gilt ausdrücklich am erlaubten sofortigen Entscheidungstermin unter idealisierten Bedingungen.','Sie wird nicht auf alle früheren Börsenkurse übertragen.'],'call-protection'),
 q('30','practice','a','Two years before original maturity, a note is called for 1,020 after its coupon. The proceeds can be invested at 3% annually. Without the call, 80 would arrive in one year and 1,080 in two years; the earlier 80 can also earn 3% for one year. Excluding identical earlier coupons, the no-call terminal wealth exceeds called terminal wealth by:',[
 ['80.282.','Beide Zahlungsfolgen werden auf denselben ursprünglichen Endtermin gebracht.'],
 ['20.000.','Dies betrachtet nur den Call-Aufschlag auf Nominal und ignoriert weitere Kupons.'],
 ['140.000.','Dies vergleicht undiskontierte Beträge ohne die angenommene Wiederanlage.']
 ],[F('W_{cont}=80\\cdot1{,}03+1080=1162{,}4,\\quad W_{call}=1020\\cdot1{,}03^2=1082{,}118','Die Differenz ist 80,282. Frühere identische Zahlungen gehören nicht nochmals in nur eine Alternative.',[['W_{cont},W_{call}','Vergleichbare Endvermögen ohne und mit Call im gegebenen Szenario.']])],'reinvestment'),
 q('31','practice','a','An investor may put a bond now for 1,000, immediately after its coupon. Continuation pays 40 in one year and 1,040 in two years; the annual discount rate is 9%. Assuming enforceable immediate payment and no other costs, the investor’s preferred value now is:',[
 ['1,000.00.','Die sofortige Put-Zahlung übersteigt den Fortsetzungswert rund 912,04.'],
 ['912.04.','Dies ignoriert die ausdrücklich verfügbare bessere Rückgabealternative.'],
 ['1,912.04.','Put-Ausübung und Behalten werden hier als Alternativen, nicht als zwei gleichzeitige Zahlungen angeboten.']
 ],[F('B_{cont}=40/1{,}09+1040/1{,}09^2\\approx912{,}044441<1000','Der Wert mit sofortiger Wahl ist der höhere der tatsächlich verfügbaren Werte.',[['B_{cont}','Wert der Fortsetzung ohne sofortige Put-Ausübung.']])],'put-case'),
 q('32','practice','a','At maturity an investor may choose either 1,000 cash principal or 20 shares priced at 60 each. Ignore default, other options and a separately identical coupon. The value of the chosen redemption is:',[
 ['1,200.00.','Die Aktienalternative ist höher als 1.000.'],
 ['2,200.00.','Dies addiert zwei einander ersetzende Alternativen.'],
 ['1,000.00.','Dies ignoriert die wertvollere ausdrücklich erlaubte Aktienlieferung.']
 ],[F('CF_T=\\max(1000,20\\cdot60)=1200','Der Anleger erhält im angegebenen Vertrag nicht gleichzeitig Nominal und Aktien.',[['CF_T','Wert der gewählten Rückzahlung am Endtermin T ohne separaten Kupon.'],['\\max','Größerer der beiden Alternativwerte.']])],'conversion'),
 q('33','practice','a','A convertible note also has an issuer call that can accelerate the investor’s conversion decision. A sound analysis should:',[
 ['model the actual interacting exercise provisions rather than automatically adding independent standard-option values.','Ein Recht kann den Zeitpunkt und die Verfügbarkeit anderer Wahlmöglichkeiten verändern.'],
 ['add face value, conversion value and full call value as three separate guaranteed payments.','Dies verdreifacht teils alternative Ansprüche und ordnet den Call-Vorteil falsch zu.'],
 ['ignore call dates because all conversion rights are automatically exercisable forever.','Die tatsächlich verfügbaren Termine und Bedingungen müssen bekannt sein.']
 ],['Zuerst werden zulässige Handlungen und ersetzte Zahlungen je Zustand bestimmt.','Eine Optionsbezeichnung allein ist noch kein vollständiges Preis- oder Ausübungsmodell.'],'combined-rights'),
 q('34','practice','a b','A company has a revolving credit facility of 100, of which 30 is drawn. Before computing interest and unused-line fees, the analyst should:',[
 ['distinguish the drawn principal from the undrawn commitment and apply their respective contractual charges.','Ausgezahlte Schuld und bloß nutzbarer Rahmen sind verschiedene Basen.'],
 ['treat all 100 as cash already received and repayable immediately.','Ein zugesagter Rahmen ist nicht automatisch vollständig ausgezahlt.'],
 ['assume every revolving credit facility is a fixed-coupon bullet bond.','Die Vertragsorganisation sagt die konkreten Zins- und Tilgungsregeln nicht vollständig voraus.']
 ],['Eine Bereitstellungsgebühr kann ungezogene Mittel betreffen; Sollzins kann auf die gezogene Schuld entfallen.','Die jeweiligen Bedingungen werden gelesen und nicht aus einem gemeinsamen Finanzierungsnamen ersetzt.'],'loans'),
 q('35','practice','a b','An instrument is marketed as asset-based Sukuk. To determine investor recourse and credit exposure, the analyst should primarily:',[
 ['examine effective asset rights, payment obligations, undertakings and enforceability under the actual documents.','Die Bezeichnung beweist weder echten insolvenzfesten Vermögenszugriff noch fehlenden Originatorbezug.'],
 ['assume every asset reference guarantees full repayment without asset or obligor risk.','Vermögensbezug beseitigt Wert- und Zahlungsrisiko nicht.'],
 ['assume all Sukuk in every jurisdiction have identical legal ownership and tax rules.','Rechtsgestaltung und Geltungsbereich unterscheiden sich.']
 ],['Die historische IFSB-Quelle erläutert eine begriffliche Unterscheidung; sie ersetzt keine aktuelle Vertragsprüfung.','Zahlungsquelle, Übertragung und gegebenenfalls verbleibender Schuldnerzugriff werden getrennt identifiziert.'],'sukuk'),
 q('36','practice','b','A German issuer makes a EUR-denominated domestic offering in the German market. Under the chapter’s simplified market classification, the EUR denomination alone:',[
 ['does not make it a Eurobond; issuer, market and distribution structure must also be considered.','Eurobond ist keine bloße Übersetzung von in Euro zahlender Anleihe.'],
 ['proves that every investor is exempt from all taxes.','Die Währung legt keinen allgemeinen Steuerstatus fest.'],
 ['makes it a foreign bond solely because EUR is used in several countries.','Für die vereinfachte Domestic-/Foreign-Unterscheidung zählt auch der Emittent im betrachteten Markt.']
 ],['Der eigene Fall ist als Domestic-Platzierung beschrieben.','Eine internationale Bezeichnung oder Währung ersetzt nicht das konkrete Angebots- und Anlegerregime.'],'classification'),
 q('37','practice','b','A US company issues JPY bonds in the Japanese domestic market. In the simplified classification used in the chapter, this is most appropriately described as:',[
 ['a foreign bond in Japan, commonly called a Samurai bond.','Ausländischer Emittent und japanischer Inlandsmarkt mit dessen Währung.'],
 ['a Japanese domestic bond solely because its coupons are in JPY.','Die Zahlungswährung verändert nicht den Sitz des Emittenten.'],
 ['necessarily a EUR-denominated Eurobond.','JPY ist nicht EUR und die internationale Marktklassifikation wird dadurch ebenfalls verfehlt.']
 ],['Sitz, Markt und Währung werden zusammen gelesen.','Diese vereinfachte Fallklassifikation macht keine zusätzliche Aussage über Bonität oder Steuerbefreiung.'],'classification'),
 q('38','practice','b','A USD-denominated international offshore bond placement is described as a Eurodollar bond. The term most accurately indicates that:',[
 ['Eurodollar refers to the international/offshore USD market, not a requirement for EUR payments.','Das Wort Euro im Marktnamen bestimmt nicht die Zahlungswährung EUR.'],
 ['all coupons must be paid in EUR and principal in USD.','Das wäre eine zusätzliche Dual-Currency-Regel, die hier nicht gegeben ist.'],
 ['the issuer and every holder must reside in the euro area.','Die Bezeichnung begründet keine solche gemeinsame Ansässigkeit.']
 ],['Bei tatsächlichen Dokumenten werden Angebotsmärkte und Tranchen zusätzlich geprüft.','Aus Offshore folgt keine pauschale Ausnahme von jedem Gesetz oder jeder Steuer.'],'classification'),
 q('39','practice','b','An offering relies on a valid exemption from one jurisdiction’s registration requirement. The most appropriate next conclusion is that:',[
 ['other applicable rules and the conditions for subsequent resale still need to be assessed.','Eine bestimmte Ausnahme ist keine universelle Rechts- oder Qualitätsfreigabe.'],
 ['all future resales to all buyers everywhere are unrestricted.','Dies weitet die Ausnahme über ihren belegten Umfang aus.'],
 ['the bond’s coupon and principal become guaranteed by that regulator.','Ein Emissionsweg ist keine Zahlungsgarantie.']
 ],['Relevante Markt-, Anleger- und Dokumentbedingungen werden einzeln zugeordnet.','Die SEC-Regulation-S-Quelle ist ein konkretes begrenztes Rahmenbeispiel und kein pauschales Offshore-Siegel.'],'regulation'),
 q('40','practice','b','A coupon of 60 suffers 15% withholding. The investor’s final tax is 30% of the gross coupon, with full credit for that withholding explicitly allowed. Additional tax due at final assessment is:',[
 ['9.00.','Die Gesamtsteuer achtzehn wird um den bereits einbehaltenen Betrag neun vermindert.'],
 ['18.00.','Dies würde die erlaubte Anrechnung ignorieren.'],
 ['27.00.','Dies addiert Quellensteuer und volle Endsteuer trotz vollständiger Anrechnung.']
 ],[F('T_{extra}=60\\cdot0{,}30-60\\cdot0{,}15=9','Zunächst kommen 51 an; nach weiteren neun bleiben 42. Die Anrechnung ist hier eine ausdrückliche Fallannahme.',[['T_{extra}','Zusätzlich zu zahlende Steuer bei der endgültigen Abrechnung.']])],'withholding'),
 q('41','practice','b','An investor buys immediately after a coupon for 980, receives a coupon of 60 after one year and sells immediately after that coupon for 1,010. Hypothetical tax is 30% on coupons and 20% on positive realized price gains, paid immediately. Ignoring costs, net one-year holding-period return is closest to:',[
 ['6.734694%.','Netto bleiben 42 Kupon und 24 Preisgewinn relativ zu 980 Anfangseinsatz.'],
 ['9.183673%.','Dies ist die Bruttorendite neunzig durch 980 ohne die angegebenen Steuern.'],
 ['4.285714%.','Dies verwendet nur den Nettokupon und lässt den Nettopreisgewinn weg.']
 ],[F('HPR_{net}=\\frac{60(1-0{,}30)+(1010-980)(1-0{,}20)}{980}\\approx6{,}734694\\%','Die Rückzahlung des ursprünglichen Einsatzes wird nicht als neuer steuerpflichtiger Preisgewinn angesetzt.',[['HPR_{net}','Netto-Haltedauerrendite über das eine Jahr.']])],'tax-cash'),
 q('42','practice','b','A hypothetical zero is issued for 863.837598531476 and compounds toward redemption at 5% annually. The assumed regime taxes each year’s accrued gain at 30%, paid externally that year. The first year’s tax is closest to:',[
 ['12.957564.','Die eigene Ertragsbasis wird mit fünf Prozent fortgeschrieben; davon werden dreißig Prozent bezahlt.'],
 ['0.000000.','Dies setzt entgegen dem ausdrücklich gegebenen Steuerregime Cashkupon mit steuerlichem Ertrag gleich.'],
 ['40.848720.','Dies ist die Steuer auf den gesamten Dreijahresgewinn, nicht nur auf den ersten Jahreszuwachs.']
 ],[F('T_1=863{,}837598531476\\cdot0{,}05\\cdot0{,}30\\approx12{,}957564','Der Bond zahlt in diesem Jahr selbst kein Cash; der Anleger hat trotzdem den gegebenen externen Steuerabfluss.',[['T_1','Hypothetische Steuerzahlung nach dem ersten Jahr.']])],'oid'),
 q('43','practice','b','Two hypothetical tax systems impose the same total tax on the same zero-coupon gain. One collects tax annually as the gain accrues; the other collects all of it at maturity. At a positive discount rate, holding all other effects constant:',[
 ['the earlier annual tax payments have a higher present cost than the same total tax paid only at maturity.','Frühere Abflüsse werden kürzer abgezinst.'],
 ['the two present costs must be identical because total undiscounted tax is identical.','Dies ignoriert die Zeitpunkte der Abflüsse.'],
 ['annual taxation creates coupon cash paid by the zero-coupon issuer.','Ein Steuerabfluss des Anlegers ändert nicht den Bond-Zahlungsvertrag.']
 ],['Für eine vollständige Vermögensrechnung werden auch frühere externe Steuerzahlungen oder ihre Finanzierung erfasst.','Der Vergleich behauptet keinen allgemeinen Vorteil eines konkreten Steuerlandes.'],'tax-comparison'),
 q('44','practice','b','A one-year note is purchased for 1,020 and pays coupon 60 plus principal 1,000 at maturity. The stipulated hypothetical tax base is the entire positive net investment gain, including the price change, taxed at 30% then. Net profit is:',[
 ['28.00.','Brutto entstehen vierzig, davon zwölf Steuer.'],
 ['42.00.','Dies ist nur der Nettokupon bei isolierter Kuponbesteuerung und kein vollständiger Gewinn.'],
 ['22.00.','Dies ignoriert die im gegebenen Regime ausdrücklich zulässige Berücksichtigung des Premiumverlusts.']
 ],[F('G_{net}=(60+1000-1020)(1-0{,}30)=28','Andere Regime können die Premiumbehandlung anders oder zu anderen Zeitpunkten gestalten.',[['G_{net}','Netto-Einjahresgewinn unter den ausdrücklich gegebenen Regeln.']])],'premium'),
 q('45','practice','b','Two otherwise comparable one-period investments differ only in the stipulated taxation of interest. One yields 4% fully tax-exempt; the other is fully taxed at 30%. The taxable gross yield producing the same net interest is closest to:',[
 ['5.714286%.','Nach Abzug von dreißig Prozent müssen vier Prozent verbleiben.'],
 ['2.800000%.','Dies besteuert die bereits steuerfreie Rendite statt die benötigte Bruttorendite zu bestimmen.'],
 ['4.300000%.','Ein Steuersatz wird nicht als pauschaler additiver Renditeaufschlag verwendet.']
 ],[F('y_{taxable}=0{,}04/(1-0{,}30)\\approx5{,}714286\\%','Die Gleichsetzung setzt die angenommene Vergleichbarkeit und die vollständige steuerliche Behandlung voraus.',[['y_{taxable}','Erforderliche steuerpflichtige Bruttorendite im eigenen Einperiodenvergleich.']])],'tax-comparison'),
 q('46','practice','b','An issuer pays cash interest 60 and, by assumption, can fully and immediately deduct that interest at a 30% tax rate. Its net interest cost after the stated tax benefit is:',[
 ['42.00.','Zins sechzig minus tatsächlich nutzbarer Steuervorteil achtzehn.'],
 ['18.00.','Dies ist nur die Steuerersparnis.'],
 ['78.00.','Dies addiert die Steuerwirkung als Belastung, obwohl der gegebene nutzbare Abzug entlastet.']
 ],[F('C_{cost}=60(1-0{,}30)=42','Diese Emittentenrechnung ist von der Anlegerbesteuerung und der Nominalrückzahlung zu unterscheiden.',[['C_{cost}','Nettokosten der angegebenen Cashzinszahlung beim Emittenten.']])],'issuer-tax'),
 q('a1','mock-a','a b','An investor funds 1,200 at par under a three-year loan with equal annual principal repayments and 5% annual interest on opening principal. Under the stated hypothetical tax regime, only cash interest is taxed at 25%; repayment of original principal is not taxed. Taxes are paid when interest is received, with no other costs. The investor’s first year-end net cash receipt is:',[
 ['445.00.','Tilgung vierhundert plus Nettocashzins fünfundvierzig.'],
 ['345.00.','Dies besteuert entgegen der Angabe auch die Tilgung vierhundert.'],
 ['460.00.','Dies ist die Bruttozahlung ohne Steuer auf sechzig Zins.']
 ],[F('T_1=1200/3=400,\\quad I_1=1200\\cdot0{,}05=60','Gleiche Tilgung bestimmt die Kapitalrückgabe; die volle Anfangsschuld erzeugt den ersten Jahreszins.',[['T_1,I_1','Erste Tilgung und erster Jahreszins.']]),F('CF_{1,net}=400+60(1-0{,}25)=445','Nur der Zins wird nach der ausdrücklich gegebenen Fallregel besteuert.',[['CF_{1,net}','Tatsächlich verfügbarer erster Netto-Cashzufluss.']])],'tax-cash'),
 Q("bcf-b1",
   "bond-cashflows",
   "bonds",
   "mock-b",
   "a b",
   "A note adds 10% interest to outstanding debt annually rather than paying cash for two years, starting from principal 1,000. An analyst also claims that the note’s offshore label alone exempts every holder and resale from all regulation and taxes. The most accurate combined assessment is that:",
   [["debt grows to 1,210 under the specified capitalization, while the broad regulatory and tax claim is unsupported.","Zinseszins erhöht die Schuld; Offshore ersetzt keine konkrete Prüfung von Regeln und Anlegerstatus."],["debt stays at 1,000 because there are no cash coupons, and the offshore label establishes the exemption.","Dies verwechselt Cashfreiheit mit Zinsfreiheit und überdehnt die Marktbezeichnung."],["debt grows to 1,200 using simple interest, while the offshore label alone does not establish a blanket exemption.","Der rechtliche Vorbehalt ist zutreffend. Die Schuldrechnung lässt jedoch den Zins auf den bereits kapitalisierten ersten Jahreszins weg: Im zweiten Jahr verzinsen sich 1100 statt 1000."]],
   0,
   [{"kind":"formula","tex":"B_2=1000\\cdot1{,}10^2=1210","reading":"Die zwei Jahre werden auf die jeweils ausstehende Schuld angewendet.","symbols":[["B_2","Schuld nach zwei Jahren im gegebenen Kapitalisierungsplan."]]},"Marktklassifikation, Vertragsrecht, Angebotszulässigkeit, Übertragung und Anlegerbesteuerung werden getrennt geprüft."],
   {"section":"jurisdictions"})
];
