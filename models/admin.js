const mongoose=require("mongoose");


const adminSchema=mongoose.Schema({

   
    name:String,
    phone:Number,
    email:
    {type:String,
        unique: true,
        required:true,
    },
    password:String,

    
    department:{
        type:String,
        required:true,
    },
    post:{
        type:String,
        required:true,
    },

})
module.exports=mongoose.model("admin",adminSchema);