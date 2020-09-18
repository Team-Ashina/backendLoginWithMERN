const {response, request} = require('express');
const { validationResult } = require('express-validator');

const Register = (req=request,res=response)=>{
    
    //validar si cumple los check del middleware
        //si validationResult(parametro request) alias "lista de errores" no está vacia, validar algo<  
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        })
    }
    return res.json({...req.body}); 
};

const Login = (req=request,res=response)=>{
    
    res.json({...req.body}); 
};

const Delete = (req=request,res=response)=>{
    
    res.json({...req.body}); 
};

const Details = (req=request,res=response)=>{
    
    res.json({...req.body}); 
};
module.exports ={
    Register,
    Login,
    Delete,
    Details
};