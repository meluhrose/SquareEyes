
const container = document.querySelector("#container")
const API_URL = "https://v2.api.noroff.dev/square-eyes" 

async function fetchData() {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()  
        const products = data.data

        products.forEach(product => {
            const card = document.createElement("div")
            const image = document.createElement("img")
            const content = document.createElement("div")
            const title = document.createElement("h2")
            const price = document.createElement("p")

            image.src = product.image.url
            image.alt = product.image.alt
            title.textContent = product.title
            price.textContent = product.price

            content.appendChild(title)
            content.appendChild(price)
            card.appendChild(image)
            card.appendChild(content) 

            container.appendChild(card)
        })

    } catch (error) {
        console.error("Error fetching data", error)    
    }
}       

fetchData()