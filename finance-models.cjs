/* Pure, deterministic teaching models; bundled into index.html for offline use. */
(function(root){
'use strict';
const models={};
const field=(key,label,min,max,step,value)=>({key,label,min,max,step,value});
const seq=(lo,hi,fn,n=60)=>Array.from({length:n+1},(_,i)=>{const x=lo+(hi-lo)*i/n;return [x,fn(x)];});
const result=(metrics,points,xLabel,yLabel,note='')=>({metrics,points,xLabel,yLabel,note});
const add=(id,title,intro,controls,calc)=>{models[id]={title,intro,controls,calc};};
const cdf=x=>{const a=Math.abs(x),t=1/(1+.2316419*a),p=1-Math.exp(-a*a/2)/Math.sqrt(2*Math.PI)*t*(.319381530+t*(-.356563782+t*(1.781477937+t*(-1.821255978+t*1.330274429))));return x<0?1-p:p;};
const inv=p=>{let a=-10,b=10;for(let i=0;i<80;i++){let m=(a+b)/2;if(cdf(m)<p)a=m;else b=m;}return(a+b)/2;};
const annuity=(c,r,n)=>r===0?c*n:c*(-Math.expm1(-n*Math.log1p(r)))/r;
const price=(coupon,y,n)=>annuity(coupon,y,n)+100/(1+y)**n;
const bsm=(S,K,r,v,T)=>{const d1=(Math.log(S/K)+(r+v*v/2)*T)/(v*Math.sqrt(T)),d2=d1-v*Math.sqrt(T);const call=S*cdf(d1)-K*Math.exp(-r*T)*cdf(d2);return {call,put:call-S+K*Math.exp(-r*T),delta:cdf(d1)};};
add('dcf','Barwert und Zeit','Verändere Zinssatz und Zahlungszeitpunkt. Die Kurve zeigt den Wert derselben zukünftigen Zahlung heute.',[field('fv','Zahlung (€)',0,100000,100,1000),field('r','Diskontsatz (% p. a.)',-5,30,.25,5),field('n','Jahre',1,40,1,3)],p=>result([['Barwert (€)',p.fv/(1+p.r/100)**p.n]],seq(0,40,t=>p.fv/(1+p.r/100)**t),'Jahre bis Zahlung','Barwert (€)','Einzelzahlung, konstanter jährlicher Zinssatz; keine Steuern.'));
add('annuity','Eine Zahlungsreihe bewerten','Die Kurve addiert den Barwert weiterer gleich hoher Jahreszahlungen.',[field('c','Jahreszahlung (€)',0,50000,100,100),field('r','Zins (% p. a.)',0,20,.25,5),field('n','Zahlungen',1,50,1,3)],p=>result([['Barwert (€)',annuity(p.c,p.r/100,p.n)]],seq(1,50,n=>annuity(p.c,p.r/100,Math.round(n)),49),'Anzahl Jahreszahlungen','Barwert (€)','Zahlungen jeweils am Jahresende. Bei Zins null gilt Barwert = Zahlung × Anzahl.'));
add('growth','Wachstum und Schwankungen','Vergleiche das Wachstum eines jährlich wechselnden Renditepaares. Die Kurve ist deterministisch und keine Monte-Carlo-Prognose.',[field('mu','Mittlere Rendite (%)',-10,20,.5,5),field('d','Abweichung ± (%-Punkte)',0,60,1,20)],p=>{const g=Math.sqrt((1+(p.mu+p.d)/100)*(1+(p.mu-p.d)/100))-1;return result([['Arithmetisches Mittel (%)',p.mu],['Geometrisches Mittel (%)',g*100]],seq(0,30,n=>100*(1+g)**n),'Jahre','Geglätteter Wachstumsfaktor (Start 100)','Renditen wechseln zwischen Mittelwert plus und minus Abweichung; Kurve zeigt geometrischen Trend.');});
add('diversification','Zwei Anlagen kombinieren','Beobachte, wie Korrelation und Gewicht das Gesamtrisiko verändern.',[field('a','Volatilität A (%)',1,60,1,20),field('b','Volatilität B (%)',1,60,1,20),field('rho','Korrelation',-1,1,.05,0),field('w','Gewicht A (%)',0,100,1,50)],p=>{const vol=w=>Math.sqrt(Math.max(0,w*w*p.a*p.a+(1-w)**2*p.b*p.b+2*w*(1-w)*p.rho*p.a*p.b));return result([['Portfoliovolatilität (%)',vol(p.w/100)]],seq(0,100,w=>vol(w/100)),'Gewicht A (%)','Volatilität (%)','Zwei Anlagen, konstante Volatilitäten und Korrelation; keine erwartete Rendite modelliert.');});
add('capm','Beta und geforderte Rendite','Die Wertpapiermarktlinie vergütet im CAPM systematisches Risiko.',[field('rf','Risikofreier Zins (%)',0,10,.25,3),field('premium','Marktrisikoprämie (%)',0,12,.25,5),field('beta','Beta',-1,3,.1,1.2)],p=>result([['Erforderliche Rendite (%)',p.rf+p.beta*p.premium]],seq(-1,3,b=>p.rf+b*p.premium),'Beta','Erforderliche Rendite (%)','CAPM-Modellannahmen; die Linie ist keine Prognosegarantie.'));
add('wacc','Eigen- und Fremdkapitalkosten','Verändere die Kapitalstruktur bei hier konstant gehaltenen Finanzierungssätzen.',[field('e','Eigenkapitalanteil (%)',0,100,1,60),field('ke','Eigenkapitalkosten (%)',1,25,.5,10),field('kd','Fremdkapitalkosten (%)',0,20,.25,5),field('tax','Modellsteuersatz (%)',0,50,1,25)],p=>{const f=e=>e/100*p.ke+(1-e/100)*p.kd*(1-p.tax/100);return result([['WACC (%)',f(p.e)]],seq(0,100,f),'Eigenkapitalanteil (%)','WACC (%)','Marktwertgewichte; nutzbarer Tax Shield. In der Realität ändern sich Kapitalrisiko und Finanzierungssätze mit der Verschuldung.');});
add('gordon','Wachstum versus Diskontierung','Je näher ewiges Wachstum am Diskontsatz liegt, desto empfindlicher wird die Bewertung.',[field('d','Nächste Jahreszahlung',.1,20,.1,3),field('r','Diskontsatz (%)',1,20,.25,8),field('g','Ewiges Wachstum (%)',-5,10,.25,2)],p=>{if(p.g>=p.r)throw Error('Für eine endliche Gordon-Bewertung muss Wachstum g kleiner als Diskontsatz r sein.');return result([['Wert',p.d/((p.r-p.g)/100)]],seq(-5,Math.min(10,p.r-.5),g=>p.d/((p.r-g)/100)),'Wachstum (%)','Barwert','Konstantes ewiges Wachstum; Zahlung und Diskontsatz müssen zum selben Kapitalanspruch passen.');});
add('inflation','Nominal und real','Sieh, wie Inflation die Kaufkraft einer nominalen Rendite verändert.',[field('r','Nominalrendite (%)',-10,20,.5,6),field('pi','Inflation (%)',-2,15,.25,2)],p=>{const real=(1+p.r/100)/(1+p.pi/100)-1;return result([['Realrendite (%)',real*100]],seq(0,30,n=>100*(1+real)**n),'Jahre','Kaufkraft (Start 100)','Konstante Rendite und Inflation, ohne Entnahmen und Steuern.');});
add('fx','Währungsrendite übersetzen','Der Wechselkurs wird als Heimatwährung je Fremdwährungseinheit interpretiert.',[field('r','Lokale Anlagerendite (%)',-50,50,1,8),field('fx','Fremdwährungsänderung (%)',-40,40,1,-5)],p=>result([['Heimatrendite (%)',((1+p.r/100)*(1+p.fx/100)-1)*100]],seq(-40,40,f=>((1+p.r/100)*(1+f/100)-1)*100),'Fremdwährungsänderung (%)','Heimatrendite (%)','Ungesichert, eine Periode; die Kreuzkomponente wird berücksichtigt.'));
add('forward','Terminpreis und vollständige Replikation','Verändere jeweils eine Größe: Die Finanzierung erhöht den fairen Lieferpreis, bekannte proportionale Erträge senken ihn. Eine getrennte angebotene Quote zeigt einen Preisabstand, keine Spotprognose.',[field('s','Spotpreis (WE je Einheit)',1,200,.5,100),field('r','Stetige Finanzierung (% p. a.)',-5,15,.25,5),field('q','Stetige proportionale Ertragsrate (% p. a.)',0,10,.25,0),field('t','Lieferlaufzeit (Jahre)',.25,5,.25,1),field('k','Angebotener Lieferpreis (WE je Einheit)',1,400,.5,110)],p=>{
 const clean=x=>Object.is(x,-0)?0:x,units=Math.exp(-p.q/100*p.t),pre=p.s*units,fair=p.s*Math.exp((p.r-p.q)/100*p.t),gap=clean(p.k-fair),pv=clean(gap*Math.exp(-p.r/100*p.t)),series=[{name:'Fairer Lieferpreis bei gleicher Rate',points:seq(0,5,t=>p.s*Math.exp((p.r-p.q)/100*t),100)},{name:'Heutiger Spot als Vergleich',dash:true,points:seq(0,5,()=>p.s,100)}];
 const out=result([['Forwardpreis (WE je Einheit)',fair],['Prepaid-Replikationspreis (WE)',pre],['Angeboten minus fair, Endwert (WE)',gap],['Heutiger Wert dieses Abstands (WE)',pv],['Anfänglicher replizierender Stückbestand',units]],series[0].points,'Lieferlaufzeit (Jahre)','Preis (WE je Einheit)','Bekannte konstante stetige Finanzierung und proportionale Erträge; Erträge werden vollständig in denselben Basiswert reinvestiert. Der zuerst betrachtete Pfad kauft den replizierenden Teilbestand auf Kredit und verkauft eine Einheit auf Termin. Der Abstand ist sein sicherer Endwert nur unter den idealen Annahmen. Bei negativem Abstand wäre ausschließlich die vollständig mögliche Umkehrung der profitable Pfad; dabei müssen alle Leih- und Ertragsverpflichtungen erfüllt werden. Keine Handelskosten, Lagerung, Convenience Yield, Margin, Ausfälle oder unsicheren Erträge. Die Kurve variiert Lieferlaufzeiten bei unveränderten Raten. Die eingegebene angebotene Quote gilt nur für die ausgewählte Laufzeit und wird nicht als gesamte Marktkurve gezeichnet. WE bedeutet Währungseinheiten. Fünf Prozent stetig ergeben ohne Ertrag nach einem Jahr 105,1271 je hundert Spot.');
 out.series=series;out.marker=[p.t,fair];const prices=series.flatMap(s=>s.points.map(p=>p[1])),lo=Math.min(...prices),hi=Math.max(...prices),pad=Math.max((hi-lo)*.08,p.s*.02);out.yRange=[lo-pad,hi+pad];out.note+=' Die Preisachse umfasst die gezeigten Preise mit Rand und beginnt nicht zwingend bei null.';
 out.projection={caption:'Kauf-/Finanzierungs-/Short-Forward-Pfad auf eine spätere Einheit: tatsächliches Cash mit Vorzeichen; zwischenzeitliche Erträge sind vollständig wiederangelegt.',headers:['Geschäft','Cash heute (WE)','Cash am Termin (WE)','Einheiten / Verpflichtung'],rows:[
  ['Replizierenden Teilbestand kaufen',-pre,0,'Anfangsbestand (gerundet): '+units.toLocaleString('de-DE',{maximumFractionDigits:6})+' Stück; nach Wiederanlage eine Einheit.'],
  ['Kaufbetrag vollständig finanzieren',pre,-fair,'Feststehende Rückzahlung; keine weitere offene Schuld nach Erfüllung.'],
  ['Eine Einheit zum angebotenen Preis liefern',0,p.k,'Replizierte Einheit liefern; danach null Stück.'],
  ['Gesamter abgeschlossener Pfad',0,gap,'Keine offene Einheit und keine Restschuld; Kosten ausdrücklich ausgeschlossen.']
 ]};
 out.stable={caption:'Ertragswiederanlage und Zinskonvention ausdrücklich getrennt: kein zusätzlich frei vereinnahmtes Dividendencash.',headers:['Größe','Wert','Einheit / Lesart'],rows:[['Anfangsbestand',units,'Stück'],['Endbestand vor Lieferung',1,'Stück nach vollständiger Wiederanlage'],['Vorabpreis der Replikation',pre,'WE heute'],['Effektiver Jahreszins der Finanzierung',clean(100*Math.expm1(p.r/100)),'Prozent effektiv, zugehörig zur stetigen Eingabe'],['Effektive jährliche Stückvermehrung',clean(100*Math.expm1(p.q/100)),'Prozent, bei kontinuierlicher Wiederanlage'],['Stückbestand nach Lieferung',0,'Stück']]};return out;
});
models.forward.presets=[
 {label:'Grundfall: Quote 110',values:{s:100,r:5,q:0,t:1,k:110}},
 {label:'Nur Quote niedriger: 100',values:{s:100,r:5,q:0,t:1,k:100}},
 {label:'Nur Ertragsrate höher: vier Prozent',values:{s:100,r:5,q:4,t:1,k:110}},
 {label:'Nur Finanzierung negativ: minus zwei Prozent',values:{s:100,r:-2,q:0,t:1,k:110}},
 {label:'Nur Laufzeit länger: zwei Jahre',values:{s:100,r:5,q:0,t:2,k:110}},
 {label:'Ertrag gleicht Finanzierung aus',values:{s:100,r:5,q:5,t:1,k:100}},
 {label:'Nur Ertrag über Finanzierung: sechs Prozent',values:{s:100,r:5,q:6,t:1,k:110}},
 {label:'Nur Spotpreis höher: 120',values:{s:120,r:5,q:0,t:1,k:110}}
];
// Fixed-payment bond valuation and position exposure; all inputs refer to the same yield convention.
function bondRiskPlan(p){
 const y=p.y/100,m=p.m,n=p.n*m;
 const calc=rate=>{let P=0,weighted=0,second=0;const rows=[];for(let j=1;j<=n;j++){const cf=p.c/m+(j===n?100:0),t=j/m,pv=cf/(1+rate/m)**j;P+=pv;weighted+=t*pv;second+=t*(t+1/m)*pv/(1+rate/m)**2;rows.push({j,t,cf,pv});}const mac=weighted/P;return{P,mac,mod:mac/(1+rate/m),conv:second/P,rows};};
 const b=calc(y),dy=p.shock/10000,next=calc(y+dy),scale=p.position===0?0:p.position/100,V=b.P*scale,money=V*b.mod,pvbp=money*.0001,exact=100*(next.P/b.P-1),linear=-100*b.mod*dy,quadratic=linear+50*b.conv*dy*dy,up=calc(y+.0001).P,down=calc(y-.0001).P,change=scale===0?0:(next.P-b.P)*scale;
 const out=result([['Preis je 100 Nominal',b.P],['Modified Duration (Jahre)',b.mod],['Macaulay Duration (Jahre)',b.mac],['DV01 je 100 Nominal',b.P*b.mod*.0001],['Konvexität (Jahre²)',b.conv],['Exakte Preisänderung (%)',exact],['Nur Duration (%)',linear],['Mit Konvexität (%)',quadratic],['Marktwert der Position (WE)',V],['Money Duration (WE je 1,0 Yieldänderung)',money],['PVBP der Position (WE je Basispunkt)',pvbp],['Exakte Wertänderung der Position (WE)',change]],seq(0,20,x=>calc(x/100).P),'Nominale Jahresrendite (%)','Preis je 100','Feste regelmäßige Kupons, Bewertung direkt nach Kupontermin; keine Ausfälle, Optionen, Kosten oder Währungsänderungen. WE bedeutet Währungseinheiten. Der Bestand ist Nominal, der Positionsmarktwert ergibt sich aus Vollpreis mal Nominal geteilt durch hundert. Die Kurve zeigt weiterhin den Preis je hundert, unabhängig vom Bestand. Yieldänderungen sind nominale Jahresquoten mit derselben Frequenz m. Ein Basispunkt ist 0,0001 als Dezimalzahl; ein Prozentpunkt sind hundert Basispunkte. Money Duration ist die positive Verlustsensitivität einer Longposition je Einheit der dezimalen Jahres-YTM; die Wertableitung ist ihr negatives Vorzeichen. Angezeigte PVBP ist die lineare Ableitungsnäherung. Tatsächlicher Verlust bei einem Basispunkt Anstieg, Gewinn bei einem Basispunkt Rückgang und zentrale Halb-Differenz stehen getrennt in der Tabelle. Der Zinsschock verändert nur die eigene YTM. Negative Szenariorenditen sind bei positiver Basis zulässig. Große Schocks erfordern Neubewertung; die Konvexitätsnäherung wird im nachfolgenden Kapitel hergeleitet.');
 out.risk={...b,position:p.position,marketValue:V,moneyDuration:money,pvbp,next:next.P,exactChange:change,upLoss:(b.P-up)*scale,downGain:(down-b.P)*scale,centralPVBP:(down-up)*scale/2};
 out.projection={caption:'Derselbe Zahlungsplan erzeugt Preis, Macaulay und Modified Duration',headers:['Periode','Jahr','Zahlung je 100','Barwert','Barwertgewicht','Macaulay-Beitrag (Jahre)'],rows:b.rows.map(r=>[r.j,r.t,r.cf,r.pv,r.pv/b.P,r.t*r.pv/b.P])};
 out.stable={caption:'Relative Sensitivität in Positionsbeträge und verschiedene Ein-Basispunkt-Maße übersetzen',headers:['Maß','Wert','Einheit / Bezug'],rows:[['Nominalbestand',p.position,'WE Nominal'],['Marktwert',V,'WE Marktwert'],['Money Duration',money,'WE je 1,0 nominaler Jahres-Yieldänderung'],['Lineare PVBP',pvbp,'WE je Basispunkt'],['Exakter Verlust bei +1 bp',(b.P-up)*scale,'WE Verlustbetrag'],['Exakter Gewinn bei −1 bp',(down-b.P)*scale,'WE Gewinnbetrag'],['Zentrale Halb-Differenz',(down-up)*scale/2,'WE je Basispunkt'],['Lineare Wertänderung beim eingegebenen Schock',money===0?0:-money*dy,'WE, mit Vorzeichen'],['Exakte Wertänderung beim eingegebenen Schock',change,'WE, mit Vorzeichen']]};return out;
}
add('bond','Anleihepreis, Duration und Positionsrisiko','Verändere zuerst nur den Nominalbestand: Relative Duration und Preis je hundert bleiben gleich, die Geldsensitivität wächst proportional. Vergleiche danach Kupon, Laufzeit, Frequenz und Yield bei gleichem Bestand oder gleichem Marktwert.',[field('c','Jahreskupon (% Nominal)',0,15,.25,5),field('y','Nominale Jahresrendite (%)',0,20,.25,6),field('n','Restlaufzeit (Jahre)',1,30,1,3),field('m','Kuponzahlungen pro Jahr',1,12,1,1),field('shock','Zinsschock (Basispunkte)',-500,500,25,100),field('position','Nominalbestand (Währungseinheiten)',0,10000000,.0001,1000000)],bondRiskPlan);
models.bond.presets=[
 {label:'Fünfjahresbond zu pari',values:{c:5,y:5,n:5,m:1,shock:100,position:1000000}},
 {label:'Doppelter Nominalbestand',values:{c:5,y:5,n:5,m:1,shock:100,position:2000000}},
 {label:'Zehn Jahre, gleicher Nominalbestand',values:{c:5,y:5,n:10,m:1,shock:100,position:1000000}},
 {label:'Nullkupon, gleicher Nominalbestand',values:{c:0,y:5,n:5,m:1,shock:100,position:1000000}},
 {label:'Nullkupon, gleicher Marktwert',values:{c:0,y:5,n:5,m:1,shock:100,position:1276281.5625}},
 {label:'Halbjährliche Zahlungen',values:{c:5,y:5,n:5,m:2,shock:100,position:1000000}}
];
function creditDistribution(n,p,rho){
 if(!Number.isInteger(n)||n<1||n>100||!Number.isFinite(p)||p<0||p>.3||!Number.isFinite(rho)||rho<0||rho>1)throw Error('Gültige Anzahl ganzer Schuldner, Ausfallwahrscheinlichkeit und Abhängigkeit erforderlich.');
 const binomial=[Math.exp(n*Math.log1p(-p))];for(let k=1;k<=n;k++)binomial.push(binomial[k-1]*(n-k+1)/k*p/(1-p));
 const pmf=binomial.map((v,k)=>(1-rho)*v+(k===0?rho*(1-p):k===n?rho*p:0));
 const tails=Array(n).fill(0);let tail=0;for(let k=n;k>=1;k--){tail+=binomial[k];tails[k-1]=tail;}
 // Left 99% quantile, evaluated in positive survival probabilities to retain tiny tails.
 let quantile=0;if(p>0){if(n===1||rho===1)quantile=p<=.01?0:n;else{const threshold=(.01-rho*p)/(1-rho);quantile=n;if(threshold>0)for(let k=0;k<n;k++)if(tails[k]<=threshold){quantile=k;break;}}}
 return{binomial,pmf,quantile,any:(1-rho)*(-Math.expm1(n*Math.log1p(-p)))+rho*p};
}
function creditPlan(p){
 const E=p.ead,pd=p.pd/100,ell=p.lgd/100,n=p.names,rho=p.rho;
 if(!(E>0)||!Number.isFinite(E)||!Number.isFinite(ell)||ell<0||ell>1)throw Error('Positive Exposition und gültige Verlustquote erforderlich.');
 const distribution=creditDistribution(n,pd,rho),severity=E*ell/n,EL=E*ell*pd,sd=E*ell*Math.sqrt(pd*(1-pd)*(rho+(1-rho)/n)),VaR=severity*distribution.quantile;
 const out=result([['Erwarteter Verlust (WE)',EL],['Verlust je einzelnem Ausfall (WE)',severity],['Verlust-Standardabweichung (WE)',sd],['99-%-Verlustquantil (WE)',VaR],['Mindestens ein Ausfall (%)',distribution.any*100],['Größtmöglicher Modellverlust (WE)',E*ell],['Erwartete Zahl von Ausfällen',n*pd],['99-%-Quantil minus Mittelwert (WE)',VaR-EL]],seq(0,30,x=>E*ell*x/100),'Einjahres-PD je Schuldner (%)','Erwarteter Einjahresverlust (WE)','Eigene Einjahresillustration mit gleich großen, festen Expositionen und gleicher fester LGD. Mit Gewicht rho teilen alle Schuldner dasselbe Bernoulli-Ausfallereignis; sonst sind sie unabhängig. Bei mehreren Schuldnern und einer PD strikt zwischen null und eins ist rho die paarweise Ausfallkorrelation. Die Kurve zeigt nur den Mittelwert: Anzahl und Abhängigkeit verändern ihn bei festem Gesamtexposure nicht. Die Tabellen und das Verlustquantil zeigen die Verteilung. Kein Credit-Spread-, Marktwert- oder aufsichtsrechtliches Kapitalmodell.');
 let cumulative=0;out.projection={caption:'Vollständige Modellverteilung: Rundungen in der Anzeige werden nicht zur Quantilberechnung verwendet.',headers:['Zahl ausgefallener Schuldner','Verlust (WE)','Wahrscheinlichkeit (%)','Kumuliert bis hier (%)'],rows:distribution.pmf.map((v,k)=>[k,severity*k,100*v,100*(cumulative+=v)])};
 out.stable={caption:'Gleiches Gesamtexposure, gleiche PD und LGD; nur Anzahl und Abhängigkeit ändern sich.',headers:['Schuldner','Ausfallkorrelation','Erwarteter Verlust (WE)','Standardabweichung (WE)','99-%-Verlustquantil (WE)'],rows:[[1,0],[25,0],[100,0],[25,.25],[25,1]].map(([N,R])=>[N,R,EL,E*ell*Math.sqrt(pd*(1-pd)*(R+(1-R)/N)),E*ell/N*creditDistribution(N,pd,R).quantile])};
 out.credit={E,p:pd,ell,n,rho,severity,EL,sd,VaR,...distribution};return out;
}
add('credit','Erwarteter Verlust und Konzentration','Halte das Gesamtexposure fest und verteile es auf mehr Schuldner. Vergleiche anschließend unabhängige mit gemeinsam getriebenen Ausfällen. Der Mittelwert bleibt gleich; Verlustschwere, Streuung und Quantil verändern sich.',[field('ead','Gesamtexposure (WE)',1000,1000000,1000,1000000),field('pd','Einjahres-PD je Schuldner (%)',0,30,.5,2),field('lgd','Verlustquote bei Ausfall (%)',0,100,1,60),field('names','Gleich große Schuldner',1,100,1,25),field('rho','Paarweise Ausfallkorrelation',0,1,.05,0)],creditPlan);
models.credit.presets=[
 {label:'25 unabhängige Schuldner',values:{ead:1000000,pd:2,lgd:60,names:25,rho:0}},
 {label:'Ein konzentrierter Schuldner',values:{ead:1000000,pd:2,lgd:60,names:1,rho:0}},
 {label:'Gemeinsame Ausfalltreiber',values:{ead:1000000,pd:2,lgd:60,names:25,rho:.25}},
 {label:'Gleicher Mittelverlust: häufigere kleine Verluste',values:{ead:1000000,pd:4,lgd:30,names:25,rho:0}},
 {label:'Vollständig gemeinsame Ausfälle',values:{ead:1000000,pd:2,lgd:60,names:25,rho:1}},
 {label:'Halbes Gesamtexposure',values:{ead:500000,pd:2,lgd:60,names:25,rho:0}}
];
add('waterfall','Gewinne zwischen LP und GP teilen','Ein vereinfachtes Carry-Modell zeigt den Unterschied zwischen Kapitalrückzahlung und Gewinnbeteiligung.',[field('capital','Eingezahltes Kapital',1,200,1,100),field('value','Ausschüttungsfähiger Endwert',0,400,1,150),field('carry','Carry auf Gewinn (%)',0,40,1,20)],p=>{const gp=v=>Math.max(0,v-p.capital)*p.carry/100;return result([['GP-Carry',gp(p.value)],['LP-Rückfluss',p.value-gp(p.value)]],seq(0,400,gp),'Endwert','GP-Carry','Ohne Gebühren, Hurdle, Catch-up, Recycling oder Clawback. Konkrete Verträge können wesentlich anders verteilen.');});
add('option','Call, Put und Absicherung am Laufzeitende','Vergleiche sechs Positionen: Endwert, Anfangskosten und daraus resultierenden Gewinn je Einheit. Die Rechnung ignoriert Finanzierung und bewertet keine Option vor ihrem Ablauf.',[{...field('strategy','Position',0,5,1,0),choices:['Long Call','Long Put','Protective Put (Aktie + Put)','Covered Call (Aktie − Call)','Short Call','Short Put'].map((label,value)=>({label,value}))},field('s','Aktienkaufpreis (nur bei Aktie + Option)',10,200,1,100),field('k','Strike',10,200,1,100),field('premium','Optionsprämie je Einheit',0,40,.5,5),field('end','Aktienkurs am Ende',0,250,1,110)],p=>{
 const names=['Long Call','Long Put','Protective Put','Covered Call','Short Call','Short Put'],put=[1,2,5].includes(p.strategy),short=[3,4,5].includes(p.strategy),stock=[2,3].includes(p.strategy),sign=short?-1:1,clean=x=>x===0?0:x;
 const option=x=>clean(sign*Math.max(put?p.k-x:x-p.k,0)),terminal=x=>clean((stock?x:0)+option(x)),cost=(stock?p.s:0)+sign*p.premium,profit=x=>clean(terminal(x)-cost),series=[{name:'Gewinn nach Anfangskosten',points:seq(0,250,profit,500)},{name:stock?'Endwert Aktie + Optionsposition':'Optionsauszahlung (vor Prämie)',dash:true,points:seq(0,250,terminal,500)}];
 const out=result([[names[p.strategy]+' · Gewinn',profit(p.end)],[stock?'Endwert Aktie + Optionsposition':'Optionsauszahlung (vor Prämie)',terminal(p.end)],['Netto-Anfangskosten (+ bezahlt / − erhalten)',clean(cost)]],series[0].points,'Aktienkurs am Ende (WE je Einheit)','Endwert oder Gewinn (WE je Einheit)','Eine Einheit, europäisches Endprofil, vollständige Erfüllung. Der Aktienkaufpreis wirkt nur bei Protective Put und Covered Call. Positive Anfangskosten sind bezahlt, negative erhalten; Gewinn = Endwert minus Anfangskosten. Keine Zinsen, Dividenden, Gebühren, Marginfinanzierung oder vorzeitige Ausübung. Negative Short-Auszahlung bezeichnet die Verpflichtung. Der Kursbereich 0 bis 250 ist eine Darstellungsgrenze; der Verlust eines ungedeckten Short Call ist theoretisch unbegrenzt.');
 out.series=series;out.projection={caption:'Zahlungsbestandteile je Einheit: Anfangszahlung positiv bei Eingang, negativ bei Ausgabe; Gewinn ohne Verzinsung.',headers:['Bestandteil','Anfangszahlung','Endwert am Termin','Gewinnbeitrag'],rows:[...(stock?[['Eine Aktie',-p.s,p.end,p.end-p.s]]:[]),[put?'Put-Position':'Call-Position',clean(-sign*p.premium),option(p.end),clean(option(p.end)-sign*p.premium)],['Gesamt',clean(-cost),terminal(p.end),profit(p.end)]]};return out;
});
models.option.presets=[
 {label:'Call: im Geld, trotzdem Verlust',values:{strategy:0,s:100,k:100,premium:5,end:103}},
 {label:'Call: Gewinnschwelle 105',values:{strategy:0,s:100,k:100,premium:5,end:105}},
 {label:'Short Call: steigende Verlusthöhe',values:{strategy:4,s:100,k:100,premium:5,end:150}},
 {label:'Long Put: fallender Kurs',values:{strategy:1,s:100,k:100,premium:5,end:80}},
 {label:'Short Put: Aktienkurs null',values:{strategy:5,s:100,k:100,premium:5,end:0}},
 {label:'Protective Put: geschützter Endwert',values:{strategy:2,s:100,k:100,premium:5,end:0}},
 {label:'Covered Call: begrenzter Mehrertrag',values:{strategy:3,s:100,k:100,premium:5,end:150}}
];
add('binomial','Eine Option replizieren','Das risikoneutrale Gewicht folgt aus Arbitragefreiheit, nicht aus einer Prognose der Trefferquote.',[field('s','Spot',10,200,1,100),field('k','Strike',10,200,1,100),field('u','Aufwärtsfaktor',1.05,1.8,.05,1.2),field('d','Abwärtsfaktor',.2,.95,.05,.8),field('r','Periodenzins (%)',0,20,1,5)],p=>{const B=1+p.r/100;if(!(p.d<B&&B<p.u))throw Error('Arbitragefreie Eingabe erfordert d < 1+r < u.');const q=(B-p.d)/(p.u-p.d),cu=Math.max(p.s*p.u-p.k,0),cd=Math.max(p.s*p.d-p.k,0);return result([['Risikoneutrales q (%)',100*q],['Callwert',(q*cu+(1-q)*cd)/B],['Delta',(cu-cd)/(p.s*(p.u-p.d))]],[[p.s*p.d,cd],[p.s*p.u,cu]],'Aktienkurs im Endzustand','Call-Auszahlung','Ein Zeitschritt, keine Dividenden; Linie verbindet nur die zwei modellierten Zustände.');});
add('bsm','Black–Scholes–Merton','Verändere Volatilität oder Laufzeit und vergleiche den Wert europäischer Optionen.',[field('s','Spot',10,200,1,100),field('k','Strike',10,200,1,100),field('r','Stetiger Zins (%)',0,15,.25,5),field('v','Volatilität (% p. a.)',1,80,1,20),field('t','Laufzeit (Jahre)',.1,5,.1,1)],p=>{const b=bsm(p.s,p.k,p.r/100,p.v/100,p.t);return result([['Callwert',b.call],['Putwert',b.put],['Call-Delta',b.delta]],seq(10,200,s=>bsm(s,p.k,p.r/100,p.v/100,p.t).call),'Spotpreis','Callwert','Keine Dividenden, konstante Volatilität und Zinsen, kontinuierlicher Handel. Keine amerikanische Ausübung.');});
add('supply','Angebot und Nachfrage','Ein Nachfrageimpuls verschiebt das Marktgleichgewicht.',[field('a','Nachfrage-Achsenabschnitt',30,180,5,100),field('b','Nachfragerückgang je Preiseinheit',.5,5,.5,2),field('c','Angebots-Achsenabschnitt',0,25,1,10)],p=>{const P=(p.a-p.c)/(p.b+1);return result([['Gleichgewichtspreis',P],['Gleichgewichtsmenge',p.c+P]],seq(0,60,x=>p.a-p.b*x-(p.c+x)),'Preis','Nachfrage minus Angebot','Q_D=a−bP und Q_S=c+P. Der Nulldurchgang der Überschussnachfrage ist das Gleichgewicht. Negative rechnerische Nachfrage ist außerhalb des ökonomischen Kurvenabschnitts.');});
add('regression','Eine Gerade und ihre Fehler','Verändere Achsenabschnitt und Steigung. Der Fehlervergleich nutzt fünf feste Beobachtungen.',[field('a','Achsenabschnitt',-5,10,.1,1),field('b','Steigung',-2,5,.1,2)],p=>{const x=[1,2,3,4,5],y=[3,5,8,8,11];return result([['Summe quadrierter Fehler',x.reduce((s,v,i)=>s+(y[i]-p.a-p.b*v)**2,0)]],x.map((v,i)=>[v,y[i]-p.a-p.b*v]),'x (Beobachtung)','Residuum y − ŷ','Feste Daten: (1,3), (2,5), (3,8), (4,8), (5,11). Die Grafik zeigt Residuen, keine neue Stichprobe. OLS-Optimum: a=1,3; b=1,9; SSE=1,9.');});
add('ar','Persistenz eines AR(1)-Prozesses','Die Kurve zeigt die bedingte Erwartung nach einem Anfangsschock, ohne neue Zufallsschocks.',[field('phi','Persistenz φ',-.95,1.05,.05,.8),field('c','Konstante c',-2,2,.1,1),field('start','Anfangswert',-10,20,1,10)],p=>{let x=p.start;const points=[[0,x]];for(let t=1;t<=30;t++){x=p.c+p.phi*x;points.push([t,x]);}return result([['Prognose nach 30 Perioden',x]],points,'Perioden','Bedingte Erwartung',Math.abs(p.phi)<1?'Stationär bei geeigneten Innovationsannahmen. Langfristiger Mittelwert c/(1−φ)='+ (p.c/(1-p.phi)).toFixed(2)+'.':'|φ| ≥ 1: kein stabiler stationärer AR(1)-Mittelwert unter den üblichen Annahmen.');});
add('dupont','Was treibt die Eigenkapitalrendite?','Marge, Kapitalumschlag und Verschuldungshebel wirken multiplikativ.',[field('margin','Nettomarge (%)',-10,30,.5,10),field('turn','Kapitalumschlag',.1,3,.1,1.2),field('lev','Aktiva / Eigenkapital',1,5,.1,2)],p=>result([['ROE (%)',p.margin*p.turn*p.lev]],seq(1,5,l=>p.margin*p.turn*l),'Aktiva / Eigenkapital','ROE (%)','Konsistente Durchschnittsbilanzen; Marge und Umschlag hier konstant. Mehr Verschuldung kann in der Realität die Zinslast und Marge verändern.'));
add('utility','Risikoaversion und Anlageanteil','Die Kurve bewertet Kombinationen einer riskanten Anlage mit Cash.',[field('mu','Riskante Rendite (%)',0,20,.5,8),field('rf','Cashrendite (%)',0,10,.25,2),field('vol','Volatilität (%)',1,50,1,20),field('a','Risikoaversion A',.5,10,.5,3)],p=>{const y=Math.max(0,Math.min(1,(p.mu-p.rf)/100/(p.a*(p.vol/100)**2)));return result([['Optimaler Anteil ohne Hebel (%)',100*y]],seq(0,100,w=>p.rf+w/100*(p.mu-p.rf)-50*p.a*(w/100*p.vol/100)**2),'Riskanter Anteil (%)','Nutzen × 100','Mittelwert-Varianz-Näherung, 0–100 % Anteil. Der Nutzenwert ist keine tatsächlich ausgezahlte Rendite.');});
add('rebalance','Gewichte driften lassen','Wie stark verändert eine Marktbewegung das Risiko ohne aktiven Handel?', [field('w','Anfangsgewicht Aktien (%)',0,100,1,60),field('a','Aktienrendite (%)',-50,50,1,20),field('b','Anleiherendite (%)',-20,20,1,0)],p=>{const w=p.w/100,drift=a=>100*w*(1+a/100)/(w*(1+a/100)+(1-w)*(1+p.b/100));return result([['Neues Aktiengewicht (%)',drift(p.a)]],seq(-50,50,drift),'Aktienrendite (%)','Aktiengewicht danach (%)','Zwei Anlagen, keine Ein- oder Auszahlungen; Rebalancingkosten hier nicht modelliert.');});
add('risk','VaR und Expected Shortfall','Die Normalannahme macht die Abhängigkeit von Volatilität und Konfidenzniveau sichtbar.',[field('mu','Mittlere Rendite (%)',-2,2,.1,0),field('vol','Volatilität (%)',.1,5,.1,1),field('confidence','Konfidenzniveau (%)',90,99.9,.1,95)],p=>{const z=inv(p.confidence/100);return result([['VaR (% Verlust)',-p.mu+z*p.vol],['Expected Shortfall (% Verlust)',-p.mu+p.vol*Math.exp(-z*z/2)/Math.sqrt(2*Math.PI)/(1-p.confidence/100)]],seq(90,99.9,c=>-p.mu+inv(c/100)*p.vol),'Konfidenzniveau (%)','VaR (% Verlust)','Normalverteilte Renditen; Mittelwert und Volatilität für denselben Horizont. Keine Verlustobergrenze.');});
add('alm','Vermögen und Verpflichtungen','Die Kurve zeigt die lineare Änderung des Überschusses bei einem parallelen Zinsschock.',[field('assets','Vermögen (Mio. €)',50,150,1,100),field('liab','Verpflichtungen (Mio. €)',50,150,1,105),field('da','Asset-Duration',0,15,.5,4),field('dl','Liability-Duration',0,15,.5,8),field('shock','Zinsschock (%-Punkte)',-3,3,.1,-1)],p=>{const surplus=s=>p.assets-p.liab-(p.assets*p.da-p.liab*p.dl)*s/100;return result([['Überschuss danach (Mio. €)',surplus(p.shock)],['Deckungsgrad vorher (%)',100*p.assets/p.liab]],seq(-3,3,surplus),'Zinsschock (%-Punkte)','Überschuss (Mio. €)','Modifizierte Duration, nur lineare Parallelverschiebung; Konvexität und weitere Risiken fehlen.');});
add('attribution','Allokation, Selektion, Interaktion','Ein Zwei-Segment-Beispiel zeigt, wie sich aktive Rendite vollständig zerlegen lässt.',[field('w','Portfolioanteil Segment A (%)',0,100,1,60),field('b','Benchmarkanteil Segment A (%)',0,100,1,50),field('alpha','Mehrrendite in Segment A (%-Punkte)',-5,5,.25,2)],p=>{const alloc=(p.w-p.b)/100*6,sel=p.b/100*p.alpha,inter=(p.w-p.b)/100*p.alpha;return result([['Allokation (%-Punkte)',alloc],['Selektion (%-Punkte)',sel],['Interaktion (%-Punkte)',inter],['Aktive Rendite (%-Punkte)',alloc+sel+inter]],seq(0,100,w=>(w-p.b)/100*6+w/100*p.alpha),'Portfolioanteil A (%)','Aktive Rendite (%-Punkte)','Benchmarksegmente A=10 %, B=4 %; Portfolio B=4 %, Portfolio A=10 % + Mehrrendite. Einperiodige Brinson-Fachler-Zerlegung.');});
add('execution','Kosten der Orderausführung','Auch nicht gekaufte Stücke können Opportunitätskosten verursachen.',[field('filled','Ausgeführte Stücke',0,100,1,80),field('price','Ausführungspreis (€)',45,55,.1,51),field('end','Schlusskurs (€)',45,55,.1,52),field('fees','Gebühren (€)',0,50,1,5)],p=>result([['Implementation Shortfall (€)',p.filled*(p.price-50)+(100-p.filled)*(p.end-50)+p.fees]],seq(45,55,e=>p.filled*(p.price-50)+(100-p.filled)*(e-50)+p.fees),'Schlusskurs (€)','Shortfall (€)','Kauf von 100 Stück geplant, Entscheidungspreis 50 €. Negativer Shortfall bedeutet Vorteil gegenüber dem Entscheidungsbenchmark.'));
add('tax','Steuerstundung und Zinseszins','Vergleiche jährlich besteuerte Erträge mit einer Besteuerung der Gewinne erst am Ende.',[field('r','Bruttorendite (%)',0,15,.25,6),field('tax','Modellsteuersatz (%)',0,50,1,25),field('n','Jahre',1,40,1,10)],p=>{const yearly=n=>10000*(1+p.r/100*(1-p.tax/100))**n,deferred=n=>10000*(1+((1+p.r/100)**n-1)*(1-p.tax/100));return result([['Jährlich besteuert (€)',yearly(p.n)],['Am Ende besteuert (€)',deferred(p.n)]],seq(0,40,n=>deferred(n)-yearly(n)),'Jahre','Vorteil der Stundung (€)','Start 10.000 €, konstanter Modellsteuersatz, keine Freibeträge oder Verluste; keine Abbildung einer konkreten Rechtsordnung.');});
add('npv','Investition und Kapitalwert','Zukünftige freie Zahlungen müssen die heutige Investition einschließlich Kapitalverzinsung decken.',[field('investment','Investition heute (€)',0,10000,100,1000),field('cash','Jährlicher Rückfluss (€)',0,5000,50,300),field('n','Jahre',1,30,1,5),field('r','Diskontsatz (%)',0,30,.25,8)],p=>result([['Kapitalwert (€)',annuity(p.cash,p.r/100,p.n)-p.investment]],seq(0,30,r=>annuity(p.cash,r/100,p.n)-p.investment),'Diskontsatz (%)','NPV (€)','Gleich hohe freie Jahresendzahlungen, kein separater Restwert. Positiver NPV bedeutet Wertzuwachs gegenüber dem verwendeten Diskontsatz.'));
add('fxforward','Zinsparität zweier Währungen','Die Notierung lautet Heimatwährung je Fremdwährungseinheit. Beide Zinssätze bestimmen den fairen Forward.',[field('spot','Spot (Heimat / Fremd)',.5,2,.01,.9),field('home','Heimatzins (%)',0,15,.25,2),field('foreign','Fremdzins (%)',0,15,.25,4),field('t','Jahre',1,5,1,1)],p=>result([['Forward (Heimat / Fremd)',p.spot*((1+p.home/100)/(1+p.foreign/100))**p.t]],seq(0,5,t=>p.spot*((1+p.home/100)/(1+p.foreign/100))**t),'Jahre','Forward (Heimat / Fremd)','Effektive Jahreszinsen, konstante Kurven, keine Cross-Currency-Basis oder Transaktionskosten.'));
add('forwardvalue','Wert eines bestehenden Forwards','Der feste Lieferpreis und der aktuelle Forwardpreis sind Beträge je Einheit. Die zwei Vertragsseiten haben im vereinfachten Modell entgegengesetzte Marktwerte.',[field('forward','Aktueller Forwardpreis (WE je Einheit)',50,150,1,110),field('strike','Fester Lieferpreis (WE je Einheit)',50,150,1,105),field('df','Diskontfaktor bis zum Zahlungstermin',.5,1.5,.01,.98)],p=>{
 const value=p.df*(p.forward-p.strike),long=seq(50,150,f=>p.df*(f-p.strike)),short=long.map(([f,v])=>[f,-v]);
 const out=result([['Long-Vertragswert (WE)',value],['Short-Vertragswert (WE)',value===0?0:-value]],long,'Aktueller Forwardpreis (WE je Einheit)','Heutiger Vertragswert (WE)','Genau eine Einheit, fixer Lieferpreis, gleicher Endtermin und vergleichbare Bedingungen des aktuellen Neugeschäfts. Der Diskontfaktor ist positiv und gilt für den verbleibenden Endbetrag. Die Gegenposition hebt die Restabhängigkeit vom Basiswert auf; übrig bleibt die diskontierte Lieferpreisdifferenz. Keine Bewertungsanpassung für Ausfall, Funding oder individuelle Sicherheitenkosten, keine Prämie, Transaktionskosten, Margin oder künftigen Zahlungsstörungen. Die Kurven vergleichen gleichzeitige Preisannahmen und keinen zeitlichen Kursverlauf. Die Summe der Vertragswerte ist null, aber Risiko, Liquiditätsbedarf und Ergebnis des Gesamtgeschäfts sind damit nicht automatisch null. Für Q identische Einheiten werden beide Marktwerte mit Q multipliziert. Ein positiver Marktwert ist kein bereits eingegangener Cash und keine vollständige Berechnung eines Ausfallverlusts.');
 out.series=[{name:'Long: Kauf zum festen Preis',color:'#087e82',points:long},{name:'Short: Verkauf zum festen Preis',color:'#ba6824',dash:true,points:short}];out.marker=[p.forward,value];return out;
});
models.forwardvalue.presets=[
 {label:'Long positiv, Short negativ',values:{forward:110,strike:105,df:.98}},
 {label:'Nur neuer Forwardpreis niedriger',values:{forward:95,strike:105,df:.98}},
 {label:'Beide Vertragswerte null',values:{forward:105,strike:105,df:.98}},
 {label:'Nur stärkere Abzinsung',values:{forward:110,strike:105,df:.5}},
 {label:'Positiver Faktor über eins',values:{forward:110,strike:105,df:1.05}}
];
add('abs','Verluste durch Tranchen verteilen','Die nachrangige Tranche absorbiert zunächst Poolverluste. Erst danach wird Senior belastet.',[field('pool','Poolnominal',50,200,1,100),field('junior','Junioranteil (%)',5,40,1,20),field('loss','Poolverlust (%)',0,100,1,30)],p=>{const j=p.pool*p.junior/100,L=p.pool*p.loss/100;return result([['Juniorverlust',Math.min(L,j)],['Seniorverlust',Math.max(0,L-j)]],seq(0,100,l=>Math.max(0,p.pool*l/100-j)),'Poolverlust (%)','Verlust der Seniortranche','Zwei Tranchen, feste Verlustreihenfolge; keine Zinsen, Trigger, Prepayments oder Recovery-Verzögerung.');});
add('property','Immobilienertrag kapitalisieren','Der Cap Rate verbindet nachhaltigen operativen Nettoertrag mit dem Immobilienwert.',[field('noi','Jährlicher NOI (€)',10000,500000,1000,100000),field('cap','Cap Rate (%)',1,15,.25,5)],p=>result([['Immobilienwert (€)',p.noi/(p.cap/100)]],seq(1,15,c=>p.noi/(c/100)),'Cap Rate (%)','Wert (€)','Direkte Kapitalisierung stabilisierten NOI vor Finanzierung. Cap Rate ist nicht automatisch der gesamte Diskontsatz; Wachstum und Investitionsbedarf müssen zur Marktannahme passen.'));
add('frontier','Erreichbare Risiko-Rendite-Kombinationen','Jeder Punkt steht für ein anderes Gewicht zweier Anlagen. Nur nicht dominierte Kombinationen sind effizient.',[field('muA','Erwartete Rendite A (%)',0,15,.5,8),field('muB','Erwartete Rendite B (%)',0,15,.5,4),field('rho','Korrelation',-1,1,.05,0),field('w','Gewicht A (%)',0,100,1,50)],p=>{const vol=w=>Math.sqrt(Math.max(0,w*w*400+(1-w)**2*100+400*w*(1-w)*p.rho));return result([['Erwartete Rendite (%)',p.w/100*p.muA+(1-p.w/100)*p.muB],['Volatilität (%)',vol(p.w/100)]],seq(0,1,w=>w).map(([w])=>[vol(w),w*p.muA+(1-w)*p.muB]),'Portfoliovolatilität (%)','Erwartete Rendite (%)','Volatilität A=20 %, B=10 %, keine Leerverkäufe. Gezeigt ist die gesamte erreichbare Kurve, einschließlich ineffizienter Abschnitte; keine Kapitalmarktlinie.');});
add('montecarlo','Renditepfade simulieren','Ein Modell erzeugt 200 mögliche Pfade. Eine feste Zufallsfolge macht Parametervergleiche nachvollziehbar.',[field('mu','Erwartete Jahresrendite (%)',-5,15,.5,6),field('vol','Jahresvolatilität (%)',0,40,1,20),field('n','Jahre',1,30,1,10)],p=>{let seed=1947;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return(seed+.5)/4294967296;};const log=Array(200).fill(0),points=[[0,100]],mu=p.mu/100,sigma=p.vol/100;let wealth;for(let t=1;t<=p.n;t++){for(let i=0;i<log.length;i++)log[i]+=Math.log1p(mu)-sigma*sigma/2+sigma*Math.sqrt(-2*Math.log(random()))*Math.cos(2*Math.PI*random());wealth=log.map(x=>100*Math.exp(x)).sort((a,b)=>a-b);points.push([t,(wealth[99]+wealth[100])/2]);}const q=x=>{const i=199*x,k=Math.floor(i);return wealth[k]+(wealth[Math.min(k+1,199)]-wealth[k])*(i-k);};return result([['Endwert · 10%-Quantil',q(.1)],['Endwert · Median',q(.5)],['Endwert · 90%-Quantil',q(.9)]],points,'Jahre','Median des Vermögens (Start 100)','Unabhängige normalverteilte Logrenditen, Erwartungsfaktor 1+μ, konstante Parameter. Die Kurve zeigt nur den simulierten Median; Endquantile stehen darüber. Kein Bootstrap und keine Garantie.');});
function calculate(id,params){const model=models[id];if(!model)throw Error('Unbekanntes Modell');const p={};for(const f of model.controls){const v=params[f.key];if(v===''||v===null||!Number.isFinite(Number(v))||Number(v)<f.min||Number(v)>f.max)throw Error('Bitte '+f.label+' zwischen '+f.min+' und '+f.max+' eingeben.');p[f.key]=Number(v);if(f.step===1&&!Number.isInteger(p[f.key]))throw Error(f.label+': bitte eine ganze Zahl eingeben.');}const out=model.calc(p);if(out.metrics.some(m=>!Number.isFinite(m[1]))||out.points.some(v=>v.some(n=>!Number.isFinite(n))))throw Error('Für diese Eingaben ist kein endliches Ergebnis definiert.');const marks={dcf:[p.n,0],annuity:[p.n,0],diversification:[p.w,0],capm:[p.beta,0],wacc:[p.e,0],gordon:[p.g,0],fx:[p.fx,0],forward:[p.t,0],bond:[p.y,0],credit:[p.pd,0],waterfall:[p.value,0],option:[p.end,0],bsm:[p.s,0],dupont:[p.lev,0],rebalance:[p.a,0],risk:[p.confidence,0],alm:[p.shock,0],attribution:[p.w,3],execution:[p.end,0],npv:[p.r,0],fxforward:[p.t,0],forwardvalue:[p.forward,0],abs:[p.loss,1],property:[p.cap,0]};if(marks[id])out.marker=[marks[id][0],out.metrics[marks[id][1]][1]];if(id==='frontier')out.marker=[out.metrics[1][1],out.metrics[0][1]];return out;}
// Unlevered operating forecast. Initial surplus cash is distributed at t=0.
// End-year cash is zero: positive free cash is paid, deficits require owners' contributions.
function forecastValue(p){
 const growth=p.growth/100,margin=p.margin/100,wc=p.wc/100,k=p.discount/100,g=p.stableGrowth/100,r=p.roic/100;
 if(g>=k)throw Error('Das langfristige Wachstum muss unter dem passenden Diskontsatz liegen.');
 if(g>=r)throw Error('Das langfristige Wachstum muss in diesem Ausschüttungsmodell unter der Rendite neuer Investitionen liegen.');
 let sales=p.sales,ppe=.5*sales,nwc=.2*sales,book=ppe+nwc,pv=0;
 const years=[];
 for(let year=1;year<=3;year++){
  const oldSales=sales,oldPPE=ppe,oldWC=nwc,oldBook=book;
  sales=oldSales*(1+growth);ppe=.5*sales;nwc=wc*sales;
  const depreciation=.12*oldPPE,capex=ppe-oldPPE+depreciation,ebit=margin*sales,nopat=.75*ebit,investment=nwc-oldWC,cfo=nopat+depreciation-investment,fcff=cfo-capex;
  const dividend=Math.max(0,fcff),contribution=Math.max(0,-fcff);
  book=oldBook+nopat-dividend+contribution;pv+=fcff/(1+k)**year;
  years.push({year,sales,ppe,nwc,depreciation,capex,ebit,nopat,investment,cfo,fcff,dividend,contribution,book,ar:.5*nwc,inventory:.8*nwc,ap:.3*nwc});
 }
 // Marginal return on new stable growth capital, not an imposed ROIC on all old capital.
 const stableSales=sales*(1+g),stableNOPAT=stableSales*p.stableMargin/100*.75,stableInvestment=stableNOPAT*g/r,stableFCFF=stableNOPAT-stableInvestment,terminal=stableFCFF/(k-g),terminalPV=terminal/(1+k)**3;
 const operating=pv+terminalPV,common=operating+30,share=common/10;
 return {years,stableSales,stableNOPAT,stableInvestment,stableFCFF,terminal,terminalPV,operating,common,share};
}
add('forecastvalue','Vom Abschlussmodell zum Aktienwert','Drei Prognosejahre verbinden Umsatz, Ergebnis, Kapitalbindung und freie Zahlungen. Danach beginnt eine gesondert normalisierte stabile Phase. Vergleiche besonders Wachstum, Marge und Investitionsbedarf.',[
 field('sales','Ausgangsumsatz (Mio. €)',300,1500,50,500),
 field('growth','Umsatzwachstum Jahre 1–3 (%)',-10,15,.5,6),
 field('margin','EBIT-Marge Jahre 1–3 (%)',8,25,.5,18),
 field('stableMargin','EBIT-Marge stabile Phase (%)',10,20,.5,14),
 field('wc','Operatives Working Capital / Umsatz (%)',10,35,1,20),
 field('roic','Rendite neuer stabiler Investitionen (%)',8,25,.5,12),
 field('discount','Diskontsatz (%)',4,15,.5,9),
 field('stableGrowth','Wachstum stabile Phase (%)',0,4,.25,3)
],p=>{
 const v=forecastValue(p),upper=Math.max(p.stableGrowth,Math.min(4,p.discount-.5));
 const out=result([['Operativer Wert (Mio. €)',v.operating],['Stammkapitalwert vor Sonderzahlung (Mio. €)',v.common],['Wert je Aktie vor Sonderzahlung (€)',v.share],['Freier Cashflow Jahr 1 (Mio. €)',v.years[0].fcff]],seq(0,upper,g=>forecastValue({...p,stableGrowth:g}).share),'Stabiles Wachstum (%)','Wert je Aktie (€)','Unverschuldetes Lehrmodell; zehn Millionen gleiche Stammaktien, Steuersatz 25 %. Überschüssige liquide Mittel von 30 Mio. € werden heute ausgeschüttet (3 € je Aktie). Danach Cash am Jahresende null. In der Detailphase: anfänglich Anlagenbuchwert 50 % und operatives Working Capital 20 % des Ausgangsumsatzes; Endanlagen 50 % des jeweiligen Umsatzes, Abschreibung 12 % des Anfangsanlagenbuchwerts, Investitionen am Jahresende. Die gewählte Working-Capital-Quote gilt ab Jahr 1. Positive freie Zahlungen werden ausgeschüttet; negative benötigen proportionale Beiträge derselben Eigentümer ohne neue Aktien. In der stabilen Phase gilt die gewählte Rendite für neue Wachstumsinvestitionen. Die Kurve verändert nur stabiles Wachstum und den dazu passenden Kapitalbedarf. Jahresbilanzen belegen weder unterjährige Zahlungsfähigkeit noch verfügbare Finanzierung.');
 out.marker=[p.stableGrowth,v.share];
 out.projection={caption:'Detailphase: alle Beträge in Mio. €, Zahlungen am Jahresende. Buchkapital nach heutiger Sonderzahlung startet bei 70 % des Ausgangsumsatzes.',headers:['Jahr','Umsatz','EBIT','NOPAT = NI','Abschreibung','Capex','Δ Working Capital','FCFF = FCFE','Dividende','Eigentümerbeitrag','Endbuchkapital'],rows:v.years.map(y=>[y.year,y.sales,y.ebit,y.nopat,y.depreciation,y.capex,y.investment,y.fcff,y.dividend,y.contribution,y.book])};
 out.stable={caption:'Erste normalisierte stabile Periode (Jahr 4); Endwert und sein Barwert separat. Alle Beträge in Mio. €.',headers:['Umsatz Jahr 4','NOPAT Jahr 4','Nettoinvestition Jahr 4','FCFF Jahr 4','Endwert am Ende Jahr 3','Barwert des Endwerts'],rows:[[v.stableSales,v.stableNOPAT,v.stableInvestment,v.stableFCFF,v.terminal,v.terminalPV]]};
 return out;
});
function companyPlan(p){
 const sales=p.price*p.quantity,cost=p.variable*p.quantity,da=15,interest=3;
 const ebit=sales-cost-p.fixed-da,taxOperating=Math.max(0,ebit)*.25,taxEquity=Math.max(0,ebit-interest)*.25;
 const nopat=ebit-taxOperating,netIncome=ebit-interest-taxEquity,working=p.ar+p.inventory-p.payables,changeWC=working-30;
 const customers=sales-(p.ar-20),purchases=cost+(p.inventory-30),suppliers=purchases-(p.payables-20);
 if(customers<-.000000001)throw Error('Die Endforderungen übersteigen Anfangsforderungen plus Kreditumsatz. Ohne zusätzliche Forderungsbewegung ist dieser Zahlungsplan nicht möglich.');
 if(purchases<-.000000001)throw Error('Der Endvorrat erfordert negative Einkäufe. Ohne gesonderte Rückgaben oder andere Bestandsbewegungen ist dieser Plan nicht möglich.');
 if(suppliers<-.000000001)throw Error('Die End-Lieferantenverbindlichkeiten übersteigen Anfangsverbindlichkeiten plus Krediteinkauf. Ohne weitere Finanzierung ist dieser Zahlungsplan nicht möglich.');
 const cfo=customers-suppliers-p.fixed-interest-taxEquity,fcff=nopat+da-p.capex-changeWC,fcfe=cfo-p.capex;
 const cashBefore=30+fcfe-p.dividend,borrowing=Math.max(0,p.minimum-cashBefore),cash=cashBefore+borrowing;
 const debt=60+borrowing,book=100+netIncome-p.dividend,ppe=100+p.capex-da,capital=ppe+working;
 const assets=cash+p.ar+p.inventory+ppe,liabilities=p.payables+debt+book;
 return {sales,cost,da,interest,ebit,taxOperating,taxEquity,nopat,netIncome,working,changeWC,customers,purchases,suppliers,cfo,fcff,fcfe,cashBefore,borrowing,cash,debt,book,ppe,capital,assets,liabilities};
}
add('companydrivers','Kernwerk: Preis, Gewinn, Kapital und Finanzierung','Starte mit dem durchgerechneten Preisfall. Ändere einzelne Annahmen kontrolliert oder stimme mehrere Eingaben zu einem Szenario ab. Die Tabellen verbinden Ergebnis, tatsächliche Zahlungen und die Jahresendbilanz.',[
 field('price','Realisierter Preis (Euro je Einheit)',20,200,1,105),
 field('quantity','Absatz (Millionen Einheiten)',.5,3,.1,1.9),
 field('variable','Variable Stückkosten (Euro)',20,100,1,60),
 field('fixed','Fixe zahlungswirksame Kosten (Mio. Euro)',0,100,1,45),
 field('capex','Capex (Mio. Euro)',0,100,1,18),
 field('ar','Endforderungen (Mio. Euro)',0,100,.05,19.95),
 field('inventory','Endvorrat (Mio. Euro)',0,150,.5,28.5),
 field('payables','End-Lieferantenverbindlichkeiten (Mio. Euro)',0,100,.5,19),
 field('dividend','Dividende (Mio. Euro)',0,50,1,8),
 field('minimum','Benötigtes Jahresend-Cash (Mio. Euro)',0,100,1,10)
],p=>{
 const v=companyPlan(p),lower=Math.max(20,(p.ar-20)/p.quantity),out=result([['Umsatz (Mio. Euro)',v.sales],['EBIT (Mio. Euro)',v.ebit],['FCFF vor Finanzierung (Mio. Euro)',v.fcff],['Benötigter neuer Jahresendkredit (Mio. Euro)',v.borrowing]],seq(lower,200,price=>companyPlan({...p,price}).fcff),'Preis (Euro je Einheit)','FCFF (Mio. Euro)','Eigene vollständige Anfangsbilanz in Mio. Euro: Cash 30, Forderungen 20, Vorräte 30, Nettoanlagen 100; Lieferantenverbindlichkeiten 20, verzinsliche Schulden 60 und Buch-Eigenkapital 100. Abschreibung 15 und alter Zins 3 bleiben fest. Modellsteuer 25 %; negative steuerliche Ergebnisse erzeugen hier keine sofortige Steuererstattung. Keine übrigen Bestands- oder Ergebnisbewegungen. Alle Verkäufe und Teilekäufe laufen über Forderungs- beziehungsweise Lieferantenkonten; fixe Cashkosten, Zins, Capex, Dividende und Steuer werden bezahlt. Forderungen und Lieferantenverbindlichkeiten dürfen die aus Anfangsbestand und neuen Kreditgeschäften verfügbaren Ansprüche nicht übersteigen; negative Einkäufe werden abgewiesen. Die Kurve beginnt gegebenenfalls erst bei einem mit dem Forderungsendbestand vereinbaren Preis. Der neue Kredit ist nur ein berechneter Jahresendbedarf bei angenommener Auszahlung, keine Finanzierungszusage; er trägt im Jahresplan noch keinen Zins. Unterjährige Liquidität und spätere Zinsen fehlen. Endforderungen, Vorrat und Lieferantenbestand sind unabhängige Eingaben, keine automatisch an Absatz angepassten Prognosen. Die Kurve verändert nur den Preis bei konstant gehaltener Menge und übrigen Eingaben; sie enthält keine geschätzte Nachfrageelastizität. Negative freie Zahlungen und negatives Buchkapital werden sichtbar ausgewiesen.');
 out.marker=[p.price,v.fcff];
 out.projection={caption:'Jahresüberleitung in Millionen Euro: Gewinn, operative Bestandsänderung, Anlagenzahlung und zusätzlicher Jahresendkredit werden getrennt erfasst.',headers:['Umsatz','EBIT','NOPAT','Nettogewinn','Δ operatives WC','Capex','FCFF','CFO nach Zins','FCFE vor neuem Kredit','Neuer Kredit'],rows:[[v.sales,v.ebit,v.nopat,v.netIncome,v.changeWC,p.capex,v.fcff,v.cfo,v.fcfe,v.borrowing]]};
 out.stable={caption:'Direkte Zahlungen und Jahresendbilanz in Millionen Euro. Aktiva und Passiva müssen übereinstimmen; diese Konsistenz beweist weder die Absatzannahme noch verfügbare Finanzierung.',headers:['Kundeneinzahlung','Lieferantenzahlung','Cash Ende','Nettoanlagen Ende','Schulden Ende','Buchkapital Ende','Operatives Kapital Ende','Aktiva','Passiva'],rows:[[v.customers,v.suppliers,v.cash,v.ppe,v.debt,v.book,v.capital,v.assets,v.liabilities]]};
 return out;
});
models.companydrivers.presets=[
 {label:'Preisfall laden',values:Object.fromEntries(models.companydrivers.controls.map(f=>[f.key,f.value]))},
 {label:'Wachstumsfall laden',values:{price:100,quantity:2.4,variable:60,fixed:60,capex:40,ar:35,inventory:50,payables:25,dividend:0,minimum:10}}
];
function covenantPlan(p){
 if(![p.ebitda,p.borrow,p.use,p.dividend,p.rate].every(Number.isFinite)||p.ebitda<=0||[p.borrow,p.use,p.dividend,p.rate].some(v=>v<0))throw Error('Bitte endliche nicht negative Transaktionswerte und ein positives Vertrags-EBITDA verwenden.');
 const cash=25+p.borrow-p.use-p.dividend;
 if(cash<0)throw Error('Die geplanten Zahlungen übersteigen das verfügbare freie Cash einschließlich neuem Kredit.');
 const debt=220+p.borrow,net=Math.max(0,debt-Math.min(cash,50)),interest=12+p.borrow*p.rate/100;
 const leverage=net/p.ebitda,headroom=3*p.ebitda-net,coverage=p.ebitda/interest;
 const rules=[
  ['Netto-Leverage','höchstens 3 ×',leverage,leverage<=3+1e-10],
  ['Pro-forma Zinsdeckung','mindestens 4 ×',coverage,coverage>=4-1e-10],
  ['Freies Cash','mindestens 10 Mio.',cash,cash>=10-1e-10],
  ['Ausschüttungsbasket','höchstens 20 Mio.',p.dividend,p.dividend<=20+1e-10]
 ];
 const maxDividend=Math.max(0,Math.min(100,25+p.borrow-p.use));
 const points=seq(0,maxDividend,d=>3*p.ebitda-Math.max(0,debt-Math.min(25+p.borrow-p.use-d,50)));
 const out=result([['Bruttoschuld (Mio.)',debt],['Freies Cash (Mio.)',cash],['Netto-Leverage (×)',leverage],['Leverage-Spielraum (Mio.)',headroom],['Pro-forma Zinsdeckung (×)',coverage]],points,'Geplante Ausschüttung (Mio.)','Leverage-Spielraum (Mio.)','Eigener Auron-Modellvertrag: Anfangsschuld 220, freies Cash 25 und jährliche Zinsbasis 12 Mio. Neue Mittel werden für die eingegebene Zahlung verwendet oder bleiben frei. Nur höchstens 50 Mio. Cash sind für die Nettoquote anrechenbar. EBITDA und annualisierte Zinsbasis sind ausdrücklich Pro-forma-Vertragsgrößen, keine zugesagten künftigen Zahlungen. Spielraum ist weder eine Kreditzusage noch automatisch ein zusätzlich auszahlbarer Bruttokreditbetrag. Ein negativer Spielraum zeigt eine rechnerische Überschreitung; Vertragsfristen und Rechtsfolgen werden gesondert geprüft. Die Kurve hält neue Schulden, Verwendung, EBITDA und Zins fest.');
 out.marker=[p.dividend,headroom];out.covenants=rules;out.funding={opening:25,borrow:p.borrow,use:p.use,dividend:p.dividend,closing:cash};
 out.projection={caption:'Auron-Modellvertrag: vier getrennte Prüfungen nach der Transaktion',headers:['Prüfung','Eigene Vertragsgrenze','Rechenwert','Ergebnis'],rows:rules.map(([label,limit,value,pass])=>[label,limit,value,pass?'Erfüllt':'Rechnerisch verletzt'])};
 out.stable={caption:'Mittelherkunft und Verwendung: freie Beträge in Millionen',headers:['Position','Betrag'],rows:[['Anfängliches freies Cash',25],['Neuer Kredit',p.borrow],['Operative / Investitionszahlung',p.use],['Ausschüttung',p.dividend],['Verbleibendes freies Cash',cash]]};
 return out;
}
add('bondcovenants','Vertragsspielraum, Kredit und Mittelverwendung','Der Auron-Fall verbindet neue Finanzierung mit freiem Cash, Netto-Leverage, Pro-forma Zinsdeckung und Ausschüttungsgrenzen. Alle Grenzen sind eigene hypothetische Vertragsbedingungen.',[
 field('ebitda','Vertrags-EBITDA (Mio.)',20,140,1,80),
 field('borrow','Neuer Kredit (Mio.)',0,150,1,30),
 field('use','Mittelverwendung (Mio.)',0,150,1,30),
 field('dividend','Ausschüttung (Mio.)',0,100,1,10),
 field('rate','Neuer Kreditzins (% p. a.)',0,15,.25,6)
],covenantPlan);
models.bondcovenants.presets=[
 {label:'Projektzahlung laden',values:{ebitda:80,borrow:30,use:30,dividend:10,rate:6}},
 {label:'Cash behalten',values:{ebitda:80,borrow:30,use:0,dividend:10,rate:6}},
 {label:'Ertragsschock laden',values:{ebitda:50,borrow:30,use:30,dividend:10,rate:6}}
];
function repaymentSchedule({face,rate,n,shape,balloon=70}){
 if(![face,rate,n,shape,balloon].every(Number.isFinite)||face<=0||rate<0||!Number.isInteger(n)||n<1||!Number.isInteger(shape)||shape<0||shape>3||balloon<0||balloon>100)throw Error('Bitte positives Nominal, nicht negativen Zins, ganze positive Jahre und einen gültigen Tilgungsplan verwenden.');
 const r=rate/100,regular=r===0?face/n:face*r/(-Math.expm1(-n*Math.log1p(r)));
 let balance=face;const rows=[];
 for(let k=1;k<=n;k++){
  const opening=balance,interest=opening*r;
  let principal=shape===0?0:shape===1?face/n:shape===2?regular-interest:n===1?face:face*(1-balloon/100)/(n-1);
  if(k===n)principal=opening;
  principal=Math.min(opening,Math.max(0,principal));balance=Math.max(0,opening-principal);
  rows.push({year:k,opening,interest,principal,payment:interest+principal,closing:balance});
 }
 return {rows,interest:rows.reduce((s,r)=>s+r.interest,0),wal:rows.reduce((s,r)=>s+r.year*r.principal/face,0)};
}
const repaymentNames=['Endfällig','Gleiche Tilgung','Annuität','Ballon'];
add('repayment','Tilgungspläne: Zins, Zahlung und verbleibende Schuld','Vergleiche vier Pläne für dieselbe Finanzierung. Die Planart lässt sich auswählen; die Vergleichstabelle rechnet alle vier bei denselben übrigen Eingaben. Alle Zahlungen erfolgen jährlich am Periodenende.',[
 {...field('shape','Tilgungsplan',0,3,1,2),choices:repaymentNames.map((label,value)=>({value,label}))},
 field('face','Anfängliches Nominal',100,10000,1,1000),
 field('rate','Vertragszins (% p. a.)',0,20,.25,6),
 field('n','Planjahre',1,30,1,4),
 field('balloon','Ballon: Nominal am Endtermin (%)',0,100,1,70),
 field('discount','Diskontsatz (% p. a.)',0,20,.25,6)
],p=>{
 const selected=repaymentSchedule(p),pv=s=>s.rows.reduce((v,row)=>v+row.payment/(1+p.discount/100)**row.year,0);
 const points=[[0,p.face]];for(const row of selected.rows)points.push([row.year,row.opening],[row.year,row.closing]);
 const out=result([['Erste Zahlung',selected.rows[0].payment],['Letzte Zahlung',selected.rows.at(-1).payment],['Zinssumme',selected.interest],['Gewichtete Tilgungszeit (Jahre)',selected.wal],['Barwert zum Diskontsatz',pv(selected)]],points,'Jahre / Zahlungstermin','Ausstehendes Nominal','Ausgewählt: '+repaymentNames[p.shape]+'. Fester Vertragszins auf die jeweilige Anfangsschuld, jährliche Zahlung, keine Gebühren, Steuern, Optionen, Ausfälle oder Wiederanlage. Die Kurve springt am Zahlungstermin; Zins ist nicht zusätzlich getilgtes Nominal. WAL gewichtet nur Tilgung und ist keine Duration. Bei Diskontsatz gleich Vertragszins beträgt der Barwert in allen vier Plänen das anfängliche Nominal. Die Balloneingabe wirkt nur auf den Ballonplan; vor dem Endtermin wird der übrige Nominalanteil gleichmäßig getilgt. Bei einem Jahr fällt das gesamte Nominal am einzigen Termin an. Bei mehr als einem Jahr bedeutet ein Ballon von null vollständige Rückzahlung vor dem letzten Termin.');
 out.schedule=selected;
 out.projection={caption:repaymentNames[p.shape]+': vollständiger Zahlungs- und Restschuldplan',headers:['Jahr','Anfangsschuld','Zins','Tilgung','Zahlung','Restschuld'],rows:selected.rows.map(r=>[r.year,r.opening,r.interest,r.principal,r.payment,r.closing])};
 out.stable={caption:'Gleiche Ausgangsbedingungen: vier Tilgungspläne vergleichen',headers:['Plan','Erste Zahlung','Letzte Zahlung','Zinssumme','WAL (Jahre)','Barwert'],rows:repaymentNames.map((name,shape)=>{const s=repaymentSchedule({...p,shape});return [name,s.rows[0].payment,s.rows.at(-1).payment,s.interest,s.wal,pv(s)];})};
 return out;
});
models.repayment.presets=[
 {label:'Annuität laden',values:{shape:2,face:1000,rate:6,n:4,balloon:70,discount:6}},
 {label:'Gleiche Tilgung laden',values:{shape:1,face:1000,rate:6,n:4,balloon:70,discount:6}},
 {label:'Ballon laden',values:{shape:3,face:1000,rate:6,n:4,balloon:70,discount:6}},
 {label:'Zinsfrei vergleichen',values:{shape:2,face:1000,rate:0,n:4,balloon:70,discount:0}}
];
function bondIndexPlan(p){
 if(![p.nominal,p.open,p.close,p.coupon].every(Number.isFinite)||p.nominal<=0||p.open<=0||p.close<0||p.coupon<0)throw Error('Bitte positives Nominal und positiven Anfangsvollpreis sowie nicht negative Endpreise und Cashkupons verwenden.');
 const startA=p.nominal*p.open/100,startB=100,endA=p.nominal*p.close/100,endB=100,cashA=p.nominal*p.coupon/100,cashB=1,start=startA+startB;
 const weight=startA/start,returnA=(endA+cashA-startA)/startA*100,priceReturn=(endA+endB-start)/start*100,cashReturn=(cashA+cashB)/start*100,total=priceReturn+cashReturn;
 const atNominal=n=>{const a=n*p.open/100;return ((n*(p.close+p.coupon)/100+101)/(a+100)-1)*100;};
 const out=result([['Anfangsgewicht A (%)',weight*100],['Gesamtrendite A (%)',returnA],['Vollpreisbeitrag (%-Punkte)',priceReturn],['Cashkuponbeitrag (%-Punkte)',cashReturn],['Index-Gesamtrendite (%)',total],['Indexendstand (Start 100)',100+total]],seq(50,500,atNominal,45),'Für A anfangs erfasstes Nominal (Mio.)','Index-Gesamtrendite (%)','Eigener Zweianleihenindex in einer gemeinsamen Währung, eine festgelegte Beobachtungsperiode, keine Annualisierung. B bleibt fest: Nominal 100 Mio., Anfangs- und Endvollpreis je 100 Punkte und Cashkupon ein Punkt. Vollpreise enthalten Stückzinsen; Kursnotierungen und Cashkupons gelten je 100 Nominal. Während der Periode bleiben die Bestände unverändert. Cashkupons werden am Periodenende bezahlt; keine Tilgung, Kosten, Steuern oder Wiederanlage. Der Cashkuponbeitrag allein ist keine um Stückzinsen bereinigte reine Perioden-Zinsrendite. Die Kurve vergleicht unterschiedliche Anfangszusammensetzungen; zusätzliches Nominal erzeugt keinen Gewinn mitten in einer laufenden Periode. Gezeichnete Preise und Cashzahlungen sind Szenarien, keine Renditeprognosen oder Garantie.');
 out.marker=[p.nominal,total];out.index={startA,startB,endA,endB,cashA,cashB,start,weight,returnA,priceReturn,cashReturn,total};
 out.projection={caption:'Zwei Anleihen: Notierung, Marktwert und Cashzahlungen abstimmen',headers:['Größe','Anleihe A','Anleihe B'],rows:[['Erfasstes Nominal (Mio.)',p.nominal,100],['Anfangsvollpreis (je 100)',p.open,100],['Anfangsmarktwert (Mio.)',startA,startB],['Anfangsgewicht (%)',weight*100,(1-weight)*100],['Endvollpreis (je 100)',p.close,100],['Cashkupon (je 100)',p.coupon,1],['Endmarktwert (Mio.)',endA,endB],['Cashkuponzahlung (Mio.)',cashA,cashB],['Gesamtrendite (%)',returnA,1]]};
 out.stable={caption:'Die Indexrechnung verwendet Anfangsgewichte und vollständige Cashflows',headers:['Abstimmung','Wert'],rows:[['Anfangsmarktwert (Mio.)',start],['Endmarktwert (Mio.)',endA+endB],['Cashkuponzahlungen (Mio.)',cashA+cashB],['Vollpreisbeitrag (%-Punkte)',priceReturn],['Cashkuponbeitrag (%-Punkte)',cashReturn],['Gesamtrendite (%)',total],['Endstand bei Indexstart 100',100+total]]};
 return out;
}
add('bondindex','Anleiheindex: Gewichte und Gesamtrendite','Verändere jeweils nur eine Annahme für Anleihe A. B bleibt als Vergleich unverändert. Anfangsmarktwerte bestimmen die Gewichte; zum Periodenergebnis gehören sowohl Preisänderung als auch tatsächliche Cashzahlungen.',[
 field('nominal','Anfangsnominal A (Mio.)',50,500,1,100),
 field('open','Anfangsvollpreis A (je 100)',50,150,.25,100),
 field('close','Endvollpreis A (je 100)',0,160,.25,99),
 field('coupon','Cashkupon A (je 100)',0,10,.25,3)
],bondIndexPlan);
models.bondindex.presets=[
 {label:'Grundfall laden',values:{nominal:100,open:100,close:99,coupon:3}},
 {label:'Mehr Gewicht A',values:{nominal:300,open:100,close:99,coupon:3}},
 {label:'Kursrückgang A',values:{nominal:100,open:100,close:90,coupon:3}},
 {label:'Gleiche Einzelrenditen',values:{nominal:100,open:100,close:98,coupon:3}}
];
function repoFundingPlan(p){
 if(![p.size,p.haircut,p.rate,p.days,p.shock,p.marginhaircut].every(Number.isFinite)||p.size<=0||p.haircut<0||p.haircut>=100||p.marginhaircut<0||p.marginhaircut>=100||p.rate<0||p.days<=0||p.shock<=-100)throw Error('Bitte positiven Sicherheitenwert und positive Tage, gültige Haircuts unter 100 % sowie nicht negative Zinsen verwenden.');
 const cash=p.size*(1-p.haircut/100),interest=cash*p.rate/100*p.days/360,repurchase=cash+interest,current=p.size*(1+p.shock/100),required=cash/(1-p.marginhaircut/100),margin=required-current,uncovered=Math.max(cash-current,0),initialMargin=p.size/cash*100;
 const out=result([['Anfangscash (Mio.)',cash],['Repo-Zins (Mio.)',interest],['Endrückkaufpreis (Mio.)',repurchase],['Sicherheiten-Lieferbedarf (Mio.)',margin],['Ungedecktes Anfangscash (Mio.)',uncovered],['Initial-Margin-Verhältnis (%)',initialMargin]],seq(-50,20,s=>required-p.size*(1+s/100),70),'Sicherheitenpreisänderung (%)','Signierter Sicherheitenbedarf (Mio.)','Eigener einzelner Festzins-Repo in einer Währung, einfacher ACT/360-Zins; keine Sicherheitenkupons, Gebühren oder Ausfälle. Initialer Haircut bestimmt das ursprüngliche Cash. Der aktuelle Haircut ist eine gesonderte vertraglich erlaubte Marginanforderung. Für die Zwischenmargin bleibt die Cash-Exposition ohne Zinsabgrenzung auf dem ursprünglichen Kreditbetrag. Zusatzsicherheiten werden als Wertpapiere geliefert; negativer Bedarf bedeutet vertraglich erlaubte Freigabe, keine Kreditrückzahlung. Ungedecktes Anfangscash ist eine Momentaufnahme vor Transfer, Kosten und Close-out, kein berechneter Ausfallverlust. Endrückkaufpreis enthält dagegen den gesamten vereinbarten Repo-Zins. Die Kurve vergleicht gleichzeitige Preisszenarien, keinen zeitlichen Kursverlauf.');
 out.marker=[p.shock,margin];out.repo={cash,interest,repurchase,current,required,margin,uncovered,initialMargin};
 out.projection={caption:'Cash und Sicherheiten nach Zeit und Bezugsgröße trennen',headers:['Größe','Wert (Mio.)'],rows:[['Anfänglicher Sicherheitenwert',p.size],['Anfänglich erhaltenes Cash',cash],['Nicht durch Repo finanzierter Anfangswert',p.size-cash],['Aktueller Wert des ursprünglichen Bestands',current],['Exposition der Zwischenmargin ohne Zins',cash],['Aktuell geforderter Gesamtwert',required],['Signierter Sicherheiten-Lieferbedarf',margin],['Ungedecktes Anfangscash vor Transfer',uncovered],['Repo-Zins der gesamten Laufzeit',interest],['Endrückkaufpreis',repurchase]]};
 out.stable={caption:'Cashpfeile bei ordnungsgemäßem Beginn und Ende; Sicherheitenlieferung ist kein Cash',headers:['Cashtermin','Cashnehmer (Mio.)','Cashgeber (Mio.)'],rows:[['Anfang: Cash gegen Wertpapiere',cash,-cash],['Ende: Rückkauf gegen Rücklieferung',-repurchase,repurchase],['Saldo der Cashzahlungen',-interest,interest]]};
 return out;
}
add('repofunding','Repo: Finanzierung, Zins und Sicherheitenbedarf','Verändere jeweils eine Annahme. Der Anfangs-Haircut bestimmt die Kreditgröße; Preisbewegung und aktuelle Haircutanforderung bestimmen später den Sicherheitenbedarf bei festgehaltenem Anfangskredit.',[
 field('size','Anfangswert Sicherheiten (Mio.)',10,500,1,100),
 field('haircut','Anfangs-Haircut (%)',0,40,.5,5),
 field('rate','Repo-Satz (% p.a., ACT/360)',0,15,.25,4),
 field('days','Laufzeit (Tage)',1,360,1,30),
 field('shock','Sicherheitenpreisänderung (%)',-50,20,1,-2),
 field('marginhaircut','Aktuell verlangter Haircut (%)',0,50,.5,5)
],repoFundingPlan);
models.repofunding.presets=[
 {label:'Grundfall laden',values:{size:100,haircut:5,rate:4,days:30,shock:-2,marginhaircut:5}},
 {label:'Stärkerer Kursrückgang',values:{size:100,haircut:5,rate:4,days:30,shock:-15,marginhaircut:5}},
 {label:'Nur Haircutanforderung steigt',values:{size:100,haircut:5,rate:4,days:30,shock:-2,marginhaircut:10}},
 {label:'Sicherheitenüberschuss',values:{size:100,haircut:5,rate:4,days:30,shock:5,marginhaircut:5}}
];
function yieldSpreadPlan(p){
 if(![p.coupon,p.price,p.z1,p.z2,p.z3].every(Number.isFinite)||p.coupon<0||p.price<=0||Math.min(p.z1,p.z2,p.z3)<=-100)throw Error('Bitte positiven Vollpreis, nicht negativen Kupon und zulässige Spotzinsen verwenden.');
 const spots=[p.z1,p.z2,p.z3].map(z=>z/100),cashflows=[p.coupon,p.coupon,p.coupon+100];
 const curvePrice=s=>cashflows.reduce((sum,cf,k)=>sum+cf/(1+spots[k]+s)**(k+1),0);
 const annualPrice=y=>cashflows.reduce((sum,cf,k)=>sum+cf/(1+y)**(k+1),0);
 const root=(fn,target,lo,hi)=>{if(fn(lo)<target||fn(hi)>target)throw Error('Für diese Werte ist kein zulässiges Suchintervall vorhanden.');for(let k=0;k<90;k++){const mid=(lo+hi)/2;if(fn(mid)>target)lo=mid;else hi=mid;}return(lo+hi)/2;};
 const floor=-.99-Math.min(...spots),s=root(curvePrice,p.price,floor,1),reference=curvePrice(0),ytm=root(annualPrice,p.price,-.99,1),referenceYtm=root(annualPrice,reference,-.99,1),nominalSpread=(ytm-referenceYtm)*10000;
 const lo=Math.max(floor+.000001,s-.01),hi=s+.01;
 const out=result([['Z-Spread (bp)',s*10000],['Bond-YTM jährlich (%)',ytm*100],['Vergleichs-IRR jährlich (%)',referenceYtm*100],['Nominaler IRR-Abstand (bp)',nominalSpread],['Preis ohne Z-Aufschlag',reference],['Preisabstand zum Referenzwert',p.price-reference]],seq(lo*10000,hi*10000,bp=>curvePrice(bp/10000),120),'Konstanter Z-Spread (Basispunkte)','Vollpreis je hundert Nominal','Eigener dreijähriger Jahreskupon-Bond mit hundert Endtilgung; Bewertung unmittelbar nach Kuponzahlung. Die drei Spots sind effektive Jahresraten. Derselbe Spread wird in Dezimalform zu jedem Spot addiert. Feste Zahlungen ohne Optionen, Ausfall, Steuern oder Kosten; kein echter Kalender. Die Vergleichs-IRR entsteht aus demselben Zahlungsplan zum Preis der Referenzkurve und ist keine beobachtete Staatsquote. Der nominale IRR-Abstand ist nicht allgemein gleich Z. Die Kurve zeigt gleichzeitige Spreadannahmen um den passenden Wert, keinen erwarteten Zeitverlauf. OAS und Callausübung werden nicht berechnet.');
 out.marker=[s*10000,p.price];
 const plotted=out.points.map(point=>point[1]),low=Math.min(...plotted),high=Math.max(...plotted),pad=Math.max((high-low)*.1,.01);
 out.yRange=[low-pad,high+pad];
 out.note+=' Die Preisskala umfasst den gezeigten Szenariobereich.';
 out.spread={zSpread:s,ytm,referenceYtm,nominalSpread,reference,price:p.price,cashflows,spots};
 out.projection={caption:'Jede Zahlung mit ihrem passenden Spot plus konstantem Z-Aufschlag diskontieren',headers:['Jahr','Kupon','Tilgung','Gesamtzahlung','Spot (%)','Spot plus Z (%)','Diskontfaktor','Barwert'],rows:cashflows.map((cf,k)=>{const discount=(1+spots[k]+s)**-(k+1);return[k+1,p.coupon,k===2?100:0,cf,spots[k]*100,(spots[k]+s)*100,discount,cf*discount];})};
 out.stable={caption:'Preis, Kurvenaufschlag und einzelne Rechenrenditen abstimmen',headers:['Größe','Wert'],rows:[['Voller Kaufpreis',p.price],['Summe der Kurvenbarwerte',curvePrice(s)],['Einzel-YTM-Barwert zum Kaufpreis',annualPrice(ytm)],['Preis der Referenzkurve ohne Z',reference],['Einzel-YTM-Barwert der Referenz',annualPrice(referenceYtm)],['Z-Spread (bp)',s*10000],['Nominaler IRR-Abstand (bp)',nominalSpread]]};
 return out;
}
add('yieldspread','Spotkurve, Z-Spread und Rechenrenditen','Dreijähriger Jahreskupon-Bond mit hundert Endnominal, direkt nach einer Kuponzahlung bewertet. Verändere jeweils nur einen Wert. Der Rechner gleicht denselben festen Zahlungsplan mit einer gesamten Spotkurve ab und vergleicht anschließend die beiden daraus entstehenden einzelnen YTMs.',[
 field('coupon','Jahreskupon je hundert Nominal',0,15,.25,5),
 field('price','Voller Kaufpreis je hundert',60,140,.000001,96.979267),
 field('z1','Einjähriger Spot (% effektiv)',-2,15,.25,3),
 field('z2','Zweijähriger Spot (% effektiv)',-2,15,.25,4),
 field('z3','Dreijähriger Spot (% effektiv)',-2,15,.25,5)
],yieldSpreadPlan);
models.yieldspread.presets=[
 {label:'Steile Referenzkurve',values:{coupon:5,price:96.979267,z1:3,z2:4,z3:5}},
 {label:'Flache Referenzkurve',values:{coupon:5,price:100,z1:4,z2:4,z3:4}},
 {label:'Nur Endzahlung',values:{coupon:0,price:Number((100/1.062**3).toFixed(6)),z1:3,z2:4,z3:5}},
 {label:'Höherer Kaufpreis',values:{coupon:5,price:101,z1:3,z2:4,z3:5}}
];
function floaterPlan(p){
 const {reference,qm,price:full,years,frequency:m}=p;
 if(![reference,qm,full,years,m].every(Number.isFinite)||full<=0||!Number.isInteger(years)||years<1||![1,2,4].includes(m)||reference/100+qm/10000<0)throw Error('Bitte positiven Vollpreis, ganze Jahre und gültige Frequenz verwenden. Dieses Modell ohne Floor verlangt einen nicht negativen Gesamtkupon.');
 const R=reference/100,q=qm/10000,n=years*m,C=100*(R+q)/m;
 const value=i=>Array.from({length:n},(_,k)=>(C+(k===n-1?100:0))/(1+i)**(k+1)).reduce((a,b)=>a+b,0);
 let lo=-.99,hi=1;if(value(lo)<full||value(hi)>full)throw Error('Für diese Eingaben liegt die Periodenrendite außerhalb des Suchbereichs.');
 for(let k=0;k<90;k++){const mid=(lo+hi)/2;if(value(mid)>full)lo=mid;else hi=mid;}
 const i=(lo+hi)/2,d=m*i-R,low=Math.max(-.99*m-R,d-.02),high=d+.02;
 const out=result([['Vertragsmarge QM (bp)',qm],['Geforderte DM (bp)',d*10000],['DM minus QM (bp)',(d-q)*10000],['Kupon pro Periode',C],['Preis bei DM gleich QM',value((R+q)/m)],['Gesamtdiskontsatz nominal (%)',m*i*100]],seq(low*10000,high*10000,bp=>value((R+bp/10000)/m),120),'Discount Margin (Basispunkte)','Vollpreis je hundert Nominal','Eigener Floater mit hundert Nominal, endfälliger Tilgung und regulären ganzen Perioden. Bewertung unmittelbar nach Kuponzahlung und Reset; keine Stückzinsen. Sämtliche künftigen Referenzraten werden für diese Rechnung gleich der aktuellen Referenz gesetzt. Das ist eine flache Rechenannahme, keine Zinsprognose. Keine Optionen, Ausfälle, Gebühren, Tages- oder Lockout-Sonderregeln. QM ist Vertragsbestandteil; DM wird unter diesen Annahmen aus dem Preis gelöst. Der Gesamtdiskontsatz ist nominal auf die gewählte Frequenz annualisiert. Ein nicht negativer Kupon wird vorausgesetzt; ein vertraglicher Floor wird nicht stillschweigend eingesetzt. Die Preisskala umfasst die dargestellten DM-Szenarien.');
 out.marker=[d*10000,full];const ys=out.points.map(p=>p[1]),min=Math.min(...ys),max=Math.max(...ys),pad=Math.max((max-min)*.1,.01);out.yRange=[min-pad,max+pad];
 out.floater={reference:R,quotedMargin:q,discountMargin:d,periodYield:i,coupon:C,periods:n,frequency:m,price:full};
 out.projection={caption:'Jeden unterstellten Kupon und die zusätzliche Endtilgung einzeln diskontieren',headers:['Periode','Zeit (Jahre)','Kupon','Tilgung','Gesamtzahlung','Diskontfaktor','Barwert'],rows:Array.from({length:n},(_,k)=>{const cf=C+(k===n-1?100:0),v=(1+i)**-(k+1);return[k+1,(k+1)/m,C,k===n-1?100:0,cf,v,cf*v];})};
 out.stable={caption:'Preis und nominal annualisierte Margen abstimmen',headers:['Größe','Wert'],rows:[['Voller Kaufpreis',full],['Summe der Barwerte',value(i)],['Perioden-IRR (%)',i*100],['Referenz nominal p. a. (%)',reference],['Gesamtdiskontsatz nominal p. a. (%)',m*i*100],['Discount Margin (bp)',d*10000]]};
 return out;
}
add('floater','Floater: Vertragsmarge, Marktanforderung und Preis','Verändere einen Wert nach dem anderen. Der Kaufpreis bestimmt die gesuchte Discount Margin; künftige Referenzraten werden hier ausdrücklich flach unterstellt. Vergleiche einen Margenschock mit einer Änderung des Referenzzinses bei pari.',[
 field('reference','Referenz (% nominal p. a.)',-.5,15,.25,4),
 field('qm','Vertragsmarge QM (bp p. a.)',-100,600,25,100),
 field('price','Voller Kaufpreis je hundert',90,110,.000001,98.128519),
 field('years','Verbleibende ganze Jahre',1,10,1,2),
 {key:'frequency',label:'Reguläre Perioden pro Jahr',min:1,max:4,step:1,value:4,choices:[{value:1,label:'Eine – jährlich'},{value:2,label:'Zwei – halbjährlich'},{value:4,label:'Vier – vierteljährlich'}]}
],floaterPlan);
models.floater.presets=[
 {label:'Margenschock: DM 200 bp',values:{reference:4,qm:100,price:98.128519,years:2,frequency:4}},
 {label:'Pari nach Reset',values:{reference:4,qm:100,price:100,years:2,frequency:4}},
 {label:'Höhere Referenz bei pari',values:{reference:6,qm:100,price:100,years:2,frequency:4}},
 {label:'Negative Referenz, positiver Kupon',values:{reference:-.5,qm:150,price:100,years:2,frequency:4}}
];
function moneyYieldPlan(p){
 if(![p.price,p.days].every(Number.isFinite)||p.price<=0||!Number.isInteger(p.days)||p.days<1||p.days>365)throw Error('Bitte positiven Kaufpreis und eine ganze Laufzeit von einem bis 365 Tagen verwenden.');
 const P=p.price,D=p.days,F=100,gain=F-P,h=gain/P,discount=gain/F*360/D,a360=h*360/D,a365=h*365/D,effective=Math.expm1(Math.log(F/P)*365/D),semi=2*Math.expm1(Math.log(F/P)*365/(2*D));
 const out=result([['Haltedauerrendite (%)',h*100],['Diskontsatz, 360 (%)',discount*100],['Add-on, 360 (%)',a360*100],['CFA-Geldmarkt-BEY, 365 (%)',a365*100],['Effektive Jahresrate, 365 (%)',effective*100],['Äquivalente nominale Halbjahresquote (%)',semi*100]],seq(85,105,P=>100*(100-P)/P*365/D,100),'Kaufpreis je hundert Endzahlung','Add-on-Jahresquote, 365 (%)','Eigene einzelne Endzahlung hundert nach der angegebenen Zahl von Tagen. Keine Zwischenzahlungen, Ausfälle, Steuern, Kosten oder Währungsänderungen. Die Haltedauerrendite verwendet den Kaufpreis; die Discount-Quote verwendet den Endbetrag. Add-on-Quoten sind einfach annualisiert. CFA-Geldmarkt-BEY bedeutet hier ausdrücklich Add-on auf 365-Tage-Basis; sie ist keine allgemeine Nachbildung aller Treasury-Investment-Rate-Konventionen. Effektive Jahresrate und äquivalente nominale Halbjahresquote erhalten rechnerisch denselben Jahreswachstumsfaktor. Sie garantieren keine Wiederanlage. Die Kurve verändert nur den Preis bei gleichbleibender Laufzeit.');
 out.marker=[P,a365*100];
 out.money={price:P,days:D,redemption:F,gain,hpr:h,discount360:discount,addon360:a360,addon365:a365,effective,semiannual:semi};
 out.projection={caption:'Dieselben Geldbeträge bei allen Quotierungen beibehalten',headers:['Zahlungsgröße','Betrag / Wert'],rows:[['Kaufpreis heute',P],['Endzahlung nach '+D+' Tagen',F],['Gewinn oder Verlust',gain],['Haltedauerrendite (%)',h*100]]};
 out.stable={caption:'Nenner und Jahresbasis der sechs Renditemaße vergleichen',headers:['Maß','Ertragsbezug','Tagesbasis','Quote (%)'],rows:[['Haltedauer','Kaufpreis','Keine Annualisierung',h*100],['Diskontsatz','Endbetrag',360,discount*100],['Add-on','Kaufpreis',360,a360*100],['CFA-Geldmarkt-BEY','Kaufpreis',365,a365*100],['Effektiv jährlich','Kapitalfaktor geometrisch',365,effective*100],['Nominal halbjährlich','Äquivalenter Kapitalfaktor',365,semi*100]]};
 return out;
}
add('moneyyield','Geldmarkt: Eine Zahlung, verschiedene Renditequoten','Halte zuerst den Kaufpreis fest und ändere nur die Tage. Danach ändere den Preis bei gleicher Laufzeit. Vergleiche Endbetragsnenner, Kaufpreisnenner und einfache beziehungsweise geometrische Annualisierung.',[
 field('price','Kaufpreis je hundert Endzahlung',85,105,.000001,98),
 field('days','Tage bis zur Endzahlung',30,365,1,180)
],moneyYieldPlan);
models.moneyyield.presets=[
 {label:'98 zu hundert in 180 Tagen',values:{price:98,days:180}},
 {label:'Gleicher Ertrag in 90 Tagen',values:{price:98,days:90}},
 {label:'Negativer Ertrag',values:{price:101,days:180}},
 {label:'Genau ein 365-Tage-Jahr',values:{price:98,days:365}}
];
function yieldCurvePlan(p){
 if(![p.z1,p.z2,p.z3,p.coupon].every(Number.isFinite)||Math.min(p.z1,p.z2,p.z3)<=-100||p.coupon<0)throw Error('Bitte Spotraten mit positiver Zinsbasis und einen nicht negativen Bondkupon verwenden.');
 const spots=[p.z1,p.z2,p.z3].map(s=>s/100),D=spots.map((s,k)=>(1+s)**-(k+1)),par=D.map((v,k)=>(1-v)/D.slice(0,k+1).reduce((a,b)=>a+b,0)),forward=D.map((v,k)=>(k?D[k-1]:1)/v-1),cf=[p.coupon,p.coupon,p.coupon+100],P=cf.reduce((v,c,k)=>v+c*D[k],0);
 const price=y=>cf.reduce((v,c,k)=>v+c/(1+y)**(k+1),0);let lo=-.99,hi=1;
 if(price(lo)<P||price(hi)>P)throw Error('Einzelrendite liegt außerhalb des Rechenbereichs.');
 for(let k=0;k<90;k++){const mid=(lo+hi)/2;if(price(mid)>P)lo=mid;else hi=mid;}
 const y=(lo+hi)/2,pc=par[2]*100;
 const lines=[{name:'Spot: heute bis Endjahr',color:'#087e82',points:spots.map((s,k)=>[k+1,s*100])},{name:'Par: Jahreskupon-Benchmark',color:'#bc670a',dash:true,points:par.map((s,k)=>[k+1,s*100])},{name:'Forward: nur das letzte Jahr',color:'#6b4ab5',points:forward.map((s,k)=>[k+1,s*100])}];
 const out=result([['Vollpreis des Kuponbonds',P],['Einzel-YTM effektiv p. a. (%)',y*100],['Dreijähriger Par-Kupon (%)',par[2]*100],['Jahresforward: Jahr 1 bis 2 (%)',forward[1]*100],['Jahresforward: Jahr 2 bis 3 (%)',forward[2]*100],['Diskontfaktor bis Jahr 3',D[2]]],lines[0].points,'Endjahr des betrachteten Zeitraums','Jahresrate (%)','Eigene drei jährliche Spotknoten, effektive Jahresraten, eine Währung und gleichartige ausfallfreie Ansprüche. Der eigene Kuponbond hat hundert Endnominal, drei jährliche Zahlungen und wird direkt nach einer Kuponzahlung bewertet. Keine Optionen, Kosten, Steuern oder Kalenderbesonderheiten. Ein Jahresforward endet am gezeigten Jahr und beginnt ein Jahr davor; eine Spotrate beginnt heute. Die Linien verbinden nur die drei Knoten und behaupten keine geschätzte Zwischenkurve. Bei einer flachen Kurve fallen die drei Linien zusammen. Par-Benchmarks werden für jedes Endjahr getrennt mit jährlichen Kupons konstruiert. Ein negativer mathematischer Par-Kupon bedeutet negative Kuponpflichten des hypothetischen Benchmarks, nicht einen entsprechenden Vertrag des eingegebenen Bonds. Ein Forward ist keine sichere Prognose. Änderung des Bondkupons verändert die Kurve selbst nicht.');
 out.series=lines;
 const rates=lines.flatMap(l=>l.points.map(p=>p[1])),min=Math.min(...rates),max=Math.max(...rates),pad=Math.max((max-min)*.12,.2);out.yRange=[min-pad,max+pad];
 out.curve={spots,discounts:D,par,forward,cashflows:cf,price:P,ytm:y,parCoupon:pc};
 out.projection={caption:'Dieselben drei Faktoren erzeugen Bondbarwerte und drei verschiedene Kurven',headers:['Endjahr','Spot (%)','Diskontfaktor','Par-Kupon (%)','Letzter Jahresforward (%)','Bondzahlung','Bondbarwert'],rows:D.map((v,k)=>[k+1,spots[k]*100,v,par[k]*100,forward[k]*100,cf[k],cf[k]*v])};
 out.stable={caption:'Den dreijährigen Par-Benchmark mit seinem eigenen Kupon genau auf hundert abstimmen',headers:['Jahr','Par-Kuponbetrag','Tilgung','Benchmarkzahlung','Barwert'],rows:D.map((v,k)=>[k+1,pc,k===2?100:0,pc+(k===2?100:0),(pc+(k===2?100:0))*v])};
 return out;
}
add('yieldcurve','Spot, Par und Forward aus denselben Preisfaktoren','Beginne mit drei, vier und fünf Prozent Spotrate. Ändere zunächst nur den Bondkupon: Die drei Kurven bleiben gleich, während sich Preis und einzelne Bond-YTM ändern können. Lade danach eine andere Kurvenform und vergleiche ihre eigenen Faktoren.',[
 field('z1','Spot bis Jahr 1 (% effektiv p. a.)',-3,12,.25,3),
 field('z2','Spot bis Jahr 2 (% effektiv p. a.)',-3,12,.25,4),
 field('z3','Spot bis Jahr 3 (% effektiv p. a.)',-3,12,.25,5),
 field('coupon','Jahreskupon des Bonds je hundert',0,12,.25,5)
],yieldCurvePlan);
models.yieldcurve.presets=[
 {label:'Steigend: 3, 4, 5 Prozent',values:{z1:3,z2:4,z3:5,coupon:5}},
 {label:'Flach: überall vier Prozent',values:{z1:4,z2:4,z3:4,coupon:5}},
 {label:'Fallend: 5, 4, 3 Prozent',values:{z1:5,z2:4,z3:3,coupon:5}},
 {label:'Buckel: 3, 6, 4 Prozent',values:{z1:3,z2:6,z3:4,coupon:5}},
 {label:'Negative Spots: −3, −2, −1 Prozent',values:{z1:-3,z2:-2,z3:-1,coupon:5}}
];
function bondHorizonPlan(p){
 if(![p.coupon,p.initial,p.after,p.years,p.horizon,p.frequency].every(Number.isFinite)||p.coupon<0||p.initial<=-100||p.after<=-100||!Number.isInteger(p.years)||p.years<1||p.horizon<=0||![1,2].includes(p.frequency))throw Error('Bitte positive Laufzeit und Horizont, nicht negativen Kupon, zulässige Zinsbasis und jährliche oder halbjährliche Zahlungen verwenden.');
 const m=p.frequency,n=p.years*m,b0=1+p.initial/(100*m),b1=1+p.after/(100*m),H=p.horizon,C=p.coupon/m;
 const rows=Array.from({length:n},(_,k)=>{const j=k+1,t=j/m,cash=C+(j===n?100:0),pv=cash/b0**j;return{j,t,cash,pv,weight:0,contribution:0};});
 const P=rows.reduce((s,r)=>s+r.pv,0);let D=0;
 for(const r of rows){r.weight=r.pv/P;r.contribution=r.t*r.weight;D+=r.contribution;}
 const wealth=(y,h)=>rows.reduce((s,r)=>s+r.cash*(1+y/(100*m))**(m*h-r.j),0),annual=(y,h)=>Math.expm1(Math.log(wealth(y,h)/P)/h)*100;
 let couponCash=0,couponInterest=0,sale=0,principal=0,principalInterest=0;
 for(const r of rows){if(r.t<=H){couponCash+=C;couponInterest+=C*(b1**(m*H-r.j)-1);if(r.j===n){principal=100;principalInterest=100*(b1**(m*H-r.j)-1);}}else sale+=r.cash*b1**(m*H-r.j);}
 const W=wealth(p.after,H),mark=wealth(p.after,0),exit=sale+principal;
 const lines=[{name:'Gewählter Horizont: '+H.toLocaleString('de-DE',{maximumFractionDigits:6})+' Jahre',color:'#087e82',points:seq(-2,15,y=>annual(y,H),85)},{name:'Anfängliche Macaulay Duration: '+D.toLocaleString('de-DE',{maximumFractionDigits:6})+' Jahre',color:'#bc670a',dash:true,points:seq(-2,15,y=>annual(y,D),85)},{name:'Endfälligkeit: '+p.years+' Jahre',color:'#6b4ab5',points:seq(-2,15,y=>annual(y,p.years),85)}];
 const out=result([['Bezahlter Vollpreis je hundert',P],['Marktwert sofort nach Zinsänderung',mark],['Anfängliche Macaulay Duration (Jahre)',D],['Horizont minus Macaulay (Jahre)',H-D],['Endvermögen am Horizont',W],['Realisierte effektive Jahresrendite (%)',annual(p.after,H)],['Zins auf erhaltene Kupons',couponInterest],['Verkaufspreis oder Nominalrückzahlung',exit]],lines[0].points,'Neuer Marktzins (% nominal p. a.)','Effektive Jahresrendite (%)','Eigener Festkuponbond mit hundert Endnominal. Kauf direkt nach Kupontermin; sofortige einmalige Zinsänderung, danach ein einheitlicher konstanter nominaler Satz für Bewertung und Wiederanlage, mit angegebener jährlicher oder halbjährlicher Frequenz. Alle Zahlungen werden auf denselben Horizont gebracht. Vor Fälligkeit: Vollverkaufspreis einschließlich zeitanteiligem Kuponwert im regelmäßigen Potenzmodell. Nach Fälligkeit: auch das zurückgezahlte Nominal wird wiederangelegt. Bruchteile von Perioden verwenden Potenzen; kein tatsächlicher Kalender oder Day Count. Keine Optionen, Ausfälle, Steuern, Gebühren oder Kurvenverformungen. Die anfängliche Macaulay Duration wird mit der Kauf-YTM berechnet und ändert sich beim Verschieben des neuen Zinses nicht. Der passende Horizont neutralisiert nur den ersten Ableitungseffekt am Ausgangszins. Alle drei Linien zeigen verschiedene Szenarien annualisierter Renditen auf denselben historischen Kaufpreis; keine Prognose. Zusammenfallende Horizonte erzeugen deckungsgleiche Linien. Sehr kurze Horizonte können extreme annualisierte Zahlen erzeugen; Mio. und Mrd. kürzen bei Bedarf nur die Achsenbeschriftung.');
 out.series=lines;out.marker=[p.after,annual(p.after,H)];out.compactYAxis=true;
 const all=[...lines.flatMap(s=>s.points.map(p=>p[1])),out.marker[1]],lo=Math.min(...all),hi=Math.max(...all),pad=Math.max((hi-lo)*.08,.1);out.yRange=[lo-pad,hi+pad];
 out.horizon={price:P,mark,macaulay:D,wealth:W,annual:annual(p.after,H)/100,couponCash,couponInterest,sale,principal,principalInterest,capitalGain:exit-P,rows};
 out.projection={caption:'Anfängliche Zahlungsbarwerte bestimmen die Macaulay Duration in Jahren',headers:['Periode','Jahr','Zahlung','Barwert beim Kauf','Barwertgewicht','Zeitbeitrag (Jahre)'],rows:rows.map(r=>[r.j,r.t,r.cash,r.pv,r.weight,r.contribution])};
 out.stable={caption:'Endvermögen ohne doppelte Tilgung oder doppelte Kupons abstimmen',headers:['Bestandteil am Horizont','Betrag'],rows:[['Erhaltene Kupons ohne Zins',couponCash],['Zins auf diese Kupons',couponInterest],['Vollverkaufspreis der noch ausstehenden Zahlungen',sale],['Zurückgezahltes Nominal',principal],['Zins auf zurückgezahltes Nominal',principalInterest],['Endvermögen: Summe der fünf Bestandteile',W],['Kapitalgewinn/-verlust: Verkauf oder Tilgung minus Kaufpreis',exit-P]]};
 return out;
}
add('bondhorizon','Anlagehorizont, Wiederanlage und Macaulay Duration','Vergleiche denselben Kauf bei einem kurzen Horizont, bei der anfänglichen Macaulay Duration und bei Fälligkeit. Ändere dann nur den neuen Marktzins. Die unterschiedliche Reaktion entsteht aus dem Verhältnis von Kurs- und Wiederanlageeffekt.',[
 field('coupon','Jahreskupon je hundert Nominal',0,15,.25,5),
 field('initial','Kauf-YTM (% nominal p. a.)',-2,15,.25,5),
 field('after','Neuer Zins (% nominal p. a.)',-2,15,.25,6),
 field('years','Restlaufzeit beim Kauf (Jahre)',1,30,1,5),
 field('horizon','Anlagehorizont ab Kauf (Jahre)',.25,30,.000000001,1),
 field('frequency','Kupons und Verzinsungsperioden pro Jahr',1,2,1,1)
],bondHorizonPlan);
models.bondhorizon.presets=[
 {label:'Kurz: Verkauf nach einem Jahr',values:{horizon:1}},
 {label:'Horizont gleich Macaulay',values:{horizon:4.54595050416236}},
 {label:'Halten bis zur Fälligkeit',values:{horizon:5}},
 {label:'Zwei Jahre über Fälligkeit hinaus',values:{horizon:7}},
 {label:'Nullkupon bis zur Fälligkeit',values:{coupon:0,horizon:5}},
 {label:'Halbjährliche Zahlungen',values:{frequency:2,horizon:4.485432764622604}},
 {label:'Negative Marktzinsen',values:{initial:-1,after:-2,horizon:5}}
];
function convexityPlan(p){
 if(![p.early,p.late,p.weight,p.yield,p.shock,p.value].every(Number.isFinite)||p.early<=0||p.late<p.early||p.weight<0||p.weight>100||p.yield<=-100||p.value<=0||p.yield/100+p.shock/10000<=-1)throw Error('Bitte positive Zahlungstermine in aufsteigender Reihenfolge, ein Gewicht zwischen null und hundert, positiven Marktwert und positive Zinsbasen verwenden.');
 const y=p.yield/100,b=1+y,w=p.weight===0?0:p.weight/100,V=p.value,t=w*p.early+(1-w)*p.late,varTime=w*(p.early-t)**2+(1-w)*(p.late-t)**2,D=t/b,Cbullet=t*(t+1)/b**2,Cbar=Cbullet+varTime/b**2;
 const barFactor=d=>w*(b/(b+d))**p.early+(1-w)*(b/(b+d))**p.late,bulletFactor=d=>(b/(b+d))**t,dy=p.shock/10000,barReturn=barFactor(dy)-1,bulletReturn=bulletFactor(dy)-1,linear=dy===0?0:-D*dy,barTaylor=linear+.5*Cbar*dy**2,bulletTaylor=linear+.5*Cbullet*dy**2;
 const lines=[{name:'Barbell: zwei Zahlungstermine',color:'#087e82',points:seq(-300,300,x=>(barFactor(x/10000)-1)*100,60)},{name:'Bullet: ein Vergleichstermin',color:'#6b4ab5',points:seq(-300,300,x=>(bulletFactor(x/10000)-1)*100,60)},{name:'Gemeinsame Durationnäherung',color:'#bc670a',dash:true,points:seq(-300,300,x=>x===0?0:-D*x/10000*100,60)}];
 const out=result([['Gemeinsamer Anfangsmarktwert (WE)',V],['Gemeinsame Macaulay Duration (Jahre)',t],['Gemeinsame Modified Duration',D],['Barwertgewichtete Zeitvarianz der Barbell',varTime],['Konvexität der Barbell',Cbar],['Konvexität des Bulletvergleichs',Cbullet],['Exakte Preisänderung Barbell (%)',barReturn*100],['Exakte Preisänderung Bullet (%)',bulletReturn*100],['Quadratische Näherung Barbell (%)',barTaylor*100],['Quadratische Näherung Bullet (%)',bulletTaylor*100],['Money Convexity Barbell (WE je Yield²)',V*Cbar],['Money Convexity Bullet (WE je Yield²)',V*Cbullet]],lines[0].points,'Sofortiger paralleler Yieldschock (Basispunkte)','Änderung des Marktwerts (%)','Eigene sichere feste Nullkuponansprüche in einer Währung. Anfangskurve flach; der eingegebene Satz ist eine effektive Jahres-YTM. Die ersten beiden Ansprüche bilden zusammen die Barbell; der Bullet ist ein separates Vergleichsportfolio mit gleichem Anfangsmarktwert und einem einzigen Termin am barwertgewichteten Zeitschwerpunkt. Dieser Termin darf ein Jahresbruchteil sein; alle Faktoren verwenden die offengelegte jährliche Potenzkonvention, keinen realen Kalender. Die anfänglichen Endbeträge bleiben beim Zinsschock unverändert. Alle Laufzeiten erfahren dieselbe sofortige additive Jahres-Yieldänderung, während keine Zeit verstreicht. Keine Optionen, Ausfälle, Kosten, Steuern oder Währungsänderungen. Die Kurven zeigen Preisvergleichsszenarien, keine Haltedauerrenditen oder garantierte Strategieerträge. Dauerhafte Zinsverläufe, Finanzierung, Alternativkosten und Kurvenverformungen sind damit nicht abgesichert. Bei gleichem Zahlungstermin oder Gewicht null beziehungsweise hundert überlagern sich die beiden exakten Portfoliokurven. Die lineare Durationgerade bleibt eine eigene Näherung.');
 out.series=lines;out.marker=[p.shock,barReturn*100];const vals=lines.flatMap(l=>l.points.map(p=>p[1])),lo=Math.min(...vals),hi=Math.max(...vals),pad=Math.max((hi-lo)*.08,.2);out.yRange=[lo-pad,hi+pad];
 const earlyFace=w*V*b**p.early,lateFace=(1-w)*V*b**p.late,bulletFace=V*b**t;
 out.convexity={yield:y,early:p.early,late:p.late,weight:w,value:V,center:t,varTime,duration:D,barConvexity:Cbar,bulletConvexity:Cbullet,barReturn,bulletReturn,linear,barTaylor,bulletTaylor,earlyFace,lateFace,bulletFace,barValue:V*barFactor(dy),bulletValue:V*bulletFactor(dy)};
 out.projection={caption:'Erste zwei Zeilen: Barbell-Bestand. Dritte Zeile: separater Bulletvergleich, kein dritter Bestandteil derselben Barbell.',headers:['Bestand','Termin (Jahre)','Eigenes Barwertgewicht','Marktwert vor Schock','Feststehende Endzahlung','Marktwert nach Schock'],rows:[['Barbell: früh',p.early,w,w*V,earlyFace,earlyFace/(b+dy)**p.early],['Barbell: spät',p.late,1-w,(1-w)*V,lateFace,lateFace/(b+dy)**p.late],['Bullet: gesonderter Vergleich',t,1,V,bulletFace,bulletFace/(b+dy)**t]]};
 out.stable={caption:'Identische erste Ableitung, verschiedene zweite Ableitungen und tatsächliche Preisreaktionen',headers:['Maß','Barbell','Bullet','Einheit / Bezug'],rows:[['Anfänglicher Marktwert',V,V,'WE'],['Macaulay Duration',t,t,'Jahre'],['Modified Duration',D,D,'Nach effektiver Jahres-YTM'],['Konvexität',Cbar,Cbullet,'Nach effektiver Jahres-YTM zum Quadrat'],['Money Convexity',V*Cbar,V*Cbullet,'WE je Einheit der dezimalen Yieldänderung zum Quadrat'],['Nur Duration: Wertänderung',V*linear,V*linear,'WE'],['Mit Konvexität: Wertänderung',V*barTaylor,V*bulletTaylor,'WE'],['Exakte Wertänderung',V*barReturn,V*bulletReturn,'WE'],['Exakter neuer Marktwert',V*barFactor(dy),V*bulletFactor(dy),'WE'],['Fehler der quadratischen Wertänderung',V*(barTaylor-barReturn),V*(bulletTaylor-bulletReturn),'WE: Näherung minus Neubewertung']]};
 return out;
}
add('bondconvex','Barbell und Bullet bei gleichem Preis und gleicher Duration','Vergleiche den breiten Zahlungsabstand mit dem engen Abstand. Der Marktwert und die Duration beider Vergleichsportfolios sind jeweils gleich. Zinsanstieg und Zinsrückgang zeigen, was allein die unterschiedliche Krümmung zur Preisreaktion beiträgt.',[
 field('early','Früher Zahlungstermin (Jahre)',.5,5,.5,1),
 field('late','Später Zahlungstermin (Jahre)',5,30,.5,9),
 field('weight','Früher Anteil am Anfangsmarktwert (%)',0,100,5,50),
 field('yield','Anfängliche effektive Jahres-YTM (%)',0,12,.25,5),
 field('shock','Gemeinsamer Yieldschock (Basispunkte)',-300,300,25,100),
 field('value','Marktwert je Vergleichsportfolio (WE)',1000,10000000,1000,1000000)
],convexityPlan);
models.bondconvex.presets=[
 {label:'Breit: ein und neun Jahre',values:{early:1,late:9,weight:50,yield:5,shock:100,value:1000000}},
 {label:'Eng: vier und sechs Jahre',values:{early:4,late:6,weight:50,yield:5,shock:100,value:1000000}},
 {label:'Noch breiter, gleicher Schwerpunkt',values:{early:.5,late:9.5,weight:50,yield:5,shock:100,value:1000000}},
 {label:'Gleiche Termine: keine Zusatzstreuung',values:{early:5,late:5,weight:50,yield:5,shock:100,value:1000000}},
 {label:'Nur der späte Anspruch',values:{early:1,late:9,weight:0,yield:5,shock:100,value:1000000}},
 {label:'Halber Marktwert',values:{early:1,late:9,weight:50,yield:5,shock:100,value:500000}}
];
function keyRatePlan(p){
 const ts=[1,3,5],ys=[p.y1,p.y3,p.y5].map(y=>y/100),shocks=[p.d1,p.d3,p.d5].map(d=>d/10000),V=p.value,zero=x=>x===0?0:x;
 if(![...ys,...shocks,V].every(Number.isFinite)||V<=0||ys.some((y,i)=>1+y<=2*Math.abs(shocks[i])))throw Error('Bitte positiven Marktwert und Zinsbasen verwenden, die für die gesamte gezeigte doppelte Szenariobreite positiv bleiben.');
 const ds=ts.map((t,i)=>t/(1+ys[i])),w=(ds[2]-ds[1])/(ds[2]-ds[0]);
 if(!Number.isFinite(w)||w<0||w>1)throw Error('Die mittlere Duration muss für diesen positiven Vergleich zwischen den beiden äußeren Durationen liegen.');
 const wb=[w,0,1-w],wu=[0,1,0],kb=wb.map((v,i)=>v*ds[i]),ku=wu.map((v,i)=>v*ds[i]),facesB=wb.map((v,i)=>v*V*(1+ys[i])**ts[i]),facesU=wu.map((v,i)=>v*V*(1+ys[i])**ts[i]);
 const factor=(weights,l)=>weights.reduce((s,v,i)=>s+v*((1+ys[i])/(1+ys[i]+l*shocks[i]))**ts[i],0),linear=(keys,l)=>zero(-l*keys.reduce((s,v,i)=>s+v*shocks[i],0));
 const rb=zero(factor(wb,1)-1),ru=zero(factor(wu,1)-1),lb=linear(kb,1),lu=linear(ku,1),cb=wb.reduce((s,v,i)=>s+v*ts[i]*(ts[i]+1)/(1+ys[i])**2,0),cu=12/(1+ys[1])**2;
 const series=[{name:'Barbell: vollständige Neubewertung',color:'#087e82',points:seq(-2,2,l=>zero(factor(wb,l)-1)*100,60)},{name:'Bullet: vollständige Neubewertung',color:'#6b4ab5',points:seq(-2,2,l=>zero(factor(wu,l)-1)*100,60)},{name:'Barbell: Key-Rate-Näherung',color:'#087e82',dash:true,points:seq(-2,2,l=>linear(kb,l)*100,60)},{name:'Bullet: Key-Rate-Näherung',color:'#6b4ab5',dash:true,points:seq(-2,2,l=>linear(ku,l)*100,60)}];
 const out=result([['Gemeinsamer Anfangsmarktwert (WE)',V],['Gleiche analytische parallele Duration',ds[1]],['Früher Barbell-Marktwertanteil (%)',w*100],['Später Barbell-Marktwertanteil (%)',(1-w)*100],['Konvexität Barbell bei gemeinsamem Spot-Schritt',cb],['Konvexität Bullet bei gemeinsamem Spot-Schritt',cu],['Exakte Barbelländerung (%)',rb*100],['Exakte Bulletänderung (%)',ru*100],['Lineare Key-Rate-Näherung Barbell (%)',lb*100],['Lineare Key-Rate-Näherung Bullet (%)',lu*100],['Neuer Barbell-Marktwert (WE)',V*factor(wb,1)],['Neuer Bullet-Marktwert (WE)',V*factor(wu,1)]],series[0].points,'Vielfaches λ des eingegebenen Dreiknoten-Schocks','Änderung des Marktwerts (%)','Drei sichere feste Nullkupontermine nach einem, drei und fünf Jahren, eine Währung, keine Optionen oder Spreads. Die eingegebenen Spots sind effektive Jahresquoten. Die Barbell besteht aus Jahr eins und fünf; das Bullet-Portfolio ist ein separates Vergleichsportfolio im dritten Jahr. Der frühe Barwertanteil wird automatisch so bestimmt, dass beide dieselbe anfängliche analytische Zinssensitivität gegenüber einem gemeinsamen additiven Schritt aller drei Spots haben. Bei nicht flacher Kurve ist dieser Anteil nicht zwingend die Hälfte; auch gleiche Macaulay Duration wird dann nicht vorausgesetzt. Die anfänglichen Endbeträge bleiben in sämtlichen Szenarien fest. Jeder der drei Knoten erhält seinen eigenen eingegebenen Schock; zwischen den Knoten liegen hier keine Zahlungen. λ eins bedeutet genau dieses Szenario, λ null den Ausgangspunkt, λ minus eins die umgekehrte Bewegung und λ zwei den doppelten Schock. Die horizontale Achse ist kein einzelner Basispunktwert. Die Key-Rate-Linien verwenden die analytische erste Ableitung nach den jeweiligen Spots. Volle Neubewertung zeigt zusätzlich höhere Ordnungen. Es verstreicht keine Zeit; Kupons, Finanzierung, Kosten, Steuern, FX, Ausfälle und veränderte Optionsausübung fehlen. Das Ergebnis ist eine Preisvergleichsrechnung, keine garantierte Haltedauerrendite.');
 out.series=series;out.marker=[1,rb*100];const vs=series.flatMap(s=>s.points.map(p=>p[1])),lo=Math.min(...vs),hi=Math.max(...vs),pad=Math.max((hi-lo)*.08,.2);out.yRange=[lo-pad,hi+pad];
 out.keyrate={times:ts,yields:ys,shocks,value:V,earlyWeight:w,lateWeight:1-w,barWeights:wb,bulletWeights:wu,barKeys:kb,bulletKeys:ku,barFaces:facesB,bulletFaces:facesU,parallelDuration:ds[1],barConvexity:cb,bulletConvexity:cu,barReturn:rb,bulletReturn:ru,barLinear:lb,bulletLinear:lu,barValue:V*factor(wb,1),bulletValue:V*factor(wu,1)};
 out.projection={caption:'Zwei Barbell-Ansprüche und ein separater Bulletvergleich; alle ursprünglichen Endzahlungen bleiben beim Schock unverändert.',headers:['Vergleichsbestand','Termin (Jahre)','Anfangsmarktwert','Feste Endzahlung','Spot nach Schock (%)','Neuer Marktwert'],rows:[['Barbell: früh',1,w*V,facesB[0],(ys[0]+shocks[0])*100,facesB[0]/(1+ys[0]+shocks[0])],['Barbell: spät',5,(1-w)*V,facesB[2],(ys[2]+shocks[2])*100,facesB[2]/(1+ys[2]+shocks[2])**5],['Bullet: eigener Vergleich',3,V,facesU[1],(ys[1]+shocks[1])*100,facesU[1]/(1+ys[1]+shocks[1])**3]]};
 out.stable={caption:'Key-Rate-Vektoren und erste Geldbeiträge für die drei ausdrücklich getrennten Knoten',headers:['Knoten (Jahre)','Anfangsspot (%)','Eigener Schock (bp)','Barbell-KRD','Bullet-KRD','Linearer Barbell-Geldbeitrag','Linearer Bullet-Geldbeitrag'],rows:[...ts.map((t,i)=>[t,ys[i]*100,shocks[i]*10000,kb[i],ku[i],zero(-V*kb[i]*shocks[i]),zero(-V*ku[i]*shocks[i])]),['Summe','—','Kein gemeinsamer Schock',kb.reduce((s,v)=>s+v,0),ku.reduce((s,v)=>s+v,0),V*lb,V*lu]]};
 return out;
}
add('keyrate','Gleiche parallele Duration, unterschiedliches Kurvenrisiko','Vergleiche einen mittleren Nullkupon mit einer automatisch auf dieselbe parallele Duration abgestimmten Barbell. Verändere anschließend jeden Kurvenknoten getrennt. Die Geld- und Key-Rate-Tabellen zeigen, welcher Termin den Unterschied verursacht.',[
 field('y1','Einjahres-Spot vor Schock (%)',0,12,.25,3),field('y3','Dreijahres-Spot vor Schock (%)',0,12,.25,4),field('y5','Fünfjahres-Spot vor Schock (%)',0,12,.25,5),
 field('d1','Einjahres-Schock (Basispunkte)',-100,100,10,50),field('d3','Dreijahres-Schock (Basispunkte)',-100,100,10,0),field('d5','Fünfjahres-Schock (Basispunkte)',-100,100,10,-50),field('value','Marktwert je Vergleichsportfolio (WE)',1000,10000000,1000,1000000)
],keyRatePlan);
models.keyrate.presets=[
 {label:'Flügel: kurz steigt, lang fällt',values:{y1:3,y3:4,y5:5,d1:50,d3:0,d5:-50,value:1000000}},
 {label:'Alle Spots steigen gleich',values:{y1:3,y3:4,y5:5,d1:50,d3:50,d5:50,value:1000000}},
 {label:'Nur der mittlere Spot steigt',values:{y1:3,y3:4,y5:5,d1:0,d3:100,d5:0,value:1000000}},
 {label:'Flache Anfangskurve',values:{y1:4,y3:4,y5:4,d1:50,d3:0,d5:-50,value:1000000}},
 {label:'Umgekehrte Flügelbewegung',values:{y1:3,y3:4,y5:5,d1:-50,d3:0,d5:50,value:1000000}},
 {label:'Halber Marktwert',values:{y1:3,y3:4,y5:5,d1:50,d3:0,d5:-50,value:500000}}
];
function sovereignPlan(p){
 const D=p.debt,f=p.fx/100,x=p.depreciation/100,i=p.interest/100,g=p.growth/100,PB=p.primary,C=p.contingent,m=p.maturity/100,Y=100*(1+g);
 if(![D,f,x,i,g,PB,C,m].every(Number.isFinite)||D<=0||f<0||f>1||x<=-1||i<0||g<=-1||C<0||m<0||m>1)throw Error('Gültige Bestände, Quoten und ein positives nominales BIP erforderlich.');
 const state=(debt,shock)=>{
  const home=debt*(1-f),foreign=debt*f,fxValue=foreign*(1+shock),revalued=home+fxValue,valuation=fxValue-foreign,I=revalued*i,M=revalued*m,raw=M+I-PB+C,issue=Math.max(0,raw),extra=Math.max(0,-raw),end=revalued+I-PB+C,ratio=100*end/Y,needRatio=100*issue/Y,requiredPB=revalued*(1+i)+C-debt*(1+g);
  return{home,foreign,fxValue,revalued,valuation,I,M,raw,issue,extra,end,ratio,needRatio,requiredPB};
 };
 const a=state(D,x),neutral=state(D,0);if(a.end<0)throw Error('Der Primärüberschuss würde mehr als die gesamte Schuld tilgen; dafür ist eine zusätzliche Vermögensrechnung nötig.');
 const series=[{name:'Schuldenquote nach angegebenem FX-Schock',points:seq(10,150,d=>state(d,x).ratio)},{name:'Schuldenquote ohne FX-Schock',color:'#ba6824',points:seq(10,150,d=>state(d,0).ratio),dash:true},{name:'Pari-Neuaufnahme / BIP nach Schock',color:'#5b64aa',points:seq(10,150,d=>state(d,x).needRatio)}];
 const out=result([['Anfangsschuld (WE)',D],['FX-Bestandseffekt (WE)',a.valuation],['Jahreszinsdienst (WE)',a.I],['Endschuld (WE)',a.end],['Endschuld / End-BIP (%)',a.ratio],['Fällige planmäßige Tilgung (WE)',a.M],['Neue Pari-Finanzierung (WE)',a.issue],['Neue Finanzierung / End-BIP (%)',a.needRatio],['Zusätzlicher Schuldabbau (WE)',a.extra],['Quotenstabilisierender Primärsaldo (WE)',a.requiredPB]],series[0].points,'Anfangsschulden (WE; Anfangs-BIP = 100)','Quote zum nominalen End-BIP (%)','Eigenes Einjahres-Cashmodell bei Anfangs-BIP hundert. Alle bestehenden Schulden zahlen den angegebenen Jahreszins und werden erst zum Jahresende getilgt; der gleiche Fälligkeitsanteil gilt für beide Währungsgruppen; der Zinssatz beschreibt den Bestandsdienst, keine sofortige Kuponänderung alter Festzinsverträge. Ein einziger Wechselkursfaktor gilt für FX-Bestand, Kupon und Tilgung. Primärsaldo und zusätzliche, zuvor nicht erfasste Belastung sind WE des Anfangs-BIP. Neue Schuld wird am Ende zu pari in Heimatwährung aufgenommen; ein Finanzierungsüberschuss tilgt weitere Schuld. Keine Gebühren, Cashreserveänderung, Sicherung oder Ausfallprognose. Bei FX-Schock null fallen die beiden Schuldenkurven zusammen; nur der Anfangsbestand variiert entlang der Kurven.');
 out.series=series;out.marker=[D,a.ratio];out.sovereign={D,f,x,i,g,PB,C,m,Y,...a,neutral};
 out.projection={caption:'Währungsüberleitung: Heimatwährung je Einheit Fremdwährung. Positiver Schock bedeutet Abwertung der Heimatwährung; der gleiche Faktor gilt hier ausdrücklich für alle FX-Zahlungen.',headers:['Alte Schuld','Vor Schock (WE)','Umrechnungsfaktor','Nach Schock (WE)','Jahreszins (WE)','Fällige Tilgung (WE)'],rows:[['Heimatwährung',a.home,1,a.home,a.home*i,a.home*m],['Fremdwährung, jeweils in Heimat bewertet',a.foreign,1+x,a.fxValue,a.fxValue*i,a.fxValue*m],['Summe',D,'—',a.revalued,a.I,a.M]]};
 out.stable={caption:'Bestand und Cashbedarf getrennt abstimmen. Positive Primärsalden vermindern den Bedarf; fällige Tilgungen erhöhen die Bruttoaufnahme, nicht nochmals die Endschuld.',headers:['Schritt','Betrag','Bedeutung'],rows:[['Anfangsschuld',D,'WE; Anfangs-BIP hundert'],['FX-Bestandsänderung',a.valuation,'WE; kein neu aufgenommenes Nominal'],['Jahreszinsdienst',a.I,'WE; wird hier vollständig aus Finanzierung oder Primärsaldo gedeckt'],['Primärsaldo als Bestandsbeitrag',PB===0?0:-PB,'WE; Überschuss erhält negatives Beitragsvorzeichen'],['Zusätzliche Belastung',C,'WE; hier vollständig cash- und schuldwirksam, vorher nicht im Primärsaldo'],['Endschuld: Summe der fünf Beiträge',a.end,'WE'],['Planmäßig fälliges Kapital',a.M,'WE; bereits Teil des alten Bestands'],['Cashbedarf vor neuer Finanzierung',a.raw,'Tilgung plus Zins minus Primärsaldo plus zusätzliche Belastung'],['Neue Pari-Finanzierung',a.issue,'Maximum aus null und Cashbedarf'],['Zusätzlicher Schuldabbau',a.extra,'Maximum aus null und negativem Cashbedarf'],['Zweite Bestandskontrolle',a.revalued-a.M+a.issue-a.extra,'FX-angepasste Altschuld minus fällige Tilgung plus Neuaufnahme minus Zusatzabbau'],['Nominales End-BIP',Y,'Anfangs-BIP hundert mal eins plus nominale Wachstumsrate'],['Endschuldenquote',a.ratio,'% des End-BIP'],['Primärsaldo zur Stabilisierung der Anfangsquote',a.requiredPB,'WE; Rechenziel unter den gegebenen Annahmen, kein Urteil politischer Umsetzbarkeit']]};
 return out;
}
add('sovereign','Schuldenquote und Refinanzierung getrennt verstehen','Vergleiche dieselbe Anfangsschuld bei anderer Währung und Fälligkeit. Der Rechner stimmt die Bestandsänderung, den laufenden Zins, planmäßige Tilgung und neue Finanzierung getrennt ab. Ein höherer Rückzahlungstermin benötigt mehr neue Finanzierung, ohne denselben alten Schuldbetrag doppelt zur Endschuld zu addieren.',[
 field('debt','Anfangsschuld (WE; Anfangs-BIP = 100)',10,150,5,80),field('fx','Fremdwährungsanteil der Altschuld (%)',0,100,5,25),field('depreciation','Abwertung: Heimat je Fremdwährung (%)',-20,40,5,20),field('interest','Jährlicher Zins des Altbestands (%)',0,12,.5,5),field('growth','Nominales BIP-Wachstum (%)',-5,10,.5,4),field('primary','Primärsaldo (WE; Überschuss positiv)',-5,8,.5,1),field('contingent','Zusätzliche cashwirksame Belastung (WE)',0,10,1,0),field('maturity','Zum Jahresende fälliger Altanteil (%)',0,50,5,10)
],sovereignPlan);
models.sovereign.presets=[
 {label:'Abwertung bei einem Viertel FX-Schuld',values:{debt:80,fx:25,depreciation:20,interest:5,growth:4,primary:1,contingent:0,maturity:10}},
 {label:'Gleicher Staat ohne Abwertung',values:{debt:80,fx:25,depreciation:0,interest:5,growth:4,primary:1,contingent:0,maturity:10}},
 {label:'Gleiche Endquote, mehr Fälligkeiten',values:{debt:80,fx:25,depreciation:20,interest:5,growth:4,primary:1,contingent:0,maturity:40}},
 {label:'Gleicher Schock ohne FX-Schuld',values:{debt:80,fx:0,depreciation:20,interest:5,growth:4,primary:1,contingent:0,maturity:10}},
 {label:'Zusätzliche Belastung aus Garantieabruf',values:{debt:80,fx:25,depreciation:20,interest:5,growth:4,primary:1,contingent:5,maturity:10}},
 {label:'Nominales BIP schrumpft',values:{debt:80,fx:25,depreciation:20,interest:5,growth:-2,primary:1,contingent:0,maturity:10}},
 {label:'Primärsaldo stabilisiert die Anfangsquote',values:{debt:80,fx:25,depreciation:20,interest:5,growth:4,primary:5,contingent:0,maturity:10}}
];
function creditCashPlan(p){
 if(![p.sales,p.variable,p.fixed,p.capex,p.wc,p.debt,p.maturity,p.shock].every(Number.isFinite)||p.sales<0||p.variable<0||p.variable>100||p.fixed<0||p.capex<0||p.debt<=0||p.maturity<0||p.maturity>100||p.shock<0)throw Error('Bitte endliche Umsatz-, Kosten- und Schuldwerte sowie einen gültigen Tilgungsanteil verwenden.');
 const ebitda=p.sales*(1-p.variable/100)-p.fixed,ebit=ebitda-10,interest=p.debt*(.05+.5*p.shock/100),tax=.25*Math.max(0,ebit-interest),income=ebit-interest-tax,ffo=income+10,cfo=ffo-p.wc,fcf=cfo-p.capex,maturity=p.debt*p.maturity/100;
 const cashBefore=15+fcf-maturity,need=Math.max(0,10-cashBefore),cashEnd=cashBefore+need,debtEnd=p.debt-maturity+need;
 return {ebitda,ebit,interest,tax,income,ffo,cfo,fcf,maturity,cashBefore,need,cashEnd,debtEnd,grossLeverage:ebitda>0?p.debt/ebitda:null,netLeverage:ebitda>0?(p.debt-15)/ebitda:null,ebitCover:ebit/interest,ebitdaCover:ebitda/interest,ffoDebt:100*ffo/p.debt,cfoDebt:100*cfo/p.debt,fcfDebt:100*fcf/p.debt};
}
add('creditcash','Vom Geschäft zum tatsächlich benötigten Cash','Der Neravo-Fall zeigt, warum selbst hohe EBITDA-Zinsdeckung nicht jede Tilgung deckt. Verändere jeweils einen Treiber und verfolge Ergebnis, Cashbindung und neue Finanzierung getrennt.',[
 field('sales','Jahresumsatz (Mio. WE)',120,280,1,200),field('variable','Variable Cashkosten / Umsatz (%)',40,80,1,60),field('fixed','Fixe Cashkosten (Mio. WE)',10,60,1,30),field('capex','Gesamt-Capex (Mio. WE)',0,50,1,15),field('wc','Zunahme operatives Working Capital (Mio. WE)',-10,40,1,10),field('debt','Anfangsschuld (Mio. WE)',50,250,10,150),field('maturity','Tilgung am Jahresende (% der Anfangsschuld)',0,80,1,20),field('shock','Zusätzlicher Reset auf variablen Anteil (Prozentpunkte)',0,8,.5,0)
],p=>{
 const v=creditCashPlan(p),curves=[{name:'CFO nach Zins und Steuer',color:'#087e82',points:seq(120,280,sales=>creditCashPlan({...p,sales}).cfo)},{name:'FCF nach Capex',color:'#ba6824',points:seq(120,280,sales=>creditCashPlan({...p,sales}).fcf)},{name:'Freie Endkasse vor neuer Finanzierung',color:'#5b64aa',dash:true,points:seq(120,280,sales=>creditCashPlan({...p,sales}).cashBefore)}];
 const out=result([['EBITDA (Mio. WE)',v.ebitda],['EBIT (Mio. WE)',v.ebit],['Cashzins (Mio. WE)',v.interest],['Kredit-FFO (Mio. WE)',v.ffo],['CFO nach Zins (Mio. WE)',v.cfo],['FCF nach Capex (Mio. WE)',v.fcf],['Fällige Tilgung (Mio. WE)',v.maturity],['Freie Kasse vor neuer Finanzierung (Mio. WE)',v.cashBefore],['Benötigte neue Finanzierung (Mio. WE)',v.need],['Schuld nach Tilgung und angenommener Finanzierung (Mio. WE)',v.debtEnd]],curves[0].points,'Jahresumsatz (Mio. WE)','Jahresbetrag (Mio. WE)','Eigener nicht finanzieller Einjahres-Schuldner Neravo. Anfangs-Cash 20 Mio., davon fünf gesperrt; freie Kasse startet bei 15 und soll am Ende mindestens zehn betragen. Keine Dividende oder sonstige Finanzierung. Abschreibung zehn; Cashsteuer 25 % auf positives EBIT minus Zins, keine sofortige Verluststeuererstattung. Basiszins fünf Prozent auf die ganze Anfangsschuld; die Hälfte ist variabel und trägt den eingegebenen zusätzlichen Reset für das volle Jahr. Der feste Teil ändert sich nicht. Gesamte Kapitaltilgung erst am Jahresende. Neue Mittel werden bei Bedarf am Jahresende als ausbezahlte Pari-Schuld ohne Gebühren angenommen und tragen hier keinen zusätzlichen Jahreszins. Die neue Finanzierung ist ein berechneter Bedarf, keine Zusage. Ein negativer Kassenwert vor Finanzierung ist eine ungedeckte Rechenlücke, kein tatsächlich erlaubter negativer Bankbestand. Überschüssige Kasse bleibt erhalten; keine zusätzliche freiwillige Tilgung. FFO nach Zins/Steuer und vor operativem Working Capital, CFO nach dessen Veränderung, FCF nach Gesamt-Capex und vor Tilgung. Diese Konvention ist weder REIT-FFO noch FCFF. Leverage nur bei positivem EBITDA; negative Deckung bleibt als Verlustsignal sichtbar. Kurven variieren nur Umsatz, halten andere Bestände und Kostenregeln fest und erlauben auch Verluste. Keine vollständige Bilanz, unterjährige Liquiditätsprüfung, Rating- oder PD-Kalibrierung.');
 out.series=curves;out.marker=[p.sales,v.cfo];
 out.projection={caption:'Neravo: alle Jahresbewegungen in Mio. WE, auf derselben Schuldner- und Cashbasis. Freie Kasse und gesperrte fünf bleiben getrennt.',headers:['Überleitung','Betrag','Bedeutung'],rows:[['Umsatz',p.sales,'Gegebenes Geschäft'],['Variable Cashkosten',p.sales*p.variable/100,'Abzug vom Umsatz'],['Fixe Cashkosten',p.fixed,'Abzug vom Umsatz'],['EBITDA',v.ebitda,'Vor Abschreibung, Zins und Steuer'],['Abschreibung',10,'Noncash; Abzug zu EBIT'],['EBIT',v.ebit,'Ergebnis vor Zins und Steuer'],['Cashzins',v.interest,'Zinsaufwand gleich Auszahlung im Fall'],['Cashsteuer',v.tax,'Keine sofortige Erstattung bei Verlust'],['Nettogewinn',v.income,'Nach Zins und Steuer'],['Kredit-FFO',v.ffo,'Nettogewinn plus Abschreibung'],['Δ operatives Working Capital',p.wc,'Positiver Betrag bindet Cash'],['CFO nach Zins und Steuer',v.cfo,'FFO minus Δ Working Capital'],['Gesamt-Capex',p.capex,'Zusätzlicher Cashabzug'],['FCF vor Tilgung',v.fcf,'CFO minus Capex'],['Anfänglich zugängliche Kasse',15,'20 minus fünf gesperrt'],['Fällige Kapitaltilgung',v.maturity,'Jahresende'],['Freie Kasse vor neuer Finanzierung',v.cashBefore,'Negativ bedeutet ungedeckte Lücke'],['Benötigte neue Finanzierung',v.need,'Würde die Mindestkasse wiederherstellen'],['Freie Endkasse nach angenommener Finanzierung',v.cashEnd,'Mindestens zehn, wenn Finanzierung tatsächlich zufließt'],['Endschuld nach angenommener Finanzierung',v.debtEnd,'Anfangsschuld minus Tilgung plus neue Schuld']]};
 out.stable={caption:'Einheitlich definierte Kreditquoten; Vielfache mit ×, Cashflow/Schuld in Prozent. Keine automatischen Ratinggrenzen.',headers:['Kennzahl','Wert','Einheit / Gültigkeit'],rows:[['Bruttoschuld / EBITDA',v.grossLeverage??'Nicht aussagekräftig','×; nur bei positivem EBITDA'],['Nettoschuld / EBITDA',v.netLeverage??'Nicht aussagekräftig','×; nur 15 freies Cash abgezogen'],['EBIT / Zins',v.ebitCover,'×; negativer Wert zeigt Ergebnisverlust'],['EBITDA / Zins',v.ebitdaCover,'×; positiver Zins im ganzen Eingabebereich'],['Kredit-FFO / Anfangsschuld',v.ffoDebt,'%'],['CFO / Anfangsschuld',v.cfoDebt,'%'],['FCF / Anfangsschuld',v.fcfDebt,'%']]};
 return out;
});
models.creditcash.presets=[
 {label:'Neravo-Basisfall laden',values:{sales:200,variable:60,fixed:30,capex:15,wc:10,debt:150,maturity:20,shock:0}},
 {label:'Nur Umsatz minus zwanzig Prozent',values:{sales:160,variable:60,fixed:30,capex:15,wc:10,debt:150,maturity:20,shock:0}},
 {label:'Nur zusätzliche Cashbindung',values:{sales:200,variable:60,fixed:30,capex:15,wc:30,debt:150,maturity:20,shock:0}},
 {label:'Nur höhere Jahresendtilgung',values:{sales:200,variable:60,fixed:30,capex:15,wc:10,debt:150,maturity:50,shock:0}},
 {label:'Nur variabler Zins plus vier Punkte',values:{sales:200,variable:60,fixed:30,capex:15,wc:10,debt:150,maturity:20,shock:4}},
 {label:'Nur Schuld ohne Jahresendfälligkeit',values:{sales:200,variable:60,fixed:30,capex:15,wc:10,debt:150,maturity:0,shock:0}},
 {label:'Negatives EBITDA sichtbar machen',values:{sales:120,variable:80,fixed:60,capex:15,wc:10,debt:150,maturity:20,shock:0}}
];
function mortgagePoolPlan(p){
 const {principal,coupon,months,cpr,fee,discount}=p;
 if(![principal,coupon,months,cpr,fee,discount].every(Number.isFinite)||principal<=0||coupon<0||fee<0||discount<0||!Number.isInteger(months)||months<1||months>360||cpr<0||cpr>=100)throw Error('Für diesen Hypothekenplan werden positive Anfangsschuld, ganze Restmonate und gültige nicht negative Zins-/Prepayment-Raten benötigt.');
 if(fee>coupon)throw Error('Die laufende Gebühr darf im gewählten Modell den Vertragszins nicht übersteigen.');
 const r=coupon/1200,f=fee/1200,y=discount/1200,payment=r===0?principal/months:principal*r/(-Math.expm1(-months*Math.log1p(r)));
 const smm=-Math.expm1(Math.log1p(-cpr/100)/12);
 const schedule=s=>{
  let balance=principal,survival=1,pv=0,interest=0,fees=0,netInterest=0,capital=0,wal=0;const rows=[],points=[[0,principal]];
  for(let t=1;t<=months;t++){
   const opening=balance,grossInterest=r*opening,grossPayment=payment*survival;
   const scheduled=t===months?opening:Math.min(opening,Math.max(0,grossPayment-grossInterest));
   const extra=s*(opening-scheduled),principalPaid=scheduled+extra,paidFee=f*opening,investorInterest=grossInterest-paidFee,cash=principalPaid+investorInterest;
   balance=t===months?0:Math.max(0,opening-principalPaid);
   const present=cash/(1+y)**t;pv+=present;interest+=grossInterest;fees+=paidFee;netInterest+=investorInterest;capital+=principalPaid;wal+=t/12*principalPaid/principal;
   rows.push({month:t,opening,grossPayment:grossInterest+scheduled,grossInterest,scheduled,extra,fee:paidFee,investorInterest,principal:principalPaid,cash,ending:balance,pv:present});
   points.push([t/12,opening],[t/12,balance]);survival*=1-s;
  }
  return {rows,points,pv,interest,fees,netInterest,capital,wal,ending:balance};
 };
 return {payment,smm,without:schedule(0),with:schedule(smm)};
}
add('mortgage','Hypothekenpool: planmäßige und zusätzliche Tilgung','Vergleiche denselben homogenen Festzinspool ohne Prepayment und mit konstant angenommener CPR. Kapital, Zins und Gebühren bleiben getrennt.',[
 field('principal','Anfangskapital (WE)',100,1000000,100,100000),
 field('coupon','Vertragszins (% p. a., nominal)',0,15,.05,6),
 field('months','Verbleibende Monatszahlungen',1,360,1,360),
 field('cpr','Konstante jährliche CPR (%)',0,50,.1,12),
 field('fee','Laufende Gebühr (% p. a.)',0,2,.01,.5),
 field('discount','Diskontsatz (% p. a., nominal)',0,20,.01,5.5)
],p=>{
 const v=mortgagePoolPlan(p),a=v.without,b=v.with,curves=[{name:'Ohne vorzeitige Rückzahlung',color:'#ba6824',dash:true,points:a.points},{name:'Mit der eingegebenen konstanten CPR',color:'#087e82',points:b.points}];
 const out=result([['Anfängliche Brutto-Monatsrate (WE)',v.payment],['Anlegerbarwert ohne Prepayment (WE)',a.pv],['Anlegerbarwert mit CPR (WE)',b.pv],['Kapitaldauer ohne Prepayment (Jahre)',a.wal],['Kapitaldauer mit CPR (Jahre)',b.wal],['Anlegerzins gesamt ohne Prepayment (WE)',a.netInterest],['Anlegerzins gesamt mit CPR (WE)',b.netInterest],['Aus CPR abgeleitete monatliche SMM (%)',v.smm*100],['Kapitalrückzahlung gesamt mit CPR (WE)',b.capital]],curves[0].points,'Zeit seit Start des Vergleichs (Jahre)','Ausstehendes Poolkapital (WE)','Eigener homogener Pool gleicher vollständig amortisierender Festzinskredite mit derselben Restlaufzeit. Alle Zins- und Diskontsätze sind nominale Jahresquoten, Monatsfaktor jeweils ein Zwölftel; keine Effektivjahres- oder Tageszählungsumrechnung. Nachschüssige Monatszahlung, keine Zahlungsverschiebung, Steuern, Ausfälle oder Garantiezahlungen. Die CPR wird über Überlebensfaktoren in SMM umgerechnet und nach der planmäßigen Tilgung auf das verbleibende Kapital angewandt. Eine proportionale Teilgruppe ganzer gleicher Kredite zahlt dann vollständig zurück. Die Rate je verbleibendem Einzelkredit bleibt fest; die gesamte Poolrate sinkt mit den ausgeschiedenen Krediten. Dies ist kein Modell unverändert hoher Poolraten bei Teiltilgung eines einzelnen Kredits. Die Gebühr ist die eingegebene jährliche Quote geteilt durch zwölf auf das Monatsanfangskapital; sie mindert nur den Anlegerzins. Sie darf hier den Vertragszins nicht übersteigen. Alles planmäßig und zusätzlich zurückgezahlte Kapital wird am selben Monatsende weitergegeben. Keine Wiederanlage der Anlegerzahlungen, Reserve, Tranchierung, PSA-Rampe oder zustandsabhängige Refinanzierungsentscheidung. Die CPR bleibt beim Ändern des Diskontsatzes fest: Die Preisvergleiche sind keine vollständige Optionsbewertung oder effektive MBS-Duration. Gezeichnete Stufen zeigen Bestand vor und nach jedem Zahlungstermin. Intern wird nicht auf Cent gerundet; die Anzeige rundet unabhängig.');
 out.series=curves;out.yRange=[0,p.principal*1.02];
 out.projection={collapsible:true,summary:'Vollständiger monatlicher Zahlungsplan mit CPR',caption:'Eigener Monatsledger in WE mit der eingegebenen CPR; Bruttorate ohne Extra, Tilgung und Kapitalbestand jeweils getrennt. Anzeige gerundet, Berechnung ungerundet.',headers:['Monat','Anfangskapital','Bruttorate','Bruttozins','Plan-Tilgung','Extra-Tilgung','Gebühr','Anlegerzins','Anlegercash','Endkapital','Barwert'],rows:b.rows.map(r=>[r.month,r.opening,r.grossPayment,r.grossInterest,r.scheduled,r.extra,r.fee,r.investorInterest,r.cash,r.ending,r.pv])};
 out.stable={caption:'Getrennte Gesamtvergleiche derselben Anfangsschuld und Vertragsdaten. Die Kapitaldauer gewichtet ausschließlich Kapital, nicht Zins.',headers:['Größe','Ohne Prepayment','Mit eingegebener CPR'],rows:[['Ursprüngliches Poolkapital (WE)',p.principal,p.principal],['Summe Kapitalrückzahlungen (WE)',a.capital,b.capital],['Summe Bruttozinsen (WE)',a.interest,b.interest],['Summe Gebühren (WE)',a.fees,b.fees],['Summe Anlegerzins (WE)',a.netInterest,b.netInterest],['Summe Anlegercash (WE)',a.capital+a.netInterest,b.capital+b.netInterest],['Anlegerbarwert (WE)',a.pv,b.pv],['Kapitaldauer (Jahre)',a.wal,b.wal],['Endkapital nach letztem Monat (WE)',a.ending,b.ending]]};
 return out;
});
models.mortgage.presets=[
 {label:'Basis: zwölf Prozent CPR',values:{principal:100000,coupon:6,months:360,cpr:12,fee:.5,discount:5.5}},
 {label:'Nur CPR auf null setzen',values:{principal:100000,coupon:6,months:360,cpr:0,fee:.5,discount:5.5}},
 {label:'Nur CPR auf 24 Prozent erhöhen',values:{principal:100000,coupon:6,months:360,cpr:24,fee:.5,discount:5.5}},
 {label:'Nur Diskontsatz auf drei Prozent',values:{principal:100000,coupon:6,months:360,cpr:12,fee:.5,discount:3}},
 {label:'Nur Diskontsatz auf acht Prozent',values:{principal:100000,coupon:6,months:360,cpr:12,fee:.5,discount:8}},
 {label:'Nullzins und keine Gebühr',values:{principal:100000,coupon:0,months:360,cpr:12,fee:0,discount:0}},
 {label:'Zwei Monate vollständig nachrechnen',values:{principal:1000,coupon:12,months:2,cpr:0,fee:.24,discount:11.76}}
];
add('hedgeuse','Hedgerichtung, Menge und Basis gemeinsam beurteilen','Wähle Einkauf mit Long-Hedge oder Verkauf mit Short-Hedge. Verglichen werden der physische Cashbetrag ohne Hedge und der Nettoaufwand beziehungsweise Nettoerlös mit Hedge. Die Basis ist Kassapreis minus Futurespreis.',[{...field('side','Physischer Bedarf und Hedgerichtung',0,1,1,0),choices:[{value:0,label:'Einkauf / Long-Futures-Hedge'},{value:1,label:'Verkauf / Short-Futures-Hedge'}]},field('physical','Tatsächliche physische Menge',0,1000,1,100),field('hedge','Abgesicherte Einheiten (inkl. Multiplikator)',0,1500,1,100),field('initial','Futurespreis beim Hedge-Start',20,200,1,80),field('terminal','Futurespreis beim Auflösen',20,200,1,100),field('basis','Endbasis: Kassa minus Future',-20,20,1,5),field('cost','Pauschale Hedge-Kosten (WE insgesamt)',0,1000,.5,0)],p=>{
 const d=p.side===0?1:-1,spot=p.terminal+p.basis,physical=p.physical*spot,gain=d*p.hedge*(p.terminal-p.initial),net=physical-d*gain+d*p.cost,clean=x=>x===0?0:x,netAt=f=>p.physical*(f+p.basis)-p.hedge*(f-p.initial)+d*p.cost,series=[{name:p.side===0?'Nettoaufwand mit Hedge':'Nettoerlös mit Hedge',points:seq(20,200,f=>clean(netAt(f)),180)},{name:p.side===0?'Einkauf ohne Hedge':'Verkauf ohne Hedge',dash:true,points:seq(20,200,f=>p.physical*(f+p.basis),180)}];
 const metrics=[[p.side===0?'Netto-Cashaufwand mit Hedge':'Netto-Casherlös mit Hedge',clean(net)],['Derivateergebnis (+ Gewinn / − Verlust)',clean(gain)],['Physischer Betrag vor Hedge',physical],['Restmenge (physisch minus Hedge)',clean(p.physical-p.hedge)],...(p.physical>0?[[p.side===0?'Nettoaufwand je physischer Einheit':'Nettoerlös je physischer Einheit',clean(net/p.physical)]]:[])];
 const out=result(metrics,series[0].points,'Futurespreis beim Auflösen (WE je Einheit)',p.side===0?'Cashaufwand (WE insgesamt)':'Casherlös (WE insgesamt)','Eigener vereinfachter Endvergleich: Basis = Kassapreis minus Futurespreis; gleiche Einheiten und Auflösungstermine, vollständige Erfüllung. Die Kurven ändern nur den letzten Futurespreis und halten Basis und Mengen fest. Eine passende Menge fixiert deshalb die Basis nicht. Kosten sind ein vorgegebener pauschaler Gesamtbetrag; keine tägliche Margin-, Finanzierungs-, Ausfall- oder Steuerrechnung. Ohne Hedge zeigt die Vergleichskurve keine Hedge-Kosten. Der Netto-Cashbetrag ist kein Unternehmensgewinn: Produktionskosten und andere Zahlungsströme fehlen. Bei physischer Menge null wird kein Betrag je Einheit ausgegeben. Negative Restmenge bedeutet Übersicherung; ein negativer Nettoaufwand bezeichnet einen Nettoeingang, ein negativer Nettoerlös eine Nettoausgabe. Preise und Mengenbereiche sind gewählte Eingabegrenzen.');
 out.series=series;out.marker=[p.terminal,clean(net)];out.projection={caption:'Tatsächliche Zahlungsrichtungen: positiv bedeutet Geldeingang, negativ Geldausgang; ungezinst über den gesetzten Vergleich addiert.',headers:['Bestandteil','Zahlung (WE)','Bedeutung'],rows:[['Physisches Geschäft',clean(-d*physical),p.side===0?'Kassaeinkauf bezahlen':'Kassaverkauf vereinnahmen'],['Futures-Hedge',clean(gain),'Addiertes Vertragsergebnis, keine separate Marginhinterlegung'],['Pauschale Kosten',clean(-p.cost),'Vorgegebener Gesamtbetrag'],['Gesamt-Cashsaldo',clean(-d*net),p.side===0?'Gegenbetrag des angezeigten Nettoaufwands':'Entspricht dem angezeigten Nettoerlös']]};return out;
});
models.hedgeuse.presets=[
 {label:'Einkauf: passende Menge',values:{side:0,physical:100,hedge:100,initial:80,terminal:100,basis:5,cost:0}},
 {label:'Nur letzter Futurespreis niedriger',values:{side:0,physical:100,hedge:100,initial:80,terminal:60,basis:5,cost:0}},
 {label:'Nur Basis stärker',values:{side:0,physical:100,hedge:100,initial:80,terminal:100,basis:15,cost:0}},
 {label:'Nur halbe Menge absichern',values:{side:0,physical:100,hedge:50,initial:80,terminal:100,basis:5,cost:0}},
 {label:'Nur Hedge-Menge erhöhen',values:{side:0,physical:100,hedge:150,initial:80,terminal:100,basis:5,cost:0}},
 {label:'Verkauf: passende Short-Sicherung',values:{side:1,physical:100,hedge:100,initial:80,terminal:100,basis:5,cost:0}},
 {label:'Bedarf entfällt, Long-Hedge bleibt',values:{side:0,physical:0,hedge:100,initial:80,terminal:60,basis:5,cost:0}},
 {label:'Nur Kosten auf 200 setzen',values:{side:0,physical:100,hedge:100,initial:80,terminal:100,basis:5,cost:200}}
];
add('fra','Forwardzins, FRA-Wert und spätere Kreditabsicherung','Die heutige Zinskurve bestimmt den implizierten Forwardzins und den Wert des bestehenden Pay-fixed-FRA. Ein getrennt gewählter späterer Referenzzins bestimmt den möglichen Reset-Cashflow; er ist keine Prognose der heutigen Kurve.',[
 field('n','Nominalbetrag (WE)',0,10000000,1000,1000000),
 field('start','Beginn T₁ (Jahre ab heute)',.25,3,.25,1),
 field('tenor','Zinsperiodenbruch δ (Jahre)',.25,2,.25,1),
 field('z1','Effektive Jahres-Spotrate bis T₁ (%)',-5,15,.25,4),
 field('z2','Effektive Jahres-Spotrate bis T₂ (%)',-5,15,.25,5),
 field('k','Fester FRA-Zins K (% einfach jährlich)',-15,50,.25,5),
 field('fix','Szenario: späterer Referenzzins L (%)',-15,50,.25,7)
],p=>{
 const clean=x=>Object.is(x,-0)?0:x,T2=p.start+p.tenor,k=p.k/100,L=p.fix/100,df1=(1+p.z1/100)**-p.start,df2=(1+p.z2/100)**-T2;
 // Exact flat, one-year identity avoids a fictitious signed rounding residual.
 const f=clean(p.z1===p.z2&&p.tenor===1?p.z1/100:Math.expm1(T2*Math.log1p(p.z2/100)-p.start*Math.log1p(p.z1/100))/p.tenor);
 const value=clean(p.n*p.tenor*df2*(f-k)),terminal=clean(p.n*p.tenor*(L-k)),reset=clean(terminal/(1+L*p.tenor)),interest=clean(p.n*p.tenor*L),net=clean(interest-terminal);
 const series=[{name:'FRA-Startzahlung bei T₁',points:seq(-15,50,x=>clean(p.n*p.tenor*(x/100-k)/(1+x/100*p.tenor))/1000,260)},{name:'Endwertäquivalent bei T₂',dash:true,points:seq(-15,50,x=>clean(p.n*p.tenor*(x/100-k))/1000,260)}];
 const out=result([['Heute: implizierter Forwardzins (%)',100*f],['Heute: Pay-fixed-Vertragswert (WE)',value],['Szenario: FRA-Startzahlung (WE)',reset],['Szenario: Endwertäquivalent (WE)',terminal],['Szenario: variable Kreditzinsen (WE)',interest],['Ab T₁: Nettozins mit vorhandenem FRA (WE)',net]],series[0].points,'Späterer Referenzzins L (% einfach jährlich)','FRA-Zahlung / Äquivalent (Tsd. WE)','Stilisiertes, vorschüssig festgelegtes und zu T₁ bar ausgeglichenes Pay-fixed/Receive-floating-FRA, Nominalbetrag im FRA nicht ausgetauscht. Die zwei Kurven zeigen denselben Anspruch zu verschiedenen Zeitpunkten: Startzahlung und bis T₂ aufgezinstes Äquivalent dürfen nicht addiert werden. Die Geldkennzahlen sind WE; die Grafik verwendet tausend WE. Heutige Kurvenannahmen und späteres Fixing-Szenario werden getrennt gewählt. Der gemeinsame Kreditpfad beginnt bei T₁ und setzt den FRA als vorhanden voraus. Ein etwaiger heutiger Kaufpreis oder Wertausgleich ist in der Periodenzinslast nicht enthalten und wird im Buch gesondert erklärt. Nur zwei positive Diskontfaktoren aus effektiven Jahres-Spotraten; einheitliche modellierte Jahresbasis, keine automatische Kalender-/Banktagsberechnung. Zwischenpunkte der gesamten heutigen Kurve werden nicht erfunden. Single-curve-Replikation ohne Kreditspread, Kosten, Margin, Ausfall oder unterschiedliche Referenz-/Fundingbedingungen. Die Nettozinsfixierung setzt voraus, dass reale Kreditverzinsung, FRA-Referenz und Anlage/Finanzierung des frühen Ausgleichs zum selben L und Periodenbruch passen. Sonst verbleiben Risiken. Negative Sätze sind innerhalb positiver Aufzinsungsfaktoren möglich. Moderne nachschüssig beobachtete Referenzkonventionen verlangen ihren tatsächlichen Zahlungsplan. Die Werteachse wird nicht zwangsweise bei null begonnen.');
 out.series=series;out.marker=[p.fix,reset/1000];const ys=series.flatMap(s=>s.points.map(p=>p[1])),lo=Math.min(...ys),hi=Math.max(...ys),pad=Math.max((hi-lo)*.06,1);out.yRange=[lo-pad,hi+pad];
 out.projection={caption:'Heutige Kurvenstützstellen: T₂ ist Beginn plus Periodenbruch. Der implizierte einfache Forwardzins wird aus DF₁ geteilt durch DF₂ abgeleitet; er ist keine tatsächliche spätere Fixingbeobachtung.',headers:['Stützstelle','Jahre ab heute','Effektive Jahres-Spotrate (%)','Heutiger Diskontfaktor'],rows:[['Beginn T₁',p.start,clean(p.z1),df1],['Ende T₂',T2,clean(p.z2),df2]]};
 out.stable={caption:'Späteres, vollständig passendes Kreditszenario aus Sicht des Kreditnehmers: positiv ist Cashzufluss, negativ Abfluss. Der frühe FRA-Ausgleich wird angelegt oder finanziert; ein Endwertäquivalent ist keine zweite FRA-Zahlung.',headers:['Bestandteil','Cash bei T₁ (WE)','Cash bei T₂ (WE)','Bedeutung'],rows:[
  ['Realer variabler Kredit',clean(p.n),clean(-p.n*(1+L*p.tenor)),'Kapitalaufnahme und spätere Rückzahlung mit Referenzzins.'],
  ['Vorschüssig erfüllter FRA',reset,0,'Einmalige Startzahlung; danach im Modell erledigt.'],
  ['FRA-Cash anlegen oder finanzieren',clean(-reset),terminal,'Früher Zufluss wird angelegt; früher Abfluss zum gleichen Satz finanziert.'],
  ['Gemeinsamer abgeschlossener Kreditpfad',clean(p.n),clean(-p.n*(1+k*p.tenor)),'Das FRA tauscht kein Kapital; die gemeinsame Zinsbelastung folgt dem Festzins auf passende Basis und Periode.']
 ]};
 out.fra={df1,df2,forward:f,reset,terminal,interest,net,T2};return out;
});
models.fra.presets=[
 {label:'Grundfall: späterer Zins sieben Prozent',values:{n:1000000,start:1,tenor:1,z1:4,z2:5,k:5,fix:7}},
 {label:'Nur späterer Zins fällt auf drei Prozent',values:{n:1000000,start:1,tenor:1,z1:4,z2:5,k:5,fix:3}},
 {label:'Nur Nominalbetrag verdoppeln',values:{n:2000000,start:1,tenor:1,z1:4,z2:5,k:5,fix:7}},
 {label:'Nur kürzere Zinsperiode: ein halbes Jahr',values:{n:1000000,start:1,tenor:.5,z1:4,z2:5,k:5,fix:7}},
 {label:'Nur heutige Kurve flach auf vier Prozent',values:{n:1000000,start:1,tenor:1,z1:4,z2:4,k:5,fix:7}},
 {label:'Nur alter Festzins steigt auf sieben Prozent',values:{n:1000000,start:1,tenor:1,z1:4,z2:5,k:7,fix:7}},
 {label:'Negative Zinsen mit passender Jahresquote',values:{n:1000000,start:1,tenor:1,z1:-1,z2:-1,k:-1,fix:-2}},
 {label:'Kein Nominalbetrag, kein Geldexposure',values:{n:0,start:1,tenor:1,z1:4,z2:5,k:5,fix:7}}
];
add('futuresstates','Forward und Future: Zahlungszeitpunkte und Zinszustände','Ein eigenes Zwei-Zustände-Modell leitet beide fairen Quoten aus denselben Annahmen ab. Bei Termin eins werden Endpreis und zweiter Periodenzins bekannt; der Future zahlt dann die ganze Variation. Der Forward zahlt erst bei Termin zwei.',[
 field('sa','Endpreis in Zustand A (WE je Einheit)',60,180,5,120),
 field('sb','Endpreis in Zustand B (WE je Einheit)',20,140,5,80),
 field('p','Risikoneutrales Bewertungsgewicht A (%)',10,90,5,50),
 field('ra','Zweiter Periodenzins in A (%)',-5,20,.5,10),
 field('rb','Zweiter Periodenzins in B (%)',-5,20,.5,0),
 field('qty','Gesamte Einheitenmenge Q',0,1000,10,100)
],p=>{
 const clean=x=>Object.is(x,-0)?0:x,w=p.p/100,da=1/(1+p.ra/100),db=1/(1+p.rb/100),mean=w*da+(1-w)*db,g=w*p.sa+(1-w)*p.sb,k=p.ra===p.rb||p.sa===p.sb?g:(w*da*p.sa+(1-w)*db*p.sb)/mean,spot=(w*da*p.sa+(1-w)*db*p.sb)/1.04,a=clean(p.qty*(p.sa-g)),b=clean(p.qty*(p.sb-g));
 const series=[{name:'Faire Futuresquote',dash:true,points:seq(-5,20,()=>g,100)},{name:'Faire Forwardquote',points:seq(-5,20,x=>{const d=1/(1+x/100);return x===p.rb||p.sa===p.sb?g:(w*d*p.sa+(1-w)*db*p.sb)/(w*d+(1-w)*db);},100)}],ys=series.flatMap(s=>s.points.map(v=>v[1])),lo=Math.min(...ys),hi=Math.max(...ys),pad=Math.max(1,(hi-lo)*.12);
 const out=result([['Faire Futuresquote (WE je Einheit)',g],['Faire Forwardquote (WE je Einheit)',k],['Futuresquote minus Forwardquote (WE je Einheit)',clean(g-k)],['Konsistenter heutiger Spot (WE je Einheit)',spot],['Futurescash bei T₁ in A (WE)',a],['Futurescash bei T₁ in B (WE)',b]],series[0].points,'Zweiter Periodenzins in A (%)','Faire Quote (WE je Einheit)','Termine T₀=0, T₁=1, T₂=2; erster Periodenzins sicher vier Prozent. Ab T₁ sind Endpreis und Zinssatz des jeweiligen Zustands sicher. Daher entsteht bei T₂ keine weitere Futuresvariation. Keine Erträge, Spreads, Margin- oder Handelskosten und Ausfälle. Die Gewichte sind risikoneutrale Bewertungsgewichte, keine realen Prognosen. Heutiger Spot und Zero-Bond-Preis werden konsistent abgeleitet. Die Kurve variiert nur den A-Zins; B-Zins und übrige Eingaben bleiben fest. Negative Zinsen sind bei positiven Faktoren zulässig. Einheitenmenge skaliert Geldzahlungen, nicht faire Stückquoten. Geld wird ungerundet berechnet und gerundet angezeigt.');
 out.series=series;out.marker=[p.ra,k];out.yRange=[lo-pad,hi+pad];
 out.projection={caption:'Dieselben beiden Zustände; die Faktoren der ersten beiden Zeilen diskontieren von T₂ nach T₁. Die letzte Zeile nennt dagegen den heutigen Zero-Bond-Preis: gewichtetes Faktormittel geteilt durch 1,04.',headers:['Zustand / Anspruch','Bewertungsgewicht','Zweiter Periodenzins (%)','Zustandsfaktor / heutiger Preis'],rows:[['A',w,p.ra,da],['B',1-w,p.rb,db],['Heutiger Zero-Bond-Preis P₀(2)','—','—',mean/1.04]]};
 out.stable={caption:'Position Q: Positiv bedeutet Zufluss, negativ Abfluss. Futurescash bei T₁ und sein finanzierter Endwert bei T₂ sind dieselbe Wirkung zu zwei Terminen, keine addierbaren Gewinne. Die Forwardzahlung erfolgt ausschließlich bei T₂.',headers:['Zustand','Endpreis je Einheit','Futurescash T₁ (WE)','Finanzierter Endwert T₂ (WE)','Forwardcash T₂ (WE)'],rows:[['A',p.sa,a,a*(1+p.ra/100),clean(p.qty*(p.sa-k))],['B',p.sb,b,b*(1+p.rb/100),clean(p.qty*(p.sb-k))]]};
 return out;
});
models.futuresstates.presets=[
 {label:'Grundfall: hoher Preis, hoher Zins',values:{sa:120,sb:80,p:50,ra:10,rb:0,qty:100}},
 {label:'Verbindung umkehren: Zinsen tauschen',values:{sa:120,sb:80,p:50,ra:0,rb:10,qty:100}},
 {label:'Nur A-Zins auf null: gleiche Zinsen',values:{sa:120,sb:80,p:50,ra:0,rb:0,qty:100}},
 {label:'Nur A-Endpreis auf achtzig: gleicher Preis',values:{sa:80,sb:80,p:50,ra:10,rb:0,qty:100}},
 {label:'Nur Menge verdoppeln',values:{sa:120,sb:80,p:50,ra:10,rb:0,qty:200}},
 {label:'Nur Bewertungsgewicht A erhöhen',values:{sa:120,sb:80,p:75,ra:10,rb:0,qty:100}},
 {label:'Nur A-Zins negativ',values:{sa:120,sb:80,p:50,ra:-5,rb:0,qty:100}},
 {label:'Nur Menge null',values:{sa:120,sb:80,p:50,ra:10,rb:0,qty:0}}
];
add('swapvalue','Swaprate, beide Zinsbeine und bestehender Marktwert','Lehrbewertung unmittelbar vor dem ersten Referenzfixing: Alle drei jährlichen Coupons sind noch zu bestimmen. Diskontfaktoren, alter Festzins, Menge und Projektionsaufschlag lassen sich kontrolliert vergleichen. Bereits bekannte Coupons behandelt der eigene Buchabschnitt gesondert.',[
 field('n','Konstanter Nominalbetrag (WE)',0,10000000,1000,1000000),
 field('k','Alter fester Jahreszins (%)',-5,15,.25,4),
 field('p1','Diskontfaktor bis Jahr eins',.5,1.2,.000001,.97),
 field('p2','Diskontfaktor bis Jahr zwei',.5,1.2,.000001,.93),
 field('p3','Diskontfaktor bis Jahr drei',.5,1.2,.000001,.88),
 field('basis','Nur Projektionsaufschlag (Basispunkte)',-200,200,10,0)
],p=>{
 const clean=x=>Object.is(x,-0)?0:x,ps=[p.p1,p.p2,p.p3],a=ps.reduce((s,x)=>s+x,0),b=p.basis/10000,k=p.k/100,fs=ps.map((x,i)=>(i?ps[i-1]:1)/x-1+b),unitFloat=ps.reduce((s,x,i)=>s+x*fs[i],0),fair=unitFloat/a,float=clean(p.n*unitFloat),fixed=clean(p.n*k*a),value=clean(float-fixed);
 const shock=h=>{const d=ps.map((x,i)=>x*Math.exp(-h/100*(i+1))),A=d.reduce((s,x)=>s+x,0);return clean(p.n*(1-d[2]+(b-k)*A))/1000;},series=[{name:'Pay-fixed / Receive-floating',points:seq(-2,2,shock,100)},{name:'Receive-fixed / Pay-floating',dash:true,points:seq(-2,2,h=>clean(-shock(h)),100)}],ys=series.flatMap(s=>s.points.map(p=>p[1])),lo=Math.min(...ys),hi=Math.max(...ys),pad=Math.max(1,(hi-lo)*.08);
 const out=result([['Heute faire feste Jahresrate (%)',fair*100],['Bestehender Pay-fixed-Wert (WE)',value],['Barwert variabler Zinsen (WE)',float],['Barwert fester Zinsen (WE)',fixed],['Rentenbarwertfaktor A',a],['Mehrbelastung bei Festzins +1 bp (WE)',clean(p.n*a/10000)]],series[0].points,'Gemeinsamer stetiger Zero-Schock (Prozentpunkte)','Neuer Swapwert (Tsd. WE)','Eigener Dreijahres-Lehrswap, drei volle jährliche Perioden mit identischen fixen und variablen Zahlungsplänen; kein Kapitalaustausch. Grundprojektion aus derselben Faktorfolge, plus ausdrücklich separat gesetzter jährlicher Projektionsaufschlag. Dieser Zusatz ist eine Sensitivitätsvorgabe, keine kalibrierte Markt-Mehrkurvenstruktur. Werte größer eins und steigende Faktoren sind bei negativen Forwardraten zulässig. Die Schockkurve verändert alle Faktoren mit demselben stetigen Zero-Schock und leitet die Basisprojektion daraus neu ab; der Zusatzaufschlag bleibt gleich. Nominal, alter Festzins und Jahresbrüche bleiben unverändert. Kennzahlen in WE, Kurve in tausend WE. Letzte Kennzahl betrifft einen Basispunkt mehr festen Vertragszins bei festgehaltenem Markt, keine vollständige parallele Kurven-DV01. Keine bekannten alten Resetbeträge, Gebühren, Ausfälle, Sicherheiten- oder Kapitalwechsel; diese Grenzen werden im Buch erläutert.');
 out.series=series;out.marker=[0,value/1000];out.yRange=[lo-pad,hi+pad];
 out.projection={caption:'Jede Zeile ist eine volle jährliche Periode. Projiziertes Cash beschreibt Bewertungsbausteine, keine garantierten späteren Referenzrealisationen. Positive Nettozahlung bedeutet Zufluss für Pay-fixed. Anzeige gerundet, Rechnung ungerundet.',headers:['Jahr','Diskontfaktor','Projektion (% jährlich)','Barwertgewicht','Variable Zinsen (WE)','Feste Zinsen (WE)','Netto (WE)','Nettobarwert (WE)'],rows:ps.map((x,i)=>[i+1,x,fs[i]*100,x/a,clean(p.n*fs[i]),clean(p.n*k),clean(p.n*(fs[i]-k)),clean(p.n*(fs[i]-k)*x)])};
 out.stable={caption:'Beine enthalten ausschließlich Zinsen. Die hypothetische gleiche Endkapitalzahlung der Anleihenreplikation würde sich herauskürzen und wird hier nicht als echtes zusätzliches Swapcash dargestellt.',headers:['Bestandteil','Heutiger Wert (WE)','Bedeutung'],rows:[['Variabler Empfang',float,'Passend projizierte Referenzzinsen'],['Feste Zahlung',fixed,'Alter Festzins auf allen drei Perioden'],['Pay-fixed netto',value,'Variabel minus fest'],['Receive-fixed netto',clean(-value),'Gegenrichtung im symmetrischen Lehrfall']]};return out;
});
models.swapvalue.presets=[
 {label:'Grundfall: alter Festzins vier Prozent',values:{n:1000000,k:4,p1:.97,p2:.93,p3:.88,basis:0}},
 {label:'Nur alter Festzins fünf Prozent',values:{n:1000000,k:5,p1:.97,p2:.93,p3:.88,basis:0}},
 {label:'Nur Nominal verdoppeln',values:{n:2000000,k:4,p1:.97,p2:.93,p3:.88,basis:0}},
 {label:'Nur Projektion +100 Basispunkte',values:{n:1000000,k:4,p1:.97,p2:.93,p3:.88,basis:100}},
 {label:'Nur letzter Faktor steigt auf 0,93',values:{n:1000000,k:4,p1:.97,p2:.93,p3:.93,basis:0}},
 {label:'Flache Kurve: gleicher Einjahresfaktor 0,96',values:{n:1000000,k:4,p1:.96,p2:.9216,p3:.884736,basis:0}},
 {label:'Negative Raten und negativer Festzins',values:{n:1000000,k:-1,p1:1.01,p2:1.02,p3:1.03,basis:0}},
 {label:'Nur Nominal null',values:{n:0,k:4,p1:.97,p2:.93,p3:.88,basis:0}}
];
// European, stock-style premium; decimal continuous rates and proportional income yield.
function europeanOption(s,k,r,q,v,t){
 const a=s*Math.exp(-q*t),b=k*Math.exp(-r*t),ic=Math.max(s-k,0),ip=Math.max(k-s,0);
 let call,put;
 if(t===0){call=ic;put=ip;}
 else if(v===0){call=Math.max(a-b,0);put=Math.max(b-a,0);}
 else{
  const z=v*Math.sqrt(t),d1=(Math.log(s/k)+(r-q+.5*v*v)*t)/z,d2=d1-z;
  // Price the out-of-the-money forward side directly, then use parity.
  // This avoids cancellation of two large ITM legs; clamp only CDF round-off.
  if(a<=b){call=Math.max(0,Math.min(a,a*cdf(d1)-b*cdf(d2)));put=call-a+b;}
  else{put=Math.max(0,Math.min(b,b*cdf(-d2)-a*cdf(-d1)));call=put+a-b;}
 }
 return {call,put,ic,ip,tc:call-ic,tp:put-ip,a,b,lc:Math.max(a-b,0),lp:Math.max(b-a,0),uc:a,up:b};
}
add('optionvalue','Optionswert, Ausübungswert und Zeitwert','Europäische Aktienoptionen vor und am Ablauf vergleichen. Sechs Eingaben verändern jeweils einen klar bezeichneten Werttreiber; Prämienfinanzierung, frühe Ausübung und diskrete Dividendentermine sind nicht Bestandteil dieses Modells.',[
 field('s','Heutiger Aktienkurs (WE)',10,250,1,100),field('k','Ausübungspreis (WE)',10,250,1,100),
 field('r','Stetiger Zins (% jährlich)',-5,15,.25,5),field('q','Stetige Ausschüttungsrendite (% jährlich)',0,15,.25,0),
 field('v','Volatilität (% jährlich)',0,80,1,20),field('t','Restlaufzeit (Jahre)',0,5,.05,1)
],p=>{
 const run=s=>europeanOption(s,p.k,p.r/100,p.q/100,p.v/100,p.t),o=run(p.s),curves=[
  {name:'Europäischer Callwert',color:'#087e82',points:seq(10,250,s=>run(s).call,100)},
  {name:'Call-Ausübungswert',color:'#d56718',dash:true,points:seq(10,250,s=>Math.max(s-p.k,0),100)},
  {name:'Europäischer Putwert',color:'#5c5fc1',points:seq(10,250,s=>run(s).put,100)},
  {name:'Put-Ausübungswert',color:'#c0485c',dash:true,points:seq(10,250,s=>Math.max(p.k-s,0),100)}
 ],values=curves.flatMap(c=>c.points.map(x=>x[1])),hi=Math.max(1,...values);
 const out=result([['Europäischer Callwert (WE)',o.call],['Europäischer Putwert (WE)',o.put],['Call-Ausübungswert (WE)',o.ic],['Put-Ausübungswert (WE)',o.ip],['Call-Zeitwert (WE)',o.tc],['Put-Zeitwert (WE)',o.tp]],curves[0].points,'Heutiger Aktienkurs (WE)','Wert je Aktienrecht (WE)','Black–Scholes–Merton mit konstanter stetiger Ausschüttungsrendite, Volatilität und Zins; keine diskreten Dividenden, Sprünge, Gebühren oder amerikanische Ausübung. Kein Prognosemodell für tatsächliche Gewinne. Die Kurve variiert nur den heutigen Aktienkurs. Ausübungswert bedeutet hypothetischer Sofortwert; das europäische Recht erlaubt heute keine Ausübung. Zeitwert ist die Differenz zum Spot-Ausübungswert und kann negativ sein. Die obere Putgrenze ist der Barwert des Strikes, auch bei negativem Zins. Bei Laufzeit null gilt der Endauszahlungswert; bei Volatilität null die diskontierte sichere Endzahlung. Alle Werte je einzelner Aktienrechtseinheit, keine feste Annahme über die Kontraktgröße.');
 out.series=curves;out.marker=[p.s,o.call];out.yRange=[0,hi*1.06];
 out.projection={caption:'Zerlegung und arbitragefreie europäische Grenzen beziehen sich auf dieselbe heutige Option und dieselben Annahmen. Negativer Zeitwert ist kein negativer Gesamtpreis.',headers:['Option','Modellwert (WE)','Ausübungswert (WE)','Zeitwert (WE)','Untere Grenze (WE)','Obere Grenze (WE)'],rows:[['Call',o.call,o.ic,o.tc,o.lc,o.uc],['Put',o.put,o.ip,o.tp,o.lp,o.up]]};
 out.stable={caption:'Zeitwert und Diskontierung nicht verwechseln. Die Faktoren bewerten den späteren Aktienerhalt und die spätere Strikezahlung; der heutige Spot-Ausübungswert verwendet dagegen den unverschobenen Kurs und Strike.',headers:['Baustein','Heutiger Wert (WE)','Bedeutung'],rows:[['Vorab bezahlter Aktienerhalt',o.a,'Heutiger Kurs mal Faktor der stetigen Ausschüttungsrendite'],['Strike am Endtermin',o.b,'Heutiger Barwert der späteren Strikezahlung'],['Call minus Put',o.call-o.put,'Kontrolle: Aktienerhalt minus Strikebarwert']]};return out;
});
models.optionvalue.presets=[
 {label:'Grundfall: am Geld',values:{s:100,k:100,r:5,q:0,v:20,t:1}},
 {label:'Nur Aktienkurs 120',values:{s:120,k:100,r:5,q:0,v:20,t:1}},
 {label:'Nur Strike 120',values:{s:100,k:120,r:5,q:0,v:20,t:1}},
 {label:'Nur Volatilität 40 %',values:{s:100,k:100,r:5,q:0,v:40,t:1}},
 {label:'Nur Laufzeit zwei Jahre',values:{s:100,k:100,r:5,q:0,v:20,t:2}},
 {label:'Nur Ausschüttungsrendite 5 %',values:{s:100,k:100,r:5,q:5,v:20,t:1}},
 {label:'Nur Zins 10 %',values:{s:100,k:100,r:10,q:0,v:20,t:1}},
 {label:'Tiefer ITM-Put: negativer Zeitwert',values:{s:20,k:100,r:5,q:0,v:10,t:1}},
 {label:'Negativzins: Call unter Ausübungswert',values:{s:180,k:100,r:-5,q:0,v:5,t:1}},
 {label:'Nur Restlaufzeit null',values:{s:100,k:100,r:5,q:0,v:20,t:0}},
 {label:'Nur Volatilität null',values:{s:100,k:100,r:5,q:0,v:0,t:1}}
];
add('parity','Put-Call-Parität: gleiche Endleistung, zwei heutige Paketpreise','Europäische Rechte mit identischem Basiswert, Strike und Endtermin. Call und Put sind unabhängige hypothetische Preisangaben. Vergleiche die beiden Pakete und prüfe zusätzlich ihre Einzelpreisgrenzen.',[
 field('s','Heutiger Aktienkurs (WE je Aktie)',25,250,1,105),
 field('k','Gemeinsamer Strike (WE je Aktie)',25,250,1,100),
 field('d','Diskontfaktor bis zum Endtermin',.7,1.2,.01,.94),
 field('income','Barwert bekannter Ausschüttungen (WE)',0,20,.01,3.88),
 field('c','Heutige Callquote (WE je Recht)',0,300,.01,11.12),
 field('p','Heutige Putquote (WE je Recht)',0,300,.01,4)
],p=>{
 const a=p.s-p.income,b=p.k*p.d,left=p.c+b,right=p.p+a,raw=left-right,gap=Math.abs(raw)<1e-10?0:raw,fair=a/p.d,xmax=Math.max(300,2*p.k),call=x=>Math.max(x-p.k,0),put=x=>Math.max(p.k-x,0);
 const lc=Math.max(a-b,0),lp=Math.max(b-a,0),bad=[];if(p.c<lc-1e-10||p.c>a+1e-10)bad.push('Callquote außerhalb ihrer Einzelpreisgrenzen');if(p.p<lp-1e-10||p.p>b+1e-10)bad.push('Putquote außerhalb ihrer Einzelpreisgrenzen');
 const out=result([['Call + Strikebarwert (WE)',left],['Put + Prepaid-Aktienerhalt (WE)',right],['Paketdifferenz links minus rechts (WE)',gap],['Call minus Put: heutiger Preis (WE)',p.c-p.p],['Alter Forward zum Strike: Wert (WE)',a-b],['Neue faire Forwardquote (WE)',fair]],seq(0,xmax,x=>call(x)+p.k,100),'Aktienkurs am Endtermin (WE)','Gemeinsame Paketendleistung (WE)','Reibungsfreier europäischer Vergleich je einem Aktienrecht. Die zwei Kurven liegen deckungsgleich: Call plus am Ende sicher verfügbarer Strike und Put plus eine am Ende gelieferte Aktie. Die Markierung bezeichnet den Strike, keine Kursprognose. Der Ausschüttungsbarwert wird als bekannt und replizierbar angenommen; der Prepaid-Erhalt ist Spot minus dieser Barwert. Ein Diskontfaktor ist keine jährliche Zinsquote; er kann bei negativem Zins über eins liegen. Unabhängige hypothetische Call-/Putquoten können die Parität oder zusätzlich eigene Grenzen verletzen. Paritätsgleichheit allein bestimmt keine zwei Einzelpreise. Keine Geld-Brief-Spannen, Gebühren, Leihrestriktionen, vorzeitige Ausübung, Margins oder Kreditrisiken; die Buchfälle behandeln diese Grenzen. '+(bad.length?'Separate Grenzprüfung: '+bad.join('; ')+'.':'Separate Grenzprüfung: Beide Einzelquoten liegen innerhalb ihrer europäischen Grenzen.'));
 out.series=[{name:'Call plus sichere Strikezahlung',color:'#087e82',points:out.points},{name:'Put plus Endaktie',color:'#d56718',dash:true,points:seq(0,xmax,x=>put(x)+x,100)}];out.yRange=[0,xmax*1.05];out.marker=[p.k,p.k];
 out.projection={caption:'Jede Zeile ist ein eigener Endzustand, keine Reihe nacheinander eingehender Zahlungen. Endwerte enthalten keine erneute Addition der heutigen Prämien. Beide Pakete leisten in jedem Zustand dasselbe.',headers:['Endkurs (WE)','Call (WE)','Put (WE)','Call + Strike (WE)','Put + Aktie (WE)','Call − Put (WE)','Forward-Endleistung (WE)'],rows:[0,.5*p.k,p.k,1.5*p.k,2*p.k].map(x=>[x,call(x),put(x),call(x)+p.k,put(x)+x,call(x)-put(x),x-p.k])};
 out.stable={caption:'Notwendige europäische Einzelpreisgrenzen unter derselben Ertrags- und Diskontannahme. Auch zwei gleich stark überteuerte Rechte können die Paketgleichheit erfüllen.',headers:['Recht','Quote (WE)','Untere Grenze (WE)','Obere Grenze (WE)','Separate Prüfung'],rows:[['Call',p.c,lc,a,p.c>=lc-1e-10&&p.c<=a+1e-10?'Innerhalb':'Außerhalb'],['Put',p.p,lp,b,p.p>=lp-1e-10&&p.p<=b+1e-10?'Innerhalb':'Außerhalb']]};return out;
});
models.parity.presets=[
 {label:'Grundfall mit bekannten Ausschüttungen',values:{s:105,k:100,d:.94,income:3.88,c:11.12,p:4}},
 {label:'Nur Callquote +2 WE',values:{s:105,k:100,d:.94,income:3.88,c:13.12,p:4}},
 {label:'Nur Callquote −2 WE',values:{s:105,k:100,d:.94,income:3.88,c:9.12,p:4}},
 {label:'Nur Ausschüttungsbarwert null',values:{s:105,k:100,d:.94,income:0,c:11.12,p:4}},
 {label:'Nur Diskontfaktor 1,05',values:{s:105,k:100,d:1.05,income:3.88,c:11.12,p:4}},
 {label:'Beide Optionsquoten +10 WE',values:{s:105,k:100,d:.94,income:3.88,c:21.12,p:14}},
 {label:'Beide +100 WE: eigene Grenzen verletzt',values:{s:105,k:100,d:.94,income:3.88,c:111.12,p:104}},
 {label:'Nur Strike 120, alte Quoten behalten',values:{s:105,k:120,d:.94,income:3.88,c:11.12,p:4}},
 {label:'Nullzins ohne Ausschüttung, am Geld',values:{s:100,k:100,d:1,income:0,c:8,p:8}},
 {label:'Put teurer als Call, Parität erfüllt',values:{s:50,k:100,d:.94,income:0,c:6,p:50}}
];
add('binomialrep','Zwei Zustände: Call und Put mit Aktie und Geld nachbauen','Vergleiche die vollständigen Zahlungen beider Nachbauten. Verändere danach nur die tatsächliche Wahrscheinlichkeit: Sie ändert Ertragserwartungen, aber bei gleichen Marktpreisen keinen Replikationspreis.',[
 field('s','Heutige Aktie (WE je Aktie)',25,250,1,100),field('k','Europäischer Strike (WE je Recht)',25,250,1,100),
 field('u','Oberer Brutto-Kursfaktor',1.05,1.8,.01,1.2),field('d','Unterer Brutto-Kursfaktor',.2,.95,.01,.8),
 field('r','Sichere effektive Periodenrendite (%)',-10,20,.5,5),field('p','Tatsächliche obere Wahrscheinlichkeit (%)',5,95,1,60)
],p=>{
 const R=1+p.r/100;if(!(p.d<R&&R<p.u))throw Error('Arbitragefreie Eingabe mit zwei möglichen Zuständen erfordert d < R = 1+r < u. Die Gewichte werden nicht begrenzt oder automatisch angepasst.');
 const su=p.s*p.u,sd=p.s*p.d,q=(R-p.d)/(p.u-p.d),prob=p.p/100,cu=Math.max(su-p.k,0),cd=Math.max(sd-p.k,0),pu=Math.max(p.k-su,0),pd=Math.max(p.k-sd,0),dc=(cu-cd)/(su-sd),dp=(pu-pd)/(su-sd),bc=(cd-dc*sd)/R,bp=(pd-dp*sd)/R,C=dc*p.s+bc,P=dp*p.s+bp,ec=prob*cu+(1-prob)*cd,ep=prob*pu+(1-prob)*pd,clean=x=>Math.abs(x)<1e-10?0:x;
 const xmax=Math.max(1.25*su,1.2*p.k),series=[{name:'Call-Endzahlung auf Vergleichsachse',color:'#087e82',points:seq(0,xmax,s=>Math.max(s-p.k,0),80)},{name:'Fester Nachbau: nur an zwei Zuständen exakt',color:'#d56718',dash:true,points:seq(0,xmax,s=>dc*s+R*bc,80)}];
 const out=result([['Oberes Bewertungsgewicht q (%)',100*q],['Heutiger Callpreis (WE)',clean(C)],['Heutiger Putpreis (WE)',clean(P)],['Call-Delta (Aktien je Recht)',dc],['Call-Geldposition heute (WE)',clean(bc)],['Erwarteter Callpayoff unter P (WE)',ec]],series[0].points,'Gedanklicher Endaktienkurs (WE)','Endzahlung je Anspruch (WE)','Einperiodenmarkt ohne Ausschüttungen, europäische Rechte, Bruchstücke und Leerverkauf möglich, sichere gemeinsame Kredit-/Anlageverzinsung, keine Gebühren, Margins oder Ausfallrisiken. R ist ein Faktor über die ganze Baumperiode, keine ungeprüfte Jahresrate. Beide Endzustände gelten als tatsächlich möglich. Die Grafik erweitert nur die Vergleichsachse: Modellzustände sind ausschließlich die zwei tabellierten Aktienkurse. Der feste affine Callnachbau stimmt genau dort; Abweichungen dazwischen und außerhalb zeigen seine Modellgrenze. Eine negative gezeichnete Nachbauzahlung außerhalb dieser Zustände ist kein negativer Callpayoff. Die tatsächliche Wahrscheinlichkeit p verändert nur Erwartungen unter P; sie ist unabhängig vom risikoneutralen Preisgewicht q. Preise und Geldpositionen beziehen sich auf heute, die letzte Kennzahl auf eine erwartete Endzahlung. Ein negativer Geldbaustein bezeichnet Kredit. Alle Beträge je einzelnem Aktienrecht.');out.series=series;
 out.projection={caption:'Beide vollständigen Replikationen: vier Zeilen sind alternative Anspruch-/Zustandsfälle. Sichere Endzahlung ist heutiger Geldbaustein mal R. Abweichung gleich null beweist die Deckung in beiden Modellzuständen.',headers:['Recht und Zustand','Aktienkurs (WE)','Optionszahlung (WE)','Delta (Aktien)','Aktienwert (WE)','Geld am Ende (WE)','Nachbau (WE)','Abweichung (WE)'],rows:[['Call oben',su,cu,dc,dc*su,R*bc,clean(dc*su+R*bc),clean(dc*su+R*bc-cu)],['Call unten',sd,cd,dc,dc*sd,R*bc,clean(dc*sd+R*bc),clean(dc*sd+R*bc-cd)],['Put oben',su,pu,dp,dp*su,R*bp,clean(dp*su+R*bp),clean(dp*su+R*bp-pu)],['Put unten',sd,pd,dp,dp*sd,R*bp,clean(dp*sd+R*bp),clean(dp*sd+R*bp-pd)]]};
 out.stable={collapsible:true,summary:'Preisgewichte, Putnachbau und tatsächliche Erwartungen getrennt ansehen',caption:'Die tatsächliche Verteilung P ist keine zweite Preisrechnung. Erwartete Renditen verwenden positive heutige Kaufpreise; bei Preis null ist diese Renditequote nicht definiert.',headers:['Größe','Wert','Bezug / Einheit'],rows:[['Sicherer Bruttofaktor R',R,'Über die ganze Modellperiode'],['Oberer Zustandspreis',q/R,'WE heute je nur oben gezahlter End-WE'],['Unterer Zustandspreis',(1-q)/R,'WE heute je nur unten gezahlter End-WE'],['Summe Zustandspreise',1/R,'Preis einer sicheren End-WE'],['Put-Delta',dp,'Aktien je Putrecht'],['Put-Geldposition heute',clean(bp),'WE heute; positiv ist sichere Anlage'],['Tatsächlicher erwarteter Aktienendwert',prob*su+(1-prob)*sd,'WE am Ende unter P'],['Tatsächlicher erwarteter Putpayoff',ep,'WE am Ende unter P'],['Tatsächliche erwartete Callrendite',C>1e-10?100*(ec/C-1):'Nicht definiert bei Preis null','Prozent über die Modellperiode unter P'],['Tatsächliche erwartete Putrendite',P>1e-10?100*(ep/P-1):'Nicht definiert bei Preis null','Prozent über die Modellperiode unter P']]};return out;
});
models.binomialrep.presets=[
 {label:'Grundfall: zwei Endkurse 120 / 80',values:{s:100,k:100,u:1.2,d:.8,r:5,p:60}},
 {label:'Nur tatsächliches p auf 20 %',values:{s:100,k:100,u:1.2,d:.8,r:5,p:20}},
 {label:'Nur tatsächliches p auf 80 %',values:{s:100,k:100,u:1.2,d:.8,r:5,p:80}},
 {label:'Nur oberer Faktor auf 1,30',values:{s:100,k:100,u:1.3,d:.8,r:5,p:60}},
 {label:'Nur Äste weiter: 140 / 60',values:{s:100,k:100,u:1.4,d:.6,r:5,p:60}},
 {label:'Nur Strike 60: Call immer ITM',values:{s:100,k:60,u:1.2,d:.8,r:5,p:60}},
 {label:'Nur Strike 140: Call immer wertlos',values:{s:100,k:140,u:1.2,d:.8,r:5,p:60}},
 {label:'Nur sicherer Satz −5 %',values:{s:100,k:100,u:1.2,d:.8,r:-5,p:60}},
 {label:'Nur sicherer Satz 0 %',values:{s:100,k:100,u:1.2,d:.8,r:0,p:60}},
 {label:'Nur Periodensatz 3 %: Quartalsfall',values:{s:100,k:100,u:1.2,d:.8,r:3,p:60}},
 {label:'Nur heutige Aktie 80: Call wertlos',values:{s:80,k:100,u:1.2,d:.8,r:5,p:60}}
];
add('commitment','Kapitalzusagen, Wiederabrufe und verfügbares Geld','Eine Momentaufnahme eines laufenden Lehrfonds. Vergleiche den möglichen Abruf mit tatsächlich verfügbarem Anlegercash. NAV und historische Ausschüttungen sind keine zusätzlich sofort verfügbaren Geldquellen.',[
 field('commitment','Ursprüngliche Kapitalzusage (WE)',100,10000,100,1000),field('paid','Gegen Zusage eingezahlt (% der Zusage)',10,100,5,40),field('dist','Früher ausgeschüttet (% der Zusage)',0,100,5,20),field('recall','Davon noch nutzbar wiederabrufbar (%)',0,100,5,50),field('call','Jetzt angefordert (% der Restkapazität)',0,100,5,50),field('cash','Tatsächlich verfügbares Anlegercash (WE)',0,10000,50,300),field('nav','Bewerteter Fondsanteil: NAV (WE)',0,10000,50,500)
],p=>{
 const paid=p.commitment*p.paid/100,dist=p.commitment*p.dist/100,base=p.commitment-paid,recall=dist*p.recall/100,U=base+recall,call=U*p.call/100,buffer=p.cash-call,gap=Math.max(-buffer,0),clean=x=>Math.abs(x)<1e-10?0:x,points=seq(0,100,a=>p.cash-U*a/100,60),out=result([['Ursprünglicher Zusagerest (WE)',clean(base)],['Zusätzliche Wiederabrufkapazität (WE)',recall],['Aktuell insgesamt abrufbar (WE)',U],['Jetzt angeforderter Betrag (WE)',call],['Noch zu deckender Fehlbetrag (WE)',gap],['Rechnerischer Kassenpuffer (WE)',clean(buffer)]],points,'Angeforderter Anteil der Restkapazität (%)','Kassenpuffer nach Anforderung (WE)','Eigener laufender Lehrfonds, keine universelle Vertragsformel: ursprüngliche Zusage minus dagegen angerechnete Beiträge plus ausdrücklich zusätzlich wiederhergestellte, noch nicht erneut verbrauchte Abrufkapazität. Der gewählte Anteil vergangener Ausschüttungen ist nach diesem Lehrvertrag aktuell noch vollständig erneut abrufbar; andere Fristen, Caps, Außenverpflichtungen und weitere spätere Wiederherstellungen sind nicht modelliert. Die historischen Ausschüttungen sind eine Stromsumme und werden nicht nochmals zum separat angegebenen heutigen Cash addiert. Der NAV ist ein bewerteter Anteilsbestand und wird ohne tatsächliche Auszahlung oder Verkauf nicht zu verfügbarem Geld. Ein negativer Puffer ist ungedeckter Bedarf, kein automatisch gewährter Kredit. Jeder Kurvenpunkt ist ein eigener Anforderungstest, kein zeitlicher Abrufpfad. Alle Werte gehören zum angegebenen Anlegeranteil, nicht zusätzlich zum ganzen Fonds.');
 out.series=[{name:'Cash minus angeforderter Abruf',color:'#087e82',points},{name:'Kein Kassenpuffer / keine Lücke',color:'#d56718',dash:true,points:seq(0,100,()=>0,60)}];out.marker=[p.call,clean(buffer)];
 out.projection={caption:'Alternative Anforderungsfälle bei denselben heutigen Beständen. Der Rest in der letzten Spalte gilt erst nach tatsächlich vollständig geleisteter Zahlung; ein negativer Kassenpuffer muss zuvor gedeckt werden.',headers:['Angefordert (%)','Abruf (WE)','Cash vorher (WE)','Kassenpuffer (WE)','Fehlbetrag (WE)','Rest bei vollständiger Zahlung (WE)'],rows:[0,25,50,75,100].map(a=>{const x=U*a/100,b=p.cash-x;return[a,x,p.cash,clean(b),Math.max(-b,0),clean(U-x)];})};
 out.stable={collapsible:true,summary:'Zusage, vergangene Zahlungen, NAV und Cash getrennt abstimmen',caption:'Bestände und Ströme sind keine automatisch addierbaren Geldquellen. Die Deckungsquote bezieht sich allein auf den konkret angeforderten positiven Abruf.',headers:['Größe','Wert','Bezug / Einheit'],rows:[['Ursprüngliche Zusage',p.commitment,'WE vertragliche Ausgangsbasis'],['Dagegen angerechnete Einzahlungen',paid,'WE bisherige Bruttoeinzahlungen der Grundzusage'],['Frühere Ausschüttungen',dist,'WE vergangene Geldzuflüsse; kein zusätzliches heutiges Cash'],['Aktuell nutzbare Wiederabrufkapazität',recall,'WE vertraglich wiederhergestellte, noch unverbrauchte Kapazität'],['Bewerteter Fondsanteil',p.nav,'WE NAV; kein zugesagter sofortiger Verkaufserlös'],['Tatsächlich verfügbares Anlegercash',p.cash,'WE heutige liquide Mittel'],['NAV plus Cash als zwei bewertete Bestände',p.nav+p.cash,'WE Bewertungsaddition, kein sofort verfügbarer Gesamtauszahlungsanspruch'],['Deckung des konkreten Abrufs',call>0?100*p.cash/call:'Kein positiver Abruf','Prozent Cash / Anforderung; keine Deckung aller späteren Pflichten']]};return out;
});
models.commitment.presets=[
 {label:'Grundfall: 50 WE Liquiditätslücke',values:{commitment:1000,paid:40,dist:20,recall:50,call:50,cash:300,nav:500}},
 {label:'Nur NAV auf 1000: Lücke bleibt',values:{commitment:1000,paid:40,dist:20,recall:50,call:50,cash:300,nav:1000}},
 {label:'Nur Cash auf 500: Abruf gedeckt',values:{commitment:1000,paid:40,dist:20,recall:50,call:50,cash:500,nav:500}},
 {label:'Nur 100 % Restkapazität anfordern',values:{commitment:1000,paid:40,dist:20,recall:50,call:100,cash:300,nav:500}},
 {label:'Nur Wiederabrufrecht auf null',values:{commitment:1000,paid:40,dist:20,recall:0,call:50,cash:300,nav:500}},
 {label:'Nur frühere Ausschüttungen auf null',values:{commitment:1000,paid:40,dist:0,recall:50,call:50,cash:300,nav:500}},
 {label:'Nur alle Ausschüttungen wiederabrufbar',values:{commitment:1000,paid:40,dist:20,recall:100,call:50,cash:300,nav:500}},
 {label:'Nur bisher eingezahlt auf 60 %',values:{commitment:1000,paid:60,dist:20,recall:50,call:50,cash:300,nav:500}},
 {label:'Nur aktuelle Anforderung auf null',values:{commitment:1000,paid:40,dist:20,recall:50,call:0,cash:300,nav:500}},
 {label:'Nur ursprüngliche Zusage auf 2000',values:{commitment:2000,paid:40,dist:20,recall:50,call:50,cash:300,nav:500}},
 {label:'Grundzusage voll eingezahlt, Wiederabruf bleibt',values:{commitment:1000,paid:100,dist:20,recall:50,call:50,cash:300,nav:500}}
];
add('fundfees','Vom Bruttoertrag zum Anlegerergebnis','Vergleiche ausdrücklich definierte Einjahresverträge ohne externe Geldbewegungen. Gebührenbasis, Reihenfolge, Hürde und bisheriger Höchststand werden getrennt sichtbar.',[
 field('capital','Anfangs-NAV (WE)',100,10000,100,100),field('gross','Bruttorendite im Jahr (%)',-50,100,1,20),field('management','Managementsatz (% p. a.)',0,5,.25,2),field('carry','Erfolgssatz (%)',0,40,1,20),field('hurdle','Hürdensatz (% p. a.; bei keiner Hürde ignoriert)',0,15,1,0),field('hwm','Vorherige High-Water Mark (% des Anfangs-NAV)',100,150,5,100),
 {...field('base','Managementbasis',0,1,1,0),choices:[{value:0,label:'Anfangs-NAV'},{value:1,label:'Brutto-End-NAV'}]},
 {...field('policy','Gebührenvertrag und Reihenfolge',0,2,1,0),choices:[{value:0,label:'Summe: Erfolg nach Management'},{value:1,label:'Summe: Erfolg vor Management'},{value:2,label:'Entweder/oder: Erfolg vor Management'}]},
 {...field('rule','Hürdenklausel',0,2,1,0),choices:[{value:0,label:'Keine Hürde (Hürdensatz ignoriert)'},{value:1,label:'Harte Hürde: nur Überschuss'},{value:2,label:'Weiche Hürde: strikt überschreiten'}]}
],p=>{
 const B=p.capital,m=p.management/100,k=p.carry/100,h=p.hurdle/100,H=B*p.hwm/100,J=B*(1+h);
 const calc=g=>{const G=B*(1+g/100),M=m*(p.base===0?B:G),Y=p.policy===0?G-M:G;
  // A strict soft gate uses a relative tolerance only at the floating-point representation of equality.
  const above=Y-J>1e-12*B,P=k*(p.rule===1?Math.max(Y-Math.max(H,J),0):p.rule===2?(above?Math.max(Y-H,0):0):Math.max(Y-H,0)),F=p.policy===2?Math.max(M,P):M+P,N=G-F;
  return {G,M,Y,P,F,N,r:100*(N/B-1)};
 },v=calc(p.gross),points=seq(-50,100,g=>calc(g).r,100),out=result([['Bruttogewinn (WE)',v.G-B],['Management-Komponente (WE)',v.M],['Erfolgs-Komponente (WE)',v.P],['Tatsächliche Gesamtgebühr (WE)',v.F],['Netto-End-NAV (WE)',v.N],['Netto-Jahresrendite (%)',v.r]],points,'Bruttorendite im Jahr (%)','Jahresrendite (%)','Eigene Einjahresverträge ohne externe Zahlungen, Steuern, Fremdkapital, sonstige Kosten oder mehrjährige Catch-up-/Clawback-Regeln. Alle Prozentsätze beziehen sich auf ein volles Jahr. Erfolg nach Management verwendet Brutto-End-NAV minus Management-Komponente; die beiden anderen Verträge verwenden den Brutto-End-NAV. Beim Entweder/oder-Vertrag wird nur die größere Komponente tatsächlich bezahlt; es werden nicht beide Beträge abgezogen. Die High-Water Mark ist ein vorheriger, nach damaligen Gebühren festgestellter Höchststand für denselben unveränderten Anteilbestand. Die harte Hürde belastet nur den Betrag über dem höheren Wert aus Hürde und High-Water Mark. Die weiche Hürde verlangt das strikte Überschreiten der Hürdenbasis, berechnet dann aber Erfolg auf den gesamten Gewinn über der High-Water Mark. Sie ist kein vollständiger Catch-up-Wasserfall. Keine Hürde ignoriert den Hürdensatz. Jeder Kurvenpunkt ist ein separater Jahresfall bei denselben Vertragsparametern, kein zeitlicher NAV-Pfad.');
 const gross={name:'Bruttorendite vor Gebühren',color:'#7461a5',dash:true,points:seq(-50,100,g=>g,100)};
 if(p.rule===2){const gate=p.policy===0?(p.base===0?100*(h+m):100*((1+h)/(1-m)-1)):100*h;
  out.series=[gross,{name:'Netto bis zur weichen Schwelle',color:'#087e82',points:seq(-50,gate,g=>calc(g).r,50)},{name:'Netto oberhalb der weichen Schwelle',color:'#087e82',points:seq(gate+1e-7,100,g=>calc(g).r,50)}];
  out.note+=' Die Nettoabschnitte sind an der weichen Schwelle getrennt gezeichnet, damit ein möglicher Gebührensprung nicht durch eine Verbindungslinie als kontinuierlicher Verlauf erscheint.';
 }else out.series=[gross,{name:'Netto nach Vertragsgebühren',color:'#087e82',points}];
 out.marker=[p.gross,v.r];
 out.projection={caption:'Vergleich verschiedener Bruttoerträge unter genau demselben ausgewählten Jahresvertrag. Die Komponenten werden beim Entweder/oder-Fall nicht addiert.',headers:['Brutto (%)','Management (WE)','Erfolg (WE)','Gesamtgebühr (WE)','Netto-NAV (WE)','Netto (%)'],rows:[-20,0,10,20,40].map(g=>{const x=calc(g);return[g,x.M,x.P,x.F,x.N,x.r];})};
 out.stable={collapsible:true,summary:'Gebührenvertrag, Bemessungsgrößen und Zahlungsabstimmung aufklappen',caption:'Brutto-Endwert = Netto-Endwert + tatsächliche Gesamtgebühr. Management- und Erfolgs-Komponente sind beim Entweder/oder-Vertrag Alternativen, keine zwei Zahlungen.',headers:['Größe','Wert','Bezug / Einheit'],rows:[
 ['Gebührenvertrag',p.policy===0?'Summe; Erfolg nach Management':p.policy===1?'Summe; Erfolg vor Management':'Größere Komponente; Erfolg vor Management','Eigener ausdrücklich definierter Jahresvertrag'],
 ['Managementbasis',p.base===0?B:v.G,'WE Anfangs-NAV oder Brutto-End-NAV'],['Brutto-End-NAV',v.G,'WE vor beiden Vertragsgebühren'],['Basis für Erfolgsprüfung',v.Y,'WE nach oder vor Management gemäß Vertrag'],['Bisherige High-Water Mark',H,'WE vorheriger Höchststand nach damaligen Gebühren'],
 ['Hürdenbasis',p.rule===0?'Keine aktive Hürde':J,'WE Anfangs-NAV mal (1 + Hürdensatz)'],['Management-Komponente',v.M,'WE rechnerischer Managementbetrag'],['Erfolgs-Komponente',v.P,'WE rechnerischer Erfolgsbetrag'],['Tatsächlich bezahlte Gesamtgebühr',v.F,p.policy===2?'WE Maximum der Komponenten':'WE Summe der Komponenten'],['Netto-End-NAV',v.N,'WE nach tatsächlicher Gesamtgebühr'],['Abstimmung: Brutto minus Netto minus Gebühr',Math.abs(v.G-v.N-v.F)<1e-8?0:v.G-v.N-v.F,'WE; null bestätigt die Zahlungsaufteilung']]};return out;
});
{
 const b={capital:100,gross:20,management:2,carry:20,hurdle:0,hwm:100,base:0,policy:0,rule:0},preset=(label,changes)=>({label,values:{...b,...changes}});
 models.fundfees.presets=[
 preset('Grundfall: 20 % brutto, 14,4 % netto',{}),preset('Nur Managementbasis auf Brutto-End-NAV',{base:1}),preset('Nur Erfolg vor Management berechnen',{policy:1}),preset('Nur Entweder/oder-Vertrag',{policy:2}),preset('Harte Hürde von 8 %',{rule:1,hurdle:8}),preset('Weiche Hürde von 8 %',{rule:2,hurdle:8}),preset('Nur früheren Höchststand auf 120 erhöhen',{hwm:120}),preset('Neuer Fall: Gewinn über früherem Höchststand',{hwm:120,gross:30,management:0}),preset('Gründerklasse: 1 % Management, 10 % Erfolg',{management:1,carry:10}),preset('Nur Bruttoverlust von 20 %',{gross:-20}),preset('Nur Erfolgsvergütung auf null',{carry:0}),preset('Weiche Hürde: Schwelle genau erreicht',{rule:2,hurdle:8,gross:10}),preset('Weiche Hürde: knapp oberhalb der Schwelle',{rule:2,hurdle:8,gross:11})
 ];
}
function privateCapitalPlan(p){
 const ev0=p.ebitda*p.entry,e0=ev0*(1-p.leverage/100),d0=ev0-e0,rows=[],cashflows=[-e0];let debt=d0,additions=0,dividends=0,interestTotal=0,repaymentTotal=0;
 for(let t=1;t<=p.years;t++){
  const ebitda=p.ebitda*(1+p.growth/100)**t,cash=ebitda*p.conversion/100,opening=debt,interest=opening*p.interest/100,support=Math.max(interest-cash,0),after=Math.max(cash-interest,0),repayment=Math.min(opening,after),dividend=after-repayment;
  debt=Math.max(0,opening-repayment);additions+=support;dividends+=dividend;interestTotal+=interest;repaymentTotal+=repayment;cashflows.push(dividend-support);rows.push({year:t,ebitda,cash,opening,interest,support,repayment,debt,dividend,equityCF:dividend-support});
 }
 const terminalEbitda=p.ebitda*(1+p.growth/100)**p.years,exitEV=terminalEbitda*p.exit,bank=Math.min(debt,exitEV),shortfall=Math.max(debt-exitEV,0),sale=Math.max(exitEV-debt,0),contributions=e0+additions,payout=dividends+sale,multiple=payout/contributions;
 cashflows[p.years]+=sale;rows.at(-1).equityCF+=sale;
 // This specified plan has at most one sign change: support precedes any debt-free dividends.
 let irr=null;if(cashflows.some((x,i)=>i>0&&x>0)){const value=r=>cashflows.reduce((n,c,t)=>n+c/(1+r)**t,0);let a=-.9999999999,b=1;while(value(b)>0)b=2*b+1;for(let i=0;i<100;i++){const m=(a+b)/2;if(value(m)>0)a=m;else b=m;}irr=(a+b)/2;}
 return {ev0,e0,d0,rows,cashflows,debt,additions,dividends,interestTotal,repaymentTotal,terminalEbitda,exitEV,bank,shortfall,sale,contributions,payout,multiple,irr};
}
add('privatecapital','Buyout: Betrieb, Finanzierung und Exit abstimmen','Ein eigener jährlicher Zahlungsplan trennt operatives EBITDA, tatsächlich verfügbares Geld, Schuldendienst und Eigenkapitalrückflüsse. Die Eingaben sind Szenarien, keine Renditeprognosen.',[
 field('ebitda','EBITDA bei Kauf (WE pro Jahr)',5,100,1,10),field('entry','Kaufpreis: EV / EBITDA',5,20,.5,10),field('growth','EBITDA-Wachstum (% pro Jahr)',-20,20,1,0),field('exit','Verkaufspreis: EV / EBITDA',0,20,.5,12),field('leverage','Kredit bei Kauf (% des Kauf-EV)',0,80,5,60),field('interest','Kreditzins (% pro Jahr)',0,15,.25,5),field('conversion','Cash vor Schuldzins (% des EBITDA)',0,100,5,70),field('years','Haltedauer (ganze Jahre)',1,10,1,5)
],p=>{
 const v=privateCapitalPlan(p),payout=x=>v.dividends+Math.max(v.terminalEbitda*x-v.debt,0),points=seq(0,20,payout,80),rate=v.irr===null?'Keine IRR im Bereich r > −100 %: kein positiver Eigenkapital-Zahlungsfluss.':(100*v.irr).toFixed(6).replace('.',',')+' % p. a.',out=result([['Unternehmenswert bei Kauf (WE)',v.ev0],['Eigenkapital beim Kauf (WE)',v.e0],['Restschuld vor Verkauf (WE)',v.debt],['Zusätzlich eingezahltes Eigenkapital (WE)',v.additions],['Alle Eigenkapitalrückflüsse (WE)',v.payout],['Rückflüsse / alle Einzahlungen',v.multiple]],points,'Verkaufspreis: EV / EBITDA','Eigenkapitalzahlungen (WE)','Eigener vereinfachter Buyout vor Fondsgebühren und Anlegersteuern. Kauf-EV = Anfangs-EBITDA mal Kaufmultiple; der Kreditanteil bestimmt Kaufkredit und anfängliches Eigenkapital. Das EBITDA wächst jährlich mit dem gewählten Satz. Die Cashquote ist eine ausdrücklich angenommene Umwandlung des jeweiligen EBITDA in verfügbare Mittel nach bereits berücksichtigten Steuern, Investitionen und sonstigen operativen Zahlungen, aber vor Schuldzins. Sie ist keine allgemeine Definition von Free Cashflow und keine zusätzlich berechnete Zinssteuerersparnis. Zins fällt auf die jeweilige Anfangsschuld an. Verfügbares Geld bezahlt zuerst Zins, dann bis zur Restschuld Tilgung, danach Dividende. Ein laufender Zinsfehlbetrag wird im Lehrplan vollständig mit zusätzlichem Eigenkapital bezahlt; das ist eine Szenarioannahme und keine allgemeine gesellschaftsrechtliche Nachschusspflicht. Nach den Zahlungen des letzten Jahres wird der Betrieb zum angegebenen Multiple auf das letzte EBITDA verkauft; laufendes Cash wird nicht nochmals im Verkaufspreis addiert. Der Verkaufserlös bedient zuerst die Restschuld. Ein darüber hinaus offener Kreditbetrag wird ohne persönliche Exitgarantie nicht dem Eigenkapital zusätzlich belastet. Kein Refinanzieren, keine weiteren Schuldklassen, Transaktionskosten oder Zwangsverkäufe während der Haltedauer. IRR des gewählten Eigenkapital-Zahlungsplans: '+rate+' Der Rückflussmultiplikator verwendet auch die zusätzlichen Einzahlungen und wird nicht allein aus der Haltedauer annualisiert. Jeder Kurvenpunkt ist ein anderer Verkaufspreis bei demselben Betriebs- und Zahlungsplan.');
 out.series=[{name:'Dividenden plus Eigenkapital-Verkaufserlös',color:'#087e82',points},{name:'Alle geleisteten Eigenkapitaleinzahlungen',color:'#d56718',dash:true,points:seq(0,20,()=>v.contributions,80)}];out.marker=[p.exit,v.payout];
 out.projection={caption:'Alternative Verkaufsmultiples nach denselben laufenden Zahlungen. Ein offener Kreditverlust ist keine weitere persönliche Eigenkapitalzahlung. Alle Beträge sind WE; das Multiple ist dimensionslos.',headers:['Exitmultiple','Verkaufs-EV (WE)','Bank aus Verkauf (WE)','EK aus Verkauf (WE)','Alle EK-Rückflüsse (WE)','Rückflussmultiple','Offener Kredit (WE)'],rows:[0,8,10,12,16].map(x=>{const ev=v.terminalEbitda*x,sale=Math.max(ev-v.debt,0),total=v.dividends+sale;return[x,ev,Math.min(ev,v.debt),sale,total,total/v.contributions,Math.max(v.debt-ev,0)];})};
 out.stable={collapsible:true,summary:'Jährlichen Cashflow, Zins, Tilgung und Eigenkapitalzahlungen aufklappen',caption:'Eintritt bei Jahr null: Eigenkapital '+v.e0.toFixed(4).replace('.',',')+' WE und Bankkredit '+v.d0.toFixed(4).replace('.',',')+' WE finanzieren den Kauf. Cash + zusätzliches EK = Zins + Tilgung + Dividende in jedem Jahr. Die letzte EK-Nettozahlung enthält den Verkaufserlös; Restschuld ist dort noch vor dem Verkauf bezeichnet.',headers:['Jahr','EBITDA (WE)','Cash vor Zins (WE)','Zins (WE)','Zusätzliches EK (WE)','Tilgung (WE)','Schuld nach Tilgung (WE)','Dividende (WE)','EK-Nettozahlung inkl. Exit (WE)'],rows:v.rows.map(r=>[r.year,r.ebitda,r.cash,r.interest,r.support,r.repayment,r.debt,r.dividend,r.equityCF])};return out;
});
{
 const b={ebitda:10,entry:10,growth:0,exit:12,leverage:60,interest:5,conversion:70,years:5},P=(label,p)=>({label,values:{...b,...p}});
 models.privatecapital.presets=[P('Grundfall: Betrieb und Bank vollständig abstimmen',{}),P('Nur Exitmultiple auf Kaufmultiple 10',{exit:10}),P('Nur Exitmultiple auf 8 reduzieren',{exit:8}),P('Nur EBITDA jährlich 5 % wachsen lassen',{growth:5}),P('Nur EBITDA jährlich 10 % senken',{growth:-10}),P('Nur ohne Kaufkredit finanzieren',{leverage:0}),P('Nur Kaufkredit auf 80 % erhöhen',{leverage:80}),P('Nur Kreditzins auf 10 % erhöhen',{interest:10}),P('Nur Cashquote auf 40 % senken',{conversion:40}),P('Nur Cashquote auf null: Zins mit neuem EK',{conversion:0}),P('Nur auf zehn Jahre verlängern',{years:10}),P('Neuer Fall: früher schuldenfrei, dann Dividenden',{leverage:20,conversion:100}),P('Nur Exitwert null: offener Bankverlust',{exit:0}),P('Nur Kaufmultiple auf 15 erhöhen',{entry:15})];
}
const api={models,calculate,annuity,price,bsm,cdf,europeanOption,forecastValue,companyPlan,covenantPlan,repaymentSchedule,bondIndexPlan,repoFundingPlan,yieldSpreadPlan,floaterPlan,moneyYieldPlan,yieldCurvePlan,bondHorizonPlan,bondRiskPlan,convexityPlan,keyRatePlan,creditPlan,creditDistribution,sovereignPlan,creditCashPlan,mortgagePoolPlan,privateCapitalPlan};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.FinanceModels=api;
})(globalThis);
