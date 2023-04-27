const express=require('express');
const app=express();
const path=require('path');
const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');
const Contactus=require('./routes/contactus');
const errorpagetodisplay=require('./Controllers/product');
// const db=require('./util/database');
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(Contactus);
app.use('/admin',adminroutes);
app.use(shoproutes);

app.use(errorpagetodisplay.errorpage);
// db.execute('SELECT * from products')
// .then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.log(error)
// });
 app.listen(3000); 