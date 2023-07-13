const homepageU = (req,res) =>{
    res.status(403).json({"message":"Esta es la homepage"})
}

const getU = (req,res) =>{
    res.json({"message":"GET API"})
}

const postU = (req,res) =>{
    res.json({"message":"POST API"})
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