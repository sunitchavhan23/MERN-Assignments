const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const { connectDB } = require('./Config/db');
const userRouter = require('./Routes/userRoutes');
const courseRouter = require('./Routes/courseRoutes');
connectDB()
const app = express()

app.set("view engine", "ejs")
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: "course",
    resave: false,
    saveUninitialized: false
}))

app.use(methodOverride("_method"))

app.use("/", userRouter)
app.use("/",courseRouter)
app.listen(4000, () => {
    console.log("Running");

})