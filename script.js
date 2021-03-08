//Selectores.
let sideNav = document.querySelector('.side-nav');
let toggler = document.querySelector('.toggler');
let closeBtn = document.querySelector('.close-btn');
let lolPopup = document.getElementById('popup-1')
let tftPopup = document.getElementById('popup-tft')
let apexPopup = document.getElementById('popup-apex')
let fifaPopup = document.getElementById('popup-fifa')
//Menu Scripts
toggler.addEventListener('click', ()=>{
    sideNav.style.left = '0';
});

closeBtn.addEventListener('click', ()=>{
    sideNav.style.left = '-100%';
});

//PopUp Scripts

function tooglePopup1(){
    lolPopup.classList.toggle('active');
};

function tooglePopup2(){
    tftPopup.classList.toggle('active');
};

function tooglePopup3(){
    apexPopup.classList.toggle('active');
};

function tooglePopup4(){
    fifaPopup.classList.toggle('active');
};