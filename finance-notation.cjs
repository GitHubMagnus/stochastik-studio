// Formula notation is authored in chapter context. The scanner is a build-time
// coverage check, not a source of inferred economic definitions.
const {renderLatex}=require('./finance-math.cjs');
const decode=s=>s.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#x27;|&#39;/g,"'");
const texFromMath=html=>[...String(html).matchAll(/<annotation encoding="application\/x-tex">([\s\S]*?)<\/annotation>/g)].map(m=>decode(m[1]));
function groupEnd(s,i){if(s[i]!=='{')return i+1;let depth=1,j=i+1;for(;j<s.length&&depth;j++){if(s[j]==='{')depth++;if(s[j]==='}')depth--;}return j;}
function symbols(tex){
 tex=tex.replace(/(\\?mathbf\s*\{?w\}?|\\boldsymbol\\mu|\b[BDw])\^T/g,'$1').replace(/\\operatorname\{Conv\}/g,'Conv');
 // TeX permits unbraced one-character fraction arguments (\frac EN).
 tex=tex.replace(/\\(?:d?frac)\s+([A-Za-z])([A-Za-z])/g,'{$1} {$2}');
 let s=tex.replace(/\\(?:text|begin|end|operatorname)\s*\{[^{}]*\}/g,' ').replace(/\\operatorname\s+[A-Za-z]+/g,' ')
  .replace(/\^\s*\{?\\(?:mathsf\s*\{?T\}?|top)\}?/g,' ').replace(/\\(?:mathsf)\s*\{T\}/g,' ');
 // Subscripts label the base quantity; their interpretation is authored in the
 // same definition. Exponents remain in the scan (h, n, T, alpha, ...).
 let clean='';for(let i=0;i<s.length;){if(s[i]==='_'){clean+=' ';i++;while(s[i]===' ')i++;if(s[i]==='\\'){const m=s.slice(i).match(/^\\[A-Za-z]+/);i+=m?m[0].length:2;}else i=groupEnd(s,i);}else clean+=s[i++];}
 const greek=new Set('alpha beta gamma Gamma delta Delta epsilon varepsilon theta Theta lambda Lambda mu nu xi pi Pi rho sigma Sigma tau phi varphi Phi Omega omega chi eta zeta kappa ell Psi'.split(' '));
 const commands=[];clean=clean.replace(/\\([A-Za-z]+)/g,(_,name)=>{if(greek.has(name))commands.push(name);return ' ';});
 const products={aX:['a','X'],bx:['b','x'],pQ:['p','Q'],vQ:['v','Q'],bP:['b','P'],bQ:['b','Q'],PQ:['P','Q'],AK:['A','K'],sf:['s','f'],cY:['c','Y'],cF:['c','F'],Fc:['F','c'],rt:['r','t'],AD:['A','D'],LD:['L','D'],DW:['D','W'],qM:['q','M'],qMS:['q','M','S'],Se:['S','e'],Ke:['K','e'],Ce:['C','e'],qC:['q','C'],uC:['u','C'],dC:['d','C'],rV:['r','V'],qT:['q','T'],rT:['r','T'],aT:['a','T'],dw:['w'],dx:['x'],dt:['t'],dr:['r'],dS:['S'],dV:['V'],du:['u'],dy:['y'],dk:['k'],dQ:['Q'],dP:['P'],dNPV:['NPV'],dATC:['ATC'],dTC:['TC'],dW:['W'],nDF:['n','DF'],mT:['m','T'],mH:['m','H'],Pe:['P','e'],Ay:['A','y'],NA:['N','A'],XY:['X','Y'],PP:['P'],PN:['P','N'],EBITDAM:['EBITDA','M'],tCF:['t','CF'],wMRC:['w','MRC'],ww:['w'],hP:['h','P'],VD:['V','D'],Dw:['D','w'],kB:['k','B']};
 const labels=new Set('EUR USD Mio Jahre iid reject Power long short annual deferred collar cap obs approx Konsum Prognose'.split(' '));
 Object.assign(products,{nq:['n','q'],Mg:['M','g'],rc:['r','c']});
 const words=(clean.match(/[A-Za-z]+/g)||[]).flatMap(w=>products[w]||[w]).filter(w=>!labels.has(w));
 return [...new Set([...words,...commands])].sort();
}
function formulas(value){
 const result=new Set();function walk(v){if(!v||typeof v!=='object')return;for(const [key,x] of Object.entries(v)){if(key==='notation')continue;if(typeof x==='string'&&x.includes('<annotation encoding="application/x-tex">'))texFromMath(x).forEach(t=>result.add(t));else if(typeof x==='object')walk(x);}}
 walk(value);return [...result];
}
const greek=/^(?:alpha|beta|gamma|Gamma|delta|Delta|epsilon|varepsilon|theta|Theta|lambda|Lambda|mu|nu|xi|pi|Pi|rho|sigma|Sigma|tau|phi|varphi|Phi|Omega|omega|chi|eta|zeta|kappa|ell|Psi)$/;
const symbolTex=key=>greek.test(key)?'\\'+key:key.length===1?key:'\\mathrm{'+key+'}';
const conventions=[
 [/\\(?:sum|prod)/,'∑ als Summenzeichen addiert die angegebenen Terme; ∏ als Produktzeichen multipliziert sie. Unter- und Obergrenze bestimmen den Laufbereich des Index. Sie sind von der großgeschriebenen Matrix Σ zu unterscheiden.'],
 [/\\(?:operatorname\s*\{?E\}?|mathbb\s*\{E\})|\bE(?:_|\[)/,'E[·] bezeichnet einen Erwartungswert. Ein Zeitindex am E bedeutet: bedingt auf die zu diesem Zeitpunkt bekannten Informationen. Ein allein stehendes E kann im Kapitel dagegen Eigenkapital oder eine andere ausdrücklich definierte Größe bezeichnen.'],
 [/Var|Cov/,'Var(·) ist die Varianz, Cov(·,·) die Kovarianz. Var_t beziehungsweise ein Bedingungsstrich bezeichnet die Varianz unter den dort genannten Informationen. Varianz hat die quadrierte Einheit der Größe, Kovarianz das Produkt beider Einheiten.'],
 [/\\operatorname\{SE\}|\\operatorname\s+SE/,'SE(·) ist der Standardfehler der geschätzten Größe in Klammern. Er misst die Streuung des Schätzers bei wiederholten Stichproben, nicht die Streuung einer Einzelbeobachtung.'],
 [/\\(?:ln|log|exp)|\be\^/,'ln ist der natürliche Logarithmus; exp(x) beziehungsweise e hoch x ist seine Umkehrfunktion. Im hier verwendeten Vermögensmodell bedeutet auch log den natürlichen Logarithmus. Ein Logarithmusargument muss positiv sein.'],
 [/\\(?:partial|nabla)|(?:d[A-Za-z].*d[A-Za-z])/,'Ein Ableitungsbruch misst die lokale Änderung einer Größe je Änderung der anderen. ∂ hält die übrigen unabhängigen Einflussgrößen fest; ∂² ist die zweite Ableitung. ∇ ist der Vektor der ersten partiellen Ableitungen. Kleine d vor Variablen sind Differentialzeichen.'],
 [/\^\{?\\(?:mathsf|top)|\^[T]|\^\{T\}/,'Ein hochgestelltes T an einem Vektor oder einer Matrix bedeutet Transponieren: Zeilen und Spalten werden vertauscht. Es ist an dieser Stelle keine Laufzeitpotenz. Eine hochgestellte −1 an einer quadratischen Matrix bezeichnet die inverse Matrix und setzt deren Existenz voraus.'],
 [/\\(?:hat|widehat|bar|overline)/,'Ein Dach kennzeichnet einen Schätz- oder Prognosewert. Ein Balken über einer Größe bezeichnet einen Mittelwert beziehungsweise Durchschnittsbestand; über Nachkommastellen kennzeichnet er deren periodische Wiederholung. Die Symbolbeschreibung legt fest, welche Variante gemeint ist.'],
 [/\\mathbf\s*\{?1/,'Eine fett gesetzte 1 in einer Vektorgleichung ist der Einsenvektor. Mit einem Ereignis im Index ist 1 hingegen eine Indikatorfunktion: eins, wenn die Bedingung erfüllt ist, sonst null.'],
 [/\^\+|\^\{\+\}/,'Ein hochgestelltes + an einem geklammerten Ausdruck bezeichnet seinen positiven Teil: das Maximum aus diesem Ausdruck und null. Ein + oder − direkt am Zeitindex eines Bestands kennzeichnet dagegen den Zeitpunkt nach oder vor einem Zahlungs- beziehungsweise Handelstermin.'],
 [/\\(?:max|min|arg|inf)/,'max und min wählen den größten beziehungsweise kleinsten zulässigen Wert; arg max und arg min liefern die zugehörige Entscheidung, nicht den Wert der Zielfunktion. inf bezeichnet die größte untere Schranke der angegebenen Menge.'],
 [/\\(?:approx|simeq)/,'≈ kennzeichnet eine Näherung. Ihre Gültigkeit hängt von den direkt im Abschnitt genannten Modellannahmen und der Größe der Änderungen ab.'],
 [/\\(?:frac|dfrac|tfrac)/,'Ein Bruch teilt den gesamten Zähler durch den gesamten Nenner. Der Nenner muss ungleich null sein; im Text genannte strengere Modellbedingungen gelten zusätzlich.'],
 [/\\%|\\mathrm\{bp\}/,'Prozentangaben werden zum Rechnen durch 100 geteilt: 5 % = 0,05. Ein Basispunkt ist 0,0001. Prozentpunkte messen eine absolute Differenz zweier Prozentangaben.'],
 [/\\(?:int|infty|lim)/,'∫ summiert kontinuierlich über die angegebene Integrationsvariable und die Grenzen. ∞ bezeichnet unendliche Fortsetzung, lim einen Grenzwert; ein solcher Grenzwert braucht die im Abschnitt genannten Existenzbedingungen.'],
 [/\\(?:mid|vert)|\|/,'Ein senkrechter Strich zwischen Ereignissen oder nach einer Zufallsgröße bedeutet „unter der Bedingung“. Zwei umschließende Striche bezeichnen den Betrag. Die jeweils verwendete Bedeutung ergibt sich aus der Symbolbeschreibung.']
];
function compileNotation(lesson){
 const index=Number(lesson.id.match(/(\d+)$/)[1])-1;
 const authored=require('./finance-notation/'+lesson.block+'.cjs')[index];
 if(!authored)throw Error(lesson.id+': chapter notation missing');
 const localKeys=new Set(authored.entries.flatMap(e=>e.keys));
 const entries=[...authored.entries,...require('./finance-notation/common.cjs').map(e=>({...e,keys:e.keys.filter(k=>!localKeys.has(k))})).filter(e=>e.keys.length)];
 const all=formulas(lesson);const used=new Set(all.flatMap(symbols));
 const available=new Set(entries.flatMap(e=>e.keys));
 const missing=[...used].filter(k=>!available.has(k));
 if(missing.length)throw Error(lesson.id+': undefined formula symbols '+missing.join(', '));
 if(all.length&&!authored.reading)throw Error(lesson.id+': formula reading missing');
 const relevant=entries.filter(e=>e.keys.some(k=>used.has(k))).map(e=>({...e,mathml:renderLatex(e.tex||e.keys.map(symbolTex).join(',\\ '),false)}));
 const compiled=all.map(tex=>{const keys=new Set(symbols(tex));return {tex,entries:relevant.flatMap((e,i)=>e.keys.some(k=>keys.has(k))?[i]:[]),conventions:conventions.flatMap(([re,text])=>re.test(tex)?[text]:[])};});
 const readingParts=[];let last=0;
 for(const match of authored.reading.matchAll(/\[\[([\s\S]*?)\]\]/g)){
  if(match.index>last)readingParts.push({text:authored.reading.slice(last,match.index)});
  for(const key of symbols(match[1]))if(!available.has(key))throw Error(lesson.id+': undefined reading symbol '+key);
  readingParts.push({mathml:renderLatex(match[1],false)});last=match.index+match[0].length;
 }
 if(last)readingParts.push({text:authored.reading.slice(last)});
 return {reading:authored.reading,...(last?{readingParts}:{}),entries:relevant,formulas:compiled};
}
module.exports={symbols,formulas,texFromMath,compileNotation};
