const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST">Name<input type="text"name ="text">Size<input type="number" name="number"><button>submit</button></form>');
})
app.post('/product',(req,res,next)=>{
console.log(req.body);

res.redirect('/');
})
app.use('/',(req,res,next)=>{

    res.send("Hello from Express js");

    
    
  });


    app.listen(3000);