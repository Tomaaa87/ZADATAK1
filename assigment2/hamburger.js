document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.hamburger-menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
});