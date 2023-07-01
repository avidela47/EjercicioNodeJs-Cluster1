const express = require('express');
const router = express.Router();
const { libraryController } = require('../controllers');
const { jwtValidMDW, userIsAdminMDW } = require('../middleware/authMdw');

router.post('/', jwtValidMDW, userIsAdminMDW, libraryController.createLibrary)
      .get('/librarys', libraryController.getLibrary)
      .get('/:libraryId', libraryController.getLibraryId)
      .put('/:libraryId', jwtValidMDW, userIsAdminMDW, libraryController.putLibrary)
      .delete('/:libraryId', jwtValidMDW, userIsAdminMDW, libraryController.deleteLibrary);

module.exports = router;