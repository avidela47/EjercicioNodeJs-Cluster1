const { User } = require('../models');

const createUser = async (user) => {
    try {
        const newUser = await User.create(user);
        return newUser;
    } catch (err) {
        console.error("Error when creating User", err);
        throw err;
    }
};

const getUser = async () => {
    try {
        const users = await User.findAll( { include: { all: true } });
        return users;
    } catch (err) {
        console.error("Error when fetching Users", err);
        throw err;
    }
};

const getUserId = async (userId) => {
    try {
        const user = await User.findByPk(userId, { include: { all: true } });
        return user;
    } catch (err) {
        console.error("Error when fetching User", err);
        throw err;
    }
};

const putUser = async (userID) => {
    try {
        const user = await User.update(userID, { include: { all: true } });
        return user;
    } catch (err) {
        console.error("Error when fetching PutUser", err);
        throw err;
    }
};

const deleteUser = async (userID) => {
    try {
        const user = await User.destroy(userID, { include: { all: true } });
        return user;
    } catch (err) {
        console.error("Error when fetching PutUser", err);
        throw err;
    }
};

const validateUser = async (user, pass) => {
    try {
        console.log(user, pass)
        const users = await User.findOne({
            where: {
                email: user,
                password: pass,
            },
        });
        if (users) {
            return users;
        }
        return false;
    } catch (err) {
        console.error("Error when validating User", err);
        return false;
    }
};

module.exports = { createUser, getUser, getUserId, putUser, deleteUser, validateUser };
