const { request } = require("express");

const jwt = require('jsonwebtoken');

const GenerateJWT = (uid, name) => {
    return new Promise((resolve, reject) => {

        const payload = { uid, name };
        jwt.sign(payload, process.env.SECRET_KEY_SEED, {
            expiresIn: '2h'
        },
            (errorTokenSigning, tokenSigned) => {

                if (errorTokenSigning) {
                    console.log(errorTokenSigning.message);
                    reject(`Can't generate token`);
                }
                
                resolve(tokenSigned);
            }
        )

    })
}

module.exports={
    GenerateJWT
};