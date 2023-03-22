const file=require('./file');
const http= require('http');
const server=http.createServer(file.handler);
 console.log(file.text);  

server.listen(4000);