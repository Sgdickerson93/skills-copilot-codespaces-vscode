// Create web server
// 1. Create a server
// 2. Create a route
// 3. Create a response

// 1. Create a server
const http = require('http');
const server = http.createServer();

// 2. Create a route
server.on('request', (req, res) => {
    // 3. Create a response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

// 4. Listen to a port
server.listen(3000, '
