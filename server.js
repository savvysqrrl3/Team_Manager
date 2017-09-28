path = require('path');
var express =require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist')));
// Edit this once Angular folder is created, to give correct path for front end.

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(5000, function() {
    console.log("listening on port 5000");
})