const bcryptjs = require('bcryptjs');
const userModel = require('../Models/userModel');
const bookModel = require('../Models/bookModel');
const memberModel = require('../Models/memberModel');

const regForm = (req, resp) => {
    resp.render("users/register")
}

const register = async (req, resp) => {
    try {
        const { uname, email, password } = req.body
        const hashpassword = await bcryptjs.hash(password, 10)
        await userModel.create({ uname, email, password: hashpassword })
        resp.redirect("/users/login")
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
            resp.redirect("/users/dashboard");
        } else {
            resp.redirect("/users/login")
        }
    } catch (error) {
        console.log(error);

    }
}

const dashboard = async (req, res) => {
    if (!req.session.uname) {
        return res.redirect("/users/login");
    }

    try {
        const totalBooks = await bookModel.countDocuments();
        const totalMembers = await memberModel.countDocuments();

        res.render("dashboard", {
            uname: req.session.uname,
            totalBooks,
            totalMembers
        });
    } catch (err) {
        console.log(err);
    }
};

const logout = (req, resp) => {
    req.session.destroy(() => {
        resp.redirect("/users/login");
    })
}

module.exports = { regForm, register, logForm, login, dashboard, logout }