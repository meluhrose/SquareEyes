const API_URL = "https://v2.api.noroff.dev/square-eyes/";

document.addEventListener("DOMContentLoaded", () => {
    const dataContainer = document.getElementById("list-container");

    async function fetchData() {
        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("HTTP error! status: {response.status}");
            }

            const result = await response.json();
            const data = result.data;
            

            data.forEach(product => {
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

        } catch (error) {
            console.error("Error fetching data:", error);
            dataContainer.textContent = "Failed to load movies. Please try again later.";
        }
    }

    fetchData();
}); 
