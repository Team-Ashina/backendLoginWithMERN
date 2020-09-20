const { request } = require("express")
const bcrypt = require('bcryptjs');

const EncriptarPalabra = (key, nivelEncriptado = 10) => {
    if (key) {
        const salt = bcrypt.genSaltSync(nivelEncriptado || 10);
        const respuesta = bcrypt.hashSync(key,salt);
        return respuesta;
    }
    else{
        throw Error('Set the key para value');
    }
}

const CompareKeys = (key,hashedKey) =>{

    const validKey = bcrypt.compareSync(key,hashedKey); 
    return validKey;

}

module.exports = {
    EncriptarPalabra,
    CompareKeys
}