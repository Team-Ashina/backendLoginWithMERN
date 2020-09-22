const { response, request } = require('express');
const { GenerateJWT } = require('../helpers/jwt');
const { EncryptKey, CompareKeys } = require('../helpers/password-manager');
const { ResponseBadRequest, ResponseCreated, ResponseOk, ResponseServerError } = require('../helpers/response-returns');

const User = require('../models/User');

const Register = async (req = request, res = response) => {

    try {
        const { email } = req.body;

        const validateEmailUserDb = await User.findOne({ email });
        if (validateEmailUserDb) return ResponseBadRequest(res, { msg: 'This email already exist.' });
        
        const newUser = new User(req.body);
        newUser.password = EncryptKey(newUser.password);

        await newUser.save();

        const token = await GenerateJWT(newUser.id, `${newUser.firstName} ${newUser.lastName}`)

        return ResponseCreated(res,
            {
                msg: 'User correctly created.',
                token

            });

    } catch (error) {

        return ResponseServerError(res, { msg: `Is valid but can´t be inserted.` })
    }
};

const Login = async (req = request, res = response) => {
    try {
        const { email, password } = req.body;
        const userFound = await User.findOne({ email });

        if (!userFound) {
            return ResponseBadRequest(res, { msg: 'Error of authentication, email invalid' });
        }

        const validatePassword = CompareKeys(password, userFound.password);
        if (!validatePassword) {
            return ResponseBadRequest(res, { msg: 'Error of authentication, password invalid.' });
        }

        const token = await GenerateJWT(userFound.id, `${userFound.firstName} ${userFound.lastName}`)

        return ResponseOk(res, {
            uid: userFound.id,
            name: `${userFound.firstName} ${userFound.lastName}`,
            token
        });


    } catch (error) {
        console.error(error);
        return ResponseServerError(res, { msg: `Error inside the system, contact with your administrator.` });

    }

};

const ReNewToken = async (req = request, res = response) => {
    const { uid, name } = req;
    const token = await GenerateJWT(uid, name);
    return ResponseOk(res, { token })
};

const Details = (req = request, res = response) => {

    res.json({ ...req.body });
};

const Delete = (req = request, res = response) => {

    res.json({ ...req.body });
};
module.exports = {
    Register,
    Login,
    Delete,
    Details,
    ReNewToken
};

