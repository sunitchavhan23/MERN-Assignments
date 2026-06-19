const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        min: 12000,
        max: 50000,
        required: true
    },
    dept: {
        type: String,
        enum: ["IT", "HR", "ACC"],
        required: true
    },
    address: {
        type: String,
        default: "Borivali"
    }
},
    { timestamps: true }
)

const empModel = mongoose.model("emps", empSchema)

module.exports = empModel