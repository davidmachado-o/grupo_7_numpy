const fs = require('fs');
const path =require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

const productsController = {

    index : (req, res) => {

        res.render("index", {products}) //productos es un ejemplo
    },
    productDetail: (req, res) => {

        // let detalleProducto = productos.find(producto => producto.id == req.params.id); detalleProducto

        // let id = req.params.id
        // let product = products.find(product => product.id == id)

        res.render('productDetail', {products} )
    },
    
    productCart: (req, res) =>{
        res.render('productCart', {products})
    },
    
    productEdit: (req,res) =>{
        res.render('productEdit', {products})
    },
    productAdd: (req,res) =>{
        res.render('productAdd', {products})
    },
    destroy : (req, res) => {
		let id = req.params.id 
		let productDeleted = products.filter(product => product.id != id) //diferentes
		
		fs.writeFileSync(productsFilePath, JSON.stringify(productDeleted))

		res.redirect('/')
	}
}

module.exports = productsController;