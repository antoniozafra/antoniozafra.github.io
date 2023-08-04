const year = new Date().getFullYear();
const icon = document.querySelector(".icon");
const dropdownMenu = document.querySelector(".dropdown-menu");
let text = "Bienvenidos!, Soy Antonio Jesus Zafra, desarrollador web Full Stack";
const title = document.querySelector(".sobre-mi-text");
let index = 1;

icon.addEventListener("click", function() {
    dropdownMenu.classList.toggle("--show");
    document.querySelector("#sobre-mi-container").style.color = "red";
    
});

document.querySelector("#footer-text").innerHTML =  `Desarrollado por Antonio Zafra &copy; ${year}`;

function itemMenuClick(){
    dropdownMenu.classList.toggle("--show");
}



