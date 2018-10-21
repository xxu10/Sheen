const Sequelize = require('sequelize');
const db = require("../lib/db");

const Models = db.define("default", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = Models;
