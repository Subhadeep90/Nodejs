const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/home')
    {
        res.write("Welcome to Home");
        return res.end();
    }
    if(url==='/about')
    {
        res.write("Welcome to About Us page");
        return res.end();
    }
    if(url==='/about')
    {
        res.write("Welcome to About Us page");
        return res.end();
    }
    
    if(url==='/node')
    {
    
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Welcome to my Node js project</h1></body>');
    res.write('</html>');
    return res.end();
    }
    
})
server.listen(3000);