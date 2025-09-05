const API_URL = "https://v2.api.noroff.dev/square-eyes/"


let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);

const cartContainer = document.getElementById("cart-container");

function updateCartDisplay(){
    cartContainer.innerHTML = "";
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is currently empty.</p><p>Start adding products to your cart!</p>";
        return;
    }

    let totalPrice = 0;
    let productsFetched = 0;

    cart.forEach(item => {
        fetch(API_URL + item)
        .then(response => { response.json()
            .then(Resp => {
                const product = Resp.data;
                totalPrice += product.price;
                cartContainer.innerHTML += `
                    <div>
                        <img src="${product.image.url}" alt="${product.image.alt}">
                            <h2>${product.title}</h2>
                            <p>$${product.price}</p>
                            <button id="remove-btn" class="cta">Remove</button>
                    </div>
                `;

                productsFetched ++;
                if (productsFetched === cart.length) {

                    const totalDiv = document.createElement("div");
                    totalDiv.innerHTML = `<p>Total Price: $${totalPrice.toFixed(2)}</p>`;
                    cartContainer.appendChild(totalDiv);
                }
            });

        })
        
    });
}
updateCartDisplay();


cartContainer.addEventListener("click", function(event) {
    if (event.target.id === "remove-btn") {
        const cartItemElement = event.target.closest("div");
        if (cartItemElement) {
            cartItemElement.remove();
            
            

const productTitle = cartItemElement.querySelector("h2").textContent;

const productIndex = cart.findIndex(itemId => {
return true;
});
if (productIndex !== -1) {
    cart.splice(productIndex, 1);
    cartItemElement.remove();
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
}
}
}
});
