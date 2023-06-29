const { userProvider} = require('../providers');

const createUser =  async (user) => {
   return await userProvider.createUser(user);
};

const getUser =  async (users) => {
   const user = await userProvider.getUser(users);
   return user;
};

const getUserId =  async (userId) => {
   const user = await userProvider.getUserId(userId);
   return user;
};

const putUser =  async (userId) => {
   const user = await userProvider.putUser(userId);
   return user;
};

const deleteUser =  async (userId) => {
   const user = await userProvider.deleteUser(userId);
   return user;
};

const validateUser =  async (user, pass) => {
   const userFound = await userProvider.validateUser(user, pass);
   return userFound;
};

module.exports = { createUser, getUser, getUserId, putUser, deleteUser, validateUser };