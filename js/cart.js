var removeCartItemButtons = document.getElementsByClassName("remove-btn")
 console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener("click", (event) => {
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
              })

}


function addItemtoCart(title, price, imageSrc) {
    var cartItem = document.createElement("div")
    cartItem.classList.add("cart-item")
    var cartItems = document.getElementsByClassName("cart-item")
    var cartContents = ' <div class="cart-item">
                <div class="cart-text">
                    <img src="${imageSrc}">
                    <p class="movie-title">${title}</p>
                    <p class="price">${price}</p>
                    <button class="cta remove-btn">Remove</button>
                </div>'
                cartItem.innerHTML = cartContent
                cartItem.append

}