const express = require('express');
const router=express.Router();

const Product=require('../models/product.schema');



router.get('/add',async(req,res)=>{
    res.render('products');
});

module.exports=router;