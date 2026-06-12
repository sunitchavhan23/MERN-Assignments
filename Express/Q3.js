const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
    resp.send("Hello");
});

app.post("/add", (req, resp) => {
    const data = req.body;
    console.log(data);
    resp.json(data);
});

app.listen(3000, () => {
    console.log("Running");
});