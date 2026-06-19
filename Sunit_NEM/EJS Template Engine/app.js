const express = require('express');
const app=express()

app.set("view engine","ejs")

app.get("/products",(req,resp)=>{
    const products=[
        {id:1,name:"TV",price:12000},
        {id:2,name:"Fan",price:1200},
        {id:3,name:"AC",price:33000},
        {id:4,name:"Fridge",price:22000}
    ]
    resp.render("product",{products})
})

app.listen(4000,()=>{
    console.log("running");
    
})