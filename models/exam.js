const mongoose=require("mongoose");


const examSchema=mongoose.Schema({

    examId:{
        type:String,
        require:true,
        unique: true,
    },

    semester:{
        type:Number,
        min:1,
        max:8,},

    branch:String,

    subjects:[{
        subjectCode:String,
        subjectName:String,
        examDate:Date,
        duration:{
            type:Number,
            default:3,
            min:2,
            Max:4,
        },
    }],

    registerStartDate:{
        type:Date,
        default:Date.now(),
    },

    registerLastDate:{
        type:Date,
        require:true,
    },

    fee: {
        type: Number,
        required: true
    },
   
})

module.exports=mongoose.model("exam",examSchema);