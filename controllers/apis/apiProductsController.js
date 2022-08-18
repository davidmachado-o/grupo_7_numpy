const db = require('../../database/models');
const sequelize = db.sequelize;


const productsController = {
    list: (req, res) => {
        db.Product.findAll()
            .then(products => {
                let datos = {
                    meta:{
                        status:200,
                        total: products.length,
                        url: 'api/products' 
                    },
                    data : products
                }
                res.json(datos)
            })
    },
    detail: (req, res) => {
        let productId = req.params.id
        db.Product.findByPk(productId,{
            include: ['category']
        })
            .then(products => {
                let datos = {
                    meta:{
                        status:200,
                        total: products.length,
                        url: 'api/products/productDetail/' + productId
                    },
                    data : products
                }
                res.json(datos)
            })
    },
    create: (req, res) => {
        db.Product.create({

            category_id: req.body.category,
            brand_id: req.body.brand,
            name: req.body.name,
            model: '',
            processor: req.body.processor,
            memory: req.body.memory,
            storage: req.body.storage,
            price_current: req.body.price,
            price_discount: '0',
            stock: req.body.stock,
            description: req.body.description

        })
        .then(confirm =>{
            let dato;
            if(confirm){
                dato = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/products/create'
                    },
                    data:confirm
                }
            }else{
                dato = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/products/create'
                    },
                    data:confirm
                }
            }
            res.json(dato)
        })
        .catch(error => res.send(error))

    },
    update: (req, res) => {
        let productId = req.params.id;
        db.Product.update({
            category_id: req.body.category,
            brand_id: req.body.brand,
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
                id: productId
            }
        })
        .then(confirm =>{
            let dato;
            if(confirm){
                dato = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/products/update/:id'
                    },
                    data:confirm
                }
            }else{
                dato = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/products/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(dato)
        })
        .catch(error => res.send(error))
    },
    destroy: (req, res) => {
        let productId = req.params.id
        db.Product.destroy({
            where: {
                id: productId
            }, force: true
        })
        .then(confirm =>{
            let dato;
            if(confirm){
                dato = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/products/destroy/:id'
                    },
                    data:confirm
                }
            }else{
                dato = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/products/destroy/:id'
                    },
                    data:confirm
                }
            }
            res.json(dato)
        })
        .catch(error => res.send(error))
    }
}

module.exports = productsController;