// Coordinates are computed from model data; SVG contains no external assets.
const colors=['#087f82','#ba6824','#5b64aa','#b6475b','#466273'];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=(n,d=2)=>n.toLocaleString('de-DE',{maximumFractionDigits:d});
const sample=(lo,hi,fn,n=120)=>Array.from({length:n+1},(_,i)=>{const x=lo+(hi-lo)*i/n;return [x,fn(x)];});
const line=(name,points,extra={})=>({name,points,...extra});
const mark=(x,y,label,extra={})=>({x,y,label,...extra});
const normalPDF=(x,mu=0,sigma=1)=>Math.exp(-.5*((x-mu)/sigma)**2)/(sigma*Math.sqrt(2*Math.PI));
const root=(f,a,b)=>{if(f(a)*f(b)>0)throw Error('Root is not bracketed');for(let i=0;i<100;i++){const m=(a+b)/2;if(f(a)*f(m)<=0)b=m;else a=m;}return(a+b)/2;};
function render(f){
 const p=f.plot,W=800,L=86,R=26,T=28,B=77,H=p.square?W-L-R+T+B:440;
 const x=v=>L+(v-p.x[0])/(p.x[1]-p.x[0])*(W-L-R);
 const y=v=>H-B-(v-p.y[0])/(p.y[1]-p.y[0])*(H-T-B);
 const xy=([a,b])=>`${x(a).toFixed(3)},${y(b).toFixed(3)}`;
 const path=pts=>pts.map((v,i)=>(i?'L':'M')+xy(v)).join(' ');
 const ticks=(range,n=5)=>{
  const raw=(range[1]-range[0])/n,unit=10**Math.floor(Math.log10(raw)),error=raw/unit;
  const step=unit*(error>=Math.sqrt(50)?10:error>=Math.sqrt(10)?5:error>=Math.sqrt(2)?2:1);
  const first=Math.ceil(range[0]/step-1e-10),last=Math.floor(range[1]/step+1e-10);
  return Array.from({length:last-first+1},(_,i)=>Number(((first+i)*step).toPrecision(12)));
 };
 const xt=p.xTicks||ticks(p.x),yt=p.yTicks||ticks(p.y);
 const grid=yt.map(v=>`<path d="M${L} ${y(v)}H${W-R}" stroke="#dbe5eb"/><text x="${L-12}" y="${y(v)+5}" text-anchor="end">${esc(fmt(v))}</text>`).join('')+xt.map(v=>`<path d="M${x(v)} ${H-B}v6" stroke="#648292"/><text x="${x(v)}" y="${H-B+27}" text-anchor="middle">${esc(fmt(v))}</text>`).join('');
 const areas=(p.areas||[]).map(a=>`<path class="illustration-area" d="${path(a.points)} Z" fill="${a.color||colors[1]}" fill-opacity="${a.opacity??.18}" stroke="${a.color||colors[1]}" stroke-width="1"/>`).join('');
 const lines=p.series.map((s,i)=>`<path class="illustration-curve" d="${path(s.points)}" fill="none" stroke="${s.color||colors[i%colors.length]}" stroke-width="${s.width||3}" ${s.dash?`stroke-dasharray="${s.dash}"`:''} stroke-linejoin="round"/>`).join('');
 const zero=p.y[0]<0&&p.y[1]>0?`<path d="M${L} ${y(0)}H${W-R}" stroke="#8ca2af" stroke-width="1.5"/>`:'';
 const guides=(p.marks||[]).filter(m=>m.guides).map(m=>`<path d="M${L} ${y(m.y)}H${x(m.x)}V${H-B}" fill="none" stroke="#8ba1af" stroke-dasharray="3 5"/>`).join('');
 const arrows=(p.arrows||[]).map(a=>`<path d="${path(a)}" fill="none" stroke="#466273" stroke-width="2" marker-end="url(#${f.id}-arrow)"/>`).join('');
 const marks=(p.marks||[]).map(m=>`<circle cx="${x(m.x)}" cy="${y(m.y)}" r="4.5" fill="${m.color||'#143e50'}" stroke="white" stroke-width="1.5"/><text class="illustration-point-label" x="${x(m.x)+(m.dx??10)}" y="${y(m.y)+(m.dy??-12)}" text-anchor="${m.anchor||'start'}" font-weight="650" style="paint-order:stroke;stroke:#fff;stroke-width:5;stroke-linejoin:round">${esc(m.label)}</text>`).join('');
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${f.id}-title ${f.id}-desc"><title id="${f.id}-title">${esc(f.title)}</title><desc id="${f.id}-desc">${esc(f.takeaway+' '+f.read)}</desc><defs><clipPath id="${f.id}-clip"><rect x="${L}" y="${T}" width="${W-L-R}" height="${H-T-B}"/></clipPath><marker id="${f.id}-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0L7 3L0 6Z" fill="#466273"/></marker></defs><g fill="#234959" font-family="system-ui,sans-serif" font-size="14">${grid}<g clip-path="url(#${f.id}-clip)">${areas}${zero}${guides}${lines}${arrows}</g><path d="M${L} ${T}V${H-B}H${W-R}" fill="none" stroke="#648292" stroke-width="1.5"/>${marks}<text x="${(L+W-R)/2}" y="${H-15}" text-anchor="middle" font-size="16">${esc(p.xLabel)}</text><text transform="translate(22 ${(T+H-B)/2}) rotate(-90)" text-anchor="middle" font-size="16">${esc(p.yLabel)}</text></g></svg>`;
}
function compile(f,math){
 if(!/^[a-z0-9-]+$/.test(f.id)||!f.title||!f.takeaway||!f.read||!f.assumptions||!f.tex||!f.sources?.length)throw Error('Incomplete illustration: '+f.id);
 const p=f.plot;
 for(const range of [p.x,p.y])if(range.length!==2||!range.every(Number.isFinite)||range[0]>=range[1])throw Error('Invalid chart range '+f.id);
 for(const s of [...p.series,...(p.areas||[])])if(s.points.length<2||s.points.some(v=>v.length!==2||!v.every(Number.isFinite)))throw Error('Invalid coordinates '+f.id);
 for(const m of p.marks||[])if(!Number.isFinite(m.x)||!Number.isFinite(m.y)||m.x<p.x[0]||m.x>p.x[1]||m.y<p.y[0]||m.y>p.y[1])throw Error('Marker outside chart '+f.id);
 for(const s of f.sources)if(!/^https:\/\//.test(s.url))throw Error('Invalid source '+f.id);
 const {plot,...content}=f;
 return {...content,svg:render(f),mathml:math.renderLatex(f.tex),legend:p.series.map((s,i)=>({name:s.name,color:s.color||colors[i%colors.length],dash:!!s.dash}))};
}
module.exports={colors,esc,fmt,sample,line,mark,normalPDF,root,render,compile};
