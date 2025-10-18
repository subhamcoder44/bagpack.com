const mongoose=require('mongoose');
const adminSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,  
        maxlength:30,
        lowercase:true,
        unique:true,
        minlength:[4,'Username must be at least 4 characters long']
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        minlength:[10,'Email must be at least 10 characters long']  
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:[6,'Password must be at least 6 characters long'],
        unique:true
    },
    product:{
        type:[String],
        required:true,
        default:[]
    }
    
})

module.exports=mongoose.model("Admin",adminSchema)