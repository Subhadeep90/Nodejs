const express=require('express');
const router=express.Router();
const path=require('path');
const getproductPagetodisplay=require('../Controllers/product');
const rootDir=require('../util/path');

router.get('/add-product',getproductPagetodisplay.getProductPage);
router.post('/add-product',getproductPagetodisplay.getProduct);
router.get('add-product/cart',getproductPagetodisplay.cart);




module.exports = router;