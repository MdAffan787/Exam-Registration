
const bcrypt=require('bcrypt');
const adminModel=require("../models/admin")
const {genrateToken}=require("../utils/genrateToken")
const jwt=require("jsonwebtoken")



module.exports.loginadmin=async function(req,res){
    let{email,password}=req.body;
    try{
        admin=await adminModel.findOne({email});
        if(!admin)return res.send("email or password incorrect.");
        
            bcrypt.compare(password,admin.password,function(err,result)
        {
            if(result)
            {
                let token=genrateToken(student);
                res.cookie("token",token);
                res.send("Your logined.");
            }
            else
            {
               res.send("email or password incorrect.");
            }
        })
        
    }
    catch(err){
        console.log(err.massage);
       res.redirect('/');
    }
}
module.exports.logout= function(){
res.cookie("token","");
res.redirect('/');
}