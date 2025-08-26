const API_URL = "https://v2.api.noroff.dev/square-eyes/"

let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);

const cartContainer = document.getElementById("cart-container");

function updateCartDisplay(id) {
        cartContainer.innerHTML = "";
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is currently empty.</p><p>Start adding products to your cart!</p>";
        return;
    }


    cart.forEach(item => {
        cartContainer.innerHTML += `
            <div>
                <img src="${item.image.url}" alt="${item.image.alt}">
                    <h2>${item.title}</h2>
                    <p>$${item.price}</p>
                    <button class="cta remove-btn">Remove</button>
            </div>
        `;
    });
    updateCartDisplay();
}