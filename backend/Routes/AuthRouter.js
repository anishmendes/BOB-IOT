const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

// POST route for login with validation
router.post('/login', loginValidation, login);

// POST route for signup with validation
router.post('/signup', signupValidation, signup);

module.exports = router;
