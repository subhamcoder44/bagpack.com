const mongoose = require('mongoose');
const userSchmea = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30,
        lowercase: true,
        unique: true,
        minlength:[4,'Username must be at least 4 characters long']
    },  
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength:[10,'Email must be at least 10 characters long']
    },
    password: {
        type: String,
        required: true,
        minlength: [6,'Password must be at least 6 characters long'],
        unique: true,
        trim: true,

    },
    contact:{
        type:Number,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10

    },
    oeder:{
        type:Array,
        default:[
           
        ],

    }
}
);
const user = mongoose.model('User', userSchmea);
module.exports = user;
