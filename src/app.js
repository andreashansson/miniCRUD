var express = require('express');
var parser = require('body-parser');
var router = require('./api');
var hello = require('./api');
var persons = require('./api');

var app = express();

require('./database');

app.use('/', express.static('public'));
app.use(parser.json());

app.use('/app', express.static('app'));

app.use('/api', router);

app.use('/', hello);

app.use('/', persons);

app.listen(3000, function() {
    console.log("The server is running on port 3000!");
});