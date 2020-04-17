const http = require('http');
const app = require('./app');
PORT = process.env.PORT || 3000;

server = http.createServer(app);

server.listen(PORT);