const db=require('./util/database');
const express=require('express');
const app=express();
const path=require('path');
const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');   
// db.execute('SELECT * FROM products')
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })
const Contactus=require('./routes/contactus');
const errorpagetodisplay=require('./Controllers/product');
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(Contactus);
app.use('/admin',adminroutes);
//app.use(adminroutes)
app.use(shoproutes);
app.use(errorpagetodisplay.errorpage);
 app.listen(5000); 