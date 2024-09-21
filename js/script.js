const navMenu = document.getElementById("navBar-menu");
const navToggle = document.getElementById("nav-toggle");
const closeIcon = document.getElementById("x-icon");
const grayDispaly = document.getElementById("gray-dispaly");
const welcomeText = document.getElementById("welcome-text");
const navbar = document.querySelector(".nav");
const navContainer = document.querySelector(".nav-container");
const welcomeTextEllips = document.querySelector(".nav-menu-ellips")

function showMenu() {
  navMenu.classList.toggle("showMenu");
  grayDispaly.classList.toggle("gray-dispaly");
}

function changeWelcomeText() {
  if (window.innerWidth >= 992) {
    welcomeText.innerText = "Welcome to my page";
  } else {
    welcomeText.innerText = `Welcome to my page \n « Abtin »`;
  }
}

function setNavbar() {
  let navScroll = window.scrollY;
  if (navScroll >= 90) {
    navbar.classList.add("nav-fix");
    navContainer.classList.add("nav-container-fix");
    welcomeTextEllips.style.padding = "0.5rem 1rem"
  } else {
    navbar.classList.remove("nav-fix");
    navContainer.classList.remove("nav-container-fix");
    welcomeTextEllips.style.padding = "1rem"

  }
}

navToggle.addEventListener("click", showMenu);
closeIcon.addEventListener("click", showMenu);
grayDispaly.addEventListener("click",showMenu);
window.addEventListener("DOMContentLoaded", changeWelcomeText);
window.addEventListener("resize", changeWelcomeText);
window.addEventListener("scroll", setNavbar);
