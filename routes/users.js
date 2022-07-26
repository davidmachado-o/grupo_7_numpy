const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');
const loginValidations = require('../middlewares/validateLoginMiddleware.js');
const guestMiddleware = require('../middlewares/guestMiddleware.js');
const authMiddleware = require('../middlewares/authMiddleware.js');
const registerValidations = require('../middlewares/validateRegisterMiddleware.js');

const usersController = require('../controllers/usersController');

//******** MULTER  **********

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/images/users/'))
    },
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({storage:storage})

// REGISTER FORM
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.single('image') ,registerValidations, usersController.processRegister);  

// LOGIN FORM
router.get('/login', guestMiddleware, usersController.login); 
router.post('/login', loginValidations, usersController.processLogin);

// USER DETAILS
router.get('/details/:id/', authMiddleware, usersController.details);

// LOGOUT
router.get('/logout', usersController.logout);

module.exports = router;