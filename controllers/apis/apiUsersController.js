const db = require('../../database/models');
const sequelize = db.sequelize;


const usersController = {
    list: (req, res) => {
        db.User.findAll()
            .then(users => {

                let respuesta = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: 'api/users'
                    },
                    data: users
                }

                res.json(respuesta)
            })
    },
    details: (req, res) => {

        let userId = req.params.id

        db.User.findByPk(userId)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        id: userId,
                        url: 'api/users/details/' + userId
                    },
                    data: user
                }

                res.json(respuesta)
            });
}
}








module.exports = usersController;
