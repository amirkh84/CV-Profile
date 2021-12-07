const button = document.querySelector('.menu');
const menu = document.querySelector('.left-bar')

button.addEventListener("click",function(){
    menu.classList.toggle('show');
    button.classList.toggle('rotate')
});