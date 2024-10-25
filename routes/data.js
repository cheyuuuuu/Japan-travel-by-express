let data = [
  {
    "id" : 1,
    "name" : "Mr.test",
    "number" : "0911111111",
    "email" : "test@test.com",
    "contain" : "測試"
  },
];

function addData(newData){
    newData.id = data.length + 1; //自動生成 ID
    const { id, name, number, email, contain } = newData; // 取出屬性
    // 重新生成 newData，確保 id 在最前面
    newData = { id, name, number, email, contain };
    data.push(newData);
}

function consoleData(){
   return data;
}

function getData(){
  return data;
}


module.exports = { addData, consoleData, getData };