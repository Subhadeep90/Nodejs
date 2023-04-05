const express=require('express');
const app=express();
const path=require('path');
const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');
const Contactus=require('./routes/contactus');

const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(Contactus);
app.use('/admin',adminroutes);
app.use(shoproutes);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

    app.listen(3000); 