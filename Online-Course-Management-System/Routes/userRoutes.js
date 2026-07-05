const express = require('express');
const { regForm, register, logForm, login, dashboard, logout } = require('../Controller/userController');

const userRouter = express.Router()

userRouter.get("/", regForm)
userRouter.post("/register", register)
userRouter.get("/login", logForm)
userRouter.post("/login", login)
userRouter.get("/dashboard", dashboard)
userRouter.get("/logout", logout)

module.exports = userRouter