// 1. Define the track data
const episodes = [
    { title: "Opening Music", url: "https://youtu.be/YUCm3epjnRg?si=HR6g5ja-m3Xqbzo0", epnum: "Composed by Novaur", imageUrl: "https://raw.githubusercontent.com/literally2084/Nova-2084/refs/heads/main/resources/NOVA-2084_LOGO_GLITCHY.png" },
    { title: "LenCo./Mr. Len's Theme", url: "https://youtu.be/flOD_Fc9Y50?si=6_W8UqEk58kLvCOB", epnum: "Composed by Novaur", imageUrl: "https://black-espresso.github.io/resources/LenCo._logo.png" }
    // Add more tracks as needed
];

// 2. Function to create a episode card element
function createEPCard(episode) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${episode.imageUrl}" alt="${episode.title}">
        <div class="card-info">
            <h3><a style="color: cyan;" href="${episode.url}">${episode.title}</a></h3>
            <p>${episode.epnum}</p>
        </div>
    `;
    return card;
}

// 3. Function to render all episodes
function renderEP() {
    const episodeListContainer = document.getElementById("soundtrack-list");
    episodes.forEach(episode => {
        const card = createEPCard(episode);
        episodeListContainer.appendChild(card);
    });
}

// 4. Call the render function when the page loads
document.addEventListener("DOMContentLoaded", renderEP);

