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
                            <p>${product.title}</p>
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

function validateForm() {
  sessionStorage.setItem("cart", JSON.stringify(cart));
  let name = document.forms["myForm"]["fname"].value;
  if (name == "" || name == null) {
    alert("Name must be filled out");
    return false;
    } 

    let ccnum = document.forms["myForm"]["ccnum"].value;
    if (ccnum.length < 16) {
      alert("Credit Card Number must be at least 16 digits");
      return false;
    }
    else {
      let ccPattern = /^\d{16}$/;
      if (!ccPattern.test(ccnum.replace(/\s+/g, ''))) {
          alert("Credit Card Number must be 16 digits");
          return false;
      }
    }

    let expdate = document.forms["myForm"]["expdate"].value;
    if (expdate == "" || expdate == null) {
      alert("Expiration Date must be filled out");
      return false;
    } else {
      let expPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (!expPattern.test(expdate)) {
          alert("Expiration Date must be in MM/YY format");
          return false;
      }
    }

    let sc = document.forms["myForm"]["sc"].value;
    if (sc.length < 3) {
      alert("Security Code must be at least 3 digits");
      return false;
    }

sessionStorage.removeItem("cart");
localStorage.removeItem("cart");
cart = [];
return true;
} 
