async function loadPage(pageUrl) {
    console.log("Loading page:", pageUrl);
    const contentArea = document.getElementById('content-area');

    try {
        const response = await fetch(pageUrl);
        if (!response.ok) throw new Error('Page not found');

        const html = await response.text();
        contentArea.innerHTML = html;
        
        if (pageUrl.includes('cast.html')) {
            if (typeof renderCast === 'function') {
                renderCast(); 
            }
        } else if (pageUrl.includes('newz.html')) {
            if (typeof renderEP === 'function') {
                renderEP();
            }
        }

    } catch (err) {
        console.error("Fetch error:", err);
        contentArea.innerHTML = "<h2>Error loading page</h2>";
    }
}
