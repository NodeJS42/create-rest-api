var mongoose = require('mongoose');

var schema = mongoose.Schema;
var users_schema = new schema({
	author		: String,
	text		: String
    });

module.exports = mongoose.model('quotes', users_schema);