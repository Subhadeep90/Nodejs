const express=require('express');
const router=express.Router();
router.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)"action="/" method="Get">Name<input type="text" name="Name" id="username"></input><button type="submit">Submit</button></form>')
});
module.exports=router;
