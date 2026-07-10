const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const { connectDB } = require('./Config/db');
const userRouter = require('./Routes/userRoute');
const hotelRouter = require('./Routes/hotelRoute');

connectDB()
const app=express()
app.set("view engine","ejs")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.use(session({
    secret:"hotel",
    resave:false,
    saveUninitialized:false
}))

app.use("/",userRouter)
app.use("/",hotelRouter)
app.listen(3000,()=>{
    console.log("Running");
    
})