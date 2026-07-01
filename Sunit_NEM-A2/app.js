const express = require('express');
const { connectDB } = require('./db');
connectDB()
const session = require('express-session');
const router = require('./Routes/userRoute');
const studentRoute = require("./Routes/studentRoute");
const methodOverride = require('method-override');
const app=express()
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:"test",
    resave:false,
    saveUninitialized:false
}))
app.use(methodOverride("_method"))
app.use("/",router)
app.use("/", studentRoute);
app.listen(3000,()=>{
    console.log("Running");
    
})