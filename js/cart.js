const API_URL = "https://v2.api.noroff.dev/square-eyes/";

let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);
const cartDisplayElement = document.getElementById("cart-container");


async function updateCartDisplay() {
    cartDisplayElement.innerHTML = " ";

    if (cart.length === 0) {
    cartDisplayElement.innerHTML = 
    '<p>Your cart is currently empty.</p><p>Start adding products to your cart!</p>';
    return;
}
    //const response = await fetch(API_URL + productId);
    const result = await response.json();
   const item = result.data;

    cartDisplayElement.innerHTML = `
                <div>
                <img src="${product.image.url}">
                    <p class="movie-title">${product.title}</p>
                    <p class="price">Total:$${product.price}</p>
                    <button class="cta remove-btn">Remove</button></div>
            `;

        cartDisplayElement.appendChild(listItem);
};
