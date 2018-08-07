const http = require('http');
const conf = {
    hostname: '127.0.0.1',
    port: '9527',
};
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello HTTP!');
});

server.listen(conf.port, conf.hostname, () => {
    const addr = `http://${conf.hostname}:${conf.port}`;
    console.log(`Server start at ${addr}`);
});