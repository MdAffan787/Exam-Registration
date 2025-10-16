const express = require('express');
const router = express.Router();
const {createStudent,loginStudent,logout}=require("../controllers/studentAuth")

router.post("/",function(req,res)
{
    res.send("student page");
})
router.post("/create",createStudent);

router.post("/login",loginStudent);
router.post("/logout",logout);


module.exports = router;