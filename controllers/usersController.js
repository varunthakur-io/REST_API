const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    try {
        const allUsers = await User.find({});
        return res.json(allUsers);
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

async function handleGetUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

async function handleCreateNewUser(req, res) {
    let body = req.body;
    try {
        await User.create({ ...body });
        return res.status(201).json({ msg: "success" });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

async function handleUpdateUserById(req, res) {
    let updatedUserData = req.body;
    try {
        await User.findByIdAndUpdate(req.params.id, { ...updatedUserData });
        return res.json({ status: 'User Updated' });
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


async function handleDeleteUserById(req, res) {
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.json({ status: 'User Deleted' });
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
};