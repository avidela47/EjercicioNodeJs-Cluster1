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

const getUserId = async (userId) => {
    try {
        const user = await User.findByPk(userId, { include: { all: true } });
        return user;
    } catch (err) {
        console.error("Error when fetching User", err);
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

module.exports = { createUser, getUserId, validateUser };
