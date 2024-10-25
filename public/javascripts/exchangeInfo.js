async function exchangeInfo(){
  const apiURL = "http://localhost:3000/api/data";
  try{
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);

    displayData(data);
  }catch(error){
    console.log('Fetch error:', error);
  } 
}

function displayData(data){
  let rateContaier = document.getElementById("rateContainer");
  rateContaier.innerText = `更新日期: ${data.Date}, 日圓匯率: ${data.rate}`

}

document.addEventListener('DOMContentLoaded', () => {
  exchangeInfo();  // 當頁面加載完成後執行
});