const express = require('express');
const router = express.Router();
const path = require('path');

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'contact.html'));
});
//在後端印出收到的資料並回給前端資訊
router.post('/submit', (req, res) => {
  const data = req.body;
  console.log('收到資料', data);
  res.json({ message: '資料接收成功', data: data});
});


module.exports = router;