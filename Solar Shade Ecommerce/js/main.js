// Nav 

const menuBars = document.querySelector(".menu-bars")
const menuItems = document.querySelector(".nav-item");

menuBars.addEventListener("click", mobileMenu)

function mobileMenu() {
    menuBars.classList.toggle("active")
    menuItems.classList.toggle("active")
}