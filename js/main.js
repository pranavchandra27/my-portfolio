// initialize AOS Library
AOS.init();

const hamburger = document.querySelector('.hamburger');
const sideNav = document.querySelector('.nav-main');
const introContent = document.querySelector('.intro-content');

//Set Initial State For Menu
let showMenu = false;

//Click Listener for Hamburger icon
hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
  hamburger.classList.toggle('change');
  if (!showMenu) {
    sideNav.classList.add('show');
    introContent.classList.add('margin_right');

    //Set State
    showMenu = true;
  } else {
    sideNav.classList.remove('show');
    introContent.classList.remove('margin_right');
    document.body.style.backgroundColor = 'white';

    showMenu = false;
  }
}
