const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    uname: {
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
    password: {
        type: String,
        required: true
    }
},
    { timestmaps: true }
)

const userModel=mongoose.model("users",userSchema)
module.exports=userModel