const { body } = require('express-validator');

module.exports = [
        body('email').notEmpty().withMessage('Es necesario que ingreses un mail').bail().isEmail().withMessage('El mail debe tener un formato correcto'),
        body('password').notEmpty().withMessage('Es necesario que ingreses una contraseña').bail().isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres')
    ]
