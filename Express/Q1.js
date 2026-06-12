const express = require('express');
const app=express()
app.get("/",(req,resp)=>{
    resp.end("Home!")
})
app.get("/about",(req,resp)=>{
    resp.end("About Us!")
})
app.get("/contact",(req,resp)=>{
    resp.end("Contact Us!")
})

app.use((req,resp,next)=>{
    resp.end("Error !")

})

app.listen(2000,()=>{
    console.log("running");
    
})