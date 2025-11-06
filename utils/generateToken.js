const jwt =require('jsonwebtoken');


const generateToken=(user)=>{
    return token=jwt.sign({email:user.email,id:user._Id}, process.env.JWT_KEY)
}
module.exports.generateToken=generateToken;