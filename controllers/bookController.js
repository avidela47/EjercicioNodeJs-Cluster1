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

const getBookId = async (req, res) => {
    try {
        const book = await bookService.getBookId(req.params.bookId);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ action: ' found book', msg: 'Libro no encontrado' });
        }
        
    } catch (err) {
        res.status(500).json({ action: 'found book', error: err.message });
    }
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