const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:30,
        lowercase:true,
        unique:true,
        minlength:[4,'Product name must be at least 4 characters long'] 
    
    
    },
    Image:{
        type:String,
        required:true,
        trim:true,
        minlength:4,
        maxlength:100,
        default:"https://via.placeholder.com/150",
    },
    price:{
        type:Number,    
        required:true,
        min:0,
        trim:true,

    },
    discount:{
        type:Number,
        min:0,
        max:100,
        default:0,
        trim:true,
        
    },
    textcolor:{
        type:String,
        trim:true,
        default:"black"
    },
    backgroundcolor:{
        type:String,
        trim:true,
        default:"white"
    },
    panelcolor:{
        type:String,
        trim:true,
        default:"grey"
    },
    }
    );
const Product = mongoose.model('Product', productSchema);
module.exports = Product;   