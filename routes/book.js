const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers');
// const { jwtValidMDW, userIsAdminMDW } = require('../middleware/authMdw');

router.post('/', bookController.createBook)
      .get('/books', bookController.getBook)
      .get('/:bookId', bookController.getBookId)
      .put('/:bookId', bookController.putBook)
      .delete('/:bookId', bookController.deleteBook);

module.exports = router;