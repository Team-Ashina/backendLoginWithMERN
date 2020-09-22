const { request } = require("express")
const bcrypt = require('bcryptjs');

const EncryptKey = (key, nivelEncriptado = 10) => {
    if (key) {
        const salt = bcrypt.genSaltSync(nivelEncriptado);
        const respuesta = bcrypt.hashSync(key,salt);
        return respuesta;
    }
    else{
        throw Error('Set the key value');
    }
}

const CompareKeys = (key,hashedKey) =>{

    const validKey = bcrypt.compareSync(key,hashedKey); 
    return validKey;

}

module.exports = {
    EncryptKey,
    CompareKeys
}