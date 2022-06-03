let productos =[
    {
        id:1,
        nombre:"Volante Logitech G29",
        precio: "$20,300",
        anterior: "$38,000",
        imagen: "producto_volante.jpeg"
    },
    {
        id:2,
        nombre:"Volante Logitech G29",
        precio: "$20,300",
        anterior: "$38,000",
        imagen: "producto_volante.jpeg"},
    {
        id:3,
        nombre:"Volante Logitech G29",
        precio: "$20,300",
        anterior: "$38,000",
        imagen: "producto_volante.jpeg"}
]


const mainController = {

    index : (req, res) => {

        res.render('index', {productos:productos}) //productos es un ejemplo
    },
    productDetail: (req, res) => {

        // let detalleProducto = productos.find(producto => producto.id == req.params.id); detalleProducto

            res.render('productDetail', {producto: productos} )
    },
    login: (req, res) =>{
        res.render('login', {productos:productos})
    },
    productCart: (req, res) =>{
        res.render('productCart', {productos:productos})
    },
    register: (req,res) =>{
        res.render('register', {productos:productos})
    },
    productEdit: (req,res) =>{
        res.render('productEdit', {productos:productos})
    },
    productAdd: (req,res) =>{
        res.render('productAdd', {productos:productos})
    }
}

module.exports = mainController;