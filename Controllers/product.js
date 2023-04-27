
//const bodyparser=require('body-parser');
const path=require('path');
const rootDir=require('../util/path')
const Product=require('../Models/product');
const { resolveObjectURL } = require('buffer');

//const { appendFile } = require('fs');
//const Cart=require('../Models/Cart');
// exports.cart=(req,res,next)=>{
//   res.send('<h1>This is the Cart</h1>')
  
// }
exports.getProductPage=(req,res,next)=>{
  
    res.sendFile(path.join(rootDir,'views','add-product.html'))
  };
  exports.getProduct=(req,res,next)=>{
     let title=req.body.title;
    let price=req.body.price;
    let description=req.body.description;
    let imageurl=req.body.imageurl;

    const product=new Product(null,title,price,description,imageurl)
    product.save()
    .then(()=>{
      res.redirect('/')})
    .catch((error)=>{
     console.log(error);
    })
    };
    exports.getProductid=(req,res,next)=>{
      const prodid=req.params.productid;
     Product.findByid(prodid).then(([product])=>{
       console.log(product)
     })
    .catch((err)=>{
      console.log(err)
    })
    }
    
    
 
    exports.errorpage=(req,res,next)=>{
        res.status(404).sendFile(path.join(rootDir,'views','404.html'));
      }
    exports.contactusPage=(req,res,next)=>{
        res.send('<h1>Form successfuly filled</h1>')
    }
    exports.contactusPagetoget=(req,res,next)=>{
      Product.fetchALL()
        .then(([rows,fieldData])=>{
             res.send(rows);

               
          //s.sendFile((path.join(rootDir,'views','contactus.html')))
        
        }) .catch((error)=>{
        console.log(error);
        })  
      }
      // exports.contactusPagetoget=(req,res,next)=>{
        
      //       res.sendFile((path.join(rootDir,'views','contactus.html')))
      //     } 
        
      
    exports.shop=(req,res,next)=>{
      res.sendFile(path.join(rootDir,'views','shop.html'));           
    
      }
