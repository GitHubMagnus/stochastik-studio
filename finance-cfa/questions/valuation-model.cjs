const {Q,F}=require('../author.cjs');
const q=(id,pool,los,stem,options,solution,section)=>Q('vmod-'+id,'valuation-model','equity',pool,los,stem,options,0,solution,{section});
module.exports=[
 q('01','practice','a b','The primary benefit of linking a financial statement forecast to equity valuation is that it:',[
 ['connects operating assumptions to earnings, required investment, financing and the relevant ownership claim.','Die gesamte wirtschaftliche Kette wird sichtbar und prüfbar.'],
 ['makes the company’s projected earnings certain.','Modellintegration entfernt Zukunftsunsicherheit nicht.'],
 ['eliminates the need to consider capital investment.','Gerade der Kapitalbedarf verbindet Gewinn und freie Zahlung.']
 ],['Gewinn ist keine automatisch ausschüttbare Zahlung.','Eine vollständige Bewertung verbindet Ertrag, Kapitalbedarf und Anspruchsgrenzen.'],'architecture'),
 q('02','practice','a','A single-product company forecasts unit volume growth of 3% and a realized price increase of 4%. Expected revenue growth is closest to:',[
 ['7.12%','Mengen- und Preiseffekt einschließlich Kreuzterm werden multipliziert.'],
 ['7.00%','Dies lässt den Kreuzterm aus.'],
 ['12.00%','Dies multipliziert Prozentzahlen ohne die Ausgangsfaktoren.']
 ],[F('u=1{,}03\\cdot1{,}04-1=0{,}0712','Der neue Umsatz beträgt 107,12 Prozent des alten.',[['u','Umsatzwachstumsrate als Dezimalzahl.']])],'revenue'),
 q('03','practice','a b','Revenue is 500 and reported EBIT is 60, including a nonrecurring operating gain of 10. With no other adjustments, the normalized EBIT margin is:',[
 ['10.00%','Fortgesetzter EBIT fünfzig wird durch Umsatz fünfhundert geteilt.'],
 ['12.00%','Dies verwendet den unbereinigten Gewinn.'],
 ['14.00%','Dies addiert den Sondereffekt erneut.']
 ],[F('m_{norm}=(60-10)/500=10\\%','Die Zukunftsbasis entfernt den ausdrücklich nicht wiederkehrenden operativen Gewinn.',[['m_{norm}','Normalisierte EBIT-Marge.']])],'information'),
 q('04','practice','a c','An increase in ending inventory, with unchanged recognized expenses and all other assumptions, most directly:',[
 ['reduces operating cash flow by tying up additional funds.','Mehr Bestand benötigt zusätzliche Mittel.'],
 ['increases profit by the same amount.','Die Bestandsbindung ist nicht automatisch zusätzlicher Periodengewinn.'],
 ['has no effect on cash because inventory is an asset.','Gerade der zusätzliche Vermögensbestand kann Zahlungsbedarf erzeugen.']
 ],['Die indirekte Rechnung zieht zusätzlichen operativen Vorratsbestand ab.','Die konkrete Kostenfluss- und Zahlungsbasis muss dazu passen.'],'working-capital'),
 q('05','practice','a c','Opening operating working capital is 100 on revenue of 500. Forecast revenue is 530 and the target ending working-capital-to-revenue ratio rises to 25%. The increase in working capital is:',[
 ['32.50','Der neue Endbestand 132,5 wird mit dem tatsächlichen Anfangsbestand hundert verglichen.'],
 ['6.00','Dies behält die alte Zwanzigprozentquote bei.'],
 ['26.50','Dies ist nur die zusätzliche Bindung gegenüber dem unveränderten Quotenszenario.']
 ],[F('\\Delta WC=530\\cdot0{,}25-100=32{,}5','Die neue Quote gilt auf den gesamten Endumsatz, nicht nur auf das Wachstum.',[['\\Delta WC','Zusätzliche operative Kapitalbindung.']])],'working-capital'),
 q('06','practice','a c','Opening net PPE is 250, depreciation is 30 and cash capital expenditure is 45. There are no disposals, impairments or other PPE movements. Ending net PPE is:',[
 ['265.00','Anfangsanlagen plus Zugang minus Abschreibung.'],
 ['295.00','Dies lässt Abschreibung aus.'],
 ['235.00','Dies zieht Investitionen statt Abschreibung ab.']
 ],[F('PPE_1=250+45-30=265','Bruttoinvestition und Nettoanlagenzuwachs sind verschieden.',[['PPE_1','Nettoanlagenbuchwert am Jahresende.']])],'assets'),
 q('07','practice','a c','An unlevered company forecasts revenue of 530, EBIT margin of 18% after depreciation and immediate tax of 25%. With no other income or claims, forecast net income is:',[
 ['71.55','EBIT 95,4 wird einmal nach Steuern gerechnet.'],
 ['95.40','Dies ist EBIT vor Steuer.'],
 ['49.05','Dies würde Abschreibung dreißig nochmals vom bereits nach Abschreibung definierten EBIT abziehen.']
 ],[F('NI=530\\cdot0{,}18\\cdot0{,}75=71{,}55','Die Marge ist ausdrücklich nach Abschreibung definiert.',[['NI','Nachsteuergewinn im unverschuldeten Fall.']])],'case-forecast'),
 q('08','practice','a c','An unlevered company has net income of 71.55, depreciation of 30 and an increase in operating working capital of 6. Taxes are paid immediately and there are no other accruals. Operating cash flow is:',[
 ['95.55','Abschreibung wird addiert und zusätzliche Bestandsbindung abgezogen.'],
 ['107.55','Dies addiert die zusätzliche Bestandsbindung.'],
 ['50.55','Dies wäre nach zusätzlichem Capex fünfundvierzig der freie Cashflow.']
 ],[F('CFO=71{,}55+30-6=95{,}55','CFO ist vor den Anlageninvestitionen definiert.',[['CFO','Operativer Cashflow.']])],'cashflow'),
 q('09','practice','a c','Operating cash flow is 95.55 and capital expenditure is 45. No financing flows enter the operating cash flow. FCFF is:',[
 ['50.55','Anlagenzahlungen werden vom operativen Cashflow abgezogen.'],
 ['95.55','Dies lässt Capex aus.'],
 ['140.55','Dies addiert die Investitionsauszahlung.']
 ],[F('FCFF=95{,}55-45=50{,}55','Die freie Zahlung ist nach erforderlichen Anlageninvestitionen.',[['FCFF','Freier Cashflow für operative Kapitalgeber.']])],'cashflow'),
 q('10','practice','a c','Following a time-zero special payout, opening common book equity is 350. Net income is 71.55 and the annual dividend is 50.55. There are no other equity movements. Ending book equity is:',[
 ['371.00','Der einbehaltene Gewinn beträgt einundzwanzig.'],
 ['401.00','Dies würde die bereits ausgezahlten dreißig noch im Anfangskapital belassen.'],
 ['472.10','Dies addiert statt subtrahiert die Jahresdividende.']
 ],[F('B_1=350+71{,}55-50{,}55=371','Die Eigentümerzahlung reduziert Buchkapital, nicht den Periodengewinn.',[['B_1','Endstammbuchkapital.']])],'balance-check'),
 q('11','practice','a c','A company has common book equity of 380 immediately before paying surplus cash of 30 to existing shareholders at time zero. No other transaction occurs. Book equity immediately after the payment is:',[
 ['350.00','Die heutige Eigentümerauszahlung vermindert Vermögen und Buchkapital gleichermaßen.'],
 ['380.00','Dies ignoriert den ausgezahlten Betrag.'],
 ['410.00','Dies addiert die Ausschüttung zum verbleibenden Kapital.']
 ],[F('B_{after}=380-30=350','Das folgende Abschlussmodell beginnt mit der Bilanz nach heutiger Zahlung.',[['B_{after}','Buchkapital nach Sonderausschüttung.']])],'case-opening'),
 q('12','practice','a c','Surplus cash is excluded from a company’s operating forecast and is to be distributed immediately. To estimate equity value immediately before that distribution, an analyst should:',[
 ['add the surplus cash once to the operating value, with other claims adjusted consistently.','Separates, noch vorhandenes Cash gehört einmal zum betrachteten Anspruch.'],
 ['include it in operating working capital and add it again to operating value.','Dies mischt Rollen und kann doppelt zählen.'],
 ['ignore it because it will not remain invested in the business.','Vor der Zahlung besitzt der Eigentümer den Ausschüttungsanspruch.']
 ],['Der Stichtag vor oder nach der Zahlung ist entscheidend.','Nach Zahlung beträgt der Aktienwert entsprechend weniger, aber der bisherige Eigentümer hat Cash erhalten.'],'claims'),
 q('13','practice','a c','Net income is 40, depreciation 15, capital expenditure 25 and the increase in operating working capital 5. New borrowing minus repayments is 10. FCFE is:',[
 ['35.00','Nettoschuldenaufnahme erhöht die freie Eigentümerzahlung.'],
 ['25.00','Dies lässt die Nettoschuldenaufnahme aus.'],
 ['15.00','Dies zieht neue Nettoschuldenaufnahme ab.']
 ],[F('FCFE=40+15-25-5+10=35','NI enthält bereits Zins; Nettoschuldenaufnahme wird gesondert ergänzt.',[['FCFE','Freie Zahlung des erfassten Eigenkapitalanspruchs.']])],'tax-financing'),
 q('14','practice','a c','EBIT is 100, immediate tax rate is 25%, depreciation is 20, capital expenditure is 30 and operating working capital increases by 10. FCFF is:',[
 ['55.00','Nachsteuer-EBIT plus Abschreibung minus beide Investitionsbindungen.'],
 ['80.00','Dies lässt die operative Steuer aus.'],
 ['75.00','Dies zieht Working Capital nicht ab, sondern addiert es.']
 ],[F('FCFF=100\\cdot0{,}75+20-30-10=55','FCFF wird vor der Finanzierungsverteilung gerechnet.',[['FCFF','Freier operativer Cashflow.']])],'tax-financing'),
 q('15','practice','a c','FCFF is 55, interest expense is 8 with an immediately usable 25% tax deduction, and net borrowing is negative 4. FCFE is:',[
 ['45.00','Nachsteuerzins sechs und Nettotilgung vier reduzieren die Eigentümerzahlung.'],
 ['53.00','Dies addiert Nettotilgung statt sie abzuziehen.'],
 ['43.00','Dies zieht den Bruttozins ab und ignoriert den Steuerabzug.']
 ],[F('FCFE=55-8(1-0{,}25)-4=45','Negative Nettoschuldenaufnahme bedeutet netto Rückzahlung.',[['FCFE','Freier Eigentümercashflow.']])],'tax-financing'),
 q('16','practice','a c','The final explicit-year revenue is 595.508. First stable-year revenue growth is 3%, mature EBIT margin is 14%, and immediate tax rate is 25%. First stable-year NOPAT is closest to:',[
 ['64.40','Der Umsatz wächst, wird aber mit der neuen stabilen Marge nach Steuern gerechnet.'],
 ['82.81','Dies behält die frühere Achtzehnprozentmarge bei.'],
 ['85.87','Dies ist der neue EBIT vor Steuer.']
 ],[F('NOPAT_4=595{,}508\\cdot1{,}03\\cdot0{,}14\\cdot0{,}75=64{,}4041902','Die erste stabile Ertragsbasis wird neu aufgebaut.',[['NOPAT_4','Normalisierter erster stabiler Nachsteuerertrag.']])],'terminal'),
 q('17','practice','a c','First stable-year NOPAT is 64.4041902. Subsequent NOPAT grows at 3% and net investments earn a marginal return of 12%. Required first stable-year net reinvestment is closest to:',[
 ['16.10','Drei Prozent Wachstum bei zwölf Prozent neuer Rendite benötigt ein Viertel des Ertrags.'],
 ['1.93','Dies ist nur der zusätzliche kommende Jahresertrag.'],
 ['48.30','Dies ist die freie Zahlung nach erforderlicher Nettoinvestition.']
 ],[F('I_{net,4}=64{,}4041902\\cdot0{,}03/0{,}12=16{,}10104755','Die Investition trägt hier den Ertragszuwachs der folgenden Periode.',[['I_{net,4}','Erforderliche operative Nettoinvestition.']])],'terminal-capital'),
 q('18','practice','a c','First stable-year NOPAT is 64.4041902, subsequent growth is 3% and the marginal return on new investment is 12%. First stable-year FCFF is closest to:',[
 ['48.30','Drei Viertel des Ertrags bleiben nach Wachstumsinvestition verfügbar.'],
 ['64.40','Dies unterstellt Wachstum ohne zusätzliche Nettoinvestition.'],
 ['80.51','Dies addiert statt subtrahiert den Kapitalbedarf.']
 ],[F('FCFF_4=64{,}4041902(1-0{,}03/0{,}12)=48{,}30314265','Kapitalbindung ist Bestandteil einer konsistenten Wachstumsprognose.',[['FCFF_4','Erste freie stabile operative Zahlung.']])],'terminal-capital'),
 q('19','practice','a b','A forecast assumes a 12% return on new growth investments. The first stable-year profit divided by all beginning invested capital equals 15.45%. These figures are:',[
 ['potentially consistent because marginal investment return differs from return on all existing capital.','Altes und zusätzliches Kapital haben verschiedene Bezugsgrößen.'],
 ['necessarily inconsistent because all capital must instantly earn 12%.','Ein marginaler Satz erzwingt keinen sofort gleichen Gesamt-ROIC.'],
 ['proof that reinvestment is unnecessary.','Ertragswachstum kann weiterhin neue Mittel benötigen.']
 ],['Die Modelldefinition der Zwölfprozentannahme ist entscheidend.','Bei konstantem Gesamt-ROIC müsste das vorhandene Kapital entsprechend passen oder ausdrücklich angepasst werden.'],'terminal-capital'),
 q('20','practice','a c','The first stable-year FCFF, payable at the end of year 4, is 48.30314265. Subsequent growth is 3% and the appropriate discount rate is 9%. Operating terminal value at the end of year 3 is closest to:',[
 ['805.05','Erste spätere Zahlung geteilt durch Diskontsatz minus Wachstum.'],
 ['621.65','Dies ist bereits der um drei Jahre diskontierte Endwert.'],
 ['829.20','Dies wächst die bereits als Jahr-vier-Zahlung definierte Zahlung nochmals vor Kapitalisierung.']
 ],[F('TV_3=48{,}30314265/(0{,}09-0{,}03)=805{,}0523775','Die erste im Endwert enthaltene Zahlung fällt ein Jahr nach dem Endwertstichtag an.',[['TV_3','Endwert am Ende von Jahr drei.']])],'valuation'),
 q('21','practice','c','An operating terminal value of 805.0523775 is measured at the end of year 3. At an annual discount rate of 9%, its present value is closest to:',[
 ['621.65','Drei volle Perioden werden diskontiert.'],
 ['677.60','Dies diskontiert nur zwei Perioden.'],
 ['738.58','Dies diskontiert nur eine Periode.']
 ],[F('PV(TV_3)=805{,}0523775/1{,}09^3\\approx621{,}6481465','Ein zukünftiger Wert wird nicht als heutiger Wert übernommen.',[['PV(TV_3)','Heutiger Endwertbarwert.']])],'valuation'),
 q('22','practice','a c','Present value of explicit operating cash flows is 135.3343477 and present value of the terminal value is 621.6481465. Surplus cash of 30 is excluded from both and is payable immediately. There is no debt or other claim, and 10 million identical shares are outstanding. Value per share immediately before payout is closest to:',[
 ['78.70','Betriebswert plus separates Cash, geteilt durch zehn Millionen Aktien.'],
 ['75.70','Dies ist der Wert nach heutiger Sonderzahlung.'],
 ['81.70','Dies zählt das separate Cash zweimal.']
 ],[F('v_0=(135{,}3343477+621{,}6481465+30)/10\\approx78{,}6982494','Die Stichtags- und Anspruchsgrenzen bleiben konsistent.',[['v_0','Wert je Aktie vor Sonderzahlung.']])],'valuation'),
 q('23','practice','a b c','A profitable unlevered forecast produces negative FCFE in year 1. The model assumes existing owners fund the deficit without issuing new shares. A positive eventual equity estimate should be interpreted as:',[
 ['conditional on owners actually being able and willing to provide the required funding.','Der modellierte Anspruch beinhaltet eine echte Finanzierungsbedingung.'],
 ['proof that the funding gap is harmless and will automatically be financed.','Ein positiver Barwert schafft keinen Zugang zu Liquidität.'],
 ['a reason to replace negative FCFE with zero before discounting.','Abschneiden der Eigentümerzahlung überschätzt den Wert.']
 ],['Negative freie Zahlung ist wirtschaftlicher Mittelbedarf.','Eine andere Finanzierungsform kann Kosten, Risiko und Stückansprüche verändern.'],'investment-growth'),
 q('24','practice','a b c','A simplified bank starts with common equity of 1,000, forecasts earnings of 120 and must end with common equity of 1,100. With no other equity movements or constraints, the maximum dividend consistent with the forecast is:',[
 ['20.00','Hundert Gewinn müssen die zusätzliche Kapitalanforderung tragen.'],
 ['120.00','Dies ignoriert das benötigte Eigenkapitalwachstum.'],
 ['220.00','Dies addiert den Kapitalbedarf zum ausschüttbaren Gewinn.']
 ],[F('D_1=120-(1100-1000)=20','Kapitalanforderung und Ausschüttung werden gemeinsam geplant.',[['D_1','Modellierte verfügbare Jahresdividende.']])],'model-choice'),
 q('25','practice','a b','For a rapidly growing company that is expected to raise new equity, a forecast aimed at valuing existing shares should most appropriately:',[
 ['model the financing terms and resulting claims or dilution of existing owners.','Künftige Finanzierung beeinflusst den heutigen Stückanspruch.'],
 ['divide all future equity value by the current share count regardless of new issuance.','Dies weist den vorhandenen Aktien Wert zu, den neue Eigentümer mitfinanzieren und beanspruchen.'],
 ['treat new equity proceeds as operating revenue.','Eigentümerbeitrag ist Finanzierung, kein operativer Verkaufserlös.']
 ],['Neue Finanzierung ist kein kostenloser Wert für bisherige Eigentümer.','Aktienzahl, Zeichnungspreis und vertragliche Ansprüche sind ausdrücklich abzugrenzen.'],'claims'),
 q('26','practice','a b','For a commodity producer currently earning unusually high margins, an appropriate valuation forecast is most likely to:',[
 ['evaluate normalized prices, operating costs and finite resource or capacity constraints.','Eine Zyklusspitze und endliche Ressourcen erfordern eine eigene Endphasenbegründung.'],
 ['extend the peak margin indefinitely because it is the latest reported observation.','Aktualität macht eine Spitzenertragslage nicht dauerhaft.'],
 ['assume growth has no investment or resource cost.','Mengenwachstum benötigt Kapazität oder zusätzliche Ressourcen.']
 ],['Das Geschäftsmodell bestimmt Preis-, Mengen- und Endphasenannahmen.','Eine ewige Formel ist bei endlicher Reserve nicht automatisch passend.'],'model-choice'),
 q('27','practice','a b','For many banks, an industrial FCFF approach is difficult to apply directly primarily because:',[
 ['funding and several financial liabilities are integral to the operating business and required equity capital must be modeled.','Betriebs- und Finanzierungsgrenzen unterscheiden sich vom Industrieunternehmen.'],
 ['bank shareholders do not require a return.','Eigentümerkapital hat auch bei Banken eine Renditeforderung.'],
 ['book equity always equals intrinsic equity value.','Buchkapital ist keine automatische Wertschätzung.']
 ],['Direkte Eigenkapital- oder Residual-Income-Ansätze können besser zum Anspruch passen.','Die Wahl ersetzt keine Planung von Kreditrisiko und Ausschüttungsfähigkeit.'],'model-choice'),
 q('28','practice','a b c','A DCF estimate and a residual income estimate agree after using the same forecasts and consistent ownership cash flows. This agreement primarily:',[
 ['supports algebraic and claim consistency but does not independently validate the forecasts.','Dieselben Annahmen wurden in zwei konsistenten Darstellungen verwendet.'],
 ['proves the projected competitive advantage will persist.','Die beiden Rechenwege beobachten die Zukunft nicht unabhängig.'],
 ['guarantees the market price will converge immediately.','Modellübereinstimmung bestimmt keinen sicheren Kursverlauf.']
 ],['Gegenrechnung kann Bewertungsfehler aufdecken.','Die Umsatz-, Margen- und Kapitalannahmen benötigen gesonderte Evidenz.'],'alternatives'),
 q('29','practice','a c','An analyst uses net income of 71.55 and beginning book equity of 350 with a required equity return of 9%. Residual income for the year is:',[
 ['40.05','Gewinn abzüglich Kapitalzins auf den Anfangsbuchbestand.'],
 ['71.55','Dies zieht keinen Kapitalzins ab.'],
 ['38.16','Dies verzinst stattdessen Schlussbuchkapital 371.']
 ],[F('RI_1=71{,}55-0{,}09\\cdot350=40{,}05','Die Jahresverzinsung bezieht sich auf den vereinbarten Anfangsbestand.',[['RI_1','Jährliches Residual Income.']])],'alternatives'),
 q('30','practice','a c','At the forecast horizon, equity value is 805.0523775 and consistent common book equity is 416.8556. In a finite-horizon residual income valuation, the continuing excess value at that date is closest to:',[
 ['388.20','Noch verbleibender Wert oberhalb des zu diesem Zeitpunkt vorhandenen Buchkapitals.'],
 ['805.05','Dies fügt den gesamten Wert zusätzlich zum bereits fortgeschriebenen Buchkapital ein.'],
 ['1,221.91','Dies addiert statt subtrahiert den Buchbestand.']
 ],[F('V_3-B_3=805{,}0523775-416{,}8556=388{,}1967775','Der Endüberschuss ist noch entsprechend bis heute zu diskontieren.',[['V_3,B_3','Horizontwert und zugehöriges Horizontbuchkapital.']])],'alternatives'),
 q('31','practice','c','A share is worth 78.6982494 immediately before a special cash payment of 3 per share. With no other change, its model value immediately after the payment is closest to:',[
 ['75.70','Der ausgeschüttete Betrag gehört anschließend dem bisherigen Eigentümer als Cash.'],
 ['78.70','Dies lässt die Vermögensabgabe aus.'],
 ['81.70','Dies addiert die Auszahlung zum verbleibenden Anspruch.']
 ],[F('v_{after}=78{,}6982494-3=75{,}6982494','Der verbleibende Aktienanspruch ist um die abgegebene Zahlung geringer.',[['v_{after}','Wert je Aktie nach Sonderzahlung.']])],'valuation'),
 q('32','practice','a b','An annual model reports zero cash at each year-end after dividends or owner contributions. This result:',[
 ['does not establish that intra-year liquidity needs or funding availability are satisfied.','Zahlungsspitzen und verbindliche Finanzierung fehlen im Jahresabschlussbild.'],
 ['proves the business never needs operating liquidity.','Jahresendbestand ist keine Aussage über sämtliche vorherigen Termine.'],
 ['makes monthly cash forecasting unnecessary in a liquidity crisis.','Eine Liquiditätskrise kann deutlich feinere Zeitauflösung erfordern.']
 ],['Endbestände und unterjährige Zahlungsfähigkeit sind verschiedene Fragen.','Der Zweck des Modells bestimmt den nötigen Zeitraster.'],'limitations'),
 q('33','practice','a c','To preserve valuation consistency, nominal euro cash flows should generally be discounted with:',[
 ['an appropriate nominal euro rate for the same claim and risk.','Währung, Inflation, Risiko und Kapitalanspruch passen zusammen.'],
 ['a real rate without adjusting the nominal cash flows.','Dies mischt Inflationsbasen.'],
 ['the lowest available rate regardless of currency or ownership claim.','Eine bequeme Renditeforderung ist keine sachgerechte Risikoabgrenzung.']
 ],['Die technische Formel kann bei falscher Satzbasis einen systematisch verzerrten Wert liefern.','Umrechnung und Risikobegründung erfolgen ausdrücklich.'],'sensitivity'),
 q('34','practice','a b','A recession case simultaneously reduces sales, compresses margins and worsens collections. It is best described as:',[
 ['a scenario involving related economic assumptions.','Mehrere zusammenhängende Ursachen werden gemeinsam verändert.'],
 ['a one-variable sensitivity analysis.','Eine Sensitivität hält die anderen betrachteten Variablen ausdrücklich konstant.'],
 ['a probability estimate solely because three assumptions change.','Ein Szenario besitzt ohne weitere Begründung keine bekannte Wahrscheinlichkeit.']
 ],['Szenarien bilden gemeinsame wirtschaftliche Entwicklungen ab.','Wahrscheinlichkeiten benötigen zusätzliche Evidenz.'],'uncertainty'),
 q('35','practice','a c','A simplified terminal model has the same first free payment of 10 and discount rate of 10% in two equally likely cases. Subsequent growth is 0% or 4%. The average of the two conditional terminal values is closest to:',[
 ['133.33','Die beiden Werte hundert und 166,6667 werden gleich gewichtet.'],
 ['125.00','Dies bewertet die durchschnittliche Wachstumseingabe statt die zwei Werte.'],
 ['166.67','Dies verwendet nur den höheren Wachstumsfall.']
 ],[F('\\mathbb{E}[V]=\\tfrac12(10/0{,}10)+\\tfrac12(10/0{,}06)\\approx133{,}3333','Nichtlineare Bewertung und Mittelung sind im Allgemeinen nicht vertauschbar.',[['\\mathbb{E}[V]','Durchschnitt der zwei ausdrücklich bedingten Werte.']])],'uncertainty'),
 q('36','practice','a b c','Holding first stable-year NOPAT and discount rate fixed, additional perpetual growth requires net investment earning less than the discount rate. Under the stated reinvestment model, increasing growth generally:',[
 ['reduces terminal value because the additional capital earns less than its cost.','Die geringere freie Zahlung wiegt stärker als der zusätzliche Ertrag.'],
 ['increases value merely because the Gordon denominator becomes smaller.','Dies ignoriert den mitwachsenden Kapitalbedarf im Zähler.'],
 ['leaves reinvestment unchanged.','Wachstum benötigt bei fester neuer Rendite zusätzliche Investition.']
 ],[F('\\frac{\\partial TV}{\\partial g}=\\frac{N(R-k)}{R(k-g)^2}<0\\quad(R<k)','Unter festem erstem Ertrag bestimmt die Rendite-Kosten-Differenz das Vorzeichen.',[['TV','Operativer Endwert.'],['N','Fixierter erster stabiler NOPAT.'],['R,k,g','Marginale Rendite, Kosten und Wachstum mit g unter beiden Raten.']])],'sensitivity'),
 q('37','practice','a c','A terminal value at the end of year 3 is defined using the first payment in year 4 and all later payments. An analyst additionally includes year 4 FCFF separately in the present value total. This most directly:',[
 ['double-counts the year 4 payment.','Die Zahlung ist schon Teil des Endwerts.'],
 ['corrects an omitted payment.','Der definierte Endwert enthält sie bereits.'],
 ['changes only the share count.','Der Fehler liegt in den Zahlungsbarwerten.']
 ],['Der letzte Detailzeitpunkt und die erste Endwertzahlung werden getrennt festgelegt.','Eine Zahlung wird in der gesamten Bewertung genau einmal erfasst.'],'valuation'),
 q('38','practice','a c','With unchanged revenue, recognized expenses, inventory and other assumptions, increased operating supplier payables most directly:',[
 ['increase current operating cash flow by deferring payment, subject to the assumed supplier terms.','Mehr Lieferantenkredit verringert die aktuelle Mittelbindung.'],
 ['reduce operating cash flow by the same amount.','Dies verwendet das falsche Vorzeichen.'],
 ['constitute new operating profit.','Spätere Zahlung erzeugt nicht allein höheren erfassten Ertrag.']
 ],['Die operative Bestandsbindung wird um AP vermindert.','Die wirtschaftliche Tragfähigkeit der Zahlungsbedingungen bleibt eine zusätzliche Frage.'],'working-capital'),
 q('39','practice','a b','A historical valuation exercise uses an earnings report first published three months after its assumed valuation date, as though the report had already been available. This introduces:',[
 ['look-ahead bias.','Später bekannte Information wird in den früheren Informationsstand hineingestellt.'],
 ['a necessary adjustment for required return.','Die Renditeforderung beseitigt keine falsche Datenverfügbarkeit.'],
 ['proof of forecast accuracy.','Ein solcher Test kann die tatsächlich erreichbare Prognosegüte überschätzen.']
 ],['Berichtszeitraum und Bekanntmachungsdatum sind verschieden.','Die historische Bewertungsbasis verwendet damals verfügbare Information.'],'information'),
 q('40','practice','a b c','A reverse DCF finds the stable margin required to justify today’s price while holding growth, reinvestment return and discount rate fixed. The result:',[
 ['is a conditional requirement, not a unique observation of all market expectations.','Verschiedene Kombinationen anderer Annahmen könnten denselben Preis tragen.'],
 ['proves management explicitly forecast that margin.','Ein Preis zeigt keine eindeutige Managementaussage.'],
 ['eliminates uncertainty in the forecast.','Die Umkehrrechnung schafft keine Sicherheit über die Zukunft.']
 ],['Reverse DCF macht notwendige Bedingungen unter fixierten Annahmen sichtbar.','Die Plausibilität dieser Bedingungen wird separat wirtschaftlich beurteilt.'],'reverse'),
 q('a1','mock-a','a c','An industrial company forecasts FCFF of 40 in year 1 and 44 in year 2. In year 3, normalized NOPAT is 72. Thereafter NOPAT grows at 3%, with net growth investments earning 12%. The constant appropriate discount rate is 9%. Surplus cash of 20 is outside the operating forecast, financing debt is worth 100, and there are 10 million identical common shares. All stated amounts except share count are millions. With no other claims, estimated current value per share is closest to:',[
 ['75.12','Erste stabile freie Zahlung vierundfünfzig erzeugt Endwert neunhundert in Jahr zwei; die vollständige Brücke folgt danach.'],
 ['100.37','Dies kapitalisiert den vollen NOPAT ohne Wachstumsinvestition.'],
 ['77.40','Dies wächst die erste stabile Zahlung vor ihrer Kapitalisierung nochmals um drei Prozent.']
 ],[
 F('FCFF_3=72(1-0{,}03/0{,}12)=54,\\quad TV_2=54/0{,}06=900','Die erste stabile Zahlung ist nach Nettoinvestition.',[['FCFF_3','Erste stabile Jahresendzahlung.'],['TV_2','Operativer Endwert am Ende Jahr zwei.']]),
 F('v_0=\\frac{40/1{,}09+(44+900)/1{,}09^2+20-100}{10}\\approx75{,}1243161','Endwert und zweite Detailzahlung fallen am selben Horizont an. Schulden und Cash folgen außerhalb des Betriebswerts.',[['v_0','Heutiger Wert in Euro je Aktie.']])
 ],'valuation'),
 q('a2','mock-a','a b','An analyst projects an industrial company using a constant net-PPE-to-sales ratio for explicit years. At the terminal transition, the analyst also independently imposes a new constant total ROIC, a new profit margin, a fixed working-capital ratio and a growth rate. The existing capital balance does not produce that ROIC. The most appropriate next step is to:',[
 ['reconcile the capital transition and identify which assumptions must change or which explicit capital movement is required.','Die wirtschaftlichen und bilanziellen Endgrößen müssen gemeinsam passen.'],
 ['keep every assumption because the terminal formula always enforces balance-sheet consistency.','Eine Kapitalisierungsformel setzt diese Konsistenz nicht automatisch durch.'],
 ['ignore the existing capital balance once the explicit forecast ends.','Vorhandenes Kapital verschwindet nicht durch das Ende der Tabellenjahre.']
 ],['Gesamt-ROIC ist Ertrag relativ zum gesamten Kapital und kann nicht unabhängig von beiden Größen beliebig gesetzt werden.','Marginale neue Investitionsrendite ist eine andere Annahme; sie muss als solche ausdrücklich definiert werden.'],'terminal-capital'),
 q('b1','mock-b','a c','A company’s opening revenue is 600 and opening operating working capital is 120. Year 1 revenue increases by 10%, and the target ending working-capital ratio is 25% of revenue. EBIT margin after depreciation is 15%, immediate tax is 20%, depreciation is 36 and capital expenditure is 60. There is no debt or other accrual. Forecast year 1 FCFF is:',[
 ['10.20','Nachsteuer-EBIT 79,2 plus Abschreibung sechsunddreißig minus Capex sechzig und WC-Zuwachs fünfundvierzig.'],
 ['43.20','Dies behält die alte Zwanzigprozent-WC-Quote bei.'],
 ['46.20','Dies zieht nur den Nettoanlagenzuwachs statt Brutto-Capex ab, addiert Abschreibung aber weiterhin und zählt sie so doppelt.']
 ],[
 F('\\Delta WC_1=660\\cdot0{,}25-120=45,\\quad NOPAT_1=660\\cdot0{,}15\\cdot0{,}8=79{,}2','Die neue Quote gilt auf den ganzen Endumsatz.',[['\\Delta WC_1','Zusätzliche operative Bestandsbindung.'],['NOPAT_1','Operativer Nachsteuergewinn.']]),
 F('FCFF_1=79{,}2+36-60-45=10{,}2','Gewinn ist positiv, doch Kapitalbedarf reduziert die freie Zahlung deutlich.',[['FCFF_1','Freie operative Zahlung Jahr eins.']])
 ],'cashflow'),
 q('b2','mock-b','a b','An unlevered company forecasts a positive intrinsic value, but projected year 1 free cash flow is negative 90. The model assumes existing owners contribute the deficit and the company then pays all later positive free cash flow as dividends. No financing commitment has been secured. The estimate should most appropriately be reported as:',[
 ['a conditional value together with the funding need and feasibility risk.','Der Modellwert setzt eine tatsächlich finanzierbare Fortführung voraus.'],
 ['an unconditional value because a positive total present value guarantees funding.','Kapitalwert und Zugang zu fälliger Finanzierung sind verschieden.'],
 ['a dividend-only value that excludes the negative owner contribution.','Auslassen des benötigten Eigentümerbeitrags überschätzt den Anspruch.']
 ],['Die Eigentümerzahlung wird mit negativem Vorzeichen in den freien Cashflows berücksichtigt.','Finanzierung kann zusätzlich Verwässerung, Kosten und abweichendes Risiko verursachen.'],'limitations')
];
