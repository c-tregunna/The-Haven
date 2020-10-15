const overlayLogo = document.querySelector('.overlay-logo');
const overlay = document.querySelector('.enter-overlay');
const enterBtn = document.querySelector('.enter');
// const heading = document.querySelector('.show-list');
// const list = document.querySelector('.list');

//------- Hide enter overlay ------\\
enterBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    enterBtn.style.display = 'none';
    overlayLogo.style.display = 'none';
});

//------- Mobile navigation drop down ------\\
// heading.addEventListener('click', () => {
// 	list.classList.toggle('hidden')
// });
