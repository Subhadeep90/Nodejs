const http=require('http');
const server=http.createServer((req,res)=>{
res.write('Sam');
res.end();

})
server.listen(4000);

