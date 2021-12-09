const openMenue  = document.querySelector(".fa-bars");
const closeMenue  = document.querySelector(".fa-times");
const hamburger  = document.querySelector(".hamburger-menu");
let menuActive = false; 
openMenue.addEventListener('click', 
function ()  {
    if(!menuActive){
        hamburger.classList.add('active');
        menuActive=true;
    }   
});

closeMenue.addEventListener('click', 
function () {
    if(menuActive){
        hamburger.classList.remove('active');
        menuActive=false;
    } 
    
});