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
        let userToLogin = User.findByField('email', req.body.email);
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
	register: (req,res) => {
        res.render('register' ) //ir hacia el form
    }
    ,
    // create: (req,res) => {
    //     let user = {
    //         first_name: req.body.first_name,
    //         last_name: req.body.last_name,
    //         email: req.body.email,
    //         password: bcypt.hashSync(req.body.password, 10)
    //     }
    // }
}

module.exports = usersController;