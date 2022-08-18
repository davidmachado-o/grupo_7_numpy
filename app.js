// REQUIRES
const express = require("express");
const app = express();
const path = require("path");

//** Llamado de rutas */
const mainRouter = require('./routes/main');
const productRouter = require('./routes/products');
const usersRouter = require('./routes/users');
//** Llamado de rutas en las apis */
const apiUsersRoutes = require('./routes/apis/apiUsersRoutes');
const apiProductsRoutes = require('./routes/apis/apiProductsRoutes')
const session = require('express-session');

const methodOverride = require('method-override');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const cookies = require('cookie-parser');
const auth = require('./middlewares/authMiddleware')


// PUBLIC PATH
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
//app.use(express.json);

// VIEW ENGINE
app.set('view engine', 'ejs')
app.set('views', (path.resolve('views')))
 
// METHOD OVERRIDE
app.use(methodOverride('_method'))


// EXPRESS SESSION
app.use(session({
  secret: 'numpy secret grupo 7',
  resave: false,
  saveUninitialized: false
}))


// COOKIES
app.use(cookies());

// USER LOGGED MIDDLEWARE
app.use(userLoggedMiddleware);

//AUTENTIFICACIÓN
app.use(auth)

// URL ENCODED
app.use(express.urlencoded({ extended: false }));

// APP LISTEN
app.listen(3000, () => {
  console.log("Running on port 3000");
});

// ROUTES
app.use('/', mainRouter);
app.use('/product/', productRouter);
app.use('/users/', usersRouter);

app.use(express.json())

// API's
app.use('/api/users', apiUsersRoutes);
app.use('/api/products', apiProductsRoutes);