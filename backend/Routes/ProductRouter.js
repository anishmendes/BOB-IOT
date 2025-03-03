const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

// GET route to fetch products for the logged-in user
router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user); // Logs the user details to the console

    // Here, we're returning some static products for now
    res.status(200).json({
        user: req.user,  // Returning the logged-in user's details
        products: [      // List of products
            {
                name: "mobile",
                price: 10000
            },
            {
                name: "tv",
                price: 20000
            }
        ]
    });
});

module.exports = router;
