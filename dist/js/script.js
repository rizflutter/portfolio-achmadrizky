// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');

    const fixedNav = header.offsetTop;

    // if scroll down
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        // if scroll return to first state
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');

const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});