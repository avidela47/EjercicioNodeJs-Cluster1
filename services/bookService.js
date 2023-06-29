const { bookProvider } = require("../providers");

const createBook =  async(book) => {
    return await bookProvider.createBook(book);
}

const getBookId = async (bookId) => {
   return await bookProvider.getBookId(bookId);
};

module.exports = { createBook, getBookId };
