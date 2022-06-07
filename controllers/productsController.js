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
        let id = req.params.id;
        let product = products.find(product => product.id == id);

        res.render('productEdit', {product})
    },


    productAdd: (req,res) =>{

        res.render('productAdd', {products})

        // let newProduct = {
        //     id: products.length + 1,
        // }

        // products.push(newProduct)

        // fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

        // res.redirect('/products')
    },

    store: (req,res) =>{
        let newProduct = {
            id: products.length + 1,
            ...req.body,
            image_1: req.files[0].filename,
            image_2: req.files[1].filename,
            image_3: req.files[2].filename
        }

        products.push(newProduct)

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

        res.redirect('/product/productEdit/' + newProduct.id);
        
    },

    destroy : (req, res) => {
		let id = req.params.id 
		let productDeleted = products.filter(product => product.id !== id);
		
		fs.writeFileSync(productsFilePath, JSON.stringify(productDeleted));

		res.redirect('/')
	},
    productUpdate: (req,res) =>{
        

        let id = req.params.id;
        let productToEdit = products.find(product => product.id == id);

        productToEdit = {
            id: productToEdit.id,
            ...req.body,
            image_1: image_1,
            image_2: image_2,
            image_3: image_3,
        };

        let image
        if (req.files[0] != undefined){
            image= req.files[0].filename;
        } else {
            image = productToEdit.image_1
        };

        let productEdited = products.map (product => {
            if (product.id == productToEdit.id) {
                return product = {...productToEdit}
            }
            return product
        })

        fs.writeFileSync(productsFilePath, JSON.stringify(productEdited));
        res.redirect ('/') //despues vemos hacia donde redirige

    }
}

module.exports = productsController;