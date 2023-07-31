const jwk = require('jsonwebtoken')

const generateJWT = (uid = '') => {
    return new Promise((res,rej)=>{
        const payload = {uid};

        jwk.sign(payload, process.env.SECRET_OR_PRIVATED_KEY,{
            expiresIn: '4h'
        },(err, token)=>{
            if(err){
                console.log(err);
                rej('No se pudo generar el JSON WEB TOKEN')
            } else { 
                res(token)
            }
        })
    })
}

module.exports = {
    generateJWT
}