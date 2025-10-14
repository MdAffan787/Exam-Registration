const express =require('express');
require('dotenv').config();
const app =express();

const path=require('path');
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,'public')));




app.listen(3000,function()
{
    console.log("its running!");
})