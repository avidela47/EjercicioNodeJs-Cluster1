const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers');
const { jwtValidMDW, userIsAdminMDW } = require('../middleware/authMdw');

router.post('/', jwtValidMDW, userIsAdminMDW, bookController.createBook)
      .get('/books', bookController.getBook)
      .get('/:bookId', bookController.getBookId)
      .put('/:bookId', jwtValidMDW, userIsAdminMDW, bookController.putBook)
      .delete('/:bookId', jwtValidMDW, userIsAdminMDW, bookController.deleteBook);

module.exports = router;