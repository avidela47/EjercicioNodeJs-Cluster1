const { libraryService } = require("../services");

const createLibrary = async (req, res) => {
    try {
        console.log(`Library created by user with role ${req.library.role}`);
        const newLibrary = await libraryService.createLibrary(req.params.library, req.body);
        res.json(newLibrary);
    } catch (err) {
        res.status(400).json({ action: "createLibrary", error: err.message });
    }
};

const getLibraryId = async (req, res) => {
    console.log(`Library found with id ${req.params.libraryId}`);
    res.json({ id: req.params.libraryId, name: "Lord of the rings" });
};

module.exports = { createLibrary, getLibraryId };