const mongoose = require('mongoose')
///const uri = 'mongodb+srv://user:1234@cluster0.srnqgyr.mongodb.net/A4L/';
const uri = 'mongodb://localhost:27017/test/';

const bddConnect = mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'test'
    })
    .then(() => console.log('Mongo connected'))
    .catch(() => console.log('Cant connect to Mongo'));
module.exports = bddConnect