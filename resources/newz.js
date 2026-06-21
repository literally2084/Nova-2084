// 1. Define the track data
const newzs = [
    { title: "Test Broadcast", url: "https://youtu.be/Lb3HXoetOts?si=kc7X_jQ5r3QL2DRq", epnum: "???", imageUrl: "https://raw.githubusercontent.com/literally2084/Nova-2084/refs/heads/main/resources/bn-alt.png" },
    // Add more articles as needed
];

// 2. Function to create a newz nzcard element
function createNZnzcard(newz) {
    const nzcard = document.createElement("div");
    nzcard.classList.add("nzcard");

    nzcard.innerHTML = `
        <img src="${newz.imageUrl}" alt="${newz.title}">
        <div class="nzcard-info">
            <h3><a style="color: cyan;" href="${newz.url}">${newz.title}</a></h3>
            <p>${newz.epnum}</p>
        </div>
    `;
    return nzcard;
}

// 3. Function to render all newzs
function renderEP() {
    const newzListContainer = document.getElementById("newz-list");
    
    if (!newzListContainer) {
        return;
    }
    
    newzs.forEach(newz => {
        const nzcard = createNZnzcard(newz);
        newzListContainer.appendChild(nzcard);
    });
}

// 4. Call the render function when the page loads
document.addEventListener("DOMContentLoaded", renderEP);

