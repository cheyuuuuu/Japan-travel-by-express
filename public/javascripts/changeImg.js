function changeImg(){
  let topBackground = document.querySelector("section.background-img");
  topBackground.style.backgroundImage = 'url("/images/日本櫻花.jpg")';
  setInterval(()=>{
    if (
        topBackground.style.backgroundImage == 'url("/images/日本櫻花.jpg")'
    ) {
        topBackground.style.backgroundImage = 'url("/images/京都古城.jpg")';
    }else if(
        topBackground.style.backgroundImage == 'url("/images/京都古城.jpg")'
    ){
        topBackground.style.backgroundImage = 'url("/images/大阪街頭.jpg")';
    }else{
        topBackground.style.backgroundImage = 'url("/images/日本櫻花.jpg")';
    }
}, 3000);
}