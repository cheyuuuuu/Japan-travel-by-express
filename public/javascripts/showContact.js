

document.addEventListener('DOMContentLoaded', () =>{
  fetch('/secretPage/api/data')
    .then(response => {
      if (!response.ok){
        throw new Error('沒有反應');
      };
      return response.json();
    })
    .then(data => {
      console.log(data);
      const tableBody = document.querySelector('#data-table tbody');
      data.forEach(item => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        const nameCell = document.createElement('td');
        const numberCell = document.createElement('td');
        const emailCell = document.createElement('td');
        const contactCell = document.createElement('td');

        idCell.textContent = "ID：" +item.id;
        nameCell.textContent = "稱呼：" + item.name; 
        numberCell.textContent = "連絡電話：" + item.number; 
        emailCell.textContent = "電子信箱：" + item.email;
        contactCell.textContent = "內容：" + item.contain;

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(numberCell);
        row.appendChild(emailCell);
        row.appendChild(contactCell);
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('獲取資料時出錯:', error);
    });
});
