

const examModel=require('../models/exam');



module.exports.createExam=async function(req,res){
let{examId, semester, branch,subjects,registerStartDate,registerLastDate,fee}=req.body;
let exam=examModel.create({
    examId,
    semester,
    branch,
    subjects,
    registerStartDate,
    registerLastDate,
    fee
})
res.send("exam was created");
}