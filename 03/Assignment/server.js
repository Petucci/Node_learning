const http = require('http');
const Router = require('./routes.js')

const server = http.createServer(Router.RouteHandler); 

server.listen(3001);