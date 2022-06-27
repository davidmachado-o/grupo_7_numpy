const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

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
        const resultValidation = validationResult(req);
        if(!resultValidation.isEmpty()){
            return res.render('login', {errors: resultValidation.array()})
        }
        let email = req.body.email;
        let password = req.body.password;
        let user = users.find(user => user.email == email && user.password == password);
        if(user){
            res.redirect('/users/details/' + user.id)
        }
    },
	register: (req,res) =>{
        res.render('register' ) //ir hacia el form
    }

    // destroy : (req, res) => {
	// 	let id = req.params.id 
	// 	let usersDeleted = users.filter(user => user.id != id);

	// },
}

module.exports = usersController;