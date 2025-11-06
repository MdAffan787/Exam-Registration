const adminModel=require("../models/admin");
const bcrypt=require("bcrypt");
 const jwt=require('jsonwebtoken');
  const cookie=require("cookie-parser");



module.exports.adminIsLogin= async (req,res,next)=>{
    
        if(!req.cookies.token)
    {
        return res.redirect('/admin');
    }
    try{
        let decoded=jwt.verify(req.cookies.token,process.env.JWT_KEY);
        let admin=await adminModel
        .findOne({email:decoded.email})
        .select("-password")
        if(!admin)
        {
        return res.redirect('/admin');
        }
        else{
            req.admin=admin;
            next();

        }
    }
        catch(err)
        {
            console.log(err.message);
            res.redirect('/admin');
        }

};

