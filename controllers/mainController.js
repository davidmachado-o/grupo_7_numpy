const fs = require('fs');
const path =require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

const mouses = products.filter(product => product.category == 'mouse')

const keyboard = products.filter(product => product.category == 'teclado')

const display = products.filter(product => product.category == 'monitor')

const gamerChair = products.filter(product => product.category == 'silla')

const processor = products.filter(product => product.category == 'procesador')

const blend = products.filter(product => product.category == 'combo')

const mainController = {
    index: (req, res) => {
		res.render("index", {mouses, keyboard, display, gamerChair, processor, blend})
	},
	search: (req, res) => {
		// Do the magic
	},
	login: (req, res) =>{
        res.render('login') //ir hacia el form
    },
	register: (req,res) =>{
        res.render('register' ) //ir hacia el form
    },
	//agregar el login y register
};

module.exports = mainController