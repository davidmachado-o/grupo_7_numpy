const fs = require('fs');
const path =require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))


const usersController = {
    users: (req,res) =>{
        res.render('users', {users})
    },

    // destroy : (req, res) => {
	// 	let id = req.params.id 
	// 	let usersDeleted = users.filter(user => user.id != id);

	// },
}

module.exports = usersController;