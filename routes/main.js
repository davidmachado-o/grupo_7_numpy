const { Router } = require('express');
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

router.get('/', mainController.index);
router.post('/', mainController.index);

router.get('/home', mainController.index);
router.post('/home', mainController.index);

router.get('/productDetail', mainController.productDetail);
router.post('/productDetail', mainController.productDetail);

router.get('/productCart', mainController.productCart);
router.post('/productCart', mainController.productCart);

router.get('/register', mainController.register);
router.post('/register', mainController.register);

router.get('/login', mainController.login);
router.post('/login', mainController.login);

router.get('/productEdit', mainController.productEdit);
router.post('/productEdit', mainController.productEdit);

router.get('/productAdd', mainController.productAdd);
router.post('/productAdd', mainController.productAdd);

// router.get('/nav', mainController.nav);
// router.get('*', mainController.index);

module.exports = router;