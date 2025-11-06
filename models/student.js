const mongoose=require("mongoose");
const studentSchema=mongoose.Schema({

    //basic
    name:String,
    fatherName:String,
    dateOfBirth:Date,
    
    phone:Number,
    email:
    {type:String,
        unique: true,
        required:true,
    },
    password:String,

    //acadamics
    usnNumber:String,
    semester:{
        type:Number,
        min:1,
        max:8,},
   branch: {
    type: String,
    enum: ["cse", "ece", "eee", "me", "ce", "aiml", "ise"],
    required: true,
},


    //profile
    image:String,
    address:{
        city:{
            type:String,
            required:true},
        dist:{
            type:String,
            required:true},
        pincode:{
            type:Number,
            required:true},
    },
    aadhar:Number,
    payment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"payment",
    }],
    exams:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"exam",
        unique: true,
    }],
    date:{
        type:Date,
        default:Date.now
    }

})





module.exports=mongoose.model("student",studentSchema);