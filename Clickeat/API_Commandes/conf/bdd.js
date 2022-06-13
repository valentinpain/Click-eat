var mongoose = require('mongoose');
require('dotenv').config();

const bddConnect = (db) => {
    var urlMongo = "mongodb://localhost:27017/" + db;

    try {
        mongoose.connect(urlMongo);
        console.log("Connection sucessful")
    } catch(error){
        console.log(error);
    }
}

module.exports = bddConnect;