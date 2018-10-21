const config = require("config");
const Sequelize = require("sequelize");

const dbconfig = config.dbconfig;
let mysqlconnection;
if (dbconfig) {
    mysqlconnection = new Sequelize(dbconfig.database, dbconfig.usr, dbconfig.pwd, dbconfig.cfg);
}
module.exports = mysqlconnection;
