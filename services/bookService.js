const { bookProvider } = require("../providers");

const createBook =  async(book) => {
    return await bookProvider.createBook(book);
};

const getBook =  async (books) => {
    const book = await bookProvider.getBook(books);
    return book;
 };

const getBookId = async (bookId) => {
    const book = await bookProvider.getBookId(bookId);
    return book;
};

const putBook =  async (bookId) => {
    const book = await bookProvider.putBook(bookId);
    return book;
 };

 const deleteBook =  async (bookId) => {
    const book = await bookProvider.deleteBook(bookId);
    return book;
 };

module.exports = { createBook, getBook, getBookId, putBook, deleteBook  };
