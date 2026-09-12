const bond=require('./finance-deep/duration.cjs').calculateBond;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const colors=['#087f82','#b96c29','#5264a1'];
function chart(id,title,xLabel,yLabel,xRange,yRange,series,caption){
 const W=760,H=390,L=75,R=25,T=60,B=68;
 const x=v=>L+(v-xRange[0])/(xRange[1]-xRange[0])*(W-L-R),y=v=>H-B-(v-yRange[0])/(yRange[1]-yRange[0])*(H-T-B);
 const ticks=Array.from({length:6},(_,i)=>i/5);
 const fmt=n=>n.toLocaleString('de-DE',{maximumFractionDigits:1});
 const grid=ticks.map(t=>{const xv=xRange[0]+t*(xRange[1]-xRange[0]),yv=yRange[0]+t*(yRange[1]-yRange[0]);return `<path d="M${L} ${y(yv)}H${W-R}" stroke="#d4e1e8"/><text x="${L-10}" y="${y(yv)+4}" text-anchor="end">${fmt(yv)}</text><text x="${x(xv)}" y="${H-B+23}" text-anchor="middle">${fmt(xv)}</text>`;}).join('');
 const paths=series.map((s,i)=>`<path fill="none" stroke="${colors[i%3]}" stroke-width="3" ${i===1?'stroke-dasharray="8 4"':''} d="${s.points.map(([a,b],j)=>`${j?'L':'M'}${x(a).toFixed(3)} ${y(b).toFixed(3)}`).join(' ')}"/>`).join('');
 const legend=series.map((s,i)=>`<g transform="translate(${L+i*210},24)"><path d="M0 0H25" stroke="${colors[i%3]}" stroke-width="3" ${i===1?'stroke-dasharray="8 4"':''}/><text x="33" y="4">${esc(s.name)}</text></g>`).join('');
 const svg=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(title)}</title><desc id="${id}-desc">${esc(caption)}</desc><g font-family="system-ui,sans-serif" font-size="12" fill="#244554">${grid}${paths}${legend}<path d="M${L} ${T}V${H-B}H${W-R}" fill="none" stroke="#244554"/><text x="${(L+W-R)/2}" y="${H-13}" text-anchor="middle">${esc(xLabel)}</text><text transform="translate(18 ${(T+H-B)/2}) rotate(-90)" text-anchor="middle">${esc(yLabel)}</text></g></svg>`;
 return {title,svg,caption};
}
const sample=(lo,hi,fn,n=80)=>Array.from({length:n+1},(_,i)=>{const x=lo+(hi-lo)*i/n;return[x,fn(x)];});
const b=bond(10,.05,.05);
module.exports={
 'bonds-08':[
 chart('duration-maturity','Laufzeit verändert die Empfindlichkeit','YTM, nominal jährlich (%)','Preis je 100 Nominal',[1,10],[20,205],[2,10,30].map(n=>({name:n+' Jahre, Kupon 5 %',points:sample(1,10,y=>bond(n,.05,y/100).price)})),'Alle drei Anleihen haben bei 5 % Rendite den Preis 100. Bei gleichem Kupon reagieren längere Laufzeiten hier stärker auf dieselbe Renditeänderung. Die Kurven stammen aus der vollständigen Barwertrechnung; keine Ausfälle oder Optionen.'),
 chart('duration-taylor','Lineare und quadratische Preisnäherung','Renditeänderung (Prozentpunkte)','Preisänderung (%)',[-2,2],[-18,21],[{name:'Exakter Preis',points:sample(-2,2,d=>(bond(10,.05,.05+d/100).price/b.price-1)*100)},{name:'Nur Duration',points:sample(-2,2,d=>-b.mod*d)},{name:'Mit Konvexität',points:sample(-2,2,d=>-b.mod*d+.5*b.conv*(d/100)**2*100)}],'Zehnjährige Anleihe, Kupon und Ausgangsrendite 5 %. Die Gerade ist die Tangente am Ausgangspreis. Der Konvexitätsterm erfasst die Krümmung und liegt bei diesen Schocks näher an der exakten Bewertung.')],
 'portfolio-01':[chart('diversification-correlation','Diversifikation hängt vom Gleichlauf ab','Korrelation','Portfoliovolatilität (%)',[-1,1],[0,20],[{name:'50 / 50, beide σ = 20 %',points:sample(-1,1,r=>Math.sqrt(.02*(1+r))*100)}],'Beide Einzelvolatilitäten und beide Gewichte bleiben konstant. Nur die Korrelation ändert sich. Die theoretische Nullvolatilität am linken Rand setzt perfekte negative Korrelation und stabile Exponierungen voraus.')],
 'equity-08':[chart('gordon-growth','Bewertung wird nahe der Grenze besonders empfindlich','Dauerwachstum (%)','Wert je Aktie',[0,6],[0,210],[{name:'D₁ = 4, k = 8 %',points:sample(0,6,g=>4/(.08-g/100))}],'Die nächste Dividende bleibt 4 und die Eigenkapitalrenditeforderung 8 %. Der Wert steigt nicht linear mit Wachstum. Näher am Diskontsatz erzeugt derselbe zusätzliche Wachstumspunkt einen größeren Wertunterschied.')],
 'portfolio-04':[chart('alpha-beta','Gleiche Rendite, anderes Alpha','Beta','Rendite (%)',[0,2],[0,15],[{name:'CAPM-Referenz',points:sample(0,2,b=>2+6*b)},{name:'Beobachtet: 11 %',points:sample(0,2,()=>11)}],'Bei sicherem Satz 2 % und Marktrendite 8 % beträgt die CAPM-Referenz 2 % plus Beta mal 6 %. Der vertikale Abstand der beobachteten 11 % zur Referenz ist das Einperiodenalpha; er ist kein eigenständiger Fähigkeitsnachweis.')]
};
