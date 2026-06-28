const express = require('express');
const { displayMember, addForm, addMember, deleteMember, editForm, updateMember, searchMember } = require('../Controllers/memberController');

const router=express.Router()

router.get("/",displayMember)
router.get("/addMember",addForm)
router.post("/addMember",addMember)
router.delete("/delete/:id",deleteMember)
router.get("/edit/:id",editForm)
router.patch("/edit/:id",updateMember)
router.post("/search",searchMember)

module.exports=router