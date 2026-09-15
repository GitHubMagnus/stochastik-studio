const econ=(slug,title)=>({title:'OpenStax · '+title,url:'https://openstax.org/books/principles-economics-3e/pages/'+slug});
const finance=(slug,title)=>({title:'OpenStax · '+title,url:'https://openstax.org/books/principles-finance/pages/'+slug});
const cfa=(slug,title)=>({title:'CFA Institute · '+title,url:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/'+slug});
module.exports={
 demand:econ('3-1-demand-supply-and-equilibrium-in-markets-for-goods-and-services','Angebot, Nachfrage und Gleichgewicht'),
 elasticity:econ('5-1-price-elasticity-of-demand-and-price-elasticity-of-supply','Preiselastizität'),
 costs:econ('7-3-costs-in-the-short-run','Kurzfristige Kosten'),
 monopoly:econ('9-2-how-a-profit-maximizing-monopoly-chooses-output-and-price','Monopol: Menge und Preis'),
 growth:econ('20-2-labor-productivity-and-economic-growth','Produktivität und Wachstum'),
 adas:econ('24-2-building-a-model-of-aggregate-demand-and-aggregate-supply','AD-AS-Modell'),
 phillips:econ('25-3-the-phillips-curve','Phillipskurve'),
 money:econ('28-3-how-a-central-bank-executes-monetary-policy','Geldpolitik'),
 cross:econ('d-the-expenditure-output-model','Keynesianisches Kreuz'),
 debt:{title:'IWF · Schuldenquotendynamik im Q-CRAFT User Guide',url:'https://www.imf.org/-/media/files/topics/fiscal/fiscal-risks/tool/qcraft-user-guidev10.pdf'},
 trade:econ('33-1-absolute-and-comparative-advantage','Absoluter und komparativer Vorteil'),
 fx:econ('29-2-demand-and-supply-shifts-in-foreign-exchange-markets','Devisenmarkt'),
 tariff:econ('34-1-protectionism-an-indirect-subsidy-from-consumers-to-producers','Zölle und Wohlfahrt'),
 portfolio:cfa('portfolio-risk-return-part-1','Portfoliorisiko und Rendite I'),
 capm:cfa('portfolio-risk-return-part-2','Portfoliorisiko und Rendite II'),
 process:cfa('portfolio-management-overview','Portfolio Management: An Overview'),
 risk:cfa('active-equity-investing-portfolio-construction','Portfoliokonstruktion und Risikomaße'),
 parity:cfa('currency-exchange-rates-understanding-equilibrium-value','Wechselkurse und Paritätsbedingungen'),
 options:cfa('option-replication-using-put-call-parity','Optionen und Put-Call-Parität'),
 bonds:cfa('yield-based-bond-duration-measures-and-properties','Duration und ihre Eigenschaften'),
 curves:cfa('yield-curve-strategies','Zinskurvenstrategien'),
 tvm:finance('7-2-time-value-of-money-tvm-basics','Zeitwert des Geldes'),
 npv:finance('16-3-internal-rate-of-return-irr-method','IRR und Kapitalwertprofil')
};
