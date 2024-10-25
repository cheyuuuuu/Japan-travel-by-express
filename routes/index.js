const express = require('express');
const router = express.Router();
const path = require('path');
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

router.get('/api/data', async (req, res) => {
  try{
    const response = await axios.get('https://cpx.cbc.gov.tw/API/DataAPI/Get?FileName=BP01D01');
    const data = response.data;
    // console.log(data);
    // console.log(Object.keys(data));
    // console.log('dataSets:', data.data.dataSets); 檢查目標資料所在位置用
    if(data && data.data && data.data.dataSets){
      console.log('Is dataSets an array?', Array.isArray(data.data.dataSets))
      const latestData = data.data.dataSets[data.data.dataSets.length - 1];
      if(latestData.length > 4 ){
        const jpyRate = latestData[2];
        const date = latestData[0];
        res.json({ Date: date, currency:'日圓/美金', rate: jpyRate});
      }else{
        res.status(404).json({ error: 'dataSets裡沒有資料' });
      }
    }else{
      res.status(404).json({ error: 'No valid data found' });
    }
   }catch(error){
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
