const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.render('userList', { users });
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

module.exports = router;