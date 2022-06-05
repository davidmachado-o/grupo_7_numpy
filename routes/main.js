
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

router.get('/', mainController.index);
router.post('/', mainController.index);

router.get('/home', mainController.index);
router.post('/home', mainController.index);

// ELIMINE TODOS LOS QUE DEPENDIAN DE UN FORMULARIO Y SE ENCONTRABAN DENTRO DEL CRUD

/* FORMULARIO DE CREACIÓN + DONDE SE ENVIA FORM */ 
router.get('/register', mainController.register); 
router.get('/login', mainController.login); 


// router.get('/nav', mainController.nav);
// router.get('*', mainController.index);

module.exports = router;