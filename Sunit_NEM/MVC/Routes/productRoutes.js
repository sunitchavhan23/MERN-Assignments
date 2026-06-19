const express = require('express');
const { showProduct, createProduct, updateProduct } = require('../Controller/productController');
const { deleteModel } = require('mongoose');

const router=express.Router()

router.get("/",showProduct)
router.post("/add",createProduct)
router.patch("/update/:id",updateProduct)
router.delete("/delete/:id",deleteModel)

module.exports=router