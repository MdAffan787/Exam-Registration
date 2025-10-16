
const bcrypt=require('bcrypt');
const studentModel=require("../models/student")
const {genrateToken}=require("../utils/genrateToken")
const jwt=require("jsonwebtoken")


module.exports.createStudent=async function(req,res){
    let{name,fatherName,dateOfBirth,Phone,email,password,usnNumber,semester,branch,image,address,Aadhar}=req.body;
    try{
        let student=studentModel.findOne({email});
        if(!student)
        {
            let salt=await bcrypt.genSalt(10);
            let hash=await bcrypt.hash(password,hash);
           let student=await studentModel.create({
                name,
                fatherName,
                dateOfBirth,
                Phone,
                email,
                password:hash,
                usnNumber,
                semester,
                branch,
                image,
                address,
                Aadhar,
            });
            let token=genrateToken(student);
             res.cookie("token",token);
        res.status(201).send("Student registered successfully");
        }
        else{
                res.send("You already registerd!");
            }
    }
    catch(err){
        console.log(err.massage);
        res.redirect('/');
    }

}
module.exports.loginStudent=async function(req,res){
    let{email,password}=req.body;
    try{
        student=await studentModel.findOne({email});
        if(!student)return res.send("email or password incorrect.");
        
            bcrypt.compare(password,student.password,function(err,result)
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
module.exports.logout=function(){
    res.cookie("token","");
     res.redirect('/');


}