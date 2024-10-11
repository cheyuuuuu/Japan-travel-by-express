var express = require('express');
var router = express.Router();
var path = require('path');

/* GET food page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'food.html'));
});

module.exports = router;