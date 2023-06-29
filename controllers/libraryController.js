const { libraryService } = require('../services')

const createLibrary = async (req, res) => {
    try {
        const newLibrary = await libraryService.createLibrary(req.body);
        res.json(newLibrary);
    } catch (err) {
        res.status(500).json({ action: 'create library', error: err.message });
    }
};

const getLibrary = async (req, res) => {
    try {
        const librarys = await libraryService.getLibrary(req.params.getLibrary);
        if (!librarys) {
            res.status(404).json({ action: 'get librarys', error: `Books not found` });
        } else {
            res.json(librarys);
        }
    } catch (err) {
        res.status(500).json({ action: 'get librarys', error: err.message });
    }
};

const getLibraryId = async (req, res) => {
    try {
        const library = await libraryService.getLibraryId(req.params.libraryId);
        if (!library) {
            res.status(404).json({ action: 'get libraryID', error: `Library not found` });
        } else {
            res.json(library);
        }
    } catch (err) {
        res.status(500).json({ action: 'get libraryID', error: err.message });
    }
};

const putLibrary = async (req, res) => {
    try {
        const library = await libraryService.putLibrary(req.params.putLibrary);
        if (!library) {
            res.status(404).json({ action: 'put libraryID', error: `User not found` });
        } else {
            res.json(library);
        }
    } catch (err) {
        res.status(500).json({ action: 'put libraryID', error: err.message });
    }
};

const deleteLibrary = async (req, res) => {
    try {
        const library = await libraryService.deleteLibrary(req.params.deleteLibrary);
        if (!library) {
            res.status(404).json({ action: 'delete libraryID', error: `Library not found` });
        } else {
            res.json(library);
        }
    } catch (err) {
        res.status(500).json({ action: 'delete userID', error: err.message });
    }
};

module.exports = { createLibrary, getLibrary, getLibraryId, putLibrary, deleteLibrary };