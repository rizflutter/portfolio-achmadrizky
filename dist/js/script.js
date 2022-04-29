// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');

    const fixedNav = header.offsetTop;

    const toTop = document.querySelector('#to-top');

    // if scroll down
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        // back to top button
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        // if scroll return to first state
        header.classList.remove('navbar-fixed');

        // back to top button
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');

const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// if click any area for close hamburger
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

// dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// move position toggle mode
 if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}