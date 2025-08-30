const API_URL = "https://v2.api.noroff.dev/square-eyes/"

document.addEventListener("DOMContentLoaded", async () => {
    await fetchProduct();
    addItemToCartButton();
});

function getProductIdFromUrl() {
      const params = new URLSearchParams(window.location.search);
      return params.get("id");
}

async function fetchProduct() {
        try {
            const productInfo = document.getElementById("productinfo");
            const productId = getProductIdFromUrl();

            if (!productId) {
              productInfo.innerHTML = "<p>Product not found.</p>";
              return;
            }

            const response = await fetch(API_URL + productId);
            const result = await response.json();
            const product = result.data;


            productInfo.innerHTML = `
                <div>
                    <a href="${product.image.url}" target="_blank">
                        <img src="${product.image.url}" alt="${product.image.alt}">
                    </a>
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p>$${product.price}</p>
                    <button id="add-to-cart-btn" class="cta">Add to Cart</button>
                </div>
            `;
        } 
        catch (error) {
            productInfo.innerHTML = "<p>Failed to load product.</p>";
            console.error("Fetch error:", error);
        }
    }

function addItemToCartButton(){ 
  document.getElementById("add-to-cart-btn").addEventListener("click", () => {
    alert("Item added to cart!");

  var productId = getProductIdFromUrl();

  if (productId == "" || productId === null){
    // Handle this
    return;
  }

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.some((id) => id === productId)){
    button.textContent = "Clicked!"
    console.log("item already exists in cart")
    // Handle this
    return;
  }

  cart.push(productId);

  localStorage.setItem('cart', JSON.stringify(cart));
})
}


