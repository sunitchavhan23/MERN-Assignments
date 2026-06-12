// Express Module Path
const express = require('express');
const path = require('path');
const app=express()
app.get("/",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"Views","home.html"))
})
app.get("/about",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"Views","about.html"))
})
app.get("/contact",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"Views","contact.html"))
})

app.use((req,resp,next)=>{
    resp.sendFile(path.join(__dirname,"Views","error.html"))
})

app.listen(1500,()=>{
    console.log("Running");
    
})