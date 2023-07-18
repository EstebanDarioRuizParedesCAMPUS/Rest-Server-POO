const {Router} = require('express')
const {check} = require('express-validator')
const {homepageU,getOneU,getU,postU,deleteU,patchU,putU} = require('../controllers/ususario.controller.js')
const { validateDocument} = require('../middleware/validate.documentss.js')
const Role = require('../models/Role.js')


const router = Router()

router.get("/home",homepageU)
router.get("/get",getU )
router.post("/post",[
    check('Nombre','El nombre no es valido').not().isEmpty(),
    check('Password','Password debe ser de minimo 6 Letras').isLength({min:6}),
    check('Email','El correo no es valido').isEmail(),
    /*check('Rol','No es un Rol valido').isIn(['ADMIN','USER']),*/
    check('Rol').custom(async(Rol='')=>{
        const existeRol = await Role.findOne({Rol})
        if(!existeRol){
            throw new Error(`El rol ${Rol} no está registrado en la base de datos`)
        }
    }),
    validateDocument
],postU)

router.delete("/delete", deleteU)
router.patch("/patch", patchU)
router.get("/getOne", getOneU) 
router.put("/put", putU)  

module.exports = router