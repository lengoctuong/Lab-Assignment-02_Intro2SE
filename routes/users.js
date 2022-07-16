const userController = require('../controllers/userController')
const express = require('express')

const router = express.Router()

router.post('/', userController.createUser)
router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.delete('/:id', userController.deleteUser)
router.put('/:id', userController.updateUser)

module.exports = router