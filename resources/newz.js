// 1. Define the track data
const newzs = [
    { title: "Test Broadcast", url: "https://youtu.be/Lb3HXoetOts?si=kc7X_jQ5r3QL2DRq", epnum: "???", imageUrl: "https://raw.githubusercontent.com/literally2084/Nova-2084/refs/heads/main/resources/bn-alt.png" },
    // Add more articles as needed
];

// 2. Function to create a newz card element
function createEPCard(newz) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${newz.imageUrl}" alt="${newz.title}">
        <div class="card-info">
            <h3><a style="color: cyan;" href="${newz.url}">${newz.title}</a></h3>
            <p>${newz.epnum}</p>
        </div>
    `;
    return card;
}

// 3. Function to render all newzs
function renderEP() {
    const newzListContainer = document.getElementById("newz-list");
    
    if (!newzListContainer) {
        return;
    }
    
    newzs.forEach(newz => {
        const card = createEPCard(newz);
        newzListContainer.appendChild(card);
    });
}

// 4. Call the render function when the page loads
document.addEventListener("DOMContentLoaded", renderEP);

