const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    firstName: {
        type:String,
        require: true
    },
    lastName:{
        type:String,
        require: true
    },
    email: {
        type:String,
        require: true,
        unique:true
    },
    password: {
        type:String,
        require: true
    }

});

module.exports = model('User',UserSchema);