const API_URL = "https://v2.api.noroff.dev/square-eyes/"


let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);

const cartContainer = document.getElementById("cart-container");


function checkoutDisplay(){

    let totalPrice = 0;
    let productsFetched = 0;

    cart.forEach(item => {
        fetch(API_URL + item)
        .then(response => { response.json()
            .then(resp => {
                const product = resp.data;
                totalPrice += product.price;
                cartContainer.innerHTML += `
                    <div>
                        <img src="${product.image.url}" alt="${product.image.alt}">
                            <h2>${product.title}</h2>
                            <p>$${product.price}</p>
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
checkoutDisplay();
