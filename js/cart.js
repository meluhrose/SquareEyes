const API_URL = "https://v2.api.noroff.dev/square-eyes/"


let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);

const cartContainer = document.getElementById("cart-container");

async function updateCartDisplay(){
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is currently empty.</p><p>Start adding products to your cart!</p><button class=\"cta\" onclick=\"window.location.href='videos.html'\">Browse Videos</button>";
        return;
    }

    let totalPrice = 0;
    let cartHTML = "";

    for (const itemId of cart) {
        try {
            const response = await fetch(API_URL + itemId);
            const result = await response.json();
            const product = result.data;

            totalPrice += product.price;

            cartHTML += `
                    <div class="cart-item cart-text" data-product-id="${itemId}">
                        <img src="${product.image.url}" alt="${product.image.alt}">
                        <p>${product.title}</p>
                        <p>$${product.price}</p>
                        <button class="remove-btn cta">Remove</button>
                    </div>
                `;
        } catch (error) {
            console.error(`Error fetching ${itemId}`, error);
        }
    }

    cartContainer.innerHTML = cartHTML;

                    const totalDiv = document.createElement("div");
                    totalDiv.innerHTML = 
                    `<p class="subtotal">Total Price: $${totalPrice.toFixed(2)}</p><a href="checkout.html" class="cta">Proceed to Checkout</a>`;
                    cartContainer.appendChild(totalDiv);
                }
                updateCartDisplay();


cartContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-btn")) {
        const cartItemElement = event.target.closest(".cart-item");
        if (!cartItemElement) return;
        const productId = cartItemElement.getAttribute("data-product-id");
        const productIndex = cart.indexOf(productId);
        if (productIndex !== -1) {
            cart.splice(productIndex, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
        }
    }
});
