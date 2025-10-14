const mongoose=require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/testapp1`);

const studentSchema=mongoose.Schema({

    //basic
    name:String,
    fatherName:String,
    dateOfBirth:Date,
    
    Phone:Number,
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
    branch:String,


    //profile
    image:String,
    address:{
        city:{
            type:String,
            required:true},
        Dist:{
            type:String,
            required:true},
        pincode:{
            type:Number,
            required:true},
    },



    Aadhar:Number,
    paymant:{
        type:Mongoose.Schema.Type.ObjectId,
        ref:payment,
    },
    date:{
        type:Date,
        default:Date.now
    }

})





module.exports=mongoose.model("student",studentSchema);