const http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname;
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]); if(p==='/')p='/index.html';
  const fp=path.join(root,p);
  fs.readFile(fp,(e,data)=>{
    if(e){res.writeHead(404);res.end('not found');return;}
    const ext=path.extname(fp).toLowerCase();
    const ct={'.html':'text/html','.js':'text/javascript','.css':'text/css'}[ext]||'application/octet-stream';
    res.writeHead(200,{'Content-Type':ct+'; charset=utf-8'});res.end(data);
  });
}).listen(8477,()=>console.log('serving on 8477'));
