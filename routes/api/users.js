const express = require('express');
const router = express.Router();
const {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
} = require("../../controllers/usersController");

router.route("/users").get(handleGetAllUsers).post(handleCreateNewUser);

router.route('/users/:id')
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

module.exports = router;