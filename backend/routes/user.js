const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');



router.post('/save-user', userController.createUser);

module.exports = router;
