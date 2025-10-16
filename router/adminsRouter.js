const express = require('express');
const router = express.Router();
const {loginAdmin,logout}=require("./controllers/adminAuth");

router.get("/",function(req,res){
    res.send("Admin Page");
});
router.post("/login",loginAdmin);
router.post("/logout",logout);





module.exports = router;