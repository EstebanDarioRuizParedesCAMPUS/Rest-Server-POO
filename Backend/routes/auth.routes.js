const {Router} = require('express')
const {check} = require('express-validator')
const { login } = require('../controllers/auth.controller.js')
const { validateDocument } = require('../middleware/validate.documentss.js')

const router = Router()

router.post("/login",[
    check('Email','Email is required').isEmail(),
    check('Password', 'Password is required').not().isEmpty(),
    validateDocument
],login)

module.exports = router