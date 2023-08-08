const btnMenu = document.querySelector(".burguer");
const navBar = document.querySelector(".navBar");
var logicNavBar = false;

btnMenu.addEventListener("click",()=>{
    if(logicNavBar) {
        navBar.style.display = "none";
        logicNavBar = false;
    }
    else {
        navBar.style.display = "block";
        logicNavBar = true;
    }
})