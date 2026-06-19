const express = require('express');
const mongoose = require('mongoose');
const { connectDB } = require('./db');
const router = require('./Routes/productRoutes');
connectDB()

const app=express()
app.use(express.json())
app.use("/",router)

app.listen(4000,()=>{
    console.log("running");
    
})