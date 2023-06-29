const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const Book = sequelize.define("Books", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isbn: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    library: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    paranoid: true,
});

module.exports = Book;