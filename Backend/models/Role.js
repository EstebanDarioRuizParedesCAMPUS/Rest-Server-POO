const {Schema,model} = require('mongoose')

const RoleShema = Schema({
    Rol:{
        type:String,
        required:[true, 'El rol es obligatorio']
    }
})

module.exports = model('role',RoleShema)