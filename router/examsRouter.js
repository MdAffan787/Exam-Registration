const express=require('express');
const router=express.Router();
const examCreate=require("../controllers/examAuth");

router.get('/',function(req,res)
{
    res.send("exam router");
})
router.post('/create',examCreate)



module.exports = router;