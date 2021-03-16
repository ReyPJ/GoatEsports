let carts = document.querySelectorAll('.pBtn');

let products = [
    {
        name: 'Goat Jersey',
        tag: 'GoatJersey',
        price: 14900,
        inCart: 0
    },

];

for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
};


function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cartNav span').textContent = productNumbers
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cartNav span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cartNav span').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            };
        }
        cartItems[product.tag].inCart += 1;
    } else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }   
    };
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


function totalCost(product){
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    cartCost = Number(cartCost);
    
    if(cartCost != null){
        localStorage.setItem("totalCost", cartCost + product.price)
    } else {
        localStorage.setItem("totalCost", product.price);
    }
} 


onLoadCartNumbers();