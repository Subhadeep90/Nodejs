const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../util/path')
const contactuspagetodisplay=require('../Controllers/product')
router.post('/success',contactuspagetodisplay.contactusPage);

router.get('/contactus',contactuspagetodisplay.contactusPagetoget)
module.exports=router;