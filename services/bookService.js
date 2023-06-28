const { bookService } = require("../services");

const createBook = async (req, res) => {
    try {
        console.log(`Book created by user with role ${req.user.role}`);
        const newBook = await bookService.createBook(req.params.book, req.body);
        res.json(newBook);
    } catch (err) {
        res.status(400).json({ action: "createBook", error: err.message });
    }
};

const getBookId = (req, res) => {
    console.log(`Book found with id ${req.params.bookId}`);
    res.json({ id: req.params.bookId, name: "Lord of the rings" });
};

module.exports = { createBook, getBookId };
