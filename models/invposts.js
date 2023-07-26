const mongoose=require('mongoose');
const postschema=new mongoose.Schema({
    Category:{
        type:String,
        required:true

    },
    Product_Name:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    },
    Manufacture:{
        type:String,
        required:true

    },
    Expiry:{
        type:String,
        required:true
    }
    

})

module.exports=mongoose.model('invposts',postschema);