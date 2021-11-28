const express = require('express')
const router = express.Router()

//import user controler
const {userResistor, loginUser} = require('../controller/userController')

//create user resistoration
router.route('/resistor').post(userResistor)

//login user route
router.route('/login').post(loginUser)



module.exports = router