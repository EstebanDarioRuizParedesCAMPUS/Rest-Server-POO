const {response} = require('express');
const Usuario = require('../models/usuario.js');
const bcryptjs = require('bcryptjs')

const login = async (req,res = response) =>{
    const { Email, Password} = req.body
    try {
        //Verificar si el email esta en la base de datos
        const encontrarEmial = await Usuario.findOne({Email})
        if(!encontrarEmial){
            return res.status(404).json({
                msg: "El email no existe"
            })
        }

        //Verificar si el usuario esta activo
        
        if(encontrarEmial.Estado === false){
            return res.status(500).json({
                msg: "Usuario no esta activo"
            })
        }

        const passwordValid = bcryptjs.compareSync(Password,encontrarEmial.Password)
        if(!passwordValid){
            return res.status(404).json({
                msg:"Contraseña incorrecta"
            })
        }

        //Verificar si el password esta activo y coincide con la llave
        res.json({
            msg: "Ta' Bueno"
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