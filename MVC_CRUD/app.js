const express = require('express');
const router = require('./Routes/empRoutes');
const { connectDB } = require('./db');
const app = express()
connectDB()
app.use(express.json())
app.use("/", router)



app.listen(2500, () => {
    console.log("running");

})
