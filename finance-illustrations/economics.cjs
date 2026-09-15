const {sample:s,line:l,mark:m,root,fmt}=require('./chart.cjs'),S=require('./sources.cjs');
const figs={};
const add=(chapter,f)=>(figs[chapter]??=[]).push(f);
add('economics-01',{
 id:'market-demand-shift',title:'Nachfrageverschiebung und Bewegung auf der Angebotskurve',
 takeaway:'Mehr Nachfrage erhöht hier sowohl den Gleichgewichtspreis als auch die gehandelte Menge.',
 read:'E₀ liegt bei Menge 40 und Preis 60. Die höhere Zahlungsbereitschaft verschiebt D₀ zu D₁; E₁ liegt bei 50 und 70. Auf der unveränderten Angebotskurve S bewegt sich der Markt nach rechts oben. Eine Preisänderung allein wäre dagegen eine Bewegung auf derselben Nachfragekurve.',
 assumptions:'Ein einzelner Wettbewerbsmarkt, konstante Kostenbedingungen, keine Mengenbeschränkung und keine externe Wirkung. Die Geraden sind ein lokales Modell, keine empirisch geschätzten Kurven. Preis in Geldeinheiten je Stück, Menge in Stück je Periode.',
 tex:String.raw`P_{D,0}=100-Q,\quad P_{D,1}=120-Q,\quad P_S=20+Q;\qquad (Q_0,P_0)=(40,60),\quad(Q_1,P_1)=(50,70)`,sources:[S.demand],links:['economics-02'],
 plot:{x:[0,100],y:[0,140],xLabel:'Menge Q (Stück je Periode)',yLabel:'Preis P (GE je Stück)',series:[l('D₀: ursprüngliche Nachfrage',s(0,100,q=>100-q)),l('D₁: höhere Nachfrage',s(0,100,q=>120-q),{dash:'8 5'}),l('S: unverändertes Angebot',s(0,100,q=>20+q))],marks:[m(40,60,'E₀',{guides:true,dx:-12,dy:23,anchor:'end'}),m(50,70,'E₁',{guides:true})],arrows:[[[70,34],[70,47]]]}
});
add('economics-01',{
 id:'linear-demand-elasticity',title:'Gleiche Steigung bedeutet nicht gleiche Elastizität',
 takeaway:'Auf einer linearen Nachfragekurve ändert sich die Preiselastizität von Punkt zu Punkt.',
 read:'A: Bei Q = 20 und P = 80 ist der Betrag der Elastizität 4; der Umsatz beträgt 1.600. B: Bei Q = P = 50 ist die Nachfrage einheitselastisch und der Umsatz mit 2.500 maximal. C: Bei Q = 80 und P = 20 beträgt der Elastizitätsbetrag nur 0,25; der Umsatz ist wieder 1.600. Die Kurve hat überall dieselbe Steigung −1.',
 assumptions:'Punktelastizitäten, keine Bogenelastizitäten. Der Zusammenhang zwischen Preisänderung und Umsatz gilt für eine Bewegung auf dieser unveränderten Kurve. Preise und Mengen bleiben positiv; am Mengenabschnitt Q = 0 ist die Formel nicht definiert.',
 tex:String.raw`Q=100-P,\quad \varepsilon_{Q,P}=\frac{dQ}{dP}\frac{P}{Q}=-\frac{P}{Q},\qquad TR(Q)=(100-Q)Q,\quad TR'(Q)=100-2Q`,sources:[S.elasticity],links:['economics-03'],
 plot:{x:[0,100],y:[0,100],xLabel:'Menge Q',yLabel:'Preis P',series:[l('Lineare Nachfrage',s(0,100,q=>100-q))],marks:[m(20,80,'A · |ε| = 4'),m(50,50,'B · |ε| = 1'),m(80,20,'C · |ε| = 0,25',{anchor:'end',dx:-12,dy:25})]}
});
const cost=q=>20+10*q-2*q*q+q*q*q/3,mc=q=>10-4*q+q*q,atc=q=>cost(q)/q,avc=q=>10-2*q+q*q/3;
const qATC=root(q=>mc(q)-atc(q),3,6);
add('economics-02',{
 id:'cost-curves-profit',title:'Grenzkosten schneiden Durchschnittskosten an deren Minimum',
 takeaway:'Die zusätzliche Einheit bestimmt die Produktionsentscheidung; die Durchschnittskosten bestimmen den Gewinn je Einheit.',
 read:`AVC hat bei A (Q = 3) sein Minimum 7. ATC liegt wegen der Fixkosten darüber und erreicht sein Minimum bei B (Q ≈ ${fmt(qATC)}). MC schneidet beide Kurven jeweils genau dort. Bei Marktpreis 15 produziert das Unternehmen am steigenden MC-Ast Q = 5 (C); ATC beträgt ${fmt(atc(5))}, der Gesamtgewinn ${fmt(75-cost(5))} GE.`,
 assumptions:'Kurzfristiger Preisnehmer mit Fixkosten 20; das Polynom gilt nur für den gezeigten Produktionsbereich. Bei einem Preis unter dem AVC-Minimum würde Stilllegung den Verlust begrenzen. Q = 0 ist für Durchschnittskosten nicht definiert und wird nicht gezeichnet.',
 tex:String.raw`TC=20+10Q-2Q^2+\frac{Q^3}{3},\quad MC=\frac{dTC}{dQ}=10-4Q+Q^2;\quad ATC=\frac{TC}{Q},\quad AVC=10-2Q+\frac{Q^2}{3};\qquad \frac{dATC}{dQ}=\frac{MC-ATC}{Q}`,sources:[S.costs],links:['economics-03','corporate-07'],
 plot:{x:[0,8],y:[0,45],xLabel:'Produzierte Menge Q',yLabel:'Kosten / Preis (GE je Einheit)',series:[l('MC: Grenzkosten',s(.75,8,mc)),l('ATC: gesamte Durchschnittskosten',s(.75,8,atc)),l('AVC: variable Durchschnittskosten',s(.75,8,avc),{dash:'8 5'}),l('Marktpreis P = 15',s(0,8,()=>15),{dash:'3 5'})],marks:[m(3,7,'A',{dx:-12,dy:23,anchor:'end'}),m(qATC,atc(qATC),'B',{dx:-12,dy:-12,anchor:'end'}),m(5,15,'C',{guides:true})]}
});
add('economics-03',{
 id:'monopoly-welfare',title:'Monopol: erst die Menge, dann den Preis bestimmen',
 takeaway:'Der Monopolist wählt MR = MC; seinen Preis liest er anschließend auf der Nachfragekurve ab.',
 read:'Grenzerlös MR und Grenzkosten MC schneiden sich bei A: Qₘ = 40. Auf der Nachfrage D gehört dazu Pₘ = 60 (M). Unter Wettbewerb läge die Menge bei Q꜀ = 80 und der Preis bei 20 (C). Das schattierte Dreieck zwischen D und MC zeigt die verlorenen Handelsgewinne der Einheiten 40 bis 80: 800 GE.',
 assumptions:'Einheitlicher Preis, konstante Grenzkosten 20, keine Fixkosten, keine Preisdiskriminierung und keine Externalitäten. Das Rechteck aus Preisaufschlag und Monopolmenge ist Gewinn beziehungsweise Umverteilung; es ist nicht das Wohlfahrtsverlust-Dreieck.',
 tex:String.raw`P=100-Q,\quad TR=100Q-Q^2,\quad MR=100-2Q,\quad MC=20;\quad Q_m=40,\ P_m=60,\ Q_c=80;\qquad DWL=\tfrac12(80-40)(60-20)=800`,sources:[S.monopoly],links:['economics-01','economics-02'],
 plot:{x:[0,100],y:[0,110],xLabel:'Menge Q',yLabel:'Preis / Grenzerlös / Grenzkosten',series:[l('D: Preis / Zahlungsbereitschaft',s(0,100,q=>100-q)),l('MR: Grenzerlös',s(0,50,q=>100-2*q),{dash:'8 5'}),l('MC: Grenzkosten',s(0,100,()=>20))],areas:[{points:[[40,20],[40,60],[80,20]]}],marks:[m(40,20,'A',{dx:-12,dy:25,anchor:'end'}),m(40,60,'M',{guides:true}),m(80,20,'C',{guides:true})]}
});
add('economics-04',{
 id:'capital-productivity',title:'Kapitalvertiefung und technischer Fortschritt',
 takeaway:'Mehr Kapital pro Beschäftigtem erhöht den Output; eine höhere Produktivität verschiebt die ganze Produktionsfunktion.',
 read:'Auf y₀ führt der Schritt von k = 25 zu 100 von Output 50 auf 100: Viermal so viel Kapital erzeugt hier nur doppelt so viel Output. Eine Steigerung von A von 10 auf 12 hebt bei demselben k = 100 den Output auf 120. Die Steigung der Kurve ist das Grenzprodukt des Kapitals und nimmt mit k ab.',
 assumptions:'Cobb-Douglas-Funktion pro Beschäftigtem mit Kapitalexponent 1/2. Arbeit und institutionelle Bedingungen werden konstant gehalten. Dies ist eine Produktionsfunktion, noch kein vollständiges Solow-Modell: Sparquote, Abschreibung und Bevölkerungswachstum fehlen.',
 tex:String.raw`y=A k^{1/2},\qquad \frac{dy}{dk}=\frac{A}{2\sqrt{k}}>0,\quad \frac{d^2y}{dk^2}=-\frac{A}{4k^{3/2}}<0\quad(k>0)`,sources:[S.growth],links:['economics-08'],
 plot:{x:[0,150],y:[0,160],xLabel:'Kapital je Beschäftigtem k (Index)',yLabel:'Output je Beschäftigtem y (Index)',series:[l('A = 10',s(0,150,k=>10*Math.sqrt(k))),l('A = 12: höhere Produktivität',s(0,150,k=>12*Math.sqrt(k)),{dash:'8 5'})],marks:[m(25,50,'A'),m(100,100,'B',{dy:24}),m(100,120,'C')],arrows:[[[100,104],[100,115]]]}
});
for(const supplyShock of [false,true]){
 const q=supplyShock?250/3:350/3;
 add('economics-05',{
  id:supplyShock?'adas-supply-shock':'adas-demand-shock',title:supplyShock?'Negativer Angebotsschock: weniger Output, höhere Preise':'Positiver Nachfrageschock im AD-AS-Modell',
  takeaway:supplyShock?'Ein Kostenanstieg kann Produktion und Preisniveau in entgegengesetzte Richtungen bewegen.':'Bei kurzfristig steigender Angebotskurve erhöht zusätzliche Nachfrage Output und Preisniveau.',
  read:supplyShock?'E₀ liegt bei Output 100 und Preisniveau 100. Höhere Produktionskosten verschieben SRAS₀ nach oben zu SRAS₁. Bei unveränderter AD liegt E₁ bei Output 83,33 und Preisniveau 110. Das ist ein stagflationärer Impuls. Die langfristige Potenziallinie bleibt in diesem vorübergehenden Kostenschock bei 100.':'AD verschiebt sich nach rechts von AD₀ zu AD₁. Kurzfristig wandert das Gleichgewicht von E₀ = (100; 100) nach E₁ = (116,67; 110). Die Produktion liegt zunächst über dem Potenzial Y* = 100. Passen sich Löhne und Erwartungen an, kann sich SRAS verändern; E₁ ist deshalb kein behauptetes langfristiges Gleichgewicht.',
  assumptions:'Schematisches Modell mit linearen lokalen Kurven. Die vertikale Achse zeigt das Preisniveau, nicht die Inflationsrate; die horizontale das reale Produktionsniveau, nicht dessen Wachstumsrate. Die Lage und Steigung der Kurven hängen von Zeitraum und Wirtschaft ab.',
  tex:supplyShock?String.raw`P_{AD}=160-0{,}6Y,\quad P_{SRAS,0}=40+0{,}6Y,\quad P_{SRAS,1}=60+0{,}6Y;\quad Y^*=100,\quad E_1=(83{,}\overline3;110)`:String.raw`P_{AD,0}=160-0{,}6Y,\quad P_{AD,1}=180-0{,}6Y,\quad P_{SRAS}=40+0{,}6Y;\quad Y^*=100,\quad E_1=(116{,}\overline6;110)`,sources:[S.adas],links:['economics-06','economics-07','economics-08'],
  plot:{x:[60,150],y:[60,150],xLabel:'Realer Output Y (Index)',yLabel:'Preisniveau P (Index)',series:supplyShock?[l('AD: Nachfrage',s(60,150,y=>160-.6*y)),l('SRAS₀: Angebot',s(60,150,y=>40+.6*y)),l('SRAS₁: höhere Kosten',s(60,150,y=>60+.6*y),{dash:'8 5'}),l('LRAS: Potenzial Y*',[[100,60],[100,150]],{color:'#687a88',dash:'3 5'})]:[l('AD₀: Nachfrage',s(60,150,y=>160-.6*y)),l('AD₁: zusätzliche Nachfrage',s(60,150,y=>180-.6*y),{dash:'8 5'}),l('SRAS: Angebot',s(60,150,y=>40+.6*y)),l('LRAS: Potenzial Y*',[[100,60],[100,150]],{color:'#687a88',dash:'3 5'})],marks:[m(100,100,'E₀',{dx:12,dy:24}),m(q,110,'E₁',{guides:true,dx:supplyShock?-12:12,anchor:supplyShock?'end':'start'})]}
 });
}
add('economics-06',{
 id:'expectations-phillips',title:'Phillipskurven hängen von Inflationserwartungen ab',
 takeaway:'Ein kurzfristiger Zusammenhang ist kein dauerhaft frei wählbares Menü aus Inflation und Arbeitslosigkeit.',
 read:'Auf SRPC₀ (erwartete Inflation 2 %) gehört zu u = 5 % eine Inflation von 2 % (A). Bei u = 3 % wäre sie im Modell 4 % (B). Steigt die erwartete Inflation auf 4 %, verschiebt sich die gesamte kurzfristige Kurve nach oben. Auf der langfristigen Linie liegt dann C bei u* = 5 % und Inflation 4 %.',
 assumptions:'Erwartungsaugmentierte, lineare Phillipskurve mit festem u* = 5 %, Reaktionskoeffizient 1 und ohne zusätzlichen Angebotsschock. Die Beziehung ist schematisch; u*, Erwartungen, Steigung und Schocks sind empirisch veränderlich. Eine Geldpolitik kann daraus keine sichere dauerhafte Beschäftigungswirkung ableiten.',
 tex:String.raw`\pi=\pi^e-\alpha(u-u^*)+v,\qquad \alpha=1,\ u^*=5\%,\ v=0;\qquad \pi=\pi^e\ \Rightarrow\ u=u^*`,sources:[S.phillips],links:['economics-05','economics-07'],
 plot:{x:[1,9],y:[-2,9],xLabel:'Arbeitslosenquote u (%)',yLabel:'Inflationsrate π (%)',series:[l('SRPC₀: πᵉ = 2 %',s(1,9,u=>7-u)),l('SRPC₁: πᵉ = 4 %',s(1,9,u=>9-u),{dash:'8 5'}),l('LRPC: u* = 5 %',[[5,-2],[5,9]],{dash:'3 5'})],marks:[m(5,2,'A',{dy:24}),m(3,4,'B',{dx:-12,anchor:'end'}),m(5,4,'C')],arrows:[[[7,.6],[7,1.6]]]}
});
add('economics-07',{
 id:'money-market-liquidity',title:'Geldmarkt: die klassische Liquiditätswirkung',
 takeaway:'Bei unveränderter realer Geldnachfrage senkt ein größeres reales Geldangebot in diesem Modell den Gleichgewichtszins.',
 read:'Die fallende Nachfrage nach realen Kassenbeständen schneidet das ursprüngliche Angebot M₀/P = 100 bei i = 5 % (A). Ein Anstieg auf 130 verschiebt die Angebotslinie nach rechts und den Schnittpunkt auf i = 3,5 % (B). Der fallende Zins ist hier die Anpassung, die die zusätzliche Geldhaltung attraktiv macht.',
 assumptions:'Klassisches Lehrmodell mit kurzfristig gegebenem Preisniveau und Einkommen. Moderne Zentralbanken steuern häufig einen Zinssatz in einem System reichlicher Reserven; die Abbildung beschreibt deren operative Umsetzung nicht vollständig. Langfristig veränderte Inflationserwartungen können nominale Zinsen erhöhen.',
 tex:String.raw`i=10-0{,}05\frac{M^d}{P}\quad(i\text{ in Prozentpunkten});\qquad \frac{M_0^s}{P}=100,\quad\frac{M_1^s}{P}=130;\qquad i_0=5\%,\ i_1=3{,}5\%`,sources:[S.money],links:['economics-05','bonds-07'],
 plot:{x:[0,200],y:[0,11],xLabel:'Reale Geldmenge M/P (Index)',yLabel:'Nominalzins i (%)',series:[l('Geldnachfrage',s(0,200,x=>10-.05*x)),l('Reales Angebot M₀/P',[[100,0],[100,11]]),l('Reales Angebot M₁/P',[[130,0],[130,11]],{dash:'8 5'})],marks:[m(100,5,'A',{guides:true}),m(130,3.5,'B',{guides:true})],arrows:[[[105,8],[125,8]]]}
});
add('economics-08',{
 id:'keynesian-cross',title:'Keynesianisches Kreuz: autonome Nachfrage und Ausgabenmultiplikator',
 takeaway:'Ein autonomer Nachfrageimpuls um 10 erhöht das Gleichgewichtseinkommen hier um 40.',
 read:'Die 45°-Linie markiert geplante Ausgaben AE gleich Produktion Y. AE₀ = 20 + 0,75Y schneidet sie bei E₀ = 80. Die höhere autonome Nachfrage verschiebt AE um 10 nach oben und führt zu E₁ = 120. Der zusätzliche Konsum aus zusätzlichem Einkommen verstärkt den ersten Impuls; außerhalb des Schnittpunkts entstehen ungeplante Lageränderungen.',
 assumptions:'Konstante Preise, freie Kapazitäten, geschlossene Volkswirtschaft, keine einkommensabhängigen Steuern und keine Zinsreaktion. Importabflüsse, Steuern, Kapazitätsgrenzen und geldpolitische Gegenreaktionen verändern den tatsächlichen Ausgabenmultiplikator. Gleiche Achsenskalierung macht die Gleichgewichtslinie tatsächlich zu einer 45°-Linie im Koordinatensystem.',
 tex:String.raw`AE=a+cY,\quad Y=AE\Rightarrow Y=\frac{a}{1-c};\qquad c=0{,}75,\quad\Delta Y=\frac{10}{1-0{,}75}=40`,sources:[S.cross],links:['economics-05'],
 plot:{square:true,x:[0,160],y:[0,160],xLabel:'Produktion / Einkommen Y',yLabel:'Geplante Ausgaben AE',series:[l('AE₀ = 20 + 0,75Y',s(0,160,y=>20+.75*y)),l('AE₁ = 30 + 0,75Y',s(0,160,y=>30+.75*y),{dash:'8 5'}),l('Gleichgewicht: AE = Y',s(0,160,y=>y),{dash:'3 5'})],marks:[m(80,80,'E₀',{guides:true,dx:-12,dy:24,anchor:'end'}),m(120,120,'E₁',{guides:true})]}
});
add('economics-08',{
 id:'public-debt-dynamics',title:'Schuldenquote: der Abstand zwischen Zins und Wachstum zählt',
 takeaway:'Ohne Primärsaldo steigt die Schuldenquote, wenn der Nominalzins über dem nominalen BIP-Wachstum liegt.',
 read:'Alle drei Pfade starten bei Schulden von 100 % des BIP und einem Nominalzins von 4 %. Bei Wachstum 2 % steigt die Quote nach zehn Jahren auf '+fmt(100*(1.04/1.02)**10)+' %, bei 4 % bleibt sie 100 %, bei 6 % fällt sie auf '+fmt(100*(1.04/1.06)**10)+' %. Es handelt sich um unterschiedliche Wachstumsannahmen, nicht um verschieden hohe Ausgangsschulden.',
 assumptions:'Konstante nominale Zins- und Wachstumsraten, Primärsaldo null, keine Wechselkurs- oder Bewertungsänderungen und keine Rückkopplung von Schulden auf Zins oder Wachstum. Eine fallende Quote schließt Finanzierungsprobleme oder Fälligkeitsrisiken nicht aus.',
 tex:String.raw`b_t=\frac{1+i}{1+g}b_{t-1}-s_t,\qquad s_t=0,\quad b_t=b_0\left(\frac{1+i}{1+g}\right)^t`,sources:[S.debt],links:['economics-04','bonds-11'],
 plot:{x:[0,10],y:[70,130],xLabel:'Jahre t',yLabel:'Staatsschulden / BIP (%)',series:[2,4,6].map((g,i)=>l('Nominales Wachstum '+g+' %',s(0,10,t=>100*(1.04/(1+g/100))**t,10),{dash:i===1?'8 5':undefined})),marks:[]}
});
add('economics-09',{
 id:'comparative-advantage-ppf',title:'Produktionsmöglichkeiten und Handelsgewinne',
 takeaway:'Handel kann den Konsum über die eigene Produktionsgrenze hinaus ermöglichen.',
 read:'Land A kann maximal 20 Wein oder 10 Tuch herstellen: Ein Wein kostet dort 0,5 Tuch. In Land B kostet ein Wein 2 Tuch. Beim Tauschverhältnis 1:1 spezialisiert sich A auf 20 Wein (S) und kann beispielsweise 12 Wein und 8 Tuch konsumieren (K). Ohne Handel wären bei 12 Wein nur 4 Tuch möglich (A). Die Handelsgerade zeigt Konsummöglichkeiten, keine neue Produktionskapazität.',
 assumptions:'Zwei Güter, konstante Opportunitätskosten, vollständige Beschäftigung, keine Transportkosten. Land B habe die Produktionsgrenze T = 20 − 2W; es produziert 20 Tuch und erhält im gezeigten Handel 8 Wein gegen 8 Tuch. Beide Länder gewinnen gegenüber ihren jeweiligen Produktionsgrenzen.',
 tex:String.raw`T_A=10-0{,}5W_A,\quad T_B=20-2W_B;\qquad 0{,}5<\frac{P_W}{P_T}=1<2;\qquad T_A^{\mathrm{Konsum}}=20-W_A^{\mathrm{Konsum}}`,sources:[S.trade],links:['economics-12'],
 plot:{x:[0,22],y:[0,22],xLabel:'Wein W (Einheiten)',yLabel:'Tuch T (Einheiten)',series:[l('A: Produktionsgrenze',s(0,20,w=>10-.5*w)),l('A: Konsum bei Handel 1:1',s(0,20,w=>20-w),{dash:'8 5'}),l('B: Produktionsgrenze',s(0,10,w=>20-2*w),{dash:'3 5'})],marks:[m(12,4,'A'),m(12,8,'K',{guides:true}),m(20,0,'S',{dx:-12,anchor:'end'})]}
});
add('economics-10',{
 id:'fx-demand-shift',title:'Devisennachfrage und die Richtung der Notierung',
 takeaway:'Steigt der Preis eines Euro in US-Dollar, wertet der Euro gegenüber dem Dollar auf.',
 read:'Die Menge auf der horizontalen Achse sind gehandelte Euro. D₀ und S schneiden sich bei Q = 50 und 1,10 USD/EUR (E₀). Höhere Nachfrage nach Euro verschiebt D₀ zu D₁: E₁ liegt bei Q = 70 und 1,18 USD/EUR. Ein Euro kauft danach mehr Dollar. In der inversen Notierung EUR/USD würde der Zahlenwert dagegen fallen.',
 assumptions:'Schematischer flexibler Wechselkurs, ceteris paribus, konstantes Euroangebot. Die Geraden illustrieren den Marktmechanismus und sind keine Wechselkursprognose. Heimwährung H ist hier USD, Fremdwährung F ist EUR; diese Konvention wird im Paritätskapitel weiterverwendet.',
 tex:String.raw`S=\frac{\mathrm{USD}}{\mathrm{EUR}},\quad S_{D,0}=1{,}3-0{,}004Q,\quad S_{D,1}=1{,}46-0{,}004Q,\quad S_S=0{,}9+0{,}004Q`,sources:[S.fx],links:['economics-11','advanced-06'],
 plot:{x:[0,100],y:[.8,1.5],xLabel:'Gehandelte Euro Q (Mengeneinheiten)',yLabel:'Wechselkurs S (USD je EUR)',series:[l('D₀: Euro-Nachfrage',s(0,100,q=>1.3-.004*q)),l('D₁: höhere Euro-Nachfrage',s(0,100,q=>1.46-.004*q),{dash:'8 5'}),l('S: Euro-Angebot',s(0,100,q=>.9+.004*q))],marks:[m(50,1.1,'E₀',{guides:true,dx:-12,dy:24,anchor:'end'}),m(70,1.18,'E₁',{guides:true})]}
});
add('economics-11',{
 id:'covered-parity-forward',title:'Zinsdifferenzen bestimmen den arbitragefreien Terminkurs',
 takeaway:'Der Terminkurs ist unter gedeckter Zinsparität eine Preisrelation für Absicherung und kein erwarteter künftiger Kassakurs.',
 read:'Der heutige Kurs beträgt 1,10 USD je EUR. Bei konstant 5 % USD-Zins und 2 % EUR-Zins steigt F mit der Laufzeit: nach einem Jahr auf 1,13235 und nach fünf Jahren auf '+fmt(1.1*(1.05/1.02)**5,5)+'. Die Euroanlage liefert weniger Zinsen; der höhere abgesicherte Verkaufskurs gleicht den Zinsnachteil aus. Die höher verzinste USD-Währung steht entsprechend im Terminabschlag.',
 assumptions:'Jährliche effektive Verzinsung, flache Zinskurven, keine Transaktionskosten, Ausfallrisiken, Finanzierungsspreads oder Cross-Currency-Basis. Eine Kursprognose aus ungedeckter Parität erfordert zusätzliche Annahmen über Risikoprämien.',
 tex:String.raw`F_{0,T}=S_0\frac{(1+i_H)^T}{(1+i_F)^T},\quad S_0=1{,}10\ \mathrm{USD/EUR},\quad i_H=5\%,\ i_F=2\%`,sources:[S.parity],links:['derivatives-03','advanced-06'],
 plot:{x:[0,5],y:[1,1.3],xLabel:'Laufzeit T (Jahre)',yLabel:'Termin- / Kassakurs (USD je EUR)',series:[l('F₀,ₜ aus gedeckter Zinsparität',s(0,5,t=>1.1*(1.05/1.02)**t)),l('Heutiger Kassakurs S₀',s(0,5,()=>1.1),{dash:'8 5'})],marks:[m(1,1.1*1.05/1.02,'T = 1',{guides:true})]}
});
add('economics-12',{
 id:'tariff-welfare',title:'Importzoll: Umverteilung und echter Wohlfahrtsverlust',
 takeaway:'Ein Zoll schützt heimische Anbieter, verteuert den Konsum und vernichtet in diesem Modell Handelsgewinne.',
 read:'Beim Weltmarktpreis 30 produziert das Inland 10 und fragt 70 nach: Importe 60. Ein Zoll von 20 hebt den Inlandspreis auf 50; Produktion steigt auf 30, Nachfrage fällt auf 50 und Importe sinken auf 20. Das mittlere Rechteck ist Zolleinnahme 400. Die beiden Dreiecke ergeben zusammen Wohlfahrtsverlust 400: teurere heimische Produktion und entfallener Konsum.',
 assumptions:'Kleines Land mit unverändertem Weltmarktpreis, vollständige Zollüberwälzung, keine Vergeltung und keine externen Effekte. Zolleinnahmen zählen zur heimischen Wohlfahrt, sie sind kein Verlust. Bei Marktmacht oder politischen Gegenreaktionen ändern sich die Ergebnisse.',
 tex:String.raw`P_D=100-Q,\quad P_S=20+Q,\quad P_W=30,\quad t=20;\qquad T=t(50-30)=400,\quad DWL=\tfrac12t[(30-10)+(70-50)]=400`,sources:[S.tariff],links:['economics-01','economics-09'],
 plot:{x:[0,100],y:[0,125],xLabel:'Inländische Menge Q',yLabel:'Preis (GE je Einheit)',series:[l('Inländische Nachfrage',s(0,100,q=>100-q)),l('Inländisches Angebot',s(0,100,q=>20+q)),l('Weltpreis 30',s(0,100,()=>30),{dash:'8 5'}),l('Inlandspreis mit Zoll 50',s(0,100,()=>50),{dash:'3 5'})],areas:[{points:[[10,30],[30,30],[30,50]]},{points:[[50,30],[50,50],[70,30]]},{points:[[30,30],[30,50],[50,50],[50,30]],color:'#087f82'}],marks:[m(10,30,'10',{dx:-6,dy:25,anchor:'end'}),m(30,50,'30'),m(50,50,'50'),m(70,30,'70',{dy:25})]}
});
module.exports=figs;
Object.defineProperty(module.exports,'models',{value:{cost,mc,atc,avc,qATC}});
