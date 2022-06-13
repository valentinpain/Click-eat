const mongoose = require("mongoose")
var bddConnect = require('./bdd');

bddConnect("commandes");

const commandesSchema = new mongoose.Schema({
	id: Number,
	test: String
});

const commandesModel = mongoose.model('commandes', commandesSchema);

module.exports = commandesModel;