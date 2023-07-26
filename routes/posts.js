const express=require('express');
const invposts=require('../models/invposts');
const store=require('../models/store');
const invRequest=require('../models/invRequest');




const router=express.Router();




//save Inventory

router.post('/smanager/save',(req,res)=>{
    let newEmp=new invposts(req.body);

    

    newEmp.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Inventory  saved"
        });

    });

});

// get Inventory

router.get('/smanager/get',(req,res)=>{
    invposts.find().exec((err,invposts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            extistingEmp:invposts
        });

    });
});






//update Inventory

router.patch("/smanager/update/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await  invposts.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})



// router.put('/smanager/update/:id',(req,res)=>{
//     invposts.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set:req.body
//         },
//         (err,post)=>{
//             if(err){
//                 return res.status(400).json({error:err});
//             }
//             return res.status(200).json({
//                 success:"updates succesfully"
//             });

//         }
//     );
// });




//delete Inventory

router.delete('/smanager/delete/:id',(req,res)=>{
    invposts.findByIdAndRemove(req.params.id).exec((err,deletedEmp)=>{
        if(err){
            return res.status(400).json({
                message:"delete unsufull"
            })
        }
        return res.json({
            message:"delete success",deletedEmp
        });
    });
});






//get a sprecific Inventory details

router.get("/smanager/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await  invposts.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})


// router.get('/smanager/:id',(req,res)=>{
//     let postId=req.params.id;
    
//     invposts.findById(postId,(err,post)=>{
//         if(err){
//             return res.status(400).json({
//                 success:false,err
//             });
//         }
//         return res.status(200).json({
//             success:true,
//             post
//         });

//     });

    
// });




//save stores

router.post('/maintaince/save',(req,res)=>{
    let newstore=new store(req.body);

    newstore.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Stores save successfully"
        });
    });
});

//get stores

router.get('/maintaince/get',(req,res)=>{
    store.find().exec((err,store)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            extgstore:store
        });
    });
});

//get a sprecific stores details

router.get('/maintaince/:id',(req,res)=>{
    let postId=req.params.id;
    
    store.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            post
        });

    });

    
});

//save request

router.post('/request/save',(req,res)=>{
    let newreq=new invRequest(req.body);

    newreq.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Request save successfully"
        });
    });
});

//get request

router.get('/request/get',(req,res)=>{
    invRequest.find().exec((err,invRequest)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            extginvRequest:invRequest
        });
    });
});

//get a sprecific request details

router.get('/request/:id',(req,res)=>{
    let postId=req.params.id;
    
    invRequest.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            post
        });

    });

    
});

//delete request

router.delete('/request/delete/:id',(req,res)=>{
    invRequest.findByIdAndRemove(req.params.id).exec((err,deletedEmp)=>{
        if(err){
            return res.status(400).json({
                message:"delete unsufull"
            })
        }
        return res.json({
            message:"delete success",deletedEmp
        });
    });
});

module.exports=router;