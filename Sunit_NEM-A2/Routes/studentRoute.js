const express = require('express');
const { displayStudent, addForm, addStudent, updateStudent, deleteStudent, editForm } = require('../Controller/studentController');
const router=express.Router()

router.get("/dashboard",displayStudent)
router.get("/add",addForm)
router.post("/add",addStudent)
router.get("/update/:id",editForm)
router.patch("/update/:id",updateStudent)
router.delete("/delete/:id",deleteStudent)

module.exports=router