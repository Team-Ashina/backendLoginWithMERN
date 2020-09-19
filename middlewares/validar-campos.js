const { request, response } = require("express");
const { validationResult } = require("express-validator");

const validarCampos = (req=request,res=response,next)=>{
    //validar si cumple los check del middleware
    //si validationResult(parametro request) alias "lista de errores" no está vacia, validar algo<  
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        });
    }
    next();
}

module.exports= {
    validarCampos
};