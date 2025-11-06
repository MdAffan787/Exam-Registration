const express=require("express");
const router=express.Router();
const {paySuccess}=require("../controllers/paymentAuth");


router.get("/:examId/:studentId",paySuccess)




module.exports=router;
