const { response, request } = require("express")
const jwt = require('jsonwebtoken');
const { ResponseUnauthorized } = require('../helpers/response-returns')

const validJWT = (req= request, res = response, next)=>{
    token = req.header('x-token');
    
    if (!token) {
        return ResponseUnauthorized(res,{msg: 'Unauthorized request, empty token recived.'});
    }
    try {
        const {uid,name} = jwt.verify(token,process.env.SECRET_KEY_SEED);
        //this props will go to the controller of the route
        req.uid=uid;
        req.name=name;

    } catch (error) {
        return ResponseUnauthorized(res,{msg: 'Unauthorized request, token not valid.'});
        
    }
    next();

}

module.exports ={
    validJWT
}