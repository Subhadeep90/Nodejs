const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
const userroutes=require('../Group chat Application/userfile.js');
const adminroutes=require('../Group chat Application/adminfile.js');

app.use(userroutes);
app.use(adminroutes);
app.listen(3000);                                                                                                                                                                     