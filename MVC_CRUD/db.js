const mongoose = require('mongoose');
const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017/sunit_mvc1").then(() => {
        console.log("Connected");

    }).catch((err) => {
        console.log(err);

    });
}

module.exports = { connectDB }