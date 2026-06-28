const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    membershipDate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
})

const memberModel=mongoose.model("members",memberSchema)

module.exports=memberModel