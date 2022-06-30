const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const bycrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))


const usersController = {
    details: (req,res) =>{
        let id = req.params.id;
        let user = users.find(user => user.id == id);

        res.render('userDetail', {user})
    },
    login: (req, res) =>{
        res.render('login') //ir hacia el form
    },
    processLogin: (req, res) =>{
        let userToLogin = User.findByField('password', req.body.password);
        if(userToLogin){
            req.session.userLogged = userToLogin;
            res.redirect('/users/details/' + userToLogin.id);
        } else {

        return res.render('login', {
            errors: {
                email: {
                    msg: 'Las credenciales no son válidas'
                }
            }
            
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
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userInDb = User.findByField('email', req.body.email);

        if (userInDb) {
            return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este email ya se encuentra registrado'
                    }
                },
                oldData: req.body
            });
        }

        let userToCreate = {
            name: req.body.name,
            email: req.body.email,
            password: bycrypt.hashSync(req.body.password, 10),
            category: 'user',
        }


        User.create(userToCreate)
        return res.redirect('/users/login');
        
    }
}

module.exports = usersController;