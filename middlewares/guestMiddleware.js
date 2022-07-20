
const locals = ( req, res, next) =>{

    if(req.session && req.session.userLogged && req.session.userLogged.admin){
        next()
    }
    res.redirect('/');
}

module.exports = locals;
// function guestMiddleware (req, res, next) {
//     if (req.session.userLogged) {
//         return res.redirect('/users/details/' + req.session.userLogged.id);
//     }
//     next();
// }

// module.exports = guestMiddleware;