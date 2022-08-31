const fs = require('fs');
const path = require('path');
const db = require('../database/models');

// const productsFilePath = path.join(__dirname, '../data/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

// const mouses = products.filter(product => product.category == 'mouse')

// const keyboard = products.filter(product => product.category == 'teclado')

// const display = products.filter(product => product.category == 'monitor')

// const gamerChair = products.filter(product => product.category == 'silla')

// const processor = products.filter(product => product.category == 'procesador')

// const blend = products.filter(product => product.category == 'combo')

const mainController = {
//     index: (req, res) => {
		
// 		const productoEncontrado = await Product.findOne({where:{id:1}})
// 		console.log(productoEncontrado)


// 		res.render("index", {})
// 	},
// 	search: (req, res) => {
// 		// Do the magic
// 	}
// };





index: (req, res) => {

	let products = db.Product.findAll()

	.then ((products) => {

		let mouses = []
		let keyboards = []
		let combos = []
		let sillas = []

		products.forEach (e => {
			if (e.category_id == 'Mouse') {
				mouses.push(e)
			} else if (e.category_id == 'Teclado'){
				keyboards.push(e)
			} else if (e.category_id == 'Combo'){
				combos.push(e)
			} else if (e.category_id == 'Silla'){
				sillas.push(e)
			} 
		})

		res.render('index', {mouses, keyboards, combos, sillas})

	})


}




// index: (req, res) => {
// 	// let mouse1 = db.Product.findAll ({where: {category_id: 'Monitor'}})
// 	let product_1 = db.Product.findByPk (1)
// 	let product_2 = db.Product.findByPk (2)
// 	let product_3 = db.Product.findByPk (3)
// 	let product_4 = db.Product.findByPk (27)

// 	Promise.all ([product_1, product_2, product_3, product_4])

// 	.then(function(product_1, product_2, product_3, product_4) {

// 		console.log(product_4)

// 	res.render('index', {product_1, product_2, product_3, product_4})

	
// })}

}

module.exports = mainController


// productEdit: (req, res) => {
// 	db.Product.findByPk(req.params.id)
// 		.then(function (product) {
// 			res.render('productEdit', { product: product })
// 		});