const express = require('express');
const router = express.Router();
const {createStudent,loginStudent,logout}=require("../controllers/studentAuth")
const examModel=require("../models/exam");
const { isLogin } = require('../midleware/isLoggin');

router.get("/",function(req,res)
{
    res.render("studentLogin.ejs");
})
router.get("/home",isLogin, async function(req, res){
let exams=await examModel.find({semester:req.student.semester,branch:req.student.branch})

     res.render("studentHome.ejs",{exams,student:req.student});
})

router.get("/create",function(req,res)
{
    res.render("studentCreate.ejs");
})
router.post("/create",createStudent);

router.post("/login",loginStudent);
router.get("/logout",logout);




module.exports = router;