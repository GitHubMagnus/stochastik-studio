const fs=require('node:fs'),path=require('node:path');
const data=JSON.parse(fs.readFileSync(path.join(__dirname,'../index.html'),'utf8').match(/id="finance-data">([\s\S]*?)<\/script>/)[1]);
const total=f=>data.reduce((n,l)=>n+f(l),0);
console.log(JSON.stringify({chapters:data.length,deep:data.filter(l=>l.deep).length,sections:total(l=>l.deep.sections.length),comparisons:total(l=>l.deep.comparisons.length),mainMath:total(l=>l.formulaTex?1:0),derivationMath:total(l=>l.deep.sections.filter(s=>s.mathml).length),workedMath:total(l=>l.textbook.steps.filter(s=>s.mathml).length),proseOnlySteps:total(l=>l.textbook.steps.filter(s=>!s.mathml).length),chapterLinks:total(l=>l.links.length+l.deep.links.length),figures:total(l=>Number(!!l.textbook.figure)+l.deep.figures.length)},null,2));
