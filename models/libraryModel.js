const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");
const Book = require('./bookModel');

const Library = sequelize.define("Librarys", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
}, {
    paranoid: true,
});

Library.hasMany(Book, {
    foreignKey: 'library',
});
Book.belongsTo(Library, {
    foreignKey: 'library',
});

module.exports = Library;