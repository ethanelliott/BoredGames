var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Bored Games'
	});
});

router.get('/horse-race', function(req, res, next) {
	res.render('horse-race', {
		title: 'Horse Race'
	});
});

router.get('/horse-race-user', function(req, res, next) {
	res.render('horse-race-user', {
		title: 'Horse Race'
	});
});

module.exports = router;