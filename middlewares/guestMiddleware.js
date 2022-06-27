function guestMiddleware (req, res, next) {
    if (req.session.userLogged) {
        return res.redirect('/users/details/' + req.session.userLogged.id);
    }
    next();
}

module.exports = guestMiddleware;