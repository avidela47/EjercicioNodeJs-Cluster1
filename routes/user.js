const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');
const { jwtValidMDW, userIsAdminMDW } = require('../middleware/authMdw.js');

router.post('/', jwtValidMDW, userIsAdminMDW, userController.createUser)
      .get('/users', jwtValidMDW, userIsAdminMDW, userController.getUser)
      .get('/:userId', jwtValidMDW, userIsAdminMDW, userController.getUserId)
      .put('/:userId', jwtValidMDW, userIsAdminMDW, userController.putUser)
      .delete('/:userId', jwtValidMDW, userIsAdminMDW, userController.deleteUser);

module.exports = router;