const express = require('express');
const router = express.Router();
const usersController = require ('../../controllers/apis/apiUsersController');



router.get('/users', usersController.list);
router.get('/users/details/:id/', usersController.details);

module.exports = router;