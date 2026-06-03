const mongoose = require('mongoose');
const { connectDB } = require('./Q7_DB');
connectDB();

const studentSchema=mongoose.Schema({
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
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    fees:{
        type:Number,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    }
})

const studentModel=mongoose.model("student",studentSchema)

// Insert
async function addStudent() {
    try {
        const result = await studentModel.insertMany([
            {
                name: "Sunit",
                email: "sunit@gmail.com",
                course: "IT",
                age: 23,
                city: "Mumbai",
                fees: 50000,
                isActive: true
            },
            {
                name: "Virat",
                email: "virat@gmail.com",
                course: "MECH",
                age: 24,
                city: "Satara",
                fees: 150000,
                isActive: true
            },
            {
                name: "Rohit",
                email: "rohit@gmail.com",
                course: "CIVIL",
                age: 22,
                city: "Satara",
                fees: 75000,
                isActive: true
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
        await studentModel.deleteMany({ city: "Satara" });
    } catch (error) {
        console.log(error);
        
    }
}
deleteStudent()

// Update
async function updateStudent() {
    try {
        await studentModel.updateOne({name:"Sunit"},{$set:{fees:120000}});
    } catch (error) {
        console.log(error);
        
    }
}
updateStudent()