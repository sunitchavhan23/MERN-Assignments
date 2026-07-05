const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    cname: {
        type: String,
        required: true
    },
    tname: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    fees: {
        type: Number,
        required: true
    },
     userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
},
    { timestamps: true }
)

const courseModel = mongoose.model("course", courseSchema)
module.exports = courseModel