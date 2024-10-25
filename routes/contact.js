const express = require('express');
const router = express.Router();
const path = require('path');
const { addData, consoleData } = require('./data');

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'contact.html'));
});
//在後端印出收到的資料並回給前端資訊
router.post('/submit', (req, res) => {
  const newData = req.body;
  addData(newData);
  const data = consoleData();
  console.log('收到資料，以下是所有資料 \n', data );
  res.json({ message: '資料接收成功', data: newData});
});


module.exports = router;