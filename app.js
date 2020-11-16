const overlayLogo = document.querySelector('.overlay-logo');
const overlay = document.querySelector('.enter-overlay');
const enterBtn = document.querySelector('.enter');
const heading = document.querySelector('.show-list');
const list = document.querySelector('.list');
const contentSpan = document.querySelectorAll('.section_container span');
const sectionContent = document.querySelector('.section_content');

//------- Hide enter overlay ------\\
enterBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    setTimeout(() => { // will slow down the hiding of the logo and button on home page
    enterBtn.style.display = 'none';
    overlayLogo.style.display = 'none';
    }, 900);
});

//------ Copywrite year -----\\
let today = new Date();
let year = today.getFullYear();
let currentYear = document.querySelector('#date');
currentYear.innerHTML = year;

