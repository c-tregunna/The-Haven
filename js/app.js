const overlayLogo = document.querySelector('.overlay-logo');
const overlay = document.querySelector('.enter-overlay');
const enterBtn = document.querySelector('.enter');
// const heading = document.querySelector('.show-list');
// const list = document.querySelector('.list');
const contentSpan = document.querySelectorAll('.section_container span');
const sectionContent = document.querySelector('.section_content');

const sessionHideOverlay = sessionStorage.getItem('enter');



//------- Hide enter overlay ------\\
function hideOverlay() {
if(enterBtn) {
enterBtn.addEventListener('click', e => {
    overlay.classList.add('hidden');
    setTimeout(() => { // will slow down the hiding of the logo and button on home page
    enterBtn.style.display = 'none';
    overlayLogo.style.display = 'none';
    }, 900);
    setTimeout(() => {
    location.href = "home.html";
    },1050);
    })
    }
};
hideOverlay();


//------ Session storage to keep overlay hidden when in the site -----\\
//I see what you're talking about - I think that you could do it through localStorage... basically write some code into localStorage after the Enter the Haven is clicked and when index.html loads only show the overlay if that localStorage variable is not present?  But that also means the user would only ever see it once ... actually you could "avoid" that by using session storage instead of local storage so they saw it each time
//Yeah the basic gist in the office hours will help you but you will have to run a conditional that checks if the local storage value is set and hides the overlay
sessionStorage.setItem('occupation', 'Web Developer');

console.log(sessionStorage.getItem('occupation'));


//------ Copywrite year -----\\
let today = new Date();
let year = today.getFullYear();
let currentYear = document.querySelector('#date');
currentYear.innerHTML = year;





