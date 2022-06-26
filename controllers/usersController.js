const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))


const usersController = {
    details: (req,res) =>{
        let id = req.params.id;
        let user = users.find(user => user.id == id);

        res.render('userDetail', {user})
    },

    // destroy : (req, res) => {
	// 	let id = req.params.id 
	// 	let usersDeleted = users.filter(user => user.id != id);

	// },
}

module.exports = usersController;