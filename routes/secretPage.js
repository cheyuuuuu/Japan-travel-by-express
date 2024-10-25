const express = require('express');
const router = express.Router();
const path = require('path');
const { getData } = require('./data');

/* GET secretPage. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'secretPage.html'));
});

//提供資料的routes
router.get('/api/data', (req, res) => {
  const data = getData();
  res.json(data);
})

module.exports = router;