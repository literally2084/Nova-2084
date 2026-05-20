// 1. Define the track data
const episodes = [
    { title: "COMING SOON", url: "https://youtu.be/IUyM5pPl1h4?si=yoVb10nPjtt2yYR3", epnum: "Nova 2084 Crew", imageUrl: "https://raw.githubusercontent.com/literally2084/Nova-2084/refs/heads/main/resources/clanker.png" },
    // Add more articles as needed
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
    
    if (!episodeListContainer) {
        return;
    }
    
    episodes.forEach(episode => {
        const card = createEPCard(episode);
        episodeListContainer.appendChild(card);
    });
}

// 4. Call the render function when the page loads
document.addEventListener("DOMContentLoaded", renderEP);
