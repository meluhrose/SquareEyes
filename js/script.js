const API_URL = "https://v2.api.noroff.dev/square-eyes";

document.addEventListener("DOMContentLoaded", () => {
    const dataContainer = document.getElementById("list-container");

    async function fetchData() {
        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("HTTP error! status: ${response.status}");
            }

            const result = await response.json();
            const data = result.data;
            

            data.forEach(product => {
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("item");

                const img = document.createElement("img");
                img.src = product.image.url;

                const title = document.createElement("h3");
                title.textContent = product.title;

                const price = document.createElement("h3");
                price.textContent = product.price;

                const alt = document.createElement("h3");
                alt.textContent = product.image.alt;

                const href = document.createElement("a");
                href.href = "../products/product.html"
                href.textContent = "View Product";

                dataContainer.appendChild(itemDiv);
                itemDiv.appendChild(img);
                itemDiv.appendChild(title);
                itemDiv.appendChild(price);
                itemDiv.appendChild(alt);
                itemDiv.appendChild(href);
            });

        } catch (error) {
            console.error("Error fetching data:", error);
            dataContainer.textContent = "Failed to load movies. Please try again later.";
        }
    }

    fetchData();
}); 

var genres = [

    {name: "Action"},
    {name: "Family"},
    {name: "Comedy"},
    {name: "Drama"},
];

var genreContainer = document.getElementById("genre-container");

for (var i = 0; i < genres.length; i++) {
    var genreDiv = document.createElement("div");
    genreDiv.classList.add("genre");

    var genreName = document.createElement("button");
    genreName.textContent = genres[i].name;
    genreName.onclick = async () => {
        await filterVideosByGenre(this.textContent)
    }

    genreDiv.appendChild(genreName);
    genreContainer.appendChild(genreDiv);
}



async function filterVideosByGenre(genre){
    var response = await fetch(API_URL);

    var result = await response.json();
    var data = result.data;

    var dataContainer = document.getElementById("list-container");

    var containerDiv = document.createElement("div");

    data.forEach(product => {

        if (product.genre !== genre){
            return ;
        }
        
        var itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        var img = document.createElement("img");
        img.src = product.image.url;

        var title = document.createElement("h3");
        title.textContent = product.title;

        var price = document.createElement("h3");
        price.textContent = product.price;

        var alt = document.createElement("h3");
        alt.textContent = product.image.alt;

        var href = document.createElement("a");
        href.href = "../products/product.html"
        href.textContent = "View Product";

        itemDiv.appendChild(img);
        itemDiv.appendChild(title);
        itemDiv.appendChild(price);
        itemDiv.appendChild(alt);
        itemDiv.appendChild(href);

        containerDiv.appendChild(itemDiv)
    });

    dataContainer.appendChild(containerDiv);

    console.log("test");
}
