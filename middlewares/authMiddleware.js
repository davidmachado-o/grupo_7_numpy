const locals = (req, res, next) => {

    res.locals.isAuthenticated = false;
    if (req.session.userLogged){
        res.locals.isAuthenticated = true;
        res.locals.userLogged = req.session.userLogged
    }
    next()
}
module.exports = locals;


// function authMiddleware (req, res, next) {
//     if (!req.session.userLogged) {
//         return res.redirect('/users/login');
//     }
//     next();
// }

// module.exports = authMiddleware;