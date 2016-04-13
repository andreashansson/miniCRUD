var express = require('express');
var Person = require('../models/model'); // eller vad vår model-fil heter

var router = express.Router();

//router.get...
router.get('/hello', function(req, res, next) {

	var person = new Person({
		name: "Andreas",
		color: "brown",
		fed: false
	});

	person.save(function(err) {
		if (err)
			console.log("Error on save");
	});

	res.end();

});

router.get('/persons', function(req, res, next) {

	Person.find().then(function(allPersons) {

		console.log(allPersons);
		res.json(allPersons);

	}, function(err) {
		console.log(err);
	});

	res.end();
});

//router.post...

//router.put...

//router.delete...

module.exports = router;