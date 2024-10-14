function showIntro(pageId, element){
  const parentDiv = document.querySelectorAll('.introcontent');//把所有父層的狀態都清空
  parentDiv.forEach(page => {
    page.classList.remove('active');
    page.classList.remove('None');
  });

  const parentDivShow = element.parentElement; //加入父層div狀態
  parentDivShow.classList.add('active');

  const pages = document.querySelectorAll('.text');//移除此層div狀態
  pages.forEach (page => {
    page.classList.remove('active');
  });

  const pageShow = document.getElementById(pageId);//加入此層div狀態
  pageShow.classList.add('active');

  const imgNone = document.querySelectorAll('.introcontent');// 檢查當前的 img 是否有 class 'active'
  imgNone.forEach(img => {
    if (img.classList.contains('active')) {
      console.log("符合條件，不改變狀態");
    } else {
      img.classList.add('None'); // 對沒有 active 的 introcontent 添加 None 類別
    }
  });
  
  console.log("this is changing "+ pageId);//檢查現在點擊哪一個
}

function back(){//移除所有div的狀態
  const pages = document.querySelectorAll('.text');
  pages.forEach (page => {
    page.classList.remove('active');
  });
  // console.log("this is back1");
  const imgShow = document.querySelectorAll('.introcontent')
  imgShow.forEach (img => {
    img.classList.remove('None');
  });
  const back = document.querySelectorAll('.introcontent')
  back.forEach (img => {
    img.classList.remove('active');
  });
  window.scrollTo({
    top: 0, // 滾動到頁面的最上方
    behavior: 'smooth' // 平滑滾動效果
  });
  // console.log("this is back2");
}