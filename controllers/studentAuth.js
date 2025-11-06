
const bcrypt=require('bcrypt');
const studentModel=require("../models/student")
const {generateToken}=require("../utils/generateToken")
const jwt=require("jsonwebtoken")
const examModel=require('../models/exam');
const isLoggin=require('../midleware/isLoggin')
const upload=require("../config/multer");

module.exports.createStudent=[upload.single("image"),async function(req,res){
    let{name,fatherName,dateOfBirth,phone,email,password,usnNumber,semester,branch,image,address,aadhar}=req.body;
   
    try{
        let student=await studentModel.findOne({email});
        if(!student)
        {
            let salt=await bcrypt.genSalt(10);
            let hash=await bcrypt.hash(password,salt);
           let student=await studentModel.create({
                name,
                fatherName,
                dateOfBirth,
                phone,
                email,
                password:hash,
                usnNumber,
                semester,
                branch,
                image: req.file.filename,
                address:{
                    dist:address.dist,
                    city:address.city,
                    pincode:address.pincode,
                },
                aadhar,
            });
            let token=generateToken(student);
             res.cookie("token",token);
              res.redirect("/student/home");
            
        }
        else{
               req.flash("success","You already registerd!");
               res.redirect("/student/login")
            }
    }
    catch(err){
        console.log(err.message);
        res.redirect('/student');
    }

}];
module.exports.loginStudent=async function(req,res){
    let{email,password}=req.body;
    try{
        let student=await studentModel.findOne({email});
        if(!student){
            req.flash("error","email or password is incorrect");
            return res.redirect("/student");
        }
        
            bcrypt.compare(password,student.password,async function(err,result)
        {
            if(result)
            {
                let token=generateToken(student);
                res.cookie("token",token);
              
             res.redirect("/student/home");
            }
            else
            {
               req.flash("error","email or password incorrect.");
               res.redirect("/student");
            }
        })
        
    }
    catch(err){
        console.log(err.message);
       res.redirect('/student');
    }
}
module.exports.logout= function(req,res)
{
res.clearCookie("token");
res.redirect('/');
}
