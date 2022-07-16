const userController = require('../controllers/userController')
const express = require('express')

const router = express.Router()

router.get('/', userController.getUsers)

module.exports = router