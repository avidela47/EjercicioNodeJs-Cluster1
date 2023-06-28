const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');

router.post('/', userController.createUser)
      .get('/users', userController.getUser)
      .get('/:userId', userController.getUserId)
      .put('/:userId', userController.putUser)
      .delete('/:userId', userController.deleteUser);

module.exports = router;