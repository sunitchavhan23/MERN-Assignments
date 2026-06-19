const express = require('express');
const path = require('path');
const app=express()
app.use(express.urlencoded({extended:true}))

app.get("/",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"Views","form.html"))
})

app.post("/form",(req,resp)=>{
    const data=req.body;
    console.log(data);
    resp.json(data)
    
})

app.listen(2500,()=>{
    console.log("Running");
    
})