const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../util/path')
router.post('/success',(req,res,next)=>{
    res.send('<h1>Form successfuly filled</h1>')
})

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
})
module.exports=router;