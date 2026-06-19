const express = require('express');
const { displayEmp, addEmp, updateEmp, deleteEmp, searchEmp } = require('../Controller/empController');

const router = express.Router()

router.get("/", displayEmp)
router.post("/add", addEmp)
router.patch("/update/:id", updateEmp)
router.delete("/delete/:id", deleteEmp)
router.get("/search/:id", searchEmp)

module.exports = router