const http = require('http');
const path = require('path');
const fs = require('fs');
const conf = {
    hostname: '127.0.0.1',
    port: '9526',
};

const indexPath = path.join(__dirname, './index.html');
const html = fs.readFileSync(indexPath, 'utf8');
// console.log(html);
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
});

server.listen(conf.port, conf.hostname, () => {
    const addr = `http://${conf.hostname}:${conf.port}`;
    console.log(`Server start at ${addr}`);
});