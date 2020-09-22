const {Router} = require('express');
const { check } = require('express-validator');
const router = Router();

const {
    Delete,
    Login,
    Details,
    Register,
    ReNewToken
} = require('../controllers/auth');
const { validJWT } = require('../middlewares/managing-token');
const {validarCampos} = require('../middlewares/validar-campos');
router.post(
//Ruta de la solicitud /api/auth/register
    '/register',
//Middleware (validaciones)
[
    check('firstName','The first name is required and have to be between 3 and 20 characters').notEmpty().isLength({min:3,max:20}),
    check('lastName','The last name is required and have to be between 3 and 20 characters').notEmpty().isLength({min:3,max:20}),
    check('email',`The email is required and should have the format 'name@domain.foo'`).notEmpty().isEmail(),
    check('password', 'The password should be between 8 and 20 characters').notEmpty().isLength({min:8,max:20}),
    validarCampos

],
//funcion en el controlador
Register);
router.post(
//Ruta de la solicitud /api/auth/login    
    '/login',
[
//Middleware (validaciones)
    check('email',`The email is required and should have the format 'name@domain.foo'`).notEmpty().isEmail(),
    check('password', 'Password format not valid too short').notEmpty().isLength({min:8,max:20}),
    validarCampos
],
//funcion en el controlador
Login);
//valida todo lo que se encuentre debajo de "router.use(validJWT);" con el middlware validJWT
router.use(validJWT);

router.post('/renew',ReNewToken);

router.post('/details',Details);
router.post('/delete',Delete);  

module.exports = router;
