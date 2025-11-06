

const examModel=require('../models/exam');



module.exports.createExam=async function(req,res){
let{examId, semester, branch,subject,registerStartDate,registerLastDate,fee}=req.body;
let subjects = [subject];
let exam=await examModel.create({
    examId,
    semester,
    branch,
    subjects,
    registerStartDate,
    registerLastDate,
    fee
})
req.flash("success","exam was create successfully");
res.redirect("/admin/home")
};
module.exports.registerForExam=async function(req,res){

}