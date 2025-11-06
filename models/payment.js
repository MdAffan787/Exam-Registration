const mongoose=require("mongoose");
const student = require("./student");
const exam = require("./exam");


const paymentSchema=mongoose.Schema({

   
   student:
   [{
    type:mongoose.Schema.Types.ObjectId,
    ref:"student",

   }],
   exam:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"exam",
   }],
    amount:Number,
recipt:String,
status:{
    type:String,
    defult:"pending",
}
})





module.exports=mongoose.model("payment",paymentSchema);