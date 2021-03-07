//Selectores.
let sideNav = document.querySelector('.side-nav');
let toggler = document.querySelector('.toggler');
let closeBtn = document.querySelector('.close-btn');
let lolpopup = document.getElementById('popup-1')
let tftpopup = document.getElementById('popup-tft')
let apexpopup = document.getElementById('popup-apex')
//Menu Scripts
toggler.addEventListener('click', ()=>{
    sideNav.style.left = '0';
});

closeBtn.addEventListener('click', ()=>{
    sideNav.style.left = '-100%';
});

//PopUp Scripts

function tooglePopup1(){
    lolpopup.classList.toggle('active');
};

function tooglePopup2(){
    tftpopup.classList.toggle('active');
};

function tooglePopup3(){
    apexpopup.classList.toggle('active');
};