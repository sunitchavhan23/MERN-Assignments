const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017/examDB").then(() => {
        console.log("Database Connected");

    }).catch((err) => {
        console.log(err);

    });
}

module.exports = { connectDB }