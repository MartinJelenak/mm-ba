const express = require('express')

const UserCtrl = require('./user-ctrl')

const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.post('/login', UserCtrl.loginUser)
router.put('/user/:id', UserCtrl.updateUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)

module.exports = router