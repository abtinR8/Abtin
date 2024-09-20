const navMenu = document.getElementById("navBar-menu");
const navToggle = document.getElementById("nav-toggle");
const closeIcon = document.getElementById("x-icon");
const grayDispaly = document.getElementById("gray-dispaly");
const welcomeText = document.getElementById("welcome-text");

function showMenu() {
  navMenu.classList.toggle("showMenu");
  grayDispaly.classList.toggle("gray-dispaly");
}

function changeWelcomeText() {
  if (window.innerWidth >= 992) {
    welcomeText.innerText = "Welcome to my page";
  }else{
    const br = document.createElement("br")
    welcomeText.innerText = `Welcome to my page \n « Abtin »`
  }
}

navToggle.addEventListener("click", showMenu);
closeIcon.addEventListener("click", showMenu);
window.addEventListener("DOMContentLoaded", changeWelcomeText);
window.addEventListener("resize", changeWelcomeText);
