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


        try {
            await db.Product.create({

                category_id: req.body.category,
                brand_id: req.body.brand,
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

        } catch (error) {
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
        db.Product.findByPk(req.params.id)
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

    productCart: async (req, res) =>{
        // await db.Product.findAll(
        //     {
        //     includes:[category],
        //     // where:{
        //     //     image_11: req.files[0]
        //     // },
        //     order:[
        //         ['category', 'DESC']
        //     ]
        // }   
        // )
        // .then(function(product) {
        //     res.render('productCart', {product: product})
        //     // console.log('Estoy funcionando!')
        // });
        await db.Product.findOne()
        .then(function(product){
            let silla = [];
            let monitor = []
            products.forEach(e => {
                if (e.category_id == 'Silla') {
                    silla.push(e)
                }else if(e.category_id == 'Monitor'){
                    monitor.push(e)
                }
            });
                
            res.render('productCart', { product, silla, monitor})
        
        })

        
        // let products = db.Product.findAll()

        // .then ((products) => {
    
        //     let monitores = []
        //     let keyboards = []
    
        //     products.forEach(e => {
        //         if (e.category_id == 'Monitor') {
        //             monitores.push(e)
        //         } else if (e.category_id == 'Teclado'){
        //             keyboards.push(e)
        //         } 
        //     })
        //     let monitor=monitores[0]
        //     console.log(monitor)
    
        //     res.render('productCart', {monitor})
    
        // })
    


    }

}

module.exports = productsController;