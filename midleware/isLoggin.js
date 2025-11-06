 const jwt=require('jsonwebtoken');
const studentModel=require('../models/student');
 const cookie=require("cookie-parser");
 
 
 module.exports.isLogin=async function(req,res,next)
 {
    if(!req.cookies.token)
    {
        res.send("you have to login")
        res.redirect('/');
    }
    try{
        let decoded=jwt.verify(req.cookies.token,process.env.JWT_KEY);
        let student=await studentModel
        .findOne({email:decoded.email})
        .select("-password");
        req.student=student;
        next();

    }
    catch(err)
    {
        
        res.redirect('/');
    }
 }