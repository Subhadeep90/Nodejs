const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
const userroutes=require('./userfile.js');
const adminroutes=require('./adminfile.js');

app.use(userroutes);
app.use(adminroutes);
app.listen(3000);                                                                                                                                                                     