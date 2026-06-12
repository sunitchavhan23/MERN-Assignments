const mongoose = require('mongoose');
const { connectDB } = require('./db');
connectDB()

// Schema Creation
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    course: {
        type: String,
        enum: ["BE", "MBA", "BBA", "BCOM"],
        required: true
    },
    age: {
        type: Number,
        min: 18,
        required: true
    }
},
    { timestamps: true }
)

// Model Creation
const studentModel = mongoose.model("student", studentSchema)

// Import Express
const express = require('express');
const app = express()
app.use(express.json())

// Insert Student
app.post("/add", async (req, resp) => {
    try {
        const data = new studentModel({
            name: req.body.name,
            email: req.body.email,
            course: req.body.course,
            age: req.body.age
        })
        const result = await data.save()
        resp.json(result)
    } catch (error) {
        console.log(error);
    }
})

// Update
app.patch("/update/:id", async (req, resp) => {
    try {
        const result = await studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        resp.json(result)
    } catch (error) {
        console.log(error);

    }
})

// Delete
app.delete("/delete/:id", async (req, resp) => {
    try {
        const result = await studentModel.findByIdAndDelete(req.params.id)
        resp.json(result)
    } catch (error) {
        console.log(error);

    }
})

// Show
app.get("/show",async(req,resp)=>{
    try {
        const result=await studentModel.find()
        resp.json(result)
    } catch (error) {
        console.log(error);
        
    }
})

// Create Server
app.listen(4000,()=>{
    console.log("running");
    
})