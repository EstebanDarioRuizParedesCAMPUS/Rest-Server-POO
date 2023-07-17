const usuario = require('../models/usuario.js')
const Usuario = require('../models/usuario.js')

const homepageU = (req,res) =>{
    res.status(403).json({"message":"Esta es la homepage"})
}

const getU = (req,res) =>{
    res.json({"message":"GET API"})
}

const postU = async (req,res) =>{
    const body = req.body
    const usuario = new Usuario(body)
    await usuario.save()
    res.json({"message":"POST API", usuario})
}

const deleteU = (req,res) =>{
    res.json({"message":"DELETE API"})
}

const patchU =  (req,res) =>{
    res.json({"message":"PATCH API"})
}

const getOneU = (req,res) =>{
    res.json({"message":"GET ONE API"})
}

const putU = (req,res) =>{
    res.json({"message":"PUT API"})
}

module.exports = {
    homepageU,
    getOneU,
    getU,
    postU,
    deleteU,
    patchU,
    putU
}