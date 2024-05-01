const express = require('express');
const router = express.Router();

// Import route files
const apiRoutes = require('./api/users');
const usersRoutes = require('./users');

// Define base paths
router.use('/api', apiRoutes); // Routes for APIs
router.use('/users', usersRoutes); // Routes for users

module.exports = router;