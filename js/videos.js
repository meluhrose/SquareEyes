var genres = [

    {name: "All"},
    {name: "Action"},
    {name: "Kids"},
    {name: "Horror"},
    {name: "Comedy"},
    {name: "Drama"},
];

var genreContainer = document.getElementById("genre-container");


for (let i = 0; i < genres.length; i++) {
    var genreDiv = document.createElement("div");
    genreDiv.classList.add("genre");

    var genreName = document.createElement("button");
    genreName.classList.add("cta");
    genreName.textContent = genres[i].name;
    genreName.onclick = async function() {
        await filterVideosByGenre(this.textContent);
    };

    genreDiv.appendChild(genreName);
    genreContainer.appendChild(genreDiv);
}

async function filterVideosByGenre(genre) {
    const response = await fetch(API_URL);
    const result = await response.json();
    const data = result.data;

    const dataContainer = document.getElementById("list-container");
    dataContainer.innerHTML = ""; 

    data.forEach(product => {

        if (genre !== "All") {

            let productGenres = [];
            if (Array.isArray(product.genre)) {
                productGenres = product.genre;
            } else if (typeof product.genre === "string") {
                productGenres = [product.genre];
            }

            if (
                !productGenres.length ||
                !productGenres.map(g => g.toLowerCase()).includes(genre.toLowerCase())
            ) {
                return;
            }
        }

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        const imgLink = document.createElement("a");
            imgLink.href = "../products/product.html?id="+product.id;
        const img = document.createElement("img");
            img.src = product.image.url;
            img.alt = product.image.alt;
            imgLink.appendChild(img);

        const title = document.createElement("h3");
        title.textContent = product.title;

        const price = document.createElement("h3");
        price.textContent = product.price;

        const alt = document.createElement("h3");
        alt.textContent = product.image.alt;

        const href = document.createElement("a");
        href.classList.add("cta");
        href.href = "../products/product.html?id="+product.id;
        href.textContent = "View Product";

        itemDiv.appendChild(imgLink);
        itemDiv.appendChild(title);
        itemDiv.appendChild(price);
        itemDiv.appendChild(alt);
        itemDiv.appendChild(href);

        dataContainer.appendChild(itemDiv);
    });

}

