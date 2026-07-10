const bcryptjs = require('bcryptjs');
const userModel = require('../Model/userModel');
const hotelModel = require('../Model/hotelModel');



const regForm = (req, resp) => {
    resp.render("register")
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
    resp.render("login")
}

const login = async (req, resp) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (user && (await bcryptjs.compare(password, user.password))) {
            req.session.email = email
            req.session.userId = user._id;
            resp.redirect("/dashboard")
        } else {
            resp.redirect("/login")
        }
    } catch (error) {
        console.log(error);

    }
}

const dashboard = async (req, resp) => {
    if (req.session.email) {
        const result = await hotelModel.find().populate("userId");

        resp.render("dashboard", {
            email: req.session.email,
            userId: req.session.userId,
            result
        });
    } else {
        resp.redirect("/login");
    }
};

const logout = (req, resp) => {
    req.session.destroy(() => {
        resp.redirect("/login")
    })
}

module.exports = { regForm, register, logForm, login, dashboard, logout }