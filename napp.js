const express=require('express')
const bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.urlencoded({extended:false}));
app.use('/product',(req,res,next)=>{
  console.log(req.body.Item);
  console.log(req.body.Size);

  res.redirect('/');
 })
app.use('/add-product',(req,res,next)=>{
res.send('<form action="/product" method="POST"><input type="text" name="Item"><input type="number" name="Size"><button type="submit">Submit</button></form>')
})
app.use('/',(req,res,next)=>{
    res.send('Hello')
})

    app.listen(3000);