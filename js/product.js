document.addEventListener("DOMContentLoaded", () => {
    
function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");

}

    const productInfo = document.getElementById("productinfo");
    const productId = getProductIdFromUrl();

    if (!productId) {
            productInfo.innerHTML = "<p>Product not found.</p>";
            return;
    }
    
    const API_URL = "https://v2.api.noroff.dev/square-eyes/" + productId;

   async function fetchProduct() {
        try {
            const response = await fetch(API_URL);
            const result = await response.json();
            const product = result.data;

        if (!product) {
                productInfo.innerHTML = "<p>Product not found in api.</p>";
                return;
            }

            productInfo.innerHTML = `
                <div class="product-info">
                    <a href="${product.image.url}" target="_blank">
                        <img src="${product.image.url}" alt="${product.image.alt}">
                    </a>
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p>$${product.price}</p>
                    <button id="add-to-cart-btn" class="cta">Add to Cart</button>
                </div>
            `;

            document.getElementById("add-to-cart-btn").addEventListener("click", () => {
                const cart = JSON.parse(localStorage.getItem("cartbox")) || [];
                cart.push({
                    title: product.title,
                });
                localStorage.setItem("cart", JSON.stringify(cart));
                alert(`${product.title} added to cart!`);
            });
        } catch (error) {
            productInfo.innerHTML = "<p>Failed to load product.</p>";
            console.error("Fetch error:", error);
        }
    }

    console.log("API_URL", API_URL);

    fetchProduct();
});
