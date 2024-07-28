// navbar.js
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
