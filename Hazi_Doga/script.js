document.addEventListener("DOMContentLoaded", () => {
    const API_URL = "https://nodejs111.dszcbaross.edu.hu/api/movie";
    const gallery = document.getElementById("gallery");
    const movieList = document.getElementById("movie-list");

    async function loadContent() {
        try {
            const response = await fetch(API_URL);
            const movies = await response.json();
            
            gallery.innerHTML = "";
            movieList.innerHTML = "";

            movies.forEach((movie, index) => {
        
                const li = document.createElement("li");
                li.innerHTML = `<a href="#movie-${index}">${movie.title}</a>`;
                movieList.appendChild(li);

                const card = document.createElement("div");
                card.className = "card";
                card.id = `movie-${index}`;
                
                const category = movie.category || "film";
                const age = movie.ageLimit || "12";

                card.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title}">
                    <div class="card-overlay">
                        <h3>${movie.title}</h3>
                        <div class="card-tags">
                            <span class="tag">${category}</span>
                            <span class="tag age-tag">${age}+</span>
                        </div>
                    </div>
                `;
                gallery.appendChild(card);
            });
        } catch (error) {
            gallery.innerHTML = "<p>Hiba történt az adatok betöltésekor.</p>";
            console.error(error);
        }
    }

    loadContent();
});
