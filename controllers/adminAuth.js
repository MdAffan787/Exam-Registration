
const bcrypt=require('bcrypt');
const adminModel=require("../models/admin")
const {generateToken}=require("../utils/generateToken")
const jwt=require("jsonwebtoken")
const examModel=require('../models/exam');




module.exports.loginAdmin=async function(req,res)
{
    let{email,password}=req.body;
    let admin=await adminModel.findOne({email});
    let exams=await examModel.find();
        if(!admin){
           req.flash("error","email or password incorrect.")
             return res.redirect("/admin");
            }
    try{
            bcrypt.compare(password,admin.password,function(err,result)
        {
            if(result)
            {
                let token=generateToken(admin);
                res.cookie("token",token);
                req.flash("success","successfully login")
                res.redirect("/admin/home");
            }
            else
            {
               req.flash("error","email or password incorrect.")
             res.redirect("/admin");
            }
        })
    }
    catch(err)
    {
        console.log(err.message);
       res.redirect('/');

    }
}

module.exports.logout= function(req,res)
{
res.clearCookie("token");
res.redirect('/');
}
