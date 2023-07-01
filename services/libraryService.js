const { libraryProvider } = require("../providers");

const createLibrary = async (library) => {
    return await libraryProvider.createLibrary(library);
};

const getLibrary =  async () => {
    const library = await libraryProvider.getLibrary();
    return library;
};

const getLibraryId = async (libraryId) => {
    const library = await libraryProvider.getLibraryId(libraryId);
    return library;
};

const putLibrary =  async (libraryId, libraryput) => {
    const library = await libraryProvider.putLibrary(libraryId, libraryput);
    return library;
 };

 const deleteLibrary =  async (libraryId) => {
    const library = await libraryProvider.deleteLibrary(libraryId);
    return library;
 };

module.exports = { createLibrary, getLibrary, getLibraryId, putLibrary, deleteLibrary };