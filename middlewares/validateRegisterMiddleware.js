const { body } = require('express-validator');
const path = require('path');

const registerValidations = [
    body('name').notEmpty().withMessage('Es necesario que ingreses un nombre').bail().isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('email').notEmpty().withMessage('Es necesario que ingreses un mail').bail().isEmail().withMessage('El mail debe tener un formato correcto'),
    body('password').notEmpty().withMessage('Es necesario que ingreses una contraseña').bail().isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];


        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitida son ${acceptedExtensions.join(', ')}`)
            }
        }
        return true;
    })
]

module.exports = registerValidations;