const express = require('express');
const { addForm, addRoom, deleteRoom, editForm, updateRoom } = require('../Controller/hotelController');

const hotelRouter=express.Router()

hotelRouter.get("/addRoom",addForm)
hotelRouter.post("/addRoom",addRoom)
hotelRouter.delete("/delete/:id",deleteRoom)
hotelRouter.get("/edit/:id",editForm)
hotelRouter.patch("/edit/:id",updateRoom)

module.exports=hotelRouter