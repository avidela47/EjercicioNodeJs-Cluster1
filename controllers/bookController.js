const { bookService } = require('../services')

const createBook = async (req, res) => {
    try {
        const newBook = await bookService.createBook(req.body);
        res.json(newBook);
    } catch (err) {
        res.status(500).json({ action: 'create book', error: err.message });
    }
};

const getBook = async (req, res) => {
    try {
        const books = await bookService.getBook(req.params.getBook);
        if (!books) {
            res.status(404).json({ action: 'get books', error: `Books not found` });
        } else {
            res.json(books);
        }
    } catch (err) {
        res.status(500).json({ action: 'get books', error: err.message });
    }
};

const getBookId = async (req, res) => {
    try {
        const book = await bookService.getBookId(req.params.bookId);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ action: 'found book', msg: 'Libro no encontrado' });
        }
        
    } catch (err) {
        res.status(500).json({ action: 'found book', error: err.message });
    }
};

const putBook = async (req, res) => {
    try {
        const book = await bookService.putBook(req.params.putBook);
        if (!book) {
            res.status(404).json({ action: 'put bookID', error: `User not found` });
        } else {
            res.json(book);
        }
    } catch (err) {
        res.status(500).json({ action: 'put bookID', error: err.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const book = await bookService.deleteBook(req.params.deleteBook);
        if (!book) {
            res.status(404).json({ action: 'delete bookID', error: `User not found` });
        } else {
            res.json(book);
        }
    } catch (err) {
        res.status(500).json({ action: 'delete bookID', error: err.message });
    }
};

module.exports = { createBook, getBook, getBookId, putBook, deleteBook };