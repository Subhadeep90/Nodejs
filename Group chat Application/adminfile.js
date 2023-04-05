const express=require('express');
const router=express.Router();
const fs=require('fs');

router.get('/',(req,res,next)=>{
    fs.readFile("Username.txt",{encoding:"utf-8"},(error,data)=>{
        if(error)
        {
            console.log(error);
        }
        res.send(`${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"method="Post">Chat<input type ="text" name="Chat"></input><input type="hidden" name="username" id="username"></input><button type ="submit">Send</button></form>`)
    });
    });
   
router.post('/',(req,res,next)=>{
fs.writeFile("Username.txt",`${req.body.username}:${req.body.Chat}`,{flag:'a'},error=>{
   error? console.log(error):res.redirect("/")
});
});
module.exports=router;