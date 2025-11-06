const express =require('express');
require('dotenv').config();
const app =express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const db = require('./config/mongooseConnect');
const createDefaultAdmin = require("./config/createDefaultAdmin");

const cookieParser=require('cookie-parser');
app.use(cookieParser());
const path=require('path');
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,'public')));

const session=require("express-session");
const flash=require("connect-flash");


app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
}))
app.use(flash());
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

const indexRouter=require("./router/index");
const studentsRouter=require("./router/studentsRouter");
const adminsRouter=require("./router/adminsRouter");
const examsRouter=require("./router/examsRouter");
const paymentRouter=require("./router/paymentRouter");



app.use('/',indexRouter);
app.use('/student',studentsRouter);
app.use('/admin',adminsRouter);
app.use('/exam',examsRouter);
app.use('/payment',paymentRouter)

db.once("open", async () => {
  console.log("✅ MongoDB Connected!");
  await createDefaultAdmin(); // this creates admin only once if missing
});


app.listen(3000,function()
{
    console.log("its running!");
})