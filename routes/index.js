const express = require('express');
const router = express.Router();

// Import route files
const apiRoutes = require('./api/users');
const usersRoutes = require('./users');

// Define base paths
router.use('/api', apiRoutes); // Routes for APIs
router.use('/users', usersRoutes); // Routes for users

// Define route handler for the root path ("/")
router.get('/', (req, res) => {
    res.redirect('/users'); // Redirect to "/users"
});

module.exports = router;