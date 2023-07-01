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
        const users = await User.findAll({ include: { all: true } });
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

const putUser = async (userId, userput) => {
    try {
        await User.update((userput), {
            where: {
                id: userId,
            }
        });
        const user = await User.findByPk(userId, { include: { all: true } });
        return user;

    } catch (err) {
        console.error("Error when fetching PutUser", err);
        throw err;
    }
};

const deleteUser = async (userId) => {
    try {
        const user = await User.destroy({
            where: {
                id: userId,
            }
        });
        return user;
    } catch (err) {
        console.error("Error when fetching DeleteUser", err);
        throw err;
    }
};

const validateUser = async (user, pass) => {
    try {
        console.log(user, pass);
        const users = await User.findOne({
            where: {
                email: user,
                password: pass,
            },
        });
        if (users) {
            return users;
        } else {
            return false;
        }
    } catch (err) {
        console.error("Error when validating User", err);
        return false;
    }
};

const createAdmin = async () => {
    try {
        const userexit = await User.findOne({
            where: {
                email: "admin@gmail.com",
            }

        })
        if (!userexit) {
            const newUser = await User.create({
                firstName: "Admin",
                lastName: "Admin",
                email: "admin@gmail.com",
                password: "Admin"
            });
            return newUser;
        }
    } catch (err) {
        console.error("Error when creating User", err);
        throw err;
    }
};

module.exports = { createUser, getUser, getUserId, putUser, deleteUser, validateUser, createAdmin };
