const { request, response } = require("express");
const { validationResult } = require("express-validator");
const { ResponseBadRequest } = require("../helpers/response-returns");

const validarCampos = (req=request,res=response,next)=>{
    //validar si cumple los check del middleware
    //si validationResult(parametro request) alias "lista de errores" no está vacia, validar algo<  
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return ResponseBadRequest(res,{errors:errors.mapped()});
        
    }
    next();
}

module.exports= {
    validarCampos
};