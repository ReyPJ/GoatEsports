let carts = document.querySelectorAll('.pBtn');

let products = [
    {
        name: 'Goat Jersey',
        tag: 'Goat Jersey',
        price: '₡14.900',
        inCart: 0
    },

];

for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers();
    });
};


function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cartNav span').textContent = productNumbers
    }
}

function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cartNav span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cartNav span').textContent = 1;
    }
}


onLoadCartNumbers();