const express = require('express');
const router = express.Router();

const productsController = require ('../../controllers/apis/apiProductsController');

//* VISTA DE PRODUCTOS *//
router.get('/', productsController.list)
router.get('/:id', productsController.detail);

//* EDICION DE PRODUCTOS */
router.put('/update/:id', productsController.update)

router.post('/create', productsController.create)

router.delete('/delete/:id', productsController.destroy); 


module.exports = router;