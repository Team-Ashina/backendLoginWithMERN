const {response, request} = require('express');
const { validationResult } = require('express-validator');
const User = require('../models/User');

const Register = async(request=request,response=response)=>{
    
    try {
        const userValidationDBEmail = User.findOne({email:request.body.email})

        if(userValidationDBEmail){
            return response.status(400).json({
                ok:false,
                msg:'The email already exist.'
            }); 
        }
        const user = new User(request.body);
        
        
        await user.save();
    
        return response.status(201).json({
        ok:true,
        msg:'correctly created'
    }); 
    } catch (error) {
        return response.status(500).json({
            ok:false,
            msg:`Is valid but can´t be inserted.`
        }); 
    }
};

const Login = (request=request,response=response)=>{
    
    return response.status(200).json({
        ok:true,
        msg:'Correctly logged'
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