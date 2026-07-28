const express = require('express');
const { displayFun, showFun, addFun, updateFun, deleteFun } = require('../Controller/courseController');

const router = express.Router()

router.get('/', displayFun)
router.get('/show/:id', showFun)
router.post('/add', addFun)
router.patch('/edit/:id', updateFun)
router.delete('/delete/:id', deleteFun)

module.exports = router