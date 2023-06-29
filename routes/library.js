const express = require('express');
const router = express.Router();
const { libraryController } = require('../controllers');
const { jwtValidMDW, userIsAdminMDW } = require('../middleware/authMdw');

router.post('/', userIsAdminMDW, libraryController.createLibrary)
      .get('/librarys', jwtValidMDW, libraryController.getLibrary)
      .get('/:libraryId', jwtValidMDW, libraryController.getLibrary)
      .put('/:libraryId', libraryController.putLibrary)
      .delete('/:libraryId', libraryController.deleteLibrary);

module.exports = router;