const http=require('http');
const server=http.createServer((req,resolve)=>{
    console.log(req.headers,req.method,req.url);
    resolve.setHeader('Content-type','text/html');
    resolve.write('<html>');
    resolve.write('<head><title>My first Page</title></head>');
    resolve.write('<body><h1>My first node js</h1></body>');
    resolve.write('</html>');
    resolve.end();
})
server.listen(4000);