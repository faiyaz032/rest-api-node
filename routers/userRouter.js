//dependencies
const express = require('express');

//internal imports
const { signupController, loginController } = require('../controllers/userController');

const router = express.Router();

//user signup
router.post('/signup', signupController);
router.post('/login', loginController);

module.exports = router;
