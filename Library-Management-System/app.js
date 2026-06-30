const express = require("express");
const methodOverride = require("method-override");
const session = require('express-session');
const path = require("path");

const { connectDB } = require("./db");

const bookModel = require("./Models/bookModel");
const memberModel = require("./Models/memberModel");

const bookRoutes = require("./Routes/bookRoute");
const memberRoutes = require("./Routes/memberRoute");
const userRoutes = require("./Routes/userRoute");

const app = express();
connectDB();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, resp) => {
    resp.redirect("/users");
});
app.use(session({
    secret: "test",
    resave: false,
    saveUninitialized: false
}))
app.use("/books", bookRoutes);
app.use("/members", memberRoutes);
app.use("/users", userRoutes)

app.listen(3000, () => {
    console.log("running");

})