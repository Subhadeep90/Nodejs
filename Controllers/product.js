
const path=require('path');
const rootDir=require('../util/path')

exports.getProductPage=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
  };
  exports.getProduct=(req,res,next)=>{

    console.log(req.body);
    
    res.redirect('/');
    };
  
 
    exports.errorpage=(req,res,next)=>{
        res.status(404).sendFile(path.join(rootDir,'views','404.html'));
      }
    exports.contactusPage=(req,res,next)=>{
        res.send('<h1>Form successfuly filled</h1>')
    }
    exports.contactusPagetoget=(req,res,next)=>{
        res.sendFile(path.join(rootDir,'views','contactus.html'));
    }
    exports.shop=(req,res,next)=>{

        res.sendFile(path.join(rootDir,'views','shop.html'));
        
      }