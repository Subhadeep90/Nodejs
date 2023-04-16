
const path=require('path');
const rootDir=require('../util/path')
const Product=require('../Models/product');
const Cart=require('../Models/Cart');
const fs = require('fs');
exports.cart=(req,res,next)=>{
  res.send('<h1>This is the Cart</h1>')
  
}

exports.getProductPage=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
  };
  exports.getProduct=(req,res,next)=>{
    const product=new Product(req.body.title);
    product.save();
    res.redirect('/');
    };
    exports.getProductid=(req,res,next)=>{
      const prodID=req.body.productId;
      Product.findByid(prodID,(product)=>{
        Cart.addProduct(prodID,product.price);
      })
      res.redirect('/cart');
    }
    
    
 
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
