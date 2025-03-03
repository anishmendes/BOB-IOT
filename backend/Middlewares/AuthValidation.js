const Joi = require('joi');

const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().pattern(/^[0-9]{10,15}$/).required()
            .messages({ "string.pattern.base": "Phone number must be between 10-15 digits." }),
        location: Joi.string().min(2).max(200).required(),
        password: Joi.string().min(6).max(100).required()
    });

    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validation error. Please check the input fields.",
            errors: error.details.map(err => err.message)
        });
    }
    next();
};

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(100).required()
    });

    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validation error. Please check the input fields.",
            errors: error.details.map(err => err.message)
        });
    }
    next();
};

module.exports = {
    signupValidation,
    loginValidation
};
