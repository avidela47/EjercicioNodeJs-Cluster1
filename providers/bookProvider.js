const { Book } = require('../models');

const createBook = async (book) => {
    try {
        const newBook = await Book.create(book);
        return newBook;
    } catch (err) {
        console.error("Error when creating Book", err);
        throw err;
    }
};

const getBookId = async (bookId) => {
    try {
        const book = await Book.findByPk(bookId);
        return book;
    } catch (err) {
        console.error("Error when encontrar Book", err);
        throw err;
    }
};

module.exports = { createBook, getBookId };