const express = require('express');
const cors = require('cors');
const { connectDB } = require('./Config/db');
const router = require('./Routes/courseRoute');
connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.listen(4000, () => {
    console.log("Server Running");

})