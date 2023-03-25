const fs=require('fs');
const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/')
    {
     return fs.readFile('message.txt',{encoding:"utf-8"},(err,data)=>{
      if(err) 
      {
        console.log(err);
      }
     res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(`<body>${data}</body>`)
    res.write('<html>');
    res.write('<head><title>My new JS</title></head>');
    res.write('<body>');
    res.write('<form action="/message" method="POST">');
    res.write('<input type="text" name="Message">')
    res.write('</input>')
    res.write('<button>Submit</button>')
    res.write('</form>');

    res.write('</body>')
    res.write('</html>');
    return res.end();

    
    })
    
    }
    else if(url==='/message' && method==='POST')
    {
      const body=[];
      req.on('data',(chunk)=>{
      body.push(chunk);
    });
     return req.on('end',()=>{
     const parsedBody=Buffer.concat(body).toString();
     const message=parsedBody.split('=')[0];
     fs.writeFile('message.txt',message,error=>{
      res.statusCode=302;
      res.setHeader('Location','/');
     return res.end();
     
     });
      
    }); 
      
    }
    
    
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My new JS</title></head>');
    res.write('<body>');
    res.write('<h1>First Page</h1>');
    res.write('</body>')
    res.write('</html>');
    res.end();

} 
module.exports.handler=requestHandler;
    module.exports.text='some text';
