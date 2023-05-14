const sequelize=require('./util/database');
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
const productModel=require('./Models/product')
const UserModel=require('./Models/user');
//const Product = require('./Models/product');
//const User = require('./Models/user');
const cors=require('cors');
const User = require('./Models/user');
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(Contactus);
app.use('/admin',adminroutes);
//app.use(adminroutes)
app.use(shoproutes);
app.use(errorpagetodisplay.errorpage);
productModel.belongsTo(UserModel,{constraints:true,onDelete:'CASCADE'})
sequelize.sync().then((result)=>{
    return UserModel.findAll({where :{id:1}})
}).then((user)=>{
    if(!user)
    {
        return UserModel.create({name:'Max',email:'test@test.com'})
    }
    return user;
}).then((user)=>{
    console.log(user);
    app.listen(5000);
})
.catch((error)=>{
    console.log(error)
})
