const mysql=require('mysql4');
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'Subhadeep@1990'
});
module.exports=pool.promise();