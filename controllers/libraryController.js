const { libraryService } = require('../services')

const createLibrary = async (req, res) => {
    try {
        const newLibrary = await libraryService.createLibrary(req.body);
        res.json(newLibrary);
    } catch (err) {
        res.status(500).json({ action: 'create library', error: err.message });
    }
};

const getLibrary = (req, res) => {

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

const putLibrary = (req, res) => {
    
};

const deleteLibrary = (req, res) => {
    
};

module.exports = { createLibrary, getLibrary, getLibraryId, putLibrary, deleteLibrary };