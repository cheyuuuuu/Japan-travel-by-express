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
    //,then 用於確認送出的資料已成功返回promise才進行下一步
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