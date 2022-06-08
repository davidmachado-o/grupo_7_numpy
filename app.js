const express = require("express");
const app = express();
const path = require("path");
const mainRouter = require('./routes/main')
const productRouter = require('./routes/products')

const methodOverride = require('method-override')
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
//app.use(express.json);

app.set('view engine', 'ejs')
app.set('views', (path.resolve('views')))

app.use(methodOverride('_method'))

app.listen(3000, () => {
  console.log("Running on port 3000");
});

app.use('/', mainRouter);
app.use('/product/', productRouter)

app.use('*', mainRouter);


// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "views/index.html"))
// })

// app.post("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "views/index.html"))
// })

// app.get("/home", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "views/index.html"))
// })

// app.get("/productDetail", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "views/productDetail.html"))
// })

// app.get("/productCart", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "views/productCart.html"))
// })

// app.get("/register", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "views/register.html"))
// })

// app.post("/register", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "views/register.html"))
// })

// app.get("/login", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "views/login.html"))
// })

// app.post("/login", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "views/login.html"))
// })

app.get("/nav", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/test-nav/nav.html"))
})

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/index.html"))
})