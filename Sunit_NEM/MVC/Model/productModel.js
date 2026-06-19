const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        min: 1,
        required: true
    }
},
    { timestamps: true }
)

const productModel=mongoose.model("products",productSchema)

module.exports=productModel