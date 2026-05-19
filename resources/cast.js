// 1. Define the cast data
const castMembers = [
    { name: "TBD", role: "Nova-84", imageUrl: "https://literally2084.github.io/Nova-2084/resources/IMG_7587.png" },
    { name: "TBD", role: "Darcella", imageUrl: "via.placeholder.com" },
    { name: "StellarSky", role: "Astra Aubert", imageUrl: "via.placeholder.com" },
    { name: "Friend0", role: "Mr. Len", imageUrl: "via.placeholder.com" },
    { name: "TBD", role: "Clairette Blanchet", imageUrl: "via.placeholder.com" },
    { name: "TBD", role: "Carmen Sarahlight", imageUrl: "via.placeholder.com" },
    { name: "The808", role: "Alex Iris", imageUrl: "via.placeholder.com" },
    { name: "TBD", role: "The Visionary", imageUrl: "via.placeholder.com" },
    { name: "TBD", role: "Danny-4765", imageUrl: "via.placeholder.com" },
    { name: "TBD", role: "Hank-34828", imageUrl: "via.placeholder.com" },
    { name: "Maggie Z.", role: "Background Characters & Other", imageUrl: "via.placeholder.com" },
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
    
    if (!castListContainer) {
        return;
    }
    
    castMembers.forEach(member => {
        const card = createCastCard(member);
        castListContainer.appendChild(card);
    });
}

// 4. Call the render function when the page loads
document.addEventListener("DOMContentLoaded", renderCast);
