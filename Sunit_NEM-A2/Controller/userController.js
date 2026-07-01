const bcryptjs = require('bcryptjs');
const userModel = require('../Model/userModel');
const studentModel = require("../Model/studentModel");

const regForm = (req, resp) => {
    resp.render("users/register")
}

const register = async (req, resp) => {
    try {
        const { uname, email, password } = req.body
        const hashpassword = await bcryptjs.hash(password, 10)
        await userModel.create({ uname, email, password: hashpassword })
        resp.redirect("/login")
    } catch (error) {
        console.log(error);

    }
}

const logForm = (req, resp) => {
    resp.render("users/login")
}

const login = async (req, resp) => {
    try {
        const { uname, password } = req.body
        const user = await userModel.findOne({ uname })
        if (user && (await bcryptjs.compare(password, user.password))) {
            req.session.uname = uname
            resp.redirect("/dashboard");
        } else {
            resp.redirect("/login")
        }
    } catch (error) {
        console.log(error);

    }
}

const dashboard = async (req, resp) => {
    if (req.session.uname) {
        const result = await studentModel.find();

        resp.render("dashboard", {
            uname: req.session.uname,
            result
        });
    } else {
        resp.redirect("/login");
    }
};

const logout = (req, resp) => {
    req.session.destroy(() => {
        resp.redirect("/login");
    })
}

module.exports = { regForm, register, logForm, login, dashboard, logout }