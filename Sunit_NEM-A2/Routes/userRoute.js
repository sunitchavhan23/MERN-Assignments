const express = require('express');
const { regForm, register, logForm, login, dashboard, logout } = require('../Controller/userController');

const router=express.Router()

router.get("/",regForm)
router.post("/register",register)
router.get("/login",logForm)
router.post("/login",login)
router.get("/dashboard",dashboard)
router.get("/logout",logout)

module.exports=router