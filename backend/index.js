const express = require('express');
const app = express();
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');  // Ensure DB connection is set up

const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Built-in Express middleware for JSON parsing
app.use(express.json());  // Replaces bodyParser.json()
app.use(cors());

// Set up the routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);  // Log the error stack to the console
    res.status(500).json({ message: 'Something went wrong, please try again later.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
