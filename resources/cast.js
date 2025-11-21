// 1. Define the cast data
const castMembers = [
    { name: "TBD", role: "Nova Glitchy", imageUrl: "via.placeholder.com" },
    { name: "TBD", role: "Darcella", imageUrl: "via.placeholder.com" },
    { name: "StellarSky", role: "Astra Aubert", imageUrl: "via.placeholder.com" },
    { name: "Friend0", role: "Mr. Len", imageUrl: "via.placeholder.com" },
    { name: "TBD", role: "Clairette Blanchet", imageUrl: "via.placeholder.com" },
    { name: "TBD", role: "Le Cafe de Plexville Commercial Narrator", imageUrl: "via.placeholder.com" },
    { name: "TBD", role: "Carmen Sarahlight", imageUrl: "via.placeholder.com" },
    { name: "TBD", role: "World President Alex", imageUrl: "via.placeholder.com" },
    { name: "Novaur", role: "NEWZ Bot", imageUrl: "via.placeholder.com" },
    { name: "TBD", role: "Cici", imageUrl: "via.placeholder.com" },
    { name: "TBD", role: "Danny Jane", imageUrl: "via.placeholder.com" },
    { name: "StellarSky", role: "NEWZ Secondary Reporter", imageUrl: "via.placeholder.com" },
    { name: "TBD", role: "Alex's Associate Elite #1", imageUrl: "via.placeholder.com" },
    { name: "TBD", role: "Alex's Associate Elite #2", imageUrl: "via.placeholder.com" },
    { name: "TBD", role: "Guards #1 & #2, Man #1 & Woman #1", imageUrl: "via.placeholder.com" },
    // Add more cast members as needed
];

// 2. Function to create a cast card element
function createCastCard(member) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${member.imageUrl}" alt="${member.name}">
        <div class="card-info">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        </div>
    `;
    return card;
}

// 3. Function to render all cast members
function renderCast() {
    const castListContainer = document.getElementById("cast-list");
    castMembers.forEach(member => {
        const card = createCastCard(member);
        castListContainer.appendChild(card);
    });
}

// 4. Call the render function when the page loads
document.addEventListener("DOMContentLoaded", renderCast);

