const express =require('express');
require('dotenv').config();
const app =express();

const path=require('path');
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,'public')));
const cookieParser=require('cookie-parser');


const studentsRouter=require("./router/studentsRouter");
const adminsRouter=require("./router/adminsRouter");
const examsRouter=require("./router/examsRouter");




app.use('/student',studentsRouter);
app.use('/admin',adminsRouter);
app.use('/exam',examsRouter);




app.listen(3000,function()
{
    console.log("its running!");
})