// menu菜单栏
let menuBotton = document.querySelector('.menu');
let menuBox = document.querySelector('.menu-box');
let closeBotton = document.querySelector('.close');
menuBotton.addEventListener('click', function() {
    menuBox.style.display = 'block';
})
closeBotton.addEventListener('click',function(){
    menuBox.style.display = 'none';
})