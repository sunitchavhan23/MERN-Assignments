const express = require('express');
const { displayCourse, addForm, addCourse, editForm, updateCourse, deleteCourse } = require('../Controller/courseController');

const courseRouter=express.Router()


courseRouter.get("/addCourse",addForm)
courseRouter.post("/addCourse",addCourse)
courseRouter.get("/edit/:id",editForm)
courseRouter.patch("/edit/:id",updateCourse)
courseRouter.delete("/delete/:id",deleteCourse)

module.exports=courseRouter