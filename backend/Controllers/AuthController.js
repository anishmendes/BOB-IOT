const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");

const signup = async (req, res) => {
    try {
        const { name, email, phone, location, password } = req.body;

        // Check if the email is already registered
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists. Please log in instead.',
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new user
        const newUser = new UserModel({ name, email, phone, location, password: hashedPassword });
        await newUser.save();

        res.status(201).json({
            success: true,
            message: "Signup successful! You can now log in.",
        });

    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({
            success: false,
            message: "Internal server error. Please try again later.",
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Authentication failed. Email or password is incorrect.",
            });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Authentication failed. Email or password is incorrect.",
            });
        }

        // Generate JWT token
        let jwtToken;
        try {
            jwtToken = jwt.sign(
                { userId: user._id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );
        } catch (jwtError) {
            console.error("JWT Sign Error:", jwtError);
            return res.status(500).json({
                success: false,
                message: "Internal server error. Token generation failed.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Login successful!",
            token: jwtToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                location: user.location,
            }
        });

    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({
            success: false,
            message: "Internal server error. Please try again later.",
        });
    }
};

module.exports = { signup, login };
