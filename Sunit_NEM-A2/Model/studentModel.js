const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/],
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 16
    }
},
    { timestamps: true }
)

const studentModel=mongoose.model("students",studentSchema)
module.exports=studentModel