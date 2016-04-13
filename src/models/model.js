var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
	name: String,
	color: String,
	fed: Boolean
});

var model = mongoose.model('Person', personSchema);

module.exports = model;