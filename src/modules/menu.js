// MENU - Creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

export function menu() {
    console.log("menu module is running");
    // Grab content div
    const content = document.getElementById("content");

    // Clear previous content
    content.textContent = "";

    /* Generic container helper function */
    function createGenericContainer(titleText, bodyText) {
        const genericContainer = document.createElement("div");
        genericContainer.classList.add("generic-container");

        /* Inside of generic-container, assign what I passed in into divs */
        const text = document.createElement("div");
        text.classList.add("text");

        const p = document.createElement("p");
        p.textContent = titleText;

        const h2 = document.createElement("h2");
        h2.textContent = bodyText;

        text.appendChild(h2);
        text.appendChild(p);
        genericContainer.appendChild(text);
        return genericContainer;
    }
}
