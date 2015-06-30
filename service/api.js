var express = require('express');
var user_model = require('../models/users');

const router = express.Router();

router.use(function(req, res, next) {
	next();
});

router.route('/')
    .get(function(req,res) {
	    res.json({ message:'Hello World!'});
	})

    .post(function(req, res) {
	    var user = new user_model();
	    user.author = req.body.author;
	    user.text = req.body.text;
	    user.save(function(err) {
	    if (err)
	       res.send(err);
	    res.json({ message:'Got a Post request'});
        })
    })

router.route('/user')
	.put(function(req,res) {
		var user = new user_model();
		user_model.findOne({'author':req.params.author}, function (err, user)
		{
		    if (err)
			res.send(err);
		    user.text = req.body.text;
		    user.save(function(err) {
		    if (err)
		       res.send(err);
			    
		res.json({ message:'Got a PUT request at /user'});
	 })
        })
    })

	.delete(function(req,res) {
		user_model.remove({
			author: req.params.author
			    }, function(err, author)
		    {
			if (err)
			    res.send(err)
			res.json({message:'Got a DELETE request at /user'});
		    });
	    })

router.route('/')

module.exports = router;