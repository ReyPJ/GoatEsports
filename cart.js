let carts = document.querySelectorAll('.pBtn');

let products = [
    {
        name: 'Goat Jersey',
        tag: 'Jer1s',
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


function displayCart(){
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML += `
            <div class="product">
                <i class="fas fa-times-circle" id="remove"></i>
                <img src="img/${item.tag}.png" width="30%">
                <span>${item.name}</span>
            </div>
            <div class="price">₡${item.price}</div>
            <div class="quantity">
                <i class="fas fa-arrow-circle-left" id="decrase"></i>
                <span>${item.inCart}</span>
                <i class="fas fa-arrow-circle-right" id="incrase"></i>
            </div>
            <div class="total">
                ₡${item.inCart * item.price}
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Total en el carrito
                </h4>
                <h4 class="basketTotal">
                    ₡${cartCost}
                </h4>
            </div>
        `;
    }

}


onLoadCartNumbers();
displayCart();