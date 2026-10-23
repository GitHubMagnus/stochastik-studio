// Native SVG teaching diagrams. Routes and claim/cash distinctions are authored explicitly.
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const legend=[{type:'cash',label:'Geldzahlung',color:'#087e82',dash:false},{type:'claim',label:'Übertragung oder Begründung eines Anspruchs',color:'#765594',dash:true}];
function render(d,id){
 const fail=message=>{throw Error(id+': '+message);};
 if(!/^[a-z0-9-]+$/.test(d.id)||!d.title?.trim()||!d.caption?.trim()||!d.reading?.trim()||!Number.isFinite(d.width)||!Number.isFinite(d.height)||d.width<300||d.height<150||!d.nodes?.length||!d.flows?.length)fail('unvollständiges Ablaufbild');
 const ids=new Set();for(const n of d.nodes){if(!/^[a-z0-9-]+$/.test(n.id)||ids.has(n.id)||![n.x,n.y,n.w,n.h].every(Number.isFinite)||n.x<0||n.y<0||n.w<80||n.h<40||n.x+n.w>d.width||n.y+n.h>d.height||!n.lines?.length||n.lines.some(s=>typeof s!=='string'||!s.trim()))fail('ungültiger Knoten');ids.add(n.id);}
 const byId=new Map(d.nodes.map(n=>[n.id,n]));
 const border=(p,n)=>p[0]>=n.x&&p[0]<=n.x+n.w&&p[1]>=n.y&&p[1]<=n.y+n.h&&(p[0]===n.x||p[0]===n.x+n.w||p[1]===n.y||p[1]===n.y+n.h);
 for(const f of d.flows){if(!ids.has(f.from)||!ids.has(f.to)||f.from===f.to||!legend.some(l=>l.type===f.type)||!f.label?.trim()||!Array.isArray(f.points)||f.points.length<2||f.points.some(p=>p.length!==2||!p.every(Number.isFinite)||p[0]<0||p[0]>d.width||p[1]<0||p[1]>d.height)||!Array.isArray(f.at)||f.at.length!==2||!f.at.every(Number.isFinite)||f.at[0]<0||f.at[0]>d.width||f.at[1]<0||f.at[1]>d.height||!border(f.points[0],byId.get(f.from))||!border(f.points.at(-1),byId.get(f.to))||f.amount!==undefined&&(!Number.isFinite(f.amount)||f.amount<0))fail('ungültiger Zahlungs- oder Anspruchspfeil');}
 const rows=d.flows.map(f=>[byId.get(f.from).lines[0],byId.get(f.to).lines[0],f.label,legend.find(l=>l.type===f.type).label]);
 const description=d.caption+' '+rows.map(r=>r[0]+' → '+r[1]+': '+r[2]+' ('+r[3]+').').join(' ');
 let svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+d.width+' '+d.height+'" role="img" aria-labelledby="'+id+'-title '+id+'-desc"><title id="'+id+'-title">'+esc(d.title)+'</title><desc id="'+id+'-desc">'+esc(description)+'</desc><defs>'+legend.map(l=>'<marker id="'+id+'-'+l.type+'" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="'+l.color+'"/></marker>').join('')+'</defs>';
 for(const f of d.flows){const style=legend.find(l=>l.type===f.type);svg+='<polyline class="cfa-flow-line" data-from="'+f.from+'" data-to="'+f.to+'" data-type="'+f.type+'" points="'+f.points.map(p=>p.join(',')).join(' ')+'" fill="none" stroke="'+style.color+'" stroke-width="2.4"'+(style.dash?' stroke-dasharray="7 4"':'')+' marker-end="url(#'+id+'-'+f.type+')"/><text x="'+f.at[0]+'" y="'+f.at[1]+'" text-anchor="middle" fill="'+style.color+'" font-size="14" font-family="Arial,sans-serif">'+esc(f.label)+'</text>';}
 for(const n of d.nodes){const y=n.y+n.h/2-(n.lines.length-1)*10;svg+='<g class="cfa-flow-node"><rect x="'+n.x+'" y="'+n.y+'" width="'+n.w+'" height="'+n.h+'" rx="10" fill="#f2f8fa" stroke="#8eb9c6"/>'+n.lines.map((line,i)=>'<text x="'+(n.x+n.w/2)+'" y="'+(y+i*20)+'" text-anchor="middle" dominant-baseline="middle" font-size="14" font-family="Arial,sans-serif" fill="#0c2439"'+(i===0?' font-weight="700"':'')+'>'+esc(line)+'</text>').join('')+'</g>';}
 return {svg:svg+'</svg>',rows,legend:legend.filter(l=>d.flows.some(f=>f.type===l.type))};
}
module.exports={render};
