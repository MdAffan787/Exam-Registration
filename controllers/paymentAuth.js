const paymentModel=require("../models/payment");
const examModel=require('../models/exam');
const studentModel=require("../models/student");




module.exports.paySuccess=async (req,res)=>{
  
      let student=await studentModel.findById(req.params.studentId);
      let exam=await student.exam({examId:req.params.examId})
      
          if (!exam || !student) {
      req.flash("error", "Exam or Student not found!");
      return res.redirect("/student/home");
    }



try{
  const payment = await paymentModel.create({
      student: student._id,
      exam: exam._id,
      amount: exam.fee,
      receipt: `PAY-${Date.now()}`,
      status: "success",
    });



      exam.students.push(student._id);
      student.exam.push(exam._id);
      student.payment.push(payment._id);
      await exam.save();
    await student.save();
     

      req.flash("success","you are register for exam")
      res.redirect("/student/home");
}
catch(err){
  console.log(err.message)
  req.flash("error","payment failed");
  res.redirect("/student/home");
  
}

}
