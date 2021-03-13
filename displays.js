//Selectores//
let lolDisplay = document.querySelector('.teams-content-main');
let tftDisplay = document.querySelector('.teams-content-main-tft')
let apexDisplay = document.querySelector('.teams-content-main-apex')
let fifaDisplay = document.querySelector('.teams-content-main-fifa')
//Codigo//

function SetlolDisplay(){
    if (lolDisplay.style.display === 'none'){
        lolDisplay.style.display = 'flex';
        tftDisplay.style.display = 'none';
        fifaDisplay.style.display = 'none';
        apexDisplay.style.display = 'none';
    } else {
        lolDisplay.style.display = 'none';
    }
};

function SetTftDisplay(){
    if (tftDisplay.style.display === 'none'){
        tftDisplay.style.display = 'flex';
        lolDisplay.style.display = 'none';
        fifaDisplay.style.display = 'none';
        apexDisplay.style.display = 'none';
    } else {
        tftDisplay.style.display = 'none';
    }
};

function SetApexDisplay(){
    if (apexDisplay.style.display === 'none'){
        apexDisplay.style.display = 'flex';
        lolDisplay.style.display = 'none';
        fifaDisplay.style.display = 'none';
        tftDisplay.style.display = 'none';
    } else {
        apexDisplay.style.display = 'none';
    }
};

function SetFifaDisplay(){
    if (fifaDisplay.style.display === 'none'){
        fifaDisplay.style.display = 'flex';
        lolDisplay.style.display = 'none';
        apexDisplay.style.display = 'none';
        tftDisplay.style.display = 'none';
    } else {
        fifaDisplay.style.display = 'none';
    }
};