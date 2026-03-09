// 1. Define the episode data
const episodes = [
    { title: "Literally 2084", url: "./pilot.html", epnum: "Pilot/Episode 1", imageUrl: "https://static.wikia.nocookie.net/nova-2084/images/0/08/Site-background-dark/revision/latest?cb=20251104205733" },
    // Add more episodes as needed
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
    const episodeListContainer = document.getElementById("episodes-list");
    episodes.forEach(episode => {
        const card = createEPCard(episode);
        episodeListContainer.appendChild(card);
    });
}

// 4. Call the render function when the page loads
document.addEventListener("DOMContentLoaded", renderEP);

