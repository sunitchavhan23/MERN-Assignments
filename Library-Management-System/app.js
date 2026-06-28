const express = require("express");
const methodOverride = require("method-override");
const path = require("path");

const { connectDB } = require("./db");

const bookModel = require("./Models/bookModel");
const memberModel = require("./Models/memberModel");

const bookRoutes = require("./Routes/bookRoute");
const memberRoutes = require("./Routes/memberRoute");

const app = express();
connectDB();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
    try {
        const totalBooks = await bookModel.countDocuments();
        const totalMembers = await memberModel.countDocuments();

        res.render("dashboard", {
            totalBooks,
            totalMembers
        });
    } catch (err) {
        console.log(err);
        res.send("Something went wrong");
    }
});

app.use("/books", bookRoutes);
app.use("/members", memberRoutes);

app.listen(3000,()=>{
    console.log("running");
    
})