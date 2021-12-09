const openMenu  = document.querySelector(".fa-bars");
const closeMenu  = document.querySelector(".fa-times");
const hamburger  = document.querySelector(".hamburger-menu");

openMenu.addEventListener('click', 
function ()  {
        hamburger.classList.add('active');   
});

closeMenu.addEventListener('click', 
function () {  
        hamburger.classList.remove('active');  
});