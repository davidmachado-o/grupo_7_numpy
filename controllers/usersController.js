const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const bycrypt = require('bcryptjs');
const db = require('../database/models');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))


const usersController = {
    details: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(function (user) {
                res.render('userDetail', { user: user })  
            })
    },
    login: (req, res) => {
        res.render('login') //ir hacia el form
    },
    processLogin: async (req, res) => {
        let resultValidation = validationResult(req)
        let userToLogin = await db.User.findOne({
            where: { email: req.body.email }
        });
        console.log(req.body.email)
        if (!resultValidation.errors.length > 0) {
            if (userToLogin) {
                let okPassword = bycrypt.compareSync(req.body.password, userToLogin.password);
                console.log(req.body.password)
                console.log(userToLogin.password)
                console.log(okPassword)

                if (okPassword) {
                    userData = userToLogin
                    delete userToLogin.password;
                    req.session.userLogged = userData;

                    if (req.body.remember) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 1000) * 90 })
                    }

                    return res.redirect('/users/details/' + userData.id);
                }
                return res.render('login', {
                    errors: {
                        email: {
                            msg: 'Los datos ingresados son incorrectos'
                        }
                    }
                });
            } else {
                return res.render('login', {
                    errors: {
                        email: {
                            msg: 'No se encontro el correo ingresado'
                        }
                    }
                })
            }
        } else {

            return res.render('login', {
                errors: resultValidation.mapped(),
            })
        }

    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    },
    register: (req, res) => {
        res.render('register') //ir hacia el form
    },
    processRegister: async (req, res) => {
        let errors = validationResult(req);
        if (!req.file) {
            errors.errors.pop();
        }
        if (errors.isEmpty()) {
            //Verifico si el email que ingreso ya fue registrado
            let user = await db.User.findOne({
                where: { email: req.body.email }
            })
                .catch(error => res.send(error));
            if (user) {
                errors.errors.push({ msg: 'Este email ya está registrado.', param: 'email' })
            }
            //Verifico si escribio bien la contraseña
            if (req.body.password != req.body.password_confirm) {
                errors.errors.push({ msg: 'La contraseña no coinciden.', param: 'password' })
            }
            //Pregunto si hubo errores
            if (errors.errors.length > 0) {
                res.render('register', {
                    error: errors.mapped(),
                    old: req.body
                });
            }
            //Registro la cuenta
            await db.User.create({
                users_products_id: ' ',
                user_type_id: ' ',
                name: req.body.name,
                last_name: ' ',
                email: req.body.email,
                password: bycrypt.hashSync(req.body.password, 10),
                picture_id: req.file ? req.file.filename : 'default.jpg' //cambiar aca INT(11) por VARCHAR(45) por para que pueda ir a la base de datos Y tambien cambiarlo en models.
            })
            res.redirect('login')
        }
    },
}

module.exports = usersController;

