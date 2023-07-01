const { userProvider} = require('../providers');

const createUser =  async (user) => {
   return await userProvider.createUser(user);
};

const getUser =  async () => {
   return await userProvider.getUser();
   
};

const getUserId =  async (userId) => {
   const user = await userProvider.getUserId(userId);
   return user;
};

const putUser =  async (userId, userput) => {
   return await userProvider.putUser(userId, userput);
   
};

const deleteUser =  async (userId) => {
   return await userProvider.deleteUser(userId);
   
};

const validateUser =  async (user, pass) => {
   const userFound = await userProvider.validateUser(user, pass);
   return userFound;
};

module.exports = { createUser, getUser, getUserId, putUser, deleteUser, validateUser };