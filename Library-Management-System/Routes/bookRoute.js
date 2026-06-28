const express = require('express');
const { displayBook, addForm, addBook, editForm, updateBook, searchBook, deleteBook } = require('../Controllers/bookController');

const router=express.Router()

router.get("/",displayBook)
router.get("/addBook",addForm)
router.post("/addBook",addBook)
router.delete("/delete/:id",deleteBook)
router.get("/edit/:id",editForm)
router.patch("/edit/:id",updateBook)
router.post("/search",searchBook)

module.exports=router