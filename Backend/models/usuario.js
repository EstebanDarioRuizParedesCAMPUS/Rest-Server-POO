const {Schema, model, models} = require('mongoose')

const usuariosShema = Schema({
    Nombre: {
        type:String,
        required:[true,'name is required'],
    },
    Email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
    },
    Password:{
        type:String,
        required:[true,'Password is required'],
    },
    Imagen:{
        type:String,
    },
    Rol:{
        type:String,
        required:true,
        default: 'USER',
        enum:['ADMIN','USER'],
    },
    Estado:{
        type:Boolean,
        default:true,
    },
    GoogleSignIn:{
        type:Boolean,
        default:false,
    },
})

module.exports = model("Usuario", usuariosShema)