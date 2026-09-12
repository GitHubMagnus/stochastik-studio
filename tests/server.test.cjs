const test=require('node:test'),assert=require('node:assert/strict'),http=require('node:http');
const {createServer}=require('../.server.js');
test('local server handles malformed URLs and never exposes workspace files',async()=>{
 const server=createServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const request=(path,method='GET')=>new Promise((resolve,reject)=>{
  http.request({host:'127.0.0.1',port:server.address().port,path,method},res=>{
   let body='';res.on('data',c=>body+=c);res.on('end',()=>resolve({status:res.statusCode,body,headers:res.headers}));
  }).on('error',reject).end();
 });
 try{
  const home=await request('/');assert.equal(home.status,200);assert.match(home.body,/<title>Studio/);
  const kelly=await request('/kelly-studio.html');assert.equal(kelly.status,200);assert.match(kelly.body,/<title>Kelly Studio/);
  assert.equal((await request('/kelly-studio.html','HEAD')).body,'');
  assert.equal((await request('/%zz')).status,400);
  for(const path of ['/.git/config','/../README.md','/%2e%2e%2fREADME.md','/.server.js'])assert.equal((await request(path)).status,404);
  const head=await request('/index.html','HEAD');assert.equal(head.status,200);assert.equal(head.body,'');
  assert.equal((await request('/','POST')).status,405);
  assert.equal((await request('/?after=bad-url')).status,200);
 }finally{await new Promise(r=>server.close(r));}
});
