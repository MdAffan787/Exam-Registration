const jwt =require('jsonwebtoken');


const genrateToken=(user)=>{
    return token=jwt.sign({email:user.email,id:user._Id}, JWT_KEY)
}
module.exports.genrateToken=genrateToken;