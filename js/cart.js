var removeCartItemButtons = document.getElementsByClassName("remove-btn")
 console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener("click", (event) => {
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
        })
}

