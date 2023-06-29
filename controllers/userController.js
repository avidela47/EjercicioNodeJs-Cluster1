const { userService } = require('../services')

const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ action: 'create user', error: err.message });
    }
};

const getUser = async (req, res) => {
    try {
        const users = await userService.getUser(req.params.getUser);
        if (!users) {
            res.status(404).json({ action: 'get users', error: `Users not found` });
        } else {
            res.json(users);
        }
    } catch (err) {
        res.status(500).json({ action: 'get users', error: err.message });
    }
};

const getUserId = async (req, res) => {
    try {
        const user = await userService.getUserId(req.params.userId);
        if (!user) {
            res.status(404).json({ action: 'get userID', error: `User not found` });
        } else {
            res.json(user);
        }
    } catch (err) {
        res.status(500).json({ action: 'get userID', error: err.message });
    }
};

const putUser = async (req, res) => {
    try {
        const user = await userService.putUser(req.params.putUser);
        if (!user) {
            res.status(404).json({ action: 'put userID', error: `User not found` });
        } else {
            res.json(user);
        }
    } catch (err) {
        res.status(500).json({ action: 'put userID', error: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.deleteUser);
        if (!user) {
            res.status(404).json({ action: 'delete userID', error: `User not found` });
        } else {
            res.json(user);
        }
    } catch (err) {
        res.status(500).json({ action: 'delete userID', error: err.message });
    }
};

module.exports = { createUser, getUser, getUserId, putUser, deleteUser };