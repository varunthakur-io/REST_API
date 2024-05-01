// routes/index.js
const express = require('express');
const router = express.Router();

// Import route files for different resources

const apiRoutes = require('./api/users');
const usersRoutes = require('./users');

// Import other route files as needed

// Define base paths for different sections of your application
router.use('/api', apiRoutes);
router.use('/users', usersRoutes);
// Define base paths for other sections as needed

module.exports = router;
