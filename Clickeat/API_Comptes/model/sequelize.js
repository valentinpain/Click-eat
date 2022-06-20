const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('AuthDB', 'sa', 'cesi2022', {
    host: 'localhost',
    dialect: 'mssql'
});
async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connect()

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require("./user.js")(sequelize, Sequelize);

module.exports = db;