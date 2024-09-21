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
  // console.log(navScroll);
  
  if (navScroll >= 90) {
    navbar.classList.add("nav-fix");
    navContainer.classList.add("nav-container-fix");
    welcomeTextEllips.style.padding = "0.5rem 1rem"
    navbar.style.zIndex = "1030"
  } else {
    navbar.classList.remove("nav-fix");
    navContainer.classList.remove("nav-container-fix");
    welcomeTextEllips.style.padding = "1rem"
    if(window.innerWidth > 992) navbar.style.zIndex = "unset";
  }
}

navToggle.addEventListener("click", showMenu);
closeIcon.addEventListener("click", showMenu);
grayDispaly.addEventListener("click",showMenu);
window.addEventListener("DOMContentLoaded", changeWelcomeText);
window.addEventListener("resize", changeWelcomeText);
window.addEventListener("scroll", setNavbar);


// // Function to check if an element is in the viewport
// function isElementInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//    rect.top >= 0 &&
//    rect.left >= 0 &&
//    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
//  }
//  // Function to lazily load content
//  function lazyLoadContent() {
//   const lazyContentElements = document.querySelectorAll(".lazy-content");
//   lazyContentElements.forEach((element) => {
//    if (isElementInViewport(element)) {
//     // Add your logic to load the content for the element here
//     element.classList.add("loaded");
//    }
//   });
//  }
//  // Attach the lazyLoadContent function to the scroll event
//  window.addEventListener("scroll", lazyLoadContent);
//  // Call the function initially to load the visible content on page load
//  lazyLoadContent();