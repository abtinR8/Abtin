const navMenu = document.getElementById("navBar-menu");
const navToggle = document.getElementById("nav-toggle");
const closeIcon = document.getElementById("x-icon");
const grayDispaly = document.getElementById("gray-dispaly");
const welcomeText = document.getElementById("welcome-text");
const navbar = document.querySelector(".nav");
const navContainer = document.querySelector(".nav-container");
const welcomeTextEllips = document.querySelector(".nav-menu-ellips");
const hero = document.querySelector(".hero");
const honeycomb = document.querySelector(".honeycomb");
const imgChar = document.querySelector(".img-character");
const shape1 = document.querySelector(".Shape1");
const shape2 = document.querySelector(".Shape2");
const heroText = document.querySelector(".text-container");
const honeyDelay = document.querySelector(".honeyDelay");

function showMenu() {
  navMenu.classList.toggle("showMenu");
  grayDispaly.classList.toggle("gray-dispaly");
}

function initialLoading() {
  // changeWelcomeText
  if (window.innerWidth >= 992) {
    welcomeText.innerText = "Welcome to my page";
  } else {
    welcomeText.innerText = `Welcome to my page \n « Abtin »`;
  }

  // moveElementInHero
  honeycomb.style.cssText = `opacity: 0.8;transform: translate(50%, -46%);`;
  imgChar.style.cssText = `opacity: 1;transform: translate(50%, -50%);`;
  if (window.innerWidth <= 992) {
    shape1.style.cssText = `opacity: 1;transform: translate(-110%, -150%);`;
    shape2.style.cssText = ` opacity: 1; transform: translate(200%, 150%);`;
  } else {
    shape1.style.cssText = `opacity: 1;transform: translate(-200%, -300%);`;
    shape2.style.cssText = ` opacity: 1; transform: translate(400%, 330%);`;
  }
  heroText.style.cssText = ` opacity: 1;transform: unset;`;
}

function setNavbar() {
  let navScroll = window.scrollY;
  // console.log(navScroll);

  if (navScroll >= 90) {
    navbar.classList.add("nav-fix");
    navContainer.classList.add("nav-container-fix");
    welcomeTextEllips.style.padding = "0.5rem 1rem";
    navbar.style.zIndex = "1030";
  } else {
    navbar.classList.remove("nav-fix");
    navContainer.classList.remove("nav-container-fix");
    welcomeTextEllips.style.padding = "1rem";
    if (window.innerWidth > 992) navbar.style.zIndex = "unset";
  }
}

function moveShapes(e) {
  let mousePosition = e.clientX;
  let middleOfPage = window.innerWidth / 2;
  mousePosition = mousePosition / middleOfPage - 1;
  mousePosition *= 10;
  imgChar.style.transform = `translate(calc(50% + ${
    mousePosition / 4
  }%), -50%)`;
  if (window.innerWidth <= 992) {
    shape1.style.transform = `translate(calc(-110% + ${
      mousePosition * -5
    }%), -150%)`;
    shape2.style.transform = `translate(calc(200% + ${
      mousePosition * -4
    }%), 150%)`;
  } else {
    shape1.style.transform = `translate(calc(-200% + ${
      mousePosition * -8
    }%), -300%)`;
    shape2.style.transform = `translate(calc(400% + ${
      mousePosition * -4
    }%), 330%)`;
  }
}

navToggle.addEventListener("click", showMenu);
closeIcon.addEventListener("click", showMenu);
grayDispaly.addEventListener("click", showMenu);
window.addEventListener("DOMContentLoaded", initialLoading);
window.addEventListener("resize", initialLoading);
window.addEventListener("scroll", setNavbar);
hero.addEventListener("mousemove", moveShapes);

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)