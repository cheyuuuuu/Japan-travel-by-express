const express = require('express');
const router = express.Router();
const path = require('path');

/* GET food page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'food.html'));
});

module.exports = router;