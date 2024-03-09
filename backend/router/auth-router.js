const express = require('express')

const router = express.Router()
const {signUpSchema, LoginSchema} = require('../validators/auth-validator')
const validate = require('../middlewares/validate-middleware')
// controllers
const {home, register, login, user }= require('../controllers/auth-controller')
const authMiddleware = require('../middlewares/auth-middleware')
// Routes

router.route('/').get(home)
router.route('/register').post(validate(signUpSchema), register)
router.route('/login').post(validate(LoginSchema) , login)

router.route('/user').get(authMiddleware, user)

module.exports = router;