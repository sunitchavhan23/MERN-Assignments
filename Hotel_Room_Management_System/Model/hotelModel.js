const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
    rnum: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rtype: {
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    capacity:{
        type:Number,
        required:true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
},
    { timestamps: true }
)

const hotelModel = mongoose.model("hotel",hotelSchema)

module.exports = hotelModel