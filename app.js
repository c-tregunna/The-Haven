const overlayLogo = document.querySelector('.overlay-logo');
const overlay = document.querySelector('.enter-overlay');
const enterBtn = document.querySelector('.enter');
const heading = document.querySelector('.show-list');
const list = document.querySelector('.list');

//------- Hide enter overlay ------\\
enterBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    setTimeout(() => { // will slow down the hiding of the logo and button on home page
    enterBtn.style.display = 'none';
    overlayLogo.style.display = 'none';
    }, 900);
});

let today = new Date();
let year = today.getFullYear();
let currentYear = document.querySelector('#date');
currentYear.innerHTML = year;

//------- Mobile navigation drop down ------\\
// heading.addEventListener('click', () => {
//     list.classList.toggle('hidden');
// });

// window.onscroll = () => {
//     const nav = document.querySelector('#navbar');
//     if(this.scrollY <= 10) nav.classList.remove('scroll'); else nav.classList.add('scroll');
//   };
