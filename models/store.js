const mongoose=require('mongoose');
const storeschema=new mongoose.Schema({
    item:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    }
    
})

module.exports=mongoose.model('store',storeschema);