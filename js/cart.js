//const API_URL = "https://v2.api.noroff.dev/square-eyes/";

let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);
const cartDisplayElement = document.getElementById("cart-container");


function updateCartDisplay() {
    cartDisplayElement.innerHTML = " ";

    if (cart.length === 0) {
    cartDisplayElement.innerHTML = 
    '<p>Your cart is currently empty.</p><p>Start adding products to your cart!</p>';
    return;
}
    //const response = await fetch(API_URL + productId);
    //const result = await response.json();
    //const item = result.data;

    cartDisplayElement.innerHTML = `
                <div>
                <img src="assets/Square_Eyes_Cover8.jpeg">
                    <p class="movie-title">Toy Story</p>
                    <p class="price">Total: 99,99</p>
                    <button class="cta remove-btn">Remove</button></div>
            `;

        cartDisplayElement.appendChild(listItem);
});
}