const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../util/path');
const shoppagetodisplay=require('../Controllers/product')

router.get('/',shoppagetodisplay.shop);


module.exports =router;