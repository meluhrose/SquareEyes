const API_URL = "https://v2.api.noroff.dev/square-eyes/"


let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);

const cartContainer = document.getElementById("cart-container");

function updateCartDisplay(){
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is currently empty.</p><p>Start adding products to your cart!</p>";
        return;
    }
    

    cart.forEach(item => {
        var product = fetch(API_URL + item).then(Response => {

            Response.json().then(Resp => {
                var product = Resp.data;
                cartContainer.innerHTML += `
                    <div>
                        <img src="${product.image.url}" alt="${product.image.alt}">
                            <h2>${product.title}</h2>
                            <p>$${product.price}</p>
                            <button id="remove-btn" class="cta">Remove</button>
                    </div>
                `;
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
}
}
}
});
