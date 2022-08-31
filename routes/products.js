const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const admin = require('../middlewares/guestMiddleware')

const productsController = require('../controllers/productsController');

//******** MULTER  **********

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

/* PRODUCT CREATE / ADD */
router.get('/productAdd', productsController.productAdd);
router.post('/productAdd', upload.any(), productsController.store); // para subir cualquier cant de fotos el 'upload.any()' 

// /* EDITADO DE PRODUCTOS */
router.get('/productEdit/:id/', productsController.productEdit);
router.post('/productEdit/:id/', upload.any(), productsController.productUpdate);

// /* DELETE */ 
router.delete('/delete/:id/', admin, productsController.destroy); 

/* LISTADO DE PRODUCTOS */
router.get('/productList', productsController.listado);

// /* DETALLE DE UN PRODUCTO PARTICULAR */ 
router.get('/productDetail/:id/', productsController.productDetail);
router.get('/productCart/', productsController.productCart);

// /* BUSCAR PRODUCTO? */








module.exports = router;