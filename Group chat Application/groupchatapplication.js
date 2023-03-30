const express=require('express');
const app=express();
const fs=require('fs');
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));

app.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)"action="/" method="Get">Name<input type="text" name="Name" id="username"></input><button type="submit">Submit</button></form>')
});
app.get('/',(req,res,next)=>{
    fs.readFile("Username.txt",{encoding:"utf-8"},(error,data)=>{
        if(error)
        {
            console.log(error);
        }
        res.send(`${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"method="Post">Chat<input type ="text" name="Chat"></input><input type="hidden" name="username" id="username"></input><button type ="submit">Send</button></form>`)
    });
    });
   
app.post('/',(req,res,next)=>{
fs.writeFile("Username.txt",`${req.body.username}:${req.body.Chat}`,{flag:'a'},error=>{
   error? console.log(error):res.redirect("/")
});
});

app.listen(3000);                                                                                                                                                                     