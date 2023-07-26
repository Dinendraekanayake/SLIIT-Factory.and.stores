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
 
    Quantity:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },

})

module.exports=mongoose.model('invRequest',postschema);