const express = require('express');
const router = express.Router();
const { libraryController } = require('../controllers');
// const { jwtValidMDW, userIsAdminMDW } = require('../middleware/authMdw');

router.post('/', libraryController.createLibrary)
      .get('/librarys', libraryController.getLibrary)
      .get('/:libraryId', libraryController.getLibrary)
      .put('/:libraryId', libraryController.putLibrary)
      .delete('/:libraryId', libraryController.deleteLibrary);

module.exports = router;