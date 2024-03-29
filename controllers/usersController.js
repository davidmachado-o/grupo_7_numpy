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
    list: (req, res) => {
        db.User.findAll()
            .then(function (user) {
                res.render('userList', { user: user })
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
        if (!resultValidation.errors.length > 0) {
            if (userToLogin) {
                let okPassword = bycrypt.compareSync(req.body.password, userToLogin.password);
                if (okPassword) {
                    userData = userToLogin
                    delete userToLogin.password;
                    req.session.userLogged = userData;

                    if (req.body.remember) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 1000) * 90 })
                    }

                    return res.render('userDetail', { user: userData });
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

        const resultValidation = validationResult(req);

        // if (resultValidation.isEmpty()) {
        //     //Verifico si el email que ingreso ya fue registrado
        //     let user = await db.User.findOne({
        //         where: { email: req.body.email }
        //     })
        //         .catch(error => res.send(error));
        //     if (user) {
        //         resultValidation.errors.push({ msg: 'Este email ya está registrado.', param: 'email' })
        //     }
        //     //Verifico si escribio bien la contraseña
        //     if (req.body.password != req.body.password_confirm) {
        //         resultValidation.errors.push({ msg: 'La contraseña no coincide.', param: 'password' })
        //     }
        
        //Pregunto si hubo errores
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });

        }
        //Registro la cuenta
        try {
            await db.User.create({
                users_products_id: 1,
                user_type_id: 1,
                name: req.body.name,
                last_name: ' ',
                email: req.body.email,
                password: bycrypt.hashSync(req.body.password, 10),
                picture_id: req.file ? req.file.filename : 'default.jpg' //cambiar aca INT(11) por VARCHAR(45) para que pueda ir a la base de datos Y tambien cambiarlo en models.
            })
            res.redirect('login')
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = usersController;

