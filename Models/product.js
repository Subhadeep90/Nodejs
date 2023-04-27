const products=[];
const db=require('../util/database')
// const fs=require('fs');
const path=require('path');
const rootDir=require('../util/path');
// const getProducts =()=>{
//     fs.readFile(p,(err,fileContent)=>{
//         if(err){
//             return [];
//         }
//         return JSON.parse(fileContent);
//      })
// }
module.exports=class Products{
    constructor(id,title,price,description,iurl)
    {
        this.id=id;
        this.title=title;
        this.price=price;
        this.description=description;
        this.imageurl=iurl;

    }
    save()
    {
    return db.execute('INSERT INTO products(title,price,description,imageurl)VALUES(?,?,?,?)',
    [this.title,this.price,this.description,this.imageurl]
    );
    }
    static fetchALL()
    {
      return db.execute('SELECT * FROM products');
    }

  static findByid(id)
  {
     return db.execute('SELECT  * from products WHERE products.id=?',[id]);
  }


}
