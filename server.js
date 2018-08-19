var http = require ('http');
var app = require('./app');

var PORT = 8090;


http.createServer(app.handleRequest).listen(8090);