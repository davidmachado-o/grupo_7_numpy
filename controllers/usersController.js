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
        if(resultValidation.errors.length > 0){
           return res.render('login', {
            errors: resultValidation.mapped()
            })
            }else{
                let user = users.find(user => user.email == req.body.email);
                if(user){
                    if(user.password == req.body.password){
                        res.redirect('/users/details/' + user.id)
                    }else{
                        res.render('login', {
                            errors: [{msg: 'Password incorrecto'}]
                        })
                    }
                }else{
                    res.render('login', {
                        errors: [{msg: 'Email incorrecto'}]
                    })
                }
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