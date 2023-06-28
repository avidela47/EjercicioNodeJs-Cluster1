const { userService } = require('../services')

const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ action: 'create user', error: err.message });
    }
};

const getUser = (req, res) => {

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

const putUser = (req, res) => {
    
};

const deleteUser = (req, res) => {
    
};

module.exports = { createUser, getUser, getUserId, putUser, deleteUser };