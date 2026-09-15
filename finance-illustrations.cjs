const blocks=['economics','portfolio','markets'].map(name=>require('./finance-illustrations/'+name+'.cjs'));
const figures={};
for(const block of blocks)for(const [id,list] of Object.entries(block))figures[id]=[...(figures[id]||[]),...list];
const ids=new Set();
for(const f of Object.values(figures).flat()){
 if(ids.has(f.id))throw Error('Duplicate illustration '+f.id);ids.add(f.id);
}
module.exports=figures;
