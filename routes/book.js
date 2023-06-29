const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers');
const { jwtValidMDW, userIsAdminMDW } = require('../middleware/authMdw');

router.post('/', userIsAdminMDW, bookController.createBook)
      .get('/books', jwtValidMDW, bookController.getBooks)
      .get('/:bookId', jwtValidMDW, bookController.getBookId)
      .put('/:bookId', bookController.putBook)
      .delete('/:bookId', bookController.deleteBook);

module.exports = router;