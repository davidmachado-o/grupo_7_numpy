const fs = require('fs');
const path = require('path');
const db = require('../database/models');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))


const productsController = {
    productAdd: (req, res) => {

        res.render('productAdd', { products })

    },

    store: async (req, res) => {


        try {await db.Product.create({
 
             category_id: 1,
             brand_id: 2,
             //users_products_id: '1',
             //order_details_id: '1',
             name: req.body.name,
             model: req.body.model,
             processor: req.body.processor,
             memory: req.body.memory,
             storage: req.body.storage,
             price_current: req.body.price,
             price_discount: req.body.priceDiscount,
             stock: req.body.stock,
             description: req.body.description,
 
         
                 image_11: req.files[0].filename,
                 image_12: req.files[1].filename,
                 image_13: req.files[2].filename
             
         });
 
         res.redirect('/product/productList')
 
     } catch(error)
         {
             console.log(error)
         }
     },

    


    listado: (req, res) => {
        db.Product.findAll()
            .then(function (product) {
                res.render('productList', { product: product })
            });
    },
    productDetail: async (req, res) => {

        db.Product.findByPk(req.params.id, {  //como hacer para agregar la imagen al productDetail??
            include: [{
                model: db.Image,
                as: 'image'
            }
        ]
        })
            .then(function (product) {
                res.render('productDetail', { product: product })  
            })

    },
    productEdit: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(function (product) {
                res.render('productEdit', { product: product })
            });
    },
    productUpdate: (req, res) => {
        db.Product.update({

            category_id: 1,
            brand_id: 2,
            //users_products_id: '1',
            //order_details_id: '1',
            name: req.body.name,
            model: req.body.model,
            processor: req.body.processor,
            memory: req.body.memory,
            storage: req.body.storage,
            price_current: req.body.price,
            price_discount: req.body.priceDiscount,
            stock: req.body.stock,
            description: req.body.description,
            image_11: req.files[0].filename,
            image_12: req.files[1].filename,
            image_13: req.files[2].filename

        }, {
            where: {
                id: req.params.id
            }
        });

        //res.redirect('/product/productDetail/' + req.params.id)
        res.redirect('/product/productList')
    },
    destroy: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        });

        res.redirect('/product/productList')
    },



    productCart: (req, res) => {
        res.render('productCart', { products })
    }




}

module.exports = productsController;