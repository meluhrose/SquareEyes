

document.addEventListener("DOMContentLoaded", () => {
function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");

}

    const productInfo = document.getElementById("productpage");
    const productId = getProductIdFromUrl();

    if (!productId) {
        productInfo.innerHTML = "<p>Product not found.</p>";
        return;
    }

    const API_URL = "https://v2.api.noroff.dev/square-eyes/"+productId;

   async function fetchProduct() {
        try {
            const response = await fetch(API_URL);
            const result = await response.json();
            const product = result.data;

            if (!product) {
                productInfo.innerHTML = "<p>Product not found in API.</p>";
                return;
            }

            productInfo.innerHTML = `
                <div class="product">
                    <a href="${product.image.url}" target="_blank">
                        <img src="${product.image.url}" alt="${product.image.alt}" class="product-image" />
                    </a>
                    <h2 class="product-title">${product.title}</h2>
                    <p class="product-description">${product.description}</p>
                    <p class="product-price">$${product.price}</p>
                    <button id="add-to-cart-btn">Add to Cart</button>
                </div>
            `;

            document.getElementById("add-to-cart-btn").addEventListener("click", () => {
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                cart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image.url
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