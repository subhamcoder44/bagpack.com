const express = require('express');
const router=express.Router();
const Admin=require('../models/admin.model');
const { body, validationResult } = require('express-validator');
router.get('/create',async(req,res)=>{
    res.send('admin');
});

router.post('/create',async(req,res)=>{
    let{username,email,password}=req.body;
    if(Admin.length>0){
        return res.status(500).send({message:"Admin already exists"});
    }

let creteadmin=Admin.creteadmin({
    username:username,
    
    exmail:email,
    
    password:password

});




});


module.exports=router;