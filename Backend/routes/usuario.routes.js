const {Router} = require('express')
const {homepageU,getOneU,getU,postU,deleteU,patchU,putU} = require('../controllers/ususario.controller.js')
const router = Router()

router.get("/home", homepageU)

router.get("/get",getU )

router.post("/post", postU)

router.delete("/delete", deleteU)

router.patch("/patch", patchU)

router.get("/getOne", getOneU) 

router.put("/put", putU)  

module.exports = router