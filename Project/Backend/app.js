const express = require("express");
const { connectDB } = require("./Config/db");
const cors = require('cors');
const routes = require("./Routes/blogRoute");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/blog", routes);

app.listen(4000, () => {
  console.log("Running");
});
