const { Library } = require('../models');

const createLibrary = async (library) => {
    try {
        const newLibrary = await Library.create(library);
        return newLibrary;
    } catch (err) {
        console.error("Error when creating Library", err);
        throw err;
    }
};

const getLibrary = async () => {
    try {
        const librarys = await Library.findAll({ include: { all: true } });
        return librarys;
    } catch (err) {
        console.error("Error when fetching Librarys", err);
        throw err;
    }
};

const getLibraryId = async (libraryId) => {
    try {
        const library = await Library.findByPk(libraryId,
            {
                include: {
                    all: true,
                    attributes: ['id', 'isbn', 'title', 'author', 'year']
                },
                attributes: ['id', 'name', 'location', 'phone']
            });
        return library;
    } catch (err) {
        console.error("Error when fetching Library", err);
        throw err;
    }

};

const putLibrary = async (libraryId, libraryput) => {
    try {
        const library = await Library.update((libraryput), {
            where: {
                id: libraryId,
            }
        });
        return library;
    } catch (err) {
        console.error("Error when fetching PutLibrary", err);
        throw err;
    }
};

const deleteLibrary = async (libraryId) => {
    try {
        const library = await Library.destroy({
            where: {
                id: libraryId,
            }
        });
        return library;
    } catch (err) {
        console.error("Error when fetching DeleteLibrary", err);
        throw err;
    }
};

module.exports = { createLibrary, getLibrary, getLibraryId, putLibrary, deleteLibrary };