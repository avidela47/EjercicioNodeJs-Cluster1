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

const getBook = async () => {
    try {
        const books = await Book.findAll({ include: { all: true } } );
        return books;
    } catch (err) {
        console.error("Error when fetching Books", err);
        throw err;
    }
};

const getBookId = async (bookId) => {
    try {
        const book = await Book.findByPk(bookId, { include: { all: true } });
        return book;
    } catch (err) {
        console.error("Error when fetching GetBook", err);
        throw err;
    }
};

const putBook = async (bookId, bookput) => {
    try {
        const book = await Book.findByPk(bookId);
        if (book) {
            await Book.update((bookput), {
                where: {
                    id: bookId,
                }
            });
            return true;         
        }
        return false;        
    } catch (err) {
        console.error("Error when fetching PutBook", err);
        throw err;
    }
};

const deleteBook = async (bookId) => {
    try {
        const book = await Book.destroy({
            where: {
                id: bookId,
            }
        });
        return book;
    } catch (err) {
        console.error("Error when fetching DeleteBook", err);
        throw err;
    }
};

module.exports = { createBook, getBook, getBookId, putBook, deleteBook };