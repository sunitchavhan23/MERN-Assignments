const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    let result = null;
    if (req.query.num1 && req.query.num2) {
        const n1 = Number(req.query.num1);
        const n2 = Number(req.query.num2);
        result = {
            add: n1 + n2,
            sub: n1 - n2,
            mul: n1 * n2,
            div: n2 !== 0 ? n1 / n2 : "Cannot Divide by Zero"
        };
    }
    res.render("index", { result });
});

app.listen(4000, () => {
    console.log("Running...");
});