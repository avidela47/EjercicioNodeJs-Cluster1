const { bookService } = require('../services')

const createBook = async (req, res) => {
    try {
        const newBook = await bookService.createBook(req.body);
        res.json(newBook);
    } catch (err) {
        res.status(500).json({ action: 'create book', error: err.message });
    }
};

const getBooks = (req, res) => {
    
};

const getBookId = (req, res) => {
    console.log(`Book found with id ${req.params.bookId}`);
    res.json({ id: req.params.bookId, name: 'Lord of the Ring' });
};

const putBook = (req, res) => {
    console.log(`Book found with id ${req.params.bookId}`);
    res.json({ id: req.params.bookId, ...req.body });
};

const deleteBook = (req, res) => {
    console.log(`Book found with id ${req.params.bookId}`);
    res.json({ id: req.params.bookId, ...req.body });
};

module.exports = { createBook, getBooks, getBookId, putBook, deleteBook };