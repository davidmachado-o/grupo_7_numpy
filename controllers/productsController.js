const fs = require('fs');
const { get } = require('http');
const path = require('path');
const db = require('../database/models');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))


const productsController = {
    productAdd: (req, res) => {

        res.render('productAdd', { products })

    },

    store: async (req, res) => {
        await db.Product.create({

            category_id: req.body.category,
            brand_id: req.body.brand,
            users_products_id: '1',
            order_details_id: '1',
            name: req.body.name,
            model: '',
            processor: req.body.processor,
            memory: req.body.memory,
            storage: req.body.storage,
            price_current: req.body.price,
            price_discount: '0',
            stock: req.body.stock,
            description: req.body.description

        }).then(product => {
            db.Image.create({
                products_id: product.id,
                image_1: req.files[0].filename,
                image_2: req.files[1].filename,
                image_3: req.files[2].filename
            })
        });

        res.redirect('/');

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
            }]
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

            category_id: req.body.category,
            brand_id: req.body.brand,
            users_products_id: '1',
            order_details_id: '1',
            name: req.body.name,
            model: '',
            processor: req.body.processor,
            memory: req.body.memory,
            storage: req.body.storage,
            price_current: req.body.price,
            price_discount: '0',
            stock: req.body.stock,
            description: req.body.description

        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect('/product/productDetail/' + req.params.id)
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