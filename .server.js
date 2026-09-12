const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

function createServer() {
  return http.createServer((req, res) => {
    let pathname;
    try { pathname = decodeURIComponent(req.url.split('?')[0]); }
    catch { res.writeHead(400); res.end('bad request'); return; }
    if (!['GET', 'HEAD'].includes(req.method)) {
      res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return;
    }
    // Serve only the two app documents, never arbitrary workspace files.
    const files = {'/':'index.html','/index.html':'index.html','/kelly-studio.html':'kelly-studio.html'};
    if (!Object.hasOwn(files, pathname)) {
      res.writeHead(404); res.end('not found'); return;
    }
    fs.readFile(path.join(__dirname, files[pathname]), (error, data) => {
      if (error) { res.writeHead(500); res.end('unable to read app'); return; }
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Content-Type-Options': 'nosniff',
        'Content-Length': data.length
      });
      res.end(req.method === 'HEAD' ? undefined : data);
    });
  });
}

if (require.main === module) {
  createServer().listen(8477, '127.0.0.1', () => console.log('http://127.0.0.1:8477'));
}
module.exports = { createServer };
