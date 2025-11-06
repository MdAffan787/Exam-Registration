const express = require('express');
const router = express.Router();
const { loginAdmin, logout } = require("../controllers/adminAuth");
const examModel=require("../models/exam");
const { adminIsLogin } = require("../midleware/adminIsLoggin"); 

router.get("/", function(req, res) {
    res.render("adminLogin.ejs");
});
router.get("/home",adminIsLogin, async function(req, res){
let exams=await examModel.find()
     res.render("adminHome.ejs",{exams,admin:req.admin});
})

router.post("/login", loginAdmin);
router.get("/logout", logout);

module.exports = router;
