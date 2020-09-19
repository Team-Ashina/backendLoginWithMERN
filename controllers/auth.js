const {response, request} = require('express');
const { validationResult } = require('express-validator');

const Register = (req=request,res=response)=>{
    
    
    return res.status(201).json({
        ok:true,
        msg:'Creado correctamente'
    }); 
};

const Login = (req=request,res=response)=>{
    
    return res.status(200).json({
        ok:true,
        msg:'Logeado correctamente'
    }); 
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