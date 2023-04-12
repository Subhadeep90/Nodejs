const products=[];

const fs=require('fs');
const path=require('path');
const rootDir=require('../util/path');
const getProducts =()=>{
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            return [];
        }
        return JSON.parse(fileContent);
     })
}
module.exports=class Products{
    constructor(t)
    {
     this.title=t;
    }
    save()
    {
     const p=path.join(rootDir,'data','products.json');
     fs.readFile(p,(err,fileContent)=>{
         console.log(err);
     let products=[];
     if(!err)
    {
      products=JSON.parse(fileContent);
    }
    products.push(this);
    fs.writeFile(p,JSON.stringify(products),error=>{
        console.log(error);
    })
})
}
    static fetchALL()
    {
        getProducts();
    }
}
