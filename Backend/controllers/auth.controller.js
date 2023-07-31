const {response} = require('express');
const Usuario = require('../models/usuario.js');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-JWT.js');
const usuario = require('../models/usuario.js');

const login = async (req,res = response) =>{
    const { Email, Password} = req.body
    try {
        //Verificar si el email esta en la base de datos
        const usuarioActivo = await Usuario.findOne({Email})
        if(!usuarioActivo){
            return res.status(404).json({
                msg: "El email no existe"
            })
        }

        //Verificar si el usuario esta activo
        
        if(usuarioActivo.Estado === false){
            return res.status(500).json({
                msg: "Usuario no esta activo"
            })
        }

        //Verificar si el password esta activo y coincide con la llave
        const passwordValid = bcryptjs.compareSync(Password,usuarioActivo.Password)
        if(!passwordValid){
            return res.status(404).json({
                msg:"Contraseña incorrecta"
            })
        }

        //generacion para Validacion el Json Web Token
        const token = await generateJWT(usuarioActivo.id)

        res.json({
            usuarioActivo,
            token
        })

    } catch (error) {
        console.log(error);
        return res.json({
            msg: "Datos insuficientes, contacta a un especialista"
        })
    }
}

module.exports = {
    login
}