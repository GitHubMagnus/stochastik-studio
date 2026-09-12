// Original, independently written lessons. The level references are stored separately.
module.exports=function L(levels,intuition,logic,formula,math,example,depth,pitfall,question,answer,links=[],lab=null){
 return {levels:levels.split('').map(Number),intuition,logic,formula,math,example,depth,pitfall,question,answer,links,lab};
};
