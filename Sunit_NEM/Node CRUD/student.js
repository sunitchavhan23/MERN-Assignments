const mongoose = require('mongoose');
const { connectDB } = require('./db');
connectDB()

const studentSchema=mongoose.Schema({
   rollno:{
    required:true,
    type:Number
   },
   name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    course:{
        type:String,
        enum:["IT","MECH","CIVIL","AIML"],
        required:true
    },
})

const studentModel=mongoose.model("student",studentSchema)





// Insert
async function addStudent() {
    try {
        const result = await studentModel.insertMany([
            {
                rollno:1,
                name: "Sunit",
                email: "sunit@gmail.com",
                course: "IT",
                
            },
            {
                rollno:2,
                name: "Virat",
                email: "virat@gmail.com",
                course: "MECH",
                
            },
            {
                rollno:3,
                name: "Rohit",
                email: "rohit@gmail.com",
                course: "MECH",
               
            }
        ]);

        console.log(result);

    } catch (error) {
        console.log(error);
    }
}

addStudent();

// Display
async function displayStudent() {
    try {
        const result=await studentModel.find()
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
}
displayStudent()

// Delete
async function deleteStudent() {
    try {
        await studentModel.deleteMany({ course: "MECH" });
    } catch (error) {
        console.log(error);
        
    }
}
deleteStudent()

// Update
async function updateStudent() {
    try {
        await studentModel.updateOne({name:"Sunit"},{$set:{course:"IT"}});
    } catch (error) {
        console.log(error);
        
    }
}
updateStudent()
