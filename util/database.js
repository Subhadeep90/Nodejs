const Sequelize=require('sequelize');

const sequelize=new Sequelize('node-complete','root','Subhadeep@1990',
{
    dialect:'mysql',host:'localhost',  dialectModule: require('mysql4'),
});
module.exports=sequelize;