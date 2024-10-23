document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const button = document.getElementById('button');
  form.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        if(event.shiftKey){
          return;
        }
        if(!isFormComplete(form)){
          return alert("需要全部填寫完畢才能送出");
        }
          event.preventDefault(); // 防止換行
          submitForm(); // 發送訊息
      }
  });

  button.addEventListener('click', (event) => {
    if(!isFormComplete(form)){
      return alert("需要全部填寫完畢才能送出");
    }
      submitForm(); // 發送訊息
  });
});

//檢查表單裡面有沒有空白
function isFormComplete(form){
  const inputs = form.querySelectorAll('.input');
  
  for(let input of inputs){ //for in 通常用於物件，歷遍物件的key; for of 通常用於 arr or nodelist ，歷遍迭代對象的值
    if (input.value.trim() === "") {  // trim() 去除空格檢查是否為空
      return false;
    }
  }
  return true;
}

function submitForm(){
  //抓到表格元素
  const form = document.getElementById('form');
  //用FormData蒐集表單數據
  const formData = new FormData(form);
  //轉換成物件
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  //轉換成jason
  const jsonData = JSON.stringify(formObject);
  //送給後端
  sendToBackend(jsonData).then(() => { 
    //.then 用於確認送出的資料已成功返回promise才進行下一步
    alert('你已送出表單');
    form.reset();  // 清空表單
  });
}


async function sendToBackend(jsonData) {
  try{
    const response = await fetch('/contact/submit',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: jsonData,
    });
    const result = await response.json();
    console.log('伺服器回應:', result);
  }catch(error){
    console.error('發送失敗', error);
  }
  
}