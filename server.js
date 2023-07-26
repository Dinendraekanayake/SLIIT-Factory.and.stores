const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');


const app=express();

//import routes

const postroutes=require('./routes/posts');


app.use(bodyParser.json());
app.use(cors());

//route midleware
app.use(postroutes);



const port =8000;

const url='mongodb+srv://storeManager:dinendra123@storecrude.oawpy63.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB connected");
}).catch((err)=>{
    console.log(err);

})

app.listen(port,()=>{
    console.log(`app is running on: ${port}`);
})
