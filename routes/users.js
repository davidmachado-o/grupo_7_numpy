const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');

const usersController = require('../controllers/usersController');

//******** MULTER  **********

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images/users')
    },
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const validations = [
    body('email').notEmpty().withMessage('Es necesario que ingreses un mail').bail().isEmail().withMessage('El mail debe tener un formato correcto'),
    body('password').notEmpty().withMessage('Es necesario que ingreses una contraseña').bail()

    // email y password
]

const upload = multer({storage:storage})

// implementea


/* FORMULARIO DE CREACIÓN + DONDE SE ENVIA FORM */ 
router.get('/register', usersController.register); 

router.get('/login', usersController.login); 
router.post('/processLogin', validations, usersController.processLogin);

router.get('/details/:id/', usersController.details);

// router.post('/productAdd', upload.any(), productsController.store); 
// para subir cualquier cant de fotos el 'upload.any()' 

// router.get('/productEdit/:id/', productsController.productEdit); 
// router.put('/productEdit/:id/', upload.any(), productsController.productUpdate);


/* DELETE */ 
// router.delete('/delete/:id/', productsController.destroy); 




module.exports = router;