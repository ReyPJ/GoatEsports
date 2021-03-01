//Selectores.
let sideNav = document.querySelector('.side-nav');
let toggler = document.querySelector('.toggler');
let closeBtn = document.querySelector('.close-btn');

toggler.addEventListener('click', ()=>{
    sideNav.style.left = '0';
});

closeBtn.addEventListener('click', ()=>{
    sideNav.style.left = '-100%';
});