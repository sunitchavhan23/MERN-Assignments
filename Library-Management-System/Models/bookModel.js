const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    publicationYear: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        min: 1,
        required: true
    },
    availableCopies: {
        type: Number,
        required: true
    }
},
    { timestamps: true }
)

const bookModel=mongoose.model("books",bookSchema)

module.exports=bookModel