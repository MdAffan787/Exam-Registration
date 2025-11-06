const express=require('express');
const router=express.Router();
const {adminIsLogin}=require("../midleware/adminIsLoggin")
const {isLogin}=require("../midleware/isLoggin")
const {createExam }=require("../controllers/examAuth");
const studentModel=require("../models/student");
const examModel=require("../models/exam");
router.get('/',function(req,res)
{
    res.render("examCreate.ejs");
})
router.post('/create',adminIsLogin,createExam)

router.get('/registration/:examId/:studentId',isLogin, async function(req,res)
{
    let student=await studentModel.findById(req.params.studentId)
    let exam=await examModel.findOne({examId:req.params.examId})
    res.render("examDeatil.ejs",{student,exam});
});




module.exports = router;