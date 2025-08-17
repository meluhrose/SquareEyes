document.addEventListener("DOMContentLoaded", () => {
    const dataContainer = document.getElementById("list-container");
    const API_URL = "https://v2.api.noroff.dev/square-eyes";

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
                itemDiv.appendChild(title);

                itemDiv.appendChild(img);
                dataContainer.appendChild(itemDiv);
            });

        } catch (error) {
            console.error("Error fetching data:", error);
            dataContainer.textContent = "Failed to load data. Please try again later.";
        }
    }

    fetchData();
});
